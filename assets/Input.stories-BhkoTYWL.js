import{r as e}from"./index-DRjF_FHU.js";import{I as a}from"./input-BewNWWt0.js";import"./utils-CmPBaH-W.js";import"./index-C9mr3DAw.js";const L={args:{disabled:!1,placeholder:"Enter text..."},argTypes:{disabled:{control:"boolean",description:"Whether the input is disabled"},intent:{control:"select",description:"The intent/purpose of the input which determines its color scheme",options:["default","primary","secondary","tertiary","success","warning","danger","info"]}},component:a,parameters:{layout:"centered"},title:"Components/Input"},n={render:()=>e.createElement("div",{className:"flex flex-col gap-8"},e.createElement("div",{className:"flex flex-col gap-4"},e.createElement("h3",{className:"text-lg font-semibold"},"Brand Colors"),e.createElement("div",{className:"flex flex-col gap-4"},e.createElement("div",{className:"flex gap-4"},e.createElement(a,{intent:"default",placeholder:"Default Input"})),e.createElement("div",{className:"flex gap-4"},e.createElement(a,{intent:"primary",placeholder:"Primary Input"})),e.createElement("div",{className:"flex gap-4"},e.createElement(a,{intent:"secondary",placeholder:"Secondary Input"})),e.createElement("div",{className:"flex gap-4"},e.createElement(a,{intent:"tertiary",placeholder:"Tertiary Input"})))),e.createElement("div",{className:"flex flex-col gap-4"},e.createElement("h3",{className:"text-lg font-semibold"},"Status Colors"),e.createElement("div",{className:"flex flex-col gap-4"},e.createElement("div",{className:"flex gap-4"},e.createElement(a,{intent:"success",placeholder:"Success Input"})),e.createElement("div",{className:"flex gap-4"},e.createElement(a,{intent:"warning",placeholder:"Warning Input"})),e.createElement("div",{className:"flex gap-4"},e.createElement(a,{intent:"danger",placeholder:"Danger Input"})),e.createElement("div",{className:"flex gap-4"},e.createElement(a,{intent:"info",placeholder:"Info Input"})))),e.createElement("div",{className:"flex flex-col gap-4"},e.createElement("h3",{className:"text-lg font-semibold"},"States"),e.createElement("div",{className:"flex gap-4"},e.createElement(a,{disabled:!0,placeholder:"Disabled Input"}),e.createElement(a,{readOnly:!0,value:"Read Only Input"}))))},r={args:{intent:"primary",placeholder:"Enter text..."}},t={args:{intent:"default",placeholder:"Default Input"}},s={args:{intent:"primary",placeholder:"Primary Input"}},l={args:{intent:"secondary",placeholder:"Secondary Input"}},c={args:{intent:"tertiary",placeholder:"Tertiary Input"}},o={args:{intent:"success",placeholder:"Success Input"}},p={args:{intent:"warning",placeholder:"Warning Input"}},i={args:{intent:"danger",placeholder:"Danger Input"}},d={args:{intent:"info",placeholder:"Info Input"}};var m,u,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">
      {/* Brand Colors */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Brand Colors</h3>

        <div className="flex flex-col gap-4">
          {/* Default */}
          <div className="flex gap-4">
            <Input intent="default" placeholder="Default Input" />
          </div>

          {/* Primary */}
          <div className="flex gap-4">
            <Input intent="primary" placeholder="Primary Input" />
          </div>

          {/* Secondary */}
          <div className="flex gap-4">
            <Input intent="secondary" placeholder="Secondary Input" />
          </div>

          {/* Tertiary */}
          <div className="flex gap-4">
            <Input intent="tertiary" placeholder="Tertiary Input" />
          </div>
        </div>
      </div>

      {/* Status Colors */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Status Colors</h3>

        <div className="flex flex-col gap-4">
          {/* Success */}
          <div className="flex gap-4">
            <Input intent="success" placeholder="Success Input" />
          </div>

          {/* Warning */}
          <div className="flex gap-4">
            <Input intent="warning" placeholder="Warning Input" />
          </div>

          {/* Danger */}
          <div className="flex gap-4">
            <Input intent="danger" placeholder="Danger Input" />
          </div>

          {/* Info */}
          <div className="flex gap-4">
            <Input intent="info" placeholder="Info Input" />
          </div>
        </div>
      </div>

      {/* States */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">States</h3>
        <div className="flex gap-4">
          <Input disabled placeholder="Disabled Input" />
          <Input readOnly value="Read Only Input" />
        </div>
      </div>
    </div>
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,I,h;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    intent: 'primary',
    placeholder: 'Enter text...'
  }
}`,...(h=(I=r.parameters)==null?void 0:I.docs)==null?void 0:h.source}}};var x,v,y;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    intent: 'default',
    placeholder: 'Default Input'
  }
}`,...(y=(v=t.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var N,E,S;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    intent: 'primary',
    placeholder: 'Primary Input'
  }
}`,...(S=(E=s.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var D,b,P;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    intent: 'secondary',
    placeholder: 'Secondary Input'
  }
}`,...(P=(b=l.parameters)==null?void 0:b.docs)==null?void 0:P.source}}};var T,W,C;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    intent: 'tertiary',
    placeholder: 'Tertiary Input'
  }
}`,...(C=(W=c.parameters)==null?void 0:W.docs)==null?void 0:C.source}}};var w,O,B;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    intent: 'success',
    placeholder: 'Success Input'
  }
}`,...(B=(O=o.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var A,R,V;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    intent: 'warning',
    placeholder: 'Warning Input'
  }
}`,...(V=(R=p.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var _,j,k;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    intent: 'danger',
    placeholder: 'Danger Input'
  }
}`,...(k=(j=i.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var q,z,F;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    intent: 'info',
    placeholder: 'Info Input'
  }
}`,...(F=(z=d.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};const M=["AllVariants","Playground","Default","Primary","Secondary","Tertiary","Success","Warning","Danger","Info"];export{n as AllVariants,i as Danger,t as Default,d as Info,r as Playground,s as Primary,l as Secondary,o as Success,c as Tertiary,p as Warning,M as __namedExportsOrder,L as default};
