import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./button-BpCMuPJ8.js";import{n as a,t as o}from"./text-input-Brzbdhcv.js";import{a as s,i as c,n as l,r as u,t as d}from"./modal-DRZmOeVa.js";function f({defaultOpen:e=!1}){let[t,n]=(0,m.useState)(!1);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(d,{defaultOpen:e,trigger:(0,h.jsx)(i,{intent:`destroy`,emphasis:`secondary`,children:`Delete workflow`}),title:`Delete customer portal workflow?`,description:`The workflow will no longer be available for new projects. Existing records and project history will remain available.`,confirmationText:`Customer portal`,confirmLabel:`Delete workflow`,onConfirm:()=>n(!0)}),(0,h.jsx)(`p`,{role:`status`,style:{marginTop:`var(--space-4)`,color:`var(--color-text-secondary)`},children:t?`The customer portal workflow was deleted.`:`The workflow is available in 12 projects.`})]})}function p(){let[e,t]=(0,m.useState)(!1),[n,r]=(0,m.useState)(!1),a=(0,m.useRef)(null);return(0,m.useEffect)(()=>{if(e||!n)return;let t=requestAnimationFrame(()=>a.current?.focus());return()=>cancelAnimationFrame(t)},[e,n]),(0,h.jsxs)(`div`,{className:`stack`,children:[(0,h.jsx)(i,{onClick:()=>t(!0),children:`Leave project`}),(0,h.jsx)(`h2`,{ref:a,tabIndex:-1,children:n?`Reports workspace`:`Project draft`}),(0,h.jsx)(d,{open:e,onOpenChange:t,title:`Discard project draft?`,description:`Discard the draft and return to reports.`,confirmLabel:`Discard and continue`,onConfirm:()=>{r(!0)}})]})}var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I;function L(){return(L=e((()=>{m=t(),r(),a(),s(),h=n(),g=t(),{expect:_,userEvent:v,waitFor:y,within:b}=__STORYBOOK_MODULE_TEST__,x={id:`components-overlays-modal`,title:`Components/Surfaces/Modal`,component:u,subcomponents:{Dialog:l,ConfirmDialog:d,ModalClose:c},parameters:{docs:{description:{component:"Modal has three width presets: `small` (400px), `regular` (560px, default), and `large` (800px), clamped to the viewport. `showHeader={false}` hides the visual header while preserving its accessible title. Header and footer have divider lines and remain outside the scrollable body.\n\n`ModalClose` closes its nearest parent modal and inherits native button props from Base UI. It must be rendered inside that parent.\n\n| ModalClose prop | Type | Behavior |\n| --- | --- | --- |\n| asChild | `boolean` | Uses its single child as the close control instead of adding a button |\n| children | `ReactNode` | Button content or the single child when asChild is enabled |\n| disabled | `boolean` | Disables the close control |\n| onClick | `MouseEventHandler<HTMLButtonElement>` | Runs alongside the close behavior |\n| className / style | `string` / `CSSProperties` | Native presentation props |\n| aria-label | `string` | Accessible name for an icon-only control |\n"},story:{inline:!1,height:600}}},tags:[`autodocs`],args:{title:`Assign record to a member`,description:`Assign REC-00842 to the member responsible for the customer project.`,trigger:(0,h.jsx)(i,{children:`Assign record`}),children:(0,h.jsx)(o,{label:`Project note`,defaultValue:`Review the delivery checklist before completing the record.`}),footer:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(c,{asChild:!0,children:(0,h.jsx)(i,{emphasis:`ghost`,children:`Cancel`})}),(0,h.jsx)(c,{asChild:!0,children:(0,h.jsx)(i,{intent:`function`,children:`Save assignment`})})]})}},S={},C={args:{defaultOpen:!0}},w={argTypes:{size:{control:!1},trigger:{control:!1}},render:e=>(0,h.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`var(--space-3)`},children:[`small`,`regular`,`large`].map(t=>(0,g.createElement)(u,{...e,key:t,size:t,trigger:(0,h.jsxs)(i,{children:[t,` project dialog`]})}))}),play:async({canvasElement:e})=>{let t=b(e),n=b(e.ownerDocument.body),r=e.ownerDocument.defaultView.innerWidth;for(let[e,i]of[[`small`,400],[`regular`,560],[`large`,800]]){let a=t.getByRole(`button`,{name:`${e} project dialog`});a.focus(),await v.keyboard(`{Enter}`);let o=await n.findByRole(`dialog`);await y(()=>_(Math.abs(o.getBoundingClientRect().width-Math.min(i,r-24))).toBeLessThan(1)),await v.keyboard(`{Escape}`),await y(()=>_(a).toHaveFocus())}}},T={args:{title:`Review project activity`,children:(0,h.jsx)(`div`,{children:Array.from({length:18},(e,t)=>(0,h.jsxs)(`p`,{children:[`09:`,String(t+12).padStart(2,`0`),` UTC · PRJ-0042 received a new project requirement. The customer team requested updated onboarding copy and a review of the account settings before the next milestone.`]},t))})},play:async({canvasElement:e})=>{let t=b(e),n=b(e.ownerDocument.body),r=t.getByRole(`button`,{name:`Assign record`});await v.click(r);let i=await n.findByRole(`dialog`),a=i.querySelector(`.aegis-modal-header`),o=i.querySelector(`.aegis-modal-footer`),s=i.querySelector(`.aegis-modal-body`),c=a.getBoundingClientRect().top,l=o.getBoundingClientRect().top;s.scrollTop=s.scrollHeight,await y(()=>_(s.scrollTop).toBeGreaterThan(0)),_(a.getBoundingClientRect().top).toBe(c),_(o.getBoundingClientRect().top).toBe(l),await v.keyboard(`{Escape}`),await y(()=>_(r).toHaveFocus())}},E={render:()=>(0,h.jsx)(f,{})},D={render:()=>(0,h.jsx)(f,{defaultOpen:!0})},O={render:()=>(0,h.jsx)(d,{trigger:(0,h.jsx)(i,{intent:`destroy`,children:`Remove project note`}),title:`Remove project note?`,description:`This note will be permanently removed from REC-00842.`,confirmLabel:`Remove note`,onConfirm:async()=>{throw Error(`The project is locked by another member. Try again after the handoff.`)}})},k={render:()=>(0,h.jsx)(p,{}),play:async({canvasElement:e})=>{let t=b(e),n=b(document.body),r=t.getByRole(`button`,{name:`Leave project`});await v.click(r),await n.findByRole(`alertdialog`),await v.keyboard(`{Escape}`),await y(()=>_(r).toHaveFocus()),await v.click(r),await v.click(await n.findByRole(`button`,{name:`Discard and continue`})),await y(()=>_(t.getByRole(`heading`,{name:`Reports workspace`})).toHaveFocus())}},A={args:{showHeader:!1,showClose:!1,footer:void 0,defaultOpen:!0}},j={args:{footer:void 0,defaultOpen:!0}},M={args:{showHeader:!1,showClose:!1,defaultOpen:!0}},N={args:{defaultOpen:!0}},P={args:{showClose:!1,headerActions:(0,h.jsx)(i,{emphasis:`ghost`,children:`Preview assignment`})},play:async({canvasElement:e})=>{let t=b(e),n=b(e.ownerDocument.body),r=t.getByRole(`button`,{name:`Assign record`});await v.click(r);let i=await n.findByRole(`dialog`),a=b(i),o=a.getByRole(`button`,{name:`Preview assignment`});await y(()=>_(o).toHaveFocus()),await v.tab(),await _(a.getByRole(`region`,{name:`Dialog content`})).toHaveFocus(),await v.tab(),await _(a.getByRole(`textbox`,{name:`Project note`})).toHaveFocus(),await v.tab(),await _(a.getByRole(`button`,{name:`Cancel`})).toHaveFocus(),await v.tab(),await _(a.getByRole(`button`,{name:`Save assignment`})).toHaveFocus(),await v.tab(),await y(()=>_(o).toHaveFocus()),await v.keyboard(`{Escape}`),await y(()=>_(r).toHaveFocus()),await _(n.queryByRole(`dialog`)).not.toBeInTheDocument()}},F={args:{showHeader:!1,footer:void 0,defaultOpen:!0}},I=[`Default`,`OpenDialog`,`Sizes`,`ScrollableWithStickyFooter`,`TypedConfirmation`,`OpenTypedConfirmation`,`FailedConfirmation`,`NavigationFocus`,`BodyOnly`,`HeaderOnly`,`FooterOnly`,`HeaderAndFooter`,`HeaderActionsKeyboardOrder`,`HeaderlessWithClose`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: true
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  argTypes: {
    size: {
      control: false
    },
    trigger: {
      control: false
    }
  },
  render: args => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 'var(--space-3)'
  }}>
      {(['small', 'regular', 'large'] as const).map(size => <Modal {...args} key={size} size={size} trigger={<Button>{size} project dialog</Button>} />)}
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement),
      page = within(canvasElement.ownerDocument.body);
    const viewport = canvasElement.ownerDocument.defaultView!.innerWidth;
    for (const [size, width] of [['small', 400], ['regular', 560], ['large', 800]] as const) {
      const trigger = canvas.getByRole('button', {
        name: \`\${size} project dialog\`
      });
      trigger.focus();
      await userEvent.keyboard('{Enter}');
      const dialog = await page.findByRole('dialog');
      await waitFor(() => expect(Math.abs(dialog.getBoundingClientRect().width - Math.min(width, viewport - 24))).toBeLessThan(1));
      await userEvent.keyboard('{Escape}');
      await waitFor(() => expect(trigger).toHaveFocus());
    }
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Review project activity',
    children: <div>
        {Array.from({
        length: 18
      }, (_, index) => <p key={index}>
            09:{String(index + 12).padStart(2, '0')} UTC · PRJ-0042 received a new project
            requirement. The customer team requested updated onboarding copy and a review of the
            account settings before the next milestone.
          </p>)}
      </div>
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement),
      page = within(canvasElement.ownerDocument.body);
    const trigger = canvas.getByRole('button', {
      name: 'Assign record'
    });
    await userEvent.click(trigger);
    const dialog = await page.findByRole('dialog');
    const header = dialog.querySelector<HTMLElement>('.aegis-modal-header')!;
    const footer = dialog.querySelector<HTMLElement>('.aegis-modal-footer')!;
    const body = dialog.querySelector<HTMLElement>('.aegis-modal-body')!;
    const headerTop = header.getBoundingClientRect().top,
      footerTop = footer.getBoundingClientRect().top;
    body.scrollTop = body.scrollHeight;
    await waitFor(() => expect(body.scrollTop).toBeGreaterThan(0));
    expect(header.getBoundingClientRect().top).toBe(headerTop);
    expect(footer.getBoundingClientRect().top).toBe(footerTop);
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(trigger).toHaveFocus());
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <ConfirmationExample />
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <ConfirmationExample defaultOpen />
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <ConfirmDialog trigger={<Button intent="destroy">Remove project note</Button>} title="Remove project note?" description="This note will be permanently removed from REC-00842." confirmLabel="Remove note" onConfirm={async () => {
    throw new Error('The project is locked by another member. Try again after the handoff.');
  }} />
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <NavigationConfirmationExample />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const portal = within(document.body);
    const opener = canvas.getByRole('button', {
      name: 'Leave project'
    });
    await userEvent.click(opener);
    await portal.findByRole('alertdialog');
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(opener).toHaveFocus());
    await userEvent.click(opener);
    await userEvent.click(await portal.findByRole('button', {
      name: 'Discard and continue'
    }));
    await waitFor(() => expect(canvas.getByRole('heading', {
      name: 'Reports workspace'
    })).toHaveFocus());
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    showHeader: false,
    showClose: false,
    footer: undefined,
    defaultOpen: true
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    footer: undefined,
    defaultOpen: true
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    showHeader: false,
    showClose: false,
    defaultOpen: true
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: true
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    showClose: false,
    headerActions: <Button emphasis="ghost">Preview assignment</Button>
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const page = within(canvasElement.ownerDocument.body);
    const trigger = canvas.getByRole('button', {
      name: 'Assign record'
    });
    await userEvent.click(trigger);
    const dialog = await page.findByRole('dialog');
    const content = within(dialog);
    const headerAction = content.getByRole('button', {
      name: 'Preview assignment'
    });
    await waitFor(() => expect(headerAction).toHaveFocus());
    await userEvent.tab();
    await expect(content.getByRole('region', {
      name: 'Dialog content'
    })).toHaveFocus();
    await userEvent.tab();
    await expect(content.getByRole('textbox', {
      name: 'Project note'
    })).toHaveFocus();
    await userEvent.tab();
    await expect(content.getByRole('button', {
      name: 'Cancel'
    })).toHaveFocus();
    await userEvent.tab();
    await expect(content.getByRole('button', {
      name: 'Save assignment'
    })).toHaveFocus();
    await userEvent.tab();
    await waitFor(() => expect(headerAction).toHaveFocus());
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(trigger).toHaveFocus());
    await expect(page.queryByRole('dialog')).not.toBeInTheDocument();
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    showHeader: false,
    footer: undefined,
    defaultOpen: true
  }
}`,...F.parameters?.docs?.source}}}})))()}L();export{A as BodyOnly,S as Default,O as FailedConfirmation,M as FooterOnly,P as HeaderActionsKeyboardOrder,N as HeaderAndFooter,j as HeaderOnly,F as HeaderlessWithClose,k as NavigationFocus,C as OpenDialog,D as OpenTypedConfirmation,T as ScrollableWithStickyFooter,w as Sizes,E as TypedConfirmation,I as __namedExportsOrder,x as default};