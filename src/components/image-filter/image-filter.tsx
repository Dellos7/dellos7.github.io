import { Component, h, Element, Prop, State } from '@stencil/core';
import { HTMLStencilElement } from '@stencil/core/internal';

@Component({
  tag: 'image-filter',
  styleUrl: 'image-filter.scss',
  shadow: true
})
export class ImageFilter {

  @State() imgFilterEl;
  @Element() el: HTMLStencilElement;
  @Prop() src: string;
  @Prop() fromColor: string;
  @Prop() toColor: string;

  componentDidLoad(){
    if( this.el && this.el.shadowRoot ){
      this.imgFilterEl = this.el.shadowRoot.querySelector('.img-filter');
    }
  }

  render() {
    if( this.imgFilterEl ){
      this.imgFilterEl.style.backgroundImage = `linear-gradient( to right bottom, ${this.fromColor}, ${this.toColor}), url(${this.src})`;
    }
    return (
      <div class="img-filter" part="img">
        <slot name="inside" />
      </div>
    );
  }
}
