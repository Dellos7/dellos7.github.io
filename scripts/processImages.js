const process = ( html, targetImagesDir, lazyLoad ) => {
    const replaceImagesSrcRegExp = new RegExp(/src="(.|\s)*?"/, 'ig');
    const res = html.replace( replaceImagesSrcRegExp, (str) => {
        const idxFrom = str.lastIndexOf("/") + 1;
        const imageName = str.substring(idxFrom, str.length-1);
        const newImageSrc = `src="${targetImagesDir}/${imageName}"${lazyLoad ? ' loading="lazy"' : ''}`;
        return newImageSrc;
    });
    return res;
};

module.exports = {
    process
};