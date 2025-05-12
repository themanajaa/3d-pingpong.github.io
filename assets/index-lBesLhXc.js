var _p=(n,t)=>()=>(t||n((t={exports:{}}).exports,t),t.exports);var xw=_p((Mw,ei)=>{try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new n.Error().stack;t&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[t]="ab0d83fd-f5ab-4fea-bd42-b4167078bfa2",n._sentryDebugIdIdentifier="sentry-dbid-ab0d83fd-f5ab-4fea-bd42-b4167078bfa2")}catch{}{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};n.SENTRY_RELEASE={id:"fe3a0f353cbd3524ff446c62beeccefe0febbca7"}}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ol="175",or={ROTATE:0,DOLLY:1,PAN:2},nr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},vp=0,nu=1,Sp=2,gd=1,xp=2,Pn=3,si=0,ze=1,Un=2,Bn=0,ar=1,Ga=2,iu=3,ru=4,Ep=5,vi=100,yp=101,Mp=102,Tp=103,bp=104,Ap=200,wp=201,Rp=202,Cp=203,Va=204,Wa=205,Pp=206,Ip=207,Dp=208,Lp=209,Np=210,Up=211,Op=212,Fp=213,Bp=214,$a=0,Xa=1,Ya=2,hr=3,qa=4,ja=5,Ka=6,Za=7,_d=0,kp=1,Hp=2,ni=0,zp=1,Gp=2,Vp=3,Wp=4,$p=5,Xp=6,Yp=7,vd=300,dr=301,fr=302,Ja=303,Qa=304,Do=306,tc=1e3,Ei=1001,ec=1002,hn=1003,qp=1004,Ts=1005,xn=1006,Ko=1007,yi=1008,Wn=1009,Sd=1010,xd=1011,Kr=1012,al=1013,Ai=1014,On=1015,kn=1016,cl=1017,ll=1018,Zr=1020,Ed=35902,yd=1021,Md=1022,ln=1023,Td=1024,bd=1025,Jr=1026,Qr=1027,Ad=1028,ul=1029,wd=1030,hl=1031,dl=1033,ao=33776,co=33777,lo=33778,uo=33779,nc=35840,ic=35841,rc=35842,sc=35843,oc=36196,ac=37492,cc=37496,lc=37808,uc=37809,hc=37810,dc=37811,fc=37812,pc=37813,mc=37814,gc=37815,_c=37816,vc=37817,Sc=37818,xc=37819,Ec=37820,yc=37821,ho=36492,Mc=36494,Tc=36495,Rd=36283,bc=36284,Ac=36285,wc=36286,jp=3200,Kp=3201,Cd=0,Zp=1,ti="",Ze="srgb",pr="srgb-linear",Eo="linear",te="srgb",ki=7680,su=519,Jp=512,Qp=513,tm=514,Pd=515,em=516,nm=517,im=518,rm=519,ou=35044,au="300 es",Fn=2e3,yo=2001;class Ni{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const r=i[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const we=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let cu=1234567;const $r=Math.PI/180,ts=180/Math.PI;function Tr(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(we[n&255]+we[n>>8&255]+we[n>>16&255]+we[n>>24&255]+"-"+we[t&255]+we[t>>8&255]+"-"+we[t>>16&15|64]+we[t>>24&255]+"-"+we[e&63|128]+we[e>>8&255]+"-"+we[e>>16&255]+we[e>>24&255]+we[i&255]+we[i>>8&255]+we[i>>16&255]+we[i>>24&255]).toLowerCase()}function Ft(n,t,e){return Math.max(t,Math.min(e,n))}function fl(n,t){return(n%t+t)%t}function sm(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function om(n,t,e){return n!==t?(e-n)/(t-n):0}function Xr(n,t,e){return(1-e)*n+e*t}function am(n,t,e,i){return Xr(n,t,1-Math.exp(-e*i))}function cm(n,t=1){return t-Math.abs(fl(n,t*2)-t)}function lm(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function um(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function hm(n,t){return n+Math.floor(Math.random()*(t-n+1))}function dm(n,t){return n+Math.random()*(t-n)}function fm(n){return n*(.5-Math.random())}function pm(n){n!==void 0&&(cu=n);let t=cu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function mm(n){return n*$r}function gm(n){return n*ts}function _m(n){return(n&n-1)===0&&n!==0}function vm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Sm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function xm(n,t,e,i,r){const s=Math.cos,o=Math.sin,a=s(e/2),c=o(e/2),l=s((t+i)/2),u=o((t+i)/2),h=s((t-i)/2),d=o((t-i)/2),p=s((i-t)/2),g=o((i-t)/2);switch(r){case"XYX":n.set(a*u,c*h,c*d,a*l);break;case"YZY":n.set(c*d,a*u,c*h,a*l);break;case"ZXZ":n.set(c*h,c*d,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*p,a*l);break;case"YXY":n.set(c*p,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*p,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function er(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function De(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Rc={DEG2RAD:$r,RAD2DEG:ts,generateUUID:Tr,clamp:Ft,euclideanModulo:fl,mapLinear:sm,inverseLerp:om,lerp:Xr,damp:am,pingpong:cm,smoothstep:lm,smootherstep:um,randInt:hm,randFloat:dm,randFloatSpread:fm,seededRandom:pm,degToRad:mm,radToDeg:gm,isPowerOfTwo:_m,ceilPowerOfTwo:vm,floorPowerOfTwo:Sm,setQuaternionFromProperEuler:xm,normalize:De,denormalize:er};class yt{constructor(t=0,e=0){yt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ft(this.x,t.x,e.x),this.y=Ft(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ft(this.x,t,e),this.y=Ft(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ft(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ft(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Lt{constructor(t,e,i,r,s,o,a,c,l){Lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,c,l)}set(t,e,i,r,s,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],d=i[2],p=i[5],g=i[8],S=r[0],m=r[3],f=r[6],b=r[1],T=r[4],E=r[7],L=r[2],C=r[5],w=r[8];return s[0]=o*S+a*b+c*L,s[3]=o*m+a*T+c*C,s[6]=o*f+a*E+c*w,s[1]=l*S+u*b+h*L,s[4]=l*m+u*T+h*C,s[7]=l*f+u*E+h*w,s[2]=d*S+p*b+g*L,s[5]=d*m+p*T+g*C,s[8]=d*f+p*E+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,d=a*c-u*s,p=l*s-o*c,g=e*h+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/g;return t[0]=h*S,t[1]=(r*l-u*i)*S,t[2]=(a*i-r*o)*S,t[3]=d*S,t[4]=(u*e-r*c)*S,t[5]=(r*s-a*e)*S,t[6]=p*S,t[7]=(i*c-l*e)*S,t[8]=(o*e-i*s)*S,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Zo.makeScale(t,e)),this}rotate(t){return this.premultiply(Zo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Zo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Zo=new Lt;function Id(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function es(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Em(){const n=es("canvas");return n.style.display="block",n}const lu={};function fo(n){n in lu||(lu[n]=!0,console.warn(n))}function ym(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function Mm(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Tm(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const uu=new Lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hu=new Lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bm(){const n={enabled:!0,workingColorSpace:pr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===te&&(r.r=Hn(r.r),r.g=Hn(r.g),r.b=Hn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===te&&(r.r=cr(r.r),r.g=cr(r.g),r.b=cr(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ti?Eo:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[pr]:{primaries:t,whitePoint:i,transfer:Eo,toXYZ:uu,fromXYZ:hu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ze},outputColorSpaceConfig:{drawingBufferColorSpace:Ze}},[Ze]:{primaries:t,whitePoint:i,transfer:te,toXYZ:uu,fromXYZ:hu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ze}}}),n}const Yt=bm();function Hn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function cr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Hi;class Am{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Hi===void 0&&(Hi=es("canvas")),Hi.width=t.width,Hi.height=t.height;const r=Hi.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=Hi}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=es("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Hn(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Hn(e[i]/255)*255):e[i]=Hn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let wm=0;class pl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wm++}),this.uuid=Tr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Jo(r[o].image)):s.push(Jo(r[o]))}else s=Jo(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function Jo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Am.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Rm=0;class Ue extends Ni{constructor(t=Ue.DEFAULT_IMAGE,e=Ue.DEFAULT_MAPPING,i=Ei,r=Ei,s=xn,o=yi,a=ln,c=Wn,l=Ue.DEFAULT_ANISOTROPY,u=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=Tr(),this.name="",this.source=new pl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==vd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case tc:t.x=t.x-Math.floor(t.x);break;case Ei:t.x=t.x<0?0:1;break;case ec:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case tc:t.y=t.y-Math.floor(t.y);break;case Ei:t.y=t.y<0?0:1;break;case ec:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ue.DEFAULT_IMAGE=null;Ue.DEFAULT_MAPPING=vd;Ue.DEFAULT_ANISOTROPY=1;class de{constructor(t=0,e=0,i=0,r=1){de.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const c=t.elements,l=c[0],u=c[4],h=c[8],d=c[1],p=c[5],g=c[9],S=c[2],m=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-S)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+S)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(l+1)/2,E=(p+1)/2,L=(f+1)/2,C=(u+d)/4,w=(h+S)/4,U=(g+m)/4;return T>E&&T>L?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=C/i,s=w/i):E>L?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=C/r,s=U/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=w/s,r=U/s),this.set(i,r,s,e),this}let b=Math.sqrt((m-g)*(m-g)+(h-S)*(h-S)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(h-S)/b,this.z=(d-u)/b,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ft(this.x,t.x,e.x),this.y=Ft(this.y,t.y,e.y),this.z=Ft(this.z,t.z,e.z),this.w=Ft(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ft(this.x,t,e),this.y=Ft(this.y,t,e),this.z=Ft(this.z,t,e),this.w=Ft(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ft(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cm extends Ni{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Ue(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new pl(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class dn extends Cm{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Dd extends Ue{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=hn,this.minFilter=hn,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pm extends Ue{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=hn,this.minFilter=hn,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wi{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3];const d=s[o+0],p=s[o+1],g=s[o+2],S=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=S;return}if(h!==S||c!==d||l!==p||u!==g){let m=1-a;const f=c*d+l*p+u*g+h*S,b=f>=0?1:-1,T=1-f*f;if(T>Number.EPSILON){const L=Math.sqrt(T),C=Math.atan2(L,f*b);m=Math.sin(m*C)/L,a=Math.sin(a*C)/L}const E=a*b;if(c=c*m+d*E,l=l*m+p*E,u=u*m+g*E,h=h*m+S*E,m===1-a){const L=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=L,l*=L,u*=L,h*=L}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],h=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return t[e]=a*g+u*h+c*p-l*d,t[e+1]=c*g+u*d+l*h-a*p,t[e+2]=l*g+u*p+a*d-c*h,t[e+3]=u*g-a*h-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),h=a(s/2),d=c(i/2),p=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=d*u*h+l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h+d*p*g;break;case"YZX":this._x=d*u*h+l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h-d*p*g;break;case"XZY":this._x=d*u*h-l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+l)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ft(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,d=Math.sin(e*u)/l;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,i=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(du.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(du.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*i),u=2*(a*e-s*r),h=2*(s*i-o*e);return this.x=e+c*l+o*h-a*u,this.y=i+c*u+a*l-s*h,this.z=r+c*h+s*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ft(this.x,t.x,e.x),this.y=Ft(this.y,t.y,e.y),this.z=Ft(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ft(this.x,t,e),this.y=Ft(this.y,t,e),this.z=Ft(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ft(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Qo.copy(this).projectOnVector(t),this.sub(Qo)}reflect(t){return this.sub(Qo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ft(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qo=new N,du=new wi;class ii{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,sn):sn.fromBufferAttribute(s,o),sn.applyMatrix4(t.matrixWorld),this.expandByPoint(sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),bs.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),bs.copy(i.boundingBox)),bs.applyMatrix4(t.matrixWorld),this.union(bs)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,sn),sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Or),As.subVectors(this.max,Or),zi.subVectors(t.a,Or),Gi.subVectors(t.b,Or),Vi.subVectors(t.c,Or),Xn.subVectors(Gi,zi),Yn.subVectors(Vi,Gi),hi.subVectors(zi,Vi);let e=[0,-Xn.z,Xn.y,0,-Yn.z,Yn.y,0,-hi.z,hi.y,Xn.z,0,-Xn.x,Yn.z,0,-Yn.x,hi.z,0,-hi.x,-Xn.y,Xn.x,0,-Yn.y,Yn.x,0,-hi.y,hi.x,0];return!ta(e,zi,Gi,Vi,As)||(e=[1,0,0,0,1,0,0,0,1],!ta(e,zi,Gi,Vi,As))?!1:(ws.crossVectors(Xn,Yn),e=[ws.x,ws.y,ws.z],ta(e,zi,Gi,Vi,As))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const bn=[new N,new N,new N,new N,new N,new N,new N,new N],sn=new N,bs=new ii,zi=new N,Gi=new N,Vi=new N,Xn=new N,Yn=new N,hi=new N,Or=new N,As=new N,ws=new N,di=new N;function ta(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){di.fromArray(n,s);const a=r.x*Math.abs(di.x)+r.y*Math.abs(di.y)+r.z*Math.abs(di.z),c=t.dot(di),l=e.dot(di),u=i.dot(di);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Im=new ii,Fr=new N,ea=new N;class ml{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Im.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Fr.subVectors(t,this.center);const e=Fr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Fr,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ea.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Fr.copy(t.center).add(ea)),this.expandByPoint(Fr.copy(t.center).sub(ea))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const An=new N,na=new N,Rs=new N,qn=new N,ia=new N,Cs=new N,ra=new N;class Ld{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,An)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=An.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(An.copy(this.origin).addScaledVector(this.direction,e),An.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){na.copy(t).add(e).multiplyScalar(.5),Rs.copy(e).sub(t).normalize(),qn.copy(this.origin).sub(na);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Rs),a=qn.dot(this.direction),c=-qn.dot(Rs),l=qn.lengthSq(),u=Math.abs(1-o*o);let h,d,p,g;if(u>0)if(h=o*c-a,d=o*a-c,g=s*u,h>=0)if(d>=-g)if(d<=g){const S=1/u;h*=S,d*=S,p=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-c),s),p=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+l):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-c),s),p=-h*h+d*(d+2*c)+l);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(na).addScaledVector(Rs,d),p}intersectSphere(t,e){An.subVectors(t.center,this.origin);const i=An.dot(this.direction),r=An.dot(An)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,r=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,r=(t.min.x-d.x)*l),u>=0?(s=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(t.min.z-d.z)*h,c=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,c=(t.min.z-d.z)*h),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,An)!==null}intersectTriangle(t,e,i,r,s){ia.subVectors(e,t),Cs.subVectors(i,t),ra.crossVectors(ia,Cs);let o=this.direction.dot(ra),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;qn.subVectors(this.origin,t);const c=a*this.direction.dot(Cs.crossVectors(qn,Cs));if(c<0)return null;const l=a*this.direction.dot(ia.cross(qn));if(l<0||c+l>o)return null;const u=-a*qn.dot(ra);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fe{constructor(t,e,i,r,s,o,a,c,l,u,h,d,p,g,S,m){fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,c,l,u,h,d,p,g,S,m)}set(t,e,i,r,s,o,a,c,l,u,h,d,p,g,S,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=S,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/Wi.setFromMatrixColumn(t,0).length(),s=1/Wi.setFromMatrixColumn(t,1).length(),o=1/Wi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const d=o*u,p=o*h,g=a*u,S=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=p+g*l,e[5]=d-S*l,e[9]=-a*c,e[2]=S-d*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*u,p=c*h,g=l*u,S=l*h;e[0]=d+S*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=p*a-g,e[6]=S+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*u,p=c*h,g=l*u,S=l*h;e[0]=d-S*a,e[4]=-o*h,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*u,e[9]=S-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*u,p=o*h,g=a*u,S=a*h;e[0]=c*u,e[4]=g*l-p,e[8]=d*l+S,e[1]=c*h,e[5]=S*l+d,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,p=o*l,g=a*c,S=a*l;e[0]=c*u,e[4]=S-d*h,e[8]=g*h+p,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=p*h+g,e[10]=d-S*h}else if(t.order==="XZY"){const d=o*c,p=o*l,g=a*c,S=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=d*h+S,e[5]=o*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=a*u,e[10]=S*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Dm,t,Lm)}lookAt(t,e,i){const r=this.elements;return We.subVectors(t,e),We.lengthSq()===0&&(We.z=1),We.normalize(),jn.crossVectors(i,We),jn.lengthSq()===0&&(Math.abs(i.z)===1?We.x+=1e-4:We.z+=1e-4,We.normalize(),jn.crossVectors(i,We)),jn.normalize(),Ps.crossVectors(We,jn),r[0]=jn.x,r[4]=Ps.x,r[8]=We.x,r[1]=jn.y,r[5]=Ps.y,r[9]=We.y,r[2]=jn.z,r[6]=Ps.z,r[10]=We.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],d=i[9],p=i[13],g=i[2],S=i[6],m=i[10],f=i[14],b=i[3],T=i[7],E=i[11],L=i[15],C=r[0],w=r[4],U=r[8],y=r[12],x=r[1],R=r[5],V=r[9],H=r[13],Y=r[2],K=r[6],X=r[10],G=r[14],k=r[3],et=r[7],rt=r[11],vt=r[15];return s[0]=o*C+a*x+c*Y+l*k,s[4]=o*w+a*R+c*K+l*et,s[8]=o*U+a*V+c*X+l*rt,s[12]=o*y+a*H+c*G+l*vt,s[1]=u*C+h*x+d*Y+p*k,s[5]=u*w+h*R+d*K+p*et,s[9]=u*U+h*V+d*X+p*rt,s[13]=u*y+h*H+d*G+p*vt,s[2]=g*C+S*x+m*Y+f*k,s[6]=g*w+S*R+m*K+f*et,s[10]=g*U+S*V+m*X+f*rt,s[14]=g*y+S*H+m*G+f*vt,s[3]=b*C+T*x+E*Y+L*k,s[7]=b*w+T*R+E*K+L*et,s[11]=b*U+T*V+E*X+L*rt,s[15]=b*y+T*H+E*G+L*vt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],d=t[10],p=t[14],g=t[3],S=t[7],m=t[11],f=t[15];return g*(+s*c*h-r*l*h-s*a*d+i*l*d+r*a*p-i*c*p)+S*(+e*c*p-e*l*d+s*o*d-r*o*p+r*l*u-s*c*u)+m*(+e*l*h-e*a*p-s*o*h+i*o*p+s*a*u-i*l*u)+f*(-r*a*u-e*c*h+e*a*d+r*o*h-i*o*d+i*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],d=t[10],p=t[11],g=t[12],S=t[13],m=t[14],f=t[15],b=h*m*l-S*d*l+S*c*p-a*m*p-h*c*f+a*d*f,T=g*d*l-u*m*l-g*c*p+o*m*p+u*c*f-o*d*f,E=u*S*l-g*h*l+g*a*p-o*S*p-u*a*f+o*h*f,L=g*h*c-u*S*c-g*a*d+o*S*d+u*a*m-o*h*m,C=e*b+i*T+r*E+s*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return t[0]=b*w,t[1]=(S*d*s-h*m*s-S*r*p+i*m*p+h*r*f-i*d*f)*w,t[2]=(a*m*s-S*c*s+S*r*l-i*m*l-a*r*f+i*c*f)*w,t[3]=(h*c*s-a*d*s-h*r*l+i*d*l+a*r*p-i*c*p)*w,t[4]=T*w,t[5]=(u*m*s-g*d*s+g*r*p-e*m*p-u*r*f+e*d*f)*w,t[6]=(g*c*s-o*m*s-g*r*l+e*m*l+o*r*f-e*c*f)*w,t[7]=(o*d*s-u*c*s+u*r*l-e*d*l-o*r*p+e*c*p)*w,t[8]=E*w,t[9]=(g*h*s-u*S*s-g*i*p+e*S*p+u*i*f-e*h*f)*w,t[10]=(o*S*s-g*a*s+g*i*l-e*S*l-o*i*f+e*a*f)*w,t[11]=(u*a*s-o*h*s-u*i*l+e*h*l+o*i*p-e*a*p)*w,t[12]=L*w,t[13]=(u*S*r-g*h*r+g*i*d-e*S*d-u*i*m+e*h*m)*w,t[14]=(g*a*r-o*S*r-g*i*c+e*S*c+o*i*m-e*a*m)*w,t[15]=(o*h*r-u*a*r+u*i*c-e*h*c-o*i*d+e*a*d)*w,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,c=t.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,u=o+o,h=a+a,d=s*l,p=s*u,g=s*h,S=o*u,m=o*h,f=a*h,b=c*l,T=c*u,E=c*h,L=i.x,C=i.y,w=i.z;return r[0]=(1-(S+f))*L,r[1]=(p+E)*L,r[2]=(g-T)*L,r[3]=0,r[4]=(p-E)*C,r[5]=(1-(d+f))*C,r[6]=(m+b)*C,r[7]=0,r[8]=(g+T)*w,r[9]=(m-b)*w,r[10]=(1-(d+S))*w,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=Wi.set(r[0],r[1],r[2]).length();const o=Wi.set(r[4],r[5],r[6]).length(),a=Wi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],on.copy(this);const l=1/s,u=1/o,h=1/a;return on.elements[0]*=l,on.elements[1]*=l,on.elements[2]*=l,on.elements[4]*=u,on.elements[5]*=u,on.elements[6]*=u,on.elements[8]*=h,on.elements[9]*=h,on.elements[10]*=h,e.setFromRotationMatrix(on),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=Fn){const c=this.elements,l=2*s/(e-t),u=2*s/(i-r),h=(e+t)/(e-t),d=(i+r)/(i-r);let p,g;if(a===Fn)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===yo)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=Fn){const c=this.elements,l=1/(e-t),u=1/(i-r),h=1/(o-s),d=(e+t)*l,p=(i+r)*u;let g,S;if(a===Fn)g=(o+s)*h,S=-2*h;else if(a===yo)g=s*h,S=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=S,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Wi=new N,on=new fe,Dm=new N(0,0,0),Lm=new N(1,1,1),jn=new N,Ps=new N,We=new N,fu=new fe,pu=new wi;class Mn{constructor(t=0,e=0,i=0,r=Mn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],h=r[2],d=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(Ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ft(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ft(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return fu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(fu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return pu.setFromEuler(this),this.setFromQuaternion(pu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mn.DEFAULT_ORDER="XYZ";class Nd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Nm=0;const mu=new N,$i=new wi,wn=new fe,Is=new N,Br=new N,Um=new N,Om=new wi,gu=new N(1,0,0),_u=new N(0,1,0),vu=new N(0,0,1),Su={type:"added"},Fm={type:"removed"},Xi={type:"childadded",child:null},sa={type:"childremoved",child:null};class Pe extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=Tr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pe.DEFAULT_UP.clone();const t=new N,e=new Mn,i=new wi,r=new N(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new fe},normalMatrix:{value:new Lt}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=Pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.multiply($i),this}rotateOnWorldAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.premultiply($i),this}rotateX(t){return this.rotateOnAxis(gu,t)}rotateY(t){return this.rotateOnAxis(_u,t)}rotateZ(t){return this.rotateOnAxis(vu,t)}translateOnAxis(t,e){return mu.copy(t).applyQuaternion(this.quaternion),this.position.add(mu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(gu,t)}translateY(t){return this.translateOnAxis(_u,t)}translateZ(t){return this.translateOnAxis(vu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Is.copy(t):Is.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(Br,Is,this.up):wn.lookAt(Is,Br,this.up),this.quaternion.setFromRotationMatrix(wn),r&&(wn.extractRotation(r.matrixWorld),$i.setFromRotationMatrix(wn),this.quaternion.premultiply($i.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Su),Xi.child=t,this.dispatchEvent(Xi),Xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Fm),sa.child=t,this.dispatchEvent(sa),sa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Su),Xi.child=t,this.dispatchEvent(Xi),Xi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,t,Um),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,Om,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(t.shapes,h)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Pe.DEFAULT_UP=new N(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new N,Rn=new N,oa=new N,Cn=new N,Yi=new N,qi=new N,xu=new N,aa=new N,ca=new N,la=new N,ua=new de,ha=new de,da=new de;class cn{constructor(t=new N,e=new N,i=new N){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),an.subVectors(t,e),r.cross(an);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){an.subVectors(r,e),Rn.subVectors(i,e),oa.subVectors(t,e);const o=an.dot(an),a=an.dot(Rn),c=an.dot(oa),l=Rn.dot(Rn),u=Rn.dot(oa),h=o*l-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(l*c-a*u)*d,g=(o*u-a*c)*d;return s.set(1-p-g,g,p)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getInterpolation(t,e,i,r,s,o,a,c){return this.getBarycoord(t,e,i,r,Cn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Cn.x),c.addScaledVector(o,Cn.y),c.addScaledVector(a,Cn.z),c)}static getInterpolatedAttribute(t,e,i,r,s,o){return ua.setScalar(0),ha.setScalar(0),da.setScalar(0),ua.fromBufferAttribute(t,e),ha.fromBufferAttribute(t,i),da.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(ua,s.x),o.addScaledVector(ha,s.y),o.addScaledVector(da,s.z),o}static isFrontFacing(t,e,i,r){return an.subVectors(i,e),Rn.subVectors(t,e),an.cross(Rn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return an.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),an.cross(Rn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return cn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return cn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return cn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return cn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return cn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;Yi.subVectors(r,i),qi.subVectors(s,i),aa.subVectors(t,i);const c=Yi.dot(aa),l=qi.dot(aa);if(c<=0&&l<=0)return e.copy(i);ca.subVectors(t,r);const u=Yi.dot(ca),h=qi.dot(ca);if(u>=0&&h<=u)return e.copy(r);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(i).addScaledVector(Yi,o);la.subVectors(t,s);const p=Yi.dot(la),g=qi.dot(la);if(g>=0&&p<=g)return e.copy(s);const S=p*l-c*g;if(S<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(i).addScaledVector(qi,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return xu.subVectors(s,r),a=(h-u)/(h-u+(p-g)),e.copy(r).addScaledVector(xu,a);const f=1/(m+S+d);return o=S*f,a=d*f,e.copy(i).addScaledVector(Yi,o).addScaledVector(qi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ud={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kn={h:0,s:0,l:0},Ds={h:0,s:0,l:0};function fa(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Bt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Yt.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=Yt.workingColorSpace){if(t=fl(t,1),e=Ft(e,0,1),i=Ft(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=fa(o,s,t+1/3),this.g=fa(o,s,t),this.b=fa(o,s,t-1/3)}return Yt.toWorkingColorSpace(this,r),this}setStyle(t,e=Ze){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ze){const i=Ud[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hn(t.r),this.g=Hn(t.g),this.b=Hn(t.b),this}copyLinearToSRGB(t){return this.r=cr(t.r),this.g=cr(t.g),this.b=cr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ze){return Yt.fromWorkingColorSpace(Re.copy(this),t),Math.round(Ft(Re.r*255,0,255))*65536+Math.round(Ft(Re.g*255,0,255))*256+Math.round(Ft(Re.b*255,0,255))}getHexString(t=Ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.fromWorkingColorSpace(Re.copy(this),e);const i=Re.r,r=Re.g,s=Re.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(Re.copy(this),e),t.r=Re.r,t.g=Re.g,t.b=Re.b,t}getStyle(t=Ze){Yt.fromWorkingColorSpace(Re.copy(this),t);const e=Re.r,i=Re.g,r=Re.b;return t!==Ze?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Kn),this.setHSL(Kn.h+t,Kn.s+e,Kn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Kn),t.getHSL(Ds);const i=Xr(Kn.h,Ds.h,e),r=Xr(Kn.s,Ds.s,e),s=Xr(Kn.l,Ds.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Re=new Bt;Bt.NAMES=Ud;let Bm=0;class as extends Ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bm++}),this.uuid=Tr(),this.name="",this.type="Material",this.blending=ar,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Va,this.blendDst=Wa,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=su,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ki,this.stencilZFail=ki,this.stencilZPass=ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ar&&(i.blending=this.blending),this.side!==si&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Va&&(i.blendSrc=this.blendSrc),this.blendDst!==Wa&&(i.blendDst=this.blendDst),this.blendEquation!==vi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==hr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==su&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ki&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ki&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ki&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class gl extends as{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=_d,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _e=new N,Ls=new yt;let km=0;class En{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:km++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=ou,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ls.fromBufferAttribute(this,e),Ls.applyMatrix3(t),this.setXY(e,Ls.x,Ls.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=er(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=De(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=er(e,this.array)),e}setX(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=er(e,this.array)),e}setY(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=er(e,this.array)),e}setZ(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=er(e,this.array)),e}setW(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),i=De(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),i=De(i,this.array),r=De(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),i=De(i,this.array),r=De(r,this.array),s=De(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ou&&(t.usage=this.usage),t}}class Od extends En{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Fd extends En{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Qe extends En{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Hm=0;const Ke=new fe,pa=new Pe,ji=new N,$e=new ii,kr=new ii,Me=new N;class $n extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hm++}),this.uuid=Tr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Id(t)?Fd:Od)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Lt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ke.makeRotationFromQuaternion(t),this.applyMatrix4(Ke),this}rotateX(t){return Ke.makeRotationX(t),this.applyMatrix4(Ke),this}rotateY(t){return Ke.makeRotationY(t),this.applyMatrix4(Ke),this}rotateZ(t){return Ke.makeRotationZ(t),this.applyMatrix4(Ke),this}translate(t,e,i){return Ke.makeTranslation(t,e,i),this.applyMatrix4(Ke),this}scale(t,e,i){return Ke.makeScale(t,e,i),this.applyMatrix4(Ke),this}lookAt(t){return pa.lookAt(t),pa.updateMatrix(),this.applyMatrix4(pa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ji).negate(),this.translate(ji.x,ji.y,ji.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Qe(i,3))}else{const i=Math.min(t.length,e.count);for(let r=0;r<i;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];$e.setFromBufferAttribute(s),this.morphTargetsRelative?(Me.addVectors(this.boundingBox.min,$e.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,$e.max),this.boundingBox.expandByPoint(Me)):(this.boundingBox.expandByPoint($e.min),this.boundingBox.expandByPoint($e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ml);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const i=this.boundingSphere.center;if($e.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];kr.setFromBufferAttribute(a),this.morphTargetsRelative?(Me.addVectors($e.min,kr.min),$e.expandByPoint(Me),Me.addVectors($e.max,kr.max),$e.expandByPoint(Me)):($e.expandByPoint(kr.min),$e.expandByPoint(kr.max))}$e.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)Me.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Me));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Me.fromBufferAttribute(a,l),c&&(ji.fromBufferAttribute(t,l),Me.add(ji)),r=Math.max(r,i.distanceToSquared(Me))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new En(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let U=0;U<i.count;U++)a[U]=new N,c[U]=new N;const l=new N,u=new N,h=new N,d=new yt,p=new yt,g=new yt,S=new N,m=new N;function f(U,y,x){l.fromBufferAttribute(i,U),u.fromBufferAttribute(i,y),h.fromBufferAttribute(i,x),d.fromBufferAttribute(s,U),p.fromBufferAttribute(s,y),g.fromBufferAttribute(s,x),u.sub(l),h.sub(l),p.sub(d),g.sub(d);const R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(S.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(R),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(R),a[U].add(S),a[y].add(S),a[x].add(S),c[U].add(m),c[y].add(m),c[x].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let U=0,y=b.length;U<y;++U){const x=b[U],R=x.start,V=x.count;for(let H=R,Y=R+V;H<Y;H+=3)f(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const T=new N,E=new N,L=new N,C=new N;function w(U){L.fromBufferAttribute(r,U),C.copy(L);const y=a[U];T.copy(y),T.sub(L.multiplyScalar(L.dot(y))).normalize(),E.crossVectors(C,y);const R=E.dot(c[U])<0?-1:1;o.setXYZW(U,T.x,T.y,T.z,R)}for(let U=0,y=b.length;U<y;++U){const x=b[U],R=x.start,V=x.count;for(let H=R,Y=R+V;H<Y;H+=3)w(t.getX(H+0)),w(t.getX(H+1)),w(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new En(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new N,s=new N,o=new N,a=new N,c=new N,l=new N,u=new N,h=new N;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),S=t.getX(d+1),m=t.getX(d+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,S),o.fromBufferAttribute(e,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,S),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(S,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Me.fromBufferAttribute(t,e),Me.normalize(),t.setXYZ(e,Me.x,Me.y,Me.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let p=0,g=0;for(let S=0,m=c.length;S<m;S++){a.isInterleavedBufferAttribute?p=c[S]*a.data.stride+a.offset:p=c[S]*u;for(let f=0;f<u;f++)d[g++]=l[p++]}return new En(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new $n,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=t(c,i);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],p=t(d,i);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const p=l[h];u.push(p.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const r=t.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(e))}const s=t.morphAttributes;for(const l in s){const u=[],h=s[l];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Eu=new fe,fi=new Ld,Ns=new ml,yu=new N,Us=new N,Os=new N,Fs=new N,ma=new N,Bs=new N,Mu=new N,ks=new N;class ke extends Pe{constructor(t=new $n,e=new gl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Bs.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],h=s[c];u!==0&&(ma.fromBufferAttribute(h,t),o?Bs.addScaledVector(ma,u):Bs.addScaledVector(ma.sub(e),u))}e.add(Bs)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ns.copy(i.boundingSphere),Ns.applyMatrix4(s),fi.copy(t.ray).recast(t.near),!(Ns.containsPoint(fi.origin)===!1&&(fi.intersectSphere(Ns,yu)===null||fi.origin.distanceToSquared(yu)>(t.far-t.near)**2))&&(Eu.copy(s).invert(),fi.copy(t.ray).applyMatrix4(Eu),!(i.boundingBox!==null&&fi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,fi)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,S=d.length;g<S;g++){const m=d[g],f=o[m.materialIndex],b=Math.max(m.start,p.start),T=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let E=b,L=T;E<L;E+=3){const C=a.getX(E),w=a.getX(E+1),U=a.getX(E+2);r=Hs(this,f,t,i,l,u,h,C,w,U),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),S=Math.min(a.count,p.start+p.count);for(let m=g,f=S;m<f;m+=3){const b=a.getX(m),T=a.getX(m+1),E=a.getX(m+2);r=Hs(this,o,t,i,l,u,h,b,T,E),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,S=d.length;g<S;g++){const m=d[g],f=o[m.materialIndex],b=Math.max(m.start,p.start),T=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let E=b,L=T;E<L;E+=3){const C=E,w=E+1,U=E+2;r=Hs(this,f,t,i,l,u,h,C,w,U),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),S=Math.min(c.count,p.start+p.count);for(let m=g,f=S;m<f;m+=3){const b=m,T=m+1,E=m+2;r=Hs(this,o,t,i,l,u,h,b,T,E),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function zm(n,t,e,i,r,s,o,a){let c;if(t.side===ze?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,t.side===si,a),c===null)return null;ks.copy(a),ks.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(ks);return l<e.near||l>e.far?null:{distance:l,point:ks.clone(),object:n}}function Hs(n,t,e,i,r,s,o,a,c,l){n.getVertexPosition(a,Us),n.getVertexPosition(c,Os),n.getVertexPosition(l,Fs);const u=zm(n,t,e,i,Us,Os,Fs,Mu);if(u){const h=new N;cn.getBarycoord(Mu,Us,Os,Fs,h),r&&(u.uv=cn.getInterpolatedAttribute(r,a,c,l,h,new yt)),s&&(u.uv1=cn.getInterpolatedAttribute(s,a,c,l,h,new yt)),o&&(u.normal=cn.getInterpolatedAttribute(o,a,c,l,h,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new N,materialIndex:0};cn.getNormal(Us,Os,Fs,d.normal),u.face=d,u.barycoord=h}return u}class Ri extends $n{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,i,e,t,o,s,0),g("z","y","x",1,-1,i,e,-t,o,s,1),g("x","z","y",1,1,t,i,e,r,o,2),g("x","z","y",1,-1,t,i,-e,r,o,3),g("x","y","z",1,-1,t,e,i,r,s,4),g("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Qe(l,3)),this.setAttribute("normal",new Qe(u,3)),this.setAttribute("uv",new Qe(h,2));function g(S,m,f,b,T,E,L,C,w,U,y){const x=E/w,R=L/U,V=E/2,H=L/2,Y=C/2,K=w+1,X=U+1;let G=0,k=0;const et=new N;for(let rt=0;rt<X;rt++){const vt=rt*R-H;for(let Ot=0;Ot<K;Ot++){const jt=Ot*x-V;et[S]=jt*b,et[m]=vt*T,et[f]=Y,l.push(et.x,et.y,et.z),et[S]=0,et[m]=0,et[f]=C>0?1:-1,u.push(et.x,et.y,et.z),h.push(Ot/w),h.push(1-rt/U),G+=1}}for(let rt=0;rt<U;rt++)for(let vt=0;vt<w;vt++){const Ot=d+vt+K*rt,jt=d+vt+K*(rt+1),W=d+(vt+1)+K*(rt+1),tt=d+(vt+1)+K*rt;c.push(Ot,jt,tt),c.push(jt,W,tt),k+=6}a.addGroup(p,k,y),p+=k,d+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ri(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function mr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Le(n){const t={};for(let e=0;e<n.length;e++){const i=mr(n[e]);for(const r in i)t[r]=i[r]}return t}function Gm(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Bd(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}const Mo={clone:mr,merge:Le};var Vm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ne extends as{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vm,this.fragmentShader=Wm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=mr(t.uniforms),this.uniformsGroups=Gm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class kd extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=Fn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zn=new N,Tu=new yt,bu=new yt;class Je extends kd{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ts*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan($r*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ts*2*Math.atan(Math.tan($r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Zn.x,Zn.y).multiplyScalar(-t/Zn.z),Zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Zn.x,Zn.y).multiplyScalar(-t/Zn.z)}getViewSize(t,e){return this.getViewBounds(t,Tu,bu),e.subVectors(bu,Tu)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan($r*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ki=-90,Zi=1;class $m extends Pe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Je(Ki,Zi,t,e);r.layers=this.layers,this.add(r);const s=new Je(Ki,Zi,t,e);s.layers=this.layers,this.add(s);const o=new Je(Ki,Zi,t,e);o.layers=this.layers,this.add(o);const a=new Je(Ki,Zi,t,e);a.layers=this.layers,this.add(a);const c=new Je(Ki,Zi,t,e);c.layers=this.layers,this.add(c);const l=new Je(Ki,Zi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===Fn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===yo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,c),t.setRenderTarget(i,4,r),t.render(e,l),i.texture.generateMipmaps=S,t.setRenderTarget(i,5,r),t.render(e,u),t.setRenderTarget(h,d,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Hd extends Ue{constructor(t=[],e=dr,i,r,s,o,a,c,l,u){super(t,e,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Xm extends dn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Hd(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:xn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ri(5,5,5),s=new Ne({name:"CubemapFromEquirect",uniforms:mr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ze,blending:Bn});s.uniforms.tEquirect.value=e;const o=new ke(r,s),a=e.minFilter;return e.minFilter===yi&&(e.minFilter=xn),new $m(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}class zs extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ym={type:"move"};class ga{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const S of t.hand.values()){const m=e.getJointPose(S,i),f=this._getHandJoint(l,S);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ym)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new zs;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class qm extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mn,this.environmentIntensity=1,this.environmentRotation=new Mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const _a=new N,jm=new N,Km=new Lt;class Jn{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=_a.subVectors(i,e).cross(jm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(_a),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Km.getNormalMatrix(t),r=this.coplanarPoint(_a).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pi=new ml,Gs=new N;class _l{constructor(t=new Jn,e=new Jn,i=new Jn,r=new Jn,s=new Jn,o=new Jn){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Fn){const i=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],h=r[6],d=r[7],p=r[8],g=r[9],S=r[10],m=r[11],f=r[12],b=r[13],T=r[14],E=r[15];if(i[0].setComponents(c-s,d-l,m-p,E-f).normalize(),i[1].setComponents(c+s,d+l,m+p,E+f).normalize(),i[2].setComponents(c+o,d+u,m+g,E+b).normalize(),i[3].setComponents(c-o,d-u,m-g,E-b).normalize(),i[4].setComponents(c-a,d-h,m-S,E-T).normalize(),e===Fn)i[5].setComponents(c+a,d+h,m+S,E+T).normalize();else if(e===yo)i[5].setComponents(a,h,S,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(t){return pi.center.set(0,0,0),pi.radius=.7071067811865476,pi.applyMatrix4(t.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Gs.x=r.normal.x>0?t.max.x:t.min.x,Gs.y=r.normal.y>0?t.max.y:t.min.y,Gs.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Gs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class zd extends Ue{constructor(t,e,i=Ai,r,s,o,a=hn,c=hn,l,u=Jr){if(u!==Jr&&u!==Qr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new pl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Lo extends $n{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,h=t/a,d=e/c,p=[],g=[],S=[],m=[];for(let f=0;f<u;f++){const b=f*d-o;for(let T=0;T<l;T++){const E=T*h-s;g.push(E,-b,0),S.push(0,0,1),m.push(T/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let b=0;b<a;b++){const T=b+l*f,E=b+l*(f+1),L=b+1+l*(f+1),C=b+1+l*f;p.push(T,E,C),p.push(E,L,C)}this.setIndex(p),this.setAttribute("position",new Qe(g,3)),this.setAttribute("normal",new Qe(S,3)),this.setAttribute("uv",new Qe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lo(t.width,t.height,t.widthSegments,t.heightSegments)}}class vl extends $n{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new N,d=new N,p=[],g=[],S=[],m=[];for(let f=0;f<=i;f++){const b=[],T=f/i;let E=0;f===0&&o===0?E=.5/e:f===i&&c===Math.PI&&(E=-.5/e);for(let L=0;L<=e;L++){const C=L/e;h.x=-t*Math.cos(r+C*s)*Math.sin(o+T*a),h.y=t*Math.cos(o+T*a),h.z=t*Math.sin(r+C*s)*Math.sin(o+T*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),S.push(d.x,d.y,d.z),m.push(C+E,1-T),b.push(l++)}u.push(b)}for(let f=0;f<i;f++)for(let b=0;b<e;b++){const T=u[f][b+1],E=u[f][b],L=u[f+1][b],C=u[f+1][b+1];(f!==0||o>0)&&p.push(T,E,C),(f!==i-1||c<Math.PI)&&p.push(E,L,C)}this.setIndex(p),this.setAttribute("position",new Qe(g,3)),this.setAttribute("normal",new Qe(S,3)),this.setAttribute("uv",new Qe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vl(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class va extends as{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cd,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Zm extends as{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Jm extends as{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Au={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Qm{constructor(t,e,i){const r=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const p=l[h],g=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const tg=new Qm;class Sl{constructor(t){this.manager=t!==void 0?t:tg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(r,s){i.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Sl.DEFAULT_MATERIAL_NAME="__DEFAULT";class eg extends Sl{constructor(t){super(t)}load(t,e,i,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=Au.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=es("img");function c(){u(),Au.add(t,this),e&&e(this),s.manager.itemEnd(t)}function l(h){u(),r&&r(h),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class ng extends Sl{constructor(t){super(t)}load(t,e,i,r){const s=new Ue,o=new eg(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},i,r),s}}class Gd extends Pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Sa=new fe,wu=new N,Ru=new N;class ig{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new yt(512,512),this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _l,this._frameExtents=new yt(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;wu.setFromMatrixPosition(t.matrixWorld),e.position.copy(wu),Ru.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ru),e.updateMatrixWorld(),Sa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sa),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Sa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class xl extends kd{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class rg extends ig{constructor(){super(new xl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sg extends Gd{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new rg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class og extends Gd{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class ag extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class cg{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Cu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Cu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Cu(){return performance.now()}class Pu{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Ft(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Ft(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class lg extends Ni{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Iu(n,t,e,i){const r=ug(i);switch(e){case yd:return n*t;case Td:return n*t;case bd:return n*t*2;case Ad:return n*t/r.components*r.byteLength;case ul:return n*t/r.components*r.byteLength;case wd:return n*t*2/r.components*r.byteLength;case hl:return n*t*2/r.components*r.byteLength;case Md:return n*t*3/r.components*r.byteLength;case ln:return n*t*4/r.components*r.byteLength;case dl:return n*t*4/r.components*r.byteLength;case ao:case co:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case lo:case uo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ic:case sc:return Math.max(n,16)*Math.max(t,8)/4;case nc:case rc:return Math.max(n,8)*Math.max(t,8)/2;case oc:case ac:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case cc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case lc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case uc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case hc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case dc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case fc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case pc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case mc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case gc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case _c:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case vc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Sc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case xc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Ec:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case yc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ho:case Mc:case Tc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Rd:case bc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Ac:case wc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ug(n){switch(n){case Wn:case Sd:return{byteLength:1,components:1};case Kr:case xd:case kn:return{byteLength:2,components:1};case cl:case ll:return{byteLength:2,components:4};case Ai:case al:case On:return{byteLength:4,components:1};case Ed:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ol}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ol);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Vd(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function hg(n){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,l){const u=c.array,h=c.updateRanges;if(n.bindBuffer(l,a),h.length===0)n.bufferSubData(l,0,u);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){const g=h[d],S=h[p];S.start<=g.start+g.count+1?g.count=Math.max(g.count,S.start+S.count-g.start):(++d,h[d]=S)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){const S=h[p];n.bufferSubData(l,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var dg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,pg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_g=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Sg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Eg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,bg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ag=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Rg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ig=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Dg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ng=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ug=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Og=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Fg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Bg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,$g=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Yg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,t_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,e_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,n_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,i_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,r_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,s_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,o_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,a_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,c_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,l_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,u_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,h_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,d_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,f_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,p_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,m_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,__=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,v_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,S_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,x_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,E_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,y_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,M_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,T_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,b_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,A_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,R_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,C_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,P_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,I_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,N_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,U_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,O_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,F_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,B_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,k_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,H_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,z_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,G_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,V_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,W_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,X_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Y_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,q_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,j_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,K_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Z_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,J_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Q_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ev=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ov=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,av=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,uv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_v=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Sv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ev=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Av=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Pv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Dv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Lv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ov=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Hv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ut={alphahash_fragment:dg,alphahash_pars_fragment:fg,alphamap_fragment:pg,alphamap_pars_fragment:mg,alphatest_fragment:gg,alphatest_pars_fragment:_g,aomap_fragment:vg,aomap_pars_fragment:Sg,batching_pars_vertex:xg,batching_vertex:Eg,begin_vertex:yg,beginnormal_vertex:Mg,bsdfs:Tg,iridescence_fragment:bg,bumpmap_pars_fragment:Ag,clipping_planes_fragment:wg,clipping_planes_pars_fragment:Rg,clipping_planes_pars_vertex:Cg,clipping_planes_vertex:Pg,color_fragment:Ig,color_pars_fragment:Dg,color_pars_vertex:Lg,color_vertex:Ng,common:Ug,cube_uv_reflection_fragment:Og,defaultnormal_vertex:Fg,displacementmap_pars_vertex:Bg,displacementmap_vertex:kg,emissivemap_fragment:Hg,emissivemap_pars_fragment:zg,colorspace_fragment:Gg,colorspace_pars_fragment:Vg,envmap_fragment:Wg,envmap_common_pars_fragment:$g,envmap_pars_fragment:Xg,envmap_pars_vertex:Yg,envmap_physical_pars_fragment:r_,envmap_vertex:qg,fog_vertex:jg,fog_pars_vertex:Kg,fog_fragment:Zg,fog_pars_fragment:Jg,gradientmap_pars_fragment:Qg,lightmap_pars_fragment:t_,lights_lambert_fragment:e_,lights_lambert_pars_fragment:n_,lights_pars_begin:i_,lights_toon_fragment:s_,lights_toon_pars_fragment:o_,lights_phong_fragment:a_,lights_phong_pars_fragment:c_,lights_physical_fragment:l_,lights_physical_pars_fragment:u_,lights_fragment_begin:h_,lights_fragment_maps:d_,lights_fragment_end:f_,logdepthbuf_fragment:p_,logdepthbuf_pars_fragment:m_,logdepthbuf_pars_vertex:g_,logdepthbuf_vertex:__,map_fragment:v_,map_pars_fragment:S_,map_particle_fragment:x_,map_particle_pars_fragment:E_,metalnessmap_fragment:y_,metalnessmap_pars_fragment:M_,morphinstance_vertex:T_,morphcolor_vertex:b_,morphnormal_vertex:A_,morphtarget_pars_vertex:w_,morphtarget_vertex:R_,normal_fragment_begin:C_,normal_fragment_maps:P_,normal_pars_fragment:I_,normal_pars_vertex:D_,normal_vertex:L_,normalmap_pars_fragment:N_,clearcoat_normal_fragment_begin:U_,clearcoat_normal_fragment_maps:O_,clearcoat_pars_fragment:F_,iridescence_pars_fragment:B_,opaque_fragment:k_,packing:H_,premultiplied_alpha_fragment:z_,project_vertex:G_,dithering_fragment:V_,dithering_pars_fragment:W_,roughnessmap_fragment:$_,roughnessmap_pars_fragment:X_,shadowmap_pars_fragment:Y_,shadowmap_pars_vertex:q_,shadowmap_vertex:j_,shadowmask_pars_fragment:K_,skinbase_vertex:Z_,skinning_pars_vertex:J_,skinning_vertex:Q_,skinnormal_vertex:tv,specularmap_fragment:ev,specularmap_pars_fragment:nv,tonemapping_fragment:iv,tonemapping_pars_fragment:rv,transmission_fragment:sv,transmission_pars_fragment:ov,uv_pars_fragment:av,uv_pars_vertex:cv,uv_vertex:lv,worldpos_vertex:uv,background_vert:hv,background_frag:dv,backgroundCube_vert:fv,backgroundCube_frag:pv,cube_vert:mv,cube_frag:gv,depth_vert:_v,depth_frag:vv,distanceRGBA_vert:Sv,distanceRGBA_frag:xv,equirect_vert:Ev,equirect_frag:yv,linedashed_vert:Mv,linedashed_frag:Tv,meshbasic_vert:bv,meshbasic_frag:Av,meshlambert_vert:wv,meshlambert_frag:Rv,meshmatcap_vert:Cv,meshmatcap_frag:Pv,meshnormal_vert:Iv,meshnormal_frag:Dv,meshphong_vert:Lv,meshphong_frag:Nv,meshphysical_vert:Uv,meshphysical_frag:Ov,meshtoon_vert:Fv,meshtoon_frag:Bv,points_vert:kv,points_frag:Hv,shadow_vert:zv,shadow_frag:Gv,sprite_vert:Vv,sprite_frag:Wv},nt={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Lt}},envmap:{envMap:{value:null},envMapRotation:{value:new Lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Lt},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0},uvTransform:{value:new Lt}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}}},Sn={basic:{uniforms:Le([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:Le([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:Le([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:Le([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:Le([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:Le([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:Le([nt.points,nt.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:Le([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:Le([nt.common,nt.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:Le([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:Le([nt.sprite,nt.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new Lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Lt}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distanceRGBA:{uniforms:Le([nt.common,nt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distanceRGBA_vert,fragmentShader:Ut.distanceRGBA_frag},shadow:{uniforms:Le([nt.lights,nt.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};Sn.physical={uniforms:Le([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Lt},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Lt},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Lt},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Lt},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Lt},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Lt}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};const Vs={r:0,b:0,g:0},mi=new Mn,$v=new fe;function Xv(n,t,e,i,r,s,o){const a=new Bt(0);let c=s===!0?0:1,l,u,h=null,d=0,p=null;function g(T){let E=T.isScene===!0?T.background:null;return E&&E.isTexture&&(E=(T.backgroundBlurriness>0?e:t).get(E)),E}function S(T){let E=!1;const L=g(T);L===null?f(a,c):L&&L.isColor&&(f(L,1),E=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(T,E){const L=g(E);L&&(L.isCubeTexture||L.mapping===Do)?(u===void 0&&(u=new ke(new Ri(1,1,1),new Ne({name:"BackgroundCubeMaterial",uniforms:mr(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:ze,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,w,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),mi.copy(E.backgroundRotation),mi.x*=-1,mi.y*=-1,mi.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),u.material.uniforms.envMap.value=L,u.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4($v.makeRotationFromEuler(mi)),u.material.toneMapped=Yt.getTransfer(L.colorSpace)!==te,(h!==L||d!==L.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=L,d=L.version,p=n.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):L&&L.isTexture&&(l===void 0&&(l=new ke(new Lo(2,2),new Ne({name:"BackgroundMaterial",uniforms:mr(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=L,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Yt.getTransfer(L.colorSpace)!==te,L.matrixAutoUpdate===!0&&L.updateMatrix(),l.material.uniforms.uvTransform.value.copy(L.matrix),(h!==L||d!==L.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,h=L,d=L.version,p=n.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function f(T,E){T.getRGB(Vs,Bd(n)),i.buffers.color.setClear(Vs.r,Vs.g,Vs.b,E,o)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,E=1){a.set(T),c=E,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,f(a,c)},render:S,addToRenderList:m,dispose:b}}function Yv(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(x,R,V,H,Y){let K=!1;const X=h(H,V,R);s!==X&&(s=X,l(s.object)),K=p(x,H,V,Y),K&&g(x,H,V,Y),Y!==null&&t.update(Y,n.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,E(x,R,V,H),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function c(){return n.createVertexArray()}function l(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function h(x,R,V){const H=V.wireframe===!0;let Y=i[x.id];Y===void 0&&(Y={},i[x.id]=Y);let K=Y[R.id];K===void 0&&(K={},Y[R.id]=K);let X=K[H];return X===void 0&&(X=d(c()),K[H]=X),X}function d(x){const R=[],V=[],H=[];for(let Y=0;Y<e;Y++)R[Y]=0,V[Y]=0,H[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:V,attributeDivisors:H,object:x,attributes:{},index:null}}function p(x,R,V,H){const Y=s.attributes,K=R.attributes;let X=0;const G=V.getAttributes();for(const k in G)if(G[k].location>=0){const rt=Y[k];let vt=K[k];if(vt===void 0&&(k==="instanceMatrix"&&x.instanceMatrix&&(vt=x.instanceMatrix),k==="instanceColor"&&x.instanceColor&&(vt=x.instanceColor)),rt===void 0||rt.attribute!==vt||vt&&rt.data!==vt.data)return!0;X++}return s.attributesNum!==X||s.index!==H}function g(x,R,V,H){const Y={},K=R.attributes;let X=0;const G=V.getAttributes();for(const k in G)if(G[k].location>=0){let rt=K[k];rt===void 0&&(k==="instanceMatrix"&&x.instanceMatrix&&(rt=x.instanceMatrix),k==="instanceColor"&&x.instanceColor&&(rt=x.instanceColor));const vt={};vt.attribute=rt,rt&&rt.data&&(vt.data=rt.data),Y[k]=vt,X++}s.attributes=Y,s.attributesNum=X,s.index=H}function S(){const x=s.newAttributes;for(let R=0,V=x.length;R<V;R++)x[R]=0}function m(x){f(x,0)}function f(x,R){const V=s.newAttributes,H=s.enabledAttributes,Y=s.attributeDivisors;V[x]=1,H[x]===0&&(n.enableVertexAttribArray(x),H[x]=1),Y[x]!==R&&(n.vertexAttribDivisor(x,R),Y[x]=R)}function b(){const x=s.newAttributes,R=s.enabledAttributes;for(let V=0,H=R.length;V<H;V++)R[V]!==x[V]&&(n.disableVertexAttribArray(V),R[V]=0)}function T(x,R,V,H,Y,K,X){X===!0?n.vertexAttribIPointer(x,R,V,Y,K):n.vertexAttribPointer(x,R,V,H,Y,K)}function E(x,R,V,H){S();const Y=H.attributes,K=V.getAttributes(),X=R.defaultAttributeValues;for(const G in K){const k=K[G];if(k.location>=0){let et=Y[G];if(et===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(et=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(et=x.instanceColor)),et!==void 0){const rt=et.normalized,vt=et.itemSize,Ot=t.get(et);if(Ot===void 0)continue;const jt=Ot.buffer,W=Ot.type,tt=Ot.bytesPerElement,gt=W===n.INT||W===n.UNSIGNED_INT||et.gpuType===al;if(et.isInterleavedBufferAttribute){const st=et.data,Tt=st.stride,qt=et.offset;if(st.isInstancedInterleavedBuffer){for(let wt=0;wt<k.locationSize;wt++)f(k.location+wt,st.meshPerAttribute);x.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let wt=0;wt<k.locationSize;wt++)m(k.location+wt);n.bindBuffer(n.ARRAY_BUFFER,jt);for(let wt=0;wt<k.locationSize;wt++)T(k.location+wt,vt/k.locationSize,W,rt,Tt*tt,(qt+vt/k.locationSize*wt)*tt,gt)}else{if(et.isInstancedBufferAttribute){for(let st=0;st<k.locationSize;st++)f(k.location+st,et.meshPerAttribute);x.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let st=0;st<k.locationSize;st++)m(k.location+st);n.bindBuffer(n.ARRAY_BUFFER,jt);for(let st=0;st<k.locationSize;st++)T(k.location+st,vt/k.locationSize,W,rt,vt*tt,vt/k.locationSize*st*tt,gt)}}else if(X!==void 0){const rt=X[G];if(rt!==void 0)switch(rt.length){case 2:n.vertexAttrib2fv(k.location,rt);break;case 3:n.vertexAttrib3fv(k.location,rt);break;case 4:n.vertexAttrib4fv(k.location,rt);break;default:n.vertexAttrib1fv(k.location,rt)}}}}b()}function L(){U();for(const x in i){const R=i[x];for(const V in R){const H=R[V];for(const Y in H)u(H[Y].object),delete H[Y];delete R[V]}delete i[x]}}function C(x){if(i[x.id]===void 0)return;const R=i[x.id];for(const V in R){const H=R[V];for(const Y in H)u(H[Y].object),delete H[Y];delete R[V]}delete i[x.id]}function w(x){for(const R in i){const V=i[R];if(V[x.id]===void 0)continue;const H=V[x.id];for(const Y in H)u(H[Y].object),delete H[Y];delete V[x.id]}}function U(){y(),o=!0,s!==r&&(s=r,l(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:U,resetDefaultState:y,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfProgram:w,initAttributes:S,enableAttribute:m,disableUnusedAttributes:b}}function qv(n,t,e){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),e.update(u,i,1)}function o(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),e.update(u,i,h))}function a(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];e.update(p,i,1)}function c(l,u,h,d){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,u,0,d,0,h);let g=0;for(let S=0;S<h;S++)g+=u[S]*d[S];e.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function jv(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==ln&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const U=w===kn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Wn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==On&&!U)}function c(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:b,maxVaryings:T,maxFragmentUniforms:E,vertexTextures:L,maxSamples:C}}function Kv(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new Jn,a=new Lt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,S=h.clipIntersection,m=h.clipShadows,f=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const b=s?0:i,T=b*4;let E=f.clippingState||null;c.value=E,E=u(g,d,T,p);for(let L=0;L!==T;++L)E[L]=e[L];f.clippingState=E,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,d,p,g){const S=h!==null?h.length:0;let m=null;if(S!==0){if(m=c.value,g!==!0||m===null){const f=p+S*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<f)&&(m=new Float32Array(f));for(let T=0,E=p;T!==S;++T,E+=4)o.copy(h[T]).applyMatrix4(b,a),o.normal.toArray(m,E),m[E+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,m}}function Zv(n){let t=new WeakMap;function e(o,a){return a===Ja?o.mapping=dr:a===Qa&&(o.mapping=fr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ja||a===Qa)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Xm(c.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}const ir=4,Du=[.125,.215,.35,.446,.526,.582],Si=20,xa=new xl,Lu=new Bt;let Ea=null,ya=0,Ma=0,Ta=!1;const _i=(1+Math.sqrt(5))/2,Ji=1/_i,Nu=[new N(-_i,Ji,0),new N(_i,Ji,0),new N(-Ji,0,_i),new N(Ji,0,_i),new N(0,_i,-Ji),new N(0,_i,Ji),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],Jv=new N;class Uu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100,s={}){const{size:o=256,position:a=Jv}=s;Ea=this._renderer.getRenderTarget(),ya=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),Ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,r,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ea,ya,Ma),this._renderer.xr.enabled=Ta,t.scissorTest=!1,Ws(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===dr||t.mapping===fr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ea=this._renderer.getRenderTarget(),ya=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),Ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:kn,format:ln,colorSpace:pr,depthBuffer:!1},r=Ou(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ou(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qv(s)),this._blurMaterial=tS(s,t,e)}return r}_compileMaterial(t){const e=new ke(this._lodPlanes[0],t);this._renderer.compile(e,xa)}_sceneToCubeUV(t,e,i,r,s){const c=new Je(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(Lu),h.toneMapping=ni,h.autoClear=!1;const g=new gl({name:"PMREM.Background",side:ze,depthWrite:!1,depthTest:!1}),S=new ke(new Ri,g);let m=!1;const f=t.background;f?f.isColor&&(g.color.copy(f),t.background=null,m=!0):(g.color.copy(Lu),m=!0);for(let b=0;b<6;b++){const T=b%3;T===0?(c.up.set(0,l[b],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[b],s.y,s.z)):T===1?(c.up.set(0,0,l[b]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[b],s.z)):(c.up.set(0,l[b],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[b]));const E=this._cubeSize;Ws(r,T*E,b>2?E:0,E,E),h.setRenderTarget(r),m&&h.render(S,c),h.render(t,c)}S.geometry.dispose(),S.material.dispose(),h.toneMapping=p,h.autoClear=d,t.background=f}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===dr||t.mapping===fr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fu());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ke(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;Ws(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,xa)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Nu[(r-s-1)%Nu.length];this._blur(t,s-1,s,o,a)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ke(this._lodPlanes[r],l),d=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Si-1),S=s/g,m=isFinite(s)?1+Math.floor(u*S):Si;m>Si&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Si}`);const f=[];let b=0;for(let w=0;w<Si;++w){const U=w/S,y=Math.exp(-U*U/2);f.push(y),w===0?b+=y:w<m&&(b+=2*y)}for(let w=0;w<f.length;w++)f[w]=f[w]/b;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:T}=this;d.dTheta.value=g,d.mipInt.value=T-i;const E=this._sizeLods[r],L=3*E*(r>T-ir?r-T+ir:0),C=4*(this._cubeSize-E);Ws(e,L,C,3*E,2*E),c.setRenderTarget(e),c.render(h,xa)}}function Qv(n){const t=[],e=[],i=[];let r=n;const s=n-ir+1+Du.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let c=1/a;o>n-ir?c=Du[o-n+ir-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,S=3,m=2,f=1,b=new Float32Array(S*g*p),T=new Float32Array(m*g*p),E=new Float32Array(f*g*p);for(let C=0;C<p;C++){const w=C%3*2/3-1,U=C>2?0:-1,y=[w,U,0,w+2/3,U,0,w+2/3,U+1,0,w,U,0,w+2/3,U+1,0,w,U+1,0];b.set(y,S*g*C),T.set(d,m*g*C);const x=[C,C,C,C,C,C];E.set(x,f*g*C)}const L=new $n;L.setAttribute("position",new En(b,S)),L.setAttribute("uv",new En(T,m)),L.setAttribute("faceIndex",new En(E,f)),t.push(L),r>ir&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Ou(n,t,e){const i=new dn(n,t,e);return i.texture.mapping=Do,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ws(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function tS(n,t,e){const i=new Float32Array(Si),r=new N(0,1,0);return new Ne({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:El(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Fu(){return new Ne({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:El(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Bu(){return new Ne({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:El(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function El(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function eS(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ja||c===Qa,u=c===dr||c===fr;if(l||u){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Uu(n)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return l&&p&&p.height>0||u&&p&&r(p)?(e===null&&(e=new Uu(n)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function nS(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&fo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function iS(n,t,e,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(t.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,e.memory.geometries++),d}function c(h){const d=h.attributes;for(const p in d)t.update(d[p],n.ARRAY_BUFFER)}function l(h){const d=[],p=h.index,g=h.attributes.position;let S=0;if(p!==null){const b=p.array;S=p.version;for(let T=0,E=b.length;T<E;T+=3){const L=b[T+0],C=b[T+1],w=b[T+2];d.push(L,C,C,w,w,L)}}else if(g!==void 0){const b=g.array;S=g.version;for(let T=0,E=b.length/3-1;T<E;T+=3){const L=T+0,C=T+1,w=T+2;d.push(L,C,C,w,w,L)}}else return;const m=new(Id(d)?Fd:Od)(d,1);m.version=S;const f=s.get(h);f&&t.remove(f),s.set(h,m)}function u(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function rS(n,t,e){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,p){n.drawElements(i,p,s,d*o),e.update(p,i,1)}function l(d,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,d*o,g),e.update(p,i,g))}function u(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,i,1)}function h(d,p,g,S){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/o,p[f],S[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,S,0,g);let f=0;for(let b=0;b<g;b++)f+=p[b]*S[b];e.update(f,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function sS(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function oS(n,t,e){const i=new WeakMap,r=new de;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let x=function(){U.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var p=x;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,S=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let E=0;g===!0&&(E=1),S===!0&&(E=2),m===!0&&(E=3);let L=a.attributes.position.count*E,C=1;L>t.maxTextureSize&&(C=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const w=new Float32Array(L*C*4*h),U=new Dd(w,L,C,h);U.type=On,U.needsUpdate=!0;const y=E*4;for(let R=0;R<h;R++){const V=f[R],H=b[R],Y=T[R],K=L*C*4*R;for(let X=0;X<V.count;X++){const G=X*y;g===!0&&(r.fromBufferAttribute(V,X),w[K+G+0]=r.x,w[K+G+1]=r.y,w[K+G+2]=r.z,w[K+G+3]=0),S===!0&&(r.fromBufferAttribute(H,X),w[K+G+4]=r.x,w[K+G+5]=r.y,w[K+G+6]=r.z,w[K+G+7]=0),m===!0&&(r.fromBufferAttribute(Y,X),w[K+G+8]=r.x,w[K+G+9]=r.y,w[K+G+10]=r.z,w[K+G+11]=Y.itemSize===4?r.w:1)}}d={count:h,texture:U,size:new yt(L,C)},i.set(a,d),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const S=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",S),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function aS(n,t,e,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,h=t.get(c,u);if(r.get(h)!==l&&(t.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return h}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}const Wd=new Ue,ku=new zd(1,1),$d=new Dd,Xd=new Pm,Yd=new Hd,Hu=[],zu=[],Gu=new Float32Array(16),Vu=new Float32Array(9),Wu=new Float32Array(4);function br(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=Hu[r];if(s===void 0&&(s=new Float32Array(r),Hu[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function Ee(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ye(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function No(n,t){let e=zu[t];e===void 0&&(e=new Int32Array(t),zu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function cS(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function lS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;n.uniform2fv(this.addr,t),ye(e,t)}}function uS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;n.uniform3fv(this.addr,t),ye(e,t)}}function hS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;n.uniform4fv(this.addr,t),ye(e,t)}}function dS(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(Ee(e,i))return;Wu.set(i),n.uniformMatrix2fv(this.addr,!1,Wu),ye(e,i)}}function fS(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(Ee(e,i))return;Vu.set(i),n.uniformMatrix3fv(this.addr,!1,Vu),ye(e,i)}}function pS(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(Ee(e,i))return;Gu.set(i),n.uniformMatrix4fv(this.addr,!1,Gu),ye(e,i)}}function mS(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function gS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;n.uniform2iv(this.addr,t),ye(e,t)}}function _S(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;n.uniform3iv(this.addr,t),ye(e,t)}}function vS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;n.uniform4iv(this.addr,t),ye(e,t)}}function SS(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function xS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;n.uniform2uiv(this.addr,t),ye(e,t)}}function ES(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;n.uniform3uiv(this.addr,t),ye(e,t)}}function yS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;n.uniform4uiv(this.addr,t),ye(e,t)}}function MS(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(ku.compareFunction=Pd,s=ku):s=Wd,e.setTexture2D(t||s,r)}function TS(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Xd,r)}function bS(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Yd,r)}function AS(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||$d,r)}function wS(n){switch(n){case 5126:return cS;case 35664:return lS;case 35665:return uS;case 35666:return hS;case 35674:return dS;case 35675:return fS;case 35676:return pS;case 5124:case 35670:return mS;case 35667:case 35671:return gS;case 35668:case 35672:return _S;case 35669:case 35673:return vS;case 5125:return SS;case 36294:return xS;case 36295:return ES;case 36296:return yS;case 35678:case 36198:case 36298:case 36306:case 35682:return MS;case 35679:case 36299:case 36307:return TS;case 35680:case 36300:case 36308:case 36293:return bS;case 36289:case 36303:case 36311:case 36292:return AS}}function RS(n,t){n.uniform1fv(this.addr,t)}function CS(n,t){const e=br(t,this.size,2);n.uniform2fv(this.addr,e)}function PS(n,t){const e=br(t,this.size,3);n.uniform3fv(this.addr,e)}function IS(n,t){const e=br(t,this.size,4);n.uniform4fv(this.addr,e)}function DS(n,t){const e=br(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function LS(n,t){const e=br(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function NS(n,t){const e=br(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function US(n,t){n.uniform1iv(this.addr,t)}function OS(n,t){n.uniform2iv(this.addr,t)}function FS(n,t){n.uniform3iv(this.addr,t)}function BS(n,t){n.uniform4iv(this.addr,t)}function kS(n,t){n.uniform1uiv(this.addr,t)}function HS(n,t){n.uniform2uiv(this.addr,t)}function zS(n,t){n.uniform3uiv(this.addr,t)}function GS(n,t){n.uniform4uiv(this.addr,t)}function VS(n,t,e){const i=this.cache,r=t.length,s=No(e,r);Ee(i,s)||(n.uniform1iv(this.addr,s),ye(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||Wd,s[o])}function WS(n,t,e){const i=this.cache,r=t.length,s=No(e,r);Ee(i,s)||(n.uniform1iv(this.addr,s),ye(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Xd,s[o])}function $S(n,t,e){const i=this.cache,r=t.length,s=No(e,r);Ee(i,s)||(n.uniform1iv(this.addr,s),ye(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Yd,s[o])}function XS(n,t,e){const i=this.cache,r=t.length,s=No(e,r);Ee(i,s)||(n.uniform1iv(this.addr,s),ye(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||$d,s[o])}function YS(n){switch(n){case 5126:return RS;case 35664:return CS;case 35665:return PS;case 35666:return IS;case 35674:return DS;case 35675:return LS;case 35676:return NS;case 5124:case 35670:return US;case 35667:case 35671:return OS;case 35668:case 35672:return FS;case 35669:case 35673:return BS;case 5125:return kS;case 36294:return HS;case 36295:return zS;case 36296:return GS;case 35678:case 36198:case 36298:case 36306:case 35682:return VS;case 35679:case 36299:case 36307:return WS;case 35680:case 36300:case 36308:case 36293:return $S;case 36289:case 36303:case 36311:case 36292:return XS}}class qS{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=wS(e.type)}}class jS{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=YS(e.type)}}class KS{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const ba=/(\w+)(\])?(\[|\.)?/g;function $u(n,t){n.seq.push(t),n.map[t.id]=t}function ZS(n,t,e){const i=n.name,r=i.length;for(ba.lastIndex=0;;){const s=ba.exec(i),o=ba.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){$u(e,l===void 0?new qS(a,n,t):new jS(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new KS(a),$u(e,h)),e=h}}}class po{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);ZS(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function Xu(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const JS=37297;let QS=0;function t0(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const Yu=new Lt;function e0(n){Yt._getMatrix(Yu,Yt.workingColorSpace,n);const t=`mat3( ${Yu.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(n)){case Eo:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function qu(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+t0(n.getShaderSource(t),o)}else return r}function n0(n,t){const e=e0(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function i0(n,t){let e;switch(t){case zp:e="Linear";break;case Gp:e="Reinhard";break;case Vp:e="Cineon";break;case Wp:e="ACESFilmic";break;case Xp:e="AgX";break;case Yp:e="Neutral";break;case $p:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const $s=new N;function r0(){Yt.getLuminanceCoefficients($s);const n=$s.x.toFixed(4),t=$s.y.toFixed(4),e=$s.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function s0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gr).join(`
`)}function o0(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function a0(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Gr(n){return n!==""}function ju(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ku(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const c0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cc(n){return n.replace(c0,u0)}const l0=new Map;function u0(n,t){let e=Ut[t];if(e===void 0){const i=l0.get(t);if(i!==void 0)e=Ut[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Cc(e)}const h0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zu(n){return n.replace(h0,d0)}function d0(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ju(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function f0(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===gd?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===xp?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Pn&&(t="SHADOWMAP_TYPE_VSM"),t}function p0(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case dr:case fr:t="ENVMAP_TYPE_CUBE";break;case Do:t="ENVMAP_TYPE_CUBE_UV";break}return t}function m0(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case fr:t="ENVMAP_MODE_REFRACTION";break}return t}function g0(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case _d:t="ENVMAP_BLENDING_MULTIPLY";break;case kp:t="ENVMAP_BLENDING_MIX";break;case Hp:t="ENVMAP_BLENDING_ADD";break}return t}function _0(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function v0(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=f0(e),l=p0(e),u=m0(e),h=g0(e),d=_0(e),p=s0(e),g=o0(s),S=r.createProgram();let m,f,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Gr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Gr).join(`
`),f.length>0&&(f+=`
`)):(m=[Ju(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gr).join(`
`),f=[Ju(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ni?"#define TONE_MAPPING":"",e.toneMapping!==ni?Ut.tonemapping_pars_fragment:"",e.toneMapping!==ni?i0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,n0("linearToOutputTexel",e.outputColorSpace),r0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Gr).join(`
`)),o=Cc(o),o=ju(o,e),o=Ku(o,e),a=Cc(a),a=ju(a,e),a=Ku(a,e),o=Zu(o),a=Zu(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===au?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===au?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const T=b+m+o,E=b+f+a,L=Xu(r,r.VERTEX_SHADER,T),C=Xu(r,r.FRAGMENT_SHADER,E);r.attachShader(S,L),r.attachShader(S,C),e.index0AttributeName!==void 0?r.bindAttribLocation(S,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function w(R){if(n.debug.checkShaderErrors){const V=r.getProgramInfoLog(S).trim(),H=r.getShaderInfoLog(L).trim(),Y=r.getShaderInfoLog(C).trim();let K=!0,X=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(K=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,S,L,C);else{const G=qu(r,L,"vertex"),k=qu(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+V+`
`+G+`
`+k)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(H===""||Y==="")&&(X=!1);X&&(R.diagnostics={runnable:K,programLog:V,vertexShader:{log:H,prefix:m},fragmentShader:{log:Y,prefix:f}})}r.deleteShader(L),r.deleteShader(C),U=new po(r,S),y=a0(r,S)}let U;this.getUniforms=function(){return U===void 0&&w(this),U};let y;this.getAttributes=function(){return y===void 0&&w(this),y};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(S,JS)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=QS++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=L,this.fragmentShader=C,this}let S0=0;class x0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new E0(t),e.set(t,i)),i}}class E0{constructor(t){this.id=S0++,this.code=t,this.usedTimes=0}}function y0(n,t,e,i,r,s,o){const a=new Nd,c=new x0,l=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,x,R,V,H){const Y=V.fog,K=H.geometry,X=y.isMeshStandardMaterial?V.environment:null,G=(y.isMeshStandardMaterial?e:t).get(y.envMap||X),k=G&&G.mapping===Do?G.image.height:null,et=g[y.type];y.precision!==null&&(p=r.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const rt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,vt=rt!==void 0?rt.length:0;let Ot=0;K.morphAttributes.position!==void 0&&(Ot=1),K.morphAttributes.normal!==void 0&&(Ot=2),K.morphAttributes.color!==void 0&&(Ot=3);let jt,W,tt,gt;if(et){const Qt=Sn[et];jt=Qt.vertexShader,W=Qt.fragmentShader}else jt=y.vertexShader,W=y.fragmentShader,c.update(y),tt=c.getVertexShaderID(y),gt=c.getFragmentShaderID(y);const st=n.getRenderTarget(),Tt=n.state.buffers.depth.getReversed(),qt=H.isInstancedMesh===!0,wt=H.isBatchedMesh===!0,pe=!!y.map,ae=!!y.matcap,kt=!!G,A=!!y.aoMap,Ye=!!y.lightMap,Gt=!!y.bumpMap,Ht=!!y.normalMap,xt=!!y.displacementMap,se=!!y.emissiveMap,St=!!y.metalnessMap,M=!!y.roughnessMap,_=y.anisotropy>0,O=y.clearcoat>0,q=y.dispersion>0,Z=y.iridescence>0,$=y.sheen>0,_t=y.transmission>0,ot=_&&!!y.anisotropyMap,dt=O&&!!y.clearcoatMap,Vt=O&&!!y.clearcoatNormalMap,Q=O&&!!y.clearcoatRoughnessMap,ft=Z&&!!y.iridescenceMap,bt=Z&&!!y.iridescenceThicknessMap,Ct=$&&!!y.sheenColorMap,pt=$&&!!y.sheenRoughnessMap,zt=!!y.specularMap,Nt=!!y.specularColorMap,ie=!!y.specularIntensityMap,P=_t&&!!y.transmissionMap,at=_t&&!!y.thicknessMap,z=!!y.gradientMap,j=!!y.alphaMap,lt=y.alphaTest>0,ct=!!y.alphaHash,Dt=!!y.extensions;let le=ni;y.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(le=n.toneMapping);const Ae={shaderID:et,shaderType:y.type,shaderName:y.name,vertexShader:jt,fragmentShader:W,defines:y.defines,customVertexShaderID:tt,customFragmentShaderID:gt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:wt,batchingColor:wt&&H._colorsTexture!==null,instancing:qt,instancingColor:qt&&H.instanceColor!==null,instancingMorph:qt&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:st===null?n.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:pr,alphaToCoverage:!!y.alphaToCoverage,map:pe,matcap:ae,envMap:kt,envMapMode:kt&&G.mapping,envMapCubeUVHeight:k,aoMap:A,lightMap:Ye,bumpMap:Gt,normalMap:Ht,displacementMap:d&&xt,emissiveMap:se,normalMapObjectSpace:Ht&&y.normalMapType===Zp,normalMapTangentSpace:Ht&&y.normalMapType===Cd,metalnessMap:St,roughnessMap:M,anisotropy:_,anisotropyMap:ot,clearcoat:O,clearcoatMap:dt,clearcoatNormalMap:Vt,clearcoatRoughnessMap:Q,dispersion:q,iridescence:Z,iridescenceMap:ft,iridescenceThicknessMap:bt,sheen:$,sheenColorMap:Ct,sheenRoughnessMap:pt,specularMap:zt,specularColorMap:Nt,specularIntensityMap:ie,transmission:_t,transmissionMap:P,thicknessMap:at,gradientMap:z,opaque:y.transparent===!1&&y.blending===ar&&y.alphaToCoverage===!1,alphaMap:j,alphaTest:lt,alphaHash:ct,combine:y.combine,mapUv:pe&&S(y.map.channel),aoMapUv:A&&S(y.aoMap.channel),lightMapUv:Ye&&S(y.lightMap.channel),bumpMapUv:Gt&&S(y.bumpMap.channel),normalMapUv:Ht&&S(y.normalMap.channel),displacementMapUv:xt&&S(y.displacementMap.channel),emissiveMapUv:se&&S(y.emissiveMap.channel),metalnessMapUv:St&&S(y.metalnessMap.channel),roughnessMapUv:M&&S(y.roughnessMap.channel),anisotropyMapUv:ot&&S(y.anisotropyMap.channel),clearcoatMapUv:dt&&S(y.clearcoatMap.channel),clearcoatNormalMapUv:Vt&&S(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&S(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&S(y.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&S(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&S(y.sheenColorMap.channel),sheenRoughnessMapUv:pt&&S(y.sheenRoughnessMap.channel),specularMapUv:zt&&S(y.specularMap.channel),specularColorMapUv:Nt&&S(y.specularColorMap.channel),specularIntensityMapUv:ie&&S(y.specularIntensityMap.channel),transmissionMapUv:P&&S(y.transmissionMap.channel),thicknessMapUv:at&&S(y.thicknessMap.channel),alphaMapUv:j&&S(y.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Ht||_),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!K.attributes.uv&&(pe||j),fog:!!Y,useFog:y.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Tt,skinning:H.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:Ot,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:le,decodeVideoTexture:pe&&y.map.isVideoTexture===!0&&Yt.getTransfer(y.map.colorSpace)===te,decodeVideoTextureEmissive:se&&y.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(y.emissiveMap.colorSpace)===te,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Un,flipSided:y.side===ze,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Dt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&y.extensions.multiDraw===!0||wt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ae.vertexUv1s=l.has(1),Ae.vertexUv2s=l.has(2),Ae.vertexUv3s=l.has(3),l.clear(),Ae}function f(y){const x=[];if(y.shaderID?x.push(y.shaderID):(x.push(y.customVertexShaderID),x.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)x.push(R),x.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(b(x,y),T(x,y),x.push(n.outputColorSpace)),x.push(y.customProgramCacheKey),x.join()}function b(y,x){y.push(x.precision),y.push(x.outputColorSpace),y.push(x.envMapMode),y.push(x.envMapCubeUVHeight),y.push(x.mapUv),y.push(x.alphaMapUv),y.push(x.lightMapUv),y.push(x.aoMapUv),y.push(x.bumpMapUv),y.push(x.normalMapUv),y.push(x.displacementMapUv),y.push(x.emissiveMapUv),y.push(x.metalnessMapUv),y.push(x.roughnessMapUv),y.push(x.anisotropyMapUv),y.push(x.clearcoatMapUv),y.push(x.clearcoatNormalMapUv),y.push(x.clearcoatRoughnessMapUv),y.push(x.iridescenceMapUv),y.push(x.iridescenceThicknessMapUv),y.push(x.sheenColorMapUv),y.push(x.sheenRoughnessMapUv),y.push(x.specularMapUv),y.push(x.specularColorMapUv),y.push(x.specularIntensityMapUv),y.push(x.transmissionMapUv),y.push(x.thicknessMapUv),y.push(x.combine),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.morphAttributeCount),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.numLightProbes),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}function T(y,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),y.push(a.mask)}function E(y){const x=g[y.type];let R;if(x){const V=Sn[x];R=Mo.clone(V.uniforms)}else R=y.uniforms;return R}function L(y,x){let R;for(let V=0,H=u.length;V<H;V++){const Y=u[V];if(Y.cacheKey===x){R=Y,++R.usedTimes;break}}return R===void 0&&(R=new v0(n,x,y,s),u.push(R)),R}function C(y){if(--y.usedTimes===0){const x=u.indexOf(y);u[x]=u[u.length-1],u.pop(),y.destroy()}}function w(y){c.remove(y)}function U(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:E,acquireProgram:L,releaseProgram:C,releaseShaderCache:w,programs:u,dispose:U}}function M0(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function T0(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Qu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function th(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(h,d,p,g,S,m){let f=n[t];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:S,group:m},n[t]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=S,f.group=m),t++,f}function a(h,d,p,g,S,m){const f=o(h,d,p,g,S,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):e.push(f)}function c(h,d,p,g,S,m){const f=o(h,d,p,g,S,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):e.unshift(f)}function l(h,d){e.length>1&&e.sort(h||T0),i.length>1&&i.sort(d||Qu),r.length>1&&r.sort(d||Qu)}function u(){for(let h=t,d=n.length;h<d;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function b0(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new th,n.set(i,[o])):r>=s.length?(o=new th,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function A0(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Bt};break;case"SpotLight":e={position:new N,direction:new N,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new N,halfWidth:new N,halfHeight:new N};break}return n[t.id]=e,e}}}function w0(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let R0=0;function C0(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function P0(n){const t=new A0,e=w0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new N);const r=new N,s=new fe,o=new fe;function a(l){let u=0,h=0,d=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let p=0,g=0,S=0,m=0,f=0,b=0,T=0,E=0,L=0,C=0,w=0;l.sort(C0);for(let y=0,x=l.length;y<x;y++){const R=l[y],V=R.color,H=R.intensity,Y=R.distance,K=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=V.r*H,h+=V.g*H,d+=V.b*H;else if(R.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(R.sh.coefficients[X],H);w++}else if(R.isDirectionalLight){const X=t.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const G=R.shadow,k=e.get(R);k.shadowIntensity=G.intensity,k.shadowBias=G.bias,k.shadowNormalBias=G.normalBias,k.shadowRadius=G.radius,k.shadowMapSize=G.mapSize,i.directionalShadow[p]=k,i.directionalShadowMap[p]=K,i.directionalShadowMatrix[p]=R.shadow.matrix,b++}i.directional[p]=X,p++}else if(R.isSpotLight){const X=t.get(R);X.position.setFromMatrixPosition(R.matrixWorld),X.color.copy(V).multiplyScalar(H),X.distance=Y,X.coneCos=Math.cos(R.angle),X.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),X.decay=R.decay,i.spot[S]=X;const G=R.shadow;if(R.map&&(i.spotLightMap[L]=R.map,L++,G.updateMatrices(R),R.castShadow&&C++),i.spotLightMatrix[S]=G.matrix,R.castShadow){const k=e.get(R);k.shadowIntensity=G.intensity,k.shadowBias=G.bias,k.shadowNormalBias=G.normalBias,k.shadowRadius=G.radius,k.shadowMapSize=G.mapSize,i.spotShadow[S]=k,i.spotShadowMap[S]=K,E++}S++}else if(R.isRectAreaLight){const X=t.get(R);X.color.copy(V).multiplyScalar(H),X.halfWidth.set(R.width*.5,0,0),X.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=X,m++}else if(R.isPointLight){const X=t.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),X.distance=R.distance,X.decay=R.decay,R.castShadow){const G=R.shadow,k=e.get(R);k.shadowIntensity=G.intensity,k.shadowBias=G.bias,k.shadowNormalBias=G.normalBias,k.shadowRadius=G.radius,k.shadowMapSize=G.mapSize,k.shadowCameraNear=G.camera.near,k.shadowCameraFar=G.camera.far,i.pointShadow[g]=k,i.pointShadowMap[g]=K,i.pointShadowMatrix[g]=R.shadow.matrix,T++}i.point[g]=X,g++}else if(R.isHemisphereLight){const X=t.get(R);X.skyColor.copy(R.color).multiplyScalar(H),X.groundColor.copy(R.groundColor).multiplyScalar(H),i.hemi[f]=X,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=nt.LTC_FLOAT_1,i.rectAreaLTC2=nt.LTC_FLOAT_2):(i.rectAreaLTC1=nt.LTC_HALF_1,i.rectAreaLTC2=nt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const U=i.hash;(U.directionalLength!==p||U.pointLength!==g||U.spotLength!==S||U.rectAreaLength!==m||U.hemiLength!==f||U.numDirectionalShadows!==b||U.numPointShadows!==T||U.numSpotShadows!==E||U.numSpotMaps!==L||U.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=S,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=E+L-C,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=w,U.directionalLength=p,U.pointLength=g,U.spotLength=S,U.rectAreaLength=m,U.hemiLength=f,U.numDirectionalShadows=b,U.numPointShadows=T,U.numSpotShadows=E,U.numSpotMaps=L,U.numLightProbes=w,i.version=R0++)}function c(l,u){let h=0,d=0,p=0,g=0,S=0;const m=u.matrixWorldInverse;for(let f=0,b=l.length;f<b;f++){const T=l[f];if(T.isDirectionalLight){const E=i.directional[h];E.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),h++}else if(T.isSpotLight){const E=i.spot[p];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),p++}else if(T.isRectAreaLight){const E=i.rectArea[g];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(m),o.identity(),s.copy(T.matrixWorld),s.premultiply(m),o.extractRotation(s),E.halfWidth.set(T.width*.5,0,0),E.halfHeight.set(0,T.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(T.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(m),d++}else if(T.isHemisphereLight){const E=i.hemi[S];E.direction.setFromMatrixPosition(T.matrixWorld),E.direction.transformDirection(m),S++}}}return{setup:a,setupView:c,state:i}}function eh(n){const t=new P0(n),e=[],i=[];function r(u){l.camera=u,e.length=0,i.length=0}function s(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function I0(n){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new eh(n),t.set(r,[a])):s>=o.length?(a=new eh(n),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const D0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,L0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function N0(n,t,e){let i=new _l;const r=new yt,s=new yt,o=new de,a=new Zm({depthPacking:Kp}),c=new Jm,l={},u=e.maxTextureSize,h={[si]:ze,[ze]:si,[Un]:Un},d=new Ne({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:D0,fragmentShader:L0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new $n;g.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new ke(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gd;let f=this.type;this.render=function(C,w,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const y=n.getRenderTarget(),x=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),V=n.state;V.setBlending(Bn),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const H=f!==Pn&&this.type===Pn,Y=f===Pn&&this.type!==Pn;for(let K=0,X=C.length;K<X;K++){const G=C[K],k=G.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const et=k.getFrameExtents();if(r.multiply(et),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/et.x),r.x=s.x*et.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/et.y),r.y=s.y*et.y,k.mapSize.y=s.y)),k.map===null||H===!0||Y===!0){const vt=this.type!==Pn?{minFilter:hn,magFilter:hn}:{};k.map!==null&&k.map.dispose(),k.map=new dn(r.x,r.y,vt),k.map.texture.name=G.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();const rt=k.getViewportCount();for(let vt=0;vt<rt;vt++){const Ot=k.getViewport(vt);o.set(s.x*Ot.x,s.y*Ot.y,s.x*Ot.z,s.y*Ot.w),V.viewport(o),k.updateMatrices(G,vt),i=k.getFrustum(),E(w,U,k.camera,G,this.type)}k.isPointLightShadow!==!0&&this.type===Pn&&b(k,U),k.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(y,x,R)};function b(C,w){const U=t.update(S);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new dn(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(w,null,U,d,S,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(w,null,U,p,S,null)}function T(C,w,U,y){let x=null;const R=U.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)x=R;else if(x=U.isPointLight===!0?c:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const V=x.uuid,H=w.uuid;let Y=l[V];Y===void 0&&(Y={},l[V]=Y);let K=Y[H];K===void 0&&(K=x.clone(),Y[H]=K,w.addEventListener("dispose",L)),x=K}if(x.visible=w.visible,x.wireframe=w.wireframe,y===Pn?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:h[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,U.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const V=n.properties.get(x);V.light=U}return x}function E(C,w,U,y,x){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&x===Pn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,C.matrixWorld);const H=t.update(C),Y=C.material;if(Array.isArray(Y)){const K=H.groups;for(let X=0,G=K.length;X<G;X++){const k=K[X],et=Y[k.materialIndex];if(et&&et.visible){const rt=T(C,et,y,x);C.onBeforeShadow(n,C,w,U,H,rt,k),n.renderBufferDirect(U,null,H,rt,C,k),C.onAfterShadow(n,C,w,U,H,rt,k)}}}else if(Y.visible){const K=T(C,Y,y,x);C.onBeforeShadow(n,C,w,U,H,K,null),n.renderBufferDirect(U,null,H,K,C,null),C.onAfterShadow(n,C,w,U,H,K,null)}}const V=C.children;for(let H=0,Y=V.length;H<Y;H++)E(V[H],w,U,y,x)}function L(C){C.target.removeEventListener("dispose",L);for(const U in l){const y=l[U],x=C.target.uuid;x in y&&(y[x].dispose(),delete y[x])}}}const U0={[$a]:Xa,[Ya]:Ka,[qa]:Za,[hr]:ja,[Xa]:$a,[Ka]:Ya,[Za]:qa,[ja]:hr};function O0(n,t){function e(){let P=!1;const at=new de;let z=null;const j=new de(0,0,0,0);return{setMask:function(lt){z!==lt&&!P&&(n.colorMask(lt,lt,lt,lt),z=lt)},setLocked:function(lt){P=lt},setClear:function(lt,ct,Dt,le,Ae){Ae===!0&&(lt*=le,ct*=le,Dt*=le),at.set(lt,ct,Dt,le),j.equals(at)===!1&&(n.clearColor(lt,ct,Dt,le),j.copy(at))},reset:function(){P=!1,z=null,j.set(-1,0,0,0)}}}function i(){let P=!1,at=!1,z=null,j=null,lt=null;return{setReversed:function(ct){if(at!==ct){const Dt=t.get("EXT_clip_control");ct?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),at=ct;const le=lt;lt=null,this.setClear(le)}},getReversed:function(){return at},setTest:function(ct){ct?st(n.DEPTH_TEST):Tt(n.DEPTH_TEST)},setMask:function(ct){z!==ct&&!P&&(n.depthMask(ct),z=ct)},setFunc:function(ct){if(at&&(ct=U0[ct]),j!==ct){switch(ct){case $a:n.depthFunc(n.NEVER);break;case Xa:n.depthFunc(n.ALWAYS);break;case Ya:n.depthFunc(n.LESS);break;case hr:n.depthFunc(n.LEQUAL);break;case qa:n.depthFunc(n.EQUAL);break;case ja:n.depthFunc(n.GEQUAL);break;case Ka:n.depthFunc(n.GREATER);break;case Za:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}j=ct}},setLocked:function(ct){P=ct},setClear:function(ct){lt!==ct&&(at&&(ct=1-ct),n.clearDepth(ct),lt=ct)},reset:function(){P=!1,z=null,j=null,lt=null,at=!1}}}function r(){let P=!1,at=null,z=null,j=null,lt=null,ct=null,Dt=null,le=null,Ae=null;return{setTest:function(Qt){P||(Qt?st(n.STENCIL_TEST):Tt(n.STENCIL_TEST))},setMask:function(Qt){at!==Qt&&!P&&(n.stencilMask(Qt),at=Qt)},setFunc:function(Qt,nn,Tn){(z!==Qt||j!==nn||lt!==Tn)&&(n.stencilFunc(Qt,nn,Tn),z=Qt,j=nn,lt=Tn)},setOp:function(Qt,nn,Tn){(ct!==Qt||Dt!==nn||le!==Tn)&&(n.stencilOp(Qt,nn,Tn),ct=Qt,Dt=nn,le=Tn)},setLocked:function(Qt){P=Qt},setClear:function(Qt){Ae!==Qt&&(n.clearStencil(Qt),Ae=Qt)},reset:function(){P=!1,at=null,z=null,j=null,lt=null,ct=null,Dt=null,le=null,Ae=null}}}const s=new e,o=new i,a=new r,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,p=[],g=null,S=!1,m=null,f=null,b=null,T=null,E=null,L=null,C=null,w=new Bt(0,0,0),U=0,y=!1,x=null,R=null,V=null,H=null,Y=null;const K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,G=0;const k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(k)[1]),X=G>=1):k.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),X=G>=2);let et=null,rt={};const vt=n.getParameter(n.SCISSOR_BOX),Ot=n.getParameter(n.VIEWPORT),jt=new de().fromArray(vt),W=new de().fromArray(Ot);function tt(P,at,z,j){const lt=new Uint8Array(4),ct=n.createTexture();n.bindTexture(P,ct),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Dt=0;Dt<z;Dt++)P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY?n.texImage3D(at,0,n.RGBA,1,1,j,0,n.RGBA,n.UNSIGNED_BYTE,lt):n.texImage2D(at+Dt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,lt);return ct}const gt={};gt[n.TEXTURE_2D]=tt(n.TEXTURE_2D,n.TEXTURE_2D,1),gt[n.TEXTURE_CUBE_MAP]=tt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[n.TEXTURE_2D_ARRAY]=tt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),gt[n.TEXTURE_3D]=tt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),st(n.DEPTH_TEST),o.setFunc(hr),Gt(!1),Ht(nu),st(n.CULL_FACE),A(Bn);function st(P){u[P]!==!0&&(n.enable(P),u[P]=!0)}function Tt(P){u[P]!==!1&&(n.disable(P),u[P]=!1)}function qt(P,at){return h[P]!==at?(n.bindFramebuffer(P,at),h[P]=at,P===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=at),P===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=at),!0):!1}function wt(P,at){let z=p,j=!1;if(P){z=d.get(at),z===void 0&&(z=[],d.set(at,z));const lt=P.textures;if(z.length!==lt.length||z[0]!==n.COLOR_ATTACHMENT0){for(let ct=0,Dt=lt.length;ct<Dt;ct++)z[ct]=n.COLOR_ATTACHMENT0+ct;z.length=lt.length,j=!0}}else z[0]!==n.BACK&&(z[0]=n.BACK,j=!0);j&&n.drawBuffers(z)}function pe(P){return g!==P?(n.useProgram(P),g=P,!0):!1}const ae={[vi]:n.FUNC_ADD,[yp]:n.FUNC_SUBTRACT,[Mp]:n.FUNC_REVERSE_SUBTRACT};ae[Tp]=n.MIN,ae[bp]=n.MAX;const kt={[Ap]:n.ZERO,[wp]:n.ONE,[Rp]:n.SRC_COLOR,[Va]:n.SRC_ALPHA,[Np]:n.SRC_ALPHA_SATURATE,[Dp]:n.DST_COLOR,[Pp]:n.DST_ALPHA,[Cp]:n.ONE_MINUS_SRC_COLOR,[Wa]:n.ONE_MINUS_SRC_ALPHA,[Lp]:n.ONE_MINUS_DST_COLOR,[Ip]:n.ONE_MINUS_DST_ALPHA,[Up]:n.CONSTANT_COLOR,[Op]:n.ONE_MINUS_CONSTANT_COLOR,[Fp]:n.CONSTANT_ALPHA,[Bp]:n.ONE_MINUS_CONSTANT_ALPHA};function A(P,at,z,j,lt,ct,Dt,le,Ae,Qt){if(P===Bn){S===!0&&(Tt(n.BLEND),S=!1);return}if(S===!1&&(st(n.BLEND),S=!0),P!==Ep){if(P!==m||Qt!==y){if((f!==vi||E!==vi)&&(n.blendEquation(n.FUNC_ADD),f=vi,E=vi),Qt)switch(P){case ar:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ga:n.blendFunc(n.ONE,n.ONE);break;case iu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ru:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case ar:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ga:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case iu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ru:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}b=null,T=null,L=null,C=null,w.set(0,0,0),U=0,m=P,y=Qt}return}lt=lt||at,ct=ct||z,Dt=Dt||j,(at!==f||lt!==E)&&(n.blendEquationSeparate(ae[at],ae[lt]),f=at,E=lt),(z!==b||j!==T||ct!==L||Dt!==C)&&(n.blendFuncSeparate(kt[z],kt[j],kt[ct],kt[Dt]),b=z,T=j,L=ct,C=Dt),(le.equals(w)===!1||Ae!==U)&&(n.blendColor(le.r,le.g,le.b,Ae),w.copy(le),U=Ae),m=P,y=!1}function Ye(P,at){P.side===Un?Tt(n.CULL_FACE):st(n.CULL_FACE);let z=P.side===ze;at&&(z=!z),Gt(z),P.blending===ar&&P.transparent===!1?A(Bn):A(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),o.setFunc(P.depthFunc),o.setTest(P.depthTest),o.setMask(P.depthWrite),s.setMask(P.colorWrite);const j=P.stencilWrite;a.setTest(j),j&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),se(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?st(n.SAMPLE_ALPHA_TO_COVERAGE):Tt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(P){x!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),x=P)}function Ht(P){P!==vp?(st(n.CULL_FACE),P!==R&&(P===nu?n.cullFace(n.BACK):P===Sp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Tt(n.CULL_FACE),R=P}function xt(P){P!==V&&(X&&n.lineWidth(P),V=P)}function se(P,at,z){P?(st(n.POLYGON_OFFSET_FILL),(H!==at||Y!==z)&&(n.polygonOffset(at,z),H=at,Y=z)):Tt(n.POLYGON_OFFSET_FILL)}function St(P){P?st(n.SCISSOR_TEST):Tt(n.SCISSOR_TEST)}function M(P){P===void 0&&(P=n.TEXTURE0+K-1),et!==P&&(n.activeTexture(P),et=P)}function _(P,at,z){z===void 0&&(et===null?z=n.TEXTURE0+K-1:z=et);let j=rt[z];j===void 0&&(j={type:void 0,texture:void 0},rt[z]=j),(j.type!==P||j.texture!==at)&&(et!==z&&(n.activeTexture(z),et=z),n.bindTexture(P,at||gt[P]),j.type=P,j.texture=at)}function O(){const P=rt[et];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function q(){try{n.compressedTexImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Z(){try{n.compressedTexImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(){try{n.texSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _t(){try{n.texSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ot(){try{n.compressedTexSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function dt(){try{n.compressedTexSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Vt(){try{n.texStorage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{n.texStorage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ft(){try{n.texImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function bt(){try{n.texImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ct(P){jt.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),jt.copy(P))}function pt(P){W.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),W.copy(P))}function zt(P,at){let z=l.get(at);z===void 0&&(z=new WeakMap,l.set(at,z));let j=z.get(P);j===void 0&&(j=n.getUniformBlockIndex(at,P.name),z.set(P,j))}function Nt(P,at){const j=l.get(at).get(P);c.get(at)!==j&&(n.uniformBlockBinding(at,j,P.__bindingPointIndex),c.set(at,j))}function ie(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},et=null,rt={},h={},d=new WeakMap,p=[],g=null,S=!1,m=null,f=null,b=null,T=null,E=null,L=null,C=null,w=new Bt(0,0,0),U=0,y=!1,x=null,R=null,V=null,H=null,Y=null,jt.set(0,0,n.canvas.width,n.canvas.height),W.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:st,disable:Tt,bindFramebuffer:qt,drawBuffers:wt,useProgram:pe,setBlending:A,setMaterial:Ye,setFlipSided:Gt,setCullFace:Ht,setLineWidth:xt,setPolygonOffset:se,setScissorTest:St,activeTexture:M,bindTexture:_,unbindTexture:O,compressedTexImage2D:q,compressedTexImage3D:Z,texImage2D:ft,texImage3D:bt,updateUBOMapping:zt,uniformBlockBinding:Nt,texStorage2D:Vt,texStorage3D:Q,texSubImage2D:$,texSubImage3D:_t,compressedTexSubImage2D:ot,compressedTexSubImage3D:dt,scissor:Ct,viewport:pt,reset:ie}}function F0(n,t,e,i,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new yt,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,_){return p?new OffscreenCanvas(M,_):es("canvas")}function S(M,_,O){let q=1;const Z=St(M);if((Z.width>O||Z.height>O)&&(q=O/Math.max(Z.width,Z.height)),q<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const $=Math.floor(q*Z.width),_t=Math.floor(q*Z.height);h===void 0&&(h=g($,_t));const ot=_?g($,_t):h;return ot.width=$,ot.height=_t,ot.getContext("2d").drawImage(M,0,0,$,_t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+$+"x"+_t+")."),ot}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),M;return M}function m(M){return M.generateMipmaps}function f(M){n.generateMipmap(M)}function b(M){return M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?n.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(M,_,O,q,Z=!1){if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let $=_;if(_===n.RED&&(O===n.FLOAT&&($=n.R32F),O===n.HALF_FLOAT&&($=n.R16F),O===n.UNSIGNED_BYTE&&($=n.R8)),_===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&($=n.R8UI),O===n.UNSIGNED_SHORT&&($=n.R16UI),O===n.UNSIGNED_INT&&($=n.R32UI),O===n.BYTE&&($=n.R8I),O===n.SHORT&&($=n.R16I),O===n.INT&&($=n.R32I)),_===n.RG&&(O===n.FLOAT&&($=n.RG32F),O===n.HALF_FLOAT&&($=n.RG16F),O===n.UNSIGNED_BYTE&&($=n.RG8)),_===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&($=n.RG8UI),O===n.UNSIGNED_SHORT&&($=n.RG16UI),O===n.UNSIGNED_INT&&($=n.RG32UI),O===n.BYTE&&($=n.RG8I),O===n.SHORT&&($=n.RG16I),O===n.INT&&($=n.RG32I)),_===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&($=n.RGB8UI),O===n.UNSIGNED_SHORT&&($=n.RGB16UI),O===n.UNSIGNED_INT&&($=n.RGB32UI),O===n.BYTE&&($=n.RGB8I),O===n.SHORT&&($=n.RGB16I),O===n.INT&&($=n.RGB32I)),_===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&($=n.RGBA8UI),O===n.UNSIGNED_SHORT&&($=n.RGBA16UI),O===n.UNSIGNED_INT&&($=n.RGBA32UI),O===n.BYTE&&($=n.RGBA8I),O===n.SHORT&&($=n.RGBA16I),O===n.INT&&($=n.RGBA32I)),_===n.RGB&&O===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),_===n.RGBA){const _t=Z?Eo:Yt.getTransfer(q);O===n.FLOAT&&($=n.RGBA32F),O===n.HALF_FLOAT&&($=n.RGBA16F),O===n.UNSIGNED_BYTE&&($=_t===te?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function E(M,_){let O;return M?_===null||_===Ai||_===Zr?O=n.DEPTH24_STENCIL8:_===On?O=n.DEPTH32F_STENCIL8:_===Kr&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Ai||_===Zr?O=n.DEPTH_COMPONENT24:_===On?O=n.DEPTH_COMPONENT32F:_===Kr&&(O=n.DEPTH_COMPONENT16),O}function L(M,_){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==hn&&M.minFilter!==xn?Math.log2(Math.max(_.width,_.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?_.mipmaps.length:1}function C(M){const _=M.target;_.removeEventListener("dispose",C),U(_),_.isVideoTexture&&u.delete(_)}function w(M){const _=M.target;_.removeEventListener("dispose",w),x(_)}function U(M){const _=i.get(M);if(_.__webglInit===void 0)return;const O=M.source,q=d.get(O);if(q){const Z=q[_.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&y(M),Object.keys(q).length===0&&d.delete(O)}i.remove(M)}function y(M){const _=i.get(M);n.deleteTexture(_.__webglTexture);const O=M.source,q=d.get(O);delete q[_.__cacheKey],o.memory.textures--}function x(M){const _=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(_.__webglFramebuffer[q]))for(let Z=0;Z<_.__webglFramebuffer[q].length;Z++)n.deleteFramebuffer(_.__webglFramebuffer[q][Z]);else n.deleteFramebuffer(_.__webglFramebuffer[q]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[q])}else{if(Array.isArray(_.__webglFramebuffer))for(let q=0;q<_.__webglFramebuffer.length;q++)n.deleteFramebuffer(_.__webglFramebuffer[q]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let q=0;q<_.__webglColorRenderbuffer.length;q++)_.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[q]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const O=M.textures;for(let q=0,Z=O.length;q<Z;q++){const $=i.get(O[q]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(O[q])}i.remove(M)}let R=0;function V(){R=0}function H(){const M=R;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),R+=1,M}function Y(M){const _=[];return _.push(M.wrapS),_.push(M.wrapT),_.push(M.wrapR||0),_.push(M.magFilter),_.push(M.minFilter),_.push(M.anisotropy),_.push(M.internalFormat),_.push(M.format),_.push(M.type),_.push(M.generateMipmaps),_.push(M.premultiplyAlpha),_.push(M.flipY),_.push(M.unpackAlignment),_.push(M.colorSpace),_.join()}function K(M,_){const O=i.get(M);if(M.isVideoTexture&&xt(M),M.isRenderTargetTexture===!1&&M.version>0&&O.__version!==M.version){const q=M.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(O,M,_);return}}e.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+_)}function X(M,_){const O=i.get(M);if(M.version>0&&O.__version!==M.version){W(O,M,_);return}e.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+_)}function G(M,_){const O=i.get(M);if(M.version>0&&O.__version!==M.version){W(O,M,_);return}e.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+_)}function k(M,_){const O=i.get(M);if(M.version>0&&O.__version!==M.version){tt(O,M,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+_)}const et={[tc]:n.REPEAT,[Ei]:n.CLAMP_TO_EDGE,[ec]:n.MIRRORED_REPEAT},rt={[hn]:n.NEAREST,[qp]:n.NEAREST_MIPMAP_NEAREST,[Ts]:n.NEAREST_MIPMAP_LINEAR,[xn]:n.LINEAR,[Ko]:n.LINEAR_MIPMAP_NEAREST,[yi]:n.LINEAR_MIPMAP_LINEAR},vt={[Jp]:n.NEVER,[rm]:n.ALWAYS,[Qp]:n.LESS,[Pd]:n.LEQUAL,[tm]:n.EQUAL,[im]:n.GEQUAL,[em]:n.GREATER,[nm]:n.NOTEQUAL};function Ot(M,_){if(_.type===On&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===xn||_.magFilter===Ko||_.magFilter===Ts||_.magFilter===yi||_.minFilter===xn||_.minFilter===Ko||_.minFilter===Ts||_.minFilter===yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(M,n.TEXTURE_WRAP_S,et[_.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,et[_.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,et[_.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,rt[_.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,rt[_.minFilter]),_.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,vt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===hn||_.minFilter!==Ts&&_.minFilter!==yi||_.type===On&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");n.texParameterf(M,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function jt(M,_){let O=!1;M.__webglInit===void 0&&(M.__webglInit=!0,_.addEventListener("dispose",C));const q=_.source;let Z=d.get(q);Z===void 0&&(Z={},d.set(q,Z));const $=Y(_);if($!==M.__cacheKey){Z[$]===void 0&&(Z[$]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Z[$].usedTimes++;const _t=Z[M.__cacheKey];_t!==void 0&&(Z[M.__cacheKey].usedTimes--,_t.usedTimes===0&&y(_)),M.__cacheKey=$,M.__webglTexture=Z[$].texture}return O}function W(M,_,O){let q=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(q=n.TEXTURE_3D);const Z=jt(M,_),$=_.source;e.bindTexture(q,M.__webglTexture,n.TEXTURE0+O);const _t=i.get($);if($.version!==_t.__version||Z===!0){e.activeTexture(n.TEXTURE0+O);const ot=Yt.getPrimaries(Yt.workingColorSpace),dt=_.colorSpace===ti?null:Yt.getPrimaries(_.colorSpace),Vt=_.colorSpace===ti||ot===dt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);let Q=S(_.image,!1,r.maxTextureSize);Q=se(_,Q);const ft=s.convert(_.format,_.colorSpace),bt=s.convert(_.type);let Ct=T(_.internalFormat,ft,bt,_.colorSpace,_.isVideoTexture);Ot(q,_);let pt;const zt=_.mipmaps,Nt=_.isVideoTexture!==!0,ie=_t.__version===void 0||Z===!0,P=$.dataReady,at=L(_,Q);if(_.isDepthTexture)Ct=E(_.format===Qr,_.type),ie&&(Nt?e.texStorage2D(n.TEXTURE_2D,1,Ct,Q.width,Q.height):e.texImage2D(n.TEXTURE_2D,0,Ct,Q.width,Q.height,0,ft,bt,null));else if(_.isDataTexture)if(zt.length>0){Nt&&ie&&e.texStorage2D(n.TEXTURE_2D,at,Ct,zt[0].width,zt[0].height);for(let z=0,j=zt.length;z<j;z++)pt=zt[z],Nt?P&&e.texSubImage2D(n.TEXTURE_2D,z,0,0,pt.width,pt.height,ft,bt,pt.data):e.texImage2D(n.TEXTURE_2D,z,Ct,pt.width,pt.height,0,ft,bt,pt.data);_.generateMipmaps=!1}else Nt?(ie&&e.texStorage2D(n.TEXTURE_2D,at,Ct,Q.width,Q.height),P&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Q.width,Q.height,ft,bt,Q.data)):e.texImage2D(n.TEXTURE_2D,0,Ct,Q.width,Q.height,0,ft,bt,Q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Nt&&ie&&e.texStorage3D(n.TEXTURE_2D_ARRAY,at,Ct,zt[0].width,zt[0].height,Q.depth);for(let z=0,j=zt.length;z<j;z++)if(pt=zt[z],_.format!==ln)if(ft!==null)if(Nt){if(P)if(_.layerUpdates.size>0){const lt=Iu(pt.width,pt.height,_.format,_.type);for(const ct of _.layerUpdates){const Dt=pt.data.subarray(ct*lt/pt.data.BYTES_PER_ELEMENT,(ct+1)*lt/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,z,0,0,ct,pt.width,pt.height,1,ft,Dt)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,z,0,0,0,pt.width,pt.height,Q.depth,ft,pt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,z,Ct,pt.width,pt.height,Q.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?P&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,z,0,0,0,pt.width,pt.height,Q.depth,ft,bt,pt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,z,Ct,pt.width,pt.height,Q.depth,0,ft,bt,pt.data)}else{Nt&&ie&&e.texStorage2D(n.TEXTURE_2D,at,Ct,zt[0].width,zt[0].height);for(let z=0,j=zt.length;z<j;z++)pt=zt[z],_.format!==ln?ft!==null?Nt?P&&e.compressedTexSubImage2D(n.TEXTURE_2D,z,0,0,pt.width,pt.height,ft,pt.data):e.compressedTexImage2D(n.TEXTURE_2D,z,Ct,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?P&&e.texSubImage2D(n.TEXTURE_2D,z,0,0,pt.width,pt.height,ft,bt,pt.data):e.texImage2D(n.TEXTURE_2D,z,Ct,pt.width,pt.height,0,ft,bt,pt.data)}else if(_.isDataArrayTexture)if(Nt){if(ie&&e.texStorage3D(n.TEXTURE_2D_ARRAY,at,Ct,Q.width,Q.height,Q.depth),P)if(_.layerUpdates.size>0){const z=Iu(Q.width,Q.height,_.format,_.type);for(const j of _.layerUpdates){const lt=Q.data.subarray(j*z/Q.data.BYTES_PER_ELEMENT,(j+1)*z/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,j,Q.width,Q.height,1,ft,bt,lt)}_.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ft,bt,Q.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ct,Q.width,Q.height,Q.depth,0,ft,bt,Q.data);else if(_.isData3DTexture)Nt?(ie&&e.texStorage3D(n.TEXTURE_3D,at,Ct,Q.width,Q.height,Q.depth),P&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ft,bt,Q.data)):e.texImage3D(n.TEXTURE_3D,0,Ct,Q.width,Q.height,Q.depth,0,ft,bt,Q.data);else if(_.isFramebufferTexture){if(ie)if(Nt)e.texStorage2D(n.TEXTURE_2D,at,Ct,Q.width,Q.height);else{let z=Q.width,j=Q.height;for(let lt=0;lt<at;lt++)e.texImage2D(n.TEXTURE_2D,lt,Ct,z,j,0,ft,bt,null),z>>=1,j>>=1}}else if(zt.length>0){if(Nt&&ie){const z=St(zt[0]);e.texStorage2D(n.TEXTURE_2D,at,Ct,z.width,z.height)}for(let z=0,j=zt.length;z<j;z++)pt=zt[z],Nt?P&&e.texSubImage2D(n.TEXTURE_2D,z,0,0,ft,bt,pt):e.texImage2D(n.TEXTURE_2D,z,Ct,ft,bt,pt);_.generateMipmaps=!1}else if(Nt){if(ie){const z=St(Q);e.texStorage2D(n.TEXTURE_2D,at,Ct,z.width,z.height)}P&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ft,bt,Q)}else e.texImage2D(n.TEXTURE_2D,0,Ct,ft,bt,Q);m(_)&&f(q),_t.__version=$.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function tt(M,_,O){if(_.image.length!==6)return;const q=jt(M,_),Z=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+O);const $=i.get(Z);if(Z.version!==$.__version||q===!0){e.activeTexture(n.TEXTURE0+O);const _t=Yt.getPrimaries(Yt.workingColorSpace),ot=_.colorSpace===ti?null:Yt.getPrimaries(_.colorSpace),dt=_.colorSpace===ti||_t===ot?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const Vt=_.isCompressedTexture||_.image[0].isCompressedTexture,Q=_.image[0]&&_.image[0].isDataTexture,ft=[];for(let j=0;j<6;j++)!Vt&&!Q?ft[j]=S(_.image[j],!0,r.maxCubemapSize):ft[j]=Q?_.image[j].image:_.image[j],ft[j]=se(_,ft[j]);const bt=ft[0],Ct=s.convert(_.format,_.colorSpace),pt=s.convert(_.type),zt=T(_.internalFormat,Ct,pt,_.colorSpace),Nt=_.isVideoTexture!==!0,ie=$.__version===void 0||q===!0,P=Z.dataReady;let at=L(_,bt);Ot(n.TEXTURE_CUBE_MAP,_);let z;if(Vt){Nt&&ie&&e.texStorage2D(n.TEXTURE_CUBE_MAP,at,zt,bt.width,bt.height);for(let j=0;j<6;j++){z=ft[j].mipmaps;for(let lt=0;lt<z.length;lt++){const ct=z[lt];_.format!==ln?Ct!==null?Nt?P&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,lt,0,0,ct.width,ct.height,Ct,ct.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,lt,zt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?P&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,lt,0,0,ct.width,ct.height,Ct,pt,ct.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,lt,zt,ct.width,ct.height,0,Ct,pt,ct.data)}}}else{if(z=_.mipmaps,Nt&&ie){z.length>0&&at++;const j=St(ft[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,at,zt,j.width,j.height)}for(let j=0;j<6;j++)if(Q){Nt?P&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ft[j].width,ft[j].height,Ct,pt,ft[j].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,zt,ft[j].width,ft[j].height,0,Ct,pt,ft[j].data);for(let lt=0;lt<z.length;lt++){const Dt=z[lt].image[j].image;Nt?P&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,lt+1,0,0,Dt.width,Dt.height,Ct,pt,Dt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,lt+1,zt,Dt.width,Dt.height,0,Ct,pt,Dt.data)}}else{Nt?P&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ct,pt,ft[j]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,zt,Ct,pt,ft[j]);for(let lt=0;lt<z.length;lt++){const ct=z[lt];Nt?P&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,lt+1,0,0,Ct,pt,ct.image[j]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,lt+1,zt,Ct,pt,ct.image[j])}}}m(_)&&f(n.TEXTURE_CUBE_MAP),$.__version=Z.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function gt(M,_,O,q,Z,$){const _t=s.convert(O.format,O.colorSpace),ot=s.convert(O.type),dt=T(O.internalFormat,_t,ot,O.colorSpace),Vt=i.get(_),Q=i.get(O);if(Q.__renderTarget=_,!Vt.__hasExternalTextures){const ft=Math.max(1,_.width>>$),bt=Math.max(1,_.height>>$);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?e.texImage3D(Z,$,dt,ft,bt,_.depth,0,_t,ot,null):e.texImage2D(Z,$,dt,ft,bt,0,_t,ot,null)}e.bindFramebuffer(n.FRAMEBUFFER,M),Ht(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,Z,Q.__webglTexture,0,Gt(_)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,Z,Q.__webglTexture,$),e.bindFramebuffer(n.FRAMEBUFFER,null)}function st(M,_,O){if(n.bindRenderbuffer(n.RENDERBUFFER,M),_.depthBuffer){const q=_.depthTexture,Z=q&&q.isDepthTexture?q.type:null,$=E(_.stencilBuffer,Z),_t=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=Gt(_);Ht(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ot,$,_.width,_.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,ot,$,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,$,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,_t,n.RENDERBUFFER,M)}else{const q=_.textures;for(let Z=0;Z<q.length;Z++){const $=q[Z],_t=s.convert($.format,$.colorSpace),ot=s.convert($.type),dt=T($.internalFormat,_t,ot,$.colorSpace),Vt=Gt(_);O&&Ht(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Vt,dt,_.width,_.height):Ht(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Vt,dt,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,dt,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Tt(M,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,M),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=i.get(_.depthTexture);q.__renderTarget=_,(!q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),K(_.depthTexture,0);const Z=q.__webglTexture,$=Gt(_);if(_.depthTexture.format===Jr)Ht(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(_.depthTexture.format===Qr)Ht(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function qt(M){const _=i.get(M),O=M.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==M.depthTexture){const q=M.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),q){const Z=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,q.removeEventListener("dispose",Z)};q.addEventListener("dispose",Z),_.__depthDisposeCallback=Z}_.__boundDepthTexture=q}if(M.depthTexture&&!_.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Tt(_.__webglFramebuffer,M)}else if(O){_.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[q]),_.__webglDepthbuffer[q]===void 0)_.__webglDepthbuffer[q]=n.createRenderbuffer(),st(_.__webglDepthbuffer[q],M,!1);else{const Z=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=_.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,$)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),st(_.__webglDepthbuffer,M,!1);else{const q=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,Z)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function wt(M,_,O){const q=i.get(M);_!==void 0&&gt(q.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&qt(M)}function pe(M){const _=M.texture,O=i.get(M),q=i.get(_);M.addEventListener("dispose",w);const Z=M.textures,$=M.isWebGLCubeRenderTarget===!0,_t=Z.length>1;if(_t||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=_.version,o.memory.textures++),$){O.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[ot]=[];for(let dt=0;dt<_.mipmaps.length;dt++)O.__webglFramebuffer[ot][dt]=n.createFramebuffer()}else O.__webglFramebuffer[ot]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let ot=0;ot<_.mipmaps.length;ot++)O.__webglFramebuffer[ot]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(_t)for(let ot=0,dt=Z.length;ot<dt;ot++){const Vt=i.get(Z[ot]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=n.createTexture(),o.memory.textures++)}if(M.samples>0&&Ht(M)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ot=0;ot<Z.length;ot++){const dt=Z[ot];O.__webglColorRenderbuffer[ot]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[ot]);const Vt=s.convert(dt.format,dt.colorSpace),Q=s.convert(dt.type),ft=T(dt.internalFormat,Vt,Q,dt.colorSpace,M.isXRRenderTarget===!0),bt=Gt(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,bt,ft,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,O.__webglColorRenderbuffer[ot])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),st(O.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){e.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),Ot(n.TEXTURE_CUBE_MAP,_);for(let ot=0;ot<6;ot++)if(_.mipmaps&&_.mipmaps.length>0)for(let dt=0;dt<_.mipmaps.length;dt++)gt(O.__webglFramebuffer[ot][dt],M,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,dt);else gt(O.__webglFramebuffer[ot],M,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(_)&&f(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_t){for(let ot=0,dt=Z.length;ot<dt;ot++){const Vt=Z[ot],Q=i.get(Vt);e.bindTexture(n.TEXTURE_2D,Q.__webglTexture),Ot(n.TEXTURE_2D,Vt),gt(O.__webglFramebuffer,M,Vt,n.COLOR_ATTACHMENT0+ot,n.TEXTURE_2D,0),m(Vt)&&f(n.TEXTURE_2D)}e.unbindTexture()}else{let ot=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ot=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ot,q.__webglTexture),Ot(ot,_),_.mipmaps&&_.mipmaps.length>0)for(let dt=0;dt<_.mipmaps.length;dt++)gt(O.__webglFramebuffer[dt],M,_,n.COLOR_ATTACHMENT0,ot,dt);else gt(O.__webglFramebuffer,M,_,n.COLOR_ATTACHMENT0,ot,0);m(_)&&f(ot),e.unbindTexture()}M.depthBuffer&&qt(M)}function ae(M){const _=M.textures;for(let O=0,q=_.length;O<q;O++){const Z=_[O];if(m(Z)){const $=b(M),_t=i.get(Z).__webglTexture;e.bindTexture($,_t),f($),e.unbindTexture()}}}const kt=[],A=[];function Ye(M){if(M.samples>0){if(Ht(M)===!1){const _=M.textures,O=M.width,q=M.height;let Z=n.COLOR_BUFFER_BIT;const $=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_t=i.get(M),ot=_.length>1;if(ot)for(let dt=0;dt<_.length;dt++)e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let dt=0;dt<_.length;dt++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),ot){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_t.__webglColorRenderbuffer[dt]);const Vt=i.get(_[dt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Vt,0)}n.blitFramebuffer(0,0,O,q,0,0,O,q,Z,n.NEAREST),c===!0&&(kt.length=0,A.length=0,kt.push(n.COLOR_ATTACHMENT0+dt),M.depthBuffer&&M.resolveDepthBuffer===!1&&(kt.push($),A.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,A)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,kt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ot)for(let dt=0;dt<_.length;dt++){e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,_t.__webglColorRenderbuffer[dt]);const Vt=i.get(_[dt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,Vt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&c){const _=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function Gt(M){return Math.min(r.maxSamples,M.samples)}function Ht(M){const _=i.get(M);return M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function xt(M){const _=o.render.frame;u.get(M)!==_&&(u.set(M,_),M.update())}function se(M,_){const O=M.colorSpace,q=M.format,Z=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||O!==pr&&O!==ti&&(Yt.getTransfer(O)===te?(q!==ln||Z!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),_}function St(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(l.width=M.naturalWidth||M.width,l.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(l.width=M.displayWidth,l.height=M.displayHeight):(l.width=M.width,l.height=M.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=V,this.setTexture2D=K,this.setTexture2DArray=X,this.setTexture3D=G,this.setTextureCube=k,this.rebindTextures=wt,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=qt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=Ht}function B0(n,t){function e(i,r=ti){let s;const o=Yt.getTransfer(r);if(i===Wn)return n.UNSIGNED_BYTE;if(i===cl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ll)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ed)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Sd)return n.BYTE;if(i===xd)return n.SHORT;if(i===Kr)return n.UNSIGNED_SHORT;if(i===al)return n.INT;if(i===Ai)return n.UNSIGNED_INT;if(i===On)return n.FLOAT;if(i===kn)return n.HALF_FLOAT;if(i===yd)return n.ALPHA;if(i===Md)return n.RGB;if(i===ln)return n.RGBA;if(i===Td)return n.LUMINANCE;if(i===bd)return n.LUMINANCE_ALPHA;if(i===Jr)return n.DEPTH_COMPONENT;if(i===Qr)return n.DEPTH_STENCIL;if(i===Ad)return n.RED;if(i===ul)return n.RED_INTEGER;if(i===wd)return n.RG;if(i===hl)return n.RG_INTEGER;if(i===dl)return n.RGBA_INTEGER;if(i===ao||i===co||i===lo||i===uo)if(o===te)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ao)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===co)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===lo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===uo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ao)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===co)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===lo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===uo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===nc||i===ic||i===rc||i===sc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===nc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ic)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===rc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===sc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===oc||i===ac||i===cc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===oc||i===ac)return o===te?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===cc)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===lc||i===uc||i===hc||i===dc||i===fc||i===pc||i===mc||i===gc||i===_c||i===vc||i===Sc||i===xc||i===Ec||i===yc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===lc)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===uc)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===hc)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===dc)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===fc)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===pc)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===mc)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===gc)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_c)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===vc)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Sc)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===xc)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ec)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===yc)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ho||i===Mc||i===Tc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===ho)return o===te?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Mc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Tc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Rd||i===bc||i===Ac||i===wc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===ho)return s.COMPRESSED_RED_RGTC1_EXT;if(i===bc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ac)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===wc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Zr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const k0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,H0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class z0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new Ue,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Ne({vertexShader:k0,fragmentShader:H0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ke(new Lo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class G0 extends Ni{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,p=null,g=null;const S=new z0,m=e.getContextAttributes();let f=null,b=null;const T=[],E=[],L=new yt;let C=null;const w=new Je;w.viewport=new de;const U=new Je;U.viewport=new de;const y=[w,U],x=new ag;let R=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let tt=T[W];return tt===void 0&&(tt=new ga,T[W]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(W){let tt=T[W];return tt===void 0&&(tt=new ga,T[W]=tt),tt.getGripSpace()},this.getHand=function(W){let tt=T[W];return tt===void 0&&(tt=new ga,T[W]=tt),tt.getHandSpace()};function H(W){const tt=E.indexOf(W.inputSource);if(tt===-1)return;const gt=T[tt];gt!==void 0&&(gt.update(W.inputSource,W.frame,l||o),gt.dispatchEvent({type:W.type,data:W.inputSource}))}function Y(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",K);for(let W=0;W<T.length;W++){const tt=E[W];tt!==null&&(E[W]=null,T[W].disconnect(tt))}R=null,V=null,S.reset(),t.setRenderTarget(f),p=null,d=null,h=null,r=null,b=null,jt.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(f=t.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(L),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let gt=null,st=null,Tt=null;m.depth&&(Tt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,gt=m.stencil?Qr:Jr,st=m.stencil?Zr:Ai);const qt={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:s};h=new XRWebGLBinding(r,e),d=h.createProjectionLayer(qt),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new dn(d.textureWidth,d.textureHeight,{format:ln,type:Wn,depthTexture:new zd(d.textureWidth,d.textureHeight,st,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const gt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,gt),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new dn(p.framebufferWidth,p.framebufferHeight,{format:ln,type:Wn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),jt.setContext(r),jt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function K(W){for(let tt=0;tt<W.removed.length;tt++){const gt=W.removed[tt],st=E.indexOf(gt);st>=0&&(E[st]=null,T[st].disconnect(gt))}for(let tt=0;tt<W.added.length;tt++){const gt=W.added[tt];let st=E.indexOf(gt);if(st===-1){for(let qt=0;qt<T.length;qt++)if(qt>=E.length){E.push(gt),st=qt;break}else if(E[qt]===null){E[qt]=gt,st=qt;break}if(st===-1)break}const Tt=T[st];Tt&&Tt.connect(gt)}}const X=new N,G=new N;function k(W,tt,gt){X.setFromMatrixPosition(tt.matrixWorld),G.setFromMatrixPosition(gt.matrixWorld);const st=X.distanceTo(G),Tt=tt.projectionMatrix.elements,qt=gt.projectionMatrix.elements,wt=Tt[14]/(Tt[10]-1),pe=Tt[14]/(Tt[10]+1),ae=(Tt[9]+1)/Tt[5],kt=(Tt[9]-1)/Tt[5],A=(Tt[8]-1)/Tt[0],Ye=(qt[8]+1)/qt[0],Gt=wt*A,Ht=wt*Ye,xt=st/(-A+Ye),se=xt*-A;if(tt.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(se),W.translateZ(xt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Tt[10]===-1)W.projectionMatrix.copy(tt.projectionMatrix),W.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const St=wt+xt,M=pe+xt,_=Gt-se,O=Ht+(st-se),q=ae*pe/M*St,Z=kt*pe/M*St;W.projectionMatrix.makePerspective(_,O,q,Z,St,M),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function et(W,tt){tt===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(tt.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let tt=W.near,gt=W.far;S.texture!==null&&(S.depthNear>0&&(tt=S.depthNear),S.depthFar>0&&(gt=S.depthFar)),x.near=U.near=w.near=tt,x.far=U.far=w.far=gt,(R!==x.near||V!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),R=x.near,V=x.far),w.layers.mask=W.layers.mask|2,U.layers.mask=W.layers.mask|4,x.layers.mask=w.layers.mask|U.layers.mask;const st=W.parent,Tt=x.cameras;et(x,st);for(let qt=0;qt<Tt.length;qt++)et(Tt[qt],st);Tt.length===2?k(x,w,U):x.projectionMatrix.copy(w.projectionMatrix),rt(W,x,st)};function rt(W,tt,gt){gt===null?W.matrix.copy(tt.matrixWorld):(W.matrix.copy(gt.matrixWorld),W.matrix.invert(),W.matrix.multiply(tt.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(tt.projectionMatrix),W.projectionMatrixInverse.copy(tt.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=ts*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(W){c=W,d!==null&&(d.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(x)};let vt=null;function Ot(W,tt){if(u=tt.getViewerPose(l||o),g=tt,u!==null){const gt=u.views;p!==null&&(t.setRenderTargetFramebuffer(b,p.framebuffer),t.setRenderTarget(b));let st=!1;gt.length!==x.cameras.length&&(x.cameras.length=0,st=!0);for(let wt=0;wt<gt.length;wt++){const pe=gt[wt];let ae=null;if(p!==null)ae=p.getViewport(pe);else{const A=h.getViewSubImage(d,pe);ae=A.viewport,wt===0&&(t.setRenderTargetTextures(b,A.colorTexture,A.depthStencilTexture),t.setRenderTarget(b))}let kt=y[wt];kt===void 0&&(kt=new Je,kt.layers.enable(wt),kt.viewport=new de,y[wt]=kt),kt.matrix.fromArray(pe.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(pe.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(ae.x,ae.y,ae.width,ae.height),wt===0&&(x.matrix.copy(kt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),st===!0&&x.cameras.push(kt)}const Tt=r.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&h){const wt=h.getDepthInformation(gt[0]);wt&&wt.isValid&&wt.texture&&S.init(t,wt,r.renderState)}}for(let gt=0;gt<T.length;gt++){const st=E[gt],Tt=T[gt];st!==null&&Tt!==void 0&&Tt.update(st,tt,l||o)}vt&&vt(W,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),g=null}const jt=new Vd;jt.setAnimationLoop(Ot),this.setAnimationLoop=function(W){vt=W},this.dispose=function(){}}}const gi=new Mn,V0=new fe;function W0(n,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Bd(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,b,T,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,E)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),S(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,b,T):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===ze&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===ze&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const b=t.get(f),T=b.envMap,E=b.envMapRotation;T&&(m.envMap.value=T,gi.copy(E),gi.x*=-1,gi.y*=-1,gi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),m.envMapRotation.value.setFromMatrix4(V0.makeRotationFromEuler(gi)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,b,T){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*b,m.scale.value=T*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,b){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===ze&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function S(m,f){const b=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function $0(n,t,e,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,T){const E=T.program;i.uniformBlockBinding(b,E)}function l(b,T){let E=r[b.id];E===void 0&&(g(b),E=u(b),r[b.id]=E,b.addEventListener("dispose",m));const L=T.program;i.updateUBOMapping(b,L);const C=t.render.frame;s[b.id]!==C&&(d(b),s[b.id]=C)}function u(b){const T=h();b.__bindingPointIndex=T;const E=n.createBuffer(),L=b.__size,C=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,L,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,E),E}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const T=r[b.id],E=b.uniforms,L=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let C=0,w=E.length;C<w;C++){const U=Array.isArray(E[C])?E[C]:[E[C]];for(let y=0,x=U.length;y<x;y++){const R=U[y];if(p(R,C,y,L)===!0){const V=R.__offset,H=Array.isArray(R.value)?R.value:[R.value];let Y=0;for(let K=0;K<H.length;K++){const X=H[K],G=S(X);typeof X=="number"||typeof X=="boolean"?(R.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,V+Y,R.__data)):X.isMatrix3?(R.__data[0]=X.elements[0],R.__data[1]=X.elements[1],R.__data[2]=X.elements[2],R.__data[3]=0,R.__data[4]=X.elements[3],R.__data[5]=X.elements[4],R.__data[6]=X.elements[5],R.__data[7]=0,R.__data[8]=X.elements[6],R.__data[9]=X.elements[7],R.__data[10]=X.elements[8],R.__data[11]=0):(X.toArray(R.__data,Y),Y+=G.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,V,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(b,T,E,L){const C=b.value,w=T+"_"+E;if(L[w]===void 0)return typeof C=="number"||typeof C=="boolean"?L[w]=C:L[w]=C.clone(),!0;{const U=L[w];if(typeof C=="number"||typeof C=="boolean"){if(U!==C)return L[w]=C,!0}else if(U.equals(C)===!1)return U.copy(C),!0}return!1}function g(b){const T=b.uniforms;let E=0;const L=16;for(let w=0,U=T.length;w<U;w++){const y=Array.isArray(T[w])?T[w]:[T[w]];for(let x=0,R=y.length;x<R;x++){const V=y[x],H=Array.isArray(V.value)?V.value:[V.value];for(let Y=0,K=H.length;Y<K;Y++){const X=H[Y],G=S(X),k=E%L,et=k%G.boundary,rt=k+et;E+=et,rt!==0&&L-rt<G.storage&&(E+=L-rt),V.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=E,E+=G.storage}}}const C=E%L;return C>0&&(E+=L-C),b.__size=E,b.__cache={},this}function S(b){const T={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(T.boundary=4,T.storage=4):b.isVector2?(T.boundary=8,T.storage=8):b.isVector3||b.isColor?(T.boundary=16,T.storage=12):b.isVector4?(T.boundary=16,T.storage=16):b.isMatrix3?(T.boundary=48,T.storage=48):b.isMatrix4?(T.boundary=64,T.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),T}function m(b){const T=b.target;T.removeEventListener("dispose",m);const E=o.indexOf(T.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function f(){for(const b in r)n.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:c,update:l,dispose:f}}class X0{constructor(t={}){const{canvas:e=Em(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),S=new Int32Array(4);let m=null,f=null;const b=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let L=!1;this._outputColorSpace=Ze;let C=0,w=0,U=null,y=-1,x=null;const R=new de,V=new de;let H=null;const Y=new Bt(0);let K=0,X=e.width,G=e.height,k=1,et=null,rt=null;const vt=new de(0,0,X,G),Ot=new de(0,0,X,G);let jt=!1;const W=new _l;let tt=!1,gt=!1;const st=new fe,Tt=new fe,qt=new N,wt=new de,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ae=!1;function kt(){return U===null?k:1}let A=i;function Ye(v,I){return e.getContext(v,I)}try{const v={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ol}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",lt,!1),e.addEventListener("webglcontextcreationerror",ct,!1),A===null){const I="webgl2";if(A=Ye(I,v),A===null)throw Ye(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Gt,Ht,xt,se,St,M,_,O,q,Z,$,_t,ot,dt,Vt,Q,ft,bt,Ct,pt,zt,Nt,ie,P;function at(){Gt=new nS(A),Gt.init(),Nt=new B0(A,Gt),Ht=new jv(A,Gt,t,Nt),xt=new O0(A,Gt),Ht.reverseDepthBuffer&&d&&xt.buffers.depth.setReversed(!0),se=new sS(A),St=new M0,M=new F0(A,Gt,xt,St,Ht,Nt,se),_=new Zv(E),O=new eS(E),q=new hg(A),ie=new Yv(A,q),Z=new iS(A,q,se,ie),$=new aS(A,Z,q,se),Ct=new oS(A,Ht,M),Q=new Kv(St),_t=new y0(E,_,O,Gt,Ht,ie,Q),ot=new W0(E,St),dt=new b0,Vt=new I0(Gt),bt=new Xv(E,_,O,xt,$,p,c),ft=new N0(E,$,Ht),P=new $0(A,se,Ht,xt),pt=new qv(A,Gt,se),zt=new rS(A,Gt,se),se.programs=_t.programs,E.capabilities=Ht,E.extensions=Gt,E.properties=St,E.renderLists=dt,E.shadowMap=ft,E.state=xt,E.info=se}at();const z=new G0(E,A);this.xr=z,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const v=Gt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Gt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(v){v!==void 0&&(k=v,this.setSize(X,G,!1))},this.getSize=function(v){return v.set(X,G)},this.setSize=function(v,I,F=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=v,G=I,e.width=Math.floor(v*k),e.height=Math.floor(I*k),F===!0&&(e.style.width=v+"px",e.style.height=I+"px"),this.setViewport(0,0,v,I)},this.getDrawingBufferSize=function(v){return v.set(X*k,G*k).floor()},this.setDrawingBufferSize=function(v,I,F){X=v,G=I,k=F,e.width=Math.floor(v*F),e.height=Math.floor(I*F),this.setViewport(0,0,v,I)},this.getCurrentViewport=function(v){return v.copy(R)},this.getViewport=function(v){return v.copy(vt)},this.setViewport=function(v,I,F,B){v.isVector4?vt.set(v.x,v.y,v.z,v.w):vt.set(v,I,F,B),xt.viewport(R.copy(vt).multiplyScalar(k).round())},this.getScissor=function(v){return v.copy(Ot)},this.setScissor=function(v,I,F,B){v.isVector4?Ot.set(v.x,v.y,v.z,v.w):Ot.set(v,I,F,B),xt.scissor(V.copy(Ot).multiplyScalar(k).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(v){xt.setScissorTest(jt=v)},this.setOpaqueSort=function(v){et=v},this.setTransparentSort=function(v){rt=v},this.getClearColor=function(v){return v.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor(...arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha(...arguments)},this.clear=function(v=!0,I=!0,F=!0){let B=0;if(v){let D=!1;if(U!==null){const J=U.texture.format;D=J===dl||J===hl||J===ul}if(D){const J=U.texture.type,it=J===Wn||J===Ai||J===Kr||J===Zr||J===cl||J===ll,ht=bt.getClearColor(),mt=bt.getClearAlpha(),Pt=ht.r,Rt=ht.g,Et=ht.b;it?(g[0]=Pt,g[1]=Rt,g[2]=Et,g[3]=mt,A.clearBufferuiv(A.COLOR,0,g)):(S[0]=Pt,S[1]=Rt,S[2]=Et,S[3]=mt,A.clearBufferiv(A.COLOR,0,S))}else B|=A.COLOR_BUFFER_BIT}I&&(B|=A.DEPTH_BUFFER_BIT),F&&(B|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),bt.dispose(),dt.dispose(),Vt.dispose(),St.dispose(),_.dispose(),O.dispose(),$.dispose(),ie.dispose(),P.dispose(),_t.dispose(),z.dispose(),z.removeEventListener("sessionstart",jl),z.removeEventListener("sessionend",Kl),li.stop()};function j(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function lt(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const v=se.autoReset,I=ft.enabled,F=ft.autoUpdate,B=ft.needsUpdate,D=ft.type;at(),se.autoReset=v,ft.enabled=I,ft.autoUpdate=F,ft.needsUpdate=B,ft.type=D}function ct(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Dt(v){const I=v.target;I.removeEventListener("dispose",Dt),le(I)}function le(v){Ae(v),St.remove(v)}function Ae(v){const I=St.get(v).programs;I!==void 0&&(I.forEach(function(F){_t.releaseProgram(F)}),v.isShaderMaterial&&_t.releaseShaderCache(v))}this.renderBufferDirect=function(v,I,F,B,D,J){I===null&&(I=pe);const it=D.isMesh&&D.matrixWorld.determinant()<0,ht=hp(v,I,F,B,D);xt.setMaterial(B,it);let mt=F.index,Pt=1;if(B.wireframe===!0){if(mt=Z.getWireframeAttribute(F),mt===void 0)return;Pt=2}const Rt=F.drawRange,Et=F.attributes.position;let Wt=Rt.start*Pt,Kt=(Rt.start+Rt.count)*Pt;J!==null&&(Wt=Math.max(Wt,J.start*Pt),Kt=Math.min(Kt,(J.start+J.count)*Pt)),mt!==null?(Wt=Math.max(Wt,0),Kt=Math.min(Kt,mt.count)):Et!=null&&(Wt=Math.max(Wt,0),Kt=Math.min(Kt,Et.count));const ge=Kt-Wt;if(ge<0||ge===1/0)return;ie.setup(D,B,ht,F,mt);let ue,$t=pt;if(mt!==null&&(ue=q.get(mt),$t=zt,$t.setIndex(ue)),D.isMesh)B.wireframe===!0?(xt.setLineWidth(B.wireframeLinewidth*kt()),$t.setMode(A.LINES)):$t.setMode(A.TRIANGLES);else if(D.isLine){let Mt=B.linewidth;Mt===void 0&&(Mt=1),xt.setLineWidth(Mt*kt()),D.isLineSegments?$t.setMode(A.LINES):D.isLineLoop?$t.setMode(A.LINE_LOOP):$t.setMode(A.LINE_STRIP)}else D.isPoints?$t.setMode(A.POINTS):D.isSprite&&$t.setMode(A.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)fo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),$t.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(Gt.get("WEBGL_multi_draw"))$t.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const Mt=D._multiDrawStarts,Te=D._multiDrawCounts,Zt=D._multiDrawCount,rn=mt?q.get(mt).bytesPerElement:1,Bi=St.get(B).currentProgram.getUniforms();for(let Ve=0;Ve<Zt;Ve++)Bi.setValue(A,"_gl_DrawID",Ve),$t.render(Mt[Ve]/rn,Te[Ve])}else if(D.isInstancedMesh)$t.renderInstances(Wt,ge,D.count);else if(F.isInstancedBufferGeometry){const Mt=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Te=Math.min(F.instanceCount,Mt);$t.renderInstances(Wt,ge,Te)}else $t.render(Wt,ge)};function Qt(v,I,F){v.transparent===!0&&v.side===Un&&v.forceSinglePass===!1?(v.side=ze,v.needsUpdate=!0,Ms(v,I,F),v.side=si,v.needsUpdate=!0,Ms(v,I,F),v.side=Un):Ms(v,I,F)}this.compile=function(v,I,F=null){F===null&&(F=v),f=Vt.get(F),f.init(I),T.push(f),F.traverseVisible(function(D){D.isLight&&D.layers.test(I.layers)&&(f.pushLight(D),D.castShadow&&f.pushShadow(D))}),v!==F&&v.traverseVisible(function(D){D.isLight&&D.layers.test(I.layers)&&(f.pushLight(D),D.castShadow&&f.pushShadow(D))}),f.setupLights();const B=new Set;return v.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;const J=D.material;if(J)if(Array.isArray(J))for(let it=0;it<J.length;it++){const ht=J[it];Qt(ht,F,D),B.add(ht)}else Qt(J,F,D),B.add(J)}),f=T.pop(),B},this.compileAsync=function(v,I,F=null){const B=this.compile(v,I,F);return new Promise(D=>{function J(){if(B.forEach(function(it){St.get(it).currentProgram.isReady()&&B.delete(it)}),B.size===0){D(v);return}setTimeout(J,10)}Gt.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let nn=null;function Tn(v){nn&&nn(v)}function jl(){li.stop()}function Kl(){li.start()}const li=new Vd;li.setAnimationLoop(Tn),typeof self<"u"&&li.setContext(self),this.setAnimationLoop=function(v){nn=v,z.setAnimationLoop(v),v===null?li.stop():li.start()},z.addEventListener("sessionstart",jl),z.addEventListener("sessionend",Kl),this.render=function(v,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(z.cameraAutoUpdate===!0&&z.updateCamera(I),I=z.getCamera()),v.isScene===!0&&v.onBeforeRender(E,v,I,U),f=Vt.get(v,T.length),f.init(I),T.push(f),Tt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),W.setFromProjectionMatrix(Tt),gt=this.localClippingEnabled,tt=Q.init(this.clippingPlanes,gt),m=dt.get(v,b.length),m.init(),b.push(m),z.enabled===!0&&z.isPresenting===!0){const J=E.xr.getDepthSensingMesh();J!==null&&qo(J,I,-1/0,E.sortObjects)}qo(v,I,0,E.sortObjects),m.finish(),E.sortObjects===!0&&m.sort(et,rt),ae=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,ae&&bt.addToRenderList(m,v),this.info.render.frame++,tt===!0&&Q.beginShadows();const F=f.state.shadowsArray;ft.render(F,v,I),tt===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=m.opaque,D=m.transmissive;if(f.setupLights(),I.isArrayCamera){const J=I.cameras;if(D.length>0)for(let it=0,ht=J.length;it<ht;it++){const mt=J[it];Jl(B,D,v,mt)}ae&&bt.render(v);for(let it=0,ht=J.length;it<ht;it++){const mt=J[it];Zl(m,v,mt,mt.viewport)}}else D.length>0&&Jl(B,D,v,I),ae&&bt.render(v),Zl(m,v,I);U!==null&&w===0&&(M.updateMultisampleRenderTarget(U),M.updateRenderTargetMipmap(U)),v.isScene===!0&&v.onAfterRender(E,v,I),ie.resetDefaultState(),y=-1,x=null,T.pop(),T.length>0?(f=T[T.length-1],tt===!0&&Q.setGlobalState(E.clippingPlanes,f.state.camera)):f=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function qo(v,I,F,B){if(v.visible===!1)return;if(v.layers.test(I.layers)){if(v.isGroup)F=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(I);else if(v.isLight)f.pushLight(v),v.castShadow&&f.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||W.intersectsSprite(v)){B&&wt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Tt);const it=$.update(v),ht=v.material;ht.visible&&m.push(v,it,ht,F,wt.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||W.intersectsObject(v))){const it=$.update(v),ht=v.material;if(B&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),wt.copy(v.boundingSphere.center)):(it.boundingSphere===null&&it.computeBoundingSphere(),wt.copy(it.boundingSphere.center)),wt.applyMatrix4(v.matrixWorld).applyMatrix4(Tt)),Array.isArray(ht)){const mt=it.groups;for(let Pt=0,Rt=mt.length;Pt<Rt;Pt++){const Et=mt[Pt],Wt=ht[Et.materialIndex];Wt&&Wt.visible&&m.push(v,it,Wt,F,wt.z,Et)}}else ht.visible&&m.push(v,it,ht,F,wt.z,null)}}const J=v.children;for(let it=0,ht=J.length;it<ht;it++)qo(J[it],I,F,B)}function Zl(v,I,F,B){const D=v.opaque,J=v.transmissive,it=v.transparent;f.setupLightsView(F),tt===!0&&Q.setGlobalState(E.clippingPlanes,F),B&&xt.viewport(R.copy(B)),D.length>0&&ys(D,I,F),J.length>0&&ys(J,I,F),it.length>0&&ys(it,I,F),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function Jl(v,I,F,B){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[B.id]===void 0&&(f.state.transmissionRenderTarget[B.id]=new dn(1,1,{generateMipmaps:!0,type:Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float")?kn:Wn,minFilter:yi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));const J=f.state.transmissionRenderTarget[B.id],it=B.viewport||R;J.setSize(it.z*E.transmissionResolutionScale,it.w*E.transmissionResolutionScale);const ht=E.getRenderTarget();E.setRenderTarget(J),E.getClearColor(Y),K=E.getClearAlpha(),K<1&&E.setClearColor(16777215,.5),E.clear(),ae&&bt.render(F);const mt=E.toneMapping;E.toneMapping=ni;const Pt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),f.setupLightsView(B),tt===!0&&Q.setGlobalState(E.clippingPlanes,B),ys(v,F,B),M.updateMultisampleRenderTarget(J),M.updateRenderTargetMipmap(J),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let Et=0,Wt=I.length;Et<Wt;Et++){const Kt=I[Et],ge=Kt.object,ue=Kt.geometry,$t=Kt.material,Mt=Kt.group;if($t.side===Un&&ge.layers.test(B.layers)){const Te=$t.side;$t.side=ze,$t.needsUpdate=!0,Ql(ge,F,B,ue,$t,Mt),$t.side=Te,$t.needsUpdate=!0,Rt=!0}}Rt===!0&&(M.updateMultisampleRenderTarget(J),M.updateRenderTargetMipmap(J))}E.setRenderTarget(ht),E.setClearColor(Y,K),Pt!==void 0&&(B.viewport=Pt),E.toneMapping=mt}function ys(v,I,F){const B=I.isScene===!0?I.overrideMaterial:null;for(let D=0,J=v.length;D<J;D++){const it=v[D],ht=it.object,mt=it.geometry,Pt=it.group;let Rt=it.material;Rt.allowOverride===!0&&B!==null&&(Rt=B),ht.layers.test(F.layers)&&Ql(ht,I,F,mt,Rt,Pt)}}function Ql(v,I,F,B,D,J){v.onBeforeRender(E,I,F,B,D,J),v.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),D.onBeforeRender(E,I,F,B,v,J),D.transparent===!0&&D.side===Un&&D.forceSinglePass===!1?(D.side=ze,D.needsUpdate=!0,E.renderBufferDirect(F,I,B,D,v,J),D.side=si,D.needsUpdate=!0,E.renderBufferDirect(F,I,B,D,v,J),D.side=Un):E.renderBufferDirect(F,I,B,D,v,J),v.onAfterRender(E,I,F,B,D,J)}function Ms(v,I,F){I.isScene!==!0&&(I=pe);const B=St.get(v),D=f.state.lights,J=f.state.shadowsArray,it=D.state.version,ht=_t.getParameters(v,D.state,J,I,F),mt=_t.getProgramCacheKey(ht);let Pt=B.programs;B.environment=v.isMeshStandardMaterial?I.environment:null,B.fog=I.fog,B.envMap=(v.isMeshStandardMaterial?O:_).get(v.envMap||B.environment),B.envMapRotation=B.environment!==null&&v.envMap===null?I.environmentRotation:v.envMapRotation,Pt===void 0&&(v.addEventListener("dispose",Dt),Pt=new Map,B.programs=Pt);let Rt=Pt.get(mt);if(Rt!==void 0){if(B.currentProgram===Rt&&B.lightsStateVersion===it)return eu(v,ht),Rt}else ht.uniforms=_t.getUniforms(v),v.onBeforeCompile(ht,E),Rt=_t.acquireProgram(ht,mt),Pt.set(mt,Rt),B.uniforms=ht.uniforms;const Et=B.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Et.clippingPlanes=Q.uniform),eu(v,ht),B.needsLights=fp(v),B.lightsStateVersion=it,B.needsLights&&(Et.ambientLightColor.value=D.state.ambient,Et.lightProbe.value=D.state.probe,Et.directionalLights.value=D.state.directional,Et.directionalLightShadows.value=D.state.directionalShadow,Et.spotLights.value=D.state.spot,Et.spotLightShadows.value=D.state.spotShadow,Et.rectAreaLights.value=D.state.rectArea,Et.ltc_1.value=D.state.rectAreaLTC1,Et.ltc_2.value=D.state.rectAreaLTC2,Et.pointLights.value=D.state.point,Et.pointLightShadows.value=D.state.pointShadow,Et.hemisphereLights.value=D.state.hemi,Et.directionalShadowMap.value=D.state.directionalShadowMap,Et.directionalShadowMatrix.value=D.state.directionalShadowMatrix,Et.spotShadowMap.value=D.state.spotShadowMap,Et.spotLightMatrix.value=D.state.spotLightMatrix,Et.spotLightMap.value=D.state.spotLightMap,Et.pointShadowMap.value=D.state.pointShadowMap,Et.pointShadowMatrix.value=D.state.pointShadowMatrix),B.currentProgram=Rt,B.uniformsList=null,Rt}function tu(v){if(v.uniformsList===null){const I=v.currentProgram.getUniforms();v.uniformsList=po.seqWithValue(I.seq,v.uniforms)}return v.uniformsList}function eu(v,I){const F=St.get(v);F.outputColorSpace=I.outputColorSpace,F.batching=I.batching,F.batchingColor=I.batchingColor,F.instancing=I.instancing,F.instancingColor=I.instancingColor,F.instancingMorph=I.instancingMorph,F.skinning=I.skinning,F.morphTargets=I.morphTargets,F.morphNormals=I.morphNormals,F.morphColors=I.morphColors,F.morphTargetsCount=I.morphTargetsCount,F.numClippingPlanes=I.numClippingPlanes,F.numIntersection=I.numClipIntersection,F.vertexAlphas=I.vertexAlphas,F.vertexTangents=I.vertexTangents,F.toneMapping=I.toneMapping}function hp(v,I,F,B,D){I.isScene!==!0&&(I=pe),M.resetTextureUnits();const J=I.fog,it=B.isMeshStandardMaterial?I.environment:null,ht=U===null?E.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:pr,mt=(B.isMeshStandardMaterial?O:_).get(B.envMap||it),Pt=B.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Rt=!!F.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Et=!!F.morphAttributes.position,Wt=!!F.morphAttributes.normal,Kt=!!F.morphAttributes.color;let ge=ni;B.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(ge=E.toneMapping);const ue=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,$t=ue!==void 0?ue.length:0,Mt=St.get(B),Te=f.state.lights;if(tt===!0&&(gt===!0||v!==x)){const Ie=v===x&&B.id===y;Q.setState(B,v,Ie)}let Zt=!1;B.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==Te.state.version||Mt.outputColorSpace!==ht||D.isBatchedMesh&&Mt.batching===!1||!D.isBatchedMesh&&Mt.batching===!0||D.isBatchedMesh&&Mt.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&Mt.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&Mt.instancing===!1||!D.isInstancedMesh&&Mt.instancing===!0||D.isSkinnedMesh&&Mt.skinning===!1||!D.isSkinnedMesh&&Mt.skinning===!0||D.isInstancedMesh&&Mt.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&Mt.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&Mt.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&Mt.instancingMorph===!1&&D.morphTexture!==null||Mt.envMap!==mt||B.fog===!0&&Mt.fog!==J||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==Q.numPlanes||Mt.numIntersection!==Q.numIntersection)||Mt.vertexAlphas!==Pt||Mt.vertexTangents!==Rt||Mt.morphTargets!==Et||Mt.morphNormals!==Wt||Mt.morphColors!==Kt||Mt.toneMapping!==ge||Mt.morphTargetsCount!==$t)&&(Zt=!0):(Zt=!0,Mt.__version=B.version);let rn=Mt.currentProgram;Zt===!0&&(rn=Ms(B,I,D));let Bi=!1,Ve=!1,Ur=!1;const oe=rn.getUniforms(),qe=Mt.uniforms;if(xt.useProgram(rn.program)&&(Bi=!0,Ve=!0,Ur=!0),B.id!==y&&(y=B.id,Ve=!0),Bi||x!==v){xt.buffers.depth.getReversed()?(st.copy(v.projectionMatrix),Mm(st),Tm(st),oe.setValue(A,"projectionMatrix",st)):oe.setValue(A,"projectionMatrix",v.projectionMatrix),oe.setValue(A,"viewMatrix",v.matrixWorldInverse);const Fe=oe.map.cameraPosition;Fe!==void 0&&Fe.setValue(A,qt.setFromMatrixPosition(v.matrixWorld)),Ht.logarithmicDepthBuffer&&oe.setValue(A,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&oe.setValue(A,"isOrthographic",v.isOrthographicCamera===!0),x!==v&&(x=v,Ve=!0,Ur=!0)}if(D.isSkinnedMesh){oe.setOptional(A,D,"bindMatrix"),oe.setOptional(A,D,"bindMatrixInverse");const Ie=D.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),oe.setValue(A,"boneTexture",Ie.boneTexture,M))}D.isBatchedMesh&&(oe.setOptional(A,D,"batchingTexture"),oe.setValue(A,"batchingTexture",D._matricesTexture,M),oe.setOptional(A,D,"batchingIdTexture"),oe.setValue(A,"batchingIdTexture",D._indirectTexture,M),oe.setOptional(A,D,"batchingColorTexture"),D._colorsTexture!==null&&oe.setValue(A,"batchingColorTexture",D._colorsTexture,M));const je=F.morphAttributes;if((je.position!==void 0||je.normal!==void 0||je.color!==void 0)&&Ct.update(D,F,rn),(Ve||Mt.receiveShadow!==D.receiveShadow)&&(Mt.receiveShadow=D.receiveShadow,oe.setValue(A,"receiveShadow",D.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(qe.envMap.value=mt,qe.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&I.environment!==null&&(qe.envMapIntensity.value=I.environmentIntensity),Ve&&(oe.setValue(A,"toneMappingExposure",E.toneMappingExposure),Mt.needsLights&&dp(qe,Ur),J&&B.fog===!0&&ot.refreshFogUniforms(qe,J),ot.refreshMaterialUniforms(qe,B,k,G,f.state.transmissionRenderTarget[v.id]),po.upload(A,tu(Mt),qe,M)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(po.upload(A,tu(Mt),qe,M),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&oe.setValue(A,"center",D.center),oe.setValue(A,"modelViewMatrix",D.modelViewMatrix),oe.setValue(A,"normalMatrix",D.normalMatrix),oe.setValue(A,"modelMatrix",D.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Ie=B.uniformsGroups;for(let Fe=0,jo=Ie.length;Fe<jo;Fe++){const ui=Ie[Fe];P.update(ui,rn),P.bind(ui,rn)}}return rn}function dp(v,I){v.ambientLightColor.needsUpdate=I,v.lightProbe.needsUpdate=I,v.directionalLights.needsUpdate=I,v.directionalLightShadows.needsUpdate=I,v.pointLights.needsUpdate=I,v.pointLightShadows.needsUpdate=I,v.spotLights.needsUpdate=I,v.spotLightShadows.needsUpdate=I,v.rectAreaLights.needsUpdate=I,v.hemisphereLights.needsUpdate=I}function fp(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(v,I,F){const B=St.get(v);B.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),St.get(v.texture).__webglTexture=I,St.get(v.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:F,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,I){const F=St.get(v);F.__webglFramebuffer=I,F.__useDefaultFramebuffer=I===void 0};const pp=A.createFramebuffer();this.setRenderTarget=function(v,I=0,F=0){U=v,C=I,w=F;let B=!0,D=null,J=!1,it=!1;if(v){const mt=St.get(v);if(mt.__useDefaultFramebuffer!==void 0)xt.bindFramebuffer(A.FRAMEBUFFER,null),B=!1;else if(mt.__webglFramebuffer===void 0)M.setupRenderTarget(v);else if(mt.__hasExternalTextures)M.rebindTextures(v,St.get(v.texture).__webglTexture,St.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Et=v.depthTexture;if(mt.__boundDepthTexture!==Et){if(Et!==null&&St.has(Et)&&(v.width!==Et.image.width||v.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(v)}}const Pt=v.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(it=!0);const Rt=St.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Rt[I])?D=Rt[I][F]:D=Rt[I],J=!0):v.samples>0&&M.useMultisampledRTT(v)===!1?D=St.get(v).__webglMultisampledFramebuffer:Array.isArray(Rt)?D=Rt[F]:D=Rt,R.copy(v.viewport),V.copy(v.scissor),H=v.scissorTest}else R.copy(vt).multiplyScalar(k).floor(),V.copy(Ot).multiplyScalar(k).floor(),H=jt;if(F!==0&&(D=pp),xt.bindFramebuffer(A.FRAMEBUFFER,D)&&B&&xt.drawBuffers(v,D),xt.viewport(R),xt.scissor(V),xt.setScissorTest(H),J){const mt=St.get(v.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+I,mt.__webglTexture,F)}else if(it){const mt=St.get(v.texture),Pt=I;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,mt.__webglTexture,F,Pt)}else if(v!==null&&F!==0){const mt=St.get(v.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,mt.__webglTexture,F)}y=-1},this.readRenderTargetPixels=function(v,I,F,B,D,J,it){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ht=St.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&it!==void 0&&(ht=ht[it]),ht){xt.bindFramebuffer(A.FRAMEBUFFER,ht);try{const mt=v.texture,Pt=mt.format,Rt=mt.type;if(!Ht.textureFormatReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ht.textureTypeReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=v.width-B&&F>=0&&F<=v.height-D&&A.readPixels(I,F,B,D,Nt.convert(Pt),Nt.convert(Rt),J)}finally{const mt=U!==null?St.get(U).__webglFramebuffer:null;xt.bindFramebuffer(A.FRAMEBUFFER,mt)}}},this.readRenderTargetPixelsAsync=async function(v,I,F,B,D,J,it){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ht=St.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&it!==void 0&&(ht=ht[it]),ht)if(I>=0&&I<=v.width-B&&F>=0&&F<=v.height-D){xt.bindFramebuffer(A.FRAMEBUFFER,ht);const mt=v.texture,Pt=mt.format,Rt=mt.type;if(!Ht.textureFormatReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ht.textureTypeReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Et=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Et),A.bufferData(A.PIXEL_PACK_BUFFER,J.byteLength,A.STREAM_READ),A.readPixels(I,F,B,D,Nt.convert(Pt),Nt.convert(Rt),0);const Wt=U!==null?St.get(U).__webglFramebuffer:null;xt.bindFramebuffer(A.FRAMEBUFFER,Wt);const Kt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await ym(A,Kt,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Et),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,J),A.deleteBuffer(Et),A.deleteSync(Kt),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,I=null,F=0){const B=Math.pow(2,-F),D=Math.floor(v.image.width*B),J=Math.floor(v.image.height*B),it=I!==null?I.x:0,ht=I!==null?I.y:0;M.setTexture2D(v,0),A.copyTexSubImage2D(A.TEXTURE_2D,F,0,0,it,ht,D,J),xt.unbindTexture()};const mp=A.createFramebuffer(),gp=A.createFramebuffer();this.copyTextureToTexture=function(v,I,F=null,B=null,D=0,J=null){J===null&&(D!==0?(fo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),J=D,D=0):J=0);let it,ht,mt,Pt,Rt,Et,Wt,Kt,ge;const ue=v.isCompressedTexture?v.mipmaps[J]:v.image;if(F!==null)it=F.max.x-F.min.x,ht=F.max.y-F.min.y,mt=F.isBox3?F.max.z-F.min.z:1,Pt=F.min.x,Rt=F.min.y,Et=F.isBox3?F.min.z:0;else{const je=Math.pow(2,-D);it=Math.floor(ue.width*je),ht=Math.floor(ue.height*je),v.isDataArrayTexture?mt=ue.depth:v.isData3DTexture?mt=Math.floor(ue.depth*je):mt=1,Pt=0,Rt=0,Et=0}B!==null?(Wt=B.x,Kt=B.y,ge=B.z):(Wt=0,Kt=0,ge=0);const $t=Nt.convert(I.format),Mt=Nt.convert(I.type);let Te;I.isData3DTexture?(M.setTexture3D(I,0),Te=A.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(M.setTexture2DArray(I,0),Te=A.TEXTURE_2D_ARRAY):(M.setTexture2D(I,0),Te=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,I.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,I.unpackAlignment);const Zt=A.getParameter(A.UNPACK_ROW_LENGTH),rn=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Bi=A.getParameter(A.UNPACK_SKIP_PIXELS),Ve=A.getParameter(A.UNPACK_SKIP_ROWS),Ur=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,ue.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,ue.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Pt),A.pixelStorei(A.UNPACK_SKIP_ROWS,Rt),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Et);const oe=v.isDataArrayTexture||v.isData3DTexture,qe=I.isDataArrayTexture||I.isData3DTexture;if(v.isDepthTexture){const je=St.get(v),Ie=St.get(I),Fe=St.get(je.__renderTarget),jo=St.get(Ie.__renderTarget);xt.bindFramebuffer(A.READ_FRAMEBUFFER,Fe.__webglFramebuffer),xt.bindFramebuffer(A.DRAW_FRAMEBUFFER,jo.__webglFramebuffer);for(let ui=0;ui<mt;ui++)oe&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,St.get(v).__webglTexture,D,Et+ui),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,St.get(I).__webglTexture,J,ge+ui)),A.blitFramebuffer(Pt,Rt,it,ht,Wt,Kt,it,ht,A.DEPTH_BUFFER_BIT,A.NEAREST);xt.bindFramebuffer(A.READ_FRAMEBUFFER,null),xt.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(D!==0||v.isRenderTargetTexture||St.has(v)){const je=St.get(v),Ie=St.get(I);xt.bindFramebuffer(A.READ_FRAMEBUFFER,mp),xt.bindFramebuffer(A.DRAW_FRAMEBUFFER,gp);for(let Fe=0;Fe<mt;Fe++)oe?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,je.__webglTexture,D,Et+Fe):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,je.__webglTexture,D),qe?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Ie.__webglTexture,J,ge+Fe):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Ie.__webglTexture,J),D!==0?A.blitFramebuffer(Pt,Rt,it,ht,Wt,Kt,it,ht,A.COLOR_BUFFER_BIT,A.NEAREST):qe?A.copyTexSubImage3D(Te,J,Wt,Kt,ge+Fe,Pt,Rt,it,ht):A.copyTexSubImage2D(Te,J,Wt,Kt,Pt,Rt,it,ht);xt.bindFramebuffer(A.READ_FRAMEBUFFER,null),xt.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else qe?v.isDataTexture||v.isData3DTexture?A.texSubImage3D(Te,J,Wt,Kt,ge,it,ht,mt,$t,Mt,ue.data):I.isCompressedArrayTexture?A.compressedTexSubImage3D(Te,J,Wt,Kt,ge,it,ht,mt,$t,ue.data):A.texSubImage3D(Te,J,Wt,Kt,ge,it,ht,mt,$t,Mt,ue):v.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,J,Wt,Kt,it,ht,$t,Mt,ue.data):v.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,J,Wt,Kt,ue.width,ue.height,$t,ue.data):A.texSubImage2D(A.TEXTURE_2D,J,Wt,Kt,it,ht,$t,Mt,ue);A.pixelStorei(A.UNPACK_ROW_LENGTH,Zt),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,rn),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Bi),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ve),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Ur),J===0&&I.generateMipmaps&&A.generateMipmap(Te),xt.unbindTexture()},this.copyTextureToTexture3D=function(v,I,F=null,B=null,D=0){return fo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,I,F,B,D)},this.initRenderTarget=function(v){St.get(v).__webglFramebuffer===void 0&&M.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?M.setTextureCube(v,0):v.isData3DTexture?M.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?M.setTexture2DArray(v,0):M.setTexture2D(v,0),xt.unbindTexture()},this.resetState=function(){C=0,w=0,U=null,xt.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}}const nh={type:"change"},yl={type:"start"},qd={type:"end"},Xs=new Ld,ih=new Jn,Y0=Math.cos(70*Rc.DEG2RAD),ve=new N,Be=2*Math.PI,ne={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Aa=1e-6;class q0 extends lg{constructor(t,e=null){super(t,e),this.state=ne.NONE,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:or.ROTATE,MIDDLE:or.DOLLY,RIGHT:or.PAN},this.touches={ONE:nr.ROTATE,TWO:nr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new wi,this._lastTargetPosition=new N,this._quat=new wi().setFromUnitVectors(t.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Pu,this._sphericalDelta=new Pu,this._scale=1,this._panOffset=new N,this._rotateStart=new yt,this._rotateEnd=new yt,this._rotateDelta=new yt,this._panStart=new yt,this._panEnd=new yt,this._panDelta=new yt,this._dollyStart=new yt,this._dollyEnd=new yt,this._dollyDelta=new yt,this._dollyDirection=new N,this._mouse=new yt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=K0.bind(this),this._onPointerDown=j0.bind(this),this._onPointerUp=Z0.bind(this),this._onContextMenu=rx.bind(this),this._onMouseWheel=tx.bind(this),this._onKeyDown=ex.bind(this),this._onTouchStart=nx.bind(this),this._onTouchMove=ix.bind(this),this._onMouseDown=J0.bind(this),this._onMouseMove=Q0.bind(this),this._interceptControlDown=sx.bind(this),this._interceptControlUp=ox.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(nh),this.update(),this.state=ne.NONE}update(t=null){const e=this.object.position;ve.copy(e).sub(this.target),ve.applyQuaternion(this._quat),this._spherical.setFromVector3(ve),this.autoRotate&&this.state===ne.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Be:i>Math.PI&&(i-=Be),r<-Math.PI?r+=Be:r>Math.PI&&(r-=Be),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(ve.setFromSpherical(this._spherical),ve.applyQuaternion(this._quatInverse),e.copy(this.target).add(ve),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=ve.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const a=new N(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const l=new N(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=ve.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Xs.origin.copy(this.object.position),Xs.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Xs.direction))<Y0?this.object.lookAt(this.target):(ih.setFromNormalAndCoplanarPoint(this.object.up,this.target),Xs.intersectPlane(ih,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Aa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Aa||this._lastTargetPosition.distanceToSquared(this.target)>Aa?(this.dispatchEvent(nh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Be/60*this.autoRotateSpeed*t:Be/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ve.setFromMatrixColumn(e,0),ve.multiplyScalar(-t),this._panOffset.add(ve)}_panUp(t,e){this.screenSpacePanning===!0?ve.setFromMatrixColumn(e,1):(ve.setFromMatrixColumn(e,0),ve.crossVectors(this.object.up,ve)),ve.multiplyScalar(t),this._panOffset.add(ve)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;ve.copy(r).sub(this.target);let s=ve.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/i.clientHeight,this.object.matrix),this._panUp(2*e*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=t-i.left,s=e-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Be*this._rotateDelta.x/e.clientHeight),this._rotateUp(Be*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Be*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Be*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Be*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Be*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(i,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),s=.5*(t.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Be*this._rotateDelta.x/e.clientHeight),this._rotateUp(Be*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new yt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function j0(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function K0(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Z0(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(qd),this.state=ne.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function J0(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case or.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ne.DOLLY;break;case or.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ne.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ne.ROTATE}break;case or.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ne.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ne.PAN}break;default:this.state=ne.NONE}this.state!==ne.NONE&&this.dispatchEvent(yl)}function Q0(n){switch(this.state){case ne.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ne.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ne.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function tx(n){this.enabled===!1||this.enableZoom===!1||this.state!==ne.NONE||(n.preventDefault(),this.dispatchEvent(yl),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(qd))}function ex(n){this.enabled!==!1&&this._handleKeyDown(n)}function nx(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case nr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ne.TOUCH_ROTATE;break;case nr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ne.TOUCH_PAN;break;default:this.state=ne.NONE}break;case 2:switch(this.touches.TWO){case nr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ne.TOUCH_DOLLY_PAN;break;case nr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ne.TOUCH_DOLLY_ROTATE;break;default:this.state=ne.NONE}break;default:this.state=ne.NONE}this.state!==ne.NONE&&this.dispatchEvent(yl)}function ix(n){switch(this._trackPointer(n),this.state){case ne.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ne.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ne.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ne.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ne.NONE}}function rx(n){this.enabled!==!1&&n.preventDefault()}function sx(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ox(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */class yn{constructor(t,e,i,r,s="div"){this.parent=t,this.object=e,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("name"),yn.nextNameID=yn.nextNameID||0,this.$name.id="lil-gui-name-"+ ++yn.nextNameID,this.$widget=document.createElement(s),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(t){return this._name=t,this.$name.innerHTML=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled||(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t)),this}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.object[this.property]=t,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class ax extends yn{constructor(t,e,i){super(t,e,i,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Pc(n){let t,e;return(t=n.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=n.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=n.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),!!e&&"#"+e}const cx={isPrimitive:!0,match:n=>typeof n=="string",fromHexString:Pc,toHexString:Pc},ns={isPrimitive:!0,match:n=>typeof n=="number",fromHexString:n=>parseInt(n.substring(1),16),toHexString:n=>"#"+n.toString(16).padStart(6,0)},lx={isPrimitive:!1,match:Array.isArray,fromHexString(n,t,e=1){const i=ns.fromHexString(n);t[0]=(i>>16&255)/255*e,t[1]=(i>>8&255)/255*e,t[2]=(255&i)/255*e},toHexString:([n,t,e],i=1)=>ns.toHexString(n*(i=255/i)<<16^t*i<<8^e*i<<0)},ux={isPrimitive:!1,match:n=>Object(n)===n,fromHexString(n,t,e=1){const i=ns.fromHexString(n);t.r=(i>>16&255)/255*e,t.g=(i>>8&255)/255*e,t.b=(255&i)/255*e},toHexString:({r:n,g:t,b:e},i=1)=>ns.toHexString(n*(i=255/i)<<16^t*i<<8^e*i<<0)},hx=[cx,ns,lx,ux];class dx extends yn{constructor(t,e,i,r){var s;super(t,e,i,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(s=this.initialValue,hx.find(o=>o.match(s))),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const o=Pc(this.$text.value);o&&this._setValueFromHexString(o)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class wa extends yn{constructor(t,e,i){super(t,e,i,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",r=>{r.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class fx extends yn{constructor(t,e,i,r,s,o){super(t,e,i,"number"),this._initInput(),this.min(r),this.max(s);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=100*e+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=u=>{const h=parseFloat(this.$input.value);isNaN(h)||(this._snapClampSetValue(h+u),this.$input.value=this.getValue())};let e,i,r,s,o,a=!1;const c=u=>{if(a){const h=u.clientX-e,d=u.clientY-i;Math.abs(d)>5?(u.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(h)>5&&l()}if(!a){const h=u.clientY-r;o-=h*this._step*this._arrowKeyMultiplier(u),s+o>this._max?o=this._max-s:s+o<this._min&&(o=this._min-s),this._snapClampSetValue(s+o)}r=u.clientY},l=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",c),window.removeEventListener("mouseup",l)};this.$input.addEventListener("input",()=>{let u=parseFloat(this.$input.value);isNaN(u)||(this._stepExplicit&&(u=this._snap(u)),this.setValue(this._clamp(u)))}),this.$input.addEventListener("keydown",u=>{u.code==="Enter"&&this.$input.blur(),u.code==="ArrowUp"&&(u.preventDefault(),t(this._step*this._arrowKeyMultiplier(u))),u.code==="ArrowDown"&&(u.preventDefault(),t(this._step*this._arrowKeyMultiplier(u)*-1))}),this.$input.addEventListener("wheel",u=>{this._inputFocused&&(u.preventDefault(),t(this._step*this._normalizeMouseWheel(u)))},{passive:!1}),this.$input.addEventListener("mousedown",u=>{e=u.clientX,i=r=u.clientY,a=!0,s=this.getValue(),o=0,window.addEventListener("mousemove",c),window.addEventListener("mouseup",l)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=d=>{const p=this.$slider.getBoundingClientRect();let g=(S=d,m=p.left,f=p.right,b=this._min,T=this._max,(S-m)/(f-m)*(T-b)+b);var S,m,f,b,T;this._snapClampSetValue(g)},e=d=>{t(d.clientX)},i=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",e),window.removeEventListener("mouseup",i)};let r,s,o=!1;const a=d=>{d.preventDefault(),this._setDraggingStyle(!0),t(d.touches[0].clientX),o=!1},c=d=>{if(o){const p=d.touches[0].clientX-r,g=d.touches[0].clientY-s;Math.abs(p)>Math.abs(g)?a(d):(window.removeEventListener("touchmove",c),window.removeEventListener("touchend",l))}else d.preventDefault(),t(d.touches[0].clientX)},l=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",c),window.removeEventListener("touchend",l)},u=this._callOnFinishChange.bind(this);let h;this.$slider.addEventListener("mousedown",d=>{this._setDraggingStyle(!0),t(d.clientX),window.addEventListener("mousemove",e),window.addEventListener("mouseup",i)}),this.$slider.addEventListener("touchstart",d=>{d.touches.length>1||(this._hasScrollBar?(r=d.touches[0].clientX,s=d.touches[0].clientY,o=!0):a(d),window.addEventListener("touchmove",c,{passive:!1}),window.addEventListener("touchend",l))},{passive:!1}),this.$slider.addEventListener("wheel",d=>{if(Math.abs(d.deltaX)<Math.abs(d.deltaY)&&this._hasScrollBar)return;d.preventDefault();const p=this._normalizeMouseWheel(d)*this._step;this._snapClampSetValue(this.getValue()+p),this.$input.value=this.getValue(),clearTimeout(h),h=setTimeout(u,400)},{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle("lil-gui-"+e,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:i}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,i=-t.wheelDelta/120,i*=this._stepExplicit?1:10),e+-i}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){const e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class px extends yn{constructor(t,e,i,r){super(t,e,i,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(r)?r:Object.values(r),this._names=Array.isArray(r)?r:Object.keys(r),this._names.forEach(s=>{const o=document.createElement("option");o.innerHTML=s,this.$select.appendChild(o)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.innerHTML=e===-1?t:this._names[e],this}}class mx extends yn{constructor(t,e,i){super(t,e,i,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}let rh=!1;class Ml{constructor({parent:t,autoPlace:e=t===void 0,container:i,width:r,title:s="Controls",injectStyles:o=!0,touchStyles:a=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{c.code!=="Enter"&&c.code!=="Space"||(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),a&&this.domElement.classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!rh&&o&&(function(c){const l=document.createElement("style");l.innerHTML=c;const u=document.querySelector("head link[rel=stylesheet], head style");u?document.head.insertBefore(l,u):document.head.appendChild(l)}('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"↕";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"▾";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"▸"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"✓";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'),rh=!0),i?i.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this.domElement.addEventListener("keydown",c=>c.stopPropagation()),this.domElement.addEventListener("keyup",c=>c.stopPropagation())}add(t,e,i,r,s){if(Object(i)===i)return new px(this,t,e,i);const o=t[e];switch(typeof o){case"number":return new fx(this,t,e,i,r,s);case"boolean":return new ax(this,t,e);case"string":return new mx(this,t,e);case"function":return new wa(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,o)}addColor(t,e,i=1){return new dx(this,t,e,i)}addFolder(t){return new Ml({parent:this,title:t})}load(t,e=!0){return t.controllers&&this.controllers.forEach(i=>{i instanceof wa||i._name in t.controllers&&i.load(t.controllers[i._name])}),e&&t.folders&&this.folders.forEach(i=>{i._title in t.folders&&i.load(t.folders[i._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof wa)){if(i._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);e.controllers[i._name]=i.save()}}),t&&this.folders.forEach(i=>{if(i._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);e.folders[i._title]=i.save()}),e}open(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const i=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const r=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(t){return this._title=t,this.$title.innerHTML=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(e=>e.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}const mo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class cs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const gx=new xl(-1,1,1,-1,0,1);class _x extends $n{constructor(){super(),this.setAttribute("position",new Qe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Qe([0,2,0,0,2,0],2))}}const vx=new _x;class jd{constructor(t){this._mesh=new ke(vx,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,gx)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Sx extends cs{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Ne?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Mo.clone(t.uniforms),this.material=new Ne({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new jd(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class sh extends cs{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const r=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class xx extends cs{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Ex{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new yt);this._width=i.width,this._height=i.height,e=new dn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:kn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Sx(mo),this.copyPass.material.blending=Bn,this.clock=new cg}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}sh!==void 0&&(o instanceof sh?i=!0:o instanceof xx&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new yt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class yx extends cs{constructor(t,e,i=null,r=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Bt}render(t,e,i){const r=t.autoClear;t.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=r}}const Mx={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Bt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class gr extends cs{constructor(t,e=1,i,r){super(),this.strength=e,this.radius=i,this.threshold=r,this.resolution=t!==void 0?new yt(t.x,t.y):new yt(256,256),this.clearColor=new Bt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new dn(s,o,{type:kn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const h=new dn(s,o,{type:kn});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const d=new dn(s,o,{type:kn});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),o=Math.round(o/2)}const a=Mx;this.highPassUniforms=Mo.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ne({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new yt(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Mo.clone(mo.uniforms),this.blendMaterial=new Ne({uniforms:this.copyUniforms,vertexShader:mo.vertexShader,fragmentShader:mo.fragmentShader,blending:Ga,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Bt,this._oldClearAlpha=1,this._basic=new gl,this._fsQuad=new jd(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),r=Math.round(e/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new yt(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(t,e,i,r,s){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=gr.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=gr.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){const e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new Ne({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new yt(.5,.5)},direction:{value:new yt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(t){return new Ne({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}gr.BlurDirectionX=new yt(1,0);gr.BlurDirectionY=new yt(0,1);const ee=typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__,bi="9.17.0",Jt=globalThis;function Uo(){return Oo(Jt),Jt}function Oo(n){const t=n.__SENTRY__=n.__SENTRY__||{};return t.version=t.version||bi,t[bi]=t[bi]||{}}function Fo(n,t,e=Jt){const i=e.__SENTRY__=e.__SENTRY__||{},r=i[bi]=i[bi]||{};return r[n]||(r[n]=t())}const Kd=Object.prototype.toString;function Tl(n){switch(Kd.call(n)){case"[object Error]":case"[object Exception]":case"[object DOMException]":case"[object WebAssembly.Exception]":return!0;default:return oi(n,Error)}}function Ar(n,t){return Kd.call(n)===`[object ${t}]`}function Zd(n){return Ar(n,"ErrorEvent")}function oh(n){return Ar(n,"DOMError")}function Tx(n){return Ar(n,"DOMException")}function zn(n){return Ar(n,"String")}function bl(n){return typeof n=="object"&&n!==null&&"__sentry_template_string__"in n&&"__sentry_template_values__"in n}function Al(n){return n===null||bl(n)||typeof n!="object"&&typeof n!="function"}function is(n){return Ar(n,"Object")}function Bo(n){return typeof Event<"u"&&oi(n,Event)}function bx(n){return typeof Element<"u"&&oi(n,Element)}function Ax(n){return Ar(n,"RegExp")}function ko(n){return!!(n!=null&&n.then&&typeof n.then=="function")}function wx(n){return is(n)&&"nativeEvent"in n&&"preventDefault"in n&&"stopPropagation"in n}function oi(n,t){try{return n instanceof t}catch{return!1}}function Jd(n){return!!(typeof n=="object"&&n!==null&&(n.__isVue||n._isVue))}function Rx(n){return typeof Request<"u"&&oi(n,Request)}const wl=Jt,Cx=80;function Qd(n,t={}){if(!n)return"<unknown>";try{let e=n;const i=5,r=[];let s=0,o=0;const a=" > ",c=a.length;let l;const u=Array.isArray(t)?t:t.keyAttrs,h=!Array.isArray(t)&&t.maxStringLength||Cx;for(;e&&s++<i&&(l=Px(e,u),!(l==="html"||s>1&&o+r.length*c+l.length>=h));)r.push(l),o+=l.length,e=e.parentNode;return r.reverse().join(a)}catch{return"<unknown>"}}function Px(n,t){const e=n,i=[];if(!(e!=null&&e.tagName))return"";if(wl.HTMLElement&&e instanceof HTMLElement&&e.dataset){if(e.dataset.sentryComponent)return e.dataset.sentryComponent;if(e.dataset.sentryElement)return e.dataset.sentryElement}i.push(e.tagName.toLowerCase());const r=t!=null&&t.length?t.filter(o=>e.getAttribute(o)).map(o=>[o,e.getAttribute(o)]):null;if(r!=null&&r.length)r.forEach(o=>{i.push(`[${o[0]}="${o[1]}"]`)});else{e.id&&i.push(`#${e.id}`);const o=e.className;if(o&&zn(o)){const a=o.split(/\s+/);for(const c of a)i.push(`.${c}`)}}const s=["aria-label","type","name","title","alt"];for(const o of s){const a=e.getAttribute(o);a&&i.push(`[${o}="${a}"]`)}return i.join("")}function Rl(){try{return wl.document.location.href}catch{return""}}function Ix(n){if(!wl.HTMLElement)return null;let t=n;const e=5;for(let i=0;i<e;i++){if(!t)return null;if(t instanceof HTMLElement){if(t.dataset.sentryComponent)return t.dataset.sentryComponent;if(t.dataset.sentryElement)return t.dataset.sentryElement}t=t.parentNode}return null}const Ui=typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__,Dx="Sentry Logger ",Ic=["debug","info","warn","error","log","assert","trace"],To={};function wr(n){if(!("console"in Jt))return n();const t=Jt.console,e={},i=Object.keys(To);i.forEach(r=>{const s=To[r];e[r]=t[r],t[r]=s});try{return n()}finally{i.forEach(r=>{t[r]=e[r]})}}function Lx(){let n=!1;const t={enable:()=>{n=!0},disable:()=>{n=!1},isEnabled:()=>n};return Ui?Ic.forEach(e=>{t[e]=(...i)=>{n&&wr(()=>{Jt.console[e](`${Dx}[${e}]:`,...i)})}}):Ic.forEach(e=>{t[e]=()=>{}}),t}const At=Fo("logger",Lx);function bo(n,t=0){return typeof n!="string"||t===0||n.length<=t?n:`${n.slice(0,t)}...`}function ah(n,t){if(!Array.isArray(n))return"";const e=[];for(let i=0;i<n.length;i++){const r=n[i];try{Jd(r)?e.push("[VueViewModel]"):e.push(String(r))}catch{e.push("[value cannot be serialized]")}}return e.join(t)}function Nx(n,t,e=!1){return zn(n)?Ax(t)?t.test(n):zn(t)?e?n===t:n.includes(t):!1:!1}function Ho(n,t=[],e=!1){return t.some(i=>Nx(n,i,e))}function Xe(n,t,e){if(!(t in n))return;const i=n[t];if(typeof i!="function")return;const r=e(i);typeof r=="function"&&tf(r,i);try{n[t]=r}catch{Ui&&At.log(`Failed to replace method "${t}" in object`,n)}}function Ci(n,t,e){try{Object.defineProperty(n,t,{value:e,writable:!0,configurable:!0})}catch{Ui&&At.log(`Failed to add non-enumerable property "${t}" to object`,n)}}function tf(n,t){try{const e=t.prototype||{};n.prototype=t.prototype=e,Ci(n,"__sentry_original__",t)}catch{}}function Cl(n){return n.__sentry_original__}function ef(n){if(Tl(n))return{message:n.message,name:n.name,stack:n.stack,...lh(n)};if(Bo(n)){const t={type:n.type,target:ch(n.target),currentTarget:ch(n.currentTarget),...lh(n)};return typeof CustomEvent<"u"&&oi(n,CustomEvent)&&(t.detail=n.detail),t}else return n}function ch(n){try{return bx(n)?Qd(n):Object.prototype.toString.call(n)}catch{return"<unknown>"}}function lh(n){if(typeof n=="object"&&n!==null){const t={};for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t}else return{}}function Ux(n,t=40){const e=Object.keys(ef(n));e.sort();const i=e[0];if(!i)return"[object has no keys]";if(i.length>=t)return bo(i,t);for(let r=e.length;r>0;r--){const s=e.slice(0,r).join(", ");if(!(s.length>t))return r===e.length?s:bo(s,t)}return""}function Ox(){const n=Jt;return n.crypto||n.msCrypto}function tn(n=Ox()){let t=()=>Math.random()*16;try{if(n!=null&&n.randomUUID)return n.randomUUID().replace(/-/g,"");n!=null&&n.getRandomValues&&(t=()=>{const e=new Uint8Array(1);return n.getRandomValues(e),e[0]})}catch{}return("10000000100040008000"+1e11).replace(/[018]/g,e=>(e^(t()&15)>>e/4).toString(16))}function nf(n){var t,e;return(e=(t=n.exception)==null?void 0:t.values)==null?void 0:e[0]}function xi(n){const{message:t,event_id:e}=n;if(t)return t;const i=nf(n);return i?i.type&&i.value?`${i.type}: ${i.value}`:i.type||i.value||e||"<unknown>":e||"<unknown>"}function Dc(n,t,e){const i=n.exception=n.exception||{},r=i.values=i.values||[],s=r[0]=r[0]||{};s.value||(s.value=t||""),s.type||(s.type="Error")}function _r(n,t){const e=nf(n);if(!e)return;const i={type:"generic",handled:!0},r=e.mechanism;if(e.mechanism={...i,...r,...t},t&&"data"in t){const s={...r==null?void 0:r.data,...t.data};e.mechanism.data=s}}function uh(n){if(Fx(n))return!0;try{Ci(n,"__sentry_captured__",!0)}catch{}return!1}function Fx(n){try{return n.__sentry_captured__}catch{}}const rf=1e3;function ls(){return Date.now()/rf}function Bx(){const{performance:n}=Jt;if(!(n!=null&&n.now))return ls;const t=Date.now()-n.now(),e=n.timeOrigin==null?t:n.timeOrigin;return()=>(e+n.now())/rf}const Gn=Bx();function kx(n){const t=Gn(),e={sid:tn(),init:!0,timestamp:t,started:t,duration:0,status:"ok",errors:0,ignoreDuration:!1,toJSON:()=>zx(e)};return n&&vr(e,n),e}function vr(n,t={}){if(t.user&&(!n.ipAddress&&t.user.ip_address&&(n.ipAddress=t.user.ip_address),!n.did&&!t.did&&(n.did=t.user.id||t.user.email||t.user.username)),n.timestamp=t.timestamp||Gn(),t.abnormal_mechanism&&(n.abnormal_mechanism=t.abnormal_mechanism),t.ignoreDuration&&(n.ignoreDuration=t.ignoreDuration),t.sid&&(n.sid=t.sid.length===32?t.sid:tn()),t.init!==void 0&&(n.init=t.init),!n.did&&t.did&&(n.did=`${t.did}`),typeof t.started=="number"&&(n.started=t.started),n.ignoreDuration)n.duration=void 0;else if(typeof t.duration=="number")n.duration=t.duration;else{const e=n.timestamp-n.started;n.duration=e>=0?e:0}t.release&&(n.release=t.release),t.environment&&(n.environment=t.environment),!n.ipAddress&&t.ipAddress&&(n.ipAddress=t.ipAddress),!n.userAgent&&t.userAgent&&(n.userAgent=t.userAgent),typeof t.errors=="number"&&(n.errors=t.errors),t.status&&(n.status=t.status)}function Hx(n,t){let e={};n.status==="ok"&&(e={status:"exited"}),vr(n,e)}function zx(n){return{sid:`${n.sid}`,init:n.init,started:new Date(n.started*1e3).toISOString(),timestamp:new Date(n.timestamp*1e3).toISOString(),status:n.status,errors:n.errors,did:typeof n.did=="number"||typeof n.did=="string"?`${n.did}`:void 0,duration:n.duration,abnormal_mechanism:n.abnormal_mechanism,attrs:{release:n.release,environment:n.environment,ip_address:n.ipAddress,user_agent:n.userAgent}}}function us(n,t,e=2){if(!t||typeof t!="object"||e<=0)return t;if(n&&Object.keys(t).length===0)return n;const i={...n};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=us(i[r],t[r],e-1));return i}const Lc="_sentrySpan";function hh(n,t){t?Ci(n,Lc,t):delete n[Lc]}function dh(n){return n[Lc]}function fh(){return tn()}function sf(){return tn().substring(16)}const Gx=100;let Sr=class Nc{constructor(){this._notifyingListeners=!1,this._scopeListeners=[],this._eventProcessors=[],this._breadcrumbs=[],this._attachments=[],this._user={},this._tags={},this._extra={},this._contexts={},this._sdkProcessingMetadata={},this._propagationContext={traceId:fh(),sampleRand:Math.random()}}clone(){const t=new Nc;return t._breadcrumbs=[...this._breadcrumbs],t._tags={...this._tags},t._extra={...this._extra},t._contexts={...this._contexts},this._contexts.flags&&(t._contexts.flags={values:[...this._contexts.flags.values]}),t._user=this._user,t._level=this._level,t._session=this._session,t._transactionName=this._transactionName,t._fingerprint=this._fingerprint,t._eventProcessors=[...this._eventProcessors],t._attachments=[...this._attachments],t._sdkProcessingMetadata={...this._sdkProcessingMetadata},t._propagationContext={...this._propagationContext},t._client=this._client,t._lastEventId=this._lastEventId,hh(t,dh(this)),t}setClient(t){this._client=t}setLastEventId(t){this._lastEventId=t}getClient(){return this._client}lastEventId(){return this._lastEventId}addScopeListener(t){this._scopeListeners.push(t)}addEventProcessor(t){return this._eventProcessors.push(t),this}setUser(t){return this._user=t||{email:void 0,id:void 0,ip_address:void 0,username:void 0},this._session&&vr(this._session,{user:t}),this._notifyScopeListeners(),this}getUser(){return this._user}setTags(t){return this._tags={...this._tags,...t},this._notifyScopeListeners(),this}setTag(t,e){return this._tags={...this._tags,[t]:e},this._notifyScopeListeners(),this}setExtras(t){return this._extra={...this._extra,...t},this._notifyScopeListeners(),this}setExtra(t,e){return this._extra={...this._extra,[t]:e},this._notifyScopeListeners(),this}setFingerprint(t){return this._fingerprint=t,this._notifyScopeListeners(),this}setLevel(t){return this._level=t,this._notifyScopeListeners(),this}setTransactionName(t){return this._transactionName=t,this._notifyScopeListeners(),this}setContext(t,e){return e===null?delete this._contexts[t]:this._contexts[t]=e,this._notifyScopeListeners(),this}setSession(t){return t?this._session=t:delete this._session,this._notifyScopeListeners(),this}getSession(){return this._session}update(t){if(!t)return this;const e=typeof t=="function"?t(this):t,i=e instanceof Nc?e.getScopeData():is(e)?t:void 0,{tags:r,extra:s,user:o,contexts:a,level:c,fingerprint:l=[],propagationContext:u}=i||{};return this._tags={...this._tags,...r},this._extra={...this._extra,...s},this._contexts={...this._contexts,...a},o&&Object.keys(o).length&&(this._user=o),c&&(this._level=c),l.length&&(this._fingerprint=l),u&&(this._propagationContext=u),this}clear(){return this._breadcrumbs=[],this._tags={},this._extra={},this._user={},this._contexts={},this._level=void 0,this._transactionName=void 0,this._fingerprint=void 0,this._session=void 0,hh(this,void 0),this._attachments=[],this.setPropagationContext({traceId:fh(),sampleRand:Math.random()}),this._notifyScopeListeners(),this}addBreadcrumb(t,e){var s;const i=typeof e=="number"?e:Gx;if(i<=0)return this;const r={timestamp:ls(),...t,message:t.message?bo(t.message,2048):t.message};return this._breadcrumbs.push(r),this._breadcrumbs.length>i&&(this._breadcrumbs=this._breadcrumbs.slice(-i),(s=this._client)==null||s.recordDroppedEvent("buffer_overflow","log_item")),this._notifyScopeListeners(),this}getLastBreadcrumb(){return this._breadcrumbs[this._breadcrumbs.length-1]}clearBreadcrumbs(){return this._breadcrumbs=[],this._notifyScopeListeners(),this}addAttachment(t){return this._attachments.push(t),this}clearAttachments(){return this._attachments=[],this}getScopeData(){return{breadcrumbs:this._breadcrumbs,attachments:this._attachments,contexts:this._contexts,tags:this._tags,extra:this._extra,user:this._user,level:this._level,fingerprint:this._fingerprint||[],eventProcessors:this._eventProcessors,propagationContext:this._propagationContext,sdkProcessingMetadata:this._sdkProcessingMetadata,transactionName:this._transactionName,span:dh(this)}}setSDKProcessingMetadata(t){return this._sdkProcessingMetadata=us(this._sdkProcessingMetadata,t,2),this}setPropagationContext(t){return this._propagationContext=t,this}getPropagationContext(){return this._propagationContext}captureException(t,e){const i=(e==null?void 0:e.event_id)||tn();if(!this._client)return At.warn("No client configured on scope - will not capture exception!"),i;const r=new Error("Sentry syntheticException");return this._client.captureException(t,{originalException:t,syntheticException:r,...e,event_id:i},this),i}captureMessage(t,e,i){const r=(i==null?void 0:i.event_id)||tn();if(!this._client)return At.warn("No client configured on scope - will not capture message!"),r;const s=new Error(t);return this._client.captureMessage(t,e,{originalException:t,syntheticException:s,...i,event_id:r},this),r}captureEvent(t,e){const i=(e==null?void 0:e.event_id)||tn();return this._client?(this._client.captureEvent(t,{...e,event_id:i},this),i):(At.warn("No client configured on scope - will not capture event!"),i)}_notifyScopeListeners(){this._notifyingListeners||(this._notifyingListeners=!0,this._scopeListeners.forEach(t=>{t(this)}),this._notifyingListeners=!1)}};function Vx(){return Fo("defaultCurrentScope",()=>new Sr)}function Wx(){return Fo("defaultIsolationScope",()=>new Sr)}class $x{constructor(t,e){let i;t?i=t:i=new Sr;let r;e?r=e:r=new Sr,this._stack=[{scope:i}],this._isolationScope=r}withScope(t){const e=this._pushScope();let i;try{i=t(e)}catch(r){throw this._popScope(),r}return ko(i)?i.then(r=>(this._popScope(),r),r=>{throw this._popScope(),r}):(this._popScope(),i)}getClient(){return this.getStackTop().client}getScope(){return this.getStackTop().scope}getIsolationScope(){return this._isolationScope}getStackTop(){return this._stack[this._stack.length-1]}_pushScope(){const t=this.getScope().clone();return this._stack.push({client:this.getClient(),scope:t}),t}_popScope(){return this._stack.length<=1?!1:!!this._stack.pop()}}function xr(){const n=Uo(),t=Oo(n);return t.stack=t.stack||new $x(Vx(),Wx())}function Xx(n){return xr().withScope(n)}function Yx(n,t){const e=xr();return e.withScope(()=>(e.getStackTop().scope=n,t(n)))}function ph(n){return xr().withScope(()=>n(xr().getIsolationScope()))}function qx(){return{withIsolationScope:ph,withScope:Xx,withSetScope:Yx,withSetIsolationScope:(n,t)=>ph(t),getCurrentScope:()=>xr().getScope(),getIsolationScope:()=>xr().getIsolationScope()}}function Pl(n){const t=Oo(n);return t.acs?t.acs:qx()}function ci(){const n=Uo();return Pl(n).getCurrentScope()}function hs(){const n=Uo();return Pl(n).getIsolationScope()}function jx(){return Fo("globalScope",()=>new Sr)}function Kx(...n){const t=Uo(),e=Pl(t);if(n.length===2){const[i,r]=n;return i?e.withSetScope(i,r):e.withScope(r)}return e.withScope(n[0])}function Oe(){return ci().getClient()}function Zx(n){const t=n.getPropagationContext(),{traceId:e,parentSpanId:i,propagationSpanId:r}=t,s={trace_id:e,span_id:r||sf()};return i&&(s.parent_span_id=i),s}const Jx="sentry.source",Qx="sentry.sample_rate",tE="sentry.previous_trace_sample_rate",eE="sentry.op",nE="sentry.origin",of="sentry.profile_id",af="sentry.exclusive_time",iE=0,rE=1,sE="_sentryScope",oE="_sentryIsolationScope";function cf(n){return{scope:n[sE],isolationScope:n[oE]}}function aE(n){if(typeof n=="boolean")return Number(n);const t=typeof n=="string"?parseFloat(n):n;if(!(typeof t!="number"||isNaN(t)||t<0||t>1))return t}const cE="sentry-",lE=/^sentry-/;function uE(n){const t=hE(n);if(!t)return;const e=Object.entries(t).reduce((i,[r,s])=>{if(r.match(lE)){const o=r.slice(cE.length);i[o]=s}return i},{});if(Object.keys(e).length>0)return e}function hE(n){if(!(!n||!zn(n)&&!Array.isArray(n)))return Array.isArray(n)?n.reduce((t,e)=>{const i=mh(e);return Object.entries(i).forEach(([r,s])=>{t[r]=s}),t},{}):mh(n)}function mh(n){return n.split(",").map(t=>t.split("=").map(e=>decodeURIComponent(e.trim()))).reduce((t,[e,i])=>(e&&i&&(t[e]=i),t),{})}const lf=1;let gh=!1;function dE(n){const{spanId:t,traceId:e,isRemote:i}=n.spanContext(),r=i?t:Il(n).parent_span_id,s=cf(n).scope,o=i?(s==null?void 0:s.getPropagationContext().propagationSpanId)||sf():t;return{parent_span_id:r,span_id:o,trace_id:e}}function fE(n){if(n&&n.length>0)return n.map(({context:{spanId:t,traceId:e,traceFlags:i,...r},attributes:s})=>({span_id:t,trace_id:e,sampled:i===lf,attributes:s,...r}))}function _h(n){return typeof n=="number"?vh(n):Array.isArray(n)?n[0]+n[1]/1e9:n instanceof Date?vh(n.getTime()):Gn()}function vh(n){return n>9999999999?n/1e3:n}function Il(n){if(mE(n))return n.getSpanJSON();const{spanId:t,traceId:e}=n.spanContext();if(pE(n)){const{attributes:i,startTime:r,name:s,endTime:o,parentSpanId:a,status:c,links:l}=n;return{span_id:t,trace_id:e,data:i,description:s,parent_span_id:a,start_timestamp:_h(r),timestamp:_h(o)||void 0,status:_E(c),op:i[eE],origin:i[nE],links:fE(l)}}return{span_id:t,trace_id:e,start_timestamp:0,data:{}}}function pE(n){const t=n;return!!t.attributes&&!!t.startTime&&!!t.name&&!!t.endTime&&!!t.status}function mE(n){return typeof n.getSpanJSON=="function"}function gE(n){const{traceFlags:t}=n.spanContext();return t===lf}function _E(n){if(!(!n||n.code===iE))return n.code===rE?"ok":n.message||"unknown_error"}const vE="_sentryRootSpan";function uf(n){return n[vE]||n}function Sh(){gh||(wr(()=>{console.warn("[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly.")}),gh=!0)}const hf=50,Pi="?",xh=/\(error: (.*)\)/,Eh=/captureMessage|captureException/;function df(...n){const t=n.sort((e,i)=>e[0]-i[0]).map(e=>e[1]);return(e,i=0,r=0)=>{const s=[],o=e.split(`
`);for(let a=i;a<o.length;a++){const c=o[a];if(c.length>1024)continue;const l=xh.test(c)?c.replace(xh,"$1"):c;if(!l.match(/\S*Error: /)){for(const u of t){const h=u(l);if(h){s.push(h);break}}if(s.length>=hf+r)break}}return xE(s.slice(r))}}function SE(n){return Array.isArray(n)?df(...n):n}function xE(n){if(!n.length)return[];const t=Array.from(n);return/sentryWrapped/.test(Ys(t).function||"")&&t.pop(),t.reverse(),Eh.test(Ys(t).function||"")&&(t.pop(),Eh.test(Ys(t).function||"")&&t.pop()),t.slice(0,hf).map(e=>({...e,filename:e.filename||Ys(t).filename,function:e.function||Pi}))}function Ys(n){return n[n.length-1]||{}}const Ra="<anonymous>";function ai(n){try{return!n||typeof n!="function"?Ra:n.name||Ra}catch{return Ra}}function yh(n){const t=n.exception;if(t){const e=[];try{return t.values.forEach(i=>{i.stacktrace.frames&&e.push(...i.stacktrace.frames)}),e}catch{return}}}const go={},Mh={};function Oi(n,t){go[n]=go[n]||[],go[n].push(t)}function Fi(n,t){if(!Mh[n]){Mh[n]=!0;try{t()}catch(e){Ui&&At.error(`Error while instrumenting ${n}`,e)}}}function fn(n,t){const e=n&&go[n];if(e)for(const i of e)try{i(t)}catch(r){Ui&&At.error(`Error while triggering instrumentation handler.
Type: ${n}
Name: ${ai(i)}
Error:`,r)}}let Ca=null;function EE(n){const t="error";Oi(t,n),Fi(t,yE)}function yE(){Ca=Jt.onerror,Jt.onerror=function(n,t,e,i,r){return fn("error",{column:i,error:r,line:e,msg:n,url:t}),Ca?Ca.apply(this,arguments):!1},Jt.onerror.__SENTRY_INSTRUMENTED__=!0}let Pa=null;function ME(n){const t="unhandledrejection";Oi(t,n),Fi(t,TE)}function TE(){Pa=Jt.onunhandledrejection,Jt.onunhandledrejection=function(n){return fn("unhandledrejection",n),Pa?Pa.apply(this,arguments):!0},Jt.onunhandledrejection.__SENTRY_INSTRUMENTED__=!0}function bE(n){var e;if(typeof __SENTRY_TRACING__=="boolean"&&!__SENTRY_TRACING__)return!1;const t=n||((e=Oe())==null?void 0:e.getOptions());return!!t&&(t.tracesSampleRate!=null||!!t.tracesSampler)}const Dl="production",AE="_frozenDsc";function ff(n,t){const e=t.getOptions(),{publicKey:i}=t.getDsn()||{},r={environment:e.environment||Dl,release:e.release,public_key:i,trace_id:n};return t.emit("createDsc",r),r}function wE(n,t){const e=t.getPropagationContext();return e.dsc||ff(e.traceId,n)}function RE(n){var g;const t=Oe();if(!t)return{};const e=uf(n),i=Il(e),r=i.data,s=e.spanContext().traceState,o=(s==null?void 0:s.get("sentry.sample_rate"))??r[Qx]??r[tE];function a(S){return(typeof o=="number"||typeof o=="string")&&(S.sample_rate=`${o}`),S}const c=e[AE];if(c)return a(c);const l=s==null?void 0:s.get("sentry.dsc"),u=l&&uE(l);if(u)return a(u);const h=ff(n.spanContext().traceId,t),d=r[Jx],p=i.description;return d!=="url"&&p&&(h.transaction=p),bE()&&(h.sampled=String(gE(e)),h.sample_rand=(s==null?void 0:s.get("sentry.sample_rand"))??((g=cf(e).scope)==null?void 0:g.getPropagationContext().sampleRand.toString())),a(h),t.emit("createDsc",h,e),h}const CE=/^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;function PE(n){return n==="http"||n==="https"}function zo(n,t=!1){const{host:e,path:i,pass:r,port:s,projectId:o,protocol:a,publicKey:c}=n;return`${a}://${c}${t&&r?`:${r}`:""}@${e}${s?`:${s}`:""}/${i&&`${i}/`}${o}`}function IE(n){const t=CE.exec(n);if(!t){wr(()=>{console.error(`Invalid Sentry Dsn: ${n}`)});return}const[e,i,r="",s="",o="",a=""]=t.slice(1);let c="",l=a;const u=l.split("/");if(u.length>1&&(c=u.slice(0,-1).join("/"),l=u.pop()),l){const h=l.match(/^\d+/);h&&(l=h[0])}return pf({host:s,pass:r,path:c,projectId:l,port:o,protocol:e,publicKey:i})}function pf(n){return{protocol:n.protocol,publicKey:n.publicKey||"",pass:n.pass||"",host:n.host,port:n.port||"",path:n.path||"",projectId:n.projectId}}function DE(n){if(!Ui)return!0;const{port:t,projectId:e,protocol:i}=n;return["protocol","publicKey","host","projectId"].find(o=>n[o]?!1:(At.error(`Invalid Sentry Dsn: ${o} missing`),!0))?!1:e.match(/^\d+$/)?PE(i)?t&&isNaN(parseInt(t,10))?(At.error(`Invalid Sentry Dsn: Invalid port ${t}`),!1):!0:(At.error(`Invalid Sentry Dsn: Invalid protocol ${i}`),!1):(At.error(`Invalid Sentry Dsn: Invalid projectId ${e}`),!1)}function LE(n){const t=typeof n=="string"?IE(n):pf(n);if(!(!t||!DE(t)))return t}function In(n,t=100,e=1/0){try{return Uc("",n,t,e)}catch(i){return{ERROR:`**non-serializable** (${i})`}}}function mf(n,t=3,e=100*1024){const i=In(n,t);return FE(i)>e?mf(n,t-1,e):i}function Uc(n,t,e=1/0,i=1/0,r=BE()){const[s,o]=r;if(t==null||["boolean","string"].includes(typeof t)||typeof t=="number"&&Number.isFinite(t))return t;const a=NE(n,t);if(!a.startsWith("[object "))return a;if(t.__sentry_skip_normalization__)return t;const c=typeof t.__sentry_override_normalization_depth__=="number"?t.__sentry_override_normalization_depth__:e;if(c===0)return a.replace("object ","");if(s(t))return"[Circular ~]";const l=t;if(l&&typeof l.toJSON=="function")try{const p=l.toJSON();return Uc("",p,c-1,i,r)}catch{}const u=Array.isArray(t)?[]:{};let h=0;const d=ef(t);for(const p in d){if(!Object.prototype.hasOwnProperty.call(d,p))continue;if(h>=i){u[p]="[MaxProperties ~]";break}const g=d[p];u[p]=Uc(p,g,c-1,i,r),h++}return o(t),u}function NE(n,t){try{if(n==="domain"&&t&&typeof t=="object"&&t._events)return"[Domain]";if(n==="domainEmitter")return"[DomainEmitter]";if(typeof global<"u"&&t===global)return"[Global]";if(typeof window<"u"&&t===window)return"[Window]";if(typeof document<"u"&&t===document)return"[Document]";if(Jd(t))return"[VueViewModel]";if(wx(t))return"[SyntheticEvent]";if(typeof t=="number"&&!Number.isFinite(t))return`[${t}]`;if(typeof t=="function")return`[Function: ${ai(t)}]`;if(typeof t=="symbol")return`[${String(t)}]`;if(typeof t=="bigint")return`[BigInt: ${String(t)}]`;const e=UE(t);return/^HTML(\w*)Element$/.test(e)?`[HTMLElement: ${e}]`:`[object ${e}]`}catch(e){return`**non-serializable** (${e})`}}function UE(n){const t=Object.getPrototypeOf(n);return t!=null&&t.constructor?t.constructor.name:"null prototype"}function OE(n){return~-encodeURI(n).split(/%..|./).length}function FE(n){return OE(JSON.stringify(n))}function BE(){const n=new WeakSet;function t(i){return n.has(i)?!0:(n.add(i),!1)}function e(i){n.delete(i)}return[t,e]}function ds(n,t=[]){return[n,t]}function kE(n,t){const[e,i]=n;return[e,[...i,t]]}function Th(n,t){const e=n[1];for(const i of e){const r=i[0].type;if(t(i,r))return!0}return!1}function Oc(n){const t=Oo(Jt);return t.encodePolyfill?t.encodePolyfill(n):new TextEncoder().encode(n)}function HE(n){const[t,e]=n;let i=JSON.stringify(t);function r(s){typeof i=="string"?i=typeof s=="string"?i+s:[Oc(i),s]:i.push(typeof s=="string"?Oc(s):s)}for(const s of e){const[o,a]=s;if(r(`
${JSON.stringify(o)}
`),typeof a=="string"||a instanceof Uint8Array)r(a);else{let c;try{c=JSON.stringify(a)}catch{c=JSON.stringify(In(a))}r(c)}}return typeof i=="string"?i:zE(i)}function zE(n){const t=n.reduce((r,s)=>r+s.length,0),e=new Uint8Array(t);let i=0;for(const r of n)e.set(r,i),i+=r.length;return e}function GE(n){const t=typeof n.data=="string"?Oc(n.data):n.data;return[{type:"attachment",length:t.length,filename:n.filename,content_type:n.contentType,attachment_type:n.attachmentType},t]}const VE={session:"session",sessions:"session",attachment:"attachment",transaction:"transaction",event:"error",client_report:"internal",user_report:"default",profile:"profile",profile_chunk:"profile",replay_event:"replay",replay_recording:"replay",check_in:"monitor",feedback:"feedback",span:"span",raw_security:"security",log:"log_item"};function bh(n){return VE[n]}function gf(n){if(!(n!=null&&n.sdk))return;const{name:t,version:e}=n.sdk;return{name:t,version:e}}function WE(n,t,e,i){var s;const r=(s=n.sdkProcessingMetadata)==null?void 0:s.dynamicSamplingContext;return{event_id:n.event_id,sent_at:new Date().toISOString(),...t&&{sdk:t},...!!e&&i&&{dsn:zo(i)},...r&&{trace:r}}}function $E(n,t){return t&&(n.sdk=n.sdk||{},n.sdk.name=n.sdk.name||t.name,n.sdk.version=n.sdk.version||t.version,n.sdk.integrations=[...n.sdk.integrations||[],...t.integrations||[]],n.sdk.packages=[...n.sdk.packages||[],...t.packages||[]]),n}function XE(n,t,e,i){const r=gf(e),s={sent_at:new Date().toISOString(),...r&&{sdk:r},...!!i&&t&&{dsn:zo(t)}},o="aggregates"in n?[{type:"sessions"},n]:[{type:"session"},n.toJSON()];return ds(s,[o])}function YE(n,t,e,i){const r=gf(e),s=n.type&&n.type!=="replay_event"?n.type:"event";$E(n,e==null?void 0:e.sdk);const o=WE(n,r,i,t);return delete n.sdkProcessingMetadata,ds(o,[[{type:s},n]])}var Dn;(function(n){n[n.PENDING=0]="PENDING";const e=1;n[n.RESOLVED=e]="RESOLVED";const i=2;n[n.REJECTED=i]="REJECTED"})(Dn||(Dn={}));function Ii(n){return new fs(t=>{t(n)})}function Ao(n){return new fs((t,e)=>{e(n)})}let fs=class Fc{constructor(t){this._state=Dn.PENDING,this._handlers=[],this._runExecutor(t)}then(t,e){return new Fc((i,r)=>{this._handlers.push([!1,s=>{if(!t)i(s);else try{i(t(s))}catch(o){r(o)}},s=>{if(!e)r(s);else try{i(e(s))}catch(o){r(o)}}]),this._executeHandlers()})}catch(t){return this.then(e=>e,t)}finally(t){return new Fc((e,i)=>{let r,s;return this.then(o=>{s=!1,r=o,t&&t()},o=>{s=!0,r=o,t&&t()}).then(()=>{if(s){i(r);return}e(r)})})}_executeHandlers(){if(this._state===Dn.PENDING)return;const t=this._handlers.slice();this._handlers=[],t.forEach(e=>{e[0]||(this._state===Dn.RESOLVED&&e[1](this._value),this._state===Dn.REJECTED&&e[2](this._value),e[0]=!0)})}_runExecutor(t){const e=(s,o)=>{if(this._state===Dn.PENDING){if(ko(o)){o.then(i,r);return}this._state=s,this._value=o,this._executeHandlers()}},i=s=>{e(Dn.RESOLVED,s)},r=s=>{e(Dn.REJECTED,s)};try{t(i,r)}catch(s){r(s)}}};function Bc(n,t,e,i=0){return new fs((r,s)=>{const o=n[i];if(t===null||typeof o!="function")r(t);else{const a=o({...t},e);ee&&o.id&&a===null&&At.log(`Event processor "${o.id}" dropped event`),ko(a)?a.then(c=>Bc(n,c,e,i+1).then(r)).then(null,s):Bc(n,a,e,i+1).then(r).then(null,s)}})}let qs,Ah,js;function qE(n){const t=Jt._sentryDebugIds;if(!t)return{};const e=Object.keys(t);return js&&e.length===Ah||(Ah=e.length,js=e.reduce((i,r)=>{qs||(qs={});const s=qs[r];if(s)i[s[0]]=s[1];else{const o=n(r);for(let a=o.length-1;a>=0;a--){const c=o[a],l=c==null?void 0:c.filename,u=t[r];if(l&&u){i[l]=u,qs[r]=[l,u];break}}}return i},{})),js}function jE(n,t){const{fingerprint:e,span:i,breadcrumbs:r,sdkProcessingMetadata:s}=t;KE(n,t),i&&QE(n,i),ty(n,e),ZE(n,r),JE(n,s)}function wh(n,t){const{extra:e,tags:i,user:r,contexts:s,level:o,sdkProcessingMetadata:a,breadcrumbs:c,fingerprint:l,eventProcessors:u,attachments:h,propagationContext:d,transactionName:p,span:g}=t;Ks(n,"extra",e),Ks(n,"tags",i),Ks(n,"user",r),Ks(n,"contexts",s),n.sdkProcessingMetadata=us(n.sdkProcessingMetadata,a,2),o&&(n.level=o),p&&(n.transactionName=p),g&&(n.span=g),c.length&&(n.breadcrumbs=[...n.breadcrumbs,...c]),l.length&&(n.fingerprint=[...n.fingerprint,...l]),u.length&&(n.eventProcessors=[...n.eventProcessors,...u]),h.length&&(n.attachments=[...n.attachments,...h]),n.propagationContext={...n.propagationContext,...d}}function Ks(n,t,e){n[t]=us(n[t],e,1)}function KE(n,t){const{extra:e,tags:i,user:r,contexts:s,level:o,transactionName:a}=t;Object.keys(e).length&&(n.extra={...e,...n.extra}),Object.keys(i).length&&(n.tags={...i,...n.tags}),Object.keys(r).length&&(n.user={...r,...n.user}),Object.keys(s).length&&(n.contexts={...s,...n.contexts}),o&&(n.level=o),a&&n.type!=="transaction"&&(n.transaction=a)}function ZE(n,t){const e=[...n.breadcrumbs||[],...t];n.breadcrumbs=e.length?e:void 0}function JE(n,t){n.sdkProcessingMetadata={...n.sdkProcessingMetadata,...t}}function QE(n,t){n.contexts={trace:dE(t),...n.contexts},n.sdkProcessingMetadata={dynamicSamplingContext:RE(t),...n.sdkProcessingMetadata};const e=uf(t),i=Il(e).description;i&&!n.transaction&&n.type==="transaction"&&(n.transaction=i)}function ty(n,t){n.fingerprint=n.fingerprint?Array.isArray(n.fingerprint)?n.fingerprint:[n.fingerprint]:[],t&&(n.fingerprint=n.fingerprint.concat(t)),n.fingerprint.length||delete n.fingerprint}function ey(n,t,e,i,r,s){const{normalizeDepth:o=3,normalizeMaxBreadth:a=1e3}=n,c={...t,event_id:t.event_id||e.event_id||tn(),timestamp:t.timestamp||ls()},l=e.integrations||n.integrations.map(m=>m.name);ny(c,n),sy(c,l),r&&r.emit("applyFrameMetadata",t),t.type===void 0&&iy(c,n.stackParser);const u=ay(i,e.captureContext);e.mechanism&&_r(c,e.mechanism);const h=r?r.getEventProcessors():[],d=jx().getScopeData();if(s){const m=s.getScopeData();wh(d,m)}if(u){const m=u.getScopeData();wh(d,m)}const p=[...e.attachments||[],...d.attachments];p.length&&(e.attachments=p),jE(c,d);const g=[...h,...d.eventProcessors];return Bc(g,c,e).then(m=>(m&&ry(m),typeof o=="number"&&o>0?oy(m,o,a):m))}function ny(n,t){const{environment:e,release:i,dist:r,maxValueLength:s=250}=t;n.environment=n.environment||e||Dl,!n.release&&i&&(n.release=i),!n.dist&&r&&(n.dist=r);const o=n.request;o!=null&&o.url&&(o.url=bo(o.url,s))}function iy(n,t){var i,r;const e=qE(t);(r=(i=n.exception)==null?void 0:i.values)==null||r.forEach(s=>{var o,a;(a=(o=s.stacktrace)==null?void 0:o.frames)==null||a.forEach(c=>{c.filename&&(c.debug_id=e[c.filename])})})}function ry(n){var i,r;const t={};if((r=(i=n.exception)==null?void 0:i.values)==null||r.forEach(s=>{var o,a;(a=(o=s.stacktrace)==null?void 0:o.frames)==null||a.forEach(c=>{c.debug_id&&(c.abs_path?t[c.abs_path]=c.debug_id:c.filename&&(t[c.filename]=c.debug_id),delete c.debug_id)})}),Object.keys(t).length===0)return;n.debug_meta=n.debug_meta||{},n.debug_meta.images=n.debug_meta.images||[];const e=n.debug_meta.images;Object.entries(t).forEach(([s,o])=>{e.push({type:"sourcemap",code_file:s,debug_id:o})})}function sy(n,t){t.length>0&&(n.sdk=n.sdk||{},n.sdk.integrations=[...n.sdk.integrations||[],...t])}function oy(n,t,e){var r,s;if(!n)return null;const i={...n,...n.breadcrumbs&&{breadcrumbs:n.breadcrumbs.map(o=>({...o,...o.data&&{data:In(o.data,t,e)}}))},...n.user&&{user:In(n.user,t,e)},...n.contexts&&{contexts:In(n.contexts,t,e)},...n.extra&&{extra:In(n.extra,t,e)}};return(r=n.contexts)!=null&&r.trace&&i.contexts&&(i.contexts.trace=n.contexts.trace,n.contexts.trace.data&&(i.contexts.trace.data=In(n.contexts.trace.data,t,e))),n.spans&&(i.spans=n.spans.map(o=>({...o,...o.data&&{data:In(o.data,t,e)}}))),(s=n.contexts)!=null&&s.flags&&i.contexts&&(i.contexts.flags=In(n.contexts.flags,3,e)),i}function ay(n,t){if(!t)return n;const e=n?n.clone():new Sr;return e.update(t),e}function cy(n,t){return ci().captureException(n,void 0)}function _f(n,t){return ci().captureEvent(n,t)}function Rh(n){const t=hs(),e=ci(),{userAgent:i}=Jt.navigator||{},r=kx({user:e.getUser()||t.getUser(),...i&&{userAgent:i},...n}),s=t.getSession();return(s==null?void 0:s.status)==="ok"&&vr(s,{status:"exited"}),vf(),t.setSession(r),r}function vf(){const n=hs(),e=ci().getSession()||n.getSession();e&&Hx(e),Sf(),n.setSession()}function Sf(){const n=hs(),t=Oe(),e=n.getSession();e&&t&&t.captureSession(e)}function Ch(n=!1){if(n){vf();return}Sf()}const ly="7";function uy(n){const t=n.protocol?`${n.protocol}:`:"",e=n.port?`:${n.port}`:"";return`${t}//${n.host}${e}${n.path?`/${n.path}`:""}/api/`}function hy(n){return`${uy(n)}${n.projectId}/envelope/`}function dy(n,t){const e={sentry_version:ly};return n.publicKey&&(e.sentry_key=n.publicKey),t&&(e.sentry_client=`${t.name}/${t.version}`),new URLSearchParams(e).toString()}function fy(n,t,e){return t||`${hy(n)}?${dy(n,e)}`}const Ph=[];function py(n){const t={};return n.forEach(e=>{const{name:i}=e,r=t[i];r&&!r.isDefaultInstance&&e.isDefaultInstance||(t[i]=e)}),Object.values(t)}function my(n){const t=n.defaultIntegrations||[],e=n.integrations;t.forEach(r=>{r.isDefaultInstance=!0});let i;if(Array.isArray(e))i=[...t,...e];else if(typeof e=="function"){const r=e(t);i=Array.isArray(r)?r:[r]}else i=t;return py(i)}function gy(n,t){const e={};return t.forEach(i=>{i&&xf(n,i,e)}),e}function Ih(n,t){for(const e of t)e!=null&&e.afterAllSetup&&e.afterAllSetup(n)}function xf(n,t,e){if(e[t.name]){ee&&At.log(`Integration skipped because it was already installed: ${t.name}`);return}if(e[t.name]=t,Ph.indexOf(t.name)===-1&&typeof t.setupOnce=="function"&&(t.setupOnce(),Ph.push(t.name)),t.setup&&typeof t.setup=="function"&&t.setup(n),typeof t.preprocessEvent=="function"){const i=t.preprocessEvent.bind(t);n.on("preprocessEvent",(r,s)=>i(r,s,n))}if(typeof t.processEvent=="function"){const i=t.processEvent.bind(t),r=Object.assign((s,o)=>i(s,o,n),{id:t.name});n.addEventProcessor(r)}ee&&At.log(`Integration installed: ${t.name}`)}function Ef(n){const t=[];n.message&&t.push(n.message);try{const e=n.exception.values[n.exception.values.length-1];e!=null&&e.value&&(t.push(e.value),e.type&&t.push(`${e.type}: ${e.value}`))}catch{}return t}function _y(n){var c;const{trace_id:t,parent_span_id:e,span_id:i,status:r,origin:s,data:o,op:a}=((c=n.contexts)==null?void 0:c.trace)??{};return{data:o??{},description:n.transaction,op:a,parent_span_id:e,span_id:i??"",start_timestamp:n.start_timestamp??0,status:r,timestamp:n.timestamp,trace_id:t??"",origin:s,profile_id:o==null?void 0:o[of],exclusive_time:o==null?void 0:o[af],measurements:n.measurements,is_segment:!0}}function vy(n){return{type:"transaction",timestamp:n.timestamp,start_timestamp:n.start_timestamp,transaction:n.description,contexts:{trace:{trace_id:n.trace_id,span_id:n.span_id,parent_span_id:n.parent_span_id,op:n.op,status:n.status,origin:n.origin,data:{...n.data,...n.profile_id&&{[of]:n.profile_id},...n.exclusive_time&&{[af]:n.exclusive_time}}}},measurements:n.measurements}}function Sy(n,t,e){const i=[{type:"client_report"},{timestamp:ls(),discarded_events:n}];return ds(t?{dsn:t}:{},[i])}const Dh="Not capturing exception because it's already been captured.",Lh="Discarded session because of missing or non-string release",yf=Symbol.for("SentryInternalError"),Mf=Symbol.for("SentryDoNotSendEventError");function _o(n){return{message:n,[yf]:!0}}function Ia(n){return{message:n,[Mf]:!0}}function Nh(n){return!!n&&typeof n=="object"&&yf in n}function Uh(n){return!!n&&typeof n=="object"&&Mf in n}class xy{constructor(t){if(this._options=t,this._integrations={},this._numProcessing=0,this._outcomes={},this._hooks={},this._eventProcessors=[],t.dsn?this._dsn=LE(t.dsn):ee&&At.warn("No DSN provided, client will not send events."),this._dsn){const e=fy(this._dsn,t.tunnel,t._metadata?t._metadata.sdk:void 0);this._transport=t.transport({tunnel:this._options.tunnel,recordDroppedEvent:this.recordDroppedEvent.bind(this),...t.transportOptions,url:e})}}captureException(t,e,i){const r=tn();if(uh(t))return ee&&At.log(Dh),r;const s={event_id:r,...e};return this._process(this.eventFromException(t,s).then(o=>this._captureEvent(o,s,i))),s.event_id}captureMessage(t,e,i,r){const s={event_id:tn(),...i},o=bl(t)?t:String(t),a=Al(t)?this.eventFromMessage(o,e,s):this.eventFromException(t,s);return this._process(a.then(c=>this._captureEvent(c,s,r))),s.event_id}captureEvent(t,e,i){const r=tn();if(e!=null&&e.originalException&&uh(e.originalException))return ee&&At.log(Dh),r;const s={event_id:r,...e},o=t.sdkProcessingMetadata||{},a=o.capturedSpanScope,c=o.capturedSpanIsolationScope;return this._process(this._captureEvent(t,s,a||i,c)),s.event_id}captureSession(t){this.sendSession(t),vr(t,{init:!1})}getDsn(){return this._dsn}getOptions(){return this._options}getSdkMetadata(){return this._options._metadata}getTransport(){return this._transport}flush(t){const e=this._transport;return e?(this.emit("flush"),this._isClientDoneProcessing(t).then(i=>e.flush(t).then(r=>i&&r))):Ii(!0)}close(t){return this.flush(t).then(e=>(this.getOptions().enabled=!1,this.emit("close"),e))}getEventProcessors(){return this._eventProcessors}addEventProcessor(t){this._eventProcessors.push(t)}init(){(this._isEnabled()||this._options.integrations.some(({name:t})=>t.startsWith("Spotlight")))&&this._setupIntegrations()}getIntegrationByName(t){return this._integrations[t]}addIntegration(t){const e=this._integrations[t.name];xf(this,t,this._integrations),e||Ih(this,[t])}sendEvent(t,e={}){this.emit("beforeSendEvent",t,e);let i=YE(t,this._dsn,this._options._metadata,this._options.tunnel);for(const s of e.attachments||[])i=kE(i,GE(s));const r=this.sendEnvelope(i);r&&r.then(s=>this.emit("afterSendEvent",t,s),null)}sendSession(t){const{release:e,environment:i=Dl}=this._options;if("aggregates"in t){const s=t.attrs||{};if(!s.release&&!e){ee&&At.warn(Lh);return}s.release=s.release||e,s.environment=s.environment||i,t.attrs=s}else{if(!t.release&&!e){ee&&At.warn(Lh);return}t.release=t.release||e,t.environment=t.environment||i}this.emit("beforeSendSession",t);const r=XE(t,this._dsn,this._options._metadata,this._options.tunnel);this.sendEnvelope(r)}recordDroppedEvent(t,e,i=1){if(this._options.sendClientReports){const r=`${t}:${e}`;ee&&At.log(`Recording outcome: "${r}"${i>1?` (${i} times)`:""}`),this._outcomes[r]=(this._outcomes[r]||0)+i}}on(t,e){const i=this._hooks[t]=this._hooks[t]||[];return i.push(e),()=>{const r=i.indexOf(e);r>-1&&i.splice(r,1)}}emit(t,...e){const i=this._hooks[t];i&&i.forEach(r=>r(...e))}sendEnvelope(t){return this.emit("beforeEnvelope",t),this._isEnabled()&&this._transport?this._transport.send(t).then(null,e=>(ee&&At.error("Error while sending envelope:",e),e)):(ee&&At.error("Transport disabled"),Ii({}))}_setupIntegrations(){const{integrations:t}=this._options;this._integrations=gy(this,t),Ih(this,t)}_updateSessionFromEvent(t,e){var c;let i=e.level==="fatal",r=!1;const s=(c=e.exception)==null?void 0:c.values;if(s){r=!0;for(const l of s){const u=l.mechanism;if((u==null?void 0:u.handled)===!1){i=!0;break}}}const o=t.status==="ok";(o&&t.errors===0||o&&i)&&(vr(t,{...i&&{status:"crashed"},errors:t.errors||Number(r||i)}),this.captureSession(t))}_isClientDoneProcessing(t){return new fs(e=>{let i=0;const r=1,s=setInterval(()=>{this._numProcessing==0?(clearInterval(s),e(!0)):(i+=r,t&&i>=t&&(clearInterval(s),e(!1)))},r)})}_isEnabled(){return this.getOptions().enabled!==!1&&this._transport!==void 0}_prepareEvent(t,e,i,r){const s=this.getOptions(),o=Object.keys(this._integrations);return!e.integrations&&(o!=null&&o.length)&&(e.integrations=o),this.emit("preprocessEvent",t,e),t.type||r.setLastEventId(t.event_id||e.event_id),ey(s,t,e,i,this,r).then(a=>{if(a===null)return a;this.emit("postprocessEvent",a,e),a.contexts={trace:Zx(i),...a.contexts};const c=wE(this,i);return a.sdkProcessingMetadata={dynamicSamplingContext:c,...a.sdkProcessingMetadata},a})}_captureEvent(t,e={},i=ci(),r=hs()){return ee&&kc(t)&&At.log(`Captured error event \`${Ef(t)[0]||"<unknown>"}\``),this._processEvent(t,e,i,r).then(s=>s.event_id,s=>{ee&&(Uh(s)?At.log(s.message):Nh(s)?At.warn(s.message):At.warn(s))})}_processEvent(t,e,i,r){const s=this.getOptions(),{sampleRate:o}=s,a=Tf(t),c=kc(t),l=t.type||"error",u=`before send for type \`${l}\``,h=typeof o>"u"?void 0:aE(o);if(c&&typeof h=="number"&&Math.random()>h)return this.recordDroppedEvent("sample_rate","error"),Ao(Ia(`Discarding event because it's not included in the random sample (sampling rate = ${o})`));const d=l==="replay_event"?"replay":l;return this._prepareEvent(t,e,i,r).then(p=>{if(p===null)throw this.recordDroppedEvent("event_processor",d),Ia("An event processor returned `null`, will not send event.");if(e.data&&e.data.__sentry__===!0)return p;const S=yy(this,s,p,e);return Ey(S,u)}).then(p=>{var m;if(p===null){if(this.recordDroppedEvent("before_send",d),a){const b=1+(t.spans||[]).length;this.recordDroppedEvent("before_send","span",b)}throw Ia(`${u} returned \`null\`, will not send event.`)}const g=i.getSession()||r.getSession();if(c&&g&&this._updateSessionFromEvent(g,p),a){const f=((m=p.sdkProcessingMetadata)==null?void 0:m.spanCountBeforeProcessing)||0,b=p.spans?p.spans.length:0,T=f-b;T>0&&this.recordDroppedEvent("before_send","span",T)}const S=p.transaction_info;if(a&&S&&p.transaction!==t.transaction){const f="custom";p.transaction_info={...S,source:f}}return this.sendEvent(p,e),p}).then(null,p=>{throw Uh(p)||Nh(p)?p:(this.captureException(p,{data:{__sentry__:!0},originalException:p}),_o(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${p}`))})}_process(t){this._numProcessing++,t.then(e=>(this._numProcessing--,e),e=>(this._numProcessing--,e))}_clearOutcomes(){const t=this._outcomes;return this._outcomes={},Object.entries(t).map(([e,i])=>{const[r,s]=e.split(":");return{reason:r,category:s,quantity:i}})}_flushOutcomes(){ee&&At.log("Flushing outcomes...");const t=this._clearOutcomes();if(t.length===0){ee&&At.log("No outcomes to send");return}if(!this._dsn){ee&&At.log("No dsn provided, will not send outcomes");return}ee&&At.log("Sending outcomes:",t);const e=Sy(t,this._options.tunnel&&zo(this._dsn));this.sendEnvelope(e)}}function Ey(n,t){const e=`${t} must return \`null\` or a valid event.`;if(ko(n))return n.then(i=>{if(!is(i)&&i!==null)throw _o(e);return i},i=>{throw _o(`${t} rejected with ${i}`)});if(!is(n)&&n!==null)throw _o(e);return n}function yy(n,t,e,i){const{beforeSend:r,beforeSendTransaction:s,beforeSendSpan:o}=t;let a=e;if(kc(a)&&r)return r(a,i);if(Tf(a)){if(o){const c=o(_y(a));if(c?a=us(e,vy(c)):Sh(),a.spans){const l=[];for(const u of a.spans){const h=o(u);h?l.push(h):(Sh(),l.push(u))}a.spans=l}}if(s){if(a.spans){const c=a.spans.length;a.sdkProcessingMetadata={...e.sdkProcessingMetadata,spanCountBeforeProcessing:c}}return s(a,i)}}return a}function kc(n){return n.type===void 0}function Tf(n){return n.type==="transaction"}function My(n){return[{type:"log",item_count:n.length,content_type:"application/vnd.sentry.items.log+json"},{items:n}]}function Ty(n,t,e,i){const r={};return t!=null&&t.sdk&&(r.sdk={name:t.sdk.name,version:t.sdk.version}),e&&i&&(r.dsn=zo(i)),ds(r,[My(n)])}Jt._sentryClientToLogBufferMap=new WeakMap;function Da(n,t){var s;const e=by(n)??[];if(e.length===0)return;const i=n.getOptions(),r=Ty(e,i._metadata,i.tunnel,n.getDsn());(s=Jt._sentryClientToLogBufferMap)==null||s.set(n,[]),n.emit("flushLogs"),n.sendEnvelope(r)}function by(n){var t;return(t=Jt._sentryClientToLogBufferMap)==null?void 0:t.get(n)}function Ay(n,t){t.debug===!0&&(ee?At.enable():wr(()=>{console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.")})),ci().update(t.initialScope);const i=new n(t);return wy(i),i.init(),i}function wy(n){ci().setClient(n)}const bf=Symbol.for("SentryBufferFullError");function Ry(n){const t=[];function e(){return n===void 0||t.length<n}function i(o){return t.splice(t.indexOf(o),1)[0]||Promise.resolve(void 0)}function r(o){if(!e())return Ao(bf);const a=o();return t.indexOf(a)===-1&&t.push(a),a.then(()=>i(a)).then(null,()=>i(a).then(null,()=>{})),a}function s(o){return new fs((a,c)=>{let l=t.length;if(!l)return a(!0);const u=setTimeout(()=>{o&&o>0&&a(!1)},o);t.forEach(h=>{Ii(h).then(()=>{--l||(clearTimeout(u),a(!0))},c)})})}return{$:t,add:r,drain:s}}const Cy=60*1e3;function Py(n,t=Date.now()){const e=parseInt(`${n}`,10);if(!isNaN(e))return e*1e3;const i=Date.parse(`${n}`);return isNaN(i)?Cy:i-t}function Iy(n,t){return n[t]||n.all||0}function Dy(n,t,e=Date.now()){return Iy(n,t)>e}function Ly(n,{statusCode:t,headers:e},i=Date.now()){const r={...n},s=e==null?void 0:e["x-sentry-rate-limits"],o=e==null?void 0:e["retry-after"];if(s)for(const a of s.trim().split(",")){const[c,l,,,u]=a.split(":",5),h=parseInt(c,10),d=(isNaN(h)?60:h)*1e3;if(!l)r.all=i+d;else for(const p of l.split(";"))p==="metric_bucket"?(!u||u.split(";").includes("custom"))&&(r[p]=i+d):r[p]=i+d}else o?r.all=i+Py(o,i):t===429&&(r.all=i+60*1e3);return r}const Ny=64;function Uy(n,t,e=Ry(n.bufferSize||Ny)){let i={};const r=o=>e.drain(o);function s(o){const a=[];if(Th(o,(h,d)=>{const p=bh(d);Dy(i,p)?n.recordDroppedEvent("ratelimit_backoff",p):a.push(h)}),a.length===0)return Ii({});const c=ds(o[0],a),l=h=>{Th(c,(d,p)=>{n.recordDroppedEvent(h,bh(p))})},u=()=>t({body:HE(c)}).then(h=>(h.statusCode!==void 0&&(h.statusCode<200||h.statusCode>=300)&&ee&&At.warn(`Sentry responded with status code ${h.statusCode} to sent event.`),i=Ly(i,h),h),h=>{throw l("network_error"),ee&&At.error("Encountered error running transport request:",h),h});return e.add(u).then(h=>h,h=>{if(h===bf)return ee&&At.error("Skipped sending event because buffer is full."),l("queue_overflow"),Ii({});throw h})}return{send:s,flush:r}}function Oy(n){var t;((t=n.user)==null?void 0:t.ip_address)===void 0&&(n.user={...n.user,ip_address:"{{auto}}"})}function Fy(n){var t;"aggregates"in n?((t=n.attrs)==null?void 0:t.ip_address)===void 0&&(n.attrs={...n.attrs,ip_address:"{{auto}}"}):n.ipAddress===void 0&&(n.ipAddress="{{auto}}")}function By(n,t,e=[t],i="npm"){const r=n._metadata||{};r.sdk||(r.sdk={name:`sentry.javascript.${t}`,packages:e.map(s=>({name:`${i}:@sentry/${s}`,version:bi})),version:bi}),n._metadata=r}const ky=100;function Di(n,t){const e=Oe(),i=hs();if(!e)return;const{beforeBreadcrumb:r=null,maxBreadcrumbs:s=ky}=e.getOptions();if(s<=0)return;const a={timestamp:ls(),...n},c=r?wr(()=>r(a,t)):a;c!==null&&(e.emit&&e.emit("beforeAddBreadcrumb",c,t),i.addBreadcrumb(c,s))}let Oh;const Hy="FunctionToString",Fh=new WeakMap,zy=()=>({name:Hy,setupOnce(){Oh=Function.prototype.toString;try{Function.prototype.toString=function(...n){const t=Cl(this),e=Fh.has(Oe())&&t!==void 0?t:this;return Oh.apply(e,n)}}catch{}},setup(n){Fh.set(n,!0)}}),Gy=zy,Vy=[/^Script error\.?$/,/^Javascript error: Script error\.? on line 0$/,/^ResizeObserver loop completed with undelivered notifications.$/,/^Cannot redefine property: googletag$/,/^Can't find variable: gmo$/,/^undefined is not an object \(evaluating 'a\.[A-Z]'\)$/,`can't redefine non-configurable property "solana"`,"vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)","Can't find variable: _AutofillCallbackHandler",/^Non-Error promise rejection captured with value: Object Not Found Matching Id:\d+, MethodName:simulateEvent, ParamCount:\d+$/,/^Java exception was raised during method invocation$/],Wy="EventFilters",$y=(n={})=>{let t;return{name:Wy,setup(e){const i=e.getOptions();t=Bh(n,i)},processEvent(e,i,r){if(!t){const s=r.getOptions();t=Bh(n,s)}return Yy(e,t)?null:e}}},Xy=(n={})=>({...$y(n),name:"InboundFilters"});function Bh(n={},t={}){return{allowUrls:[...n.allowUrls||[],...t.allowUrls||[]],denyUrls:[...n.denyUrls||[],...t.denyUrls||[]],ignoreErrors:[...n.ignoreErrors||[],...t.ignoreErrors||[],...n.disableErrorDefaults?[]:Vy],ignoreTransactions:[...n.ignoreTransactions||[],...t.ignoreTransactions||[]]}}function Yy(n,t){if(n.type){if(n.type==="transaction"&&jy(n,t.ignoreTransactions))return ee&&At.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${xi(n)}`),!0}else{if(qy(n,t.ignoreErrors))return ee&&At.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${xi(n)}`),!0;if(Qy(n))return ee&&At.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${xi(n)}`),!0;if(Ky(n,t.denyUrls))return ee&&At.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${xi(n)}.
Url: ${wo(n)}`),!0;if(!Zy(n,t.allowUrls))return ee&&At.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${xi(n)}.
Url: ${wo(n)}`),!0}return!1}function qy(n,t){return t!=null&&t.length?Ef(n).some(e=>Ho(e,t)):!1}function jy(n,t){if(!(t!=null&&t.length))return!1;const e=n.transaction;return e?Ho(e,t):!1}function Ky(n,t){if(!(t!=null&&t.length))return!1;const e=wo(n);return e?Ho(e,t):!1}function Zy(n,t){if(!(t!=null&&t.length))return!0;const e=wo(n);return e?Ho(e,t):!0}function Jy(n=[]){for(let t=n.length-1;t>=0;t--){const e=n[t];if(e&&e.filename!=="<anonymous>"&&e.filename!=="[native code]")return e.filename||null}return null}function wo(n){var t,e;try{const i=[...((t=n.exception)==null?void 0:t.values)??[]].reverse().find(s=>{var o,a,c;return((o=s.mechanism)==null?void 0:o.parent_id)===void 0&&((c=(a=s.stacktrace)==null?void 0:a.frames)==null?void 0:c.length)}),r=(e=i==null?void 0:i.stacktrace)==null?void 0:e.frames;return r?Jy(r):null}catch{return ee&&At.error(`Cannot extract url for event ${xi(n)}`),null}}function Qy(n){var t,e;return(e=(t=n.exception)==null?void 0:t.values)!=null&&e.length?!n.message&&!n.exception.values.some(i=>i.stacktrace||i.type&&i.type!=="Error"||i.value):!1}function tM(n,t,e,i,r,s){var a;if(!((a=r.exception)!=null&&a.values)||!s||!oi(s.originalException,Error))return;const o=r.exception.values.length>0?r.exception.values[r.exception.values.length-1]:void 0;o&&(r.exception.values=Hc(n,t,i,s.originalException,e,r.exception.values,o,0))}function Hc(n,t,e,i,r,s,o,a){if(s.length>=e+1)return s;let c=[...s];if(oi(i[r],Error)){kh(o,a);const l=n(t,i[r]),u=c.length;Hh(l,r,u,a),c=Hc(n,t,e,i[r],r,[l,...c],l,u)}return Array.isArray(i.errors)&&i.errors.forEach((l,u)=>{if(oi(l,Error)){kh(o,a);const h=n(t,l),d=c.length;Hh(h,`errors[${u}]`,d,a),c=Hc(n,t,e,l,r,[h,...c],h,d)}}),c}function kh(n,t){n.mechanism=n.mechanism||{type:"generic",handled:!0},n.mechanism={...n.mechanism,...n.type==="AggregateError"&&{is_exception_group:!0},exception_id:t}}function Hh(n,t,e,i){n.mechanism=n.mechanism||{type:"generic",handled:!0},n.mechanism={...n.mechanism,type:"chained",source:t,exception_id:e,parent_id:i}}function eM(n){const t="console";Oi(t,n),Fi(t,nM)}function nM(){"console"in Jt&&Ic.forEach(function(n){n in Jt.console&&Xe(Jt.console,n,function(t){return To[n]=t,function(...e){fn("console",{args:e,level:n});const r=To[n];r==null||r.apply(Jt.console,e)}})})}function iM(n){return n==="warn"?"warning":["fatal","error","warning","log","info","debug"].includes(n)?n:"log"}const rM="Dedupe",sM=()=>{let n;return{name:rM,processEvent(t){if(t.type)return t;try{if(aM(t,n))return ee&&At.warn("Event dropped due to being a duplicate of previously captured event."),null}catch{}return n=t}}},oM=sM;function aM(n,t){return t?!!(cM(n,t)||lM(n,t)):!1}function cM(n,t){const e=n.message,i=t.message;return!(!e&&!i||e&&!i||!e&&i||e!==i||!wf(n,t)||!Af(n,t))}function lM(n,t){const e=zh(t),i=zh(n);return!(!e||!i||e.type!==i.type||e.value!==i.value||!wf(n,t)||!Af(n,t))}function Af(n,t){let e=yh(n),i=yh(t);if(!e&&!i)return!0;if(e&&!i||!e&&i||(e=e,i=i,i.length!==e.length))return!1;for(let r=0;r<i.length;r++){const s=i[r],o=e[r];if(s.filename!==o.filename||s.lineno!==o.lineno||s.colno!==o.colno||s.function!==o.function)return!1}return!0}function wf(n,t){let e=n.fingerprint,i=t.fingerprint;if(!e&&!i)return!0;if(e&&!i||!e&&i)return!1;e=e,i=i;try{return e.join("")===i.join("")}catch{return!1}}function zh(n){var t;return((t=n.exception)==null?void 0:t.values)&&n.exception.values[0]}function La(n){if(!n)return{};const t=n.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);if(!t)return{};const e=t[6]||"",i=t[8]||"";return{host:t[4],path:t[5],protocol:t[2],search:e,hash:i,relative:t[5]+e+i}}function Rf(n){if(n!==void 0)return n>=400&&n<500?"warning":n>=500?"error":void 0}const rs=Jt;function uM(){return"history"in rs&&!!rs.history}function Cf(){if(!("fetch"in rs))return!1;try{return new Headers,new Request("http://www.example.com"),new Response,!0}catch{return!1}}function zc(n){return n&&/^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(n.toString())}function hM(){var e;if(typeof EdgeRuntime=="string")return!0;if(!Cf())return!1;if(zc(rs.fetch))return!0;let n=!1;const t=rs.document;if(t&&typeof t.createElement=="function")try{const i=t.createElement("iframe");i.hidden=!0,t.head.appendChild(i),(e=i.contentWindow)!=null&&e.fetch&&(n=zc(i.contentWindow.fetch)),t.head.removeChild(i)}catch(i){Ui&&At.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",i)}return n}function dM(n,t){const e="fetch";Oi(e,n),Fi(e,()=>fM(void 0,t))}function fM(n,t=!1){t&&!hM()||Xe(Jt,"fetch",function(e){return function(...i){const r=new Error,{method:s,url:o}=pM(i),a={args:i,fetchData:{method:s,url:o},startTimestamp:Gn()*1e3,virtualError:r,headers:mM(i)};return fn("fetch",{...a}),e.apply(Jt,i).then(async c=>(fn("fetch",{...a,endTimestamp:Gn()*1e3,response:c}),c),c=>{if(fn("fetch",{...a,endTimestamp:Gn()*1e3,error:c}),Tl(c)&&c.stack===void 0&&(c.stack=r.stack,Ci(c,"framesToPop",1)),c instanceof TypeError&&(c.message==="Failed to fetch"||c.message==="Load failed"||c.message==="NetworkError when attempting to fetch resource."))try{const l=new URL(a.fetchData.url);c.message=`${c.message} (${l.host})`}catch{}throw c})}})}function Gc(n,t){return!!n&&typeof n=="object"&&!!n[t]}function Gh(n){return typeof n=="string"?n:n?Gc(n,"url")?n.url:n.toString?n.toString():"":""}function pM(n){if(n.length===0)return{method:"GET",url:""};if(n.length===2){const[e,i]=n;return{url:Gh(e),method:Gc(i,"method")?String(i.method).toUpperCase():"GET"}}const t=n[0];return{url:Gh(t),method:Gc(t,"method")?String(t.method).toUpperCase():"GET"}}function mM(n){const[t,e]=n;try{if(typeof e=="object"&&e!==null&&"headers"in e&&e.headers)return new Headers(e.headers);if(Rx(t))return new Headers(t.headers)}catch{}}function gM(){return"npm"}const me=Jt;let Vc=0;function Pf(){return Vc>0}function _M(){Vc++,setTimeout(()=>{Vc--})}function Er(n,t={}){function e(r){return typeof r=="function"}if(!e(n))return n;try{const r=n.__sentry_wrapped__;if(r)return typeof r=="function"?r:n;if(Cl(n))return n}catch{return n}const i=function(...r){try{const s=r.map(o=>Er(o,t));return n.apply(this,s)}catch(s){throw _M(),Kx(o=>{o.addEventProcessor(a=>(t.mechanism&&(Dc(a,void 0),_r(a,t.mechanism)),a.extra={...a.extra,arguments:r},a)),cy(s)}),s}};try{for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&(i[r]=n[r])}catch{}tf(i,n),Ci(n,"__sentry_wrapped__",i);try{Object.getOwnPropertyDescriptor(i,"name").configurable&&Object.defineProperty(i,"name",{get(){return n.name}})}catch{}return i}function Ll(n,t){const e=Nl(n,t),i={type:yM(t),value:MM(t)};return e.length&&(i.stacktrace={frames:e}),i.type===void 0&&i.value===""&&(i.value="Unrecoverable error caught"),i}function vM(n,t,e,i){const r=Oe(),s=r==null?void 0:r.getOptions().normalizeDepth,o=RM(t),a={__serialized__:mf(t,s)};if(o)return{exception:{values:[Ll(n,o)]},extra:a};const c={exception:{values:[{type:Bo(t)?t.constructor.name:i?"UnhandledRejection":"Error",value:AM(t,{isUnhandledRejection:i})}]},extra:a};if(e){const l=Nl(n,e);l.length&&(c.exception.values[0].stacktrace={frames:l})}return c}function Na(n,t){return{exception:{values:[Ll(n,t)]}}}function Nl(n,t){const e=t.stacktrace||t.stack||"",i=xM(t),r=EM(t);try{return n(e,i,r)}catch{}return[]}const SM=/Minified React error #\d+;/i;function xM(n){return n&&SM.test(n.message)?1:0}function EM(n){return typeof n.framesToPop=="number"?n.framesToPop:0}function If(n){return typeof WebAssembly<"u"&&typeof WebAssembly.Exception<"u"?n instanceof WebAssembly.Exception:!1}function yM(n){const t=n==null?void 0:n.name;return!t&&If(n)?n.message&&Array.isArray(n.message)&&n.message.length==2?n.message[0]:"WebAssembly.Exception":t}function MM(n){const t=n==null?void 0:n.message;return If(n)?Array.isArray(n.message)&&n.message.length==2?n.message[1]:"wasm exception":t?t.error&&typeof t.error.message=="string"?t.error.message:t:"No error message"}function TM(n,t,e,i){const r=(e==null?void 0:e.syntheticException)||void 0,s=Ul(n,t,r,i);return _r(s),s.level="error",e!=null&&e.event_id&&(s.event_id=e.event_id),Ii(s)}function bM(n,t,e="info",i,r){const s=(i==null?void 0:i.syntheticException)||void 0,o=Wc(n,t,s,r);return o.level=e,i!=null&&i.event_id&&(o.event_id=i.event_id),Ii(o)}function Ul(n,t,e,i,r){let s;if(Zd(t)&&t.error)return Na(n,t.error);if(oh(t)||Tx(t)){const o=t;if("stack"in t)s=Na(n,t);else{const a=o.name||(oh(o)?"DOMError":"DOMException"),c=o.message?`${a}: ${o.message}`:a;s=Wc(n,c,e,i),Dc(s,c)}return"code"in o&&(s.tags={...s.tags,"DOMException.code":`${o.code}`}),s}return Tl(t)?Na(n,t):is(t)||Bo(t)?(s=vM(n,t,e,r),_r(s,{synthetic:!0}),s):(s=Wc(n,t,e,i),Dc(s,`${t}`),_r(s,{synthetic:!0}),s)}function Wc(n,t,e,i){const r={};if(i&&e){const s=Nl(n,e);s.length&&(r.exception={values:[{value:t,stacktrace:{frames:s}}]}),_r(r,{synthetic:!0})}if(bl(t)){const{__sentry_template_string__:s,__sentry_template_values__:o}=t;return r.logentry={message:s,params:o},r}return r.message=t,r}function AM(n,{isUnhandledRejection:t}){const e=Ux(n),i=t?"promise rejection":"exception";return Zd(n)?`Event \`ErrorEvent\` captured as ${i} with message \`${n.message}\``:Bo(n)?`Event \`${wM(n)}\` (type=${n.type}) captured as ${i}`:`Object captured as ${i} with keys: ${e}`}function wM(n){try{const t=Object.getPrototypeOf(n);return t?t.constructor.name:void 0}catch{}}function RM(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t)){const e=n[t];if(e instanceof Error)return e}}const CM=5e3;class PM extends xy{constructor(t){const e={parentSpanIsAlwaysRootSpan:!0,...t},i=me.SENTRY_SDK_SOURCE||gM();By(e,"browser",["browser"],i),super(e);const r=this,{sendDefaultPii:s,_experiments:o}=r._options,a=o==null?void 0:o.enableLogs;e.sendClientReports&&me.document&&me.document.addEventListener("visibilitychange",()=>{me.document.visibilityState==="hidden"&&(this._flushOutcomes(),a&&Da(r))}),a&&(r.on("flush",()=>{Da(r)}),r.on("afterCaptureLog",()=>{r._logFlushIdleTimeout&&clearTimeout(r._logFlushIdleTimeout),r._logFlushIdleTimeout=setTimeout(()=>{Da(r)},CM)})),s&&(r.on("postprocessEvent",Oy),r.on("beforeSendSession",Fy))}eventFromException(t,e){return TM(this._options.stackParser,t,e,this._options.attachStacktrace)}eventFromMessage(t,e="info",i){return bM(this._options.stackParser,t,e,i,this._options.attachStacktrace)}_prepareEvent(t,e,i,r){return t.platform=t.platform||"javascript",super._prepareEvent(t,e,i,r)}}const IM=typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__,He=Jt,DM=1e3;let Vh,$c,Xc;function LM(n){const t="dom";Oi(t,n),Fi(t,NM)}function NM(){if(!He.document)return;const n=fn.bind(null,"dom"),t=Wh(n,!0);He.document.addEventListener("click",t,!1),He.document.addEventListener("keypress",t,!1),["EventTarget","Node"].forEach(e=>{var s,o;const r=(s=He[e])==null?void 0:s.prototype;(o=r==null?void 0:r.hasOwnProperty)!=null&&o.call(r,"addEventListener")&&(Xe(r,"addEventListener",function(a){return function(c,l,u){if(c==="click"||c=="keypress")try{const h=this.__sentry_instrumentation_handlers__=this.__sentry_instrumentation_handlers__||{},d=h[c]=h[c]||{refCount:0};if(!d.handler){const p=Wh(n);d.handler=p,a.call(this,c,p,u)}d.refCount++}catch{}return a.call(this,c,l,u)}}),Xe(r,"removeEventListener",function(a){return function(c,l,u){if(c==="click"||c=="keypress")try{const h=this.__sentry_instrumentation_handlers__||{},d=h[c];d&&(d.refCount--,d.refCount<=0&&(a.call(this,c,d.handler,u),d.handler=void 0,delete h[c]),Object.keys(h).length===0&&delete this.__sentry_instrumentation_handlers__)}catch{}return a.call(this,c,l,u)}}))})}function UM(n){if(n.type!==$c)return!1;try{if(!n.target||n.target._sentryId!==Xc)return!1}catch{}return!0}function OM(n,t){return n!=="keypress"?!1:t!=null&&t.tagName?!(t.tagName==="INPUT"||t.tagName==="TEXTAREA"||t.isContentEditable):!0}function Wh(n,t=!1){return e=>{if(!e||e._sentryCaptured)return;const i=FM(e);if(OM(e.type,i))return;Ci(e,"_sentryCaptured",!0),i&&!i._sentryId&&Ci(i,"_sentryId",tn());const r=e.type==="keypress"?"input":e.type;UM(e)||(n({event:e,name:r,global:t}),$c=e.type,Xc=i?i._sentryId:void 0),clearTimeout(Vh),Vh=He.setTimeout(()=>{Xc=void 0,$c=void 0},DM)}}function FM(n){try{return n.target}catch{return null}}let Zs;function Df(n){const t="history";Oi(t,n),Fi(t,BM)}function BM(){if(He.addEventListener("popstate",()=>{const t=He.location.href,e=Zs;if(Zs=t,e===t)return;fn("history",{from:e,to:t})}),!uM())return;function n(t){return function(...e){const i=e.length>2?e[2]:void 0;if(i){const r=Zs,s=String(i);if(Zs=s,r===s)return t.apply(this,e);fn("history",{from:r,to:s})}return t.apply(this,e)}}Xe(He.history,"pushState",n),Xe(He.history,"replaceState",n)}const vo={};function kM(n){const t=vo[n];if(t)return t;let e=He[n];if(zc(e))return vo[n]=e.bind(He);const i=He.document;if(i&&typeof i.createElement=="function")try{const r=i.createElement("iframe");r.hidden=!0,i.head.appendChild(r);const s=r.contentWindow;s!=null&&s[n]&&(e=s[n]),i.head.removeChild(r)}catch(r){IM&&At.warn(`Could not create sandbox iframe for ${n} check, bailing to window.${n}: `,r)}return e&&(vo[n]=e.bind(He))}function $h(n){vo[n]=void 0}const Vr="__sentry_xhr_v3__";function HM(n){const t="xhr";Oi(t,n),Fi(t,zM)}function zM(){if(!He.XMLHttpRequest)return;const n=XMLHttpRequest.prototype;n.open=new Proxy(n.open,{apply(t,e,i){const r=new Error,s=Gn()*1e3,o=zn(i[0])?i[0].toUpperCase():void 0,a=GM(i[1]);if(!o||!a)return t.apply(e,i);e[Vr]={method:o,url:a,request_headers:{}},o==="POST"&&a.match(/sentry_key/)&&(e.__sentry_own_request__=!0);const c=()=>{const l=e[Vr];if(l&&e.readyState===4){try{l.status_code=e.status}catch{}const u={endTimestamp:Gn()*1e3,startTimestamp:s,xhr:e,virtualError:r};fn("xhr",u)}};return"onreadystatechange"in e&&typeof e.onreadystatechange=="function"?e.onreadystatechange=new Proxy(e.onreadystatechange,{apply(l,u,h){return c(),l.apply(u,h)}}):e.addEventListener("readystatechange",c),e.setRequestHeader=new Proxy(e.setRequestHeader,{apply(l,u,h){const[d,p]=h,g=u[Vr];return g&&zn(d)&&zn(p)&&(g.request_headers[d.toLowerCase()]=p),l.apply(u,h)}}),t.apply(e,i)}}),n.send=new Proxy(n.send,{apply(t,e,i){const r=e[Vr];if(!r)return t.apply(e,i);i[0]!==void 0&&(r.body=i[0]);const s={startTimestamp:Gn()*1e3,xhr:e};return fn("xhr",s),t.apply(e,i)}})}function GM(n){if(zn(n))return n;try{return n.toString()}catch{}}function VM(n,t=kM("fetch")){let e=0,i=0;function r(s){const o=s.body.length;e+=o,i++;const a={body:s.body,method:"POST",referrerPolicy:"strict-origin",headers:n.headers,keepalive:e<=6e4&&i<15,...n.fetchOptions};if(!t)return $h("fetch"),Ao("No fetch implementation available");try{return t(n.url,a).then(c=>(e-=o,i--,{statusCode:c.status,headers:{"x-sentry-rate-limits":c.headers.get("X-Sentry-Rate-Limits"),"retry-after":c.headers.get("Retry-After")}}))}catch(c){return $h("fetch"),e-=o,i--,Ao(c)}}return Uy(n,r)}const WM=30,$M=50;function Yc(n,t,e,i){const r={filename:n,function:t==="<anonymous>"?Pi:t,in_app:!0};return e!==void 0&&(r.lineno=e),i!==void 0&&(r.colno=i),r}const XM=/^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,YM=/^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,qM=/\((\S*)(?::(\d+))(?::(\d+))\)/,jM=n=>{const t=XM.exec(n);if(t){const[,i,r,s]=t;return Yc(i,Pi,+r,+s)}const e=YM.exec(n);if(e){if(e[2]&&e[2].indexOf("eval")===0){const o=qM.exec(e[2]);o&&(e[2]=o[1],e[3]=o[2],e[4]=o[3])}const[r,s]=Lf(e[1]||Pi,e[2]);return Yc(s,r,e[3]?+e[3]:void 0,e[4]?+e[4]:void 0)}},KM=[WM,jM],ZM=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,JM=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i,QM=n=>{const t=ZM.exec(n);if(t){if(t[3]&&t[3].indexOf(" > eval")>-1){const s=JM.exec(t[3]);s&&(t[1]=t[1]||"eval",t[3]=s[1],t[4]=s[2],t[5]="")}let i=t[3],r=t[1]||Pi;return[r,i]=Lf(r,i),Yc(i,r,t[4]?+t[4]:void 0,t[5]?+t[5]:void 0)}},tT=[$M,QM],eT=[KM,tT],nT=df(...eT),Lf=(n,t)=>{const e=n.indexOf("safari-extension")!==-1,i=n.indexOf("safari-web-extension")!==-1;return e||i?[n.indexOf("@")!==-1?n.split("@")[0]:Pi,e?`safari-extension:${t}`:`safari-web-extension:${t}`]:[n,t]},ss=typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__,Js=1024,iT="Breadcrumbs",rT=(n={})=>{const t={console:!0,dom:!0,fetch:!0,history:!0,sentry:!0,xhr:!0,...n};return{name:iT,setup(e){t.console&&eM(cT(e)),t.dom&&LM(aT(e,t.dom)),t.xhr&&HM(lT(e)),t.fetch&&dM(uT(e)),t.history&&Df(hT(e)),t.sentry&&e.on("beforeSendEvent",oT(e))}}},sT=rT;function oT(n){return function(e){Oe()===n&&Di({category:`sentry.${e.type==="transaction"?"transaction":"event"}`,event_id:e.event_id,level:e.level,message:xi(e)},{event:e})}}function aT(n,t){return function(i){if(Oe()!==n)return;let r,s,o=typeof t=="object"?t.serializeAttribute:void 0,a=typeof t=="object"&&typeof t.maxStringLength=="number"?t.maxStringLength:void 0;a&&a>Js&&(ss&&At.warn(`\`dom.maxStringLength\` cannot exceed ${Js}, but a value of ${a} was configured. Sentry will use ${Js} instead.`),a=Js),typeof o=="string"&&(o=[o]);try{const l=i.event,u=dT(l)?l.target:l;r=Qd(u,{keyAttrs:o,maxStringLength:a}),s=Ix(u)}catch{r="<unknown>"}if(r.length===0)return;const c={category:`ui.${i.name}`,message:r};s&&(c.data={"ui.component_name":s}),Di(c,{event:i.event,name:i.name,global:i.global})}}function cT(n){return function(e){if(Oe()!==n)return;const i={category:"console",data:{arguments:e.args,logger:"console"},level:iM(e.level),message:ah(e.args," ")};if(e.level==="assert")if(e.args[0]===!1)i.message=`Assertion failed: ${ah(e.args.slice(1)," ")||"console.assert"}`,i.data.arguments=e.args.slice(1);else return;Di(i,{input:e.args,level:e.level})}}function lT(n){return function(e){if(Oe()!==n)return;const{startTimestamp:i,endTimestamp:r}=e,s=e.xhr[Vr];if(!i||!r||!s)return;const{method:o,url:a,status_code:c,body:l}=s,u={method:o,url:a,status_code:c},h={xhr:e.xhr,input:l,startTimestamp:i,endTimestamp:r},d={category:"xhr",data:u,type:"http",level:Rf(c)};n.emit("beforeOutgoingRequestBreadcrumb",d,h),Di(d,h)}}function uT(n){return function(e){if(Oe()!==n)return;const{startTimestamp:i,endTimestamp:r}=e;if(r&&!(e.fetchData.url.match(/sentry_key/)&&e.fetchData.method==="POST"))if(e.fetchData.method,e.fetchData.url,e.error){const s=e.fetchData,o={data:e.error,input:e.args,startTimestamp:i,endTimestamp:r},a={category:"fetch",data:s,level:"error",type:"http"};n.emit("beforeOutgoingRequestBreadcrumb",a,o),Di(a,o)}else{const s=e.response,o={...e.fetchData,status_code:s==null?void 0:s.status};e.fetchData.request_body_size,e.fetchData.response_body_size,s==null||s.status;const a={input:e.args,response:s,startTimestamp:i,endTimestamp:r},c={category:"fetch",data:o,type:"http",level:Rf(o.status_code)};n.emit("beforeOutgoingRequestBreadcrumb",c,a),Di(c,a)}}}function hT(n){return function(e){if(Oe()!==n)return;let i=e.from,r=e.to;const s=La(me.location.href);let o=i?La(i):void 0;const a=La(r);o!=null&&o.path||(o=s),s.protocol===a.protocol&&s.host===a.host&&(r=a.relative),s.protocol===o.protocol&&s.host===o.host&&(i=o.relative),Di({category:"navigation",data:{from:i,to:r}})}}function dT(n){return!!n&&!!n.target}const fT=["EventTarget","Window","Node","ApplicationCache","AudioTrackList","BroadcastChannel","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","SharedWorker","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"],pT="BrowserApiErrors",mT=(n={})=>{const t={XMLHttpRequest:!0,eventTarget:!0,requestAnimationFrame:!0,setInterval:!0,setTimeout:!0,...n};return{name:pT,setupOnce(){t.setTimeout&&Xe(me,"setTimeout",Xh),t.setInterval&&Xe(me,"setInterval",Xh),t.requestAnimationFrame&&Xe(me,"requestAnimationFrame",_T),t.XMLHttpRequest&&"XMLHttpRequest"in me&&Xe(XMLHttpRequest.prototype,"send",vT);const e=t.eventTarget;e&&(Array.isArray(e)?e:fT).forEach(ST)}}},gT=mT;function Xh(n){return function(...t){const e=t[0];return t[0]=Er(e,{mechanism:{data:{function:ai(n)},handled:!1,type:"instrument"}}),n.apply(this,t)}}function _T(n){return function(t){return n.apply(this,[Er(t,{mechanism:{data:{function:"requestAnimationFrame",handler:ai(n)},handled:!1,type:"instrument"}})])}}function vT(n){return function(...t){const e=this;return["onload","onerror","onprogress","onreadystatechange"].forEach(r=>{r in e&&typeof e[r]=="function"&&Xe(e,r,function(s){const o={mechanism:{data:{function:r,handler:ai(s)},handled:!1,type:"instrument"}},a=Cl(s);return a&&(o.mechanism.data.handler=ai(a)),Er(s,o)})}),n.apply(this,t)}}function ST(n){var i,r;const e=(i=me[n])==null?void 0:i.prototype;(r=e==null?void 0:e.hasOwnProperty)!=null&&r.call(e,"addEventListener")&&(Xe(e,"addEventListener",function(s){return function(o,a,c){try{xT(a)&&(a.handleEvent=Er(a.handleEvent,{mechanism:{data:{function:"handleEvent",handler:ai(a),target:n},handled:!1,type:"instrument"}}))}catch{}return s.apply(this,[o,Er(a,{mechanism:{data:{function:"addEventListener",handler:ai(a),target:n},handled:!1,type:"instrument"}}),c])}}),Xe(e,"removeEventListener",function(s){return function(o,a,c){try{const l=a.__sentry_wrapped__;l&&s.call(this,o,l,c)}catch{}return s.call(this,o,a,c)}}))}function xT(n){return typeof n.handleEvent=="function"}const ET=()=>({name:"BrowserSession",setupOnce(){if(typeof me.document>"u"){ss&&At.warn("Using the `browserSessionIntegration` in non-browser environments is not supported.");return}Rh({ignoreDuration:!0}),Ch(),Df(({from:n,to:t})=>{n!==void 0&&n!==t&&(Rh({ignoreDuration:!0}),Ch())})}}),yT="GlobalHandlers",MT=(n={})=>{const t={onerror:!0,onunhandledrejection:!0,...n};return{name:yT,setupOnce(){Error.stackTraceLimit=50},setup(e){t.onerror&&(bT(e),Yh("onerror")),t.onunhandledrejection&&(AT(e),Yh("onunhandledrejection"))}}},TT=MT;function bT(n){EE(t=>{const{stackParser:e,attachStacktrace:i}=Nf();if(Oe()!==n||Pf())return;const{msg:r,url:s,line:o,column:a,error:c}=t,l=CT(Ul(e,c||r,void 0,i,!1),s,o,a);l.level="error",_f(l,{originalException:c,mechanism:{handled:!1,type:"onerror"}})})}function AT(n){ME(t=>{const{stackParser:e,attachStacktrace:i}=Nf();if(Oe()!==n||Pf())return;const r=wT(t),s=Al(r)?RT(r):Ul(e,r,void 0,i,!0);s.level="error",_f(s,{originalException:r,mechanism:{handled:!1,type:"onunhandledrejection"}})})}function wT(n){if(Al(n))return n;try{if("reason"in n)return n.reason;if("detail"in n&&"reason"in n.detail)return n.detail.reason}catch{}return n}function RT(n){return{exception:{values:[{type:"UnhandledRejection",value:`Non-Error promise rejection captured with value: ${String(n)}`}]}}}function CT(n,t,e,i){const r=n.exception=n.exception||{},s=r.values=r.values||[],o=s[0]=s[0]||{},a=o.stacktrace=o.stacktrace||{},c=a.frames=a.frames||[],l=i,u=e,h=zn(t)&&t.length>0?t:Rl();return c.length===0&&c.push({colno:l,filename:h,function:Pi,in_app:!0,lineno:u}),n}function Yh(n){ss&&At.log(`Global Handler attached: ${n}`)}function Nf(){const n=Oe();return(n==null?void 0:n.getOptions())||{stackParser:()=>[],attachStacktrace:!1}}const PT=()=>({name:"HttpContext",preprocessEvent(n){var o,a;if(!me.navigator&&!me.location&&!me.document)return;const t=((o=n.request)==null?void 0:o.url)||Rl(),{referrer:e}=me.document||{},{userAgent:i}=me.navigator||{},r={...(a=n.request)==null?void 0:a.headers,...e&&{Referer:e},...i&&{"User-Agent":i}},s={...n.request,...t&&{url:t},headers:r};n.request=s}}),IT="cause",DT=5,LT="LinkedErrors",NT=(n={})=>{const t=n.limit||DT,e=n.key||IT;return{name:LT,preprocessEvent(i,r,s){const o=s.getOptions();tM(Ll,o.stackParser,e,t,i,r)}}},UT=NT;function OT(n){return[Xy(),Gy(),gT(),sT(),TT(),UT(),oM(),PT(),ET()]}function FT(n={}){var e;return{...{defaultIntegrations:OT(),release:typeof __SENTRY_RELEASE__=="string"?__SENTRY_RELEASE__:(e=me.SENTRY_RELEASE)==null?void 0:e.id,sendClientReports:!0},...BT(n)}}function BT(n){const t={};for(const e of Object.getOwnPropertyNames(n)){const i=e;n[i]!==void 0&&(t[i]=n[i])}return t}function kT(){var c;const n=typeof me.window<"u"&&me;if(!n)return!1;const t=n.chrome?"chrome":"browser",e=n[t],i=(c=e==null?void 0:e.runtime)==null?void 0:c.id,r=Rl()||"",s=["chrome-extension:","moz-extension:","ms-browser-extension:","safari-web-extension:"],o=!!i&&me===me.top&&s.some(l=>r.startsWith(`${l}//`)),a=typeof n.nw<"u";return!!i&&!o&&!a}function HT(n={}){const t=FT(n);if(!t.skipBrowserExtensionCheck&&kT()){ss&&wr(()=>{console.error("[Sentry] You cannot run Sentry this way in a browser extension, check: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/")});return}ss&&!Cf()&&At.warn("No Fetch API detected. The Sentry SDK requires a Fetch API compatible environment to send events. Please add a Fetch API polyfill.");const e={...t,stackParser:SE(t.stackParser||nT),integrations:my(t),transport:t.transport||VM};return Ay(PM,e)}const zT=Object.prototype.toString;function Ol(n,t){return zT.call(n)===`[object ${t}]`}function ri(n){return Ol(n,"String")}function Uf(n){return Ol(n,"Object")}function GT(n){return Ol(n,"RegExp")}function Fl(n){return!!(n&&n.then&&typeof n.then=="function")}function VT(n){return typeof n=="number"&&n!==n}function qh(n,t){try{return n instanceof t}catch{return!1}}function WT(n,t,e=!1){return ri(n)?GT(t)?t.test(n):ri(t)?e?n===t:n.includes(t):!1:!1}function $T(n,t=[],e=!1){return t.some(i=>WT(n,i,e))}function Qs(n){return n&&n.Math==Math?n:void 0}const ce=typeof globalThis=="object"&&Qs(globalThis)||typeof window=="object"&&Qs(window)||typeof self=="object"&&Qs(self)||typeof global=="object"&&Qs(global)||function(){return this}()||{};function Bl(){return ce}function Of(n,t,e){const i=e||ce,r=i.__SENTRY__=i.__SENTRY__||{};return r[n]||(r[n]=t())}const Yr=Bl(),XT=80;function Ro(n,t={}){if(!n)return"<unknown>";try{let e=n;const i=5,r=[];let s=0,o=0;const a=" > ",c=a.length;let l;const u=Array.isArray(t)?t:t.keyAttrs,h=!Array.isArray(t)&&t.maxStringLength||XT;for(;e&&s++<i&&(l=YT(e,u),!(l==="html"||s>1&&o+r.length*c+l.length>=h));)r.push(l),o+=l.length,e=e.parentNode;return r.reverse().join(a)}catch{return"<unknown>"}}function YT(n,t){const e=n,i=[];let r,s,o,a,c;if(!e||!e.tagName)return"";if(Yr.HTMLElement&&e instanceof HTMLElement&&e.dataset&&e.dataset.sentryComponent)return e.dataset.sentryComponent;i.push(e.tagName.toLowerCase());const l=t&&t.length?t.filter(h=>e.getAttribute(h)).map(h=>[h,e.getAttribute(h)]):null;if(l&&l.length)l.forEach(h=>{i.push(`[${h[0]}="${h[1]}"]`)});else if(e.id&&i.push(`#${e.id}`),r=e.className,r&&ri(r))for(s=r.split(/\s+/),c=0;c<s.length;c++)i.push(`.${s[c]}`);const u=["aria-label","type","name","title","alt"];for(c=0;c<u.length;c++)o=u[c],a=e.getAttribute(o),a&&i.push(`[${o}="${a}"]`);return i.join("")}function qT(n){return Yr.document&&Yr.document.querySelector?Yr.document.querySelector(n):null}function jT(n){if(!Yr.HTMLElement)return null;let t=n;const e=5;for(let i=0;i<e;i++){if(!t)return null;if(t instanceof HTMLElement&&t.dataset.sentryComponent)return t.dataset.sentryComponent;t=t.parentNode}return null}const ps=typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__,KT="Sentry Logger ",jh=["debug","info","warn","error","log","assert","trace"],Kh={};function Ff(n){if(!("console"in ce))return n();const t=ce.console,e={},i=Object.keys(Kh);i.forEach(r=>{const s=Kh[r];e[r]=t[r],t[r]=s});try{return n()}finally{i.forEach(r=>{t[r]=e[r]})}}function ZT(){let n=!1;const t={enable:()=>{n=!0},disable:()=>{n=!1},isEnabled:()=>n};return ps?jh.forEach(e=>{t[e]=(...i)=>{n&&Ff(()=>{ce.console[e](`${KT}[${e}]:`,...i)})}}):jh.forEach(e=>{t[e]=()=>{}}),t}const ut=ZT();function JT(n,t=!1){const{host:e,path:i,pass:r,port:s,projectId:o,protocol:a,publicKey:c}=n;return`${a}://${c}${t&&r?`:${r}`:""}@${e}${s?`:${s}`:""}/${i&&`${i}/`}${o}`}function Mi(n,t,e){if(!(t in n))return;const i=n[t],r=e(i);typeof r=="function"&&QT(r,i),n[t]=r}function qc(n,t,e){try{Object.defineProperty(n,t,{value:e,writable:!0,configurable:!0})}catch{ps&&ut.log(`Failed to add non-enumerable property "${t}" to object`,n)}}function QT(n,t){try{const e=t.prototype||{};n.prototype=t.prototype=e,qc(n,"__sentry_original__",t)}catch{}}function un(n){return jc(n,new Map)}function jc(n,t){if(tb(n)){const e=t.get(n);if(e!==void 0)return e;const i={};t.set(n,i);for(const r of Object.keys(n))typeof n[r]<"u"&&(i[r]=jc(n[r],t));return i}if(Array.isArray(n)){const e=t.get(n);if(e!==void 0)return e;const i=[];return t.set(n,i),n.forEach(r=>{i.push(jc(r,t))}),i}return n}function tb(n){if(!Uf(n))return!1;try{const t=Object.getPrototypeOf(n).constructor.name;return!t||t==="Object"}catch{return!0}}const Ua="<anonymous>";function Bf(n){try{return!n||typeof n!="function"?Ua:n.name||Ua}catch{return Ua}}const So={},Zh={};function ms(n,t){So[n]=So[n]||[],So[n].push(t)}function gs(n,t){Zh[n]||(t(),Zh[n]=!0)}function Vn(n,t){const e=n&&So[n];if(e)for(const i of e)try{i(t)}catch(r){ps&&ut.error(`Error while triggering instrumentation handler.
Type: ${n}
Name: ${Bf(i)}
Error:`,r)}}function Se(){const n=ce,t=n.crypto||n.msCrypto;let e=()=>Math.random()*16;try{if(t&&t.randomUUID)return t.randomUUID().replace(/-/g,"");t&&t.getRandomValues&&(e=()=>{const i=new Uint8Array(1);return t.getRandomValues(i),i[0]})}catch{}return("10000000100040008000"+1e11).replace(/[018]/g,i=>(i^(e()&15)>>i/4).toString(16))}function eb(n){return Array.isArray(n)?n:[n]}const Kc=Bl();function nb(){if(!("fetch"in Kc))return!1;try{return new Headers,new Request("http://www.example.com"),new Response,!0}catch{return!1}}function Jh(n){return n&&/^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(n.toString())}function ib(){if(typeof EdgeRuntime=="string")return!0;if(!nb())return!1;if(Jh(Kc.fetch))return!0;let n=!1;const t=Kc.document;if(t&&typeof t.createElement=="function")try{const e=t.createElement("iframe");e.hidden=!0,t.head.appendChild(e),e.contentWindow&&e.contentWindow.fetch&&(n=Jh(e.contentWindow.fetch)),t.head.removeChild(e)}catch(e){ps&&ut.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",e)}return n}function rb(n){const t="fetch";ms(t,n),gs(t,sb)}function sb(){ib()&&Mi(ce,"fetch",function(n){return function(...t){const{method:e,url:i}=ob(t),r={args:t,fetchData:{method:e,url:i},startTimestamp:Date.now()};return Vn("fetch",{...r}),n.apply(ce,t).then(s=>{const o={...r,endTimestamp:Date.now(),response:s};return Vn("fetch",o),s},s=>{const o={...r,endTimestamp:Date.now(),error:s};throw Vn("fetch",o),s})}})}function Zc(n,t){return!!n&&typeof n=="object"&&!!n[t]}function Qh(n){return typeof n=="string"?n:n?Zc(n,"url")?n.url:n.toString?n.toString():"":""}function ob(n){if(n.length===0)return{method:"GET",url:""};if(n.length===2){const[e,i]=n;return{url:Qh(e),method:Zc(i,"method")?String(i.method).toUpperCase():"GET"}}const t=n[0];return{url:Qh(t),method:Zc(t,"method")?String(t.method).toUpperCase():"GET"}}let to=null;function ab(n){const t="error";ms(t,n),gs(t,cb)}function cb(){to=ce.onerror,ce.onerror=function(n,t,e,i,r){return Vn("error",{column:i,error:r,line:e,msg:n,url:t}),to&&!to.__SENTRY_LOADER__?to.apply(this,arguments):!1},ce.onerror.__SENTRY_INSTRUMENTED__=!0}let eo=null;function lb(n){const t="unhandledrejection";ms(t,n),gs(t,ub)}function ub(){eo=ce.onunhandledrejection,ce.onunhandledrejection=function(n){return Vn("unhandledrejection",n),eo&&!eo.__SENTRY_LOADER__?eo.apply(this,arguments):!0},ce.onunhandledrejection.__SENTRY_INSTRUMENTED__=!0}const no=Bl();function hb(){const n=no.chrome,t=n&&n.app&&n.app.runtime,e="history"in no&&!!no.history.pushState&&!!no.history.replaceState;return!t&&e}const Hr=ce;let io;function db(n){const t="history";ms(t,n),gs(t,fb)}function fb(){if(!hb())return;const n=Hr.onpopstate;Hr.onpopstate=function(...e){const i=Hr.location.href,r=io;if(io=i,Vn("history",{from:r,to:i}),n)try{return n.apply(this,e)}catch{}};function t(e){return function(...i){const r=i.length>2?i[2]:void 0;if(r){const s=io,o=String(r);io=o,Vn("history",{from:s,to:o})}return e.apply(this,i)}}Mi(Hr.history,"pushState",t),Mi(Hr.history,"replaceState",t)}const pb=ce,Wr="__sentry_xhr_v3__";function mb(n){const t="xhr";ms(t,n),gs(t,gb)}function gb(){if(!pb.XMLHttpRequest)return;const n=XMLHttpRequest.prototype;Mi(n,"open",function(t){return function(...e){const i=Date.now(),r=ri(e[0])?e[0].toUpperCase():void 0,s=_b(e[1]);if(!r||!s)return t.apply(this,e);this[Wr]={method:r,url:s,request_headers:{}},r==="POST"&&s.match(/sentry_key/)&&(this.__sentry_own_request__=!0);const o=()=>{const a=this[Wr];if(a&&this.readyState===4){try{a.status_code=this.status}catch{}const c={args:[r,s],endTimestamp:Date.now(),startTimestamp:i,xhr:this};Vn("xhr",c)}};return"onreadystatechange"in this&&typeof this.onreadystatechange=="function"?Mi(this,"onreadystatechange",function(a){return function(...c){return o(),a.apply(this,c)}}):this.addEventListener("readystatechange",o),Mi(this,"setRequestHeader",function(a){return function(...c){const[l,u]=c,h=this[Wr];return h&&ri(l)&&ri(u)&&(h.request_headers[l.toLowerCase()]=u),a.apply(this,c)}}),t.apply(this,e)}}),Mi(n,"send",function(t){return function(...e){const i=this[Wr];if(!i)return t.apply(this,e);e[0]!==void 0&&(i.body=e[0]);const r={args:[i.method,i.url],startTimestamp:Date.now(),xhr:this};return Vn("xhr",r),t.apply(this,e)}})}function _b(n){if(ri(n))return n;try{return n.toString()}catch{}}function vb(){return typeof __SENTRY_BROWSER_BUNDLE__<"u"&&!!__SENTRY_BROWSER_BUNDLE__}function Sb(){return!vb()&&Object.prototype.toString.call(typeof process<"u"?process:0)==="[object process]"}function Ti(n,t){return n.require(t)}function xb(n){let t;try{t=Ti(ei,n)}catch{}try{const{cwd:e}=Ti(ei,"process");t=Ti(ei,`${e()}/node_modules/${n}`)}catch{}return t}var Ln;(function(n){n[n.PENDING=0]="PENDING";const e=1;n[n.RESOLVED=e]="RESOLVED";const i=2;n[n.REJECTED=i]="REJECTED"})(Ln||(Ln={}));class Qn{constructor(t){Qn.prototype.__init.call(this),Qn.prototype.__init2.call(this),Qn.prototype.__init3.call(this),Qn.prototype.__init4.call(this),this._state=Ln.PENDING,this._handlers=[];try{t(this._resolve,this._reject)}catch(e){this._reject(e)}}then(t,e){return new Qn((i,r)=>{this._handlers.push([!1,s=>{if(!t)i(s);else try{i(t(s))}catch(o){r(o)}},s=>{if(!e)r(s);else try{i(e(s))}catch(o){r(o)}}]),this._executeHandlers()})}catch(t){return this.then(e=>e,t)}finally(t){return new Qn((e,i)=>{let r,s;return this.then(o=>{s=!1,r=o,t&&t()},o=>{s=!0,r=o,t&&t()}).then(()=>{if(s){i(r);return}e(r)})})}__init(){this._resolve=t=>{this._setResult(Ln.RESOLVED,t)}}__init2(){this._reject=t=>{this._setResult(Ln.REJECTED,t)}}__init3(){this._setResult=(t,e)=>{if(this._state===Ln.PENDING){if(Fl(e)){e.then(this._resolve,this._reject);return}this._state=t,this._value=e,this._executeHandlers()}}}__init4(){this._executeHandlers=()=>{if(this._state===Ln.PENDING)return;const t=this._handlers.slice();this._handlers=[],t.forEach(e=>{e[0]||(this._state===Ln.RESOLVED&&e[1](this._value),this._state===Ln.REJECTED&&e[2](this._value),e[0]=!0)})}}}function Go(n){if(!n)return{};const t=n.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);if(!t)return{};const e=t[6]||"",i=t[8]||"";return{host:t[4],path:t[5],protocol:t[2],search:e,hash:i,relative:t[5]+e+i}}const kf=1e3;function kl(){return Date.now()/kf}function Eb(){const{performance:n}=ce;if(!n||!n.now)return kl;const t=Date.now()-n.now(),e=n.timeOrigin==null?t:n.timeOrigin;return()=>(e+n.now())/kf}const _s=Eb(),en=(()=>{const{performance:n}=ce;if(!n||!n.now)return;const t=3600*1e3,e=n.now(),i=Date.now(),r=n.timeOrigin?Math.abs(n.timeOrigin+e-i):t,s=r<t,o=n.timing&&n.timing.navigationStart,c=typeof o=="number"?Math.abs(o+e-i):t,l=c<t;return s||l?r<=c?n.timeOrigin:o:i})(),Jc="baggage",Hf="sentry-",yb=/^sentry-/,Mb=8192;function Tb(n){if(!ri(n)&&!Array.isArray(n))return;let t={};if(Array.isArray(n))t=n.reduce((i,r)=>{const s=td(r);for(const o of Object.keys(s))i[o]=s[o];return i},{});else{if(!n)return;t=td(n)}const e=Object.entries(t).reduce((i,[r,s])=>{if(r.match(yb)){const o=r.slice(Hf.length);i[o]=s}return i},{});if(Object.keys(e).length>0)return e}function zf(n){if(!n)return;const t=Object.entries(n).reduce((e,[i,r])=>(r&&(e[`${Hf}${i}`]=r),e),{});return bb(t)}function td(n){return n.split(",").map(t=>t.split("=").map(e=>decodeURIComponent(e.trim()))).reduce((t,[e,i])=>(t[e]=i,t),{})}function bb(n){if(Object.keys(n).length!==0)return Object.entries(n).reduce((t,[e,i],r)=>{const s=`${encodeURIComponent(e)}=${encodeURIComponent(i)}`,o=r===0?s:`${t},${s}`;return o.length>Mb?(ps&&ut.warn(`Not adding key: ${e} with val: ${i} to baggage header due to exceeding baggage size limits.`),t):o},"")}const Ab=new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");function wb(n){if(!n)return;const t=n.match(Ab);if(!t)return;let e;return t[3]==="1"?e=!0:t[3]==="0"&&(e=!1),{traceId:t[1],parentSampled:e,parentSpanId:t[2]}}function Rb(n,t){const e=wb(n),i=Tb(t),{traceId:r,parentSpanId:s,parentSampled:o}=e||{};return e?{traceId:r||Se(),parentSpanId:s||Se().substring(16),spanId:Se().substring(16),sampled:o,dsc:i||{}}:{traceId:r||Se(),spanId:Se().substring(16)}}function Hl(n=Se(),t=Se().substring(16),e){let i="";return e!==void 0&&(i=e?"-1":"-0"),`${n}-${t}${i}`}function Cb(n,t=[]){return[n,t]}const Xt=typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__,Gf="production";function Pb(){return Of("globalEventProcessors",()=>[])}function Qc(n,t,e,i=0){return new Qn((r,s)=>{const o=n[i];if(t===null||typeof o!="function")r(t);else{const a=o({...t},e);Xt&&o.id&&a===null&&ut.log(`Event processor "${o.id}" dropped event`),Fl(a)?a.then(c=>Qc(n,c,e,i+1).then(r)).then(null,s):Qc(n,a,e,i+1).then(r).then(null,s)}})}function Ib(n){const t=_s(),e={sid:Se(),init:!0,timestamp:t,started:t,duration:0,status:"ok",errors:0,ignoreDuration:!1,toJSON:()=>Lb(e)};return n&&Vo(e,n),e}function Vo(n,t={}){if(t.user&&(!n.ipAddress&&t.user.ip_address&&(n.ipAddress=t.user.ip_address),!n.did&&!t.did&&(n.did=t.user.id||t.user.email||t.user.username)),n.timestamp=t.timestamp||_s(),t.abnormal_mechanism&&(n.abnormal_mechanism=t.abnormal_mechanism),t.ignoreDuration&&(n.ignoreDuration=t.ignoreDuration),t.sid&&(n.sid=t.sid.length===32?t.sid:Se()),t.init!==void 0&&(n.init=t.init),!n.did&&t.did&&(n.did=`${t.did}`),typeof t.started=="number"&&(n.started=t.started),n.ignoreDuration)n.duration=void 0;else if(typeof t.duration=="number")n.duration=t.duration;else{const e=n.timestamp-n.started;n.duration=e>=0?e:0}t.release&&(n.release=t.release),t.environment&&(n.environment=t.environment),!n.ipAddress&&t.ipAddress&&(n.ipAddress=t.ipAddress),!n.userAgent&&t.userAgent&&(n.userAgent=t.userAgent),typeof t.errors=="number"&&(n.errors=t.errors),t.status&&(n.status=t.status)}function Db(n,t){let e={};n.status==="ok"&&(e={status:"exited"}),Vo(n,e)}function Lb(n){return un({sid:`${n.sid}`,init:n.init,started:new Date(n.started*1e3).toISOString(),timestamp:new Date(n.timestamp*1e3).toISOString(),status:n.status,errors:n.errors,did:typeof n.did=="number"||typeof n.did=="string"?`${n.did}`:void 0,duration:n.duration,abnormal_mechanism:n.abnormal_mechanism,attrs:{release:n.release,environment:n.environment,ip_address:n.ipAddress,user_agent:n.userAgent}})}const Nb=0,Vf=1;function zl(n){const{spanId:t,traceId:e}=n.spanContext(),{data:i,op:r,parent_span_id:s,status:o,tags:a,origin:c}=Ge(n);return un({data:i,op:r,parent_span_id:s,span_id:t,status:o,tags:a,trace_id:e,origin:c})}function Wo(n){const{traceId:t,spanId:e}=n.spanContext(),i=Gl(n);return Hl(t,e,i)}function $o(n){return typeof n=="number"?ed(n):Array.isArray(n)?n[0]+n[1]/1e9:n instanceof Date?ed(n.getTime()):_s()}function ed(n){return n>9999999999?n/1e3:n}function Ge(n){return Ub(n)?n.getSpanJSON():typeof n.toJSON=="function"?n.toJSON():{}}function Ub(n){return typeof n.getSpanJSON=="function"}function Gl(n){const{traceFlags:t}=n.spanContext();return!!(t&Vf)}function Rr(){return Ir().getClient()}function Cr(){return Ir().getScope()}function Co(n){return n.transaction}function Vl(n,t,e){const i=t.getOptions(),{publicKey:r}=t.getDsn()||{},{segment:s}=e&&e.getUser()||{},o=un({environment:i.environment||Gf,release:i.release,user_segment:s,public_key:r,trace_id:n});return t.emit&&t.emit("createDsc",o),o}function yr(n){const t=Rr();if(!t)return{};const e=Vl(Ge(n).trace_id||"",t,Cr()),i=Co(n);if(!i)return e;const r=i&&i._frozenDynamicSamplingContext;if(r)return r;const{sampleRate:s,source:o}=i.metadata;s!=null&&(e.sample_rate=`${s}`);const a=Ge(i);return o&&o!=="url"&&(e.transaction=a.description),e.sampled=String(Gl(i)),t.emit&&t.emit("createDsc",e),e}function Ob(n,t){const{fingerprint:e,span:i,breadcrumbs:r,sdkProcessingMetadata:s}=t;Fb(n,t),i&&Hb(n,i),zb(n,e),Bb(n,r),kb(n,s)}function Fb(n,t){const{extra:e,tags:i,user:r,contexts:s,level:o,transactionName:a}=t,c=un(e);c&&Object.keys(c).length&&(n.extra={...c,...n.extra});const l=un(i);l&&Object.keys(l).length&&(n.tags={...l,...n.tags});const u=un(r);u&&Object.keys(u).length&&(n.user={...u,...n.user});const h=un(s);h&&Object.keys(h).length&&(n.contexts={...h,...n.contexts}),o&&(n.level=o),a&&(n.transaction=a)}function Bb(n,t){const e=[...n.breadcrumbs||[],...t];n.breadcrumbs=e.length?e:void 0}function kb(n,t){n.sdkProcessingMetadata={...n.sdkProcessingMetadata,...t}}function Hb(n,t){n.contexts={trace:zl(t),...n.contexts};const e=Co(t);if(e){n.sdkProcessingMetadata={dynamicSamplingContext:yr(t),...n.sdkProcessingMetadata};const i=Ge(e).description;i&&(n.tags={transaction:i,...n.tags})}}function zb(n,t){n.fingerprint=n.fingerprint?eb(n.fingerprint):[],t&&(n.fingerprint=n.fingerprint.concat(t)),n.fingerprint&&!n.fingerprint.length&&delete n.fingerprint}const Gb=100;class lr{constructor(){this._notifyingListeners=!1,this._scopeListeners=[],this._eventProcessors=[],this._breadcrumbs=[],this._attachments=[],this._user={},this._tags={},this._extra={},this._contexts={},this._sdkProcessingMetadata={},this._propagationContext=nd()}static clone(t){return t?t.clone():new lr}clone(){const t=new lr;return t._breadcrumbs=[...this._breadcrumbs],t._tags={...this._tags},t._extra={...this._extra},t._contexts={...this._contexts},t._user=this._user,t._level=this._level,t._span=this._span,t._session=this._session,t._transactionName=this._transactionName,t._fingerprint=this._fingerprint,t._eventProcessors=[...this._eventProcessors],t._requestSession=this._requestSession,t._attachments=[...this._attachments],t._sdkProcessingMetadata={...this._sdkProcessingMetadata},t._propagationContext={...this._propagationContext},t._client=this._client,t}setClient(t){this._client=t}getClient(){return this._client}addScopeListener(t){this._scopeListeners.push(t)}addEventProcessor(t){return this._eventProcessors.push(t),this}setUser(t){return this._user=t||{email:void 0,id:void 0,ip_address:void 0,segment:void 0,username:void 0},this._session&&Vo(this._session,{user:t}),this._notifyScopeListeners(),this}getUser(){return this._user}getRequestSession(){return this._requestSession}setRequestSession(t){return this._requestSession=t,this}setTags(t){return this._tags={...this._tags,...t},this._notifyScopeListeners(),this}setTag(t,e){return this._tags={...this._tags,[t]:e},this._notifyScopeListeners(),this}setExtras(t){return this._extra={...this._extra,...t},this._notifyScopeListeners(),this}setExtra(t,e){return this._extra={...this._extra,[t]:e},this._notifyScopeListeners(),this}setFingerprint(t){return this._fingerprint=t,this._notifyScopeListeners(),this}setLevel(t){return this._level=t,this._notifyScopeListeners(),this}setTransactionName(t){return this._transactionName=t,this._notifyScopeListeners(),this}setContext(t,e){return e===null?delete this._contexts[t]:this._contexts[t]=e,this._notifyScopeListeners(),this}setSpan(t){return this._span=t,this._notifyScopeListeners(),this}getSpan(){return this._span}getTransaction(){const t=this._span;return t&&t.transaction}setSession(t){return t?this._session=t:delete this._session,this._notifyScopeListeners(),this}getSession(){return this._session}update(t){if(!t)return this;const e=typeof t=="function"?t(this):t;if(e instanceof lr){const i=e.getScopeData();this._tags={...this._tags,...i.tags},this._extra={...this._extra,...i.extra},this._contexts={...this._contexts,...i.contexts},i.user&&Object.keys(i.user).length&&(this._user=i.user),i.level&&(this._level=i.level),i.fingerprint.length&&(this._fingerprint=i.fingerprint),e.getRequestSession()&&(this._requestSession=e.getRequestSession()),i.propagationContext&&(this._propagationContext=i.propagationContext)}else if(Uf(e)){const i=t;this._tags={...this._tags,...i.tags},this._extra={...this._extra,...i.extra},this._contexts={...this._contexts,...i.contexts},i.user&&(this._user=i.user),i.level&&(this._level=i.level),i.fingerprint&&(this._fingerprint=i.fingerprint),i.requestSession&&(this._requestSession=i.requestSession),i.propagationContext&&(this._propagationContext=i.propagationContext)}return this}clear(){return this._breadcrumbs=[],this._tags={},this._extra={},this._user={},this._contexts={},this._level=void 0,this._transactionName=void 0,this._fingerprint=void 0,this._requestSession=void 0,this._span=void 0,this._session=void 0,this._notifyScopeListeners(),this._attachments=[],this._propagationContext=nd(),this}addBreadcrumb(t,e){const i=typeof e=="number"?e:Gb;if(i<=0)return this;const r={timestamp:kl(),...t},s=this._breadcrumbs;return s.push(r),this._breadcrumbs=s.length>i?s.slice(-i):s,this._notifyScopeListeners(),this}getLastBreadcrumb(){return this._breadcrumbs[this._breadcrumbs.length-1]}clearBreadcrumbs(){return this._breadcrumbs=[],this._notifyScopeListeners(),this}addAttachment(t){return this._attachments.push(t),this}getAttachments(){return this.getScopeData().attachments}clearAttachments(){return this._attachments=[],this}getScopeData(){const{_breadcrumbs:t,_attachments:e,_contexts:i,_tags:r,_extra:s,_user:o,_level:a,_fingerprint:c,_eventProcessors:l,_propagationContext:u,_sdkProcessingMetadata:h,_transactionName:d,_span:p}=this;return{breadcrumbs:t,attachments:e,contexts:i,tags:r,extra:s,user:o,level:a,fingerprint:c||[],eventProcessors:l,propagationContext:u,sdkProcessingMetadata:h,transactionName:d,span:p}}applyToEvent(t,e={},i=[]){Ob(t,this.getScopeData());const r=[...i,...Pb(),...this._eventProcessors];return Qc(r,t,e)}setSDKProcessingMetadata(t){return this._sdkProcessingMetadata={...this._sdkProcessingMetadata,...t},this}setPropagationContext(t){return this._propagationContext=t,this}getPropagationContext(){return this._propagationContext}captureException(t,e){const i=e&&e.event_id?e.event_id:Se();if(!this._client)return ut.warn("No client configured on scope - will not capture exception!"),i;const r=new Error("Sentry syntheticException");return this._client.captureException(t,{originalException:t,syntheticException:r,...e,event_id:i},this),i}captureMessage(t,e,i){const r=i&&i.event_id?i.event_id:Se();if(!this._client)return ut.warn("No client configured on scope - will not capture message!"),r;const s=new Error(t);return this._client.captureMessage(t,e,{originalException:t,syntheticException:s,...i,event_id:r},this),r}captureEvent(t,e){const i=e&&e.event_id?e.event_id:Se();return this._client?(this._client.captureEvent(t,{...e,event_id:i},this),i):(ut.warn("No client configured on scope - will not capture event!"),i)}_notifyScopeListeners(){this._notifyingListeners||(this._notifyingListeners=!0,this._scopeListeners.forEach(t=>{t(this)}),this._notifyingListeners=!1)}}function nd(){return{traceId:Se(),spanId:Se().substring(16)}}const Vb="7.120.3",Wf=parseFloat(Vb),Wb=100;class $f{constructor(t,e,i,r=Wf){this._version=r;let s;e?s=e:(s=new lr,s.setClient(t));let o;i?o=i:(o=new lr,o.setClient(t)),this._stack=[{scope:s}],t&&this.bindClient(t),this._isolationScope=o}isOlderThan(t){return this._version<t}bindClient(t){const e=this.getStackTop();e.client=t,e.scope.setClient(t),t&&t.setupIntegrations&&t.setupIntegrations()}pushScope(){const t=this.getScope().clone();return this.getStack().push({client:this.getClient(),scope:t}),t}popScope(){return this.getStack().length<=1?!1:!!this.getStack().pop()}withScope(t){const e=this.pushScope();let i;try{i=t(e)}catch(r){throw this.popScope(),r}return Fl(i)?i.then(r=>(this.popScope(),r),r=>{throw this.popScope(),r}):(this.popScope(),i)}getClient(){return this.getStackTop().client}getScope(){return this.getStackTop().scope}getIsolationScope(){return this._isolationScope}getStack(){return this._stack}getStackTop(){return this._stack[this._stack.length-1]}captureException(t,e){const i=this._lastEventId=e&&e.event_id?e.event_id:Se(),r=new Error("Sentry syntheticException");return this.getScope().captureException(t,{originalException:t,syntheticException:r,...e,event_id:i}),i}captureMessage(t,e,i){const r=this._lastEventId=i&&i.event_id?i.event_id:Se(),s=new Error(t);return this.getScope().captureMessage(t,e,{originalException:t,syntheticException:s,...i,event_id:r}),r}captureEvent(t,e){const i=e&&e.event_id?e.event_id:Se();return t.type||(this._lastEventId=i),this.getScope().captureEvent(t,{...e,event_id:i}),i}lastEventId(){return this._lastEventId}addBreadcrumb(t,e){const{scope:i,client:r}=this.getStackTop();if(!r)return;const{beforeBreadcrumb:s=null,maxBreadcrumbs:o=Wb}=r.getOptions&&r.getOptions()||{};if(o<=0)return;const c={timestamp:kl(),...t},l=s?Ff(()=>s(c,e)):c;l!==null&&(r.emit&&r.emit("beforeAddBreadcrumb",l,e),i.addBreadcrumb(l,o))}setUser(t){this.getScope().setUser(t),this.getIsolationScope().setUser(t)}setTags(t){this.getScope().setTags(t),this.getIsolationScope().setTags(t)}setExtras(t){this.getScope().setExtras(t),this.getIsolationScope().setExtras(t)}setTag(t,e){this.getScope().setTag(t,e),this.getIsolationScope().setTag(t,e)}setExtra(t,e){this.getScope().setExtra(t,e),this.getIsolationScope().setExtra(t,e)}setContext(t,e){this.getScope().setContext(t,e),this.getIsolationScope().setContext(t,e)}configureScope(t){const{scope:e,client:i}=this.getStackTop();i&&t(e)}run(t){const e=id(this);try{t(this)}finally{id(e)}}getIntegration(t){const e=this.getClient();if(!e)return null;try{return e.getIntegration(t)}catch{return Xt&&ut.warn(`Cannot retrieve integration ${t.id} from the current Hub`),null}}startTransaction(t,e){const i=this._callExtensionMethod("startTransaction",t,e);return Xt&&!i&&(this.getClient()?ut.warn(`Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':
Sentry.addTracingExtensions();
Sentry.init({...});
`):ut.warn("Tracing extension 'startTransaction' is missing. You should 'init' the SDK before calling 'startTransaction'")),i}traceHeaders(){return this._callExtensionMethod("traceHeaders")}captureSession(t=!1){if(t)return this.endSession();this._sendSessionUpdate()}endSession(){const e=this.getStackTop().scope,i=e.getSession();i&&Db(i),this._sendSessionUpdate(),e.setSession()}startSession(t){const{scope:e,client:i}=this.getStackTop(),{release:r,environment:s=Gf}=i&&i.getOptions()||{},{userAgent:o}=ce.navigator||{},a=Ib({release:r,environment:s,user:e.getUser(),...o&&{userAgent:o},...t}),c=e.getSession&&e.getSession();return c&&c.status==="ok"&&Vo(c,{status:"exited"}),this.endSession(),e.setSession(a),a}shouldSendDefaultPii(){const t=this.getClient(),e=t&&t.getOptions();return!!(e&&e.sendDefaultPii)}_sendSessionUpdate(){const{scope:t,client:e}=this.getStackTop(),i=t.getSession();i&&e&&e.captureSession&&e.captureSession(i)}_callExtensionMethod(t,...e){const r=Pr().__SENTRY__;if(r&&r.extensions&&typeof r.extensions[t]=="function")return r.extensions[t].apply(this,e);Xt&&ut.warn(`Extension method ${t} couldn't be found, doing nothing.`)}}function Pr(){return ce.__SENTRY__=ce.__SENTRY__||{extensions:{},hub:void 0},ce}function id(n){const t=Pr(),e=tl(t);return Xf(t,n),e}function Ir(){const n=Pr();if(n.__SENTRY__&&n.__SENTRY__.acs){const t=n.__SENTRY__.acs.getCurrentHub();if(t)return t}return $b(n)}function Wl(){return Ir().getIsolationScope()}function $b(n=Pr()){return(!Xb(n)||tl(n).isOlderThan(Wf))&&Xf(n,new $f),tl(n)}function Xb(n){return!!(n&&n.__SENTRY__&&n.__SENTRY__.hub)}function tl(n){return Of("hub",()=>new $f,n)}function Xf(n,t){if(!n)return!1;const e=n.__SENTRY__=n.__SENTRY__||{};return e.hub=t,!0}function Li(n){return(n||Ir()).getScope().getTransaction()}let rd=!1;function Yb(){rd||(rd=!0,ab(el),lb(el))}function el(){const n=Li();if(n){const t="internal_error";Xt&&ut.log(`[Tracing] Transaction: ${t} -> Global error occured`),n.setStatus(t)}}el.tag="sentry_tracingErrorCallback";var sd;(function(n){const t="ok";n.Ok=t;const e="deadline_exceeded";n.DeadlineExceeded=e;const i="unauthenticated";n.Unauthenticated=i;const r="permission_denied";n.PermissionDenied=r;const s="not_found";n.NotFound=s;const o="resource_exhausted";n.ResourceExhausted=o;const a="invalid_argument";n.InvalidArgument=a;const c="unimplemented";n.Unimplemented=c;const l="unavailable";n.Unavailable=l;const u="internal_error";n.InternalError=u;const h="unknown_error";n.UnknownError=h;const d="cancelled";n.Cancelled=d;const p="already_exists";n.AlreadyExists=p;const g="failed_precondition";n.FailedPrecondition=g;const S="aborted";n.Aborted=S;const m="out_of_range";n.OutOfRange=m;const f="data_loss";n.DataLoss=f})(sd||(sd={}));function qb(n){if(n<400&&n>=100)return"ok";if(n>=400&&n<500)switch(n){case 401:return"unauthenticated";case 403:return"permission_denied";case 404:return"not_found";case 409:return"already_exists";case 413:return"failed_precondition";case 429:return"resource_exhausted";default:return"invalid_argument"}if(n>=500&&n<600)switch(n){case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline_exceeded";default:return"internal_error"}return"unknown_error"}function $l(n,t){n.setTag("http.status_code",String(t)),n.setData("http.response.status_code",t);const e=qb(t);e!=="unknown_error"&&n.setStatus(e)}function Dr(n){if(typeof __SENTRY_TRACING__=="boolean"&&!__SENTRY_TRACING__)return!1;const t=Rr(),e=n||t&&t.getOptions();return!!e&&(e.enableTracing||"tracesSampleRate"in e||"tracesSampler"in e)}function Yf(n){if(!Dr())return;const t=Zb(n),e=Ir(),i=n.scope?n.scope.getSpan():jb();if(n.onlyIfParent&&!i)return;const o=(n.scope||Cr()).clone();return Kb(e,{parentSpan:i,spanContext:t,forceTransaction:n.forceTransaction,scope:o})}function jb(){return Cr().getSpan()}function Kb(n,{parentSpan:t,spanContext:e,forceTransaction:i,scope:r}){if(!Dr())return;const s=Wl();let o;if(t&&!i)o=t.startChild(e);else if(t){const a=yr(t),{traceId:c,spanId:l}=t.spanContext(),u=Gl(t);o=n.startTransaction({traceId:c,parentSpanId:l,parentSampled:u,...e,metadata:{dynamicSamplingContext:a,...e.metadata}})}else{const{traceId:a,dsc:c,parentSpanId:l,sampled:u}={...s.getPropagationContext(),...r.getPropagationContext()};o=n.startTransaction({traceId:a,parentSpanId:l,parentSampled:u,...e,metadata:{dynamicSamplingContext:c,...e.metadata}})}return r.setSpan(o),Jb(o,r,s),o}function Zb(n){if(n.startTime){const t={...n};return t.startTimestamp=$o(n.startTime),delete t.startTime,t}return n}const qf="_sentryScope",jf="_sentryIsolationScope";function Jb(n,t,e){n&&(qc(n,jf,e),qc(n,qf,t))}function Qb(n){return{scope:n[qf],isolationScope:n[jf]}}const ur="sentry.source",rr="sentry.sample_rate",ro="sentry.op",sr="sentry.origin",tA="profile_id";class Kf{constructor(t=1e3){this._maxlen=t,this.spans=[]}add(t){this.spans.length>this._maxlen?t.spanRecorder=void 0:this.spans.push(t)}}class Xo{constructor(t={}){this._traceId=t.traceId||Se(),this._spanId=t.spanId||Se().substring(16),this._startTime=t.startTimestamp||_s(),this.tags=t.tags?{...t.tags}:{},this.data=t.data?{...t.data}:{},this.instrumenter=t.instrumenter||"sentry",this._attributes={},this.setAttributes({[sr]:t.origin||"manual",[ro]:t.op,...t.attributes}),this._name=t.name||t.description,t.parentSpanId&&(this._parentSpanId=t.parentSpanId),"sampled"in t&&(this._sampled=t.sampled),t.status&&(this._status=t.status),t.endTimestamp&&(this._endTime=t.endTimestamp),t.exclusiveTime!==void 0&&(this._exclusiveTime=t.exclusiveTime),this._measurements=t.measurements?{...t.measurements}:{}}get name(){return this._name||""}set name(t){this.updateName(t)}get description(){return this._name}set description(t){this._name=t}get traceId(){return this._traceId}set traceId(t){this._traceId=t}get spanId(){return this._spanId}set spanId(t){this._spanId=t}set parentSpanId(t){this._parentSpanId=t}get parentSpanId(){return this._parentSpanId}get sampled(){return this._sampled}set sampled(t){this._sampled=t}get attributes(){return this._attributes}set attributes(t){this._attributes=t}get startTimestamp(){return this._startTime}set startTimestamp(t){this._startTime=t}get endTimestamp(){return this._endTime}set endTimestamp(t){this._endTime=t}get status(){return this._status}set status(t){this._status=t}get op(){return this._attributes[ro]}set op(t){this.setAttribute(ro,t)}get origin(){return this._attributes[sr]}set origin(t){this.setAttribute(sr,t)}spanContext(){const{_spanId:t,_traceId:e,_sampled:i}=this;return{spanId:t,traceId:e,traceFlags:i?Vf:Nb}}startChild(t){const e=new Xo({...t,parentSpanId:this._spanId,sampled:this._sampled,traceId:this._traceId});e.spanRecorder=this.spanRecorder,e.spanRecorder&&e.spanRecorder.add(e);const i=Co(this);if(e.transaction=i,Xt&&i){const r=t&&t.op||"< unknown op >",s=Ge(e).description||"< unknown name >",o=i.spanContext().spanId,a=`[Tracing] Starting '${r}' span on transaction '${s}' (${o}).`;ut.log(a),this._logMessage=a}return e}setTag(t,e){return this.tags={...this.tags,[t]:e},this}setData(t,e){return this.data={...this.data,[t]:e},this}setAttribute(t,e){e===void 0?delete this._attributes[t]:this._attributes[t]=e}setAttributes(t){Object.keys(t).forEach(e=>this.setAttribute(e,t[e]))}setStatus(t){return this._status=t,this}setHttpStatus(t){return $l(this,t),this}setName(t){this.updateName(t)}updateName(t){return this._name=t,this}isSuccess(){return this._status==="ok"}finish(t){return this.end(t)}end(t){if(this._endTime)return;const e=Co(this);if(Xt&&e&&e.spanContext().spanId!==this._spanId){const i=this._logMessage;i&&ut.log(i.replace("Starting","Finishing"))}this._endTime=$o(t)}toTraceparent(){return Wo(this)}toContext(){return un({data:this._getData(),description:this._name,endTimestamp:this._endTime,op:this.op,parentSpanId:this._parentSpanId,sampled:this._sampled,spanId:this._spanId,startTimestamp:this._startTime,status:this._status,tags:this.tags,traceId:this._traceId})}updateWithContext(t){return this.data=t.data||{},this._name=t.name||t.description,this._endTime=t.endTimestamp,this.op=t.op,this._parentSpanId=t.parentSpanId,this._sampled=t.sampled,this._spanId=t.spanId||this._spanId,this._startTime=t.startTimestamp||this._startTime,this._status=t.status,this.tags=t.tags||{},this._traceId=t.traceId||this._traceId,this}getTraceContext(){return zl(this)}getSpanJSON(){return un({data:this._getData(),description:this._name,op:this._attributes[ro],parent_span_id:this._parentSpanId,span_id:this._spanId,start_timestamp:this._startTime,status:this._status,tags:Object.keys(this.tags).length>0?this.tags:void 0,timestamp:this._endTime,trace_id:this._traceId,origin:this._attributes[sr],_metrics_summary:void 0,profile_id:this._attributes[tA],exclusive_time:this._exclusiveTime,measurements:Object.keys(this._measurements).length>0?this._measurements:void 0})}isRecording(){return!this._endTime&&!!this._sampled}toJSON(){return this.getSpanJSON()}_getData(){const{data:t,_attributes:e}=this,i=Object.keys(t).length>0,r=Object.keys(e).length>0;if(!(!i&&!r))return i&&r?{...t,...e}:i?t:e}}class Zf extends Xo{constructor(t,e){super(t),this._contexts={},this._hub=e||Ir(),this._name=t.name||"",this._metadata={...t.metadata},this._trimEnd=t.trimEnd,this.transaction=this;const i=this._metadata.dynamicSamplingContext;i&&(this._frozenDynamicSamplingContext={...i})}get name(){return this._name}set name(t){this.setName(t)}get metadata(){return{source:"custom",spanMetadata:{},...this._metadata,...this._attributes[ur]&&{source:this._attributes[ur]},...this._attributes[rr]&&{sampleRate:this._attributes[rr]}}}set metadata(t){this._metadata=t}setName(t,e="custom"){this._name=t,this.setAttribute(ur,e)}updateName(t){return this._name=t,this}initSpanRecorder(t=1e3){this.spanRecorder||(this.spanRecorder=new Kf(t)),this.spanRecorder.add(this)}setContext(t,e){e===null?delete this._contexts[t]:this._contexts[t]=e}setMeasurement(t,e,i=""){this._measurements[t]={value:e,unit:i}}setMetadata(t){this._metadata={...this._metadata,...t}}end(t){const e=$o(t),i=this._finishTransaction(e);if(i)return this._hub.captureEvent(i)}toContext(){const t=super.toContext();return un({...t,name:this._name,trimEnd:this._trimEnd})}updateWithContext(t){return super.updateWithContext(t),this._name=t.name||"",this._trimEnd=t.trimEnd,this}getDynamicSamplingContext(){return yr(this)}setHub(t){this._hub=t}getProfileId(){if(this._contexts!==void 0&&this._contexts.profile!==void 0)return this._contexts.profile.profile_id}_finishTransaction(t){if(this._endTime!==void 0)return;this._name||(Xt&&ut.warn("Transaction has no name, falling back to `<unlabeled transaction>`."),this._name="<unlabeled transaction>"),super.end(t);const e=this._hub.getClient();if(e&&e.emit&&e.emit("finishTransaction",this),this._sampled!==!0){Xt&&ut.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled."),e&&e.recordDroppedEvent("sample_rate","transaction");return}const i=this.spanRecorder?this.spanRecorder.spans.filter(u=>u!==this&&Ge(u).timestamp):[];if(this._trimEnd&&i.length>0){const u=i.map(h=>Ge(h).timestamp).filter(Boolean);this._endTime=u.reduce((h,d)=>h>d?h:d)}const{scope:r,isolationScope:s}=Qb(this),{metadata:o}=this,{source:a}=o,c={contexts:{...this._contexts,trace:zl(this)},spans:i,start_timestamp:this._startTime,tags:this.tags,timestamp:this._endTime,transaction:this._name,type:"transaction",sdkProcessingMetadata:{...o,capturedSpanScope:r,capturedSpanIsolationScope:s,...un({dynamicSamplingContext:yr(this)})},_metrics_summary:void 0,...a&&{transaction_info:{source:a}}};return Object.keys(this._measurements).length>0&&(Xt&&ut.log("[Measurements] Adding measurements to transaction",JSON.stringify(this._measurements,void 0,2)),c.measurements=this._measurements),Xt&&ut.log(`[Tracing] Finishing ${this.op} transaction: ${this._name}.`),c}}const xo={idleTimeout:1e3,finalTimeout:3e4,heartbeatInterval:5e3},eA="finishReason",Qi=["heartbeatFailed","idleTimeout","documentHidden","finalTimeout","externalFinish","cancelled"];class nA extends Kf{constructor(t,e,i,r){super(r),this._pushActivity=t,this._popActivity=e,this.transactionSpanId=i}add(t){if(t.spanContext().spanId!==this.transactionSpanId){const e=t.end;t.end=(...i)=>(this._popActivity(t.spanContext().spanId),e.apply(t,i)),Ge(t).timestamp===void 0&&this._pushActivity(t.spanContext().spanId)}super.add(t)}}class iA extends Zf{constructor(t,e,i=xo.idleTimeout,r=xo.finalTimeout,s=xo.heartbeatInterval,o=!1,a=!1){super(t,e),this._idleHub=e,this._idleTimeout=i,this._finalTimeout=r,this._heartbeatInterval=s,this._onScope=o,this.activities={},this._heartbeatCounter=0,this._finished=!1,this._idleTimeoutCanceledPermanently=!1,this._beforeFinishCallbacks=[],this._finishReason=Qi[4],this._autoFinishAllowed=!a,o&&(Xt&&ut.log(`Setting idle transaction on scope. Span ID: ${this.spanContext().spanId}`),e.getScope().setSpan(this)),a||this._restartIdleTimeout(),setTimeout(()=>{this._finished||(this.setStatus("deadline_exceeded"),this._finishReason=Qi[3],this.end())},this._finalTimeout)}end(t){const e=$o(t);if(this._finished=!0,this.activities={},this.op==="ui.action.click"&&this.setAttribute(eA,this._finishReason),this.spanRecorder){Xt&&ut.log("[Tracing] finishing IdleTransaction",new Date(e*1e3).toISOString(),this.op);for(const i of this._beforeFinishCallbacks)i(this,e);this.spanRecorder.spans=this.spanRecorder.spans.filter(i=>{if(i.spanContext().spanId===this.spanContext().spanId)return!0;Ge(i).timestamp||(i.setStatus("cancelled"),i.end(e),Xt&&ut.log("[Tracing] cancelling span since transaction ended early",JSON.stringify(i,void 0,2)));const{start_timestamp:r,timestamp:s}=Ge(i),o=r&&r<e,a=(this._finalTimeout+this._idleTimeout)/1e3,c=s&&r&&s-r<a;if(Xt){const l=JSON.stringify(i,void 0,2);o?c||ut.log("[Tracing] discarding Span since it finished after Transaction final timeout",l):ut.log("[Tracing] discarding Span since it happened after Transaction was finished",l)}return o&&c}),Xt&&ut.log("[Tracing] flushing IdleTransaction")}else Xt&&ut.log("[Tracing] No active IdleTransaction");if(this._onScope){const i=this._idleHub.getScope();i.getTransaction()===this&&i.setSpan(void 0)}return super.end(t)}registerBeforeFinishCallback(t){this._beforeFinishCallbacks.push(t)}initSpanRecorder(t){if(!this.spanRecorder){const e=r=>{this._finished||this._pushActivity(r)},i=r=>{this._finished||this._popActivity(r)};this.spanRecorder=new nA(e,i,this.spanContext().spanId,t),Xt&&ut.log("Starting heartbeat"),this._pingHeartbeat()}this.spanRecorder.add(this)}cancelIdleTimeout(t,{restartOnChildSpanChange:e}={restartOnChildSpanChange:!0}){this._idleTimeoutCanceledPermanently=e===!1,this._idleTimeoutID&&(clearTimeout(this._idleTimeoutID),this._idleTimeoutID=void 0,Object.keys(this.activities).length===0&&this._idleTimeoutCanceledPermanently&&(this._finishReason=Qi[5],this.end(t)))}setFinishReason(t){this._finishReason=t}sendAutoFinishSignal(){this._autoFinishAllowed||(Xt&&ut.log("[Tracing] Received finish signal for idle transaction."),this._restartIdleTimeout(),this._autoFinishAllowed=!0)}_restartIdleTimeout(t){this.cancelIdleTimeout(),this._idleTimeoutID=setTimeout(()=>{!this._finished&&Object.keys(this.activities).length===0&&(this._finishReason=Qi[1],this.end(t))},this._idleTimeout)}_pushActivity(t){this.cancelIdleTimeout(void 0,{restartOnChildSpanChange:!this._idleTimeoutCanceledPermanently}),Xt&&ut.log(`[Tracing] pushActivity: ${t}`),this.activities[t]=!0,Xt&&ut.log("[Tracing] new activities count",Object.keys(this.activities).length)}_popActivity(t){if(this.activities[t]&&(Xt&&ut.log(`[Tracing] popActivity ${t}`),delete this.activities[t],Xt&&ut.log("[Tracing] new activities count",Object.keys(this.activities).length)),Object.keys(this.activities).length===0){const e=_s();this._idleTimeoutCanceledPermanently?this._autoFinishAllowed&&(this._finishReason=Qi[5],this.end(e)):this._restartIdleTimeout(e+this._idleTimeout/1e3)}}_beat(){if(this._finished)return;const t=Object.keys(this.activities).join("");t===this._prevHeartbeatString?this._heartbeatCounter++:this._heartbeatCounter=1,this._prevHeartbeatString=t,this._heartbeatCounter>=3?this._autoFinishAllowed&&(Xt&&ut.log("[Tracing] Transaction finished because of no change for 3 heart beats"),this.setStatus("deadline_exceeded"),this._finishReason=Qi[0],this.end()):this._pingHeartbeat()}_pingHeartbeat(){Xt&&ut.log(`pinging Heartbeat -> current counter: ${this._heartbeatCounter}`),setTimeout(()=>{this._beat()},this._heartbeatInterval)}}function Jf(n,t,e){if(!Dr(t))return n.sampled=!1,n;if(n.sampled!==void 0)return n.setAttribute(rr,Number(n.sampled)),n;let i;return typeof t.tracesSampler=="function"?(i=t.tracesSampler(e),n.setAttribute(rr,Number(i))):e.parentSampled!==void 0?i=e.parentSampled:typeof t.tracesSampleRate<"u"?(i=t.tracesSampleRate,n.setAttribute(rr,Number(i))):(i=1,n.setAttribute(rr,i)),Qf(i)?i?(n.sampled=Math.random()<i,n.sampled?(Xt&&ut.log(`[Tracing] starting ${n.op} transaction - ${Ge(n).description}`),n):(Xt&&ut.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(i)})`),n)):(Xt&&ut.log(`[Tracing] Discarding transaction because ${typeof t.tracesSampler=="function"?"tracesSampler returned 0 or false":"a negative sampling decision was inherited or tracesSampleRate is set to 0"}`),n.sampled=!1,n):(Xt&&ut.warn("[Tracing] Discarding transaction because of invalid sample rate."),n.sampled=!1,n)}function Qf(n){return VT(n)||!(typeof n=="number"||typeof n=="boolean")?(Xt&&ut.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(n)} of type ${JSON.stringify(typeof n)}.`),!1):n<0||n>1?(Xt&&ut.warn(`[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ${n}.`),!1):!0}function rA(){const t=this.getScope().getSpan();return t?{"sentry-trace":Wo(t)}:{}}function sA(n,t){const e=this.getClient(),i=e&&e.getOptions()||{},r=i.instrumenter||"sentry",s=n.instrumenter||"sentry";r!==s&&(Xt&&ut.error(`A transaction was started with instrumenter=\`${s}\`, but the SDK is configured with the \`${r}\` instrumenter.
The transaction will not be sampled. Please use the ${r} instrumentation to start transactions.`),n.sampled=!1);let o=new Zf(n,this);return o=Jf(o,i,{name:n.name,parentSampled:n.parentSampled,transactionContext:n,attributes:{...n.data,...n.attributes},...t}),o.isRecording()&&o.initSpanRecorder(i._experiments&&i._experiments.maxSpans),e&&e.emit&&e.emit("startTransaction",o),o}function od(n,t,e,i,r,s,o,a=!1){const c=n.getClient(),l=c&&c.getOptions()||{};let u=new iA(t,n,e,i,o,r,a);return u=Jf(u,l,{name:t.name,parentSampled:t.parentSampled,transactionContext:t,attributes:{...t.data,...t.attributes},...s}),u.isRecording()&&u.initSpanRecorder(l._experiments&&l._experiments.maxSpans),c&&c.emit&&c.emit("startTransaction",u),u}function tp(){const n=Pr();n.__SENTRY__&&(n.__SENTRY__.extensions=n.__SENTRY__.extensions||{},n.__SENTRY__.extensions.startTransaction||(n.__SENTRY__.extensions.startTransaction=sA),n.__SENTRY__.extensions.traceHeaders||(n.__SENTRY__.extensions.traceHeaders=rA),Yb())}function oA(n,t,e){const i=Li();i&&i.setMeasurement(n,t,e)}function aA(n,t){const e={sent_at:new Date().toISOString()};t&&(e.dsn=JT(t));const i=n.map(cA);return Cb(e,i)}function cA(n){return[{type:"span"},n]}const re=typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__,It=ce;function lA(){It.document?It.document.addEventListener("visibilitychange",()=>{const n=Li();if(It.document.hidden&&n){const t="cancelled",{op:e,status:i}=Ge(n);re&&ut.log(`[Tracing] Transaction: ${t} -> since tab moved to the background, op: ${e}`),i||n.setStatus(t),n.setTag("visibilitychange","document.hidden"),n.end()}}):re&&ut.warn("[Tracing] Could not set up background tab detection due to lack of global document")}const vs=(n,t,e)=>{let i,r;return s=>{t.value>=0&&(s||e)&&(r=t.value-(i||0),(r||i===void 0)&&(i=t.value,t.delta=r,n(t)))}},uA=()=>`v3-${Date.now()}-${Math.floor(Math.random()*(9e12-1))+1e12}`,hA=()=>{const n=It.performance.timing,t=It.performance.navigation.type,e={entryType:"navigation",startTime:0,type:t==2?"back_forward":t===1?"reload":"navigate"};for(const i in n)i!=="navigationStart"&&i!=="toJSON"&&(e[i]=Math.max(n[i]-n.navigationStart,0));return e},Yo=()=>It.__WEB_VITALS_POLYFILL__?It.performance&&(performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]||hA()):It.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0],Xl=()=>{const n=Yo();return n&&n.activationStart||0},Ss=(n,t)=>{const e=Yo();let i="navigate";return e&&(It.document&&It.document.prerendering||Xl()>0?i="prerender":i=e.type.replace(/_/g,"-")),{name:n,value:typeof t>"u"?-1:t,rating:"good",delta:0,entries:[],id:uA(),navigationType:i}},Lr=(n,t,e)=>{try{if(PerformanceObserver.supportedEntryTypes.includes(n)){const i=new PerformanceObserver(r=>{t(r.getEntries())});return i.observe(Object.assign({type:n,buffered:!0},e||{})),i}}catch{}},xs=(n,t)=>{const e=i=>{(i.type==="pagehide"||It.document.visibilityState==="hidden")&&(n(i),t&&(removeEventListener("visibilitychange",e,!0),removeEventListener("pagehide",e,!0)))};It.document&&(addEventListener("visibilitychange",e,!0),addEventListener("pagehide",e,!0))},dA=(n,t={})=>{const e=Ss("CLS",0);let i,r=0,s=[];const o=c=>{c.forEach(l=>{if(!l.hadRecentInput){const u=s[0],h=s[s.length-1];r&&s.length!==0&&l.startTime-h.startTime<1e3&&l.startTime-u.startTime<5e3?(r+=l.value,s.push(l)):(r=l.value,s=[l]),r>e.value&&(e.value=r,e.entries=s,i&&i())}})},a=Lr("layout-shift",o);if(a){i=vs(n,e,t.reportAllChanges);const c=()=>{o(a.takeRecords()),i(!0)};return xs(c),c}};let Po=-1;const fA=()=>{It.document&&It.document.visibilityState&&(Po=It.document.visibilityState==="hidden"&&!It.document.prerendering?0:1/0)},pA=()=>{xs(({timeStamp:n})=>{Po=n},!0)},Yl=()=>(Po<0&&(fA(),pA()),{get firstHiddenTime(){return Po}}),mA=n=>{const t=Yl(),e=Ss("FID");let i;const r=a=>{a.startTime<t.firstHiddenTime&&(e.value=a.processingStart-a.startTime,e.entries.push(a),i(!0))},s=a=>{a.forEach(r)},o=Lr("first-input",s);i=vs(n,e),o&&xs(()=>{s(o.takeRecords()),o.disconnect()},!0)};let ep=0,Oa=1/0,so=0;const gA=n=>{n.forEach(t=>{t.interactionId&&(Oa=Math.min(Oa,t.interactionId),so=Math.max(so,t.interactionId),ep=so?(so-Oa)/7+1:0)})};let nl;const _A=()=>nl?ep:performance.interactionCount||0,vA=()=>{"interactionCount"in performance||nl||(nl=Lr("event",gA,{type:"event",buffered:!0,durationThreshold:0}))},np=()=>_A(),ad=10,Nn=[],Fa={},cd=n=>{const t=Nn[Nn.length-1],e=Fa[n.interactionId];if(e||Nn.length<ad||n.duration>t.latency){if(e)e.entries.push(n),e.latency=Math.max(e.latency,n.duration);else{const i={id:n.interactionId,latency:n.duration,entries:[n]};Fa[i.id]=i,Nn.push(i)}Nn.sort((i,r)=>r.latency-i.latency),Nn.splice(ad).forEach(i=>{delete Fa[i.id]})}},SA=()=>{const n=Math.min(Nn.length-1,Math.floor(np()/50));return Nn[n]},xA=(n,t)=>{t=t||{},vA();const e=Ss("INP");let i;const r=o=>{o.forEach(c=>{c.interactionId&&cd(c),c.entryType==="first-input"&&!Nn.some(u=>u.entries.some(h=>c.duration===h.duration&&c.startTime===h.startTime))&&cd(c)});const a=SA();a&&a.latency!==e.value&&(e.value=a.latency,e.entries=a.entries,i())},s=Lr("event",r,{durationThreshold:t.durationThreshold||40});i=vs(n,e,t.reportAllChanges),s&&(s.observe({type:"first-input",buffered:!0}),xs(()=>{r(s.takeRecords()),e.value<0&&np()>0&&(e.value=0,e.entries=[]),i(!0)}))},ld={},EA=n=>{const t=Yl(),e=Ss("LCP");let i;const r=o=>{const a=o[o.length-1];if(a){const c=Math.max(a.startTime-Xl(),0);c<t.firstHiddenTime&&(e.value=c,e.entries=[a],i())}},s=Lr("largest-contentful-paint",r);if(s){i=vs(n,e);const o=()=>{ld[e.id]||(r(s.takeRecords()),s.disconnect(),ld[e.id]=!0,i(!0))};return["keydown","click"].forEach(a=>{It.document&&addEventListener(a,o,{once:!0,capture:!0})}),xs(o,!0),o}},il=n=>{It.document&&(It.document.prerendering?addEventListener("prerenderingchange",()=>il(n),!0):It.document.readyState!=="complete"?addEventListener("load",()=>il(n),!0):setTimeout(n,0))},yA=(n,t)=>{t=t||{};const e=Ss("TTFB"),i=vs(n,e,t.reportAllChanges);il(()=>{const r=Yo();if(r){if(e.value=Math.max(r.responseStart-Xl(),0),e.value<0||e.value>performance.now())return;e.entries=[r],i(!0)}})},qr={},Io={};let ip,rp,sp,op,ap;function MA(n,t=!1){return Es("cls",n,RA,ip,t)}function TA(n,t=!1){return Es("lcp",n,PA,sp,t)}function bA(n){return Es("ttfb",n,IA,op)}function AA(n){return Es("fid",n,CA,rp)}function wA(n){return Es("inp",n,DA,ap)}function os(n,t){return cp(n,t),Io[n]||(LA(n),Io[n]=!0),lp(n,t)}function Nr(n,t){const e=qr[n];if(!(!e||!e.length))for(const i of e)try{i(t)}catch(r){re&&ut.error(`Error while triggering instrumentation handler.
Type: ${n}
Name: ${Bf(i)}
Error:`,r)}}function RA(){return dA(n=>{Nr("cls",{metric:n}),ip=n},{reportAllChanges:!0})}function CA(){return mA(n=>{Nr("fid",{metric:n}),rp=n})}function PA(){return EA(n=>{Nr("lcp",{metric:n}),sp=n})}function IA(){return yA(n=>{Nr("ttfb",{metric:n}),op=n})}function DA(){return xA(n=>{Nr("inp",{metric:n}),ap=n})}function Es(n,t,e,i,r=!1){cp(n,t);let s;return Io[n]||(s=e(),Io[n]=!0),i&&t({metric:i}),lp(n,t,r?s:void 0)}function LA(n){const t={};n==="event"&&(t.durationThreshold=0),Lr(n,e=>{Nr(n,{entries:e})},t)}function cp(n,t){qr[n]=qr[n]||[],qr[n].push(t)}function lp(n,t,e){return()=>{e&&e();const i=qr[n];if(!i)return;const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}function Ba(n){return typeof n=="number"&&isFinite(n)}function Mr(n,{startTimestamp:t,...e}){return t&&n.startTimestamp>t&&(n.startTimestamp=t),n.startChild({startTimestamp:t,...e})}const NA=2147483647;function xe(n){return n/1e3}function ql(){return It&&It.addEventListener&&It.performance}let ud=0,he={},vn,jr;function UA(){const n=ql();if(n&&en){n.mark&&It.performance.mark("sentry-tracing-init");const t=zA(),e=kA(),i=HA(),r=GA();return()=>{t(),e(),i(),r()}}return()=>{}}function OA(){os("longtask",({entries:n})=>{for(const t of n){const e=Li();if(!e)return;const i=xe(en+t.startTime),r=xe(t.duration);e.startChild({description:"Main UI thread blocked",op:"ui.long-task",origin:"auto.ui.browser.metrics",startTimestamp:i,endTimestamp:i+r})}})}function FA(){os("event",({entries:n})=>{for(const t of n){const e=Li();if(!e)return;if(t.name==="click"){const i=xe(en+t.startTime),r=xe(t.duration),s={description:Ro(t.target),op:`ui.interaction.${t.name}`,origin:"auto.ui.browser.metrics",startTimestamp:i,endTimestamp:i+r},o=jT(t.target);o&&(s.attributes={"ui.component_name":o}),e.startChild(s)}}})}function BA(n,t){if(ql()&&en){const i=VA(n,t);return()=>{i()}}return()=>{}}function kA(){return MA(({metric:n})=>{const t=n.entries[n.entries.length-1];t&&(re&&ut.log("[Measurements] Adding CLS"),he.cls={value:n.value,unit:""},jr=t)},!0)}function HA(){return TA(({metric:n})=>{const t=n.entries[n.entries.length-1];t&&(re&&ut.log("[Measurements] Adding LCP"),he.lcp={value:n.value,unit:"millisecond"},vn=t)},!0)}function zA(){return AA(({metric:n})=>{const t=n.entries[n.entries.length-1];if(!t)return;const e=xe(en),i=xe(t.startTime);re&&ut.log("[Measurements] Adding FID"),he.fid={value:n.value,unit:"millisecond"},he["mark.fid"]={value:e+i,unit:"second"}})}function GA(){return bA(({metric:n})=>{n.entries[n.entries.length-1]&&(re&&ut.log("[Measurements] Adding TTFB"),he.ttfb={value:n.value,unit:"millisecond"})})}const hd={click:"click",pointerdown:"click",pointerup:"click",mousedown:"click",mouseup:"click",touchstart:"click",touchend:"click",mouseover:"hover",mouseout:"hover",mouseenter:"hover",mouseleave:"hover",pointerover:"hover",pointerout:"hover",pointerenter:"hover",pointerleave:"hover",dragstart:"drag",dragend:"drag",drag:"drag",dragenter:"drag",dragleave:"drag",dragover:"drag",drop:"drag",keydown:"press",keyup:"press",keypress:"press",input:"press"};function VA(n,t){return wA(({metric:e})=>{if(e.value===void 0)return;const i=e.entries.find(T=>T.duration===e.value&&hd[T.name]!==void 0),r=Rr();if(!i||!r)return;const s=hd[i.name],o=r.getOptions(),a=xe(en+i.startTime),c=xe(e.value),l=i.interactionId!==void 0?n[i.interactionId]:void 0;if(l===void 0)return;const{routeName:u,parentContext:h,activeTransaction:d,user:p,replayId:g}=l,S=p!==void 0?p.email||p.id||p.ip_address:void 0,m=d!==void 0?d.getProfileId():void 0,f=new Xo({startTimestamp:a,endTimestamp:a+c,op:`ui.interaction.${s}`,name:Ro(i.target),attributes:{release:o.release,environment:o.environment,transaction:u,...S!==void 0&&S!==""?{user:S}:{},...m!==void 0?{profile_id:m}:{},...g!==void 0?{replay_id:g}:{}},exclusiveTime:e.value,measurements:{inp:{value:e.value,unit:"millisecond"}}}),b=JA(h,o,t);if(b&&Math.random()<b){const T=f?aA([f],r.getDsn()):void 0,E=r&&r.getTransport();E&&T&&E.send(T).then(null,L=>{re&&ut.error("Error while sending interaction:",L)});return}})}function WA(n){const t=ql();if(!t||!It.performance.getEntries||!en)return;re&&ut.log("[Tracing] Adding & adjusting spans using Performance API");const e=xe(en),i=t.getEntries(),{op:r,start_timestamp:s}=Ge(n);if(i.slice(ud).forEach(o=>{const a=xe(o.startTime),c=xe(o.duration);if(!(n.op==="navigation"&&s&&e+a<s))switch(o.entryType){case"navigation":{XA(n,o,e);break}case"mark":case"paint":case"measure":{$A(n,o,a,c,e);const l=Yl(),u=o.startTime<l.firstHiddenTime;o.name==="first-paint"&&u&&(re&&ut.log("[Measurements] Adding FP"),he.fp={value:o.startTime,unit:"millisecond"}),o.name==="first-contentful-paint"&&u&&(re&&ut.log("[Measurements] Adding FCP"),he.fcp={value:o.startTime,unit:"millisecond"});break}case"resource":{qA(n,o,o.name,a,c,e);break}}}),ud=Math.max(i.length-1,0),jA(n),r==="pageload"){ZA(he),["fcp","fp","lcp"].forEach(a=>{if(!he[a]||!s||e>=s)return;const c=he[a].value,l=e+xe(c),u=Math.abs((l-s)*1e3),h=u-c;re&&ut.log(`[Measurements] Normalized ${a} from ${c} to ${u} (${h})`),he[a].value=u});const o=he["mark.fid"];o&&he.fid&&(Mr(n,{description:"first input delay",endTimestamp:o.value+xe(he.fid.value),op:"ui.action",origin:"auto.ui.browser.metrics",startTimestamp:o.value}),delete he["mark.fid"]),"fcp"in he||delete he.cls,Object.keys(he).forEach(a=>{oA(a,he[a].value,he[a].unit)}),KA(n)}vn=void 0,jr=void 0,he={}}function $A(n,t,e,i,r){const s=r+e,o=s+i;return Mr(n,{description:t.name,endTimestamp:o,op:t.entryType,origin:"auto.resource.browser.metrics",startTimestamp:s}),s}function XA(n,t,e){["unloadEvent","redirect","domContentLoadedEvent","loadEvent","connect"].forEach(i=>{oo(n,t,i,e)}),oo(n,t,"secureConnection",e,"TLS/SSL","connectEnd"),oo(n,t,"fetch",e,"cache","domainLookupStart"),oo(n,t,"domainLookup",e,"DNS"),YA(n,t,e)}function oo(n,t,e,i,r,s){const o=s?t[s]:t[`${e}End`],a=t[`${e}Start`];!a||!o||Mr(n,{op:"browser",origin:"auto.browser.browser.metrics",description:r||e,startTimestamp:i+xe(a),endTimestamp:i+xe(o)})}function YA(n,t,e){t.responseEnd&&(Mr(n,{op:"browser",origin:"auto.browser.browser.metrics",description:"request",startTimestamp:e+xe(t.requestStart),endTimestamp:e+xe(t.responseEnd)}),Mr(n,{op:"browser",origin:"auto.browser.browser.metrics",description:"response",startTimestamp:e+xe(t.responseStart),endTimestamp:e+xe(t.responseEnd)}))}function qA(n,t,e,i,r,s){if(t.initiatorType==="xmlhttprequest"||t.initiatorType==="fetch")return;const o=Go(e),a={};ka(a,t,"transferSize","http.response_transfer_size"),ka(a,t,"encodedBodySize","http.response_content_length"),ka(a,t,"decodedBodySize","http.decoded_response_content_length"),"renderBlockingStatus"in t&&(a["resource.render_blocking_status"]=t.renderBlockingStatus),o.protocol&&(a["url.scheme"]=o.protocol.split(":").pop()),o.host&&(a["server.address"]=o.host),a["url.same_origin"]=e.includes(It.location.origin);const c=s+i,l=c+r;Mr(n,{description:e.replace(It.location.origin,""),endTimestamp:l,op:t.initiatorType?`resource.${t.initiatorType}`:"resource.other",origin:"auto.resource.browser.metrics",startTimestamp:c,data:a})}function jA(n){const t=It.navigator;if(!t)return;const e=t.connection;e&&(e.effectiveType&&n.setTag("effectiveConnectionType",e.effectiveType),e.type&&n.setTag("connectionType",e.type),Ba(e.rtt)&&(he["connection.rtt"]={value:e.rtt,unit:"millisecond"})),Ba(t.deviceMemory)&&n.setTag("deviceMemory",`${t.deviceMemory} GB`),Ba(t.hardwareConcurrency)&&n.setTag("hardwareConcurrency",String(t.hardwareConcurrency))}function KA(n){vn&&(re&&ut.log("[Measurements] Adding LCP Data"),vn.element&&n.setTag("lcp.element",Ro(vn.element)),vn.id&&n.setTag("lcp.id",vn.id),vn.url&&n.setTag("lcp.url",vn.url.trim().slice(0,200)),n.setTag("lcp.size",vn.size)),jr&&jr.sources&&(re&&ut.log("[Measurements] Adding CLS Data"),jr.sources.forEach((t,e)=>n.setTag(`cls.source.${e+1}`,Ro(t.node))))}function ka(n,t,e,i){const r=t[e];r!=null&&r<NA&&(n[i]=r)}function ZA(n){const t=Yo();if(!t)return;const{responseStart:e,requestStart:i}=t;i<=e&&(re&&ut.log("[Measurements] Adding TTFB Request Time"),n["ttfb.requestTime"]={value:e-i,unit:"millisecond"})}function JA(n,t,e){if(!Dr(t))return!1;let i;return n!==void 0&&typeof t.tracesSampler=="function"?i=t.tracesSampler({transactionContext:n,name:n.name,parentSampled:n.parentSampled,attributes:{...n.data,...n.attributes},location:It.location}):n!==void 0&&n.sampled!==void 0?i=n.sampled:typeof t.tracesSampleRate<"u"?i=t.tracesSampleRate:i=1,Qf(i)?i===!0?e:i===!1?0:i*e:(re&&ut.warn("[Tracing] Discarding interaction span because of invalid sample rate."),!1)}function QA(n,t,e,i,r="auto.http.browser"){if(!Dr()||!n.fetchData)return;const s=t(n.fetchData.url);if(n.endTimestamp&&s){const p=n.fetchData.__span;if(!p)return;const g=i[p];g&&(nw(g,n),delete i[p]);return}const o=Cr(),a=Rr(),{method:c,url:l}=n.fetchData,u=ew(l),h=u?Go(u).host:void 0,d=s?Yf({name:`${c} ${l}`,onlyIfParent:!0,attributes:{url:l,type:"fetch","http.method":c,"http.url":u,"server.address":h,[sr]:r},op:"http.client"}):void 0;if(d&&(n.fetchData.__span=d.spanContext().spanId,i[d.spanContext().spanId]=d),e(n.fetchData.url)&&a){const p=n.args[0];n.args[1]=n.args[1]||{};const g=n.args[1];g.headers=tw(p,a,o,g,d)}return d}function tw(n,t,e,i,r){const s=r||e.getSpan(),o=Wl(),{traceId:a,spanId:c,sampled:l,dsc:u}={...o.getPropagationContext(),...e.getPropagationContext()},h=s?Wo(s):Hl(a,c,l),d=zf(u||(s?yr(s):Vl(a,t,e))),p=i.headers||(typeof Request<"u"&&qh(n,Request)?n.headers:void 0);if(p)if(typeof Headers<"u"&&qh(p,Headers)){const g=new Headers(p);return g.append("sentry-trace",h),d&&g.append(Jc,d),g}else if(Array.isArray(p)){const g=[...p,["sentry-trace",h]];return d&&g.push([Jc,d]),g}else{const g="baggage"in p?p.baggage:void 0,S=[];return Array.isArray(g)?S.push(...g):g&&S.push(g),d&&S.push(d),{...p,"sentry-trace":h,baggage:S.length>0?S.join(","):void 0}}else return{"sentry-trace":h,baggage:d}}function ew(n){try{return new URL(n).href}catch{return}}function nw(n,t){if(t.response){$l(n,t.response.status);const e=t.response&&t.response.headers&&t.response.headers.get("content-length");if(e){const i=parseInt(e);i>0&&n.setAttribute("http.response_content_length",i)}}else t.error&&n.setStatus("internal_error");n.end()}const rl=["localhost",/^\/(?!\/)/],sl={traceFetch:!0,traceXHR:!0,enableHTTPTimings:!0,tracingOrigins:rl,tracePropagationTargets:rl};function iw(n){const{traceFetch:t,traceXHR:e,tracePropagationTargets:i,tracingOrigins:r,shouldCreateSpanForRequest:s,enableHTTPTimings:o}={traceFetch:sl.traceFetch,traceXHR:sl.traceXHR,...n},a=typeof s=="function"?s:u=>!0,c=u=>aw(u,i||r),l={};t&&rb(u=>{const h=QA(u,a,c,l);if(h){const d=up(u.fetchData.url),p=d?Go(d).host:void 0;h.setAttributes({"http.url":d,"server.address":p})}o&&h&&dd(h)}),e&&mb(u=>{const h=cw(u,a,c,l);o&&h&&dd(h)})}function rw(n){return n.entryType==="resource"&&"initiatorType"in n&&typeof n.nextHopProtocol=="string"&&(n.initiatorType==="fetch"||n.initiatorType==="xmlhttprequest")}function dd(n){const{url:t}=Ge(n).data||{};if(!t||typeof t!="string")return;const e=os("resource",({entries:i})=>{i.forEach(r=>{rw(r)&&r.name.endsWith(t)&&(ow(r).forEach(o=>n.setAttribute(...o)),setTimeout(e))})})}function sw(n){let t="unknown",e="unknown",i="";for(const r of n){if(r==="/"){[t,e]=n.split("/");break}if(!isNaN(Number(r))){t=i==="h"?"http":i,e=n.split(i)[1];break}i+=r}return i===n&&(t=i),{name:t,version:e}}function pn(n=0){return((en||performance.timeOrigin)+n)/1e3}function ow(n){const{name:t,version:e}=sw(n.nextHopProtocol),i=[];return i.push(["network.protocol.version",e],["network.protocol.name",t]),en?[...i,["http.request.redirect_start",pn(n.redirectStart)],["http.request.fetch_start",pn(n.fetchStart)],["http.request.domain_lookup_start",pn(n.domainLookupStart)],["http.request.domain_lookup_end",pn(n.domainLookupEnd)],["http.request.connect_start",pn(n.connectStart)],["http.request.secure_connection_start",pn(n.secureConnectionStart)],["http.request.connection_end",pn(n.connectEnd)],["http.request.request_start",pn(n.requestStart)],["http.request.response_start",pn(n.responseStart)],["http.request.response_end",pn(n.responseEnd)]]:i}function aw(n,t){return $T(n,t||rl)}function cw(n,t,e,i){const r=n.xhr,s=r&&r[Wr];if(!Dr()||!r||r.__sentry_own_request__||!s)return;const o=t(s.url);if(n.endTimestamp&&o){const p=r.__sentry_xhr_span_id__;if(!p)return;const g=i[p];g&&s.status_code!==void 0&&($l(g,s.status_code),g.end(),delete i[p]);return}const a=Cr(),c=Wl(),l=up(s.url),u=l?Go(l).host:void 0,h=o?Yf({name:`${s.method} ${s.url}`,onlyIfParent:!0,attributes:{type:"xhr","http.method":s.method,"http.url":l,url:s.url,"server.address":u,[sr]:"auto.http.browser"},op:"http.client"}):void 0;h&&(r.__sentry_xhr_span_id__=h.spanContext().spanId,i[r.__sentry_xhr_span_id__]=h);const d=Rr();if(r.setRequestHeader&&e(s.url)&&d){const{traceId:p,spanId:g,sampled:S,dsc:m}={...c.getPropagationContext(),...a.getPropagationContext()},f=h?Wo(h):Hl(p,g,S),b=zf(m||(h?yr(h):Vl(p,d,a)));lw(r,f,b)}return h}function lw(n,t,e){try{n.setRequestHeader("sentry-trace",t),e&&n.setRequestHeader(Jc,e)}catch{}}function up(n){try{return new URL(n,It.location.origin).href}catch{return}}function uw(n,t=!0,e=!0){if(!It||!It.location){re&&ut.warn("Could not initialize routing instrumentation due to invalid location");return}let i=It.location.href,r;t&&(r=n({name:It.location.pathname,startTimestamp:en?en/1e3:void 0,op:"pageload",origin:"auto.pageload.browser",metadata:{source:"url"}})),e&&db(({to:s,from:o})=>{if(o===void 0&&i&&i.indexOf(s)!==-1){i=void 0;return}o!==s&&(i=void 0,r&&(re&&ut.log(`[Tracing] Finishing current transaction with op: ${r.op}`),r.end()),r=n({name:It.location.pathname,op:"navigation",origin:"auto.navigation.browser",metadata:{source:"url"}}))})}const hw="BrowserTracing",dw={...xo,markBackgroundTransactions:!0,routingInstrumentation:uw,startTransactionOnLocationChange:!0,startTransactionOnPageLoad:!0,enableLongTask:!0,enableInp:!1,interactionsSampleRate:1,_experiments:{},...sl},fd=10;let fw=class{constructor(t){this.name=hw,this._hasSetTracePropagationTargets=!1,tp(),re&&(this._hasSetTracePropagationTargets=!!(t&&(t.tracePropagationTargets||t.tracingOrigins))),this.options={...dw,...t},this.options._experiments.enableLongTask!==void 0&&(this.options.enableLongTask=this.options._experiments.enableLongTask),t&&!t.tracePropagationTargets&&t.tracingOrigins&&(this.options.tracePropagationTargets=t.tracingOrigins),this._collectWebVitals=UA(),this._interactionIdToRouteNameMapping={},this.options.enableInp&&BA(this._interactionIdToRouteNameMapping,this.options.interactionsSampleRate),this.options.enableLongTask&&OA(),this.options._experiments.enableInteractions&&FA(),this._latestRoute={name:void 0,context:void 0}}setupOnce(t,e){this._getCurrentHub=e;const r=e().getClient(),s=r&&r.getOptions(),{routingInstrumentation:o,startTransactionOnLocationChange:a,startTransactionOnPageLoad:c,markBackgroundTransactions:l,traceFetch:u,traceXHR:h,shouldCreateSpanForRequest:d,enableHTTPTimings:p,_experiments:g}=this.options,S=s&&s.tracePropagationTargets,m=S||this.options.tracePropagationTargets;re&&this._hasSetTracePropagationTargets&&S&&ut.warn("[Tracing] The `tracePropagationTargets` option was set in the BrowserTracing integration and top level `Sentry.init`. The top level `Sentry.init` value is being used."),o(f=>{const b=this._createRouteTransaction(f);return this.options._experiments.onStartRouteTransaction&&this.options._experiments.onStartRouteTransaction(b,f,e),b},c,a),l&&lA(),g.enableInteractions&&this._registerInteractionListener(),this.options.enableInp&&this._registerInpInteractionListener(),iw({traceFetch:u,traceXHR:h,tracePropagationTargets:m,shouldCreateSpanForRequest:d,enableHTTPTimings:p})}_createRouteTransaction(t){if(!this._getCurrentHub){re&&ut.warn(`[Tracing] Did not create ${t.op} transaction because _getCurrentHub is invalid.`);return}const e=this._getCurrentHub(),{beforeNavigate:i,idleTimeout:r,finalTimeout:s,heartbeatInterval:o}=this.options,a=t.op==="pageload";let c;if(a){const p=a?pd("sentry-trace"):"",g=a?pd("baggage"):void 0,{traceId:S,dsc:m,parentSpanId:f,sampled:b}=Rb(p,g);c={traceId:S,parentSpanId:f,parentSampled:b,...t,metadata:{...t.metadata,dynamicSamplingContext:m},trimEnd:!0}}else c={trimEnd:!0,...t};const l=typeof i=="function"?i(c):c,u=l===void 0?{...c,sampled:!1}:l;u.metadata=u.name!==c.name?{...u.metadata,source:"custom"}:u.metadata,this._latestRoute.name=u.name,this._latestRoute.context=u,u.sampled===!1&&re&&ut.log(`[Tracing] Will not send ${u.op} transaction because of beforeNavigate.`),re&&ut.log(`[Tracing] Starting ${u.op} transaction on scope`);const{location:h}=It,d=od(e,u,r,s,!0,{location:h},o,a);return a&&It.document&&(It.document.addEventListener("readystatechange",()=>{["interactive","complete"].includes(It.document.readyState)&&d.sendAutoFinishSignal()}),["interactive","complete"].includes(It.document.readyState)&&d.sendAutoFinishSignal()),d.registerBeforeFinishCallback(p=>{this._collectWebVitals(),WA(p)}),d}_registerInteractionListener(){let t;const e=()=>{const{idleTimeout:i,finalTimeout:r,heartbeatInterval:s}=this.options,o="ui.action.click",a=Li();if(a&&a.op&&["navigation","pageload"].includes(a.op)){re&&ut.warn(`[Tracing] Did not create ${o} transaction because a pageload or navigation transaction is in progress.`);return}if(t&&(t.setFinishReason("interactionInterrupted"),t.end(),t=void 0),!this._getCurrentHub){re&&ut.warn(`[Tracing] Did not create ${o} transaction because _getCurrentHub is invalid.`);return}if(!this._latestRoute.name){re&&ut.warn(`[Tracing] Did not create ${o} transaction because _latestRouteName is missing.`);return}const c=this._getCurrentHub(),{location:l}=It,u={name:this._latestRoute.name,op:o,trimEnd:!0,data:{[ur]:this._latestRoute.context?pw(this._latestRoute.context):"url"}};t=od(c,u,i,r,!0,{location:l},s)};["click"].forEach(i=>{It.document&&addEventListener(i,e,{once:!1,capture:!0})})}_registerInpInteractionListener(){const t=({entries:e})=>{const i=Rr(),r=i!==void 0&&i.getIntegrationByName!==void 0?i.getIntegrationByName("Replay"):void 0,s=r!==void 0?r.getReplayId():void 0,o=Li(),a=Cr(),c=a!==void 0?a.getUser():void 0;e.forEach(l=>{if(mw(l)){const u=l.interactionId;if(u===void 0)return;const h=this._interactionIdToRouteNameMapping[u],d=l.duration,p=l.startTime,g=Object.keys(this._interactionIdToRouteNameMapping),S=g.length>0?g.reduce((m,f)=>this._interactionIdToRouteNameMapping[m].duration<this._interactionIdToRouteNameMapping[f].duration?m:f):void 0;if(l.entryType==="first-input"&&g.map(f=>this._interactionIdToRouteNameMapping[f]).some(f=>f.duration===d&&f.startTime===p)||!u)return;if(h)h.duration=Math.max(h.duration,d);else if(g.length<fd||S===void 0||d>this._interactionIdToRouteNameMapping[S].duration){const m=this._latestRoute.name,f=this._latestRoute.context;m&&f&&(S&&Object.keys(this._interactionIdToRouteNameMapping).length>=fd&&delete this._interactionIdToRouteNameMapping[S],this._interactionIdToRouteNameMapping[u]={routeName:m,duration:d,parentContext:f,user:c,activeTransaction:o,replayId:s,startTime:p})}}})};os("event",t),os("first-input",t)}};function pd(n){const t=qT(`meta[name=${n}]`);return t?t.getAttribute("content"):void 0}function pw(n){const t=n.attributes&&n.attributes[ur],e=n.data&&n.data[ur],i=n.metadata&&n.metadata.source;return t||e||i}function mw(n){return"duration"in n}function gw(){const n=Pr();if(!n.__SENTRY__)return;const t={mongodb(){const i=Ti(ei,"./node/integrations/mongo");return new i.Mongo},mongoose(){const i=Ti(ei,"./node/integrations/mongo");return new i.Mongo},mysql(){const i=Ti(ei,"./node/integrations/mysql");return new i.Mysql},pg(){const i=Ti(ei,"./node/integrations/postgres");return new i.Postgres}},e=Object.keys(t).filter(i=>!!xb(i)).map(i=>{try{return t[i]()}catch{return}}).filter(i=>i);e.length>0&&(n.__SENTRY__.integrations=[...n.__SENTRY__.integrations||[],...e])}function _w(){tp(),Sb()&&gw()}const vw=fw;(typeof __SENTRY_TRACING__>"u"||__SENTRY_TRACING__)&&_w();HT({dsn:"https://a3cba31734e8caf17b0ff0dfa7fe95ee@o4509310067539968.ingest.de.sentry.io/4509310074683472",integrations:[new vw],tracesSampleRate:1});let Ce,mn,gn,be,_n={left:0,right:0},zr,md=!0,Ha=!1,za=!1;const tr={};function Sw(){const n=document.querySelector("#c"),t=new X0({antialias:!0,canvas:n});t.setSize(window.innerWidth,window.innerHeight);const e=new qm;e.background=new Bt(2105376);const i=new Je(75,window.innerWidth/window.innerHeight,.1,100);i.position.set(0,10,30);const r=new q0(i,t.domElement);r.enablePan=!1,r.enableZoom=!0,r.target.set(0,5,0),r.update();const s=new og(16777215,.3);e.add(s);const o=new sg(16777215,1);o.position.set(-20,2.8,10),e.add(o);const a=new ng,c=a.load("textures/bois/wood_table_001_diff_4k.jpg"),l=a.load("textures/bois/wood_table_001_nor_gl_4k.jpg"),u=a.load("textures/bois/wood_table_001_rough_4k.jpg");a.load("textures/metal/PaintedMetal004.png"),a.load("textures/metal/PaintedMetal002.png");const h=new Ri(20,.5,40),d=new va({map:c,normalMap:l,roughnessMap:u,roughness:1}),p=new ke(h,d);p.position.y=-.25,e.add(p);const g=new Ri(4,1,1),S=new va({color:10894396}),m=new va({color:3825537});mn=new ke(g,S),gn=new ke(g,m),mn.position.set(0,.5,-18),gn.position.set(0,.5,18),e.add(mn),e.add(gn);const f=new vl(.7,64,64),b=new Ne({uniforms:{time:{value:0}},vertexShader:`
      varying vec3 vNormal;
      void main() {
        vNormal = normal;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform float time;
      varying vec3 vNormal;
      void main() {
        float intensity = pow(0.5 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
        gl_FragColor = vec4(1.0, 0.3 + 0.3 * sin(time), 0.3, 1.0) * intensity;
      }
    `});Ce=new ke(f,b),Ce.position.set(0,.7,0),e.add(Ce),be=new N(.4,0,.2),zr=new Ex(t),zr.addPass(new yx(e,i));const T=new gr(new yt(window.innerWidth,window.innerHeight),.4,.4,.85);zr.addPass(T);const E=new Ml,L=E.addFolder("Game Controls");L.add(be,"x",-.2,.4).name("Vélocité X"),L.add(be,"z",-.2,.4).name("Vélocité Z"),L.open();const C=E.addFolder("Lumière");C.add(o.position,"x",-20,20).name("X"),C.add(o.position,"y",2.8,50).name("Y"),C.open();const w={resetScore(){_n.left=0,_n.right=0,R()},resetBall(){Y()}};E.add(w,"resetScore").name("Reset Score"),E.add(w,"resetBall").name("Reset Ball");const U={dynamicCamera:!0};E.add(U,"dynamicCamera").name("Caméra dynamique").onChange(G=>{md=G});const y={restartGame(){_n.left=0,_n.right=0,R(),za=!1,Y(),document.getElementById("winOverlay").style.opacity=0,K()}};E.add(y,"restartGame").name("Nouvelle manche");const x=document.createElement("div");x.style.position="absolute",x.style.top="10px",x.style.left="50%",x.style.transform="translateX(-50%)",x.style.color="white",x.style.fontSize="24px",x.style.fontFamily="monospace",x.id="scoreBoard",document.body.appendChild(x);function R(){document.getElementById("scoreBoard").innerHTML=`
      <span style="color:#3a5f81;">Blue: ${_n.right}</span> |
      <span style="color:#a63c3c;">Red: ${_n.left}</span> 
    `}window.addEventListener("keydown",G=>tr[G.code]=!0),window.addEventListener("keyup",G=>tr[G.code]=!1);function V(G){if(md){const rt=G*1e-4*.2;i.position.x=Math.cos(rt)*30,i.position.z=Math.sin(rt)*30,i.position.y=12+Math.sin(rt*2)*2,i.lookAt(0,0,0)}if(requestAnimationFrame(V),!Ha||za){zr.render();return}H(G),zr.render()}function H(G){Ce.material.uniforms&&(Ce.material.uniforms.time.value=G*.001),tr.ArrowLeft&&(gn.position.x-=.5),tr.ArrowRight&&(gn.position.x+=.5),tr.KeyA&&(mn.position.x-=.5),tr.KeyD&&(mn.position.x+=.5);const k=-8,et=8;mn.position.x=Rc.clamp(mn.position.x,k,et),gn.position.x=Rc.clamp(gn.position.x,k,et),Ce.position.add(be),(Ce.position.x<=-10||Ce.position.x>=10)&&(be.x*=-1);const rt=new ii().setFromObject(Ce),vt=new ii().setFromObject(mn),Ot=new ii().setFromObject(gn),jt=1.05,W=2.5;if(rt.intersectsBox(vt)){const tt=Ce.position.x-mn.position.x;be.x=tt*.15,be.z=Math.abs(be.z),be.multiplyScalar(jt),be.clampLength(0,W),Ce.position.z=mn.position.z+1.1}if(rt.intersectsBox(Ot)){const tt=Ce.position.x-gn.position.x;be.x=tt*.15,be.z=-Math.abs(be.z),be.multiplyScalar(jt),be.clampLength(0,W),Ce.position.z=gn.position.z-1.1}if(Ce.position.z<-18&&(_n.right++,R(),Y()),Ce.position.z>18&&(_n.left++,R(),Y()),_n.right>=10){X("BLUE");return}if(_n.left>=10){X("RED");return}}function Y(){Ce.position.set(0,.7,0),be.set(Math.random()-.5,0,(Math.random()<.5?1:-1)*be.x)}function K(){const G=document.getElementById("introOverlay");G.textContent="READY...",G.style.opacity=1,Ha=!1,setTimeout(()=>{G.textContent="GO!"},1500),setTimeout(()=>{G.style.opacity=0,Ha=!0},3e3)}function X(G){const k=document.getElementById("winOverlay");G==="BLUE"?k.style.color="#3a5f81":G==="RED"&&(k.style.color="#a63c3c"),k.textContent=`${G} WINS!`,k.style.opacity=1,za=!0}R(),V(),K()}Sw()});export default xw();
//# sourceMappingURL=index-lBesLhXc.js.map
