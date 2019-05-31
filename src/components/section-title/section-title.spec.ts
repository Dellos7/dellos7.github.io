import { TestWindow } from '@stencil/core/testing';
import { SectionTitle } from './section-title';

describe('section-title', () => {
  it('should build', () => {
    expect(new SectionTitle()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLSectionTitleElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [SectionTitle],
        html: '<section-title></section-title>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
