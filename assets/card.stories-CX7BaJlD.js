import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{D as n,Dt as r,Ht as i}from"./icon-CeMrBssx.js";import{a,i as o,n as s,o as c,r as l,s as u,t as d}from"./card-CRGlXyPQ.js";var f,p,m,h,g;function _(){return(_=e((()=>{i(),u(),f=t(),p={id:`components-surfaces-card`,title:`Components/Surfaces/Card`,component:d,subcomponents:{CardHeader:a,CardTitle:c,CardDescription:l,CardContent:s,CardFooter:o},parameters:{docs:{description:{component:"Composition slots inherit the native props of their rendered element, including `children`, `className`, `style`, `id`, event handlers and ARIA attributes. They add spacing and typography; no extra state is required.\n\n| Component | Native props | Purpose |\n| --- | --- | --- |\n| CardHeader | `ComponentProps<'header'>` | Heading and supporting content |\n| CardTitle | `ComponentProps<'h3'>` | Surface heading |\n| CardDescription | `ComponentProps<'p'>` | Supporting text |\n| CardContent | `ComponentProps<'div'>` | Main content |\n| CardFooter | `ComponentProps<'footer'>` | Metadata and actions |\n"}}},tags:[`autodocs`],args:{elevation:`raised`}},m={render:()=>(0,f.jsx)(`div`,{className:`story-grid`,children:[`flat`,`raised`,`floating`].map(e=>(0,f.jsxs)(d,{elevation:e,children:[(0,f.jsxs)(a,{children:[(0,f.jsxs)(`div`,{className:`row`,style:{color:`var(--color-success-fg)`,marginBottom:`var(--space-2)`},children:[(0,f.jsx)(r,{size:20}),(0,f.jsx)(`span`,{children:`Milestone completion`})]}),(0,f.jsxs)(c,{children:[e[0].toUpperCase()+e.slice(1),` surface`]}),(0,f.jsx)(l,{children:`Customer onboarding progress`})]}),(0,f.jsxs)(s,{children:[(0,f.jsxs)(`div`,{style:{fontSize:`var(--text-3xl)`,fontWeight:600,fontVariantNumeric:`tabular-nums`},children:[`98.4`,(0,f.jsx)(`span`,{style:{fontSize:`var(--text-md)`},children:`%`})]}),(0,f.jsx)(`p`,{className:`muted`,style:{marginBottom:0},children:`126 of 128 onboarding tasks are complete.`})]}),(0,f.jsx)(o,{children:(0,f.jsxs)(`span`,{className:`row muted`,children:[(0,f.jsx)(n,{size:14}),` Evaluated 2 minutes ago`]})})]},e))})},h={render:e=>(0,f.jsxs)(d,{...e,style:{maxWidth:440},children:[(0,f.jsxs)(a,{children:[(0,f.jsx)(c,{children:`Customer portal redesign`}),(0,f.jsx)(l,{children:`Project · Customer experience`})]}),(0,f.jsxs)(s,{children:[(0,f.jsx)(`p`,{children:`The updated customer portal is ready for design review. Confirm the onboarding flow and accessibility requirements before the next milestone.`}),(0,f.jsx)(`code`,{style:{fontSize:`var(--text-xs)`},children:`PRJ-0042 · Design review`})]}),(0,f.jsx)(o,{children:(0,f.jsx)(`span`,{className:`muted`,children:`Assigned to Eleni Papadopoulos`})})]})},g=[`Elevations`,`ProjectSummary`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-grid">
      {(['flat', 'raised', 'floating'] as const).map(elevation => <Card key={elevation} elevation={elevation}>
          <CardHeader>
            <div className="row" style={{
          color: 'var(--color-success-fg)',
          marginBottom: 'var(--space-2)'
        }}>
              <ShieldCheck size={20} />
              <span>Milestone completion</span>
            </div>
            <CardTitle>{elevation[0].toUpperCase() + elevation.slice(1)} surface</CardTitle>
            <CardDescription>Customer onboarding progress</CardDescription>
          </CardHeader>
          <CardContent>
            <div style={{
          fontSize: 'var(--text-3xl)',
          fontWeight: 600,
          fontVariantNumeric: 'tabular-nums'
        }}>
              98.4<span style={{
            fontSize: 'var(--text-md)'
          }}>%</span>
            </div>
            <p className="muted" style={{
          marginBottom: 0
        }}>
              126 of 128 onboarding tasks are complete.
            </p>
          </CardContent>
          <CardFooter>
            <span className="row muted">
              <Clock3 size={14} /> Evaluated 2 minutes ago
            </span>
          </CardFooter>
        </Card>)}
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <Card {...args} style={{
    maxWidth: 440
  }}>
      <CardHeader>
        <CardTitle>Customer portal redesign</CardTitle>
        <CardDescription>Project · Customer experience</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          The updated customer portal is ready for design review. Confirm the onboarding flow and
          accessibility requirements before the next milestone.
        </p>
        <code style={{
        fontSize: 'var(--text-xs)'
      }}>PRJ-0042 · Design review</code>
      </CardContent>
      <CardFooter>
        <span className="muted">Assigned to Eleni Papadopoulos</span>
      </CardFooter>
    </Card>
}`,...h.parameters?.docs?.source}}}})))()}_();export{m as Elevations,h as ProjectSummary,g as __namedExportsOrder,p as default};