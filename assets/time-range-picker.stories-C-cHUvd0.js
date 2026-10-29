import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./field-DAWuKTUB.js";import{i as a,n as o,r as s}from"./time-range-Cn9BauVD.js";import{n as c,t as l}from"./time-range-picker-DAG0mE_L.js";function u(){let[e,t]=(0,d.useState)({mode:`relative`,preset:`24h`}),n=s(e,v);return(0,f.jsxs)(`div`,{className:`stack`,children:[(0,f.jsx)(l,{value:e,onValueChange:t,now:v}),(0,f.jsxs)(`p`,{className:`mono muted`,children:[n.from.toISOString(),` → `,n.to.toISOString()]})]})}var d,f,p,m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{d=t(),c(),r(),o(),f=n(),{expect:p,userEvent:m,waitFor:h,within:g}=__STORYBOOK_MODULE_TEST__,_={id:`components-forms-timerangepicker`,title:`Components/Inputs & Selection/TimeRangePicker`,component:l,parameters:{docs:{story:{inline:!1,height:600}}}},v=Date.UTC(2026,9,6,12),y={render:()=>(0,f.jsxs)(`div`,{className:`stack`,children:[a.map(e=>(0,f.jsx)(l,{value:{mode:`relative`,preset:e.value},now:v},e.value)),(0,f.jsx)(l,{value:{mode:`absolute`,from:`2026-10-05T10:00:00Z`,to:`2026-10-06T12:00:00Z`},now:v})]})},b={render:()=>(0,f.jsx)(u,{})},x={args:{defaultOpen:!0,now:v,defaultValue:{mode:`absolute`,from:`2026-10-05T08:30:00Z`,to:`2026-10-06T12:00:00Z`}},play:async({canvasElement:e})=>{let t=g(e.ownerDocument.body),n=await t.findByRole(`dialog`,{name:`Time range`}),r=n.querySelector(`.aegis-popover-body`),i=n.querySelectorAll(`.rdp-weekday`);await h(()=>p(r.scrollWidth).toBeLessThanOrEqual(r.clientWidth)),p(i).toHaveLength(7),p(i[0].getBoundingClientRect().left).toBeGreaterThanOrEqual(r.getBoundingClientRect().left),p(i[6].getBoundingClientRect().right).toBeLessThanOrEqual(r.getBoundingClientRect().right);let a=t.getByRole(`button`,{name:`Apply range`}),o=a.getBoundingClientRect().top;r.scrollTop=r.scrollHeight,p(a.getBoundingClientRect().top).toBe(o),await p(a).toBeVisible(),r.scrollTop=0}},S={args:{defaultOpen:!0,now:v}},C={render:function(){let[e,t]=(0,d.useState)({mode:`relative`,preset:`24h`});return(0,f.jsxs)(`div`,{className:`story-grid`,children:[(0,f.jsx)(i,{label:`Project window`,required:!0,helpText:`Limits the events included in this project.`,error:e.mode===`relative`&&e.preset===`24h`?`Choose the last hour for current project review.`:void 0,children:(0,f.jsx)(l,{value:e,onValueChange:t,now:v})}),(0,f.jsx)(i,{label:`Archived reporting window`,disabled:!0,helpText:`This completed report has a fixed scope.`,children:(0,f.jsx)(l,{defaultValue:{mode:`relative`,preset:`7d`},now:v})})]})},play:async({canvasElement:e})=>{let t=g(e),n=g(e.ownerDocument.body),r=t.getByRole(`button`,{name:`Project window (required)`});await p(r).toHaveAttribute(`aria-invalid`,`true`),await p(r).toHaveAccessibleDescription(/Limits the events included in this project/),await p(r).toHaveAccessibleDescription(/Choose the last hour/),await p(t.getByRole(`button`,{name:`Archived reporting window`})).toBeDisabled(),r.focus(),await m.keyboard(`{Enter}`),await m.click(await n.findByRole(`button`,{name:`Last hour`})),await h(()=>p(r).toHaveFocus()),await p(r).toHaveTextContent(`Last 1h`),await p(r).toHaveAttribute(`aria-invalid`,`false`),await p(r).toHaveAccessibleDescription(`Limits the events included in this project. Last 1h`)}},w=[`Matrix`,`Interactive`,`CustomCalendar`,`Presets`,`FieldComposition`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="stack">
      {timePresets.map(p => <TimeRangePicker key={p.value} value={{
      mode: 'relative',
      preset: p.value
    }} now={now} />)}
      <TimeRangePicker value={{
      mode: 'absolute',
      from: '2026-10-05T10:00:00Z',
      to: '2026-10-06T12:00:00Z'
    }} now={now} />
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <LinkedRange />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: true,
    now,
    defaultValue: {
      mode: 'absolute',
      from: '2026-10-05T08:30:00Z',
      to: '2026-10-06T12:00:00Z'
    }
  },
  play: async ({
    canvasElement
  }) => {
    const portal = within(canvasElement.ownerDocument.body);
    const dialog = await portal.findByRole('dialog', {
      name: 'Time range'
    });
    const body = dialog.querySelector<HTMLElement>('.aegis-popover-body')!;
    const days = dialog.querySelectorAll<HTMLElement>('.rdp-weekday');
    await waitFor(() => expect(body.scrollWidth).toBeLessThanOrEqual(body.clientWidth));
    expect(days).toHaveLength(7);
    expect(days[0].getBoundingClientRect().left).toBeGreaterThanOrEqual(body.getBoundingClientRect().left);
    expect(days[6].getBoundingClientRect().right).toBeLessThanOrEqual(body.getBoundingClientRect().right);
    const apply = portal.getByRole('button', {
      name: 'Apply range'
    });
    const top = apply.getBoundingClientRect().top;
    body.scrollTop = body.scrollHeight;
    expect(apply.getBoundingClientRect().top).toBe(top);
    await expect(apply).toBeVisible();
    body.scrollTop = 0;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: true,
    now
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function FieldRanges() {
    const [value, setValue] = useState<TimeRange>({
      mode: 'relative',
      preset: '24h'
    });
    return <div className="story-grid">
        <Field label="Project window" required helpText="Limits the events included in this project." error={value.mode === 'relative' && value.preset === '24h' ? 'Choose the last hour for current project review.' : undefined}>
          <TimeRangePicker value={value} onValueChange={setValue} now={now} />
        </Field>
        <Field label="Archived reporting window" disabled helpText="This completed report has a fixed scope.">
          <TimeRangePicker defaultValue={{
          mode: 'relative',
          preset: '7d'
        }} now={now} />
        </Field>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const portal = within(canvasElement.ownerDocument.body);
    const trigger = canvas.getByRole('button', {
      name: 'Project window (required)'
    });
    await expect(trigger).toHaveAttribute('aria-invalid', 'true');
    await expect(trigger).toHaveAccessibleDescription(/Limits the events included in this project/);
    await expect(trigger).toHaveAccessibleDescription(/Choose the last hour/);
    await expect(canvas.getByRole('button', {
      name: 'Archived reporting window'
    })).toBeDisabled();
    trigger.focus();
    await userEvent.keyboard('{Enter}');
    await userEvent.click(await portal.findByRole('button', {
      name: 'Last hour'
    }));
    await waitFor(() => expect(trigger).toHaveFocus());
    await expect(trigger).toHaveTextContent('Last 1h');
    await expect(trigger).toHaveAttribute('aria-invalid', 'false');
    await expect(trigger).toHaveAccessibleDescription('Limits the events included in this project. Last 1h');
  }
}`,...C.parameters?.docs?.source}}}})))()}T();export{x as CustomCalendar,C as FieldComposition,b as Interactive,y as Matrix,S as Presets,w as __namedExportsOrder,_ as default};