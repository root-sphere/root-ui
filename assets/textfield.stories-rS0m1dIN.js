import{r as e}from"./index-DRjF_FHU.js";import{T as n,a as l,b as a,c as i}from"./textfield-7saXX5O_.js";import{c as b}from"./createLucideIcon-BS-719lU.js";import"./utils-CmPBaH-W.js";import"./index-C9mr3DAw.js";/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=b("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]),V={args:{disabled:!1,size:"default"},argTypes:{disabled:{control:"boolean",description:"Whether the input is disabled"},intent:{control:"select",description:"The intent/purpose of the input which determines its color scheme",options:["accent"]},size:{control:"select",description:"The size of the text field",options:["sm","default","lg"]}},component:n,parameters:{layout:"centered"},title:"Forms/TextField"},r={render:t=>e.createElement("div",{className:"w-[320px]"},e.createElement(n,{...t},e.createElement(l,{placeholder:"Enter text..."})))},s={render:t=>e.createElement("div",{className:"w-[320px]"},e.createElement(n,{...t},e.createElement(l,{placeholder:"Enter text..."}),e.createElement(a,null),e.createElement(i,null,e.createElement("span",null,"Action"))))},d={render:t=>e.createElement("div",{className:"w-[320px]"},e.createElement(n,{...t},e.createElement(i,null,e.createElement(m,{className:"animate-spin"})),e.createElement(a,null),e.createElement(l,{placeholder:"Loading..."})))},c={render:t=>e.createElement("div",{className:"w-[320px] flex flex-col gap-4"},e.createElement(n,{...t,size:"sm"},e.createElement(l,{placeholder:"Small size"}),e.createElement(a,null),e.createElement(i,null,e.createElement("span",null,"Action"))),e.createElement(n,{...t,size:"default"},e.createElement(l,{placeholder:"Default size"}),e.createElement(a,null),e.createElement(i,null,e.createElement("span",null,"Action"))),e.createElement(n,{...t,size:"lg"},e.createElement(l,{placeholder:"Large size"}),e.createElement(a,null),e.createElement(i,null,e.createElement("span",null,"Action"))),e.createElement(n,{...t,size:"sm"},e.createElement(l,{placeholder:"Small loading"}),e.createElement(a,null),e.createElement(i,null,e.createElement(m,{className:"size-3 animate-spin"}))),e.createElement(n,{...t,size:"default"},e.createElement(l,{placeholder:"Default loading"}),e.createElement(a,null),e.createElement(i,null,e.createElement(m,{className:"size-4 animate-spin"}))),e.createElement(n,{...t,size:"lg"},e.createElement(l,{placeholder:"Large loading"}),e.createElement(a,null),e.createElement(i,null,e.createElement(m,{className:"size-5 animate-spin"}))),e.createElement(n,{...t,size:"sm"},e.createElement(l,{type:"number",defaultValue:1})),e.createElement(n,{...t,size:"default"},e.createElement(l,{type:"number",defaultValue:1})),e.createElement(n,{...t,size:"lg"},e.createElement(l,{type:"number",defaultValue:1})))},o={args:{disabled:!0},render:t=>e.createElement("div",{className:"w-[320px]"},e.createElement(n,{...t},e.createElement(l,{placeholder:"Disabled input"}),e.createElement(a,null),e.createElement(i,null,e.createElement("span",null,"Action"))))};var p,u,x;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <div className="w-[320px]">
      <TextField {...args}>
        <TextFieldInput placeholder="Enter text..." />
      </TextField>
    </div>
}`,...(x=(u=r.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var T,F,E;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <div className="w-[320px]">
      <TextField {...args}>
        <TextFieldInput placeholder="Enter text..." />
        <TextFieldDivider />
        <TextFieldAction>
          <span>Action</span>
        </TextFieldAction>
      </TextField>
    </div>
}`,...(E=(F=s.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};var g,h,z;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <div className="w-[320px]">
      <TextField {...args}>
        <TextFieldAction>
          <Loader2Icon className="animate-spin" />
        </TextFieldAction>
        <TextFieldDivider />
        <TextFieldInput placeholder="Loading..." />
      </TextField>
    </div>
}`,...(z=(h=d.parameters)==null?void 0:h.docs)==null?void 0:z.source}}};var f,A,v;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <div className="w-[320px] flex flex-col gap-4">
      <TextField {...args} size="sm">
        <TextFieldInput placeholder="Small size" />
        <TextFieldDivider />
        <TextFieldAction>
          <span>Action</span>
        </TextFieldAction>
      </TextField>

      <TextField {...args} size="default">
        <TextFieldInput placeholder="Default size" />
        <TextFieldDivider />
        <TextFieldAction>
          <span>Action</span>
        </TextFieldAction>
      </TextField>

      <TextField {...args} size="lg">
        <TextFieldInput placeholder="Large size" />
        <TextFieldDivider />
        <TextFieldAction>
          <span>Action</span>
        </TextFieldAction>
      </TextField>

      {/* With Loading */}
      <TextField {...args} size="sm">
        <TextFieldInput placeholder="Small loading" />
        <TextFieldDivider />
        <TextFieldAction>
          <Loader2Icon className="size-3 animate-spin" />
        </TextFieldAction>
      </TextField>

      <TextField {...args} size="default">
        <TextFieldInput placeholder="Default loading" />
        <TextFieldDivider />
        <TextFieldAction>
          <Loader2Icon className="size-4 animate-spin" />
        </TextFieldAction>
      </TextField>

      <TextField {...args} size="lg">
        <TextFieldInput placeholder="Large loading" />
        <TextFieldDivider />
        <TextFieldAction>
          <Loader2Icon className="size-5 animate-spin" />
        </TextFieldAction>
      </TextField>

      {/* With Number */}
      <TextField {...args} size="sm">
        <TextFieldInput type="number" defaultValue={1} />
      </TextField>

      <TextField {...args} size="default">
        <TextFieldInput type="number" defaultValue={1} />
      </TextField>

      <TextField {...args} size="lg">
        <TextFieldInput type="number" defaultValue={1} />
      </TextField>
    </div>
}`,...(v=(A=c.parameters)==null?void 0:A.docs)==null?void 0:v.source}}};var D,I,N;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => <div className="w-[320px]">
      <TextField {...args}>
        <TextFieldInput placeholder="Disabled input" />
        <TextFieldDivider />
        <TextFieldAction>
          <span>Action</span>
        </TextFieldAction>
      </TextField>
    </div>
}`,...(N=(I=o.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};const C=["Default","WithAction","WithLoading","Sizes","Disabled"];export{r as Default,o as Disabled,c as Sizes,s as WithAction,d as WithLoading,C as __namedExportsOrder,V as default};
