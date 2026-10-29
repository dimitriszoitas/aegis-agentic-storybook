import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,r}from"./fixtures-BNPjpq8z.js";import{s as i,u as a}from"./charts-BvBf73JO.js";var o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{a(),r(),o=t(),s=[`critical`,`high`,`medium`,`low`,`info`].map(e=>({name:e[0].toUpperCase()+e.slice(1),value:n.filter(t=>t.severity===e).length,color:e})),c={id:`components-charts-donut-chart`,title:`Components/Data Visualization/Donut chart`,component:i,tags:[`autodocs`],args:{title:`Record priority distribution`,description:`150 records · Last 24 hours`,data:s,showDataTable:!0}},l={},u={args:{title:`Record sources`,data:[`Projects`,`Customers`,`Billing`,`Workspace`].map(e=>({name:e,value:n.filter(t=>t.source===e).length}))}},d={args:{title:`Events by source`,description:`Six categorical colors with readable labels and matching legend markers`,totalLabel:`Total events`,data:[{name:`Projects`,value:320},{name:`Customers`,value:250},{name:`Network`,value:190},{name:`Cloud`,value:160},{name:`Email`,value:120},{name:`Application`,value:90}]}},f={render:e=>(0,o.jsxs)(`div`,{className:`story-grid`,children:[(0,o.jsx)(i,{...e,loading:!0}),(0,o.jsx)(i,{...e,data:[]})]})},p=[`SeverityDistribution`,`Sources`,`CategoricalPalette`,`States`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Record sources',
    data: ['Projects', 'Customers', 'Billing', 'Workspace'].map(source => ({
      name: source,
      value: records.filter(record => record.source === source).length
    }))
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Events by source',
    description: 'Six categorical colors with readable labels and matching legend markers',
    totalLabel: 'Total events',
    data: [{
      name: 'Projects',
      value: 320
    }, {
      name: 'Customers',
      value: 250
    }, {
      name: 'Network',
      value: 190
    }, {
      name: 'Cloud',
      value: 160
    }, {
      name: 'Email',
      value: 120
    }, {
      name: 'Application',
      value: 90
    }]
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <div className="story-grid">
      <DonutChart {...args} loading />
      <DonutChart {...args} data={[]} />
    </div>
}`,...f.parameters?.docs?.source}}}})))()}m();export{d as CategoricalPalette,l as SeverityDistribution,u as Sources,f as States,p as __namedExportsOrder,c as default};