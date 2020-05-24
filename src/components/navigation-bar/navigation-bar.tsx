import { Component, h, Element } from '@stencil/core';
import { HTMLStencilElement } from '@stencil/core/internal';

@Component({
  tag: 'navigation-bar',
  styleUrl: 'navigation-bar.scss',
  shadow: true
})
export class NavigationBar {

  @Element() el: HTMLStencilElement;

  navElementClick(e: UIEvent){
    const checkboxElLabelBtn: HTMLElement = this.el.shadowRoot.querySelector('.menu-toggle__button');
    const checkboxElLabelCheck = this.el.shadowRoot.querySelector('.menu-toggle__checkbox') as any;
    if( checkboxElLabelCheck.checked ){
      checkboxElLabelBtn.click();
    }
  }

  render() {
    return (
      <div>
        <input type="checkbox" class="menu-toggle__checkbox" id="menu-toggle"/>
        <label htmlFor="menu-toggle" class="menu-toggle menu-toggle__button">
          <ion-icon class="menu-toggle menu-toggle__button-icon menu-toggle__button-icon__default" name="ellipsis-vertical"></ion-icon>
          <ion-icon class="menu-toggle menu-toggle__button-icon menu-toggle__button-icon__checked" name="close"></ion-icon>
        </label>
        <div class="menu-toggle__navigation-background">&nbsp;</div>
        <nav>
          <ul>
            <li onClick={ (e: UIEvent) => this.navElementClick(e) }>
              <stencil-route-link url="/" activeClass="link-active" exact={true}>/home</stencil-route-link>
            </li>
            <li onClick={ (e: UIEvent) => this.navElementClick(e) }>
              <stencil-route-link url="/blog" activeClass="link-active">/blog</stencil-route-link>
            </li>
            <li onClick={ (e: UIEvent) => this.navElementClick(e) }>
              <stencil-route-link url="/about" activeClass="link-active">/about</stencil-route-link>
            </li>
            <li onClick={ (e: UIEvent) => this.navElementClick(e) }>
              <stencil-route-link url="/contact" activeClass="link-active">/contact</stencil-route-link>
            </li>
          </ul>
        </nav>
        {/* <menu-button></menu-button> */}
      </div>
    );
  }
}
