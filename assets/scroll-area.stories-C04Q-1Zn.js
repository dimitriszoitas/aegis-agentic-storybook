import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./scroll-area-C97rFUFF.js";var i,a,o,s,c,l,u;function d(){return(d=e((()=>{n(),i=t(),a={id:`components-utilities-scrollarea`,title:`Components/Layout/ScrollArea`,component:r},o={render:()=>(0,i.jsxs)(`div`,{className:`stack`,style:{maxWidth:760},children:[(0,i.jsxs)(`section`,{className:`stack`,children:[(0,i.jsx)(`h3`,{children:`Vertical event stream`}),(0,i.jsx)(`p`,{className:`muted`,children:`Focus the event stream and use the arrow keys or Page Down.`}),(0,i.jsx)(r,{label:`Project update event stream`,maxHeight:240,className:`story-layout`,children:Array.from({length:24},(e,t)=>(0,i.jsx)(`p`,{className:`mono`,style:{fontSize:`var(--text-xs)`,overflowWrap:`anywhere`,paddingBlock:`var(--space-2)`},children:`2026-10-06T08:${String(t+10).padStart(2,`0`)}:24Z · PRJ-0042 · Project update ${t%3==0?`blocked`:`completed`} · k.nakamura`},t))})]}),(0,i.jsxs)(`section`,{className:`stack`,children:[(0,i.jsx)(`h3`,{children:`Horizontal activity sequence`}),(0,i.jsx)(`p`,{className:`muted`,children:`Scroll sideways to compare the complete project update sequence.`}),(0,i.jsx)(r,{label:`Project update activity sequence`,maxHeight:200,className:`story-layout`,children:(0,i.jsx)(`ol`,{style:{display:`flex`,gap:`var(--space-3)`,width:`max-content`,listStyle:`none`,margin:0,padding:0},children:Array.from({length:8},(e,t)=>(0,i.jsxs)(`li`,{className:`story-layout stack`,style:{width:220},children:[(0,i.jsxs)(`strong`,{children:[`Update `,t+1]}),(0,i.jsxs)(`span`,{className:`mono`,children:[`08:`,String(t+10).padStart(2,`0`),`:24 UTC`]}),(0,i.jsx)(`span`,{className:`muted`,children:t%3==0?`Task blocked`:`Task completed`})]},t))})})]})]})},s={render:()=>(0,i.jsxs)(`section`,{className:`stack`,style:{maxWidth:760},children:[(0,i.jsx)(`h3`,{children:`Wide event activity`}),(0,i.jsx)(`p`,{className:`muted`,children:`The activity table exceeds the viewport in both directions. Focus it to scroll with the arrow keys.`}),(0,i.jsx)(r,{label:`Wide project update activity`,maxHeight:300,className:`story-layout`,children:(0,i.jsxs)(`table`,{style:{width:1200,borderCollapse:`collapse`,whiteSpace:`nowrap`},children:[(0,i.jsx)(`caption`,{style:{textAlign:`left`,paddingBottom:`var(--space-3)`},children:`Correlated project update events`}),(0,i.jsx)(`thead`,{children:(0,i.jsx)(`tr`,{children:[`Timestamp`,`Project`,`User`,`Workspace`,`Result`,`Workflow rule`].map(e=>(0,i.jsx)(`th`,{scope:`col`,style:{textAlign:`left`,padding:`var(--space-3)`},children:e},e))})}),(0,i.jsx)(`tbody`,{children:Array.from({length:24},(e,t)=>(0,i.jsx)(`tr`,{children:[`2026-10-06T08:${String(t+10).padStart(2,`0`)}:24Z`,`PRJ-0042`,`k.nakamura`,`Workspace ${t+1}`,t%3==0?`Blocked`:`Completed`,`Customer onboarding`].map((e,t)=>(0,i.jsx)(`td`,{style:{padding:`var(--space-3)`,borderTop:`1px solid var(--color-border-subtle)`,fontFamily:t<4?`var(--font-mono)`:void 0},children:e},t))},t))})]})})]})},c={render:()=>(0,i.jsxs)(`section`,{className:`stack`,style:{maxWidth:760},children:[(0,i.jsx)(`h3`,{children:`Short project note`}),(0,i.jsx)(`p`,{className:`muted`,children:`Content that fits the available space does not need a scrollbar.`}),(0,i.jsx)(r,{label:`Project summary`,maxHeight:180,className:`story-layout`,children:(0,i.jsx)(`p`,{children:`All related milestones have been reviewed. The next milestone is ready to plan.`})})]})},l={args:{label:`Project activity`,maxHeight:240,itemCount:20,axes:`vertical`,contentWidth:1e3},argTypes:{label:{control:`text`},maxHeight:{control:{type:`range`,min:120,max:600,step:20}},itemCount:{control:{type:`number`,min:0,max:100,step:1}},axes:{control:`inline-radio`,options:[`vertical`,`horizontal`,`both`]},contentWidth:{control:{type:`range`,min:500,max:1800,step:100}}},render:e=>(0,i.jsx)(r,{label:e.label,maxHeight:e.maxHeight,className:`story-layout`,children:(0,i.jsxs)(`div`,{style:{width:e.axes===`vertical`?`100%`:e.contentWidth,display:e.axes===`horizontal`?`flex`:`block`,gap:`var(--space-4)`},children:[Array.from({length:Math.max(0,Math.min(100,e.itemCount))},(t,n)=>(0,i.jsxs)(`p`,{style:{paddingBlock:`var(--space-3)`,flex:e.axes===`horizontal`?`0 0 200px`:void 0},children:[(0,i.jsxs)(`strong`,{children:[`Project update `,n+1]}),(0,i.jsx)(`br`,{}),(0,i.jsx)(`span`,{className:`muted`,children:n%2==0?`Milestone completed by Maya Chen.`:`Customer review scheduled for Friday.`})]},n)),e.itemCount===0&&(0,i.jsx)(`p`,{className:`muted`,children:`No project updates yet.`})]})})},u=[`Matrix`,`BothAxes`,`NoOverflow`,`Playground`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="stack" style={{
    maxWidth: 760
  }}>
      <section className="stack">
        <h3>Vertical event stream</h3>
        <p className="muted">Focus the event stream and use the arrow keys or Page Down.</p>
        <ScrollArea label="Project update event stream" maxHeight={240} className="story-layout">
          {Array.from({
          length: 24
        }, (_, index) => <p key={index} className="mono" style={{
          fontSize: 'var(--text-xs)',
          overflowWrap: 'anywhere',
          paddingBlock: 'var(--space-2)'
        }}>{\`2026-10-06T08:\${String(index + 10).padStart(2, '0')}:24Z · PRJ-0042 · Project update \${index % 3 === 0 ? 'blocked' : 'completed'} · k.nakamura\`}</p>)}
        </ScrollArea>
      </section>
      <section className="stack">
        <h3>Horizontal activity sequence</h3>
        <p className="muted">Scroll sideways to compare the complete project update sequence.</p>
        <ScrollArea label="Project update activity sequence" maxHeight={200} className="story-layout">
          <ol style={{
          display: 'flex',
          gap: 'var(--space-3)',
          width: 'max-content',
          listStyle: 'none',
          margin: 0,
          padding: 0
        }}>
            {Array.from({
            length: 8
          }, (_, index) => <li key={index} className="story-layout stack" style={{
            width: 220
          }}>
                <strong>Update {index + 1}</strong>
                <span className="mono">08:{String(index + 10).padStart(2, '0')}:24 UTC</span>
                <span className="muted">{index % 3 === 0 ? 'Task blocked' : 'Task completed'}</span>
              </li>)}
          </ol>
        </ScrollArea>
      </section>
    </div>
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <section className="stack" style={{
    maxWidth: 760
  }}>
      <h3>Wide event activity</h3>
      <p className="muted">
        The activity table exceeds the viewport in both directions. Focus it to scroll with the
        arrow keys.
      </p>
      <ScrollArea label="Wide project update activity" maxHeight={300} className="story-layout">
        <table style={{
        width: 1200,
        borderCollapse: 'collapse',
        whiteSpace: 'nowrap'
      }}>
          <caption style={{
          textAlign: 'left',
          paddingBottom: 'var(--space-3)'
        }}>
            Correlated project update events
          </caption>
          <thead>
            <tr>
              {['Timestamp', 'Project', 'User', 'Workspace', 'Result', 'Workflow rule'].map(label => <th key={label} scope="col" style={{
              textAlign: 'left',
              padding: 'var(--space-3)'
            }}>
                    {label}
                  </th>)}
            </tr>
          </thead>
          <tbody>
            {Array.from({
            length: 24
          }, (_, index) => <tr key={index}>
                {[\`2026-10-06T08:\${String(index + 10).padStart(2, '0')}:24Z\`, 'PRJ-0042', 'k.nakamura', \`Workspace \${index + 1}\`, index % 3 === 0 ? 'Blocked' : 'Completed', 'Customer onboarding'].map((value, column) => <td key={column} style={{
              padding: 'var(--space-3)',
              borderTop: '1px solid var(--color-border-subtle)',
              fontFamily: column < 4 ? 'var(--font-mono)' : undefined
            }}>
                    {value}
                  </td>)}
              </tr>)}
          </tbody>
        </table>
      </ScrollArea>
    </section>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <section className="stack" style={{
    maxWidth: 760
  }}>
      <h3>Short project note</h3>
      <p className="muted">Content that fits the available space does not need a scrollbar.</p>
      <ScrollArea label="Project summary" maxHeight={180} className="story-layout">
        <p>All related milestones have been reviewed. The next milestone is ready to plan.</p>
      </ScrollArea>
    </section>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Project activity',
    maxHeight: 240,
    itemCount: 20,
    axes: 'vertical',
    contentWidth: 1000
  },
  argTypes: {
    label: {
      control: 'text'
    },
    maxHeight: {
      control: {
        type: 'range',
        min: 120,
        max: 600,
        step: 20
      }
    },
    itemCount: {
      control: {
        type: 'number',
        min: 0,
        max: 100,
        step: 1
      }
    },
    axes: {
      control: 'inline-radio',
      options: ['vertical', 'horizontal', 'both']
    },
    contentWidth: {
      control: {
        type: 'range',
        min: 500,
        max: 1800,
        step: 100
      }
    }
  },
  render: args => <ScrollArea label={args.label} maxHeight={args.maxHeight} className="story-layout">
      <div style={{
      width: args.axes === 'vertical' ? '100%' : args.contentWidth,
      display: args.axes === 'horizontal' ? 'flex' : 'block',
      gap: 'var(--space-4)'
    }}>
        {Array.from({
        length: Math.max(0, Math.min(100, args.itemCount))
      }, (_, index) => <p key={index} style={{
        paddingBlock: 'var(--space-3)',
        flex: args.axes === 'horizontal' ? '0 0 200px' : undefined
      }}>
            <strong>Project update {index + 1}</strong>
            <br />
            <span className="muted">
              {index % 2 === 0 ? 'Milestone completed by Maya Chen.' : 'Customer review scheduled for Friday.'}
            </span>
          </p>)}
        {args.itemCount === 0 && <p className="muted">No project updates yet.</p>}
      </div>
    </ScrollArea>
}`,...l.parameters?.docs?.source}}}})))()}d();export{s as BothAxes,o as Matrix,c as NoOverflow,l as Playground,u as __namedExportsOrder,a as default};