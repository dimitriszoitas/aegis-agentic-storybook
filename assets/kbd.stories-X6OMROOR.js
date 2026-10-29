import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./kbd-HaLvi1oh.js";var i,a,o,s,c,l;function u(){return(u=e((()=>{n(),i=t(),a={id:`components-tags-kbd`,title:`Components/Data Display/Kbd`,component:r,tags:[`autodocs`],args:{children:`⌘ K`}},o={render:()=>(0,i.jsxs)(`div`,{className:`stack`,children:[(0,i.jsxs)(`div`,{className:`row`,children:[(0,i.jsx)(`span`,{className:`muted`,children:`Search commands`}),(0,i.jsx)(r,{"aria-label":`Command K`,children:`⌘ K`})]}),(0,i.jsxs)(`div`,{className:`row`,children:[(0,i.jsx)(`span`,{className:`muted`,children:`Open record`}),(0,i.jsx)(r,{size:`md`,"aria-label":`Enter`,children:`↵`})]})]})},s={render:()=>(0,i.jsx)(`div`,{className:`story-layout stack`,style:{maxWidth:400},children:[[`Search records`,`/`],[`Next record`,`J`],[`Previous record`,`K`],[`Assign to me`,`A`],[`Close detail`,`Esc`]].map(([e,t])=>(0,i.jsxs)(`div`,{className:`between`,children:[(0,i.jsx)(`span`,{children:e}),(0,i.jsx)(r,{children:t})]},e))})},c={args:{children:`⌘ K`,size:`sm`,"aria-label":`Command K`},argTypes:{children:{control:`text`,name:`Keys`},size:{control:`select`,options:[`sm`,`md`]},"aria-label":{control:`text`,name:`Accessible label`}},render:e=>(0,i.jsx)(r,{...e})},l=[`Sizes`,`WorkspaceShortcuts`,`Playground`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="stack">
      <div className="row">
        <span className="muted">Search commands</span>
        <Kbd aria-label="Command K">⌘ K</Kbd>
      </div>
      <div className="row">
        <span className="muted">Open record</span>
        <Kbd size="md" aria-label="Enter">
          ↵
        </Kbd>
      </div>
    </div>
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-layout stack" style={{
    maxWidth: 400
  }}>
      {[['Search records', '/'], ['Next record', 'J'], ['Previous record', 'K'], ['Assign to me', 'A'], ['Close detail', 'Esc']].map(([label, shortcut]) => <div className="between" key={label}>
          <span>{label}</span>
          <Kbd>{shortcut}</Kbd>
        </div>)}
    </div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: '⌘ K',
    size: 'sm',
    'aria-label': 'Command K'
  },
  argTypes: {
    children: {
      control: 'text',
      name: 'Keys'
    },
    size: {
      control: 'select',
      options: ['sm', 'md']
    },
    'aria-label': {
      control: 'text',
      name: 'Accessible label'
    }
  },
  render: args => <Kbd {...args} />
}`,...c.parameters?.docs?.source}}}})))()}u();export{c as Playground,o as Sizes,s as WorkspaceShortcuts,l as __namedExportsOrder,a as default};