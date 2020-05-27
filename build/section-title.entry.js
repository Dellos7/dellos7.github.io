import { r as registerInstance, h } from './index-70ad26c6.js';

const sectionTitleCss = "@import url(\"https://fonts.googleapis.com/css?family=Pacifico&display=swap\");*{padding:0;margin:0}html{box-sizing:border-box;font-size:62.5%;min-height:100%}:root{--primary-color:#24909c;--secondary-color:#206c75;--tertiary-color:#61bdc5;--amarillo:#fdbb2d;--quaternary-color:#86f3fc;--fifth-color:rgb(19,243,185);--javascript:#f7df1e;--c:#419a49;--java:#f73737;--css:#2caddd;--html:#ff4800;--typescript:#006fc5;--cpp:#5a92cd;--python:linear-gradient( to right, #2d6396, #ffce39 );--shell:#222245}body{font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";font-size:2.3rem}p,li{overflow-wrap:break-word;word-wrap:break-word;-ms-word-break:break-all;word-break:break-all;word-break:break-word;}h2{font-family:\"Pacifico\", cursive;font-size:3rem;border-top:1.5px solid white;border-bottom:1.5px solid white;color:white;padding-left:2rem;width:90%;margin:0 auto}";

const SectionTitle = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("h2", null, h("slot", null)));
    }
};
SectionTitle.style = sectionTitleCss;

export { SectionTitle as section_title };
