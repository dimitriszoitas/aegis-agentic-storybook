import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{a as r,r as i}from"./fixtures-BNPjpq8z.js";import{n as a,t as o}from"./prompt-input-DkVTsW9t.js";function s({fail:e=!1}){let[t,n]=(0,l.useState)(``);return(0,u.jsxs)(`div`,{style:{maxWidth:560},children:[(0,u.jsx)(o,{availableContext:h,onSend:(t,r)=>{if(e)throw Error(`The assistant is temporarily unavailable. Your draft is preserved.`);n(`${t} · ${r.length} records attached`)}}),(0,u.jsx)(`p`,{role:`status`,children:t})]})}function c(){let[e,t]=(0,l.useState)(T.slice(0,1)),[n,r]=(0,l.useState)(!1),[i,a]=(0,l.useState)(``);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(o,{presentation:`hero`,placeholder:`Work with Aegis AI…`,availableContext:T,context:e,onContextChange:t,generating:n,onSend:(e,t)=>{a(`Requested: ${e} · ${t.length} context items`),r(!0)},onStop:()=>{r(!1),a(`Generation stopped.`)}}),(0,u.jsx)(`p`,{role:`status`,children:i})]})}var l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{l=t(),i(),a(),u=n(),{expect:d,userEvent:f,waitFor:p,within:m}=__STORYBOOK_MODULE_TEST__,h=r.slice(0,3).map(e=>({id:e.id,label:e.id,description:e.title,kind:`record`})),g={id:`patterns-ai-promptinput`,title:`Patterns/AI Assistance/PromptInput`,component:o,tags:[`autodocs`],args:{availableContext:h,onSend:()=>{}},decorators:[e=>(0,u.jsx)(`div`,{style:{maxWidth:560,padding:`var(--space-4)`},children:(0,u.jsx)(e,{})})]},_={render:()=>(0,u.jsx)(s,{})},v={args:{context:h,defaultValue:`Summarize these records and suggest what to inspect next.`}},y={args:{generating:!0,onStop:()=>{},context:h,defaultValue:`Draft a follow-up while the response streams…`}},b={args:{disabled:!0,defaultValue:`Waiting for review permissions.`}},x={render:()=>(0,u.jsx)(s,{fail:!0})},S={render:()=>(0,u.jsx)(s,{}),play:async({canvasElement:e})=>{let t=m(e),n=t.getByRole(`textbox`,{name:`Message to AI assistant`});await f.click(n),await f.keyboard(`/`);let r=await m(e.ownerDocument.body).findByRole(`combobox`,{name:`Search prompt commands`});await p(()=>d(r).toHaveFocus()),await f.type(r,`summarize`),await f.keyboard(`{Enter}`),await p(()=>{d(n).toHaveValue(`Summarize the attached records for a handoff.`),d(n).toHaveFocus()}),await f.keyboard(`{Shift>}{Enter}{/Shift}`),await d(n).toHaveValue(`Summarize the attached records for a handoff.
`),await f.keyboard(`Include record identifiers.`),await d(n).toHaveValue(`Summarize the attached records for a handoff.
Include record identifiers.`),await f.keyboard(`{Enter}`),await d(n).toHaveValue(``),await d(t.getByRole(`status`)).toHaveTextContent(`Include record identifiers.`)}},C={play:async({canvasElement:e})=>{await f.click(m(e).getByRole(`button`,{name:`Prompt commands`}))}},w={play:async({canvasElement:e})=>{await f.click(m(e).getByRole(`button`,{name:`Attach context`}))}},T=[{id:`projects`,label:`Project portfolio`,kind:`scope`},{id:`customers`,label:`Customer accounts`,kind:`scope`},{id:`quarterly-review`,label:`Quarterly planning and cross-team delivery review`,kind:`config`}],E={render:()=>(0,u.jsx)(c,{})},D={render:()=>(0,u.jsx)(c,{}),play:async({canvasElement:e})=>{let t=m(e),n=m(e.ownerDocument.body),r=t.getByRole(`textbox`,{name:`Message to AI assistant`});await f.click(t.getByRole(`button`,{name:`Attach context`}));let i=await n.findByRole(`combobox`,{name:`Search attach context`});await p(()=>d(i).toHaveFocus()),await f.type(i,`customer`),await f.keyboard(`{Enter}`),await p(()=>d(r).toHaveFocus()),await d(t.getByRole(`region`,{name:`Attached context`})).toHaveTextContent(`Customer accounts`),await f.keyboard(`/`);let a=await n.findByRole(`combobox`,{name:`Search prompt commands`});await p(()=>d(a).toHaveFocus()),await f.type(a,`summarize`),await f.keyboard(`{Enter}`),await p(()=>d(r).toHaveFocus()),await f.keyboard(`{Shift>}{Enter}{/Shift}Include owners.`),await d(r).toHaveValue(`Summarize the attached records for a handoff.
Include owners.`),await f.keyboard(`{Enter}`),await p(()=>d(r).toHaveValue(``)),await d(t.getByRole(`status`)).toHaveTextContent(`2 context items`),await f.click(t.getByRole(`button`,{name:`Stop generation`})),await p(()=>d(r).toHaveFocus()),await d(t.getByRole(`status`)).toHaveTextContent(`Generation stopped.`),await f.click(t.getByRole(`button`,{name:`Remove Customer accounts from context`})),await p(()=>d(r).toHaveFocus()),await d(t.getByRole(`region`,{name:`Attached context`})).not.toHaveTextContent(`Customer accounts`)}},O={args:{presentation:`hero`,context:T,placeholder:`Work with Aegis AI…`}},k=[`Default`,`AttachedContext`,`Generating`,`Disabled`,`FailedSend`,`KeyboardComposer`,`OpenCommands`,`OpenAttachments`,`Hero`,`HeroKeyboardComposer`,`HeroLongContext`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <Demo />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    context,
    defaultValue: 'Summarize these records and suggest what to inspect next.'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    generating: true,
    onStop: () => {},
    context,
    defaultValue: 'Draft a follow-up while the response streams…'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: 'Waiting for review permissions.'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Demo fail />
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Demo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Message to AI assistant'
    });
    await userEvent.click(input);
    await userEvent.keyboard('/');
    const page = within(canvasElement.ownerDocument.body);
    const commands = await page.findByRole('combobox', {
      name: 'Search prompt commands'
    });
    await waitFor(() => expect(commands).toHaveFocus());
    await userEvent.type(commands, 'summarize');
    await userEvent.keyboard('{Enter}');
    await waitFor(() => {
      expect(input).toHaveValue('Summarize the attached records for a handoff.');
      expect(input).toHaveFocus();
    });
    await userEvent.keyboard('{Shift>}{Enter}{/Shift}');
    await expect(input).toHaveValue('Summarize the attached records for a handoff.\\n');
    await userEvent.keyboard('Include record identifiers.');
    await expect(input).toHaveValue('Summarize the attached records for a handoff.\\nInclude record identifiers.');
    await userEvent.keyboard('{Enter}');
    await expect(input).toHaveValue('');
    await expect(canvas.getByRole('status')).toHaveTextContent('Include record identifiers.');
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    await userEvent.click(within(canvasElement).getByRole('button', {
      name: 'Prompt commands'
    }));
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    await userEvent.click(within(canvasElement).getByRole('button', {
      name: 'Attach context'
    }));
  }
}`,...w.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <HeroDemo />
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <HeroDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const page = within(canvasElement.ownerDocument.body);
    const input = canvas.getByRole('textbox', {
      name: 'Message to AI assistant'
    });
    await userEvent.click(canvas.getByRole('button', {
      name: 'Attach context'
    }));
    const attachmentSearch = await page.findByRole('combobox', {
      name: 'Search attach context'
    });
    await waitFor(() => expect(attachmentSearch).toHaveFocus());
    await userEvent.type(attachmentSearch, 'customer');
    await userEvent.keyboard('{Enter}');
    await waitFor(() => expect(input).toHaveFocus());
    await expect(canvas.getByRole('region', {
      name: 'Attached context'
    })).toHaveTextContent('Customer accounts');
    await userEvent.keyboard('/');
    const commands = await page.findByRole('combobox', {
      name: 'Search prompt commands'
    });
    await waitFor(() => expect(commands).toHaveFocus());
    await userEvent.type(commands, 'summarize');
    await userEvent.keyboard('{Enter}');
    await waitFor(() => expect(input).toHaveFocus());
    await userEvent.keyboard('{Shift>}{Enter}{/Shift}Include owners.');
    await expect(input).toHaveValue('Summarize the attached records for a handoff.\\nInclude owners.');
    await userEvent.keyboard('{Enter}');
    await waitFor(() => expect(input).toHaveValue(''));
    await expect(canvas.getByRole('status')).toHaveTextContent('2 context items');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Stop generation'
    }));
    await waitFor(() => expect(input).toHaveFocus());
    await expect(canvas.getByRole('status')).toHaveTextContent('Generation stopped.');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Remove Customer accounts from context'
    }));
    await waitFor(() => expect(input).toHaveFocus());
    await expect(canvas.getByRole('region', {
      name: 'Attached context'
    })).not.toHaveTextContent('Customer accounts');
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    presentation: 'hero',
    context: workspaceContext,
    placeholder: 'Work with Aegis AI…'
  }
}`,...O.parameters?.docs?.source}}}})))()}A();export{v as AttachedContext,_ as Default,b as Disabled,x as FailedSend,y as Generating,E as Hero,D as HeroKeyboardComposer,O as HeroLongContext,S as KeyboardComposer,w as OpenAttachments,C as OpenCommands,k as __namedExportsOrder,g as default};