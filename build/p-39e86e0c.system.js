System.register(["./p-44a0285d.system.js"],(function(r){"use strict";var e;return{setters:[function(r){e=r.g}],execute:function(){var n="/";var t="./";var a=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");var i=function(r,e){var i=[];var s=0;var v=0;var l="";var o=e&&e.delimiter||n;var c=e&&e.delimiters||t;var h=false;var p;while((p=a.exec(r))!==null){var d=p[0];var g=p[1];var m=p.index;l+=r.slice(v,m);v=m+d.length;if(g){l+=g[1];h=true;continue}var y="";var x=r[v];var b=p[2];var w=p[3];var A=p[4];var j=p[5];if(!h&&l.length){var k=l.length-1;if(c.indexOf(l[k])>-1){y=l[k];l=l.slice(0,k)}}if(l){i.push(l);l="";h=false}var O=y!==""&&x!==undefined&&x!==y;var R=j==="+"||j==="*";var E=j==="?"||j==="*";var I=y||o;var $=w||A;i.push({name:b||s++,prefix:y,delimiter:I,optional:E,repeat:R,partial:O,pattern:$?u($):"[^"+f(I)+"]+?"})}if(l||v<r.length){i.push(l+r.substr(v))}return i};var f=function(r){return r.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")};var u=function(r){return r.replace(/([=!:$/()])/g,"\\$1")};var s=function(r){return r&&r.sensitive?"":"i"};var v=function(r,e){if(!e)return r;var n=r.source.match(/\((?!\?)/g);if(n){for(var t=0;t<n.length;t++){e.push({name:t,prefix:null,delimiter:null,optional:false,repeat:false,partial:false,pattern:null})}}return r};var l=function(r,e,n){var t=[];for(var a=0;a<r.length;a++){t.push(h(r[a],e,n).source)}return new RegExp("(?:"+t.join("|")+")",s(n))};var o=function(r,e,n){return c(i(r,n),e,n)};var c=function(r,e,a){a=a||{};var i=a.strict;var u=a.end!==false;var v=f(a.delimiter||n);var l=a.delimiters||t;var o=[].concat(a.endsWith||[]).map(f).concat("$").join("|");var c="";var h=false;for(var p=0;p<r.length;p++){var d=r[p];if(typeof d==="string"){c+=f(d);h=p===r.length-1&&l.indexOf(d[d.length-1])>-1}else{var g=f(d.prefix||"");var m=d.repeat?"(?:"+d.pattern+")(?:"+g+"(?:"+d.pattern+"))*":d.pattern;if(e)e.push(d);if(d.optional){if(d.partial){c+=g+"("+m+")?"}else{c+="(?:"+g+"("+m+"))?"}}else{c+=g+"("+m+")"}}}if(u){if(!i)c+="(?:"+v+")?";c+=o==="$"?"$":"(?="+o+")"}else{if(!i)c+="(?:"+v+"(?="+o+"))?";if(!h)c+="(?="+v+"|"+o+")"}return new RegExp("^"+c,s(a))};var h=function(r,e,n){if(r instanceof RegExp){return v(r,e)}if(Array.isArray(r)){return l(r,e,n)}return o(r,e,n)};var p=r("h",(function(r,e){return new RegExp("^"+e+"(\\/|\\?|#|$)","i").test(r)}));var d=r("f",(function(r,e){return p(r,e)?r.substr(e.length):r}));var g=r("s",(function(r){return r.charAt(r.length-1)==="/"?r.slice(0,-1):r}));var m=r("c",(function(r){return r.charAt(0)==="/"?r:"/"+r}));var y=r("k",(function(r){return r.charAt(0)==="/"?r.substr(1):r}));var x=function(r){var e=r||"/";var n="";var t="";var a=e.indexOf("#");if(a!==-1){t=e.substr(a);e=e.substr(0,a)}var i=e.indexOf("?");if(i!==-1){n=e.substr(i);e=e.substr(0,i)}return{pathname:e,search:n==="?"?"":n,hash:t==="#"?"":t,query:{},key:""}};var b=r("j",(function(r){var e=r.pathname,n=r.search,t=r.hash;var a=e||"/";if(n&&n!=="?"){a+=n.charAt(0)==="?"?n:"?"+n}if(t&&t!=="#"){a+=t.charAt(0)==="#"?t:"#"+t}return a}));var w=function(r){if(!r){return{}}return(/^[?#]/.test(r)?r.slice(1):r).split("&").reduce((function(r,e){var n=e.split("="),t=n[0],a=n[1];r[t]=a?decodeURIComponent(a.replace(/\+/g," ")):"";return r}),{})};var A=function(r){return r.charAt(0)==="/"};var j=r("e",(function(r){return Math.random().toString(36).substr(2,r)}));var k=function(r,e){for(var n=e,t=n+1,a=r.length;t<a;n+=1,t+=1){r[n]=r[t]}r.pop()};var O=function(r,e){if(e===void 0){e=""}var n=e&&e.split("/")||[];var t;var a=0;var i=r&&r.split("/")||[];var f=r&&A(r);var u=e&&A(e);var s=f||u;if(r&&A(r)){n=i}else if(i.length){n.pop();n=n.concat(i)}if(!n.length){return"/"}if(n.length){var v=n[n.length-1];t=v==="."||v===".."||v===""}else{t=false}for(var l=n.length;l>=0;l--){var o=n[l];if(o==="."){k(n,l)}else if(o===".."){k(n,l);a++}else if(a){k(n,l);a--}}if(!s){for(;a--;a){n.unshift("..")}}if(s&&n[0]!==""&&(!n[0]||!A(n[0]))){n.unshift("")}var c=n.join("/");if(t&&c.substr(-1)!=="/"){c+="/"}return c};var R=function(r,e){if(r===e){return true}if(r==null||e==null){return false}if(Array.isArray(r)){return Array.isArray(e)&&r.length===e.length&&r.every((function(r,n){return R(r,e[n])}))}var n=typeof r;var t=typeof e;if(n!==t){return false}if(n==="object"){var a=r.valueOf();var i=e.valueOf();if(a!==r||i!==e){return R(a,i)}var f=Object.keys(r);var u=Object.keys(e);if(f.length!==u.length){return false}return f.every((function(n){return R(r[n],e[n])}))}return false};var E=r("l",(function(r,e){return r.pathname===e.pathname&&r.search===e.search&&r.hash===e.hash&&r.key===e.key&&R(r.state,e.state)}));var I=r("d",(function(r,e,n,t){var a;if(typeof r==="string"){a=x(r);if(e!==undefined){a.state=e}}else{a=Object.assign({pathname:""},r);if(a.search&&a.search.charAt(0)!=="?"){a.search="?"+a.search}if(a.hash&&a.hash.charAt(0)!=="#"){a.hash="#"+a.hash}if(e!==undefined&&a.state===undefined){a.state=e}}try{a.pathname=decodeURI(a.pathname)}catch(i){if(i instanceof URIError){throw new URIError('Pathname "'+a.pathname+'" could not be decoded. '+"This is likely caused by an invalid percent-encoding.")}else{throw i}}a.key=n;if(t){if(!a.pathname){a.pathname=t.pathname}else if(a.pathname.charAt(0)!=="/"){a.pathname=O(a.pathname,t.pathname)}}else{if(!a.pathname){a.pathname="/"}}a.query=w(a.search||"");return a}));var $=0;var U={};var M=1e4;var S=function(r,e){var n=""+e.end+e.strict;var t=U[n]||(U[n]={});var a=JSON.stringify(r);if(t[a]){return t[a]}var i=[];var f=h(r,i,e);var u={re:f,keys:i};if($<M){t[a]=u;$+=1}return u};var q=r("m",(function(r,e){if(e===void 0){e={}}if(typeof e==="string"){e={path:e}}var n=e.path,t=n===void 0?"/":n,a=e.exact,i=a===void 0?false:a,f=e.strict,u=f===void 0?false:f;var s=S(t,{end:i,strict:u}),v=s.re,l=s.keys;var o=v.exec(r);if(!o){return null}var c=o[0],h=o.slice(1);var p=r===c;if(i&&!p){return null}return{path:t,url:t==="/"&&c===""?"/":c,isExact:p,params:l.reduce((function(r,e,n){r[e.name]=h[n];return r}),{})}}));var C=r("b",(function(r,e){if(r==null&&e==null){return true}if(e==null){return false}return r&&e&&r.path===e.path&&r.url===e.url&&R(r.params,e.params)}));var z;var J=function(){if(typeof window==="undefined"){return new Map}else{if(!z){var r=window;r.Ionicons=r.Ionicons||{};z=r.Ionicons.map=r.Ionicons.map||new Map}return z}};var L=r("g",(function(r){var e=T(r.src);if(e){return e}e=P(r.name,r.icon,r.mode,r.ios,r.md);if(e){return N(e)}if(r.icon){e=T(r.icon);if(e){return e}e=T(r.icon[r.mode]);if(e){return e}}return null}));var N=function(r){var n=J().get(r);if(n){return n}return e("svg/"+r+".svg")};var P=r("a",(function(r,e,n,t,a){n=(n&&D(n))==="ios"?"ios":"md";if(t&&n==="ios"){r=D(t)}else if(a&&n==="md"){r=D(a)}else{if(!r&&e&&!W(e)){r=e}if(B(r)){r=D(r)}}if(!B(r)||r.trim()===""){return null}var i=r.replace(/[a-z]|-|\d/gi,"");if(i!==""){return null}return r}));var T=function(r){if(B(r)){r=r.trim();if(W(r)){return r}}return null};var W=function(r){return r.length>0&&/(\/|\.)/.test(r)};var B=r("i",(function(r){return typeof r==="string"}));var D=function(r){return r.toLowerCase()}}}}));