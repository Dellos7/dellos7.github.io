import { Component, h } from '@stencil/core';


@Component({
  tag: 'footer-component',
  styleUrl: 'footer-component.scss'
})
export class FooterComponent {

  render() {
    return (
      <div class="footer">
        <div class="copyright">
          david lópez castellote Ⓒ { new Date().getFullYear() }
        </div>
      </div>
    );
  }
}
