import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./skeleton-DDJ3NUvc.js";var i,a,o,s,c,l;function u(){return(u=e((()=>{n(),i=t(),a={id:`components-feedback-skeleton`,title:`Components/Feedback/Skeleton`,component:r,tags:[`autodocs`]},o={render:()=>(0,i.jsxs)(`div`,{className:`story-grid`,role:`status`,"aria-label":`Loading project details`,children:[(0,i.jsxs)(`section`,{className:`story-layout stack`,children:[(0,i.jsx)(`h3`,{children:`Text`}),(0,i.jsx)(r,{}),(0,i.jsx)(r,{width:`85%`}),(0,i.jsx)(r,{width:`65%`})]}),(0,i.jsxs)(`section`,{className:`story-layout stack`,children:[(0,i.jsx)(`h3`,{children:`Block`}),(0,i.jsx)(r,{variant:`block`})]}),(0,i.jsxs)(`section`,{className:`story-layout stack`,children:[(0,i.jsx)(`h3`,{children:`Avatar`}),(0,i.jsxs)(`div`,{className:`row`,children:[(0,i.jsx)(r,{variant:`avatar`}),(0,i.jsxs)(`div`,{className:`stack`,style:{flex:1,gap:`var(--space-2)`},children:[(0,i.jsx)(r,{width:`65%`}),(0,i.jsx)(r,{width:`40%`})]})]})]})]})},s={render:()=>(0,i.jsxs)(`div`,{className:`story-layout`,role:`status`,"aria-label":`Loading records`,style:{padding:0,maxWidth:920,overflow:`hidden`},children:[(0,i.jsxs)(`div`,{className:`between`,style:{padding:`var(--space-4)`},children:[(0,i.jsx)(`h3`,{style:{margin:0},children:`Recent records`}),(0,i.jsx)(`span`,{className:`muted`,children:`Fetching the last 24 hours`})]}),Array.from({length:5},(e,t)=>(0,i.jsx)(r,{variant:`table-row`,columns:5},t))]})},c={args:{variant:`block`,animate:!1,width:320,height:120}},l=[`Presets`,`RecordTable`,`WithoutMotion`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-grid" role="status" aria-label="Loading project details">
      <section className="story-layout stack">
        <h3>Text</h3>
        <Skeleton />
        <Skeleton width="85%" />
        <Skeleton width="65%" />
      </section>
      <section className="story-layout stack">
        <h3>Block</h3>
        <Skeleton variant="block" />
      </section>
      <section className="story-layout stack">
        <h3>Avatar</h3>
        <div className="row">
          <Skeleton variant="avatar" />
          <div className="stack" style={{
          flex: 1,
          gap: 'var(--space-2)'
        }}>
            <Skeleton width="65%" />
            <Skeleton width="40%" />
          </div>
        </div>
      </section>
    </div>
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-layout" role="status" aria-label="Loading records" style={{
    padding: 0,
    maxWidth: 920,
    overflow: 'hidden'
  }}>
      <div className="between" style={{
      padding: 'var(--space-4)'
    }}>
        <h3 style={{
        margin: 0
      }}>Recent records</h3>
        <span className="muted">Fetching the last 24 hours</span>
      </div>
      {Array.from({
      length: 5
    }, (_, index) => <Skeleton key={index} variant="table-row" columns={5} />)}
    </div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'block',
    animate: false,
    width: 320,
    height: 120
  }
}`,...c.parameters?.docs?.source}}}})))()}u();export{o as Presets,s as RecordTable,c as WithoutMotion,l as __namedExportsOrder,a as default};