import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./field-Cn4H2Qvn.js";import{n as a,t as o}from"./button-BYQwGwMz.js";import{a as s,i as c,n as l,t as u}from"./phone-input-CzvG47WU.js";var d,f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{d=t(),a(),r(),s(),u(),f=n(),{useArgs:p}=__STORYBOOK_MODULE_PREVIEW_API__,{expect:m,userEvent:h,within:g}=__STORYBOOK_MODULE_TEST__,_={id:`components-forms-phoneinput`,title:`Components/Inputs & Selection/PhoneInput`,component:c,tags:[`autodocs`],args:{label:`Telephone`,defaultCountry:`US`,countries:[`US`,`GB`,`GR`,`DE`]},parameters:{docs:{description:{component:`Telephone drafting with a country selector and libphonenumber-js formatting. Raw text is preserved by default. Opt into normalization on blur explicitly. Metadata-based possible/valid results do not prove reachability, ownership or allocation. The named native input submits its displayed draft; use the parsed callback for a separate persistence policy.`}}}},v={args:{value:`2025550123`,size:`md`,country:`US`,countryLocale:`en`,format:`international`,formatOnBlur:!1,showFormattedValue:!0,disabled:!1,readOnly:!1,required:!1,invalid:!1},argTypes:{label:{control:`text`},value:{control:`text`},country:{control:`select`,options:[`US`,`GB`,`GR`,`DE`]},countryLocale:{control:`inline-radio`,options:[`en`,`de`,`el`]},format:{control:`inline-radio`,options:[`national`,`international`]},formatOnBlur:{control:`boolean`},showFormattedValue:{control:`boolean`},size:{control:`inline-radio`,options:[`sm`,`md`,`lg`]},disabled:{control:`boolean`},readOnly:{control:`boolean`},required:{control:`boolean`},invalid:{control:`boolean`},countries:{control:!1}},render:function(e){let[,t]=p();return(0,f.jsx)(c,{...e,onValueChange:n=>{e.onValueChange?.(n),t({value:n})},onCountryChange:n=>{e.onCountryChange?.(n),t({country:n})}})}},y={render:()=>(0,f.jsx)(f.Fragment,{children:l.render()})},b={render:function(){let[e,t]=(0,d.useState)(``),[n,r]=(0,d.useState)(``),[a,s]=(0,d.useState)(``);return(0,f.jsxs)(`form`,{className:`stack`,onSubmit:e=>{e.preventDefault(),s(String(new FormData(e.currentTarget).get(`phone`)))},children:[(0,f.jsx)(i,{id:`phone-example`,label:`Telephone`,helpText:`We preserve the exact draft until you choose to normalize it.`,children:(0,f.jsx)(c,{name:`phone`,value:e,onValueChange:t,defaultCountry:`US`,countries:[`US`,`GB`],onValueCommit:e=>r(e.e164??`unparsed`)})}),(0,f.jsx)(o,{type:`submit`,children:`Save draft`}),(0,f.jsx)(`output`,{"aria-label":`Parsed candidate`,children:n}),(0,f.jsx)(`output`,{"aria-label":`Submitted draft`,children:a})]})},play:async({canvasElement:e})=>{let t=g(e),n=t.getByRole(`textbox`,{name:`Telephone`});await h.type(n,`(202) 555-0123`),await h.tab(),await m(n).toHaveValue(`(202) 555-0123`),await m(t.getByLabelText(`Parsed candidate`)).toHaveTextContent(`+12025550123`),await h.click(t.getByRole(`button`,{name:`Save draft`})),await m(t.getByLabelText(`Submitted draft`)).toHaveTextContent(`(202) 555-0123`),await m(t.getByRole(`combobox`,{name:`Country`})).not.toHaveAttribute(`id`,n.id)}},x={args:{defaultValue:`2025550123`,formatOnBlur:!0,value:void 0},play:async({canvasElement:e})=>{let t=g(e).getByRole(`textbox`,{name:`Telephone`});await h.click(t),await h.tab(),await m(t).toHaveValue(`+1 202 555 0123`)}},S=[`Playground`,`Anatomy`,`DraftAndForm`,`ExplicitNormalization`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    value: '2025550123',
    size: 'md',
    country: 'US',
    countryLocale: 'en',
    format: 'international',
    formatOnBlur: false,
    showFormattedValue: true,
    disabled: false,
    readOnly: false,
    required: false,
    invalid: false
  },
  argTypes: {
    label: {
      control: 'text'
    },
    value: {
      control: 'text'
    },
    country: {
      control: 'select',
      options: ['US', 'GB', 'GR', 'DE']
    },
    countryLocale: {
      control: 'inline-radio',
      options: ['en', 'de', 'el']
    },
    format: {
      control: 'inline-radio',
      options: ['national', 'international']
    },
    formatOnBlur: {
      control: 'boolean'
    },
    showFormattedValue: {
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
    required: {
      control: 'boolean'
    },
    invalid: {
      control: 'boolean'
    },
    countries: {
      control: false
    }
  },
  render: function Example(args) {
    const [, updateArgs] = useArgs();
    return <PhoneInput {...args} onValueChange={value => {
      args.onValueChange?.(value);
      updateArgs({
        value
      });
    }} onCountryChange={country => {
      args.onCountryChange?.(country);
      updateArgs({
        country
      });
    }} />;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <>{phoneInputAnatomy.render()}</>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Example() {
    const [raw, setRaw] = useState('');
    const [parsed, setParsed] = useState('');
    const [saved, setSaved] = useState('');
    return <form className="stack" onSubmit={e => {
      e.preventDefault();
      setSaved(String(new FormData(e.currentTarget).get('phone')));
    }}>
        <Field id="phone-example" label="Telephone" helpText="We preserve the exact draft until you choose to normalize it.">
          <PhoneInput name="phone" value={raw} onValueChange={setRaw} defaultCountry="US" countries={['US', 'GB']} onValueCommit={result => setParsed(result.e164 ?? 'unparsed')} />
        </Field>
        <Button type="submit">Save draft</Button>
        <output aria-label="Parsed candidate">{parsed}</output>
        <output aria-label="Submitted draft">{saved}</output>
      </form>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Telephone'
    });
    await userEvent.type(input, '(202) 555-0123');
    await userEvent.tab();
    await expect(input).toHaveValue('(202) 555-0123');
    await expect(canvas.getByLabelText('Parsed candidate')).toHaveTextContent('+12025550123');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Save draft'
    }));
    await expect(canvas.getByLabelText('Submitted draft')).toHaveTextContent('(202) 555-0123');
    await expect(canvas.getByRole('combobox', {
      name: 'Country'
    })).not.toHaveAttribute('id', input.id);
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '2025550123',
    formatOnBlur: true,
    value: undefined
  },
  play: async ({
    canvasElement
  }) => {
    const input = within(canvasElement).getByRole('textbox', {
      name: 'Telephone'
    });
    await userEvent.click(input);
    await userEvent.tab();
    await expect(input).toHaveValue('+1 202 555 0123');
  }
}`,...x.parameters?.docs?.source}}}})))()}C();export{y as Anatomy,b as DraftAndForm,x as ExplicitNormalization,v as Playground,S as __namedExportsOrder,_ as default};