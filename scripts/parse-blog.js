const fs = require('fs-extra');
const matter = require('gray-matter');
const Remarkable = require('remarkable');
const dotenv = require('dotenv');
const unsplashRandomImage = require('./unsplash-random-image');
const codehightlight = require('./codehighlight');
const processImages = require('./processImages');
const toc = require('markdown-toc');
const md = new Remarkable();
md.set({
    html: true
});
// Anyadir ids a los headings
md.use(function(remarkable) {
    remarkable.renderer.rules.heading_open = function(tokens, idx) {
      //return '<h' + tokens[idx].hLevel + ' id=' + toc.slugify(tokens[idx + 1].content) + '>';
      return '<h' + tokens[idx].hLevel + '>' + '<span class="h-anchor" id="' + toc.slugify(tokens[idx + 1].content) + '">' + '</span>';
    };
  });

const readConfigFile = () => {
    return new Promise( (resolve, reject) => {
        let configFileName = 'blog.config.json';
        dotenv.config();
        if( process.env.NODE_ENV == 'DEVELOPMENT' ){
            configFileName = process.env.BLOG_CONFIG_FILE;
        }
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

const existsImageForPost = (postName, imagesDir) => {
    return new Promise( (resolve, reject) => {
        fs.readdir( imagesDir, (err, files) => {
            if( err ){
                console.err(err);
                reject(err);
            }
            if( files && files.length > 0 ){
                const f = files.filter( (file) => {
                    return file.includes(postName);
                });
                if( f && f.length > 0 ){
                    resolve(f[0]);
                } else{
                    resolve(false);
                }
            } else{
                resolve(false);
            }
        });
    });
};

const parseBlog = async (blogMdDir, blogDir, projectSrc, postsRoute, imagesBlogDir, imagesContentDir) => {
    const blogDirPath = blogDir;
    const imagesDirPath = imagesContentDir;
    const blogDirWww = `www/${blogDir}`;
    blogDir = `${projectSrc}/${blogDir}`;
    const imagesContentDirWww = `www/${imagesContentDir}`;
    imagesContentDir = `${projectSrc}/${imagesContentDir}`;
    if (!fs.existsSync(blogMdDir)) {
        fs.mkdirSync(blogMdDir);
    }
    if (!fs.existsSync(imagesBlogDir)) {
        fs.mkdirSync(imagesBlogDir);
    }
    console.log(`Starting blog parse... `);
    fs.readdir(blogMdDir, async(err, files) => {
        console.log(`> Reading files from ${blogMdDir}`);
        if (err) {
            console.error(err);
        }
        // Crear o vaciar los directorios donde va el contenido
        if (!fs.existsSync(blogDir)) {
            fs.mkdirSync(blogDir);
        } else{
            fs.emptyDirSync(blogDir);
            fs.emptyDirSync(blogDirWww);
        }
        if( !fs.existsSync(imagesContentDir) ){
            fs.mkdirSync(imagesContentDir);
        } else{
            fs.emptyDirSync(imagesContentDir);
            fs.emptyDirSync(imagesContentDirWww);
        }

        if (files && files.length > 0) {
            console.log(`> ${files.length} files found!`);
            if (!fs.existsSync(imagesBlogDir)) {
                fs.mkdirSync(imagesBlogDir);
            }
        }
        let i = 0;
        let fileNames = [];
        for( let _file of files ){
            let fileContent = fs.readFileSync(`${blogMdDir}/${_file}`, 'utf8');
            let contentMatter = matter(fileContent);
            // Insertar tabla de contenidos etiquetada con <!-- toc -->
            let mdContent = toc.insert(contentMatter.content);
            let contentHtml = md.render(mdContent);
            contentHtml = processImages.convertImagesSources( contentHtml, `/${imagesDirPath}`, true );
            contentHtml = codehightlight.highlight( contentHtml );
            try {
                let metadata = contentMatter.data;
                let fileNameNoExtension = _file.substring(0,_file.lastIndexOf('.')); 
                let fileName = fileNameNoExtension + '.html';
                // Guardar el html en el directorio correspondiente
                fs.writeFileSync(`${blogDir}/${fileName}`, contentHtml);
                i++;
                let file = `/${blogDirPath}/${fileName}`;
                let imageSourcePath = `${imagesBlogDir}/${fileNameNoExtension}.jpg`;
                let imageContentDir = `${imagesContentDir}/${fileNameNoExtension}.jpg`;
                let image = '';
                // No tiene asociada una imagen en el frontmatter
                if( !metadata.image ){
                    // Comprobamos si existe una imagen guardada en el directorio de imágenes de este post
                    const imageForPost = await existsImageForPost( fileNameNoExtension, imagesBlogDir );
                    if( imageForPost ){
                        image = `/${imagesDirPath}/${imageForPost}`;
                    } else{
                        // Descargamos una imagen aleatoria de unsplash y la guardamos en el directorio de imágenes
                        await unsplashRandomImage.download( imageSourcePath );
                        image = `/${imagesDirPath}/${fileNameNoExtension}.jpg`;
                    }
                } else if( !metadata.image.startsWith('http://') && !metadata.image.startsWith('https://') ){
                    imageSourcePath = `${imagesBlogDir}/${metadata.image}`;
                    imageContentDir = `${imagesContentDir}/${metadata.image}`;
                    image = `/${imagesDirPath}/${metadata.image}`;
                } else{
                    image = metadata.image;
                }
                // if( fs.existsSync(imageSourcePath) && !fs.existsSync( imageContentDir ) ){
                //     fs.copyFileSync( imageSourcePath, imageContentDir );
                // }
                metadata.image = image;
                fileNames.push({
                    unique_link: fileNameNoExtension,
                    file,
                    metadata
                });
            } catch (err) { console.error(err); }
        }
        if (fileNames && fileNames.length > 0) {
            let posts = {
                posts: fileNames,
                postsRoute: postsRoute
            };
            fs.writeFileSync(`${projectSrc}/posts.json`, JSON.stringify(posts));
        } else{
            fs.writeFileSync(`${projectSrc}/posts.json`,JSON.stringify({}));
        }
        console.log(`> ${i} files parsed and created in ${blogDir}!`);
        fs.copy( imagesBlogDir, imagesContentDir, (err) => {
            if( err ){
                console.error(`ERROR COPYING IMAGES FROM ${imagesBlogDir} to ${imagesContentDir}`, err);
            }
        });
    });
};

readConfigFile()
.then( async (config) => {
    await parseBlog(
        config.blog_src_dir ? config.blog_src_dir : 'blog-md', 
        config.blog_content_dir ? config.blog_content_dir : '__blog',
        config.project_src ? config.project_src : 'src',
        config.posts_route ? config.posts_route : 'post',
        config.images_src_dir ? config.images_src_dir : 'content/blog-imgs',
        config.images_content_dir ? config.images_content_dir : 'assets/blog'
    );
})
.catch( (error) => {
    console.error(error);
});


// (async () => {
//     console.log('before');
//     const res = await existsImageForPost( 'index', 'content/blog-imgs' );
//     console.log('after', res);
// })();