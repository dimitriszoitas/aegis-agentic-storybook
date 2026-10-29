import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{d as n,o as r}from"./data-grid-cells-C3B7FYvX.js";var i,a,o,s,c;function l(){return(l=e((()=>{n(),i=t(),a={id:`components-data-grid-severity-cell`,title:`Components/Data Display/Data grid/Severity cell`,component:r,tags:[`autodocs`],args:{severity:`critical`}},o={render:()=>(0,i.jsx)(`div`,{className:`stack`,children:[!1,!0].map(e=>(0,i.jsx)(`div`,{className:`row`,children:[`critical`,`high`,`medium`,`low`,`info`].map(t=>(0,i.jsx)(r,{severity:t,compact:e},t))},String(e)))})},s={args:{severity:`high`,compact:!1},argTypes:{severity:{control:`select`,options:[`critical`,`high`,`medium`,`low`,`info`]}}},c=[`Matrix`,`Playground`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="stack">
      {[false, true].map(compact => <div className="row" key={String(compact)}>
          {(['critical', 'high', 'medium', 'low', 'info'] as const).map(severity => <SeverityCell severity={severity} compact={compact} key={severity} />)}
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
    }
  }
}`,...s.parameters?.docs?.source}}}})))()}l();export{o as Matrix,s as Playground,c as __namedExportsOrder,a as default};