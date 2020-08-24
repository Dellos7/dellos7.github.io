import { Component, Prop, h, State } from '@stencil/core';
import { RouterHistory } from '@stencil/router';
import { BlogService } from '../../services/blog-service';
import { Post } from '../../model/interfaces';
import seoConfig from '../../global/seo-config';
import { SeoTagsData } from 'dlc-seo-tags';
import { tagsToHtmlList } from '../../global/utils';

const seoData: SeoTagsData = {
  title: seoConfig.blog.title + seoConfig.titleSuffix,
  meta: [
    { name: 'description', content: seoConfig.blog.description },
    { property: 'og:title', content: seoConfig.blog.title },
    { property: 'og:description', content: seoConfig.blog.description },
    { property: 'og:image', content: seoConfig.blog.image },
    { property: 'og:url', content: `${window.location.origin}${window.location.pathname}` },
    { name: 'twitter:title', content: seoConfig.blog.title },
    { name: 'twitter:description', content: seoConfig.blog.description },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:site', content: seoConfig.twitterUser },
    { name: 'twitter:creator', content: seoConfig.twitterUser },
    { name: 'twitter:image', content: seoConfig.blog.image },
  ],
  links: [
    { rel: 'canonical', href: `${window.location.origin}${window.location.pathname}` }
  ]
};

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
  maxPosts = 6;
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
        {/* <Helmet>
          <title>{seoConfig.blog.title}</title>
          <meta property="og:title" content={seoConfig.blog.title} />
          <meta property="og:image" content={seoConfig.blog.image} />
          <meta property="og:url" content={window.location.origin+window.location.pathname} />
          <link rel="canonical" href={window.location.origin+window.location.pathname}/>
          { seoConfig.blog.description ? <meta name="description" content={seoConfig.blog.description} /> : '' }
          { seoConfig.blog.description ? <meta name="og:description" property="og:description" content={seoConfig.blog.description} /> : '' }
          { seoConfig.blog.description ? <meta name="twitter:description" content={seoConfig.blog.description} /> : '' }
          <meta name="twitter:title" content={seoConfig.blog.title} />
          <meta name="twitter:card" content={seoConfig.blog.image} />
          <meta name="twitter:site" content={seoConfig.twitterUser} />
          <meta name="twitter:image" content={seoConfig.blog.image} />
        </Helmet> */}
        <dlc-seo-tags data={seoData}></dlc-seo-tags>
        <header>
          <user-name content="Blog" showDomain={true}></user-name>
        </header>
        <main>
          <div class="pager">
            { this.postsPage > 0 ? <a class="pager__prev" onClick={() => this.prevPage()}>&larr; Más nuevos</a> : '' }
            { this.postsPage < this.maxPages ? <a class="pager__next" onClick={() => this.nextPage()}>Anteriores &rarr;</a> : '' }
          </div>
          <ul class="posts-list">
            {this.posts.length > 0 ?
              this.posts.map((post) =>
              <li class="posts-list__item">
                <stencil-route-link url={"/" + BlogService.config.posts_route + "/" + post.unique_link}>
                  <image-filter doNotApplyFilter={post.metadata.do_not_apply_image_filter} fromColor={this.imgFilterFromColor} toColor={this.imgFilterToColor} src={post.metadata.image}></image-filter>
                  <h2 class="posts-list__item-title">{post.metadata.title}</h2>
                </stencil-route-link>
                  <div class="posts-list__item-tags" innerHTML={tagsToHtmlList(post.metadata.tags)}></div>
                  <div class="posts-list__item-date texto-gradiente-1">{this.formatDate(post.metadata.date)}</div>
                  <div class="posts-list__item-ert"><ion-icon name="book-outline"></ion-icon><ion-icon name="hourglass-outline"></ion-icon>&nbsp;{post.metadata.estimatedReadingTime.roundedMinutes} min.</div>
                  <div class="posts-list__item-summary">{post.metadata.summary}</div>
              </li>
            ) : <p class="no-posts">- No hay posts -</p>}
          </ul>
          <div class="pager">
            { this.postsPage > 0 ? <a class="pager__prev" onClick={() => this.prevPage()}>&larr; Más nuevos</a> : '' }
            { this.postsPage < this.maxPages ? <a class="pager__next" onClick={() => this.nextPage()}>Anteriores &rarr;</a> : '' }
          </div>
        </main>
      </div>
    );
  }
}
