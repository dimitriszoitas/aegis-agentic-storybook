import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./mini-bar-chart-vACTv_YY.js";import{n as i,t as a}from"./metric-card-Cs2VwvQL.js";import{n as o,t as s}from"./data-grid-DdDqPfvl.js";var c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{o(),i(),n(),c=t(),l=[12,18,14,26,21,34,28,42,31,48,39,54],u=[{id:`projects`,name:`Project updates`,total:367,values:l},{id:`workspace`,name:`Workspace events`,total:211,values:[8,14,19,16,23,18,28,22,17,15,18,13]},{id:`network`,name:`Network activity`,total:185,values:[24,18,21,16,12,19,14,10,16,13,12,10]}],d={id:`components-charts-mini-bar-chart`,title:`Components/Data Visualization/Mini bar chart`,component:r,tags:[`autodocs`],args:{data:l,label:`Events per hour over the last 12 hours; latest 54 events`},parameters:{docs:{description:{component:`A small bar chart for counts and activity in metric cards or dense tables. Bars share a zero baseline and use semantic colors. Like Sparkline, it has no axes, animation, tooltip, or focus target; provide an accessible label describing the measurement and period. Reuses Sparkline’s bar renderer.`}}}},f={},p={argTypes:{intent:{control:!1}},render:e=>(0,c.jsx)(`div`,{className:`row`,style:{gap:`var(--space-6)`},children:[`function`,`ai`,`success`,`warning`,`destroy`].map(t=>(0,c.jsxs)(`div`,{className:`stack`,children:[(0,c.jsx)(`span`,{className:`muted`,children:t}),(0,c.jsx)(r,{...e,intent:t})]},t))})},m={render:()=>(0,c.jsxs)(`div`,{className:`story-grid`,style:{maxWidth:960},children:[(0,c.jsx)(a,{label:`Evidence events`,value:367,sparkline:l,sparklineVariant:`bar`,sparklineLabel:`Evidence events per hour over the last 12 hours`}),(0,c.jsx)(a,{label:`Resolved records`,value:84,intent:`success`,sparkline:[3,5,4,8,6,9,7,10,6,8,7,11],sparklineVariant:`bar`,sparklineLabel:`Resolved records per hour over the last 12 hours`}),(0,c.jsx)(a,{label:`Critical records`,value:18,intent:`destroy`,sparkline:[1,0,2,1,3,0,2,1,4,1,2,1],sparklineVariant:`bar`,sparklineLabel:`Critical records per hour over the last 12 hours`})]})},h={render:()=>(0,c.jsx)(`div`,{style:{maxWidth:720},children:(0,c.jsx)(s,{data:u,getRowId:e=>e.id,label:`Event source activity`,noun:`sources`,enableSelection:!1,height:220,columns:[{accessorKey:`name`,header:`Source`,size:280},{accessorKey:`total`,header:`Events`,size:128,meta:{align:`right`}},{id:`activity`,header:`Last 12 hours`,size:180,cell:({row:e})=>(0,c.jsx)(r,{data:e.original.values,label:`${e.original.name} per hour over the last 12 hours`})}]})})},g={render:()=>(0,c.jsxs)(`div`,{className:`row`,style:{gap:`var(--space-6)`},children:[(0,c.jsx)(r,{data:[],loading:!0,label:`Event volume`}),(0,c.jsx)(r,{data:[],label:`No event data available`}),(0,c.jsx)(r,{data:[0,0,0,0],label:`No events in the last four hours`}),(0,c.jsx)(r,{data:[12],label:`12 events in the last hour`}),(0,c.jsx)(r,{data:[8,8,8,8],label:`Eight events in each of the last four hours`})]})},_=[`Default`,`Intents`,`InMetricCards`,`InTableCells`,`States`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  argTypes: {
    intent: {
      control: false
    }
  },
  render: args => <div className="row" style={{
    gap: 'var(--space-6)'
  }}>
      {(['function', 'ai', 'success', 'warning', 'destroy'] as const).map(intent => <div className="stack" key={intent}>
          <span className="muted">{intent}</span>
          <MiniBarChart {...args} intent={intent} />
        </div>)}
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-grid" style={{
    maxWidth: 960
  }}>
      <MetricCard label="Evidence events" value={367} sparkline={hourlyEvents} sparklineVariant="bar" sparklineLabel="Evidence events per hour over the last 12 hours" />
      <MetricCard label="Resolved records" value={84} intent="success" sparkline={[3, 5, 4, 8, 6, 9, 7, 10, 6, 8, 7, 11]} sparklineVariant="bar" sparklineLabel="Resolved records per hour over the last 12 hours" />
      <MetricCard label="Critical records" value={18} intent="destroy" sparkline={[1, 0, 2, 1, 3, 0, 2, 1, 4, 1, 2, 1]} sparklineVariant="bar" sparklineLabel="Critical records per hour over the last 12 hours" />
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 720
  }}>
      <DataGrid data={sources} getRowId={source => source.id} label="Event source activity" noun="sources" enableSelection={false} height={220} columns={[{
      accessorKey: 'name',
      header: 'Source',
      size: 280
    }, {
      accessorKey: 'total',
      header: 'Events',
      size: 128,
      meta: {
        align: 'right'
      }
    }, {
      id: 'activity',
      header: 'Last 12 hours',
      size: 180,
      cell: ({
        row
      }) => <MiniBarChart data={row.original.values} label={\`\${row.original.name} per hour over the last 12 hours\`} />
    }]} />
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="row" style={{
    gap: 'var(--space-6)'
  }}>
      <MiniBarChart data={[]} loading label="Event volume" />
      <MiniBarChart data={[]} label="No event data available" />
      <MiniBarChart data={[0, 0, 0, 0]} label="No events in the last four hours" />
      <MiniBarChart data={[12]} label="12 events in the last hour" />
      <MiniBarChart data={[8, 8, 8, 8]} label="Eight events in each of the last four hours" />
    </div>
}`,...g.parameters?.docs?.source}}}})))()}v();export{f as Default,m as InMetricCards,h as InTableCells,p as Intents,g as States,_ as __namedExportsOrder,d as default};