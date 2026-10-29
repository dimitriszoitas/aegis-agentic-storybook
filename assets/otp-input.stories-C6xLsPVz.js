import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./field-Crfqy8aH.js";import{n as a,t as o}from"./button-Bc30j06n.js";import{a as s,i as c,n as l,t as u}from"./otp-input-CBpBkcx9.js";var d,f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{d=t(),a(),r(),s(),u(),f=n(),{useArgs:p}=__STORYBOOK_MODULE_PREVIEW_API__,{expect:m,userEvent:h,within:g}=__STORYBOOK_MODULE_TEST__,_={id:`components-forms-otpinput`,title:`Components/Inputs & Selection/OtpInput`,component:c,tags:[`autodocs`],args:{label:`Verification code`},parameters:{docs:{description:{component:`One real input for a whole one-time code. Paste removes unsupported characters, native one-time-code autocomplete remains available, and length constrains the candidate. Completion does not submit, authenticate or consume a code.`}}}},v={args:{value:``,length:6,mode:`numeric`,masked:!1,size:`md`,disabled:!1,readOnly:!1,invalid:!1,required:!0,placeholder:`123456`},argTypes:{label:{control:`text`},value:{control:`text`},length:{control:{type:`number`,min:1,max:32}},mode:{control:`inline-radio`,options:[`numeric`,`alphanumeric`]},masked:{control:`boolean`},size:{control:`inline-radio`,options:[`sm`,`md`,`lg`]},disabled:{control:`boolean`},readOnly:{control:`boolean`},invalid:{control:`boolean`},required:{control:`boolean`},placeholder:{control:`text`}},render:function(e){let[,t]=p();return(0,f.jsx)(c,{...e,onValueChange:n=>{e.onValueChange?.(n),t({value:n})}})}},y={render:()=>(0,f.jsx)(f.Fragment,{children:l.render()})},b={render:function(){let[e,t]=(0,d.useState)(``),[n,r]=(0,d.useState)(``),[a,s]=(0,d.useState)(``),[l,u]=(0,d.useState)(0);return(0,f.jsxs)(`form`,{className:`stack`,onSubmit:e=>{e.preventDefault(),s(String(new FormData(e.currentTarget).get(`code`)))},children:[(0,f.jsx)(i,{label:`Verification code`,helpText:`Use the six digits from your message.`,children:(0,f.jsx)(c,{name:`code`,value:e,onValueChange:t,onChange:()=>u(e=>e+1),onComplete:r,required:!0})}),(0,f.jsx)(c,{label:`Read-only code`,defaultValue:`654321`,readOnly:!0}),(0,f.jsx)(o,{type:`submit`,children:`Verify candidate`}),(0,f.jsx)(o,{onClick:()=>t(``),children:`Clear from host`}),(0,f.jsx)(`output`,{"aria-label":`Completed candidate`,children:n}),(0,f.jsx)(`output`,{"aria-label":`Submitted code`,children:a}),(0,f.jsx)(`output`,{"aria-label":`Native changes`,children:l})]})},play:async({canvasElement:e})=>{let t=g(e),n=t.getByRole(`textbox`,{name:`Verification code`});await h.click(n),await h.paste(`12 34-56`),await m(n).toHaveValue(`123456`),await m(t.getByLabelText(`Completed candidate`)).toHaveTextContent(`123456`),await m(t.getByLabelText(`Native changes`)).toHaveTextContent(`1`),await h.click(t.getByRole(`button`,{name:`Verify candidate`})),await m(t.getByLabelText(`Submitted code`)).toHaveTextContent(`123456`),await h.click(t.getByRole(`button`,{name:`Clear from host`})),await m(n).toHaveValue(``),await h.type(n,`1a2b`),await m(n).toHaveValue(`12`),await h.keyboard(`{Backspace}`),await m(n).toHaveValue(`1`),await m(t.getByRole(`textbox`,{name:`Read-only code`})).toHaveAttribute(`readonly`)}},x={args:{mode:`alphanumeric`,length:4,defaultValue:``,value:void 0},play:async({canvasElement:e})=>{let t=g(e).getByRole(`textbox`,{name:`Verification code`});await h.click(t),await h.paste(`ab-9z`),await m(t).toHaveValue(`AB9Z`)}},S=[`Playground`,`Anatomy`,`PasteAndForm`,`Alphanumeric`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    value: '',
    length: 6,
    mode: 'numeric',
    masked: false,
    size: 'md',
    disabled: false,
    readOnly: false,
    invalid: false,
    required: true,
    placeholder: '123456'
  },
  argTypes: {
    label: {
      control: 'text'
    },
    value: {
      control: 'text'
    },
    length: {
      control: {
        type: 'number',
        min: 1,
        max: 32
      }
    },
    mode: {
      control: 'inline-radio',
      options: ['numeric', 'alphanumeric']
    },
    masked: {
      control: 'boolean'
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
    placeholder: {
      control: 'text'
    }
  },
  render: function PlaygroundExample(args) {
    const [, updateArgs] = useArgs();
    return <OtpInput {...args} onValueChange={value => {
      args.onValueChange?.(value);
      updateArgs({
        value
      });
    }} />;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <>{otpInputAnatomy.render()}</>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Example() {
    const [value, setValue] = useState('');
    const [completed, setCompleted] = useState('');
    const [submitted, setSubmitted] = useState('');
    const [nativeChanges, setChanges] = useState(0);
    return <form className="stack" onSubmit={e => {
      e.preventDefault();
      setSubmitted(String(new FormData(e.currentTarget).get('code')));
    }}>
        <Field label="Verification code" helpText="Use the six digits from your message.">
          <OtpInput name="code" value={value} onValueChange={setValue} onChange={() => setChanges(n => n + 1)} onComplete={setCompleted} required />
        </Field>
        <OtpInput label="Read-only code" defaultValue="654321" readOnly />
        <Button type="submit">Verify candidate</Button>
        <Button onClick={() => setValue('')}>Clear from host</Button>
        <output aria-label="Completed candidate">{completed}</output>
        <output aria-label="Submitted code">{submitted}</output>
        <output aria-label="Native changes">{nativeChanges}</output>
      </form>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Verification code'
    });
    await userEvent.click(input);
    await userEvent.paste('12 34-56');
    await expect(input).toHaveValue('123456');
    await expect(canvas.getByLabelText('Completed candidate')).toHaveTextContent('123456');
    await expect(canvas.getByLabelText('Native changes')).toHaveTextContent('1');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Verify candidate'
    }));
    await expect(canvas.getByLabelText('Submitted code')).toHaveTextContent('123456');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Clear from host'
    }));
    await expect(input).toHaveValue('');
    await userEvent.type(input, '1a2b');
    await expect(input).toHaveValue('12');
    await userEvent.keyboard('{Backspace}');
    await expect(input).toHaveValue('1');
    await expect(canvas.getByRole('textbox', {
      name: 'Read-only code'
    })).toHaveAttribute('readonly');
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'alphanumeric',
    length: 4,
    defaultValue: '',
    value: undefined
  },
  play: async ({
    canvasElement
  }) => {
    const input = within(canvasElement).getByRole('textbox', {
      name: 'Verification code'
    });
    await userEvent.click(input);
    await userEvent.paste('ab-9z');
    await expect(input).toHaveValue('AB9Z');
  }
}`,...x.parameters?.docs?.source}}}})))()}C();export{x as Alphanumeric,y as Anatomy,b as PasteAndForm,v as Playground,S as __namedExportsOrder,_ as default};