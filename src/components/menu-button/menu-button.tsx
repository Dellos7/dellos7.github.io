import { Component, h } from '@stencil/core';


@Component({
    tag: 'menu-button',
    styleUrl: 'menu-button.scss'
})
export class MenuButton {

    render() {
        return (
            <div class="menu-toggle">
                <input type="checkbox" class="menu-toggle__checkbox" id="menu-toggle"/>
                <label htmlFor="menu-toggle" class="menu-toggle__button"><ion-icon class="menu-toggle__button-icon" name="ellipsis-vertical-outline"></ion-icon></label>
            </div>
        );
    }
}
