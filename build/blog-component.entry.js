import { r as registerInstance, h } from './index-70ad26c6.js';

const blogComponentCss = "";

const BlogComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", null, h("slot", null)));
    }
};
BlogComponent.style = blogComponentCss;

export { BlogComponent as blog_component };
