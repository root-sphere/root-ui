import{r as e}from"./index-DRjF_FHU.js";import{u as P,F as A,a as c,b as m,c as i,d as p,e as u}from"./form-C_j1TAcP.js";import{C as t}from"./checkbox-BsEvIvLy.js";import"./utils-CmPBaH-W.js";import"./index-bDvysU34.js";import"./jsx-runtime-DR9Q75dM.js";import"./index-rX-Bn4lm.js";import"./index-LOOTFJQl.js";import"./index-C9mr3DAw.js";import"./index-B23hBBlt.js";import"./index-Iz9Zo_Nw.js";import"./index-C9o98AqH.js";import"./check-DDO25L6O.js";import"./createLucideIcon-BS-719lU.js";const H={args:{defaultChecked:!1,disabled:!1},argTypes:{defaultChecked:{control:"boolean",description:"Whether the checkbox is checked by default"},disabled:{control:"boolean",description:"Whether the checkbox is disabled"},intent:{control:"select",options:["default"],description:"The visual style variant of the checkbox"}},component:t,parameters:{layout:"centered"},title:"Forms/Checkbox"},s={render:()=>e.createElement("div",{className:"flex flex-col gap-8"},e.createElement("div",{className:"flex flex-col gap-4"},e.createElement("h3",{className:"text-lg font-semibold"},"Default"),e.createElement("div",{className:"flex items-center space-x-2"},e.createElement(t,{id:"terms1",defaultChecked:!0}),e.createElement("label",{htmlFor:"terms1",className:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"},"Accept terms and conditions"))),e.createElement("div",{className:"flex flex-col gap-4"},e.createElement("h3",{className:"text-lg font-semibold"},"With Description"),e.createElement("div",{className:"flex items-start space-x-2"},e.createElement(t,{id:"terms2"}),e.createElement("div",{className:"grid gap-1.5 leading-none"},e.createElement("label",{htmlFor:"terms2",className:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"},"Accept terms and conditions"),e.createElement("p",{className:"text-sm text-muted-foreground"},"You agree to our Terms of Service and Privacy Policy by checking this box.")))),e.createElement("div",{className:"flex flex-col gap-4"},e.createElement("h3",{className:"text-lg font-semibold"},"States"),e.createElement("div",{className:"flex items-center space-x-2"},e.createElement(t,{id:"disabled1",disabled:!0}),e.createElement("label",{htmlFor:"disabled1",className:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"},"Disabled"))))},r={render:a=>e.createElement("div",{className:"flex items-start space-x-2"},e.createElement(t,{id:"playground",...a}),e.createElement("div",{className:"grid gap-1.5 leading-none"},e.createElement("label",{htmlFor:"playground",className:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"},"Email notifications"),e.createElement("p",{className:"text-sm text-muted-foreground"},"Receive emails about your account activity."))),args:{defaultChecked:!1,disabled:!1,intent:"default"}},T=()=>{const a=P({defaultValues:{marketing:!1,terms:!1}});return e.createElement(A,{...a},e.createElement("form",{className:"w-full space-y-6"},e.createElement(c,{control:a.control,name:"marketing",render:({field:l})=>e.createElement(m,{className:"flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4"},e.createElement(i,null,e.createElement(t,{checked:l.value,onCheckedChange:l.onChange})),e.createElement("div",{className:"space-y-1 leading-none"},e.createElement(p,null,"Marketing emails"),e.createElement(u,null,"Receive emails about new products, features, and more.")))}),e.createElement(c,{control:a.control,name:"terms",render:({field:l})=>e.createElement(m,{className:"flex flex-row items-start space-x-3 space-y-0"},e.createElement(i,null,e.createElement(t,{checked:l.value,onCheckedChange:l.onChange})),e.createElement("div",{className:"space-y-1 leading-none"},e.createElement(p,null,"Accept terms and conditions"),e.createElement(u,null,"You agree to our Terms of Service and Privacy Policy.")))})))},n={render:T},o={render:a=>e.createElement("div",{className:"flex items-center space-x-2"},e.createElement(t,{id:"default",...a}),e.createElement("label",{htmlFor:"default",className:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"},"Remember me")),args:{defaultChecked:!1}},d={render:a=>e.createElement("div",{className:"flex items-center space-x-2"},e.createElement(t,{id:"disabled",...a}),e.createElement("label",{htmlFor:"disabled",className:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"},"I agree to the terms (disabled)")),args:{defaultChecked:!1,disabled:!0}};var f,b,x;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Default</h3>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms1" defaultChecked={true} />
          <label htmlFor="terms1" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Accept terms and conditions
          </label>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">With Description</h3>
        <div className="flex items-start space-x-2">
          <Checkbox id="terms2" />
          <div className="grid gap-1.5 leading-none">
            <label htmlFor="terms2" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Accept terms and conditions
            </label>
            <p className="text-sm text-muted-foreground">
              You agree to our Terms of Service and Privacy Policy by checking this box.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">States</h3>
        <div className="flex items-center space-x-2">
          <Checkbox id="disabled1" disabled />
          <label htmlFor="disabled1" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Disabled
          </label>
        </div>
      </div>
    </div>
}`,...(x=(b=s.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var g,h,v;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <div className="flex items-start space-x-2">
      <Checkbox id="playground" {...args} />
      <div className="grid gap-1.5 leading-none">
        <label htmlFor="playground" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Email notifications
        </label>
        <p className="text-sm text-muted-foreground">Receive emails about your account activity.</p>
      </div>
    </div>,
  args: {
    defaultChecked: false,
    disabled: false,
    intent: 'default'
  }
}`,...(v=(h=r.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var N,E,y;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: FormTemplate
}`,...(y=(E=n.parameters)==null?void 0:E.docs)==null?void 0:y.source}}};var k,C,F;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <div className="flex items-center space-x-2">
      <Checkbox id="default" {...args} />
      <label htmlFor="default" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        Remember me
      </label>
    </div>,
  args: {
    defaultChecked: false
  }
}`,...(F=(C=o.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var w,D,S;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <div className="flex items-center space-x-2">
      <Checkbox id="disabled" {...args} />
      <label htmlFor="disabled" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        I agree to the terms (disabled)
      </label>
    </div>,
  args: {
    defaultChecked: false,
    disabled: true
  }
}`,...(S=(D=d.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};const J=["AllVariants","Playground","WithForm","Default","Disabled"];export{s as AllVariants,o as Default,d as Disabled,r as Playground,n as WithForm,J as __namedExportsOrder,H as default};
