import { Component, h} from '@stencil/core';


@Component({
    tag: 'section-title',
    styleUrl: 'section-title.scss'
})
export class SectionTitle {

    render() {
        return (
            <h2>
                <slot></slot>
            </h2>
        );
    }
}
