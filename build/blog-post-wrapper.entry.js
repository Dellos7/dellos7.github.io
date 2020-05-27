import { r as registerInstance, h } from './index-70ad26c6.js';
import { H as Helmet, s as seoConfig } from './stencil-helmet-9238e783.js';
import { B as BlogService } from './blog-service-32da7209.js';
import { t as tagsToHtmlList } from './utils-822ea227.js';

const blogPostWrapperCss = "@import url(\"https://fonts.googleapis.com/css?family=Pacifico&display=swap\");*{padding:0;margin:0}html{box-sizing:border-box;font-size:62.5%;min-height:100%}body{font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";font-size:2.3rem}p,li{overflow-wrap:break-word;word-wrap:break-word;-ms-word-break:break-all;word-break:break-all;word-break:break-word;}.blog-post-wrapper{width:90%;margin:2rem auto}.back-button{color:white;margin:2rem 0}image-filter::part(img){padding-top:56.25%;border-radius:8px;overflow:hidden;-webkit-box-shadow:0px 7px 36px -15px #61bdc5;-moz-box-shadow:0px 7px 36px -15px #61bdc5;box-shadow:0px 7px 36px -15px #61bdc5}.post-title h1{font-size:3.5rem;width:calc(100% - 4rem + 1px);text-align:center;color:white;background-color:rgba(32, 108, 117, 0.8);position:absolute;bottom:0;left:50%;transform:translateX(-50%);padding:2rem}.post-date{margin:2rem auto;width:fit-content;color:var(--quaternary-color)}.post-date::before{content:\"- \"}.post-date::after{content:\" -\"}@media all and (max-width: 600px){.post-title h1{font-size:2.5rem}}@media all and (min-width: 1124px){.blog-post-wrapper{width:70%}.image-filter-wrapper{width:80%;margin:0 auto}}@media all and (max-width: 1124px) and (min-width: 768px){.image-filter-wrapper{width:80%;margin:0 auto}}";

const BlogPostWrapper = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentWillLoad() {
        //Maybe we have not passed the metadata as property, then we load the metadata using the blog-component
        if (!this.metadata)
            this.metadata = BlogService.getMetadataForPost(this.uniqueLink);
        this.imgFilterFromColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color');
        this.imgFilterToColor = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color');
    }
    imageUrl(image) {
        if (image.startsWith('http://') || image.startsWith('https://')) {
            return image;
        }
        return window.location.origin + image;
    }
    formatDate(date) {
        return date.toLocaleDateString();
    }
    render() {
        if (!this.uniqueLink || !this.metadata) {
            return (h("div", null, "Loading..."));
        }
        else {
            return (h("div", { class: "blog-post-wrapper" }, h(Helmet, null, h("title", null, this.metadata.title, " ", seoConfig.pageTitleSuffix), h("link", { rel: "canonical", href: window.location.origin + window.location.pathname }), this.metadata.tags ? h("meta", { name: "keywords", content: this.metadata.tags }) : '', h("meta", { name: "og:title", property: "og:title", content: this.metadata.title }), this.metadata.summary ? h("meta", { name: "description", content: this.metadata.summary }) : '', this.metadata.summary ? h("meta", { name: "og:description", property: "og:description", content: this.metadata.summary }) : '', this.metadata.summary ? h("meta", { name: "twitter:description", content: this.metadata.summary }) : '', h("meta", { name: "og:image", property: "og:image", content: this.imageUrl(this.metadata.image) }), h("meta", { name: "twitter:title", content: this.metadata.title }), h("meta", { name: "twitter:card", content: "summary_large_image" }), h("meta", { name: "twitter:site", content: seoConfig.twitterUser }), h("meta", { name: "twitter:image", content: this.imageUrl(this.metadata.image) })), h("div", { class: "back-button" }, h("stencil-route-link", { class: "link", url: "/blog" }, "\u2190Volver al blog")), h("blog-post", { uniqueLink: this.uniqueLink }, h("div", { slot: "before" }, h("div", { class: "image-filter-wrapper" }, h("image-filter", { fromColor: this.imgFilterFromColor, toColor: this.imgFilterToColor, src: this.metadata.image }, h("div", { class: "post-title", slot: "inside" }, h("h1", null, this.metadata.title)))), h("h3", { class: "post-date" }, this.formatDate(this.metadata.date)), h("div", { innerHTML: tagsToHtmlList(this.metadata.tags) })))));
        }
    }
};
BlogPostWrapper.style = blogPostWrapperCss;

export { BlogPostWrapper as blog_post_wrapper };
