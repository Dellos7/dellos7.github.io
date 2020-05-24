import { Component, h } from '@stencil/core';
import{ Helmet } from '@stencil/helmet';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  shadow: true
})
export class AppHome {

  render() {
    return (
      <div class='app-home'>
        <Helmet>
          <title>David López Castellote 💻 👨‍🏫</title>
        </Helmet>
        <dlc-terminal></dlc-terminal>
      </div>
    );
  }
}
