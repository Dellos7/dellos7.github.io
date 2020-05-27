import { r as registerInstance, h, c as getElement } from './index-70ad26c6.js';

const imageFilterCss = "@import url(\"https://fonts.googleapis.com/css?family=Pacifico&display=swap\");*{padding:0;margin:0}html{box-sizing:border-box;font-size:62.5%;min-height:100%}:root{--primary-color:#24909c;--secondary-color:#206c75;--tertiary-color:#61bdc5;--amarillo:#fdbb2d;--quaternary-color:#86f3fc;--fifth-color:rgb(19,243,185);--javascript:#f7df1e;--c:#419a49;--java:#f73737;--css:#2caddd;--html:#ff4800;--typescript:#006fc5;--cpp:#5a92cd;--python:linear-gradient( to right, #2d6396, #ffce39 );--shell:#222245}body{font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";font-size:2.3rem}p,li{overflow-wrap:break-word;word-wrap:break-word;-ms-word-break:break-all;word-break:break-all;word-break:break-word;}.img-filter{-webkit-background-blend-mode:screen;background-blend-mode:screen;background-size:cover;position:relative}slot[name=inside]::slotted(*){position:absolute;top:0;left:0;width:100%;height:100%}";

const ImageFilter = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentDidLoad() {
        if (this.el && this.el.shadowRoot) {
            this.imgFilterEl = this.el.shadowRoot.querySelector('.img-filter');
        }
    }
    render() {
        if (this.imgFilterEl) {
            this.imgFilterEl.style.backgroundImage = `linear-gradient( to right bottom, ${this.fromColor}, ${this.toColor}), url(${this.src})`;
        }
        return (h("div", { class: "img-filter", part: "img" }, h("slot", { name: "inside" })));
    }
    get el() { return getElement(this); }
};
ImageFilter.style = imageFilterCss;

export { ImageFilter as image_filter };
