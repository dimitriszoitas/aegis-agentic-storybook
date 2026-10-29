import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{r as n,s as r}from"./fixtures-BNPjpq8z.js";import{c as i,u as a}from"./charts-Dkm_Pm5d.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{a(),n(),o=t(),s={id:`components-charts-line-chart`,title:`Components/Data Visualization/Line chart`,component:i,tags:[`autodocs`],args:{title:`High-priority record activity`,description:`Critical and high-severity events · UTC`,data:r,series:[{key:`critical`,label:`Critical`,color:`critical`},{key:`high`,label:`High`,color:`high`}],showDataTable:!0}},c={},l={args:{title:`All workspace events`,series:[{key:`total`,label:`Events`,color:`function`}]}},u={render:e=>(0,o.jsxs)(`div`,{className:`story-grid`,children:[(0,o.jsx)(i,{...e,loading:!0}),(0,o.jsx)(i,{...e,data:[]})]})},d=[`MultipleSeries`,`SingleSeries`,`States`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'All workspace events',
    series: [{
      key: 'total',
      label: 'Events',
      color: 'function'
    }]
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <div className="story-grid">
      <LineChart {...args} loading />
      <LineChart {...args} data={[]} />
    </div>
}`,...u.parameters?.docs?.source}}}})))()}f();export{c as MultipleSeries,l as SingleSeries,u as States,d as __namedExportsOrder,s as default};