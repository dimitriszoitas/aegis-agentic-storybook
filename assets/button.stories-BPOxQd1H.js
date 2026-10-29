import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{At as r,Ht as i,mt as a,o}from"./icon-CeMrBssx.js";import{n as s,t as c}from"./button-BpCMuPJ8.js";var l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{l=t(),i(),s(),u=n(),d={id:`components-actions-button`,title:`Components/Triggers/Button`,component:c,args:{children:`Create project`,intent:`function`},parameters:{docs:{description:{component:`Primary actions are filled, secondary actions have an outline, tertiary actions use a soft tint, and ghost actions show only their label and icon. All four support neutral, function, destroy, and AI intents. Buttons use 4/5/6px corners at 28/34/40px heights, with optical padding on icon sides. Loading keeps the original button width.`}}}},f={render:()=>(0,u.jsx)(`div`,{className:`stack`,children:[`sm`,`md`,`lg`].map(e=>(0,u.jsxs)(`section`,{className:`story-layout stack`,children:[(0,u.jsx)(`h3`,{children:e===`sm`?`Compact actions`:e===`md`?`Default actions`:`Prominent actions`}),[`primary`,`secondary`,`tertiary`,`ghost`].map(t=>(0,u.jsxs)(`div`,{className:`row`,children:[(0,u.jsx)(`span`,{style:{width:72,color:`var(--color-text-secondary)`},children:t}),[`default`,`function`,`destroy`,`ai`].map(n=>(0,u.jsx)(c,{size:e,emphasis:t,intent:n,leadingIcon:n===`ai`?(0,u.jsx)(r,{}):(0,u.jsx)(a,{}),children:n===`ai`?`Ask Aegis`:n===`destroy`?`Delete project`:n===`function`?`Create project`:`View records`},n))]},t))]},e))})},p={render:()=>(0,u.jsx)(`div`,{className:`stack`,children:[`primary`,`secondary`,`tertiary`,`ghost`].map(e=>(0,u.jsxs)(`section`,{className:`story-layout stack`,children:[(0,u.jsx)(`h3`,{children:e}),(0,u.jsxs)(`div`,{className:`row`,children:[(0,u.jsx)(c,{emphasis:e,intent:`function`,leadingIcon:(0,u.jsx)(a,{}),children:`Create project`}),(0,u.jsx)(c,{emphasis:e,intent:`function`,disabled:!0,leadingIcon:(0,u.jsx)(a,{}),children:`Create project`}),(0,u.jsx)(c,{emphasis:e,intent:`function`,loading:!0,leadingIcon:(0,u.jsx)(a,{}),children:`Create project`}),(0,u.jsx)(c,{emphasis:e,intent:`function`,loading:!0,children:`Create project`}),(0,u.jsx)(c,{emphasis:e,intent:`ai`,loading:!0,leadingIcon:(0,u.jsx)(r,{}),children:`Summarize records`})]})]},e))})},m={parameters:{docs:{description:{story:`Text sides keep 8/12/16px padding at small/medium/large sizes. Icon sides use 6/8/12px. Both icon slots reduce their own side; loading preserves those slots and the full button footprint.`}}},render:()=>(0,u.jsx)(`div`,{className:`stack`,children:[`sm`,`md`,`lg`].map(e=>(0,u.jsxs)(`section`,{className:`story-layout stack`,children:[(0,u.jsx)(`h3`,{children:e===`sm`?`Small · 28px`:e===`md`?`Medium · 34px`:`Large · 40px`}),(0,u.jsxs)(`div`,{className:`row`,children:[(0,u.jsx)(c,{size:e,emphasis:`tertiary`,children:`Review records`}),(0,u.jsx)(c,{size:e,emphasis:`tertiary`,leadingIcon:(0,u.jsx)(a,{}),children:`Review records`}),(0,u.jsx)(c,{size:e,emphasis:`tertiary`,trailingIcon:(0,u.jsx)(o,{}),children:`Review records`}),(0,u.jsx)(c,{size:e,emphasis:`tertiary`,leadingIcon:(0,u.jsx)(a,{}),trailingIcon:(0,u.jsx)(o,{}),children:`Review records`})]}),(0,u.jsxs)(`div`,{className:`row`,children:[(0,u.jsx)(c,{size:e,emphasis:`tertiary`,loading:!0,children:`Review records`}),(0,u.jsx)(c,{size:e,emphasis:`tertiary`,loading:!0,leadingIcon:(0,u.jsx)(a,{}),children:`Review records`}),(0,u.jsx)(c,{size:e,emphasis:`tertiary`,loading:!0,trailingIcon:(0,u.jsx)(o,{}),children:`Review records`}),(0,u.jsx)(c,{size:e,emphasis:`tertiary`,loading:!0,leadingIcon:(0,u.jsx)(a,{}),trailingIcon:(0,u.jsx)(o,{}),children:`Review records`})]})]},e))})},h={none:void 0,plus:(0,u.jsx)(a,{}),arrow:(0,u.jsx)(o,{}),sparkles:(0,u.jsx)(r,{})},g={args:{children:`Create project`,size:`md`,intent:`function`,emphasis:`primary`,disabled:!1,loading:!1,leadingIcon:`none`,trailingIcon:`none`},argTypes:{children:{control:`text`,name:`Label`},size:{control:`select`,options:[`sm`,`md`,`lg`]},intent:{control:`select`,options:[`default`,`function`,`destroy`,`ai`]},emphasis:{control:`select`,options:[`primary`,`secondary`,`tertiary`,`ghost`]},disabled:{control:`boolean`},loading:{control:`boolean`},leadingIcon:{control:`select`,options:[`none`,`plus`,`arrow`,`sparkles`]},trailingIcon:{control:`select`,options:[`none`,`plus`,`arrow`,`sparkles`]}},render:function({leadingIcon:e,trailingIcon:t,...n}){let[r,i]=(0,l.useState)(0);return(0,u.jsxs)(`div`,{className:`stack`,style:{alignItems:`center`},children:[(0,u.jsx)(c,{...n,leadingIcon:h[e],trailingIcon:h[t],onClick:()=>i(e=>e+1)}),(0,u.jsx)(`p`,{className:`sr-only`,role:`status`,children:r?`${r} ${r===1?`action`:`actions`} completed locally`:`Activate the button to run the example action.`})]})}},_=[`Matrix`,`States`,`IconSpacing`,`Playground`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className="stack">
      {(['sm', 'md', 'lg'] as const).map(size => <section className="story-layout stack" key={size}>
          <h3>
            {size === 'sm' ? 'Compact actions' : size === 'md' ? 'Default actions' : 'Prominent actions'}
          </h3>
          {(['primary', 'secondary', 'tertiary', 'ghost'] as const).map(emphasis => <div className="row" key={emphasis}>
              <span style={{
          width: 72,
          color: 'var(--color-text-secondary)'
        }}>{emphasis}</span>
              {(['default', 'function', 'destroy', 'ai'] as const).map(intent => <Button key={intent} size={size} emphasis={emphasis} intent={intent} leadingIcon={intent === 'ai' ? <Sparkles /> : <Plus />}>
                  {intent === 'ai' ? 'Ask Aegis' : intent === 'destroy' ? 'Delete project' : intent === 'function' ? 'Create project' : 'View records'}
                </Button>)}
            </div>)}
        </section>)}
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="stack">
      {(['primary', 'secondary', 'tertiary', 'ghost'] as const).map(emphasis => <section className="story-layout stack" key={emphasis}>
          <h3>{emphasis}</h3>
          <div className="row">
            <Button emphasis={emphasis} intent="function" leadingIcon={<Plus />}>
              Create project
            </Button>
            <Button emphasis={emphasis} intent="function" disabled leadingIcon={<Plus />}>
              Create project
            </Button>
            <Button emphasis={emphasis} intent="function" loading leadingIcon={<Plus />}>
              Create project
            </Button>
            <Button emphasis={emphasis} intent="function" loading>
              Create project
            </Button>
            <Button emphasis={emphasis} intent="ai" loading leadingIcon={<Sparkles />}>
              Summarize records
            </Button>
          </div>
        </section>)}
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Text sides keep 8/12/16px padding at small/medium/large sizes. Icon sides use 6/8/12px. Both icon slots reduce their own side; loading preserves those slots and the full button footprint.'
      }
    }
  },
  render: () => <div className="stack">
      {(['sm', 'md', 'lg'] as const).map(size => <section className="story-layout stack" key={size}>
          <h3>
            {size === 'sm' ? 'Small · 28px' : size === 'md' ? 'Medium · 34px' : 'Large · 40px'}
          </h3>
          <div className="row">
            <Button size={size} emphasis="tertiary">
              Review records
            </Button>
            <Button size={size} emphasis="tertiary" leadingIcon={<Plus />}>
              Review records
            </Button>
            <Button size={size} emphasis="tertiary" trailingIcon={<ArrowRight />}>
              Review records
            </Button>
            <Button size={size} emphasis="tertiary" leadingIcon={<Plus />} trailingIcon={<ArrowRight />}>
              Review records
            </Button>
          </div>
          <div className="row">
            <Button size={size} emphasis="tertiary" loading>
              Review records
            </Button>
            <Button size={size} emphasis="tertiary" loading leadingIcon={<Plus />}>
              Review records
            </Button>
            <Button size={size} emphasis="tertiary" loading trailingIcon={<ArrowRight />}>
              Review records
            </Button>
            <Button size={size} emphasis="tertiary" loading leadingIcon={<Plus />} trailingIcon={<ArrowRight />}>
              Review records
            </Button>
          </div>
        </section>)}
    </div>
}`,...m.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Create project',
    size: 'md',
    intent: 'function',
    emphasis: 'primary',
    disabled: false,
    loading: false,
    leadingIcon: 'none',
    trailingIcon: 'none'
  },
  argTypes: {
    children: {
      control: 'text',
      name: 'Label'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    },
    intent: {
      control: 'select',
      options: ['default', 'function', 'destroy', 'ai']
    },
    emphasis: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'ghost']
    },
    disabled: {
      control: 'boolean'
    },
    loading: {
      control: 'boolean'
    },
    leadingIcon: {
      control: 'select',
      options: ['none', 'plus', 'arrow', 'sparkles']
    },
    trailingIcon: {
      control: 'select',
      options: ['none', 'plus', 'arrow', 'sparkles']
    }
  },
  render: function Playground({
    leadingIcon,
    trailingIcon,
    ...args
  }) {
    const [count, setCount] = useState(0);
    return <div className="stack" style={{
      alignItems: 'center'
    }}>
        <Button {...args} leadingIcon={playgroundIcons[leadingIcon]} trailingIcon={playgroundIcons[trailingIcon]} onClick={() => setCount(value => value + 1)} />
        <p className="sr-only" role="status">
          {count ? \`\${count} \${count === 1 ? 'action' : 'actions'} completed locally\` : 'Activate the button to run the example action.'}
        </p>
      </div>;
  }
}`,...g.parameters?.docs?.source}}}})))()}v();export{m as IconSpacing,f as Matrix,g as Playground,p as States,_ as __namedExportsOrder,d as default};