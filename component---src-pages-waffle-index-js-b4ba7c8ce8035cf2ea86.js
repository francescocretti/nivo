"use strict";(self.webpackChunknivo_website=self.webpackChunknivo_website||[]).push([[4488],{14225:function(t,e,o){o.r(e);o(27378);var i=o(9971),r=o(22543),a=o(59306),n=o(25592),l=o(6522),c=o(25414),p=o(24246);function s(){return s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i])}return t},s.apply(this,arguments)}var m=function(){return[{id:"men",label:"men",value:33*Math.random(),color:"#468df3"},{id:"women",label:"women",value:33*Math.random(),color:"#ba72ff"},{id:"children",label:"children",value:33*Math.random(),color:"#a1cfff"}]},f={total:100,rows:18,columns:14,fillDirection:"bottom",padding:1,margin:{top:10,right:10,bottom:10,left:120},cellComponent:"default",emptyColor:"#cccccc",emptyOpacity:1,colors:{scheme:"nivo"},borderWidth:0,borderColor:{from:"color",modifiers:[["darker",.3]]},animate:!0,motionStiffness:90,motionDamping:11,isInteractive:!0,"custom tooltip example":!1,tooltip:null,legends:[{anchor:"top-left",direction:"column",justify:!1,translateX:-100,translateY:0,itemsSpacing:4,itemWidth:100,itemHeight:20,itemDirection:"left-to-right",itemOpacity:1,itemTextColor:"#777",symbolSize:20,onClick:function(t){alert(JSON.stringify(t,null,"    "))},effects:[{on:"hover",style:{itemTextColor:"#000",itemBackground:"#f7fafb"}}]}]};e.default=function(){var t=(0,c.useStaticQuery)("3797897049").image.childImageSharp.gatsbyImageData;return(0,p.jsx)(r.T,{name:"Waffle",meta:a.XF,icon:"waffle",flavors:a.Kk,currentFlavor:"svg",properties:n.X,propertiesMapper:l.Z,initialProperties:f,defaultProperties:i.e8,codePropertiesMapper:function(t){return s({},t,{cellComponent:t.cellComponent?"CustomCell(props) => (…)":void 0,tooltip:t.tooltip?"CustomTooltip(props) => (…)":void 0})},generateData:m,image:t,children:function(t,e,o,r){return(0,p.jsx)(i.qx,s({data:e},t,{theme:o,onClick:function(t){var e;e=void 0!==t.data.value?t.data.label+": "+t.data.value+" (position: "+t.position+")":"empty at position: "+t.position,r({type:"click",label:"[cell] "+e,color:t.color,data:t})}}))}})}}}]);
//# sourceMappingURL=component---src-pages-waffle-index-js-b4ba7c8ce8035cf2ea86.js.map