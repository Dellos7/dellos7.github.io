const fs = require('fs-extra');
const Remarkable = require('remarkable');
const matter = require('gray-matter');
const md = new Remarkable();
md.set({
    html: true
});

const args = process.argv.slice(2);
const devConfigJsonFile = 'blog.config.dev.json';
const prodConfigJsonFile = 'blog.config.json';
const [mdFile] = args;
if( mdFile ){
    readConfFiles()
    .then( async( [devConfigJsonFileContent, prodConfigJsonFileContent] ) => {
        let fileContent = fs.readFileSync(`${mdFile}`, 'utf8');
        let contentMatter = matter(fileContent);
        const metadata = contentMatter.data;
        if( metadata.image && !metadata.image.startsWith('http://') && !metadata.image.startsWith('https://') ){
            fs.copyFileSync( `${devConfigJsonFileContent.images_src_dir}/${metadata.image}`, `${prodConfigJsonFileContent.images_src_dir}/${metadata.image}` );
        }
        let contentHtml = md.render(contentMatter.content);
        // Get the image names of the post
        const imagesNames = getImagesNames(contentHtml);
        const imagesNamesDev = imagesNames.map( (name) => `${devConfigJsonFileContent.images_src_dir}/${name}` );
        const imagesNamesProd = imagesNames.map( (name) => `${prodConfigJsonFileContent.images_src_dir}/${name}` );
        // Copy all the files of the post from the dev dir to the prod dir
        for( let i = 0; i < imagesNames.length; i++ ){
            fs.copyFileSync( imagesNamesDev[i], imagesNamesProd[i] );
        }
        console.log(`-> ${imagesNames.length} images copied from ${devConfigJsonFileContent.images_src_dir} to ${prodConfigJsonFileContent.images_src_dir}`);
        const mdFileName = mdFile.substring( mdFile.lastIndexOf('/') + 1 );
        // Copy the markdown post file
        fs.copyFileSync( mdFile, `${prodConfigJsonFileContent.blog_src_dir}/${mdFileName}` );
        console.log(`-> Blog file copied: ${mdFile} to ${prodConfigJsonFileContent.blog_src_dir}/${mdFileName}`);
    });

} else{
    console.error( 'No blog development markdown file provided.' );
}


function readConfFiles() {
    const devConfigFileProm = new Promise( (resolve, reject) => {
        fs.readFile(devConfigJsonFile, 'utf-8', (err, data) => {
            if( err ) {
                const error = `Something went wrong when reading the ${devConfigJsonFile} config file: ${err}`;
                reject(error);
            }
            else {
                resolve(JSON.parse(data));
            }
        });
    });
    const prodConfigFileProm = new Promise( (resolve, reject) => {
        fs.readFile(prodConfigJsonFile, 'utf-8', (err, data) => {
            if( err ) {
                const error = `Something went wrong when reading the ${prodConfigJsonFile} config file: ${err}`;
                reject(error);
            }
            else {
                resolve(JSON.parse(data));
            }
        });
    });
    return Promise.all( [devConfigFileProm, prodConfigFileProm] );
}

function getImagesNames( contentHtml ){
    const getImageTagAndSrcRegexp = new RegExp(/<img(.|\s)*?src="(.|\s)*?"/, 'ig');
    const imagesArr = contentHtml.match( getImageTagAndSrcRegexp );
    let imageNamesArr = [];
    if( imagesArr ){
        for( const img of imagesArr ){
            const imagePath = img.substring( img.indexOf(`src="`) + 5, img.length-1 );
            const imageName = imagePath.substring( imagePath.lastIndexOf('/') + 1 );
            imageNamesArr.push(imageName);
        }
    }
    return imageNamesArr;
}