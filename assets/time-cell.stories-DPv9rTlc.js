import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{d as n,u as r}from"./data-grid-cells-C3B7FYvX.js";var i,a,o,s,c,l;function u(){return(u=e((()=>{n(),i=t(),a=Date.parse(`2026-10-06T12:00:00Z`),o={id:`components-data-grid-time-cell`,title:`Components/Data Display/Data grid/Time cell`,component:r,tags:[`autodocs`],args:{value:`2026-10-06T11:57:00Z`,now:a}},s={render:()=>(0,i.jsx)(`div`,{className:`story-layout stack`,style:{maxWidth:500},children:[[`Last event`,`2026-10-06T11:59:42Z`],[`First seen`,`2026-10-06T09:14:00Z`],[`Rule enabled`,`2026-10-02T10:00:00Z`],[`Scheduled review`,`2026-10-06T14:00:00Z`]].map(([e,t])=>(0,i.jsxs)(`div`,{className:`between`,children:[(0,i.jsx)(`span`,{children:e}),(0,i.jsx)(r,{value:t,now:a})]},e))})},c={args:{timeZone:`Europe/Athens`}},l=[`Matrix`,`ViewerTimeZone`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-layout stack" style={{
    maxWidth: 500
  }}>
      {[['Last event', '2026-10-06T11:59:42Z'], ['First seen', '2026-10-06T09:14:00Z'], ['Rule enabled', '2026-10-02T10:00:00Z'], ['Scheduled review', '2026-10-06T14:00:00Z']].map(([label, value]) => <div className="between" key={label}>
          <span>{label}</span>
          <TimeCell value={value} now={now} />
        </div>)}
    </div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    timeZone: 'Europe/Athens'
  }
}`,...c.parameters?.docs?.source}}}})))()}u();export{s as Matrix,c as ViewerTimeZone,l as __namedExportsOrder,o as default};