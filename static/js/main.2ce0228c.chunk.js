(this["webpackJsonpmichel-meis"]=this["webpackJsonpmichel-meis"]||[]).push([[0],{106:function(e,t){},13:function(e,t,n){e.exports={background:"Projects_background__Rxwhz",image:"Projects_image__34P89",titleContainer:"Projects_titleContainer__2ziVM",title:"Projects_title__1ZGSX",flyIn:"Projects_flyIn__3vjJF",genre:"Projects_genre__2caBT",marginLeft:"Projects_marginLeft__11rWC",marginTop:"Projects_marginTop__3aqPk",active:"Projects_active__3blZf",buttonContainer:"Projects_buttonContainer__1YJQF",buttonContainerTransition:"Projects_buttonContainerTransition__ChCmX",container:"Projects_container__284I4",test:"Projects_test__2zkjN",text:"Projects_text__tWdiX",galleryContainer:"Projects_galleryContainer__2ZMx3",info:"Projects_info__2o5J1"}},14:function(e,t,n){e.exports={imageContainer:"Music_imageContainer__1WHzg",title:"Music_title__8HKUG",videoContainer:"Music_videoContainer__1wXW3",active:"Music_active__OSREx",text:"Music_text__2LUJ-",fadeIn:"Music_fadeIn__1ZayA",section:"Music_section__3E9-h",container:"Music_container__36yx5",titleRow:"Music_titleRow__45Cg7",spaceBetween:"Music_spaceBetween__3HyI0"}},163:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(66),s=n.n(o),i=(n(77),n(78),n(27)),r=n(6),l=n(3),u=n(18),j=n.n(u),d=n(67).createClient({space:"j4qqv28dxhgf",accessToken:"c5T_NL6cL160-nnv2U_f66gRHYeg_ZgMfwcovBjGGGU"}),m=n(4),b=n.n(m),_=n(25),v=n.n(_),f=function(e){var t=e.substring(8,10),n=e.substring(5,7),a=e.substring(0,4);return function(e){switch(e){case"O1":return"Jan";case"02":return"Feb";case"03":return"Mar";case"04":return"Apr";case"05":return"May";case"06":return"Jun";case"07":return"Jul";case"08":return"Aug";case"09":return"Sep";case"10":return"Oct";case"11":return"Nov";case"12":return"Dec";default:console.log("Sorry, we are out of "+e+".")}}(n)+" "+t+". "+a},h=n(0);var x=function(e){Object(a.useEffect)((function(){d.getEntries({content_type:"news",order:"fields.date"}).then((function(e){console.log("API",e.items),o(e.items.reverse())})).catch(console.error)}),[]);var t=Object(a.useState)(null),n=Object(l.a)(t,2),c=n[0],o=n[1];return Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:j.a.contentContainer,children:c&&e.showContent?Object(h.jsx)("div",{className:j.a.container,children:Object(h.jsx)("div",{className:"fadeIn",children:c.map((function(e,t){return Object(h.jsxs)("div",{className:j.a.section,children:[Object(h.jsxs)("div",{className:j.a.row,children:[Object(h.jsx)("h1",{className:j.a.title,dangerouslySetInnerHTML:{__html:b()(e.fields.title.toUpperCase())}}),Object(h.jsx)("div",{dangerouslySetInnerHTML:{__html:b()(f(e.fields.date))}})]}),e.fields.video?Object(h.jsx)("div",{className:j.a.videoContainer,children:Object(h.jsx)(v.a,{width:"100%",height:"100%",playing:!0,muted:!0,controls:!0,url:"www.youtube.com/".concat(e.fields.video.fields.file.fileName)})}):null,e.fields.image?Object(h.jsx)("div",{className:j.a.imageContainer,children:Object(h.jsx)("img",{src:e.fields.image.fields.file.url,className:j.a.image})}):null,Object(h.jsx)("div",{className:j.a.text,dangerouslySetInnerHTML:{__html:b()(e.fields.text)}})]},"news"+t)}))})}):null})})},O=n(30),g=n.n(O);var p=function(e){Object(a.useEffect)((function(){console.log("jojo"),d.getEntries({content_type:"about",order:"fields.index"}).then((function(e){console.log("API",e.items),o(e.items)})).catch(console.error)}),[]);var t=Object(a.useState)(null),n=Object(l.a)(t,2),c=n[0],o=n[1];return Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"contentContainer",children:c&&e.showContent?Object(h.jsx)("div",{className:"fadeIn",children:Object(h.jsx)("div",{className:g.a.align,children:c.map((function(e,t){return Object(h.jsx)("div",{className:g.a.row,children:Object(h.jsx)("div",{className:g.a.text,dangerouslySetInnerHTML:{__html:b()(e.fields.aboutText)}},"about"+t)})}))})}):null})})},N=n(69),w=n.n(N),M=n(5),C=n.n(M),S=n(17),T=n(72),Q=n(29),B=n.n(Q),y=n(31),L=n.n(y);n(159);Object(Q.init)("user_ngbkW6jO4keASIpIbaRbl");var I=function(e){var t=Object(T.a)(),n=t.register,a=t.errors,c=t.handleSubmit,o=t.reset,s=function(){var e=Object(S.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={name:t.name,email:t.email,subject:t.subject,message:t.message},e.next=4,B.a.send("service_pdsjrg6","template_zxv2xp8",n,"user_ngbkW6jO4keASIpIbaRbl");case 4:o(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("form",{id:"contact-form",onSubmit:c(s),noValidate:!0,children:[Object(h.jsxs)("div",{className:L.a.row,children:[Object(h.jsx)("input",{className:L.a.inputName,type:"text",name:"name",ref:n({required:{value:!0,message:"Please enter your name"},maxLength:{value:30,message:"Please use 30 characters or less"}}),placeholder:"Name"}),a.name&&Object(h.jsx)("span",{className:"errorMessage",children:a.name.message}),Object(h.jsx)("input",{type:"email",name:"email",ref:n({required:!0,pattern:/^[a-zA-Z0-9.!#$%&\u2019*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/}),placeholder:"Email address"}),a.email&&Object(h.jsx)("span",{className:"errorMessage",children:"Please enter a valid email address"})]}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("input",{type:"text",name:"subject",ref:n({required:{value:!0,message:"Please enter a subject"},maxLength:{value:75,message:"Subject cannot exceed 75 characters"}}),placeholder:"Subject"}),a.subject&&Object(h.jsx)("span",{className:"errorMessage",children:a.subject.message})]}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("textarea",{className:L.a.textArea,rows:5,name:"message",ref:n({required:!0}),placeholder:"Message"}),a.message&&Object(h.jsx)("span",{className:"errorMessage",children:"Please enter a message"})]}),Object(h.jsx)("button",{type:"submit",className:e.buttonDark?"buttonDark":"button",children:"Submit"})]})},P=function(e){var t=window.open(e,"_blank","noopener,noreferrer");t&&(t.opener=null)};var k=function(e){Object(a.useEffect)((function(){d.getEntries({content_type:"contact"}).then((function(e){console.log("API",e.items),o(e.items.reverse())})).catch(console.error)}),[]);var t=Object(a.useState)(null),n=Object(l.a)(t,2),c=n[0],o=n[1];return Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"contentContainer",children:Object(h.jsx)("div",{className:"fadeIn",children:Object(h.jsx)("div",{className:w.a.align,children:Object(h.jsx)("div",{children:c&&e.showContent?Object(h.jsxs)(h.Fragment,{children:[c.map((function(e,t){return Object(h.jsx)("div",{className:"rowSpacing",dangerouslySetInnerHTML:{__html:b()(e.fields.text.replace(/\n/g,"</br>"))}},"about"+t)})),Object(h.jsx)("button",{className:"buttonFullLength",onClick:function(){return P("http://eepurl.com/hH-Ba9")},children:"Click here to subscribe for the newsletter"}),Object(h.jsx)("em",{children:"Fill out the form to contact me directly"}),Object(h.jsx)(I,{})]}):null})})})})})},A=n(13),H=n.n(A);n(160);function E(e){Object(a.useEffect)((function(){d.getEntries({content_type:"projects",order:"fields.index"}).then((function(e){console.log("API",e.items);var t=e.items.reverse();o(t)})).catch(console.error)}),[]);var t=Object(a.useState)(null),n=Object(l.a)(t,2),c=n[0],o=n[1],s=Object(a.useState)(null),i=Object(l.a)(s,2),r=i[0],u=i[1];return Object(h.jsx)("div",{className:"".concat(r?H.a.background:null),children:c&&e.showContent?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:H.a.titleContainer,children:c.map((function(t,n){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:H.a.title,dangerouslySetInnerHTML:{__html:b()(t.fields.title)},onClick:function(){return e=t.fields.title,void u(e);var e}}),Object(h.jsx)("div",{className:"".concat(H.a.buttonContainer,"  ").concat(r===t.fields.title?H.a.active:null," ").concat(r===t.fields.title?H.a.buttonContainerTransition:null),children:r===t.fields.title?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:H.a.genre,dangerouslySetInnerHTML:{__html:b()(t.fields.genre)}}),"Michel Meis 4tet"===t.fields.title?Object(h.jsx)("button",{className:"button ",onClick:function(){e.setToQuartet(!0),e.setShowContent(!1),setTimeout((function(){return e.setShowContent(!0)}),1500)},children:"Infos"}):Object(h.jsx)("button",{className:"button ",onClick:function(){return function(e){var t=window.open(e,"_blank","noopener,noreferrer");t&&(t.opener=null)}(t.fields.linkInfo)},children:"Infos"}),Object(h.jsx)("div",{className:"".concat(H.a.marginTop," ").concat(H.a.text),dangerouslySetInnerHTML:{__html:b()(t.fields.text)}})]}):null})]})}))}),c.map((function(e,t){return Object(h.jsx)(h.Fragment,{children:e.fields.image.fields?Object(h.jsx)("div",{className:H.a.darker,children:Object(h.jsx)("img",{src:e.fields.image.fields.file.url,className:"".concat(H.a.image," ").concat(r===e.fields.title?H.a.active:null),alt:"img"})}):null})}))]}):null})}var D=c.a.memo(E),V=n(32),F=n.n(V);var q=function(e){Object(a.useEffect)((function(){d.getEntries({content_type:"live",order:"fields.date"}).then((function(e){console.log("API",e.items),console.log("DAte",new Date),o(e.items)})).catch(console.error)}),[]);var t=Object(a.useState)(null),n=Object(l.a)(t,2),c=n[0],o=n[1];return Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"contentContainer",children:Object(h.jsx)("div",{className:"fadeIn",children:c&&e.showContent?c.map((function(e,t){return Object(h.jsxs)("div",{className:F.a.row,children:[Object(h.jsxs)("div",{className:"column",children:[Object(h.jsx)("div",{dangerouslySetInnerHTML:{__html:b()(f(e.fields.date))}}),Object(h.jsx)("div",{dangerouslySetInnerHTML:{__html:b()(e.fields.band)}})]}),Object(h.jsxs)("div",{className:"column",children:[Object(h.jsx)("div",{className:F.a.column,dangerouslySetInnerHTML:{__html:b()(e.fields.location)}}),Object(h.jsx)("div",{className:F.a.column,dangerouslySetInnerHTML:{__html:b()(e.fields.city)}})]})]},"live"+t)})):null})})})},W=n.p+"static/media/Home.cd61c875.jpg",R=n(2),z=n.n(R),U=n(21),J=n.n(U),Z=n(35);var G=function(e){var t=function(e){window.open(e,"_blank")};return Object(h.jsxs)("div",{className:e.quartet?J.a.containerQuartet:J.a.container,children:[Object(h.jsx)(Z.a,{className:e.quartet?J.a.iconQuartet:J.a.icon,onClick:function(){return t(e.quartet?"https://www.facebook.com/michelmeis4tet":"https://www.facebook.com/michel.meis")}}),Object(h.jsx)(Z.b,{className:e.quartet?J.a.iconQuartet:J.a.icon,onClick:function(){return t(e.quartet?"https://www.instagram.com/michelmeis4tet":"https://www.instagram.com/michel_meis")}}),e.quartet?Object(h.jsx)(Z.c,{className:J.a.iconQuartet,onClick:function(){return t("https://www.youtube.com/channel/UCdjZkLmz7oE7WIM51PSDMMQ")}}):null]})},K=n.p+"static/media/News.112dbbae.jpg",Y=n.p+"static/media/About.1a470cf8.jpg",X=n.p+"static/media/Projects.9f7cdeda.jpg",$=n.p+"static/media/Video.48ae3f49.jpg",ee=n.p+"static/media/Live.98ef4491.jpg",te=n.p+"static/media/Contact.2a224677.jpg",ne=n.p+"static/media/Home.5019cf42.jpg",ae=n.p+"static/media/About.7512f151.jpg",ce=n.p+"static/media/Contact.89a45b7b.jpg",oe=n.p+"static/media/Live.094bb9b5.jpg",se=n.p+"static/media/Music.73ec962b.jpg",ie=n.p+"static/media/News.8c369448.jpg",re=n.p+"static/media/Video.3f44d764.jpg";var le=function(e){var t=Object(a.useState)(!1),n=Object(l.a)(t,2),c=(n[0],n[1]),o=Object(a.useState)("Home"),s=Object(l.a)(o,2),i=s[0],u=s[1],j=Object(a.useState)("HomeQuartet"),d=Object(l.a)(j,2),m=d[0],b=d[1],_=Object(a.useState)(!1),v=Object(l.a)(_,2),f=v[0],x=v[1],O=Object(a.useState)(!1),g=Object(l.a)(O,2),p=g[0],N=g[1],w=Object(a.useState)(!1),M=Object(l.a)(w,2),C=M[0],S=M[1],T=Object(a.useState)(null),Q=Object(l.a)(T,2),B=Q[0],y=Q[1],L=Object(a.useState)(!1),I=Object(l.a)(L,2),P=I[0],k=I[1],A=Object(a.useState)(!1),H=Object(l.a)(A,2),E=H[0],D=H[1],V=Object(a.useState)(null),F=Object(l.a)(V,2),q=(F[0],F[1],Object(a.useState)(!0)),R=Object(l.a)(q,2),U=R[0],J=R[1],Z=Object(r.g)().pathname,le=[{name:"News",picture:K},{name:"About",picture:Y},{name:"Projects",picture:X},{name:"Live",picture:ee},{name:"Contact",picture:te}],ue=[{name:"News",picture:K},{name:"About",picture:Y},{name:"Music",picture:X},{name:"Video",picture:$},{name:"Live",picture:ee},{name:"Contact",picture:te}];console.log("pictureQuartet",m),console.log("path",Z);var je=function(e){setTimeout((function(){u(e)}),1e3),x(!0),y("Home"===e?"/":e),setTimeout((function(){x(!1),S(!1)}),1e3)},de=Z.substring(0,5),me=function(){k(!0),D(!1),N(!1),b("/4tet"),"/4tet"!==de&&setTimeout((function(){return y("/4tet")}),1e3),e.setShowContent(!1),setTimeout((function(){return e.setShowContent(!0)}),1e3)},be=Object(a.useState)(!0),_e=Object(l.a)(be,2),ve=_e[0],fe=_e[1];if(e.toQuartet&&ve&&(e.setToQuartet(!1),fe(!1),me(),setTimeout((function(){return fe(!0)}),2e3)),"/"!==Z&&"/Projects"!==Z&&"/4tet"!==de&&U){var he=Z.substring(1);S(!0),u(he),J(!1)}if("/4tet"===de&&"/4tet"!==Z&&U){var xe=Z.substring(6);N(!0),J(!1),me(),b(xe)}return Object(h.jsx)("div",{className:z.a.screen,children:Object(h.jsxs)("div",{className:"".concat(z.a.doubleWidth," ").concat(P||"/4tet"===Z?z.a.rowToRight:null," ").concat(E?z.a.rowToLeft:null),children:[Object(h.jsxs)("div",{className:z.a.container,children:[B?Object(h.jsx)(r.a,{to:"".concat(B)}):null,Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:z.a.boxTop,children:[Object(h.jsx)("div",{className:"".concat(z.a.first," ").concat(z.a.main," ").concat(z.a.mainWidth," "),onClick:function(){return je("Home")},onMouseOver:function(){},onMouseLeave:function(){},children:"MM"}),Object(h.jsx)(G,{})]}),Object(h.jsx)("div",{className:"".concat(z.a.boxBottom," ").concat("/4tet"!==Z?z.a.animationBoxBottom:null),children:Object(h.jsxs)("div",{className:"".concat(z.a.second," ").concat(z.a.main),onClick:function(){me()},children:["4TET",Object(h.jsx)("div",{className:z.a.icon,children:Object(h.jsxs)("svg",{id:"triangle",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 31 50",children:[Object(h.jsx)("defs",{}),Object(h.jsx)("title",{children:"Triangle"}),Object(h.jsx)("polygon",{points:"0.5 1.04 30.2 25 0.5 48.95 0.5 1.04"}),Object(h.jsx)("path",{d:"M3,2.09,31.41,25,3,47.91V2.09M2,0V50L33,25,2,0Z",transform:"translate(-2 0)"})]})})]})}),Object(h.jsx)("div",{className:"".concat(z.a.imageContainer,"  ").concat(f?z.a.transition:""," ").concat(C?z.a.photoSidebar:null," ").concat(C||"/"===Z||"/Projects"===Z?z.a.home:null," ").concat(z.a.active)}),Object(h.jsx)("img",{className:"".concat(z.a.image,"  ").concat(f?z.a.transition:""," ").concat(C?z.a.photoSidebar:null," ").concat(C||"/"===Z?z.a.home:null," ").concat("Home"===i||"/Home"===Z&&"Home"===i?z.a.active:""),src:W,alt:"Home"}),Object(h.jsx)("img",{className:"".concat(z.a.image,"  ").concat(f?z.a.transition:""," ").concat(C?z.a.photoSidebar:null," ").concat(C||"/News"===Z?z.a.news:null," ").concat("News"===i||"/News"===Z&&"News"===i?z.a.active:""),src:K,alt:"News"}),Object(h.jsx)("img",{className:"".concat(z.a.image,"  ").concat(f?z.a.transition:""," ").concat(C?z.a.photoSidebar:null," ").concat(C||"/About"===Z?z.a.about:null," ").concat("About"===i||"/About"===Z&&"About"===i?z.a.active:""),src:Y,alt:"About"}),Object(h.jsx)("img",{className:"".concat(z.a.image,"  ").concat(f?z.a.transition:""," ").concat(C?z.a.photoSidebar:null," ").concat(C||"/Projects"===Z?z.a.projects:null," ").concat("Projects"===i||"/Projects"===Z&&"Projects"===i?z.a.active:""),src:X,alt:"Projects"}),Object(h.jsx)("img",{className:"".concat(z.a.image,"  ").concat(f?z.a.transition:""," ").concat(C?z.a.photoSidebar:null," ").concat(C||"/Live"===Z?z.a.live:null," ").concat("Live"===i||"/Live"===Z&&"Live"===i?z.a.active:""),src:ee,alt:"Live"})," ",Object(h.jsx)("img",{className:"".concat(z.a.image,"  ").concat(f?z.a.transition:""," ").concat(C?z.a.photoSidebar:null," ").concat(C||"/Contact"===Z?z.a.contact:null," ").concat("Contact"===i||"/Contact"===Z&&"Contact"===i?z.a.active:""),src:te,alt:"Contact"}),Object(h.jsx)("nav",{className:z.a.nav,children:le.map((function(t,n){return Object(h.jsx)("div",{className:"".concat(z.a.navPoint," ").concat(Z==="/"+t.name?z.a.navPointActive:null),onMouseOver:function(){t.name},onMouseLeave:function(){},onClick:function(){return function(t){e.setShowContent(!1),setTimeout((function(){return e.setShowContent(!0)}),1500),"Projects"===t?je(t):(setTimeout((function(){x(!0),y(t)}),0),C?(setTimeout((function(){u(t)}),1e3),setTimeout((function(){x(!1),c(!0)}),1500),setTimeout((function(){c(!1)}),2500)):(u(t),setTimeout((function(){c(!0)}),300),setTimeout((function(){S(!0),x(!1)}),400),setTimeout((function(){c(!1)}),2e3)))}(t.name)},children:t.name.toUpperCase()},"routes"+n)}))})]})]}),Object(h.jsxs)("div",{className:z.a.quartet,children:[Object(h.jsx)("div",{className:"".concat(z.a.boxTop," ").concat(Z.startsWith("/4tet")?z.a.animationBoxTop:null),onClick:function(){k(!1),D(!0),S(!1),u("Home"),setTimeout((function(){return y("/")}),1e3),setTimeout((function(){return D(!1)}),1e3),e.setShowContent(!1),setTimeout((function(){return e.setShowContent(!0)}),1e3)},children:Z.startsWith("/4tet")&&Object(h.jsxs)("div",{className:"".concat(z.a.secondDark," ").concat(z.a.main),children:[Object(h.jsxs)("div",{className:"".concat(z.a.icon," ").concat(z.a.iconLeft),children:[" ",Object(h.jsxs)("svg",{id:"triangle",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 31 50",children:[Object(h.jsx)("defs",{}),Object(h.jsx)("title",{children:"Triangle"}),Object(h.jsx)("polygon",{points:"0.5 1.04 30.2 25 0.5 48.95 0.5 1.04"}),Object(h.jsx)("path",{d:"M3,2.09,31.41,25,3,47.91V2.09M2,0V50L33,25,2,0Z",transform:"translate(-2 0)"})]})]}),"MM"]})}),Object(h.jsxs)("div",{className:z.a.boxBottomQuartet,children:[Object(h.jsx)(G,{quartet:!0}),Object(h.jsx)("div",{className:"".concat(z.a.firstDark," ").concat(z.a.main),onClick:function(){return e="/4tet",setTimeout((function(){b(e)}),1e3),x(!0),y("/4tet"),void setTimeout((function(){x(!1),N(!1)}),1e3);var e},onMouseOver:function(){},onMouseLeave:function(){},children:"4TET"})]}),Object(h.jsx)("nav",{className:z.a.navQuartet,children:ue.map((function(t,n){return Object(h.jsx)("div",{className:"".concat(z.a.navPointQuartet," ").concat(Z==="/4tet/"+t.name?z.a.navPointActiveQuartet:null," "),onMouseOver:function(){t.name},onMouseLeave:function(){},onClick:function(){return function(t){e.setShowContent(!1),setTimeout((function(){return e.setShowContent(!0)}),1500),setTimeout((function(){x(!0),y(t)}),0),p?(console.log("2"),setTimeout((function(){b(t)}),1e3),setTimeout((function(){x(!1),c(!0)}),1500),setTimeout((function(){c(!1)}),2500)):(console.log("1"),b(t),setTimeout((function(){c(!0)}),300),setTimeout((function(){N(!0),x(!1)}),400),setTimeout((function(){c(!1)}),2e3))}("/4tet/"+t.name)},children:t.name.toUpperCase()},"routesQuartet"+n)}))}),Object(h.jsx)("img",{className:"".concat(z.a.imageQuartet," ").concat(f?z.a.transition:"","  ").concat(p?z.a.photoSidebarQuartet:null," ").concat(p||"/4tet"===Z?z.a.homeQuartet:null," ").concat("/4tet"===m||"/4tet"===Z&&"/4tet"===m?z.a.active:""),src:ce,alt:"HomeQuartet"}),Object(h.jsx)("img",{className:"".concat(z.a.imageQuartet,"  ").concat(f?z.a.transition:""," ").concat(p?z.a.photoSidebarQuartet:null,"  ").concat("/4tet/News"===m||"/4tet/News"===Z&&"/4tet/News"===m?z.a.active:""),src:ie,alt:"NewsQuartet"}),Object(h.jsx)("img",{className:"".concat(z.a.imageQuartet,"  ").concat(f?z.a.transition:""," ").concat(p?z.a.photoSidebarQuartet:null,"  ").concat(p||"/4tet/About"===Z?z.a.aboutQuartet:null," ").concat("/4tet/About"===m||"/4tet/About"===Z&&"/4tet/About"===m?z.a.active:""),src:ae,alt:"AboutQuartet"}),Object(h.jsx)("img",{className:"".concat(z.a.imageQuartet,"  ").concat(f?z.a.transition:""," ").concat(p?z.a.photoSidebarQuartet:null," ").concat(p||"/4tet/Contact"===Z?z.a.contactQuartet:null," ").concat("/4tet/Contact"===m||"/4tet/Contact"===Z&&"/4tet/Contact"===m?z.a.active:""),src:ne,alt:"ContactQuartet"}),Object(h.jsx)("img",{className:"".concat(z.a.imageQuartet,"  ").concat(f?z.a.transition:""," ").concat(p?z.a.photoSidebarQuartet:null," ").concat(p||"/4tet/Live"===Z?z.a.liveQuartet:null," ").concat("/4tet/Live"===m||"/4tet/Live"===Z&&"/4tet/Live"===m?z.a.active:""),src:oe,alt:"LiveQuartet"}),Object(h.jsx)("img",{className:"".concat(z.a.imageQuartet,"  ").concat(f?z.a.transition:""," ").concat(p?z.a.photoSidebarQuartet:null," ").concat(p||"/4tet/Music"===Z?z.a.musicQuartet:null," ").concat("/4tet/Music"===m||"/4tet/Music"===Z&&"/4tet/Music"===m?z.a.active:""),src:se,alt:"MusicQuartet"})," ",Object(h.jsx)("img",{className:"".concat(z.a.imageQuartet,"  ").concat(f?z.a.transition:""," ").concat(p?z.a.photoSidebarQuartet:null,"  ").concat(p||"/4tet/Video"===Z?z.a.videoQuartet:null," ").concat("/4tet/Video"===m||"/4tet/Video"===Z&&"/4tet/Video"===m?z.a.active:""),src:re,alt:"VideoQuartet"})]})]})})},ue=n(20),je=n.n(ue);var de=function(e){Object(a.useEffect)((function(){d.getEntries({content_type:"news",order:"fields.index","fields.tet":!0}).then((function(e){console.log("API",e.items),o(e.items.reverse())})).catch(console.error)}),[]);var t=Object(a.useState)(null),n=Object(l.a)(t,2),c=n[0],o=n[1];return Object(r.g)().pathname,Object(h.jsx)("div",{className:"container4tet",children:Object(h.jsx)("div",{className:"contentContainer",children:c&&e.showContent?Object(h.jsx)("div",{className:je.a.container,children:Object(h.jsx)("div",{className:"fadeIn",children:c.map((function(e,t){return Object(h.jsxs)("div",{className:je.a.section,children:[Object(h.jsxs)("div",{className:je.a.row,children:[Object(h.jsx)("h1",{className:je.a.title,dangerouslySetInnerHTML:{__html:b()(e.fields.title.toUpperCase())}}),Object(h.jsx)("div",{dangerouslySetInnerHTML:{__html:b()(f(e.fields.date))}})]}),e.fields.video?Object(h.jsx)("div",{className:je.a.videoContainer,children:Object(h.jsx)(v.a,{width:"100%",height:"100%",playing:!0,controls:!0,muted:!0,url:"www.youtube.com/".concat(e.fields.video.fields.file.fileName)})}):null,e.fields.image?Object(h.jsx)("div",{className:je.a.imageContainer,children:Object(h.jsx)("img",{alt:"img",src:e.fields.image.fields.file.url,className:je.a.image})}):null,Object(h.jsx)("div",{className:je.a.text,dangerouslySetInnerHTML:{__html:b()(e.fields.text)}})]},"news"+t)}))})}):null})})},me=n(33),be=n.n(me);var _e=function(e){Object(a.useEffect)((function(){d.getEntries({content_type:"about4tet",order:"fields.index"}).then((function(e){console.log("API",e.items),o(e.items)})).catch(console.error)}),[]);var t=Object(a.useState)(null),n=Object(l.a)(t,2),c=n[0],o=n[1];return Object(h.jsx)("div",{className:"container4tet",children:Object(h.jsx)("div",{className:"contentContainer",children:c&&e.showContent?Object(h.jsx)("div",{className:"fadeIn",children:Object(h.jsx)("div",{className:be.a.align,children:c.map((function(e,t){return Object(h.jsx)("div",{className:be.a.row,children:Object(h.jsx)("div",{className:be.a.text,dangerouslySetInnerHTML:{__html:b()(e.fields.text)}},"about"+t)})}))})}):null})})},ve=n(14),fe=n.n(ve);var he=function(e){Object(a.useEffect)((function(){d.getEntries({content_type:"music4tet",order:"fields.index"}).then((function(e){console.log("API",e.items),o(e.items.reverse())})).catch(console.error)}),[]);var t=Object(a.useState)(null),n=Object(l.a)(t,2),c=n[0],o=n[1],s=Object(a.useState)(null),i=Object(l.a)(s,2),r=i[0],u=i[1],j=Object(a.useState)(null),m=Object(l.a)(j,2),_=m[0],v=m[1],f=Object(a.useState)(!1),x=Object(l.a)(f,2),O=(x[0],x[1],Object(a.useRef)()),g=Object(a.useRef)();return Object(h.jsx)("div",{className:"container4tet",children:Object(h.jsx)("div",{className:"contentContainer",children:Object(h.jsx)("div",{className:"fadeIn",children:c&&e.showContent?Object(h.jsx)("div",{className:"".concat(fe.a.container," "),children:c.map((function(e,t){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"".concat(fe.a.section," "),children:[Object(h.jsxs)("div",{className:fe.a.titleRow,children:[Object(h.jsx)("h1",{className:fe.a.title,dangerouslySetInnerHTML:{__html:b()(e.fields.id)}})," ",Object(h.jsx)("button",{className:"buttonDark",onClick:function(){return P(e.fields.linkListen)},children:"LISTEN"})]}),e.fields.albumCover?Object(h.jsx)("div",{className:fe.a.imageContainer,children:Object(h.jsx)("img",{alt:"cover",src:e.fields.albumCover.fields.file.url,className:fe.a.image})}):null,Object(h.jsx)("div",{className:fe.a.text,dangerouslySetInnerHTML:{__html:b()(e.fields.press)}}),Object(h.jsxs)("div",{className:"row ".concat(fe.a.spaceBetween),children:[e.fields.popUp?Object(h.jsx)("button",{className:"buttonDark ".concat(r===e.fields.id?fe.a.active:null),onClick:function(){return t=e.fields.id,void(r===t?u(null):(u(t),v(null),setTimeout((function(){return O.current.scrollIntoView({behavior:"smooth"})}),200)));var t},children:"PRESS"}):null,e.fields.credits?Object(h.jsx)("button",{className:"buttonDark ".concat(_===e.fields.id?fe.a.active:null," "),onClick:function(){return t=e.fields.id,void(_===t?v(null):(v(t),u(null),setTimeout((function(){return g.current.scrollIntoView({behavior:"smooth"})}),200)));var t},children:"CREDITS"}):null]})]},"news"+t),r==e.fields.id?Object(h.jsx)("div",{ref:O,className:fe.a.section,children:Object(h.jsx)("div",{dangerouslySetInnerHTML:{__html:b()(e.fields.popUp)}})},"news"+t):null,_==e.fields.id?Object(h.jsx)("div",{ref:g,className:fe.a.section,children:Object(h.jsx)("div",{dangerouslySetInnerHTML:{__html:b()(e.fields.credits)}})},"news"+t):null]})}))}):null})})})},xe=n(34),Oe=n.n(xe);var ge=function(e){Object(a.useEffect)((function(){d.getEntries({content_type:"live",order:"fields.date","fields.tet":!0}).then((function(e){console.log("API",e.items),console.log("DAte",new Date),o(e.items)})).catch(console.error)}),[]);var t=Object(a.useState)(null),n=Object(l.a)(t,2),c=n[0],o=n[1];return Object(h.jsx)("div",{className:"container4tet",children:Object(h.jsx)("div",{className:"contentContainer",children:Object(h.jsx)("div",{className:"fadeIn",children:c&&e.showContent?c.map((function(e,t){return Object(h.jsxs)("div",{className:Oe.a.row,children:[Object(h.jsxs)("div",{className:"column",children:[Object(h.jsx)("div",{dangerouslySetInnerHTML:{__html:b()(f(e.fields.date))}}),Object(h.jsx)("div",{dangerouslySetInnerHTML:{__html:b()(e.fields.band)}})]}),Object(h.jsxs)("div",{className:"column",children:[Object(h.jsx)("div",{className:Oe.a.column,dangerouslySetInnerHTML:{__html:b()(e.fields.location)}}),Object(h.jsx)("div",{className:Oe.a.column,dangerouslySetInnerHTML:{__html:b()(e.fields.city)}})]})]},"live"+t)})):null})})})},pe=n(26),Ne=n.n(pe);var we=function(e){Object(a.useEffect)((function(){d.getEntries({content_type:"video",order:"fields.index"}).then((function(e){console.log("API",e.items),o(e.items.reverse())})).catch(console.error)}),[]);var t=Object(a.useState)(null),n=Object(l.a)(t,2),c=n[0],o=n[1];return Object(h.jsx)("div",{className:Ne.a.container4tet,children:Object(h.jsx)("div",{className:Ne.a.contentContainer,children:c&&e.showContent?Object(h.jsx)("div",{className:Ne.a.container,children:c.map((function(e,t){return Object(h.jsx)("div",{className:Ne.a.section,children:e.fields.video?Object(h.jsx)("div",{className:Ne.a.videoContainer,children:Object(h.jsx)(v.a,{width:"100%",height:"100%",playing:!0,muted:!0,controls:!0,url:"www.youtube.com/".concat(e.fields.video.fields.file.fileName)})}):null},"news"+t)}))}):null})})},Me=n(71),Ce=n.n(Me);var Se=function(e){Object(a.useEffect)((function(){d.getEntries({content_type:"contact4tet"}).then((function(e){console.log("API",e.items),o(e.items.reverse())})).catch(console.error)}),[]);var t=Object(a.useState)(null),n=Object(l.a)(t,2),c=n[0],o=n[1];return Object(h.jsx)("div",{className:"container4tet",children:Object(h.jsx)("div",{className:"contentContainer",children:Object(h.jsx)("div",{className:"fadeIn",children:Object(h.jsx)("div",{className:Ce.a.align,children:Object(h.jsx)("div",{children:c&&e.showContent?Object(h.jsxs)(h.Fragment,{children:[c.map((function(e,t){return Object(h.jsx)("div",{className:"rowSpacing",dangerouslySetInnerHTML:{__html:b()(e.fields.text.replace(/\n/g,"</br>"))}},"about"+t)})),Object(h.jsx)("button",{className:"buttonFullLengthDark",onClick:function(){return P("http://eepurl.com/hH-Ba9")},children:"Click here to subscribe for the newsletter"}),Object(h.jsx)("em",{children:"Fill out the form to contact me directly"}),Object(h.jsx)(I,{buttonDark:!0})]}):null})})})})})};var Te=function(){var e=Object(a.useState)(!0),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(!1),s=Object(l.a)(o,2),i=s[0],u=s[1];return console.log("showContent",n),console.log("toQuartet",i),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(le,{showContent:n,setShowContent:c,toQuartet:i,setToQuartet:u}),Object(h.jsxs)(r.d,{children:[Object(h.jsx)(r.b,{path:"/news",exact:!0,component:function(){return Object(h.jsx)(x,{showContent:n,setShowContent:c})}}),Object(h.jsx)(r.b,{path:"/about",exact:!0,component:function(){return Object(h.jsx)(p,{showContent:n,setShowContent:c})}}),Object(h.jsx)(r.b,{path:"/contact",exact:!0,component:function(){return Object(h.jsx)(k,{showContent:n,setShowContent:c})}}),Object(h.jsx)(r.b,{path:"/projects",exact:!0,component:function(){return Object(h.jsx)(D,{showContent:n,setShowContent:c,setToQuartet:u})}}),Object(h.jsx)(r.b,{path:"/live",exact:!0,component:function(){return Object(h.jsx)(q,{showContent:n,setShowContent:c})}}),Object(h.jsx)(r.b,{path:"/4tet/news",exact:!0,component:function(){return Object(h.jsx)(de,{showContent:n,setShowContent:c})}}),Object(h.jsx)(r.b,{path:"/4tet/about",exact:!0,component:function(){return Object(h.jsx)(_e,{showContent:n,setShowContent:c})}}),Object(h.jsx)(r.b,{path:"/4tet/video",exact:!0,component:function(){return Object(h.jsx)(we,{showContent:n,setShowContent:c})}}),Object(h.jsx)(r.b,{path:"/4tet/music",exact:!0,component:function(){return Object(h.jsx)(he,{showContent:n,setShowContent:c})}}),Object(h.jsx)(r.b,{path:"/4tet/live",exact:!0,component:function(){return Object(h.jsx)(ge,{showContent:n,setShowContent:c})}}),Object(h.jsx)(r.b,{path:"/4tet/contact",exact:!0,component:function(){return Object(h.jsx)(Se,{showContent:n,setShowContent:c})}})]})]})};var Qe=function(){return Object(h.jsx)(i.a,{children:Object(h.jsx)(r.b,{path:"/",children:Object(h.jsx)(Te,{})})})},Be=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,164)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),o(e),s(e)}))};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(Qe,{})}),document.getElementById("root")),Be()},18:function(e,t,n){e.exports={imageContainer:"News_imageContainer__1R0Ny",title:"News_title__34cvB",videoContainer:"News_videoContainer__slsis",text:"News_text__29dpv",section:"News_section__2dN1J",container:"News_container__3AGHc",contentContainer:"News_contentContainer__33oa8",row:"News_row__2-D0q"}},2:function(e,t,n){e.exports={container:"NavBarMM_container__15FTm",quartet:"NavBarMM_quartet__1Z5UD",icon:"NavBarMM_icon__3xFc2",iconLeft:"NavBarMM_iconLeft__iVXNw",imageContainer:"NavBarMM_imageContainer__3Y2zQ",image:"NavBarMM_image__3f-Ze",imageQuartet:"NavBarMM_imageQuartet__3hqB-",transition:"NavBarMM_transition__89VKw",active:"NavBarMM_active__3meRB",photoSidebar:"NavBarMM_photoSidebar__EpxYq",photoSidebarQuartet:"NavBarMM_photoSidebarQuartet__2SP02",main:"NavBarMM_main__3WG3y",boxTop:"NavBarMM_boxTop__36KZ4",boxBottom:"NavBarMM_boxBottom__1f9_5",boxBottomQuartet:"NavBarMM_boxBottomQuartet__3lBb2",animationBoxBottom:"NavBarMM_animationBoxBottom__8AQBQ",animationBoxTop:"NavBarMM_animationBoxTop__3DZdq",first:"NavBarMM_first__2yhAd",second:"NavBarMM_second__3Mevb",firstDark:"NavBarMM_firstDark__1Jafa",secondDark:"NavBarMM_secondDark__ISq5A",nav:"NavBarMM_nav__2yF92",navQuartet:"NavBarMM_navQuartet__2t5jH",link:"NavBarMM_link__2gxEW",navPoint:"NavBarMM_navPoint__FHyCJ",navPointActive:"NavBarMM_navPointActive__n6ukW",navPointActiveQuartet:"NavBarMM_navPointActiveQuartet__33aUN",navPointQuartet:"NavBarMM_navPointQuartet__2y5QB",row:"NavBarMM_row__hfyNv",news:"NavBarMM_news__2Vc9n",about:"NavBarMM_about__2c0Y4",video:"NavBarMM_video__1K2zu",contact:"NavBarMM_contact__pGSa8",newsQuartet:"NavBarMM_newsQuartet__14JW0",aboutQuartet:"NavBarMM_aboutQuartet__2P4lD",videoQuartet:"NavBarMM_videoQuartet__1HCPR",contactQuartet:"NavBarMM_contactQuartet__1AJap",cat:"NavBarMM_cat__1PumN",screen:"NavBarMM_screen__3K5Mr",rowToRight:"NavBarMM_rowToRight__2fGuD",rowToLeft:"NavBarMM_rowToLeft__2sgbc",doubleWidth:"NavBarMM_doubleWidth__HM1hz"}},20:function(e,t,n){e.exports={imageContainer:"News_imageContainer__2_GmQ",title:"News_title__2DMoD",videoContainer:"News_videoContainer__3sYnf",text:"News_text__2Ej67",section:"News_section__wPK5J",container:"News_container__35zUl",contentContainer:"News_contentContainer__1YZGf",row:"News_row__4Ksog"}},21:function(e,t,n){e.exports={icon:"SocialMedia_icon__15NG5",iconQuartet:"SocialMedia_iconQuartet__KnyQ-",container:"SocialMedia_container__jz6PF",containerQuartet:"SocialMedia_containerQuartet__2f9bw"}},26:function(e,t,n){e.exports={imageContainer:"Video_imageContainer__1yVSU",title:"Video_title__3wHCD",videoContainer:"Video_videoContainer__18an_",text:"Video_text__3EExO",section:"Video_section__295Ic",container:"Video_container__2WRUF",contentContainer:"Video_contentContainer__354vA",container4tet:"Video_container4tet__3Ahgv"}},30:function(e,t,n){e.exports={text:"About_text__2rgzH",row:"About_row__7WiqT",align:"About_align__QfS2l"}},31:function(e,t,n){e.exports={submitButton:"ContactForm_submitButton__1j4U7",inputName:"ContactForm_inputName__26Y8y",textArea:"ContactForm_textArea__1xmSA",row:"ContactForm_row__8jQ_O"}},32:function(e,t,n){e.exports={row:"Live_row__aWhs-",column:"Live_column__1s9W0"}},33:function(e,t,n){},34:function(e,t,n){e.exports={row:"Live_row__2fguz",column:"Live_column__3Vf7k"}},43:function(e,t){},69:function(e,t,n){e.exports={align:"Contact_align__2p_Jw"}},71:function(e,t,n){e.exports={align:"Contact_align__zSGW8"}},77:function(e,t,n){},78:function(e,t,n){}},[[163,1,2]]]);
//# sourceMappingURL=main.2ce0228c.chunk.js.map