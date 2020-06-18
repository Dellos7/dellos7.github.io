const processImages = require('../processImages');

test('convertImagesSources: converts images from html with only one img tag and lazy load', () => {
    const html = `
<h1>Title</h1>
<p><img src="/content/blog-imgs-test/image.png" alt="image description"></p>
    `;
    const targetImagesDir = '/assets/blog';
    const lazyLoad = true;
    const expectedHtml = `
<h1>Title</h1>
<p><img src="/assets/blog/image.png" loading="lazy" alt="image description"></p>
    `;
    const resHtml = processImages.convertImagesSources( html, targetImagesDir, lazyLoad );
    expect(resHtml).toBe(expectedHtml);
});

test('convertImagesSources: converts images from html with only one img tag and not lazy load', () => {
    const html = `
<h1>Title</h1>
<p><img src="/content/blog-imgs-test/image.png" alt="image description"></p>
    `;
    const targetImagesDir = '/assets/blog';
    const lazyLoad = false;
    const expectedHtml = `
<h1>Title</h1>
<p><img src="/assets/blog/image.png" alt="image description"></p>
    `;
    const resHtml = processImages.convertImagesSources( html, targetImagesDir, lazyLoad );
    expect(resHtml).toBe(expectedHtml);
});

test('convertImagesSources: converts images from html with two img tags and lazy load', () => {
    const html = `
<h1>Title</h1>
<p><img src="/content/blog-imgs-test/image1.png" alt="image description"></p>
<p><img src="/content/blog-imgs-test/image2.png" alt="image description"></p>
    `;
    const targetImagesDir = '/assets/blog';
    const lazyLoad = true;
    const expectedHtml = `
<h1>Title</h1>
<p><img src="/assets/blog/image1.png" loading="lazy" alt="image description"></p>
<p><img src="/assets/blog/image2.png" loading="lazy" alt="image description"></p>
    `;
    const resHtml = processImages.convertImagesSources( html, targetImagesDir, lazyLoad );
    expect(resHtml).toBe(expectedHtml);
});

test('convertImagesSources: converts images from html with two img tags and not lazy load', () => {
    const html = `
<h1>Title</h1>
<p><img src="/content/blog-imgs-test/image1.png" alt="image description"></p>
<p><img src="/content/blog-imgs-test/image2.png" alt="image description"></p>
    `;
    const targetImagesDir = '/assets/blog';
    const lazyLoad = false;
    const expectedHtml = `
<h1>Title</h1>
<p><img src="/assets/blog/image1.png" alt="image description"></p>
<p><img src="/assets/blog/image2.png" alt="image description"></p>
    `;
    const resHtml = processImages.convertImagesSources( html, targetImagesDir, lazyLoad );
    expect(resHtml).toBe(expectedHtml);
});

test('convertImagesSources: converts images from html with one img tag and one iframe tag and lazy load', () => {
    const html = `
<h1>Title</h1>
<p><img src="/content/blog-imgs-test/image1.png" alt="image description"></p>
<p><iframe width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=-0.04865795373916626%2C39.97580464281733%2C-0.045117437839508064%2C39.97758255729108&amp;layer=mapnik" style="border: 1px solid black"></iframe></p>
    `;
    const targetImagesDir = '/assets/blog';
    const lazyLoad = true;
    const expectedHtml = `
<h1>Title</h1>
<p><img src="/assets/blog/image1.png" loading="lazy" alt="image description"></p>
<p><iframe width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=-0.04865795373916626%2C39.97580464281733%2C-0.045117437839508064%2C39.97758255729108&amp;layer=mapnik" style="border: 1px solid black"></iframe></p>
    `;
    const resHtml = processImages.convertImagesSources( html, targetImagesDir, lazyLoad );
    expect(resHtml).toBe(expectedHtml);
});

test('convertImagesSources: do not convert image with external url in src and lazy load, only 1 img tag', () => {
    const html = `
<h1>Title</h1>
<p><img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="image description"></p>
    `;
    const targetImagesDir = '/assets/blog';
    const lazyLoad = true;
    const expectedHtml = `
<h1>Title</h1>
<p><img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="image description"></p>
    `;
    const resHtml = processImages.convertImagesSources( html, targetImagesDir, lazyLoad );
    expect(resHtml).toBe(expectedHtml);
});