import { Component, h, Prop, Element } from '@stencil/core';
import { HTMLStencilElement } from '@stencil/core/internal';


@Component({
    tag: 'user-name',
    styleUrl: 'user-name.scss'
})
export class UserName {

    @Element() el: HTMLStencilElement;
    @Prop() title: string;
    @Prop() link: string;
    @Prop() showDomain: boolean;

    componentDidLoad(){
        if( this.showDomain ){
            console.log(this.el);
            this.el.querySelector('.user-name__title').classList.add('show-domain');
        }
    }

    render() {
        return (
            <div class="user-name">
                <h1 class="user-name__title">
                    { this.link ? <a class="no-decorar" href={this.link}>{this.title}</a> : <span>{this.title}</span> }
                </h1>
            </div>
        );
    }
}
