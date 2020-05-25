import { Component, h } from '@stencil/core';
import { BlogService } from '../../services/blog-service';

@Component({
  tag: 'blog-component',
  styleUrl: 'blog-component.css'
})
export class BlogComponent {

  async componentWillLoad() {
    //await BlogService.readPosts();
  }

  render() {
    return (
      <div>
        <slot />
      </div>
    );
  }
}
