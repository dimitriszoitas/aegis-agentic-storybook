import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./checkbox-FDFMuHSo.js";import{n as a,t as o}from"./button-BpCMuPJ8.js";import{n as s,t as c}from"./banner-ygQdAu4k.js";import{n as l,t as u}from"./severity-badge-DyfgzVKK.js";import{r as d,t as f}from"./status-badge-B7EupEJC.js";import{n as p,t as m}from"./bulk-actions-bar-9PZlre2b.js";function h({position:e=`inline`,failAssignment:t=!1}){let[n,r]=(0,_.useState)(S),[a,s]=(0,_.useState)(S.map(e=>e.id)),[l,d]=(0,_.useState)(``),[p,h]=(0,_.useState)(``),g=n.filter(e=>a.includes(e.id));async function y(){await new Promise(e=>setTimeout(e,350))}return(0,v.jsxs)(`div`,{className:`stack`,style:{maxWidth:1e3,padding:`var(--space-6)`,minHeight:460},children:[(0,v.jsxs)(`div`,{className:`between`,children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`h3`,{style:{marginBottom:`var(--space-1)`},children:`Selected record queue`}),(0,v.jsx)(`p`,{className:`muted`,style:{margin:0},children:`Assign owners, update status, or request an AI review summary.`})]}),(0,v.jsx)(o,{size:`sm`,emphasis:`ghost`,onClick:()=>s(n.map(e=>e.id)),children:`Select all records`})]}),(0,v.jsx)(`div`,{className:`story-layout stack`,children:n.map(e=>(0,v.jsxs)(`div`,{className:`between`,style:{flexWrap:`wrap`,gap:`var(--space-3)`},children:[(0,v.jsx)(i,{checked:a.includes(e.id),onCheckedChange:t=>s(n=>t===!0?[...n,e.id]:n.filter(t=>t!==e.id)),label:e.title,description:x.find(t=>t.id===e.assignee)?.name??`Unassigned`}),(0,v.jsxs)(`div`,{className:`row`,children:[(0,v.jsx)(u,{severity:e.severity}),(0,v.jsx)(f,{status:e.status})]})]},e.id))}),l&&(0,v.jsx)(`p`,{className:`muted`,role:`status`,style:{margin:0},children:l}),p&&(0,v.jsxs)(c,{intent:`ai`,title:`AI generated review summary`,children:[p,` Review the evidence before applying a verdict.`]}),(0,v.jsx)(`div`,{style:{marginTop:`auto`},children:(0,v.jsx)(m,{position:e,selectedCount:a.length,owners:x,onAssign:async e=>{if(await y(),t)throw Error(`The owner assignment service is temporarily unavailable. Try again in a moment.`);r(t=>t.map(t=>a.includes(t.id)?{...t,assignee:e}:t)),d(`${a.length} records ${e?`assigned to ${x.find(t=>t.id===e)?.name}`:`returned to the unassigned queue`}.`)},onStatusChange:async e=>{await y(),r(t=>t.map(t=>a.includes(t.id)?{...t,status:e}:t)),d(`${a.length} record statuses updated.`)},onSummarize:async()=>{await y(),h(`${g.length} selected records contain ${g.reduce((e,t)=>e+t.count,0).toLocaleString()} history updates. ${g.filter(e=>e.severity===`critical`).length} critical records require immediate owner review. Evidence includes ${g.map(e=>e.title.toLowerCase()).join(`; `)}.`)},onClear:()=>{s([]),d(`Record selection cleared.`)}})})]})}function g({args:e,updateArgs:t}){let[n,r]=(0,_.useState)(`Choose an action for the selected records.`);return(0,v.jsxs)(`div`,{className:`stack`,style:{width:`100%`,minHeight:160},children:[(0,v.jsx)(m,{...e,onAssign:t=>r(t?`Assigned to ${e.owners.find(e=>e.id===t)?.name??t}`:`Assignment cleared`),onStatusChange:e=>r(`Status changed to ${e}`),onSummarize:()=>r(`Requested a summary for ${e.selectedCount} selected records`),onClear:()=>{t({selectedCount:0}),r(`Selection cleared`)}}),(0,v.jsx)(`p`,{role:`status`,children:n}),e.selectedCount===0&&(0,v.jsx)(o,{size:`sm`,emphasis:`secondary`,onClick:()=>t({selectedCount:3}),children:`Select three records`})]})}var _,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{_=t(),p(),s(),a(),r(),l(),d(),v=n(),{useArgs:y}=__STORYBOOK_MODULE_PREVIEW_API__,b={id:`components-data-grid-bulk-actions-bar`,title:`Components/Data Display/Data grid/Bulk actions bar`,component:m,tags:[`autodocs`]},x=[{id:`eleni`,name:`Eleni Papadopoulos`,initials:`EP`},{id:`marcus`,name:`Marcus Chen`,initials:`MC`},{id:`aisha`,name:`Aisha Okafor`,initials:`AO`}],S=[{id:`REC-2026-0842`,title:`Project delivery review`,severity:`critical`,status:`new`,assignee:null,count:18},{id:`REC-2026-0841`,title:`Customer onboarding follow-up`,severity:`high`,status:`new`,assignee:null,count:6},{id:`REC-2026-0839`,title:`Invoice payment follow-up`,severity:`medium`,status:`in-review`,assignee:`marcus`,count:1284}],C={render:()=>(0,v.jsx)(h,{})},w={render:()=>(0,v.jsx)(h,{position:`fixed`}),parameters:{layout:`fullscreen`}},T={render:()=>(0,v.jsx)(h,{failAssignment:!0})},E={args:{selectedCount:3,owners:x,position:`inline`,loading:!1,onAssign:()=>void 0,onStatusChange:()=>void 0,onSummarize:()=>void 0,onClear:()=>void 0},argTypes:{selectedCount:{control:{type:`number`,min:0,step:1}},position:{control:`select`,options:[`inline`,`fixed`]},owners:{control:`object`}},render:function(e){let[,t]=y();return(0,v.jsx)(g,{args:e,updateArgs:t})}},D=[`InteractiveSelection`,`FloatingAtBottom`,`FailedAssignment`,`Playground`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <BulkSelectionDemo />
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <BulkSelectionDemo position="fixed" />,
  parameters: {
    layout: 'fullscreen'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <BulkSelectionDemo failAssignment />
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    selectedCount: 3,
    owners,
    position: 'inline',
    loading: false,
    onAssign: () => undefined,
    onStatusChange: () => undefined,
    onSummarize: () => undefined,
    onClear: () => undefined
  },
  argTypes: {
    selectedCount: {
      control: {
        type: 'number',
        min: 0,
        step: 1
      }
    },
    position: {
      control: 'select',
      options: ['inline', 'fixed']
    },
    owners: {
      control: 'object'
    }
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs<BulkActionsBarProps>();
    return <BulkPlayground args={args} updateArgs={updateArgs} />;
  }
}`,...E.parameters?.docs?.source}}}})))()}O();export{T as FailedAssignment,w as FloatingAtBottom,C as InteractiveSelection,E as Playground,D as __namedExportsOrder,b as default};