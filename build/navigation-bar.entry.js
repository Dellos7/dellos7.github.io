import { r as registerInstance, h, c as getElement } from './index-70ad26c6.js';

const navigationBarCss = "@charset \"UTF-8\";@import url(\"https://fonts.googleapis.com/css?family=Pacifico&display=swap\");*{padding:0;margin:0}html{box-sizing:border-box;font-size:62.5%;min-height:100%}body{font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";font-size:2.3rem}p,li{overflow-wrap:break-word;word-wrap:break-word;-ms-word-break:break-all;word-break:break-all;word-break:break-word;}nav{font-family:\"IBM Plex Mono\", monospace;width:80%;margin:1.5rem auto}nav ul{display:flex;list-style:none;justify-content:center}nav ul li{position:relative;color:white;margin:1rem;font-weight:bold;overflow:hidden}nav ul li::before{opacity:0;content:\"\";width:100%;height:300%;border-radius:50%;position:absolute;transform:translate(-80%, -80%);z-index:-1;transition:all 0.5s linear, opacity 0s}nav ul li:hover{color:var(--primary-color)}nav ul li:hover::before{opacity:1;background-color:white;transform:translate(0%, 0%) scale(3)}nav a:link{text-decoration:none;color:inherit}nav a:active{color:inherit}nav a:visited{color:inherit}nav a.link-active{background-color:white;color:var(--secondary-color)}.menu-toggle{display:none}.menu-toggle__checkbox{display:none}.menu-toggle__button,.menu-toggle__navigation-background{position:fixed;top:3rem;right:2rem;height:5rem;width:5rem;z-index:2000;border-radius:50%;color:black;font-size:3rem;background-color:white;box-shadow:0 1rem 3rem rgba(0, 0, 0, 0.25);cursor:pointer}.menu-toggle__button-icon,.menu-toggle__navigation-background-icon{position:absolute;left:50%;top:50%;transform:translate(-50%, -50%);color:var(--primary-color);transform-origin:0 0}.menu-toggle__button-icon__default,.menu-toggle__navigation-background-icon__default{transition:opacity 0.3s, transform 0.3s}.menu-toggle__button-icon__checked,.menu-toggle__navigation-background-icon__checked{transition:opacity 0.3s, transform 0.3s;transform:rotate(-90deg) scale(0.5) translate(-50%, -50%);opacity:0}.menu-toggle__navigation-background{visibility:hidden;height:5rem;width:5rem;z-index:1000;background-image:radial-gradient(var(--primary-color), var(--tertiary-color));transition:all 0.3s ease-in-out;cursor:inherit;transform:scale(1)}.menu-toggle__checkbox:checked~.menu-toggle__navigation-background{visibility:visible;-ms-transform:scale(80);-webkit-transform:scale(80);transform:scale(80)}.menu-toggle__checkbox:checked~.menu-toggle__button>.menu-toggle__button-icon__default{transform:rotate(90deg) scale(0.5) translate(-50%, -50%);opacity:0}.menu-toggle__checkbox:checked~.menu-toggle__button>.menu-toggle__button-icon__checked{transform:rotate(0deg) scale(1) translate(-50%, -50%);opacity:1}@media all and (max-width: 768px){nav{position:fixed;left:-100%;top:50%;transform:translate(-50%, -50%);opacity:0;width:0;transition:all 0.5s ease-in-out}nav ul{flex-flow:column;align-items:center}nav ul li{font-size:3rem;margin:2rem}.menu-toggle{display:inherit}.menu-toggle__checkbox:checked~nav{left:50%;opacity:1;width:100%;z-index:1500}.menu-toggle__checkbox:checked~nav ul li{z-index:1500;text-align:center}}";

const NavigationBar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    navElementClick(_) {
        if (this.el && this.el.shadowRoot) {
            const checkboxElLabelBtn = this.el.shadowRoot.querySelector('.menu-toggle__button');
            const checkboxElLabelCheck = this.el.shadowRoot.querySelector('.menu-toggle__checkbox');
            if (checkboxElLabelCheck.checked) {
                checkboxElLabelBtn.click();
            }
        }
    }
    render() {
        return (h("div", null, h("input", { type: "checkbox", class: "menu-toggle__checkbox", id: "menu-toggle" }), h("label", { htmlFor: "menu-toggle", class: "menu-toggle menu-toggle__button" }, h("ion-icon", { class: "menu-toggle menu-toggle__button-icon menu-toggle__button-icon__default", name: "ellipsis-vertical" }), h("ion-icon", { class: "menu-toggle menu-toggle__button-icon menu-toggle__button-icon__checked", name: "close" })), h("div", { class: "menu-toggle__navigation-background" }, "\u00A0"), h("nav", null, h("ul", null, h("li", { onClick: (e) => this.navElementClick(e) }, h("stencil-route-link", { url: "/", activeClass: "link-active", exact: true }, "/home")), h("li", { onClick: (e) => this.navElementClick(e) }, h("stencil-route-link", { url: "/blog", activeClass: "link-active" }, "/blog")), h("li", { onClick: (e) => this.navElementClick(e) }, h("stencil-route-link", { url: "/about", activeClass: "link-active" }, "/about")), h("li", { onClick: (e) => this.navElementClick(e) }, h("stencil-route-link", { url: "/contact", activeClass: "link-active" }, "/contact"))))));
    }
    get el() { return getElement(this); }
};
NavigationBar.style = navigationBarCss;

export { NavigationBar as navigation_bar };
