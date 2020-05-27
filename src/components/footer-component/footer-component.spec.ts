import { TestWindow } from '@stencil/core/testing';
import { FooterComponent } from './footer-component';

describe('footer-component', () => {
  it('should build', () => {
    expect(new FooterComponent()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLFooterComponentElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [FooterComponent],
        html: '<footer-component>' 
          + '</footer-component>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
