import { TestWindow } from '@stencil/core/testing';
import { PageNotFound } from './page-not-found';

describe('page-not-found', () => {
  it('should build', () => {
    expect(new PageNotFound()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLPageNotFoundElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [PageNotFound],
        html: '<page-not-found>' 
          + '</page-not-found>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
