(function(t){function e(e){for(var a,n,s=e[0],u=e[1],c=e[2],l=0,d=[];l<s.length;l++)n=s[l],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&d.push(o[n][0]),o[n]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],a=!0,n=1;n<r.length;n++){var s=r[n];0!==o[s]&&(a=!1)}a&&(i.splice(e--,1),t=u(u.s=r[0]))}return t}var a={},n={app:0},o={app:0},i=[];function s(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"228ab797"}[t]+".js"}function u(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(t){var e=[],r={about:1};n[t]?e.push(n[t]):0!==n[t]&&r[t]&&e.push(n[t]=new Promise((function(e,r){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"6f71ecd5"}[t]+".css",o=u.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===a||l===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],l=c.getAttribute("data-href");if(l===a||l===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete n[t],f.parentNode.removeChild(f),r(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){n[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,r){a=o[t]=[e,r]}));e.push(a[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(t);var d=new Error;c=function(e){l.onerror=l.onload=null,clearTimeout(f);var r=o[t];if(0!==r){if(r){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",d.name="ChunkLoadError",d.type=a,d.request=n,r[1](d)}o[t]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=a,u.d=function(t,e,r){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)u.d(r,a,function(e){return t[e]}.bind(null,a));return r},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/proyectoswd2021/",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var f=l;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},1853:function(t,e,r){},"51a9":function(t,e,r){"use strict";r("1853")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("0cdd");var a=r("2b0e"),n=r("ecee"),o=r("ad3d"),i=r("c074");n["c"].add(i["b"]),n["c"].add(i["c"]),n["c"].add(i["a"]),a["default"].component("icons",o["a"]);var s=r("5f5b");r("ab8b"),r("2dd8");a["default"].use(s["a"]);var u=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"container-fluid"},[r("Menu"),t._v(" "),r("b-breadcrumb",{attrs:{items:t.items}}),r("router-view"),r("Footer")],1)])},c=[],l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"info"}},[r("b-navbar-brand",[t._v("CreARTive")]),r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),r("b-container",[r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",[r("b-nav-item",{staticClass:"nav-link",attrs:{to:"/home"}},[t._v("Home")]),r("b-nav-item",{staticClass:"nav-link",attrs:{to:"/about"}},[t._v("About")])],1)],1)],1)],1)},d=[],f={},p=f,m=(r("51a9"),r("2877")),v=Object(m["a"])(p,l,d,!1,null,"5b20f0c8",null),b=v.exports,h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-alert",{attrs:{show:""}},[r("b-link",{attrs:{href:"http://www.graudissenydigitalitec.udl.cat/"}},[t._v("Grado Diseño Digital y Tecnologías Creativas")]),t._v(" || "),r("b-link",{attrs:{href:"http://www.udl.cat/"}},[t._v("Universitat de Lleida")]),t._v(". ")],1)},g=[],y={},w=y,_=Object(m["a"])(w,h,g,!1,null,"524683b9",null),x=_.exports,j={name:"App",components:{Menu:b,Footer:x},data:function(){return{items:[{text:"Home",href:"/home",to:"/home"},{text:"Página actual",active:!0}]}}},C=j,O=(r("034f"),Object(m["a"])(C,u,c,!1,null,null,null)),k=O.exports,E=(r("d3b7"),r("8c4f")),P=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",{staticClass:"pb-2"},[r("icons",{attrs:{icon:["fas","award"]}}),t._v(" Lista de proyectos de los alumnos Curso 2020/2021 "),r("icons",{attrs:{icon:["fas","award"]}})],1),r("p",[t._v(" Aquí se muestra la lista de proyectos webs de de la asignatura de "),r("strong",[t._v("Web Dinámica")]),t._v(" de los alumnos del "),r("b-link",{attrs:{href:"http://www.graudissenydigitalitec.udl.cat/"}},[t._v("Grado Diseño Digital y Tecnologías Creativas")])],1),r("div",{staticClass:"container-md"},[r("b-card-group",{attrs:{columns:""}},t._l(t.proyectos,(function(t){return r("div",{key:t.id,attrs:{columns:""}},[r("Card2",{attrs:{autor:t.autor,srcimg:t.srcimg,alt:t.alt,titulo:t.titulo,texto:t.texto,url:t.url}})],1)})),0)],1)])},A=[],S=(r("96cf"),r("1da1")),T=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"20rem"},attrs:{title:t.titulo,"img-src":t.srcimg,"img-alt":t.alt,"img-top":"",footer:t.autor,tag:"proyecto"}},[r("b-card-text",[t._v(" "+t._s(t.texto)+" ")]),r("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"Ir a la página del proyecto",variant:"primary",href:t.url}},[t._v("Ir al proyecto")])],1)],1)},D=[],L={props:["id","autor","titulo","srcimg","alt","texto","url"]},M=L,H=Object(m["a"])(M,T,D,!1,null,"71fff84e",null),N=H.exports,$="../proyectosWD2021.json",B={props:{name:{type:String,default:"ListaProyectos"}},components:{Card2:N},data:function(){return{proyectos:[],githubPage:1,page:1,loading:!1,perPage:5}},mounted:function(){this.fetchData()},methods:{fetchData:function(){var t=this;return Object(S["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch($);case 2:return r=e.sent,e.next=5,r.json();case 5:a=e.sent,t.proyectos=a,console.log(a);case 8:case"end":return e.stop()}}),e)})))()}}},R=B,q=Object(m["a"])(R,P,A,!1,null,null,null),F=q.exports;a["default"].use(E["a"]);var G=[{path:"/",name:"Home",component:F},{path:"/Home",name:"Home",component:F},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],I=new E["a"]({mode:"history",base:"/proyectoswd2021/",routes:G}),J=I,U=r("a584");a["default"].use(U["a"],{config:{id:"G-6MEQBZ1R16"}}),a["default"].config.productionTip=!1,new a["default"]({router:J,render:function(t){return t(k)}}).$mount("#app")},"85ec":function(t,e,r){}});
//# sourceMappingURL=app.6bced89e.js.map