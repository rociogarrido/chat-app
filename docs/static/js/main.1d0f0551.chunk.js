(this["webpackJsonpchat-app"]=this["webpackJsonpchat-app"]||[]).push([[0],{44:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var c=n(12),a=n.n(c),r=n(35),i=n.n(r),s=n(0),o=n.n(s),u=n(1),j=n(15),d=(n(44),n(27)),p=(n(50),n(46),n(36)),b=n(37),l=n(13);d.a.initializeApp({apiKey:"AIzaSyAU7dYQmQ-IDxOCH9ii12_Xcl7anNHvcSI",authDomain:"chat-app-28c36.firebaseapp.com",projectId:"chat-app-28c36",storageBucket:"chat-app-28c36.appspot.com",messagingSenderId:"847767015991",appId:"1:847767015991:web:4e14be9d47dad562c925b2",measurementId:"G-W9D3B7TKNE"});var h=d.a.auth(),O=d.a.firestore();function m(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{className:"sign-in",onClick:function(){var e=new d.a.auth.GoogleAuthProvider;h.signInWithPopup(e)},children:"Sign in with Google"}),Object(l.jsx)("p",{children:"Do not violate the community guidelines or you will be banned for life!"})]})}function x(){return h.currentUser&&Object(l.jsx)("button",{className:"sign-out",onClick:function(){return h.signOut()},children:"Sign out"})}function f(){var e=Object(c.useRef)(),t=O.collection("messages"),n=t.orderBy("createdAt").limit(25),a=Object(b.a)(n,{idField:"id"}),r=Object(j.a)(a,1)[0],i=Object(c.useState)(""),s=Object(j.a)(i,2),p=s[0],m=s[1],x=function(){var n=Object(u.a)(o.a.mark((function n(c){var a,r,i;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c.preventDefault(),a=h.currentUser,r=a.uid,i=a.photoURL,n.next=4,t.add({text:p,createdAt:d.a.firestore.FieldValue.serverTimestamp(),uid:r,photoURL:i});case 4:m(""),e.current.scrollIntoView({behavior:"smooth"});case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("main",{children:[r&&r.map((function(e){return Object(l.jsx)(g,{message:e},e.id)})),Object(l.jsx)("span",{ref:e})]}),Object(l.jsxs)("form",{onSubmit:x,children:[Object(l.jsx)("input",{value:p,onChange:function(e){return m(e.target.value)},placeholder:"say something nice"}),Object(l.jsx)("button",{type:"submit",children:"\ud83d\udd4a\ufe0f"})]})]})}function g(e){var t=e.message,n=t.text,c=t.uid,a=t.photoURL,r=c===h.currentUser.uid?"sent":"received";return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"message ".concat(r),children:[Object(l.jsx)("img",{src:a||"https://api.adorable.io/avatars/23/abott@adorable.png",alt:"avatar"}),Object(l.jsx)("p",{children:n})]})})}var v=function(){var e=Object(p.a)(h),t=Object(j.a)(e,1)[0];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("header",{children:[Object(l.jsx)("h1",{children:"\u269b\ufe0f\ud83d\udd25 \ud83d\udcac "}),Object(l.jsx)(x,{})]}),Object(l.jsx)("section",{children:t?Object(l.jsx)(f,{}):Object(l.jsx)(m,{})})]})};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.1d0f0551.chunk.js.map