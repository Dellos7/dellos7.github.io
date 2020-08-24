import { Component, h } from '@stencil/core';
//import{ Helmet } from '@stencil/helmet';
import seoConfig from '../../global/seo-config';
import { SeoTagsData } from 'dlc-seo-tags';

const seoData: SeoTagsData = {
  title: seoConfig.about.title + seoConfig.titleSuffix,
  meta: [
    { name: 'description', content: seoConfig.about.description },
    { property: 'og:title', content: seoConfig.about.title },
    { property: 'og:description', content: seoConfig.about.description },
    { property: 'og:image', content: seoConfig.about.image },
    { property: 'og:url', content: `${window.location.origin}${window.location.pathname}` },
    { name: 'twitter:title', content: seoConfig.about.title },
    { name: 'twitter:description', content: seoConfig.about.description },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:site', content: seoConfig.twitterUser },
    { name: 'twitter:creator', content: seoConfig.twitterUser },
    { name: 'twitter:image', content: seoConfig.about.image },
  ],
  links: [
    { rel: 'canonical', href: `${window.location.origin}${window.location.pathname}` }
  ]
};

@Component({
  tag: 'about-page',
  styleUrl: 'about-page.scss'
})
export class AboutPage {

  render() {
    return (
      <div class="about-page">
        {/* <Helmet>
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
        </Helmet> */}
        <dlc-seo-tags data={seoData}></dlc-seo-tags>
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
