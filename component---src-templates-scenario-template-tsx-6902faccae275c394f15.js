(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{J1Es:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var r=n("q1tI"),a=n.n(r),i=n("tkFw"),o=n("x+Gp"),s=n("YECO"),u=(n("OnLr"),n("n3bB"));function c(e){var t=e.data,n=t.markdownRemark,r=n.frontmatter,c=n.html,l=Object(s.i)(t.scenarioImage);return a.a.createElement(o.a,{pageHeader:r.title,breadcrumb:{label:"Scenario Library",link:"/scenario-library"}},a.a.createElement(u.a,{hasNavbar:!0}),a.a.createElement(i.a,{title:r.title}),a.a.createElement("div",{className:"scen__container"},a.a.createElement(s.a,{className:"scen__image",image:l,alt:r.title+" Image"}),a.a.createElement("div",{className:"scen__content",dangerouslySetInnerHTML:{__html:"<div>"+c+"</div>"}})))}},OnLr:function(e,t,n){},YECO:function(e,t,n){"use strict";n.d(t,"a",(function(){return q})),n.d(t,"b",(function(){return z})),n.d(t,"c",(function(){return A})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return k})),n.d(t,"f",(function(){return s})),n.d(t,"g",(function(){return I})),n.d(t,"h",(function(){return x})),n.d(t,"i",(function(){return R})),n.d(t,"j",(function(){return S})),n.d(t,"k",(function(){return L}));n("E9XD");var r=n("q1tI"),a=n.n(r),i=n("17x9"),o=n.n(i);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(n=i[r])>=0||(a[n]=e[n]);return a}var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=Object.freeze(Object.defineProperties(["",""],{raw:{value:Object.freeze(["",""])}}));function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var f=function(){function e(){for(var t=this,n=arguments.length,r=Array(n),a=0;a<n;a++)r[a]=arguments[a];return d(this,e),this.tag=function(e){for(var n=arguments.length,r=Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return"function"==typeof e?t.interimTag.bind(t,e):"string"==typeof e?t.transformEndResult(e):(e=e.map(t.transformString.bind(t)),t.transformEndResult(e.reduce(t.processSubstitutions.bind(t,r))))},r.length>0&&Array.isArray(r[0])&&(r=r[0]),this.transformers=r.map((function(e){return"function"==typeof e?e():e})),this.tag}return c(e,[{key:"interimTag",value:function(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return this.tag(l,e.apply(void 0,[t].concat(r)))}},{key:"processSubstitutions",value:function(e,t,n){var r=this.transformSubstitution(e.shift(),t);return"".concat(t,r,n)}},{key:"transformString",value:function(e){return this.transformers.reduce((function(e,t){return t.onString?t.onString(e):e}),e)}},{key:"transformSubstitution",value:function(e,t){return this.transformers.reduce((function(e,n){return n.onSubstitution?n.onSubstitution(e,t):e}),e)}},{key:"transformEndResult",value:function(e){return this.transformers.reduce((function(e,t){return t.onEndResult?t.onEndResult(e):e}),e)}}]),e}(),g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{onEndResult:function(t){if(""===e)return t.trim();if("start"===(e=e.toLowerCase())||"left"===e)return t.replace(/^\s*/,"");if("end"===e||"right"===e)return t.replace(/\s*$/,"");throw new Error("Side not supported: "+e)}}};function p(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"initial";return{onEndResult:function(t){if("initial"===e){var n=t.match(/^[^\S\n]*(?=\S)/gm),r=n&&Math.min.apply(Math,p(n.map((function(e){return e.length}))));if(r){var a=new RegExp("^.{"+r+"}","gm");return t.replace(a,"")}return t}if("all"===e)return t.replace(/^[^\S\n]+/gm,"");throw new Error("Unknown type: "+e)}}},h=function(e,t){return{onEndResult:function(n){if(null==e||null==t)throw new Error("replaceResultTransformer requires at least 2 arguments.");return n.replace(e,t)}}},v=function(e,t){return{onSubstitution:function(n,r){if(null==e||null==t)throw new Error("replaceSubstitutionTransformer requires at least 2 arguments.");return null==n?n:n.toString().replace(e,t)}}},y={separator:"",conjunction:"",serial:!1},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y;return{onSubstitution:function(t,n){if(Array.isArray(t)){var r=t.length,a=e.separator,i=e.conjunction,o=e.serial,s=n.match(/(\n?[^\S\n]+)$/);if(t=t.join(s?a+s[1]:a+" "),i&&r>1){var u=t.lastIndexOf(a);t=t.slice(0,u)+(o?a:"")+" "+i+t.slice(u+1)}}return t}}},w=function(e){return{onSubstitution:function(t,n){if(null==e||"string"!=typeof e)throw new Error("You need to specify a string character to split by.");return"string"==typeof t&&t.includes(e)&&(t=t.split(e)),t}}},E=function(e){return null!=e&&!Number.isNaN(e)&&"boolean"!=typeof e};new f(b({separator:","}),m,g),new f(b({separator:",",conjunction:"and"}),m,g),new f(b({separator:",",conjunction:"or"}),m,g),new f(w("\n"),(function(){return{onSubstitution:function(e){return Array.isArray(e)?e.filter(E):E(e)?e:""}}}),b,m,g),new f(w("\n"),b,m,g,v(/&/g,"&amp;"),v(/</g,"&lt;"),v(/>/g,"&gt;"),v(/"/g,"&quot;"),v(/'/g,"&#x27;"),v(/`/g,"&#x60;")),new f(h(/(?:\n(?:\s*))+/g," "),g),new f(h(/(?:\n\s*)/g,""),g),new f(b({separator:","}),h(/(?:\s+)/g," "),g),new f(b({separator:",",conjunction:"or"}),h(/(?:\s+)/g," "),g),new f(b({separator:",",conjunction:"and"}),h(/(?:\s+)/g," "),g),new f(b,m,g),new f(b,h(/(?:\s+)/g," "),g),new f(m,g);new f(m("all"),g);var O=new Set,S=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function j(e){e&&O.add(e)}function k(e){return O.has(e)}var R=function(e){var t;return null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function L(e,t,n,r,a,i,o,u){return void 0===u&&(u={}),s({},n,{loading:r,shouldLoad:e,"data-main-image":"",style:s({},u,{opacity:t?1:0}),onLoad:function(e){if(!t){j(i);var n=e.currentTarget,r=new Image;r.src=n.currentSrc,r.decode?r.decode().catch((function(){})).then((function(){a(!0)})):a(!0)}},ref:o})}function x(e,t,n,r,a,i){var o={};return i&&(o.backgroundColor=i,"fixed"===n?(o.width=r,o.height=a,o.backgroundColor=i,o.position="relative"):("constrained"===n||"fullWidth"===n)&&(o.position="absolute",o.top=0,o.left=0,o.bottom=0,o.right=0)),s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},o)})}var I=function(e){var t=e.layout,n=e.width,i=e.height,o=e.children,s=null;return"fullWidth"===t&&(s=a.a.createElement("div",{"aria-hidden":!0,style:{paddingTop:i/n*100+"%"}})),"constrained"===t&&(s=a.a.createElement("div",{style:{maxWidth:n,display:"block"}},a.a.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+i+"' width='"+n+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}}))),a.a.createElement(r.Fragment,null,s,o,!1)},N=function(e){var t=e.as,i=void 0===t?"div":t,o=e.style,c=e.className,l=e.class,d=e.onStartLoad,f=e.image,g=e.onLoad,p=e.backgroundColor,m=u(e,["as","style","className","class","onStartLoad","image","onLoad","backgroundColor"]);if(!f)return null;l&&(c=l);var h=f.width,v=f.height,y=f.layout,b=f.images,w=Object(r.useRef)(),E=Object(r.useRef)(!1),O=Object(r.useRef)(null),k=Object(r.useRef)(null),R=Object(r.useRef)(),L=Object(r.useState)(S()),x=L[0],I=L[1],N=Object(r.useState)(!1),q=N[0],T=N[1],_=function(e,t,n){var r={position:"relative",overflow:"hidden"};return"fixed"===n?(r.width=e,r.height=t):"constrained"===n&&(r.display="inline-block"),{className:"gatsby-image-wrapper","data-gatsby-image-wrapper":"",style:r}}(h,v,y),C=_.style,A=_.className,z=u(_,["style","className"]);Object(r.useEffect)((function(){if(w.current){var e=w.current.querySelector("[data-gatsby-image-ssr]");if(S()&&e)return null==d||d({wasCached:!1}),void(e.complete?(null==g||g(),j(JSON.stringify(b))):e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g(),j(JSON.stringify(b))})));n.e(21).then(n.bind(null,"vJ1Z")).then((function(e){var t=(0,e.createIntersectionObserver)((function(){w.current&&(null==d||d({wasCached:!1}),I(!0))}));w.current&&(O.current=t(w))}))}return function(){O.current&&(O.current(w),E.current&&k.current&&k.current())}}),[]),Object(r.useEffect)((function(){if(w.current){var e=w.current.querySelector("[data-gatsby-image-ssr]");if(S()&&e&&!E.current)return void(E.current=!0);n.e(5).then(n.bind(null,"ELcI")).then((function(e){k.current=(0,e.lazyHydrate)(s({image:f,isLoading:x,isLoaded:q,toggleIsLoaded:function(){null==g||g(),T(!0)},ref:R},m),w,E)}))}}),[h,v,y,b,x,q,T,R,m]);var W=function(e,t,n){var r=null;return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+n/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+n+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(y,h,v);return a.a.createElement(i,Object.assign({},z,{style:s({},C,o,{backgroundColor:p}),className:A+(c?" "+c:""),ref:w,dangerouslySetInnerHTML:{__html:W},suppressHydrationWarning:!0}))},q=function(e){return a.a.createElement(N,Object.assign({},e))};q.displayName="GatsbyImage";var T,_=function(e){var t=e.src,n=e.srcSet,r=e.loading,i=e.alt,o=void 0===i?"":i,s=e.shouldLoad,c=e.innerRef,l=u(e,["src","srcSet","loading","alt","shouldLoad","innerRef"]);return a.a.createElement("img",Object.assign({},l,{decoding:"async",loading:r,src:s?t:void 0,"data-src":s?void 0:t,srcSet:s?n:void 0,"data-srcset":s?void 0:n,alt:o,ref:c}))},C=Object(r.forwardRef)((function(e,t){var n=e.fallback,r=e.sources,i=void 0===r?[]:r,o=e.shouldLoad,s=void 0===o||o,c=e.sizes,l=u(e,["fallback","sources","shouldLoad","sizes"]),d=a.a.createElement(_,Object.assign({sizes:c},l,n,{shouldLoad:s,innerRef:t}));return i.length?a.a.createElement("picture",null,i.map((function(e){var t=e.media,n=e.srcSet,r=e.type;return a.a.createElement("source",{key:t+"-"+r+"-"+n,type:r,media:t,srcSet:n,sizes:c})})),d):d}));_.propTypes={src:i.string.isRequired,alt:i.string.isRequired,sizes:i.string,srcSet:i.string,shouldLoad:i.bool},C.displayName="Picture",C.propTypes={alt:i.string.isRequired,shouldLoad:i.bool,fallback:Object(i.exact)({src:i.string.isRequired,srcSet:i.string,sizes:i.string}),sources:Object(i.arrayOf)(Object(i.oneOfType)([Object(i.exact)({media:i.string.isRequired,type:i.string,sizes:i.string,srcSet:i.string.isRequired}),Object(i.exact)({media:i.string,type:i.string.isRequired,sizes:i.string,srcSet:i.string.isRequired})]))};var A=function(e){var t=e.fallback,n=u(e,["fallback"]);return t?a.a.createElement(C,Object.assign({},n,{fallback:{src:t},"aria-hidden":!0,alt:""})):a.a.createElement("div",Object.assign({},n))};A.displayName="Placeholder",A.propTypes={fallback:i.string,sources:null==(T=C.propTypes)?void 0:T.sources,alt:function(e,t,n){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Validation failed."):null}};var z=Object(r.forwardRef)((function(e,t){return a.a.createElement(a.a.Fragment,null,a.a.createElement(C,Object.assign({ref:t},e)),a.a.createElement("noscript",null,a.a.createElement(C,Object.assign({},e,{shouldLoad:!0}))))}));z.displayName="MainImage",z.propTypes=C.propTypes;var W,H=function(e,t){return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?o.a.number.apply(o.a,[e,t].concat([].slice.call(arguments,2))):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},M=new Set(["fixed","fullWidth","constrained"]),J={src:o.a.string.isRequired,alt:o.a.string.isRequired,width:H,height:H,sizes:o.a.string,layout:function(e){if(void 0!==e.layout&&!M.has(e.layout.toLowerCase()))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "fixed". Valid values are "fixed", "fullWidth" or "constrained".')}},D=(W=q,function(e){var t=e.src,n=e.__imageData,r=e.__error,i=u(e,["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"]);return r&&console.warn(r),n?a.a.createElement(W,Object.assign({image:n},i)):(console.warn("Image not loaded",t),null)});D.displayName="StaticImage",D.propTypes=J},n3bB:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("q1tI"),a=n.n(r),i=function(e){var t=e.hasNavbar;return a.a.createElement("div",{className:t?"fixed-header-offset-with-navbar":"fixed-header-offset"})}}}]);
//# sourceMappingURL=component---src-templates-scenario-template-tsx-6902faccae275c394f15.js.map