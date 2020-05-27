import { r as registerInstance, h } from './index-70ad26c6.js';

const footerComponentCss = "@import url(\"https://fonts.googleapis.com/css?family=Pacifico&display=swap\");*{padding:0;margin:0}html{box-sizing:border-box;font-size:62.5%;min-height:100%}body{font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";font-size:2.3rem}p,li{overflow-wrap:break-word;word-wrap:break-word;-ms-word-break:break-all;word-break:break-all;word-break:break-word;}.footer{color:white;width:90}.footer .copyright{font-family:\"Pacifico\", cursive;width:90%;margin:2rem auto;text-align:center;font-weight:100;letter-spacing:1px;border-top:1px solid white;padding-top:1rem}.footer .oos-site{font-size:2rem;width:90%;text-align:center;margin:2rem auto}";

const FooterComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "footer" }, h("div", { class: "copyright" }, "david l\u00F3pez castellote \u24B8 ", new Date().getFullYear()), h("div", { class: "oos-site" }, h("a", { href: "https://github.com/Dellos7/dellos7.github.io/tree/source", target: "_blank", rel: "noopener noreferrer" }, h("ion-icon", { name: "logo-github" }), "\u00A0Est\u00E1 p\u00E1gina es open source"))));
    }
};
FooterComponent.style = footerComponentCss;

export { FooterComponent as footer_component };
