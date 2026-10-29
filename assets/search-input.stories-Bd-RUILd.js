import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./search-input-YM2Uoyn9.js";var a,o,s,c,l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{a=t(),r(),o=n(),{useArgs:s,useState:c}=__STORYBOOK_MODULE_PREVIEW_API__,{expect:l,userEvent:u,waitFor:d,within:f}=__STORYBOOK_MODULE_TEST__,p={id:`components-forms-searchinput`,title:`Components/Inputs & Selection/SearchInput`,component:i,tags:[`autodocs`],args:{label:`Search records`,placeholder:`Search project, customer, or owner`,shortcut:`⌘ K`},parameters:{docs:{description:{component:`Immediate input feedback with a cancelable debounced onSearch callback. The shortcut is a hint; the owning page handles the shortcut action. Native onChange and onValueChange remain immediate.`}}}},m={render:()=>(0,o.jsxs)(`div`,{className:`story-grid`,children:[(0,o.jsx)(i,{label:`Search events`,size:`sm`,defaultValue:`PRJ-0042`,shortcut:`/`}),(0,o.jsx)(i,{label:`Search records`,size:`md`,defaultValue:`Portal`,shortcut:`⌘ K`}),(0,o.jsx)(i,{label:`Search projects`,size:`lg`,placeholder:`Search project name or owner`}),(0,o.jsx)(i,{label:`Search archived records`,defaultValue:`source:projects`,disabled:!0}),(0,o.jsx)(i,{label:`Saved query`,defaultValue:`severity:critical status:new`,readOnly:!0}),(0,o.jsx)(i,{label:`Invalid query`,defaultValue:`severity:`,invalid:!0,"aria-describedby":`search-syntax-error`}),(0,o.jsx)(`p`,{id:`search-syntax-error`,className:`muted`,children:`Add a severity value, such as severity:critical.`})]})},h=[`Customer portal redesign`,`Customer onboarding checklist`,`Invoice approval pending`],g={render:function(){let[e,t]=(0,a.useState)(``),n=h.filter(t=>t.toLowerCase().includes(e.toLowerCase()));return(0,o.jsxs)(`div`,{className:`stack`,children:[(0,o.jsx)(i,{label:`Search projects`,debounceMs:200,onSearch:t}),(0,o.jsxs)(`div`,{role:`status`,children:[n.length,` matching projects`]}),(0,o.jsx)(`ul`,{children:n.map(e=>(0,o.jsx)(`li`,{children:e},e))})]})},play:async({canvasElement:e})=>{let t=f(e);await u.type(t.getByRole(`searchbox`,{name:`Search projects`}),`Portal`),await d(()=>l(t.getByRole(`status`)).toHaveTextContent(`1 matching projects`)),await u.click(t.getByRole(`button`,{name:`Clear search`})),await d(()=>l(t.getByRole(`status`)).toHaveTextContent(`3 matching projects`))}},_={args:{label:`Search projects`,value:``,placeholder:`Search by project name`,shortcut:`⌘ K`,size:`md`,debounceMs:250,clearable:!0,disabled:!1,readOnly:!1,invalid:!1},argTypes:{label:{control:`text`},value:{control:`text`},placeholder:{control:`text`},shortcut:{control:`text`},size:{control:`inline-radio`,options:[`sm`,`md`,`lg`]},debounceMs:{control:{type:`number`,min:0,max:2e3,step:50}},clearable:{control:`boolean`},disabled:{control:`boolean`},readOnly:{control:`boolean`},invalid:{control:`boolean`}},render:function(e){let[,t]=s(),[n,r]=c(e.value??``),a=h.filter(e=>e.toLowerCase().includes(n.toLowerCase()));return(0,o.jsxs)(`div`,{className:`stack`,children:[(0,o.jsx)(i,{...e,onValueChange:e=>t({value:e}),onSearch:r}),(0,o.jsxs)(`p`,{role:`status`,children:[a.length,` matching projects`]}),(0,o.jsx)(`ul`,{children:a.map(e=>(0,o.jsx)(`li`,{children:e},e))})]})}},v=[`Matrix`,`DebouncedSearch`,`Playground`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-grid">
      <SearchInput label="Search events" size="sm" defaultValue="PRJ-0042" shortcut="/" />
      <SearchInput label="Search records" size="md" defaultValue="Portal" shortcut="⌘ K" />
      <SearchInput label="Search projects" size="lg" placeholder="Search project name or owner" />
      <SearchInput label="Search archived records" defaultValue="source:projects" disabled />
      <SearchInput label="Saved query" defaultValue="severity:critical status:new" readOnly />
      <SearchInput label="Invalid query" defaultValue="severity:" invalid aria-describedby="search-syntax-error" />
      <p id="search-syntax-error" className="muted">
        Add a severity value, such as severity:critical.
      </p>
    </div>
}`,...m.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function SearchExample() {
    const [query, setQuery] = useState('');
    const matches = records.filter(record => record.toLowerCase().includes(query.toLowerCase()));
    return <div className="stack">
        <SearchInput label="Search projects" debounceMs={200} onSearch={setQuery} />
        <div role="status">{matches.length} matching projects</div>
        <ul>
          {matches.map(record => <li key={record}>{record}</li>)}
        </ul>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByRole('searchbox', {
      name: 'Search projects'
    }), 'Portal');
    await waitFor(() => expect(canvas.getByRole('status')).toHaveTextContent('1 matching projects'));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Clear search'
    }));
    await waitFor(() => expect(canvas.getByRole('status')).toHaveTextContent('3 matching projects'));
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Search projects',
    value: '',
    placeholder: 'Search by project name',
    shortcut: '⌘ K',
    size: 'md',
    debounceMs: 250,
    clearable: true,
    disabled: false,
    readOnly: false,
    invalid: false
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
    shortcut: {
      control: 'text'
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg']
    },
    debounceMs: {
      control: {
        type: 'number',
        min: 0,
        max: 2000,
        step: 50
      }
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
    }
  },
  render: function SearchPlayground(args) {
    const [, updateArgs] = useArgs();
    const [query, setQuery] = useStoryState(args.value ?? '');
    const matches = records.filter(record => record.toLowerCase().includes(query.toLowerCase()));
    return <div className="stack">
        <SearchInput {...args} onValueChange={value => updateArgs({
        value
      })} onSearch={setQuery} />
        <p role="status">{matches.length} matching projects</p>
        <ul>
          {matches.map(record => <li key={record}>{record}</li>)}
        </ul>
      </div>;
  }
}`,..._.parameters?.docs?.source}}}})))()}y();export{g as DebouncedSearch,m as Matrix,_ as Playground,v as __namedExportsOrder,p as default};