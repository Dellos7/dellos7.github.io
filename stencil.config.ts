import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/app.scss',
  globalScript: 'src/global/app.ts',
  outputTargets: [
    {
      type: 'www',
      //empty: false,
      // uncomment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: 'https://dlopezcastellote.dev',
      prerenderConfig: './prerender.config.ts',
    }
  ],
  copy: [
    { src: '__blog/' },
    { src: 'posts.json' },
    { src: 'assets/blog/' }
    //{ src: 'assets/' }
  ],
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/global/app.scss',
      ]
    })
  ]
};