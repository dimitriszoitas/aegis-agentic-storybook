import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{Ft as r,P as i,u as a,zt as o}from"./icon-uAOezYFl.js";import{n as s,t as c}from"./tabs-B7uzGnTG.js";function l(){let[e,t]=(0,u.useState)(`review`);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(c,{items:f,value:e,onValueChange:t,variant:`pill`,label:`Controlled record views`}),(0,d.jsxs)(`p`,{style:{color:`var(--color-text-secondary)`},children:[`Active view: `,f.find(t=>t.value===e)?.label]})]})}var u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{u=t(),o(),s(),d=n(),f=[{value:`all`,label:`All records`,icon:(0,d.jsx)(a,{}),count:150,content:`150 records across projects, customers, billing, and workspace activity.`},{value:`review`,label:`Needs review`,icon:(0,d.jsx)(i,{}),count:48,content:`48 records need a team review before the next handoff.`},{value:`assigned`,label:`Assigned to me`,icon:(0,d.jsx)(r,{}),count:12,content:`12 records are assigned to Maya Chen.`}],p={id:`components-navigation-tabs`,title:`Components/Navigation/Tabs`,component:c,tags:[`autodocs`],args:{items:f,label:`Record views`}},m={argTypes:{variant:{control:!1}},render:e=>(0,d.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-8)`},children:[(0,d.jsx)(c,{...e,variant:`line`}),(0,d.jsx)(c,{...e,variant:`pill`})]})},h={args:{items:[...f,{value:`escalated`,label:`Escalated requests`,count:8,content:`8 escalated requests.`},{value:`archived`,label:`Archived records`,disabled:!0,content:`Archive access requires the workspace manager role.`},{value:`resolved`,label:`Recently resolved`,count:86,content:`86 records were resolved in the last 24 hours.`}]},decorators:[e=>(0,d.jsx)(`div`,{style:{maxWidth:440},children:(0,d.jsx)(e,{})})]},g={render:()=>(0,d.jsx)(l,{})},_=[`VariantMatrix`,`DisabledAndOverflow`,`Controlled`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  argTypes: {
    variant: {
      control: false
    }
  },
  render: args => <div style={{
    display: 'grid',
    gap: 'var(--space-8)'
  }}>
      <Tabs {...args} variant="line" />
      <Tabs {...args} variant="pill" />
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    items: [...items, {
      value: 'escalated',
      label: 'Escalated requests',
      count: 8,
      content: '8 escalated requests.'
    }, {
      value: 'archived',
      label: 'Archived records',
      disabled: true,
      content: 'Archive access requires the workspace manager role.'
    }, {
      value: 'resolved',
      label: 'Recently resolved',
      count: 86,
      content: '86 records were resolved in the last 24 hours.'
    }]
  },
  decorators: [Story => <div style={{
    maxWidth: 440
  }}>
        <Story />
      </div>]
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledTabs />
}`,...g.parameters?.docs?.source}}}})))()}v();export{g as Controlled,h as DisabledAndOverflow,m as VariantMatrix,_ as __namedExportsOrder,p as default};