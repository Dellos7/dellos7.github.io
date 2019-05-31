import { TestWindow } from '@stencil/core/testing';
import { MenuButton } from './menu-button';

describe('menu-button', () => {
  it('should build', () => {
    expect(new MenuButton()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLMenuButtonElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [MenuButton],
        html: '<menu-button></menu-button>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
