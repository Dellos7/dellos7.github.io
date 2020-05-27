import { r as registerInstance, h } from './index-70ad26c6.js';

const menuButtonCss = "@import url(\"https://fonts.googleapis.com/css?family=Pacifico&display=swap\");*{padding:0;margin:0}html{box-sizing:border-box;font-size:62.5%;min-height:100%}:root{--primary-color:#24909c;--secondary-color:#206c75;--tertiary-color:#61bdc5;--amarillo:#fdbb2d;--quaternary-color:#86f3fc;--fifth-color:rgb(19,243,185);--javascript:#f7df1e;--c:#419a49;--java:#f73737;--css:#2caddd;--html:#ff4800;--typescript:#006fc5;--cpp:#5a92cd;--python:linear-gradient( to right, #2d6396, #ffce39 );--shell:#222245}body{font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";font-size:2.3rem}p,li{overflow-wrap:break-word;word-wrap:break-word;-ms-word-break:break-all;word-break:break-all;word-break:break-word;}.menu-toggle{display:none}.menu-toggle__checkbox{display:none}.menu-toggle__button{position:fixed;top:calc( (10vh + 2rem) / 2 - 0.5rem);right:2rem;height:5rem;width:5rem;z-index:2000;border-radius:50%;color:black;font-size:3rem;background-color:white;box-shadow:0 1rem 3rem rgba(0, 0, 0, 0.25);cursor:pointer;transition:transform 0.3s linear}.menu-toggle__button-icon{position:absolute;left:50%;top:50%;transform:translate(-50%, -50%)}@media all and (max-width: 768px){.menu-toggle{display:block}}";

const MenuButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "menu-toggle" }, h("input", { type: "checkbox", class: "menu-toggle__checkbox", id: "menu-toggle" }), h("label", { htmlFor: "menu-toggle", class: "menu-toggle__button" }, h("ion-icon", { class: "menu-toggle__button-icon", name: "ellipsis-vertical-outline" }))));
    }
};
MenuButton.style = menuButtonCss;

export { MenuButton as menu_button };
