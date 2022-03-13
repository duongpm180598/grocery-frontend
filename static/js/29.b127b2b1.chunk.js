(this["webpackJsonpgrocery-frontend"]=this["webpackJsonpgrocery-frontend"]||[]).push([[29],{429:function(t,e,n){"use strict";var a=n(395),r=n(384),i=n(27),c=n(10),o=n(1),s=Object(c.a)(i.b)((function(t){var e=t.theme;return"\n        color: ".concat(e.palette.text.primary,";\n        display: flex;\n        text-decoration: none;\n        width: 53px;\n        margin: 0 auto;\n        font-weight: ").concat(e.typography.fontWeightBold,";\n")})),d=Object(c.a)(a.a)((function(){return"\n        width: 52px;\n        height: 38px;\n"})),u=Object(c.a)(a.a)((function(t){var e=t.theme;return"\n        background: ".concat(e.general.reactFrameworkColor,";\n        width: 18px;\n        height: 18px;\n        border-radius: ").concat(e.general.borderRadiusSm,';\n        position: relative;\n        transform: rotate(45deg);\n        top: 3px;\n        left: 17px;\n\n        &:after, \n        &:before {\n            content: "";\n            display: block;\n            width: 18px;\n            height: 18px;\n            position: absolute;\n            top: -1px;\n            right: -20px;\n            transform: rotate(0deg);\n            border-radius: ').concat(e.general.borderRadiusSm,";\n        }\n\n        &:before {\n            background: ").concat(e.palette.primary.main,";\n            right: auto;\n            left: 0;\n            top: 20px;\n        }\n\n        &:after {\n            background: ").concat(e.palette.secondary.main,";\n        }\n")})),l=Object(c.a)(a.a)((function(t){var e=t.theme;return"\n        width: 16px;\n        height: 16px;\n        position: absolute;\n        top: 12px;\n        left: 12px;\n        z-index: 5;\n        border-radius: ".concat(e.general.borderRadiusSm,";\n        background: ").concat(e.header.background,";\n")}));e.a=function(){return Object(o.jsx)(r.a,{title:"Tokyo Free White React Admin Dashboard",arrow:!0,children:Object(o.jsx)(s,{to:"/overview",children:Object(o.jsx)(d,{children:Object(o.jsx)(u,{children:Object(o.jsx)(l,{})})})})})}},433:function(t,e,n){"use strict";var a=n(11),r=n(6),i=n(2),c=n(0),o=(n(5),n(8)),s=n(199),d=n(14),u=n(10),l=n(110),p=n(134);function b(t){return Object(l.a)("MuiContainer",t)}Object(p.a)("MuiContainer",["root","disableGutters","fixed","maxWidthXs","maxWidthSm","maxWidthMd","maxWidthLg","maxWidthXl"]);var m=n(12),x=n(1),g=["className","component","disableGutters","fixed","maxWidth"],h=Object(u.a)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(t,e){var n=t.ownerState;return[e.root,e["maxWidth".concat(Object(m.a)(String(n.maxWidth)))],n.fixed&&e.fixed,n.disableGutters&&e.disableGutters]}})((function(t){var e=t.theme,n=t.ownerState;return Object(i.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!n.disableGutters&&Object(a.a)({paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}))}),(function(t){var e=t.theme;return t.ownerState.fixed&&Object.keys(e.breakpoints.values).reduce((function(t,n){var a=e.breakpoints.values[n];return 0!==a&&(t[e.breakpoints.up(n)]={maxWidth:"".concat(a).concat(e.breakpoints.unit)}),t}),{})}),(function(t){var e=t.theme,n=t.ownerState;return Object(i.a)({},"xs"===n.maxWidth&&Object(a.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),n.maxWidth&&"xs"!==n.maxWidth&&Object(a.a)({},e.breakpoints.up(n.maxWidth),{maxWidth:"".concat(e.breakpoints.values[n.maxWidth]).concat(e.breakpoints.unit)}))})),j=c.forwardRef((function(t,e){var n=Object(d.a)({props:t,name:"MuiContainer"}),a=n.className,c=n.component,u=void 0===c?"div":c,l=n.disableGutters,p=void 0!==l&&l,j=n.fixed,f=void 0!==j&&j,v=n.maxWidth,O=void 0===v?"lg":v,w=Object(r.a)(n,g),S=Object(i.a)({},n,{component:u,disableGutters:p,fixed:f,maxWidth:O}),y=function(t){var e=t.classes,n=t.fixed,a=t.disableGutters,r=t.maxWidth,i={root:["root",r&&"maxWidth".concat(Object(m.a)(String(r))),n&&"fixed",a&&"disableGutters"]};return Object(s.a)(i,b,e)}(S);return Object(x.jsx)(h,Object(i.a)({as:u,ownerState:S,className:Object(o.a)(y.root,a),ref:e},w))}));e.a=j},463:function(t,e,n){"use strict";var a=n(2),r=n(6),i=n(0),c=(n(5),n(8)),o=n(199),s=n(10),d=n(14),u=n(400),l=n(110),p=n(134);function b(t){return Object(l.a)("MuiCard",t)}Object(p.a)("MuiCard",["root"]);var m=n(1),x=["className","raised"],g=Object(s.a)(u.a,{name:"MuiCard",slot:"Root",overridesResolver:function(t,e){return e.root}})((function(){return{overflow:"hidden"}})),h=i.forwardRef((function(t,e){var n=Object(d.a)({props:t,name:"MuiCard"}),i=n.className,s=n.raised,u=void 0!==s&&s,l=Object(r.a)(n,x),p=Object(a.a)({},n,{raised:u}),h=function(t){var e=t.classes;return Object(o.a)({root:["root"]},b,e)}(p);return Object(m.jsx)(g,Object(a.a)({className:Object(c.a)(h.root,i),elevation:u?8:void 0,ref:e,ownerState:p},l))}));e.a=h},469:function(t,e,n){"use strict";var a=n(11),r=n(6),i=n(2),c=n(0),o=(n(5),n(8)),s=n(25),d=n(374),u=n(199),l=n(10),p=n(14);var b=c.createContext(),m=n(24),x=n(110),g=n(134);function h(t){return Object(x.a)("MuiGrid",t)}var j=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],f=Object(g.a)("MuiGrid",["root","container","item","zeroMinWidth"].concat(Object(m.a)([0,1,2,3,4,5,6,7,8,9,10].map((function(t){return"spacing-xs-".concat(t)}))),Object(m.a)(["column-reverse","column","row-reverse","row"].map((function(t){return"direction-xs-".concat(t)}))),Object(m.a)(["nowrap","wrap-reverse","wrap"].map((function(t){return"wrap-xs-".concat(t)}))),Object(m.a)(j.map((function(t){return"grid-xs-".concat(t)}))),Object(m.a)(j.map((function(t){return"grid-sm-".concat(t)}))),Object(m.a)(j.map((function(t){return"grid-md-".concat(t)}))),Object(m.a)(j.map((function(t){return"grid-lg-".concat(t)}))),Object(m.a)(j.map((function(t){return"grid-xl-".concat(t)}))))),v=n(1),O=["className","columns","columnSpacing","component","container","direction","item","lg","md","rowSpacing","sm","spacing","wrap","xl","xs","zeroMinWidth"];function w(t){var e=parseFloat(t);return"".concat(e).concat(String(t).replace(String(e),"")||"px")}var S=Object(l.a)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(t,e){var n=t.ownerState,a=n.container,r=n.direction,i=n.item,c=n.lg,o=n.md,s=n.sm,d=n.spacing,u=n.wrap,l=n.xl,p=n.xs,b=n.zeroMinWidth;return[e.root,a&&e.container,i&&e.item,b&&e.zeroMinWidth,a&&0!==d&&e["spacing-xs-".concat(String(d))],"row"!==r&&e["direction-xs-".concat(String(r))],"wrap"!==u&&e["wrap-xs-".concat(String(u))],!1!==p&&e["grid-xs-".concat(String(p))],!1!==s&&e["grid-sm-".concat(String(s))],!1!==o&&e["grid-md-".concat(String(o))],!1!==c&&e["grid-lg-".concat(String(c))],!1!==l&&e["grid-xl-".concat(String(l))]]}})((function(t){var e=t.ownerState;return Object(i.a)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"nowrap"===e.wrap&&{flexWrap:"nowrap"},"reverse"===e.wrap&&{flexWrap:"wrap-reverse"})}),(function(t){var e=t.theme,n=t.ownerState;return Object(s.b)({theme:e},n.direction,(function(t){var e={flexDirection:t};return 0===t.indexOf("column")&&(e["& > .".concat(f.item)]={maxWidth:"none"}),e}))}),(function(t){var e=t.theme,n=t.ownerState,r=n.container,i=n.rowSpacing,c={};return r&&0!==i&&(c=Object(s.b)({theme:e},i,(function(t){var n=e.spacing(t);return"0px"!==n?Object(a.a)({marginTop:"-".concat(w(n))},"& > .".concat(f.item),{paddingTop:w(n)}):{}}))),c}),(function(t){var e=t.theme,n=t.ownerState,r=n.container,i=n.columnSpacing,c={};return r&&0!==i&&(c=Object(s.b)({theme:e},i,(function(t){var n=e.spacing(t);return"0px"!==n?Object(a.a)({width:"calc(100% + ".concat(w(n),")"),marginLeft:"-".concat(w(n))},"& > .".concat(f.item),{paddingLeft:w(n)}):{}}))),c}),(function(t){var e=t.theme,n=t.ownerState;return e.breakpoints.keys.reduce((function(t,a){return function(t,e,n,a){var r=a[n];if(r){var c={};if(!0===r)c={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===r)c={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{var o=Object(s.d)({values:a.columns,base:e.breakpoints.values}),d="".concat(Math.round(r/o[n]*1e8)/1e6,"%"),u={};if(a.container&&a.item&&0!==a.columnSpacing){var l=e.spacing(a.columnSpacing);if("0px"!==l){var p="calc(".concat(d," + ").concat(w(l),")");u={flexBasis:p,maxWidth:p}}}c=Object(i.a)({flexBasis:d,flexGrow:0,maxWidth:d},u)}0===e.breakpoints.values[n]?Object.assign(t,c):t[e.breakpoints.up(n)]=c}}(t,e,a,n),t}),{})})),y=c.forwardRef((function(t,e){var n,a=Object(p.a)({props:t,name:"MuiGrid"}),s=Object(d.a)(a),l=s.className,m=s.columns,x=void 0===m?12:m,g=s.columnSpacing,j=s.component,f=void 0===j?"div":j,w=s.container,y=void 0!==w&&w,W=s.direction,k=void 0===W?"row":W,M=s.item,R=void 0!==M&&M,z=s.lg,G=void 0!==z&&z,C=s.md,T=void 0!==C&&C,N=s.rowSpacing,B=s.sm,L=void 0!==B&&B,F=s.spacing,I=void 0===F?0:F,P=s.wrap,D=void 0===P?"wrap":P,A=s.xl,U=void 0!==A&&A,H=s.xs,J=void 0!==H&&H,X=s.zeroMinWidth,K=void 0!==X&&X,V=Object(r.a)(s,O),_=N||I,q=g||I,E=c.useContext(b)||x,Q=Object(i.a)({},s,{columns:E,container:y,direction:k,item:R,lg:G,md:T,sm:L,rowSpacing:_,columnSpacing:q,wrap:D,xl:U,xs:J,zeroMinWidth:K}),Y=function(t){var e=t.classes,n=t.container,a=t.direction,r=t.item,i=t.lg,c=t.md,o=t.sm,s=t.spacing,d=t.wrap,l=t.xl,p=t.xs,b={root:["root",n&&"container",r&&"item",t.zeroMinWidth&&"zeroMinWidth",n&&0!==s&&"spacing-xs-".concat(String(s)),"row"!==a&&"direction-xs-".concat(String(a)),"wrap"!==d&&"wrap-xs-".concat(String(d)),!1!==p&&"grid-xs-".concat(String(p)),!1!==o&&"grid-sm-".concat(String(o)),!1!==c&&"grid-md-".concat(String(c)),!1!==i&&"grid-lg-".concat(String(i)),!1!==l&&"grid-xl-".concat(String(l))]};return Object(u.a)(b,h,e)}(Q);return n=Object(v.jsx)(S,Object(i.a)({ownerState:Q,className:Object(o.a)(Y.root,l),as:f,ref:e},V)),12!==E?Object(v.jsx)(b.Provider,{value:E,children:n}):n}));e.a=y},599:function(t,e,n){"use strict";n.r(e);var a=n(395),r=n(433),i=n(463),c=n(135),o=n(10),s=n(429),d=n(111),u=n(469),l=n(396),p=n(27),b=n(1),m=Object(o.a)(d.a)((function(t){var e=t.theme;return"\n    font-size: ".concat(e.typography.pxToRem(50),";\n")})),x=Object(o.a)(d.a)((function(t){var e=t.theme;return"\n    font-size: ".concat(e.typography.pxToRem(17),";\n")})),g=Object(o.a)(a.a)((function(t){var e=t.theme;return"\n    background-color: ".concat(e.colors.success.main,";\n    color: ").concat(e.palette.success.contrastText,";\n    font-weight: bold;\n    border-radius: 30px;\n    text-transform: uppercase;\n    display: inline-block;\n    font-size: ").concat(e.typography.pxToRem(11),";\n    padding: ").concat(e.spacing(.5)," ").concat(e.spacing(1.5),";\n    margin-bottom: ").concat(e.spacing(2),";\n")})),h=Object(o.a)(a.a)((function(t){var e=t.theme;return"\n    width: ".concat(e.spacing(8),";\n    height: ").concat(e.spacing(8),";\n    border-radius: ").concat(e.general.borderRadius,";\n    background-color: #e5f7ff;\n    flex-shrink: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 0 auto ").concat(e.spacing(2),";\n\n    img {\n      width: 60%;\n      height: 60%;\n      display: block;\n    }\n")})),j=Object(o.a)(a.a)((function(t){var e=t.theme;return"\n    width: ".concat(e.spacing(8),";\n    height: ").concat(e.spacing(8),";\n    border-radius: ").concat(e.general.borderRadius,";\n    background-color: #dfebf6;\n    flex-shrink: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 0 auto ").concat(e.spacing(2),";\n\n    img {\n      width: 60%;\n      height: 60%;\n      display: block;\n    }\n")}));var f=function(){return Object(b.jsx)(r.a,{maxWidth:"lg",sx:{textAlign:"center"},children:Object(b.jsx)(u.a,{spacing:{xs:6,md:10},justifyContent:"center",alignItems:"center",container:!0,children:Object(b.jsxs)(u.a,{item:!0,md:10,lg:8,mx:"auto",children:[Object(b.jsx)(g,{color:"success",children:"Version 1.1.0"}),Object(b.jsx)(m,{sx:{mb:2},variant:"h1",children:"T\u1ea1p h\xf3a Duy Ph\xe1t"}),Object(b.jsx)(x,{sx:{lineHeight:1.5,pb:4},variant:"h4",color:"text.secondary",fontWeight:"normal",children:"High performance React template built with lots of powerful Material-UI components across multiple product niches for fast & perfect apps development processes"}),Object(b.jsx)(l.a,{component:p.b,to:"/dashboards/crypto",size:"large",variant:"contained",children:"Browse Live Preview"}),Object(b.jsx)(l.a,{sx:{ml:2},component:"a",target:"_blank",rel:"noopener",href:"https://bloomui.com/product/tokyo-free-white-react-typescript-material-ui-admin-dashboard",size:"large",variant:"text",children:"Key Features"}),Object(b.jsxs)(u.a,{container:!0,spacing:3,mt:5,children:[Object(b.jsxs)(u.a,{item:!0,md:6,children:[Object(b.jsx)(h,{children:Object(b.jsx)("img",{src:"/static/images/logo/material-ui.svg",alt:"Material-UI"})}),Object(b.jsxs)(d.a,{variant:"h4",children:[Object(b.jsx)(a.a,{sx:{pb:2},children:Object(b.jsx)("b",{children:"Powered by Material-UI"})}),Object(b.jsx)(d.a,{component:"span",variant:"subtitle2",children:" - A simple and customizable component library to build faster, beautiful, andaccessible React apps."})]})]}),Object(b.jsxs)(u.a,{item:!0,md:6,children:[Object(b.jsx)(j,{children:Object(b.jsx)("img",{src:"/static/images/logo/typescript.svg",alt:"Typescript"})}),Object(b.jsxs)(d.a,{variant:"h4",children:[Object(b.jsx)(a.a,{sx:{pb:2},children:Object(b.jsx)("b",{children:"Built with Typescript"})}),Object(b.jsx)(d.a,{component:"span",variant:"subtitle2",children:" - Tokyo Free White features a modern technology stack and is built with React + Typescript."})]})]})]})]})})})},v=Object(o.a)(a.a)((function(){return"\n    overflow: auto;\n    flex: 1;\n    overflow-x: hidden;\n    align-items: center;\n"}));e.default=function(){return Object(b.jsxs)(v,{children:[Object(b.jsx)(c.a,{children:Object(b.jsx)("title",{children:"T\u1ea1p h\xf3a Duy Ph\xe1t"})}),Object(b.jsxs)(r.a,{maxWidth:"lg",children:[Object(b.jsx)(a.a,{display:"flex",justifyContent:"center",py:5,alignItems:"center",children:Object(b.jsx)(s.a,{})}),Object(b.jsx)(i.a,{sx:{p:10,mb:10,borderRadius:12},children:Object(b.jsx)(f,{})})]})]})}}}]);
//# sourceMappingURL=29.b127b2b1.chunk.js.map