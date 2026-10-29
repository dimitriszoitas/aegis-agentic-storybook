import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./checkbox-C30jEKT2.js";import{n as a,t as o}from"./field-Crfqy8aH.js";import{n as s,t as c}from"./text-input-CX6xjgOR.js";import{n as l,t as u}from"./textarea-BHPaIIKn.js";var d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{d=t(),a(),s(),l(),r(),f=n(),{useArgs:p}=__STORYBOOK_MODULE_PREVIEW_API__,{expect:m,userEvent:h,within:g}=__STORYBOOK_MODULE_TEST__,_={id:`components-forms-field`,title:`Components/Inputs & Selection/Field`,component:o,tags:[`autodocs`],args:{label:`Workflow name`,children:(0,f.jsx)(c,{defaultValue:`Customer portal redesign`})},parameters:{docs:{description:{component:`Provides automatic label, required state and help/error association to every Aegis form control. Use one logical control per Field. For a radio group, the label names the entire group.`}}}},v={render:()=>(0,f.jsxs)(`div`,{className:`story-grid`,children:[(0,f.jsx)(o,{label:`Workflow name`,required:!0,helpText:`Use a name that describes the project’s outcome.`,children:(0,f.jsx)(c,{defaultValue:`Customer portal redesign`})}),(0,f.jsx)(o,{label:`Assigned member`,optional:!0,helpText:`Unassigned records remain in the shared queue.`,children:(0,f.jsx)(c,{defaultValue:`Katerina Nikolaou`})}),(0,f.jsx)(o,{label:`Source index`,required:!0,error:`Select a source index available in this workspace.`,children:(0,f.jsx)(c,{defaultValue:`windows-legacy`})}),(0,f.jsx)(o,{label:`Project identifier`,disabled:!0,helpText:`Identifiers are managed by the workspace.`,children:(0,f.jsx)(c,{defaultValue:`PRJ-2026-0042`})}),(0,f.jsx)(o,{label:`Project notes`,helpText:`Visible to members assigned to this project.`,children:(0,f.jsx)(u,{defaultValue:`Review the updated onboarding flow with the customer team before closing this task.`})}),(0,f.jsx)(o,{label:`Enable project updates`,helpText:`Send notifications when project milestones change.`,children:(0,f.jsx)(i,{defaultChecked:!0})})]})},y={render:function(){let[e,t]=(0,d.useState)(``),n=e.trim().length<8?`Use at least 8 characters to describe the workflow.`:void 0;return(0,f.jsx)(o,{label:`Workflow name`,required:!0,error:n,helpText:`For example, customer portal redesign.`,children:(0,f.jsx)(c,{value:e,onValueChange:t})})},play:async({canvasElement:e})=>{let t=g(e).getByRole(`textbox`,{name:`Workflow name (required)`});await m(t).toHaveAttribute(`aria-invalid`,`true`),await h.type(t,`Customer portal redesign`),await m(t).toHaveAttribute(`aria-invalid`,`false`),await m(t).toHaveAccessibleDescription(`For example, customer portal redesign.`)}},b={args:{label:`Project name`,helpText:`Use a name that describes the outcome.`,error:``,required:!0,optional:!1,disabled:!1,controlType:`text`,sampleValue:`Customer portal`,checked:!1},argTypes:{label:{control:`text`},helpText:{control:`text`},error:{control:`text`},required:{control:`boolean`},optional:{control:`boolean`},disabled:{control:`boolean`},controlType:{control:`inline-radio`,options:[`text`,`textarea`,`checkbox`]},sampleValue:{control:`text`},checked:{control:`boolean`}},render:function({controlType:e,sampleValue:t,checked:n,...r}){let[,a]=p();return(0,f.jsx)(o,{...r,children:e===`checkbox`?(0,f.jsx)(i,{checked:n,onCheckedChange:e=>a({checked:e})}):e===`textarea`?(0,f.jsx)(u,{value:t,onValueChange:e=>a({sampleValue:e})}):(0,f.jsx)(c,{value:t,onValueChange:e=>a({sampleValue:e})})})}},x=[`Matrix`,`Validation`,`Playground`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-grid">
      <Field label="Workflow name" required helpText="Use a name that describes the project’s outcome.">
        <TextInput defaultValue="Customer portal redesign" />
      </Field>
      <Field label="Assigned member" optional helpText="Unassigned records remain in the shared queue.">
        <TextInput defaultValue="Katerina Nikolaou" />
      </Field>
      <Field label="Source index" required error="Select a source index available in this workspace.">
        <TextInput defaultValue="windows-legacy" />
      </Field>
      <Field label="Project identifier" disabled helpText="Identifiers are managed by the workspace.">
        <TextInput defaultValue="PRJ-2026-0042" />
      </Field>
      <Field label="Project notes" helpText="Visible to members assigned to this project.">
        <Textarea defaultValue="Review the updated onboarding flow with the customer team before closing this task." />
      </Field>
      <Field label="Enable project updates" helpText="Send notifications when project milestones change.">
        <Checkbox defaultChecked />
      </Field>
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function ValidationExample() {
    const [name, setName] = useState('');
    const error = name.trim().length < 8 ? 'Use at least 8 characters to describe the workflow.' : undefined;
    return <Field label="Workflow name" required error={error} helpText="For example, customer portal redesign.">
        <TextInput value={name} onValueChange={setName} />
      </Field>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Workflow name (required)'
    });
    await expect(input).toHaveAttribute('aria-invalid', 'true');
    await userEvent.type(input, 'Customer portal redesign');
    await expect(input).toHaveAttribute('aria-invalid', 'false');
    await expect(input).toHaveAccessibleDescription('For example, customer portal redesign.');
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Project name',
    helpText: 'Use a name that describes the outcome.',
    error: '',
    required: true,
    optional: false,
    disabled: false,
    controlType: 'text',
    sampleValue: 'Customer portal',
    checked: false
  },
  argTypes: {
    label: {
      control: 'text'
    },
    helpText: {
      control: 'text'
    },
    error: {
      control: 'text'
    },
    required: {
      control: 'boolean'
    },
    optional: {
      control: 'boolean'
    },
    disabled: {
      control: 'boolean'
    },
    controlType: {
      control: 'inline-radio',
      options: ['text', 'textarea', 'checkbox']
    },
    sampleValue: {
      control: 'text'
    },
    checked: {
      control: 'boolean'
    }
  },
  render: function FieldPlayground({
    controlType,
    sampleValue,
    checked,
    ...args
  }) {
    const [, updateArgs] = useArgs();
    return <Field {...args}>
        {controlType === 'checkbox' ? <Checkbox checked={checked} onCheckedChange={checked => updateArgs({
        checked
      })} /> : controlType === 'textarea' ? <Textarea value={sampleValue} onValueChange={sampleValue => updateArgs({
        sampleValue
      })} /> : <TextInput value={sampleValue} onValueChange={sampleValue => updateArgs({
        sampleValue
      })} />}
      </Field>;
  }
}`,...b.parameters?.docs?.source}}}})))()}S();export{v as Matrix,b as Playground,y as Validation,x as __namedExportsOrder,_ as default};