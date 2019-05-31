import { TestWindow } from '@stencil/core/testing';
import { ProfileImage } from './profile-image';

describe('profile-image', () => {
  it('should build', () => {
    expect(new ProfileImage()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLProfileImageElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [ProfileImage],
        html: '<profile-image></profile-image>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
