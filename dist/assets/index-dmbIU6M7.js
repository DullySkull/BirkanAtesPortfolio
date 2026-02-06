function Rf(a,c){for(var s=0;s<c.length;s++){const p=c[s];if(typeof p!="string"&&!Array.isArray(p)){for(const y in p)if(y!=="default"&&!(y in a)){const S=Object.getOwnPropertyDescriptor(p,y);S&&Object.defineProperty(a,y,S.get?S:{enumerable:!0,get:()=>p[y]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const y of document.querySelectorAll('link[rel="modulepreload"]'))p(y);new MutationObserver(y=>{for(const S of y)if(S.type==="childList")for(const w of S.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&p(w)}).observe(document,{childList:!0,subtree:!0});function s(y){const S={};return y.integrity&&(S.integrity=y.integrity),y.referrerPolicy&&(S.referrerPolicy=y.referrerPolicy),y.crossOrigin==="use-credentials"?S.credentials="include":y.crossOrigin==="anonymous"?S.credentials="omit":S.credentials="same-origin",S}function p(y){if(y.ep)return;y.ep=!0;const S=s(y);fetch(y.href,S)}})();function Lf(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Bi={exports:{}},Ir={},Vi={exports:{}},$={};var Yu;function _f(){if(Yu)return $;Yu=1;var a=Symbol.for("react.element"),c=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),S=Symbol.for("react.provider"),w=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),j=Symbol.for("react.memo"),D=Symbol.for("react.lazy"),I=Symbol.iterator;function G(m){return m===null||typeof m!="object"?null:(m=I&&m[I]||m["@@iterator"],typeof m=="function"?m:null)}var te={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,H={};function b(m,A,Q){this.props=m,this.context=A,this.refs=H,this.updater=Q||te}b.prototype.isReactComponent={},b.prototype.setState=function(m,A){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,A,"setState")},b.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function le(){}le.prototype=b.prototype;function ie(m,A,Q){this.props=m,this.context=A,this.refs=H,this.updater=Q||te}var ne=ie.prototype=new le;ne.constructor=ie,X(ne,b.prototype),ne.isPureReactComponent=!0;var ae=Array.isArray,Ae=Object.prototype.hasOwnProperty,De={current:null},_e={key:!0,ref:!0,__self:!0,__source:!0};function Je(m,A,Q){var q,J={},Y=null,se=null;if(A!=null)for(q in A.ref!==void 0&&(se=A.ref),A.key!==void 0&&(Y=""+A.key),A)Ae.call(A,q)&&!_e.hasOwnProperty(q)&&(J[q]=A[q]);var re=arguments.length-2;if(re===1)J.children=Q;else if(1<re){for(var pe=Array(re),Qe=0;Qe<re;Qe++)pe[Qe]=arguments[Qe+2];J.children=pe}if(m&&m.defaultProps)for(q in re=m.defaultProps,re)J[q]===void 0&&(J[q]=re[q]);return{$$typeof:a,type:m,key:Y,ref:se,props:J,_owner:De.current}}function Mt(m,A){return{$$typeof:a,type:m.type,key:A,ref:m.ref,props:m.props,_owner:m._owner}}function wt(m){return typeof m=="object"&&m!==null&&m.$$typeof===a}function en(m){var A={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(Q){return A[Q]})}var ht=/\/+/g;function Ke(m,A){return typeof m=="object"&&m!==null&&m.key!=null?en(""+m.key):A.toString(36)}function it(m,A,Q,q,J){var Y=typeof m;(Y==="undefined"||Y==="boolean")&&(m=null);var se=!1;if(m===null)se=!0;else switch(Y){case"string":case"number":se=!0;break;case"object":switch(m.$$typeof){case a:case c:se=!0}}if(se)return se=m,J=J(se),m=q===""?"."+Ke(se,0):q,ae(J)?(Q="",m!=null&&(Q=m.replace(ht,"$&/")+"/"),it(J,A,Q,"",function(Qe){return Qe})):J!=null&&(wt(J)&&(J=Mt(J,Q+(!J.key||se&&se.key===J.key?"":(""+J.key).replace(ht,"$&/")+"/")+m)),A.push(J)),1;if(se=0,q=q===""?".":q+":",ae(m))for(var re=0;re<m.length;re++){Y=m[re];var pe=q+Ke(Y,re);se+=it(Y,A,Q,pe,J)}else if(pe=G(m),typeof pe=="function")for(m=pe.call(m),re=0;!(Y=m.next()).done;)Y=Y.value,pe=q+Ke(Y,re++),se+=it(Y,A,Q,pe,J);else if(Y==="object")throw A=String(m),Error("Objects are not valid as a React child (found: "+(A==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":A)+"). If you meant to render a collection of children, use an array instead.");return se}function mt(m,A,Q){if(m==null)return m;var q=[],J=0;return it(m,q,"","",function(Y){return A.call(Q,Y,J++)}),q}function Oe(m){if(m._status===-1){var A=m._result;A=A(),A.then(function(Q){(m._status===0||m._status===-1)&&(m._status=1,m._result=Q)},function(Q){(m._status===0||m._status===-1)&&(m._status=2,m._result=Q)}),m._status===-1&&(m._status=0,m._result=A)}if(m._status===1)return m._result.default;throw m._result}var ye={current:null},z={transition:null},W={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:z,ReactCurrentOwner:De};function L(){throw Error("act(...) is not supported in production builds of React.")}return $.Children={map:mt,forEach:function(m,A,Q){mt(m,function(){A.apply(this,arguments)},Q)},count:function(m){var A=0;return mt(m,function(){A++}),A},toArray:function(m){return mt(m,function(A){return A})||[]},only:function(m){if(!wt(m))throw Error("React.Children.only expected to receive a single React element child.");return m}},$.Component=b,$.Fragment=s,$.Profiler=y,$.PureComponent=ie,$.StrictMode=p,$.Suspense=k,$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W,$.act=L,$.cloneElement=function(m,A,Q){if(m==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+m+".");var q=X({},m.props),J=m.key,Y=m.ref,se=m._owner;if(A!=null){if(A.ref!==void 0&&(Y=A.ref,se=De.current),A.key!==void 0&&(J=""+A.key),m.type&&m.type.defaultProps)var re=m.type.defaultProps;for(pe in A)Ae.call(A,pe)&&!_e.hasOwnProperty(pe)&&(q[pe]=A[pe]===void 0&&re!==void 0?re[pe]:A[pe])}var pe=arguments.length-2;if(pe===1)q.children=Q;else if(1<pe){re=Array(pe);for(var Qe=0;Qe<pe;Qe++)re[Qe]=arguments[Qe+2];q.children=re}return{$$typeof:a,type:m.type,key:J,ref:Y,props:q,_owner:se}},$.createContext=function(m){return m={$$typeof:w,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},m.Provider={$$typeof:S,_context:m},m.Consumer=m},$.createElement=Je,$.createFactory=function(m){var A=Je.bind(null,m);return A.type=m,A},$.createRef=function(){return{current:null}},$.forwardRef=function(m){return{$$typeof:C,render:m}},$.isValidElement=wt,$.lazy=function(m){return{$$typeof:D,_payload:{_status:-1,_result:m},_init:Oe}},$.memo=function(m,A){return{$$typeof:j,type:m,compare:A===void 0?null:A}},$.startTransition=function(m){var A=z.transition;z.transition={};try{m()}finally{z.transition=A}},$.unstable_act=L,$.useCallback=function(m,A){return ye.current.useCallback(m,A)},$.useContext=function(m){return ye.current.useContext(m)},$.useDebugValue=function(){},$.useDeferredValue=function(m){return ye.current.useDeferredValue(m)},$.useEffect=function(m,A){return ye.current.useEffect(m,A)},$.useId=function(){return ye.current.useId()},$.useImperativeHandle=function(m,A,Q){return ye.current.useImperativeHandle(m,A,Q)},$.useInsertionEffect=function(m,A){return ye.current.useInsertionEffect(m,A)},$.useLayoutEffect=function(m,A){return ye.current.useLayoutEffect(m,A)},$.useMemo=function(m,A){return ye.current.useMemo(m,A)},$.useReducer=function(m,A,Q){return ye.current.useReducer(m,A,Q)},$.useRef=function(m){return ye.current.useRef(m)},$.useState=function(m){return ye.current.useState(m)},$.useSyncExternalStore=function(m,A,Q){return ye.current.useSyncExternalStore(m,A,Q)},$.useTransition=function(){return ye.current.useTransition()},$.version="18.3.1",$}var ec;function Ji(){return ec||(ec=1,Vi.exports=_f()),Vi.exports}var tc;function Of(){if(tc)return Ir;tc=1;var a=Ji(),c=Symbol.for("react.element"),s=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,y=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,S={key:!0,ref:!0,__self:!0,__source:!0};function w(C,k,j){var D,I={},G=null,te=null;j!==void 0&&(G=""+j),k.key!==void 0&&(G=""+k.key),k.ref!==void 0&&(te=k.ref);for(D in k)p.call(k,D)&&!S.hasOwnProperty(D)&&(I[D]=k[D]);if(C&&C.defaultProps)for(D in k=C.defaultProps,k)I[D]===void 0&&(I[D]=k[D]);return{$$typeof:c,type:C,key:G,ref:te,props:I,_owner:y.current}}return Ir.Fragment=s,Ir.jsx=w,Ir.jsxs=w,Ir}var nc;function Uf(){return nc||(nc=1,Bi.exports=Of()),Bi.exports}var u=Uf(),M=Ji();const Gf=Lf(M),Bf=Rf({__proto__:null,default:Gf},[M]);var Ho={},Hi={exports:{}},We={},Wi={exports:{}},Ki={};var rc;function Vf(){return rc||(rc=1,(function(a){function c(z,W){var L=z.length;z.push(W);e:for(;0<L;){var m=L-1>>>1,A=z[m];if(0<y(A,W))z[m]=W,z[L]=A,L=m;else break e}}function s(z){return z.length===0?null:z[0]}function p(z){if(z.length===0)return null;var W=z[0],L=z.pop();if(L!==W){z[0]=L;e:for(var m=0,A=z.length,Q=A>>>1;m<Q;){var q=2*(m+1)-1,J=z[q],Y=q+1,se=z[Y];if(0>y(J,L))Y<A&&0>y(se,J)?(z[m]=se,z[Y]=L,m=Y):(z[m]=J,z[q]=L,m=q);else if(Y<A&&0>y(se,L))z[m]=se,z[Y]=L,m=Y;else break e}}return W}function y(z,W){var L=z.sortIndex-W.sortIndex;return L!==0?L:z.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var S=performance;a.unstable_now=function(){return S.now()}}else{var w=Date,C=w.now();a.unstable_now=function(){return w.now()-C}}var k=[],j=[],D=1,I=null,G=3,te=!1,X=!1,H=!1,b=typeof setTimeout=="function"?setTimeout:null,le=typeof clearTimeout=="function"?clearTimeout:null,ie=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ne(z){for(var W=s(j);W!==null;){if(W.callback===null)p(j);else if(W.startTime<=z)p(j),W.sortIndex=W.expirationTime,c(k,W);else break;W=s(j)}}function ae(z){if(H=!1,ne(z),!X)if(s(k)!==null)X=!0,Oe(Ae);else{var W=s(j);W!==null&&ye(ae,W.startTime-z)}}function Ae(z,W){X=!1,H&&(H=!1,le(Je),Je=-1),te=!0;var L=G;try{for(ne(W),I=s(k);I!==null&&(!(I.expirationTime>W)||z&&!en());){var m=I.callback;if(typeof m=="function"){I.callback=null,G=I.priorityLevel;var A=m(I.expirationTime<=W);W=a.unstable_now(),typeof A=="function"?I.callback=A:I===s(k)&&p(k),ne(W)}else p(k);I=s(k)}if(I!==null)var Q=!0;else{var q=s(j);q!==null&&ye(ae,q.startTime-W),Q=!1}return Q}finally{I=null,G=L,te=!1}}var De=!1,_e=null,Je=-1,Mt=5,wt=-1;function en(){return!(a.unstable_now()-wt<Mt)}function ht(){if(_e!==null){var z=a.unstable_now();wt=z;var W=!0;try{W=_e(!0,z)}finally{W?Ke():(De=!1,_e=null)}}else De=!1}var Ke;if(typeof ie=="function")Ke=function(){ie(ht)};else if(typeof MessageChannel<"u"){var it=new MessageChannel,mt=it.port2;it.port1.onmessage=ht,Ke=function(){mt.postMessage(null)}}else Ke=function(){b(ht,0)};function Oe(z){_e=z,De||(De=!0,Ke())}function ye(z,W){Je=b(function(){z(a.unstable_now())},W)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(z){z.callback=null},a.unstable_continueExecution=function(){X||te||(X=!0,Oe(Ae))},a.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Mt=0<z?Math.floor(1e3/z):5},a.unstable_getCurrentPriorityLevel=function(){return G},a.unstable_getFirstCallbackNode=function(){return s(k)},a.unstable_next=function(z){switch(G){case 1:case 2:case 3:var W=3;break;default:W=G}var L=G;G=W;try{return z()}finally{G=L}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(z,W){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var L=G;G=z;try{return W()}finally{G=L}},a.unstable_scheduleCallback=function(z,W,L){var m=a.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?m+L:m):L=m,z){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=L+A,z={id:D++,callback:W,priorityLevel:z,startTime:L,expirationTime:A,sortIndex:-1},L>m?(z.sortIndex=L,c(j,z),s(k)===null&&z===s(j)&&(H?(le(Je),Je=-1):H=!0,ye(ae,L-m))):(z.sortIndex=A,c(k,z),X||te||(X=!0,Oe(Ae))),z},a.unstable_shouldYield=en,a.unstable_wrapCallback=function(z){var W=G;return function(){var L=G;G=W;try{return z.apply(this,arguments)}finally{G=L}}}})(Ki)),Ki}var oc;function Hf(){return oc||(oc=1,Wi.exports=Vf()),Wi.exports}var lc;function Wf(){if(lc)return We;lc=1;var a=Ji(),c=Hf();function s(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p=new Set,y={};function S(e,t){w(e,t),w(e+"Capture",t)}function w(e,t){for(y[e]=t,e=0;e<t.length;e++)p.add(t[e])}var C=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),k=Object.prototype.hasOwnProperty,j=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,D={},I={};function G(e){return k.call(I,e)?!0:k.call(D,e)?!1:j.test(e)?I[e]=!0:(D[e]=!0,!1)}function te(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function X(e,t,n,r){if(t===null||typeof t>"u"||te(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function H(e,t,n,r,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var b={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){b[e]=new H(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];b[t]=new H(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){b[e]=new H(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){b[e]=new H(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){b[e]=new H(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){b[e]=new H(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){b[e]=new H(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){b[e]=new H(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){b[e]=new H(e,5,!1,e.toLowerCase(),null,!1,!1)});var le=/[\-:]([a-z])/g;function ie(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(le,ie);b[t]=new H(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(le,ie);b[t]=new H(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(le,ie);b[t]=new H(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){b[e]=new H(e,1,!1,e.toLowerCase(),null,!1,!1)}),b.xlinkHref=new H("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){b[e]=new H(e,1,!1,e.toLowerCase(),null,!0,!0)});function ne(e,t,n,r){var o=b.hasOwnProperty(t)?b[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(X(t,n,o,r)&&(n=null),r||o===null?G(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ae=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ae=Symbol.for("react.element"),De=Symbol.for("react.portal"),_e=Symbol.for("react.fragment"),Je=Symbol.for("react.strict_mode"),Mt=Symbol.for("react.profiler"),wt=Symbol.for("react.provider"),en=Symbol.for("react.context"),ht=Symbol.for("react.forward_ref"),Ke=Symbol.for("react.suspense"),it=Symbol.for("react.suspense_list"),mt=Symbol.for("react.memo"),Oe=Symbol.for("react.lazy"),ye=Symbol.for("react.offscreen"),z=Symbol.iterator;function W(e){return e===null||typeof e!="object"?null:(e=z&&e[z]||e["@@iterator"],typeof e=="function"?e:null)}var L=Object.assign,m;function A(e){if(m===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);m=t&&t[1]||""}return`
`+m+e}var Q=!1;function q(e,t){if(!e||Q)return"";Q=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(x){var r=x}Reflect.construct(e,[],t)}else{try{t.call()}catch(x){r=x}e.call(t.prototype)}else{try{throw Error()}catch(x){r=x}e()}}catch(x){if(x&&r&&typeof x.stack=="string"){for(var o=x.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,d=l.length-1;1<=i&&0<=d&&o[i]!==l[d];)d--;for(;1<=i&&0<=d;i--,d--)if(o[i]!==l[d]){if(i!==1||d!==1)do if(i--,d--,0>d||o[i]!==l[d]){var f=`
`+o[i].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=i&&0<=d);break}}}finally{Q=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?A(e):""}function J(e){switch(e.tag){case 5:return A(e.type);case 16:return A("Lazy");case 13:return A("Suspense");case 19:return A("SuspenseList");case 0:case 2:case 15:return e=q(e.type,!1),e;case 11:return e=q(e.type.render,!1),e;case 1:return e=q(e.type,!0),e;default:return""}}function Y(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _e:return"Fragment";case De:return"Portal";case Mt:return"Profiler";case Je:return"StrictMode";case Ke:return"Suspense";case it:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case en:return(e.displayName||"Context")+".Consumer";case wt:return(e._context.displayName||"Context")+".Provider";case ht:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case mt:return t=e.displayName||null,t!==null?t:Y(e.type)||"Memo";case Oe:t=e._payload,e=e._init;try{return Y(e(t))}catch{}}return null}function se(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Y(t);case 8:return t===Je?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function re(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pe(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Qe(e){var t=pe(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function zr(e){e._valueTracker||(e._valueTracker=Qe(e))}function la(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=pe(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Fr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function qo(e,t){var n=t.checked;return L({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ia(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=re(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function aa(e,t){t=t.checked,t!=null&&ne(e,"checked",t,!1)}function Xo(e,t){aa(e,t);var n=re(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Zo(e,t.type,n):t.hasOwnProperty("defaultValue")&&Zo(e,t.type,re(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function sa(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Zo(e,t,n){(t!=="number"||Fr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Hn=Array.isArray;function yn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+re(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Jo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(s(91));return L({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ua(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(s(92));if(Hn(n)){if(1<n.length)throw Error(s(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:re(n)}}function ca(e,t){var n=re(t.value),r=re(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function da(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function fa(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Yo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?fa(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Dr,pa=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Dr=Dr||document.createElement("div"),Dr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Dr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Wn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Kn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oc=["Webkit","ms","Moz","O"];Object.keys(Kn).forEach(function(e){Oc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Kn[t]=Kn[e]})});function ha(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Kn.hasOwnProperty(e)&&Kn[e]?(""+t).trim():t+"px"}function ma(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=ha(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Uc=L({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function el(e,t){if(t){if(Uc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(s(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(s(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(s(61))}if(t.style!=null&&typeof t.style!="object")throw Error(s(62))}}function tl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nl=null;function rl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ol=null,vn=null,xn=null;function ga(e){if(e=hr(e)){if(typeof ol!="function")throw Error(s(280));var t=e.stateNode;t&&(t=oo(t),ol(e.stateNode,e.type,t))}}function ya(e){vn?xn?xn.push(e):xn=[e]:vn=e}function va(){if(vn){var e=vn,t=xn;if(xn=vn=null,ga(e),t)for(e=0;e<t.length;e++)ga(t[e])}}function xa(e,t){return e(t)}function Sa(){}var ll=!1;function wa(e,t,n){if(ll)return e(t,n);ll=!0;try{return xa(e,t,n)}finally{ll=!1,(vn!==null||xn!==null)&&(Sa(),va())}}function Qn(e,t){var n=e.stateNode;if(n===null)return null;var r=oo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var il=!1;if(C)try{var $n={};Object.defineProperty($n,"passive",{get:function(){il=!0}}),window.addEventListener("test",$n,$n),window.removeEventListener("test",$n,$n)}catch{il=!1}function Gc(e,t,n,r,o,l,i,d,f){var x=Array.prototype.slice.call(arguments,3);try{t.apply(n,x)}catch(T){this.onError(T)}}var qn=!1,Rr=null,Lr=!1,al=null,Bc={onError:function(e){qn=!0,Rr=e}};function Vc(e,t,n,r,o,l,i,d,f){qn=!1,Rr=null,Gc.apply(Bc,arguments)}function Hc(e,t,n,r,o,l,i,d,f){if(Vc.apply(this,arguments),qn){if(qn){var x=Rr;qn=!1,Rr=null}else throw Error(s(198));Lr||(Lr=!0,al=x)}}function tn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ka(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ca(e){if(tn(e)!==e)throw Error(s(188))}function Wc(e){var t=e.alternate;if(!t){if(t=tn(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return Ca(o),e;if(l===r)return Ca(o),t;l=l.sibling}throw Error(s(188))}if(n.return!==r.return)n=o,r=l;else{for(var i=!1,d=o.child;d;){if(d===n){i=!0,n=o,r=l;break}if(d===r){i=!0,r=o,n=l;break}d=d.sibling}if(!i){for(d=l.child;d;){if(d===n){i=!0,n=l,r=o;break}if(d===r){i=!0,r=l,n=o;break}d=d.sibling}if(!i)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function Pa(e){return e=Wc(e),e!==null?Aa(e):null}function Aa(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Aa(e);if(t!==null)return t;e=e.sibling}return null}var Ta=c.unstable_scheduleCallback,Ea=c.unstable_cancelCallback,Kc=c.unstable_shouldYield,Qc=c.unstable_requestPaint,xe=c.unstable_now,$c=c.unstable_getCurrentPriorityLevel,sl=c.unstable_ImmediatePriority,Na=c.unstable_UserBlockingPriority,_r=c.unstable_NormalPriority,qc=c.unstable_LowPriority,Ia=c.unstable_IdlePriority,Or=null,gt=null;function Xc(e){if(gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(Or,e,void 0,(e.current.flags&128)===128)}catch{}}var at=Math.clz32?Math.clz32:Yc,Zc=Math.log,Jc=Math.LN2;function Yc(e){return e>>>=0,e===0?32:31-(Zc(e)/Jc|0)|0}var Ur=64,Gr=4194304;function Xn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Br(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=n&268435455;if(i!==0){var d=i&~o;d!==0?r=Xn(d):(l&=i,l!==0&&(r=Xn(l)))}else i=n&~o,i!==0?r=Xn(i):l!==0&&(r=Xn(l));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-at(t),o=1<<n,r|=e[n],t&=~o;return r}function ed(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function td(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-at(l),d=1<<i,f=o[i];f===-1?((d&n)===0||(d&r)!==0)&&(o[i]=ed(d,t)):f<=t&&(e.expiredLanes|=d),l&=~d}}function ul(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ja(){var e=Ur;return Ur<<=1,(Ur&4194240)===0&&(Ur=64),e}function cl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Zn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-at(t),e[t]=n}function nd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-at(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function dl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-at(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var oe=0;function Ma(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ba,fl,za,Fa,Da,pl=!1,Vr=[],bt=null,zt=null,Ft=null,Jn=new Map,Yn=new Map,Dt=[],rd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ra(e,t){switch(e){case"focusin":case"focusout":bt=null;break;case"dragenter":case"dragleave":zt=null;break;case"mouseover":case"mouseout":Ft=null;break;case"pointerover":case"pointerout":Jn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yn.delete(t.pointerId)}}function er(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=hr(t),t!==null&&fl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function od(e,t,n,r,o){switch(t){case"focusin":return bt=er(bt,e,t,n,r,o),!0;case"dragenter":return zt=er(zt,e,t,n,r,o),!0;case"mouseover":return Ft=er(Ft,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return Jn.set(l,er(Jn.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,Yn.set(l,er(Yn.get(l)||null,e,t,n,r,o)),!0}return!1}function La(e){var t=nn(e.target);if(t!==null){var n=tn(t);if(n!==null){if(t=n.tag,t===13){if(t=ka(n),t!==null){e.blockedOn=t,Da(e.priority,function(){za(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ml(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);nl=r,n.target.dispatchEvent(r),nl=null}else return t=hr(n),t!==null&&fl(t),e.blockedOn=n,!1;t.shift()}return!0}function _a(e,t,n){Hr(e)&&n.delete(t)}function ld(){pl=!1,bt!==null&&Hr(bt)&&(bt=null),zt!==null&&Hr(zt)&&(zt=null),Ft!==null&&Hr(Ft)&&(Ft=null),Jn.forEach(_a),Yn.forEach(_a)}function tr(e,t){e.blockedOn===t&&(e.blockedOn=null,pl||(pl=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,ld)))}function nr(e){function t(o){return tr(o,e)}if(0<Vr.length){tr(Vr[0],e);for(var n=1;n<Vr.length;n++){var r=Vr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(bt!==null&&tr(bt,e),zt!==null&&tr(zt,e),Ft!==null&&tr(Ft,e),Jn.forEach(t),Yn.forEach(t),n=0;n<Dt.length;n++)r=Dt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Dt.length&&(n=Dt[0],n.blockedOn===null);)La(n),n.blockedOn===null&&Dt.shift()}var Sn=ae.ReactCurrentBatchConfig,Wr=!0;function id(e,t,n,r){var o=oe,l=Sn.transition;Sn.transition=null;try{oe=1,hl(e,t,n,r)}finally{oe=o,Sn.transition=l}}function ad(e,t,n,r){var o=oe,l=Sn.transition;Sn.transition=null;try{oe=4,hl(e,t,n,r)}finally{oe=o,Sn.transition=l}}function hl(e,t,n,r){if(Wr){var o=ml(e,t,n,r);if(o===null)bl(e,t,r,Kr,n),Ra(e,r);else if(od(o,e,t,n,r))r.stopPropagation();else if(Ra(e,r),t&4&&-1<rd.indexOf(e)){for(;o!==null;){var l=hr(o);if(l!==null&&ba(l),l=ml(e,t,n,r),l===null&&bl(e,t,r,Kr,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else bl(e,t,r,null,n)}}var Kr=null;function ml(e,t,n,r){if(Kr=null,e=rl(r),e=nn(e),e!==null)if(t=tn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ka(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Kr=e,null}function Oa(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($c()){case sl:return 1;case Na:return 4;case _r:case qc:return 16;case Ia:return 536870912;default:return 16}default:return 16}}var Rt=null,gl=null,Qr=null;function Ua(){if(Qr)return Qr;var e,t=gl,n=t.length,r,o="value"in Rt?Rt.value:Rt.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[l-r];r++);return Qr=o.slice(e,1<r?1-r:void 0)}function $r(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function qr(){return!0}function Ga(){return!1}function $e(e){function t(n,r,o,l,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(n=e[d],this[d]=n?n(l):l[d]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?qr:Ga,this.isPropagationStopped=Ga,this}return L(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qr)},persist:function(){},isPersistent:qr}),t}var wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yl=$e(wn),rr=L({},wn,{view:0,detail:0}),sd=$e(rr),vl,xl,or,Xr=L({},rr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==or&&(or&&e.type==="mousemove"?(vl=e.screenX-or.screenX,xl=e.screenY-or.screenY):xl=vl=0,or=e),vl)},movementY:function(e){return"movementY"in e?e.movementY:xl}}),Ba=$e(Xr),ud=L({},Xr,{dataTransfer:0}),cd=$e(ud),dd=L({},rr,{relatedTarget:0}),Sl=$e(dd),fd=L({},wn,{animationName:0,elapsedTime:0,pseudoElement:0}),pd=$e(fd),hd=L({},wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),md=$e(hd),gd=L({},wn,{data:0}),Va=$e(gd),yd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=xd[e])?!!t[e]:!1}function wl(){return Sd}var wd=L({},rr,{key:function(e){if(e.key){var t=yd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=$r(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wl,charCode:function(e){return e.type==="keypress"?$r(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$r(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kd=$e(wd),Cd=L({},Xr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ha=$e(Cd),Pd=L({},rr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wl}),Ad=$e(Pd),Td=L({},wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ed=$e(Td),Nd=L({},Xr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Id=$e(Nd),jd=[9,13,27,32],kl=C&&"CompositionEvent"in window,lr=null;C&&"documentMode"in document&&(lr=document.documentMode);var Md=C&&"TextEvent"in window&&!lr,Wa=C&&(!kl||lr&&8<lr&&11>=lr),Ka=" ",Qa=!1;function $a(e,t){switch(e){case"keyup":return jd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qa(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kn=!1;function bd(e,t){switch(e){case"compositionend":return qa(t);case"keypress":return t.which!==32?null:(Qa=!0,Ka);case"textInput":return e=t.data,e===Ka&&Qa?null:e;default:return null}}function zd(e,t){if(kn)return e==="compositionend"||!kl&&$a(e,t)?(e=Ua(),Qr=gl=Rt=null,kn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Wa&&t.locale!=="ko"?null:t.data;default:return null}}var Fd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Fd[e.type]:t==="textarea"}function Za(e,t,n,r){ya(r),t=to(t,"onChange"),0<t.length&&(n=new yl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ir=null,ar=null;function Dd(e){ms(e,0)}function Zr(e){var t=En(e);if(la(t))return e}function Rd(e,t){if(e==="change")return t}var Ja=!1;if(C){var Cl;if(C){var Pl="oninput"in document;if(!Pl){var Ya=document.createElement("div");Ya.setAttribute("oninput","return;"),Pl=typeof Ya.oninput=="function"}Cl=Pl}else Cl=!1;Ja=Cl&&(!document.documentMode||9<document.documentMode)}function es(){ir&&(ir.detachEvent("onpropertychange",ts),ar=ir=null)}function ts(e){if(e.propertyName==="value"&&Zr(ar)){var t=[];Za(t,ar,e,rl(e)),wa(Dd,t)}}function Ld(e,t,n){e==="focusin"?(es(),ir=t,ar=n,ir.attachEvent("onpropertychange",ts)):e==="focusout"&&es()}function _d(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zr(ar)}function Od(e,t){if(e==="click")return Zr(t)}function Ud(e,t){if(e==="input"||e==="change")return Zr(t)}function Gd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var st=typeof Object.is=="function"?Object.is:Gd;function sr(e,t){if(st(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!k.call(t,o)||!st(e[o],t[o]))return!1}return!0}function ns(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rs(e,t){var n=ns(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ns(n)}}function os(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?os(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ls(){for(var e=window,t=Fr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Fr(e.document)}return t}function Al(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Bd(e){var t=ls(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&os(n.ownerDocument.documentElement,n)){if(r!==null&&Al(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=rs(n,l);var i=rs(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Vd=C&&"documentMode"in document&&11>=document.documentMode,Cn=null,Tl=null,ur=null,El=!1;function is(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;El||Cn==null||Cn!==Fr(r)||(r=Cn,"selectionStart"in r&&Al(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ur&&sr(ur,r)||(ur=r,r=to(Tl,"onSelect"),0<r.length&&(t=new yl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Cn)))}function Jr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Pn={animationend:Jr("Animation","AnimationEnd"),animationiteration:Jr("Animation","AnimationIteration"),animationstart:Jr("Animation","AnimationStart"),transitionend:Jr("Transition","TransitionEnd")},Nl={},as={};C&&(as=document.createElement("div").style,"AnimationEvent"in window||(delete Pn.animationend.animation,delete Pn.animationiteration.animation,delete Pn.animationstart.animation),"TransitionEvent"in window||delete Pn.transitionend.transition);function Yr(e){if(Nl[e])return Nl[e];if(!Pn[e])return e;var t=Pn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in as)return Nl[e]=t[n];return e}var ss=Yr("animationend"),us=Yr("animationiteration"),cs=Yr("animationstart"),ds=Yr("transitionend"),fs=new Map,ps="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lt(e,t){fs.set(e,t),S(t,[e])}for(var Il=0;Il<ps.length;Il++){var jl=ps[Il],Hd=jl.toLowerCase(),Wd=jl[0].toUpperCase()+jl.slice(1);Lt(Hd,"on"+Wd)}Lt(ss,"onAnimationEnd"),Lt(us,"onAnimationIteration"),Lt(cs,"onAnimationStart"),Lt("dblclick","onDoubleClick"),Lt("focusin","onFocus"),Lt("focusout","onBlur"),Lt(ds,"onTransitionEnd"),w("onMouseEnter",["mouseout","mouseover"]),w("onMouseLeave",["mouseout","mouseover"]),w("onPointerEnter",["pointerout","pointerover"]),w("onPointerLeave",["pointerout","pointerover"]),S("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),S("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),S("onBeforeInput",["compositionend","keypress","textInput","paste"]),S("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),S("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),S("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kd=new Set("cancel close invalid load scroll toggle".split(" ").concat(cr));function hs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Hc(r,t,void 0,e),e.currentTarget=null}function ms(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var i=r.length-1;0<=i;i--){var d=r[i],f=d.instance,x=d.currentTarget;if(d=d.listener,f!==l&&o.isPropagationStopped())break e;hs(o,d,x),l=f}else for(i=0;i<r.length;i++){if(d=r[i],f=d.instance,x=d.currentTarget,d=d.listener,f!==l&&o.isPropagationStopped())break e;hs(o,d,x),l=f}}}if(Lr)throw e=al,Lr=!1,al=null,e}function ce(e,t){var n=t[_l];n===void 0&&(n=t[_l]=new Set);var r=e+"__bubble";n.has(r)||(gs(t,e,2,!1),n.add(r))}function Ml(e,t,n){var r=0;t&&(r|=4),gs(n,e,r,t)}var eo="_reactListening"+Math.random().toString(36).slice(2);function dr(e){if(!e[eo]){e[eo]=!0,p.forEach(function(n){n!=="selectionchange"&&(Kd.has(n)||Ml(n,!1,e),Ml(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[eo]||(t[eo]=!0,Ml("selectionchange",!1,t))}}function gs(e,t,n,r){switch(Oa(t)){case 1:var o=id;break;case 4:o=ad;break;default:o=hl}n=o.bind(null,t,n,e),o=void 0,!il||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function bl(e,t,n,r,o){var l=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var d=r.stateNode.containerInfo;if(d===o||d.nodeType===8&&d.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var f=i.tag;if((f===3||f===4)&&(f=i.stateNode.containerInfo,f===o||f.nodeType===8&&f.parentNode===o))return;i=i.return}for(;d!==null;){if(i=nn(d),i===null)return;if(f=i.tag,f===5||f===6){r=l=i;continue e}d=d.parentNode}}r=r.return}wa(function(){var x=l,T=rl(n),E=[];e:{var P=fs.get(e);if(P!==void 0){var F=yl,_=e;switch(e){case"keypress":if($r(n)===0)break e;case"keydown":case"keyup":F=kd;break;case"focusin":_="focus",F=Sl;break;case"focusout":_="blur",F=Sl;break;case"beforeblur":case"afterblur":F=Sl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":F=Ba;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":F=cd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":F=Ad;break;case ss:case us:case cs:F=pd;break;case ds:F=Ed;break;case"scroll":F=sd;break;case"wheel":F=Id;break;case"copy":case"cut":case"paste":F=md;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":F=Ha}var O=(t&4)!==0,Se=!O&&e==="scroll",g=O?P!==null?P+"Capture":null:P;O=[];for(var h=x,v;h!==null;){v=h;var N=v.stateNode;if(v.tag===5&&N!==null&&(v=N,g!==null&&(N=Qn(h,g),N!=null&&O.push(fr(h,N,v)))),Se)break;h=h.return}0<O.length&&(P=new F(P,_,null,n,T),E.push({event:P,listeners:O}))}}if((t&7)===0){e:{if(P=e==="mouseover"||e==="pointerover",F=e==="mouseout"||e==="pointerout",P&&n!==nl&&(_=n.relatedTarget||n.fromElement)&&(nn(_)||_[kt]))break e;if((F||P)&&(P=T.window===T?T:(P=T.ownerDocument)?P.defaultView||P.parentWindow:window,F?(_=n.relatedTarget||n.toElement,F=x,_=_?nn(_):null,_!==null&&(Se=tn(_),_!==Se||_.tag!==5&&_.tag!==6)&&(_=null)):(F=null,_=x),F!==_)){if(O=Ba,N="onMouseLeave",g="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(O=Ha,N="onPointerLeave",g="onPointerEnter",h="pointer"),Se=F==null?P:En(F),v=_==null?P:En(_),P=new O(N,h+"leave",F,n,T),P.target=Se,P.relatedTarget=v,N=null,nn(T)===x&&(O=new O(g,h+"enter",_,n,T),O.target=v,O.relatedTarget=Se,N=O),Se=N,F&&_)t:{for(O=F,g=_,h=0,v=O;v;v=An(v))h++;for(v=0,N=g;N;N=An(N))v++;for(;0<h-v;)O=An(O),h--;for(;0<v-h;)g=An(g),v--;for(;h--;){if(O===g||g!==null&&O===g.alternate)break t;O=An(O),g=An(g)}O=null}else O=null;F!==null&&ys(E,P,F,O,!1),_!==null&&Se!==null&&ys(E,Se,_,O,!0)}}e:{if(P=x?En(x):window,F=P.nodeName&&P.nodeName.toLowerCase(),F==="select"||F==="input"&&P.type==="file")var U=Rd;else if(Xa(P))if(Ja)U=Ud;else{U=_d;var B=Ld}else(F=P.nodeName)&&F.toLowerCase()==="input"&&(P.type==="checkbox"||P.type==="radio")&&(U=Od);if(U&&(U=U(e,x))){Za(E,U,n,T);break e}B&&B(e,P,x),e==="focusout"&&(B=P._wrapperState)&&B.controlled&&P.type==="number"&&Zo(P,"number",P.value)}switch(B=x?En(x):window,e){case"focusin":(Xa(B)||B.contentEditable==="true")&&(Cn=B,Tl=x,ur=null);break;case"focusout":ur=Tl=Cn=null;break;case"mousedown":El=!0;break;case"contextmenu":case"mouseup":case"dragend":El=!1,is(E,n,T);break;case"selectionchange":if(Vd)break;case"keydown":case"keyup":is(E,n,T)}var V;if(kl)e:{switch(e){case"compositionstart":var K="onCompositionStart";break e;case"compositionend":K="onCompositionEnd";break e;case"compositionupdate":K="onCompositionUpdate";break e}K=void 0}else kn?$a(e,n)&&(K="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(K="onCompositionStart");K&&(Wa&&n.locale!=="ko"&&(kn||K!=="onCompositionStart"?K==="onCompositionEnd"&&kn&&(V=Ua()):(Rt=T,gl="value"in Rt?Rt.value:Rt.textContent,kn=!0)),B=to(x,K),0<B.length&&(K=new Va(K,e,null,n,T),E.push({event:K,listeners:B}),V?K.data=V:(V=qa(n),V!==null&&(K.data=V)))),(V=Md?bd(e,n):zd(e,n))&&(x=to(x,"onBeforeInput"),0<x.length&&(T=new Va("onBeforeInput","beforeinput",null,n,T),E.push({event:T,listeners:x}),T.data=V))}ms(E,t)})}function fr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function to(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=Qn(e,n),l!=null&&r.unshift(fr(e,l,o)),l=Qn(e,t),l!=null&&r.push(fr(e,l,o))),e=e.return}return r}function An(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ys(e,t,n,r,o){for(var l=t._reactName,i=[];n!==null&&n!==r;){var d=n,f=d.alternate,x=d.stateNode;if(f!==null&&f===r)break;d.tag===5&&x!==null&&(d=x,o?(f=Qn(n,l),f!=null&&i.unshift(fr(n,f,d))):o||(f=Qn(n,l),f!=null&&i.push(fr(n,f,d)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Qd=/\r\n?/g,$d=/\u0000|\uFFFD/g;function vs(e){return(typeof e=="string"?e:""+e).replace(Qd,`
`).replace($d,"")}function no(e,t,n){if(t=vs(t),vs(e)!==t&&n)throw Error(s(425))}function ro(){}var zl=null,Fl=null;function Dl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Rl=typeof setTimeout=="function"?setTimeout:void 0,qd=typeof clearTimeout=="function"?clearTimeout:void 0,xs=typeof Promise=="function"?Promise:void 0,Xd=typeof queueMicrotask=="function"?queueMicrotask:typeof xs<"u"?function(e){return xs.resolve(null).then(e).catch(Zd)}:Rl;function Zd(e){setTimeout(function(){throw e})}function Ll(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),nr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);nr(t)}function _t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ss(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Tn=Math.random().toString(36).slice(2),yt="__reactFiber$"+Tn,pr="__reactProps$"+Tn,kt="__reactContainer$"+Tn,_l="__reactEvents$"+Tn,Jd="__reactListeners$"+Tn,Yd="__reactHandles$"+Tn;function nn(e){var t=e[yt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[kt]||n[yt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ss(e);e!==null;){if(n=e[yt])return n;e=Ss(e)}return t}e=n,n=e.parentNode}return null}function hr(e){return e=e[yt]||e[kt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function En(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(s(33))}function oo(e){return e[pr]||null}var Ol=[],Nn=-1;function Ot(e){return{current:e}}function de(e){0>Nn||(e.current=Ol[Nn],Ol[Nn]=null,Nn--)}function ue(e,t){Nn++,Ol[Nn]=e.current,e.current=t}var Ut={},Me=Ot(Ut),Ue=Ot(!1),rn=Ut;function In(e,t){var n=e.type.contextTypes;if(!n)return Ut;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ge(e){return e=e.childContextTypes,e!=null}function lo(){de(Ue),de(Me)}function ws(e,t,n){if(Me.current!==Ut)throw Error(s(168));ue(Me,t),ue(Ue,n)}function ks(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(s(108,se(e)||"Unknown",o));return L({},n,r)}function io(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ut,rn=Me.current,ue(Me,e),ue(Ue,Ue.current),!0}function Cs(e,t,n){var r=e.stateNode;if(!r)throw Error(s(169));n?(e=ks(e,t,rn),r.__reactInternalMemoizedMergedChildContext=e,de(Ue),de(Me),ue(Me,e)):de(Ue),ue(Ue,n)}var Ct=null,ao=!1,Ul=!1;function Ps(e){Ct===null?Ct=[e]:Ct.push(e)}function ef(e){ao=!0,Ps(e)}function Gt(){if(!Ul&&Ct!==null){Ul=!0;var e=0,t=oe;try{var n=Ct;for(oe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ct=null,ao=!1}catch(o){throw Ct!==null&&(Ct=Ct.slice(e+1)),Ta(sl,Gt),o}finally{oe=t,Ul=!1}}return null}var jn=[],Mn=0,so=null,uo=0,Ye=[],et=0,on=null,Pt=1,At="";function ln(e,t){jn[Mn++]=uo,jn[Mn++]=so,so=e,uo=t}function As(e,t,n){Ye[et++]=Pt,Ye[et++]=At,Ye[et++]=on,on=e;var r=Pt;e=At;var o=32-at(r)-1;r&=~(1<<o),n+=1;var l=32-at(t)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,Pt=1<<32-at(t)+o|n<<o|r,At=l+e}else Pt=1<<l|n<<o|r,At=e}function Gl(e){e.return!==null&&(ln(e,1),As(e,1,0))}function Bl(e){for(;e===so;)so=jn[--Mn],jn[Mn]=null,uo=jn[--Mn],jn[Mn]=null;for(;e===on;)on=Ye[--et],Ye[et]=null,At=Ye[--et],Ye[et]=null,Pt=Ye[--et],Ye[et]=null}var qe=null,Xe=null,he=!1,ut=null;function Ts(e,t){var n=ot(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Es(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,qe=e,Xe=_t(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,qe=e,Xe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=on!==null?{id:Pt,overflow:At}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ot(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,qe=e,Xe=null,!0):!1;default:return!1}}function Vl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Hl(e){if(he){var t=Xe;if(t){var n=t;if(!Es(e,t)){if(Vl(e))throw Error(s(418));t=_t(n.nextSibling);var r=qe;t&&Es(e,t)?Ts(r,n):(e.flags=e.flags&-4097|2,he=!1,qe=e)}}else{if(Vl(e))throw Error(s(418));e.flags=e.flags&-4097|2,he=!1,qe=e}}}function Ns(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;qe=e}function co(e){if(e!==qe)return!1;if(!he)return Ns(e),he=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Dl(e.type,e.memoizedProps)),t&&(t=Xe)){if(Vl(e))throw Is(),Error(s(418));for(;t;)Ts(e,t),t=_t(t.nextSibling)}if(Ns(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Xe=_t(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Xe=null}}else Xe=qe?_t(e.stateNode.nextSibling):null;return!0}function Is(){for(var e=Xe;e;)e=_t(e.nextSibling)}function bn(){Xe=qe=null,he=!1}function Wl(e){ut===null?ut=[e]:ut.push(e)}var tf=ae.ReactCurrentBatchConfig;function mr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(s(309));var r=n.stateNode}if(!r)throw Error(s(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var d=o.refs;i===null?delete d[l]:d[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(s(284));if(!n._owner)throw Error(s(290,e))}return e}function fo(e,t){throw e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function js(e){var t=e._init;return t(e._payload)}function Ms(e){function t(g,h){if(e){var v=g.deletions;v===null?(g.deletions=[h],g.flags|=16):v.push(h)}}function n(g,h){if(!e)return null;for(;h!==null;)t(g,h),h=h.sibling;return null}function r(g,h){for(g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function o(g,h){return g=qt(g,h),g.index=0,g.sibling=null,g}function l(g,h,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<h?(g.flags|=2,h):v):(g.flags|=2,h)):(g.flags|=1048576,h)}function i(g){return e&&g.alternate===null&&(g.flags|=2),g}function d(g,h,v,N){return h===null||h.tag!==6?(h=Ri(v,g.mode,N),h.return=g,h):(h=o(h,v),h.return=g,h)}function f(g,h,v,N){var U=v.type;return U===_e?T(g,h,v.props.children,N,v.key):h!==null&&(h.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Oe&&js(U)===h.type)?(N=o(h,v.props),N.ref=mr(g,h,v),N.return=g,N):(N=Ro(v.type,v.key,v.props,null,g.mode,N),N.ref=mr(g,h,v),N.return=g,N)}function x(g,h,v,N){return h===null||h.tag!==4||h.stateNode.containerInfo!==v.containerInfo||h.stateNode.implementation!==v.implementation?(h=Li(v,g.mode,N),h.return=g,h):(h=o(h,v.children||[]),h.return=g,h)}function T(g,h,v,N,U){return h===null||h.tag!==7?(h=hn(v,g.mode,N,U),h.return=g,h):(h=o(h,v),h.return=g,h)}function E(g,h,v){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Ri(""+h,g.mode,v),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ae:return v=Ro(h.type,h.key,h.props,null,g.mode,v),v.ref=mr(g,null,h),v.return=g,v;case De:return h=Li(h,g.mode,v),h.return=g,h;case Oe:var N=h._init;return E(g,N(h._payload),v)}if(Hn(h)||W(h))return h=hn(h,g.mode,v,null),h.return=g,h;fo(g,h)}return null}function P(g,h,v,N){var U=h!==null?h.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return U!==null?null:d(g,h,""+v,N);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ae:return v.key===U?f(g,h,v,N):null;case De:return v.key===U?x(g,h,v,N):null;case Oe:return U=v._init,P(g,h,U(v._payload),N)}if(Hn(v)||W(v))return U!==null?null:T(g,h,v,N,null);fo(g,v)}return null}function F(g,h,v,N,U){if(typeof N=="string"&&N!==""||typeof N=="number")return g=g.get(v)||null,d(h,g,""+N,U);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Ae:return g=g.get(N.key===null?v:N.key)||null,f(h,g,N,U);case De:return g=g.get(N.key===null?v:N.key)||null,x(h,g,N,U);case Oe:var B=N._init;return F(g,h,v,B(N._payload),U)}if(Hn(N)||W(N))return g=g.get(v)||null,T(h,g,N,U,null);fo(h,N)}return null}function _(g,h,v,N){for(var U=null,B=null,V=h,K=h=0,Ne=null;V!==null&&K<v.length;K++){V.index>K?(Ne=V,V=null):Ne=V.sibling;var ee=P(g,V,v[K],N);if(ee===null){V===null&&(V=Ne);break}e&&V&&ee.alternate===null&&t(g,V),h=l(ee,h,K),B===null?U=ee:B.sibling=ee,B=ee,V=Ne}if(K===v.length)return n(g,V),he&&ln(g,K),U;if(V===null){for(;K<v.length;K++)V=E(g,v[K],N),V!==null&&(h=l(V,h,K),B===null?U=V:B.sibling=V,B=V);return he&&ln(g,K),U}for(V=r(g,V);K<v.length;K++)Ne=F(V,g,K,v[K],N),Ne!==null&&(e&&Ne.alternate!==null&&V.delete(Ne.key===null?K:Ne.key),h=l(Ne,h,K),B===null?U=Ne:B.sibling=Ne,B=Ne);return e&&V.forEach(function(Xt){return t(g,Xt)}),he&&ln(g,K),U}function O(g,h,v,N){var U=W(v);if(typeof U!="function")throw Error(s(150));if(v=U.call(v),v==null)throw Error(s(151));for(var B=U=null,V=h,K=h=0,Ne=null,ee=v.next();V!==null&&!ee.done;K++,ee=v.next()){V.index>K?(Ne=V,V=null):Ne=V.sibling;var Xt=P(g,V,ee.value,N);if(Xt===null){V===null&&(V=Ne);break}e&&V&&Xt.alternate===null&&t(g,V),h=l(Xt,h,K),B===null?U=Xt:B.sibling=Xt,B=Xt,V=Ne}if(ee.done)return n(g,V),he&&ln(g,K),U;if(V===null){for(;!ee.done;K++,ee=v.next())ee=E(g,ee.value,N),ee!==null&&(h=l(ee,h,K),B===null?U=ee:B.sibling=ee,B=ee);return he&&ln(g,K),U}for(V=r(g,V);!ee.done;K++,ee=v.next())ee=F(V,g,K,ee.value,N),ee!==null&&(e&&ee.alternate!==null&&V.delete(ee.key===null?K:ee.key),h=l(ee,h,K),B===null?U=ee:B.sibling=ee,B=ee);return e&&V.forEach(function(Df){return t(g,Df)}),he&&ln(g,K),U}function Se(g,h,v,N){if(typeof v=="object"&&v!==null&&v.type===_e&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ae:e:{for(var U=v.key,B=h;B!==null;){if(B.key===U){if(U=v.type,U===_e){if(B.tag===7){n(g,B.sibling),h=o(B,v.props.children),h.return=g,g=h;break e}}else if(B.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Oe&&js(U)===B.type){n(g,B.sibling),h=o(B,v.props),h.ref=mr(g,B,v),h.return=g,g=h;break e}n(g,B);break}else t(g,B);B=B.sibling}v.type===_e?(h=hn(v.props.children,g.mode,N,v.key),h.return=g,g=h):(N=Ro(v.type,v.key,v.props,null,g.mode,N),N.ref=mr(g,h,v),N.return=g,g=N)}return i(g);case De:e:{for(B=v.key;h!==null;){if(h.key===B)if(h.tag===4&&h.stateNode.containerInfo===v.containerInfo&&h.stateNode.implementation===v.implementation){n(g,h.sibling),h=o(h,v.children||[]),h.return=g,g=h;break e}else{n(g,h);break}else t(g,h);h=h.sibling}h=Li(v,g.mode,N),h.return=g,g=h}return i(g);case Oe:return B=v._init,Se(g,h,B(v._payload),N)}if(Hn(v))return _(g,h,v,N);if(W(v))return O(g,h,v,N);fo(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,h!==null&&h.tag===6?(n(g,h.sibling),h=o(h,v),h.return=g,g=h):(n(g,h),h=Ri(v,g.mode,N),h.return=g,g=h),i(g)):n(g,h)}return Se}var zn=Ms(!0),bs=Ms(!1),po=Ot(null),ho=null,Fn=null,Kl=null;function Ql(){Kl=Fn=ho=null}function $l(e){var t=po.current;de(po),e._currentValue=t}function ql(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Dn(e,t){ho=e,Kl=Fn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Be=!0),e.firstContext=null)}function tt(e){var t=e._currentValue;if(Kl!==e)if(e={context:e,memoizedValue:t,next:null},Fn===null){if(ho===null)throw Error(s(308));Fn=e,ho.dependencies={lanes:0,firstContext:e}}else Fn=Fn.next=e;return t}var an=null;function Xl(e){an===null?an=[e]:an.push(e)}function zs(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Xl(t)):(n.next=o.next,o.next=n),t.interleaved=n,Tt(e,r)}function Tt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Bt=!1;function Zl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Et(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Vt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Z&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Tt(e,n)}return o=r.interleaved,o===null?(t.next=t,Xl(r)):(t.next=o.next,o.next=t),r.interleaved=t,Tt(e,n)}function mo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,dl(e,n)}}function Ds(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function go(e,t,n,r){var o=e.updateQueue;Bt=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,d=o.shared.pending;if(d!==null){o.shared.pending=null;var f=d,x=f.next;f.next=null,i===null?l=x:i.next=x,i=f;var T=e.alternate;T!==null&&(T=T.updateQueue,d=T.lastBaseUpdate,d!==i&&(d===null?T.firstBaseUpdate=x:d.next=x,T.lastBaseUpdate=f))}if(l!==null){var E=o.baseState;i=0,T=x=f=null,d=l;do{var P=d.lane,F=d.eventTime;if((r&P)===P){T!==null&&(T=T.next={eventTime:F,lane:0,tag:d.tag,payload:d.payload,callback:d.callback,next:null});e:{var _=e,O=d;switch(P=t,F=n,O.tag){case 1:if(_=O.payload,typeof _=="function"){E=_.call(F,E,P);break e}E=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=O.payload,P=typeof _=="function"?_.call(F,E,P):_,P==null)break e;E=L({},E,P);break e;case 2:Bt=!0}}d.callback!==null&&d.lane!==0&&(e.flags|=64,P=o.effects,P===null?o.effects=[d]:P.push(d))}else F={eventTime:F,lane:P,tag:d.tag,payload:d.payload,callback:d.callback,next:null},T===null?(x=T=F,f=E):T=T.next=F,i|=P;if(d=d.next,d===null){if(d=o.shared.pending,d===null)break;P=d,d=P.next,P.next=null,o.lastBaseUpdate=P,o.shared.pending=null}}while(!0);if(T===null&&(f=E),o.baseState=f,o.firstBaseUpdate=x,o.lastBaseUpdate=T,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);cn|=i,e.lanes=i,e.memoizedState=E}}function Rs(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(s(191,o));o.call(r)}}}var gr={},vt=Ot(gr),yr=Ot(gr),vr=Ot(gr);function sn(e){if(e===gr)throw Error(s(174));return e}function Jl(e,t){switch(ue(vr,t),ue(yr,e),ue(vt,gr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Yo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Yo(t,e)}de(vt),ue(vt,t)}function Rn(){de(vt),de(yr),de(vr)}function Ls(e){sn(vr.current);var t=sn(vt.current),n=Yo(t,e.type);t!==n&&(ue(yr,e),ue(vt,n))}function Yl(e){yr.current===e&&(de(vt),de(yr))}var me=Ot(0);function yo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ei=[];function ti(){for(var e=0;e<ei.length;e++)ei[e]._workInProgressVersionPrimary=null;ei.length=0}var vo=ae.ReactCurrentDispatcher,ni=ae.ReactCurrentBatchConfig,un=0,ge=null,Ce=null,Te=null,xo=!1,xr=!1,Sr=0,nf=0;function be(){throw Error(s(321))}function ri(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!st(e[n],t[n]))return!1;return!0}function oi(e,t,n,r,o,l){if(un=l,ge=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,vo.current=e===null||e.memoizedState===null?af:sf,e=n(r,o),xr){l=0;do{if(xr=!1,Sr=0,25<=l)throw Error(s(301));l+=1,Te=Ce=null,t.updateQueue=null,vo.current=uf,e=n(r,o)}while(xr)}if(vo.current=ko,t=Ce!==null&&Ce.next!==null,un=0,Te=Ce=ge=null,xo=!1,t)throw Error(s(300));return e}function li(){var e=Sr!==0;return Sr=0,e}function xt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Te===null?ge.memoizedState=Te=e:Te=Te.next=e,Te}function nt(){if(Ce===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=Ce.next;var t=Te===null?ge.memoizedState:Te.next;if(t!==null)Te=t,Ce=e;else{if(e===null)throw Error(s(310));Ce=e,e={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},Te===null?ge.memoizedState=Te=e:Te=Te.next=e}return Te}function wr(e,t){return typeof t=="function"?t(e):t}function ii(e){var t=nt(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=Ce,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var d=i=null,f=null,x=l;do{var T=x.lane;if((un&T)===T)f!==null&&(f=f.next={lane:0,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null}),r=x.hasEagerState?x.eagerState:e(r,x.action);else{var E={lane:T,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null};f===null?(d=f=E,i=r):f=f.next=E,ge.lanes|=T,cn|=T}x=x.next}while(x!==null&&x!==l);f===null?i=r:f.next=d,st(r,t.memoizedState)||(Be=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=f,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,ge.lanes|=l,cn|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ai(e){var t=nt(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);st(l,t.memoizedState)||(Be=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function _s(){}function Os(e,t){var n=ge,r=nt(),o=t(),l=!st(r.memoizedState,o);if(l&&(r.memoizedState=o,Be=!0),r=r.queue,si(Bs.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||Te!==null&&Te.memoizedState.tag&1){if(n.flags|=2048,kr(9,Gs.bind(null,n,r,o,t),void 0,null),Ee===null)throw Error(s(349));(un&30)!==0||Us(n,t,o)}return o}function Us(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ge.updateQueue,t===null?(t={lastEffect:null,stores:null},ge.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Gs(e,t,n,r){t.value=n,t.getSnapshot=r,Vs(t)&&Hs(e)}function Bs(e,t,n){return n(function(){Vs(t)&&Hs(e)})}function Vs(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!st(e,n)}catch{return!0}}function Hs(e){var t=Tt(e,1);t!==null&&pt(t,e,1,-1)}function Ws(e){var t=xt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wr,lastRenderedState:e},t.queue=e,e=e.dispatch=lf.bind(null,ge,e),[t.memoizedState,e]}function kr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ge.updateQueue,t===null?(t={lastEffect:null,stores:null},ge.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ks(){return nt().memoizedState}function So(e,t,n,r){var o=xt();ge.flags|=e,o.memoizedState=kr(1|t,n,void 0,r===void 0?null:r)}function wo(e,t,n,r){var o=nt();r=r===void 0?null:r;var l=void 0;if(Ce!==null){var i=Ce.memoizedState;if(l=i.destroy,r!==null&&ri(r,i.deps)){o.memoizedState=kr(t,n,l,r);return}}ge.flags|=e,o.memoizedState=kr(1|t,n,l,r)}function Qs(e,t){return So(8390656,8,e,t)}function si(e,t){return wo(2048,8,e,t)}function $s(e,t){return wo(4,2,e,t)}function qs(e,t){return wo(4,4,e,t)}function Xs(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Zs(e,t,n){return n=n!=null?n.concat([e]):null,wo(4,4,Xs.bind(null,t,e),n)}function ui(){}function Js(e,t){var n=nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ri(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ys(e,t){var n=nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ri(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function eu(e,t,n){return(un&21)===0?(e.baseState&&(e.baseState=!1,Be=!0),e.memoizedState=n):(st(n,t)||(n=ja(),ge.lanes|=n,cn|=n,e.baseState=!0),t)}function rf(e,t){var n=oe;oe=n!==0&&4>n?n:4,e(!0);var r=ni.transition;ni.transition={};try{e(!1),t()}finally{oe=n,ni.transition=r}}function tu(){return nt().memoizedState}function of(e,t,n){var r=Qt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},nu(e))ru(t,n);else if(n=zs(e,t,n,r),n!==null){var o=Le();pt(n,e,r,o),ou(n,t,r)}}function lf(e,t,n){var r=Qt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(nu(e))ru(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,d=l(i,n);if(o.hasEagerState=!0,o.eagerState=d,st(d,i)){var f=t.interleaved;f===null?(o.next=o,Xl(t)):(o.next=f.next,f.next=o),t.interleaved=o;return}}catch{}n=zs(e,t,o,r),n!==null&&(o=Le(),pt(n,e,r,o),ou(n,t,r))}}function nu(e){var t=e.alternate;return e===ge||t!==null&&t===ge}function ru(e,t){xr=xo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ou(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,dl(e,n)}}var ko={readContext:tt,useCallback:be,useContext:be,useEffect:be,useImperativeHandle:be,useInsertionEffect:be,useLayoutEffect:be,useMemo:be,useReducer:be,useRef:be,useState:be,useDebugValue:be,useDeferredValue:be,useTransition:be,useMutableSource:be,useSyncExternalStore:be,useId:be,unstable_isNewReconciler:!1},af={readContext:tt,useCallback:function(e,t){return xt().memoizedState=[e,t===void 0?null:t],e},useContext:tt,useEffect:Qs,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,So(4194308,4,Xs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return So(4194308,4,e,t)},useInsertionEffect:function(e,t){return So(4,2,e,t)},useMemo:function(e,t){var n=xt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=xt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=of.bind(null,ge,e),[r.memoizedState,e]},useRef:function(e){var t=xt();return e={current:e},t.memoizedState=e},useState:Ws,useDebugValue:ui,useDeferredValue:function(e){return xt().memoizedState=e},useTransition:function(){var e=Ws(!1),t=e[0];return e=rf.bind(null,e[1]),xt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ge,o=xt();if(he){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),Ee===null)throw Error(s(349));(un&30)!==0||Us(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,Qs(Bs.bind(null,r,l,e),[e]),r.flags|=2048,kr(9,Gs.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=xt(),t=Ee.identifierPrefix;if(he){var n=At,r=Pt;n=(r&~(1<<32-at(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Sr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=nf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},sf={readContext:tt,useCallback:Js,useContext:tt,useEffect:si,useImperativeHandle:Zs,useInsertionEffect:$s,useLayoutEffect:qs,useMemo:Ys,useReducer:ii,useRef:Ks,useState:function(){return ii(wr)},useDebugValue:ui,useDeferredValue:function(e){var t=nt();return eu(t,Ce.memoizedState,e)},useTransition:function(){var e=ii(wr)[0],t=nt().memoizedState;return[e,t]},useMutableSource:_s,useSyncExternalStore:Os,useId:tu,unstable_isNewReconciler:!1},uf={readContext:tt,useCallback:Js,useContext:tt,useEffect:si,useImperativeHandle:Zs,useInsertionEffect:$s,useLayoutEffect:qs,useMemo:Ys,useReducer:ai,useRef:Ks,useState:function(){return ai(wr)},useDebugValue:ui,useDeferredValue:function(e){var t=nt();return Ce===null?t.memoizedState=e:eu(t,Ce.memoizedState,e)},useTransition:function(){var e=ai(wr)[0],t=nt().memoizedState;return[e,t]},useMutableSource:_s,useSyncExternalStore:Os,useId:tu,unstable_isNewReconciler:!1};function ct(e,t){if(e&&e.defaultProps){t=L({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ci(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:L({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Co={isMounted:function(e){return(e=e._reactInternals)?tn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Le(),o=Qt(e),l=Et(r,o);l.payload=t,n!=null&&(l.callback=n),t=Vt(e,l,o),t!==null&&(pt(t,e,o,r),mo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Le(),o=Qt(e),l=Et(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Vt(e,l,o),t!==null&&(pt(t,e,o,r),mo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Le(),r=Qt(e),o=Et(n,r);o.tag=2,t!=null&&(o.callback=t),t=Vt(e,o,r),t!==null&&(pt(t,e,r,n),mo(t,e,r))}};function lu(e,t,n,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):t.prototype&&t.prototype.isPureReactComponent?!sr(n,r)||!sr(o,l):!0}function iu(e,t,n){var r=!1,o=Ut,l=t.contextType;return typeof l=="object"&&l!==null?l=tt(l):(o=Ge(t)?rn:Me.current,r=t.contextTypes,l=(r=r!=null)?In(e,o):Ut),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Co,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function au(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Co.enqueueReplaceState(t,t.state,null)}function di(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Zl(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=tt(l):(l=Ge(t)?rn:Me.current,o.context=In(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(ci(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Co.enqueueReplaceState(o,o.state,null),go(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Ln(e,t){try{var n="",r=t;do n+=J(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function fi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function pi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var cf=typeof WeakMap=="function"?WeakMap:Map;function su(e,t,n){n=Et(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){jo||(jo=!0,Ni=r),pi(e,t)},n}function uu(e,t,n){n=Et(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){pi(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){pi(e,t),typeof r!="function"&&(Wt===null?Wt=new Set([this]):Wt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function cu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new cf;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Pf.bind(null,e,t,n),t.then(e,e))}function du(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function fu(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Et(-1,1),t.tag=2,Vt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var df=ae.ReactCurrentOwner,Be=!1;function Re(e,t,n,r){t.child=e===null?bs(t,null,n,r):zn(t,e.child,n,r)}function pu(e,t,n,r,o){n=n.render;var l=t.ref;return Dn(t,o),r=oi(e,t,n,r,l,o),n=li(),e!==null&&!Be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Nt(e,t,o)):(he&&n&&Gl(t),t.flags|=1,Re(e,t,r,o),t.child)}function hu(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!Di(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,mu(e,t,l,r,o)):(e=Ro(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,(e.lanes&o)===0){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:sr,n(i,r)&&e.ref===t.ref)return Nt(e,t,o)}return t.flags|=1,e=qt(l,r),e.ref=t.ref,e.return=t,t.child=e}function mu(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(sr(l,r)&&e.ref===t.ref)if(Be=!1,t.pendingProps=r=l,(e.lanes&o)!==0)(e.flags&131072)!==0&&(Be=!0);else return t.lanes=e.lanes,Nt(e,t,o)}return hi(e,t,n,r,o)}function gu(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ue(On,Ze),Ze|=n;else{if((n&1073741824)===0)return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ue(On,Ze),Ze|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,ue(On,Ze),Ze|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,ue(On,Ze),Ze|=r;return Re(e,t,o,n),t.child}function yu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function hi(e,t,n,r,o){var l=Ge(n)?rn:Me.current;return l=In(t,l),Dn(t,o),n=oi(e,t,n,r,l,o),r=li(),e!==null&&!Be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Nt(e,t,o)):(he&&r&&Gl(t),t.flags|=1,Re(e,t,n,o),t.child)}function vu(e,t,n,r,o){if(Ge(n)){var l=!0;io(t)}else l=!1;if(Dn(t,o),t.stateNode===null)Ao(e,t),iu(t,n,r),di(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,d=t.memoizedProps;i.props=d;var f=i.context,x=n.contextType;typeof x=="object"&&x!==null?x=tt(x):(x=Ge(n)?rn:Me.current,x=In(t,x));var T=n.getDerivedStateFromProps,E=typeof T=="function"||typeof i.getSnapshotBeforeUpdate=="function";E||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(d!==r||f!==x)&&au(t,i,r,x),Bt=!1;var P=t.memoizedState;i.state=P,go(t,r,i,o),f=t.memoizedState,d!==r||P!==f||Ue.current||Bt?(typeof T=="function"&&(ci(t,n,T,r),f=t.memoizedState),(d=Bt||lu(t,n,d,r,P,f,x))?(E||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=f),i.props=r,i.state=f,i.context=x,r=d):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Fs(e,t),d=t.memoizedProps,x=t.type===t.elementType?d:ct(t.type,d),i.props=x,E=t.pendingProps,P=i.context,f=n.contextType,typeof f=="object"&&f!==null?f=tt(f):(f=Ge(n)?rn:Me.current,f=In(t,f));var F=n.getDerivedStateFromProps;(T=typeof F=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(d!==E||P!==f)&&au(t,i,r,f),Bt=!1,P=t.memoizedState,i.state=P,go(t,r,i,o);var _=t.memoizedState;d!==E||P!==_||Ue.current||Bt?(typeof F=="function"&&(ci(t,n,F,r),_=t.memoizedState),(x=Bt||lu(t,n,x,r,P,_,f)||!1)?(T||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,_,f),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,_,f)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||d===e.memoizedProps&&P===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&P===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=_),i.props=r,i.state=_,i.context=f,r=x):(typeof i.componentDidUpdate!="function"||d===e.memoizedProps&&P===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&P===e.memoizedState||(t.flags|=1024),r=!1)}return mi(e,t,n,r,l,o)}function mi(e,t,n,r,o,l){yu(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&Cs(t,n,!1),Nt(e,t,l);r=t.stateNode,df.current=t;var d=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=zn(t,e.child,null,l),t.child=zn(t,null,d,l)):Re(e,t,d,l),t.memoizedState=r.state,o&&Cs(t,n,!0),t.child}function xu(e){var t=e.stateNode;t.pendingContext?ws(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ws(e,t.context,!1),Jl(e,t.containerInfo)}function Su(e,t,n,r,o){return bn(),Wl(o),t.flags|=256,Re(e,t,n,r),t.child}var gi={dehydrated:null,treeContext:null,retryLane:0};function yi(e){return{baseLanes:e,cachePool:null,transitions:null}}function wu(e,t,n){var r=t.pendingProps,o=me.current,l=!1,i=(t.flags&128)!==0,d;if((d=i)||(d=e!==null&&e.memoizedState===null?!1:(o&2)!==0),d?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ue(me,o&1),e===null)return Hl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(i=r.children,e=r.fallback,l?(r=t.mode,l=t.child,i={mode:"hidden",children:i},(r&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=i):l=Lo(i,r,0,null),e=hn(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=yi(n),t.memoizedState=gi,e):vi(t,i));if(o=e.memoizedState,o!==null&&(d=o.dehydrated,d!==null))return ff(e,t,i,r,d,o,n);if(l){l=r.fallback,i=t.mode,o=e.child,d=o.sibling;var f={mode:"hidden",children:r.children};return(i&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=f,t.deletions=null):(r=qt(o,f),r.subtreeFlags=o.subtreeFlags&14680064),d!==null?l=qt(d,l):(l=hn(l,i,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,i=e.child.memoizedState,i=i===null?yi(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~n,t.memoizedState=gi,r}return l=e.child,e=l.sibling,r=qt(l,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function vi(e,t){return t=Lo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Po(e,t,n,r){return r!==null&&Wl(r),zn(t,e.child,null,n),e=vi(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ff(e,t,n,r,o,l,i){if(n)return t.flags&256?(t.flags&=-257,r=fi(Error(s(422))),Po(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=Lo({mode:"visible",children:r.children},o,0,null),l=hn(l,o,i,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,(t.mode&1)!==0&&zn(t,e.child,null,i),t.child.memoizedState=yi(i),t.memoizedState=gi,l);if((t.mode&1)===0)return Po(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var d=r.dgst;return r=d,l=Error(s(419)),r=fi(l,r,void 0),Po(e,t,i,r)}if(d=(i&e.childLanes)!==0,Be||d){if(r=Ee,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|i))!==0?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,Tt(e,o),pt(r,e,o,-1))}return Fi(),r=fi(Error(s(421))),Po(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Af.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,Xe=_t(o.nextSibling),qe=t,he=!0,ut=null,e!==null&&(Ye[et++]=Pt,Ye[et++]=At,Ye[et++]=on,Pt=e.id,At=e.overflow,on=t),t=vi(t,r.children),t.flags|=4096,t)}function ku(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ql(e.return,t,n)}function xi(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function Cu(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(Re(e,t,r.children,n),r=me.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ku(e,n,t);else if(e.tag===19)ku(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ue(me,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&yo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),xi(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&yo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}xi(t,!0,n,null,l);break;case"together":xi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ao(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Nt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),cn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=qt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=qt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function pf(e,t,n){switch(t.tag){case 3:xu(t),bn();break;case 5:Ls(t);break;case 1:Ge(t.type)&&io(t);break;case 4:Jl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;ue(po,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ue(me,me.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?wu(e,t,n):(ue(me,me.current&1),e=Nt(e,t,n),e!==null?e.sibling:null);ue(me,me.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Cu(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ue(me,me.current),r)break;return null;case 22:case 23:return t.lanes=0,gu(e,t,n)}return Nt(e,t,n)}var Pu,Si,Au,Tu;Pu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Si=function(){},Au=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,sn(vt.current);var l=null;switch(n){case"input":o=qo(e,o),r=qo(e,r),l=[];break;case"select":o=L({},o,{value:void 0}),r=L({},r,{value:void 0}),l=[];break;case"textarea":o=Jo(e,o),r=Jo(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ro)}el(n,r);var i;n=null;for(x in o)if(!r.hasOwnProperty(x)&&o.hasOwnProperty(x)&&o[x]!=null)if(x==="style"){var d=o[x];for(i in d)d.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else x!=="dangerouslySetInnerHTML"&&x!=="children"&&x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(y.hasOwnProperty(x)?l||(l=[]):(l=l||[]).push(x,null));for(x in r){var f=r[x];if(d=o?.[x],r.hasOwnProperty(x)&&f!==d&&(f!=null||d!=null))if(x==="style")if(d){for(i in d)!d.hasOwnProperty(i)||f&&f.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in f)f.hasOwnProperty(i)&&d[i]!==f[i]&&(n||(n={}),n[i]=f[i])}else n||(l||(l=[]),l.push(x,n)),n=f;else x==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,d=d?d.__html:void 0,f!=null&&d!==f&&(l=l||[]).push(x,f)):x==="children"?typeof f!="string"&&typeof f!="number"||(l=l||[]).push(x,""+f):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&(y.hasOwnProperty(x)?(f!=null&&x==="onScroll"&&ce("scroll",e),l||d===f||(l=[])):(l=l||[]).push(x,f))}n&&(l=l||[]).push("style",n);var x=l;(t.updateQueue=x)&&(t.flags|=4)}},Tu=function(e,t,n,r){n!==r&&(t.flags|=4)};function Cr(e,t){if(!he)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function hf(e,t,n){var r=t.pendingProps;switch(Bl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return Ge(t.type)&&lo(),ze(t),null;case 3:return r=t.stateNode,Rn(),de(Ue),de(Me),ti(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(co(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ut!==null&&(Mi(ut),ut=null))),Si(e,t),ze(t),null;case 5:Yl(t);var o=sn(vr.current);if(n=t.type,e!==null&&t.stateNode!=null)Au(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(s(166));return ze(t),null}if(e=sn(vt.current),co(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[yt]=t,r[pr]=l,e=(t.mode&1)!==0,n){case"dialog":ce("cancel",r),ce("close",r);break;case"iframe":case"object":case"embed":ce("load",r);break;case"video":case"audio":for(o=0;o<cr.length;o++)ce(cr[o],r);break;case"source":ce("error",r);break;case"img":case"image":case"link":ce("error",r),ce("load",r);break;case"details":ce("toggle",r);break;case"input":ia(r,l),ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},ce("invalid",r);break;case"textarea":ua(r,l),ce("invalid",r)}el(n,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var d=l[i];i==="children"?typeof d=="string"?r.textContent!==d&&(l.suppressHydrationWarning!==!0&&no(r.textContent,d,e),o=["children",d]):typeof d=="number"&&r.textContent!==""+d&&(l.suppressHydrationWarning!==!0&&no(r.textContent,d,e),o=["children",""+d]):y.hasOwnProperty(i)&&d!=null&&i==="onScroll"&&ce("scroll",r)}switch(n){case"input":zr(r),sa(r,l,!0);break;case"textarea":zr(r),da(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=ro)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fa(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[yt]=t,e[pr]=r,Pu(e,t,!1,!1),t.stateNode=e;e:{switch(i=tl(n,r),n){case"dialog":ce("cancel",e),ce("close",e),o=r;break;case"iframe":case"object":case"embed":ce("load",e),o=r;break;case"video":case"audio":for(o=0;o<cr.length;o++)ce(cr[o],e);o=r;break;case"source":ce("error",e),o=r;break;case"img":case"image":case"link":ce("error",e),ce("load",e),o=r;break;case"details":ce("toggle",e),o=r;break;case"input":ia(e,r),o=qo(e,r),ce("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=L({},r,{value:void 0}),ce("invalid",e);break;case"textarea":ua(e,r),o=Jo(e,r),ce("invalid",e);break;default:o=r}el(n,o),d=o;for(l in d)if(d.hasOwnProperty(l)){var f=d[l];l==="style"?ma(e,f):l==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,f!=null&&pa(e,f)):l==="children"?typeof f=="string"?(n!=="textarea"||f!=="")&&Wn(e,f):typeof f=="number"&&Wn(e,""+f):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(y.hasOwnProperty(l)?f!=null&&l==="onScroll"&&ce("scroll",e):f!=null&&ne(e,l,f,i))}switch(n){case"input":zr(e),sa(e,r,!1);break;case"textarea":zr(e),da(e);break;case"option":r.value!=null&&e.setAttribute("value",""+re(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?yn(e,!!r.multiple,l,!1):r.defaultValue!=null&&yn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ro)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ze(t),null;case 6:if(e&&t.stateNode!=null)Tu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(s(166));if(n=sn(vr.current),sn(vt.current),co(t)){if(r=t.stateNode,n=t.memoizedProps,r[yt]=t,(l=r.nodeValue!==n)&&(e=qe,e!==null))switch(e.tag){case 3:no(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&no(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[yt]=t,t.stateNode=r}return ze(t),null;case 13:if(de(me),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(he&&Xe!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Is(),bn(),t.flags|=98560,l=!1;else if(l=co(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(s(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[yt]=t}else bn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),l=!1}else ut!==null&&(Mi(ut),ut=null),l=!0;if(!l)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(me.current&1)!==0?Pe===0&&(Pe=3):Fi())),t.updateQueue!==null&&(t.flags|=4),ze(t),null);case 4:return Rn(),Si(e,t),e===null&&dr(t.stateNode.containerInfo),ze(t),null;case 10:return $l(t.type._context),ze(t),null;case 17:return Ge(t.type)&&lo(),ze(t),null;case 19:if(de(me),l=t.memoizedState,l===null)return ze(t),null;if(r=(t.flags&128)!==0,i=l.rendering,i===null)if(r)Cr(l,!1);else{if(Pe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=yo(e),i!==null){for(t.flags|=128,Cr(l,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ue(me,me.current&1|2),t.child}e=e.sibling}l.tail!==null&&xe()>Un&&(t.flags|=128,r=!0,Cr(l,!1),t.lanes=4194304)}else{if(!r)if(e=yo(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Cr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!he)return ze(t),null}else 2*xe()-l.renderingStartTime>Un&&n!==1073741824&&(t.flags|=128,r=!0,Cr(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=xe(),t.sibling=null,n=me.current,ue(me,r?n&1|2:n&1),t):(ze(t),null);case 22:case 23:return zi(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Ze&1073741824)!==0&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),null;case 24:return null;case 25:return null}throw Error(s(156,t.tag))}function mf(e,t){switch(Bl(t),t.tag){case 1:return Ge(t.type)&&lo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Rn(),de(Ue),de(Me),ti(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Yl(t),null;case 13:if(de(me),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));bn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return de(me),null;case 4:return Rn(),null;case 10:return $l(t.type._context),null;case 22:case 23:return zi(),null;case 24:return null;default:return null}}var To=!1,Fe=!1,gf=typeof WeakSet=="function"?WeakSet:Set,R=null;function _n(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ve(e,t,r)}else n.current=null}function wi(e,t,n){try{n()}catch(r){ve(e,t,r)}}var Eu=!1;function yf(e,t){if(zl=Wr,e=ls(),Al(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var i=0,d=-1,f=-1,x=0,T=0,E=e,P=null;t:for(;;){for(var F;E!==n||o!==0&&E.nodeType!==3||(d=i+o),E!==l||r!==0&&E.nodeType!==3||(f=i+r),E.nodeType===3&&(i+=E.nodeValue.length),(F=E.firstChild)!==null;)P=E,E=F;for(;;){if(E===e)break t;if(P===n&&++x===o&&(d=i),P===l&&++T===r&&(f=i),(F=E.nextSibling)!==null)break;E=P,P=E.parentNode}E=F}n=d===-1||f===-1?null:{start:d,end:f}}else n=null}n=n||{start:0,end:0}}else n=null;for(Fl={focusedElem:e,selectionRange:n},Wr=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var _=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var O=_.memoizedProps,Se=_.memoizedState,g=t.stateNode,h=g.getSnapshotBeforeUpdate(t.elementType===t.type?O:ct(t.type,O),Se);g.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch(N){ve(t,t.return,N)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return _=Eu,Eu=!1,_}function Pr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&wi(t,n,l)}o=o.next}while(o!==r)}}function Eo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ki(e){var t=e.ref;if(t!==null){var n=e.stateNode;e.tag,e=n,typeof t=="function"?t(e):t.current=e}}function Nu(e){var t=e.alternate;t!==null&&(e.alternate=null,Nu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[yt],delete t[pr],delete t[_l],delete t[Jd],delete t[Yd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Iu(e){return e.tag===5||e.tag===3||e.tag===4}function ju(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Iu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ci(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ro));else if(r!==4&&(e=e.child,e!==null))for(Ci(e,t,n),e=e.sibling;e!==null;)Ci(e,t,n),e=e.sibling}function Pi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Pi(e,t,n),e=e.sibling;e!==null;)Pi(e,t,n),e=e.sibling}var Ie=null,dt=!1;function Ht(e,t,n){for(n=n.child;n!==null;)Mu(e,t,n),n=n.sibling}function Mu(e,t,n){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(Or,n)}catch{}switch(n.tag){case 5:Fe||_n(n,t);case 6:var r=Ie,o=dt;Ie=null,Ht(e,t,n),Ie=r,dt=o,Ie!==null&&(dt?(e=Ie,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ie.removeChild(n.stateNode));break;case 18:Ie!==null&&(dt?(e=Ie,n=n.stateNode,e.nodeType===8?Ll(e.parentNode,n):e.nodeType===1&&Ll(e,n),nr(e)):Ll(Ie,n.stateNode));break;case 4:r=Ie,o=dt,Ie=n.stateNode.containerInfo,dt=!0,Ht(e,t,n),Ie=r,dt=o;break;case 0:case 11:case 14:case 15:if(!Fe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&((l&2)!==0||(l&4)!==0)&&wi(n,t,i),o=o.next}while(o!==r)}Ht(e,t,n);break;case 1:if(!Fe&&(_n(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(d){ve(n,t,d)}Ht(e,t,n);break;case 21:Ht(e,t,n);break;case 22:n.mode&1?(Fe=(r=Fe)||n.memoizedState!==null,Ht(e,t,n),Fe=r):Ht(e,t,n);break;default:Ht(e,t,n)}}function bu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new gf),t.forEach(function(r){var o=Tf.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function ft(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,i=t,d=i;e:for(;d!==null;){switch(d.tag){case 5:Ie=d.stateNode,dt=!1;break e;case 3:Ie=d.stateNode.containerInfo,dt=!0;break e;case 4:Ie=d.stateNode.containerInfo,dt=!0;break e}d=d.return}if(Ie===null)throw Error(s(160));Mu(l,i,o),Ie=null,dt=!1;var f=o.alternate;f!==null&&(f.return=null),o.return=null}catch(x){ve(o,t,x)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)zu(t,e),t=t.sibling}function zu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ft(t,e),St(e),r&4){try{Pr(3,e,e.return),Eo(3,e)}catch(O){ve(e,e.return,O)}try{Pr(5,e,e.return)}catch(O){ve(e,e.return,O)}}break;case 1:ft(t,e),St(e),r&512&&n!==null&&_n(n,n.return);break;case 5:if(ft(t,e),St(e),r&512&&n!==null&&_n(n,n.return),e.flags&32){var o=e.stateNode;try{Wn(o,"")}catch(O){ve(e,e.return,O)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=n!==null?n.memoizedProps:l,d=e.type,f=e.updateQueue;if(e.updateQueue=null,f!==null)try{d==="input"&&l.type==="radio"&&l.name!=null&&aa(o,l),tl(d,i);var x=tl(d,l);for(i=0;i<f.length;i+=2){var T=f[i],E=f[i+1];T==="style"?ma(o,E):T==="dangerouslySetInnerHTML"?pa(o,E):T==="children"?Wn(o,E):ne(o,T,E,x)}switch(d){case"input":Xo(o,l);break;case"textarea":ca(o,l);break;case"select":var P=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var F=l.value;F!=null?yn(o,!!l.multiple,F,!1):P!==!!l.multiple&&(l.defaultValue!=null?yn(o,!!l.multiple,l.defaultValue,!0):yn(o,!!l.multiple,l.multiple?[]:"",!1))}o[pr]=l}catch(O){ve(e,e.return,O)}}break;case 6:if(ft(t,e),St(e),r&4){if(e.stateNode===null)throw Error(s(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(O){ve(e,e.return,O)}}break;case 3:if(ft(t,e),St(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{nr(t.containerInfo)}catch(O){ve(e,e.return,O)}break;case 4:ft(t,e),St(e);break;case 13:ft(t,e),St(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(Ei=xe())),r&4&&bu(e);break;case 22:if(T=n!==null&&n.memoizedState!==null,e.mode&1?(Fe=(x=Fe)||T,ft(t,e),Fe=x):ft(t,e),St(e),r&8192){if(x=e.memoizedState!==null,(e.stateNode.isHidden=x)&&!T&&(e.mode&1)!==0)for(R=e,T=e.child;T!==null;){for(E=R=T;R!==null;){switch(P=R,F=P.child,P.tag){case 0:case 11:case 14:case 15:Pr(4,P,P.return);break;case 1:_n(P,P.return);var _=P.stateNode;if(typeof _.componentWillUnmount=="function"){r=P,n=P.return;try{t=r,_.props=t.memoizedProps,_.state=t.memoizedState,_.componentWillUnmount()}catch(O){ve(r,n,O)}}break;case 5:_n(P,P.return);break;case 22:if(P.memoizedState!==null){Ru(E);continue}}F!==null?(F.return=P,R=F):Ru(E)}T=T.sibling}e:for(T=null,E=e;;){if(E.tag===5){if(T===null){T=E;try{o=E.stateNode,x?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(d=E.stateNode,f=E.memoizedProps.style,i=f!=null&&f.hasOwnProperty("display")?f.display:null,d.style.display=ha("display",i))}catch(O){ve(e,e.return,O)}}}else if(E.tag===6){if(T===null)try{E.stateNode.nodeValue=x?"":E.memoizedProps}catch(O){ve(e,e.return,O)}}else if((E.tag!==22&&E.tag!==23||E.memoizedState===null||E===e)&&E.child!==null){E.child.return=E,E=E.child;continue}if(E===e)break e;for(;E.sibling===null;){if(E.return===null||E.return===e)break e;T===E&&(T=null),E=E.return}T===E&&(T=null),E.sibling.return=E.return,E=E.sibling}}break;case 19:ft(t,e),St(e),r&4&&bu(e);break;case 21:break;default:ft(t,e),St(e)}}function St(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Iu(n)){var r=n;break e}n=n.return}throw Error(s(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Wn(o,""),r.flags&=-33);var l=ju(e);Pi(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,d=ju(e);Ci(e,d,i);break;default:throw Error(s(161))}}catch(f){ve(e,e.return,f)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vf(e,t,n){R=e,Fu(e)}function Fu(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var o=R,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||To;if(!i){var d=o.alternate,f=d!==null&&d.memoizedState!==null||Fe;d=To;var x=Fe;if(To=i,(Fe=f)&&!x)for(R=o;R!==null;)i=R,f=i.child,i.tag===22&&i.memoizedState!==null?Lu(o):f!==null?(f.return=i,R=f):Lu(o);for(;l!==null;)R=l,Fu(l),l=l.sibling;R=o,To=d,Fe=x}Du(e)}else(o.subtreeFlags&8772)!==0&&l!==null?(l.return=o,R=l):Du(e)}}function Du(e){for(;R!==null;){var t=R;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Fe||Eo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Fe)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:ct(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Rs(t,l,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Rs(t,i,n)}break;case 5:var d=t.stateNode;if(n===null&&t.flags&4){n=d;var f=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":f.autoFocus&&n.focus();break;case"img":f.src&&(n.src=f.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var x=t.alternate;if(x!==null){var T=x.memoizedState;if(T!==null){var E=T.dehydrated;E!==null&&nr(E)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}Fe||t.flags&512&&ki(t)}catch(P){ve(t,t.return,P)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function Ru(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function Lu(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Eo(4,t)}catch(f){ve(t,n,f)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(f){ve(t,o,f)}}var l=t.return;try{ki(t)}catch(f){ve(t,l,f)}break;case 5:var i=t.return;try{ki(t)}catch(f){ve(t,i,f)}}}catch(f){ve(t,t.return,f)}if(t===e){R=null;break}var d=t.sibling;if(d!==null){d.return=t.return,R=d;break}R=t.return}}var xf=Math.ceil,No=ae.ReactCurrentDispatcher,Ai=ae.ReactCurrentOwner,rt=ae.ReactCurrentBatchConfig,Z=0,Ee=null,ke=null,je=0,Ze=0,On=Ot(0),Pe=0,Ar=null,cn=0,Io=0,Ti=0,Tr=null,Ve=null,Ei=0,Un=1/0,It=null,jo=!1,Ni=null,Wt=null,Mo=!1,Kt=null,bo=0,Er=0,Ii=null,zo=-1,Fo=0;function Le(){return(Z&6)!==0?xe():zo!==-1?zo:zo=xe()}function Qt(e){return(e.mode&1)===0?1:(Z&2)!==0&&je!==0?je&-je:tf.transition!==null?(Fo===0&&(Fo=ja()),Fo):(e=oe,e!==0||(e=window.event,e=e===void 0?16:Oa(e.type)),e)}function pt(e,t,n,r){if(50<Er)throw Er=0,Ii=null,Error(s(185));Zn(e,n,r),((Z&2)===0||e!==Ee)&&(e===Ee&&((Z&2)===0&&(Io|=n),Pe===4&&$t(e,je)),He(e,r),n===1&&Z===0&&(t.mode&1)===0&&(Un=xe()+500,ao&&Gt()))}function He(e,t){var n=e.callbackNode;td(e,t);var r=Br(e,e===Ee?je:0);if(r===0)n!==null&&Ea(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ea(n),t===1)e.tag===0?ef(Ou.bind(null,e)):Ps(Ou.bind(null,e)),Xd(function(){(Z&6)===0&&Gt()}),n=null;else{switch(Ma(r)){case 1:n=sl;break;case 4:n=Na;break;case 16:n=_r;break;case 536870912:n=Ia;break;default:n=_r}n=Qu(n,_u.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function _u(e,t){if(zo=-1,Fo=0,(Z&6)!==0)throw Error(s(327));var n=e.callbackNode;if(Gn()&&e.callbackNode!==n)return null;var r=Br(e,e===Ee?je:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Do(e,r);else{t=r;var o=Z;Z|=2;var l=Gu();(Ee!==e||je!==t)&&(It=null,Un=xe()+500,fn(e,t));do try{kf();break}catch(d){Uu(e,d)}while(!0);Ql(),No.current=l,Z=o,ke!==null?t=0:(Ee=null,je=0,t=Pe)}if(t!==0){if(t===2&&(o=ul(e),o!==0&&(r=o,t=ji(e,o))),t===1)throw n=Ar,fn(e,0),$t(e,r),He(e,xe()),n;if(t===6)$t(e,r);else{if(o=e.current.alternate,(r&30)===0&&!Sf(o)&&(t=Do(e,r),t===2&&(l=ul(e),l!==0&&(r=l,t=ji(e,l))),t===1))throw n=Ar,fn(e,0),$t(e,r),He(e,xe()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(s(345));case 2:pn(e,Ve,It);break;case 3:if($t(e,r),(r&130023424)===r&&(t=Ei+500-xe(),10<t)){if(Br(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Le(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Rl(pn.bind(null,e,Ve,It),t);break}pn(e,Ve,It);break;case 4:if($t(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-at(r);l=1<<i,i=t[i],i>o&&(o=i),r&=~l}if(r=o,r=xe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*xf(r/1960))-r,10<r){e.timeoutHandle=Rl(pn.bind(null,e,Ve,It),r);break}pn(e,Ve,It);break;case 5:pn(e,Ve,It);break;default:throw Error(s(329))}}}return He(e,xe()),e.callbackNode===n?_u.bind(null,e):null}function ji(e,t){var n=Tr;return e.current.memoizedState.isDehydrated&&(fn(e,t).flags|=256),e=Do(e,t),e!==2&&(t=Ve,Ve=n,t!==null&&Mi(t)),e}function Mi(e){Ve===null?Ve=e:Ve.push.apply(Ve,e)}function Sf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!st(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function $t(e,t){for(t&=~Ti,t&=~Io,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-at(t),r=1<<n;e[n]=-1,t&=~r}}function Ou(e){if((Z&6)!==0)throw Error(s(327));Gn();var t=Br(e,0);if((t&1)===0)return He(e,xe()),null;var n=Do(e,t);if(e.tag!==0&&n===2){var r=ul(e);r!==0&&(t=r,n=ji(e,r))}if(n===1)throw n=Ar,fn(e,0),$t(e,t),He(e,xe()),n;if(n===6)throw Error(s(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,pn(e,Ve,It),He(e,xe()),null}function bi(e,t){var n=Z;Z|=1;try{return e(t)}finally{Z=n,Z===0&&(Un=xe()+500,ao&&Gt())}}function dn(e){Kt!==null&&Kt.tag===0&&(Z&6)===0&&Gn();var t=Z;Z|=1;var n=rt.transition,r=oe;try{if(rt.transition=null,oe=1,e)return e()}finally{oe=r,rt.transition=n,Z=t,(Z&6)===0&&Gt()}}function zi(){Ze=On.current,de(On)}function fn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,qd(n)),ke!==null)for(n=ke.return;n!==null;){var r=n;switch(Bl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&lo();break;case 3:Rn(),de(Ue),de(Me),ti();break;case 5:Yl(r);break;case 4:Rn();break;case 13:de(me);break;case 19:de(me);break;case 10:$l(r.type._context);break;case 22:case 23:zi()}n=n.return}if(Ee=e,ke=e=qt(e.current,null),je=Ze=t,Pe=0,Ar=null,Ti=Io=cn=0,Ve=Tr=null,an!==null){for(t=0;t<an.length;t++)if(n=an[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}n.pending=r}an=null}return e}function Uu(e,t){do{var n=ke;try{if(Ql(),vo.current=ko,xo){for(var r=ge.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}xo=!1}if(un=0,Te=Ce=ge=null,xr=!1,Sr=0,Ai.current=null,n===null||n.return===null){Pe=1,Ar=t,ke=null;break}e:{var l=e,i=n.return,d=n,f=t;if(t=je,d.flags|=32768,f!==null&&typeof f=="object"&&typeof f.then=="function"){var x=f,T=d,E=T.tag;if((T.mode&1)===0&&(E===0||E===11||E===15)){var P=T.alternate;P?(T.updateQueue=P.updateQueue,T.memoizedState=P.memoizedState,T.lanes=P.lanes):(T.updateQueue=null,T.memoizedState=null)}var F=du(i);if(F!==null){F.flags&=-257,fu(F,i,d,l,t),F.mode&1&&cu(l,x,t),t=F,f=x;var _=t.updateQueue;if(_===null){var O=new Set;O.add(f),t.updateQueue=O}else _.add(f);break e}else{if((t&1)===0){cu(l,x,t),Fi();break e}f=Error(s(426))}}else if(he&&d.mode&1){var Se=du(i);if(Se!==null){(Se.flags&65536)===0&&(Se.flags|=256),fu(Se,i,d,l,t),Wl(Ln(f,d));break e}}l=f=Ln(f,d),Pe!==4&&(Pe=2),Tr===null?Tr=[l]:Tr.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var g=su(l,f,t);Ds(l,g);break e;case 1:d=f;var h=l.type,v=l.stateNode;if((l.flags&128)===0&&(typeof h.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Wt===null||!Wt.has(v)))){l.flags|=65536,t&=-t,l.lanes|=t;var N=uu(l,d,t);Ds(l,N);break e}}l=l.return}while(l!==null)}Vu(n)}catch(U){t=U,ke===n&&n!==null&&(ke=n=n.return);continue}break}while(!0)}function Gu(){var e=No.current;return No.current=ko,e===null?ko:e}function Fi(){(Pe===0||Pe===3||Pe===2)&&(Pe=4),Ee===null||(cn&268435455)===0&&(Io&268435455)===0||$t(Ee,je)}function Do(e,t){var n=Z;Z|=2;var r=Gu();(Ee!==e||je!==t)&&(It=null,fn(e,t));do try{wf();break}catch(o){Uu(e,o)}while(!0);if(Ql(),Z=n,No.current=r,ke!==null)throw Error(s(261));return Ee=null,je=0,Pe}function wf(){for(;ke!==null;)Bu(ke)}function kf(){for(;ke!==null&&!Kc();)Bu(ke)}function Bu(e){var t=Ku(e.alternate,e,Ze);e.memoizedProps=e.pendingProps,t===null?Vu(e):ke=t,Ai.current=null}function Vu(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=hf(n,t,Ze),n!==null){ke=n;return}}else{if(n=mf(n,t),n!==null){n.flags&=32767,ke=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Pe=6,ke=null;return}}if(t=t.sibling,t!==null){ke=t;return}ke=t=e}while(t!==null);Pe===0&&(Pe=5)}function pn(e,t,n){var r=oe,o=rt.transition;try{rt.transition=null,oe=1,Cf(e,t,n,r)}finally{rt.transition=o,oe=r}return null}function Cf(e,t,n,r){do Gn();while(Kt!==null);if((Z&6)!==0)throw Error(s(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(nd(e,l),e===Ee&&(ke=Ee=null,je=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Mo||(Mo=!0,Qu(_r,function(){return Gn(),null})),l=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||l){l=rt.transition,rt.transition=null;var i=oe;oe=1;var d=Z;Z|=4,Ai.current=null,yf(e,n),zu(n,e),Bd(Fl),Wr=!!zl,Fl=zl=null,e.current=n,vf(n),Qc(),Z=d,oe=i,rt.transition=l}else e.current=n;if(Mo&&(Mo=!1,Kt=e,bo=o),l=e.pendingLanes,l===0&&(Wt=null),Xc(n.stateNode),He(e,xe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(jo)throw jo=!1,e=Ni,Ni=null,e;return(bo&1)!==0&&e.tag!==0&&Gn(),l=e.pendingLanes,(l&1)!==0?e===Ii?Er++:(Er=0,Ii=e):Er=0,Gt(),null}function Gn(){if(Kt!==null){var e=Ma(bo),t=rt.transition,n=oe;try{if(rt.transition=null,oe=16>e?16:e,Kt===null)var r=!1;else{if(e=Kt,Kt=null,bo=0,(Z&6)!==0)throw Error(s(331));var o=Z;for(Z|=4,R=e.current;R!==null;){var l=R,i=l.child;if((R.flags&16)!==0){var d=l.deletions;if(d!==null){for(var f=0;f<d.length;f++){var x=d[f];for(R=x;R!==null;){var T=R;switch(T.tag){case 0:case 11:case 15:Pr(8,T,l)}var E=T.child;if(E!==null)E.return=T,R=E;else for(;R!==null;){T=R;var P=T.sibling,F=T.return;if(Nu(T),T===x){R=null;break}if(P!==null){P.return=F,R=P;break}R=F}}}var _=l.alternate;if(_!==null){var O=_.child;if(O!==null){_.child=null;do{var Se=O.sibling;O.sibling=null,O=Se}while(O!==null)}}R=l}}if((l.subtreeFlags&2064)!==0&&i!==null)i.return=l,R=i;else e:for(;R!==null;){if(l=R,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:Pr(9,l,l.return)}var g=l.sibling;if(g!==null){g.return=l.return,R=g;break e}R=l.return}}var h=e.current;for(R=h;R!==null;){i=R;var v=i.child;if((i.subtreeFlags&2064)!==0&&v!==null)v.return=i,R=v;else e:for(i=h;R!==null;){if(d=R,(d.flags&2048)!==0)try{switch(d.tag){case 0:case 11:case 15:Eo(9,d)}}catch(U){ve(d,d.return,U)}if(d===i){R=null;break e}var N=d.sibling;if(N!==null){N.return=d.return,R=N;break e}R=d.return}}if(Z=o,Gt(),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(Or,e)}catch{}r=!0}return r}finally{oe=n,rt.transition=t}}return!1}function Hu(e,t,n){t=Ln(n,t),t=su(e,t,1),e=Vt(e,t,1),t=Le(),e!==null&&(Zn(e,1,t),He(e,t))}function ve(e,t,n){if(e.tag===3)Hu(e,e,n);else for(;t!==null;){if(t.tag===3){Hu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Wt===null||!Wt.has(r))){e=Ln(n,e),e=uu(t,e,1),t=Vt(t,e,1),e=Le(),t!==null&&(Zn(t,1,e),He(t,e));break}}t=t.return}}function Pf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Le(),e.pingedLanes|=e.suspendedLanes&n,Ee===e&&(je&n)===n&&(Pe===4||Pe===3&&(je&130023424)===je&&500>xe()-Ei?fn(e,0):Ti|=n),He(e,t)}function Wu(e,t){t===0&&((e.mode&1)===0?t=1:(t=Gr,Gr<<=1,(Gr&130023424)===0&&(Gr=4194304)));var n=Le();e=Tt(e,t),e!==null&&(Zn(e,t,n),He(e,n))}function Af(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Wu(e,n)}function Tf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(s(314))}r!==null&&r.delete(t),Wu(e,n)}var Ku;Ku=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ue.current)Be=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Be=!1,pf(e,t,n);Be=(e.flags&131072)!==0}else Be=!1,he&&(t.flags&1048576)!==0&&As(t,uo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ao(e,t),e=t.pendingProps;var o=In(t,Me.current);Dn(t,n),o=oi(null,t,r,e,o,n);var l=li();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ge(r)?(l=!0,io(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Zl(t),o.updater=Co,t.stateNode=o,o._reactInternals=t,di(t,r,e,n),t=mi(null,t,r,!0,l,n)):(t.tag=0,he&&l&&Gl(t),Re(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ao(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Nf(r),e=ct(r,e),o){case 0:t=hi(null,t,r,e,n);break e;case 1:t=vu(null,t,r,e,n);break e;case 11:t=pu(null,t,r,e,n);break e;case 14:t=hu(null,t,r,ct(r.type,e),n);break e}throw Error(s(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ct(r,o),hi(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ct(r,o),vu(e,t,r,o,n);case 3:e:{if(xu(t),e===null)throw Error(s(387));r=t.pendingProps,l=t.memoizedState,o=l.element,Fs(e,t),go(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=Ln(Error(s(423)),t),t=Su(e,t,r,n,o);break e}else if(r!==o){o=Ln(Error(s(424)),t),t=Su(e,t,r,n,o);break e}else for(Xe=_t(t.stateNode.containerInfo.firstChild),qe=t,he=!0,ut=null,n=bs(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(bn(),r===o){t=Nt(e,t,n);break e}Re(e,t,r,n)}t=t.child}return t;case 5:return Ls(t),e===null&&Hl(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,Dl(r,o)?i=null:l!==null&&Dl(r,l)&&(t.flags|=32),yu(e,t),Re(e,t,i,n),t.child;case 6:return e===null&&Hl(t),null;case 13:return wu(e,t,n);case 4:return Jl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=zn(t,null,r,n):Re(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ct(r,o),pu(e,t,r,o,n);case 7:return Re(e,t,t.pendingProps,n),t.child;case 8:return Re(e,t,t.pendingProps.children,n),t.child;case 12:return Re(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,i=o.value,ue(po,r._currentValue),r._currentValue=i,l!==null)if(st(l.value,i)){if(l.children===o.children&&!Ue.current){t=Nt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var d=l.dependencies;if(d!==null){i=l.child;for(var f=d.firstContext;f!==null;){if(f.context===r){if(l.tag===1){f=Et(-1,n&-n),f.tag=2;var x=l.updateQueue;if(x!==null){x=x.shared;var T=x.pending;T===null?f.next=f:(f.next=T.next,T.next=f),x.pending=f}}l.lanes|=n,f=l.alternate,f!==null&&(f.lanes|=n),ql(l.return,n,t),d.lanes|=n;break}f=f.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(s(341));i.lanes|=n,d=i.alternate,d!==null&&(d.lanes|=n),ql(i,n,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}Re(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Dn(t,n),o=tt(o),r=r(o),t.flags|=1,Re(e,t,r,n),t.child;case 14:return r=t.type,o=ct(r,t.pendingProps),o=ct(r.type,o),hu(e,t,r,o,n);case 15:return mu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ct(r,o),Ao(e,t),t.tag=1,Ge(r)?(e=!0,io(t)):e=!1,Dn(t,n),iu(t,r,o),di(t,r,o,n),mi(null,t,r,!0,e,n);case 19:return Cu(e,t,n);case 22:return gu(e,t,n)}throw Error(s(156,t.tag))};function Qu(e,t){return Ta(e,t)}function Ef(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ot(e,t,n,r){return new Ef(e,t,n,r)}function Di(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Nf(e){if(typeof e=="function")return Di(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ht)return 11;if(e===mt)return 14}return 2}function qt(e,t){var n=e.alternate;return n===null?(n=ot(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ro(e,t,n,r,o,l){var i=2;if(r=e,typeof e=="function")Di(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case _e:return hn(n.children,o,l,t);case Je:i=8,o|=8;break;case Mt:return e=ot(12,n,t,o|2),e.elementType=Mt,e.lanes=l,e;case Ke:return e=ot(13,n,t,o),e.elementType=Ke,e.lanes=l,e;case it:return e=ot(19,n,t,o),e.elementType=it,e.lanes=l,e;case ye:return Lo(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case wt:i=10;break e;case en:i=9;break e;case ht:i=11;break e;case mt:i=14;break e;case Oe:i=16,r=null;break e}throw Error(s(130,e==null?e:typeof e,""))}return t=ot(i,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function hn(e,t,n,r){return e=ot(7,e,r,t),e.lanes=n,e}function Lo(e,t,n,r){return e=ot(22,e,r,t),e.elementType=ye,e.lanes=n,e.stateNode={isHidden:!1},e}function Ri(e,t,n){return e=ot(6,e,null,t),e.lanes=n,e}function Li(e,t,n){return t=ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function If(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cl(0),this.expirationTimes=cl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function _i(e,t,n,r,o,l,i,d,f){return e=new If(e,t,n,d,f),t===1?(t=1,l===!0&&(t|=8)):t=0,l=ot(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zl(l),e}function jf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:De,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function $u(e){if(!e)return Ut;e=e._reactInternals;e:{if(tn(e)!==e||e.tag!==1)throw Error(s(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ge(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(s(171))}if(e.tag===1){var n=e.type;if(Ge(n))return ks(e,n,t)}return t}function qu(e,t,n,r,o,l,i,d,f){return e=_i(n,r,!0,e,o,l,i,d,f),e.context=$u(null),n=e.current,r=Le(),o=Qt(n),l=Et(r,o),l.callback=t??null,Vt(n,l,o),e.current.lanes=o,Zn(e,o,r),He(e,r),e}function _o(e,t,n,r){var o=t.current,l=Le(),i=Qt(o);return n=$u(n),t.context===null?t.context=n:t.pendingContext=n,t=Et(l,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Vt(o,t,i),e!==null&&(pt(e,o,i,l),mo(e,o,i)),i}function Oo(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function Xu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Oi(e,t){Xu(e,t),(e=e.alternate)&&Xu(e,t)}function Mf(){return null}var Zu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ui(e){this._internalRoot=e}Uo.prototype.render=Ui.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));_o(e,t,null,null)},Uo.prototype.unmount=Ui.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dn(function(){_o(null,e,null,null)}),t[kt]=null}};function Uo(e){this._internalRoot=e}Uo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Fa();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Dt.length&&t!==0&&t<Dt[n].priority;n++);Dt.splice(n,0,e),n===0&&La(e)}};function Gi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Go(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ju(){}function bf(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var x=Oo(i);l.call(x)}}var i=qu(t,r,e,0,null,!1,!1,"",Ju);return e._reactRootContainer=i,e[kt]=i.current,dr(e.nodeType===8?e.parentNode:e),dn(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var d=r;r=function(){var x=Oo(f);d.call(x)}}var f=_i(e,0,!1,null,null,!1,!1,"",Ju);return e._reactRootContainer=f,e[kt]=f.current,dr(e.nodeType===8?e.parentNode:e),dn(function(){_o(t,f,n,r)}),f}function Bo(e,t,n,r,o){var l=n._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var d=o;o=function(){var f=Oo(i);d.call(f)}}_o(t,i,e,o)}else i=bf(n,t,e,o,r);return Oo(i)}ba=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Xn(t.pendingLanes);n!==0&&(dl(t,n|1),He(t,xe()),(Z&6)===0&&(Un=xe()+500,Gt()))}break;case 13:dn(function(){var r=Tt(e,1);if(r!==null){var o=Le();pt(r,e,1,o)}}),Oi(e,1)}},fl=function(e){if(e.tag===13){var t=Tt(e,134217728);if(t!==null){var n=Le();pt(t,e,134217728,n)}Oi(e,134217728)}},za=function(e){if(e.tag===13){var t=Qt(e),n=Tt(e,t);if(n!==null){var r=Le();pt(n,e,t,r)}Oi(e,t)}},Fa=function(){return oe},Da=function(e,t){var n=oe;try{return oe=e,t()}finally{oe=n}},ol=function(e,t,n){switch(t){case"input":if(Xo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=oo(r);if(!o)throw Error(s(90));la(r),Xo(r,o)}}}break;case"textarea":ca(e,n);break;case"select":t=n.value,t!=null&&yn(e,!!n.multiple,t,!1)}},xa=bi,Sa=dn;var zf={usingClientEntryPoint:!1,Events:[hr,En,oo,ya,va,bi]},Nr={findFiberByHostInstance:nn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ff={bundleType:Nr.bundleType,version:Nr.version,rendererPackageName:Nr.rendererPackageName,rendererConfig:Nr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ae.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Pa(e),e===null?null:e.stateNode},findFiberByHostInstance:Nr.findFiberByHostInstance||Mf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vo.isDisabled&&Vo.supportsFiber)try{Or=Vo.inject(Ff),gt=Vo}catch{}}return We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zf,We.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gi(t))throw Error(s(200));return jf(e,t,null,n)},We.createRoot=function(e,t){if(!Gi(e))throw Error(s(299));var n=!1,r="",o=Zu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=_i(e,1,!1,null,null,n,!1,r,o),e[kt]=t.current,dr(e.nodeType===8?e.parentNode:e),new Ui(t)},We.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=Pa(t),e=e===null?null:e.stateNode,e},We.flushSync=function(e){return dn(e)},We.hydrate=function(e,t,n){if(!Go(t))throw Error(s(200));return Bo(null,e,t,!0,n)},We.hydrateRoot=function(e,t,n){if(!Gi(e))throw Error(s(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",i=Zu;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=qu(t,null,e,1,n??null,o,!1,l,i),e[kt]=t.current,dr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Uo(t)},We.render=function(e,t,n){if(!Go(t))throw Error(s(200));return Bo(null,e,t,!1,n)},We.unmountComponentAtNode=function(e){if(!Go(e))throw Error(s(40));return e._reactRootContainer?(dn(function(){Bo(null,null,e,!1,function(){e._reactRootContainer=null,e[kt]=null})}),!0):!1},We.unstable_batchedUpdates=bi,We.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Go(n))throw Error(s(200));if(e==null||e._reactInternals===void 0)throw Error(s(38));return Bo(e,t,n,!1,r)},We.version="18.3.1-next-f1338f8080-20240426",We}var ic;function kc(){if(ic)return Hi.exports;ic=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(c){console.error(c)}}return a(),Hi.exports=Wf(),Hi.exports}var ac;function Kf(){if(ac)return Ho;ac=1;var a=kc();return Ho.createRoot=a.createRoot,Ho.hydrateRoot=a.hydrateRoot,Ho}var Qf=Kf();kc();function Mr(){return Mr=Object.assign?Object.assign.bind():function(a){for(var c=1;c<arguments.length;c++){var s=arguments[c];for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&(a[p]=s[p])}return a},Mr.apply(this,arguments)}var Zt;(function(a){a.Pop="POP",a.Push="PUSH",a.Replace="REPLACE"})(Zt||(Zt={}));const sc="popstate";function $f(a){a===void 0&&(a={});function c(y,S){let{pathname:w="/",search:C="",hash:k=""}=mn(y.location.hash.substr(1));return!w.startsWith("/")&&!w.startsWith(".")&&(w="/"+w),$i("",{pathname:w,search:C,hash:k},S.state&&S.state.usr||null,S.state&&S.state.key||"default")}function s(y,S){let w=y.document.querySelector("base"),C="";if(w&&w.getAttribute("href")){let k=y.location.href,j=k.indexOf("#");C=j===-1?k:k.slice(0,j)}return C+"#"+(typeof S=="string"?S:Wo(S))}function p(y,S){Yi(y.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(S)+")")}return Xf(c,s,p,a)}function we(a,c){if(a===!1||a===null||typeof a>"u")throw new Error(c)}function Yi(a,c){if(!a){typeof console<"u"&&console.warn(c);try{throw new Error(c)}catch{}}}function qf(){return Math.random().toString(36).substr(2,8)}function uc(a,c){return{usr:a.state,key:a.key,idx:c}}function $i(a,c,s,p){return s===void 0&&(s=null),Mr({pathname:typeof a=="string"?a:a.pathname,search:"",hash:""},typeof c=="string"?mn(c):c,{state:s,key:c&&c.key||p||qf()})}function Wo(a){let{pathname:c="/",search:s="",hash:p=""}=a;return s&&s!=="?"&&(c+=s.charAt(0)==="?"?s:"?"+s),p&&p!=="#"&&(c+=p.charAt(0)==="#"?p:"#"+p),c}function mn(a){let c={};if(a){let s=a.indexOf("#");s>=0&&(c.hash=a.substr(s),a=a.substr(0,s));let p=a.indexOf("?");p>=0&&(c.search=a.substr(p),a=a.substr(0,p)),a&&(c.pathname=a)}return c}function Xf(a,c,s,p){p===void 0&&(p={});let{window:y=document.defaultView,v5Compat:S=!1}=p,w=y.history,C=Zt.Pop,k=null,j=D();j==null&&(j=0,w.replaceState(Mr({},w.state,{idx:j}),""));function D(){return(w.state||{idx:null}).idx}function I(){C=Zt.Pop;let b=D(),le=b==null?null:b-j;j=b,k&&k({action:C,location:H.location,delta:le})}function G(b,le){C=Zt.Push;let ie=$i(H.location,b,le);s&&s(ie,b),j=D()+1;let ne=uc(ie,j),ae=H.createHref(ie);try{w.pushState(ne,"",ae)}catch(Ae){if(Ae instanceof DOMException&&Ae.name==="DataCloneError")throw Ae;y.location.assign(ae)}S&&k&&k({action:C,location:H.location,delta:1})}function te(b,le){C=Zt.Replace;let ie=$i(H.location,b,le);s&&s(ie,b),j=D();let ne=uc(ie,j),ae=H.createHref(ie);w.replaceState(ne,"",ae),S&&k&&k({action:C,location:H.location,delta:0})}function X(b){let le=y.location.origin!=="null"?y.location.origin:y.location.href,ie=typeof b=="string"?b:Wo(b);return ie=ie.replace(/ $/,"%20"),we(le,"No window.location.(origin|href) available to create URL for href: "+ie),new URL(ie,le)}let H={get action(){return C},get location(){return a(y,w)},listen(b){if(k)throw new Error("A history only accepts one active listener");return y.addEventListener(sc,I),k=b,()=>{y.removeEventListener(sc,I),k=null}},createHref(b){return c(y,b)},createURL:X,encodeLocation(b){let le=X(b);return{pathname:le.pathname,search:le.search,hash:le.hash}},push:G,replace:te,go(b){return w.go(b)}};return H}var cc;(function(a){a.data="data",a.deferred="deferred",a.redirect="redirect",a.error="error"})(cc||(cc={}));function Zf(a,c,s){return s===void 0&&(s="/"),Jf(a,c,s)}function Jf(a,c,s,p){let y=typeof c=="string"?mn(c):c,S=ea(y.pathname||"/",s);if(S==null)return null;let w=Cc(a);Yf(w);let C=null;for(let k=0;C==null&&k<w.length;++k){let j=dp(S);C=sp(w[k],j)}return C}function Cc(a,c,s,p){c===void 0&&(c=[]),s===void 0&&(s=[]),p===void 0&&(p="");let y=(S,w,C)=>{let k={relativePath:C===void 0?S.path||"":C,caseSensitive:S.caseSensitive===!0,childrenIndex:w,route:S};k.relativePath.startsWith("/")&&(we(k.relativePath.startsWith(p),'Absolute route path "'+k.relativePath+'" nested under path '+('"'+p+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),k.relativePath=k.relativePath.slice(p.length));let j=Jt([p,k.relativePath]),D=s.concat(k);S.children&&S.children.length>0&&(we(S.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+j+'".')),Cc(S.children,c,D,j)),!(S.path==null&&!S.index)&&c.push({path:j,score:ip(j,S.index),routesMeta:D})};return a.forEach((S,w)=>{var C;if(S.path===""||!((C=S.path)!=null&&C.includes("?")))y(S,w);else for(let k of Pc(S.path))y(S,w,k)}),c}function Pc(a){let c=a.split("/");if(c.length===0)return[];let[s,...p]=c,y=s.endsWith("?"),S=s.replace(/\?$/,"");if(p.length===0)return y?[S,""]:[S];let w=Pc(p.join("/")),C=[];return C.push(...w.map(k=>k===""?S:[S,k].join("/"))),y&&C.push(...w),C.map(k=>a.startsWith("/")&&k===""?"/":k)}function Yf(a){a.sort((c,s)=>c.score!==s.score?s.score-c.score:ap(c.routesMeta.map(p=>p.childrenIndex),s.routesMeta.map(p=>p.childrenIndex)))}const ep=/^:[\w-]+$/,tp=3,np=2,rp=1,op=10,lp=-2,dc=a=>a==="*";function ip(a,c){let s=a.split("/"),p=s.length;return s.some(dc)&&(p+=lp),c&&(p+=np),s.filter(y=>!dc(y)).reduce((y,S)=>y+(ep.test(S)?tp:S===""?rp:op),p)}function ap(a,c){return a.length===c.length&&a.slice(0,-1).every((p,y)=>p===c[y])?a[a.length-1]-c[c.length-1]:0}function sp(a,c,s){let{routesMeta:p}=a,y={},S="/",w=[];for(let C=0;C<p.length;++C){let k=p[C],j=C===p.length-1,D=S==="/"?c:c.slice(S.length)||"/",I=up({path:k.relativePath,caseSensitive:k.caseSensitive,end:j},D),G=k.route;if(!I)return null;Object.assign(y,I.params),w.push({params:y,pathname:Jt([S,I.pathname]),pathnameBase:mp(Jt([S,I.pathnameBase])),route:G}),I.pathnameBase!=="/"&&(S=Jt([S,I.pathnameBase]))}return w}function up(a,c){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[s,p]=cp(a.path,a.caseSensitive,a.end),y=c.match(s);if(!y)return null;let S=y[0],w=S.replace(/(.)\/+$/,"$1"),C=y.slice(1);return{params:p.reduce((j,D,I)=>{let{paramName:G,isOptional:te}=D;if(G==="*"){let H=C[I]||"";w=S.slice(0,S.length-H.length).replace(/(.)\/+$/,"$1")}const X=C[I];return te&&!X?j[G]=void 0:j[G]=(X||"").replace(/%2F/g,"/"),j},{}),pathname:S,pathnameBase:w,pattern:a}}function cp(a,c,s){c===void 0&&(c=!1),s===void 0&&(s=!0),Yi(a==="*"||!a.endsWith("*")||a.endsWith("/*"),'Route path "'+a+'" will be treated as if it were '+('"'+a.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+a.replace(/\*$/,"/*")+'".'));let p=[],y="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(w,C,k)=>(p.push({paramName:C,isOptional:k!=null}),k?"/?([^\\/]+)?":"/([^\\/]+)"));return a.endsWith("*")?(p.push({paramName:"*"}),y+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?y+="\\/*$":a!==""&&a!=="/"&&(y+="(?:(?=\\/|$))"),[new RegExp(y,c?void 0:"i"),p]}function dp(a){try{return a.split("/").map(c=>decodeURIComponent(c).replace(/\//g,"%2F")).join("/")}catch(c){return Yi(!1,'The URL path "'+a+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+c+").")),a}}function ea(a,c){if(c==="/")return a;if(!a.toLowerCase().startsWith(c.toLowerCase()))return null;let s=c.endsWith("/")?c.length-1:c.length,p=a.charAt(s);return p&&p!=="/"?null:a.slice(s)||"/"}function fp(a,c){c===void 0&&(c="/");let{pathname:s,search:p="",hash:y=""}=typeof a=="string"?mn(a):a;return{pathname:s?s.startsWith("/")?s:pp(s,c):c,search:gp(p),hash:yp(y)}}function pp(a,c){let s=c.replace(/\/+$/,"").split("/");return a.split("/").forEach(y=>{y===".."?s.length>1&&s.pop():y!=="."&&s.push(y)}),s.length>1?s.join("/"):"/"}function Qi(a,c,s,p){return"Cannot include a '"+a+"' character in a manually specified "+("`to."+c+"` field ["+JSON.stringify(p)+"].  Please separate it out to the ")+("`to."+s+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function hp(a){return a.filter((c,s)=>s===0||c.route.path&&c.route.path.length>0)}function ta(a,c){let s=hp(a);return c?s.map((p,y)=>y===s.length-1?p.pathname:p.pathnameBase):s.map(p=>p.pathnameBase)}function na(a,c,s,p){p===void 0&&(p=!1);let y;typeof a=="string"?y=mn(a):(y=Mr({},a),we(!y.pathname||!y.pathname.includes("?"),Qi("?","pathname","search",y)),we(!y.pathname||!y.pathname.includes("#"),Qi("#","pathname","hash",y)),we(!y.search||!y.search.includes("#"),Qi("#","search","hash",y)));let S=a===""||y.pathname==="",w=S?"/":y.pathname,C;if(w==null)C=s;else{let I=c.length-1;if(!p&&w.startsWith("..")){let G=w.split("/");for(;G[0]==="..";)G.shift(),I-=1;y.pathname=G.join("/")}C=I>=0?c[I]:"/"}let k=fp(y,C),j=w&&w!=="/"&&w.endsWith("/"),D=(S||w===".")&&s.endsWith("/");return!k.pathname.endsWith("/")&&(j||D)&&(k.pathname+="/"),k}const Jt=a=>a.join("/").replace(/\/\/+/g,"/"),mp=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),gp=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,yp=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function vp(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}const Ac=["post","put","patch","delete"];new Set(Ac);const xp=["get",...Ac];new Set(xp);function br(){return br=Object.assign?Object.assign.bind():function(a){for(var c=1;c<arguments.length;c++){var s=arguments[c];for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&(a[p]=s[p])}return a},br.apply(this,arguments)}const ra=M.createContext(null),Sp=M.createContext(null),Yt=M.createContext(null),Qo=M.createContext(null),jt=M.createContext({outlet:null,matches:[],isDataRoute:!1}),Tc=M.createContext(null);function wp(a,c){let{relative:s}=c===void 0?{}:c;Vn()||we(!1);let{basename:p,navigator:y}=M.useContext(Yt),{hash:S,pathname:w,search:C}=Ic(a,{relative:s}),k=w;return p!=="/"&&(k=w==="/"?p:Jt([p,w])),y.createHref({pathname:k,search:C,hash:S})}function Vn(){return M.useContext(Qo)!=null}function gn(){return Vn()||we(!1),M.useContext(Qo).location}function Ec(a){M.useContext(Yt).static||M.useLayoutEffect(a)}function Nc(){let{isDataRoute:a}=M.useContext(jt);return a?Dp():kp()}function kp(){Vn()||we(!1);let a=M.useContext(ra),{basename:c,future:s,navigator:p}=M.useContext(Yt),{matches:y}=M.useContext(jt),{pathname:S}=gn(),w=JSON.stringify(ta(y,s.v7_relativeSplatPath)),C=M.useRef(!1);return Ec(()=>{C.current=!0}),M.useCallback(function(j,D){if(D===void 0&&(D={}),!C.current)return;if(typeof j=="number"){p.go(j);return}let I=na(j,JSON.parse(w),S,D.relative==="path");a==null&&c!=="/"&&(I.pathname=I.pathname==="/"?c:Jt([c,I.pathname])),(D.replace?p.replace:p.push)(I,D.state,D)},[c,p,w,S,a])}function Cp(){let{matches:a}=M.useContext(jt),c=a[a.length-1];return c?c.params:{}}function Ic(a,c){let{relative:s}=c===void 0?{}:c,{future:p}=M.useContext(Yt),{matches:y}=M.useContext(jt),{pathname:S}=gn(),w=JSON.stringify(ta(y,p.v7_relativeSplatPath));return M.useMemo(()=>na(a,JSON.parse(w),S,s==="path"),[a,w,S,s])}function Pp(a,c){return Ap(a,c)}function Ap(a,c,s,p){Vn()||we(!1);let{navigator:y}=M.useContext(Yt),{matches:S}=M.useContext(jt),w=S[S.length-1],C=w?w.params:{};w&&w.pathname;let k=w?w.pathnameBase:"/";w&&w.route;let j=gn(),D;if(c){var I;let b=typeof c=="string"?mn(c):c;k==="/"||(I=b.pathname)!=null&&I.startsWith(k)||we(!1),D=b}else D=j;let G=D.pathname||"/",te=G;if(k!=="/"){let b=k.replace(/^\//,"").split("/");te="/"+G.replace(/^\//,"").split("/").slice(b.length).join("/")}let X=Zf(a,{pathname:te}),H=jp(X&&X.map(b=>Object.assign({},b,{params:Object.assign({},C,b.params),pathname:Jt([k,y.encodeLocation?y.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?k:Jt([k,y.encodeLocation?y.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),S,s,p);return c&&H?M.createElement(Qo.Provider,{value:{location:br({pathname:"/",search:"",hash:"",state:null,key:"default"},D),navigationType:Zt.Pop}},H):H}function Tp(){let a=Fp(),c=vp(a)?a.status+" "+a.statusText:a instanceof Error?a.message:JSON.stringify(a),s=a instanceof Error?a.stack:null,y={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},c),s?M.createElement("pre",{style:y},s):null,null)}const Ep=M.createElement(Tp,null);class Np extends M.Component{constructor(c){super(c),this.state={location:c.location,revalidation:c.revalidation,error:c.error}}static getDerivedStateFromError(c){return{error:c}}static getDerivedStateFromProps(c,s){return s.location!==c.location||s.revalidation!=="idle"&&c.revalidation==="idle"?{error:c.error,location:c.location,revalidation:c.revalidation}:{error:c.error!==void 0?c.error:s.error,location:s.location,revalidation:c.revalidation||s.revalidation}}componentDidCatch(c,s){console.error("React Router caught the following error during render",c,s)}render(){return this.state.error!==void 0?M.createElement(jt.Provider,{value:this.props.routeContext},M.createElement(Tc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ip(a){let{routeContext:c,match:s,children:p}=a,y=M.useContext(ra);return y&&y.static&&y.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(y.staticContext._deepestRenderedBoundaryId=s.route.id),M.createElement(jt.Provider,{value:c},p)}function jp(a,c,s,p){var y;if(c===void 0&&(c=[]),s===void 0&&(s=null),p===void 0&&(p=null),a==null){var S;if(!s)return null;if(s.errors)a=s.matches;else if((S=p)!=null&&S.v7_partialHydration&&c.length===0&&!s.initialized&&s.matches.length>0)a=s.matches;else return null}let w=a,C=(y=s)==null?void 0:y.errors;if(C!=null){let D=w.findIndex(I=>I.route.id&&C?.[I.route.id]!==void 0);D>=0||we(!1),w=w.slice(0,Math.min(w.length,D+1))}let k=!1,j=-1;if(s&&p&&p.v7_partialHydration)for(let D=0;D<w.length;D++){let I=w[D];if((I.route.HydrateFallback||I.route.hydrateFallbackElement)&&(j=D),I.route.id){let{loaderData:G,errors:te}=s,X=I.route.loader&&G[I.route.id]===void 0&&(!te||te[I.route.id]===void 0);if(I.route.lazy||X){k=!0,j>=0?w=w.slice(0,j+1):w=[w[0]];break}}}return w.reduceRight((D,I,G)=>{let te,X=!1,H=null,b=null;s&&(te=C&&I.route.id?C[I.route.id]:void 0,H=I.route.errorElement||Ep,k&&(j<0&&G===0?(Rp("route-fallback"),X=!0,b=null):j===G&&(X=!0,b=I.route.hydrateFallbackElement||null)));let le=c.concat(w.slice(0,G+1)),ie=()=>{let ne;return te?ne=H:X?ne=b:I.route.Component?ne=M.createElement(I.route.Component,null):I.route.element?ne=I.route.element:ne=D,M.createElement(Ip,{match:I,routeContext:{outlet:D,matches:le,isDataRoute:s!=null},children:ne})};return s&&(I.route.ErrorBoundary||I.route.errorElement||G===0)?M.createElement(Np,{location:s.location,revalidation:s.revalidation,component:H,error:te,children:ie(),routeContext:{outlet:null,matches:le,isDataRoute:!0}}):ie()},null)}var jc=(function(a){return a.UseBlocker="useBlocker",a.UseRevalidator="useRevalidator",a.UseNavigateStable="useNavigate",a})(jc||{}),Mc=(function(a){return a.UseBlocker="useBlocker",a.UseLoaderData="useLoaderData",a.UseActionData="useActionData",a.UseRouteError="useRouteError",a.UseNavigation="useNavigation",a.UseRouteLoaderData="useRouteLoaderData",a.UseMatches="useMatches",a.UseRevalidator="useRevalidator",a.UseNavigateStable="useNavigate",a.UseRouteId="useRouteId",a})(Mc||{});function Mp(a){let c=M.useContext(ra);return c||we(!1),c}function bp(a){let c=M.useContext(Sp);return c||we(!1),c}function zp(a){let c=M.useContext(jt);return c||we(!1),c}function bc(a){let c=zp(),s=c.matches[c.matches.length-1];return s.route.id||we(!1),s.route.id}function Fp(){var a;let c=M.useContext(Tc),s=bp(),p=bc();return c!==void 0?c:(a=s.errors)==null?void 0:a[p]}function Dp(){let{router:a}=Mp(jc.UseNavigateStable),c=bc(Mc.UseNavigateStable),s=M.useRef(!1);return Ec(()=>{s.current=!0}),M.useCallback(function(y,S){S===void 0&&(S={}),s.current&&(typeof y=="number"?a.navigate(y):a.navigate(y,br({fromRouteId:c},S)))},[a,c])}const fc={};function Rp(a,c,s){fc[a]||(fc[a]=!0)}function Lp(a,c){a?.v7_startTransition,a?.v7_relativeSplatPath}function _p(a){let{to:c,replace:s,state:p,relative:y}=a;Vn()||we(!1);let{future:S,static:w}=M.useContext(Yt),{matches:C}=M.useContext(jt),{pathname:k}=gn(),j=Nc(),D=na(c,ta(C,S.v7_relativeSplatPath),k,y==="path"),I=JSON.stringify(D);return M.useEffect(()=>j(JSON.parse(I),{replace:s,state:p,relative:y}),[j,I,y,s,p]),null}function jr(a){we(!1)}function Op(a){let{basename:c="/",children:s=null,location:p,navigationType:y=Zt.Pop,navigator:S,static:w=!1,future:C}=a;Vn()&&we(!1);let k=c.replace(/^\/*/,"/"),j=M.useMemo(()=>({basename:k,navigator:S,static:w,future:br({v7_relativeSplatPath:!1},C)}),[k,C,S,w]);typeof p=="string"&&(p=mn(p));let{pathname:D="/",search:I="",hash:G="",state:te=null,key:X="default"}=p,H=M.useMemo(()=>{let b=ea(D,k);return b==null?null:{location:{pathname:b,search:I,hash:G,state:te,key:X},navigationType:y}},[k,D,I,G,te,X,y]);return H==null?null:M.createElement(Yt.Provider,{value:j},M.createElement(Qo.Provider,{children:s,value:H}))}function Up(a){let{children:c,location:s}=a;return Pp(qi(c),s)}new Promise(()=>{});function qi(a,c){c===void 0&&(c=[]);let s=[];return M.Children.forEach(a,(p,y)=>{if(!M.isValidElement(p))return;let S=[...c,y];if(p.type===M.Fragment){s.push.apply(s,qi(p.props.children,S));return}p.type!==jr&&we(!1),!p.props.index||!p.props.children||we(!1);let w={id:p.props.id||S.join("-"),caseSensitive:p.props.caseSensitive,element:p.props.element,Component:p.props.Component,index:p.props.index,path:p.props.path,loader:p.props.loader,action:p.props.action,errorElement:p.props.errorElement,ErrorBoundary:p.props.ErrorBoundary,hasErrorBoundary:p.props.ErrorBoundary!=null||p.props.errorElement!=null,shouldRevalidate:p.props.shouldRevalidate,handle:p.props.handle,lazy:p.props.lazy};p.props.children&&(w.children=qi(p.props.children,S)),s.push(w)}),s}function Xi(){return Xi=Object.assign?Object.assign.bind():function(a){for(var c=1;c<arguments.length;c++){var s=arguments[c];for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&(a[p]=s[p])}return a},Xi.apply(this,arguments)}function Gp(a,c){if(a==null)return{};var s={},p=Object.keys(a),y,S;for(S=0;S<p.length;S++)y=p[S],!(c.indexOf(y)>=0)&&(s[y]=a[y]);return s}function Bp(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function Vp(a,c){return a.button===0&&(!c||c==="_self")&&!Bp(a)}const Hp=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Wp="6";try{window.__reactRouterVersion=Wp}catch{}const Kp="startTransition",pc=Bf[Kp];function Qp(a){let{basename:c,children:s,future:p,window:y}=a,S=M.useRef();S.current==null&&(S.current=$f({window:y,v5Compat:!0}));let w=S.current,[C,k]=M.useState({action:w.action,location:w.location}),{v7_startTransition:j}=p||{},D=M.useCallback(I=>{j&&pc?pc(()=>k(I)):k(I)},[k,j]);return M.useLayoutEffect(()=>w.listen(D),[w,D]),M.useEffect(()=>Lp(p),[p]),M.createElement(Op,{basename:c,children:s,location:C.location,navigationType:C.action,navigator:w,future:p})}const $p=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",qp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,lt=M.forwardRef(function(c,s){let{onClick:p,relative:y,reloadDocument:S,replace:w,state:C,target:k,to:j,preventScrollReset:D,viewTransition:I}=c,G=Gp(c,Hp),{basename:te}=M.useContext(Yt),X,H=!1;if(typeof j=="string"&&qp.test(j)&&(X=j,$p))try{let ne=new URL(window.location.href),ae=j.startsWith("//")?new URL(ne.protocol+j):new URL(j),Ae=ea(ae.pathname,te);ae.origin===ne.origin&&Ae!=null?j=Ae+ae.search+ae.hash:H=!0}catch{}let b=wp(j,{relative:y}),le=Xp(j,{replace:w,state:C,target:k,preventScrollReset:D,relative:y,viewTransition:I});function ie(ne){p&&p(ne),ne.defaultPrevented||le(ne)}return M.createElement("a",Xi({},G,{href:X||b,onClick:H||S?p:ie,ref:s,target:k}))});var hc;(function(a){a.UseScrollRestoration="useScrollRestoration",a.UseSubmit="useSubmit",a.UseSubmitFetcher="useSubmitFetcher",a.UseFetcher="useFetcher",a.useViewTransitionState="useViewTransitionState"})(hc||(hc={}));var mc;(function(a){a.UseFetcher="useFetcher",a.UseFetchers="useFetchers",a.UseScrollRestoration="useScrollRestoration"})(mc||(mc={}));function Xp(a,c){let{target:s,replace:p,state:y,preventScrollReset:S,relative:w,viewTransition:C}=c===void 0?{}:c,k=Nc(),j=gn(),D=Ic(a,{relative:w});return M.useCallback(I=>{if(Vp(I,s)){I.preventDefault();let G=p!==void 0?p:Wo(j)===Wo(D);k(a,{replace:G,state:y,preventScrollReset:S,relative:w,viewTransition:C})}},[j,k,D,p,y,s,a,S,w,C])}const Zp=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Jp=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(c,s,p)=>p?p.toUpperCase():s.toLowerCase()),gc=a=>{const c=Jp(a);return c.charAt(0).toUpperCase()+c.slice(1)},zc=(...a)=>a.filter((c,s,p)=>!!c&&c.trim()!==""&&p.indexOf(c)===s).join(" ").trim(),Yp=a=>{for(const c in a)if(c.startsWith("aria-")||c==="role"||c==="title")return!0};var eh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const th=M.forwardRef(({color:a="currentColor",size:c=24,strokeWidth:s=2,absoluteStrokeWidth:p,className:y="",children:S,iconNode:w,...C},k)=>M.createElement("svg",{ref:k,...eh,width:c,height:c,stroke:a,strokeWidth:p?Number(s)*24/Number(c):s,className:zc("lucide",y),...!S&&!Yp(C)&&{"aria-hidden":"true"},...C},[...w.map(([j,D])=>M.createElement(j,D)),...Array.isArray(S)?S:[S]]));const fe=(a,c)=>{const s=M.forwardRef(({className:p,...y},S)=>M.createElement(th,{ref:S,iconNode:c,className:zc(`lucide-${Zp(gc(a))}`,`lucide-${a}`,p),...y}));return s.displayName=gc(a),s};const nh=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],rh=fe("arrow-left",nh);const oh=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],lh=fe("arrow-right",oh);const ih=[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]],ah=fe("brain",ih);const sh=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Fc=fe("chevron-down",sh);const uh=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],ch=fe("chevron-left",uh);const dh=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],fh=fe("chevron-right",dh);const ph=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],hh=fe("chevron-up",ph);const mh=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Dc=fe("clock",mh);const gh=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],Rc=fe("code",gh);const yh=[["rect",{width:"12",height:"12",x:"2",y:"10",rx:"2",ry:"2",key:"6agr2n"}],["path",{d:"m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6",key:"1o487t"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 14h.01",key:"ssrbsk"}],["path",{d:"M15 6h.01",key:"cblpky"}],["path",{d:"M18 9h.01",key:"2061c0"}]],vh=fe("dices",yh);const xh=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],yc=fe("download",xh);const Sh=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],wh=fe("external-link",Sh);const kh=[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]],$o=fe("gamepad-2",kh);const Ch=[["line",{x1:"6",x2:"10",y1:"12",y2:"12",key:"161bw2"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"15",x2:"15.01",y1:"13",y2:"13",key:"dqpgro"}],["line",{x1:"18",x2:"18.01",y1:"11",y2:"11",key:"meh2c"}],["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]],Ph=fe("gamepad",Ch);const Ah=[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]],Lc=fe("git-branch",Ah);const Th=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],oa=fe("github",Th);const Eh=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Nh=fe("layers",Eh);const Ih=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],_c=fe("linkedin",Ih);const jh=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Ko=fe("mail",jh);const Mh=[["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 18h16",key:"19g7jn"}],["path",{d:"M4 6h16",key:"1o0s65"}]],bh=fe("menu",Mh);const zh=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],Fh=fe("moon",zh);const Dh=[["path",{d:"M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",key:"nt11vn"}],["path",{d:"m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",key:"15qc1e"}],["path",{d:"m2.3 2.3 7.286 7.286",key:"1wuzzi"}],["circle",{cx:"11",cy:"11",r:"2",key:"xmgehs"}]],Rh=fe("pen-tool",Dh);const Lh=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],_h=fe("phone",Lh);const Oh=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],Uh=fe("sun",Oh);const Gh=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Bh=fe("x",Gh),vc=()=>{const[a,c]=M.useState(()=>typeof window<"u"?localStorage.getItem("theme")||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"):"light");M.useEffect(()=>{const p=window.document.documentElement;a==="dark"?p.classList.add("dark"):p.classList.remove("dark"),localStorage.setItem("theme",a)},[a]);const s=()=>{c(p=>p==="light"?"dark":"light")};return u.jsx("button",{onClick:s,className:"p-2 rounded-full bg-parchment dark:bg-midnight-blue text-dark-brown dark:text-soft-white hover:bg-muted-gold dark:hover:bg-desaturated-purple transition-colors duration-300 border-2 border-dark-brown dark:border-soft-white","aria-label":"Toggle theme",children:a==="light"?u.jsx(Uh,{size:20}):u.jsx(Fh,{size:20})})},xc=[{name:"Queens Rush",path:"/projects/queens-rush"},{name:"Whisper of Seasons",path:"/projects/whisper-of-seasons"},{name:"Plora",path:"/projects/plora"},{name:"Daggerbound",path:"/projects/daggerbound"},{name:"Tower Defence",path:"/projects/tower-defence"},{name:"Rogue Card",path:"/projects/rogue-card"}],Vh=({children:a})=>{const[c,s]=M.useState(!1),[p,y]=M.useState(!1);gn();const S=()=>s(!c),w=()=>s(!1);return u.jsxs("div",{className:"min-h-screen flex flex-col bg-parchment dark:bg-midnight-blue text-dark-brown dark:text-soft-white transition-colors duration-300 font-sans",children:[u.jsxs("nav",{className:"sticky top-0 z-50 bg-parchment/90 dark:bg-midnight-blue/90 backdrop-blur-sm border-b-4 border-dark-brown dark:border-soft-white shadow-md",children:[u.jsxs("div",{className:"container mx-auto px-4 py-3 flex justify-between items-center",children:[u.jsx(lt,{to:"/",className:"text-xl font-bold uppercase tracking-wider font-heading",onClick:w,children:"Birkan Ates"}),u.jsxs("div",{className:"hidden md:flex items-center space-x-8",children:[u.jsx(lt,{to:"/",className:"hover:text-muted-gold dark:hover:text-desaturated-purple font-bold uppercase transition-colors",children:"Home"}),u.jsx(lt,{to:"/about",className:"hover:text-muted-gold dark:hover:text-desaturated-purple font-bold uppercase transition-colors",children:"About"}),u.jsxs("div",{className:"relative group",children:[u.jsxs("button",{className:"flex items-center hover:text-muted-gold dark:hover:text-desaturated-purple font-bold uppercase transition-colors focus:outline-none",onMouseEnter:()=>y(!0),onClick:()=>y(!p),children:["Projects ",u.jsx(Fc,{size:16,className:"ml-1"})]}),u.jsx("div",{className:"absolute left-0 pt-2 w-56 hidden group-hover:block hover:block",children:u.jsx("div",{className:"bg-parchment dark:bg-midnight-blue border-2 border-dark-brown dark:border-soft-white shadow-xl rounded-sm overflow-hidden",children:xc.map(C=>u.jsx(lt,{to:C.path,className:"block px-4 py-2 hover:bg-muted-gold dark:hover:bg-desaturated-purple hover:text-white transition-colors text-sm font-bold uppercase",children:C.name},C.name))})})]}),u.jsx(lt,{to:"/contact",className:"hover:text-muted-gold dark:hover:text-desaturated-purple font-bold uppercase transition-colors",children:"Contact"}),u.jsx(vc,{})]}),u.jsxs("div",{className:"md:hidden flex items-center space-x-4",children:[u.jsx(vc,{}),u.jsx("button",{onClick:S,className:"p-2",children:c?u.jsx(Bh,{size:24}):u.jsx(bh,{size:24})})]})]}),c&&u.jsx("div",{className:"md:hidden bg-parchment dark:bg-midnight-blue border-t-2 border-dark-brown dark:border-soft-white",children:u.jsxs("div",{className:"flex flex-col p-4 space-y-4",children:[u.jsx(lt,{to:"/",className:"font-bold uppercase",onClick:w,children:"Home"}),u.jsx(lt,{to:"/about",className:"font-bold uppercase",onClick:w,children:"About"}),u.jsx("div",{className:"font-bold uppercase text-muted-gold dark:text-moonlight-blue",children:"Projects"}),u.jsx("div",{className:"pl-4 flex flex-col space-y-2 border-l-2 border-dark-brown dark:border-soft-white ml-2",children:xc.map(C=>u.jsx(lt,{to:C.path,className:"text-sm hover:text-muted-gold dark:hover:text-desaturated-purple",onClick:w,children:C.name},C.name))}),u.jsx(lt,{to:"/contact",className:"font-bold uppercase",onClick:w,children:"Contact"})]})})]}),u.jsx("main",{className:"flex-grow",children:a}),u.jsxs("footer",{className:"bg-parchment dark:bg-midnight-blue border-t-4 border-dark-brown dark:border-soft-white py-8 mt-auto relative overflow-hidden",children:[u.jsxs("div",{className:"container mx-auto px-4 flex flex-col md:flex-row justify-between items-center",children:[u.jsxs("div",{className:"mb-4 md:mb-0",children:[u.jsx("h3",{className:"font-heading text-lg mb-2",children:"Birkan Ates"}),u.jsx("p",{className:"text-sm opacity-75",children:"Gameplay Programmer & Game Developer"})]}),u.jsxs("div",{className:"flex space-x-6",children:[u.jsx("a",{href:"https://www.linkedin.com/in/birkan-ates-b5a40b2ab/",target:"_blank",rel:"noopener noreferrer",className:"p-2 bg-dark-brown dark:bg-soft-white text-parchment dark:text-midnight-blue rounded hover:bg-muted-gold dark:hover:bg-desaturated-purple transition-colors",children:u.jsx(_c,{size:20})}),u.jsx("a",{href:"https://github.com/DullySkull",target:"_blank",rel:"noopener noreferrer",className:"p-2 bg-dark-brown dark:bg-soft-white text-parchment dark:text-midnight-blue rounded hover:bg-muted-gold dark:hover:bg-desaturated-purple transition-colors",children:u.jsx(oa,{size:20})}),u.jsx("a",{href:"https://itch.io/profile/dullyskull",target:"_blank",rel:"noopener noreferrer",className:"p-2 bg-dark-brown dark:bg-soft-white text-parchment dark:text-midnight-blue rounded hover:bg-muted-gold dark:hover:bg-desaturated-purple transition-colors",children:u.jsx($o,{size:20})}),u.jsx("a",{href:"mailto:Billy.ates@hotmail.com",className:"p-2 bg-dark-brown dark:bg-soft-white text-parchment dark:text-midnight-blue rounded hover:bg-muted-gold dark:hover:bg-desaturated-purple transition-colors",children:u.jsx(Ko,{size:20})})]})]}),u.jsxs("div",{className:"text-center mt-6 text-xs opacity-50",children:["© ",new Date().getFullYear()," Birkan Ates. All rights reserved."]})]})]})};function Hh(){const{pathname:a}=gn();return M.useEffect(()=>{window.scrollTo(0,0)},[a]),null}const Sc=({title:a,description:c,contributionSummary:s,image:p,link:y,time:S,engine:w,language:C,versionControl:k,imageFit:j="cover"})=>u.jsxs("div",{className:"group relative bg-parchment dark:bg-midnight-blue border-4 border-dark-brown dark:border-soft-white rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1",children:[u.jsxs("div",{className:"relative h-64 overflow-hidden border-b-4 border-dark-brown dark:border-soft-white bg-black/5 dark:bg-white/5",children:[u.jsx("img",{src:p,alt:a,className:`w-full h-full object-${j} transition-transform duration-500 group-hover:scale-110`}),u.jsx("div",{className:"absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"})]}),u.jsxs("div",{className:"p-6",children:[u.jsx("h3",{className:"text-2xl font-bold font-heading mb-2 uppercase text-dark-brown dark:text-soft-white",children:a}),u.jsx("p",{className:"text-sm mb-4 opacity-90 line-clamp-2",children:c}),s&&u.jsx("div",{className:"flex items-start gap-2 mb-4 text-sm font-bold text-dark-brown dark:text-soft-white bg-black/5 dark:bg-white/5 p-2 rounded-sm border-l-4 border-forest-green dark:border-moonlight-blue",children:u.jsx("span",{children:s})}),u.jsxs("div",{className:"flex flex-wrap gap-4 mb-6 text-xs font-bold uppercase tracking-wide opacity-80",children:[u.jsxs("div",{className:"flex items-center gap-1",children:[u.jsx(Dc,{size:14}),u.jsx("span",{children:S})]}),u.jsxs("div",{className:"flex items-center gap-1",children:[u.jsx($o,{size:14}),u.jsx("span",{children:w})]}),u.jsxs("div",{className:"flex items-center gap-1",children:[u.jsx(Rc,{size:14}),u.jsx("span",{children:C})]}),u.jsxs("div",{className:"flex items-center gap-1",children:[u.jsx(Lc,{size:14}),u.jsx("span",{children:k})]})]}),u.jsxs(lt,{to:y,className:"inline-flex items-center gap-2 px-6 py-2 bg-dark-brown dark:bg-soft-white text-parchment dark:text-midnight-blue font-bold uppercase hover:bg-muted-gold dark:hover:bg-desaturated-purple transition-colors rounded-sm",children:["Read More ",u.jsx(lh,{size:16})]})]})]}),Wh="/BirkanAtesPortfolio/assets/queens-rush-new-2-BmQePezc.png",Kh="/BirkanAtesPortfolio/assets/queens-rush-home-D2KWk27h.png",Qh="/BirkanAtesPortfolio/assets/whisper-header-c2adxdTg.png",$h="/BirkanAtesPortfolio/assets/whisper-home-DIHV0rd2.png",qh="/BirkanAtesPortfolio/assets/plora-home-Oc7OGADj.png",Xh="/BirkanAtesPortfolio/assets/plora-header-3J6BqyMw.png",Zh="/BirkanAtesPortfolio/assets/rogue-card-real-B2t38P9U.png",Jh="/BirkanAtesPortfolio/assets/tower-defence-new-D7uHK4_7.png",Yh="/BirkanAtesPortfolio/assets/queens-rush-1-DHuu9McM.png",em="/BirkanAtesPortfolio/assets/queens-rush-2-DFPgauLO.png",tm="/BirkanAtesPortfolio/assets/queens-rush-3-DCEzsmFi.png",nm="/BirkanAtesPortfolio/assets/queens-rush-4-BFU8YViQ.png",rm="/BirkanAtesPortfolio/assets/queens-rush-5-BZNPIvFs.png",om="/BirkanAtesPortfolio/assets/whisper-gallery-1-bz0SOlqF.png",lm="/BirkanAtesPortfolio/assets/whisper-gallery-2-B4uRT5Dn.png",im="/BirkanAtesPortfolio/assets/whisper-gallery-3-DZot9Wq8.png",am="/BirkanAtesPortfolio/assets/whisper-gallery-4-J_p5mUAs.png",sm="/BirkanAtesPortfolio/assets/plora-gallery-1-y5iRtu5D.png",um="/BirkanAtesPortfolio/assets/plora-gallery-2-DeGuJEqj.png",cm="/BirkanAtesPortfolio/assets/plora-gallery-3-m9eaGjNm.png",dm="/BirkanAtesPortfolio/assets/plora-gallery-4-DjDnYufR.png",fm="/BirkanAtesPortfolio/assets/plora-gallery-5-D-KTFhf2.png",pm="/BirkanAtesPortfolio/assets/plora-gallery-6-Cv_qg_QB.png",hm="/BirkanAtesPortfolio/assets/plora-ui-1-DBHZLM-P.png",mm="/BirkanAtesPortfolio/assets/plora-ui-2-CSORiGz8.png",gm="/BirkanAtesPortfolio/assets/plora-ui-3-D9R-UH_F.png",ym="/BirkanAtesPortfolio/assets/plora-ui-4-D_8aPKDd.png",vm="/BirkanAtesPortfolio/assets/plora-ui-showcase-BMSM5W8E.gif",xm="/BirkanAtesPortfolio/assets/daggerbound-gallery-1-Dsag6N87.png",Sm="/BirkanAtesPortfolio/assets/daggerbound-gallery-2-CN5CryZJ.png",wm="/BirkanAtesPortfolio/assets/daggerbound-gallery-3-CQj27v7s.png",km="/BirkanAtesPortfolio/assets/daggerbound-gallery-4-D7fJ2wKf.png",Cm="/BirkanAtesPortfolio/assets/daggerbound-header--Yxaw0QP.png",Pm="/BirkanAtesPortfolio/assets/daggerbound-home-Dv0QO-ev.png",Zi=[{id:"queens-rush",title:"Queens Rush",description:"Queens Rush is a third-person melee boss rush. You play as a fabulously buff drag queen invited to take part in the yearly Queens Rush Tournament. Fight themed bosses with mechanics inspired by Final Fantasy XIV, learn combo-based combat, and earn your place as the Ultimate Queen.",contributionSummary:"Gameplay Programmer – GameState, Cinematic tool, environment hazards, tutorial systems",image:Wh,homeImage:Kh,time:"7 weeks",engine:"Unreal Engine 5.4",language:"C++",versionControl:"Perforce",externalLink:"https://futuregames.itch.io/queens-rush",gallery:[Yh,em,tm,nm,rm],video:"https://www.youtube.com/embed/gtPgqS8e6O4",contributions:["Game flow / state tracking: UGameStateManager","Cinematics pipeline: UCinematicManagerComponent","Tutorial system: UTutorialManagerComponent","Training dummy: ATrainingDummy","Environment switching: AEnvironmentManager","Boss hazards: Chess barrier activation + Bee honey puddles","Boss throwables: AThrowableSpawner"],techOverview:"Built in Unreal Engine 5.4, using C++ for core gameplay systems and Blueprint/UMG for designer-facing interaction. My work focused on game flow, cinematic transitions, tutorial structure, and boss-specific environment systems (hazards + throwables) to make each boss arena feel mechanically distinct.",deepDives:[{title:"Game Manager (GameStateManager)",content:"I implemented a lightweight UGameStateManager to track global game flow and provide a clean API for state transitions. It prevents duplicate transitions and logs state changes for debugging.",code:`void UGameStateManager::SetGameState(EGameState NewState)
{
    if (CurrentState != NewState)
    {
        CurrentState = NewState;
        UE_LOG(LogTemp, Log, TEXT("Game State changed to: %s"),
            *UEnum::GetValueAsString(NewState));
    }
}

EGameState UGameStateManager::GetCurrentState() const
{
    return CurrentState;
}`},{title:"CinematicManagerComponent",content:"I built UCinematicManagerComponent to handle boss intro cinematics, including skip support (keyboard + controller), disabling player input during playback, and cleanly handing off to environment + boss start.",code:`void UCinematicManagerComponent::SetupSkipInput()
{
    if (APlayerController* PC = UGameplayStatics::GetPlayerController(this, 0))
    {
        if (!PC->InputComponent)
        {
            PC->InputComponent = NewObject<UInputComponent>(PC, TEXT("CinematicSkipInputComp"));
            PC->InputComponent->RegisterComponent();
            PC->PushInputComponent(PC->InputComponent);
        }

        PC->InputComponent->BindKey(EKeys::Enter, IE_Pressed, this,
            &UCinematicManagerComponent::SkipCinematic);
        PC->InputComponent->BindKey(EKeys::Gamepad_FaceButton_Right, IE_Pressed, this,
            &UCinematicManagerComponent::SkipCinematic);
    }
}

void UCinematicManagerComponent::OnSequenceFinished()
{
    if (SequenceActor) { SequenceActor->Destroy(); SequenceActor = nullptr; }
    SequencePlayer = nullptr;

    if (APlayerController* PC = UGameplayStatics::GetPlayerController(GetWorld(), 0))
    {
        PC->SetCinematicMode(false, false, false, false, false);
        PC->SetInputMode(FInputModeGameOnly());
        PC->bShowMouseCursor = false;

        if (APawn* Pawn = PC->GetPawn()) { Pawn->EnableInput(PC); }
    }

    if (EnvironmentManager) { EnvironmentManager->ActivateEnvironmentForBoss(PendingBossIndex); }
    if (BossManager) { BossManager->StartBossByIndex(PendingBossIndex); }
}`},{title:"TutorialManagerComponent",content:"I built a step-based tutorial manager that drives UI instructions, tracks completion per step, and spawns throwables so the player can practice pickup/throw and combo interactions.",code:`void UTutorialManagerComponent::ShowNextInstruction()
{
    for (int32 i = 0; i < StepInstructions.Num(); ++i)
    {
        if (!bStepCompleted[i])
        {
            CurrentStep = static_cast<ETutorialStep>(i);
            if (TutorialWidget)
                TutorialWidget->SetInstructionText(StepInstructions[i]);
            return;
        }
    }

    CurrentStep = ETutorialStep::None;
    if (TutorialWidget)
    {
        TutorialWidget->SetInstructionText(FText::GetEmpty());
        TutorialWidget->EnableFinishButton();
    }
}

void UTutorialManagerComponent::OnThrowableDestroyed(AActor* DestroyedActor)
{
    ActiveThrowables.Remove(DestroyedActor);

    FTimerHandle TimerHandle;
    GetWorld()->GetTimerManager().SetTimer(
        TimerHandle, this,
        &UTutorialManagerComponent::SpawnOneThrowable,
        ThrowableRespawnDelay, false);
}`},{title:"Training Dummy (TrainingDummy)",content:"I created a training dummy that integrates with the tutorial system by detecting damage events and notifying the tutorial manager when the player completes the relevant combat step.",code:`void ATrainingDummy::OnTakeDamage(AActor* DamagedActor, float Damage,
    const UDamageType* DamageType, AController* InstigatedBy, AActor* DamageCauser)
{
    if (Damage <= 0.f || currentHealth <= 0.f) return;

    currentHealth -= Damage;

    if (TutorialManager)
    {
        const ETutorialStep Step = TutorialManager->GetCurrentStep();
        if (Step == ETutorialStep::Attack || Step == ETutorialStep::Throw)
        {
            TutorialManager->NotifyAttackDone();
        }
    }

    if (currentHealth <= 0.f)
    {
        HitCapsule->SetCollisionEnabled(ECollisionEnabled::NoCollision);
        GetWorldTimerManager().SetTimer(TimerHandle_ResetHP, this,
            &ATrainingDummy::ResetHealth, 3.0f, false);
    }
}`},{title:"EnvironmentManager",content:"I implemented AEnvironmentManager to activate arena visuals and hazards per boss index. This keeps hazards decoupled from boss AI and ensures each arena resets cleanly when switching bosses.",code:`void AEnvironmentManager::ActivateEnvironmentForBoss(int32 BossIndex)
{
    DeactivateAllEnvironments();

    switch (BossIndex)
    {
    case 0: // Chess
        SetActorsVisibility(ChessEnvironmentActors, true);
        SetPostProcessVolumesActive(ChessPostProcessVolumes, true);
        if (IsValid(ChessQueenSpawner)) { ChessQueenSpawner->SpawnBarrier(); }
        break;

    case 1: // Bee
        SetActorsVisibility(BeeEnvironmentActors, true);
        SetPostProcessVolumesActive(BeePostProcessVolumes, true);
        for (UHoneyPuddleComponent* Comp : CachedHoneyPuddleComponents)
            if (IsValid(Comp)) { Comp->SpawnHoneyPuddles(); }
        break;
    }
}`},{title:"ThrowableSpawner",content:"I built AThrowableSpawner to spawn boss-specific throwable sets using a map keyed by boss index. It controls spawn timing, maximum concurrent items, and cleans up throwables when switching fights.",code:`void AThrowableSpawner::SetThrowableClassesForBoss(int32 BossIndex)
{
    ClearSpawnedThrowables();

    if (BossThrowableClasses.Contains(BossIndex))
    {
        CurrentThrowableClasses = BossThrowableClasses[BossIndex].Throwables;
        UE_LOG(LogTemp, Log, TEXT("ThrowableSpawner: Updated throwable classes for BossIndex %d"), BossIndex);
        ResetSpawnTimer();
    }
}

void AThrowableSpawner::SpawnThrowable()
{
    if (SpawnedThrowables.Num() >= MaxConcurrentThrowables)
    {
        ResetSpawnTimer();
        return;
    }

    const int32 RandomIndex = FMath::RandRange(0, CurrentThrowableClasses.Num() - 1);
    TSubclassOf<AActor> SelectedClass = CurrentThrowableClasses[RandomIndex];

    AActor* Spawned = GetWorld()->SpawnActor<AActor>(
        SelectedClass, GetRandomSpawnLocation(), FRotator::ZeroRotator);

    if (Spawned)
    {
        SpawnedThrowables.Add(Spawned);
        Spawned->OnDestroyed.AddDynamic(this, &AThrowableSpawner::OnThrowableDestroyed);
    }

    ResetSpawnTimer();
}`},{title:"Level Hazards (Honey Puddle)",content:"For the Bee Queen arena, I implemented honey puddles that slow the player on overlap. The system tracks original speeds per character and restores them safely on exit and on actor cleanup.",code:`void AHoneyPuddle::OnOverlapBegin(UPrimitiveComponent*, AActor* OtherActor,
    UPrimitiveComponent*, int32, bool, const FHitResult&)
{
    if (ACharacter* Char = Cast<ACharacter>(OtherActor))
    {
        if (UCharacterMovementComponent* MoveComp = Char->GetCharacterMovement())
        {
            if (!OverlappingCharacters.Contains(Char))
            {
                const float OriginalSpeed = MoveComp->MaxWalkSpeed;
                OverlappingCharacters.Add(Char, OriginalSpeed);
                MoveComp->MaxWalkSpeed = OriginalSpeed * SlowSpeedMultiplier;
            }
        }
    }
}

void AHoneyPuddle::EndPlay(const EEndPlayReason::Type EndPlayReason)
{
    for (auto& Elem : OverlappingCharacters)
    {
        if (ACharacter* Char = Elem.Key)
            if (auto* MoveComp = Char->GetCharacterMovement())
                MoveComp->MaxWalkSpeed = Elem.Value;
    }
    OverlappingCharacters.Empty();

    Super::EndPlay(EndPlayReason);
}`}]},{id:"whisper-of-seasons",title:"Whisper of Seasons",description:"Whisper of Seasons is a serene adventure game about harmony, connection, and the beauty of a world discovering its voice once more.",contributionSummary:"Gameplay & Systems Programmer – AI behaviours, gameplay tools, Puzzle",image:Qh,homeImage:$h,time:"4 weeks",engine:"Unreal Engine 5.4",language:"C++",versionControl:"Perforce",externalLink:"https://dullyskull.itch.io/whisper-of-seasons",gallery:[om,lm,im,am],video:"https://www.youtube.com/embed/QwHXWaCSoDk",contributions:["Modular environmental puzzle system (Zen Garden)","Dynamic wildlife spawning & AI","Boids-based flocking simulation (Fish)","Companion AI system (Fox)","Procedural-content-aware design"],techOverview:"Built in Unreal Engine 5.4, using C++ for all core gameplay, AI, and simulation systems, with Blueprints used only for designer-facing configuration and iteration. My work focused on procedural gameplay systems, environmental puzzles, wildlife AI, boids-based flocking simulation, and companion AI, all designed to work reliably in a procedurally generated world.",deepDives:[{title:"Zen Garden Puzzle System",content:"I implemented a modular environmental puzzle system inspired by Zen garden mechanics. The puzzle is designed to function independently of level layout, making it safe to use in procedurally generated environments.",code:`// ZenGardenPuzzle.cpp
// The puzzle actor acts as the single source of truth.
// It auto-registers nearby stones and snap points so the puzzle
// can be placed safely in procedurally generated areas.

void AZenGardenPuzzle::GatherPartsIfNeeded()
{
    if (!bAutoRegisterInRadius) return;

    const FVector Center = GetActorLocation();
    const float RadiusSq = AutoRegisterRadius * AutoRegisterRadius;

    TArray<AActor*> FoundStones;
    TArray<AActor*> FoundSockets;

    UGameplayStatics::GetAllActorsOfClass(this, AZenStone::StaticClass(), FoundStones);
    UGameplayStatics::GetAllActorsOfClass(this, AZenSnapPoint::StaticClass(), FoundSockets);

    Stones.Empty();
    for (AActor* A : FoundStones)
        if (A && FVector::DistSquared(Center, A->GetActorLocation()) <= RadiusSq)
            Stones.Add(Cast<AZenStone>(A));

    SnapPoints.Empty();
    for (AActor* A : FoundSockets)
        if (A && FVector::DistSquared(Center, A->GetActorLocation()) <= RadiusSq)
            SnapPoints.Add(Cast<AZenSnapPoint>(A));
}

// ZenGardenPuzzle.cpp
// Puzzle completion is validated by checking the occupancy
// state of each snap point. No stone logic is handled here,
// keeping responsibilities clearly separated.

bool AZenGardenPuzzle::IsPuzzleComplete() const
{
    for (auto Sock : SnapPoints)
        if (!Sock.IsValid() || !Sock->IsOccupied())
            return false;

    return true;
}

// ZenSnapPoint.cpp
// Snap points are responsible for validating and tracking
// whether a stone is placed correctly. Once occupied, they
// notify the owning puzzle to re-check completion state.

void AZenSnapPoint::Occupy(AZenStone* Stone)
{
    Occupant = Stone;
    NotifyPuzzle();
}

// ZenStone.cpp
// When the player releases a stone, it evaluates all nearby
// snap points and chooses the closest valid one within range.
// The stone never decides puzzle completion — it only snaps.

void AZenStone::EndGrab(bool bForceDrop)
{
    if (!bIsHeld) return;

    AZenSnapPoint* Target = nullptr;
    TArray<AActor*> Overlaps;
    SnapProbe->GetOverlappingActors(Overlaps, AZenSnapPoint::StaticClass());

    float BestDistanceSq = TNumericLimits<float>::Max();
    for (AActor* A : Overlaps)
    {
        AZenSnapPoint* S = Cast<AZenSnapPoint>(A);
        if (S && S->CanAcceptStone(this))
        {
            float DistSq = FVector::DistSquared(GetActorLocation(), S->GetAnchorLocation());
            if (DistSq < BestDistanceSq)
            {
                BestDistanceSq = DistSq;
                Target = S;
            }
        }
    }

    if (Target)
        SnapToSocket(Target);

    bIsHeld = false;
    SetActorTickEnabled(false);
}`},{title:"Wildlife Spawning & Animal AI",content:"I implemented a dynamic wildlife system that populates the world without relying on hand-placed actors. It includes a WildLifeSpawner for population logic and specific AI controllers for different animals.",code:`// WILDLIFE SPAWNING & ANIMAL AI

// STREAMING: Only keep nearby cells active (scales to large worlds)
void AWildLifeSpawner::Tick(float DeltaSeconds)
{
	// Update at fixed intervals to avoid heavy work every frame.
	TimeSinceLastUpdate += DeltaSeconds;
	if (TimeSinceLastUpdate < UpdateInterval) return;
	TimeSinceLastUpdate = 0.f;

	UpdateStreaming();
}

void AWildLifeSpawner::UpdateStreaming()
{
	// Convert player position to a grid cell.
	const FCellCoord PlayerCell = WorldToCell(PlayerPawn->GetActorLocation());

	// Build the set of "wanted" cells in range of the player.
	TSet<FCellCoord> WantedCells;
	for (int32 dx = -ActiveRadiusCells; dx <= ActiveRadiusCells; ++dx)
	for (int32 dy = -ActiveRadiusCells; dy <= ActiveRadiusCells; ++dy)
	{
		const FCellCoord C(PlayerCell.X + dx, PlayerCell.Y + dy);
		if (IsWithinActiveRadius(PlayerCell, C))
			WantedCells.Add(C);
	}

	// Ensure wanted cells exist + have animals.
	for (const FCellCoord& C : WantedCells)
	{
		EnsureCellInitialized(C);
		SpawnMissingForCell(C);
	}

	// Despawn cells far away and save their state.
	DespawnFarCells(WantedCells, PlayerCell);
}

// DETERMINISTIC CELL GENERATION: Herds/groups are generated from Seed + Cell
void AWildLifeSpawner::EnsureCellInitialized(const FCellCoord& C)
{
	FWildlifeCellData& Cell = Cells.FindOrAdd(C);
	if (Cell.bInitialized) return;

	// Deterministic RNG per cell => stable PCG behavior.
	FRandomStream RNG;
	RNG.Initialize(HashCombine(BaseSeed, HashCombine(::GetTypeHash(C.X), ::GetTypeHash(C.Y))));

	GenerateCellWithHerds(C, Cell, RNG);

	// Save the initial snapshot so re-enter behavior is consistent.
	Cell.InitialAnimals = Cell.SavedAnimals;
	Cell.bInitialized = true;
}

void AWildLifeSpawner::GenerateCellWithHerds(const FCellCoord& C, FWildlifeCellData& Cell, FRandomStream& RNG)
{
	// Herd system:
	// - Season filtering
	// - Group count per cell
	// - Group center + members spread in radius
	int32 Remaining = MaxAnimalsPerCell;
	TArray<FWildlifeSavedAnimal> Generated;

	for (const FHerdDefinition& Herd : Herds)
	{
		if (!HerdAllowedInSeason(Herd) || Herd.Species.Num() == 0) continue;

		const int32 Groups = RNG.RandRange(Herd.MinGroupsPerCell, Herd.MaxGroupsPerCell);

		for (int32 g = 0; g < Groups && Remaining > 0; ++g)
		{
			FTransform GroupCenterXf;
			if (!FindValidSpawnTransform(CellToWorldCenter(C), RNG, GroupCenterXf))
				continue;

			const int32 Count = RNG.RandRange(Herd.MinGroupSize, Herd.MaxGroupSize);

			for (int32 i = 0; i < Count && Remaining > 0; ++i)
			{
				FTransform MemberXf;
				FindValidSpawnNear(GroupCenterXf.GetLocation(), Herd.GroupRadius, RNG, MemberXf);

				// Guarantee the member stays in the intended cell.
				if (!(WorldToCell(MemberXf.GetLocation()) == C)) continue;

				FWildlifeSavedAnimal A;
				A.Class = PickRandomFrom(Herd.Species, RNG);
				A.Transform = MemberXf;
				A.LocalId = Generated.Num();

				if (IsValid(A.Class))
				{
					Generated.Add(A);
					--Remaining;
				}
			}
		}
	}

	Cell.SavedAnimals = MoveTemp(Generated);
}

// PLACEMENT VALIDATION: Ground trace + slope limit + optional nav projection
bool AWildLifeSpawner::FindValidSpawnTransform(const FVector& CellCenter, FRandomStream& RNG, FTransform& OutXform) const
{
	// Tries multiple candidates inside the cell until we find valid ground.
	for (int32 i = 0; i < MaxLocationTries; ++i)
	{
		FVector Candidate(CellCenter.X + RNG.FRandRange(-CellSize * 0.5f, CellSize * 0.5f),
		                  CellCenter.Y + RNG.FRandRange(-CellSize * 0.5f, CellSize * 0.5f),
		                  CellCenter.Z + TraceHeight);

		FVector GroundLoc, GroundNormal;
		if (!ProjectToGround(Candidate, GroundLoc, GroundNormal)) continue;

		// Reject steep slopes.
		if (GroundNormal.Z < MinGroundNormalZ) continue;

		// Ensure reachable nav location (optional).
		FVector FinalLoc = GroundLoc;
		if (bRequireNavLocation && !NavProjectIfNeeded(FinalLoc, FinalLoc)) continue;

		OutXform = FTransform(FRotator::ZeroRotator, FinalLoc);
		return true;
	}
	return false;
}

// SPAWN + AI SAFETY: Ensure controller + movement mode after spawn
void AWildLifeSpawner::SpawnMissingForCell(const FCellCoord& C)
{
	FWildlifeCellData& Cell = Cells.FindOrAdd(C);

	for (FWildlifeSavedAnimal& S : Cell.SavedAnimals)
	{
		// Spawn until Live count matches saved data for the cell.
		if (Cell.LiveAnimals.Num() >= Cell.SavedAnimals.Num()) break;
		if (!IsValid(S.Class)) continue;

		FActorSpawnParameters Params;
		Params.SpawnCollisionHandlingOverride =
			ESpawnActorCollisionHandlingMethod::AdjustIfPossibleButAlwaysSpawn;

		APawn* NewAnimal = GetWorld()->SpawnActor<APawn>(S.Class, S.Transform, Params);
		if (!NewAnimal) continue;

		// Ensure the pawn is possessed and can move right away.
		if (bForceSpawnDefaultController && !NewAnimal->GetController())
			NewAnimal->SpawnDefaultController();

		if (bForceCharacterWalking)
			if (ACharacter* AsChar = Cast<ACharacter>(NewAnimal))
				if (UCharacterMovementComponent* Move = AsChar->GetCharacterMovement())
					if (Move->MovementMode == MOVE_None)
						Move->SetMovementMode(MOVE_Walking);

		// Track in live set; removed on destroy.
		NewAnimal->OnDestroyed.AddUniqueDynamic(this, &AWildLifeSpawner::OnAnimalDestroyed);
		Cell.LiveAnimals.Add(NewAnimal);
	}
}

// ANIMAL AI EXAMPLE A: Bunny “brain” state machine + threat reaction
void ABunnyAIController::Tick(float dt)
{
	// Bunny AI is a lightweight state machine:
	// Idle -> Explore -> Forage -> Sleep, with interrupt to Flee when threatened.
	UpdateStateFromThreat(dt);
	DriveState(dt);
}

void ABunnyAIController::OnPerceptionUpdated(AActor* Actor, FAIStimulus Stimulus)
{
	// Treat actors tagged "Predator" as threats.
	if (Actor && Actor->ActorHasTag(TEXT("Predator")) && Stimulus.WasSuccessfullySensed())
	{
		LastThreat = Actor;
		ThreatLevel = 1.f;
	}
}

void ABunnyAIController::MoveSmartTo(const FVector& Target, float dt)
{
	// Hybrid movement:
	// - NavMesh pathing when possible
	// - Fallback steering when off-nav (keeps behavior stable in uneven terrain/PCG)
	FNavLocation OnNav;
	const UNavigationSystemV1* Nav = UNavigationSystemV1::GetCurrent(GetWorld());

	if (Nav && Nav->ProjectPointToNavigation(Target, OnNav))
	{
		MoveToLocation(OnNav.Location, 50.f, true, true, true, false, 0);
	}
	else if (Bunny)
	{
		Bunny->SteeringFallbackTo(Target, dt);
	}
}

// ANIMAL AI EXAMPLE B: Doe perception flee + herd panic propagation
void ADoeAIController::OnTargetPerceptionUpdated(AActor* Actor, FAIStimulus Stimulus)
{
	// Doe flees from the player when sight senses the player successfully.
	if (!Stimulus.WasSuccessfullySensed()) return;
	if (!IsPlayerActor(Actor)) return;

	BeginFleeFrom(Actor->GetActorLocation());
}

void ADoeAIController::BeginFleeFrom(const FVector& ThreatLocation)
{
	// Run away + alert nearby does so they flee too.
	const FVector SelfLoc = ControlledPawn->GetActorLocation();
	const FVector AwayDir = (SelfLoc - ThreatLocation).GetSafeNormal2D();
	const FVector Desired = SelfLoc + AwayDir * FleeDistance;

	FVector Dest;
	if (!FindRandomReachablePosition(Desired, 400.f, Dest)) return;

	BroadcastPanic(ThreatLocation);
	MoveToLocation(Dest, AcceptanceRadius, true, true, true, false, nullptr, true);
}`},{title:"Boids & Flocking Simulation",content:"I implemented a boid-based flocking system for aquatic life, creating emergent behavior rather than scripted paths. It includes a FishFlockManager, FishBoidSettings, and WaterFlockVolume.",code:`// BOIDS & FLOCKING SIMULATION

// DATA MODEL: Each fish is a lightweight agent + HISM instance bookkeeping
USTRUCT()
struct FBoidAgent
{
	// Each fish has only what the simulation needs (position + velocity).
	// Rendering is done via instancing (InstanceIdx + MatIdx), not individual actors.
	FVector Pos = FVector::ZeroVector;
	FVector Vel = FVector::ZeroVector;

	int32 InstanceIdx = -1;
	int32 MatIdx = 0;
};

// PERFORMANCE: Spatial hash grid for neighbors (fast flocking at 500+ agents)
void AFishFlockManager::BuildGrid()
{
	// Grid maps cell coord -> list of agent indices.
	// CellSize ~= NeighborRadius so we only check local cells (27 offsets).
	Grid.Reset();

	for (int32 i = 0; i < Agents.Num(); ++i)
	{
		const FVector P = Agents[i].Pos;
		const FIntVector Cell(
			FMath::FloorToInt(P.X / CellSize),
			FMath::FloorToInt(P.Y / CellSize),
			FMath::FloorToInt(P.Z / CellSize)
		);

		Grid.FindOrAdd(Cell).Add(i);
	}
}

// BOID STEERING: Cohesion + Alignment + Separation (emergent movement)
FVector AFishFlockManager::BoidSteer_Grid(int32 Index) const
{
	const FBoidAgent& A = Agents[Index];

	// Accumulate neighbor info from nearby grid cells instead of scanning every fish.
	FVector CohesionSum = FVector::ZeroVector;
	FVector AlignmentSum = FVector::ZeroVector;
	FVector SeparationSum = FVector::ZeroVector;
	int32 NeighborCount = 0;

	const FIntVector MyCell(
		FMath::FloorToInt(A.Pos.X / CellSize),
		FMath::FloorToInt(A.Pos.Y / CellSize),
		FMath::FloorToInt(A.Pos.Z / CellSize)
	);

	for (const FIntVector& Off : NeighborCellOffsets) // 27 cells
	{
		const FIntVector C = MyCell + Off;
		const TArray<int32>* Indices = Grid.Find(C);
		if (!Indices) continue;

		for (int32 j : *Indices)
		{
			if (j == Index) continue;
			const FBoidAgent& B = Agents[j];

			const FVector To = B.Pos - A.Pos;
			const float DistSq = To.SizeSquared();
			if (DistSq > NeighborRadius * NeighborRadius) continue;

			// Cohesion: steer toward center of neighbors
			CohesionSum += B.Pos;

			// Alignment: steer toward average neighbor velocity
			AlignmentSum += B.Vel;

			// Separation: push away from very close neighbors
			if (DistSq < SeparationRadius * SeparationRadius && DistSq > 1.f)
				SeparationSum -= To / FMath::Sqrt(DistSq);

			NeighborCount++;
		}
	}

	if (NeighborCount <= 0)
	{
		// No neighbors nearby => wander/goal or bounds is what drives motion.
		return FVector::ZeroVector;
	}

	const FVector CohesionDir = ((CohesionSum / NeighborCount) - A.Pos).GetSafeNormal();
	const FVector AlignmentDir = (AlignmentSum / NeighborCount).GetSafeNormal();
	const FVector SeparationDir = SeparationSum.GetSafeNormal();

	// Combine weighted steering.
	FVector Steer =
		CohesionDir * CohesionWeight +
		AlignmentDir * AlignmentWeight +
		SeparationDir * SeparationWeight;

	return Steer;
}

// KINEMATICS: Clamp acceleration + speed to keep fish motion stable
FVector AFishFlockManager::LimitVector(const FVector& V, float MaxLen)
{
	// Utility used to clamp acceleration and velocity magnitudes.
	const float LenSq = V.SizeSquared();
	if (LenSq <= MaxLen * MaxLen) return V;
	return V.GetSafeNormal() * MaxLen;
}

// WORLD CONSTRAINTS: Water volume clamp (keeps fish inside playable water)
bool AWaterFlockVolume::ConstrainInside(FVector& InOutPoint) const
{
	// Keeps simulated fish inside a water box (expanded inward to avoid edge jitter).
	const FBox Box = Bounds->Bounds.GetBox().ExpandBy(FVector(-10.f));

	InOutPoint.X = FMath::Clamp(InOutPoint.X, Box.Min.X, Box.Max.X);
	InOutPoint.Y = FMath::Clamp(InOutPoint.Y, Box.Min.Y, Box.Max.Y);
	InOutPoint.Z = FMath::Clamp(InOutPoint.Z, Box.Min.Z, Box.Max.Z);

	return true;
}

float AWaterFlockVolume::GetSurfaceZ() const
{
	// Supports fixed water surface height (designer control).
	if (bUseFixedSurfaceZ) return SurfaceZ;
	return Bounds ? Bounds->GetComponentLocation().Z : 0.f;
}

// DESIGNER-FACING SETTINGS: Boid tuning as a DataAsset
UCLASS(BlueprintType)
class UFishBoidSettings : public UDataAsset
{
	// Settings object allows designers to tune flock feel without touching code.
	// Also supports performance limits (MaxAgentsUpdatedPerFrame) and LOD distances.
public:
	float CohesionWeight = 0.8f;
	float AlignmentWeight = 0.6f;
	float SeparationWeight = 1.2f;
	float NeighborRadius = 350.f;
	float MaxSpeed = 280.f;

	int32 MaxAgentsUpdatedPerFrame = 800;
};

// TOOLING: Editor marker generation along water edge spline
#if WITH_EDITOR
void AWaterEdgePath::BuildMarkers()
{
	// Generates evenly spaced marker points along a spline (with jitter + bank offset).
	// Used for debugging / placement / potential fish feeding or boundary logic.
	MarkerPoints.Reset();
	MarkerViz->ClearInstances();

	const float SplineLen = Spline->GetSplineLength();
	const int32 Steps = FMath::Max(1, FMath::FloorToInt(SplineLen / FMath::Max(PointSpacing, 5.f)));

	for (int32 i = 0; i <= Steps; i++)
	{
		const float Dist = (SplineLen * i) / Steps;
		const FVector Pos = Spline->GetLocationAtDistanceAlongSpline(Dist, ESplineCoordinateSpace::World);

		const FVector Tangent = Spline->GetTangentAtDistanceAlongSpline(Dist, ESplineCoordinateSpace::World).GetSafeNormal();
		const FVector Right = FVector(-Tangent.Y, Tangent.X, 0.f).GetSafeNormal();

		// BankOffset pushes points slightly into the water + jitter adds organic variation.
		const FVector J(FMath::FRandRange(-Jitter, Jitter), FMath::FRandRange(-Jitter, Jitter), 0.f);
		const FVector P = Pos + Right * BankOffset + J;

		MarkerPoints.Add(P);

		if (MarkerMesh)
			MarkerViz->AddInstance(FTransform(FRotator::ZeroRotator, P, FVector(0.25f)));
	}

	MarkerViz->MarkRenderStateDirty();
}
#endif`},{title:"Companion AI System (Fox)",content:"I implemented a companion AI system designed to feel alive and supportive without requiring direct player control. It features clear separation between character and AI logic, waypoint-based navigation, and predictable behavior.",code:`// COMPANION AI SYSTEM (FOX)

// FoxWaypoint: simple “interaction radius” marker used as world guidance points
AFoxWaypoint::AFoxWaypoint()
{
	PrimaryActorTick.bCanEverTick = false;

	// Visual-only sphere so designers can see the waypoint radius in editor.
	RadiusViz = CreateDefaultSubobject<USphereComponent>(TEXT("SphereComponent"));
	SetRootComponent(RadiusViz);

	RadiusViz->InitSphereRadius(InteractionRadius);
	RadiusViz->SetCollisionEnabled(ECollisionEnabled::NoCollision);
}

// FoxCharacter: character holds designer-set collectables list, AI auto-possesses
AFoxCharacter::AFoxCharacter()
{
	// Guarantees the FoxAIController possesses the fox when placed/spawned.
	AIControllerClass = AFoxAIController::StaticClass();
	AutoPossessAI = EAutoPossessAI::PlacedInWorldOrSpawned;

	// Movement tuned for AI-driven companion movement (smooth + non-snappy).
	bUseControllerRotationYaw = false;
	if (UCharacterMovementComponent* Move = GetCharacterMovement())
	{
		Move->bOrientRotationToMovement = true;
		Move->MaxWalkSpeed = 400.f;
	}
}

void AFoxCharacter::BeginPlay()
{
	Super::BeginPlay();

	// Enables local avoidance so the fox slides around obstacles/characters.
	if (UCharacterMovementComponent* Move = GetCharacterMovement())
	{
		Move->SetAvoidanceEnabled(true);
	}
}

// FoxAIController: main behavior loop via timers (cheap + predictable)
void AFoxAIController::BeginPlay()
{
	Super::BeginPlay();

	// Timer-driven updates keep behavior consistent and avoid heavy Tick logic.
	GetWorldTimerManager().SetTimer(LeadTimer,  this, &AFoxAIController::TickLead,             UpdateInterval, true, 0.2f);
	GetWorldTimerManager().SetTimer(WanderTimer,this, &AFoxAIController::PickNewWanderTarget,  WanderRefreshInterval, true, 0.1f);
	GetWorldTimerManager().SetTimer(StillCheckTimer,this,&AFoxAIController::TickCheckPlayerStill, StillCheckInterval, true, 0.2f);
	GetWorldTimerManager().SetTimer(StuckCheckTimer,this,&AFoxAIController::CheckIfStuckOrTooFar, StuckCheckInterval, true, 1.0f);

	// Cache original materials so teleport dissolve can temporarily override them.
	if (APawn* Fox = GetPawn())
	{
		if (USkeletalMeshComponent* Mesh = Fox->FindComponentByClass<USkeletalMeshComponent>())
		{
			for (int32 i = 0; i < Mesh->GetNumMaterials(); i++)
				OriginalFoxMaterials.Add(Mesh->GetMaterial(i));
		}
		LastStuckCheckPosition = Fox->GetActorLocation();
	}
}

// Lead Behavior: compute a destination in front of player toward waypoint + wander offset
void AFoxAIController::TickLead()
{
	APawn* Fox = GetPawn();
	if (!Fox) return;

	// When teleporting, we only drive dissolve + anim updates (no movement).
	if (bIsTeleporting)
	{
		TickTeleportDissolve();
		UpdateAnimBP();
		return;
	}

	// Rest flow overrides normal movement until we reach the rest spot.
	if (bMovingToRest)
	{
		const float Dist = FVector::Dist(Fox->GetActorLocation(), RestTargetLocation);
		if (Dist > 100.f) MoveToLocation(RestTargetLocation, 10.f, true);
		else ArriveAtRestTarget();

		UpdateAnimBP();
		return;
	}

	// Fully resting = freeze movement, keep animations updated.
	if (bIsResting)
	{
		if (UCharacterMovementComponent* Move = Fox->FindComponentByClass<UCharacterMovementComponent>())
		{
			Move->StopMovementImmediately();
			Move->SetMovementMode(MOVE_None);
		}
		UpdateAnimBP();
		return;
	}

	// Smooth wander offset so companion doesn’t jitter side-to-side.
	CurrentWander = FMath::Vector2DInterpTo(CurrentWander, TargetWander, UpdateInterval, WanderLerpSpeed);

	FVector Dest;
	if (!ComputeLeadPoint(Dest)) return;

	// MoveTo keeps navigation robust, AcceptableRadius prevents micro-corrections.
	MoveToLocation(Dest, AcceptableRadius, true);

	UpdateAnimBP();
}

bool AFoxAIController::ComputeLeadPoint(FVector& OutPoint)
{
	ACharacter* Player = UGameplayStatics::GetPlayerCharacter(GetWorld(), 0);
	APawn* Fox = GetPawn();
	if (!Player || !Fox) return false;

	const FVector PlayerLoc = Player->GetActorLocation();

	// Default lead direction = player forward.
	// If we have a waypoint, lead direction becomes "player -> waypoint".
	FVector DirToGoal = Player->GetActorForwardVector();
	if (TargetWaypoint)
	{
		const FVector ToWp = TargetWaypoint->GetActorLocation() - PlayerLoc;
		if (!ToWp.IsNearlyZero()) DirToGoal = ToWp.GetSafeNormal();
	}

	// Build a stable right vector on ground plane for lateral offsets.
	const FVector Up = FVector::UpVector;
	FVector Right = FVector::CrossProduct(Up, DirToGoal).GetSafeNormal();
	if (Right.IsNearlyZero()) Right = FVector::RightVector;

	FVector Desired;

	// Playful mode = orbit around player to add personality.
	if (bIsPlayful)
	{
		OrbitAngleDeg += OrbitAngularSpeedDeg * UpdateInterval;
		const float A = FMath::DegreesToRadians(OrbitAngleDeg);

		const FVector OrbitOffset =
			DirToGoal * FMath::Cos(A) * OrbitRadius +
			Right     * FMath::Sin(A) * OrbitRadius;

		Desired = PlayerLoc + OrbitOffset;
		TryPlayfulJump();
	}
	else
	{
		// Normal mode = stay in front of player, plus smoothed wander offsets.
		Desired = PlayerLoc + DirToGoal * LeadDistance;
		Desired += DirToGoal * CurrentWander.X;
		Desired += Right     * CurrentWander.Y;
	}

	// Leash keeps fox from drifting too far from player (avoids losing companion).
	{
		const FVector Offset = Desired - PlayerLoc;
		const float Dist = Offset.Size();
		if (Dist > MaxLeash && Dist > KINDA_SMALL_NUMBER)
			Desired = PlayerLoc + (Offset / Dist) * MaxLeash;
	}

	// Project to NavMesh so MoveTo always gets a valid reachable point.
	if (UNavigationSystemV1* Nav = UNavigationSystemV1::GetCurrent(GetWorld()))
	{
		FNavLocation Projected;
		if (Nav->ProjectPointToNavigation(Desired, Projected, NavQueryExtent))
		{
			Desired = Projected.Location;
		}
		else
		{
			// Fallback around the goal direction if projection fails.
			const FVector TryA = PlayerLoc + (DirToGoal + Right).GetSafeNormal() * FMath::Min(LeadDistance, MaxLeash);
			const FVector TryB = PlayerLoc + (DirToGoal - Right).GetSafeNormal() * FMath::Min(LeadDistance, MaxLeash);

			if (Nav->ProjectPointToNavigation(TryA, Projected, NavQueryExtent)) Desired = Projected.Location;
			else if (Nav->ProjectPointToNavigation(TryB, Projected, NavQueryExtent)) Desired = Projected.Location;
			else Desired = PlayerLoc; // stand by player as last resort
		}
	}

	OutPoint = Desired;
	return true;
}

// Player-idle personality: cycle into Rest or Playful if player stands still
void AFoxAIController::TickCheckPlayerStill()
{
	ACharacter* Player = UGameplayStatics::GetPlayerCharacter(GetWorld(), 0);
	if (!Player) return;

	const bool bStanding = Player->GetVelocity().Size2D() < PlayerStillSpeedThreshold;

	// When player is idle, we start a periodic “still cycle” (rest or playful).
	if (bStanding)
	{
		if (!GetWorldTimerManager().IsTimerActive(StillCycleTimer))
		{
			GetWorldTimerManager().SetTimer(
				StillCycleTimer, this, &AFoxAIController::OnStillCycle,
				StillCyclePeriod, true, StillCyclePeriod);
		}
	}
	else
	{
		// Player moved => stop idle behavior immediately.
		GetWorldTimerManager().ClearTimer(StillCycleTimer);
		if (bIsPlayful) EndPlayful();
		if (bIsResting || bMovingToRest) { bMovingToRest = false; WakeUpFromRest(); }
	}
}

void AFoxAIController::OnStillCycle()
{
	if (bIsPlayful || bIsResting) return;

	// Randomize between resting and playful burst for variety.
	if (FMath::FRand() < 0.5f)
	{
		StartResting();
	}
	else
	{
		bIsPlayful = true;
		OrbitAngleDeg = 0.f;
		GetWorldTimerManager().SetTimer(PlayfulTimer, this, &AFoxAIController::EndPlayful, PlayfulDuration, false);
	}
}

// Self-recovery: teleport if too far or stuck + dissolve FX for polish
void AFoxAIController::CheckIfStuckOrTooFar()
{
	APawn* Fox = GetPawn();
	ACharacter* Player = UGameplayStatics::GetPlayerCharacter(GetWorld(), 0);
	if (!Fox || !Player) return;

	const float DistToPlayer = FVector::Dist(Fox->GetActorLocation(), Player->GetActorLocation());

	// Hard fail-safe if companion falls behind or gets blocked.
	if (DistToPlayer > TeleportDistance)
	{
		TeleportToPlayer();
		return;
	}

	// Detect “stuck” when player moves but fox position barely changes.
	const float Moved = FVector::Dist(Fox->GetActorLocation(), LastStuckCheckPosition);
	const bool bPlayerMoving = Player->GetVelocity().Size2D() > PlayerStillSpeedThreshold;

	if (bPlayerMoving && Moved < StuckDistanceThreshold && DistToPlayer > AcceptableRadius * 2.0f)
	{
		TeleportToPlayer();
		return;
	}

	LastStuckCheckPosition = Fox->GetActorLocation();
}

void AFoxAIController::TeleportToPlayer()
{
	APawn* Fox = GetPawn();
	if (!Fox) return;

	FVector TeleportLoc;
	if (!FindTeleportLocation(TeleportLoc)) return;

	// Spawn VFX at old + new positions for readability.
	if (TeleportEffect)
		UNiagaraFunctionLibrary::SpawnSystemAtLocation(GetWorld(), TeleportEffect, Fox->GetActorLocation());

	Fox->SetActorLocation(TeleportLoc);

	if (TeleportEffect)
		UNiagaraFunctionLibrary::SpawnSystemAtLocation(GetWorld(), TeleportEffect, TeleportLoc);

	// Reset movement + cancel “cute states” so we re-sync cleanly post-teleport.
	if (UCharacterMovementComponent* Move = Fox->FindComponentByClass<UCharacterMovementComponent>())
		Move->StopMovementImmediately();

	if (bIsResting || bMovingToRest) { bMovingToRest = false; WakeUpFromRest(); }
	if (bIsPlayful) EndPlayful();

	StartTeleportDissolve();
}

void AFoxAIController::StartTeleportDissolve()
{
	APawn* Fox = GetPawn();
	if (!Fox || !DissolveMaterial) return;

	USkeletalMeshComponent* Mesh = Fox->FindComponentByClass<USkeletalMeshComponent>();
	if (!Mesh) return;

	// Swap to a dynamic dissolve material, then animate DissolveAmount back to visible.
	FoxDissolveMaterial = UMaterialInstanceDynamic::Create(DissolveMaterial, this);
	for (int32 i = 0; i < Mesh->GetNumMaterials(); i++)
		Mesh->SetMaterial(i, FoxDissolveMaterial);

	FoxDissolveMaterial->SetScalarParameterValue(FName("DissolveAmount"), 1.0f); // start invisible
	bIsTeleporting = true;
	TeleportDissolveTimer = 0.f;
}`}]},{id:"plora",title:"Plora",description:"Plora is an endless-diver game where you pilot a repair drone to try to keep your spaceship-turned-submarine fueled and in good repair while you explore the depths of the ocean planet.",contributionSummary:"UI Programmer – Gameplay UI systems, HUD logic, menu flow and feedback",image:Xh,homeImage:qh,time:"3 weeks",engine:"Unity",language:"C#",versionControl:"GitHub",externalLink:"https://futuregames.itch.io/plora",video:"https://www.youtube.com/embed/1oeAm2Fegz4",gallery:[sm,um,cm,dm,fm,pm],contributions:["UI Navigation & Interaction System","Dialogue System","Responsive and smooth UI interactions","Clear separation between UI logic and presentation","Player-friendly navigation across multiple UI categories","Dialogue systems designed for easy iteration and narrative expansion"],contributionsGif:vm,techOverview:"Built in Unity using C# for all UI logic and dialogue flow systems, with Unity UI (UGUI) used for layout and visual presentation. My work focused exclusively on UI systems and dialogue mechanics, with a strong emphasis on responsive interactions and clear separation of concerns.",deepDives:[{title:"UI Navigation & Interaction System",content:"I designed and implemented the entire UI flow for the game, focusing on making all menus and screens feel responsive, readable, and smooth to navigate. The goal was to ensure that the player could move seamlessly between different UI categories without friction, confusion, or visual stutter. A central UI Manager controls which screens are active, while individual UI panels handle their own visuals and input states.",images:[hm,mm,gm,ym],code:`// --- MainMenu.cs ---
using System;
using System.Collections.Generic;
using DG.Tweening;
using Lumina.Essentials.Modules;
using TMPro;
using UnityEngine;
using UnityEngine.SceneManagement;

public class MainMenu : MonoBehaviour
{
    HighScoreManager highScoreManager;

    [Header("UI Elements")]
    [SerializeField]
    GameObject mainMenuPanel;
    public GameObject MainMenuPanel => mainMenuPanel;

    [SerializeField]
    GameObject pausePanel;
    public GameObject PausePanel => pausePanel;

    [SerializeField]
    GameObject gameOverPanel;
    public TextMeshProUGUI GameOverReasonText => gameOverReasonText;

    [SerializeField]
    TextMeshProUGUI gameOverReasonText;
    public GameObject GameOverPanel => gameOverPanel;

    [SerializeField]
    GameObject skipTutorialButton;


    [SerializeField]
    GameObject gradient;
    public GameObject Gradient => gradient;

    [SerializeField]
    GameObject scoreUI;
    public GameObject ScoreUI => scoreUI;

    [Header("Pause UIs")]
    [SerializeField]
    List<GameObject> pauseUIs;
    public List<GameObject> PauseUIs => pauseUIs;


    public GameObject SkipTutorialButton => skipTutorialButton;

    public void SetGameOverReason(string reason = "Hull Destroyed")
    {
        if (gameOverReasonText != null)
        {
            gameOverReasonText.text = reason;
        }
        else
        {
            Debug.LogWarning("GameOverReasonText is not assigned in the MainMenu!");
        }
    }

    public void OnBackButtonPressed()
    {
        switch (GameManager.Instance.state)
        {
            case GameManager.GameState.Menu:
                Debug.Log("Back button pressed in Menu state");
                mainMenuPanel.SetActive(true);
                pausePanel.SetActive(false);
                break;

            case GameManager.GameState.Pause:
                Debug.Log("Back button pressed in Play state");
                pausePanel.SetActive(true);
                mainMenuPanel.SetActive(false);
                GameManager.Instance.GameStateChanger(GameManager.GameState.Pause);
                break;

            default:
                break;
        }
    }
}

// --- OptionsMenu.cs ---
using UnityEngine;
using UnityEngine.Audio;
using UnityEngine.UI;
using TMPro;
using System.Collections.Generic;

public class OptionsMenu : MonoBehaviour
{ 
    //Audio
    [Header("Audio")]
    public TMP_Text masterLabel, musicLabel, sfxLabel;
    public Slider masterSlider, musicSlider, sfxSlider;

    //Resolution
    public List<Resolution> resolutions;

    [Header("Resolution")]
    public TMP_Dropdown resolutionDropdown;
    public Toggle fullscreenToggle;
    public Toggle vsyncToggle;

    //Graphics
    [Header("Graphics")]
    public TMP_Dropdown graphicsDropdown;
    public Slider brightnessSlider;
    public Toggle shadowsToggle;

    // UI Contexts
    [Header("Settings UI Contexts")]
    [SerializeField] GameObject mainMenuSettingsUI;
    [SerializeField] GameObject pauseMenuSettingsUI;

    private GameObject currentSettingsUI;

    void Start()
    {
        InitializeSettings();
    }

    void InitializeSettings()
    {
        // Audio Settings
        // Master Volume
        masterSlider.value = PlayerPrefs.GetFloat("MasterVol");
        masterLabel.text = Mathf.RoundToInt(masterSlider.value * 100).ToString();
        SetMasterMixerVolume(masterSlider.value);

        // Music Volume
        musicSlider.value = PlayerPrefs.GetFloat("MusicVol");
        musicLabel.text = Mathf.RoundToInt(musicSlider.value * 100).ToString();
        SetMusicMixerVolume(musicSlider.value);

        // SFX Volume
        sfxSlider.value = PlayerPrefs.GetFloat("SFXVol");
        sfxLabel.text = Mathf.RoundToInt(sfxSlider.value * 100).ToString();
        SetSFXMixerVolume(sfxSlider.value);

        // Resolution Settings
        resolutions = new List<Resolution>(Screen.resolutions);
        resolutionDropdown.ClearOptions();

        List<string> options = new List<string>();
        int currentResolutionIndex = 0;

        for (int i = 0; i < resolutions.Count; i++)
        {
            string option = resolutions[i].width + " x " + resolutions[i].height;
            options.Add(option);

            if (resolutions[i].width == Screen.currentResolution.width &&
                resolutions[i].height == Screen.currentResolution.height)
            {
                currentResolutionIndex = i;
            }
        }

        resolutionDropdown.AddOptions(options);
        resolutionDropdown.value = PlayerPrefs.GetInt("ResolutionIndex", currentResolutionIndex);
        resolutionDropdown.RefreshShownValue();
    }
    // ... (rest of implementation)
}

// --- ButtonHoverEffect.cs ---
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;
using TMPro;
using Unity.VisualScripting;

public class ButtonHoverEffect : MonoBehaviour, IPointerEnterHandler, IPointerExitHandler, IPointerClickHandler
{
    public TextMeshProUGUI buttonText;
    public Image leftArrow;
    public Image rightArrow;
    public Color normalColor;
    public Color hoverColor;

    bool isHovering = false;

    void Start()
    {
        leftArrow.enabled = false;
        rightArrow.enabled = false;
    }

    public void OnPointerEnter(PointerEventData eventData)
    {
        isHovering = true;
        SetHoverState(true);
    }

    public void OnPointerExit(PointerEventData eventData)
    {
        isHovering = false;
        SetHoverState(false);
    }

    public void OnPointerClick(PointerEventData eventData)
    {
        isHovering = false;
        SetHoverState(false);
    }

    void SetHoverState(bool isHovered)
    {
        buttonText.color = isHovered ? hoverColor : normalColor;
        leftArrow.enabled = isHovered;
        rightArrow.enabled = isHovered;
    }
}`},{title:"Dialogue System",content:"I implemented the game’s dialogue system, responsible for presenting narrative content to the player in a clear, engaging, and readable way. The system was built to support smooth text progression, clean transitions, and future narrative expansion without rewriting core logic. Dialogue data is structured separately from UI logic, ensuring that narrative logic and presentation never overlap unnecessarily.",code:`// --- DialogueSO.cs ---
using UnityEngine;

[CreateAssetMenu(fileName = "NewDialogue", menuName = "Scriptable Objects/DialogueSO")]
public class Dialogue : ScriptableObject
{
    [Tooltip("Array of all dialogue lines for this dialogue sequence")]
    public DialogueLine[] dialogueLines;
}

[System.Serializable]
public class DialogueLine
{
    [Tooltip("Name of the speaker for this line of dialogue")]
    public string speakerName; // Name of the speaker

    [Tooltip("Profile picture of the speaker (optional)")]
    public Texture speakerProfilePicture; // Profile picture of the speaker (optional)

    [Tooltip("The text to display for this line of dialogue")]
    [TextArea(3, 10)]
    public string dialogueText; // The text for the dialogue line

    [Tooltip("Voice-over audio clip for this line (optional)")]
    public AudioClip voiceOverClip; // VO line file (AudioClip)

    [Tooltip("Time in seconds to display this line")]
    public float timing; // Time in seconds to display this line
}

// --- DialogueManager.cs ---
using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEditor;
using UnityEngine;
using UnityEngine.UI;

public class DialogueManager : MonoBehaviour
{
    [Header("UI References")]
    [Tooltip("The entire UI panel for the dialogue system")]
    public GameObject dialogueUIPanel;

    [Tooltip("The text component where dialogue lines will be displayed")]
    public TMP_Text dialogueText;

    [Tooltip("The image component where the speaker's profile picture will be displayed")]
    public RawImage profileImage;

    [Tooltip("The audio source for playing voice-over clips")]
    public AudioSource dialogueAudioSource;

    [Tooltip("The image used to display static noise over the profile image")]
    public Image staticOverlayImage;

    [Tooltip("Static effect intensity")]
    [Range(0, 1)]
    public float staticIntensity = 0.5f;

    [Tooltip("Static effect duration in seconds")]
    public float staticEffectDuration = 0.2f;

    [Tooltip("The duration each glitch frame lasts")]
    public float glitchFrameDuration = 0.05f;

    [Tooltip("Typing duration modifier (0 = instant, 1 = full duration)")]
    [Range(0, 1)]
    public float typingDuration = 0.5f;

    private Queue<Dialogue> dialogueQueue = new Queue<Dialogue>();
    private Dialogue currentDialogue;
    private int currentLineIndex;
    private GameObject highlightedObject;

    [SerializeField]
    private Dialogue testDialogue;

    private void Start()
    {
        // Ensure the static overlay image is initially hidden
        if (staticOverlayImage != null)
        {
            Color initialOverlayColor = staticOverlayImage.color;
            initialOverlayColor.a = 0f;
            staticOverlayImage.color = initialOverlayColor;
            staticOverlayImage.gameObject.SetActive(true);
        }

        if (testDialogue != null)
        {
            StartDialogue(testDialogue);
        }
    }

    private void Update()
    {
        // Skip the current dialogue line when 'G' is pressed, but only in editor
        if (Application.isEditor && Input.GetKeyDown(KeyCode.G))
        {
            SkipDialogueLine();
        }
    }

    // Function to start dialogue
    public void StartDialogue(Dialogue dialogue, GameObject highlightTarget = null)
    {
        if (currentDialogue != null)
        {
            // If there's already a dialogue running, queue the new one
            dialogueQueue.Enqueue(dialogue);
        }
    }
}

// --- DialogueEvents.cs ---
using UnityEngine;

public class DialogueEvents : MonoBehaviour
{
    [SerializeField]
    private DialogueManager dialogueManager;

    // Dialogue SO for each sequence
    [SerializeField]
    private Dialogue introDialogue;

    [SerializeField]
    private Dialogue gameStartedDialogue;

    [SerializeField]
    private Dialogue firstPlayDialogue;

    [SerializeField]
    private Dialogue firstKelpDialogue;

    [SerializeField]
    private Dialogue firstRockDialogue;

    [SerializeField]
    private Dialogue rockHitsShipDialogue;

    [SerializeField]
    private Dialogue hullBreachPressureDialogue;

    [SerializeField]
    private Dialogue criticalHullDamageDialogue;

    [SerializeField]
    private Dialogue criticalFuelLevelDialogue;

    [SerializeField]
    private Dialogue criticalBatteryChargeLevelDialogue;

    [SerializeField]
    private Dialogue deathFromRunningOutOfFuelDialogue;

    [SerializeField]
    private Dialogue deathFromHullDestroyedDialogue;

    [SerializeField]
    private Dialogue lightsOutDialogue;

    [SerializeField]
    private Dialogue enterTheDeepDialogue;

    [SerializeField]
    private Dialogue hullRepairDialogue;

    [SerializeField]
    private Dialogue fuelRefillDialogue;

    [SerializeField]
    private Dialogue batteryChargeDialogue;

    [SerializeField]
    private Dialogue playerStunDialogue;

    [SerializeField]
    private Dialogue electricFishOnScreenDialogue;

    private void Awake()
    {
        if (dialogueManager == null)
        {
            dialogueManager = GetComponent<DialogueManager>();
        }
    }

    private void OnDestroy()
    {
        // Unsubscribe from GameManager events
        if (GameManager.Instance != null)
        {
            GameManager.Instance.OnIntro -= TriggerIntroDialogue;
            GameManager.Instance.OnPlay -= TriggerFirstPlayDialogue;
        }
    }
}`},{title:"Game Systems (Controls & Audio)",content:"I implemented robust systems for input management and audio control. The ControlManager handles key rebinding and persistence, while the AudioManager manages mixer groups and volume settings, ensuring a polished player experience.",code:`// --- ControlManager.cs ---
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class ControlManager : MonoBehaviour
{
    public TMP_Text downKeyText, upKeyText, rightKeyText, leftKeyText, dashKeyText, grabKeyText, repairKeyText;
    public Button downKeyButton, upKeyButton, rightKeyButton, leftKeyButton, dashKeyButton, grabKeyButton, repairKeyButton;

    Dictionary<string, KeyCode> keys = new Dictionary<string, KeyCode>();

    string keyRebind = null;

    Dictionary<string, KeyCode> defaultKeys = new Dictionary<string, KeyCode>
    {
        { "Up", KeyCode.W },
        { "Down", KeyCode.S },
        { "Left", KeyCode.A },
        { "Right", KeyCode.D },
        { "Dash", KeyCode.LeftShift },
        { "Grab", KeyCode.E },
        { "Repair", KeyCode.Space }
    };

    void Start()
    {
        // Load saved key bindings
        keys["Up"] = (KeyCode)System.Enum.Parse(typeof(KeyCode), PlayerPrefs.GetString("Up", KeyCode.W.ToString()));
        keys["Down"] = (KeyCode)System.Enum.Parse(typeof(KeyCode), PlayerPrefs.GetString("Down", KeyCode.S.ToString()));
        keys["Left"] = (KeyCode)System.Enum.Parse(typeof(KeyCode), PlayerPrefs.GetString("Left", KeyCode.A.ToString()));
        keys["Right"] = (KeyCode)System.Enum.Parse(typeof(KeyCode), PlayerPrefs.GetString("Right", KeyCode.D.ToString()));
        keys["Dash"] = (KeyCode)System.Enum.Parse(typeof(KeyCode), PlayerPrefs.GetString("Dash", KeyCode.LeftShift.ToString()));
        keys["Grab"] = (KeyCode)System.Enum.Parse(typeof(KeyCode), PlayerPrefs.GetString("Grab", KeyCode.E.ToString()));
        keys["Repair"] = (KeyCode)System.Enum.Parse(typeof(KeyCode), PlayerPrefs.GetString("Repair", KeyCode.Space.ToString()));

        downKeyButton.onClick.AddListener(() => RebindKey("Down"));
        upKeyButton.onClick.AddListener(() => RebindKey("Up"));
        leftKeyButton.onClick.AddListener(() => RebindKey("Left"));
        rightKeyButton.onClick.AddListener(() => RebindKey("Right"));
        dashKeyButton.onClick.AddListener(() => RebindKey("Dash"));
        grabKeyButton.onClick.AddListener(() => RebindKey("Grab"));
        repairKeyButton.onClick.AddListener(() => RebindKey("Repair"));

        UpdateUI();
    }

    void Update()
    {
        if (keyRebind != null && Input.anyKeyDown)
        {
            foreach (KeyCode key in System.Enum.GetValues(typeof(KeyCode)))
            {
                if (Input.GetKeyDown(key))
                {
                    keys[keyRebind] = key;
                    PlayerPrefs.SetString(keyRebind, key.ToString());
                    keyRebind = null;
                    UpdateUI();
                    break;
                }
            }
        }
    }

    void RebindKey(string action)
    {
        keyRebind = action;
    }

    void UpdateUI()
    {
        downKeyText.text = keys["Down"].ToString();
        upKeyText.text = keys["Up"].ToString();
        rightKeyText.text = keys["Right"].ToString();
        leftKeyText.text = keys["Left"].ToString();
        dashKeyText.text = keys["Dash"].ToString();
        grabKeyText.text = keys["Grab"].ToString();
        repairKeyText.text = keys["Repair"].ToString();
    }
}

// --- AudioManager.cs ---
using UnityEngine;
using UnityEngine.Audio;

public class AudioManager : MonoBehaviour
{
    public AudioMixer audioMixer;

    void Start()
    {
        if (PlayerPrefs.HasKey("MasterVol"))
        {
            audioMixer.SetFloat("MasterVol", PlayerPrefs.GetFloat("MasterVol"));
        }
        if (PlayerPrefs.HasKey("MusicVol"))
        {
            audioMixer.SetFloat("MusicVol", PlayerPrefs.GetFloat("MusicVol"));
        }
        if (PlayerPrefs.HasKey("SFXVol"))
        {
            audioMixer.SetFloat("SFXVol", PlayerPrefs.GetFloat("SFXVol"));
        }
    }
}`},{title:"Progression & Scoring",content:"I developed the scoring and high-score systems to track player progress across multiple metrics (depth, algae, repairs, etc.). The system uses PlayerPrefs for persistence and updates the UI in real-time.",code:`// --- ScoreManager.cs ---
using Lumina.Essentials.Modules;
using TMPro;
using UnityEngine;

public class ScoreManager : MonoBehaviour
{
    [Header("Current UI Elements")]
    [SerializeField] TextMeshProUGUI currentDepthScore;
    [SerializeField] TextMeshProUGUI currentAlgaeCollected;
    [SerializeField] TextMeshProUGUI currentHolesRepaired;
    [SerializeField] TextMeshProUGUI currentJellyfishCollected;
    [SerializeField] TextMeshProUGUI currentLifeformsScanned;

    [Header("Current Scores")]
    [SerializeField] int depthScore;
    public int DepthScore => depthScore;

    [SerializeField] int algaeCollected;
    public int AlgaeCollected => algaeCollected;

    [SerializeField] int holesRepaired;
    public int HolesRepaired => holesRepaired;

    [SerializeField] int jellyfishCollected;
    public int JellyfishCollected => jellyfishCollected;

    [SerializeField] int lifeformsScanned;
    public int LifeformsScanned => lifeformsScanned;

    public void Update()
    {
        currentDepthScore.text         = Train.Instance.DepthString;
        currentAlgaeCollected.text     = algaeCollected.ToString();
        currentHolesRepaired.text      = holesRepaired.ToString();
        currentJellyfishCollected.text = jellyfishCollected.ToString();
        currentLifeformsScanned.text   = lifeformsScanned.ToString();
    }

    public void AddDepthScore(int amount)
    {
        depthScore += amount;
    }

    public void AddAlgaeCollected(int amount)
    {
        algaeCollected += amount;
    }

    public void AddHolesRepaired(int amount)
    {
        holesRepaired += amount;
    }

    public void AddJellyfishCollected(int amount)
    {
        jellyfishCollected += amount;
    }

    public void AddLifeformsScanned(int amount)
    {
        lifeformsScanned += amount;
    }

    public void ResetGame()
    {
        depthScore = 0;
        algaeCollected = 0;
        holesRepaired = 0;
        jellyfishCollected = 0;
        lifeformsScanned = 0;
    }
}

// --- HighScoreManager.cs ---
using Lumina.Essentials.Modules;
using TMPro;
using UnityEngine;

public class HighScoreManager : MonoBehaviour
{
    ScoreManager scoreManager;

    [Header("High Score Text")]
    [SerializeField] TextMeshProUGUI highScoreDepthText;
    [SerializeField] TextMeshProUGUI highScoreAlgaeText;
    [SerializeField] TextMeshProUGUI highScoreRepairText;
    [SerializeField] TextMeshProUGUI highScoreJellyFishText;
    [SerializeField] TextMeshProUGUI highScoreLifeFormText;

    [Header("High Score Values")]
    [SerializeField] int highScoreDepth;

    [SerializeField] int highScoreAlgae;
    public int HighAlgaeCollected => highScoreAlgae;

    [SerializeField] int highScoreRepair;
    public int HighHolesRepaired => highScoreRepair;

    [SerializeField] int highScoreJellyFish;
    public int HighJellyfishCollected => highScoreJellyFish;

    [SerializeField] int highScoreLifeForm;
    public int HighLifeformsScanned => highScoreLifeForm;

    void Start()
    {
        scoreManager = GetComponent<ScoreManager>();
        LoadHighScores();
        highScoreDepthText.text     = highScoreDepthText.ToString();
        highScoreAlgaeText.text     = highScoreAlgae.ToString();
        highScoreRepairText.text    = highScoreRepair.ToString();
        highScoreJellyFishText.text = highScoreJellyFish.ToString();
        highScoreLifeFormText.text  = highScoreLifeForm.ToString();
    }

    public void SaveHighScores()
    {
        if (scoreManager.DepthScore > highScoreDepth) highScoreDepth = scoreManager.DepthScore;
        if (scoreManager.AlgaeCollected > highScoreAlgae) highScoreAlgae = scoreManager.AlgaeCollected;
        if (scoreManager.HolesRepaired > highScoreRepair) highScoreRepair = scoreManager.HolesRepaired;
        if (scoreManager.JellyfishCollected > highScoreJellyFish) highScoreJellyFish = scoreManager.JellyfishCollected;
        if (scoreManager.LifeformsScanned > highScoreLifeForm) highScoreLifeForm = scoreManager.LifeformsScanned;

        PlayerPrefs.SetInt("HighDepthScore", highScoreDepth);
        PlayerPrefs.SetInt("HighAlgaeCollected", highScoreAlgae);
        PlayerPrefs.SetInt("HighHolesRepaired", highScoreRepair);
        PlayerPrefs.SetInt("HighJellyfishCollected", highScoreJellyFish);
        PlayerPrefs.SetInt("HighLifeformsScanned", highScoreLifeForm);

        PlayerPrefs.Save();
    }
    private void LoadHighScores()
    {
        if (PlayerPrefs.HasKey("HighDepthScore")) { highScoreDepth = PlayerPrefs.GetInt("HighDepthScore", 0); }
        if (PlayerPrefs.HasKey("HighAlgaeCollected")) { highScoreAlgae = PlayerPrefs.GetInt("HighAlgaeCollected", 0); }
        if (PlayerPrefs.HasKey("HighHolesRepaired")) { highScoreRepair = PlayerPrefs.GetInt("HighHolesRepaired", 0); }
        if (PlayerPrefs.HasKey("HighJellyfishCollected")) { highScoreJellyFish = PlayerPrefs.GetInt("HighJellyfishCollected", 0); }
        if (PlayerPrefs.HasKey("HighLifeformsScanned")) { highScoreLifeForm = PlayerPrefs.GetInt("HighLifeformsScanned", 0); }
    }
}`}]},{id:"daggerbound",title:"Daggerbound",description:"Fast-paced rogue-like dungeon crawler.",contributionSummary:"Gameplay Programmer – Character movement systems and animation state integration",image:Cm,homeImage:Pm,time:"4 weeks",engine:"Unity",language:"C#",versionControl:"Perforce",externalLink:"https://shahmuradov.itch.io/daggerbound",video:"https://www.youtube.com/embed/j9DEZIbw0ys",gallery:[xm,Sm,wm,km],contributions:["Modular architecture & Clear system ownership","Gameplay-driven animation logic","Scalable stat and progression systems","XP and leveling system implementation","Responsive player movement system","Animation system integration"],techOverview:`Built in Unity using C# for all core gameplay systems, with Unity’s Animator and Inspector used for designer-facing configuration and rapid iteration.

My work focused on player-centric gameplay systems, with a strong emphasis on:
• Modular architecture
• Clear system ownership
• Gameplay-driven animation logic
• Scalable stat and progression systems

This project was developed over 4 weeks, using an iterative team workflow with Perforce for version control.`,deepDives:[{title:"Player Experience & Progression System (XPManager, PlayerStats)",content:"I built a complete XP and leveling system to control player progression. It tracks XP from combat, handles level-ups, and scales stats like strength and health. The system is designed to be data-driven via the Inspector, making it easy for designers to tune the balance without touching code.",code:`public void AddXP(int amount)
{
    currentXP += amount;

    if (currentXP >= xpToNextLevel)
    {
        LevelUp();
    }
}

void LevelUp()
{
    level++;
    strength += strengthIncrease;
    maxHealth += healthIncrease;
}`},{title:"Player Movement System (PlayerMovement)",content:"I implemented a responsive movement system that prioritizes game feel. It reads input every frame and synchronizes directly with the Animator to ensure the character's visuals match their velocity, creating a smooth and grounded experience.",code:`Vector3 movement = new Vector3(inputX, 0, inputZ);
transform.Translate(movement * speed * Time.deltaTime);`},{title:"Animation System Integration (Animator Controller Setup)",content:"I set up the entire Animator Controller for players and enemies. This involved defining states, transitions, and parameters to ensure that every gameplay action—from attacking to taking damage—had clear, responsive visual feedback."},{title:"Combat System Prototyping (CombatManager – Early Prototype)",content:"I prototyped the early combat manager to test different initiation styles. I experimented with scene-based versus in-world combat triggers to help the team decide on the best direction for the game's flow. Although this system was later refined, the prototype was crucial for establishing our combat direction."},{title:"Camera Prototyping (Camera Controller)",content:"I created the initial camera controller to establish the game's top-down perspective. I iterated on angle and distance to find the sweet spot between visual clarity and atmosphere."}]},{id:"tower-defence",title:"Tower Defence Project",description:"A Resource Management RTS Tower Defence game where you build and defend against nightly monster attacks.",contributionSummary:"Gameplay Programmer – Grid PCG (Perlin noise), resource management, and systemic gameplay logic",image:Jh,time:"In Progress",engine:"Unreal Engine 5.7",language:"C++",versionControl:"GitHub",contributions:["PCG Grid System with Perlin Noise","Grid-based Building System","Resource Management Mechanics","RTS Combat & Wave System"],techOverview:"Built in Unreal Engine 5.7 using C++. The project focuses on procedural generation, grid-based interaction, and RTS mechanics.",deepDives:[{title:"PCG Grid System",content:"I implemented a procedural grid system that uses Perlin noise to generate diverse terrain features, including water bodies and mountain ranges. This ensures that every map offers a unique strategic challenge.",code:"// Code coming soon!"},{title:"Building System",content:"I designed a robust grid-based building system that allows players to select from a list of structures (walls, towers, resource collectors) and place them on valid grid tiles. The system handles collision checking and resource costs.",code:"// Code coming soon!"},{title:"RTS & Resource Management",content:"The game combines Tower Defence with RTS elements. Players must manage resources during the day to build defenses, as they are attacked by waves of monsters every night. This cycle creates a compelling loop of expansion and defense.",code:"// Code coming soon!"}]},{id:"rogue-card",title:"Rogue Card Project",description:"A deck-building rogue-like with card-based combat.",contributionSummary:"Gameplay Programmer – PCG systems, data-driven cards, and AI behavior tree implementation",image:Zh,time:"In Progress",engine:"Unreal Engine 5.6",language:"C++ & Blueprint",versionControl:"GitHub",contributions:["Player Deck Component","Enemy Deck Component","AI System","PCG Dungeon Build","Phase Manager"],techOverview:"Built in Unreal Engine 5.6 using a hybrid C++ and Blueprint approach. I am responsible for all core systems, focusing on the card mechanics, AI logic, and procedural generation.",deepDives:[{title:"Player Deck Component",content:"I am developing a flexible deck component that handles card drawing, shuffling, and discarding. It supports dynamic deck modification during runtime.",code:"// Code coming soon!"},{title:"Enemy Deck Component",content:"Similar to the player deck, this component manages enemy actions. It is designed to be predictable yet challenging, with specific patterns for different enemy types.",code:"// Code coming soon!"},{title:"AI System",content:"The AI system evaluates the current board state to make intelligent decisions. It considers player health, card availability, and future turns.",code:"// Code coming soon!"},{title:"PCG Dungeon Build",content:"I am implementing a Procedural Content Generation system to create unique dungeon layouts for every run, ensuring high replayability.",code:"// Code coming soon!"},{title:"Phase Manager",content:"The Phase Manager controls the flow of combat, handling turn transitions, effect resolution, and win/loss conditions.",code:"// Code coming soon!"}]}],Am="/BirkanAtesPortfolio/assets/bg-day-BgQiHAP0.png",Tm="/BirkanAtesPortfolio/assets/bg-night-DjpAquw_.png",Em="/BirkanAtesPortfolio/assets/profile-pic-M--jRy_J.jpg",wc="/BirkanAtesPortfolio/assets/Birkans_CV-BpHQjX9_.pdf",Nm=()=>{const a=Zi.filter(s=>s.time!=="In Progress"),c=Zi.filter(s=>s.time==="In Progress");return u.jsxs("div",{className:"flex flex-col",children:[u.jsxs("section",{className:"relative min-h-[600px] flex items-center justify-center overflow-hidden py-20",children:[u.jsxs("div",{className:"absolute inset-0 z-0",children:[u.jsx("img",{src:Am,alt:"Day Background",className:"w-full h-full object-cover dark:hidden"}),u.jsx("img",{src:Tm,alt:"Night Background",className:"w-full h-full object-cover hidden dark:block"}),u.jsx("div",{className:"absolute inset-0 bg-parchment/80 dark:bg-midnight-blue/80 backdrop-blur-[2px]"})]}),u.jsxs("div",{className:"relative z-10 container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-center gap-12",children:[u.jsxs("div",{className:"md:w-1/2 text-center md:text-left",children:[u.jsx("h1",{className:"text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-4 text-dark-brown dark:text-soft-white drop-shadow-lg uppercase tracking-tight",children:"Birkan Ates"}),u.jsx("h2",{className:"text-xl md:text-2xl font-bold mb-8 text-forest-green dark:text-moonlight-blue uppercase tracking-widest",children:"Gameplay Programmer"}),u.jsxs("div",{className:"text-base md:text-lg mb-10 font-medium opacity-90 max-w-xl space-y-4",children:[u.jsx("p",{children:u.jsx("strong",{children:"Gameplay Programmer specializing in Unreal Engine (C++)"})}),u.jsxs("p",{children:["I focus on ",u.jsx("strong",{children:"AI behaviors, procedural systems, and gameplay mechanics."})]}),u.jsx("p",{children:"Currently a second-year student at Futuregames, with hands-on experience building scalable gameplay systems in Unreal and C++."})]}),u.jsxs("div",{className:"flex flex-wrap justify-center md:justify-start gap-4",children:[u.jsxs("button",{onClick:()=>document.getElementById("projects")?.scrollIntoView({behavior:"smooth"}),className:"px-8 py-3 bg-dark-brown dark:bg-soft-white text-parchment dark:text-midnight-blue font-bold uppercase rounded-sm hover:bg-muted-gold dark:hover:bg-desaturated-purple transition-colors flex items-center gap-2 shadow-lg cursor-pointer",children:[u.jsx(Nh,{size:20})," Projects"]}),u.jsxs("a",{href:"https://github.com/DullySkull",target:"_blank",rel:"noopener noreferrer",className:"px-8 py-3 bg-transparent border-4 border-dark-brown dark:border-soft-white text-dark-brown dark:text-soft-white font-bold uppercase rounded-sm hover:bg-dark-brown hover:text-parchment dark:hover:bg-soft-white dark:hover:text-midnight-blue transition-colors flex items-center gap-2",children:[u.jsx(oa,{size:20})," GitHub"]}),u.jsxs("a",{href:wc,download:"Birkans_CV.pdf",className:"px-8 py-3 bg-forest-green dark:bg-desaturated-purple text-white font-bold uppercase rounded-sm hover:brightness-110 transition-colors flex items-center gap-2 shadow-lg",children:[u.jsx(yc,{size:20})," Download CV"]}),u.jsxs(lt,{to:"/contact",className:"px-8 py-3 bg-transparent border-4 border-forest-green dark:border-desaturated-purple text-forest-green dark:text-desaturated-purple font-bold uppercase rounded-sm hover:bg-forest-green hover:text-white dark:hover:bg-desaturated-purple dark:hover:text-white transition-colors flex items-center gap-2",children:[u.jsx(Ko,{size:20})," Contact"]})]})]}),u.jsx("div",{className:"md:w-1/3 flex justify-center",children:u.jsx("div",{className:"relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden border-4 border-dark-brown dark:border-soft-white shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500",children:u.jsx("img",{src:Em,alt:"Birkan Ates",className:"w-full h-full object-cover"})})})]})]}),u.jsx("section",{id:"projects",className:"py-20 bg-parchment dark:bg-midnight-blue",children:u.jsxs("div",{className:"container mx-auto px-4",children:[u.jsx("h2",{className:"text-3xl md:text-4xl font-bold font-heading mb-12 text-center uppercase text-dark-brown dark:text-soft-white",children:"Featured Projects"}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 mb-16",children:a.map(s=>u.jsx(Sc,{title:s.title,description:s.description,contributionSummary:s.contributionSummary,image:s.homeImage||s.image,link:`/projects/${s.id}`,time:s.time,engine:s.engine,language:s.language,versionControl:s.versionControl},s.id))}),u.jsx("h3",{className:"text-2xl font-bold font-heading mb-8 text-center uppercase text-muted-gold dark:text-moonlight-blue",children:"In Development"}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto",children:c.map(s=>u.jsx(Sc,{title:s.title,description:s.description,contributionSummary:s.contributionSummary,image:s.homeImage||s.image,link:`/projects/${s.id}`,time:s.time,engine:s.engine,language:s.language,versionControl:s.versionControl,imageFit:"contain"},s.id))}),u.jsx("div",{className:"mt-16 text-center",children:u.jsxs("a",{href:wc,download:"Birkans_CV.pdf",className:"px-10 py-4 bg-dark-brown dark:bg-soft-white text-parchment dark:text-midnight-blue font-bold uppercase rounded-sm hover:bg-muted-gold dark:hover:bg-desaturated-purple transition-colors inline-flex items-center gap-2 shadow-xl text-lg",children:[u.jsx(yc,{size:24})," Download Full CV (PDF)"]})})]})})]})},Bn=({name:a,icon:c,imageSrc:s})=>u.jsxs("div",{className:"flex flex-col items-center justify-center gap-3 p-4 group",children:[u.jsx("div",{className:"w-20 h-20 flex items-center justify-center bg-parchment dark:bg-soft-white border-4 border-dark-brown dark:border-soft-white rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300 group-hover:border-muted-gold dark:group-hover:border-desaturated-purple",children:s?u.jsx("img",{src:s,alt:a,className:"w-12 h-12 object-contain"}):u.jsx("div",{className:"text-dark-brown dark:text-midnight-blue",children:c})}),u.jsx("span",{className:"font-bold uppercase text-sm tracking-wider",children:a})]}),Im="/BirkanAtesPortfolio/assets/profile-about-new-CcE6K52f.jpg",jm="/BirkanAtesPortfolio/assets/unity-logo-xfTt5dqp.png",Mm="/BirkanAtesPortfolio/assets/unreal-logo-D8Si6UuG.png",bm="/BirkanAtesPortfolio/assets/cpp-logo-K58JSrZE.png",zm="/BirkanAtesPortfolio/assets/csharp-logo-D-dI9gTc.png",Fm="/BirkanAtesPortfolio/assets/github-logo-Dr8lduzb.png",Dm="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAFACAMAAAD6TlWYAAACDVBMVEVHcEw/Pz9AQEA+Pj4/Pz8+Pj4/Pz9AQEA/Pz8/Pz89PT0/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz9AQEA+Pj4/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz9AQEA/Pz8/Pz8/Pz8/Pz8/Pz9AQEA/Pz8/Pz8/Pz8/Pz8/Pz8+Pj4/Pz8/Pz9AQEA/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz9AQEA/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz9AQEA/Pz8/Pz8/Pz9AQEA/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8+Pj4/Pz8/Pz8/Pz8/Pz8/Pz8/Pz9AQEBAQEA/Pz9AQEA/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz9AQEA/Pz8/Pz8/Pz9AQEA/Pz9AQEBAQEA/Pz8/Pz8/Pz8/Pz9AQEBAQEA/Pz8/Pz8/Pz9AQEB/8sWVAAAAr3RSTlMAAQIEBQMNDg8LAjh4sNTm7uvgwJBTGQKjopRxPkWrr61JTpt6RxBqxb1BBiRQpaadhmA0TGEJJlkdten8///+9c58IJqxr4jx8r8KloP2wrIU4vr9xHsq+I73+9a67NDYY/Tc2Z4claRE0aAbvV3H+ffS3XZnMhYumRdScxqqByMSExUih388CDAsbjWLOVL7Vd1sO3BIkeO2H+FGprslyFFm2GvoqECF1C9bKMrnPEZ1BAAACQlJREFUeAHszoMRA1EUAMCzFRv9V5lBzAKyO/h4DPhvAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABhdBF+zImTZ/Fzl6fgB2mWPynKz2Or6nL7vVYcBr+UddN2/TCMxpPpbP4mf5G8+N21WV6t1ptt/i5nt28Pj9rjiTq7cGsjXfs4fg+2pJJMUhZ7s1vH3SX3bxo01LCwoQmwIakhL8XqOOwuVmHdpe5/4wnpOZCRJEzt6n4uRZ95vpF57isHSebQ3r3bP/z88JGjGaQlM0slO4c05Obl70kvKCwqLindvCShrLyClCoLQtY8kFZcVU0RZFTV1NoYr0nH7HX1pFDf0KjcZlMzReNACKnleNUJUklnKPFJkjnFCMWnW7X+UVwbVHgPqbRXHejoZAbATrHrC1dslan7TCIpHHUjFHt69iRTGCk5vd0M2PqMrce/NHsYcHr7K0gmvxMqIkXjA1r8Zzf5TZtLnD53npQuMBxtFwtCpQ2oAnr8Xw4GGTvcDLiHhjUDiq3/Hyq7xkoKhpFLowBLtk6bxAAkS2EtYEs3KAOOQTL9d83xiRYJcHbtJk2GSTODxcbLV64aKtqvjVw0ScDp6zco1E0PPF0XC2SO7CCgbSo5eTpguLIsySKBa4bVAXlmVpAjVcCsufmFoMWlsgYzwI3JGgH5qwq5WVJwFboh9e1Lyqw6VDXVkCVKACNgdEpQBTQPZCwEtVdbvz4rAV7Ngonpo8Cxwm+Wty5k5boD4NRZRcCJOVJuM3pA92fbt4LVGQ+4YVkdsIHUFAE/j6ct8QN2hpQUqxFwjSI7amTJX7xuoCDhk923LBKCTLdVASdCXy6VM05wazKpnEjygC0lFbJLyTey82QchbhzF8ZF0kURMCBjiOE79LYBA9b9gGjVH3DDhJaTlQJtE1xFx7CJZyqUAb8NDUiLbQznFCkJU91go5UUVvffmidFwJ6rbxuQ6gfBTctvH5C+s4GTdAcsM8Eykktyy5lmbHIMRA5Iu2uBSxmk8L0J8H9PKhWx9B4C0hTD5HoHAavPApc+0RlwtQdeK6kIIyIC+LoQOWDcDCBeUb6ADzAcG6TlvQS80gfPp+8gYOwBYKJaX8CKi9xhJQ0pezoR4K2OHJB+YIyWkdyPPvCFuA8X8EYPeO0dBKSfGD/P6QuY74NFMyAlNjIA98EoATc8sG0oxplzDIuLPlzAeTv4yLsIWMSw1OsKaPiF4fyONOWIAHgySsARJzrzSeZXPzhd+IABl34DT76DgAmtgH1eV8DffcDZetK03MQATkYJ+BXDcZtkyrrh+4w+YMAyN5wj7yDg7j5wQbyugBcYXCSQtn4ngKbYiAEzsgDvNMlMMnqSKbp3dA6k2HMMcV1rEonZkiJEDxgbqGErJz0BbwwCzhIKY8UMoHc5YsAqN7hol2qQb4yjCBSTSMw24U0CDvQB2QnqWbix4I9t111RA26IwOB5jYA/UDjWFshfgDKLRgB/Rgz4l53h+J3k0phP0k4DelpDt3nxkP6AlX8Dnf2kCijHmRoBZ0ICxm78BnRmkkbA7I1/tt05mEFb7kmAqZLCOLEPQGNshFHO1cvgtGV1wKQdB5TjA/F6Z+HbWQxuy1AH9Fjubztrz9EI2JsYlxs0O3/7gghwQYJGQEi2uyF8B2V3ANnBR262F8Bhkgc0rZIQlLJc/6CHgUEXKRwGn9txQKnWG7rPPbSTgJ1V8bObKha/v2ViwH6N1AH/zLuRvK09RSOgL7vml6BeuygBUls1aQbsHgshDsjOPXjoojAMXQAfUQR0/n3xtUfZFg/APVZSamb0Lu80oCkndJs3ZncUkP29QdnjDgmQWq9QkO67sIxkar5BWgH5z4MD2z6zGuh/hFQGfI8pjGkvMJqvCCjn+3yFVDIZ/l93GPDNjjGhnL89GaY3DOg0/9YR1ALwgWvxpB2wjsI5xwB/R2F87wA6/lIElMTXa/7WJwHGoydI7bEP3fnv9RwI0Tge9GVW4XeVKfSmAe2l9a+NOMBDcRQm4BcUzk8MYCaOtE0yuG1WEfBhWf1r348D4+dJw41x8Ln49xnQtrawGLSQoL2O3oN07hDD8aP+gIFEgGmFNGW0AlImKQJuH3wvd0L6mrScYZjWP+Ak8vYBqdQE/iVRd8BDowD4TAppKTsG+OeUAZ9uBczIZliukYbbZnBqxb8qoNDM6C7XHXDOggBzDmkZ7mW+ReEDUr4PfD1Oa9EGxul7/6qAlOcF7Of1BoybYQR0ad4zV+2YWI0UsOIRQxwgDS4vYDpISsJC4kcbkH6wQarTG5CqRhHAezXSX/kbo2sUKSB9Ywa3JWj+XxFsOSSQzGy//fjtjzbg1SzAsqo34EIXNkm9z0gu9lMvOM0QOWD8Twz3CGmIn/IBtZPzFGLp+jGgZvljDUhVp8EnY3UGpOensYn9D0LCkPDiJ4fGx9XKgOSaAF4mk4bcKRHozN7YSjj9wCgBDy8LioDG9xZwSNAX0NAIiDl6A54YYgR1vtyznpFCASkL1jMWCbaZaooWkI5IcO4hLfEbgWDs/vtJ/rVfq1dvnjF6AM/xHEE5iXiT31NA/FaX+SDUvbnIAWlABDcadAak+ksMQJIASXyZdmpysjjV3iKBzV9nUPSAw3bA7yJNeT/VMsCjZsuEeZQBW8//tatHudMXMh/I/P6uAoIhw0lRAsYdZriroo5ySlfsANdcfygB4CCAHQes8aQR0I2n8pdc/yj4pxTSFFvabHdIjAB2ivvWqrVmYTBD5iFF84vJW0pRrJleKZmmSKbK//MtgUJde/nbz09I4cjZiX6KaGUfj79IWTn1t2jjTc6W8Z9yKkiL6+XPexMpVEZhR0dNBoWz8P29r4pS0xqelFxJILV1r3qbrRTN4rXKWIrCsLryTG5l1UAyuUuVigsXhisr20lheXjJQJEtpVVRQLt17eSBmgMnpw4Op2z/ULlCsuJb85WV1QJFlBL25/F/rTxTmqb/tAcHAgAAAACC/K0HuQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4Cz2+4Nb1QlybAAAAABJRU5ErkJggg==",Rm=()=>u.jsxs("div",{className:"py-20 container mx-auto px-4",children:[u.jsxs("div",{className:"max-w-6xl mx-auto mb-16",children:[u.jsx("h1",{className:"text-4xl md:text-5xl font-bold font-heading mb-12 uppercase text-dark-brown dark:text-soft-white text-center",children:"About Me"}),u.jsxs("div",{className:"flex flex-col md:flex-row gap-12 items-start",children:[u.jsxs("div",{className:"md:w-2/3 space-y-6 text-lg opacity-90 leading-relaxed",children:[u.jsx("p",{className:"font-bold text-xl",children:"Hi! I’m Birkan Ates, a second-year Game Programmer at Futuregames."}),u.jsxs("p",{children:["I specialize in ",u.jsx("strong",{children:"gameplay systems development"}),", with a strong focus on ",u.jsx("strong",{children:"AI behaviours"}),", ",u.jsx("strong",{children:"procedural content generation"}),", and ",u.jsx("strong",{children:"gameplay tools"}),". I enjoy building systems that are ",u.jsx("strong",{children:"robust, modular, and scalable"}),", supporting both gameplay features and designer workflows."]}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-xl font-bold uppercase mb-2 text-forest-green dark:text-moonlight-blue",children:"What I work with"}),u.jsxs("p",{className:"mb-2",children:["I primarily work in ",u.jsx("strong",{children:"Unreal Engine using C++"}),", where I develop:"]}),u.jsxs("ul",{className:"list-disc list-inside space-y-1 ml-2",children:[u.jsxs("li",{children:[u.jsx("strong",{children:"AI behaviour systems"})," (Behavior Trees, state machines, decision logic)"]}),u.jsx("li",{children:u.jsx("strong",{children:"Pathfinding and navigation solutions"})}),u.jsx("li",{children:u.jsx("strong",{children:"Procedural generation tools and systems"})}),u.jsx("li",{children:u.jsx("strong",{children:"Core gameplay mechanics and supporting tools"})})]}),u.jsxs("p",{className:"mt-2",children:["I enjoy working ",u.jsx("strong",{children:"close to the engine layer"}),", designing systems that are easy to extend, debug, and iterate on throughout development."]})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-xl font-bold uppercase mb-2 text-forest-green dark:text-moonlight-blue",children:"How I approach programming"}),u.jsxs("p",{children:["I approach programming as a ",u.jsx("strong",{children:"problem-solving discipline"}),". I enjoy breaking down complex gameplay challenges into clear, maintainable systems. Whether it’s ",u.jsx("strong",{children:"AI decision-making"}),", ",u.jsx("strong",{children:"procedural environments"}),", or ",u.jsx("strong",{children:"tooling"}),", my goal is to create solutions that ",u.jsx("strong",{children:"scale well"})," and remain readable over time."]})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-xl font-bold uppercase mb-2 text-forest-green dark:text-moonlight-blue",children:"Background & flexibility"}),u.jsxs("p",{children:["I’ve been coding in ",u.jsx("strong",{children:"C# since 2018"}),", and later challenged myself by transitioning into ",u.jsx("strong",{children:"Unreal Engine and C++"})," at Futuregames. This shift gave me a strong understanding of ",u.jsx("strong",{children:"Unreal’s architecture"})," and modern gameplay programming practices."]}),u.jsxs("p",{className:"mt-2",children:["Alongside Unreal, I also have experience working in ",u.jsx("strong",{children:"Unity (C#)"})," for rapid prototyping and smaller projects, giving me flexibility across engines and workflows."]})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-xl font-bold uppercase mb-2 text-forest-green dark:text-moonlight-blue",children:"Looking ahead"}),u.jsxs("p",{children:["I’m currently looking for opportunities as a ",u.jsx("strong",{children:"junior or intern game programmer"}),", particularly in roles involving ",u.jsx("strong",{children:"AI systems"}),", ",u.jsx("strong",{children:"gameplay systems"}),", or ",u.jsx("strong",{children:"tools programming"}),", where I can contribute to meaningful systems and continue growing as a technical developer."]})]})]}),u.jsx("div",{className:"md:w-1/3 flex justify-center md:justify-end",children:u.jsx("div",{className:"w-full max-w-sm rounded-lg border-4 border-dark-brown dark:border-soft-white overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-300",children:u.jsx("img",{src:Im,alt:"Birkan Ates",className:"w-full h-full object-cover"})})})]})]}),u.jsxs("div",{className:"mb-20",children:[u.jsx("h2",{className:"text-3xl font-bold font-heading mb-10 text-center uppercase text-forest-green dark:text-desaturated-purple",children:"Skills"}),u.jsxs("div",{className:"flex flex-wrap justify-center gap-8 mb-6",children:[u.jsx(Bn,{name:"Unity",imageSrc:jm}),u.jsx(Bn,{name:"Unreal Engine",imageSrc:Mm}),u.jsx(Bn,{name:"C++",imageSrc:bm}),u.jsx(Bn,{name:"C#",imageSrc:zm}),u.jsx(Bn,{name:"GitHub",imageSrc:Fm}),u.jsx(Bn,{name:"Perforce",imageSrc:Dm})]}),u.jsx("p",{className:"text-center text-sm font-bold uppercase opacity-70 tracking-wider",children:"Primary tools I use in production and coursework."})]}),u.jsxs("div",{className:"bg-parchment/50 dark:bg-midnight-blue/50 border-4 border-dark-brown dark:border-soft-white p-8 md:p-12 rounded-sm max-w-5xl mx-auto",children:[u.jsx("h2",{className:"text-3xl font-bold font-heading mb-10 text-center uppercase text-dark-brown dark:text-soft-white",children:"What I Focus On"}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[u.jsxs("div",{className:"flex gap-4",children:[u.jsx("div",{className:"p-3 bg-dark-brown dark:bg-soft-white text-parchment dark:text-midnight-blue h-fit rounded-sm",children:u.jsx(Ph,{size:24})}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-xl font-bold uppercase mb-2",children:"Gameplay Systems"}),u.jsx("p",{className:"opacity-80",children:"Designing and implementing core gameplay loops, character mechanics, and interaction systems that feel responsive and satisfying."})]})]}),u.jsxs("div",{className:"flex gap-4",children:[u.jsx("div",{className:"p-3 bg-dark-brown dark:bg-soft-white text-parchment dark:text-midnight-blue h-fit rounded-sm",children:u.jsx(ah,{size:24})}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-xl font-bold uppercase mb-2",children:"AI Systems"}),u.jsx("p",{className:"opacity-80",children:"Creating intelligent behaviors using Behavior Trees, GOAP, and State Machines to bring NPCs and enemies to life."})]})]}),u.jsxs("div",{className:"flex gap-4",children:[u.jsx("div",{className:"p-3 bg-dark-brown dark:bg-soft-white text-parchment dark:text-midnight-blue h-fit rounded-sm",children:u.jsx(vh,{size:24})}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-xl font-bold uppercase mb-2",children:"Procedural Content Generation"}),u.jsx("p",{className:"opacity-80",children:"Developing algorithms for generating levels, items, and events to ensure replayability and variety."})]})]}),u.jsxs("div",{className:"flex gap-4",children:[u.jsx("div",{className:"p-3 bg-dark-brown dark:bg-soft-white text-parchment dark:text-midnight-blue h-fit rounded-sm",children:u.jsx(Rh,{size:24})}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-xl font-bold uppercase mb-2",children:"Tools Programming"}),u.jsx("p",{className:"opacity-80",children:"Building custom editors and workflow tools to accelerate development and empower content creators."})]})]})]})]})]}),Lm=()=>u.jsxs("div",{className:"container mx-auto px-4 py-20 min-h-[80vh] flex flex-col items-center justify-center",children:[u.jsx("h1",{className:"text-4xl md:text-5xl font-bold font-heading mb-12 uppercase text-dark-brown dark:text-soft-white text-center",children:"Get In Touch"}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full",children:[u.jsxs("div",{className:"bg-parchment dark:bg-midnight-blue border-4 border-dark-brown dark:border-soft-white p-8 rounded-sm shadow-lg flex flex-col justify-center space-y-8",children:[u.jsx("p",{className:"text-lg opacity-90 text-center md:text-left",children:"I'm currently open to new opportunities in gameplay programming and game development. Whether you have a question or just want to say hi, I'll try my best to get back to you!"}),u.jsxs("div",{className:"space-y-6",children:[u.jsxs("a",{href:"mailto:Billy.ates@hotmail.com",className:"flex items-center gap-4 text-xl font-bold hover:text-muted-gold dark:hover:text-desaturated-purple transition-colors group",children:[u.jsx("div",{className:"p-3 bg-dark-brown dark:bg-soft-white text-parchment dark:text-midnight-blue rounded-full group-hover:scale-110 transition-transform",children:u.jsx(Ko,{size:24})}),u.jsx("span",{children:"Billy.ates@hotmail.com"})]}),u.jsxs("a",{href:"https://www.linkedin.com/in/birkan-ates-b5a40b2ab/",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-4 text-xl font-bold hover:text-muted-gold dark:hover:text-desaturated-purple transition-colors group",children:[u.jsx("div",{className:"p-3 bg-dark-brown dark:bg-soft-white text-parchment dark:text-midnight-blue rounded-full group-hover:scale-110 transition-transform",children:u.jsx(_c,{size:24})}),u.jsx("span",{children:"LinkedIn Profile"})]}),u.jsxs("a",{href:"https://github.com/DullySkull",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-4 text-xl font-bold hover:text-muted-gold dark:hover:text-desaturated-purple transition-colors group",children:[u.jsx("div",{className:"p-3 bg-dark-brown dark:bg-soft-white text-parchment dark:text-midnight-blue rounded-full group-hover:scale-110 transition-transform",children:u.jsx(oa,{size:24})}),u.jsx("span",{children:"GitHub Profile"})]}),u.jsxs("a",{href:"https://itch.io/profile/dullyskull",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-4 text-xl font-bold hover:text-muted-gold dark:hover:text-desaturated-purple transition-colors group",children:[u.jsx("div",{className:"p-3 bg-dark-brown dark:bg-soft-white text-parchment dark:text-midnight-blue rounded-full group-hover:scale-110 transition-transform",children:u.jsx($o,{size:24})}),u.jsx("span",{children:"Itch.io Profile"})]}),u.jsxs("a",{href:"tel:+46761938665",className:"flex items-center gap-4 text-xl font-bold hover:text-muted-gold dark:hover:text-desaturated-purple transition-colors group",children:[u.jsx("div",{className:"p-3 bg-dark-brown dark:bg-soft-white text-parchment dark:text-midnight-blue rounded-full group-hover:scale-110 transition-transform",children:u.jsx(_h,{size:24})}),u.jsx("span",{children:"+46 76 193 86 65"})]})]})]}),u.jsx("div",{className:"bg-dark-brown dark:bg-soft-white p-1 rounded-sm shadow-lg",children:u.jsxs("div",{className:"bg-parchment dark:bg-midnight-blue h-full w-full border-2 border-dashed border-dark-brown/30 dark:border-soft-white/30 p-8 flex flex-col items-center justify-center text-center",children:[u.jsx(Ko,{size:64,className:"text-muted-gold dark:text-desaturated-purple mb-6 opacity-50"}),u.jsx("h3",{className:"text-2xl font-bold font-heading uppercase mb-2",children:"Send a Message"}),u.jsx("p",{className:"opacity-70",children:"(Contact form integration coming soon)"})]})})]})]}),_m=({dive:a})=>{const[c,s]=M.useState(!1),[p,y]=M.useState(0),S=()=>{a.images&&y(C=>(C+1)%a.images.length)},w=()=>{a.images&&y(C=>(C-1+a.images.length)%a.images.length)};return u.jsxs("section",{className:"bg-white/50 dark:bg-black/20 p-6 rounded-sm border-l-4 border-forest-green dark:border-moonlight-blue mb-8",children:[u.jsx("h3",{className:"text-xl font-bold mb-3 uppercase text-forest-green dark:text-moonlight-blue",children:a.title}),u.jsx("p",{className:"mb-4 opacity-90 whitespace-pre-line",children:a.content}),a.images&&a.images.length>0&&u.jsx("div",{className:"mb-6 relative group",children:u.jsxs("div",{className:"relative aspect-video bg-black/50 rounded-sm overflow-hidden border-2 border-dark-brown/20 dark:border-soft-white/20",children:[u.jsx("img",{src:a.images[p],alt:`${a.title} screenshot ${p+1}`,className:"w-full h-full object-contain"}),a.images.length>1&&u.jsxs(u.Fragment,{children:[u.jsx("button",{onClick:w,className:"absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-forest-green transition-colors opacity-0 group-hover:opacity-100","aria-label":"Previous image",children:u.jsx(ch,{size:20})}),u.jsx("button",{onClick:S,className:"absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-forest-green transition-colors opacity-0 group-hover:opacity-100","aria-label":"Next image",children:u.jsx(fh,{size:20})}),u.jsx("div",{className:"absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1",children:a.images.map((C,k)=>u.jsx("div",{className:`w-2 h-2 rounded-full transition-colors ${k===p?"bg-white":"bg-white/50"}`},k))})]})]})}),a.code&&u.jsxs("div",{className:"mt-4",children:[u.jsxs("button",{onClick:()=>s(!c),className:"flex items-center gap-2 text-sm font-bold uppercase text-dark-brown dark:text-soft-white hover:text-muted-gold dark:hover:text-desaturated-purple transition-colors",children:[c?u.jsx(hh,{size:16}):u.jsx(Fc,{size:16}),c?"Hide Code":"View Code"]}),c&&u.jsx("pre",{className:"mt-4 bg-dark-brown text-parchment p-4 rounded-sm overflow-x-auto text-sm font-mono shadow-inner animate-in fade-in slide-in-from-top-2 duration-300",children:u.jsx("code",{children:a.code})})]})]})},Om=()=>{const{id:a}=Cp(),c=Zi.find(s=>s.id===a);return c?u.jsxs("div",{className:"min-h-screen pb-20",children:[u.jsxs("div",{className:"relative h-[50vh] min-h-[400px]",children:[u.jsx("img",{src:c.image,alt:c.title,className:`w-full h-full object-cover ${c.id==="whisper-of-seasons"?"object-bottom":"object-center"}`}),u.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-parchment dark:from-midnight-blue via-transparent to-black/30"}),u.jsxs("div",{className:"absolute bottom-0 left-0 w-full p-8 container mx-auto",children:[u.jsxs(lt,{to:"/",className:"inline-flex items-center gap-2 text-white mb-4 hover:text-muted-gold transition-colors font-bold uppercase text-sm bg-black/50 px-3 py-1 rounded-sm backdrop-blur-sm",children:[u.jsx(rh,{size:16})," Back to Home"]}),c.externalLink&&u.jsxs("a",{href:c.externalLink,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 text-white mb-4 ml-4 hover:text-muted-gold transition-colors font-bold uppercase text-sm bg-forest-green/80 px-3 py-1 rounded-sm backdrop-blur-sm",children:[u.jsx(wh,{size:16})," Play on Itch.io"]}),u.jsx("h1",{className:"text-4xl md:text-6xl font-bold font-heading text-white drop-shadow-lg uppercase mb-2",children:c.title}),u.jsx("p",{className:"text-lg text-white/90 font-medium max-w-2xl drop-shadow-md",children:c.description})]})]}),u.jsxs("div",{className:"container mx-auto px-4 mt-12",children:[u.jsxs("div",{className:"flex flex-wrap gap-6 mb-12 p-6 bg-parchment dark:bg-midnight-blue border-4 border-dark-brown dark:border-soft-white rounded-sm shadow-md",children:[u.jsxs("div",{className:"flex items-center gap-2 font-bold uppercase text-sm",children:[u.jsx(Dc,{className:"text-muted-gold dark:text-desaturated-purple"}),u.jsx("span",{children:c.time})]}),u.jsxs("div",{className:"flex items-center gap-2 font-bold uppercase text-sm",children:[u.jsx($o,{className:"text-muted-gold dark:text-desaturated-purple"}),u.jsx("span",{children:c.engine})]}),u.jsxs("div",{className:"flex items-center gap-2 font-bold uppercase text-sm",children:[u.jsx(Rc,{className:"text-muted-gold dark:text-desaturated-purple"}),u.jsx("span",{children:c.language})]}),u.jsxs("div",{className:"flex items-center gap-2 font-bold uppercase text-sm",children:[u.jsx(Lc,{className:"text-muted-gold dark:text-desaturated-purple"}),u.jsx("span",{children:c.versionControl})]})]}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-12",children:[u.jsxs("div",{className:"lg:col-span-2 space-y-12",children:[c.gallery&&c.gallery.length>0&&u.jsxs("section",{children:[u.jsx("h2",{className:"text-2xl font-bold font-heading mb-6 uppercase text-dark-brown dark:text-soft-white border-b-4 border-muted-gold dark:border-desaturated-purple pb-2 inline-block",children:"Gallery"}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:c.gallery.map((s,p)=>u.jsx("div",{className:"rounded-sm overflow-hidden border-2 border-dark-brown dark:border-soft-white shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer",children:u.jsx("img",{src:s,alt:`${c.title} screenshot ${p+1}`,className:"w-full h-32 object-cover"})},p))})]}),c.video&&u.jsxs("section",{children:[u.jsx("h2",{className:"text-2xl font-bold font-heading mb-6 uppercase text-dark-brown dark:text-soft-white border-b-4 border-muted-gold dark:border-desaturated-purple pb-2 inline-block",children:"Gameplay Video"}),u.jsx("div",{className:"aspect-video w-full rounded-sm overflow-hidden border-4 border-dark-brown dark:border-soft-white shadow-lg",children:u.jsx("iframe",{src:c.video,title:`${c.title} Gameplay`,className:"w-full h-full",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})]}),u.jsxs("section",{children:[u.jsx("h2",{className:"text-2xl font-bold font-heading mb-4 uppercase text-dark-brown dark:text-soft-white border-b-4 border-muted-gold dark:border-desaturated-purple pb-2 inline-block",children:"Code Overview"}),u.jsx("p",{className:"text-lg opacity-90 leading-relaxed",children:c.techOverview})]}),c.deepDives.map((s,p)=>u.jsx(_m,{dive:s},p))]}),u.jsx("div",{className:"lg:col-span-1",children:u.jsxs("div",{className:"bg-parchment dark:bg-midnight-blue border-4 border-dark-brown dark:border-soft-white p-6 rounded-sm sticky top-24",children:[u.jsx("h3",{className:"text-xl font-bold font-heading mb-6 uppercase text-dark-brown dark:text-soft-white border-b-2 border-dark-brown/20 dark:border-soft-white/20 pb-2",children:"Key Contributions"}),u.jsx("ul",{className:"space-y-4",children:c.contributions.map((s,p)=>u.jsxs("li",{className:"flex items-start gap-3",children:[u.jsx("div",{className:"mt-1 text-forest-green dark:text-desaturated-purple",children:u.jsx("div",{className:"w-2 h-2 bg-current rounded-full"})}),u.jsx("span",{className:"text-sm font-medium opacity-90",children:s})]},p))}),c.contributionsGif&&u.jsx("div",{className:"mt-6 rounded-sm overflow-hidden border-2 border-dark-brown dark:border-soft-white shadow-md",children:u.jsx("img",{src:c.contributionsGif,alt:`${c.title} Contributions Showcase`,className:"w-full h-auto object-cover"})})]})})]})]})]}):u.jsx(_p,{to:"/",replace:!0})};function Um(){return u.jsxs(Qp,{children:[u.jsx(Hh,{}),u.jsx(Vh,{children:u.jsxs(Up,{children:[u.jsx(jr,{path:"/",element:u.jsx(Nm,{})}),u.jsx(jr,{path:"/about",element:u.jsx(Rm,{})}),u.jsx(jr,{path:"/contact",element:u.jsx(Lm,{})}),u.jsx(jr,{path:"/projects/:id",element:u.jsx(Om,{})})]})})]})}console.log("Application starting...");try{const a=document.getElementById("root");if(!a)throw new Error("Root element not found");Qf.createRoot(a).render(u.jsx(M.StrictMode,{children:u.jsx(Um,{})})),console.log("Application mounted successfully")}catch(a){console.error("Application failed to mount:",a)}
//# sourceMappingURL=index-dmbIU6M7.js.map
