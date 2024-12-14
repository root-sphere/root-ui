import{r as e}from"./index-DRjF_FHU.js";import{c as E}from"./utils-Cf3bcFYp.js";import{u as L,c as U,a as X}from"./index-B23hBBlt.js";import{u as $}from"./index-LOOTFJQl.js";import{c as G,P as A}from"./index-bDvysU34.js";import{u as J}from"./index-Iz9Zo_Nw.js";import{j as m}from"./jsx-runtime-DR9Q75dM.js";import{c as K}from"./index-CyyGtGk5.js";import"./index-rX-Bn4lm.js";var S="Switch",[Q,me]=G(S),[Y,Z]=Q(S),H=e.forwardRef((t,o)=>{const{__scopeSwitch:a,name:s,checked:r,defaultChecked:i,required:c,disabled:l,value:d="on",onCheckedChange:v,form:x,...h}=t,[u,O]=e.useState(null),W=$(o,p=>O(p)),w=e.useRef(!1),C=u?x||!!u.closest("form"):!0,[f=!1,q]=L({prop:r,defaultProp:i,onChange:v});return m.jsxs(Y,{scope:a,checked:f,disabled:l,children:[m.jsx(A.button,{type:"button",role:"switch","aria-checked":f,"aria-required":c,"data-state":B(f),"data-disabled":l?"":void 0,disabled:l,value:d,...h,ref:W,onClick:U(t.onClick,p=>{q(F=>!F),C&&(w.current=p.isPropagationStopped(),w.current||p.stopPropagation())})}),C&&m.jsx(ee,{control:u,bubbles:!w.current,name:s,value:d,checked:f,required:c,disabled:l,form:x,style:{transform:"translateX(-100%)"}})]})});H.displayName=S;var M="SwitchThumb",V=e.forwardRef((t,o)=>{const{__scopeSwitch:a,...s}=t,r=Z(M,a);return m.jsx(A.span,{"data-state":B(r.checked),"data-disabled":r.disabled?"":void 0,...s,ref:o})});V.displayName=M;var ee=t=>{const{control:o,checked:a,bubbles:s=!0,...r}=t,i=e.useRef(null),c=J(a),l=X(o);return e.useEffect(()=>{const d=i.current,v=window.HTMLInputElement.prototype,h=Object.getOwnPropertyDescriptor(v,"checked").set;if(c!==a&&h){const u=new Event("click",{bubbles:s});h.call(d,a),d.dispatchEvent(u)}},[c,a,s]),m.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:a,...r,tabIndex:-1,ref:i,style:{...t.style,...l,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function B(t){return t?"checked":"unchecked"}var D=H,te=V;const ae=K({slots:{root:["peer inline-flex shrink-0 cursor-pointer","items-center rounded-full border-2 border-transparent","transition-colors duration-200","focus-visible:outline-none focus-visible:ring-2","focus-visible:ring-ring focus-visible:ring-offset-2","focus-visible:ring-offset-background","disabled:pointer-events-none disabled:opacity-70","hover:ring-2 hover:ring-primary hover:ring-offset-2"],thumb:["block","rounded-full bg-background shadow-lg ring-0","pointer-events-none transition-transform duration-200"]},defaultVariants:{intent:"default",size:"default"},variants:{intent:{default:{root:["data-[state=checked]:bg-primary","data-[state=unchecked]:bg-input","data-[state=unchecked]:text-font-primary"]}},size:{lg:{root:"h-7 w-[52px]",thumb:"h-6 w-6 data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0"},sm:{root:"h-5 w-9",thumb:"h-4 w-4 data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"},default:{root:"h-6 w-11",thumb:"h-5 w-5 data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"}}}}),n=e.forwardRef(({className:t,size:o,intent:a,...s},r)=>{const{root:i,thumb:c}=ae({size:o,intent:a});return e.createElement(D,{className:E(i({className:t})),...s,ref:r},e.createElement(te,{className:E(c())}))});n.displayName=D.displayName;n.__docgenInfo={description:"",methods:[]};const he={args:{defaultChecked:!1,disabled:!1},argTypes:{defaultChecked:{control:"boolean",description:"Whether the switch is checked by default"},disabled:{control:"boolean",description:"Whether the switch is disabled"},size:{control:"select",description:"The size of the switch",options:["sm","md","lg"]}},component:n,parameters:{layout:"centered"},title:"Forms/Switch"},b={render:()=>e.createElement("div",{className:"flex flex-col gap-8"},e.createElement("div",{className:"flex flex-col gap-4"},e.createElement("h3",{className:"text-lg font-semibold"},"Sizes"),e.createElement("div",{className:"flex gap-4"},e.createElement(n,{defaultChecked:!0,size:"sm"}),e.createElement(n,{defaultChecked:!0}),e.createElement(n,{defaultChecked:!0,size:"lg"}))),e.createElement("div",{className:"flex flex-col gap-4"},e.createElement("h3",{className:"text-lg font-semibold"},"States"),e.createElement("div",{className:"flex gap-4"},e.createElement(n,{defaultChecked:!0,disabled:!0}))))},g={args:{defaultChecked:!0,size:"default"}},k={args:{defaultChecked:!0}};var N,y,P;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">
      {/* Sizes */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Sizes</h3>
        <div className="flex gap-4">
          <Switch defaultChecked size="sm" />
          <Switch defaultChecked />
          <Switch defaultChecked size="lg" />
        </div>
      </div>

      {/* States */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">States</h3>
        <div className="flex gap-4">
          <Switch defaultChecked disabled />
        </div>
      </div>
    </div>
}`,...(P=(y=b.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};var z,R,_;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    defaultChecked: true,
    size: 'default'
  }
}`,...(_=(R=g.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var j,T,I;k.parameters={...k.parameters,docs:{...(j=k.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...(I=(T=k.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};const fe=["AllVariants","Playground","Default"];export{b as AllVariants,k as Default,g as Playground,fe as __namedExportsOrder,he as default};
