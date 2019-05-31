import { Component, h } from '@stencil/core';


@Component({
    tag: 'profile-image',
    styleUrl: 'profile-image.scss'
})
export class ProfileImage {

    

    render() {
        return (
            <div class="profile-image">
                <img class="profile-image__image" src="https://avatars0.githubusercontent.com/u/11089954?v=4"></img>
            </div>
        );
    }
}
