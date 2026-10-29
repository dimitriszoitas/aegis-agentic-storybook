import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./button-6oZdnaTW.js";import{n as a,t as o}from"./notification-DjGwLPzK.js";import{i as s,n as c,r as l,t as u}from"./notification-viewport-fDh5iCVI.js";function d(){let[e,t]=(0,p.useState)(!0),[n,r]=(0,p.useState)(!1);return(0,m.jsx)(`div`,{style:{maxWidth:800},children:e?(0,m.jsx)(o,{intent:n?`success`:`warning`,title:n?`Connection restored`:`CrowdStrike connector needs attention`,description:n?`Event ingestion has resumed. The backlog will be processed automatically.`:`The last synchronization failed 8 minutes ago. Existing event data is still available.`,actions:!n&&(0,m.jsx)(i,{size:`sm`,emphasis:`secondary`,onClick:()=>r(!0),children:`Retry connection`}),onDismiss:()=>t(!1)}):(0,m.jsx)(i,{emphasis:`ghost`,onClick:()=>{t(!0),r(!1)},children:`Show connector notification`})})}function f({undo:e=!1}){let t=(0,p.useId)(),n=(0,p.useRef)([]),[r,a]=(0,p.useState)(`Notifications appear in the lower-right corner.`);(0,p.useEffect)(()=>()=>{n.current.forEach(e=>c(e))},[]);let l=e=>{n.current.push(s({...e,toasterId:t,duration:1/0,action:e.intent===`loading`?void 0:{label:`Open project`,onClick:()=>a(`Project REC-00842 opened.`)}}))};return(0,m.jsxs)(`div`,{className:`stack`,children:[(0,m.jsx)(u,{id:t}),e?(0,m.jsx)(o,{variant:`floating`,intent:`success`,title:`Record marked as resolved`,description:`The resolution is saved in the project history.`,style:{maxWidth:400},action:{label:`Undo resolution`,onClick:()=>{a(`Resolution undone.`),n.current.push(s({title:`Record reopened`,description:`REC-00842 is ready for review.`,intent:`info`,toasterId:t,duration:1/0}))}}}):(0,m.jsx)(`div`,{className:`row`,children:y.map(e=>(0,m.jsxs)(i,{emphasis:`secondary`,onClick:()=>l(e),children:[`Show`,` `,e.intent===`destroy`?`error`:e.intent===`ai`?`AI summary`:e.intent]},e.intent))}),(0,m.jsx)(`p`,{role:`status`,className:`muted`,children:r})]})}var p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{p=t(),r(),a(),l(),m=n(),{expect:h,userEvent:g,waitFor:_,within:v}=__STORYBOOK_MODULE_TEST__,y=[{intent:`info`,title:`New project updates are available`,description:`6 project updates were added to REC-00842.`},{intent:`success`,title:`Workflow enabled`,description:`The customer portal workflow is now available to the project team.`},{intent:`warning`,title:`Data sync is delayed`,description:`Identity events are arriving 8 minutes behind schedule.`},{intent:`destroy`,title:`Workflow validation failed`,description:`Add a condition before enabling this workflow.`},{intent:`ai`,title:`AI summary is ready`,description:`Review the supporting details before taking action.`},{intent:`loading`,title:`Correlating event sources`,description:`Comparing project milestones and customer requirements.`}],b={id:`components-feedback-notification`,title:`Components/Feedback/Notification`,component:o,subcomponents:{NotificationViewport:u},tags:[`autodocs`],args:{variant:`inline`,intent:`info`,title:`New data source connected`,description:`Customer records are now available in your workspace.`},argTypes:{variant:{control:`inline-radio`,options:[`inline`,`floating`]},intent:{control:`select`,options:y.map(e=>e.intent)}},parameters:{docs:{description:{component:"One notification family for inline feedback and floating messages. Inline notifications use a semantic outline with no background fill; floating notifications use a neutral surface. Use `action` for a labeled callback, `actions` for custom controls, and `onDismiss` for a dismiss button. The floating variant styles the message; `NotificationViewport` and `showNotification` place it above the application.\n\nMount one `NotificationViewport` per application shell, then call `showNotification`. Its action callback also dismisses that message. Loading notifications stay visible until replaced or dismissed; other notifications default to 5 seconds. `Banner`/`Callout` and `Toast`/`Toaster`/`showToast` remain compatibility APIs for the same family.\n\n| NotificationViewport prop | Type | Default / behavior |\n| --- | --- | --- |\n| position | top-left, top-center, top-right, bottom-left, bottom-center, bottom-right | bottom-right |\n| offset | number, string, or side-offset object | 12 |\n| gap | number | 12 |\n| visibleToasts | number | 4 |\n| duration | number | Sonner host timeout in milliseconds; individual calls may override it |\n| theme | light, dark, system | Optional host appearance; message content uses Aegis theme tokens |\n| expand / closeButton | boolean | Expand the stack / show a host close control |\n| hotkey | string[] | Keyboard shortcut that focuses the notification region |\n| containerAriaLabel | string | Accessible name for the notification region |\n| toastOptions | ToastOptions | Shared host settings; Aegis unstyled content remains enabled |\n| className / style | string / CSSProperties | Host presentation props |"}}}},x={},S={render:()=>(0,m.jsx)(`div`,{className:`stack`,style:{maxWidth:840},children:y.map(e=>(0,m.jsx)(o,{...e},e.intent))})},C={render:()=>(0,m.jsx)(d,{}),play:async({canvasElement:e})=>{let t=v(e);t.getByRole(`button`,{name:`Retry connection`}).focus(),await g.keyboard(`{Enter}`),await h(t.getByText(`Connection restored`)).toBeVisible(),await g.click(t.getByRole(`button`,{name:`Dismiss notification`})),await h(t.queryByText(`Connection restored`)).toBeNull(),await g.click(t.getByRole(`button`,{name:`Show connector notification`})),await h(t.getByText(`CrowdStrike connector needs attention`)).toBeVisible()}},w={args:{intent:`ai`,title:`Member review required`,description:void 0,children:`This proposed workflow change updates task ownership and milestone dates. Review the changes before applying them.`,style:{maxWidth:620}}},T={args:{variant:`floating`,intent:`success`,title:`Record assigned to Maya Chen`,description:`REC-00842 is ready for project.`,style:{maxWidth:400}}},E={render:()=>(0,m.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(280px, 1fr))`,gap:`var(--space-4)`,maxWidth:850},children:y.map(e=>(0,m.jsx)(o,{...e,variant:`floating`},e.intent))})},D={docs:{story:{inline:!1,height:560}}},O={render:()=>(0,m.jsx)(f,{}),parameters:D,play:async({canvasElement:e})=>{let t=v(e),n=v(e.ownerDocument.body);await g.click(t.getByRole(`button`,{name:`Show success`})),await h(await n.findByText(`Workflow enabled`)).toBeVisible(),await g.click(n.getByRole(`button`,{name:`Open project`})),await h(t.getByText(`Project REC-00842 opened.`)).toBeVisible(),await _(()=>h(n.queryByText(`Workflow enabled`)).toBeNull()),await g.click(t.getByRole(`button`,{name:`Show warning`})),await h(await n.findByText(`Data sync is delayed`)).toBeVisible(),n.getByRole(`button`,{name:`Dismiss notification`}).focus(),await g.keyboard(`{Enter}`),await _(()=>h(n.queryByText(`Data sync is delayed`)).toBeNull())}},k={render:()=>(0,m.jsx)(f,{undo:!0}),parameters:D,play:async({canvasElement:e})=>{let t=v(e),n=v(e.ownerDocument.body);await g.click(t.getByRole(`button`,{name:`Undo resolution`})),await h(await n.findByText(`Record reopened`)).toBeVisible(),await h(t.getByText(`Resolution undone.`)).toBeVisible(),await g.click(n.getByRole(`button`,{name:`Dismiss notification`})),await _(()=>h(n.queryByText(`Record reopened`)).toBeNull())}},A=[`Inline`,`InlineIntents`,`WithActionsAndDismiss`,`InlineCallout`,`Floating`,`FloatingIntents`,`LiveFloating`,`FloatingWithAction`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div className="stack" style={{
    maxWidth: 840
  }}>
      {examples.map(example => <Notification key={example.intent} {...example} />)}
    </div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <DismissibleDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const retry = canvas.getByRole('button', {
      name: 'Retry connection'
    });
    retry.focus();
    await userEvent.keyboard('{Enter}');
    await expect(canvas.getByText('Connection restored')).toBeVisible();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Dismiss notification'
    }));
    await expect(canvas.queryByText('Connection restored')).toBeNull();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Show connector notification'
    }));
    await expect(canvas.getByText('CrowdStrike connector needs attention')).toBeVisible();
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    intent: 'ai',
    title: 'Member review required',
    description: undefined,
    children: 'This proposed workflow change updates task ownership and milestone dates. Review the changes before applying them.',
    style: {
      maxWidth: 620
    }
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'floating',
    intent: 'success',
    title: 'Record assigned to Maya Chen',
    description: 'REC-00842 is ready for project.',
    style: {
      maxWidth: 400
    }
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: 'var(--space-4)',
    maxWidth: 850
  }}>
      {examples.map(example => <Notification key={example.intent} {...example} variant="floating" />)}
    </div>
}`,...E.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <LiveDemo />,
  parameters: floatingDocs,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Show success'
    }));
    await expect(await body.findByText('Workflow enabled')).toBeVisible();
    await userEvent.click(body.getByRole('button', {
      name: 'Open project'
    }));
    await expect(canvas.getByText('Project REC-00842 opened.')).toBeVisible();
    await waitFor(() => expect(body.queryByText('Workflow enabled')).toBeNull());
    await userEvent.click(canvas.getByRole('button', {
      name: 'Show warning'
    }));
    await expect(await body.findByText('Data sync is delayed')).toBeVisible();
    const dismiss = body.getByRole('button', {
      name: 'Dismiss notification'
    });
    dismiss.focus();
    await userEvent.keyboard('{Enter}');
    await waitFor(() => expect(body.queryByText('Data sync is delayed')).toBeNull());
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <LiveDemo undo />,
  parameters: floatingDocs,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Undo resolution'
    }));
    await expect(await body.findByText('Record reopened')).toBeVisible();
    await expect(canvas.getByText('Resolution undone.')).toBeVisible();
    await userEvent.click(body.getByRole('button', {
      name: 'Dismiss notification'
    }));
    await waitFor(() => expect(body.queryByText('Record reopened')).toBeNull());
  }
}`,...k.parameters?.docs?.source}}}})))()}j();export{T as Floating,E as FloatingIntents,k as FloatingWithAction,x as Inline,w as InlineCallout,S as InlineIntents,O as LiveFloating,C as WithActionsAndDismiss,A as __namedExportsOrder,b as default};