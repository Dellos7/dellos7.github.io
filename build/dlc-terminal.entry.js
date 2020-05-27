import { r as registerInstance, h } from './index-70ad26c6.js';

const dlcTerminalCss = "@import url(\"https://fonts.googleapis.com/css?family=Pacifico&display=swap\");*{padding:0;margin:0}html{box-sizing:border-box;font-size:62.5%;min-height:100%}:root{--primary-color:#24909c;--secondary-color:#206c75;--tertiary-color:#61bdc5;--amarillo:#fdbb2d;--quaternary-color:#86f3fc;--fifth-color:rgb(19,243,185);--javascript:#f7df1e;--c:#419a49;--java:#f73737;--css:#2caddd;--html:#ff4800;--typescript:#006fc5;--cpp:#5a92cd;--python:linear-gradient( to right, #2d6396, #ffce39 );--shell:#222245}body{font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";font-size:2.3rem}p,li{overflow-wrap:break-word;word-wrap:break-word;-ms-word-break:break-all;word-break:break-all;word-break:break-word;}:host{--dlc-cssterminal-content-bgcolor:#27656d}div.wrapper{margin:1rem}";

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
