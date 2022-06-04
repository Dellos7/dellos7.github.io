/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { MatchResults, RouterHistory } from "@stencil/router";
export namespace Components {
    interface AboutPage {
    }
    interface AppHome {
    }
    interface AppProfile {
        "match": MatchResults;
    }
    interface AppRoot {
    }
    interface BlogComponent {
    }
    interface BlogPage {
        "history": RouterHistory;
    }
    interface BlogPost {
        "history": RouterHistory;
        "match": MatchResults;
        "metadata": string;
        "uniqueLink": string;
    }
    interface BlogPostWrapper {
        "metadata": any;
        "uniqueLink": string;
    }
    interface ContactFormError {
    }
    interface ContactFormSubmited {
    }
    interface ContactPage {
    }
    interface DlcTerminal {
    }
    interface FooterComponent {
    }
    interface ImageFilter {
        "doNotApplyFilter": boolean;
        "fromColor": string;
        "src": string;
        "toColor": string;
    }
    interface MenuButton {
    }
    interface NavigationBar {
    }
    interface PageNotFound {
    }
    interface ProfileImage {
    }
    interface RrssNavbar {
        "codepenUser": string;
        "githubUser": string;
        "linkedinUser": string;
        "twitterUser": string;
        "youtubeChannel": string;
    }
    interface ScrollToTopButton {
    }
    interface SectionTitle {
    }
    interface ServiciosPage {
    }
    interface UserName {
        "content": string;
        "link": string;
        "showDomain": boolean;
    }
}
declare global {
    interface HTMLAboutPageElement extends Components.AboutPage, HTMLStencilElement {
    }
    var HTMLAboutPageElement: {
        prototype: HTMLAboutPageElement;
        new (): HTMLAboutPageElement;
    };
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {
    }
    var HTMLAppProfileElement: {
        prototype: HTMLAppProfileElement;
        new (): HTMLAppProfileElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLBlogComponentElement extends Components.BlogComponent, HTMLStencilElement {
    }
    var HTMLBlogComponentElement: {
        prototype: HTMLBlogComponentElement;
        new (): HTMLBlogComponentElement;
    };
    interface HTMLBlogPageElement extends Components.BlogPage, HTMLStencilElement {
    }
    var HTMLBlogPageElement: {
        prototype: HTMLBlogPageElement;
        new (): HTMLBlogPageElement;
    };
    interface HTMLBlogPostElement extends Components.BlogPost, HTMLStencilElement {
    }
    var HTMLBlogPostElement: {
        prototype: HTMLBlogPostElement;
        new (): HTMLBlogPostElement;
    };
    interface HTMLBlogPostWrapperElement extends Components.BlogPostWrapper, HTMLStencilElement {
    }
    var HTMLBlogPostWrapperElement: {
        prototype: HTMLBlogPostWrapperElement;
        new (): HTMLBlogPostWrapperElement;
    };
    interface HTMLContactFormErrorElement extends Components.ContactFormError, HTMLStencilElement {
    }
    var HTMLContactFormErrorElement: {
        prototype: HTMLContactFormErrorElement;
        new (): HTMLContactFormErrorElement;
    };
    interface HTMLContactFormSubmitedElement extends Components.ContactFormSubmited, HTMLStencilElement {
    }
    var HTMLContactFormSubmitedElement: {
        prototype: HTMLContactFormSubmitedElement;
        new (): HTMLContactFormSubmitedElement;
    };
    interface HTMLContactPageElement extends Components.ContactPage, HTMLStencilElement {
    }
    var HTMLContactPageElement: {
        prototype: HTMLContactPageElement;
        new (): HTMLContactPageElement;
    };
    interface HTMLDlcTerminalElement extends Components.DlcTerminal, HTMLStencilElement {
    }
    var HTMLDlcTerminalElement: {
        prototype: HTMLDlcTerminalElement;
        new (): HTMLDlcTerminalElement;
    };
    interface HTMLFooterComponentElement extends Components.FooterComponent, HTMLStencilElement {
    }
    var HTMLFooterComponentElement: {
        prototype: HTMLFooterComponentElement;
        new (): HTMLFooterComponentElement;
    };
    interface HTMLImageFilterElement extends Components.ImageFilter, HTMLStencilElement {
    }
    var HTMLImageFilterElement: {
        prototype: HTMLImageFilterElement;
        new (): HTMLImageFilterElement;
    };
    interface HTMLMenuButtonElement extends Components.MenuButton, HTMLStencilElement {
    }
    var HTMLMenuButtonElement: {
        prototype: HTMLMenuButtonElement;
        new (): HTMLMenuButtonElement;
    };
    interface HTMLNavigationBarElement extends Components.NavigationBar, HTMLStencilElement {
    }
    var HTMLNavigationBarElement: {
        prototype: HTMLNavigationBarElement;
        new (): HTMLNavigationBarElement;
    };
    interface HTMLPageNotFoundElement extends Components.PageNotFound, HTMLStencilElement {
    }
    var HTMLPageNotFoundElement: {
        prototype: HTMLPageNotFoundElement;
        new (): HTMLPageNotFoundElement;
    };
    interface HTMLProfileImageElement extends Components.ProfileImage, HTMLStencilElement {
    }
    var HTMLProfileImageElement: {
        prototype: HTMLProfileImageElement;
        new (): HTMLProfileImageElement;
    };
    interface HTMLRrssNavbarElement extends Components.RrssNavbar, HTMLStencilElement {
    }
    var HTMLRrssNavbarElement: {
        prototype: HTMLRrssNavbarElement;
        new (): HTMLRrssNavbarElement;
    };
    interface HTMLScrollToTopButtonElement extends Components.ScrollToTopButton, HTMLStencilElement {
    }
    var HTMLScrollToTopButtonElement: {
        prototype: HTMLScrollToTopButtonElement;
        new (): HTMLScrollToTopButtonElement;
    };
    interface HTMLSectionTitleElement extends Components.SectionTitle, HTMLStencilElement {
    }
    var HTMLSectionTitleElement: {
        prototype: HTMLSectionTitleElement;
        new (): HTMLSectionTitleElement;
    };
    interface HTMLServiciosPageElement extends Components.ServiciosPage, HTMLStencilElement {
    }
    var HTMLServiciosPageElement: {
        prototype: HTMLServiciosPageElement;
        new (): HTMLServiciosPageElement;
    };
    interface HTMLUserNameElement extends Components.UserName, HTMLStencilElement {
    }
    var HTMLUserNameElement: {
        prototype: HTMLUserNameElement;
        new (): HTMLUserNameElement;
    };
    interface HTMLElementTagNameMap {
        "about-page": HTMLAboutPageElement;
        "app-home": HTMLAppHomeElement;
        "app-profile": HTMLAppProfileElement;
        "app-root": HTMLAppRootElement;
        "blog-component": HTMLBlogComponentElement;
        "blog-page": HTMLBlogPageElement;
        "blog-post": HTMLBlogPostElement;
        "blog-post-wrapper": HTMLBlogPostWrapperElement;
        "contact-form-error": HTMLContactFormErrorElement;
        "contact-form-submited": HTMLContactFormSubmitedElement;
        "contact-page": HTMLContactPageElement;
        "dlc-terminal": HTMLDlcTerminalElement;
        "footer-component": HTMLFooterComponentElement;
        "image-filter": HTMLImageFilterElement;
        "menu-button": HTMLMenuButtonElement;
        "navigation-bar": HTMLNavigationBarElement;
        "page-not-found": HTMLPageNotFoundElement;
        "profile-image": HTMLProfileImageElement;
        "rrss-navbar": HTMLRrssNavbarElement;
        "scroll-to-top-button": HTMLScrollToTopButtonElement;
        "section-title": HTMLSectionTitleElement;
        "servicios-page": HTMLServiciosPageElement;
        "user-name": HTMLUserNameElement;
    }
}
declare namespace LocalJSX {
    interface AboutPage {
    }
    interface AppHome {
    }
    interface AppProfile {
        "match"?: MatchResults;
    }
    interface AppRoot {
    }
    interface BlogComponent {
    }
    interface BlogPage {
        "history"?: RouterHistory;
    }
    interface BlogPost {
        "history"?: RouterHistory;
        "match"?: MatchResults;
        "metadata"?: string;
        "uniqueLink"?: string;
    }
    interface BlogPostWrapper {
        "metadata"?: any;
        "uniqueLink"?: string;
    }
    interface ContactFormError {
    }
    interface ContactFormSubmited {
    }
    interface ContactPage {
    }
    interface DlcTerminal {
    }
    interface FooterComponent {
    }
    interface ImageFilter {
        "doNotApplyFilter"?: boolean;
        "fromColor"?: string;
        "src"?: string;
        "toColor"?: string;
    }
    interface MenuButton {
    }
    interface NavigationBar {
    }
    interface PageNotFound {
    }
    interface ProfileImage {
    }
    interface RrssNavbar {
        "codepenUser"?: string;
        "githubUser"?: string;
        "linkedinUser"?: string;
        "twitterUser"?: string;
        "youtubeChannel"?: string;
    }
    interface ScrollToTopButton {
    }
    interface SectionTitle {
    }
    interface ServiciosPage {
    }
    interface UserName {
        "content"?: string;
        "link"?: string;
        "showDomain"?: boolean;
    }
    interface IntrinsicElements {
        "about-page": AboutPage;
        "app-home": AppHome;
        "app-profile": AppProfile;
        "app-root": AppRoot;
        "blog-component": BlogComponent;
        "blog-page": BlogPage;
        "blog-post": BlogPost;
        "blog-post-wrapper": BlogPostWrapper;
        "contact-form-error": ContactFormError;
        "contact-form-submited": ContactFormSubmited;
        "contact-page": ContactPage;
        "dlc-terminal": DlcTerminal;
        "footer-component": FooterComponent;
        "image-filter": ImageFilter;
        "menu-button": MenuButton;
        "navigation-bar": NavigationBar;
        "page-not-found": PageNotFound;
        "profile-image": ProfileImage;
        "rrss-navbar": RrssNavbar;
        "scroll-to-top-button": ScrollToTopButton;
        "section-title": SectionTitle;
        "servicios-page": ServiciosPage;
        "user-name": UserName;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "about-page": LocalJSX.AboutPage & JSXBase.HTMLAttributes<HTMLAboutPageElement>;
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-profile": LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "blog-component": LocalJSX.BlogComponent & JSXBase.HTMLAttributes<HTMLBlogComponentElement>;
            "blog-page": LocalJSX.BlogPage & JSXBase.HTMLAttributes<HTMLBlogPageElement>;
            "blog-post": LocalJSX.BlogPost & JSXBase.HTMLAttributes<HTMLBlogPostElement>;
            "blog-post-wrapper": LocalJSX.BlogPostWrapper & JSXBase.HTMLAttributes<HTMLBlogPostWrapperElement>;
            "contact-form-error": LocalJSX.ContactFormError & JSXBase.HTMLAttributes<HTMLContactFormErrorElement>;
            "contact-form-submited": LocalJSX.ContactFormSubmited & JSXBase.HTMLAttributes<HTMLContactFormSubmitedElement>;
            "contact-page": LocalJSX.ContactPage & JSXBase.HTMLAttributes<HTMLContactPageElement>;
            "dlc-terminal": LocalJSX.DlcTerminal & JSXBase.HTMLAttributes<HTMLDlcTerminalElement>;
            "footer-component": LocalJSX.FooterComponent & JSXBase.HTMLAttributes<HTMLFooterComponentElement>;
            "image-filter": LocalJSX.ImageFilter & JSXBase.HTMLAttributes<HTMLImageFilterElement>;
            "menu-button": LocalJSX.MenuButton & JSXBase.HTMLAttributes<HTMLMenuButtonElement>;
            "navigation-bar": LocalJSX.NavigationBar & JSXBase.HTMLAttributes<HTMLNavigationBarElement>;
            "page-not-found": LocalJSX.PageNotFound & JSXBase.HTMLAttributes<HTMLPageNotFoundElement>;
            "profile-image": LocalJSX.ProfileImage & JSXBase.HTMLAttributes<HTMLProfileImageElement>;
            "rrss-navbar": LocalJSX.RrssNavbar & JSXBase.HTMLAttributes<HTMLRrssNavbarElement>;
            "scroll-to-top-button": LocalJSX.ScrollToTopButton & JSXBase.HTMLAttributes<HTMLScrollToTopButtonElement>;
            "section-title": LocalJSX.SectionTitle & JSXBase.HTMLAttributes<HTMLSectionTitleElement>;
            "servicios-page": LocalJSX.ServiciosPage & JSXBase.HTMLAttributes<HTMLServiciosPageElement>;
            "user-name": LocalJSX.UserName & JSXBase.HTMLAttributes<HTMLUserNameElement>;
        }
    }
}
