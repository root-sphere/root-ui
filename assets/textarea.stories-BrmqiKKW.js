import{r as e}from"./index-DRjF_FHU.js";import{T as r}from"./textarea-BYl3Aj0V.js";import"./utils-Cf3bcFYp.js";import"./index-CyyGtGk5.js";const v={args:{disabled:!1,placeholder:"Enter text..."},argTypes:{disabled:{control:"boolean",description:"Whether the textarea is disabled"},intent:{control:"select",description:"The intent/purpose of the textarea which determines its color scheme",options:["default"]}},component:r,parameters:{layout:"centered"},title:"Forms/Textarea"},a={render:()=>e.createElement("div",{className:"flex flex-col gap-8"},e.createElement("div",{className:"flex flex-col gap-4"},e.createElement("h3",{className:"text-lg font-semibold"},"Brand Colors"),e.createElement("div",{className:"flex flex-col gap-4"},e.createElement("div",{className:"flex gap-4"},e.createElement(r,{placeholder:"Default Textarea"})))),e.createElement("div",{className:"flex flex-col gap-4"},e.createElement("h3",{className:"text-lg font-semibold"},"States"),e.createElement("div",{className:"flex gap-4"},e.createElement(r,{disabled:!0,placeholder:"Disabled Textarea"}),e.createElement(r,{readOnly:!0,value:"Read Only Textarea"}))))},t={args:{intent:"default",placeholder:"Enter text..."}},l={args:{intent:"default",placeholder:"Default Textarea"}};var s,n,o;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">
      {/* Brand Colors */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Brand Colors</h3>

        <div className="flex flex-col gap-4">
          {/* Default */}
          <div className="flex gap-4">
            <Textarea placeholder="Default Textarea" />
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
}`,...(o=(n=a.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var c,d,i;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    intent: 'default',
    placeholder: 'Enter text...'
  }
}`,...(i=(d=t.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var m,p,x;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    intent: 'default',
    placeholder: 'Default Textarea'
  }
}`,...(x=(p=l.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};const E=["AllVariants","Playground","Default"];export{a as AllVariants,l as Default,t as Playground,E as __namedExportsOrder,v as default};
