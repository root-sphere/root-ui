import{r as e}from"./index-DRjF_FHU.js";import{u as $}from"./useMergeRefs-CRTg5TkJ.js";import{c as K}from"./index-CyyGtGk5.js";import{B as j}from"./badge-DNL8FqYl.js";import{P as U,a as X,b as W}from"./popover-BukOxlEC.js";import{T as G,a as H}from"./textfield-DHgf3W7k.js";import{c as J}from"./createLucideIcon-BS-719lU.js";import"./utils-Cf3bcFYp.js";import"./index-LOOTFJQl.js";import"./jsx-runtime-DR9Q75dM.js";import"./index-B23hBBlt.js";import"./index-bDvysU34.js";import"./index-rX-Bn4lm.js";import"./Combination-C0dQLWKN.js";import"./floating-ui.react-dom-DPwH4_MG.js";import"./index-D1y9YG6K.js";import"./index-zrIYd2qu.js";import"./index-C9o98AqH.js";/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=J("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Y=n=>{n.preventDefault()};function Z({value:n,defaultValue:v,onChange:o}={}){const[m,p]=e.useState(v??n??[]),c=e.useMemo(()=>new Set(n??m),[n,m]),d=n!==void 0,f=d?n:m,i=e.useCallback(u=>{const r=u.trim();if(!r||c.has(r))return;const l=[...f,r];d||p(l),o==null||o(l)},[d,f,o,c]),y=e.useCallback(u=>{const r=f.filter(l=>l!==u);d||p(r),o==null||o(r)},[d,f,o]);return{tags:f,addTag:i,removeTag:y}}const b=K({slots:{root:["flex flex-col gap-2 w-full max-w-xs"],input:["w-full"],panel:["w-full rounded-md border bg-popover p-1","shadow-md outline-none","animate-in fade-in-0 zoom-in-95","w-[--radix-popover-trigger-width]","max-h-[300px] overflow-y-auto"],suggestion:["relative","w-full","flex items-center rounded-sm px-2 py-1.5 text-sm outline-none","cursor-default select-none","transition-colors duration-150","hover:bg-primary hover:text-primary-foreground","focus:bg-primary focus:text-primary-foreground","data-[selected=true]:bg-primary data-[selected=true]:text-primary-foreground","data-[disabled]:pointer-events-none data-[disabled]:opacity-50"],tags:["flex flex-wrap gap-1"]},defaultVariants:{intent:"default",size:"default"},variants:{intent:{default:{}},size:{sm:{},default:{},lg:{}},active:{true:{input:"bg-primary text-primary-foreground"}}}}),C=e.createContext(void 0);function A(){const n=e.useContext(C);if(!n)throw new Error("useTagTextFieldContext must be used within TagTextFieldProvider");return n}const P=({value:n,defaultValue:v,onChange:o,disabled:m,size:p,intent:c="default",children:d,className:f})=>{const{tags:i,addTag:y,removeTag:u}=Z({value:n,defaultValue:v,onChange:o}),r=e.useMemo(()=>({tags:i,addTag:y,removeTag:u,disabled:m,size:p,intent:c}),[i,y,u,m,p,c]);return e.createElement(C.Provider,{value:r},e.createElement("div",{className:b().root({class:f})},d))},M=e.forwardRef(({suggestions:n=[],...v},o)=>{const{addTag:m,removeTag:p,tags:c,disabled:d,size:f}=A(),[i,y]=e.useState(""),[u,r]=e.useState(!1),[l,x]=e.useState(-1),h=e.useRef(null),O=$(h,o),N=e.useMemo(()=>new Set(n),[n]),V=e.useMemo(()=>new Set(c),[c]),g=e.useMemo(()=>Array.from(N).filter(a=>{const s=a.toLowerCase().includes(i.toLowerCase()),I=!V.has(a);return s&&I}),[N,i,V]),F=e.useCallback(a=>{var s;m(a),y(""),r(!1),x(-1),(s=h.current)==null||s.focus()},[m]),w=e.useCallback(a=>{g.length!==0&&x(s=>a==="down"?s>=g.length-1?0:s+1:s<=0?g.length-1:s-1)},[g]),B=e.useCallback(a=>{var s;switch(a.key){case"Enter":{a.preventDefault(),l>=0&&g[l]?F(g[l]):i&&F(i);break}case"Tab":{l>=0&&g[l]&&(a.preventDefault(),F(g[l]));break}case"Backspace":{!i&&c.length>0&&(a.preventDefault(),p(c[c.length-1]));break}case"ArrowDown":{a.preventDefault(),u||r(!0),w("down");break}case"ArrowUp":{a.preventDefault(),u||r(!0),w("up");break}case"Escape":{a.preventDefault(),r(!1),x(-1),(s=h.current)==null||s.blur();break}}},[l,g,i,F,c,p,u,w]),L=e.useCallback(a=>{const s=a.target.value;y(s),r(!0),x(-1)},[]),_=e.useCallback(a=>{var S,k;const s=(S=a.relatedTarget)==null?void 0:S.closest('[role="listbox"]'),I=(k=a.relatedTarget)==null?void 0:k.closest("input");!s&&!I&&r(!1)},[]);return e.createElement(U,{open:u,onOpenChange:r},e.createElement(X,{asChild:!0},e.createElement(G,{size:f},e.createElement(H,{ref:O,value:i,onChange:L,onKeyDown:B,onBlur:_,disabled:d,role:"combobox","aria-expanded":u,"aria-controls":"tag-suggestions","aria-activedescendant":l>=0?`suggestion-${g[l]}`:void 0,...v}))),e.createElement(W,{onOpenAutoFocus:Y,className:b().panel(),align:"start",id:"tag-suggestions",role:"listbox",onKeyDown:a=>{["ArrowUp","ArrowDown"].includes(a.key)&&a.preventDefault()}},g.length>0?g.map((a,s)=>e.createElement("button",{key:a,id:`suggestion-${a}`,role:"option","aria-selected":l===s,"data-selected":l===s,className:b().suggestion(),onClick:()=>F(a),onMouseEnter:()=>x(s),onFocus:()=>x(s),type:"button",tabIndex:l===s?0:-1},a)):i?e.createElement("button",{role:"option","aria-selected":l===0,"data-selected":l===0,className:b().suggestion(),onClick:()=>F(i),onMouseEnter:()=>x(0),onFocus:()=>x(0),type:"button",tabIndex:l===0?0:-1},`Add "${i}"`):null))});M.displayName="TagTextFieldInput";const q=e.forwardRef((n,v)=>{const{tags:o,removeTag:m,size:p,disabled:c}=A();return e.createElement("div",{ref:v,className:b().tags(),...n},o.map(d=>e.createElement(j,{key:d,variant:"solid",className:p==="sm"?"text-xs":p==="lg"?"text-base":"text-sm"},d,!c&&e.createElement("button",{type:"button",onClick:()=>m(d),className:"ml-1 hover:text-destructive focus-visible:outline-none","aria-label":`Remove ${d}`},e.createElement(Q,{className:"h-3 w-3"})))))});q.displayName="TagTextFieldTags";const t=Object.assign(P,{Input:M,Tags:q});P.__docgenInfo={description:"",methods:[],displayName:"TagTextFieldRoot",props:{value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"VariantProps['size']",raw:"TagTextFieldVariants['size']"},description:""},intent:{required:!1,tsType:{name:"VariantProps['intent']",raw:"TagTextFieldVariants['intent']"},description:"",defaultValue:{value:"'default'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const ve={args:{disabled:!1,intent:"primary",size:"default"},argTypes:{disabled:{control:"boolean",description:"Whether the tag textfield is disabled"},intent:{control:"select",description:"The intent/purpose of the tag textfield which determines its color scheme",options:["primary","secondary","positive","cautionary","destructive"]},size:{control:"select",description:"The size of the tag textfield",options:["sm","default","lg"]}},title:"Forms/TagTextField"},T=["React","Vue","Angular","Svelte","Next.js","Nuxt","Remix","Astro"],E={render:()=>e.createElement("div",{className:"flex flex-col gap-8"},e.createElement("div",{className:"flex flex-col gap-4"},e.createElement("h3",{className:"text-lg font-semibold"},"Sizes"),e.createElement("div",{className:"flex flex-col gap-4"},e.createElement(t,{size:"sm"},e.createElement(t.Input,{placeholder:"Small size",suggestions:T}),e.createElement(t.Tags,null)),e.createElement(t,{size:"default",defaultValue:["React","Vue"]},e.createElement(t.Input,{placeholder:"Default size",suggestions:T}),e.createElement(t.Tags,null)),e.createElement(t,{size:"lg",defaultValue:["React","Vue","Angular"]},e.createElement(t.Input,{placeholder:"Large size",suggestions:T}),e.createElement(t.Tags,null)))),e.createElement("div",{className:"flex flex-col gap-4"},e.createElement("h3",{className:"text-lg font-semibold"},"Intents"),e.createElement("div",{className:"flex flex-col gap-4"},e.createElement(t,{intent:"primary",defaultValue:["Primary"]},e.createElement(t.Input,{placeholder:"Primary intent...",suggestions:T}),e.createElement(t.Tags,null)),e.createElement(t,{intent:"secondary",defaultValue:["Secondary"]},e.createElement(t.Input,{placeholder:"Secondary intent...",suggestions:T}),e.createElement(t.Tags,null)),e.createElement(t,{intent:"positive",defaultValue:["Positive"]},e.createElement(t.Input,{placeholder:"Positive intent...",suggestions:T}),e.createElement(t.Tags,null)),e.createElement(t,{intent:"cautionary",defaultValue:["Cautionary"]},e.createElement(t.Input,{placeholder:"Cautionary intent...",suggestions:T}),e.createElement(t.Tags,null)),e.createElement(t,{intent:"destructive",defaultValue:["Destructive"]},e.createElement(t.Input,{placeholder:"Destructive intent...",suggestions:T}),e.createElement(t.Tags,null)))),e.createElement("div",{className:"flex flex-col gap-4"},e.createElement("h3",{className:"text-lg font-semibold"},"States"),e.createElement("div",{className:"flex flex-col gap-4"},e.createElement(t,{defaultValue:["React","TypeScript"],disabled:!0},e.createElement(t.Input,{placeholder:"Disabled state...",suggestions:T}),e.createElement(t.Tags,null)),e.createElement(t,{defaultValue:["React","TypeScript"]},e.createElement(t.Input,{placeholder:"Default state...",suggestions:T}),e.createElement(t.Tags,null)))))};var z,D,R;E.parameters={...E.parameters,docs:{...(z=E.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(R=(D=E.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};const ye=["AllVariants"];export{E as AllVariants,ye as __namedExportsOrder,ve as default};
