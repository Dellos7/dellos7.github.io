import { r as registerInstance, h, c as getElement } from './index-70ad26c6.js';

const rrssNavbarCss = "@import url(\"https://fonts.googleapis.com/css?family=Pacifico&display=swap\");*{padding:0;margin:0}html{box-sizing:border-box;font-size:62.5%;min-height:100%}:root{--primary-color:#24909c;--secondary-color:#206c75;--tertiary-color:#61bdc5;--amarillo:#fdbb2d;--quaternary-color:#86f3fc;--fifth-color:rgb(19,243,185);--javascript:#f7df1e;--c:#419a49;--java:#f73737;--css:#2caddd;--html:#ff4800;--typescript:#006fc5;--cpp:#5a92cd;--python:linear-gradient( to right, #2d6396, #ffce39 );--shell:#222245}body{font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";font-size:2.3rem}p,li{overflow-wrap:break-word;word-wrap:break-word;-ms-word-break:break-all;word-break:break-all;word-break:break-word;}.rrss-navbar{margin:2rem 0;text-align:center}.rrss-navbar-list{display:inline-block;width:fit-content;margin-top:1rem}.rrss-navbar-list.not-animated>*{animation-duration:0s !important;-webkit-animation-duration:0s !important}.rrss-navbar-list-elem{display:inline-block;font-size:4rem;padding:0.5rem;color:white;transition:all 0.5s ease;animation:rotacionGuayReverse 2s}.rrss-navbar-list-elem a{color:inherit}.rrss-navbar-list-elem a:visited{color:inherit}@media all and (hover: hover){.rrss-navbar-list-elem:hover{animation:rotacionGuay 2s forwards;-webkit-filter:drop-shadow(4px 0px 1px black);-moz-filter:drop-shadow(4px 0px 1px black);filter:drop-shadow(0.5px 0.5px 2px black)}.rrss-navbar-list-elem__twitter:hover{color:#29a3ef}.rrss-navbar-list-elem__github:hover{color:gold}.rrss-navbar-list-elem__codepen:hover{color:#4ecd77}.rrss-navbar-list-elem__linkedin:hover{color:#1074af}}@keyframes rotacionGuay{0%{transform:rotate(0) translateY(0)}20%{transform:rotate(200deg) translateY(-20%)}40%{transform:rotate(160deg) translateY(-20%)}60%{transform:rotate(190deg) translateY(-20%)}80%{transform:rotate(170deg) translateY(-20%)}100%{transform:rotate(180deg) translateY(-20%)}}@keyframes rotacionGuayReverse{100%{transform:rotate(0) translateY(0)}80%{transform:rotate(200deg) translateY(-20%)}60%{transform:rotate(160deg) translateY(-20%)}40%{transform:rotate(190deg) translateY(-20%)}20%{transform:rotate(170deg) translateY(-20%)}0%{transform:rotate(180deg) translateY(-20%)}}@media all and (max-width: 500px){.rrss-navbar{text-align:left;padding-left:2rem}}";

const RrssNavbar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentDidLoad() {
        //Tiene que durar 2s (el tiempo de la animación)
        setTimeout(() => {
            this.removeNotAnimatedClasses();
        }, 2000);
    }
    removeNotAnimatedClasses() {
        if (this.el && this.el.shadowRoot) {
            let notAnimatedEls = this.el.shadowRoot.querySelector('.not-animated');
            if (notAnimatedEls) {
                notAnimatedEls.classList.remove('not-animated');
            }
        }
    }
    render() {
        return (h("div", { class: "rrss-navbar" }, h("ul", { class: "rrss-navbar-list not-animated" }, h("li", { class: "rrss-navbar-list-elem rrss-navbar-list-elem__github" }, h("a", { href: "https://github.com/" + this.githubUser, target: "_blank" }, h("ion-icon", { name: "logo-github" }))), h("li", { class: "rrss-navbar-list-elem rrss-navbar-list-elem__twitter" }, h("a", { href: "https://twitter.com/" + this.twitterUser, target: "_blank" }, h("ion-icon", { name: "logo-twitter" }))), h("li", { class: "rrss-navbar-list-elem rrss-navbar-list-elem__codepen" }, h("a", { href: "https://codepen.io/" + this.codepenUser, target: "_blank" }, h("ion-icon", { name: "logo-codepen" }))), h("li", { class: "rrss-navbar-list-elem rrss-navbar-list-elem__linkedin" }, h("a", { href: "https://www.linkedin.com/in/" + this.linkedinUser, target: "_blank" }, h("ion-icon", { name: "logo-linkedin" }))))));
    }
    get el() { return getElement(this); }
};
RrssNavbar.style = rrssNavbarCss;

export { RrssNavbar as rrss_navbar };
