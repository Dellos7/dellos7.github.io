import { r as registerInstance, h } from './index-70ad26c6.js';

const dlcTerminalCss = "@import url(\"https://fonts.googleapis.com/css?family=Pacifico&display=swap\");*{padding:0;margin:0}html{box-sizing:border-box;font-size:62.5%;min-height:100%}body{font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";font-size:2.3rem}p,li{overflow-wrap:break-word;word-wrap:break-word;-ms-word-break:break-all;word-break:break-all;word-break:break-word;}dlc-cssterminal{--dlc-cssterminal-content-bgcolor:#27656d;--dlc-cssterminal-hem:1rem;--dlc-cssterminal-primary-font-color:#fff}dlc-cssterminal::part(terminal-content){font-size:1.8rem;padding:0.5rem;background-color:#27656d}dlc-cssterminal::part(terminal-content-command){color:#fff}div.wrapper{margin:1rem}";

const DlcTerminal = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "wrapper" }, h("dlc-cssterminal", { shell: "~ david$" }, h("dlc-cssterminal-block", { command: "pwd" }, "/the/internet/dlopezcastellote.dev"), h("dlc-cssterminal-block", { command: "echo $USER", delay: 4 }, "David L\u00F3pez Castellote"), h("dlc-cssterminal-block", { command: "whoami", delay: 15 }, "Programador y proyecto de futuro profesor \uD83D\uDCBB \uD83D\uDC68\u200D\uD83C\uDFEB"), h("dlc-cssterminal-block", { shell: "~ david$", command: "\u00A0", delay: 26 }))));
    }
};
DlcTerminal.style = dlcTerminalCss;

export { DlcTerminal as dlc_terminal };
