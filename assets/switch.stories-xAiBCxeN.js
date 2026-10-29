import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./field-BUbfRSyo.js";import{n as a,t as o}from"./switch-BzVhJcjj.js";var s,c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{s=t(),a(),r(),c=n(),{useArgs:l}=__STORYBOOK_MODULE_PREVIEW_API__,{expect:u,userEvent:d,within:f}=__STORYBOOK_MODULE_TEST__,p={id:`components-forms-switch`,title:`Components/Inputs & Selection/Switch`,component:o,tags:[`autodocs`],args:{label:`Enable project notifications`,description:`Send updates when project milestones change.`},parameters:{docs:{description:{component:`An immediate on/off setting with a persistent accessible label. Space and Enter toggle it. Checked state is included in native forms when a name is supplied.`}}}},m={render:()=>(0,c.jsxs)(`div`,{className:`story-grid`,children:[(0,c.jsx)(o,{label:`Enable project notifications`,description:`Send updates when project milestones change.`}),(0,c.jsx)(o,{label:`Notify assigned members`,defaultChecked:!0}),(0,c.jsx)(o,{label:`Show resolved records`,size:`sm`}),(0,c.jsx)(o,{label:`Correlate identity events`,size:`sm`,defaultChecked:!0}),(0,c.jsx)(o,{label:`External sharing unavailable`,disabled:!0}),(0,c.jsx)(o,{label:`Audit logging required`,defaultChecked:!0,disabled:!0}),(0,c.jsx)(i,{label:`Enable outbound response`,error:`An approved response policy is required.`,children:(0,c.jsx)(o,{})})]})},h={render:function(){let[e,t]=(0,s.useState)(!1);return(0,c.jsxs)(`div`,{className:`stack`,children:[(0,c.jsx)(o,{label:`Enable project notifications`,checked:e,onCheckedChange:t}),(0,c.jsx)(`output`,{"aria-live":`polite`,children:e?`Notifications enabled. New project updates will be delivered.`:`Notifications paused. Existing updates remain available.`})]})},play:async({canvasElement:e})=>{let t=f(e).getByRole(`switch`,{name:`Enable project notifications`});await d.click(t),await u(t).toBeChecked(),await d.keyboard(` `),await u(t).not.toBeChecked()}},g={args:{label:`Enable project notifications`,description:`Send updates when milestones change.`,checked:!1,size:`md`,disabled:!1,readOnly:!1,invalid:!1,required:!1},argTypes:{label:{control:`text`},description:{control:`text`},checked:{control:`boolean`},size:{control:`inline-radio`,options:[`sm`,`md`]},disabled:{control:`boolean`},readOnly:{control:`boolean`},invalid:{control:`boolean`},required:{control:`boolean`}},render:function(e){let[,t]=l();return(0,c.jsx)(o,{...e,onCheckedChange:e=>t({checked:e})})}},_=[`Matrix`,`ImmediateSetting`,`Playground`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-grid">
      <Switch label="Enable project notifications" description="Send updates when project milestones change." />
      <Switch label="Notify assigned members" defaultChecked />
      <Switch label="Show resolved records" size="sm" />
      <Switch label="Correlate identity events" size="sm" defaultChecked />
      <Switch label="External sharing unavailable" disabled />
      <Switch label="Audit logging required" defaultChecked disabled />
      <Field label="Enable outbound response" error="An approved response policy is required.">
        <Switch />
      </Field>
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function ControlledExample() {
    const [enabled, setEnabled] = useState(false);
    return <div className="stack">
        <Switch label="Enable project notifications" checked={enabled} onCheckedChange={setEnabled} />
        <output aria-live="polite">
          {enabled ? 'Notifications enabled. New project updates will be delivered.' : 'Notifications paused. Existing updates remain available.'}
        </output>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole('switch', {
      name: 'Enable project notifications'
    });
    await userEvent.click(toggle);
    await expect(toggle).toBeChecked();
    await userEvent.keyboard(' ');
    await expect(toggle).not.toBeChecked();
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Enable project notifications',
    description: 'Send updates when milestones change.',
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
      control: 'boolean'
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
  render: function SwitchPlayground(args) {
    const [, updateArgs] = useArgs();
    return <Switch {...args} onCheckedChange={checked => updateArgs({
      checked
    })} />;
  }
}`,...g.parameters?.docs?.source}}}})))()}v();export{h as ImmediateSetting,m as Matrix,g as Playground,_ as __namedExportsOrder,p as default};