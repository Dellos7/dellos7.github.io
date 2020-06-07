import { TestWindow } from '@stencil/core/testing';
import { ContactFormError } from './contact-form-error';

describe('contact-form-error', () => {
  it('should build', () => {
    expect(new ContactFormError()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLContactFormErrorElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [ContactFormError],
        html: '<contact-form-error>' 
          + '</contact-form-error>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
