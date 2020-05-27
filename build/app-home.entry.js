import { r as registerInstance, h } from './index-70ad26c6.js';
import { H as Helmet, s as seoConfig } from './stencil-helmet-9238e783.js';

const appHomeCss = "@import url(\"https://fonts.googleapis.com/css?family=Pacifico&display=swap\");*{padding:0;margin:0}html{box-sizing:border-box;font-size:62.5%;min-height:100%}body{font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";font-size:2.3rem}p,li{overflow-wrap:break-word;word-wrap:break-word;-ms-word-break:break-all;word-break:break-all;word-break:break-word;}.app-home{margin:0 auto;margin-top:3rem}@media all and (min-width: 1024px){.app-home{width:70%}}@media all and (max-width: 1024px) and (min-width: 768px){.app-home{width:90%}}";

const AppHome = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: 'app-home' }, h(Helmet, null, h("title", null, seoConfig.mainPageTitle), h("meta", { name: "description", content: seoConfig.mainPageDescription }), h("meta", { property: "og:title", content: seoConfig.mainPageTitle }), h("meta", { property: "og:image", content: seoConfig.mainPageImage }), h("meta", { property: "og:description", content: seoConfig.mainPageDescription })), h("header", null, h("user-name", { content: "david l\u00F3pez castellote", link: "/" })), h("main", null, h("dlc-terminal", null))));
    }
};
AppHome.style = appHomeCss;

export { AppHome as app_home };
