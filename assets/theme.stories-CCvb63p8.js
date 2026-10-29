import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{c as r,l as i,s as a}from"./iframe-C-tPoWEY.js";import{Ot as o,zt as s}from"./icon-uAOezYFl.js";import{n as c,t as l}from"./button-BYQwGwMz.js";import{n as u,t as d}from"./tag-w-9K1Il8.js";import{n as f,t as p}from"./severity-badge-DyfgzVKK.js";import{r as m,t as h}from"./theme-switching-preview-dU06MoCy.js";function g(){let[e,t]=(0,v.useState)(`Select a control to inspect its treatment.`);return(0,y.jsxs)(`main`,{className:`stack story-pad`,style:{maxWidth:1100},children:[(0,y.jsxs)(`header`,{children:[(0,y.jsx)(`p`,{className:`muted`,children:`Aegis / Foundations`}),(0,y.jsx)(`h1`,{children:`Clarity at every layer`}),(0,y.jsx)(`p`,{className:`muted`,children:`Quiet surfaces. Clear intent. Focus where it matters.`})]}),(0,y.jsx)(`div`,{className:`story-grid`,children:[{token:`surface`,label:`Surface`},{token:`surface-raised`,label:`Raised surface`},{token:`hover`,label:`Hover surface`},{token:`selected`,label:`Selected surface`}].map(({token:e,label:t})=>(0,y.jsxs)(`section`,{className:`surface`,style:{background:`var(--color-bg-${e})`},children:[(0,y.jsx)(`h2`,{style:{fontSize:`var(--text-md)`},children:t}),(0,y.jsx)(`p`,{className:`muted`,children:`Review activity and manage information across your workspace.`}),(0,y.jsx)(`span`,{className:`mono`,children:`ITEM-114 · workspace/main`})]},e))}),(0,y.jsxs)(`section`,{className:`surface stack`,children:[(0,y.jsx)(`h2`,{children:`Actions and intent`}),[`primary`,`secondary`,`tertiary`,`ghost`].map(e=>(0,y.jsx)(`div`,{className:`row`,"aria-label":`${e} actions`,children:T.map(({intent:n,label:r})=>(0,y.jsx)(l,{intent:n,emphasis:e,leadingIcon:n===`ai`?(0,y.jsx)(o,{size:15}):void 0,onClick:()=>t(`${r}: ${e} ${n} treatment selected.`),children:r},n))},e)),(0,y.jsx)(`p`,{className:`muted`,role:`status`,children:e}),(0,y.jsxs)(`div`,{className:`row`,children:[(0,y.jsx)(d,{intent:`success`,children:`Update complete`}),(0,y.jsx)(d,{intent:`warning`,children:`Review required`})]})]}),(0,y.jsxs)(`section`,{className:`surface stack`,children:[(0,y.jsx)(`h2`,{children:`Severity`}),(0,y.jsx)(`div`,{className:`row`,children:[`critical`,`high`,`medium`,`low`,`info`].map(e=>(0,y.jsx)(p,{severity:e},e))})]}),(0,y.jsxs)(`section`,{className:`surface stack`,children:[(0,y.jsx)(`h2`,{children:`Control sizes`}),(0,y.jsx)(`div`,{className:`row`,children:[`sm`,`md`,`lg`].map(e=>(0,y.jsx)(l,{size:e,emphasis:`secondary`,onClick:()=>t(`${e===`sm`?`Small`:e===`md`?`Medium`:`Large`} control selected.`),children:e===`sm`?`Small · 28px`:e===`md`?`Medium · 34px`:`Large · 40px`},e))})]}),(0,y.jsx)(`div`,{className:`story-grid`,children:[`raised`,`floating`,`overlay`].map(e=>(0,y.jsxs)(`section`,{className:`surface`,style:{boxShadow:`var(--shadow-${e})`},children:[(0,y.jsx)(`h2`,{style:{fontSize:`var(--text-md)`},children:e[0].toUpperCase()+e.slice(1)}),(0,y.jsx)(`p`,{className:`muted`,children:`Ordinary surfaces stay shadow-free; transient overlays use separate elevation.`})]},e))})]})}function _(){let[e,t]=b();return(0,y.jsx)(h,{layout:i(e.layoutTheme)??`fundamental`,onLayoutChange:e=>t({layoutTheme:e})})}var v,y,b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{v=t(),a(),s(),c(),u(),m(),f(),y=n(),{useGlobals:b}=__STORYBOOK_MODULE_PREVIEW_API__,{expect:x,userEvent:S,waitFor:C,within:w}=__STORYBOOK_MODULE_TEST__,T=[{intent:`default`,label:`View details`},{intent:`function`,label:`Create item`},{intent:`ai`,label:`Explain with AI`},{intent:`destroy`,label:`Delete draft`}],E={id:`foundations-theme`,title:`Foundations/Themes & Modes`,tags:[`!autodocs`],component:g},D={},O={globals:{layoutTheme:`fundamental`}},k={name:`Fundamental Floating`,globals:{layoutTheme:`fundamental-floating`},parameters:{docs:{description:{story:`The same light and dark colors, typography and controls, with inset floating navigation and panels. Use the sidebar appearance controls to compare light and dark modes.`}}}},A={render:_,parameters:{docs:{story:{inline:!0,autoplay:!1}}},play:async({canvasElement:e})=>{let t=w(e),n=e.ownerDocument,i=n.documentElement.dataset.layoutTheme,a=n.documentElement.dataset.theme,o=t.getByRole(`textbox`,{name:`Draft name`});await S.type(o,`Release checklist`);for(let{value:e,label:i}of r){await S.click(t.getByRole(`button`,{name:i})),await C(()=>x(n.documentElement).toHaveAttribute(`data-layout-theme`,e)),await x(o).toHaveValue(`Release checklist`),await S.click(t.getByRole(`button`,{name:`Open preview panel`}));let r=await w(n.body).findByRole(`dialog`,{name:`Preview details`});await x(w(r).getByText(`Draft: Release checklist`)).toBeVisible(),await S.keyboard(`{Escape}`),await C(()=>x(r).not.toBeInTheDocument()),await C(()=>x(t.getByRole(`button`,{name:`Open preview panel`})).toHaveFocus())}a&&await x(n.documentElement).toHaveAttribute(`data-theme`,a);let s=r.find(({value:e})=>e===i);s&&(await S.click(t.getByRole(`button`,{name:s.label})),await C(()=>x(n.documentElement).toHaveAttribute(`data-layout-theme`,s.value)))}},j=[`Overview`,`Fundamental`,`FundamentalFloating`,`Switching`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  globals: {
    layoutTheme: 'fundamental'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Fundamental Floating',
  globals: {
    layoutTheme: 'fundamental-floating'
  },
  parameters: {
    docs: {
      description: {
        story: 'The same light and dark colors, typography and controls, with inset floating navigation and panels. Use the sidebar appearance controls to compare light and dark modes.'
      }
    }
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: ThemeSwitchingStory,
  parameters: {
    docs: {
      story: {
        inline: true,
        autoplay: false
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const document = canvasElement.ownerDocument;
    const initialLayout = document.documentElement.dataset.layoutTheme;
    const initialColor = document.documentElement.dataset.theme;
    const draft = canvas.getByRole('textbox', {
      name: 'Draft name'
    });
    await userEvent.type(draft, 'Release checklist');
    for (const {
      value,
      label
    } of layoutThemeOptions) {
      await userEvent.click(canvas.getByRole('button', {
        name: label
      }));
      await waitFor(() => expect(document.documentElement).toHaveAttribute('data-layout-theme', value));
      await expect(draft).toHaveValue('Release checklist');
      await userEvent.click(canvas.getByRole('button', {
        name: 'Open preview panel'
      }));
      const panel = await within(document.body).findByRole('dialog', {
        name: 'Preview details'
      });
      await expect(within(panel).getByText('Draft: Release checklist')).toBeVisible();
      await userEvent.keyboard('{Escape}');
      await waitFor(() => expect(panel).not.toBeInTheDocument());
      await waitFor(() => expect(canvas.getByRole('button', {
        name: 'Open preview panel'
      })).toHaveFocus());
    }
    if (initialColor) await expect(document.documentElement).toHaveAttribute('data-theme', initialColor);
    const initial = layoutThemeOptions.find(({
      value
    }) => value === initialLayout);
    if (initial) {
      await userEvent.click(canvas.getByRole('button', {
        name: initial.label
      }));
      await waitFor(() => expect(document.documentElement).toHaveAttribute('data-layout-theme', initial.value));
    }
  }
}`,...A.parameters?.docs?.source}}}})))()}M();export{O as Fundamental,k as FundamentalFloating,D as Overview,A as Switching,j as __namedExportsOrder,E as default};