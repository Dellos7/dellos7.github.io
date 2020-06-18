const convertImagesSources = ( html, targetImagesDir, lazyLoad ) => {
    const getImageTagAndSrcRegexp = new RegExp(/<img(.|\s)*?src="(.|\s)*?"/, 'ig');
    const res = html.replace( getImageTagAndSrcRegexp, (str) => {
        const srcRegExp = new RegExp(/src="(.|\s)*?"/, 'i');
        const imagePath = str.substring( str.indexOf(`src="`) + 5, str.length-1 );
        if( imagePath.startsWith('http://') || imagePath.startsWith('https://') ){
            return str;
        }
        const idxFrom = imagePath.lastIndexOf("/") + 1;
        const imageName = imagePath.substring(idxFrom, imagePath.length);
        const newImageSrc = `src="${targetImagesDir}/${imageName}"${lazyLoad ? ' loading="lazy"' : ''}`;
        str = str.replace( srcRegExp, newImageSrc );
        return str;
    });
    return res;
};

module.exports = {
    convertImagesSources
};