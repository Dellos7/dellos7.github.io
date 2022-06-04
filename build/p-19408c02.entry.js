import{r as t,h as e}from"./p-d3b1049f.js";import{B as o,t as i}from"./p-9d53548e.js";import{s as a}from"./p-58974bd5.js";const r={title:a.blog.title+a.titleSuffix,meta:[{name:"description",content:a.blog.description},{property:"og:title",content:a.blog.title},{property:"og:description",content:a.blog.description},{property:"og:image",content:a.blog.image},{property:"og:url",content:`${window.location.origin}${window.location.pathname}`},{name:"twitter:title",content:a.blog.title},{name:"twitter:description",content:a.blog.description},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:site",content:a.twitterUser},{name:"twitter:creator",content:a.twitterUser},{name:"twitter:image",content:a.blog.image}],links:[{rel:"canonical",href:`${window.location.origin}${window.location.pathname}`}]};class s{constructor(e){t(this,e),this.idxCurrentFirstPost=0,this.postsPage=0,this.maxPosts=6}async componentWillLoad(){this.imgFilterFromColor=getComputedStyle(document.documentElement).getPropertyValue("--primary-color"),this.imgFilterToColor=getComputedStyle(document.documentElement).getPropertyValue("--secondary-color"),this.posts=await this.readPosts(),this.maxPages=Math.floor(o.posts.length/this.maxPosts)}async componentWillUpdate(){this.posts=await this.readPosts()}readPosts(){return o.readPosts(this.idxCurrentFirstPost,this.idxCurrentFirstPost+this.maxPosts)}prevPage(){this.postsPage>0&&(this.postsPage--,this.idxCurrentFirstPost=this.postsPage*this.maxPosts)}nextPage(){this.postsPage<this.maxPages&&(this.postsPage++,this.idxCurrentFirstPost=this.postsPage*this.maxPosts)}formatDate(t){return t.toLocaleDateString()}render(){return e("div",{class:"blog-page"},e("dlc-seo-tags",{data:r}),e("header",null,e("user-name",{content:"Blog",showDomain:!0})),e("main",null,e("div",{class:"pager"},this.postsPage>0?e("a",{class:"pager__prev",onClick:()=>this.prevPage()},"← Más nuevos"):"",this.postsPage<this.maxPages?e("a",{class:"pager__next",onClick:()=>this.nextPage()},"Anteriores →"):""),e("ul",{class:"posts-list"},this.posts.length>0?this.posts.map(t=>e("li",{class:"posts-list__item"},e("stencil-route-link",{url:"/"+o.config.posts_route+"/"+t.unique_link},e("image-filter",{doNotApplyFilter:t.metadata.do_not_apply_image_filter,fromColor:this.imgFilterFromColor,toColor:this.imgFilterToColor,src:t.metadata.image}),e("h2",{class:"posts-list__item-title"},t.metadata.title)),e("div",{class:"posts-list__item-tags",innerHTML:i(t.metadata.tags)}),e("div",{class:"posts-list__item-date texto-gradiente-1"},this.formatDate(t.metadata.date)),e("div",{class:"posts-list__item-ert"},e("ion-icon",{name:"book-outline"}),e("ion-icon",{name:"hourglass-outline"})," ",t.metadata.estimatedReadingTime.roundedMinutes," min."),e("div",{class:"posts-list__item-summary"},t.metadata.summary))):e("p",{class:"no-posts"},"- No hay posts -")),e("div",{class:"pager"},this.postsPage>0?e("a",{class:"pager__prev",onClick:()=>this.prevPage()},"← Más nuevos"):"",this.postsPage<this.maxPages?e("a",{class:"pager__next",onClick:()=>this.nextPage()},"Anteriores →"):"")))}}s.style='@import url("https://fonts.googleapis.com/css?family=Pacifico&display=swap");*{padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box}html{font-size:62.5%;min-height:100%}body{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";font-size:2.3rem}p,li{overflow-wrap:break-word;word-wrap:break-word;-ms-word-break:break-all;word-break:break-all;word-break:break-word;}.btn-wrapper{text-align:center}.btn-primary{font-family:inherit;font-size:2rem;display:block;margin:2rem auto;padding:1rem 2rem;background-color:var(--tertiary-color);border:4px solid var(--secondary-color);color:var(--secondary-color);-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out;-webkit-box-shadow:1px 3px 6px -2px rgba(0, 0, 0, 0.75);-moz-box-shadow:1px 3px 6px -2px rgba(0, 0, 0, 0.75);box-shadow:1px 3px 6px -2px rgba(0, 0, 0, 0.75);font-weight:bold}a.btn-primary{display:inline-block;text-decoration:none}.btn-primary:hover{cursor:pointer;-webkit-transform:translateY(-0.2rem);transform:translateY(-0.2rem);-webkit-box-shadow:1px 5px 9px -2px rgba(0, 0, 0, 0.75);-moz-box-shadow:1px 5px 9px -2px rgba(0, 0, 0, 0.75);box-shadow:1px 5px 9px -2px rgba(0, 0, 0, 0.75)}.underline{text-decoration:underline}.blog-page{margin:2rem auto;}.blog-page main{margin:0 auto;width:95%}.blog-page ul.posts-list{list-style:none;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:distribute;justify-content:space-around}.blog-page stencil-route-link a:link{text-decoration:none}.blog-page .posts-list__item{background-color:var(--secondary-color);border-radius:8px;margin-bottom:2rem;overflow:hidden;-webkit-box-shadow:4px 4px 15px -2px rgba(0, 0, 0, 0.75);-moz-box-shadow:4px 4px 15px -2px rgba(0, 0, 0, 0.75);box-shadow:4px 4px 15px -2px rgba(0, 0, 0, 0.75);font-size:1.8rem;-webkit-animation:fadeIn 1s linear;animation:fadeIn 1s linear}.blog-page .posts-list__item image-filter::part(img){padding-top:56.25%}.blog-page .posts-list__item-title{padding:1rem 1.5rem 0.3rem 1.5rem;color:white}.blog-page .posts-list__item-tags{padding:0 1.5rem}.blog-page .posts-list__item-date{font-weight:bold;margin-top:0.5rem;padding:0.3rem 1.5rem}.blog-page .posts-list__item-ert{font-weight:bold;margin-top:0.5rem;padding:0.3rem 1.5rem;color:var(--amarillo)}.blog-page .posts-list__item-summary{text-align:justify;color:white;font-size:1.6rem;margin-top:0.5rem;padding:0.3rem 1.5rem;padding-bottom:2rem}.blog-page .pager{position:relative;min-height:4rem}.blog-page .pager a[class*=pager__]{text-decoration:underline}.blog-page .pager__next{cursor:pointer;position:absolute !important;right:0}.blog-page .pager__prev{cursor:pointer;position:absolute !important;left:0}.blog-page .no-posts{color:white;text-align:center}@media all and (min-width: 1124px){.blog-page main{width:90%}}@media all and (max-width: 768px) and (min-width: 500px){.blog-page main{width:70%}}@media all and (min-width: 768px){.blog-page ul.posts-list{-ms-flex-flow:row;flex-flow:row;-ms-flex-wrap:wrap;flex-wrap:wrap}.blog-page .posts-list__item{width:45%}}@media screen and (hover: hover){.blog-page .pager a[class*=pager__]{text-decoration:none}}@-webkit-keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}';export{s as blog_page}