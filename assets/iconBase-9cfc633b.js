import{R as i,i as b,k as O,l as x,m as c}from"./index-09d378ac.js";function y(e=i){const t=e===i?b:O(e);return function(){const{store:n}=t();return n}}const _=y();function P(e=i){const t=e===i?_:y(e);return function(){return t().dispatch}}const I=P();var h={exports:{}},R="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",C=R,S=C;function g(){}function d(){}d.resetWarningCache=g;var E=function(){function e(n,o,l,p,u,s){if(s!==S){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}e.isRequired=e;function t(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:d,resetWarningCache:g};return r.PropTypes=r,r};h.exports=E();var w=h.exports;const D=x(w);var v={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},m=c.createContext&&c.createContext(v),a=globalThis&&globalThis.__assign||function(){return a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a.apply(this,arguments)},k=globalThis&&globalThis.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};function T(e){return e&&e.map(function(t,r){return c.createElement(t.tag,a({key:r},t.attr),T(t.child))})}function z(e){return function(t){return c.createElement(N,a({attr:a({},e.attr)},t),T(e.child))}}function N(e){var t=function(r){var n=e.attr,o=e.size,l=e.title,p=k(e,["attr","size","title"]),u=o||r.size||"1em",s;return r.className&&(s=r.className),e.className&&(s=(s?s+" ":"")+e.className),c.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,p,{className:s,style:a(a({color:e.color||r.color},r.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),l&&c.createElement("title",null,l),e.children)};return m!==void 0?c.createElement(m.Consumer,null,function(r){return t(r)}):t(v)}export{z as G,D as P,I as u};
