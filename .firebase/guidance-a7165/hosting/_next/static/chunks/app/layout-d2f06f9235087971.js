(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{7610:function(e,t,a){Promise.resolve().then(a.bind(a,510)),Promise.resolve().then(a.t.bind(a,936,23)),Promise.resolve().then(a.t.bind(a,8877,23))},510:function(e,t,a){"use strict";a.d(t,{AuthContextProvider:function(){return c},a:function(){return o}});var i=a(7437),l=a(2265),s=a(9555),n=a(8969),u=a(3705),r=a(9116);let d=(0,l.createContext)({}),o=()=>(0,l.useContext)(d),c=e=>{let{children:t}=e,[a,o]=(0,l.useState)({email:null,uid:null,username:null,session:null,profilePicture:null,xp:null});(0,l.useEffect)(()=>{let e=(0,s.Aj)(n.I,async e=>{if(e){let t=(0,u.JU)(n.db,"xp",e.uid),a=(await (0,u.QT)(t)).data();(0,u.r7)(t,{username:e.displayName}),o({email:e.email,uid:e.uid,username:e.displayName,session:!0,profilePicture:e.photoURL,xp:null==a?void 0:a.xp})}else o({email:null,uid:null,username:null,session:!1,profilePicture:null,xp:null})});return()=>e()},[]);let c=n.I.currentUser,p=(0,r.cF)(),f=async(e,t)=>{let a=(await (0,s.Xb)(n.I,e,t)).user;if(a){let e=(0,u.pl)((0,u.JU)(n.db,"badges",a.uid),{chess50Guide:!1,chess100Guide:!1,chessFinalQuest:!1,poker50Guide:!1,poker100Guide:!1,pokerFinalQuest:!1}),t=(0,u.pl)((0,u.JU)(n.db,"rating",a.uid),{chessRating:"400",attempts:3,puzzleID:1,noOfCorrect:0,latestDate:new Date().toLocaleDateString(),threePuzzleCorrect:!1}),i=(0,u.pl)((0,u.JU)(n.db,"xp",a.uid),{xp:0,username:""}),l=(0,u.pl)((0,u.JU)(n.db,"chessguide",a.uid),{lastChapter:1}),s=(0,u.pl)((0,u.JU)(n.db,"pokerguide",a.uid),{lastChapter:1}),r=(0,u.pl)((0,u.JU)(n.db,"finalQuest",a.uid),{finalQuestPuzzleID:1,isCompleted:!1}),d=(0,u.pl)((0,u.JU)(n.db,"pokerFinalQuest",a.uid),{finalQuestPuzzleID:1,isCompleted:!1}),o=(0,u.pl)((0,u.JU)(n.db,"pokerquiz",a.uid),{attempts:5,latestDate:new Date().toLocaleDateString()});await Promise.all([e,t,i,l,r,s,o,d])}},m=async e=>{if(c){await (0,s.ck)(c,{displayName:e}).catch(e=>console.log(e));let t=(0,u.JU)(n.db,"xp",c.uid);await (0,u.r7)(t,{username:e}),o({email:a.email,uid:a.uid,username:e,session:!0,profilePicture:a.profilePicture,xp:a.xp})}},h=async(e,t)=>{if(c&&a.email){let i=s.w9.credential(a.email,e);await (0,s.aF)(c,i),await (0,s.gQ)(c,t).catch(e=>console.log(e))}},b=async()=>await (0,s.w7)(n.I),z=async e=>{if(c){let t=(0,r.iH)(p,"profilePicture/"+c.uid+".jpg");await (0,r.KV)(t,e);let i=await (0,r.Jt)(t);(0,s.ck)(c,{photoURL:i}),o({email:a.email,uid:a.uid,username:a.username,session:!0,profilePicture:i,xp:a.xp})}},w=async e=>{if(c){let t=(0,u.JU)(n.db,"xp",c.uid),i=(await (0,u.QT)(t)).data(),l=(null==i?void 0:i.xp)+e;await (0,u.r7)(t,{xp:l}),o({email:a.email,uid:a.uid,username:a.username,session:!0,profilePicture:a.profilePicture,xp:l})}},g=async e=>{if(c){let t=(0,u.JU)(n.db,"chessguide",c.uid),a=(await (0,u.QT)(t)).data();if(a)return a.lastChapter>e?a.lastChapter:(await (0,u.pl)(t,{lastChapter:e}),e);await (0,u.pl)(t,{lastChapter:e})}},C=async e=>{if(c){let t=(0,u.JU)(n.db,"badges",c.uid);await (0,u.r7)(t,{[e]:!0})}},y=async()=>{if(c){let e=(0,u.JU)(n.db,"badges",c.uid),t=(await (0,u.QT)(e)).data();if(t)return t.chess100Guide}},D=async e=>{if(c){let t=(0,u.JU)(n.db,"pokerguide",c.uid),a=(await (0,u.QT)(t)).data();if(a)return a.lastChapter>e?a.lastChapter:(await (0,u.pl)(t,{lastChapter:e}),e);await (0,u.pl)(t,{lastChapter:e})}},P=async()=>{if(c){let e=(0,u.JU)(n.db,"badges",c.uid),t=(await (0,u.QT)(e)).data();if(t)return t.poker100Guide}},J=async e=>{if(c){let t=(0,u.JU)(n.db,"rating",c.uid);await (0,u.r7)(t,{attempts:e})}},U=async e=>{if(c){let t=(0,u.JU)(n.db,"rating",c.uid);await (0,u.r7)(t,{attempts:3,threePuzzleCorrect:!1,latestDate:e})}},x=async e=>{if(c){let t=(0,u.JU)(n.db,"rating",c.uid);await (0,u.r7)(t,{puzzleID:e})}},Q=async e=>{if(c){let t=(0,u.JU)(n.db,"rating",c.uid);await (0,u.r7)(t,{chessRating:e})}},I=async(e,t)=>{if(c){let a=(0,u.JU)(n.db,"rating",c.uid);await (0,u.r7)(a,{noOfCorrect:e,threePuzzleCorrect:t})}},k=async()=>{if(c){let e=(0,u.JU)(n.db,"rating",c.uid),t=(await (0,u.QT)(e)).data();return t?{chessRating:t.chessRating,attempts:t.attempts,puzzleID:t.puzzleID,noOfCorrect:t.noOfCorrect,latestDate:t.latestDate,threePuzzleCorrect:t.threePuzzleCorrect}:(console.log("No such document!"),{chessRating:"400",attempts:0,puzzleID:1,noOfCorrect:0,lastestDate:new Date().toLocaleDateString(),threePuzzleCorrect:!1})}},_=async e=>{if(c){let t=(0,u.JU)(n.db,"finalQuest",c.uid);await (0,u.r7)(t,{finalQuestPuzzleID:e})}},v=async e=>{if(c){let t=(0,u.JU)(n.db,"pokerFinalQuest",c.uid);await (0,u.r7)(t,{finalQuestPuzzleID:e})}},N=async()=>{if(c){let e=(0,u.JU)(n.db,"finalQuest",c.uid);await (0,u.r7)(e,{isCompleted:!0})}},F=async()=>{if(c){let e=(0,u.JU)(n.db,"pokerFinalQuest",c.uid);await (0,u.r7)(e,{isCompleted:!0})}},T=async e=>{let t=(0,u.JU)(n.db,"finalQuest",e),a=await (0,u.QT)(t);if(!a.exists())return console.log("No such document!"),{finalQuestPuzzleID:1,isCompleted:!1};{let e=a.data();return console.log("exists",e),{finalQuestPuzzleID:e.finalQuestPuzzleID,isCompleted:e.isCompleted}}},G=async()=>{let e=(0,u.hJ)(n.db,"xp"),t=await (0,u.IO)(e,(0,u.Xo)("xp","desc"),(0,u.b9)(20)),a=await (0,u.PL)(t),i=[];return a.forEach(e=>{let t=e.data();i.push({xp:t.xp,username:t.username}),console.log(t.xp,t.username)}),i},O=async(e,t)=>{if(c){let a=(0,u.JU)(n.db,"pokerquiz",c.uid),i=await (0,u.QT)(a);if(i.exists()){let l=i.data();if(t){let e=l.attempts-1;return(0,u.r7)(a,{attempts:e,latestDate:l.latestDate}),e}if(e)return e!==l.latestDate?((0,u.r7)(a,{attempts:5,latestDate:e}),5):l.attempts}}},R=async e=>{let t=(0,u.JU)(n.db,"pokerFinalQuest",e),a=await (0,u.QT)(t);if(!a.exists())return console.log("No such document!"),{finalQuestPuzzleID:1,isCompleted:!1};{let e=a.data();return console.log("exists",e),{finalQuestPuzzleID:e.finalQuestPuzzleID,isCompleted:e.isCompleted}}};return(0,i.jsx)(d.Provider,{value:{user:a,signUp:f,logIn:(e,t)=>(0,s.e5)(n.I,e,t),logOut:b,updateUsername:m,changePassword:h,upload:z,addXp:w,updateChessChapter:g,updateBadge:C,checkChessGuide:y,updatePokerChapter:D,checkPokerGuide:P,updateAttempt:J,updateUserTries:U,updatePuzzle:x,updateRating:Q,updateCorrectCount:I,fetchUserRating:k,updateFinalPuzzle:_,updateFinalQuestStatus:N,fetchFinalQuest:T,queryCollection:G,pokerQuiz:O,fetchPokerFinalQuest:R,updatePokerFinalQuestStatus:F,updatePokerFinalQuestID:v},children:t})}},8969:function(e,t,a){"use strict";a.d(t,{I:function(){return r},db:function(){return u}});var i=a(2860),l=a(3705),s=a(9555);let n=(0,i.ZF)({apiKey:"AIzaSyBrhkd7OBntivHeMyJ_qTrN904zh8KMGpk",authDomain:"guidance-a7165.firebaseapp.com",projectId:"guidance-a7165",storageBucket:"guidance-a7165.appspot.com",messagingSenderId:"153691782315",appId:"1:153691782315:web:9acf354f061ae722020bee",measurementId:"G-RWGPHX31D"}),u=(0,l.ad)(n),r=(0,s.v0)(n)},8877:function(){},936:function(e){e.exports={style:{fontFamily:"'__Inter_aaf875', '__Inter_Fallback_aaf875'",fontStyle:"normal"},className:"__className_aaf875"}}},function(e){e.O(0,[232,106,37,810,971,23,744],function(){return e(e.s=7610)}),_N_E=e.O()}]);