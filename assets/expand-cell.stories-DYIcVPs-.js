import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{d as r,i}from"./data-grid-cells-CBMmOMnX.js";function a(){let[e,t]=(0,o.useState)(!1);return(0,s.jsxs)(`div`,{className:`story-layout stack`,style:{maxWidth:540},children:[(0,s.jsxs)(`div`,{className:`row`,children:[(0,s.jsx)(i,{expanded:e,onExpandedChange:t,count:3,"aria-controls":`sample-nested-events`}),(0,s.jsx)(`span`,{children:`Project delivery review`})]}),e&&(0,s.jsxs)(`div`,{id:`sample-nested-events`,className:`stack`,style:{paddingLeft:`var(--space-8)`,gap:`var(--space-2)`,fontSize:`var(--text-xs)`},children:[(0,s.jsx)(`code`,{children:`11:57:02 UTC · Record created by Elena Vasquez`}),(0,s.jsx)(`code`,{children:`11:57:03 UTC · Project assigned to Marcus Chen`}),(0,s.jsx)(`code`,{children:`11:57:04 UTC · Review requested for the next milestone`})]})]})}var o,s,c,l,u,d,f;function p(){return(p=e((()=>{o=t(),r(),s=n(),{useArgs:c}=__STORYBOOK_MODULE_PREVIEW_API__,l={id:`components-data-grid-expand-cell`,title:`Components/Data Display/Data grid/Expand cell`,component:i,tags:[`autodocs`]},u={render:()=>(0,s.jsx)(a,{})},d={args:{expanded:!1,count:3,label:`Project updates`,onExpandedChange:()=>void 0},argTypes:{count:{control:{type:`number`,min:0,step:1}}},render:function(e){let[,t]=c();return(0,s.jsxs)(`div`,{className:`stack`,children:[(0,s.jsx)(i,{...e,onExpandedChange:e=>t({expanded:e})}),e.expanded&&(0,s.jsx)(`p`,{children:`Three project updates are available for review.`})]})}},f=[`NestedEvents`,`Playground`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <ExpandDemo />
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    expanded: false,
    count: 3,
    label: 'Project updates',
    onExpandedChange: () => undefined
  },
  argTypes: {
    count: {
      control: {
        type: 'number',
        min: 0,
        step: 1
      }
    }
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs<ExpandCellProps>();
    return <div className="stack">
        <ExpandCell {...args} onExpandedChange={expanded => updateArgs({
        expanded
      })} />
        {args.expanded && <p>Three project updates are available for review.</p>}
      </div>;
  }
}`,...d.parameters?.docs?.source}}}})))()}p();export{u as NestedEvents,d as Playground,f as __namedExportsOrder,l as default};