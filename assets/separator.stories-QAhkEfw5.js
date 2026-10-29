import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./separator-7bpomFvZ.js";var i,a,o,s,c,l,u,d;function f(){return(f=e((()=>{n(),i=t(),a={id:`components-surfaces-separator`,title:`Components/Layout/Separator`,component:r,tags:[`autodocs`]},o={render:()=>(0,i.jsxs)(`div`,{className:`story-layout stack`,style:{maxWidth:580},children:[(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`h3`,{children:`Customer activity`}),(0,i.jsx)(`p`,{className:`muted`,style:{margin:0},children:`Customer records from the connected workspace`})]}),(0,i.jsx)(r,{decorative:!1}),(0,i.jsxs)(`div`,{className:`row`,style:{gap:`var(--space-4)`},children:[(0,i.jsx)(`span`,{children:`24 records`}),(0,i.jsx)(r,{orientation:`vertical`,decorative:!1}),(0,i.jsx)(`span`,{children:`6 identities`}),(0,i.jsx)(r,{orientation:`vertical`,decorative:!1}),(0,i.jsx)(`span`,{className:`muted`,children:`Last 24 hours`})]})]})},s={render:()=>(0,i.jsxs)(`div`,{className:`story-layout row`,children:[(0,i.jsx)(`span`,{children:`All records`}),(0,i.jsx)(r,{orientation:`vertical`}),(0,i.jsx)(`span`,{className:`muted`,children:`Updated 30 seconds ago`})]})},c={render:()=>(0,i.jsx)(`div`,{className:`stack`,style:{maxWidth:580},children:[`light`,`normal`].map(e=>(0,i.jsxs)(`section`,{className:`story-layout stack`,children:[(0,i.jsx)(`h3`,{children:e===`light`?`Light emphasis`:`Normal emphasis`}),(0,i.jsx)(r,{emphasis:e}),(0,i.jsxs)(`div`,{className:`row`,children:[(0,i.jsx)(`span`,{children:`24 records`}),(0,i.jsx)(r,{orientation:`vertical`,emphasis:e}),(0,i.jsx)(`span`,{children:`6 identities`}),(0,i.jsx)(r,{variant:`dot`,emphasis:e}),(0,i.jsx)(`span`,{className:`muted`,children:`Last 24 hours`})]})]},e))})},l={render:()=>(0,i.jsxs)(`div`,{className:`row`,children:[(0,i.jsx)(`span`,{children:`Elena Vasquez`}),(0,i.jsx)(r,{variant:`dot`}),(0,i.jsx)(`span`,{className:`muted`,children:`Senior member`}),(0,i.jsx)(r,{variant:`dot`,emphasis:`light`}),(0,i.jsx)(`span`,{className:`muted`,children:`Athens workspace`})]})},u={args:{orientation:`horizontal`,variant:`line`,emphasis:`normal`,decorative:!0},argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},variant:{control:`select`,options:[`line`,`dot`]},emphasis:{control:`select`,options:[`normal`,`light`]},decorative:{control:`boolean`}},render:e=>(0,i.jsxs)(`div`,{className:e.orientation===`horizontal`&&e.variant===`line`?`stack`:`row`,style:{width:`100%`,maxWidth:480},children:[(0,i.jsx)(`span`,{children:`Project overview`}),(0,i.jsx)(r,{...e}),(0,i.jsx)(`span`,{className:`muted`,children:`Updated today`})]})},d=[`Orientations`,`InToolbar`,`Matrix`,`DotSeparators`,`Playground`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-layout stack" style={{
    maxWidth: 580
  }}>
      <div>
        <h3>Customer activity</h3>
        <p className="muted" style={{
        margin: 0
      }}>
          Customer records from the connected workspace
        </p>
      </div>
      <Separator decorative={false} />
      <div className="row" style={{
      gap: 'var(--space-4)'
    }}>
        <span>24 records</span>
        <Separator orientation="vertical" decorative={false} />
        <span>6 identities</span>
        <Separator orientation="vertical" decorative={false} />
        <span className="muted">Last 24 hours</span>
      </div>
    </div>
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-layout row">
      <span>All records</span>
      <Separator orientation="vertical" />
      <span className="muted">Updated 30 seconds ago</span>
    </div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="stack" style={{
    maxWidth: 580
  }}>
      {(['light', 'normal'] as const).map(emphasis => <section key={emphasis} className="story-layout stack">
          <h3>{emphasis === 'light' ? 'Light emphasis' : 'Normal emphasis'}</h3>
          <Separator emphasis={emphasis} />
          <div className="row">
            <span>24 records</span>
            <Separator orientation="vertical" emphasis={emphasis} />
            <span>6 identities</span>
            <Separator variant="dot" emphasis={emphasis} />
            <span className="muted">Last 24 hours</span>
          </div>
        </section>)}
    </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="row">
      <span>Elena Vasquez</span>
      <Separator variant="dot" />
      <span className="muted">Senior member</span>
      <Separator variant="dot" emphasis="light" />
      <span className="muted">Athens workspace</span>
    </div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    variant: 'line',
    emphasis: 'normal',
    decorative: true
  },
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical']
    },
    variant: {
      control: 'select',
      options: ['line', 'dot']
    },
    emphasis: {
      control: 'select',
      options: ['normal', 'light']
    },
    decorative: {
      control: 'boolean'
    }
  },
  render: args => <div className={args.orientation === 'horizontal' && args.variant === 'line' ? 'stack' : 'row'} style={{
    width: '100%',
    maxWidth: 480
  }}>
      <span>Project overview</span>
      <Separator {...args} />
      <span className="muted">Updated today</span>
    </div>
}`,...u.parameters?.docs?.source}}}})))()}f();export{l as DotSeparators,s as InToolbar,c as Matrix,o as Orientations,u as Playground,d as __namedExportsOrder,a as default};