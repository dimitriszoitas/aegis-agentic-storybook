import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./count-badge-CcYqrqCd.js";var i,a,o,s,c,l;function u(){return(u=e((()=>{n(),i=t(),a={id:`components-tags-countbadge`,title:`Components/Data Display/CountBadge`,component:r},o={render:()=>(0,i.jsx)(`div`,{className:`stack`,children:[`default`,`inverted`].map(e=>(0,i.jsxs)(`section`,{className:`stack`,children:[(0,i.jsx)(`h3`,{children:e==="default"?`Default`:`Inverted`}),(0,i.jsx)(`div`,{className:`row`,children:[0,8,48,150].map(t=>(0,i.jsx)(r,{count:t,label:`open records`,variant:e},t))})]},e))})},s={args:{count:48,label:`open records`,variant:`inverted`}},c={render:()=>(0,i.jsx)(`div`,{className:`row`,children:[1,8,48,150].map(e=>(0,i.jsx)(r,{count:e,label:`unread notifications`,size:`sm`,variant:`inverted`},e))})},l=[`Matrix`,`Inverted`,`Small`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="stack">
      {(['default', 'inverted'] as const).map(variant => <section className="stack" key={variant}>
          <h3>{variant === 'default' ? 'Default' : 'Inverted'}</h3>
          <div className="row">
            {[0, 8, 48, 150].map(count => <CountBadge count={count} label="open records" variant={variant} key={count} />)}
          </div>
        </section>)}
    </div>
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    count: 48,
    label: 'open records',
    variant: 'inverted'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="row">
      {[1, 8, 48, 150].map(count => <CountBadge count={count} label="unread notifications" size="sm" variant="inverted" key={count} />)}
    </div>
}`,...c.parameters?.docs?.source}}}})))()}u();export{s as Inverted,o as Matrix,c as Small,l as __namedExportsOrder,a as default};