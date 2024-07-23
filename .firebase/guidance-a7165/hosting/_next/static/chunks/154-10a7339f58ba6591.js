"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[154],{510:function(e,t,a){a.d(t,{AuthContextProvider:function(){return c},a:function(){return u}});var r=a(7437),i=a(2265),l=a(9555),s=a(8969),n=a(3705),o=a(9116);let d=(0,i.createContext)({}),u=()=>(0,i.useContext)(d),c=e=>{let{children:t}=e,[a,u]=(0,i.useState)({email:null,uid:null,username:null,session:null,profilePicture:null,xp:null});(0,i.useEffect)(()=>{let e=(0,l.Aj)(s.I,async e=>{if(e){let t=(0,n.JU)(s.db,"xp",e.uid),a=(await (0,n.QT)(t)).data();(0,n.r7)(t,{username:e.displayName}),u({email:e.email,uid:e.uid,username:e.displayName,session:!0,profilePicture:e.photoURL,xp:null==a?void 0:a.xp})}else u({email:null,uid:null,username:null,session:!1,profilePicture:null,xp:null})});return()=>e()},[]);let c=s.I.currentUser,p=(0,o.cF)(),f=async(e,t)=>{let a=(await (0,l.Xb)(s.I,e,t)).user;if(a){let e=(0,n.pl)((0,n.JU)(s.db,"badges",a.uid),{chess50Guide:!1,chess100Guide:!1,chessFinalQuest:!1,poker50Guide:!1,poker100Guide:!1,pokerFinalQuest:!1}),t=(0,n.pl)((0,n.JU)(s.db,"rating",a.uid),{chessRating:"400",attempts:3,puzzleID:1,noOfCorrect:0,latestDate:new Date().toLocaleDateString(),threePuzzleCorrect:!1}),r=(0,n.pl)((0,n.JU)(s.db,"xp",a.uid),{xp:0,username:""}),i=(0,n.pl)((0,n.JU)(s.db,"chessguide",a.uid),{lastChapter:1}),l=(0,n.pl)((0,n.JU)(s.db,"pokerguide",a.uid),{lastChapter:1}),o=(0,n.pl)((0,n.JU)(s.db,"finalQuest",a.uid),{finalQuestPuzzleID:1,isCompleted:!1}),d=(0,n.pl)((0,n.JU)(s.db,"pokerFinalQuest",a.uid),{finalQuestPuzzleID:1,isCompleted:!1}),u=(0,n.pl)((0,n.JU)(s.db,"pokerquiz",a.uid),{attempts:5,latestDate:new Date().toLocaleDateString()});await Promise.all([e,t,r,i,o,l,u,d])}},m=async e=>{if(c){await (0,l.ck)(c,{displayName:e}).catch(e=>console.log(e));let t=(0,n.JU)(s.db,"xp",c.uid);await (0,n.r7)(t,{username:e}),u({email:a.email,uid:a.uid,username:e,session:!0,profilePicture:a.profilePicture,xp:a.xp})}},x=async(e,t)=>{if(c&&a.email){let r=l.w9.credential(a.email,e);await (0,l.aF)(c,r),await (0,l.gQ)(c,t).catch(e=>console.log(e))}},h=async()=>await (0,l.w7)(s.I),g=async e=>{if(c){let t=(0,o.iH)(p,"profilePicture/"+c.uid+".jpg");await (0,o.KV)(t,e);let r=await (0,o.Jt)(t);(0,l.ck)(c,{photoURL:r}),u({email:a.email,uid:a.uid,username:a.username,session:!0,profilePicture:r,xp:a.xp})}},w=async e=>{if(c){let t=(0,n.JU)(s.db,"xp",c.uid),r=(await (0,n.QT)(t)).data(),i=(null==r?void 0:r.xp)+e;await (0,n.r7)(t,{xp:i}),u({email:a.email,uid:a.uid,username:a.username,session:!0,profilePicture:a.profilePicture,xp:i})}},z=async e=>{if(c){let t=(0,n.JU)(s.db,"chessguide",c.uid),a=(await (0,n.QT)(t)).data();if(a)return a.lastChapter>e?a.lastChapter:(await (0,n.pl)(t,{lastChapter:e}),e);await (0,n.pl)(t,{lastChapter:e})}},v=async e=>{if(c){let t=(0,n.JU)(s.db,"badges",c.uid);await (0,n.r7)(t,{[e]:!0})}},b=async()=>{if(c){let e=(0,n.JU)(s.db,"badges",c.uid),t=(await (0,n.QT)(e)).data();if(t)return t.chess100Guide}},y=async e=>{if(c){let t=(0,n.JU)(s.db,"pokerguide",c.uid),a=(await (0,n.QT)(t)).data();if(a)return a.lastChapter>e?a.lastChapter:(await (0,n.pl)(t,{lastChapter:e}),e);await (0,n.pl)(t,{lastChapter:e})}},C=async()=>{if(c){let e=(0,n.JU)(s.db,"badges",c.uid),t=(await (0,n.QT)(e)).data();if(t)return t.poker100Guide}},j=async e=>{if(c){let t=(0,n.JU)(s.db,"rating",c.uid);await (0,n.r7)(t,{attempts:e})}},k=async e=>{if(c){let t=(0,n.JU)(s.db,"rating",c.uid);await (0,n.r7)(t,{attempts:3,threePuzzleCorrect:!1,latestDate:e})}},N=async e=>{if(c){let t=(0,n.JU)(s.db,"rating",c.uid);await (0,n.r7)(t,{puzzleID:e})}},D=async e=>{if(c){let t=(0,n.JU)(s.db,"rating",c.uid);await (0,n.r7)(t,{chessRating:e})}},U=async(e,t)=>{if(c){let a=(0,n.JU)(s.db,"rating",c.uid);await (0,n.r7)(a,{noOfCorrect:e,threePuzzleCorrect:t})}},J=async()=>{if(c){let e=(0,n.JU)(s.db,"rating",c.uid),t=(await (0,n.QT)(e)).data();return t?{chessRating:t.chessRating,attempts:t.attempts,puzzleID:t.puzzleID,noOfCorrect:t.noOfCorrect,latestDate:t.latestDate,threePuzzleCorrect:t.threePuzzleCorrect}:(console.log("No such document!"),{chessRating:"400",attempts:0,puzzleID:1,noOfCorrect:0,lastestDate:new Date().toLocaleDateString(),threePuzzleCorrect:!1})}},P=async e=>{if(c){let t=(0,n.JU)(s.db,"finalQuest",c.uid);await (0,n.r7)(t,{finalQuestPuzzleID:e})}},Q=async e=>{if(c){let t=(0,n.JU)(s.db,"pokerFinalQuest",c.uid);await (0,n.r7)(t,{finalQuestPuzzleID:e})}},I=async()=>{if(c){let e=(0,n.JU)(s.db,"finalQuest",c.uid);await (0,n.r7)(e,{isCompleted:!0})}},L=async()=>{if(c){let e=(0,n.JU)(s.db,"pokerFinalQuest",c.uid);await (0,n.r7)(e,{isCompleted:!0})}},M=async e=>{let t=(0,n.JU)(s.db,"finalQuest",e),a=await (0,n.QT)(t);if(!a.exists())return console.log("No such document!"),{finalQuestPuzzleID:1,isCompleted:!1};{let e=a.data();return console.log("exists",e),{finalQuestPuzzleID:e.finalQuestPuzzleID,isCompleted:e.isCompleted}}},H=async()=>{let e=(0,n.hJ)(s.db,"xp"),t=await (0,n.IO)(e,(0,n.Xo)("xp","desc"),(0,n.b9)(20)),a=await (0,n.PL)(t),r=[];return a.forEach(e=>{let t=e.data();r.push({xp:t.xp,username:t.username}),console.log(t.xp,t.username)}),r},B=async(e,t)=>{if(c){let a=(0,n.JU)(s.db,"pokerquiz",c.uid),r=await (0,n.QT)(a);if(r.exists()){let i=r.data();if(t){let e=i.attempts-1;return(0,n.r7)(a,{attempts:e,latestDate:i.latestDate}),e}if(e)return e!==i.latestDate?((0,n.r7)(a,{attempts:5,latestDate:e}),5):i.attempts}}},R=async e=>{let t=(0,n.JU)(s.db,"pokerFinalQuest",e),a=await (0,n.QT)(t);if(!a.exists())return console.log("No such document!"),{finalQuestPuzzleID:1,isCompleted:!1};{let e=a.data();return console.log("exists",e),{finalQuestPuzzleID:e.finalQuestPuzzleID,isCompleted:e.isCompleted}}};return(0,r.jsx)(d.Provider,{value:{user:a,signUp:f,logIn:(e,t)=>(0,l.e5)(s.I,e,t),logOut:h,updateUsername:m,changePassword:x,upload:g,addXp:w,updateChessChapter:z,updateBadge:v,checkChessGuide:b,updatePokerChapter:y,checkPokerGuide:C,updateAttempt:j,updateUserTries:k,updatePuzzle:N,updateRating:D,updateCorrectCount:U,fetchUserRating:J,updateFinalPuzzle:P,updateFinalQuestStatus:I,fetchFinalQuest:M,queryCollection:H,pokerQuiz:B,fetchPokerFinalQuest:R,updatePokerFinalQuestStatus:L,updatePokerFinalQuestID:Q},children:t})}},6780:function(e,t,a){a.d(t,{OL:function(){return g},_T:function(){return p},aR:function(){return o},f$:function(){return x},fY:function(){return f},le:function(){return w},vW:function(){return d},xo:function(){return m},yT:function(){return h}});var r=a(7437),i=a(2265),l=a(6669),s=a(7440),n=a(495);let o=l.fC,d=l.xz,u=l.h_,c=i.forwardRef((e,t)=>{let{className:a,...i}=e;return(0,r.jsx)(l.aV,{className:(0,s.cn)("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...i,ref:t})});c.displayName=l.aV.displayName;let p=i.forwardRef((e,t)=>{let{className:a,...i}=e;return(0,r.jsxs)(u,{children:[(0,r.jsx)(c,{}),(0,r.jsx)(l.VY,{ref:t,className:(0,s.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",a),...i})]})});p.displayName=l.VY.displayName;let f=e=>{let{className:t,...a}=e;return(0,r.jsx)("div",{className:(0,s.cn)("flex flex-col space-y-2 text-center sm:text-left",t),...a})};f.displayName="AlertDialogHeader";let m=e=>{let{className:t,...a}=e;return(0,r.jsx)("div",{className:(0,s.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...a})};m.displayName="AlertDialogFooter";let x=i.forwardRef((e,t)=>{let{className:a,...i}=e;return(0,r.jsx)(l.Dx,{ref:t,className:(0,s.cn)("text-lg font-semibold",a),...i})});x.displayName=l.Dx.displayName;let h=i.forwardRef((e,t)=>{let{className:a,...i}=e;return(0,r.jsx)(l.dk,{ref:t,className:(0,s.cn)("text-sm text-muted-foreground",a),...i})});h.displayName=l.dk.displayName;let g=i.forwardRef((e,t)=>{let{className:a,...i}=e;return(0,r.jsx)(l.aU,{ref:t,className:(0,s.cn)((0,n.d)(),a),...i})});g.displayName=l.aU.displayName;let w=i.forwardRef((e,t)=>{let{className:a,...i}=e;return(0,r.jsx)(l.$j,{ref:t,className:(0,s.cn)((0,n.d)({variant:"outline"}),"mt-2 sm:mt-0",a),...i})});w.displayName=l.$j.displayName},495:function(e,t,a){a.d(t,{d:function(){return o},z:function(){return d}});var r=a(7437),i=a(2265),l=a(1538),s=a(2218),n=a(7440);let o=(0,s.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",xl:"h-12 rounded-md px-10",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=i.forwardRef((e,t)=>{let{className:a,variant:i,size:s,asChild:d=!1,...u}=e,c=d?l.g7:"button";return(0,r.jsx)(c,{className:(0,n.cn)(o({variant:i,size:s,className:a})),ref:t,...u})});d.displayName="Button"},3595:function(e,t,a){a.d(t,{P:function(){return i}});var r=a(7437);a(2265);let i={logo:e=>(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",...e,children:[(0,r.jsx)("rect",{width:"256",height:"256",fill:"none"}),(0,r.jsx)("line",{x1:"208",y1:"128",x2:"128",y2:"208",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),(0,r.jsx)("line",{x1:"192",y1:"40",x2:"40",y2:"192",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]}),twitter:e=>(0,r.jsx)("svg",{...e,height:"23",viewBox:"0 0 1200 1227",width:"23",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"})}),gitHub:e=>(0,r.jsx)("svg",{viewBox:"0 0 438.549 438.549",...e,children:(0,r.jsx)("path",{fill:"currentColor",d:"M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"})}),radix:e=>(0,r.jsxs)("svg",{viewBox:"0 0 25 25",fill:"none",...e,children:[(0,r.jsx)("path",{d:"M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z",fill:"currentcolor"}),(0,r.jsx)("path",{d:"M12 0H4V8H12V0Z",fill:"currentcolor"}),(0,r.jsx)("path",{d:"M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z",fill:"currentcolor"})]}),aria:e=>(0,r.jsx)("svg",{role:"img",viewBox:"0 0 24 24",fill:"currentColor",...e,children:(0,r.jsx)("path",{d:"M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425zM8.884 1.376H0v21.248zm15.116 0h-8.884L24 22.624Z"})}),npm:e=>(0,r.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,r.jsx)("path",{d:"M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z",fill:"currentColor"})}),yarn:e=>(0,r.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,r.jsx)("path",{d:"M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm.768 4.105c.183 0 .363.053.525.157.125.083.287.185.755 1.154.31-.088.468-.042.551-.019.204.056.366.19.463.375.477.917.542 2.553.334 3.605-.241 1.232-.755 2.029-1.131 2.576.324.329.778.899 1.117 1.825.278.774.31 1.478.273 2.015a5.51 5.51 0 0 0 .602-.329c.593-.366 1.487-.917 2.553-.931.714-.009 1.269.445 1.353 1.103a1.23 1.23 0 0 1-.945 1.362c-.649.158-.95.278-1.821.843-1.232.797-2.539 1.242-3.012 1.39a1.686 1.686 0 0 1-.704.343c-.737.181-3.266.315-3.466.315h-.046c-.783 0-1.214-.241-1.45-.491-.658.329-1.51.19-2.122-.134a1.078 1.078 0 0 1-.58-1.153 1.243 1.243 0 0 1-.153-.195c-.162-.25-.528-.936-.454-1.946.056-.723.556-1.367.88-1.71a5.522 5.522 0 0 1 .408-2.256c.306-.727.885-1.348 1.32-1.737-.32-.537-.644-1.367-.329-2.21.227-.602.412-.936.82-1.08h-.005c.199-.074.389-.153.486-.259a3.418 3.418 0 0 1 2.298-1.103c.037-.093.079-.185.125-.283.31-.658.639-1.029 1.024-1.168a.94.94 0 0 1 .328-.06zm.006.7c-.507.016-1.001 1.519-1.001 1.519s-1.27-.204-2.266.871c-.199.218-.468.334-.746.44-.079.028-.176.023-.417.672-.371.991.625 2.094.625 2.094s-1.186.839-1.626 1.881c-.486 1.144-.338 2.261-.338 2.261s-.843.732-.899 1.487c-.051.663.139 1.2.343 1.515.227.343.51.176.51.176s-.561.653-.037.931c.477.25 1.283.394 1.71-.037.31-.31.371-1.001.486-1.283.028-.065.12.111.209.199.097.093.264.195.264.195s-.755.324-.445 1.066c.102.246.468.403 1.066.398.222-.005 2.664-.139 3.313-.296.375-.088.505-.283.505-.283s1.566-.431 2.998-1.357c.917-.598 1.293-.76 2.034-.936.612-.148.57-1.098-.241-1.084-.839.009-1.575.44-2.196.825-1.163.718-1.742.672-1.742.672l-.018-.032c-.079-.13.371-1.293-.134-2.678-.547-1.515-1.413-1.881-1.344-1.997.297-.5 1.038-1.297 1.334-2.78.176-.899.13-2.377-.269-3.151-.074-.144-.732.241-.732.241s-.616-1.371-.788-1.483a.271.271 0 0 0-.157-.046z",fill:"currentColor"})}),pnpm:e=>(0,r.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,r.jsx)("path",{d:"M0 0v7.5h7.5V0zm8.25 0v7.5h7.498V0zm8.25 0v7.5H24V0zM8.25 8.25v7.5h7.498v-7.5zm8.25 0v7.5H24v-7.5zM0 16.5V24h7.5v-7.5zm8.25 0V24h7.498v-7.5zm8.25 0V24H24v-7.5z",fill:"currentColor"})}),react:e=>(0,r.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,r.jsx)("path",{d:"M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z",fill:"currentColor"})}),tailwind:e=>(0,r.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,r.jsx)("path",{d:"M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z",fill:"currentColor"})}),google:e=>(0,r.jsx)("svg",{role:"img",viewBox:"0 0 24 24",...e,children:(0,r.jsx)("path",{fill:"currentColor",d:"M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"})}),apple:e=>(0,r.jsx)("svg",{role:"img",viewBox:"0 0 24 24",...e,children:(0,r.jsx)("path",{d:"M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701",fill:"currentColor"})}),paypal:e=>(0,r.jsx)("svg",{role:"img",viewBox:"0 0 24 24",...e,children:(0,r.jsx)("path",{d:"M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z",fill:"currentColor"})}),spinner:e=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...e,children:(0,r.jsx)("path",{d:"M21 12a9 9 0 1 1-6.219-8.56"})})}},3102:function(e,t,a){a.d(t,{I:function(){return s}});var r=a(7437),i=a(2265),l=a(7440);let s=i.forwardRef((e,t)=>{let{className:a,type:i,...s}=e;return(0,r.jsx)("input",{type:i,className:(0,l.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",a),ref:t,...s})});s.displayName="Input"},7135:function(e,t,a){a.d(t,{_:function(){return d}});var r=a(7437),i=a(2265),l=a(8364),s=a(2218),n=a(7440);let o=(0,s.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=i.forwardRef((e,t)=>{let{className:a,...i}=e;return(0,r.jsx)(l.f,{ref:t,className:(0,n.cn)(o(),a),...i})});d.displayName=l.f.displayName},8969:function(e,t,a){a.d(t,{I:function(){return o},db:function(){return n}});var r=a(2860),i=a(3705),l=a(9555);let s=(0,r.ZF)({apiKey:"AIzaSyBrhkd7OBntivHeMyJ_qTrN904zh8KMGpk",authDomain:"guidance-a7165.firebaseapp.com",projectId:"guidance-a7165",storageBucket:"guidance-a7165.appspot.com",messagingSenderId:"153691782315",appId:"1:153691782315:web:9acf354f061ae722020bee",measurementId:"G-RWGPHX31D"}),n=(0,i.ad)(s),o=(0,l.v0)(s)},7440:function(e,t,a){a.d(t,{cn:function(){return l}});var r=a(4839),i=a(6164);function l(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,i.m6)((0,r.W)(t))}}}]);