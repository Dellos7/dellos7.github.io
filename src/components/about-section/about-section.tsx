import { Component, h } from '@stencil/core';


@Component({
    tag: 'about-section',
    styleUrl: 'about-section.scss'
})
export class AboutSection {

    render() {
        return (
            <section class="home-section">
                <section-title>about me</section-title>
                <p>Hey!</p>
            </section>
        );
    }
}
