(this["webpackJsonpelder-scrolls-legends-card-viewer"]=this["webpackJsonpelder-scrolls-legends-card-viewer"]||[]).push([[0],{109:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(18),o=(a(58),a(59),a(24)),s=a(9),l=a(10),i=a(41),d=a(21),u=a(16),m=a.n(u),h=a(26),p=a(42),f=a(43),v=a(27),S=a.n(v);var _,g=function(){function e(t){Object(p.a)(this,e),this.cardsApiUrl=void 0,this.cardsApiUrl=t||"".concat("https://api.elderscrollslegends.io","/v1/cards")}return Object(f.a)(e,[{key:"fetchCards",value:function(){return S.a.get(this.cardsApiUrl,{params:{pageSize:20}}).then((function(e){return e.data}))}},{key:"searchByName",value:function(e){return S.a.get(this.cardsApiUrl,{params:{name:e,pageSize:20}}).then((function(e){return e.data}))}}]),e}(),y="esl_getCards",C="esl_updateGetCardsFetchState",E="esl_failureGetCardsFetchState",b="esl_addCards",N="esl_setCards",j="esl_resetSearchState",L={getCards:function(){var e=this;return(function(){var t=Object(h.a)(m.a.mark((function t(a,r){var n,c,o,s,l,i,d,u,h,p,f;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,l=r().cardState,i=(null===(n=l.cards)||void 0===n?void 0:n.length)||0,!(void 0!==(d=null===(c=l.cardListInfo.searchResponse)||void 0===c?void 0:c._totalCount)&&i>=d)){t.next=6;break}return t.abrupt("return");case 6:return a(e.updateGetCardsFetchState()),u=null===(o=l.cardListInfo.searchResponse)||void 0===o?void 0:null===(s=o._links)||void 0===s?void 0:s.next,h=new g(u),t.next=11,h.fetchCards();case 11:p=t.sent,f=p.cards,p.cards=[],a({type:b,payload:f}),a({type:y,payload:p}),t.next=22;break;case 18:t.prev=18,t.t0=t.catch(0),console.debug(t.t0),a(e.failureGetCardsFetchState(t.t0.toString()));case 22:case"end":return t.stop()}}),t,null,[[0,18]])})));return function(e,a){return t.apply(this,arguments)}}())},searchCardsByName:function(e){var t=this;return(function(){var a=Object(h.a)(m.a.mark((function a(r){var n,c,o;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,r({type:N,payload:[]}),r(t.updateGetCardsFetchState()),n=new g,a.next=6,n.searchByName(e);case 6:c=a.sent,o=c.cards,c.cards=[],console.log(c,"<< Search",o),r({type:N,payload:o}),r({type:y,payload:c}),a.next=17;break;case 14:a.prev=14,a.t0=a.catch(0),r(t.failureGetCardsFetchState(a.t0.toString()));case 17:case"end":return a.stop()}}),a,null,[[0,14]])})));return function(e){return a.apply(this,arguments)}}())},resetSearchState:function(){return function(e){e({type:j}),e({type:N,payload:[]})}},updateGetCardsFetchState:function(){return function(e){e({type:C})}},failureGetCardsFetchState:function(e){return function(t){t({type:E,payload:e})}}};!function(e){e[e.Loading=0]="Loading",e[e.Success=1]="Success",e[e.Error=2]="Error"}(_||(_={}));var O=Object(l.c)({cardListInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{searchResponse:null,fetchState:_.Success,error:""},t=arguments.length>1?arguments[1]:void 0;return t.type===y?{searchResponse:t.payload,fetchState:_.Success,error:e.error}:t.type===C?{searchResponse:e.searchResponse,fetchState:_.Loading,error:e.error}:t.type===E?{searchResponse:e.searchResponse,fetchState:_.Error,error:t.payload}:t.type===j?{searchResponse:null,fetchState:_.Success,error:""}:e},cards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return t.type===b?[].concat(Object(d.a)(e),Object(d.a)(t.payload)):t.type===N?Object(d.a)(t.payload):e}}),x=a(44),w=Object(l.c)({cardState:O}),k=Object(x.createLogger)({}),G=Object(l.d)(w,Object(l.a)(i.a,k)),R=a(45),B=a.n(R),F=a(11),H=a(46),I=a.n(H);function U(e){var t=e.className;return n.a.createElement("div",{className:"NoMatch ".concat(I.a.NoMatch," ").concat(null!==t&&void 0!==t?t:"")},n.a.createElement("div",{className:"error"},"Page not found"))}var A=a(20),J=a(47),T=a.n(J);function z(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(t||[]).filter((function(e){return!!e})).join(" ")}var K=a(17),M=a.n(K),P=a(13),W=a.n(P),Y=function(e){var t,a=e.className,r=e.card,c=function(e,t){return t?n.a.createElement("div",{className:W.a.property},n.a.createElement("span",{className:W.a.title},e),n.a.createElement("span",null,t)):null};return n.a.createElement("div",{className:z("Card",W.a.Card,a)},n.a.createElement("div",{className:z(W.a.name,r.rarity)},r.name),n.a.createElement("img",{className:W.a.image,src:r.imageUrl,alt:r.name}),n.a.createElement("div",{className:W.a.description},c("Text",r.text),c("Set",null===(t=r.set)||void 0===t?void 0:t.name),c("Type",r.type)))},D=a(48),q=a.n(D),Q=a(49),$=function(e){var t=e.className,a=e.loading;return n.a.createElement("div",{className:z("Loader",q.a.Loader,t)},n.a.createElement(Q.PropagateLoader,{size:40,loading:a,color:"#0078d4"}))},V=function(e){var t,a=e.className,r=Object(s.c)((function(e){return e.cardState.cardListInfo})),c=r.fetchState,o=r.error,l=Object(s.c)((function(e){return e.cardState.cards})),i=function(e){return n.a.createElement(Y,{key:e.id,card:e})};return n.a.createElement("div",{className:z("CardGrid",M.a.CardGrid,a)},(t=l,n.a.createElement("div",{className:"".concat(M.a.cardList," card-list")}," ",(t||[]).map(i))),n.a.createElement($,{loading:c===_.Loading}),0===l.length&&c!==_.Loading&&c!==_.Error&&n.a.createElement("div",{className:M.a.noResults},"No results"),c===_.Error&&n.a.createElement("div",{className:M.a.error},o))},X=a(50),Z=a.n(X),ee=function(e){var t=e.className,a=e.children,r=e.onScroll,c=e.onScrollBottom,o=function(e){if(c){var t=e.target;t.scrollTop+t.clientHeight+5>=t.scrollHeight&&c()}};return n.a.createElement("div",{className:z("ScrollContainer",Z.a.ScrollContainer,t),onScroll:function(e){r&&r(e),o(e)}},a)},te=a(28),ae=a.n(te),re=a(51),ne=a.n(re),ce=function(e){var t=e.className,a=e.onSeach,c=e.onReset,o=Object(r.useState)(""),s=Object(A.a)(o,2),l=s[0],i=s[1];return n.a.createElement("div",{className:z("Search",ae.a.Search,t)},n.a.createElement(ne.a,{className:ae.a.search,placeholder:"Search by name",onChange:function(e){!e&&c&&c(),i(e)},onKeyDown:function(e){"Enter"===e.key&&a&&a(l)}}),n.a.createElement("button",{onClick:function(){a&&a(l)},disabled:!l.trim()},"Search"))};function oe(e){var t=e.className,a=Object(r.useState)(!1),c=Object(A.a)(a,2),o=c[0],l=c[1],i=Object(s.b)(),d=Object(s.c)((function(e){return e.cardState.cards})),u=Object(s.c)((function(e){return e.cardState.cardListInfo})),m=u.fetchState,h=u.searchResponse;Object(r.useEffect)((function(){(null===d||void 0===d?void 0:d.length)||i(L.getCards())}),[]);return n.a.createElement("div",{className:z("Home",T.a.Home,t)},n.a.createElement(ee,{onScrollBottom:function(){((null===d||void 0===d?void 0:d.length)||0)!==(null===h||void 0===h?void 0:h._totalCount)&&m!==_.Loading&&i(L.getCards())}},n.a.createElement(ce,{onSeach:function(e){e.trim()&&(l(!0),i(L.searchCardsByName(e.trim())))},onReset:function(){o&&(l(!1),i(L.resetSearchState()),i(L.getCards()))}}),n.a.createElement(V,null)))}function se(e){var t=e.className;return n.a.createElement("div",{className:"Shell ".concat(B.a.Shell," ").concat(null!==t&&void 0!==t?t:"")},n.a.createElement(F.c,null,n.a.createElement(F.a,{exact:!0,path:"/",render:function(e){return n.a.createElement(oe,e)}}),n.a.createElement(F.a,{component:U})))}var le=function(){return n.a.createElement(o.a,null,n.a.createElement(s.a,{store:G},n.a.createElement(se,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));Object(c.render)(n.a.createElement(le,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},13:function(e,t,a){e.exports={Card:"Card_Card__13KuB",name:"Card_name__1JNoW",image:"Card_image__hYcBS",description:"Card_description__2S1dL",property:"Card_property__miSIb",title:"Card_title__3msqo"}},17:function(e,t,a){e.exports={CardGrid:"CardGrid_CardGrid__1sPE3",cardList:"CardGrid_cardList__28h8Q",noResults:"CardGrid_noResults__xeT67",error:"CardGrid_error__vtpKJ"}},28:function(e,t,a){e.exports={Search:"Search_Search__2nItf",search:"Search_search__LkDYF"}},45:function(e,t,a){e.exports={Shell:"Shell_Shell__UHY2-"}},46:function(e,t,a){},47:function(e,t,a){e.exports={Home:"Home_Home__1yJ2M"}},48:function(e,t,a){e.exports={Loader:"Loader_Loader__25h87"}},50:function(e,t,a){e.exports={ScrollContainer:"ScrollContainer_ScrollContainer__3EiLv"}},53:function(e,t,a){e.exports=a(109)},58:function(e,t,a){},59:function(e,t,a){}},[[53,1,2]]]);
//# sourceMappingURL=main.496343c0.chunk.js.map