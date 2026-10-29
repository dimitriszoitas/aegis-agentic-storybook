import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./checkbox-Dh8HIPjY.js";import{n as a,t as o}from"./field-D2BQeMe6.js";var s,c,l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{s=t(),r(),a(),c=n(),{useArgs:l}=__STORYBOOK_MODULE_PREVIEW_API__,{expect:u,userEvent:d,within:f}=__STORYBOOK_MODULE_TEST__,p={id:`components-forms-checkbox`,title:`Components/Inputs & Selection/Checkbox`,component:i,tags:[`autodocs`],args:{label:`Include resolved records`},parameters:{docs:{description:{component:`Supports checked, unchecked and indeterminate states, keyboard Space, label clicks and native form submission. Controlled checked accepts boolean or "indeterminate".`}}}},m={render:()=>(0,c.jsxs)(`div`,{className:`story-grid`,children:[(0,c.jsx)(i,{label:`Include resolved records`}),(0,c.jsx)(i,{label:`Include identity events`,defaultChecked:!0,description:`Include customer updates alongside project activity.`}),(0,c.jsx)(i,{label:`Some severity levels selected`,checked:`indeterminate`}),(0,c.jsx)(i,{label:`Include archived cases`,disabled:!0}),(0,c.jsx)(i,{label:`Managed notifications enabled`,disabled:!0,defaultChecked:!0}),(0,c.jsx)(i,{label:`Partially inherited permissions`,disabled:!0,checked:`indeterminate`}),(0,c.jsx)(o,{label:`Confirm review`,required:!0,error:`Review the details before approving this change.`,children:(0,c.jsx)(i,{})})]})},h={args:{size:`sm`},render:()=>(0,c.jsxs)(`div`,{className:`stack`,children:[(0,c.jsx)(i,{size:`sm`,label:`Include resolved records`}),(0,c.jsx)(i,{size:`sm`,label:`Include identity events`,defaultChecked:!0}),(0,c.jsx)(i,{size:`sm`,label:`Some severity levels selected`,checked:`indeterminate`}),(0,c.jsx)(i,{size:`sm`,label:`Include archived cases`,disabled:!0})]})},g={render:()=>(0,c.jsxs)(`div`,{className:`stack`,children:[(0,c.jsx)(i,{label:`Unchecked read-only`,readOnly:!0}),(0,c.jsx)(i,{label:`Checked read-only`,readOnly:!0,defaultChecked:!0}),(0,c.jsx)(i,{label:`Unchecked disabled`,disabled:!0}),(0,c.jsx)(i,{label:`Checked disabled`,disabled:!0,defaultChecked:!0}),(0,c.jsx)(i,{label:`Editable checkbox`})]}),play:async({canvasElement:e})=>{let t=f(e),n=t.getByRole(`checkbox`,{name:`Unchecked read-only`}),r=t.getByRole(`checkbox`,{name:`Checked read-only`});for(let e of[n,r])await u(e).toHaveAttribute(`aria-readonly`,`true`),await u(e).not.toBeDisabled(),await d.click(e),await u(e).toHaveFocus(),await d.keyboard(` `);await d.click(t.getByText(`Unchecked read-only`)),await d.click(t.getByText(`Checked read-only`)),await u(n).not.toBeChecked(),await u(r).toBeChecked();let i=t.getByRole(`checkbox`,{name:`Unchecked disabled`});await u(i).toBeDisabled(),await u(t.getByRole(`checkbox`,{name:`Checked disabled`})).toBeChecked(),r.focus(),await d.tab();let a=t.getByRole(`checkbox`,{name:`Editable checkbox`});await u(a).toHaveFocus(),await d.keyboard(` `),await u(a).toBeChecked()}},_={render:function(){let[e,t]=(0,s.useState)([`critical`]),n=[{value:`critical`,label:`Critical records`},{value:`high`,label:`High severity records`},{value:`medium`,label:`Medium severity records`}];return(0,c.jsxs)(`div`,{className:`stack`,children:[(0,c.jsx)(i,{label:`Select all severity levels`,checked:e.length===n.length?!0:e.length?`indeterminate`:!1,onCheckedChange:e=>t(e===!0?n.map(({value:e})=>e):[])}),n.map(n=>(0,c.jsx)(i,{label:n.label,checked:e.includes(n.value),onCheckedChange:e=>t(t=>e?[...t,n.value]:t.filter(e=>e!==n.value))},n.value)),(0,c.jsxs)(`output`,{"aria-live":`polite`,children:[e.length,` severity levels included`]})]})},play:async({canvasElement:e})=>{let t=f(e),n=t.getByRole(`checkbox`,{name:`Select all severity levels`});await u(n).toHaveAttribute(`aria-checked`,`mixed`),await d.click(n),await u(n).toBeChecked(),await u(t.getByText(`3 severity levels included`)).toBeInTheDocument(),await d.keyboard(` `),await u(n).not.toBeChecked()}},v={args:{label:`Include completed projects`,description:`Show completed work in this view.`,checked:!1,size:`md`,disabled:!1,readOnly:!1,invalid:!1,required:!1},argTypes:{label:{control:`text`},description:{control:`text`},checked:{control:`select`,options:[!1,!0,`indeterminate`]},size:{control:`inline-radio`,options:[`sm`,`md`]},disabled:{control:`boolean`},readOnly:{control:`boolean`},invalid:{control:`boolean`},required:{control:`boolean`}},render:function(e){let[,t]=l();return(0,c.jsx)(i,{...e,onCheckedChange:e=>t({checked:e})})}},y=[`Matrix`,`Compact`,`ReadOnlyAndDisabled`,`SelectAll`,`Playground`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-grid">
      <Checkbox label="Include resolved records" />
      <Checkbox label="Include identity events" defaultChecked description="Include customer updates alongside project activity." />
      <Checkbox label="Some severity levels selected" checked="indeterminate" />
      <Checkbox label="Include archived cases" disabled />
      <Checkbox label="Managed notifications enabled" disabled defaultChecked />
      <Checkbox label="Partially inherited permissions" disabled checked="indeterminate" />
      <Field label="Confirm review" required error="Review the details before approving this change.">
        <Checkbox />
      </Field>
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  },
  render: () => <div className="stack">
      <Checkbox size="sm" label="Include resolved records" />
      <Checkbox size="sm" label="Include identity events" defaultChecked />
      <Checkbox size="sm" label="Some severity levels selected" checked="indeterminate" />
      <Checkbox size="sm" label="Include archived cases" disabled />
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="stack">
      <Checkbox label="Unchecked read-only" readOnly />
      <Checkbox label="Checked read-only" readOnly defaultChecked />
      <Checkbox label="Unchecked disabled" disabled />
      <Checkbox label="Checked disabled" disabled defaultChecked />
      <Checkbox label="Editable checkbox" />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const unchecked = canvas.getByRole('checkbox', {
      name: 'Unchecked read-only'
    });
    const checked = canvas.getByRole('checkbox', {
      name: 'Checked read-only'
    });
    for (const control of [unchecked, checked]) {
      await expect(control).toHaveAttribute('aria-readonly', 'true');
      await expect(control).not.toBeDisabled();
      await userEvent.click(control);
      await expect(control).toHaveFocus();
      await userEvent.keyboard(' ');
    }
    await userEvent.click(canvas.getByText('Unchecked read-only'));
    await userEvent.click(canvas.getByText('Checked read-only'));
    await expect(unchecked).not.toBeChecked();
    await expect(checked).toBeChecked();
    const disabled = canvas.getByRole('checkbox', {
      name: 'Unchecked disabled'
    });
    await expect(disabled).toBeDisabled();
    await expect(canvas.getByRole('checkbox', {
      name: 'Checked disabled'
    })).toBeChecked();
    checked.focus();
    await userEvent.tab();
    const editable = canvas.getByRole('checkbox', {
      name: 'Editable checkbox'
    });
    await expect(editable).toHaveFocus();
    await userEvent.keyboard(' ');
    await expect(editable).toBeChecked();
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function SelectAllExample() {
    const [selected, setSelected] = useState<string[]>(['critical']);
    const options = [{
      value: 'critical',
      label: 'Critical records'
    }, {
      value: 'high',
      label: 'High severity records'
    }, {
      value: 'medium',
      label: 'Medium severity records'
    }];
    return <div className="stack">
        <Checkbox label="Select all severity levels" checked={selected.length === options.length ? true : selected.length ? 'indeterminate' : false} onCheckedChange={checked => setSelected(checked === true ? options.map(({
        value
      }) => value) : [])} />
        {options.map(option => <Checkbox key={option.value} label={option.label} checked={selected.includes(option.value)} onCheckedChange={checked => setSelected(current => checked ? [...current, option.value] : current.filter(value => value !== option.value))} />)}
        <output aria-live="polite">{selected.length} severity levels included</output>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const all = canvas.getByRole('checkbox', {
      name: 'Select all severity levels'
    });
    await expect(all).toHaveAttribute('aria-checked', 'mixed');
    await userEvent.click(all);
    await expect(all).toBeChecked();
    await expect(canvas.getByText('3 severity levels included')).toBeInTheDocument();
    await userEvent.keyboard(' ');
    await expect(all).not.toBeChecked();
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Include completed projects',
    description: 'Show completed work in this view.',
    checked: false,
    size: 'md',
    disabled: false,
    readOnly: false,
    invalid: false,
    required: false
  },
  argTypes: {
    label: {
      control: 'text'
    },
    description: {
      control: 'text'
    },
    checked: {
      control: 'select',
      options: [false, true, 'indeterminate']
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md']
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
    }
  },
  render: function CheckboxPlayground(args) {
    const [, updateArgs] = useArgs();
    return <Checkbox {...args} onCheckedChange={checked => updateArgs({
      checked
    })} />;
  }
}`,...v.parameters?.docs?.source}}}})))()}b();export{h as Compact,m as Matrix,v as Playground,g as ReadOnlyAndDisabled,_ as SelectAll,y as __namedExportsOrder,p as default};