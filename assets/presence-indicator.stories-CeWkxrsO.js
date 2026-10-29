import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,i as r,n as i,t as a}from"./presence-indicator-DWKS3h4A.js";var o,s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{n(),a(),o=t(),{expect:s,within:c}=__STORYBOOK_MODULE_TEST__,l={id:`components-people-presenceindicator`,title:`Components/Data Display/PresenceIndicator`,component:r,args:{status:`online`,showLabel:!0,size:`md`},argTypes:{status:{control:`select`,options:[`online`,`away`,`busy`,`offline`]},size:{control:`inline-radio`,options:[`sm`,`md`]}},parameters:{docs:{description:{component:`Display host-provided availability with a visible label by default. Dot-only presence has an accessible name. Presence is not a record workflow status, a connectivity probe, or a live announcement service.`}}}},u={},d={args:{status:`away`,showLabel:!1,label:`Alex is away`}},f={render:()=>(0,o.jsx)(`div`,{className:`row`,children:[`online`,`away`,`busy`,`offline`].map(e=>(0,o.jsx)(r,{status:e},e))})},p={render:()=>(0,o.jsx)(o.Fragment,{children:i.render()})},m={args:{showLabel:!1,label:`Alex is online`},play:async({canvasElement:e})=>{let t=c(e);await s(t.getByRole(`img`,{name:`Alex is online`})).toBeVisible(),await s(t.queryByRole(`status`)).not.toBeInTheDocument()}},h=[`Playground`,`DotOnly`,`States`,`Anatomy`,`AccessibleMeaning`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'away',
    showLabel: false,
    label: 'Alex is away'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className="row">
      {(['online', 'away', 'busy', 'offline'] as const).map(status => <PresenceIndicator status={status} key={status} />)}
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <>{presenceIndicatorAnatomy.render()}</>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    showLabel: false,
    label: 'Alex is online'
  },
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    await expect(c.getByRole('img', {
      name: 'Alex is online'
    })).toBeVisible();
    await expect(c.queryByRole('status')).not.toBeInTheDocument();
  }
}`,...m.parameters?.docs?.source}}}})))()}g();export{m as AccessibleMeaning,p as Anatomy,d as DotOnly,u as Playground,f as States,h as __namedExportsOrder,l as default};