import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./field-IWj1HK_W.js";import{n as a,t as o}from"./button-BpCMuPJ8.js";import{n as s,t as c}from"./text-input-Brzbdhcv.js";import{a as l,i as u,r as d,t as f}from"./form-section-Dk6d4Oql.js";function p({disabled:e=!1}){let[t,n]=(0,m.useState)(`Alex Morgan`),[r,a]=(0,m.useState)(`alex@example.com`),[s,l]=(0,m.useState)(`No local changes saved.`);return(0,h.jsxs)(`form`,{"aria-label":`Local contact form`,onSubmit:e=>{e.preventDefault();let t=new FormData(e.currentTarget);l(`Saved locally: ${t.get(`contactName`)} · ${t.get(`email`)}`)},children:[(0,h.jsxs)(u,{legend:`Contact details`,description:`Local demo. Fields retain their own labels and validation.`,disabled:e,maxColumns:2,actions:(0,h.jsx)(o,{type:`submit`,children:`Save contact`}),children:[(0,h.jsx)(i,{label:`Name`,required:!0,children:(0,h.jsx)(c,{name:`contactName`,required:!0,value:t,onValueChange:n})}),(0,h.jsx)(i,{label:`Email`,required:!0,children:(0,h.jsx)(c,{name:`email`,type:`email`,required:!0,value:r,onValueChange:a})})]}),(0,h.jsx)(`p`,{role:`status`,children:s})]})}var m,h,g,_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{m=t(),a(),r(),s(),l(),d(),h=n(),{expect:g,userEvent:_,within:v}=__STORYBOOK_MODULE_TEST__,y={id:`patterns-formsection`,title:`Patterns/Page Structure/FormSection`,component:u,tags:[`autodocs`],args:{legend:`Contact details`,description:`Use the address where this customer receives updates.`,maxColumns:2,minItemWidth:`regular`,disabled:!1,children:null},argTypes:{legend:{control:`text`},description:{control:`text`},disabled:{control:`boolean`},maxColumns:{control:`inline-radio`,options:[1,2,3,4]},minItemWidth:{control:`inline-radio`,options:[`small`,`regular`,`large`]},children:{control:!1},actions:{control:!1}},render:e=>(0,h.jsxs)(u,{...e,children:[(0,h.jsx)(i,{label:`Name`,children:(0,h.jsx)(c,{name:`contactName`,defaultValue:`Alex Morgan`})}),(0,h.jsx)(i,{label:`Email`,children:(0,h.jsx)(c,{name:`email`,type:`email`,defaultValue:`alex@example.com`})})]}),parameters:{docs:{description:{component:`A native fieldset and legend with associated description and a shared responsive ContentGrid. It does not render a form, assign names to fields, validate data or submit values. Native disabled inheritance covers DOM descendants; portaled or custom controls still require their explicit disabled props. Keep legends noninteractive.`}}}},b={},x={args:{disabled:!0}},S={render:()=>(0,h.jsx)(p,{}),play:async({canvasElement:e})=>{let t=v(e);await g(t.getByRole(`group`,{name:`Contact details`})).toBeInTheDocument();let n=t.getByRole(`textbox`,{name:`Name (required)`});await _.clear(n),await _.type(n,`Sam Rivera`),await _.click(t.getByRole(`button`,{name:`Save contact`})),await g(t.getByRole(`status`)).toHaveTextContent(`Saved locally: Sam Rivera · alex@example.com`)}},C={render:()=>(0,h.jsx)(p,{disabled:!0}),play:async({canvasElement:e})=>{let t=v(e);await g(t.getByRole(`textbox`,{name:`Name (required)`})).toBeDisabled(),await g(t.getByRole(`button`,{name:`Save contact`})).toBeDisabled()}},w={render:()=>(0,h.jsx)(h.Fragment,{children:f.render()}),parameters:{docs:{description:{story:f.note}}}},T=[`Playground`,`Disabled`,`NativeForm`,`NativeDisabled`,`Anatomy`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <FormSectionExample />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('group', {
      name: 'Contact details'
    })).toBeInTheDocument();
    const input = canvas.getByRole('textbox', {
      name: 'Name (required)'
    });
    await userEvent.clear(input);
    await userEvent.type(input, 'Sam Rivera');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Save contact'
    }));
    await expect(canvas.getByRole('status')).toHaveTextContent('Saved locally: Sam Rivera · alex@example.com');
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <FormSectionExample disabled />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('textbox', {
      name: 'Name (required)'
    })).toBeDisabled();
    await expect(canvas.getByRole('button', {
      name: 'Save contact'
    })).toBeDisabled();
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <>{formSectionAnatomy.render()}</>,
  parameters: {
    docs: {
      description: {
        story: formSectionAnatomy.note
      }
    }
  }
}`,...w.parameters?.docs?.source}}}})))()}E();export{w as Anatomy,x as Disabled,C as NativeDisabled,S as NativeForm,b as Playground,T as __namedExportsOrder,y as default};