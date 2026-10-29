import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./button-CLF7L5Y-.js";import{a,i as o,n as s,t as c}from"./inline-edit-ftglf5NP.js";var l,u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{l=t(),r(),a(),c(),u=n(),{useArgs:d}=__STORYBOOK_MODULE_PREVIEW_API__,{expect:f,userEvent:p,within:m}=__STORYBOOK_MODULE_TEST__,h={id:`components-forms-inlineedit`,title:`Components/Inputs & Selection/InlineEdit`,component:o,tags:[`autodocs`],args:{label:`Project name`,value:`Atlas`,onSave:()=>{}}},g={args:{disabled:!1,readOnly:!1,required:!0,emptyText:`Not set`},argTypes:{value:{control:`text`},label:{control:`text`},disabled:{control:`boolean`},readOnly:{control:`boolean`},required:{control:`boolean`},onSave:{control:!1},validate:{control:!1}},render:function(e){let[,t]=d();return(0,u.jsx)(o,{...e,onSave:e=>t({value:e})})}},_={render:function(){let[e,t]=(0,l.useState)(`Atlas`);return(0,u.jsx)(o,{label:`Project name`,value:e,onSave:t,validate:e=>e.length<3?`Use at least three characters.`:void 0})},play:async({canvasElement:e})=>{let t=m(e);await p.click(t.getByRole(`button`,{name:`Edit Project name`}));let n=t.getByRole(`textbox`,{name:`Project name`});await f(n).toHaveFocus(),await p.clear(n),await p.type(n,`No{Enter}`),await f(t.getByText(`Use at least three characters.`)).toBeVisible(),await p.keyboard(`{Escape}`),await f(t.getByText(`Atlas`)).toBeVisible(),await f(t.getByRole(`button`,{name:`Edit Project name`})).toHaveFocus(),await p.click(t.getByRole(`button`,{name:`Edit Project name`})),await p.clear(t.getByRole(`textbox`)),await p.type(t.getByRole(`textbox`),`Orion{Enter}`),await f(t.getByText(`Orion`)).toBeVisible(),await f(t.queryByRole(`textbox`)).not.toBeInTheDocument()}},v={render:function(){let[e,t]=(0,l.useState)(`Atlas`),[n,r]=(0,l.useState)(!0);return(0,u.jsxs)(`div`,{className:`stack`,children:[(0,u.jsx)(o,{label:`Project`,value:e,onSave:async e=>{if(n)throw Error(`Example unavailable`);t(e)}}),(0,u.jsx)(i,{onClick:()=>r(!1),children:`Allow save`}),(0,u.jsx)(i,{onClick:()=>t(`Server update`),children:`External update`})]})},play:async({canvasElement:e})=>{let t=m(e);await p.click(t.getByRole(`button`,{name:`Edit Project`})),await p.clear(t.getByRole(`textbox`)),await p.type(t.getByRole(`textbox`),`Draft`),await p.click(t.getByRole(`button`,{name:`Save`})),await f(t.getByText(`Could not save. Try again.`)).toBeVisible(),await f(t.getByRole(`textbox`)).toHaveValue(`Draft`),await p.click(t.getByRole(`button`,{name:`Allow save`})),await p.click(t.getByRole(`button`,{name:`External update`})),await p.click(t.getByRole(`button`,{name:`Save`})),await f(t.getByText(`This value changed while you were editing. Cancel and edit the latest value.`)).toBeVisible(),await p.click(t.getByRole(`button`,{name:`Cancel`})),await f(t.getByText(`Server update`)).toBeVisible()}},y={render:()=>(0,u.jsx)(u.Fragment,{children:s.render()})},b=[`Playground`,`DraftLifecycle`,`AsyncFailureAndConflict`,`Anatomy`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: false,
    readOnly: false,
    required: true,
    emptyText: 'Not set'
  },
  argTypes: {
    value: {
      control: 'text'
    },
    label: {
      control: 'text'
    },
    disabled: {
      control: 'boolean'
    },
    readOnly: {
      control: 'boolean'
    },
    required: {
      control: 'boolean'
    },
    onSave: {
      control: false
    },
    validate: {
      control: false
    }
  },
  render: function Playground(args) {
    const [, updateArgs] = useArgs();
    return <InlineEdit {...args} onSave={value => updateArgs({
      value
    })} />;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Lifecycle() {
    const [value, setValue] = useState('Atlas');
    return <InlineEdit label="Project name" value={value} onSave={setValue} validate={draft => draft.length < 3 ? 'Use at least three characters.' : undefined} />;
  },
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    await userEvent.click(c.getByRole('button', {
      name: 'Edit Project name'
    }));
    const input = c.getByRole('textbox', {
      name: 'Project name'
    });
    await expect(input).toHaveFocus();
    await userEvent.clear(input);
    await userEvent.type(input, 'No{Enter}');
    await expect(c.getByText('Use at least three characters.')).toBeVisible();
    await userEvent.keyboard('{Escape}');
    await expect(c.getByText('Atlas')).toBeVisible();
    await expect(c.getByRole('button', {
      name: 'Edit Project name'
    })).toHaveFocus();
    await userEvent.click(c.getByRole('button', {
      name: 'Edit Project name'
    }));
    await userEvent.clear(c.getByRole('textbox'));
    await userEvent.type(c.getByRole('textbox'), 'Orion{Enter}');
    await expect(c.getByText('Orion')).toBeVisible();
    await expect(c.queryByRole('textbox')).not.toBeInTheDocument();
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function AsyncExample() {
    const [value, setValue] = useState('Atlas');
    const [fail, setFail] = useState(true);
    return <div className="stack">
        <InlineEdit label="Project" value={value} onSave={async next => {
        if (fail) throw new Error('Example unavailable');
        setValue(next);
      }} />
        <Button onClick={() => setFail(false)}>Allow save</Button>
        <Button onClick={() => setValue('Server update')}>External update</Button>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    await userEvent.click(c.getByRole('button', {
      name: 'Edit Project'
    }));
    await userEvent.clear(c.getByRole('textbox'));
    await userEvent.type(c.getByRole('textbox'), 'Draft');
    await userEvent.click(c.getByRole('button', {
      name: 'Save'
    }));
    await expect(c.getByText('Could not save. Try again.')).toBeVisible();
    await expect(c.getByRole('textbox')).toHaveValue('Draft');
    await userEvent.click(c.getByRole('button', {
      name: 'Allow save'
    }));
    await userEvent.click(c.getByRole('button', {
      name: 'External update'
    }));
    await userEvent.click(c.getByRole('button', {
      name: 'Save'
    }));
    await expect(c.getByText('This value changed while you were editing. Cancel and edit the latest value.')).toBeVisible();
    await userEvent.click(c.getByRole('button', {
      name: 'Cancel'
    }));
    await expect(c.getByText('Server update')).toBeVisible();
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <>{inlineEditAnatomy.render()}</>
}`,...y.parameters?.docs?.source}}}})))()}x();export{y as Anatomy,v as AsyncFailureAndConflict,_ as DraftLifecycle,g as Playground,b as __namedExportsOrder,h as default};