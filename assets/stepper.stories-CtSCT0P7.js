import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./button-DTEiHM0V.js";import{n as a,t as o}from"./stepper-4psqS34e.js";function s(){let[e,t]=(0,c.useState)(2);return(0,l.jsxs)(`div`,{className:`story-layout stack`,children:[(0,l.jsx)(o,{steps:u,currentStep:e,onStepChange:t}),(0,l.jsxs)(`div`,{className:`between`,style:{marginTop:`var(--space-6)`},children:[(0,l.jsx)(`p`,{className:`muted`,style:{margin:0},children:`Use arrow keys to move between completed steps, then Enter to revisit.`}),(0,l.jsx)(i,{intent:`function`,onClick:()=>t(e=>e===3?0:e+1),children:e===3?`Start again`:`Complete step`})]})]})}var c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{c=t(),a(),r(),l=n(),u=[{id:`define`,title:`Define`,description:`Name and describe the project`},{id:`logic`,title:`Logic`,description:`Configure the project workflow`},{id:`test`,title:`Test`,description:`Preview the starting tasks`},{id:`review`,title:`Review and create`,description:`Approve the project setup`}],d={id:`components-navigation-stepper`,title:`Components/Navigation/Stepper`,component:o,tags:[`autodocs`],args:{steps:u,currentStep:1}},f={render:()=>(0,l.jsxs)(`div`,{className:`stack`,style:{gap:`var(--space-10)`},children:[(0,l.jsx)(`div`,{className:`story-layout`,children:(0,l.jsx)(o,{steps:u,currentStep:1})}),(0,l.jsx)(`div`,{className:`story-layout`,style:{maxWidth:400},children:(0,l.jsx)(o,{steps:u,currentStep:2,orientation:`vertical`})})]})},p={args:{steps:u.map((e,t)=>({...e,state:[`complete`,`current`,`error`,`upcoming`][t]})),currentStep:1}},m={render:()=>(0,l.jsx)(s,{})},h=[`Orientations`,`AllStates`,`CompletedStepNavigation`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className="stack" style={{
    gap: 'var(--space-10)'
  }}>
      <div className="story-layout">
        <Stepper steps={steps} currentStep={1} />
      </div>
      <div className="story-layout" style={{
      maxWidth: 400
    }}>
        <Stepper steps={steps} currentStep={2} orientation="vertical" />
      </div>
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    steps: steps.map((step, index) => ({
      ...step,
      state: (['complete', 'current', 'error', 'upcoming'] as const)[index]
    })),
    currentStep: 1
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveDemo />
}`,...m.parameters?.docs?.source}}}})))()}g();export{p as AllStates,m as CompletedStepNavigation,f as Orientations,h as __namedExportsOrder,d as default};