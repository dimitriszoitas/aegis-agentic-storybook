import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./button-6oZdnaTW.js";import{n as a,r as o,t as s}from"./rules-Cqnb58RU.js";import{n as c,t as l}from"./diff-view-XpEsioBh.js";function u(e){let[t,n]=(0,d.useState)(e.modified);return(0,f.jsxs)(`div`,{className:`stack`,children:[(0,f.jsx)(l,{...e,modified:t,onModifiedChange:t=>{n(t),e.onModifiedChange?.(t)}}),(0,f.jsx)(i,{children:`Save proposed configuration`})]})}var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{d=t(),s(),r(),c(),f=n(),{expect:p,fn:m,userEvent:h,waitFor:g,within:_}=__STORYBOOK_MODULE_TEST__,v=o[2].yaml,y=a.replace(`enabled: true`,`enabled: false`),b={id:`components-code-diffview`,title:`Components/Code/DiffView`,component:l,args:{original:v,modified:y,language:`yaml`,label:`Invoice follow-up configuration changes`,originalLabel:`Current configuration`,modifiedLabel:`Proposed configuration`,maxHeight:440},parameters:{layout:`padded`,docs:{description:{component:`CodeMirror computes real line and inline changes. Red minus markers identify removals; green plus markers identify additions. The legend counts affected lines. Focus changes folds unchanged context, and Show all lines restores it. Split and unified layouts share the same documents and change navigation.`}}}},x={},S={args:{defaultMode:`unified`}},C={args:{modified:v}},w={args:{original:``,modified:``,minHeight:120}},T={args:{original:``,defaultMode:`unified`,originalLabel:`No previous configuration`}},E={args:{modified:``,defaultMode:`unified`,modifiedLabel:`Configuration removed`}},D={args:{collapseUnchanged:!0,focusFirstChange:!0,modifiedIntent:`ai`,modifiedLabel:`AI proposal`},play:async({canvasElement:e})=>{let t=_(e);await p(t.getByText(/^− [1-9]\d* removed$/)).toBeVisible(),await p(t.getByText(/^\+ [1-9]\d* added$/)).toBeVisible(),await g(()=>p(e.querySelectorAll(`.cm-changedText`).length).toBeGreaterThan(0)),await h.click(t.getByRole(`button`,{name:`Show all lines`})),await p(t.getByRole(`button`,{name:`Focus changes`})).toHaveAttribute(`aria-pressed`,`false`),await g(()=>p(e.querySelector(`.cm-collapsedLines`)).toBeNull()),await h.click(t.getByRole(`button`,{name:`Unified view`})),await h.click(t.getByRole(`button`,{name:`Focus changes`})),await g(()=>p(e.querySelectorAll(`.cm-changedText`).length).toBeGreaterThan(0)),await h.click(t.getByRole(`button`,{name:`Next change`})),await p(t.getByRole(`textbox`,{name:/unified comparison/})).toHaveFocus()}},O={args:{collapseUnchanged:!0,defaultMode:`unified`,modified:v.replace(`level: high`,`level: critical`)},play:async({canvasElement:e})=>{let t=_(e),n=(await t.findAllByRole(`button`,{name:/Expand .* unchanged lines/}))[0];n.focus(),await h.keyboard(`{Enter}`),await g(()=>p(n).not.toBeInTheDocument()),await p(t.getByRole(`textbox`,{name:/unified comparison/})).toHaveFocus()}},k={args:{language:`json`,original:`{
  "severity": "high",
  "enabled": true,
  "threshold": 5
}`,modified:`{
  "severity": "critical",
  "enabled": true,
  "threshold": 3,
  "window": "15m"
}`,label:`Workflow configuration changes`,minHeight:180}},A={play:async({canvasElement:e})=>{let t=_(e);await h.click(t.getByRole(`button`,{name:`Unified view`})),await p(t.getByRole(`button`,{name:`Unified view`})).toHaveAttribute(`aria-pressed`,`true`),await h.click(t.getByRole(`button`,{name:`Next change`})),await p(t.getByRole(`textbox`,{name:/unified comparison/})).toHaveFocus(),await h.click(t.getByRole(`button`,{name:`Split view`})),await p(t.getByRole(`textbox`,{name:/Current configuration$/})).toBeVisible(),await p(t.getByRole(`textbox`,{name:/Proposed configuration$/})).toBeVisible()}},j={args:{readOnly:!1,onModifiedChange:m(),original:`level: high
`,modified:`level: critical
`,minHeight:140},render:e=>(0,f.jsx)(u,{...e}),play:async({canvasElement:e,args:t})=>{let n=_(e);await h.click(n.getByRole(`textbox`,{name:/Proposed configuration$/})),await h.keyboard(`{End}{Enter}# Reviewed`),await g(()=>p(t.onModifiedChange).toHaveBeenCalledWith(p.stringContaining(`# Reviewed`))),await h.tab(),await p(n.getByRole(`button`,{name:`Save proposed configuration`})).toHaveFocus()}},M=[`Split`,`Unified`,`NoChanges`,`Empty`,`AddedFile`,`RemovedFile`,`HighlightedChanges`,`CollapsedContext`,`Json`,`LayoutAndNavigation`,`EditableProposal`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    defaultMode: 'unified'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    modified: original
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    original: '',
    modified: '',
    minHeight: 120
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    original: '',
    defaultMode: 'unified',
    originalLabel: 'No previous configuration'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    modified: '',
    defaultMode: 'unified',
    modifiedLabel: 'Configuration removed'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    collapseUnchanged: true,
    focusFirstChange: true,
    modifiedIntent: 'ai',
    modifiedLabel: 'AI proposal'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(/^− [1-9]\\d* removed$/)).toBeVisible();
    await expect(canvas.getByText(/^\\+ [1-9]\\d* added$/)).toBeVisible();
    await waitFor(() => expect(canvasElement.querySelectorAll('.cm-changedText').length).toBeGreaterThan(0));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Show all lines'
    }));
    await expect(canvas.getByRole('button', {
      name: 'Focus changes'
    })).toHaveAttribute('aria-pressed', 'false');
    await waitFor(() => expect(canvasElement.querySelector('.cm-collapsedLines')).toBeNull());
    await userEvent.click(canvas.getByRole('button', {
      name: 'Unified view'
    }));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Focus changes'
    }));
    await waitFor(() => expect(canvasElement.querySelectorAll('.cm-changedText').length).toBeGreaterThan(0));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Next change'
    }));
    await expect(canvas.getByRole('textbox', {
      name: /unified comparison/
    })).toHaveFocus();
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    collapseUnchanged: true,
    defaultMode: 'unified',
    modified: original.replace('level: high', 'level: critical')
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const collapsed = await canvas.findAllByRole('button', {
      name: /Expand .* unchanged lines/
    });
    const first = collapsed[0];
    first.focus();
    await userEvent.keyboard('{Enter}');
    await waitFor(() => expect(first).not.toBeInTheDocument());
    await expect(canvas.getByRole('textbox', {
      name: /unified comparison/
    })).toHaveFocus();
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    language: 'json',
    original: '{\\n  "severity": "high",\\n  "enabled": true,\\n  "threshold": 5\\n}',
    modified: '{\\n  "severity": "critical",\\n  "enabled": true,\\n  "threshold": 3,\\n  "window": "15m"\\n}',
    label: 'Workflow configuration changes',
    minHeight: 180
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Unified view'
    }));
    await expect(canvas.getByRole('button', {
      name: 'Unified view'
    })).toHaveAttribute('aria-pressed', 'true');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Next change'
    }));
    await expect(canvas.getByRole('textbox', {
      name: /unified comparison/
    })).toHaveFocus();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Split view'
    }));
    await expect(canvas.getByRole('textbox', {
      name: /Current configuration$/
    })).toBeVisible();
    await expect(canvas.getByRole('textbox', {
      name: /Proposed configuration$/
    })).toBeVisible();
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    readOnly: false,
    onModifiedChange: fn(),
    original: 'level: high\\n',
    modified: 'level: critical\\n',
    minHeight: 140
  },
  render: args => <EditingExample {...args} />,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('textbox', {
      name: /Proposed configuration$/
    }));
    await userEvent.keyboard('{End}{Enter}# Reviewed');
    await waitFor(() => expect(args.onModifiedChange).toHaveBeenCalledWith(expect.stringContaining('# Reviewed')));
    await userEvent.tab();
    await expect(canvas.getByRole('button', {
      name: 'Save proposed configuration'
    })).toHaveFocus();
  }
}`,...j.parameters?.docs?.source}}}})))()}N();export{T as AddedFile,O as CollapsedContext,j as EditableProposal,w as Empty,D as HighlightedChanges,k as Json,A as LayoutAndNavigation,C as NoChanges,E as RemovedFile,x as Split,S as Unified,M as __namedExportsOrder,b as default};