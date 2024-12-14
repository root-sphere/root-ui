import{r as e}from"./index-DRjF_FHU.js";import{u as Ve,F as je,a as Me,b as k,d as V,c as j,e as Le}from"./form-B0Kgbr9N.js";import{c as le}from"./utils-Cf3bcFYp.js";import{u as ce,c as I,a as Ke}from"./index-B23hBBlt.js";import{u as K}from"./index-LOOTFJQl.js";import{a as Ue,P as w,c as ie}from"./index-bDvysU34.js";import{c as Be,u as de}from"./index-8C9U9fVh.js";import{c as qe}from"./index-D1y9YG6K.js";import{u as We}from"./index-zrIYd2qu.js";import{j as i}from"./jsx-runtime-DR9Q75dM.js";import{u as ze}from"./index-Iz9Zo_Nw.js";import{P as Ye}from"./index-C9o98AqH.js";import{c as ue}from"./index-CyyGtGk5.js";import{c as $e}from"./createLucideIcon-BS-719lU.js";import"./index-rX-Bn4lm.js";/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const He=$e("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);var M="rovingFocusGroup.onEntryFocus",Xe={bubbles:!1,cancelable:!0},D="RovingFocusGroup",[L,me,Je]=Be(D),[Qe,pe]=qe(D,[Je]),[Ze,et]=Qe(D),fe=e.forwardRef((t,a)=>i.jsx(L.Provider,{scope:t.__scopeRovingFocusGroup,children:i.jsx(L.Slot,{scope:t.__scopeRovingFocusGroup,children:i.jsx(tt,{...t,ref:a})})}));fe.displayName=D;var tt=e.forwardRef((t,a)=>{const{__scopeRovingFocusGroup:o,orientation:r,loop:s=!1,dir:l,currentTabStopId:u,defaultCurrentTabStopId:b,onCurrentTabStopIdChange:d,onEntryFocus:c,preventScrollOnEntryFocus:E=!1,...p}=t,f=e.useRef(null),m=K(a,f),n=de(l),[v=null,R]=ce({prop:u,defaultProp:b,onChange:d}),[h,F]=e.useState(!1),O=Ue(c),_e=me(o),T=e.useRef(!1),[De,q]=e.useState(0);return e.useEffect(()=>{const x=f.current;if(x)return x.addEventListener(M,O),()=>x.removeEventListener(M,O)},[O]),i.jsx(Ze,{scope:o,orientation:r,dir:n,loop:s,currentTabStopId:v,onItemFocus:e.useCallback(x=>R(x),[R]),onItemShiftTab:e.useCallback(()=>F(!0),[]),onFocusableItemAdd:e.useCallback(()=>q(x=>x+1),[]),onFocusableItemRemove:e.useCallback(()=>q(x=>x-1),[]),children:i.jsx(w.div,{tabIndex:h||De===0?-1:0,"data-orientation":r,...p,ref:m,style:{outline:"none",...t.style},onMouseDown:I(t.onMouseDown,()=>{T.current=!0}),onFocus:I(t.onFocus,x=>{const Oe=!T.current;if(x.target===x.currentTarget&&Oe&&!h){const W=new CustomEvent(M,Xe);if(x.currentTarget.dispatchEvent(W),!W.defaultPrevented){const A=_e().filter(N=>N.focusable),Te=A.find(N=>N.active),Ae=A.find(N=>N.id===v),ke=[Te,Ae,...A].filter(Boolean).map(N=>N.ref.current);xe(ke,E)}}T.current=!1}),onBlur:I(t.onBlur,()=>F(!1))})})}),ve="RovingFocusGroupItem",be=e.forwardRef((t,a)=>{const{__scopeRovingFocusGroup:o,focusable:r=!0,active:s=!1,tabStopId:l,...u}=t,b=We(),d=l||b,c=et(ve,o),E=c.currentTabStopId===d,p=me(o),{onFocusableItemAdd:f,onFocusableItemRemove:m}=c;return e.useEffect(()=>{if(r)return f(),()=>m()},[r,f,m]),i.jsx(L.ItemSlot,{scope:o,id:d,focusable:r,active:s,children:i.jsx(w.span,{tabIndex:E?0:-1,"data-orientation":c.orientation,...u,ref:a,onMouseDown:I(t.onMouseDown,n=>{r?c.onItemFocus(d):n.preventDefault()}),onFocus:I(t.onFocus,()=>c.onItemFocus(d)),onKeyDown:I(t.onKeyDown,n=>{if(n.key==="Tab"&&n.shiftKey){c.onItemShiftTab();return}if(n.target!==n.currentTarget)return;const v=rt(n,c.orientation,c.dir);if(v!==void 0){if(n.metaKey||n.ctrlKey||n.altKey||n.shiftKey)return;n.preventDefault();let h=p().filter(F=>F.focusable).map(F=>F.ref.current);if(v==="last")h.reverse();else if(v==="prev"||v==="next"){v==="prev"&&h.reverse();const F=h.indexOf(n.currentTarget);h=c.loop?nt(h,F+1):h.slice(F+1)}setTimeout(()=>xe(h))}})})})});be.displayName=ve;var ot={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function at(t,a){return a!=="rtl"?t:t==="ArrowLeft"?"ArrowRight":t==="ArrowRight"?"ArrowLeft":t}function rt(t,a,o){const r=at(t.key,o);if(!(a==="vertical"&&["ArrowLeft","ArrowRight"].includes(r))&&!(a==="horizontal"&&["ArrowUp","ArrowDown"].includes(r)))return ot[r]}function xe(t,a=!1){const o=document.activeElement;for(const r of t)if(r===o||(r.focus({preventScroll:a}),document.activeElement!==o))return}function nt(t,a){return t.map((o,r)=>t[(a+r)%t.length])}var st=fe,lt=be,U="Radio",[ct,ge]=ie(U),[it,dt]=ct(U),Ee=e.forwardRef((t,a)=>{const{__scopeRadio:o,name:r,checked:s=!1,required:l,disabled:u,value:b="on",onCheck:d,form:c,...E}=t,[p,f]=e.useState(null),m=K(a,R=>f(R)),n=e.useRef(!1),v=p?c||!!p.closest("form"):!0;return i.jsxs(it,{scope:o,checked:s,disabled:u,children:[i.jsx(w.button,{type:"button",role:"radio","aria-checked":s,"data-state":ye(s),"data-disabled":u?"":void 0,disabled:u,value:b,...E,ref:m,onClick:I(t.onClick,R=>{s||d==null||d(),v&&(n.current=R.isPropagationStopped(),n.current||R.stopPropagation())})}),v&&i.jsx(ut,{control:p,bubbles:!n.current,name:r,value:b,checked:s,required:l,disabled:u,form:c,style:{transform:"translateX(-100%)"}})]})});Ee.displayName=U;var Re="RadioIndicator",he=e.forwardRef((t,a)=>{const{__scopeRadio:o,forceMount:r,...s}=t,l=dt(Re,o);return i.jsx(Ye,{present:r||l.checked,children:i.jsx(w.span,{"data-state":ye(l.checked),"data-disabled":l.disabled?"":void 0,...s,ref:a})})});he.displayName=Re;var ut=t=>{const{control:a,checked:o,bubbles:r=!0,...s}=t,l=e.useRef(null),u=ze(o),b=Ke(a);return e.useEffect(()=>{const d=l.current,c=window.HTMLInputElement.prototype,p=Object.getOwnPropertyDescriptor(c,"checked").set;if(u!==o&&p){const f=new Event("click",{bubbles:r});p.call(d,o),d.dispatchEvent(f)}},[u,o,r]),i.jsx("input",{type:"radio","aria-hidden":!0,defaultChecked:o,...s,tabIndex:-1,ref:l,style:{...t.style,...b,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function ye(t){return t?"checked":"unchecked"}var mt=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],B="RadioGroup",[pt,Vt]=ie(B,[pe,ge]),Fe=pe(),Ie=ge(),[ft,vt]=pt(B),Ne=e.forwardRef((t,a)=>{const{__scopeRadioGroup:o,name:r,defaultValue:s,value:l,required:u=!1,disabled:b=!1,orientation:d,dir:c,loop:E=!0,onValueChange:p,...f}=t,m=Fe(o),n=de(c),[v,R]=ce({prop:l,defaultProp:s,onChange:p});return i.jsx(ft,{scope:o,name:r,required:u,disabled:b,value:v,onValueChange:R,children:i.jsx(st,{asChild:!0,...m,orientation:d,dir:n,loop:E,children:i.jsx(w.div,{role:"radiogroup","aria-required":u,"aria-orientation":d,"data-disabled":b?"":void 0,dir:n,...f,ref:a})})})});Ne.displayName=B;var we="RadioGroupItem",Ce=e.forwardRef((t,a)=>{const{__scopeRadioGroup:o,disabled:r,...s}=t,l=vt(we,o),u=l.disabled||r,b=Fe(o),d=Ie(o),c=e.useRef(null),E=K(a,c),p=l.value===s.value,f=e.useRef(!1);return e.useEffect(()=>{const m=v=>{mt.includes(v.key)&&(f.current=!0)},n=()=>f.current=!1;return document.addEventListener("keydown",m),document.addEventListener("keyup",n),()=>{document.removeEventListener("keydown",m),document.removeEventListener("keyup",n)}},[]),i.jsx(lt,{asChild:!0,...b,focusable:!u,active:p,children:i.jsx(Ee,{disabled:u,required:l.required,checked:p,...d,...s,name:l.name,ref:E,onCheck:()=>l.onValueChange(s.value),onKeyDown:I(m=>{m.key==="Enter"&&m.preventDefault()}),onFocus:I(s.onFocus,()=>{var m;f.current&&((m=c.current)==null||m.click())})})})});Ce.displayName=we;var bt="RadioGroupIndicator",Ge=e.forwardRef((t,a)=>{const{__scopeRadioGroup:o,...r}=t,s=Ie(o);return i.jsx(he,{...s,...r,ref:a})});Ge.displayName=bt;var Se=Ne,Pe=Ce,xt=Ge;const gt=ue({slots:{root:"grid gap-2"}}),Et=ue({slots:{root:["aspect-square size-5 rounded-full border border-primary text-primary","ring-offset-background","focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2","disabled:cursor-not-allowed disabled:opacity-50"],icon:["size-3 fill-current text-current"],indicator:["flex h-full w-full items-center justify-center text-current font-medium"]}}),y=e.forwardRef(({className:t,...a},o)=>{const{root:r}=gt();return e.createElement(Se,{className:le(r(),t),...a,ref:o})});y.displayName=Se.displayName;const g=e.forwardRef(({className:t,...a},o)=>{const{root:r,icon:s,indicator:l}=Et();return e.createElement(Pe,{ref:o,className:le(r(),t),...a},e.createElement(xt,{className:l()},e.createElement(He,{className:s()})))});g.displayName=Pe.displayName;y.__docgenInfo={description:"",methods:[]};g.__docgenInfo={description:"",methods:[]};const jt={args:{defaultValue:"option-one",disabled:!1},argTypes:{defaultValue:{control:"text",description:"The default selected value"},disabled:{control:"boolean",description:"Whether the radio group is disabled"}},component:y,parameters:{layout:"centered"},title:"Forms/RadioGroup"},C={render:()=>e.createElement("div",{className:"flex flex-col gap-8"},e.createElement("div",{className:"flex flex-col gap-4"},e.createElement("h3",{className:"text-lg font-semibold"},"Default"),e.createElement(y,{defaultValue:"option-one"},e.createElement("div",{className:"flex items-center space-x-2"},e.createElement(g,{value:"option-one",id:"option-one"}),e.createElement("label",{htmlFor:"option-one"},"Option One")),e.createElement("div",{className:"flex items-center space-x-2"},e.createElement(g,{value:"option-two",id:"option-two"}),e.createElement("label",{htmlFor:"option-two"},"Option Two")))),e.createElement("div",{className:"flex flex-col gap-4"},e.createElement("h3",{className:"text-lg font-semibold"},"With Description"),e.createElement(y,{defaultValue:"card"},e.createElement("div",{className:"flex items-start space-x-2"},e.createElement(g,{value:"card",id:"card"}),e.createElement("div",{className:"grid gap-1.5 leading-none"},e.createElement("label",{htmlFor:"card"},"Card Payment"),e.createElement("p",{className:"text-sm text-muted-foreground"},"Pay with your credit or debit card."))))),e.createElement("div",{className:"flex flex-col gap-4"},e.createElement("h3",{className:"text-lg font-semibold"},"Disabled"),e.createElement(y,{defaultValue:"option-one"},e.createElement("div",{className:"flex items-center space-x-2"},e.createElement(g,{value:"option-one",id:"disabled",disabled:!0}),e.createElement("label",{htmlFor:"disabled"},"Disabled Option")))))},G={render:t=>e.createElement(y,{...t},e.createElement("div",{className:"flex items-center space-x-2"},e.createElement(g,{value:"option-one",id:"r1"}),e.createElement("label",{htmlFor:"r1"},"Option One")),e.createElement("div",{className:"flex items-center space-x-2"},e.createElement(g,{value:"option-two",id:"r2"}),e.createElement("label",{htmlFor:"r2"},"Option Two"))),args:{defaultValue:"option-one",disabled:!1}},Rt=()=>{const t=Ve({defaultValues:{type:"card"}});return e.createElement(je,{...t},e.createElement("form",{className:"w-full space-y-6"},e.createElement(Me,{control:t.control,name:"type",render:({field:a})=>e.createElement(k,{className:"space-y-3"},e.createElement(V,null,"Payment Method"),e.createElement(j,null,e.createElement(y,{onValueChange:a.onChange,defaultValue:a.value,className:"flex flex-col space-y-1"},e.createElement(k,{className:"flex items-center space-x-3 space-y-0"},e.createElement(j,null,e.createElement(g,{value:"card"})),e.createElement(V,{className:"font-normal"},"Card Payment")),e.createElement(k,{className:"flex items-center space-x-3 space-y-0"},e.createElement(j,null,e.createElement(g,{value:"paypal"})),e.createElement(V,{className:"font-normal"},"PayPal")))),e.createElement(Le,null,"Select your preferred payment method"))})))},S={render:Rt},P={render:t=>e.createElement(y,{...t},e.createElement("div",{className:"flex items-center space-x-2"},e.createElement(g,{value:"default",id:"default"}),e.createElement("label",{htmlFor:"default"},"Default Option"))),args:{defaultValue:"default"}},_={render:t=>e.createElement(y,{...t},e.createElement("div",{className:"flex items-center space-x-2"},e.createElement(g,{value:"disabled",id:"disabled"}),e.createElement("label",{htmlFor:"disabled"},"Disabled Option"))),args:{defaultValue:"disabled",disabled:!0}};var z,Y,$;C.parameters={...C.parameters,docs:{...(z=C.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Default</h3>
        <RadioGroup defaultValue="option-one">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-one" id="option-one" />
            <label htmlFor="option-one">Option One</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-two" id="option-two" />
            <label htmlFor="option-two">Option Two</label>
          </div>
        </RadioGroup>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">With Description</h3>
        <RadioGroup defaultValue="card">
          <div className="flex items-start space-x-2">
            <RadioGroupItem value="card" id="card" />
            <div className="grid gap-1.5 leading-none">
              <label htmlFor="card">Card Payment</label>
              <p className="text-sm text-muted-foreground">Pay with your credit or debit card.</p>
            </div>
          </div>
        </RadioGroup>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Disabled</h3>
        <RadioGroup defaultValue="option-one">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-one" id="disabled" disabled />
            <label htmlFor="disabled">Disabled Option</label>
          </div>
        </RadioGroup>
      </div>
    </div>
}`,...($=(Y=C.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var H,X,J;G.parameters={...G.parameters,docs:{...(H=G.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => <RadioGroup {...args}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="r1" />
        <label htmlFor="r1">Option One</label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="r2" />
        <label htmlFor="r2">Option Two</label>
      </div>
    </RadioGroup>,
  args: {
    defaultValue: 'option-one',
    disabled: false
  }
}`,...(J=(X=G.parameters)==null?void 0:X.docs)==null?void 0:J.source}}};var Q,Z,ee;S.parameters={...S.parameters,docs:{...(Q=S.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: FormTemplate
}`,...(ee=(Z=S.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,oe,ae;P.parameters={...P.parameters,docs:{...(te=P.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: args => <RadioGroup {...args}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="default" />
        <label htmlFor="default">Default Option</label>
      </div>
    </RadioGroup>,
  args: {
    defaultValue: 'default'
  }
}`,...(ae=(oe=P.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var re,ne,se;_.parameters={..._.parameters,docs:{...(re=_.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: args => <RadioGroup {...args}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="disabled" id="disabled" />
        <label htmlFor="disabled">Disabled Option</label>
      </div>
    </RadioGroup>,
  args: {
    defaultValue: 'disabled',
    disabled: true
  }
}`,...(se=(ne=_.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};const Mt=["AllVariants","Playground","WithForm","Default","Disabled"];export{C as AllVariants,P as Default,_ as Disabled,G as Playground,S as WithForm,Mt as __namedExportsOrder,jt as default};
