import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./field-D2BQeMe6.js";import{n as a,t as o}from"./button-DTEiHM0V.js";import{a as s,i as c,r as l,t as u}from"./combobox-DtbP1RQR.js";var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{d=t(),a(),r(),s(),l(),f=n(),{useArgs:p}=__STORYBOOK_MODULE_PREVIEW_API__,{expect:m,userEvent:h,waitFor:g,within:_}=__STORYBOOK_MODULE_TEST__,v=[{value:`ath`,label:`Athens`,description:`Greece`,keywords:[`hellas`]},{value:`ber`,label:`Berlin`,description:`Germany`},{value:`rom`,label:`Rome`,disabled:!0}],y={id:`components-forms-combobox`,title:`Components/Inputs & Selection/Combobox`,component:c,tags:[`autodocs`],args:{label:`Destination`,options:v},parameters:{docs:{description:{component:`Searchable single selection backed by Base UI. Selected IDs and search text remain separate. Native form submission uses the selected ID, not the typed query. For remote search, disable filtering and let the host own requests, race handling, result options and loading.`}}}},b={args:{value:null,placeholder:`Search cities`,size:`md`,disabled:!1,readOnly:!1,required:!1,invalid:!1,loading:!1,filterOptions:!0,clearable:!0},argTypes:{label:{control:`text`},value:{control:`select`,options:[null,`ath`,`ber`,`rom`]},placeholder:{control:`text`},size:{control:`inline-radio`,options:[`sm`,`md`,`lg`]},disabled:{control:`boolean`},readOnly:{control:`boolean`},required:{control:`boolean`},invalid:{control:`boolean`},loading:{control:`boolean`},filterOptions:{control:`boolean`},clearable:{control:`boolean`},options:{control:!1},inputProps:{control:!1}},render:function(e){let[,t]=p();return(0,f.jsx)(c,{...e,onValueChange:(n,r)=>{e.onValueChange?.(n,r),r.isCanceled||t({value:n})}})}},x={render:()=>(0,f.jsx)(f.Fragment,{children:u.render()})},S={render:function(){let[e,t]=(0,d.useState)(null),[n,r]=(0,d.useState)(``);return(0,f.jsxs)(`form`,{className:`stack`,onSubmit:e=>{e.preventDefault(),r(String(new FormData(e.currentTarget).get(`destination`)))},children:[(0,f.jsx)(i,{label:`Destination`,helpText:`Search the list; the selected city ID is submitted.`,children:(0,f.jsx)(c,{options:v,value:e,onValueChange:t,name:`destination`})}),(0,f.jsx)(o,{type:`submit`,children:`Save destination`}),(0,f.jsx)(`output`,{"aria-label":`Submitted ID`,children:n})]})},play:async({canvasElement:e})=>{let t=_(e),n=t.getByRole(`combobox`,{name:`Destination`});await h.click(n),await h.type(n,`hellas`),await h.keyboard(`{ArrowDown}{Enter}`),await m(n).toHaveValue(`Athens`),await h.click(t.getByRole(`button`,{name:`Save destination`})),await m(t.getByLabelText(`Submitted ID`)).toHaveTextContent(`ath`),await h.click(t.getByRole(`button`,{name:`Clear selection`})),await m(n).toHaveValue(``),await h.click(n),await h.keyboard(`{ArrowDown}{Escape}`),await m(n).toHaveAttribute(`aria-expanded`,`false`)}},C={render:function(){let[e,t]=(0,d.useState)(``),[n,r]=(0,d.useState)(!0);return(0,f.jsxs)(`div`,{className:`stack`,children:[(0,f.jsx)(c,{label:`Remote destination`,options:n?[]:v,inputValue:e,onInputValueChange:t,filterOptions:!1,loading:n}),(0,f.jsx)(o,{onClick:()=>r(!1),children:`Deliver remote results`}),(0,f.jsx)(`output`,{"aria-label":`Search request`,children:e})]})},play:async({canvasElement:e})=>{let t=_(e),n=t.getByRole(`combobox`,{name:`Remote destination`});await h.type(n,`zz`),await m(t.getByLabelText(`Search request`)).toHaveTextContent(`zz`),await h.keyboard(`{Escape}`),await h.click(t.getByRole(`button`,{name:`Deliver remote results`})),await h.click(n),await h.keyboard(`{ArrowDown}{Enter}`),await m(n).toHaveValue(`Athens`)}},w={args:{defaultValue:`ath`,onValueChange:(e,t)=>t.cancel()},render:function(e){let[t,n]=(0,d.useState)(``),[r,i]=(0,d.useState)(``);return(0,f.jsxs)(`form`,{className:`stack`,onSubmit:e=>{e.preventDefault(),i(String(new FormData(e.currentTarget).get(`guarded-city`)))},children:[(0,f.jsx)(c,{...e,name:`guarded-city`,onValueChange:(t,r)=>{e.onValueChange?.(t,r),n(`${t}:${r.reason}:${r.isCanceled?`cancelled`:`accepted`}`)}}),(0,f.jsx)(`output`,{"aria-label":`Selection attempt`,children:t}),(0,f.jsx)(o,{type:`submit`,emphasis:`secondary`,children:`Save guarded destination`}),(0,f.jsx)(`output`,{"aria-label":`Guarded submitted ID`,children:r})]})},play:async({canvasElement:e})=>{let t=_(e),n=t.getByRole(`combobox`,{name:`Destination`}),r=e.querySelector(`input[name="guarded-city"]`);await h.click(n),await h.clear(n),await m(t.getByLabelText(`Selection attempt`)).toHaveTextContent(`null:input-clear:cancelled`),await m(n).toHaveValue(``),await h.type(n,`Berlin`),await g(()=>m(_(e.ownerDocument.body).getByRole(`option`,{name:/Berlin/})).toBeVisible()),await h.keyboard(`{ArrowDown}`),await g(()=>m(n).toHaveAttribute(`aria-activedescendant`)),await h.keyboard(`{Enter}`),await m(t.getByLabelText(`Selection attempt`)).toHaveTextContent(`ber:item-press:cancelled`),await m(r).toHaveValue(`ath`),await m(n).toHaveValue(`Berlin`),await h.keyboard(`{Escape}`),await m(n).toHaveAttribute(`aria-expanded`,`false`),await m(n).toHaveValue(`Athens`),await h.click(n),await h.clear(n),await h.type(n,`Berlin`),await h.click(_(e.ownerDocument.body).getByRole(`option`,{name:/Berlin/})),await m(t.getByLabelText(`Selection attempt`)).toHaveTextContent(`ber:item-press:cancelled`),await m(r).toHaveValue(`ath`),await h.keyboard(`{Escape}`),await m(n).toHaveValue(`Athens`),await h.click(t.getByRole(`button`,{name:`Save guarded destination`})),await m(t.getByLabelText(`Guarded submitted ID`)).toHaveTextContent(`ath`)}},T=[`Playground`,`Anatomy`,`KeyboardAndForm`,`RemoteResults`,`CancelledSelection`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    value: null,
    placeholder: 'Search cities',
    size: 'md',
    disabled: false,
    readOnly: false,
    required: false,
    invalid: false,
    loading: false,
    filterOptions: true,
    clearable: true
  },
  argTypes: {
    label: {
      control: 'text'
    },
    value: {
      control: 'select',
      options: [null, 'ath', 'ber', 'rom']
    },
    placeholder: {
      control: 'text'
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
    loading: {
      control: 'boolean'
    },
    filterOptions: {
      control: 'boolean'
    },
    clearable: {
      control: 'boolean'
    },
    options: {
      control: false
    },
    inputProps: {
      control: false
    }
  },
  render: function Example(args) {
    const [, updateArgs] = useArgs();
    return <Combobox {...args} onValueChange={(value, details) => {
      args.onValueChange?.(value, details);
      if (!details.isCanceled) updateArgs({
        value
      });
    }} />;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <>{comboboxAnatomy.render()}</>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Example() {
    const [value, setValue] = useState<string | null>(null);
    const [submitted, setSubmitted] = useState('');
    return <form className="stack" onSubmit={e => {
      e.preventDefault();
      setSubmitted(String(new FormData(e.currentTarget).get('destination')));
    }}>
        <Field label="Destination" helpText="Search the list; the selected city ID is submitted.">
          <Combobox options={options} value={value} onValueChange={setValue} name="destination" />
        </Field>
        <Button type="submit">Save destination</Button>
        <output aria-label="Submitted ID">{submitted}</output>
      </form>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('combobox', {
      name: 'Destination'
    });
    await userEvent.click(input);
    await userEvent.type(input, 'hellas');
    await userEvent.keyboard('{ArrowDown}{Enter}');
    await expect(input).toHaveValue('Athens');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Save destination'
    }));
    await expect(canvas.getByLabelText('Submitted ID')).toHaveTextContent('ath');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Clear selection'
    }));
    await expect(input).toHaveValue('');
    await userEvent.click(input);
    await userEvent.keyboard('{ArrowDown}{Escape}');
    await expect(input).toHaveAttribute('aria-expanded', 'false');
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Example() {
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(true);
    return <div className="stack">
        <Combobox label="Remote destination" options={loading ? [] : options} inputValue={query} onInputValueChange={setQuery} filterOptions={false} loading={loading} />
        <Button onClick={() => setLoading(false)}>Deliver remote results</Button>
        <output aria-label="Search request">{query}</output>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('combobox', {
      name: 'Remote destination'
    });
    await userEvent.type(input, 'zz');
    await expect(canvas.getByLabelText('Search request')).toHaveTextContent('zz');
    await userEvent.keyboard('{Escape}');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Deliver remote results'
    }));
    await userEvent.click(input);
    await userEvent.keyboard('{ArrowDown}{Enter}');
    await expect(input).toHaveValue('Athens');
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'ath',
    onValueChange: (_, details) => details.cancel()
  },
  render: function Example(args) {
    const [attempt, setAttempt] = useState('');
    const [submitted, setSubmitted] = useState('');
    return <form className="stack" onSubmit={event => {
      event.preventDefault();
      setSubmitted(String(new FormData(event.currentTarget).get('guarded-city')));
    }}>
        <Combobox {...args} name="guarded-city" onValueChange={(value, details) => {
        args.onValueChange?.(value, details);
        setAttempt(\`\${value}:\${details.reason}:\${details.isCanceled ? 'cancelled' : 'accepted'}\`);
      }} />
        <output aria-label="Selection attempt">{attempt}</output>
        <Button type="submit" emphasis="secondary">
          Save guarded destination
        </Button>
        <output aria-label="Guarded submitted ID">{submitted}</output>
      </form>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('combobox', {
      name: 'Destination'
    });
    const submittedInput = canvasElement.querySelector('input[name="guarded-city"]');
    await userEvent.click(input);
    await userEvent.clear(input);
    await expect(canvas.getByLabelText('Selection attempt')).toHaveTextContent('null:input-clear:cancelled');
    await expect(input).toHaveValue('');
    await userEvent.type(input, 'Berlin');
    await waitFor(() => expect(within(canvasElement.ownerDocument.body).getByRole('option', {
      name: /Berlin/
    })).toBeVisible());
    await userEvent.keyboard('{ArrowDown}');
    await waitFor(() => expect(input).toHaveAttribute('aria-activedescendant'));
    await userEvent.keyboard('{Enter}');
    await expect(canvas.getByLabelText('Selection attempt')).toHaveTextContent('ber:item-press:cancelled');
    await expect(submittedInput).toHaveValue('ath');
    // Rejection retains the active search query. Dismiss explicitly before expecting the selected label.
    await expect(input).toHaveValue('Berlin');
    await userEvent.keyboard('{Escape}');
    await expect(input).toHaveAttribute('aria-expanded', 'false');
    await expect(input).toHaveValue('Athens');
    await userEvent.click(input);
    await userEvent.clear(input);
    await userEvent.type(input, 'Berlin');
    await userEvent.click(within(canvasElement.ownerDocument.body).getByRole('option', {
      name: /Berlin/
    }));
    await expect(canvas.getByLabelText('Selection attempt')).toHaveTextContent('ber:item-press:cancelled');
    await expect(submittedInput).toHaveValue('ath');
    await userEvent.keyboard('{Escape}');
    await expect(input).toHaveValue('Athens');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Save guarded destination'
    }));
    await expect(canvas.getByLabelText('Guarded submitted ID')).toHaveTextContent('ath');
  }
}`,...w.parameters?.docs?.source}}}})))()}E();export{x as Anatomy,w as CancelledSelection,S as KeyboardAndForm,b as Playground,C as RemoteResults,T as __namedExportsOrder,y as default};