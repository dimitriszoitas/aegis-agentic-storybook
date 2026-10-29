import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{a as r,r as i,t as a}from"./component-design-tokens-kJRnyGhx.js";import{At as o,Ht as ee,P as te,V as s,_t as ne,h as re}from"./icon-DafZbL0c.js";import{n as ie,t as c}from"./select-B09bFJr4.js";import{n as l,t as ae}from"./button-Bc30j06n.js";import{n as oe,t as u}from"./textarea-BHPaIIKn.js";import{r as se,t as ce}from"./rules-Cqnb58RU.js";import{a as d,i as f,n as le,o as p,r as m}from"./fixtures-BNPjpq8z.js";import{r as ue,t as de}from"./avatar-BYBjquVO.js";import{n as fe,t as h}from"./kbd-HaLvi1oh.js";import{i as pe,n as g,r as _,t as me}from"./side-sheet-BX9NcpMx.js";import{n as v,t as he}from"./ai-panel-DyCP8ZNY.js";import{n as y,t as ge}from"./tabs-B7uzGnTG.js";import{n as b,t as x}from"./data-grid-DmxmPlf8.js";import{i as _e,r as S}from"./status-badge-B7EupEJC.js";import{a as ve,f as ye,n as be,o as xe,r as C}from"./filter-panel-B6uEWRji.js";import{n as Se,t as Ce}from"./filter-bar-DPBGGQuC.js";import{n as we,t as Te}from"./separator-7bpomFvZ.js";import{n as Ee,t as De}from"./bulk-actions-bar-BGDYwIxP.js";import{a as Oe,c as ke,d as Ae,l as je,n as Me,o as Ne,r as Pe,s as Fe,t as Ie,u as Le}from"./data-grid-cells-B34kBhq4.js";import{n as Re,t as ze}from"./json-viewer-CG3MVFfF.js";function Be({record:e}){return(0,E.jsxs)(`section`,{className:`aegis-grid-record-history`,children:[(0,E.jsxs)(`h3`,{children:[`Record history · `,e.id]}),(0,E.jsxs)(`table`,{className:`aegis-grid-event-table`,"aria-label":`Record history for ${e.id}`,children:[(0,E.jsx)(`thead`,{children:(0,E.jsxs)(`tr`,{children:[(0,E.jsx)(`th`,{children:`Updated`}),(0,E.jsx)(`th`,{children:`Activity`}),(0,E.jsx)(`th`,{children:`Owner`}),(0,E.jsx)(`th`,{children:`Subject`})]})}),(0,E.jsx)(`tbody`,{children:e.events.map(e=>(0,E.jsxs)(`tr`,{children:[(0,E.jsx)(`td`,{children:(0,E.jsx)(Le,{value:e.timestamp,now:p})}),(0,E.jsx)(`td`,{children:e.action}),(0,E.jsx)(`td`,{children:e.actor}),(0,E.jsx)(`td`,{children:e.subject})]},e.id))})]}),(0,E.jsxs)(`details`,{children:[(0,E.jsx)(`summary`,{children:`Inspect raw history`}),(0,E.jsx)(ze,{value:e.events,label:`Raw history for ${e.id}`,defaultExpandedDepth:1,maxHeight:a(`evidence-max-height`)})]})]})}function Ve({record:e,onSave:t}){let[n,r]=(0,T.useState)(e.status),[i,a]=(0,T.useState)(e.assignee?.id??`unassigned`),[o,ee]=(0,T.useState)(e.ownerNote??``),[te,s]=(0,T.useState)(!1),ne=se.find(t=>t.id===e.workflowId);return(0,E.jsx)(ge,{label:`Record details`,items:[{value:`overview`,label:`Overview`,content:(0,E.jsxs)(`div`,{className:`stack`,children:[(0,E.jsxs)(_,{title:`Work item`,children:[(0,E.jsx)(g,{label:`Subject`,children:e.subject.name}),(0,E.jsx)(g,{label:`Category`,children:e.category.name}),(0,E.jsx)(g,{label:`Source`,children:e.source})]}),(0,E.jsx)(c,{label:`Status`,value:n,onValueChange:e=>{r(e),s(!1)},options:Object.entries(_e).map(([e,t])=>({value:e,label:t}))}),(0,E.jsx)(c,{label:`Assignee`,value:i,onValueChange:e=>{a(e),s(!1)},options:[{value:`unassigned`,label:`Unassigned`},...f.map(e=>({value:e.id,label:e.name}))]}),(0,E.jsx)(u,{label:`Owner note`,value:o,onChange:e=>{ee(e.target.value),s(!1)},rows:4}),(0,E.jsx)(ae,{intent:`function`,onClick:()=>{t({...e,status:n,assignee:f.find(e=>e.id===i),ownerNote:o.trim()}),s(!0)},children:`Save changes`}),te&&(0,E.jsx)(`p`,{role:`status`,children:`Record changes saved.`})]})},{value:`history`,label:`History`,count:e.events.length,content:(0,E.jsx)(Be,{record:e})},{value:`workflow`,label:`Workflow`,content:(0,E.jsxs)(_,{title:ne?.name??`Workflow`,children:[(0,E.jsx)(`p`,{children:ne?.description}),(0,E.jsx)(`pre`,{className:`aegis-grid-workflow-code`,children:ne?.yaml})]})}]})}function w({initialCount:e=150,initialMode:t=`pages`,initialFilterMode:n=`panel`}){let i=r([`grid-column-xs`,`grid-id-min-width`,`grid-column-6xl`,`grid-column-3xl`,`grid-column-2xl`,`grid-column-lg`,`grid-column-md`,`grid-column-sm`,`grid-date-width`,`grid-date-min-width`,`grid-column-xl`,`grid-tags-width`,`grid-trend-width`,`grid-actions-width`,`data-display.business-grid-height`]),[ee,ie]=(0,T.useState)(e),[l,oe]=(0,T.useState)(e===1e3?He:d),[u,se]=(0,T.useState)(t),[ce,le]=(0,T.useState)(n),[m,ue]=(0,T.useState)(`ready`),[fe,pe]=(0,T.useState)(`default`),[g,_]=(0,T.useState)(xe),[v,y]=(0,T.useState)([]),[ge,b]=(0,T.useState)(!0),[_e,S]=(0,T.useState)(),[ye,C]=(0,T.useState)(!1),[Se,we]=(0,T.useState)(),[Ee,Ae]=(0,T.useState)([]),[Re,ze]=(0,T.useState)(0),[w,D]=(0,T.useState)(`Changes stay in this local demo.`),Ge=(0,T.useRef)(0),Ke=(0,T.useRef)(null),qe=(0,T.useId)(),Je=(0,T.useMemo)(()=>ve(l,g,p),[l,g]),O=l.filter(e=>v.includes(e.id)),k=l.find(e=>e.id===_e),A=ce===`panel`&&ge;function j(e){_(e),y([])}function M(){b(!1),requestAnimationFrame(()=>Ke.current?.querySelector(`button[aria-controls="${qe}"]`)?.focus())}function N(e=ee,t=u){ie(e),oe(e===1e3?He:d),se(t),le(n),ue(`ready`),pe(`default`),_(xe()),y([]),b(!0),S(void 0),C(!1),we(void 0),Ae([]),ze(e=>e+1),D(`Changes stay in this local demo.`)}function P(e){let t=e.filter((e,t)=>e!==l[t]).length;oe(e),D(`${t} ${t===1?`record updated`:`records updated`} in this local demo.`)}function F(e){let t=e.map(We);S(void 0),Ae(t),we({id:`grid-review-${++Ge.current}`,prompt:e.length===1?`Summarize this work item and recommend the next review step.`:`Summarize the selected work, group dependencies, and recommend a review order.`,context:t}),C(!0)}function Ye(e){C(!1),S(e.id)}let Xe=[{accessorKey:`severity`,header:`Severity`,size:i[`grid-column-xs`],minSize:i[`grid-id-min-width`],sortingFn:(e,t)=>Ue[e.original.severity]-Ue[t.original.severity],cell:({row:e})=>(0,E.jsx)(Ne,{severity:e.original.severity})},{accessorKey:`title`,header:`Record`,size:i[`grid-column-6xl`],minSize:i[`grid-column-3xl`],enableHiding:!1,cell:({row:e})=>(0,E.jsx)(`span`,{title:e.original.title,children:e.original.title})},{id:`subject`,accessorFn:e=>e.subject.name,header:`Subject`,size:i[`grid-column-2xl`],minSize:i[`grid-column-lg`],cell:({row:e})=>(0,E.jsx)(Pe,{entity:e.original.subject})},{accessorKey:`status`,header:`Status`,size:i[`grid-column-md`],cell:({row:e})=>(0,E.jsx)(ke,{status:e.original.status})},{accessorKey:`source`,header:`Source`,size:i[`grid-column-sm`]},{accessorKey:`eventCount`,header:`Updates`,size:i[`grid-date-width`],minSize:i[`grid-date-min-width`],meta:{align:`right`},cell:({row:e})=>(0,E.jsx)(Oe,{value:e.original.eventCount})},{accessorKey:`lastSeen`,header:`Updated`,size:i[`grid-column-lg`],meta:{align:`right`},cell:({row:e})=>(0,E.jsx)(Le,{value:e.original.lastSeen,now:p})},{id:`assignee`,accessorFn:e=>e.assignee?.name??`Unassigned`,header:`Assignee`,size:i[`grid-column-xl`],cell:({row:e})=>e.original.assignee?(0,E.jsxs)(`span`,{className:`row`,children:[(0,E.jsx)(de,{name:e.original.assignee.name,size:`sm`}),e.original.assignee.name]}):`Unassigned`},{id:`tags`,header:`Tags`,size:i[`grid-tags-width`],accessorFn:e=>e.tags.join(`, `),cell:({row:e})=>(0,E.jsx)(je,{tags:e.original.tags,maxVisible:1})},{id:`activity`,header:`Activity`,size:i[`grid-column-md`],enableSorting:!1,cell:({row:e})=>(0,E.jsx)(Fe,{data:e.original.sparkline})},{id:`ai`,header:`AI suggestion`,size:i[`grid-trend-width`],enableSorting:!1,cell:({row:e})=>(0,E.jsx)(Me,{...e.original.aiVerdict})},{id:`actions`,header:`Actions`,size:i[`grid-actions-width`],minSize:i[`grid-actions-width`],maxSize:i[`grid-actions-width`],enableSorting:!1,enableHiding:!1,cell:({row:e})=>(0,E.jsx)(Ie,{actions:[{id:`open`,label:`Open ${e.original.id}`,icon:(0,E.jsx)(te,{size:a(`data-display.icon-inline`)}),onClick:()=>Ye(e.original)},{id:`ai`,label:`Review ${e.original.id} with AI`,icon:(0,E.jsx)(o,{size:a(`data-display.icon-inline`)}),intent:`ai`,onClick:()=>F([e.original])},{id:`complete`,label:`Mark completed`,icon:(0,E.jsx)(re,{size:a(`data-display.icon-inline`)}),onClick:()=>P(l.map(t=>t.id===e.id?{...t,status:`completed`}:t))}]})}];return(0,E.jsxs)(`main`,{className:`aegis-grid-presentation`,children:[(0,E.jsxs)(`header`,{className:`aegis-grid-presentation-heading`,children:[(0,E.jsxs)(`div`,{children:[(0,E.jsxs)(`h1`,{children:[(0,E.jsx)(s,{size:a(`data-display.icon-entity`),"aria-hidden":`true`}),`Work records`]}),(0,E.jsx)(`p`,{children:`Filter work across teams, update selected records, and review the full history.`})]}),(0,E.jsx)(ae,{emphasis:`secondary`,size:`sm`,leadingIcon:(0,E.jsx)(ne,{size:a(`data-display.icon-sm`)}),onClick:()=>N(),children:`Restore demo`})]}),(0,E.jsxs)(`section`,{"aria-label":`Presentation options`,className:`aegis-grid-presentation-options`,children:[(0,E.jsx)(c,{label:`Demo records`,size:`sm`,value:String(ee),options:[{value:`150`,label:`150 work records`},{value:`1000`,label:`1,000 work records`}],onValueChange:e=>N(e===`1000`?1e3:150)}),(0,E.jsx)(c,{label:`Browsing mode`,size:`sm`,value:u,options:[{value:`pages`,label:`Paginated results`},{value:`virtual`,label:`Continuous virtual scrolling`}],onValueChange:e=>se(e)}),(0,E.jsx)(c,{label:`Filter layout`,size:`sm`,value:ce,options:[{value:`panel`,label:`Sidebar filters`},{value:`bar`,label:`Toolbar filters`}],onValueChange:e=>le(e===`bar`?`bar`:`panel`)}),(0,E.jsx)(c,{label:`Result state`,size:`sm`,value:m,options:[{value:`ready`,label:`Ready`},{value:`loading`,label:`Loading skeletons`},{value:`empty`,label:`No matching records`},{value:`error`,label:`Connection error`}],onValueChange:e=>{ue(e),y([]),ze(e=>e+1)}}),(0,E.jsxs)(`div`,{role:`status`,className:`aegis-grid-presentation-count`,children:[m===`empty`?0:Je.length.toLocaleString(),` matching records`,` `,(0,E.jsx)(Te,{variant:`dot`}),` `,O.length,` selected`]})]}),(0,E.jsxs)(`div`,{className:`aegis-grid-record-workspace`,ref:Ke,"data-panel-open":A,children:[A&&(0,E.jsx)(be,{id:qe,records:l,owners:f,value:g,onValueChange:j,now:p,onClose:M,onKeyDown:e=>{e.key===`Escape`&&(e.preventDefault(),M())}}),(0,E.jsx)(`div`,{className:`aegis-grid-record-results`,children:(0,E.jsx)(x,{data:m===`empty`?[]:Je,columns:Xe,getRowId:e=>e.id,rowLabel:e=>`${e.id}: ${e.title}`,label:`Records`,noun:`records`,onRowClick:Ye,selectedRowIds:v,onSelectedRowsChange:y,renderExpandedRow:e=>(0,E.jsx)(Be,{record:e}),density:fe,onDensityChange:pe,pagination:u===`pages`,virtualize:u===`virtual`,height:i[`data-display.business-grid-height`],loading:m===`loading`,error:m===`error`?`The workspace service could not be reached. Retry to restore the same records.`:void 0,onRetry:()=>{ue(`ready`),D(`Connection restored. Your filters and records are preserved.`)},initialColumnVisibility:{assignee:!1,tags:!1,activity:!1,ai:!1},renderToolbar:e=>(0,E.jsx)(Ce,{value:g,onValueChange:j,owners:f,now:p,filterMode:ce,filterPanelOpen:A,panelId:qe,onTogglePanel:()=>b(e=>!e),density:e.density,onDensityChange:e.setDensity,columns:e.columns,onColumnVisibilityChange:e.setColumnVisibility,selectionActions:e.selectionActions}),renderBulkActions:(e,t)=>(0,E.jsx)(De,{position:`inline`,selectedCount:e.length,owners:f,onClear:t,onAssign:e=>P(l.map(t=>v.includes(t.id)?{...t,assignee:f.find(t=>t.id===e)}:t)),onStatusChange:e=>P(l.map(t=>v.includes(t.id)?{...t,status:e}:t)),onSummarize:()=>F(e)})},Re)})]}),(0,E.jsxs)(`footer`,{className:`aegis-grid-presentation-footer`,children:[(0,E.jsx)(`p`,{role:`status`,children:w}),(0,E.jsxs)(`details`,{children:[(0,E.jsx)(`summary`,{children:`Explore every table interaction`}),(0,E.jsxs)(`div`,{children:[(0,E.jsxs)(`p`,{children:[(0,E.jsx)(`strong`,{children:`Filter the work`}),(0,E.jsx)(`br`,{}),`Search, choose a time range, and combine facets. Active criteria stay in sync between sidebar and toolbar layouts.`]}),(0,E.jsxs)(`p`,{children:[(0,E.jsx)(`strong`,{children:`Shape the table`}),(0,E.jsx)(`br`,{}),`Adjust density and visible columns. `,(0,E.jsx)(h,{children:`Shift`}),` + click adds a sort. Drag a header to reorder or its edge to resize.`]}),(0,E.jsxs)(`p`,{children:[(0,E.jsx)(`strong`,{children:`Review and update`}),(0,E.jsx)(`br`,{}),`Expand record history, inspect raw JSON, edit details, or select records to assign an owner, change status, and ask AI.`]}),(0,E.jsxs)(`p`,{children:[(0,E.jsx)(`strong`,{children:`Use the keyboard`}),(0,E.jsx)(`br`,{}),(0,E.jsx)(h,{children:`↑`}),` `,(0,E.jsx)(h,{children:`↓`}),` move through rows, `,(0,E.jsx)(h,{children:`Space`}),` selects, and`,` `,(0,E.jsx)(h,{children:`Enter`}),` opens details. Arrow keys also resize a focused column edge.`]})]})]})]}),(0,E.jsx)(me,{title:k?.title??`Record details`,description:k?.id,open:!!k,onOpenChange:e=>{e||S(void 0)},closeLabel:`Close detail panel`,size:`lg`,actions:k?(0,E.jsx)(ae,{intent:`ai`,emphasis:`secondary`,leadingIcon:(0,E.jsx)(o,{size:a(`data-display.icon-md`)}),onClick:()=>F([k]),children:`Review with AI`}):void 0,children:k&&(0,E.jsx)(Ve,{record:k,onSave:e=>P(l.map(t=>t.id===e.id?e:t))},k.id)}),(0,E.jsx)(he,{open:ye,onOpenChange:C,context:Ee,request:Se,scopeLabel:`Selected work records`,availableContext:Je.map(We),onEvidenceClick:e=>{l.some(t=>t.id===e.id)&&(C(!1),S(e.id))}},`assistant-${Re}`)]})}var T,E,He,Ue,We;function D(){return(D=e((()=>{i(),T=t(),ee(),ue(),Ee(),l(),Ae(),Re(),fe(),ie(),we(),pe(),S(),y(),oe(),v(),Se(),C(),ye(),m(),ce(),b(),E=n(),He=le(1e3,2026),Ue={critical:0,high:1,medium:2,low:3,info:4},We=e=>({id:e.id,label:`${e.id} · ${e.title}`,kind:`record`,description:`${e.severity} severity; ${_e[e.status]}; ${e.eventCount} updates; ${e.subject.name}; ${e.source}; ${e.category.name}`}),w.__docgenInfo={description:`Local work queue composed from public grid, filter, details, and AI primitives.`,methods:[],displayName:`DataGridPresentation`,props:{initialCount:{required:!1,tsType:{name:`union`,raw:`150 | 1000`,elements:[{name:`literal`,value:`150`},{name:`literal`,value:`1000`}]},description:``,defaultValue:{value:`150`,computed:!1}},initialMode:{required:!1,tsType:{name:`union`,raw:`'pages' | 'virtual'`,elements:[{name:`literal`,value:`'pages'`},{name:`literal`,value:`'virtual'`}]},description:``,defaultValue:{value:`'pages'`,computed:!1}},initialFilterMode:{required:!1,tsType:{name:`union`,raw:`'bar' | 'panel'`,elements:[{name:`literal`,value:`'bar'`},{name:`literal`,value:`'panel'`}]},description:``,defaultValue:{value:`'panel'`,computed:!1}}}}})))()}function Ge({record:e}){return(0,k.jsxs)(`section`,{"aria-label":`History updates for ${e.id}`,children:[(0,k.jsxs)(`h3`,{style:{fontSize:`var(--text-sm)`,fontWeight:`var(--title-weight)`,marginBottom:`var(--space-3)`},children:[e.events.length,` history updates`]}),(0,k.jsxs)(`table`,{className:`aegis-grid-event-table`,"aria-label":`Record history for ${e.id}`,children:[(0,k.jsx)(`thead`,{children:(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`th`,{scope:`col`,children:`Time`}),(0,k.jsx)(`th`,{scope:`col`,children:`Action`}),(0,k.jsx)(`th`,{scope:`col`,children:`Owner`}),(0,k.jsx)(`th`,{scope:`col`,children:`Subject`})]})}),(0,k.jsx)(`tbody`,{children:e.events.map(e=>(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`td`,{children:(0,k.jsx)(`code`,{children:e.timestamp.slice(11,19)})}),(0,k.jsx)(`td`,{children:e.action}),(0,k.jsx)(`td`,{children:(0,k.jsx)(`code`,{children:e.actor})}),(0,k.jsx)(`td`,{children:(0,k.jsx)(`code`,{children:e.subject})})]},e.id))})]})]})}function Ke(){let[e,t]=(0,O.useState)(!0);return(0,k.jsx)(x,{...I.args,error:e?`The event service could not be reached. Your review has been preserved.`:void 0,onRetry:()=>t(!1)})}function qe(){let[e,t]=(0,O.useState)([d[0].id,d[1].id,d[2].id]),[n,r]=(0,O.useState)(`3 records are selected for review.`);return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(x,{...I.args,selectedRowIds:e,onSelectedRowsChange:t,renderBulkActions:(e,t)=>(0,k.jsx)(De,{selectedCount:e.length,owners:f,onAssign:t=>r(`${e.length} records assigned to ${f.find(e=>e.id===t)?.name??`no owner`}.`),onStatusChange:t=>r(`${e.length} records changed to ${t.replaceAll(`-`,` `)}.`),onSummarize:()=>r(`AI summary requested for ${e.length} selected records.`),onClear:t,position:`inline`})}),(0,k.jsx)(`p`,{role:`status`,style:{marginTop:`var(--space-3)`,color:`var(--color-text-secondary)`,fontSize:`var(--text-sm)`},children:n})]})}function Je(){let[e,t]=(0,O.useState)();return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(x,{...I.args,onRowClick:t}),(0,k.jsx)(me,{title:e?.title??`Record details`,description:e?.id,open:!!e,onOpenChange:e=>{e||t(void 0)},footer:(0,k.jsx)(ae,{intent:`function`,onClick:()=>t(void 0),children:`Return to records`}),children:(0,k.jsxs)(_,{title:`Review details`,children:[(0,k.jsx)(g,{label:`Subject`,children:e?.subject.name}),(0,k.jsxs)(g,{label:`Category`,children:[e?.category.id,` · `,e?.category.name]}),(0,k.jsx)(g,{label:`Event count`,children:e?.eventCount})]})})]})}var O,k,A,j,M,N,P,F,Ye,Xe,Ze,Qe,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,$e,Q,$,et;function tt(){return(tt=e((()=>{O=t(),l(),Ee(),Ae(),pe(),m(),b(),D(),k=n(),A=t(),{expect:j,userEvent:M,waitFor:N,within:P}=__STORYBOOK_MODULE_TEST__,F={critical:0,high:1,medium:2,low:3,info:4},Ye=[{accessorKey:`severity`,header:`Severity`,size:120,minSize:104,maxSize:180,sortingFn:(e,t)=>F[e.original.severity]-F[t.original.severity],cell:({row:e})=>(0,k.jsx)(Ne,{severity:e.original.severity})},{accessorKey:`title`,header:`Record title`,size:410,minSize:220,maxSize:650,enableHiding:!1,cell:({row:e})=>(0,k.jsx)(`span`,{title:e.original.title,children:e.original.title})},{id:`subject`,accessorFn:e=>e.subject.name,header:`Subject`,size:220,minSize:160,maxSize:320,cell:({row:e})=>(0,k.jsx)(Pe,{entity:e.original.subject})},{accessorKey:`eventCount`,header:`Updates`,size:96,minSize:80,maxSize:180,meta:{align:`right`},cell:({row:e})=>(0,k.jsx)(Oe,{value:e.original.eventCount})},{accessorKey:`lastSeen`,header:`Last seen`,size:150,minSize:120,maxSize:260,cell:({row:e})=>(0,k.jsx)(Le,{value:e.original.lastSeen,now:p})}],Xe=e=>e.id,Ze=e=>`${e.id}: ${e.title}`,Qe=e=>(0,k.jsx)(Ge,{record:e}),I={id:`components-data-datagrid`,title:`Components/Data Display/DataGrid`,component:x,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`The full presentation offers either toolbar filters or a push FilterPanel. Search, relative or absolute time ranges, active filters, and facet counts all filter the same records. Switching Filter layout preserves active criteria; applied chips appear in toolbar mode or while the sidebar is closed. Use the toolbar for density and column visibility. The first header click sorts ascending, the next descending; Shift-click keeps multiple sorts. Hover or focus a header for its three-dot menu to pin left/right, unpin, sort, hide, or move a column with the keyboard. Drag a column header or its title to reorder within a pinned or unpinned group. Selection, expansion, and the first data column start pinned left; a final Actions column starts pinned right. The last visible data column fills spare viewport space; a trailing Actions column retains its compact configured width at the right edge. Invisible hit areas just inside each right edge support dragging, double-click autosize, and keyboard resizing. Hover or focus an edge to show its guide through the visible table body. Row selection, cross-page bulk assignment/status updates, inline history expansion, raw JSON, editable record details, and streaming AI review all work locally. Switch browsing mode to continuous virtual scrolling and choose 1,000 records to explore a large result set. Presentation options also expose reversible loading, empty and retryable error states. Focused examples below document each grid capability separately.`}}},args:{data:d,columns:Ye,getRowId:Xe,rowLabel:Ze,label:`Work records`,renderExpandedRow:Qe}},L={name:`Full presentation`,render:()=>(0,k.jsx)(w,{}),parameters:{layout:`fullscreen`,controls:{disable:!0},docs:{story:{inline:!1,height:1080}}},play:async({canvasElement:e,step:t})=>{let n=M.setup(),r=P(e),i=P(e.ownerDocument.body);await t(`Keep push filters and removable chips in sync`,async()=>{let t=r.getByRole(`complementary`,{name:/Filters/}),i=P(t).getByRole(`checkbox`,{name:/Critical/});await n.click(i),await j(r.queryByRole(`button`,{name:`Remove Critical severity filter`})).not.toBeInTheDocument(),await n.click(r.getByRole(`button`,{name:`Hide filter panel`})),await N(()=>{let t=e.querySelector(`th[data-column-id="actions"]`),n=e.querySelector(`td[data-column-id="actions"]`),r=e.querySelector(`.aegis-grid-scroll`);if(!t||!n||!r)throw Error(`Expected compact pinned Actions column`);j(t.getBoundingClientRect().width).toBeCloseTo(116,0),j(n.getBoundingClientRect().width).toBeCloseTo(116,0),j(t.getBoundingClientRect().right).toBeCloseTo(r.getBoundingClientRect().left+r.clientWidth,0)}),await j(r.getByRole(`button`,{name:`Remove Critical severity filter`})).toBeVisible(),await n.click(r.getByRole(`button`,{name:`Remove Critical severity filter`})),await n.click(r.getByRole(`button`,{name:`Show filter panel`})),await j(P(r.getByRole(`complementary`,{name:/Filters/})).getByRole(`checkbox`,{name:/Critical/})).not.toBeChecked(),await n.type(r.getByRole(`searchbox`,{name:`Search records`}),`project`),await j(r.getByRole(`grid`,{name:`Records`})).toBeVisible(),await n.clear(r.getByRole(`searchbox`,{name:`Search records`}))}),await t(`Adjust density, sort multiple columns, and resize a column`,async()=>{await n.click(r.getByRole(`button`,{name:`Compact rows`})),await j(r.getByRole(`button`,{name:`Compact rows`})).toHaveAttribute(`aria-pressed`,`true`);let t=P(r.getByRole(`grid`,{name:`Records`}));await n.click(t.getByRole(`button`,{name:`Severity`})),await n.keyboard(`{Shift>}`),await n.click(t.getByRole(`button`,{name:`Updates`})),await n.keyboard(`{/Shift}`);for(let[t,n]of[[`severity`,`1`],[`eventCount`,`2`]]){let r=e.querySelector(`th[data-column-id="${t}"]`);await j(r).toHaveAttribute(`aria-sort`,`other`),await j(r).toHaveAttribute(`aria-description`,`Ascending, sort priority ${n} of 2`),await j(r?.querySelector(`sup`)).toHaveTextContent(n)}let i=t.getByRole(`separator`,{name:`Resize Record column`}),a=Number(i.getAttribute(`aria-valuenow`));i.focus(),await n.keyboard(`{ArrowRight}`),await j(i).toHaveAttribute(`aria-valuenow`,String(a+8))}),await t(`Select records and apply an actual bulk status change`,async()=>{let t=P(r.getByRole(`grid`,{name:`Records`})),a=t.getAllByRole(`checkbox`,{name:/^Select REC-/});await n.click(a[0]),await n.click(a[1]);let o=a.slice(0,2).map(e=>e.getAttribute(`aria-label`));await n.click(r.getByRole(`combobox`,{name:`Browsing mode`})),await n.click(i.getByRole(`option`,{name:`Continuous virtual scrolling`})),await j(r.getByRole(`grid`,{name:`Records`})).toHaveAttribute(`aria-rowcount`,`151`),await j(t.getAllByRole(`row`).length).toBeLessThan(151);for(let[t,n]of[[`severity`,`1`],[`eventCount`,`2`]]){let r=e.querySelector(`th[data-column-id="${t}"]`);await j(r).toHaveAttribute(`aria-sort`,`other`),await j(r).toHaveAttribute(`aria-description`,`Ascending, sort priority ${n} of 2`),await j(r?.querySelector(`sup`)).toHaveTextContent(n)}for(let e of o)await j(t.getByRole(`checkbox`,{name:e})).toBeChecked();await n.click(r.getByRole(`combobox`,{name:`Browsing mode`})),await n.click(i.getByRole(`option`,{name:`Paginated results`})),await j(r.getByRole(`grid`,{name:`Records`})).toHaveAttribute(`aria-rowcount`,`26`);for(let e of o)await j(t.getByRole(`checkbox`,{name:e})).toBeChecked();await n.click(r.getByRole(`button`,{name:`Change status`})),await n.click(i.getByRole(`menuitem`,{name:`In progress`})),await j(r.getByText(`2 records updated in this local demo.`)).toBeVisible(),await n.click(r.getByRole(`button`,{name:`Clear selected records`}))}),await t(`Open event evidence and record details`,async()=>{let e=P(r.getByRole(`grid`,{name:`Records`}));await n.click(e.getAllByRole(`button`,{name:/^Expand REC-/})[0]),await j(r.getByText(/Record history · REC-/)).toBeVisible(),e.getAllByRole(`row`,{name:/^REC-/})[0].focus(),await n.keyboard(`{Enter}`),await j(i.getByRole(`dialog`)).toBeVisible(),await j(i.getByRole(`tab`,{name:/^History/})).toBeVisible(),await n.click(i.getByRole(`button`,{name:`Close detail panel`})),await N(()=>j(i.queryByRole(`dialog`)).not.toBeInTheDocument())}),await n.click(r.getByRole(`button`,{name:`Restore demo`})),e.ownerDocument.defaultView?.scrollTo({top:0})}},R={render:()=>(0,k.jsx)(w,{}),parameters:{layout:`fullscreen`,controls:{disable:!0},docs:{story:{inline:!1,height:1080}}},play:async({canvasElement:e})=>{let t=P(e),n=P(e.ownerDocument.body),r=t.getByRole(`combobox`,{name:`Filter layout`});await M.click(P(t.getByRole(`complementary`,{name:/Filters/})).getByRole(`checkbox`,{name:/^Critical/})),await j(t.queryByRole(`button`,{name:`Remove Critical severity filter`})).not.toBeInTheDocument(),await M.click(r),await M.click(await n.findByRole(`option`,{name:`Toolbar filters`})),await N(()=>j(r).toHaveFocus()),await j(t.queryByRole(`complementary`,{name:/Filters/})).not.toBeInTheDocument(),await j(t.getByRole(`button`,{name:`Add filter`})).toBeVisible(),await j(t.getByRole(`button`,{name:`Remove Critical severity filter`})).toBeVisible(),await M.click(t.getByRole(`button`,{name:`Remove Critical severity filter`})),await M.click(r),await M.click(await n.findByRole(`option`,{name:`Sidebar filters`})),await N(()=>j(r).toHaveFocus()),await j(t.queryByRole(`button`,{name:`Add filter`})).not.toBeInTheDocument(),await j(P(t.getByRole(`complementary`,{name:/Filters/})).getByRole(`checkbox`,{name:/^Critical/})).not.toBeChecked()}},z={name:`Full presentation · 1,000 rows`,render:()=>(0,k.jsx)(w,{initialCount:1e3,initialMode:`virtual`}),parameters:{layout:`fullscreen`,controls:{disable:!0},docs:{story:{inline:!1,height:1080},description:{story:`The same working filters and review actions with 1,000 records, continuous virtual scrolling, sticky headers, and inline history rows. Filtering reduces the backing data; the viewport mounts only the visible row window.`}}}},B={},V={args:{data:d.slice(0,10),pagination:!1},parameters:{docs:{description:{story:`Hover or focus a header to reveal sorting and its column menu. Pin columns to either edge, hide optional fields, or use Move left/right as the keyboard alternative to dragging the header or its title. Selection and expansion remain anchored. The last visible data column takes spare width while a trailing Actions column stays compact; hover or focus just inside a column’s right edge to reveal the full-height resize guide. Both dotted handles are absent; header clicks still sort, and the menu remains independent of dragging.`}}},play:async({canvasElement:e,step:t})=>{let n=M.setup(),r=P(e),i=P(e.ownerDocument.body),a=t=>e.querySelector(`th[data-column-id="${t}"]`),o=async(e,t)=>{await n.click(r.getByRole(`button`,{name:`${e} column actions`})),await n.click(i.getByRole(`menuitem`,{name:t}))};await t(`Reveal the resize guide from the invisible inside edge`,async()=>{let t=r.getByRole(`separator`,{name:`Resize Record title column`}),i=e.querySelector(`.aegis-grid-resize-guide`);if(!i)throw Error(`Expected a full-height resize guide`);await j(e.querySelector(`.aegis-grid-drag`)).toBeNull(),await j(t.querySelector(`svg`)).toBeNull(),await n.hover(t),await j(i).toBeVisible(),j(t.getBoundingClientRect().right).toBeLessThanOrEqual(a(`title`).getBoundingClientRect().right),await n.unhover(t),await j(i).not.toBeVisible()}),await t(`Sort ascending, descending, and clear from the header`,async()=>{await n.click(r.getByRole(`button`,{name:`Updates`})),await j(a(`eventCount`)).toHaveAttribute(`aria-sort`,`ascending`),await n.click(r.getByRole(`button`,{name:`Updates`})),await j(a(`eventCount`)).toHaveAttribute(`aria-sort`,`descending`),await o(`Updates`,`Sort A to Z`),await j(a(`eventCount`)).toHaveAttribute(`aria-sort`,`ascending`),await n.click(r.getByRole(`button`,{name:`Updates`})),await j(a(`eventCount`)).toHaveAttribute(`aria-sort`,`descending`),await n.click(r.getByRole(`button`,{name:`Updates`})),await j(a(`eventCount`)).not.toHaveAttribute(`aria-sort`)}),await t(`Pin and unpin a column without losing its menu`,async()=>{await o(`Subject`,`Pin right`),await j(a(`subject`)).toHaveAttribute(`data-pinned`,`right`),await o(`Subject`,`Unpin column`),await j(a(`subject`)).not.toHaveAttribute(`data-pinned`)}),await t(`Reorder from the keyboard and restore hidden fields`,async()=>{r.getByRole(`button`,{name:`Subject column actions`}).focus(),await n.keyboard(`{Enter}`),i.getByRole(`menuitem`,{name:`Move left`}).focus(),await n.keyboard(`{Enter}`),await N(()=>j(a(`subject`).cellIndex).toBeLessThan(a(`title`).cellIndex)),await o(`Subject`,`Move right`),await o(`Subject`,`Hide column`),await j(e.querySelector(`th[data-column-id="subject"]`)).toBeNull(),await n.click(r.getByRole(`button`,{name:`Columns`})),await n.click(i.getByRole(`menuitemcheckbox`,{name:`Subject`})),await n.keyboard(`{Escape}`),await j(a(`subject`)).toBeVisible()})}},H={argTypes:{data:{control:!1},density:{control:!1},pagination:{control:!1}},render:e=>(0,k.jsx)(`div`,{style:{display:`grid`,gap:`var(--space-6)`},children:[`compact`,`default`,`comfortable`].map(t=>(0,A.createElement)(x,{...e,key:t,data:d.slice(0,3),density:t,pagination:!1,renderToolbar:e=>e.selectionActions??(0,k.jsxs)(`strong`,{style:{textTransform:`capitalize`,fontSize:`var(--text-sm)`},children:[t,` density`]})}))})},U={args:{initialSorting:[{id:`severity`,desc:!1},{id:`eventCount`,desc:!0}]}},W={args:{defaultExpandedRowIds:[d[0].id],data:d.slice(0,8),pagination:!1}},G={args:{defaultExpandedRowIds:[d[0].id],data:d.slice(0,8),enableSelection:!1,pagination:!1},parameters:{docs:{description:{story:`The evidence connector follows the expansion chevron without reserving space for an absent selection column. Expanded evidence stays inside the visible viewport while the outer grid scrolls horizontally.`}}}},K={args:{initialColumnVisibility:{subject:!1,lastSeen:!1}}},q={args:{loading:!0}},J={args:{data:[]}},Y={render:()=>(0,k.jsx)(Ke,{})},X={render:()=>(0,k.jsx)(qe,{})},Z={render:()=>(0,k.jsx)(Je,{})},$e=le(1e3,2026),Q={args:{data:$e,pagination:!1,virtualize:!0,height:560,defaultExpandedRowIds:[$e[0].id]}},$={args:{data:d.slice(0,10),pagination:!1},parameters:{docs:{description:{story:`Focus a column resize handle and press Left or Right to adjust by 8px, Shift+Arrow for 24px, Home/End for min/max, or Enter to autosize. A guide follows the active column edge through the visible table body. Pointer drag and double-click autosize use the same constraints.`}}},play:async({canvasElement:e})=>{let t=P(e).getByRole(`separator`,{name:`Resize Record title column`}),n=Number(t.getAttribute(`aria-valuenow`)),r=e.querySelector(`.aegis-grid-resize-guide`),i=t.closest(`th`);if(!r||!i)throw Error(`Expected a resize guide and its column header`);t.focus(),await M.keyboard(`{Shift>}{ArrowRight}{/Shift}`),await j(t).toHaveAttribute(`aria-valuenow`,String(n+24)),await N(()=>{j(r).toBeVisible(),j(Math.abs(r.getBoundingClientRect().right-i.getBoundingClientRect().right)).toBeLessThanOrEqual(2),j(r.getBoundingClientRect().height).toBeGreaterThan(i.getBoundingClientRect().height)}),await M.tab(),await j(r).not.toBeVisible()}},et=[`FullPresentation`,`FilterLayoutSwitching`,`FullVirtualizedPresentation`,`Default`,`HeaderControls`,`DensityMatrix`,`MultiSort`,`ExpandedEvidence`,`ExpandedWithoutSelection`,`HiddenColumns`,`Loading`,`Empty`,`ErrorAndRetry`,`SelectionAndBulkActions`,`KeyboardReview`,`VirtualizedThousandRows`,`KeyboardResizing`],L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'Full presentation',
  render: () => <DataGridPresentation />,
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    },
    docs: {
      story: {
        inline: false,
        height: 1080
      }
    }
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const user = userEvent.setup();
    const canvas = within(canvasElement);
    const page = within(canvasElement.ownerDocument.body);
    await step('Keep push filters and removable chips in sync', async () => {
      const panel = canvas.getByRole('complementary', {
        name: /Filters/
      });
      const critical = within(panel).getByRole('checkbox', {
        name: /Critical/
      });
      await user.click(critical);
      await expect(canvas.queryByRole('button', {
        name: 'Remove Critical severity filter'
      })).not.toBeInTheDocument();
      await user.click(canvas.getByRole('button', {
        name: 'Hide filter panel'
      }));
      await waitFor(() => {
        const actionsHeader = canvasElement.querySelector<HTMLElement>('th[data-column-id="actions"]');
        const actionsCell = canvasElement.querySelector<HTMLElement>('td[data-column-id="actions"]');
        const scroll = canvasElement.querySelector<HTMLElement>('.aegis-grid-scroll');
        if (!actionsHeader || !actionsCell || !scroll) throw new Error('Expected compact pinned Actions column');
        expect(actionsHeader.getBoundingClientRect().width).toBeCloseTo(116, 0);
        expect(actionsCell.getBoundingClientRect().width).toBeCloseTo(116, 0);
        expect(actionsHeader.getBoundingClientRect().right).toBeCloseTo(scroll.getBoundingClientRect().left + scroll.clientWidth, 0);
      });
      await expect(canvas.getByRole('button', {
        name: 'Remove Critical severity filter'
      })).toBeVisible();
      await user.click(canvas.getByRole('button', {
        name: 'Remove Critical severity filter'
      }));
      await user.click(canvas.getByRole('button', {
        name: 'Show filter panel'
      }));
      await expect(within(canvas.getByRole('complementary', {
        name: /Filters/
      })).getByRole('checkbox', {
        name: /Critical/
      })).not.toBeChecked();
      await user.type(canvas.getByRole('searchbox', {
        name: 'Search records'
      }), 'project');
      await expect(canvas.getByRole('grid', {
        name: 'Records'
      })).toBeVisible();
      await user.clear(canvas.getByRole('searchbox', {
        name: 'Search records'
      }));
    });
    await step('Adjust density, sort multiple columns, and resize a column', async () => {
      await user.click(canvas.getByRole('button', {
        name: 'Compact rows'
      }));
      await expect(canvas.getByRole('button', {
        name: 'Compact rows'
      })).toHaveAttribute('aria-pressed', 'true');
      const grid = within(canvas.getByRole('grid', {
        name: 'Records'
      }));
      await user.click(grid.getByRole('button', {
        name: 'Severity'
      }));
      await user.keyboard('{Shift>}');
      await user.click(grid.getByRole('button', {
        name: 'Updates'
      }));
      await user.keyboard('{/Shift}');
      for (const [id, rank] of [['severity', '1'], ['eventCount', '2']] as const) {
        const header = canvasElement.querySelector(\`th[data-column-id="\${id}"]\`);
        await expect(header).toHaveAttribute('aria-sort', 'other');
        await expect(header).toHaveAttribute('aria-description', \`Ascending, sort priority \${rank} of 2\`);
        await expect(header?.querySelector('sup')).toHaveTextContent(rank);
      }
      const resize = grid.getByRole('separator', {
        name: 'Resize Record column'
      });
      const previous = Number(resize.getAttribute('aria-valuenow'));
      resize.focus();
      await user.keyboard('{ArrowRight}');
      await expect(resize).toHaveAttribute('aria-valuenow', String(previous + 8));
    });
    await step('Select records and apply an actual bulk status change', async () => {
      const grid = within(canvas.getByRole('grid', {
        name: 'Records'
      }));
      const checkboxes = grid.getAllByRole('checkbox', {
        name: /^Select REC-/
      });
      await user.click(checkboxes[0]);
      await user.click(checkboxes[1]);
      const selectedLabels = checkboxes.slice(0, 2).map(checkbox => checkbox.getAttribute('aria-label')!);
      await user.click(canvas.getByRole('combobox', {
        name: 'Browsing mode'
      }));
      await user.click(page.getByRole('option', {
        name: 'Continuous virtual scrolling'
      }));
      await expect(canvas.getByRole('grid', {
        name: 'Records'
      })).toHaveAttribute('aria-rowcount', '151');
      await expect(grid.getAllByRole('row').length).toBeLessThan(151);
      for (const [id, rank] of [['severity', '1'], ['eventCount', '2']] as const) {
        const header = canvasElement.querySelector(\`th[data-column-id="\${id}"]\`);
        await expect(header).toHaveAttribute('aria-sort', 'other');
        await expect(header).toHaveAttribute('aria-description', \`Ascending, sort priority \${rank} of 2\`);
        await expect(header?.querySelector('sup')).toHaveTextContent(rank);
      }
      for (const label of selectedLabels) await expect(grid.getByRole('checkbox', {
        name: label
      })).toBeChecked();
      await user.click(canvas.getByRole('combobox', {
        name: 'Browsing mode'
      }));
      await user.click(page.getByRole('option', {
        name: 'Paginated results'
      }));
      await expect(canvas.getByRole('grid', {
        name: 'Records'
      })).toHaveAttribute('aria-rowcount', '26');
      for (const label of selectedLabels) await expect(grid.getByRole('checkbox', {
        name: label
      })).toBeChecked();
      await user.click(canvas.getByRole('button', {
        name: 'Change status'
      }));
      await user.click(page.getByRole('menuitem', {
        name: 'In progress'
      }));
      await expect(canvas.getByText('2 records updated in this local demo.')).toBeVisible();
      await user.click(canvas.getByRole('button', {
        name: 'Clear selected records'
      }));
    });
    await step('Open event evidence and record details', async () => {
      const grid = within(canvas.getByRole('grid', {
        name: 'Records'
      }));
      await user.click(grid.getAllByRole('button', {
        name: /^Expand REC-/
      })[0]);
      await expect(canvas.getByText(/Record history · REC-/)).toBeVisible();
      const row = grid.getAllByRole('row', {
        name: /^REC-/
      })[0];
      row.focus();
      await user.keyboard('{Enter}');
      await expect(page.getByRole('dialog')).toBeVisible();
      await expect(page.getByRole('tab', {
        name: /^History/
      })).toBeVisible();
      await user.click(page.getByRole('button', {
        name: 'Close detail panel'
      }));
      await waitFor(() => expect(page.queryByRole('dialog')).not.toBeInTheDocument());
    });
    await user.click(canvas.getByRole('button', {
      name: 'Restore demo'
    }));
    canvasElement.ownerDocument.defaultView?.scrollTo({
      top: 0
    });
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <DataGridPresentation />,
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    },
    docs: {
      story: {
        inline: false,
        height: 1080
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const page = within(canvasElement.ownerDocument.body);
    const layout = canvas.getByRole('combobox', {
      name: 'Filter layout'
    });
    await userEvent.click(within(canvas.getByRole('complementary', {
      name: /Filters/
    })).getByRole('checkbox', {
      name: /^Critical/
    }));
    await expect(canvas.queryByRole('button', {
      name: 'Remove Critical severity filter'
    })).not.toBeInTheDocument();
    await userEvent.click(layout);
    await userEvent.click(await page.findByRole('option', {
      name: 'Toolbar filters'
    }));
    await waitFor(() => expect(layout).toHaveFocus());
    await expect(canvas.queryByRole('complementary', {
      name: /Filters/
    })).not.toBeInTheDocument();
    await expect(canvas.getByRole('button', {
      name: 'Add filter'
    })).toBeVisible();
    await expect(canvas.getByRole('button', {
      name: 'Remove Critical severity filter'
    })).toBeVisible();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Remove Critical severity filter'
    }));
    await userEvent.click(layout);
    await userEvent.click(await page.findByRole('option', {
      name: 'Sidebar filters'
    }));
    await waitFor(() => expect(layout).toHaveFocus());
    await expect(canvas.queryByRole('button', {
      name: 'Add filter'
    })).not.toBeInTheDocument();
    await expect(within(canvas.getByRole('complementary', {
      name: /Filters/
    })).getByRole('checkbox', {
      name: /^Critical/
    })).not.toBeChecked();
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'Full presentation · 1,000 rows',
  render: () => <DataGridPresentation initialCount={1000} initialMode="virtual" />,
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    },
    docs: {
      story: {
        inline: false,
        height: 1080
      },
      description: {
        story: 'The same working filters and review actions with 1,000 records, continuous virtual scrolling, sticky headers, and inline history rows. Filtering reduces the backing data; the viewport mounts only the visible row window.'
      }
    }
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    data: records.slice(0, 10),
    pagination: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Hover or focus a header to reveal sorting and its column menu. Pin columns to either edge, hide optional fields, or use Move left/right as the keyboard alternative to dragging the header or its title. Selection and expansion remain anchored. The last visible data column takes spare width while a trailing Actions column stays compact; hover or focus just inside a column’s right edge to reveal the full-height resize guide. Both dotted handles are absent; header clicks still sort, and the menu remains independent of dragging.'
      }
    }
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const user = userEvent.setup();
    const canvas = within(canvasElement);
    const page = within(canvasElement.ownerDocument.body);
    const header = (id: string) => canvasElement.querySelector<HTMLTableCellElement>(\`th[data-column-id="\${id}"]\`)!;
    const menu = async (name: string, action: string) => {
      await user.click(canvas.getByRole('button', {
        name: \`\${name} column actions\`
      }));
      await user.click(page.getByRole('menuitem', {
        name: action
      }));
    };
    await step('Reveal the resize guide from the invisible inside edge', async () => {
      const edge = canvas.getByRole('separator', {
        name: 'Resize Record title column'
      });
      const guide = canvasElement.querySelector<HTMLElement>('.aegis-grid-resize-guide');
      if (!guide) throw new Error('Expected a full-height resize guide');
      await expect(canvasElement.querySelector('.aegis-grid-drag')).toBeNull();
      await expect(edge.querySelector('svg')).toBeNull();
      await user.hover(edge);
      await expect(guide).toBeVisible();
      expect(edge.getBoundingClientRect().right).toBeLessThanOrEqual(header('title').getBoundingClientRect().right);
      await user.unhover(edge);
      await expect(guide).not.toBeVisible();
    });
    await step('Sort ascending, descending, and clear from the header', async () => {
      await user.click(canvas.getByRole('button', {
        name: 'Updates'
      }));
      await expect(header('eventCount')).toHaveAttribute('aria-sort', 'ascending');
      await user.click(canvas.getByRole('button', {
        name: 'Updates'
      }));
      await expect(header('eventCount')).toHaveAttribute('aria-sort', 'descending');
      await menu('Updates', 'Sort A to Z');
      await expect(header('eventCount')).toHaveAttribute('aria-sort', 'ascending');
      await user.click(canvas.getByRole('button', {
        name: 'Updates'
      }));
      await expect(header('eventCount')).toHaveAttribute('aria-sort', 'descending');
      await user.click(canvas.getByRole('button', {
        name: 'Updates'
      }));
      await expect(header('eventCount')).not.toHaveAttribute('aria-sort');
    });
    await step('Pin and unpin a column without losing its menu', async () => {
      await menu('Subject', 'Pin right');
      await expect(header('subject')).toHaveAttribute('data-pinned', 'right');
      await menu('Subject', 'Unpin column');
      await expect(header('subject')).not.toHaveAttribute('data-pinned');
    });
    await step('Reorder from the keyboard and restore hidden fields', async () => {
      const trigger = canvas.getByRole('button', {
        name: 'Subject column actions'
      });
      trigger.focus();
      await user.keyboard('{Enter}');
      page.getByRole('menuitem', {
        name: 'Move left'
      }).focus();
      await user.keyboard('{Enter}');
      await waitFor(() => expect(header('subject').cellIndex).toBeLessThan(header('title').cellIndex));
      await menu('Subject', 'Move right');
      await menu('Subject', 'Hide column');
      await expect(canvasElement.querySelector('th[data-column-id="subject"]')).toBeNull();
      await user.click(canvas.getByRole('button', {
        name: 'Columns'
      }));
      await user.click(page.getByRole('menuitemcheckbox', {
        name: 'Subject'
      }));
      await user.keyboard('{Escape}');
      await expect(header('subject')).toBeVisible();
    });
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  argTypes: {
    data: {
      control: false
    },
    density: {
      control: false
    },
    pagination: {
      control: false
    }
  },
  render: args => <div style={{
    display: 'grid',
    gap: 'var(--space-6)'
  }}>
      {(['compact', 'default', 'comfortable'] as GridDensity[]).map(density => <DataGrid {...args} key={density} data={records.slice(0, 3)} density={density} pagination={false} renderToolbar={api => api.selectionActions ?? <strong style={{
      textTransform: 'capitalize',
      fontSize: 'var(--text-sm)'
    }}>
                {density} density
              </strong>} />)}
    </div>
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    initialSorting: [{
      id: 'severity',
      desc: false
    }, {
      id: 'eventCount',
      desc: true
    }]
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    defaultExpandedRowIds: [records[0].id],
    data: records.slice(0, 8),
    pagination: false
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    defaultExpandedRowIds: [records[0].id],
    data: records.slice(0, 8),
    enableSelection: false,
    pagination: false
  },
  parameters: {
    docs: {
      description: {
        story: 'The evidence connector follows the expansion chevron without reserving space for an absent selection column. Expanded evidence stays inside the visible viewport while the outer grid scrolls horizontally.'
      }
    }
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    initialColumnVisibility: {
      subject: false,
      lastSeen: false
    }
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    data: []
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <RetryExample />
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledSelection />
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <ReviewExample />
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    data: thousandRecords,
    pagination: false,
    virtualize: true,
    height: 560,
    defaultExpandedRowIds: [thousandRecords[0].id]
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    data: records.slice(0, 10),
    pagination: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Focus a column resize handle and press Left or Right to adjust by 8px, Shift+Arrow for 24px, Home/End for min/max, or Enter to autosize. A guide follows the active column edge through the visible table body. Pointer drag and double-click autosize use the same constraints.'
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const handle = canvas.getByRole('separator', {
      name: 'Resize Record title column'
    });
    const previous = Number(handle.getAttribute('aria-valuenow'));
    const guide = canvasElement.querySelector<HTMLElement>('.aegis-grid-resize-guide');
    const header = handle.closest('th');
    if (!guide || !header) throw new Error('Expected a resize guide and its column header');
    handle.focus();
    await userEvent.keyboard('{Shift>}{ArrowRight}{/Shift}');
    await expect(handle).toHaveAttribute('aria-valuenow', String(previous + 24));
    await waitFor(() => {
      expect(guide).toBeVisible();
      expect(Math.abs(guide.getBoundingClientRect().right - header.getBoundingClientRect().right)).toBeLessThanOrEqual(2);
      expect(guide.getBoundingClientRect().height).toBeGreaterThan(header.getBoundingClientRect().height);
    });
    await userEvent.tab();
    await expect(guide).not.toBeVisible();
  }
}`,...$.parameters?.docs?.source}}}})))()}tt();export{B as Default,H as DensityMatrix,J as Empty,Y as ErrorAndRetry,W as ExpandedEvidence,G as ExpandedWithoutSelection,R as FilterLayoutSwitching,L as FullPresentation,z as FullVirtualizedPresentation,V as HeaderControls,K as HiddenColumns,$ as KeyboardResizing,Z as KeyboardReview,q as Loading,U as MultiSort,X as SelectionAndBulkActions,Q as VirtualizedThousandRows,et as __namedExportsOrder,I as default};