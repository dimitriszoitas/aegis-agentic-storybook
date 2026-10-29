import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{Dt as r,Ht as i,Vt as a,_t as o,mt as s}from"./icon-DafZbL0c.js";import{n as c,t as l}from"./button-Bc30j06n.js";import{n as u,t as d}from"./banner-Znx0nRqN.js";import{n as f,t as p}from"./empty-state-BbgGxUsq.js";function m({preset:e}){let[t,n]=(0,h.useState)(!1);return t?(0,g.jsxs)(`div`,{className:`story-layout`,children:[(0,g.jsx)(d,{intent:`success`,title:e===`no-results`?`Filters cleared`:e===`error`?`Connection restored`:`Source setup started`,children:e===`no-results`?`Showing all 150 records in your workspace.`:e===`error`?`Your record queue is available again.`:`Connect your project tracker, billing account, or customer directory to get started.`}),(0,g.jsx)(l,{emphasis:`ghost`,size:`sm`,onClick:()=>n(!1),style:{marginTop:`var(--space-3)`},children:`Reset example`})]}):(0,g.jsx)(`div`,{className:`story-layout`,children:(0,g.jsx)(p,{preset:e,action:(0,g.jsx)(l,{intent:`function`,onClick:()=>n(!0),children:e===`no-results`?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(a,{size:15}),`Clear filters`]}):e===`error`?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(o,{size:15}),`Retry loading`]}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(s,{size:15}),`Connect a source`]})})})})}var h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{h=t(),i(),f(),c(),u(),g=n(),_={id:`components-feedback-empty-state`,title:`Components/Feedback/Empty state`,component:p,tags:[`autodocs`]},v={render:()=>(0,g.jsx)(`div`,{className:`story-grid`,style:{gridTemplateColumns:`repeat(auto-fit, minmax(300px, 1fr))`},children:[`no-results`,`no-data`,`error`].map(e=>(0,g.jsx)(m,{preset:e},e))})},y={render:()=>(0,g.jsx)(`div`,{className:`story-layout`,style:{maxWidth:420},children:(0,g.jsx)(p,{compact:!0,icon:(0,g.jsx)(r,{size:24}),title:`No critical records`,description:`No critical issues were found in the selected time range. New records will appear as your team adds them.`})})},b={render:()=>(0,g.jsx)(p,{icon:(0,g.jsx)(r,{size:25}),title:`All caught up`,description:`You’ve reviewed every record assigned to you. Your team has 3 connected workspaces.`})},x={args:{preset:`no-results`,compact:!1},argTypes:{preset:{control:`select`,options:[`no-results`,`no-data`,`error`]},title:{control:`text`},description:{control:`text`}},render:e=>(0,g.jsx)(`div`,{style:{width:`min(100%, 540px)`},children:(0,g.jsx)(p,{...e})})},S=[`Presets`,`Compact`,`CustomWorkspace`,`Playground`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-grid" style={{
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
  }}>
      {(['no-results', 'no-data', 'error'] as const).map(preset => <PresetDemo preset={preset} key={preset} />)}
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-layout" style={{
    maxWidth: 420
  }}>
      <EmptyState compact icon={<ShieldCheck size={24} />} title="No critical records" description="No critical issues were found in the selected time range. New records will appear as your team adds them." />
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <EmptyState icon={<ShieldCheck size={25} />} title="All caught up" description="You’ve reviewed every record assigned to you. Your team has 3 connected workspaces." />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    preset: 'no-results',
    compact: false
  },
  argTypes: {
    preset: {
      control: 'select',
      options: ['no-results', 'no-data', 'error']
    },
    title: {
      control: 'text'
    },
    description: {
      control: 'text'
    }
  },
  render: args => <div style={{
    width: 'min(100%, 540px)'
  }}>
      <EmptyState {...args} />
    </div>
}`,...x.parameters?.docs?.source}}}})))()}C();export{y as Compact,b as CustomWorkspace,x as Playground,v as Presets,S as __namedExportsOrder,_ as default};