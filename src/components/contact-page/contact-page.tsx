import { Component, h } from '@stencil/core';
import { Helmet } from '@stencil/helmet';
import seoConfig from '../../global/seo-config';

@Component({
  tag: 'contact-page',
  styleUrl: 'contact-page.css'
})
export class ContactPage {

  render() {
    return (
      <div>
        <Helmet>
          <title>Sobre mí {seoConfig.pageTitleSuffix}</title>
        </Helmet>
        <header>
          <user-name content="Contacto" showDomain={true}></user-name>
        </header>
        <p style={ {textAlign: 'center'} }>🔨</p>
      </div>
    );
  }
}
