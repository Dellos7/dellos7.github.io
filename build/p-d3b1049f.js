let e,t,n,l=!1,o=!1,s=!1,i=0,r=!1;const c="undefined"!=typeof window?window:{},a=c.CSS,f=c.document||{head:{}},u={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l)},$=(()=>(f.head.attachShadow+"").indexOf("[native")>-1)(),d=e=>Promise.resolve(e),p=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),m={},h=(e,t,n)=>{n&&n.map(([n,l,o])=>{const s=w(e,n),i=y(t,o),r=b(n);u.ael(s,l,i,r),(t.o=t.o||[]).push(()=>u.rel(s,l,i,r))})},y=(e,t)=>n=>{256&e.t?e.s[t](n):(e.u=e.u||[]).push([t,n])},w=(e,t)=>8&t?c:e,b=e=>0!=(2&e),v="http://www.w3.org/1999/xlink",_=new WeakMap,k=(e,t,n)=>{let l=Me.get(e);p&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,Me.set(e,l)},g=(e,t)=>{let n=j(t),l=Me.get(n);if(e=11===e.nodeType?e:f,l)if("string"==typeof l){let t,o=_.get(e=e.head||e);o||_.set(e,o=new Set),o.has(n)||(e.host&&(t=e.querySelector(`[sty-id="${n}"]`))?t.innerHTML=l:(t=f.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link"))),o&&o.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n},j=e=>"sc-"+e.$,M=e=>e.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g,"$1{"),U={},R=e=>"object"==(e=typeof e)||"function"===e,x=(e,t,...n)=>{let l=null,o=null,s=null,i=!1,r=!1,c=[];const a=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?a(l):null!=l&&"boolean"!=typeof l&&((i="function"!=typeof e&&!R(l))&&(l+=""),i&&r?c[c.length-1].p+=l:c.push(i?S(null,l):l),r=i)};if(a(n),t){t.key&&(o=t.key),t.name&&(s=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}}if("function"==typeof e)return e(null===t?{}:t,c,C);const f=S(e,null);return f.h=t,c.length>0&&(f.v=c),f._=o,f.k=s,f},S=(e,t)=>({t:0,g:e,p:t,j:null,v:null,h:null,_:null,k:null}),L={},C={forEach:(e,t)=>e.map(P).forEach(t),map:(e,t)=>e.map(P).map(t).map(O)},P=e=>({vattrs:e.h,vchildren:e.v,vkey:e._,vname:e.k,vtag:e.g,vtext:e.p}),O=e=>{const t=S(e.vtag,e.vtext);return t.h=e.vattrs,t.v=e.vchildren,t._=e.vkey,t.k=e.vname,t},T=(e,t,n,l,o,s)=>{if(n!==l){let r=_e(e,t),a=t.toLowerCase();if("class"===t){const t=e.classList,o=I(n),s=I(l);t.remove(...o.filter(e=>e&&!s.includes(e))),t.add(...s.filter(e=>e&&!o.includes(e)))}else if("style"===t){for(const t in n)l&&null!=l[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in l)n&&l[t]===n[t]||(t.includes("-")?e.style.setProperty(t,l[t]):e.style[t]=l[t])}else if("key"===t);else if("ref"===t)l&&l(e);else if(r||"o"!==t[0]||"n"!==t[1]){const c=R(l);if((r||c&&null!==l)&&!o)try{if(e.tagName.includes("-"))e[t]=l;else{let o=null==l?"":l;"list"===t?r=!1:null!=n&&e[t]==o||(e[t]=o)}}catch(i){}let f=!1;a!==(a=a.replace(/^xlink\:?/,""))&&(t=a,f=!0),null==l||!1===l?f?e.removeAttributeNS(v,t):e.removeAttribute(t):(!r||4&s||o)&&!c&&(l=!0===l?"":l,f?e.setAttributeNS(v,t,l):e.setAttribute(t,l))}else t="-"===t[2]?t.slice(3):_e(c,a)?a.slice(2):a[2]+t.slice(3),n&&u.rel(e,t,n,!1),l&&u.ael(e,t,l,!1)}},E=/\s/,I=e=>e?e.split(E):[],W=(e,t,n,l)=>{const o=11===t.j.nodeType&&t.j.host?t.j.host:t.j,s=e&&e.h||U,i=t.h||U;for(l in s)l in i||T(o,l,s[l],void 0,n,t.t);for(l in i)T(o,l,s[l],i[l],n,t.t)},A=(o,i,r,c)=>{let a,u,$,d=i.v[r],p=0;if(l||(s=!0,"slot"===d.g&&(e&&c.classList.add(e+"-s"),d.t|=d.v?2:1)),null!==d.p)a=d.j=f.createTextNode(d.p);else if(1&d.t)a=d.j=f.createTextNode("");else if(a=d.j=f.createElement(2&d.t?"slot-fb":d.g),W(null,d,!1),null!=e&&a["s-si"]!==e&&a.classList.add(a["s-si"]=e),d.v)for(p=0;p<d.v.length;++p)u=A(o,d,p,a),u&&a.appendChild(u);return a["s-hn"]=n,3&d.t&&(a["s-sr"]=!0,a["s-cr"]=t,a["s-sn"]=d.k||"",$=o&&o.v&&o.v[r],$&&$.g===d.g&&o.j&&D(o.j,!1)),a},D=(e,t)=>{u.t|=1;const l=e.childNodes;for(let o=l.length-1;o>=0;o--){const e=l[o];e["s-hn"]!==n&&e["s-ol"]&&(B(e).insertBefore(e,N(e)),e["s-ol"].remove(),e["s-ol"]=void 0,s=!0),t&&D(e,t)}u.t&=-2},F=(e,t,l,o,s,i)=>{let r,c=e["s-cr"]&&e["s-cr"].parentNode||e;for(c.shadowRoot&&c.tagName===n&&(c=c.shadowRoot);s<=i;++s)o[s]&&(r=A(null,l,s,e),r&&(o[s].j=r,c.insertBefore(r,N(t))))},q=(e,t,n,l,s)=>{for(;t<=n;++t)(l=e[t])&&(s=l.j,Q(l),o=!0,s["s-ol"]?s["s-ol"].remove():D(s,!0),s.remove())},H=(e,t)=>e.g===t.g&&("slot"===e.g?e.k===t.k:e._===t._),N=e=>e&&e["s-ol"]||e,B=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,V=(e,t)=>{const n=t.j=e.j,l=e.v,o=t.v,s=t.p;let i;null===s?("slot"===t.g||W(e,t,!1),null!==l&&null!==o?((e,t,n,l)=>{let o,s,i=0,r=0,c=0,a=0,f=t.length-1,u=t[0],$=t[f],d=l.length-1,p=l[0],m=l[d];for(;i<=f&&r<=d;)if(null==u)u=t[++i];else if(null==$)$=t[--f];else if(null==p)p=l[++r];else if(null==m)m=l[--d];else if(H(u,p))V(u,p),u=t[++i],p=l[++r];else if(H($,m))V($,m),$=t[--f],m=l[--d];else if(H(u,m))"slot"!==u.g&&"slot"!==m.g||D(u.j.parentNode,!1),V(u,m),e.insertBefore(u.j,$.j.nextSibling),u=t[++i],m=l[--d];else if(H($,p))"slot"!==u.g&&"slot"!==m.g||D($.j.parentNode,!1),V($,p),e.insertBefore($.j,u.j),$=t[--f],p=l[++r];else{for(c=-1,a=i;a<=f;++a)if(t[a]&&null!==t[a]._&&t[a]._===p._){c=a;break}c>=0?(s=t[c],s.g!==p.g?o=A(t&&t[r],n,c,e):(V(s,p),t[c]=void 0,o=s.j),p=l[++r]):(o=A(t&&t[r],n,r,e),p=l[++r]),o&&B(u.j).insertBefore(o,N(u.j))}i>f?F(e,null==l[d+1]?null:l[d+1].j,n,l,r,d):r>d&&q(t,i,f)})(n,l,t,o):null!==o?(null!==e.p&&(n.textContent=""),F(n,null,t,o,0,o.length-1)):null!==l&&q(l,0,l.length-1)):(i=n["s-cr"])?i.parentNode.textContent=s:e.p!==s&&(n.data=s)},z=e=>{let t,n,l,o,s,i,r=e.childNodes;for(n=0,l=r.length;n<l;n++)if(t=r[n],1===t.nodeType){if(t["s-sr"])for(s=t["s-sn"],t.hidden=!1,o=0;o<l;o++)if(r[o]["s-hn"]!==t["s-hn"])if(i=r[o].nodeType,""!==s){if(1===i&&s===r[o].getAttribute("slot")){t.hidden=!0;break}}else if(1===i||3===i&&""!==r[o].textContent.trim()){t.hidden=!0;break}z(t)}},G=[],J=e=>{let t,n,l,s,i,r,c=0,a=e.childNodes,f=a.length;for(;c<f;c++){if(t=a[c],t["s-sr"]&&(n=t["s-cr"]))for(l=n.parentNode.childNodes,s=t["s-sn"],r=l.length-1;r>=0;r--)n=l[r],n["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||(K(n,s)?(i=G.find(e=>e.M===n),o=!0,n["s-sn"]=n["s-sn"]||s,i?i.U=t:G.push({U:t,M:n}),n["s-sr"]&&G.map(e=>{K(e.M,n["s-sn"])&&(i=G.find(e=>e.M===n),i&&!e.U&&(e.U=i.U))})):G.some(e=>e.M===n)||G.push({M:n}));1===t.nodeType&&J(t)}},K=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,Q=e=>{e.h&&e.h.ref&&e.h.ref(null),e.v&&e.v.map(Q)},X=e=>we(e).R,Y=(e,t)=>{t&&!e.S&&t["s-p"]&&t["s-p"].push(new Promise(t=>e.S=t))},Z=(e,t)=>{if(e.t|=16,!(4&e.t))return Y(e,e.L),Te(()=>ee(e,t));e.t|=512},ee=(e,t)=>{const n=e.s;let l;return t?(e.t|=256,e.u&&(e.u.map(([e,t])=>se(n,e,t)),e.u=null),l=se(n,"componentWillLoad")):l=se(n,"componentWillUpdate"),ie(l,()=>te(e,n,t))},te=(i,r,c)=>{const a=i.R,d=a["s-rc"];c&&(e=>{const t=e.C,n=e.R,l=t.t,o=g($&&n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"))})(i),((i,r)=>{const c=i.R,a=i.C,d=i.P||S(null,null),p=(e=>e&&e.g===L)(r)?r:x(null,null,r);if(n=c.tagName,a.O&&(p.h=p.h||{},a.O.map(([e,t])=>p.h[t]=c[e])),p.g=null,p.t|=4,i.P=p,p.j=d.j=c.shadowRoot||c,e=c["s-sc"],t=c["s-cr"],l=$&&0!=(1&a.t),o=!1,V(d,p),u.t|=1,s){let e,t,n,l,o,s;J(p.j);let i=0;for(;i<G.length;i++)e=G[i],t=e.M,t["s-ol"]||(n=f.createTextNode(""),n["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=n,t));for(i=0;i<G.length;i++)if(e=G[i],t=e.M,e.U){for(l=e.U.parentNode,o=e.U.nextSibling,n=t["s-ol"];n=n.previousSibling;)if(s=n["s-nr"],s&&s["s-sn"]===t["s-sn"]&&l===s.parentNode&&(s=s.nextSibling,!s||!s["s-nr"])){o=s;break}(!o&&l!==t.parentNode||t.nextSibling!==o)&&t!==o&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),l.insertBefore(t,o))}else 1===t.nodeType&&(t.hidden=!0)}o&&z(p.j),u.t&=-2,G.length=0})(i,ne(i,r)),d&&(d.map(e=>e()),a["s-rc"]=void 0);{const e=a["s-p"],t=()=>le(i);0===e.length?t():(Promise.all(e).then(t),i.t|=4,e.length=0)}},ne=(e,t)=>{try{t=t.render&&t.render(),e.t&=-17,e.t|=2}catch(n){ke(n)}return t},le=e=>{const t=e.R,n=e.s,l=e.L;64&e.t?se(n,"componentDidUpdate"):(e.t|=64,re(t),se(n,"componentDidLoad"),e.T(t),l||oe()),e.S&&(e.S(),e.S=void 0),512&e.t&&Pe(()=>Z(e,!1)),e.t&=-517},oe=()=>{re(f.documentElement),u.t|=2,Pe(()=>(e=>{const t=new CustomEvent("appload",{detail:{namespace:"app"}});return e.dispatchEvent(t),t})(c))},se=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(l){ke(l)}},ie=(e,t)=>e&&e.then?e.then(t):t(),re=e=>e.classList.add("hydrated"),ce=(e,t,n,l,o,s,i)=>{let r,c,a,u;if(1===s.nodeType){for(r=s.getAttribute("c-id"),r&&(c=r.split("."),c[0]!==i&&"0"!==c[0]||(a={t:0,I:c[0],W:c[1],A:c[2],D:c[3],g:s.tagName.toLowerCase(),j:s,h:null,v:null,_:null,k:null,p:null},t.push(a),s.removeAttribute("c-id"),e.v||(e.v=[]),e.v[a.D]=a,e=a,l&&"0"===a.A&&(l[a.D]=a.j))),u=s.childNodes.length-1;u>=0;u--)ce(e,t,n,l,o,s.childNodes[u],i);if(s.shadowRoot)for(u=s.shadowRoot.childNodes.length-1;u>=0;u--)ce(e,t,n,l,o,s.shadowRoot.childNodes[u],i)}else if(8===s.nodeType)c=s.nodeValue.split("."),c[1]!==i&&"0"!==c[1]||(r=c[0],a={t:0,I:c[1],W:c[2],A:c[3],D:c[4],j:s,h:null,v:null,_:null,k:null,g:null,p:null},"t"===r?(a.j=s.nextSibling,a.j&&3===a.j.nodeType&&(a.p=a.j.textContent,t.push(a),s.remove(),e.v||(e.v=[]),e.v[a.D]=a,l&&"0"===a.A&&(l[a.D]=a.j))):a.I===i&&("s"===r?(a.g="slot",s["s-sn"]=c[5]?a.k=c[5]:"",s["s-sr"]=!0,l&&(a.j=f.createElement(a.g),a.k&&a.j.setAttribute("name",a.k),s.parentNode.insertBefore(a.j,s),s.remove(),"0"===a.A&&(l[a.D]=a.j)),n.push(a),e.v||(e.v=[]),e.v[a.D]=a):"r"===r&&(l?s.remove():(o["s-cr"]=s,s["s-cn"]=!0))));else if(e&&"style"===e.g){const t=S(null,s.textContent);t.j=s,t.D="0",e.v=[t]}},ae=(e,t)=>{if(1===e.nodeType){let n=0;for(;n<e.childNodes.length;n++)ae(e.childNodes[n],t);if(e.shadowRoot)for(n=0;n<e.shadowRoot.childNodes.length;n++)ae(e.shadowRoot.childNodes[n],t)}else if(8===e.nodeType){const n=e.nodeValue.split(".");"o"===n[0]&&(t.set(n[1]+"."+n[2],e),e.nodeValue="",e["s-en"]=n[3])}},fe=(e,t,n)=>{if(t.F){e.watchers&&(t.q=e.watchers);const l=Object.entries(t.F),o=e.prototype;if(l.map(([e,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(o,e,{get(){return((e,t)=>we(this).H.get(t))(0,e)},set(n){((e,t,n,l)=>{const o=we(this),s=o.H.get(t),i=o.t,r=o.s;if(n=((e,t)=>null==e||R(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?e+"":e)(n,l.F[t][0]),!(8&i&&void 0!==s||n===s)&&(o.H.set(t,n),r)){if(l.q&&128&i){const e=l.q[t];e&&e.map(e=>{try{r[e](n,s,t)}catch(l){ke(l)}})}2==(18&i)&&Z(o,!1)}})(0,e,n,t)},configurable:!0,enumerable:!0})}),1&n){const n=new Map;o.attributeChangedCallback=function(e,t,l){u.jmp(()=>{const t=n.get(e);this[t]=(null!==l||"boolean"!=typeof this[t])&&l})},e.observedAttributes=l.filter(([e,t])=>15&t[0]).map(([e,l])=>{const o=l[1]||e;return n.set(o,e),512&l[0]&&t.O.push([e,o]),o})}}return e},ue=e=>{se(e,"connectedCallback")},$e=e=>{if(0==(1&u.t)){const t=we(e),n=t.C,l=()=>{};if(1&t.t)h(e,t,n.N),ue(t.s);else{let l;if(t.t|=1,l=e.getAttribute("s-id"),l){if($&&1&n.t){const t=g(e.shadowRoot,n);e.classList.remove(t+"-h",t+"-s")}((e,t,n,l)=>{const o=e.shadowRoot,s=[],i=o?[]:null,r=l.P=S(t,null);u.B||ae(f.body,u.B=new Map),e["s-id"]=n,e.removeAttribute("s-id"),ce(r,s,[],i,e,e,n),s.map(e=>{const n=e.I+"."+e.W,l=u.B.get(n),s=e.j;l&&$&&""===l["s-en"]&&l.parentNode.insertBefore(s,l.nextSibling),o||(s["s-hn"]=t,l&&(s["s-ol"]=l,s["s-ol"]["s-nr"]=s)),u.B.delete(n)}),o&&i.map(e=>{e&&o.appendChild(e)})})(e,n.$,l,t)}l||12&n.t&&de(e);{let n=e;for(;n=n.parentNode||n.host;)if(1===n.nodeType&&n.hasAttribute("s-id")&&n["s-p"]||n["s-p"]){Y(t,t.L=n);break}}n.F&&Object.entries(n.F).map(([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}}),Pe(()=>(async(e,t,n,l,o)=>{if(0==(32&t.t)){t.t|=32;{if((o=je(n)).then){const e=()=>{};o=await o,e()}o.isProxied||(n.q=o.watchers,fe(o,n,2),o.isProxied=!0);const e=()=>{};t.t|=8;try{new o(t)}catch(r){ke(r)}t.t&=-9,t.t|=128,e(),ue(t.s)}const e=j(n);if(!Me.has(e)&&o.style){const t=()=>{};let l=o.style;8&n.t&&(l=await __sc_import_app("./p-8a8f7b57.js").then(t=>t.scopeCss(l,e,!1))),k(e,l,!!(1&n.t)),t()}}const s=t.L,i=()=>Z(t,!0);s&&s["s-rc"]?s["s-rc"].push(i):i()})(0,t,n))}l()}},de=e=>{const t=e["s-cr"]=f.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)},pe=(e,t={})=>{const n=[],l=t.exclude||[],o=c.customElements,s=f.head,i=s.querySelector("meta[charset]"),r=f.createElement("style"),a=[],d=f.querySelectorAll("[sty-id]");let p,m=!0,h=0;for(Object.assign(u,t),u.l=new URL(t.resourcesUrl||"./",f.baseURI).href,t.syncQueue&&(u.t|=4),u.t|=2;h<d.length;h++)k(d[h].getAttribute("sty-id"),M(d[h].innerHTML),!0);e.map(e=>e[1].map(t=>{const s={t:t[0],$:t[1],F:t[2],N:t[3]};s.F=t[2],s.N=t[3],s.O=[],s.q={},!$&&1&s.t&&(s.t|=8);const i=s.$,r=class extends HTMLElement{constructor(e){super(e),ve(e=this,s),1&s.t&&($?e.attachShadow({mode:"open"}):"shadowRoot"in e||(e.shadowRoot=e))}connectedCallback(){p&&(clearTimeout(p),p=null),m?a.push(this):u.jmp(()=>$e(this))}disconnectedCallback(){u.jmp(()=>(()=>{if(0==(1&u.t)){const e=we(this),t=e.s;e.o&&(e.o.map(e=>e()),e.o=void 0),se(t,"disconnectedCallback"),se(t,"componentDidUnload")}})())}forceUpdate(){(()=>{{const e=we(this);e.R.isConnected&&2==(18&e.t)&&Z(e,!1)}})()}componentOnReady(){return we(this).V}};s.G=e[0],l.includes(i)||o.get(i)||(n.push(i),o.define(i,fe(r,s,1)))})),r.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",r.setAttribute("data-styles",""),s.insertBefore(r,i?i.nextSibling:s.firstChild),m=!1,a.length?a.map(e=>e.connectedCallback()):u.jmp(()=>p=setTimeout(oe,30))},me=e=>{const t=new URL(e,u.l);return t.origin!==c.location.origin?t.href:t.pathname},he=(e,t)=>t in m?m[t]:"window"===t?c:"document"===t?f:"isServer"!==t&&"isPrerender"!==t&&("isClient"===t||("resourcesUrl"===t||"publicPath"===t?me("."):"queue"===t?{write:Te,read:Oe,tick:{then:e=>Pe(e)}}:void 0)),ye=new WeakMap,we=e=>ye.get(e),be=(e,t)=>ye.set(t.s=e,t),ve=(e,t)=>{const n={t:0,R:e,C:t,H:new Map};return n.V=new Promise(e=>n.T=e),e["s-p"]=[],e["s-rc"]=[],h(e,n,t.N),ye.set(e,n)},_e=(e,t)=>t in e,ke=e=>console.error(e),ge=new Map,je=e=>{const t=e.$.replace(/-/g,"_"),n=e.G,l=ge.get(n);return l?l[t]:__sc_import_app(`./${n}.entry.js`).then(e=>(ge.set(n,e),e[t]),ke)},Me=new Map,Ue=[],Re=[],xe=[],Se=(e,t)=>n=>{e.push(n),r||(r=!0,t&&4&u.t?Pe(Ce):u.raf(Ce))},Le=(e,t)=>{let n=0,l=0;for(;n<e.length&&(l=performance.now())<t;)try{e[n++](l)}catch(o){ke(o)}n===e.length?e.length=0:0!==n&&e.splice(0,n)},Ce=()=>{i++,(e=>{for(let n=0;n<e.length;n++)try{e[n](performance.now())}catch(t){ke(t)}e.length=0})(Ue);{const e=2==(6&u.t)?performance.now()+14*Math.ceil(.1*i):1/0;Le(Re,e),Le(xe,e),Re.length>0&&(xe.push(...Re),Re.length=0),(r=Ue.length+Re.length+xe.length>0)?u.raf(Ce):i=0}},Pe=e=>d().then(e),Oe=Se(Ue,!1),Te=Se(Re,!0),Ee=()=>a&&a.supports&&a.supports("color","var(--c)")?d():__sc_import_app("./p-1b2d9a2e.js").then(()=>(u.J=c.__cssshim)?(!1).i():0),Ie=()=>{u.J=c.__cssshim;const e=Array.from(f.querySelectorAll("script")).find(e=>/\/app(\.esm)?\.js($|\?|#)/.test(e.src)||"app"===e.getAttribute("data-stencil-namespace")),t=e["data-opts"]||{};return"onbeforeload"in e&&!history.scrollRestoration?{then(){}}:(t.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,c.location.href)).href,We(t.resourcesUrl,e),c.customElements?d(t):__sc_import_app("./p-2e1bb10c.js").then(()=>t))},We=(e,t)=>{try{c.__sc_import_app=Function("w","return import(w);//"+Math.random())}catch(n){const l=new Map;c.__sc_import_app=n=>{const o=new URL(n,e).href;let s=l.get(o);if(!s){const e=f.createElement("script");e.type="module",e.crossOrigin=t.crossOrigin,e.src=URL.createObjectURL(new Blob([`import * as m from '${o}'; window.__sc_import_app.m = m;`],{type:"application/javascript"})),s=new Promise(t=>{e.onload=()=>{t(c.__sc_import_app.m),e.remove()}}),l.set(o,s),f.head.appendChild(e)}return s}}};export{L as H,Ee as a,pe as b,X as c,he as d,me as g,x as h,Ie as p,be as r}