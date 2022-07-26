"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[163],{8357:function(t,n,r){r.d(n,{w_:function(){return c}});var e=r(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=e.createContext&&e.createContext(o),i=function(){return i=Object.assign||function(t){for(var n,r=1,e=arguments.length;r<e;r++)for(var o in n=arguments[r])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},i.apply(this,arguments)},s=function(t,n){var r={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.indexOf(e)<0&&(r[e]=t[e]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(e=Object.getOwnPropertySymbols(t);o<e.length;o++)n.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(r[e[o]]=t[e[o]])}return r};function u(t){return t&&t.map((function(t,n){return e.createElement(t.tag,i({key:n},t.attr),u(t.child))}))}function c(t){return function(n){return e.createElement(l,i({attr:i({},t.attr)},n),u(t.child))}}function l(t){var n=function(n){var r,o=t.attr,a=t.size,u=t.title,c=s(t,["attr","size","title"]),l=a||n.size||"1em";return n.className&&(r=n.className),t.className&&(r=(r?r+" ":"")+t.className),e.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,o,c,{className:r,style:i(i({color:t.color||n.color},n.style),t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),u&&e.createElement("title",null,u),t.children)};return void 0!==a?e.createElement(a.Consumer,null,(function(t){return n(t)})):n(o)}},1438:function(t,n,r){function e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}r.d(n,{Z:function(){return e}})},8559:function(t,n,r){r.d(n,{m:function(){return Dt}});var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])},e(t,n)};var o=function(){return o=Object.assign||function(t){for(var n,r=1,e=arguments.length;r<e;r++)for(var o in n=arguments[r])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},o.apply(this,arguments)};function a(t,n){var r={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.indexOf(e)<0&&(r[e]=t[e]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(e=Object.getOwnPropertySymbols(t);o<e.length;o++)n.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(r[e[o]]=t[e[o]])}return r}Object.create;function i(t,n){var r="function"===typeof Symbol&&t[Symbol.iterator];if(!r)return t;var e,o,a=r.call(t),i=[];try{for(;(void 0===n||n-- >0)&&!(e=a.next()).done;)i.push(e.value)}catch(s){o={error:s}}finally{try{e&&!e.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return i}Object.create;var s=r(7294),u=r(4155),c=("undefined"===typeof u||u.env,"production"),l=function(t){return{isEnabled:function(n){return t.some((function(t){return!!n[t]}))}}},f={measureLayout:l(["layout","layoutId","drag"]),animation:l(["animate","exit","variants","whileHover","whileTap","whileFocus","whileDrag","whileInView"]),exit:l(["exit"]),drag:l(["drag","dragControls"]),focus:l(["whileFocus"]),hover:l(["whileHover","onHoverStart","onHoverEnd"]),tap:l(["whileTap","onTap","onTapStart","onTapCancel"]),pan:l(["onPan","onPanStart","onPanSessionStart","onPanEnd"]),inView:l(["whileInView","onViewportEnter","onViewportLeave"])};var d=(0,s.createContext)({strict:!1}),v=Object.keys(f),p=v.length;var m=(0,s.createContext)({transformPagePoint:function(t){return t},isStatic:!1,reducedMotion:"never"}),y=(0,s.createContext)({});var g=(0,s.createContext)(null),h="undefined"!==typeof document,w=h?s.useLayoutEffect:s.useEffect,b={current:null},O=!1;function x(){return!O&&function(){if(O=!0,h)if(window.matchMedia){var t=window.matchMedia("(prefers-reduced-motion)"),n=function(){return b.current=t.matches};t.addListener(n),n()}else b.current=!1}(),i((0,s.useState)(b.current),1)[0]}function C(t,n,r,e){var o=(0,s.useContext)(d),a=(0,s.useContext)(y).visualElement,i=(0,s.useContext)(g),u=function(){var t=x(),n=(0,s.useContext)(m).reducedMotion;return"never"!==n&&("always"===n||t)}(),c=(0,s.useRef)(void 0);e||(e=o.renderer),!c.current&&e&&(c.current=e(t,{visualState:n,parent:a,props:r,presenceId:null===i||void 0===i?void 0:i.id,blockInitialAnimation:!1===(null===i||void 0===i?void 0:i.initial),shouldReduceMotion:u}));var l=c.current;return w((function(){null===l||void 0===l||l.syncRender()})),(0,s.useEffect)((function(){var t;null===(t=null===l||void 0===l?void 0:l.animationState)||void 0===t||t.animateChanges()})),w((function(){return function(){return null===l||void 0===l?void 0:l.notifyUnmount()}}),[]),l}function S(t){return"object"===typeof t&&Object.prototype.hasOwnProperty.call(t,"current")}function E(t){return"string"===typeof t||function(t){return Array.isArray(t)}(t)}function j(t,n,r,e,o){var a;return void 0===e&&(e={}),void 0===o&&(o={}),"function"===typeof n&&(n=n(null!==r&&void 0!==r?r:t.custom,e,o)),"string"===typeof n&&(n=null===(a=t.variants)||void 0===a?void 0:a[n]),"function"===typeof n&&(n=n(null!==r&&void 0!==r?r:t.custom,e,o)),n}function P(t){var n;return"function"===typeof(null===(n=t.animate)||void 0===n?void 0:n.start)||E(t.initial)||E(t.animate)||E(t.whileHover)||E(t.whileDrag)||E(t.whileTap)||E(t.whileFocus)||E(t.exit)}function k(t){var n=function(t,n){if(P(t)){var r=t.initial,e=t.animate;return{initial:!1===r||E(r)?r:void 0,animate:E(e)?e:void 0}}return!1!==t.inherit?n:{}}(t,(0,s.useContext)(y)),r=n.initial,e=n.animate;return(0,s.useMemo)((function(){return{initial:r,animate:e}}),[T(r),T(e)])}function T(t){return Array.isArray(t)?t.join(" "):t}function V(t){var n=(0,s.useRef)(null);return null===n.current&&(n.current=t()),n.current}var L=!1,M=1;var A=(0,s.createContext)({}),R=(0,s.createContext)({});var B=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}(n,t),n.prototype.getSnapshotBeforeUpdate=function(){return this.updateProps(),null},n.prototype.componentDidUpdate=function(){},n.prototype.updateProps=function(){var t=this.props,n=t.visualElement,r=t.props;n&&n.setProps(r)},n.prototype.render=function(){return this.props.children},n}(s.Component);function D(t){var n=t.preloadedFeatures,r=t.createVisualElement,e=t.projectionNodeConstructor,a=t.useRender,i=t.useVisualState,u=t.Component;return n&&function(t){for(var n in t)null!==t[n]&&("projectionNodeConstructor"===n?f.projectionNodeConstructor=t[n]:f[n].Component=t[n])}(n),(0,s.forwardRef)((function(t,l){var g=function(t){var n,r=t.layoutId,e=null===(n=(0,s.useContext)(A))||void 0===n?void 0:n.id;return e&&void 0!==r?e+"-"+r:r}(t);t=o(o({},t),{layoutId:g});var w=(0,s.useContext)(m),b=null,O=k(t),x=w.isStatic?void 0:V((function(){if(L)return M++})),E=i(t,w.isStatic);return!w.isStatic&&h&&(O.visualElement=C(u,E,o(o({},w),t),r),function(t,n,r,e){var o,a=n.layoutId,i=n.layout,u=n.drag,c=n.dragConstraints,l=n.layoutScroll,f=(0,s.useContext)(R);e&&r&&!(null===r||void 0===r?void 0:r.projection)&&(r.projection=new e(t,r.getLatestValues(),null===(o=r.parent)||void 0===o?void 0:o.projection),r.projection.setOptions({layoutId:a,layout:i,alwaysMeasureLayout:Boolean(u)||c&&S(c),visualElement:r,scheduleRender:function(){return r.scheduleRender()},animationType:"string"===typeof i?i:"both",initialPromotionConfig:f,layoutScroll:l}))}(x,t,O.visualElement,e||f.projectionNodeConstructor),b=function(t,n,r){var e=[],a=(0,s.useContext)(d);if(!n)return null;"production"!==c&&r&&a.strict;for(var i=0;i<p;i++){var u=v[i],l=f[u],m=l.isEnabled,y=l.Component;m(t)&&y&&e.push(s.createElement(y,o({key:u},t,{visualElement:n})))}return e}(t,O.visualElement,n)),s.createElement(B,{visualElement:O.visualElement,props:o(o({},w),t)},b,s.createElement(y.Provider,{value:O},a(u,t,x,function(t,n,r){return(0,s.useCallback)((function(e){var o;e&&(null===(o=t.mount)||void 0===o||o.call(t,e)),n&&(e?n.mount(e):n.unmount()),r&&("function"===typeof r?r(e):S(r)&&(r.current=e))}),[n])}(E,O.visualElement,l),E,w.isStatic,O.visualElement)))}))}var I=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","svg","switch","symbol","text","tspan","use","view"];function X(t){return"string"===typeof t&&!t.includes("-")&&!!(I.indexOf(t)>-1||/[A-Z]/.test(t))}var Y={};var _=["","X","Y","Z"],H=["transformPerspective","x","y","z"];function N(t,n){return H.indexOf(t)-H.indexOf(n)}["translate","scale","rotate","skew"].forEach((function(t){return _.forEach((function(n){return H.push(t+n)}))}));var W=new Set(H);function F(t){return W.has(t)}var Z=new Set(["originX","originY","originZ"]);function z(t){return Z.has(t)}function U(t,n){var r=n.layout,e=n.layoutId;return F(t)||z(t)||(r||void 0!==e)&&(!!Y[t]||"opacity"===t)}var K=function(t){return Boolean(null!==t&&"object"===typeof t&&t.getVelocity)},$={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"};function q(t){return t.startsWith("--")}var G=function(t,n){return n&&"number"===typeof t?n.transform(t):t};const J=t=>({test:n=>function(t){return"string"===typeof t}(n)&&n.endsWith(t)&&1===n.split(" ").length,parse:parseFloat,transform:n=>`${n}${t}`}),Q=J("deg"),tt=J("%"),nt=J("px"),rt=(J("vh"),J("vw"),Object.assign(Object.assign({},tt),{parse:t=>tt.parse(t)/100,transform:t=>tt.transform(100*t)})),et={test:t=>"number"===typeof t,parse:parseFloat,transform:t=>t},ot=Object.assign(Object.assign({},et),{transform:(at=0,it=1,t=>Math.max(Math.min(t,it),at))});var at,it;const st=Object.assign(Object.assign({},et),{default:1});var ut=o(o({},et),{transform:Math.round}),ct={borderWidth:nt,borderTopWidth:nt,borderRightWidth:nt,borderBottomWidth:nt,borderLeftWidth:nt,borderRadius:nt,radius:nt,borderTopLeftRadius:nt,borderTopRightRadius:nt,borderBottomRightRadius:nt,borderBottomLeftRadius:nt,width:nt,maxWidth:nt,height:nt,maxHeight:nt,size:nt,top:nt,right:nt,bottom:nt,left:nt,padding:nt,paddingTop:nt,paddingRight:nt,paddingBottom:nt,paddingLeft:nt,margin:nt,marginTop:nt,marginRight:nt,marginBottom:nt,marginLeft:nt,rotate:Q,rotateX:Q,rotateY:Q,rotateZ:Q,scale:st,scaleX:st,scaleY:st,scaleZ:st,skew:Q,skewX:Q,skewY:Q,distance:nt,translateX:nt,translateY:nt,translateZ:nt,x:nt,y:nt,z:nt,perspective:nt,transformPerspective:nt,opacity:ot,originX:rt,originY:rt,originZ:nt,zIndex:ut,fillOpacity:ot,strokeOpacity:ot,numOctaves:ut};function lt(t,n,r,e){var o,a=t.style,i=t.vars,s=t.transform,u=t.transformKeys,c=t.transformOrigin;u.length=0;var l=!1,f=!1,d=!0;for(var v in n){var p=n[v];if(q(v))i[v]=p;else{var m=ct[v],y=G(p,m);if(F(v)){if(l=!0,s[v]=y,u.push(v),!d)continue;p!==(null!==(o=m.default)&&void 0!==o?o:0)&&(d=!1)}else z(v)?(c[v]=y,f=!0):a[v]=y}}l?a.transform=function(t,n,r,e){var o=t.transform,a=t.transformKeys,i=n.enableHardwareAcceleration,s=void 0===i||i,u=n.allowTransformNone,c=void 0===u||u,l="";a.sort(N);for(var f=!1,d=a.length,v=0;v<d;v++){var p=a[v];l+="".concat($[p]||p,"(").concat(o[p],") "),"z"===p&&(f=!0)}return!f&&s?l+="translateZ(0)":l=l.trim(),e?l=e(o,r?"":l):c&&r&&(l="none"),l}(t,r,d,e):e?a.transform=e({},""):!n.transform&&a.transform&&(a.transform="none"),f&&(a.transformOrigin=function(t){var n=t.originX,r=void 0===n?"50%":n,e=t.originY,o=void 0===e?"50%":e,a=t.originZ,i=void 0===a?0:a;return"".concat(r," ").concat(o," ").concat(i)}(c))}var ft=function(){return{style:{},transform:{},transformKeys:[],transformOrigin:{},vars:{}}};function dt(t,n,r){for(var e in n)K(n[e])||U(e,r)||(t[e]=n[e])}function vt(t,n,r){var e={};return dt(e,t.style||{},t),Object.assign(e,function(t,n,r){var e=t.transformTemplate;return(0,s.useMemo)((function(){var t={style:{},transform:{},transformKeys:[],transformOrigin:{},vars:{}};lt(t,n,{enableHardwareAcceleration:!r},e);var a=t.style;return o(o({},t.vars),a)}),[n])}(t,n,r)),t.transformValues&&(e=t.transformValues(e)),e}function pt(t,n,r){var e={},o=vt(t,n,r);return Boolean(t.drag)&&!1!==t.dragListener&&(e.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=!0===t.drag?"none":"pan-".concat("x"===t.drag?"y":"x")),e.style=o,e}var mt=new Set(["initial","animate","exit","style","variants","transition","transformTemplate","transformValues","custom","inherit","layout","layoutId","layoutDependency","onLayoutAnimationStart","onLayoutAnimationComplete","onLayoutMeasure","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","drag","dragControls","dragListener","dragConstraints","dragDirectionLock","dragSnapToOrigin","_dragX","_dragY","dragElastic","dragMomentum","dragPropagation","dragTransition","whileDrag","onPan","onPanStart","onPanEnd","onPanSessionStart","onTap","onTapStart","onTapCancel","onHoverStart","onHoverEnd","whileFocus","whileTap","whileHover","whileInView","onViewportEnter","onViewportLeave","viewport","layoutScroll"]);function yt(t){return mt.has(t)}var gt,ht=function(t){return!yt(t)};try{(gt=require("@emotion/is-prop-valid").default)&&(ht=function(t){return t.startsWith("on")?!yt(t):gt(t)})}catch(It){}function wt(t,n,r){return"string"===typeof t?t:nt.transform(n+r*t)}var bt={offset:"stroke-dashoffset",array:"stroke-dasharray"},Ot={offset:"strokeDashoffset",array:"strokeDasharray"};function xt(t,n,r,e){var o=n.attrX,i=n.attrY,s=n.originX,u=n.originY,c=n.pathLength,l=n.pathSpacing,f=void 0===l?1:l,d=n.pathOffset,v=void 0===d?0:d;lt(t,a(n,["attrX","attrY","originX","originY","pathLength","pathSpacing","pathOffset"]),r,e),t.attrs=t.style,t.style={};var p=t.attrs,m=t.style,y=t.dimensions;p.transform&&(y&&(m.transform=p.transform),delete p.transform),y&&(void 0!==s||void 0!==u||m.transform)&&(m.transformOrigin=function(t,n,r){var e=wt(n,t.x,t.width),o=wt(r,t.y,t.height);return"".concat(e," ").concat(o)}(y,void 0!==s?s:.5,void 0!==u?u:.5)),void 0!==o&&(p.x=o),void 0!==i&&(p.y=i),void 0!==c&&function(t,n,r,e,o){void 0===r&&(r=1),void 0===e&&(e=0),void 0===o&&(o=!0),t.pathLength=1;var a=o?bt:Ot;t[a.offset]=nt.transform(-e);var i=nt.transform(n),s=nt.transform(r);t[a.array]="".concat(i," ").concat(s)}(p,c,f,v,!1)}var Ct=function(){return o(o({},{style:{},transform:{},transformKeys:[],transformOrigin:{},vars:{}}),{attrs:{}})};function St(t,n){var r=(0,s.useMemo)((function(){var r=Ct();return xt(r,n,{enableHardwareAcceleration:!1},t.transformTemplate),o(o({},r.attrs),{style:o({},r.style)})}),[n]);if(t.style){var e={};dt(e,t.style,t),r.style=o(o({},e),r.style)}return r}function Et(t){void 0===t&&(t=!1);return function(n,r,e,a,i,u){var c=i.latestValues,l=(X(n)?St:pt)(r,c,u),f=function(t,n,r){var e={};for(var o in t)(ht(o)||!0===r&&yt(o)||!n&&!yt(o)||t.draggable&&o.startsWith("onDrag"))&&(e[o]=t[o]);return e}(r,"string"===typeof n,t),d=o(o(o({},f),l),{ref:a});return e&&(d["data-projection-id"]=e),(0,s.createElement)(n,d)}}var jt=/([a-z])([A-Z])/g;var Pt=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength"]);function kt(t,n,r,e){for(var o in function(t,n,r,e){var o=n.style,a=n.vars;for(var i in Object.assign(t.style,o,e&&e.getProjectionStyles(r)),a)t.style.setProperty(i,a[i])}(t,n,void 0,e),n.attrs)t.setAttribute(Pt.has(o)?o:o.replace(jt,"$1-$2").toLowerCase(),n.attrs[o])}function Tt(t){var n=t.style,r={};for(var e in n)(K(n[e])||U(e,t))&&(r[e]=n[e]);return r}function Vt(t){var n,r=K(t)?t.get():t;return n=r,Boolean(n&&"object"===typeof n&&n.mix&&n.toValue)?r.toValue():r}function Lt(t,n,r,e){var o=t.scrapeMotionValuesFromProps,a=t.createRenderState,i=t.onMount,s={latestValues:At(n,r,e,o),renderState:a()};return i&&(s.mount=function(t){return i(n,t,s)}),s}var Mt=function(t){return function(n,r){var e=(0,s.useContext)(y),o=(0,s.useContext)(g);return r?Lt(t,n,e,o):V((function(){return Lt(t,n,e,o)}))}};function At(t,n,r,e){var o={},i=!1===(null===r||void 0===r?void 0:r.initial),s=e(t);for(var u in s)o[u]=Vt(s[u]);var c=t.initial,l=t.animate,f=P(t),d=function(t){return Boolean(P(t)||t.variants)}(t);n&&d&&!f&&!1!==t.inherit&&(null!==c&&void 0!==c||(c=n.initial),null!==l&&void 0!==l||(l=n.animate));var v,p=i||!1===c,m=p?l:c;!m||"boolean"===typeof m||"object"===typeof(v=m)&&"function"===typeof v.start||(Array.isArray(m)?m:[m]).forEach((function(n){var r=j(t,n);if(r){var e=r.transitionEnd;r.transition;var i=a(r,["transitionEnd","transition"]);for(var s in i){var u=i[s];if(Array.isArray(u))u=u[p?u.length-1:0];null!==u&&(o[s]=u)}for(var s in e)o[s]=e[s]}}));return o}var Rt={useVisualState:Mt({scrapeMotionValuesFromProps:function(t){var n=Tt(t);for(var r in t){if(K(t[r]))n["x"===r||"y"===r?"attr"+r.toUpperCase():r]=t[r]}return n},createRenderState:Ct,onMount:function(t,n,r){var e=r.renderState,o=r.latestValues;try{e.dimensions="function"===typeof n.getBBox?n.getBBox():n.getBoundingClientRect()}catch(a){e.dimensions={x:0,y:0,width:0,height:0}}xt(e,o,{enableHardwareAcceleration:!1},t.transformTemplate),kt(n,e)}})},Bt={useVisualState:Mt({scrapeMotionValuesFromProps:Tt,createRenderState:ft})};var Dt=function(t){function n(n,r){return void 0===r&&(r={}),D(t(n,r))}if("undefined"===typeof Proxy)return n;var r=new Map;return new Proxy(n,{get:function(t,e){return r.has(e)||r.set(e,n(e)),r.get(e)}})}((function(t,n,r,e,a){var i=n.forwardMotionProps,s=void 0!==i&&i,u=X(t)?Rt:Bt;return o(o({},u),{preloadedFeatures:r,useRender:Et(s),createVisualElement:e,projectionNodeConstructor:a,Component:t})}))}}]);