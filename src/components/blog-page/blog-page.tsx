import { Component, Prop, h } from '@stencil/core';
import { RouterHistory } from '@stencil/router';
import { BlogService } from '../../services/blog-service';

@Component({
  tag: 'blog-page',
  styleUrl: 'blog-page.scss'
})
export class BlogPage {

  @Prop() history: RouterHistory;

  formateDate( date: string ) {
    return new Date(date).toLocaleDateString();
  }

  render() {
    return (
      <div class="blog-page">
        <ul class="posts-list">
        {(BlogService).posts.map((post) =>
          <li class="posts-list__item">
            <stencil-route-link url={"/" + BlogService.config.posts_route + "/" + post.unique_link}>
                <h2 class="posts-list__item-title">{post.metadata.title}</h2>
            </stencil-route-link>
              <p class="posts-list__item-date">{this.formateDate(post.metadata.date)}</p>
              {/* <p class="posts-list__item-summary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dicta ut reiciendis qui tenetur dolores suscipit dicta ut reiciendis qui tenetur dolores suscipit dicta ut reiciendis qui tenetur dolores suscipit...</p> */}
              <p class="posts-list__item-summary">{post.metadata.summary}</p>
              <div class="posts-list__item-image"></div>
          </li>
        )}
      </ul>
      </div>
    );
  }
}
