import { r as registerInstance, h, c as getElement } from './index-70ad26c6.js';

const userNameCss = "@import url(\"https://fonts.googleapis.com/css?family=Pacifico&display=swap\");*{padding:0;margin:0}html{box-sizing:border-box;font-size:62.5%;min-height:100%}:root{--primary-color:#24909c;--secondary-color:#206c75;--tertiary-color:#61bdc5;--amarillo:#fdbb2d;--quaternary-color:#86f3fc;--fifth-color:rgb(19,243,185);--javascript:#f7df1e;--c:#419a49;--java:#f73737;--css:#2caddd;--html:#ff4800;--typescript:#006fc5;--cpp:#5a92cd;--python:linear-gradient( to right, #2d6396, #ffce39 );--shell:#222245}body{font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";font-size:2.3rem}p,li{overflow-wrap:break-word;word-wrap:break-word;-ms-word-break:break-all;word-break:break-all;word-break:break-word;}.user-name{position:relative;width:90%;border-bottom:1.5px solid white;border-top:1.5px solid white;border-radius:0.1rem;margin:3rem auto}.user-name__title{font-family:\"Pacifico\", cursive;font-size:3.5rem;text-align:center;letter-spacing:0.2rem;padding:1rem;width:fit-content;margin:0 auto;position:relative;color:white}.user-name__title.show-domain::after{font-family:\"Consolas\", monospace;content:\"dlopezcastellote.dev\";font-size:40%;position:absolute;bottom:0;left:50%;transform:translateX(-50%);opacity:0.6}@keyframes colorTexto{to{background-position:0 0;background:#24909c;background:white;background:linear-gradient(90deg, #13f3b9 0%, #5878f3 100%);-webkit-background-clip:text;background-clip:text}}";

const UserName = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentDidLoad() {
        if (this.showDomain && this.el) {
            this.el.querySelector('.user-name__title').classList.add('show-domain');
        }
    }
    render() {
        return (h("div", { class: "user-name" }, h("h1", { class: "user-name__title" }, this.link ? h("a", { class: "no-decorar", href: this.link }, this.content) : h("span", null, this.content))));
    }
    get el() { return getElement(this); }
};
UserName.style = userNameCss;

export { UserName as user_name };
