import { Component, h } from '@stencil/core';
import { BlogService } from '../../services/blog-service';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss'
})
export class AppRoot {

  async componentWillLoad(){
    await BlogService.readPosts();
  }

  render() {
    return (
      <div>
        <div class="no-footer">
          <rrss-navbar githubUser="Dellos7" twitterUser="_dlopezcast" codepenUser="dellos7" linkedinUser="david-lopez-castellote"></rrss-navbar>
          <navigation-bar></navigation-bar>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' exact={true} component="app-home"></stencil-route>
              <stencil-route url={['/blog', '/blog/']} component='blog-page' exact={true}/>
              <stencil-route url={['/about', '/about/']} component='about-page' exact={true}></stencil-route>
              <stencil-route url={['/contact', '/contact/']} component='contact-page' exact={true}/>
              <stencil-route url={'/blog/:unique_link'}
                routeRender={({ match }) => (
                  <blog-post-wrapper uniqueLink={match.params.unique_link}></blog-post-wrapper>
                )}/>
              <stencil-route url={['/contact-form-error', '/contact-form-error/']} component="contact-form-error"></stencil-route>
              <stencil-route url={['/contact-form-submited', '/contact-form-submited/']} component="contact-form-submited"></stencil-route>
              <stencil-route component="page-not-found"></stencil-route>
            </stencil-route-switch>
          </stencil-router>
        </div>
        <scroll-to-top-button></scroll-to-top-button>
        <footer>
          <footer-component></footer-component>
        </footer>
      </div>
    );
  }
}
