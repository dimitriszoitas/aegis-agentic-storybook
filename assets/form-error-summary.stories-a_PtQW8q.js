import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./field-B_LPfZ_c.js";import{n as a,t as o}from"./button-B9oXzAWe.js";import{n as s,t as c}from"./text-input-cZ8nMNUA.js";import{a as l,i as u,r as d,t as f}from"./form-error-summary-DoBcWs-l.js";function p(){let[e,t]=(0,m.useState)([]),[n,r]=(0,m.useState)(0),[a,s]=(0,m.useState)(!1);return(0,h.jsxs)(`form`,{noValidate:!0,className:`stack`,onSubmit:e=>{e.preventDefault();let n=new FormData(e.currentTarget),i=String(n.get(`email`)??``).includes(`@`)?[]:[{id:`email-invalid`,fieldId:`summary-example-email`,message:`Enter a valid email address.`}];t(i),r(e=>e+1),s(!i.length)},children:[(0,h.jsx)(u,{errors:e,focusRequestKey:n,description:`Local validation example.`}),(0,h.jsx)(i,{id:`summary-example-email`,label:`Email`,error:e.length?`Enter a valid email address.`:void 0,children:(0,h.jsx)(c,{name:`email`})}),(0,h.jsx)(o,{type:`submit`,children:`Save locally`}),a&&(0,h.jsx)(`p`,{role:`status`,children:`Saved locally.`})]})}var m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{m=t(),a(),r(),s(),l(),d(),h=n(),{expect:g,userEvent:_,within:v}=__STORYBOOK_MODULE_TEST__,y={id:`patterns-formerrorsummary`,title:`Components/Feedback/FormErrorSummary`,component:u,tags:[`autodocs`],args:{title:`Check the following fields`,description:`Correct these entries before saving.`,errors:[{id:`email-required`,fieldId:`summary-playground-email`,message:`Enter an email address.`}]},argTypes:{title:{control:`text`},description:{control:`text`},errors:{control:!1},focusField:{control:!1},focusRequestKey:{control:`number`}},render:e=>(0,h.jsxs)(`div`,{className:`stack`,children:[(0,h.jsx)(u,{...e}),(0,h.jsx)(i,{id:`summary-playground-email`,label:`Email`,children:(0,h.jsx)(c,{})})]})},b={},x={args:{errors:[]}},S={render:()=>(0,h.jsx)(p,{}),play:async({canvasElement:e})=>{let t=v(e);await _.click(t.getByRole(`button`,{name:`Save locally`})),await g(t.getByRole(`region`,{name:`Check the following fields`})).toHaveFocus(),await _.click(t.getByRole(`link`,{name:`Enter a valid email address.`})),await g(t.getByRole(`textbox`,{name:`Email`})).toHaveFocus(),await _.type(t.getByRole(`textbox`,{name:`Email`}),`alex@example.com`),await _.click(t.getByRole(`button`,{name:`Save locally`})),await g(t.getByRole(`status`)).toHaveTextContent(`Saved locally.`),await g(t.queryByRole(`region`,{name:`Check the following fields`})).not.toBeInTheDocument()}},C={render:()=>(0,h.jsx)(h.Fragment,{children:f.render()})},p.__docgenInfo={description:``,methods:[],displayName:`ErrorSummaryExample`},w=[`Playground`,`Empty`,`ErrorSummaryExample`,`ValidationAndFocus`,`Anatomy`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    errors: []
  }
}`,...x.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`function ErrorSummaryExample() {
  const [errors, setErrors] = useState<FormErrorSummaryItem[]>([]);
  const [attempt, setAttempt] = useState(0);
  const [saved, setSaved] = useState(false);
  return <form noValidate className="stack" onSubmit={event => {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const next = !String(values.get('email') ?? '').includes('@') ? [{
      id: 'email-invalid',
      fieldId: 'summary-example-email',
      message: 'Enter a valid email address.'
    }] : [];
    setErrors(next);
    setAttempt(value => value + 1);
    setSaved(!next.length);
  }}>
      <FormErrorSummary errors={errors} focusRequestKey={attempt} description="Local validation example." />
      <Field id="summary-example-email" label="Email" error={errors.length ? 'Enter a valid email address.' : undefined}>
        <TextInput name="email" />
      </Field>
      <Button type="submit">Save locally</Button>
      {saved && <p role="status">Saved locally.</p>}
    </form>;
}`,...p.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <ErrorSummaryExample />,
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    await userEvent.click(c.getByRole('button', {
      name: 'Save locally'
    }));
    await expect(c.getByRole('region', {
      name: 'Check the following fields'
    })).toHaveFocus();
    await userEvent.click(c.getByRole('link', {
      name: 'Enter a valid email address.'
    }));
    await expect(c.getByRole('textbox', {
      name: 'Email'
    })).toHaveFocus();
    await userEvent.type(c.getByRole('textbox', {
      name: 'Email'
    }), 'alex@example.com');
    await userEvent.click(c.getByRole('button', {
      name: 'Save locally'
    }));
    await expect(c.getByRole('status')).toHaveTextContent('Saved locally.');
    await expect(c.queryByRole('region', {
      name: 'Check the following fields'
    })).not.toBeInTheDocument();
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <>{formErrorSummaryAnatomy.render()}</>
}`,...C.parameters?.docs?.source}}}})))()}T();export{C as Anatomy,x as Empty,p as ErrorSummaryExample,b as Playground,S as ValidationAndFocus,w as __namedExportsOrder,y as default};