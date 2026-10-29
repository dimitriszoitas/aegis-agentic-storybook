import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./field-Crfqy8aH.js";import{n as a,t as o}from"./textarea-BHPaIIKn.js";var s,c,l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{s=t(),a(),r(),c=n(),{useArgs:l}=__STORYBOOK_MODULE_PREVIEW_API__,{expect:u,userEvent:d,within:f}=__STORYBOOK_MODULE_TEST__,p=`The customer portal redesign is ready for review. Confirm the onboarding flow, account settings, and billing requirements with the customer team before scheduling the next milestone.`,m={id:`components-forms-textarea`,title:`Components/Inputs & Selection/Textarea`,component:o,tags:[`autodocs`],args:{label:`Project notes`,defaultValue:p},parameters:{docs:{description:{component:`A multiline field with optional automatic growth bounded by maxRows and an accessible character counter. Native maxLength limits user input; counts use the same UTF-16 length as HTML.`}}}},h={render:()=>(0,c.jsxs)(`div`,{className:`story-grid`,children:[(0,c.jsx)(o,{label:`Project notes`,defaultValue:p}),(0,c.jsx)(o,{label:`Review summary`,placeholder:`Record the decisions and next steps for the project.`,showCount:!0,maxLength:500}),(0,c.jsx)(o,{label:`Project rationale`,defaultValue:p,showCount:!0,maxLength:500,autoGrow:!0,rows:2,maxRows:8}),(0,c.jsx)(i,{label:`Resolution reason`,required:!0,error:`Explain why this record can be closed.`,children:(0,c.jsx)(o,{defaultValue:``,showCount:!0,maxLength:300})}),(0,c.jsx)(o,{label:`Archived notes`,disabled:!0,defaultValue:`This project was archived on 6 October 2026.`}),(0,c.jsx)(o,{label:`Audit record`,readOnly:!0,defaultValue:`Katerina Nikolaou assigned the project to the customer experience team.`})]})},g={render:function(){let[e,t]=(0,s.useState)(``);return(0,c.jsx)(o,{label:`Member handoff`,value:e,onValueChange:t,autoGrow:!0,rows:2,maxRows:5,maxLength:280,showCount:!0})},play:async({canvasElement:e})=>{let t=f(e),n=t.getByRole(`textbox`,{name:`Member handoff`});await d.type(n,`Review project PRJ-0042.`),await u(n).toHaveValue(`Review project PRJ-0042.`),await u(t.getByText(`24 / 280 characters`)).toBeInTheDocument()}},_={args:{label:`Project notes`,value:`Review the onboarding flow with the customer team.`,defaultValue:void 0,placeholder:`Add a note`,size:`md`,appearance:`default`,rows:3,maxRows:8,maxLength:280,showCount:!0,autoGrow:!1,disabled:!1,readOnly:!1,invalid:!1,required:!1},argTypes:{label:{control:`text`},value:{control:`text`},placeholder:{control:`text`},size:{control:`inline-radio`,options:[`sm`,`md`,`lg`]},appearance:{control:`inline-radio`,options:[`default`,`plain`]},rows:{control:{type:`number`,min:1,max:12,step:1}},maxRows:{control:{type:`number`,min:1,max:20,step:1}},maxLength:{control:{type:`number`,min:1,max:2e3,step:1}},showCount:{control:`boolean`},autoGrow:{control:`boolean`},disabled:{control:`boolean`},readOnly:{control:`boolean`},invalid:{control:`boolean`},required:{control:`boolean`}},render:function(e){let[,t]=l();return(0,c.jsx)(o,{...e,defaultValue:void 0,onValueChange:e=>t({value:e})})}},v=[`Matrix`,`AutoGrowAndCounter`,`Playground`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-grid">
      <Textarea label="Project notes" defaultValue={notes} />
      <Textarea label="Review summary" placeholder="Record the decisions and next steps for the project." showCount maxLength={500} />
      <Textarea label="Project rationale" defaultValue={notes} showCount maxLength={500} autoGrow rows={2} maxRows={8} />
      <Field label="Resolution reason" required error="Explain why this record can be closed.">
        <Textarea defaultValue="" showCount maxLength={300} />
      </Field>
      <Textarea label="Archived notes" disabled defaultValue="This project was archived on 6 October 2026." />
      <Textarea label="Audit record" readOnly defaultValue="Katerina Nikolaou assigned the project to the customer experience team." />
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function GrowingExample() {
    const [value, setValue] = useState('');
    return <Textarea label="Member handoff" value={value} onValueChange={setValue} autoGrow rows={2} maxRows={5} maxLength={280} showCount />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Member handoff'
    });
    await userEvent.type(input, 'Review project PRJ-0042.');
    await expect(input).toHaveValue('Review project PRJ-0042.');
    await expect(canvas.getByText('24 / 280 characters')).toBeInTheDocument();
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Project notes',
    value: 'Review the onboarding flow with the customer team.',
    defaultValue: undefined,
    placeholder: 'Add a note',
    size: 'md',
    appearance: 'default',
    rows: 3,
    maxRows: 8,
    maxLength: 280,
    showCount: true,
    autoGrow: false,
    disabled: false,
    readOnly: false,
    invalid: false,
    required: false
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
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg']
    },
    appearance: {
      control: 'inline-radio',
      options: ['default', 'plain']
    },
    rows: {
      control: {
        type: 'number',
        min: 1,
        max: 12,
        step: 1
      }
    },
    maxRows: {
      control: {
        type: 'number',
        min: 1,
        max: 20,
        step: 1
      }
    },
    maxLength: {
      control: {
        type: 'number',
        min: 1,
        max: 2000,
        step: 1
      }
    },
    showCount: {
      control: 'boolean'
    },
    autoGrow: {
      control: 'boolean'
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
  render: function TextareaPlayground(args) {
    const [, updateArgs] = useArgs();
    return <Textarea {...args} defaultValue={undefined} onValueChange={value => updateArgs({
      value
    })} />;
  }
}`,..._.parameters?.docs?.source}}}})))()}y();export{g as AutoGrowAndCounter,h as Matrix,_ as Playground,v as __namedExportsOrder,m as default};