import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./field-Cn4H2Qvn.js";import{n as a,t as o}from"./button-BYQwGwMz.js";import{n as s,t as c}from"./number-input-B21RPpXT.js";var l,u,d,f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{l=t(),a(),r(),s(),u=n(),{useArgs:d}=__STORYBOOK_MODULE_PREVIEW_API__,{expect:f,userEvent:p,within:m}=__STORYBOOK_MODULE_TEST__,h={id:`components-forms-numberinput`,title:`Components/Inputs & Selection/NumberInput`,component:c,tags:[`autodocs`],args:{label:`Seats`,defaultValue:4,locale:`en-US`},argTypes:{size:{control:`inline-radio`,options:[`sm`,`md`,`lg`]},format:{control:!1},hiddenInputRef:{control:!1}},parameters:{docs:{description:{component:`Numeric entry with Base UI NumberField. Empty values are null; the displayed text is locale-aware while the form submits the raw number. Arrow Up/Down step, Shift uses largeStep, Alt uses smallStep, and Home/End use defined bounds. Steppers remain available to pointer/touch users and are omitted from the Tab sequence. Use Field for help and host-owned validation errors. Currency formatting is not financial arithmetic.`}}}},g={args:{label:`Seats`,value:4,defaultValue:void 0,placeholder:`Enter a quantity`,size:`md`,min:0,max:100,step:1,smallStep:.1,largeStep:10,showSteppers:!0,decrementLabel:`Decrease seats`,incrementLabel:`Increase seats`,disabled:!1,readOnly:!1,invalid:!1,required:!1,snapOnStep:!1,allowOutOfRange:!1,allowWheelScrub:!1},argTypes:{label:{control:`text`},value:{control:`number`},defaultValue:{control:!1},placeholder:{control:`text`},min:{control:`number`},max:{control:`number`},step:{control:`number`},smallStep:{control:`number`},largeStep:{control:`number`},locale:{control:`inline-radio`,options:[`en-US`,`de-DE`,`fr-FR`]},showSteppers:{control:`boolean`},decrementLabel:{control:`text`},incrementLabel:{control:`text`},disabled:{control:`boolean`},readOnly:{control:`boolean`},invalid:{control:`boolean`},required:{control:`boolean`},snapOnStep:{control:`boolean`},allowOutOfRange:{control:`boolean`},allowWheelScrub:{control:`boolean`}},render:function(e){let[,t]=d();return(0,u.jsx)(c,{...e,onValueChange:(n,r)=>{e.onValueChange?.(n,r),r.isCanceled||t({value:n})}})}},_={render:()=>(0,u.jsxs)(`div`,{className:`story-grid`,children:[(0,u.jsx)(c,{label:`Small quantity`,size:`sm`,defaultValue:2}),(0,u.jsx)(c,{label:`Medium quantity`,defaultValue:4}),(0,u.jsx)(c,{label:`Large quantity`,size:`lg`,defaultValue:6}),(0,u.jsx)(c,{label:`Optional quantity`,placeholder:`Leave blank if unknown`}),(0,u.jsx)(c,{label:`Read-only allocation`,defaultValue:8,readOnly:!0}),(0,u.jsx)(c,{label:`Disabled allocation`,defaultValue:8,disabled:!0}),(0,u.jsx)(c,{label:`Decimal without steppers`,defaultValue:1.5,step:`any`,showSteppers:!1}),(0,u.jsx)(i,{label:`Reserved seats`,helpText:`The project owner approves changes.`,error:`This allocation exceeds your project allowance.`,children:(0,u.jsx)(c,{defaultValue:12,min:0})})]})},v={render:function(){let[e,t]=(0,l.useState)(2),[n,r]=(0,l.useState)(`none`),[i,a]=(0,l.useState)(`none`);return(0,u.jsxs)(`div`,{className:`stack`,children:[(0,u.jsx)(c,{label:`Allocation`,value:e,min:0,max:10,step:2,smallStep:.5,largeStep:4,locale:`en-US`,onValueChange:(e,n)=>{t(e),r(n.reason)},onValueCommitted:(e,t)=>a(`${String(e)}:${t.reason}`)}),(0,u.jsx)(`output`,{"aria-label":`Numeric state`,children:e===null?`empty`:e}),(0,u.jsx)(`output`,{"aria-label":`Change reason`,children:n}),(0,u.jsx)(`output`,{"aria-label":`Committed state`,children:i}),(0,u.jsx)(o,{onClick:()=>t(3),children:`Set allocation to three`})]})},play:async({canvasElement:e})=>{let t=m(e),n=t.getByRole(`textbox`,{name:`Allocation`});await p.click(n),await p.keyboard(`{ArrowUp}`),await f(n).toHaveValue(`4`),await f(t.getByLabelText(`Committed state`)).toHaveTextContent(`4:keyboard`),await p.keyboard(`{ArrowDown}{Shift>}{ArrowUp}{/Shift}{Alt>}{ArrowUp}{/Alt}`),await f(n).toHaveValue(`6.5`),await p.keyboard(`{End}`),await f(n).toHaveValue(`10`),await p.keyboard(`{ArrowUp}`),await f(n).toHaveValue(`10`),await p.keyboard(`{Home}`),await f(n).toHaveValue(`0`),await p.clear(n),await f(t.getByLabelText(`Numeric state`)).toHaveTextContent(`empty`),await f(t.getByLabelText(`Change reason`)).toHaveTextContent(`input-clear`),await p.tab(),await f(t.getByRole(`button`,{name:`Set allocation to three`})).toHaveFocus(),await f(t.getByLabelText(`Committed state`)).toHaveTextContent(`null:input-clear`),await p.click(t.getByRole(`button`,{name:`Set allocation to three`})),await f(n).toHaveValue(`3`),await p.click(t.getByRole(`button`,{name:`Increase value`})),await f(n).toHaveValue(`5`)}},y={render:function(){let[e,t]=(0,l.useState)(`Not submitted`);return(0,u.jsxs)(`form`,{className:`stack`,onSubmit:e=>{e.preventDefault(),t(JSON.stringify([...new FormData(e.currentTarget).entries()]))},children:[(0,u.jsx)(i,{label:`Distance`,helpText:`Kilometres, using German decimal punctuation.`,children:(0,u.jsx)(c,{name:`distance`,defaultValue:1234.5,locale:`de-DE`,step:`any`,format:{minimumFractionDigits:2,maximumFractionDigits:2}})}),(0,u.jsx)(o,{type:`submit`,children:`Save distance`}),(0,u.jsx)(`output`,{"aria-label":`Form result`,children:e})]})},play:async({canvasElement:e})=>{let t=m(e),n=t.getByRole(`textbox`,{name:`Distance`});await f(n).toHaveValue(`1.234,50`),await p.clear(n),await p.type(n,`42,75`),await p.tab(),await f(n).toHaveValue(`42,75`),await p.click(t.getByRole(`button`,{name:`Save distance`})),await f(t.getByLabelText(`Form result`)).toHaveTextContent(`[["distance","42.75"]]`)}},b={render:()=>(0,u.jsxs)(`div`,{className:`stack`,children:[(0,u.jsx)(i,{id:`number-readonly`,label:`Managed seats`,helpText:`Configured by your administrator.`,error:`Contact your administrator to change the limit.`,children:(0,u.jsx)(c,{defaultValue:4,readOnly:!0})}),(0,u.jsx)(c,{label:`Unavailable seats`,defaultValue:7,disabled:!0}),(0,u.jsx)(c,{label:`Editable seats`,defaultValue:2,showSteppers:!1})]}),play:async({canvasElement:e})=>{let t=m(e),n=t.getByRole(`textbox`,{name:`Managed seats`});await f(n).toHaveAttribute(`readonly`),await f(n).toHaveAttribute(`aria-invalid`,`true`),await f(n).toHaveAttribute(`aria-describedby`,`number-readonly-help number-readonly-error`),await p.click(n),await p.keyboard(`{ArrowUp}8`),await f(n).toHaveValue(`4`),await f(t.getByRole(`textbox`,{name:`Unavailable seats`})).toBeDisabled(),await p.tab(),await f(t.getByRole(`textbox`,{name:`Editable seats`})).toHaveFocus()}},x={render:()=>(0,u.jsxs)(`div`,{className:`stack`,children:[(0,u.jsx)(c,{label:`Guarded quantity`,defaultValue:2,onValueChange:(e,t)=>{e!==null&&e>2&&t.cancel()}}),(0,u.jsx)(`p`,{children:`This host vetoes increases through the primitive callback details; decreases remain available.`})]}),play:async({canvasElement:e})=>{let t=m(e).getByRole(`textbox`,{name:`Guarded quantity`});await p.click(t),await p.keyboard(`{ArrowUp}`),await f(t).toHaveValue(`2`),await p.keyboard(`{ArrowDown}`),await f(t).toHaveValue(`1`)}},S=[`Playground`,`States`,`KeyboardAndBounds`,`LocaleAndForm`,`FieldAndLockedStates`,`CancelledChange`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Seats',
    value: 4,
    defaultValue: undefined,
    placeholder: 'Enter a quantity',
    size: 'md',
    min: 0,
    max: 100,
    step: 1,
    smallStep: 0.1,
    largeStep: 10,
    showSteppers: true,
    decrementLabel: 'Decrease seats',
    incrementLabel: 'Increase seats',
    disabled: false,
    readOnly: false,
    invalid: false,
    required: false,
    snapOnStep: false,
    allowOutOfRange: false,
    allowWheelScrub: false
  },
  argTypes: {
    label: {
      control: 'text'
    },
    value: {
      control: 'number'
    },
    defaultValue: {
      control: false
    },
    placeholder: {
      control: 'text'
    },
    min: {
      control: 'number'
    },
    max: {
      control: 'number'
    },
    step: {
      control: 'number'
    },
    smallStep: {
      control: 'number'
    },
    largeStep: {
      control: 'number'
    },
    locale: {
      control: 'inline-radio',
      options: ['en-US', 'de-DE', 'fr-FR']
    },
    showSteppers: {
      control: 'boolean'
    },
    decrementLabel: {
      control: 'text'
    },
    incrementLabel: {
      control: 'text'
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
    snapOnStep: {
      control: 'boolean'
    },
    allowOutOfRange: {
      control: 'boolean'
    },
    allowWheelScrub: {
      control: 'boolean'
    }
  },
  render: function NumberInputPlayground(args) {
    const [, updateArgs] = useArgs();
    return <NumberInput {...args} onValueChange={(value, details) => {
      args.onValueChange?.(value, details);
      if (!details.isCanceled) updateArgs({
        value
      });
    }} />;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-grid">
      <NumberInput label="Small quantity" size="sm" defaultValue={2} />
      <NumberInput label="Medium quantity" defaultValue={4} />
      <NumberInput label="Large quantity" size="lg" defaultValue={6} />
      <NumberInput label="Optional quantity" placeholder="Leave blank if unknown" />
      <NumberInput label="Read-only allocation" defaultValue={8} readOnly />
      <NumberInput label="Disabled allocation" defaultValue={8} disabled />
      <NumberInput label="Decimal without steppers" defaultValue={1.5} step="any" showSteppers={false} />
      <Field label="Reserved seats" helpText="The project owner approves changes." error="This allocation exceeds your project allowance.">
        <NumberInput defaultValue={12} min={0} />
      </Field>
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function KeyboardExample() {
    const [value, setValue] = useState<number | null>(2);
    const [change, setChange] = useState('none');
    const [commit, setCommit] = useState('none');
    return <div className="stack">
        <NumberInput label="Allocation" value={value} min={0} max={10} step={2} smallStep={0.5} largeStep={4} locale="en-US" onValueChange={(next, details) => {
        setValue(next);
        setChange(details.reason);
      }} onValueCommitted={(next, details) => setCommit(\`\${String(next)}:\${details.reason}\`)} />
        <output aria-label="Numeric state">{value === null ? 'empty' : value}</output>
        <output aria-label="Change reason">{change}</output>
        <output aria-label="Committed state">{commit}</output>
        <Button onClick={() => setValue(3)}>Set allocation to three</Button>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Allocation'
    });
    await userEvent.click(input);
    await userEvent.keyboard('{ArrowUp}');
    await expect(input).toHaveValue('4');
    await expect(canvas.getByLabelText('Committed state')).toHaveTextContent('4:keyboard');
    await userEvent.keyboard('{ArrowDown}{Shift>}{ArrowUp}{/Shift}{Alt>}{ArrowUp}{/Alt}');
    await expect(input).toHaveValue('6.5');
    await userEvent.keyboard('{End}');
    await expect(input).toHaveValue('10');
    await userEvent.keyboard('{ArrowUp}');
    await expect(input).toHaveValue('10');
    await userEvent.keyboard('{Home}');
    await expect(input).toHaveValue('0');
    await userEvent.clear(input);
    await expect(canvas.getByLabelText('Numeric state')).toHaveTextContent('empty');
    await expect(canvas.getByLabelText('Change reason')).toHaveTextContent('input-clear');
    await userEvent.tab();
    await expect(canvas.getByRole('button', {
      name: 'Set allocation to three'
    })).toHaveFocus();
    await expect(canvas.getByLabelText('Committed state')).toHaveTextContent('null:input-clear');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Set allocation to three'
    }));
    await expect(input).toHaveValue('3');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Increase value'
    }));
    await expect(input).toHaveValue('5');
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function LocaleExample() {
    const [submitted, setSubmitted] = useState('Not submitted');
    return <form className="stack" onSubmit={event => {
      event.preventDefault();
      setSubmitted(JSON.stringify([...new FormData(event.currentTarget).entries()]));
    }}>
        <Field label="Distance" helpText="Kilometres, using German decimal punctuation.">
          <NumberInput name="distance" defaultValue={1234.5} locale="de-DE" step="any" format={{
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        }} />
        </Field>
        <Button type="submit">Save distance</Button>
        <output aria-label="Form result">{submitted}</output>
      </form>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Distance'
    });
    await expect(input).toHaveValue('1.234,50');
    await userEvent.clear(input);
    await userEvent.type(input, '42,75');
    await userEvent.tab();
    await expect(input).toHaveValue('42,75');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Save distance'
    }));
    await expect(canvas.getByLabelText('Form result')).toHaveTextContent('[["distance","42.75"]]');
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="stack">
      <Field id="number-readonly" label="Managed seats" helpText="Configured by your administrator." error="Contact your administrator to change the limit.">
        <NumberInput defaultValue={4} readOnly />
      </Field>
      <NumberInput label="Unavailable seats" defaultValue={7} disabled />
      <NumberInput label="Editable seats" defaultValue={2} showSteppers={false} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const locked = canvas.getByRole('textbox', {
      name: 'Managed seats'
    });
    await expect(locked).toHaveAttribute('readonly');
    await expect(locked).toHaveAttribute('aria-invalid', 'true');
    await expect(locked).toHaveAttribute('aria-describedby', 'number-readonly-help number-readonly-error');
    await userEvent.click(locked);
    await userEvent.keyboard('{ArrowUp}8');
    await expect(locked).toHaveValue('4');
    await expect(canvas.getByRole('textbox', {
      name: 'Unavailable seats'
    })).toBeDisabled();
    await userEvent.tab();
    await expect(canvas.getByRole('textbox', {
      name: 'Editable seats'
    })).toHaveFocus();
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className="stack">
      <NumberInput label="Guarded quantity" defaultValue={2} onValueChange={(next, details) => {
      if (next !== null && next > 2) details.cancel();
    }} />
      <p>
        This host vetoes increases through the primitive callback details; decreases remain
        available.
      </p>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Guarded quantity'
    });
    await userEvent.click(input);
    await userEvent.keyboard('{ArrowUp}');
    await expect(input).toHaveValue('2');
    await userEvent.keyboard('{ArrowDown}');
    await expect(input).toHaveValue('1');
  }
}`,...x.parameters?.docs?.source}}}})))()}C();export{x as CancelledChange,b as FieldAndLockedStates,v as KeyboardAndBounds,y as LocaleAndForm,g as Playground,_ as States,S as __namedExportsOrder,h as default};