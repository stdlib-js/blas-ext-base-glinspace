"use strict";var q=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var b=q(function(E,g){
function P(a,r,c,f,e,v,l){var i,s,u,n,o;if(i=e.data,s=e.accessors[1],u=l,a===1)return f?s(i,u,c):s(i,u,r),e;for(s(i,u,r),u+=v,f&&(a-=1),n=(c-r)/a,o=1;o<a;o++)s(i,u,r+n*o),u+=v;return f&&s(i,u,c),e}g.exports=P
});var y=q(function(F,j){
var R=require('@stdlib/array-base-arraylike2object/dist'),h=b();function t(a,r,c,f,e,v,l){var i,s,u,n;if(a<=0)return e;if(u=R(e),u.accessorProtocol)return h(a,r,c,f,u,v,l),e;if(i=l,a===1)return f?e[i]=c:e[i]=r,e;for(e[i]=r,i+=v,f&&(a-=1),s=(c-r)/a,n=1;n<a;n++)e[i]=r+s*n,i+=v;return f&&(e[i]=c),e}j.exports=t
});var m=q(function(G,k){
var w=require('@stdlib/strided-base-stride2offset/dist'),z=y();function A(a,r,c,f,e,v){return z(a,r,c,f,e,v,w(a,v))}k.exports=A
});var B=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=m(),C=y();B(O,"ndarray",C);module.exports=O;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
