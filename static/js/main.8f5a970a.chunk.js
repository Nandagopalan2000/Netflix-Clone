(this["webpackJsonpreact-netflix-clone"]=this["webpackJsonpreact-netflix-clone"]||[]).push([[0],{41:function(e,t,a){},42:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(32),i=a.n(n),r=(a(41),a(11)),o=a(3),l=a(2),d=a(21),j=(a(42),a(13)),b=a(6),u=a.n(b),h="https://image.tmdb.org/t/p/original",m="https://image.tmdb.org/t/p/w500",p=a(35),f=a.n(p).a.create({baseURL:"https://api.themoviedb.org/3/"}),v=a(0),O=1;var g=function(e){var t=e.cardsArray,a=e.title,s=void 0===a?"Loading..":a,n=e.getNewCardsUrl,i=e.type,r=void 0===i?"movie":i,o=Object(c.useState)(),b=Object(l.a)(o,2),m=b[0],p=b[1],g=Object(c.useState)(),x=Object(l.a)(g,2),N=x[0],w=x[1];Object(c.useEffect)((function(){u()(window).scroll((function(){(u()(window).scrollTop()+u()(window).height())/u()(document).height()*100>89&&y()}))}),[]);var y=function(){O++,f.get(n+O).then((function(e){var t=e.data.results;console.log(t),p((function(e){return[].concat(Object(d.a)(e),Object(d.a)(t))}))}))};return Object(c.useEffect)((function(){0!==t.length&&f.get("".concat(r,"/").concat(t[[Math.floor(Math.random()*t.length)]].id,"/videos?api_key=").concat("2a4afa027d254745d262a88cce34ee48","&language=en-US")).then((function(e){if(0!==e.data.results.length){var t=e.data.results[0];w(t.key)}})),p(t)}),[t]),Object(v.jsxs)("div",{className:"video-cards-wrapper",children:[Object(v.jsx)("div",{className:"video-cards-title-wrapper",children:Object(v.jsx)("h2",{children:s})}),N&&Object(v.jsx)(j.a,{videoId:N,opts:{playerVars:{autoplay:1}},className:"youtube-video"}),Object(v.jsx)("div",{className:"video-card-row",children:m&&m.map((function(e,t){return e.poster_path?Object(v.jsxs)("div",{className:"video-card",onClick:function(){var t;t=e.id,f.get("movie/".concat(t,"/videos?api_key=").concat("2a4afa027d254745d262a88cce34ee48","&language=en-US")).then((function(e){if(0!==e.data.results.length){var t=e.data.results[0];w(t.key),window.scrollTo({top:0,left:0,behavior:"smooth"})}else alert("Sorry, No related videos found in YouTube..!")})).catch((function(e){console.log(e),alert("Sorry, No related videos found in YouTube..!")}))},children:[Object(v.jsx)("div",{className:"dark-shade-top"}),Object(v.jsx)("img",{src:"".concat(h+e.poster_path),alt:e.title}),Object(v.jsx)("i",{className:"far fa-play-circle video-cards-play-button fa-3x text-white"}),Object(v.jsxs)("div",{className:"video-card-text-wrapper",children:[Object(v.jsx)("h4",{className:"text-white",children:e.title}),Object(v.jsx)("p",{className:"text-white",children:e.overview.substring(0,120)+"..."})]}),Object(v.jsx)("div",{className:"dark-shade-bottom"})]},t):null}))})]})};var x=function(e){var t=Object(c.useState)(),a=Object(l.a)(t,2),n=a[0],i=a[1];return Object(c.useEffect)((function(){f.get("movie/upcoming?api_key=".concat("2a4afa027d254745d262a88cce34ee48","&language=en-US&page=1")).then((function(e){var t=e.data.results;i(t)}))}),[]),Object(v.jsx)(s.a.Fragment,{children:Object(v.jsx)(g,{title:n?"Upcoming Movies":"Loading..",cardsArray:n||[],getNewCardsUrl:"movie/upcoming?api_key=".concat("2a4afa027d254745d262a88cce34ee48","&language=en-US&page="),type:"movie"})})};var N=function(e){var t=Object(c.useState)(),a=Object(l.a)(t,2),n=a[0],i=a[1];return Object(c.useEffect)((function(){f.get("discover/movie?api_key=".concat("2a4afa027d254745d262a88cce34ee48","&with_genres=10751&page=1")).then((function(e){var t=e.data.results;i(t)}))}),[]),Object(v.jsx)(s.a.Fragment,{children:Object(v.jsx)(g,{cardsArray:n||[],getNewCardsUrl:"discover/movie?api_key=".concat("2a4afa027d254745d262a88cce34ee48","&with_genres=10751&page="),title:n?"Family Films":"Loading..",type:"movie"})})};a(74);var w=function(e){var t=e.imageUrl,a=e.title,n=e.subtitle,i=e.id,r=Object(c.useState)(),o=Object(l.a)(r,2),d=o[0],b=o[1];return Object(v.jsxs)(s.a.Fragment,{children:[Object(v.jsxs)("div",{className:"header-banner lozad",style:{backgroundColor:"#222222e6",backgroundImage:"url(".concat(t,")")},children:[Object(v.jsx)("div",{className:"dark-shade-top"}),Object(v.jsxs)("div",{className:"left-inner",children:[Object(v.jsx)("h1",{className:"main-title",children:a}),Object(v.jsx)("h4",{className:"sub-title",children:n}),Object(v.jsxs)("div",{className:"buttons-section",children:[Object(v.jsxs)("button",{className:"btn play-button",onClick:function(){!function(e){f.get("movie/".concat(e,"/videos?api_key=").concat("2a4afa027d254745d262a88cce34ee48","&language=en-US")).then((function(e){if(console.log(e.data),0!==e.data.results.length){console.log(e.data.results[0]);var t=e.data.results[0];b(t.key)}else alert("Sorry, No related videos found in YouTube..!")})).catch((function(e){console.log(e),alert("Sorry, No related videos found in YouTube..!")}))}(i)},children:[Object(v.jsx)("i",{className:"fas fa-play"})," Play"]}),Object(v.jsxs)("button",{className:"btn btn-secondary",children:[Object(v.jsx)("i",{className:"fas fa-plus"})," My Playlist"]})]})]}),Object(v.jsx)("div",{className:"dark-shade-bottom"})]}),d&&Object(v.jsx)(j.a,{videoId:d,opts:{playerVars:{autoplay:1}},className:"youtube-video"})]})},y=(a(75),a(76),a(16)),k=a.n(y);var _=function(e){var t=e.postersTitle,a=e.postersList,n=Object(c.useState)(!1),i=Object(l.a)(n,2),r=i[0],o=i[1],d=Object(c.useState)(),b=Object(l.a)(d,2),u=b[0],h=b[1];Object(c.useEffect)((function(){o(Boolean(window.innerWidth<767))}),[]),Object(c.useEffect)((function(){k()().observe()}));var p,O=function(e){f.get("movie/".concat(e,"/videos?api_key=").concat("2a4afa027d254745d262a88cce34ee48","&language=en-US")).then((function(e){if(console.log(e.data),0!==e.data.results.length){console.log(e.data.results[0]);var t=e.data.results[0];h(t.key)}else alert("Sorry, No related videos found in YouTube..!")})).catch((function(e){console.log(e),alert("Sorry, No related videos found in YouTube..!")}))};return Object(v.jsxs)(s.a.Fragment,{children:[Object(v.jsx)("div",{className:"posters-title",children:Object(v.jsx)("h3",{children:t})}),r?Object(v.jsx)(s.a.Fragment,{children:a.length>0&&a.map((function(e,t){return(t+1)%2===0?Object(v.jsxs)("div",{className:"posters-wrapper",children:[Object(v.jsxs)("div",{onClick:function(){O(e.id)},className:"poster-card",children:[Object(v.jsx)("div",{className:"dark-fade-top"}),Object(v.jsx)("img",{className:"img lozad","data-src":m+e.poster_path,style:{backgroundColor:"#222222e6"},alt:e.title}),Object(v.jsx)("div",{className:"play-button-wrapper"}),Object(v.jsxs)("div",{className:"poster-text-wrapper",children:[Object(v.jsx)("h5",{className:"poster-title",children:p.title}),Object(v.jsx)("p",{className:"poster-subtitle",children:p.overview.substring(0,90)+"..."})]}),Object(v.jsx)("div",{className:"dark-fade-bottom"})]}),Object(v.jsxs)("div",{onClick:function(){O(p.id)},className:"poster-card",children:[Object(v.jsx)("div",{className:"dark-fade-top"}),Object(v.jsx)("img",{className:"img lozad","data-src":m+p.poster_path,style:{backgroundColor:"#222222e6"},alt:e.title}),Object(v.jsx)("div",{className:"play-button-wrapper"}),Object(v.jsxs)("div",{className:"poster-text-wrapper",children:[Object(v.jsx)("h5",{className:"poster-title",children:e.title}),Object(v.jsx)("p",{className:"poster-subtitle",children:e.overview.substring(0,90)+"..."})]}),Object(v.jsx)("div",{className:"dark-fade-bottom"})]})]},t):(p=e,null)}))}):Object(v.jsx)("div",{className:"posters-wrapper",children:a.length>0&&a.map((function(e,t){return Object(v.jsxs)("div",{onClick:function(){O(e.id)},className:"poster-card",children:[Object(v.jsx)("div",{className:"dark-fade-top"}),Object(v.jsx)("img",{className:"img lozad","data-src":m+e.poster_path,style:{background:"#222222e6"},alt:e.title}),Object(v.jsx)("div",{className:"play-button-wrapper"}),Object(v.jsxs)("div",{className:"poster-text-wrapper",children:[Object(v.jsx)("h5",{className:"poster-title",children:e.title}),Object(v.jsx)("p",{className:"poster-subtitle",children:e.overview.substring(0,75)+"..."})]}),Object(v.jsx)("div",{className:"dark-fade-bottom"})]},t)}))}),u&&Object(v.jsx)(j.a,{videoId:u,opts:{playerVars:{autoplay:1}},className:"youtube-video"})]})};a(77);var S=function(e){return Object(v.jsxs)("div",{className:"row footer",children:[Object(v.jsx)("div",{className:"footer-shade-top"}),Object(v.jsxs)("div",{className:"footer-content",children:[Object(v.jsx)("img",{className:"footer-netflix-logo",src:"https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png",alt:"Netflix Clone React made by Rahif"}),Object(v.jsxs)("p",{children:["Netflix Clone React made by ",Object(v.jsx)("a",{href:"https://muhammed-rahif.github.io",rel:"noreferrer",target:"_blank",children:"Muhammed Rahif"})]}),Object(v.jsxs)("p",{className:"footer-copyright",children:["Copyrights @ Muhammed Rahif ",(new Date).getFullYear()]}),Object(v.jsxs)("div",{className:"footer-social-logos",children:[Object(v.jsx)("a",{href:"https://github.com/Muhammed-Rahif",rel:"noreferrer",target:"_blank",children:Object(v.jsx)("i",{className:"fab fa-github"})}),Object(v.jsx)("a",{href:"https://muhammed-rahif.github.io",rel:"noreferrer",target:"_blank",children:Object(v.jsx)("i",{className:"fas fa-user-circle"})}),Object(v.jsx)("a",{href:"https://www.instagram.com/_.raifu.op_/",rel:"noreferrer",target:"_blank",children:Object(v.jsx)("i",{className:"fab fa-instagram"})}),Object(v.jsx)("a",{href:"mailto:rahifpalliyalil@gmail.com",children:Object(v.jsx)("i",{className:"fas fa-envelope"})})]})]})]})};var T=function(e){var t=Object(c.useState)(),a=Object(l.a)(t,2),s=a[0],n=a[1],i=Object(c.useState)(),r=Object(l.a)(i,2),o=r[0],d=r[1],j=Object(c.useState)(),b=Object(l.a)(j,2),u=b[0],m=b[1],p=Object(c.useState)(),O=Object(l.a)(p,2),g=O[0],x=O[1],N=Object(c.useState)(),y=Object(l.a)(N,2),T=y[0],C=y[1],F=Object(c.useState)(),L=Object(l.a)(F,2),E=L[0],U=L[1],M=Object(c.useState)(),R=Object(l.a)(M,2),z=R[0],Y=R[1],B=Object(c.useState)(),I=Object(l.a)(B,2),A=I[0],W=I[1],q=Object(c.useState)(),P=Object(l.a)(q,2),J=P[0],K=P[1];return Object(c.useEffect)((function(){k()().observe(),f.get("trending/all/day?api_key=".concat("2a4afa027d254745d262a88cce34ee48","&language=en-US")).then((function(e){var t=e.data.results;n(t.slice(0,8))})),f.get("movie/popular?api_key=".concat("2a4afa027d254745d262a88cce34ee48","&language=en-US&page=1")).then((function(e){var t=e.data.results;d(t.slice(0,8))})),f.get("discover/movie?api_key=".concat("2a4afa027d254745d262a88cce34ee48","&with_genres=28")).then((function(e){var t=e.data.results;K(t[Math.floor(Math.random()*t.length)]),m(t.slice(0,8))})),f.get("discover/tv?api_key=".concat("2a4afa027d254745d262a88cce34ee48","&with_networks=213")).then((function(e){var t=e.data.results;C(t.slice(0,8))})),f.get("discover/movie?api_key=".concat("2a4afa027d254745d262a88cce34ee48","&with_genres=35")).then((function(e){var t=e.data.results;x(t.slice(0,8))})),f.get("discover/movie?api_key=".concat("2a4afa027d254745d262a88cce34ee48","&with_genres=27")).then((function(e){var t=e.data.results;U(t.slice(0,8))})),f.get("discover/movie?api_key=".concat("2a4afa027d254745d262a88cce34ee48","&with_genres=10749")).then((function(e){var t=e.data.results;Y(t.slice(0,8))})),f.get("discover/movie?api_key=".concat("2a4afa027d254745d262a88cce34ee48","&with_genres=10751")).then((function(e){var t=e.data.results;W(t.slice(0,8))}))}),[]),Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)(w,{title:J?J.title:"Loading..",subtitle:J?J.overview:"Loading..",imageUrl:J?h+J.backdrop_path:"",id:J?J.id:""}),Object(v.jsx)(_,{postersTitle:s?"Trending on Netflix":"",postersList:s||[]}),Object(v.jsx)(_,{postersTitle:o?"Popular on Netflix":"",postersList:o||[]}),Object(v.jsx)(_,{postersTitle:T?"Orignials on Netflix":"",postersList:T||[]}),Object(v.jsx)(_,{postersTitle:E?"Horror Films":"",postersList:E||[]}),Object(v.jsx)(_,{postersTitle:z?"Romance Movies":"",postersList:z||[]}),Object(v.jsx)(_,{postersTitle:g?"Comedy Movies":"",postersList:g||[]}),Object(v.jsx)(_,{postersTitle:u?"Action Films":"",postersList:u||[]}),Object(v.jsx)(_,{postersTitle:A?"Family Entertainment":"",postersList:A||[]}),Object(v.jsx)(S,{})]})};a(78);var C=function(e){return Object(v.jsx)("div",{className:"row h-100",children:Object(v.jsxs)("div",{className:"content",style:{backgroundImage:"url('https://i.picsum.photos/id/957/1920/1080.jpg?hmac=j6IpszzgaWjKITEaLB7QiwR-han900vlNJ5vfezaGQE')"},children:[Object(v.jsx)("div",{className:"dark-shade-top"}),Object(v.jsx)("h1",{className:"main-title-404 mb-4",children:"Lost your way ?"}),Object(v.jsx)("h4",{children:"Sorry, we can't find that page. You'll find lots to explore on the home page."}),Object(v.jsx)(r.b,{to:"/",children:Object(v.jsx)("button",{className:"btn mt-3",children:"Netflix Home"})}),Object(v.jsx)("div",{className:"error-code mt-3",children:Object(v.jsx)("h3",{children:"Error code 404 : Not Found"})}),Object(v.jsx)("div",{className:"dark-shade-bottom"})]})})};a(82);var F=function(e){var t=Object(c.useState)(!1),a=Object(l.a)(t,2),s=a[0],n=a[1],i=Object(c.useState)(),d=Object(l.a)(i,2),j=d[0],b=d[1],h=Object(o.f)();return Object(c.useEffect)((function(){window.onscroll=function(){0!==window.pageYOffset?u()("nav").css({"line-height":"0.3"}):u()("nav").css({"line-height":"1.5"})},window.innerWidth>400?u()(".search,.search-input").hover((function(){u()(".search-input").css({width:"18rem",padding:".3rem"}),u()(".search-input").focus()}),(function(){Boolean(u()(".search-input").val())||u()(".search-input").css({width:"0rem",padding:"0rem"})})):u()(".search").click((function(){n((function(e){return!e}))}))}),[]),Object(c.useEffect)((function(){s?u()(".search-input").css({width:"18rem",padding:".3rem"}):u()(".search-input").css({width:"0rem",padding:"0rem"})}),[s]),Object(v.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-black fixed-top",children:Object(v.jsxs)("div",{className:"container-fluid",children:[Object(v.jsx)(r.b,{className:"navbar-brand",to:"/",children:Object(v.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png",alt:"Netflix",width:"124"})}),Object(v.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(v.jsxs)("ul",{className:"navbar-nav",children:[Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsx)(r.b,{className:"nav-link",to:"/top-rated",children:"Top Rated"})}),Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsx)(r.b,{className:"nav-link",to:"/upcoming-movies",children:"Upcoming Movies"})}),Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsx)(r.b,{className:"nav-link","aria-current":"page",to:"/trending-shows",children:"Trending Shows"})}),Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsx)(r.b,{className:"nav-link",to:"/family-entertainment",children:"Family Entertainment"})})]})}),Object(v.jsxs)("div",{className:"ml-auto text-white d-flex align-items-center justify-content-center",children:[Object(v.jsx)("i",{className:"fas fa-search fa-lg search"}),Object(v.jsx)("input",{type:"text",className:"search-input",placeholder:" Movies, TV Shows...",onChange:function(e){var t;t=e.target.value,b(t),h.push("/search?query="+t)},value:j})]})]})})};var L=function(e){var t=Object(c.useState)(),a=Object(l.a)(t,2),n=a[0],i=a[1];return Object(c.useEffect)((function(){f.get("trending/tv/week?api_key=".concat("2a4afa027d254745d262a88cce34ee48","&page=1")).then((function(e){var t=e.data.results;i(t)}))}),[]),Object(v.jsx)(s.a.Fragment,{children:Object(v.jsx)(g,{cardsArray:n||[],getNewCardsUrl:"trending/tv/week?api_key=".concat("2a4afa027d254745d262a88cce34ee48","&page="),title:n?"Trending Shows on Netflix":"Loading..",type:"tv"})})};var E=function(e){var t=Object(c.useState)(),a=Object(l.a)(t,2),n=a[0],i=a[1];return Object(c.useEffect)((function(){f.get("movie/top_rated?api_key=".concat("2a4afa027d254745d262a88cce34ee48","&with_genres=10751&page=1")).then((function(e){var t=e.data.results;i(t)}))}),[]),Object(v.jsx)(s.a.Fragment,{children:Object(v.jsx)(g,{cardsArray:n||[],getNewCardsUrl:"movie/top_rated?api_key=".concat("2a4afa027d254745d262a88cce34ee48","&with_genres=10751&page="),title:n?"Top Rated on Netflix":"Loading..",type:"movie"})})};var U=function(e){var t=Object(c.useState)(),a=Object(l.a)(t,2),n=a[0],i=a[1],r=Object(c.useState)(),o=Object(l.a)(r,2),d=o[0],j=o[1];return Object(c.useEffect)((function(){var e=new URLSearchParams(window.location.search).get("query");i(e)})),Object(c.useEffect)((function(){n&&f.get("search/movie?query=".concat(n,"&api_key=").concat("2a4afa027d254745d262a88cce34ee48","&page=1")).then((function(e){var t=e.data.results;j(t),console.log(t)}))}),[n]),Object(v.jsx)(s.a.Fragment,{children:Object(v.jsx)(g,{title:n?"Searching for '".concat(n,"'"):"Search something..!",cardsArray:d||[],getNewCardsUrl:"search/movie?query=".concat(n,"&api_key=").concat("2a4afa027d254745d262a88cce34ee48","&page="),type:"movie"})})};var M=function(){return Object(c.useEffect)((function(){window.onbeforeunload=function(){return"Hey, are you sure you want to leave? Think of the new trailers !"}})),Object(v.jsxs)(r.a,{basename:"/Netflix-Clone",children:[Object(v.jsx)(F,{}),Object(v.jsxs)(o.c,{children:[Object(v.jsx)(o.a,{exact:!0,path:"/",component:T}),Object(v.jsx)(o.a,{path:"/upcoming-movies",component:x}),Object(v.jsx)(o.a,{path:"/top-rated",component:E}),Object(v.jsx)(o.a,{path:"/trending-shows",component:L}),Object(v.jsx)(o.a,{path:"/family-entertainment",component:N}),Object(v.jsx)(o.a,{path:"/search",component:U}),Object(v.jsx)(o.a,{path:"",component:C})]})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,84)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),c(e),s(e),n(e),i(e)}))};i.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(M,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),R()}},[[83,1,2]]]);
//# sourceMappingURL=main.8f5a970a.chunk.js.map