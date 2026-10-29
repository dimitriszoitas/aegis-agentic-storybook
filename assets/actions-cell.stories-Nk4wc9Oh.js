import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{At as r,Ht as i,N as a,h as o,zt as s}from"./icon-BsACJKUY.js";import{d as c,t as l}from"./data-grid-cells-D91vWD98.js";function u(){let[e,t]=(0,d.useState)(`Ready for review`);return(0,f.jsxs)(`div`,{className:`story-layout stack`,style:{maxWidth:560},children:[(0,f.jsxs)(`div`,{className:`between`,children:[(0,f.jsx)(`span`,{children:`Project delivery review`}),(0,f.jsx)(l,{actions:[{id:`open`,label:`Open record details`,icon:(0,f.jsx)(a,{size:15}),onClick:()=>t(`Record detail opened for REC-2026-0842`)},{id:`ai`,label:`Explain this record with AI`,icon:(0,f.jsx)(r,{size:15}),intent:`ai`,onClick:()=>t(`AI is summarizing 18 updates for Customer portal`)},{id:`assign`,label:`Assign to me`,icon:(0,f.jsx)(s,{size:15}),onClick:()=>t(`Assigned to Eleni Papadopoulos`)},{id:`resolve`,label:`Mark completed`,icon:(0,f.jsx)(o,{size:15}),onClick:()=>t(`Record marked completed`)}]})]}),(0,f.jsx)(`p`,{className:`muted`,role:`status`,style:{margin:0},children:e})]})}var d,f,p,m,h,g;function _(){return(_=e((()=>{d=t(),i(),c(),f=n(),p={id:`components-data-grid-actions-cell`,title:`Components/Data Display/Data grid/Actions cell`,component:l,tags:[`autodocs`]},m={render:()=>(0,f.jsx)(u,{})},h={args:{label:`Record actions`,maxVisible:2,actions:[{id:`open`,label:`Open record`,intent:`default`},{id:`summarize`,label:`Summarize record`,intent:`ai`},{id:`complete`,label:`Mark completed`,intent:`function`}]},argTypes:{actions:{control:`object`},maxVisible:{control:{type:`number`,min:0,max:8,step:1}}},render:function({actions:e,...t}){let[n,i]=(0,d.useState)(`Choose an action.`);return(0,f.jsxs)(`div`,{className:`stack`,children:[(0,f.jsx)(l,{...t,actions:e.map(e=>({...e,icon:e.intent===`ai`?(0,f.jsx)(r,{}):(0,f.jsx)(a,{}),onClick:()=>i(`${e.label} selected`)}))}),(0,f.jsx)(`p`,{role:`status`,children:n})]})}},g=[`Interactive`,`Playground`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <ActionsDemo />
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Record actions',
    maxVisible: 2,
    actions: [{
      id: 'open',
      label: 'Open record',
      intent: 'default'
    }, {
      id: 'summarize',
      label: 'Summarize record',
      intent: 'ai'
    }, {
      id: 'complete',
      label: 'Mark completed',
      intent: 'function'
    }]
  },
  argTypes: {
    actions: {
      control: 'object'
    },
    maxVisible: {
      control: {
        type: 'number',
        min: 0,
        max: 8,
        step: 1
      }
    }
  },
  render: function Render({
    actions,
    ...args
  }) {
    const [message, setMessage] = useState('Choose an action.');
    return <div className="stack">
        <ActionsCell {...args} actions={actions.map(action => ({
        ...action,
        icon: action.intent === 'ai' ? <Sparkles /> : <ExternalLink />,
        onClick: () => setMessage(\`\${action.label} selected\`)
      }))} />
        <p role="status">{message}</p>
      </div>;
  }
}`,...h.parameters?.docs?.source}}}})))()}_();export{m as Interactive,h as Playground,g as __namedExportsOrder,p as default};