(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){e.exports={Header:"Header_Header__2C_Ub",SiteName:"Header_SiteName__3GLMr",Icon:"Header_Icon__2oxOJ",Link:"Header_Link__C0f_0"}},32:function(e,t,a){e.exports=a(52)},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);t.default={HOME:"HOME",NEWS:"NEWS",STATS:"STATS"}},39:function(e,t,a){"use strict";a.r(t);t.default={CORS_PROXY:"https://cors-anywhere.herokuapp.com/",MOMENT_FORMAT:"dddd, MMMM D YYYY, h:mm a",RSS_TO_JSON_KEY:"yh935un0aqrg3qqwu4v8thtglt8kfelword8tbr2"}},4:function(e,t,a){"use strict";a.d(t,"b",function(){return n}),a.d(t,"a",function(){return r});var n=a(38).default,r=a(39).default},48:function(e,t,a){"use strict";a.r(t);var n=a(12),r=a.n(n),c=a(13),o=a.n(c),i=a(2),l=a.n(i),u=a(4);t.default=function(){var e="https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fhoopshype.com%2Ffeed%2F&api_key=".concat(u.a.RSS_TO_JSON_KEY);return new r.a(function(t,a){fetch(e).then(function(e){return e.json()}).then(function(e){var a=e.items,n=[];a.forEach(function(e){n.push({guid:l.a.get(e,"guid"),author:l.a.get(e,"author"),link:l.a.get(e,"link"),thumbnail:l.a.get(e,"thumbnail"),title:l.a.get(e,"title"),pubDate:l.a.get(e,"pubDate"),formattedPubDate:o()(l.a.get(e,"pubDate")).format(u.a.MOMENT_FORMAT),content:l.a.get(e,"content"),categories:l.a.get(e,"categories"),source:"Hoops Hype"})}),t(n)}).catch(function(e){console.error("Error: ",e)})})}},49:function(e,t,a){"use strict";a.r(t);var n=a(12),r=a.n(n),c=a(13),o=a.n(c),i=a(2),l=a.n(i),u=a(4),s=function(e){return e.split(", ")};t.default=function(){var e="https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fbasketball.realgm.com%2Frss%2Fwiretap%2F0%2F0.xml&api_key=".concat(u.a.RSS_TO_JSON_KEY);return new r.a(function(t,a){fetch(e).then(function(e){return e.json()}).then(function(e){var a=e.items,n=s(l.a.get(e,"feed.description")),r=[];a.forEach(function(e){r.push({guid:l.a.get(e,"guid"),author:l.a.get(e,"author"),link:l.a.get(e,"link"),thumbnail:l.a.get(e,"thumbnail"),title:l.a.get(e,"title"),pubDate:l.a.get(e,"pubDate"),formattedPubDate:o()(l.a.get(e,"pubDate")).format(u.a.MOMENT_FORMAT),content:l.a.get(e,"content"),categories:n,source:"Real GM"})}),t(r)}).catch(function(e){a(e)})})}},52:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),o=a.n(c),i=(a(37),a(9)),l=a(66),u=a(63),s=a(64),m=a(15),f=a.n(m),d=a(4),g=a(65),h=a(29),_=a.n(h),E=function(e){var t=function(t){var a=t.target.id,n=e.setCurrentPage;switch(a){case d.b.HOME:case d.b.NEWS:case d.b.STATS:n(a);break;default:n(d.b.NEWS)}};return r.a.createElement(u.a,{className:f.a.Header},r.a.createElement(s.a,{xs:9,id:d.b.HOME,className:"".concat(f.a.SiteName," ").concat(f.a.Link),onClick:t},r.a.createElement(g.a,{className:f.a.Icon},r.a.createElement(_.a,null)),"GoalTending"),r.a.createElement(s.a,{xs:1,id:d.b.NEWS,className:"".concat(f.a.Link),onClick:t},"News"))},b=a(10),p=a(12),O=a.n(p),S=a(13),v=a.n(S),A=a(2),k=a.n(A),N=a(48).default,w=a(49).default,j={getArticles:function(){var e=[];return new O.a(function(t,a){N().then(function(t){return e=[].concat(Object(b.a)(e),Object(b.a)(t)),w()}).then(function(a){e=[].concat(Object(b.a)(e),Object(b.a)(a));var n=k.a.sortBy(e,function(e){return new v.a(e.pubDate).format()}).reverse();t(n)}).catch(function(e){console.log("error: ",e)})})}},M=a(30),T=a.n(M),D=a(67),F=a(8),H=a.n(F),R=function(e){var t=Object(n.useState)(!0),a=Object(i.a)(t,2),c=a[0],o=a[1],m=Object(n.useState)("Read More..."),f=Object(i.a)(m,2),d=f[0],g=f[1],h=e.image,_=e.link,E=e.title,b=e.author,p=e.pubDate,O=e.categories,S=e.content,v=e.source;return r.a.createElement(l.a,{className:H.a.Article},r.a.createElement(u.a,null,r.a.createElement(s.a,{xs:12,md:4,className:H.a.Image},r.a.createElement("img",{src:h,alt:"thumbnail for article"})),r.a.createElement(s.a,{xs:12,md:8},r.a.createElement("div",{className:H.a.ArticleInfo},r.a.createElement(u.a,{className:H.a.ArticleTitle},r.a.createElement("a",{href:_,target:"blank"},E)),r.a.createElement(u.a,{className:H.a.Author},b?"".concat(b," at ").concat(v):v),r.a.createElement(u.a,{className:H.a.PubDate},p),r.a.createElement(u.a,{className:H.a.Categories},function(e){return e?r.a.createElement("div",null,"Tags: ",e.join(", ")):r.a.createElement("div",null)}(O))))),r.a.createElement(u.a,null,r.a.createElement(s.a,null,r.a.createElement(D.a,{variant:"secondary",onClick:function(e){c?(o(!1),g("Read Less...")):(o(!0),g("Read More..."))}},d),r.a.createElement("div",{hidden:c,dangerouslySetInnerHTML:{__html:S}}))))},y=function(e){var t=d.a.CORS_PROXY,a=Object(n.useState)([]),c=Object(i.a)(a,2),o=c[0],l=c[1];Object(n.useEffect)(function(){j.getArticles().then(function(e){l(Object(b.a)(e))}).catch(function(e){console.log("error: ",e)})},[t]);return r.a.createElement("div",null,o.map(function(e){return r.a.createElement(R,{key:T()(),image:e.thumbnail,link:e.link,title:e.title,author:e.author,pubDate:e.formattedPubDate,categories:e.categories,content:e.content,source:e.source})}))},C=function(e){return r.a.createElement("div",null,r.a.createElement("h2",null,"News"),r.a.createElement(y,null))},P=function(e){var t=Object(n.useState)("news"),a=Object(i.a)(t,2);a[0],a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{setCurrentPage:function(e){console.log("page: ",e)}}),r.a.createElement(l.a,null,r.a.createElement(C,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports={Article:"Article_Article__1PxDW",Image:"Article_Image__rljac",ArticleInfo:"Article_ArticleInfo__2PkBa",ArticleTitle:"Article_ArticleTitle__3VbxL",Author:"Article_Author__1iEOS",PubDate:"Article_PubDate__1nap_",Categories:"Article_Categories__18jYn"}}},[[32,1,2]]]);
//# sourceMappingURL=main.27bd4fc9.chunk.js.map