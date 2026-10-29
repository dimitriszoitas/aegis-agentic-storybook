import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./button-CLF7L5Y-.js";import{a,i as o,r as s,t as c}from"./indicator-Da6eKqq3.js";var l,u,d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{l=t(),r(),a(),s(),u=n(),{expect:d,userEvent:f,within:p}=__STORYBOOK_MODULE_TEST__,m={id:`components-data-indicator`,title:`Components/Data Display/Indicator`,component:o,args:{label:`8 unread notifications`,count:8,children:(0,u.jsx)(i,{children:`Notifications`})},argTypes:{children:{control:!1},placement:{control:`select`,options:[`top-start`,`top-end`,`bottom-start`,`bottom-end`]}},parameters:{docs:{description:{component:`Position a dot or CountBadge around existing content. Logical placements follow writing direction. The marker never intercepts pointer events or changes child semantics. Supply its full accessible meaning; use decorative only when that meaning is already available. Counts do not announce themselves as live updates.`}}}},h={},g={args:{count:void 0,label:`New activity`}},_={args:{count:120,label:`120 unread notifications`}},v={args:{count:0,label:`No unread notifications`,showZero:!0}},y={render:()=>(0,u.jsx)(u.Fragment,{children:c.render()})},b={render:function(){let[e,t]=(0,l.useState)(120);return(0,u.jsxs)(`div`,{className:`stack`,children:[(0,u.jsx)(o,{count:e,label:`${e} unread notifications`,children:(0,u.jsx)(i,{onClick:()=>t(0),children:`Read all notifications`})}),(0,u.jsxs)(`p`,{role:`status`,children:[e,` unread notifications`]}),(0,u.jsx)(`div`,{dir:`rtl`,children:(0,u.jsx)(o,{label:`New activity`,placement:`top-start`,children:(0,u.jsx)(i,{children:`Activity`})})})]})},play:async({canvasElement:e})=>{let t=p(e);await d(t.getByRole(`img`,{name:`120 unread notifications`})).toHaveTextContent(`99+`);let n=t.getByRole(`button`,{name:`Read all notifications`});await f.click(n),await d(t.queryByRole(`img`,{name:`120 unread notifications`})).not.toBeInTheDocument(),await d(n).toHaveFocus(),await d(t.getByRole(`status`)).toHaveTextContent(`0 unread`),await d(t.getByRole(`img`,{name:`New activity`})).toBeVisible()}},x=[`Playground`,`Dot`,`Overflow`,`Zero`,`Anatomy`,`Interaction`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    count: undefined,
    label: 'New activity'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    count: 120,
    label: '120 unread notifications'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    count: 0,
    label: 'No unread notifications',
    showZero: true
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <>{indicatorAnatomy.render()}</>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Example() {
    const [count, setCount] = useState(120);
    return <div className="stack">
        <Indicator count={count} label={\`\${count} unread notifications\`}>
          <Button onClick={() => setCount(0)}>Read all notifications</Button>
        </Indicator>
        <p role="status">{count} unread notifications</p>
        <div dir="rtl">
          <Indicator label="New activity" placement="top-start">
            <Button>Activity</Button>
          </Indicator>
        </div>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    await expect(c.getByRole('img', {
      name: '120 unread notifications'
    })).toHaveTextContent('99+');
    const action = c.getByRole('button', {
      name: 'Read all notifications'
    });
    await userEvent.click(action);
    await expect(c.queryByRole('img', {
      name: '120 unread notifications'
    })).not.toBeInTheDocument();
    await expect(action).toHaveFocus();
    await expect(c.getByRole('status')).toHaveTextContent('0 unread');
    await expect(c.getByRole('img', {
      name: 'New activity'
    })).toBeVisible();
  }
}`,...b.parameters?.docs?.source}}}})))()}S();export{y as Anatomy,g as Dot,b as Interaction,_ as Overflow,h as Playground,v as Zero,x as __namedExportsOrder,m as default};