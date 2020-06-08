import { PrerenderConfig } from '@stencil/core';
export const config: PrerenderConfig = {
    // Listar las urls que no se enlazan directamente en la web pero que queremos que se haga prerender
    entryUrls: [ '/', '/contact-form-error', '/contact-form-submited' ]
};