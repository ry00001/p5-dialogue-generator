self.webpackHotUpdatep5_generator(179,{194:function(e,t,o){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var a in t=arguments[o])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=o(893),s=o(294),r=a(o(558));t.default=function(e){var t=e.char,o=e.setChar,a=e.emote,d=e.setEmote,c=e.costume,l=e.setCostume,v=e.setPortrait,u=e.text,m=e.setText,g=e.font,h=e.setFont,f=e.boxFont,x=e.setBoxFont,p=e.box,w=e.setBox,j=e.selection,D=e.setSelection,C={char:t,setChar:o,emote:a,setEmote:d,costume:c,setCostume:l,setPortrait:v,box:p,setBox:w,boxFont:f,setBoxFont:x,font:g,selection:j,setSelection:D};return s.useEffect((function(){w("https://p5generator.s3.amazonaws.com/images/boxes/db-"+j+"-"+f+".png")}),[f]),i.jsxs("div",n({id:"textAndTools"},{children:[i.jsx(r.default,n({},C),void 0),i.jsxs("div",n({id:"textAndDownload"},{children:[i.jsxs("div",n({id:"enterDialogue"},{children:[i.jsx("div",n({id:"dialogueHeader"},{children:"Dialogue"}),void 0),i.jsx("textarea",{id:"textField",placeholder:"Hey, Inmate! Character portraits contain spoilers!",rows:3,cols:50,defaultValue:u,onChange:function(e){return m(e.target.value)}},void 0)]}),void 0),i.jsxs("div",n({id:"download",className:"knife",onClick:function(){var e=document.createElement("canvas");e.width=1275,e.height=500;var o=document.getElementById("portraitCanvas"),n=(document.getElementById("boxCanvas"),document.getElementById("textCanvas"),new Image);n.src=o.toDataURL("image/png"),n.crossOrigin="anonymous";var a=new Image;a.src=o.toDataURL("image/png"),a.crossOrigin="anonymous";var i=new Image;i.src=o.toDataURL("image/png"),i.crossOrigin="anonymous";var s=e.getContext("2d");s.drawImage(n,0,0,1275,500),s.drawImage(a,0,0,1275,500),s.drawImage(i,0,0,1275,500);var r=document.createElement("a");r.download=t+"-"+u+".png",r.href=e.toDataURL("image/png"),r.click()}},{children:[i.jsx("svg",n({xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},{children:i.jsx("path",{d:"M12 24l-8-9h6v-15h4v15h6z"},void 0)}),void 0),i.jsx("div",{children:"Download"},void 0)]}),void 0)]}),void 0),i.jsxs("div",n({id:"fontDiv"},{children:[i.jsx("div",n({id:"fontHeader"},{children:"Font Select"}),void 0),i.jsx("div",n({id:"vanillaFont",className:"fonts KRSMDivs knife",onClick:function(){h("KoreanKRSM"),x("KoreanKRSM")}},{children:"KoreanKRSM (Persona 5)"}),void 0),i.jsx("div",n({id:"royalFont",className:"fonts optimaDivs knife",onClick:function(){h("Optima nova LT"),x("Optima nova LT")}},{children:"Optima Nova Black (Persona 5 Royal)"}),void 0),i.jsx("div",n({id:"japaneseFont",className:"fonts slumpDivs knife",onClick:function(){return h("SlumpDB")},lang:"ja"},{children:"Slump DB (ペルソナ5 - 日本語)"}),void 0)]}),void 0)]}),void 0)}}},(function(e){"use strict";e.h=()=>"232f1425cfe77f0ace4f"}));