(this["webpackJsonpsearch-personajes"]=this["webpackJsonpsearch-personajes"]||[]).push([[0],{151:function(e,t,a){e.exports=a(310)},309:function(e,t,a){},310:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(29),s=a.n(r),i=a(19),l=a(320),o=function(e){var t=e.content;return c.a.createElement("div",{className:"Title"},c.a.createElement(l.a,{as:"h1"},t))},u=a(27),m=a.n(u),f=a(43),d=a(316),v=a(136),h=a.n(v),p=function(){var e=Object(f.a)(m.a.mark((function e(t){var a,n,c,r,s,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({offset:0,name:"",exactMatch:!1,limit:20},t),n=a.offset,c=a.name,r=a.exactMatch,s=a.limit,i="".concat("https://gateway.marvel.com:443/v1/public/characters?","ts=1&apikey=").concat("73cb1894c920601c4f358151ecbdcfeb","&hash=6bc88886294118d38cdc9a43a6194fdb&offset=").concat(n,"&limit=").concat(s),c&&(i+=r?"&name=".concat(c):"&nameStartsWith=".concat(c)),e.abrupt("return",new Promise(function(){var e=Object(f.a)(m.a.mark((function e(t,a){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get(i).then((function(e){return e.data}));case 3:n=e.sent,t(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),a(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}()));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(e){var t=e.onResults,a=e.offset,r=e.currentOffset,s=e.activePage,l=Object(n.useRef)(),o=Object(n.useState)(""),u=Object(i.a)(o,2),v=u[0],h=u[1],E=Object(n.useState)(!1),b=Object(i.a)(E,2),g=b[0],j=b[1];Object(n.useEffect)((function(){N()}),[a]);var N=function(){var e=Object(f.a)(m.a.mark((function e(){var n,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={offset:a,name:v,exactMatch:g,limit:20},e.next=3,p(n);case 3:c=e.sent,console.log(c),t(c.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"SearchBox"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),r(0),s(1)}},c.a.createElement("div",{className:"ui action input"},c.a.createElement("input",{type:"text",onChange:function(e){h(e.target.value)},placeholder:"Nombre del personaje...",ref:l}),c.a.createElement("button",{className:"ui button",onClick:N},"Search")),c.a.createElement(d.a,{name:"exactName",label:"Nombre Exacto",onChange:function(e){j(!g)}})))},b=a(317),g=function(e){var t=e.name,a=e.imagen,n=e.id;return c.a.createElement("a",{href:"?id=".concat(n),className:"ui card"},c.a.createElement("div",{className:"content-image"},c.a.createElement("img",{src:a.path+"."+a.extension,alt:n,style:{height:"100%",width:"100%"}})),c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"header"},t)))},j=function(e){var t=e.personajes;return c.a.createElement("div",{className:"list-personaje"},t.map((function(e){return c.a.createElement("div",{className:"item-personaje",key:e.id},c.a.createElement(g,{id:e.id,name:e.name,imagen:e.thumbnail}))})))},N=function(e){var t=e.name;return c.a.createElement("div",{className:"title-detail"},c.a.createElement("h1",{className:"ui header"},t))},O=function(e){var t=e.imagen,a=t.path,n=t.extension;return c.a.createElement("div",{className:"image-detail"},c.a.createElement("img",{src:a+"."+n,alt:"#"}))},x=function(e){var t=e.descr;return c.a.createElement("div",{className:"ui container"},c.a.createElement("h2",{className:"ui header"},"Descripci\xf3n"),c.a.createElement("p",null,""!==t?t:"No se encontro descripci\xf3n"))},w=function(e){var t=e.series;return 0===t.items.length?"No hay series para este personaje":c.a.createElement("div",{className:"list-series"},c.a.createElement("h2",{className:"ui header"},"Lista de Series"),t.items.map((function(e){return c.a.createElement("ul",{key:e.resourceURI},c.a.createElement("li",null,e.name))})))},y=a(319),k=a(38),P=function(e){var t=e.id,a=Object(n.useState)([]),r=Object(i.a)(a,2),s=r[0],l=r[1];Object(n.useEffect)((function(){o(t)}),[]);var o=function(e){fetch("".concat("https://gateway.marvel.com:443/v1/public/characters/").concat(e,"?ts=1&apikey=").concat("73cb1894c920601c4f358151ecbdcfeb","&hash=6bc88886294118d38cdc9a43a6194fdb")).then((function(e){return e.json()})).then((function(e){var t=e.data;console.log(t.results),l(t.results)}))},u=function(e){window.history.back()};return c.a.createElement("div",{className:"content-detail"},s.map((function(e){return c.a.createElement("div",{className:"detail",key:e.id},c.a.createElement(N,{name:e.name}),c.a.createElement(O,{imagen:e.thumbnail}),c.a.createElement("div",{className:"description-detail"},c.a.createElement(x,{descr:e.description}),c.a.createElement("br",null),c.a.createElement(w,{series:e.series})),c.a.createElement("div",{className:"button-detail"},c.a.createElement(y.a,{className:"ui blue basic button",onClick:u},c.a.createElement(k.a,{name:"arrow left"}),"Volver al Listado ")))})))},S=function(e){return c.a.createElement("div",{class:""},c.a.createElement("div",{class:"ui active transition visible inverted dimmer"},c.a.createElement("div",{class:"content"},c.a.createElement("div",{class:"ui text loader"},"Loading"))))};var C=function(e){var t=Object(n.useState)(null),a=Object(i.a)(t,2),r=a[0],s=a[1],l=Object(n.useState)(0),u=Object(i.a)(l,2),m=u[0],f=u[1],d=Object(n.useState)(0),v=Object(i.a)(d,2),h=v[0],p=v[1],g=Object(n.useState)(0),N=Object(i.a)(g,2),O=N[0],x=N[1],w=new URL(document.location);return w.searchParams.has("id")?c.a.createElement(P,{id:w.searchParams.get("id")}):c.a.createElement("div",{className:"Main-Container"},c.a.createElement(o,{content:"Buscar Personajes"}),c.a.createElement(E,{onResults:function(e){var t=Math.floor(e.total/e.limit);0===t?x(1):e.total%e.limit!==0&&x(t+1),s(null),s(e.results)},offset:h,currentOffset:p,activePage:f}),null===r?c.a.createElement(S,null):0===r.length?"No hay resultados":c.a.createElement(j,{personajes:r}),c.a.createElement("div",{className:"Paginator"},c.a.createElement(b.a,{activePage:m,onPageChange:function(e,t){f(t.activePage),p(20*(t.activePage-1))},totalPages:O,ellipsisItem:null})))};a(309);s.a.render(c.a.createElement(C,null),document.getElementById("root"))}},[[151,1,2]]]);
//# sourceMappingURL=main.4aaa2ffe.chunk.js.map