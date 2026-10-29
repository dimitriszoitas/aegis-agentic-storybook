import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{K as n,Tt as r,zt as i}from"./icon-uAOezYFl.js";import{n as a,r as o,t as s}from"./tooltip-DG8Vv1Ra.js";var c,l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{i(),o(),c=t(),l={id:`components-overlays-tooltip`,title:`Components/Feedback/Tooltip`,component:a,subcomponents:{RichTooltip:s},tags:[`autodocs`],parameters:{layout:`centered`,docs:{story:{inline:!1,height:280}}},args:{content:`Open the record project`,children:(0,c.jsx)(`button`,{className:`aegis-tooltip-demo-trigger`,children:`Review record`})}},u={},d={args:{defaultOpen:!0}},f={args:{defaultOpen:!0,variant:`inverted`}},p={render:()=>(0,c.jsx)(s,{defaultOpen:!0,variant:`inverted`,title:`Progress confidence`,description:`Four completed milestones support this progress estimate.`,shortcut:`⌘I`,children:(0,c.jsx)(`button`,{className:`aegis-tooltip-demo-trigger`,children:`Inspect confidence`})})},m={parameters:{docs:{story:{inline:!1,height:680}}},render:()=>(0,c.jsx)(`div`,{className:`aegis-tooltip-arrow-matrix`,children:[`default`,`inverted`].map(e=>(0,c.jsx)(`div`,{className:`aegis-tooltip-arrow-matrix-row`,children:[`top`,`right`,`bottom`,`left`].map(t=>(0,c.jsx)(a,{open:!0,variant:e,side:t,content:`${e==="default"?`Default`:`Inverted`} tooltip`,children:(0,c.jsx)(`button`,{className:`aegis-tooltip-demo-trigger`,children:t})},t))},e))})},h={render:()=>(0,c.jsx)(s,{defaultOpen:!0,title:`Progress confidence`,description:`High confidence: four completed milestones support the current project progress estimate.`,shortcut:`⌘I`,children:(0,c.jsxs)(`button`,{className:`aegis-tooltip-demo-trigger`,"aria-label":`About workflow confidence`,children:[(0,c.jsx)(n,{size:16}),` Progress confidence`]})})},g={render:()=>(0,c.jsx)(`div`,{style:{display:`flex`,gap:`var(--space-4)`,padding:`var(--space-12)`},children:[`top`,`right`,`bottom`,`left`].map(e=>(0,c.jsx)(a,{side:e,content:`Details appears ${e}`,children:(0,c.jsx)(`button`,{className:`aegis-tooltip-demo-trigger`,children:e})},e))})},_={render:()=>(0,c.jsx)(s,{title:`Progress confidence`,description:`High confidence: four completed milestones support the current project progress estimate.`,shortcut:`⌘I`,children:(0,c.jsxs)(`button`,{className:`aegis-tooltip-demo-trigger`,"aria-label":`About workflow confidence`,children:[(0,c.jsx)(n,{size:16}),` Progress confidence`]})})},v={render:()=>(0,c.jsxs)(`div`,{style:{display:`flex`,gap:`var(--space-4)`},children:[(0,c.jsx)(a,{content:`Verify the identity source`,children:(0,c.jsx)(`button`,{className:`aegis-tooltip-demo-trigger`,"aria-label":`Verify identity source`,children:(0,c.jsx)(r,{size:16})})}),(0,c.jsx)(a,{content:`Resolve requires an assigned member`,children:(0,c.jsx)(`span`,{tabIndex:0,children:(0,c.jsx)(`button`,{className:`aegis-tooltip-demo-trigger`,disabled:!0,children:`Resolve record`})})})]})},y=[`Default`,`OpenTooltip`,`Inverted`,`InvertedRichTooltip`,`ArrowEdges`,`OpenRichTooltip`,`PlacementMatrix`,`RichDetails`,`IconOnlyAndDisabled`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: true,
    variant: 'inverted'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <RichTooltip defaultOpen variant="inverted" title="Progress confidence" description="Four completed milestones support this progress estimate." shortcut="⌘I">
      <button className="aegis-tooltip-demo-trigger">Inspect confidence</button>
    </RichTooltip>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      story: {
        inline: false,
        height: 680
      }
    }
  },
  render: () => <div className="aegis-tooltip-arrow-matrix">
      {(['default', 'inverted'] as const).map(variant => <div className="aegis-tooltip-arrow-matrix-row" key={variant}>
          {(['top', 'right', 'bottom', 'left'] as const).map(side => <Tooltip key={side} open variant={variant} side={side} content={\`\${variant === 'default' ? 'Default' : 'Inverted'} tooltip\`}>
              <button className="aegis-tooltip-demo-trigger">{side}</button>
            </Tooltip>)}
        </div>)}
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <RichTooltip defaultOpen title="Progress confidence" description="High confidence: four completed milestones support the current project progress estimate." shortcut="⌘I">
      <button className="aegis-tooltip-demo-trigger" aria-label="About workflow confidence">
        <Info size={16} /> Progress confidence
      </button>
    </RichTooltip>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--space-4)',
    padding: 'var(--space-12)'
  }}>
      {(['top', 'right', 'bottom', 'left'] as const).map(side => <Tooltip key={side} side={side} content={\`Details appears \${side}\`}>
          <button className="aegis-tooltip-demo-trigger">{side}</button>
        </Tooltip>)}
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <RichTooltip title="Progress confidence" description="High confidence: four completed milestones support the current project progress estimate." shortcut="⌘I">
      <button className="aegis-tooltip-demo-trigger" aria-label="About workflow confidence">
        <Info size={16} /> Progress confidence
      </button>
    </RichTooltip>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--space-4)'
  }}>
      <Tooltip content="Verify the identity source">
        <button className="aegis-tooltip-demo-trigger" aria-label="Verify identity source">
          <ShieldCheck size={16} />
        </button>
      </Tooltip>
      <Tooltip content="Resolve requires an assigned member">
        <span tabIndex={0}>
          <button className="aegis-tooltip-demo-trigger" disabled>
            Resolve record
          </button>
        </span>
      </Tooltip>
    </div>
}`,...v.parameters?.docs?.source}}}})))()}b();export{m as ArrowEdges,u as Default,v as IconOnlyAndDisabled,f as Inverted,p as InvertedRichTooltip,h as OpenRichTooltip,d as OpenTooltip,g as PlacementMatrix,_ as RichDetails,y as __namedExportsOrder,l as default};