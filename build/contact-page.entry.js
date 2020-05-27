import { r as registerInstance, h } from './index-70ad26c6.js';
import { H as Helmet, s as seoConfig } from './stencil-helmet-9238e783.js';

const contactPageCss = "";

const ContactPage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", null, h(Helmet, null, h("title", null, "Sobre m\u00ED ", seoConfig.pageTitleSuffix)), h("header", null, h("user-name", { content: "Contacto", showDomain: true })), h("p", { style: { textAlign: 'center' } }, "\uD83D\uDD28")));
    }
};
ContactPage.style = contactPageCss;

export { ContactPage as contact_page };
