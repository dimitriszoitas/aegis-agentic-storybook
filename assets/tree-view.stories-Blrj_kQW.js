import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{Ct as r,Ht as i,U as a,V as o,rt as s,z as c}from"./icon-BY3BDj89.js";import{n as l,t as u}from"./tree-view-QW82KtUu.js";var d,f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{d=t(),i(),l(),f=n(),{expect:p,userEvent:m,within:h}=__STORYBOOK_MODULE_TEST__,g=[{id:`projects`,label:`Projects`,icon:(0,f.jsx)(s,{size:16}),count:1248,children:[{id:`experience`,label:`Customer experience`,icon:(0,f.jsx)(o,{size:16}),count:862,children:[{id:`ath`,label:`Customer portal`,icon:(0,f.jsx)(s,{size:16}),count:428},{id:`lon`,label:`Account settings`,icon:(0,f.jsx)(s,{size:16}),count:434}]},{id:`platform`,label:`Platform delivery`,icon:(0,f.jsx)(o,{size:16}),count:386,children:[{id:`prod`,label:`Billing workspace`,icon:(0,f.jsx)(r,{size:16}),count:386},{id:`offline`,label:`Archived migration`,description:`Project archived`,disabled:!0,icon:(0,f.jsx)(r,{size:16}),count:0}]}]},{id:`customers`,label:`Customers`,icon:(0,f.jsx)(c,{size:16}),count:672,children:[{id:`northstar`,label:`Northstar Labs`,count:512},{id:`atlas`,label:`Atlas Commerce`,count:160}]},{id:`finance`,label:`Finance`,icon:(0,f.jsx)(a,{size:16}),count:2840,children:[{id:`invoices`,label:`Invoices`,count:2201},{id:`subscriptions`,label:`Subscriptions`,count:639}]}],_={id:`components-forms-treeview`,title:`Components/Inputs & Selection/TreeView`,component:u,tags:[`autodocs`],args:{label:`Workspace records`,items:g},parameters:{docs:{description:{component:`Stores selected leaf IDs and derives parent checked/mixed state. Selecting a branch affects enabled descendants only. Arrow keys navigate and expand/collapse; Home/End jump; Space/Enter toggle; typing searches visible labels; * expands siblings; Control/Command+A selects all enabled leaves. Selection and expansion each support controlled and uncontrolled state.`}}}},v={render:()=>(0,f.jsxs)(`div`,{className:`story-grid`,children:[(0,f.jsx)(u,{label:`Collapsed records`,items:g}),(0,f.jsx)(u,{label:`Partially selected records`,items:g,defaultExpandedIds:[`projects`,`experience`],defaultSelectedIds:[`ath`]}),(0,f.jsx)(u,{label:`Selected projects branch`,items:g,defaultExpandedIds:[`projects`,`platform`],defaultSelectedIds:[`ath`,`lon`,`prod`]}),(0,f.jsx)(u,{label:`Locked project scope`,items:g,disabled:!0,defaultExpandedIds:[`customers`],defaultSelectedIds:[`northstar`]})]})},y={args:{defaultExpandedIds:[`projects`,`experience`,`platform`,`customers`,`finance`],defaultSelectedIds:[`ath`,`northstar`]}},b={args:{items:[],emptyLabel:`No connected records match the current filters`}},x={render:function(){let[e,t]=(0,d.useState)([`ath`]),[n,r]=(0,d.useState)([`projects`,`experience`]);return(0,f.jsxs)(`div`,{className:`stack`,children:[(0,f.jsx)(u,{label:`Workspace records`,items:g,selectedIds:e,onSelectedChange:t,expandedIds:n,onExpandedChange:r}),(0,f.jsxs)(`output`,{"aria-live":`polite`,children:[e.length,` records selected`]})]})},play:async({canvasElement:e})=>{let t=h(e),n=t.getByRole(`treeitem`,{name:`Projects`});await p(n).toHaveAttribute(`aria-checked`,`mixed`),n.focus(),await m.keyboard(` `),await p(n).toHaveAttribute(`aria-checked`,`true`),await p(t.getByText(`3 records selected`)).toBeInTheDocument(),await m.keyboard(`{ArrowRight}`),await p(t.getByRole(`treeitem`,{name:`Customer experience`})).toHaveFocus(),await m.keyboard(`{ArrowLeft}`),await p(t.getByRole(`treeitem`,{name:`Customer experience`})).toHaveAttribute(`aria-expanded`,`false`),await m.keyboard(`{ArrowLeft}`),await p(n).toHaveFocus()}},S=[`Matrix`,`FullyExpanded`,`Empty`,`KeyboardAndTriState`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-grid">
      <TreeView label="Collapsed records" items={records} />
      <TreeView label="Partially selected records" items={records} defaultExpandedIds={['projects', 'experience']} defaultSelectedIds={['ath']} />
      <TreeView label="Selected projects branch" items={records} defaultExpandedIds={['projects', 'platform']} defaultSelectedIds={['ath', 'lon', 'prod']} />
      <TreeView label="Locked project scope" items={records} disabled defaultExpandedIds={['customers']} defaultSelectedIds={['northstar']} />
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    defaultExpandedIds: ['projects', 'experience', 'platform', 'customers', 'finance'],
    defaultSelectedIds: ['ath', 'northstar']
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    items: [],
    emptyLabel: 'No connected records match the current filters'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function ControlledTree() {
    const [selected, setSelected] = useState<string[]>(['ath']);
    const [expanded, setExpanded] = useState<string[]>(['projects', 'experience']);
    return <div className="stack">
        <TreeView label="Workspace records" items={records} selectedIds={selected} onSelectedChange={setSelected} expandedIds={expanded} onExpandedChange={setExpanded} />
        <output aria-live="polite">{selected.length} records selected</output>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const projects = canvas.getByRole('treeitem', {
      name: 'Projects'
    });
    await expect(projects).toHaveAttribute('aria-checked', 'mixed');
    projects.focus();
    await userEvent.keyboard(' ');
    await expect(projects).toHaveAttribute('aria-checked', 'true');
    await expect(canvas.getByText('3 records selected')).toBeInTheDocument();
    await userEvent.keyboard('{ArrowRight}');
    await expect(canvas.getByRole('treeitem', {
      name: 'Customer experience'
    })).toHaveFocus();
    await userEvent.keyboard('{ArrowLeft}');
    await expect(canvas.getByRole('treeitem', {
      name: 'Customer experience'
    })).toHaveAttribute('aria-expanded', 'false');
    await userEvent.keyboard('{ArrowLeft}');
    await expect(projects).toHaveFocus();
  }
}`,...x.parameters?.docs?.source}}}})))()}C();export{b as Empty,y as FullyExpanded,x as KeyboardAndTriState,v as Matrix,S as __namedExportsOrder,_ as default};