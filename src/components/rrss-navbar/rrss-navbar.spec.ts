import { TestWindow } from '@stencil/core/testing';
import { RrssNavbar } from './rrss-navbar';

describe('rrss-navbar', () => {
  it('should build', () => {
    expect(new RrssNavbar()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLRrssNavbarElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [RrssNavbar],
        html: '<rrss-navbar></rrss-navbar>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
