import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./chart-metric-card-CYCh_t1A.js";var a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{r(),a=t(),o=n(),{expect:s,userEvent:c,waitFor:l,within:u}=__STORYBOOK_MODULE_TEST__,d=[10100,9300,9900,6100,7e3,9700,9700].map((e,t)=>({label:`Oct ${15+t}`,value:e})),f=d.reduce((e,t)=>e+t.value,0),p={id:`components-charts-chart-metric-card`,title:`Components/Data Visualization/Chart metric card`,component:i,tags:[`autodocs`],args:{label:`Processed records`,metric:f,data:d,delta:364.3,period:`in past 7d`,trendIsPositive:!0,variant:`bar`},argTypes:{variant:{control:`inline-radio`,options:[`bar`,`area`,`compact`]},trendIsPositive:{description:`Explicit desirability of the change. Omit for neutral styling; a volume increase is not inherently good.`}},parameters:{docs:{description:{component:`A summary metric and its underlying series in one card. Bar and area variants retain the shared chart keyboard inspection and tooltips. Compact bars are a static overview; every variant exposes an exact data table. The latest readout comes from the final supplied interval. Example values are illustrative, sum to 61,800, and end at 9,700 on Oct 21; the +364.3% comparison is supplied separately. The example explicitly marks that comparison favorable for presentation, not as a business performance assessment.`}}}},m={args:{style:{maxWidth:760}}},h={args:{variant:`area`,style:{maxWidth:760}}},g={args:{variant:`compact`,style:{maxWidth:520}}},_={argTypes:{variant:{control:!1}},render:e=>(0,o.jsx)(`div`,{className:`aegis-chart-metric-showcase`,children:[`bar`,`area`,`compact`].map(t=>(0,a.createElement)(i,{...e,key:t,variant:t}))})},v={args:{trendIsPositive:void 0,style:{maxWidth:760}}},y={args:{data:[],metric:`—`,delta:void 0,style:{maxWidth:760}}},b={args:{style:{maxWidth:760}},parameters:{docs:{story:{inline:!0,autoplay:!1}}},play:async({canvasElement:e})=>{let t=u(e);await s(t.getByText(`61.8K`)).toBeVisible(),await s(t.getByText(`9.7K`)).toBeVisible(),t.getByRole(`application`,{name:/Processed records by interval/}).focus(),await c.keyboard(`{ArrowRight}`),await l(()=>s(e.querySelector(`.aegis-chart-tooltip`)).toBeVisible());let n=t.getByText(`View chart data`);await c.click(n),await l(()=>s(n.closest(`details`)).toHaveAttribute(`open`));let r=t.getByRole(`table`,{name:`Processed records by interval`}),i=u(r).getAllByRole(`cell`).map(e=>Number(e.textContent));await s(i.reduce((e,t)=>e+t,0)).toBe(61800),await l(()=>s(u(r).getByRole(`row`,{name:`Oct 21 9700`})).toBeVisible())}},x=[`StandardBar`,`AreaTrend`,`CompactBar`,`CombinedShowcase`,`NeutralChange`,`Empty`,`KeyboardAndExactData`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    style: {
      maxWidth: 760
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'area',
    style: {
      maxWidth: 760
    }
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'compact',
    style: {
      maxWidth: 520
    }
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  argTypes: {
    variant: {
      control: false
    }
  },
  render: args => <div className="aegis-chart-metric-showcase">
      {(['bar', 'area', 'compact'] as const).map(variant => <ChartMetricCard {...args} key={variant} variant={variant} />)}
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    trendIsPositive: undefined,
    style: {
      maxWidth: 760
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    data: [],
    metric: '—',
    delta: undefined,
    style: {
      maxWidth: 760
    }
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    style: {
      maxWidth: 760
    }
  },
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
    await expect(canvas.getByText('61.8K')).toBeVisible();
    await expect(canvas.getByText('9.7K')).toBeVisible();
    const plot = canvas.getByRole('application', {
      name: /Processed records by interval/
    });
    plot.focus();
    await userEvent.keyboard('{ArrowRight}');
    await waitFor(() => expect(canvasElement.querySelector('.aegis-chart-tooltip')).toBeVisible());
    const summary = canvas.getByText('View chart data');
    await userEvent.click(summary);
    await waitFor(() => expect(summary.closest('details')).toHaveAttribute('open'));
    const table = canvas.getByRole('table', {
      name: 'Processed records by interval'
    });
    const values = within(table).getAllByRole('cell').map(cell => Number(cell.textContent));
    await expect(values.reduce((sum, value) => sum + value, 0)).toBe(61800);
    await waitFor(() => expect(within(table).getByRole('row', {
      name: 'Oct 21 9700'
    })).toBeVisible());
  }
}`,...b.parameters?.docs?.source}}}})))()}S();export{h as AreaTrend,_ as CombinedShowcase,g as CompactBar,y as Empty,b as KeyboardAndExactData,v as NeutralChange,m as StandardBar,x as __namedExportsOrder,p as default};