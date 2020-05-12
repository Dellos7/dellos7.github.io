import { Component, h } from '@stencil/core';

@Component({
  tag: 'navigation-bar',
  styleUrl: 'navigation-bar.scss',
  shadow: true
})
export class NavigationBar {

  render() {
    return (
      <nav>
        <ul>
          <li>
            <stencil-route-link url="/" activeClass="link-active" exact={true}>/home</stencil-route-link>
          </li>
          <li>
            <stencil-route-link url="/blog" activeClass="link-active">/blog</stencil-route-link>
          </li>
          <li>
            <stencil-route-link url="/about" activeClass="link-active">/about</stencil-route-link>
          </li>
          <li>
            <stencil-route-link url="/contact" activeClass="link-active">/contact</stencil-route-link>
          </li>
        </ul>
      </nav>
    );
  }
}
