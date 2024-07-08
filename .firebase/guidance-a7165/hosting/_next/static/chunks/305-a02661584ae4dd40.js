"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[305],{2249:function(e,t,r){r.d(t,{M:function(){return n}});function n(e,t,{checkForDefaultPrevented:r=!0}={}){return function(n){if(null==e||e(n),!1===r||!n.defaultPrevented)return null==t?void 0:t(n)}}},8110:function(e,t,r){r.d(t,{b:function(){return l},k:function(){return o}});var n=r(7058);function o(e,t){let r=(0,n.createContext)(t);function o(e){let{children:t,...o}=e,l=(0,n.useMemo)(()=>o,Object.values(o));return(0,n.createElement)(r.Provider,{value:l},t)}return o.displayName=e+"Provider",[o,function(o){let l=(0,n.useContext)(r);if(l)return l;if(void 0!==t)return t;throw Error(`\`${o}\` must be used within \`${e}\``)}]}function l(e,t=[]){let r=[],o=()=>{let t=r.map(e=>(0,n.createContext)(e));return function(r){let o=(null==r?void 0:r[e])||t;return(0,n.useMemo)(()=>({[`__scope${e}`]:{...r,[e]:o}}),[r,o])}};return o.scopeName=e,[function(t,o){let l=(0,n.createContext)(o),i=r.length;function a(t){let{scope:r,children:o,...a}=t,u=(null==r?void 0:r[e][i])||l,c=(0,n.useMemo)(()=>a,Object.values(a));return(0,n.createElement)(u.Provider,{value:c},o)}return r=[...r,o],a.displayName=t+"Provider",[a,function(r,a){let u=(null==a?void 0:a[e][i])||l,c=(0,n.useContext)(u);if(c)return c;if(void 0!==o)return o;throw Error(`\`${r}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=r.reduce((t,{useScope:r,scopeName:n})=>{let o=r(e)[`__scope${n}`];return{...t,...o}},{});return(0,n.useMemo)(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return r.scopeName=t.scopeName,r}(o,...t)]}},5879:function(e,t,r){r.d(t,{gm:function(){return l}});var n=r(7058);let o=(0,n.createContext)(void 0);function l(e){let t=(0,n.useContext)(o);return e||t||"ltr"}},4865:function(e,t,r){r.d(t,{z:function(){return a}});var n=r(7058),o=r(1443),l=r(2332),i=r(9752);let a=e=>{let{present:t,children:r}=e,a=function(e){var t,r;let[l,a]=(0,n.useState)(),c=(0,n.useRef)({}),s=(0,n.useRef)(e),d=(0,n.useRef)("none"),[f,p]=(t=e?"mounted":"unmounted",r={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},(0,n.useReducer)((e,t)=>{let n=r[e][t];return null!=n?n:e},t));return(0,n.useEffect)(()=>{let e=u(c.current);d.current="mounted"===f?e:"none"},[f]),(0,i.b)(()=>{let t=c.current,r=s.current;if(r!==e){let n=d.current,o=u(t);e?p("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?p("UNMOUNT"):r&&n!==o?p("ANIMATION_OUT"):p("UNMOUNT"),s.current=e}},[e,p]),(0,i.b)(()=>{if(l){let e=e=>{let t=u(c.current).includes(e.animationName);e.target===l&&t&&(0,o.flushSync)(()=>p("ANIMATION_END"))},t=e=>{e.target===l&&(d.current=u(c.current))};return l.addEventListener("animationstart",t),l.addEventListener("animationcancel",e),l.addEventListener("animationend",e),()=>{l.removeEventListener("animationstart",t),l.removeEventListener("animationcancel",e),l.removeEventListener("animationend",e)}}p("ANIMATION_END")},[l,p]),{isPresent:["mounted","unmountSuspended"].includes(f),ref:(0,n.useCallback)(e=>{e&&(c.current=getComputedStyle(e)),a(e)},[])}}(t),c="function"==typeof r?r({present:a.isPresent}):n.Children.only(r),s=(0,l.e)(a.ref,c.ref);return"function"==typeof r||a.isPresent?(0,n.cloneElement)(c,{ref:s}):null};function u(e){return(null==e?void 0:e.animationName)||"none"}a.displayName="Presence"},6720:function(e,t,r){r.d(t,{WV:function(){return a},jH:function(){return u}});var n=r(3686),o=r(7058),l=r(1443),i=r(9419);let a=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=(0,o.forwardRef)((e,r)=>{let{asChild:l,...a}=e,u=l?i.g7:t;return(0,o.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,o.createElement)(u,(0,n.Z)({},a,{ref:r}))});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function u(e,t){e&&(0,l.flushSync)(()=>e.dispatchEvent(t))}},5305:function(e,t,r){r.d(t,{Ns:function(){return B},fC:function(){return $},gb:function(){return S},q4:function(){return D},l_:function(){return F}});var n=r(3686),o=r(7058),l=r(6720),i=r(4865),a=r(8110),u=r(2332),c=r(9589),s=r(5879),d=r(9752),f=r(2249);let p="ScrollArea",[h,v]=(0,a.b)(p),[m,w]=h(p),b=(0,o.forwardRef)((e,t)=>{let{__scopeScrollArea:r,type:i="hover",dir:a,scrollHideDelay:c=600,...d}=e,[f,p]=(0,o.useState)(null),[h,v]=(0,o.useState)(null),[w,b]=(0,o.useState)(null),[E,g]=(0,o.useState)(null),[S,T]=(0,o.useState)(null),[C,y]=(0,o.useState)(0),[_,R]=(0,o.useState)(0),[N,P]=(0,o.useState)(!1),[L,A]=(0,o.useState)(!1),M=(0,u.e)(t,e=>p(e)),D=(0,s.gm)(a);return(0,o.createElement)(m,{scope:r,type:i,dir:D,scrollHideDelay:c,scrollArea:f,viewport:h,onViewportChange:v,content:w,onContentChange:b,scrollbarX:E,onScrollbarXChange:g,scrollbarXEnabled:N,onScrollbarXEnabledChange:P,scrollbarY:S,onScrollbarYChange:T,scrollbarYEnabled:L,onScrollbarYEnabledChange:A,onCornerWidthChange:y,onCornerHeightChange:R},(0,o.createElement)(l.WV.div,(0,n.Z)({dir:D},d,{ref:M,style:{position:"relative","--radix-scroll-area-corner-width":C+"px","--radix-scroll-area-corner-height":_+"px",...e.style}})))}),E=(0,o.forwardRef)((e,t)=>{let{__scopeScrollArea:r,children:i,...a}=e,c=w("ScrollAreaViewport",r),s=(0,o.useRef)(null),d=(0,u.e)(t,s,c.onViewportChange);return(0,o.createElement)(o.Fragment,null,(0,o.createElement)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"}}),(0,o.createElement)(l.WV.div,(0,n.Z)({"data-radix-scroll-area-viewport":""},a,{ref:d,style:{overflowX:c.scrollbarXEnabled?"scroll":"hidden",overflowY:c.scrollbarYEnabled?"scroll":"hidden",...e.style}}),(0,o.createElement)("div",{ref:c.onContentChange,style:{minWidth:"100%",display:"table"}},i)))}),g="ScrollAreaScrollbar",S=(0,o.forwardRef)((e,t)=>{let{forceMount:r,...l}=e,i=w(g,e.__scopeScrollArea),{onScrollbarXEnabledChange:a,onScrollbarYEnabledChange:u}=i,c="horizontal"===e.orientation;return(0,o.useEffect)(()=>(c?a(!0):u(!0),()=>{c?a(!1):u(!1)}),[c,a,u]),"hover"===i.type?(0,o.createElement)(T,(0,n.Z)({},l,{ref:t,forceMount:r})):"scroll"===i.type?(0,o.createElement)(C,(0,n.Z)({},l,{ref:t,forceMount:r})):"auto"===i.type?(0,o.createElement)(y,(0,n.Z)({},l,{ref:t,forceMount:r})):"always"===i.type?(0,o.createElement)(_,(0,n.Z)({},l,{ref:t})):null}),T=(0,o.forwardRef)((e,t)=>{let{forceMount:r,...l}=e,a=w(g,e.__scopeScrollArea),[u,c]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{let e=a.scrollArea,t=0;if(e){let r=()=>{window.clearTimeout(t),c(!0)},n=()=>{t=window.setTimeout(()=>c(!1),a.scrollHideDelay)};return e.addEventListener("pointerenter",r),e.addEventListener("pointerleave",n),()=>{window.clearTimeout(t),e.removeEventListener("pointerenter",r),e.removeEventListener("pointerleave",n)}}},[a.scrollArea,a.scrollHideDelay]),(0,o.createElement)(i.z,{present:r||u},(0,o.createElement)(y,(0,n.Z)({"data-state":u?"visible":"hidden"},l,{ref:t})))}),C=(0,o.forwardRef)((e,t)=>{var r,l;let{forceMount:a,...u}=e,c=w(g,e.__scopeScrollArea),s="horizontal"===e.orientation,d=k(()=>h("SCROLL_END"),100),[p,h]=(r="hidden",l={hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}},(0,o.useReducer)((e,t)=>{let r=l[e][t];return null!=r?r:e},r));return(0,o.useEffect)(()=>{if("idle"===p){let e=window.setTimeout(()=>h("HIDE"),c.scrollHideDelay);return()=>window.clearTimeout(e)}},[p,c.scrollHideDelay,h]),(0,o.useEffect)(()=>{let e=c.viewport,t=s?"scrollLeft":"scrollTop";if(e){let r=e[t],n=()=>{let n=e[t];r!==n&&(h("SCROLL"),d()),r=n};return e.addEventListener("scroll",n),()=>e.removeEventListener("scroll",n)}},[c.viewport,s,h,d]),(0,o.createElement)(i.z,{present:a||"hidden"!==p},(0,o.createElement)(_,(0,n.Z)({"data-state":"hidden"===p?"hidden":"visible"},u,{ref:t,onPointerEnter:(0,f.M)(e.onPointerEnter,()=>h("POINTER_ENTER")),onPointerLeave:(0,f.M)(e.onPointerLeave,()=>h("POINTER_LEAVE"))})))}),y=(0,o.forwardRef)((e,t)=>{let r=w(g,e.__scopeScrollArea),{forceMount:l,...a}=e,[u,c]=(0,o.useState)(!1),s="horizontal"===e.orientation,d=k(()=>{if(r.viewport){let e=r.viewport.offsetWidth<r.viewport.scrollWidth,t=r.viewport.offsetHeight<r.viewport.scrollHeight;c(s?e:t)}},10);return V(r.viewport,d),V(r.content,d),(0,o.createElement)(i.z,{present:l||u},(0,o.createElement)(_,(0,n.Z)({"data-state":u?"visible":"hidden"},a,{ref:t})))}),_=(0,o.forwardRef)((e,t)=>{let{orientation:r="vertical",...l}=e,i=w(g,e.__scopeScrollArea),a=(0,o.useRef)(null),u=(0,o.useRef)(0),[c,s]=(0,o.useState)({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),d=U(c.viewport,c.content),f={...l,sizes:c,onSizesChange:s,hasThumb:!!(d>0&&d<1),onThumbChange:e=>a.current=e,onThumbPointerUp:()=>u.current=0,onThumbPointerDown:e=>u.current=e};function p(e,t){return function(e,t,r,n="ltr"){let o=Z(r),l=t||o/2,i=r.scrollbar.paddingStart+l,a=r.scrollbar.size-r.scrollbar.paddingEnd-(o-l),u=r.content-r.viewport;return X([i,a],"ltr"===n?[0,u]:[-1*u,0])(e)}(e,u.current,c,t)}return"horizontal"===r?(0,o.createElement)(R,(0,n.Z)({},f,{ref:t,onThumbPositionChange:()=>{if(i.viewport&&a.current){let e=H(i.viewport.scrollLeft,c,i.dir);a.current.style.transform=`translate3d(${e}px, 0, 0)`}},onWheelScroll:e=>{i.viewport&&(i.viewport.scrollLeft=e)},onDragScroll:e=>{i.viewport&&(i.viewport.scrollLeft=p(e,i.dir))}})):"vertical"===r?(0,o.createElement)(N,(0,n.Z)({},f,{ref:t,onThumbPositionChange:()=>{if(i.viewport&&a.current){let e=H(i.viewport.scrollTop,c);a.current.style.transform=`translate3d(0, ${e}px, 0)`}},onWheelScroll:e=>{i.viewport&&(i.viewport.scrollTop=e)},onDragScroll:e=>{i.viewport&&(i.viewport.scrollTop=p(e))}})):null}),R=(0,o.forwardRef)((e,t)=>{let{sizes:r,onSizesChange:l,...i}=e,a=w(g,e.__scopeScrollArea),[c,s]=(0,o.useState)(),d=(0,o.useRef)(null),f=(0,u.e)(t,d,a.onScrollbarXChange);return(0,o.useEffect)(()=>{d.current&&s(getComputedStyle(d.current))},[d]),(0,o.createElement)(A,(0,n.Z)({"data-orientation":"horizontal"},i,{ref:f,sizes:r,style:{bottom:0,left:"rtl"===a.dir?"var(--radix-scroll-area-corner-width)":0,right:"ltr"===a.dir?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":Z(r)+"px",...e.style},onThumbPointerDown:t=>e.onThumbPointerDown(t.x),onDragScroll:t=>e.onDragScroll(t.x),onWheelScroll:(t,r)=>{if(a.viewport){let n=a.viewport.scrollLeft+t.deltaX;e.onWheelScroll(n),n>0&&n<r&&t.preventDefault()}},onResize:()=>{d.current&&a.viewport&&c&&l({content:a.viewport.scrollWidth,viewport:a.viewport.offsetWidth,scrollbar:{size:d.current.clientWidth,paddingStart:I(c.paddingLeft),paddingEnd:I(c.paddingRight)}})}}))}),N=(0,o.forwardRef)((e,t)=>{let{sizes:r,onSizesChange:l,...i}=e,a=w(g,e.__scopeScrollArea),[c,s]=(0,o.useState)(),d=(0,o.useRef)(null),f=(0,u.e)(t,d,a.onScrollbarYChange);return(0,o.useEffect)(()=>{d.current&&s(getComputedStyle(d.current))},[d]),(0,o.createElement)(A,(0,n.Z)({"data-orientation":"vertical"},i,{ref:f,sizes:r,style:{top:0,right:"ltr"===a.dir?0:void 0,left:"rtl"===a.dir?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":Z(r)+"px",...e.style},onThumbPointerDown:t=>e.onThumbPointerDown(t.y),onDragScroll:t=>e.onDragScroll(t.y),onWheelScroll:(t,r)=>{if(a.viewport){let n=a.viewport.scrollTop+t.deltaY;e.onWheelScroll(n),n>0&&n<r&&t.preventDefault()}},onResize:()=>{d.current&&a.viewport&&c&&l({content:a.viewport.scrollHeight,viewport:a.viewport.offsetHeight,scrollbar:{size:d.current.clientHeight,paddingStart:I(c.paddingTop),paddingEnd:I(c.paddingBottom)}})}}))}),[P,L]=h(g),A=(0,o.forwardRef)((e,t)=>{let{__scopeScrollArea:r,sizes:i,hasThumb:a,onThumbChange:s,onThumbPointerUp:d,onThumbPointerDown:p,onThumbPositionChange:h,onDragScroll:v,onWheelScroll:m,onResize:b,...E}=e,S=w(g,r),[T,C]=(0,o.useState)(null),y=(0,u.e)(t,e=>C(e)),_=(0,o.useRef)(null),R=(0,o.useRef)(""),N=S.viewport,L=i.content-i.viewport,A=(0,c.W)(m),M=(0,c.W)(h),D=k(b,10);function x(e){_.current&&v({x:e.clientX-_.current.left,y:e.clientY-_.current.top})}return(0,o.useEffect)(()=>{let e=e=>{let t=e.target;(null==T?void 0:T.contains(t))&&A(e,L)};return document.addEventListener("wheel",e,{passive:!1}),()=>document.removeEventListener("wheel",e,{passive:!1})},[N,T,L,A]),(0,o.useEffect)(M,[i,M]),V(T,D),V(S.content,D),(0,o.createElement)(P,{scope:r,scrollbar:T,hasThumb:a,onThumbChange:(0,c.W)(s),onThumbPointerUp:(0,c.W)(d),onThumbPositionChange:M,onThumbPointerDown:(0,c.W)(p)},(0,o.createElement)(l.WV.div,(0,n.Z)({},E,{ref:y,style:{position:"absolute",...E.style},onPointerDown:(0,f.M)(e.onPointerDown,e=>{0===e.button&&(e.target.setPointerCapture(e.pointerId),_.current=T.getBoundingClientRect(),R.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",S.viewport&&(S.viewport.style.scrollBehavior="auto"),x(e))}),onPointerMove:(0,f.M)(e.onPointerMove,x),onPointerUp:(0,f.M)(e.onPointerUp,e=>{let t=e.target;t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),document.body.style.webkitUserSelect=R.current,S.viewport&&(S.viewport.style.scrollBehavior=""),_.current=null})})))}),M="ScrollAreaThumb",D=(0,o.forwardRef)((e,t)=>{let{forceMount:r,...l}=e,a=L(M,e.__scopeScrollArea);return(0,o.createElement)(i.z,{present:r||a.hasThumb},(0,o.createElement)(x,(0,n.Z)({ref:t},l)))}),x=(0,o.forwardRef)((e,t)=>{let{__scopeScrollArea:r,style:i,...a}=e,c=w(M,r),s=L(M,r),{onThumbPositionChange:d}=s,p=(0,u.e)(t,e=>s.onThumbChange(e)),h=(0,o.useRef)(),v=k(()=>{h.current&&(h.current(),h.current=void 0)},100);return(0,o.useEffect)(()=>{let e=c.viewport;if(e){let t=()=>{if(v(),!h.current){let t=Y(e,d);h.current=t,d()}};return d(),e.addEventListener("scroll",t),()=>e.removeEventListener("scroll",t)}},[c.viewport,v,d]),(0,o.createElement)(l.WV.div,(0,n.Z)({"data-state":s.hasThumb?"visible":"hidden"},a,{ref:p,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...i},onPointerDownCapture:(0,f.M)(e.onPointerDownCapture,e=>{let t=e.target.getBoundingClientRect(),r=e.clientX-t.left,n=e.clientY-t.top;s.onThumbPointerDown({x:r,y:n})}),onPointerUp:(0,f.M)(e.onPointerUp,s.onThumbPointerUp)}))}),W="ScrollAreaCorner",z=(0,o.forwardRef)((e,t)=>{let r=w(W,e.__scopeScrollArea),l=!!(r.scrollbarX&&r.scrollbarY);return"scroll"!==r.type&&l?(0,o.createElement)(O,(0,n.Z)({},e,{ref:t})):null}),O=(0,o.forwardRef)((e,t)=>{let{__scopeScrollArea:r,...i}=e,a=w(W,r),[u,c]=(0,o.useState)(0),[s,d]=(0,o.useState)(0),f=!!(u&&s);return V(a.scrollbarX,()=>{var e;let t=(null===(e=a.scrollbarX)||void 0===e?void 0:e.offsetHeight)||0;a.onCornerHeightChange(t),d(t)}),V(a.scrollbarY,()=>{var e;let t=(null===(e=a.scrollbarY)||void 0===e?void 0:e.offsetWidth)||0;a.onCornerWidthChange(t),c(t)}),f?(0,o.createElement)(l.WV.div,(0,n.Z)({},i,{ref:t,style:{width:u,height:s,position:"absolute",right:"ltr"===a.dir?0:void 0,left:"rtl"===a.dir?0:void 0,bottom:0,...e.style}})):null});function I(e){return e?parseInt(e,10):0}function U(e,t){let r=e/t;return isNaN(r)?0:r}function Z(e){let t=U(e.viewport,e.content),r=e.scrollbar.paddingStart+e.scrollbar.paddingEnd;return Math.max((e.scrollbar.size-r)*t,18)}function H(e,t,r="ltr"){let n=Z(t),o=t.scrollbar.paddingStart+t.scrollbar.paddingEnd,l=t.scrollbar.size-o,i=t.content-t.viewport,a=function(e,[t,r]){return Math.min(r,Math.max(t,e))}(e,"ltr"===r?[0,i]:[-1*i,0]);return X([0,i],[0,l-n])(a)}function X(e,t){return r=>{if(e[0]===e[1]||t[0]===t[1])return t[0];let n=(t[1]-t[0])/(e[1]-e[0]);return t[0]+n*(r-e[0])}}let Y=(e,t=()=>{})=>{let r={left:e.scrollLeft,top:e.scrollTop},n=0;return!function o(){let l={left:e.scrollLeft,top:e.scrollTop},i=r.left!==l.left,a=r.top!==l.top;(i||a)&&t(),r=l,n=window.requestAnimationFrame(o)}(),()=>window.cancelAnimationFrame(n)};function k(e,t){let r=(0,c.W)(e),n=(0,o.useRef)(0);return(0,o.useEffect)(()=>()=>window.clearTimeout(n.current),[]),(0,o.useCallback)(()=>{window.clearTimeout(n.current),n.current=window.setTimeout(r,t)},[r,t])}function V(e,t){let r=(0,c.W)(t);(0,d.b)(()=>{let t=0;if(e){let n=new ResizeObserver(()=>{cancelAnimationFrame(t),t=window.requestAnimationFrame(r)});return n.observe(e),()=>{window.cancelAnimationFrame(t),n.unobserve(e)}}},[e,r])}let $=b,F=E,B=z},9589:function(e,t,r){r.d(t,{W:function(){return o}});var n=r(7058);function o(e){let t=(0,n.useRef)(e);return(0,n.useEffect)(()=>{t.current=e}),(0,n.useMemo)(()=>(...e)=>{var r;return null===(r=t.current)||void 0===r?void 0:r.call(t,...e)},[])}},9752:function(e,t,r){r.d(t,{b:function(){return o}});var n=r(7058);let o=(null==globalThis?void 0:globalThis.document)?n.useLayoutEffect:()=>{}}}]);