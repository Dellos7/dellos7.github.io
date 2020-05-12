import { Component, h, State } from '@stencil/core';
import { BlogService } from '../../services/blog-service';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
  shadow: true
})
export class AppRoot {

  @State() postsRoute: string;

  componentDidLoad(){
    this.postsRoute = BlogService.config.posts_route;
  }

  render() {
    return (
      <div>
          <rrss-navbar githubUser="Dellos7" twitterUser="_dlopezcast" codepenUser="dellos7" linkedinUser="david-lopez-castellote"></rrss-navbar>
          {/*<profile-image></profile-image>*/}
          <navigation-bar></navigation-bar>
          <header>
            <user-name></user-name>
            {/* <menu-button></menu-button> */}
            
          </header>
          <main>
            <blog-component>
              <stencil-router>
                <stencil-route-switch scrollTopOffset={0}>
                  <stencil-route url='/' component='app-home' exact={true} />
                  <stencil-route url={['/blog', '/blog/']} component='blog-page' exact={true}/>
                  <stencil-route url={['/about', '/about/']} component='about-page' exact={true}/>
                  <stencil-route url={['/contact', '/contact/']} component='contact-page' exact={true}/>
                  <stencil-route url={'/' + this.postsRoute + '/:unique_link'}
                  routeRender={(props: { [key: string]: any }) => {
                    return (
                      <blog-post-wrapper uniqueLink={props.match.params.unique_link}></blog-post-wrapper>
                    );
                  }}>
                </stencil-route>
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
