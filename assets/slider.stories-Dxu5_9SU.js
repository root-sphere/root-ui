import{r as e}from"./index-DRjF_FHU.js";import{S as r}from"./slider-BuHWdsY7.js";import"./utils-CmPBaH-W.js";import"./index-BdQq_4o_.js";import"./index-B23hBBlt.js";import"./index-bDvysU34.js";import"./jsx-runtime-DR9Q75dM.js";import"./index-rX-Bn4lm.js";import"./index-LOOTFJQl.js";import"./index-8C9U9fVh.js";import"./index-D1y9YG6K.js";import"./index-Iz9Zo_Nw.js";import"./index-C9mr3DAw.js";const W={args:{defaultValue:[50],disabled:!1,max:100,step:1,intent:"accent"},argTypes:{defaultValue:{control:"object",description:"The default value(s) of the slider"},disabled:{control:"boolean",description:"Whether the slider is disabled"},max:{control:"number",description:"The maximum value of the slider"},step:{control:"number",description:"The step interval between values"},intent:{control:"select",options:["accent"],description:"The visual style variant of the slider"}},component:r,parameters:{layout:"centered"},title:"Components/Slider"},a={render:()=>e.createElement("div",{className:"flex flex-col gap-8 w-[400px]"},e.createElement("div",{className:"flex flex-col gap-4"},e.createElement("h3",{className:"text-lg font-semibold"},"Single Value"),e.createElement(r,{defaultValue:[33],max:100,step:1,intent:"accent"})),e.createElement("div",{className:"flex flex-col gap-4"},e.createElement("h3",{className:"text-lg font-semibold"},"Range"),e.createElement(r,{defaultValue:[25,75],max:100,step:1,intent:"accent"})),e.createElement("div",{className:"flex flex-col gap-4"},e.createElement("h3",{className:"text-lg font-semibold"},"Disabled"),e.createElement(r,{defaultValue:[50],disabled:!0,max:100,step:1,intent:"accent"})))},t={args:{defaultValue:[50],disabled:!1,max:100,step:1,intent:"accent"}},n={args:{defaultValue:[33],max:100,step:1,intent:"accent"}},s={args:{defaultValue:[25,75],max:100,step:1,intent:"accent"}},l={args:{defaultValue:[50],disabled:!0,max:100,step:1,intent:"accent"}};var c,o,i;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8 w-[400px]">
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Single Value</h3>
        <Slider defaultValue={[33]} max={100} step={1} intent="accent" />
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Range</h3>
        <Slider defaultValue={[25, 75]} max={100} step={1} intent="accent" />
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Disabled</h3>
        <Slider defaultValue={[50]} disabled max={100} step={1} intent="accent" />
      </div>
    </div>
}`,...(i=(o=a.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var d,m,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    defaultValue: [50],
    disabled: false,
    max: 100,
    step: 1,
    intent: 'accent'
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,f,x;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    defaultValue: [33],
    max: 100,
    step: 1,
    intent: 'accent'
  }
}`,...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var g,b,V;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    defaultValue: [25, 75],
    max: 100,
    step: 1,
    intent: 'accent'
  }
}`,...(V=(b=s.parameters)==null?void 0:b.docs)==null?void 0:V.source}}};var h,v,S;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    defaultValue: [50],
    disabled: true,
    max: 100,
    step: 1,
    intent: 'accent'
  }
}`,...(S=(v=l.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};const k=["AllVariants","Playground","SingleValue","Range","Disabled"];export{a as AllVariants,l as Disabled,t as Playground,s as Range,n as SingleValue,k as __namedExportsOrder,W as default};
