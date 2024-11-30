import{r as e}from"./index-DRjF_FHU.js";import{T as a}from"./textarea-D4Hj2jeX.js";import"./utils-CmPBaH-W.js";import"./index-C9mr3DAw.js";const L={args:{disabled:!1,placeholder:"Enter text..."},argTypes:{disabled:{control:"boolean",description:"Whether the textarea is disabled"},intent:{control:"select",description:"The intent/purpose of the textarea which determines its color scheme",options:["default","primary","secondary","tertiary","success","warning","danger","info"]}},component:a,parameters:{layout:"centered"},title:"Components/Textarea"},r={render:()=>e.createElement("div",{className:"flex flex-col gap-8"},e.createElement("div",{className:"flex flex-col gap-4"},e.createElement("h3",{className:"text-lg font-semibold"},"Brand Colors"),e.createElement("div",{className:"flex flex-col gap-4"},e.createElement("div",{className:"flex gap-4"},e.createElement(a,{intent:"default",placeholder:"Default Textarea"})),e.createElement("div",{className:"flex gap-4"},e.createElement(a,{intent:"primary",placeholder:"Primary Textarea"})),e.createElement("div",{className:"flex gap-4"},e.createElement(a,{intent:"secondary",placeholder:"Secondary Textarea"})),e.createElement("div",{className:"flex gap-4"},e.createElement(a,{intent:"tertiary",placeholder:"Tertiary Textarea"})))),e.createElement("div",{className:"flex flex-col gap-4"},e.createElement("h3",{className:"text-lg font-semibold"},"Status Colors"),e.createElement("div",{className:"flex flex-col gap-4"},e.createElement("div",{className:"flex gap-4"},e.createElement(a,{intent:"success",placeholder:"Success Textarea"})),e.createElement("div",{className:"flex gap-4"},e.createElement(a,{intent:"warning",placeholder:"Warning Textarea"})),e.createElement("div",{className:"flex gap-4"},e.createElement(a,{intent:"danger",placeholder:"Danger Textarea"})),e.createElement("div",{className:"flex gap-4"},e.createElement(a,{intent:"info",placeholder:"Info Textarea"})))),e.createElement("div",{className:"flex flex-col gap-4"},e.createElement("h3",{className:"text-lg font-semibold"},"States"),e.createElement("div",{className:"flex gap-4"},e.createElement(a,{disabled:!0,placeholder:"Disabled Textarea"}),e.createElement(a,{readOnly:!0,value:"Read Only Textarea"}))))},t={args:{intent:"primary",placeholder:"Enter text..."}},n={args:{intent:"default",placeholder:"Default Textarea"}},s={args:{intent:"primary",placeholder:"Primary Textarea"}},l={args:{intent:"secondary",placeholder:"Secondary Textarea"}},c={args:{intent:"tertiary",placeholder:"Tertiary Textarea"}},o={args:{intent:"success",placeholder:"Success Textarea"}},i={args:{intent:"warning",placeholder:"Warning Textarea"}},d={args:{intent:"danger",placeholder:"Danger Textarea"}},m={args:{intent:"info",placeholder:"Info Textarea"}};var p,x,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">
      {/* Brand Colors */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Brand Colors</h3>

        <div className="flex flex-col gap-4">
          {/* Default */}
          <div className="flex gap-4">
            <Textarea intent="default" placeholder="Default Textarea" />
          </div>

          {/* Primary */}
          <div className="flex gap-4">
            <Textarea intent="primary" placeholder="Primary Textarea" />
          </div>

          {/* Secondary */}
          <div className="flex gap-4">
            <Textarea intent="secondary" placeholder="Secondary Textarea" />
          </div>

          {/* Tertiary */}
          <div className="flex gap-4">
            <Textarea intent="tertiary" placeholder="Tertiary Textarea" />
          </div>
        </div>
      </div>

      {/* Status Colors */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Status Colors</h3>

        <div className="flex flex-col gap-4">
          {/* Success */}
          <div className="flex gap-4">
            <Textarea intent="success" placeholder="Success Textarea" />
          </div>

          {/* Warning */}
          <div className="flex gap-4">
            <Textarea intent="warning" placeholder="Warning Textarea" />
          </div>

          {/* Danger */}
          <div className="flex gap-4">
            <Textarea intent="danger" placeholder="Danger Textarea" />
          </div>

          {/* Info */}
          <div className="flex gap-4">
            <Textarea intent="info" placeholder="Info Textarea" />
          </div>
        </div>
      </div>

      {/* States */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">States</h3>
        <div className="flex gap-4">
          <Textarea disabled placeholder="Disabled Textarea" />
          <Textarea readOnly value="Read Only Textarea" />
        </div>
      </div>
    </div>
}`,...(g=(x=r.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var f,u,T;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    intent: 'primary',
    placeholder: 'Enter text...'
  }
}`,...(T=(u=t.parameters)==null?void 0:u.docs)==null?void 0:T.source}}};var h,v,y;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    intent: 'default',
    placeholder: 'Default Textarea'
  }
}`,...(y=(v=n.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var N,E,S;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    intent: 'primary',
    placeholder: 'Primary Textarea'
  }
}`,...(S=(E=s.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var D,b,P;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    intent: 'secondary',
    placeholder: 'Secondary Textarea'
  }
}`,...(P=(b=l.parameters)==null?void 0:b.docs)==null?void 0:P.source}}};var W,C,I;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    intent: 'tertiary',
    placeholder: 'Tertiary Textarea'
  }
}`,...(I=(C=c.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var w,O,B;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    intent: 'success',
    placeholder: 'Success Textarea'
  }
}`,...(B=(O=o.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var A,R,V;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    intent: 'warning',
    placeholder: 'Warning Textarea'
  }
}`,...(V=(R=i.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var _,j,k;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    intent: 'danger',
    placeholder: 'Danger Textarea'
  }
}`,...(k=(j=d.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var q,z,F;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    intent: 'info',
    placeholder: 'Info Textarea'
  }
}`,...(F=(z=m.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};const M=["AllVariants","Playground","Default","Primary","Secondary","Tertiary","Success","Warning","Danger","Info"];export{r as AllVariants,d as Danger,n as Default,m as Info,t as Playground,s as Primary,l as Secondary,o as Success,c as Tertiary,i as Warning,M as __namedExportsOrder,L as default};
