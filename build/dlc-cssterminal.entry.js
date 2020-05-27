import { r as registerInstance, h } from './index-70ad26c6.js';

const dlcCssterminalCss = ".terminal{font-family:var(--dlc-cssterminal-font-family, Consolas, monaco, monospace);font-weight:700;width:100%;height:100%;border-radius:calc(0.5 * var(--dlc-cssterminal-hem, 10px) );position:relative;font-size:calc(1.8*calc(1 * var(--dlc-cssterminal-hem, 10px) ));box-shadow:0 calc(0.5 * var(--dlc-cssterminal-hem, 10px) ) calc(2 * var(--dlc-cssterminal-hem, 10px) ) rgba(0, 0, 0, 0.5)}.terminal__header{position:relative;width:calc(100% - 1px);height:calc(3 * var(--dlc-cssterminal-hem, 10px) );background-color:var(--dlc-cssterminal-header-bgcolor, #f6f6f6);border-top-left-radius:calc(0.3 * var(--dlc-cssterminal-hem, 10px) );border-top-right-radius:calc(0.3 * var(--dlc-cssterminal-hem, 10px) );border:0.5px solid var(--dlc-cssterminal-bordercolor, #b8b8b8);border-bottom:1px solid var(--dlc-cssterminal-bordercolor, #b8b8b8)}.terminal__header-buttons{position:absolute;display:inline-block;height:100%;min-width:calc(8 * var(--dlc-cssterminal-hem, 10px) );width:fit-content}.terminal__header-button{width:calc(1.5 * var(--dlc-cssterminal-hem, 10px) );height:calc(1.5 * var(--dlc-cssterminal-hem, 10px) );border-radius:50%;display:inline-block;position:absolute;top:50%;border:0.1px solid var(--dlc-cssterminal-bordercolor, #b8b8b8)}.terminal__header-button--close{background-color:var(--dlc-cssterminal-header-button-close-color, #fc645f);transform:translate(calc(1 * var(--dlc-cssterminal-hem, 10px) ), -50%)}.terminal__header-button--minimize{background-color:var(--dlc-cssterminal-header-button-minimize-color, #fdbe41);transform:translate(calc(3 * var(--dlc-cssterminal-hem, 10px) ), -50%)}.terminal__header-button--maximize{background-color:var(--dlc-cssterminal-header-button-maximize-color, #35cc4b);transform:translate(calc(5 * var(--dlc-cssterminal-hem, 10px) ), -50%)}.terminal__content{background-color:var(--dlc-cssterminal-content-bgcolor, #323232);height:calc(100% - calc(3 * var(--dlc-cssterminal-hem, 10px) ));border-bottom-left-radius:calc(0.3 * var(--dlc-cssterminal-hem, 10px) );border-bottom-right-radius:calc(0.3 * var(--dlc-cssterminal-hem, 10px) );overflow:scroll;border-left:0.5px solid var(--dlc-cssterminal-bordercolor, #b8b8b8)}";

const DlcCssterminal = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * (optional) The shell to display in all the blocks
         */
        this.shell = '~ user$';
    }
    render() {
        return (h("div", { class: "terminal", part: "terminal" }, h("div", { class: "terminal__header", part: "terminal-header" }, h("div", { class: "terminal__header-buttons", part: "terminal-header-buttons" }, h("div", { class: "terminal__header-button terminal__header-button--close", part: "terminal-header-button-close" }), h("div", { class: "terminal__header-button terminal__header-button--minimize", part: "terminal-header-button-minimize" }), h("div", { class: "terminal__header-button terminal__header-button--maximize", part: "terminal-header-button-maximize" }))), h("div", { class: "terminal__content", part: "terminal-content" }, h("slot", null))));
    }
};
DlcCssterminal.style = dlcCssterminalCss;

export { DlcCssterminal as dlc_cssterminal };
