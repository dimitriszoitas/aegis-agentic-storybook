import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{Dt as r,Ht as i,pt as a}from"./icon-BsACJKUY.js";import{n as o,t as s}from"./checkbox-SorYLvmf.js";import{n as c,t as l}from"./field-DAWuKTUB.js";import{n as u,t as d}from"./button-6oZdnaTW.js";import{n as f,t as p}from"./text-input-ypRKYZVa.js";import{n as m,t as h}from"./textarea-Vy28BD3W.js";import{n as g,t as _}from"./banner-CRMeiy8K.js";import{n as v,t as y}from"./empty-state-CorFm2_B.js";import{n as b,t as x}from"./wizard-CvH0BrLk.js";function S({orientation:e=`horizontal`}){let[t,n]=(0,w.useState)(0),[i,o]=(0,w.useState)(`Customer portal redesign`),[c,u]=(0,w.useState)(`Create a shared project space for redesigning the customer portal, planning milestones, and reviewing deliverables.`),[f,m]=(0,w.useState)(O),[g,v]=(0,w.useState)(!1),[b,S]=(0,w.useState)(!1),[C,E]=(0,w.useState)(!1),[D,k]=(0,w.useState)(!1),[A,j]=(0,w.useState)(!1),[M,N]=(0,w.useState)(!1);async function P(){S(!0),await new Promise(e=>setTimeout(e,550)),v(!0),S(!1)}function F(){n(0),j(!1),N(!1),k(!1),v(!1),E(!1)}let I=[{id:`define`,title:`Define`,description:`Describe the project`,validate:()=>i.trim().length>=8&&c.trim().length>=20||`Add a descriptive project name (at least 8 characters) and a description (at least 20 characters).`,content:(0,T.jsxs)(`div`,{className:`stack`,children:[(0,T.jsx)(l,{label:`Project name`,required:!0,helpText:`Use a clear name that helps team members understand the project’s purpose.`,children:(0,T.jsx)(p,{value:i,onValueChange:e=>{o(e),k(!0)}})}),(0,T.jsx)(l,{label:`Description`,required:!0,children:(0,T.jsx)(h,{value:c,onValueChange:e=>{u(e),k(!0)},rows:3,maxLength:500,showCount:!0})}),(0,T.jsx)(_,{intent:`info`,children:`This example keeps project changes in the current preview session.`})]})},{id:`logic`,title:`Workflow`,description:`Set the starting conditions`,validate:async()=>(await new Promise(e=>setTimeout(e,400)),f.includes(`condition:`)&&f.includes(`selection:`)?!0:`The workflow must include a selection and a condition before it can be previewed.`),content:(0,T.jsxs)(`div`,{className:`stack`,children:[(0,T.jsx)(l,{label:`Workflow configuration`,required:!0,helpText:`Define which tasks belong in the project’s initial workflow. This example checks the required configuration fields only.`,children:(0,T.jsx)(h,{value:f,onValueChange:e=>{m(e),v(!1),E(!1),k(!0)},rows:8,textareaClassName:`mono`})}),(0,T.jsx)(_,{intent:`warning`,title:`Review the starting workflow`,children:`Check the initial task status and assignment before creating the project. The preview uses illustrative tasks and does not run automation.`})]})},{id:`test`,title:`Preview`,description:`Review sample tasks`,validate:()=>g||`Open the sample workflow preview before continuing.`,content:(0,T.jsxs)(`div`,{className:`stack`,children:[(0,T.jsx)(`p`,{className:`muted`,children:`Review a fixed set of three sample tasks to see how the project workflow could look. No tasks are created or changed by this preview.`}),(0,T.jsx)(`div`,{children:(0,T.jsx)(d,{intent:`function`,emphasis:`secondary`,leadingIcon:(0,T.jsx)(a,{size:15}),loading:b,onClick:P,children:g?`Preview again`:`Preview workflow`})}),g&&(0,T.jsx)(_,{intent:`success`,title:`Preview ready: 3 sample tasks`,children:`Plan the kickoff, review the requirements, and prepare the first milestone. These illustrative tasks are assigned to the project owner.`}),(0,T.jsxs)(`div`,{className:`surface`,children:[(0,T.jsx)(`p`,{className:`muted`,style:{marginBottom:`var(--space-2)`},children:`Sample task`}),(0,T.jsx)(`code`,{style:{whiteSpace:`pre-wrap`,overflowWrap:`anywhere`,fontSize:`var(--text-xs)`},children:`TASK-001 · Plan the kickoff · Ready · Project owner`})]})]})},{id:`review`,title:`Review and create`,description:`Confirm the project`,validate:()=>C||`Confirm that you reviewed the project settings and sample tasks.`,content:(0,T.jsxs)(`div`,{className:`stack`,children:[(0,T.jsxs)(`dl`,{className:`surface`,style:{margin:0,display:`grid`,gridTemplateColumns:`140px 1fr`,gap:`var(--space-3)`},children:[(0,T.jsx)(`dt`,{className:`muted`,children:`Project name`}),(0,T.jsx)(`dd`,{style:{margin:0},children:i}),(0,T.jsx)(`dt`,{className:`muted`,children:`Workflow`}),(0,T.jsx)(`dd`,{style:{margin:0},children:`Ready tasks`}),(0,T.jsx)(`dt`,{className:`muted`,children:`Assignment`}),(0,T.jsx)(`dd`,{style:{margin:0},children:`Project owner`}),(0,T.jsx)(`dt`,{className:`muted`,children:`Preview`}),(0,T.jsx)(`dd`,{style:{margin:0},children:`3 illustrative tasks`})]}),(0,T.jsx)(s,{checked:C,onCheckedChange:e=>{E(e===!0),k(!0)},label:`I reviewed the project settings and sample tasks`,description:`Creating this project completes the example in the current preview session.`})]})}];return A||M?(0,T.jsx)(`div`,{className:`surface`,style:{maxWidth:900},children:(0,T.jsx)(y,{icon:(0,T.jsx)(r,{size:25}),title:A?`Project created`:`Setup cancelled`,description:A?`${i} is ready in this example. No external project or tasks were created.`:`The unfinished project setup was discarded. Existing projects were not changed.`,action:(0,T.jsx)(d,{intent:`function`,onClick:F,children:`Create another project`})})}):(0,T.jsx)(x,{title:`Create project`,description:`Define the project, preview its starting workflow, and review the setup.`,steps:I,currentStep:t,onStepChange:e=>{n(e),k(!0)},onFinish:async()=>{await new Promise(e=>setTimeout(e,450)),k(!1),j(!0)},onCancel:()=>{k(!1),N(!0)},dirty:D,finishLabel:`Create project`,orientation:e})}function C({onOptionsChange:e,...t}){let[n,r]=(0,w.useState)(``),i=[{id:`details`,title:`Project details`,description:t.showStepDescriptions?`Name the project`:void 0,validate:()=>!t.validateName||t.projectName.trim().length>=3||`Use at least three characters for the project name.`,content:(0,T.jsx)(l,{label:`Project name`,required:t.validateName,children:(0,T.jsx)(p,{value:t.projectName,onValueChange:t=>e({projectName:t,dirty:!0})})})},{id:`updates`,title:`Team updates`,description:t.showStepDescriptions?`Choose notifications`:void 0,content:(0,T.jsx)(s,{label:`Enable project notifications`,description:`Send updates when milestones change.`,checked:t.notifications,onCheckedChange:t=>e({notifications:t===!0,dirty:!0})})},{id:`review`,title:`Review`,description:t.showStepDescriptions?`Confirm the setup`:void 0,content:(0,T.jsxs)(`div`,{className:`stack`,children:[(0,T.jsx)(`p`,{children:(0,T.jsx)(`strong`,{children:t.projectName||`Unnamed project`})}),(0,T.jsxs)(`p`,{className:`muted`,children:[`Notifications `,t.notifications?`enabled`:`disabled`,`. Completing this example updates only the preview.`]})]})}];return(0,T.jsxs)(`div`,{className:`stack`,style:{width:`100%`,maxWidth:1040},children:[(0,T.jsx)(x,{title:t.title,description:t.description,steps:i,currentStep:Math.max(0,Math.min(2,t.currentStep)),onStepChange:t=>e({currentStep:t}),orientation:t.orientation,dirty:t.dirty,finishLabel:t.finishLabel,cancelLabel:t.cancelLabel,onFinish:()=>{e({dirty:!1}),r(`${t.projectName} created in this preview.`)},onCancel:()=>{e({dirty:!1,currentStep:0}),r(`Setup cancelled.`)}}),n&&(0,T.jsx)(`p`,{role:`status`,children:n})]})}var w,T,E,D,O,k,A,j,M,N;function P(){return(P=e((()=>{w=t(),i(),b(),g(),u(),o(),v(),c(),f(),m(),T=n(),{useArgs:E}=__STORYBOOK_MODULE_PREVIEW_API__,D={id:`patterns-wizard-project-setup`,title:`Patterns/Workflows/Project setup wizard`,component:x,tags:[`autodocs`]},O=`selection:
  task_status: ready
  assignee: project_owner
condition: selection`,k={render:()=>(0,T.jsx)(S,{})},A={render:()=>(0,T.jsx)(S,{orientation:`vertical`})},j={render:()=>(0,T.jsxs)(`div`,{className:`stack`,children:[(0,T.jsx)(_,{title:`Try the validation and exit guard`,children:`Clear the project name and continue to see validation. Edit any field, then select Cancel to choose whether to discard your changes.`}),(0,T.jsx)(S,{})]})},M={args:{title:`Create project`,description:`Set up a shared space for your team.`,orientation:`vertical`,currentStep:0,dirty:!1,projectName:`Customer portal`,notifications:!0,validateName:!0,showStepDescriptions:!0,finishLabel:`Create project`,cancelLabel:`Cancel`},argTypes:{title:{control:`text`},description:{control:`text`},orientation:{control:`inline-radio`,options:[`horizontal`,`vertical`]},currentStep:{control:{type:`range`,min:0,max:2,step:1}},dirty:{control:`boolean`},projectName:{control:`text`},notifications:{control:`boolean`},validateName:{control:`boolean`},showStepDescriptions:{control:`boolean`},finishLabel:{control:`text`},cancelLabel:{control:`text`}},render:function(e){let[,t]=E();return(0,T.jsx)(C,{...e,onOptionsChange:t})}},N=[`GuidedSetup`,`VerticalLayout`,`ValidationAndDirtyGuard`,`Playground`],k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <ProjectSetup />
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <ProjectSetup orientation="vertical" />
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <div className="stack">
      <Banner title="Try the validation and exit guard">
        Clear the project name and continue to see validation. Edit any field, then select Cancel to
        choose whether to discard your changes.
      </Banner>
      <ProjectSetup />
    </div>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Create project',
    description: 'Set up a shared space for your team.',
    orientation: 'vertical',
    currentStep: 0,
    dirty: false,
    projectName: 'Customer portal',
    notifications: true,
    validateName: true,
    showStepDescriptions: true,
    finishLabel: 'Create project',
    cancelLabel: 'Cancel'
  },
  argTypes: {
    title: {
      control: 'text'
    },
    description: {
      control: 'text'
    },
    orientation: {
      control: 'inline-radio',
      options: ['horizontal', 'vertical']
    },
    currentStep: {
      control: {
        type: 'range',
        min: 0,
        max: 2,
        step: 1
      }
    },
    dirty: {
      control: 'boolean'
    },
    projectName: {
      control: 'text'
    },
    notifications: {
      control: 'boolean'
    },
    validateName: {
      control: 'boolean'
    },
    showStepDescriptions: {
      control: 'boolean'
    },
    finishLabel: {
      control: 'text'
    },
    cancelLabel: {
      control: 'text'
    }
  },
  render: function WizardPlayground(args) {
    const [, updateArgs] = useArgs();
    return <WizardPlaygroundExample {...args} onOptionsChange={updateArgs} />;
  }
}`,...M.parameters?.docs?.source}}}})))()}P();export{k as GuidedSetup,M as Playground,j as ValidationAndDirtyGuard,A as VerticalLayout,N as __namedExportsOrder,D as default};