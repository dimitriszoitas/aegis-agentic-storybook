import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./text-input-cZ8nMNUA.js";import{n as a,t as o}from"./unsaved-changes-bar-CZIUazc3.js";function s(e){let[t,n]=(0,c.useState)(`Customer portal`),[r,a]=(0,c.useState)(`Customer portal`),s=(0,c.useRef)(null);return(0,l.jsxs)(`div`,{className:`stack`,children:[(0,l.jsx)(i,{ref:s,label:`Project name`,value:r,onValueChange:a}),(0,l.jsx)(o,{...e,dirty:r!==t,onSave:async()=>{await new Promise(e=>setTimeout(e,300)),n(r),s.current?.focus()},onDiscard:()=>{a(t),s.current?.focus()}}),(0,l.jsxs)(`p`,{role:`status`,children:[`Saved name: `,t]})]})}var c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{c=t(),r(),a(),l=n(),{expect:u,userEvent:d,within:f}=__STORYBOOK_MODULE_TEST__,p={id:`patterns-unsavedchangesbar`,title:`Patterns/Workflows/UnsavedChangesBar`,component:o,tags:[`autodocs`],args:{dirty:!0,onSave:async()=>{},onDiscard:()=>{}}},m={},h={render:e=>(0,l.jsx)(s,{...e}),play:async({canvasElement:e})=>{let t=f(e);await d.clear(t.getByRole(`textbox`,{name:`Project name`})),await d.type(t.getByRole(`textbox`,{name:`Project name`}),`Workspace refresh`),await d.click(t.getByRole(`button`,{name:`Save changes`})),await u(await t.findByText(`Saved name: Workspace refresh`)).toBeVisible()}},g={args:{onSave:async()=>{throw Error(`The service is unavailable. Your changes are still here.`)}}},_=[`Default`,`EditableForm`,`SaveFailure`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <EditableFormExample {...args} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.clear(canvas.getByRole('textbox', {
      name: 'Project name'
    }));
    await userEvent.type(canvas.getByRole('textbox', {
      name: 'Project name'
    }), 'Workspace refresh');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Save changes'
    }));
    await expect(await canvas.findByText('Saved name: Workspace refresh')).toBeVisible();
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    onSave: async () => {
      throw new Error('The service is unavailable. Your changes are still here.');
    }
  }
}`,...g.parameters?.docs?.source}}}})))()}v();export{m as Default,h as EditableForm,g as SaveFailure,_ as __namedExportsOrder,p as default};