import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./button-DTEiHM0V.js";import{n as a,r as o,t as s}from"./popover-DYkNcPij.js";function c(){let[e,t]=(0,l.useState)(!1),[n,r]=(0,l.useState)(`Confirm the delivery date with the project owner.`);return(0,u.jsxs)(s,{open:e,onOpenChange:t,trigger:(0,u.jsx)(`button`,{className:`aegis-popover-demo-trigger`,children:`Add project note`}),title:`Project note`,showClose:!0,children:[(0,u.jsx)(`label`,{htmlFor:`popover-note`,children:`Member note`}),(0,u.jsx)(`textarea`,{id:`popover-note`,value:n,onChange:e=>r(e.target.value),style:{width:`100%`,marginBlock:`var(--space-3)`,background:`var(--color-bg-surface)`,color:`var(--color-text-primary)`,border:`1px solid var(--color-border-default)`,borderRadius:`var(--radius-sm)`,padding:`var(--space-2)`}}),(0,u.jsx)(a,{className:`aegis-popover-demo-trigger`,children:`Save note`})]})}var l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{l=t(),r(),o(),u=n(),d=t(),{expect:f,userEvent:p,waitFor:m,within:h}=__STORYBOOK_MODULE_TEST__,g={id:`components-overlays-popover`,title:`Components/Surfaces/Popover`,component:s,subcomponents:{PopoverClose:a},tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:"Popover headers and footers are optional and have no divider lines. Use `showHeader={false}` for a body-only or footer-only layout; an existing title remains available to assistive technology. `density` is `regular` (16px padding) or `tight` (12px). The body scrolls independently while the close control and footer remain visible.\n\n`PopoverClose` closes its nearest parent popover and inherits native button props from Base UI. It must be rendered inside that parent.\n\n| PopoverClose prop | Type | Behavior |\n| --- | --- | --- |\n| asChild | `boolean` | Uses its single child as the close control instead of adding a button |\n| children | `ReactNode` | Button content or the single child when asChild is enabled |\n| disabled | `boolean` | Disables the close control |\n| onClick | `MouseEventHandler<HTMLButtonElement>` | Runs alongside the close behavior |\n| className / style | `string` / `CSSProperties` | Native presentation props |\n| aria-label | `string` | Accessible name for an icon-only control |\n"},story:{inline:!1,height:360}}},args:{trigger:(0,u.jsx)(`button`,{className:`aegis-popover-demo-trigger`,children:`Activity details`}),title:`Project activity`,description:`Activity recorded during the selected project period.`,children:(0,u.jsx)(`p`,{children:`The project team completed 37 tasks and submitted the onboarding milestone for review.`}),showClose:!0}},_={},v={args:{defaultOpen:!0}},y={argTypes:{side:{control:!1},trigger:{control:!1}},render:e=>(0,u.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`var(--space-4)`},children:[`top`,`right`,`bottom`,`left`].map(t=>(0,u.jsx)(s,{...e,side:t,trigger:(0,u.jsxs)(`button`,{className:`aegis-popover-demo-trigger`,children:[t,` activity`]})},t))})},b={render:()=>(0,u.jsx)(c,{})},x={args:{title:`Activity summary`,description:void 0,showHeader:!1,showClose:!1,defaultOpen:!0}},S={args:{defaultOpen:!0,footer:void 0}},C={args:{showHeader:!1,showClose:!1,defaultOpen:!0,footer:(0,u.jsx)(a,{asChild:!0,children:(0,u.jsx)(i,{emphasis:`secondary`,children:`Done`})})}},w={args:{defaultOpen:!0,footer:(0,u.jsx)(a,{asChild:!0,children:(0,u.jsx)(i,{emphasis:`secondary`,children:`Done`})})}},T={argTypes:{density:{control:!1},title:{control:!1},trigger:{control:!1},footer:{control:!1}},render:e=>(0,u.jsx)(`div`,{className:`row`,children:[`regular`,`tight`].map(t=>(0,d.createElement)(s,{...e,key:t,density:t,title:`${t===`regular`?`Regular`:`Tight`} activity summary`,trigger:(0,u.jsxs)(i,{emphasis:`secondary`,children:[t,` popover`]}),footer:(0,u.jsx)(a,{asChild:!0,children:(0,u.jsx)(i,{size:`sm`,emphasis:`secondary`,children:`Done`})})}))})},E={args:{title:`Long activity summary with a header that stays visible`,footer:(0,u.jsx)(a,{asChild:!0,children:(0,u.jsx)(i,{emphasis:`secondary`,children:`Finish review`})}),children:(0,u.jsx)(`div`,{children:Array.from({length:16},(e,t)=>(0,u.jsxs)(`p`,{children:[`Update `,t+1,`: The customer requested a change to the project timeline. Confirm the project owner and review the related updates.`]},t))})},play:async({canvasElement:e})=>{let t=h(e),n=h(e.ownerDocument.body),r=t.getByRole(`button`,{name:`Activity details`});await p.click(r);let i=await n.findByRole(`dialog`),a=i.querySelector(`.aegis-popover-header`),o=i.querySelector(`.aegis-popover-footer`),s=i.querySelector(`.aegis-popover-body`),c=a.getBoundingClientRect().top,l=o.getBoundingClientRect().top;s.scrollTop=s.scrollHeight,await m(()=>f(s.scrollTop).toBeGreaterThan(0)),f(a.getBoundingClientRect().top).toBe(c),f(o.getBoundingClientRect().top).toBe(l),await f(n.getByRole(`button`,{name:`Close popover`})).toBeVisible(),await p.keyboard(`{Escape}`),await m(()=>f(r).toHaveFocus())}},D=[`Default`,`OpenActivity`,`PlacementMatrix`,`ControlledForm`,`BodyOnly`,`HeaderOnly`,`FooterOnly`,`HeaderAndFooter`,`DensityMatrix`,`ScrollableBody`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: true
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  argTypes: {
    side: {
      control: false
    },
    trigger: {
      control: false
    }
  },
  render: args => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 'var(--space-4)'
  }}>
      {(['top', 'right', 'bottom', 'left'] as const).map(side => <Popover key={side} {...args} side={side} trigger={<button className="aegis-popover-demo-trigger">{side} activity</button>} />)}
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledExample />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Activity summary',
    description: undefined,
    showHeader: false,
    showClose: false,
    defaultOpen: true
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: true,
    footer: undefined
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    showHeader: false,
    showClose: false,
    defaultOpen: true,
    footer: <PopoverClose asChild>
        <Button emphasis="secondary">Done</Button>
      </PopoverClose>
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: true,
    footer: <PopoverClose asChild>
        <Button emphasis="secondary">Done</Button>
      </PopoverClose>
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  argTypes: {
    density: {
      control: false
    },
    title: {
      control: false
    },
    trigger: {
      control: false
    },
    footer: {
      control: false
    }
  },
  render: args => <div className="row">
      {(['regular', 'tight'] as const).map(density => <Popover {...args} key={density} density={density} title={\`\${density === 'regular' ? 'Regular' : 'Tight'} activity summary\`} trigger={<Button emphasis="secondary">{density} popover</Button>} footer={<PopoverClose asChild>
              <Button size="sm" emphasis="secondary">
                Done
              </Button>
            </PopoverClose>} />)}
    </div>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Long activity summary with a header that stays visible',
    footer: <PopoverClose asChild>
        <Button emphasis="secondary">Finish review</Button>
      </PopoverClose>,
    children: <div>
        {Array.from({
        length: 16
      }, (_, index) => <p key={index}>
            Update {index + 1}: The customer requested a change to the project timeline. Confirm the
            project owner and review the related updates.
          </p>)}
      </div>
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const trigger = canvas.getByRole('button', {
      name: 'Activity details'
    });
    await userEvent.click(trigger);
    const dialog = await body.findByRole('dialog');
    const header = dialog.querySelector<HTMLElement>('.aegis-popover-header')!;
    const footer = dialog.querySelector<HTMLElement>('.aegis-popover-footer')!;
    const scroll = dialog.querySelector<HTMLElement>('.aegis-popover-body')!;
    const headerTop = header.getBoundingClientRect().top;
    const footerTop = footer.getBoundingClientRect().top;
    scroll.scrollTop = scroll.scrollHeight;
    await waitFor(() => expect(scroll.scrollTop).toBeGreaterThan(0));
    expect(header.getBoundingClientRect().top).toBe(headerTop);
    expect(footer.getBoundingClientRect().top).toBe(footerTop);
    await expect(body.getByRole('button', {
      name: 'Close popover'
    })).toBeVisible();
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(trigger).toHaveFocus());
  }
}`,...E.parameters?.docs?.source}}}})))()}O();export{x as BodyOnly,b as ControlledForm,_ as Default,T as DensityMatrix,C as FooterOnly,w as HeaderAndFooter,S as HeaderOnly,v as OpenActivity,y as PlacementMatrix,E as ScrollableBody,D as __namedExportsOrder,g as default};