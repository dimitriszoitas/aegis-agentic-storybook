import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./button-Bc30j06n.js";import{n as a,t as o}from"./sparkline-ZdLhqhPj.js";import{a as s,i as c,o as l,r as u,u as d}from"./charts-BXOmeYCD.js";function f(){let[e,t]=(0,p.useState)(`The workspace activity source did not respond.`);return(0,m.jsx)(u,{title:`Workspace history`,error:e,empty:!e,onRetry:()=>t(``)})}var p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{p=t(),a(),d(),r(),m=n(),{useArgs:h}=__STORYBOOK_MODULE_PREVIEW_API__,g={id:`components-charts-chart-container`,title:`Components/Data Visualization/Chart container`,component:u,subcomponents:{ChartTooltip:l,ChartLegend:s,ChartDataTable:c},tags:[`autodocs`],args:{title:`Workspace events`,description:`Workspace activity over the last 24 hours`}},_={render:()=>(0,m.jsxs)(`div`,{className:`story-grid`,children:[(0,m.jsx)(u,{title:`Loading project events`,loading:!0}),(0,m.jsx)(u,{title:`No matching workspace events`,empty:!0}),(0,m.jsx)(f,{})]})},v={render:()=>(0,m.jsx)(u,{title:`Event volume`,description:`Floating tooltip and tokenized legend`,height:170,action:(0,m.jsx)(i,{size:`sm`,emphasis:`ghost`,onClick:()=>navigator.clipboard?.writeText(`08:00 UTC: 42 project, 28 workspace events`),children:`Copy values`}),legend:(0,m.jsx)(s,{series:[{key:`project`,label:`Project`,color:`function`},{key:`workspace`,label:`Workspace`,color:`ai`}]}),children:(0,m.jsx)(`div`,{style:{padding:`var(--space-6)`,width:280},children:(0,m.jsx)(l,{active:!0,label:`08:00 UTC`,payload:[{name:`Project`,value:42,color:`var(--color-chart-function)`},{name:`Workspace`,value:28,color:`var(--color-chart-ai)`}]})})})},y={args:{title:`Completed projects`,description:`Seven daily totals`,height:200,compact:!1,loading:!1,empty:!1,error:``,data:[12,16,9,22,18,24,30],showLegend:!0,showDataTable:!0},argTypes:{data:{control:`object`},showLegend:{control:`boolean`},showDataTable:{control:`boolean`},height:{control:{type:`number`,min:120,max:480}},description:{control:`text`},error:{control:`text`}},render:function({data:e,showLegend:t,showDataTable:n,...r}){let[,i]=h(),a=[{key:`value`,label:`Projects`,color:`function`}];return(0,m.jsx)(`div`,{style:{width:`min(100%, 620px)`},children:(0,m.jsx)(u,{...r,onRetry:()=>i({error:``}),legend:t?(0,m.jsx)(s,{series:a}):void 0,footer:n?(0,m.jsx)(c,{title:r.title,xKey:`day`,series:a,data:e.map((e,t)=>({day:`Day ${t+1}`,value:e}))}):void 0,children:(0,m.jsx)(o,{data:e,variant:`bar`,width:320,height:Math.max(60,(r.height??200)-32),label:`Daily completed projects`})})})}},b=[`States`,`TooltipAndLegend`,`Playground`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-grid">
      <ChartContainer title="Loading project events" loading />
      <ChartContainer title="No matching workspace events" empty />
      <FailureExample />
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <ChartContainer title="Event volume" description="Floating tooltip and tokenized legend" height={170} action={<Button size="sm" emphasis="ghost" onClick={() => navigator.clipboard?.writeText('08:00 UTC: 42 project, 28 workspace events')}>
          Copy values
        </Button>} legend={<ChartLegend series={[{
    key: 'project',
    label: 'Project',
    color: 'function'
  }, {
    key: 'workspace',
    label: 'Workspace',
    color: 'ai'
  }]} />}>
      <div style={{
      padding: 'var(--space-6)',
      width: 280
    }}>
        <ChartTooltip active label="08:00 UTC" payload={[{
        name: 'Project',
        value: 42,
        color: 'var(--color-chart-function)'
      }, {
        name: 'Workspace',
        value: 28,
        color: 'var(--color-chart-ai)'
      }]} />
      </div>
    </ChartContainer>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Completed projects',
    description: 'Seven daily totals',
    height: 200,
    compact: false,
    loading: false,
    empty: false,
    error: '',
    data: [12, 16, 9, 22, 18, 24, 30],
    showLegend: true,
    showDataTable: true
  },
  argTypes: {
    data: {
      control: 'object'
    },
    showLegend: {
      control: 'boolean'
    },
    showDataTable: {
      control: 'boolean'
    },
    height: {
      control: {
        type: 'number',
        min: 120,
        max: 480
      }
    },
    description: {
      control: 'text'
    },
    error: {
      control: 'text'
    }
  },
  render: function Render({
    data,
    showLegend,
    showDataTable,
    ...args
  }) {
    const [, updateArgs] = useArgs<ChartPlaygroundArgs>();
    const series = [{
      key: 'value',
      label: 'Projects',
      color: 'function' as const
    }];
    return <div style={{
      width: 'min(100%, 620px)'
    }}>
        <ChartContainer {...args} onRetry={() => updateArgs({
        error: ''
      })} legend={showLegend ? <ChartLegend series={series} /> : undefined} footer={showDataTable ? <ChartDataTable title={args.title} xKey="day" series={series} data={data.map((value, index) => ({
        day: \`Day \${index + 1}\`,
        value
      }))} /> : undefined}>
          <Sparkline data={data} variant="bar" width={320} height={Math.max(60, (args.height ?? 200) - 32)} label="Daily completed projects" />
        </ChartContainer>
      </div>;
  }
}`,...y.parameters?.docs?.source}}}})))()}x();export{y as Playground,_ as States,v as TooltipAndLegend,b as __namedExportsOrder,g as default};