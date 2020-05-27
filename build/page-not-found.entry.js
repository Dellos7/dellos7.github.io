import { r as registerInstance, h } from './index-70ad26c6.js';

const pageNotFoundCss = "";

const PageNotFound = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", null, h("h3", null, "404: Page not found!!")));
    }
};
PageNotFound.style = pageNotFoundCss;

export { PageNotFound as page_not_found };
