import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{Ht as r,V as i,a}from"./icon-qDBR5KlT.js";import{n as o,t as s}from"./link-ArlbBf1Q.js";var c,l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{c=t(),r(),o(),l=n(),{expect:u,userEvent:d,within:f}=__STORYBOOK_MODULE_TEST__,p={id:`components-actions-link`,title:`Components/Triggers/Link`,component:s,tags:[`autodocs`],args:{href:`#project-details`,children:`View project`},parameters:{docs:{description:{component:`Use Link for navigation and Button for actions. It renders a native anchor with normal browser behavior, including modifier-click and context menus. Disabled links have no destination and leave the tab sequence. External links open a new tab by default, announce that behavior, and include noopener/noreferrer. Keep link text descriptive; size changes text, not a button-like hit area.`}}}},m={render:()=>(0,l.jsxs)(`div`,{className:`story-grid`,children:[[`sm`,`md`,`lg`].map(e=>(0,l.jsxs)(`div`,{className:`stack`,children:[(0,l.jsx)(s,{href:`#project-details`,size:e,children:`View project`}),(0,l.jsx)(s,{href:`#projects`,intent:`default`,underline:`hover`,size:e,leadingIcon:(0,l.jsx)(a,{}),children:`Projects`}),(0,l.jsx)(s,{href:`#project-details`,size:e,underline:`none`,leadingIcon:(0,l.jsx)(i,{}),children:`Customer portal`}),(0,l.jsx)(s,{href:`#unavailable`,disabled:!0,size:e,children:`Archived project`})]},e)),(0,l.jsx)(s,{href:`https://example.com/project`,external:!0,children:`Project documentation`})]})},h={render:()=>(0,l.jsxs)(`div`,{className:`stack`,style:{maxWidth:320},children:[(0,l.jsxs)(`p`,{children:[`Read the `,(0,l.jsx)(s,{href:`#project-details`,children:`project requirements`}),` before sharing the next milestone.`]}),(0,l.jsx)(s,{href:`#project-details`,children:`Review the customer portal accessibility requirements and delivery checklist`})]})},g={render:function(){let[e,t]=(0,c.useState)(`No navigation yet`);return(0,l.jsxs)(`div`,{className:`stack`,children:[(0,l.jsx)(`button`,{type:`button`,children:`Start keyboard navigation`}),(0,l.jsx)(s,{href:`#project-details`,onClick:e=>{e.preventDefault(),t(`Project details selected`)},children:`View project`}),(0,l.jsx)(s,{href:`#unavailable`,disabled:!0,onClick:()=>t(`Disabled link activated`),children:`Archived project`}),(0,l.jsx)(s,{href:`#customers`,onClick:e=>{e.preventDefault(),t(`Customers selected`)},children:`View customers`}),(0,l.jsx)(`p`,{role:`status`,children:e})]})},play:async({canvasElement:e})=>{let t=f(e);t.getByRole(`button`,{name:`Start keyboard navigation`}).focus(),await d.tab(),await u(t.getByRole(`link`,{name:`View project`})).toHaveFocus(),await d.keyboard(`{Enter}`),await u(t.getByRole(`status`)).toHaveTextContent(`Project details selected`),await u(t.getByRole(`link`,{name:`Archived project`})).not.toHaveAttribute(`href`),await d.tab(),await u(t.getByRole(`link`,{name:`View customers`})).toHaveFocus(),await d.click(t.getByRole(`link`,{name:`Archived project`})),await u(t.getByRole(`status`)).toHaveTextContent(`Project details selected`)}},_={args:{children:`View project`,href:`#playground-project`,size:`md`,intent:`function`,underline:`hover`,external:!1,disabled:!1,showIcon:!1},argTypes:{children:{control:`text`,name:`Label`},href:{control:`text`,name:`Destination`},size:{control:`select`,options:[`sm`,`md`,`lg`]},intent:{control:`select`,options:[`default`,`function`]},underline:{control:`select`,options:[`always`,`hover`,`none`]},external:{control:`boolean`},disabled:{control:`boolean`},showIcon:{control:`boolean`,name:`Leading icon`}},render:({showIcon:e,...t})=>(0,l.jsxs)(`div`,{className:`stack`,children:[(0,l.jsx)(s,{...t,leadingIcon:e?(0,l.jsx)(i,{}):void 0}),(0,l.jsxs)(`section`,{id:`playground-project`,tabIndex:-1,children:[(0,l.jsx)(`h3`,{children:`Project overview`}),(0,l.jsx)(`p`,{className:`muted`,children:`The link targets this section in the example.`})]})]})},v=[`Matrix`,`InlineAndLongText`,`KeyboardNavigation`,`Playground`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-grid">
      {(['sm', 'md', 'lg'] as const).map(size => <div className="stack" key={size}>
          <Link href="#project-details" size={size}>
            View project
          </Link>
          <Link href="#projects" intent="default" underline="hover" size={size} leadingIcon={<ArrowLeft />}>
            Projects
          </Link>
          <Link href="#project-details" size={size} underline="none" leadingIcon={<Folder />}>
            Customer portal
          </Link>
          <Link href="#unavailable" disabled size={size}>
            Archived project
          </Link>
        </div>)}
      <Link href="https://example.com/project" external>
        Project documentation
      </Link>
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="stack" style={{
    maxWidth: 320
  }}>
      <p>
        Read the <Link href="#project-details">project requirements</Link> before sharing the next
        milestone.
      </p>
      <Link href="#project-details">
        Review the customer portal accessibility requirements and delivery checklist
      </Link>
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Example() {
    const [destination, setDestination] = useState('No navigation yet');
    return <div className="stack">
        <button type="button">Start keyboard navigation</button>
        <Link href="#project-details" onClick={event => {
        event.preventDefault();
        setDestination('Project details selected');
      }}>
          View project
        </Link>
        <Link href="#unavailable" disabled onClick={() => setDestination('Disabled link activated')}>
          Archived project
        </Link>
        <Link href="#customers" onClick={event => {
        event.preventDefault();
        setDestination('Customers selected');
      }}>
          View customers
        </Link>
        <p role="status">{destination}</p>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    canvas.getByRole('button', {
      name: 'Start keyboard navigation'
    }).focus();
    await userEvent.tab();
    await expect(canvas.getByRole('link', {
      name: 'View project'
    })).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    await expect(canvas.getByRole('status')).toHaveTextContent('Project details selected');
    await expect(canvas.getByRole('link', {
      name: 'Archived project'
    })).not.toHaveAttribute('href');
    await userEvent.tab();
    await expect(canvas.getByRole('link', {
      name: 'View customers'
    })).toHaveFocus();
    await userEvent.click(canvas.getByRole('link', {
      name: 'Archived project'
    }));
    await expect(canvas.getByRole('status')).toHaveTextContent('Project details selected');
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'View project',
    href: '#playground-project',
    size: 'md',
    intent: 'function',
    underline: 'hover',
    external: false,
    disabled: false,
    showIcon: false
  },
  argTypes: {
    children: {
      control: 'text',
      name: 'Label'
    },
    href: {
      control: 'text',
      name: 'Destination'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    },
    intent: {
      control: 'select',
      options: ['default', 'function']
    },
    underline: {
      control: 'select',
      options: ['always', 'hover', 'none']
    },
    external: {
      control: 'boolean'
    },
    disabled: {
      control: 'boolean'
    },
    showIcon: {
      control: 'boolean',
      name: 'Leading icon'
    }
  },
  render: ({
    showIcon,
    ...args
  }) => <div className="stack">
      <Link {...args} leadingIcon={showIcon ? <Folder /> : undefined} />
      <section id="playground-project" tabIndex={-1}>
        <h3>Project overview</h3>
        <p className="muted">The link targets this section in the example.</p>
      </section>
    </div>
}`,..._.parameters?.docs?.source}}}})))()}y();export{h as InlineAndLongText,g as KeyboardNavigation,m as Matrix,_ as Playground,v as __namedExportsOrder,p as default};