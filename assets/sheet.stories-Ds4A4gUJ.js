import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./sheet-iXfaiTUL.js";function a(e){let[t,n]=(0,o.useState)(!1),[r,a]=(0,o.useState)(280),c=(0,o.useRef)(null);return(0,s.jsx)(`div`,{style:{height:540,width:`100%`,maxWidth:900},children:(0,s.jsx)(i,{...e,open:t,onOpenChange:n,size:r,onSizeChange:a,restoreFocusRef:c,content:(0,s.jsxs)(`main`,{style:{padding:16},children:[(0,s.jsx)(`h2`,{children:`Project workspace`}),(0,s.jsx)(`button`,{ref:c,type:`button`,onClick:()=>n(!0),children:`Open details`}),(0,s.jsx)(`p`,{children:`Opening the sheet reduces the available workspace, without covering it.`})]})})})}var o,s,c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{o=t(),r(),s=n(),{expect:c,userEvent:l,waitFor:u,within:d}=__STORYBOOK_MODULE_TEST__,f={id:`components-overlays-sheet`,title:`Components/Surfaces/Sheet`,component:i,tags:[`autodocs`],parameters:{layout:`padded`},args:{title:`Event details`,description:`REC-1082`,content:null,children:(0,s.jsx)(`p`,{children:`The sheet follows the selected theme: flush in Fundamental and inset in Fundamental Floating. Its body scrolls independently.`}),minSize:160,maxSize:420,contentMinSize:120},render:e=>(0,s.jsx)(a,{...e})},p={},m={args:{placement:`right`}},h={args:{placement:`left`}},g={parameters:{docs:{story:{inline:!0,autoplay:!1,height:540}}},play:async({canvasElement:e})=>{let t=d(e),n=t.getByRole(`button`,{name:`Open details`});await l.click(n);let r=t.getByRole(`separator`,{name:`Resize bottom sheet`});await u(()=>c(r).toHaveAttribute(`aria-valuenow`,`280`)),r.focus(),await l.keyboard(`{ArrowUp}`),await c(r).toHaveAttribute(`aria-valuenow`,`300`),await l.keyboard(`{Shift>}{ArrowDown}{/Shift}`),await c(r).toHaveAttribute(`aria-valuenow`,`260`),await l.keyboard(`{Home}`),await c(r).toHaveAttribute(`aria-valuenow`,`160`),await l.keyboard(`{End}`),await c(r).toHaveAttribute(`aria-valuenow`,`420`),await l.keyboard(`{Escape}`),await c(t.queryByRole(`separator`)).not.toBeInTheDocument(),await u(()=>c(n).toHaveFocus())}},_=[`Bottom`,`Right`,`Left`,`ControlledKeyboardResizeAndFocus`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'right'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'left'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      story: {
        inline: true,
        autoplay: false,
        height: 540
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('button', {
      name: 'Open details'
    });
    await userEvent.click(trigger);
    const edge = canvas.getByRole('separator', {
      name: 'Resize bottom sheet'
    });
    await waitFor(() => expect(edge).toHaveAttribute('aria-valuenow', '280'));
    edge.focus();
    await userEvent.keyboard('{ArrowUp}');
    await expect(edge).toHaveAttribute('aria-valuenow', '300');
    await userEvent.keyboard('{Shift>}{ArrowDown}{/Shift}');
    await expect(edge).toHaveAttribute('aria-valuenow', '260');
    await userEvent.keyboard('{Home}');
    await expect(edge).toHaveAttribute('aria-valuenow', '160');
    await userEvent.keyboard('{End}');
    await expect(edge).toHaveAttribute('aria-valuenow', '420');
    await userEvent.keyboard('{Escape}');
    await expect(canvas.queryByRole('separator')).not.toBeInTheDocument();
    await waitFor(() => expect(trigger).toHaveFocus());
  }
}`,...g.parameters?.docs?.source}}}})))()}v();export{p as Bottom,g as ControlledKeyboardResizeAndFocus,h as Left,m as Right,_ as __namedExportsOrder,f as default};