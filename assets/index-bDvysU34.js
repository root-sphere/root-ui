import{r as s}from"./index-DRjF_FHU.js";import{j as C}from"./jsx-runtime-DR9Q75dM.js";import{r as E}from"./index-rX-Bn4lm.js";import{S as P}from"./index-LOOTFJQl.js";function g(t,e=[]){let o=[];function u(i,r){const n=s.createContext(r),a=o.length;o=[...o,r];const x=m=>{var S;const{scope:f,children:v,...p}=m,d=((S=f==null?void 0:f[t])==null?void 0:S[a])||n,h=s.useMemo(()=>p,Object.values(p));return C.jsx(d.Provider,{value:h,children:v})};x.displayName=i+"Provider";function l(m,f){var d;const v=((d=f==null?void 0:f[t])==null?void 0:d[a])||n,p=s.useContext(v);if(p)return p;if(r!==void 0)return r;throw new Error(`\`${m}\` must be used within \`${i}\``)}return[x,l]}const c=()=>{const i=o.map(r=>s.createContext(r));return function(n){const a=(n==null?void 0:n[t])||i;return s.useMemo(()=>({[`__scope${t}`]:{...n,[t]:a}}),[n,a])}};return c.scopeName=t,[u,w(c,...e)]}function w(...t){const e=t[0];if(t.length===1)return e;const o=()=>{const u=t.map(c=>({useScope:c(),scopeName:c.scopeName}));return function(i){const r=u.reduce((n,{useScope:a,scopeName:x})=>{const m=a(i)[`__scope${x}`];return{...n,...m}},{});return s.useMemo(()=>({[`__scope${e.scopeName}`]:r}),[r])}};return o.scopeName=e.scopeName,o}function M(t){const e=s.useRef(t);return s.useEffect(()=>{e.current=t}),s.useMemo(()=>(...o)=>{var u;return(u=e.current)==null?void 0:u.call(e,...o)},[])}var y=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],N=y.reduce((t,e)=>{const o=s.forwardRef((u,c)=>{const{asChild:i,...r}=u,n=i?P:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),C.jsx(n,{...r,ref:c})});return o.displayName=`Primitive.${e}`,{...t,[e]:o}},{});function D(t,e){t&&E.flushSync(()=>t.dispatchEvent(e))}var R=globalThis!=null&&globalThis.document?s.useLayoutEffect:()=>{};export{N as P,M as a,g as c,D as d,R as u};