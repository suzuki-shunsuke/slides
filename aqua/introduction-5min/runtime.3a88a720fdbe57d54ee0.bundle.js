(()=>{"use strict";var e,t,r,n,o,a,i={},d={};function c(e){var t=d[e];if(void 0!==t)return t.exports;var r=d[e]={exports:{}};return i[e].call(r.exports,r,r.exports,c),r.exports}c.m=i,e=[],c.O=(t,r,n,o)=>{if(!r){var a=1/0;for(f=0;f<e.length;f++){for(var[r,n,o]=e[f],i=!0,d=0;d<r.length;d++)(!1&o||a>=o)&&Object.keys(c.O).every((e=>c.O[e](r[d])))?r.splice(d--,1):(i=!1,o<a&&(a=o));if(i){e.splice(f--,1);var l=n();void 0!==l&&(t=l)}}return t}o=o||0;for(var f=e.length;f>0&&e[f-1][2]>o;f--)e[f]=e[f-1];e[f]=[r,n,o]},c.F={},c.E=e=>{Object.keys(c.F).map((t=>{c.F[t](e)}))},c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,c.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var o=Object.create(null);c.r(o);var a={};t=t||[null,r({}),r([]),r(r)];for(var i=2&n&&e;"object"==typeof i&&!~t.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach((t=>a[t]=()=>e[t]));return a.default=()=>e,c.d(o,a),o},c.d=(e,t)=>{for(var r in t)c.o(t,r)&&!c.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((t,r)=>(c.f[r](e,t),t)),[])),c.u=e=>e+"."+{114:"f9a6c5b363776a9f986d",174:"01596adc2956902bdd67",352:"0573c8e9b25614928fdc",568:"d00dad97060d61b68682",582:"815759eb9ee7c2b32618",869:"21bac4757d4438764afe",880:"e3ed60321cc4718c3e9c",905:"7a3fce5a766e49a3bfa3",921:"c28c1dbbae880d213c31"}[e]+".bundle.js",c.miniCssF=e=>(({179:"main",736:"vendor"}[e]||e)+"."+{114:"f9a6c5b363776a9f986d",174:"01596adc2956902bdd67",179:"184ce7cf12eb827f43cf",352:"0573c8e9b25614928fdc",736:"ff860291554170eabe01",880:"e3ed60321cc4718c3e9c",905:"7a3fce5a766e49a3bfa3"}[e]+".css"),c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n={},c.l=(e,t,r,o)=>{if(n[e])n[e].push(t);else{var a,i;if(void 0!==r)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var f=d[l];if(f.getAttribute("src")==e){a=f;break}}a||(i=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,c.nc&&a.setAttribute("nonce",c.nc),a.src=e),n[e]=[t];var u=(t,r)=>{a.onerror=a.onload=null,clearTimeout(s);var o=n[e];if(delete n[e],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(r))),t)return t(r)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=u.bind(null,a.onerror),a.onload=u.bind(null,a.onload),i&&document.head.appendChild(a)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.p="/slides/aqua/introduction-5min/",o=e=>new Promise(((t,r)=>{var n=c.miniCssF(e),o=c.p+n;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=(i=r[n]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===t))return i}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){var i;if((o=(i=a[n]).getAttribute("data-href"))===e||o===t)return i}})(n,o))return t();((e,t,r,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=a=>{if(o.onerror=o.onload=null,"load"===a.type)r();else{var i=a&&("load"===a.type?"missing":a.type),d=a&&a.target&&a.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+d+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=d,o.parentNode.removeChild(o),n(c)}},o.href=t,document.head.appendChild(o)})(e,o,t,r)})),a={666:0},c.f.miniCss=(e,t)=>{a[e]?t.push(a[e]):0!==a[e]&&{114:1,174:1,352:1,880:1,905:1}[e]&&t.push(a[e]=o(e).then((()=>{a[e]=0}),(t=>{throw delete a[e],t})))},(()=>{var e={666:0};c.f.j=(t,r)=>{var n=c.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else if(/^(174|666|880)$/.test(t))e[t]=0;else{var o=new Promise(((r,o)=>n=e[t]=[r,o]));r.push(n[2]=o);var a=c.p+c.u(t),i=new Error;c.l(a,(r=>{if(c.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+t,t)}},c.F.j=t=>{if(!(c.o(e,t)&&void 0!==e[t]||/^(174|666|880)$/.test(t))){e[t]=null;var r=document.createElement("link");c.nc&&r.setAttribute("nonce",c.nc),r.rel="prefetch",r.as="script",r.href=c.p+c.u(t),document.head.appendChild(r)}},c.O.j=t=>0===e[t];var t=(t,r)=>{var n,o,[a,i,d]=r,l=0;if(a.some((t=>0!==e[t]))){for(n in i)c.o(i,n)&&(c.m[n]=i[n]);if(d)var f=d(c)}for(t&&t(r);l<a.length;l++)o=a[l],c.o(e,o)&&e[o]&&e[o][0](),e[a[l]]=0;return c.O(f)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();