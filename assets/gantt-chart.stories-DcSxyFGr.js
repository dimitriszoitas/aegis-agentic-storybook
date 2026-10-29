import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./gantt-chart-Ck8pAcDP.js";var a,o,s,c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{a=t(),r(),o=n(),{expect:s,userEvent:c,within:l}=__STORYBOOK_MODULE_TEST__,u=[{id:`research`,label:`Customer research`,start:`2026-10-05`,end:`2026-10-09`,progress:100,owner:`Maya Chen`,intent:`success`},{id:`design`,label:`Design exploration`,start:`2026-10-12`,end:`2026-10-23`,progress:80,owner:`Alex Morgan`,dependencies:[`research`],intent:`ai`},{id:`review`,label:`Design approval`,start:`2026-10-26`,end:`2026-10-26`,milestone:!0,dependencies:[`design`],intent:`warning`},{id:`build`,label:`Implementation`,start:`2026-10-27`,end:`2026-11-13`,progress:15,owner:`Jordan Lee`,dependencies:[`review`]},{id:`test`,label:`Acceptance testing`,start:`2026-11-16`,end:`2026-11-20`,progress:0,dependencies:[`build`],intent:`warning`},{id:`launch`,label:`Launch`,start:`2026-11-23`,end:`2026-11-23`,milestone:!0,dependencies:[`test`],intent:`success`}],d={id:`components-charts-ganttchart`,title:`Components/Data Visualization/GanttChart`,component:i,tags:[`autodocs`],args:{title:`Customer portal delivery`,description:`Plan the work and follow each handoff.`,tasks:u,today:`2026-10-24`},parameters:{layout:`padded`}},f={play:async({canvasElement:e})=>{let t=l(e),n=e.querySelector(`.aegis-gantt-scroll`),r=e.querySelector(`.aegis-gantt-column-heading`),i=e.querySelector(`.aegis-gantt-plot`),a=e.querySelector(`.aegis-gantt-axis`);for(let[e,o]of[[`Day`,42],[`Month`,128],[`Week`,100]]){await c.click(t.getByRole(`radio`,{name:e}));let l=Math.max(520,a.children.length*o,n.clientWidth-r.getBoundingClientRect().width);await s(Math.abs(i.getBoundingClientRect().width-l)).toBeLessThan(1),await s(Math.abs(a.getBoundingClientRect().width-i.getBoundingClientRect().width)).toBeLessThan(1)}}},p={args:{defaultScale:`month`}},m={args:{tasks:[]}},h={render:function(e){let[t,n]=(0,a.useState)();return(0,o.jsxs)(`div`,{className:`stack`,children:[(0,o.jsx)(i,{...e,selectedTaskId:t?.id,onTaskSelect:n}),(0,o.jsx)(`p`,{role:`status`,children:t?`Selected ${t.label}`:`Select a task to view its details.`})]})},play:async({canvasElement:e})=>{let t=l(e);await c.click(t.getByRole(`button`,{name:/Design exploration, from/})),await s(t.getByRole(`status`)).toHaveTextContent(`Selected Design exploration`),await c.click(t.getByRole(`radio`,{name:`Month`})),await s(t.getByRole(`radio`,{name:`Month`})).toBeChecked(),await c.click(t.getByText(`View schedule data`)),await s(t.getByRole(`table`,{name:`Customer portal delivery schedule data`})).toBeVisible()}},g={args:{tasks:[{...u[0],owner:`Customer-experience-implementation-operations-team@example.com`},{...u[1],owner:`Alexandria Maximiliana Elizabeth Johnson Thompson`}]},play:async({canvasElement:e})=>{let t=e.querySelectorAll(`.aegis-gantt-labels > div`);for(let e of t){let t=e.querySelector(`strong`),n=e.querySelector(`small`);await s(t.getBoundingClientRect().height).toBeGreaterThan(0),await s(n.getBoundingClientRect().bottom).toBeLessThanOrEqual(e.getBoundingClientRect().bottom),await s(n.scrollWidth).toBeGreaterThan(n.clientWidth),await s(n).toHaveAttribute(`title`,n.textContent)}}},_=[`ProjectTimeline`,`Monthly`,`Empty`,`SelectTask`,`LongOwners`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const viewport = canvasElement.querySelector<HTMLElement>('.aegis-gantt-scroll')!;
    const taskHeading = canvasElement.querySelector<HTMLElement>('.aegis-gantt-column-heading')!;
    const plot = canvasElement.querySelector<HTMLElement>('.aegis-gantt-plot')!;
    const axis = canvasElement.querySelector<HTMLElement>('.aegis-gantt-axis')!;
    for (const [label, minimumColumnWidth] of [['Day', 42], ['Month', 128], ['Week', 100]] as const) {
      await userEvent.click(canvas.getByRole('radio', {
        name: label
      }));
      const expected = Math.max(520, axis.children.length * minimumColumnWidth, viewport.clientWidth - taskHeading.getBoundingClientRect().width);
      await expect(Math.abs(plot.getBoundingClientRect().width - expected)).toBeLessThan(1);
      await expect(Math.abs(axis.getBoundingClientRect().width - plot.getBoundingClientRect().width)).toBeLessThan(1);
    }
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    defaultScale: 'month'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    tasks: []
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [selected, setSelected] = useState<GanttTask>();
    return <div className="stack">
        <GanttChart {...args} selectedTaskId={selected?.id} onTaskSelect={setSelected} />
        <p role="status">
          {selected ? \`Selected \${selected.label}\` : 'Select a task to view its details.'}
        </p>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: /Design exploration, from/
    }));
    await expect(canvas.getByRole('status')).toHaveTextContent('Selected Design exploration');
    await userEvent.click(canvas.getByRole('radio', {
      name: 'Month'
    }));
    await expect(canvas.getByRole('radio', {
      name: 'Month'
    })).toBeChecked();
    await userEvent.click(canvas.getByText('View schedule data'));
    await expect(canvas.getByRole('table', {
      name: 'Customer portal delivery schedule data'
    })).toBeVisible();
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    tasks: [{
      ...tasks[0],
      owner: 'Customer-experience-implementation-operations-team@example.com'
    }, {
      ...tasks[1],
      owner: 'Alexandria Maximiliana Elizabeth Johnson Thompson'
    }]
  },
  play: async ({
    canvasElement
  }) => {
    const rows = canvasElement.querySelectorAll('.aegis-gantt-labels > div');
    for (const row of rows) {
      const title = row.querySelector('strong')!;
      const owner = row.querySelector('small')!;
      await expect(title.getBoundingClientRect().height).toBeGreaterThan(0);
      await expect(owner.getBoundingClientRect().bottom).toBeLessThanOrEqual(row.getBoundingClientRect().bottom);
      await expect(owner.scrollWidth).toBeGreaterThan(owner.clientWidth);
      await expect(owner).toHaveAttribute('title', owner.textContent!);
    }
  }
}`,...g.parameters?.docs?.source}}}})))()}v();export{m as Empty,g as LongOwners,p as Monthly,f as ProjectTimeline,h as SelectTask,_ as __namedExportsOrder,d as default};