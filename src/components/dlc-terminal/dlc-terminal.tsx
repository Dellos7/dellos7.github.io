import { Component, h } from '@stencil/core';


@Component({
    tag: 'dlc-terminal',
    styleUrl: 'dlc-terminal.scss',
    shadow: true
})
export class DlcTerminal {

    render() {
        return (
            <div class="wrapper">
            <dlc-cssterminal shell="~ david$">
                <dlc-cssterminal-block command="pwd">
                    /the/internet/dlopezcastellote.dev
    </dlc-cssterminal-block>
                <dlc-cssterminal-block command="echo $USER" delay={4}>
                    David López Castellote
    </dlc-cssterminal-block>
                <dlc-cssterminal-block command="whoami" delay={15}>
                    Programmer, web & app developer, on my way to become soon an IT teacher in Spain 😎
    </dlc-cssterminal-block> 
                <dlc-cssterminal-block shell="~ david$" command="&nbsp;" delay={26}></dlc-cssterminal-block>
            </dlc-cssterminal>
            </div>
        );
    }
}
