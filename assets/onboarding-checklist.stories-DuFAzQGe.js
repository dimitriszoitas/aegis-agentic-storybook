import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./button-BYQwGwMz.js";import{n as a,t as o}from"./onboarding-checklist-DAK3bvLH.js";function s(e){let[t,n]=(0,c.useState)(e.items),[r,a]=(0,c.useState)(!0),[s,u]=(0,c.useState)(``);return(0,l.jsxs)(`div`,{style:{maxWidth:620},children:[r?(0,l.jsx)(o,{...e,items:t.map(e=>e.id===`project`?{...e,actionLabel:`Create locally`,onAction:async()=>{await new Promise(e=>setTimeout(e,180)),n(e=>e.map(e=>e.id===`project`?{...e,completed:!0}:e)),u(`A local sample project was created.`)}}:e),onCompletedChange:(e,t)=>n(n=>n.map(n=>n.id===e?{...n,completed:t}:n)),onReset:()=>{n(m.map(e=>({...e,completed:!1}))),requestAnimationFrame(()=>document.getElementById(`sample-checklist`)?.querySelector(`[role=checkbox]`)?.focus())},onDismiss:()=>{a(!1),requestAnimationFrame(()=>document.getElementById(`restore-checklist`)?.focus())},id:`sample-checklist`}):(0,l.jsx)(i,{id:`restore-checklist`,emphasis:`secondary`,onClick:()=>a(!0),children:`Restore checklist`}),(0,l.jsx)(`p`,{role:`status`,children:s})]})}var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{c=t(),r(),a(),l=n(),{expect:u,userEvent:d,within:f,waitFor:p}=__STORYBOOK_MODULE_TEST__,m=[{id:`profile`,title:`Add your workspace details`,description:`Set a name and a short description for your team.`,completed:!0},{id:`team`,title:`Add your first team member`,description:`Invite someone to collaborate on the sample workspace.`,completed:!1},{id:`project`,title:`Create a project`,description:`Organize your first milestone and its owner.`,completed:!1},{id:`notifications`,title:`Choose notification preferences`,description:`Decide which updates matter to you.`,completed:!1,optional:!0}],h={id:`patterns-onboardingchecklist`,title:`Patterns/Workflows/OnboardingChecklist`,component:o,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`A controlled setup checklist with explicit completion, optional action callbacks, and progress. Async actions do not imply completion; the application updates the items after its work succeeds. Optional steps are labeled and included in the displayed total.`}}},args:{items:m},render:e=>(0,l.jsx)(s,{...e})},g={play:async({canvasElement:e})=>{let t=f(e),n=t.getByRole(`checkbox`,{name:`Add your first team member`});n.focus(),await d.keyboard(` `),await u(n).toBeChecked(),await u(t.getByRole(`progressbar`,{name:`Workspace setup`})).toHaveAttribute(`aria-valuenow`,`2`),await d.click(t.getByRole(`button`,{name:`Create locally`})),await p(()=>u(t.getByRole(`checkbox`,{name:`Create a project`})).toBeChecked()),await d.click(t.getByRole(`checkbox`,{name:/Choose notification preferences/})),await u(t.getByText(`Your workspace is ready.`)).toBeVisible(),await d.click(t.getByRole(`button`,{name:`Collapse checklist`})),await u(t.queryByRole(`checkbox`)).not.toBeInTheDocument(),await d.click(t.getByRole(`button`,{name:`Expand checklist`})),await d.click(t.getByRole(`button`,{name:`Start again`})),await p(()=>u(t.getByRole(`checkbox`,{name:`Add your workspace details`})).toHaveFocus())}},_={args:{items:m.map(e=>({...e,completed:!0}))}},v={args:{defaultCollapsed:!0}},y={args:{loading:!0}},b={args:{items:[]}},x={args:{error:`Setup steps could not be loaded.`},render:function(e){let[t,n]=(0,c.useState)(e.error);return(0,l.jsx)(s,{...e,error:t,onRetry:()=>n(void 0)})}},S={render:e=>(0,l.jsx)(o,{...e,items:[{id:`connect`,title:`Connect a workspace`,description:`The local example returns an error so the retry state can be reviewed.`,completed:!1,actionLabel:`Connect`,onAction:async()=>{throw new globalThis.Error(`The connection could not be completed. Try again.`)}}]}),play:async({canvasElement:e})=>{let t=f(e);await d.click(t.getByRole(`button`,{name:`Connect`})),await u(t.getByRole(`alert`)).toHaveTextContent(`The connection could not be completed`),await u(t.getByRole(`checkbox`,{name:`Connect a workspace`})).not.toBeChecked()}},C=[`Interactive`,`Complete`,`Collapsed`,`Loading`,`Empty`,`Error`,`FailedAction`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const team = canvas.getByRole('checkbox', {
      name: 'Add your first team member'
    });
    team.focus();
    await userEvent.keyboard(' ');
    await expect(team).toBeChecked();
    await expect(canvas.getByRole('progressbar', {
      name: 'Workspace setup'
    })).toHaveAttribute('aria-valuenow', '2');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Create locally'
    }));
    await waitFor(() => expect(canvas.getByRole('checkbox', {
      name: 'Create a project'
    })).toBeChecked());
    await userEvent.click(canvas.getByRole('checkbox', {
      name: /Choose notification preferences/
    }));
    await expect(canvas.getByText('Your workspace is ready.')).toBeVisible();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Collapse checklist'
    }));
    await expect(canvas.queryByRole('checkbox')).not.toBeInTheDocument();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Expand checklist'
    }));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Start again'
    }));
    await waitFor(() => expect(canvas.getByRole('checkbox', {
      name: 'Add your workspace details'
    })).toHaveFocus());
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    items: steps.map(item => ({
      ...item,
      completed: true
    }))
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    defaultCollapsed: true
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    items: []
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    error: 'Setup steps could not be loaded.'
  },
  render: function ErrorDemo(args) {
    const [error, setError] = useState(args.error);
    return <Example {...args} error={error} onRetry={() => setError(undefined)} />;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <OnboardingChecklist {...args} items={[{
    id: 'connect',
    title: 'Connect a workspace',
    description: 'The local example returns an error so the retry state can be reviewed.',
    completed: false,
    actionLabel: 'Connect',
    onAction: async () => {
      throw new globalThis.Error('The connection could not be completed. Try again.');
    }
  }]} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Connect'
    }));
    await expect(canvas.getByRole('alert')).toHaveTextContent('The connection could not be completed');
    await expect(canvas.getByRole('checkbox', {
      name: 'Connect a workspace'
    })).not.toBeChecked();
  }
}`,...S.parameters?.docs?.source}}}})))()}w();export{v as Collapsed,_ as Complete,b as Empty,x as Error,S as FailedAction,g as Interactive,y as Loading,C as __namedExportsOrder,h as default};