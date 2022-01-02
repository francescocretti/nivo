(self.webpackChunknivo_website=self.webpackChunknivo_website||[]).push([[917],{3583:function(e,t,n){"use strict";function r(e){return function(){return e}}n.d(t,{Z:function(){return r}})},18957:function(e,t,n){"use strict";n.d(t,{a:function(){return i}});var r=n(61904),a=n(15050),o=(0,r.Z)((function(e){e.setHours(0,0,0,0)}),(function(e,t){e.setDate(e.getDate()+t)}),(function(e,t){return(t-e-(t.getTimezoneOffset()-e.getTimezoneOffset())*a.yB)/a.UD}),(function(e){return e.getDate()-1}));t.Z=o;var i=o.range},10016:function(e,t,n){"use strict";n.d(t,{X:function(){return l}});var r=n(649),a=n(74186),o=n(80169),i=[{key:"data",help:"Chart data.",type:"object[]",required:!0,group:"Base"},{key:"indexBy",help:"Key to use to index the data.",description:"\n            Key to use to index the data,\n            this key must exist in each data item.\n\n            You can also provide a function which will\n            receive the data item and must return the desired index.\n        ",type:"string | (datum: RawDatum): string | number",required:!1,defaultValue:a.XB.indexBy,group:"Base"},{key:"keys",help:"Keys to use to determine each serie.",type:"string[]",required:!1,defaultValue:a.XB.keys,group:"Base"},{key:"groupMode",help:"How to group bars.",type:"grouped | stacked",required:!1,defaultValue:a.XB.groupMode,controlType:"radio",group:"Base",controlOptions:{choices:[{label:"stacked",value:"stacked"},{label:"grouped",value:"grouped"}]}},{key:"layout",help:"How to display bars.",type:"horizontal | vertical",required:!1,defaultValue:a.XB.layout,controlType:"radio",group:"Base",controlOptions:{choices:[{label:"horizontal",value:"horizontal"},{label:"vertical",value:"vertical"}]}},{key:"valueScale",type:"object",group:"Base",help:"value scale configuration.",defaultValue:a.XB.valueScale,controlType:"object",controlOptions:{props:[{key:"type",help:"Scale type.",type:"string",controlType:"choices",controlOptions:{disabled:!0,choices:["linear","symlog"].map((function(e){return{label:e,value:e}}))}}]}},{key:"indexScale",type:"object",group:"Base",help:"index scale configuration.",defaultValue:a.XB.indexScale,controlType:"object",controlOptions:{props:[{key:"type",help:"Scale type.",type:"string",controlType:"choices",controlOptions:{disabled:!0,choices:["band"].map((function(e){return{label:e,value:e}}))}},{key:"round",help:"Toggle index scale (for bar width) rounding.",type:"boolean",controlType:"switch"}]}},{key:"reverse",help:"Reverse bars, starts on top instead of bottom for vertical layout and right instead of left for horizontal one.",type:"boolean",required:!1,defaultValue:a.XB.reverse,controlType:"switch",group:"Base"},{key:"minValue",help:"Minimum value.",description:"\n            Minimum value, if 'auto',\n            will use min value from the provided data.\n        ",required:!1,defaultValue:a.XB.minValue,type:"number | 'auto'",controlType:"switchableRange",group:"Base",controlOptions:{disabledValue:"auto",defaultValue:-1e3,min:-1e3,max:0}},{key:"maxValue",help:"Maximum value.",description:"\n            Maximum value, if 'auto',\n            will use max value from the provided data.\n        ",required:!1,defaultValue:a.XB.maxValue,type:"number | 'auto'",controlType:"switchableRange",group:"Base",controlOptions:{disabledValue:"auto",defaultValue:1e3,min:0,max:1e3}},{key:"valueFormat",group:"Base",help:"Optional formatter for values.",description:"\n            The formatted value can then be used for labels & tooltips.\n\n            Under the hood, nivo uses [d3-format](https://github.com/d3/d3-format),\n            please have a look at it for available formats, you can also pass a function\n            which will receive the raw value and should return the formatted one.\n        ",required:!1,type:"string | (value: number) => string | number",controlType:"valueFormat"},{key:"padding",help:"Padding between each bar (ratio).",type:"number",required:!1,defaultValue:a.XB.padding,controlType:"range",group:"Base",controlOptions:{min:0,max:.9,step:.05}},{key:"innerPadding",help:"Padding between grouped/stacked bars.",type:"number",required:!1,defaultValue:a.XB.innerPadding,controlType:"range",group:"Base",controlOptions:{unit:"px",min:0,max:10}},{key:"width",enableControlForFlavors:["api"],help:"Chart width.",description:"\n            not required if using `ResponsiveBar`.\n            Also note that width exclude left/right axes,\n            please add margin to make sure they're visible.\n        ",type:"number",required:!0,controlType:"range",group:"Base",controlOptions:{unit:"px",min:100,max:1e3,step:5}},{key:"height",enableControlForFlavors:["api"],help:"Chart height.",description:"\n            not required if using `ResponsiveBar`.\n            Also note that width exclude left/right axes,\n            please add margin to make sure they're visible.\n        ",type:"number",required:!0,controlType:"range",group:"Base",controlOptions:{unit:"px",min:100,max:1e3,step:5}},{key:"pixelRatio",flavors:["canvas"],help:"Adjust pixel ratio, useful for HiDPI screens.",required:!1,defaultValue:"Depends on device",type:"number",controlType:"range",group:"Base",controlOptions:{min:1,max:2}},{key:"margin",help:"Chart margin.",type:"object",required:!1,controlType:"margin",group:"Base"},(0,o.JR)(["svg","canvas","api"]),{key:"colors",help:"Defines color range.",type:"string | Function | string[]",required:!1,defaultValue:a.XB.colors,controlType:"ordinalColors",group:"Style"},{key:"colorBy",type:"'id' | 'indexValue'",help:"Property used to determine node color.",description:"\n            Property to use to determine node color.\n        ",required:!1,defaultValue:a.XB.colorBy,controlType:"choices",group:"Style",controlOptions:{choices:[{label:"id",value:"id"},{label:"indexValue",value:"indexValue"}]}},{key:"borderRadius",help:"Rectangle border radius.",type:"number",required:!1,defaultValue:a.XB.borderRadius,controlType:"range",group:"Style",controlOptions:{unit:"px",min:0,max:36}},{key:"borderWidth",help:"Width of bar border.",type:"number",required:!1,defaultValue:a.XB.borderWidth,controlType:"lineWidth",group:"Style"},{key:"borderColor",help:"Method to compute border color.",description:"\n            how to compute border color,\n            [see dedicated documentation](self:/guides/colors).\n        ",type:"string | object | Function",required:!1,defaultValue:a.XB.borderColor,controlType:"inheritedColor",group:"Style"}].concat((0,r.Z)((0,o.uE)("Style",["svg"])),[{key:"layers",flavors:["svg","canvas"],help:"Defines the order of layers.",description:"\n            Defines the order of layers, available layers are:\n            `grid`, `axes`, `bars`, `markers`, `legends`,\n            `annotations`. The `markers` layer is not available\n            in the canvas flavor.\n\n            You can also use this to insert extra layers to the chart,\n            this extra layer must be a function which will receive\n            the chart computed data and must return a valid SVG\n            element.\n        ",type:"Array<string | Function>",required:!1,defaultValue:a.XB.layers,group:"Customization"},{key:"enableLabel",help:"Enable/disable labels.",type:"boolean",required:!1,defaultValue:a.XB.enableLabel,controlType:"switch",group:"Labels"},{key:"label",group:"Labels",help:"Define how bar labels are computed.",description:"\n            Define how bar labels are computed.\n\n            By default it will use the bar's value.\n            It accepts a string which will be used to access\n            a specific bar data property, such as\n            `'value'` or `'id'`.\n\n            You can also use a funtion if you want to\n            add more logic, this function will receive\n            the current bar's data and must return\n            the computed label which, depending on the context,\n            should return a string or an svg element (Bar) or\n            a string (BarCanvas). For example let's say you want\n            to use a label with both the id and the value,\n            you can achieve this with:\n            ```\n            label={d => `${d.id}: ${d.value}`}\n            ```\n        ",type:"string | Function",required:!1,defaultValue:a.XB.label},{key:"labelSkipWidth",help:"Skip label if bar width is lower than provided value, ignored if 0.",type:"number",required:!1,defaultValue:a.XB.labelSkipWidth,controlType:"range",group:"Labels",controlOptions:{unit:"px",min:0,max:36}},{key:"labelSkipHeight",help:"Skip label if bar height is lower than provided value, ignored if 0.",type:"number",required:!1,defaultValue:a.XB.labelSkipHeight,controlType:"range",group:"Labels",controlOptions:{unit:"px",min:0,max:36}},{key:"labelTextColor",help:"Defines how to compute label text color.",type:"string | object | Function",required:!1,defaultValue:a.XB.labelTextColor,controlType:"inheritedColor",group:"Labels"},{key:"enableGridX",group:"Grid & Axes",help:"Enable/disable x grid.",type:"boolean",required:!1,defaultValue:a.XB.enableGridX,controlType:"switch"},{key:"gridXValues",group:"Grid & Axes",help:"Specify values to use for vertical grid lines.",type:"Array<number | string>",required:!1},{key:"enableGridY",group:"Grid & Axes",help:"Enable/disable y grid.",type:"boolean",required:!1,defaultValue:a.XB.enableGridY,controlType:"switch"},{key:"gridYValues",group:"Grid & Axes",help:"Specify values to use for horizontal grid lines.",type:"Array<number | string>",required:!1}],(0,r.Z)((0,o.uh)()),[{key:"isInteractive",flavors:["svg","canvas"],help:"Enable/disable interactivity.",type:"boolean",required:!1,defaultValue:a.XB.isInteractive,controlType:"switch",group:"Interactivity"},{key:"tooltip",flavors:["svg","canvas"],group:"Interactivity",type:"Function",required:!1,help:"Tooltip custom component",description:"\n            A function allowing complete tooltip customisation,\n            it must return a valid HTML element and will receive\n            the following data:\n            ```\n            {\n                bar: {\n                    id:             string | number,\n                    value:          number,\n                    formattedValue: string,\n                    index:          number,\n                    indexValue:     string | number,\n                    // datum associated to the current index (raw data)\n                    data:           object\n                },\n                color: string,\n                label: string\n            }\n            ```\n            You can also customize the style of the tooltip\n            using the `theme.tooltip` object.\n        "},{key:"custom tooltip example",flavors:["svg","canvas"],group:"Interactivity",help:"Showcase custom tooltip component.",type:"boolean",controlType:"switch"},{key:"onClick",flavors:["svg","canvas"],group:"Interactivity",type:"Function",required:!1,help:"onClick handler",description:"\n            onClick handler, will receive node data as first argument\n            & event as second one. The node data has the following shape:\n\n            ```\n            {\n                id:             string | number,\n                value:          number,\n                formattedValue: string,\n                index:          number,\n                indexValue:     string | number,\n                color:          string,\n                // datum associated to the current index (raw data)\n                data:           object\n            }\n            ```\n        "},{key:"legends",flavors:["svg","canvas"],type:"object[]",help:"Optional chart's legends.",group:"Legends",controlType:"array",controlOptions:{props:(0,o.y0)(["svg"]),shouldCreate:!0,addLabel:"add legend",shouldRemove:!0,getItemTitle:function(e,t){return"legend["+e+"]: "+t.anchor+", "+t.direction},svgDefaultProps:{dataFrom:"keys",anchor:"top-left",direction:"column",justify:!1,translateX:0,translateY:0,itemWidth:100,itemHeight:20,itemsSpacing:0,symbolSize:20,itemDirection:"left-to-right",onClick:function(e){alert(JSON.stringify(e,null,"    "))}}}}],(0,r.Z)((0,o.$j)(["svg"],a.XB,"react-spring")),[{key:"isFocusable",flavors:["svg"],group:"Accessibility",help:"Make the root SVG element and each bar item focusable, for keyboard navigation.",description:"\n            If enabled, focusing will also reveal the tooltip if `isInteractive` is `true`,\n            when a bar gains focus and hide it on blur.\n            \n            Also note that if this option is enabled, focusing a bar will reposition the tooltip\n            at a fixed location.\n        ",type:"boolean",controlType:"switch"},{key:"ariaLabel",flavors:["svg"],group:"Accessibility",help:"Main element [aria-label](https://www.w3.org/TR/wai-aria/#aria-label).",type:"string"},{key:"ariaLabelledBy",flavors:["svg"],group:"Accessibility",help:"Main element [aria-labelledby](https://www.w3.org/TR/wai-aria/#aria-labelledby).",type:"string"},{key:"ariaDescribedBy",flavors:["svg"],group:"Accessibility",help:"Main element [aria-describedby](https://www.w3.org/TR/wai-aria/#aria-describedby).",type:"string"},{key:"barAriaLabel",flavors:["svg"],group:"Accessibility",help:"[aria-label](https://www.w3.org/TR/wai-aria/#aria-label) for bar items.",type:"(data) => string"},{key:"barAriaLabelledBy",flavors:["svg"],group:"Accessibility",help:"[aria-labelledby](https://www.w3.org/TR/wai-aria/#aria-labelledby) for bar items.",type:"(data) => string"},{key:"barAriaDescribedBy",flavors:["svg"],group:"Accessibility",help:"[aria-describedby](https://www.w3.org/TR/wai-aria/#aria-describedby) for bar items.",type:"(data) => string"}]),l=(0,o.R2)(i)},62370:function(e,t,n){"use strict";n.d(t,{h8:function(){return l},h6:function(){return u},Ld:function(){return s}});var r=n(48159),a=n.n(r),o=n(76744),i=n.n(o),l=function(e,t){var n=(void 0===t?{}:t).exclude,r=void 0===n?[]:n;return function(t,n){void 0===n&&(n={});var o={};return Object.keys(t).forEach((function(r){e[r]&&(o[r]=e[r](t[r],t,n))})),Object.assign({},a()(t,r),o)}},u=function(e){return function(t,n){return n["axis"+i()(e)].enable?a()(t,["enable"]):null}},s=function(e){var t=e.format;return e.enabled?t:void 0}},38681:function(e,t,n){"use strict";n.d(t,{j2:function(){return g},wQ:function(){return m},aw:function(){return F},x$:function(){return X},ak:function(){return L},UE:function(){return q},$j:function(){return y},BO:function(){return v},Tz:function(){return O},O$:function(){return B},B7:function(){return G},gq:function(){return S},zn:function(){return j},FQ:function(){return V}});var r=n(4215),a=n.n(r),o=n(91311),i=n.n(o),l=n(19193),u=n.n(l),s=n(18957),c=n(6164),d=function(){return"hsl("+Math.round(360*Math.random())+", 70%, 50%)"},p=["AD","AE","AF","AG","AI","AL","AM","AO","AQ","AR","AS","AT","AU","AW","AX","AZ","BA","BB","BD","BE","BF","BG","BH","BI","BJ","BL","BM","BN","BO","BQ","BQ","BR","BS","BT","BV","BW","BY","BZ","CA","CC","CD","CF","CG","CH","CI","CK","CL","CM","CN","CO","CR","CU","CV","CW","CX","CY","CZ","DE","DJ","DK","DM","DO","DZ","EC","EE","EG","EH","ER","ES","ET","FI","FJ","FK","FM","FO","FR","GA","GB","GD","GE","GF","GG","GH","GI","GL","GM","GN","GP","GQ","GR","GS","GT","GU","GW","GY","HK","HM","HN","HR","HT","HU","ID","IE","IL","IM","IN","IO","IQ","IR","IS","IT","JE","JM","JO","JP","KE","KG","KH","KI","KM","KN","KP","KR","KW","KY","KZ","LA","LB","LC","LI","LK","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MF","MG","MH","MK","ML","MM","MN","MO","MP","MQ","MR","MS","MT","MU","MV","MW","MX","MY","MZ","NA","NC","NE","NF","NG","NI","NL","NO","NP","NR","NU","NZ","OM","PA","PE","PF","PG","PH","PK","PL","PM","PN","PR","PS","PT","PW","PY","QA","RE","RO","RS","RU","RW","SA","SB","SC","SD","SE","SG","SH","SI","SJ","SK","SL","SM","SN","SO","SR","SS","ST","SV","SX","SY","SZ","TC","TD","TF","TG","TH","TJ","TK","TL","TM","TN","TO","TR","TT","TV","TW","TZ","UA","UG","UM","US","UY","UZ","VA","VC","VE","VG","VI","VN","VU","WF","WS","YE","YT","ZA","ZM","ZW"],f=["John","Raoul","Jane","Marcel","Ibrahim","Junko","Lyu","André","Maki","Véronique","Thibeau","Josiane","Raphaël","Mathéo","Margot","Hugo","Christian","Louis","Ella","Alton","Jimmy","Guillaume","Sébastien","Alfred","Bon","Solange","Kendrick","Jared","Satoko","Tomoko","Line","Delphine","Leonard","Alphonse","Lisa","Bart","Benjamin","Homer","Jack"],h=["php","make","javascript","go","erlang","elixir","lisp","haskell","python","ruby","hack","scala","java","rust","c","css","sass","stylus"],g=(Object.freeze({__proto__:null,countryCodes:p,names:f,programmingLanguages:h}),function(e,t,n){var r=void 0===n?{}:n,o=r.title,l=r.subtitle,u=r.rangeCount,s=void 0===u?5:u,c=r.measureCount,d=void 0===c?1:c,p=r.markerCount,f=void 0===p?1:p,h=r.float,g=void 0!==h&&h;return{id:e,title:o,subtitle:l,ranges:a()(s-1).reduce((function(e){var n=t-e[0];return[i()(n,g)].concat(e)}),[t]),measures:a()(d).reduce((function(e){return 0===e.length?[i()(t,g)]:[i()(e[0],g)].concat(e)}),[]),markers:a()(f).map((function(){return.6*t+i()(.4*t)}))}}),m=function(e){var t=void 0===e?{}:e,n=t.keys,r=void 0===n?f:n,o=t.size,l=void 0===o?7:o,u=t.minValue,s=void 0===u?0:u,c=t.maxValue,d=void 0===c?2e3:c,p=Math.min(r.length,l),h=r.slice(0,p);return{matrix:a()(p).map((function(){return a()(p).map((function(){return Math.random()<.66?i()(s,d/4):i()(s,d)}))})),keys:h}},y=function(e){var t=void 0===e?{}:e,n=t.rootNodeRadius,r=void 0===n?12:n,a=t.minMidNodes,o=void 0===a?6:a,l=t.maxMidNodes,u=void 0===l?16:l,s=t.midNodeRadius,c=void 0===s?8:s,d=t.minLeaves,p=void 0===d?4:d,f=t.maxLeaves,h=void 0===f?16:f,g=t.leafRadius,m=void 0===g?4:g,y={id:"0",radius:r,depth:0,color:"rgb(244, 117, 96)"},b=Array.from({length:i()(o,u)},(function(e,t){return{id:""+(t+1),radius:c,depth:1,color:"rgb(97, 205, 187)"}})),v=[],k=[];return b.forEach((function(e){v.push({source:"0",target:e.id,distance:50}),b.forEach((function(t){Math.random()<.04&&v.push({source:e.id,target:t.id,distance:70})})),Array.from({length:i()(p,h)},(function(t,n){return k.push({id:e.id+"."+n,radius:m,depth:2,color:"rgb(232, 193, 160)"}),v.push({source:e.id,target:e.id+"."+n,distance:30}),null}))})),b.push(y),{nodes:b=b.concat(k),links:v}};function b(){return b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b.apply(this,arguments)}var v=function(e){var t=void 0===e?{}:e,n=t.size,r=void 0===n?26:n,o=t.keys,l=void 0===o?[{key:"temp",random:[-10,40]},{key:"cost",random:[200,4e5]},{key:"color",shuffle:["red","yellow","green"]},{key:"target",shuffle:["A","B","C","D","E"]},{key:"volume",random:[.2,7.6]}]:o;return a()(r).map((function(){return l.reduce((function(e,t){var n,r;return void 0!==t.random?r=i().apply(void 0,t.random):void 0!==t.shuffle&&(r=u()(t.shuffle)[0]),b({},e,((n={})[t.key]=r,n))}),{})}))},k=f.map((function(e){return{id:e}})),x=function e(t,n,r){var a=n.filter((function(e){return e.source===t})).map((function(e){var n=e.target;if(n===t)throw new Error("[sankey] a node cannot be linked on itself:\n  link: "+t+" —> "+t);if(null!=r&&r.includes(n))throw new Error("[sankey] found cyclic dependency:\n  link: "+r.join(" —> ")+" —> "+n);return n}));return a.reduce((function(a,o){return a.concat(e(o,n,r?[].concat(r,[o]):[t,o]))}),a)},w=function(e){return e.reduce((function(t,n){return t[n.source]||(t[n.source]=x(n.source,e)),t}),{})},B=function(e){var t=void 0===e?{}:e,n=t.nodeCount,r=t.maxIterations,o=void 0===r?3:r,l=k.slice(0,n).map((function(e){return Object.assign({},e,{nodeColor:d()})})),s=[];return u()(l).forEach((function(e){var t=e.id;a()(i()(1,o)).forEach((function(){var e=w(s),n=u()(l.filter((function(e){return e.id!==t})).map((function(e){return e.id})))[0];e[n]&&e[n].includes(t)||e[t]&&e[t].includes(n)||s.push({source:t,target:n,value:i()(5,200)})}))})),{nodes:l,links:s}},T=function(){return i()(0,500)},M=function(){return i()(4,20)},C=function(){return i()(3,17)},S=function(e,t){var n=t.min,r=void 0===n?60:n,o=t.max,l=void 0===o?100:o,u=t.categoryCount,s=void 0===u?0:u;return{groups:e,data:e.reduce((function(e,t,n){return[].concat(e,a()(i()(r,l)).map((function(){return T()})).map((function(e,r){var o={id:n+"."+r,group:t,price:e,volume:M()};return s>0&&(o.categories=a()(s).map(C)),o})))}),[])}},V=function(e){return{groups:e.groups,data:e.data.map((function(t){var n=b({},t,{group:u()(e.groups)[0],price:T(),volume:M()});return void 0!==t.categories&&(n.categories=a()(3).map(C)),n}))}},A=d,O=function(e,t){void 0===e&&(e=!0),void 0===t&&(t=-1);var n=h;return e&&(n=u()(n)),t<1&&(t=1+Math.round(Math.random()*(h.length-1))),n.slice(0,t).map((function(e){return{label:e,value:Math.round(600*Math.random()),color:A()}}))},E=function(e){var t=[];return function(){var n;do{n=e.apply(void 0,arguments)}while(t.includes(n));return t.push(n),n}},R=function(){return u()(p)[0]},L=function(e){void 0===e&&(e=16);var t=["whisky","rhum","gin","vodka","cognac"],n=E(R),r=t.map((function(e){return{id:e,color:A(),data:[]}}));return a()(e).forEach((function(){var e=n();t.forEach((function(t){var n;null==(n=r.find((function(e){return e.id===t})))||n.data.push({color:A(),x:e,y:i()(0,60)})}))})),r},G=function(e,t){return e.map((function(e){return{id:e,color:A(),data:t.map((function(e){return{x:e,y:Math.round(300*Math.random())}}))}}))},X=function(e,t,n){void 0===n&&(n=.9);var r=function(e,t){var n=(0,s.a)(e,t),r=(0,c.i$)("%Y-%m-%d");return n.map((function(e){return{value:Math.round(400*Math.random()),day:r(e)}}))}(e,t),a=Math.round(r.length*(.4*n))+Math.round(Math.random()*(r.length*(.6*n)));return u()(r).slice(0,a)},F=function(e,t){var n=void 0===t?{}:t,r=n.size,a=void 0===r?12:r,o=n.min,l=void 0===o?0:o,u=n.max,s=void 0===u?200:u,c=n.withColors,d=void 0===c||c;return p.slice(0,a).map((function(t){var n={country:t};return e.forEach((function(e){n[e]=i()(l,s),!0===d&&(n[e+"Color"]=A())})),n}))},P=[["viz",[["stack",[["cchart"],["xAxis"],["yAxis"],["layers"]]],["ppie",[["chart",[["pie",[["outline"],["slices"],["bbox"]]],["donut"],["gauge"]]],["legends"]]]]],["colors",[["rgb"],["hsl"]]],["utils",[["randomize"],["resetClock"],["noop"],["tick"],["forceGC"],["stackTrace"],["dbg"]]],["generators",[["address"],["city"],["animal"],["movie"],["user"]]],["set",[["clone"],["intersect"],["merge"],["reverse"],["toArray"],["toObject"],["fromCSV"],["slice"],["append"],["prepend"],["shuffle"],["pick"],["plouc"]]],["text",[["trim"],["slugify"],["snakeCase"],["camelCase"],["repeat"],["padLeft"],["padRight"],["sanitize"],["ploucify"]]],["misc",[["greetings",[["hey"],["HOWDY"],["aloha"],["AHOY"]]],["other"],["path",[["pathA"],["pathB",[["pathB1"],["pathB2"],["pathB3"],["pathB4"]]],["pathC",[["pathC1"],["pathC2"],["pathC3"],["pathC4"],["pathC5"],["pathC6"],["pathC7"],["pathC8"],["pathC9"]]]]]]]],q=function e(t,n,r){var o;void 0===t&&(t="nivo"),void 0===r&&(r=P),(n=n||r.length)>r.length&&(n=r.length);var i={name:t,color:A()};return(null==(o=r)?void 0:o.length)>0?i.children=a()(n).map((function(t,n){var a,o=r[n];return e(o[0],null,null!=(a=o[1])?a:[])})):i.loc=Math.round(2e5*Math.random()),i},D=["chardonay","carmenere","syrah"],I=["fruity","bitter","heavy","strong","sunny"],j=function(e){var t=void 0===e?{}:e,n=t.randMin,r=void 0===n?20:n,a=t.randMax,o=void 0===a?120:a;return{data:I.map((function(e){var t={taste:e};return D.forEach((function(e){t[e]=i()(r,o)})),t})),keys:D}}},47885:function(e,t,n){"use strict";n.d(t,{i:function(){return o},g:function(){return i}});var r=n(38681),a=["hot dog","burger","sandwich","kebab","fries","donut","junk","sushi","ramen","curry","udon","bagel","yakitori","takoyaki","tacos","miso soup","tortilla","tapas","chipirones","gazpacho","soba","bavette","steak","pizza","spaghetti","ravioli","salad","pad thai","bun","waffle","crepe","churros","paella","empanadas","bruschetta","onion soup","cassoulet","bouillabaisse","unagi","tempura","tonkatsu","shabu-shabu","twinkies","jerky","fajitas","jambalaya","meatloaf","mac n' cheese","baked beans","popcorn","buffalo wings","BBQ ribs","apple pie","nachos","risotto","tiramisu"],o=function(){return{data:(0,r.aw)(a.slice(0,6),{size:7,max:200}),keys:a.slice(0,6)}},i=function(){return{data:(0,r.aw)(a,{size:21,max:200}),keys:a}}},22726:function(e,t,n){"use strict";var r=n(30808),a=n(27378),o=n(91542),i=n(62370),l=["color"],u=o.default.div.withConfig({displayName:"mapper__TooltipWrapper",componentId:"sc-ix4uwo-0"})(["display:grid;grid-template-columns:1fr 1fr;grid-column-gap:12px;background:#333;padding:12px 16px;font-size:12px;border-radius:2px;"]),s=o.default.span.withConfig({displayName:"mapper__TooltipKey",componentId:"sc-ix4uwo-1"})(["font-weight:600;"]),c=o.default.span.withConfig({displayName:"mapper__TooltipValue",componentId:"sc-ix4uwo-2"})([""]),d=function(e){var t=e.color,n=(0,r.Z)(e,l);return a.createElement(u,{style:{color:t}},a.createElement(s,null,"id"),a.createElement(c,null,n.id),a.createElement(s,null,"value"),a.createElement(c,null,n.value),a.createElement(s,null,"formattedValue"),a.createElement(c,null,n.formattedValue),a.createElement(s,null,"index"),a.createElement(c,null,n.index),a.createElement(s,null,"indexValue"),a.createElement(c,null,n.indexValue),a.createElement(s,null,"color"),a.createElement(c,null,t))};t.Z=(0,i.h8)({valueFormat:i.Ld,axisTop:(0,i.h6)("top"),axisRight:(0,i.h6)("right"),axisBottom:(0,i.h6)("bottom"),axisLeft:(0,i.h6)("left"),tooltip:function(e,t){if(t["custom tooltip example"])return d}},{exclude:["enable axisTop","enable axisRight","enable axisBottom","enable axisLeft","custom tooltip example"]})},66907:function(e,t,n){"use strict";n.r(t);var r=n(27378),a=n(45434),o=n(74186),i=n(69857),l=n(8029),u=n(47885),s=n(22726),c=n(10016),d=function(){},p={indexBy:"country",margin:{top:50,right:130,bottom:50,left:60},padding:.3,innerPadding:0,minValue:"auto",maxValue:"auto",groupMode:"stacked",layout:"vertical",reverse:!1,valueScale:{type:"linear"},indexScale:{type:"band",round:!0},valueFormat:{format:"",enabled:!1},colors:{scheme:"nivo"},colorBy:"id",defs:[(0,a.Qr)("dots",{background:"inherit",color:"#38bcb2",size:4,padding:1,stagger:!0}),(0,a.l0)("lines",{background:"inherit",color:"#eed312",rotation:-45,lineWidth:6,spacing:10})],fill:[{match:{id:"fries"},id:"dots"},{match:{id:"sandwich"},id:"lines"}],borderRadius:0,borderWidth:0,borderColor:{from:"color",modifiers:[["darker",1.6]]},axisTop:{enable:!1,tickSize:5,tickPadding:5,tickRotation:0,legend:"",legendOffset:36},axisRight:{enable:!1,tickSize:5,tickPadding:5,tickRotation:0,legend:"",legendOffset:0},axisBottom:{enable:!0,tickSize:5,tickPadding:5,tickRotation:0,legend:"country",legendPosition:"middle",legendOffset:32},axisLeft:{enable:!0,tickSize:5,tickPadding:5,tickRotation:0,legend:"food",legendPosition:"middle",legendOffset:-40},enableGridX:!1,enableGridY:!0,enableLabel:!0,labelSkipWidth:12,labelSkipHeight:12,labelTextColor:{from:"color",modifiers:[["darker",1.6]]},legends:[{dataFrom:"keys",anchor:"bottom-right",direction:"column",justify:!1,translateX:120,translateY:0,itemsSpacing:2,itemWidth:100,itemHeight:20,itemDirection:"left-to-right",itemOpacity:.85,symbolSize:20,onClick:function(e){alert(JSON.stringify(e,null,"    "))},effects:[{on:"hover",style:{itemOpacity:1}}]}],isInteractive:!0,"custom tooltip example":!1,tooltip:null,animate:!0,motionConfig:"default",role:"application",isFocusable:!1,ariaLabel:"Nivo bar chart demo",barAriaLabel:function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}};t.default=function(){return r.createElement(i.T,{name:"Bar",meta:l.$Q,icon:"bar",flavors:l.Kk,currentFlavor:"svg",properties:c.X,initialProperties:p,defaultProperties:o.XB,propertiesMapper:s.Z,codePropertiesMapper:function(e,t){return Object.assign({keys:t.keys},e,{tooltip:e.tooltip?d:void 0})},generateData:u.i,getTabData:function(e){return e.data}},(function(e,t,n,a){return r.createElement(o.jM,Object.assign({data:t.data,keys:t.keys},e,{theme:n,onClick:function(e){return a({type:"click",label:"[bar] "+e.id+" - "+e.indexValue+": "+e.value,color:e.color,data:e})}}))}))}},91573:function(e,t,n){var r=n(37561),a=n(74305);e.exports=function(e){return a(r(e))}},76418:function(e){var t=Math.floor,n=Math.random;e.exports=function(e,r){return e+t(n()*(r-e+1))}},16326:function(e,t,n){var r=n(74305),a=n(58185);e.exports=function(e){return r(a(e))}},42231:function(e,t,n){var r=n(66070);e.exports=function(e,t){return r(t,(function(t){return e[t]}))}},74305:function(e,t,n){var r=n(76418);e.exports=function(e,t){var n=-1,a=e.length,o=a-1;for(t=void 0===t?a:t;++n<t;){var i=r(n,o),l=e[i];e[i]=e[n],e[n]=l}return e.length=t,e}},91311:function(e,t,n){var r=n(76418),a=n(57535),o=n(94919),i=parseFloat,l=Math.min,u=Math.random;e.exports=function(e,t,n){if(n&&"boolean"!=typeof n&&a(e,t,n)&&(t=n=void 0),void 0===n&&("boolean"==typeof t?(n=t,t=void 0):"boolean"==typeof e&&(n=e,e=void 0)),void 0===e&&void 0===t?(e=0,t=1):(e=o(e),void 0===t?(t=e,e=0):t=o(t)),e>t){var s=e;e=t,t=s}if(n||e%1||t%1){var c=u();return l(e+c*(t-e+i("1e-"+((c+"").length-1))),t)}return r(e,t)}},19193:function(e,t,n){var r=n(91573),a=n(16326),o=n(19785);e.exports=function(e){return(o(e)?r:a)(e)}},58185:function(e,t,n){var r=n(42231),a=n(50098);e.exports=function(e){return null==e?[]:r(e,a(e))}}}]);
//# sourceMappingURL=component---src-pages-bar-index-js-07528b091e64e7c3e061.js.map