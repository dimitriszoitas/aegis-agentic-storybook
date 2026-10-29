import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{Ft as r,V as i,pt as a,zt as o}from"./icon-uAOezYFl.js";import{n as s,t as c}from"./checkbox-CBBMJ0l4.js";import{n as l,t as u}from"./accordion-Bu0JaGWL.js";function d(){let[e,t]=(0,p.useState)(!1);return(0,m.jsx)(u,{type:`multiple`,defaultValue:[`scope`],items:[{value:`scope`,title:`Project scope`,icon:(0,m.jsx)(i,{}),content:(0,m.jsx)(u,{type:`multiple`,defaultValue:[`accounts`],items:[{value:`accounts`,title:`Accounts`,icon:(0,m.jsx)(r,{}),content:`Customer updates, account changes, and project activity.`},{value:`delivery`,title:`Delivery`,icon:(0,m.jsx)(a,{}),content:(0,m.jsx)(c,{label:`Include delivery tasks`,checked:e,onCheckedChange:e=>t(e===!0)})}]})},{value:`summary`,title:`Summary`,content:`Review the selected project scope.`}]})}function f(){let[e,t]=(0,p.useState)([`source`]);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(u,{type:`multiple`,value:e,onValueChange:t,items:y}),(0,m.jsxs)(`p`,{style:{color:`var(--color-text-secondary)`,marginTop:`var(--space-4)`},children:[e.length,` filter sections expanded`]})]})}var p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{p=t(),o(),s(),l(),m=n(),{expect:h,userEvent:g,waitFor:_,within:v}=__STORYBOOK_MODULE_TEST__,y=[{value:`severity`,title:`Severity`,icon:(0,m.jsx)(i,{}),count:150,content:(0,m.jsx)(`div`,{children:`Critical: 12 records · High: 38 records · Medium: 64 records · Low: 28 records · Info: 8 records`})},{value:`source`,title:`Data source`,icon:(0,m.jsx)(a,{}),count:4,content:`Project boards, customer accounts, invoices, and workspace activity are available in this view.`},{value:`member`,title:`Assigned member`,icon:(0,m.jsx)(r,{}),count:3,content:`Maya Chen, Nikos Papadopoulos, and Alex Morgan are on the current project team.`},{value:`restricted`,title:`Restricted documents`,content:`Restricted customer documents.`,disabled:!0}],b={id:`components-lists-accordion`,title:`Components/Surfaces/Accordion`,component:u,tags:[`autodocs`],parameters:{docs:{description:{component:`Compact 36px disclosure headers use a quiet hover surface, subtle dividers, optional icons and counts, and a 12px nested-content inset. Use single mode for one open section or multiple mode for independent groups. Arrow keys, Home, and End move between enabled headers; Enter and Space toggle them. Keep form values outside collapsing content when they must persist.`}}},args:{type:`single`,collapsible:!0,items:y,defaultValue:`severity`}},x={},S={render:()=>(0,m.jsx)(u,{type:`multiple`,defaultValue:[`severity`,`source`],items:y})},C={args:{variant:`contained`}},w={args:{disabled:!0}},T={play:async({canvasElement:e})=>{let t=v(e),n=t.getByRole(`button`,{name:/^Severity/}),r=t.getByRole(`button`,{name:/^Data source/});n.focus(),await g.keyboard(`{ArrowDown}`),await h(r).toHaveFocus(),await g.keyboard(`{Enter}`),await h(r).toHaveAttribute(`aria-expanded`,`true`),await h(n).toHaveAttribute(`aria-expanded`,`false`),await g.keyboard(`{End}`),await h(t.getByRole(`button`,{name:/^Assigned member/})).toHaveFocus(),await h(t.getByRole(`button`,{name:`Restricted documents`})).toBeDisabled(),await g.keyboard(`{Home}`),await h(n).toHaveFocus(),await g.keyboard(` `),await h(n).toHaveAttribute(`aria-expanded`,`true`)}},E={render:()=>(0,m.jsx)(d,{}),play:async({canvasElement:e})=>{let t=v(e);t.getByRole(`button`,{name:`Accounts`}).focus(),await g.keyboard(`{ArrowDown}`),await h(t.getByRole(`button`,{name:`Delivery`})).toHaveFocus(),await g.keyboard(`{Enter}`),await g.click(t.getByRole(`checkbox`,{name:`Include delivery tasks`}));let n=t.getByRole(`button`,{name:`Project scope`});await g.click(n),await h(n).toHaveAttribute(`aria-expanded`,`false`),await _(()=>h(t.queryByRole(`button`,{name:`Delivery`})).not.toBeInTheDocument()),await g.click(n),await g.click(t.getByRole(`button`,{name:`Delivery`})),await h(t.getByRole(`checkbox`,{name:`Include delivery tasks`})).toBeChecked()}},D={render:()=>(0,m.jsx)(m.Fragment,{children:[`vertical`,`horizontal`].map(e=>(0,m.jsxs)(`section`,{"aria-label":`${e} outer accordion`,children:[(0,m.jsxs)(`h3`,{children:[e,` outer accordion`]}),(0,m.jsx)(u,{type:`multiple`,orientation:e,defaultValue:[`first`],items:[{value:`first`,title:`Outer first`,content:(0,m.jsx)(u,{type:`multiple`,orientation:e===`vertical`?`horizontal`:`vertical`,items:[{value:`first`,title:`Inner first`,content:`First inner content.`},{value:`disabled`,title:`Inner disabled`,content:`Unavailable content.`,disabled:!0},{value:`last`,title:`Inner last`,content:`Last inner content.`}]})},{value:`last`,title:`Outer last`,content:`Last outer content.`}]})]},e))}),play:async({canvasElement:e})=>{let t=v(e);for(let e of[`vertical`,`horizontal`]){let n=v(t.getByRole(`region`,{name:`${e} outer accordion`})),r=n.getByRole(`button`,{name:`Inner first`}),i=n.getByRole(`button`,{name:`Inner last`}),a=n.getByRole(`button`,{name:`Outer first`}),o=e===`vertical`?[`ArrowDown`,`ArrowUp`]:[`ArrowRight`,`ArrowLeft`],s=e===`vertical`?[`ArrowRight`,`ArrowLeft`]:[`ArrowDown`,`ArrowUp`];r.focus();for(let e of o)await g.keyboard(`{${e}}`),await h(r).toHaveFocus();await g.keyboard(`{${s[0]}}`),await h(i).toHaveFocus(),await g.keyboard(`{${s[1]}}`),await h(r).toHaveFocus(),await g.keyboard(`{End}`),await h(i).toHaveFocus(),await g.keyboard(`{Home}`),await h(r).toHaveFocus(),await g.keyboard(`{Enter}`),await h(r).toHaveAttribute(`aria-expanded`,`true`),await h(a).toHaveAttribute(`aria-expanded`,`true`),a.focus(),await g.keyboard(`{${o[0]}}`),await h(n.getByRole(`button`,{name:`Outer last`})).toHaveFocus()}}},O={render:()=>(0,m.jsx)(f,{})},k=[`Single`,`Multiple`,`Contained`,`Disabled`,`Keyboard`,`Nested`,`NestedPerpendicularKeyboard`,`Controlled`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Accordion type="multiple" defaultValue={['severity', 'source']} items={items} />
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'contained'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const severity = canvas.getByRole('button', {
      name: /^Severity/
    });
    const source = canvas.getByRole('button', {
      name: /^Data source/
    });
    severity.focus();
    await userEvent.keyboard('{ArrowDown}');
    await expect(source).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    await expect(source).toHaveAttribute('aria-expanded', 'true');
    await expect(severity).toHaveAttribute('aria-expanded', 'false');
    await userEvent.keyboard('{End}');
    await expect(canvas.getByRole('button', {
      name: /^Assigned member/
    })).toHaveFocus();
    await expect(canvas.getByRole('button', {
      name: 'Restricted documents'
    })).toBeDisabled();
    await userEvent.keyboard('{Home}');
    await expect(severity).toHaveFocus();
    await userEvent.keyboard(' ');
    await expect(severity).toHaveAttribute('aria-expanded', 'true');
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <NestedExample />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const accounts = canvas.getByRole('button', {
      name: 'Accounts'
    });
    accounts.focus();
    await userEvent.keyboard('{ArrowDown}');
    await expect(canvas.getByRole('button', {
      name: 'Delivery'
    })).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    await userEvent.click(canvas.getByRole('checkbox', {
      name: 'Include delivery tasks'
    }));
    const scope = canvas.getByRole('button', {
      name: 'Project scope'
    });
    await userEvent.click(scope);
    await expect(scope).toHaveAttribute('aria-expanded', 'false');
    await waitFor(() => expect(canvas.queryByRole('button', {
      name: 'Delivery'
    })).not.toBeInTheDocument());
    await userEvent.click(scope);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Delivery'
    }));
    await expect(canvas.getByRole('checkbox', {
      name: 'Include delivery tasks'
    })).toBeChecked();
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <>
      {(['vertical', 'horizontal'] as const).map(outer => <section key={outer} aria-label={\`\${outer} outer accordion\`}>
          <h3>{outer} outer accordion</h3>
          <Accordion type="multiple" orientation={outer} defaultValue={['first']} items={[{
        value: 'first',
        title: 'Outer first',
        content: <Accordion type="multiple" orientation={outer === 'vertical' ? 'horizontal' : 'vertical'} items={[{
          value: 'first',
          title: 'Inner first',
          content: 'First inner content.'
        }, {
          value: 'disabled',
          title: 'Inner disabled',
          content: 'Unavailable content.',
          disabled: true
        }, {
          value: 'last',
          title: 'Inner last',
          content: 'Last inner content.'
        }]} />
      }, {
        value: 'last',
        title: 'Outer last',
        content: 'Last outer content.'
      }]} />
        </section>)}
    </>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    for (const outer of ['vertical', 'horizontal']) {
      const example = within(canvas.getByRole('region', {
        name: \`\${outer} outer accordion\`
      }));
      const first = example.getByRole('button', {
        name: 'Inner first'
      });
      const last = example.getByRole('button', {
        name: 'Inner last'
      });
      const outerFirst = example.getByRole('button', {
        name: 'Outer first'
      });
      const perpendicular = outer === 'vertical' ? ['ArrowDown', 'ArrowUp'] : ['ArrowRight', 'ArrowLeft'];
      const own = outer === 'vertical' ? ['ArrowRight', 'ArrowLeft'] : ['ArrowDown', 'ArrowUp'];
      first.focus();
      for (const key of perpendicular) {
        await userEvent.keyboard(\`{\${key}}\`);
        await expect(first).toHaveFocus();
      }
      await userEvent.keyboard(\`{\${own[0]}}\`);
      await expect(last).toHaveFocus();
      await userEvent.keyboard(\`{\${own[1]}}\`);
      await expect(first).toHaveFocus();
      await userEvent.keyboard('{End}');
      await expect(last).toHaveFocus();
      await userEvent.keyboard('{Home}');
      await expect(first).toHaveFocus();
      await userEvent.keyboard('{Enter}');
      await expect(first).toHaveAttribute('aria-expanded', 'true');
      await expect(outerFirst).toHaveAttribute('aria-expanded', 'true');
      outerFirst.focus();
      await userEvent.keyboard(\`{\${perpendicular[0]}}\`);
      await expect(example.getByRole('button', {
        name: 'Outer last'
      })).toHaveFocus();
    }
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledExample />
}`,...O.parameters?.docs?.source}}}})))()}A();export{C as Contained,O as Controlled,w as Disabled,T as Keyboard,S as Multiple,E as Nested,D as NestedPerpendicularKeyboard,x as Single,k as __namedExportsOrder,b as default};