import { Component, Prop, h, State } from '@stencil/core';
import { RouterHistory } from '@stencil/router';
import { BlogService } from '../../services/blog-service';
import { Post } from '../../model/interfaces';
import{ Helmet } from '@stencil/helmet';

@Component({
  tag: 'blog-page',
  styleUrl: 'blog-page.scss'
})
export class BlogPage {

  @Prop() history: RouterHistory;

  @State() imgFilterFromColor: string;
  @State() imgFilterToColor: string;
  @State() idxCurrentFirstPost = 0;
  postsPage = 0;
  maxPosts = 2;
  maxPages: number;

  posts: Post[];

  async componentWillLoad(){
    this.imgFilterFromColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color');
    this.imgFilterToColor = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color');
    this.posts = await this.readPosts();
    this.maxPages = Math.floor(BlogService.posts.length / this.maxPosts);
  }
  
  async componentWillUpdate(){
    this.posts = await this.readPosts();
  }

  readPosts(){
    return BlogService.readPosts(this.idxCurrentFirstPost, this.idxCurrentFirstPost + this.maxPosts);
  }

  prevPage(){
    if( this.postsPage > 0 ){
      this.postsPage--;
      this.idxCurrentFirstPost = this.postsPage * this.maxPosts;
    }
  }

  nextPage(){
    if( this.postsPage < this.maxPages ){
      this.postsPage++;
      this.idxCurrentFirstPost = this.postsPage * this.maxPosts;
    }
  }

  formatDate( date: Date ) {
    return date.toLocaleDateString();
  }

  render() {
    return (
      <div class="blog-page">
        <Helmet>
          <title>📖 Blog | David López Castellote 💻 👨‍🏫</title>
        </Helmet>
        {/* TODO: arreglar pager en movil */}
        <div class="pager">
          { this.postsPage > 0 ? <a class="pager__prev" onClick={() => this.prevPage()}>&larr; Más nuevos</a> : '' }
          { this.postsPage < this.maxPages ? <a class="pager__next" onClick={() => this.nextPage()}>Anteriores &rarr;</a> : '' }
        </div>
        <ul class="posts-list">
          {this.posts.map((post) =>
            <li class="posts-list__item">
              <stencil-route-link url={"/" + BlogService.config.posts_route + "/" + post.unique_link}>
                <image-filter fromColor={this.imgFilterFromColor} toColor={this.imgFilterToColor} src={post.metadata.image}></image-filter>
                <h2 class="posts-list__item-title">{post.metadata.title}</h2>
              </stencil-route-link>
                <div class="posts-list__item-date texto-gradiente-1">{this.formatDate(post.metadata.date)}</div>
                <div class="posts-list__item-summary">{post.metadata.summary}</div>
            </li>
          )}
        </ul>
      </div>
    );
  }
}
