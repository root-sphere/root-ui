import{t as ne,e as oe}from"./utils-CmPBaH-W.js";var D=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,d=e=>!e||typeof e!="object"||Object.keys(e).length===0,ie=(e,f)=>JSON.stringify(e)===JSON.stringify(f);function I(e,f){e.forEach(function(r){Array.isArray(r)?I(r,f):f.push(r)})}function L(e){let f=[];return I(e,f),f}var U=(...e)=>L(e).filter(Boolean),W=(e,f)=>{let r={},V=Object.keys(e),w=Object.keys(f);for(let p of V)if(w.includes(p)){let g=e[p],j=f[p];typeof g=="object"&&typeof j=="object"?r[p]=W(g,j):Array.isArray(g)||Array.isArray(j)?r[p]=U(j,g):r[p]=j+" "+g}else r[p]=e[p];for(let p of w)V.includes(p)||(r[p]=f[p]);return r},F=e=>!e||typeof e!="string"?e:e.replace(/\s+/g," ").trim(),ae={twMerge:!0,twMergeConfig:{},responsiveVariants:!1},Z=e=>e||void 0,C=(...e)=>Z(L(e).filter(Boolean).join(" ")),J=null,m={},P=!1,M=(...e)=>f=>f.twMerge?((!J||P)&&(P=!1,J=d(m)?ne:oe({...m,extend:{theme:m.theme,classGroups:m.classGroups,conflictingClassGroupModifiers:m.conflictingClassGroupModifiers,conflictingClassGroups:m.conflictingClassGroups,...m.extend}})),Z(J(C(e)))):C(e),H=(e,f)=>{for(let r in f)e.hasOwnProperty(r)?e[r]=C(e[r],f[r]):e[r]=f[r];return e},ue=(e,f)=>{let{extend:r=null,slots:V={},variants:w={},compoundVariants:p=[],compoundSlots:g=[],defaultVariants:j={}}=e,v={...ae,...f},G=r!=null&&r.base?C(r.base,e==null?void 0:e.base):e==null?void 0:e.base,b=r!=null&&r.variants&&!d(r.variants)?W(w,r.variants):w,x=r!=null&&r.defaultVariants&&!d(r.defaultVariants)?{...r.defaultVariants,...j}:j;!d(v.twMergeConfig)&&!ie(v.twMergeConfig,m)&&(P=!0,m=v.twMergeConfig);let N=d(r==null?void 0:r.slots),S=d(V)?{}:{base:C(e==null?void 0:e.base,N&&(r==null?void 0:r.base)),...V},O=N?S:H({...r==null?void 0:r.slots},d(S)?{base:e==null?void 0:e.base}:S),$=d(r==null?void 0:r.compoundVariants)?p:U(r==null?void 0:r.compoundVariants,p),A=c=>{if(d(b)&&d(V)&&N)return M(G,c==null?void 0:c.class,c==null?void 0:c.className)(v);if($&&!Array.isArray($))throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof $}`);if(g&&!Array.isArray(g))throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof g}`);let Q=(t,n,l=[],i)=>{let o=l;if(typeof n=="string")o=o.concat(F(n).split(" ").map(a=>`${t}:${a}`));else if(Array.isArray(n))o=o.concat(n.reduce((a,s)=>a.concat(`${t}:${s}`),[]));else if(typeof n=="object"&&typeof i=="string"){for(let a in n)if(n.hasOwnProperty(a)&&a===i){let s=n[a];if(s&&typeof s=="string"){let u=F(s);o[i]?o[i]=o[i].concat(u.split(" ").map(y=>`${t}:${y}`)):o[i]=u.split(" ").map(y=>`${t}:${y}`)}else Array.isArray(s)&&s.length>0&&(o[i]=s.reduce((u,y)=>u.concat(`${t}:${y}`),[]))}}return o},R=(t,n=b,l=null,i=null)=>{var o;let a=n[t];if(!a||d(a))return null;let s=(o=i==null?void 0:i[t])!=null?o:c==null?void 0:c[t];if(s===null)return null;let u=D(s),y=Array.isArray(v.responsiveVariants)&&v.responsiveVariants.length>0||v.responsiveVariants===!0,k=x==null?void 0:x[t],h=[];if(typeof u=="object"&&y)for(let[E,z]of Object.entries(u)){let le=a[z];if(E==="initial"){k=z;continue}Array.isArray(v.responsiveVariants)&&!v.responsiveVariants.includes(E)||(h=Q(E,le,h,l))}let te=u!=null&&typeof u!="object"?u:D(k),T=a[te||"false"];return typeof h=="object"&&typeof l=="string"&&h[l]?H(h,T):h.length>0?(h.push(T),h):T},X=()=>b?Object.keys(b).map(t=>R(t,b)):null,Y=(t,n)=>{if(!b||typeof b!="object")return null;let l=new Array;for(let i in b){let o=R(i,b,t,n),a=t==="base"&&typeof o=="string"?o:o&&o[t];a&&(l[l.length]=a)}return l},B={};for(let t in c)c[t]!==void 0&&(B[t]=c[t]);let K=(t,n)=>{var l;let i=typeof(c==null?void 0:c[t])=="object"?{[t]:(l=c[t])==null?void 0:l.initial}:{};return{...x,...B,...i,...n}},q=(t=[],n)=>{let l=[];for(let{class:i,className:o,...a}of t){let s=!0;for(let[u,y]of Object.entries(a)){let k=K(u,n);if(Array.isArray(y)){if(!y.includes(k[u])){s=!1;break}}else if(k[u]!==y){s=!1;break}}s&&(i&&l.push(i),o&&l.push(o))}return l},ee=t=>{let n=q($,t);if(!Array.isArray(n))return n;let l={};for(let i of n)if(typeof i=="string"&&(l.base=M(l.base,i)(v)),typeof i=="object")for(let[o,a]of Object.entries(i))l[o]=M(l[o],a)(v);return l},re=t=>{if(g.length<1)return null;let n={};for(let{slots:l=[],class:i,className:o,...a}of g){if(!d(a)){let s=!0;for(let u of Object.keys(a)){let y=K(u,t)[u];if(y===void 0||(Array.isArray(a[u])?!a[u].includes(y):a[u]!==y)){s=!1;break}}if(!s)continue}for(let s of l)n[s]=n[s]||[],n[s].push([i,o])}return n};if(!d(V)||!N){let t={};if(typeof O=="object"&&!d(O))for(let n of Object.keys(O))t[n]=l=>{var i,o;return M(O[n],Y(n,l),((i=ee(l))!=null?i:[])[n],((o=re(l))!=null?o:[])[n],l==null?void 0:l.class,l==null?void 0:l.className)(v)};return t}return M(G,X(),q($),c==null?void 0:c.class,c==null?void 0:c.className)(v)},_=()=>{if(!(!b||typeof b!="object"))return Object.keys(b)};return A.variantKeys=_(),A.extend=r,A.base=G,A.slots=O,A.variants=b,A.defaultVariants=x,A.compoundSlots=g,A.compoundVariants=$,A};export{ue as c};
