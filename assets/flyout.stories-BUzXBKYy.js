import{B as y}from"./button-BfAqSHv_.js";import{r as e}from"./index-DRjF_FHU.js";import{u as q}from"./useMergeRefs-CRTg5TkJ.js";import{c as B}from"./utils-Cf3bcFYp.js";import{u as U,a as G,b as $,s as Y,c as Z,d as J,e as K,f as Q,F as X,g as V}from"./floating-ui.react-SMwz2rol.js";import{o as ee,s as te,h as oe,j as ne,k as re}from"./floating-ui.react-dom-DPwH4_MG.js";import"./index-LOOTFJQl.js";import"./jsx-runtime-DR9Q75dM.js";import"./index-CyyGtGk5.js";import"./index-rX-Bn4lm.js";function le({disabled:o,initialOpen:a=!1,offset:r=5,onOpenChange:s,open:t,placement:c="bottom",root:l,strategy:u="fixed",zIndex:d}={}){const[f,v]=e.useState(a),b=t??f,h=s??v,x=U({middleware:[ee(r),te(),oe(),ne({apply({elements:z,rects:H}){Object.assign(z.floating.style,{width:`${H.reference.width}px`})}})],onOpenChange:h,open:b,placement:c,strategy:u,whileElementsMounted:re}),{context:i}=x,j=G(i,{enabled:!o}),D=$(i,{enabled:!o,handleClose:Y()}),L=Z(i,{enabled:!o}),W=J(i,{enabled:!o,role:"tooltip"}),F=K([j,D,L,W]);return e.useMemo(()=>({...F,...x,open:b,root:l,setOpen:h,zIndex:d}),[b,l,h,d,F,x])}const S=e.createContext(null),k=()=>{const o=e.useContext(S);if(o==null)throw new Error("Flyout components must be wrapped in <Flyout />");return o},ae="Root__Flyout__Content",A=e.forwardRef(({children:o,className:a,...r},s)=>{const t=k(),c=e.useId(),l=q((t==null?void 0:t.refs.setFloating)||null,s);Q(t.context,{id:c});const{floatingStyles:u,getFloatingProps:d,root:f,zIndex:v}=t;return e.createElement(X,{root:f},(t==null?void 0:t.open)&&e.createElement("div",{id:"flyout-content",role:"dialog","aria-modal":"true",style:{left:t.x??0,position:t==null?void 0:t.strategy,top:t.y??0,visibility:t.x==null?"hidden":"visible",zIndex:v??1e3,...u,...r.style},ref:l,className:B(ae,a),...r,"data-state":t.open?"open":"closed",...d(r)},o))});A.__docgenInfo={description:"",methods:[],displayName:"FlyoutContent"};const se={close:100,open:300},I=({children:o,delay:a,...r})=>{const s=le(r);return e.createElement(S.Provider,{value:s},e.createElement(V,{delay:a||se},o))};I.__docgenInfo={description:"",methods:[],displayName:"FlyoutRoot",props:{initialOpen:{required:!1,tsType:{name:"boolean"},description:"Initial open state"},offset:{required:!1,tsType:{name:"number"},description:`Content offset
@default 5`},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"Callback to handle open state"},open:{required:!1,tsType:{name:"boolean"},description:"Controlled open state"},placement:{required:!1,tsType:{name:"Placement"},description:`Opener placement
@default 'bottom-start'`},root:{required:!1,tsType:{name:"union",raw:"E | React.RefObject<E>",elements:[{name:"HTMLElement"},{name:"ReactRefObject",raw:"React.RefObject<E>",elements:[{name:"HTMLElement"}]}]},description:"Portal target element"},strategy:{required:!1,tsType:{name:"Strategy"},description:"Opener strategy"},zIndex:{required:!1,tsType:{name:"number"},description:"Z-index of tooltip content"},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},delay:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  close: number;
  open: number;
}`,signature:{properties:[{key:"close",value:{name:"number",required:!0}},{key:"open",value:{name:"number",required:!0}}]}},description:"Open/Close delay"}}};const ce="Root__Flyout__Trigger",M=e.forwardRef(({children:o,className:a,...r},s)=>{const t=k(),{getReferenceProps:c,open:l}=t,u=q(t.refs.setReference,s);return e.createElement("div",{"aria-expanded":l,"aria-haspopup":"dialog","aria-controls":l?"flyout-content":void 0,tabIndex:0,...r,className:B(ce,a),"data-state":l?"open":"closed",ref:u,...c(r)},o)});M.__docgenInfo={description:"",methods:[],displayName:"FlyoutTrigger"};const n=Object.assign(I,{Content:A,Trigger:M}),he={title:"Floating/Flyout",component:n,parameters:{layout:"centered"}},m={render:()=>e.createElement("div",{className:"flex flex-col gap-8"},e.createElement("div",{className:"flex flex-col gap-4"},e.createElement("h3",{className:"text-lg font-semibold"},"Default"),e.createElement(n,null,e.createElement(n.Trigger,null,e.createElement(y,null,"Toggle")),e.createElement(n.Content,null,e.createElement("div",{className:"p-4 bg-background"},"Flyout Content")))),e.createElement("div",{className:"flex flex-col gap-4"},e.createElement("h3",{className:"text-lg font-semibold"},"With Custom Root"),e.createElement(n,{root:document.body},e.createElement(n.Trigger,null,e.createElement(y,null,"Toggle (Portal to Body)")),e.createElement(n.Content,null,e.createElement("div",{className:"p-4 bg-background"},"Flyout Content (Portaled)")))))},p={args:{children:e.createElement(n,{root:document.body},e.createElement(n.Trigger,null,e.createElement(y,null,"Toggle")),e.createElement(n.Content,null,e.createElement("div",{className:"p-4 bg-background"},"Flyout Content")))}},g={args:{root:document.body,children:e.createElement(n,{root:document.body},e.createElement(n.Trigger,null,e.createElement(y,null,"Menu")),e.createElement(n.Content,null,e.createElement("div",{className:"w-48 rounded-md border bg-[hsl(var(--color-neutral-0))] p-1 shadow-md border-[hsl(var(--color-neutral-5))] hover:border-[hsl(var(--color-neutral-10))] hover:shadow-lg"},e.createElement("div",{className:"flex flex-col gap-0.5"},e.createElement("button",{type:"button",className:"flex w-full items-center rounded-sm px-2 py-1.5 text-sm text-[hsl(var(--color-neutral-50))] outline-none hover:bg-[hsl(var(--color-neutral-1))] hover:text-[hsl(var(--color-neutral-90))] focus:bg-[hsl(var(--color-neutral-1))]"},"New Tab"),e.createElement("button",{type:"button",className:"flex w-full items-center rounded-sm px-2 py-1.5 text-sm text-[hsl(var(--color-neutral-50))] outline-none hover:bg-[hsl(var(--color-neutral-1))] hover:text-[hsl(var(--color-neutral-90))] focus:bg-[hsl(var(--color-neutral-1))]"},"New Window"),e.createElement("button",{type:"button",className:"flex w-full items-center rounded-sm px-2 py-1.5 text-sm text-[hsl(var(--color-neutral-50))] outline-none hover:bg-[hsl(var(--color-neutral-1))] hover:text-[hsl(var(--color-neutral-90))] focus:bg-[hsl(var(--color-neutral-1))]"},"New Private Window"),e.createElement("div",{className:"my-1 h-px bg-[hsl(var(--color-neutral-5))]"}),e.createElement("button",{type:"button",className:"flex w-full items-center rounded-sm px-2 py-1.5 text-sm text-[hsl(var(--color-neutral-50))] outline-none hover:bg-[hsl(var(--color-neutral-1))] hover:text-[hsl(var(--color-neutral-90))] focus:bg-[hsl(var(--color-neutral-1))]"},"Settings")))))}};var E,N,w;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Default</h3>
        <Flyout>
          <Flyout.Trigger>
            <Button>Toggle</Button>
          </Flyout.Trigger>
          <Flyout.Content>
            <div className="p-4 bg-background">Flyout Content</div>
          </Flyout.Content>
        </Flyout>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">With Custom Root</h3>
        <Flyout root={document.body}>
          <Flyout.Trigger>
            <Button>Toggle (Portal to Body)</Button>
          </Flyout.Trigger>
          <Flyout.Content>
            <div className="p-4 bg-background">Flyout Content (Portaled)</div>
          </Flyout.Content>
        </Flyout>
      </div>
    </div>
}`,...(w=(N=m.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var C,T,R;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    children: <Flyout root={document.body}>
        <Flyout.Trigger>
          <Button>Toggle</Button>
        </Flyout.Trigger>
        <Flyout.Content>
          <div className="p-4 bg-background">Flyout Content</div>
        </Flyout.Content>
      </Flyout>
  }
}`,...(R=(T=p.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};var _,O,P;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    root: document.body,
    children: <Flyout root={document.body}>
        <Flyout.Trigger>
          <Button>Menu</Button>
        </Flyout.Trigger>
        <Flyout.Content>
          <div className="w-48 rounded-md border bg-[hsl(var(--color-neutral-0))] p-1 shadow-md border-[hsl(var(--color-neutral-5))] hover:border-[hsl(var(--color-neutral-10))] hover:shadow-lg">
            <div className="flex flex-col gap-0.5">
              <button type="button" className="flex w-full items-center rounded-sm px-2 py-1.5 text-sm text-[hsl(var(--color-neutral-50))] outline-none hover:bg-[hsl(var(--color-neutral-1))] hover:text-[hsl(var(--color-neutral-90))] focus:bg-[hsl(var(--color-neutral-1))]">
                New Tab
              </button>
              <button type="button" className="flex w-full items-center rounded-sm px-2 py-1.5 text-sm text-[hsl(var(--color-neutral-50))] outline-none hover:bg-[hsl(var(--color-neutral-1))] hover:text-[hsl(var(--color-neutral-90))] focus:bg-[hsl(var(--color-neutral-1))]">
                New Window
              </button>
              <button type="button" className="flex w-full items-center rounded-sm px-2 py-1.5 text-sm text-[hsl(var(--color-neutral-50))] outline-none hover:bg-[hsl(var(--color-neutral-1))] hover:text-[hsl(var(--color-neutral-90))] focus:bg-[hsl(var(--color-neutral-1))]">
                New Private Window
              </button>
              <div className="my-1 h-px bg-[hsl(var(--color-neutral-5))]" />
              <button type="button" className="flex w-full items-center rounded-sm px-2 py-1.5 text-sm text-[hsl(var(--color-neutral-50))] outline-none hover:bg-[hsl(var(--color-neutral-1))] hover:text-[hsl(var(--color-neutral-90))] focus:bg-[hsl(var(--color-neutral-1))]">
                Settings
              </button>
            </div>
          </div>
        </Flyout.Content>
      </Flyout>
  }
}`,...(P=(O=g.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};const xe=["AllVariants","Playground","Advanced"];export{g as Advanced,m as AllVariants,p as Playground,xe as __namedExportsOrder,he as default};
