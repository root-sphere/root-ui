import{r as e}from"./index-DRjF_FHU.js";import{I as l}from"./input-BgVaigNu.js";import"./utils-CmPBaH-W.js";import"./index-C9mr3DAw.js";const v={args:{disabled:!1,placeholder:"Enter text..."},argTypes:{disabled:{control:"boolean",description:"Whether the input is disabled"},intent:{control:"select",description:"The intent/purpose of the input which determines its color scheme",options:["accent"]}},component:l,parameters:{layout:"centered"},title:"Components/Input"},t={render:()=>e.createElement("div",{className:"flex flex-col gap-8"},e.createElement("div",{className:"flex flex-col gap-4"},e.createElement("h3",{className:"text-lg font-semibold"},"Accent Color"),e.createElement("div",{className:"flex flex-col gap-4"},e.createElement("div",{className:"flex gap-4"},e.createElement(l,{intent:"accent",placeholder:"Accent Input"})))),e.createElement("div",{className:"flex flex-col gap-4"},e.createElement("h3",{className:"text-lg font-semibold"},"States"),e.createElement("div",{className:"flex gap-4"},e.createElement(l,{disabled:!0,placeholder:"Disabled Input"}),e.createElement(l,{readOnly:!0,value:"Read Only Input"}))))},a={args:{intent:"accent",placeholder:"Enter text..."}},n={args:{intent:"accent",placeholder:"Accent Input"}};var c,r,s;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">
      {/* Accent Color */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Accent Color</h3>

        <div className="flex flex-col gap-4">
          {/* Accent */}
          <div className="flex gap-4">
            <Input intent="accent" placeholder="Accent Input" />
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
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var o,d,p;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    intent: 'accent',
    placeholder: 'Enter text...'
  }
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var i,m,u;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    intent: 'accent',
    placeholder: 'Accent Input'
  }
}`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const E=["AllVariants","Playground","Accent"];export{n as Accent,t as AllVariants,a as Playground,E as __namedExportsOrder,v as default};
