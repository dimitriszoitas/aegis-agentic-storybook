import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,r,t as i}from"./avatar-BYBjquVO.js";var a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{r(),a=t(),o=[{name:`Eleni Papadopoulos`,status:`online`},{name:`Marcus Chen`,status:`busy`},{name:`Aisha Okafor`,status:`away`},{name:`Kenji Nakamura`,status:`offline`},{name:`Sofia Rossi`},{name:`Noah Williams`}],s={id:`components-people-avatar`,title:`Components/Data Display/Avatar`,component:i,subcomponents:{AvatarGroup:n},tags:[`autodocs`],args:{name:`Eleni Papadopoulos`}},c={render:()=>(0,a.jsx)(`div`,{className:`stack`,children:[`sm`,`md`,`lg`].map(e=>(0,a.jsx)(`div`,{className:`row`,style:{gap:`var(--space-6)`},children:o.slice(0,4).map(t=>(0,a.jsxs)(`div`,{className:`row`,children:[(0,a.jsx)(i,{...t,size:e}),(0,a.jsx)(`span`,{className:`muted`,children:t.status})]},t.name))},e))})},l={render:()=>(0,a.jsx)(`div`,{className:`story-layout stack`,style:{maxWidth:460},children:[`sm`,`md`,`lg`].map(e=>(0,a.jsxs)(`div`,{className:`between`,children:[(0,a.jsx)(`span`,{children:`Identity response team`}),(0,a.jsx)(n,{avatars:o,max:3,size:e})]},e))})},u={render:()=>(0,a.jsxs)(`div`,{className:`row`,style:{gap:`var(--space-4)`},children:[(0,a.jsx)(i,{name:`Eleni Papadopoulos`,size:`lg`}),(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`strong`,{children:`Eleni Papadopoulos`}),(0,a.jsx)(`p`,{className:`muted`,style:{margin:0},children:`Senior product designer · Athens`})]})]})},d={args:{name:`Maya Chen`,initials:``,src:``,size:`md`,status:`online`},argTypes:{name:{control:`text`},initials:{control:`text`},src:{control:`text`,name:`Image URL`},size:{control:`select`,options:[`sm`,`md`,`lg`]},status:{control:`select`,options:[`online`,`away`,`busy`,`offline`]}},render:e=>(0,a.jsx)(i,{...e})},f=[`SizesAndPresence`,`Groups`,`InitialsFallback`,`Playground`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="stack">
      {(['sm', 'md', 'lg'] as const).map(size => <div className="row" key={size} style={{
      gap: 'var(--space-6)'
    }}>
          {members.slice(0, 4).map(member => <div className="row" key={member.name}>
              <Avatar {...member} size={size} />
              <span className="muted">{member.status}</span>
            </div>)}
        </div>)}
    </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-layout stack" style={{
    maxWidth: 460
  }}>
      {(['sm', 'md', 'lg'] as const).map(size => <div className="between" key={size}>
          <span>Identity response team</span>
          <AvatarGroup avatars={members} max={3} size={size} />
        </div>)}
    </div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="row" style={{
    gap: 'var(--space-4)'
  }}>
      <Avatar name="Eleni Papadopoulos" size="lg" />
      <div>
        <strong>Eleni Papadopoulos</strong>
        <p className="muted" style={{
        margin: 0
      }}>
          Senior product designer · Athens
        </p>
      </div>
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Maya Chen',
    initials: '',
    src: '',
    size: 'md',
    status: 'online'
  },
  argTypes: {
    name: {
      control: 'text'
    },
    initials: {
      control: 'text'
    },
    src: {
      control: 'text',
      name: 'Image URL'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    },
    status: {
      control: 'select',
      options: ['online', 'away', 'busy', 'offline']
    }
  },
  render: args => <Avatar {...args} />
}`,...d.parameters?.docs?.source}}}})))()}p();export{l as Groups,u as InitialsFallback,d as Playground,c as SizesAndPresence,f as __namedExportsOrder,s as default};