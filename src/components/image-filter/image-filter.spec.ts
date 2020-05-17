import { TestWindow } from '@stencil/core/testing';
import { ImageFilter } from './image-filter';

describe('image-filter', () => {
  it('should build', () => {
    expect(new ImageFilter()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLImageFilterElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [ImageFilter],
        html: '<image-filter>' 
          + '</image-filter>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
