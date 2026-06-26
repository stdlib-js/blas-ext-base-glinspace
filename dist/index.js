"use strict";var q=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var b=q(function(E,g){
function P(a,r,u,f,e,v,l){var i,s,c,n,o;if(i=e.data,s=e.accessors[1],c=l,a===1)return f?s(i,c,u):s(i,c,r),e;for(s(i,c,r),c+=v,f&&(a-=1),n=(u-r)/a,o=1;o<a;o++)s(i,c,r+n*o),c+=v;return f&&s(i,c,u),e}g.exports=P
});var y=q(function(F,j){
var R=require('@stdlib/array-base-arraylike2object/dist'),h=b();function t(a,r,u,f,e,v,l){var i,s,c,n;if(a<=0)return e;if(c=R(e),c.accessorProtocol)return h(a,r,u,f,c,v,l),e;if(i=l,a===1)return f?e[i]=u:e[i]=r,e;for(e[i]=r,i+=v,f&&(a-=1),s=(u-r)/a,n=1;n<a;n++)e[i]=r+s*n,i+=v;return f&&(e[i]=u),e}j.exports=t
});var m=q(function(G,k){
var w=require('@stdlib/strided-base-stride2offset/dist'),z=y();function A(a,r,u,f,e,v){return z(a,r,u,f,e,v,w(a,v))}k.exports=A
});var B=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=m(),C=y();B(O,"ndarray",C);module.exports=O;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
