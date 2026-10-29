import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./field-Crfqy8aH.js";import{n as a,t as o}from"./button-Bc30j06n.js";import{a as s,i as c,n as l,t as u}from"./time-picker-Cx7abLen.js";var d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{d=t(),a(),r(),s(),u(),f=n(),{useArgs:p}=__STORYBOOK_MODULE_PREVIEW_API__,{expect:m,userEvent:h,within:g}=__STORYBOOK_MODULE_TEST__,_={id:`components-forms-timepicker`,title:`Components/Inputs & Selection/TimePicker`,component:c,tags:[`autodocs`],args:{label:`Opening time`,value:`09:30`},parameters:{docs:{description:{component:`Enter a local time without a date or time zone. Native controls own localization, keyboard segments and constraints.`}}}},v={args:{size:`md`,disabled:!1,readOnly:!1,required:!1,invalid:!1,step:60},argTypes:{label:{control:`text`},value:{control:`text`},size:{control:`inline-radio`,options:[`sm`,`md`,`lg`]},disabled:{control:`boolean`},readOnly:{control:`boolean`},required:{control:`boolean`},invalid:{control:`boolean`},step:{control:`number`},min:{control:`text`},max:{control:`text`}},render:function(e){let[,t]=p();return(0,f.jsx)(c,{...e,onValueChange:n=>{e.onValueChange?.(n),t({value:n})}})}},y={render:()=>(0,f.jsx)(f.Fragment,{children:l.render()})},b={render:function(){let[e,t]=(0,d.useState)(`09:30`),[n,r]=(0,d.useState)(``);return(0,f.jsxs)(`form`,{className:`stack`,onSubmit:e=>{e.preventDefault(),r(String(new FormData(e.currentTarget).get(`value`)))},children:[(0,f.jsx)(i,{label:`Opening time`,helpText:`Native local value; the host owns scheduling rules.`,children:(0,f.jsx)(c,{name:`value`,value:e,onValueChange:t,required:!0})}),(0,f.jsx)(c,{label:`Read-only value`,defaultValue:`09:30`,readOnly:!0}),(0,f.jsx)(c,{label:`Disabled value`,disabled:!0}),(0,f.jsx)(o,{onClick:()=>t(`14:45`),children:`Set afternoon value`}),(0,f.jsx)(o,{type:`submit`,children:`Save value`}),(0,f.jsx)(`output`,{"aria-label":`Form result`,children:n})]})},play:async({canvasElement:e})=>{let t=g(e),n=t.getByLabelText(`Opening time`);await m(n).toHaveValue(`09:30`),await m(n).toHaveAttribute(`type`,`time`),await h.click(t.getByRole(`button`,{name:`Set afternoon value`})),await m(n).toHaveValue(`14:45`),await h.click(t.getByRole(`button`,{name:`Save value`})),await m(t.getByLabelText(`Form result`)).toHaveTextContent(`14:45`),await m(t.getByLabelText(`Read-only value`)).toHaveAttribute(`readonly`),await m(t.getByLabelText(`Disabled value`)).toBeDisabled()}},x=[`Playground`,`Anatomy`,`NativeForm`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    disabled: false,
    readOnly: false,
    required: false,
    invalid: false,
    step: 60
  },
  argTypes: {
    label: {
      control: 'text'
    },
    value: {
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
    step: {
      control: 'number'
    },
    min: {
      control: 'text'
    },
    max: {
      control: 'text'
    }
  },
  render: function Example(args) {
    const [, updateArgs] = useArgs();
    return <TimePicker {...args} onValueChange={value => {
      args.onValueChange?.(value);
      updateArgs({
        value
      });
    }} />;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <>{timePickerAnatomy.render()}</>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Example() {
    const [value, setValue] = useState('09:30');
    const [saved, setSaved] = useState('');
    return <form className="stack" onSubmit={e => {
      e.preventDefault();
      setSaved(String(new FormData(e.currentTarget).get('value')));
    }}>
        <Field label="Opening time" helpText="Native local value; the host owns scheduling rules.">
          <TimePicker name="value" value={value} onValueChange={setValue} required />
        </Field>
        <TimePicker label="Read-only value" defaultValue="09:30" readOnly />
        <TimePicker label="Disabled value" disabled />
        <Button onClick={() => setValue('14:45')}>Set afternoon value</Button>
        <Button type="submit">Save value</Button>
        <output aria-label="Form result">{saved}</output>
      </form>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText('Opening time');
    await expect(input).toHaveValue('09:30');
    await expect(input).toHaveAttribute('type', 'time');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Set afternoon value'
    }));
    await expect(input).toHaveValue('14:45');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Save value'
    }));
    await expect(canvas.getByLabelText('Form result')).toHaveTextContent('14:45');
    await expect(canvas.getByLabelText('Read-only value')).toHaveAttribute('readonly');
    await expect(canvas.getByLabelText('Disabled value')).toBeDisabled();
  }
}`,...b.parameters?.docs?.source}}}})))()}S();export{y as Anatomy,b as NativeForm,v as Playground,x as __namedExportsOrder,_ as default};