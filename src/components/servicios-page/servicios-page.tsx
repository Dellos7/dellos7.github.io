import { Component, h } from '@stencil/core';
import { SeoTagsData } from 'dlc-seo-tags';
import seoConfig from '../../global/seo-config';

const seoData: SeoTagsData = {
  title: seoConfig.servicios.title + seoConfig.titleSuffix,
  meta: [
    { name: 'description', content: seoConfig.servicios.description },
    { property: 'og:title', content: seoConfig.servicios.title },
    { property: 'og:description', content: seoConfig.servicios.description },
    { property: 'og:image', content: seoConfig.servicios.image },
    { property: 'og:url', content: `${window.location.origin}${window.location.pathname}` },
    { name: 'twitter:title', content: seoConfig.servicios.title },
    { name: 'twitter:description', content: seoConfig.servicios.description },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: seoConfig.twitterUser },
    { name: 'twitter:creator', content: seoConfig.twitterUser },
    { name: 'twitter:image', content: seoConfig.servicios.image },
  ],
  links: [
    { rel: 'canonical', href: `${window.location.origin}${window.location.pathname}` }
  ]
};

@Component({
  tag: 'servicios-page',
  styleUrl: 'servicios-page.scss',
  shadow: true,
})
export class ServiciosPage {

  render() {
    return (
      <div class="servicios-page">
        <dlc-seo-tags data={seoData}></dlc-seo-tags>
        <header>
          <user-name content="Servicios" showDomain={true}></user-name>
        </header>
        <main>
          <p>Si necesitas algún tipo de ayuda relacionada con la programación, la informática o la educación, quizá pueda ayudarte.</p>
          <p>Puedes pedirme ayuda acerca de:</p>
          <ul>
            <li><span class="underline">Clases particulares</span> o por grupos de informática y/o programación.</li>
            <li><span class="underline">Preparación de oposiciones</span> para el cuerpo de profesores de informática.</li>
            <li><span class="underline">Material para las oposiciones</span> del cuerpo de profesores de informática. Dispongo de los <span class="underline">temas</span> con los que aprobé la oposición, ajustados y preparados para ser redactados en 2 horas, así como la <span class="underline">programación didáctica</span> y muchos <span class="underline">ejercicios prácticos y exámenes resueltos.</span></li>
            <li>Crear tu <span class="underline">página web</span> personal o la de tu empresa.</li>
          </ul>
          <div class="btn-wrapper">
            <a class="btn-primary" href="/contact">Contáctame</a>
          </div>
        </main>
      </div>
    );
  }

}
