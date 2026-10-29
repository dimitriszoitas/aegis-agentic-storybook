import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{At as r,Ft as i,Ht as a,kt as o}from"./icon-BRrwAOkO.js";import{n as s,t as c}from"./icon-button-CRcnspx2.js";var l,u,d,f,p,m,h;function g(){return(g=e((()=>{l=t(),a(),s(),u=n(),d={id:`components-actions-iconbutton`,title:`Components/Triggers/IconButton`,component:c},f={render:()=>(0,u.jsx)(`div`,{className:`stack`,children:[`sm`,`md`,`lg`].map(e=>(0,u.jsx)(`div`,{className:`row`,children:[`primary`,`secondary`,`tertiary`,`ghost`].flatMap(t=>[`default`,`function`,`destroy`,`ai`].map(n=>(0,u.jsx)(c,{size:e,emphasis:t,intent:n,"aria-label":n===`ai`?`Explain selected record`:n===`destroy`?`Delete project`:`Configure columns`,children:n===`ai`?(0,u.jsx)(r,{size:16}):n===`destroy`?(0,u.jsx)(i,{size:16}):(0,u.jsx)(o,{size:16})},t+n)))},e))})},p={render:()=>(0,u.jsxs)(`div`,{className:`row`,children:[(0,u.jsx)(c,{"aria-label":`Configure columns`,disabled:!0,children:(0,u.jsx)(o,{size:16})}),(0,u.jsx)(c,{"aria-label":`Summarizing records`,loading:!0,intent:`ai`,children:(0,u.jsx)(r,{size:16})})]})},m={args:{"aria-label":`Configure workspace`,size:`md`,emphasis:`secondary`,intent:`function`,tooltip:!0,disabled:!1,loading:!1},argTypes:{"aria-label":{control:`text`,name:`Accessible label`},size:{control:`select`,options:[`sm`,`md`,`lg`]},emphasis:{control:`select`,options:[`primary`,`secondary`,`tertiary`,`ghost`]},intent:{control:`select`,options:[`default`,`function`,`destroy`,`ai`]},tooltip:{control:`boolean`},disabled:{control:`boolean`},loading:{control:`boolean`}},render:function(e){let[t,n]=(0,l.useState)(0);return(0,u.jsxs)(`div`,{className:`stack`,children:[(0,u.jsx)(c,{...e,onClick:()=>n(e=>e+1),children:(0,u.jsx)(o,{})}),(0,u.jsx)(`p`,{className:`muted`,role:`status`,children:t?`Configured ${t} ${t===1?`time`:`times`}`:`Activate the button to configure the workspace.`})]})}},h=[`Matrix`,`States`,`Playground`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className="stack">
      {(['sm', 'md', 'lg'] as const).map(size => <div className="row" key={size}>
          {(['primary', 'secondary', 'tertiary', 'ghost'] as const).flatMap(emphasis => (['default', 'function', 'destroy', 'ai'] as const).map(intent => <IconButton key={emphasis + intent} size={size} emphasis={emphasis} intent={intent} aria-label={intent === 'ai' ? 'Explain selected record' : intent === 'destroy' ? 'Delete project' : 'Configure columns'}>
                {intent === 'ai' ? <Sparkles size={16} /> : intent === 'destroy' ? <Trash2 size={16} /> : <SlidersHorizontal size={16} />}
              </IconButton>))}
        </div>)}
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="row">
      <IconButton aria-label="Configure columns" disabled>
        <SlidersHorizontal size={16} />
      </IconButton>
      <IconButton aria-label="Summarizing records" loading intent="ai">
        <Sparkles size={16} />
      </IconButton>
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Configure workspace',
    size: 'md',
    emphasis: 'secondary',
    intent: 'function',
    tooltip: true,
    disabled: false,
    loading: false
  },
  argTypes: {
    'aria-label': {
      control: 'text',
      name: 'Accessible label'
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
    tooltip: {
      control: 'boolean'
    },
    disabled: {
      control: 'boolean'
    },
    loading: {
      control: 'boolean'
    }
  },
  render: function Playground(args) {
    const [count, setCount] = useState(0);
    return <div className="stack">
        <IconButton {...args} onClick={() => setCount(value => value + 1)}>
          <SlidersHorizontal />
        </IconButton>
        <p className="muted" role="status">
          {count ? \`Configured \${count} \${count === 1 ? 'time' : 'times'}\` : 'Activate the button to configure the workspace.'}
        </p>
      </div>;
  }
}`,...m.parameters?.docs?.source}}}})))()}g();export{f as Matrix,m as Playground,p as States,h as __namedExportsOrder,d as default};