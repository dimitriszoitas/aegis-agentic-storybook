import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./button-BYQwGwMz.js";import{i as a,n as o,r as s,t as c}from"./side-sheet-jwr9wwGk.js";import{n as l,t as u}from"./severity-badge-DyfgzVKK.js";function d(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(s,{title:`Record details`,children:[(0,h.jsx)(o,{label:`Severity`,children:(0,h.jsx)(u,{severity:`high`})}),(0,h.jsx)(o,{label:`Status`,children:`Needs review`}),(0,h.jsx)(o,{label:`Project ID`,children:(0,h.jsx)(`code`,{children:`PRJ-0042`})}),(0,h.jsx)(o,{label:`Category`,children:`Customer experience`}),(0,h.jsx)(o,{label:`Created`,children:(0,h.jsx)(`code`,{children:`2026-06-18 09:42:16 UTC`})}),(0,h.jsx)(o,{label:`Assigned member`,children:`Maya Chen`})]}),(0,h.jsx)(s,{title:`Project summary`,children:(0,h.jsx)(`p`,{children:`The customer portal redesign includes updated onboarding, account settings, and billing. Review the latest requirements and delivery plan before completing this project.`})})]})}function f(){let[e,t]=(0,m.useState)(5);return(0,h.jsx)(c,{...x.args,defaultOpen:!0,position:e,total:48,onPrevious:()=>t(e=>Math.max(1,e-1)),onNext:()=>t(e=>Math.min(48,e+1)),actions:(0,h.jsx)(i,{size:`sm`,emphasis:`ghost`,children:`Open project`})})}function p(){let[e,t]=(0,m.useState)(!0);return(0,h.jsxs)(`div`,{style:{height:600,display:`flex`,background:`var(--color-bg-canvas)`,border:`1px solid var(--color-border-subtle)`,borderRadius:`var(--radius-xl)`,overflow:`hidden`},children:[(0,h.jsxs)(`main`,{style:{flex:1,minWidth:0,padding:`var(--space-5)`},children:[(0,h.jsx)(`h2`,{children:`Records workspace`}),(0,h.jsx)(`p`,{style:{color:`var(--color-text-secondary)`,marginBlock:`var(--space-4)`},children:`The details panel uses layout space while the records remain interactive.`}),(0,h.jsxs)(i,{onClick:()=>t(!e),children:[e?`Close`:`Open`,` docked details`]})]}),(0,h.jsx)(c,{...x.args,trigger:void 0,open:e,onOpenChange:t,docked:!0,size:`sm`})]})}var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F;function I(){return(I=e((()=>{m=t(),r(),l(),a(),h=n(),g=t(),{expect:_,userEvent:v,waitFor:y,within:b}=__STORYBOOK_MODULE_TEST__,x={id:`components-overlays-sidesheet`,title:`Components/Surfaces/SideSheet`,component:c,subcomponents:{SideSheetSection:s,SideSheetField:o},parameters:{docs:{description:{component:"The title and close control share the first header row. Optional `headerActions` appear below alongside result navigation; `actions` remains a compatible alias. Optional `footer` actions remain visible outside the scrollable body. Fundamental and Fundamental Floating share the same content and interactions."},story:{inline:!1,height:600}}},tags:[`autodocs`],args:{title:`Customer portal redesign`,description:`REC-00842 · Customer project`,trigger:(0,h.jsx)(i,{children:`Open record details`}),children:(0,h.jsx)(d,{}),footer:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(i,{emphasis:`ghost`,children:`Assign member`}),(0,h.jsx)(i,{intent:`function`,children:`Mark as reviewed`})]})}},S={},C={args:{defaultOpen:!0}},w={argTypes:{size:{control:!1},trigger:{control:!1}},render:e=>(0,h.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`var(--space-3)`},children:[`sm`,`md`,`lg`].map(t=>(0,g.createElement)(c,{...e,key:t,size:t,trigger:(0,h.jsxs)(i,{children:[t,` detail panel`]})}))})},T={render:()=>(0,h.jsx)(f,{})},E={render:()=>(0,h.jsx)(p,{}),parameters:{layout:`fullscreen`}},D={args:{defaultOpen:!0,headerActions:(0,h.jsx)(i,{emphasis:`secondary`,size:`sm`,children:`Assign member`}),footer:void 0}},O={args:{defaultOpen:!0}},k={args:{defaultOpen:!0,headerActions:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(i,{emphasis:`tertiary`,size:`sm`,children:`Assign member`}),(0,h.jsx)(i,{emphasis:`secondary`,size:`sm`,children:`Open project`})]})}},A={args:{defaultOpen:!0,title:`Customer portal redesign with updated onboarding requirements for the Northstar enterprise account`,headerActions:(0,h.jsx)(i,{emphasis:`secondary`,size:`sm`,children:`Assign member`})}},j={name:`Fundamental Floating sheet`,globals:{layoutTheme:`fundamental-floating`},args:{defaultOpen:!0}},M={name:`Fundamental sheet`,globals:{layoutTheme:`fundamental`},args:{defaultOpen:!0}},N={args:{title:`A long record title that wraps while the close button stays beside the first line`,headerActions:(0,h.jsx)(i,{emphasis:`secondary`,size:`sm`,children:`Assign member`}),children:(0,h.jsx)(h.Fragment,{children:Array.from({length:5},(e,t)=>(0,h.jsx)(d,{},t))})},play:async({canvasElement:e})=>{let t=b(e),n=b(e.ownerDocument.body),r=t.getByRole(`button`,{name:`Open record details`});await v.click(r);let i=await n.findByRole(`dialog`),a=i.querySelector(`.aegis-sheet-title`),o=n.getByRole(`button`,{name:`Close detail panel`});_(Math.abs(a.getBoundingClientRect().top-o.getBoundingClientRect().top)).toBeLessThan(1);let s=i.querySelector(`.aegis-sheet-header`),c=i.querySelector(`.aegis-sheet-body`),l=s.getBoundingClientRect().top;c.scrollTop=c.scrollHeight,await y(()=>_(c.scrollTop).toBeGreaterThan(0)),_(s.getBoundingClientRect().top).toBe(l),o.focus(),await v.keyboard(`{Enter}`),await y(()=>_(r).toHaveFocus())}},P={args:{resizable:!0},parameters:{docs:{description:{story:`Pointer opening focuses the close control without a ring or persistent resize highlight. Keyboard navigation reveals focus, and the resize separator supports arrows, Home, and End.`}}},play:async({canvasElement:e})=>{let t=b(e),n=b(e.ownerDocument.body),r=t.getByRole(`button`,{name:`Open record details`});await v.click(r);let i=await n.findByRole(`button`,{name:`Close detail panel`}),a=n.getByRole(`separator`,{name:`Resize side panel`});await y(()=>_(i).toHaveFocus()),_(getComputedStyle(i).outlineStyle).toBe(`none`),_(getComputedStyle(a,`::after`).backgroundColor).toBe(`rgba(0, 0, 0, 0)`),await v.tab({shift:!0}),await _(a).toHaveFocus(),_(getComputedStyle(a,`::after`).backgroundColor).not.toBe(`rgba(0, 0, 0, 0)`),await v.keyboard(`{Home}`),await y(()=>_(a.getAttribute(`aria-valuenow`)).toBe(a.getAttribute(`aria-valuemin`))),await v.keyboard(`{ArrowLeft}`),await y(()=>_(Number(a.getAttribute(`aria-valuenow`))).toBeGreaterThan(Number(a.getAttribute(`aria-valuemin`)))),await v.keyboard(`{End}`),await y(()=>_(a.getAttribute(`aria-valuenow`)).toBe(a.getAttribute(`aria-valuemax`))),await v.keyboard(`{Escape}`),await y(()=>_(r).toHaveFocus()),await v.keyboard(`{Enter}`);let o=await n.findByRole(`button`,{name:`Close detail panel`});await y(()=>_(o).toHaveFocus()),_(getComputedStyle(o).outlineStyle).toBe(`solid`),await v.keyboard(`{Escape}`),await y(()=>_(r).toHaveFocus())}},F=[`Default`,`OpenSheet`,`SizeMatrix`,`RecordNavigation`,`DockedPushLayout`,`HeaderActions`,`FooterActions`,`HeaderAndFooterActions`,`LongTitle`,`FloatingSheet`,`FixedSheet`,`HeaderAlignmentAndClose`,`ResizeFocus`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
      {(['sm', 'md', 'lg'] as const).map(size => <SideSheet {...args} key={size} size={size} trigger={<Button>{size} detail panel</Button>} />)}
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <ReviewExample />
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <DockedExample />,
  parameters: {
    layout: 'fullscreen'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: true,
    headerActions: <Button emphasis="secondary" size="sm">
        Assign member
      </Button>,
    footer: undefined
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: true
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: true,
    headerActions: <>
        <Button emphasis="tertiary" size="sm">
          Assign member
        </Button>
        <Button emphasis="secondary" size="sm">
          Open project
        </Button>
      </>
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: true,
    title: 'Customer portal redesign with updated onboarding requirements for the Northstar enterprise account',
    headerActions: <Button emphasis="secondary" size="sm">
        Assign member
      </Button>
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Fundamental Floating sheet',
  globals: {
    layoutTheme: 'fundamental-floating'
  },
  args: {
    defaultOpen: true
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Fundamental sheet',
  globals: {
    layoutTheme: 'fundamental'
  },
  args: {
    defaultOpen: true
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'A long record title that wraps while the close button stays beside the first line',
    headerActions: <Button emphasis="secondary" size="sm">
        Assign member
      </Button>,
    children: <>
        {Array.from({
        length: 5
      }, (_, index) => <RecordFields key={index} />)}
      </>
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement),
      page = within(canvasElement.ownerDocument.body);
    const trigger = canvas.getByRole('button', {
      name: 'Open record details'
    });
    await userEvent.click(trigger);
    const dialog = await page.findByRole('dialog');
    const title = dialog.querySelector<HTMLElement>('.aegis-sheet-title')!;
    const close = page.getByRole('button', {
      name: 'Close detail panel'
    });
    expect(Math.abs(title.getBoundingClientRect().top - close.getBoundingClientRect().top)).toBeLessThan(1);
    const header = dialog.querySelector<HTMLElement>('.aegis-sheet-header')!;
    const scroll = dialog.querySelector<HTMLElement>('.aegis-sheet-body')!;
    const top = header.getBoundingClientRect().top;
    scroll.scrollTop = scroll.scrollHeight;
    await waitFor(() => expect(scroll.scrollTop).toBeGreaterThan(0));
    expect(header.getBoundingClientRect().top).toBe(top);
    close.focus();
    await userEvent.keyboard('{Enter}');
    await waitFor(() => expect(trigger).toHaveFocus());
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    resizable: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Pointer opening focuses the close control without a ring or persistent resize highlight. Keyboard navigation reveals focus, and the resize separator supports arrows, Home, and End.'
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const page = within(canvasElement.ownerDocument.body);
    const trigger = canvas.getByRole('button', {
      name: 'Open record details'
    });
    await userEvent.click(trigger);
    const close = await page.findByRole('button', {
      name: 'Close detail panel'
    });
    const separator = page.getByRole('separator', {
      name: 'Resize side panel'
    });
    await waitFor(() => expect(close).toHaveFocus());
    expect(getComputedStyle(close).outlineStyle).toBe('none');
    expect(getComputedStyle(separator, '::after').backgroundColor).toBe('rgba(0, 0, 0, 0)');
    await userEvent.tab({
      shift: true
    });
    await expect(separator).toHaveFocus();
    expect(getComputedStyle(separator, '::after').backgroundColor).not.toBe('rgba(0, 0, 0, 0)');
    await userEvent.keyboard('{Home}');
    await waitFor(() => expect(separator.getAttribute('aria-valuenow')).toBe(separator.getAttribute('aria-valuemin')));
    await userEvent.keyboard('{ArrowLeft}');
    await waitFor(() => expect(Number(separator.getAttribute('aria-valuenow'))).toBeGreaterThan(Number(separator.getAttribute('aria-valuemin'))));
    await userEvent.keyboard('{End}');
    await waitFor(() => expect(separator.getAttribute('aria-valuenow')).toBe(separator.getAttribute('aria-valuemax')));
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(trigger).toHaveFocus());
    await userEvent.keyboard('{Enter}');
    const keyboardClose = await page.findByRole('button', {
      name: 'Close detail panel'
    });
    await waitFor(() => expect(keyboardClose).toHaveFocus());
    expect(getComputedStyle(keyboardClose).outlineStyle).toBe('solid');
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(trigger).toHaveFocus());
  }
}`,...P.parameters?.docs?.source}}}})))()}I();export{S as Default,E as DockedPushLayout,M as FixedSheet,j as FloatingSheet,O as FooterActions,D as HeaderActions,N as HeaderAlignmentAndClose,k as HeaderAndFooterActions,A as LongTitle,C as OpenSheet,T as RecordNavigation,P as ResizeFocus,w as SizeMatrix,F as __namedExportsOrder,x as default};