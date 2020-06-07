import { TestWindow } from '@stencil/core/testing';
import { ContactFormSubmited } from './contact-form-submited';

describe('contact-form-submited', () => {
  it('should build', () => {
    expect(new ContactFormSubmited()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLContactFormSubmitedElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [ContactFormSubmited],
        html: '<contact-form-submited>' 
          + '</contact-form-submited>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
