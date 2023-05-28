"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[115],{115:function(n,t,e){e.r(t);var r=e(439),o=e(87),u=e(689),c=e(791),a=e(276),i=e(184);t.default=function(n){var t=(0,o.lr)(),e=(0,r.Z)(t,2),s=e[0],f=e[1],h=(0,c.useState)(""),p=(0,r.Z)(h,2),l=p[0],d=p[1],v=(0,c.useState)([]),m=(0,r.Z)(v,2),w=m[0],g=m[1],y=(0,u.TH)();(0,c.useEffect)((function(){d(s.get("query"))}),[s]);return(0,c.useEffect)((function(){l&&(0,a.Jc)(l).then((function(n){return g(n.results)})).catch((function(n){return console.log(n)}))}),[l]),(0,i.jsxs)("section",{children:[(0,i.jsxs)("form",{action:"query",onSubmit:function(n){n.preventDefault(),f("query=".concat(n.target.children.finder.value)),n.currentTarget.reset()},children:[(0,i.jsx)("input",{type:"text",name:"finder",id:"finder",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,i.jsx)("button",{type:"submit",children:"search"})]}),(0,i.jsx)("ul",{children:null===w||void 0===w?void 0:w.map((function(n){return(0,i.jsx)("li",{children:(0,i.jsx)(o.rU,{to:"/movies/".concat(n.id),state:{from:"".concat(y.pathname).concat(y.search)},children:n.original_title})},n.id)}))})]})}},276:function(n,t,e){function r(n,t,e,r,o,u,c){try{var a=n[u](c),i=a.value}catch(s){return void e(s)}a.done?t(i):Promise.resolve(i).then(r,o)}function o(n){return function(){var t=this,e=arguments;return new Promise((function(o,u){var c=n.apply(t,e);function a(n){r(c,o,u,a,i,"next",n)}function i(n){r(c,o,u,a,i,"throw",n)}a(void 0)}))}}e.d(t,{$H:function(){return h},GN:function(){return f},Jc:function(){return s},A9:function(){return p},TS:function(){return i}});var u=e(757),c=e.n(u),a={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMTljYWY1YjZiNzk0ZDRlMDZhYTBlNDcwNTEyZmM1OCIsInN1YiI6IjY0NzFhNmNhOTQwOGVjMDEzZTgwMTEwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7V-KaDkXGjw3QR_sCxenQfJfiW4LhZBy_Qg8BbJLdsY"}},i=function(){var n=o(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.themoviedb.org/3/trending/all/day?language=en-US",a).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()})).then((function(n){return n})).catch((function(n){return console.error(n)}));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=o(c().mark((function n(t){var e,r,o=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=o.length>1&&void 0!==o[1]?o[1]:1,n.next=3,fetch("https://api.themoviedb.org/3/search/movie?query=".concat(t.split(" ").join("%20"),"&include_adult=false&language=en-US&page=").concat(e),a).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()})).then((function(n){return n})).catch((function(n){return console.error(n)}));case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=o(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"?language=en-US"),a).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()})).then((function(n){return n})).catch((function(n){return console.error(n)}));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=o(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?language=en-US"),a).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()})).then((function(n){return n})).catch((function(n){return console.error(n)}));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=o(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?language=en-US&page=1"),a).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()})).then((function(n){return n})).catch((function(n){return console.error(n)}));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=115.0091a990.chunk.js.map