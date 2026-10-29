import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,r as n,s as r}from"./fixtures-BNPjpq8z.js";import{n as i,u as a}from"./charts-CKWchB_c.js";var o,s,c,l,u;function d(){return(d=e((()=>{a(),n(),o=[`Projects`,`Customers`,`Billing`,`Workspace`].map(e=>({label:e,open:t.filter(t=>t.source===e&&![`completed`,`cancelled`].includes(t.status)).length,completed:t.filter(t=>t.source===e&&[`completed`,`cancelled`].includes(t.status)).length})),s={id:`components-charts-bar-chart`,title:`Components/Data Visualization/Bar chart`,component:i,tags:[`autodocs`],args:{title:`Record workload by source`,description:`Open and completed reviews`,data:o,series:[{key:`open`,label:`Open records`,color:`function`},{key:`completed`,label:`Completed`,color:`success`}]}},c={},l={args:{title:`Severity stacks`,description:`Event activity by half-hour bucket`,data:r,series:[{key:`info`,label:`Info`,color:`info`},{key:`low`,label:`Low`,color:`low`},{key:`medium`,label:`Medium`,color:`medium`},{key:`high`,label:`High`,color:`high`},{key:`critical`,label:`Critical`,color:`critical`}],stacked:!0}},u=[`GroupedSources`,`StackedSeverity`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Severity stacks',
    description: 'Event activity by half-hour bucket',
    data: timeSeries,
    series: [{
      key: 'info',
      label: 'Info',
      color: 'info'
    }, {
      key: 'low',
      label: 'Low',
      color: 'low'
    }, {
      key: 'medium',
      label: 'Medium',
      color: 'medium'
    }, {
      key: 'high',
      label: 'High',
      color: 'high'
    }, {
      key: 'critical',
      label: 'Critical',
      color: 'critical'
    }],
    stacked: true
  }
}`,...l.parameters?.docs?.source}}}})))()}d();export{c as GroupedSources,l as StackedSeverity,u as __namedExportsOrder,s as default};