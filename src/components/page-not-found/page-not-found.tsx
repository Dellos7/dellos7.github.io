import { Component, h } from '@stencil/core';


@Component({
  tag: 'page-not-found',
  styleUrl: 'page-not-found.css'
})
export class PageNotFound {

  render() {
    return (
      <div>
        <h3>404: Page not found!!</h3>
      </div>
    );
  }
}
