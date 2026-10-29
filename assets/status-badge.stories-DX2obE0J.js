import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,r,t as i}from"./status-badge-B7EupEJC.js";var a,o,s,c,l;function u(){return(u=e((()=>{r(),a=t(),o={id:`components-tags-statusbadge`,title:`Components/Data Display/StatusBadge`,component:i,subcomponents:{StatusDot:n}},s={render:()=>(0,a.jsxs)(`div`,{className:`stack`,children:[(0,a.jsx)(`div`,{className:`row`,children:[`new`,`in-review`,`in-progress`,`completed`,`cancelled`].map(e=>(0,a.jsx)(i,{status:e},e))}),(0,a.jsx)(`div`,{className:`row`,children:[`new`,`in-review`,`in-progress`,`completed`,`cancelled`].map(e=>(0,a.jsx)(n,{status:e},e))})]})},c={args:{status:`in-progress`},argTypes:{status:{control:`select`,options:[`new`,`in-review`,`in-progress`,`completed`,`cancelled`]}},render:e=>(0,a.jsx)(i,{...e})},l=[`Matrix`,`Playground`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="stack">
      <div className="row">
        {(['new', 'in-review', 'in-progress', 'completed', 'cancelled'] as const).map(status => <StatusBadge status={status} key={status} />)}
      </div>
      <div className="row">
        {(['new', 'in-review', 'in-progress', 'completed', 'cancelled'] as const).map(status => <StatusDot status={status} key={status} />)}
      </div>
    </div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'in-progress'
  },
  argTypes: {
    status: {
      control: 'select',
      options: ['new', 'in-review', 'in-progress', 'completed', 'cancelled']
    }
  },
  render: args => <StatusBadge {...args} />
}`,...c.parameters?.docs?.source}}}})))()}u();export{s as Matrix,c as Playground,l as __namedExportsOrder,o as default};