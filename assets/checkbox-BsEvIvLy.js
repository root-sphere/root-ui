import{c as M}from"./utils-CmPBaH-W.js";import{r as o}from"./index-DRjF_FHU.js";import{u as O}from"./index-LOOTFJQl.js";import{c as A,P as w}from"./index-bDvysU34.js";import{u as B,c as R,a as H}from"./index-B23hBBlt.js";import{u as K}from"./index-Iz9Zo_Nw.js";import{P as L}from"./index-C9o98AqH.js";import{j as m}from"./jsx-runtime-DR9Q75dM.js";import{c as q}from"./index-C9mr3DAw.js";import{C as T}from"./check-DDO25L6O.js";var E="Checkbox",[V,se]=A(E),[X,F]=V(E),j=o.forwardRef((e,i)=>{const{__scopeCheckbox:t,name:s,checked:d,defaultChecked:r,required:u,disabled:l,value:b="on",onCheckedChange:C,form:f,...x}=e,[a,k]=o.useState(null),v=O(i,n=>k(n)),y=o.useRef(!1),P=a?f||!!a.closest("form"):!0,[p=!1,g]=B({prop:d,defaultProp:r,onChange:C}),z=o.useRef(p);return o.useEffect(()=>{const n=a==null?void 0:a.form;if(n){const h=()=>g(z.current);return n.addEventListener("reset",h),()=>n.removeEventListener("reset",h)}},[a,g]),m.jsxs(X,{scope:t,state:p,disabled:l,children:[m.jsx(w.button,{type:"button",role:"checkbox","aria-checked":c(p)?"mixed":p,"aria-required":u,"data-state":S(p),"data-disabled":l?"":void 0,disabled:l,value:b,...x,ref:v,onKeyDown:R(e.onKeyDown,n=>{n.key==="Enter"&&n.preventDefault()}),onClick:R(e.onClick,n=>{g(h=>c(h)?!0:!h),P&&(y.current=n.isPropagationStopped(),y.current||n.stopPropagation())})}),P&&m.jsx($,{control:a,bubbles:!y.current,name:s,value:b,checked:p,required:u,disabled:l,form:f,style:{transform:"translateX(-100%)"},defaultChecked:c(r)?!1:r})]})});j.displayName=E;var I="CheckboxIndicator",N=o.forwardRef((e,i)=>{const{__scopeCheckbox:t,forceMount:s,...d}=e,r=F(I,t);return m.jsx(L,{present:s||c(r.state)||r.state===!0,children:m.jsx(w.span,{"data-state":S(r.state),"data-disabled":r.disabled?"":void 0,...d,ref:i,style:{pointerEvents:"none",...e.style}})})});N.displayName=I;var $=e=>{const{control:i,checked:t,bubbles:s=!0,defaultChecked:d,...r}=e,u=o.useRef(null),l=K(t),b=H(i);o.useEffect(()=>{const f=u.current,x=window.HTMLInputElement.prototype,k=Object.getOwnPropertyDescriptor(x,"checked").set;if(l!==t&&k){const v=new Event("click",{bubbles:s});f.indeterminate=c(t),k.call(f,c(t)?!1:t),f.dispatchEvent(v)}},[l,t,s]);const C=o.useRef(c(t)?!1:t);return m.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:d??C.current,...r,tabIndex:-1,ref:u,style:{...e.style,...b,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function c(e){return e==="indeterminate"}function S(e){return c(e)?"indeterminate":e?"checked":"unchecked"}var _=j,G=N;const J=q({slots:{root:["flex size-5 shrink-0 rounded-sm","border bg-background","ring-offset-background","focus-visible:outline-none focus-visible:ring-2","focus-visible:ring-ring focus-visible:ring-offset-2","disabled:cursor-not-allowed disabled:opacity-70","transition-colors duration-200","data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"],icon:["size-4"],indicator:["flex h-full w-full items-center justify-center text-current font-medium"]},defaultVariants:{intent:"default"},variants:{intent:{default:["border-input text-font-primary","hover:ring-2 hover:ring-primary hover:ring-offset-2","focus-visible:ring-primary"]}}}),D=o.forwardRef(({className:e,intent:i,...t},s)=>{const{root:d,icon:r,indicator:u}=J();return o.createElement(_,{ref:s,className:M(d({intent:i}),e),...t},o.createElement(G,{className:u()},o.createElement(T,{className:r()})))});D.displayName=_.displayName;D.__docgenInfo={description:"",methods:[]};export{D as C};
