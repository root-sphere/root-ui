import{B as f}from"./button-BfAqSHv_.js";import{r as e}from"./index-DRjF_FHU.js";import{c as j,a as k}from"./utils-Cf3bcFYp.js";import{u as $,b as H,s as U,a as G,c as W,d as Y,e as Z,i as J,f as K,F as Q,g as X}from"./floating-ui.react-SMwz2rol.js";import{c as V}from"./index-CyyGtGk5.js";import{o as ee,s as te,h as oe,k as ne}from"./floating-ui.react-dom-DPwH4_MG.js";import{u as ae}from"./useMergeRefs-CRTg5TkJ.js";import"./index-LOOTFJQl.js";import"./jsx-runtime-DR9Q75dM.js";import"./index-rX-Bn4lm.js";const le=V({base:["max-w-xs","py-2 px-4","rounded","border border-neutral-5","text-neutral-90","bg-background","text-sm","leading-6"]});function re({disabled:n,initialOpen:r=!1,offset:a=5,onOpenChange:s,open:t,placement:i="bottom-start",root:l,strategy:c="fixed",zIndex:p}={}){const[T,x]=e.useState(r),v=t??T,E=s??x,y=$({middleware:[ee(a),te(),oe()],onOpenChange:E,open:v,placement:i,strategy:c,whileElementsMounted:ne}),{context:d}=y,M=H(d,{enabled:!n,handleClose:U(),move:!1}),D=G(d,{enabled:!n}),z=W(d),L=Y(d,{role:"tooltip"}),b=Z([M,D,z,L]);return e.useMemo(()=>({...b,...y,open:v,root:l,setOpen:E,zIndex:p}),[y,b,v,l,E,p])}const P=e.createContext(null),w=()=>{const n=e.useContext(P);if(n==null)throw new Error("Tooltip components must be wrapped in <Tooltip />");return n},se="Root__Tooltip__Content",q=e.forwardRef(({children:n,className:r,...a},s)=>{const t=w(),i=e.useId(),l=J([(t==null?void 0:t.refs.setFloating)||null,s]);K(t.context,{id:i});const{floatingStyles:c,getFloatingProps:p,root:T,zIndex:x}=t;return e.createElement(Q,{root:T},(t==null?void 0:t.open)&&e.createElement("div",{...t==null?void 0:t.getFloatingProps(a),className:j(se,le({className:r})),style:{left:t.x??0,position:t==null?void 0:t.strategy,top:t.y??0,visibility:t.x==null?"hidden":"visible",zIndex:x??1e3,...c,...a.style},ref:l,...p(a)},n))});q.__docgenInfo={description:"",methods:[],displayName:"TooltipContent"};const ie={close:100,open:300},F=({children:n,delay:r,...a})=>{const s=re(a);return e.createElement(P.Provider,{value:s},e.createElement(X,{delay:r||ie},n))};F.__docgenInfo={description:"",methods:[],displayName:"TooltipRoot",props:{initialOpen:{required:!1,tsType:{name:"boolean"},description:"Initial open state"},offset:{required:!1,tsType:{name:"number"},description:`Content offset
@default 5`},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"Callback to handle open state"},open:{required:!1,tsType:{name:"boolean"},description:"Controlled open state"},placement:{required:!1,tsType:{name:"Placement"},description:`Opener placement
@default 'bottom-start'`},root:{required:!1,tsType:{name:"union",raw:"E | React.RefObject<E>",elements:[{name:"HTMLElement"},{name:"ReactRefObject",raw:"React.RefObject<E>",elements:[{name:"HTMLElement"}]}]},description:"Portal target element"},strategy:{required:!1,tsType:{name:"Strategy"},description:"Opener strategy"},zIndex:{required:!1,tsType:{name:"number"},description:"Z-index of tooltip content"},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},delay:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  close: number;
  open: number;
}`,signature:{properties:[{key:"close",value:{name:"number",required:!0}},{key:"open",value:{name:"number",required:!0}}]}},description:"Open/Close delay"}}};const ce="Root__Tooltip__Trigger",S=e.forwardRef(({children:n,className:r,...a},s)=>{const t=w(),{getReferenceProps:i,open:l}=t,c=ae(t.refs.setReference,s);return e.createElement("div",{role:"button","aria-expanded":l,"aria-haspopup":"dialog","aria-controls":l?"tooltip-content":void 0,tabIndex:0,...a,className:k(ce,r),"data-state":l?"open":"closed",ref:c,...i(a)},n)});S.__docgenInfo={description:"",methods:[],displayName:"TooltipTrigger"};const o=Object.assign(F,{Content:q,Trigger:S}),ye={title:"Floating/Tooltip",component:o,parameters:{layout:"centered"}},m={render:()=>e.createElement("div",{className:"flex flex-col gap-8"},e.createElement("div",{className:"flex flex-col gap-4"},e.createElement("h3",{className:"text-lg font-semibold"},"Default"),e.createElement(o,{zIndex:1e3},e.createElement(o.Trigger,null,e.createElement(f,null,"Tooltip")),e.createElement(o.Content,null,e.createElement("div",null,"Tooltip Content")))),e.createElement("div",{className:"flex flex-col gap-4"},e.createElement("h3",{className:"text-lg font-semibold"},"With Custom Root"),e.createElement(o,null,e.createElement(o.Trigger,null,e.createElement(f,null,"Tooltip (Portal to Body)")),e.createElement(o.Content,null,e.createElement("div",null,"Tooltip Content (Portaled)")))))},u={args:{children:e.createElement(o,{zIndex:1e3},e.createElement(o.Trigger,null,e.createElement(f,null,"Tooltip")),e.createElement(o.Content,null,e.createElement("div",null,"Tooltip Content")))}},g={args:{root:document.body,children:e.createElement(o,null,e.createElement(o.Trigger,null,e.createElement(f,null,"Advanced Tooltip")),e.createElement(o.Content,null,e.createElement("div",{className:"flex flex-col gap-2"},e.createElement("div",{className:"font-semibold"},"Account Balance"),e.createElement("div",{className:"text-sm text-accent"},"$1,234.56"),e.createElement("div",{className:"text-xs text-positive"},"+2.3% Today"))))}};var C,N,h;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Default</h3>
        <Tooltip zIndex={1000}>
          <Tooltip.Trigger>
            <Button>Tooltip</Button>
          </Tooltip.Trigger>
          <Tooltip.Content>
            <div>Tooltip Content</div>
          </Tooltip.Content>
        </Tooltip>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">With Custom Root</h3>
        <Tooltip>
          <Tooltip.Trigger>
            <Button>Tooltip (Portal to Body)</Button>
          </Tooltip.Trigger>
          <Tooltip.Content>
            <div>Tooltip Content (Portaled)</div>
          </Tooltip.Content>
        </Tooltip>
      </div>
    </div>
}`,...(h=(N=m.parameters)==null?void 0:N.docs)==null?void 0:h.source}}};var R,_,O;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    children: <Tooltip zIndex={1000}>
        <Tooltip.Trigger>
          <Button>Tooltip</Button>
        </Tooltip.Trigger>
        <Tooltip.Content>
          <div>Tooltip Content</div>
        </Tooltip.Content>
      </Tooltip>
  }
}`,...(O=(_=u.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var A,B,I;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    root: document.body,
    children: <Tooltip>
        <Tooltip.Trigger>
          <Button>Advanced Tooltip</Button>
        </Tooltip.Trigger>
        <Tooltip.Content>
          <div className="flex flex-col gap-2">
            <div className="font-semibold">Account Balance</div>
            <div className="text-sm text-accent">$1,234.56</div>
            <div className="text-xs text-positive">+2.3% Today</div>
          </div>
        </Tooltip.Content>
      </Tooltip>
  }
}`,...(I=(B=g.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};const be=["AllVariants","Playground","Advanced"];export{g as Advanced,m as AllVariants,u as Playground,be as __namedExportsOrder,ye as default};
