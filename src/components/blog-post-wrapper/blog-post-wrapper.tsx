import { Component, h, Prop, State } from '@stencil/core';
import { BlogService } from '../../services/blog-service';
import { Helmet } from '@stencil/helmet';
import seoConfig from '../../global/seo-config';
import { tagsToHtmlList } from '../../global/utils';

@Component({
  tag: 'blog-post-wrapper',
  styleUrl: 'blog-post-wrapper.scss'
})
export class BlogPostWrapper {

  @Prop() uniqueLink: string;
  @Prop({mutable: true}) metadata: any;
  @State() imgFilterFromColor: string;
  @State() imgFilterToColor: string; 

  componentWillLoad() {
    //Maybe we have not passed the metadata as property, then we load the metadata using the blog-component
    if( !this.metadata ) this.metadata = BlogService.getMetadataForPost( this.uniqueLink );
    this.imgFilterFromColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color');
    this.imgFilterToColor = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color');
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

  render() {
    if( !this.uniqueLink || !this.metadata ) {
      return (<div>Loading...</div>);
    }
    else {
      return (
        <div class="blog-post-wrapper">
          <Helmet>
            <title>{this.metadata.title} {seoConfig.titleSuffix}</title>
            <link rel="canonical" href={window.location.origin+window.location.pathname}/>
            { this.metadata.tags ? <meta name="keywords" content={this.metadata.tags}/> : ''}
            <meta name="og:title" property="og:title" content={this.metadata.title} />
            { this.metadata.summary ? <meta name="description" content={this.metadata.summary} /> : '' }
            { this.metadata.summary ? <meta name="og:description" property="og:description" content={this.metadata.summary} /> : '' }
            { this.metadata.summary ? <meta name="twitter:description" content={this.metadata.summary} /> : '' }
            <meta name="og:image" property="og:image" content={this.imageUrl(this.metadata.image)} />
            <meta property="og:url" content={window.location.origin+window.location.pathname} />
            <meta name="twitter:title" content={this.metadata.title} />
            <meta name="twitter:card" content={this.imageUrl(this.metadata.image)} />
            <meta name="twitter:site" content={seoConfig.twitterUser} />
            <meta name="twitter:image" content={this.imageUrl(this.metadata.image)}/>
          </Helmet>
          <div class="back-button">
            <stencil-route-link class="link" url="/blog">&larr;Volver al blog</stencil-route-link>
          </div>
          <blog-post uniqueLink={this.uniqueLink}>
            <div slot="before">
              <div class="image-filter-wrapper">
                {/* <image-filter fromColor={this.imgFilterFromColor} toColor={this.imgFilterToColor} src={this.metadata.image}>              
                  <div class="post-title" slot="inside">
                    <h1>{this.metadata.title}</h1>
                  </div>
                </image-filter> */}
                <image-filter fromColor={this.imgFilterFromColor} toColor={this.imgFilterToColor} src={this.metadata.image}></image-filter>
                <div class="post-title">
                    <h1>{this.metadata.title}</h1>
                </div>
              </div>
              <h3 class="post-date">
                {this.formatDate(this.metadata.date)}
              </h3>
              <div innerHTML={tagsToHtmlList(this.metadata.tags)}>
              </div>
            </div>
          </blog-post>
        </div>
      );
    }
  }
}
