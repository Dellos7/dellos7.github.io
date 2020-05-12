import { TestWindow } from '@stencil/core/testing';
import { NavigationBar } from './navigation-bar';

describe('navigation-bar', () => {
  it('should build', () => {
    expect(new NavigationBar()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLNavigationBarElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [NavigationBar],
        html: '<navigation-bar>' 
          + '</navigation-bar>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
