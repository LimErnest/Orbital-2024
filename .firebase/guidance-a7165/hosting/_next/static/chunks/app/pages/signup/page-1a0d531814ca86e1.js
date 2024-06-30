(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[461],{6502:function(e,a,s){Promise.resolve().then(s.bind(s,8935)),Promise.resolve().then(s.bind(s,8599)),Promise.resolve().then(s.t.bind(s,231,23))},8935:function(e,a,s){"use strict";s.d(a,{Navbar:function(){return i}});var t=s(7437);s(2265);var n=s(7138),r=s(7440),l=s(495);function i(e){let{className:a,...s}=e;return(0,t.jsx)("div",{className:(0,r.cn)("fixed top-0 w-full bg-white py-2 shadow-xl rounded-b-lg",a),...s,children:(0,t.jsxs)("div",{className:"flex h-[4vh] items-center justify-between px-10",children:[(0,t.jsx)("div",{className:"text-lg px-0 text-center font-medium text-black",children:(0,t.jsx)(n.default,{href:"/",children:"Guidance"})}),(0,t.jsxs)("div",{className:"flex space-x-4",children:[(0,t.jsx)(n.default,{href:"/pages/contact",className:(0,r.cn)((0,l.d)({variant:"outline"})),children:"Contact Us"}),(0,t.jsx)(n.default,{href:"/pages/login",className:(0,r.cn)((0,l.d)({variant:"outline"})),children:"Login"}),(0,t.jsx)(n.default,{href:"/pages/signup",className:(0,r.cn)((0,l.d)({variant:"outline",className:"bg-blue-300 hover:bg-blue-300"})),children:"Sign Up"})]})]})})}},8599:function(e,a,s){"use strict";s.d(a,{UserAuthForm:function(){return m}});var t=s(7437),n=s(2265),r=s(7440),l=s(3595),i=s(495),o=s(3102),d=s(7135),c=s(6780),u=s(510);function m(e){let{className:a,...s}=e,[m,h]=n.useState(!1),[f,p]=n.useState(""),[x,g]=n.useState(""),[b,j]=n.useState(""),[v,w]=n.useState(""),[C,N]=n.useState(!1),[y,P]=n.useState(""),{user:_,signUp:S,updateUsername:E}=(0,u.a)();async function U(e){if(e.preventDefault(),function(){let e="",a=/[!@#$%^&*(),.?":{}|<>_\-+=\[\]\\\/]/;return b.length<1?e="username":f!==v?e="mismatch":f.length<8?e="length":/\d/.test(f)||a.test(f)?/\d/.test(f)?a.test(f)||(e="special"):e="number":e="both",!e||(P(e),N(!0),!1)}()){h(!0);try{await S(x,f)}catch(e){"auth/email-already-in-use"==e.code&&(P("email"),N(!0)),console.log(e),h(!1)}}}return(0,n.useEffect)(()=>{!0===_.session&&""!==b&&(E(b),window.location.href="/pages/dashboard")},[_]),(0,t.jsxs)("div",{className:(0,r.cn)("grid gap-6",a),...s,children:[(0,t.jsx)("form",{onSubmit:U,children:(0,t.jsxs)("div",{className:"grid gap-2",children:[(0,t.jsxs)("div",{className:"grid gap-1",children:[(0,t.jsx)(d._,{className:"sr-only",htmlFor:"email",children:"Email"}),(0,t.jsx)(o.I,{id:"email",placeholder:"Email (name@example.com)",type:"email",autoCapitalize:"none",autoComplete:"email",autoCorrect:"off",disabled:m,value:x,onChange:e=>g(e.target.value),required:!0}),(0,t.jsx)(d._,{className:"sr-only",htmlFor:"email",children:"Username"}),(0,t.jsx)(o.I,{id:"username",placeholder:"Username",type:"username",autoCapitalize:"none",autoComplete:"username",autoCorrect:"off",disabled:m,value:b,onChange:e=>j(e.target.value),required:!0}),(0,t.jsx)(d._,{className:"sr-only",htmlFor:"password",children:"Password"}),(0,t.jsx)(o.I,{id:"password",placeholder:"Password",type:"password",autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",disabled:m,value:f,onChange:e=>p(e.target.value),required:!0}),(0,t.jsx)(d._,{className:"sr-only",htmlFor:"password",children:"Confirm Password"}),(0,t.jsx)("div",{className:"p-3 text-sm",children:"Password must be at least 8 characters long, including 1 number, and 1 special character."}),(0,t.jsx)(o.I,{id:"Confirm password",placeholder:"Confirm Password",type:"password",autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",disabled:m,value:v,onChange:e=>w(e.target.value),required:!0})]}),(0,t.jsxs)(i.z,{disabled:m,children:[m&&(0,t.jsx)(l.P.spinner,{className:"mr-2 h-4 w-4 animate-spin"}),"Sign Up with Email"]})]})}),(0,t.jsx)(c.aR,{open:C,onOpenChange:N,children:(0,t.jsxs)(c._T,{children:[(0,t.jsxs)(c.fY,{children:[(0,t.jsxs)(c.f$,{children:["email"===y&&"Email does not meet requirements","username"===y&&"Username does not meet requirements","email"!==y&&"username"!==y&&"Password does not meet requirements"]}),(0,t.jsxs)(c.yT,{children:["username"===y&&"Username must be at least 1 character long.","mismatch"===y&&"Please ensure that the passwords you entered match before continuing.","length"===y&&"Password must be at least 8 characters long.","number"===y&&"Password must include at least 1 number.","special"===y&&"Password must include at least 1 special character.","both"===y&&"Password must include at least 1 number and 1 special character.","email"===y&&"Email already exists. Please sign in or use a different email."]})]}),(0,t.jsx)(c.xo,{children:(0,t.jsx)(c.OL,{children:"Continue"})})]})})]})}}},function(e){e.O(0,[106,37,149,810,103,154,971,23,744],function(){return e(e.s=6502)}),_N_E=e.O()}]);