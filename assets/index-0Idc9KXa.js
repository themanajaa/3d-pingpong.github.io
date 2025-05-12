(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wc="175",pr={ROTATE:0,DOLLY:1,PAN:2},ur={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Vf=0,Ll=1,Gf=2,Fd=1,Wf=2,In=3,si=0,Ve=1,Nn=2,kn=0,mr=1,La=2,Ul=3,Nl=4,Xf=5,yi=100,$f=101,Yf=102,qf=103,jf=104,Kf=200,Zf=201,Jf=202,Qf=203,Ua=204,Na=205,tp=206,ep=207,np=208,ip=209,rp=210,sp=211,op=212,ap=213,cp=214,Fa=0,Oa=1,Ba=2,_r=3,ka=4,za=5,Ha=6,Va=7,Od=0,lp=1,up=2,ii=0,dp=1,hp=2,fp=3,pp=4,mp=5,gp=6,_p=7,Bd=300,vr=301,Sr=302,Ga=303,Wa=304,To=306,Xa=1e3,Ti=1001,$a=1002,pn=1003,vp=1004,xs=1005,En=1006,ko=1007,Ai=1008,Gn=1009,kd=1010,zd=1011,Yr=1012,Xc=1013,Di=1014,Fn=1015,zn=1016,$c=1017,Yc=1018,qr=1020,Hd=35902,Vd=1021,Gd=1022,fn=1023,Wd=1024,Xd=1025,jr=1026,Kr=1027,$d=1028,qc=1029,Yd=1030,jc=1031,Kc=1033,Js=33776,Qs=33777,to=33778,eo=33779,Ya=35840,qa=35841,ja=35842,Ka=35843,Za=36196,Ja=37492,Qa=37496,tc=37808,ec=37809,nc=37810,ic=37811,rc=37812,sc=37813,oc=37814,ac=37815,cc=37816,lc=37817,uc=37818,dc=37819,hc=37820,fc=37821,no=36492,pc=36494,mc=36495,qd=36283,gc=36284,_c=36285,vc=36286,Sp=3200,xp=3201,jd=0,Ep=1,ni="",Qe="srgb",xr="srgb-linear",po="linear",ee="srgb",qi=7680,Fl=519,yp=512,Mp=513,bp=514,Kd=515,Tp=516,Ap=517,wp=518,Rp=519,Ol=35044,Bl="300 es",On=2e3,mo=2001;class Hi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const r=i[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const we=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let kl=1234567;const Gr=Math.PI/180,Zr=180/Math.PI;function wr(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(we[n&255]+we[n>>8&255]+we[n>>16&255]+we[n>>24&255]+"-"+we[t&255]+we[t>>8&255]+"-"+we[t>>16&15|64]+we[t>>24&255]+"-"+we[e&63|128]+we[e>>8&255]+"-"+we[e>>16&255]+we[e>>24&255]+we[i&255]+we[i>>8&255]+we[i>>16&255]+we[i>>24&255]).toLowerCase()}function Ft(n,t,e){return Math.max(t,Math.min(e,n))}function Zc(n,t){return(n%t+t)%t}function Cp(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function Pp(n,t,e){return n!==t?(e-n)/(t-n):0}function Wr(n,t,e){return(1-e)*n+e*t}function Ip(n,t,e,i){return Wr(n,t,1-Math.exp(-e*i))}function Dp(n,t=1){return t-Math.abs(Zc(n,t*2)-t)}function Lp(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Up(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Np(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Fp(n,t){return n+Math.random()*(t-n)}function Op(n){return n*(.5-Math.random())}function Bp(n){n!==void 0&&(kl=n);let t=kl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function kp(n){return n*Gr}function zp(n){return n*Zr}function Hp(n){return(n&n-1)===0&&n!==0}function Vp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Gp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Wp(n,t,e,i,r){const s=Math.cos,o=Math.sin,a=s(e/2),c=o(e/2),l=s((t+i)/2),u=o((t+i)/2),d=s((t-i)/2),h=o((t-i)/2),p=s((i-t)/2),g=o((i-t)/2);switch(r){case"XYX":n.set(a*u,c*d,c*h,a*l);break;case"YZY":n.set(c*h,a*u,c*d,a*l);break;case"ZXZ":n.set(c*d,c*h,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*p,a*l);break;case"YXY":n.set(c*p,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*p,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function lr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function De(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Sc={DEG2RAD:Gr,RAD2DEG:Zr,generateUUID:wr,clamp:Ft,euclideanModulo:Zc,mapLinear:Cp,inverseLerp:Pp,lerp:Wr,damp:Ip,pingpong:Dp,smoothstep:Lp,smootherstep:Up,randInt:Np,randFloat:Fp,randFloatSpread:Op,seededRandom:Bp,degToRad:kp,radToDeg:zp,isPowerOfTwo:Hp,ceilPowerOfTwo:Vp,floorPowerOfTwo:Gp,setQuaternionFromProperEuler:Wp,normalize:De,denormalize:lr};class yt{constructor(t=0,e=0){yt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ft(this.x,t.x,e.x),this.y=Ft(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ft(this.x,t,e),this.y=Ft(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ft(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ft(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Dt{constructor(t,e,i,r,s,o,a,c,l){Dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,c,l)}set(t,e,i,r,s,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],h=i[2],p=i[5],g=i[8],v=r[0],m=r[3],f=r[6],T=r[1],b=r[4],y=r[7],D=r[2],A=r[5],w=r[8];return s[0]=o*v+a*T+c*D,s[3]=o*m+a*b+c*A,s[6]=o*f+a*y+c*w,s[1]=l*v+u*T+d*D,s[4]=l*m+u*b+d*A,s[7]=l*f+u*y+d*w,s[2]=h*v+p*T+g*D,s[5]=h*m+p*b+g*A,s[8]=h*f+p*y+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=u*o-a*l,h=a*c-u*s,p=l*s-o*c,g=e*d+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=d*v,t[1]=(r*l-u*i)*v,t[2]=(a*i-r*o)*v,t[3]=h*v,t[4]=(u*e-r*c)*v,t[5]=(r*s-a*e)*v,t[6]=p*v,t[7]=(i*c-l*e)*v,t[8]=(o*e-i*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(zo.makeScale(t,e)),this}rotate(t){return this.premultiply(zo.makeRotation(-t)),this}translate(t,e){return this.premultiply(zo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const zo=new Dt;function Zd(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Jr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Xp(){const n=Jr("canvas");return n.style.display="block",n}const zl={};function io(n){n in zl||(zl[n]=!0,console.warn(n))}function $p(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function Yp(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function qp(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Hl=new Dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vl=new Dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jp(){const n={enabled:!0,workingColorSpace:xr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ee&&(r.r=Hn(r.r),r.g=Hn(r.g),r.b=Hn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ee&&(r.r=gr(r.r),r.g=gr(r.g),r.b=gr(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ni?po:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[xr]:{primaries:t,whitePoint:i,transfer:po,toXYZ:Hl,fromXYZ:Vl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Qe},outputColorSpaceConfig:{drawingBufferColorSpace:Qe}},[Qe]:{primaries:t,whitePoint:i,transfer:ee,toXYZ:Hl,fromXYZ:Vl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Qe}}}),n}const Yt=jp();function Hn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function gr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ji;class Kp{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{ji===void 0&&(ji=Jr("canvas")),ji.width=t.width,ji.height=t.height;const r=ji.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=ji}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Jr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Hn(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Hn(e[i]/255)*255):e[i]=Hn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Zp=0;class Jc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=wr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ho(r[o].image)):s.push(Ho(r[o]))}else s=Ho(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function Ho(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Kp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jp=0;class Ne extends Hi{constructor(t=Ne.DEFAULT_IMAGE,e=Ne.DEFAULT_MAPPING,i=Ti,r=Ti,s=En,o=Ai,a=fn,c=Gn,l=Ne.DEFAULT_ANISOTROPY,u=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=wr(),this.name="",this.source=new Jc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Bd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xa:t.x=t.x-Math.floor(t.x);break;case Ti:t.x=t.x<0?0:1;break;case $a:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xa:t.y=t.y-Math.floor(t.y);break;case Ti:t.y=t.y<0?0:1;break;case $a:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ne.DEFAULT_IMAGE=null;Ne.DEFAULT_MAPPING=Bd;Ne.DEFAULT_ANISOTROPY=1;class de{constructor(t=0,e=0,i=0,r=1){de.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const c=t.elements,l=c[0],u=c[4],d=c[8],h=c[1],p=c[5],g=c[9],v=c[2],m=c[6],f=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(l+1)/2,y=(p+1)/2,D=(f+1)/2,A=(u+h)/4,w=(d+v)/4,U=(g+m)/4;return b>y&&b>D?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=A/i,s=w/i):y>D?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=A/r,s=U/r):D<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),i=w/s,r=U/s),this.set(i,r,s,e),this}let T=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(d-v)/T,this.z=(h-u)/T,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ft(this.x,t.x,e.x),this.y=Ft(this.y,t.y,e.y),this.z=Ft(this.z,t.z,e.z),this.w=Ft(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ft(this.x,t,e),this.y=Ft(this.y,t,e),this.z=Ft(this.z,t,e),this.w=Ft(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ft(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qp extends Hi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Ne(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new Jc(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mn extends Qp{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Jd extends Ne{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=pn,this.minFilter=pn,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class tm extends Ne{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=pn,this.minFilter=pn,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Li{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3];const h=s[o+0],p=s[o+1],g=s[o+2],v=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d;return}if(a===1){t[e+0]=h,t[e+1]=p,t[e+2]=g,t[e+3]=v;return}if(d!==v||c!==h||l!==p||u!==g){let m=1-a;const f=c*h+l*p+u*g+d*v,T=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){const D=Math.sqrt(b),A=Math.atan2(D,f*T);m=Math.sin(m*A)/D,a=Math.sin(a*A)/D}const y=a*T;if(c=c*m+h*y,l=l*m+p*y,u=u*m+g*y,d=d*m+v*y,m===1-a){const D=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=D,l*=D,u*=D,d*=D}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return t[e]=a*g+u*d+c*p-l*h,t[e+1]=c*g+u*h+l*d-a*p,t[e+2]=l*g+u*p+a*h-c*d,t[e+3]=u*g-a*d-c*h-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(s/2),h=c(i/2),p=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=h*u*d+l*p*g,this._y=l*p*d-h*u*g,this._z=l*u*g+h*p*d,this._w=l*u*d-h*p*g;break;case"YXZ":this._x=h*u*d+l*p*g,this._y=l*p*d-h*u*g,this._z=l*u*g-h*p*d,this._w=l*u*d+h*p*g;break;case"ZXY":this._x=h*u*d-l*p*g,this._y=l*p*d+h*u*g,this._z=l*u*g+h*p*d,this._w=l*u*d-h*p*g;break;case"ZYX":this._x=h*u*d-l*p*g,this._y=l*p*d+h*u*g,this._z=l*u*g-h*p*d,this._w=l*u*d+h*p*g;break;case"YZX":this._x=h*u*d+l*p*g,this._y=l*p*d+h*u*g,this._z=l*u*g-h*p*d,this._w=l*u*d-h*p*g;break;case"XZY":this._x=h*u*d-l*p*g,this._y=l*p*d-h*u*g,this._z=l*u*g+h*p*d,this._w=l*u*d+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],d=e[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+l)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ft(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-e)*u)/l,h=Math.sin(e*u)/l;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,i=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Gl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Gl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*i),u=2*(a*e-s*r),d=2*(s*i-o*e);return this.x=e+c*l+o*d-a*u,this.y=i+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ft(this.x,t.x,e.x),this.y=Ft(this.y,t.y,e.y),this.z=Ft(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ft(this.x,t,e),this.y=Ft(this.y,t,e),this.z=Ft(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ft(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Vo.copy(this).projectOnVector(t),this.sub(Vo)}reflect(t){return this.sub(Vo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ft(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vo=new N,Gl=new Li;class ri{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ln):ln.fromBufferAttribute(s,o),ln.applyMatrix4(t.matrixWorld),this.expandByPoint(ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Es.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Es.copy(i.boundingBox)),Es.applyMatrix4(t.matrixWorld),this.union(Es)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ln),ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Or),ys.subVectors(this.max,Or),Ki.subVectors(t.a,Or),Zi.subVectors(t.b,Or),Ji.subVectors(t.c,Or),jn.subVectors(Zi,Ki),Kn.subVectors(Ji,Zi),mi.subVectors(Ki,Ji);let e=[0,-jn.z,jn.y,0,-Kn.z,Kn.y,0,-mi.z,mi.y,jn.z,0,-jn.x,Kn.z,0,-Kn.x,mi.z,0,-mi.x,-jn.y,jn.x,0,-Kn.y,Kn.x,0,-mi.y,mi.x,0];return!Go(e,Ki,Zi,Ji,ys)||(e=[1,0,0,0,1,0,0,0,1],!Go(e,Ki,Zi,Ji,ys))?!1:(Ms.crossVectors(jn,Kn),e=[Ms.x,Ms.y,Ms.z],Go(e,Ki,Zi,Ji,ys))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(An),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const An=[new N,new N,new N,new N,new N,new N,new N,new N],ln=new N,Es=new ri,Ki=new N,Zi=new N,Ji=new N,jn=new N,Kn=new N,mi=new N,Or=new N,ys=new N,Ms=new N,gi=new N;function Go(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){gi.fromArray(n,s);const a=r.x*Math.abs(gi.x)+r.y*Math.abs(gi.y)+r.z*Math.abs(gi.z),c=t.dot(gi),l=e.dot(gi),u=i.dot(gi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const em=new ri,Br=new N,Wo=new N;class Qc{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):em.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Br.subVectors(t,this.center);const e=Br.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Br,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Wo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Br.copy(t.center).add(Wo)),this.expandByPoint(Br.copy(t.center).sub(Wo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wn=new N,Xo=new N,bs=new N,Zn=new N,$o=new N,Ts=new N,Yo=new N;class Qd{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(wn.copy(this.origin).addScaledVector(this.direction,e),wn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){Xo.copy(t).add(e).multiplyScalar(.5),bs.copy(e).sub(t).normalize(),Zn.copy(this.origin).sub(Xo);const s=t.distanceTo(e)*.5,o=-this.direction.dot(bs),a=Zn.dot(this.direction),c=-Zn.dot(bs),l=Zn.lengthSq(),u=Math.abs(1-o*o);let d,h,p,g;if(u>0)if(d=o*c-a,h=o*a-c,g=s*u,d>=0)if(h>=-g)if(h<=g){const v=1/u;d*=v,h*=v,p=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*c)+l;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-c),s),p=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-s,-c),s),p=h*(h+2*c)+l):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-c),s),p=-d*d+h*(h+2*c)+l);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Xo).addScaledVector(bs,h),p}intersectSphere(t,e){wn.subVectors(t.center,this.origin);const i=wn.dot(this.direction),r=wn.dot(wn)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(i=(t.min.x-h.x)*l,r=(t.max.x-h.x)*l):(i=(t.max.x-h.x)*l,r=(t.min.x-h.x)*l),u>=0?(s=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(t.min.z-h.z)*d,c=(t.max.z-h.z)*d):(a=(t.max.z-h.z)*d,c=(t.min.z-h.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,wn)!==null}intersectTriangle(t,e,i,r,s){$o.subVectors(e,t),Ts.subVectors(i,t),Yo.crossVectors($o,Ts);let o=this.direction.dot(Yo),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zn.subVectors(this.origin,t);const c=a*this.direction.dot(Ts.crossVectors(Zn,Ts));if(c<0)return null;const l=a*this.direction.dot($o.cross(Zn));if(l<0||c+l>o)return null;const u=-a*Zn.dot(Yo);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class he{constructor(t,e,i,r,s,o,a,c,l,u,d,h,p,g,v,m){he.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,c,l,u,d,h,p,g,v,m)}set(t,e,i,r,s,o,a,c,l,u,d,h,p,g,v,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new he().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/Qi.setFromMatrixColumn(t,0).length(),s=1/Qi.setFromMatrixColumn(t,1).length(),o=1/Qi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const h=o*u,p=o*d,g=a*u,v=a*d;e[0]=c*u,e[4]=-c*d,e[8]=l,e[1]=p+g*l,e[5]=h-v*l,e[9]=-a*c,e[2]=v-h*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){const h=c*u,p=c*d,g=l*u,v=l*d;e[0]=h+v*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=p*a-g,e[6]=v+h*a,e[10]=o*c}else if(t.order==="ZXY"){const h=c*u,p=c*d,g=l*u,v=l*d;e[0]=h-v*a,e[4]=-o*d,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*u,e[9]=v-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const h=o*u,p=o*d,g=a*u,v=a*d;e[0]=c*u,e[4]=g*l-p,e[8]=h*l+v,e[1]=c*d,e[5]=v*l+h,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const h=o*c,p=o*l,g=a*c,v=a*l;e[0]=c*u,e[4]=v-h*d,e[8]=g*d+p,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=p*d+g,e[10]=h-v*d}else if(t.order==="XZY"){const h=o*c,p=o*l,g=a*c,v=a*l;e[0]=c*u,e[4]=-d,e[8]=l*u,e[1]=h*d+v,e[5]=o*u,e[9]=p*d-g,e[2]=g*d-p,e[6]=a*u,e[10]=v*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(nm,t,im)}lookAt(t,e,i){const r=this.elements;return We.subVectors(t,e),We.lengthSq()===0&&(We.z=1),We.normalize(),Jn.crossVectors(i,We),Jn.lengthSq()===0&&(Math.abs(i.z)===1?We.x+=1e-4:We.z+=1e-4,We.normalize(),Jn.crossVectors(i,We)),Jn.normalize(),As.crossVectors(We,Jn),r[0]=Jn.x,r[4]=As.x,r[8]=We.x,r[1]=Jn.y,r[5]=As.y,r[9]=We.y,r[2]=Jn.z,r[6]=As.z,r[10]=We.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],h=i[9],p=i[13],g=i[2],v=i[6],m=i[10],f=i[14],T=i[3],b=i[7],y=i[11],D=i[15],A=r[0],w=r[4],U=r[8],E=r[12],S=r[1],R=r[5],F=r[9],B=r[13],X=r[2],Y=r[6],W=r[10],G=r[14],k=r[3],et=r[7],st=r[11],vt=r[15];return s[0]=o*A+a*S+c*X+l*k,s[4]=o*w+a*R+c*Y+l*et,s[8]=o*U+a*F+c*W+l*st,s[12]=o*E+a*B+c*G+l*vt,s[1]=u*A+d*S+h*X+p*k,s[5]=u*w+d*R+h*Y+p*et,s[9]=u*U+d*F+h*W+p*st,s[13]=u*E+d*B+h*G+p*vt,s[2]=g*A+v*S+m*X+f*k,s[6]=g*w+v*R+m*Y+f*et,s[10]=g*U+v*F+m*W+f*st,s[14]=g*E+v*B+m*G+f*vt,s[3]=T*A+b*S+y*X+D*k,s[7]=T*w+b*R+y*Y+D*et,s[11]=T*U+b*F+y*W+D*st,s[15]=T*E+b*B+y*G+D*vt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],d=t[6],h=t[10],p=t[14],g=t[3],v=t[7],m=t[11],f=t[15];return g*(+s*c*d-r*l*d-s*a*h+i*l*h+r*a*p-i*c*p)+v*(+e*c*p-e*l*h+s*o*h-r*o*p+r*l*u-s*c*u)+m*(+e*l*d-e*a*p-s*o*d+i*o*p+s*a*u-i*l*u)+f*(-r*a*u-e*c*d+e*a*h+r*o*d-i*o*h+i*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=t[9],h=t[10],p=t[11],g=t[12],v=t[13],m=t[14],f=t[15],T=d*m*l-v*h*l+v*c*p-a*m*p-d*c*f+a*h*f,b=g*h*l-u*m*l-g*c*p+o*m*p+u*c*f-o*h*f,y=u*v*l-g*d*l+g*a*p-o*v*p-u*a*f+o*d*f,D=g*d*c-u*v*c-g*a*h+o*v*h+u*a*m-o*d*m,A=e*T+i*b+r*y+s*D;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return t[0]=T*w,t[1]=(v*h*s-d*m*s-v*r*p+i*m*p+d*r*f-i*h*f)*w,t[2]=(a*m*s-v*c*s+v*r*l-i*m*l-a*r*f+i*c*f)*w,t[3]=(d*c*s-a*h*s-d*r*l+i*h*l+a*r*p-i*c*p)*w,t[4]=b*w,t[5]=(u*m*s-g*h*s+g*r*p-e*m*p-u*r*f+e*h*f)*w,t[6]=(g*c*s-o*m*s-g*r*l+e*m*l+o*r*f-e*c*f)*w,t[7]=(o*h*s-u*c*s+u*r*l-e*h*l-o*r*p+e*c*p)*w,t[8]=y*w,t[9]=(g*d*s-u*v*s-g*i*p+e*v*p+u*i*f-e*d*f)*w,t[10]=(o*v*s-g*a*s+g*i*l-e*v*l-o*i*f+e*a*f)*w,t[11]=(u*a*s-o*d*s-u*i*l+e*d*l+o*i*p-e*a*p)*w,t[12]=D*w,t[13]=(u*v*r-g*d*r+g*i*h-e*v*h-u*i*m+e*d*m)*w,t[14]=(g*a*r-o*v*r-g*i*c+e*v*c+o*i*m-e*a*m)*w,t[15]=(o*d*r-u*a*r+u*i*c-e*d*c-o*i*h+e*a*h)*w,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,c=t.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,u=o+o,d=a+a,h=s*l,p=s*u,g=s*d,v=o*u,m=o*d,f=a*d,T=c*l,b=c*u,y=c*d,D=i.x,A=i.y,w=i.z;return r[0]=(1-(v+f))*D,r[1]=(p+y)*D,r[2]=(g-b)*D,r[3]=0,r[4]=(p-y)*A,r[5]=(1-(h+f))*A,r[6]=(m+T)*A,r[7]=0,r[8]=(g+b)*w,r[9]=(m-T)*w,r[10]=(1-(h+v))*w,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=Qi.set(r[0],r[1],r[2]).length();const o=Qi.set(r[4],r[5],r[6]).length(),a=Qi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],un.copy(this);const l=1/s,u=1/o,d=1/a;return un.elements[0]*=l,un.elements[1]*=l,un.elements[2]*=l,un.elements[4]*=u,un.elements[5]*=u,un.elements[6]*=u,un.elements[8]*=d,un.elements[9]*=d,un.elements[10]*=d,e.setFromRotationMatrix(un),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=On){const c=this.elements,l=2*s/(e-t),u=2*s/(i-r),d=(e+t)/(e-t),h=(i+r)/(i-r);let p,g;if(a===On)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===mo)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=On){const c=this.elements,l=1/(e-t),u=1/(i-r),d=1/(o-s),h=(e+t)*l,p=(i+r)*u;let g,v;if(a===On)g=(o+s)*d,v=-2*d;else if(a===mo)g=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Qi=new N,un=new he,nm=new N(0,0,0),im=new N(1,1,1),Jn=new N,As=new N,We=new N,Wl=new he,Xl=new Li;class bn{constructor(t=0,e=0,i=0,r=bn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],d=r[2],h=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(Ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ft(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ft(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Wl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xl.setFromEuler(this),this.setFromQuaternion(Xl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bn.DEFAULT_ORDER="XYZ";class th{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let rm=0;const $l=new N,tr=new Li,Rn=new he,ws=new N,kr=new N,sm=new N,om=new Li,Yl=new N(1,0,0),ql=new N(0,1,0),jl=new N(0,0,1),Kl={type:"added"},am={type:"removed"},er={type:"childadded",child:null},qo={type:"childremoved",child:null};class Pe extends Hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rm++}),this.uuid=wr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pe.DEFAULT_UP.clone();const t=new N,e=new bn,i=new Li,r=new N(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new he},normalMatrix:{value:new Dt}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=Pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new th,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return tr.setFromAxisAngle(t,e),this.quaternion.multiply(tr),this}rotateOnWorldAxis(t,e){return tr.setFromAxisAngle(t,e),this.quaternion.premultiply(tr),this}rotateX(t){return this.rotateOnAxis(Yl,t)}rotateY(t){return this.rotateOnAxis(ql,t)}rotateZ(t){return this.rotateOnAxis(jl,t)}translateOnAxis(t,e){return $l.copy(t).applyQuaternion(this.quaternion),this.position.add($l.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yl,t)}translateY(t){return this.translateOnAxis(ql,t)}translateZ(t){return this.translateOnAxis(jl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ws.copy(t):ws.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt(kr,ws,this.up):Rn.lookAt(ws,kr,this.up),this.quaternion.setFromRotationMatrix(Rn),r&&(Rn.extractRotation(r.matrixWorld),tr.setFromRotationMatrix(Rn),this.quaternion.premultiply(tr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Kl),er.child=t,this.dispatchEvent(er),er.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(am),qo.child=t,this.dispatchEvent(qo),qo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Rn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Rn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Kl),er.child=t,this.dispatchEvent(er),er.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,t,sm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,om,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];s(t.shapes,d)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),d=o(t.shapes),h=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Pe.DEFAULT_UP=new N(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const dn=new N,Cn=new N,jo=new N,Pn=new N,nr=new N,ir=new N,Zl=new N,Ko=new N,Zo=new N,Jo=new N,Qo=new de,ta=new de,ea=new de;class hn{constructor(t=new N,e=new N,i=new N){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),dn.subVectors(t,e),r.cross(dn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){dn.subVectors(r,e),Cn.subVectors(i,e),jo.subVectors(t,e);const o=dn.dot(dn),a=dn.dot(Cn),c=dn.dot(jo),l=Cn.dot(Cn),u=Cn.dot(jo),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(l*c-a*u)*h,g=(o*u-a*c)*h;return s.set(1-p-g,g,p)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Pn)===null?!1:Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getInterpolation(t,e,i,r,s,o,a,c){return this.getBarycoord(t,e,i,r,Pn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Pn.x),c.addScaledVector(o,Pn.y),c.addScaledVector(a,Pn.z),c)}static getInterpolatedAttribute(t,e,i,r,s,o){return Qo.setScalar(0),ta.setScalar(0),ea.setScalar(0),Qo.fromBufferAttribute(t,e),ta.fromBufferAttribute(t,i),ea.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(Qo,s.x),o.addScaledVector(ta,s.y),o.addScaledVector(ea,s.z),o}static isFrontFacing(t,e,i,r){return dn.subVectors(i,e),Cn.subVectors(t,e),dn.cross(Cn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return dn.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),dn.cross(Cn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return hn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return hn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return hn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return hn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return hn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;nr.subVectors(r,i),ir.subVectors(s,i),Ko.subVectors(t,i);const c=nr.dot(Ko),l=ir.dot(Ko);if(c<=0&&l<=0)return e.copy(i);Zo.subVectors(t,r);const u=nr.dot(Zo),d=ir.dot(Zo);if(u>=0&&d<=u)return e.copy(r);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(i).addScaledVector(nr,o);Jo.subVectors(t,s);const p=nr.dot(Jo),g=ir.dot(Jo);if(g>=0&&p<=g)return e.copy(s);const v=p*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(i).addScaledVector(ir,a);const m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return Zl.subVectors(s,r),a=(d-u)/(d-u+(p-g)),e.copy(r).addScaledVector(Zl,a);const f=1/(m+v+h);return o=v*f,a=h*f,e.copy(i).addScaledVector(nr,o).addScaledVector(ir,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const eh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},Rs={h:0,s:0,l:0};function na(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Bt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Yt.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=Yt.workingColorSpace){if(t=Zc(t,1),e=Ft(e,0,1),i=Ft(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=na(o,s,t+1/3),this.g=na(o,s,t),this.b=na(o,s,t-1/3)}return Yt.toWorkingColorSpace(this,r),this}setStyle(t,e=Qe){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Qe){const i=eh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hn(t.r),this.g=Hn(t.g),this.b=Hn(t.b),this}copyLinearToSRGB(t){return this.r=gr(t.r),this.g=gr(t.g),this.b=gr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Qe){return Yt.fromWorkingColorSpace(Re.copy(this),t),Math.round(Ft(Re.r*255,0,255))*65536+Math.round(Ft(Re.g*255,0,255))*256+Math.round(Ft(Re.b*255,0,255))}getHexString(t=Qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.fromWorkingColorSpace(Re.copy(this),e);const i=Re.r,r=Re.g,s=Re.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(Re.copy(this),e),t.r=Re.r,t.g=Re.g,t.b=Re.b,t}getStyle(t=Qe){Yt.fromWorkingColorSpace(Re.copy(this),t);const e=Re.r,i=Re.g,r=Re.b;return t!==Qe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Qn),this.setHSL(Qn.h+t,Qn.s+e,Qn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Qn),t.getHSL(Rs);const i=Wr(Qn.h,Rs.h,e),r=Wr(Qn.s,Rs.s,e),s=Wr(Qn.l,Rs.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Re=new Bt;Bt.NAMES=eh;let cm=0;class ss extends Hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cm++}),this.uuid=wr(),this.name="",this.type="Material",this.blending=mr,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ua,this.blendDst=Na,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=_r,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==mr&&(i.blending=this.blending),this.side!==si&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ua&&(i.blendSrc=this.blendSrc),this.blendDst!==Na&&(i.blendDst=this.blendDst),this.blendEquation!==yi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==_r&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class tl extends ss{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=Od,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ge=new N,Cs=new yt;let lm=0;class yn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ol,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Cs.fromBufferAttribute(this,e),Cs.applyMatrix3(t),this.setXY(e,Cs.x,Cs.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=lr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=De(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=lr(e,this.array)),e}setX(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=lr(e,this.array)),e}setY(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=lr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=lr(e,this.array)),e}setW(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),i=De(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),i=De(i,this.array),r=De(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),i=De(i,this.array),r=De(r,this.array),s=De(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ol&&(t.usage=this.usage),t}}class nh extends yn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class ih extends yn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class en extends yn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let um=0;const Je=new he,ia=new Pe,rr=new N,Xe=new ri,zr=new ri,xe=new N;class qn extends Hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:um++}),this.uuid=wr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Zd(t)?ih:nh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Dt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Je.makeRotationFromQuaternion(t),this.applyMatrix4(Je),this}rotateX(t){return Je.makeRotationX(t),this.applyMatrix4(Je),this}rotateY(t){return Je.makeRotationY(t),this.applyMatrix4(Je),this}rotateZ(t){return Je.makeRotationZ(t),this.applyMatrix4(Je),this}translate(t,e,i){return Je.makeTranslation(t,e,i),this.applyMatrix4(Je),this}scale(t,e,i){return Je.makeScale(t,e,i),this.applyMatrix4(Je),this}lookAt(t){return ia.lookAt(t),ia.updateMatrix(),this.applyMatrix4(ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rr).negate(),this.translate(rr.x,rr.y,rr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new en(i,3))}else{const i=Math.min(t.length,e.count);for(let r=0;r<i;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ri);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];Xe.setFromBufferAttribute(s),this.morphTargetsRelative?(xe.addVectors(this.boundingBox.min,Xe.min),this.boundingBox.expandByPoint(xe),xe.addVectors(this.boundingBox.max,Xe.max),this.boundingBox.expandByPoint(xe)):(this.boundingBox.expandByPoint(Xe.min),this.boundingBox.expandByPoint(Xe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qc);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const i=this.boundingSphere.center;if(Xe.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];zr.setFromBufferAttribute(a),this.morphTargetsRelative?(xe.addVectors(Xe.min,zr.min),Xe.expandByPoint(xe),xe.addVectors(Xe.max,zr.max),Xe.expandByPoint(xe)):(Xe.expandByPoint(zr.min),Xe.expandByPoint(zr.max))}Xe.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)xe.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(xe));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)xe.fromBufferAttribute(a,l),c&&(rr.fromBufferAttribute(t,l),xe.add(rr)),r=Math.max(r,i.distanceToSquared(xe))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let U=0;U<i.count;U++)a[U]=new N,c[U]=new N;const l=new N,u=new N,d=new N,h=new yt,p=new yt,g=new yt,v=new N,m=new N;function f(U,E,S){l.fromBufferAttribute(i,U),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,S),h.fromBufferAttribute(s,U),p.fromBufferAttribute(s,E),g.fromBufferAttribute(s,S),u.sub(l),d.sub(l),p.sub(h),g.sub(h);const R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(R),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(R),a[U].add(v),a[E].add(v),a[S].add(v),c[U].add(m),c[E].add(m),c[S].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let U=0,E=T.length;U<E;++U){const S=T[U],R=S.start,F=S.count;for(let B=R,X=R+F;B<X;B+=3)f(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const b=new N,y=new N,D=new N,A=new N;function w(U){D.fromBufferAttribute(r,U),A.copy(D);const E=a[U];b.copy(E),b.sub(D.multiplyScalar(D.dot(E))).normalize(),y.crossVectors(A,E);const R=y.dot(c[U])<0?-1:1;o.setXYZW(U,b.x,b.y,b.z,R)}for(let U=0,E=T.length;U<E;++U){const S=T[U],R=S.start,F=S.count;for(let B=R,X=R+F;B<X;B+=3)w(t.getX(B+0)),w(t.getX(B+1)),w(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new yn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new N,s=new N,o=new N,a=new N,c=new N,l=new N,u=new N,d=new N;if(t)for(let h=0,p=t.count;h<p;h+=3){const g=t.getX(h+0),v=t.getX(h+1),m=t.getX(h+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,p=e.count;h<p;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)xe.fromBufferAttribute(t,e),xe.normalize(),t.setXYZ(e,xe.x,xe.y,xe.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u);let p=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?p=c[v]*a.data.stride+a.offset:p=c[v]*u;for(let f=0;f<u;f++)h[g++]=l[p++]}return new yn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new qn,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=t(c,i);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){const h=l[u],p=t(h,i);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const p=l[d];u.push(p.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const r=t.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(e))}const s=t.morphAttributes;for(const l in s){const u=[],d=s[l];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jl=new he,_i=new Qd,Ps=new Qc,Ql=new N,Is=new N,Ds=new N,Ls=new N,ra=new N,Us=new N,tu=new N,Ns=new N;class He extends Pe{constructor(t=new qn,e=new tl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Us.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],d=s[c];u!==0&&(ra.fromBufferAttribute(d,t),o?Us.addScaledVector(ra,u):Us.addScaledVector(ra.sub(e),u))}e.add(Us)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ps.copy(i.boundingSphere),Ps.applyMatrix4(s),_i.copy(t.ray).recast(t.near),!(Ps.containsPoint(_i.origin)===!1&&(_i.intersectSphere(Ps,Ql)===null||_i.origin.distanceToSquared(Ql)>(t.far-t.near)**2))&&(Jl.copy(s).invert(),_i.copy(t.ray).applyMatrix4(Jl),!(i.boundingBox!==null&&_i.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,_i)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const m=h[g],f=o[m.materialIndex],T=Math.max(m.start,p.start),b=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=T,D=b;y<D;y+=3){const A=a.getX(y),w=a.getX(y+1),U=a.getX(y+2);r=Fs(this,f,t,i,l,u,d,A,w,U),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const T=a.getX(m),b=a.getX(m+1),y=a.getX(m+2);r=Fs(this,o,t,i,l,u,d,T,b,y),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const m=h[g],f=o[m.materialIndex],T=Math.max(m.start,p.start),b=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let y=T,D=b;y<D;y+=3){const A=y,w=y+1,U=y+2;r=Fs(this,f,t,i,l,u,d,A,w,U),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const T=m,b=m+1,y=m+2;r=Fs(this,o,t,i,l,u,d,T,b,y),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function dm(n,t,e,i,r,s,o,a){let c;if(t.side===Ve?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,t.side===si,a),c===null)return null;Ns.copy(a),Ns.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Ns);return l<e.near||l>e.far?null:{distance:l,point:Ns.clone(),object:n}}function Fs(n,t,e,i,r,s,o,a,c,l){n.getVertexPosition(a,Is),n.getVertexPosition(c,Ds),n.getVertexPosition(l,Ls);const u=dm(n,t,e,i,Is,Ds,Ls,tu);if(u){const d=new N;hn.getBarycoord(tu,Is,Ds,Ls,d),r&&(u.uv=hn.getInterpolatedAttribute(r,a,c,l,d,new yt)),s&&(u.uv1=hn.getInterpolatedAttribute(s,a,c,l,d,new yt)),o&&(u.normal=hn.getInterpolatedAttribute(o,a,c,l,d,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new N,materialIndex:0};hn.getNormal(Is,Ds,Ls,h.normal),u.face=h,u.barycoord=d}return u}class Ui extends qn{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],d=[];let h=0,p=0;g("z","y","x",-1,-1,i,e,t,o,s,0),g("z","y","x",1,-1,i,e,-t,o,s,1),g("x","z","y",1,1,t,i,e,r,o,2),g("x","z","y",1,-1,t,i,-e,r,o,3),g("x","y","z",1,-1,t,e,i,r,s,4),g("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new en(l,3)),this.setAttribute("normal",new en(u,3)),this.setAttribute("uv",new en(d,2));function g(v,m,f,T,b,y,D,A,w,U,E){const S=y/w,R=D/U,F=y/2,B=D/2,X=A/2,Y=w+1,W=U+1;let G=0,k=0;const et=new N;for(let st=0;st<W;st++){const vt=st*R-B;for(let Nt=0;Nt<Y;Nt++){const Kt=Nt*S-F;et[v]=Kt*T,et[m]=vt*b,et[f]=X,l.push(et.x,et.y,et.z),et[v]=0,et[m]=0,et[f]=A>0?1:-1,u.push(et.x,et.y,et.z),d.push(Nt/w),d.push(1-st/U),G+=1}}for(let st=0;st<U;st++)for(let vt=0;vt<w;vt++){const Nt=h+vt+Y*st,Kt=h+vt+Y*(st+1),$=h+(vt+1)+Y*(st+1),tt=h+(vt+1)+Y*st;c.push(Nt,Kt,tt),c.push(Kt,$,tt),k+=6}a.addGroup(p,k,E),p+=k,h+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ui(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Er(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Le(n){const t={};for(let e=0;e<n.length;e++){const i=Er(n[e]);for(const r in i)t[r]=i[r]}return t}function hm(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function rh(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}const go={clone:Er,merge:Le};var fm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ue extends ss{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fm,this.fragmentShader=pm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Er(t.uniforms),this.uniformsGroups=hm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class sh extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=On}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ti=new N,eu=new yt,nu=new yt;class tn extends sh{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Zr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Gr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zr*2*Math.atan(Math.tan(Gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ti.x,ti.y).multiplyScalar(-t/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ti.x,ti.y).multiplyScalar(-t/ti.z)}getViewSize(t,e){return this.getViewBounds(t,eu,nu),e.subVectors(nu,eu)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Gr*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const sr=-90,or=1;class mm extends Pe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new tn(sr,or,t,e);r.layers=this.layers,this.add(r);const s=new tn(sr,or,t,e);s.layers=this.layers,this.add(s);const o=new tn(sr,or,t,e);o.layers=this.layers,this.add(o);const a=new tn(sr,or,t,e);a.layers=this.layers,this.add(a);const c=new tn(sr,or,t,e);c.layers=this.layers,this.add(c);const l=new tn(sr,or,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===On)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===mo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,c),t.setRenderTarget(i,4,r),t.render(e,l),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,r),t.render(e,u),t.setRenderTarget(d,h,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class oh extends Ne{constructor(t=[],e=vr,i,r,s,o,a,c,l,u){super(t,e,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class gm extends mn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new oh(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:En}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ui(5,5,5),s=new Ue({name:"CubemapFromEquirect",uniforms:Er(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ve,blending:kn});s.uniforms.tEquirect.value=e;const o=new He(r,s),a=e.minFilter;return e.minFilter===Ai&&(e.minFilter=En),new mm(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}class Os extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _m={type:"move"};class sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Os,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Os,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Os,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,i),f=this._getHandJoint(l,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&h>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_m)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Os;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class vm extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const oa=new N,Sm=new N,xm=new Dt;class ei{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=oa.subVectors(i,e).cross(Sm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(oa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||xm.getNormalMatrix(t),r=this.coplanarPoint(oa).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vi=new Qc,Bs=new N;class el{constructor(t=new ei,e=new ei,i=new ei,r=new ei,s=new ei,o=new ei){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=On){const i=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],d=r[6],h=r[7],p=r[8],g=r[9],v=r[10],m=r[11],f=r[12],T=r[13],b=r[14],y=r[15];if(i[0].setComponents(c-s,h-l,m-p,y-f).normalize(),i[1].setComponents(c+s,h+l,m+p,y+f).normalize(),i[2].setComponents(c+o,h+u,m+g,y+T).normalize(),i[3].setComponents(c-o,h-u,m-g,y-T).normalize(),i[4].setComponents(c-a,h-d,m-v,y-b).normalize(),e===On)i[5].setComponents(c+a,h+d,m+v,y+b).normalize();else if(e===mo)i[5].setComponents(a,d,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(t){return vi.center.set(0,0,0),vi.radius=.7071067811865476,vi.applyMatrix4(t.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Bs.x=r.normal.x>0?t.max.x:t.min.x,Bs.y=r.normal.y>0?t.max.y:t.min.y,Bs.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Bs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ah extends Ne{constructor(t,e,i=Di,r,s,o,a=pn,c=pn,l,u=jr){if(u!==jr&&u!==Kr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Jc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Ao extends qn{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=t/a,h=e/c,p=[],g=[],v=[],m=[];for(let f=0;f<u;f++){const T=f*h-o;for(let b=0;b<l;b++){const y=b*d-s;g.push(y,-T,0),v.push(0,0,1),m.push(b/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let T=0;T<a;T++){const b=T+l*f,y=T+l*(f+1),D=T+1+l*(f+1),A=T+1+l*f;p.push(b,y,A),p.push(y,D,A)}this.setIndex(p),this.setAttribute("position",new en(g,3)),this.setAttribute("normal",new en(v,3)),this.setAttribute("uv",new en(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ao(t.width,t.height,t.widthSegments,t.heightSegments)}}class nl extends qn{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],d=new N,h=new N,p=[],g=[],v=[],m=[];for(let f=0;f<=i;f++){const T=[],b=f/i;let y=0;f===0&&o===0?y=.5/e:f===i&&c===Math.PI&&(y=-.5/e);for(let D=0;D<=e;D++){const A=D/e;d.x=-t*Math.cos(r+A*s)*Math.sin(o+b*a),d.y=t*Math.cos(o+b*a),d.z=t*Math.sin(r+A*s)*Math.sin(o+b*a),g.push(d.x,d.y,d.z),h.copy(d).normalize(),v.push(h.x,h.y,h.z),m.push(A+y,1-b),T.push(l++)}u.push(T)}for(let f=0;f<i;f++)for(let T=0;T<e;T++){const b=u[f][T+1],y=u[f][T],D=u[f+1][T],A=u[f+1][T+1];(f!==0||o>0)&&p.push(b,y,A),(f!==i-1||c<Math.PI)&&p.push(y,D,A)}this.setIndex(p),this.setAttribute("position",new en(g,3)),this.setAttribute("normal",new en(v,3)),this.setAttribute("uv",new en(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nl(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class aa extends ss{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jd,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Em extends ss{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ym extends ss{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const iu={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Mm{constructor(t,e,i){const r=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){const d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=l.length;d<h;d+=2){const p=l[d],g=l[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const bm=new Mm;class il{constructor(t){this.manager=t!==void 0?t:bm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(r,s){i.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}il.DEFAULT_MATERIAL_NAME="__DEFAULT";class Tm extends il{constructor(t){super(t)}load(t,e,i,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=iu.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=Jr("img");function c(){u(),iu.add(t,this),e&&e(this),s.manager.itemEnd(t)}function l(d){u(),r&&r(d),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class Am extends il{constructor(t){super(t)}load(t,e,i,r){const s=new Ne,o=new Tm(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},i,r),s}}class ch extends Pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const ca=new he,ru=new N,su=new N;class wm{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new yt(512,512),this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new el,this._frameExtents=new yt(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;ru.setFromMatrixPosition(t.matrixWorld),e.position.copy(ru),su.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(su),e.updateMatrixWorld(),ca.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ca),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ca)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class rl extends sh{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Rm extends wm{constructor(){super(new rl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cm extends ch{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new Rm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Pm extends ch{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Im extends tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class Dm{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ou(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=ou();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function ou(){return performance.now()}class au{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Ft(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Ft(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Lm extends Hi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function cu(n,t,e,i){const r=Um(i);switch(e){case Vd:return n*t;case Wd:return n*t;case Xd:return n*t*2;case $d:return n*t/r.components*r.byteLength;case qc:return n*t/r.components*r.byteLength;case Yd:return n*t*2/r.components*r.byteLength;case jc:return n*t*2/r.components*r.byteLength;case Gd:return n*t*3/r.components*r.byteLength;case fn:return n*t*4/r.components*r.byteLength;case Kc:return n*t*4/r.components*r.byteLength;case Js:case Qs:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case to:case eo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case qa:case Ka:return Math.max(n,16)*Math.max(t,8)/4;case Ya:case ja:return Math.max(n,8)*Math.max(t,8)/2;case Za:case Ja:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Qa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case tc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ec:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case nc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ic:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case rc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case sc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case oc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case ac:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case cc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case lc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case uc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case dc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case hc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case fc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case no:case pc:case mc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case qd:case gc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case _c:case vc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Um(n){switch(n){case Gn:case kd:return{byteLength:1,components:1};case Yr:case zd:case zn:return{byteLength:2,components:1};case $c:case Yc:return{byteLength:2,components:4};case Di:case Xc:case Fn:return{byteLength:4,components:1};case Hd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function lh(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function Nm(n){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,d=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){const u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<d.length;p++){const g=d[h],v=d[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,d[h]=v)}d.length=h+1;for(let p=0,g=d.length;p<g;p++){const v=d[p];n.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var Fm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Om=`#ifdef USE_ALPHAHASH
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
#endif`,Bm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,km=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vm=`#ifdef USE_AOMAP
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
#endif`,Gm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wm=`#ifdef USE_BATCHING
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
#endif`,Xm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$m=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ym=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jm=`#ifdef USE_IRIDESCENCE
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
#endif`,Km=`#ifdef USE_BUMPMAP
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
#endif`,Zm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Jm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ng=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ig=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,sg=`#define PI 3.141592653589793
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
} // validated`,og=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ag=`vec3 transformedNormal = objectNormal;
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
#endif`,cg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ug=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hg="gl_FragColor = linearToOutputTexel( gl_FragColor );",fg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pg=`#ifdef USE_ENVMAP
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
#endif`,mg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gg=`#ifdef USE_ENVMAP
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
#endif`,_g=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vg=`#ifdef USE_ENVMAP
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
#endif`,Sg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Eg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mg=`#ifdef USE_GRADIENTMAP
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
}`,bg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ag=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wg=`uniform bool receiveShadow;
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
#endif`,Rg=`#ifdef USE_ENVMAP
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
#endif`,Cg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ig=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lg=`PhysicalMaterial material;
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
#endif`,Ug=`struct PhysicalMaterial {
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
}`,Ng=`
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
#endif`,Fg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Og=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xg=`#if defined( USE_POINTS_UV )
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
#endif`,$g=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zg=`#ifdef USE_MORPHTARGETS
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
#endif`,Jg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,t_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,e_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,i_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,r_=`#ifdef USE_NORMALMAP
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
#endif`,s_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,o_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,a_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,c_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,l_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,u_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,d_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,h_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,f_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,p_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,m_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,g_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,__=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,v_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,S_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,x_=`float getShadowMask() {
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
}`,E_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,y_=`#ifdef USE_SKINNING
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
#endif`,M_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,b_=`#ifdef USE_SKINNING
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
#endif`,T_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,A_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,w_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,R_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,C_=`#ifdef USE_TRANSMISSION
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
#endif`,P_=`#ifdef USE_TRANSMISSION
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
#endif`,I_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,D_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const N_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,F_=`uniform sampler2D t2D;
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
}`,O_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,k_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H_=`#include <common>
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
}`,V_=`#if DEPTH_PACKING == 3200
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
}`,G_=`#define DISTANCE
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
}`,W_=`#define DISTANCE
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
}`,X_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y_=`uniform float scale;
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
}`,q_=`uniform vec3 diffuse;
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
}`,j_=`#include <common>
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
}`,K_=`uniform vec3 diffuse;
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
}`,Z_=`#define LAMBERT
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
}`,J_=`#define LAMBERT
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
}`,Q_=`#define MATCAP
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
}`,tv=`#define MATCAP
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
}`,ev=`#define NORMAL
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
}`,nv=`#define NORMAL
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
}`,iv=`#define PHONG
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
}`,rv=`#define PHONG
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
}`,sv=`#define STANDARD
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
}`,ov=`#define STANDARD
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
}`,av=`#define TOON
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
}`,cv=`#define TOON
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
}`,lv=`uniform float size;
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
}`,uv=`uniform vec3 diffuse;
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
}`,dv=`#include <common>
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
}`,hv=`uniform vec3 color;
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
}`,fv=`uniform float rotation;
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
}`,pv=`uniform vec3 diffuse;
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
}`,Ut={alphahash_fragment:Fm,alphahash_pars_fragment:Om,alphamap_fragment:Bm,alphamap_pars_fragment:km,alphatest_fragment:zm,alphatest_pars_fragment:Hm,aomap_fragment:Vm,aomap_pars_fragment:Gm,batching_pars_vertex:Wm,batching_vertex:Xm,begin_vertex:$m,beginnormal_vertex:Ym,bsdfs:qm,iridescence_fragment:jm,bumpmap_pars_fragment:Km,clipping_planes_fragment:Zm,clipping_planes_pars_fragment:Jm,clipping_planes_pars_vertex:Qm,clipping_planes_vertex:tg,color_fragment:eg,color_pars_fragment:ng,color_pars_vertex:ig,color_vertex:rg,common:sg,cube_uv_reflection_fragment:og,defaultnormal_vertex:ag,displacementmap_pars_vertex:cg,displacementmap_vertex:lg,emissivemap_fragment:ug,emissivemap_pars_fragment:dg,colorspace_fragment:hg,colorspace_pars_fragment:fg,envmap_fragment:pg,envmap_common_pars_fragment:mg,envmap_pars_fragment:gg,envmap_pars_vertex:_g,envmap_physical_pars_fragment:Rg,envmap_vertex:vg,fog_vertex:Sg,fog_pars_vertex:xg,fog_fragment:Eg,fog_pars_fragment:yg,gradientmap_pars_fragment:Mg,lightmap_pars_fragment:bg,lights_lambert_fragment:Tg,lights_lambert_pars_fragment:Ag,lights_pars_begin:wg,lights_toon_fragment:Cg,lights_toon_pars_fragment:Pg,lights_phong_fragment:Ig,lights_phong_pars_fragment:Dg,lights_physical_fragment:Lg,lights_physical_pars_fragment:Ug,lights_fragment_begin:Ng,lights_fragment_maps:Fg,lights_fragment_end:Og,logdepthbuf_fragment:Bg,logdepthbuf_pars_fragment:kg,logdepthbuf_pars_vertex:zg,logdepthbuf_vertex:Hg,map_fragment:Vg,map_pars_fragment:Gg,map_particle_fragment:Wg,map_particle_pars_fragment:Xg,metalnessmap_fragment:$g,metalnessmap_pars_fragment:Yg,morphinstance_vertex:qg,morphcolor_vertex:jg,morphnormal_vertex:Kg,morphtarget_pars_vertex:Zg,morphtarget_vertex:Jg,normal_fragment_begin:Qg,normal_fragment_maps:t_,normal_pars_fragment:e_,normal_pars_vertex:n_,normal_vertex:i_,normalmap_pars_fragment:r_,clearcoat_normal_fragment_begin:s_,clearcoat_normal_fragment_maps:o_,clearcoat_pars_fragment:a_,iridescence_pars_fragment:c_,opaque_fragment:l_,packing:u_,premultiplied_alpha_fragment:d_,project_vertex:h_,dithering_fragment:f_,dithering_pars_fragment:p_,roughnessmap_fragment:m_,roughnessmap_pars_fragment:g_,shadowmap_pars_fragment:__,shadowmap_pars_vertex:v_,shadowmap_vertex:S_,shadowmask_pars_fragment:x_,skinbase_vertex:E_,skinning_pars_vertex:y_,skinning_vertex:M_,skinnormal_vertex:b_,specularmap_fragment:T_,specularmap_pars_fragment:A_,tonemapping_fragment:w_,tonemapping_pars_fragment:R_,transmission_fragment:C_,transmission_pars_fragment:P_,uv_pars_fragment:I_,uv_pars_vertex:D_,uv_vertex:L_,worldpos_vertex:U_,background_vert:N_,background_frag:F_,backgroundCube_vert:O_,backgroundCube_frag:B_,cube_vert:k_,cube_frag:z_,depth_vert:H_,depth_frag:V_,distanceRGBA_vert:G_,distanceRGBA_frag:W_,equirect_vert:X_,equirect_frag:$_,linedashed_vert:Y_,linedashed_frag:q_,meshbasic_vert:j_,meshbasic_frag:K_,meshlambert_vert:Z_,meshlambert_frag:J_,meshmatcap_vert:Q_,meshmatcap_frag:tv,meshnormal_vert:ev,meshnormal_frag:nv,meshphong_vert:iv,meshphong_frag:rv,meshphysical_vert:sv,meshphysical_frag:ov,meshtoon_vert:av,meshtoon_frag:cv,points_vert:lv,points_frag:uv,shadow_vert:dv,shadow_frag:hv,sprite_vert:fv,sprite_frag:pv},nt={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Dt}},envmap:{envMap:{value:null},envMapRotation:{value:new Dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Dt},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}}},xn={basic:{uniforms:Le([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:Le([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:Le([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:Le([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:Le([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:Le([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:Le([nt.points,nt.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:Le([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:Le([nt.common,nt.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:Le([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:Le([nt.sprite,nt.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Dt}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distanceRGBA:{uniforms:Le([nt.common,nt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distanceRGBA_vert,fragmentShader:Ut.distanceRGBA_frag},shadow:{uniforms:Le([nt.lights,nt.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};xn.physical={uniforms:Le([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Dt},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Dt},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Dt},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Dt},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Dt},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Dt}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};const ks={r:0,b:0,g:0},Si=new bn,mv=new he;function gv(n,t,e,i,r,s,o){const a=new Bt(0);let c=s===!0?0:1,l,u,d=null,h=0,p=null;function g(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?e:t).get(y)),y}function v(b){let y=!1;const D=g(b);D===null?f(a,c):D&&D.isColor&&(f(D,1),y=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,y){const D=g(y);D&&(D.isCubeTexture||D.mapping===To)?(u===void 0&&(u=new He(new Ui(1,1,1),new Ue({name:"BackgroundCubeMaterial",uniforms:Er(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,w,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Si.copy(y.backgroundRotation),Si.x*=-1,Si.y*=-1,Si.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),u.material.uniforms.envMap.value=D,u.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(mv.makeRotationFromEuler(Si)),u.material.toneMapped=Yt.getTransfer(D.colorSpace)!==ee,(d!==D||h!==D.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=D,h=D.version,p=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):D&&D.isTexture&&(l===void 0&&(l=new He(new Ao(2,2),new Ue({name:"BackgroundMaterial",uniforms:Er(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=D,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Yt.getTransfer(D.colorSpace)!==ee,D.matrixAutoUpdate===!0&&D.updateMatrix(),l.material.uniforms.uvTransform.value.copy(D.matrix),(d!==D||h!==D.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,d=D,h=D.version,p=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function f(b,y){b.getRGB(ks,rh(n)),i.buffers.color.setClear(ks.r,ks.g,ks.b,y,o)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,y=1){a.set(b),c=y,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,f(a,c)},render:v,addToRenderList:m,dispose:T}}function _v(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(S,R,F,B,X){let Y=!1;const W=d(B,F,R);s!==W&&(s=W,l(s.object)),Y=p(S,B,F,X),Y&&g(S,B,F,X),X!==null&&t.update(X,n.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,y(S,R,F,B),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function c(){return n.createVertexArray()}function l(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function d(S,R,F){const B=F.wireframe===!0;let X=i[S.id];X===void 0&&(X={},i[S.id]=X);let Y=X[R.id];Y===void 0&&(Y={},X[R.id]=Y);let W=Y[B];return W===void 0&&(W=h(c()),Y[B]=W),W}function h(S){const R=[],F=[],B=[];for(let X=0;X<e;X++)R[X]=0,F[X]=0,B[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:F,attributeDivisors:B,object:S,attributes:{},index:null}}function p(S,R,F,B){const X=s.attributes,Y=R.attributes;let W=0;const G=F.getAttributes();for(const k in G)if(G[k].location>=0){const st=X[k];let vt=Y[k];if(vt===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(vt=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(vt=S.instanceColor)),st===void 0||st.attribute!==vt||vt&&st.data!==vt.data)return!0;W++}return s.attributesNum!==W||s.index!==B}function g(S,R,F,B){const X={},Y=R.attributes;let W=0;const G=F.getAttributes();for(const k in G)if(G[k].location>=0){let st=Y[k];st===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(st=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(st=S.instanceColor));const vt={};vt.attribute=st,st&&st.data&&(vt.data=st.data),X[k]=vt,W++}s.attributes=X,s.attributesNum=W,s.index=B}function v(){const S=s.newAttributes;for(let R=0,F=S.length;R<F;R++)S[R]=0}function m(S){f(S,0)}function f(S,R){const F=s.newAttributes,B=s.enabledAttributes,X=s.attributeDivisors;F[S]=1,B[S]===0&&(n.enableVertexAttribArray(S),B[S]=1),X[S]!==R&&(n.vertexAttribDivisor(S,R),X[S]=R)}function T(){const S=s.newAttributes,R=s.enabledAttributes;for(let F=0,B=R.length;F<B;F++)R[F]!==S[F]&&(n.disableVertexAttribArray(F),R[F]=0)}function b(S,R,F,B,X,Y,W){W===!0?n.vertexAttribIPointer(S,R,F,X,Y):n.vertexAttribPointer(S,R,F,B,X,Y)}function y(S,R,F,B){v();const X=B.attributes,Y=F.getAttributes(),W=R.defaultAttributeValues;for(const G in Y){const k=Y[G];if(k.location>=0){let et=X[G];if(et===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(et=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(et=S.instanceColor)),et!==void 0){const st=et.normalized,vt=et.itemSize,Nt=t.get(et);if(Nt===void 0)continue;const Kt=Nt.buffer,$=Nt.type,tt=Nt.bytesPerElement,gt=$===n.INT||$===n.UNSIGNED_INT||et.gpuType===Xc;if(et.isInterleavedBufferAttribute){const ot=et.data,bt=ot.stride,jt=et.offset;if(ot.isInstancedInterleavedBuffer){for(let At=0;At<k.locationSize;At++)f(k.location+At,ot.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let At=0;At<k.locationSize;At++)m(k.location+At);n.bindBuffer(n.ARRAY_BUFFER,Kt);for(let At=0;At<k.locationSize;At++)b(k.location+At,vt/k.locationSize,$,st,bt*tt,(jt+vt/k.locationSize*At)*tt,gt)}else{if(et.isInstancedBufferAttribute){for(let ot=0;ot<k.locationSize;ot++)f(k.location+ot,et.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let ot=0;ot<k.locationSize;ot++)m(k.location+ot);n.bindBuffer(n.ARRAY_BUFFER,Kt);for(let ot=0;ot<k.locationSize;ot++)b(k.location+ot,vt/k.locationSize,$,st,vt*tt,vt/k.locationSize*ot*tt,gt)}}else if(W!==void 0){const st=W[G];if(st!==void 0)switch(st.length){case 2:n.vertexAttrib2fv(k.location,st);break;case 3:n.vertexAttrib3fv(k.location,st);break;case 4:n.vertexAttrib4fv(k.location,st);break;default:n.vertexAttrib1fv(k.location,st)}}}}T()}function D(){U();for(const S in i){const R=i[S];for(const F in R){const B=R[F];for(const X in B)u(B[X].object),delete B[X];delete R[F]}delete i[S]}}function A(S){if(i[S.id]===void 0)return;const R=i[S.id];for(const F in R){const B=R[F];for(const X in B)u(B[X].object),delete B[X];delete R[F]}delete i[S.id]}function w(S){for(const R in i){const F=i[R];if(F[S.id]===void 0)continue;const B=F[S.id];for(const X in B)u(B[X].object),delete B[X];delete F[S.id]}}function U(){E(),o=!0,s!==r&&(s=r,l(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:U,resetDefaultState:E,dispose:D,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:m,disableUnusedAttributes:T}}function vv(n,t,e){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),e.update(u,i,1)}function o(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),e.update(u,i,d))}function a(l,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g];e.update(p,i,1)}function c(l,u,d,h){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],u[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,u,0,h,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v]*h[v];e.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Sv(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==fn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const U=w===zn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Gn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Fn&&!U)}function c(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:T,maxVaryings:b,maxFragmentUniforms:y,vertexTextures:D,maxSamples:A}}function xv(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new ei,a=new Dt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,p){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const T=s?0:i,b=T*4;let y=f.clippingState||null;c.value=y,y=u(g,h,b,p);for(let D=0;D!==b;++D)y[D]=e[D];f.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,h,p,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const f=p+v*4,T=h.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,y=p;b!==v;++b,y+=4)o.copy(d[b]).applyMatrix4(T,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Ev(n){let t=new WeakMap;function e(o,a){return a===Ga?o.mapping=vr:a===Wa&&(o.mapping=Sr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ga||a===Wa)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new gm(c.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}const dr=4,lu=[.125,.215,.35,.446,.526,.582],Mi=20,la=new rl,uu=new Bt;let ua=null,da=0,ha=0,fa=!1;const Ei=(1+Math.sqrt(5))/2,ar=1/Ei,du=[new N(-Ei,ar,0),new N(Ei,ar,0),new N(-ar,0,Ei),new N(ar,0,Ei),new N(0,Ei,-ar),new N(0,Ei,ar),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],yv=new N;class hu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100,s={}){const{size:o=256,position:a=yv}=s;ua=this._renderer.getRenderTarget(),da=this._renderer.getActiveCubeFace(),ha=this._renderer.getActiveMipmapLevel(),fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,r,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ua,da,ha),this._renderer.xr.enabled=fa,t.scissorTest=!1,zs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===vr||t.mapping===Sr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ua=this._renderer.getRenderTarget(),da=this._renderer.getActiveCubeFace(),ha=this._renderer.getActiveMipmapLevel(),fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:En,minFilter:En,generateMipmaps:!1,type:zn,format:fn,colorSpace:xr,depthBuffer:!1},r=fu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fu(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mv(s)),this._blurMaterial=bv(s,t,e)}return r}_compileMaterial(t){const e=new He(this._lodPlanes[0],t);this._renderer.compile(e,la)}_sceneToCubeUV(t,e,i,r,s){const c=new tn(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(uu),d.toneMapping=ii,d.autoClear=!1;const g=new tl({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1}),v=new He(new Ui,g);let m=!1;const f=t.background;f?f.isColor&&(g.color.copy(f),t.background=null,m=!0):(g.color.copy(uu),m=!0);for(let T=0;T<6;T++){const b=T%3;b===0?(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[T],s.y,s.z)):b===1?(c.up.set(0,0,l[T]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[T],s.z)):(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[T]));const y=this._cubeSize;zs(r,b*y,T>2?y:0,y,y),d.setRenderTarget(r),m&&d.render(v,c),d.render(t,c)}v.geometry.dispose(),v.material.dispose(),d.toneMapping=p,d.autoClear=h,t.background=f}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===vr||t.mapping===Sr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=mu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pu());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new He(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;zs(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,la)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=du[(r-s-1)%du.length];this._blur(t,s-1,s,o,a)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new He(this._lodPlanes[r],l),h=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Mi-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):Mi;m>Mi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Mi}`);const f=[];let T=0;for(let w=0;w<Mi;++w){const U=w/v,E=Math.exp(-U*U/2);f.push(E),w===0?T+=E:w<m&&(T+=2*E)}for(let w=0;w<f.length;w++)f[w]=f[w]/T;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:b}=this;h.dTheta.value=g,h.mipInt.value=b-i;const y=this._sizeLods[r],D=3*y*(r>b-dr?r-b+dr:0),A=4*(this._cubeSize-y);zs(e,D,A,3*y,2*y),c.setRenderTarget(e),c.render(d,la)}}function Mv(n){const t=[],e=[],i=[];let r=n;const s=n-dr+1+lu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let c=1/a;o>n-dr?c=lu[o-n+dr-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,v=3,m=2,f=1,T=new Float32Array(v*g*p),b=new Float32Array(m*g*p),y=new Float32Array(f*g*p);for(let A=0;A<p;A++){const w=A%3*2/3-1,U=A>2?0:-1,E=[w,U,0,w+2/3,U,0,w+2/3,U+1,0,w,U,0,w+2/3,U+1,0,w,U+1,0];T.set(E,v*g*A),b.set(h,m*g*A);const S=[A,A,A,A,A,A];y.set(S,f*g*A)}const D=new qn;D.setAttribute("position",new yn(T,v)),D.setAttribute("uv",new yn(b,m)),D.setAttribute("faceIndex",new yn(y,f)),t.push(D),r>dr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function fu(n,t,e){const i=new mn(n,t,e);return i.texture.mapping=To,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function zs(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function bv(n,t,e){const i=new Float32Array(Mi),r=new N(0,1,0);return new Ue({name:"SphericalGaussianBlur",defines:{n:Mi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:sl(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function pu(){return new Ue({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sl(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function mu(){return new Ue({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function sl(){return`

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
	`}function Tv(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ga||c===Wa,u=c===vr||c===Sr;if(l||u){let d=t.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new hu(n)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return l&&p&&p.height>0||u&&p&&r(p)?(e===null&&(e=new hu(n)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Av(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&io("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function wv(n,t,e,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(t.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,e.memory.geometries++),h}function c(d){const h=d.attributes;for(const p in h)t.update(h[p],n.ARRAY_BUFFER)}function l(d){const h=[],p=d.index,g=d.attributes.position;let v=0;if(p!==null){const T=p.array;v=p.version;for(let b=0,y=T.length;b<y;b+=3){const D=T[b+0],A=T[b+1],w=T[b+2];h.push(D,A,A,w,w,D)}}else if(g!==void 0){const T=g.array;v=g.version;for(let b=0,y=T.length/3-1;b<y;b+=3){const D=b+0,A=b+1,w=b+2;h.push(D,A,A,w,w,D)}}else return;const m=new(Zd(h)?ih:nh)(h,1);m.version=v;const f=s.get(d);f&&t.remove(f),s.set(d,m)}function u(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function Rv(n,t,e){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function c(h,p){n.drawElements(i,p,s,h*o),e.update(p,i,1)}function l(h,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,h*o,g),e.update(p,i,g))}function u(h,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,i,1)}function d(h,p,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<h.length;f++)l(h[f]/o,p[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,v,0,g);let f=0;for(let T=0;T<g;T++)f+=p[T]*v[T];e.update(f,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Cv(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function Pv(n,t,e){const i=new WeakMap,r=new de;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let S=function(){U.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),v===!0&&(y=2),m===!0&&(y=3);let D=a.attributes.position.count*y,A=1;D>t.maxTextureSize&&(A=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const w=new Float32Array(D*A*4*d),U=new Jd(w,D,A,d);U.type=Fn,U.needsUpdate=!0;const E=y*4;for(let R=0;R<d;R++){const F=f[R],B=T[R],X=b[R],Y=D*A*4*R;for(let W=0;W<F.count;W++){const G=W*E;g===!0&&(r.fromBufferAttribute(F,W),w[Y+G+0]=r.x,w[Y+G+1]=r.y,w[Y+G+2]=r.z,w[Y+G+3]=0),v===!0&&(r.fromBufferAttribute(B,W),w[Y+G+4]=r.x,w[Y+G+5]=r.y,w[Y+G+6]=r.z,w[Y+G+7]=0),m===!0&&(r.fromBufferAttribute(X,W),w[Y+G+8]=r.x,w[Y+G+9]=r.y,w[Y+G+10]=r.z,w[Y+G+11]=X.itemSize===4?r.w:1)}}h={count:d,texture:U,size:new yt(D,A)},i.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const v=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function Iv(n,t,e,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==l&&(t.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==l&&(h.update(),r.set(h,l))}return d}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}const uh=new Ne,gu=new ah(1,1),dh=new Jd,hh=new tm,fh=new oh,_u=[],vu=[],Su=new Float32Array(16),xu=new Float32Array(9),Eu=new Float32Array(4);function Rr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=_u[r];if(s===void 0&&(s=new Float32Array(r),_u[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function ve(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Se(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function wo(n,t){let e=vu[t];e===void 0&&(e=new Int32Array(t),vu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Dv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Lv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;n.uniform2fv(this.addr,t),Se(e,t)}}function Uv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;n.uniform3fv(this.addr,t),Se(e,t)}}function Nv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;n.uniform4fv(this.addr,t),Se(e,t)}}function Fv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ve(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Se(e,t)}else{if(ve(e,i))return;Eu.set(i),n.uniformMatrix2fv(this.addr,!1,Eu),Se(e,i)}}function Ov(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ve(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Se(e,t)}else{if(ve(e,i))return;xu.set(i),n.uniformMatrix3fv(this.addr,!1,xu),Se(e,i)}}function Bv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ve(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Se(e,t)}else{if(ve(e,i))return;Su.set(i),n.uniformMatrix4fv(this.addr,!1,Su),Se(e,i)}}function kv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function zv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;n.uniform2iv(this.addr,t),Se(e,t)}}function Hv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;n.uniform3iv(this.addr,t),Se(e,t)}}function Vv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;n.uniform4iv(this.addr,t),Se(e,t)}}function Gv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Wv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;n.uniform2uiv(this.addr,t),Se(e,t)}}function Xv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;n.uniform3uiv(this.addr,t),Se(e,t)}}function $v(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;n.uniform4uiv(this.addr,t),Se(e,t)}}function Yv(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(gu.compareFunction=Kd,s=gu):s=uh,e.setTexture2D(t||s,r)}function qv(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||hh,r)}function jv(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||fh,r)}function Kv(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||dh,r)}function Zv(n){switch(n){case 5126:return Dv;case 35664:return Lv;case 35665:return Uv;case 35666:return Nv;case 35674:return Fv;case 35675:return Ov;case 35676:return Bv;case 5124:case 35670:return kv;case 35667:case 35671:return zv;case 35668:case 35672:return Hv;case 35669:case 35673:return Vv;case 5125:return Gv;case 36294:return Wv;case 36295:return Xv;case 36296:return $v;case 35678:case 36198:case 36298:case 36306:case 35682:return Yv;case 35679:case 36299:case 36307:return qv;case 35680:case 36300:case 36308:case 36293:return jv;case 36289:case 36303:case 36311:case 36292:return Kv}}function Jv(n,t){n.uniform1fv(this.addr,t)}function Qv(n,t){const e=Rr(t,this.size,2);n.uniform2fv(this.addr,e)}function t0(n,t){const e=Rr(t,this.size,3);n.uniform3fv(this.addr,e)}function e0(n,t){const e=Rr(t,this.size,4);n.uniform4fv(this.addr,e)}function n0(n,t){const e=Rr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function i0(n,t){const e=Rr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function r0(n,t){const e=Rr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function s0(n,t){n.uniform1iv(this.addr,t)}function o0(n,t){n.uniform2iv(this.addr,t)}function a0(n,t){n.uniform3iv(this.addr,t)}function c0(n,t){n.uniform4iv(this.addr,t)}function l0(n,t){n.uniform1uiv(this.addr,t)}function u0(n,t){n.uniform2uiv(this.addr,t)}function d0(n,t){n.uniform3uiv(this.addr,t)}function h0(n,t){n.uniform4uiv(this.addr,t)}function f0(n,t,e){const i=this.cache,r=t.length,s=wo(e,r);ve(i,s)||(n.uniform1iv(this.addr,s),Se(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||uh,s[o])}function p0(n,t,e){const i=this.cache,r=t.length,s=wo(e,r);ve(i,s)||(n.uniform1iv(this.addr,s),Se(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||hh,s[o])}function m0(n,t,e){const i=this.cache,r=t.length,s=wo(e,r);ve(i,s)||(n.uniform1iv(this.addr,s),Se(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||fh,s[o])}function g0(n,t,e){const i=this.cache,r=t.length,s=wo(e,r);ve(i,s)||(n.uniform1iv(this.addr,s),Se(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||dh,s[o])}function _0(n){switch(n){case 5126:return Jv;case 35664:return Qv;case 35665:return t0;case 35666:return e0;case 35674:return n0;case 35675:return i0;case 35676:return r0;case 5124:case 35670:return s0;case 35667:case 35671:return o0;case 35668:case 35672:return a0;case 35669:case 35673:return c0;case 5125:return l0;case 36294:return u0;case 36295:return d0;case 36296:return h0;case 35678:case 36198:case 36298:case 36306:case 35682:return f0;case 35679:case 36299:case 36307:return p0;case 35680:case 36300:case 36308:case 36293:return m0;case 36289:case 36303:case 36311:case 36292:return g0}}class v0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Zv(e.type)}}class S0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=_0(e.type)}}class x0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const pa=/(\w+)(\])?(\[|\.)?/g;function yu(n,t){n.seq.push(t),n.map[t.id]=t}function E0(n,t,e){const i=n.name,r=i.length;for(pa.lastIndex=0;;){const s=pa.exec(i),o=pa.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){yu(e,l===void 0?new v0(a,n,t):new S0(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new x0(a),yu(e,d)),e=d}}}class ro{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);E0(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function Mu(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const y0=37297;let M0=0;function b0(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const bu=new Dt;function T0(n){Yt._getMatrix(bu,Yt.workingColorSpace,n);const t=`mat3( ${bu.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(n)){case po:return[t,"LinearTransferOETF"];case ee:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Tu(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+b0(n.getShaderSource(t),o)}else return r}function A0(n,t){const e=T0(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function w0(n,t){let e;switch(t){case dp:e="Linear";break;case hp:e="Reinhard";break;case fp:e="Cineon";break;case pp:e="ACESFilmic";break;case gp:e="AgX";break;case _p:e="Neutral";break;case mp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Hs=new N;function R0(){Yt.getLuminanceCoefficients(Hs);const n=Hs.x.toFixed(4),t=Hs.y.toFixed(4),e=Hs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function C0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vr).join(`
`)}function P0(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function I0(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Vr(n){return n!==""}function Au(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const D0=/^[ \t]*#include +<([\w\d./]+)>/gm;function xc(n){return n.replace(D0,U0)}const L0=new Map;function U0(n,t){let e=Ut[t];if(e===void 0){const i=L0.get(t);if(i!==void 0)e=Ut[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return xc(e)}const N0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ru(n){return n.replace(N0,F0)}function F0(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Cu(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function O0(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Fd?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Wf?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===In&&(t="SHADOWMAP_TYPE_VSM"),t}function B0(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case vr:case Sr:t="ENVMAP_TYPE_CUBE";break;case To:t="ENVMAP_TYPE_CUBE_UV";break}return t}function k0(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Sr:t="ENVMAP_MODE_REFRACTION";break}return t}function z0(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Od:t="ENVMAP_BLENDING_MULTIPLY";break;case lp:t="ENVMAP_BLENDING_MIX";break;case up:t="ENVMAP_BLENDING_ADD";break}return t}function H0(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function V0(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=O0(e),l=B0(e),u=k0(e),d=z0(e),h=H0(e),p=C0(e),g=P0(s),v=r.createProgram();let m,f,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Vr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Vr).join(`
`),f.length>0&&(f+=`
`)):(m=[Cu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vr).join(`
`),f=[Cu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ii?"#define TONE_MAPPING":"",e.toneMapping!==ii?Ut.tonemapping_pars_fragment:"",e.toneMapping!==ii?w0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,A0("linearToOutputTexel",e.outputColorSpace),R0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Vr).join(`
`)),o=xc(o),o=Au(o,e),o=wu(o,e),a=xc(a),a=Au(a,e),a=wu(a,e),o=Ru(o),a=Ru(a),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Bl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Bl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=T+m+o,y=T+f+a,D=Mu(r,r.VERTEX_SHADER,b),A=Mu(r,r.FRAGMENT_SHADER,y);r.attachShader(v,D),r.attachShader(v,A),e.index0AttributeName!==void 0?r.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function w(R){if(n.debug.checkShaderErrors){const F=r.getProgramInfoLog(v).trim(),B=r.getShaderInfoLog(D).trim(),X=r.getShaderInfoLog(A).trim();let Y=!0,W=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,D,A);else{const G=Tu(r,D,"vertex"),k=Tu(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+F+`
`+G+`
`+k)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(B===""||X==="")&&(W=!1);W&&(R.diagnostics={runnable:Y,programLog:F,vertexShader:{log:B,prefix:m},fragmentShader:{log:X,prefix:f}})}r.deleteShader(D),r.deleteShader(A),U=new ro(r,v),E=I0(r,v)}let U;this.getUniforms=function(){return U===void 0&&w(this),U};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(v,y0)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=M0++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=D,this.fragmentShader=A,this}let G0=0;class W0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new X0(t),e.set(t,i)),i}}class X0{constructor(t){this.id=G0++,this.code=t,this.usedTimes=0}}function $0(n,t,e,i,r,s,o){const a=new th,c=new W0,l=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,S,R,F,B){const X=F.fog,Y=B.geometry,W=E.isMeshStandardMaterial?F.environment:null,G=(E.isMeshStandardMaterial?e:t).get(E.envMap||W),k=G&&G.mapping===To?G.image.height:null,et=g[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const st=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,vt=st!==void 0?st.length:0;let Nt=0;Y.morphAttributes.position!==void 0&&(Nt=1),Y.morphAttributes.normal!==void 0&&(Nt=2),Y.morphAttributes.color!==void 0&&(Nt=3);let Kt,$,tt,gt;if(et){const Qt=xn[et];Kt=Qt.vertexShader,$=Qt.fragmentShader}else Kt=E.vertexShader,$=E.fragmentShader,c.update(E),tt=c.getVertexShaderID(E),gt=c.getFragmentShaderID(E);const ot=n.getRenderTarget(),bt=n.state.buffers.depth.getReversed(),jt=B.isInstancedMesh===!0,At=B.isBatchedMesh===!0,fe=!!E.map,ce=!!E.matcap,kt=!!G,C=!!E.aoMap,je=!!E.lightMap,Vt=!!E.bumpMap,zt=!!E.normalMap,xt=!!E.displacementMap,se=!!E.emissiveMap,St=!!E.metalnessMap,M=!!E.roughnessMap,_=E.anisotropy>0,O=E.clearcoat>0,j=E.dispersion>0,Z=E.iridescence>0,q=E.sheen>0,_t=E.transmission>0,at=_&&!!E.anisotropyMap,ht=O&&!!E.clearcoatMap,Gt=O&&!!E.clearcoatNormalMap,Q=O&&!!E.clearcoatRoughnessMap,ft=Z&&!!E.iridescenceMap,Tt=Z&&!!E.iridescenceThicknessMap,Rt=q&&!!E.sheenColorMap,pt=q&&!!E.sheenRoughnessMap,Ht=!!E.specularMap,Lt=!!E.specularColorMap,re=!!E.specularIntensityMap,P=_t&&!!E.transmissionMap,ct=_t&&!!E.thicknessMap,V=!!E.gradientMap,K=!!E.alphaMap,ut=E.alphaTest>0,lt=!!E.alphaHash,It=!!E.extensions;let le=ii;E.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(le=n.toneMapping);const Ae={shaderID:et,shaderType:E.type,shaderName:E.name,vertexShader:Kt,fragmentShader:$,defines:E.defines,customVertexShaderID:tt,customFragmentShaderID:gt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:At,batchingColor:At&&B._colorsTexture!==null,instancing:jt,instancingColor:jt&&B.instanceColor!==null,instancingMorph:jt&&B.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ot===null?n.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:xr,alphaToCoverage:!!E.alphaToCoverage,map:fe,matcap:ce,envMap:kt,envMapMode:kt&&G.mapping,envMapCubeUVHeight:k,aoMap:C,lightMap:je,bumpMap:Vt,normalMap:zt,displacementMap:h&&xt,emissiveMap:se,normalMapObjectSpace:zt&&E.normalMapType===Ep,normalMapTangentSpace:zt&&E.normalMapType===jd,metalnessMap:St,roughnessMap:M,anisotropy:_,anisotropyMap:at,clearcoat:O,clearcoatMap:ht,clearcoatNormalMap:Gt,clearcoatRoughnessMap:Q,dispersion:j,iridescence:Z,iridescenceMap:ft,iridescenceThicknessMap:Tt,sheen:q,sheenColorMap:Rt,sheenRoughnessMap:pt,specularMap:Ht,specularColorMap:Lt,specularIntensityMap:re,transmission:_t,transmissionMap:P,thicknessMap:ct,gradientMap:V,opaque:E.transparent===!1&&E.blending===mr&&E.alphaToCoverage===!1,alphaMap:K,alphaTest:ut,alphaHash:lt,combine:E.combine,mapUv:fe&&v(E.map.channel),aoMapUv:C&&v(E.aoMap.channel),lightMapUv:je&&v(E.lightMap.channel),bumpMapUv:Vt&&v(E.bumpMap.channel),normalMapUv:zt&&v(E.normalMap.channel),displacementMapUv:xt&&v(E.displacementMap.channel),emissiveMapUv:se&&v(E.emissiveMap.channel),metalnessMapUv:St&&v(E.metalnessMap.channel),roughnessMapUv:M&&v(E.roughnessMap.channel),anisotropyMapUv:at&&v(E.anisotropyMap.channel),clearcoatMapUv:ht&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:Gt&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:pt&&v(E.sheenRoughnessMap.channel),specularMapUv:Ht&&v(E.specularMap.channel),specularColorMapUv:Lt&&v(E.specularColorMap.channel),specularIntensityMapUv:re&&v(E.specularIntensityMap.channel),transmissionMapUv:P&&v(E.transmissionMap.channel),thicknessMapUv:ct&&v(E.thicknessMap.channel),alphaMapUv:K&&v(E.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(zt||_),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Y.attributes.uv&&(fe||K),fog:!!X,useFog:E.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:bt,skinning:B.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:Nt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:le,decodeVideoTexture:fe&&E.map.isVideoTexture===!0&&Yt.getTransfer(E.map.colorSpace)===ee,decodeVideoTextureEmissive:se&&E.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(E.emissiveMap.colorSpace)===ee,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Nn,flipSided:E.side===Ve,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:It&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&E.extensions.multiDraw===!0||At)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ae.vertexUv1s=l.has(1),Ae.vertexUv2s=l.has(2),Ae.vertexUv3s=l.has(3),l.clear(),Ae}function f(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const R in E.defines)S.push(R),S.push(E.defines[R]);return E.isRawShaderMaterial===!1&&(T(S,E),b(S,E),S.push(n.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function T(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function b(E,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),E.push(a.mask)}function y(E){const S=g[E.type];let R;if(S){const F=xn[S];R=go.clone(F.uniforms)}else R=E.uniforms;return R}function D(E,S){let R;for(let F=0,B=u.length;F<B;F++){const X=u[F];if(X.cacheKey===S){R=X,++R.usedTimes;break}}return R===void 0&&(R=new V0(n,S,E,s),u.push(R)),R}function A(E){if(--E.usedTimes===0){const S=u.indexOf(E);u[S]=u[u.length-1],u.pop(),E.destroy()}}function w(E){c.remove(E)}function U(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:D,releaseProgram:A,releaseShaderCache:w,programs:u,dispose:U}}function Y0(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function q0(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Pu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Iu(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(d,h,p,g,v,m){let f=n[t];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},n[t]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=v,f.group=m),t++,f}function a(d,h,p,g,v,m){const f=o(d,h,p,g,v,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):e.push(f)}function c(d,h,p,g,v,m){const f=o(d,h,p,g,v,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):e.unshift(f)}function l(d,h){e.length>1&&e.sort(d||q0),i.length>1&&i.sort(h||Pu),r.length>1&&r.sort(h||Pu)}function u(){for(let d=t,h=n.length;d<h;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function j0(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new Iu,n.set(i,[o])):r>=s.length?(o=new Iu,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function K0(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Bt};break;case"SpotLight":e={position:new N,direction:new N,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new N,halfWidth:new N,halfHeight:new N};break}return n[t.id]=e,e}}}function Z0(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let J0=0;function Q0(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function tS(n){const t=new K0,e=Z0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new N);const r=new N,s=new he,o=new he;function a(l){let u=0,d=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,g=0,v=0,m=0,f=0,T=0,b=0,y=0,D=0,A=0,w=0;l.sort(Q0);for(let E=0,S=l.length;E<S;E++){const R=l[E],F=R.color,B=R.intensity,X=R.distance,Y=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=F.r*B,d+=F.g*B,h+=F.b*B;else if(R.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(R.sh.coefficients[W],B);w++}else if(R.isDirectionalLight){const W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const G=R.shadow,k=e.get(R);k.shadowIntensity=G.intensity,k.shadowBias=G.bias,k.shadowNormalBias=G.normalBias,k.shadowRadius=G.radius,k.shadowMapSize=G.mapSize,i.directionalShadow[p]=k,i.directionalShadowMap[p]=Y,i.directionalShadowMatrix[p]=R.shadow.matrix,T++}i.directional[p]=W,p++}else if(R.isSpotLight){const W=t.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(F).multiplyScalar(B),W.distance=X,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,i.spot[v]=W;const G=R.shadow;if(R.map&&(i.spotLightMap[D]=R.map,D++,G.updateMatrices(R),R.castShadow&&A++),i.spotLightMatrix[v]=G.matrix,R.castShadow){const k=e.get(R);k.shadowIntensity=G.intensity,k.shadowBias=G.bias,k.shadowNormalBias=G.normalBias,k.shadowRadius=G.radius,k.shadowMapSize=G.mapSize,i.spotShadow[v]=k,i.spotShadowMap[v]=Y,y++}v++}else if(R.isRectAreaLight){const W=t.get(R);W.color.copy(F).multiplyScalar(B),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=W,m++}else if(R.isPointLight){const W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),W.distance=R.distance,W.decay=R.decay,R.castShadow){const G=R.shadow,k=e.get(R);k.shadowIntensity=G.intensity,k.shadowBias=G.bias,k.shadowNormalBias=G.normalBias,k.shadowRadius=G.radius,k.shadowMapSize=G.mapSize,k.shadowCameraNear=G.camera.near,k.shadowCameraFar=G.camera.far,i.pointShadow[g]=k,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=R.shadow.matrix,b++}i.point[g]=W,g++}else if(R.isHemisphereLight){const W=t.get(R);W.skyColor.copy(R.color).multiplyScalar(B),W.groundColor.copy(R.groundColor).multiplyScalar(B),i.hemi[f]=W,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=nt.LTC_FLOAT_1,i.rectAreaLTC2=nt.LTC_FLOAT_2):(i.rectAreaLTC1=nt.LTC_HALF_1,i.rectAreaLTC2=nt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const U=i.hash;(U.directionalLength!==p||U.pointLength!==g||U.spotLength!==v||U.rectAreaLength!==m||U.hemiLength!==f||U.numDirectionalShadows!==T||U.numPointShadows!==b||U.numSpotShadows!==y||U.numSpotMaps!==D||U.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=y+D-A,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=w,U.directionalLength=p,U.pointLength=g,U.spotLength=v,U.rectAreaLength=m,U.hemiLength=f,U.numDirectionalShadows=T,U.numPointShadows=b,U.numSpotShadows=y,U.numSpotMaps=D,U.numLightProbes=w,i.version=J0++)}function c(l,u){let d=0,h=0,p=0,g=0,v=0;const m=u.matrixWorldInverse;for(let f=0,T=l.length;f<T;f++){const b=l[f];if(b.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),d++}else if(b.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(b.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),h++}else if(b.isHemisphereLight){const y=i.hemi[v];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:i}}function Du(n){const t=new tS(n),e=[],i=[];function r(u){l.camera=u,e.length=0,i.length=0}function s(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function eS(n){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new Du(n),t.set(r,[a])):s>=o.length?(a=new Du(n),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const nS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iS=`uniform sampler2D shadow_pass;
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
}`;function rS(n,t,e){let i=new el;const r=new yt,s=new yt,o=new de,a=new Em({depthPacking:xp}),c=new ym,l={},u=e.maxTextureSize,d={[si]:Ve,[Ve]:si,[Nn]:Nn},h=new Ue({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:nS,fragmentShader:iS}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new qn;g.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new He(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fd;let f=this.type;this.render=function(A,w,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const E=n.getRenderTarget(),S=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),F=n.state;F.setBlending(kn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const B=f!==In&&this.type===In,X=f===In&&this.type!==In;for(let Y=0,W=A.length;Y<W;Y++){const G=A[Y],k=G.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const et=k.getFrameExtents();if(r.multiply(et),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/et.x),r.x=s.x*et.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/et.y),r.y=s.y*et.y,k.mapSize.y=s.y)),k.map===null||B===!0||X===!0){const vt=this.type!==In?{minFilter:pn,magFilter:pn}:{};k.map!==null&&k.map.dispose(),k.map=new mn(r.x,r.y,vt),k.map.texture.name=G.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();const st=k.getViewportCount();for(let vt=0;vt<st;vt++){const Nt=k.getViewport(vt);o.set(s.x*Nt.x,s.y*Nt.y,s.x*Nt.z,s.y*Nt.w),F.viewport(o),k.updateMatrices(G,vt),i=k.getFrustum(),y(w,U,k.camera,G,this.type)}k.isPointLightShadow!==!0&&this.type===In&&T(k,U),k.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(E,S,R)};function T(A,w){const U=t.update(v);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new mn(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(w,null,U,h,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(w,null,U,p,v,null)}function b(A,w,U,E){let S=null;const R=U.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)S=R;else if(S=U.isPointLight===!0?c:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const F=S.uuid,B=w.uuid;let X=l[F];X===void 0&&(X={},l[F]=X);let Y=X[B];Y===void 0&&(Y=S.clone(),X[B]=Y,w.addEventListener("dispose",D)),S=Y}if(S.visible=w.visible,S.wireframe=w.wireframe,E===In?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:d[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,U.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const F=n.properties.get(S);F.light=U}return S}function y(A,w,U,E,S){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===In)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,A.matrixWorld);const B=t.update(A),X=A.material;if(Array.isArray(X)){const Y=B.groups;for(let W=0,G=Y.length;W<G;W++){const k=Y[W],et=X[k.materialIndex];if(et&&et.visible){const st=b(A,et,E,S);A.onBeforeShadow(n,A,w,U,B,st,k),n.renderBufferDirect(U,null,B,st,A,k),A.onAfterShadow(n,A,w,U,B,st,k)}}}else if(X.visible){const Y=b(A,X,E,S);A.onBeforeShadow(n,A,w,U,B,Y,null),n.renderBufferDirect(U,null,B,Y,A,null),A.onAfterShadow(n,A,w,U,B,Y,null)}}const F=A.children;for(let B=0,X=F.length;B<X;B++)y(F[B],w,U,E,S)}function D(A){A.target.removeEventListener("dispose",D);for(const U in l){const E=l[U],S=A.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}const sS={[Fa]:Oa,[Ba]:Ha,[ka]:Va,[_r]:za,[Oa]:Fa,[Ha]:Ba,[Va]:ka,[za]:_r};function oS(n,t){function e(){let P=!1;const ct=new de;let V=null;const K=new de(0,0,0,0);return{setMask:function(ut){V!==ut&&!P&&(n.colorMask(ut,ut,ut,ut),V=ut)},setLocked:function(ut){P=ut},setClear:function(ut,lt,It,le,Ae){Ae===!0&&(ut*=le,lt*=le,It*=le),ct.set(ut,lt,It,le),K.equals(ct)===!1&&(n.clearColor(ut,lt,It,le),K.copy(ct))},reset:function(){P=!1,V=null,K.set(-1,0,0,0)}}}function i(){let P=!1,ct=!1,V=null,K=null,ut=null;return{setReversed:function(lt){if(ct!==lt){const It=t.get("EXT_clip_control");lt?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),ct=lt;const le=ut;ut=null,this.setClear(le)}},getReversed:function(){return ct},setTest:function(lt){lt?ot(n.DEPTH_TEST):bt(n.DEPTH_TEST)},setMask:function(lt){V!==lt&&!P&&(n.depthMask(lt),V=lt)},setFunc:function(lt){if(ct&&(lt=sS[lt]),K!==lt){switch(lt){case Fa:n.depthFunc(n.NEVER);break;case Oa:n.depthFunc(n.ALWAYS);break;case Ba:n.depthFunc(n.LESS);break;case _r:n.depthFunc(n.LEQUAL);break;case ka:n.depthFunc(n.EQUAL);break;case za:n.depthFunc(n.GEQUAL);break;case Ha:n.depthFunc(n.GREATER);break;case Va:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}K=lt}},setLocked:function(lt){P=lt},setClear:function(lt){ut!==lt&&(ct&&(lt=1-lt),n.clearDepth(lt),ut=lt)},reset:function(){P=!1,V=null,K=null,ut=null,ct=!1}}}function r(){let P=!1,ct=null,V=null,K=null,ut=null,lt=null,It=null,le=null,Ae=null;return{setTest:function(Qt){P||(Qt?ot(n.STENCIL_TEST):bt(n.STENCIL_TEST))},setMask:function(Qt){ct!==Qt&&!P&&(n.stencilMask(Qt),ct=Qt)},setFunc:function(Qt,an,Tn){(V!==Qt||K!==an||ut!==Tn)&&(n.stencilFunc(Qt,an,Tn),V=Qt,K=an,ut=Tn)},setOp:function(Qt,an,Tn){(lt!==Qt||It!==an||le!==Tn)&&(n.stencilOp(Qt,an,Tn),lt=Qt,It=an,le=Tn)},setLocked:function(Qt){P=Qt},setClear:function(Qt){Ae!==Qt&&(n.clearStencil(Qt),Ae=Qt)},reset:function(){P=!1,ct=null,V=null,K=null,ut=null,lt=null,It=null,le=null,Ae=null}}}const s=new e,o=new i,a=new r,c=new WeakMap,l=new WeakMap;let u={},d={},h=new WeakMap,p=[],g=null,v=!1,m=null,f=null,T=null,b=null,y=null,D=null,A=null,w=new Bt(0,0,0),U=0,E=!1,S=null,R=null,F=null,B=null,X=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,G=0;const k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(k)[1]),W=G>=1):k.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),W=G>=2);let et=null,st={};const vt=n.getParameter(n.SCISSOR_BOX),Nt=n.getParameter(n.VIEWPORT),Kt=new de().fromArray(vt),$=new de().fromArray(Nt);function tt(P,ct,V,K){const ut=new Uint8Array(4),lt=n.createTexture();n.bindTexture(P,lt),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let It=0;It<V;It++)P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY?n.texImage3D(ct,0,n.RGBA,1,1,K,0,n.RGBA,n.UNSIGNED_BYTE,ut):n.texImage2D(ct+It,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ut);return lt}const gt={};gt[n.TEXTURE_2D]=tt(n.TEXTURE_2D,n.TEXTURE_2D,1),gt[n.TEXTURE_CUBE_MAP]=tt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[n.TEXTURE_2D_ARRAY]=tt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),gt[n.TEXTURE_3D]=tt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ot(n.DEPTH_TEST),o.setFunc(_r),Vt(!1),zt(Ll),ot(n.CULL_FACE),C(kn);function ot(P){u[P]!==!0&&(n.enable(P),u[P]=!0)}function bt(P){u[P]!==!1&&(n.disable(P),u[P]=!1)}function jt(P,ct){return d[P]!==ct?(n.bindFramebuffer(P,ct),d[P]=ct,P===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ct),P===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ct),!0):!1}function At(P,ct){let V=p,K=!1;if(P){V=h.get(ct),V===void 0&&(V=[],h.set(ct,V));const ut=P.textures;if(V.length!==ut.length||V[0]!==n.COLOR_ATTACHMENT0){for(let lt=0,It=ut.length;lt<It;lt++)V[lt]=n.COLOR_ATTACHMENT0+lt;V.length=ut.length,K=!0}}else V[0]!==n.BACK&&(V[0]=n.BACK,K=!0);K&&n.drawBuffers(V)}function fe(P){return g!==P?(n.useProgram(P),g=P,!0):!1}const ce={[yi]:n.FUNC_ADD,[$f]:n.FUNC_SUBTRACT,[Yf]:n.FUNC_REVERSE_SUBTRACT};ce[qf]=n.MIN,ce[jf]=n.MAX;const kt={[Kf]:n.ZERO,[Zf]:n.ONE,[Jf]:n.SRC_COLOR,[Ua]:n.SRC_ALPHA,[rp]:n.SRC_ALPHA_SATURATE,[np]:n.DST_COLOR,[tp]:n.DST_ALPHA,[Qf]:n.ONE_MINUS_SRC_COLOR,[Na]:n.ONE_MINUS_SRC_ALPHA,[ip]:n.ONE_MINUS_DST_COLOR,[ep]:n.ONE_MINUS_DST_ALPHA,[sp]:n.CONSTANT_COLOR,[op]:n.ONE_MINUS_CONSTANT_COLOR,[ap]:n.CONSTANT_ALPHA,[cp]:n.ONE_MINUS_CONSTANT_ALPHA};function C(P,ct,V,K,ut,lt,It,le,Ae,Qt){if(P===kn){v===!0&&(bt(n.BLEND),v=!1);return}if(v===!1&&(ot(n.BLEND),v=!0),P!==Xf){if(P!==m||Qt!==E){if((f!==yi||y!==yi)&&(n.blendEquation(n.FUNC_ADD),f=yi,y=yi),Qt)switch(P){case mr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case La:n.blendFunc(n.ONE,n.ONE);break;case Ul:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case mr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case La:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ul:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}T=null,b=null,D=null,A=null,w.set(0,0,0),U=0,m=P,E=Qt}return}ut=ut||ct,lt=lt||V,It=It||K,(ct!==f||ut!==y)&&(n.blendEquationSeparate(ce[ct],ce[ut]),f=ct,y=ut),(V!==T||K!==b||lt!==D||It!==A)&&(n.blendFuncSeparate(kt[V],kt[K],kt[lt],kt[It]),T=V,b=K,D=lt,A=It),(le.equals(w)===!1||Ae!==U)&&(n.blendColor(le.r,le.g,le.b,Ae),w.copy(le),U=Ae),m=P,E=!1}function je(P,ct){P.side===Nn?bt(n.CULL_FACE):ot(n.CULL_FACE);let V=P.side===Ve;ct&&(V=!V),Vt(V),P.blending===mr&&P.transparent===!1?C(kn):C(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),o.setFunc(P.depthFunc),o.setTest(P.depthTest),o.setMask(P.depthWrite),s.setMask(P.colorWrite);const K=P.stencilWrite;a.setTest(K),K&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),se(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ot(n.SAMPLE_ALPHA_TO_COVERAGE):bt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(P){S!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),S=P)}function zt(P){P!==Vf?(ot(n.CULL_FACE),P!==R&&(P===Ll?n.cullFace(n.BACK):P===Gf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):bt(n.CULL_FACE),R=P}function xt(P){P!==F&&(W&&n.lineWidth(P),F=P)}function se(P,ct,V){P?(ot(n.POLYGON_OFFSET_FILL),(B!==ct||X!==V)&&(n.polygonOffset(ct,V),B=ct,X=V)):bt(n.POLYGON_OFFSET_FILL)}function St(P){P?ot(n.SCISSOR_TEST):bt(n.SCISSOR_TEST)}function M(P){P===void 0&&(P=n.TEXTURE0+Y-1),et!==P&&(n.activeTexture(P),et=P)}function _(P,ct,V){V===void 0&&(et===null?V=n.TEXTURE0+Y-1:V=et);let K=st[V];K===void 0&&(K={type:void 0,texture:void 0},st[V]=K),(K.type!==P||K.texture!==ct)&&(et!==V&&(n.activeTexture(V),et=V),n.bindTexture(P,ct||gt[P]),K.type=P,K.texture=ct)}function O(){const P=st[et];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function j(){try{n.compressedTexImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Z(){try{n.compressedTexImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function q(){try{n.texSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _t(){try{n.texSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function at(){try{n.compressedTexSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ht(){try{n.compressedTexSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Gt(){try{n.texStorage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{n.texStorage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ft(){try{n.texImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Tt(){try{n.texImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Rt(P){Kt.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),Kt.copy(P))}function pt(P){$.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),$.copy(P))}function Ht(P,ct){let V=l.get(ct);V===void 0&&(V=new WeakMap,l.set(ct,V));let K=V.get(P);K===void 0&&(K=n.getUniformBlockIndex(ct,P.name),V.set(P,K))}function Lt(P,ct){const K=l.get(ct).get(P);c.get(ct)!==K&&(n.uniformBlockBinding(ct,K,P.__bindingPointIndex),c.set(ct,K))}function re(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},et=null,st={},d={},h=new WeakMap,p=[],g=null,v=!1,m=null,f=null,T=null,b=null,y=null,D=null,A=null,w=new Bt(0,0,0),U=0,E=!1,S=null,R=null,F=null,B=null,X=null,Kt.set(0,0,n.canvas.width,n.canvas.height),$.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ot,disable:bt,bindFramebuffer:jt,drawBuffers:At,useProgram:fe,setBlending:C,setMaterial:je,setFlipSided:Vt,setCullFace:zt,setLineWidth:xt,setPolygonOffset:se,setScissorTest:St,activeTexture:M,bindTexture:_,unbindTexture:O,compressedTexImage2D:j,compressedTexImage3D:Z,texImage2D:ft,texImage3D:Tt,updateUBOMapping:Ht,uniformBlockBinding:Lt,texStorage2D:Gt,texStorage3D:Q,texSubImage2D:q,texSubImage3D:_t,compressedTexSubImage2D:at,compressedTexSubImage3D:ht,scissor:Rt,viewport:pt,reset:re}}function aS(n,t,e,i,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new yt,u=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,_){return p?new OffscreenCanvas(M,_):Jr("canvas")}function v(M,_,O){let j=1;const Z=St(M);if((Z.width>O||Z.height>O)&&(j=O/Math.max(Z.width,Z.height)),j<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const q=Math.floor(j*Z.width),_t=Math.floor(j*Z.height);d===void 0&&(d=g(q,_t));const at=_?g(q,_t):d;return at.width=q,at.height=_t,at.getContext("2d").drawImage(M,0,0,q,_t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+q+"x"+_t+")."),at}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),M;return M}function m(M){return M.generateMipmaps}function f(M){n.generateMipmap(M)}function T(M){return M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?n.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(M,_,O,j,Z=!1){if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let q=_;if(_===n.RED&&(O===n.FLOAT&&(q=n.R32F),O===n.HALF_FLOAT&&(q=n.R16F),O===n.UNSIGNED_BYTE&&(q=n.R8)),_===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(q=n.R8UI),O===n.UNSIGNED_SHORT&&(q=n.R16UI),O===n.UNSIGNED_INT&&(q=n.R32UI),O===n.BYTE&&(q=n.R8I),O===n.SHORT&&(q=n.R16I),O===n.INT&&(q=n.R32I)),_===n.RG&&(O===n.FLOAT&&(q=n.RG32F),O===n.HALF_FLOAT&&(q=n.RG16F),O===n.UNSIGNED_BYTE&&(q=n.RG8)),_===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(q=n.RG8UI),O===n.UNSIGNED_SHORT&&(q=n.RG16UI),O===n.UNSIGNED_INT&&(q=n.RG32UI),O===n.BYTE&&(q=n.RG8I),O===n.SHORT&&(q=n.RG16I),O===n.INT&&(q=n.RG32I)),_===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(q=n.RGB8UI),O===n.UNSIGNED_SHORT&&(q=n.RGB16UI),O===n.UNSIGNED_INT&&(q=n.RGB32UI),O===n.BYTE&&(q=n.RGB8I),O===n.SHORT&&(q=n.RGB16I),O===n.INT&&(q=n.RGB32I)),_===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),O===n.UNSIGNED_INT&&(q=n.RGBA32UI),O===n.BYTE&&(q=n.RGBA8I),O===n.SHORT&&(q=n.RGBA16I),O===n.INT&&(q=n.RGBA32I)),_===n.RGB&&O===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),_===n.RGBA){const _t=Z?po:Yt.getTransfer(j);O===n.FLOAT&&(q=n.RGBA32F),O===n.HALF_FLOAT&&(q=n.RGBA16F),O===n.UNSIGNED_BYTE&&(q=_t===ee?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function y(M,_){let O;return M?_===null||_===Di||_===qr?O=n.DEPTH24_STENCIL8:_===Fn?O=n.DEPTH32F_STENCIL8:_===Yr&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Di||_===qr?O=n.DEPTH_COMPONENT24:_===Fn?O=n.DEPTH_COMPONENT32F:_===Yr&&(O=n.DEPTH_COMPONENT16),O}function D(M,_){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==pn&&M.minFilter!==En?Math.log2(Math.max(_.width,_.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?_.mipmaps.length:1}function A(M){const _=M.target;_.removeEventListener("dispose",A),U(_),_.isVideoTexture&&u.delete(_)}function w(M){const _=M.target;_.removeEventListener("dispose",w),S(_)}function U(M){const _=i.get(M);if(_.__webglInit===void 0)return;const O=M.source,j=h.get(O);if(j){const Z=j[_.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&E(M),Object.keys(j).length===0&&h.delete(O)}i.remove(M)}function E(M){const _=i.get(M);n.deleteTexture(_.__webglTexture);const O=M.source,j=h.get(O);delete j[_.__cacheKey],o.memory.textures--}function S(M){const _=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(_.__webglFramebuffer[j]))for(let Z=0;Z<_.__webglFramebuffer[j].length;Z++)n.deleteFramebuffer(_.__webglFramebuffer[j][Z]);else n.deleteFramebuffer(_.__webglFramebuffer[j]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[j])}else{if(Array.isArray(_.__webglFramebuffer))for(let j=0;j<_.__webglFramebuffer.length;j++)n.deleteFramebuffer(_.__webglFramebuffer[j]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let j=0;j<_.__webglColorRenderbuffer.length;j++)_.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[j]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const O=M.textures;for(let j=0,Z=O.length;j<Z;j++){const q=i.get(O[j]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(O[j])}i.remove(M)}let R=0;function F(){R=0}function B(){const M=R;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),R+=1,M}function X(M){const _=[];return _.push(M.wrapS),_.push(M.wrapT),_.push(M.wrapR||0),_.push(M.magFilter),_.push(M.minFilter),_.push(M.anisotropy),_.push(M.internalFormat),_.push(M.format),_.push(M.type),_.push(M.generateMipmaps),_.push(M.premultiplyAlpha),_.push(M.flipY),_.push(M.unpackAlignment),_.push(M.colorSpace),_.join()}function Y(M,_){const O=i.get(M);if(M.isVideoTexture&&xt(M),M.isRenderTargetTexture===!1&&M.version>0&&O.__version!==M.version){const j=M.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(O,M,_);return}}e.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+_)}function W(M,_){const O=i.get(M);if(M.version>0&&O.__version!==M.version){$(O,M,_);return}e.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+_)}function G(M,_){const O=i.get(M);if(M.version>0&&O.__version!==M.version){$(O,M,_);return}e.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+_)}function k(M,_){const O=i.get(M);if(M.version>0&&O.__version!==M.version){tt(O,M,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+_)}const et={[Xa]:n.REPEAT,[Ti]:n.CLAMP_TO_EDGE,[$a]:n.MIRRORED_REPEAT},st={[pn]:n.NEAREST,[vp]:n.NEAREST_MIPMAP_NEAREST,[xs]:n.NEAREST_MIPMAP_LINEAR,[En]:n.LINEAR,[ko]:n.LINEAR_MIPMAP_NEAREST,[Ai]:n.LINEAR_MIPMAP_LINEAR},vt={[yp]:n.NEVER,[Rp]:n.ALWAYS,[Mp]:n.LESS,[Kd]:n.LEQUAL,[bp]:n.EQUAL,[wp]:n.GEQUAL,[Tp]:n.GREATER,[Ap]:n.NOTEQUAL};function Nt(M,_){if(_.type===Fn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===En||_.magFilter===ko||_.magFilter===xs||_.magFilter===Ai||_.minFilter===En||_.minFilter===ko||_.minFilter===xs||_.minFilter===Ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(M,n.TEXTURE_WRAP_S,et[_.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,et[_.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,et[_.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,st[_.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,st[_.minFilter]),_.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,vt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===pn||_.minFilter!==xs&&_.minFilter!==Ai||_.type===Fn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");n.texParameterf(M,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Kt(M,_){let O=!1;M.__webglInit===void 0&&(M.__webglInit=!0,_.addEventListener("dispose",A));const j=_.source;let Z=h.get(j);Z===void 0&&(Z={},h.set(j,Z));const q=X(_);if(q!==M.__cacheKey){Z[q]===void 0&&(Z[q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Z[q].usedTimes++;const _t=Z[M.__cacheKey];_t!==void 0&&(Z[M.__cacheKey].usedTimes--,_t.usedTimes===0&&E(_)),M.__cacheKey=q,M.__webglTexture=Z[q].texture}return O}function $(M,_,O){let j=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(j=n.TEXTURE_3D);const Z=Kt(M,_),q=_.source;e.bindTexture(j,M.__webglTexture,n.TEXTURE0+O);const _t=i.get(q);if(q.version!==_t.__version||Z===!0){e.activeTexture(n.TEXTURE0+O);const at=Yt.getPrimaries(Yt.workingColorSpace),ht=_.colorSpace===ni?null:Yt.getPrimaries(_.colorSpace),Gt=_.colorSpace===ni||at===ht?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let Q=v(_.image,!1,r.maxTextureSize);Q=se(_,Q);const ft=s.convert(_.format,_.colorSpace),Tt=s.convert(_.type);let Rt=b(_.internalFormat,ft,Tt,_.colorSpace,_.isVideoTexture);Nt(j,_);let pt;const Ht=_.mipmaps,Lt=_.isVideoTexture!==!0,re=_t.__version===void 0||Z===!0,P=q.dataReady,ct=D(_,Q);if(_.isDepthTexture)Rt=y(_.format===Kr,_.type),re&&(Lt?e.texStorage2D(n.TEXTURE_2D,1,Rt,Q.width,Q.height):e.texImage2D(n.TEXTURE_2D,0,Rt,Q.width,Q.height,0,ft,Tt,null));else if(_.isDataTexture)if(Ht.length>0){Lt&&re&&e.texStorage2D(n.TEXTURE_2D,ct,Rt,Ht[0].width,Ht[0].height);for(let V=0,K=Ht.length;V<K;V++)pt=Ht[V],Lt?P&&e.texSubImage2D(n.TEXTURE_2D,V,0,0,pt.width,pt.height,ft,Tt,pt.data):e.texImage2D(n.TEXTURE_2D,V,Rt,pt.width,pt.height,0,ft,Tt,pt.data);_.generateMipmaps=!1}else Lt?(re&&e.texStorage2D(n.TEXTURE_2D,ct,Rt,Q.width,Q.height),P&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Q.width,Q.height,ft,Tt,Q.data)):e.texImage2D(n.TEXTURE_2D,0,Rt,Q.width,Q.height,0,ft,Tt,Q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Lt&&re&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ct,Rt,Ht[0].width,Ht[0].height,Q.depth);for(let V=0,K=Ht.length;V<K;V++)if(pt=Ht[V],_.format!==fn)if(ft!==null)if(Lt){if(P)if(_.layerUpdates.size>0){const ut=cu(pt.width,pt.height,_.format,_.type);for(const lt of _.layerUpdates){const It=pt.data.subarray(lt*ut/pt.data.BYTES_PER_ELEMENT,(lt+1)*ut/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,lt,pt.width,pt.height,1,ft,It)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,pt.width,pt.height,Q.depth,ft,pt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,V,Rt,pt.width,pt.height,Q.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Lt?P&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,pt.width,pt.height,Q.depth,ft,Tt,pt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,V,Rt,pt.width,pt.height,Q.depth,0,ft,Tt,pt.data)}else{Lt&&re&&e.texStorage2D(n.TEXTURE_2D,ct,Rt,Ht[0].width,Ht[0].height);for(let V=0,K=Ht.length;V<K;V++)pt=Ht[V],_.format!==fn?ft!==null?Lt?P&&e.compressedTexSubImage2D(n.TEXTURE_2D,V,0,0,pt.width,pt.height,ft,pt.data):e.compressedTexImage2D(n.TEXTURE_2D,V,Rt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Lt?P&&e.texSubImage2D(n.TEXTURE_2D,V,0,0,pt.width,pt.height,ft,Tt,pt.data):e.texImage2D(n.TEXTURE_2D,V,Rt,pt.width,pt.height,0,ft,Tt,pt.data)}else if(_.isDataArrayTexture)if(Lt){if(re&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ct,Rt,Q.width,Q.height,Q.depth),P)if(_.layerUpdates.size>0){const V=cu(Q.width,Q.height,_.format,_.type);for(const K of _.layerUpdates){const ut=Q.data.subarray(K*V/Q.data.BYTES_PER_ELEMENT,(K+1)*V/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,Q.width,Q.height,1,ft,Tt,ut)}_.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ft,Tt,Q.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Rt,Q.width,Q.height,Q.depth,0,ft,Tt,Q.data);else if(_.isData3DTexture)Lt?(re&&e.texStorage3D(n.TEXTURE_3D,ct,Rt,Q.width,Q.height,Q.depth),P&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ft,Tt,Q.data)):e.texImage3D(n.TEXTURE_3D,0,Rt,Q.width,Q.height,Q.depth,0,ft,Tt,Q.data);else if(_.isFramebufferTexture){if(re)if(Lt)e.texStorage2D(n.TEXTURE_2D,ct,Rt,Q.width,Q.height);else{let V=Q.width,K=Q.height;for(let ut=0;ut<ct;ut++)e.texImage2D(n.TEXTURE_2D,ut,Rt,V,K,0,ft,Tt,null),V>>=1,K>>=1}}else if(Ht.length>0){if(Lt&&re){const V=St(Ht[0]);e.texStorage2D(n.TEXTURE_2D,ct,Rt,V.width,V.height)}for(let V=0,K=Ht.length;V<K;V++)pt=Ht[V],Lt?P&&e.texSubImage2D(n.TEXTURE_2D,V,0,0,ft,Tt,pt):e.texImage2D(n.TEXTURE_2D,V,Rt,ft,Tt,pt);_.generateMipmaps=!1}else if(Lt){if(re){const V=St(Q);e.texStorage2D(n.TEXTURE_2D,ct,Rt,V.width,V.height)}P&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ft,Tt,Q)}else e.texImage2D(n.TEXTURE_2D,0,Rt,ft,Tt,Q);m(_)&&f(j),_t.__version=q.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function tt(M,_,O){if(_.image.length!==6)return;const j=Kt(M,_),Z=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+O);const q=i.get(Z);if(Z.version!==q.__version||j===!0){e.activeTexture(n.TEXTURE0+O);const _t=Yt.getPrimaries(Yt.workingColorSpace),at=_.colorSpace===ni?null:Yt.getPrimaries(_.colorSpace),ht=_.colorSpace===ni||_t===at?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const Gt=_.isCompressedTexture||_.image[0].isCompressedTexture,Q=_.image[0]&&_.image[0].isDataTexture,ft=[];for(let K=0;K<6;K++)!Gt&&!Q?ft[K]=v(_.image[K],!0,r.maxCubemapSize):ft[K]=Q?_.image[K].image:_.image[K],ft[K]=se(_,ft[K]);const Tt=ft[0],Rt=s.convert(_.format,_.colorSpace),pt=s.convert(_.type),Ht=b(_.internalFormat,Rt,pt,_.colorSpace),Lt=_.isVideoTexture!==!0,re=q.__version===void 0||j===!0,P=Z.dataReady;let ct=D(_,Tt);Nt(n.TEXTURE_CUBE_MAP,_);let V;if(Gt){Lt&&re&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ct,Ht,Tt.width,Tt.height);for(let K=0;K<6;K++){V=ft[K].mipmaps;for(let ut=0;ut<V.length;ut++){const lt=V[ut];_.format!==fn?Rt!==null?Lt?P&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut,0,0,lt.width,lt.height,Rt,lt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut,Ht,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Lt?P&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut,0,0,lt.width,lt.height,Rt,pt,lt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut,Ht,lt.width,lt.height,0,Rt,pt,lt.data)}}}else{if(V=_.mipmaps,Lt&&re){V.length>0&&ct++;const K=St(ft[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ct,Ht,K.width,K.height)}for(let K=0;K<6;K++)if(Q){Lt?P&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ft[K].width,ft[K].height,Rt,pt,ft[K].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ht,ft[K].width,ft[K].height,0,Rt,pt,ft[K].data);for(let ut=0;ut<V.length;ut++){const It=V[ut].image[K].image;Lt?P&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut+1,0,0,It.width,It.height,Rt,pt,It.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut+1,Ht,It.width,It.height,0,Rt,pt,It.data)}}else{Lt?P&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Rt,pt,ft[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ht,Rt,pt,ft[K]);for(let ut=0;ut<V.length;ut++){const lt=V[ut];Lt?P&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut+1,0,0,Rt,pt,lt.image[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut+1,Ht,Rt,pt,lt.image[K])}}}m(_)&&f(n.TEXTURE_CUBE_MAP),q.__version=Z.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function gt(M,_,O,j,Z,q){const _t=s.convert(O.format,O.colorSpace),at=s.convert(O.type),ht=b(O.internalFormat,_t,at,O.colorSpace),Gt=i.get(_),Q=i.get(O);if(Q.__renderTarget=_,!Gt.__hasExternalTextures){const ft=Math.max(1,_.width>>q),Tt=Math.max(1,_.height>>q);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?e.texImage3D(Z,q,ht,ft,Tt,_.depth,0,_t,at,null):e.texImage2D(Z,q,ht,ft,Tt,0,_t,at,null)}e.bindFramebuffer(n.FRAMEBUFFER,M),zt(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,Z,Q.__webglTexture,0,Vt(_)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,Z,Q.__webglTexture,q),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ot(M,_,O){if(n.bindRenderbuffer(n.RENDERBUFFER,M),_.depthBuffer){const j=_.depthTexture,Z=j&&j.isDepthTexture?j.type:null,q=y(_.stencilBuffer,Z),_t=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=Vt(_);zt(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,at,q,_.width,_.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,at,q,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,q,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,_t,n.RENDERBUFFER,M)}else{const j=_.textures;for(let Z=0;Z<j.length;Z++){const q=j[Z],_t=s.convert(q.format,q.colorSpace),at=s.convert(q.type),ht=b(q.internalFormat,_t,at,q.colorSpace),Gt=Vt(_);O&&zt(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Gt,ht,_.width,_.height):zt(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Gt,ht,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ht,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function bt(M,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,M),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=i.get(_.depthTexture);j.__renderTarget=_,(!j.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Y(_.depthTexture,0);const Z=j.__webglTexture,q=Vt(_);if(_.depthTexture.format===jr)zt(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(_.depthTexture.format===Kr)zt(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function jt(M){const _=i.get(M),O=M.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==M.depthTexture){const j=M.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),j){const Z=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,j.removeEventListener("dispose",Z)};j.addEventListener("dispose",Z),_.__depthDisposeCallback=Z}_.__boundDepthTexture=j}if(M.depthTexture&&!_.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");bt(_.__webglFramebuffer,M)}else if(O){_.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[j]),_.__webglDepthbuffer[j]===void 0)_.__webglDepthbuffer[j]=n.createRenderbuffer(),ot(_.__webglDepthbuffer[j],M,!1);else{const Z=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=_.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,q)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),ot(_.__webglDepthbuffer,M,!1);else{const j=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,Z)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function At(M,_,O){const j=i.get(M);_!==void 0&&gt(j.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&jt(M)}function fe(M){const _=M.texture,O=i.get(M),j=i.get(_);M.addEventListener("dispose",w);const Z=M.textures,q=M.isWebGLCubeRenderTarget===!0,_t=Z.length>1;if(_t||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=_.version,o.memory.textures++),q){O.__webglFramebuffer=[];for(let at=0;at<6;at++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[at]=[];for(let ht=0;ht<_.mipmaps.length;ht++)O.__webglFramebuffer[at][ht]=n.createFramebuffer()}else O.__webglFramebuffer[at]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let at=0;at<_.mipmaps.length;at++)O.__webglFramebuffer[at]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(_t)for(let at=0,ht=Z.length;at<ht;at++){const Gt=i.get(Z[at]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=n.createTexture(),o.memory.textures++)}if(M.samples>0&&zt(M)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let at=0;at<Z.length;at++){const ht=Z[at];O.__webglColorRenderbuffer[at]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[at]);const Gt=s.convert(ht.format,ht.colorSpace),Q=s.convert(ht.type),ft=b(ht.internalFormat,Gt,Q,ht.colorSpace,M.isXRRenderTarget===!0),Tt=Vt(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,Tt,ft,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.RENDERBUFFER,O.__webglColorRenderbuffer[at])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),ot(O.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){e.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),Nt(n.TEXTURE_CUBE_MAP,_);for(let at=0;at<6;at++)if(_.mipmaps&&_.mipmaps.length>0)for(let ht=0;ht<_.mipmaps.length;ht++)gt(O.__webglFramebuffer[at][ht],M,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,ht);else gt(O.__webglFramebuffer[at],M,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(_)&&f(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_t){for(let at=0,ht=Z.length;at<ht;at++){const Gt=Z[at],Q=i.get(Gt);e.bindTexture(n.TEXTURE_2D,Q.__webglTexture),Nt(n.TEXTURE_2D,Gt),gt(O.__webglFramebuffer,M,Gt,n.COLOR_ATTACHMENT0+at,n.TEXTURE_2D,0),m(Gt)&&f(n.TEXTURE_2D)}e.unbindTexture()}else{let at=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(at=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(at,j.__webglTexture),Nt(at,_),_.mipmaps&&_.mipmaps.length>0)for(let ht=0;ht<_.mipmaps.length;ht++)gt(O.__webglFramebuffer[ht],M,_,n.COLOR_ATTACHMENT0,at,ht);else gt(O.__webglFramebuffer,M,_,n.COLOR_ATTACHMENT0,at,0);m(_)&&f(at),e.unbindTexture()}M.depthBuffer&&jt(M)}function ce(M){const _=M.textures;for(let O=0,j=_.length;O<j;O++){const Z=_[O];if(m(Z)){const q=T(M),_t=i.get(Z).__webglTexture;e.bindTexture(q,_t),f(q),e.unbindTexture()}}}const kt=[],C=[];function je(M){if(M.samples>0){if(zt(M)===!1){const _=M.textures,O=M.width,j=M.height;let Z=n.COLOR_BUFFER_BIT;const q=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_t=i.get(M),at=_.length>1;if(at)for(let ht=0;ht<_.length;ht++)e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let ht=0;ht<_.length;ht++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),at){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_t.__webglColorRenderbuffer[ht]);const Gt=i.get(_[ht]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Gt,0)}n.blitFramebuffer(0,0,O,j,0,0,O,j,Z,n.NEAREST),c===!0&&(kt.length=0,C.length=0,kt.push(n.COLOR_ATTACHMENT0+ht),M.depthBuffer&&M.resolveDepthBuffer===!1&&(kt.push(q),C.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,C)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,kt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),at)for(let ht=0;ht<_.length;ht++){e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,_t.__webglColorRenderbuffer[ht]);const Gt=i.get(_[ht]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.TEXTURE_2D,Gt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&c){const _=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function Vt(M){return Math.min(r.maxSamples,M.samples)}function zt(M){const _=i.get(M);return M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function xt(M){const _=o.render.frame;u.get(M)!==_&&(u.set(M,_),M.update())}function se(M,_){const O=M.colorSpace,j=M.format,Z=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||O!==xr&&O!==ni&&(Yt.getTransfer(O)===ee?(j!==fn||Z!==Gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),_}function St(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(l.width=M.naturalWidth||M.width,l.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(l.width=M.displayWidth,l.height=M.displayHeight):(l.width=M.width,l.height=M.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=F,this.setTexture2D=Y,this.setTexture2DArray=W,this.setTexture3D=G,this.setTextureCube=k,this.rebindTextures=At,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=jt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=zt}function cS(n,t){function e(i,r=ni){let s;const o=Yt.getTransfer(r);if(i===Gn)return n.UNSIGNED_BYTE;if(i===$c)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Yc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Hd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===kd)return n.BYTE;if(i===zd)return n.SHORT;if(i===Yr)return n.UNSIGNED_SHORT;if(i===Xc)return n.INT;if(i===Di)return n.UNSIGNED_INT;if(i===Fn)return n.FLOAT;if(i===zn)return n.HALF_FLOAT;if(i===Vd)return n.ALPHA;if(i===Gd)return n.RGB;if(i===fn)return n.RGBA;if(i===Wd)return n.LUMINANCE;if(i===Xd)return n.LUMINANCE_ALPHA;if(i===jr)return n.DEPTH_COMPONENT;if(i===Kr)return n.DEPTH_STENCIL;if(i===$d)return n.RED;if(i===qc)return n.RED_INTEGER;if(i===Yd)return n.RG;if(i===jc)return n.RG_INTEGER;if(i===Kc)return n.RGBA_INTEGER;if(i===Js||i===Qs||i===to||i===eo)if(o===ee)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Js)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Qs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===to)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===eo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Js)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Qs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===to)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===eo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ya||i===qa||i===ja||i===Ka)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ya)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===qa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ja)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ka)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Za||i===Ja||i===Qa)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Za||i===Ja)return o===ee?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Qa)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===tc||i===ec||i===nc||i===ic||i===rc||i===sc||i===oc||i===ac||i===cc||i===lc||i===uc||i===dc||i===hc||i===fc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===tc)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ec)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===nc)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ic)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===rc)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===sc)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===oc)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ac)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===cc)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===lc)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===uc)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===dc)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===hc)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===fc)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===no||i===pc||i===mc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===no)return o===ee?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===pc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===mc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===qd||i===gc||i===_c||i===vc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===no)return s.COMPRESSED_RED_RGTC1_EXT;if(i===gc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===_c)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===vc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===qr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const lS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uS=`
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

}`;class dS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new Ne,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Ue({vertexShader:lS,fragmentShader:uS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new He(new Ao(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hS extends Hi{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,p=null,g=null;const v=new dS,m=e.getContextAttributes();let f=null,T=null;const b=[],y=[],D=new yt;let A=null;const w=new tn;w.viewport=new de;const U=new tn;U.viewport=new de;const E=[w,U],S=new Im;let R=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let tt=b[$];return tt===void 0&&(tt=new sa,b[$]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function($){let tt=b[$];return tt===void 0&&(tt=new sa,b[$]=tt),tt.getGripSpace()},this.getHand=function($){let tt=b[$];return tt===void 0&&(tt=new sa,b[$]=tt),tt.getHandSpace()};function B($){const tt=y.indexOf($.inputSource);if(tt===-1)return;const gt=b[tt];gt!==void 0&&(gt.update($.inputSource,$.frame,l||o),gt.dispatchEvent({type:$.type,data:$.inputSource}))}function X(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",Y);for(let $=0;$<b.length;$++){const tt=y[$];tt!==null&&(y[$]=null,b[$].disconnect(tt))}R=null,F=null,v.reset(),t.setRenderTarget(f),p=null,h=null,d=null,r=null,T=null,Kt.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(f=t.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",X),r.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(D),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let gt=null,ot=null,bt=null;m.depth&&(bt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,gt=m.stencil?Kr:jr,ot=m.stencil?qr:Di);const jt={colorFormat:e.RGBA8,depthFormat:bt,scaleFactor:s};d=new XRWebGLBinding(r,e),h=d.createProjectionLayer(jt),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),T=new mn(h.textureWidth,h.textureHeight,{format:fn,type:Gn,depthTexture:new ah(h.textureWidth,h.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const gt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,gt),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new mn(p.framebufferWidth,p.framebufferHeight,{format:fn,type:Gn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),Kt.setContext(r),Kt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Y($){for(let tt=0;tt<$.removed.length;tt++){const gt=$.removed[tt],ot=y.indexOf(gt);ot>=0&&(y[ot]=null,b[ot].disconnect(gt))}for(let tt=0;tt<$.added.length;tt++){const gt=$.added[tt];let ot=y.indexOf(gt);if(ot===-1){for(let jt=0;jt<b.length;jt++)if(jt>=y.length){y.push(gt),ot=jt;break}else if(y[jt]===null){y[jt]=gt,ot=jt;break}if(ot===-1)break}const bt=b[ot];bt&&bt.connect(gt)}}const W=new N,G=new N;function k($,tt,gt){W.setFromMatrixPosition(tt.matrixWorld),G.setFromMatrixPosition(gt.matrixWorld);const ot=W.distanceTo(G),bt=tt.projectionMatrix.elements,jt=gt.projectionMatrix.elements,At=bt[14]/(bt[10]-1),fe=bt[14]/(bt[10]+1),ce=(bt[9]+1)/bt[5],kt=(bt[9]-1)/bt[5],C=(bt[8]-1)/bt[0],je=(jt[8]+1)/jt[0],Vt=At*C,zt=At*je,xt=ot/(-C+je),se=xt*-C;if(tt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(se),$.translateZ(xt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),bt[10]===-1)$.projectionMatrix.copy(tt.projectionMatrix),$.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const St=At+xt,M=fe+xt,_=Vt-se,O=zt+(ot-se),j=ce*fe/M*St,Z=kt*fe/M*St;$.projectionMatrix.makePerspective(_,O,j,Z,St,M),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function et($,tt){tt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(tt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let tt=$.near,gt=$.far;v.texture!==null&&(v.depthNear>0&&(tt=v.depthNear),v.depthFar>0&&(gt=v.depthFar)),S.near=U.near=w.near=tt,S.far=U.far=w.far=gt,(R!==S.near||F!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,F=S.far),w.layers.mask=$.layers.mask|2,U.layers.mask=$.layers.mask|4,S.layers.mask=w.layers.mask|U.layers.mask;const ot=$.parent,bt=S.cameras;et(S,ot);for(let jt=0;jt<bt.length;jt++)et(bt[jt],ot);bt.length===2?k(S,w,U):S.projectionMatrix.copy(w.projectionMatrix),st($,S,ot)};function st($,tt,gt){gt===null?$.matrix.copy(tt.matrixWorld):($.matrix.copy(gt.matrixWorld),$.matrix.invert(),$.matrix.multiply(tt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(tt.projectionMatrix),$.projectionMatrixInverse.copy(tt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Zr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&p===null))return c},this.setFoveation=function($){c=$,h!==null&&(h.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let vt=null;function Nt($,tt){if(u=tt.getViewerPose(l||o),g=tt,u!==null){const gt=u.views;p!==null&&(t.setRenderTargetFramebuffer(T,p.framebuffer),t.setRenderTarget(T));let ot=!1;gt.length!==S.cameras.length&&(S.cameras.length=0,ot=!0);for(let At=0;At<gt.length;At++){const fe=gt[At];let ce=null;if(p!==null)ce=p.getViewport(fe);else{const C=d.getViewSubImage(h,fe);ce=C.viewport,At===0&&(t.setRenderTargetTextures(T,C.colorTexture,C.depthStencilTexture),t.setRenderTarget(T))}let kt=E[At];kt===void 0&&(kt=new tn,kt.layers.enable(At),kt.viewport=new de,E[At]=kt),kt.matrix.fromArray(fe.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(fe.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(ce.x,ce.y,ce.width,ce.height),At===0&&(S.matrix.copy(kt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ot===!0&&S.cameras.push(kt)}const bt=r.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&d){const At=d.getDepthInformation(gt[0]);At&&At.isValid&&At.texture&&v.init(t,At,r.renderState)}}for(let gt=0;gt<b.length;gt++){const ot=y[gt],bt=b[gt];ot!==null&&bt!==void 0&&bt.update(ot,tt,l||o)}vt&&vt($,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),g=null}const Kt=new lh;Kt.setAnimationLoop(Nt),this.setAnimationLoop=function($){vt=$},this.dispose=function(){}}}const xi=new bn,fS=new he;function pS(n,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,rh(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,T,b,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),v(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,T,b):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ve&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ve&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const T=t.get(f),b=T.envMap,y=T.envMapRotation;b&&(m.envMap.value=b,xi.copy(y),xi.x*=-1,xi.y*=-1,xi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),m.envMapRotation.value.setFromMatrix4(fS.makeRotationFromEuler(xi)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,T,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*T,m.scale.value=b*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,T){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ve&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const T=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function mS(n,t,e,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,b){const y=b.program;i.uniformBlockBinding(T,y)}function l(T,b){let y=r[T.id];y===void 0&&(g(T),y=u(T),r[T.id]=y,T.addEventListener("dispose",m));const D=b.program;i.updateUBOMapping(T,D);const A=t.render.frame;s[T.id]!==A&&(h(T),s[T.id]=A)}function u(T){const b=d();T.__bindingPointIndex=b;const y=n.createBuffer(),D=T.__size,A=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,D,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,y),y}function d(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){const b=r[T.id],y=T.uniforms,D=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let A=0,w=y.length;A<w;A++){const U=Array.isArray(y[A])?y[A]:[y[A]];for(let E=0,S=U.length;E<S;E++){const R=U[E];if(p(R,A,E,D)===!0){const F=R.__offset,B=Array.isArray(R.value)?R.value:[R.value];let X=0;for(let Y=0;Y<B.length;Y++){const W=B[Y],G=v(W);typeof W=="number"||typeof W=="boolean"?(R.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,F+X,R.__data)):W.isMatrix3?(R.__data[0]=W.elements[0],R.__data[1]=W.elements[1],R.__data[2]=W.elements[2],R.__data[3]=0,R.__data[4]=W.elements[3],R.__data[5]=W.elements[4],R.__data[6]=W.elements[5],R.__data[7]=0,R.__data[8]=W.elements[6],R.__data[9]=W.elements[7],R.__data[10]=W.elements[8],R.__data[11]=0):(W.toArray(R.__data,X),X+=G.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(T,b,y,D){const A=T.value,w=b+"_"+y;if(D[w]===void 0)return typeof A=="number"||typeof A=="boolean"?D[w]=A:D[w]=A.clone(),!0;{const U=D[w];if(typeof A=="number"||typeof A=="boolean"){if(U!==A)return D[w]=A,!0}else if(U.equals(A)===!1)return U.copy(A),!0}return!1}function g(T){const b=T.uniforms;let y=0;const D=16;for(let w=0,U=b.length;w<U;w++){const E=Array.isArray(b[w])?b[w]:[b[w]];for(let S=0,R=E.length;S<R;S++){const F=E[S],B=Array.isArray(F.value)?F.value:[F.value];for(let X=0,Y=B.length;X<Y;X++){const W=B[X],G=v(W),k=y%D,et=k%G.boundary,st=k+et;y+=et,st!==0&&D-st<G.storage&&(y+=D-st),F.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=G.storage}}}const A=y%D;return A>0&&(y+=D-A),T.__size=y,T.__cache={},this}function v(T){const b={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(b.boundary=4,b.storage=4):T.isVector2?(b.boundary=8,b.storage=8):T.isVector3||T.isColor?(b.boundary=16,b.storage=12):T.isVector4?(b.boundary=16,b.storage=16):T.isMatrix3?(b.boundary=48,b.storage=48):T.isMatrix4?(b.boundary=64,b.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),b}function m(T){const b=T.target;b.removeEventListener("dispose",m);const y=o.indexOf(b.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function f(){for(const T in r)n.deleteBuffer(r[T]);o=[],r={},s={}}return{bind:c,update:l,dispose:f}}class gS{constructor(t={}){const{canvas:e=Xp(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,f=null;const T=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let D=!1;this._outputColorSpace=Qe;let A=0,w=0,U=null,E=-1,S=null;const R=new de,F=new de;let B=null;const X=new Bt(0);let Y=0,W=e.width,G=e.height,k=1,et=null,st=null;const vt=new de(0,0,W,G),Nt=new de(0,0,W,G);let Kt=!1;const $=new el;let tt=!1,gt=!1;const ot=new he,bt=new he,jt=new N,At=new de,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ce=!1;function kt(){return U===null?k:1}let C=i;function je(x,I){return e.getContext(x,I)}try{const x={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Wc}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",ut,!1),e.addEventListener("webglcontextcreationerror",lt,!1),C===null){const I="webgl2";if(C=je(I,x),C===null)throw je(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Vt,zt,xt,se,St,M,_,O,j,Z,q,_t,at,ht,Gt,Q,ft,Tt,Rt,pt,Ht,Lt,re,P;function ct(){Vt=new Av(C),Vt.init(),Lt=new cS(C,Vt),zt=new Sv(C,Vt,t,Lt),xt=new oS(C,Vt),zt.reverseDepthBuffer&&h&&xt.buffers.depth.setReversed(!0),se=new Cv(C),St=new Y0,M=new aS(C,Vt,xt,St,zt,Lt,se),_=new Ev(y),O=new Tv(y),j=new Nm(C),re=new _v(C,j),Z=new wv(C,j,se,re),q=new Iv(C,Z,j,se),Rt=new Pv(C,zt,M),Q=new xv(St),_t=new $0(y,_,O,Vt,zt,re,Q),at=new pS(y,St),ht=new j0,Gt=new eS(Vt),Tt=new gv(y,_,O,xt,q,p,c),ft=new rS(y,q,zt),P=new mS(C,se,zt,xt),pt=new vv(C,Vt,se),Ht=new Rv(C,Vt,se),se.programs=_t.programs,y.capabilities=zt,y.extensions=Vt,y.properties=St,y.renderLists=ht,y.shadowMap=ft,y.state=xt,y.info=se}ct();const V=new hS(y,C);this.xr=V,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const x=Vt.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Vt.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(x){x!==void 0&&(k=x,this.setSize(W,G,!1))},this.getSize=function(x){return x.set(W,G)},this.setSize=function(x,I,z=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=x,G=I,e.width=Math.floor(x*k),e.height=Math.floor(I*k),z===!0&&(e.style.width=x+"px",e.style.height=I+"px"),this.setViewport(0,0,x,I)},this.getDrawingBufferSize=function(x){return x.set(W*k,G*k).floor()},this.setDrawingBufferSize=function(x,I,z){W=x,G=I,k=z,e.width=Math.floor(x*z),e.height=Math.floor(I*z),this.setViewport(0,0,x,I)},this.getCurrentViewport=function(x){return x.copy(R)},this.getViewport=function(x){return x.copy(vt)},this.setViewport=function(x,I,z,H){x.isVector4?vt.set(x.x,x.y,x.z,x.w):vt.set(x,I,z,H),xt.viewport(R.copy(vt).multiplyScalar(k).round())},this.getScissor=function(x){return x.copy(Nt)},this.setScissor=function(x,I,z,H){x.isVector4?Nt.set(x.x,x.y,x.z,x.w):Nt.set(x,I,z,H),xt.scissor(F.copy(Nt).multiplyScalar(k).round())},this.getScissorTest=function(){return Kt},this.setScissorTest=function(x){xt.setScissorTest(Kt=x)},this.setOpaqueSort=function(x){et=x},this.setTransparentSort=function(x){st=x},this.getClearColor=function(x){return x.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor(...arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha(...arguments)},this.clear=function(x=!0,I=!0,z=!0){let H=0;if(x){let L=!1;if(U!==null){const J=U.texture.format;L=J===Kc||J===jc||J===qc}if(L){const J=U.texture.type,rt=J===Gn||J===Di||J===Yr||J===qr||J===$c||J===Yc,dt=Tt.getClearColor(),mt=Tt.getClearAlpha(),Ct=dt.r,wt=dt.g,Et=dt.b;rt?(g[0]=Ct,g[1]=wt,g[2]=Et,g[3]=mt,C.clearBufferuiv(C.COLOR,0,g)):(v[0]=Ct,v[1]=wt,v[2]=Et,v[3]=mt,C.clearBufferiv(C.COLOR,0,v))}else H|=C.COLOR_BUFFER_BIT}I&&(H|=C.DEPTH_BUFFER_BIT),z&&(H|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",ut,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),Tt.dispose(),ht.dispose(),Gt.dispose(),St.dispose(),_.dispose(),O.dispose(),q.dispose(),re.dispose(),P.dispose(),_t.dispose(),V.dispose(),V.removeEventListener("sessionstart",Al),V.removeEventListener("sessionend",wl),fi.stop()};function K(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function ut(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const x=se.autoReset,I=ft.enabled,z=ft.autoUpdate,H=ft.needsUpdate,L=ft.type;ct(),se.autoReset=x,ft.enabled=I,ft.autoUpdate=z,ft.needsUpdate=H,ft.type=L}function lt(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function It(x){const I=x.target;I.removeEventListener("dispose",It),le(I)}function le(x){Ae(x),St.remove(x)}function Ae(x){const I=St.get(x).programs;I!==void 0&&(I.forEach(function(z){_t.releaseProgram(z)}),x.isShaderMaterial&&_t.releaseShaderCache(x))}this.renderBufferDirect=function(x,I,z,H,L,J){I===null&&(I=fe);const rt=L.isMesh&&L.matrixWorld.determinant()<0,dt=Ff(x,I,z,H,L);xt.setMaterial(H,rt);let mt=z.index,Ct=1;if(H.wireframe===!0){if(mt=Z.getWireframeAttribute(z),mt===void 0)return;Ct=2}const wt=z.drawRange,Et=z.attributes.position;let Wt=wt.start*Ct,Zt=(wt.start+wt.count)*Ct;J!==null&&(Wt=Math.max(Wt,J.start*Ct),Zt=Math.min(Zt,(J.start+J.count)*Ct)),mt!==null?(Wt=Math.max(Wt,0),Zt=Math.min(Zt,mt.count)):Et!=null&&(Wt=Math.max(Wt,0),Zt=Math.min(Zt,Et.count));const me=Zt-Wt;if(me<0||me===1/0)return;re.setup(L,H,dt,z,mt);let ue,$t=pt;if(mt!==null&&(ue=j.get(mt),$t=Ht,$t.setIndex(ue)),L.isMesh)H.wireframe===!0?(xt.setLineWidth(H.wireframeLinewidth*kt()),$t.setMode(C.LINES)):$t.setMode(C.TRIANGLES);else if(L.isLine){let Mt=H.linewidth;Mt===void 0&&(Mt=1),xt.setLineWidth(Mt*kt()),L.isLineSegments?$t.setMode(C.LINES):L.isLineLoop?$t.setMode(C.LINE_LOOP):$t.setMode(C.LINE_STRIP)}else L.isPoints?$t.setMode(C.POINTS):L.isSprite&&$t.setMode(C.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)io("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),$t.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(Vt.get("WEBGL_multi_draw"))$t.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{const Mt=L._multiDrawStarts,Me=L._multiDrawCounts,Jt=L._multiDrawCount,cn=mt?j.get(mt).bytesPerElement:1,Yi=St.get(H).currentProgram.getUniforms();for(let Ge=0;Ge<Jt;Ge++)Yi.setValue(C,"_gl_DrawID",Ge),$t.render(Mt[Ge]/cn,Me[Ge])}else if(L.isInstancedMesh)$t.renderInstances(Wt,me,L.count);else if(z.isInstancedBufferGeometry){const Mt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Me=Math.min(z.instanceCount,Mt);$t.renderInstances(Wt,me,Me)}else $t.render(Wt,me)};function Qt(x,I,z){x.transparent===!0&&x.side===Nn&&x.forceSinglePass===!1?(x.side=Ve,x.needsUpdate=!0,Ss(x,I,z),x.side=si,x.needsUpdate=!0,Ss(x,I,z),x.side=Nn):Ss(x,I,z)}this.compile=function(x,I,z=null){z===null&&(z=x),f=Gt.get(z),f.init(I),b.push(f),z.traverseVisible(function(L){L.isLight&&L.layers.test(I.layers)&&(f.pushLight(L),L.castShadow&&f.pushShadow(L))}),x!==z&&x.traverseVisible(function(L){L.isLight&&L.layers.test(I.layers)&&(f.pushLight(L),L.castShadow&&f.pushShadow(L))}),f.setupLights();const H=new Set;return x.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;const J=L.material;if(J)if(Array.isArray(J))for(let rt=0;rt<J.length;rt++){const dt=J[rt];Qt(dt,z,L),H.add(dt)}else Qt(J,z,L),H.add(J)}),f=b.pop(),H},this.compileAsync=function(x,I,z=null){const H=this.compile(x,I,z);return new Promise(L=>{function J(){if(H.forEach(function(rt){St.get(rt).currentProgram.isReady()&&H.delete(rt)}),H.size===0){L(x);return}setTimeout(J,10)}Vt.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let an=null;function Tn(x){an&&an(x)}function Al(){fi.stop()}function wl(){fi.start()}const fi=new lh;fi.setAnimationLoop(Tn),typeof self<"u"&&fi.setContext(self),this.setAnimationLoop=function(x){an=x,V.setAnimationLoop(x),x===null?fi.stop():fi.start()},V.addEventListener("sessionstart",Al),V.addEventListener("sessionend",wl),this.render=function(x,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(I),I=V.getCamera()),x.isScene===!0&&x.onBeforeRender(y,x,I,U),f=Gt.get(x,b.length),f.init(I),b.push(f),bt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),$.setFromProjectionMatrix(bt),gt=this.localClippingEnabled,tt=Q.init(this.clippingPlanes,gt),m=ht.get(x,T.length),m.init(),T.push(m),V.enabled===!0&&V.isPresenting===!0){const J=y.xr.getDepthSensingMesh();J!==null&&Oo(J,I,-1/0,y.sortObjects)}Oo(x,I,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(et,st),ce=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,ce&&Tt.addToRenderList(m,x),this.info.render.frame++,tt===!0&&Q.beginShadows();const z=f.state.shadowsArray;ft.render(z,x,I),tt===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,L=m.transmissive;if(f.setupLights(),I.isArrayCamera){const J=I.cameras;if(L.length>0)for(let rt=0,dt=J.length;rt<dt;rt++){const mt=J[rt];Cl(H,L,x,mt)}ce&&Tt.render(x);for(let rt=0,dt=J.length;rt<dt;rt++){const mt=J[rt];Rl(m,x,mt,mt.viewport)}}else L.length>0&&Cl(H,L,x,I),ce&&Tt.render(x),Rl(m,x,I);U!==null&&w===0&&(M.updateMultisampleRenderTarget(U),M.updateRenderTargetMipmap(U)),x.isScene===!0&&x.onAfterRender(y,x,I),re.resetDefaultState(),E=-1,S=null,b.pop(),b.length>0?(f=b[b.length-1],tt===!0&&Q.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Oo(x,I,z,H){if(x.visible===!1)return;if(x.layers.test(I.layers)){if(x.isGroup)z=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(I);else if(x.isLight)f.pushLight(x),x.castShadow&&f.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||$.intersectsSprite(x)){H&&At.setFromMatrixPosition(x.matrixWorld).applyMatrix4(bt);const rt=q.update(x),dt=x.material;dt.visible&&m.push(x,rt,dt,z,At.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||$.intersectsObject(x))){const rt=q.update(x),dt=x.material;if(H&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),At.copy(x.boundingSphere.center)):(rt.boundingSphere===null&&rt.computeBoundingSphere(),At.copy(rt.boundingSphere.center)),At.applyMatrix4(x.matrixWorld).applyMatrix4(bt)),Array.isArray(dt)){const mt=rt.groups;for(let Ct=0,wt=mt.length;Ct<wt;Ct++){const Et=mt[Ct],Wt=dt[Et.materialIndex];Wt&&Wt.visible&&m.push(x,rt,Wt,z,At.z,Et)}}else dt.visible&&m.push(x,rt,dt,z,At.z,null)}}const J=x.children;for(let rt=0,dt=J.length;rt<dt;rt++)Oo(J[rt],I,z,H)}function Rl(x,I,z,H){const L=x.opaque,J=x.transmissive,rt=x.transparent;f.setupLightsView(z),tt===!0&&Q.setGlobalState(y.clippingPlanes,z),H&&xt.viewport(R.copy(H)),L.length>0&&vs(L,I,z),J.length>0&&vs(J,I,z),rt.length>0&&vs(rt,I,z),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function Cl(x,I,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[H.id]===void 0&&(f.state.transmissionRenderTarget[H.id]=new mn(1,1,{generateMipmaps:!0,type:Vt.has("EXT_color_buffer_half_float")||Vt.has("EXT_color_buffer_float")?zn:Gn,minFilter:Ai,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));const J=f.state.transmissionRenderTarget[H.id],rt=H.viewport||R;J.setSize(rt.z*y.transmissionResolutionScale,rt.w*y.transmissionResolutionScale);const dt=y.getRenderTarget();y.setRenderTarget(J),y.getClearColor(X),Y=y.getClearAlpha(),Y<1&&y.setClearColor(16777215,.5),y.clear(),ce&&Tt.render(z);const mt=y.toneMapping;y.toneMapping=ii;const Ct=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),f.setupLightsView(H),tt===!0&&Q.setGlobalState(y.clippingPlanes,H),vs(x,z,H),M.updateMultisampleRenderTarget(J),M.updateRenderTargetMipmap(J),Vt.has("WEBGL_multisampled_render_to_texture")===!1){let wt=!1;for(let Et=0,Wt=I.length;Et<Wt;Et++){const Zt=I[Et],me=Zt.object,ue=Zt.geometry,$t=Zt.material,Mt=Zt.group;if($t.side===Nn&&me.layers.test(H.layers)){const Me=$t.side;$t.side=Ve,$t.needsUpdate=!0,Pl(me,z,H,ue,$t,Mt),$t.side=Me,$t.needsUpdate=!0,wt=!0}}wt===!0&&(M.updateMultisampleRenderTarget(J),M.updateRenderTargetMipmap(J))}y.setRenderTarget(dt),y.setClearColor(X,Y),Ct!==void 0&&(H.viewport=Ct),y.toneMapping=mt}function vs(x,I,z){const H=I.isScene===!0?I.overrideMaterial:null;for(let L=0,J=x.length;L<J;L++){const rt=x[L],dt=rt.object,mt=rt.geometry,Ct=rt.group;let wt=rt.material;wt.allowOverride===!0&&H!==null&&(wt=H),dt.layers.test(z.layers)&&Pl(dt,I,z,mt,wt,Ct)}}function Pl(x,I,z,H,L,J){x.onBeforeRender(y,I,z,H,L,J),x.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),L.onBeforeRender(y,I,z,H,x,J),L.transparent===!0&&L.side===Nn&&L.forceSinglePass===!1?(L.side=Ve,L.needsUpdate=!0,y.renderBufferDirect(z,I,H,L,x,J),L.side=si,L.needsUpdate=!0,y.renderBufferDirect(z,I,H,L,x,J),L.side=Nn):y.renderBufferDirect(z,I,H,L,x,J),x.onAfterRender(y,I,z,H,L,J)}function Ss(x,I,z){I.isScene!==!0&&(I=fe);const H=St.get(x),L=f.state.lights,J=f.state.shadowsArray,rt=L.state.version,dt=_t.getParameters(x,L.state,J,I,z),mt=_t.getProgramCacheKey(dt);let Ct=H.programs;H.environment=x.isMeshStandardMaterial?I.environment:null,H.fog=I.fog,H.envMap=(x.isMeshStandardMaterial?O:_).get(x.envMap||H.environment),H.envMapRotation=H.environment!==null&&x.envMap===null?I.environmentRotation:x.envMapRotation,Ct===void 0&&(x.addEventListener("dispose",It),Ct=new Map,H.programs=Ct);let wt=Ct.get(mt);if(wt!==void 0){if(H.currentProgram===wt&&H.lightsStateVersion===rt)return Dl(x,dt),wt}else dt.uniforms=_t.getUniforms(x),x.onBeforeCompile(dt,y),wt=_t.acquireProgram(dt,mt),Ct.set(mt,wt),H.uniforms=dt.uniforms;const Et=H.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Et.clippingPlanes=Q.uniform),Dl(x,dt),H.needsLights=Bf(x),H.lightsStateVersion=rt,H.needsLights&&(Et.ambientLightColor.value=L.state.ambient,Et.lightProbe.value=L.state.probe,Et.directionalLights.value=L.state.directional,Et.directionalLightShadows.value=L.state.directionalShadow,Et.spotLights.value=L.state.spot,Et.spotLightShadows.value=L.state.spotShadow,Et.rectAreaLights.value=L.state.rectArea,Et.ltc_1.value=L.state.rectAreaLTC1,Et.ltc_2.value=L.state.rectAreaLTC2,Et.pointLights.value=L.state.point,Et.pointLightShadows.value=L.state.pointShadow,Et.hemisphereLights.value=L.state.hemi,Et.directionalShadowMap.value=L.state.directionalShadowMap,Et.directionalShadowMatrix.value=L.state.directionalShadowMatrix,Et.spotShadowMap.value=L.state.spotShadowMap,Et.spotLightMatrix.value=L.state.spotLightMatrix,Et.spotLightMap.value=L.state.spotLightMap,Et.pointShadowMap.value=L.state.pointShadowMap,Et.pointShadowMatrix.value=L.state.pointShadowMatrix),H.currentProgram=wt,H.uniformsList=null,wt}function Il(x){if(x.uniformsList===null){const I=x.currentProgram.getUniforms();x.uniformsList=ro.seqWithValue(I.seq,x.uniforms)}return x.uniformsList}function Dl(x,I){const z=St.get(x);z.outputColorSpace=I.outputColorSpace,z.batching=I.batching,z.batchingColor=I.batchingColor,z.instancing=I.instancing,z.instancingColor=I.instancingColor,z.instancingMorph=I.instancingMorph,z.skinning=I.skinning,z.morphTargets=I.morphTargets,z.morphNormals=I.morphNormals,z.morphColors=I.morphColors,z.morphTargetsCount=I.morphTargetsCount,z.numClippingPlanes=I.numClippingPlanes,z.numIntersection=I.numClipIntersection,z.vertexAlphas=I.vertexAlphas,z.vertexTangents=I.vertexTangents,z.toneMapping=I.toneMapping}function Ff(x,I,z,H,L){I.isScene!==!0&&(I=fe),M.resetTextureUnits();const J=I.fog,rt=H.isMeshStandardMaterial?I.environment:null,dt=U===null?y.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:xr,mt=(H.isMeshStandardMaterial?O:_).get(H.envMap||rt),Ct=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,wt=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Et=!!z.morphAttributes.position,Wt=!!z.morphAttributes.normal,Zt=!!z.morphAttributes.color;let me=ii;H.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(me=y.toneMapping);const ue=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,$t=ue!==void 0?ue.length:0,Mt=St.get(H),Me=f.state.lights;if(tt===!0&&(gt===!0||x!==S)){const Ie=x===S&&H.id===E;Q.setState(H,x,Ie)}let Jt=!1;H.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==Me.state.version||Mt.outputColorSpace!==dt||L.isBatchedMesh&&Mt.batching===!1||!L.isBatchedMesh&&Mt.batching===!0||L.isBatchedMesh&&Mt.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&Mt.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&Mt.instancing===!1||!L.isInstancedMesh&&Mt.instancing===!0||L.isSkinnedMesh&&Mt.skinning===!1||!L.isSkinnedMesh&&Mt.skinning===!0||L.isInstancedMesh&&Mt.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&Mt.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&Mt.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&Mt.instancingMorph===!1&&L.morphTexture!==null||Mt.envMap!==mt||H.fog===!0&&Mt.fog!==J||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==Q.numPlanes||Mt.numIntersection!==Q.numIntersection)||Mt.vertexAlphas!==Ct||Mt.vertexTangents!==wt||Mt.morphTargets!==Et||Mt.morphNormals!==Wt||Mt.morphColors!==Zt||Mt.toneMapping!==me||Mt.morphTargetsCount!==$t)&&(Jt=!0):(Jt=!0,Mt.__version=H.version);let cn=Mt.currentProgram;Jt===!0&&(cn=Ss(H,I,L));let Yi=!1,Ge=!1,Fr=!1;const oe=cn.getUniforms(),Ke=Mt.uniforms;if(xt.useProgram(cn.program)&&(Yi=!0,Ge=!0,Fr=!0),H.id!==E&&(E=H.id,Ge=!0),Yi||S!==x){xt.buffers.depth.getReversed()?(ot.copy(x.projectionMatrix),Yp(ot),qp(ot),oe.setValue(C,"projectionMatrix",ot)):oe.setValue(C,"projectionMatrix",x.projectionMatrix),oe.setValue(C,"viewMatrix",x.matrixWorldInverse);const Be=oe.map.cameraPosition;Be!==void 0&&Be.setValue(C,jt.setFromMatrixPosition(x.matrixWorld)),zt.logarithmicDepthBuffer&&oe.setValue(C,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&oe.setValue(C,"isOrthographic",x.isOrthographicCamera===!0),S!==x&&(S=x,Ge=!0,Fr=!0)}if(L.isSkinnedMesh){oe.setOptional(C,L,"bindMatrix"),oe.setOptional(C,L,"bindMatrixInverse");const Ie=L.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),oe.setValue(C,"boneTexture",Ie.boneTexture,M))}L.isBatchedMesh&&(oe.setOptional(C,L,"batchingTexture"),oe.setValue(C,"batchingTexture",L._matricesTexture,M),oe.setOptional(C,L,"batchingIdTexture"),oe.setValue(C,"batchingIdTexture",L._indirectTexture,M),oe.setOptional(C,L,"batchingColorTexture"),L._colorsTexture!==null&&oe.setValue(C,"batchingColorTexture",L._colorsTexture,M));const Ze=z.morphAttributes;if((Ze.position!==void 0||Ze.normal!==void 0||Ze.color!==void 0)&&Rt.update(L,z,cn),(Ge||Mt.receiveShadow!==L.receiveShadow)&&(Mt.receiveShadow=L.receiveShadow,oe.setValue(C,"receiveShadow",L.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Ke.envMap.value=mt,Ke.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&I.environment!==null&&(Ke.envMapIntensity.value=I.environmentIntensity),Ge&&(oe.setValue(C,"toneMappingExposure",y.toneMappingExposure),Mt.needsLights&&Of(Ke,Fr),J&&H.fog===!0&&at.refreshFogUniforms(Ke,J),at.refreshMaterialUniforms(Ke,H,k,G,f.state.transmissionRenderTarget[x.id]),ro.upload(C,Il(Mt),Ke,M)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ro.upload(C,Il(Mt),Ke,M),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&oe.setValue(C,"center",L.center),oe.setValue(C,"modelViewMatrix",L.modelViewMatrix),oe.setValue(C,"normalMatrix",L.normalMatrix),oe.setValue(C,"modelMatrix",L.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Ie=H.uniformsGroups;for(let Be=0,Bo=Ie.length;Be<Bo;Be++){const pi=Ie[Be];P.update(pi,cn),P.bind(pi,cn)}}return cn}function Of(x,I){x.ambientLightColor.needsUpdate=I,x.lightProbe.needsUpdate=I,x.directionalLights.needsUpdate=I,x.directionalLightShadows.needsUpdate=I,x.pointLights.needsUpdate=I,x.pointLightShadows.needsUpdate=I,x.spotLights.needsUpdate=I,x.spotLightShadows.needsUpdate=I,x.rectAreaLights.needsUpdate=I,x.hemisphereLights.needsUpdate=I}function Bf(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(x,I,z){const H=St.get(x);H.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),St.get(x.texture).__webglTexture=I,St.get(x.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:z,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,I){const z=St.get(x);z.__webglFramebuffer=I,z.__useDefaultFramebuffer=I===void 0};const kf=C.createFramebuffer();this.setRenderTarget=function(x,I=0,z=0){U=x,A=I,w=z;let H=!0,L=null,J=!1,rt=!1;if(x){const mt=St.get(x);if(mt.__useDefaultFramebuffer!==void 0)xt.bindFramebuffer(C.FRAMEBUFFER,null),H=!1;else if(mt.__webglFramebuffer===void 0)M.setupRenderTarget(x);else if(mt.__hasExternalTextures)M.rebindTextures(x,St.get(x.texture).__webglTexture,St.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Et=x.depthTexture;if(mt.__boundDepthTexture!==Et){if(Et!==null&&St.has(Et)&&(x.width!==Et.image.width||x.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(x)}}const Ct=x.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(rt=!0);const wt=St.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(wt[I])?L=wt[I][z]:L=wt[I],J=!0):x.samples>0&&M.useMultisampledRTT(x)===!1?L=St.get(x).__webglMultisampledFramebuffer:Array.isArray(wt)?L=wt[z]:L=wt,R.copy(x.viewport),F.copy(x.scissor),B=x.scissorTest}else R.copy(vt).multiplyScalar(k).floor(),F.copy(Nt).multiplyScalar(k).floor(),B=Kt;if(z!==0&&(L=kf),xt.bindFramebuffer(C.FRAMEBUFFER,L)&&H&&xt.drawBuffers(x,L),xt.viewport(R),xt.scissor(F),xt.setScissorTest(B),J){const mt=St.get(x.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+I,mt.__webglTexture,z)}else if(rt){const mt=St.get(x.texture),Ct=I;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,mt.__webglTexture,z,Ct)}else if(x!==null&&z!==0){const mt=St.get(x.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,mt.__webglTexture,z)}E=-1},this.readRenderTargetPixels=function(x,I,z,H,L,J,rt){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let dt=St.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&rt!==void 0&&(dt=dt[rt]),dt){xt.bindFramebuffer(C.FRAMEBUFFER,dt);try{const mt=x.texture,Ct=mt.format,wt=mt.type;if(!zt.textureFormatReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!zt.textureTypeReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=x.width-H&&z>=0&&z<=x.height-L&&C.readPixels(I,z,H,L,Lt.convert(Ct),Lt.convert(wt),J)}finally{const mt=U!==null?St.get(U).__webglFramebuffer:null;xt.bindFramebuffer(C.FRAMEBUFFER,mt)}}},this.readRenderTargetPixelsAsync=async function(x,I,z,H,L,J,rt){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let dt=St.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&rt!==void 0&&(dt=dt[rt]),dt)if(I>=0&&I<=x.width-H&&z>=0&&z<=x.height-L){xt.bindFramebuffer(C.FRAMEBUFFER,dt);const mt=x.texture,Ct=mt.format,wt=mt.type;if(!zt.textureFormatReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!zt.textureTypeReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Et=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Et),C.bufferData(C.PIXEL_PACK_BUFFER,J.byteLength,C.STREAM_READ),C.readPixels(I,z,H,L,Lt.convert(Ct),Lt.convert(wt),0);const Wt=U!==null?St.get(U).__webglFramebuffer:null;xt.bindFramebuffer(C.FRAMEBUFFER,Wt);const Zt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await $p(C,Zt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Et),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,J),C.deleteBuffer(Et),C.deleteSync(Zt),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,I=null,z=0){const H=Math.pow(2,-z),L=Math.floor(x.image.width*H),J=Math.floor(x.image.height*H),rt=I!==null?I.x:0,dt=I!==null?I.y:0;M.setTexture2D(x,0),C.copyTexSubImage2D(C.TEXTURE_2D,z,0,0,rt,dt,L,J),xt.unbindTexture()};const zf=C.createFramebuffer(),Hf=C.createFramebuffer();this.copyTextureToTexture=function(x,I,z=null,H=null,L=0,J=null){J===null&&(L!==0?(io("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),J=L,L=0):J=0);let rt,dt,mt,Ct,wt,Et,Wt,Zt,me;const ue=x.isCompressedTexture?x.mipmaps[J]:x.image;if(z!==null)rt=z.max.x-z.min.x,dt=z.max.y-z.min.y,mt=z.isBox3?z.max.z-z.min.z:1,Ct=z.min.x,wt=z.min.y,Et=z.isBox3?z.min.z:0;else{const Ze=Math.pow(2,-L);rt=Math.floor(ue.width*Ze),dt=Math.floor(ue.height*Ze),x.isDataArrayTexture?mt=ue.depth:x.isData3DTexture?mt=Math.floor(ue.depth*Ze):mt=1,Ct=0,wt=0,Et=0}H!==null?(Wt=H.x,Zt=H.y,me=H.z):(Wt=0,Zt=0,me=0);const $t=Lt.convert(I.format),Mt=Lt.convert(I.type);let Me;I.isData3DTexture?(M.setTexture3D(I,0),Me=C.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(M.setTexture2DArray(I,0),Me=C.TEXTURE_2D_ARRAY):(M.setTexture2D(I,0),Me=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,I.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,I.unpackAlignment);const Jt=C.getParameter(C.UNPACK_ROW_LENGTH),cn=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Yi=C.getParameter(C.UNPACK_SKIP_PIXELS),Ge=C.getParameter(C.UNPACK_SKIP_ROWS),Fr=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,ue.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ue.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ct),C.pixelStorei(C.UNPACK_SKIP_ROWS,wt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Et);const oe=x.isDataArrayTexture||x.isData3DTexture,Ke=I.isDataArrayTexture||I.isData3DTexture;if(x.isDepthTexture){const Ze=St.get(x),Ie=St.get(I),Be=St.get(Ze.__renderTarget),Bo=St.get(Ie.__renderTarget);xt.bindFramebuffer(C.READ_FRAMEBUFFER,Be.__webglFramebuffer),xt.bindFramebuffer(C.DRAW_FRAMEBUFFER,Bo.__webglFramebuffer);for(let pi=0;pi<mt;pi++)oe&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,St.get(x).__webglTexture,L,Et+pi),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,St.get(I).__webglTexture,J,me+pi)),C.blitFramebuffer(Ct,wt,rt,dt,Wt,Zt,rt,dt,C.DEPTH_BUFFER_BIT,C.NEAREST);xt.bindFramebuffer(C.READ_FRAMEBUFFER,null),xt.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(L!==0||x.isRenderTargetTexture||St.has(x)){const Ze=St.get(x),Ie=St.get(I);xt.bindFramebuffer(C.READ_FRAMEBUFFER,zf),xt.bindFramebuffer(C.DRAW_FRAMEBUFFER,Hf);for(let Be=0;Be<mt;Be++)oe?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ze.__webglTexture,L,Et+Be):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ze.__webglTexture,L),Ke?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ie.__webglTexture,J,me+Be):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ie.__webglTexture,J),L!==0?C.blitFramebuffer(Ct,wt,rt,dt,Wt,Zt,rt,dt,C.COLOR_BUFFER_BIT,C.NEAREST):Ke?C.copyTexSubImage3D(Me,J,Wt,Zt,me+Be,Ct,wt,rt,dt):C.copyTexSubImage2D(Me,J,Wt,Zt,Ct,wt,rt,dt);xt.bindFramebuffer(C.READ_FRAMEBUFFER,null),xt.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Ke?x.isDataTexture||x.isData3DTexture?C.texSubImage3D(Me,J,Wt,Zt,me,rt,dt,mt,$t,Mt,ue.data):I.isCompressedArrayTexture?C.compressedTexSubImage3D(Me,J,Wt,Zt,me,rt,dt,mt,$t,ue.data):C.texSubImage3D(Me,J,Wt,Zt,me,rt,dt,mt,$t,Mt,ue):x.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,J,Wt,Zt,rt,dt,$t,Mt,ue.data):x.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,J,Wt,Zt,ue.width,ue.height,$t,ue.data):C.texSubImage2D(C.TEXTURE_2D,J,Wt,Zt,rt,dt,$t,Mt,ue);C.pixelStorei(C.UNPACK_ROW_LENGTH,Jt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,cn),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Yi),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ge),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Fr),J===0&&I.generateMipmaps&&C.generateMipmap(Me),xt.unbindTexture()},this.copyTextureToTexture3D=function(x,I,z=null,H=null,L=0){return io('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,I,z,H,L)},this.initRenderTarget=function(x){St.get(x).__webglFramebuffer===void 0&&M.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?M.setTextureCube(x,0):x.isData3DTexture?M.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?M.setTexture2DArray(x,0):M.setTexture2D(x,0),xt.unbindTexture()},this.resetState=function(){A=0,w=0,U=null,xt.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}}const Lu={type:"change"},ol={type:"start"},ph={type:"end"},Vs=new Qd,Uu=new ei,_S=Math.cos(70*Sc.DEG2RAD),_e=new N,ke=2*Math.PI,ne={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ma=1e-6;class vS extends Lm{constructor(t,e=null){super(t,e),this.state=ne.NONE,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:pr.ROTATE,MIDDLE:pr.DOLLY,RIGHT:pr.PAN},this.touches={ONE:ur.ROTATE,TWO:ur.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new Li,this._lastTargetPosition=new N,this._quat=new Li().setFromUnitVectors(t.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new au,this._sphericalDelta=new au,this._scale=1,this._panOffset=new N,this._rotateStart=new yt,this._rotateEnd=new yt,this._rotateDelta=new yt,this._panStart=new yt,this._panEnd=new yt,this._panDelta=new yt,this._dollyStart=new yt,this._dollyEnd=new yt,this._dollyDelta=new yt,this._dollyDirection=new N,this._mouse=new yt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=xS.bind(this),this._onPointerDown=SS.bind(this),this._onPointerUp=ES.bind(this),this._onContextMenu=RS.bind(this),this._onMouseWheel=bS.bind(this),this._onKeyDown=TS.bind(this),this._onTouchStart=AS.bind(this),this._onTouchMove=wS.bind(this),this._onMouseDown=yS.bind(this),this._onMouseMove=MS.bind(this),this._interceptControlDown=CS.bind(this),this._interceptControlUp=PS.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Lu),this.update(),this.state=ne.NONE}update(t=null){const e=this.object.position;_e.copy(e).sub(this.target),_e.applyQuaternion(this._quat),this._spherical.setFromVector3(_e),this.autoRotate&&this.state===ne.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=ke:i>Math.PI&&(i-=ke),r<-Math.PI?r+=ke:r>Math.PI&&(r-=ke),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(_e.setFromSpherical(this._spherical),_e.applyQuaternion(this._quatInverse),e.copy(this.target).add(_e),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=_e.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const a=new N(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const l=new N(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=_e.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Vs.origin.copy(this.object.position),Vs.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Vs.direction))<_S?this.object.lookAt(this.target):(Uu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Vs.intersectPlane(Uu,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>ma||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ma||this._lastTargetPosition.distanceToSquared(this.target)>ma?(this.dispatchEvent(Lu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?ke/60*this.autoRotateSpeed*t:ke/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){_e.setFromMatrixColumn(e,0),_e.multiplyScalar(-t),this._panOffset.add(_e)}_panUp(t,e){this.screenSpacePanning===!0?_e.setFromMatrixColumn(e,1):(_e.setFromMatrixColumn(e,0),_e.crossVectors(this.object.up,_e)),_e.multiplyScalar(t),this._panOffset.add(_e)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;_e.copy(r).sub(this.target);let s=_e.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/i.clientHeight,this.object.matrix),this._panUp(2*e*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=t-i.left,s=e-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(ke*this._rotateDelta.x/e.clientHeight),this._rotateUp(ke*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(ke*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-ke*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(ke*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-ke*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(i,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),s=.5*(t.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(ke*this._rotateDelta.x/e.clientHeight),this._rotateUp(ke*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new yt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function SS(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function xS(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function ES(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ph),this.state=ne.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function yS(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case pr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ne.DOLLY;break;case pr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ne.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ne.ROTATE}break;case pr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ne.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ne.PAN}break;default:this.state=ne.NONE}this.state!==ne.NONE&&this.dispatchEvent(ol)}function MS(n){switch(this.state){case ne.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ne.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ne.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function bS(n){this.enabled===!1||this.enableZoom===!1||this.state!==ne.NONE||(n.preventDefault(),this.dispatchEvent(ol),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(ph))}function TS(n){this.enabled!==!1&&this._handleKeyDown(n)}function AS(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case ur.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ne.TOUCH_ROTATE;break;case ur.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ne.TOUCH_PAN;break;default:this.state=ne.NONE}break;case 2:switch(this.touches.TWO){case ur.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ne.TOUCH_DOLLY_PAN;break;case ur.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ne.TOUCH_DOLLY_ROTATE;break;default:this.state=ne.NONE}break;default:this.state=ne.NONE}this.state!==ne.NONE&&this.dispatchEvent(ol)}function wS(n){switch(this._trackPointer(n),this.state){case ne.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ne.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ne.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ne.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ne.NONE}}function RS(n){this.enabled!==!1&&n.preventDefault()}function CS(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function PS(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */class Mn{constructor(t,e,i,r,s="div"){this.parent=t,this.object=e,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("name"),Mn.nextNameID=Mn.nextNameID||0,this.$name.id="lil-gui-name-"+ ++Mn.nextNameID,this.$widget=document.createElement(s),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(t){return this._name=t,this.$name.innerHTML=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled||(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t)),this}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.object[this.property]=t,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class IS extends Mn{constructor(t,e,i){super(t,e,i,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Ec(n){let t,e;return(t=n.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=n.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=n.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),!!e&&"#"+e}const DS={isPrimitive:!0,match:n=>typeof n=="string",fromHexString:Ec,toHexString:Ec},Qr={isPrimitive:!0,match:n=>typeof n=="number",fromHexString:n=>parseInt(n.substring(1),16),toHexString:n=>"#"+n.toString(16).padStart(6,0)},LS={isPrimitive:!1,match:Array.isArray,fromHexString(n,t,e=1){const i=Qr.fromHexString(n);t[0]=(i>>16&255)/255*e,t[1]=(i>>8&255)/255*e,t[2]=(255&i)/255*e},toHexString:([n,t,e],i=1)=>Qr.toHexString(n*(i=255/i)<<16^t*i<<8^e*i<<0)},US={isPrimitive:!1,match:n=>Object(n)===n,fromHexString(n,t,e=1){const i=Qr.fromHexString(n);t.r=(i>>16&255)/255*e,t.g=(i>>8&255)/255*e,t.b=(255&i)/255*e},toHexString:({r:n,g:t,b:e},i=1)=>Qr.toHexString(n*(i=255/i)<<16^t*i<<8^e*i<<0)},NS=[DS,Qr,LS,US];class FS extends Mn{constructor(t,e,i,r){var s;super(t,e,i,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(s=this.initialValue,NS.find(o=>o.match(s))),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const o=Ec(this.$text.value);o&&this._setValueFromHexString(o)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class ga extends Mn{constructor(t,e,i){super(t,e,i,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",r=>{r.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class OS extends Mn{constructor(t,e,i,r,s,o){super(t,e,i,"number"),this._initInput(),this.min(r),this.max(s);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=100*e+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=u=>{const d=parseFloat(this.$input.value);isNaN(d)||(this._snapClampSetValue(d+u),this.$input.value=this.getValue())};let e,i,r,s,o,a=!1;const c=u=>{if(a){const d=u.clientX-e,h=u.clientY-i;Math.abs(h)>5?(u.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(d)>5&&l()}if(!a){const d=u.clientY-r;o-=d*this._step*this._arrowKeyMultiplier(u),s+o>this._max?o=this._max-s:s+o<this._min&&(o=this._min-s),this._snapClampSetValue(s+o)}r=u.clientY},l=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",c),window.removeEventListener("mouseup",l)};this.$input.addEventListener("input",()=>{let u=parseFloat(this.$input.value);isNaN(u)||(this._stepExplicit&&(u=this._snap(u)),this.setValue(this._clamp(u)))}),this.$input.addEventListener("keydown",u=>{u.code==="Enter"&&this.$input.blur(),u.code==="ArrowUp"&&(u.preventDefault(),t(this._step*this._arrowKeyMultiplier(u))),u.code==="ArrowDown"&&(u.preventDefault(),t(this._step*this._arrowKeyMultiplier(u)*-1))}),this.$input.addEventListener("wheel",u=>{this._inputFocused&&(u.preventDefault(),t(this._step*this._normalizeMouseWheel(u)))},{passive:!1}),this.$input.addEventListener("mousedown",u=>{e=u.clientX,i=r=u.clientY,a=!0,s=this.getValue(),o=0,window.addEventListener("mousemove",c),window.addEventListener("mouseup",l)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=h=>{const p=this.$slider.getBoundingClientRect();let g=(v=h,m=p.left,f=p.right,T=this._min,b=this._max,(v-m)/(f-m)*(b-T)+T);var v,m,f,T,b;this._snapClampSetValue(g)},e=h=>{t(h.clientX)},i=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",e),window.removeEventListener("mouseup",i)};let r,s,o=!1;const a=h=>{h.preventDefault(),this._setDraggingStyle(!0),t(h.touches[0].clientX),o=!1},c=h=>{if(o){const p=h.touches[0].clientX-r,g=h.touches[0].clientY-s;Math.abs(p)>Math.abs(g)?a(h):(window.removeEventListener("touchmove",c),window.removeEventListener("touchend",l))}else h.preventDefault(),t(h.touches[0].clientX)},l=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",c),window.removeEventListener("touchend",l)},u=this._callOnFinishChange.bind(this);let d;this.$slider.addEventListener("mousedown",h=>{this._setDraggingStyle(!0),t(h.clientX),window.addEventListener("mousemove",e),window.addEventListener("mouseup",i)}),this.$slider.addEventListener("touchstart",h=>{h.touches.length>1||(this._hasScrollBar?(r=h.touches[0].clientX,s=h.touches[0].clientY,o=!0):a(h),window.addEventListener("touchmove",c,{passive:!1}),window.addEventListener("touchend",l))},{passive:!1}),this.$slider.addEventListener("wheel",h=>{if(Math.abs(h.deltaX)<Math.abs(h.deltaY)&&this._hasScrollBar)return;h.preventDefault();const p=this._normalizeMouseWheel(h)*this._step;this._snapClampSetValue(this.getValue()+p),this.$input.value=this.getValue(),clearTimeout(d),d=setTimeout(u,400)},{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle("lil-gui-"+e,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:i}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,i=-t.wheelDelta/120,i*=this._stepExplicit?1:10),e+-i}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){const e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class BS extends Mn{constructor(t,e,i,r){super(t,e,i,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(r)?r:Object.values(r),this._names=Array.isArray(r)?r:Object.keys(r),this._names.forEach(s=>{const o=document.createElement("option");o.innerHTML=s,this.$select.appendChild(o)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.innerHTML=e===-1?t:this._names[e],this}}class kS extends Mn{constructor(t,e,i){super(t,e,i,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}let Nu=!1;class al{constructor({parent:t,autoPlace:e=t===void 0,container:i,width:r,title:s="Controls",injectStyles:o=!0,touchStyles:a=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{c.code!=="Enter"&&c.code!=="Space"||(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),a&&this.domElement.classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!Nu&&o&&(function(c){const l=document.createElement("style");l.innerHTML=c;const u=document.querySelector("head link[rel=stylesheet], head style");u?document.head.insertBefore(l,u):document.head.appendChild(l)}('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"↕";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"▾";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"▸"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"✓";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'),Nu=!0),i?i.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this.domElement.addEventListener("keydown",c=>c.stopPropagation()),this.domElement.addEventListener("keyup",c=>c.stopPropagation())}add(t,e,i,r,s){if(Object(i)===i)return new BS(this,t,e,i);const o=t[e];switch(typeof o){case"number":return new OS(this,t,e,i,r,s);case"boolean":return new IS(this,t,e);case"string":return new kS(this,t,e);case"function":return new ga(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,o)}addColor(t,e,i=1){return new FS(this,t,e,i)}addFolder(t){return new al({parent:this,title:t})}load(t,e=!0){return t.controllers&&this.controllers.forEach(i=>{i instanceof ga||i._name in t.controllers&&i.load(t.controllers[i._name])}),e&&t.folders&&this.folders.forEach(i=>{i._title in t.folders&&i.load(t.folders[i._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof ga)){if(i._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);e.controllers[i._name]=i.save()}}),t&&this.folders.forEach(i=>{if(i._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);e.folders[i._title]=i.save()}),e}open(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const i=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const r=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(t){return this._title=t,this.$title.innerHTML=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(e=>e.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}const so={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class os{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const zS=new rl(-1,1,1,-1,0,1);class HS extends qn{constructor(){super(),this.setAttribute("position",new en([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new en([0,2,0,0,2,0],2))}}const VS=new HS;class mh{constructor(t){this._mesh=new He(VS,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,zS)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class GS extends os{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Ue?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=go.clone(t.uniforms),this.material=new Ue({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new mh(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Fu extends os{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const r=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class WS extends os{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class XS{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new yt);this._width=i.width,this._height=i.height,e=new mn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:zn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new GS(so),this.copyPass.material.blending=kn,this.clock=new Dm}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Fu!==void 0&&(o instanceof Fu?i=!0:o instanceof WS&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new yt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class $S extends os{constructor(t,e,i=null,r=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Bt}render(t,e,i){const r=t.autoClear;t.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=r}}const YS={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Bt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class yr extends os{constructor(t,e=1,i,r){super(),this.strength=e,this.radius=i,this.threshold=r,this.resolution=t!==void 0?new yt(t.x,t.y):new yt(256,256),this.clearColor=new Bt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new mn(s,o,{type:zn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new mn(s,o,{type:zn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const h=new mn(s,o,{type:zn});h.texture.name="UnrealBloomPass.v"+u,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),s=Math.round(s/2),o=Math.round(o/2)}const a=YS;this.highPassUniforms=go.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ue({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new yt(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=go.clone(so.uniforms),this.blendMaterial=new Ue({uniforms:this.copyUniforms,vertexShader:so.vertexShader,fragmentShader:so.fragmentShader,blending:La,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Bt,this._oldClearAlpha=1,this._basic=new tl,this._fsQuad=new mh(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),r=Math.round(e/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new yt(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(t,e,i,r,s){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=yr.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=yr.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){const e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new Ue({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new yt(.5,.5)},direction:{value:new yt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(t){return new Ue({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}yr.BlurDirectionX=new yt(1,0);yr.BlurDirectionY=new yt(0,1);const Pt=typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__,wi="9.17.0",qt=globalThis;function Vi(){return Ro(qt),qt}function Ro(n){const t=n.__SENTRY__=n.__SENTRY__||{};return t.version=t.version||wi,t[wi]=t[wi]||{}}function Co(n,t,e=qt){const i=e.__SENTRY__=e.__SENTRY__||{},r=i[wi]=i[wi]||{};return r[n]||(r[n]=t())}const gh=Object.prototype.toString;function cl(n){switch(gh.call(n)){case"[object Error]":case"[object Exception]":case"[object DOMException]":case"[object WebAssembly.Exception]":return!0;default:return Wn(n,Error)}}function Cr(n,t){return gh.call(n)===`[object ${t}]`}function _h(n){return Cr(n,"ErrorEvent")}function Ou(n){return Cr(n,"DOMError")}function qS(n){return Cr(n,"DOMException")}function Vn(n){return Cr(n,"String")}function ll(n){return typeof n=="object"&&n!==null&&"__sentry_template_string__"in n&&"__sentry_template_values__"in n}function ul(n){return n===null||ll(n)||typeof n!="object"&&typeof n!="function"}function ts(n){return Cr(n,"Object")}function Po(n){return typeof Event<"u"&&Wn(n,Event)}function jS(n){return typeof Element<"u"&&Wn(n,Element)}function KS(n){return Cr(n,"RegExp")}function Io(n){return!!(n!=null&&n.then&&typeof n.then=="function")}function ZS(n){return ts(n)&&"nativeEvent"in n&&"preventDefault"in n&&"stopPropagation"in n}function Wn(n,t){try{return n instanceof t}catch{return!1}}function vh(n){return!!(typeof n=="object"&&n!==null&&(n.__isVue||n._isVue))}function Sh(n){return typeof Request<"u"&&Wn(n,Request)}const dl=qt,JS=80;function Ni(n,t={}){if(!n)return"<unknown>";try{let e=n;const i=5,r=[];let s=0,o=0;const a=" > ",c=a.length;let l;const u=Array.isArray(t)?t:t.keyAttrs,d=!Array.isArray(t)&&t.maxStringLength||JS;for(;e&&s++<i&&(l=QS(e,u),!(l==="html"||s>1&&o+r.length*c+l.length>=d));)r.push(l),o+=l.length,e=e.parentNode;return r.reverse().join(a)}catch{return"<unknown>"}}function QS(n,t){const e=n,i=[];if(!(e!=null&&e.tagName))return"";if(dl.HTMLElement&&e instanceof HTMLElement&&e.dataset){if(e.dataset.sentryComponent)return e.dataset.sentryComponent;if(e.dataset.sentryElement)return e.dataset.sentryElement}i.push(e.tagName.toLowerCase());const r=t!=null&&t.length?t.filter(o=>e.getAttribute(o)).map(o=>[o,e.getAttribute(o)]):null;if(r!=null&&r.length)r.forEach(o=>{i.push(`[${o[0]}="${o[1]}"]`)});else{e.id&&i.push(`#${e.id}`);const o=e.className;if(o&&Vn(o)){const a=o.split(/\s+/);for(const c of a)i.push(`.${c}`)}}const s=["aria-label","type","name","title","alt"];for(const o of s){const a=e.getAttribute(o);a&&i.push(`[${o}="${a}"]`)}return i.join("")}function as(){try{return dl.document.location.href}catch{return""}}function xh(n){if(!dl.HTMLElement)return null;let t=n;const e=5;for(let i=0;i<e;i++){if(!t)return null;if(t instanceof HTMLElement){if(t.dataset.sentryComponent)return t.dataset.sentryComponent;if(t.dataset.sentryElement)return t.dataset.sentryElement}t=t.parentNode}return null}const ui=typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__,tx="Sentry Logger ",yc=["debug","info","warn","error","log","assert","trace"],_o={};function Gi(n){if(!("console"in qt))return n();const t=qt.console,e={},i=Object.keys(_o);i.forEach(r=>{const s=_o[r];e[r]=t[r],t[r]=s});try{return n()}finally{i.forEach(r=>{t[r]=e[r]})}}function ex(){let n=!1;const t={enable:()=>{n=!0},disable:()=>{n=!1},isEnabled:()=>n};return ui?yc.forEach(e=>{t[e]=(...i)=>{n&&Gi(()=>{qt.console[e](`${tx}[${e}]:`,...i)})}}):yc.forEach(e=>{t[e]=()=>{}}),t}const it=Co("logger",ex);function vo(n,t=0){return typeof n!="string"||t===0||n.length<=t?n:`${n.slice(0,t)}...`}function Bu(n,t){if(!Array.isArray(n))return"";const e=[];for(let i=0;i<n.length;i++){const r=n[i];try{vh(r)?e.push("[VueViewModel]"):e.push(String(r))}catch{e.push("[value cannot be serialized]")}}return e.join(t)}function nx(n,t,e=!1){return Vn(n)?KS(t)?t.test(n):Vn(t)?e?n===t:n.includes(t):!1:!1}function Ri(n,t=[],e=!1){return t.some(i=>nx(n,i,e))}function $e(n,t,e){if(!(t in n))return;const i=n[t];if(typeof i!="function")return;const r=e(i);typeof r=="function"&&Eh(r,i);try{n[t]=r}catch{ui&&it.log(`Failed to replace method "${t}" in object`,n)}}function Ye(n,t,e){try{Object.defineProperty(n,t,{value:e,writable:!0,configurable:!0})}catch{ui&&it.log(`Failed to add non-enumerable property "${t}" to object`,n)}}function Eh(n,t){try{const e=t.prototype||{};n.prototype=t.prototype=e,Ye(n,"__sentry_original__",t)}catch{}}function hl(n){return n.__sentry_original__}function yh(n){if(cl(n))return{message:n.message,name:n.name,stack:n.stack,...zu(n)};if(Po(n)){const t={type:n.type,target:ku(n.target),currentTarget:ku(n.currentTarget),...zu(n)};return typeof CustomEvent<"u"&&Wn(n,CustomEvent)&&(t.detail=n.detail),t}else return n}function ku(n){try{return jS(n)?Ni(n):Object.prototype.toString.call(n)}catch{return"<unknown>"}}function zu(n){if(typeof n=="object"&&n!==null){const t={};for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t}else return{}}function ix(n,t=40){const e=Object.keys(yh(n));e.sort();const i=e[0];if(!i)return"[object has no keys]";if(i.length>=t)return vo(i,t);for(let r=e.length;r>0;r--){const s=e.slice(0,r).join(", ");if(!(s.length>t))return r===e.length?s:vo(s,t)}return""}function rx(){const n=qt;return n.crypto||n.msCrypto}function nn(n=rx()){let t=()=>Math.random()*16;try{if(n!=null&&n.randomUUID)return n.randomUUID().replace(/-/g,"");n!=null&&n.getRandomValues&&(t=()=>{const e=new Uint8Array(1);return n.getRandomValues(e),e[0]})}catch{}return("10000000100040008000"+1e11).replace(/[018]/g,e=>(e^(t()&15)>>e/4).toString(16))}function Mh(n){var t,e;return(e=(t=n.exception)==null?void 0:t.values)==null?void 0:e[0]}function bi(n){const{message:t,event_id:e}=n;if(t)return t;const i=Mh(n);return i?i.type&&i.value?`${i.type}: ${i.value}`:i.type||i.value||e||"<unknown>":e||"<unknown>"}function Mc(n,t,e){const i=n.exception=n.exception||{},r=i.values=i.values||[],s=r[0]=r[0]||{};s.value||(s.value=t||""),s.type||(s.type="Error")}function Mr(n,t){const e=Mh(n);if(!e)return;const i={type:"generic",handled:!0},r=e.mechanism;if(e.mechanism={...i,...r,...t},t&&"data"in t){const s={...r==null?void 0:r.data,...t.data};e.mechanism.data=s}}function Hu(n){if(sx(n))return!0;try{Ye(n,"__sentry_captured__",!0)}catch{}return!1}function sx(n){try{return n.__sentry_captured__}catch{}}const bh=1e3;function cs(){return Date.now()/bh}function ox(){const{performance:n}=qt;if(!(n!=null&&n.now))return cs;const t=Date.now()-n.now(),e=n.timeOrigin==null?t:n.timeOrigin;return()=>(e+n.now())/bh}const Fe=ox();let _a;function ax(){var u;const{performance:n}=qt;if(!(n!=null&&n.now))return[void 0,"none"];const t=3600*1e3,e=n.now(),i=Date.now(),r=n.timeOrigin?Math.abs(n.timeOrigin+e-i):t,s=r<t,o=(u=n.timing)==null?void 0:u.navigationStart,c=typeof o=="number"?Math.abs(o+e-i):t,l=c<t;return s||l?r<=c?[n.timeOrigin,"timeOrigin"]:[o,"navigationStart"]:[i,"dateNow"]}function on(){return _a||(_a=ax()),_a[0]}function cx(n){const t=Fe(),e={sid:nn(),init:!0,timestamp:t,started:t,duration:0,status:"ok",errors:0,ignoreDuration:!1,toJSON:()=>ux(e)};return n&&br(e,n),e}function br(n,t={}){if(t.user&&(!n.ipAddress&&t.user.ip_address&&(n.ipAddress=t.user.ip_address),!n.did&&!t.did&&(n.did=t.user.id||t.user.email||t.user.username)),n.timestamp=t.timestamp||Fe(),t.abnormal_mechanism&&(n.abnormal_mechanism=t.abnormal_mechanism),t.ignoreDuration&&(n.ignoreDuration=t.ignoreDuration),t.sid&&(n.sid=t.sid.length===32?t.sid:nn()),t.init!==void 0&&(n.init=t.init),!n.did&&t.did&&(n.did=`${t.did}`),typeof t.started=="number"&&(n.started=t.started),n.ignoreDuration)n.duration=void 0;else if(typeof t.duration=="number")n.duration=t.duration;else{const e=n.timestamp-n.started;n.duration=e>=0?e:0}t.release&&(n.release=t.release),t.environment&&(n.environment=t.environment),!n.ipAddress&&t.ipAddress&&(n.ipAddress=t.ipAddress),!n.userAgent&&t.userAgent&&(n.userAgent=t.userAgent),typeof t.errors=="number"&&(n.errors=t.errors),t.status&&(n.status=t.status)}function lx(n,t){let e={};n.status==="ok"&&(e={status:"exited"}),br(n,e)}function ux(n){return{sid:`${n.sid}`,init:n.init,started:new Date(n.started*1e3).toISOString(),timestamp:new Date(n.timestamp*1e3).toISOString(),status:n.status,errors:n.errors,did:typeof n.did=="number"||typeof n.did=="string"?`${n.did}`:void 0,duration:n.duration,abnormal_mechanism:n.abnormal_mechanism,attrs:{release:n.release,environment:n.environment,ip_address:n.ipAddress,user_agent:n.userAgent}}}function ls(n,t,e=2){if(!t||typeof t!="object"||e<=0)return t;if(n&&Object.keys(t).length===0)return n;const i={...n};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=ls(i[r],t[r],e-1));return i}const bc="_sentrySpan";function es(n,t){t?Ye(n,bc,t):delete n[bc]}function So(n){return n[bc]}function oi(){return nn()}function us(){return nn().substring(16)}const dx=100;class Xn{constructor(){this._notifyingListeners=!1,this._scopeListeners=[],this._eventProcessors=[],this._breadcrumbs=[],this._attachments=[],this._user={},this._tags={},this._extra={},this._contexts={},this._sdkProcessingMetadata={},this._propagationContext={traceId:oi(),sampleRand:Math.random()}}clone(){const t=new Xn;return t._breadcrumbs=[...this._breadcrumbs],t._tags={...this._tags},t._extra={...this._extra},t._contexts={...this._contexts},this._contexts.flags&&(t._contexts.flags={values:[...this._contexts.flags.values]}),t._user=this._user,t._level=this._level,t._session=this._session,t._transactionName=this._transactionName,t._fingerprint=this._fingerprint,t._eventProcessors=[...this._eventProcessors],t._attachments=[...this._attachments],t._sdkProcessingMetadata={...this._sdkProcessingMetadata},t._propagationContext={...this._propagationContext},t._client=this._client,t._lastEventId=this._lastEventId,es(t,So(this)),t}setClient(t){this._client=t}setLastEventId(t){this._lastEventId=t}getClient(){return this._client}lastEventId(){return this._lastEventId}addScopeListener(t){this._scopeListeners.push(t)}addEventProcessor(t){return this._eventProcessors.push(t),this}setUser(t){return this._user=t||{email:void 0,id:void 0,ip_address:void 0,username:void 0},this._session&&br(this._session,{user:t}),this._notifyScopeListeners(),this}getUser(){return this._user}setTags(t){return this._tags={...this._tags,...t},this._notifyScopeListeners(),this}setTag(t,e){return this._tags={...this._tags,[t]:e},this._notifyScopeListeners(),this}setExtras(t){return this._extra={...this._extra,...t},this._notifyScopeListeners(),this}setExtra(t,e){return this._extra={...this._extra,[t]:e},this._notifyScopeListeners(),this}setFingerprint(t){return this._fingerprint=t,this._notifyScopeListeners(),this}setLevel(t){return this._level=t,this._notifyScopeListeners(),this}setTransactionName(t){return this._transactionName=t,this._notifyScopeListeners(),this}setContext(t,e){return e===null?delete this._contexts[t]:this._contexts[t]=e,this._notifyScopeListeners(),this}setSession(t){return t?this._session=t:delete this._session,this._notifyScopeListeners(),this}getSession(){return this._session}update(t){if(!t)return this;const e=typeof t=="function"?t(this):t,i=e instanceof Xn?e.getScopeData():ts(e)?t:void 0,{tags:r,extra:s,user:o,contexts:a,level:c,fingerprint:l=[],propagationContext:u}=i||{};return this._tags={...this._tags,...r},this._extra={...this._extra,...s},this._contexts={...this._contexts,...a},o&&Object.keys(o).length&&(this._user=o),c&&(this._level=c),l.length&&(this._fingerprint=l),u&&(this._propagationContext=u),this}clear(){return this._breadcrumbs=[],this._tags={},this._extra={},this._user={},this._contexts={},this._level=void 0,this._transactionName=void 0,this._fingerprint=void 0,this._session=void 0,es(this,void 0),this._attachments=[],this.setPropagationContext({traceId:oi(),sampleRand:Math.random()}),this._notifyScopeListeners(),this}addBreadcrumb(t,e){var s;const i=typeof e=="number"?e:dx;if(i<=0)return this;const r={timestamp:cs(),...t,message:t.message?vo(t.message,2048):t.message};return this._breadcrumbs.push(r),this._breadcrumbs.length>i&&(this._breadcrumbs=this._breadcrumbs.slice(-i),(s=this._client)==null||s.recordDroppedEvent("buffer_overflow","log_item")),this._notifyScopeListeners(),this}getLastBreadcrumb(){return this._breadcrumbs[this._breadcrumbs.length-1]}clearBreadcrumbs(){return this._breadcrumbs=[],this._notifyScopeListeners(),this}addAttachment(t){return this._attachments.push(t),this}clearAttachments(){return this._attachments=[],this}getScopeData(){return{breadcrumbs:this._breadcrumbs,attachments:this._attachments,contexts:this._contexts,tags:this._tags,extra:this._extra,user:this._user,level:this._level,fingerprint:this._fingerprint||[],eventProcessors:this._eventProcessors,propagationContext:this._propagationContext,sdkProcessingMetadata:this._sdkProcessingMetadata,transactionName:this._transactionName,span:So(this)}}setSDKProcessingMetadata(t){return this._sdkProcessingMetadata=ls(this._sdkProcessingMetadata,t,2),this}setPropagationContext(t){return this._propagationContext=t,this}getPropagationContext(){return this._propagationContext}captureException(t,e){const i=(e==null?void 0:e.event_id)||nn();if(!this._client)return it.warn("No client configured on scope - will not capture exception!"),i;const r=new Error("Sentry syntheticException");return this._client.captureException(t,{originalException:t,syntheticException:r,...e,event_id:i},this),i}captureMessage(t,e,i){const r=(i==null?void 0:i.event_id)||nn();if(!this._client)return it.warn("No client configured on scope - will not capture message!"),r;const s=new Error(t);return this._client.captureMessage(t,e,{originalException:t,syntheticException:s,...i,event_id:r},this),r}captureEvent(t,e){const i=(e==null?void 0:e.event_id)||nn();return this._client?(this._client.captureEvent(t,{...e,event_id:i},this),i):(it.warn("No client configured on scope - will not capture event!"),i)}_notifyScopeListeners(){this._notifyingListeners||(this._notifyingListeners=!0,this._scopeListeners.forEach(t=>{t(this)}),this._notifyingListeners=!1)}}function hx(){return Co("defaultCurrentScope",()=>new Xn)}function fx(){return Co("defaultIsolationScope",()=>new Xn)}class px{constructor(t,e){let i;t?i=t:i=new Xn;let r;e?r=e:r=new Xn,this._stack=[{scope:i}],this._isolationScope=r}withScope(t){const e=this._pushScope();let i;try{i=t(e)}catch(r){throw this._popScope(),r}return Io(i)?i.then(r=>(this._popScope(),r),r=>{throw this._popScope(),r}):(this._popScope(),i)}getClient(){return this.getStackTop().client}getScope(){return this.getStackTop().scope}getIsolationScope(){return this._isolationScope}getStackTop(){return this._stack[this._stack.length-1]}_pushScope(){const t=this.getScope().clone();return this._stack.push({client:this.getClient(),scope:t}),t}_popScope(){return this._stack.length<=1?!1:!!this._stack.pop()}}function Tr(){const n=Vi(),t=Ro(n);return t.stack=t.stack||new px(hx(),fx())}function mx(n){return Tr().withScope(n)}function gx(n,t){const e=Tr();return e.withScope(()=>(e.getStackTop().scope=n,t(n)))}function Vu(n){return Tr().withScope(()=>n(Tr().getIsolationScope()))}function _x(){return{withIsolationScope:Vu,withScope:mx,withSetScope:gx,withSetIsolationScope:(n,t)=>Vu(t),getCurrentScope:()=>Tr().getScope(),getIsolationScope:()=>Tr().getIsolationScope()}}function Pr(n){const t=Ro(n);return t.acs?t.acs:_x()}function ae(){const n=Vi();return Pr(n).getCurrentScope()}function Wi(){const n=Vi();return Pr(n).getIsolationScope()}function vx(){return Co("globalScope",()=>new Xn)}function fl(...n){const t=Vi(),e=Pr(t);if(n.length===2){const[i,r]=n;return i?e.withSetScope(i,r):e.withScope(r)}return e.withScope(n[0])}function te(){return ae().getClient()}function Sx(n){const t=n.getPropagationContext(),{traceId:e,parentSpanId:i,propagationSpanId:r}=t,s={trace_id:e,span_id:r||us()};return i&&(s.parent_span_id=i),s}const Bn="sentry.source",pl="sentry.sample_rate",Th="sentry.previous_trace_sample_rate",Fi="sentry.op",ye="sentry.origin",Tc="sentry.idle_span_finish_reason",Do="sentry.measurement_unit",Lo="sentry.measurement_value",Gu="sentry.custom_span_name",ml="sentry.profile_id",ds="sentry.exclusive_time",xx="sentry.link.type",Ex=0,Ah=1,Ee=2;function yx(n){if(n<400&&n>=100)return{code:Ah};if(n>=400&&n<500)switch(n){case 401:return{code:Ee,message:"unauthenticated"};case 403:return{code:Ee,message:"permission_denied"};case 404:return{code:Ee,message:"not_found"};case 409:return{code:Ee,message:"already_exists"};case 413:return{code:Ee,message:"failed_precondition"};case 429:return{code:Ee,message:"resource_exhausted"};case 499:return{code:Ee,message:"cancelled"};default:return{code:Ee,message:"invalid_argument"}}if(n>=500&&n<600)switch(n){case 501:return{code:Ee,message:"unimplemented"};case 503:return{code:Ee,message:"unavailable"};case 504:return{code:Ee,message:"deadline_exceeded"};default:return{code:Ee,message:"internal_error"}}return{code:Ee,message:"unknown_error"}}function wh(n,t){n.setAttribute("http.response.status_code",t);const e=yx(t);e.message!=="unknown_error"&&n.setStatus(e)}const Rh="_sentryScope",Ch="_sentryIsolationScope";function Mx(n,t,e){n&&(Ye(n,Ch,e),Ye(n,Rh,t))}function xo(n){return{scope:n[Rh],isolationScope:n[Ch]}}function ns(n){if(typeof n=="boolean")return Number(n);const t=typeof n=="string"?parseFloat(n):n;if(!(typeof t!="number"||isNaN(t)||t<0||t>1))return t}const gl="sentry-",bx=/^sentry-/,Tx=8192;function Ph(n){const t=wx(n);if(!t)return;const e=Object.entries(t).reduce((i,[r,s])=>{if(r.match(bx)){const o=r.slice(gl.length);i[o]=s}return i},{});if(Object.keys(e).length>0)return e}function Ax(n){if(!n)return;const t=Object.entries(n).reduce((e,[i,r])=>(r&&(e[`${gl}${i}`]=r),e),{});return Rx(t)}function wx(n){if(!(!n||!Vn(n)&&!Array.isArray(n)))return Array.isArray(n)?n.reduce((t,e)=>{const i=Wu(e);return Object.entries(i).forEach(([r,s])=>{t[r]=s}),t},{}):Wu(n)}function Wu(n){return n.split(",").map(t=>t.split("=").map(e=>decodeURIComponent(e.trim()))).reduce((t,[e,i])=>(e&&i&&(t[e]=i),t),{})}function Rx(n){if(Object.keys(n).length!==0)return Object.entries(n).reduce((t,[e,i],r)=>{const s=`${encodeURIComponent(e)}=${encodeURIComponent(i)}`,o=r===0?s:`${t},${s}`;return o.length>Tx?(ui&&it.warn(`Not adding key: ${e} with val: ${i} to baggage header due to exceeding baggage size limits.`),t):o},"")}const Ih=new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");function Cx(n){if(!n)return;const t=n.match(Ih);if(!t)return;let e;return t[3]==="1"?e=!0:t[3]==="0"&&(e=!1),{traceId:t[1],parentSampled:e,parentSpanId:t[2]}}function Px(n,t){const e=Cx(n),i=Ph(t);if(!(e!=null&&e.traceId))return{traceId:oi(),sampleRand:Math.random()};const r=Ix(e,i);i&&(i.sample_rand=r.toString());const{traceId:s,parentSpanId:o,parentSampled:a}=e;return{traceId:s,parentSpanId:o,sampled:a,dsc:i||{},sampleRand:r}}function Dh(n=oi(),t=us(),e){let i="";return e!==void 0&&(i=e?"-1":"-0"),`${n}-${t}${i}`}function Ix(n,t){const e=ns(t==null?void 0:t.sample_rand);if(e!==void 0)return e;const i=ns(t==null?void 0:t.sample_rate);return i&&(n==null?void 0:n.parentSampled)!==void 0?n.parentSampled?Math.random()*i:i+Math.random()*(1-i):Math.random()}const Lh=0,_l=1;let Xu=!1;function Dx(n){const{spanId:t,traceId:e}=n.spanContext(),{data:i,op:r,parent_span_id:s,status:o,origin:a,links:c}=ie(n);return{parent_span_id:s,span_id:t,trace_id:e,data:i,op:r,status:o,origin:a,links:c}}function Lx(n){const{spanId:t,traceId:e,isRemote:i}=n.spanContext(),r=i?t:ie(n).parent_span_id,s=xo(n).scope,o=i?(s==null?void 0:s.getPropagationContext().propagationSpanId)||us():t;return{parent_span_id:r,span_id:o,trace_id:e}}function Ux(n){const{traceId:t,spanId:e}=n.spanContext(),i=Xi(n);return Dh(t,e,i)}function Uh(n){if(n&&n.length>0)return n.map(({context:{spanId:t,traceId:e,traceFlags:i,...r},attributes:s})=>({span_id:t,trace_id:e,sampled:i===_l,attributes:s,...r}))}function Ci(n){return typeof n=="number"?$u(n):Array.isArray(n)?n[0]+n[1]/1e9:n instanceof Date?$u(n.getTime()):Fe()}function $u(n){return n>9999999999?n/1e3:n}function ie(n){if(Fx(n))return n.getSpanJSON();const{spanId:t,traceId:e}=n.spanContext();if(Nx(n)){const{attributes:i,startTime:r,name:s,endTime:o,parentSpanId:a,status:c,links:l}=n;return{span_id:t,trace_id:e,data:i,description:s,parent_span_id:a,start_timestamp:Ci(r),timestamp:Ci(o)||void 0,status:Nh(c),op:i[Fi],origin:i[ye],links:Uh(l)}}return{span_id:t,trace_id:e,start_timestamp:0,data:{}}}function Nx(n){const t=n;return!!t.attributes&&!!t.startTime&&!!t.name&&!!t.endTime&&!!t.status}function Fx(n){return typeof n.getSpanJSON=="function"}function Xi(n){const{traceFlags:t}=n.spanContext();return t===_l}function Nh(n){if(!(!n||n.code===Ex))return n.code===Ah?"ok":n.message||"unknown_error"}const Pi="_sentryChildSpans",Ac="_sentryRootSpan";function Fh(n,t){const e=n[Ac]||n;Ye(t,Ac,e),n[Pi]?n[Pi].add(t):Ye(n,Pi,new Set([t]))}function Ox(n,t){n[Pi]&&n[Pi].delete(t)}function oo(n){const t=new Set;function e(i){if(!t.has(i)&&Xi(i)){t.add(i);const r=i[Pi]?Array.from(i[Pi]):[];for(const s of r)e(s)}}return e(n),Array.from(t)}function Oe(n){return n[Ac]||n}function qe(){const n=Vi(),t=Pr(n);return t.getActiveSpan?t.getActiveSpan():So(ae())}function wc(){Xu||(Gi(()=>{console.warn("[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly.")}),Xu=!0)}const Oh=50,Oi="?",Yu=/\(error: (.*)\)/,qu=/captureMessage|captureException/;function Bh(...n){const t=n.sort((e,i)=>e[0]-i[0]).map(e=>e[1]);return(e,i=0,r=0)=>{const s=[],o=e.split(`
`);for(let a=i;a<o.length;a++){const c=o[a];if(c.length>1024)continue;const l=Yu.test(c)?c.replace(Yu,"$1"):c;if(!l.match(/\S*Error: /)){for(const u of t){const d=u(l);if(d){s.push(d);break}}if(s.length>=Oh+r)break}}return kx(s.slice(r))}}function Bx(n){return Array.isArray(n)?Bh(...n):n}function kx(n){if(!n.length)return[];const t=Array.from(n);return/sentryWrapped/.test(Gs(t).function||"")&&t.pop(),t.reverse(),qu.test(Gs(t).function||"")&&(t.pop(),qu.test(Gs(t).function||"")&&t.pop()),t.slice(0,Oh).map(e=>({...e,filename:e.filename||Gs(t).filename,function:e.function||Oi}))}function Gs(n){return n[n.length-1]||{}}const va="<anonymous>";function $n(n){try{return!n||typeof n!="function"?va:n.name||va}catch{return va}}function ju(n){const t=n.exception;if(t){const e=[];try{return t.values.forEach(i=>{i.stacktrace.frames&&e.push(...i.stacktrace.frames)}),e}catch{return}}}const ao={},Ku={};function di(n,t){ao[n]=ao[n]||[],ao[n].push(t)}function hi(n,t){if(!Ku[n]){Ku[n]=!0;try{t()}catch(e){ui&&it.error(`Error while instrumenting ${n}`,e)}}}function rn(n,t){const e=n&&ao[n];if(e)for(const i of e)try{i(t)}catch(r){ui&&it.error(`Error while triggering instrumentation handler.
Type: ${n}
Name: ${$n(i)}
Error:`,r)}}let Sa=null;function kh(n){const t="error";di(t,n),hi(t,zx)}function zx(){Sa=qt.onerror,qt.onerror=function(n,t,e,i,r){return rn("error",{column:i,error:r,line:e,msg:n,url:t}),Sa?Sa.apply(this,arguments):!1},qt.onerror.__SENTRY_INSTRUMENTED__=!0}let xa=null;function zh(n){const t="unhandledrejection";di(t,n),hi(t,Hx)}function Hx(){xa=qt.onunhandledrejection,qt.onunhandledrejection=function(n){return rn("unhandledrejection",n),xa?xa.apply(this,arguments):!0},qt.onunhandledrejection.__SENTRY_INSTRUMENTED__=!0}let Zu=!1;function Vx(){Zu||(Zu=!0,kh(Rc),zh(Rc))}function Rc(){const n=qe(),t=n&&Oe(n);if(t){const e="internal_error";Pt&&it.log(`[Tracing] Root span: ${e} -> Global error occurred`),t.setStatus({code:Ee,message:e})}}Rc.tag="sentry_tracingErrorCallback";function ai(n){var e;if(typeof __SENTRY_TRACING__=="boolean"&&!__SENTRY_TRACING__)return!1;const t=n||((e=te())==null?void 0:e.getOptions());return!!t&&(t.tracesSampleRate!=null||!!t.tracesSampler)}const vl="production",Hh="_frozenDsc";function co(n,t){Ye(n,Hh,t)}function Vh(n,t){const e=t.getOptions(),{publicKey:i}=t.getDsn()||{},r={environment:e.environment||vl,release:e.release,public_key:i,trace_id:n};return t.emit("createDsc",r),r}function Gh(n,t){const e=t.getPropagationContext();return e.dsc||Vh(e.traceId,n)}function ci(n){var g;const t=te();if(!t)return{};const e=Oe(n),i=ie(e),r=i.data,s=e.spanContext().traceState,o=(s==null?void 0:s.get("sentry.sample_rate"))??r[pl]??r[Th];function a(v){return(typeof o=="number"||typeof o=="string")&&(v.sample_rate=`${o}`),v}const c=e[Hh];if(c)return a(c);const l=s==null?void 0:s.get("sentry.dsc"),u=l&&Ph(l);if(u)return a(u);const d=Vh(n.spanContext().traceId,t),h=r[Bn],p=i.description;return h!=="url"&&p&&(d.transaction=p),ai()&&(d.sampled=String(Xi(e)),d.sample_rand=(s==null?void 0:s.get("sentry.sample_rand"))??((g=xo(e).scope)==null?void 0:g.getPropagationContext().sampleRand.toString())),a(d),t.emit("createDsc",d,e),d}class Bi{constructor(t={}){this._traceId=t.traceId||oi(),this._spanId=t.spanId||us()}spanContext(){return{spanId:this._spanId,traceId:this._traceId,traceFlags:Lh}}end(t){}setAttribute(t,e){return this}setAttributes(t){return this}setStatus(t){return this}updateName(t){return this}isRecording(){return!1}addEvent(t,e,i){return this}addLink(t){return this}addLinks(t){return this}recordException(t,e){}}function Gx(n){if(!Pt)return;const{description:t="< unknown name >",op:e="< unknown op >",parent_span_id:i}=ie(n),{spanId:r}=n.spanContext(),s=Xi(n),o=Oe(n),a=o===n,c=`[Tracing] Starting ${s?"sampled":"unsampled"} ${a?"root ":""}span`,l=[`op: ${e}`,`name: ${t}`,`ID: ${r}`];if(i&&l.push(`parent ID: ${i}`),!a){const{op:u,description:d}=ie(o);l.push(`root ID: ${o.spanContext().spanId}`),u&&l.push(`root op: ${u}`),d&&l.push(`root description: ${d}`)}it.log(`${c}
  ${l.join(`
  `)}`)}function Wx(n){if(!Pt)return;const{description:t="< unknown name >",op:e="< unknown op >"}=ie(n),{spanId:i}=n.spanContext(),s=Oe(n)===n,o=`[Tracing] Finishing "${e}" ${s?"root ":""}span "${t}" with ID ${i}`;it.log(o)}function Xx(n,t,e){if(!ai(n))return[!1];let i,r;typeof n.tracesSampler=="function"?(r=n.tracesSampler({...t,inheritOrSampleWith:a=>typeof t.parentSampleRate=="number"?t.parentSampleRate:typeof t.parentSampled=="boolean"?Number(t.parentSampled):a}),i=!0):t.parentSampled!==void 0?r=t.parentSampled:typeof n.tracesSampleRate<"u"&&(r=n.tracesSampleRate,i=!0);const s=ns(r);if(s===void 0)return Pt&&it.warn(`[Tracing] Discarding root span because of invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(r)} of type ${JSON.stringify(typeof r)}.`),[!1];if(!s)return Pt&&it.log(`[Tracing] Discarding transaction because ${typeof n.tracesSampler=="function"?"tracesSampler returned 0 or false":"a negative sampling decision was inherited or tracesSampleRate is set to 0"}`),[!1,s,i];const o=e<s;return o||Pt&&it.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(r)})`),[o,s,i]}const $x=/^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;function Yx(n){return n==="http"||n==="https"}function hs(n,t=!1){const{host:e,path:i,pass:r,port:s,projectId:o,protocol:a,publicKey:c}=n;return`${a}://${c}${t&&r?`:${r}`:""}@${e}${s?`:${s}`:""}/${i&&`${i}/`}${o}`}function qx(n){const t=$x.exec(n);if(!t){Gi(()=>{console.error(`Invalid Sentry Dsn: ${n}`)});return}const[e,i,r="",s="",o="",a=""]=t.slice(1);let c="",l=a;const u=l.split("/");if(u.length>1&&(c=u.slice(0,-1).join("/"),l=u.pop()),l){const d=l.match(/^\d+/);d&&(l=d[0])}return Wh({host:s,pass:r,path:c,projectId:l,port:o,protocol:e,publicKey:i})}function Wh(n){return{protocol:n.protocol,publicKey:n.publicKey||"",pass:n.pass||"",host:n.host,port:n.port||"",path:n.path||"",projectId:n.projectId}}function jx(n){if(!ui)return!0;const{port:t,projectId:e,protocol:i}=n;return["protocol","publicKey","host","projectId"].find(o=>n[o]?!1:(it.error(`Invalid Sentry Dsn: ${o} missing`),!0))?!1:e.match(/^\d+$/)?Yx(i)?t&&isNaN(parseInt(t,10))?(it.error(`Invalid Sentry Dsn: Invalid port ${t}`),!1):!0:(it.error(`Invalid Sentry Dsn: Invalid protocol ${i}`),!1):(it.error(`Invalid Sentry Dsn: Invalid projectId ${e}`),!1)}function Kx(n){const t=typeof n=="string"?qx(n):Wh(n);if(!(!t||!jx(t)))return t}function Dn(n,t=100,e=1/0){try{return Cc("",n,t,e)}catch(i){return{ERROR:`**non-serializable** (${i})`}}}function Xh(n,t=3,e=100*1024){const i=Dn(n,t);return tE(i)>e?Xh(n,t-1,e):i}function Cc(n,t,e=1/0,i=1/0,r=eE()){const[s,o]=r;if(t==null||["boolean","string"].includes(typeof t)||typeof t=="number"&&Number.isFinite(t))return t;const a=Zx(n,t);if(!a.startsWith("[object "))return a;if(t.__sentry_skip_normalization__)return t;const c=typeof t.__sentry_override_normalization_depth__=="number"?t.__sentry_override_normalization_depth__:e;if(c===0)return a.replace("object ","");if(s(t))return"[Circular ~]";const l=t;if(l&&typeof l.toJSON=="function")try{const p=l.toJSON();return Cc("",p,c-1,i,r)}catch{}const u=Array.isArray(t)?[]:{};let d=0;const h=yh(t);for(const p in h){if(!Object.prototype.hasOwnProperty.call(h,p))continue;if(d>=i){u[p]="[MaxProperties ~]";break}const g=h[p];u[p]=Cc(p,g,c-1,i,r),d++}return o(t),u}function Zx(n,t){try{if(n==="domain"&&t&&typeof t=="object"&&t._events)return"[Domain]";if(n==="domainEmitter")return"[DomainEmitter]";if(typeof global<"u"&&t===global)return"[Global]";if(typeof window<"u"&&t===window)return"[Window]";if(typeof document<"u"&&t===document)return"[Document]";if(vh(t))return"[VueViewModel]";if(ZS(t))return"[SyntheticEvent]";if(typeof t=="number"&&!Number.isFinite(t))return`[${t}]`;if(typeof t=="function")return`[Function: ${$n(t)}]`;if(typeof t=="symbol")return`[${String(t)}]`;if(typeof t=="bigint")return`[BigInt: ${String(t)}]`;const e=Jx(t);return/^HTML(\w*)Element$/.test(e)?`[HTMLElement: ${e}]`:`[object ${e}]`}catch(e){return`**non-serializable** (${e})`}}function Jx(n){const t=Object.getPrototypeOf(n);return t!=null&&t.constructor?t.constructor.name:"null prototype"}function Qx(n){return~-encodeURI(n).split(/%..|./).length}function tE(n){return Qx(JSON.stringify(n))}function eE(){const n=new WeakSet;function t(i){return n.has(i)?!0:(n.add(i),!1)}function e(i){n.delete(i)}return[t,e]}function Ir(n,t=[]){return[n,t]}function nE(n,t){const[e,i]=n;return[e,[...i,t]]}function Ju(n,t){const e=n[1];for(const i of e){const r=i[0].type;if(t(i,r))return!0}return!1}function Pc(n){const t=Ro(qt);return t.encodePolyfill?t.encodePolyfill(n):new TextEncoder().encode(n)}function iE(n){const[t,e]=n;let i=JSON.stringify(t);function r(s){typeof i=="string"?i=typeof s=="string"?i+s:[Pc(i),s]:i.push(typeof s=="string"?Pc(s):s)}for(const s of e){const[o,a]=s;if(r(`
${JSON.stringify(o)}
`),typeof a=="string"||a instanceof Uint8Array)r(a);else{let c;try{c=JSON.stringify(a)}catch{c=JSON.stringify(Dn(a))}r(c)}}return typeof i=="string"?i:rE(i)}function rE(n){const t=n.reduce((r,s)=>r+s.length,0),e=new Uint8Array(t);let i=0;for(const r of n)e.set(r,i),i+=r.length;return e}function sE(n){return[{type:"span"},n]}function oE(n){const t=typeof n.data=="string"?Pc(n.data):n.data;return[{type:"attachment",length:t.length,filename:n.filename,content_type:n.contentType,attachment_type:n.attachmentType},t]}const aE={session:"session",sessions:"session",attachment:"attachment",transaction:"transaction",event:"error",client_report:"internal",user_report:"default",profile:"profile",profile_chunk:"profile",replay_event:"replay",replay_recording:"replay",check_in:"monitor",feedback:"feedback",span:"span",raw_security:"security",log:"log_item"};function Qu(n){return aE[n]}function $h(n){if(!(n!=null&&n.sdk))return;const{name:t,version:e}=n.sdk;return{name:t,version:e}}function cE(n,t,e,i){var s;const r=(s=n.sdkProcessingMetadata)==null?void 0:s.dynamicSamplingContext;return{event_id:n.event_id,sent_at:new Date().toISOString(),...t&&{sdk:t},...!!e&&i&&{dsn:hs(i)},...r&&{trace:r}}}function lE(n,t){return t&&(n.sdk=n.sdk||{},n.sdk.name=n.sdk.name||t.name,n.sdk.version=n.sdk.version||t.version,n.sdk.integrations=[...n.sdk.integrations||[],...t.integrations||[]],n.sdk.packages=[...n.sdk.packages||[],...t.packages||[]]),n}function uE(n,t,e,i){const r=$h(e),s={sent_at:new Date().toISOString(),...r&&{sdk:r},...!!i&&t&&{dsn:hs(t)}},o="aggregates"in n?[{type:"sessions"},n]:[{type:"session"},n.toJSON()];return Ir(s,[o])}function dE(n,t,e,i){const r=$h(e),s=n.type&&n.type!=="replay_event"?n.type:"event";lE(n,e==null?void 0:e.sdk);const o=cE(n,r,i,t);return delete n.sdkProcessingMetadata,Ir(o,[[{type:s},n]])}function hE(n,t){function e(u){return!!u.trace_id&&!!u.public_key}const i=ci(n[0]),r=t==null?void 0:t.getDsn(),s=t==null?void 0:t.getOptions().tunnel,o={sent_at:new Date().toISOString(),...e(i)&&{trace:i},...!!s&&r&&{dsn:hs(r)}},a=t==null?void 0:t.getOptions().beforeSendSpan,c=a?u=>{const d=ie(u),h=a(d);return h||(wc(),d)}:ie,l=[];for(const u of n){const d=c(u);d&&l.push(sE(d))}return Ir(o,l)}function fE(n,t,e,i=qe()){const r=i&&Oe(i);r&&(Pt&&it.log(`[Measurement] Setting measurement on root span: ${n} = ${t} ${e}`),r.addEvent(n,{[Lo]:t,[Do]:e}))}function td(n){if(!n||n.length===0)return;const t={};return n.forEach(e=>{const i=e.attributes||{},r=i[Do],s=i[Lo];typeof r=="string"&&typeof s=="number"&&(t[e.name]={value:s,unit:r})}),t}const ed=1e3;class Sl{constructor(t={}){this._traceId=t.traceId||oi(),this._spanId=t.spanId||us(),this._startTime=t.startTimestamp||Fe(),this._links=t.links,this._attributes={},this.setAttributes({[ye]:"manual",[Fi]:t.op,...t.attributes}),this._name=t.name,t.parentSpanId&&(this._parentSpanId=t.parentSpanId),"sampled"in t&&(this._sampled=t.sampled),t.endTimestamp&&(this._endTime=t.endTimestamp),this._events=[],this._isStandaloneSpan=t.isStandalone,this._endTime&&this._onSpanEnded()}addLink(t){return this._links?this._links.push(t):this._links=[t],this}addLinks(t){return this._links?this._links.push(...t):this._links=t,this}recordException(t,e){}spanContext(){const{_spanId:t,_traceId:e,_sampled:i}=this;return{spanId:t,traceId:e,traceFlags:i?_l:Lh}}setAttribute(t,e){return e===void 0?delete this._attributes[t]:this._attributes[t]=e,this}setAttributes(t){return Object.keys(t).forEach(e=>this.setAttribute(e,t[e])),this}updateStartTime(t){this._startTime=Ci(t)}setStatus(t){return this._status=t,this}updateName(t){return this._name=t,this.setAttribute(Bn,"custom"),this}end(t){this._endTime||(this._endTime=Ci(t),Wx(this),this._onSpanEnded())}getSpanJSON(){return{data:this._attributes,description:this._name,op:this._attributes[Fi],parent_span_id:this._parentSpanId,span_id:this._spanId,start_timestamp:this._startTime,status:Nh(this._status),timestamp:this._endTime,trace_id:this._traceId,origin:this._attributes[ye],profile_id:this._attributes[ml],exclusive_time:this._attributes[ds],measurements:td(this._events),is_segment:this._isStandaloneSpan&&Oe(this)===this||void 0,segment_id:this._isStandaloneSpan?Oe(this).spanContext().spanId:void 0,links:Uh(this._links)}}isRecording(){return!this._endTime&&!!this._sampled}addEvent(t,e,i){Pt&&it.log("[Tracing] Adding an event to span:",t);const r=nd(e)?e:i||Fe(),s=nd(e)?{}:e||{},o={name:t,time:Ci(r),attributes:s};return this._events.push(o),this}isStandaloneSpan(){return!!this._isStandaloneSpan}_onSpanEnded(){const t=te();if(t&&t.emit("spanEnd",this),!(this._isStandaloneSpan||this===Oe(this)))return;if(this._isStandaloneSpan){this._sampled?mE(hE([this],t)):(Pt&&it.log("[Tracing] Discarding standalone span because its trace was not chosen to be sampled."),t&&t.recordDroppedEvent("sample_rate","span"));return}const i=this._convertSpanToTransaction();i&&(xo(this).scope||ae()).captureEvent(i)}_convertSpanToTransaction(){if(!id(ie(this)))return;this._name||(Pt&&it.warn("Transaction has no name, falling back to `<unlabeled transaction>`."),this._name="<unlabeled transaction>");const{scope:t,isolationScope:e}=xo(this);if(this._sampled!==!0)return;const r=oo(this).filter(l=>l!==this&&!pE(l)).map(l=>ie(l)).filter(id),s=this._attributes[Bn];delete this._attributes[Gu],r.forEach(l=>{delete l.data[Gu]});const o={contexts:{trace:Dx(this)},spans:r.length>ed?r.sort((l,u)=>l.start_timestamp-u.start_timestamp).slice(0,ed):r,start_timestamp:this._startTime,timestamp:this._endTime,transaction:this._name,type:"transaction",sdkProcessingMetadata:{capturedSpanScope:t,capturedSpanIsolationScope:e,dynamicSamplingContext:ci(this)},...s&&{transaction_info:{source:s}}},a=td(this._events);return a&&Object.keys(a).length&&(Pt&&it.log("[Measurements] Adding measurements to transaction event",JSON.stringify(a,void 0,2)),o.measurements=a),o}}function nd(n){return n&&typeof n=="number"||n instanceof Date||Array.isArray(n)}function id(n){return!!n.start_timestamp&&!!n.timestamp&&!!n.span_id&&!!n.trace_id}function pE(n){return n instanceof Sl&&n.isStandaloneSpan()}function mE(n){const t=te();if(!t)return;const e=n[1];if(!e||e.length===0){t.recordDroppedEvent("before_send","span");return}t.sendEnvelope(n)}const Yh="__SENTRY_SUPPRESS_TRACING__";function fs(n){const t=jh();if(t.startInactiveSpan)return t.startInactiveSpan(n);const e=_E(n),{forceTransaction:i,parentSpan:r}=n;return(n.scope?o=>fl(n.scope,o):r!==void 0?o=>qh(r,o):o=>o())(()=>{const o=ae(),a=SE(o);return n.onlyIfParent&&!a?new Bi:gE({parentSpan:a,spanArguments:e,forceTransaction:i,scope:o})})}function qh(n,t){const e=jh();return e.withActiveSpan?e.withActiveSpan(n,t):fl(i=>(es(i,n||void 0),t(i)))}function gE({parentSpan:n,spanArguments:t,forceTransaction:e,scope:i}){if(!ai()){const o=new Bi;if(e||!n){const a={sampled:"false",sample_rate:"0",transaction:t.name,...ci(o)};co(o,a)}return o}const r=Wi();let s;if(n&&!e)s=vE(n,i,t),Fh(n,s);else if(n){const o=ci(n),{traceId:a,spanId:c}=n.spanContext(),l=Xi(n);s=rd({traceId:a,parentSpanId:c,...t},i,l),co(s,o)}else{const{traceId:o,dsc:a,parentSpanId:c,sampled:l}={...r.getPropagationContext(),...i.getPropagationContext()};s=rd({traceId:o,parentSpanId:c,...t},i,l),a&&co(s,a)}return Gx(s),Mx(s,i,r),s}function _E(n){const e={isStandalone:(n.experimental||{}).standalone,...n};if(n.startTime){const i={...e};return i.startTimestamp=Ci(n.startTime),delete i.startTime,i}return e}function jh(){const n=Vi();return Pr(n)}function rd(n,t,e){var g;const i=te(),r=(i==null?void 0:i.getOptions())||{},{name:s=""}=n,o={spanAttributes:{...n.attributes},spanName:s,parentSampled:e};i==null||i.emit("beforeSampling",o,{decision:!1});const a=o.parentSampled??e,c=o.spanAttributes,l=t.getPropagationContext(),[u,d,h]=t.getScopeData().sdkProcessingMetadata[Yh]?[!1]:Xx(r,{name:s,parentSampled:a,attributes:c,parentSampleRate:ns((g=l.dsc)==null?void 0:g.sample_rate)},l.sampleRand),p=new Sl({...n,attributes:{[Bn]:"custom",[pl]:d!==void 0&&h?d:void 0,...c},sampled:u});return!u&&i&&(Pt&&it.log("[Tracing] Discarding root span because its trace was not chosen to be sampled."),i.recordDroppedEvent("sample_rate","transaction")),i&&i.emit("spanStart",p),p}function vE(n,t,e){const{spanId:i,traceId:r}=n.spanContext(),s=t.getScopeData().sdkProcessingMetadata[Yh]?!1:Xi(n),o=s?new Sl({...e,parentSpanId:i,traceId:r,sampled:s}):new Bi({traceId:r});Fh(n,o);const a=te();return a&&(a.emit("spanStart",o),e.endTimestamp&&a.emit("spanEnd",o)),o}function SE(n){const t=So(n);if(!t)return;const e=te();return(e?e.getOptions():{}).parentSpanIsAlwaysRootSpan?Oe(t):t}const lo={idleTimeout:1e3,finalTimeout:3e4,childSpanTimeout:15e3},xE="heartbeatFailed",EE="idleTimeout",yE="finalTimeout",ME="externalFinish";function Kh(n,t={}){const e=new Map;let i=!1,r,s=ME,o=!t.disableAutoFinish;const a=[],{idleTimeout:c=lo.idleTimeout,finalTimeout:l=lo.finalTimeout,childSpanTimeout:u=lo.childSpanTimeout,beforeSpanEnd:d}=t,h=te();if(!h||!ai()){const A=new Bi,w={sample_rate:"0",sampled:"false",...ci(A)};return co(A,w),A}const p=ae(),g=qe(),v=bE(n);v.end=new Proxy(v.end,{apply(A,w,U){if(d&&d(v),w instanceof Bi)return;const[E,...S]=U,R=E||Fe(),F=Ci(R),B=oo(v).filter(k=>k!==v);if(!B.length)return D(F),Reflect.apply(A,w,[F,...S]);const X=B.map(k=>ie(k).timestamp).filter(k=>!!k),Y=X.length?Math.max(...X):void 0,W=ie(v).start_timestamp,G=Math.min(W?W+l/1e3:1/0,Math.max(W||-1/0,Math.min(F,Y||1/0)));return D(G),Reflect.apply(A,w,[G,...S])}});function m(){r&&(clearTimeout(r),r=void 0)}function f(A){m(),r=setTimeout(()=>{!i&&e.size===0&&o&&(s=EE,v.end(A))},c)}function T(A){r=setTimeout(()=>{!i&&o&&(s=xE,v.end(A))},u)}function b(A){m(),e.set(A,!0);const w=Fe();T(w+u/1e3)}function y(A){if(e.has(A)&&e.delete(A),e.size===0){const w=Fe();f(w+c/1e3)}}function D(A){i=!0,e.clear(),a.forEach(F=>F()),es(p,g);const w=ie(v),{start_timestamp:U}=w;if(!U)return;w.data[Tc]||v.setAttribute(Tc,s),it.log(`[Tracing] Idle span "${w.op}" finished`);const S=oo(v).filter(F=>F!==v);let R=0;S.forEach(F=>{F.isRecording()&&(F.setStatus({code:Ee,message:"cancelled"}),F.end(A),Pt&&it.log("[Tracing] Cancelling span since span ended early",JSON.stringify(F,void 0,2)));const B=ie(F),{timestamp:X=0,start_timestamp:Y=0}=B,W=Y<=A,G=(l+c)/1e3,k=X-Y<=G;if(Pt){const et=JSON.stringify(F,void 0,2);W?k||it.log("[Tracing] Discarding span since it finished after idle span final timeout",et):it.log("[Tracing] Discarding span since it happened after idle span was finished",et)}(!k||!W)&&(Ox(v,F),R++)}),R>0&&v.setAttribute("sentry.idle_span_discarded_spans",R)}return a.push(h.on("spanStart",A=>{if(i||A===v||ie(A).timestamp)return;oo(v).includes(A)&&b(A.spanContext().spanId)})),a.push(h.on("spanEnd",A=>{i||y(A.spanContext().spanId)})),a.push(h.on("idleSpanEnableAutoFinish",A=>{A===v&&(o=!0,f(),e.size&&T())})),t.disableAutoFinish||f(),setTimeout(()=>{i||(v.setStatus({code:Ee,message:"deadline_exceeded"}),s=yE,v.end())},l),v}function bE(n){const t=fs(n);return es(ae(),t),Pt&&it.log("[Tracing] Started span is an idle span"),t}var Ln;(function(n){n[n.PENDING=0]="PENDING";const e=1;n[n.RESOLVED=e]="RESOLVED";const i=2;n[n.REJECTED=i]="REJECTED"})(Ln||(Ln={}));function ki(n){return new li(t=>{t(n)})}function Eo(n){return new li((t,e)=>{e(n)})}class li{constructor(t){this._state=Ln.PENDING,this._handlers=[],this._runExecutor(t)}then(t,e){return new li((i,r)=>{this._handlers.push([!1,s=>{if(!t)i(s);else try{i(t(s))}catch(o){r(o)}},s=>{if(!e)r(s);else try{i(e(s))}catch(o){r(o)}}]),this._executeHandlers()})}catch(t){return this.then(e=>e,t)}finally(t){return new li((e,i)=>{let r,s;return this.then(o=>{s=!1,r=o,t&&t()},o=>{s=!0,r=o,t&&t()}).then(()=>{if(s){i(r);return}e(r)})})}_executeHandlers(){if(this._state===Ln.PENDING)return;const t=this._handlers.slice();this._handlers=[],t.forEach(e=>{e[0]||(this._state===Ln.RESOLVED&&e[1](this._value),this._state===Ln.REJECTED&&e[2](this._value),e[0]=!0)})}_runExecutor(t){const e=(s,o)=>{if(this._state===Ln.PENDING){if(Io(o)){o.then(i,r);return}this._state=s,this._value=o,this._executeHandlers()}},i=s=>{e(Ln.RESOLVED,s)},r=s=>{e(Ln.REJECTED,s)};try{t(i,r)}catch(s){r(s)}}}function Ic(n,t,e,i=0){return new li((r,s)=>{const o=n[i];if(t===null||typeof o!="function")r(t);else{const a=o({...t},e);Pt&&o.id&&a===null&&it.log(`Event processor "${o.id}" dropped event`),Io(a)?a.then(c=>Ic(n,c,e,i+1).then(r)).then(null,s):Ic(n,a,e,i+1).then(r).then(null,s)}})}let Ws,sd,Xs;function TE(n){const t=qt._sentryDebugIds;if(!t)return{};const e=Object.keys(t);return Xs&&e.length===sd||(sd=e.length,Xs=e.reduce((i,r)=>{Ws||(Ws={});const s=Ws[r];if(s)i[s[0]]=s[1];else{const o=n(r);for(let a=o.length-1;a>=0;a--){const c=o[a],l=c==null?void 0:c.filename,u=t[r];if(l&&u){i[l]=u,Ws[r]=[l,u];break}}}return i},{})),Xs}function AE(n,t){const{fingerprint:e,span:i,breadcrumbs:r,sdkProcessingMetadata:s}=t;wE(n,t),i&&PE(n,i),IE(n,e),RE(n,r),CE(n,s)}function od(n,t){const{extra:e,tags:i,user:r,contexts:s,level:o,sdkProcessingMetadata:a,breadcrumbs:c,fingerprint:l,eventProcessors:u,attachments:d,propagationContext:h,transactionName:p,span:g}=t;$s(n,"extra",e),$s(n,"tags",i),$s(n,"user",r),$s(n,"contexts",s),n.sdkProcessingMetadata=ls(n.sdkProcessingMetadata,a,2),o&&(n.level=o),p&&(n.transactionName=p),g&&(n.span=g),c.length&&(n.breadcrumbs=[...n.breadcrumbs,...c]),l.length&&(n.fingerprint=[...n.fingerprint,...l]),u.length&&(n.eventProcessors=[...n.eventProcessors,...u]),d.length&&(n.attachments=[...n.attachments,...d]),n.propagationContext={...n.propagationContext,...h}}function $s(n,t,e){n[t]=ls(n[t],e,1)}function wE(n,t){const{extra:e,tags:i,user:r,contexts:s,level:o,transactionName:a}=t;Object.keys(e).length&&(n.extra={...e,...n.extra}),Object.keys(i).length&&(n.tags={...i,...n.tags}),Object.keys(r).length&&(n.user={...r,...n.user}),Object.keys(s).length&&(n.contexts={...s,...n.contexts}),o&&(n.level=o),a&&n.type!=="transaction"&&(n.transaction=a)}function RE(n,t){const e=[...n.breadcrumbs||[],...t];n.breadcrumbs=e.length?e:void 0}function CE(n,t){n.sdkProcessingMetadata={...n.sdkProcessingMetadata,...t}}function PE(n,t){n.contexts={trace:Lx(t),...n.contexts},n.sdkProcessingMetadata={dynamicSamplingContext:ci(t),...n.sdkProcessingMetadata};const e=Oe(t),i=ie(e).description;i&&!n.transaction&&n.type==="transaction"&&(n.transaction=i)}function IE(n,t){n.fingerprint=n.fingerprint?Array.isArray(n.fingerprint)?n.fingerprint:[n.fingerprint]:[],t&&(n.fingerprint=n.fingerprint.concat(t)),n.fingerprint.length||delete n.fingerprint}function DE(n,t,e,i,r,s){const{normalizeDepth:o=3,normalizeMaxBreadth:a=1e3}=n,c={...t,event_id:t.event_id||e.event_id||nn(),timestamp:t.timestamp||cs()},l=e.integrations||n.integrations.map(m=>m.name);LE(c,n),FE(c,l),r&&r.emit("applyFrameMetadata",t),t.type===void 0&&UE(c,n.stackParser);const u=BE(i,e.captureContext);e.mechanism&&Mr(c,e.mechanism);const d=r?r.getEventProcessors():[],h=vx().getScopeData();if(s){const m=s.getScopeData();od(h,m)}if(u){const m=u.getScopeData();od(h,m)}const p=[...e.attachments||[],...h.attachments];p.length&&(e.attachments=p),AE(c,h);const g=[...d,...h.eventProcessors];return Ic(g,c,e).then(m=>(m&&NE(m),typeof o=="number"&&o>0?OE(m,o,a):m))}function LE(n,t){const{environment:e,release:i,dist:r,maxValueLength:s=250}=t;n.environment=n.environment||e||vl,!n.release&&i&&(n.release=i),!n.dist&&r&&(n.dist=r);const o=n.request;o!=null&&o.url&&(o.url=vo(o.url,s))}function UE(n,t){var i,r;const e=TE(t);(r=(i=n.exception)==null?void 0:i.values)==null||r.forEach(s=>{var o,a;(a=(o=s.stacktrace)==null?void 0:o.frames)==null||a.forEach(c=>{c.filename&&(c.debug_id=e[c.filename])})})}function NE(n){var i,r;const t={};if((r=(i=n.exception)==null?void 0:i.values)==null||r.forEach(s=>{var o,a;(a=(o=s.stacktrace)==null?void 0:o.frames)==null||a.forEach(c=>{c.debug_id&&(c.abs_path?t[c.abs_path]=c.debug_id:c.filename&&(t[c.filename]=c.debug_id),delete c.debug_id)})}),Object.keys(t).length===0)return;n.debug_meta=n.debug_meta||{},n.debug_meta.images=n.debug_meta.images||[];const e=n.debug_meta.images;Object.entries(t).forEach(([s,o])=>{e.push({type:"sourcemap",code_file:s,debug_id:o})})}function FE(n,t){t.length>0&&(n.sdk=n.sdk||{},n.sdk.integrations=[...n.sdk.integrations||[],...t])}function OE(n,t,e){var r,s;if(!n)return null;const i={...n,...n.breadcrumbs&&{breadcrumbs:n.breadcrumbs.map(o=>({...o,...o.data&&{data:Dn(o.data,t,e)}}))},...n.user&&{user:Dn(n.user,t,e)},...n.contexts&&{contexts:Dn(n.contexts,t,e)},...n.extra&&{extra:Dn(n.extra,t,e)}};return(r=n.contexts)!=null&&r.trace&&i.contexts&&(i.contexts.trace=n.contexts.trace,n.contexts.trace.data&&(i.contexts.trace.data=Dn(n.contexts.trace.data,t,e))),n.spans&&(i.spans=n.spans.map(o=>({...o,...o.data&&{data:Dn(o.data,t,e)}}))),(s=n.contexts)!=null&&s.flags&&i.contexts&&(i.contexts.flags=Dn(n.contexts.flags,3,e)),i}function BE(n,t){if(!t)return n;const e=n?n.clone():new Xn;return e.update(t),e}function kE(n,t){return ae().captureException(n,void 0)}function Zh(n,t){return ae().captureEvent(n,t)}function zE(){const n=te();return(n==null?void 0:n.getOptions().enabled)!==!1&&!!(n!=null&&n.getTransport())}function ad(n){const t=Wi(),e=ae(),{userAgent:i}=qt.navigator||{},r=cx({user:e.getUser()||t.getUser(),...i&&{userAgent:i},...n}),s=t.getSession();return(s==null?void 0:s.status)==="ok"&&br(s,{status:"exited"}),Jh(),t.setSession(r),r}function Jh(){const n=Wi(),e=ae().getSession()||n.getSession();e&&lx(e),Qh(),n.setSession()}function Qh(){const n=Wi(),t=te(),e=n.getSession();e&&t&&t.captureSession(e)}function cd(n=!1){if(n){Jh();return}Qh()}const HE="7";function VE(n){const t=n.protocol?`${n.protocol}:`:"",e=n.port?`:${n.port}`:"";return`${t}//${n.host}${e}${n.path?`/${n.path}`:""}/api/`}function GE(n){return`${VE(n)}${n.projectId}/envelope/`}function WE(n,t){const e={sentry_version:HE};return n.publicKey&&(e.sentry_key=n.publicKey),t&&(e.sentry_client=`${t.name}/${t.version}`),new URLSearchParams(e).toString()}function XE(n,t,e){return t||`${GE(n)}?${WE(n,e)}`}const ld=[];function $E(n){const t={};return n.forEach(e=>{const{name:i}=e,r=t[i];r&&!r.isDefaultInstance&&e.isDefaultInstance||(t[i]=e)}),Object.values(t)}function YE(n){const t=n.defaultIntegrations||[],e=n.integrations;t.forEach(r=>{r.isDefaultInstance=!0});let i;if(Array.isArray(e))i=[...t,...e];else if(typeof e=="function"){const r=e(t);i=Array.isArray(r)?r:[r]}else i=t;return $E(i)}function qE(n,t){const e={};return t.forEach(i=>{i&&tf(n,i,e)}),e}function ud(n,t){for(const e of t)e!=null&&e.afterAllSetup&&e.afterAllSetup(n)}function tf(n,t,e){if(e[t.name]){Pt&&it.log(`Integration skipped because it was already installed: ${t.name}`);return}if(e[t.name]=t,ld.indexOf(t.name)===-1&&typeof t.setupOnce=="function"&&(t.setupOnce(),ld.push(t.name)),t.setup&&typeof t.setup=="function"&&t.setup(n),typeof t.preprocessEvent=="function"){const i=t.preprocessEvent.bind(t);n.on("preprocessEvent",(r,s)=>i(r,s,n))}if(typeof t.processEvent=="function"){const i=t.processEvent.bind(t),r=Object.assign((s,o)=>i(s,o,n),{id:t.name});n.addEventProcessor(r)}Pt&&it.log(`Integration installed: ${t.name}`)}function ef(n){const t=[];n.message&&t.push(n.message);try{const e=n.exception.values[n.exception.values.length-1];e!=null&&e.value&&(t.push(e.value),e.type&&t.push(`${e.type}: ${e.value}`))}catch{}return t}function jE(n){var c;const{trace_id:t,parent_span_id:e,span_id:i,status:r,origin:s,data:o,op:a}=((c=n.contexts)==null?void 0:c.trace)??{};return{data:o??{},description:n.transaction,op:a,parent_span_id:e,span_id:i??"",start_timestamp:n.start_timestamp??0,status:r,timestamp:n.timestamp,trace_id:t??"",origin:s,profile_id:o==null?void 0:o[ml],exclusive_time:o==null?void 0:o[ds],measurements:n.measurements,is_segment:!0}}function KE(n){return{type:"transaction",timestamp:n.timestamp,start_timestamp:n.start_timestamp,transaction:n.description,contexts:{trace:{trace_id:n.trace_id,span_id:n.span_id,parent_span_id:n.parent_span_id,op:n.op,status:n.status,origin:n.origin,data:{...n.data,...n.profile_id&&{[ml]:n.profile_id},...n.exclusive_time&&{[ds]:n.exclusive_time}}}},measurements:n.measurements}}function ZE(n,t,e){const i=[{type:"client_report"},{timestamp:cs(),discarded_events:n}];return Ir(t?{dsn:t}:{},[i])}const dd="Not capturing exception because it's already been captured.",hd="Discarded session because of missing or non-string release",nf=Symbol.for("SentryInternalError"),rf=Symbol.for("SentryDoNotSendEventError");function uo(n){return{message:n,[nf]:!0}}function Ea(n){return{message:n,[rf]:!0}}function fd(n){return!!n&&typeof n=="object"&&nf in n}function pd(n){return!!n&&typeof n=="object"&&rf in n}class JE{constructor(t){if(this._options=t,this._integrations={},this._numProcessing=0,this._outcomes={},this._hooks={},this._eventProcessors=[],t.dsn?this._dsn=Kx(t.dsn):Pt&&it.warn("No DSN provided, client will not send events."),this._dsn){const e=XE(this._dsn,t.tunnel,t._metadata?t._metadata.sdk:void 0);this._transport=t.transport({tunnel:this._options.tunnel,recordDroppedEvent:this.recordDroppedEvent.bind(this),...t.transportOptions,url:e})}}captureException(t,e,i){const r=nn();if(Hu(t))return Pt&&it.log(dd),r;const s={event_id:r,...e};return this._process(this.eventFromException(t,s).then(o=>this._captureEvent(o,s,i))),s.event_id}captureMessage(t,e,i,r){const s={event_id:nn(),...i},o=ll(t)?t:String(t),a=ul(t)?this.eventFromMessage(o,e,s):this.eventFromException(t,s);return this._process(a.then(c=>this._captureEvent(c,s,r))),s.event_id}captureEvent(t,e,i){const r=nn();if(e!=null&&e.originalException&&Hu(e.originalException))return Pt&&it.log(dd),r;const s={event_id:r,...e},o=t.sdkProcessingMetadata||{},a=o.capturedSpanScope,c=o.capturedSpanIsolationScope;return this._process(this._captureEvent(t,s,a||i,c)),s.event_id}captureSession(t){this.sendSession(t),br(t,{init:!1})}getDsn(){return this._dsn}getOptions(){return this._options}getSdkMetadata(){return this._options._metadata}getTransport(){return this._transport}flush(t){const e=this._transport;return e?(this.emit("flush"),this._isClientDoneProcessing(t).then(i=>e.flush(t).then(r=>i&&r))):ki(!0)}close(t){return this.flush(t).then(e=>(this.getOptions().enabled=!1,this.emit("close"),e))}getEventProcessors(){return this._eventProcessors}addEventProcessor(t){this._eventProcessors.push(t)}init(){(this._isEnabled()||this._options.integrations.some(({name:t})=>t.startsWith("Spotlight")))&&this._setupIntegrations()}getIntegrationByName(t){return this._integrations[t]}addIntegration(t){const e=this._integrations[t.name];tf(this,t,this._integrations),e||ud(this,[t])}sendEvent(t,e={}){this.emit("beforeSendEvent",t,e);let i=dE(t,this._dsn,this._options._metadata,this._options.tunnel);for(const s of e.attachments||[])i=nE(i,oE(s));const r=this.sendEnvelope(i);r&&r.then(s=>this.emit("afterSendEvent",t,s),null)}sendSession(t){const{release:e,environment:i=vl}=this._options;if("aggregates"in t){const s=t.attrs||{};if(!s.release&&!e){Pt&&it.warn(hd);return}s.release=s.release||e,s.environment=s.environment||i,t.attrs=s}else{if(!t.release&&!e){Pt&&it.warn(hd);return}t.release=t.release||e,t.environment=t.environment||i}this.emit("beforeSendSession",t);const r=uE(t,this._dsn,this._options._metadata,this._options.tunnel);this.sendEnvelope(r)}recordDroppedEvent(t,e,i=1){if(this._options.sendClientReports){const r=`${t}:${e}`;Pt&&it.log(`Recording outcome: "${r}"${i>1?` (${i} times)`:""}`),this._outcomes[r]=(this._outcomes[r]||0)+i}}on(t,e){const i=this._hooks[t]=this._hooks[t]||[];return i.push(e),()=>{const r=i.indexOf(e);r>-1&&i.splice(r,1)}}emit(t,...e){const i=this._hooks[t];i&&i.forEach(r=>r(...e))}sendEnvelope(t){return this.emit("beforeEnvelope",t),this._isEnabled()&&this._transport?this._transport.send(t).then(null,e=>(Pt&&it.error("Error while sending envelope:",e),e)):(Pt&&it.error("Transport disabled"),ki({}))}_setupIntegrations(){const{integrations:t}=this._options;this._integrations=qE(this,t),ud(this,t)}_updateSessionFromEvent(t,e){var c;let i=e.level==="fatal",r=!1;const s=(c=e.exception)==null?void 0:c.values;if(s){r=!0;for(const l of s){const u=l.mechanism;if((u==null?void 0:u.handled)===!1){i=!0;break}}}const o=t.status==="ok";(o&&t.errors===0||o&&i)&&(br(t,{...i&&{status:"crashed"},errors:t.errors||Number(r||i)}),this.captureSession(t))}_isClientDoneProcessing(t){return new li(e=>{let i=0;const r=1,s=setInterval(()=>{this._numProcessing==0?(clearInterval(s),e(!0)):(i+=r,t&&i>=t&&(clearInterval(s),e(!1)))},r)})}_isEnabled(){return this.getOptions().enabled!==!1&&this._transport!==void 0}_prepareEvent(t,e,i,r){const s=this.getOptions(),o=Object.keys(this._integrations);return!e.integrations&&(o!=null&&o.length)&&(e.integrations=o),this.emit("preprocessEvent",t,e),t.type||r.setLastEventId(t.event_id||e.event_id),DE(s,t,e,i,this,r).then(a=>{if(a===null)return a;this.emit("postprocessEvent",a,e),a.contexts={trace:Sx(i),...a.contexts};const c=Gh(this,i);return a.sdkProcessingMetadata={dynamicSamplingContext:c,...a.sdkProcessingMetadata},a})}_captureEvent(t,e={},i=ae(),r=Wi()){return Pt&&Dc(t)&&it.log(`Captured error event \`${ef(t)[0]||"<unknown>"}\``),this._processEvent(t,e,i,r).then(s=>s.event_id,s=>{Pt&&(pd(s)?it.log(s.message):fd(s)?it.warn(s.message):it.warn(s))})}_processEvent(t,e,i,r){const s=this.getOptions(),{sampleRate:o}=s,a=sf(t),c=Dc(t),l=t.type||"error",u=`before send for type \`${l}\``,d=typeof o>"u"?void 0:ns(o);if(c&&typeof d=="number"&&Math.random()>d)return this.recordDroppedEvent("sample_rate","error"),Eo(Ea(`Discarding event because it's not included in the random sample (sampling rate = ${o})`));const h=l==="replay_event"?"replay":l;return this._prepareEvent(t,e,i,r).then(p=>{if(p===null)throw this.recordDroppedEvent("event_processor",h),Ea("An event processor returned `null`, will not send event.");if(e.data&&e.data.__sentry__===!0)return p;const v=ty(this,s,p,e);return QE(v,u)}).then(p=>{var m;if(p===null){if(this.recordDroppedEvent("before_send",h),a){const T=1+(t.spans||[]).length;this.recordDroppedEvent("before_send","span",T)}throw Ea(`${u} returned \`null\`, will not send event.`)}const g=i.getSession()||r.getSession();if(c&&g&&this._updateSessionFromEvent(g,p),a){const f=((m=p.sdkProcessingMetadata)==null?void 0:m.spanCountBeforeProcessing)||0,T=p.spans?p.spans.length:0,b=f-T;b>0&&this.recordDroppedEvent("before_send","span",b)}const v=p.transaction_info;if(a&&v&&p.transaction!==t.transaction){const f="custom";p.transaction_info={...v,source:f}}return this.sendEvent(p,e),p}).then(null,p=>{throw pd(p)||fd(p)?p:(this.captureException(p,{data:{__sentry__:!0},originalException:p}),uo(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${p}`))})}_process(t){this._numProcessing++,t.then(e=>(this._numProcessing--,e),e=>(this._numProcessing--,e))}_clearOutcomes(){const t=this._outcomes;return this._outcomes={},Object.entries(t).map(([e,i])=>{const[r,s]=e.split(":");return{reason:r,category:s,quantity:i}})}_flushOutcomes(){Pt&&it.log("Flushing outcomes...");const t=this._clearOutcomes();if(t.length===0){Pt&&it.log("No outcomes to send");return}if(!this._dsn){Pt&&it.log("No dsn provided, will not send outcomes");return}Pt&&it.log("Sending outcomes:",t);const e=ZE(t,this._options.tunnel&&hs(this._dsn));this.sendEnvelope(e)}}function QE(n,t){const e=`${t} must return \`null\` or a valid event.`;if(Io(n))return n.then(i=>{if(!ts(i)&&i!==null)throw uo(e);return i},i=>{throw uo(`${t} rejected with ${i}`)});if(!ts(n)&&n!==null)throw uo(e);return n}function ty(n,t,e,i){const{beforeSend:r,beforeSendTransaction:s,beforeSendSpan:o}=t;let a=e;if(Dc(a)&&r)return r(a,i);if(sf(a)){if(o){const c=o(jE(a));if(c?a=ls(e,KE(c)):wc(),a.spans){const l=[];for(const u of a.spans){const d=o(u);d?l.push(d):(wc(),l.push(u))}a.spans=l}}if(s){if(a.spans){const c=a.spans.length;a.sdkProcessingMetadata={...e.sdkProcessingMetadata,spanCountBeforeProcessing:c}}return s(a,i)}}return a}function Dc(n){return n.type===void 0}function sf(n){return n.type==="transaction"}function ey(n){return[{type:"log",item_count:n.length,content_type:"application/vnd.sentry.items.log+json"},{items:n}]}function ny(n,t,e,i){const r={};return t!=null&&t.sdk&&(r.sdk={name:t.sdk.name,version:t.sdk.version}),e&&i&&(r.dsn=hs(i)),Ir(r,[ey(n)])}qt._sentryClientToLogBufferMap=new WeakMap;function ya(n,t){var s;const e=iy(n)??[];if(e.length===0)return;const i=n.getOptions(),r=ny(e,i._metadata,i.tunnel,n.getDsn());(s=qt._sentryClientToLogBufferMap)==null||s.set(n,[]),n.emit("flushLogs"),n.sendEnvelope(r)}function iy(n){var t;return(t=qt._sentryClientToLogBufferMap)==null?void 0:t.get(n)}function ry(n,t){t.debug===!0&&(Pt?it.enable():Gi(()=>{console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.")})),ae().update(t.initialScope);const i=new n(t);return sy(i),i.init(),i}function sy(n){ae().setClient(n)}const of=Symbol.for("SentryBufferFullError");function oy(n){const t=[];function e(){return n===void 0||t.length<n}function i(o){return t.splice(t.indexOf(o),1)[0]||Promise.resolve(void 0)}function r(o){if(!e())return Eo(of);const a=o();return t.indexOf(a)===-1&&t.push(a),a.then(()=>i(a)).then(null,()=>i(a).then(null,()=>{})),a}function s(o){return new li((a,c)=>{let l=t.length;if(!l)return a(!0);const u=setTimeout(()=>{o&&o>0&&a(!1)},o);t.forEach(d=>{ki(d).then(()=>{--l||(clearTimeout(u),a(!0))},c)})})}return{$:t,add:r,drain:s}}const ay=60*1e3;function cy(n,t=Date.now()){const e=parseInt(`${n}`,10);if(!isNaN(e))return e*1e3;const i=Date.parse(`${n}`);return isNaN(i)?ay:i-t}function ly(n,t){return n[t]||n.all||0}function uy(n,t,e=Date.now()){return ly(n,t)>e}function dy(n,{statusCode:t,headers:e},i=Date.now()){const r={...n},s=e==null?void 0:e["x-sentry-rate-limits"],o=e==null?void 0:e["retry-after"];if(s)for(const a of s.trim().split(",")){const[c,l,,,u]=a.split(":",5),d=parseInt(c,10),h=(isNaN(d)?60:d)*1e3;if(!l)r.all=i+h;else for(const p of l.split(";"))p==="metric_bucket"?(!u||u.split(";").includes("custom"))&&(r[p]=i+h):r[p]=i+h}else o?r.all=i+cy(o,i):t===429&&(r.all=i+60*1e3);return r}const hy=64;function fy(n,t,e=oy(n.bufferSize||hy)){let i={};const r=o=>e.drain(o);function s(o){const a=[];if(Ju(o,(d,h)=>{const p=Qu(h);uy(i,p)?n.recordDroppedEvent("ratelimit_backoff",p):a.push(d)}),a.length===0)return ki({});const c=Ir(o[0],a),l=d=>{Ju(c,(h,p)=>{n.recordDroppedEvent(d,Qu(p))})},u=()=>t({body:iE(c)}).then(d=>(d.statusCode!==void 0&&(d.statusCode<200||d.statusCode>=300)&&Pt&&it.warn(`Sentry responded with status code ${d.statusCode} to sent event.`),i=dy(i,d),d),d=>{throw l("network_error"),Pt&&it.error("Encountered error running transport request:",d),d});return e.add(u).then(d=>d,d=>{if(d===of)return Pt&&it.error("Skipped sending event because buffer is full."),l("queue_overflow"),ki({});throw d})}return{send:s,flush:r}}function py(n){var t;((t=n.user)==null?void 0:t.ip_address)===void 0&&(n.user={...n.user,ip_address:"{{auto}}"})}function my(n){var t;"aggregates"in n?((t=n.attrs)==null?void 0:t.ip_address)===void 0&&(n.attrs={...n.attrs,ip_address:"{{auto}}"}):n.ipAddress===void 0&&(n.ipAddress="{{auto}}")}function gy(n,t,e=[t],i="npm"){const r=n._metadata||{};r.sdk||(r.sdk={name:`sentry.javascript.${t}`,packages:e.map(s=>({name:`${i}:@sentry/${s}`,version:wi})),version:wi}),n._metadata=r}function af(n={}){const t=te();if(!zE()||!t)return{};const e=Vi(),i=Pr(e);if(i.getTraceData)return i.getTraceData(n);const r=ae(),s=n.span||qe(),o=s?Ux(s):_y(r),a=s?ci(s):Gh(t,r),c=Ax(a);return Ih.test(o)?{"sentry-trace":o,baggage:c}:(it.warn("Invalid sentry-trace data. Cannot generate trace data"),{})}function _y(n){const{traceId:t,sampled:e,propagationSpanId:i}=n.getPropagationContext();return Dh(t,i,e)}const vy=100;function zi(n,t){const e=te(),i=Wi();if(!e)return;const{beforeBreadcrumb:r=null,maxBreadcrumbs:s=vy}=e.getOptions();if(s<=0)return;const a={timestamp:cs(),...n},c=r?Gi(()=>r(a,t)):a;c!==null&&(e.emit&&e.emit("beforeAddBreadcrumb",c,t),i.addBreadcrumb(c,s))}let md;const Sy="FunctionToString",gd=new WeakMap,xy=()=>({name:Sy,setupOnce(){md=Function.prototype.toString;try{Function.prototype.toString=function(...n){const t=hl(this),e=gd.has(te())&&t!==void 0?t:this;return md.apply(e,n)}}catch{}},setup(n){gd.set(n,!0)}}),Ey=xy,yy=[/^Script error\.?$/,/^Javascript error: Script error\.? on line 0$/,/^ResizeObserver loop completed with undelivered notifications.$/,/^Cannot redefine property: googletag$/,/^Can't find variable: gmo$/,/^undefined is not an object \(evaluating 'a\.[A-Z]'\)$/,`can't redefine non-configurable property "solana"`,"vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)","Can't find variable: _AutofillCallbackHandler",/^Non-Error promise rejection captured with value: Object Not Found Matching Id:\d+, MethodName:simulateEvent, ParamCount:\d+$/,/^Java exception was raised during method invocation$/],My="EventFilters",by=(n={})=>{let t;return{name:My,setup(e){const i=e.getOptions();t=_d(n,i)},processEvent(e,i,r){if(!t){const s=r.getOptions();t=_d(n,s)}return Ay(e,t)?null:e}}},Ty=(n={})=>({...by(n),name:"InboundFilters"});function _d(n={},t={}){return{allowUrls:[...n.allowUrls||[],...t.allowUrls||[]],denyUrls:[...n.denyUrls||[],...t.denyUrls||[]],ignoreErrors:[...n.ignoreErrors||[],...t.ignoreErrors||[],...n.disableErrorDefaults?[]:yy],ignoreTransactions:[...n.ignoreTransactions||[],...t.ignoreTransactions||[]]}}function Ay(n,t){if(n.type){if(n.type==="transaction"&&Ry(n,t.ignoreTransactions))return Pt&&it.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${bi(n)}`),!0}else{if(wy(n,t.ignoreErrors))return Pt&&it.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${bi(n)}`),!0;if(Dy(n))return Pt&&it.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${bi(n)}`),!0;if(Cy(n,t.denyUrls))return Pt&&it.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${bi(n)}.
Url: ${yo(n)}`),!0;if(!Py(n,t.allowUrls))return Pt&&it.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${bi(n)}.
Url: ${yo(n)}`),!0}return!1}function wy(n,t){return t!=null&&t.length?ef(n).some(e=>Ri(e,t)):!1}function Ry(n,t){if(!(t!=null&&t.length))return!1;const e=n.transaction;return e?Ri(e,t):!1}function Cy(n,t){if(!(t!=null&&t.length))return!1;const e=yo(n);return e?Ri(e,t):!1}function Py(n,t){if(!(t!=null&&t.length))return!0;const e=yo(n);return e?Ri(e,t):!0}function Iy(n=[]){for(let t=n.length-1;t>=0;t--){const e=n[t];if(e&&e.filename!=="<anonymous>"&&e.filename!=="[native code]")return e.filename||null}return null}function yo(n){var t,e;try{const i=[...((t=n.exception)==null?void 0:t.values)??[]].reverse().find(s=>{var o,a,c;return((o=s.mechanism)==null?void 0:o.parent_id)===void 0&&((c=(a=s.stacktrace)==null?void 0:a.frames)==null?void 0:c.length)}),r=(e=i==null?void 0:i.stacktrace)==null?void 0:e.frames;return r?Iy(r):null}catch{return Pt&&it.error(`Cannot extract url for event ${bi(n)}`),null}}function Dy(n){var t,e;return(e=(t=n.exception)==null?void 0:t.values)!=null&&e.length?!n.message&&!n.exception.values.some(i=>i.stacktrace||i.type&&i.type!=="Error"||i.value):!1}function Ly(n,t,e,i,r,s){var a;if(!((a=r.exception)!=null&&a.values)||!s||!Wn(s.originalException,Error))return;const o=r.exception.values.length>0?r.exception.values[r.exception.values.length-1]:void 0;o&&(r.exception.values=Lc(n,t,i,s.originalException,e,r.exception.values,o,0))}function Lc(n,t,e,i,r,s,o,a){if(s.length>=e+1)return s;let c=[...s];if(Wn(i[r],Error)){vd(o,a);const l=n(t,i[r]),u=c.length;Sd(l,r,u,a),c=Lc(n,t,e,i[r],r,[l,...c],l,u)}return Array.isArray(i.errors)&&i.errors.forEach((l,u)=>{if(Wn(l,Error)){vd(o,a);const d=n(t,l),h=c.length;Sd(d,`errors[${u}]`,h,a),c=Lc(n,t,e,l,r,[d,...c],d,h)}}),c}function vd(n,t){n.mechanism=n.mechanism||{type:"generic",handled:!0},n.mechanism={...n.mechanism,...n.type==="AggregateError"&&{is_exception_group:!0},exception_id:t}}function Sd(n,t,e,i){n.mechanism=n.mechanism||{type:"generic",handled:!0},n.mechanism={...n.mechanism,type:"chained",source:t,exception_id:e,parent_id:i}}function Uy(n){const t="console";di(t,n),hi(t,Ny)}function Ny(){"console"in qt&&yc.forEach(function(n){n in qt.console&&$e(qt.console,n,function(t){return _o[n]=t,function(...e){rn("console",{args:e,level:n});const r=_o[n];r==null||r.apply(qt.console,e)}})})}function Fy(n){return n==="warn"?"warning":["fatal","error","warning","log","info","debug"].includes(n)?n:"log"}const Oy="Dedupe",By=()=>{let n;return{name:Oy,processEvent(t){if(t.type)return t;try{if(zy(t,n))return Pt&&it.warn("Event dropped due to being a duplicate of previously captured event."),null}catch{}return n=t}}},ky=By;function zy(n,t){return t?!!(Hy(n,t)||Vy(n,t)):!1}function Hy(n,t){const e=n.message,i=t.message;return!(!e&&!i||e&&!i||!e&&i||e!==i||!lf(n,t)||!cf(n,t))}function Vy(n,t){const e=xd(t),i=xd(n);return!(!e||!i||e.type!==i.type||e.value!==i.value||!lf(n,t)||!cf(n,t))}function cf(n,t){let e=ju(n),i=ju(t);if(!e&&!i)return!0;if(e&&!i||!e&&i||(e=e,i=i,i.length!==e.length))return!1;for(let r=0;r<i.length;r++){const s=i[r],o=e[r];if(s.filename!==o.filename||s.lineno!==o.lineno||s.colno!==o.colno||s.function!==o.function)return!1}return!0}function lf(n,t){let e=n.fingerprint,i=t.fingerprint;if(!e&&!i)return!0;if(e&&!i||!e&&i)return!1;e=e,i=i;try{return e.join("")===i.join("")}catch{return!1}}function xd(n){var t;return((t=n.exception)==null?void 0:t.values)&&n.exception.values[0]}const Gy="thismessage:/";function uf(n){return"isRelative"in n}function Wy(n,t){const e=n.startsWith("/"),i=e?Gy:void 0;try{if("canParse"in URL&&!URL.canParse(n,i))return;const r=new URL(n,i);return e?{isRelative:e,pathname:r.pathname,search:r.search,hash:r.hash}:r}catch{}}function Xy(n){if(uf(n))return n.pathname;const t=new URL(n);return t.search="",t.hash="",["80","443"].includes(t.port)&&(t.port=""),t.password&&(t.password="%filtered%"),t.username&&(t.username="%filtered%"),t.toString()}function Ii(n){if(!n)return{};const t=n.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);if(!t)return{};const e=t[6]||"",i=t[8]||"";return{host:t[4],path:t[5],protocol:t[2],search:e,hash:i,relative:t[5]+e+i}}function $y(n){return n.split(/[?#]/,1)[0]}function Yy(n,t,e,i,r="auto.http.browser"){if(!n.fetchData)return;const{method:s,url:o}=n.fetchData,a=ai()&&t(o);if(n.endTimestamp&&a){const d=n.fetchData.__span;if(!d)return;const h=i[d];h&&(jy(h,n),delete i[d]);return}const c=!!qe(),l=a&&c?fs(Zy(o,s,r)):new Bi;if(n.fetchData.__span=l.spanContext().spanId,i[l.spanContext().spanId]=l,e(n.fetchData.url)){const d=n.args[0],h=n.args[1]||{},p=qy(d,h,ai()&&c?l:void 0);p&&(n.args[1]=h,h.headers=p)}const u=te();if(u){const d={input:n.args,response:n.response,startTimestamp:n.startTimestamp,endTimestamp:n.endTimestamp};u.emit("beforeOutgoingRequestSpan",l,d)}return l}function qy(n,t,e){const i=af({span:e}),r=i["sentry-trace"],s=i.baggage;if(!r)return;const o=t.headers||(Sh(n)?n.headers:void 0);if(o)if(Ky(o)){const a=new Headers(o);if(a.get("sentry-trace")||a.set("sentry-trace",r),s){const c=a.get("baggage");c?Ys(c)||a.set("baggage",`${c},${s}`):a.set("baggage",s)}return a}else if(Array.isArray(o)){const a=[...o];o.find(l=>l[0]==="sentry-trace")||a.push(["sentry-trace",r]);const c=o.find(l=>l[0]==="baggage"&&Ys(l[1]));return s&&!c&&a.push(["baggage",s]),a}else{const a="sentry-trace"in o?o["sentry-trace"]:void 0,c="baggage"in o?o.baggage:void 0,l=c?Array.isArray(c)?[...c]:[c]:[],u=c&&(Array.isArray(c)?c.find(d=>Ys(d)):Ys(c));return s&&!u&&l.push(s),{...o,"sentry-trace":a??r,baggage:l.length>0?l.join(","):void 0}}else return{...i}}function jy(n,t){var e;if(t.response){wh(n,t.response.status);const i=((e=t.response)==null?void 0:e.headers)&&t.response.headers.get("content-length");if(i){const r=parseInt(i);r>0&&n.setAttribute("http.response_content_length",r)}}else t.error&&n.setStatus({code:Ee,message:"internal_error"});n.end()}function Ys(n){return n.split(",").some(t=>t.trim().startsWith(gl))}function Ky(n){return typeof Headers<"u"&&Wn(n,Headers)}function Zy(n,t,e){const i=Wy(n);return{name:i?`${t} ${Xy(i)}`:t,attributes:Jy(n,i,t,e)}}function Jy(n,t,e,i){const r={url:n,type:"fetch","http.method":e,[ye]:i,[Fi]:"http.client"};return t&&(uf(t)||(r["http.url"]=t.href,r["server.address"]=t.host),t.search&&(r["http.query"]=t.search),t.hash&&(r["http.fragment"]=t.hash)),r}function df(n){if(n!==void 0)return n>=400&&n<500?"warning":n>=500?"error":void 0}const is=qt;function Qy(){return"history"in is&&!!is.history}function hf(){if(!("fetch"in is))return!1;try{return new Headers,new Request("http://www.example.com"),new Response,!0}catch{return!1}}function Uc(n){return n&&/^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(n.toString())}function tM(){var e;if(typeof EdgeRuntime=="string")return!0;if(!hf())return!1;if(Uc(is.fetch))return!0;let n=!1;const t=is.document;if(t&&typeof t.createElement=="function")try{const i=t.createElement("iframe");i.hidden=!0,t.head.appendChild(i),(e=i.contentWindow)!=null&&e.fetch&&(n=Uc(i.contentWindow.fetch)),t.head.removeChild(i)}catch(i){ui&&it.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",i)}return n}function ff(n,t){const e="fetch";di(e,n),hi(e,()=>pf(void 0,t))}function eM(n){const t="fetch-body-resolved";di(t,n),hi(t,()=>pf(iM))}function pf(n,t=!1){t&&!tM()||$e(qt,"fetch",function(e){return function(...i){const r=new Error,{method:s,url:o}=rM(i),a={args:i,fetchData:{method:s,url:o},startTimestamp:Fe()*1e3,virtualError:r,headers:sM(i)};return n||rn("fetch",{...a}),e.apply(qt,i).then(async c=>(n?n(c):rn("fetch",{...a,endTimestamp:Fe()*1e3,response:c}),c),c=>{if(rn("fetch",{...a,endTimestamp:Fe()*1e3,error:c}),cl(c)&&c.stack===void 0&&(c.stack=r.stack,Ye(c,"framesToPop",1)),c instanceof TypeError&&(c.message==="Failed to fetch"||c.message==="Load failed"||c.message==="NetworkError when attempting to fetch resource."))try{const l=new URL(a.fetchData.url);c.message=`${c.message} (${l.host})`}catch{}throw c})}})}async function nM(n,t){if(n!=null&&n.body){const e=n.body,i=e.getReader(),r=setTimeout(()=>{e.cancel().then(null,()=>{})},90*1e3);let s=!0;for(;s;){let o;try{o=setTimeout(()=>{e.cancel().then(null,()=>{})},5e3);const{done:a}=await i.read();clearTimeout(o),a&&(t(),s=!1)}catch{s=!1}finally{clearTimeout(o)}}clearTimeout(r),i.releaseLock(),e.cancel().then(null,()=>{})}}function iM(n){let t;try{t=n.clone()}catch{return}nM(t,()=>{rn("fetch-body-resolved",{endTimestamp:Fe()*1e3,response:n})})}function Nc(n,t){return!!n&&typeof n=="object"&&!!n[t]}function Ed(n){return typeof n=="string"?n:n?Nc(n,"url")?n.url:n.toString?n.toString():"":""}function rM(n){if(n.length===0)return{method:"GET",url:""};if(n.length===2){const[e,i]=n;return{url:Ed(e),method:Nc(i,"method")?String(i.method).toUpperCase():"GET"}}const t=n[0];return{url:Ed(t),method:Nc(t,"method")?String(t.method).toUpperCase():"GET"}}function sM(n){const[t,e]=n;try{if(typeof e=="object"&&e!==null&&"headers"in e&&e.headers)return new Headers(e.headers);if(Sh(t))return new Headers(t.headers)}catch{}}function oM(){return"npm"}const Xt=qt;let Fc=0;function mf(){return Fc>0}function aM(){Fc++,setTimeout(()=>{Fc--})}function Ar(n,t={}){function e(r){return typeof r=="function"}if(!e(n))return n;try{const r=n.__sentry_wrapped__;if(r)return typeof r=="function"?r:n;if(hl(n))return n}catch{return n}const i=function(...r){try{const s=r.map(o=>Ar(o,t));return n.apply(this,s)}catch(s){throw aM(),fl(o=>{o.addEventProcessor(a=>(t.mechanism&&(Mc(a,void 0),Mr(a,t.mechanism)),a.extra={...a.extra,arguments:r},a)),kE(s)}),s}};try{for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&(i[r]=n[r])}catch{}Eh(i,n),Ye(n,"__sentry_wrapped__",i);try{Object.getOwnPropertyDescriptor(i,"name").configurable&&Object.defineProperty(i,"name",{get(){return n.name}})}catch{}return i}function xl(n,t){const e=El(n,t),i={type:hM(t),value:fM(t)};return e.length&&(i.stacktrace={frames:e}),i.type===void 0&&i.value===""&&(i.value="Unrecoverable error caught"),i}function cM(n,t,e,i){const r=te(),s=r==null?void 0:r.getOptions().normalizeDepth,o=vM(t),a={__serialized__:Xh(t,s)};if(o)return{exception:{values:[xl(n,o)]},extra:a};const c={exception:{values:[{type:Po(t)?t.constructor.name:i?"UnhandledRejection":"Error",value:gM(t,{isUnhandledRejection:i})}]},extra:a};if(e){const l=El(n,e);l.length&&(c.exception.values[0].stacktrace={frames:l})}return c}function Ma(n,t){return{exception:{values:[xl(n,t)]}}}function El(n,t){const e=t.stacktrace||t.stack||"",i=uM(t),r=dM(t);try{return n(e,i,r)}catch{}return[]}const lM=/Minified React error #\d+;/i;function uM(n){return n&&lM.test(n.message)?1:0}function dM(n){return typeof n.framesToPop=="number"?n.framesToPop:0}function gf(n){return typeof WebAssembly<"u"&&typeof WebAssembly.Exception<"u"?n instanceof WebAssembly.Exception:!1}function hM(n){const t=n==null?void 0:n.name;return!t&&gf(n)?n.message&&Array.isArray(n.message)&&n.message.length==2?n.message[0]:"WebAssembly.Exception":t}function fM(n){const t=n==null?void 0:n.message;return gf(n)?Array.isArray(n.message)&&n.message.length==2?n.message[1]:"wasm exception":t?t.error&&typeof t.error.message=="string"?t.error.message:t:"No error message"}function pM(n,t,e,i){const r=(e==null?void 0:e.syntheticException)||void 0,s=yl(n,t,r,i);return Mr(s),s.level="error",e!=null&&e.event_id&&(s.event_id=e.event_id),ki(s)}function mM(n,t,e="info",i,r){const s=(i==null?void 0:i.syntheticException)||void 0,o=Oc(n,t,s,r);return o.level=e,i!=null&&i.event_id&&(o.event_id=i.event_id),ki(o)}function yl(n,t,e,i,r){let s;if(_h(t)&&t.error)return Ma(n,t.error);if(Ou(t)||qS(t)){const o=t;if("stack"in t)s=Ma(n,t);else{const a=o.name||(Ou(o)?"DOMError":"DOMException"),c=o.message?`${a}: ${o.message}`:a;s=Oc(n,c,e,i),Mc(s,c)}return"code"in o&&(s.tags={...s.tags,"DOMException.code":`${o.code}`}),s}return cl(t)?Ma(n,t):ts(t)||Po(t)?(s=cM(n,t,e,r),Mr(s,{synthetic:!0}),s):(s=Oc(n,t,e,i),Mc(s,`${t}`),Mr(s,{synthetic:!0}),s)}function Oc(n,t,e,i){const r={};if(i&&e){const s=El(n,e);s.length&&(r.exception={values:[{value:t,stacktrace:{frames:s}}]}),Mr(r,{synthetic:!0})}if(ll(t)){const{__sentry_template_string__:s,__sentry_template_values__:o}=t;return r.logentry={message:s,params:o},r}return r.message=t,r}function gM(n,{isUnhandledRejection:t}){const e=ix(n),i=t?"promise rejection":"exception";return _h(n)?`Event \`ErrorEvent\` captured as ${i} with message \`${n.message}\``:Po(n)?`Event \`${_M(n)}\` (type=${n.type}) captured as ${i}`:`Object captured as ${i} with keys: ${e}`}function _M(n){try{const t=Object.getPrototypeOf(n);return t?t.constructor.name:void 0}catch{}}function vM(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t)){const e=n[t];if(e instanceof Error)return e}}const SM=5e3;class xM extends JE{constructor(t){const e={parentSpanIsAlwaysRootSpan:!0,...t},i=Xt.SENTRY_SDK_SOURCE||oM();gy(e,"browser",["browser"],i),super(e);const r=this,{sendDefaultPii:s,_experiments:o}=r._options,a=o==null?void 0:o.enableLogs;e.sendClientReports&&Xt.document&&Xt.document.addEventListener("visibilitychange",()=>{Xt.document.visibilityState==="hidden"&&(this._flushOutcomes(),a&&ya(r))}),a&&(r.on("flush",()=>{ya(r)}),r.on("afterCaptureLog",()=>{r._logFlushIdleTimeout&&clearTimeout(r._logFlushIdleTimeout),r._logFlushIdleTimeout=setTimeout(()=>{ya(r)},SM)})),s&&(r.on("postprocessEvent",py),r.on("beforeSendSession",my))}eventFromException(t,e){return pM(this._options.stackParser,t,e,this._options.attachStacktrace)}eventFromMessage(t,e="info",i){return mM(this._options.stackParser,t,e,i,this._options.attachStacktrace)}_prepareEvent(t,e,i,r){return t.platform=t.platform||"javascript",super._prepareEvent(t,e,i,r)}}const Ml=typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__,EM=(n,t)=>n>t[1]?"poor":n>t[0]?"needs-improvement":"good",Dr=(n,t,e,i)=>{let r,s;return o=>{t.value>=0&&(o||i)&&(s=t.value-(r||0),(s||r===void 0)&&(r=t.value,t.delta=s,t.rating=EM(t.value,e),n(t)))}},Ot=qt,yM=()=>`v4-${Date.now()}-${Math.floor(Math.random()*(9e12-1))+1e12}`,ps=(n=!0)=>{var e,i;const t=(i=(e=Ot.performance)==null?void 0:e.getEntriesByType)==null?void 0:i.call(e,"navigation")[0];if(!n||t&&t.responseStart>0&&t.responseStart<performance.now())return t},ms=()=>{const n=ps();return(n==null?void 0:n.activationStart)||0},Lr=(n,t)=>{var s,o;const e=ps();let i="navigate";return e&&((s=Ot.document)!=null&&s.prerendering||ms()>0?i="prerender":(o=Ot.document)!=null&&o.wasDiscarded?i="restore":e.type&&(i=e.type.replace(/_/g,"-"))),{name:n,value:typeof t>"u"?-1:t,rating:"good",delta:0,entries:[],id:yM(),navigationType:i}},$i=(n,t,e)=>{try{if(PerformanceObserver.supportedEntryTypes.includes(n)){const i=new PerformanceObserver(r=>{Promise.resolve().then(()=>{t(r.getEntries())})});return i.observe(Object.assign({type:n,buffered:!0},e||{})),i}}catch{}},Ur=n=>{const t=e=>{var i;(e.type==="pagehide"||((i=Ot.document)==null?void 0:i.visibilityState)==="hidden")&&n(e)};Ot.document&&(addEventListener("visibilitychange",t,!0),addEventListener("pagehide",t,!0))},Uo=n=>{let t=!1;return()=>{t||(n(),t=!0)}};let Xr=-1;const MM=()=>Ot.document.visibilityState==="hidden"&&!Ot.document.prerendering?0:1/0,Mo=n=>{Ot.document.visibilityState==="hidden"&&Xr>-1&&(Xr=n.type==="visibilitychange"?n.timeStamp:0,TM())},bM=()=>{addEventListener("visibilitychange",Mo,!0),addEventListener("prerenderingchange",Mo,!0)},TM=()=>{removeEventListener("visibilitychange",Mo,!0),removeEventListener("prerenderingchange",Mo,!0)},No=()=>(Ot.document&&Xr<0&&(Xr=MM(),bM()),{get firstHiddenTime(){return Xr}}),gs=n=>{var t;(t=Ot.document)!=null&&t.prerendering?addEventListener("prerenderingchange",()=>n(),!0):n()},AM=[1800,3e3],wM=(n,t={})=>{gs(()=>{const e=No(),i=Lr("FCP");let r;const o=$i("paint",a=>{a.forEach(c=>{c.name==="first-contentful-paint"&&(o.disconnect(),c.startTime<e.firstHiddenTime&&(i.value=Math.max(c.startTime-ms(),0),i.entries.push(c),r(!0)))})});o&&(r=Dr(n,i,AM,t.reportAllChanges))})},RM=[.1,.25],CM=(n,t={})=>{wM(Uo(()=>{const e=Lr("CLS",0);let i,r=0,s=[];const o=c=>{c.forEach(l=>{if(!l.hadRecentInput){const u=s[0],d=s[s.length-1];r&&u&&d&&l.startTime-d.startTime<1e3&&l.startTime-u.startTime<5e3?(r+=l.value,s.push(l)):(r=l.value,s=[l])}}),r>e.value&&(e.value=r,e.entries=s,i())},a=$i("layout-shift",o);a&&(i=Dr(n,e,RM,t.reportAllChanges),Ur(()=>{o(a.takeRecords()),i(!0)}),setTimeout(i,0))}))},PM=[100,300],IM=(n,t={})=>{gs(()=>{const e=No(),i=Lr("FID");let r;const s=c=>{c.startTime<e.firstHiddenTime&&(i.value=c.processingStart-c.startTime,i.entries.push(c),r(!0))},o=c=>{c.forEach(s)},a=$i("first-input",o);r=Dr(n,i,PM,t.reportAllChanges),a&&Ur(Uo(()=>{o(a.takeRecords()),a.disconnect()}))})};let _f=0,ba=1/0,qs=0;const DM=n=>{n.forEach(t=>{t.interactionId&&(ba=Math.min(ba,t.interactionId),qs=Math.max(qs,t.interactionId),_f=qs?(qs-ba)/7+1:0)})};let Bc;const LM=()=>Bc?_f:performance.interactionCount||0,UM=()=>{"interactionCount"in performance||Bc||(Bc=$i("event",DM,{type:"event",buffered:!0,durationThreshold:0}))},Un=[],Ta=new Map,NM=40;let FM=0;const OM=()=>LM()-FM,BM=()=>{const n=Math.min(Un.length-1,Math.floor(OM()/50));return Un[n]},Aa=10,kM=[],zM=n=>{var i;if(kM.forEach(r=>r(n)),!(n.interactionId||n.entryType==="first-input"))return;const t=Un[Un.length-1],e=Ta.get(n.interactionId);if(e||Un.length<Aa||t&&n.duration>t.latency){if(e)n.duration>e.latency?(e.entries=[n],e.latency=n.duration):n.duration===e.latency&&n.startTime===((i=e.entries[0])==null?void 0:i.startTime)&&e.entries.push(n);else{const r={id:n.interactionId,latency:n.duration,entries:[n]};Ta.set(r.id,r),Un.push(r)}Un.sort((r,s)=>s.latency-r.latency),Un.length>Aa&&Un.splice(Aa).forEach(r=>Ta.delete(r.id))}},vf=n=>{var i;const t=Ot.requestIdleCallback||Ot.setTimeout;let e=-1;return n=Uo(n),((i=Ot.document)==null?void 0:i.visibilityState)==="hidden"?n():(e=t(n),Ur(n)),e},HM=[200,500],VM=(n,t={})=>{"PerformanceEventTiming"in Ot&&"interactionId"in PerformanceEventTiming.prototype&&gs(()=>{UM();const e=Lr("INP");let i;const r=o=>{vf(()=>{o.forEach(zM);const a=BM();a&&a.latency!==e.value&&(e.value=a.latency,e.entries=a.entries,i())})},s=$i("event",r,{durationThreshold:t.durationThreshold!=null?t.durationThreshold:NM});i=Dr(n,e,HM,t.reportAllChanges),s&&(s.observe({type:"first-input",buffered:!0}),Ur(()=>{r(s.takeRecords()),i(!0)}))})},GM=[2500,4e3],yd={},WM=(n,t={})=>{gs(()=>{const e=No(),i=Lr("LCP");let r;const s=a=>{t.reportAllChanges||(a=a.slice(-1)),a.forEach(c=>{c.startTime<e.firstHiddenTime&&(i.value=Math.max(c.startTime-ms(),0),i.entries=[c],r())})},o=$i("largest-contentful-paint",s);if(o){r=Dr(n,i,GM,t.reportAllChanges);const a=Uo(()=>{yd[i.id]||(s(o.takeRecords()),o.disconnect(),yd[i.id]=!0,r(!0))});["keydown","click"].forEach(c=>{Ot.document&&addEventListener(c,()=>vf(a),{once:!0,capture:!0})}),Ur(a)}})},XM=[800,1800],kc=n=>{var t,e;(t=Ot.document)!=null&&t.prerendering?gs(()=>kc(n)):((e=Ot.document)==null?void 0:e.readyState)!=="complete"?addEventListener("load",()=>kc(n),!0):setTimeout(n,0)},$M=(n,t={})=>{const e=Lr("TTFB"),i=Dr(n,e,XM,t.reportAllChanges);kc(()=>{const r=ps();r&&(e.value=Math.max(r.responseStart-ms(),0),e.entries=[r],i(!0))})},$r={},bo={};let Sf,xf,Ef,yf,Mf;function bf(n,t=!1){return _s("cls",n,ZM,Sf,t)}function YM(n,t=!1){return _s("lcp",n,QM,Ef,t)}function qM(n){return _s("fid",n,JM,xf)}function jM(n){return _s("ttfb",n,tb,yf)}function KM(n){return _s("inp",n,eb,Mf)}function rs(n,t){return Tf(n,t),bo[n]||(nb(n),bo[n]=!0),Af(n,t)}function Nr(n,t){const e=$r[n];if(e!=null&&e.length)for(const i of e)try{i(t)}catch(r){Ml&&it.error(`Error while triggering instrumentation handler.
Type: ${n}
Name: ${$n(i)}
Error:`,r)}}function ZM(){return CM(n=>{Nr("cls",{metric:n}),Sf=n},{reportAllChanges:!0})}function JM(){return IM(n=>{Nr("fid",{metric:n}),xf=n})}function QM(){return WM(n=>{Nr("lcp",{metric:n}),Ef=n},{reportAllChanges:!0})}function tb(){return $M(n=>{Nr("ttfb",{metric:n}),yf=n})}function eb(){return VM(n=>{Nr("inp",{metric:n}),Mf=n})}function _s(n,t,e,i,r=!1){Tf(n,t);let s;return bo[n]||(s=e(),bo[n]=!0),i&&t({metric:i}),Af(n,t,r?s:void 0)}function nb(n){const t={};n==="event"&&(t.durationThreshold=0),$i(n,e=>{Nr(n,{entries:e})},t)}function Tf(n,t){$r[n]=$r[n]||[],$r[n].push(t)}function Af(n,t,e){return()=>{e&&e();const i=$r[n];if(!i)return;const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}function ib(n){return"duration"in n}function wa(n){return typeof n=="number"&&isFinite(n)}function Yn(n,t,e,{...i}){const r=ie(n).start_timestamp;return r&&r>t&&typeof n.updateStartTime=="function"&&n.updateStartTime(t),qh(n,()=>{const s=fs({startTime:t,...i});return s&&s.end(e),s})}function wf(n){var m;const t=te();if(!t)return;const{name:e,transaction:i,attributes:r,startTime:s}=n,{release:o,environment:a,sendDefaultPii:c}=t.getOptions(),l=t.getIntegrationByName("Replay"),u=l==null?void 0:l.getReplayId(),d=ae(),h=d.getUser(),p=h!==void 0?h.email||h.id||h.ip_address:void 0;let g;try{g=d.getScopeData().contexts.profile.profile_id}catch{}const v={release:o,environment:a,user:p||void 0,profile_id:g||void 0,replay_id:u||void 0,transaction:i,"user_agent.original":(m=Ot.navigator)==null?void 0:m.userAgent,"client.address":c?"{{auto}}":void 0,...r};return fs({name:e,attributes:v,startTime:s,experimental:{standalone:!0}})}function bl(){return Ot.addEventListener&&Ot.performance}function pe(n){return n/1e3}function Rf(n){let t="unknown",e="unknown",i="";for(const r of n){if(r==="/"){[t,e]=n.split("/");break}if(!isNaN(Number(r))){t=i==="h"?"http":i,e=n.split(i)[1];break}i+=r}return i===n&&(t=i),{name:t,version:e}}function rb(){let n=0,t,e;if(!ob())return;let i=!1;function r(){i||(i=!0,e&&sb(n,t,e),s())}const s=bf(({metric:o})=>{const a=o.entries[o.entries.length-1];a&&(n=o.value,t=a)},!0);Ur(()=>{r()}),setTimeout(()=>{const o=te();if(!o)return;const a=o.on("startNavigationSpan",()=>{r(),a==null||a()}),c=qe();if(c){const l=Oe(c);ie(l).op==="pageload"&&(e=l.spanContext().spanId)}},0)}function sb(n,t,e){var c;Ml&&it.log(`Sending CLS span (${n})`);const i=pe((on()||0)+((t==null?void 0:t.startTime)||0)),r=ae().getScopeData().transactionName,s=t?Ni((c=t.sources[0])==null?void 0:c.node):"Layout shift",o={[ye]:"auto.http.browser.cls",[Fi]:"ui.webvital.cls",[ds]:(t==null?void 0:t.duration)||0,"sentry.pageload.span_id":e},a=wf({name:s,transaction:r,attributes:o,startTime:i});a&&(a.addEvent("cls",{[Do]:"",[Lo]:n}),a.end(i))}function ob(){try{return PerformanceObserver.supportedEntryTypes.includes("layout-shift")}catch{return!1}}const ab=2147483647;let Md=0,Te={},ze,hr;function cb({recordClsStandaloneSpans:n}){const t=bl();if(t&&on()){t.mark&&Ot.performance.mark("sentry-tracing-init");const e=pb(),i=fb(),r=mb(),s=n?rb():hb();return()=>{e(),i(),r(),s==null||s()}}return()=>{}}function lb(){rs("longtask",({entries:n})=>{const t=qe();if(!t)return;const{op:e,start_timestamp:i}=ie(t);for(const r of n){const s=pe(on()+r.startTime),o=pe(r.duration);e==="navigation"&&i&&s<i||Yn(t,s,s+o,{name:"Main UI thread blocked",op:"ui.long-task",attributes:{[ye]:"auto.ui.browser.metrics"}})}})}function ub(){new PerformanceObserver(t=>{const e=qe();if(e)for(const i of t.getEntries()){if(!i.scripts[0])continue;const r=pe(on()+i.startTime),{start_timestamp:s,op:o}=ie(e);if(o==="navigation"&&s&&r<s)continue;const a=pe(i.duration),c={[ye]:"auto.ui.browser.metrics"},l=i.scripts[0],{invoker:u,invokerType:d,sourceURL:h,sourceFunctionName:p,sourceCharPosition:g}=l;c["browser.script.invoker"]=u,c["browser.script.invoker_type"]=d,h&&(c["code.filepath"]=h),p&&(c["code.function"]=p),g!==-1&&(c["browser.script.source_char_position"]=g),Yn(e,r,r+a,{name:"Main UI thread blocked",op:"ui.long-animation-frame",attributes:c})}}).observe({type:"long-animation-frame",buffered:!0})}function db(){rs("event",({entries:n})=>{const t=qe();if(t){for(const e of n)if(e.name==="click"){const i=pe(on()+e.startTime),r=pe(e.duration),s={name:Ni(e.target),op:`ui.interaction.${e.name}`,startTime:i,attributes:{[ye]:"auto.ui.browser.metrics"}},o=xh(e.target);o&&(s.attributes["ui.component_name"]=o),Yn(t,i,i+r,s)}}})}function hb(){return bf(({metric:n})=>{const t=n.entries[n.entries.length-1];t&&(Te.cls={value:n.value,unit:""},hr=t)},!0)}function fb(){return YM(({metric:n})=>{const t=n.entries[n.entries.length-1];t&&(Te.lcp={value:n.value,unit:"millisecond"},ze=t)},!0)}function pb(){return qM(({metric:n})=>{const t=n.entries[n.entries.length-1];if(!t)return;const e=pe(on()),i=pe(t.startTime);Te.fid={value:n.value,unit:"millisecond"},Te["mark.fid"]={value:e+i,unit:"second"}})}function mb(){return jM(({metric:n})=>{n.entries[n.entries.length-1]&&(Te.ttfb={value:n.value,unit:"millisecond"})})}function gb(n,t){const e=bl(),i=on();if(!(e!=null&&e.getEntries)||!i)return;const r=pe(i),s=e.getEntries(),{op:o,start_timestamp:a}=ie(n);if(s.slice(Md).forEach(c=>{const l=pe(c.startTime),u=pe(Math.max(0,c.duration));if(!(o==="navigation"&&a&&r+l<a))switch(c.entryType){case"navigation":{vb(n,c,r);break}case"mark":case"paint":case"measure":{_b(n,c,l,u,r);const d=No(),h=c.startTime<d.firstHiddenTime;c.name==="first-paint"&&h&&(Te.fp={value:c.startTime,unit:"millisecond"}),c.name==="first-contentful-paint"&&h&&(Te.fcp={value:c.startTime,unit:"millisecond"});break}case"resource":{Eb(n,c,c.name,l,u,r);break}}}),Md=Math.max(s.length-1,0),yb(n),o==="pageload"){bb(Te);const c=Te["mark.fid"];c&&Te.fid&&(Yn(n,c.value,c.value+pe(Te.fid.value),{name:"first input delay",op:"ui.action",attributes:{[ye]:"auto.ui.browser.metrics"}}),delete Te["mark.fid"]),(!("fcp"in Te)||!t.recordClsOnPageloadSpan)&&delete Te.cls,Object.entries(Te).forEach(([l,u])=>{fE(l,u.value,u.unit)}),n.setAttribute("performance.timeOrigin",r),n.setAttribute("performance.activationStart",ms()),Mb(n)}ze=void 0,hr=void 0,Te={}}function _b(n,t,e,i,r){const s=ps(!1),o=pe(s?s.requestStart:0),a=r+Math.max(e,o),c=r+e,l=c+i,u={[ye]:"auto.resource.browser.metrics"};a!==c&&(u["sentry.browser.measure_happened_before_request"]=!0,u["sentry.browser.measure_start_time"]=a),a<=l&&Yn(n,a,l,{name:t.name,op:t.entryType,attributes:u})}function vb(n,t,e){["unloadEvent","redirect","domContentLoadedEvent","loadEvent","connect"].forEach(i=>{js(n,t,i,e)}),js(n,t,"secureConnection",e,"TLS/SSL"),js(n,t,"fetch",e,"cache"),js(n,t,"domainLookup",e,"DNS"),xb(n,t,e)}function js(n,t,e,i,r=e){const s=Sb(e),o=t[s],a=t[`${e}Start`];!a||!o||Yn(n,i+pe(a),i+pe(o),{op:`browser.${r}`,name:t.name,attributes:{[ye]:"auto.ui.browser.metrics",...e==="redirect"&&t.redirectCount!=null?{"http.redirect_count":t.redirectCount}:{}}})}function Sb(n){return n==="secureConnection"?"connectEnd":n==="fetch"?"domainLookupStart":`${n}End`}function xb(n,t,e){const i=e+pe(t.requestStart),r=e+pe(t.responseEnd),s=e+pe(t.responseStart);t.responseEnd&&(Yn(n,i,r,{op:"browser.request",name:t.name,attributes:{[ye]:"auto.ui.browser.metrics"}}),Yn(n,s,r,{op:"browser.response",name:t.name,attributes:{[ye]:"auto.ui.browser.metrics"}}))}function Eb(n,t,e,i,r,s){if(t.initiatorType==="xmlhttprequest"||t.initiatorType==="fetch")return;const o=Ii(e),a={[ye]:"auto.resource.browser.metrics"};Ra(a,t,"transferSize","http.response_transfer_size"),Ra(a,t,"encodedBodySize","http.response_content_length"),Ra(a,t,"decodedBodySize","http.decoded_response_content_length");const c=t.deliveryType;c!=null&&(a["http.response_delivery_type"]=c);const l=t.renderBlockingStatus;l&&(a["resource.render_blocking_status"]=l),o.protocol&&(a["url.scheme"]=o.protocol.split(":").pop()),o.host&&(a["server.address"]=o.host),a["url.same_origin"]=e.includes(Ot.location.origin);const{name:u,version:d}=Rf(t.nextHopProtocol);a["network.protocol.name"]=u,a["network.protocol.version"]=d;const h=s+i,p=h+r;Yn(n,h,p,{name:e.replace(Ot.location.origin,""),op:t.initiatorType?`resource.${t.initiatorType}`:"resource.other",attributes:a})}function yb(n){const t=Ot.navigator;if(!t)return;const e=t.connection;e&&(e.effectiveType&&n.setAttribute("effectiveConnectionType",e.effectiveType),e.type&&n.setAttribute("connectionType",e.type),wa(e.rtt)&&(Te["connection.rtt"]={value:e.rtt,unit:"millisecond"})),wa(t.deviceMemory)&&n.setAttribute("deviceMemory",`${t.deviceMemory} GB`),wa(t.hardwareConcurrency)&&n.setAttribute("hardwareConcurrency",String(t.hardwareConcurrency))}function Mb(n){ze&&(ze.element&&n.setAttribute("lcp.element",Ni(ze.element)),ze.id&&n.setAttribute("lcp.id",ze.id),ze.url&&n.setAttribute("lcp.url",ze.url.trim().slice(0,200)),ze.loadTime!=null&&n.setAttribute("lcp.loadTime",ze.loadTime),ze.renderTime!=null&&n.setAttribute("lcp.renderTime",ze.renderTime),n.setAttribute("lcp.size",ze.size)),hr!=null&&hr.sources&&hr.sources.forEach((t,e)=>n.setAttribute(`cls.source.${e+1}`,Ni(t.node)))}function Ra(n,t,e,i){const r=t[e];r!=null&&r<ab&&(n[i]=r)}function bb(n){const t=ps(!1);if(!t)return;const{responseStart:e,requestStart:i}=t;i<=e&&(n["ttfb.requestTime"]={value:e-i,unit:"millisecond"})}const Tb=1e3;let bd,zc,Hc;function Ab(n){const t="dom";di(t,n),hi(t,wb)}function wb(){if(!Ot.document)return;const n=rn.bind(null,"dom"),t=Td(n,!0);Ot.document.addEventListener("click",t,!1),Ot.document.addEventListener("keypress",t,!1),["EventTarget","Node"].forEach(e=>{var s,o;const r=(s=Ot[e])==null?void 0:s.prototype;(o=r==null?void 0:r.hasOwnProperty)!=null&&o.call(r,"addEventListener")&&($e(r,"addEventListener",function(a){return function(c,l,u){if(c==="click"||c=="keypress")try{const d=this.__sentry_instrumentation_handlers__=this.__sentry_instrumentation_handlers__||{},h=d[c]=d[c]||{refCount:0};if(!h.handler){const p=Td(n);h.handler=p,a.call(this,c,p,u)}h.refCount++}catch{}return a.call(this,c,l,u)}}),$e(r,"removeEventListener",function(a){return function(c,l,u){if(c==="click"||c=="keypress")try{const d=this.__sentry_instrumentation_handlers__||{},h=d[c];h&&(h.refCount--,h.refCount<=0&&(a.call(this,c,h.handler,u),h.handler=void 0,delete d[c]),Object.keys(d).length===0&&delete this.__sentry_instrumentation_handlers__)}catch{}return a.call(this,c,l,u)}}))})}function Rb(n){if(n.type!==zc)return!1;try{if(!n.target||n.target._sentryId!==Hc)return!1}catch{}return!0}function Cb(n,t){return n!=="keypress"?!1:t!=null&&t.tagName?!(t.tagName==="INPUT"||t.tagName==="TEXTAREA"||t.isContentEditable):!0}function Td(n,t=!1){return e=>{if(!e||e._sentryCaptured)return;const i=Pb(e);if(Cb(e.type,i))return;Ye(e,"_sentryCaptured",!0),i&&!i._sentryId&&Ye(i,"_sentryId",nn());const r=e.type==="keypress"?"input":e.type;Rb(e)||(n({event:e,name:r,global:t}),zc=e.type,Hc=i?i._sentryId:void 0),clearTimeout(bd),bd=Ot.setTimeout(()=>{Hc=void 0,zc=void 0},Tb)}}function Pb(n){try{return n.target}catch{return null}}let Ks;function Tl(n){const t="history";di(t,n),hi(t,Ib)}function Ib(){if(Ot.addEventListener("popstate",()=>{const t=Ot.location.href,e=Ks;if(Ks=t,e===t)return;rn("history",{from:e,to:t})}),!Qy())return;function n(t){return function(...e){const i=e.length>2?e[2]:void 0;if(i){const r=Ks,s=String(i);if(Ks=s,r===s)return t.apply(this,e);rn("history",{from:r,to:s})}return t.apply(this,e)}}$e(Ot.history,"pushState",n),$e(Ot.history,"replaceState",n)}const ho={};function Db(n){const t=ho[n];if(t)return t;let e=Ot[n];if(Uc(e))return ho[n]=e.bind(Ot);const i=Ot.document;if(i&&typeof i.createElement=="function")try{const r=i.createElement("iframe");r.hidden=!0,i.head.appendChild(r);const s=r.contentWindow;s!=null&&s[n]&&(e=s[n]),i.head.removeChild(r)}catch(r){Ml&&it.warn(`Could not create sandbox iframe for ${n} check, bailing to window.${n}: `,r)}return e&&(ho[n]=e.bind(Ot))}function Ad(n){ho[n]=void 0}const fr="__sentry_xhr_v3__";function Cf(n){const t="xhr";di(t,n),hi(t,Lb)}function Lb(){if(!Ot.XMLHttpRequest)return;const n=XMLHttpRequest.prototype;n.open=new Proxy(n.open,{apply(t,e,i){const r=new Error,s=Fe()*1e3,o=Vn(i[0])?i[0].toUpperCase():void 0,a=Ub(i[1]);if(!o||!a)return t.apply(e,i);e[fr]={method:o,url:a,request_headers:{}},o==="POST"&&a.match(/sentry_key/)&&(e.__sentry_own_request__=!0);const c=()=>{const l=e[fr];if(l&&e.readyState===4){try{l.status_code=e.status}catch{}const u={endTimestamp:Fe()*1e3,startTimestamp:s,xhr:e,virtualError:r};rn("xhr",u)}};return"onreadystatechange"in e&&typeof e.onreadystatechange=="function"?e.onreadystatechange=new Proxy(e.onreadystatechange,{apply(l,u,d){return c(),l.apply(u,d)}}):e.addEventListener("readystatechange",c),e.setRequestHeader=new Proxy(e.setRequestHeader,{apply(l,u,d){const[h,p]=d,g=u[fr];return g&&Vn(h)&&Vn(p)&&(g.request_headers[h.toLowerCase()]=p),l.apply(u,d)}}),t.apply(e,i)}}),n.send=new Proxy(n.send,{apply(t,e,i){const r=e[fr];if(!r)return t.apply(e,i);i[0]!==void 0&&(r.body=i[0]);const s={startTimestamp:Fe()*1e3,xhr:e};return rn("xhr",s),t.apply(e,i)}})}function Ub(n){if(Vn(n))return n;try{return n.toString()}catch{}}const Ca=[],fo=new Map;function Nb(){if(bl()&&on()){const t=Fb();return()=>{t()}}return()=>{}}const wd={click:"click",pointerdown:"click",pointerup:"click",mousedown:"click",mouseup:"click",touchstart:"click",touchend:"click",mouseover:"hover",mouseout:"hover",mouseenter:"hover",mouseleave:"hover",pointerover:"hover",pointerout:"hover",pointerenter:"hover",pointerleave:"hover",dragstart:"drag",dragend:"drag",drag:"drag",dragenter:"drag",dragleave:"drag",dragover:"drag",drop:"drag",keydown:"press",keyup:"press",keypress:"press",input:"press"};function Fb(){return KM(({metric:n})=>{if(n.value==null)return;const t=n.entries.find(g=>g.duration===n.value&&wd[g.name]);if(!t)return;const{interactionId:e}=t,i=wd[t.name],r=pe(on()+t.startTime),s=pe(n.value),o=qe(),a=o?Oe(o):void 0,l=(e!=null?fo.get(e):void 0)||a,u=l?ie(l).description:ae().getScopeData().transactionName,d=Ni(t.target),h={[ye]:"auto.http.browser.inp",[Fi]:`ui.interaction.${i}`,[ds]:t.duration},p=wf({name:d,transaction:u,attributes:h,startTime:r});p&&(p.addEvent("inp",{[Do]:"millisecond",[Lo]:n.value}),p.end(r+s))})}function Ob(){const n=({entries:t})=>{const e=qe(),i=e&&Oe(e);t.forEach(r=>{if(!ib(r)||!i)return;const s=r.interactionId;if(s!=null&&!fo.has(s)){if(Ca.length>10){const o=Ca.shift();fo.delete(o)}Ca.push(s),fo.set(s,i)}})};rs("event",n),rs("first-input",n)}function Bb(n,t=Db("fetch")){let e=0,i=0;function r(s){const o=s.body.length;e+=o,i++;const a={body:s.body,method:"POST",referrerPolicy:"strict-origin",headers:n.headers,keepalive:e<=6e4&&i<15,...n.fetchOptions};if(!t)return Ad("fetch"),Eo("No fetch implementation available");try{return t(n.url,a).then(c=>(e-=o,i--,{statusCode:c.status,headers:{"x-sentry-rate-limits":c.headers.get("X-Sentry-Rate-Limits"),"retry-after":c.headers.get("Retry-After")}}))}catch(c){return Ad("fetch"),e-=o,i--,Eo(c)}}return fy(n,r)}const kb=30,zb=50;function Vc(n,t,e,i){const r={filename:n,function:t==="<anonymous>"?Oi:t,in_app:!0};return e!==void 0&&(r.lineno=e),i!==void 0&&(r.colno=i),r}const Hb=/^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,Vb=/^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,Gb=/\((\S*)(?::(\d+))(?::(\d+))\)/,Wb=n=>{const t=Hb.exec(n);if(t){const[,i,r,s]=t;return Vc(i,Oi,+r,+s)}const e=Vb.exec(n);if(e){if(e[2]&&e[2].indexOf("eval")===0){const o=Gb.exec(e[2]);o&&(e[2]=o[1],e[3]=o[2],e[4]=o[3])}const[r,s]=Pf(e[1]||Oi,e[2]);return Vc(s,r,e[3]?+e[3]:void 0,e[4]?+e[4]:void 0)}},Xb=[kb,Wb],$b=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,Yb=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i,qb=n=>{const t=$b.exec(n);if(t){if(t[3]&&t[3].indexOf(" > eval")>-1){const s=Yb.exec(t[3]);s&&(t[1]=t[1]||"eval",t[3]=s[1],t[4]=s[2],t[5]="")}let i=t[3],r=t[1]||Oi;return[r,i]=Pf(r,i),Vc(i,r,t[4]?+t[4]:void 0,t[5]?+t[5]:void 0)}},jb=[zb,qb],Kb=[Xb,jb],Zb=Bh(...Kb),Pf=(n,t)=>{const e=n.indexOf("safari-extension")!==-1,i=n.indexOf("safari-web-extension")!==-1;return e||i?[n.indexOf("@")!==-1?n.split("@")[0]:Oi,e?`safari-extension:${t}`:`safari-web-extension:${t}`]:[n,t]},sn=typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__,Zs=1024,Jb="Breadcrumbs",Qb=(n={})=>{const t={console:!0,dom:!0,fetch:!0,history:!0,sentry:!0,xhr:!0,...n};return{name:Jb,setup(e){t.console&&Uy(iT(e)),t.dom&&Ab(nT(e,t.dom)),t.xhr&&Cf(rT(e)),t.fetch&&ff(sT(e)),t.history&&Tl(oT(e)),t.sentry&&e.on("beforeSendEvent",eT(e))}}},tT=Qb;function eT(n){return function(e){te()===n&&zi({category:`sentry.${e.type==="transaction"?"transaction":"event"}`,event_id:e.event_id,level:e.level,message:bi(e)},{event:e})}}function nT(n,t){return function(i){if(te()!==n)return;let r,s,o=typeof t=="object"?t.serializeAttribute:void 0,a=typeof t=="object"&&typeof t.maxStringLength=="number"?t.maxStringLength:void 0;a&&a>Zs&&(sn&&it.warn(`\`dom.maxStringLength\` cannot exceed ${Zs}, but a value of ${a} was configured. Sentry will use ${Zs} instead.`),a=Zs),typeof o=="string"&&(o=[o]);try{const l=i.event,u=aT(l)?l.target:l;r=Ni(u,{keyAttrs:o,maxStringLength:a}),s=xh(u)}catch{r="<unknown>"}if(r.length===0)return;const c={category:`ui.${i.name}`,message:r};s&&(c.data={"ui.component_name":s}),zi(c,{event:i.event,name:i.name,global:i.global})}}function iT(n){return function(e){if(te()!==n)return;const i={category:"console",data:{arguments:e.args,logger:"console"},level:Fy(e.level),message:Bu(e.args," ")};if(e.level==="assert")if(e.args[0]===!1)i.message=`Assertion failed: ${Bu(e.args.slice(1)," ")||"console.assert"}`,i.data.arguments=e.args.slice(1);else return;zi(i,{input:e.args,level:e.level})}}function rT(n){return function(e){if(te()!==n)return;const{startTimestamp:i,endTimestamp:r}=e,s=e.xhr[fr];if(!i||!r||!s)return;const{method:o,url:a,status_code:c,body:l}=s,u={method:o,url:a,status_code:c},d={xhr:e.xhr,input:l,startTimestamp:i,endTimestamp:r},h={category:"xhr",data:u,type:"http",level:df(c)};n.emit("beforeOutgoingRequestBreadcrumb",h,d),zi(h,d)}}function sT(n){return function(e){if(te()!==n)return;const{startTimestamp:i,endTimestamp:r}=e;if(r&&!(e.fetchData.url.match(/sentry_key/)&&e.fetchData.method==="POST"))if(e.fetchData.method,e.fetchData.url,e.error){const s=e.fetchData,o={data:e.error,input:e.args,startTimestamp:i,endTimestamp:r},a={category:"fetch",data:s,level:"error",type:"http"};n.emit("beforeOutgoingRequestBreadcrumb",a,o),zi(a,o)}else{const s=e.response,o={...e.fetchData,status_code:s==null?void 0:s.status};e.fetchData.request_body_size,e.fetchData.response_body_size,s==null||s.status;const a={input:e.args,response:s,startTimestamp:i,endTimestamp:r},c={category:"fetch",data:o,type:"http",level:df(o.status_code)};n.emit("beforeOutgoingRequestBreadcrumb",c,a),zi(c,a)}}}function oT(n){return function(e){if(te()!==n)return;let i=e.from,r=e.to;const s=Ii(Xt.location.href);let o=i?Ii(i):void 0;const a=Ii(r);o!=null&&o.path||(o=s),s.protocol===a.protocol&&s.host===a.host&&(r=a.relative),s.protocol===o.protocol&&s.host===o.host&&(i=o.relative),zi({category:"navigation",data:{from:i,to:r}})}}function aT(n){return!!n&&!!n.target}const cT=["EventTarget","Window","Node","ApplicationCache","AudioTrackList","BroadcastChannel","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","SharedWorker","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"],lT="BrowserApiErrors",uT=(n={})=>{const t={XMLHttpRequest:!0,eventTarget:!0,requestAnimationFrame:!0,setInterval:!0,setTimeout:!0,...n};return{name:lT,setupOnce(){t.setTimeout&&$e(Xt,"setTimeout",Rd),t.setInterval&&$e(Xt,"setInterval",Rd),t.requestAnimationFrame&&$e(Xt,"requestAnimationFrame",hT),t.XMLHttpRequest&&"XMLHttpRequest"in Xt&&$e(XMLHttpRequest.prototype,"send",fT);const e=t.eventTarget;e&&(Array.isArray(e)?e:cT).forEach(pT)}}},dT=uT;function Rd(n){return function(...t){const e=t[0];return t[0]=Ar(e,{mechanism:{data:{function:$n(n)},handled:!1,type:"instrument"}}),n.apply(this,t)}}function hT(n){return function(t){return n.apply(this,[Ar(t,{mechanism:{data:{function:"requestAnimationFrame",handler:$n(n)},handled:!1,type:"instrument"}})])}}function fT(n){return function(...t){const e=this;return["onload","onerror","onprogress","onreadystatechange"].forEach(r=>{r in e&&typeof e[r]=="function"&&$e(e,r,function(s){const o={mechanism:{data:{function:r,handler:$n(s)},handled:!1,type:"instrument"}},a=hl(s);return a&&(o.mechanism.data.handler=$n(a)),Ar(s,o)})}),n.apply(this,t)}}function pT(n){var i,r;const e=(i=Xt[n])==null?void 0:i.prototype;(r=e==null?void 0:e.hasOwnProperty)!=null&&r.call(e,"addEventListener")&&($e(e,"addEventListener",function(s){return function(o,a,c){try{mT(a)&&(a.handleEvent=Ar(a.handleEvent,{mechanism:{data:{function:"handleEvent",handler:$n(a),target:n},handled:!1,type:"instrument"}}))}catch{}return s.apply(this,[o,Ar(a,{mechanism:{data:{function:"addEventListener",handler:$n(a),target:n},handled:!1,type:"instrument"}}),c])}}),$e(e,"removeEventListener",function(s){return function(o,a,c){try{const l=a.__sentry_wrapped__;l&&s.call(this,o,l,c)}catch{}return s.call(this,o,a,c)}}))}function mT(n){return typeof n.handleEvent=="function"}const gT=()=>({name:"BrowserSession",setupOnce(){if(typeof Xt.document>"u"){sn&&it.warn("Using the `browserSessionIntegration` in non-browser environments is not supported.");return}ad({ignoreDuration:!0}),cd(),Tl(({from:n,to:t})=>{n!==void 0&&n!==t&&(ad({ignoreDuration:!0}),cd())})}}),_T="GlobalHandlers",vT=(n={})=>{const t={onerror:!0,onunhandledrejection:!0,...n};return{name:_T,setupOnce(){Error.stackTraceLimit=50},setup(e){t.onerror&&(xT(e),Cd("onerror")),t.onunhandledrejection&&(ET(e),Cd("onunhandledrejection"))}}},ST=vT;function xT(n){kh(t=>{const{stackParser:e,attachStacktrace:i}=If();if(te()!==n||mf())return;const{msg:r,url:s,line:o,column:a,error:c}=t,l=bT(yl(e,c||r,void 0,i,!1),s,o,a);l.level="error",Zh(l,{originalException:c,mechanism:{handled:!1,type:"onerror"}})})}function ET(n){zh(t=>{const{stackParser:e,attachStacktrace:i}=If();if(te()!==n||mf())return;const r=yT(t),s=ul(r)?MT(r):yl(e,r,void 0,i,!0);s.level="error",Zh(s,{originalException:r,mechanism:{handled:!1,type:"onunhandledrejection"}})})}function yT(n){if(ul(n))return n;try{if("reason"in n)return n.reason;if("detail"in n&&"reason"in n.detail)return n.detail.reason}catch{}return n}function MT(n){return{exception:{values:[{type:"UnhandledRejection",value:`Non-Error promise rejection captured with value: ${String(n)}`}]}}}function bT(n,t,e,i){const r=n.exception=n.exception||{},s=r.values=r.values||[],o=s[0]=s[0]||{},a=o.stacktrace=o.stacktrace||{},c=a.frames=a.frames||[],l=i,u=e,d=Vn(t)&&t.length>0?t:as();return c.length===0&&c.push({colno:l,filename:d,function:Oi,in_app:!0,lineno:u}),n}function Cd(n){sn&&it.log(`Global Handler attached: ${n}`)}function If(){const n=te();return(n==null?void 0:n.getOptions())||{stackParser:()=>[],attachStacktrace:!1}}const TT=()=>({name:"HttpContext",preprocessEvent(n){var o,a;if(!Xt.navigator&&!Xt.location&&!Xt.document)return;const t=((o=n.request)==null?void 0:o.url)||as(),{referrer:e}=Xt.document||{},{userAgent:i}=Xt.navigator||{},r={...(a=n.request)==null?void 0:a.headers,...e&&{Referer:e},...i&&{"User-Agent":i}},s={...n.request,...t&&{url:t},headers:r};n.request=s}}),AT="cause",wT=5,RT="LinkedErrors",CT=(n={})=>{const t=n.limit||wT,e=n.key||AT;return{name:RT,preprocessEvent(i,r,s){const o=s.getOptions();Ly(xl,o.stackParser,e,t,i,r)}}},PT=CT;function IT(n){return[Ty(),Ey(),dT(),tT(),ST(),PT(),ky(),TT(),gT()]}function DT(n={}){var e;return{...{defaultIntegrations:IT(),release:typeof __SENTRY_RELEASE__=="string"?__SENTRY_RELEASE__:(e=Xt.SENTRY_RELEASE)==null?void 0:e.id,sendClientReports:!0},...LT(n)}}function LT(n){const t={};for(const e of Object.getOwnPropertyNames(n)){const i=e;n[i]!==void 0&&(t[i]=n[i])}return t}function UT(){var c;const n=typeof Xt.window<"u"&&Xt;if(!n)return!1;const t=n.chrome?"chrome":"browser",e=n[t],i=(c=e==null?void 0:e.runtime)==null?void 0:c.id,r=as()||"",s=["chrome-extension:","moz-extension:","ms-browser-extension:","safari-web-extension:"],o=!!i&&Xt===Xt.top&&s.some(l=>r.startsWith(`${l}//`)),a=typeof n.nw<"u";return!!i&&!o&&!a}function NT(n={}){const t=DT(n);if(!t.skipBrowserExtensionCheck&&UT()){sn&&Gi(()=>{console.error("[Sentry] You cannot run Sentry this way in a browser extension, check: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/")});return}sn&&!hf()&&it.warn("No Fetch API detected. The Sentry SDK requires a Fetch API compatible environment to send events. Please add a Fetch API polyfill.");const e={...t,stackParser:Bx(t.stackParser||Zb),integrations:YE(t),transport:t.transport||Bb};return ry(xM,e)}const Pd=new WeakMap,Pa=new Map,Df={traceFetch:!0,traceXHR:!0,enableHTTPTimings:!0,trackFetchStreamPerformance:!1};function FT(n,t){const{traceFetch:e,traceXHR:i,trackFetchStreamPerformance:r,shouldCreateSpanForRequest:s,enableHTTPTimings:o,tracePropagationTargets:a,onRequestSpanStart:c}={...Df,...t},l=typeof s=="function"?s:h=>!0,u=h=>kT(h,a),d={};e&&(n.addEventProcessor(h=>(h.type==="transaction"&&h.spans&&h.spans.forEach(p=>{if(p.op==="http.client"){const g=Pa.get(p.span_id);g&&(p.timestamp=g/1e3,Pa.delete(p.span_id))}}),h)),r&&eM(h=>{if(h.response){const p=Pd.get(h.response);p&&h.endTimestamp&&Pa.set(p,h.endTimestamp)}}),ff(h=>{const p=Yy(h,l,u,d);if(h.response&&h.fetchData.__span&&Pd.set(h.response,h.fetchData.__span),p){const g=Lf(h.fetchData.url),v=g?Ii(g).host:void 0;p.setAttributes({"http.url":g,"server.address":v}),o&&Id(p),c==null||c(p,{headers:h.headers})}})),i&&Cf(h=>{var g;const p=zT(h,l,u,d);if(p){o&&Id(p);let v;try{v=new Headers((g=h.xhr.__sentry_xhr_v3__)==null?void 0:g.request_headers)}catch{}c==null||c(p,{headers:v})}})}function OT(n){return n.entryType==="resource"&&"initiatorType"in n&&typeof n.nextHopProtocol=="string"&&(n.initiatorType==="fetch"||n.initiatorType==="xmlhttprequest")}function Id(n){const{url:t}=ie(n).data;if(!t||typeof t!="string")return;const e=rs("resource",({entries:i})=>{i.forEach(r=>{OT(r)&&r.name.endsWith(t)&&(BT(r).forEach(o=>n.setAttribute(...o)),setTimeout(e))})})}function gn(n=0){return((on()||performance.timeOrigin)+n)/1e3}function BT(n){const{name:t,version:e}=Rf(n.nextHopProtocol),i=[];return i.push(["network.protocol.version",e],["network.protocol.name",t]),on()?[...i,["http.request.redirect_start",gn(n.redirectStart)],["http.request.fetch_start",gn(n.fetchStart)],["http.request.domain_lookup_start",gn(n.domainLookupStart)],["http.request.domain_lookup_end",gn(n.domainLookupEnd)],["http.request.connect_start",gn(n.connectStart)],["http.request.secure_connection_start",gn(n.secureConnectionStart)],["http.request.connection_end",gn(n.connectEnd)],["http.request.request_start",gn(n.requestStart)],["http.request.response_start",gn(n.responseStart)],["http.request.response_end",gn(n.responseEnd)]]:i}function kT(n,t){const e=as();if(e){let i,r;try{i=new URL(n,e),r=new URL(e).origin}catch{return!1}const s=i.origin===r;return t?Ri(i.toString(),t)||s&&Ri(i.pathname,t):s}else{const i=!!n.match(/^\/(?!\/)/);return t?Ri(n,t):i}}function zT(n,t,e,i){const r=n.xhr,s=r==null?void 0:r[fr];if(!r||r.__sentry_own_request__||!s)return;const{url:o,method:a}=s,c=ai()&&t(o);if(n.endTimestamp&&c){const v=r.__sentry_xhr_span_id__;if(!v)return;const m=i[v];m&&s.status_code!==void 0&&(wh(m,s.status_code),m.end(),delete i[v]);return}const l=Lf(o),u=Ii(l||o),d=$y(o),h=!!qe(),p=c&&h?fs({name:`${a} ${d}`,attributes:{url:o,type:"xhr","http.method":a,"http.url":l,"server.address":u==null?void 0:u.host,[ye]:"auto.http.browser",[Fi]:"http.client",...(u==null?void 0:u.search)&&{"http.query":u==null?void 0:u.search},...(u==null?void 0:u.hash)&&{"http.fragment":u==null?void 0:u.hash}}}):new Bi;r.__sentry_xhr_span_id__=p.spanContext().spanId,i[r.__sentry_xhr_span_id__]=p,e(o)&&HT(r,ai()&&h?p:void 0);const g=te();return g&&g.emit("beforeOutgoingRequestSpan",p,n),p}function HT(n,t){const{"sentry-trace":e,baggage:i}=af({span:t});e&&VT(n,e,i)}function VT(n,t,e){var r;const i=(r=n.__sentry_xhr_v3__)==null?void 0:r.request_headers;if(!(i!=null&&i["sentry-trace"]))try{if(n.setRequestHeader("sentry-trace",t),e){const s=i==null?void 0:i.baggage;(!s||!GT(s))&&n.setRequestHeader("baggage",e)}}catch{}}function GT(n){return n.split(",").some(t=>t.trim().startsWith("sentry-"))}function Lf(n){try{return new URL(n,Xt.location.origin).href}catch{return}}function WT(){Xt.document?Xt.document.addEventListener("visibilitychange",()=>{const n=qe();if(!n)return;const t=Oe(n);if(Xt.document.hidden&&t){const e="cancelled",{op:i,status:r}=ie(t);sn&&it.log(`[Tracing] Transaction: ${e} -> since tab moved to the background, op: ${i}`),r||t.setStatus({code:Ee,message:e}),t.setAttribute("sentry.cancellation_reason","document.hidden"),t.end()}}):sn&&it.warn("[Tracing] Could not set up background tab detection due to lack of global document")}const XT=3600,Uf="sentry_previous_trace",$T="sentry.previous_trace";function YT(n,{linkPreviousTrace:t,consistentTraceSampling:e}){const i=t==="session-storage";let r=i?KT():void 0;n.on("spanStart",o=>{if(Oe(o)!==o)return;const a=ae().getPropagationContext();r=qT(r,o,a),i&&jT(r)});let s=!0;e&&n.on("beforeSampling",o=>{if(!r)return;const a=ae(),c=a.getPropagationContext();if(s&&c.parentSpanId){s=!1;return}a.setPropagationContext({...c,dsc:{...c.dsc,sample_rate:String(r.sampleRate),sampled:String(Gc(r.spanContext))},sampleRand:r.sampleRand}),o.parentSampled=Gc(r.spanContext),o.parentSampleRate=r.sampleRate,o.spanAttributes={...o.spanAttributes,[Th]:r.sampleRate}})}function qT(n,t,e){const i=ie(t);function r(){var a,c;try{return Number((a=e.dsc)==null?void 0:a.sample_rate)??Number((c=i.data)==null?void 0:c[pl])}catch{return 0}}const s={spanContext:t.spanContext(),startTimestamp:i.start_timestamp,sampleRate:r(),sampleRand:e.sampleRand};if(!n)return s;const o=n.spanContext;return o.traceId===i.trace_id?n:(Date.now()/1e3-n.startTimestamp<=XT&&(sn&&it.info(`Adding previous_trace ${o} link to span ${{op:i.op,...t.spanContext()}}`),t.addLink({context:o,attributes:{[xx]:"previous_trace"}}),t.setAttribute($T,`${o.traceId}-${o.spanId}-${Gc(o)?1:0}`)),s)}function jT(n){try{Xt.sessionStorage.setItem(Uf,JSON.stringify(n))}catch(t){sn&&it.warn("Could not store previous trace in sessionStorage",t)}}function KT(){var n;try{const t=(n=Xt.sessionStorage)==null?void 0:n.getItem(Uf);return JSON.parse(t)}catch{return}}function Gc(n){return n.traceFlags===1}const ZT="BrowserTracing",JT={...lo,instrumentNavigation:!0,instrumentPageLoad:!0,markBackgroundSpan:!0,enableLongTask:!0,enableLongAnimationFrame:!0,enableInp:!0,linkPreviousTrace:"in-memory",consistentTraceSampling:!1,_experiments:{},...Df};let Dd=!1;const QT=(n={})=>{Dd&&Gi(()=>{console.warn("Multiple browserTracingIntegration instances are not supported.")}),Dd=!0;const t=Xt.document;Vx();const{enableInp:e,enableLongTask:i,enableLongAnimationFrame:r,_experiments:{enableInteractions:s,enableStandaloneClsSpans:o},beforeStartSpan:a,idleTimeout:c,finalTimeout:l,childSpanTimeout:u,markBackgroundSpan:d,traceFetch:h,traceXHR:p,trackFetchStreamPerformance:g,shouldCreateSpanForRequest:v,enableHTTPTimings:m,instrumentPageLoad:f,instrumentNavigation:T,linkPreviousTrace:b,consistentTraceSampling:y,onRequestSpanStart:D}={...JT,...n},A=cb({recordClsStandaloneSpans:o||!1});e&&Nb(),r&&qt.PerformanceObserver&&PerformanceObserver.supportedEntryTypes&&PerformanceObserver.supportedEntryTypes.includes("long-animation-frame")?ub():i&&lb(),s&&db();const w={name:void 0,source:void 0};function U(E,S){const R=S.op==="pageload",F=a?a(S):S,B=F.attributes||{};S.name!==F.name&&(B[Bn]="custom",F.attributes=B),w.name=F.name,w.source=B[Bn];const X=Kh(F,{idleTimeout:c,finalTimeout:l,childSpanTimeout:u,disableAutoFinish:R,beforeSpanEnd:W=>{A(),gb(W,{recordClsOnPageloadSpan:!o}),Ud(E,void 0);const G=ae(),k=G.getPropagationContext();G.setPropagationContext({...k,traceId:X.spanContext().traceId,sampled:Xi(X),dsc:ci(W)})}});Ud(E,X);function Y(){t&&["interactive","complete"].includes(t.readyState)&&E.emit("idleSpanEnableAutoFinish",X)}R&&t&&(t.addEventListener("readystatechange",()=>{Y()}),Y())}return{name:ZT,afterAllSetup(E){let S=as();function R(){const F=Fo(E);F&&!ie(F).timestamp&&(sn&&it.log(`[Tracing] Finishing current active span with op: ${ie(F).op}`),F.end())}if(E.on("startNavigationSpan",F=>{te()===E&&(R(),Wi().setPropagationContext({traceId:oi(),sampleRand:Math.random()}),ae().setPropagationContext({traceId:oi(),sampleRand:Math.random()}),U(E,{op:"navigation",...F}))}),E.on("startPageLoadSpan",(F,B={})=>{if(te()!==E)return;R();const X=B.sentryTrace||Ld("sentry-trace"),Y=B.baggage||Ld("baggage"),W=Px(X,Y);ae().setPropagationContext(W),U(E,{op:"pageload",...F})}),b!=="off"&&YT(E,{linkPreviousTrace:b,consistentTraceSampling:y}),Xt.location){if(f){const F=on();tA(E,{name:Xt.location.pathname,startTime:F?F/1e3:void 0,attributes:{[Bn]:"url",[ye]:"auto.pageload.browser"}})}T&&Tl(({to:F,from:B})=>{if(B===void 0&&(S==null?void 0:S.indexOf(F))!==-1){S=void 0;return}B!==F&&(S=void 0,eA(E,{name:Xt.location.pathname,attributes:{[Bn]:"url",[ye]:"auto.navigation.browser"}}))})}d&&WT(),s&&nA(E,c,l,u,w),e&&Ob(),FT(E,{traceFetch:h,traceXHR:p,trackFetchStreamPerformance:g,tracePropagationTargets:E.getOptions().tracePropagationTargets,shouldCreateSpanForRequest:v,enableHTTPTimings:m,onRequestSpanStart:D})}}};function tA(n,t,e){return n.emit("startPageLoadSpan",t,e),ae().setTransactionName(t.name),Fo(n)}function eA(n,t){return n.emit("startNavigationSpan",t),ae().setTransactionName(t.name),Fo(n)}function Ld(n){const t=Xt.document,e=t==null?void 0:t.querySelector(`meta[name=${n}]`);return(e==null?void 0:e.getAttribute("content"))||void 0}function nA(n,t,e,i,r){const s=Xt.document;let o;const a=()=>{const c="ui.action.click",l=Fo(n);if(l){const u=ie(l).op;if(["navigation","pageload"].includes(u)){sn&&it.warn(`[Tracing] Did not create ${c} span because a pageload or navigation span is in progress.`);return}}if(o&&(o.setAttribute(Tc,"interactionInterrupted"),o.end(),o=void 0),!r.name){sn&&it.warn(`[Tracing] Did not create ${c} transaction because _latestRouteName is missing.`);return}o=Kh({name:r.name,op:c,attributes:{[Bn]:r.source||"url"}},{idleTimeout:t,finalTimeout:e,childSpanTimeout:i})};s&&addEventListener("click",a,{once:!1,capture:!0})}const Nf="_sentry_idleSpan";function Fo(n){return n[Nf]}function Ud(n,t){Ye(n,Nf,t)}NT({dsn:"https://a3cba31734e8caf17b0ff0dfa7fe95ee@o4509310067539968.ingest.de.sentry.io/4509310074683472",integrations:[QT()],tracesSampleRate:1,sendDefaultPii:!0});let Ce,_n,vn,be,Sn={left:0,right:0},Hr,Nd=!0,Ia=!1,Da=!1;const cr={};function iA(){const n=document.querySelector("#c"),t=new gS({antialias:!0,canvas:n});t.setSize(window.innerWidth,window.innerHeight);const e=new vm;e.background=new Bt(2105376);const i=new tn(75,window.innerWidth/window.innerHeight,.1,100);i.position.set(0,10,30);const r=new vS(i,t.domElement);r.enablePan=!1,r.enableZoom=!0,r.target.set(0,5,0),r.update();const s=new Pm(16777215,.3);e.add(s);const o=new Cm(16777215,1);o.position.set(-20,2.8,10),e.add(o);const a=new Am,c=a.load("textures/bois/wood_table_001_diff_4k.jpg"),l=a.load("textures/bois/wood_table_001_nor_gl_4k.jpg"),u=a.load("textures/bois/wood_table_001_rough_4k.jpg");a.load("textures/metal/PaintedMetal004.png"),a.load("textures/metal/PaintedMetal002.png");const d=new Ui(20,.5,40),h=new aa({map:c,normalMap:l,roughnessMap:u,roughness:1}),p=new He(d,h);p.position.y=-.25,e.add(p);const g=new Ui(4,1,1),v=new aa({color:10894396}),m=new aa({color:3825537});_n=new He(g,v),vn=new He(g,m),_n.position.set(0,.5,-18),vn.position.set(0,.5,18),e.add(_n),e.add(vn);const f=new nl(.7,64,64),T=new Ue({uniforms:{time:{value:0}},vertexShader:`
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
    `});Ce=new He(f,T),Ce.position.set(0,.7,0),e.add(Ce),be=new N(.4,0,.2),Hr=new XS(t),Hr.addPass(new $S(e,i));const b=new yr(new yt(window.innerWidth,window.innerHeight),.4,.4,.85);Hr.addPass(b);const y=new al,D=y.addFolder("Game Controls");D.add(be,"x",-.2,.4).name("Vélocité X"),D.add(be,"z",-.2,.4).name("Vélocité Z"),D.open();const A=y.addFolder("Lumière");A.add(o.position,"x",-20,20).name("X"),A.add(o.position,"y",2.8,50).name("Y"),A.open();const w={resetScore(){Sn.left=0,Sn.right=0,R()},resetBall(){X()}};y.add(w,"resetScore").name("Reset Score"),y.add(w,"resetBall").name("Reset Ball");const U={dynamicCamera:!0};y.add(U,"dynamicCamera").name("Caméra dynamique").onChange(G=>{Nd=G});const E={restartGame(){Sn.left=0,Sn.right=0,R(),Da=!1,X(),document.getElementById("winOverlay").style.opacity=0,Y()}};y.add(E,"restartGame").name("Nouvelle manche");const S=document.createElement("div");S.style.position="absolute",S.style.top="10px",S.style.left="50%",S.style.transform="translateX(-50%)",S.style.color="white",S.style.fontSize="24px",S.style.fontFamily="monospace",S.id="scoreBoard",document.body.appendChild(S);function R(){document.getElementById("scoreBoard").innerHTML=`
      <span style="color:#3a5f81;">Blue: ${Sn.right}</span> |
      <span style="color:#a63c3c;">Red: ${Sn.left}</span> 
    `}window.addEventListener("keydown",G=>cr[G.code]=!0),window.addEventListener("keyup",G=>cr[G.code]=!1);function F(G){if(Nd){const st=G*1e-4*.2;i.position.x=Math.cos(st)*30,i.position.z=Math.sin(st)*30,i.position.y=12+Math.sin(st*2)*2,i.lookAt(0,0,0)}if(requestAnimationFrame(F),!Ia||Da){Hr.render();return}B(G),Hr.render()}function B(G){Ce.material.uniforms&&(Ce.material.uniforms.time.value=G*.001),cr.ArrowLeft&&(vn.position.x-=.5),cr.ArrowRight&&(vn.position.x+=.5),cr.KeyA&&(_n.position.x-=.5),cr.KeyD&&(_n.position.x+=.5);const k=-8,et=8;_n.position.x=Sc.clamp(_n.position.x,k,et),vn.position.x=Sc.clamp(vn.position.x,k,et),Ce.position.add(be),(Ce.position.x<=-10||Ce.position.x>=10)&&(be.x*=-1);const st=new ri().setFromObject(Ce),vt=new ri().setFromObject(_n),Nt=new ri().setFromObject(vn),Kt=1.05,$=2.5;if(st.intersectsBox(vt)){const tt=Ce.position.x-_n.position.x;be.x=tt*.15,be.z=Math.abs(be.z),be.multiplyScalar(Kt),be.clampLength(0,$),Ce.position.z=_n.position.z+1.1}if(st.intersectsBox(Nt)){const tt=Ce.position.x-vn.position.x;be.x=tt*.15,be.z=-Math.abs(be.z),be.multiplyScalar(Kt),be.clampLength(0,$),Ce.position.z=vn.position.z-1.1}if(Ce.position.z<-18&&(Sn.right++,R(),X()),Ce.position.z>18&&(Sn.left++,R(),X()),Sn.right>=10){W("BLUE");return}if(Sn.left>=10){W("RED");return}}function X(){Ce.position.set(0,.7,0),be.set(Math.random()-.5,0,(Math.random()<.5?1:-1)*be.x)}function Y(){const G=document.getElementById("introOverlay");G.textContent="READY...",G.style.opacity=1,Ia=!1,setTimeout(()=>{G.textContent="GO!"},1500),setTimeout(()=>{G.style.opacity=0,Ia=!0},3e3)}function W(G){const k=document.getElementById("winOverlay");G==="BLUE"?k.style.color="#3a5f81":G==="RED"&&(k.style.color="#a63c3c"),k.textContent=`${G} WINS!`,k.style.opacity=1,Da=!0}R(),F(),Y()}iA();
