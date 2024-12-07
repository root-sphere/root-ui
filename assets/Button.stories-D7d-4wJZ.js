import{r as t}from"./index-DRjF_FHU.js";import{B as e}from"./button-C1H6A9q8.js";import"./utils-CmPBaH-W.js";import"./index-LOOTFJQl.js";import"./jsx-runtime-DR9Q75dM.js";import"./index-C9mr3DAw.js";const q={args:{children:"Button",disabled:!1,size:"default",variant:"solid"},argTypes:{asChild:{control:"boolean",description:"Whether to render as a child component using Radix UI Slot"},disabled:{control:"boolean",description:"Whether the button is disabled"},intent:{control:"select",description:"The intent/purpose of the button which determines its color scheme",options:["default","primary","secondary","tertiary","informative","positive","cautionary","destructive","negative"]},size:{control:"select",description:"The size of the button",options:["sm","default","lg","icon"]},variant:{control:"select",description:"The visual style variant of the button",options:["solid","outline","ghost","link"]}},component:e,parameters:{layout:"centered"},title:"Components/Button"},n={render:()=>t.createElement("div",{className:"flex flex-col gap-8"},t.createElement("div",{className:"flex flex-col gap-4"},t.createElement("h3",{className:"text-lg font-semibold"},"Brand Colors"),t.createElement("div",{className:"flex flex-col gap-4"},t.createElement("div",{className:"flex gap-4"},t.createElement(e,{intent:"default",variant:"outline"},"Default Outline"),t.createElement(e,{intent:"default",variant:"solid"},"Default Solid"),t.createElement(e,{intent:"default",variant:"ghost"},"Accent Ghost"),t.createElement(e,{intent:"default",variant:"link"},"Accent Link")),t.createElement("div",{className:"flex gap-4"},t.createElement(e,{intent:"primary",variant:"outline"},"Primary Outline"),t.createElement(e,{intent:"primary",variant:"solid"},"Primary Solid"),t.createElement(e,{intent:"primary",variant:"ghost"},"Primary Ghost"),t.createElement(e,{intent:"primary",variant:"link"},"Primary Link")),t.createElement("div",{className:"flex gap-4"},t.createElement(e,{intent:"secondary",variant:"outline"},"Secondary Outline"),t.createElement(e,{intent:"secondary",variant:"solid"},"Secondary Solid"),t.createElement(e,{intent:"secondary",variant:"ghost"},"Secondary Ghost"),t.createElement(e,{intent:"secondary",variant:"link"},"Secondary Link")),t.createElement("div",{className:"flex gap-4"},t.createElement(e,{intent:"tertiary",variant:"outline"},"Tertiary Outline"),t.createElement(e,{intent:"tertiary",variant:"solid"},"Tertiary Solid"),t.createElement(e,{intent:"tertiary",variant:"ghost"},"Tertiary Ghost"),t.createElement(e,{intent:"tertiary",variant:"link"},"Tertiary Link")))),t.createElement("div",{className:"flex flex-col gap-4"},t.createElement("h3",{className:"text-lg font-semibold"},"Status Colors"),t.createElement("div",{className:"flex flex-col gap-4"},t.createElement("div",{className:"flex gap-4"},t.createElement(e,{intent:"informative",variant:"outline"},"Informative Outline"),t.createElement(e,{intent:"informative",variant:"solid"},"Informative Solid"),t.createElement(e,{intent:"informative",variant:"ghost"},"Informative Ghost"),t.createElement(e,{intent:"informative",variant:"link"},"Informative Link")),t.createElement("div",{className:"flex gap-4"},t.createElement(e,{intent:"positive",variant:"outline"},"Positive Outline"),t.createElement(e,{intent:"positive",variant:"solid"},"Positive Solid"),t.createElement(e,{intent:"positive",variant:"ghost"},"Positive Ghost"),t.createElement(e,{intent:"positive",variant:"link"},"Positive Link")),t.createElement("div",{className:"flex gap-4"},t.createElement(e,{intent:"cautionary",variant:"outline"},"Cautionary Outline"),t.createElement(e,{intent:"cautionary",variant:"solid"},"Cautionary Solid"),t.createElement(e,{intent:"cautionary",variant:"ghost"},"Cautionary Ghost"),t.createElement(e,{intent:"cautionary",variant:"link"},"Cautionary Link")),t.createElement("div",{className:"flex gap-4"},t.createElement(e,{intent:"destructive",variant:"outline"},"Destructive Outline"),t.createElement(e,{intent:"destructive",variant:"solid"},"Destructive Solid"),t.createElement(e,{intent:"destructive",variant:"ghost"},"Destructive Ghost"),t.createElement(e,{intent:"destructive",variant:"link"},"Destructive Link")),t.createElement("div",{className:"flex gap-4"},t.createElement(e,{intent:"negative",variant:"outline"},"Negative Outline"),t.createElement(e,{intent:"negative",variant:"solid"},"Negative Solid"),t.createElement(e,{intent:"negative",variant:"ghost"},"Negative Ghost"),t.createElement(e,{intent:"negative",variant:"link"},"Negative Link")))),t.createElement("div",{className:"flex flex-col gap-4"},t.createElement("h3",{className:"text-lg font-semibold"},"Sizes"),t.createElement("div",{className:"flex items-center gap-4"},t.createElement(e,{size:"sm"},"Small"),t.createElement(e,{size:"default"},"Default"),t.createElement(e,{size:"lg"},"Large"),t.createElement(e,{size:"icon"},t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},t.createElement("path",{d:"M5 12h14"}),t.createElement("path",{d:"M12 5v14"}))))),t.createElement("div",{className:"flex flex-col gap-4"},t.createElement("h3",{className:"text-lg font-semibold"},"States"),t.createElement("div",{className:"flex gap-4"},t.createElement(e,{disabled:!0},"Disabled"),t.createElement(e,{className:"cursor-wait"},"Loading"))))},a={args:{children:"Button",intent:"primary",size:"default",variant:"solid"}},i={args:{children:"Primary Button",intent:"primary"}},r={args:{children:"Secondary Button",intent:"secondary"}},o={args:{children:"Tertiary Button",intent:"tertiary"}},s={args:{children:"Positive Button",intent:"positive"}},l={args:{children:"Cautionary Button",intent:"cautionary"}},c={args:{children:"Destructive Button",intent:"destructive"}},u={args:{children:"Informative Button",intent:"informative"}};var d,m,v;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">
      {/* Brand Colors */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Brand Colors</h3>

        <div className="flex flex-col gap-4">
          {/* Default */}
          <div className="flex gap-4">
            <Button intent="default" variant="outline">
              Default Outline
            </Button>
            <Button intent="default" variant="solid">
              Default Solid
            </Button>
            <Button intent="default" variant="ghost">
              Accent Ghost
            </Button>
            <Button intent="default" variant="link">
              Accent Link
            </Button>
          </div>

          {/* Primary */}
          <div className="flex gap-4">
            <Button intent="primary" variant="outline">
              Primary Outline
            </Button>
            <Button intent="primary" variant="solid">
              Primary Solid
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
            <Button intent="secondary" variant="outline">
              Secondary Outline
            </Button>
            <Button intent="secondary" variant="solid">
              Secondary Solid
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
            <Button intent="tertiary" variant="outline">
              Tertiary Outline
            </Button>
            <Button intent="tertiary" variant="solid">
              Tertiary Solid
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
          {/* Informative */}
          <div className="flex gap-4">
            <Button intent="informative" variant="outline">
              Informative Outline
            </Button>
            <Button intent="informative" variant="solid">
              Informative Solid
            </Button>
            <Button intent="informative" variant="ghost">
              Informative Ghost
            </Button>
            <Button intent="informative" variant="link">
              Informative Link
            </Button>
          </div>

          {/* Positive */}
          <div className="flex gap-4">
            <Button intent="positive" variant="outline">
              Positive Outline
            </Button>
            <Button intent="positive" variant="solid">
              Positive Solid
            </Button>
            <Button intent="positive" variant="ghost">
              Positive Ghost
            </Button>
            <Button intent="positive" variant="link">
              Positive Link
            </Button>
          </div>

          {/* Cautionary */}
          <div className="flex gap-4">
            <Button intent="cautionary" variant="outline">
              Cautionary Outline
            </Button>
            <Button intent="cautionary" variant="solid">
              Cautionary Solid
            </Button>
            <Button intent="cautionary" variant="ghost">
              Cautionary Ghost
            </Button>
            <Button intent="cautionary" variant="link">
              Cautionary Link
            </Button>
          </div>

          {/* Destructive */}
          <div className="flex gap-4">
            <Button intent="destructive" variant="outline">
              Destructive Outline
            </Button>
            <Button intent="destructive" variant="solid">
              Destructive Solid
            </Button>
            <Button intent="destructive" variant="ghost">
              Destructive Ghost
            </Button>
            <Button intent="destructive" variant="link">
              Destructive Link
            </Button>
          </div>

          {/* Negative */}
          <div className="flex gap-4">
            <Button intent="negative" variant="outline">
              Negative Outline
            </Button>
            <Button intent="negative" variant="solid">
              Negative Solid
            </Button>
            <Button intent="negative" variant="ghost">
              Negative Ghost
            </Button>
            <Button intent="negative" variant="link">
              Negative Link
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
}`,...(v=(m=n.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var p,g,f;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    intent: 'primary',
    size: 'default',
    variant: 'solid'
  }
}`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var B,y,h;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: 'Primary Button',
    intent: 'primary'
  }
}`,...(h=(y=i.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var E,x,N;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    children: 'Secondary Button',
    intent: 'secondary'
  }
}`,...(N=(x=r.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var S,k,P;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: 'Tertiary Button',
    intent: 'tertiary'
  }
}`,...(P=(k=o.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var L,C,D;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: 'Positive Button',
    intent: 'positive'
  }
}`,...(D=(C=s.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var b,O,G;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: 'Cautionary Button',
    intent: 'cautionary'
  }
}`,...(G=(O=l.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var T,z,I;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: 'Destructive Button',
    intent: 'destructive'
  }
}`,...(I=(z=c.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var w,A,M;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: 'Informative Button',
    intent: 'informative'
  }
}`,...(M=(A=u.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};const F=["AllVariants","Playground","Primary","Secondary","Tertiary","Positive","Cautionary","Destructive","Informative"];export{n as AllVariants,l as Cautionary,c as Destructive,u as Informative,a as Playground,s as Positive,i as Primary,r as Secondary,o as Tertiary,F as __namedExportsOrder,q as default};
