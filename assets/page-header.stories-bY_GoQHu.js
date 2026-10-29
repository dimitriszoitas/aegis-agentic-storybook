import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{Ht as r,mt as i}from"./icon-DafZbL0c.js";import{n as a,t as o}from"./button-Bc30j06n.js";import{r as s,t as c}from"./avatar-BYBjquVO.js";import{n as l,t as u}from"./tag-CjtQuJHp.js";import{n as d,t as f}from"./page-header-bshy2oZJ.js";var p,m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{p=t(),s(),a(),r(),l(),d(),m=n(),{expect:h,userEvent:g,within:_}=__STORYBOOK_MODULE_TEST__,v={id:`patterns-pageheader`,title:`Patterns/Page Structure/PageHeader`,component:f,tags:[`autodocs`],args:{title:`Projects`,description:`Plan delivery, track progress, and keep the team aligned.`},parameters:{docs:{description:{component:`A shared page-heading composition with optional breadcrumbs or a back destination, leading visual, metadata, actions, and content below. The default heading is h1; choose headingLevel to match the surrounding document. A back destination replaces breadcrumbs. Supply native links for navigation, buttons for actions, and the action component’s loading/disabled state for asynchronous work. On narrow screens, actions move below the title without changing keyboard order.`}}}},y={},b={args:{breadcrumbs:[{label:`Workspace`,href:`#workspace`},{label:`Projects`}],actions:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o,{emphasis:`tertiary`,children:`Import`}),(0,m.jsx)(o,{leadingIcon:(0,m.jsx)(i,{size:16}),children:`New project`})]}),metadata:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`span`,{children:`32 projects`}),(0,m.jsx)(u,{intent:`success`,children:`24 active`})]})}},x={args:{title:`Customer portal redesign`,description:`Atlas Commerce · Customer experience`,back:{label:`Projects`,href:`#projects`},leading:(0,m.jsx)(c,{name:`Atlas Commerce`,size:`lg`}),metadata:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(u,{variant:`status`,intent:`function`,children:`In progress`}),(0,m.jsx)(`span`,{children:`Owner: Alex Morgan`}),(0,m.jsx)(`code`,{children:`PRJ-0042`})]}),actions:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o,{emphasis:`tertiary`,children:`Share project`}),(0,m.jsx)(o,{children:`Edit project`})]})}},S={decorators:[e=>(0,m.jsx)(`div`,{style:{width:`100%`,maxWidth:340},children:(0,m.jsx)(e,{})})],args:{title:`Customer onboarding and account management redesign for Northstar Labs`,description:`Coordinate the next milestone with the customer and delivery teams.`,back:{label:`Projects`,href:`#projects`},actions:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o,{emphasis:`tertiary`,children:`Share`}),(0,m.jsx)(o,{children:`Review changes`})]})}},C={render:function(){let[e,t]=(0,p.useState)(`Project details`),[n,r]=(0,p.useState)(!1);return(0,m.jsxs)(`div`,{className:`stack`,children:[(0,m.jsx)(f,{title:`Customer portal redesign`,back:{label:`Projects`,onClick:()=>t(`Projects list selected`)},breadcrumbs:[{label:`Workspace`,href:`#workspace`},{label:`Projects`}],actions:(0,m.jsx)(o,{onClick:()=>r(!n),children:n?`Done editing`:`Edit project`}),metadata:(0,m.jsx)(u,{variant:`status`,children:n?`Editing`:`In progress`})}),(0,m.jsx)(`p`,{role:`status`,children:e})]})},play:async({canvasElement:e})=>{let t=_(e);await h(t.getByRole(`heading`,{level:1,name:`Customer portal redesign`})).toBeVisible(),await h(t.queryByRole(`navigation`,{name:`Breadcrumb`})).not.toBeInTheDocument(),t.getByRole(`button`,{name:`Projects`}).focus(),await g.keyboard(`{Enter}`),await h(t.getByRole(`status`)).toHaveTextContent(`Projects list selected`),await g.tab(),await h(t.getByRole(`button`,{name:`Edit project`})).toHaveFocus(),await g.keyboard(`{Enter}`),await h(t.getByRole(`button`,{name:`Done editing`})).toHaveFocus(),await h(t.getByText(`Editing`)).toBeVisible()}},w=[`Overview`,`WithBreadcrumbsAndActions`,`Detail`,`NarrowAndLongTitle`,`NavigationAndActions`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    breadcrumbs: [{
      label: 'Workspace',
      href: '#workspace'
    }, {
      label: 'Projects'
    }],
    actions: <>
        <Button emphasis="tertiary">Import</Button>
        <Button leadingIcon={<Plus size={16} />}>New project</Button>
      </>,
    metadata: <>
        <span>32 projects</span>
        <Tag intent="success">24 active</Tag>
      </>
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Customer portal redesign',
    description: 'Atlas Commerce · Customer experience',
    back: {
      label: 'Projects',
      href: '#projects'
    },
    leading: <Avatar name="Atlas Commerce" size="lg" />,
    metadata: <>
        <Tag variant="status" intent="function">
          In progress
        </Tag>
        <span>Owner: Alex Morgan</span>
        <code>PRJ-0042</code>
      </>,
    actions: <>
        <Button emphasis="tertiary">Share project</Button>
        <Button>Edit project</Button>
      </>
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '100%',
    maxWidth: 340
  }}>
        <Story />
      </div>],
  args: {
    title: 'Customer onboarding and account management redesign for Northstar Labs',
    description: 'Coordinate the next milestone with the customer and delivery teams.',
    back: {
      label: 'Projects',
      href: '#projects'
    },
    actions: <>
        <Button emphasis="tertiary">Share</Button>
        <Button>Review changes</Button>
      </>
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Example() {
    const [view, setView] = useState('Project details');
    const [editing, setEditing] = useState(false);
    return <div className="stack">
        <PageHeader title="Customer portal redesign" back={{
        label: 'Projects',
        onClick: () => setView('Projects list selected')
      }} breadcrumbs={[{
        label: 'Workspace',
        href: '#workspace'
      }, {
        label: 'Projects'
      }]} actions={<Button onClick={() => setEditing(!editing)}>
              {editing ? 'Done editing' : 'Edit project'}
            </Button>} metadata={<Tag variant="status">{editing ? 'Editing' : 'In progress'}</Tag>} />
        <p role="status">{view}</p>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('heading', {
      level: 1,
      name: 'Customer portal redesign'
    })).toBeVisible();
    await expect(canvas.queryByRole('navigation', {
      name: 'Breadcrumb'
    })).not.toBeInTheDocument();
    const back = canvas.getByRole('button', {
      name: 'Projects'
    });
    back.focus();
    await userEvent.keyboard('{Enter}');
    await expect(canvas.getByRole('status')).toHaveTextContent('Projects list selected');
    await userEvent.tab();
    await expect(canvas.getByRole('button', {
      name: 'Edit project'
    })).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    await expect(canvas.getByRole('button', {
      name: 'Done editing'
    })).toHaveFocus();
    await expect(canvas.getByText('Editing')).toBeVisible();
  }
}`,...C.parameters?.docs?.source}}}})))()}T();export{x as Detail,S as NarrowAndLongTitle,C as NavigationAndActions,y as Overview,b as WithBreadcrumbsAndActions,w as __namedExportsOrder,v as default};