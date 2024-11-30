import{r as n}from"./index-DRjF_FHU.js";import{B as t}from"./button-CF_nbWJ5.js";import"./utils-CmPBaH-W.js";import"./index-LOOTFJQl.js";import"./jsx-runtime-DR9Q75dM.js";import"./index-C9mr3DAw.js";const K={args:{children:"Button",disabled:!1,size:"default",variant:"solid"},argTypes:{asChild:{control:"boolean",description:"Whether to render as a child component using Radix UI Slot"},disabled:{control:"boolean",description:"Whether the button is disabled"},intent:{control:"select",description:"The intent/purpose of the button which determines its color scheme",options:["default","primary","secondary","tertiary","success","warning","danger","info"]},size:{control:"select",description:"The size of the button",options:["sm","default","lg","icon"]},variant:{control:"select",description:"The visual style variant of the button",options:["solid","outline","ghost","link"]}},component:t,parameters:{layout:"centered"},title:"Components/Button"},e={render:()=>n.createElement("div",{className:"flex flex-col gap-8"},n.createElement("div",{className:"flex flex-col gap-4"},n.createElement("h3",{className:"text-lg font-semibold"},"Brand Colors"),n.createElement("div",{className:"flex flex-col gap-4"},n.createElement("div",{className:"flex gap-4"},n.createElement(t,{intent:"default",variant:"solid"},"Default Solid"),n.createElement(t,{intent:"default",variant:"outline"},"Default Outline"),n.createElement(t,{intent:"default",variant:"ghost"},"Default Ghost"),n.createElement(t,{intent:"default",variant:"link"},"Default Link")),n.createElement("div",{className:"flex gap-4"},n.createElement(t,{intent:"primary",variant:"solid"},"Primary Solid"),n.createElement(t,{intent:"primary",variant:"outline"},"Primary Outline"),n.createElement(t,{intent:"primary",variant:"ghost"},"Primary Ghost"),n.createElement(t,{intent:"primary",variant:"link"},"Primary Link")),n.createElement("div",{className:"flex gap-4"},n.createElement(t,{intent:"secondary",variant:"solid"},"Secondary Solid"),n.createElement(t,{intent:"secondary",variant:"outline"},"Secondary Outline"),n.createElement(t,{intent:"secondary",variant:"ghost"},"Secondary Ghost"),n.createElement(t,{intent:"secondary",variant:"link"},"Secondary Link")),n.createElement("div",{className:"flex gap-4"},n.createElement(t,{intent:"tertiary",variant:"solid"},"Tertiary Solid"),n.createElement(t,{intent:"tertiary",variant:"outline"},"Tertiary Outline"),n.createElement(t,{intent:"tertiary",variant:"ghost"},"Tertiary Ghost"),n.createElement(t,{intent:"tertiary",variant:"link"},"Tertiary Link")))),n.createElement("div",{className:"flex flex-col gap-4"},n.createElement("h3",{className:"text-lg font-semibold"},"Status Colors"),n.createElement("div",{className:"flex flex-col gap-4"},n.createElement("div",{className:"flex gap-4"},n.createElement(t,{intent:"success",variant:"solid"},"Success Solid"),n.createElement(t,{intent:"success",variant:"outline"},"Success Outline"),n.createElement(t,{intent:"success",variant:"ghost"},"Success Ghost"),n.createElement(t,{intent:"success",variant:"link"},"Success Link")),n.createElement("div",{className:"flex gap-4"},n.createElement(t,{intent:"warning",variant:"solid"},"Warning Solid"),n.createElement(t,{intent:"warning",variant:"outline"},"Warning Outline"),n.createElement(t,{intent:"warning",variant:"ghost"},"Warning Ghost"),n.createElement(t,{intent:"warning",variant:"link"},"Warning Link")),n.createElement("div",{className:"flex gap-4"},n.createElement(t,{intent:"danger",variant:"solid"},"Danger Solid"),n.createElement(t,{intent:"danger",variant:"outline"},"Danger Outline"),n.createElement(t,{intent:"danger",variant:"ghost"},"Danger Ghost"),n.createElement(t,{intent:"danger",variant:"link"},"Danger Link")),n.createElement("div",{className:"flex gap-4"},n.createElement(t,{intent:"info",variant:"solid"},"Info Solid"),n.createElement(t,{intent:"info",variant:"outline"},"Info Outline"),n.createElement(t,{intent:"info",variant:"ghost"},"Info Ghost"),n.createElement(t,{intent:"info",variant:"link"},"Info Link")))),n.createElement("div",{className:"flex flex-col gap-4"},n.createElement("h3",{className:"text-lg font-semibold"},"Sizes"),n.createElement("div",{className:"flex items-center gap-4"},n.createElement(t,{size:"sm"},"Small"),n.createElement(t,{size:"default"},"Default"),n.createElement(t,{size:"lg"},"Large"),n.createElement(t,{size:"icon"},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n.createElement("path",{d:"M5 12h14"}),n.createElement("path",{d:"M12 5v14"}))))),n.createElement("div",{className:"flex flex-col gap-4"},n.createElement("h3",{className:"text-lg font-semibold"},"States"),n.createElement("div",{className:"flex gap-4"},n.createElement(t,{disabled:!0},"Disabled"),n.createElement(t,{className:"cursor-wait"},"Loading"))))},a={args:{children:"Button",intent:"primary",size:"default",variant:"solid"}},r={args:{children:"Default Button",intent:"default"}},i={args:{children:"Primary Button",intent:"primary"}},o={args:{children:"Secondary Button",intent:"secondary"}},s={args:{children:"Tertiary Button",intent:"tertiary"}},l={args:{children:"Success Button",intent:"success"}},c={args:{children:"Warning Button",intent:"warning"}},d={args:{children:"Danger Button",intent:"danger"}},u={args:{children:"Info Button",intent:"info"}};var m,g,v;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">
      {/* Brand Colors */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Brand Colors</h3>

        <div className="flex flex-col gap-4">
          {/* Default */}
          <div className="flex gap-4">
            <Button intent="default" variant="solid">
              Default Solid
            </Button>
            <Button intent="default" variant="outline">
              Default Outline
            </Button>
            <Button intent="default" variant="ghost">
              Default Ghost
            </Button>
            <Button intent="default" variant="link">
              Default Link
            </Button>
          </div>

          {/* Primary */}
          <div className="flex gap-4">
            <Button intent="primary" variant="solid">
              Primary Solid
            </Button>
            <Button intent="primary" variant="outline">
              Primary Outline
            </Button>
            <Button intent="primary" variant="ghost">
              Primary Ghost
            </Button>
            <Button intent="primary" variant="link">
              Primary Link
            </Button>
          </div>

          {/* Secondary */}
          <div className="flex gap-4">
            <Button intent="secondary" variant="solid">
              Secondary Solid
            </Button>
            <Button intent="secondary" variant="outline">
              Secondary Outline
            </Button>
            <Button intent="secondary" variant="ghost">
              Secondary Ghost
            </Button>
            <Button intent="secondary" variant="link">
              Secondary Link
            </Button>
          </div>

          {/* Tertiary */}
          <div className="flex gap-4">
            <Button intent="tertiary" variant="solid">
              Tertiary Solid
            </Button>
            <Button intent="tertiary" variant="outline">
              Tertiary Outline
            </Button>
            <Button intent="tertiary" variant="ghost">
              Tertiary Ghost
            </Button>
            <Button intent="tertiary" variant="link">
              Tertiary Link
            </Button>
          </div>
        </div>
      </div>

      {/* Status Colors */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Status Colors</h3>

        <div className="flex flex-col gap-4">
          {/* Success */}
          <div className="flex gap-4">
            <Button intent="success" variant="solid">
              Success Solid
            </Button>
            <Button intent="success" variant="outline">
              Success Outline
            </Button>
            <Button intent="success" variant="ghost">
              Success Ghost
            </Button>
            <Button intent="success" variant="link">
              Success Link
            </Button>
          </div>

          {/* Warning */}
          <div className="flex gap-4">
            <Button intent="warning" variant="solid">
              Warning Solid
            </Button>
            <Button intent="warning" variant="outline">
              Warning Outline
            </Button>
            <Button intent="warning" variant="ghost">
              Warning Ghost
            </Button>
            <Button intent="warning" variant="link">
              Warning Link
            </Button>
          </div>

          {/* Danger */}
          <div className="flex gap-4">
            <Button intent="danger" variant="solid">
              Danger Solid
            </Button>
            <Button intent="danger" variant="outline">
              Danger Outline
            </Button>
            <Button intent="danger" variant="ghost">
              Danger Ghost
            </Button>
            <Button intent="danger" variant="link">
              Danger Link
            </Button>
          </div>

          {/* Info */}
          <div className="flex gap-4">
            <Button intent="info" variant="solid">
              Info Solid
            </Button>
            <Button intent="info" variant="outline">
              Info Outline
            </Button>
            <Button intent="info" variant="ghost">
              Info Ghost
            </Button>
            <Button intent="info" variant="link">
              Info Link
            </Button>
          </div>
        </div>
      </div>

      {/* Sizes */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Sizes</h3>
        <div className="flex items-center gap-4">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
          </Button>
        </div>
      </div>

      {/* States */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">States</h3>
        <div className="flex gap-4">
          <Button disabled>Disabled</Button>
          <Button className="cursor-wait">Loading</Button>
        </div>
      </div>
    </div>
}`,...(v=(g=e.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var f,p,B;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    intent: 'primary',
    size: 'default',
    variant: 'solid'
  }
}`,...(B=(p=a.parameters)==null?void 0:p.docs)==null?void 0:B.source}}};var h,y,x;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: 'Default Button',
    intent: 'default'
  }
}`,...(x=(y=r.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var E,S,N;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    children: 'Primary Button',
    intent: 'primary'
  }
}`,...(N=(S=i.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var k,D,w;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: 'Secondary Button',
    intent: 'secondary'
  }
}`,...(w=(D=o.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var L,b,O;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: 'Tertiary Button',
    intent: 'tertiary'
  }
}`,...(O=(b=s.parameters)==null?void 0:b.docs)==null?void 0:O.source}}};var T,W,z;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: 'Success Button',
    intent: 'success'
  }
}`,...(z=(W=l.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var G,P,I;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    children: 'Warning Button',
    intent: 'warning'
  }
}`,...(I=(P=c.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};var C,M,j;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    children: 'Danger Button',
    intent: 'danger'
  }
}`,...(j=(M=d.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};var A,V,_;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: 'Info Button',
    intent: 'info'
  }
}`,...(_=(V=u.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};const Q=["AllVariants","Playground","Default","Primary","Secondary","Tertiary","Success","Warning","Danger","Info"];export{e as AllVariants,d as Danger,r as Default,u as Info,a as Playground,i as Primary,o as Secondary,l as Success,s as Tertiary,c as Warning,Q as __namedExportsOrder,K as default};
