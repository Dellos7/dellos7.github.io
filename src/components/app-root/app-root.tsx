import { Component, h, State } from '@stencil/core';
import { BlogService } from '../../services/blog-service';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss'
})
export class AppRoot {

  //@State() postsRoute: string;

  componentDidLoad(){
    //this.postsRoute = BlogService.config.posts_route;
  }

  render() {
    return (
      <div>
          <rrss-navbar githubUser="Dellos7" twitterUser="_dlopezcast" codepenUser="dellos7" linkedinUser="david-lopez-castellote"></rrss-navbar>
          {/*<profile-image></profile-image>*/}
          <navigation-bar></navigation-bar>
          <header>
            <user-name></user-name>
          </header>
          <main>
            <blog-component>
              <stencil-router>
                <stencil-route-switch scrollTopOffset={0}>
                  <stencil-route url='/' component='app-home' exact={true} />
                  <stencil-route url={['/blog', '/blog/']} component='blog-page' exact={true}/>
                  <stencil-route url={['/about', '/about/']} component='about-page' exact={true}/>
                  <stencil-route url={['/contact', '/contact/']} component='contact-page' exact={true}/>
                  <stencil-route url={'/blog/:unique_link'}
                    routeRender={({ match }) => (
                      <blog-post-wrapper uniqueLink={match.params.unique_link}></blog-post-wrapper>
                    )}/>
                  <stencil-route component="page-not-found"></stencil-route>
                </stencil-route-switch>
              </stencil-router>
            </blog-component>
          </main>
        {/* </div> */}
        {/*<about-section></about-section>*/}
      </div>
    );
  }
}
