import { TestWindow } from '@stencil/core/testing';
import { AboutPage } from './about-page';

describe('about-page', () => {
  it('should build', () => {
    expect(new AboutPage()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLAboutPageElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [AboutPage],
        html: '<about-page>' 
          + '</about-page>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
