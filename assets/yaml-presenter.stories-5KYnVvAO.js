import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{r as n,t as r}from"./rules-Cqnb58RU.js";import{n as i,t as a}from"./yaml-presenter-Djs9lTKl.js";var o,s,c,l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{r(),i(),o=t(),{expect:s,fn:c,userEvent:l,waitFor:u,within:d}=__STORYBOOK_MODULE_TEST__,f={id:`components-code-yamlpresenter`,title:`Components/Code/YamlPresenter`,component:a,args:{value:n[2].yaml,filename:`invoice-follow-up.yml`,maxHeight:440,onCopy:c()}},p={},m={args:{highlightedLines:[{from:10,to:14},{from:18,to:19}]}},h={args:{filename:`workflows/billing/production/invoice-follow-up-and-owner-notification.yml`,maxHeight:280},decorators:[e=>(0,o.jsx)(`div`,{style:{maxWidth:480},children:(0,o.jsx)(e,{})})]},g={args:{value:``,filename:`new-workflow.yml`,minHeight:120}},_={play:async({canvasElement:e})=>{let t=d(e);await l.click(t.getByRole(`button`,{name:`Fold all YAML sections`}));let n=await t.findAllByRole(`button`,{name:`Expand folded code`});await l.click(n[0]),await s(t.getByRole(`textbox`,{name:`invoice-follow-up.yml source`})).toHaveFocus(),await l.click(t.getByRole(`button`,{name:`Unfold all YAML sections`})),await u(()=>s(t.queryAllByRole(`button`,{name:`Expand folded code`})).toHaveLength(0));let r=t.getByRole(`textbox`,{name:`invoice-follow-up.yml source`});await l.click(r),await l.keyboard(`accidental edit`),await s(r).not.toHaveTextContent(`accidental edit`)}},v=[`Default`,`HighlightedConfiguration`,`LongFilename`,`Empty`,`FoldingAndReadOnly`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    highlightedLines: [{
      from: 10,
      to: 14
    }, {
      from: 18,
      to: 19
    }]
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    filename: 'workflows/billing/production/invoice-follow-up-and-owner-notification.yml',
    maxHeight: 280
  },
  decorators: [Story => <div style={{
    maxWidth: 480
  }}>
        <Story />
      </div>]
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    value: '',
    filename: 'new-workflow.yml',
    minHeight: 120
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Fold all YAML sections'
    }));
    const folded = await canvas.findAllByRole('button', {
      name: 'Expand folded code'
    });
    await userEvent.click(folded[0]);
    await expect(canvas.getByRole('textbox', {
      name: 'invoice-follow-up.yml source'
    })).toHaveFocus();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Unfold all YAML sections'
    }));
    await waitFor(() => expect(canvas.queryAllByRole('button', {
      name: 'Expand folded code'
    })).toHaveLength(0));
    const editor = canvas.getByRole('textbox', {
      name: 'invoice-follow-up.yml source'
    });
    await userEvent.click(editor);
    await userEvent.keyboard('accidental edit');
    await expect(editor).not.toHaveTextContent('accidental edit');
  }
}`,..._.parameters?.docs?.source}}}})))()}y();export{p as Default,g as Empty,_ as FoldingAndReadOnly,m as HighlightedConfiguration,h as LongFilename,v as __namedExportsOrder,f as default};