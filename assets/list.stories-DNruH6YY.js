import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{Ct as r,Ht as i,Rt as a,Tt as o,m as s,u as c}from"./icon-CeMrBssx.js";import{n as l,t as u}from"./button-BpCMuPJ8.js";import{n as d,t as f}from"./icon-button-hSH6BSQR.js";import{r as p,t as m}from"./avatar-BYBjquVO.js";import{n as h,t as g}from"./tag-BzZnsRe7.js";import{n as _,t as v}from"./severity-badge-DyfgzVKK.js";import{n as y,r as b,t as x}from"./list-DcK-grvh.js";function S(){let[e,t]=(0,E.useState)(``),[n,r]=(0,E.useState)([]);return(0,D.jsxs)(`div`,{className:`story-layout`,style:{width:`100%`,maxWidth:960},children:[(0,D.jsx)(x,{"aria-label":`Records to review`,children:M.map(i=>(0,D.jsx)(y,{title:i.title,description:i.description,icon:(0,D.jsx)(i.icon,{size:20}),meta:(0,D.jsx)(v,{severity:i.severity}),selectable:!0,selected:e===i.title,onSelect:()=>t(e===i.title?``:i.title),actions:(0,D.jsx)(f,{"aria-label":`${n.includes(i.title)?`Acknowledged`:`Acknowledge`} ${i.title}`,size:`sm`,disabled:n.includes(i.title),onClick:()=>r(e=>[...e,i.title]),children:n.includes(i.title)?(0,D.jsx)(s,{size:16}):(0,D.jsx)(c,{size:16})})},i.title))}),(0,D.jsx)(`p`,{className:`muted`,"aria-live":`polite`,style:{margin:`var(--space-4) 0 0`},children:e?`Selected: ${e}`:`Select a record to review the project.`})]})}function C(){let[e,t]=(0,E.useState)(!1),[n,r]=(0,E.useState)(!1),[i,a]=(0,E.useState)(!1),[o,s]=(0,E.useState)(!1);return(0,D.jsxs)(`div`,{className:`story-layout`,style:{width:`100%`,maxWidth:960},children:[(0,D.jsxs)(x,{"aria-label":`Project work`,divided:!0,children:[(0,D.jsx)(y,{title:`Customer portal`,subtitle:`Atlas Commerce · Design handoff`,avatar:(0,D.jsx)(m,{name:`Maya Chen`,size:`sm`}),checkbox:{checked:n,onCheckedChange:e=>r(e===!0)},selectable:!0,selected:e,onSelect:()=>t(!e),tags:(0,D.jsx)(g,{variant:`interactive`,selected:i,onSelectedChange:a,children:`Priority`}),actions:(0,D.jsx)(u,{size:`sm`,emphasis:`ghost`,onClick:()=>s(!o),children:o?`Undo review`:`Review`}),counter:24,counterLabel:`open tasks`}),(0,D.jsx)(y,{title:`Quarterly planning`,checkbox:{defaultChecked:!0,readOnly:!0},avatar:(0,D.jsx)(m,{name:`Eleni Papadopoulos`,size:`sm`}),tags:(0,D.jsx)(g,{children:`Read only`}),counter:0,counterLabel:`open tasks`}),(0,D.jsx)(y,{title:`Archived workspace`,subtitle:`Completed projects remain available in the archive.`,checkbox:{defaultChecked:!0},avatar:(0,D.jsx)(m,{name:`Marcus Chen`,size:`sm`}),disabled:!0,counter:128,counterMax:99,counterLabel:`archived tasks`})]}),(0,D.jsxs)(`p`,{className:`muted`,"aria-live":`polite`,children:[n?`1 project checked`:`No projects checked`,` ·`,` `,e?`Customer portal selected`:`No row selected`,` ·`,` `,o?`Review completed`:`Review pending`]})]})}function w(){let[e,t]=(0,E.useState)(``),[n,i]=(0,E.useState)(!1),a=n=>({selectable:!0,selected:e===n,onSelect:()=>t(n)});return(0,D.jsxs)(`div`,{className:`story-layout`,style:{width:`100%`,maxWidth:960},children:[(0,D.jsx)(x,{"aria-label":`Workspace projects`,density:`compact`,children:(0,D.jsx)(y,{title:`Northstar workspace`,subtitle:`Client operations`,counter:8,counterLabel:`projects`,...a(`Northstar workspace`),children:(0,D.jsxs)(x,{"aria-label":`Northstar projects`,children:[(0,D.jsx)(y,{title:`Customer portal`,icon:(0,D.jsx)(r,{size:20}),counter:24,counterLabel:`tasks`,...a(`Customer portal`),children:(0,D.jsx)(x,{"aria-label":`Customer portal workstreams`,children:(0,D.jsx)(y,{title:`Design handoff`,subtitle:`Review before development starts`,tags:(0,D.jsx)(g,{intent:`function`,children:`In review`}),counter:4,counterLabel:`deliverables`,...a(`Design handoff`),children:(0,D.jsxs)(x,{"aria-label":`Design handoff deliverables`,children:[(0,D.jsx)(y,{title:`Navigation specification`,subtitle:`Maya Chen · Updated today`,avatar:(0,D.jsx)(m,{name:`Maya Chen`,size:`sm`}),checkbox:{checked:n,onCheckedChange:e=>i(e===!0)},counter:3,counterLabel:`comments`,...a(`Navigation specification`)}),(0,D.jsx)(y,{title:`Responsive layouts`,checkbox:{defaultChecked:`indeterminate`},counter:12,counterLabel:`comments`})]})})})}),(0,D.jsx)(y,{title:`Account onboarding`,subtitle:`Templates and approval steps`,counter:6,counterLabel:`tasks`,...a(`Account onboarding`)})]})})}),(0,D.jsx)(`p`,{className:`muted`,"aria-live":`polite`,children:e?`Selected: ${e}`:`Select any project or deliverable.`})]})}function T(e){let[t,n]=(0,E.useState)(e.selected?[0]:[]),[i,a]=(0,E.useState)([]),[o,l]=(0,E.useState)([]),[u,d]=(0,E.useState)([]),p=(e,t)=>e.includes(t)?e.filter(e=>e!==t):[...e,t],h=[{title:`Northstar workspace`,subtitle:`Client operations`,owner:`Maya Chen`},{title:`Customer portal`,subtitle:`Atlas Commerce · Implementation`,owner:`Eleni Papadopoulos`},{title:`Design handoff`,subtitle:`Product design · Ready for review`,owner:`Marcus Chen`},{title:`Navigation specification`,subtitle:`Documentation · Updated today`,owner:`Maya Chen`}],_=Math.max(1,Math.min(4,Math.floor(e.levels))),v=b=>{let S=h[b];return(0,D.jsxs)(x,{"aria-label":b===0?`List playground`:`${h[b-1].title} children`,density:b===0?e.density:void 0,divided:e.divided,children:[(0,D.jsx)(y,{title:S.title,subtitle:e.lines===`two`?S.subtitle:void 0,checkbox:e.showCheckbox?{checked:i.includes(b),onCheckedChange:()=>a(e=>p(e,b))}:void 0,avatar:e.leading===`avatar`?(0,D.jsx)(m,{name:S.owner,size:`sm`}):void 0,icon:e.leading===`icon`?(0,D.jsx)(r,{size:20}):void 0,tags:e.showTags?(0,D.jsx)(g,{variant:`interactive`,selected:o.includes(b),onSelectedChange:()=>l(e=>p(e,b)),disabled:e.disabled,children:`Priority`}):void 0,meta:e.showMetadata?`Today`:void 0,actions:e.showActions?(0,D.jsx)(f,{size:`sm`,"aria-label":`${u.includes(b)?`Undo review for`:`Review`} ${S.title}`,disabled:e.disabled,onClick:()=>d(e=>p(e,b)),children:u.includes(b)?(0,D.jsx)(s,{size:16}):(0,D.jsx)(c,{size:16})}):void 0,counter:e.showCounter?e.counter:void 0,counterLabel:`open tasks`,selectable:e.selectable,selected:t.includes(b),onSelect:e.selectable?()=>n(e=>p(e,b)):void 0,disabled:e.disabled,children:b+1<_?v(b+1):void 0}),b===0&&(0,D.jsx)(y,{title:`Account onboarding`,subtitle:e.lines===`two`?`Customer success · Templates and approvals`:void 0,counter:e.showCounter?6:void 0,counterLabel:`open tasks`})]})};return(0,D.jsxs)(`div`,{className:`story-layout`,style:{width:`100%`,maxWidth:960},children:[v(0),(0,D.jsxs)(`p`,{className:`muted`,"aria-live":`polite`,children:[i.length,` checked · `,t.length,` selected · `,u.length,` `,`reviewed`]})]})}var E,D,O,k,A,j,M,N,P,F,I,L,R,z,B;function V(){return(V=e((()=>{E=t(),i(),b(),p(),d(),_(),h(),l(),D=n(),{expect:O,userEvent:k,within:A}=__STORYBOOK_MODULE_TEST__,j={id:`components-lists-list`,title:`Components/Data Display/List`,component:x,subcomponents:{ListItem:y},tags:[`autodocs`]},M=[{title:`Customer portal redesign`,description:`Customer experience · PRJ-0042 · 18 tasks`,severity:`critical`,icon:r},{title:`Customer onboarding checklist`,description:`Customer success · PRJ-0082 · 6 tasks`,severity:`high`,icon:a},{title:`Quarterly account review`,description:`Account management · PRJ-0128 · 14 tasks`,severity:`medium`,icon:o}],N={render:()=>(0,D.jsx)(S,{})},P={render:()=>(0,D.jsx)(`div`,{className:`story-layout`,style:{width:`100%`,maxWidth:960},children:(0,D.jsxs)(x,{divided:!0,"aria-label":`Project team`,children:[(0,D.jsx)(y,{title:`Eleni Papadopoulos`,description:`Senior product designer · Athens`,avatar:(0,D.jsx)(m,{name:`Eleni Papadopoulos`,status:`online`}),meta:`4 assigned`}),(0,D.jsx)(y,{title:`Marcus Chen`,description:`Project manager · London`,avatar:(0,D.jsx)(m,{name:`Marcus Chen`,status:`busy`}),meta:`7 assigned`}),(0,D.jsx)(y,{title:`Aisha Okafor`,description:`Customer success · Amsterdam`,avatar:(0,D.jsx)(m,{name:`Aisha Okafor`,status:`away`}),meta:`2 assigned`})]})})},F={render:()=>(0,D.jsx)(`div`,{className:`story-grid`,children:[`compact`,`default`,`comfortable`].map(e=>(0,D.jsxs)(`section`,{className:`story-layout`,children:[(0,D.jsxs)(`h3`,{children:[e[0].toUpperCase()+e.slice(1),` density`]}),(0,D.jsx)(x,{density:e,children:M.map(e=>(0,D.jsx)(y,{title:e.title,description:e.description,icon:(0,D.jsx)(e.icon,{size:17})},e.title))})]},e))})},I={render:()=>(0,D.jsx)(x,{style:{width:`100%`,maxWidth:960},children:(0,D.jsx)(y,{title:`Archived project PRJ-2026-0184`,description:`Resolved by Eleni Papadopoulos · Read-only retention`,icon:(0,D.jsx)(o,{size:20}),selectable:!0,disabled:!0})})},L={parameters:{docs:{description:{story:`One-line and two-line rows with independent checkboxes, avatars, tags, actions, and compact counters. Checkbox and row selection are separate controlled states. Narrow containers place supplementary controls below the title and subtitle.`}}},render:()=>(0,D.jsx)(C,{}),play:async({canvasElement:e})=>{let t=A(e),n=t.getByRole(`button`,{name:`Customer portal`}),r=t.getByRole(`checkbox`,{name:`Customer portal`});await O(n).toHaveAccessibleDescription(`Atlas Commerce · Design handoff`),await O(r).toHaveAccessibleDescription(`Atlas Commerce · Design handoff`),await k.click(r),await O(r).toBeChecked(),await O(n).toHaveAttribute(`aria-pressed`,`false`),await k.click(t.getByRole(`button`,{name:`Priority`})),await O(n).toHaveAttribute(`aria-pressed`,`false`),await k.click(t.getByRole(`button`,{name:`Review`})),await O(t.getByText(`Review completed`,{exact:!1})).toBeVisible(),await O(n).toHaveAttribute(`aria-pressed`,`false`),await k.click(n),await O(n).toHaveAttribute(`aria-pressed`,`true`),r.focus(),await k.keyboard(` `),await O(r).not.toBeChecked(),await O(n).toHaveAttribute(`aria-pressed`,`true`);let i=t.getByRole(`checkbox`,{name:`Quarterly planning`});await k.click(i),await O(i).toBeChecked(),await O(i).toHaveAttribute(`aria-readonly`,`true`),await O(t.getByRole(`checkbox`,{name:`Archived workspace`})).toBeDisabled(),await O(t.getByText(`0 open tasks`)).toBeInTheDocument(),await O(t.getByText(`128 archived tasks`)).toBeInTheDocument()}},R={parameters:{docs:{description:{story:`Four levels of native nested lists. Each child List belongs inside its parent ListItem. Density is inherited, each row owns its selection, and nested lists do not introduce tree keyboard behavior.`}}},render:()=>(0,D.jsx)(w,{}),play:async({canvasElement:e})=>{let t=A(e),n=t.getByRole(`list`,{name:`Design handoff deliverables`});await O(n).toHaveAttribute(`data-depth`,`4`),await O(n).toHaveAttribute(`data-density`,`compact`),await O(n.parentElement).toHaveRole(`listitem`);let r=t.getByRole(`button`,{name:`Navigation specification`});await k.click(r),await O(r).toHaveAttribute(`aria-pressed`,`true`),await O(t.getByRole(`button`,{name:`Design handoff`})).toHaveAttribute(`aria-pressed`,`false`);let i=t.getByRole(`checkbox`,{name:`Navigation specification`});i.focus(),await k.keyboard(` `),await O(i).toBeChecked(),await O(r).toHaveAttribute(`aria-pressed`,`true`);let a=t.getByRole(`checkbox`,{name:`Responsive layouts`});await O(a).toHaveAttribute(`aria-checked`,`mixed`),await k.click(a),await O(a).toBeChecked()}},z={args:{lines:`two`,showCheckbox:!0,leading:`avatar`,showTags:!0,showMetadata:!1,showActions:!0,showCounter:!0,counter:24,levels:1,density:`default`,divided:!1,selectable:!0,selected:!1,disabled:!1},argTypes:{lines:{control:`inline-radio`,options:[`one`,`two`],description:`Show the primary line only or include its supporting subtitle.`},showCheckbox:{control:`boolean`,name:`Checkbox`},leading:{control:`inline-radio`,options:[`none`,`icon`,`avatar`],name:`Leading visual`},showTags:{control:`boolean`,name:`Tags`},showMetadata:{control:`boolean`,name:`Metadata`},showActions:{control:`boolean`,name:`Actions`},showCounter:{control:`boolean`,name:`Counter`},counter:{control:{type:`number`,min:0,max:999,step:1},name:`Counter value`},levels:{control:{type:`range`,min:1,max:4,step:1},name:`Nesting levels`},density:{control:`inline-radio`,options:[`compact`,`default`,`comfortable`]},divided:{control:`boolean`},selectable:{control:`boolean`},selected:{control:`boolean`,description:`Initial selected state of the first row. The preview remains interactive.`},disabled:{control:`boolean`}},parameters:{docs:{description:{story:`Configure the list composition. Controls reset the preview to the requested state; row selection, checkboxes, priority tags, and review actions remain functional. Each nested list uses native list semantics.`}}},render:e=>(0,D.jsx)(T,{...e},JSON.stringify(e))},B=[`SelectableRecords`,`Members`,`Densities`,`Disabled`,`OptionalParts`,`Nested`,`Playground`],N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <RecordListDemo />
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-layout" style={{
    width: '100%',
    maxWidth: 960
  }}>
      <List divided aria-label="Project team">
        <ListItem title="Eleni Papadopoulos" description="Senior product designer · Athens" avatar={<Avatar name="Eleni Papadopoulos" status="online" />} meta="4 assigned" />
        <ListItem title="Marcus Chen" description="Project manager · London" avatar={<Avatar name="Marcus Chen" status="busy" />} meta="7 assigned" />
        <ListItem title="Aisha Okafor" description="Customer success · Amsterdam" avatar={<Avatar name="Aisha Okafor" status="away" />} meta="2 assigned" />
      </List>
    </div>
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-grid">
      {(['compact', 'default', 'comfortable'] as const).map(density => <section className="story-layout" key={density}>
          <h3>{density[0].toUpperCase() + density.slice(1)} density</h3>
          <List density={density}>
            {records.map(record => <ListItem key={record.title} title={record.title} description={record.description} icon={<record.icon size={17} />} />)}
          </List>
        </section>)}
    </div>
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <List style={{
    width: '100%',
    maxWidth: 960
  }}>
      <ListItem title="Archived project PRJ-2026-0184" description="Resolved by Eleni Papadopoulos · Read-only retention" icon={<Shield size={20} />} selectable disabled />
    </List>
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'One-line and two-line rows with independent checkboxes, avatars, tags, actions, and compact counters. Checkbox and row selection are separate controlled states. Narrow containers place supplementary controls below the title and subtitle.'
      }
    }
  },
  render: () => <OptionalPartsDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const row = canvas.getByRole('button', {
      name: 'Customer portal'
    });
    const checkbox = canvas.getByRole('checkbox', {
      name: 'Customer portal'
    });
    await expect(row).toHaveAccessibleDescription('Atlas Commerce · Design handoff');
    await expect(checkbox).toHaveAccessibleDescription('Atlas Commerce · Design handoff');
    await userEvent.click(checkbox);
    await expect(checkbox).toBeChecked();
    await expect(row).toHaveAttribute('aria-pressed', 'false');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Priority'
    }));
    await expect(row).toHaveAttribute('aria-pressed', 'false');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Review'
    }));
    await expect(canvas.getByText('Review completed', {
      exact: false
    })).toBeVisible();
    await expect(row).toHaveAttribute('aria-pressed', 'false');
    await userEvent.click(row);
    await expect(row).toHaveAttribute('aria-pressed', 'true');
    checkbox.focus();
    await userEvent.keyboard(' ');
    await expect(checkbox).not.toBeChecked();
    await expect(row).toHaveAttribute('aria-pressed', 'true');
    const readOnly = canvas.getByRole('checkbox', {
      name: 'Quarterly planning'
    });
    await userEvent.click(readOnly);
    await expect(readOnly).toBeChecked();
    await expect(readOnly).toHaveAttribute('aria-readonly', 'true');
    await expect(canvas.getByRole('checkbox', {
      name: 'Archived workspace'
    })).toBeDisabled();
    await expect(canvas.getByText('0 open tasks')).toBeInTheDocument();
    await expect(canvas.getByText('128 archived tasks')).toBeInTheDocument();
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Four levels of native nested lists. Each child List belongs inside its parent ListItem. Density is inherited, each row owns its selection, and nested lists do not introduce tree keyboard behavior.'
      }
    }
  },
  render: () => <NestedListDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const nested = canvas.getByRole('list', {
      name: 'Design handoff deliverables'
    });
    await expect(nested).toHaveAttribute('data-depth', '4');
    await expect(nested).toHaveAttribute('data-density', 'compact');
    await expect(nested.parentElement).toHaveRole('listitem');
    const leaf = canvas.getByRole('button', {
      name: 'Navigation specification'
    });
    await userEvent.click(leaf);
    await expect(leaf).toHaveAttribute('aria-pressed', 'true');
    await expect(canvas.getByRole('button', {
      name: 'Design handoff'
    })).toHaveAttribute('aria-pressed', 'false');
    const checkbox = canvas.getByRole('checkbox', {
      name: 'Navigation specification'
    });
    checkbox.focus();
    await userEvent.keyboard(' ');
    await expect(checkbox).toBeChecked();
    await expect(leaf).toHaveAttribute('aria-pressed', 'true');
    const mixed = canvas.getByRole('checkbox', {
      name: 'Responsive layouts'
    });
    await expect(mixed).toHaveAttribute('aria-checked', 'mixed');
    await userEvent.click(mixed);
    await expect(mixed).toBeChecked();
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    lines: 'two',
    showCheckbox: true,
    leading: 'avatar',
    showTags: true,
    showMetadata: false,
    showActions: true,
    showCounter: true,
    counter: 24,
    levels: 1,
    density: 'default',
    divided: false,
    selectable: true,
    selected: false,
    disabled: false
  },
  argTypes: {
    lines: {
      control: 'inline-radio',
      options: ['one', 'two'],
      description: 'Show the primary line only or include its supporting subtitle.'
    },
    showCheckbox: {
      control: 'boolean',
      name: 'Checkbox'
    },
    leading: {
      control: 'inline-radio',
      options: ['none', 'icon', 'avatar'],
      name: 'Leading visual'
    },
    showTags: {
      control: 'boolean',
      name: 'Tags'
    },
    showMetadata: {
      control: 'boolean',
      name: 'Metadata'
    },
    showActions: {
      control: 'boolean',
      name: 'Actions'
    },
    showCounter: {
      control: 'boolean',
      name: 'Counter'
    },
    counter: {
      control: {
        type: 'number',
        min: 0,
        max: 999,
        step: 1
      },
      name: 'Counter value'
    },
    levels: {
      control: {
        type: 'range',
        min: 1,
        max: 4,
        step: 1
      },
      name: 'Nesting levels'
    },
    density: {
      control: 'inline-radio',
      options: ['compact', 'default', 'comfortable']
    },
    divided: {
      control: 'boolean'
    },
    selectable: {
      control: 'boolean'
    },
    selected: {
      control: 'boolean',
      description: 'Initial selected state of the first row. The preview remains interactive.'
    },
    disabled: {
      control: 'boolean'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Configure the list composition. Controls reset the preview to the requested state; row selection, checkboxes, priority tags, and review actions remain functional. Each nested list uses native list semantics.'
      }
    }
  },
  render: args => <PlaygroundList key={JSON.stringify(args)} {...args} />
}`,...z.parameters?.docs?.source}}}})))()}V();export{F as Densities,I as Disabled,P as Members,R as Nested,L as OptionalParts,z as Playground,N as SelectableRecords,B as __namedExportsOrder,j as default};