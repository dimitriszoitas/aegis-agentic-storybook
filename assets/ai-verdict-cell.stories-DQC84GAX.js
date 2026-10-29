import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{d as n,n as r}from"./data-grid-cells-C3B7FYvX.js";var i,a,o,s,c;function l(){return(l=e((()=>{n(),i=t(),a={id:`components-data-grid-ai-verdict-cell`,title:`Components/Data Display/Data grid/AI verdict cell`,component:r,tags:[`autodocs`],args:{verdict:`Review first`,confidence:.96}},o={render:()=>(0,i.jsxs)(`div`,{className:`stack`,style:{alignItems:`flex-start`},children:[(0,i.jsx)(r,{verdict:`Review first`,confidence:.96}),(0,i.jsx)(r,{verdict:`Needs context`,confidence:.67}),(0,i.jsx)(r,{verdict:`Insufficient evidence`,confidence:.32})]})},s={args:{verdict:`Review first`,confidence:.96},argTypes:{confidence:{control:{type:`number`,min:0,max:1,step:.01}}}},c=[`ConfidenceLevels`,`Playground`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="stack" style={{
    alignItems: 'flex-start'
  }}>
      <AiVerdictCell verdict="Review first" confidence={0.96} />
      <AiVerdictCell verdict="Needs context" confidence={0.67} />
      <AiVerdictCell verdict="Insufficient evidence" confidence={0.32} />
    </div>
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    verdict: 'Review first',
    confidence: 0.96
  },
  argTypes: {
    confidence: {
      control: {
        type: 'number',
        min: 0,
        max: 1,
        step: 0.01
      }
    }
  }
}`,...s.parameters?.docs?.source}}}})))()}l();export{o as ConfidenceLevels,s as Playground,c as __namedExportsOrder,a as default};