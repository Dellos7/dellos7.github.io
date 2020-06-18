import { Component, h } from '@stencil/core';
import{ Helmet } from '@stencil/helmet';
import seoConfig from '../../global/seo-config';

@Component({
  tag: 'about-page',
  styleUrl: 'about-page.scss'
})
export class AboutPage {

  render() {
    return (
      <div class="about-page">
        <Helmet>
        <title>{seoConfig.about.title}</title>
          <meta property="og:title" content={seoConfig.about.title} />
          <meta property="og:image" content={seoConfig.about.image} />
          <meta property="og:url" content={window.location.origin+window.location.pathname} />
          <link rel="canonical" href={window.location.origin+window.location.pathname}/>
          { seoConfig.about.description ? <meta name="description" content={seoConfig.about.description} /> : '' }
          { seoConfig.about.description ? <meta name="og:description" property="og:description" content={seoConfig.about.description} /> : '' }
          { seoConfig.about.description ? <meta name="twitter:description" content={seoConfig.about.description} /> : '' }
          <meta name="twitter:title" content={seoConfig.about.title} />
          <meta name="twitter:card" content={seoConfig.about.image} />
          <meta name="twitter:site" content={seoConfig.twitterUser} />
          <meta name="twitter:image" content={seoConfig.about.image} />
        </Helmet>
        <header>
          <user-name content="Sobre mí" showDomain={true}></user-name>
        </header>
        <main>
          <p style={ {textAlign: 'center'} }>🔨</p>
        </main>
      </div>
    );
  }
}
