import { TestWindow } from '@stencil/core/testing';
import { AboutSection } from './about-section';

describe('about-section', () => {
  it('should build', () => {
    expect(new AboutSection()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLAboutSectionElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [AboutSection],
        html: '<about-section></about-section>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
