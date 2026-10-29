import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./streaming-skeleton-CPTJTthh.js";var i,a,o,s,c;function l(){return(l=e((()=>{n(),i=t(),a={id:`components-ai-streamingskeleton`,title:`Components/AI/StreamingSkeleton`,component:r,tags:[`autodocs`]},o={render:()=>(0,i.jsxs)(`div`,{className:`story-grid`,children:[(0,i.jsxs)(`div`,{className:`stack`,children:[(0,i.jsx)(`h3`,{children:`Review summary`}),(0,i.jsx)(r,{lines:4})]}),(0,i.jsx)(r,{variant:`card`,lines:5,label:`Preparing a configuration review`})]})},s={args:{lines:4,variant:`text`,label:`Preparing a project summary`},argTypes:{lines:{control:{type:`number`,min:1,max:12,step:1}},variant:{control:`select`,options:[`text`,`card`]},label:{control:`text`}},render:e=>(0,i.jsx)(`div`,{style:{width:`100%`,maxWidth:480},children:(0,i.jsx)(r,{...e})})},c=[`PendingBlocks`,`Playground`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-grid">
      <div className="stack">
        <h3>Review summary</h3>
        <StreamingSkeleton lines={4} />
      </div>
      <StreamingSkeleton variant="card" lines={5} label="Preparing a configuration review" />
    </div>
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    lines: 4,
    variant: 'text',
    label: 'Preparing a project summary'
  },
  argTypes: {
    lines: {
      control: {
        type: 'number',
        min: 1,
        max: 12,
        step: 1
      }
    },
    variant: {
      control: 'select',
      options: ['text', 'card']
    },
    label: {
      control: 'text'
    }
  },
  render: args => <div style={{
    width: '100%',
    maxWidth: 480
  }}>
      <StreamingSkeleton {...args} />
    </div>
}`,...s.parameters?.docs?.source}}}})))()}l();export{o as PendingBlocks,s as Playground,c as __namedExportsOrder,a as default};