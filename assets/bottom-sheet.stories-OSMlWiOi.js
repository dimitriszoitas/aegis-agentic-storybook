import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./button-BYQwGwMz.js";import{n as a,t as o}from"./business-app-Cz96maQ4.js";import{n as s,t as c}from"./bottom-sheet-BzhNEUwg.js";function l({children:e,...t}){let[n,r]=(0,d.useState)(!0);return(0,f.jsxs)(`div`,{className:`aegis-bottom-sheet-demo`,children:[(0,f.jsxs)(`main`,{className:`aegis-bottom-sheet-demo-content`,children:[(0,f.jsx)(`h2`,{children:`Project workspace`}),(0,f.jsx)(`p`,{children:`The panel occupies the workspace column and preserves room above it.`}),(0,f.jsx)(i,{onClick:()=>r(!0),children:`Open bottom panel`})]}),(0,f.jsx)(c,{...t,open:n,onOpenChange:r,children:e})]})}function u({layoutTheme:e,theme:t,withAi:n=!1,...r}){let[a,s]=(0,d.useState)(!0);return(0,f.jsxs)(`div`,{className:`aegis-bottom-sheet-demo`,"data-layout-theme":e,style:{height:680},children:[(0,f.jsx)(`div`,{style:{flex:1,minHeight:0,"--console-height":`100%`},children:(0,f.jsx)(o,{layoutTheme:e,theme:t,defaultAiOpen:n})}),!a&&(0,f.jsx)(i,{onClick:()=>s(!0),children:`Open project activity`}),(0,f.jsx)(c,{...r,open:a,onOpenChange:s})]})}var d,f,p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{d=t(),r(),a(),s(),f=n(),{expect:p,userEvent:m,waitFor:h,within:g}=__STORYBOOK_MODULE_TEST__,_={id:`components-overlays-bottomsheet`,title:`Components/Surfaces/BottomSheet`,component:c,tags:[`autodocs`],parameters:{layout:`fullscreen`,docs:{story:{inline:!1,height:600},description:{component:`A nonmodal, vertically resizable panel inside a bounded flex-column workspace. Fundamental Floating uses an inset and rounded corners; Fundamental sits flush. Drag the top edge, or focus it and use Up/Down (Shift for larger steps), Home and End. Optional header actions and footer stay visible while the body scrolls. Escape closes without trapping workspace focus.`}}},args:{title:`Project activity`,description:`PRJ-1082 · Customer portal redesign`,defaultOpen:!0,children:(0,f.jsx)(`div`,{className:`stack`,children:Array.from({length:16},(e,t)=>(0,f.jsxs)(`p`,{children:[(0,f.jsxs)(`code`,{children:[`10:42:`,String(t*3).padStart(2,`0`)]}),` · Milestone updated · Northstar Labs`]},t))})},render:e=>(0,f.jsx)(l,{...e})},v={},y={args:{headerActions:(0,f.jsx)(i,{emphasis:`tertiary`,size:`sm`,children:`Export`}),footer:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i,{emphasis:`ghost`,size:`sm`,children:`Copy query`}),(0,f.jsx)(i,{intent:`function`,size:`sm`,children:`Open project`})]})}},b={name:`Fundamental workspace`,render:(e,t)=>(0,f.jsx)(u,{...e,layoutTheme:`fundamental`,theme:t.globals.theme===`dark`?`dark`:`light`})},x={name:`Fundamental Floating with AI`,render:(e,t)=>(0,f.jsx)(u,{...e,layoutTheme:`fundamental-floating`,theme:t.globals.theme===`dark`?`dark`:`light`,withAi:!0}),parameters:{docs:{story:{height:680}}}},S={parameters:{docs:{story:{inline:!0,autoplay:!1,height:600}}},play:async({canvasElement:e})=>{let t=g(e),n=t.getByRole(`separator`,{name:`Resize bottom panel`});await h(()=>p(n).toHaveAttribute(`aria-valuenow`,`280`)),n.focus(),await m.keyboard(`{ArrowUp}`),await p(n).toHaveAttribute(`aria-valuenow`,`300`),await m.keyboard(`{Shift>}{ArrowDown}{/Shift}`),await p(n).toHaveAttribute(`aria-valuenow`,`260`),await m.keyboard(`{Home}`),await p(n).toHaveAttribute(`aria-valuenow`,`160`),await m.keyboard(`{End}`),await p(n).toHaveAttribute(`aria-valuenow`,n.getAttribute(`aria-valuemax`)),await m.keyboard(`{Escape}`),await p(t.queryByRole(`separator`,{name:`Resize bottom panel`})).not.toBeInTheDocument(),await m.click(t.getByRole(`button`,{name:`Open bottom panel`})),await p(t.getByRole(`separator`,{name:`Resize bottom panel`})).toBeVisible(),t.getByRole(`separator`,{name:`Resize bottom panel`}).focus(),await m.keyboard(`{Escape}`),await h(()=>p(t.getByRole(`button`,{name:`Open bottom panel`})).toHaveFocus())}},C=[`Default`,`HeaderAndFooterActions`,`FixedWorkspace`,`FloatingWithAi`,`KeyboardResize`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    headerActions: <Button emphasis="tertiary" size="sm">
        Export
      </Button>,
    footer: <>
        <Button emphasis="ghost" size="sm">
          Copy query
        </Button>
        <Button intent="function" size="sm">
          Open project
        </Button>
      </>
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Fundamental workspace',
  render: (args, context) => <ApplicationWorkspace {...args} layoutTheme="fundamental" theme={context.globals.theme === 'dark' ? 'dark' : 'light'} />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Fundamental Floating with AI',
  render: (args, context) => <ApplicationWorkspace {...args} layoutTheme="fundamental-floating" theme={context.globals.theme === 'dark' ? 'dark' : 'light'} withAi />,
  parameters: {
    docs: {
      story: {
        height: 680
      }
    }
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      story: {
        inline: true,
        autoplay: false,
        height: 600
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const edge = canvas.getByRole('separator', {
      name: 'Resize bottom panel'
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
    await expect(edge).toHaveAttribute('aria-valuenow', edge.getAttribute('aria-valuemax'));
    await userEvent.keyboard('{Escape}');
    await expect(canvas.queryByRole('separator', {
      name: 'Resize bottom panel'
    })).not.toBeInTheDocument();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Open bottom panel'
    }));
    await expect(canvas.getByRole('separator', {
      name: 'Resize bottom panel'
    })).toBeVisible();
    canvas.getByRole('separator', {
      name: 'Resize bottom panel'
    }).focus();
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(canvas.getByRole('button', {
      name: 'Open bottom panel'
    })).toHaveFocus());
  }
}`,...S.parameters?.docs?.source}}}})))()}w();export{v as Default,b as FixedWorkspace,x as FloatingWithAi,y as HeaderAndFooterActions,S as KeyboardResize,C as __namedExportsOrder,_ as default};