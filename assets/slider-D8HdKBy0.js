import{c as le}from"./utils-CmPBaH-W.js";import{r as l}from"./index-DRjF_FHU.js";import{c as Y}from"./index-BdQq_4o_.js";import{u as de,c as C,b as ue,a as fe}from"./index-ClVh0s7n.js";import{u as j}from"./index-LOOTFJQl.js";import{c as me,P as K}from"./index-bDvysU34.js";import{c as pe,u as he}from"./index-CT5EhlTB.js";import{j as g}from"./jsx-runtime-DR9Q75dM.js";import{c as ge}from"./index-C9mr3DAw.js";var $=["PageUp","PageDown"],X=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],G={"from-left":["Home","PageDown","ArrowDown","ArrowLeft"],"from-right":["Home","PageDown","ArrowDown","ArrowRight"],"from-bottom":["Home","PageDown","ArrowDown","ArrowLeft"],"from-top":["Home","PageDown","ArrowUp","ArrowLeft"]},M="Slider",[H,Se,be]=pe(M),[W,Ye]=me(M,[be]),[ve,T]=W(M),q=l.forwardRef((e,t)=>{const{name:n,min:o=0,max:s=100,step:c=1,orientation:r="horizontal",disabled:a=!1,minStepsBetweenThumbs:d=0,defaultValue:f=[o],value:v,onValueChange:i=()=>{},onValueCommit:u=()=>{},inverted:b=!1,form:y,...S}=e,p=l.useRef(new Set),m=l.useRef(0),w=r==="horizontal"?we:xe,[h=[],A]=de({prop:v,defaultProp:f,onChange:x=>{var D;(D=[...p.current][m.current])==null||D.focus(),i(x)}}),V=l.useRef(h);function B(x){const P=De(h,x);I(x,P)}function ae(x){I(x,m.current)}function ce(){const x=V.current[m.current];h[m.current]!==x&&u(h)}function I(x,P,{commit:D}={commit:!1}){const F=Ae(c),N=Ie(Math.round((x-o)/c)*c+o,F),k=Y(N,[o,s]);A((_=[])=>{const R=Re(_,k,P);if(Me(R,d*c)){m.current=R.indexOf(k);const U=String(R)!==String(_);return U&&D&&u(R),U?R:_}else return _})}return g.jsx(ve,{scope:e.__scopeSlider,name:n,disabled:a,min:o,max:s,valueIndexToChangeRef:m,thumbs:p.current,values:h,orientation:r,form:y,children:g.jsx(H.Provider,{scope:e.__scopeSlider,children:g.jsx(H.Slot,{scope:e.__scopeSlider,children:g.jsx(w,{"aria-disabled":a,"data-disabled":a?"":void 0,...S,ref:t,onPointerDown:C(S.onPointerDown,()=>{a||(V.current=h)}),min:o,max:s,inverted:b,onSlideStart:a?void 0:B,onSlideMove:a?void 0:ae,onSlideEnd:a?void 0:ce,onHomeKeyDown:()=>!a&&I(o,0,{commit:!0}),onEndKeyDown:()=>!a&&I(s,h.length-1,{commit:!0}),onStepKeyDown:({event:x,direction:P})=>{if(!a){const N=$.includes(x.key)||x.shiftKey&&X.includes(x.key)?10:1,k=m.current,_=h[k],R=c*N*P;I(_+R,k,{commit:!0})}}})})})})});q.displayName=M;var[J,Q]=W(M,{startEdge:"left",endEdge:"right",size:"width",direction:1}),we=l.forwardRef((e,t)=>{const{min:n,max:o,dir:s,inverted:c,onSlideStart:r,onSlideMove:a,onSlideEnd:d,onStepKeyDown:f,...v}=e,[i,u]=l.useState(null),b=j(t,w=>u(w)),y=l.useRef(),S=he(s),p=S==="ltr",m=p&&!c||!p&&c;function E(w){const h=y.current||i.getBoundingClientRect(),A=[0,h.width],B=L(A,m?[n,o]:[o,n]);return y.current=h,B(w-h.left)}return g.jsx(J,{scope:e.__scopeSlider,startEdge:m?"left":"right",endEdge:m?"right":"left",direction:m?1:-1,size:"width",children:g.jsx(Z,{dir:S,"data-orientation":"horizontal",...v,ref:b,style:{...v.style,"--radix-slider-thumb-transform":"translateX(-50%)"},onSlideStart:w=>{const h=E(w.clientX);r==null||r(h)},onSlideMove:w=>{const h=E(w.clientX);a==null||a(h)},onSlideEnd:()=>{y.current=void 0,d==null||d()},onStepKeyDown:w=>{const A=G[m?"from-left":"from-right"].includes(w.key);f==null||f({event:w,direction:A?-1:1})}})})}),xe=l.forwardRef((e,t)=>{const{min:n,max:o,inverted:s,onSlideStart:c,onSlideMove:r,onSlideEnd:a,onStepKeyDown:d,...f}=e,v=l.useRef(null),i=j(t,v),u=l.useRef(),b=!s;function y(S){const p=u.current||v.current.getBoundingClientRect(),m=[0,p.height],w=L(m,b?[o,n]:[n,o]);return u.current=p,w(S-p.top)}return g.jsx(J,{scope:e.__scopeSlider,startEdge:b?"bottom":"top",endEdge:b?"top":"bottom",size:"height",direction:b?1:-1,children:g.jsx(Z,{"data-orientation":"vertical",...f,ref:i,style:{...f.style,"--radix-slider-thumb-transform":"translateY(50%)"},onSlideStart:S=>{const p=y(S.clientY);c==null||c(p)},onSlideMove:S=>{const p=y(S.clientY);r==null||r(p)},onSlideEnd:()=>{u.current=void 0,a==null||a()},onStepKeyDown:S=>{const m=G[b?"from-bottom":"from-top"].includes(S.key);d==null||d({event:S,direction:m?-1:1})}})})}),Z=l.forwardRef((e,t)=>{const{__scopeSlider:n,onSlideStart:o,onSlideMove:s,onSlideEnd:c,onHomeKeyDown:r,onEndKeyDown:a,onStepKeyDown:d,...f}=e,v=T(M,n);return g.jsx(K.span,{...f,ref:t,onKeyDown:C(e.onKeyDown,i=>{i.key==="Home"?(r(i),i.preventDefault()):i.key==="End"?(a(i),i.preventDefault()):$.concat(X).includes(i.key)&&(d(i),i.preventDefault())}),onPointerDown:C(e.onPointerDown,i=>{const u=i.target;u.setPointerCapture(i.pointerId),i.preventDefault(),v.thumbs.has(u)?u.focus():o(i)}),onPointerMove:C(e.onPointerMove,i=>{i.target.hasPointerCapture(i.pointerId)&&s(i)}),onPointerUp:C(e.onPointerUp,i=>{const u=i.target;u.hasPointerCapture(i.pointerId)&&(u.releasePointerCapture(i.pointerId),c(i))})})}),ee="SliderTrack",te=l.forwardRef((e,t)=>{const{__scopeSlider:n,...o}=e,s=T(ee,n);return g.jsx(K.span,{"data-disabled":s.disabled?"":void 0,"data-orientation":s.orientation,...o,ref:t})});te.displayName=ee;var z="SliderRange",ne=l.forwardRef((e,t)=>{const{__scopeSlider:n,...o}=e,s=T(z,n),c=Q(z,n),r=l.useRef(null),a=j(t,r),d=s.values.length,f=s.values.map(u=>re(u,s.min,s.max)),v=d>1?Math.min(...f):0,i=100-Math.max(...f);return g.jsx(K.span,{"data-orientation":s.orientation,"data-disabled":s.disabled?"":void 0,...o,ref:a,style:{...e.style,[c.startEdge]:v+"%",[c.endEdge]:i+"%"}})});ne.displayName=z;var O="SliderThumb",oe=l.forwardRef((e,t)=>{const n=Se(e.__scopeSlider),[o,s]=l.useState(null),c=j(t,a=>s(a)),r=l.useMemo(()=>o?n().findIndex(a=>a.ref.current===o):-1,[n,o]);return g.jsx(ye,{...e,ref:c,index:r})}),ye=l.forwardRef((e,t)=>{const{__scopeSlider:n,index:o,name:s,...c}=e,r=T(O,n),a=Q(O,n),[d,f]=l.useState(null),v=j(t,E=>f(E)),i=d?r.form||!!d.closest("form"):!0,u=ue(d),b=r.values[o],y=b===void 0?0:re(b,r.min,r.max),S=Ee(o,r.values.length),p=u==null?void 0:u[a.size],m=p?_e(p,y,a.direction):0;return l.useEffect(()=>{if(d)return r.thumbs.add(d),()=>{r.thumbs.delete(d)}},[d,r.thumbs]),g.jsxs("span",{style:{transform:"var(--radix-slider-thumb-transform)",position:"absolute",[a.startEdge]:`calc(${y}% + ${m}px)`},children:[g.jsx(H.ItemSlot,{scope:e.__scopeSlider,children:g.jsx(K.span,{role:"slider","aria-label":e["aria-label"]||S,"aria-valuemin":r.min,"aria-valuenow":b,"aria-valuemax":r.max,"aria-orientation":r.orientation,"data-orientation":r.orientation,"data-disabled":r.disabled?"":void 0,tabIndex:r.disabled?void 0:0,...c,ref:v,style:b===void 0?{display:"none"}:e.style,onFocus:C(e.onFocus,()=>{r.valueIndexToChangeRef.current=o})})}),i&&g.jsx(Pe,{name:s??(r.name?r.name+(r.values.length>1?"[]":""):void 0),form:r.form,value:b},o)]})});oe.displayName=O;var Pe=e=>{const{value:t,...n}=e,o=l.useRef(null),s=fe(t);return l.useEffect(()=>{const c=o.current,r=window.HTMLInputElement.prototype,d=Object.getOwnPropertyDescriptor(r,"value").set;if(s!==t&&d){const f=new Event("input",{bubbles:!0});d.call(c,t),c.dispatchEvent(f)}},[s,t]),g.jsx("input",{style:{display:"none"},...n,ref:o,defaultValue:t})};function Re(e=[],t,n){const o=[...e];return o[n]=t,o.sort((s,c)=>s-c)}function re(e,t,n){const c=100/(n-t)*(e-t);return Y(c,[0,100])}function Ee(e,t){return t>2?`Value ${e+1} of ${t}`:t===2?["Minimum","Maximum"][e]:void 0}function De(e,t){if(e.length===1)return 0;const n=e.map(s=>Math.abs(s-t)),o=Math.min(...n);return n.indexOf(o)}function _e(e,t,n){const o=e/2,c=L([0,50],[0,o]);return(o-c(t)*n)*n}function Ce(e){return e.slice(0,-1).map((t,n)=>e[n+1]-t)}function Me(e,t){if(t>0){const n=Ce(e);return Math.min(...n)>=t}return!0}function L(e,t){return n=>{if(e[0]===e[1]||t[0]===t[1])return t[0];const o=(t[1]-t[0])/(e[1]-e[0]);return t[0]+o*(n-e[0])}}function Ae(e){return(String(e).split(".")[1]||"").length}function Ie(e,t){const n=Math.pow(10,t);return Math.round(e*n)/n}var se=q,ke=te,je=ne,Ke=oe;const Te=ge({slots:{range:"absolute h-full bg-primary",root:"relative flex w-full touch-none select-none items-center",thumb:["block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2","disabled:pointer-events-none disabled:opacity-50"],track:"relative h-2 w-full grow overflow-hidden rounded-full bg-secondary"}}),ie=l.forwardRef(({className:e,defaultValue:t,value:n,...o},s)=>{const{range:c,root:r,thumb:a,track:d}=Te(),f=(n==null?void 0:n.length)||(t==null?void 0:t.length)||1;return l.createElement(se,{ref:s,className:le(r(),e),value:n,defaultValue:t,...o},l.createElement(ke,{className:d()},l.createElement(je,{className:c()})),Array.from({length:f},(v,i)=>l.createElement(Ke,{key:i,className:a()})))});ie.displayName=se.displayName;ie.__docgenInfo={description:"",methods:[]};export{ie as S};