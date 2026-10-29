import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./spinner-BqRgJL3W.js";var i,a,o,s,c,l,u;function d(){return(d=e((()=>{n(),i=t(),a={id:`components-feedback-spinner`,title:`Components/Feedback/Spinner`,component:r,tags:[`autodocs`],args:{label:`Loading record details`}},o={render:()=>(0,i.jsx)(`div`,{className:`row`,style:{gap:`var(--space-8)`},children:[`sm`,`md`,`lg`].map(e=>(0,i.jsxs)(`div`,{className:`stack`,style:{alignItems:`center`},children:[(0,i.jsx)(r,{size:e,label:`Loading ${e} record preview`}),(0,i.jsx)(`span`,{className:`muted`,children:e})]},e))})},s={render:()=>(0,i.jsxs)(`div`,{className:`story-layout row`,role:`status`,children:[(0,i.jsx)(r,{}),(0,i.jsx)(`span`,{children:`Correlating 1,284 events across 3 sources…`})]})},c={render:()=>(0,i.jsxs)(`div`,{className:`row`,style:{color:`var(--color-ai-fg)`},role:`status`,children:[(0,i.jsx)(r,{size:`sm`}),(0,i.jsx)(`span`,{children:`Preparing an project summary…`})]})},l={args:{size:`md`,label:`Loading records`},argTypes:{size:{control:`select`,options:[`sm`,`md`,`lg`]}}},u=[`Sizes`,`InlineStatus`,`AiIntent`,`Playground`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="row" style={{
    gap: 'var(--space-8)'
  }}>
      {(['sm', 'md', 'lg'] as const).map(size => <div key={size} className="stack" style={{
      alignItems: 'center'
    }}>
          <Spinner size={size} label={\`Loading \${size} record preview\`} />
          <span className="muted">{size}</span>
        </div>)}
    </div>
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-layout row" role="status">
      <Spinner />
      <span>Correlating 1,284 events across 3 sources…</span>
    </div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="row" style={{
    color: 'var(--color-ai-fg)'
  }} role="status">
      <Spinner size="sm" />
      <span>Preparing an project summary…</span>
    </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    label: 'Loading records'
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    }
  }
}`,...l.parameters?.docs?.source}}}})))()}d();export{c as AiIntent,s as InlineStatus,l as Playground,o as Sizes,u as __namedExportsOrder,a as default};