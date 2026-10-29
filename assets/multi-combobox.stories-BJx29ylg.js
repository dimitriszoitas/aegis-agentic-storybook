import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{Ht as r,Tt as i,U as a,rt as o,z as s}from"./icon-qDBR5KlT.js";import{n as c,t as l}from"./field-B_LPfZ_c.js";import{n as u,t as d}from"./multi-combobox-DC8Wf3lg.js";var f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{f=t(),r(),u(),c(),p=n(),{expect:m,userEvent:h,waitFor:g,within:_}=__STORYBOOK_MODULE_TEST__,v=[{value:`projects`,label:`Project tracker`,description:`Project milestones and delivery schedules.`,icon:(0,p.jsx)(o,{size:16}),group:`Planning`,keywords:[`planning`,`projects`]},{value:`tasks`,label:`Task board`,description:`Team tasks and workload planning.`,icon:(0,p.jsx)(i,{size:16}),group:`Planning`,keywords:[`planning`,`tasks`]},{value:`customers`,label:`Customer directory`,description:`Customer accounts and relationship updates.`,icon:(0,p.jsx)(s,{size:16}),group:`Customers`},{value:`contacts`,label:`Contact list`,description:`Customer contacts and communication preferences.`,icon:(0,p.jsx)(s,{size:16}),group:`Customers`},{value:`billing`,label:`Billing platform`,description:`Invoices, subscriptions, and payments.`,icon:(0,p.jsx)(a,{size:16}),group:`Finance`},{value:`retired`,label:`Archived workspace`,description:`Connector disabled after migration.`,disabled:!0,group:`Finance`}],y={id:`components-forms-multicombobox`,title:`Components/Inputs & Selection/MultiCombobox`,component:d,tags:[`autodocs`],args:{label:`Included sources`,options:v},parameters:{docs:{story:{inline:!1,height:480},description:{component:`A multi-select popover with Base UI Combobox primitives. Checked state and active keyboard focus remain independent. Type to filter, use Arrow/Home/End to navigate, Enter to toggle, Escape to close and Backspace on an empty search to remove the last selection. Select all applies to enabled filtered options. Set filterOptions=false for externally searched results.`}}}},b={render:()=>(0,p.jsxs)(`div`,{className:`story-grid`,children:[(0,p.jsx)(d,{label:`Included sources`,options:v}),(0,p.jsx)(d,{label:`Planning sources`,options:v,defaultValue:[`projects`,`tasks`]}),(0,p.jsx)(d,{label:`All active sources`,options:v,defaultValue:[`projects`,`tasks`,`customers`,`contacts`,`billing`],maxVisible:2}),(0,p.jsx)(d,{label:`Managed scope`,options:v,defaultValue:[`customers`,`contacts`],disabled:!0}),(0,p.jsx)(l,{label:`Project scope`,required:!0,error:`Choose at least one source for this project.`,children:(0,p.jsx)(d,{options:v})})]})},x={args:{defaultOpen:!0,defaultValue:[`projects`,`customers`]}},S={args:{defaultOpen:!0,loading:!0,options:[]}},C={args:{defaultOpen:!0,options:[],emptyLabel:`No sources match this project scope`}},w={render:function(){let[e,t]=(0,f.useState)(``),n=v.filter(t=>t.label.toLocaleLowerCase().includes(e.toLocaleLowerCase()));return(0,p.jsx)(d,{label:`Connected sources`,options:n,search:e,onSearchChange:t,filterOptions:!1,defaultOpen:!0})}},T={render:function(){let[e,t]=(0,f.useState)([]);return(0,p.jsxs)(`div`,{className:`stack`,children:[(0,p.jsx)(d,{label:`Included sources`,options:v,value:e,onValueChange:t}),(0,p.jsxs)(`output`,{"aria-live":`polite`,children:[e.length,` connected sources included`]})]})},play:async({canvasElement:e})=>{let t=_(e),n=_(e.ownerDocument.body);await h.click(t.getByRole(`combobox`,{name:`Included sources`}));let r=await n.findByRole(`combobox`,{name:`Search sources`});await g(()=>m(r).toHaveFocus()),await h.type(r,`planning`),await h.keyboard(`{Home}{Enter}`),await m(n.getByRole(`option`,{name:/Project tracker/})).toHaveAttribute(`aria-selected`,`true`),await h.keyboard(`{ArrowDown}{Enter}`),await m(t.getByText(`2 connected sources included`)).toBeInTheDocument(),await h.keyboard(`{Escape}`),await g(()=>m(t.getByRole(`combobox`,{name:`Included sources`})).toHaveFocus()),await h.click(t.getByRole(`button`,{name:`Remove Project tracker`})),await m(t.getByText(`1 connected sources included`)).toBeInTheDocument()}},E={args:{defaultValue:[`projects`,`tasks`,`customers`,`contacts`],maxVisible:2},play:async({canvasElement:e})=>{let t=_(e);t.getByRole(`button`,{name:`Remove Project tracker`}).focus(),await h.keyboard(`{Delete}`),await g(()=>m(t.getByRole(`button`,{name:`Remove Task board`})).toHaveFocus()),await h.tab(),await m(t.getByRole(`button`,{name:`Remove Customer directory`})).toHaveFocus(),await h.keyboard(`{Backspace}`),await g(()=>m(t.getByRole(`button`,{name:`Remove Contact list`})).toHaveFocus()),await h.keyboard(`{Enter}`),await g(()=>m(t.getByRole(`button`,{name:`Remove Task board`})).toHaveFocus()),await h.keyboard(`{Delete}`),await g(()=>m(t.getByRole(`combobox`,{name:`Included sources`})).toHaveFocus()),await m(t.queryByRole(`button`,{name:/^Remove /})).not.toBeInTheDocument()}},D=[`Matrix`,`OpenGrouped`,`Loading`,`EmptyResults`,`AsyncResults`,`KeyboardSelection`,`KeyboardChipRemoval`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-grid">
      <MultiCombobox label="Included sources" options={sources} />
      <MultiCombobox label="Planning sources" options={sources} defaultValue={['projects', 'tasks']} />
      <MultiCombobox label="All active sources" options={sources} defaultValue={['projects', 'tasks', 'customers', 'contacts', 'billing']} maxVisible={2} />
      <MultiCombobox label="Managed scope" options={sources} defaultValue={['customers', 'contacts']} disabled />
      <Field label="Project scope" required error="Choose at least one source for this project.">
        <MultiCombobox options={sources} />
      </Field>
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: true,
    defaultValue: ['projects', 'customers']
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: true,
    loading: true,
    options: []
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: true,
    options: [],
    emptyLabel: 'No sources match this project scope'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: function AsyncSources() {
    const [search, setSearch] = useState('');
    // The caller owns search state and may replace these results after an API request.
    const results = sources.filter(source => source.label.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
    return <MultiCombobox label="Connected sources" options={results} search={search} onSearchChange={setSearch} filterOptions={false} defaultOpen />;
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: function ControlledSelection() {
    const [value, setValue] = useState<string[]>([]);
    return <div className="stack">
        <MultiCombobox label="Included sources" options={sources} value={value} onValueChange={setValue} />
        <output aria-live="polite">{value.length} connected sources included</output>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    await userEvent.click(canvas.getByRole('combobox', {
      name: 'Included sources'
    }));
    const input = await body.findByRole('combobox', {
      name: 'Search sources'
    });
    await waitFor(() => expect(input).toHaveFocus());
    await userEvent.type(input, 'planning');
    await userEvent.keyboard('{Home}{Enter}');
    await expect(body.getByRole('option', {
      name: /Project tracker/
    })).toHaveAttribute('aria-selected', 'true');
    await userEvent.keyboard('{ArrowDown}{Enter}');
    await expect(canvas.getByText('2 connected sources included')).toBeInTheDocument();
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(canvas.getByRole('combobox', {
      name: 'Included sources'
    })).toHaveFocus());
    await userEvent.click(canvas.getByRole('button', {
      name: 'Remove Project tracker'
    }));
    await expect(canvas.getByText('1 connected sources included')).toBeInTheDocument();
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: ['projects', 'tasks', 'customers', 'contacts'],
    maxVisible: 2
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    canvas.getByRole('button', {
      name: 'Remove Project tracker'
    }).focus();
    await userEvent.keyboard('{Delete}');
    await waitFor(() => expect(canvas.getByRole('button', {
      name: 'Remove Task board'
    })).toHaveFocus());
    await userEvent.tab();
    await expect(canvas.getByRole('button', {
      name: 'Remove Customer directory'
    })).toHaveFocus();
    await userEvent.keyboard('{Backspace}');
    await waitFor(() => expect(canvas.getByRole('button', {
      name: 'Remove Contact list'
    })).toHaveFocus());
    await userEvent.keyboard('{Enter}');
    await waitFor(() => expect(canvas.getByRole('button', {
      name: 'Remove Task board'
    })).toHaveFocus());
    await userEvent.keyboard('{Delete}');
    await waitFor(() => expect(canvas.getByRole('combobox', {
      name: 'Included sources'
    })).toHaveFocus());
    await expect(canvas.queryByRole('button', {
      name: /^Remove /
    })).not.toBeInTheDocument();
  }
}`,...E.parameters?.docs?.source}}}})))()}O();export{w as AsyncResults,C as EmptyResults,E as KeyboardChipRemoval,T as KeyboardSelection,S as Loading,b as Matrix,x as OpenGrouped,D as __namedExportsOrder,y as default};