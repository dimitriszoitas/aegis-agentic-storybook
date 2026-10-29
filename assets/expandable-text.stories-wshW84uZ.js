import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./button-BpCMuPJ8.js";import{n as a,t as o}from"./expandable-text-DWkrqmTd.js";var s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{s=t(),r(),a(),c=n(),{expect:l,userEvent:u,waitFor:d,within:f}=__STORYBOOK_MODULE_TEST__,p=`The customer portal redesign brings onboarding, account settings, and billing into one workspace. The first milestone includes updated navigation and a clearer project overview. Review the proposed flow with the customer team before scheduling implementation. Compare the designs with the agreed requirements, confirm accessibility and content responsibilities, and record the next steps in the project brief so everyone can follow the decision.`,m={id:`components-content-expandabletext`,title:`Components/Data Display/ExpandableText`,component:o,parameters:{docs:{description:{component:`A configurable line-clamped text preview. The disclosure appears only when measured content exceeds the collapsed line limit, including after resizing or font loading. Plain-text content stays readable to assistive technology. Use expanded/onExpandedChange for controlled state, or defaultExpanded for an initial expanded view.`}}},decorators:[e=>(0,c.jsx)(`div`,{style:{width:`min(100%, 420px)`},children:(0,c.jsx)(e,{})})],args:{children:p,collapsedLines:3}},h={},g={args:{collapsedLines:1}},_={args:{collapsedLines:5}},v={args:{children:`No additional details was found.`},play:async({canvasElement:e})=>{await l(f(e).queryByRole(`button`,{name:`Read more`})).toBeNull()}},y={args:{defaultExpanded:!0}},b={args:{expandLabel:`Read full details`,collapseLabel:`Collapse details`}},x={play:async({canvasElement:e})=>{let t=await f(e).findByRole(`button`,{name:`Read more`}),n=e.ownerDocument.getElementById(t.getAttribute(`aria-controls`)),r=n.getBoundingClientRect().height;t.focus(),await u.keyboard(`{Enter}`),await l(t).toHaveAttribute(`aria-expanded`,`true`),await l(t).toHaveAccessibleName(`Read less`),l(n.getBoundingClientRect().height).toBeGreaterThan(r),await u.keyboard(` `),await l(t).toHaveAttribute(`aria-expanded`,`false`),await l(t).toHaveFocus(),l(n.getBoundingClientRect().height).toBe(r)}},S={render:function(e){let[t,n]=(0,s.useState)(!1),[r,a]=(0,s.useState)(!1);return(0,c.jsxs)(`div`,{className:`stack`,children:[(0,c.jsxs)(`div`,{className:`row`,children:[(0,c.jsx)(i,{emphasis:`secondary`,onClick:()=>n(!t),children:`Toggle externally`}),(0,c.jsx)(i,{emphasis:`secondary`,onClick:()=>a(!r),children:`Change text length`})]}),(0,c.jsx)(o,{...e,expanded:t,onExpandedChange:n,children:r?`Project review complete.`:p})]})},play:async({canvasElement:e})=>{let t=f(e);await u.click(t.getByRole(`button`,{name:`Toggle externally`})),await l(t.getByRole(`button`,{name:`Read less`})).toHaveAttribute(`aria-expanded`,`true`),await u.click(t.getByRole(`button`,{name:`Change text length`})),await d(()=>l(t.queryByRole(`button`,{name:`Read less`})).toBeNull()),await u.click(t.getByRole(`button`,{name:`Change text length`})),await l(t.getByRole(`button`,{name:`Read less`})).toBeVisible()}},C=[`Default`,`OneLine`,`FiveLines`,`ShortText`,`InitiallyExpanded`,`CustomLabels`,`KeyboardDisclosure`,`Controlled`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    collapsedLines: 1
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    collapsedLines: 5
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'No additional details was found.'
  },
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).queryByRole('button', {
      name: 'Read more'
    })).toBeNull();
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    defaultExpanded: true
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    expandLabel: 'Read full details',
    collapseLabel: 'Collapse details'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const toggle = await canvas.findByRole('button', {
      name: 'Read more'
    });
    const content = canvasElement.ownerDocument.getElementById(toggle.getAttribute('aria-controls')!)!;
    const collapsedHeight = content.getBoundingClientRect().height;
    toggle.focus();
    await userEvent.keyboard('{Enter}');
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
    await expect(toggle).toHaveAccessibleName('Read less');
    expect(content.getBoundingClientRect().height).toBeGreaterThan(collapsedHeight);
    await userEvent.keyboard(' ');
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await expect(toggle).toHaveFocus();
    expect(content.getBoundingClientRect().height).toBe(collapsedHeight);
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function ControlledExample(args) {
    const [expanded, setExpanded] = useState(false);
    const [short, setShort] = useState(false);
    return <div className="stack">
        <div className="row">
          <Button emphasis="secondary" onClick={() => setExpanded(!expanded)}>
            Toggle externally
          </Button>
          <Button emphasis="secondary" onClick={() => setShort(!short)}>
            Change text length
          </Button>
        </div>
        <ExpandableText {...args} expanded={expanded} onExpandedChange={setExpanded}>
          {short ? 'Project review complete.' : project}
        </ExpandableText>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Toggle externally'
    }));
    await expect(canvas.getByRole('button', {
      name: 'Read less'
    })).toHaveAttribute('aria-expanded', 'true');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Change text length'
    }));
    await waitFor(() => expect(canvas.queryByRole('button', {
      name: 'Read less'
    })).toBeNull());
    await userEvent.click(canvas.getByRole('button', {
      name: 'Change text length'
    }));
    await expect(canvas.getByRole('button', {
      name: 'Read less'
    })).toBeVisible();
  }
}`,...S.parameters?.docs?.source}}}})))()}w();export{S as Controlled,b as CustomLabels,h as Default,_ as FiveLines,y as InitiallyExpanded,x as KeyboardDisclosure,g as OneLine,v as ShortText,C as __namedExportsOrder,m as default};