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
          <title>{seoConfig.mainPageTitle}</title>
          <meta name="description" content={seoConfig.mainPageDescription} />
          <meta property="og:title" content={seoConfig.mainPageTitle} />
          <meta property="og:image" content={seoConfig.mainPageImage} />
          <meta property="og:description" content={seoConfig.mainPageDescription} />
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
