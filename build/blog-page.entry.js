import { r as registerInstance, h } from './index-70ad26c6.js';
import { H as Helmet, s as seoConfig } from './stencil-helmet-9238e783.js';
import { B as BlogService } from './blog-service-32da7209.js';
import { t as tagsToHtmlList } from './utils-822ea227.js';

const blogPageCss = "@import url(\"https://fonts.googleapis.com/css?family=Pacifico&display=swap\");*{padding:0;margin:0}html{box-sizing:border-box;font-size:62.5%;min-height:100%}body{font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";font-size:2.3rem}p,li{overflow-wrap:break-word;word-wrap:break-word;-ms-word-break:break-all;word-break:break-all;word-break:break-word;}.blog-page{width:95%;margin:2rem auto}.blog-page ul.posts-list{list-style:none;display:flex;flex-wrap:wrap;flex-flow:column;justify-content:space-around}.blog-page stencil-route-link a:link{text-decoration:none}.posts-list__item{background-color:var(--secondary-color);border-radius:8px;margin-bottom:2rem;overflow:hidden;-webkit-box-shadow:0px 7px 36px -15px #61bdc5;-moz-box-shadow:0px 7px 36px -15px #61bdc5;box-shadow:0px 7px 36px -15px #61bdc5;font-size:1.8rem;-webkit-animation:fadeIn 1s linear;animation:fadeIn 1s linear}.posts-list__item image-filter::part(img){padding-top:56.25%}.posts-list__item-title{padding:1rem 1.5rem 0.3rem 1.5rem;color:var(--quaternary-color)}.posts-list__item-date{font-weight:bold;margin-top:0.5rem;padding:0.3rem 1.5rem}.posts-list__item-summary{text-align:justify;color:white;font-size:1.6rem;margin-top:0.5rem;padding:0.3rem 1.5rem;padding-bottom:2rem}.pager{position:relative;min-height:4rem}.pager a[class*=pager__]{text-decoration:underline}.pager__next{cursor:pointer;position:absolute !important;right:0}.pager__prev{cursor:pointer;position:absolute !important;left:0}.no-posts{color:white;text-align:center}@media all and (min-width: 1124px){.blog-page{width:90%}}@media all and (min-width: 768px){.blog-page ul.posts-list{flex-flow:row;flex-wrap:wrap}.posts-list__item{width:45%}}@media all and (max-width: 768px) and (min-width: 500px){.blog-page{width:70%}}@media screen and (hover: hover){.pager a[class*=pager__]{text-decoration:none}}@-webkit-keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}";

const BlogPage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.idxCurrentFirstPost = 0;
        this.postsPage = 0;
        this.maxPosts = 6;
    }
    async componentWillLoad() {
        this.imgFilterFromColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color');
        this.imgFilterToColor = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color');
        this.posts = await this.readPosts();
        this.maxPages = Math.floor(BlogService.posts.length / this.maxPosts);
        console.log('maxPages', this.maxPages);
    }
    async componentWillUpdate() {
        this.posts = await this.readPosts();
    }
    readPosts() {
        return BlogService.readPosts(this.idxCurrentFirstPost, this.idxCurrentFirstPost + this.maxPosts);
    }
    prevPage() {
        if (this.postsPage > 0) {
            this.postsPage--;
            this.idxCurrentFirstPost = this.postsPage * this.maxPosts;
        }
    }
    nextPage() {
        if (this.postsPage < this.maxPages) {
            this.postsPage++;
            this.idxCurrentFirstPost = this.postsPage * this.maxPosts;
        }
    }
    formatDate(date) {
        return date.toLocaleDateString();
    }
    render() {
        return (h("div", { class: "blog-page" }, h(Helmet, null, h("title", null, "\uD83D\uDCD6 Blog ", seoConfig.pageTitleSuffix)), h("header", null, h("user-name", { content: "Blog", showDomain: true })), h("main", null, h("div", { class: "pager" }, this.postsPage > 0 ? h("a", { class: "pager__prev", onClick: () => this.prevPage() }, "\u2190 M\u00E1s nuevos") : '', this.postsPage < this.maxPages ? h("a", { class: "pager__next", onClick: () => this.nextPage() }, "Anteriores \u2192") : ''), h("ul", { class: "posts-list" }, this.posts.length > 0 ?
            this.posts.map((post) => h("li", { class: "posts-list__item" }, h("stencil-route-link", { url: "/" + BlogService.config.posts_route + "/" + post.unique_link }, h("image-filter", { fromColor: this.imgFilterFromColor, toColor: this.imgFilterToColor, src: post.metadata.image }), h("h2", { class: "posts-list__item-title" }, post.metadata.title)), h("div", { class: "posts-list__item-tags", innerHTML: tagsToHtmlList(post.metadata.tags) }), h("div", { class: "posts-list__item-date texto-gradiente-1" }, this.formatDate(post.metadata.date)), h("div", { class: "posts-list__item-summary" }, post.metadata.summary))) : h("p", { class: "no-posts" }, "- No hay posts -")))));
    }
};
BlogPage.style = blogPageCss;

export { BlogPage as blog_page };
