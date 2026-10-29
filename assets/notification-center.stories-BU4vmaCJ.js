import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./notification-center-DYgutzcG.js";function a(e){let[t,n]=(0,o.useState)(e.items),[r,a]=(0,o.useState)(``);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i,{...e,items:t,onReadChange:(e,t)=>n(n=>n.map(n=>e.includes(n.id)?{...n,read:t}:n)),onDismiss:e=>n(t=>t.filter(t=>t.id!==e)),onOpenItem:e=>a(`Opened ${e.title}.`)}),(0,s.jsx)(`p`,{role:`status`,children:r})]})}var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{o=t(),r(),s=n(),{expect:c,userEvent:l,within:u,waitFor:d}=__STORYBOOK_MODULE_TEST__,f=Date.parse(`2026-10-24T12:00:00Z`),p=[{id:`project`,title:`Project approved`,description:`Maya approved the customer portal scope.`,timestamp:`2026-10-24T11:55:00Z`,read:!1,intent:`success`},{id:`invoice`,title:`Invoice due tomorrow`,description:`Invoice INV-2026-024 is ready for a payment reminder.`,timestamp:`2026-10-24T11:30:00Z`,read:!1,intent:`warning`},{id:`summary`,title:`Weekly summary ready`,description:`Aegis AI prepared a draft from your workspace updates.`,timestamp:`2026-10-24T10:45:00Z`,read:!0,intent:`ai`}],m={id:`patterns-notificationcenter`,title:`Patterns/Communication/NotificationCenter`,component:i,tags:[`autodocs`],parameters:{layout:`padded`,docs:{story:{inline:!1,height:640},description:{component:`A notification inbox that slides in from the right. Search and All/Unread views stay local; read, dismiss and open callbacks let the host persist changes. Async callbacks are guarded and failures stay visible without removing the original notification.`}}},args:{items:p,now:f},render:e=>(0,s.jsx)(a,{...e})},h={play:async({canvasElement:e})=>{let t=u(e),n=u(e.ownerDocument.body);await l.click(t.getByRole(`button`,{name:`Notifications, 2 unread`}));let r=n.getByRole(`dialog`);await l.click(u(r).getByRole(`tab`,{name:/^Unread/})),await c(u(r).queryByText(`Weekly summary ready`)).not.toBeInTheDocument(),await l.click(u(r).getAllByRole(`button`,{name:`Mark read`})[0]),await c(u(r).queryByText(`Project approved`)).not.toBeInTheDocument(),await d(()=>c(u(r).getByRole(`searchbox`,{name:`Search notifications`})).toHaveFocus()),await l.type(u(r).getByRole(`searchbox`,{name:`Search notifications`}),`invoice`),await l.click(u(r).getByRole(`button`,{name:`Dismiss Invoice due tomorrow`})),await c(u(r).getByText(`No matching notifications`)).toBeVisible(),await l.keyboard(`{Escape}`),await d(()=>c(n.queryByRole(`dialog`)).not.toBeInTheDocument()),await d(()=>c(t.getByRole(`button`,{name:`Notifications`})).toHaveFocus())}},g={args:{defaultOpen:!0}},_={args:{items:[],defaultOpen:!0}},v={args:{items:[],defaultOpen:!0,loading:!0}},y={args:{defaultOpen:!0,error:`Updates could not be loaded. Try again when the connection is restored.`},render:function(e){let[t,n]=(0,o.useState)(e.error);return(0,s.jsx)(a,{...e,error:t,onRetry:()=>n(void 0)})}},b={args:{defaultOpen:!0},render:e=>(0,s.jsx)(i,{...e,onReadChange:async()=>{throw new globalThis.Error(`The update could not be saved. Your notifications are unchanged.`)}}),play:async({canvasElement:e})=>{let t=u(e.ownerDocument.body);await l.click(t.getByRole(`button`,{name:`Mark all read`})),await c(t.getByRole(`alert`)).toHaveTextContent(`Your notifications are unchanged`),await c(t.getByText(`2 unread`)).toBeVisible()}},x=[`Interactive`,`OpenInbox`,`Empty`,`Loading`,`Error`,`FailedUpdate`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement),
      page = within(canvasElement.ownerDocument.body);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Notifications, 2 unread'
    }));
    const dialog = page.getByRole('dialog');
    await userEvent.click(within(dialog).getByRole('tab', {
      name: /^Unread/
    }));
    await expect(within(dialog).queryByText('Weekly summary ready')).not.toBeInTheDocument();
    await userEvent.click(within(dialog).getAllByRole('button', {
      name: 'Mark read'
    })[0]);
    await expect(within(dialog).queryByText('Project approved')).not.toBeInTheDocument();
    await waitFor(() => expect(within(dialog).getByRole('searchbox', {
      name: 'Search notifications'
    })).toHaveFocus());
    await userEvent.type(within(dialog).getByRole('searchbox', {
      name: 'Search notifications'
    }), 'invoice');
    await userEvent.click(within(dialog).getByRole('button', {
      name: 'Dismiss Invoice due tomorrow'
    }));
    await expect(within(dialog).getByText('No matching notifications')).toBeVisible();
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(page.queryByRole('dialog')).not.toBeInTheDocument());
    await waitFor(() => expect(canvas.getByRole('button', {
      name: 'Notifications'
    })).toHaveFocus());
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    items: [],
    defaultOpen: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    items: [],
    defaultOpen: true,
    loading: true
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: true,
    error: 'Updates could not be loaded. Try again when the connection is restored.'
  },
  render: function ErrorDemo(args) {
    const [error, setError] = useState(args.error);
    return <Example {...args} error={error} onRetry={() => setError(undefined)} />;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: true
  },
  render: args => <NotificationCenter {...args} onReadChange={async () => {
    throw new globalThis.Error('The update could not be saved. Your notifications are unchanged.');
  }} />,
  play: async ({
    canvasElement
  }) => {
    const page = within(canvasElement.ownerDocument.body);
    await userEvent.click(page.getByRole('button', {
      name: 'Mark all read'
    }));
    await expect(page.getByRole('alert')).toHaveTextContent('Your notifications are unchanged');
    await expect(page.getByText('2 unread')).toBeVisible();
  }
}`,...b.parameters?.docs?.source}}}})))()}S();export{_ as Empty,y as Error,b as FailedUpdate,h as Interactive,v as Loading,g as OpenInbox,x as __namedExportsOrder,m as default};