import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./button-Bc30j06n.js";import{r as a,t as o}from"./rules-Cqnb58RU.js";import{a as s,r as c}from"./fixtures-BNPjpq8z.js";import{n as l,t as u}from"./code-editor-DIofJ8Im.js";function d(e){let[t,n]=(0,p.useState)(`name: Invoice payment follow-up
enabled: true
`);return(0,m.jsxs)(`div`,{className:`stack`,children:[(0,m.jsx)(u,{...e,value:t,label:`Editable YAML`,onValueChange:t=>{n(t),e.onValueChange?.(t)}}),(0,m.jsx)(i,{children:`Save configuration`}),(0,m.jsx)(`output`,{className:`sr-only`,"aria-label":`Current configuration`,children:t})]})}function f(e){let t=(0,p.useRef)(null);return(0,m.jsxs)(`div`,{className:`stack`,children:[(0,m.jsxs)(`div`,{className:`row`,children:[(0,m.jsx)(i,{onClick:()=>t.current?.foldAll(),children:`Fold sections`}),(0,m.jsx)(i,{onClick:()=>t.current?.unfoldAll(),children:`Expand sections`})]}),(0,m.jsx)(u,{...e,ref:t,readOnly:!0})]})}var p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{p=t(),o(),c(),r(),l(),m=n(),{expect:h,fn:g,userEvent:_,waitFor:v,within:y}=__STORYBOOK_MODULE_TEST__,b={id:`components-code-codeeditor`,title:`Components/Code/CodeEditor`,component:u,args:{defaultValue:a[2].yaml,language:`yaml`,label:`Workflow configuration editor`,onValueChange:g(),minHeight:160,maxHeight:420},parameters:{layout:`padded`}},x={},S={args:{language:`json`,label:`Event JSON editor`,defaultValue:JSON.stringify(s[0].events[0].payload,null,2)}},C={args:{readOnly:!0,label:`Read-only workflow configuration`}},w={args:{defaultValue:``,placeholder:`# Write a workflow configuration…`}},T={args:{readOnly:!0,highlightedLines:[{from:9,to:15}]}},E={args:{wrapLines:!0,folding:!1,lineNumbers:!1,statusBar:!1,defaultValue:`description: Routes incomplete customer onboarding checklists to the assigned account owner and adds a reminder before the next project milestone so the team can coordinate a timely handoff.`,minHeight:100},decorators:[e=>(0,m.jsx)(`div`,{style:{maxWidth:440},children:(0,m.jsx)(e,{})})]},D={args:{statusBar:(0,m.jsx)(`span`,{children:`WF-003 · Unsaved changes`})}},O={render:e=>(0,m.jsx)(d,{...e}),play:async({canvasElement:e,args:t})=>{let n=y(e);await _.click(n.getByRole(`textbox`,{name:`Editable YAML`})),await _.keyboard(`{End}{Enter}# Reviewed`),await v(()=>h(t.onValueChange).toHaveBeenCalledWith(h.stringContaining(`# Reviewed`))),await _.tab(),await h(n.getByRole(`button`,{name:`Save configuration`})).toHaveFocus(),await _.tab({shift:!0}),await h(n.getByRole(`textbox`,{name:`Editable YAML`})).toHaveFocus()}},k={render:e=>(0,m.jsx)(f,{...e}),play:async({canvasElement:e})=>{let t=y(e);await _.click(t.getByRole(`button`,{name:`Fold sections`})),await h(await t.findAllByRole(`button`,{name:`Expand folded code`})).not.toHaveLength(0),await _.click(t.getByRole(`button`,{name:`Expand sections`})),await v(()=>h(t.queryAllByRole(`button`,{name:`Expand folded code`})).toHaveLength(0))}},A=[`Default`,`Json`,`ReadOnly`,`Empty`,`HighlightedLines`,`WrappedAndMinimal`,`CustomStatus`,`KeyboardEditing`,`Folding`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    language: 'json',
    label: 'Event JSON editor',
    defaultValue: JSON.stringify(records[0].events[0].payload, null, 2)
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    readOnly: true,
    label: 'Read-only workflow configuration'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '',
    placeholder: '# Write a workflow configuration…'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    readOnly: true,
    highlightedLines: [{
      from: 9,
      to: 15
    }]
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    wrapLines: true,
    folding: false,
    lineNumbers: false,
    statusBar: false,
    defaultValue: 'description: Routes incomplete customer onboarding checklists to the assigned account owner and adds a reminder before the next project milestone so the team can coordinate a timely handoff.',
    minHeight: 100
  },
  decorators: [Story => <div style={{
    maxWidth: 440
  }}>
        <Story />
      </div>]
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    statusBar: <span>WF-003 · Unsaved changes</span>
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => <EditableExample {...args} />,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('textbox', {
      name: 'Editable YAML'
    }));
    await userEvent.keyboard('{End}{Enter}# Reviewed');
    await waitFor(() => expect(args.onValueChange).toHaveBeenCalledWith(expect.stringContaining('# Reviewed')));
    await userEvent.tab();
    await expect(canvas.getByRole('button', {
      name: 'Save configuration'
    })).toHaveFocus();
    await userEvent.tab({
      shift: true
    });
    await expect(canvas.getByRole('textbox', {
      name: 'Editable YAML'
    })).toHaveFocus();
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => <FoldingExample {...args} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Fold sections'
    }));
    await expect(await canvas.findAllByRole('button', {
      name: 'Expand folded code'
    })).not.toHaveLength(0);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Expand sections'
    }));
    await waitFor(() => expect(canvas.queryAllByRole('button', {
      name: 'Expand folded code'
    })).toHaveLength(0));
  }
}`,...k.parameters?.docs?.source}}}})))()}j();export{D as CustomStatus,x as Default,w as Empty,k as Folding,T as HighlightedLines,S as Json,O as KeyboardEditing,C as ReadOnly,E as WrappedAndMinimal,A as __namedExportsOrder,b as default};