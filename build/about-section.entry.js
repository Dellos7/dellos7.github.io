import { r as registerInstance, h } from './index-72207a8d.js';

const aboutSectionCss = "@import url(\"https://fonts.googleapis.com/css?family=Pacifico&display=swap\");*{padding:0;margin:0}html{box-sizing:border-box;font-size:62.5%;min-height:100%}:root{--primary-color:#24909c;--secondary-color:#206c75;--tertiary-color:#61bdc5}body{font-family:\"IBM Plex Mono\", monospace;font-size:2.3rem;background-image:linear-gradient(to left bottom, #24909c, #238792, #227e88, #21757f, #206c75)}.home-section{margin-top:3rem;font-family:\"Pacifico\", cursive;font-size:2rem;color:white;min-height:50rem}p{width:90%;margin-left:auto;margin-right:auto;margin-top:2rem}";

const AboutSection = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("section", { class: "home-section" }, h("section-title", null, "about me"), h("p", null, "Hey!")));
    }
};
AboutSection.style = aboutSectionCss;

export { AboutSection as about_section };
