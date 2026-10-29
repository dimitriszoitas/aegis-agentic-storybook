import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./confidence-badge-DwqdSPkG.js";var i,a,o,s,c;function l(){return(l=e((()=>{n(),i=t(),a={id:`components-ai-confidencebadge`,title:`Components/AI/ConfidenceBadge`,component:r,tags:[`autodocs`],args:{confidence:`high`}},o={render:()=>(0,i.jsx)(`div`,{className:`stack`,style:{maxWidth:560},children:[`high`,`medium`,`low`].map((e,t)=>(0,i.jsxs)(`div`,{className:`between`,children:[(0,i.jsx)(`span`,{children:[`All required fields supplied`,`Owner assignment requires confirmation`,`Insufficient workspace context`][t]}),(0,i.jsx)(r,{confidence:e})]},e))})},s={args:{confidence:`high`},argTypes:{confidence:{control:`select`,options:[`high`,`medium`,`low`]}},render:e=>(0,i.jsx)(r,{...e})},c=[`Levels`,`Playground`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="stack" style={{
    maxWidth: 560
  }}>
      {(['high', 'medium', 'low'] as const).map((confidence, index) => <div className="between" key={confidence}>
          <span>
            {['All required fields supplied', 'Owner assignment requires confirmation', 'Insufficient workspace context'][index]}
          </span>
          <ConfidenceBadge confidence={confidence} />
        </div>)}
    </div>
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    confidence: 'high'
  },
  argTypes: {
    confidence: {
      control: 'select',
      options: ['high', 'medium', 'low']
    }
  },
  render: args => <ConfidenceBadge {...args} />
}`,...s.parameters?.docs?.source}}}})))()}l();export{o as Levels,s as Playground,c as __namedExportsOrder,a as default};