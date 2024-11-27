import{r as n}from"./index-DRjF_FHU.js";import{B as e}from"./button-BY4--CuC.js";import"./utils-CmPBaH-W.js";import"./index-LOOTFJQl.js";import"./jsx-runtime-DR9Q75dM.js";import"./index-C9mr3DAw.js";const P={component:e,parameters:{layout:"centered"},title:"Components/Button"},t={render:()=>n.createElement("div",{className:"flex flex-col gap-8"},n.createElement("div",{className:"flex flex-col gap-4"},n.createElement("h3",{className:"text-lg font-semibold"},"Primary Intent"),n.createElement("div",{className:"flex gap-4"},n.createElement(e,{intent:"primary",variant:"outline"},"Primary Outline"),n.createElement(e,{intent:"primary",variant:"solid"},"Primary Solid"),n.createElement(e,{intent:"primary",variant:"ghost"},"Primary Ghost"),n.createElement(e,{intent:"primary",variant:"link"},"Primary Link"))),n.createElement("div",{className:"flex flex-col gap-4"},n.createElement("h3",{className:"text-lg font-semibold"},"Success Intent"),n.createElement("div",{className:"flex gap-4"},n.createElement(e,{intent:"success",variant:"outline"},"Outline"),n.createElement(e,{intent:"success",variant:"solid"},"Solid"),n.createElement(e,{intent:"success",variant:"ghost"},"Ghost"),n.createElement(e,{intent:"success",variant:"link"},"Link"))),n.createElement("div",{className:"flex flex-col gap-4"},n.createElement("h3",{className:"text-lg font-semibold"},"Warning Intent"),n.createElement("div",{className:"flex gap-4"},n.createElement(e,{intent:"warning",variant:"outline"},"Outline"),n.createElement(e,{intent:"warning",variant:"solid"},"Solid"),n.createElement(e,{intent:"warning",variant:"ghost"},"Ghost"),n.createElement(e,{intent:"warning",variant:"link"},"Link"))),n.createElement("div",{className:"flex flex-col gap-4"},n.createElement("h3",{className:"text-lg font-semibold"},"Danger Intent"),n.createElement("div",{className:"flex gap-4"},n.createElement(e,{intent:"danger",variant:"outline"},"Outline"),n.createElement(e,{intent:"danger",variant:"solid"},"Solid"),n.createElement(e,{intent:"danger",variant:"ghost"},"Ghost"),n.createElement(e,{intent:"danger",variant:"link"},"Link"))),n.createElement("div",{className:"flex flex-col gap-4"},n.createElement("h3",{className:"text-lg font-semibold"},"Sizes"),n.createElement("div",{className:"flex items-center gap-4"},n.createElement(e,{size:"sm",variant:"solid"},"Small Button"),n.createElement(e,{size:"default",variant:"solid"},"Default Button"),n.createElement(e,{size:"lg",variant:"solid"},"Large Button"),n.createElement(e,{size:"icon",variant:"solid"},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n.createElement("path",{d:"M5 12h14"}),n.createElement("path",{d:"M12 5v14"}))))),n.createElement("div",{className:"flex flex-col gap-4"},n.createElement("h3",{className:"text-lg font-semibold"},"States"),n.createElement("div",{className:"flex gap-4"},n.createElement(e,{disabled:!0,variant:"solid"},"Disabled"),n.createElement(e,{className:"cursor-wait",variant:"solid"},"Loading"))))},a={args:{children:"Primary Button",intent:"primary"}},r={args:{children:"Success Button",intent:"success"}},i={args:{children:"Warning Button",intent:"warning"}},s={args:{children:"Danger Button",intent:"danger"}};var l,o,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">
      {/* Primary Variants */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Primary Intent</h3>
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
      </div>

      {/* Success Variants */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Success Intent</h3>
        <div className="flex gap-4">
          <Button intent="success" variant="outline">
            Outline
          </Button>
          <Button intent="success" variant="solid">
            Solid
          </Button>
          <Button intent="success" variant="ghost">
            Ghost
          </Button>
          <Button intent="success" variant="link">
            Link
          </Button>
        </div>
      </div>

      {/* Warning Variants */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Warning Intent</h3>
        <div className="flex gap-4">
          <Button intent="warning" variant="outline">
            Outline
          </Button>
          <Button intent="warning" variant="solid">
            Solid
          </Button>
          <Button intent="warning" variant="ghost">
            Ghost
          </Button>
          <Button intent="warning" variant="link">
            Link
          </Button>
        </div>
      </div>

      {/* Danger Variants */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Danger Intent</h3>
        <div className="flex gap-4">
          <Button intent="danger" variant="outline">
            Outline
          </Button>
          <Button intent="danger" variant="solid">
            Solid
          </Button>
          <Button intent="danger" variant="ghost">
            Ghost
          </Button>
          <Button intent="danger" variant="link">
            Link
          </Button>
        </div>
      </div>

      {/* Sizes */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Sizes</h3>
        <div className="flex items-center gap-4">
          <Button size="sm" variant="solid">
            Small Button
          </Button>
          <Button size="default" variant="solid">
            Default Button
          </Button>
          <Button size="lg" variant="solid">
            Large Button
          </Button>
          <Button size="icon" variant="solid">
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
          <Button disabled variant="solid">
            Disabled
          </Button>
          <Button className="cursor-wait" variant="solid">
            Loading
          </Button>
        </div>
      </div>
    </div>
}`,...(c=(o=t.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var m,d,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'Primary Button',
    intent: 'primary'
  }
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var g,v,p;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: 'Success Button',
    intent: 'success'
  }
}`,...(p=(v=r.parameters)==null?void 0:v.docs)==null?void 0:p.source}}};var B,f,x;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: 'Warning Button',
    intent: 'warning'
  }
}`,...(x=(f=i.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var h,E,N;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: 'Danger Button',
    intent: 'danger'
  }
}`,...(N=(E=s.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};const z=["Variants","Primary","Success","Warning","Danger"];export{s as Danger,a as Primary,r as Success,t as Variants,i as Warning,z as __namedExportsOrder,P as default};
