(this["webpackJsonpreactjs-p32929"]=this["webpackJsonpreactjs-p32929"]||[]).push([[0],{66:function(e,t,n){e.exports=n(76)},71:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(11),r=n.n(i);n(71),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=n(39),l=n(19),s=Object(c.b)(),m=Object(l.c)({state:{selectedIndex:0},actions:{setSelectedIndex:function(e,t){e.state.selectedIndex=t}}}),u=n(26),d=n(108),g=n(9),h=n(10),p=function(){function e(){Object(g.a)(this,e)}return Object(h.a)(e,null,[{key:"getContainerHeight",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return{maxHeight:window.innerHeight,maxWidth:window.innerWidth-e,height:window.innerHeight,width:window.innerWidth-e}}}]),e}(),y=n(118),f=n(119),w=n(115),b=n(112),E={topMessage:{fontWeight:"bold",fontFamily:"auto"},bottomMessage:{textAlign:"center",fontFamily:"monospace",lineHeight:1}},v=function(){return o.a.createElement(d.a,{style:{paddingTop:40,paddingLeft:20,paddingRight:20,paddingBottom:40},container:!0,item:!0,xs:!0,direction:"column",alignItems:"center",alignContent:"center"},o.a.createElement(b.a,{style:E.topMessage,variant:"h3"},"WELCOME"),o.a.createElement(b.a,{variant:"subtitle1",style:E.bottomMessage},"Send money directly to ",o.a.createElement("b",null,"Fayaz Bin Salam"),o.a.createElement("br",null),"First select your country and it will show you list of available options to send the money"))},C=[{country:"Bangladesh",options:[{logo:"https://www.logo.wine/a/logo/BKash/BKash-Icon-Logo.wine.svg",title:"bKash",desc:"Account number: 01796306262",link:"https://www.bkash.com/"},{logo:"https://user-images.githubusercontent.com/6418354/85701466-3d533380-b6ff-11ea-9501-5463bea9bca1.png",title:"EXIM Bank",desc:"Account Holder Name: FAYAZ BIN SALAM\n                Bank Name: EXIM Bank\n                Branch Name: Banani Branch\n                Account Number: 06112100087615\n                SWIFT code: EXBKBDDH",link:"https://www.eximbankbd.com/"}]},{country:"Other countries",options:[{logo:"https://user-images.githubusercontent.com/6418354/85705970-90c78080-b703-11ea-990f-3b4bc01e57cc.png",title:"XOOM",desc:"Account Holder Name: FAYAZ BIN SALAM\n                Bank Name: EXIM Bank\n                Branch Name: Banani Branch\n                Account Number: 06112100087615\n                SWIFT code: EXBKBDDH\n                \n                You can transfer money to my bank account via Xoom or Transferwise or any service you trust",link:"https://www.xoom.com/"}]}],B=n(113),x=n(117),k=n(116),I=function(e){var t=s(),n=(t.state,t.actions,e.size),a=void 0===n?48:n,i=e.path,r=e.styles,c=void 0===r?{}:r;return o.a.createElement("svg",{style:Object(u.a)({width:a,height:a},c),viewBox:"0 0 24 24"},o.a.createElement("path",{fill:"#304FFE",d:i}))},j={parent:{margin:2},avatar:{margin:16},textContainer:{marginTop:16,marginBottom:16,marginRight:16,overflow:"hidden"},title:{fontSize:16,color:"#212121",lineHeight:1.25},desc:{fontSize:14,color:"#757575",lineHeight:1.25,overflow:"hidden",whiteSpace:"pre-line"}};var S=function(e){var t=s(),n=(t.state,t.actions,e.item);return o.a.createElement(d.a,{style:{width:"90%"},item:!0,xs:12,sm:12,md:12,lg:12,xl:12},o.a.createElement(B.a,{elevation:4,style:Object(u.a)({height:"auto"},j.parent)},o.a.createElement(d.a,{container:!0,wrap:"nowrap",direction:"row",justify:"center"},o.a.createElement(d.a,{item:!0},o.a.createElement(x.a,{variant:"square",style:j.avatar,src:n.logo})),o.a.createElement(d.a,{item:!0,xs:!0,style:j.textContainer,container:!0,justify:"center",direction:"column"},o.a.createElement(b.a,{style:j.title},n.title),o.a.createElement(b.a,{style:j.desc},n.desc||n.link)),function(e){if(e&&e.toString().includes("http"))return o.a.createElement(k.a,{style:{display:"flex",flexDirection:"column",alignSelf:"center"},target:"_blank",href:e,size:"small"},o.a.createElement(I,{path:"M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z",styles:{padding:8},size:24}))}(n.link))))},A=(Object(u.a)(Object(u.a)({},p.getContainerHeight()),{},{backgroundColor:"#2196F3",display:"flex",alignItems:"center",alignContent:"center",justify:"center",justifyContent:"center",justifyItems:"center",justifySelf:"center"}),function(){var e=s(),t=e.state,n=e.actions;return o.a.createElement(d.a,{style:{padding:8},container:!0,direction:"column",justify:"flex-start",alignContent:"center",alignItems:"center"},o.a.createElement(v,null),o.a.createElement(y.a,{style:{width:"90%",backgroundColor:"transparent"},variant:"filled"},o.a.createElement(f.a,{filled:!0,required:!0},"Select your country"),o.a.createElement(w.a,{onChange:function(e){var t=parseInt(e.target.value);n.setSelectedIndex(t)},style:{backgroundColor:"transparent"},native:!0,displayEmpty:!0},o.a.createElement("option",{"aria-label":"None",value:0}),C.map((function(e,t){return o.a.createElement("option",{value:t+1},e.country)})))),t.selectedIndex>0&&o.a.createElement(d.a,{container:!0,style:{width:"90%",marginTop:16}},o.a.createElement(b.a,{style:{color:"#757575",fontSize:10},variant:"overline"},"_#_ Available options"),C[t.selectedIndex-1].options.map((function(e,t){return o.a.createElement(S,{item:e})}))))}),M=n(60),L=n(114),O=Object(M.a)({typography:{useNextVariants:!0,fontFamily:"'Montserrat', sans-serif"}});r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(L.a,{theme:O},o.a.createElement(c.a,{value:m},o.a.createElement(A,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[66,1,2]]]);
//# sourceMappingURL=main.b65e1f0d.chunk.js.map