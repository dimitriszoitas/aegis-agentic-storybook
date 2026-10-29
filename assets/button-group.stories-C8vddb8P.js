import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./button-Bc30j06n.js";import{n as a,t as o}from"./button-group-DdI8f7Qr.js";function s(){let[e,t]=(0,c.useState)(`Default`);return(0,l.jsx)(o,{"aria-label":`Grid density`,children:[`Compact`,`Default`,`Comfortable`].map(n=>(0,l.jsx)(i,{emphasis:e===n?`secondary`:`ghost`,intent:e===n?`function`:`default`,"aria-pressed":e===n,onClick:()=>t(n),children:n},n))})}var c,l,u,d,f,p,m;function h(){return(h=e((()=>{c=t(),r(),a(),l=n(),{useArgs:u}=__STORYBOOK_MODULE_PREVIEW_API__,d={id:`components-actions-buttongroup`,title:`Components/Triggers/ButtonGroup`,component:o},f={render:()=>(0,l.jsx)(s,{})},p={args:{selection:`Default`,size:`md`,emphasis:`secondary`,intent:`function`,disabled:!1},argTypes:{selection:{control:`select`,options:[`Compact`,`Default`,`Comfortable`]},size:{control:`select`,options:[`sm`,`md`,`lg`]},emphasis:{control:`select`,options:[`primary`,`secondary`,`tertiary`,`ghost`]},intent:{control:`select`,options:[`default`,`function`,`destroy`,`ai`]},disabled:{control:`boolean`}},render:function(e){let[,t]=u();return(0,l.jsx)(o,{"aria-label":`Grid density`,children:[`Compact`,`Default`,`Comfortable`].map(n=>(0,l.jsx)(i,{size:e.size,emphasis:e.selection===n?e.emphasis:`ghost`,intent:e.intent,disabled:e.disabled,"aria-pressed":e.selection===n,onClick:()=>t({selection:n}),children:n},n))})}},m=[`Matrix`,`Playground`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <DensityControls />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    selection: 'Default',
    size: 'md',
    emphasis: 'secondary',
    intent: 'function',
    disabled: false
  },
  argTypes: {
    selection: {
      control: 'select',
      options: ['Compact', 'Default', 'Comfortable']
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    },
    emphasis: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'ghost']
    },
    intent: {
      control: 'select',
      options: ['default', 'function', 'destroy', 'ai']
    },
    disabled: {
      control: 'boolean'
    }
  },
  render: function Playground(args) {
    const [, updateArgs] = useArgs<PlaygroundArgs>();
    return <ButtonGroup aria-label="Grid density">
        {(['Compact', 'Default', 'Comfortable'] as const).map(label => <Button key={label} size={args.size} emphasis={args.selection === label ? args.emphasis : 'ghost'} intent={args.intent} disabled={args.disabled} aria-pressed={args.selection === label} onClick={() => updateArgs({
        selection: label
      })}>
            {label}
          </Button>)}
      </ButtonGroup>;
  }
}`,...p.parameters?.docs?.source}}}})))()}h();export{f as Matrix,p as Playground,m as __namedExportsOrder,d as default};