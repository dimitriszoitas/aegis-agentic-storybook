import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./field-9yxO9HTO.js";import{n as a,t as o}from"./button-CLF7L5Y-.js";import{n as s,t as c}from"./text-input-Ck5QgK2I.js";import{a as l,n as u,o as d,s as f,t as p}from"./card-CRGlXyPQ.js";import{n as m,t as h}from"./search-input-Cz7yui_I.js";import{i as g,n as _,r as v,t as y}from"./page-layout--Br_Jvva.js";function b({title:e}){return(0,C.jsxs)(p,{children:[(0,C.jsx)(l,{children:(0,C.jsx)(d,{"aria-level":2,children:e})}),(0,C.jsx)(u,{children:`Local illustrative content. This nested Card retains its own surface and text styling.`})]})}function x(e){let[t,n]=(0,S.useState)(`Support workspace`),[r,a]=(0,S.useState)(``),[s,l]=(0,S.useState)(!1),u={title:e.title,description:e.description,actions:e.showActions?(0,C.jsx)(o,{onClick:()=>l(!0),children:`Save changes`}):void 0,footer:e.showFooter?(0,C.jsx)(`p`,{role:`status`,children:s?`Changes saved locally.`:`Illustrative page recipe. No backend is connected.`}):void 0},d=(0,C.jsx)(i,{label:`Workspace name`,children:(0,C.jsx)(c,{value:t,onValueChange:e=>{n(e),l(!1)}})});return e.archetype===`collection`?(0,C.jsx)(_,{...u,archetype:`collection`,filters:e.showFilters?(0,C.jsx)(h,{"aria-label":`Search records`,value:r,onValueChange:a}):void 0,children:(0,C.jsx)(b,{title:r?`Results matching “${r}”`:`Collection content occupies the available width`})}):e.archetype===`detail`?e.showAside?(0,C.jsx)(_,{...u,archetype:`detail`,aside:(0,C.jsx)(b,{title:`Record context`}),asideLabel:`Record context`,children:(0,C.jsx)(v,{measure:e.measure,children:d})}):(0,C.jsx)(_,{...u,archetype:`detail`,children:(0,C.jsx)(v,{measure:e.measure,children:d})}):e.archetype===`settings`?(0,C.jsx)(_,{...u,archetype:`settings`,measure:e.measure,children:d}):(0,C.jsx)(_,{...u,archetype:`dashboard`,maxColumns:e.maxColumns,minItemWidth:e.minItemWidth,children:[`Open requests`,`First response`,`Resolved today`,`Customer feedback`].map(e=>(0,C.jsx)(b,{title:e},e))})}var S,C,w,T,E,D,O,k,A,j,M,N,P,F;function I(){return(I=e((()=>{S=t(),a(),f(),r(),m(),s(),g(),C=n(),{expect:w,userEvent:T,within:E}=__STORYBOOK_MODULE_TEST__,D={id:`patterns-pagelayout`,title:`Patterns/Page Structure/PageLayout`,component:_,subcomponents:{ReadingColumn:v,ContentGrid:y},render:x,tags:[`autodocs`],args:{archetype:`settings`,title:`Workspace settings`,description:`A shared page structure with explicit regions and a deliberate content measure.`,showActions:!0,showFilters:!0,showAside:!0,showFooter:!0,measure:`comfortable`,maxColumns:4,minItemWidth:`regular`},argTypes:{archetype:{control:`inline-radio`,options:[`collection`,`detail`,`settings`,`dashboard`]},measure:{control:`inline-radio`,options:[`compact`,`comfortable`,`wide`],if:{arg:`archetype`,eq:`settings`}},maxColumns:{control:`inline-radio`,options:[1,2,3,4],if:{arg:`archetype`,eq:`dashboard`}},minItemWidth:{control:`inline-radio`,options:[`small`,`regular`,`large`],if:{arg:`archetype`,eq:`dashboard`}},showFilters:{if:{arg:`archetype`,eq:`collection`}},showAside:{if:{arg:`archetype`,eq:`detail`}}},parameters:{docs:{description:{component:`Initial library choices for collection, detail, settings, and dashboard pages. PageHeader owns the heading and actions. PageLayout adds transparent region wrappers without page padding or child styling. ReadingColumn provides 55ch/65ch/75ch starting measures. ContentGrid uses a container-responsive maximum of one to four columns. Products can propose additional recipes through review.`}}}},O={},k={args:{archetype:`collection`,title:`Requests`,description:`Browse local records with filters above the collection.`}},A={args:{archetype:`detail`,title:`Customer workspace`}},j={args:{archetype:`dashboard`,title:`Support overview`}},M={render:()=>(0,C.jsx)(_,{archetype:`detail`,title:`Header slot`,description:`PageHeader renders the actual title and actions.`,actions:(0,C.jsx)(o,{children:`Action slot`}),aside:(0,C.jsx)(`p`,{children:`Aside slot — supplementary context`}),asideLabel:`Supplementary context`,footer:(0,C.jsx)(`p`,{children:`Footer slot — local status or supporting actions`}),children:(0,C.jsx)(v,{children:(0,C.jsx)(`p`,{children:`Main slot — a deliberate reading column inside the detail region.`})})}),parameters:{docs:{description:{story:`Inspect [data-page-slot="header"], [data-page-slot="main"], [data-page-slot="aside"], and [data-page-slot="footer"]. Collection additionally exposes [data-page-slot="filters"]. These are real slot wrappers; child component boundaries remain intact.`}}}},N={render:()=>(0,C.jsxs)(y,{maxColumns:2,minItemWidth:`small`,children:[(0,C.jsx)(v,{measure:`compact`,children:(0,C.jsx)(b,{title:`Compact reading column`})}),(0,C.jsx)(v,{measure:`wide`,children:(0,C.jsx)(b,{title:`Wide reading column`})})]})},P={play:async({canvasElement:e})=>{let t=E(e),n=t.getByRole(`textbox`,{name:`Workspace name`});await T.clear(n),await T.type(n,`Draft workspace`),await w(n).toHaveValue(`Draft workspace`),await T.click(t.getByRole(`button`,{name:`Save changes`})),await w(t.getByRole(`status`)).toHaveTextContent(`Changes saved locally.`),await w(t.getAllByRole(`heading`,{level:1})).toHaveLength(1)}},F=[`Overview`,`Collection`,`Detail`,`Dashboard`,`Anatomy`,`ReadingAndGrid`,`EditAndSave`],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    archetype: 'collection',
    title: 'Requests',
    description: 'Browse local records with filters above the collection.'
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    archetype: 'detail',
    title: 'Customer workspace'
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    archetype: 'dashboard',
    title: 'Support overview'
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <PageLayout archetype="detail" title="Header slot" description="PageHeader renders the actual title and actions." actions={<Button>Action slot</Button>} aside={<p>Aside slot — supplementary context</p>} asideLabel="Supplementary context" footer={<p>Footer slot — local status or supporting actions</p>}>
      <ReadingColumn>
        <p>Main slot — a deliberate reading column inside the detail region.</p>
      </ReadingColumn>
    </PageLayout>,
  parameters: {
    docs: {
      description: {
        story: 'Inspect [data-page-slot="header"], [data-page-slot="main"], [data-page-slot="aside"], and [data-page-slot="footer"]. Collection additionally exposes [data-page-slot="filters"]. These are real slot wrappers; child component boundaries remain intact.'
      }
    }
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <ContentGrid maxColumns={2} minItemWidth="small">
      <ReadingColumn measure="compact">
        <SampleCard title="Compact reading column" />
      </ReadingColumn>
      <ReadingColumn measure="wide">
        <SampleCard title="Wide reading column" />
      </ReadingColumn>
    </ContentGrid>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Workspace name'
    });
    await userEvent.clear(input);
    await userEvent.type(input, 'Draft workspace');
    await expect(input).toHaveValue('Draft workspace');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Save changes'
    }));
    await expect(canvas.getByRole('status')).toHaveTextContent('Changes saved locally.');
    await expect(canvas.getAllByRole('heading', {
      level: 1
    })).toHaveLength(1);
  }
}`,...P.parameters?.docs?.source}}}})))()}I();export{M as Anatomy,k as Collection,j as Dashboard,A as Detail,P as EditAndSave,O as Overview,N as ReadingAndGrid,F as __namedExportsOrder,D as default};