import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./segmented-control-DcPaSPny.js";var r,i,a,o,s,c,l,u,d;function f(){return(f=e((()=>{t(),{expect:r,userEvent:i,within:a}=__STORYBOOK_MODULE_TEST__,o={id:`components-forms-segmentedcontrol`,title:`Components/Inputs & Selection/SegmentedControl`,component:n,tags:[`autodocs`],args:{label:`Billing interval`,options:[{value:`monthly`,label:`Monthly`},{value:`quarterly`,label:`Quarterly`},{value:`yearly`,label:`Yearly`}]}},s={},c={args:{size:`sm`}},l={args:{disabled:!0}},u={play:async({canvasElement:e})=>{let t=a(e);await i.click(t.getByRole(`radio`,{name:`Monthly`})),await i.keyboard(`{ArrowRight}`),await r(t.getByRole(`radio`,{name:`Quarterly`})).toBeChecked()}},d=[`Default`,`Compact`,`Disabled`,`KeyboardSelection`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('radio', {
      name: 'Monthly'
    }));
    await userEvent.keyboard('{ArrowRight}');
    await expect(canvas.getByRole('radio', {
      name: 'Quarterly'
    })).toBeChecked();
  }
}`,...u.parameters?.docs?.source}}}})))()}f();export{c as Compact,s as Default,l as Disabled,u as KeyboardSelection,d as __namedExportsOrder,o as default};