function Vf(i,d){for(var u=0;u<d.length;u++){const p=d[u];if(typeof p!="string"&&!Array.isArray(p)){for(const g in p)if(g!=="default"&&!(g in i)){const x=Object.getOwnPropertyDescriptor(p,g);x&&Object.defineProperty(i,g,x.get?x:{enumerable:!0,get:()=>p[g]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))p(g);new MutationObserver(g=>{for(const x of g)if(x.type==="childList")for(const S of x.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&p(S)}).observe(document,{childList:!0,subtree:!0});function u(g){const x={};return g.integrity&&(x.integrity=g.integrity),g.referrerPolicy&&(x.referrerPolicy=g.referrerPolicy),g.crossOrigin==="use-credentials"?x.credentials="include":g.crossOrigin==="anonymous"?x.credentials="omit":x.credentials="same-origin",x}function p(g){if(g.ep)return;g.ep=!0;const x=u(g);fetch(g.href,x)}})();function Ff(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var _l={exports:{}},zr={},Hl={exports:{}},W={};var qu;function If(){if(qu)return W;qu=1;var i=Symbol.for("react.element"),d=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),S=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),M=Symbol.for("react.memo"),D=Symbol.for("react.lazy"),z=Symbol.iterator;function U(m){return m===null||typeof m!="object"?null:(m=z&&m[z]||m["@@iterator"],typeof m=="function"?m:null)}var te={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,G={};function A(m,N,Q){this.props=m,this.context=N,this.refs=G,this.updater=Q||te}A.prototype.isReactComponent={},A.prototype.setState=function(m,N){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,N,"setState")},A.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function oe(){}oe.prototype=A.prototype;function le(m,N,Q){this.props=m,this.context=N,this.refs=G,this.updater=Q||te}var ne=le.prototype=new oe;ne.constructor=le,Y(ne,A.prototype),ne.isPureReactComponent=!0;var ie=Array.isArray,Ne=Object.prototype.hasOwnProperty,De={current:null},Ie={key:!0,ref:!0,__self:!0,__source:!0};function $e(m,N,Q){var X,$={},q=null,se=null;if(N!=null)for(X in N.ref!==void 0&&(se=N.ref),N.key!==void 0&&(q=""+N.key),N)Ne.call(N,X)&&!Ie.hasOwnProperty(X)&&($[X]=N[X]);var re=arguments.length-2;if(re===1)$.children=Q;else if(1<re){for(var pe=Array(re),Qe=0;Qe<re;Qe++)pe[Qe]=arguments[Qe+2];$.children=pe}if(m&&m.defaultProps)for(X in re=m.defaultProps,re)$[X]===void 0&&($[X]=re[X]);return{$$typeof:i,type:m,key:q,ref:se,props:$,_owner:De.current}}function Rt(m,N){return{$$typeof:i,type:m.type,key:N,ref:m.ref,props:m.props,_owner:m._owner}}function St(m){return typeof m=="object"&&m!==null&&m.$$typeof===i}function en(m){var N={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(Q){return N[Q]})}var ht=/\/+/g;function Ze(m,N){return typeof m=="object"&&m!==null&&m.key!=null?en(""+m.key):N.toString(36)}function lt(m,N,Q,X,$){var q=typeof m;(q==="undefined"||q==="boolean")&&(m=null);var se=!1;if(m===null)se=!0;else switch(q){case"string":case"number":se=!0;break;case"object":switch(m.$$typeof){case i:case d:se=!0}}if(se)return se=m,$=$(se),m=X===""?"."+Ze(se,0):X,ie($)?(Q="",m!=null&&(Q=m.replace(ht,"$&/")+"/"),lt($,N,Q,"",function(Qe){return Qe})):$!=null&&(St($)&&($=Rt($,Q+(!$.key||se&&se.key===$.key?"":(""+$.key).replace(ht,"$&/")+"/")+m)),N.push($)),1;if(se=0,X=X===""?".":X+":",ie(m))for(var re=0;re<m.length;re++){q=m[re];var pe=X+Ze(q,re);se+=lt(q,N,Q,pe,$)}else if(pe=U(m),typeof pe=="function")for(m=pe.call(m),re=0;!(q=m.next()).done;)q=q.value,pe=X+Ze(q,re++),se+=lt(q,N,Q,pe,$);else if(q==="object")throw N=String(m),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.");return se}function mt(m,N,Q){if(m==null)return m;var X=[],$=0;return lt(m,X,"","",function(q){return N.call(Q,q,$++)}),X}function Be(m){if(m._status===-1){var N=m._result;N=N(),N.then(function(Q){(m._status===0||m._status===-1)&&(m._status=1,m._result=Q)},function(Q){(m._status===0||m._status===-1)&&(m._status=2,m._result=Q)}),m._status===-1&&(m._status=0,m._result=N)}if(m._status===1)return m._result.default;throw m._result}var ge={current:null},T={transition:null},J={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:T,ReactCurrentOwner:De};function F(){throw Error("act(...) is not supported in production builds of React.")}return W.Children={map:mt,forEach:function(m,N,Q){mt(m,function(){N.apply(this,arguments)},Q)},count:function(m){var N=0;return mt(m,function(){N++}),N},toArray:function(m){return mt(m,function(N){return N})||[]},only:function(m){if(!St(m))throw Error("React.Children.only expected to receive a single React element child.");return m}},W.Component=A,W.Fragment=u,W.Profiler=g,W.PureComponent=le,W.StrictMode=p,W.Suspense=L,W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J,W.act=F,W.cloneElement=function(m,N,Q){if(m==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+m+".");var X=Y({},m.props),$=m.key,q=m.ref,se=m._owner;if(N!=null){if(N.ref!==void 0&&(q=N.ref,se=De.current),N.key!==void 0&&($=""+N.key),m.type&&m.type.defaultProps)var re=m.type.defaultProps;for(pe in N)Ne.call(N,pe)&&!Ie.hasOwnProperty(pe)&&(X[pe]=N[pe]===void 0&&re!==void 0?re[pe]:N[pe])}var pe=arguments.length-2;if(pe===1)X.children=Q;else if(1<pe){re=Array(pe);for(var Qe=0;Qe<pe;Qe++)re[Qe]=arguments[Qe+2];X.children=re}return{$$typeof:i,type:m.type,key:$,ref:q,props:X,_owner:se}},W.createContext=function(m){return m={$$typeof:S,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},m.Provider={$$typeof:x,_context:m},m.Consumer=m},W.createElement=$e,W.createFactory=function(m){var N=$e.bind(null,m);return N.type=m,N},W.createRef=function(){return{current:null}},W.forwardRef=function(m){return{$$typeof:k,render:m}},W.isValidElement=St,W.lazy=function(m){return{$$typeof:D,_payload:{_status:-1,_result:m},_init:Be}},W.memo=function(m,N){return{$$typeof:M,type:m,compare:N===void 0?null:N}},W.startTransition=function(m){var N=T.transition;T.transition={};try{m()}finally{T.transition=N}},W.unstable_act=F,W.useCallback=function(m,N){return ge.current.useCallback(m,N)},W.useContext=function(m){return ge.current.useContext(m)},W.useDebugValue=function(){},W.useDeferredValue=function(m){return ge.current.useDeferredValue(m)},W.useEffect=function(m,N){return ge.current.useEffect(m,N)},W.useId=function(){return ge.current.useId()},W.useImperativeHandle=function(m,N,Q){return ge.current.useImperativeHandle(m,N,Q)},W.useInsertionEffect=function(m,N){return ge.current.useInsertionEffect(m,N)},W.useLayoutEffect=function(m,N){return ge.current.useLayoutEffect(m,N)},W.useMemo=function(m,N){return ge.current.useMemo(m,N)},W.useReducer=function(m,N,Q){return ge.current.useReducer(m,N,Q)},W.useRef=function(m){return ge.current.useRef(m)},W.useState=function(m){return ge.current.useState(m)},W.useSyncExternalStore=function(m,N,Q){return ge.current.useSyncExternalStore(m,N,Q)},W.useTransition=function(){return ge.current.useTransition()},W.version="18.3.1",W}var ed;function $l(){return ed||(ed=1,Hl.exports=If()),Hl.exports}var td;function Bf(){if(td)return zr;td=1;var i=$l(),d=Symbol.for("react.element"),u=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,g=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x={key:!0,ref:!0,__self:!0,__source:!0};function S(k,L,M){var D,z={},U=null,te=null;M!==void 0&&(U=""+M),L.key!==void 0&&(U=""+L.key),L.ref!==void 0&&(te=L.ref);for(D in L)p.call(L,D)&&!x.hasOwnProperty(D)&&(z[D]=L[D]);if(k&&k.defaultProps)for(D in L=k.defaultProps,L)z[D]===void 0&&(z[D]=L[D]);return{$$typeof:d,type:k,key:U,ref:te,props:z,_owner:g.current}}return zr.Fragment=u,zr.jsx=S,zr.jsxs=S,zr}var nd;function Of(){return nd||(nd=1,_l.exports=Bf()),_l.exports}var s=Of(),R=$l();const Uf=Ff(R),_f=Vf({__proto__:null,default:Uf},[R]);var Ha={},Gl={exports:{}},Je={},Jl={exports:{}},Zl={};var rd;function Hf(){return rd||(rd=1,(function(i){function d(T,J){var F=T.length;T.push(J);e:for(;0<F;){var m=F-1>>>1,N=T[m];if(0<g(N,J))T[m]=J,T[F]=N,F=m;else break e}}function u(T){return T.length===0?null:T[0]}function p(T){if(T.length===0)return null;var J=T[0],F=T.pop();if(F!==J){T[0]=F;e:for(var m=0,N=T.length,Q=N>>>1;m<Q;){var X=2*(m+1)-1,$=T[X],q=X+1,se=T[q];if(0>g($,F))q<N&&0>g(se,$)?(T[m]=se,T[q]=F,m=q):(T[m]=$,T[X]=F,m=X);else if(q<N&&0>g(se,F))T[m]=se,T[q]=F,m=q;else break e}}return J}function g(T,J){var F=T.sortIndex-J.sortIndex;return F!==0?F:T.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var x=performance;i.unstable_now=function(){return x.now()}}else{var S=Date,k=S.now();i.unstable_now=function(){return S.now()-k}}var L=[],M=[],D=1,z=null,U=3,te=!1,Y=!1,G=!1,A=typeof setTimeout=="function"?setTimeout:null,oe=typeof clearTimeout=="function"?clearTimeout:null,le=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ne(T){for(var J=u(M);J!==null;){if(J.callback===null)p(M);else if(J.startTime<=T)p(M),J.sortIndex=J.expirationTime,d(L,J);else break;J=u(M)}}function ie(T){if(G=!1,ne(T),!Y)if(u(L)!==null)Y=!0,Be(Ne);else{var J=u(M);J!==null&&ge(ie,J.startTime-T)}}function Ne(T,J){Y=!1,G&&(G=!1,oe($e),$e=-1),te=!0;var F=U;try{for(ne(J),z=u(L);z!==null&&(!(z.expirationTime>J)||T&&!en());){var m=z.callback;if(typeof m=="function"){z.callback=null,U=z.priorityLevel;var N=m(z.expirationTime<=J);J=i.unstable_now(),typeof N=="function"?z.callback=N:z===u(L)&&p(L),ne(J)}else p(L);z=u(L)}if(z!==null)var Q=!0;else{var X=u(M);X!==null&&ge(ie,X.startTime-J),Q=!1}return Q}finally{z=null,U=F,te=!1}}var De=!1,Ie=null,$e=-1,Rt=5,St=-1;function en(){return!(i.unstable_now()-St<Rt)}function ht(){if(Ie!==null){var T=i.unstable_now();St=T;var J=!0;try{J=Ie(!0,T)}finally{J?Ze():(De=!1,Ie=null)}}else De=!1}var Ze;if(typeof le=="function")Ze=function(){le(ht)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,mt=lt.port2;lt.port1.onmessage=ht,Ze=function(){mt.postMessage(null)}}else Ze=function(){A(ht,0)};function Be(T){Ie=T,De||(De=!0,Ze())}function ge(T,J){$e=A(function(){T(i.unstable_now())},J)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(T){T.callback=null},i.unstable_continueExecution=function(){Y||te||(Y=!0,Be(Ne))},i.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Rt=0<T?Math.floor(1e3/T):5},i.unstable_getCurrentPriorityLevel=function(){return U},i.unstable_getFirstCallbackNode=function(){return u(L)},i.unstable_next=function(T){switch(U){case 1:case 2:case 3:var J=3;break;default:J=U}var F=U;U=J;try{return T()}finally{U=F}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(T,J){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var F=U;U=T;try{return J()}finally{U=F}},i.unstable_scheduleCallback=function(T,J,F){var m=i.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?m+F:m):F=m,T){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=F+N,T={id:D++,callback:J,priorityLevel:T,startTime:F,expirationTime:N,sortIndex:-1},F>m?(T.sortIndex=F,d(M,T),u(L)===null&&T===u(M)&&(G?(oe($e),$e=-1):G=!0,ge(ie,F-m))):(T.sortIndex=N,d(L,T),Y||te||(Y=!0,Be(Ne))),T},i.unstable_shouldYield=en,i.unstable_wrapCallback=function(T){var J=U;return function(){var F=U;U=J;try{return T.apply(this,arguments)}finally{U=F}}}})(Zl)),Zl}var ad;function Gf(){return ad||(ad=1,Jl.exports=Hf()),Jl.exports}var od;function Jf(){if(od)return Je;od=1;var i=$l(),d=Gf();function u(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p=new Set,g={};function x(e,t){S(e,t),S(e+"Capture",t)}function S(e,t){for(g[e]=t,e=0;e<t.length;e++)p.add(t[e])}var k=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),L=Object.prototype.hasOwnProperty,M=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,D={},z={};function U(e){return L.call(z,e)?!0:L.call(D,e)?!1:M.test(e)?z[e]=!0:(D[e]=!0,!1)}function te(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Y(e,t,n,r){if(t===null||typeof t>"u"||te(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function G(e,t,n,r,a,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var A={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){A[e]=new G(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];A[t]=new G(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){A[e]=new G(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){A[e]=new G(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){A[e]=new G(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){A[e]=new G(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){A[e]=new G(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){A[e]=new G(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){A[e]=new G(e,5,!1,e.toLowerCase(),null,!1,!1)});var oe=/[\-:]([a-z])/g;function le(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(oe,le);A[t]=new G(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(oe,le);A[t]=new G(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(oe,le);A[t]=new G(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){A[e]=new G(e,1,!1,e.toLowerCase(),null,!1,!1)}),A.xlinkHref=new G("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){A[e]=new G(e,1,!1,e.toLowerCase(),null,!0,!0)});function ne(e,t,n,r){var a=A.hasOwnProperty(t)?A[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Y(t,n,a,r)&&(n=null),r||a===null?U(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ie=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ne=Symbol.for("react.element"),De=Symbol.for("react.portal"),Ie=Symbol.for("react.fragment"),$e=Symbol.for("react.strict_mode"),Rt=Symbol.for("react.profiler"),St=Symbol.for("react.provider"),en=Symbol.for("react.context"),ht=Symbol.for("react.forward_ref"),Ze=Symbol.for("react.suspense"),lt=Symbol.for("react.suspense_list"),mt=Symbol.for("react.memo"),Be=Symbol.for("react.lazy"),ge=Symbol.for("react.offscreen"),T=Symbol.iterator;function J(e){return e===null||typeof e!="object"?null:(e=T&&e[T]||e["@@iterator"],typeof e=="function"?e:null)}var F=Object.assign,m;function N(e){if(m===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);m=t&&t[1]||""}return`
`+m+e}var Q=!1;function X(e,t){if(!e||Q)return"";Q=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(w){var r=w}Reflect.construct(e,[],t)}else{try{t.call()}catch(w){r=w}e.call(t.prototype)}else{try{throw Error()}catch(w){r=w}e()}}catch(w){if(w&&r&&typeof w.stack=="string"){for(var a=w.stack.split(`
`),o=r.stack.split(`
`),l=a.length-1,c=o.length-1;1<=l&&0<=c&&a[l]!==o[c];)c--;for(;1<=l&&0<=c;l--,c--)if(a[l]!==o[c]){if(l!==1||c!==1)do if(l--,c--,0>c||a[l]!==o[c]){var f=`
`+a[l].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=l&&0<=c);break}}}finally{Q=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?N(e):""}function $(e){switch(e.tag){case 5:return N(e.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 2:case 15:return e=X(e.type,!1),e;case 11:return e=X(e.type.render,!1),e;case 1:return e=X(e.type,!0),e;default:return""}}function q(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ie:return"Fragment";case De:return"Portal";case Rt:return"Profiler";case $e:return"StrictMode";case Ze:return"Suspense";case lt:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case en:return(e.displayName||"Context")+".Consumer";case St:return(e._context.displayName||"Context")+".Provider";case ht:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case mt:return t=e.displayName||null,t!==null?t:q(e.type)||"Memo";case Be:t=e._payload,e=e._init;try{return q(e(t))}catch{}}return null}function se(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return q(t);case 8:return t===$e?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function re(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pe(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Qe(e){var t=pe(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Tr(e){e._valueTracker||(e._valueTracker=Qe(e))}function oi(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=pe(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Pr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Wa(e,t){var n=t.checked;return F({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function li(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=re(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ii(e,t){t=t.checked,t!=null&&ne(e,"checked",t,!1)}function Xa(e,t){ii(e,t);var n=re(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ya(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ya(e,t.type,re(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function si(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ya(e,t,n){(t!=="number"||Pr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Gn=Array.isArray;function gn(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+re(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Ka(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(u(91));return F({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ui(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(u(92));if(Gn(n)){if(1<n.length)throw Error(u(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:re(n)}}function di(e,t){var n=re(t.value),r=re(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ci(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function fi(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $a(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?fi(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Dr,pi=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Dr=Dr||document.createElement("div"),Dr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Dr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Jn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Zn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Bd=["Webkit","ms","Moz","O"];Object.keys(Zn).forEach(function(e){Bd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Zn[t]=Zn[e]})});function hi(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Zn.hasOwnProperty(e)&&Zn[e]?(""+t).trim():t+"px"}function mi(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=hi(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var Od=F({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qa(e,t){if(t){if(Od[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(u(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(u(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(u(61))}if(t.style!=null&&typeof t.style!="object")throw Error(u(62))}}function eo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var to=null;function no(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ro=null,vn=null,wn=null;function yi(e){if(e=hr(e)){if(typeof ro!="function")throw Error(u(280));var t=e.stateNode;t&&(t=aa(t),ro(e.stateNode,e.type,t))}}function gi(e){vn?wn?wn.push(e):wn=[e]:vn=e}function vi(){if(vn){var e=vn,t=wn;if(wn=vn=null,yi(e),t)for(e=0;e<t.length;e++)yi(t[e])}}function wi(e,t){return e(t)}function xi(){}var ao=!1;function Si(e,t,n){if(ao)return e(t,n);ao=!0;try{return wi(e,t,n)}finally{ao=!1,(vn!==null||wn!==null)&&(xi(),vi())}}function Qn(e,t){var n=e.stateNode;if(n===null)return null;var r=aa(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var oo=!1;if(k)try{var Wn={};Object.defineProperty(Wn,"passive",{get:function(){oo=!0}}),window.addEventListener("test",Wn,Wn),window.removeEventListener("test",Wn,Wn)}catch{oo=!1}function Ud(e,t,n,r,a,o,l,c,f){var w=Array.prototype.slice.call(arguments,3);try{t.apply(n,w)}catch(C){this.onError(C)}}var Xn=!1,Vr=null,Fr=!1,lo=null,_d={onError:function(e){Xn=!0,Vr=e}};function Hd(e,t,n,r,a,o,l,c,f){Xn=!1,Vr=null,Ud.apply(_d,arguments)}function Gd(e,t,n,r,a,o,l,c,f){if(Hd.apply(this,arguments),Xn){if(Xn){var w=Vr;Xn=!1,Vr=null}else throw Error(u(198));Fr||(Fr=!0,lo=w)}}function tn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Li(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ki(e){if(tn(e)!==e)throw Error(u(188))}function Jd(e){var t=e.alternate;if(!t){if(t=tn(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var o=a.alternate;if(o===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return ki(a),e;if(o===r)return ki(a),t;o=o.sibling}throw Error(u(188))}if(n.return!==r.return)n=a,r=o;else{for(var l=!1,c=a.child;c;){if(c===n){l=!0,n=a,r=o;break}if(c===r){l=!0,r=a,n=o;break}c=c.sibling}if(!l){for(c=o.child;c;){if(c===n){l=!0,n=o,r=a;break}if(c===r){l=!0,r=o,n=a;break}c=c.sibling}if(!l)throw Error(u(189))}}if(n.alternate!==r)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function ji(e){return e=Jd(e),e!==null?Ni(e):null}function Ni(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ni(e);if(t!==null)return t;e=e.sibling}return null}var Ci=d.unstable_scheduleCallback,Ei=d.unstable_cancelCallback,Zd=d.unstable_shouldYield,Qd=d.unstable_requestPaint,we=d.unstable_now,Wd=d.unstable_getCurrentPriorityLevel,io=d.unstable_ImmediatePriority,bi=d.unstable_UserBlockingPriority,Ir=d.unstable_NormalPriority,Xd=d.unstable_LowPriority,zi=d.unstable_IdlePriority,Br=null,yt=null;function Yd(e){if(yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(Br,e,void 0,(e.current.flags&128)===128)}catch{}}var it=Math.clz32?Math.clz32:qd,Kd=Math.log,$d=Math.LN2;function qd(e){return e>>>=0,e===0?32:31-(Kd(e)/$d|0)|0}var Or=64,Ur=4194304;function Yn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function _r(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var c=l&~a;c!==0?r=Yn(c):(o&=l,o!==0&&(r=Yn(o)))}else l=n&~a,l!==0?r=Yn(l):o!==0&&(r=Yn(o));if(r===0)return 0;if(t!==0&&t!==r&&(t&a)===0&&(a=r&-r,o=t&-t,a>=o||a===16&&(o&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-it(t),a=1<<n,r|=e[n],t&=~a;return r}function ec(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-it(o),c=1<<l,f=a[l];f===-1?((c&n)===0||(c&r)!==0)&&(a[l]=ec(c,t)):f<=t&&(e.expiredLanes|=c),o&=~c}}function so(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Mi(){var e=Or;return Or<<=1,(Or&4194240)===0&&(Or=64),e}function uo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Kn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-it(t),e[t]=n}function nc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-it(n),o=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~o}}function co(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-it(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var ae=0;function Ri(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Ai,fo,Ti,Pi,Di,po=!1,Hr=[],At=null,Tt=null,Pt=null,$n=new Map,qn=new Map,Dt=[],rc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vi(e,t){switch(e){case"focusin":case"focusout":At=null;break;case"dragenter":case"dragleave":Tt=null;break;case"mouseover":case"mouseout":Pt=null;break;case"pointerover":case"pointerout":$n.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":qn.delete(t.pointerId)}}function er(e,t,n,r,a,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[a]},t!==null&&(t=hr(t),t!==null&&fo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function ac(e,t,n,r,a){switch(t){case"focusin":return At=er(At,e,t,n,r,a),!0;case"dragenter":return Tt=er(Tt,e,t,n,r,a),!0;case"mouseover":return Pt=er(Pt,e,t,n,r,a),!0;case"pointerover":var o=a.pointerId;return $n.set(o,er($n.get(o)||null,e,t,n,r,a)),!0;case"gotpointercapture":return o=a.pointerId,qn.set(o,er(qn.get(o)||null,e,t,n,r,a)),!0}return!1}function Fi(e){var t=nn(e.target);if(t!==null){var n=tn(t);if(n!==null){if(t=n.tag,t===13){if(t=Li(n),t!==null){e.blockedOn=t,Di(e.priority,function(){Ti(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=mo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);to=r,n.target.dispatchEvent(r),to=null}else return t=hr(n),t!==null&&fo(t),e.blockedOn=n,!1;t.shift()}return!0}function Ii(e,t,n){Gr(e)&&n.delete(t)}function oc(){po=!1,At!==null&&Gr(At)&&(At=null),Tt!==null&&Gr(Tt)&&(Tt=null),Pt!==null&&Gr(Pt)&&(Pt=null),$n.forEach(Ii),qn.forEach(Ii)}function tr(e,t){e.blockedOn===t&&(e.blockedOn=null,po||(po=!0,d.unstable_scheduleCallback(d.unstable_NormalPriority,oc)))}function nr(e){function t(a){return tr(a,e)}if(0<Hr.length){tr(Hr[0],e);for(var n=1;n<Hr.length;n++){var r=Hr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(At!==null&&tr(At,e),Tt!==null&&tr(Tt,e),Pt!==null&&tr(Pt,e),$n.forEach(t),qn.forEach(t),n=0;n<Dt.length;n++)r=Dt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Dt.length&&(n=Dt[0],n.blockedOn===null);)Fi(n),n.blockedOn===null&&Dt.shift()}var xn=ie.ReactCurrentBatchConfig,Jr=!0;function lc(e,t,n,r){var a=ae,o=xn.transition;xn.transition=null;try{ae=1,ho(e,t,n,r)}finally{ae=a,xn.transition=o}}function ic(e,t,n,r){var a=ae,o=xn.transition;xn.transition=null;try{ae=4,ho(e,t,n,r)}finally{ae=a,xn.transition=o}}function ho(e,t,n,r){if(Jr){var a=mo(e,t,n,r);if(a===null)Ao(e,t,r,Zr,n),Vi(e,r);else if(ac(a,e,t,n,r))r.stopPropagation();else if(Vi(e,r),t&4&&-1<rc.indexOf(e)){for(;a!==null;){var o=hr(a);if(o!==null&&Ai(o),o=mo(e,t,n,r),o===null&&Ao(e,t,r,Zr,n),o===a)break;a=o}a!==null&&r.stopPropagation()}else Ao(e,t,r,null,n)}}var Zr=null;function mo(e,t,n,r){if(Zr=null,e=no(r),e=nn(e),e!==null)if(t=tn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Li(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Zr=e,null}function Bi(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Wd()){case io:return 1;case bi:return 4;case Ir:case Xd:return 16;case zi:return 536870912;default:return 16}default:return 16}}var Vt=null,yo=null,Qr=null;function Oi(){if(Qr)return Qr;var e,t=yo,n=t.length,r,a="value"in Vt?Vt.value:Vt.textContent,o=a.length;for(e=0;e<n&&t[e]===a[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===a[o-r];r++);return Qr=a.slice(e,1<r?1-r:void 0)}function Wr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Xr(){return!0}function Ui(){return!1}function We(e){function t(n,r,a,o,l){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(o):o[c]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Xr:Ui,this.isPropagationStopped=Ui,this}return F(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xr)},persist:function(){},isPersistent:Xr}),t}var Sn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},go=We(Sn),rr=F({},Sn,{view:0,detail:0}),sc=We(rr),vo,wo,ar,Yr=F({},rr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:So,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ar&&(ar&&e.type==="mousemove"?(vo=e.screenX-ar.screenX,wo=e.screenY-ar.screenY):wo=vo=0,ar=e),vo)},movementY:function(e){return"movementY"in e?e.movementY:wo}}),_i=We(Yr),uc=F({},Yr,{dataTransfer:0}),dc=We(uc),cc=F({},rr,{relatedTarget:0}),xo=We(cc),fc=F({},Sn,{animationName:0,elapsedTime:0,pseudoElement:0}),pc=We(fc),hc=F({},Sn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),mc=We(hc),yc=F({},Sn,{data:0}),Hi=We(yc),gc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xc(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=wc[e])?!!t[e]:!1}function So(){return xc}var Sc=F({},rr,{key:function(e){if(e.key){var t=gc[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Wr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:So,charCode:function(e){return e.type==="keypress"?Wr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Lc=We(Sc),kc=F({},Yr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gi=We(kc),jc=F({},rr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:So}),Nc=We(jc),Cc=F({},Sn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ec=We(Cc),bc=F({},Yr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zc=We(bc),Mc=[9,13,27,32],Lo=k&&"CompositionEvent"in window,or=null;k&&"documentMode"in document&&(or=document.documentMode);var Rc=k&&"TextEvent"in window&&!or,Ji=k&&(!Lo||or&&8<or&&11>=or),Zi=" ",Qi=!1;function Wi(e,t){switch(e){case"keyup":return Mc.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xi(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ln=!1;function Ac(e,t){switch(e){case"compositionend":return Xi(t);case"keypress":return t.which!==32?null:(Qi=!0,Zi);case"textInput":return e=t.data,e===Zi&&Qi?null:e;default:return null}}function Tc(e,t){if(Ln)return e==="compositionend"||!Lo&&Wi(e,t)?(e=Oi(),Qr=yo=Vt=null,Ln=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ji&&t.locale!=="ko"?null:t.data;default:return null}}var Pc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Pc[e.type]:t==="textarea"}function Ki(e,t,n,r){gi(r),t=ta(t,"onChange"),0<t.length&&(n=new go("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var lr=null,ir=null;function Dc(e){ms(e,0)}function Kr(e){var t=En(e);if(oi(t))return e}function Vc(e,t){if(e==="change")return t}var $i=!1;if(k){var ko;if(k){var jo="oninput"in document;if(!jo){var qi=document.createElement("div");qi.setAttribute("oninput","return;"),jo=typeof qi.oninput=="function"}ko=jo}else ko=!1;$i=ko&&(!document.documentMode||9<document.documentMode)}function es(){lr&&(lr.detachEvent("onpropertychange",ts),ir=lr=null)}function ts(e){if(e.propertyName==="value"&&Kr(ir)){var t=[];Ki(t,ir,e,no(e)),Si(Dc,t)}}function Fc(e,t,n){e==="focusin"?(es(),lr=t,ir=n,lr.attachEvent("onpropertychange",ts)):e==="focusout"&&es()}function Ic(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Kr(ir)}function Bc(e,t){if(e==="click")return Kr(t)}function Oc(e,t){if(e==="input"||e==="change")return Kr(t)}function Uc(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var st=typeof Object.is=="function"?Object.is:Uc;function sr(e,t){if(st(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!L.call(t,a)||!st(e[a],t[a]))return!1}return!0}function ns(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rs(e,t){var n=ns(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ns(n)}}function as(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?as(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function os(){for(var e=window,t=Pr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Pr(e.document)}return t}function No(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function _c(e){var t=os(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&as(n.ownerDocument.documentElement,n)){if(r!==null&&No(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,o=Math.min(r.start,a);r=r.end===void 0?o:Math.min(r.end,a),!e.extend&&o>r&&(a=r,r=o,o=a),a=rs(n,o);var l=rs(n,r);a&&l&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Hc=k&&"documentMode"in document&&11>=document.documentMode,kn=null,Co=null,ur=null,Eo=!1;function ls(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Eo||kn==null||kn!==Pr(r)||(r=kn,"selectionStart"in r&&No(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ur&&sr(ur,r)||(ur=r,r=ta(Co,"onSelect"),0<r.length&&(t=new go("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=kn)))}function $r(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var jn={animationend:$r("Animation","AnimationEnd"),animationiteration:$r("Animation","AnimationIteration"),animationstart:$r("Animation","AnimationStart"),transitionend:$r("Transition","TransitionEnd")},bo={},is={};k&&(is=document.createElement("div").style,"AnimationEvent"in window||(delete jn.animationend.animation,delete jn.animationiteration.animation,delete jn.animationstart.animation),"TransitionEvent"in window||delete jn.transitionend.transition);function qr(e){if(bo[e])return bo[e];if(!jn[e])return e;var t=jn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in is)return bo[e]=t[n];return e}var ss=qr("animationend"),us=qr("animationiteration"),ds=qr("animationstart"),cs=qr("transitionend"),fs=new Map,ps="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ft(e,t){fs.set(e,t),x(t,[e])}for(var zo=0;zo<ps.length;zo++){var Mo=ps[zo],Gc=Mo.toLowerCase(),Jc=Mo[0].toUpperCase()+Mo.slice(1);Ft(Gc,"on"+Jc)}Ft(ss,"onAnimationEnd"),Ft(us,"onAnimationIteration"),Ft(ds,"onAnimationStart"),Ft("dblclick","onDoubleClick"),Ft("focusin","onFocus"),Ft("focusout","onBlur"),Ft(cs,"onTransitionEnd"),S("onMouseEnter",["mouseout","mouseover"]),S("onMouseLeave",["mouseout","mouseover"]),S("onPointerEnter",["pointerout","pointerover"]),S("onPointerLeave",["pointerout","pointerover"]),x("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),x("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),x("onBeforeInput",["compositionend","keypress","textInput","paste"]),x("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),x("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),x("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var dr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zc=new Set("cancel close invalid load scroll toggle".split(" ").concat(dr));function hs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Gd(r,t,void 0,e),e.currentTarget=null}function ms(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var c=r[l],f=c.instance,w=c.currentTarget;if(c=c.listener,f!==o&&a.isPropagationStopped())break e;hs(a,c,w),o=f}else for(l=0;l<r.length;l++){if(c=r[l],f=c.instance,w=c.currentTarget,c=c.listener,f!==o&&a.isPropagationStopped())break e;hs(a,c,w),o=f}}}if(Fr)throw e=lo,Fr=!1,lo=null,e}function de(e,t){var n=t[Io];n===void 0&&(n=t[Io]=new Set);var r=e+"__bubble";n.has(r)||(ys(t,e,2,!1),n.add(r))}function Ro(e,t,n){var r=0;t&&(r|=4),ys(n,e,r,t)}var ea="_reactListening"+Math.random().toString(36).slice(2);function cr(e){if(!e[ea]){e[ea]=!0,p.forEach(function(n){n!=="selectionchange"&&(Zc.has(n)||Ro(n,!1,e),Ro(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ea]||(t[ea]=!0,Ro("selectionchange",!1,t))}}function ys(e,t,n,r){switch(Bi(t)){case 1:var a=lc;break;case 4:a=ic;break;default:a=ho}n=a.bind(null,t,n,e),a=void 0,!oo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Ao(e,t,n,r,a){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var c=r.stateNode.containerInfo;if(c===a||c.nodeType===8&&c.parentNode===a)break;if(l===4)for(l=r.return;l!==null;){var f=l.tag;if((f===3||f===4)&&(f=l.stateNode.containerInfo,f===a||f.nodeType===8&&f.parentNode===a))return;l=l.return}for(;c!==null;){if(l=nn(c),l===null)return;if(f=l.tag,f===5||f===6){r=o=l;continue e}c=c.parentNode}}r=r.return}Si(function(){var w=o,C=no(n),E=[];e:{var j=fs.get(e);if(j!==void 0){var P=go,I=e;switch(e){case"keypress":if(Wr(n)===0)break e;case"keydown":case"keyup":P=Lc;break;case"focusin":I="focus",P=xo;break;case"focusout":I="blur",P=xo;break;case"beforeblur":case"afterblur":P=xo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":P=_i;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":P=dc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":P=Nc;break;case ss:case us:case ds:P=pc;break;case cs:P=Ec;break;case"scroll":P=sc;break;case"wheel":P=zc;break;case"copy":case"cut":case"paste":P=mc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":P=Gi}var B=(t&4)!==0,xe=!B&&e==="scroll",y=B?j!==null?j+"Capture":null:j;B=[];for(var h=w,v;h!==null;){v=h;var b=v.stateNode;if(v.tag===5&&b!==null&&(v=b,y!==null&&(b=Qn(h,y),b!=null&&B.push(fr(h,b,v)))),xe)break;h=h.return}0<B.length&&(j=new P(j,I,null,n,C),E.push({event:j,listeners:B}))}}if((t&7)===0){e:{if(j=e==="mouseover"||e==="pointerover",P=e==="mouseout"||e==="pointerout",j&&n!==to&&(I=n.relatedTarget||n.fromElement)&&(nn(I)||I[Lt]))break e;if((P||j)&&(j=C.window===C?C:(j=C.ownerDocument)?j.defaultView||j.parentWindow:window,P?(I=n.relatedTarget||n.toElement,P=w,I=I?nn(I):null,I!==null&&(xe=tn(I),I!==xe||I.tag!==5&&I.tag!==6)&&(I=null)):(P=null,I=w),P!==I)){if(B=_i,b="onMouseLeave",y="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(B=Gi,b="onPointerLeave",y="onPointerEnter",h="pointer"),xe=P==null?j:En(P),v=I==null?j:En(I),j=new B(b,h+"leave",P,n,C),j.target=xe,j.relatedTarget=v,b=null,nn(C)===w&&(B=new B(y,h+"enter",I,n,C),B.target=v,B.relatedTarget=xe,b=B),xe=b,P&&I)t:{for(B=P,y=I,h=0,v=B;v;v=Nn(v))h++;for(v=0,b=y;b;b=Nn(b))v++;for(;0<h-v;)B=Nn(B),h--;for(;0<v-h;)y=Nn(y),v--;for(;h--;){if(B===y||y!==null&&B===y.alternate)break t;B=Nn(B),y=Nn(y)}B=null}else B=null;P!==null&&gs(E,j,P,B,!1),I!==null&&xe!==null&&gs(E,xe,I,B,!0)}}e:{if(j=w?En(w):window,P=j.nodeName&&j.nodeName.toLowerCase(),P==="select"||P==="input"&&j.type==="file")var O=Vc;else if(Yi(j))if($i)O=Oc;else{O=Ic;var _=Fc}else(P=j.nodeName)&&P.toLowerCase()==="input"&&(j.type==="checkbox"||j.type==="radio")&&(O=Bc);if(O&&(O=O(e,w))){Ki(E,O,n,C);break e}_&&_(e,j,w),e==="focusout"&&(_=j._wrapperState)&&_.controlled&&j.type==="number"&&Ya(j,"number",j.value)}switch(_=w?En(w):window,e){case"focusin":(Yi(_)||_.contentEditable==="true")&&(kn=_,Co=w,ur=null);break;case"focusout":ur=Co=kn=null;break;case"mousedown":Eo=!0;break;case"contextmenu":case"mouseup":case"dragend":Eo=!1,ls(E,n,C);break;case"selectionchange":if(Hc)break;case"keydown":case"keyup":ls(E,n,C)}var H;if(Lo)e:{switch(e){case"compositionstart":var Z="onCompositionStart";break e;case"compositionend":Z="onCompositionEnd";break e;case"compositionupdate":Z="onCompositionUpdate";break e}Z=void 0}else Ln?Wi(e,n)&&(Z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Z="onCompositionStart");Z&&(Ji&&n.locale!=="ko"&&(Ln||Z!=="onCompositionStart"?Z==="onCompositionEnd"&&Ln&&(H=Oi()):(Vt=C,yo="value"in Vt?Vt.value:Vt.textContent,Ln=!0)),_=ta(w,Z),0<_.length&&(Z=new Hi(Z,e,null,n,C),E.push({event:Z,listeners:_}),H?Z.data=H:(H=Xi(n),H!==null&&(Z.data=H)))),(H=Rc?Ac(e,n):Tc(e,n))&&(w=ta(w,"onBeforeInput"),0<w.length&&(C=new Hi("onBeforeInput","beforeinput",null,n,C),E.push({event:C,listeners:w}),C.data=H))}ms(E,t)})}function fr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ta(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,o=a.stateNode;a.tag===5&&o!==null&&(a=o,o=Qn(e,n),o!=null&&r.unshift(fr(e,o,a)),o=Qn(e,t),o!=null&&r.push(fr(e,o,a))),e=e.return}return r}function Nn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function gs(e,t,n,r,a){for(var o=t._reactName,l=[];n!==null&&n!==r;){var c=n,f=c.alternate,w=c.stateNode;if(f!==null&&f===r)break;c.tag===5&&w!==null&&(c=w,a?(f=Qn(n,o),f!=null&&l.unshift(fr(n,f,c))):a||(f=Qn(n,o),f!=null&&l.push(fr(n,f,c)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Qc=/\r\n?/g,Wc=/\u0000|\uFFFD/g;function vs(e){return(typeof e=="string"?e:""+e).replace(Qc,`
`).replace(Wc,"")}function na(e,t,n){if(t=vs(t),vs(e)!==t&&n)throw Error(u(425))}function ra(){}var To=null,Po=null;function Do(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Vo=typeof setTimeout=="function"?setTimeout:void 0,Xc=typeof clearTimeout=="function"?clearTimeout:void 0,ws=typeof Promise=="function"?Promise:void 0,Yc=typeof queueMicrotask=="function"?queueMicrotask:typeof ws<"u"?function(e){return ws.resolve(null).then(e).catch(Kc)}:Vo;function Kc(e){setTimeout(function(){throw e})}function Fo(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),nr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);nr(t)}function It(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function xs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Cn=Math.random().toString(36).slice(2),gt="__reactFiber$"+Cn,pr="__reactProps$"+Cn,Lt="__reactContainer$"+Cn,Io="__reactEvents$"+Cn,$c="__reactListeners$"+Cn,qc="__reactHandles$"+Cn;function nn(e){var t=e[gt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Lt]||n[gt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=xs(e);e!==null;){if(n=e[gt])return n;e=xs(e)}return t}e=n,n=e.parentNode}return null}function hr(e){return e=e[gt]||e[Lt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function En(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(u(33))}function aa(e){return e[pr]||null}var Bo=[],bn=-1;function Bt(e){return{current:e}}function ce(e){0>bn||(e.current=Bo[bn],Bo[bn]=null,bn--)}function ue(e,t){bn++,Bo[bn]=e.current,e.current=t}var Ot={},Re=Bt(Ot),Oe=Bt(!1),rn=Ot;function zn(e,t){var n=e.type.contextTypes;if(!n)return Ot;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},o;for(o in n)a[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Ue(e){return e=e.childContextTypes,e!=null}function oa(){ce(Oe),ce(Re)}function Ss(e,t,n){if(Re.current!==Ot)throw Error(u(168));ue(Re,t),ue(Oe,n)}function Ls(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(u(108,se(e)||"Unknown",a));return F({},n,r)}function la(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ot,rn=Re.current,ue(Re,e),ue(Oe,Oe.current),!0}function ks(e,t,n){var r=e.stateNode;if(!r)throw Error(u(169));n?(e=Ls(e,t,rn),r.__reactInternalMemoizedMergedChildContext=e,ce(Oe),ce(Re),ue(Re,e)):ce(Oe),ue(Oe,n)}var kt=null,ia=!1,Oo=!1;function js(e){kt===null?kt=[e]:kt.push(e)}function ef(e){ia=!0,js(e)}function Ut(){if(!Oo&&kt!==null){Oo=!0;var e=0,t=ae;try{var n=kt;for(ae=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}kt=null,ia=!1}catch(a){throw kt!==null&&(kt=kt.slice(e+1)),Ci(io,Ut),a}finally{ae=t,Oo=!1}}return null}var Mn=[],Rn=0,sa=null,ua=0,qe=[],et=0,an=null,jt=1,Nt="";function on(e,t){Mn[Rn++]=ua,Mn[Rn++]=sa,sa=e,ua=t}function Ns(e,t,n){qe[et++]=jt,qe[et++]=Nt,qe[et++]=an,an=e;var r=jt;e=Nt;var a=32-it(r)-1;r&=~(1<<a),n+=1;var o=32-it(t)+a;if(30<o){var l=a-a%5;o=(r&(1<<l)-1).toString(32),r>>=l,a-=l,jt=1<<32-it(t)+a|n<<a|r,Nt=o+e}else jt=1<<o|n<<a|r,Nt=e}function Uo(e){e.return!==null&&(on(e,1),Ns(e,1,0))}function _o(e){for(;e===sa;)sa=Mn[--Rn],Mn[Rn]=null,ua=Mn[--Rn],Mn[Rn]=null;for(;e===an;)an=qe[--et],qe[et]=null,Nt=qe[--et],qe[et]=null,jt=qe[--et],qe[et]=null}var Xe=null,Ye=null,he=!1,ut=null;function Cs(e,t){var n=at(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Es(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Xe=e,Ye=It(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Xe=e,Ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=an!==null?{id:jt,overflow:Nt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=at(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Xe=e,Ye=null,!0):!1;default:return!1}}function Ho(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Go(e){if(he){var t=Ye;if(t){var n=t;if(!Es(e,t)){if(Ho(e))throw Error(u(418));t=It(n.nextSibling);var r=Xe;t&&Es(e,t)?Cs(r,n):(e.flags=e.flags&-4097|2,he=!1,Xe=e)}}else{if(Ho(e))throw Error(u(418));e.flags=e.flags&-4097|2,he=!1,Xe=e}}}function bs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Xe=e}function da(e){if(e!==Xe)return!1;if(!he)return bs(e),he=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Do(e.type,e.memoizedProps)),t&&(t=Ye)){if(Ho(e))throw zs(),Error(u(418));for(;t;)Cs(e,t),t=It(t.nextSibling)}if(bs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ye=It(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ye=null}}else Ye=Xe?It(e.stateNode.nextSibling):null;return!0}function zs(){for(var e=Ye;e;)e=It(e.nextSibling)}function An(){Ye=Xe=null,he=!1}function Jo(e){ut===null?ut=[e]:ut.push(e)}var tf=ie.ReactCurrentBatchConfig;function mr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(u(309));var r=n.stateNode}if(!r)throw Error(u(147,e));var a=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var c=a.refs;l===null?delete c[o]:c[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(u(284));if(!n._owner)throw Error(u(290,e))}return e}function ca(e,t){throw e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ms(e){var t=e._init;return t(e._payload)}function Rs(e){function t(y,h){if(e){var v=y.deletions;v===null?(y.deletions=[h],y.flags|=16):v.push(h)}}function n(y,h){if(!e)return null;for(;h!==null;)t(y,h),h=h.sibling;return null}function r(y,h){for(y=new Map;h!==null;)h.key!==null?y.set(h.key,h):y.set(h.index,h),h=h.sibling;return y}function a(y,h){return y=Xt(y,h),y.index=0,y.sibling=null,y}function o(y,h,v){return y.index=v,e?(v=y.alternate,v!==null?(v=v.index,v<h?(y.flags|=2,h):v):(y.flags|=2,h)):(y.flags|=1048576,h)}function l(y){return e&&y.alternate===null&&(y.flags|=2),y}function c(y,h,v,b){return h===null||h.tag!==6?(h=Vl(v,y.mode,b),h.return=y,h):(h=a(h,v),h.return=y,h)}function f(y,h,v,b){var O=v.type;return O===Ie?C(y,h,v.props.children,b,v.key):h!==null&&(h.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Be&&Ms(O)===h.type)?(b=a(h,v.props),b.ref=mr(y,h,v),b.return=y,b):(b=Da(v.type,v.key,v.props,null,y.mode,b),b.ref=mr(y,h,v),b.return=y,b)}function w(y,h,v,b){return h===null||h.tag!==4||h.stateNode.containerInfo!==v.containerInfo||h.stateNode.implementation!==v.implementation?(h=Fl(v,y.mode,b),h.return=y,h):(h=a(h,v.children||[]),h.return=y,h)}function C(y,h,v,b,O){return h===null||h.tag!==7?(h=hn(v,y.mode,b,O),h.return=y,h):(h=a(h,v),h.return=y,h)}function E(y,h,v){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Vl(""+h,y.mode,v),h.return=y,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ne:return v=Da(h.type,h.key,h.props,null,y.mode,v),v.ref=mr(y,null,h),v.return=y,v;case De:return h=Fl(h,y.mode,v),h.return=y,h;case Be:var b=h._init;return E(y,b(h._payload),v)}if(Gn(h)||J(h))return h=hn(h,y.mode,v,null),h.return=y,h;ca(y,h)}return null}function j(y,h,v,b){var O=h!==null?h.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return O!==null?null:c(y,h,""+v,b);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ne:return v.key===O?f(y,h,v,b):null;case De:return v.key===O?w(y,h,v,b):null;case Be:return O=v._init,j(y,h,O(v._payload),b)}if(Gn(v)||J(v))return O!==null?null:C(y,h,v,b,null);ca(y,v)}return null}function P(y,h,v,b,O){if(typeof b=="string"&&b!==""||typeof b=="number")return y=y.get(v)||null,c(h,y,""+b,O);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ne:return y=y.get(b.key===null?v:b.key)||null,f(h,y,b,O);case De:return y=y.get(b.key===null?v:b.key)||null,w(h,y,b,O);case Be:var _=b._init;return P(y,h,v,_(b._payload),O)}if(Gn(b)||J(b))return y=y.get(v)||null,C(h,y,b,O,null);ca(h,b)}return null}function I(y,h,v,b){for(var O=null,_=null,H=h,Z=h=0,be=null;H!==null&&Z<v.length;Z++){H.index>Z?(be=H,H=null):be=H.sibling;var ee=j(y,H,v[Z],b);if(ee===null){H===null&&(H=be);break}e&&H&&ee.alternate===null&&t(y,H),h=o(ee,h,Z),_===null?O=ee:_.sibling=ee,_=ee,H=be}if(Z===v.length)return n(y,H),he&&on(y,Z),O;if(H===null){for(;Z<v.length;Z++)H=E(y,v[Z],b),H!==null&&(h=o(H,h,Z),_===null?O=H:_.sibling=H,_=H);return he&&on(y,Z),O}for(H=r(y,H);Z<v.length;Z++)be=P(H,y,Z,v[Z],b),be!==null&&(e&&be.alternate!==null&&H.delete(be.key===null?Z:be.key),h=o(be,h,Z),_===null?O=be:_.sibling=be,_=be);return e&&H.forEach(function(Yt){return t(y,Yt)}),he&&on(y,Z),O}function B(y,h,v,b){var O=J(v);if(typeof O!="function")throw Error(u(150));if(v=O.call(v),v==null)throw Error(u(151));for(var _=O=null,H=h,Z=h=0,be=null,ee=v.next();H!==null&&!ee.done;Z++,ee=v.next()){H.index>Z?(be=H,H=null):be=H.sibling;var Yt=j(y,H,ee.value,b);if(Yt===null){H===null&&(H=be);break}e&&H&&Yt.alternate===null&&t(y,H),h=o(Yt,h,Z),_===null?O=Yt:_.sibling=Yt,_=Yt,H=be}if(ee.done)return n(y,H),he&&on(y,Z),O;if(H===null){for(;!ee.done;Z++,ee=v.next())ee=E(y,ee.value,b),ee!==null&&(h=o(ee,h,Z),_===null?O=ee:_.sibling=ee,_=ee);return he&&on(y,Z),O}for(H=r(y,H);!ee.done;Z++,ee=v.next())ee=P(H,y,Z,ee.value,b),ee!==null&&(e&&ee.alternate!==null&&H.delete(ee.key===null?Z:ee.key),h=o(ee,h,Z),_===null?O=ee:_.sibling=ee,_=ee);return e&&H.forEach(function(Df){return t(y,Df)}),he&&on(y,Z),O}function xe(y,h,v,b){if(typeof v=="object"&&v!==null&&v.type===Ie&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ne:e:{for(var O=v.key,_=h;_!==null;){if(_.key===O){if(O=v.type,O===Ie){if(_.tag===7){n(y,_.sibling),h=a(_,v.props.children),h.return=y,y=h;break e}}else if(_.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Be&&Ms(O)===_.type){n(y,_.sibling),h=a(_,v.props),h.ref=mr(y,_,v),h.return=y,y=h;break e}n(y,_);break}else t(y,_);_=_.sibling}v.type===Ie?(h=hn(v.props.children,y.mode,b,v.key),h.return=y,y=h):(b=Da(v.type,v.key,v.props,null,y.mode,b),b.ref=mr(y,h,v),b.return=y,y=b)}return l(y);case De:e:{for(_=v.key;h!==null;){if(h.key===_)if(h.tag===4&&h.stateNode.containerInfo===v.containerInfo&&h.stateNode.implementation===v.implementation){n(y,h.sibling),h=a(h,v.children||[]),h.return=y,y=h;break e}else{n(y,h);break}else t(y,h);h=h.sibling}h=Fl(v,y.mode,b),h.return=y,y=h}return l(y);case Be:return _=v._init,xe(y,h,_(v._payload),b)}if(Gn(v))return I(y,h,v,b);if(J(v))return B(y,h,v,b);ca(y,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,h!==null&&h.tag===6?(n(y,h.sibling),h=a(h,v),h.return=y,y=h):(n(y,h),h=Vl(v,y.mode,b),h.return=y,y=h),l(y)):n(y,h)}return xe}var Tn=Rs(!0),As=Rs(!1),fa=Bt(null),pa=null,Pn=null,Zo=null;function Qo(){Zo=Pn=pa=null}function Wo(e){var t=fa.current;ce(fa),e._currentValue=t}function Xo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Dn(e,t){pa=e,Zo=Pn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(_e=!0),e.firstContext=null)}function tt(e){var t=e._currentValue;if(Zo!==e)if(e={context:e,memoizedValue:t,next:null},Pn===null){if(pa===null)throw Error(u(308));Pn=e,pa.dependencies={lanes:0,firstContext:e}}else Pn=Pn.next=e;return t}var ln=null;function Yo(e){ln===null?ln=[e]:ln.push(e)}function Ts(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,Yo(t)):(n.next=a.next,a.next=n),t.interleaved=n,Ct(e,r)}function Ct(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var _t=!1;function Ko(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ps(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Et(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ht(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(K&2)!==0){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Ct(e,n)}return a=r.interleaved,a===null?(t.next=t,Yo(r)):(t.next=a.next,a.next=t),r.interleaved=t,Ct(e,n)}function ha(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,co(e,n)}}function Ds(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?a=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?a=o=t:o=o.next=t}else a=o=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ma(e,t,n,r){var a=e.updateQueue;_t=!1;var o=a.firstBaseUpdate,l=a.lastBaseUpdate,c=a.shared.pending;if(c!==null){a.shared.pending=null;var f=c,w=f.next;f.next=null,l===null?o=w:l.next=w,l=f;var C=e.alternate;C!==null&&(C=C.updateQueue,c=C.lastBaseUpdate,c!==l&&(c===null?C.firstBaseUpdate=w:c.next=w,C.lastBaseUpdate=f))}if(o!==null){var E=a.baseState;l=0,C=w=f=null,c=o;do{var j=c.lane,P=c.eventTime;if((r&j)===j){C!==null&&(C=C.next={eventTime:P,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var I=e,B=c;switch(j=t,P=n,B.tag){case 1:if(I=B.payload,typeof I=="function"){E=I.call(P,E,j);break e}E=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=B.payload,j=typeof I=="function"?I.call(P,E,j):I,j==null)break e;E=F({},E,j);break e;case 2:_t=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,j=a.effects,j===null?a.effects=[c]:j.push(c))}else P={eventTime:P,lane:j,tag:c.tag,payload:c.payload,callback:c.callback,next:null},C===null?(w=C=P,f=E):C=C.next=P,l|=j;if(c=c.next,c===null){if(c=a.shared.pending,c===null)break;j=c,c=j.next,j.next=null,a.lastBaseUpdate=j,a.shared.pending=null}}while(!0);if(C===null&&(f=E),a.baseState=f,a.firstBaseUpdate=w,a.lastBaseUpdate=C,t=a.shared.interleaved,t!==null){a=t;do l|=a.lane,a=a.next;while(a!==t)}else o===null&&(a.shared.lanes=0);dn|=l,e.lanes=l,e.memoizedState=E}}function Vs(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(u(191,a));a.call(r)}}}var yr={},vt=Bt(yr),gr=Bt(yr),vr=Bt(yr);function sn(e){if(e===yr)throw Error(u(174));return e}function $o(e,t){switch(ue(vr,t),ue(gr,e),ue(vt,yr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:$a(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=$a(t,e)}ce(vt),ue(vt,t)}function Vn(){ce(vt),ce(gr),ce(vr)}function Fs(e){sn(vr.current);var t=sn(vt.current),n=$a(t,e.type);t!==n&&(ue(gr,e),ue(vt,n))}function qo(e){gr.current===e&&(ce(vt),ce(gr))}var me=Bt(0);function ya(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var el=[];function tl(){for(var e=0;e<el.length;e++)el[e]._workInProgressVersionPrimary=null;el.length=0}var ga=ie.ReactCurrentDispatcher,nl=ie.ReactCurrentBatchConfig,un=0,ye=null,ke=null,Ce=null,va=!1,wr=!1,xr=0,nf=0;function Ae(){throw Error(u(321))}function rl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!st(e[n],t[n]))return!1;return!0}function al(e,t,n,r,a,o){if(un=o,ye=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ga.current=e===null||e.memoizedState===null?lf:sf,e=n(r,a),wr){o=0;do{if(wr=!1,xr=0,25<=o)throw Error(u(301));o+=1,Ce=ke=null,t.updateQueue=null,ga.current=uf,e=n(r,a)}while(wr)}if(ga.current=Sa,t=ke!==null&&ke.next!==null,un=0,Ce=ke=ye=null,va=!1,t)throw Error(u(300));return e}function ol(){var e=xr!==0;return xr=0,e}function wt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ce===null?ye.memoizedState=Ce=e:Ce=Ce.next=e,Ce}function nt(){if(ke===null){var e=ye.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var t=Ce===null?ye.memoizedState:Ce.next;if(t!==null)Ce=t,ke=e;else{if(e===null)throw Error(u(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},Ce===null?ye.memoizedState=Ce=e:Ce=Ce.next=e}return Ce}function Sr(e,t){return typeof t=="function"?t(e):t}function ll(e){var t=nt(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var r=ke,a=r.baseQueue,o=n.pending;if(o!==null){if(a!==null){var l=a.next;a.next=o.next,o.next=l}r.baseQueue=a=o,n.pending=null}if(a!==null){o=a.next,r=r.baseState;var c=l=null,f=null,w=o;do{var C=w.lane;if((un&C)===C)f!==null&&(f=f.next={lane:0,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),r=w.hasEagerState?w.eagerState:e(r,w.action);else{var E={lane:C,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null};f===null?(c=f=E,l=r):f=f.next=E,ye.lanes|=C,dn|=C}w=w.next}while(w!==null&&w!==o);f===null?l=r:f.next=c,st(r,t.memoizedState)||(_e=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=f,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do o=a.lane,ye.lanes|=o,dn|=o,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function il(e){var t=nt(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var l=a=a.next;do o=e(o,l.action),l=l.next;while(l!==a);st(o,t.memoizedState)||(_e=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Is(){}function Bs(e,t){var n=ye,r=nt(),a=t(),o=!st(r.memoizedState,a);if(o&&(r.memoizedState=a,_e=!0),r=r.queue,sl(_s.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ce!==null&&Ce.memoizedState.tag&1){if(n.flags|=2048,Lr(9,Us.bind(null,n,r,a,t),void 0,null),Ee===null)throw Error(u(349));(un&30)!==0||Os(n,t,a)}return a}function Os(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ye.updateQueue,t===null?(t={lastEffect:null,stores:null},ye.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Us(e,t,n,r){t.value=n,t.getSnapshot=r,Hs(t)&&Gs(e)}function _s(e,t,n){return n(function(){Hs(t)&&Gs(e)})}function Hs(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!st(e,n)}catch{return!0}}function Gs(e){var t=Ct(e,1);t!==null&&pt(t,e,1,-1)}function Js(e){var t=wt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Sr,lastRenderedState:e},t.queue=e,e=e.dispatch=of.bind(null,ye,e),[t.memoizedState,e]}function Lr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ye.updateQueue,t===null?(t={lastEffect:null,stores:null},ye.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Zs(){return nt().memoizedState}function wa(e,t,n,r){var a=wt();ye.flags|=e,a.memoizedState=Lr(1|t,n,void 0,r===void 0?null:r)}function xa(e,t,n,r){var a=nt();r=r===void 0?null:r;var o=void 0;if(ke!==null){var l=ke.memoizedState;if(o=l.destroy,r!==null&&rl(r,l.deps)){a.memoizedState=Lr(t,n,o,r);return}}ye.flags|=e,a.memoizedState=Lr(1|t,n,o,r)}function Qs(e,t){return wa(8390656,8,e,t)}function sl(e,t){return xa(2048,8,e,t)}function Ws(e,t){return xa(4,2,e,t)}function Xs(e,t){return xa(4,4,e,t)}function Ys(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ks(e,t,n){return n=n!=null?n.concat([e]):null,xa(4,4,Ys.bind(null,t,e),n)}function ul(){}function $s(e,t){var n=nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&rl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function qs(e,t){var n=nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&rl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function eu(e,t,n){return(un&21)===0?(e.baseState&&(e.baseState=!1,_e=!0),e.memoizedState=n):(st(n,t)||(n=Mi(),ye.lanes|=n,dn|=n,e.baseState=!0),t)}function rf(e,t){var n=ae;ae=n!==0&&4>n?n:4,e(!0);var r=nl.transition;nl.transition={};try{e(!1),t()}finally{ae=n,nl.transition=r}}function tu(){return nt().memoizedState}function af(e,t,n){var r=Qt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},nu(e))ru(t,n);else if(n=Ts(e,t,n,r),n!==null){var a=Fe();pt(n,e,r,a),au(n,t,r)}}function of(e,t,n){var r=Qt(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(nu(e))ru(t,a);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,c=o(l,n);if(a.hasEagerState=!0,a.eagerState=c,st(c,l)){var f=t.interleaved;f===null?(a.next=a,Yo(t)):(a.next=f.next,f.next=a),t.interleaved=a;return}}catch{}n=Ts(e,t,a,r),n!==null&&(a=Fe(),pt(n,e,r,a),au(n,t,r))}}function nu(e){var t=e.alternate;return e===ye||t!==null&&t===ye}function ru(e,t){wr=va=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function au(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,co(e,n)}}var Sa={readContext:tt,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useInsertionEffect:Ae,useLayoutEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useMutableSource:Ae,useSyncExternalStore:Ae,useId:Ae,unstable_isNewReconciler:!1},lf={readContext:tt,useCallback:function(e,t){return wt().memoizedState=[e,t===void 0?null:t],e},useContext:tt,useEffect:Qs,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,wa(4194308,4,Ys.bind(null,t,e),n)},useLayoutEffect:function(e,t){return wa(4194308,4,e,t)},useInsertionEffect:function(e,t){return wa(4,2,e,t)},useMemo:function(e,t){var n=wt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=wt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=af.bind(null,ye,e),[r.memoizedState,e]},useRef:function(e){var t=wt();return e={current:e},t.memoizedState=e},useState:Js,useDebugValue:ul,useDeferredValue:function(e){return wt().memoizedState=e},useTransition:function(){var e=Js(!1),t=e[0];return e=rf.bind(null,e[1]),wt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ye,a=wt();if(he){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),Ee===null)throw Error(u(349));(un&30)!==0||Os(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Qs(_s.bind(null,r,o,e),[e]),r.flags|=2048,Lr(9,Us.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=wt(),t=Ee.identifierPrefix;if(he){var n=Nt,r=jt;n=(r&~(1<<32-it(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=xr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=nf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},sf={readContext:tt,useCallback:$s,useContext:tt,useEffect:sl,useImperativeHandle:Ks,useInsertionEffect:Ws,useLayoutEffect:Xs,useMemo:qs,useReducer:ll,useRef:Zs,useState:function(){return ll(Sr)},useDebugValue:ul,useDeferredValue:function(e){var t=nt();return eu(t,ke.memoizedState,e)},useTransition:function(){var e=ll(Sr)[0],t=nt().memoizedState;return[e,t]},useMutableSource:Is,useSyncExternalStore:Bs,useId:tu,unstable_isNewReconciler:!1},uf={readContext:tt,useCallback:$s,useContext:tt,useEffect:sl,useImperativeHandle:Ks,useInsertionEffect:Ws,useLayoutEffect:Xs,useMemo:qs,useReducer:il,useRef:Zs,useState:function(){return il(Sr)},useDebugValue:ul,useDeferredValue:function(e){var t=nt();return ke===null?t.memoizedState=e:eu(t,ke.memoizedState,e)},useTransition:function(){var e=il(Sr)[0],t=nt().memoizedState;return[e,t]},useMutableSource:Is,useSyncExternalStore:Bs,useId:tu,unstable_isNewReconciler:!1};function dt(e,t){if(e&&e.defaultProps){t=F({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function dl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:F({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var La={isMounted:function(e){return(e=e._reactInternals)?tn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Fe(),a=Qt(e),o=Et(r,a);o.payload=t,n!=null&&(o.callback=n),t=Ht(e,o,a),t!==null&&(pt(t,e,a,r),ha(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Fe(),a=Qt(e),o=Et(r,a);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Ht(e,o,a),t!==null&&(pt(t,e,a,r),ha(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Fe(),r=Qt(e),a=Et(n,r);a.tag=2,t!=null&&(a.callback=t),t=Ht(e,a,r),t!==null&&(pt(t,e,r,n),ha(t,e,r))}};function ou(e,t,n,r,a,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!sr(n,r)||!sr(a,o):!0}function lu(e,t,n){var r=!1,a=Ot,o=t.contextType;return typeof o=="object"&&o!==null?o=tt(o):(a=Ue(t)?rn:Re.current,r=t.contextTypes,o=(r=r!=null)?zn(e,a):Ot),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=La,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),t}function iu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&La.enqueueReplaceState(t,t.state,null)}function cl(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Ko(e);var o=t.contextType;typeof o=="object"&&o!==null?a.context=tt(o):(o=Ue(t)?rn:Re.current,a.context=zn(e,o)),a.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(dl(e,t,o,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&La.enqueueReplaceState(a,a.state,null),ma(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Fn(e,t){try{var n="",r=t;do n+=$(r),r=r.return;while(r);var a=n}catch(o){a=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:a,digest:null}}function fl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function pl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var df=typeof WeakMap=="function"?WeakMap:Map;function su(e,t,n){n=Et(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){za||(za=!0,bl=r),pl(e,t)},n}function uu(e,t,n){n=Et(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){pl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){pl(e,t),typeof r!="function"&&(Jt===null?Jt=new Set([this]):Jt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function du(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new df;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=jf.bind(null,e,t,n),t.then(e,e))}function cu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function fu(e,t,n,r,a){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Et(-1,1),t.tag=2,Ht(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var cf=ie.ReactCurrentOwner,_e=!1;function Ve(e,t,n,r){t.child=e===null?As(t,null,n,r):Tn(t,e.child,n,r)}function pu(e,t,n,r,a){n=n.render;var o=t.ref;return Dn(t,a),r=al(e,t,n,r,o,a),n=ol(),e!==null&&!_e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,bt(e,t,a)):(he&&n&&Uo(t),t.flags|=1,Ve(e,t,r,a),t.child)}function hu(e,t,n,r,a){if(e===null){var o=n.type;return typeof o=="function"&&!Dl(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,mu(e,t,o,r,a)):(e=Da(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&a)===0){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:sr,n(l,r)&&e.ref===t.ref)return bt(e,t,a)}return t.flags|=1,e=Xt(o,r),e.ref=t.ref,e.return=t,t.child=e}function mu(e,t,n,r,a){if(e!==null){var o=e.memoizedProps;if(sr(o,r)&&e.ref===t.ref)if(_e=!1,t.pendingProps=r=o,(e.lanes&a)!==0)(e.flags&131072)!==0&&(_e=!0);else return t.lanes=e.lanes,bt(e,t,a)}return hl(e,t,n,r,a)}function yu(e,t,n){var r=t.pendingProps,a=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ue(Bn,Ke),Ke|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ue(Bn,Ke),Ke|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ue(Bn,Ke),Ke|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ue(Bn,Ke),Ke|=r;return Ve(e,t,a,n),t.child}function gu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function hl(e,t,n,r,a){var o=Ue(n)?rn:Re.current;return o=zn(t,o),Dn(t,a),n=al(e,t,n,r,o,a),r=ol(),e!==null&&!_e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,bt(e,t,a)):(he&&r&&Uo(t),t.flags|=1,Ve(e,t,n,a),t.child)}function vu(e,t,n,r,a){if(Ue(n)){var o=!0;la(t)}else o=!1;if(Dn(t,a),t.stateNode===null)ja(e,t),lu(t,n,r),cl(t,n,r,a),r=!0;else if(e===null){var l=t.stateNode,c=t.memoizedProps;l.props=c;var f=l.context,w=n.contextType;typeof w=="object"&&w!==null?w=tt(w):(w=Ue(n)?rn:Re.current,w=zn(t,w));var C=n.getDerivedStateFromProps,E=typeof C=="function"||typeof l.getSnapshotBeforeUpdate=="function";E||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==r||f!==w)&&iu(t,l,r,w),_t=!1;var j=t.memoizedState;l.state=j,ma(t,r,l,a),f=t.memoizedState,c!==r||j!==f||Oe.current||_t?(typeof C=="function"&&(dl(t,n,C,r),f=t.memoizedState),(c=_t||ou(t,n,c,r,j,f,w))?(E||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=f),l.props=r,l.state=f,l.context=w,r=c):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Ps(e,t),c=t.memoizedProps,w=t.type===t.elementType?c:dt(t.type,c),l.props=w,E=t.pendingProps,j=l.context,f=n.contextType,typeof f=="object"&&f!==null?f=tt(f):(f=Ue(n)?rn:Re.current,f=zn(t,f));var P=n.getDerivedStateFromProps;(C=typeof P=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==E||j!==f)&&iu(t,l,r,f),_t=!1,j=t.memoizedState,l.state=j,ma(t,r,l,a);var I=t.memoizedState;c!==E||j!==I||Oe.current||_t?(typeof P=="function"&&(dl(t,n,P,r),I=t.memoizedState),(w=_t||ou(t,n,w,r,j,I,f)||!1)?(C||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,I,f),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,I,f)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||c===e.memoizedProps&&j===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&j===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=I),l.props=r,l.state=I,l.context=f,r=w):(typeof l.componentDidUpdate!="function"||c===e.memoizedProps&&j===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&j===e.memoizedState||(t.flags|=1024),r=!1)}return ml(e,t,n,r,o,a)}function ml(e,t,n,r,a,o){gu(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return a&&ks(t,n,!1),bt(e,t,o);r=t.stateNode,cf.current=t;var c=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Tn(t,e.child,null,o),t.child=Tn(t,null,c,o)):Ve(e,t,c,o),t.memoizedState=r.state,a&&ks(t,n,!0),t.child}function wu(e){var t=e.stateNode;t.pendingContext?Ss(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ss(e,t.context,!1),$o(e,t.containerInfo)}function xu(e,t,n,r,a){return An(),Jo(a),t.flags|=256,Ve(e,t,n,r),t.child}var yl={dehydrated:null,treeContext:null,retryLane:0};function gl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Su(e,t,n){var r=t.pendingProps,a=me.current,o=!1,l=(t.flags&128)!==0,c;if((c=l)||(c=e!==null&&e.memoizedState===null?!1:(a&2)!==0),c?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),ue(me,a&1),e===null)return Go(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Va(l,r,0,null),e=hn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=gl(n),t.memoizedState=yl,e):vl(t,l));if(a=e.memoizedState,a!==null&&(c=a.dehydrated,c!==null))return ff(e,t,l,r,c,a,n);if(o){o=r.fallback,l=t.mode,a=e.child,c=a.sibling;var f={mode:"hidden",children:r.children};return(l&1)===0&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=f,t.deletions=null):(r=Xt(a,f),r.subtreeFlags=a.subtreeFlags&14680064),c!==null?o=Xt(c,o):(o=hn(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?gl(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=yl,r}return o=e.child,e=o.sibling,r=Xt(o,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function vl(e,t){return t=Va({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ka(e,t,n,r){return r!==null&&Jo(r),Tn(t,e.child,null,n),e=vl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ff(e,t,n,r,a,o,l){if(n)return t.flags&256?(t.flags&=-257,r=fl(Error(u(422))),ka(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,a=t.mode,r=Va({mode:"visible",children:r.children},a,0,null),o=hn(o,a,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,(t.mode&1)!==0&&Tn(t,e.child,null,l),t.child.memoizedState=gl(l),t.memoizedState=yl,o);if((t.mode&1)===0)return ka(e,t,l,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var c=r.dgst;return r=c,o=Error(u(419)),r=fl(o,r,void 0),ka(e,t,l,r)}if(c=(l&e.childLanes)!==0,_e||c){if(r=Ee,r!==null){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(r.suspendedLanes|l))!==0?0:a,a!==0&&a!==o.retryLane&&(o.retryLane=a,Ct(e,a),pt(r,e,a,-1))}return Pl(),r=fl(Error(u(421))),ka(e,t,l,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Nf.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,Ye=It(a.nextSibling),Xe=t,he=!0,ut=null,e!==null&&(qe[et++]=jt,qe[et++]=Nt,qe[et++]=an,jt=e.id,Nt=e.overflow,an=t),t=vl(t,r.children),t.flags|=4096,t)}function Lu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Xo(e.return,t,n)}function wl(e,t,n,r,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=a)}function ku(e,t,n){var r=t.pendingProps,a=r.revealOrder,o=r.tail;if(Ve(e,t,r.children,n),r=me.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Lu(e,n,t);else if(e.tag===19)Lu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ue(me,r),(t.mode&1)===0)t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&ya(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),wl(t,!1,a,n,o);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&ya(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}wl(t,!0,n,null,o);break;case"together":wl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ja(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function bt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),dn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=Xt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Xt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function pf(e,t,n){switch(t.tag){case 3:wu(t),An();break;case 5:Fs(t);break;case 1:Ue(t.type)&&la(t);break;case 4:$o(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;ue(fa,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ue(me,me.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Su(e,t,n):(ue(me,me.current&1),e=bt(e,t,n),e!==null?e.sibling:null);ue(me,me.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return ku(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),ue(me,me.current),r)break;return null;case 22:case 23:return t.lanes=0,yu(e,t,n)}return bt(e,t,n)}var ju,xl,Nu,Cu;ju=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},xl=function(){},Nu=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,sn(vt.current);var o=null;switch(n){case"input":a=Wa(e,a),r=Wa(e,r),o=[];break;case"select":a=F({},a,{value:void 0}),r=F({},r,{value:void 0}),o=[];break;case"textarea":a=Ka(e,a),r=Ka(e,r),o=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ra)}qa(n,r);var l;n=null;for(w in a)if(!r.hasOwnProperty(w)&&a.hasOwnProperty(w)&&a[w]!=null)if(w==="style"){var c=a[w];for(l in c)c.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else w!=="dangerouslySetInnerHTML"&&w!=="children"&&w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&w!=="autoFocus"&&(g.hasOwnProperty(w)?o||(o=[]):(o=o||[]).push(w,null));for(w in r){var f=r[w];if(c=a?.[w],r.hasOwnProperty(w)&&f!==c&&(f!=null||c!=null))if(w==="style")if(c){for(l in c)!c.hasOwnProperty(l)||f&&f.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in f)f.hasOwnProperty(l)&&c[l]!==f[l]&&(n||(n={}),n[l]=f[l])}else n||(o||(o=[]),o.push(w,n)),n=f;else w==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,c=c?c.__html:void 0,f!=null&&c!==f&&(o=o||[]).push(w,f)):w==="children"?typeof f!="string"&&typeof f!="number"||(o=o||[]).push(w,""+f):w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&(g.hasOwnProperty(w)?(f!=null&&w==="onScroll"&&de("scroll",e),o||c===f||(o=[])):(o=o||[]).push(w,f))}n&&(o=o||[]).push("style",n);var w=o;(t.updateQueue=w)&&(t.flags|=4)}},Cu=function(e,t,n,r){n!==r&&(t.flags|=4)};function kr(e,t){if(!he)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function hf(e,t,n){var r=t.pendingProps;switch(_o(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return Ue(t.type)&&oa(),Te(t),null;case 3:return r=t.stateNode,Vn(),ce(Oe),ce(Re),tl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(da(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ut!==null&&(Rl(ut),ut=null))),xl(e,t),Te(t),null;case 5:qo(t);var a=sn(vr.current);if(n=t.type,e!==null&&t.stateNode!=null)Nu(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(u(166));return Te(t),null}if(e=sn(vt.current),da(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[gt]=t,r[pr]=o,e=(t.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(a=0;a<dr.length;a++)de(dr[a],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":li(r,o),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},de("invalid",r);break;case"textarea":ui(r,o),de("invalid",r)}qa(n,o),a=null;for(var l in o)if(o.hasOwnProperty(l)){var c=o[l];l==="children"?typeof c=="string"?r.textContent!==c&&(o.suppressHydrationWarning!==!0&&na(r.textContent,c,e),a=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(o.suppressHydrationWarning!==!0&&na(r.textContent,c,e),a=["children",""+c]):g.hasOwnProperty(l)&&c!=null&&l==="onScroll"&&de("scroll",r)}switch(n){case"input":Tr(r),si(r,o,!0);break;case"textarea":Tr(r),ci(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ra)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fi(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[gt]=t,e[pr]=r,ju(e,t,!1,!1),t.stateNode=e;e:{switch(l=eo(n,r),n){case"dialog":de("cancel",e),de("close",e),a=r;break;case"iframe":case"object":case"embed":de("load",e),a=r;break;case"video":case"audio":for(a=0;a<dr.length;a++)de(dr[a],e);a=r;break;case"source":de("error",e),a=r;break;case"img":case"image":case"link":de("error",e),de("load",e),a=r;break;case"details":de("toggle",e),a=r;break;case"input":li(e,r),a=Wa(e,r),de("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=F({},r,{value:void 0}),de("invalid",e);break;case"textarea":ui(e,r),a=Ka(e,r),de("invalid",e);break;default:a=r}qa(n,a),c=a;for(o in c)if(c.hasOwnProperty(o)){var f=c[o];o==="style"?mi(e,f):o==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,f!=null&&pi(e,f)):o==="children"?typeof f=="string"?(n!=="textarea"||f!=="")&&Jn(e,f):typeof f=="number"&&Jn(e,""+f):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(g.hasOwnProperty(o)?f!=null&&o==="onScroll"&&de("scroll",e):f!=null&&ne(e,o,f,l))}switch(n){case"input":Tr(e),si(e,r,!1);break;case"textarea":Tr(e),ci(e);break;case"option":r.value!=null&&e.setAttribute("value",""+re(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?gn(e,!!r.multiple,o,!1):r.defaultValue!=null&&gn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=ra)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Te(t),null;case 6:if(e&&t.stateNode!=null)Cu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(u(166));if(n=sn(vr.current),sn(vt.current),da(t)){if(r=t.stateNode,n=t.memoizedProps,r[gt]=t,(o=r.nodeValue!==n)&&(e=Xe,e!==null))switch(e.tag){case 3:na(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&na(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[gt]=t,t.stateNode=r}return Te(t),null;case 13:if(ce(me),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(he&&Ye!==null&&(t.mode&1)!==0&&(t.flags&128)===0)zs(),An(),t.flags|=98560,o=!1;else if(o=da(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(u(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(u(317));o[gt]=t}else An(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Te(t),o=!1}else ut!==null&&(Rl(ut),ut=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(me.current&1)!==0?je===0&&(je=3):Pl())),t.updateQueue!==null&&(t.flags|=4),Te(t),null);case 4:return Vn(),xl(e,t),e===null&&cr(t.stateNode.containerInfo),Te(t),null;case 10:return Wo(t.type._context),Te(t),null;case 17:return Ue(t.type)&&oa(),Te(t),null;case 19:if(ce(me),o=t.memoizedState,o===null)return Te(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)kr(o,!1);else{if(je!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=ya(e),l!==null){for(t.flags|=128,kr(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ue(me,me.current&1|2),t.child}e=e.sibling}o.tail!==null&&we()>On&&(t.flags|=128,r=!0,kr(o,!1),t.lanes=4194304)}else{if(!r)if(e=ya(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),kr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!he)return Te(t),null}else 2*we()-o.renderingStartTime>On&&n!==1073741824&&(t.flags|=128,r=!0,kr(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=we(),t.sibling=null,n=me.current,ue(me,r?n&1|2:n&1),t):(Te(t),null);case 22:case 23:return Tl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Ke&1073741824)!==0&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),null;case 24:return null;case 25:return null}throw Error(u(156,t.tag))}function mf(e,t){switch(_o(t),t.tag){case 1:return Ue(t.type)&&oa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Vn(),ce(Oe),ce(Re),tl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return qo(t),null;case 13:if(ce(me),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));An()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ce(me),null;case 4:return Vn(),null;case 10:return Wo(t.type._context),null;case 22:case 23:return Tl(),null;case 24:return null;default:return null}}var Na=!1,Pe=!1,yf=typeof WeakSet=="function"?WeakSet:Set,V=null;function In(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ve(e,t,r)}else n.current=null}function Sl(e,t,n){try{n()}catch(r){ve(e,t,r)}}var Eu=!1;function gf(e,t){if(To=Jr,e=os(),No(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,c=-1,f=-1,w=0,C=0,E=e,j=null;t:for(;;){for(var P;E!==n||a!==0&&E.nodeType!==3||(c=l+a),E!==o||r!==0&&E.nodeType!==3||(f=l+r),E.nodeType===3&&(l+=E.nodeValue.length),(P=E.firstChild)!==null;)j=E,E=P;for(;;){if(E===e)break t;if(j===n&&++w===a&&(c=l),j===o&&++C===r&&(f=l),(P=E.nextSibling)!==null)break;E=j,j=E.parentNode}E=P}n=c===-1||f===-1?null:{start:c,end:f}}else n=null}n=n||{start:0,end:0}}else n=null;for(Po={focusedElem:e,selectionRange:n},Jr=!1,V=t;V!==null;)if(t=V,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,V=e;else for(;V!==null;){t=V;try{var I=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(I!==null){var B=I.memoizedProps,xe=I.memoizedState,y=t.stateNode,h=y.getSnapshotBeforeUpdate(t.elementType===t.type?B:dt(t.type,B),xe);y.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(u(163))}}catch(b){ve(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,V=e;break}V=t.return}return I=Eu,Eu=!1,I}function jr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,o!==void 0&&Sl(t,n,o)}a=a.next}while(a!==r)}}function Ca(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ll(e){var t=e.ref;if(t!==null){var n=e.stateNode;e.tag,e=n,typeof t=="function"?t(e):t.current=e}}function bu(e){var t=e.alternate;t!==null&&(e.alternate=null,bu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[gt],delete t[pr],delete t[Io],delete t[$c],delete t[qc])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function zu(e){return e.tag===5||e.tag===3||e.tag===4}function Mu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function kl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ra));else if(r!==4&&(e=e.child,e!==null))for(kl(e,t,n),e=e.sibling;e!==null;)kl(e,t,n),e=e.sibling}function jl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(jl(e,t,n),e=e.sibling;e!==null;)jl(e,t,n),e=e.sibling}var ze=null,ct=!1;function Gt(e,t,n){for(n=n.child;n!==null;)Ru(e,t,n),n=n.sibling}function Ru(e,t,n){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(Br,n)}catch{}switch(n.tag){case 5:Pe||In(n,t);case 6:var r=ze,a=ct;ze=null,Gt(e,t,n),ze=r,ct=a,ze!==null&&(ct?(e=ze,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ze.removeChild(n.stateNode));break;case 18:ze!==null&&(ct?(e=ze,n=n.stateNode,e.nodeType===8?Fo(e.parentNode,n):e.nodeType===1&&Fo(e,n),nr(e)):Fo(ze,n.stateNode));break;case 4:r=ze,a=ct,ze=n.stateNode.containerInfo,ct=!0,Gt(e,t,n),ze=r,ct=a;break;case 0:case 11:case 14:case 15:if(!Pe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var o=a,l=o.destroy;o=o.tag,l!==void 0&&((o&2)!==0||(o&4)!==0)&&Sl(n,t,l),a=a.next}while(a!==r)}Gt(e,t,n);break;case 1:if(!Pe&&(In(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(c){ve(n,t,c)}Gt(e,t,n);break;case 21:Gt(e,t,n);break;case 22:n.mode&1?(Pe=(r=Pe)||n.memoizedState!==null,Gt(e,t,n),Pe=r):Gt(e,t,n);break;default:Gt(e,t,n)}}function Au(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new yf),t.forEach(function(r){var a=Cf.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function ft(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var o=e,l=t,c=l;e:for(;c!==null;){switch(c.tag){case 5:ze=c.stateNode,ct=!1;break e;case 3:ze=c.stateNode.containerInfo,ct=!0;break e;case 4:ze=c.stateNode.containerInfo,ct=!0;break e}c=c.return}if(ze===null)throw Error(u(160));Ru(o,l,a),ze=null,ct=!1;var f=a.alternate;f!==null&&(f.return=null),a.return=null}catch(w){ve(a,t,w)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Tu(t,e),t=t.sibling}function Tu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ft(t,e),xt(e),r&4){try{jr(3,e,e.return),Ca(3,e)}catch(B){ve(e,e.return,B)}try{jr(5,e,e.return)}catch(B){ve(e,e.return,B)}}break;case 1:ft(t,e),xt(e),r&512&&n!==null&&In(n,n.return);break;case 5:if(ft(t,e),xt(e),r&512&&n!==null&&In(n,n.return),e.flags&32){var a=e.stateNode;try{Jn(a,"")}catch(B){ve(e,e.return,B)}}if(r&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,c=e.type,f=e.updateQueue;if(e.updateQueue=null,f!==null)try{c==="input"&&o.type==="radio"&&o.name!=null&&ii(a,o),eo(c,l);var w=eo(c,o);for(l=0;l<f.length;l+=2){var C=f[l],E=f[l+1];C==="style"?mi(a,E):C==="dangerouslySetInnerHTML"?pi(a,E):C==="children"?Jn(a,E):ne(a,C,E,w)}switch(c){case"input":Xa(a,o);break;case"textarea":di(a,o);break;case"select":var j=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var P=o.value;P!=null?gn(a,!!o.multiple,P,!1):j!==!!o.multiple&&(o.defaultValue!=null?gn(a,!!o.multiple,o.defaultValue,!0):gn(a,!!o.multiple,o.multiple?[]:"",!1))}a[pr]=o}catch(B){ve(e,e.return,B)}}break;case 6:if(ft(t,e),xt(e),r&4){if(e.stateNode===null)throw Error(u(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(B){ve(e,e.return,B)}}break;case 3:if(ft(t,e),xt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{nr(t.containerInfo)}catch(B){ve(e,e.return,B)}break;case 4:ft(t,e),xt(e);break;case 13:ft(t,e),xt(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(El=we())),r&4&&Au(e);break;case 22:if(C=n!==null&&n.memoizedState!==null,e.mode&1?(Pe=(w=Pe)||C,ft(t,e),Pe=w):ft(t,e),xt(e),r&8192){if(w=e.memoizedState!==null,(e.stateNode.isHidden=w)&&!C&&(e.mode&1)!==0)for(V=e,C=e.child;C!==null;){for(E=V=C;V!==null;){switch(j=V,P=j.child,j.tag){case 0:case 11:case 14:case 15:jr(4,j,j.return);break;case 1:In(j,j.return);var I=j.stateNode;if(typeof I.componentWillUnmount=="function"){r=j,n=j.return;try{t=r,I.props=t.memoizedProps,I.state=t.memoizedState,I.componentWillUnmount()}catch(B){ve(r,n,B)}}break;case 5:In(j,j.return);break;case 22:if(j.memoizedState!==null){Vu(E);continue}}P!==null?(P.return=j,V=P):Vu(E)}C=C.sibling}e:for(C=null,E=e;;){if(E.tag===5){if(C===null){C=E;try{a=E.stateNode,w?(o=a.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(c=E.stateNode,f=E.memoizedProps.style,l=f!=null&&f.hasOwnProperty("display")?f.display:null,c.style.display=hi("display",l))}catch(B){ve(e,e.return,B)}}}else if(E.tag===6){if(C===null)try{E.stateNode.nodeValue=w?"":E.memoizedProps}catch(B){ve(e,e.return,B)}}else if((E.tag!==22&&E.tag!==23||E.memoizedState===null||E===e)&&E.child!==null){E.child.return=E,E=E.child;continue}if(E===e)break e;for(;E.sibling===null;){if(E.return===null||E.return===e)break e;C===E&&(C=null),E=E.return}C===E&&(C=null),E.sibling.return=E.return,E=E.sibling}}break;case 19:ft(t,e),xt(e),r&4&&Au(e);break;case 21:break;default:ft(t,e),xt(e)}}function xt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(zu(n)){var r=n;break e}n=n.return}throw Error(u(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Jn(a,""),r.flags&=-33);var o=Mu(e);jl(e,o,a);break;case 3:case 4:var l=r.stateNode.containerInfo,c=Mu(e);kl(e,c,l);break;default:throw Error(u(161))}}catch(f){ve(e,e.return,f)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vf(e,t,n){V=e,Pu(e)}function Pu(e,t,n){for(var r=(e.mode&1)!==0;V!==null;){var a=V,o=a.child;if(a.tag===22&&r){var l=a.memoizedState!==null||Na;if(!l){var c=a.alternate,f=c!==null&&c.memoizedState!==null||Pe;c=Na;var w=Pe;if(Na=l,(Pe=f)&&!w)for(V=a;V!==null;)l=V,f=l.child,l.tag===22&&l.memoizedState!==null?Fu(a):f!==null?(f.return=l,V=f):Fu(a);for(;o!==null;)V=o,Pu(o),o=o.sibling;V=a,Na=c,Pe=w}Du(e)}else(a.subtreeFlags&8772)!==0&&o!==null?(o.return=a,V=o):Du(e)}}function Du(e){for(;V!==null;){var t=V;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Pe||Ca(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Pe)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:dt(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Vs(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Vs(t,l,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var f=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":f.autoFocus&&n.focus();break;case"img":f.src&&(n.src=f.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var w=t.alternate;if(w!==null){var C=w.memoizedState;if(C!==null){var E=C.dehydrated;E!==null&&nr(E)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(u(163))}Pe||t.flags&512&&Ll(t)}catch(j){ve(t,t.return,j)}}if(t===e){V=null;break}if(n=t.sibling,n!==null){n.return=t.return,V=n;break}V=t.return}}function Vu(e){for(;V!==null;){var t=V;if(t===e){V=null;break}var n=t.sibling;if(n!==null){n.return=t.return,V=n;break}V=t.return}}function Fu(e){for(;V!==null;){var t=V;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ca(4,t)}catch(f){ve(t,n,f)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(f){ve(t,a,f)}}var o=t.return;try{Ll(t)}catch(f){ve(t,o,f)}break;case 5:var l=t.return;try{Ll(t)}catch(f){ve(t,l,f)}}}catch(f){ve(t,t.return,f)}if(t===e){V=null;break}var c=t.sibling;if(c!==null){c.return=t.return,V=c;break}V=t.return}}var wf=Math.ceil,Ea=ie.ReactCurrentDispatcher,Nl=ie.ReactCurrentOwner,rt=ie.ReactCurrentBatchConfig,K=0,Ee=null,Le=null,Me=0,Ke=0,Bn=Bt(0),je=0,Nr=null,dn=0,ba=0,Cl=0,Cr=null,He=null,El=0,On=1/0,zt=null,za=!1,bl=null,Jt=null,Ma=!1,Zt=null,Ra=0,Er=0,zl=null,Aa=-1,Ta=0;function Fe(){return(K&6)!==0?we():Aa!==-1?Aa:Aa=we()}function Qt(e){return(e.mode&1)===0?1:(K&2)!==0&&Me!==0?Me&-Me:tf.transition!==null?(Ta===0&&(Ta=Mi()),Ta):(e=ae,e!==0||(e=window.event,e=e===void 0?16:Bi(e.type)),e)}function pt(e,t,n,r){if(50<Er)throw Er=0,zl=null,Error(u(185));Kn(e,n,r),((K&2)===0||e!==Ee)&&(e===Ee&&((K&2)===0&&(ba|=n),je===4&&Wt(e,Me)),Ge(e,r),n===1&&K===0&&(t.mode&1)===0&&(On=we()+500,ia&&Ut()))}function Ge(e,t){var n=e.callbackNode;tc(e,t);var r=_r(e,e===Ee?Me:0);if(r===0)n!==null&&Ei(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ei(n),t===1)e.tag===0?ef(Bu.bind(null,e)):js(Bu.bind(null,e)),Yc(function(){(K&6)===0&&Ut()}),n=null;else{switch(Ri(r)){case 1:n=io;break;case 4:n=bi;break;case 16:n=Ir;break;case 536870912:n=zi;break;default:n=Ir}n=Qu(n,Iu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Iu(e,t){if(Aa=-1,Ta=0,(K&6)!==0)throw Error(u(327));var n=e.callbackNode;if(Un()&&e.callbackNode!==n)return null;var r=_r(e,e===Ee?Me:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Pa(e,r);else{t=r;var a=K;K|=2;var o=Uu();(Ee!==e||Me!==t)&&(zt=null,On=we()+500,fn(e,t));do try{Lf();break}catch(c){Ou(e,c)}while(!0);Qo(),Ea.current=o,K=a,Le!==null?t=0:(Ee=null,Me=0,t=je)}if(t!==0){if(t===2&&(a=so(e),a!==0&&(r=a,t=Ml(e,a))),t===1)throw n=Nr,fn(e,0),Wt(e,r),Ge(e,we()),n;if(t===6)Wt(e,r);else{if(a=e.current.alternate,(r&30)===0&&!xf(a)&&(t=Pa(e,r),t===2&&(o=so(e),o!==0&&(r=o,t=Ml(e,o))),t===1))throw n=Nr,fn(e,0),Wt(e,r),Ge(e,we()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(u(345));case 2:pn(e,He,zt);break;case 3:if(Wt(e,r),(r&130023424)===r&&(t=El+500-we(),10<t)){if(_r(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){Fe(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Vo(pn.bind(null,e,He,zt),t);break}pn(e,He,zt);break;case 4:if(Wt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var l=31-it(r);o=1<<l,l=t[l],l>a&&(a=l),r&=~o}if(r=a,r=we()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*wf(r/1960))-r,10<r){e.timeoutHandle=Vo(pn.bind(null,e,He,zt),r);break}pn(e,He,zt);break;case 5:pn(e,He,zt);break;default:throw Error(u(329))}}}return Ge(e,we()),e.callbackNode===n?Iu.bind(null,e):null}function Ml(e,t){var n=Cr;return e.current.memoizedState.isDehydrated&&(fn(e,t).flags|=256),e=Pa(e,t),e!==2&&(t=He,He=n,t!==null&&Rl(t)),e}function Rl(e){He===null?He=e:He.push.apply(He,e)}function xf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],o=a.getSnapshot;a=a.value;try{if(!st(o(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Wt(e,t){for(t&=~Cl,t&=~ba,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-it(t),r=1<<n;e[n]=-1,t&=~r}}function Bu(e){if((K&6)!==0)throw Error(u(327));Un();var t=_r(e,0);if((t&1)===0)return Ge(e,we()),null;var n=Pa(e,t);if(e.tag!==0&&n===2){var r=so(e);r!==0&&(t=r,n=Ml(e,r))}if(n===1)throw n=Nr,fn(e,0),Wt(e,t),Ge(e,we()),n;if(n===6)throw Error(u(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,pn(e,He,zt),Ge(e,we()),null}function Al(e,t){var n=K;K|=1;try{return e(t)}finally{K=n,K===0&&(On=we()+500,ia&&Ut())}}function cn(e){Zt!==null&&Zt.tag===0&&(K&6)===0&&Un();var t=K;K|=1;var n=rt.transition,r=ae;try{if(rt.transition=null,ae=1,e)return e()}finally{ae=r,rt.transition=n,K=t,(K&6)===0&&Ut()}}function Tl(){Ke=Bn.current,ce(Bn)}function fn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Xc(n)),Le!==null)for(n=Le.return;n!==null;){var r=n;switch(_o(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&oa();break;case 3:Vn(),ce(Oe),ce(Re),tl();break;case 5:qo(r);break;case 4:Vn();break;case 13:ce(me);break;case 19:ce(me);break;case 10:Wo(r.type._context);break;case 22:case 23:Tl()}n=n.return}if(Ee=e,Le=e=Xt(e.current,null),Me=Ke=t,je=0,Nr=null,Cl=ba=dn=0,He=Cr=null,ln!==null){for(t=0;t<ln.length;t++)if(n=ln[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=a,r.next=l}n.pending=r}ln=null}return e}function Ou(e,t){do{var n=Le;try{if(Qo(),ga.current=Sa,va){for(var r=ye.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}va=!1}if(un=0,Ce=ke=ye=null,wr=!1,xr=0,Nl.current=null,n===null||n.return===null){je=1,Nr=t,Le=null;break}e:{var o=e,l=n.return,c=n,f=t;if(t=Me,c.flags|=32768,f!==null&&typeof f=="object"&&typeof f.then=="function"){var w=f,C=c,E=C.tag;if((C.mode&1)===0&&(E===0||E===11||E===15)){var j=C.alternate;j?(C.updateQueue=j.updateQueue,C.memoizedState=j.memoizedState,C.lanes=j.lanes):(C.updateQueue=null,C.memoizedState=null)}var P=cu(l);if(P!==null){P.flags&=-257,fu(P,l,c,o,t),P.mode&1&&du(o,w,t),t=P,f=w;var I=t.updateQueue;if(I===null){var B=new Set;B.add(f),t.updateQueue=B}else I.add(f);break e}else{if((t&1)===0){du(o,w,t),Pl();break e}f=Error(u(426))}}else if(he&&c.mode&1){var xe=cu(l);if(xe!==null){(xe.flags&65536)===0&&(xe.flags|=256),fu(xe,l,c,o,t),Jo(Fn(f,c));break e}}o=f=Fn(f,c),je!==4&&(je=2),Cr===null?Cr=[o]:Cr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var y=su(o,f,t);Ds(o,y);break e;case 1:c=f;var h=o.type,v=o.stateNode;if((o.flags&128)===0&&(typeof h.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Jt===null||!Jt.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t;var b=uu(o,c,t);Ds(o,b);break e}}o=o.return}while(o!==null)}Hu(n)}catch(O){t=O,Le===n&&n!==null&&(Le=n=n.return);continue}break}while(!0)}function Uu(){var e=Ea.current;return Ea.current=Sa,e===null?Sa:e}function Pl(){(je===0||je===3||je===2)&&(je=4),Ee===null||(dn&268435455)===0&&(ba&268435455)===0||Wt(Ee,Me)}function Pa(e,t){var n=K;K|=2;var r=Uu();(Ee!==e||Me!==t)&&(zt=null,fn(e,t));do try{Sf();break}catch(a){Ou(e,a)}while(!0);if(Qo(),K=n,Ea.current=r,Le!==null)throw Error(u(261));return Ee=null,Me=0,je}function Sf(){for(;Le!==null;)_u(Le)}function Lf(){for(;Le!==null&&!Zd();)_u(Le)}function _u(e){var t=Zu(e.alternate,e,Ke);e.memoizedProps=e.pendingProps,t===null?Hu(e):Le=t,Nl.current=null}function Hu(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=hf(n,t,Ke),n!==null){Le=n;return}}else{if(n=mf(n,t),n!==null){n.flags&=32767,Le=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{je=6,Le=null;return}}if(t=t.sibling,t!==null){Le=t;return}Le=t=e}while(t!==null);je===0&&(je=5)}function pn(e,t,n){var r=ae,a=rt.transition;try{rt.transition=null,ae=1,kf(e,t,n,r)}finally{rt.transition=a,ae=r}return null}function kf(e,t,n,r){do Un();while(Zt!==null);if((K&6)!==0)throw Error(u(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(u(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(nc(e,o),e===Ee&&(Le=Ee=null,Me=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Ma||(Ma=!0,Qu(Ir,function(){return Un(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=rt.transition,rt.transition=null;var l=ae;ae=1;var c=K;K|=4,Nl.current=null,gf(e,n),Tu(n,e),_c(Po),Jr=!!To,Po=To=null,e.current=n,vf(n),Qd(),K=c,ae=l,rt.transition=o}else e.current=n;if(Ma&&(Ma=!1,Zt=e,Ra=a),o=e.pendingLanes,o===0&&(Jt=null),Yd(n.stateNode),Ge(e,we()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(za)throw za=!1,e=bl,bl=null,e;return(Ra&1)!==0&&e.tag!==0&&Un(),o=e.pendingLanes,(o&1)!==0?e===zl?Er++:(Er=0,zl=e):Er=0,Ut(),null}function Un(){if(Zt!==null){var e=Ri(Ra),t=rt.transition,n=ae;try{if(rt.transition=null,ae=16>e?16:e,Zt===null)var r=!1;else{if(e=Zt,Zt=null,Ra=0,(K&6)!==0)throw Error(u(331));var a=K;for(K|=4,V=e.current;V!==null;){var o=V,l=o.child;if((V.flags&16)!==0){var c=o.deletions;if(c!==null){for(var f=0;f<c.length;f++){var w=c[f];for(V=w;V!==null;){var C=V;switch(C.tag){case 0:case 11:case 15:jr(8,C,o)}var E=C.child;if(E!==null)E.return=C,V=E;else for(;V!==null;){C=V;var j=C.sibling,P=C.return;if(bu(C),C===w){V=null;break}if(j!==null){j.return=P,V=j;break}V=P}}}var I=o.alternate;if(I!==null){var B=I.child;if(B!==null){I.child=null;do{var xe=B.sibling;B.sibling=null,B=xe}while(B!==null)}}V=o}}if((o.subtreeFlags&2064)!==0&&l!==null)l.return=o,V=l;else e:for(;V!==null;){if(o=V,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:jr(9,o,o.return)}var y=o.sibling;if(y!==null){y.return=o.return,V=y;break e}V=o.return}}var h=e.current;for(V=h;V!==null;){l=V;var v=l.child;if((l.subtreeFlags&2064)!==0&&v!==null)v.return=l,V=v;else e:for(l=h;V!==null;){if(c=V,(c.flags&2048)!==0)try{switch(c.tag){case 0:case 11:case 15:Ca(9,c)}}catch(O){ve(c,c.return,O)}if(c===l){V=null;break e}var b=c.sibling;if(b!==null){b.return=c.return,V=b;break e}V=c.return}}if(K=a,Ut(),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(Br,e)}catch{}r=!0}return r}finally{ae=n,rt.transition=t}}return!1}function Gu(e,t,n){t=Fn(n,t),t=su(e,t,1),e=Ht(e,t,1),t=Fe(),e!==null&&(Kn(e,1,t),Ge(e,t))}function ve(e,t,n){if(e.tag===3)Gu(e,e,n);else for(;t!==null;){if(t.tag===3){Gu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Jt===null||!Jt.has(r))){e=Fn(n,e),e=uu(t,e,1),t=Ht(t,e,1),e=Fe(),t!==null&&(Kn(t,1,e),Ge(t,e));break}}t=t.return}}function jf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Fe(),e.pingedLanes|=e.suspendedLanes&n,Ee===e&&(Me&n)===n&&(je===4||je===3&&(Me&130023424)===Me&&500>we()-El?fn(e,0):Cl|=n),Ge(e,t)}function Ju(e,t){t===0&&((e.mode&1)===0?t=1:(t=Ur,Ur<<=1,(Ur&130023424)===0&&(Ur=4194304)));var n=Fe();e=Ct(e,t),e!==null&&(Kn(e,t,n),Ge(e,n))}function Nf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ju(e,n)}function Cf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(u(314))}r!==null&&r.delete(t),Ju(e,n)}var Zu;Zu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Oe.current)_e=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return _e=!1,pf(e,t,n);_e=(e.flags&131072)!==0}else _e=!1,he&&(t.flags&1048576)!==0&&Ns(t,ua,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ja(e,t),e=t.pendingProps;var a=zn(t,Re.current);Dn(t,n),a=al(null,t,r,e,a,n);var o=ol();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ue(r)?(o=!0,la(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Ko(t),a.updater=La,t.stateNode=a,a._reactInternals=t,cl(t,r,e,n),t=ml(null,t,r,!0,o,n)):(t.tag=0,he&&o&&Uo(t),Ve(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ja(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=bf(r),e=dt(r,e),a){case 0:t=hl(null,t,r,e,n);break e;case 1:t=vu(null,t,r,e,n);break e;case 11:t=pu(null,t,r,e,n);break e;case 14:t=hu(null,t,r,dt(r.type,e),n);break e}throw Error(u(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:dt(r,a),hl(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:dt(r,a),vu(e,t,r,a,n);case 3:e:{if(wu(t),e===null)throw Error(u(387));r=t.pendingProps,o=t.memoizedState,a=o.element,Ps(e,t),ma(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=Fn(Error(u(423)),t),t=xu(e,t,r,n,a);break e}else if(r!==a){a=Fn(Error(u(424)),t),t=xu(e,t,r,n,a);break e}else for(Ye=It(t.stateNode.containerInfo.firstChild),Xe=t,he=!0,ut=null,n=As(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(An(),r===a){t=bt(e,t,n);break e}Ve(e,t,r,n)}t=t.child}return t;case 5:return Fs(t),e===null&&Go(t),r=t.type,a=t.pendingProps,o=e!==null?e.memoizedProps:null,l=a.children,Do(r,a)?l=null:o!==null&&Do(r,o)&&(t.flags|=32),gu(e,t),Ve(e,t,l,n),t.child;case 6:return e===null&&Go(t),null;case 13:return Su(e,t,n);case 4:return $o(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Tn(t,null,r,n):Ve(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:dt(r,a),pu(e,t,r,a,n);case 7:return Ve(e,t,t.pendingProps,n),t.child;case 8:return Ve(e,t,t.pendingProps.children,n),t.child;case 12:return Ve(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,o=t.memoizedProps,l=a.value,ue(fa,r._currentValue),r._currentValue=l,o!==null)if(st(o.value,l)){if(o.children===a.children&&!Oe.current){t=bt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var c=o.dependencies;if(c!==null){l=o.child;for(var f=c.firstContext;f!==null;){if(f.context===r){if(o.tag===1){f=Et(-1,n&-n),f.tag=2;var w=o.updateQueue;if(w!==null){w=w.shared;var C=w.pending;C===null?f.next=f:(f.next=C.next,C.next=f),w.pending=f}}o.lanes|=n,f=o.alternate,f!==null&&(f.lanes|=n),Xo(o.return,n,t),c.lanes|=n;break}f=f.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(u(341));l.lanes|=n,c=l.alternate,c!==null&&(c.lanes|=n),Xo(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Ve(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,Dn(t,n),a=tt(a),r=r(a),t.flags|=1,Ve(e,t,r,n),t.child;case 14:return r=t.type,a=dt(r,t.pendingProps),a=dt(r.type,a),hu(e,t,r,a,n);case 15:return mu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:dt(r,a),ja(e,t),t.tag=1,Ue(r)?(e=!0,la(t)):e=!1,Dn(t,n),lu(t,r,a),cl(t,r,a,n),ml(null,t,r,!0,e,n);case 19:return ku(e,t,n);case 22:return yu(e,t,n)}throw Error(u(156,t.tag))};function Qu(e,t){return Ci(e,t)}function Ef(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function at(e,t,n,r){return new Ef(e,t,n,r)}function Dl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function bf(e){if(typeof e=="function")return Dl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ht)return 11;if(e===mt)return 14}return 2}function Xt(e,t){var n=e.alternate;return n===null?(n=at(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Da(e,t,n,r,a,o){var l=2;if(r=e,typeof e=="function")Dl(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Ie:return hn(n.children,a,o,t);case $e:l=8,a|=8;break;case Rt:return e=at(12,n,t,a|2),e.elementType=Rt,e.lanes=o,e;case Ze:return e=at(13,n,t,a),e.elementType=Ze,e.lanes=o,e;case lt:return e=at(19,n,t,a),e.elementType=lt,e.lanes=o,e;case ge:return Va(n,a,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case St:l=10;break e;case en:l=9;break e;case ht:l=11;break e;case mt:l=14;break e;case Be:l=16,r=null;break e}throw Error(u(130,e==null?e:typeof e,""))}return t=at(l,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function hn(e,t,n,r){return e=at(7,e,r,t),e.lanes=n,e}function Va(e,t,n,r){return e=at(22,e,r,t),e.elementType=ge,e.lanes=n,e.stateNode={isHidden:!1},e}function Vl(e,t,n){return e=at(6,e,null,t),e.lanes=n,e}function Fl(e,t,n){return t=at(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function zf(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=uo(0),this.expirationTimes=uo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=uo(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Il(e,t,n,r,a,o,l,c,f){return e=new zf(e,t,n,c,f),t===1?(t=1,o===!0&&(t|=8)):t=0,o=at(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ko(o),e}function Mf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:De,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Wu(e){if(!e)return Ot;e=e._reactInternals;e:{if(tn(e)!==e||e.tag!==1)throw Error(u(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ue(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(u(171))}if(e.tag===1){var n=e.type;if(Ue(n))return Ls(e,n,t)}return t}function Xu(e,t,n,r,a,o,l,c,f){return e=Il(n,r,!0,e,a,o,l,c,f),e.context=Wu(null),n=e.current,r=Fe(),a=Qt(n),o=Et(r,a),o.callback=t??null,Ht(n,o,a),e.current.lanes=a,Kn(e,a,r),Ge(e,r),e}function Fa(e,t,n,r){var a=t.current,o=Fe(),l=Qt(a);return n=Wu(n),t.context===null?t.context=n:t.pendingContext=n,t=Et(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ht(a,t,l),e!==null&&(pt(e,a,l,o),ha(e,a,l)),l}function Ia(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function Yu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Bl(e,t){Yu(e,t),(e=e.alternate)&&Yu(e,t)}function Rf(){return null}var Ku=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ol(e){this._internalRoot=e}Ba.prototype.render=Ol.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));Fa(e,t,null,null)},Ba.prototype.unmount=Ol.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;cn(function(){Fa(null,e,null,null)}),t[Lt]=null}};function Ba(e){this._internalRoot=e}Ba.prototype.unstable_scheduleHydration=function(e){if(e){var t=Pi();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Dt.length&&t!==0&&t<Dt[n].priority;n++);Dt.splice(n,0,e),n===0&&Fi(e)}};function Ul(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Oa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function $u(){}function Af(e,t,n,r,a){if(a){if(typeof r=="function"){var o=r;r=function(){var w=Ia(l);o.call(w)}}var l=Xu(t,r,e,0,null,!1,!1,"",$u);return e._reactRootContainer=l,e[Lt]=l.current,cr(e.nodeType===8?e.parentNode:e),cn(),l}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var c=r;r=function(){var w=Ia(f);c.call(w)}}var f=Il(e,0,!1,null,null,!1,!1,"",$u);return e._reactRootContainer=f,e[Lt]=f.current,cr(e.nodeType===8?e.parentNode:e),cn(function(){Fa(t,f,n,r)}),f}function Ua(e,t,n,r,a){var o=n._reactRootContainer;if(o){var l=o;if(typeof a=="function"){var c=a;a=function(){var f=Ia(l);c.call(f)}}Fa(t,l,e,a)}else l=Af(n,t,e,a,r);return Ia(l)}Ai=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Yn(t.pendingLanes);n!==0&&(co(t,n|1),Ge(t,we()),(K&6)===0&&(On=we()+500,Ut()))}break;case 13:cn(function(){var r=Ct(e,1);if(r!==null){var a=Fe();pt(r,e,1,a)}}),Bl(e,1)}},fo=function(e){if(e.tag===13){var t=Ct(e,134217728);if(t!==null){var n=Fe();pt(t,e,134217728,n)}Bl(e,134217728)}},Ti=function(e){if(e.tag===13){var t=Qt(e),n=Ct(e,t);if(n!==null){var r=Fe();pt(n,e,t,r)}Bl(e,t)}},Pi=function(){return ae},Di=function(e,t){var n=ae;try{return ae=e,t()}finally{ae=n}},ro=function(e,t,n){switch(t){case"input":if(Xa(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=aa(r);if(!a)throw Error(u(90));oi(r),Xa(r,a)}}}break;case"textarea":di(e,n);break;case"select":t=n.value,t!=null&&gn(e,!!n.multiple,t,!1)}},wi=Al,xi=cn;var Tf={usingClientEntryPoint:!1,Events:[hr,En,aa,gi,vi,Al]},br={findFiberByHostInstance:nn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Pf={bundleType:br.bundleType,version:br.version,rendererPackageName:br.rendererPackageName,rendererConfig:br.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ie.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ji(e),e===null?null:e.stateNode},findFiberByHostInstance:br.findFiberByHostInstance||Rf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _a=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_a.isDisabled&&_a.supportsFiber)try{Br=_a.inject(Pf),yt=_a}catch{}}return Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tf,Je.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ul(t))throw Error(u(200));return Mf(e,t,null,n)},Je.createRoot=function(e,t){if(!Ul(e))throw Error(u(299));var n=!1,r="",a=Ku;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Il(e,1,!1,null,null,n,!1,r,a),e[Lt]=t.current,cr(e.nodeType===8?e.parentNode:e),new Ol(t)},Je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=ji(t),e=e===null?null:e.stateNode,e},Je.flushSync=function(e){return cn(e)},Je.hydrate=function(e,t,n){if(!Oa(t))throw Error(u(200));return Ua(null,e,t,!0,n)},Je.hydrateRoot=function(e,t,n){if(!Ul(e))throw Error(u(405));var r=n!=null&&n.hydratedSources||null,a=!1,o="",l=Ku;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Xu(t,null,e,1,n??null,a,!1,o,l),e[Lt]=t.current,cr(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Ba(t)},Je.render=function(e,t,n){if(!Oa(t))throw Error(u(200));return Ua(null,e,t,!1,n)},Je.unmountComponentAtNode=function(e){if(!Oa(e))throw Error(u(40));return e._reactRootContainer?(cn(function(){Ua(null,null,e,!1,function(){e._reactRootContainer=null,e[Lt]=null})}),!0):!1},Je.unstable_batchedUpdates=Al,Je.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Oa(n))throw Error(u(200));if(e==null||e._reactInternals===void 0)throw Error(u(38));return Ua(e,t,n,!1,r)},Je.version="18.3.1-next-f1338f8080-20240426",Je}var ld;function Ld(){if(ld)return Gl.exports;ld=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(d){console.error(d)}}return i(),Gl.exports=Jf(),Gl.exports}var id;function Zf(){if(id)return Ha;id=1;var i=Ld();return Ha.createRoot=i.createRoot,Ha.hydrateRoot=i.hydrateRoot,Ha}var Qf=Zf();Ld();function Rr(){return Rr=Object.assign?Object.assign.bind():function(i){for(var d=1;d<arguments.length;d++){var u=arguments[d];for(var p in u)Object.prototype.hasOwnProperty.call(u,p)&&(i[p]=u[p])}return i},Rr.apply(this,arguments)}var Kt;(function(i){i.Pop="POP",i.Push="PUSH",i.Replace="REPLACE"})(Kt||(Kt={}));const sd="popstate";function Wf(i){i===void 0&&(i={});function d(g,x){let{pathname:S="/",search:k="",hash:L=""}=mn(g.location.hash.substr(1));return!S.startsWith("/")&&!S.startsWith(".")&&(S="/"+S),Wl("",{pathname:S,search:k,hash:L},x.state&&x.state.usr||null,x.state&&x.state.key||"default")}function u(g,x){let S=g.document.querySelector("base"),k="";if(S&&S.getAttribute("href")){let L=g.location.href,M=L.indexOf("#");k=M===-1?L:L.slice(0,M)}return k+"#"+(typeof x=="string"?x:Ga(x))}function p(g,x){ql(g.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(x)+")")}return Yf(d,u,p,i)}function Se(i,d){if(i===!1||i===null||typeof i>"u")throw new Error(d)}function ql(i,d){if(!i){typeof console<"u"&&console.warn(d);try{throw new Error(d)}catch{}}}function Xf(){return Math.random().toString(36).substr(2,8)}function ud(i,d){return{usr:i.state,key:i.key,idx:d}}function Wl(i,d,u,p){return u===void 0&&(u=null),Rr({pathname:typeof i=="string"?i:i.pathname,search:"",hash:""},typeof d=="string"?mn(d):d,{state:u,key:d&&d.key||p||Xf()})}function Ga(i){let{pathname:d="/",search:u="",hash:p=""}=i;return u&&u!=="?"&&(d+=u.charAt(0)==="?"?u:"?"+u),p&&p!=="#"&&(d+=p.charAt(0)==="#"?p:"#"+p),d}function mn(i){let d={};if(i){let u=i.indexOf("#");u>=0&&(d.hash=i.substr(u),i=i.substr(0,u));let p=i.indexOf("?");p>=0&&(d.search=i.substr(p),i=i.substr(0,p)),i&&(d.pathname=i)}return d}function Yf(i,d,u,p){p===void 0&&(p={});let{window:g=document.defaultView,v5Compat:x=!1}=p,S=g.history,k=Kt.Pop,L=null,M=D();M==null&&(M=0,S.replaceState(Rr({},S.state,{idx:M}),""));function D(){return(S.state||{idx:null}).idx}function z(){k=Kt.Pop;let A=D(),oe=A==null?null:A-M;M=A,L&&L({action:k,location:G.location,delta:oe})}function U(A,oe){k=Kt.Push;let le=Wl(G.location,A,oe);u&&u(le,A),M=D()+1;let ne=ud(le,M),ie=G.createHref(le);try{S.pushState(ne,"",ie)}catch(Ne){if(Ne instanceof DOMException&&Ne.name==="DataCloneError")throw Ne;g.location.assign(ie)}x&&L&&L({action:k,location:G.location,delta:1})}function te(A,oe){k=Kt.Replace;let le=Wl(G.location,A,oe);u&&u(le,A),M=D();let ne=ud(le,M),ie=G.createHref(le);S.replaceState(ne,"",ie),x&&L&&L({action:k,location:G.location,delta:0})}function Y(A){let oe=g.location.origin!=="null"?g.location.origin:g.location.href,le=typeof A=="string"?A:Ga(A);return le=le.replace(/ $/,"%20"),Se(oe,"No window.location.(origin|href) available to create URL for href: "+le),new URL(le,oe)}let G={get action(){return k},get location(){return i(g,S)},listen(A){if(L)throw new Error("A history only accepts one active listener");return g.addEventListener(sd,z),L=A,()=>{g.removeEventListener(sd,z),L=null}},createHref(A){return d(g,A)},createURL:Y,encodeLocation(A){let oe=Y(A);return{pathname:oe.pathname,search:oe.search,hash:oe.hash}},push:U,replace:te,go(A){return S.go(A)}};return G}var dd;(function(i){i.data="data",i.deferred="deferred",i.redirect="redirect",i.error="error"})(dd||(dd={}));function Kf(i,d,u){return u===void 0&&(u="/"),$f(i,d,u)}function $f(i,d,u,p){let g=typeof d=="string"?mn(d):d,x=ei(g.pathname||"/",u);if(x==null)return null;let S=kd(i);qf(S);let k=null;for(let L=0;k==null&&L<S.length;++L){let M=cp(x);k=sp(S[L],M)}return k}function kd(i,d,u,p){d===void 0&&(d=[]),u===void 0&&(u=[]),p===void 0&&(p="");let g=(x,S,k)=>{let L={relativePath:k===void 0?x.path||"":k,caseSensitive:x.caseSensitive===!0,childrenIndex:S,route:x};L.relativePath.startsWith("/")&&(Se(L.relativePath.startsWith(p),'Absolute route path "'+L.relativePath+'" nested under path '+('"'+p+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),L.relativePath=L.relativePath.slice(p.length));let M=$t([p,L.relativePath]),D=u.concat(L);x.children&&x.children.length>0&&(Se(x.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+M+'".')),kd(x.children,d,D,M)),!(x.path==null&&!x.index)&&d.push({path:M,score:lp(M,x.index),routesMeta:D})};return i.forEach((x,S)=>{var k;if(x.path===""||!((k=x.path)!=null&&k.includes("?")))g(x,S);else for(let L of jd(x.path))g(x,S,L)}),d}function jd(i){let d=i.split("/");if(d.length===0)return[];let[u,...p]=d,g=u.endsWith("?"),x=u.replace(/\?$/,"");if(p.length===0)return g?[x,""]:[x];let S=jd(p.join("/")),k=[];return k.push(...S.map(L=>L===""?x:[x,L].join("/"))),g&&k.push(...S),k.map(L=>i.startsWith("/")&&L===""?"/":L)}function qf(i){i.sort((d,u)=>d.score!==u.score?u.score-d.score:ip(d.routesMeta.map(p=>p.childrenIndex),u.routesMeta.map(p=>p.childrenIndex)))}const ep=/^:[\w-]+$/,tp=3,np=2,rp=1,ap=10,op=-2,cd=i=>i==="*";function lp(i,d){let u=i.split("/"),p=u.length;return u.some(cd)&&(p+=op),d&&(p+=np),u.filter(g=>!cd(g)).reduce((g,x)=>g+(ep.test(x)?tp:x===""?rp:ap),p)}function ip(i,d){return i.length===d.length&&i.slice(0,-1).every((p,g)=>p===d[g])?i[i.length-1]-d[d.length-1]:0}function sp(i,d,u){let{routesMeta:p}=i,g={},x="/",S=[];for(let k=0;k<p.length;++k){let L=p[k],M=k===p.length-1,D=x==="/"?d:d.slice(x.length)||"/",z=up({path:L.relativePath,caseSensitive:L.caseSensitive,end:M},D),U=L.route;if(!z)return null;Object.assign(g,z.params),S.push({params:g,pathname:$t([x,z.pathname]),pathnameBase:mp($t([x,z.pathnameBase])),route:U}),z.pathnameBase!=="/"&&(x=$t([x,z.pathnameBase]))}return S}function up(i,d){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[u,p]=dp(i.path,i.caseSensitive,i.end),g=d.match(u);if(!g)return null;let x=g[0],S=x.replace(/(.)\/+$/,"$1"),k=g.slice(1);return{params:p.reduce((M,D,z)=>{let{paramName:U,isOptional:te}=D;if(U==="*"){let G=k[z]||"";S=x.slice(0,x.length-G.length).replace(/(.)\/+$/,"$1")}const Y=k[z];return te&&!Y?M[U]=void 0:M[U]=(Y||"").replace(/%2F/g,"/"),M},{}),pathname:x,pathnameBase:S,pattern:i}}function dp(i,d,u){d===void 0&&(d=!1),u===void 0&&(u=!0),ql(i==="*"||!i.endsWith("*")||i.endsWith("/*"),'Route path "'+i+'" will be treated as if it were '+('"'+i.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+i.replace(/\*$/,"/*")+'".'));let p=[],g="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(S,k,L)=>(p.push({paramName:k,isOptional:L!=null}),L?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(p.push({paramName:"*"}),g+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?g+="\\/*$":i!==""&&i!=="/"&&(g+="(?:(?=\\/|$))"),[new RegExp(g,d?void 0:"i"),p]}function cp(i){try{return i.split("/").map(d=>decodeURIComponent(d).replace(/\//g,"%2F")).join("/")}catch(d){return ql(!1,'The URL path "'+i+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+d+").")),i}}function ei(i,d){if(d==="/")return i;if(!i.toLowerCase().startsWith(d.toLowerCase()))return null;let u=d.endsWith("/")?d.length-1:d.length,p=i.charAt(u);return p&&p!=="/"?null:i.slice(u)||"/"}function fp(i,d){d===void 0&&(d="/");let{pathname:u,search:p="",hash:g=""}=typeof i=="string"?mn(i):i;return{pathname:u?u.startsWith("/")?u:pp(u,d):d,search:yp(p),hash:gp(g)}}function pp(i,d){let u=d.replace(/\/+$/,"").split("/");return i.split("/").forEach(g=>{g===".."?u.length>1&&u.pop():g!=="."&&u.push(g)}),u.length>1?u.join("/"):"/"}function Ql(i,d,u,p){return"Cannot include a '"+i+"' character in a manually specified "+("`to."+d+"` field ["+JSON.stringify(p)+"].  Please separate it out to the ")+("`to."+u+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function hp(i){return i.filter((d,u)=>u===0||d.route.path&&d.route.path.length>0)}function ti(i,d){let u=hp(i);return d?u.map((p,g)=>g===u.length-1?p.pathname:p.pathnameBase):u.map(p=>p.pathnameBase)}function ni(i,d,u,p){p===void 0&&(p=!1);let g;typeof i=="string"?g=mn(i):(g=Rr({},i),Se(!g.pathname||!g.pathname.includes("?"),Ql("?","pathname","search",g)),Se(!g.pathname||!g.pathname.includes("#"),Ql("#","pathname","hash",g)),Se(!g.search||!g.search.includes("#"),Ql("#","search","hash",g)));let x=i===""||g.pathname==="",S=x?"/":g.pathname,k;if(S==null)k=u;else{let z=d.length-1;if(!p&&S.startsWith("..")){let U=S.split("/");for(;U[0]==="..";)U.shift(),z-=1;g.pathname=U.join("/")}k=z>=0?d[z]:"/"}let L=fp(g,k),M=S&&S!=="/"&&S.endsWith("/"),D=(x||S===".")&&u.endsWith("/");return!L.pathname.endsWith("/")&&(M||D)&&(L.pathname+="/"),L}const $t=i=>i.join("/").replace(/\/\/+/g,"/"),mp=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),yp=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,gp=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function vp(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}const Nd=["post","put","patch","delete"];new Set(Nd);const wp=["get",...Nd];new Set(wp);function Ar(){return Ar=Object.assign?Object.assign.bind():function(i){for(var d=1;d<arguments.length;d++){var u=arguments[d];for(var p in u)Object.prototype.hasOwnProperty.call(u,p)&&(i[p]=u[p])}return i},Ar.apply(this,arguments)}const ri=R.createContext(null),xp=R.createContext(null),qt=R.createContext(null),Za=R.createContext(null),Mt=R.createContext({outlet:null,matches:[],isDataRoute:!1}),Cd=R.createContext(null);function Sp(i,d){let{relative:u}=d===void 0?{}:d;Hn()||Se(!1);let{basename:p,navigator:g}=R.useContext(qt),{hash:x,pathname:S,search:k}=zd(i,{relative:u}),L=S;return p!=="/"&&(L=S==="/"?p:$t([p,S])),g.createHref({pathname:L,search:k,hash:x})}function Hn(){return R.useContext(Za)!=null}function yn(){return Hn()||Se(!1),R.useContext(Za).location}function Ed(i){R.useContext(qt).static||R.useLayoutEffect(i)}function bd(){let{isDataRoute:i}=R.useContext(Mt);return i?Dp():Lp()}function Lp(){Hn()||Se(!1);let i=R.useContext(ri),{basename:d,future:u,navigator:p}=R.useContext(qt),{matches:g}=R.useContext(Mt),{pathname:x}=yn(),S=JSON.stringify(ti(g,u.v7_relativeSplatPath)),k=R.useRef(!1);return Ed(()=>{k.current=!0}),R.useCallback(function(M,D){if(D===void 0&&(D={}),!k.current)return;if(typeof M=="number"){p.go(M);return}let z=ni(M,JSON.parse(S),x,D.relative==="path");i==null&&d!=="/"&&(z.pathname=z.pathname==="/"?d:$t([d,z.pathname])),(D.replace?p.replace:p.push)(z,D.state,D)},[d,p,S,x,i])}function kp(){let{matches:i}=R.useContext(Mt),d=i[i.length-1];return d?d.params:{}}function zd(i,d){let{relative:u}=d===void 0?{}:d,{future:p}=R.useContext(qt),{matches:g}=R.useContext(Mt),{pathname:x}=yn(),S=JSON.stringify(ti(g,p.v7_relativeSplatPath));return R.useMemo(()=>ni(i,JSON.parse(S),x,u==="path"),[i,S,x,u])}function jp(i,d){return Np(i,d)}function Np(i,d,u,p){Hn()||Se(!1);let{navigator:g}=R.useContext(qt),{matches:x}=R.useContext(Mt),S=x[x.length-1],k=S?S.params:{};S&&S.pathname;let L=S?S.pathnameBase:"/";S&&S.route;let M=yn(),D;if(d){var z;let A=typeof d=="string"?mn(d):d;L==="/"||(z=A.pathname)!=null&&z.startsWith(L)||Se(!1),D=A}else D=M;let U=D.pathname||"/",te=U;if(L!=="/"){let A=L.replace(/^\//,"").split("/");te="/"+U.replace(/^\//,"").split("/").slice(A.length).join("/")}let Y=Kf(i,{pathname:te}),G=Mp(Y&&Y.map(A=>Object.assign({},A,{params:Object.assign({},k,A.params),pathname:$t([L,g.encodeLocation?g.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?L:$t([L,g.encodeLocation?g.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),x,u,p);return d&&G?R.createElement(Za.Provider,{value:{location:Ar({pathname:"/",search:"",hash:"",state:null,key:"default"},D),navigationType:Kt.Pop}},G):G}function Cp(){let i=Pp(),d=vp(i)?i.status+" "+i.statusText:i instanceof Error?i.message:JSON.stringify(i),u=i instanceof Error?i.stack:null,g={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},d),u?R.createElement("pre",{style:g},u):null,null)}const Ep=R.createElement(Cp,null);class bp extends R.Component{constructor(d){super(d),this.state={location:d.location,revalidation:d.revalidation,error:d.error}}static getDerivedStateFromError(d){return{error:d}}static getDerivedStateFromProps(d,u){return u.location!==d.location||u.revalidation!=="idle"&&d.revalidation==="idle"?{error:d.error,location:d.location,revalidation:d.revalidation}:{error:d.error!==void 0?d.error:u.error,location:u.location,revalidation:d.revalidation||u.revalidation}}componentDidCatch(d,u){console.error("React Router caught the following error during render",d,u)}render(){return this.state.error!==void 0?R.createElement(Mt.Provider,{value:this.props.routeContext},R.createElement(Cd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function zp(i){let{routeContext:d,match:u,children:p}=i,g=R.useContext(ri);return g&&g.static&&g.staticContext&&(u.route.errorElement||u.route.ErrorBoundary)&&(g.staticContext._deepestRenderedBoundaryId=u.route.id),R.createElement(Mt.Provider,{value:d},p)}function Mp(i,d,u,p){var g;if(d===void 0&&(d=[]),u===void 0&&(u=null),p===void 0&&(p=null),i==null){var x;if(!u)return null;if(u.errors)i=u.matches;else if((x=p)!=null&&x.v7_partialHydration&&d.length===0&&!u.initialized&&u.matches.length>0)i=u.matches;else return null}let S=i,k=(g=u)==null?void 0:g.errors;if(k!=null){let D=S.findIndex(z=>z.route.id&&k?.[z.route.id]!==void 0);D>=0||Se(!1),S=S.slice(0,Math.min(S.length,D+1))}let L=!1,M=-1;if(u&&p&&p.v7_partialHydration)for(let D=0;D<S.length;D++){let z=S[D];if((z.route.HydrateFallback||z.route.hydrateFallbackElement)&&(M=D),z.route.id){let{loaderData:U,errors:te}=u,Y=z.route.loader&&U[z.route.id]===void 0&&(!te||te[z.route.id]===void 0);if(z.route.lazy||Y){L=!0,M>=0?S=S.slice(0,M+1):S=[S[0]];break}}}return S.reduceRight((D,z,U)=>{let te,Y=!1,G=null,A=null;u&&(te=k&&z.route.id?k[z.route.id]:void 0,G=z.route.errorElement||Ep,L&&(M<0&&U===0?(Vp("route-fallback"),Y=!0,A=null):M===U&&(Y=!0,A=z.route.hydrateFallbackElement||null)));let oe=d.concat(S.slice(0,U+1)),le=()=>{let ne;return te?ne=G:Y?ne=A:z.route.Component?ne=R.createElement(z.route.Component,null):z.route.element?ne=z.route.element:ne=D,R.createElement(zp,{match:z,routeContext:{outlet:D,matches:oe,isDataRoute:u!=null},children:ne})};return u&&(z.route.ErrorBoundary||z.route.errorElement||U===0)?R.createElement(bp,{location:u.location,revalidation:u.revalidation,component:G,error:te,children:le(),routeContext:{outlet:null,matches:oe,isDataRoute:!0}}):le()},null)}var Md=(function(i){return i.UseBlocker="useBlocker",i.UseRevalidator="useRevalidator",i.UseNavigateStable="useNavigate",i})(Md||{}),Rd=(function(i){return i.UseBlocker="useBlocker",i.UseLoaderData="useLoaderData",i.UseActionData="useActionData",i.UseRouteError="useRouteError",i.UseNavigation="useNavigation",i.UseRouteLoaderData="useRouteLoaderData",i.UseMatches="useMatches",i.UseRevalidator="useRevalidator",i.UseNavigateStable="useNavigate",i.UseRouteId="useRouteId",i})(Rd||{});function Rp(i){let d=R.useContext(ri);return d||Se(!1),d}function Ap(i){let d=R.useContext(xp);return d||Se(!1),d}function Tp(i){let d=R.useContext(Mt);return d||Se(!1),d}function Ad(i){let d=Tp(),u=d.matches[d.matches.length-1];return u.route.id||Se(!1),u.route.id}function Pp(){var i;let d=R.useContext(Cd),u=Ap(),p=Ad();return d!==void 0?d:(i=u.errors)==null?void 0:i[p]}function Dp(){let{router:i}=Rp(Md.UseNavigateStable),d=Ad(Rd.UseNavigateStable),u=R.useRef(!1);return Ed(()=>{u.current=!0}),R.useCallback(function(g,x){x===void 0&&(x={}),u.current&&(typeof g=="number"?i.navigate(g):i.navigate(g,Ar({fromRouteId:d},x)))},[i,d])}const fd={};function Vp(i,d,u){fd[i]||(fd[i]=!0)}function Fp(i,d){i?.v7_startTransition,i?.v7_relativeSplatPath}function Ip(i){let{to:d,replace:u,state:p,relative:g}=i;Hn()||Se(!1);let{future:x,static:S}=R.useContext(qt),{matches:k}=R.useContext(Mt),{pathname:L}=yn(),M=bd(),D=ni(d,ti(k,x.v7_relativeSplatPath),L,g==="path"),z=JSON.stringify(D);return R.useEffect(()=>M(JSON.parse(z),{replace:u,state:p,relative:g}),[M,z,g,u,p]),null}function Mr(i){Se(!1)}function Bp(i){let{basename:d="/",children:u=null,location:p,navigationType:g=Kt.Pop,navigator:x,static:S=!1,future:k}=i;Hn()&&Se(!1);let L=d.replace(/^\/*/,"/"),M=R.useMemo(()=>({basename:L,navigator:x,static:S,future:Ar({v7_relativeSplatPath:!1},k)}),[L,k,x,S]);typeof p=="string"&&(p=mn(p));let{pathname:D="/",search:z="",hash:U="",state:te=null,key:Y="default"}=p,G=R.useMemo(()=>{let A=ei(D,L);return A==null?null:{location:{pathname:A,search:z,hash:U,state:te,key:Y},navigationType:g}},[L,D,z,U,te,Y,g]);return G==null?null:R.createElement(qt.Provider,{value:M},R.createElement(Za.Provider,{children:u,value:G}))}function Op(i){let{children:d,location:u}=i;return jp(Xl(d),u)}new Promise(()=>{});function Xl(i,d){d===void 0&&(d=[]);let u=[];return R.Children.forEach(i,(p,g)=>{if(!R.isValidElement(p))return;let x=[...d,g];if(p.type===R.Fragment){u.push.apply(u,Xl(p.props.children,x));return}p.type!==Mr&&Se(!1),!p.props.index||!p.props.children||Se(!1);let S={id:p.props.id||x.join("-"),caseSensitive:p.props.caseSensitive,element:p.props.element,Component:p.props.Component,index:p.props.index,path:p.props.path,loader:p.props.loader,action:p.props.action,errorElement:p.props.errorElement,ErrorBoundary:p.props.ErrorBoundary,hasErrorBoundary:p.props.ErrorBoundary!=null||p.props.errorElement!=null,shouldRevalidate:p.props.shouldRevalidate,handle:p.props.handle,lazy:p.props.lazy};p.props.children&&(S.children=Xl(p.props.children,x)),u.push(S)}),u}function Yl(){return Yl=Object.assign?Object.assign.bind():function(i){for(var d=1;d<arguments.length;d++){var u=arguments[d];for(var p in u)Object.prototype.hasOwnProperty.call(u,p)&&(i[p]=u[p])}return i},Yl.apply(this,arguments)}function Up(i,d){if(i==null)return{};var u={},p=Object.keys(i),g,x;for(x=0;x<p.length;x++)g=p[x],!(d.indexOf(g)>=0)&&(u[g]=i[g]);return u}function _p(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function Hp(i,d){return i.button===0&&(!d||d==="_self")&&!_p(i)}const Gp=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Jp="6";try{window.__reactRouterVersion=Jp}catch{}const Zp="startTransition",pd=_f[Zp];function Qp(i){let{basename:d,children:u,future:p,window:g}=i,x=R.useRef();x.current==null&&(x.current=Wf({window:g,v5Compat:!0}));let S=x.current,[k,L]=R.useState({action:S.action,location:S.location}),{v7_startTransition:M}=p||{},D=R.useCallback(z=>{M&&pd?pd(()=>L(z)):L(z)},[L,M]);return R.useLayoutEffect(()=>S.listen(D),[S,D]),R.useEffect(()=>Fp(p),[p]),R.createElement(Bp,{basename:d,children:u,location:k.location,navigationType:k.action,navigator:S,future:p})}const Wp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Xp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ot=R.forwardRef(function(d,u){let{onClick:p,relative:g,reloadDocument:x,replace:S,state:k,target:L,to:M,preventScrollReset:D,viewTransition:z}=d,U=Up(d,Gp),{basename:te}=R.useContext(qt),Y,G=!1;if(typeof M=="string"&&Xp.test(M)&&(Y=M,Wp))try{let ne=new URL(window.location.href),ie=M.startsWith("//")?new URL(ne.protocol+M):new URL(M),Ne=ei(ie.pathname,te);ie.origin===ne.origin&&Ne!=null?M=Ne+ie.search+ie.hash:G=!0}catch{}let A=Sp(M,{relative:g}),oe=Yp(M,{replace:S,state:k,target:L,preventScrollReset:D,relative:g,viewTransition:z});function le(ne){p&&p(ne),ne.defaultPrevented||oe(ne)}return R.createElement("a",Yl({},U,{href:Y||A,onClick:G||x?p:le,ref:u,target:L}))});var hd;(function(i){i.UseScrollRestoration="useScrollRestoration",i.UseSubmit="useSubmit",i.UseSubmitFetcher="useSubmitFetcher",i.UseFetcher="useFetcher",i.useViewTransitionState="useViewTransitionState"})(hd||(hd={}));var md;(function(i){i.UseFetcher="useFetcher",i.UseFetchers="useFetchers",i.UseScrollRestoration="useScrollRestoration"})(md||(md={}));function Yp(i,d){let{target:u,replace:p,state:g,preventScrollReset:x,relative:S,viewTransition:k}=d===void 0?{}:d,L=bd(),M=yn(),D=zd(i,{relative:S});return R.useCallback(z=>{if(Hp(z,u)){z.preventDefault();let U=p!==void 0?p:Ga(M)===Ga(D);L(i,{replace:U,state:g,preventScrollReset:x,relative:S,viewTransition:k})}},[M,L,D,p,g,u,i,x,S,k])}const Kp=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),$p=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(d,u,p)=>p?p.toUpperCase():u.toLowerCase()),yd=i=>{const d=$p(i);return d.charAt(0).toUpperCase()+d.slice(1)},Td=(...i)=>i.filter((d,u,p)=>!!d&&d.trim()!==""&&p.indexOf(d)===u).join(" ").trim(),qp=i=>{for(const d in i)if(d.startsWith("aria-")||d==="role"||d==="title")return!0};var eh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const th=R.forwardRef(({color:i="currentColor",size:d=24,strokeWidth:u=2,absoluteStrokeWidth:p,className:g="",children:x,iconNode:S,...k},L)=>R.createElement("svg",{ref:L,...eh,width:d,height:d,stroke:i,strokeWidth:p?Number(u)*24/Number(d):u,className:Td("lucide",g),...!x&&!qp(k)&&{"aria-hidden":"true"},...k},[...S.map(([M,D])=>R.createElement(M,D)),...Array.isArray(x)?x:[x]]));const fe=(i,d)=>{const u=R.forwardRef(({className:p,...g},x)=>R.createElement(th,{ref:x,iconNode:d,className:Td(`lucide-${Kp(yd(i))}`,`lucide-${i}`,p),...g}));return u.displayName=yd(i),u};const nh=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],rh=fe("arrow-left",nh);const ah=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],oh=fe("arrow-right",ah);const lh=[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]],ih=fe("brain",lh);const sh=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Pd=fe("chevron-down",sh);const uh=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],dh=fe("chevron-left",uh);const ch=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],fh=fe("chevron-right",ch);const ph=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],hh=fe("chevron-up",ph);const mh=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Dd=fe("clock",mh);const yh=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],Vd=fe("code",yh);const gh=[["rect",{width:"12",height:"12",x:"2",y:"10",rx:"2",ry:"2",key:"6agr2n"}],["path",{d:"m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6",key:"1o487t"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 14h.01",key:"ssrbsk"}],["path",{d:"M15 6h.01",key:"cblpky"}],["path",{d:"M18 9h.01",key:"2061c0"}]],vh=fe("dices",gh);const wh=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],gd=fe("download",wh);const xh=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Sh=fe("external-link",xh);const Lh=[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]],Qa=fe("gamepad-2",Lh);const kh=[["line",{x1:"6",x2:"10",y1:"12",y2:"12",key:"161bw2"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"15",x2:"15.01",y1:"13",y2:"13",key:"dqpgro"}],["line",{x1:"18",x2:"18.01",y1:"11",y2:"11",key:"meh2c"}],["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]],jh=fe("gamepad",kh);const Nh=[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]],Fd=fe("git-branch",Nh);const Ch=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],ai=fe("github",Ch);const Eh=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],bh=fe("layers",Eh);const zh=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],Id=fe("linkedin",zh);const Mh=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Ja=fe("mail",Mh);const Rh=[["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 18h16",key:"19g7jn"}],["path",{d:"M4 6h16",key:"1o0s65"}]],Ah=fe("menu",Rh);const Th=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],Ph=fe("moon",Th);const Dh=[["path",{d:"M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",key:"nt11vn"}],["path",{d:"m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",key:"15qc1e"}],["path",{d:"m2.3 2.3 7.286 7.286",key:"1wuzzi"}],["circle",{cx:"11",cy:"11",r:"2",key:"xmgehs"}]],Vh=fe("pen-tool",Dh);const Fh=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],Ih=fe("phone",Fh);const Bh=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],Oh=fe("sun",Bh);const Uh=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],_h=fe("x",Uh),vd=()=>{const[i,d]=R.useState(()=>typeof window<"u"?localStorage.getItem("theme")||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"):"light");R.useEffect(()=>{const p=window.document.documentElement;i==="dark"?p.classList.add("dark"):p.classList.remove("dark"),localStorage.setItem("theme",i)},[i]);const u=()=>{d(p=>p==="light"?"dark":"light")};return s.jsx("button",{onClick:u,className:"p-2 rounded-full bg-parchment dark:bg-midnight-blue text-dark-brown dark:text-soft-white hover:bg-muted-gold dark:hover:bg-desaturated-purple transition-colors duration-300 border-2 border-dark-brown dark:border-soft-white","aria-label":"Toggle theme","data-yw":"c3JjL2NvbXBvbmVudHMvVGhlbWVUb2dnbGUudHN4QDI4OjQ","data-yw-s":!0,children:i==="light"?s.jsx(Oh,{size:20}):s.jsx(Ph,{size:20})})},wd=[{name:"Queens Rush",path:"/projects/queens-rush"},{name:"Whisper of Seasons",path:"/projects/whisper-of-seasons"},{name:"Plora",path:"/projects/plora"},{name:"Daggerbound",path:"/projects/daggerbound"},{name:"Tower Defence",path:"/projects/tower-defence"},{name:"Rogue Card",path:"/projects/rogue-card"}],Hh=({children:i})=>{const[d,u]=R.useState(!1),[p,g]=R.useState(!1);yn();const x=()=>u(!d),S=()=>u(!1);return s.jsxs("div",{className:"min-h-screen flex flex-col bg-parchment dark:bg-midnight-blue text-dark-brown dark:text-soft-white transition-colors duration-300 font-sans","data-yw":"c3JjL2NvbXBvbmVudHMvTGF5b3V0LnRzeEAyNDo0","data-yw-s":!0,children:[s.jsxs("nav",{className:"sticky top-0 z-50 bg-parchment/90 dark:bg-midnight-blue/90 backdrop-blur-sm border-b-4 border-dark-brown dark:border-soft-white shadow-md","data-yw":"c3JjL2NvbXBvbmVudHMvTGF5b3V0LnRzeEAyNjo2","data-yw-s":!0,children:[s.jsxs("div",{className:"container mx-auto px-4 py-3 flex justify-between items-center","data-yw":"c3JjL2NvbXBvbmVudHMvTGF5b3V0LnRzeEAyNzo4","data-yw-s":!0,children:[s.jsx(ot,{to:"/",className:"text-xl font-bold uppercase tracking-wider font-heading",onClick:S,children:"Birkan Ates"}),s.jsxs("div",{className:"hidden md:flex items-center space-x-8","data-yw":"c3JjL2NvbXBvbmVudHMvTGF5b3V0LnRzeEAzMzoxMA","data-yw-s":!0,children:[s.jsx(ot,{to:"/",className:"hover:text-muted-gold dark:hover:text-desaturated-purple font-bold uppercase transition-colors",children:"Home"}),s.jsx(ot,{to:"/about",className:"hover:text-muted-gold dark:hover:text-desaturated-purple font-bold uppercase transition-colors",children:"About"}),s.jsxs("div",{className:"relative group","data-yw":"c3JjL2NvbXBvbmVudHMvTGF5b3V0LnRzeEAzNzoxMg","data-yw-s":!0,children:[s.jsxs("button",{className:"flex items-center hover:text-muted-gold dark:hover:text-desaturated-purple font-bold uppercase transition-colors focus:outline-none",onMouseEnter:()=>g(!0),onClick:()=>g(!p),"data-yw":"c3JjL2NvbXBvbmVudHMvTGF5b3V0LnRzeEAzODoxNA","data-yw-s":!0,children:[s.jsx("span",{"data-yw":"c3JjL2NvbXBvbmVudHMvTGF5b3V0LnRzeEA0MjoxNQ","data-yw-t":!0,"data-yw-auto":!0,children:"Projects "}),s.jsx(Pd,{size:16,className:"ml-1"})]}),s.jsx("div",{className:"absolute left-0 pt-2 w-56 hidden group-hover:block hover:block","data-yw":"c3JjL2NvbXBvbmVudHMvTGF5b3V0LnRzeEA0NzoxNA","data-yw-s":!0,children:s.jsx("div",{className:"bg-parchment dark:bg-midnight-blue border-2 border-dark-brown dark:border-soft-white shadow-xl rounded-sm overflow-hidden","data-yw":"c3JjL2NvbXBvbmVudHMvTGF5b3V0LnRzeEA1MDoxNg","data-yw-s":!0,children:wd.map(k=>s.jsx(ot,{to:k.path,className:"block px-4 py-2 hover:bg-muted-gold dark:hover:bg-desaturated-purple hover:text-white transition-colors text-sm font-bold uppercase",children:k.name},k.name))})})]}),s.jsx(ot,{to:"/contact",className:"hover:text-muted-gold dark:hover:text-desaturated-purple font-bold uppercase transition-colors",children:"Contact"}),s.jsx(vd,{})]}),s.jsxs("div",{className:"md:hidden flex items-center space-x-4","data-yw":"c3JjL2NvbXBvbmVudHMvTGF5b3V0LnRzeEA2OToxMA","data-yw-s":!0,children:[s.jsx(vd,{}),s.jsx("button",{onClick:x,className:"p-2","data-yw":"c3JjL2NvbXBvbmVudHMvTGF5b3V0LnRzeEA3MToxMg","data-yw-s":!0,children:d?s.jsx(_h,{size:24}):s.jsx(Ah,{size:24})})]})]}),d&&s.jsx("div",{className:"md:hidden bg-parchment dark:bg-midnight-blue border-t-2 border-dark-brown dark:border-soft-white","data-yw":"c3JjL2NvbXBvbmVudHMvTGF5b3V0LnRzeEA3OToxMA","data-yw-s":!0,children:s.jsxs("div",{className:"flex flex-col p-4 space-y-4","data-yw":"c3JjL2NvbXBvbmVudHMvTGF5b3V0LnRzeEA4MDoxMg","data-yw-s":!0,children:[s.jsx(ot,{to:"/",className:"font-bold uppercase",onClick:S,children:"Home"}),s.jsx(ot,{to:"/about",className:"font-bold uppercase",onClick:S,children:"About"}),s.jsx("div",{className:"font-bold uppercase text-muted-gold dark:text-moonlight-blue","data-yw":"c3JjL2NvbXBvbmVudHMvTGF5b3V0LnRzeEA4MzoxNA","data-yw-t":!0,"data-yw-s":!0,children:"Projects"}),s.jsx("div",{className:"pl-4 flex flex-col space-y-2 border-l-2 border-dark-brown dark:border-soft-white ml-2","data-yw":"c3JjL2NvbXBvbmVudHMvTGF5b3V0LnRzeEA4NDoxNA","data-yw-s":!0,children:wd.map(k=>s.jsx(ot,{to:k.path,className:"text-sm hover:text-muted-gold dark:hover:text-desaturated-purple",onClick:S,children:k.name},k.name))}),s.jsx(ot,{to:"/contact",className:"font-bold uppercase",onClick:S,children:"Contact"})]})})]}),s.jsx("main",{className:"flex-grow","data-yw":"c3JjL2NvbXBvbmVudHMvTGF5b3V0LnRzeEAxMDM6Ng","data-yw-s":!0,children:i}),s.jsxs("footer",{className:"bg-parchment dark:bg-midnight-blue border-t-4 border-dark-brown dark:border-soft-white py-8 mt-auto relative overflow-hidden","data-yw":"c3JjL2NvbXBvbmVudHMvTGF5b3V0LnRzeEAxMDg6Ng","data-yw-s":!0,children:[s.jsxs("div",{className:"container mx-auto px-4 flex flex-col md:flex-row justify-between items-center","data-yw":"c3JjL2NvbXBvbmVudHMvTGF5b3V0LnRzeEAxMTA6OA","data-yw-s":!0,children:[s.jsxs("div",{className:"mb-4 md:mb-0","data-yw":"c3JjL2NvbXBvbmVudHMvTGF5b3V0LnRzeEAxMTE6MTA","data-yw-s":!0,children:[s.jsx("h3",{className:"font-heading text-lg mb-2","data-yw":"c3JjL2NvbXBvbmVudHMvTGF5b3V0LnRzeEAxMTI6MTI","data-yw-t":!0,"data-yw-s":!0,children:"Birkan Ates"}),s.jsx("p",{className:"text-sm opacity-75","data-yw":"c3JjL2NvbXBvbmVudHMvTGF5b3V0LnRzeEAxMTM6MTI","data-yw-t":!0,"data-yw-s":!0,children:"Gameplay Programmer & Game Developer"})]}),s.jsxs("div",{className:"flex space-x-6","data-yw":"c3JjL2NvbXBvbmVudHMvTGF5b3V0LnRzeEAxMTY6MTA","data-yw-s":!0,children:[s.jsx("a",{href:"https://www.linkedin.com/in/birkan-ates-b5a40b2ab/",target:"_blank",rel:"noopener noreferrer",className:"p-2 bg-dark-brown dark:bg-soft-white text-parchment dark:text-midnight-blue rounded hover:bg-muted-gold dark:hover:bg-desaturated-purple transition-colors","data-yw":"c3JjL2NvbXBvbmVudHMvTGF5b3V0LnRzeEAxMTc6MTI","data-yw-s":!0,"data-yw-l":!0,children:s.jsx(Id,{size:20})}),s.jsx("a",{href:"https://github.com/DullySkull",target:"_blank",rel:"noopener noreferrer",className:"p-2 bg-dark-brown dark:bg-soft-white text-parchment dark:text-midnight-blue rounded hover:bg-muted-gold dark:hover:bg-desaturated-purple transition-colors","data-yw":"c3JjL2NvbXBvbmVudHMvTGF5b3V0LnRzeEAxMjA6MTI","data-yw-s":!0,"data-yw-l":!0,children:s.jsx(ai,{size:20})}),s.jsx("a",{href:"https://itch.io/profile/dullyskull",target:"_blank",rel:"noopener noreferrer",className:"p-2 bg-dark-brown dark:bg-soft-white text-parchment dark:text-midnight-blue rounded hover:bg-muted-gold dark:hover:bg-desaturated-purple transition-colors","data-yw":"c3JjL2NvbXBvbmVudHMvTGF5b3V0LnRzeEAxMjM6MTI","data-yw-s":!0,"data-yw-l":!0,children:s.jsx(Qa,{size:20})}),s.jsx("a",{href:"mailto:Billy.ates@hotmail.com",className:"p-2 bg-dark-brown dark:bg-soft-white text-parchment dark:text-midnight-blue rounded hover:bg-muted-gold dark:hover:bg-desaturated-purple transition-colors","data-yw":"c3JjL2NvbXBvbmVudHMvTGF5b3V0LnRzeEAxMjY6MTI","data-yw-s":!0,"data-yw-l":!0,children:s.jsx(Ja,{size:20})})]})]}),s.jsxs("div",{className:"text-center mt-6 text-xs opacity-50","data-yw":"c3JjL2NvbXBvbmVudHMvTGF5b3V0LnRzeEAxMzE6OA","data-yw-s":!0,children:[s.jsx("span",{"data-yw":"c3JjL2NvbXBvbmVudHMvTGF5b3V0LnRzeEAxMzE6NjE","data-yw-t":!0,"data-yw-auto":!0,children:"© "}),new Date().getFullYear(),s.jsx("span",{"data-yw":"c3JjL2NvbXBvbmVudHMvTGF5b3V0LnRzeEAxMzI6Mzg","data-yw-t":!0,"data-yw-auto":!0,children:" Birkan Ates. All rights reserved."})]})]})]})};function Gh(){const{pathname:i}=yn();return R.useEffect(()=>{window.scrollTo(0,0)},[i]),null}const xd=({title:i,description:d,contributionSummary:u,image:p,link:g,time:x,engine:S,language:k,versionControl:L,imageFit:M="cover"})=>s.jsxs("div",{className:"group relative bg-parchment dark:bg-midnight-blue border-4 border-dark-brown dark:border-soft-white rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1","data-yw":"c3JjL2NvbXBvbmVudHMvUHJvamVjdENhcmQudHN4QDMxOjQ","data-yw-s":!0,children:[s.jsxs("div",{className:"relative h-64 overflow-hidden border-b-4 border-dark-brown dark:border-soft-white bg-black/5 dark:bg-white/5","data-yw":"c3JjL2NvbXBvbmVudHMvUHJvamVjdENhcmQudHN4QDMzOjY","data-yw-s":!0,children:[s.jsx("img",{src:p,alt:i,className:`w-full h-full object-${M} transition-transform duration-500 group-hover:scale-110`,"data-yw":"c3JjL2NvbXBvbmVudHMvUHJvamVjdENhcmQudHN4QDM0Ojg","data-yw-s":!0}),s.jsx("div",{className:"absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300","data-yw":"c3JjL2NvbXBvbmVudHMvUHJvamVjdENhcmQudHN4QDM5Ojg","data-yw-s":!0})]}),s.jsxs("div",{className:"p-6","data-yw":"c3JjL2NvbXBvbmVudHMvUHJvamVjdENhcmQudHN4QDQzOjY","data-yw-s":!0,children:[s.jsx("h3",{className:"text-2xl font-bold font-heading mb-2 uppercase text-dark-brown dark:text-soft-white","data-yw":"c3JjL2NvbXBvbmVudHMvUHJvamVjdENhcmQudHN4QDQ0Ojg","data-yw-s":!0,children:i}),s.jsx("p",{className:"text-sm mb-4 opacity-90 line-clamp-2","data-yw":"c3JjL2NvbXBvbmVudHMvUHJvamVjdENhcmQudHN4QDQ1Ojg","data-yw-s":!0,children:d}),u&&s.jsx("div",{className:"flex items-start gap-2 mb-4 text-sm font-bold text-dark-brown dark:text-soft-white bg-black/5 dark:bg-white/5 p-2 rounded-sm border-l-4 border-forest-green dark:border-moonlight-blue","data-yw":"c3JjL2NvbXBvbmVudHMvUHJvamVjdENhcmQudHN4QDQ4OjEw","data-yw-s":!0,children:s.jsx("span",{"data-yw":"c3JjL2NvbXBvbmVudHMvUHJvamVjdENhcmQudHN4QDQ5OjEy","data-yw-s":!0,children:u})}),s.jsxs("div",{className:"flex flex-wrap gap-4 mb-6 text-xs font-bold uppercase tracking-wide opacity-80","data-yw":"c3JjL2NvbXBvbmVudHMvUHJvamVjdENhcmQudHN4QDU0Ojg","data-yw-s":!0,children:[s.jsxs("div",{className:"flex items-center gap-1","data-yw":"c3JjL2NvbXBvbmVudHMvUHJvamVjdENhcmQudHN4QDU1OjEw","data-yw-s":!0,children:[s.jsx(Dd,{size:14}),s.jsx("span",{"data-yw":"c3JjL2NvbXBvbmVudHMvUHJvamVjdENhcmQudHN4QDU3OjEy","data-yw-s":!0,children:x})]}),s.jsxs("div",{className:"flex items-center gap-1","data-yw":"c3JjL2NvbXBvbmVudHMvUHJvamVjdENhcmQudHN4QDU5OjEw","data-yw-s":!0,children:[s.jsx(Qa,{size:14}),s.jsx("span",{"data-yw":"c3JjL2NvbXBvbmVudHMvUHJvamVjdENhcmQudHN4QDYxOjEy","data-yw-s":!0,children:S})]}),s.jsxs("div",{className:"flex items-center gap-1","data-yw":"c3JjL2NvbXBvbmVudHMvUHJvamVjdENhcmQudHN4QDYzOjEw","data-yw-s":!0,children:[s.jsx(Vd,{size:14}),s.jsx("span",{"data-yw":"c3JjL2NvbXBvbmVudHMvUHJvamVjdENhcmQudHN4QDY1OjEy","data-yw-s":!0,children:k})]}),s.jsxs("div",{className:"flex items-center gap-1","data-yw":"c3JjL2NvbXBvbmVudHMvUHJvamVjdENhcmQudHN4QDY3OjEw","data-yw-s":!0,children:[s.jsx(Fd,{size:14}),s.jsx("span",{"data-yw":"c3JjL2NvbXBvbmVudHMvUHJvamVjdENhcmQudHN4QDY5OjEy","data-yw-s":!0,children:L})]})]}),s.jsxs(ot,{to:g,className:"inline-flex items-center gap-2 px-6 py-2 bg-dark-brown dark:bg-soft-white text-parchment dark:text-midnight-blue font-bold uppercase hover:bg-muted-gold dark:hover:bg-desaturated-purple transition-colors rounded-sm",children:["Read More ",s.jsx(oh,{size:16})]})]})]}),Jh=""+new URL("queens-rush-new-2-BmQePezc.png",import.meta.url).href,Zh=""+new URL("queens-rush-home-D2KWk27h.png",import.meta.url).href,Qh=""+new URL("whisper-header-c2adxdTg.png",import.meta.url).href,Wh=""+new URL("whisper-home-DIHV0rd2.png",import.meta.url).href,Xh=""+new URL("plora-home-Oc7OGADj.png",import.meta.url).href,Yh=""+new URL("plora-header-3J6BqyMw.png",import.meta.url).href,Kh=""+new URL("rogue-card-real-B2t38P9U.png",import.meta.url).href,$h=""+new URL("tower-defence-new-D7uHK4_7.png",import.meta.url).href,qh=""+new URL("queens-rush-1-DHuu9McM.png",import.meta.url).href,em=""+new URL("queens-rush-2-DFPgauLO.png",import.meta.url).href,tm=""+new URL("queens-rush-3-DCEzsmFi.png",import.meta.url).href,nm=""+new URL("queens-rush-4-BFU8YViQ.png",import.meta.url).href,rm=""+new URL("queens-rush-5-BZNPIvFs.png",import.meta.url).href,am=""+new URL("whisper-gallery-1-bz0SOlqF.png",import.meta.url).href,om=""+new URL("whisper-gallery-2-B4uRT5Dn.png",import.meta.url).href,lm=""+new URL("whisper-gallery-3-DZot9Wq8.png",import.meta.url).href,im=""+new URL("whisper-gallery-4-J_p5mUAs.png",import.meta.url).href,sm=""+new URL("plora-gallery-1-y5iRtu5D.png",import.meta.url).href,um=""+new URL("plora-gallery-2-DeGuJEqj.png",import.meta.url).href,dm=""+new URL("plora-gallery-3-m9eaGjNm.png",import.meta.url).href,cm=""+new URL("plora-gallery-4-DjDnYufR.png",import.meta.url).href,fm=""+new URL("plora-gallery-5-D-KTFhf2.png",import.meta.url).href,pm=""+new URL("plora-gallery-6-Cv_qg_QB.png",import.meta.url).href,hm=""+new URL("plora-ui-1-D9R-UH_F.png",import.meta.url).href,mm=""+new URL("plora-ui-2-DBHZLM-P.png",import.meta.url).href,ym=""+new URL("plora-ui-3-CSORiGz8.png",import.meta.url).href,gm=""+new URL("plora-ui-4-D_8aPKDd.png",import.meta.url).href,vm=""+new URL("plora-ui-showcase-BMSM5W8E.gif",import.meta.url).href,wm=""+new URL("daggerbound-gallery-1-Dsag6N87.png",import.meta.url).href,xm=""+new URL("daggerbound-gallery-2-CN5CryZJ.png",import.meta.url).href,Sm=""+new URL("daggerbound-gallery-3-CQj27v7s.png",import.meta.url).href,Lm=""+new URL("daggerbound-gallery-4-D7fJ2wKf.png",import.meta.url).href,km=""+new URL("daggerbound-header--Yxaw0QP.png",import.meta.url).href,jm=""+new URL("daggerbound-home-Dv0QO-ev.png",import.meta.url).href,Kl=[{id:"queens-rush",title:"Queens Rush",description:"Queens Rush is a third-person melee boss rush. You play as a fabulously buff drag queen invited to take part in the yearly Queens Rush Tournament. Fight themed bosses with mechanics inspired by Final Fantasy XIV, learn combo-based combat, and earn your place as the Ultimate Queen.",contributionSummary:"Gameplay Programmer – GameState, Cinematic tool, environment hazards, tutorial systems",image:Jh,homeImage:Zh,time:"7 weeks",engine:"Unreal Engine 5.4",language:"C++",versionControl:"Perforce",externalLink:"https://futuregames.itch.io/queens-rush",gallery:[qh,em,tm,nm,rm],video:"https://www.youtube.com/embed/gtPgqS8e6O4",contributions:["Game flow / state tracking: UGameStateManager","Cinematics pipeline: UCinematicManagerComponent","Tutorial system: UTutorialManagerComponent","Training dummy: ATrainingDummy","Environment switching: AEnvironmentManager","Boss hazards: Chess barrier activation + Bee honey puddles","Boss throwables: AThrowableSpawner"],techOverview:"Built in Unreal Engine 5.4, using C++ for core gameplay systems and Blueprint/UMG for designer-facing interaction. My work focused on game flow, cinematic transitions, tutorial structure, and boss-specific environment systems (hazards + throwables) to make each boss arena feel mechanically distinct.",deepDives:[{title:"Game Manager (GameStateManager)",content:"I implemented a lightweight UGameStateManager to track global game flow and provide a clean API for state transitions. It prevents duplicate transitions and logs state changes for debugging.",code:`void UGameStateManager::SetGameState(EGameState NewState)
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
}`}]},{id:"whisper-of-seasons",title:"Whisper of Seasons",description:"Whisper of Seasons is a serene adventure game about harmony, connection, and the beauty of a world discovering its voice once more.",contributionSummary:"Gameplay & Systems Programmer – AI behaviours, gameplay tools, Puzzle",image:Qh,homeImage:Wh,time:"4 weeks",engine:"Unreal Engine 5.4",language:"C++",versionControl:"Perforce",externalLink:"https://dullyskull.itch.io/whisper-of-seasons",gallery:[am,om,lm,im],video:"https://www.youtube.com/embed/QwHXWaCSoDk",contributions:["Modular environmental puzzle system (Zen Garden)","Dynamic wildlife spawning & AI","Boids-based flocking simulation (Fish)","Companion AI system (Fox)","Procedural-content-aware design"],techOverview:"Built in Unreal Engine 5.4, using C++ for all core gameplay, AI, and simulation systems, with Blueprints used only for designer-facing configuration and iteration. My work focused on procedural gameplay systems, environmental puzzles, wildlife AI, boids-based flocking simulation, and companion AI, all designed to work reliably in a procedurally generated world.",deepDives:[{title:"Zen Garden Puzzle System",content:"I implemented a modular environmental puzzle system inspired by Zen garden mechanics. The puzzle is designed to function independently of level layout, making it safe to use in procedurally generated environments.",code:`// ZenGardenPuzzle.cpp
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
}`}]},{id:"plora",title:"Plora",description:"Plora is an endless-diver game where you pilot a repair drone to try to keep your spaceship-turned-submarine fueled and in good repair while you explore the depths of the ocean planet.",contributionSummary:"UI Programmer – Gameplay UI systems, HUD logic, menu flow and feedback",image:Yh,homeImage:Xh,time:"3 weeks",engine:"Unity",language:"C#",versionControl:"GitHub",externalLink:"https://futuregames.itch.io/plora",video:"https://www.youtube.com/embed/1oeAm2Fegz4",gallery:[sm,um,dm,cm,fm,pm],contributions:["UI Navigation & Interaction System","Dialogue System","Responsive and smooth UI interactions","Clear separation between UI logic and presentation","Player-friendly navigation across multiple UI categories","Dialogue systems designed for easy iteration and narrative expansion"],contributionsGif:vm,techOverview:"Built in Unity using C# for all UI logic and dialogue flow systems, with Unity UI (UGUI) used for layout and visual presentation. My work focused exclusively on UI systems and dialogue mechanics, with a strong emphasis on responsive interactions and clear separation of concerns.",deepDives:[{title:"UI Navigation & Interaction System",content:"I designed and implemented the entire UI flow for the game, focusing on making all menus and screens feel responsive, readable, and smooth to navigate. The goal was to ensure that the player could move seamlessly between different UI categories without friction, confusion, or visual stutter. A central UI Manager controls which screens are active, while individual UI panels handle their own visuals and input states.",images:[hm,mm,ym,gm],code:`// --- MainMenu.cs ---
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
}`}]},{id:"daggerbound",title:"Daggerbound",description:"Fast-paced rogue-like dungeon crawler.",contributionSummary:"Gameplay Programmer – Character movement systems and animation state integration",image:km,homeImage:jm,time:"4 weeks",engine:"Unity",language:"C#",versionControl:"Perforce",externalLink:"https://shahmuradov.itch.io/daggerbound",video:"https://www.youtube.com/embed/j9DEZIbw0ys",gallery:[wm,xm,Sm,Lm],contributions:["Modular architecture & Clear system ownership","Gameplay-driven animation logic","Scalable stat and progression systems","XP and leveling system implementation","Responsive player movement system","Animation system integration"],techOverview:`Built in Unity using C# for all core gameplay systems, with Unity’s Animator and Inspector used for designer-facing configuration and rapid iteration.

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
transform.Translate(movement * speed * Time.deltaTime);`},{title:"Animation System Integration (Animator Controller Setup)",content:"I set up the entire Animator Controller for players and enemies. This involved defining states, transitions, and parameters to ensure that every gameplay action—from attacking to taking damage—had clear, responsive visual feedback."},{title:"Combat System Prototyping (CombatManager – Early Prototype)",content:"I prototyped the early combat manager to test different initiation styles. I experimented with scene-based versus in-world combat triggers to help the team decide on the best direction for the game's flow. Although this system was later refined, the prototype was crucial for establishing our combat direction."},{title:"Camera Prototyping (Camera Controller)",content:"I created the initial camera controller to establish the game's top-down perspective. I iterated on angle and distance to find the sweet spot between visual clarity and atmosphere."}]},{id:"tower-defence",title:"Tower Defence Project",description:"A Resource Management RTS Tower Defence game where you build and defend against nightly monster attacks.",contributionSummary:"Gameplay Programmer – Grid PCG (Perlin noise), resource management, and systemic gameplay logic",image:$h,time:"In Progress",engine:"Unreal Engine 5.7",language:"C++",versionControl:"GitHub",contributions:["PCG Grid System with Perlin Noise","Grid-based Building System","Resource Management Mechanics","RTS Combat & Wave System"],techOverview:"Built in Unreal Engine 5.7 using C++. The project focuses on procedural generation, grid-based interaction, and RTS mechanics.",deepDives:[{title:"PCG Grid System",content:"I implemented a procedural grid system that uses Perlin noise to generate diverse terrain features, including water bodies and mountain ranges. This ensures that every map offers a unique strategic challenge.",code:"// Code coming soon!"},{title:"Building System",content:"I designed a robust grid-based building system that allows players to select from a list of structures (walls, towers, resource collectors) and place them on valid grid tiles. The system handles collision checking and resource costs.",code:"// Code coming soon!"},{title:"RTS & Resource Management",content:"The game combines Tower Defence with RTS elements. Players must manage resources during the day to build defenses, as they are attacked by waves of monsters every night. This cycle creates a compelling loop of expansion and defense.",code:"// Code coming soon!"}]},{id:"rogue-card",title:"Rogue Card Project",description:"A deck-building rogue-like with card-based combat.",contributionSummary:"Gameplay Programmer – PCG systems, data-driven cards, and AI behavior tree implementation",image:Kh,time:"In Progress",engine:"Unreal Engine 5.6",language:"C++ & Blueprint",versionControl:"GitHub",contributions:["Player Deck Component","Enemy Deck Component","AI System","PCG Dungeon Build","Phase Manager"],techOverview:"Built in Unreal Engine 5.6 using a hybrid C++ and Blueprint approach. I am responsible for all core systems, focusing on the card mechanics, AI logic, and procedural generation.",deepDives:[{title:"Player Deck Component",content:"I am developing a flexible deck component that handles card drawing, shuffling, and discarding. It supports dynamic deck modification during runtime.",code:"// Code coming soon!"},{title:"Enemy Deck Component",content:"Similar to the player deck, this component manages enemy actions. It is designed to be predictable yet challenging, with specific patterns for different enemy types.",code:"// Code coming soon!"},{title:"AI System",content:"The AI system evaluates the current board state to make intelligent decisions. It considers player health, card availability, and future turns.",code:"// Code coming soon!"},{title:"PCG Dungeon Build",content:"I am implementing a Procedural Content Generation system to create unique dungeon layouts for every run, ensuring high replayability.",code:"// Code coming soon!"},{title:"Phase Manager",content:"The Phase Manager controls the flow of combat, handling turn transitions, effect resolution, and win/loss conditions.",code:"// Code coming soon!"}]}],Nm=""+new URL("bg-day-BgQiHAP0.png",import.meta.url).href,Cm=""+new URL("bg-night-DjpAquw_.png",import.meta.url).href,Em=""+new URL("profile-pic-M--jRy_J.jpg",import.meta.url).href,Sd=""+new URL("Birkans_CV-BpHQjX9_.pdf",import.meta.url).href,bm=()=>{const i=Kl.filter(u=>u.time!=="In Progress"),d=Kl.filter(u=>u.time==="In Progress");return s.jsxs("div",{className:"flex flex-col","data-yw":"c3JjL3BhZ2VzL0hvbWUudHN4QDE4OjQ","data-yw-s":!0,children:[s.jsxs("section",{className:"relative min-h-[600px] flex items-center justify-center overflow-hidden py-20","data-yw":"c3JjL3BhZ2VzL0hvbWUudHN4QDIwOjY","data-yw-s":!0,children:[s.jsxs("div",{className:"absolute inset-0 z-0","data-yw":"c3JjL3BhZ2VzL0hvbWUudHN4QDIyOjg","data-yw-s":!0,children:[s.jsx("img",{src:Nm,alt:"Day Background",className:"w-full h-full object-cover dark:hidden","data-yw":"c3JjL3BhZ2VzL0hvbWUudHN4QDIzOjEw","data-yw-s":!0}),s.jsx("img",{src:Cm,alt:"Night Background",className:"w-full h-full object-cover hidden dark:block","data-yw":"c3JjL3BhZ2VzL0hvbWUudHN4QDI0OjEw","data-yw-s":!0}),s.jsx("div",{className:"absolute inset-0 bg-parchment/80 dark:bg-midnight-blue/80 backdrop-blur-[2px]","data-yw":"c3JjL3BhZ2VzL0hvbWUudHN4QDI1OjEw","data-yw-s":!0})]}),s.jsxs("div",{className:"relative z-10 container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-center gap-12","data-yw":"c3JjL3BhZ2VzL0hvbWUudHN4QDI5Ojg","data-yw-s":!0,children:[s.jsxs("div",{className:"md:w-1/2 text-center md:text-left","data-yw":"c3JjL3BhZ2VzL0hvbWUudHN4QDMwOjEw","data-yw-s":!0,children:[s.jsx("h1",{className:"text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-4 text-dark-brown dark:text-soft-white drop-shadow-lg uppercase tracking-tight","data-yw":"c3JjL3BhZ2VzL0hvbWUudHN4QDMxOjEy","data-yw-t":!0,"data-yw-s":!0,children:"Birkan Ates"}),s.jsx("h2",{className:"text-xl md:text-2xl font-bold mb-8 text-forest-green dark:text-moonlight-blue uppercase tracking-widest","data-yw":"c3JjL3BhZ2VzL0hvbWUudHN4QDM0OjEy","data-yw-t":!0,"data-yw-s":!0,children:"Gameplay Programmer"}),s.jsxs("div",{className:"text-base md:text-lg mb-10 font-medium opacity-90 max-w-xl space-y-4","data-yw":"c3JjL3BhZ2VzL0hvbWUudHN4QDM3OjEy","data-yw-s":!0,children:[s.jsx("p",{"data-yw":"c3JjL3BhZ2VzL0hvbWUudHN4QDM4OjE0","data-yw-s":!0,children:s.jsx("strong",{"data-yw":"c3JjL3BhZ2VzL0hvbWUudHN4QDM5OjE2","data-yw-t":!0,"data-yw-s":!0,children:"Gameplay Programmer specializing in Unreal Engine (C++)"})}),s.jsxs("p",{"data-yw":"c3JjL3BhZ2VzL0hvbWUudHN4QDQxOjE0","data-yw-s":!0,children:[s.jsx("span",{"data-yw":"c3JjL3BhZ2VzL0hvbWUudHN4QDQxOjE3","data-yw-t":!0,"data-yw-auto":!0,children:"I focus on "}),s.jsx("strong",{"data-yw":"c3JjL3BhZ2VzL0hvbWUudHN4QDQyOjI3","data-yw-t":!0,"data-yw-s":!0,children:"AI behaviors, procedural systems, and gameplay mechanics."})]}),s.jsx("p",{"data-yw":"c3JjL3BhZ2VzL0hvbWUudHN4QDQ0OjE0","data-yw-t":!0,"data-yw-s":!0,children:"Currently a second-year student at Futuregames, with hands-on experience building scalable gameplay systems in Unreal and C++."})]}),s.jsxs("div",{className:"flex flex-wrap justify-center md:justify-start gap-4","data-yw":"c3JjL3BhZ2VzL0hvbWUudHN4QDUwOjEy","data-yw-s":!0,children:[s.jsxs("button",{onClick:()=>document.getElementById("projects")?.scrollIntoView({behavior:"smooth"}),className:"px-8 py-3 bg-dark-brown dark:bg-soft-white text-parchment dark:text-midnight-blue font-bold uppercase rounded-sm hover:bg-muted-gold dark:hover:bg-desaturated-purple transition-colors flex items-center gap-2 shadow-lg cursor-pointer","data-yw":"c3JjL3BhZ2VzL0hvbWUudHN4QDUxOjE0","data-yw-s":!0,children:[s.jsx(bh,{size:20}),s.jsx("span",{"data-yw":"c3JjL3BhZ2VzL0hvbWUudHN4QDU1OjM2","data-yw-t":!0,"data-yw-auto":!0,children:" Projects"})]}),s.jsxs("a",{href:"https://github.com/DullySkull",target:"_blank",rel:"noopener noreferrer",className:"px-8 py-3 bg-transparent border-4 border-dark-brown dark:border-soft-white text-dark-brown dark:text-soft-white font-bold uppercase rounded-sm hover:bg-dark-brown hover:text-parchment dark:hover:bg-soft-white dark:hover:text-midnight-blue transition-colors flex items-center gap-2","data-yw":"c3JjL3BhZ2VzL0hvbWUudHN4QDU3OjE0","data-yw-s":!0,"data-yw-l":!0,children:[s.jsx(ai,{size:20}),s.jsx("span",{"data-yw":"c3JjL3BhZ2VzL0hvbWUudHN4QDU4OjM2","data-yw-t":!0,"data-yw-auto":!0,children:" GitHub"})]}),s.jsxs("a",{href:Sd,download:"Birkans_CV.pdf",className:"px-8 py-3 bg-forest-green dark:bg-desaturated-purple text-white font-bold uppercase rounded-sm hover:brightness-110 transition-colors flex items-center gap-2 shadow-lg","data-yw":"c3JjL3BhZ2VzL0hvbWUudHN4QDYwOjE0","data-yw-s":!0,children:[s.jsx(gd,{size:20}),s.jsx("span",{"data-yw":"c3JjL3BhZ2VzL0hvbWUudHN4QDYxOjM4","data-yw-t":!0,"data-yw-auto":!0,children:" Download CV"})]}),s.jsxs(ot,{to:"/contact",className:"px-8 py-3 bg-transparent border-4 border-forest-green dark:border-desaturated-purple text-forest-green dark:text-desaturated-purple font-bold uppercase rounded-sm hover:bg-forest-green hover:text-white dark:hover:bg-desaturated-purple dark:hover:text-white transition-colors flex items-center gap-2",children:[s.jsx(Ja,{size:20})," Contact"]})]})]}),s.jsx("div",{className:"md:w-1/3 flex justify-center","data-yw":"c3JjL3BhZ2VzL0hvbWUudHN4QDY5OjEw","data-yw-s":!0,children:s.jsx("div",{className:"relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden border-4 border-dark-brown dark:border-soft-white shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500","data-yw":"c3JjL3BhZ2VzL0hvbWUudHN4QDcwOjEy","data-yw-s":!0,children:s.jsx("img",{src:Em,alt:"Birkan Ates",className:"w-full h-full object-cover","data-yw":"c3JjL3BhZ2VzL0hvbWUudHN4QDcxOjE0","data-yw-s":!0})})})]})]}),s.jsx("section",{id:"projects",className:"py-20 bg-parchment dark:bg-midnight-blue","data-yw":"c3JjL3BhZ2VzL0hvbWUudHN4QDc4OjY","data-yw-s":!0,children:s.jsxs("div",{className:"container mx-auto px-4","data-yw":"c3JjL3BhZ2VzL0hvbWUudHN4QDc5Ojg","data-yw-s":!0,children:[s.jsx("h2",{className:"text-3xl md:text-4xl font-bold font-heading mb-12 text-center uppercase text-dark-brown dark:text-soft-white","data-yw":"c3JjL3BhZ2VzL0hvbWUudHN4QDgwOjEw","data-yw-t":!0,"data-yw-s":!0,children:"Featured Projects"}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 mb-16","data-yw":"c3JjL3BhZ2VzL0hvbWUudHN4QDg0OjEw","data-yw-s":!0,children:i.map(u=>s.jsx(xd,{title:u.title,description:u.description,contributionSummary:u.contributionSummary,image:u.homeImage||u.image,link:`/projects/${u.id}`,time:u.time,engine:u.engine,language:u.language,versionControl:u.versionControl},u.id))}),s.jsx("h3",{className:"text-2xl font-bold font-heading mb-8 text-center uppercase text-muted-gold dark:text-moonlight-blue","data-yw":"c3JjL3BhZ2VzL0hvbWUudHN4QDEwMjoxMA","data-yw-t":!0,"data-yw-s":!0,children:"In Development"}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto","data-yw":"c3JjL3BhZ2VzL0hvbWUudHN4QDEwNToxMA","data-yw-s":!0,children:d.map(u=>s.jsx(xd,{title:u.title,description:u.description,contributionSummary:u.contributionSummary,image:u.homeImage||u.image,link:`/projects/${u.id}`,time:u.time,engine:u.engine,language:u.language,versionControl:u.versionControl,imageFit:"contain"},u.id))}),s.jsx("div",{className:"mt-16 text-center","data-yw":"c3JjL3BhZ2VzL0hvbWUudHN4QDEyMzoxMA","data-yw-s":!0,children:s.jsxs("a",{href:Sd,download:"Birkans_CV.pdf",className:"px-10 py-4 bg-dark-brown dark:bg-soft-white text-parchment dark:text-midnight-blue font-bold uppercase rounded-sm hover:bg-muted-gold dark:hover:bg-desaturated-purple transition-colors inline-flex items-center gap-2 shadow-xl text-lg","data-yw":"c3JjL3BhZ2VzL0hvbWUudHN4QDEyNDoxMg","data-yw-s":!0,children:[s.jsx(gd,{size:24}),s.jsx("span",{"data-yw":"c3JjL3BhZ2VzL0hvbWUudHN4QDEyNTozNg","data-yw-t":!0,"data-yw-auto":!0,children:" Download Full CV (PDF)"})]})})]})})]})},_n=({name:i,icon:d,imageSrc:u})=>s.jsxs("div",{className:"flex flex-col items-center justify-center gap-3 p-4 group","data-yw":"c3JjL2NvbXBvbmVudHMvU2tpbGxJY29uLnRzeEAxMTo0","data-yw-s":!0,children:[s.jsx("div",{className:"w-20 h-20 flex items-center justify-center bg-parchment dark:bg-soft-white border-4 border-dark-brown dark:border-soft-white rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300 group-hover:border-muted-gold dark:group-hover:border-desaturated-purple","data-yw":"c3JjL2NvbXBvbmVudHMvU2tpbGxJY29uLnRzeEAxMjo2","data-yw-s":!0,children:u?s.jsx("img",{src:u,alt:i,className:"w-12 h-12 object-contain","data-yw":"c3JjL2NvbXBvbmVudHMvU2tpbGxJY29uLnRzeEAxNDoxMA","data-yw-s":!0}):s.jsx("div",{className:"text-dark-brown dark:text-midnight-blue","data-yw":"c3JjL2NvbXBvbmVudHMvU2tpbGxJY29uLnRzeEAxNjoxMA","data-yw-s":!0,children:d})}),s.jsx("span",{className:"font-bold uppercase text-sm tracking-wider","data-yw":"c3JjL2NvbXBvbmVudHMvU2tpbGxJY29uLnRzeEAyMTo2","data-yw-s":!0,children:i})]}),zm=""+new URL("profile-about-new-CcE6K52f.jpg",import.meta.url).href,Mm=""+new URL("unity-logo-xfTt5dqp.png",import.meta.url).href,Rm=""+new URL("unreal-logo-njTSbC11.png",import.meta.url).href,Am=""+new URL("cpp-logo-K58JSrZE.png",import.meta.url).href,Tm=""+new URL("csharp-logo-DEjv6XeT.png",import.meta.url).href,Pm=""+new URL("github-logo-Dr8lduzb.png",import.meta.url).href,Dm=""+new URL("perforce-logo-_XvfpNgX.png",import.meta.url).href,Vm=()=>s.jsxs("div",{className:"py-20 container mx-auto px-4","data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEAxNDo0","data-yw-s":!0,children:[s.jsxs("div",{className:"max-w-6xl mx-auto mb-16","data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEAxNjo2","data-yw-s":!0,children:[s.jsx("h1",{className:"text-4xl md:text-5xl font-bold font-heading mb-12 uppercase text-dark-brown dark:text-soft-white text-center","data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEAxNzo4","data-yw-t":!0,"data-yw-s":!0,children:"About Me"}),s.jsxs("div",{className:"flex flex-col md:flex-row gap-12 items-start","data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEAxOTo4","data-yw-s":!0,children:[s.jsxs("div",{className:"md:w-2/3 space-y-6 text-lg opacity-90 leading-relaxed","data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEAyMToxMA","data-yw-s":!0,children:[s.jsx("p",{className:"font-bold text-xl","data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEAyMjoxMg","data-yw-t":!0,"data-yw-s":!0,children:"Hi! I’m Birkan Ates, a second-year Game Programmer at Futuregames."}),s.jsxs("p",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEAyNDoxMg","data-yw-s":!0,children:[s.jsx("span",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEAyNDoxNQ","data-yw-t":!0,"data-yw-auto":!0,children:"I specialize in "}),s.jsx("strong",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEAyNTozMA","data-yw-t":!0,"data-yw-s":!0,children:"gameplay systems development"}),s.jsx("span",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEAyNTo3NQ","data-yw-t":!0,"data-yw-auto":!0,children:", with a strong focus on "}),s.jsx("strong",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEAyNToxMDA","data-yw-t":!0,"data-yw-s":!0,children:"AI behaviours"}),s.jsx("span",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEAyNToxMzA","data-yw-t":!0,"data-yw-auto":!0,children:", "}),s.jsx("strong",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEAyNToxMzI","data-yw-t":!0,"data-yw-s":!0,children:"procedural content generation"}),s.jsx("span",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEAyNToxNzg","data-yw-t":!0,"data-yw-auto":!0,children:", and "}),s.jsx("strong",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEAyNToxODQ","data-yw-t":!0,"data-yw-s":!0,children:"gameplay tools"}),s.jsx("span",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEAyNToyMTU","data-yw-t":!0,"data-yw-auto":!0,children:". I enjoy building systems that are "}),s.jsx("strong",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEAyNToyNTE","data-yw-t":!0,"data-yw-s":!0,children:"robust, modular, and scalable"}),s.jsx("span",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEAyNToyOTc","data-yw-t":!0,"data-yw-auto":!0,children:", supporting both gameplay features and designer workflows."})]}),s.jsxs("div",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEAyODoxMg","data-yw-s":!0,children:[s.jsx("h3",{className:"text-xl font-bold uppercase mb-2 text-forest-green dark:text-moonlight-blue","data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEAyOToxNA","data-yw-t":!0,"data-yw-s":!0,children:"What I work with"}),s.jsxs("p",{className:"mb-2","data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEAzMDoxNA","data-yw-s":!0,children:[s.jsx("span",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEAzMDozNA","data-yw-t":!0,"data-yw-auto":!0,children:"I primarily work in "}),s.jsx("strong",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEAzMTozNg","data-yw-t":!0,"data-yw-s":!0,children:"Unreal Engine using C++"}),s.jsx("span",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEAzMTo3Ng","data-yw-t":!0,"data-yw-auto":!0,children:", where I develop:"})]}),s.jsxs("ul",{className:"list-disc list-inside space-y-1 ml-2","data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEAzMzoxNA","data-yw-s":!0,children:[s.jsxs("li",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEAzNDoxNg","data-yw-s":!0,children:[s.jsx("strong",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEAzNDoyMA","data-yw-t":!0,"data-yw-s":!0,children:"AI behaviour systems"}),s.jsx("span",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEAzNDo1Nw","data-yw-t":!0,"data-yw-auto":!0,children:" (Behavior Trees, state machines, decision logic)"})]}),s.jsx("li",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEAzNToxNg","data-yw-s":!0,children:s.jsx("strong",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEAzNToyMA","data-yw-t":!0,"data-yw-s":!0,children:"Pathfinding and navigation solutions"})}),s.jsx("li",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEAzNjoxNg","data-yw-s":!0,children:s.jsx("strong",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEAzNjoyMA","data-yw-t":!0,"data-yw-s":!0,children:"Procedural generation tools and systems"})}),s.jsx("li",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEAzNzoxNg","data-yw-s":!0,children:s.jsx("strong",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEAzNzoyMA","data-yw-t":!0,"data-yw-s":!0,children:"Core gameplay mechanics and supporting tools"})})]}),s.jsxs("p",{className:"mt-2","data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEAzOToxNA","data-yw-s":!0,children:[s.jsx("span",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEAzOTozNA","data-yw-t":!0,"data-yw-auto":!0,children:"I enjoy working "}),s.jsx("strong",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEA0MDozMg","data-yw-t":!0,"data-yw-s":!0,children:"close to the engine layer"}),s.jsx("span",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEA0MDo3NA","data-yw-t":!0,"data-yw-auto":!0,children:", designing systems that are easy to extend, debug, and iterate on throughout development."})]})]}),s.jsxs("div",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEA0NDoxMg","data-yw-s":!0,children:[s.jsx("h3",{className:"text-xl font-bold uppercase mb-2 text-forest-green dark:text-moonlight-blue","data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEA0NToxNA","data-yw-t":!0,"data-yw-s":!0,children:"How I approach programming"}),s.jsxs("p",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEA0NjoxNA","data-yw-s":!0,children:[s.jsx("span",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEA0NjoxNw","data-yw-t":!0,"data-yw-auto":!0,children:"I approach programming as a "}),s.jsx("strong",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEA0Nzo0NA","data-yw-t":!0,"data-yw-s":!0,children:"problem-solving discipline"}),s.jsx("span",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEA0Nzo4Nw","data-yw-t":!0,"data-yw-auto":!0,children:". I enjoy breaking down complex gameplay challenges into clear, maintainable systems. Whether it’s "}),s.jsx("strong",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEA0NzoxODY","data-yw-t":!0,"data-yw-s":!0,children:"AI decision-making"}),s.jsx("span",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEA0NzoyMjE","data-yw-t":!0,"data-yw-auto":!0,children:", "}),s.jsx("strong",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEA0NzoyMjM","data-yw-t":!0,"data-yw-s":!0,children:"procedural environments"}),s.jsx("span",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEA0NzoyNjM","data-yw-t":!0,"data-yw-auto":!0,children:", or "}),s.jsx("strong",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEA0NzoyNjg","data-yw-t":!0,"data-yw-s":!0,children:"tooling"}),s.jsx("span",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEA0NzoyOTI","data-yw-t":!0,"data-yw-auto":!0,children:", my goal is to create solutions that "}),s.jsx("strong",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEA0NzozMzA","data-yw-t":!0,"data-yw-s":!0,children:"scale well"}),s.jsx("span",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEA0NzozNTc","data-yw-t":!0,"data-yw-auto":!0,children:" and remain readable over time."})]})]}),s.jsxs("div",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEA1MToxMg","data-yw-s":!0,children:[s.jsx("h3",{className:"text-xl font-bold uppercase mb-2 text-forest-green dark:text-moonlight-blue","data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEA1MjoxNA","data-yw-t":!0,"data-yw-s":!0,children:"Background & flexibility"}),s.jsxs("p",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEA1MzoxNA","data-yw-s":!0,children:[s.jsx("span",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEA1MzoxNw","data-yw-t":!0,"data-yw-auto":!0,children:"I’ve been coding in "}),s.jsx("strong",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEA1NDozNg","data-yw-t":!0,"data-yw-s":!0,children:"C# since 2018"}),s.jsx("span",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEA1NDo2Ng","data-yw-t":!0,"data-yw-auto":!0,children:", and later challenged myself by transitioning into "}),s.jsx("strong",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEA1NDoxMTg","data-yw-t":!0,"data-yw-s":!0,children:"Unreal Engine and C++"}),s.jsx("span",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEA1NDoxNTY","data-yw-t":!0,"data-yw-auto":!0,children:" at Futuregames. This shift gave me a strong understanding of "}),s.jsx("strong",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEA1NDoyMTg","data-yw-t":!0,"data-yw-s":!0,children:"Unreal’s architecture"}),s.jsx("span",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEA1NDoyNTY","data-yw-t":!0,"data-yw-auto":!0,children:" and modern gameplay programming practices."})]}),s.jsxs("p",{className:"mt-2","data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEA1NjoxNA","data-yw-s":!0,children:[s.jsx("span",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEA1NjozNA","data-yw-t":!0,"data-yw-auto":!0,children:"Alongside Unreal, I also have experience working in "}),s.jsx("strong",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEA1Nzo2OA","data-yw-t":!0,"data-yw-s":!0,children:"Unity (C#)"}),s.jsx("span",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEA1Nzo5NQ","data-yw-t":!0,"data-yw-auto":!0,children:" for rapid prototyping and smaller projects, giving me flexibility across engines and workflows."})]})]}),s.jsxs("div",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEA2MToxMg","data-yw-s":!0,children:[s.jsx("h3",{className:"text-xl font-bold uppercase mb-2 text-forest-green dark:text-moonlight-blue","data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEA2MjoxNA","data-yw-t":!0,"data-yw-s":!0,children:"Looking ahead"}),s.jsxs("p",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEA2MzoxNA","data-yw-s":!0,children:[s.jsx("span",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEA2MzoxNw","data-yw-t":!0,"data-yw-auto":!0,children:"I’m currently looking for opportunities as a "}),s.jsx("strong",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEA2NDo2MQ","data-yw-t":!0,"data-yw-s":!0,children:"junior or intern game programmer"}),s.jsx("span",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEA2NDoxMTA","data-yw-t":!0,"data-yw-auto":!0,children:", particularly in roles involving "}),s.jsx("strong",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEA2NDoxNDQ","data-yw-t":!0,"data-yw-s":!0,children:"AI systems"}),s.jsx("span",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEA2NDoxNzE","data-yw-t":!0,"data-yw-auto":!0,children:", "}),s.jsx("strong",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEA2NDoxNzM","data-yw-t":!0,"data-yw-s":!0,children:"gameplay systems"}),s.jsx("span",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEA2NDoyMDY","data-yw-t":!0,"data-yw-auto":!0,children:", or "}),s.jsx("strong",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEA2NDoyMTE","data-yw-t":!0,"data-yw-s":!0,children:"tools programming"}),s.jsx("span",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEA2NDoyNDU","data-yw-t":!0,"data-yw-auto":!0,children:", where I can contribute to meaningful systems and continue growing as a technical developer."})]})]})]}),s.jsx("div",{className:"md:w-1/3 flex justify-center md:justify-end","data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEA3MDoxMA","data-yw-s":!0,children:s.jsx("div",{className:"w-full max-w-sm rounded-lg border-4 border-dark-brown dark:border-soft-white overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-300","data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEA3MToxMg","data-yw-s":!0,children:s.jsx("img",{src:zm,alt:"Birkan Ates",className:"w-full h-full object-cover","data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEA3MjoxNA","data-yw-s":!0})})})]})]}),s.jsxs("div",{className:"mb-20","data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEA3OTo2","data-yw-s":!0,children:[s.jsx("h2",{className:"text-3xl font-bold font-heading mb-10 text-center uppercase text-forest-green dark:text-desaturated-purple","data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEA4MDo4","data-yw-t":!0,"data-yw-s":!0,children:"Skills"}),s.jsxs("div",{className:"flex flex-wrap justify-center gap-8 mb-6","data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEA4Mjo4","data-yw-s":!0,children:[s.jsx(_n,{name:"Unity",imageSrc:Mm}),s.jsx(_n,{name:"Unreal Engine",imageSrc:Rm}),s.jsx(_n,{name:"C++",imageSrc:Am}),s.jsx(_n,{name:"C#",imageSrc:Tm}),s.jsx(_n,{name:"GitHub",imageSrc:Pm}),s.jsx(_n,{name:"Perforce",imageSrc:Dm})]}),s.jsx("p",{className:"text-center text-sm font-bold uppercase opacity-70 tracking-wider","data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEA5MTo4","data-yw-t":!0,"data-yw-s":!0,children:"Primary tools I use in production and coursework."})]}),s.jsxs("div",{className:"bg-parchment/50 dark:bg-midnight-blue/50 border-4 border-dark-brown dark:border-soft-white p-8 md:p-12 rounded-sm max-w-5xl mx-auto","data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEA5Nzo2","data-yw-s":!0,children:[s.jsx("h2",{className:"text-3xl font-bold font-heading mb-10 text-center uppercase text-dark-brown dark:text-soft-white","data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEA5ODo4","data-yw-t":!0,"data-yw-s":!0,children:"What I Focus On"}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8","data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEAxMDA6OA","data-yw-s":!0,children:[s.jsxs("div",{className:"flex gap-4","data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEAxMDE6MTA","data-yw-s":!0,children:[s.jsx("div",{className:"p-3 bg-dark-brown dark:bg-soft-white text-parchment dark:text-midnight-blue h-fit rounded-sm","data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEAxMDI6MTI","data-yw-s":!0,children:s.jsx(jh,{size:24})}),s.jsxs("div",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEAxMDU6MTI","data-yw-s":!0,children:[s.jsx("h3",{className:"text-xl font-bold uppercase mb-2","data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEAxMDY6MTQ","data-yw-t":!0,"data-yw-s":!0,children:"Gameplay Systems"}),s.jsx("p",{className:"opacity-80","data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEAxMDc6MTQ","data-yw-t":!0,"data-yw-s":!0,children:"Designing and implementing core gameplay loops, character mechanics, and interaction systems that feel responsive and satisfying."})]})]}),s.jsxs("div",{className:"flex gap-4","data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEAxMTE6MTA","data-yw-s":!0,children:[s.jsx("div",{className:"p-3 bg-dark-brown dark:bg-soft-white text-parchment dark:text-midnight-blue h-fit rounded-sm","data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEAxMTI6MTI","data-yw-s":!0,children:s.jsx(ih,{size:24})}),s.jsxs("div",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEAxMTU6MTI","data-yw-s":!0,children:[s.jsx("h3",{className:"text-xl font-bold uppercase mb-2","data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEAxMTY6MTQ","data-yw-t":!0,"data-yw-s":!0,children:"AI Systems"}),s.jsx("p",{className:"opacity-80","data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEAxMTc6MTQ","data-yw-t":!0,"data-yw-s":!0,children:"Creating intelligent behaviors using Behavior Trees, GOAP, and State Machines to bring NPCs and enemies to life."})]})]}),s.jsxs("div",{className:"flex gap-4","data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEAxMjE6MTA","data-yw-s":!0,children:[s.jsx("div",{className:"p-3 bg-dark-brown dark:bg-soft-white text-parchment dark:text-midnight-blue h-fit rounded-sm","data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEAxMjI6MTI","data-yw-s":!0,children:s.jsx(vh,{size:24})}),s.jsxs("div",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEAxMjU6MTI","data-yw-s":!0,children:[s.jsx("h3",{className:"text-xl font-bold uppercase mb-2","data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEAxMjY6MTQ","data-yw-t":!0,"data-yw-s":!0,children:"Procedural Content Generation"}),s.jsx("p",{className:"opacity-80","data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEAxMjc6MTQ","data-yw-t":!0,"data-yw-s":!0,children:"Developing algorithms for generating levels, items, and events to ensure replayability and variety."})]})]}),s.jsxs("div",{className:"flex gap-4","data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEAxMzE6MTA","data-yw-s":!0,children:[s.jsx("div",{className:"p-3 bg-dark-brown dark:bg-soft-white text-parchment dark:text-midnight-blue h-fit rounded-sm","data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEAxMzI6MTI","data-yw-s":!0,children:s.jsx(Vh,{size:24})}),s.jsxs("div",{"data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEAxMzU6MTI","data-yw-s":!0,children:[s.jsx("h3",{className:"text-xl font-bold uppercase mb-2","data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEAxMzY6MTQ","data-yw-t":!0,"data-yw-s":!0,children:"Tools Programming"}),s.jsx("p",{className:"opacity-80","data-yw":"c3JjL3BhZ2VzL0Fib3V0LnRzeEAxMzc6MTQ","data-yw-t":!0,"data-yw-s":!0,children:"Building custom editors and workflow tools to accelerate development and empower content creators."})]})]})]})]})]}),Fm=()=>s.jsxs("div",{className:"container mx-auto px-4 py-20 min-h-[80vh] flex flex-col items-center justify-center","data-yw":"c3JjL3BhZ2VzL0NvbnRhY3QudHN4QDY6NA","data-yw-s":!0,children:[s.jsx("h1",{className:"text-4xl md:text-5xl font-bold font-heading mb-12 uppercase text-dark-brown dark:text-soft-white text-center","data-yw":"c3JjL3BhZ2VzL0NvbnRhY3QudHN4QDc6Ng","data-yw-t":!0,"data-yw-s":!0,children:"Get In Touch"}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full","data-yw":"c3JjL3BhZ2VzL0NvbnRhY3QudHN4QDExOjY","data-yw-s":!0,children:[s.jsxs("div",{className:"bg-parchment dark:bg-midnight-blue border-4 border-dark-brown dark:border-soft-white p-8 rounded-sm shadow-lg flex flex-col justify-center space-y-8","data-yw":"c3JjL3BhZ2VzL0NvbnRhY3QudHN4QDEzOjg","data-yw-s":!0,children:[s.jsx("p",{className:"text-lg opacity-90 text-center md:text-left","data-yw":"c3JjL3BhZ2VzL0NvbnRhY3QudHN4QDE0OjEw","data-yw-t":!0,"data-yw-s":!0,children:"I'm currently open to new opportunities in gameplay programming and game development. Whether you have a question or just want to say hi, I'll try my best to get back to you!"}),s.jsxs("div",{className:"space-y-6","data-yw":"c3JjL3BhZ2VzL0NvbnRhY3QudHN4QDE5OjEw","data-yw-s":!0,children:[s.jsxs("a",{href:"mailto:Billy.ates@hotmail.com",className:"flex items-center gap-4 text-xl font-bold hover:text-muted-gold dark:hover:text-desaturated-purple transition-colors group","data-yw":"c3JjL3BhZ2VzL0NvbnRhY3QudHN4QDIwOjEy","data-yw-s":!0,"data-yw-l":!0,children:[s.jsx("div",{className:"p-3 bg-dark-brown dark:bg-soft-white text-parchment dark:text-midnight-blue rounded-full group-hover:scale-110 transition-transform","data-yw":"c3JjL3BhZ2VzL0NvbnRhY3QudHN4QDIxOjE0","data-yw-s":!0,children:s.jsx(Ja,{size:24})}),s.jsx("span",{"data-yw":"c3JjL3BhZ2VzL0NvbnRhY3QudHN4QDI0OjE0","data-yw-t":!0,"data-yw-s":!0,children:"Billy.ates@hotmail.com"})]}),s.jsxs("a",{href:"https://www.linkedin.com/in/birkan-ates-b5a40b2ab/",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-4 text-xl font-bold hover:text-muted-gold dark:hover:text-desaturated-purple transition-colors group","data-yw":"c3JjL3BhZ2VzL0NvbnRhY3QudHN4QDI3OjEy","data-yw-s":!0,"data-yw-l":!0,children:[s.jsx("div",{className:"p-3 bg-dark-brown dark:bg-soft-white text-parchment dark:text-midnight-blue rounded-full group-hover:scale-110 transition-transform","data-yw":"c3JjL3BhZ2VzL0NvbnRhY3QudHN4QDI4OjE0","data-yw-s":!0,children:s.jsx(Id,{size:24})}),s.jsx("span",{"data-yw":"c3JjL3BhZ2VzL0NvbnRhY3QudHN4QDMxOjE0","data-yw-t":!0,"data-yw-s":!0,children:"LinkedIn Profile"})]}),s.jsxs("a",{href:"https://github.com/DullySkull",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-4 text-xl font-bold hover:text-muted-gold dark:hover:text-desaturated-purple transition-colors group","data-yw":"c3JjL3BhZ2VzL0NvbnRhY3QudHN4QDM0OjEy","data-yw-s":!0,"data-yw-l":!0,children:[s.jsx("div",{className:"p-3 bg-dark-brown dark:bg-soft-white text-parchment dark:text-midnight-blue rounded-full group-hover:scale-110 transition-transform","data-yw":"c3JjL3BhZ2VzL0NvbnRhY3QudHN4QDM1OjE0","data-yw-s":!0,children:s.jsx(ai,{size:24})}),s.jsx("span",{"data-yw":"c3JjL3BhZ2VzL0NvbnRhY3QudHN4QDM4OjE0","data-yw-t":!0,"data-yw-s":!0,children:"GitHub Profile"})]}),s.jsxs("a",{href:"https://itch.io/profile/dullyskull",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-4 text-xl font-bold hover:text-muted-gold dark:hover:text-desaturated-purple transition-colors group","data-yw":"c3JjL3BhZ2VzL0NvbnRhY3QudHN4QDQxOjEy","data-yw-s":!0,"data-yw-l":!0,children:[s.jsx("div",{className:"p-3 bg-dark-brown dark:bg-soft-white text-parchment dark:text-midnight-blue rounded-full group-hover:scale-110 transition-transform","data-yw":"c3JjL3BhZ2VzL0NvbnRhY3QudHN4QDQyOjE0","data-yw-s":!0,children:s.jsx(Qa,{size:24})}),s.jsx("span",{"data-yw":"c3JjL3BhZ2VzL0NvbnRhY3QudHN4QDQ1OjE0","data-yw-t":!0,"data-yw-s":!0,children:"Itch.io Profile"})]}),s.jsxs("a",{href:"tel:+46761938665",className:"flex items-center gap-4 text-xl font-bold hover:text-muted-gold dark:hover:text-desaturated-purple transition-colors group","data-yw":"c3JjL3BhZ2VzL0NvbnRhY3QudHN4QDQ4OjEy","data-yw-s":!0,"data-yw-l":!0,children:[s.jsx("div",{className:"p-3 bg-dark-brown dark:bg-soft-white text-parchment dark:text-midnight-blue rounded-full group-hover:scale-110 transition-transform","data-yw":"c3JjL3BhZ2VzL0NvbnRhY3QudHN4QDQ5OjE0","data-yw-s":!0,children:s.jsx(Ih,{size:24})}),s.jsx("span",{"data-yw":"c3JjL3BhZ2VzL0NvbnRhY3QudHN4QDUyOjE0","data-yw-t":!0,"data-yw-s":!0,children:"+46 76 193 86 65"})]})]})]}),s.jsx("div",{className:"bg-dark-brown dark:bg-soft-white p-1 rounded-sm shadow-lg","data-yw":"c3JjL3BhZ2VzL0NvbnRhY3QudHN4QDU4Ojg","data-yw-s":!0,children:s.jsxs("div",{className:"bg-parchment dark:bg-midnight-blue h-full w-full border-2 border-dashed border-dark-brown/30 dark:border-soft-white/30 p-8 flex flex-col items-center justify-center text-center","data-yw":"c3JjL3BhZ2VzL0NvbnRhY3QudHN4QDU5OjEw","data-yw-s":!0,children:[s.jsx(Ja,{size:64,className:"text-muted-gold dark:text-desaturated-purple mb-6 opacity-50"}),s.jsx("h3",{className:"text-2xl font-bold font-heading uppercase mb-2","data-yw":"c3JjL3BhZ2VzL0NvbnRhY3QudHN4QDYxOjEy","data-yw-t":!0,"data-yw-s":!0,children:"Send a Message"}),s.jsx("p",{className:"opacity-70","data-yw":"c3JjL3BhZ2VzL0NvbnRhY3QudHN4QDYyOjEy","data-yw-t":!0,"data-yw-s":!0,children:"(Contact form integration coming soon)"})]})})]})]}),Im=({dive:i})=>{const[d,u]=R.useState(!1),[p,g]=R.useState(0),x=()=>{i.images&&g(k=>(k+1)%i.images.length)},S=()=>{i.images&&g(k=>(k-1+i.images.length)%i.images.length)};return s.jsxs("section",{className:"bg-white/50 dark:bg-black/20 p-6 rounded-sm border-l-4 border-forest-green dark:border-moonlight-blue mb-8","data-yw":"c3JjL3BhZ2VzL1Byb2plY3REZXRhaWwudHN4QDIzOjQ","data-yw-s":!0,children:[s.jsx("h3",{className:"text-xl font-bold mb-3 uppercase text-forest-green dark:text-moonlight-blue","data-yw":"c3JjL3BhZ2VzL1Byb2plY3REZXRhaWwudHN4QDI0OjY","data-yw-s":!0,children:i.title}),s.jsx("p",{className:"mb-4 opacity-90 whitespace-pre-line","data-yw":"c3JjL3BhZ2VzL1Byb2plY3REZXRhaWwudHN4QDI1OjY","data-yw-s":!0,children:i.content}),i.images&&i.images.length>0&&s.jsx("div",{className:"mb-6 relative group","data-yw":"c3JjL3BhZ2VzL1Byb2plY3REZXRhaWwudHN4QDI4Ojg","data-yw-s":!0,children:s.jsxs("div",{className:"relative aspect-video bg-black/50 rounded-sm overflow-hidden border-2 border-dark-brown/20 dark:border-soft-white/20","data-yw":"c3JjL3BhZ2VzL1Byb2plY3REZXRhaWwudHN4QDI5OjEw","data-yw-s":!0,children:[s.jsx("img",{src:i.images[p],alt:`${i.title} screenshot ${p+1}`,className:"w-full h-full object-contain","data-yw":"c3JjL3BhZ2VzL1Byb2plY3REZXRhaWwudHN4QDMwOjEy","data-yw-s":!0}),i.images.length>1&&s.jsxs(s.Fragment,{children:[s.jsx("button",{onClick:S,className:"absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-forest-green transition-colors opacity-0 group-hover:opacity-100","aria-label":"Previous image","data-yw":"c3JjL3BhZ2VzL1Byb2plY3REZXRhaWwudHN4QDM4OjE2","data-yw-s":!0,children:s.jsx(dh,{size:20})}),s.jsx("button",{onClick:x,className:"absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-forest-green transition-colors opacity-0 group-hover:opacity-100","aria-label":"Next image","data-yw":"c3JjL3BhZ2VzL1Byb2plY3REZXRhaWwudHN4QDQ1OjE2","data-yw-s":!0,children:s.jsx(fh,{size:20})}),s.jsx("div",{className:"absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1","data-yw":"c3JjL3BhZ2VzL1Byb2plY3REZXRhaWwudHN4QDUyOjE2","data-yw-s":!0,children:i.images.map((k,L)=>s.jsx("div",{className:`w-2 h-2 rounded-full transition-colors ${L===p?"bg-white":"bg-white/50"}`,"data-yw":"c3JjL3BhZ2VzL1Byb2plY3REZXRhaWwudHN4QDU0OjIw","data-yw-s":!0},L))})]})]})}),i.code&&s.jsxs("div",{className:"mt-4","data-yw":"c3JjL3BhZ2VzL1Byb2plY3REZXRhaWwudHN4QDY3Ojg","data-yw-s":!0,children:[s.jsxs("button",{onClick:()=>u(!d),className:"flex items-center gap-2 text-sm font-bold uppercase text-dark-brown dark:text-soft-white hover:text-muted-gold dark:hover:text-desaturated-purple transition-colors","data-yw":"c3JjL3BhZ2VzL1Byb2plY3REZXRhaWwudHN4QDY4OjEw","data-yw-s":!0,children:[d?s.jsx(hh,{size:16}):s.jsx(Pd,{size:16}),d?"Hide Code":"View Code"]}),d&&s.jsx("pre",{className:"mt-4 bg-dark-brown text-parchment p-4 rounded-sm overflow-x-auto text-sm font-mono shadow-inner animate-in fade-in slide-in-from-top-2 duration-300","data-yw":"c3JjL3BhZ2VzL1Byb2plY3REZXRhaWwudHN4QDc3OjEy","data-yw-s":!0,children:s.jsx("code",{"data-yw":"c3JjL3BhZ2VzL1Byb2plY3REZXRhaWwudHN4QDc4OjE0","data-yw-s":!0,children:i.code})})]})]})},Bm=()=>{const{id:i}=kp(),d=Kl.find(u=>u.id===i);return d?s.jsxs("div",{className:"min-h-screen pb-20","data-yw":"c3JjL3BhZ2VzL1Byb2plY3REZXRhaWwudHN4QDk2OjQ","data-yw-s":!0,children:[s.jsxs("div",{className:"relative h-[50vh] min-h-[400px]","data-yw":"c3JjL3BhZ2VzL1Byb2plY3REZXRhaWwudHN4QDk4OjY","data-yw-s":!0,children:[s.jsx("img",{src:d.image,alt:d.title,className:`w-full h-full object-cover ${d.id==="whisper-of-seasons"?"object-bottom":"object-center"}`,"data-yw":"c3JjL3BhZ2VzL1Byb2plY3REZXRhaWwudHN4QDk5Ojg","data-yw-s":!0}),s.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-parchment dark:from-midnight-blue via-transparent to-black/30","data-yw":"c3JjL3BhZ2VzL1Byb2plY3REZXRhaWwudHN4QDEwNDo4","data-yw-s":!0}),s.jsxs("div",{className:"absolute bottom-0 left-0 w-full p-8 container mx-auto","data-yw":"c3JjL3BhZ2VzL1Byb2plY3REZXRhaWwudHN4QDEwNjo4","data-yw-s":!0,children:[s.jsxs(ot,{to:"/",className:"inline-flex items-center gap-2 text-white mb-4 hover:text-muted-gold transition-colors font-bold uppercase text-sm bg-black/50 px-3 py-1 rounded-sm backdrop-blur-sm",children:[s.jsx(rh,{size:16})," Back to Home"]}),d.externalLink&&s.jsxs("a",{href:d.externalLink,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 text-white mb-4 ml-4 hover:text-muted-gold transition-colors font-bold uppercase text-sm bg-forest-green/80 px-3 py-1 rounded-sm backdrop-blur-sm","data-yw":"c3JjL3BhZ2VzL1Byb2plY3REZXRhaWwudHN4QDExMToxMg","data-yw-s":!0,children:[s.jsx(Sh,{size:16}),s.jsx("span",{"data-yw":"c3JjL3BhZ2VzL1Byb2plY3REZXRhaWwudHN4QDExMjo0MA","data-yw-t":!0,"data-yw-auto":!0,children:" Play on Itch.io"})]}),s.jsx("h1",{className:"text-4xl md:text-6xl font-bold font-heading text-white drop-shadow-lg uppercase mb-2","data-yw":"c3JjL3BhZ2VzL1Byb2plY3REZXRhaWwudHN4QDExNToxMA","data-yw-s":!0,children:d.title}),s.jsx("p",{className:"text-lg text-white/90 font-medium max-w-2xl drop-shadow-md","data-yw":"c3JjL3BhZ2VzL1Byb2plY3REZXRhaWwudHN4QDExNjoxMA","data-yw-s":!0,children:d.description})]})]}),s.jsxs("div",{className:"container mx-auto px-4 mt-12","data-yw":"c3JjL3BhZ2VzL1Byb2plY3REZXRhaWwudHN4QDExOTo2","data-yw-s":!0,children:[s.jsxs("div",{className:"flex flex-wrap gap-6 mb-12 p-6 bg-parchment dark:bg-midnight-blue border-4 border-dark-brown dark:border-soft-white rounded-sm shadow-md","data-yw":"c3JjL3BhZ2VzL1Byb2plY3REZXRhaWwudHN4QDEyMTo4","data-yw-s":!0,children:[s.jsxs("div",{className:"flex items-center gap-2 font-bold uppercase text-sm","data-yw":"c3JjL3BhZ2VzL1Byb2plY3REZXRhaWwudHN4QDEyMjoxMA","data-yw-s":!0,children:[s.jsx(Dd,{className:"text-muted-gold dark:text-desaturated-purple"}),s.jsx("span",{"data-yw":"c3JjL3BhZ2VzL1Byb2plY3REZXRhaWwudHN4QDEyNDoxMg","data-yw-s":!0,children:d.time})]}),s.jsxs("div",{className:"flex items-center gap-2 font-bold uppercase text-sm","data-yw":"c3JjL3BhZ2VzL1Byb2plY3REZXRhaWwudHN4QDEyNjoxMA","data-yw-s":!0,children:[s.jsx(Qa,{className:"text-muted-gold dark:text-desaturated-purple"}),s.jsx("span",{"data-yw":"c3JjL3BhZ2VzL1Byb2plY3REZXRhaWwudHN4QDEyODoxMg","data-yw-s":!0,children:d.engine})]}),s.jsxs("div",{className:"flex items-center gap-2 font-bold uppercase text-sm","data-yw":"c3JjL3BhZ2VzL1Byb2plY3REZXRhaWwudHN4QDEzMDoxMA","data-yw-s":!0,children:[s.jsx(Vd,{className:"text-muted-gold dark:text-desaturated-purple"}),s.jsx("span",{"data-yw":"c3JjL3BhZ2VzL1Byb2plY3REZXRhaWwudHN4QDEzMjoxMg","data-yw-s":!0,children:d.language})]}),s.jsxs("div",{className:"flex items-center gap-2 font-bold uppercase text-sm","data-yw":"c3JjL3BhZ2VzL1Byb2plY3REZXRhaWwudHN4QDEzNDoxMA","data-yw-s":!0,children:[s.jsx(Fd,{className:"text-muted-gold dark:text-desaturated-purple"}),s.jsx("span",{"data-yw":"c3JjL3BhZ2VzL1Byb2plY3REZXRhaWwudHN4QDEzNjoxMg","data-yw-s":!0,children:d.versionControl})]})]}),s.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-12","data-yw":"c3JjL3BhZ2VzL1Byb2plY3REZXRhaWwudHN4QDE0MDo4","data-yw-s":!0,children:[s.jsxs("div",{className:"lg:col-span-2 space-y-12","data-yw":"c3JjL3BhZ2VzL1Byb2plY3REZXRhaWwudHN4QDE0MjoxMA","data-yw-s":!0,children:[d.gallery&&d.gallery.length>0&&s.jsxs("section",{"data-yw":"c3JjL3BhZ2VzL1Byb2plY3REZXRhaWwudHN4QDE0NjoxNA","data-yw-s":!0,children:[s.jsx("h2",{className:"text-2xl font-bold font-heading mb-6 uppercase text-dark-brown dark:text-soft-white border-b-4 border-muted-gold dark:border-desaturated-purple pb-2 inline-block","data-yw":"c3JjL3BhZ2VzL1Byb2plY3REZXRhaWwudHN4QDE0NzoxNg","data-yw-t":!0,"data-yw-s":!0,children:"Gallery"}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4","data-yw":"c3JjL3BhZ2VzL1Byb2plY3REZXRhaWwudHN4QDE1MDoxNg","data-yw-s":!0,children:d.gallery.map((u,p)=>s.jsx("div",{className:"rounded-sm overflow-hidden border-2 border-dark-brown dark:border-soft-white shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer","data-yw":"c3JjL3BhZ2VzL1Byb2plY3REZXRhaWwudHN4QDE1MjoyMA","data-yw-s":!0,children:s.jsx("img",{src:u,alt:`${d.title} screenshot ${p+1}`,className:"w-full h-32 object-cover","data-yw":"c3JjL3BhZ2VzL1Byb2plY3REZXRhaWwudHN4QDE1MzoyMg","data-yw-s":!0})},p))})]}),d.video&&s.jsxs("section",{"data-yw":"c3JjL3BhZ2VzL1Byb2plY3REZXRhaWwudHN4QDE2MjoxNA","data-yw-s":!0,children:[s.jsx("h2",{className:"text-2xl font-bold font-heading mb-6 uppercase text-dark-brown dark:text-soft-white border-b-4 border-muted-gold dark:border-desaturated-purple pb-2 inline-block","data-yw":"c3JjL3BhZ2VzL1Byb2plY3REZXRhaWwudHN4QDE2MzoxNg","data-yw-t":!0,"data-yw-s":!0,children:"Gameplay Video"}),s.jsx("div",{className:"aspect-video w-full rounded-sm overflow-hidden border-4 border-dark-brown dark:border-soft-white shadow-lg","data-yw":"c3JjL3BhZ2VzL1Byb2plY3REZXRhaWwudHN4QDE2NjoxNg","data-yw-s":!0,children:s.jsx("iframe",{src:d.video,title:`${d.title} Gameplay`,className:"w-full h-full",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,"data-yw":"c3JjL3BhZ2VzL1Byb2plY3REZXRhaWwudHN4QDE2NzoxOA","data-yw-s":!0})})]}),s.jsxs("section",{"data-yw":"c3JjL3BhZ2VzL1Byb2plY3REZXRhaWwudHN4QDE3OToxMg","data-yw-s":!0,children:[s.jsx("h2",{className:"text-2xl font-bold font-heading mb-4 uppercase text-dark-brown dark:text-soft-white border-b-4 border-muted-gold dark:border-desaturated-purple pb-2 inline-block","data-yw":"c3JjL3BhZ2VzL1Byb2plY3REZXRhaWwudHN4QDE4MDoxNA","data-yw-t":!0,"data-yw-s":!0,children:"Code Overview"}),s.jsx("p",{className:"text-lg opacity-90 leading-relaxed","data-yw":"c3JjL3BhZ2VzL1Byb2plY3REZXRhaWwudHN4QDE4MToxNA","data-yw-s":!0,children:d.techOverview})]}),d.deepDives.map((u,p)=>s.jsx(Im,{dive:u},p))]}),s.jsx("div",{className:"lg:col-span-1","data-yw":"c3JjL3BhZ2VzL1Byb2plY3REZXRhaWwudHN4QDE5MzoxMA","data-yw-s":!0,children:s.jsxs("div",{className:"bg-parchment dark:bg-midnight-blue border-4 border-dark-brown dark:border-soft-white p-6 rounded-sm sticky top-24","data-yw":"c3JjL3BhZ2VzL1Byb2plY3REZXRhaWwudHN4QDE5NDoxMg","data-yw-s":!0,children:[s.jsx("h3",{className:"text-xl font-bold font-heading mb-6 uppercase text-dark-brown dark:text-soft-white border-b-2 border-dark-brown/20 dark:border-soft-white/20 pb-2","data-yw":"c3JjL3BhZ2VzL1Byb2plY3REZXRhaWwudHN4QDE5NToxNA","data-yw-t":!0,"data-yw-s":!0,children:"Key Contributions"}),s.jsx("ul",{className:"space-y-4","data-yw":"c3JjL3BhZ2VzL1Byb2plY3REZXRhaWwudHN4QDE5ODoxNA","data-yw-s":!0,children:d.contributions.map((u,p)=>s.jsxs("li",{className:"flex items-start gap-3","data-yw":"c3JjL3BhZ2VzL1Byb2plY3REZXRhaWwudHN4QDIwMDoxOA","data-yw-s":!0,children:[s.jsx("div",{className:"mt-1 text-forest-green dark:text-desaturated-purple","data-yw":"c3JjL3BhZ2VzL1Byb2plY3REZXRhaWwudHN4QDIwMToyMA","data-yw-s":!0,children:s.jsx("div",{className:"w-2 h-2 bg-current rounded-full","data-yw":"c3JjL3BhZ2VzL1Byb2plY3REZXRhaWwudHN4QDIwMjoyMg","data-yw-s":!0})}),s.jsx("span",{className:"text-sm font-medium opacity-90","data-yw":"c3JjL3BhZ2VzL1Byb2plY3REZXRhaWwudHN4QDIwNDoyMA","data-yw-s":!0,children:u})]},p))}),d.contributionsGif&&s.jsx("div",{className:"mt-6 rounded-sm overflow-hidden border-2 border-dark-brown dark:border-soft-white shadow-md","data-yw":"c3JjL3BhZ2VzL1Byb2plY3REZXRhaWwudHN4QDIxMDoxNg","data-yw-s":!0,children:s.jsx("img",{src:d.contributionsGif,alt:`${d.title} Contributions Showcase`,className:"w-full h-auto object-cover","data-yw":"c3JjL3BhZ2VzL1Byb2plY3REZXRhaWwudHN4QDIxMToxOA","data-yw-s":!0})})]})})]})]})]}):s.jsx(Ip,{to:"/",replace:!0})};function Om(){return s.jsxs(Qp,{children:[s.jsx(Gh,{}),s.jsx(Hh,{children:s.jsxs(Op,{children:[s.jsx(Mr,{path:"/",element:s.jsx(bm,{})}),s.jsx(Mr,{path:"/about",element:s.jsx(Vm,{})}),s.jsx(Mr,{path:"/contact",element:s.jsx(Fm,{})}),s.jsx(Mr,{path:"/projects/:id",element:s.jsx(Bm,{})})]})})]})}console.log("Application starting...");try{const i=document.getElementById("root");if(!i)throw new Error("Root element not found");Qf.createRoot(i).render(s.jsx(R.StrictMode,{children:s.jsx(Om,{})})),console.log("Application mounted successfully")}catch(i){console.error("Application failed to mount:",i)}
//# sourceMappingURL=index-W7hoJt01.js.map
