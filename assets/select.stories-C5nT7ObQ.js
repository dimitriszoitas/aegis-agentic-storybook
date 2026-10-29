import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{Ht as r,U as i,ht as a,rt as o,z as s}from"./icon-BsACJKUY.js";import{n as c,t as l}from"./field-DAWuKTUB.js";import{n as u,t as d}from"./select-BtiJdeng.js";var f,p,m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{f=t(),r(),u(),c(),p=n(),{expect:m,userEvent:h,waitFor:g,within:_}=__STORYBOOK_MODULE_TEST__,v=[{value:`projects`,label:`Project tracker`,description:`Milestones, tasks, and delivery updates.`,icon:(0,p.jsx)(o,{size:16}),group:`Workspace sources`},{value:`customers`,label:`Customer directory`,description:`Accounts, contacts, and relationship updates.`,icon:(0,p.jsx)(s,{size:16}),group:`Workspace sources`},{value:`billing`,label:`Billing platform`,description:`Invoices, subscriptions, and payment status.`,icon:(0,p.jsx)(i,{size:16}),group:`Connected services`},{value:`calendar`,label:`Team calendar`,description:`Meetings, deadlines, and availability.`,icon:(0,p.jsx)(a,{size:16}),group:`Connected services`},{value:`archive`,label:`Archived workspace`,description:`Restore this workspace before selecting it.`,disabled:!0,group:`Connected services`}],y={id:`components-forms-select`,title:`Components/Inputs & Selection/Select`,component:d,tags:[`autodocs`],args:{label:`Data source`,options:v,placeholder:`Choose an data source`},parameters:{docs:{story:{inline:!1,height:460},description:{component:`A single-selection Base UI listbox with labeled groups, descriptive options, icons, typeahead, Arrow/Home/End navigation, Escape dismissal and native form participation. Values must be nonempty strings.`}}}},b={render:()=>(0,p.jsxs)(`div`,{className:`story-grid`,children:[(0,p.jsx)(d,{label:`Small source picker`,options:v,size:`sm`,defaultValue:`projects`}),(0,p.jsx)(d,{label:`Default source picker`,options:v,defaultValue:`customers`}),(0,p.jsx)(d,{label:`Large source picker`,options:v,size:`lg`,defaultValue:`billing`}),(0,p.jsx)(d,{label:`Unselected source`,options:v,placeholder:`Choose a source`}),(0,p.jsx)(d,{label:`Managed source`,options:v,defaultValue:`projects`,disabled:!0}),(0,p.jsx)(l,{label:`Required source`,required:!0,error:`Choose the data source for this project.`,children:(0,p.jsx)(d,{options:v,placeholder:`Choose a source`})})]})},x={args:{defaultOpen:!0,defaultValue:`projects`}},S={args:{options:[],defaultOpen:!0}},C={render:function(){let[e,t]=(0,f.useState)(`projects`);return(0,p.jsxs)(`div`,{className:`stack`,children:[(0,p.jsx)(d,{label:`Data source`,options:v,value:e,onValueChange:t}),(0,p.jsxs)(`output`,{"aria-live":`polite`,children:[`Selected source: `,e]})]})},play:async({canvasElement:e})=>{let t=_(e);await h.click(t.getByRole(`combobox`,{name:`Data source`})),await g(()=>m(_(document.body).getByRole(`option`,{name:/^Project tracker/})).toHaveFocus()),await h.keyboard(`{ArrowDown}{Enter}`),await m(t.getByText(`Selected source: customers`)).toBeInTheDocument(),await g(()=>m(t.getByRole(`combobox`,{name:`Data source`})).toHaveFocus())}},w=[`Matrix`,`OpenMenu`,`NoSources`,`KeyboardSelection`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-grid">
      <Select label="Small source picker" options={sources} size="sm" defaultValue="projects" />
      <Select label="Default source picker" options={sources} defaultValue="customers" />
      <Select label="Large source picker" options={sources} size="lg" defaultValue="billing" />
      <Select label="Unselected source" options={sources} placeholder="Choose a source" />
      <Select label="Managed source" options={sources} defaultValue="projects" disabled />
      <Field label="Required source" required error="Choose the data source for this project.">
        <Select options={sources} placeholder="Choose a source" />
      </Field>
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: true,
    defaultValue: 'projects'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    options: [],
    defaultOpen: true
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function ControlledSource() {
    const [source, setSource] = useState('projects');
    return <div className="stack">
        <Select label="Data source" options={sources} value={source} onValueChange={setSource} />
        <output aria-live="polite">Selected source: {source}</output>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('combobox', {
      name: 'Data source'
    }));
    await waitFor(() => expect(within(document.body).getByRole('option', {
      name: /^Project tracker/
    })).toHaveFocus());
    await userEvent.keyboard('{ArrowDown}{Enter}');
    await expect(canvas.getByText('Selected source: customers')).toBeInTheDocument();
    await waitFor(() => expect(canvas.getByRole('combobox', {
      name: 'Data source'
    })).toHaveFocus());
  }
}`,...C.parameters?.docs?.source}}}})))()}T();export{C as KeyboardSelection,b as Matrix,S as NoSources,x as OpenMenu,w as __namedExportsOrder,y as default};