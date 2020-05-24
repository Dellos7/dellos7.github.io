const fs = require('fs');
const matter = require('gray-matter');
const Remarkable = require('remarkable');
const crypto = require('crypto');
const unsplashRandomImage = require('./unsplash-random-image');
const md = new Remarkable();

const randomString = () => {
    const curDate = (new Date()).valueOf().toString();
    const random = Math.random().toString();
    return crypto.createHash('sha1').update(curDate + random).digest('hex');
};

const readConfigFile = () => {
    return new Promise( (resolve, reject) => {
        const configFileName = 'blog.config.json';
        fs.readFile(configFileName, 'utf-8', (err, data) => {
            if( err ) {
                const error = `Something went wrong when reading the ${configFileName} config file: ${err}`;
                reject(error);
            }
            else {
                resolve(JSON.parse(data));
            }
        });
    });
};

const parseBlog = async (blogMdDir, blogDir, projectSrc, postsRoute, imagesBlogDir, imagesContentDir) => {
    const blogDirPath = blogDir;
    const imagesDirPath = imagesContentDir;
    blogDir = `${projectSrc}/${blogDir}`;
    imagesContentDir = `${projectSrc}/${imagesContentDir}`;
    console.log(blogDir);
    console.log(`Starting blog parse... `);
    fs.readdir(blogMdDir, (err, files) => {
        console.log(`> Reading files from ${blogMdDir}`);
        if (err) {
            console.error(err);
        }
        if (files && files.length > 0) {
            console.log(`> ${files.length} files found!`);
            if (!fs.existsSync(blogDir)) {
                fs.mkdirSync(blogDir);
            }
        }
        let i = 0;
        let fileNames = [];
        files.forEach( async(_file) => {
            let fileContent = fs.readFileSync(`${blogMdDir}/${_file}`, 'utf8');
            let contentMatter = matter(fileContent);
            let contentHtml = md.render(contentMatter.content);
            try {
                let metadata = contentMatter.data;
                let fileNameNoExtension = _file.substring(0,_file.lastIndexOf('.')); 
                let fileName = fileNameNoExtension + '.html';
                fs.writeFileSync(`${blogDir}/${fileName}`, contentHtml);
                i++;
                let file = `/${blogDirPath}/${fileName}`;
                // TODO 1: copiar siempre la imagen del blog si es de "content/blog-imgs" a donde toque
                // (no solo las descargadas)
                // TODO 2: guardar de alguna forma la imagen para cada blog, si lo dejamos así, se genera
                // una imagen random diferente para cada blog que no tiene imagen. ¿Modificar el markdown?
                if( !metadata.image ){
                    if (!fs.existsSync(imagesBlogDir)) {
                        fs.mkdirSync(imagesBlogDir);
                    }
                    if( !fs.existsSync(imagesContentDir) ){
                        fs.mkdirSync(imagesContentDir);
                    }
                    const randomStr = randomString();
                    const imageSourcePath = `${imagesBlogDir}/${randomStr}.jpg`;
                    const imageContentDir = `${imagesContentDir}/${randomStr}.jpg`;
                    unsplashRandomImage.download( imageSourcePath ).then( () => {
                        fs.copyFileSync( imageSourcePath, imageContentDir );
                    });
                    const image = `/${imagesDirPath}/${randomStr}.jpg`;
                    metadata.image = image;
                }
                fileNames.push({
                    unique_link: fileNameNoExtension,
                    file,
                    metadata
                });
            } catch (err) { console.error(err); }
        });
        if (fileNames && fileNames.length > 0) {
            let posts = {
                posts: fileNames,
                postsRoute: postsRoute
            };
            fs.writeFileSync(`${projectSrc}/posts.json`, JSON.stringify(posts));
        }
        console.log(`> ${i} files parsed and created in ${blogDir}!`);
    });
};

readConfigFile()
.then( async (config) => {
    await parseBlog(
        config.blog_src_dir ? config.blog_src_dir : 'blog-md', 
        config.blog_content_dir ? config.blog_content_dir : 'blog',
        config.project_src ? config.project_src : 'src',
        config.posts_route ? config.posts_route : 'post',
        config.images_src_dir ? config.images_src_dir : 'content/blog-imgs',
        config.images_content_dir ? config.images_content_dir : 'assets/blog'
    );
})
.catch( (error) => {
    console.error(error);
});