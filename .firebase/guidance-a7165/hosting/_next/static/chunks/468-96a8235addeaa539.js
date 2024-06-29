(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[468],{1555:function(e,n,t){Promise.resolve().then(t.bind(t,8935)),Promise.resolve().then(t.bind(t,4880))},495:function(e,n,t){"use strict";t.d(n,{d:function(){return l},z:function(){return a}});var r=t(7437),u=t(2265),o=t(1538),i=t(2218),s=t(7440);let l=(0,i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",xl:"h-12 rounded-md px-10",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),a=u.forwardRef((e,n)=>{let{className:t,variant:u,size:i,asChild:a=!1,...c}=e,d=a?o.g7:"button";return(0,r.jsx)(d,{className:(0,s.cn)(l({variant:u,size:i,className:t})),ref:n,...c})});a.displayName="Button"},8935:function(e,n,t){"use strict";t.d(n,{Navbar:function(){return s}});var r=t(7437);t(2265);var u=t(7138),o=t(7440),i=t(495);function s(e){let{className:n,...t}=e;return(0,r.jsx)("div",{className:(0,o.cn)("fixed top-0 w-full bg-white py-2 shadow-xl rounded-b-lg",n),...t,children:(0,r.jsxs)("div",{className:"flex h-[4vh] items-center justify-between px-10",children:[(0,r.jsx)("div",{className:"text-lg px-0 text-center font-medium text-black",children:(0,r.jsx)(u.default,{href:"/",children:"Guidance"})}),(0,r.jsxs)("div",{className:"flex space-x-4",children:[(0,r.jsx)(u.default,{href:"/pages/contact",className:(0,o.cn)((0,i.d)({variant:"outline"})),children:"Contact Us"}),(0,r.jsx)(u.default,{href:"/pages/login",className:(0,o.cn)((0,i.d)({variant:"outline"})),children:"Login"}),(0,r.jsx)(u.default,{href:"/pages/signup",className:(0,o.cn)((0,i.d)({variant:"outline",className:"bg-blue-300 hover:bg-blue-300"})),children:"Sign Up"})]})]})})}},4880:function(e,n,t){"use strict";t.d(n,{ScrollArea:function(){return s}});var r=t(7437),u=t(2265),o=t(2286),i=t(7440);let s=u.forwardRef((e,n)=>{let{className:t,children:u,...s}=e;return(0,r.jsxs)(o.fC,{ref:n,className:(0,i.cn)("relative overflow-hidden shadow-lg",t),...s,children:[(0,r.jsx)(o.l_,{className:"h-full w-full rounded-[inherit] border-2 border-gray-400 p-4",children:u}),(0,r.jsx)(l,{}),(0,r.jsx)(o.Ns,{})]})});s.displayName=o.fC.displayName;let l=u.forwardRef((e,n)=>{let{className:t,orientation:u="vertical",...s}=e;return(0,r.jsx)(o.gb,{ref:n,orientation:u,className:(0,i.cn)("flex touch-none select-none transition-colors","vertical"===u&&"h-full w-2.5 border-l border-l-transparent p-[1px]","horizontal"===u&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",t),...s,children:(0,r.jsx)(o.q4,{className:"relative flex-1 rounded-full bg-border"})})});l.displayName=o.gb.displayName},7440:function(e,n,t){"use strict";t.d(n,{cn:function(){return o}});var r=t(4839),u=t(6164);function o(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return(0,u.m6)((0,r.W)(n))}},8149:function(e,n,t){"use strict";function r(e,n,{checkForDefaultPrevented:t=!0}={}){return function(r){if(null==e||e(r),!1===t||!r.defaultPrevented)return null==n?void 0:n(r)}}t.d(n,{M:function(){return r}})},8324:function(e,n,t){"use strict";t.d(n,{b:function(){return o},k:function(){return u}});var r=t(2265);function u(e,n){let t=(0,r.createContext)(n);function u(e){let{children:n,...u}=e,o=(0,r.useMemo)(()=>u,Object.values(u));return(0,r.createElement)(t.Provider,{value:o},n)}return u.displayName=e+"Provider",[u,function(u){let o=(0,r.useContext)(t);if(o)return o;if(void 0!==n)return n;throw Error(`\`${u}\` must be used within \`${e}\``)}]}function o(e,n=[]){let t=[],u=()=>{let n=t.map(e=>(0,r.createContext)(e));return function(t){let u=(null==t?void 0:t[e])||n;return(0,r.useMemo)(()=>({[`__scope${e}`]:{...t,[e]:u}}),[t,u])}};return u.scopeName=e,[function(n,u){let o=(0,r.createContext)(u),i=t.length;function s(n){let{scope:t,children:u,...s}=n,l=(null==t?void 0:t[e][i])||o,a=(0,r.useMemo)(()=>s,Object.values(s));return(0,r.createElement)(l.Provider,{value:a},u)}return t=[...t,u],s.displayName=n+"Provider",[s,function(t,s){let l=(null==s?void 0:s[e][i])||o,a=(0,r.useContext)(l);if(a)return a;if(void 0!==u)return u;throw Error(`\`${t}\` must be used within \`${n}\``)}]},function(...e){let n=e[0];if(1===e.length)return n;let t=()=>{let t=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let u=t.reduce((n,{useScope:t,scopeName:r})=>{let u=t(e)[`__scope${r}`];return{...n,...u}},{});return(0,r.useMemo)(()=>({[`__scope${n.scopeName}`]:u}),[u])}};return t.scopeName=n.scopeName,t}(u,...n)]}},1383:function(e,n,t){"use strict";t.d(n,{z:function(){return s}});var r=t(2265),u=t(4887),o=t(1584),i=t(1336);let s=e=>{let{present:n,children:t}=e,s=function(e){var n,t;let[o,s]=(0,r.useState)(),a=(0,r.useRef)({}),c=(0,r.useRef)(e),d=(0,r.useRef)("none"),[f,m]=(n=e?"mounted":"unmounted",t={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},(0,r.useReducer)((e,n)=>{let r=t[e][n];return null!=r?r:e},n));return(0,r.useEffect)(()=>{let e=l(a.current);d.current="mounted"===f?e:"none"},[f]),(0,i.b)(()=>{let n=a.current,t=c.current;if(t!==e){let r=d.current,u=l(n);e?m("MOUNT"):"none"===u||(null==n?void 0:n.display)==="none"?m("UNMOUNT"):t&&r!==u?m("ANIMATION_OUT"):m("UNMOUNT"),c.current=e}},[e,m]),(0,i.b)(()=>{if(o){let e=e=>{let n=l(a.current).includes(e.animationName);e.target===o&&n&&(0,u.flushSync)(()=>m("ANIMATION_END"))},n=e=>{e.target===o&&(d.current=l(a.current))};return o.addEventListener("animationstart",n),o.addEventListener("animationcancel",e),o.addEventListener("animationend",e),()=>{o.removeEventListener("animationstart",n),o.removeEventListener("animationcancel",e),o.removeEventListener("animationend",e)}}m("ANIMATION_END")},[o,m]),{isPresent:["mounted","unmountSuspended"].includes(f),ref:(0,r.useCallback)(e=>{e&&(a.current=getComputedStyle(e)),s(e)},[])}}(n),a="function"==typeof t?t({present:s.isPresent}):r.Children.only(t),c=(0,o.e)(s.ref,a.ref);return"function"==typeof t||s.isPresent?(0,r.cloneElement)(a,{ref:c}):null};function l(e){return(null==e?void 0:e.animationName)||"none"}s.displayName="Presence"},5171:function(e,n,t){"use strict";t.d(n,{WV:function(){return s},jH:function(){return l}});var r=t(2988),u=t(2265),o=t(4887),i=t(1538);let s=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,n)=>{let t=(0,u.forwardRef)((e,t)=>{let{asChild:o,...s}=e,l=o?i.g7:n;return(0,u.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,u.createElement)(l,(0,r.Z)({},s,{ref:t}))});return t.displayName=`Primitive.${n}`,{...e,[n]:t}},{});function l(e,n){e&&(0,o.flushSync)(()=>e.dispatchEvent(n))}},5137:function(e,n,t){"use strict";t.d(n,{W:function(){return u}});var r=t(2265);function u(e){let n=(0,r.useRef)(e);return(0,r.useEffect)(()=>{n.current=e}),(0,r.useMemo)(()=>(...e)=>{var t;return null===(t=n.current)||void 0===t?void 0:t.call(n,...e)},[])}},1336:function(e,n,t){"use strict";t.d(n,{b:function(){return u}});var r=t(2265);let u=(null==globalThis?void 0:globalThis.document)?r.useLayoutEffect:()=>{}}}]);