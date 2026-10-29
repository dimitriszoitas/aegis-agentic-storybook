import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{a as r,i,o as a,r as o}from"./fixtures-BNPjpq8z.js";import{n as s,t as c}from"./empty-state-BcxtF-zg.js";import{n as l,t as u}from"./severity-badge-DyfgzVKK.js";import{a as d,f,n as p,o as m,r as h}from"./filter-panel-fWZIVOk2.js";import{n as g,t as _}from"./filter-bar-Dvvi3U0X.js";function v(e){let[t,n]=(0,b.useState)(e.value);return(0,x.jsx)(p,{...e,style:{height:760},value:t,onValueChange:t=>{n(t),e.onValueChange(t)}})}function y(e){let[t,n]=(0,b.useState)(e.value),[r,o]=(0,b.useState)(!0),s=(0,b.useId)(),l=d(e.records,t,a),f=t=>{n(t),e.onValueChange(t)};return(0,x.jsxs)(`div`,{className:`surface`,style:{padding:0,width:`min(1100px, 100%)`},children:[(0,x.jsx)(_,{value:t,onValueChange:f,owners:i,now:a,filterMode:`panel`,filterPanelOpen:r,panelId:s,onTogglePanel:()=>o(e=>!e)}),(0,x.jsxs)(`div`,{className:`aegis-filter-sync-preview`,children:[r&&(0,x.jsx)(p,{...e,id:s,style:{height:700},value:t,onValueChange:f}),(0,x.jsxs)(`section`,{className:`aegis-filter-sync-results`,"aria-label":`Matching record preview`,children:[(0,x.jsxs)(`h3`,{children:[l.length,` matching records`]}),l.length?(0,x.jsx)(`ul`,{children:l.slice(0,8).map(e=>(0,x.jsxs)(`li`,{children:[(0,x.jsx)(u,{severity:e.severity}),(0,x.jsxs)(`span`,{children:[e.title,(0,x.jsxs)(`small`,{children:[e.subject.name,` · `,e.source]})]})]},e.id))}):(0,x.jsx)(c,{compact:!0})]})]})]})}var b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R;function z(){return(z=e((()=>{b=t(),o(),g(),l(),s(),f(),h(),x=n(),{expect:S,fn:C,userEvent:w,waitFor:T,within:E}=__STORYBOOK_MODULE_TEST__,D={id:`patterns-filterpanel`,title:`Patterns/Filtering/FilterPanel`,component:p,parameters:{layout:`padded`},args:{records:r,owners:i,now:a,value:m(),onValueChange:C()},render:e=>(0,x.jsx)(v,{...e})},O={},k={args:{value:{...m(),severities:[`critical`,`high`],sources:[`Projects`],statuses:[`new`]}}},A={args:{defaultSearch:`severity`}},j={args:{defaultSearch:`assignee`,owners:Array.from({length:12},(e,t)=>({id:`owner-${t+1}`,name:`Member ${String(t+1).padStart(2,`0`)}`,initials:`A${t+1}`,role:`Operations member`}))},play:async({canvasElement:e})=>{let t=E(e);await S(t.getAllByRole(`checkbox`)).toHaveLength(8);let n=t.getByRole(`button`,{name:`Show all 13 Assignee options`});n.focus(),await w.keyboard(`{Enter}`),await S(n).toHaveAttribute(`aria-expanded`,`true`),await S(t.getAllByRole(`checkbox`)).toHaveLength(13),await w.click(t.getByRole(`checkbox`,{name:/^Member 09/})),await w.click(t.getByRole(`button`,{name:`Show first 8 of 13 Assignee options`})),await S(t.queryByRole(`checkbox`,{name:/^Member 09/})).not.toBeInTheDocument(),await w.click(t.getByRole(`button`,{name:`Show all 13 Assignee options`})),await S(t.getByRole(`checkbox`,{name:/^Member 09/})).toBeChecked();let r=t.getByRole(`searchbox`,{name:`Search filter options`});await w.clear(r),await w.type(r,`Member 09`),await S(t.getAllByRole(`checkbox`)).toHaveLength(1),await S(t.queryByRole(`button`,{name:/Show all|Show first 8/})).not.toBeInTheDocument(),await w.click(t.getByRole(`button`,{name:`Clear all`})),await S(t.getByRole(`checkbox`,{name:/^Member 09/})).not.toBeChecked()}},M={args:{defaultSearch:`unavailable-source`}},N={args:{records:[]}},P={args:{disabled:!0,value:{...m(),severities:[`critical`]}}},F={render:e=>(0,x.jsx)(y,{...e}),play:async({canvasElement:e})=>{let t=E(e),n=()=>E(t.getByRole(`complementary`,{name:/Filters/}));await w.click(n().getByRole(`checkbox`,{name:/^Critical/})),await S(t.queryByRole(`button`,{name:`Remove Critical severity filter`})).not.toBeInTheDocument(),await w.click(t.getByRole(`button`,{name:`Hide filter panel`})),await S(t.getByRole(`button`,{name:`Remove Critical severity filter`})).toBeVisible(),await w.click(t.getByRole(`button`,{name:`Remove Critical severity filter`})),await w.click(t.getByRole(`button`,{name:`Show filter panel`})),await S(n().getByRole(`checkbox`,{name:/^Critical/})).not.toBeChecked(),await w.click(n().getByRole(`checkbox`,{name:/^Unassigned/})),await w.click(t.getByRole(`button`,{name:`Hide filter panel`})),await S(t.getByRole(`button`,{name:`Remove Unassigned assignee filter`})).toBeVisible(),await w.click(t.getByRole(`button`,{name:`Show filter panel`})),await S(n().getByRole(`checkbox`,{name:/^Unassigned/})).toBeChecked(),await w.click(n().getByRole(`button`,{name:`Clear all`})),await w.click(t.getByRole(`button`,{name:`Hide filter panel`})),await S(t.queryByRole(`button`,{name:`Remove Unassigned assignee filter`})).not.toBeInTheDocument()}},I={play:async({canvasElement:e})=>{let t=E(e);await w.type(t.getByRole(`searchbox`,{name:`Search filter options`}),`billing`),await S(t.getByRole(`checkbox`,{name:/^Billing/})).toBeVisible(),await S(t.queryByRole(`checkbox`,{name:/^Critical/})).not.toBeInTheDocument(),await w.click(t.getByRole(`button`,{name:`Clear filter option search`})),await S(t.getByRole(`checkbox`,{name:/^Critical/})).toBeVisible(),await w.click(t.getByRole(`button`,{name:`Severity`})),await S(t.queryByRole(`checkbox`,{name:/^Critical/})).not.toBeInTheDocument()}},L={play:async({canvasElement:e})=>{let t=E(e),n=t.getByRole(`button`,{name:`Severity`}),r=t.getByRole(`checkbox`,{name:/^Critical/});r.focus(),await w.keyboard(` `),await S(r).toBeChecked(),n.focus(),await w.keyboard(`{Enter}`),await S(n).toHaveAttribute(`aria-expanded`,`false`),await w.keyboard(`{ArrowDown}`),await S(t.getByRole(`button`,{name:`Status`})).toHaveFocus(),await w.keyboard(`{ArrowUp}{Enter}`),await T(()=>S(t.getByRole(`checkbox`,{name:/^Critical/})).toBeChecked()),await w.click(t.getByRole(`button`,{name:`Clear all`})),await S(t.getByRole(`checkbox`,{name:/^Critical/})).not.toBeChecked()}},R=[`Default`,`Applied`,`FilterSearch`,`LongOptionGroup`,`NoOptions`,`NoData`,`Disabled`,`Synchronized`,`SearchAndExpand`,`KeyboardFacets`],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    value: {
      ...createDefaultFilters(),
      severities: ['critical', 'high'],
      sources: ['Projects'],
      statuses: ['new']
    }
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSearch: 'severity'
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSearch: 'assignee',
    owners: Array.from({
      length: 12
    }, (_, index) => ({
      id: \`owner-\${index + 1}\`,
      name: \`Member \${String(index + 1).padStart(2, '0')}\`,
      initials: \`A\${index + 1}\`,
      role: 'Operations member'
    }))
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole('checkbox')).toHaveLength(8);
    const showAll = canvas.getByRole('button', {
      name: 'Show all 13 Assignee options'
    });
    showAll.focus();
    await userEvent.keyboard('{Enter}');
    await expect(showAll).toHaveAttribute('aria-expanded', 'true');
    await expect(canvas.getAllByRole('checkbox')).toHaveLength(13);
    await userEvent.click(canvas.getByRole('checkbox', {
      name: /^Member 09/
    }));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Show first 8 of 13 Assignee options'
    }));
    await expect(canvas.queryByRole('checkbox', {
      name: /^Member 09/
    })).not.toBeInTheDocument();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Show all 13 Assignee options'
    }));
    await expect(canvas.getByRole('checkbox', {
      name: /^Member 09/
    })).toBeChecked();
    const search = canvas.getByRole('searchbox', {
      name: 'Search filter options'
    });
    await userEvent.clear(search);
    await userEvent.type(search, 'Member 09');
    await expect(canvas.getAllByRole('checkbox')).toHaveLength(1);
    await expect(canvas.queryByRole('button', {
      name: /Show all|Show first 8/
    })).not.toBeInTheDocument();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Clear all'
    }));
    await expect(canvas.getByRole('checkbox', {
      name: /^Member 09/
    })).not.toBeChecked();
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSearch: 'unavailable-source'
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    records: []
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: {
      ...createDefaultFilters(),
      severities: ['critical']
    }
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: args => <SynchronizedDemo {...args} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const panel = () => within(canvas.getByRole('complementary', {
      name: /Filters/
    }));
    await userEvent.click(panel().getByRole('checkbox', {
      name: /^Critical/
    }));
    await expect(canvas.queryByRole('button', {
      name: 'Remove Critical severity filter'
    })).not.toBeInTheDocument();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Hide filter panel'
    }));
    await expect(canvas.getByRole('button', {
      name: 'Remove Critical severity filter'
    })).toBeVisible();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Remove Critical severity filter'
    }));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Show filter panel'
    }));
    await expect(panel().getByRole('checkbox', {
      name: /^Critical/
    })).not.toBeChecked();
    await userEvent.click(panel().getByRole('checkbox', {
      name: /^Unassigned/
    }));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Hide filter panel'
    }));
    await expect(canvas.getByRole('button', {
      name: 'Remove Unassigned assignee filter'
    })).toBeVisible();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Show filter panel'
    }));
    await expect(panel().getByRole('checkbox', {
      name: /^Unassigned/
    })).toBeChecked();
    await userEvent.click(panel().getByRole('button', {
      name: 'Clear all'
    }));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Hide filter panel'
    }));
    await expect(canvas.queryByRole('button', {
      name: 'Remove Unassigned assignee filter'
    })).not.toBeInTheDocument();
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByRole('searchbox', {
      name: 'Search filter options'
    }), 'billing');
    await expect(canvas.getByRole('checkbox', {
      name: /^Billing/
    })).toBeVisible();
    await expect(canvas.queryByRole('checkbox', {
      name: /^Critical/
    })).not.toBeInTheDocument();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Clear filter option search'
    }));
    await expect(canvas.getByRole('checkbox', {
      name: /^Critical/
    })).toBeVisible();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Severity'
    }));
    await expect(canvas.queryByRole('checkbox', {
      name: /^Critical/
    })).not.toBeInTheDocument();
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const severity = canvas.getByRole('button', {
      name: 'Severity'
    });
    const critical = canvas.getByRole('checkbox', {
      name: /^Critical/
    });
    critical.focus();
    await userEvent.keyboard(' ');
    await expect(critical).toBeChecked();
    severity.focus();
    await userEvent.keyboard('{Enter}');
    await expect(severity).toHaveAttribute('aria-expanded', 'false');
    await userEvent.keyboard('{ArrowDown}');
    await expect(canvas.getByRole('button', {
      name: 'Status'
    })).toHaveFocus();
    await userEvent.keyboard('{ArrowUp}{Enter}');
    await waitFor(() => expect(canvas.getByRole('checkbox', {
      name: /^Critical/
    })).toBeChecked());
    await userEvent.click(canvas.getByRole('button', {
      name: 'Clear all'
    }));
    await expect(canvas.getByRole('checkbox', {
      name: /^Critical/
    })).not.toBeChecked();
  }
}`,...L.parameters?.docs?.source}}}})))()}z();export{k as Applied,O as Default,P as Disabled,A as FilterSearch,L as KeyboardFacets,j as LongOptionGroup,N as NoData,M as NoOptions,I as SearchAndExpand,F as Synchronized,R as __namedExportsOrder,D as default};