import{r as e}from"./index-DRjF_FHU.js";import{B as n}from"./badge-CRqnpP23.js";import"./utils-CmPBaH-W.js";import"./index-LOOTFJQl.js";import"./jsx-runtime-DR9Q75dM.js";import"./index-C9mr3DAw.js";const k={title:"Components/Badge",component:n,parameters:{layout:"centered"},args:{children:"Badge",variant:"solid"},argTypes:{asChild:{control:"boolean",description:"Whether to render as a child component using Radix UI Slot"},intent:{control:"select",description:"The intent/purpose of the badge which determines its color scheme",options:["default","primary","secondary","tertiary","informative","positive","cautionary","destructive","negative"]},size:{control:"select",description:"The size of the badge",options:["sm","default","lg","icon"]},variant:{control:"select",description:"The visual style variant of the badge",options:["solid","outline","ghost","link"]}}},t={render:()=>e.createElement("div",{className:"flex flex-col gap-8"},e.createElement("div",{className:"flex flex-col gap-4"},e.createElement("h3",{className:"text-lg font-semibold"},"Brand Colors"),e.createElement("div",{className:"flex flex-col gap-4"},e.createElement("div",{className:"flex gap-4"},e.createElement(n,{intent:"default",variant:"outline"},"Default Outline"),e.createElement(n,{intent:"default",variant:"solid"},"Default Solid"),e.createElement(n,{intent:"default",variant:"ghost"},"Default Ghost"),e.createElement(n,{intent:"default",variant:"link"},"Default Link")),e.createElement("div",{className:"flex gap-4"},e.createElement(n,{intent:"primary",variant:"outline"},"Primary Outline"),e.createElement(n,{intent:"primary",variant:"solid"},"Primary Solid"),e.createElement(n,{intent:"primary",variant:"ghost"},"Primary Ghost"),e.createElement(n,{intent:"primary",variant:"link"},"Primary Link")),e.createElement("div",{className:"flex gap-4"},e.createElement(n,{intent:"secondary",variant:"outline"},"Secondary Outline"),e.createElement(n,{intent:"secondary",variant:"solid"},"Secondary Solid"),e.createElement(n,{intent:"secondary",variant:"ghost"},"Secondary Ghost"),e.createElement(n,{intent:"secondary",variant:"link"},"Secondary Link")),e.createElement("div",{className:"flex gap-4"},e.createElement(n,{intent:"tertiary",variant:"outline"},"Tertiary Outline"),e.createElement(n,{intent:"tertiary",variant:"solid"},"Tertiary Solid"),e.createElement(n,{intent:"tertiary",variant:"ghost"},"Tertiary Ghost"),e.createElement(n,{intent:"tertiary",variant:"link"},"Tertiary Link")))),e.createElement("div",{className:"flex flex-col gap-4"},e.createElement("h3",{className:"text-lg font-semibold"},"Status Colors"),e.createElement("div",{className:"flex flex-col gap-4"},e.createElement("div",{className:"flex gap-4"},e.createElement(n,{intent:"informative",variant:"outline"},"Informative Outline"),e.createElement(n,{intent:"informative",variant:"solid"},"Informative Solid"),e.createElement(n,{intent:"informative",variant:"ghost"},"Informative Ghost"),e.createElement(n,{intent:"informative",variant:"link"},"Informative Link")),e.createElement("div",{className:"flex gap-4"},e.createElement(n,{intent:"positive",variant:"outline"},"Positive Outline"),e.createElement(n,{intent:"positive",variant:"solid"},"Positive Solid"),e.createElement(n,{intent:"positive",variant:"ghost"},"Positive Ghost"),e.createElement(n,{intent:"positive",variant:"link"},"Positive Link")),e.createElement("div",{className:"flex gap-4"},e.createElement(n,{intent:"cautionary",variant:"outline"},"Cautionary Outline"),e.createElement(n,{intent:"cautionary",variant:"solid"},"Cautionary Solid"),e.createElement(n,{intent:"cautionary",variant:"ghost"},"Cautionary Ghost"),e.createElement(n,{intent:"cautionary",variant:"link"},"Cautionary Link")),e.createElement("div",{className:"flex gap-4"},e.createElement(n,{intent:"destructive",variant:"outline"},"Destructive Outline"),e.createElement(n,{intent:"destructive",variant:"solid"},"Destructive Solid"),e.createElement(n,{intent:"destructive",variant:"ghost"},"Destructive Ghost"),e.createElement(n,{intent:"destructive",variant:"link"},"Destructive Link")),e.createElement("div",{className:"flex gap-4"},e.createElement(n,{intent:"negative",variant:"outline"},"Negative Outline"),e.createElement(n,{intent:"negative",variant:"solid"},"Negative Solid"),e.createElement(n,{intent:"negative",variant:"ghost"},"Negative Ghost"),e.createElement(n,{intent:"negative",variant:"link"},"Negative Link")))),e.createElement("div",{className:"flex flex-col gap-4"},e.createElement("h3",{className:"text-lg font-semibold"},"Sizes"),e.createElement("div",{className:"flex items-center gap-4"},e.createElement(n,{size:"sm",variant:"solid"},"Small"),e.createElement(n,{size:"default",variant:"solid"},"Default"),e.createElement(n,{size:"lg",variant:"solid"},"Large"),e.createElement(n,{size:"icon",variant:"solid"},e.createElement("span",null,"🔥")))))},a={args:{children:"Badge",intent:"primary",variant:"solid"}},i={render:()=>e.createElement("div",{className:"flex items-center gap-4"},e.createElement(n,{size:"sm"},"Small"),e.createElement(n,{size:"default"},"Default"),e.createElement(n,{size:"lg"},"Large"),e.createElement(n,{size:"icon"},e.createElement("span",null,"🔥")))},r={render:()=>e.createElement("div",{className:"flex gap-4"},e.createElement(n,null,e.createElement("span",null,"🔥"),"With Icon"),e.createElement(n,{variant:"solid"},"With Icon",e.createElement("span",null,"🔥")))};var l,s,o;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">
      {/* Brand Colors */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Brand Colors</h3>

        <div className="flex flex-col gap-4">
          {/* Default */}
          <div className="flex gap-4">
            <Badge intent="default" variant="outline">
              Default Outline
            </Badge>
            <Badge intent="default" variant="solid">
              Default Solid
            </Badge>
            <Badge intent="default" variant="ghost">
              Default Ghost
            </Badge>
            <Badge intent="default" variant="link">
              Default Link
            </Badge>
          </div>

          {/* Primary */}
          <div className="flex gap-4">
            <Badge intent="primary" variant="outline">
              Primary Outline
            </Badge>
            <Badge intent="primary" variant="solid">
              Primary Solid
            </Badge>
            <Badge intent="primary" variant="ghost">
              Primary Ghost
            </Badge>
            <Badge intent="primary" variant="link">
              Primary Link
            </Badge>
          </div>

          {/* Secondary */}
          <div className="flex gap-4">
            <Badge intent="secondary" variant="outline">
              Secondary Outline
            </Badge>
            <Badge intent="secondary" variant="solid">
              Secondary Solid
            </Badge>
            <Badge intent="secondary" variant="ghost">
              Secondary Ghost
            </Badge>
            <Badge intent="secondary" variant="link">
              Secondary Link
            </Badge>
          </div>

          {/* Tertiary */}
          <div className="flex gap-4">
            <Badge intent="tertiary" variant="outline">
              Tertiary Outline
            </Badge>
            <Badge intent="tertiary" variant="solid">
              Tertiary Solid
            </Badge>
            <Badge intent="tertiary" variant="ghost">
              Tertiary Ghost
            </Badge>
            <Badge intent="tertiary" variant="link">
              Tertiary Link
            </Badge>
          </div>
        </div>
      </div>

      {/* Status Colors */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Status Colors</h3>

        <div className="flex flex-col gap-4">
          {/* Informative */}
          <div className="flex gap-4">
            <Badge intent="informative" variant="outline">
              Informative Outline
            </Badge>
            <Badge intent="informative" variant="solid">
              Informative Solid
            </Badge>
            <Badge intent="informative" variant="ghost">
              Informative Ghost
            </Badge>
            <Badge intent="informative" variant="link">
              Informative Link
            </Badge>
          </div>

          {/* Positive */}
          <div className="flex gap-4">
            <Badge intent="positive" variant="outline">
              Positive Outline
            </Badge>
            <Badge intent="positive" variant="solid">
              Positive Solid
            </Badge>
            <Badge intent="positive" variant="ghost">
              Positive Ghost
            </Badge>
            <Badge intent="positive" variant="link">
              Positive Link
            </Badge>
          </div>

          {/* Cautionary */}
          <div className="flex gap-4">
            <Badge intent="cautionary" variant="outline">
              Cautionary Outline
            </Badge>
            <Badge intent="cautionary" variant="solid">
              Cautionary Solid
            </Badge>
            <Badge intent="cautionary" variant="ghost">
              Cautionary Ghost
            </Badge>
            <Badge intent="cautionary" variant="link">
              Cautionary Link
            </Badge>
          </div>

          {/* Destructive */}
          <div className="flex gap-4">
            <Badge intent="destructive" variant="outline">
              Destructive Outline
            </Badge>
            <Badge intent="destructive" variant="solid">
              Destructive Solid
            </Badge>
            <Badge intent="destructive" variant="ghost">
              Destructive Ghost
            </Badge>
            <Badge intent="destructive" variant="link">
              Destructive Link
            </Badge>
          </div>

          {/* Negative */}
          <div className="flex gap-4">
            <Badge intent="negative" variant="outline">
              Negative Outline
            </Badge>
            <Badge intent="negative" variant="solid">
              Negative Solid
            </Badge>
            <Badge intent="negative" variant="ghost">
              Negative Ghost
            </Badge>
            <Badge intent="negative" variant="link">
              Negative Link
            </Badge>
          </div>
        </div>
      </div>

      {/* Sizes */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Sizes</h3>
        <div className="flex items-center gap-4">
          <Badge size="sm" variant="solid">
            Small
          </Badge>
          <Badge size="default" variant="solid">
            Default
          </Badge>
          <Badge size="lg" variant="solid">
            Large
          </Badge>
          <Badge size="icon" variant="solid">
            <span>🔥</span>
          </Badge>
        </div>
      </div>
    </div>
}`,...(o=(s=t.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var d,c,v;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: 'Badge',
    intent: 'primary',
    variant: 'solid'
  }
}`,...(v=(c=a.parameters)==null?void 0:c.docs)==null?void 0:v.source}}};var m,g,u;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Badge size="sm">Small</Badge>
      <Badge size="default">Default</Badge>
      <Badge size="lg">Large</Badge>
      <Badge size="icon">
        <span>🔥</span>
      </Badge>
    </div>
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var p,f,B;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">
      <Badge>
        <span>🔥</span>
        With Icon
      </Badge>
      <Badge variant="solid">
        With Icon
        <span>🔥</span>
      </Badge>
    </div>
}`,...(B=(f=r.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};const z=["AllVariants","Playground","Sizes","WithIcon"];export{t as AllVariants,a as Playground,i as Sizes,r as WithIcon,z as __namedExportsOrder,k as default};
