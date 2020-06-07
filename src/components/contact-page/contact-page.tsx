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
          <title>Sobre mí {seoConfig.pageTitleSuffix}</title>
        </Helmet>
        <header>
          <user-name content="Contacto" showDomain={true}></user-name>
        </header>
        <p style={ {textAlign: 'center'} }>🔨</p>
        <div class="form-wrapper">
          <form method="POST" action="https://script.google.com/macros/s/AKfycbzeaoJMzc0Ed1B3RPa7Np8kvhAWFBHfraB3rqkc/exec">
            <input type="text" name="name" placeholder="Nombre:" required />
				    <input type="email" name="email" placeholder="Email:" required />
				    <textarea name="message" placeholder="Mensaje:" required></textarea>
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
      </div>
    );
  }
}
