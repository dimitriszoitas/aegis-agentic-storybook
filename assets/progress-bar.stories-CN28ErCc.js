import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./progress-bar-DEnAKjHE.js";function a(){let[e,t]=(0,o.useState)(0);return(0,o.useEffect)(()=>{if(e>=100)return;let n=setTimeout(()=>t(e=>Math.min(100,e+5)),450);return()=>clearTimeout(n)},[e]),(0,s.jsxs)(`div`,{className:`story-layout stack`,style:{width:480},children:[(0,s.jsx)(i,{label:e===100?`Import progress complete`:`Importing records for PRJ-0042`,value:e,intent:e===100?`success`:`function`,showValue:!0}),(0,s.jsxs)(`span`,{className:`muted`,children:[Math.round(e*12.84).toLocaleString(),` of 1,284 events collected`]})]})}var o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{o=t(),r(),s=n(),c={id:`components-feedback-progress-bar`,title:`Components/Feedback/Progress bar`,component:i,tags:[`autodocs`],args:{label:`Import progress`,value:68,showValue:!0}},l={render:()=>(0,s.jsx)(`div`,{className:`story-layout stack`,style:{width:480},children:[`function`,`success`,`warning`,`destroy`,`ai`].map((e,t)=>(0,s.jsx)(i,{label:[`Importing project records`,`Project import complete`,`Log storage capacity`,`Source connection failures`,`Correlating related records`][t],value:[68,100,82,26,54][t],intent:e,showValue:!0},e))})},u={render:()=>(0,s.jsxs)(`div`,{className:`story-layout stack`,style:{width:480},children:[(0,s.jsx)(i,{label:`Queued for analysis`,value:0,showValue:!0}),(0,s.jsx)(i,{label:`Workflow validation complete`,value:100,intent:`success`,showValue:!0}),(0,s.jsx)(i,{label:`Querying event sources`,showValue:!0}),(0,s.jsx)(i,{label:`Indexing records`,value:45,size:`sm`,showValue:!0})]})},d={render:()=>(0,s.jsx)(a,{})},f={args:{label:`Import progress`,value:68,max:100,showValue:!0,size:`md`,intent:`function`},argTypes:{value:{control:{type:`number`,min:0}},max:{control:{type:`number`,min:1}},intent:{control:`select`,options:[`function`,`success`,`warning`,`destroy`,`ai`]},size:{control:`select`,options:[`sm`,`md`]}},render:e=>(0,s.jsx)(`div`,{style:{width:`min(100%, 480px)`},children:(0,s.jsx)(i,{...e})})},p=[`Intents`,`States`,`LiveCollection`,`Playground`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-layout stack" style={{
    width: 480
  }}>
      {(['function', 'success', 'warning', 'destroy', 'ai'] as const).map((intent, index) => <ProgressBar key={intent} label={['Importing project records', 'Project import complete', 'Log storage capacity', 'Source connection failures', 'Correlating related records'][index]} value={[68, 100, 82, 26, 54][index]} intent={intent} showValue />)}
    </div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-layout stack" style={{
    width: 480
  }}>
      <ProgressBar label="Queued for analysis" value={0} showValue />
      <ProgressBar label="Workflow validation complete" value={100} intent="success" showValue />
      <ProgressBar label="Querying event sources" showValue />
      <ProgressBar label="Indexing records" value={45} size="sm" showValue />
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <CollectionDemo />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Import progress',
    value: 68,
    max: 100,
    showValue: true,
    size: 'md',
    intent: 'function'
  },
  argTypes: {
    value: {
      control: {
        type: 'number',
        min: 0
      }
    },
    max: {
      control: {
        type: 'number',
        min: 1
      }
    },
    intent: {
      control: 'select',
      options: ['function', 'success', 'warning', 'destroy', 'ai']
    },
    size: {
      control: 'select',
      options: ['sm', 'md']
    }
  },
  render: args => <div style={{
    width: 'min(100%, 480px)'
  }}>
      <ProgressBar {...args} />
    </div>
}`,...f.parameters?.docs?.source}}}})))()}m();export{l as Intents,d as LiveCollection,f as Playground,u as States,p as __namedExportsOrder,c as default};