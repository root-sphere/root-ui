import{S as j}from"./StorybookContent-DvGPSzL3.js";import{r as a}from"./index-DRjF_FHU.js";import{c as f}from"./utils-CmPBaH-W.js";import{c as M,P as p,a as P,u as E}from"./index-bDvysU34.js";import{j as m}from"./jsx-runtime-DR9Q75dM.js";import"./index-rX-Bn4lm.js";import"./index-LOOTFJQl.js";var v="Avatar",[F,J]=M(v),[T,x]=F(v),N=a.forwardRef((t,e)=>{const{__scopeAvatar:r,...o}=t,[n,s]=a.useState("idle");return m.jsx(T,{scope:r,imageLoadingStatus:n,onImageLoadingStatusChange:s,children:m.jsx(p.span,{...o,ref:e})})});N.displayName=v;var I="AvatarImage",y=a.forwardRef((t,e)=>{const{__scopeAvatar:r,src:o,onLoadingStatusChange:n=()=>{},...s}=t,d=x(I,r),c=$(o,s.referrerPolicy),i=P(S=>{n(S),d.onImageLoadingStatusChange(S)});return E(()=>{c!=="idle"&&i(c)},[c,i]),c==="loaded"?m.jsx(p.img,{...s,ref:e,src:o}):null});y.displayName=I;var L="AvatarFallback",C=a.forwardRef((t,e)=>{const{__scopeAvatar:r,delayMs:o,...n}=t,s=x(L,r),[d,c]=a.useState(o===void 0);return a.useEffect(()=>{if(o!==void 0){const i=window.setTimeout(()=>c(!0),o);return()=>window.clearTimeout(i)}},[o]),d&&s.imageLoadingStatus!=="loaded"?m.jsx(p.span,{...n,ref:e}):null});C.displayName=L;function $(t,e){const[r,o]=a.useState("idle");return E(()=>{if(!t){o("error");return}let n=!0;const s=new window.Image,d=c=>()=>{n&&o(c)};return o("loading"),s.onload=d("loaded"),s.onerror=d("error"),s.src=t,e&&(s.referrerPolicy=e),()=>{n=!1}},[t,e]),r}var R=N,b=y,k=C;const u=a.forwardRef(({className:t,...e},r)=>a.createElement(R,{ref:r,className:f("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",t),...e}));u.displayName=R.displayName;const g=a.forwardRef(({className:t,...e},r)=>a.createElement(b,{ref:r,className:f("aspect-square h-full w-full",t),...e}));g.displayName=b.displayName;const A=a.forwardRef(({className:t,...e},r)=>a.createElement(k,{ref:r,className:f("flex h-full w-full items-center justify-center rounded-full bg-muted",t),...e}));A.displayName=k.displayName;u.__docgenInfo={description:"",methods:[]};g.__docgenInfo={description:"",methods:[]};A.__docgenInfo={description:"",methods:[]};const Q={component:u,title:"Components/Avatar"},q=({children:t,...e})=>a.createElement(u,{...e},a.createElement(g,{src:"https://github.com/shadcn.png"}),a.createElement(A,null)),B=({children:t,...e})=>a.createElement(j,null,a.createElement(q,{...e})),l={render:B};var h,_,w;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: AvatarsStories
}`,...(w=(_=l.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};const U=["Avatars"];export{l as Avatars,U as __namedExportsOrder,Q as default};