import{c as a}from"./utils-CmPBaH-W.js";import{r as e}from"./index-DRjF_FHU.js";import{c as x}from"./index-C9mr3DAw.js";const l=x({slots:{root:["flex w-full rounded-md","border bg-background","ring-offset-background","focus-within:outline-none focus-within:ring-2","focus-within:ring-ring focus-within:ring-offset-2","disabled:cursor-not-allowed disabled:opacity-70","read-only:cursor-default read-only:opacity-90","transition-colors duration-200","group"],input:["h-full w-full bg-transparent","text-sm","placeholder:text-muted-foreground","focus:outline-none","disabled:cursor-not-allowed","file:border-0 file:bg-transparent file:text-sm file:font-medium","group-hover:placeholder:text-muted-foreground/70","read-only:cursor-default read-only:opacity-90"],divider:["w-[1px] my-auto","bg-input/20","transition-colors duration-200","group-hover:bg-input/30"],action:["flex items-center gap-2","text-font-primary","transition-colors duration-200","focus-visible:outline-none","disabled:pointer-events-none disabled:opacity-70"]},defaultVariants:{intent:"default",size:"default"},variants:{intent:{default:{root:["border-input text-font-primary","focus-within:border-primary focus-within:ring-primary","hover:border-primary/80 hover:bg-primary/5"],input:["text-font-primary placeholder:text-font-secondary","group-hover:text-font-primary/90"],divider:["bg-input/20"],action:["text-font-primary"]}},size:{sm:{root:"h-9",input:"px-3 py-1 text-sm",divider:"h-4",action:"px-3 text-sm"},default:{root:"h-10",input:"px-3 py-2 text-sm",divider:"h-5",action:"px-3 text-sm"},lg:{root:"h-11",input:"px-4 py-2 text-base",divider:"h-6",action:"px-4 text-base"}}}}),d=e.createContext({styles:l()}),c=e.forwardRef(({className:r,intent:t,size:o,disabled:i,...n},m)=>{const s=l({intent:t,size:o});return e.createElement(d.Provider,{value:{disabled:i,intent:t,size:o,styles:s}},e.createElement("div",{ref:m,className:a(s.root(),r),"data-disabled":i,...n}))});c.displayName="TextField";const p=e.forwardRef(({className:r,disabled:t,...o},i)=>{const n=e.useContext(d);return e.createElement("input",{ref:i,disabled:n.disabled||t,className:a(n.styles.input(),r),...o})});p.displayName="TextFieldInput";const u=e.forwardRef(({className:r,...t},o)=>{const i=e.useContext(d);return e.createElement("div",{ref:o,className:a(i.styles.divider(),r),...t})});u.displayName="TextFieldDivider";const f=e.forwardRef(({className:r,disabled:t,...o},i)=>{const n=e.useContext(d);return e.createElement("button",{ref:i,disabled:n.disabled||t,className:a(n.styles.action(),r),...o})});f.displayName="TextFieldAction";c.__docgenInfo={description:"",methods:[],displayName:"TextField"};f.__docgenInfo={description:"",methods:[],displayName:"TextFieldAction"};u.__docgenInfo={description:"",methods:[],displayName:"TextFieldDivider"};p.__docgenInfo={description:"",methods:[],displayName:"TextFieldInput"};export{c as T,p as a,u as b,f as c};
