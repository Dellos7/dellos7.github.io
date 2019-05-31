import { TestWindow } from '@stencil/core/testing';
import { UserName } from './user-name';

describe('user-name', () => {
  it('should build', () => {
    expect(new UserName()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLUserNameElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [UserName],
        html: '<user-name></user-name>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
