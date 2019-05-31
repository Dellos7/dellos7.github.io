import { Component, h } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
  shadow: true
})
export class AppRoot {

  render() {
    return (
      <div>
        <div class="view-wrapper">
          <nav>
            <rrss-navbar githubUser="Dellos7" twitterUser="_dlopezcast" codepenUser="dellos7" linkedinUser="david-lopez-castellote"></rrss-navbar>
          </nav>
          {/*<profile-image></profile-image>*/}
          <header>
            <user-name></user-name>
            <menu-button></menu-button>
          </header>
          <main>
            <stencil-router>
              <stencil-route-switch scrollTopOffset={0}>
                <stencil-route url='/' component='app-home' exact={true} />
                <stencil-route url='/profile/:name' component='app-profile' />
              </stencil-route-switch>
            </stencil-router>
          </main>
        </div>
        {/*<about-section></about-section>*/}
      </div>
    );
  }
}
