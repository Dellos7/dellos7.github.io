import { Component, h } from '@stencil/core';
import seoConfig from '../../global/seo-config';
import { SeoTagsData } from 'dlc-seo-tags';

const seoData: SeoTagsData = {
  title: seoConfig.root.title,
  meta: [
    { name: 'description', content: seoConfig.root.description },
    { property: 'og:title', content: seoConfig.root.title },
    { property: 'og:description', content: seoConfig.root.description },
    { property: 'og:image', content: seoConfig.root.image },
    { property: 'og:url', content: `${window.location.origin}${window.location.pathname}` },
    { name: 'twitter:title', content: seoConfig.root.title },
    { name: 'twitter:description', content: seoConfig.root.description },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:site', content: seoConfig.twitterUser },
    { name: 'twitter:creator', content: seoConfig.twitterUser },
    { name: 'twitter:image', content: seoConfig.root.image },
  ],
  links: [
    { rel: 'canonical', href: `${window.location.origin}${window.location.pathname}` }
  ]
};

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss'
})
export class AppHome {

  render() {
    return (
      <div class='app-home'>
        {/* <Helmet>
        <title>{seoConfig.root.title}</title>
          <meta property="og:title" content={seoConfig.root.title} />
          <meta property="og:image" content={seoConfig.root.image} />
          <meta property="og:url" content={window.location.origin+window.location.pathname} />
          <link rel="canonical" href={window.location.origin+window.location.pathname}/>
          { seoConfig.root.description ? <meta name="description" content={seoConfig.root.description} /> : '' }
          { seoConfig.root.description ? <meta name="og:description" property="og:description" content={seoConfig.root.description} /> : '' }
          { seoConfig.root.description ? <meta name="twitter:description" content={seoConfig.root.description} /> : '' }
          <meta name="twitter:title" content={seoConfig.root.title} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content={seoConfig.twitterUser} />
          <meta name="twitter:image" content={seoConfig.root.image} />
        </Helmet> */}
        <dlc-seo-tags data={seoData}></dlc-seo-tags>
        <header>
          <user-name content="david lópez castellote" link="/"></user-name>
        </header>
        <main>
          <dlc-terminal></dlc-terminal>
        </main>
      </div>
    );
  }
}
