import { Component, h } from '@stencil/core';
import { Helmet } from '@stencil/helmet';
import seoConfig from '../../global/seo-config';

@Component({
  tag: 'contact-page',
  styleUrl: 'contact-page.scss'
})
export class ContactPage {

  render() {
    return (
      <div>
        <Helmet>
          <title>{seoConfig.contact.title}</title>
          <meta property="og:title" content={seoConfig.contact.title} />
          <meta property="og:image" content={seoConfig.contact.image} />
          <meta property="og:url" content={window.location.origin+window.location.pathname} />
          <link rel="canonical" href={window.location.origin+window.location.pathname}/>
          { seoConfig.contact.description ? <meta name="description" content={seoConfig.contact.description} /> : '' }
          { seoConfig.contact.description ? <meta name="og:description" property="og:description" content={seoConfig.contact.description} /> : '' }
          { seoConfig.contact.description ? <meta name="twitter:description" content={seoConfig.contact.description} /> : '' }
          <meta name="twitter:title" content={seoConfig.contact.title} />
          <meta name="twitter:card" content={seoConfig.contact.image} />
          <meta name="twitter:site" content={seoConfig.twitterUser} />
          <meta name="twitter:image" content={seoConfig.contact.image} />
        </Helmet>
        <header>
          <user-name content="Contacto" showDomain={true}></user-name>
        </header>
        <main>
          <p>Puedes contactarme en el correo: <a href="mailto:contacto@dlopezcastellote.dev">contacto@dlopezcastellote.dev</a> o a través del siguiente formulario:</p>
          <div class="form-wrapper">
            <form method="POST" action="https://script.google.com/macros/s/AKfycbzeaoJMzc0Ed1B3RPa7Np8kvhAWFBHfraB3rqkc/exec">
              <input type="text" name="name" placeholder="Nombre:" required />
              <input type="email" name="email" placeholder="Email:" required />
              <textarea name="message" placeholder="Mensaje:" required rows={8}></textarea>
              <button type="submit">Enviar</button>
              <input name="success_url" type="hidden" value={window.location.origin+'/contact-form-submited'} />
              <input name="error_url" type="hidden" value={window.location.origin+'/contact-form-error'} />
              <input name="send_email_copy" type="hidden" value="true" />
              <input name="send_email_to_name" type="hidden" value="David López Castellote" />
              <input name="contact_form_url" type="hidden" value={window.location.origin+window.location.pathname} />
              <input name="send_email_to" type="hidden" value="david.lopez.castellote@gmail.com" />
              <input name="bitc_hp" type="text" value="" style={ { display: 'none' } } />
            </form>
          </div>
        </main>
      </div>
    );
  }
}
