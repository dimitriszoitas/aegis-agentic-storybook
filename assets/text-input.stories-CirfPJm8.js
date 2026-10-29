import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{Dt as r,Ht as i,Lt as a,U as o,q as s}from"./icon-BsACJKUY.js";import{n as c,t as l}from"./field-DAWuKTUB.js";import{n as u,t as d}from"./text-input-ypRKYZVa.js";var f,p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{f=t(),i(),u(),c(),p=n(),{useArgs:m}=__STORYBOOK_MODULE_PREVIEW_API__,{expect:h,userEvent:g,within:_}=__STORYBOOK_MODULE_TEST__,v={id:`components-forms-textinput`,title:`Components/Inputs & Selection/TextInput`,component:d,tags:[`autodocs`],args:{label:`Project name`,defaultValue:`Customer portal`},argTypes:{size:{control:`inline-radio`,options:[`sm`,`md`,`lg`]},prefix:{control:!1},suffix:{control:!1}}},y={render:()=>(0,p.jsx)(`div`,{className:`stack`,children:[`sm`,`md`,`lg`].map(e=>(0,p.jsxs)(`section`,{className:`stack`,children:[(0,p.jsx)(`h3`,{children:e===`sm`?`Small · 28px`:e===`md`?`Medium · 34px`:`Large · 40px`}),(0,p.jsxs)(`div`,{className:`story-grid`,children:[(0,p.jsx)(d,{label:`Project name`,size:e,defaultValue:`Customer portal`}),(0,p.jsx)(d,{label:`Filter expression`,size:e,placeholder:`source:projects status:active`}),(0,p.jsx)(d,{label:`Member`,size:e,defaultValue:`k.nakamura`,prefix:(0,p.jsx)(a,{size:16,"aria-hidden":`true`}),clearable:!0}),(0,p.jsx)(l,{label:`Source address`,error:`Enter an IPv4 or IPv6 address.`,children:(0,p.jsx)(d,{size:e,defaultValue:`185.220.101`,prefix:(0,p.jsx)(o,{size:16,"aria-hidden":`true`})})}),(0,p.jsx)(d,{label:`Managed project`,size:e,defaultValue:`PRJ-2026-0042`,disabled:!0}),(0,p.jsx)(d,{label:`Event identifier`,size:e,defaultValue:`EVT-2026-084721`,readOnly:!0,suffix:(0,p.jsx)(r,{size:16,"aria-label":`Verified event`})})]})]},e))})},b={render:()=>(0,p.jsxs)(`div`,{className:`story-grid`,children:[(0,p.jsx)(d,{label:`Workspace URL`,prefix:`https://`,defaultValue:`ingest.aegis.internal`,suffix:`/v1/events`}),(0,p.jsx)(d,{label:`API token`,type:`password`,prefix:(0,p.jsx)(s,{size:16,"aria-hidden":`true`}),defaultValue:`aegis_local_demo_token`,autoComplete:`off`}),(0,p.jsx)(d,{label:`Retention period`,type:`number`,defaultValue:`90`,min:1,max:365,suffix:`days`})]})},x={render:function(){let[e,t]=(0,f.useState)(`Customer portal`);return(0,p.jsxs)(`div`,{className:`stack`,children:[(0,p.jsx)(d,{label:`Project name`,value:e,onChange:e=>t(e.currentTarget.value),clearable:!0}),(0,p.jsx)(`output`,{"aria-live":`polite`,children:e?`Filtering project: ${e}`:`All projects included`})]})},play:async({canvasElement:e})=>{let t=_(e);await g.click(t.getByRole(`button`,{name:`Clear input`})),await h(t.getByRole(`textbox`,{name:`Project name`})).toHaveValue(``),await h(t.getByRole(`textbox`,{name:`Project name`})).toHaveFocus(),await h(t.getByText(`All projects included`)).toBeInTheDocument()}},S={args:{label:`Project name`,value:`Customer portal`,defaultValue:void 0,placeholder:`Name this project`,size:`md`,type:`text`,clearable:!0,prefix:``,suffix:``,disabled:!1,readOnly:!1,invalid:!1,required:!1},argTypes:{label:{control:`text`},value:{control:`text`},placeholder:{control:`text`},size:{control:`inline-radio`,options:[`sm`,`md`,`lg`]},type:{control:`select`,options:[`text`,`email`,`url`,`password`,`number`]},prefix:{control:`text`},suffix:{control:`text`},clearable:{control:`boolean`},disabled:{control:`boolean`},readOnly:{control:`boolean`},invalid:{control:`boolean`},required:{control:`boolean`}},render:function(e){let[,t]=m();return(0,p.jsx)(d,{...e,defaultValue:void 0,onValueChange:e=>t({value:e})})}},C=[`Matrix`,`PrefixAndSuffix`,`Clearable`,`Playground`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="stack">
      {(['sm', 'md', 'lg'] as TextInputSize[]).map(size => <section key={size} className="stack">
          <h3>
            {size === 'sm' ? 'Small · 28px' : size === 'md' ? 'Medium · 34px' : 'Large · 40px'}
          </h3>
          <div className="story-grid">
            <TextInput label="Project name" size={size} defaultValue="Customer portal" />
            <TextInput label="Filter expression" size={size} placeholder="source:projects status:active" />
            <TextInput label="Member" size={size} defaultValue="k.nakamura" prefix={<User size={16} aria-hidden="true" />} clearable />
            <Field label="Source address" error="Enter an IPv4 or IPv6 address.">
              <TextInput size={size} defaultValue="185.220.101" prefix={<Globe size={16} aria-hidden="true" />} />
            </Field>
            <TextInput label="Managed project" size={size} defaultValue="PRJ-2026-0042" disabled />
            <TextInput label="Event identifier" size={size} defaultValue="EVT-2026-084721" readOnly suffix={<ShieldCheck size={16} aria-label="Verified event" />} />
          </div>
        </section>)}
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-grid">
      <TextInput label="Workspace URL" prefix="https://" defaultValue="ingest.aegis.internal" suffix="/v1/events" />
      <TextInput label="API token" type="password" prefix={<KeyRound size={16} aria-hidden="true" />} defaultValue="aegis_local_demo_token" autoComplete="off" />
      <TextInput label="Retention period" type="number" defaultValue="90" min={1} max={365} suffix="days" />
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function ClearableExample() {
    const [value, setValue] = useState('Customer portal');
    return <div className="stack">
        <TextInput label="Project name" value={value} onChange={event => setValue(event.currentTarget.value)} clearable />
        <output aria-live="polite">
          {value ? \`Filtering project: \${value}\` : 'All projects included'}
        </output>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Clear input'
    }));
    await expect(canvas.getByRole('textbox', {
      name: 'Project name'
    })).toHaveValue('');
    await expect(canvas.getByRole('textbox', {
      name: 'Project name'
    })).toHaveFocus();
    await expect(canvas.getByText('All projects included')).toBeInTheDocument();
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Project name',
    value: 'Customer portal',
    defaultValue: undefined,
    placeholder: 'Name this project',
    size: 'md',
    type: 'text',
    clearable: true,
    prefix: '',
    suffix: '',
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
    type: {
      control: 'select',
      options: ['text', 'email', 'url', 'password', 'number']
    },
    prefix: {
      control: 'text'
    },
    suffix: {
      control: 'text'
    },
    clearable: {
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
  render: function TextInputPlayground(args) {
    const [, updateArgs] = useArgs();
    return <TextInput {...args} defaultValue={undefined} onValueChange={value => updateArgs({
      value
    })} />;
  }
}`,...S.parameters?.docs?.source}}}})))()}w();export{x as Clearable,y as Matrix,S as Playground,b as PrefixAndSuffix,C as __namedExportsOrder,v as default};