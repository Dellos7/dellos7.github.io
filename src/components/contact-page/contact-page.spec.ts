import { TestWindow } from '@stencil/core/testing';
import { ContactPage } from './contact-page';

describe('contact-page', () => {
  it('should build', () => {
    expect(new ContactPage()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLContactPageElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [ContactPage],
        html: '<contact-page>' 
          + '</contact-page>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
