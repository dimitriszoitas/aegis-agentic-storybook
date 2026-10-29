import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./button-CLF7L5Y-.js";import{n as a,t as o}from"./tag-BQ2XyIvS.js";function s(){let[e,t]=(0,c.useState)(!1),[n,r]=(0,c.useState)(!1);return(0,l.jsxs)(`div`,{className:`stack`,children:[[`sm`,`md`].map(e=>(0,l.jsx)(`div`,{className:`row`,children:[`default`,`function`,`destroy`,`ai`,`success`,`warning`].map(t=>(0,l.jsx)(o,{size:e,intent:t,children:t===`ai`?`AI suggested`:`Customer success`},t))},e)),(0,l.jsxs)(`div`,{className:`row`,children:[(0,l.jsx)(o,{variant:`interactive`,selected:e,onSelectedChange:t,children:`Assigned to me`}),(0,l.jsx)(o,{variant:`counter`,count:24,children:`Identity`}),!n&&(0,l.jsx)(o,{variant:`removable`,removeLabel:`Remove Customer portal filter`,onRemove:()=>r(!0),children:`Customer portal`})]})]})}var c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{r(),c=t(),a(),l=n(),{useArgs:u}=__STORYBOOK_MODULE_PREVIEW_API__,d={id:`components-tags-tag`,title:`Components/Data Display/Tag`,component:o,subcomponents:{Chip:o}},f={render:()=>(0,l.jsx)(s,{})},p={parameters:{docs:{description:{story:`Status tags use a colored dot, quiet pill background, and primary text. Medium tags are 24px tall; small tags are 20px. Use intent for semantic colors or dotColor with a workflow color token, such as the separate purple review token. Status tags are labels, not live announcements or controls.`}}},render:()=>(0,l.jsx)(`div`,{className:`stack`,children:[`md`,`sm`].map(e=>(0,l.jsxs)(`div`,{className:`row`,"aria-label":`${e===`md`?`Medium`:`Small`} status tags`,role:`group`,children:[(0,l.jsx)(o,{variant:`status`,size:e,intent:`function`,children:`New`}),(0,l.jsx)(o,{variant:`status`,size:e,intent:`function`,children:`Open`}),(0,l.jsx)(o,{variant:`status`,size:e,dotColor:`var(--color-status-review-fg)`,children:`In review`}),(0,l.jsx)(o,{variant:`status`,size:e,intent:`warning`,children:`In progress`}),(0,l.jsx)(o,{variant:`status`,size:e,intent:`success`,children:`Closed`}),(0,l.jsx)(o,{variant:`status`,size:e,intent:`destroy`,children:`Blocked`}),(0,l.jsx)(o,{variant:`status`,size:e,children:`Queued`})]},e))})},m={args:{children:`Customer portal`,variant:`static`,size:`md`,intent:`function`,count:24,selected:!1,disabled:!1,visible:!0,removeLabel:`Remove Customer portal tag`},argTypes:{children:{control:`text`,name:`Label`},variant:{control:`select`,options:[`static`,`interactive`,`removable`,`counter`,`status`]},size:{control:`select`,options:[`sm`,`md`]},intent:{control:`select`,options:[`default`,`function`,`destroy`,`ai`,`success`,`warning`]},count:{control:{type:`number`,min:0,step:1}},selected:{control:`boolean`},disabled:{control:`boolean`},visible:{control:`boolean`},removeLabel:{control:`text`}},render:function({visible:e,...t}){let[,n]=u();return(0,l.jsx)(`div`,{className:`stack`,children:e?(0,l.jsx)(o,{...t,onSelectedChange:e=>n({selected:e}),onRemove:()=>n({visible:!1})}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(`p`,{role:`status`,children:`Tag removed.`}),(0,l.jsx)(i,{emphasis:`ghost`,onClick:()=>n({visible:!0}),children:`Restore tag`})]})})}},h=[`Matrix`,`Status`,`Playground`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Tags />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Status tags use a colored dot, quiet pill background, and primary text. Medium tags are 24px tall; small tags are 20px. Use intent for semantic colors or dotColor with a workflow color token, such as the separate purple review token. Status tags are labels, not live announcements or controls.'
      }
    }
  },
  render: () => <div className="stack">
      {(['md', 'sm'] as const).map(size => <div className="row" key={size} aria-label={\`\${size === 'md' ? 'Medium' : 'Small'} status tags\`} role="group">
          <Tag variant="status" size={size} intent="function">
            New
          </Tag>
          <Tag variant="status" size={size} intent="function">
            Open
          </Tag>
          <Tag variant="status" size={size} dotColor="var(--color-status-review-fg)">
            In review
          </Tag>
          <Tag variant="status" size={size} intent="warning">
            In progress
          </Tag>
          <Tag variant="status" size={size} intent="success">
            Closed
          </Tag>
          <Tag variant="status" size={size} intent="destroy">
            Blocked
          </Tag>
          <Tag variant="status" size={size}>
            Queued
          </Tag>
        </div>)}
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Customer portal',
    variant: 'static',
    size: 'md',
    intent: 'function',
    count: 24,
    selected: false,
    disabled: false,
    visible: true,
    removeLabel: 'Remove Customer portal tag'
  },
  argTypes: {
    children: {
      control: 'text',
      name: 'Label'
    },
    variant: {
      control: 'select',
      options: ['static', 'interactive', 'removable', 'counter', 'status']
    },
    size: {
      control: 'select',
      options: ['sm', 'md']
    },
    intent: {
      control: 'select',
      options: ['default', 'function', 'destroy', 'ai', 'success', 'warning']
    },
    count: {
      control: {
        type: 'number',
        min: 0,
        step: 1
      }
    },
    selected: {
      control: 'boolean'
    },
    disabled: {
      control: 'boolean'
    },
    visible: {
      control: 'boolean'
    },
    removeLabel: {
      control: 'text'
    }
  },
  render: function Playground({
    visible,
    ...args
  }) {
    const [, updateArgs] = useArgs<PlaygroundArgs>();
    return <div className="stack">
        {visible ? <Tag {...args} onSelectedChange={selected => updateArgs({
        selected
      })} onRemove={() => updateArgs({
        visible: false
      })} /> : <>
            <p role="status">Tag removed.</p>
            <Button emphasis="ghost" onClick={() => updateArgs({
          visible: true
        })}>
              Restore tag
            </Button>
          </>}
      </div>;
  }
}`,...m.parameters?.docs?.source}}}})))()}g();export{f as Matrix,m as Playground,p as Status,h as __namedExportsOrder,d as default};