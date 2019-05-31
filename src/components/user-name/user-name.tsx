import { Component, h } from '@stencil/core';


@Component({
    tag: 'user-name',
    styleUrl: 'user-name.scss'
})
export class UserName {

    render() {
        return (
            <div class="user-name">
                <h1 class="user-name__title">david lópez castellote</h1>
            </div>
        );
    }
}
