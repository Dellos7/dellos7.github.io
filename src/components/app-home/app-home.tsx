import { Component, h } from '@stencil/core';
import seoConfig from '../../global/seo-config';
import{ Helmet } from '@stencil/helmet';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss'
})
export class AppHome {

  render() {
    return (
      <div class='app-home'>
        <Helmet>
        <title>{seoConfig.root.title}</title>
          <meta property="og:title" content={seoConfig.root.title} />
          <meta property="og:image" content={seoConfig.root.image} />
          <meta property="og:url" content={window.location.origin+window.location.pathname} />
          <link rel="canonical" href={window.location.origin+window.location.pathname}/>
          { seoConfig.root.description ? <meta name="description" content={seoConfig.root.description} /> : '' }
          { seoConfig.root.description ? <meta name="og:description" property="og:description" content={seoConfig.root.description} /> : '' }
          { seoConfig.root.description ? <meta name="twitter:description" content={seoConfig.root.description} /> : '' }
          <meta name="twitter:title" content={seoConfig.root.title} />
          <meta name="twitter:card" content={seoConfig.root.image} />
          <meta name="twitter:site" content={seoConfig.twitterUser} />
          <meta name="twitter:image" content={seoConfig.root.image} />
        </Helmet>
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
