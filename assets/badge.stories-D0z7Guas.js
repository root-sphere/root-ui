import{r as e}from"./index-DRjF_FHU.js";import{B as t}from"./badge-CTfW-bgQ.js";import"./utils-CmPBaH-W.js";import"./index-LOOTFJQl.js";import"./jsx-runtime-DR9Q75dM.js";import"./index-C9mr3DAw.js";const M={args:{children:"Badge",variant:"solid"},argTypes:{asChild:{control:"boolean",description:"Whether to render as a child component using Radix UI Slot"},intent:{control:"select",description:"The intent/purpose of the badge which determines its color scheme",options:["accent","primary","secondary","tertiary","informative","positive","cautionary","destructive","negative"]},variant:{control:"select",description:"The visual style variant of the badge",options:["solid","outline","ghost"]}},component:t,parameters:{layout:"centered"},title:"Components/Badge"},n={render:()=>e.createElement("div",{className:"flex flex-col gap-8"},e.createElement("div",{className:"flex flex-col gap-4"},e.createElement("h3",{className:"text-lg font-semibold"},"Brand Colors"),e.createElement("div",{className:"flex flex-col gap-4"},e.createElement("div",{className:"flex gap-4"},e.createElement(t,{intent:"accent",variant:"outline"},"Accent Outline"),e.createElement(t,{intent:"accent",variant:"solid"},"Accent Solid"),e.createElement(t,{intent:"accent",variant:"ghost"},"Accent Ghost")),e.createElement("div",{className:"flex gap-4"},e.createElement(t,{intent:"primary",variant:"outline"},"Primary Outline"),e.createElement(t,{intent:"primary",variant:"solid"},"Primary Solid"),e.createElement(t,{intent:"primary",variant:"ghost"},"Primary Ghost")),e.createElement("div",{className:"flex gap-4"},e.createElement(t,{intent:"secondary",variant:"outline"},"Secondary Outline"),e.createElement(t,{intent:"secondary",variant:"solid"},"Secondary Solid"),e.createElement(t,{intent:"secondary",variant:"ghost"},"Secondary Ghost")),e.createElement("div",{className:"flex gap-4"},e.createElement(t,{intent:"tertiary",variant:"outline"},"Tertiary Outline"),e.createElement(t,{intent:"tertiary",variant:"solid"},"Tertiary Solid"),e.createElement(t,{intent:"tertiary",variant:"ghost"},"Tertiary Ghost")))),e.createElement("div",{className:"flex flex-col gap-4"},e.createElement("h3",{className:"text-lg font-semibold"},"Status Colors"),e.createElement("div",{className:"flex flex-col gap-4"},e.createElement("div",{className:"flex gap-4"},e.createElement(t,{intent:"informative",variant:"outline"},"Informative Outline"),e.createElement(t,{intent:"informative",variant:"solid"},"Informative Solid"),e.createElement(t,{intent:"informative",variant:"ghost"},"Informative Ghost")),e.createElement("div",{className:"flex gap-4"},e.createElement(t,{intent:"positive",variant:"outline"},"Positive Outline"),e.createElement(t,{intent:"positive",variant:"solid"},"Positive Solid"),e.createElement(t,{intent:"positive",variant:"ghost"},"Positive Ghost")),e.createElement("div",{className:"flex gap-4"},e.createElement(t,{intent:"cautionary",variant:"outline"},"Cautionary Outline"),e.createElement(t,{intent:"cautionary",variant:"solid"},"Cautionary Solid"),e.createElement(t,{intent:"cautionary",variant:"ghost"},"Cautionary Ghost")),e.createElement("div",{className:"flex gap-4"},e.createElement(t,{intent:"destructive",variant:"outline"},"Destructive Outline"),e.createElement(t,{intent:"destructive",variant:"solid"},"Destructive Solid"),e.createElement(t,{intent:"destructive",variant:"ghost"},"Destructive Ghost")),e.createElement("div",{className:"flex gap-4"},e.createElement(t,{intent:"negative",variant:"outline"},"Negative Outline"),e.createElement(t,{intent:"negative",variant:"solid"},"Negative Solid"),e.createElement(t,{intent:"negative",variant:"ghost"},"Negative Ghost")))))},a={args:{children:"Badge",intent:"primary",variant:"solid"}},i={args:{children:"Accent Badge",intent:"accent"}},r={args:{children:"Primary Badge",intent:"primary"}},s={args:{children:"Secondary Badge",intent:"secondary"}},o={args:{children:"Tertiary Badge",intent:"tertiary"}},c={args:{children:"Positive Badge",intent:"positive"}},l={args:{children:"Cautionary Badge",intent:"cautionary"}},d={args:{children:"Destructive Badge",intent:"destructive"}},m={args:{children:"Informative Badge",intent:"informative"}};var v,g,u;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">
      {/* Brand Colors */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Brand Colors</h3>

        <div className="flex flex-col gap-4">
          {/* Accent */}
          <div className="flex gap-4">
            <Badge intent="accent" variant="outline">
              Accent Outline
            </Badge>
            <Badge intent="accent" variant="solid">
              Accent Solid
            </Badge>
            <Badge intent="accent" variant="ghost">
              Accent Ghost
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
          </div>
        </div>
      </div>
    </div>
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var p,y,B;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'Badge',
    intent: 'primary',
    variant: 'solid'
  }
}`,...(B=(y=a.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var h,f,x;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: 'Accent Badge',
    intent: 'accent'
  }
}`,...(x=(f=i.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var E,S,N;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    children: 'Primary Badge',
    intent: 'primary'
  }
}`,...(N=(S=r.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var P,C,O;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    children: 'Secondary Badge',
    intent: 'secondary'
  }
}`,...(O=(C=s.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var G,T,A;o.parameters={...o.parameters,docs:{...(G=o.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    children: 'Tertiary Badge',
    intent: 'tertiary'
  }
}`,...(A=(T=o.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var I,D,b;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    children: 'Positive Badge',
    intent: 'positive'
  }
}`,...(b=(D=c.parameters)==null?void 0:D.docs)==null?void 0:b.source}}};var V,_,w;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    children: 'Cautionary Badge',
    intent: 'cautionary'
  }
}`,...(w=(_=l.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var R,U,W;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    children: 'Destructive Badge',
    intent: 'destructive'
  }
}`,...(W=(U=d.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var j,k,q;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: 'Informative Badge',
    intent: 'informative'
  }
}`,...(q=(k=m.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};const Q=["AllVariants","Playground","Accent","Primary","Secondary","Tertiary","Positive","Cautionary","Destructive","Informative"];export{i as Accent,n as AllVariants,l as Cautionary,d as Destructive,m as Informative,a as Playground,c as Positive,r as Primary,s as Secondary,o as Tertiary,Q as __namedExportsOrder,M as default};
