import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./severity-badge-DyfgzVKK.js";var i,a,o,s,c;function l(){return(l=e((()=>{n(),i=t(),a={id:`components-tags-severitybadge`,title:`Components/Data Display/SeverityBadge`,component:r},o={render:()=>(0,i.jsx)(`div`,{className:`stack`,children:[!1,!0].map(e=>(0,i.jsx)(`div`,{className:`row`,children:[`critical`,`high`,`medium`,`low`,`info`].map(t=>(0,i.jsx)(r,{severity:t,compact:e},t))},String(e)))})},s={args:{severity:`high`,compact:!1},argTypes:{severity:{control:`select`,options:[`critical`,`high`,`medium`,`low`,`info`]},compact:{control:`boolean`}},render:e=>(0,i.jsx)(r,{...e})},c=[`Matrix`,`Playground`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="stack">
      {[false, true].map(compact => <div key={String(compact)} className="row">
          {(['critical', 'high', 'medium', 'low', 'info'] as const).map(severity => <SeverityBadge severity={severity} compact={compact} key={severity} />)}
        </div>)}
    </div>
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    severity: 'high',
    compact: false
  },
  argTypes: {
    severity: {
      control: 'select',
      options: ['critical', 'high', 'medium', 'low', 'info']
    },
    compact: {
      control: 'boolean'
    }
  },
  render: args => <SeverityBadge {...args} />
}`,...s.parameters?.docs?.source}}}})))()}l();export{o as Matrix,s as Playground,c as __namedExportsOrder,a as default};