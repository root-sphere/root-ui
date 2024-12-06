import{r as e}from"./index-DRjF_FHU.js";import{T as l}from"./textarea-CcXXNvW1.js";import"./utils-CmPBaH-W.js";import"./index-C9mr3DAw.js";const u={args:{disabled:!1,placeholder:"Enter text..."},argTypes:{disabled:{control:"boolean",description:"Whether the textarea is disabled"},intent:{control:"select",description:"The intent/purpose of the textarea which determines its color scheme",options:["accent"]}},component:l,parameters:{layout:"centered"},title:"Components/Textarea"},a={render:()=>e.createElement("div",{className:"flex flex-col gap-8"},e.createElement("div",{className:"flex flex-col gap-4"},e.createElement("h3",{className:"text-lg font-semibold"},"Brand Colors"),e.createElement("div",{className:"flex flex-col gap-4"},e.createElement("div",{className:"flex gap-4"},e.createElement(l,{intent:"accent",placeholder:"Accent Textarea"})))),e.createElement("div",{className:"flex flex-col gap-4"},e.createElement("h3",{className:"text-lg font-semibold"},"States"),e.createElement("div",{className:"flex gap-4"},e.createElement(l,{disabled:!0,placeholder:"Disabled Textarea"}),e.createElement(l,{readOnly:!0,value:"Read Only Textarea"}))))},t={args:{intent:"accent",placeholder:"Enter text..."}},r={args:{intent:"accent",placeholder:"Accent Textarea"}};var n,c,s;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">
      {/* Brand Colors */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Brand Colors</h3>

        <div className="flex flex-col gap-4">
          {/* Accent */}
          <div className="flex gap-4">
            <Textarea intent="accent" placeholder="Accent Textarea" />
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
}`,...(s=(c=a.parameters)==null?void 0:c.docs)==null?void 0:s.source}}};var o,d,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    intent: 'accent',
    placeholder: 'Enter text...'
  }
}`,...(i=(d=t.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var m,p,x;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    intent: 'accent',
    placeholder: 'Accent Textarea'
  }
}`,...(x=(p=r.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};const E=["AllVariants","Playground","Accent"];export{r as Accent,a as AllVariants,t as Playground,E as __namedExportsOrder,u as default};
