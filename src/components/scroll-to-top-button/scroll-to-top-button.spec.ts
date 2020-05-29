import { TestWindow } from '@stencil/core/testing';
import { ScrollToTopButton } from './scroll-to-top-button';

describe('scroll-to-top-button', () => {
  it('should build', () => {
    expect(new ScrollToTopButton()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLScrollToTopButtonElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [ScrollToTopButton],
        html: '<scroll-to-top-button>' 
          + '</scroll-to-top-button>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
