import { Component, h } from '@stencil/core';

@Component({
  tag: 'blog-component',
  styleUrl: 'blog-component.css'
})
export class BlogComponent {

  render() {
    return (
      <div>
        <slot />
      </div>
    );
  }
}
