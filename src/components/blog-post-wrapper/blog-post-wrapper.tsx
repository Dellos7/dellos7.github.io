import { Component, h, Prop, State } from '@stencil/core';
import { BlogService } from '../../services/blog-service';


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
          <div class="back-button">
            <stencil-route-link class="link" url="/blog">&larr;Volver al blog</stencil-route-link>
          </div>
          <blog-post uniqueLink={this.uniqueLink}>
            <div slot="before">
              <div class="image-filter-wrapper">
                <image-filter fromColor={this.imgFilterFromColor} toColor={this.imgFilterToColor} src="https://images.unsplash.com/photo-1545746993-1ef2b0432a05?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1600">              
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
