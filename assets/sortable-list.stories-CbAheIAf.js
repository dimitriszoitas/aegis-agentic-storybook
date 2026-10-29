import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{a as r,i,n as a,t as o}from"./sortable-list-BmtYPlb7.js";var s,c,l,u,d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{s=t(),r(),o(),c=n(),{useArgs:l}=__STORYBOOK_MODULE_PREVIEW_API__,{expect:u,userEvent:d,within:f}=__STORYBOOK_MODULE_TEST__,p=[{id:`discover`,label:`Discover`,description:`Understand the problem`},{id:`design`,label:`Design`,description:`Explore solutions`},{id:`deliver`,label:`Deliver`,description:`Ship and learn`}],m=(e,t)=>t.map(t=>e.find(e=>e.id===t)),h={id:`components-data-sortablelist`,title:`Components/Data Display/SortableList`,component:i,tags:[`autodocs`],args:{label:`Project stages`,items:p,onReorder:()=>{}}},g={args:{disabled:!1,emptyText:`No stages`},argTypes:{items:{control:`object`},disabled:{control:`boolean`},label:{control:`text`},onReorder:{control:!1},renderItem:{control:!1}},render:function(e){let[,t]=l();return(0,c.jsx)(i,{...e,onReorder:n=>t({items:m(e.items,n)})})}},_={render:function(){let[e,t]=(0,s.useState)(p);return(0,c.jsx)(i,{label:`Stages`,items:e,onReorder:e=>t(t=>m(t,e))})},play:async({canvasElement:e})=>{let t=f(e),n=t.getByRole(`button`,{name:`Reorder Discover`});n.focus(),await d.keyboard(` `,{delay:30}),await d.keyboard(`{ArrowDown}`,{delay:30}),await d.keyboard(` `,{delay:30}),await u(t.getAllByRole(`listitem`)[0]).toHaveAttribute(`data-item-id`,`design`),await u(n).toHaveFocus(),await d.keyboard(` `,{delay:30}),await d.keyboard(`{ArrowDown}`,{delay:30}),await d.keyboard(`{Escape}`),await u(t.getAllByRole(`listitem`)[1]).toHaveAttribute(`data-item-id`,`discover`),await d.click(t.getByRole(`button`,{name:`Move Discover up`})),await u(t.getAllByRole(`listitem`)[0]).toHaveAttribute(`data-item-id`,`discover`),await u(t.getByRole(`button`,{name:`Move Discover up`})).toBeDisabled()}},v={args:{disabled:!0}},y={args:{items:[]}},b={render:()=>(0,c.jsx)(c.Fragment,{children:a.render()})},x=[`Playground`,`KeyboardReorder`,`Disabled`,`Empty`,`Anatomy`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: false,
    emptyText: 'No stages'
  },
  argTypes: {
    items: {
      control: 'object'
    },
    disabled: {
      control: 'boolean'
    },
    label: {
      control: 'text'
    },
    onReorder: {
      control: false
    },
    renderItem: {
      control: false
    }
  },
  render: function Playground(args) {
    const [, updateArgs] = useArgs();
    return <SortableList {...args} onReorder={ids => updateArgs({
      items: applyOrder(args.items, ids)
    })} />;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function KeyboardExample() {
    const [current, setCurrent] = useState<SortableListItem[]>(items);
    return <SortableList label="Stages" items={current} onReorder={ids => setCurrent(before => applyOrder(before, ids))} />;
  },
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    const handle = c.getByRole('button', {
      name: 'Reorder Discover'
    });
    handle.focus();
    await userEvent.keyboard(' ', {
      delay: 30
    });
    await userEvent.keyboard('{ArrowDown}', {
      delay: 30
    });
    await userEvent.keyboard(' ', {
      delay: 30
    });
    await expect(c.getAllByRole('listitem')[0]).toHaveAttribute('data-item-id', 'design');
    await expect(handle).toHaveFocus();
    await userEvent.keyboard(' ', {
      delay: 30
    });
    await userEvent.keyboard('{ArrowDown}', {
      delay: 30
    });
    await userEvent.keyboard('{Escape}');
    await expect(c.getAllByRole('listitem')[1]).toHaveAttribute('data-item-id', 'discover');
    await userEvent.click(c.getByRole('button', {
      name: 'Move Discover up'
    }));
    await expect(c.getAllByRole('listitem')[0]).toHaveAttribute('data-item-id', 'discover');
    await expect(c.getByRole('button', {
      name: 'Move Discover up'
    })).toBeDisabled();
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    items: []
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <>{sortableListAnatomy.render()}</>
}`,...b.parameters?.docs?.source}}}})))()}S();export{b as Anatomy,v as Disabled,y as Empty,_ as KeyboardReorder,g as Playground,x as __namedExportsOrder,h as default};