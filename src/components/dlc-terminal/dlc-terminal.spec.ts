import { TestWindow } from '@stencil/core/testing';
import { DlcTerminal } from './dlc-terminal';

describe('dlc-terminal', () => {
  it('should build', () => {
    expect(new DlcTerminal()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLDlcTerminalElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [DlcTerminal],
        html: '<dlc-terminal></dlc-terminal>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
