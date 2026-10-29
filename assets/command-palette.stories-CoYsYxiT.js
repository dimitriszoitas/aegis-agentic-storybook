import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{E as r,Ht as i,L as a,V as o,mt as s,xt as c}from"./icon-DafZbL0c.js";import{n as l,t as u}from"./button-Bc30j06n.js";import{n as d,t as f}from"./command-palette-CvD8QWu4.js";function p({defaultOpen:e=!1}){let[t,n]=(0,m.useState)(e),[i,l]=(0,m.useState)(`Use ⌘K or Ctrl+K to search your workspace.`);return(0,h.jsxs)(`div`,{className:`stack`,children:[(0,h.jsx)(u,{leadingIcon:(0,h.jsx)(c,{size:16}),onClick:()=>n(!0),children:`Search workspace`}),(0,h.jsx)(`p`,{role:`status`,className:`muted`,children:i}),(0,h.jsx)(f,{open:t,onOpenChange:n,actions:[{id:`records`,label:`Go to records`,group:`Navigation`,icon:(0,h.jsx)(o,{}),shortcut:`G A`,onSelect:()=>l(`Records workspace selected`)},{id:`rules`,label:`Workflow rules`,group:`Navigation`,icon:(0,h.jsx)(a,{}),onSelect:()=>l(`Workflow rules workspace selected`)},{id:`new-rule`,label:`Create workflow rule`,group:`Actions`,icon:(0,h.jsx)(s,{}),onSelect:()=>l(`Workflow rule creation selected`)},{id:`search-milestones`,label:`Search project milestones`,group:`Actions`,icon:(0,h.jsx)(c,{}),onSelect:()=>l(`Project milestone search opened`)},{id:`recent-record`,label:`Customer onboarding checklist`,group:`Recent records`,icon:(0,h.jsx)(r,{}),onSelect:()=>l(`REC-1048 project selected`)}],onAskAi:e=>l(`Aegis AI received ${e||`your selected records`}.`)})]})}var m,h,g,_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{m=t(),i(),d(),l(),h=n(),{useArgs:g,useState:_}=__STORYBOOK_MODULE_PREVIEW_API__,{expect:v,userEvent:y,waitFor:b,within:x}=__STORYBOOK_MODULE_TEST__,S={id:`components-navigation-commandpalette`,title:`Components/Navigation/CommandPalette`,component:f,parameters:{docs:{story:{inline:!1,height:620}}}},C={render:()=>(0,h.jsx)(p,{})},w={render:()=>(0,h.jsx)(p,{defaultOpen:!0})},T={render:()=>(0,h.jsx)(p,{}),play:async({canvasElement:e})=>{let t=x(e),n=x(document.body),r=t.getByRole(`button`,{name:`Search workspace`});r.focus(),await y.keyboard(`{Enter}`);let i=await n.findByRole(`combobox`,{name:`Search commands`});await b(()=>v(i).toHaveFocus()),await y.keyboard(`{Escape}`),await b(()=>v(r).toHaveFocus()),await y.keyboard(`{Enter}`),await y.type(await n.findByRole(`combobox`),`Go to records`),await y.keyboard(`{Enter}`),await v(t.getByRole(`status`)).toHaveTextContent(`Records workspace selected`),await b(()=>v(r).toHaveFocus())}},E={args:{open:!1,shortcut:!0,showAi:!0,showIcons:!0,actionSet:`all`},argTypes:{open:{control:`boolean`},shortcut:{control:`boolean`},showAi:{control:`boolean`},showIcons:{control:`boolean`},actionSet:{control:`inline-radio`,options:[`all`,`navigation`,`empty`]}},render:function(e){let[,t]=g(),[n,r]=_(`Choose an action to preview its result.`),i=[{id:`projects`,label:`Go to projects`,group:`Navigation`,icon:e.showIcons?(0,h.jsx)(o,{}):void 0,onSelect:()=>r(`Projects selected`)},{id:`customers`,label:`Go to customers`,group:`Navigation`,icon:e.showIcons?(0,h.jsx)(c,{}):void 0,onSelect:()=>r(`Customers selected`)},{id:`create`,label:`Create project`,group:`Actions`,icon:e.showIcons?(0,h.jsx)(s,{}):void 0,onSelect:()=>r(`Project creation selected`)}];return(0,h.jsxs)(`div`,{className:`stack`,children:[(0,h.jsx)(u,{onClick:()=>t({open:!0}),children:`Search workspace`}),(0,h.jsx)(`p`,{className:`muted`,role:`status`,children:n}),(0,h.jsx)(f,{open:e.open,onOpenChange:e=>t({open:e}),shortcut:e.shortcut,actions:e.actionSet===`empty`?[]:e.actionSet===`navigation`?i.filter(e=>e.group===`Navigation`):i,onAskAi:e.showAi?e=>r(`Aegis AI request: ${e||`current workspace`}`):void 0})]})}},D=[`Matrix`,`OpenPalette`,`KeyboardFocus`,`Playground`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <Commands />
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <Commands defaultOpen />
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <Commands />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const portal = within(document.body);
    const opener = canvas.getByRole('button', {
      name: 'Search workspace'
    });
    opener.focus();
    await userEvent.keyboard('{Enter}');
    const input = await portal.findByRole('combobox', {
      name: 'Search commands'
    });
    await waitFor(() => expect(input).toHaveFocus());
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(opener).toHaveFocus());
    await userEvent.keyboard('{Enter}');
    await userEvent.type(await portal.findByRole('combobox'), 'Go to records');
    await userEvent.keyboard('{Enter}');
    await expect(canvas.getByRole('status')).toHaveTextContent('Records workspace selected');
    await waitFor(() => expect(opener).toHaveFocus());
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    shortcut: true,
    showAi: true,
    showIcons: true,
    actionSet: 'all'
  },
  argTypes: {
    open: {
      control: 'boolean'
    },
    shortcut: {
      control: 'boolean'
    },
    showAi: {
      control: 'boolean'
    },
    showIcons: {
      control: 'boolean'
    },
    actionSet: {
      control: 'inline-radio',
      options: ['all', 'navigation', 'empty']
    }
  },
  render: function CommandPlayground(args) {
    const [, updateArgs] = useArgs();
    const [result, setResult] = useStoryState('Choose an action to preview its result.');
    const actions: CommandAction[] = [{
      id: 'projects',
      label: 'Go to projects',
      group: 'Navigation',
      icon: args.showIcons ? <Folder /> : undefined,
      onSelect: () => setResult('Projects selected')
    }, {
      id: 'customers',
      label: 'Go to customers',
      group: 'Navigation',
      icon: args.showIcons ? <Search /> : undefined,
      onSelect: () => setResult('Customers selected')
    }, {
      id: 'create',
      label: 'Create project',
      group: 'Actions',
      icon: args.showIcons ? <Plus /> : undefined,
      onSelect: () => setResult('Project creation selected')
    }];
    return <div className="stack">
        <Button onClick={() => updateArgs({
        open: true
      })}>Search workspace</Button>
        <p className="muted" role="status">
          {result}
        </p>
        <CommandPalette open={args.open} onOpenChange={open => updateArgs({
        open
      })} shortcut={args.shortcut} actions={args.actionSet === 'empty' ? [] : args.actionSet === 'navigation' ? actions.filter(action => action.group === 'Navigation') : actions} onAskAi={args.showAi ? query => setResult(\`Aegis AI request: \${query || 'current workspace'}\`) : undefined} />
      </div>;
  }
}`,...E.parameters?.docs?.source}}}})))()}O();export{T as KeyboardFocus,C as Matrix,w as OpenPalette,E as Playground,D as __namedExportsOrder,S as default};