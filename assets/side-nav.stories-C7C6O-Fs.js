import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{Ht as r,I as i,J as a,L as o,V as s,Y as c,wt as l,xt as u}from"./icon-BY3BDj89.js";import{r as d,t as f}from"./avatar-BYBjquVO.js";import{n as p,t as m}from"./side-nav-DHlq2TxT.js";function h({collapsed:e=!1,onSearch:t}){let[n,r]=(0,_.useState)(`records`);return(0,v.jsx)(m,{defaultCollapsed:e,activeId:n,onNavigate:r,onSearch:t,sections:[{label:`Workspace`,items:[{id:`overview`,label:`Overview`,icon:(0,v.jsx)(c,{})},{id:`records`,label:`Records`,icon:(0,v.jsx)(s,{}),count:48},{id:`projects`,label:`Projects`,icon:(0,v.jsx)(a,{}),count:8},{id:`hunting`,label:`Hunting`,icon:(0,v.jsx)(u,{})}]},{label:`Manage`,items:[{id:`rules`,label:`Workflows`,icon:(0,v.jsx)(o,{}),children:[{id:`customers`,label:`Customer workflows`,icon:(0,v.jsx)(o,{})},{id:`delivery`,label:`Project workflows`,icon:(0,v.jsx)(o,{})}]},{id:`reports`,label:`Reports`,icon:(0,v.jsx)(i,{})},{id:`settings`,label:`Settings`,icon:(0,v.jsx)(l,{})}]}],footer:e=>(0,v.jsxs)(`div`,{className:`row`,children:[(0,v.jsx)(f,{name:`Elena Vasquez`,size:`sm`}),!e&&(0,v.jsx)(`span`,{children:`Elena Vasquez`})]})})}function g({args:e,updateArgs:t}){let[n,r]=(0,_.useState)(``),{showBrandIcon:i,showFooter:a,...o}=e;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(m,{...o,brandIcon:i?void 0:null,footer:a?e=>(0,v.jsxs)(`div`,{className:`row`,children:[(0,v.jsx)(f,{name:`Elena Vasquez`,size:`sm`}),!e&&(0,v.jsx)(`span`,{children:`Elena Vasquez`})]}):void 0,onCollapsedChange:e=>t({collapsed:e}),onNavigate:e=>t({activeId:e}),onSearch:()=>r(`Workspace search requested`)}),(0,v.jsx)(`p`,{className:`sr-only`,role:`status`,children:n})]})}var _,v,y,b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{_=t(),r(),p(),d(),v=n(),{expect:y,fn:b,userEvent:x,waitFor:S,within:C}=__STORYBOOK_MODULE_TEST__,{useArgs:w}=__STORYBOOK_MODULE_PREVIEW_API__,T={id:`components-navigation-sidenav`,title:`Components/Navigation/SideNav`,component:m,args:{onSearch:b()},parameters:{layout:`fullscreen`}},E={render:e=>(0,v.jsx)(h,{onSearch:e.onSearch})},D={render:e=>(0,v.jsx)(h,{collapsed:!0,onSearch:e.onSearch})},O={render:e=>(0,v.jsx)(h,{collapsed:!0,onSearch:e.onSearch}),play:async({canvasElement:e,args:t})=>{let n=C(e),r=C(document.body),i=n.getByRole(`button`,{name:`Expand navigation`});i.focus(),await x.tab();let a=n.getByRole(`button`,{name:`Search workspace`});await y(a).toHaveFocus(),await y(await r.findByRole(`tooltip`)).toHaveTextContent(`Search workspace`),await x.keyboard(`{Enter}`),await y(t.onSearch).toHaveBeenCalled();let o=n.getByRole(`button`,{name:`Workflows`});o.focus(),await y(await r.findByRole(`tooltip`)).toHaveTextContent(`Workflows`),await x.keyboard(`{ArrowDown}`);let s=await r.findByRole(`menuitem`,{name:`Customer workflows`});await S(()=>y(s).toHaveFocus()),await x.keyboard(`{ArrowDown}{Enter}`),await S(()=>y(o).toHaveFocus()),await y(o).toHaveClass(`is-active`),await x.keyboard(`{ArrowDown}{Escape}`),await S(()=>y(o).toHaveFocus()),await x.click(i),await y(n.getByRole(`button`,{name:`Collapse navigation`})).toHaveFocus(),await y(n.getByRole(`button`,{name:`Project workflows`})).toHaveAttribute(`aria-current`,`page`)}},k={render:e=>(0,v.jsx)(h,{onSearch:e.onSearch}),play:async({canvasElement:e})=>{let t=C(e),n=t.getByRole(`button`,{name:`Workflows`});n.focus(),await x.keyboard(`{Enter}`),await y(n).toHaveAttribute(`aria-expanded`,`true`),await y(document.getElementById(n.getAttribute(`aria-controls`)??``)).toBeVisible(),await x.tab();let r=t.getByRole(`button`,{name:`Customer workflows`});await y(r).toHaveFocus(),await x.keyboard(` `),await y(r).toHaveAttribute(`aria-current`,`page`),await x.tab({shift:!0}),await y(n).toHaveFocus(),await x.keyboard(`{Enter}`),await y(n).toHaveAttribute(`aria-expanded`,`false`),await y(t.queryByRole(`button`,{name:`Customer workflows`})).not.toBeInTheDocument(),await x.tab(),await y(t.getByRole(`button`,{name:`Reports`})).toHaveFocus()}},A={args:{brandName:`Northstar`,workspace:`Product team`,collapsed:!1,activeId:`projects`,showSearch:!0,showWorkspace:!0,showBrandIcon:!0,showFooter:!0,sections:[{label:`Workspace`,items:[{id:`overview`,label:`Overview`,icon:(0,v.jsx)(c,{})},{id:`projects`,label:`Projects`,icon:(0,v.jsx)(s,{}),count:8},{id:`customers`,label:`Customers`,icon:(0,v.jsx)(a,{}),count:12}]},{label:`Manage`,items:[{id:`workflows`,label:`Workflows`,icon:(0,v.jsx)(o,{}),children:[{id:`delivery`,label:`Project delivery`,icon:(0,v.jsx)(o,{})},{id:`onboarding`,label:`Customer onboarding`,icon:(0,v.jsx)(o,{})}]},{id:`reports`,label:`Reports`,icon:(0,v.jsx)(i,{})},{id:`settings`,label:`Settings`,icon:(0,v.jsx)(l,{})}]}]},argTypes:{brandName:{control:`text`},workspace:{control:`text`},collapsed:{control:`boolean`},activeId:{control:`select`,options:[`overview`,`projects`,`customers`,`delivery`,`onboarding`,`reports`,`settings`]},showSearch:{control:`boolean`},showWorkspace:{control:`boolean`},showBrandIcon:{control:`boolean`},showFooter:{control:`boolean`},sections:{control:!1}},render:function(e){let[,t]=w();return(0,v.jsx)(g,{args:e,updateArgs:t})},play:async({canvasElement:e})=>{let t=C(e);await x.click(t.getByRole(`button`,{name:`Collapse navigation`})),await S(()=>y(t.getByRole(`button`,{name:`Expand navigation`})).toBeVisible()),await x.click(t.getByRole(`button`,{name:`Expand navigation`})),await x.click(t.getByRole(`button`,{name:`Overview`})),await S(()=>y(t.getByRole(`button`,{name:`Overview`})).toHaveAttribute(`aria-current`,`page`)),await x.click(t.getByRole(`button`,{name:`Search workspace`})),await y(t.getByRole(`status`)).toHaveTextContent(`Workspace search requested`)}},j=[`Expanded`,`Collapsed`,`CollapsedKeyboard`,`ExpandedKeyboard`,`Playground`],E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => <Navigation onSearch={args.onSearch} />
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => <Navigation collapsed onSearch={args.onSearch} />
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => <Navigation collapsed onSearch={args.onSearch} />,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const portal = within(document.body);
    const toggle = canvas.getByRole('button', {
      name: 'Expand navigation'
    });
    toggle.focus();
    await userEvent.tab();
    const search = canvas.getByRole('button', {
      name: 'Search workspace'
    });
    await expect(search).toHaveFocus();
    await expect(await portal.findByRole('tooltip')).toHaveTextContent('Search workspace');
    await userEvent.keyboard('{Enter}');
    await expect(args.onSearch).toHaveBeenCalled();
    const group = canvas.getByRole('button', {
      name: 'Workflows'
    });
    group.focus();
    await expect(await portal.findByRole('tooltip')).toHaveTextContent('Workflows');
    await userEvent.keyboard('{ArrowDown}');
    const customers = await portal.findByRole('menuitem', {
      name: 'Customer workflows'
    });
    await waitFor(() => expect(customers).toHaveFocus());
    await userEvent.keyboard('{ArrowDown}{Enter}');
    await waitFor(() => expect(group).toHaveFocus());
    await expect(group).toHaveClass('is-active');
    await userEvent.keyboard('{ArrowDown}{Escape}');
    await waitFor(() => expect(group).toHaveFocus());
    await userEvent.click(toggle);
    await expect(canvas.getByRole('button', {
      name: 'Collapse navigation'
    })).toHaveFocus();
    await expect(canvas.getByRole('button', {
      name: 'Project workflows'
    })).toHaveAttribute('aria-current', 'page');
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => <Navigation onSearch={args.onSearch} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const group = canvas.getByRole('button', {
      name: 'Workflows'
    });
    group.focus();
    await userEvent.keyboard('{Enter}');
    await expect(group).toHaveAttribute('aria-expanded', 'true');
    await expect(document.getElementById(group.getAttribute('aria-controls') ?? '')).toBeVisible();
    await userEvent.tab();
    const customers = canvas.getByRole('button', {
      name: 'Customer workflows'
    });
    await expect(customers).toHaveFocus();
    await userEvent.keyboard(' ');
    await expect(customers).toHaveAttribute('aria-current', 'page');
    await userEvent.tab({
      shift: true
    });
    await expect(group).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    await expect(group).toHaveAttribute('aria-expanded', 'false');
    await expect(canvas.queryByRole('button', {
      name: 'Customer workflows'
    })).not.toBeInTheDocument();
    await userEvent.tab();
    await expect(canvas.getByRole('button', {
      name: 'Reports'
    })).toHaveFocus();
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    brandName: 'Northstar',
    workspace: 'Product team',
    collapsed: false,
    activeId: 'projects',
    showSearch: true,
    showWorkspace: true,
    showBrandIcon: true,
    showFooter: true,
    sections: [{
      label: 'Workspace',
      items: [{
        id: 'overview',
        label: 'Overview',
        icon: <LayoutDashboard />
      }, {
        id: 'projects',
        label: 'Projects',
        icon: <Folder />,
        count: 8
      }, {
        id: 'customers',
        label: 'Customers',
        icon: <Layers />,
        count: 12
      }]
    }, {
      label: 'Manage',
      items: [{
        id: 'workflows',
        label: 'Workflows',
        icon: <FileCode />,
        children: [{
          id: 'delivery',
          label: 'Project delivery',
          icon: <FileCode />
        }, {
          id: 'onboarding',
          label: 'Customer onboarding',
          icon: <FileCode />
        }]
      }, {
        id: 'reports',
        label: 'Reports',
        icon: <FileChartColumn />
      }, {
        id: 'settings',
        label: 'Settings',
        icon: <Settings />
      }]
    }]
  },
  argTypes: {
    brandName: {
      control: 'text'
    },
    workspace: {
      control: 'text'
    },
    collapsed: {
      control: 'boolean'
    },
    activeId: {
      control: 'select',
      options: ['overview', 'projects', 'customers', 'delivery', 'onboarding', 'reports', 'settings']
    },
    showSearch: {
      control: 'boolean'
    },
    showWorkspace: {
      control: 'boolean'
    },
    showBrandIcon: {
      control: 'boolean'
    },
    showFooter: {
      control: 'boolean'
    },
    sections: {
      control: false
    }
  },
  render: function Playground(args) {
    const [, updateArgs] = useArgs<SideNavPlaygroundArgs>();
    return <SideNavPlaygroundFixture args={args} updateArgs={updateArgs} />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Collapse navigation'
    }));
    await waitFor(() => expect(canvas.getByRole('button', {
      name: 'Expand navigation'
    })).toBeVisible());
    await userEvent.click(canvas.getByRole('button', {
      name: 'Expand navigation'
    }));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Overview'
    }));
    await waitFor(() => expect(canvas.getByRole('button', {
      name: 'Overview'
    })).toHaveAttribute('aria-current', 'page'));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Search workspace'
    }));
    await expect(canvas.getByRole('status')).toHaveTextContent('Workspace search requested');
  }
}`,...A.parameters?.docs?.source}}}})))()}M();export{D as Collapsed,O as CollapsedKeyboard,E as Expanded,k as ExpandedKeyboard,A as Playground,j as __namedExportsOrder,T as default};