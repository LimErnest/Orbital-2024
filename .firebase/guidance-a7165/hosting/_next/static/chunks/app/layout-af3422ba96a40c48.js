(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{7610:function(e,a,i){Promise.resolve().then(i.bind(i,510)),Promise.resolve().then(i.t.bind(i,936,23)),Promise.resolve().then(i.t.bind(i,8877,23))},510:function(e,a,i){"use strict";i.d(a,{AuthContextProvider:function(){return d},a:function(){return c}});var t=i(7437),n=i(2265),l=i(9555),u=i(8969),s=i(3705),r=i(9116);let o=(0,n.createContext)({}),c=()=>(0,n.useContext)(o),d=e=>{let{children:a}=e,[i,c]=(0,n.useState)({email:null,uid:null,username:null,session:null,profilePicture:null,xp:null});(0,n.useEffect)(()=>{let e=(0,l.Aj)(u.I,async e=>{if(e){let a=(0,s.JU)(u.db,"xp",e.uid),i=(await (0,s.QT)(a)).data();c({email:e.email,uid:e.uid,username:e.displayName,session:!0,profilePicture:e.photoURL,xp:null==i?void 0:i.xp})}else c({email:null,uid:null,username:null,session:!1,profilePicture:null,xp:null})});return()=>e()},[]);let d=u.I.currentUser,p=(0,r.cF)(),f=async(e,a)=>{let i=(await (0,l.Xb)(u.I,e,a)).user;if(i){let e=(0,s.pl)((0,s.JU)(u.db,"badges",i.uid),{chess50Guide:!1,chess100Guide:!1,chessFinalQuest:!1,mahjong50Guide:!1,mahjong100Guide:!1,mahjongFinalQuest:!1,poker50Guide:!1,poker100Guide:!1,pokerFinalQuest:!1}),a=(0,s.pl)((0,s.JU)(u.db,"rating",i.uid),{chessRating:"400",attempts:3,puzzleID:1,noOfCorrect:0,latestDate:new Date().toLocaleDateString()}),t=(0,s.pl)((0,s.JU)(u.db,"xp",i.uid),{xp:0}),n=(0,s.pl)((0,s.JU)(u.db,"chessguide",i.uid),{lastChapter:1});await Promise.all([e,a,t,n])}},m=async e=>{d&&(await (0,l.ck)(d,{displayName:e}).catch(e=>console.log(e)),c({email:i.email,uid:i.uid,username:e,session:!0,profilePicture:i.profilePicture,xp:i.xp}))},h=async(e,a)=>{if(d&&i.email){let t=l.w9.credential(i.email,e);await (0,l.aF)(d,t),await (0,l.gQ)(d,a).catch(e=>console.log(e))}},b=async()=>await (0,l.w7)(u.I),g=async e=>{if(d){let a=(0,r.iH)(p,"profilePicture/"+d.uid+".jpg");await (0,r.KV)(a,e);let t=await (0,r.Jt)(a);(0,l.ck)(d,{photoURL:t}),c({email:i.email,uid:i.uid,username:i.username,session:!0,profilePicture:t,xp:i.xp})}},w=async e=>{if(d){let a=(0,s.JU)(u.db,"xp",d.uid),t=(await (0,s.QT)(a)).data(),n=(null==t?void 0:t.xp)+e;await (0,s.pl)(a,{xp:n}),c({email:i.email,uid:i.uid,username:i.username,session:!0,profilePicture:i.profilePicture,xp:n})}},x=async e=>{if(d){let a=(0,s.JU)(u.db,"chessguide",d.uid),i=(await (0,s.QT)(a)).data();if(i)return i.lastChapter>e?i.lastChapter:(await (0,s.pl)(a,{lastChapter:e}),e);await (0,s.pl)(a,{lastChapter:e})}},y=async e=>{if(d){let a=(0,s.JU)(u.db,"badges",d.uid);await (0,s.r7)(a,{[e]:!0})}};return(0,t.jsx)(o.Provider,{value:{user:i,signUp:f,logIn:(e,a)=>(0,l.e5)(u.I,e,a),logOut:b,updateUsername:m,changePassword:h,upload:g,addXp:w,updateChessChapter:x,updateBadge:y},children:a})}},8969:function(e,a,i){"use strict";i.d(a,{I:function(){return r},db:function(){return s}});var t=i(2860),n=i(3705),l=i(9555);let u=(0,t.ZF)({apiKey:"***REMOVED***",authDomain:"guidance-a7165.firebaseapp.com",projectId:"guidance-a7165",storageBucket:"guidance-a7165.appspot.com",messagingSenderId:"153691782315",appId:"1:153691782315:web:9acf354f061ae722020bee",measurementId:"G-RWGPHX31D"}),s=(0,n.ad)(u),r=(0,l.v0)(u)},8877:function(){},936:function(e){e.exports={style:{fontFamily:"'__Inter_aaf875', '__Inter_Fallback_aaf875'",fontStyle:"normal"},className:"__className_aaf875"}}},function(e){e.O(0,[232,106,37,810,971,23,744],function(){return e(e.s=7610)}),_N_E=e.O()}]);