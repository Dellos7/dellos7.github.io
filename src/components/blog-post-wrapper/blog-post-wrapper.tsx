import { Component, h, Prop, State } from '@stencil/core';
import { BlogService } from '../../services/blog-service';
import { Helmet } from '@stencil/helmet';

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

  formateDate( date: string ) {
    return new Date(date).toLocaleDateString();
  }

  render() {
    if( !this.uniqueLink || !this.metadata ) {
      return (<div>Loading...</div>);
    }
    else {
      return (
        <div class="blog-post-wrapper">
          <Helmet>
            <title>{this.metadata.title} | David López Castellote 💻 👨‍🏫</title>
            <meta name="og:title" property="og:title" content={this.metadata.title} />
            { this.metadata.summary ? <meta name="description" content={this.metadata.summary} /> : '' }
            { this.metadata.summary ? <meta name="og:description" property="og:description" content={this.metadata.summary} /> : '' }
            { this.metadata.summary ? <meta name="twitter:description" content={this.metadata.summary} /> : '' }
            <meta name="og:image" property="og:image" content={this.metadata.image} />
            {/* <meta property="og:url" content={this.metadata.image} /> */}
            <meta name="twitter:title" content={this.metadata.title} />
            <meta name="twitter:card" content="summary_large_image" />
            {/* TODO: parametrizar usuario de twitter */}
            <meta name="twitter:site" content="@_dlopezcast" />
            <meta name="twitter:image" content={this.metadata.image} />
          </Helmet>
          <div class="back-button">
            <stencil-route-link class="link" url="/blog">&larr;Volver al blog</stencil-route-link>
          </div>
          <blog-post uniqueLink={this.uniqueLink}>
            <div slot="before">
              <div class="image-filter-wrapper">
                <image-filter fromColor={this.imgFilterFromColor} toColor={this.imgFilterToColor} src={this.metadata.image}>              
                  <div class="post-title" slot="inside">
                    <h2>{this.metadata.title}</h2>
                  </div>
                </image-filter>
              </div>
              <h3 class="post-date">
                {this.formateDate(this.metadata.date)}
              </h3>
            </div>
            {/* <div class="post-footer" slot="after">Created by David at {this.formateDate(this.metadata.date)}</div> */}
          </blog-post>
        </div>
      );
    }
  }
}
