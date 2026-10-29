import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{c as n,d as r}from"./data-grid-cells-CBMmOMnX.js";var i,a,o,s,c;function l(){return(l=e((()=>{r(),i=t(),a={id:`components-data-grid-status-cell`,title:`Components/Data Display/Data grid/Status cell`,component:n,tags:[`autodocs`],args:{status:`new`}},o={render:()=>(0,i.jsx)(`div`,{className:`row`,children:[`new`,`in-review`,`in-progress`,`completed`,`cancelled`].map(e=>(0,i.jsx)(n,{status:e},e))})},s={args:{status:`new`},argTypes:{status:{control:`select`,options:[`new`,`in-review`,`in-progress`,`completed`,`cancelled`]}}},c=[`Matrix`,`Playground`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="row">
      {(['new', 'in-review', 'in-progress', 'completed', 'cancelled'] as const).map(status => <StatusCell key={status} status={status} />)}
    </div>
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'new'
  },
  argTypes: {
    status: {
      control: 'select',
      options: ['new', 'in-review', 'in-progress', 'completed', 'cancelled']
    }
  }
}`,...s.parameters?.docs?.source}}}})))()}l();export{o as Matrix,s as Playground,c as __namedExportsOrder,a as default};