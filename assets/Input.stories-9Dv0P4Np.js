import{r as e}from"./index-DRjF_FHU.js";import{I as r}from"./input-B-sHwOOi.js";import"./utils-Cf3bcFYp.js";import"./index-CyyGtGk5.js";const v={args:{disabled:!1,placeholder:"Enter text..."},argTypes:{disabled:{control:"boolean",description:"Whether the input is disabled"},intent:{control:"select",description:"The intent/purpose of the input which determines its color scheme",options:["default"]}},component:r,parameters:{layout:"centered"},title:"Forms/Input"},a={render:()=>e.createElement("div",{className:"flex flex-col gap-8"},e.createElement("div",{className:"flex flex-col gap-4"},e.createElement("h3",{className:"text-lg font-semibold"},"default Color"),e.createElement("div",{className:"flex flex-col gap-4"},e.createElement("div",{className:"flex gap-4"},e.createElement(r,{placeholder:"default Input"})))),e.createElement("div",{className:"flex flex-col gap-4"},e.createElement("h3",{className:"text-lg font-semibold"},"States"),e.createElement("div",{className:"flex gap-4"},e.createElement(r,{disabled:!0,placeholder:"Disabled Input"}),e.createElement(r,{readOnly:!0,value:"Read Only Input"}))))},t={args:{intent:"default",placeholder:"Enter text..."}},l={args:{placeholder:"Default Input"}};var s,n,o;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">
      {/* default Color */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">default Color</h3>

        <div className="flex flex-col gap-4">
          {/* default */}
          <div className="flex gap-4">
            <Input placeholder="default Input" />
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
}`,...(o=(n=a.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var c,d,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    intent: 'default',
    placeholder: 'Enter text...'
  }
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var i,m,u;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    placeholder: 'Default Input'
  }
}`,...(u=(m=l.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const E=["AllVariants","Playground","Default"];export{a as AllVariants,l as Default,t as Playground,E as __namedExportsOrder,v as default};
