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
        <div class="oos-site">
          <a href="https://github.com/Dellos7/dellos7.github.io/tree/source" target="_blank" rel="noopener noreferrer"><ion-icon name="logo-github"></ion-icon>&nbsp;Está página es open source</a>
        </div>
      </div>
    );
  }
}
