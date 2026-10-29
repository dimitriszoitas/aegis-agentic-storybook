import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{o as n,r}from"./fixtures-BNPjpq8z.js";import{n as i,t as a}from"./relative-time-BYIF5Fyd.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{i(),r(),o=t(),s={id:`components-data-relativetime`,title:`Components/Data Display/RelativeTime`,component:a,tags:[`autodocs`],args:{value:n-36e4,now:n}},c={render:()=>(0,o.jsx)(`div`,{className:`story-layout stack`,children:[0,45e3,36e4,36e5,864e5,2592e6,-72e5].map(e=>(0,o.jsxs)(`div`,{className:`row`,children:[(0,o.jsx)(a,{value:n-e,now:n}),(0,o.jsx)(`span`,{className:`muted`,children:`·`}),(0,o.jsx)(a,{value:n-e,now:n,compact:!0})]},e))})},l={args:{value:new Date().toISOString(),now:void 0,updateInterval:1e3}},u={args:{value:`unavailable`}},d=[`Matrix`,`AutoUpdating`,`InvalidTimestamp`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-layout stack">
      {[0, 45000, 360000, 3600000, 86400000, 2592000000, -7200000].map(offset => <div className="row" key={offset}>
          <RelativeTime value={referenceTime - offset} now={referenceTime} />
          <span className="muted">·</span>
          <RelativeTime value={referenceTime - offset} now={referenceTime} compact />
        </div>)}
    </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    value: new Date().toISOString(),
    now: undefined,
    updateInterval: 1000
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'unavailable'
  }
}`,...u.parameters?.docs?.source}}}})))()}f();export{l as AutoUpdating,u as InvalidTimestamp,c as Matrix,d as __namedExportsOrder,s as default};