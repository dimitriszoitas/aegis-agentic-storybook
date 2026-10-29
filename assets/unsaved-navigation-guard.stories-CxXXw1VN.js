import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./button-Bc30j06n.js";import{n as a,t as o}from"./text-input-CX6xjgOR.js";import{a as s,i as c,n as l,t as u}from"./unsaved-navigation-guard-BzxtcIKu.js";function d(){let[e,t]=(0,f.useState)(``),[n,r]=(0,f.useState)(`Editor`);return(0,p.jsx)(c,{dirty:!!e,onDiscard:()=>t(``),children:({requestNavigation:a,pending:s})=>(0,p.jsxs)(`div`,{className:`stack`,children:[(0,p.jsx)(o,{label:`Unsaved note`,value:e,onValueChange:t}),(0,p.jsxs)(`p`,{role:`status`,children:[`Local route: `,n]}),(0,p.jsx)(i,{disabled:s,onClick:()=>void a(()=>r(`Overview`)),children:`Open overview`})]})})}var f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{f=t(),r(),a(),s(),u(),p=n(),{useArgs:m}=__STORYBOOK_MODULE_PREVIEW_API__,{expect:h,userEvent:g,within:_}=__STORYBOOK_MODULE_TEST__,v={id:`patterns-unsavednavigationguard`,title:`Patterns/Workflows/UnsavedNavigationGuard`,component:c,tags:[`autodocs`],args:{dirty:!0,beforeUnload:!0,title:`Discard unsaved changes?`,description:`Your changes have not been saved.`,leaveLabel:`Discard and leave`,stayLabel:`Keep editing`,children:()=>null},argTypes:{dirty:{control:`boolean`},beforeUnload:{control:`boolean`},title:{control:`text`},description:{control:`text`},leaveLabel:{control:`text`},stayLabel:{control:`text`},children:{control:!1},onDiscard:{control:!1}},render:function(e){let[,t]=m(),[n,r]=(0,f.useState)(`Editor`);return(0,p.jsx)(c,{...e,onDiscard:()=>t({dirty:!1}),children:({requestNavigation:e,pending:t})=>(0,p.jsxs)(`div`,{className:`stack`,children:[(0,p.jsxs)(`p`,{role:`status`,children:[`Local route: `,n]}),(0,p.jsx)(i,{disabled:t,onClick:()=>void e(()=>r(`Overview`)),children:`Open overview`})]})})}},y={},b={render:()=>(0,p.jsx)(d,{}),play:async({canvasElement:e})=>{let t=_(e),n=_(e.ownerDocument.body),r=t.getByRole(`textbox`,{name:`Unsaved note`});await g.type(r,`Keep me`);let i=t.getByRole(`button`,{name:`Open overview`});await g.click(i),await h(n.getByRole(`alertdialog`)).toBeVisible(),await g.click(n.getByRole(`button`,{name:`Keep editing`})),await h(r).toHaveValue(`Keep me`),await h(t.getByRole(`status`)).toHaveTextContent(`Editor`),await g.click(i),await g.click(n.getByRole(`button`,{name:`Discard and leave`})),await h(t.getByRole(`status`)).toHaveTextContent(`Overview`),await h(r).toHaveValue(``)}},x={render:()=>(0,p.jsx)(p.Fragment,{children:l.render()})},d.__docgenInfo={description:``,methods:[],displayName:`NavigationGuardExample`},S=[`Playground`,`NavigationGuardExample`,`ConfirmOrStay`,`Anatomy`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{}`,...y.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`function NavigationGuardExample() {
  const [draft, setDraft] = useState('');
  const [route, setRoute] = useState('Editor');
  return <UnsavedNavigationGuard dirty={!!draft} onDiscard={() => setDraft('')}>
      {({
      requestNavigation,
      pending
    }) => <div className="stack">
          <TextInput label="Unsaved note" value={draft} onValueChange={setDraft} />
          <p role="status">Local route: {route}</p>
          <Button disabled={pending} onClick={() => void requestNavigation(() => setRoute('Overview'))}>
            Open overview
          </Button>
        </div>}
    </UnsavedNavigationGuard>;
}`,...d.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <NavigationGuardExample />,
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const input = c.getByRole('textbox', {
      name: 'Unsaved note'
    });
    await userEvent.type(input, 'Keep me');
    const navigate = c.getByRole('button', {
      name: 'Open overview'
    });
    await userEvent.click(navigate);
    await expect(body.getByRole('alertdialog')).toBeVisible();
    await userEvent.click(body.getByRole('button', {
      name: 'Keep editing'
    }));
    await expect(input).toHaveValue('Keep me');
    await expect(c.getByRole('status')).toHaveTextContent('Editor');
    await userEvent.click(navigate);
    await userEvent.click(body.getByRole('button', {
      name: 'Discard and leave'
    }));
    await expect(c.getByRole('status')).toHaveTextContent('Overview');
    await expect(input).toHaveValue('');
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <>{unsavedNavigationGuardAnatomy.render()}</>
}`,...x.parameters?.docs?.source}}}})))()}C();export{x as Anatomy,b as ConfirmOrStay,d as NavigationGuardExample,y as Playground,S as __namedExportsOrder,v as default};