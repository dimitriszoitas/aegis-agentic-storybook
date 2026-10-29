import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./field-Crfqy8aH.js";import{n as a,t as o}from"./slider-D4Y5nfHT.js";var s,c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{s=t(),a(),r(),c=n(),{expect:l,userEvent:u,within:d}=__STORYBOOK_MODULE_TEST__,f=e=>`${e}%`,p={id:`components-forms-slider`,title:`Components/Inputs & Selection/Slider`,component:o,tags:[`autodocs`],args:{label:`Review threshold`,defaultValue:[65],min:0,max:100,formatValue:f},parameters:{docs:{description:{component:`Accessible Base UI slider supporting single values and ranges, horizontal/vertical orientation, form names and keyboard arrows, Page Up/Down, Home/End. Field descriptions are applied to every thumb; thumbLabels distinguish range endpoints.`}}}},m={render:()=>(0,c.jsxs)(`div`,{className:`story-grid`,children:[(0,c.jsx)(o,{label:`Review threshold`,defaultValue:[65],formatValue:f}),(0,c.jsx)(o,{label:`Confidence range`,defaultValue:[40,90],formatValue:f,minStepsBetweenThumbs:5}),(0,c.jsx)(o,{label:`Event retention`,defaultValue:[30],min:7,max:90,step:1,formatValue:e=>`${e} days`}),(0,c.jsx)(o,{label:`Managed threshold`,defaultValue:[75],formatValue:f,disabled:!0}),(0,c.jsx)(i,{label:`Review threshold`,error:`A threshold below 20% produces too many review requests.`,children:(0,c.jsx)(o,{defaultValue:[10],formatValue:f})}),(0,c.jsx)(o,{label:`Signal sensitivity`,orientation:`vertical`,defaultValue:[60],formatValue:f})]})},h={args:{label:`Confidence window`,defaultValue:[40,85],thumbLabels:[`Lower confidence`,`Upper confidence`],minStepsBetweenThumbs:5}},g={render:function(){let[e,t]=(0,s.useState)([65]);return(0,c.jsxs)(`div`,{className:`stack`,children:[(0,c.jsx)(o,{label:`Review threshold`,value:e,onValueChange:t,formatValue:f}),(0,c.jsxs)(`output`,{"aria-live":`polite`,children:[`Records scoring `,e[0],` or higher require review.`]})]})},play:async({canvasElement:e})=>{let t=d(e),n=t.getByRole(`slider`,{name:`Review threshold`});n.focus(),await u.keyboard(`{ArrowRight}`),await l(n).toHaveAttribute(`aria-valuenow`,`66`),await u.keyboard(`{End}`),await l(n).toHaveAttribute(`aria-valuenow`,`100`),await l(t.getByText(`Records scoring 100 or higher require review.`)).toBeInTheDocument()}},_=[`Matrix`,`Range`,`KeyboardAdjustment`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-grid">
      <Slider label="Review threshold" defaultValue={[65]} formatValue={percent} />
      <Slider label="Confidence range" defaultValue={[40, 90]} formatValue={percent} minStepsBetweenThumbs={5} />
      <Slider label="Event retention" defaultValue={[30]} min={7} max={90} step={1} formatValue={value => \`\${value} days\`} />
      <Slider label="Managed threshold" defaultValue={[75]} formatValue={percent} disabled />
      <Field label="Review threshold" error="A threshold below 20% produces too many review requests.">
        <Slider defaultValue={[10]} formatValue={percent} />
      </Field>
      <Slider label="Signal sensitivity" orientation="vertical" defaultValue={[60]} formatValue={percent} />
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Confidence window',
    defaultValue: [40, 85],
    thumbLabels: ['Lower confidence', 'Upper confidence'],
    minStepsBetweenThumbs: 5
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function ControlledThreshold() {
    const [value, setValue] = useState([65]);
    return <div className="stack">
        <Slider label="Review threshold" value={value} onValueChange={setValue} formatValue={percent} />
        <output aria-live="polite">Records scoring {value[0]} or higher require review.</output>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const thumb = canvas.getByRole('slider', {
      name: 'Review threshold'
    });
    thumb.focus();
    await userEvent.keyboard('{ArrowRight}');
    await expect(thumb).toHaveAttribute('aria-valuenow', '66');
    await userEvent.keyboard('{End}');
    await expect(thumb).toHaveAttribute('aria-valuenow', '100');
    await expect(canvas.getByText('Records scoring 100 or higher require review.')).toBeInTheDocument();
  }
}`,...g.parameters?.docs?.source}}}})))()}v();export{g as KeyboardAdjustment,m as Matrix,h as Range,_ as __namedExportsOrder,p as default};