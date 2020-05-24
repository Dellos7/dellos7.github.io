const axios = require('axios');
const fs = require('fs');

const downloadImage = async( url, imagePath ) => {
    const response = await axios({
        url,
        responseType: 'stream'
    });
    const fileWriter = fs.createWriteStream(imagePath);
    response.data.pipe( fileWriter );
    return new Promise( (resolve, reject) => {
        fileWriter.on('finish', resolve);
        fileWriter.on('error', reject);
    });
};

const downloadUnsplashRandomImage = async( imagePath ) => {
    const url = 'https://source.unsplash.com/random/1600x900/?nature,water';
    return new Promise( async(resolve, reject) => {
        try{
            await downloadImage( url, imagePath );
            resolve();
        } catch(e){
            reject(e);
        }
    });
};

module.exports = {
    download: downloadUnsplashRandomImage
};