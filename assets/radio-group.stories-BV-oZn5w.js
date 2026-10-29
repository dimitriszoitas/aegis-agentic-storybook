import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./field-DAWuKTUB.js";import{n as a,t as o}from"./radio-group-DXhILw_w.js";var s,c,l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{s=t(),a(),r(),c=n(),{useArgs:l}=__STORYBOOK_MODULE_PREVIEW_API__,{expect:u,userEvent:d,waitFor:f,within:p}=__STORYBOOK_MODULE_TEST__,m=[{value:`weekly`,label:`Weekly digest`,description:`A summary of project progress every week.`},{value:`daily`,label:`Daily digest`,description:`A daily summary of new tasks and updates.`},{value:`monthly`,label:`Monthly digest`,description:`A monthly summary of milestones and outcomes.`}],h={id:`components-forms-radiogroup`,title:`Components/Inputs & Selection/RadioGroup`,component:o,tags:[`autodocs`],args:{label:`Update frequency`,options:m,defaultValue:`weekly`},parameters:{docs:{description:{component:`A named single-choice group with roving focus and arrow-key selection. Supports horizontal and vertical layouts, per-option descriptions, disabled options and native form submission.`}}}},g={render:()=>(0,c.jsxs)(`div`,{className:`story-grid`,children:[(0,c.jsx)(o,{label:`Update frequency`,options:m,defaultValue:`weekly`}),(0,c.jsx)(o,{label:`Row density`,orientation:`horizontal`,defaultValue:`default`,options:[{value:`compact`,label:`Compact`},{value:`default`,label:`Default`},{value:`comfortable`,label:`Comfortable`}]}),(0,c.jsx)(o,{label:`Managed frequency`,options:m,defaultValue:`daily`,disabled:!0}),(0,c.jsx)(o,{label:`Delivery team`,options:[{value:`product`,label:`Product team`},{value:`customers`,label:`Customer team`},{value:`external`,label:`External partner`,disabled:!0,description:`Unavailable for this workspace.`}],defaultValue:`product`}),(0,c.jsx)(i,{label:`Update frequency`,required:!0,error:`Choose how often you want to receive updates.`,children:(0,c.jsx)(o,{options:m})})]})},_={render:function(){let[e,t]=(0,s.useState)(`weekly`);return(0,c.jsxs)(`div`,{className:`stack`,children:[(0,c.jsx)(o,{label:`Update frequency`,options:m,value:e,onValueChange:t}),(0,c.jsxs)(`output`,{"aria-live":`polite`,children:[`Selected frequency: `,m.find(t=>t.value===e)?.label]})]})},play:async({canvasElement:e})=>{let t=p(e);await d.click(t.getByRole(`radio`,{name:`Weekly digest`})),await d.keyboard(`{ArrowDown>}`),await f(()=>u(t.getByRole(`radio`,{name:`Daily digest`})).toBeChecked()),await u(t.getByRole(`radio`,{name:`Daily digest`})).toHaveFocus(),await d.keyboard(`{/ArrowDown}`)}},v={args:{label:`Update frequency`,description:`Choose how often you receive project updates.`,options:m,value:`weekly`,defaultValue:void 0,orientation:`vertical`,disabled:!1,readOnly:!1,invalid:!1,required:!1,loop:!0},argTypes:{label:{control:`text`},description:{control:`text`},value:{control:`select`,options:[`weekly`,`daily`,`monthly`]},options:{control:`object`},orientation:{control:`inline-radio`,options:[`vertical`,`horizontal`]},disabled:{control:`boolean`},readOnly:{control:`boolean`},invalid:{control:`boolean`},required:{control:`boolean`},loop:{control:`boolean`}},render:function(e){let[,t]=l();return(0,c.jsx)(o,{...e,defaultValue:void 0,onValueChange:e=>t({value:e})})}},y=[`Matrix`,`KeyboardSelection`,`Playground`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-grid">
      <RadioGroup label="Update frequency" options={options} defaultValue="weekly" />
      <RadioGroup label="Row density" orientation="horizontal" defaultValue="default" options={[{
      value: 'compact',
      label: 'Compact'
    }, {
      value: 'default',
      label: 'Default'
    }, {
      value: 'comfortable',
      label: 'Comfortable'
    }]} />
      <RadioGroup label="Managed frequency" options={options} defaultValue="daily" disabled />
      <RadioGroup label="Delivery team" options={[{
      value: 'product',
      label: 'Product team'
    }, {
      value: 'customers',
      label: 'Customer team'
    }, {
      value: 'external',
      label: 'External partner',
      disabled: true,
      description: 'Unavailable for this workspace.'
    }]} defaultValue="product" />
      <Field label="Update frequency" required error="Choose how often you want to receive updates.">
        <RadioGroup options={options} />
      </Field>
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function ControlledExample() {
    const [value, setValue] = useState('weekly');
    return <div className="stack">
        <RadioGroup label="Update frequency" options={options} value={value} onValueChange={setValue} />
        <output aria-live="polite">
          Selected frequency: {options.find(option => option.value === value)?.label}
        </output>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('radio', {
      name: 'Weekly digest'
    }));
    // Base UI moves roving focus on the next task while the arrow key is held.
    await userEvent.keyboard('{ArrowDown>}');
    await waitFor(() => expect(canvas.getByRole('radio', {
      name: 'Daily digest'
    })).toBeChecked());
    await expect(canvas.getByRole('radio', {
      name: 'Daily digest'
    })).toHaveFocus();
    await userEvent.keyboard('{/ArrowDown}');
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Update frequency',
    description: 'Choose how often you receive project updates.',
    options,
    value: 'weekly',
    defaultValue: undefined,
    orientation: 'vertical',
    disabled: false,
    readOnly: false,
    invalid: false,
    required: false,
    loop: true
  },
  argTypes: {
    label: {
      control: 'text'
    },
    description: {
      control: 'text'
    },
    value: {
      control: 'select',
      options: ['weekly', 'daily', 'monthly']
    },
    options: {
      control: 'object'
    },
    orientation: {
      control: 'inline-radio',
      options: ['vertical', 'horizontal']
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
    loop: {
      control: 'boolean'
    }
  },
  render: function RadioPlayground(args) {
    const [, updateArgs] = useArgs();
    return <RadioGroup {...args} defaultValue={undefined} onValueChange={value => updateArgs({
      value
    })} />;
  }
}`,...v.parameters?.docs?.source}}}})))()}b();export{_ as KeyboardSelection,g as Matrix,v as Playground,y as __namedExportsOrder,h as default};