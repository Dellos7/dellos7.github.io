import { Component, h } from '@stencil/core';
import{ Helmet } from '@stencil/helmet';
import seoConfig from '../../global/seo-config';

@Component({
  tag: 'about-page',
  styleUrl: 'about-page.css'
})
export class AboutPage {

  render() {
    return (
      <div>
        <Helmet>
          <title>Sobre mí {seoConfig.pageTitleSuffix}</title>
        </Helmet>
        <header>
          <user-name content="Sobre mí" showDomain={true}></user-name>
        </header>
        <p style={ {textAlign: 'center'} }>🔨</p>
      </div>
    );
  }
}
