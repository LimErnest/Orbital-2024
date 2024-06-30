"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[563],{2249:function(e,t,n){n.d(t,{M:function(){return r}});function r(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(null==e||e(r),!1===n||!r.defaultPrevented)return null==t?void 0:t(r)}}},9833:function(e,t,n){let r,o;n.d(t,{aU:function(){return tp},$j:function(){return tm},VY:function(){return tv},dk:function(){return tg},aV:function(){return tf},h_:function(){return td},fC:function(){return tc},Dx:function(){return th},xz:function(){return ts}});var u,a,i,l,c,s,d,f=n(3686),v=n(7058),p=n(8110),m=n(2332),h=n(2249),g=n(9895),E=n(9922),y=n(6720),b=n(9589);let w="dismissableLayer.update",C=(0,v.createContext)({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),D=(0,v.forwardRef)((e,t)=>{var n;let{disableOutsidePointerEvents:o=!1,onEscapeKeyDown:u,onPointerDownOutside:a,onFocusOutside:i,onInteractOutside:l,onDismiss:c,...s}=e,d=(0,v.useContext)(C),[p,g]=(0,v.useState)(null),E=null!==(n=null==p?void 0:p.ownerDocument)&&void 0!==n?n:null==globalThis?void 0:globalThis.document,[,D]=(0,v.useState)({}),A=(0,m.e)(t,e=>g(e)),N=Array.from(d.layers),[S]=[...d.layersWithOutsidePointerEventsDisabled].slice(-1),T=N.indexOf(S),_=p?N.indexOf(p):-1,M=d.layersWithOutsidePointerEventsDisabled.size>0,P=_>=T,L=function(e,t=null==globalThis?void 0:globalThis.document){let n=(0,b.W)(e),r=(0,v.useRef)(!1),o=(0,v.useRef)(()=>{});return(0,v.useEffect)(()=>{let e=e=>{if(e.target&&!r.current){let r={originalEvent:e};function u(){O("dismissableLayer.pointerDownOutside",n,r,{discrete:!0})}"touch"===e.pointerType?(t.removeEventListener("click",o.current),o.current=u,t.addEventListener("click",o.current,{once:!0})):u()}else t.removeEventListener("click",o.current);r.current=!1},u=window.setTimeout(()=>{t.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(u),t.removeEventListener("pointerdown",e),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}(e=>{let t=e.target,n=[...d.branches].some(e=>e.contains(t));!P||n||(null==a||a(e),null==l||l(e),e.defaultPrevented||null==c||c())},E),k=function(e,t=null==globalThis?void 0:globalThis.document){let n=(0,b.W)(e),r=(0,v.useRef)(!1);return(0,v.useEffect)(()=>{let e=e=>{e.target&&!r.current&&O("dismissableLayer.focusOutside",n,{originalEvent:e},{discrete:!1})};return t.addEventListener("focusin",e),()=>t.removeEventListener("focusin",e)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}(e=>{let t=e.target;[...d.branches].some(e=>e.contains(t))||(null==i||i(e),null==l||l(e),e.defaultPrevented||null==c||c())},E);return!function(e,t=null==globalThis?void 0:globalThis.document){let n=(0,b.W)(e);(0,v.useEffect)(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e),()=>t.removeEventListener("keydown",e)},[n,t])}(e=>{_!==d.layers.size-1||(null==u||u(e),!e.defaultPrevented&&c&&(e.preventDefault(),c()))},E),(0,v.useEffect)(()=>{if(p)return o&&(0===d.layersWithOutsidePointerEventsDisabled.size&&(r=E.body.style.pointerEvents,E.body.style.pointerEvents="none"),d.layersWithOutsidePointerEventsDisabled.add(p)),d.layers.add(p),R(),()=>{o&&1===d.layersWithOutsidePointerEventsDisabled.size&&(E.body.style.pointerEvents=r)}},[p,E,o,d]),(0,v.useEffect)(()=>()=>{p&&(d.layers.delete(p),d.layersWithOutsidePointerEventsDisabled.delete(p),R())},[p,d]),(0,v.useEffect)(()=>{let e=()=>D({});return document.addEventListener(w,e),()=>document.removeEventListener(w,e)},[]),(0,v.createElement)(y.WV.div,(0,f.Z)({},s,{ref:A,style:{pointerEvents:M?P?"auto":"none":void 0,...e.style},onFocusCapture:(0,h.M)(e.onFocusCapture,k.onFocusCapture),onBlurCapture:(0,h.M)(e.onBlurCapture,k.onBlurCapture),onPointerDownCapture:(0,h.M)(e.onPointerDownCapture,L.onPointerDownCapture)}))});function R(){let e=new CustomEvent(w);document.dispatchEvent(e)}function O(e,t,n,{discrete:r}){let o=n.originalEvent.target,u=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?(0,y.jH)(o,u):o.dispatchEvent(u)}let A="focusScope.autoFocusOnMount",N="focusScope.autoFocusOnUnmount",S={bubbles:!1,cancelable:!0},T=(0,v.forwardRef)((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:u,...a}=e,[i,l]=(0,v.useState)(null),c=(0,b.W)(o),s=(0,b.W)(u),d=(0,v.useRef)(null),p=(0,m.e)(t,e=>l(e)),h=(0,v.useRef)({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;(0,v.useEffect)(()=>{if(r){function e(e){if(h.paused||!i)return;let t=e.target;i.contains(t)?d.current=t:P(d.current,{select:!0})}function t(e){if(h.paused||!i)return;let t=e.relatedTarget;null===t||i.contains(t)||P(d.current,{select:!0})}document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&P(i)});return i&&n.observe(i,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[r,i,h.paused]),(0,v.useEffect)(()=>{if(i){L.add(h);let e=document.activeElement;if(!i.contains(e)){let t=new CustomEvent(A,S);i.addEventListener(A,c),i.dispatchEvent(t),t.defaultPrevented||(function(e,{select:t=!1}={}){let n=document.activeElement;for(let r of e)if(P(r,{select:t}),document.activeElement!==n)return}(_(i).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&P(i))}return()=>{i.removeEventListener(A,c),setTimeout(()=>{let t=new CustomEvent(N,S);i.addEventListener(N,s),i.dispatchEvent(t),t.defaultPrevented||P(null!=e?e:document.body,{select:!0}),i.removeEventListener(N,s),L.remove(h)},0)}}},[i,c,s,h]);let g=(0,v.useCallback)(e=>{if(!n&&!r||h.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){let t=e.currentTarget,[r,u]=function(e){let t=_(e);return[M(t,e),M(t.reverse(),e)]}(t);r&&u?e.shiftKey||o!==u?e.shiftKey&&o===r&&(e.preventDefault(),n&&P(u,{select:!0})):(e.preventDefault(),n&&P(r,{select:!0})):o===t&&e.preventDefault()}},[n,r,h.paused]);return(0,v.createElement)(y.WV.div,(0,f.Z)({tabIndex:-1},a,{ref:p,onKeyDown:g}))});function _(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function M(e,t){for(let n of e)if(!function(e,{upTo:t}){if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===t||e!==t);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function P(e,{select:t=!1}={}){if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}let L=(o=[],{add(e){let t=o[0];e!==t&&(null==t||t.pause()),(o=k(o,e)).unshift(e)},remove(e){var t;null===(t=(o=k(o,e))[0])||void 0===t||t.resume()}});function k(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}var I=n(1443);let W=(0,v.forwardRef)((e,t)=>{var n;let{container:r=null==globalThis?void 0:null===(n=globalThis.document)||void 0===n?void 0:n.body,...o}=e;return r?I.createPortal((0,v.createElement)(y.WV.div,(0,f.Z)({},o,{ref:t})),r):null});var x=n(4865);let F=0;function Z(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}var U=function(){return(U=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function j(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}"function"==typeof SuppressedError&&SuppressedError;var B="right-scroll-bar-position",V="width-before-scroll-bar";function z(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}var K="undefined"!=typeof window?v.useLayoutEffect:v.useEffect,$=new WeakMap,Y=(void 0===u&&(u={}),(void 0===a&&(a=function(e){return e}),i=[],l=!1,c={read:function(){if(l)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return i.length?i[i.length-1]:null},useMedium:function(e){var t=a(e,l);return i.push(t),function(){i=i.filter(function(e){return e!==t})}},assignSyncMedium:function(e){for(l=!0;i.length;){var t=i;i=[],t.forEach(e)}i={push:function(t){return e(t)},filter:function(){return i}}},assignMedium:function(e){l=!0;var t=[];if(i.length){var n=i;i=[],n.forEach(e),t=i}var r=function(){var n=t;t=[],n.forEach(e)},o=function(){return Promise.resolve().then(r)};o(),i={push:function(e){t.push(e),o()},filter:function(e){return t=t.filter(e),i}}}}).options=U({async:!0,ssr:!1},u),c),X=function(){},H=v.forwardRef(function(e,t){var n,r,o,u,a=v.useRef(null),i=v.useState({onScrollCapture:X,onWheelCapture:X,onTouchMoveCapture:X}),l=i[0],c=i[1],s=e.forwardProps,d=e.children,f=e.className,p=e.removeScrollBar,m=e.enabled,h=e.shards,g=e.sideCar,E=e.noIsolation,y=e.inert,b=e.allowPinchZoom,w=e.as,C=j(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),D=(n=[a,t],r=function(e){return n.forEach(function(t){return z(t,e)})},(o=(0,v.useState)(function(){return{value:null,callback:r,facade:{get current(){return o.value},set current(value){var e=o.value;e!==value&&(o.value=value,o.callback(value,e))}}}})[0]).callback=r,u=o.facade,K(function(){var e=$.get(u);if(e){var t=new Set(e),r=new Set(n),o=u.current;t.forEach(function(e){r.has(e)||z(e,null)}),r.forEach(function(e){t.has(e)||z(e,o)})}$.set(u,n)},[n]),u),R=U(U({},C),l);return v.createElement(v.Fragment,null,m&&v.createElement(g,{sideCar:Y,removeScrollBar:p,shards:h,noIsolation:E,inert:y,setCallbacks:c,allowPinchZoom:!!b,lockRef:a}),s?v.cloneElement(v.Children.only(d),U(U({},R),{ref:D})):v.createElement(void 0===w?"div":w,U({},R,{className:f,ref:D}),d))});H.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},H.classNames={fullWidth:V,zeroRight:B};var q=function(e){var t=e.sideCar,n=j(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw Error("Sidecar medium not found");return v.createElement(r,U({},n))};q.isSideCarExport=!0;var G=function(){var e=0,t=null;return{add:function(r){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=d||n.nc;return t&&e.setAttribute("nonce",t),e}())){var o,u;(o=t).styleSheet?o.styleSheet.cssText=r:o.appendChild(document.createTextNode(r)),u=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(u)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},J=function(){var e=G();return function(t,n){v.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},Q=function(){var e=J();return function(t){return e(t.styles,t.dynamic),null}},ee={left:0,top:0,right:0,gap:0},et=function(e){return parseInt(e||"",10)||0},en=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[et(n),et(r),et(o)]},er=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return ee;var t=en(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},eo=Q(),eu="data-scroll-locked",ea=function(e,t,n,r){var o=e.left,u=e.top,a=e.right,i=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(i,"px ").concat(r,";\n  }\n  body[").concat(eu,"] {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(u,"px;\n    padding-right: ").concat(a,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(i,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(i,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(B," {\n    right: ").concat(i,"px ").concat(r,";\n  }\n  \n  .").concat(V," {\n    margin-right: ").concat(i,"px ").concat(r,";\n  }\n  \n  .").concat(B," .").concat(B," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(V," .").concat(V," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body[").concat(eu,"] {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(i,"px;\n  }\n")},ei=function(){var e=parseInt(document.body.getAttribute(eu)||"0",10);return isFinite(e)?e:0},el=function(){v.useEffect(function(){return document.body.setAttribute(eu,(ei()+1).toString()),function(){var e=ei()-1;e<=0?document.body.removeAttribute(eu):document.body.setAttribute(eu,e.toString())}},[])},ec=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=void 0===r?"margin":r;el();var u=v.useMemo(function(){return er(o)},[o]);return v.createElement(eo,{styles:ea(u,!t,o,n?"":"!important")})},es=!1;if("undefined"!=typeof window)try{var ed=Object.defineProperty({},"passive",{get:function(){return es=!0,!0}});window.addEventListener("test",ed,ed),window.removeEventListener("test",ed,ed)}catch(e){es=!1}var ef=!!es&&{passive:!1},ev=function(e,t){var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},ep=function(e,t){var n=t;do{if("undefined"!=typeof ShadowRoot&&n instanceof ShadowRoot&&(n=n.host),em(e,n)){var r=eh(e,n);if(r[1]>r[2])return!0}n=n.parentNode}while(n&&n!==document.body);return!1},em=function(e,t){return"v"===e?ev(t,"overflowY"):ev(t,"overflowX")},eh=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},eg=function(e,t,n,r,o){var u,a=(u=window.getComputedStyle(t).direction,"h"===e&&"rtl"===u?-1:1),i=a*r,l=n.target,c=t.contains(l),s=!1,d=i>0,f=0,v=0;do{var p=eh(e,l),m=p[0],h=p[1]-p[2]-a*m;(m||h)&&em(e,l)&&(f+=h,v+=m),l=l.parentNode}while(!c&&l!==document.body||c&&(t.contains(l)||t===l));return d&&(o&&0===f||!o&&i>f)?s=!0:!d&&(o&&0===v||!o&&-i>v)&&(s=!0),s},eE=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},ey=function(e){return[e.deltaX,e.deltaY]},eb=function(e){return e&&"current"in e?e.current:e},ew=0,eC=[],eD=(s=function(e){var t=v.useRef([]),n=v.useRef([0,0]),r=v.useRef(),o=v.useState(ew++)[0],u=v.useState(function(){return Q()})[0],a=v.useRef(e);v.useEffect(function(){a.current=e},[e]),v.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var t=(function(e,t,n){if(n||2==arguments.length)for(var r,o=0,u=t.length;o<u;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))})([e.lockRef.current],(e.shards||[]).map(eb),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var i=v.useCallback(function(e,t){if("touches"in e&&2===e.touches.length)return!a.current.allowPinchZoom;var o,u=eE(e),i=n.current,l="deltaX"in e?e.deltaX:i[0]-u[0],c="deltaY"in e?e.deltaY:i[1]-u[1],s=e.target,d=Math.abs(l)>Math.abs(c)?"h":"v";if("touches"in e&&"h"===d&&"range"===s.type)return!1;var f=ep(d,s);if(!f)return!0;if(f?o=d:(o="v"===d?"h":"v",f=ep(d,s)),!f)return!1;if(!r.current&&"changedTouches"in e&&(l||c)&&(r.current=o),!o)return!0;var v=r.current||o;return eg(v,t,e,"h"===v?l:c,!0)},[]),l=v.useCallback(function(e){if(eC.length&&eC[eC.length-1]===u){var n="deltaY"in e?ey(e):eE(e),r=t.current.filter(function(t){var r;return t.name===e.type&&t.target===e.target&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(a.current.shards||[]).map(eb).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?i(e,o[0]):!a.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),c=v.useCallback(function(e,n,r,o){var u={name:e,delta:n,target:r,should:o};t.current.push(u),setTimeout(function(){t.current=t.current.filter(function(e){return e!==u})},1)},[]),s=v.useCallback(function(e){n.current=eE(e),r.current=void 0},[]),d=v.useCallback(function(t){c(t.type,ey(t),t.target,i(t,e.lockRef.current))},[]),f=v.useCallback(function(t){c(t.type,eE(t),t.target,i(t,e.lockRef.current))},[]);v.useEffect(function(){return eC.push(u),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:f}),document.addEventListener("wheel",l,ef),document.addEventListener("touchmove",l,ef),document.addEventListener("touchstart",s,ef),function(){eC=eC.filter(function(e){return e!==u}),document.removeEventListener("wheel",l,ef),document.removeEventListener("touchmove",l,ef),document.removeEventListener("touchstart",s,ef)}},[]);var p=e.removeScrollBar,m=e.inert;return v.createElement(v.Fragment,null,m?v.createElement(u,{styles:"\n  .block-interactivity-".concat(o," {pointer-events: none;}\n  .allow-interactivity-").concat(o," {pointer-events: all;}\n")}):null,p?v.createElement(ec,{gapMode:"margin"}):null)},Y.useMedium(s),q),eR=v.forwardRef(function(e,t){return v.createElement(H,U({},e,{ref:t,sideCar:eD}))});eR.classNames=H.classNames;var eO=new WeakMap,eA=new WeakMap,eN={},eS=0,eT=function(e){return e&&(e.host||eT(e.parentNode))},e_=function(e,t,n,r){var o=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=eT(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});eN[n]||(eN[n]=new WeakMap);var u=eN[n],a=[],i=new Set,l=new Set(o),c=function(e){!e||i.has(e)||(i.add(e),c(e.parentNode))};o.forEach(c);var s=function(e){!e||l.has(e)||Array.prototype.forEach.call(e.children,function(e){if(i.has(e))s(e);else try{var t=e.getAttribute(r),o=null!==t&&"false"!==t,l=(eO.get(e)||0)+1,c=(u.get(e)||0)+1;eO.set(e,l),u.set(e,c),a.push(e),1===l&&o&&eA.set(e,!0),1===c&&e.setAttribute(n,"true"),o||e.setAttribute(r,"true")}catch(t){console.error("aria-hidden: cannot operate on ",e,t)}})};return s(t),i.clear(),eS++,function(){a.forEach(function(e){var t=eO.get(e)-1,o=u.get(e)-1;eO.set(e,t),u.set(e,o),t||(eA.has(e)||e.removeAttribute(r),eA.delete(e)),o||e.removeAttribute(n)}),--eS||(eO=new WeakMap,eO=new WeakMap,eA=new WeakMap,eN={})}},eM=function(e,t,n){void 0===n&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=t||("undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),e_(r,o,n,"aria-hidden")):function(){return null}},eP=n(9419);let eL="Dialog",[ek,eI]=(0,p.b)(eL),[eW,ex]=ek(eL),eF=(0,v.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,o=ex("DialogTrigger",n),u=(0,m.e)(t,o.triggerRef);return(0,v.createElement)(y.WV.button,(0,f.Z)({type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":e0(o.open)},r,{ref:u,onClick:(0,h.M)(e.onClick,o.onOpenToggle)}))}),eZ="DialogPortal",[eU,ej]=ek(eZ,{forceMount:void 0}),eB="DialogOverlay",eV=(0,v.forwardRef)((e,t)=>{let n=ej(eB,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,u=ex(eB,e.__scopeDialog);return u.modal?(0,v.createElement)(x.z,{present:r||u.open},(0,v.createElement)(ez,(0,f.Z)({},o,{ref:t}))):null}),ez=(0,v.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,o=ex(eB,n);return(0,v.createElement)(eR,{as:eP.g7,allowPinchZoom:!0,shards:[o.contentRef]},(0,v.createElement)(y.WV.div,(0,f.Z)({"data-state":e0(o.open)},r,{ref:t,style:{pointerEvents:"auto",...r.style}})))}),eK="DialogContent",e$=(0,v.forwardRef)((e,t)=>{let n=ej(eK,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,u=ex(eK,e.__scopeDialog);return(0,v.createElement)(x.z,{present:r||u.open},u.modal?(0,v.createElement)(eY,(0,f.Z)({},o,{ref:t})):(0,v.createElement)(eX,(0,f.Z)({},o,{ref:t})))}),eY=(0,v.forwardRef)((e,t)=>{let n=ex(eK,e.__scopeDialog),r=(0,v.useRef)(null),o=(0,m.e)(t,n.contentRef,r);return(0,v.useEffect)(()=>{let e=r.current;if(e)return eM(e)},[]),(0,v.createElement)(eH,(0,f.Z)({},e,{ref:o,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,h.M)(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:(0,h.M)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey;(2===t.button||n)&&e.preventDefault()}),onFocusOutside:(0,h.M)(e.onFocusOutside,e=>e.preventDefault())}))}),eX=(0,v.forwardRef)((e,t)=>{let n=ex(eK,e.__scopeDialog),r=(0,v.useRef)(!1),o=(0,v.useRef)(!1);return(0,v.createElement)(eH,(0,f.Z)({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var u,a;null===(u=e.onCloseAutoFocus)||void 0===u||u.call(e,t),t.defaultPrevented||(r.current||null===(a=n.triggerRef.current)||void 0===a||a.focus(),t.preventDefault()),r.current=!1,o.current=!1},onInteractOutside:t=>{var u,a;null===(u=e.onInteractOutside)||void 0===u||u.call(e,t),t.defaultPrevented||(r.current=!0,"pointerdown"!==t.detail.originalEvent.type||(o.current=!0));let i=t.target;(null===(a=n.triggerRef.current)||void 0===a?void 0:a.contains(i))&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&o.current&&t.preventDefault()}}))}),eH=(0,v.forwardRef)((e,t)=>{let{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:u,...a}=e,i=ex(eK,n),l=(0,v.useRef)(null),c=(0,m.e)(t,l);return(0,v.useEffect)(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:Z()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:Z()),F++,()=>{1===F&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),F--}},[]),(0,v.createElement)(v.Fragment,null,(0,v.createElement)(T,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:u},(0,v.createElement)(D,(0,f.Z)({role:"dialog",id:i.contentId,"aria-describedby":i.descriptionId,"aria-labelledby":i.titleId,"data-state":e0(i.open)},a,{ref:c,onDismiss:()=>i.onOpenChange(!1)}))),!1)}),eq="DialogTitle",eG=(0,v.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,o=ex(eq,n);return(0,v.createElement)(y.WV.h2,(0,f.Z)({id:o.titleId},r,{ref:t}))}),eJ=(0,v.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,o=ex("DialogDescription",n);return(0,v.createElement)(y.WV.p,(0,f.Z)({id:o.descriptionId},r,{ref:t}))}),eQ=(0,v.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,o=ex("DialogClose",n);return(0,v.createElement)(y.WV.button,(0,f.Z)({type:"button"},r,{ref:t,onClick:(0,h.M)(e.onClick,()=>o.onOpenChange(!1))}))});function e0(e){return e?"open":"closed"}let[e1,e2]=(0,p.k)("DialogTitleWarning",{contentName:eK,titleName:eq,docsSlug:"dialog"}),e9=e=>{let{__scopeDialog:t,children:n,open:r,defaultOpen:o,onOpenChange:u,modal:a=!0}=e,i=(0,v.useRef)(null),l=(0,v.useRef)(null),[c=!1,s]=(0,E.T)({prop:r,defaultProp:o,onChange:u});return(0,v.createElement)(eW,{scope:t,triggerRef:i,contentRef:l,contentId:(0,g.M)(),titleId:(0,g.M)(),descriptionId:(0,g.M)(),open:c,onOpenChange:s,onOpenToggle:(0,v.useCallback)(()=>s(e=>!e),[s]),modal:a},n)},e8=e=>{let{__scopeDialog:t,forceMount:n,children:r,container:o}=e,u=ex(eZ,t);return(0,v.createElement)(eU,{scope:t,forceMount:n},v.Children.map(r,e=>(0,v.createElement)(x.z,{present:n||u.open},(0,v.createElement)(W,{asChild:!0,container:o},e))))},[e5,e7]=(0,p.b)("AlertDialog",[eI]),e3=eI(),e4=(0,v.forwardRef)((e,t)=>{let{__scopeAlertDialog:n,...r}=e,o=e3(n);return(0,v.createElement)(eF,(0,f.Z)({},o,r,{ref:t}))}),e6=(0,v.forwardRef)((e,t)=>{let{__scopeAlertDialog:n,...r}=e,o=e3(n);return(0,v.createElement)(eV,(0,f.Z)({},o,r,{ref:t}))}),te="AlertDialogContent",[tt,tn]=e5(te),tr=(0,v.forwardRef)((e,t)=>{let{__scopeAlertDialog:n,children:r,...o}=e,u=e3(n),a=(0,v.useRef)(null),i=(0,m.e)(t,a),l=(0,v.useRef)(null);return(0,v.createElement)(e1,{contentName:te,titleName:to,docsSlug:"alert-dialog"},(0,v.createElement)(tt,{scope:n,cancelRef:l},(0,v.createElement)(e$,(0,f.Z)({role:"alertdialog"},u,o,{ref:i,onOpenAutoFocus:(0,h.M)(o.onOpenAutoFocus,e=>{var t;e.preventDefault(),null===(t=l.current)||void 0===t||t.focus({preventScroll:!0})}),onPointerDownOutside:e=>e.preventDefault(),onInteractOutside:e=>e.preventDefault()}),(0,v.createElement)(eP.A4,null,r),!1)))}),to="AlertDialogTitle",tu=(0,v.forwardRef)((e,t)=>{let{__scopeAlertDialog:n,...r}=e,o=e3(n);return(0,v.createElement)(eG,(0,f.Z)({},o,r,{ref:t}))}),ta=(0,v.forwardRef)((e,t)=>{let{__scopeAlertDialog:n,...r}=e,o=e3(n);return(0,v.createElement)(eJ,(0,f.Z)({},o,r,{ref:t}))}),ti=(0,v.forwardRef)((e,t)=>{let{__scopeAlertDialog:n,...r}=e,o=e3(n);return(0,v.createElement)(eQ,(0,f.Z)({},o,r,{ref:t}))}),tl=(0,v.forwardRef)((e,t)=>{let{__scopeAlertDialog:n,...r}=e,{cancelRef:o}=tn("AlertDialogCancel",n),u=e3(n),a=(0,m.e)(t,o);return(0,v.createElement)(eQ,(0,f.Z)({},u,r,{ref:a}))}),tc=e=>{let{__scopeAlertDialog:t,...n}=e,r=e3(t);return(0,v.createElement)(e9,(0,f.Z)({},r,n,{modal:!0}))},ts=e4,td=e=>{let{__scopeAlertDialog:t,...n}=e,r=e3(t);return(0,v.createElement)(e8,(0,f.Z)({},r,n))},tf=e6,tv=tr,tp=ti,tm=tl,th=tu,tg=ta},8110:function(e,t,n){n.d(t,{b:function(){return u},k:function(){return o}});var r=n(7058);function o(e,t){let n=(0,r.createContext)(t);function o(e){let{children:t,...o}=e,u=(0,r.useMemo)(()=>o,Object.values(o));return(0,r.createElement)(n.Provider,{value:u},t)}return o.displayName=e+"Provider",[o,function(o){let u=(0,r.useContext)(n);if(u)return u;if(void 0!==t)return t;throw Error(`\`${o}\` must be used within \`${e}\``)}]}function u(e,t=[]){let n=[],o=()=>{let t=n.map(e=>(0,r.createContext)(e));return function(n){let o=(null==n?void 0:n[e])||t;return(0,r.useMemo)(()=>({[`__scope${e}`]:{...n,[e]:o}}),[n,o])}};return o.scopeName=e,[function(t,o){let u=(0,r.createContext)(o),a=n.length;function i(t){let{scope:n,children:o,...i}=t,l=(null==n?void 0:n[e][a])||u,c=(0,r.useMemo)(()=>i,Object.values(i));return(0,r.createElement)(l.Provider,{value:c},o)}return n=[...n,o],i.displayName=t+"Provider",[i,function(n,i){let l=(null==i?void 0:i[e][a])||u,c=(0,r.useContext)(l);if(c)return c;if(void 0!==o)return o;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e)[`__scope${r}`];return{...t,...o}},{});return(0,r.useMemo)(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return n.scopeName=t.scopeName,n}(o,...t)]}},9895:function(e,t,n){n.d(t,{M:function(){return l}});var r,o=n(7058),u=n(9752);let a=(r||(r=n.t(o,2)))["useId".toString()]||(()=>void 0),i=0;function l(e){let[t,n]=o.useState(a());return(0,u.b)(()=>{e||n(e=>null!=e?e:String(i++))},[e]),e||(t?`radix-${t}`:"")}},4025:function(e,t,n){n.d(t,{f:function(){return a}});var r=n(3686),o=n(7058),u=n(6720);let a=(0,o.forwardRef)((e,t)=>(0,o.createElement)(u.WV.label,(0,r.Z)({},e,{ref:t,onMouseDown:t=>{var n;null===(n=e.onMouseDown)||void 0===n||n.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault()}})))},4865:function(e,t,n){n.d(t,{z:function(){return i}});var r=n(7058),o=n(1443),u=n(2332),a=n(9752);let i=e=>{let{present:t,children:n}=e,i=function(e){var t,n;let[u,i]=(0,r.useState)(),c=(0,r.useRef)({}),s=(0,r.useRef)(e),d=(0,r.useRef)("none"),[f,v]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},(0,r.useReducer)((e,t)=>{let r=n[e][t];return null!=r?r:e},t));return(0,r.useEffect)(()=>{let e=l(c.current);d.current="mounted"===f?e:"none"},[f]),(0,a.b)(()=>{let t=c.current,n=s.current;if(n!==e){let r=d.current,o=l(t);e?v("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?v("UNMOUNT"):n&&r!==o?v("ANIMATION_OUT"):v("UNMOUNT"),s.current=e}},[e,v]),(0,a.b)(()=>{if(u){let e=e=>{let t=l(c.current).includes(e.animationName);e.target===u&&t&&(0,o.flushSync)(()=>v("ANIMATION_END"))},t=e=>{e.target===u&&(d.current=l(c.current))};return u.addEventListener("animationstart",t),u.addEventListener("animationcancel",e),u.addEventListener("animationend",e),()=>{u.removeEventListener("animationstart",t),u.removeEventListener("animationcancel",e),u.removeEventListener("animationend",e)}}v("ANIMATION_END")},[u,v]),{isPresent:["mounted","unmountSuspended"].includes(f),ref:(0,r.useCallback)(e=>{e&&(c.current=getComputedStyle(e)),i(e)},[])}}(t),c="function"==typeof n?n({present:i.isPresent}):r.Children.only(n),s=(0,u.e)(i.ref,c.ref);return"function"==typeof n||i.isPresent?(0,r.cloneElement)(c,{ref:s}):null};function l(e){return(null==e?void 0:e.animationName)||"none"}i.displayName="Presence"},6720:function(e,t,n){n.d(t,{WV:function(){return i},jH:function(){return l}});var r=n(3686),o=n(7058),u=n(1443),a=n(9419);let i=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=(0,o.forwardRef)((e,n)=>{let{asChild:u,...i}=e,l=u?a.g7:t;return(0,o.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,o.createElement)(l,(0,r.Z)({},i,{ref:n}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function l(e,t){e&&(0,u.flushSync)(()=>e.dispatchEvent(t))}},9589:function(e,t,n){n.d(t,{W:function(){return o}});var r=n(7058);function o(e){let t=(0,r.useRef)(e);return(0,r.useEffect)(()=>{t.current=e}),(0,r.useMemo)(()=>(...e)=>{var n;return null===(n=t.current)||void 0===n?void 0:n.call(t,...e)},[])}},9922:function(e,t,n){n.d(t,{T:function(){return u}});var r=n(7058),o=n(9589);function u({prop:e,defaultProp:t,onChange:n=()=>{}}){let[u,a]=function({defaultProp:e,onChange:t}){let n=(0,r.useState)(e),[u]=n,a=(0,r.useRef)(u),i=(0,o.W)(t);return(0,r.useEffect)(()=>{a.current!==u&&(i(u),a.current=u)},[u,a,i]),n}({defaultProp:t,onChange:n}),i=void 0!==e,l=i?e:u,c=(0,o.W)(n);return[l,(0,r.useCallback)(t=>{if(i){let n="function"==typeof t?t(e):t;n!==e&&c(n)}else a(t)},[i,e,a,c])]}},9752:function(e,t,n){n.d(t,{b:function(){return o}});var r=n(7058);let o=(null==globalThis?void 0:globalThis.document)?r.useLayoutEffect:()=>{}}}]);