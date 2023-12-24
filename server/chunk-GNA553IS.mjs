import './polyfills.server.mjs';
import{$ as u3,A as o3,B as g1,C as l3,D as F,E as B,F as p2,G as k1,H as D1,I as Y,J as R1,K as O1,L as I,M as R,N as Q,O as v2,P as a1,Q as E1,R as P1,S as H2,T as g2,U as o1,V as f3,W as h3,X as d3,Y as m3,a as e3,b as D,c as c3,d as f2,da as F1,e as h2,ea as B1,f as E,g as a3,ga as p3,h as p1,ha as v3,i as t3,ia as H3,j as T1,k as v1,l as i3,la as g3,m as n3,n as x,o as s3,p as d2,q as P,r as v,ra as z2,s as r3,t as C,u as q,v as H,w as m2,x as H1,y as u2,z as A1}from"./chunk-BYFKELOM.mjs";import{a as l2,b as Z2}from"./chunk-KRLCULJA.mjs";var K4=[],z3=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=H({type:e}),e.\u0275inj=v({imports:[z2.forRoot(K4),z2]});let c=e;return c})();var X4={prefix:"fas",iconName:"paste",icon:[512,512,["file-clipboard"],"f0ea","M160 0c-23.7 0-44.4 12.9-55.4 32H48C21.5 32 0 53.5 0 80V400c0 26.5 21.5 48 48 48H192V176c0-44.2 35.8-80 80-80h48V80c0-26.5-21.5-48-48-48H215.4C204.4 12.9 183.7 0 160 0zM272 128c-26.5 0-48 21.5-48 48V448v16c0 26.5 21.5 48 48 48H464c26.5 0 48-21.5 48-48V243.9c0-12.7-5.1-24.9-14.1-33.9l-67.9-67.9c-9-9-21.2-14.1-33.9-14.1H320 272zM160 40a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},M3=X4;var V3={prefix:"fas",iconName:"reply-all",icon:[576,512,["mail-reply-all"],"f122","M209.4 39.5c-9.1-9.6-24.3-10-33.9-.9L33.8 173.2c-19.9 18.9-19.9 50.7 0 69.6L175.5 377.4c9.6 9.1 24.8 8.7 33.9-.9s8.7-24.8-.9-33.9L66.8 208 208.5 73.4c9.6-9.1 10-24.3 .9-33.9zM352 64c0-12.6-7.4-24.1-19-29.2s-25-3-34.4 5.4l-160 144c-6.7 6.1-10.6 14.7-10.6 23.8s3.9 17.7 10.6 23.8l160 144c9.4 8.5 22.9 10.6 34.4 5.4s19-16.6 19-29.2V288h32c53 0 96 43 96 96c0 30.4-12.8 47.9-22.2 56.7c-5.5 5.1-9.8 12-9.8 19.5c0 10.9 8.8 19.7 19.7 19.7c2.8 0 5.6-.6 8.1-1.9C494.5 467.9 576 417.3 576 304c0-97.2-78.8-176-176-176H352V64z"]};var C3={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]};function _3(c,e){var i=Object.keys(c);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(c);e&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(c,t).enumerable})),i.push.apply(i,a)}return i}function h(c){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?_3(Object(i),!0).forEach(function(a){V(c,a,i[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(i)):_3(Object(i)).forEach(function(a){Object.defineProperty(c,a,Object.getOwnPropertyDescriptor(i,a))})}return c}function X1(c){"@babel/helpers - typeof";return X1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},X1(c)}function Z4(c,e){if(!(c instanceof e))throw new TypeError("Cannot call a class as a function")}function b3(c,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(c,a.key,a)}}function e6(c,e,i){return e&&b3(c.prototype,e),i&&b3(c,i),Object.defineProperty(c,"prototype",{writable:!1}),c}function V(c,e,i){return e in c?Object.defineProperty(c,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):c[e]=i,c}function R2(c,e){return a6(c)||i6(c,e)||Q3(c,e)||s6()}function w1(c){return c6(c)||t6(c)||Q3(c)||n6()}function c6(c){if(Array.isArray(c))return b2(c)}function a6(c){if(Array.isArray(c))return c}function t6(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function i6(c,e){var i=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(i!=null){var a=[],t=!0,n=!1,s,r;try{for(i=i.call(c);!(t=(s=i.next()).done)&&(a.push(s.value),!(e&&a.length===e));t=!0);}catch(o){n=!0,r=o}finally{try{!t&&i.return!=null&&i.return()}finally{if(n)throw r}}return a}}function Q3(c,e){if(c){if(typeof c=="string")return b2(c,e);var i=Object.prototype.toString.call(c).slice(8,-1);if(i==="Object"&&c.constructor&&(i=c.constructor.name),i==="Map"||i==="Set")return Array.from(c);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return b2(c,e)}}function b2(c,e){(e==null||e>c.length)&&(e=c.length);for(var i=0,a=new Array(e);i<e;i++)a[i]=c[i];return a}function n6(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function s6(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var L3=function(){},O2={},J3={},K3=null,X3={mark:L3,measure:L3};try{typeof window<"u"&&(O2=window),typeof document<"u"&&(J3=document),typeof MutationObserver<"u"&&(K3=MutationObserver),typeof performance<"u"&&(X3=performance)}catch{}var r6=O2.navigator||{},y3=r6.userAgent,x3=y3===void 0?"":y3,K=O2,z=J3,w3=K3,I1=X3,H8=!!K.document,j=!!z.documentElement&&!!z.head&&typeof z.addEventListener=="function"&&typeof z.createElement=="function",Z3=~x3.indexOf("MSIE")||~x3.indexOf("Trident/"),G1,U1,W1,j1,$1,G="___FONT_AWESOME___",L2=16,e4="fa",c4="svg-inline--fa",n1="data-fa-i2svg",y2="data-fa-pseudo-element",o6="data-fa-pseudo-element-pending",E2="data-prefix",P2="data-icon",S3="fontawesome-i2svg",l6="async",f6=["HTML","HEAD","STYLE","SCRIPT"],a4=function(){try{return process.env.NODE_ENV==="production"}catch{return!1}}(),g="classic",M="sharp",F2=[g,M];function S1(c){return new Proxy(c,{get:function(i,a){return a in i?i[a]:i[g]}})}var _1=S1((G1={},V(G1,g,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),V(G1,M,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),G1)),b1=S1((U1={},V(U1,g,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),V(U1,M,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),U1)),L1=S1((W1={},V(W1,g,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),V(W1,M,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),W1)),h6=S1((j1={},V(j1,g,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),V(j1,M,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),j1)),d6=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,t4="fa-layers-text",m6=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,u6=S1(($1={},V($1,g,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),V($1,M,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),$1)),i4=[1,2,3,4,5,6,7,8,9,10],p6=i4.concat([11,12,13,14,15,16,17,18,19,20]),v6=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],t1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},y1=new Set;Object.keys(b1[g]).map(y1.add.bind(y1));Object.keys(b1[M]).map(y1.add.bind(y1));var H6=[].concat(F2,w1(y1),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",t1.GROUP,t1.SWAP_OPACITY,t1.PRIMARY,t1.SECONDARY]).concat(i4.map(function(c){return"".concat(c,"x")})).concat(p6.map(function(c){return"w-".concat(c)})),V1=K.FontAwesomeConfig||{};function g6(c){var e=z.querySelector("script["+c+"]");if(e)return e.getAttribute(c)}function z6(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}z&&typeof z.querySelector=="function"&&(N3=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],N3.forEach(function(c){var e=R2(c,2),i=e[0],a=e[1],t=z6(g6(i));t!=null&&(V1[a]=t)}));var N3,n4={styleDefault:"solid",familyDefault:"classic",cssPrefix:e4,replacementClass:c4,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};V1.familyPrefix&&(V1.cssPrefix=V1.familyPrefix);var d1=h(h({},n4),V1);d1.autoReplaceSvg||(d1.observeMutations=!1);var m={};Object.keys(n4).forEach(function(c){Object.defineProperty(m,c,{enumerable:!0,set:function(i){d1[c]=i,C1.forEach(function(a){return a(m)})},get:function(){return d1[c]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(e){d1.cssPrefix=e,C1.forEach(function(i){return i(m)})},get:function(){return d1.cssPrefix}});K.FontAwesomeConfig=m;var C1=[];function M6(c){return C1.push(c),function(){C1.splice(C1.indexOf(c),1)}}var J=L2,O={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function V6(c){if(!(!c||!j)){var e=z.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=c;for(var i=z.head.childNodes,a=null,t=i.length-1;t>-1;t--){var n=i[t],s=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=n)}return z.head.insertBefore(e,a),c}}var C6="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function x1(){for(var c=12,e="";c-- >0;)e+=C6[Math.random()*62|0];return e}function m1(c){for(var e=[],i=(c||[]).length>>>0;i--;)e[i]=c[i];return e}function B2(c){return c.classList?m1(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(e){return e})}function s4(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function _6(c){return Object.keys(c||{}).reduce(function(e,i){return e+"".concat(i,'="').concat(s4(c[i]),'" ')},"").trim()}function c2(c){return Object.keys(c||{}).reduce(function(e,i){return e+"".concat(i,": ").concat(c[i].trim(),";")},"")}function I2(c){return c.size!==O.size||c.x!==O.x||c.y!==O.y||c.rotate!==O.rotate||c.flipX||c.flipY}function b6(c){var e=c.transform,i=c.containerWidth,a=c.iconWidth,t={transform:"translate(".concat(i/2," 256)")},n="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),r="rotate(".concat(e.rotate," 0 0)"),o={transform:"".concat(n," ").concat(s," ").concat(r)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:t,inner:o,path:f}}function L6(c){var e=c.transform,i=c.width,a=i===void 0?L2:i,t=c.height,n=t===void 0?L2:t,s=c.startCentered,r=s===void 0?!1:s,o="";return r&&Z3?o+="translate(".concat(e.x/J-a/2,"em, ").concat(e.y/J-n/2,"em) "):r?o+="translate(calc(-50% + ".concat(e.x/J,"em), calc(-50% + ").concat(e.y/J,"em)) "):o+="translate(".concat(e.x/J,"em, ").concat(e.y/J,"em) "),o+="scale(".concat(e.size/J*(e.flipX?-1:1),", ").concat(e.size/J*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var y6=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function r4(){var c=e4,e=c4,i=m.cssPrefix,a=m.replacementClass,t=y6;if(i!==c||a!==e){var n=new RegExp("\\.".concat(c,"\\-"),"g"),s=new RegExp("\\--".concat(c,"\\-"),"g"),r=new RegExp("\\.".concat(e),"g");t=t.replace(n,".".concat(i,"-")).replace(s,"--".concat(i,"-")).replace(r,".".concat(a))}return t}var T3=!1;function M2(){m.autoAddCss&&!T3&&(V6(r4()),T3=!0)}var x6={mixout:function(){return{dom:{css:r4,insertCss:M2}}},hooks:function(){return{beforeDOMElementCreation:function(){M2()},beforeI2svg:function(){M2()}}}},U=K||{};U[G]||(U[G]={});U[G].styles||(U[G].styles={});U[G].hooks||(U[G].hooks={});U[G].shims||(U[G].shims=[]);var T=U[G],o4=[],w6=function c(){z.removeEventListener("DOMContentLoaded",c),Z1=1,o4.map(function(e){return e()})},Z1=!1;j&&(Z1=(z.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(z.readyState),Z1||z.addEventListener("DOMContentLoaded",w6));function S6(c){j&&(Z1?setTimeout(c,0):o4.push(c))}function N1(c){var e=c.tag,i=c.attributes,a=i===void 0?{}:i,t=c.children,n=t===void 0?[]:t;return typeof c=="string"?s4(c):"<".concat(e," ").concat(_6(a),">").concat(n.map(N1).join(""),"</").concat(e,">")}function A3(c,e,i){if(c&&c[e]&&c[e][i])return{prefix:e,iconName:i,icon:c[e][i]}}var N6=function(e,i){return function(a,t,n,s){return e.call(i,a,t,n,s)}},V2=function(e,i,a,t){var n=Object.keys(e),s=n.length,r=t!==void 0?N6(i,t):i,o,f,l;for(a===void 0?(o=1,l=e[n[0]]):(o=0,l=a);o<s;o++)f=n[o],l=r(l,e[f],f,e);return l};function T6(c){for(var e=[],i=0,a=c.length;i<a;){var t=c.charCodeAt(i++);if(t>=55296&&t<=56319&&i<a){var n=c.charCodeAt(i++);(n&64512)==56320?e.push(((t&1023)<<10)+(n&1023)+65536):(e.push(t),i--)}else e.push(t)}return e}function x2(c){var e=T6(c);return e.length===1?e[0].toString(16):null}function A6(c,e){var i=c.length,a=c.charCodeAt(e),t;return a>=55296&&a<=56319&&i>e+1&&(t=c.charCodeAt(e+1),t>=56320&&t<=57343)?(a-55296)*1024+t-56320+65536:a}function k3(c){return Object.keys(c).reduce(function(e,i){var a=c[i],t=!!a.icon;return t?e[a.iconName]=a.icon:e[i]=a,e},{})}function w2(c,e){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=i.skipHooks,t=a===void 0?!1:a,n=k3(e);typeof T.hooks.addPack=="function"&&!t?T.hooks.addPack(c,k3(e)):T.styles[c]=h(h({},T.styles[c]||{}),n),c==="fas"&&w2("fa",e)}var q1,Y1,Q1,l1=T.styles,k6=T.shims,D6=(q1={},V(q1,g,Object.values(L1[g])),V(q1,M,Object.values(L1[M])),q1),G2=null,l4={},f4={},h4={},d4={},m4={},R6=(Y1={},V(Y1,g,Object.keys(_1[g])),V(Y1,M,Object.keys(_1[M])),Y1);function O6(c){return~H6.indexOf(c)}function E6(c,e){var i=e.split("-"),a=i[0],t=i.slice(1).join("-");return a===c&&t!==""&&!O6(t)?t:null}var u4=function(){var e=function(n){return V2(l1,function(s,r,o){return s[o]=V2(r,n,{}),s},{})};l4=e(function(t,n,s){if(n[3]&&(t[n[3]]=s),n[2]){var r=n[2].filter(function(o){return typeof o=="number"});r.forEach(function(o){t[o.toString(16)]=s})}return t}),f4=e(function(t,n,s){if(t[s]=s,n[2]){var r=n[2].filter(function(o){return typeof o=="string"});r.forEach(function(o){t[o]=s})}return t}),m4=e(function(t,n,s){var r=n[2];return t[s]=s,r.forEach(function(o){t[o]=s}),t});var i="far"in l1||m.autoFetchSvg,a=V2(k6,function(t,n){var s=n[0],r=n[1],o=n[2];return r==="far"&&!i&&(r="fas"),typeof s=="string"&&(t.names[s]={prefix:r,iconName:o}),typeof s=="number"&&(t.unicodes[s.toString(16)]={prefix:r,iconName:o}),t},{names:{},unicodes:{}});h4=a.names,d4=a.unicodes,G2=a2(m.styleDefault,{family:m.familyDefault})};M6(function(c){G2=a2(c.styleDefault,{family:m.familyDefault})});u4();function U2(c,e){return(l4[c]||{})[e]}function P6(c,e){return(f4[c]||{})[e]}function i1(c,e){return(m4[c]||{})[e]}function p4(c){return h4[c]||{prefix:null,iconName:null}}function F6(c){var e=d4[c],i=U2("fas",c);return e||(i?{prefix:"fas",iconName:i}:null)||{prefix:null,iconName:null}}function X(){return G2}var W2=function(){return{prefix:null,iconName:null,rest:[]}};function a2(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.family,a=i===void 0?g:i,t=_1[a][c],n=b1[a][c]||b1[a][t],s=c in T.styles?c:null;return n||s||null}var D3=(Q1={},V(Q1,g,Object.keys(L1[g])),V(Q1,M,Object.keys(L1[M])),Q1);function t2(c){var e,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=i.skipLookups,t=a===void 0?!1:a,n=(e={},V(e,g,"".concat(m.cssPrefix,"-").concat(g)),V(e,M,"".concat(m.cssPrefix,"-").concat(M)),e),s=null,r=g;(c.includes(n[g])||c.some(function(f){return D3[g].includes(f)}))&&(r=g),(c.includes(n[M])||c.some(function(f){return D3[M].includes(f)}))&&(r=M);var o=c.reduce(function(f,l){var d=E6(m.cssPrefix,l);if(l1[l]?(l=D6[r].includes(l)?h6[r][l]:l,s=l,f.prefix=l):R6[r].indexOf(l)>-1?(s=l,f.prefix=a2(l,{family:r})):d?f.iconName=d:l!==m.replacementClass&&l!==n[g]&&l!==n[M]&&f.rest.push(l),!t&&f.prefix&&f.iconName){var u=s==="fa"?p4(f.iconName):{},p=i1(f.prefix,f.iconName);u.prefix&&(s=null),f.iconName=u.iconName||p||f.iconName,f.prefix=u.prefix||f.prefix,f.prefix==="far"&&!l1.far&&l1.fas&&!m.autoFetchSvg&&(f.prefix="fas")}return f},W2());return(c.includes("fa-brands")||c.includes("fab"))&&(o.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(o.prefix="fad"),!o.prefix&&r===M&&(l1.fass||m.autoFetchSvg)&&(o.prefix="fass",o.iconName=i1(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||s==="fa")&&(o.prefix=X()||"fas"),o}var B6=function(){function c(){Z4(this,c),this.definitions={}}return e6(c,[{key:"add",value:function(){for(var i=this,a=arguments.length,t=new Array(a),n=0;n<a;n++)t[n]=arguments[n];var s=t.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(r){i.definitions[r]=h(h({},i.definitions[r]||{}),s[r]),w2(r,s[r]);var o=L1[g][r];o&&w2(o,s[r]),u4()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(i,a){var t=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(t).map(function(n){var s=t[n],r=s.prefix,o=s.iconName,f=s.icon,l=f[2];i[r]||(i[r]={}),l.length>0&&l.forEach(function(d){typeof d=="string"&&(i[r][d]=f)}),i[r][o]=f}),i}}]),c}(),R3=[],f1={},h1={},I6=Object.keys(h1);function G6(c,e){var i=e.mixoutsTo;return R3=c,f1={},Object.keys(h1).forEach(function(a){I6.indexOf(a)===-1&&delete h1[a]}),R3.forEach(function(a){var t=a.mixout?a.mixout():{};if(Object.keys(t).forEach(function(s){typeof t[s]=="function"&&(i[s]=t[s]),X1(t[s])==="object"&&Object.keys(t[s]).forEach(function(r){i[s]||(i[s]={}),i[s][r]=t[s][r]})}),a.hooks){var n=a.hooks();Object.keys(n).forEach(function(s){f1[s]||(f1[s]=[]),f1[s].push(n[s])})}a.provides&&a.provides(h1)}),i}function S2(c,e){for(var i=arguments.length,a=new Array(i>2?i-2:0),t=2;t<i;t++)a[t-2]=arguments[t];var n=f1[c]||[];return n.forEach(function(s){e=s.apply(null,[e].concat(a))}),e}function s1(c){for(var e=arguments.length,i=new Array(e>1?e-1:0),a=1;a<e;a++)i[a-1]=arguments[a];var t=f1[c]||[];t.forEach(function(n){n.apply(null,i)})}function W(){var c=arguments[0],e=Array.prototype.slice.call(arguments,1);return h1[c]?h1[c].apply(null,e):void 0}function N2(c){c.prefix==="fa"&&(c.prefix="fas");var e=c.iconName,i=c.prefix||X();if(e)return e=i1(i,e)||e,A3(v4.definitions,i,e)||A3(T.styles,i,e)}var v4=new B6,U6=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,s1("noAuto")},W6={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return j?(s1("beforeI2svg",e),W("pseudoElements2svg",e),W("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=e.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,S6(function(){$6({autoReplaceSvgRoot:i}),s1("watch",e)})}},j6={icon:function(e){if(e===null)return null;if(X1(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:i1(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var i=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],a=a2(e[0]);return{prefix:a,iconName:i1(a,i)||i}}if(typeof e=="string"&&(e.indexOf("".concat(m.cssPrefix,"-"))>-1||e.match(d6))){var t=t2(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||X(),iconName:i1(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){var n=X();return{prefix:n,iconName:i1(n,e)||e}}}},w={noAuto:U6,config:m,dom:W6,parse:j6,library:v4,findIconDefinition:N2,toHtml:N1},$6=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=e.autoReplaceSvgRoot,a=i===void 0?z:i;(Object.keys(T.styles).length>0||m.autoFetchSvg)&&j&&m.autoReplaceSvg&&w.dom.i2svg({node:a})};function i2(c,e){return Object.defineProperty(c,"abstract",{get:e}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(a){return N1(a)})}}),Object.defineProperty(c,"node",{get:function(){if(j){var a=z.createElement("div");return a.innerHTML=c.html,a.children}}}),c}function q6(c){var e=c.children,i=c.main,a=c.mask,t=c.attributes,n=c.styles,s=c.transform;if(I2(s)&&i.found&&!a.found){var r=i.width,o=i.height,f={x:r/o/2,y:.5};t.style=c2(h(h({},n),{},{"transform-origin":"".concat(f.x+s.x/16,"em ").concat(f.y+s.y/16,"em")}))}return[{tag:"svg",attributes:t,children:e}]}function Y6(c){var e=c.prefix,i=c.iconName,a=c.children,t=c.attributes,n=c.symbol,s=n===!0?"".concat(e,"-").concat(m.cssPrefix,"-").concat(i):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:h(h({},t),{},{id:s}),children:a}]}]}function j2(c){var e=c.icons,i=e.main,a=e.mask,t=c.prefix,n=c.iconName,s=c.transform,r=c.symbol,o=c.title,f=c.maskId,l=c.titleId,d=c.extra,u=c.watchable,p=u===void 0?!1:u,b=a.found?a:i,S=b.width,N=b.height,A=t==="fak",_=[m.replacementClass,n?"".concat(m.cssPrefix,"-").concat(n):""].filter(function($){return d.classes.indexOf($)===-1}).filter(function($){return $!==""||!!$}).concat(d.classes).join(" "),L={children:[],attributes:h(h({},d.attributes),{},{"data-prefix":t,"data-icon":n,class:_,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(N)})},k=A&&!~d.classes.indexOf("fa-fw")?{width:"".concat(S/N*16*.0625,"em")}:{};p&&(L.attributes[n1]=""),o&&(L.children.push({tag:"title",attributes:{id:L.attributes["aria-labelledby"]||"title-".concat(l||x1())},children:[o]}),delete L.attributes.title);var y=h(h({},L),{},{prefix:t,iconName:n,main:i,mask:a,maskId:f,transform:s,symbol:r,styles:h(h({},k),d.styles)}),e1=a.found&&i.found?W("generateAbstractMask",y)||{children:[],attributes:{}}:W("generateAbstractIcon",y)||{children:[],attributes:{}},c1=e1.children,o2=e1.attributes;return y.children=c1,y.attributes=o2,r?Y6(y):q6(y)}function O3(c){var e=c.content,i=c.width,a=c.height,t=c.transform,n=c.title,s=c.extra,r=c.watchable,o=r===void 0?!1:r,f=h(h(h({},s.attributes),n?{title:n}:{}),{},{class:s.classes.join(" ")});o&&(f[n1]="");var l=h({},s.styles);I2(t)&&(l.transform=L6({transform:t,startCentered:!0,width:i,height:a}),l["-webkit-transform"]=l.transform);var d=c2(l);d.length>0&&(f.style=d);var u=[];return u.push({tag:"span",attributes:f,children:[e]}),n&&u.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),u}function Q6(c){var e=c.content,i=c.title,a=c.extra,t=h(h(h({},a.attributes),i?{title:i}:{}),{},{class:a.classes.join(" ")}),n=c2(a.styles);n.length>0&&(t.style=n);var s=[];return s.push({tag:"span",attributes:t,children:[e]}),i&&s.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),s}var C2=T.styles;function T2(c){var e=c[0],i=c[1],a=c.slice(4),t=R2(a,1),n=t[0],s=null;return Array.isArray(n)?s={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(t1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(t1.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(t1.PRIMARY),fill:"currentColor",d:n[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:e,height:i,icon:s}}var J6={found:!1,width:512,height:512};function K6(c,e){!a4&&!m.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(e,'" is missing.'))}function A2(c,e){var i=e;return e==="fa"&&m.styleDefault!==null&&(e=X()),new Promise(function(a,t){var n={found:!1,width:512,height:512,icon:W("missingIconAbstract")||{}};if(i==="fa"){var s=p4(c)||{};c=s.iconName||c,e=s.prefix||e}if(c&&e&&C2[e]&&C2[e][c]){var r=C2[e][c];return a(T2(r))}K6(c,e),a(h(h({},J6),{},{icon:m.showMissingIcons&&c?W("missingIconAbstract")||{}:{}}))})}var E3=function(){},k2=m.measurePerformance&&I1&&I1.mark&&I1.measure?I1:{mark:E3,measure:E3},M1='FA "6.5.1"',X6=function(e){return k2.mark("".concat(M1," ").concat(e," begins")),function(){return H4(e)}},H4=function(e){k2.mark("".concat(M1," ").concat(e," ends")),k2.measure("".concat(M1," ").concat(e),"".concat(M1," ").concat(e," begins"),"".concat(M1," ").concat(e," ends"))},$2={begin:X6,end:H4},J1=function(){};function P3(c){var e=c.getAttribute?c.getAttribute(n1):null;return typeof e=="string"}function Z6(c){var e=c.getAttribute?c.getAttribute(E2):null,i=c.getAttribute?c.getAttribute(P2):null;return e&&i}function e0(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(m.replacementClass)}function c0(){if(m.autoReplaceSvg===!0)return K1.replace;var c=K1[m.autoReplaceSvg];return c||K1.replace}function a0(c){return z.createElementNS("http://www.w3.org/2000/svg",c)}function t0(c){return z.createElement(c)}function g4(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.ceFn,a=i===void 0?c.tag==="svg"?a0:t0:i;if(typeof c=="string")return z.createTextNode(c);var t=a(c.tag);Object.keys(c.attributes||[]).forEach(function(s){t.setAttribute(s,c.attributes[s])});var n=c.children||[];return n.forEach(function(s){t.appendChild(g4(s,{ceFn:a}))}),t}function i0(c){var e=" ".concat(c.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var K1={replace:function(e){var i=e[0];if(i.parentNode)if(e[1].forEach(function(t){i.parentNode.insertBefore(g4(t),i)}),i.getAttribute(n1)===null&&m.keepOriginalSource){var a=z.createComment(i0(i));i.parentNode.replaceChild(a,i)}else i.remove()},nest:function(e){var i=e[0],a=e[1];if(~B2(i).indexOf(m.replacementClass))return K1.replace(e);var t=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var n=a[0].attributes.class.split(" ").reduce(function(r,o){return o===m.replacementClass||o.match(t)?r.toSvg.push(o):r.toNode.push(o),r},{toNode:[],toSvg:[]});a[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?i.removeAttribute("class"):i.setAttribute("class",n.toNode.join(" "))}var s=a.map(function(r){return N1(r)}).join(`
`);i.setAttribute(n1,""),i.innerHTML=s}};function F3(c){c()}function z4(c,e){var i=typeof e=="function"?e:J1;if(c.length===0)i();else{var a=F3;m.mutateApproach===l6&&(a=K.requestAnimationFrame||F3),a(function(){var t=c0(),n=$2.begin("mutate");c.map(t),n(),i()})}}var q2=!1;function M4(){q2=!0}function D2(){q2=!1}var e2=null;function B3(c){if(w3&&m.observeMutations){var e=c.treeCallback,i=e===void 0?J1:e,a=c.nodeCallback,t=a===void 0?J1:a,n=c.pseudoElementsCallback,s=n===void 0?J1:n,r=c.observeMutationsRoot,o=r===void 0?z:r;e2=new w3(function(f){if(!q2){var l=X();m1(f).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!P3(d.addedNodes[0])&&(m.searchPseudoElements&&s(d.target),i(d.target)),d.type==="attributes"&&d.target.parentNode&&m.searchPseudoElements&&s(d.target.parentNode),d.type==="attributes"&&P3(d.target)&&~v6.indexOf(d.attributeName))if(d.attributeName==="class"&&Z6(d.target)){var u=t2(B2(d.target)),p=u.prefix,b=u.iconName;d.target.setAttribute(E2,p||l),b&&d.target.setAttribute(P2,b)}else e0(d.target)&&t(d.target)})}}),j&&e2.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function n0(){e2&&e2.disconnect()}function s0(c){var e=c.getAttribute("style"),i=[];return e&&(i=e.split(";").reduce(function(a,t){var n=t.split(":"),s=n[0],r=n.slice(1);return s&&r.length>0&&(a[s]=r.join(":").trim()),a},{})),i}function r0(c){var e=c.getAttribute("data-prefix"),i=c.getAttribute("data-icon"),a=c.innerText!==void 0?c.innerText.trim():"",t=t2(B2(c));return t.prefix||(t.prefix=X()),e&&i&&(t.prefix=e,t.iconName=i),t.iconName&&t.prefix||(t.prefix&&a.length>0&&(t.iconName=P6(t.prefix,c.innerText)||U2(t.prefix,x2(c.innerText))),!t.iconName&&m.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(t.iconName=c.firstChild.data)),t}function o0(c){var e=m1(c.attributes).reduce(function(t,n){return t.name!=="class"&&t.name!=="style"&&(t[n.name]=n.value),t},{}),i=c.getAttribute("title"),a=c.getAttribute("data-fa-title-id");return m.autoA11y&&(i?e["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(a||x1()):(e["aria-hidden"]="true",e.focusable="false")),e}function l0(){return{iconName:null,title:null,titleId:null,prefix:null,transform:O,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function I3(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},i=r0(c),a=i.iconName,t=i.prefix,n=i.rest,s=o0(c),r=S2("parseNodeAttributes",{},c),o=e.styleParser?s0(c):[];return h({iconName:a,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:t,transform:O,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:o,attributes:s}},r)}var f0=T.styles;function V4(c){var e=m.autoReplaceSvg==="nest"?I3(c,{styleParser:!1}):I3(c);return~e.extra.classes.indexOf(t4)?W("generateLayersText",c,e):W("generateSvgReplacementMutation",c,e)}var Z=new Set;F2.map(function(c){Z.add("fa-".concat(c))});Object.keys(_1[g]).map(Z.add.bind(Z));Object.keys(_1[M]).map(Z.add.bind(Z));Z=w1(Z);function G3(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!j)return Promise.resolve();var i=z.documentElement.classList,a=function(d){return i.add("".concat(S3,"-").concat(d))},t=function(d){return i.remove("".concat(S3,"-").concat(d))},n=m.autoFetchSvg?Z:F2.map(function(l){return"fa-".concat(l)}).concat(Object.keys(f0));n.includes("fa")||n.push("fa");var s=[".".concat(t4,":not([").concat(n1,"])")].concat(n.map(function(l){return".".concat(l,":not([").concat(n1,"])")})).join(", ");if(s.length===0)return Promise.resolve();var r=[];try{r=m1(c.querySelectorAll(s))}catch{}if(r.length>0)a("pending"),t("complete");else return Promise.resolve();var o=$2.begin("onTree"),f=r.reduce(function(l,d){try{var u=V4(d);u&&l.push(u)}catch(p){a4||p.name==="MissingIcon"&&console.error(p)}return l},[]);return new Promise(function(l,d){Promise.all(f).then(function(u){z4(u,function(){a("active"),a("complete"),t("pending"),typeof e=="function"&&e(),o(),l()})}).catch(function(u){o(),d(u)})})}function h0(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;V4(c).then(function(i){i&&z4([i],e)})}function d0(c){return function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:N2(e||{}),t=i.mask;return t&&(t=(t||{}).icon?t:N2(t||{})),c(a,h(h({},i),{},{mask:t}))}}var m0=function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=i.transform,t=a===void 0?O:a,n=i.symbol,s=n===void 0?!1:n,r=i.mask,o=r===void 0?null:r,f=i.maskId,l=f===void 0?null:f,d=i.title,u=d===void 0?null:d,p=i.titleId,b=p===void 0?null:p,S=i.classes,N=S===void 0?[]:S,A=i.attributes,_=A===void 0?{}:A,L=i.styles,k=L===void 0?{}:L;if(e){var y=e.prefix,e1=e.iconName,c1=e.icon;return i2(h({type:"icon"},e),function(){return s1("beforeDOMElementCreation",{iconDefinition:e,params:i}),m.autoA11y&&(u?_["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(b||x1()):(_["aria-hidden"]="true",_.focusable="false")),j2({icons:{main:T2(c1),mask:o?T2(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:y,iconName:e1,transform:h(h({},O),t),symbol:s,title:u,maskId:l,titleId:b,extra:{attributes:_,styles:k,classes:N}})})}},u0={mixout:function(){return{icon:d0(m0)}},hooks:function(){return{mutationObserverCallbacks:function(i){return i.treeCallback=G3,i.nodeCallback=h0,i}}},provides:function(e){e.i2svg=function(i){var a=i.node,t=a===void 0?z:a,n=i.callback,s=n===void 0?function(){}:n;return G3(t,s)},e.generateSvgReplacementMutation=function(i,a){var t=a.iconName,n=a.title,s=a.titleId,r=a.prefix,o=a.transform,f=a.symbol,l=a.mask,d=a.maskId,u=a.extra;return new Promise(function(p,b){Promise.all([A2(t,r),l.iconName?A2(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var N=R2(S,2),A=N[0],_=N[1];p([i,j2({icons:{main:A,mask:_},prefix:r,iconName:t,transform:o,symbol:f,maskId:d,title:n,titleId:s,extra:u,watchable:!0})])}).catch(b)})},e.generateAbstractIcon=function(i){var a=i.children,t=i.attributes,n=i.main,s=i.transform,r=i.styles,o=c2(r);o.length>0&&(t.style=o);var f;return I2(s)&&(f=W("generateAbstractTransformGrouping",{main:n,transform:s,containerWidth:n.width,iconWidth:n.width})),a.push(f||n.icon),{children:a,attributes:t}}}},p0={mixout:function(){return{layer:function(i){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=a.classes,n=t===void 0?[]:t;return i2({type:"layer"},function(){s1("beforeDOMElementCreation",{assembler:i,params:a});var s=[];return i(function(r){Array.isArray(r)?r.map(function(o){s=s.concat(o.abstract)}):s=s.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(w1(n)).join(" ")},children:s}]})}}}},v0={mixout:function(){return{counter:function(i){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=a.title,n=t===void 0?null:t,s=a.classes,r=s===void 0?[]:s,o=a.attributes,f=o===void 0?{}:o,l=a.styles,d=l===void 0?{}:l;return i2({type:"counter",content:i},function(){return s1("beforeDOMElementCreation",{content:i,params:a}),Q6({content:i.toString(),title:n,extra:{attributes:f,styles:d,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(w1(r))}})})}}}},H0={mixout:function(){return{text:function(i){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=a.transform,n=t===void 0?O:t,s=a.title,r=s===void 0?null:s,o=a.classes,f=o===void 0?[]:o,l=a.attributes,d=l===void 0?{}:l,u=a.styles,p=u===void 0?{}:u;return i2({type:"text",content:i},function(){return s1("beforeDOMElementCreation",{content:i,params:a}),O3({content:i,transform:h(h({},O),n),title:r,extra:{attributes:d,styles:p,classes:["".concat(m.cssPrefix,"-layers-text")].concat(w1(f))}})})}}},provides:function(e){e.generateLayersText=function(i,a){var t=a.title,n=a.transform,s=a.extra,r=null,o=null;if(Z3){var f=parseInt(getComputedStyle(i).fontSize,10),l=i.getBoundingClientRect();r=l.width/f,o=l.height/f}return m.autoA11y&&!t&&(s.attributes["aria-hidden"]="true"),Promise.resolve([i,O3({content:i.innerHTML,width:r,height:o,transform:n,title:t,extra:s,watchable:!0})])}}},g0=new RegExp('"',"ug"),U3=[1105920,1112319];function z0(c){var e=c.replace(g0,""),i=A6(e,0),a=i>=U3[0]&&i<=U3[1],t=e.length===2?e[0]===e[1]:!1;return{value:x2(t?e[0]:e),isSecondary:a||t}}function W3(c,e){var i="".concat(o6).concat(e.replace(":","-"));return new Promise(function(a,t){if(c.getAttribute(i)!==null)return a();var n=m1(c.children),s=n.filter(function(c1){return c1.getAttribute(y2)===e})[0],r=K.getComputedStyle(c,e),o=r.getPropertyValue("font-family").match(m6),f=r.getPropertyValue("font-weight"),l=r.getPropertyValue("content");if(s&&!o)return c.removeChild(s),a();if(o&&l!=="none"&&l!==""){var d=r.getPropertyValue("content"),u=~["Sharp"].indexOf(o[2])?M:g,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(o[2])?b1[u][o[2].toLowerCase()]:u6[u][f],b=z0(d),S=b.value,N=b.isSecondary,A=o[0].startsWith("FontAwesome"),_=U2(p,S),L=_;if(A){var k=F6(S);k.iconName&&k.prefix&&(_=k.iconName,p=k.prefix)}if(_&&!N&&(!s||s.getAttribute(E2)!==p||s.getAttribute(P2)!==L)){c.setAttribute(i,L),s&&c.removeChild(s);var y=l0(),e1=y.extra;e1.attributes[y2]=e,A2(_,p).then(function(c1){var o2=j2(h(h({},y),{},{icons:{main:c1,mask:W2()},prefix:p,iconName:L,extra:e1,watchable:!0})),$=z.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?c.insertBefore($,c.firstChild):c.appendChild($),$.outerHTML=o2.map(function(J4){return N1(J4)}).join(`
`),c.removeAttribute(i),a()}).catch(t)}else a()}else a()})}function M0(c){return Promise.all([W3(c,"::before"),W3(c,"::after")])}function V0(c){return c.parentNode!==document.head&&!~f6.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(y2)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function j3(c){if(j)return new Promise(function(e,i){var a=m1(c.querySelectorAll("*")).filter(V0).map(M0),t=$2.begin("searchPseudoElements");M4(),Promise.all(a).then(function(){t(),D2(),e()}).catch(function(){t(),D2(),i()})})}var C0={hooks:function(){return{mutationObserverCallbacks:function(i){return i.pseudoElementsCallback=j3,i}}},provides:function(e){e.pseudoElements2svg=function(i){var a=i.node,t=a===void 0?z:a;m.searchPseudoElements&&j3(t)}}},$3=!1,_0={mixout:function(){return{dom:{unwatch:function(){M4(),$3=!0}}}},hooks:function(){return{bootstrap:function(){B3(S2("mutationObserverCallbacks",{}))},noAuto:function(){n0()},watch:function(i){var a=i.observeMutationsRoot;$3?D2():B3(S2("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},q3=function(e){var i={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(a,t){var n=t.toLowerCase().split("-"),s=n[0],r=n.slice(1).join("-");if(s&&r==="h")return a.flipX=!0,a;if(s&&r==="v")return a.flipY=!0,a;if(r=parseFloat(r),isNaN(r))return a;switch(s){case"grow":a.size=a.size+r;break;case"shrink":a.size=a.size-r;break;case"left":a.x=a.x-r;break;case"right":a.x=a.x+r;break;case"up":a.y=a.y-r;break;case"down":a.y=a.y+r;break;case"rotate":a.rotate=a.rotate+r;break}return a},i)},b0={mixout:function(){return{parse:{transform:function(i){return q3(i)}}}},hooks:function(){return{parseNodeAttributes:function(i,a){var t=a.getAttribute("data-fa-transform");return t&&(i.transform=q3(t)),i}}},provides:function(e){e.generateAbstractTransformGrouping=function(i){var a=i.main,t=i.transform,n=i.containerWidth,s=i.iconWidth,r={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),f="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),d={transform:"".concat(o," ").concat(f," ").concat(l)},u={transform:"translate(".concat(s/2*-1," -256)")},p={outer:r,inner:d,path:u};return{tag:"g",attributes:h({},p.outer),children:[{tag:"g",attributes:h({},p.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:h(h({},a.icon.attributes),p.path)}]}]}}}},_2={x:0,y:0,width:"100%",height:"100%"};function Y3(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||e)&&(c.attributes.fill="black"),c}function L0(c){return c.tag==="g"?c.children:[c]}var y0={hooks:function(){return{parseNodeAttributes:function(i,a){var t=a.getAttribute("data-fa-mask"),n=t?t2(t.split(" ").map(function(s){return s.trim()})):W2();return n.prefix||(n.prefix=X()),i.mask=n,i.maskId=a.getAttribute("data-fa-mask-id"),i}}},provides:function(e){e.generateAbstractMask=function(i){var a=i.children,t=i.attributes,n=i.main,s=i.mask,r=i.maskId,o=i.transform,f=n.width,l=n.icon,d=s.width,u=s.icon,p=b6({transform:o,containerWidth:d,iconWidth:f}),b={tag:"rect",attributes:h(h({},_2),{},{fill:"white"})},S=l.children?{children:l.children.map(Y3)}:{},N={tag:"g",attributes:h({},p.inner),children:[Y3(h({tag:l.tag,attributes:h(h({},l.attributes),p.path)},S))]},A={tag:"g",attributes:h({},p.outer),children:[N]},_="mask-".concat(r||x1()),L="clip-".concat(r||x1()),k={tag:"mask",attributes:h(h({},_2),{},{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[b,A]},y={tag:"defs",children:[{tag:"clipPath",attributes:{id:L},children:L0(u)},k]};return a.push(y,{tag:"rect",attributes:h({fill:"currentColor","clip-path":"url(#".concat(L,")"),mask:"url(#".concat(_,")")},_2)}),{children:a,attributes:t}}}},x0={provides:function(e){var i=!1;K.matchMedia&&(i=K.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var a=[],t={fill:"currentColor"},n={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:h(h({},t),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=h(h({},n),{},{attributeName:"opacity"}),r={tag:"circle",attributes:h(h({},t),{},{cx:"256",cy:"364",r:"28"}),children:[]};return i||r.children.push({tag:"animate",attributes:h(h({},n),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:h(h({},s),{},{values:"1;0;1;1;0;1;"})}),a.push(r),a.push({tag:"path",attributes:h(h({},t),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:i?[]:[{tag:"animate",attributes:h(h({},s),{},{values:"1;0;0;0;0;1;"})}]}),i||a.push({tag:"path",attributes:h(h({},t),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:h(h({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},w0={hooks:function(){return{parseNodeAttributes:function(i,a){var t=a.getAttribute("data-fa-symbol"),n=t===null?!1:t===""?!0:t;return i.symbol=n,i}}}},S0=[x6,u0,p0,v0,H0,C0,_0,b0,y0,x0,w0];G6(S0,{mixoutsTo:w});var g8=w.noAuto,z8=w.config,M8=w.library,V8=w.dom,C4=w.parse,C8=w.findIconDefinition,_8=w.toHtml,_4=w.icon,b8=w.layer,N0=w.text,T0=w.counter;var D0=["*"],R0=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},O0=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},E0=c=>{let e={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:c.rotate!==null,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(e).map(i=>e[i]?i:null).filter(i=>i)},P0=c=>c.prefix!==void 0&&c.iconName!==void 0,F0=(c,e)=>P0(c)?c:typeof c=="string"?{prefix:e,iconName:c}:{prefix:c[0],iconName:c[1]},B0=(()=>{let e=class e{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null}};e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=P({token:e,factory:e.\u0275fac,providedIn:"root"});let c=e;return c})(),I0=(()=>{let e=class e{constructor(){this.definitions={}}addIcons(...a){for(let t of a){t.prefix in this.definitions||(this.definitions[t.prefix]={}),this.definitions[t.prefix][t.iconName]=t;for(let n of t.icon[2])typeof n=="string"&&(this.definitions[t.prefix][n]=t)}}addIconPacks(...a){for(let t of a){let n=Object.keys(t).map(s=>t[s]);this.addIcons(...n)}}getIconDefinition(a,t){return a in this.definitions&&t in this.definitions[a]?this.definitions[a][t]:null}};e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=P({token:e,factory:e.\u0275fac,providedIn:"root"});let c=e;return c})(),G0=(()=>{let e=class e{constructor(){this.stackItemSize="1x"}ngOnChanges(a){if("size"in a)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=m2({type:e,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[H1]});let c=e;return c})(),U0=(()=>{let e=class e{constructor(a,t){this.renderer=a,this.elementRef=t}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(a){"size"in a&&(a.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${a.size.currentValue}`),a.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${a.size.previousValue}`))}};e.\u0275fac=function(t){return new(t||e)(B(l3),B(g1))},e.\u0275cmp=q({type:e,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[H1,o1],ngContentSelectors:D0,decls:1,vars:0,template:function(t,n){t&1&&(E1(),P1(0))},encapsulation:2});let c=e;return c})(),b4=(()=>{let e=class e{set spin(a){this.animation=a?"spin":void 0}set pulse(a){this.animation=a?"spin-pulse":void 0}constructor(a,t,n,s,r){this.sanitizer=a,this.config=t,this.iconLibrary=n,this.stackItem=s,this.classes=[],r!=null&&s==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(a){if(this.icon==null&&this.config.fallbackIcon==null){O0();return}if(a){let t=this.icon!=null?this.icon:this.config.fallbackIcon,n=this.findIconDefinition(t);if(n!=null){let s=this.buildParams();this.renderIcon(n,s)}}}render(){this.ngOnChanges({})}findIconDefinition(a){let t=F0(a,this.config.defaultPrefix);if("icon"in t)return t;let n=this.iconLibrary.getIconDefinition(t.prefix,t.iconName);return n??(R0(t),null)}buildParams(){let a={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},t=typeof this.transform=="string"?C4.transform(this.transform):this.transform;return{title:this.title,transform:t,classes:[...E0(a),...this.classes],mask:this.mask!=null?this.findIconDefinition(this.mask):null,styles:this.styles!=null?this.styles:{},symbol:this.symbol,attributes:{role:this.a11yRole}}}renderIcon(a,t){let n=_4(a,t);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(n.html.join(`
`))}};e.\u0275fac=function(t){return new(t||e)(B(v3),B(B0),B(I0),B(G0,8),B(U0,8))},e.\u0275cmp=q({type:e,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(t,n){t&2&&(v2("innerHTML",n.renderedIconHTML,o3),D1("title",n.title))},inputs:{icon:"icon",title:"title",animation:"animation",spin:"spin",pulse:"pulse",mask:"mask",styles:"styles",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",classes:"classes",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[H1,o1],decls:0,vars:0,template:function(t,n){},encapsulation:2});let c=e;return c})();var L4=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=H({type:e}),e.\u0275inj=v({});let c=e;return c})();var n2=(()=>{let e=class e{constructor(){this.title="Path Formater",this.varipstring="",this.varopstring="",this.varPreviousData="",this.CopyClipboardIcon=M3,this.TrashIcon=C3,this.replay=V3}PreviousData(){document.getElementById("inputtxtbox").value=this.varPreviousData,this.someLogic()}someLogic(){var a=document.getElementById("inputtxtbox").value;this.varopstring=a.replaceAll("//","/"),this.varPreviousData=a,document.getElementById("outputtxtbox").value=this.varopstring}copyTextIP(){let a=document.getElementById("inputtxtbox").value;navigator.clipboard.writeText(a)}copyTextOP(){let a=document.getElementById("outputtxtbox").value;navigator.clipboard.writeText(a)}clearTextALL(){document.getElementById("inputtxtbox").value="",document.getElementById("outputtxtbox").value=""}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=q({type:e,selectors:[["app-root"]],decls:25,vars:7,consts:[[1,"row"],[1,"col-sm-12"],[1,"tital-name"],[1,"container"],[1,"col-md-6",2,"display","contents"],[1,"col-md-6","textbox"],[1,"iconsstyle"],["title","Copy to clipboard",1,"btn-all",3,"click"],[3,"icon"],["title","previous path",1,"btn-all",3,"click"],["title","Clear",1,"btn-all",3,"click"],["id","inputtxtbox","rows","5","cols","10","placeholder","enter your path :",1,"form-control","textarea-box",3,"value","input"],["id","outputtxtbox","rows","5","cols","250","placeholder","formatted path :",1,"form-control","textarea-box",3,"value"]],template:function(t,n){t&1&&(I(0,"div",0)(1,"div",1)(2,"header")(3,"h1",2),H2(4),R()()()(),Q(5,"br")(6,"br"),I(7,"section")(8,"div",3)(9,"div",4)(10,"div",5)(11,"div",6)(12,"button",7),a1("click",function(){return n.copyTextIP()}),Q(13,"fa-icon",8),R(),I(14,"button",9),a1("click",function(){return n.PreviousData()}),Q(15,"fa-icon",8),R(),I(16,"button",10),a1("click",function(){return n.clearTextALL()}),Q(17,"fa-icon",8),R()(),I(18,"textarea",11),a1("input",function(){return n.someLogic()}),R()()(),I(19,"div",4)(20,"div",5)(21,"div",6)(22,"button",7),a1("click",function(){return n.copyTextOP()}),Q(23,"fa-icon",8),R()(),Q(24,"textarea",12),R()()()()),t&2&&(F(4),g2(n.title),F(9),Y("icon",n.CopyClipboardIcon),F(2),Y("icon",n.replay),F(2),Y("icon",n.TrashIcon),F(1),Y("value",n.varipstring),F(5),Y("icon",n.CopyClipboardIcon),F(1),Y("value",n.varopstring))},dependencies:[b4],styles:["body[_ngcontent-%COMP%]{max-width:80px}section[_ngcontent-%COMP%]{margin:0;padding:0;display:flex;align-items:center;justify-content:center}header[_ngcontent-%COMP%]{background-color:#415a77;padding:0;text-align:justify;border-bottom:#e5e4e2 1.5px solid}.logo[_ngcontent-%COMP%]{display:inline-block;margin-right:10px}h1[_ngcontent-%COMP%]{display:inline-block;margin:0;color:#f1faee}.tital-name[_ngcontent-%COMP%]{padding:1.2vh 8vh;font-size:40px;font-weight:700;color:#ebf3f8;font-family:Concert One,cursive}.textarea-box[_ngcontent-%COMP%]{background-color:#b5ceeb}.rounded-image[_ngcontent-%COMP%]{border-radius:50%}.backgroundimage[_ngcontent-%COMP%]{background-color:#415a77}.txtareainputpath[_ngcontent-%COMP%]{top:0;left:0}.container[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly;padding-top:10%;flex-direction:row}.textbox[_ngcontent-%COMP%]{width:40%;margin-bottom:10px}.iconsstyle[_ngcontent-%COMP%]{padding-bottom:1%;float:right}.btn-all[_ngcontent-%COMP%]{border:none;background-color:#edede9;margin-left:-5px}"]});let c=e;return c})();var $0=["*"];var q0=["dialog"];var y4={animation:!0,transitionTimerDelayMs:5},Y0=(()=>{let e=class e{constructor(){this.animation=y4.animation}};e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=P({token:e,factory:e.\u0275fac,providedIn:"root"});let c=e;return c})();function Q0(c){let{transitionDelay:e,transitionDuration:i}=window.getComputedStyle(c),a=parseFloat(e),t=parseFloat(i);return(a+t)*1e3}function x4(c){return typeof c=="string"}function Y2(c){return c!=null}function J0(c){return c&&c.then}function w4(c){return(c||document.body).getBoundingClientRect()}function K0(c){return e=>new e3(i=>{let a=s=>c.run(()=>i.next(s)),t=s=>c.run(()=>i.error(s)),n=()=>c.run(()=>i.complete());return e.subscribe({next:a,error:t,complete:n})})}var X0=()=>{},{transitionTimerDelayMs:Z0}=y4,s2=new Map,r1=(c,e,i,a)=>{let t=a.context||{},n=s2.get(e);if(n)switch(a.runningTransition){case"continue":return c3;case"stop":c.run(()=>n.transition$.complete()),t=Object.assign(n.context,t),s2.delete(e)}let s=i(e,a.animation,t)||X0;if(!a.animation||window.getComputedStyle(e).transitionProperty==="none")return c.run(()=>s()),f2(void 0).pipe(K0(c));let r=new D,o=new D,f=r.pipe(i3(!0));s2.set(e,{transition$:r,complete:()=>{o.next(),o.complete()},context:t});let l=Q0(e);return c.runOutsideAngular(()=>{let d=E(e,"transitionend").pipe(x(f),p1(({target:p})=>p===e)),u=a3(l+Z0).pipe(x(f));t3(u,d,o).pipe(x(f)).subscribe(()=>{s2.delete(e),c.run(()=>{s(),r.next(),r.complete()})})}),r.asObservable()};var S4=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=H({type:e}),e.\u0275inj=v({});let c=e;return c})();var N4=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=H({type:e}),e.\u0275inj=v({});let c=e;return c})();var T4=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=H({type:e}),e.\u0275inj=v({});let c=e;return c})(),A4=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=H({type:e}),e.\u0275inj=v({});let c=e;return c})();var K2=function(c){return c[c.Tab=9]="Tab",c[c.Enter=13]="Enter",c[c.Escape=27]="Escape",c[c.Space=32]="Space",c[c.PageUp=33]="PageUp",c[c.PageDown=34]="PageDown",c[c.End=35]="End",c[c.Home=36]="Home",c[c.ArrowLeft=37]="ArrowLeft",c[c.ArrowUp=38]="ArrowUp",c[c.ArrowRight=39]="ArrowRight",c[c.ArrowDown=40]="ArrowDown",c}(K2||{});var $5=(()=>{let c=()=>/iPad|iPhone|iPod/.test(navigator.userAgent)||/Macintosh/.test(navigator.userAgent)&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2,e=()=>/Android/.test(navigator.userAgent);return typeof navigator<"u"?!!navigator.userAgent&&(c()||e()):!1})();var e8=["a[href]","button:not([disabled])",'input:not([disabled]):not([type="hidden"])',"select:not([disabled])","textarea:not([disabled])","[contenteditable]",'[tabindex]:not([tabindex="-1"])'].join(", ");function k4(c){let e=Array.from(c.querySelectorAll(e8)).filter(i=>i.tabIndex!==-1);return[e[0],e[e.length-1]]}var c8=(c,e,i,a=!1)=>{c.runOutsideAngular(()=>{let t=E(e,"focusin").pipe(x(i),h2(n=>n.target));E(e,"keydown").pipe(x(i),p1(n=>n.which===K2.Tab),d2(t)).subscribe(([n,s])=>{let[r,o]=k4(e);(s===r||s===e)&&n.shiftKey&&(o.focus(),n.preventDefault()),s===o&&!n.shiftKey&&(r.focus(),n.preventDefault())}),a&&E(e,"click").pipe(x(i),d2(t),h2(n=>n[1])).subscribe(n=>n.focus())})};var q5=new Date(1882,10,12),Y5=new Date(2174,10,25);var Q5=1e3*60*60*24;var X2=1080,a8=24*X2,t8=12*X2+793,J5=29*a8+t8,K5=11*X2+204;var D4=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=H({type:e}),e.\u0275inj=v({});let c=e;return c})();var R4=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=H({type:e}),e.\u0275inj=v({});let c=e;return c})(),i8=(()=>{let e=class e{constructor(){this._ngbConfig=C(Y0),this.backdrop=!0,this.fullscreen=!1,this.keyboard=!0}get animation(){return this._animation??this._ngbConfig.animation}set animation(a){this._animation=a}};e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=P({token:e,factory:e.\u0275fac,providedIn:"root"});let c=e;return c})(),u1=class{constructor(e,i,a){this.nodes=e,this.viewRef=i,this.componentRef=a}};var n8=(()=>{let e=class e{constructor(){this._document=C(B1)}hide(){let a=Math.abs(window.innerWidth-this._document.documentElement.clientWidth),t=this._document.body,n=t.style,{overflow:s,paddingRight:r}=n;if(a>0){let o=parseFloat(window.getComputedStyle(t).paddingRight);n.paddingRight=`${o+a}px`}return n.overflow="hidden",()=>{a>0&&(n.paddingRight=r),n.overflow=s}}};e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=P({token:e,factory:e.\u0275fac,providedIn:"root"});let c=e;return c})(),s8=(()=>{let e=class e{constructor(){this._nativeElement=C(g1).nativeElement,this._zone=C(k1)}ngOnInit(){this._zone.onStable.asObservable().pipe(v1(1)).subscribe(()=>{r1(this._zone,this._nativeElement,(a,t)=>{t&&w4(a),a.classList.add("show")},{animation:this.animation,runningTransition:"continue"})})}hide(){return r1(this._zone,this._nativeElement,({classList:a})=>a.remove("show"),{animation:this.animation,runningTransition:"stop"})}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=q({type:e,selectors:[["ngb-modal-backdrop"]],hostAttrs:[2,"z-index","1055"],hostVars:6,hostBindings:function(t,n){t&2&&(O1("modal-backdrop"+(n.backdropClass?" "+n.backdropClass:"")),R1("show",!n.animation)("fade",n.animation))},inputs:{animation:"animation",backdropClass:"backdropClass"},standalone:!0,features:[o1],decls:0,vars:0,template:function(t,n){},encapsulation:2});let c=e;return c})(),r2=class{update(e){}close(e){}dismiss(e){}},r8=["animation","ariaLabelledBy","ariaDescribedBy","backdrop","centered","fullscreen","keyboard","scrollable","size","windowClass","modalDialogClass"],o8=["animation","backdropClass"],Q2=class{_applyWindowOptions(e,i){r8.forEach(a=>{Y2(i[a])&&(e[a]=i[a])})}_applyBackdropOptions(e,i){o8.forEach(a=>{Y2(i[a])&&(e[a]=i[a])})}update(e){this._applyWindowOptions(this._windowCmptRef.instance,e),this._backdropCmptRef&&this._backdropCmptRef.instance&&this._applyBackdropOptions(this._backdropCmptRef.instance,e)}get componentInstance(){if(this._contentRef&&this._contentRef.componentRef)return this._contentRef.componentRef.instance}get closed(){return this._closed.asObservable().pipe(x(this._hidden))}get dismissed(){return this._dismissed.asObservable().pipe(x(this._hidden))}get hidden(){return this._hidden.asObservable()}get shown(){return this._windowCmptRef.instance.shown.asObservable()}constructor(e,i,a,t){this._windowCmptRef=e,this._contentRef=i,this._backdropCmptRef=a,this._beforeDismiss=t,this._closed=new D,this._dismissed=new D,this._hidden=new D,e.instance.dismissEvent.subscribe(n=>{this.dismiss(n)}),this.result=new Promise((n,s)=>{this._resolve=n,this._reject=s}),this.result.then(null,()=>{})}close(e){this._windowCmptRef&&(this._closed.next(e),this._resolve(e),this._removeModalElements())}_dismiss(e){this._dismissed.next(e),this._reject(e),this._removeModalElements()}dismiss(e){if(this._windowCmptRef)if(!this._beforeDismiss)this._dismiss(e);else{let i=this._beforeDismiss();J0(i)?i.then(a=>{a!==!1&&this._dismiss(e)},()=>{}):i!==!1&&this._dismiss(e)}}_removeModalElements(){let e=this._windowCmptRef.instance.hide(),i=this._backdropCmptRef?this._backdropCmptRef.instance.hide():f2(void 0);e.subscribe(()=>{let{nativeElement:a}=this._windowCmptRef.location;a.parentNode.removeChild(a),this._windowCmptRef.destroy(),this._contentRef&&this._contentRef.viewRef&&this._contentRef.viewRef.destroy(),this._windowCmptRef=null,this._contentRef=null}),i.subscribe(()=>{if(this._backdropCmptRef){let{nativeElement:a}=this._backdropCmptRef.location;a.parentNode.removeChild(a),this._backdropCmptRef.destroy(),this._backdropCmptRef=null}}),T1(e,i).subscribe(()=>{this._hidden.next(),this._hidden.complete()})}},J2=function(c){return c[c.BACKDROP_CLICK=0]="BACKDROP_CLICK",c[c.ESC=1]="ESC",c}(J2||{}),l8=(()=>{let e=class e{constructor(){this._document=C(B1),this._elRef=C(g1),this._zone=C(k1),this._closed$=new D,this._elWithFocus=null,this.backdrop=!0,this.keyboard=!0,this.dismissEvent=new p2,this.shown=new D,this.hidden=new D}get fullscreenClass(){return this.fullscreen===!0?" modal-fullscreen":x4(this.fullscreen)?` modal-fullscreen-${this.fullscreen}-down`:""}dismiss(a){this.dismissEvent.emit(a)}ngOnInit(){this._elWithFocus=this._document.activeElement,this._zone.onStable.asObservable().pipe(v1(1)).subscribe(()=>{this._show()})}ngOnDestroy(){this._disableEventHandling()}hide(){let{nativeElement:a}=this._elRef,t={animation:this.animation,runningTransition:"stop"},n=r1(this._zone,a,()=>a.classList.remove("show"),t),s=r1(this._zone,this._dialogEl.nativeElement,()=>{},t),r=T1(n,s);return r.subscribe(()=>{this.hidden.next(),this.hidden.complete()}),this._disableEventHandling(),this._restoreFocus(),r}_show(){let a={animation:this.animation,runningTransition:"continue"},t=r1(this._zone,this._elRef.nativeElement,(s,r)=>{r&&w4(s),s.classList.add("show")},a),n=r1(this._zone,this._dialogEl.nativeElement,()=>{},a);T1(t,n).subscribe(()=>{this.shown.next(),this.shown.complete()}),this._enableEventHandling(),this._setFocus()}_enableEventHandling(){let{nativeElement:a}=this._elRef;this._zone.runOutsideAngular(()=>{E(a,"keydown").pipe(x(this._closed$),p1(n=>n.which===K2.Escape)).subscribe(n=>{this.keyboard?requestAnimationFrame(()=>{n.defaultPrevented||this._zone.run(()=>this.dismiss(J2.ESC))}):this.backdrop==="static"&&this._bumpBackdrop()});let t=!1;E(this._dialogEl.nativeElement,"mousedown").pipe(x(this._closed$),s3(()=>t=!1),n3(()=>E(a,"mouseup").pipe(x(this._closed$),v1(1))),p1(({target:n})=>a===n)).subscribe(()=>{t=!0}),E(a,"click").pipe(x(this._closed$)).subscribe(({target:n})=>{a===n&&(this.backdrop==="static"?this._bumpBackdrop():this.backdrop===!0&&!t&&this._zone.run(()=>this.dismiss(J2.BACKDROP_CLICK))),t=!1})})}_disableEventHandling(){this._closed$.next()}_setFocus(){let{nativeElement:a}=this._elRef;if(!a.contains(document.activeElement)){let t=a.querySelector("[ngbAutofocus]"),n=k4(a)[0];(t||n||a).focus()}}_restoreFocus(){let a=this._document.body,t=this._elWithFocus,n;t&&t.focus&&a.contains(t)?n=t:n=a,this._zone.runOutsideAngular(()=>{setTimeout(()=>n.focus()),this._elWithFocus=null})}_bumpBackdrop(){this.backdrop==="static"&&r1(this._zone,this._elRef.nativeElement,({classList:a})=>(a.add("modal-static"),()=>a.remove("modal-static")),{animation:this.animation,runningTransition:"continue"})}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=q({type:e,selectors:[["ngb-modal-window"]],viewQuery:function(t,n){if(t&1&&d3(q0,7),t&2){let s;h3(s=m3())&&(n._dialogEl=s.first)}},hostAttrs:["role","dialog","tabindex","-1"],hostVars:7,hostBindings:function(t,n){t&2&&(D1("aria-modal",!0)("aria-labelledby",n.ariaLabelledBy)("aria-describedby",n.ariaDescribedBy),O1("modal d-block"+(n.windowClass?" "+n.windowClass:"")),R1("fade",n.animation))},inputs:{animation:"animation",ariaLabelledBy:"ariaLabelledBy",ariaDescribedBy:"ariaDescribedBy",backdrop:"backdrop",centered:"centered",fullscreen:"fullscreen",keyboard:"keyboard",scrollable:"scrollable",size:"size",windowClass:"windowClass",modalDialogClass:"modalDialogClass"},outputs:{dismissEvent:"dismiss"},standalone:!0,features:[o1],ngContentSelectors:$0,decls:4,vars:2,consts:[["role","document"],["dialog",""],[1,"modal-content"]],template:function(t,n){t&1&&(E1(),I(0,"div",0,1)(2,"div",2),P1(3),R()()),t&2&&O1("modal-dialog"+(n.size?" modal-"+n.size:"")+(n.centered?" modal-dialog-centered":"")+n.fullscreenClass+(n.scrollable?" modal-dialog-scrollable":"")+(n.modalDialogClass?" "+n.modalDialogClass:""))},styles:[`ngb-modal-window .component-host-scrollable{display:flex;flex-direction:column;overflow:hidden}
`],encapsulation:2});let c=e;return c})(),f8=(()=>{let e=class e{constructor(){this._applicationRef=C(u3),this._injector=C(A1),this._environmentInjector=C(u2),this._document=C(B1),this._scrollBar=C(n8),this._activeWindowCmptHasChanged=new D,this._ariaHiddenValues=new Map,this._scrollBarRestoreFn=null,this._modalRefs=[],this._windowCmpts=[],this._activeInstances=new p2;let a=C(k1);this._activeWindowCmptHasChanged.subscribe(()=>{if(this._windowCmpts.length){let t=this._windowCmpts[this._windowCmpts.length-1];c8(a,t.location.nativeElement,this._activeWindowCmptHasChanged),this._revertAriaHidden(),this._setAriaHidden(t.location.nativeElement)}})}_restoreScrollBar(){let a=this._scrollBarRestoreFn;a&&(this._scrollBarRestoreFn=null,a())}_hideScrollBar(){this._scrollBarRestoreFn||(this._scrollBarRestoreFn=this._scrollBar.hide())}open(a,t,n){let s=n.container instanceof HTMLElement?n.container:Y2(n.container)?this._document.querySelector(n.container):this._document.body;if(!s)throw new Error(`The specified modal container "${n.container||"body"}" was not found in the DOM.`);this._hideScrollBar();let r=new r2;a=n.injector||a;let o=a.get(u2,null)||this._environmentInjector,f=this._getContentRef(a,o,t,r,n),l=n.backdrop!==!1?this._attachBackdrop(s):void 0,d=this._attachWindowComponent(s,f.nodes),u=new Q2(d,f,l,n.beforeDismiss);return this._registerModalRef(u),this._registerWindowCmpt(d),u.hidden.pipe(v1(1)).subscribe(()=>Promise.resolve(!0).then(()=>{this._modalRefs.length||(this._document.body.classList.remove("modal-open"),this._restoreScrollBar(),this._revertAriaHidden())})),r.close=p=>{u.close(p)},r.dismiss=p=>{u.dismiss(p)},r.update=p=>{u.update(p)},u.update(n),this._modalRefs.length===1&&this._document.body.classList.add("modal-open"),l&&l.instance&&l.changeDetectorRef.detectChanges(),d.changeDetectorRef.detectChanges(),u}get activeInstances(){return this._activeInstances}dismissAll(a){this._modalRefs.forEach(t=>t.dismiss(a))}hasOpenModals(){return this._modalRefs.length>0}_attachBackdrop(a){let t=F1(s8,{environmentInjector:this._applicationRef.injector,elementInjector:this._injector});return this._applicationRef.attachView(t.hostView),a.appendChild(t.location.nativeElement),t}_attachWindowComponent(a,t){let n=F1(l8,{environmentInjector:this._applicationRef.injector,elementInjector:this._injector,projectableNodes:t});return this._applicationRef.attachView(n.hostView),a.appendChild(n.location.nativeElement),n}_getContentRef(a,t,n,s,r){return n?n instanceof f3?this._createFromTemplateRef(n,s):x4(n)?this._createFromString(n):this._createFromComponent(a,t,n,s,r):new u1([])}_createFromTemplateRef(a,t){let n={$implicit:t,close(r){t.close(r)},dismiss(r){t.dismiss(r)}},s=a.createEmbeddedView(n);return this._applicationRef.attachView(s),new u1([s.rootNodes],s)}_createFromString(a){let t=this._document.createTextNode(`${a}`);return new u1([[t]])}_createFromComponent(a,t,n,s,r){let o=A1.create({providers:[{provide:r2,useValue:s}],parent:a}),f=F1(n,{environmentInjector:t,elementInjector:o}),l=f.location.nativeElement;return r.scrollable&&l.classList.add("component-host-scrollable"),this._applicationRef.attachView(f.hostView),new u1([[l]],f.hostView,f)}_setAriaHidden(a){let t=a.parentElement;t&&a!==this._document.body&&(Array.from(t.children).forEach(n=>{n!==a&&n.nodeName!=="SCRIPT"&&(this._ariaHiddenValues.set(n,n.getAttribute("aria-hidden")),n.setAttribute("aria-hidden","true"))}),this._setAriaHidden(t))}_revertAriaHidden(){this._ariaHiddenValues.forEach((a,t)=>{a?t.setAttribute("aria-hidden",a):t.removeAttribute("aria-hidden")}),this._ariaHiddenValues.clear()}_registerModalRef(a){let t=()=>{let n=this._modalRefs.indexOf(a);n>-1&&(this._modalRefs.splice(n,1),this._activeInstances.emit(this._modalRefs))};this._modalRefs.push(a),this._activeInstances.emit(this._modalRefs),a.result.then(t,t)}_registerWindowCmpt(a){this._windowCmpts.push(a),this._activeWindowCmptHasChanged.next(),a.onDestroy(()=>{let t=this._windowCmpts.indexOf(a);t>-1&&(this._windowCmpts.splice(t,1),this._activeWindowCmptHasChanged.next())})}};e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=P({token:e,factory:e.\u0275fac,providedIn:"root"});let c=e;return c})(),h8=(()=>{let e=class e{constructor(){this._injector=C(A1),this._modalStack=C(f8),this._config=C(i8)}open(a,t={}){let n=l2(Z2(l2({},this._config),{animation:this._config.animation}),t);return this._modalStack.open(this._injector,a,n)}get activeInstances(){return this._modalStack.activeInstances}dismissAll(a){this._modalStack.dismissAll(a)}hasOpenModals(){return this._modalStack.hasOpenModals()}};e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=P({token:e,factory:e.\u0275fac,providedIn:"root"});let c=e;return c})(),O4=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=H({type:e}),e.\u0275inj=v({providers:[h8]});let c=e;return c})();var E4=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=H({type:e}),e.\u0275inj=v({});let c=e;return c})();var P4=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=H({type:e}),e.\u0275inj=v({});let c=e;return c})();var F4=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=H({type:e}),e.\u0275inj=v({});let c=e;return c})();var B4=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=H({type:e}),e.\u0275inj=v({});let c=e;return c})();var I4=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=H({type:e}),e.\u0275inj=v({});let c=e;return c})();var G4=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=H({type:e}),e.\u0275inj=v({});let c=e;return c})();var U4=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=H({type:e}),e.\u0275inj=v({});let c=e;return c})();var W4=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=H({type:e}),e.\u0275inj=v({});let c=e;return c})();var j4=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=H({type:e}),e.\u0275inj=v({});let c=e;return c})();var X5=new r3("live announcer delay",{providedIn:"root",factory:()=>100});var $4=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=H({type:e}),e.\u0275inj=v({});let c=e;return c})();var q4=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=H({type:e}),e.\u0275inj=v({});let c=e;return c})(),d8=[S4,N4,T4,A4,D4,R4,O4,E4,q4,P4,F4,B4,I4,G4,U4,W4,j4,$4],Y4=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=H({type:e}),e.\u0275inj=v({imports:[d8,S4,N4,T4,A4,D4,R4,O4,E4,q4,P4,F4,B4,I4,G4,U4,W4,j4,$4]});let c=e;return c})();var Q4=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=H({type:e,bootstrap:[n2]}),e.\u0275inj=v({providers:[H3()],imports:[p3,z3,L4,Y4]});let c=e;return c})();var m8=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=H({type:e,bootstrap:[n2]}),e.\u0275inj=v({imports:[Q4,g3]});let c=e;return c})();export{m8 as a};
