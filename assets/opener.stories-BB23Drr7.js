import{B as g}from"./button-BfAqSHv_.js";import{r as e}from"./index-DRjF_FHU.js";import{u as B}from"./useMergeRefs-CRTg5TkJ.js";import{u as U,h as G,c as H,d as $,e as V,f as Y,F as Z,g as J}from"./floating-ui.react-SMwz2rol.js";import{a as S}from"./utils-Cf3bcFYp.js";import{o as K,s as Q,h as X,j as ee,k as te}from"./floating-ui.react-dom-DPwH4_MG.js";import"./index-LOOTFJQl.js";import"./jsx-runtime-DR9Q75dM.js";import"./index-CyyGtGk5.js";import"./index-rX-Bn4lm.js";function ne({disabled:n,initialOpen:a=!1,offset:o=5,onOpenChange:s,open:t,placement:c="bottom-start",root:l,strategy:u="fixed",zIndex:i}={}){const[f,v]=e.useState(a),h=t??f,b=s??v,x=U({middleware:[K(o),Q(),X(),ee({apply({elements:W,rects:z}){Object.assign(W.floating.style,{width:`${z.reference.width}px`})}})],onOpenChange:b,open:h,placement:c,strategy:u,whileElementsMounted:te}),{context:O}=x,D=G(O,{enabled:!n}),k=H(O,{enabled:!n}),L=$(O,{enabled:!n,role:"tooltip"}),y=V([D,k,L]);return e.useMemo(()=>({...y,...x,open:h,root:l,setOpen:b,zIndex:i}),[h,l,b,i,y,x])}const A=e.createContext(null),I=()=>{const n=e.useContext(A);if(n==null)throw new Error("Opener components must be wrapped in <Opener />");return n},re="Root__Opener__Content",F=e.forwardRef(({children:n,className:a,...o},s)=>{const t=I(),c=e.useId(),l=B(t.refs.setFloating||null,s);Y(t.context,{id:c});const{floatingStyles:u,getFloatingProps:i,root:f,zIndex:v}=t;return e.createElement(Z,{root:f},(t==null?void 0:t.open)&&e.createElement("div",{style:{left:t.x??0,position:t==null?void 0:t.strategy,top:t.y??0,visibility:t.x==null?"hidden":"visible",zIndex:v??1e3,...u,...o.style},className:S(re,a),ref:l,...i(o)},n))});F.__docgenInfo={description:"",methods:[],displayName:"OpenerContent"};const oe={close:100,open:300},M=({children:n,delay:a,...o})=>{const s=ne(o);return e.createElement(J,{delay:a||oe},e.createElement(A.Provider,{value:s},n))};M.__docgenInfo={description:"",methods:[],displayName:"OpenerRoot",props:{initialOpen:{required:!1,tsType:{name:"boolean"},description:"Initial open state"},offset:{required:!1,tsType:{name:"number"},description:`Content offset
@default 5`},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"Callback to handle open state"},open:{required:!1,tsType:{name:"boolean"},description:"Controlled open state"},placement:{required:!1,tsType:{name:"Placement"},description:`Opener placement
@default 'bottom-start'`},root:{required:!1,tsType:{name:"union",raw:"E | React.RefObject<E>",elements:[{name:"HTMLElement"},{name:"ReactRefObject",raw:"React.RefObject<E>",elements:[{name:"HTMLElement"}]}]},description:"Portal target element"},strategy:{required:!1,tsType:{name:"Strategy"},description:"Opener strategy"},zIndex:{required:!1,tsType:{name:"number"},description:"Z-index of tooltip content"},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},delay:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  close: number;
  open: number;
}`,signature:{properties:[{key:"close",value:{name:"number",required:!0}},{key:"open",value:{name:"number",required:!0}}]}},description:"Open/Close delay"}}};const le="Root__Opener__Trigger",j=e.forwardRef(({children:n,className:a,...o},s)=>{const t=I(),{getReferenceProps:c,open:l}=t,u=B(t.refs.setReference,s);return e.createElement("div",{role:"button","aria-expanded":l,"aria-haspopup":"dialog","aria-controls":l?"opener-content":void 0,tabIndex:0,...o,className:S(le,a),"data-state":l?"open":"closed",ref:u,...c(o)},n)});j.__docgenInfo={description:"",methods:[],displayName:"OpenerTrigger"};const r=Object.assign(M,{Content:F,Trigger:j}),ve={title:"Floating/Opener",component:r,parameters:{layout:"centered"}},p={render:()=>e.createElement("div",{className:"flex flex-col gap-8"},e.createElement("div",{className:"flex flex-col gap-4"},e.createElement("h3",{className:"text-lg font-semibold"},"Default"),e.createElement(r,null,e.createElement(r.Trigger,null,e.createElement(g,null,"Open")),e.createElement(r.Content,null,e.createElement("div",{className:"p-4"},"Opener Content")))),e.createElement("div",{className:"flex flex-col gap-4"},e.createElement("h3",{className:"text-lg font-semibold"},"With Custom Root"),e.createElement(r,{root:document.body},e.createElement(r.Trigger,null,e.createElement(g,null,"Open (Portal to Body)")),e.createElement(r.Content,null,e.createElement("div",{className:"p-4"},"Opener Content (Portaled)")))))},m={args:{children:e.createElement(e.Fragment,null,e.createElement(r.Trigger,null,e.createElement(g,null,"Open")),e.createElement(r.Content,null,e.createElement("div",{className:"p-4"},"Opener Content")))}},d={args:{root:document.body,children:e.createElement(r,{root:document.body},e.createElement(r.Trigger,null,e.createElement(g,null,"Menu")),e.createElement(r.Content,null,e.createElement("div",{className:"w-48 rounded-md border bg-[hsl(var(--color-neutral-0))] p-1 shadow-md border-[hsl(var(--color-neutral-5))] hover:border-[hsl(var(--color-neutral-10))] hover:shadow-lg"},e.createElement("div",{className:"flex flex-col gap-0.5"},e.createElement("button",{type:"button",className:"flex w-full items-center rounded-sm px-2 py-1.5 text-sm text-[hsl(var(--color-neutral-50))] outline-none hover:bg-[hsl(var(--color-neutral-1))] hover:text-[hsl(var(--color-neutral-90))] focus:bg-[hsl(var(--color-neutral-1))]"},"New Tab"),e.createElement("button",{type:"button",className:"flex w-full items-center rounded-sm px-2 py-1.5 text-sm text-[hsl(var(--color-neutral-50))] outline-none hover:bg-[hsl(var(--color-neutral-1))] hover:text-[hsl(var(--color-neutral-90))] focus:bg-[hsl(var(--color-neutral-1))]"},"New Window"),e.createElement("button",{type:"button",className:"flex w-full items-center rounded-sm px-2 py-1.5 text-sm text-[hsl(var(--color-neutral-50))] outline-none hover:bg-[hsl(var(--color-neutral-1))] hover:text-[hsl(var(--color-neutral-90))] focus:bg-[hsl(var(--color-neutral-1))]"},"New Private Window"),e.createElement("div",{className:"my-1 h-px bg-[hsl(var(--color-neutral-5))]"}),e.createElement("button",{type:"button",className:"flex w-full items-center rounded-sm px-2 py-1.5 text-sm text-[hsl(var(--color-neutral-50))] outline-none hover:bg-[hsl(var(--color-neutral-1))] hover:text-[hsl(var(--color-neutral-90))] focus:bg-[hsl(var(--color-neutral-1))]"},"Settings")))))}};var E,N,w;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Default</h3>
        <Opener>
          <Opener.Trigger>
            <Button>Open</Button>
          </Opener.Trigger>
          <Opener.Content>
            <div className="p-4">Opener Content</div>
          </Opener.Content>
        </Opener>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">With Custom Root</h3>
        <Opener root={document.body}>
          <Opener.Trigger>
            <Button>Open (Portal to Body)</Button>
          </Opener.Trigger>
          <Opener.Content>
            <div className="p-4">Opener Content (Portaled)</div>
          </Opener.Content>
        </Opener>
      </div>
    </div>
}`,...(w=(N=p.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var C,T,R;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    children: <>
        <Opener.Trigger>
          <Button>Open</Button>
        </Opener.Trigger>
        <Opener.Content>
          <div className="p-4">Opener Content</div>
        </Opener.Content>
      </>
  }
}`,...(R=(T=m.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};var _,P,q;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    root: document.body,
    children: <Opener root={document.body}>
        <Opener.Trigger>
          <Button>Menu</Button>
        </Opener.Trigger>
        <Opener.Content>
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
        </Opener.Content>
      </Opener>
  }
}`,...(q=(P=d.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};const he=["AllVariants","Playground","Advanced"];export{d as Advanced,p as AllVariants,m as Playground,he as __namedExportsOrder,ve as default};
