import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./field-D2BQeMe6.js";import{n as a,t as o}from"./button-DTEiHM0V.js";import{a as s,i as c,n as l,t as u}from"./password-input-Bqms7b6D.js";var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{d=t(),a(),r(),s(),u(),f=n(),{useArgs:p}=__STORYBOOK_MODULE_PREVIEW_API__,{expect:m,userEvent:h,within:g}=__STORYBOOK_MODULE_TEST__,_={id:`components-forms-passwordinput`,title:`Components/Inputs & Selection/PasswordInput`,component:c,tags:[`autodocs`],args:{label:`Password`,autoComplete:`current-password`},argTypes:{size:{control:`inline-radio`,options:[`sm`,`md`,`lg`]},prefix:{control:!1}},parameters:{docs:{description:{component:`A native password field built on TextInput, with an accessible Show password / Hide password action. It starts concealed. Read-only values remain revealable; a disabled Field disables the input and reveal action. The button never submits the form, changes the value or moves focus. Controlled/uncontrolled values, native input properties, both change callbacks and the public input ref retain TextInput behavior. Supply current-password or new-password autocomplete to match the task; no strength checking, authentication or secure storage is provided.`}}}},v={},y={render:()=>(0,f.jsxs)(`div`,{className:`story-grid`,children:[(0,f.jsx)(c,{label:`Current password`,name:`password`,autoComplete:`current-password`}),(0,f.jsx)(i,{label:`New password`,helpText:`Use a unique password.`,error:`Enter a longer password.`,children:(0,f.jsx)(c,{name:`new-password`,autoComplete:`new-password`,defaultValue:`demo`,required:!0})}),(0,f.jsx)(i,{label:`Disabled password`,disabled:!0,helpText:`The account is managed elsewhere.`,children:(0,f.jsx)(c,{defaultValue:`example-only`})}),(0,f.jsx)(c,{label:`Read-only example`,defaultValue:`example-only`,readOnly:!0})]})},b={render:()=>(0,f.jsx)(f.Fragment,{children:l.render()}),parameters:{docs:{description:{story:`Populated anatomy specimen: Field label and requirement, optional key prefix, native input, visibility action, help text and validation feedback. The canonical anatomy definition identifies each actual DOM part for the shared annotation view.`}}}},x={render:function(){let e=(0,d.useRef)(null),[t,n]=(0,d.useState)(``),[r,a]=(0,d.useState)(0),[s,l]=(0,d.useState)(0),[u,p]=(0,d.useState)(0);return(0,f.jsxs)(`form`,{className:`stack`,onSubmit:e=>{e.preventDefault();let t=new FormData(e.currentTarget);p(String(t.get(`password`)??``).length),l(e=>e+1)},children:[(0,f.jsx)(i,{label:`Account password`,helpText:`Example form; no credentials are sent.`,children:(0,f.jsx)(c,{ref:e,name:`password`,autoComplete:`current-password`,value:t,onValueChange:n,onChange:()=>a(e=>e+1)})}),(0,f.jsx)(o,{onClick:()=>e.current?.focus(),children:`Focus password`}),(0,f.jsx)(o,{type:`submit`,children:`Continue`}),(0,f.jsxs)(`p`,{role:`status`,children:[r,` native changes; `,s,` submissions; `,u,` submitted characters`]})]})},play:async({canvasElement:e})=>{let t=g(e),n=t.getByLabelText(`Account password`);await m(n).toHaveAttribute(`type`,`password`),await h.type(n,`sample`),await m(n).toHaveValue(`sample`),await m(t.getByRole(`status`)).toHaveTextContent(`6 native changes; 0 submissions`),await h.click(t.getByRole(`button`,{name:`Focus password`})),await m(n).toHaveFocus(),await h.tab(),await m(t.getByRole(`button`,{name:`Show password`})).toHaveFocus(),await h.keyboard(`{Enter}`),await m(n).toHaveAttribute(`type`,`text`),await m(n).toHaveValue(`sample`),await m(t.getByRole(`button`,{name:`Hide password`})).toHaveFocus(),await m(t.getByRole(`status`)).toHaveTextContent(`6 native changes; 0 submissions`),await h.keyboard(` `),await m(n).toHaveAttribute(`type`,`password`),await m(t.getByRole(`button`,{name:`Show password`})).toHaveFocus(),await h.click(t.getByRole(`button`,{name:`Continue`})),await m(t.getByRole(`status`)).toHaveTextContent(`1 submissions; 6 submitted characters`)}},S={args:{label:`Read-only password`,defaultValue:`example-only`,readOnly:!0},play:async({canvasElement:e})=>{let t=g(e),n=t.getByLabelText(`Read-only password`);await m(n).toHaveAttribute(`readonly`),await h.click(t.getByRole(`button`,{name:`Show password`})),await m(n).toHaveAttribute(`type`,`text`),await h.type(n,`changed`),await m(n).toHaveValue(`example-only`)}},C={args:{label:`New password`,defaultValue:`sample`,autoComplete:`new-password`},play:async({canvasElement:e})=>{let t=g(e),n=t.getByLabelText(`New password`);await h.type(n,`-only`),await h.click(t.getByRole(`button`,{name:`Show password`})),await m(n).toHaveValue(`sample-only`),await m(n).toHaveAttribute(`type`,`text`),await h.click(t.getByRole(`button`,{name:`Hide password`})),await m(n).toHaveValue(`sample-only`),await m(n).toHaveAttribute(`type`,`password`)}},w={args:{label:`Password`,value:``,defaultValue:void 0,placeholder:`Enter your password`,autoComplete:`current-password`,size:`md`,disabled:!1,readOnly:!1,invalid:!1,required:!1,showPasswordLabel:`Show password`,hidePasswordLabel:`Hide password`},argTypes:{label:{control:`text`},value:{control:`text`},placeholder:{control:`text`},autoComplete:{control:`inline-radio`,options:[`current-password`,`new-password`,`off`]},size:{control:`inline-radio`,options:[`sm`,`md`,`lg`]},disabled:{control:`boolean`},readOnly:{control:`boolean`},invalid:{control:`boolean`},required:{control:`boolean`},showPasswordLabel:{control:`text`},hidePasswordLabel:{control:`text`}},render:function(e){let[,t]=p();return(0,f.jsx)(c,{...e,defaultValue:void 0,onValueChange:e=>t({value:e})})}},T=[`Default`,`States`,`Anatomy`,`KeyboardAndForm`,`ReadOnlyReveal`,`UncontrolledEntry`,`Playground`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-grid">
      <PasswordInput label="Current password" name="password" autoComplete="current-password" />
      <Field label="New password" helpText="Use a unique password." error="Enter a longer password.">
        <PasswordInput name="new-password" autoComplete="new-password" defaultValue="demo" required />
      </Field>
      <Field label="Disabled password" disabled helpText="The account is managed elsewhere.">
        <PasswordInput defaultValue="example-only" />
      </Field>
      <PasswordInput label="Read-only example" defaultValue="example-only" readOnly />
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <>{passwordInputAnatomy.render()}</>,
  parameters: {
    docs: {
      description: {
        story: 'Populated anatomy specimen: Field label and requirement, optional key prefix, native input, visibility action, help text and validation feedback. The canonical anatomy definition identifies each actual DOM part for the shared annotation view.'
      }
    }
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function KeyboardFormExample() {
    const input = useRef<HTMLInputElement>(null);
    const [value, setValue] = useState('');
    const [changes, setChanges] = useState(0);
    const [submissions, setSubmissions] = useState(0);
    const [submittedLength, setSubmittedLength] = useState(0);
    return <form className="stack" onSubmit={event => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      setSubmittedLength(String(data.get('password') ?? '').length);
      setSubmissions(count => count + 1);
    }}>
        <Field label="Account password" helpText="Example form; no credentials are sent.">
          <PasswordInput ref={input} name="password" autoComplete="current-password" value={value} onValueChange={setValue} onChange={() => setChanges(count => count + 1)} />
        </Field>
        <Button onClick={() => input.current?.focus()}>Focus password</Button>
        <Button type="submit">Continue</Button>
        <p role="status">
          {changes} native changes; {submissions} submissions; {submittedLength} submitted
          characters
        </p>
      </form>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText('Account password');
    await expect(input).toHaveAttribute('type', 'password');
    await userEvent.type(input, 'sample');
    await expect(input).toHaveValue('sample');
    await expect(canvas.getByRole('status')).toHaveTextContent('6 native changes; 0 submissions');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Focus password'
    }));
    await expect(input).toHaveFocus();
    await userEvent.tab();
    await expect(canvas.getByRole('button', {
      name: 'Show password'
    })).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    await expect(input).toHaveAttribute('type', 'text');
    await expect(input).toHaveValue('sample');
    await expect(canvas.getByRole('button', {
      name: 'Hide password'
    })).toHaveFocus();
    await expect(canvas.getByRole('status')).toHaveTextContent('6 native changes; 0 submissions');
    await userEvent.keyboard(' ');
    await expect(input).toHaveAttribute('type', 'password');
    await expect(canvas.getByRole('button', {
      name: 'Show password'
    })).toHaveFocus();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Continue'
    }));
    await expect(canvas.getByRole('status')).toHaveTextContent('1 submissions; 6 submitted characters');
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Read-only password',
    defaultValue: 'example-only',
    readOnly: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText('Read-only password');
    await expect(input).toHaveAttribute('readonly');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Show password'
    }));
    await expect(input).toHaveAttribute('type', 'text');
    await userEvent.type(input, 'changed');
    await expect(input).toHaveValue('example-only');
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'New password',
    defaultValue: 'sample',
    autoComplete: 'new-password'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText('New password');
    await userEvent.type(input, '-only');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Show password'
    }));
    await expect(input).toHaveValue('sample-only');
    await expect(input).toHaveAttribute('type', 'text');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Hide password'
    }));
    await expect(input).toHaveValue('sample-only');
    await expect(input).toHaveAttribute('type', 'password');
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    value: '',
    defaultValue: undefined,
    placeholder: 'Enter your password',
    autoComplete: 'current-password',
    size: 'md',
    disabled: false,
    readOnly: false,
    invalid: false,
    required: false,
    showPasswordLabel: 'Show password',
    hidePasswordLabel: 'Hide password'
  },
  argTypes: {
    label: {
      control: 'text'
    },
    value: {
      control: 'text'
    },
    placeholder: {
      control: 'text'
    },
    autoComplete: {
      control: 'inline-radio',
      options: ['current-password', 'new-password', 'off']
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg']
    },
    disabled: {
      control: 'boolean'
    },
    readOnly: {
      control: 'boolean'
    },
    invalid: {
      control: 'boolean'
    },
    required: {
      control: 'boolean'
    },
    showPasswordLabel: {
      control: 'text'
    },
    hidePasswordLabel: {
      control: 'text'
    }
  },
  render: function PasswordInputPlayground(args) {
    const [, updateArgs] = useArgs();
    return <PasswordInput {...args} defaultValue={undefined} onValueChange={value => updateArgs({
      value
    })} />;
  }
}`,...w.parameters?.docs?.source}}}})))()}E();export{b as Anatomy,v as Default,x as KeyboardAndForm,w as Playground,S as ReadOnlyReveal,y as States,C as UncontrolledEntry,T as __namedExportsOrder,_ as default};