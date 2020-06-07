import { Component, h } from '@stencil/core';


@Component({
  tag: 'contact-form-submited',
  styleUrl: 'contact-form-submited.scss'
})
export class ContactFormSubmited {

  render() {
    return (
      <div class="form-send-wrapper">
        <div class="form-send-card">
        <p>Formulario enviado correctamente 👏🏻👏🏿</p>
        </div>
      </div>
    );
  }
}
