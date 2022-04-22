import { Component, h, Prop, State, Listen, Element } from '@stencil/core';
import { BlogService } from '../../services/blog-service';
import seoConfig from '../../global/seo-config';
import { tagsToHtmlList } from '../../global/utils';
import { HTMLStencilElement } from '@stencil/core/internal';
import { SeoTagsData } from 'dlc-seo-tags';

@Component({
  tag: 'blog-post-wrapper',
  styleUrl: 'blog-post-wrapper.scss'
})
export class BlogPostWrapper {

  @Element() el: HTMLStencilElement;
  @Prop() uniqueLink: string;
  @Prop({mutable: true}) metadata: any;
  @State() imgFilterFromColor: string;
  @State() imgFilterToColor: string; 

  postTitleEl: HTMLElement;
  postTitleElInitialOffsetTop: number;
  scrollIndicatorEl: HTMLElement;
  scrollIndicatorInitialLeft: number;
  computedStyleLeftPercentage = false;

  componentWillLoad() {
    //Maybe we have not passed the metadata as property, then we load the metadata using the blog-component
    if( !this.metadata ) this.metadata = BlogService.getMetadataForPost( this.uniqueLink );
    this.imgFilterFromColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color');
    this.imgFilterToColor = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color');
  }

  componentDidLoad(){
    this.postTitleEl = this.el.querySelector('.post-title');
    this.postTitleElInitialOffsetTop = this.postTitleEl.offsetTop;
    this.scrollIndicatorEl = this.el.querySelector('.scroll-indicator');
    const computedStyleLeft = getComputedStyle( this.scrollIndicatorEl ).left;
    if( computedStyleLeft ){
      if( computedStyleLeft.includes('%') ) this.computedStyleLeftPercentage = true;
      this.scrollIndicatorInitialLeft = Number.parseInt( ( this.computedStyleLeftPercentage ? computedStyleLeft.split('%') : computedStyleLeft.split('px') )[0]);
    }
    
    setTimeout( _ => window.scrollTo(0,0) , 100 );
  }

  imageUrl( image: string ){
    if( image.startsWith('http://') || image.startsWith('https://') ){
      return image;
    }
    return window.location.origin + image;
  }

  formatDate( date: Date ) {
    return date.toLocaleDateString();
  }

  @Listen('scroll', { target: 'window' })
  handleWindowScroll(){
    this.handleStickyPostTitle();
    this.handleScrollIndicator();
  }

  handleStickyPostTitle(){
    if( this.postTitleEl ){
      if( this.postTitleElInitialOffsetTop == 0 ){
        this.postTitleElInitialOffsetTop = this.postTitleEl.offsetTop;
      }
      if( window.pageYOffset > ( this.postTitleElInitialOffsetTop - 30 ) ){
        this.postTitleEl.classList.add('sticky');
      } else{
        this.postTitleEl.classList.remove('sticky');
      }
    }
  }

  handleScrollIndicator(){
    if( this.scrollIndicatorEl ){
      const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = ( windowScroll / height );
      if( this.computedStyleLeftPercentage ){
        this.scrollIndicatorEl.style.left = ( this.scrollIndicatorInitialLeft + scrolled*100 ) + '%';
      } else{
        this.scrollIndicatorEl.style.left = this.scrollIndicatorInitialLeft + ( scrolled * Math.abs( this.scrollIndicatorInitialLeft ) ) + 'px';
      }
    }
  }

  render() {
    if( !this.uniqueLink || !this.metadata ) {
      return (<div>Loading...</div>);
    }
    else {
      const seoData: SeoTagsData = {
        title: this.metadata.title + seoConfig.titleSuffix,
        meta: [
          { name: 'keywords', content: this.metadata.tags },
          { name: 'description', content: this.metadata.summary },
          { property: 'og:title', content: this.metadata.title },
          { property: 'og:description', content: this.metadata.summary },
          { property: 'og:image', content: this.imageUrl(this.metadata.image) },
          { property: 'og:url', content: window.location.origin+window.location.pathname },
          { name: 'twitter:title', content: this.metadata.title },
          { name: 'twitter:description', content: this.metadata.summary },
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:site', content: seoConfig.twitterUser },
          { name: 'twitter:creator', content: seoConfig.twitterUser },
          { name: 'twitter:image', content: this.imageUrl(this.metadata.image) },
        ],
        links: [
          { rel: 'canonical', href: window.location.origin+window.location.pathname }
        ]
      };
      return (
        <div class="blog-post-wrapper">
          <dlc-seo-tags data={seoData}></dlc-seo-tags>
          <div class="scroll-indicator"></div>
          <div class="back-button">
            <stencil-route-link class="link" url="/blog">&larr;Volver al blog</stencil-route-link>
          </div>
          <blog-post uniqueLink={this.uniqueLink}>
            <div slot="before">
              <div class="image-filter-wrapper">
                <image-filter doNotApplyFilter={this.metadata.do_not_apply_image_filter} fromColor={this.imgFilterFromColor} toColor={this.imgFilterToColor} src={this.metadata.image}></image-filter>
                <div class="post-title">
                    <h1>{this.metadata.title}</h1>
                </div>
              </div>
              <h3 class="post-date">
                {this.formatDate(this.metadata.date)}
              </h3>
              <h4 class="ert">
                <ion-icon name="book-outline"></ion-icon><ion-icon name="hourglass-outline"></ion-icon>&nbsp;
                {this.metadata.estimatedReadingTime.roundedMinutes} min.
              </h4>
              <div class="tag-list-wrapper" innerHTML={tagsToHtmlList(this.metadata.tags)}>
              </div>
            </div>
          </blog-post>
        </div>
      );
    }
  }
}
