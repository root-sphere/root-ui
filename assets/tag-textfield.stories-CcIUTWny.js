import{r as e}from"./index-DRjF_FHU.js";import"./index-rX-Bn4lm.js";import{c as K}from"./index-C9mr3DAw.js";import{B as j}from"./badge-CRqnpP23.js";import{P as U,a as X,b as W}from"./popover-CU8CSap4.js";import{T as G,a as H}from"./textfield-7saXX5O_.js";import{c as J}from"./createLucideIcon-BS-719lU.js";import"./utils-CmPBaH-W.js";import"./index-LOOTFJQl.js";import"./jsx-runtime-DR9Q75dM.js";import"./index-B23hBBlt.js";import"./index-bDvysU34.js";import"./Combination-DMDmyNTj.js";import"./index-D1y9YG6K.js";import"./index-zrIYd2qu.js";import"./index-C9o98AqH.js";/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=J("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Y=s=>{s.preventDefault()};function Z(s){return e.useMemo(()=>s.every(d=>d==null)?null:d=>{s.forEach(n=>{typeof n=="function"?n(d):n!=null&&(n.current=d)})},s)}function ee({value:s,defaultValue:d,onChange:n}={}){const[p,T]=e.useState(d??s??[]),o=e.useMemo(()=>new Set(s??p),[s,p]),c=s!==void 0,x=c?s:p,F=e.useCallback(v=>{const u=v.trim();if(!u||o.has(u))return;const g=[...x,u];c||T(g),n==null||n(g)},[c,x,n,o]),r=e.useCallback(v=>{const u=x.filter(g=>g!==v);c||T(u),n==null||n(u)},[c,x,n]);return{tags:x,addTag:F,removeTag:r}}const b=K({slots:{root:["flex flex-col gap-2 w-full max-w-xs"],input:["w-full"],panel:["w-full rounded-md border bg-popover p-1","shadow-md outline-none","animate-in fade-in-0 zoom-in-95","w-[--radix-popover-trigger-width]","max-h-[300px] overflow-y-auto"],suggestion:["relative","w-full","flex items-center rounded-sm px-2 py-1.5 text-sm outline-none","cursor-default select-none","transition-colors duration-150","hover:bg-primary hover:text-primary-foreground","focus:bg-primary focus:text-primary-foreground","data-[selected=true]:bg-primary data-[selected=true]:text-primary-foreground","data-[disabled]:pointer-events-none data-[disabled]:opacity-50"],tags:["flex flex-wrap gap-1"]},defaultVariants:{intent:"default",size:"default"},variants:{intent:{default:{}},size:{sm:{},default:{},lg:{}},active:{true:{input:"bg-primary text-primary-foreground"}}}}),A=e.createContext(void 0);function P(){const s=e.useContext(A);if(!s)throw new Error("useTagTextFieldContext must be used within TagTextFieldProvider");return s}const M=({value:s,defaultValue:d,onChange:n,disabled:p,size:T,intent:o="default",children:c,className:x})=>{const{tags:F,addTag:r,removeTag:v}=ee({value:s,defaultValue:d,onChange:n}),u=e.useMemo(()=>({tags:F,addTag:r,removeTag:v,disabled:p,size:T,intent:o}),[F,r,v,p,T,o]);return e.createElement(A.Provider,{value:u},e.createElement("div",{className:b().root({class:x})},c))},q=e.forwardRef(({suggestions:s=[],...d},n)=>{const{addTag:p,removeTag:T,tags:o,disabled:c,size:x,intent:F}=P(),[r,v]=e.useState(""),[u,g]=e.useState(!1),[i,y]=e.useState(-1),w=e.useRef(null),B=Z([w,n]),V=e.useMemo(()=>new Set(s),[s]),S=e.useMemo(()=>new Set(o),[o]),m=e.useMemo(()=>Array.from(V).filter(a=>{const l=a.toLowerCase().includes(r.toLowerCase()),N=!S.has(a);return l&&N}),[V,r,S]),E=e.useCallback(a=>{var l;p(a),v(""),g(!1),y(-1),(l=w.current)==null||l.focus()},[p]),I=e.useCallback(a=>{m.length!==0&&y(l=>a==="down"?l>=m.length-1?0:l+1:l<=0?m.length-1:l-1)},[m]),L=e.useCallback(a=>{var l;switch(a.key){case"Enter":{a.preventDefault(),i>=0&&m[i]?E(m[i]):r&&E(r);break}case"Tab":{i>=0&&m[i]&&(a.preventDefault(),E(m[i]));break}case"Backspace":{!r&&o.length>0&&(a.preventDefault(),T(o[o.length-1]));break}case"ArrowDown":{a.preventDefault(),u||g(!0),I("down");break}case"ArrowUp":{a.preventDefault(),u||g(!0),I("up");break}case"Escape":{a.preventDefault(),g(!1),y(-1),(l=w.current)==null||l.blur();break}}},[i,m,r,E,o,T,u,I]),_=e.useCallback(a=>{const l=a.target.value;v(l),g(!0),y(-1)},[]),$=e.useCallback(a=>{var k,z;const l=(k=a.relatedTarget)==null?void 0:k.closest('[role="listbox"]'),N=(z=a.relatedTarget)==null?void 0:z.closest("input");!l&&!N&&g(!1)},[]);return e.createElement(U,{open:u,onOpenChange:g},e.createElement(X,{asChild:!0},e.createElement(G,{size:x},e.createElement(H,{ref:B,value:r,onChange:_,onKeyDown:L,onBlur:$,disabled:c,role:"combobox","aria-expanded":u,"aria-controls":"tag-suggestions","aria-activedescendant":i>=0?`suggestion-${m[i]}`:void 0,...d}))),e.createElement(W,{onOpenAutoFocus:Y,className:b().panel(),align:"start",id:"tag-suggestions",role:"listbox",onKeyDown:a=>{["ArrowUp","ArrowDown"].includes(a.key)&&a.preventDefault()}},m.length>0?m.map((a,l)=>e.createElement("button",{key:a,id:`suggestion-${a}`,role:"option","aria-selected":i===l,"data-selected":i===l,className:b().suggestion(),onClick:()=>E(a),onMouseEnter:()=>y(l),onFocus:()=>y(l),type:"button",tabIndex:i===l?0:-1},a)):r?e.createElement("button",{role:"option","aria-selected":i===0,"data-selected":i===0,className:b().suggestion(),onClick:()=>E(r),onMouseEnter:()=>y(0),onFocus:()=>y(0),type:"button",tabIndex:i===0?0:-1},`Add "${r}"`):null))});q.displayName="TagTextFieldInput";const O=e.forwardRef((s,d)=>{const{tags:n,removeTag:p,size:T,disabled:o}=P();return e.createElement("div",{ref:d,className:b().tags(),...s},n.map(c=>e.createElement(j,{key:c,variant:"solid",className:T==="sm"?"text-xs":T==="lg"?"text-base":"text-sm"},c,!o&&e.createElement("button",{type:"button",onClick:()=>p(c),className:"ml-1 hover:text-destructive focus-visible:outline-none","aria-label":`Remove ${c}`},e.createElement(Q,{className:"h-3 w-3"})))))});O.displayName="TagTextFieldTags";const t=Object.assign(M,{Input:q,Tags:O});M.__docgenInfo={description:"",methods:[],displayName:"TagTextFieldRoot",props:{value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"VariantProps['size']",raw:"TagTextFieldVariants['size']"},description:""},intent:{required:!1,tsType:{name:"VariantProps['intent']",raw:"TagTextFieldVariants['intent']"},description:"",defaultValue:{value:"'default'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const xe={args:{disabled:!1,intent:"primary",size:"default"},argTypes:{disabled:{control:"boolean",description:"Whether the tag textfield is disabled"},intent:{control:"select",description:"The intent/purpose of the tag textfield which determines its color scheme",options:["primary","secondary","positive","cautionary","destructive"]},size:{control:"select",description:"The size of the tag textfield",options:["sm","default","lg"]}},title:"Forms/TagTextField"},f=["React","Vue","Angular","Svelte","Next.js","Nuxt","Remix","Astro"],h={render:()=>e.createElement("div",{className:"flex flex-col gap-8"},e.createElement("div",{className:"flex flex-col gap-4"},e.createElement("h3",{className:"text-lg font-semibold"},"Sizes"),e.createElement("div",{className:"flex flex-col gap-4"},e.createElement(t,{size:"sm"},e.createElement(t.Input,{placeholder:"Small size",suggestions:f}),e.createElement(t.Tags,null)),e.createElement(t,{size:"default",defaultValue:["React","Vue"]},e.createElement(t.Input,{placeholder:"Default size",suggestions:f}),e.createElement(t.Tags,null)),e.createElement(t,{size:"lg",defaultValue:["React","Vue","Angular"]},e.createElement(t.Input,{placeholder:"Large size",suggestions:f}),e.createElement(t.Tags,null)))),e.createElement("div",{className:"flex flex-col gap-4"},e.createElement("h3",{className:"text-lg font-semibold"},"Intents"),e.createElement("div",{className:"flex flex-col gap-4"},e.createElement(t,{intent:"primary",defaultValue:["Primary"]},e.createElement(t.Input,{placeholder:"Primary intent...",suggestions:f}),e.createElement(t.Tags,null)),e.createElement(t,{intent:"secondary",defaultValue:["Secondary"]},e.createElement(t.Input,{placeholder:"Secondary intent...",suggestions:f}),e.createElement(t.Tags,null)),e.createElement(t,{intent:"positive",defaultValue:["Positive"]},e.createElement(t.Input,{placeholder:"Positive intent...",suggestions:f}),e.createElement(t.Tags,null)),e.createElement(t,{intent:"cautionary",defaultValue:["Cautionary"]},e.createElement(t.Input,{placeholder:"Cautionary intent...",suggestions:f}),e.createElement(t.Tags,null)),e.createElement(t,{intent:"destructive",defaultValue:["Destructive"]},e.createElement(t.Input,{placeholder:"Destructive intent...",suggestions:f}),e.createElement(t.Tags,null)))),e.createElement("div",{className:"flex flex-col gap-4"},e.createElement("h3",{className:"text-lg font-semibold"},"States"),e.createElement("div",{className:"flex flex-col gap-4"},e.createElement(t,{defaultValue:["React","TypeScript"],disabled:!0},e.createElement(t.Input,{placeholder:"Disabled state...",suggestions:f}),e.createElement(t.Tags,null)),e.createElement(t,{defaultValue:["React","TypeScript"]},e.createElement(t.Input,{placeholder:"Default state...",suggestions:f}),e.createElement(t.Tags,null)))))};var D,R,C;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">
      {/* Sizes */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Sizes</h3>
        <div className="flex flex-col gap-4">
          <TagTextField size="sm">
            <TagTextField.Input placeholder="Small size" suggestions={suggestions} />
            <TagTextField.Tags />
          </TagTextField>

          <TagTextField size="default" defaultValue={['React', 'Vue']}>
            <TagTextField.Input placeholder="Default size" suggestions={suggestions} />
            <TagTextField.Tags />
          </TagTextField>

          <TagTextField size="lg" defaultValue={['React', 'Vue', 'Angular']}>
            <TagTextField.Input placeholder="Large size" suggestions={suggestions} />
            <TagTextField.Tags />
          </TagTextField>
        </div>
      </div>
      {/* Intents */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Intents</h3>
        <div className="flex flex-col gap-4">
          <TagTextField intent="primary" defaultValue={['Primary']}>
            <TagTextField.Input placeholder="Primary intent..." suggestions={suggestions} />
            <TagTextField.Tags />
          </TagTextField>

          <TagTextField intent="secondary" defaultValue={['Secondary']}>
            <TagTextField.Input placeholder="Secondary intent..." suggestions={suggestions} />
            <TagTextField.Tags />
          </TagTextField>

          <TagTextField intent="positive" defaultValue={['Positive']}>
            <TagTextField.Input placeholder="Positive intent..." suggestions={suggestions} />
            <TagTextField.Tags />
          </TagTextField>

          <TagTextField intent="cautionary" defaultValue={['Cautionary']}>
            <TagTextField.Input placeholder="Cautionary intent..." suggestions={suggestions} />
            <TagTextField.Tags />
          </TagTextField>

          <TagTextField intent="destructive" defaultValue={['Destructive']}>
            <TagTextField.Input placeholder="Destructive intent..." suggestions={suggestions} />
            <TagTextField.Tags />
          </TagTextField>
        </div>
      </div>

      {/* States */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">States</h3>
        <div className="flex flex-col gap-4">
          <TagTextField defaultValue={['React', 'TypeScript']} disabled>
            <TagTextField.Input placeholder="Disabled state..." suggestions={suggestions} />
            <TagTextField.Tags />
          </TagTextField>

          <TagTextField defaultValue={['React', 'TypeScript']}>
            <TagTextField.Input placeholder="Default state..." suggestions={suggestions} />
            <TagTextField.Tags />
          </TagTextField>
        </div>
      </div>
    </div>
}`,...(C=(R=h.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};const ve=["AllVariants"];export{h as AllVariants,ve as __namedExportsOrder,xe as default};
