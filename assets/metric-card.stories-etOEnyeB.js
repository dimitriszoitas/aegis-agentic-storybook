import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,r,s as i}from"./fixtures-BNPjpq8z.js";import{n as a,t as o}from"./metric-card-CCeHE5WL.js";var s,c,l,u,d,f;function p(){return(p=e((()=>{a(),r(),s=t(),c={id:`components-charts-metric-card`,title:`Components/Data Display/Metric card`,component:o,tags:[`autodocs`],args:{label:`Open records`,value:86}},l={render:()=>(0,s.jsxs)(`div`,{className:`story-grid`,style:{maxWidth:1400},children:[(0,s.jsx)(o,{label:`Open records`,value:n.filter(e=>![`completed`,`cancelled`].includes(e.status)).length,delta:12.4,trendIsPositive:!1,sparkline:i.slice(-24).map(e=>e.total)}),(0,s.jsx)(o,{label:`Critical records`,intent:`destroy`,value:n.filter(e=>e.severity===`critical`).length,delta:-8.3,trendIsPositive:!0,sparkline:i.slice(-24).map(e=>e.critical)}),(0,s.jsx)(o,{label:`Mean time to resolution`,intent:`success`,value:24,unit:`min`,delta:-18.2,trendIsPositive:!0,sparkline:[52,48,46,49,41,38,42,37,33,35,31,28,26,24]}),(0,s.jsx)(o,{label:`Events per second`,value:8421,delta:4.8,trendIsPositive:!0,sparkline:i.slice(-24).map(e=>e.total)})]})},u={render:()=>(0,s.jsxs)(`div`,{className:`story-grid`,children:[(0,s.jsx)(o,{label:`Open records`,value:0,delta:0}),(0,s.jsx)(o,{label:`Workflow coverage`,value:.984,format:{style:`percent`,maximumFractionDigits:1},delta:2.1}),(0,s.jsx)(o,{label:`Events awaiting review`,value:1284}),(0,s.jsx)(o,{label:`Critical records`,value:0,loading:!0})]})},d={args:{label:`Completed projects`,value:1284,unit:`projects`,delta:12.4,deltaLabel:`vs previous month`,trendIsPositive:!0,loading:!1,intent:`function`,sparklineVariant:`line`,sparkline:[3,5,4,8,7,11,14],sparklineLabel:`Completed projects over seven days`},argTypes:{intent:{control:`select`,options:[`function`,`ai`,`success`,`warning`,`destroy`]},sparklineVariant:{control:`select`,options:[`line`,`area`,`bar`]},sparkline:{control:`object`},format:{control:`object`}},render:e=>(0,s.jsx)(`div`,{style:{width:`min(100%, 420px)`},children:(0,s.jsx)(o,{...e})})},f=[`ConsoleMetrics`,`States`,`Playground`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-grid" style={{
    maxWidth: 1400
  }}>
      <MetricCard label="Open records" value={records.filter(record => !['completed', 'cancelled'].includes(record.status)).length} delta={12.4} trendIsPositive={false} sparkline={timeSeries.slice(-24).map(bucket => bucket.total)} />
      <MetricCard label="Critical records" intent="destroy" value={records.filter(record => record.severity === 'critical').length} delta={-8.3} trendIsPositive sparkline={timeSeries.slice(-24).map(bucket => bucket.critical)} />
      <MetricCard label="Mean time to resolution" intent="success" value={24} unit="min" delta={-18.2} trendIsPositive sparkline={[52, 48, 46, 49, 41, 38, 42, 37, 33, 35, 31, 28, 26, 24]} />
      <MetricCard label="Events per second" value={8421} delta={4.8} trendIsPositive sparkline={timeSeries.slice(-24).map(bucket => bucket.total)} />
    </div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-grid">
      <MetricCard label="Open records" value={0} delta={0} />
      <MetricCard label="Workflow coverage" value={0.984} format={{
      style: 'percent',
      maximumFractionDigits: 1
    }} delta={2.1} />
      <MetricCard label="Events awaiting review" value={1284} />
      <MetricCard label="Critical records" value={0} loading />
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Completed projects',
    value: 1284,
    unit: 'projects',
    delta: 12.4,
    deltaLabel: 'vs previous month',
    trendIsPositive: true,
    loading: false,
    intent: 'function',
    sparklineVariant: 'line',
    sparkline: [3, 5, 4, 8, 7, 11, 14],
    sparklineLabel: 'Completed projects over seven days'
  },
  argTypes: {
    intent: {
      control: 'select',
      options: ['function', 'ai', 'success', 'warning', 'destroy']
    },
    sparklineVariant: {
      control: 'select',
      options: ['line', 'area', 'bar']
    },
    sparkline: {
      control: 'object'
    },
    format: {
      control: 'object'
    }
  },
  render: args => <div style={{
    width: 'min(100%, 420px)'
  }}>
      <MetricCard {...args} />
    </div>
}`,...d.parameters?.docs?.source}}}})))()}p();export{l as ConsoleMetrics,d as Playground,u as States,f as __namedExportsOrder,c as default};