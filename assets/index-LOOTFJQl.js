import{r as i}from"./index-DRjF_FHU.js";import{j as c}from"./jsx-runtime-DR9Q75dM.js";function d(e,r){typeof e=="function"?e(r):e!=null&&(e.current=r)}function p(...e){return r=>e.forEach(n=>d(n,r))}function j(...e){return i.useCallback(p(...e),e)}var m=i.forwardRef((e,r)=>{const{children:n,...t}=e,o=i.Children.toArray(n),l=o.find(g);if(l){const s=l.props.children,a=o.map(u=>u===l?i.Children.count(s)>1?i.Children.only(null):i.isValidElement(s)?s.props.children:null:u);return c.jsx(f,{...t,ref:r,children:i.isValidElement(s)?i.cloneElement(s,void 0,a):null})}return c.jsx(f,{...t,ref:r,children:n})});m.displayName="Slot";var f=i.forwardRef((e,r)=>{const{children:n,...t}=e;if(i.isValidElement(n)){const o=E(n);return i.cloneElement(n,{...h(t,n.props),ref:r?p(r,o):o})}return i.Children.count(n)>1?i.Children.only(null):null});f.displayName="SlotClone";var y=({children:e})=>c.jsx(c.Fragment,{children:e});function g(e){return i.isValidElement(e)&&e.type===y}function h(e,r){const n={...r};for(const t in r){const o=e[t],l=r[t];/^on[A-Z]/.test(t)?o&&l?n[t]=(...a)=>{l(...a),o(...a)}:o&&(n[t]=o):t==="style"?n[t]={...o,...l}:t==="className"&&(n[t]=[o,l].filter(Boolean).join(" "))}return{...e,...n}}function E(e){var t,o;let r=(t=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:t.get,n=r&&"isReactWarning"in r&&r.isReactWarning;return n?e.ref:(r=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=r&&"isReactWarning"in r&&r.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}export{m as S,j as u};
