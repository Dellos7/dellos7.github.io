import { Component, h } from '@stencil/core';


@Component({
  tag: 'contact-form-error',
  styleUrl: 'contact-form-error.scss'
})
export class ContactFormError {

  render() {
    return (
      <div class="form-send-wrapper">
        <div class="form-send-card">
          <p>Error enviando el formulario</p>
        </div>
      </div>
    );
  }
}
