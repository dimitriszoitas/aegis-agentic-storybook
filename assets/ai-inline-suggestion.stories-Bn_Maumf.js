import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./field-Cn4H2Qvn.js";import{n as a,t as o}from"./button-BYQwGwMz.js";import{n as s,t as c}from"./ai-inline-suggestion-C1Vy3gK8.js";function l(e){let[t,n]=(0,u.useState)(e.defaultValue??`Invoice follow-up`);return(0,d.jsxs)(`div`,{className:`stack`,style:{maxWidth:700},children:[(0,d.jsx)(c,{...e,value:t,onValueChange:t=>{n(t),e.onValueChange?.(t)}}),(0,d.jsx)(o,{children:`Next step`})]})}var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{u=t(),r(),a(),s(),d=n(),{expect:f,fn:p,userEvent:m,within:h}=__STORYBOOK_MODULE_TEST__,g=`Invoice follow-up for overdue accounts`,_={id:`components-ai-aiinlinesuggestion`,title:`Components/AI/AiInlineSuggestion`,component:c,args:{label:`Workflow name`,defaultValue:`Invoice follow-up`,suggestion:g,onValueChange:p(),onAccept:p(),onDismiss:p()},render:e=>(0,d.jsx)(l,{...e})},v={},y={args:{as:`textarea`,label:`Workflow description`,defaultValue:`Routes unpaid invoices `,suggestion:`Routes unpaid invoices to their account owner and adds a workspace notification.`,rows:3}},b={render:()=>(0,d.jsxs)(`div`,{className:`story-grid`,children:[(0,d.jsx)(c,{label:`Short workflow name`,size:`sm`,defaultValue:`Invoice `,suggestion:g}),(0,d.jsx)(i,{label:`Required description`,required:!0,helpText:`Describe the records this workflow should handle.`,children:(0,d.jsx)(c,{as:`textarea`,defaultValue:`Routes `,suggestion:`Routes unpaid invoices to their account owner for review.`})}),(0,d.jsx)(i,{label:`Workflow name needs review`,error:`Choose a name that identifies the observed behavior.`,children:(0,d.jsx)(c,{defaultValue:`Invoice `,suggestion:g})}),(0,d.jsx)(c,{label:`Read-only workflow`,readOnly:!0,defaultValue:`Invoice follow-up`,suggestion:g}),(0,d.jsx)(i,{label:`Disabled workflow name`,disabled:!0,children:(0,d.jsx)(c,{defaultValue:`Invoice follow-up`,suggestion:g})}),(0,d.jsx)(c,{label:`Unrelated edit`,defaultValue:`Project handoff`,suggestion:g})]})},x={args:{defaultValue:``,placeholder:`Name this workflow configuration`}},S={args:{maxLength:24}},C={play:async({canvasElement:e,args:t})=>{let n=h(e),r=n.getByRole(`textbox`,{name:`Workflow name`});await m.click(r),await m.keyboard(`{End}{Tab}`),await f(r).toHaveValue(g),await f(t.onAccept).toHaveBeenCalledWith(g),await f(r).toHaveFocus(),await m.tab(),await f(n.getByRole(`button`,{name:`Next step`})).toHaveFocus()}},w={play:async({canvasElement:e,args:t})=>{let n=h(e);await m.click(n.getByRole(`button`,{name:`Accept suggestion`})),await f(n.getByRole(`textbox`,{name:`Workflow name`})).toHaveValue(g),await f(t.onAccept).toHaveBeenCalledTimes(1)}},T={play:async({canvasElement:e,args:t})=>{let n=h(e),r=n.getByRole(`textbox`,{name:`Workflow name`});await m.click(r),await m.keyboard(`{End}{Escape}`),await f(t.onDismiss).toHaveBeenCalledTimes(1),await f(r).toHaveValue(`Invoice follow-up`),await f(n.queryByRole(`button`,{name:`Accept suggestion`})).not.toBeInTheDocument(),await m.keyboard(` workflow`),await f(r).toHaveValue(`Invoice follow-up workflow`),await m.tab(),await f(n.getByRole(`button`,{name:`Next step`})).toHaveFocus()}},E=[`Default`,`TextareaSuggestion`,`Matrix`,`EmptyPrefix`,`LengthLimit`,`KeyboardAccept`,`ButtonAccept`,`DismissAndKeepTyping`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    as: 'textarea',
    label: 'Workflow description',
    defaultValue: 'Routes unpaid invoices ',
    suggestion: 'Routes unpaid invoices to their account owner and adds a workspace notification.',
    rows: 3
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-grid">
      <AiInlineSuggestion label="Short workflow name" size="sm" defaultValue="Invoice " suggestion={fullName} />
      <Field label="Required description" required helpText="Describe the records this workflow should handle.">
        <AiInlineSuggestion as="textarea" defaultValue="Routes " suggestion="Routes unpaid invoices to their account owner for review." />
      </Field>
      <Field label="Workflow name needs review" error="Choose a name that identifies the observed behavior.">
        <AiInlineSuggestion defaultValue="Invoice " suggestion={fullName} />
      </Field>
      <AiInlineSuggestion label="Read-only workflow" readOnly defaultValue="Invoice follow-up" suggestion={fullName} />
      <Field label="Disabled workflow name" disabled>
        <AiInlineSuggestion defaultValue="Invoice follow-up" suggestion={fullName} />
      </Field>
      <AiInlineSuggestion label="Unrelated edit" defaultValue="Project handoff" suggestion={fullName} />
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '',
    placeholder: 'Name this workflow configuration'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    maxLength: 24
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement),
      input = canvas.getByRole('textbox', {
        name: 'Workflow name'
      });
    await userEvent.click(input);
    await userEvent.keyboard('{End}{Tab}');
    await expect(input).toHaveValue(fullName);
    await expect(args.onAccept).toHaveBeenCalledWith(fullName);
    await expect(input).toHaveFocus();
    await userEvent.tab();
    await expect(canvas.getByRole('button', {
      name: 'Next step'
    })).toHaveFocus();
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Accept suggestion'
    }));
    await expect(canvas.getByRole('textbox', {
      name: 'Workflow name'
    })).toHaveValue(fullName);
    await expect(args.onAccept).toHaveBeenCalledTimes(1);
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement),
      input = canvas.getByRole('textbox', {
        name: 'Workflow name'
      });
    await userEvent.click(input);
    await userEvent.keyboard('{End}{Escape}');
    await expect(args.onDismiss).toHaveBeenCalledTimes(1);
    await expect(input).toHaveValue('Invoice follow-up');
    await expect(canvas.queryByRole('button', {
      name: 'Accept suggestion'
    })).not.toBeInTheDocument();
    await userEvent.keyboard(' workflow');
    await expect(input).toHaveValue('Invoice follow-up workflow');
    await userEvent.tab();
    await expect(canvas.getByRole('button', {
      name: 'Next step'
    })).toHaveFocus();
  }
}`,...T.parameters?.docs?.source}}}})))()}D();export{w as ButtonAccept,v as Default,T as DismissAndKeepTyping,x as EmptyPrefix,C as KeyboardAccept,S as LengthLimit,b as Matrix,y as TextareaSuggestion,E as __namedExportsOrder,_ as default};