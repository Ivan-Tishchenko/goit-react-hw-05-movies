"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[247],{247:function(n,t,r){r.r(t);var e=r(439),o=r(689),u=r(791),c=r(276),i=r(184);t.default=function(n){var t=(0,o.UO)().movieId,r=(0,u.useState)([]),a=(0,e.Z)(r,2),s=a[0],f=a[1];return(0,u.useEffect)((function(){(0,c.$H)(t).then((function(n){f(n.cast)})).catch((function(n){return console.log(n)}))}),[]),(0,i.jsx)("ul",{children:s.map((function(n){return(0,i.jsxs)("li",{children:[(0,i.jsx)("img",{src:n.profile_path&&"https://image.tmdb.org/t/p/w200".concat(n.profile_path),alt:n.name}),(0,i.jsx)("p",{children:n.name})]},n.id)}))})}},276:function(n,t,r){function e(n,t,r,e,o,u,c){try{var i=n[u](c),a=i.value}catch(s){return void r(s)}i.done?t(a):Promise.resolve(a).then(e,o)}function o(n){return function(){var t=this,r=arguments;return new Promise((function(o,u){var c=n.apply(t,r);function i(n){e(c,o,u,i,a,"next",n)}function a(n){e(c,o,u,i,a,"throw",n)}i(void 0)}))}}r.d(t,{$H:function(){return h},GN:function(){return f},Jc:function(){return s},A9:function(){return p},TS:function(){return a}});var u=r(757),c=r.n(u),i={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMTljYWY1YjZiNzk0ZDRlMDZhYTBlNDcwNTEyZmM1OCIsInN1YiI6IjY0NzFhNmNhOTQwOGVjMDEzZTgwMTEwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7V-KaDkXGjw3QR_sCxenQfJfiW4LhZBy_Qg8BbJLdsY"}},a=function(){var n=o(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.themoviedb.org/3/trending/all/day?language=en-US",i).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()})).then((function(n){return n})).catch((function(n){return console.error(n)}));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=o(c().mark((function n(t){var r,e,o=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=o.length>1&&void 0!==o[1]?o[1]:1,n.next=3,fetch("https://api.themoviedb.org/3/search/movie?query=".concat(t.split(" ").join("%20"),"&include_adult=false&language=en-US&page=").concat(r),i).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()})).then((function(n){return n})).catch((function(n){return console.error(n)}));case 3:return e=n.sent,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=o(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"?language=en-US"),i).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()})).then((function(n){return n})).catch((function(n){return console.error(n)}));case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=o(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?language=en-US"),i).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()})).then((function(n){return n})).catch((function(n){return console.error(n)}));case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=o(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?language=en-US&page=1"),i).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()})).then((function(n){return n})).catch((function(n){return console.error(n)}));case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=247.6fc57182.chunk.js.map