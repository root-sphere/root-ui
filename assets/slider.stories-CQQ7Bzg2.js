import{r as e}from"./index-DRjF_FHU.js";import{S as n}from"./slider-BREhejg9.js";import"./utils-CmPBaH-W.js";import"./index-BdQq_4o_.js";import"./index-B23hBBlt.js";import"./index-bDvysU34.js";import"./jsx-runtime-DR9Q75dM.js";import"./index-rX-Bn4lm.js";import"./index-LOOTFJQl.js";import"./index-8C9U9fVh.js";import"./index-D1y9YG6K.js";import"./index-Iz9Zo_Nw.js";import"./index-C9mr3DAw.js";const W={args:{defaultValue:[50],disabled:!1,max:100,step:1},argTypes:{defaultValue:{control:"object",description:"The default value(s) of the slider"},disabled:{control:"boolean",description:"Whether the slider is disabled"},max:{control:"number",description:"The maximum value of the slider"},step:{control:"number",description:"The step interval between values"},intent:{control:"select",options:["accent"],description:"The visual style variant of the slider"}},component:n,parameters:{layout:"centered"},title:"Forms/Slider"},a={render:()=>e.createElement("div",{className:"flex flex-col gap-8 w-[400px]"},e.createElement("div",{className:"flex flex-col gap-4"},e.createElement("h3",{className:"text-lg font-semibold"},"Single Value"),e.createElement(n,{defaultValue:[33],max:100,step:1})),e.createElement("div",{className:"flex flex-col gap-4"},e.createElement("h3",{className:"text-lg font-semibold"},"Range"),e.createElement(n,{defaultValue:[25,75],max:100,step:1})),e.createElement("div",{className:"flex flex-col gap-4"},e.createElement("h3",{className:"text-lg font-semibold"},"Disabled"),e.createElement(n,{defaultValue:[50],disabled:!0,max:100,step:1})))},s={args:{defaultValue:[50],disabled:!1,max:100,step:1}},t={args:{defaultValue:[33],max:100,step:1}},l={args:{defaultValue:[25,75],max:100,step:1}},r={args:{defaultValue:[50],disabled:!0,max:100,step:1}};var o,d,m;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8 w-[400px]">
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Single Value</h3>
        <Slider defaultValue={[33]} max={100} step={1} />
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Range</h3>
        <Slider defaultValue={[25, 75]} max={100} step={1} />
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Disabled</h3>
        <Slider defaultValue={[50]} disabled max={100} step={1} />
      </div>
    </div>
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var i,c,p;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    defaultValue: [50],
    disabled: false,
    max: 100,
    step: 1
  }
}`,...(p=(c=s.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,f,x;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    defaultValue: [33],
    max: 100,
    step: 1
  }
}`,...(x=(f=t.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var g,b,V;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    defaultValue: [25, 75],
    max: 100,
    step: 1
  }
}`,...(V=(b=l.parameters)==null?void 0:b.docs)==null?void 0:V.source}}};var h,v,S;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    defaultValue: [50],
    disabled: true,
    max: 100,
    step: 1
  }
}`,...(S=(v=r.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};const k=["AllVariants","Playground","SingleValue","Range","Disabled"];export{a as AllVariants,r as Disabled,s as Playground,l as Range,t as SingleValue,k as __namedExportsOrder,W as default};
