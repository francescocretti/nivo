"use strict";(self.webpackChunknivo_website=self.webpackChunknivo_website||[]).push([[103],{6522:function(e,t,i){i.d(t,{Z:function(){return m}});i(27378);var o=i(62370),n=i(91542),r=i(24246),l=n.default.div.withConfig({displayName:"CustomTooltip__TooltipWrapper",componentId:"sc-1lm8wm-0"})(["display:grid;grid-template-columns:1fr 1fr;grid-column-gap:12px;"]),a=n.default.span.withConfig({displayName:"CustomTooltip__TooltipKey",componentId:"sc-1lm8wm-1"})(["font-weight:600;"]),s=n.default.span.withConfig({displayName:"CustomTooltip__TooltipValue",componentId:"sc-1lm8wm-2"})([""]),c=function(e){return(0,r.jsxs)(l,{style:{color:e.color},children:[(0,r.jsx)(a,{children:"label"}),(0,r.jsx)(s,{children:e.label}),(0,r.jsx)(a,{children:"id"}),(0,r.jsx)(s,{children:e.id}),(0,r.jsx)(a,{children:"value"}),(0,r.jsx)(s,{children:e.value}),(0,r.jsx)(a,{children:"position"}),(0,r.jsx)(s,{children:e.position}),(0,r.jsx)(a,{children:"groupIndex"}),(0,r.jsx)(s,{children:e.groupIndex}),(0,r.jsx)(a,{children:"row"}),(0,r.jsx)(s,{children:e.row}),(0,r.jsx)(a,{children:"column"}),(0,r.jsx)(s,{children:e.column}),(0,r.jsx)(a,{children:"color"}),(0,r.jsx)(s,{children:e.color})]})},d=function(e){var t=e.position,i=e.size,o=e.x,n=e.y,l=e.color,a=e.fill,s=e.opacity,c=e.borderWidth,d=e.borderColor,u=e.data,m=e.onHover,g=e.onLeave,h=e.onClick;return(0,r.jsx)("circle",{r:i/2,cx:o+i/2,cy:n+i/2,fill:a||l,strokeWidth:c,stroke:d,opacity:s,onMouseEnter:m,onMouseMove:m,onMouseLeave:g,onClick:function(e){h({position:t,color:l,x:o,y:n,data:u},e)}})},u=function(e){var t=e.position,i=e.size,o=e.x,n=e.y,l=e.color,a=e.opacity,s=e.borderWidth,c=e.borderColor,d=e.data,u=e.onHover,m=e.onLeave,g=e.onClick;return(0,r.jsx)("div",{style:{borderRadius:i/2+"px 0 "+i/2+"px 0",position:"absolute",top:n,left:o,width:i,height:i,background:l,opacity:a,boxSizing:"content-box",borderStyle:"solid",borderWidth:s+"px",borderColor:c},onMouseEnter:u,onMouseMove:u,onMouseLeave:m,onClick:function(e){g({position:t,color:l,x:o,y:n,data:d},e)}})},m=(0,o.h8)({cellComponent:function(e,t,i){if("Custom(props) => (…)"===e)return"Waffle"===i.component?d:u},tooltip:function(e,t){return t["custom tooltip example"]?c:null}},{exclude:["custom tooltip example"]})},25592:function(e,t,i){i.d(t,{X:function(){return c}});var o=i(9971),n=i(80169),r=i(3759),l=["svg","html","canvas"],a=o.e8,s=[{key:"total",group:"Base",type:"number",required:!0,help:"Max value.",description:"Max value, ratio will be computed against this value for each datum.",flavors:l},{key:"data",group:"Base",help:"Chart data.",description:"\n            Chart data, which must conform to this structure:\n            ```\n            Array<{\n                id:    string | number\n                value: number\n                label: string | number\n            }>\n            ```\n        ",type:"object[]",required:!0,flavors:l},{key:"rows",group:"Base",type:"number",help:"Number of rows.",required:!0,flavors:l,control:{type:"range",min:1,max:100}},{key:"columns",group:"Base",type:"number",help:"Number of columns.",required:!0,flavors:l,control:{type:"range",min:1,max:100}},{key:"fillDirection",group:"Base",type:"string",required:!1,help:"How to fill the waffle.",flavors:l,defaultValue:a.fillDirection,control:{type:"choices",choices:[{label:"top",value:"top"},{label:"right",value:"right"},{label:"bottom",value:"bottom"},{label:"left",value:"left"}]}},{key:"padding",group:"Base",type:"number",help:"Padding between each cell.",required:!0,flavors:l,control:{type:"range",unit:"px",min:0,max:10}}].concat((0,r.nk)(l),[(0,n.JR)(["svg","html","canvas"]),{key:"cellComponent",flavors:["svg","html"],help:"Override default cell component.",type:"Function",required:!1,group:"Style",control:{type:"choices",choices:["default","Custom(props) => (…)"].map((function(e){return{label:e,value:e}}))}},(0,r.at)({flavors:l,defaultValue:a.colors}),{key:"emptyColor",group:"Style",help:"Defines empty cells color.",type:"string",required:!1,defaultValue:a.emptyColor,flavors:l,control:{type:"colorPicker"}},{key:"emptyOpacity",group:"Style",help:"Empty cells opacity.",required:!1,defaultValue:a.emptyOpacity,type:"number",flavors:l,control:{type:"opacity"}},{key:"borderWidth",group:"Style",type:"number",required:!1,help:"Control cell border width.",defaultValue:a.borderWidth,flavors:l,control:{type:"lineWidth"}},{key:"borderColor",group:"Style",type:"string | object | Function",required:!1,help:"Method to compute cell border color.",defaultValue:a.borderColor,flavors:["svg","html","canvas"],control:{type:"inheritedColor"}}],(0,n.uE)("Style",["svg"]),[(0,r.y1)({flavors:["svg","html","canvas"],defaultValue:a.isInteractive}),{key:"onClick",group:"Interactivity",type:"Function",required:!1,help:"onClick handler, it receives clicked node data and style plus mouse event.",flavors:["svg","html","canvas"]},{key:"tooltip",group:"Interactivity",type:"Function",required:!1,help:"Custom tooltip component",flavors:l,description:"\n            A function allowing complete tooltip customisation,\n            it must return a valid HTML element and will\n            receive the following data:\n            ```\n            {\n                id:         {string|number},\n                value:      number,\n                label:      {string|number},\n                color:      string,\n                position:   number,\n                row:        number,\n                column:     number,\n                groupIndex: number,\n                startAt:    number,\n                endAt:      number,\n            }\n            ```\n            You can customize the tooltip style\n            using the `theme.tooltip` object.\n        "},{key:"custom tooltip example",group:"Interactivity",type:"boolean",required:!1,control:{type:"switch"},help:"Showcase custom tooltip.",flavors:l},{key:"legends",group:"Legends",type:"object[]",required:!1,help:"Optional chart's legends.",flavors:["svg","canvas"],control:{type:"array",props:(0,n.y0)(["svg","canvas"]),shouldCreate:!0,addLabel:"add legend",shouldRemove:!0,defaults:{anchor:"left",direction:"column",justify:!1,translateX:-100,translateY:0,itemWidth:100,itemHeight:20,itemsSpacing:4,symbolSize:20,itemDirection:"left-to-right",itemTextColor:"#777",onClick:function(e){console.log(JSON.stringify(e,null,"    "))},effects:[{on:"hover",style:{itemTextColor:"#000",itemBackground:"#f7fafb"}}]}}}],(0,n.$j)(["svg","html"],a)),c=(0,n.R2)(s)},62370:function(e,t,i){i.d(t,{h8:function(){return s},h6:function(){return c},Ld:function(){return d}});var o=i(48159),n=i.n(o),r=i(76744),l=i.n(r);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},a.apply(this,arguments)}var s=function(e,t){var i=(void 0===t?{}:t).exclude,o=void 0===i?[]:i;return function(t,i){void 0===i&&(i={});var r={};return Object.keys(t).forEach((function(o){e[o]&&(r[o]=e[o](t[o],t,i))})),a({},n()(t,o),r)}},c=function(e){return function(t,i){return i["axis"+l()(e)].enable?n()(t,["enable"]):null}},d=function(e){var t=e.format;return e.enabled?t:void 0}},47425:function(e,t,i){i.d(t,{Bo:function(){return C},$6:function(){return E},iQ:function(){return D},Ae:function(){return w},aJ:function(){return B},as:function(){return z},_i:function(){return V}});var o=i(64253),n=i(9841),r=i(98383),l=i(14503),a=i(27378),s=i(23615),c=i.n(s),d="/Users/raph/projects/plouc/nivo/packages/legends/src/svg/symbols/SymbolDiamond.tsx",u="/Users/raph/projects/plouc/nivo/packages/legends/src/svg/symbols/SymbolTriangle.tsx";function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},m.apply(this,arguments)}var g={length:200,thickness:16,direction:"row",tickPosition:"after",tickSize:4,tickSpacing:3,tickOverlap:!1,tickFormat:function(e){return""+e},titleAlign:"start",titleOffset:4},h={top:0,right:0,bottom:0,left:0},p=function(e){var t,i=e.direction,o=e.itemsSpacing,n=e.padding,r=e.itemCount,l=e.itemWidth,a=e.itemHeight;if("number"!=typeof n&&("object"!=typeof(t=n)||Array.isArray(t)||null===t))throw new Error("Invalid property padding, must be one of: number, object");var s="number"==typeof n?{top:n,right:n,bottom:n,left:n}:m({},h,n),c=s.left+s.right,d=s.top+s.bottom,u=l+c,g=a+d,p=(r-1)*o;return"row"===i?u=l*r+p+c:"column"===i&&(g=a*r+p+d),{width:u,height:g,padding:s}},f=function(e){var t=e.anchor,i=e.translateX,o=e.translateY,n=e.containerWidth,r=e.containerHeight,l=e.width,a=e.height,s=i,c=o;switch(t){case"top":s+=(n-l)/2;break;case"top-right":s+=n-l;break;case"right":s+=n-l,c+=(r-a)/2;break;case"bottom-right":s+=n-l,c+=r-a;break;case"bottom":s+=(n-l)/2,c+=r-a;break;case"bottom-left":c+=r-a;break;case"left":c+=(r-a)/2;break;case"center":s+=(n-l)/2,c+=(r-a)/2}return{x:s,y:c}},v=function(e){var t,i,o,n,r,l,a=e.direction,s=e.justify,c=e.symbolSize,d=e.symbolSpacing,u=e.width,m=e.height;switch(a){case"left-to-right":t=0,i=(m-c)/2,n=m/2,l="central",s?(o=u,r="end"):(o=c+d,r="start");break;case"right-to-left":t=u-c,i=(m-c)/2,n=m/2,l="central",s?(o=0,r="start"):(o=u-c-d,r="end");break;case"top-to-bottom":t=(u-c)/2,i=0,o=u/2,r="middle",s?(n=m,l="alphabetic"):(n=c+d,l="text-before-edge");break;case"bottom-to-top":t=(u-c)/2,i=m-c,o=u/2,r="middle",s?(n=0,l="text-before-edge"):(n=m-c-d,l="alphabetic")}return{symbolX:t,symbolY:i,labelX:o,labelY:n,labelAnchor:r,labelAlignment:l}},b=function(e){var t,i=e.scale,o=e.ticks,a=e.length,s=void 0===a?g.length:a,c=e.thickness,d=void 0===c?g.thickness:c,u=e.direction,m=void 0===u?g.direction:u,h=e.tickPosition,p=void 0===h?g.tickPosition:h,f=e.tickSize,v=void 0===f?g.tickSize:f,b=e.tickSpacing,y=void 0===b?g.tickSpacing:b,x=e.tickOverlap,k=void 0===x?g.tickOverlap:x,S=e.tickFormat,C=void 0===S?g.tickFormat:S,j=e.title,N=e.titleAlign,w=void 0===N?g.titleAlign:N,W=e.titleOffset,A=void 0===W?g.titleOffset:W,E="column"===m?[].concat(i.domain()).reverse():i.domain(),O=(0,n.Z)().domain(E);2===E.length?O.range([0,s]):3===E.length&&O.range([0,s/2,s]),t="thresholds"in i?[E[0]].concat(i.thresholds(),[E[1]]):Array.isArray(o)?o:i.ticks(o);var z,B,V,D,H,X,Y,L,M,T,q,F,R,P,I=(0,l.TO)(i,32),_=(0,r.kZ)(C),U=[],G=0,J=0;"row"===m?(z=s,B=d,J=1,H=0,V="start"===w?0:"middle"===w?s/2:s,"before"===p?(Y=-v,L=k?d:0,M=-v-y,T="alphabetic",D=d+A,X="hanging"):(Y=k?0:d,M=(L=d+v)+y,T="hanging",D=-A,X="alphabetic"),t.forEach((function(e){var t=O(e);U.push({x1:t,y1:Y,x2:t,y2:L,text:_(e),textX:t,textY:M,textHorizontalAlign:"middle",textVerticalAlign:T})}))):(z=d,B=s,G=1,H=-90,D="start"===w?s:"middle"===w?s/2:0,"before"===p?(F=k?d:0,R=(q=-v)-y,P="end",V=d+A,X="hanging"):(q=k?0:d,R=(F=d+v)+y,P="start",V=-A,X="alphabetic"),t.forEach((function(e){var t=O(e);U.push({x1:q,y1:t,x2:F,y2:t,text:_(e),textX:R,textY:t,textHorizontalAlign:P,textVerticalAlign:"central"})})));return{width:z,height:B,gradientX1:0,gradientY1:G,gradientX2:J,gradientY2:0,colorStops:I,ticks:U,titleText:j,titleX:V,titleY:D,titleRotation:H,titleHorizontalAlign:w,titleVerticalAlign:X}},y="/Users/raph/projects/plouc/nivo/packages/legends/src/svg/ContinuousColorsLegendSvg.tsx",x=function(e){var t=e.scale,i=e.ticks,n=e.length,l=void 0===n?g.length:n,s=e.thickness,c=void 0===s?g.thickness:s,d=e.direction,u=void 0===d?g.direction:d,h=e.tickPosition,p=void 0===h?g.tickPosition:h,f=e.tickSize,v=void 0===f?g.tickSize:f,x=e.tickSpacing,k=void 0===x?g.tickSpacing:x,S=e.tickOverlap,C=void 0===S?g.tickOverlap:S,j=e.tickFormat,N=void 0===j?g.tickFormat:j,w=e.title,W=e.titleAlign,A=void 0===W?g.titleAlign:W,E=e.titleOffset,O=b({scale:t,ticks:i,length:l,thickness:c,direction:u,tickPosition:p,tickSize:v,tickSpacing:k,tickOverlap:C,tickFormat:N,title:w,titleAlign:A,titleOffset:void 0===E?g.titleOffset:E}),z=O.width,B=O.height,V=O.gradientX1,D=O.gradientY1,H=O.gradientX2,X=O.gradientY2,Y=O.ticks,L=O.colorStops,M=O.titleText,T=O.titleX,q=O.titleY,F=O.titleRotation,R=O.titleVerticalAlign,P=O.titleHorizontalAlign,I=(0,r.Fg)(),_="ContinuousColorsLegendSvgGradient."+u+"."+L.map((function(e){return e.offset})).join("_");return(0,o.jsxDEV)("g",{children:[(0,o.jsxDEV)("defs",{children:(0,o.jsxDEV)("linearGradient",{id:_,x1:V,y1:D,x2:H,y2:X,children:L.map((function(e){return(0,o.jsxDEV)("stop",m({},e),void 0,!1,{fileName:y,lineNumber:70,columnNumber:25},void 0)}))},void 0,!1,{fileName:y,lineNumber:62,columnNumber:17},void 0)},void 0,!1,{fileName:y,lineNumber:61,columnNumber:13},void 0),M&&(0,o.jsxDEV)("text",{transform:"translate("+T+", "+q+") rotate("+F+")",textAnchor:P,dominantBaseline:R,style:I.legends.title.text,children:M},void 0,!1,{fileName:y,lineNumber:75,columnNumber:17},void 0),(0,o.jsxDEV)("rect",{width:z,height:B,fill:"url(#"+_},void 0,!1,{fileName:y,lineNumber:84,columnNumber:13},void 0),Y.map((function(e,t){return(0,o.jsxDEV)(a.Fragment,{children:[(0,o.jsxDEV)("line",{x1:e.x1,y1:e.y1,x2:e.x2,y2:e.y2,style:I.legends.ticks.line},void 0,!1,{fileName:y,lineNumber:87,columnNumber:21},void 0),(0,o.jsxDEV)("text",{x:e.textX,y:e.textY,textAnchor:e.textHorizontalAlign,dominantBaseline:e.textVerticalAlign,style:I.legends.ticks.text,children:e.text},void 0,!1,{fileName:y,lineNumber:94,columnNumber:21},void 0)]},t,!0,{fileName:y,lineNumber:86,columnNumber:17},void 0)}))]},void 0,!0,{fileName:y,lineNumber:60,columnNumber:9},void 0)},k=["containerWidth","containerHeight","anchor","translateX","translateY","length","thickness","direction"],S="/Users/raph/projects/plouc/nivo/packages/legends/src/svg/AnchoredContinuousColorsLegendSvg.tsx",C=function(e){var t,i,n=e.containerWidth,r=e.containerHeight,l=e.anchor,a=e.translateX,s=void 0===a?0:a,c=e.translateY,d=void 0===c?0:c,u=e.length,h=void 0===u?g.length:u,p=e.thickness,v=void 0===p?g.thickness:p,b=e.direction,y=void 0===b?g.direction:b,C=function(e,t){if(null==e)return{};var i,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)i=r[o],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,k);"row"===y?(t=h,i=v):(t=v,i=h);var j=f({anchor:l,translateX:s,translateY:d,containerWidth:n,containerHeight:r,width:t,height:i}),N=j.x,w=j.y;return(0,o.jsxDEV)("g",{transform:"translate("+N+", "+w+")",children:(0,o.jsxDEV)(x,m({length:h,thickness:v,direction:y},C),void 0,!1,{fileName:S,lineNumber:39,columnNumber:13},void 0)},void 0,!1,{fileName:S,lineNumber:38,columnNumber:9},void 0)},j="/Users/raph/projects/plouc/nivo/packages/legends/src/svg/LegendSvgItem.tsx",N={circle:function(e){var t=e.x,i=e.y,n=e.size,r=e.fill,l=e.opacity,a=void 0===l?1:l,s=e.borderWidth,c=void 0===s?0:s,d=e.borderColor;return(0,o.jsxDEV)("circle",{r:n/2,cx:t+n/2,cy:i+n/2,fill:r,opacity:a,strokeWidth:c,stroke:void 0===d?"transparent":d,style:{pointerEvents:"none"}},void 0,!1,{fileName:"/Users/raph/projects/plouc/nivo/packages/legends/src/svg/symbols/SymbolCircle.tsx",lineNumber:13,columnNumber:9},void 0)},diamond:function(e){var t=e.x,i=e.y,n=e.size,r=e.fill,l=e.opacity,a=void 0===l?1:l,s=e.borderWidth,c=void 0===s?0:s,u=e.borderColor;return(0,o.jsxDEV)("g",{transform:"translate("+t+","+i+")",children:(0,o.jsxDEV)("path",{d:"\n                    M"+n/2+" 0\n                    L"+.8*n+" "+n/2+"\n                    L"+n/2+" "+n+"\n                    L"+.2*n+" "+n/2+"\n                    L"+n/2+" 0\n                ",fill:r,opacity:a,strokeWidth:c,stroke:void 0===u?"transparent":u,style:{pointerEvents:"none"}},void 0,!1,{fileName:d,lineNumber:14,columnNumber:13},void 0)},void 0,!1,{fileName:d,lineNumber:13,columnNumber:9},void 0)},square:function(e){var t=e.x,i=e.y,n=e.size,r=e.fill,l=e.opacity,a=void 0===l?1:l,s=e.borderWidth,c=void 0===s?0:s,d=e.borderColor;return(0,o.jsxDEV)("rect",{x:t,y:i,fill:r,opacity:a,strokeWidth:c,stroke:void 0===d?"transparent":d,width:n,height:n,style:{pointerEvents:"none"}},void 0,!1,{fileName:"/Users/raph/projects/plouc/nivo/packages/legends/src/svg/symbols/SymbolSquare.tsx",lineNumber:13,columnNumber:9},void 0)},triangle:function(e){var t=e.x,i=e.y,n=e.size,r=e.fill,l=e.opacity,a=void 0===l?1:l,s=e.borderWidth,c=void 0===s?0:s,d=e.borderColor;return(0,o.jsxDEV)("g",{transform:"translate("+t+","+i+")",children:(0,o.jsxDEV)("path",{d:"\n                M"+n/2+" 0\n                L"+n+" "+n+"\n                L0 "+n+"\n                L"+n/2+" 0\n            ",fill:r,opacity:a,strokeWidth:c,stroke:void 0===d?"transparent":d,style:{pointerEvents:"none"}},void 0,!1,{fileName:u,lineNumber:14,columnNumber:13},void 0)},void 0,!1,{fileName:u,lineNumber:13,columnNumber:9},void 0)}},w=function(e){var t,i,n,l,s,c,d,u,g,h,p,f=e.x,b=e.y,y=e.width,x=e.height,k=e.data,S=e.direction,C=void 0===S?"left-to-right":S,w=e.justify,W=void 0!==w&&w,A=e.textColor,E=e.background,O=void 0===E?"transparent":E,z=e.opacity,B=void 0===z?1:z,V=e.symbolShape,D=void 0===V?"square":V,H=e.symbolSize,X=void 0===H?16:H,Y=e.symbolSpacing,L=void 0===Y?8:Y,M=e.symbolBorderWidth,T=void 0===M?0:M,q=e.symbolBorderColor,F=void 0===q?"transparent":q,R=e.onClick,P=e.onMouseEnter,I=e.onMouseLeave,_=e.toggleSerie,U=e.effects,G=(0,a.useState)({}),J=G[0],Z=G[1],$=(0,r.Fg)(),K=(0,a.useCallback)((function(e){if(U){var t=U.filter((function(e){return"hover"===e.on})).reduce((function(e,t){return m({},e,t.style)}),{});Z(t)}null==P||P(k,e)}),[P,k,U]),Q=(0,a.useCallback)((function(e){if(U){var t=U.filter((function(e){return"hover"!==e.on})).reduce((function(e,t){return m({},e,t.style)}),{});Z(t)}null==I||I(k,e)}),[I,k,U]),ee=v({direction:C,justify:W,symbolSize:null!=(t=J.symbolSize)?t:X,symbolSpacing:L,width:y,height:x}),te=ee.symbolX,ie=ee.symbolY,oe=ee.labelX,ne=ee.labelY,re=ee.labelAnchor,le=ee.labelAlignment,ae=[R,P,I,_].some((function(e){return void 0!==e})),se="function"==typeof D?D:N[D];return(0,o.jsxDEV)("g",{transform:"translate("+f+","+b+")",style:{opacity:null!=(i=J.itemOpacity)?i:B},children:[(0,o.jsxDEV)("rect",{width:y,height:x,fill:null!=(n=J.itemBackground)?n:O,style:{cursor:ae?"pointer":"auto"},onClick:function(e){null==R||R(k,e),null==_||_(k.id)},onMouseEnter:K,onMouseLeave:Q},void 0,!1,{fileName:j,lineNumber:111,columnNumber:13},void 0),a.createElement(se,m({id:k.id,x:te,y:ie,size:null!=(l=J.symbolSize)?l:X,fill:null!=(s=null!=(c=k.fill)?c:k.color)?s:"black",borderWidth:null!=(d=J.symbolBorderWidth)?d:T,borderColor:null!=(u=J.symbolBorderColor)?u:F},k.hidden?$.legends.hidden.symbol:void 0)),(0,o.jsxDEV)("text",{textAnchor:re,style:m({},$.legends.text,{fill:null!=(g=null!=(h=null!=(p=J.itemTextColor)?p:A)?h:$.legends.text.fill)?g:"black",dominantBaseline:le,pointerEvents:"none",userSelect:"none"},k.hidden?$.legends.hidden.text:void 0),x:oe,y:ne,children:k.label},void 0,!1,{fileName:j,lineNumber:135,columnNumber:13},void 0)]},void 0,!0,{fileName:j,lineNumber:105,columnNumber:9},void 0)},W="/Users/raph/projects/plouc/nivo/packages/legends/src/svg/LegendSvg.tsx",A=function(e){var t=e.data,i=e.x,n=e.y,r=e.direction,l=e.padding,a=void 0===l?0:l,s=e.justify,c=e.effects,d=e.itemWidth,u=e.itemHeight,m=e.itemDirection,g=void 0===m?"left-to-right":m,h=e.itemsSpacing,f=void 0===h?0:h,v=e.itemTextColor,b=e.itemBackground,y=void 0===b?"transparent":b,x=e.itemOpacity,k=void 0===x?1:x,S=e.symbolShape,C=e.symbolSize,j=e.symbolSpacing,N=e.symbolBorderWidth,A=e.symbolBorderColor,E=e.onClick,O=e.onMouseEnter,z=e.onMouseLeave,B=e.toggleSerie,V=p({itemCount:t.length,itemWidth:d,itemHeight:u,itemsSpacing:f,direction:r,padding:a}).padding,D="row"===r?d+f:0,H="column"===r?u+f:0;return(0,o.jsxDEV)("g",{transform:"translate("+i+","+n+")",children:t.map((function(e,t){return(0,o.jsxDEV)(w,{data:e,x:t*D+V.left,y:t*H+V.top,width:d,height:u,direction:g,justify:s,effects:c,textColor:v,background:y,opacity:k,symbolShape:S,symbolSize:C,symbolSpacing:j,symbolBorderWidth:N,symbolBorderColor:A,onClick:E,onMouseEnter:O,onMouseLeave:z,toggleSerie:B},t,!1,{fileName:W,lineNumber:49,columnNumber:17},void 0)}))},void 0,!1,{fileName:W,lineNumber:47,columnNumber:9},void 0)},E=function(e){var t=e.data,i=e.containerWidth,n=e.containerHeight,r=e.translateX,l=void 0===r?0:r,a=e.translateY,s=void 0===a?0:a,c=e.anchor,d=e.direction,u=e.padding,m=void 0===u?0:u,g=e.justify,h=e.itemsSpacing,v=void 0===h?0:h,b=e.itemWidth,y=e.itemHeight,x=e.itemDirection,k=e.itemTextColor,S=e.itemBackground,C=e.itemOpacity,j=e.symbolShape,N=e.symbolSize,w=e.symbolSpacing,W=e.symbolBorderWidth,E=e.symbolBorderColor,O=e.onClick,z=e.onMouseEnter,B=e.onMouseLeave,V=e.toggleSerie,D=e.effects,H=p({itemCount:t.length,itemsSpacing:v,itemWidth:b,itemHeight:y,direction:d,padding:m}),X=H.width,Y=H.height,L=f({anchor:c,translateX:l,translateY:s,containerWidth:i,containerHeight:n,width:X,height:Y}),M=L.x,T=L.y;return(0,o.jsxDEV)(A,{data:t,x:M,y:T,direction:d,padding:m,justify:g,effects:D,itemsSpacing:v,itemWidth:b,itemHeight:y,itemDirection:x,itemTextColor:k,itemBackground:S,itemOpacity:C,symbolShape:j,symbolSize:N,symbolSpacing:w,symbolBorderWidth:W,symbolBorderColor:E,onClick:O,onMouseEnter:z,onMouseLeave:B,toggleSerie:"boolean"==typeof V?void 0:V},void 0,!1,{fileName:"/Users/raph/projects/plouc/nivo/packages/legends/src/svg/BoxLegendSvg.tsx",lineNumber:58,columnNumber:9},void 0)},O={start:"left",middle:"center",end:"right"},z=function(e,t){var i=t.data,o=t.containerWidth,n=t.containerHeight,r=t.translateX,l=void 0===r?0:r,a=t.translateY,s=void 0===a?0:a,c=t.anchor,d=t.direction,u=t.padding,m=void 0===u?0:u,g=t.justify,h=void 0!==g&&g,b=t.itemsSpacing,y=void 0===b?0:b,x=t.itemWidth,k=t.itemHeight,S=t.itemDirection,C=void 0===S?"left-to-right":S,j=t.itemTextColor,N=t.symbolSize,w=void 0===N?16:N,W=t.symbolSpacing,A=void 0===W?8:W,E=t.theme,z=p({itemCount:i.length,itemWidth:x,itemHeight:k,itemsSpacing:y,direction:d,padding:m}),B=z.width,V=z.height,D=z.padding,H=f({anchor:c,translateX:l,translateY:s,containerWidth:o,containerHeight:n,width:B,height:V}),X=H.x,Y=H.y,L="row"===d?x+y:0,M="column"===d?k+y:0;e.save(),e.translate(X,Y),e.font=E.legends.text.fontSize+"px "+(E.legends.text.fontFamily||"sans-serif"),i.forEach((function(t,i){var o,n,r=i*L+D.left,l=i*M+D.top,a=v({direction:C,justify:h,symbolSize:w,symbolSpacing:A,width:x,height:k}),s=a.symbolX,c=a.symbolY,d=a.labelX,u=a.labelY,m=a.labelAnchor,g=a.labelAlignment;e.fillStyle=null!=(o=t.color)?o:"black",e.fillRect(r+s,l+c,w,w),e.textAlign=O[m],"central"===g&&(e.textBaseline="middle"),e.fillStyle=null!=(n=null!=j?j:E.legends.text.fill)?n:"black",e.fillText(String(t.label),r+d,l+u)})),e.restore()},B=function(e,t){var i=t.containerWidth,o=t.containerHeight,n=t.anchor,l=t.translateX,a=void 0===l?0:l,s=t.translateY,c=void 0===s?0:s,d=t.scale,u=t.length,m=void 0===u?g.length:u,h=t.thickness,p=void 0===h?g.thickness:h,v=t.direction,y=void 0===v?g.direction:v,x=t.ticks,k=t.tickPosition,S=void 0===k?g.tickPosition:k,C=t.tickSize,j=void 0===C?g.tickSize:C,N=t.tickSpacing,w=void 0===N?g.tickSpacing:N,W=t.tickOverlap,A=void 0===W?g.tickOverlap:W,E=t.tickFormat,O=void 0===E?g.tickFormat:E,z=t.title,B=t.titleAlign,V=void 0===B?g.titleAlign:B,D=t.titleOffset,H=void 0===D?g.titleOffset:D,X=t.theme,Y=b({scale:d,ticks:x,length:m,thickness:p,direction:y,tickPosition:S,tickSize:j,tickSpacing:w,tickOverlap:A,tickFormat:O,title:z,titleAlign:V,titleOffset:H}),L=Y.width,M=Y.height,T=Y.gradientX1,q=Y.gradientY1,F=Y.gradientX2,R=Y.gradientY2,P=Y.colorStops,I=Y.ticks,_=Y.titleText,U=Y.titleX,G=Y.titleY,J=Y.titleRotation,Z=Y.titleVerticalAlign,$=Y.titleHorizontalAlign,K=f({anchor:n,translateX:a,translateY:c,containerWidth:i,containerHeight:o,width:L,height:M}),Q=K.x,ee=K.y,te={font:e.font,textAlign:e.textAlign,textBaseline:e.textBaseline};e.save(),e.translate(Q,ee);var ie=e.createLinearGradient(T*L,q*M,F*L,R*M);P.forEach((function(e){ie.addColorStop(e.offset,e.stopColor)})),e.fillStyle=ie,e.fillRect(0,0,L,M),e.font=(X.legends.ticks.text.fontWeight?X.legends.ticks.text.fontWeight+" ":"")+X.legends.ticks.text.fontSize+"px "+X.legends.ticks.text.fontFamily,I.forEach((function(t){var i;(null!=(i=X.legends.ticks.line.strokeWidth)?i:0)>0&&(e.lineWidth=Number(X.axis.ticks.line.strokeWidth),X.axis.ticks.line.stroke&&(e.strokeStyle=X.axis.ticks.line.stroke),e.lineCap="square",e.beginPath(),e.moveTo(t.x1,t.y1),e.lineTo(t.x2,t.y2),e.stroke()),X.legends.ticks.text.fill&&(e.fillStyle=X.legends.ticks.text.fill),e.textAlign="middle"===t.textHorizontalAlign?"center":t.textHorizontalAlign,e.textBaseline="central"===t.textVerticalAlign?"middle":t.textVerticalAlign,e.fillText(t.text,t.textX,t.textY)})),_&&(e.save(),e.translate(U,G),e.rotate((0,r.Ht)(J)),e.font=(X.legends.title.text.fontWeight?X.legends.title.text.fontWeight+" ":"")+X.legends.title.text.fontSize+"px "+X.legends.title.text.fontFamily,X.legends.title.text.fill&&(e.fillStyle=X.legends.title.text.fill),e.textAlign="middle"===$?"center":$,e.textBaseline=Z,e.fillText(_,0,0),e.restore()),e.restore(),e.font=te.font,e.textAlign=te.textAlign,e.textBaseline=te.textBaseline},V=function(e){var t=e.scale,i=e.domain,o=e.reverse,n=void 0!==o&&o,r=e.valueFormat,l=void 0===r?function(e){return e}:r,s=e.separator,c=void 0===s?" - ":s;return(0,a.useMemo)((function(){var e=(null!=i?i:t.range()).map((function(e,i){var o=t.invertExtent(e),n=o[0],r=o[1];return{id:e,index:i,extent:[n,r],label:""+l(n)+c+l(r),value:t(n),color:e}}));return n&&e.reverse(),e}),[i,t,n,c,l])},D={data:c().arrayOf(c().object),anchor:c().oneOf(["top","top-right","right","bottom-right","bottom","bottom-left","left","top-left","center"]).isRequired,translateX:c().number,translateY:c().number,direction:c().oneOf(["row","column"]).isRequired,itemsSpacing:c().number,itemWidth:c().number.isRequired,itemHeight:c().number.isRequired,itemDirection:c().oneOf(["left-to-right","right-to-left","top-to-bottom","bottom-to-top"]),itemTextColor:c().string,itemBackground:c().string,itemOpacity:c().number,symbolShape:c().oneOfType([c().oneOf(["circle","diamond","square","triangle"]),c().func]),symbolSize:c().number,symbolSpacing:c().number,symbolBorderWidth:c().number,symbolBorderColor:c().string,onClick:c().func,onMouseEnter:c().func,onMouseLeave:c().func,effects:c().arrayOf(c().shape({on:c().oneOfType([c().oneOf(["hover"])]).isRequired,style:c().shape({itemTextColor:c().string,itemBackground:c().string,itemOpacity:c().number,symbolSize:c().number,symbolBorderWidth:c().number,symbolBorderColor:c().string}).isRequired}))}}}]);
//# sourceMappingURL=c46004bf0c87c9b2cb2e65443efe604c9ed83710-54a1b0e1372a5834d1b6.js.map