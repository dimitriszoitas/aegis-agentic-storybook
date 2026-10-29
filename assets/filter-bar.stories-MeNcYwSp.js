import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{a as r,i,o as a,r as o}from"./fixtures-BNPjpq8z.js";import{f as s,n as c,o as l,r as u}from"./filter-panel-D2oU9pnl.js";import{n as d,t as f}from"./filter-bar-NVDB9tRL.js";function p(e){let[t,n]=(0,m.useState)(e.value),[o,s]=(0,m.useState)(`default`),[l,u]=(0,m.useState)(x),[d,p]=(0,m.useState)(e.filterPanelOpen??!1),g=(0,m.useRef)(null),_=(0,m.useId)(),v=t=>{n(t),e.onValueChange(t)},y=e.filterMode!==`bar`&&d;return(0,h.jsxs)(`div`,{ref:g,className:`surface`,style:{padding:0,display:`flex`,alignItems:`stretch`},children:[y&&(0,h.jsx)(c,{id:_,records:r,owners:i,value:t,onValueChange:v,now:a,disabled:e.disabled,onClose:()=>{g.current?.querySelector(`[aria-label="Hide filter panel"]`)?.focus(),p(!1)}}),(0,h.jsxs)(`div`,{style:{flex:1,minWidth:0},children:[(0,h.jsx)(f,{...e,value:t,onValueChange:v,density:o,onDensityChange:s,columns:l,onColumnVisibilityChange:(e,t)=>u(n=>n.map(n=>n.id===e?{...n,visible:t}:n)),filterPanelOpen:y,panelId:_,onTogglePanel:()=>p(e=>!e)}),(0,h.jsxs)(`p`,{className:`muted`,style:{margin:`var(--space-4)`,fontSize:`var(--text-xs)`},children:[`Viewing `,o,` rows · `,l.filter(e=>e.visible).length,` columns visible`]})]})]})}var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N;function P(){return(P=e((()=>{m=t(),o(),s(),u(),d(),h=n(),{expect:g,fn:_,userEvent:v,waitFor:y,within:b}=__STORYBOOK_MODULE_TEST__,x=[{id:`title`,label:`Record title`,visible:!0,hideable:!1},{id:`severity`,label:`Severity`,visible:!0},{id:`source`,label:`Source`,visible:!0},{id:`status`,label:`Status`,visible:!0},{id:`assignee`,label:`Assignee`,visible:!1}],S={id:`patterns-filterbar`,title:`Patterns/Filtering/FilterBar`,component:f,parameters:{layout:`padded`,docs:{description:{component:`Choose one editing mode. Panel mode keeps search and table controls in the toolbar and edits facets in the sidebar; removable applied chips appear only while that sidebar is closed. Bar mode uses one compact filter picker and never opens a sidebar. Neither mode exposes unused facet options or saved-filter controls. Search is capped at 500px and shrinks with its container.`}}},args:{value:l(),onValueChange:_(),owners:i,now:a,filterMode:`panel`},render:e=>(0,h.jsx)(p,{...e})},C={},w={args:{value:{...l(),severities:[`critical`,`high`],statuses:[`new`],sources:[`Projects`],assignees:[i[0].id],rules:[{id:`category`,field:`category`,operator:`contains`,value:`delivery`}],timeRange:{mode:`relative`,preset:`7d`}}}},T={args:{disabled:!0,value:{...l(),severities:[`high`]}}},E={args:{filterMode:`bar`}},D={args:{filterPanelOpen:!0,value:{...l(),severities:[`critical`]}}},O={play:async({canvasElement:e})=>{let t=b(e);await v.type(t.getByRole(`searchbox`,{name:`Search records`}),`Project`),await g(t.getByRole(`button`,{name:`Remove search filter`})).toBeVisible(),await v.click(t.getByRole(`button`,{name:`Clear all`})),await g(t.getByRole(`searchbox`,{name:`Search records`})).toHaveValue(``),await g(t.getByRole(`searchbox`,{name:`Search records`})).toHaveFocus(),await g(t.queryByRole(`group`,{name:`Applied filters`})).not.toBeInTheDocument()}},k={play:async({canvasElement:e})=>{let t=b(e),n=b(e.ownerDocument.body);await v.click(t.getByRole(`button`,{name:`Compact rows`})),await g(t.getByRole(`button`,{name:`Compact rows`})).toHaveAttribute(`aria-pressed`,`true`),await v.click(t.getByRole(`button`,{name:`Column settings`})),await v.click(n.getByRole(`checkbox`,{name:`Assignee`})),await g(n.getByRole(`checkbox`,{name:`Assignee`})).toBeChecked(),await v.keyboard(`{Escape}`),await g(t.queryByRole(`button`,{name:/Saved filters|Save filter|New filter|Customise filters|Severity: Any/})).not.toBeInTheDocument()}},A={args:{filterMode:`bar`},play:async({canvasElement:e,args:t})=>{let n=b(e),r=b(e.ownerDocument.body);await g(n.queryByRole(`button`,{name:/Show filter panel|Hide filter panel/})).not.toBeInTheDocument(),await v.click(n.getByRole(`button`,{name:`Add filter`})),await v.click(r.getByRole(`combobox`,{name:`Value`})),await v.click(r.getByRole(`option`,{name:`Critical`})),await v.click(r.getByRole(`button`,{name:`Apply filter`})),await g(n.getByRole(`button`,{name:`Remove Critical severity filter`})).toBeVisible(),await g(t.onValueChange).toHaveBeenLastCalledWith(g.objectContaining({severities:[`critical`]})),await y(()=>g(n.getByRole(`button`,{name:`Add filter`})).toHaveFocus()),await v.click(n.getByRole(`button`,{name:`Add filter`})),await v.click(r.getByRole(`combobox`,{name:`Field`})),await v.click(r.getByRole(`option`,{name:`Category`})),await v.click(r.getByRole(`combobox`,{name:`Operator`})),await v.click(r.getByRole(`option`,{name:`contains`})),await v.type(r.getByRole(`textbox`,{name:`Value`}),`delivery`),await v.click(r.getByRole(`button`,{name:`Apply filter`})),await g(n.getByRole(`button`,{name:`Remove Category contains delivery filter`})).toBeVisible(),await g(n.queryByRole(`complementary`)).not.toBeInTheDocument()}},j={args:{filterPanelOpen:!0},play:async({canvasElement:e})=>{let t=b(e),n=t.getByRole(`complementary`,{name:/Filters/});await v.click(b(n).getByRole(`checkbox`,{name:/Critical/})),await g(t.queryByRole(`group`,{name:`Applied filters`})).not.toBeInTheDocument(),await g(t.queryByRole(`button`,{name:`Add filter`})).not.toBeInTheDocument(),await v.click(t.getByRole(`button`,{name:`Hide filter panel`})),await g(t.getByRole(`button`,{name:`Remove Critical severity filter`})).toBeVisible(),await v.click(t.getByRole(`button`,{name:`Show filter panel`})),await g(t.queryByRole(`group`,{name:`Applied filters`})).not.toBeInTheDocument(),await g(b(t.getByRole(`complementary`,{name:/Filters/})).getByRole(`checkbox`,{name:/Critical/})).toBeChecked()}},M={args:{value:{...l(),severities:[`high`]}},play:async({canvasElement:e})=>{let t=b(e);t.getByRole(`button`,{name:`Remove High severity filter`}).focus(),await v.keyboard(`{Delete}`),await g(t.queryByRole(`group`,{name:`Applied filters`})).not.toBeInTheDocument(),await g(t.getByRole(`searchbox`,{name:`Search records`})).toHaveFocus()}},N=[`Default`,`AppliedFilters`,`Disabled`,`BarMode`,`PanelOpen`,`QueryAndClear`,`ViewControls`,`BarFilterPicker`,`PanelVisibility`,`RemoveLastFilter`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    value: {
      ...createDefaultFilters(),
      severities: ['critical', 'high'],
      statuses: ['new'],
      sources: ['Projects'],
      assignees: [owners[0].id],
      rules: [{
        id: 'category',
        field: 'category',
        operator: 'contains',
        value: 'delivery'
      }],
      timeRange: {
        mode: 'relative',
        preset: '7d'
      }
    }
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: {
      ...createDefaultFilters(),
      severities: ['high']
    }
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    filterMode: 'bar'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    filterPanelOpen: true,
    value: {
      ...createDefaultFilters(),
      severities: ['critical']
    }
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByRole('searchbox', {
      name: 'Search records'
    }), 'Project');
    await expect(canvas.getByRole('button', {
      name: 'Remove search filter'
    })).toBeVisible();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Clear all'
    }));
    await expect(canvas.getByRole('searchbox', {
      name: 'Search records'
    })).toHaveValue('');
    await expect(canvas.getByRole('searchbox', {
      name: 'Search records'
    })).toHaveFocus();
    await expect(canvas.queryByRole('group', {
      name: 'Applied filters'
    })).not.toBeInTheDocument();
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement),
      body = within(canvasElement.ownerDocument.body);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Compact rows'
    }));
    await expect(canvas.getByRole('button', {
      name: 'Compact rows'
    })).toHaveAttribute('aria-pressed', 'true');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Column settings'
    }));
    await userEvent.click(body.getByRole('checkbox', {
      name: 'Assignee'
    }));
    await expect(body.getByRole('checkbox', {
      name: 'Assignee'
    })).toBeChecked();
    await userEvent.keyboard('{Escape}');
    await expect(canvas.queryByRole('button', {
      name: /Saved filters|Save filter|New filter|Customise filters|Severity: Any/
    })).not.toBeInTheDocument();
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    filterMode: 'bar'
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement),
      body = within(canvasElement.ownerDocument.body);
    await expect(canvas.queryByRole('button', {
      name: /Show filter panel|Hide filter panel/
    })).not.toBeInTheDocument();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Add filter'
    }));
    await userEvent.click(body.getByRole('combobox', {
      name: 'Value'
    }));
    await userEvent.click(body.getByRole('option', {
      name: 'Critical'
    }));
    await userEvent.click(body.getByRole('button', {
      name: 'Apply filter'
    }));
    await expect(canvas.getByRole('button', {
      name: 'Remove Critical severity filter'
    })).toBeVisible();
    await expect(args.onValueChange).toHaveBeenLastCalledWith(expect.objectContaining({
      severities: ['critical']
    }));
    await waitFor(() => expect(canvas.getByRole('button', {
      name: 'Add filter'
    })).toHaveFocus());
    await userEvent.click(canvas.getByRole('button', {
      name: 'Add filter'
    }));
    await userEvent.click(body.getByRole('combobox', {
      name: 'Field'
    }));
    await userEvent.click(body.getByRole('option', {
      name: 'Category'
    }));
    await userEvent.click(body.getByRole('combobox', {
      name: 'Operator'
    }));
    await userEvent.click(body.getByRole('option', {
      name: 'contains'
    }));
    await userEvent.type(body.getByRole('textbox', {
      name: 'Value'
    }), 'delivery');
    await userEvent.click(body.getByRole('button', {
      name: 'Apply filter'
    }));
    await expect(canvas.getByRole('button', {
      name: 'Remove Category contains delivery filter'
    })).toBeVisible();
    await expect(canvas.queryByRole('complementary')).not.toBeInTheDocument();
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    filterPanelOpen: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const panel = canvas.getByRole('complementary', {
      name: /Filters/
    });
    await userEvent.click(within(panel).getByRole('checkbox', {
      name: /Critical/
    }));
    await expect(canvas.queryByRole('group', {
      name: 'Applied filters'
    })).not.toBeInTheDocument();
    await expect(canvas.queryByRole('button', {
      name: 'Add filter'
    })).not.toBeInTheDocument();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Hide filter panel'
    }));
    await expect(canvas.getByRole('button', {
      name: 'Remove Critical severity filter'
    })).toBeVisible();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Show filter panel'
    }));
    await expect(canvas.queryByRole('group', {
      name: 'Applied filters'
    })).not.toBeInTheDocument();
    await expect(within(canvas.getByRole('complementary', {
      name: /Filters/
    })).getByRole('checkbox', {
      name: /Critical/
    })).toBeChecked();
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    value: {
      ...createDefaultFilters(),
      severities: ['high']
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const remove = canvas.getByRole('button', {
      name: 'Remove High severity filter'
    });
    remove.focus();
    await userEvent.keyboard('{Delete}');
    await expect(canvas.queryByRole('group', {
      name: 'Applied filters'
    })).not.toBeInTheDocument();
    await expect(canvas.getByRole('searchbox', {
      name: 'Search records'
    })).toHaveFocus();
  }
}`,...M.parameters?.docs?.source}}}})))()}P();export{w as AppliedFilters,A as BarFilterPicker,E as BarMode,C as Default,T as Disabled,D as PanelOpen,j as PanelVisibility,O as QueryAndClear,M as RemoveLastFilter,k as ViewControls,N as __namedExportsOrder,S as default};