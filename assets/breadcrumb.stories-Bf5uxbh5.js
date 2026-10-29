import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{Dt as r,Ht as i}from"./icon-CeMrBssx.js";import{n as a,t as o}from"./breadcrumb-CGConBli.js";function s(){let[e,t]=(0,c.useState)(`Record detail`);return(0,l.jsxs)(`div`,{className:`story-layout stack`,children:[(0,l.jsx)(o,{items:[{label:`Overview`,onClick:()=>t(`Overview`)},{label:`Records`,onClick:()=>t(`Records`)},{label:`ALT-2026-0842`}]}),(0,l.jsxs)(`p`,{className:`muted`,"aria-live":`polite`,style:{margin:0},children:[`Current view: `,e]})]})}var c,l,u,d,f,p,m;function h(){return(h=e((()=>{c=t(),i(),a(),l=n(),u={id:`components-navigation-breadcrumb`,title:`Components/Navigation/Breadcrumb`,component:o,tags:[`autodocs`],args:{items:[{label:`Workspace`,href:`#workspace`},{label:`Records`,href:`#records`},{label:`ALT-2026-0842`}]}},d={render:()=>(0,l.jsxs)(`div`,{className:`stack`,children:[(0,l.jsx)(o,{items:[{label:`Aegis`,icon:(0,l.jsx)(r,{size:15}),href:`#aegis`},{label:`Projects`,href:`#projects`},{label:`Customer portal redesign`}]}),(0,l.jsx)(o,{items:[{label:`Projects`,href:`#projects`},{label:`PRJ-2026-0184`}],separator:`/`}),(0,l.jsx)(o,{items:[{label:`Overview`}]})]})},f={render:()=>(0,l.jsx)(s,{})},p={args:{depth:3,separatorStyle:`chevron`,showIcon:!0,interactive:!0,currentLabel:`Customer portal`},argTypes:{depth:{control:{type:`range`,min:1,max:4,step:1}},separatorStyle:{control:`inline-radio`,options:[`chevron`,`slash`,`dot`]},showIcon:{control:`boolean`},interactive:{control:`boolean`},currentLabel:{control:`text`}},render:function(e){let[t,n]=(0,c.useState)(``),i=[...[`Workspace`,`Projects`,`Deliverables`].slice(0,Math.max(0,Math.min(3,e.depth-1))),e.currentLabel].map((t,i)=>({label:t,icon:i===0&&e.showIcon?(0,l.jsx)(r,{size:15}):void 0,onClick:e.interactive?()=>n(t):void 0}));return(0,l.jsxs)(`div`,{className:`stack`,children:[(0,l.jsx)(o,{items:i,separator:e.separatorStyle===`slash`?`/`:e.separatorStyle===`dot`?`·`:void 0}),(0,l.jsx)(`p`,{className:`muted`,role:`status`,children:t?`Selected destination: ${t}`:`Choose a parent destination to preview navigation.`})]})}},m=[`Hierarchy`,`ClientNavigation`,`Playground`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="stack">
      <Breadcrumb items={[{
      label: 'Aegis',
      icon: <ShieldCheck size={15} />,
      href: '#aegis'
    }, {
      label: 'Projects',
      href: '#projects'
    }, {
      label: 'Customer portal redesign'
    }]} />
      <Breadcrumb items={[{
      label: 'Projects',
      href: '#projects'
    }, {
      label: 'PRJ-2026-0184'
    }]} separator="/" />
      <Breadcrumb items={[{
      label: 'Overview'
    }]} />
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <NavigationDemo />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    depth: 3,
    separatorStyle: 'chevron',
    showIcon: true,
    interactive: true,
    currentLabel: 'Customer portal'
  },
  argTypes: {
    depth: {
      control: {
        type: 'range',
        min: 1,
        max: 4,
        step: 1
      }
    },
    separatorStyle: {
      control: 'inline-radio',
      options: ['chevron', 'slash', 'dot']
    },
    showIcon: {
      control: 'boolean'
    },
    interactive: {
      control: 'boolean'
    },
    currentLabel: {
      control: 'text'
    }
  },
  render: function BreadcrumbPlayground(args) {
    const [location, setLocation] = useState('');
    const labels = ['Workspace', 'Projects', 'Deliverables'].slice(0, Math.max(0, Math.min(3, args.depth - 1)));
    const items = [...labels, args.currentLabel].map((label, index) => ({
      label,
      icon: index === 0 && args.showIcon ? <ShieldCheck size={15} /> : undefined,
      onClick: args.interactive ? () => setLocation(label) : undefined
    }));
    return <div className="stack">
        <Breadcrumb items={items} separator={args.separatorStyle === 'slash' ? '/' : args.separatorStyle === 'dot' ? '·' : undefined} />
        <p className="muted" role="status">
          {location ? \`Selected destination: \${location}\` : 'Choose a parent destination to preview navigation.'}
        </p>
      </div>;
  }
}`,...p.parameters?.docs?.source}}}})))()}h();export{f as ClientNavigation,d as Hierarchy,p as Playground,m as __namedExportsOrder,u as default};