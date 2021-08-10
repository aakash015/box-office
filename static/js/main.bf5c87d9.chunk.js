(this["webpackJsonpbox-office"]=this["webpackJsonpbox-office"]||[]).push([[0],{35:function(n,e,t){},45:function(n,e,t){"use strict";t.r(e);var r,i,c,a,o,s,d,l,b,j=t(1),h=t(24),p=t.n(h),u=(t(35),t(4)),x=t(3),m=t(2),g=t(10),f=m.b.ul(r||(r=Object(x.a)(["\n  display: flex;\n  justify-content: center;\n  list-style: none;\n  margin: 0 0 30px;\n  padding: 0;\n"]))),O=Object(m.b)(g.b)(i||(i=Object(x.a)(["\n  margin: 0 10px;\n  padding: 3px 15px;\n  position: relative;\n  text-decoration: none;\n  color: ",";\n  &.active {\n    color: ",";\n    &:after {\n      content: '';\n      position: absolute;\n      display: block;\n      height: 2px;\n      left: 0%;\n      bottom: 0;\n      background-color: ",";\n      animation: slide-in 0.3s ease-in forwards;\n      @keyframes slide-in {\n        from {\n          left: 50%;\n          width: 0;\n        }\n        to {\n          left: 0%;\n          width: 100%;\n        }\n      }\n    }\n  }\n"])),(function(n){return n.theme.mainColors.gray}),(function(n){return n.theme.mainColors.blue}),(function(n){return n.theme.mainColors.blue})),v=t(0),w=[{to:"/",text:"Home"},{to:"/starred",text:"Starred"}],y=function(){var n=Object(u.f)();return Object(v.jsx)("div",{children:Object(v.jsx)(f,{children:w.map((function(e){return Object(v.jsx)("li",{children:Object(v.jsx)(O,{to:e.to,className:e.to===n.pathname?"active":"",children:e.text})},e.to)}))})})},k=t(6),S=t(28),C=t.n(S),N=Object(m.b)(C.a)(c||(c=Object(x.a)(["\n   \n   display: flex;\n   justify-content: center;\n   flex-wrap: wrap;\n\n"]))),E=m.b.div(a||(a=Object(x.a)(["\n  width: 300px;\n  height: 100%;\n  margin: 20px 15px 40px;\n\n  .img-wrapper {\n    width: 100%;\n    height: 420px;\n    overflow: hidden;\n    border: 1px solid #ddd;\n    img {\n      object-fit: cover;\n      height: 100%;\n      width: 100%;\n    }\n    \n  }\n\n\n \n  h1 {\n    margin: 10px 0;\n    font-size: 21px;\n  }\n\n  p {\n    margin: 0;\n  }\n"]))),D=m.b.div(o||(o=Object(x.a)(["\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n  /* background-color: #ffc806; */\n  background-color: ",";\n  clip-path: polygon(\n    50% 0%,\n    61% 35%,\n    98% 35%,\n    68% 57%,\n    79% 91%,\n    50% 70%,\n    21% 91%,\n    32% 57%,\n    2% 35%,\n    39% 35%\n  );\n"])),(function(n){return n.active?" #ffc806;":"#ddd"})),I=Object(m.b)(E)(s||(s=Object(x.a)(["\n  .deathday {\n    margin: 0;\n    margin-top: 15px;\n    font-weight: bold;\n  }\n"]))),A=function(n){var e=n.image,t=n.name,r=n.gender,i=n.country,c=n.birthday,a=n.deathday;return Object(v.jsxs)(I,{children:[Object(v.jsx)("div",{className:"img-wrapper",children:Object(v.jsx)("img",{src:e,alt:"actor"})}),Object(v.jsxs)("h1",{children:[t," ",r?"(".concat(r,")"):null]}),Object(v.jsx)("p",{children:i?"Comes from ".concat(i):"No country known"}),c?Object(v.jsxs)("p",{children:["Born ",c]}):null,Object(v.jsx)("p",{className:"deathday",children:a?"Died ".concat(a):"Alive"})]})},L=t.p+"static/media/not-found.6ba4af2e.png",F=function(n){var e=n.data;return Object(v.jsx)(N,{children:e.map((function(n){var e=n.person;return Object(v.jsx)(A,{name:e.name,country:e.country?e.country.name:null,birthday:e.birthday,deathday:e.deathday,gender:e.gender,image:e.image?e.image.medium:L},e.id)}))})},_=m.b.label(d||(d=Object(x.a)(["\n  display: block;\n  position: relative;\n  padding-left: 25px;\n  cursor: pointer;\n  font-size: 13px;\n  user-select: none;\n  font-weight: 700;\n  line-height: 1.65;\n\n  input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n  }\n\n  span {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 16px;\n    width: 16px;\n    background-color: #fff;\n    border: 2px solid ",";\n    border-radius: 50%;\n  }\n\n  input:checked ~ span {\n    background-color: #fff;\n    border: 2px solid ",";\n  }\n\n  span:after {\n    content: '';\n    position: absolute;\n    display: none;\n  }\n\n  input:checked ~ span:after {\n    display: block;\n  }\n\n  span:after {\n    top: 4px;\n    left: 4px;\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background: ",";\n  }\n"])),(function(n){return n.theme.mainColors.blue}),(function(n){return n.theme.mainColors.blue}),(function(n){return n.theme.mainColors.blue})),z=function(n){var e=n.label,t=n.id,r=n.value,i=n.onChange,c=n.checked;return Object(v.jsxs)(_,{htmlFor:t,children:[e,Object(v.jsx)("input",{id:t,type:"radio",value:r,onChange:i,checked:c}),Object(v.jsx)("span",{})]})},R=m.b.div(l||(l=Object(x.a)(["\n  text-align: center;\n  margin: 0 0 40px;\n\n  h1 {\n    color: ",";\n    letter-spacing: 10px;\n    text-transform: uppercase;\n    margin: 0 0 10px;\n  }\n\n  p {\n    color: ",";\n    margin: 0;\n  }\n"])),(function(n){return n.theme.mainColors.blue}),(function(n){return n.theme.mainColors.dark})),T=function(n){var e=n.title,t=n.subtitle;return Object(v.jsxs)(R,{children:[Object(v.jsx)("h1",{children:e}),Object(v.jsx)("p",{children:t})]})},H=function(n){return console.log("main page layout rendered"),Object(v.jsx)("div",{children:Object(v.jsxs)("div",{children:[Object(v.jsx)(T,{title:"Box Office",subtitle:"Are you looking for a movie or an actor?"}),Object(v.jsx)(y,{}),n.children]})})},J=Object(m.b)(E)(b||(b=Object(x.a)(["\n  .btns {\n    margin-top: 15px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    a {\n      text-decoration-color: #000;\n      color: #000;\n      &:hover {\n        text-decoration-color: blue;\n        color: blue;\n      }\n    }\n    button {\n      outline: none;\n      border: 1px solid #8e8e8e;\n      border-radius: 15px;\n      padding: 5px 20px;\n      background-color: #fff;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      &:hover {\n        cursor: pointer;\n      }\n    }\n  }\n"]))),B=function(n){var e=n.id,t=n.image,r=n.name,i=n.summary,c=n.onStarClick,a=n.isStarred,o=i?"".concat(i.split(" ").slice(0,10).join(" ").replace(/<.+?>/g,""),"..."):"No description";return Object(v.jsxs)(J,{children:[Object(v.jsx)("div",{className:"img-wrapper",children:Object(v.jsx)("img",{src:t,alt:"show"})}),Object(v.jsx)("h1",{children:r}),Object(v.jsx)("p",{children:o}),Object(v.jsxs)("div",{className:"btns",children:[Object(v.jsx)(g.b,{to:"/show/".concat(e),children:"Read more"}),Object(v.jsx)("button",{type:"button",onClick:c,children:Object(v.jsx)(D,{active:a})})]})]})},M=t(30);function P(n,e){switch(e.type){case"ADD":return console.log("state changed here"),[].concat(Object(M.a)(n),[e.showId]);case"REMOVE":return console.log("state changed here"),n.filter((function(n){return n!==e.showId}));default:return n}}function V(n,e,t){console.log("rendered");var r=Object(j.useReducer)(n,e,(function(n){console.log("this is inital"),console.log(n);var e=localStorage.getItem(t);return e?JSON.parse(e):n})),i=Object(k.a)(r,2),c=i[0],a=i[1];return Object(j.useEffect)((function(){console.log("useEffectrrr called"),localStorage.setItem(t,JSON.stringify(c))}),[c,t]),[c,a]}function U(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"shows";return console.log("use shows called "),V(P,[],n)}var W,q,K,Q=function(n){var e=n.data,t=U(),r=Object(k.a)(t,2),i=r[0],c=r[1];return console.log("show grid called"),Object(v.jsx)(N,{children:e.map((function(n){var e=i.includes(n.show.id);return Object(v.jsx)(B,{id:n.show.id,name:n.show.name,image:n.show.image?n.show.image.medium:L,summary:n.show.summary,isStarred:e,onStarClick:function(){c(e?{type:"REMOVE",showId:n.show.id}:{type:"ADD",showId:n.show.id})}},n.show.id)}))})},$=t(22),G=t.n($),X=t(29),Y="https://api.tvmaze.com";function Z(n){return nn.apply(this,arguments)}function nn(){return(nn=Object(X.a)(G.a.mark((function n(e){var t;return G.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(Y).concat(e)).then((function(n){return n.json()}));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var en,tn,rn,cn,an,on,sn,dn,ln,bn=m.b.input(W||(W=Object(x.a)(["\n  display: block;\n  font-family: 'Roboto', sans-serif;\n  width: 200px;\n  margin: auto;\n  outline: none;\n  padding: 13px 15px;\n  border: 1px solid #dbdbdb;\n  box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);\n  font-size: 14px;\n  border-radius: 12px;\n  color: #8d8d8d;\n\n  &::placeholder {\n    font-weight: 300;\n    color: #8d8d8d;\n  }\n"]))),jn=m.b.div(q||(q=Object(x.a)(["\n  display: flex;\n  justify-content: center;\n  margin: 20px 0;\n\n  div {\n    margin: 0 15px;\n  }\n"]))),hn=m.b.div(K||(K=Object(x.a)(["\n  text-align: center;\n  margin-bottom: 35px;\n  \n  button {\n    color: #fff;\n    background-color: ",";\n    margin: auto;\n    padding: 10px 50px;\n    font-size: 15px;\n    border: none;\n    outline: none;\n    border-radius: 12px;\n    &:hover {\n      cursor: pointer;\n    }\n  }\n"])),(function(n){return n.theme.mainColors.blue})),pn=function(){var n=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"lastQuery",e=Object(j.useState)((function(){var e=sessionStorage.getItem(n);return e?JSON.parse(e):""})),t=Object(k.a)(e,2),r=t[0],i=t[1];return[r,function(e){i(e),sessionStorage.setItem(n,JSON.stringify(e))}]}(),e=Object(k.a)(n,2),t=e[0],r=e[1],i=Object(j.useState)(null),c=Object(k.a)(i,2),a=c[0],o=c[1],s=Object(j.useState)("shows"),d=Object(k.a)(s,2),l=d[0],b=d[1];function h(){Z("/search/".concat(l,"?q=").concat(t)).then((function(n){o(n)}))}function p(n){b(n.target.value)}var u="shows"===l;return Object(v.jsx)("div",{children:Object(v.jsxs)(H,{children:[Object(v.jsx)(bn,{type:"text",onKeyDown:function(n){13===n.keyCode&&h()},onChange:function(n){return function(n){r(n.target.value)}(n)},value:t,placeholder:"Search for something"}),Object(v.jsxs)(jn,{children:[Object(v.jsx)(z,{label:"Shows",id:"shows-search",value:"shows",onChange:p,checked:u}),Object(v.jsx)("div",{children:Object(v.jsx)(z,{label:"Actors",id:"actors-search",value:"people",onChange:p,checked:!u})})]}),Object(v.jsx)(hn,{children:Object(v.jsx)("button",{type:"button",onClick:h,children:"Search"})}),a&&0===a.length?Object(v.jsx)("div",{children:"No Results"}):a&&a.length>0?Object(v.jsx)("div",{children:a[0].show?Object(v.jsx)(Q,{data:a}):Object(v.jsx)(F,{data:a})}):null]})})},un=t(16),xn=m.b.div(en||(en=Object(x.a)(["\n  display: flex;\n  flex-wrap: wrap;\n\n  .cast-item {\n    flex: 1 0 50%;\n    display: flex;\n    margin-bottom: 20px;\n    align-items: center;\n\n    @media only screen and (max-width: 768px) {\n      flex: 1 0 100%;\n    }\n  }\n\n  .pic-wrapper {\n    width: 50px;\n    min-width: 50px;\n    height: 50px;\n    overflow: hidden;\n    border-radius: 50%;\n    img {\n      object-fit: cover;\n      width: 100%;\n      height: 100%;\n    }\n  }\n\n  .actor {\n    margin-left: 25px;\n    \n    .bold {\n      font-weight: bold;\n    }\n  }\n"]))),mn=function(n){var e=n.cast;return Object(v.jsx)(xn,{children:e.map((function(n,e){var t=n.person,r=n.character,i=n.voice;return Object(v.jsxs)("div",{className:"cast-item",children:[Object(v.jsx)("div",{className:"pic-wrapper",children:Object(v.jsx)("img",{src:t.image?t.image.medium:L,alt:"cast-person"})}),Object(v.jsx)("div",{className:"actor",children:Object(v.jsxs)("span",{children:[Object(v.jsx)("span",{className:"bold",children:t.name})," | ",r.name," ",i?"| Voice":""]})})]},e)}))})},gn=m.b.div(tn||(tn=Object(x.a)(["\n  p {\n    margin: 5px 0;\n\n    span {\n      font-weight: bold;\n    }\n  }\n"]))),fn=function(n){var e=n.status,t=n.premiered,r=n.network;return Object(v.jsxs)(gn,{children:[Object(v.jsxs)("p",{children:["Status: ",Object(v.jsx)("span",{children:e})]}),Object(v.jsxs)("p",{children:["Premiered ",t," ",r?"on ".concat(r.name):null]})]})},On=m.b.div(rn||(rn=Object(x.a)(["\n  p {\n    margin: 5px 0;\n  }\n\n  span {\n    font-weight: 700;\n  }\n"]))),vn=m.b.div(cn||(cn=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n\n  .season-item {\n    display: flex;\n    align-items: center;\n    margin: 10px 0;\n\n    &:last-child {\n      margin-bottom: 0;\n    }\n\n    .left {\n      flex: 0 0 30%;\n      border-right: 1px solid #b0b0b0;\n      padding-right: 20px;\n    }\n\n    .right {\n      padding-left: 20px;\n      flex: 1;\n    }\n  }\n"]))),wn=function(n){var e=n.seasons;return Object(v.jsxs)(On,{children:[Object(v.jsxs)("p",{children:["Seasons in total: ",Object(v.jsx)("span",{children:e.length})]}),Object(v.jsxs)("p",{children:["Episodes in total:"," ",Object(v.jsx)("span",{children:e.reduce((function(n,e){return n+e.episodeOrder}),0)})]}),Object(v.jsx)(vn,{children:e.map((function(n){return Object(v.jsxs)("div",{className:"season-item",children:[Object(v.jsxs)("div",{className:"left",children:[Object(v.jsxs)("p",{children:["Season ",n.number]}),Object(v.jsxs)("p",{children:["Episodes: ",Object(v.jsx)("span",{children:n.episodeOrder})]})]}),Object(v.jsxs)("div",{className:"right",children:["Aired:"," ",Object(v.jsxs)("span",{children:[n.premiereDate," - ",n.endDate]})]})]},n.id)}))})]})},yn=m.b.div(an||(an=Object(x.a)(["\n  display: flex;\n  margin-bottom: 40px;\n\n  img {\n    min-width: 250px;\n    width: 300px;\n    max-height: 450px;\n    border: 1px solid #ddd;\n    border-radius: 40px;\n  }\n\n  .text-side {\n    margin-left: 20px;\n    .summary {\n      color: #5f5f5f;\n      line-height: 1.5;\n    }\n  }\n\n  @media only screen and (max-width: 768px) {\n    flex-wrap: wrap;\n    img {\n      margin-bottom: 20px;\n      margin: auto;\n    }\n    .text-side {\n      margin-left: 0;\n      margin-top: 20px;\n    }\n  }\n"]))),kn=m.b.div(on||(on=Object(x.a)(["\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n\n  h1 {\n    margin: 0;\n    border-right: 1px solid #ddd;\n    padding-right: 25px;\n    margin-right: 20px;\n  }\n\n  div {\n    display: flex;\n    align-items: center;\n    span {\n      margin-left: 10px;\n    }\n  }\n"]))),Sn=m.b.div(sn||(sn=Object(x.a)(["\n  display: inline-flex;\n  flex-wrap: wrap;\n\n  span {\n    margin: 6px;\n    margin-bottom: 0;\n    color: blue;\n    background-color: #d0c9ff;\n    padding: 3px 13px;\n    border-radius: 20px;\n    font-size: 14px;\n  }\n"]))),Cn=function(n){var e=n.name,t=n.rating,r=n.summary,i=n.tags,c=n.image;return Object(v.jsxs)(yn,{children:[Object(v.jsx)("img",{src:c?c.original:L,alt:"show-cover"}),Object(v.jsxs)("div",{className:"text-side",children:[Object(v.jsxs)(kn,{children:[Object(v.jsx)("h1",{children:e}),Object(v.jsxs)("div",{children:[Object(v.jsx)(D,{active:!0}),Object(v.jsx)("span",{children:t.average||"N/A"})]})]}),Object(v.jsx)("div",{className:"summary",dangerouslySetInnerHTML:{__html:r}}),Object(v.jsxs)("div",{children:["Tags:"," ",Object(v.jsx)(Sn,{children:i.map((function(n,e){return Object(v.jsx)("span",{children:n},e)}))})]})]})]})},Nn=m.b.div(dn||(dn=Object(x.a)(["\n  padding: 0 20px;\n\n  @media only screen and (min-width: 516px) {\n    padding: 0 40px;\n  }\n\n  @media only screen and (min-width: 768px) {\n    padding: 0 60px;\n  }\n\n  @media only screen and (min-width: 992px) {\n    padding: 0 80px;\n  }\n"]))),En=m.b.div(ln||(ln=Object(x.a)(["\n  margin-bottom: 40px;\n  h2 {\n    margin: 0;\n    margin-bottom: 30px;\n    font-size: 22px;\n  }\n"])));var Dn=function(){var n=Object(u.g)().id,e=Object(j.useReducer)((function(n,e){switch(e.type){case"FETCH_SUCCESS":return Object(un.a)(Object(un.a)({},n),{},{isLoading:!1,error:null,show:e.show});case"FETCH_FAILED":return Object(un.a)(Object(un.a)({},n),{},{isLoading:!1,error:e.error});default:return n}}),{show:null,isLoading:!0,error:null}),t=Object(k.a)(e,2),r=t[0],i=t[1];console.log("this is state"),console.log(r);var c=r.show,a=r.isLoading,o=r.error;return Object(j.useEffect)((function(){console.log("useEffectrun");var e=!0;return Z("/shows/".concat(n,"?embed[]=seasons&embed[]=cast")).then((function(n){e&&setTimeout((function(){i({type:"FETCH_SUCCESS",show:n})}),2e3)})).catch((function(n){e&&i({type:"FETCH_FAILED",error:n.message})})),function(){e=!1}}),[n]),a?(console.log("isLoading rerendered"),Object(v.jsx)("div",{children:"Data is being loaded"})):o?(console.log("Error in data loading rendered"),Object(v.jsx)("div",{children:"Error in data loading"})):Object(v.jsxs)(Nn,{children:[Object(v.jsx)(Cn,{image:c.image,name:c.name,rating:c.rating,summary:c.summary,tags:c.genres}),Object(v.jsxs)(En,{children:[Object(v.jsx)("h2",{children:"Details"}),Object(v.jsx)(fn,{status:c.status,network:c.network,premiered:c.premiered})]}),Object(v.jsxs)(En,{children:[Object(v.jsx)("h2",{children:"Seasons"}),Object(v.jsx)(wn,{seasons:c._embedded.seasons})]}),Object(v.jsxs)(En,{children:[Object(v.jsx)("h2",{children:"Cast"}),Object(v.jsx)(mn,{cast:c._embedded.cast})]})]})},In=function(){var n=U(),e=Object(k.a)(n,1)[0],t=Object(j.useState)(null),r=Object(k.a)(t,2),i=r[0],c=r[1],a=Object(j.useState)(!0),o=Object(k.a)(a,2),s=o[0],d=o[1],l=Object(j.useState)(null),b=Object(k.a)(l,2),h=b[0],p=b[1];return Object(j.useEffect)((function(){if(e&&e.length>0){var n=e.map((function(n){return Z("/shows/".concat(n))}));Promise.all(n).then((function(n){return console.log("apidata",n),n.map((function(n){return{show:n}}))})).then((function(n){console.log("results",n),c(n),d(!1)})).catch((function(n){p(n.message),d(!1)}))}else d(!1)}),[e]),Object(v.jsx)("div",{children:Object(v.jsxs)(H,{children:[s&&Object(v.jsx)("div",{children:"Data is Loading"}),h&&Object(v.jsx)("div",{children:"Error Occured"}),!s&&!i&&Object(v.jsx)("div",{children:"No Starred Shows"}),!s&&!h&&i&&Object(v.jsx)(Q,{data:i})]})})},An={mainColors:{blue:"#2400ff",gray:"#c6c6c6",dark:"#353535"}};var Ln=function(){return Object(v.jsx)(m.a,{theme:An,children:Object(v.jsxs)(u.c,{children:[Object(v.jsx)(u.a,{exact:!0,path:"/",children:Object(v.jsx)(pn,{})}),Object(v.jsx)(u.a,{exact:!0,path:"/starred",children:Object(v.jsx)(In,{})}),Object(v.jsxs)(u.a,{exact:!0,path:"/show/:id",children:["  ",Object(v.jsx)(Dn,{})]}),Object(v.jsx)(u.a,{children:"Page Not Found"})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));p.a.render(Object(v.jsx)(g.a,{children:Object(v.jsx)(Ln,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.bf5c87d9.chunk.js.map