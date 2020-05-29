import { Component, h, Element, Listen } from '@stencil/core';
import { HTMLStencilElement } from '@stencil/core/internal';


@Component({
  tag: 'scroll-to-top-button',
  styleUrl: 'scroll-to-top-button.scss',
  shadow: true
})
export class ScrollToTopButton {

  @Element() el: HTMLStencilElement;

  @Listen('scroll', { target: 'window' })
  handleScroll(){
    // Show scroll to to button when scrolled a bit
    const bodyScrollTop = document.body.scrollTop;
    const documentElementScrollTop = document.documentElement.scrollTop;
    if( bodyScrollTop > 40 || documentElementScrollTop > 40 ){
      this.toggle(true);
    } else{
      this.toggle(false);
    }
  }

  toggle( show: boolean ){
    const buttonEl = this.el.shadowRoot.querySelector('.button');
    if( buttonEl ){
      if( show ) buttonEl.classList.remove('invisible');
      if( !show ) buttonEl.classList.add('invisible');
    }
  }

  scrollToTop(){
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  render() {
    return (
      <div class="button invisible" onClick={ () => { this.scrollToTop() } }>
        <ion-icon class="button__icon" name="chevron-up-outline"></ion-icon>
      </div>
    );
  }
}
