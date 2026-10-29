import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,r}from"./fixtures-BNPjpq8z.js";import{n as i,t as a}from"./json-viewer-BDrAhMhh.js";var o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{r(),i(),o=t(),s={id:`components-data-jsonviewer`,title:`Components/Code/JsonViewer`,component:a,tags:[`autodocs`],args:{value:{"@timestamp":`2026-10-06T08:24:16.481Z`,event:{id:`EVT-1002-3`,category:`project`,action:`handoff-requested`,outcome:`success`},project:{id:`PRJ-204`,name:`Customer portal refresh`,archived:!1},owner:{id:`elena`,name:`Elena Voss`,team:`Product operations`},checklist:{completed:8,total:10,next:{title:`Confirm the delivery owner`,dueDate:`2026-10-09`},description:`Review the project delivery checklist, confirm the customer handoff, and update the next milestone before sharing the release note with the workspace.`,approvedAt:null},review:{confidence:.94,requested:!0,tags:[`delivery`,`handoff`]}},label:`Project update payload`,defaultExpandedDepth:2}},c={},l={args:{rootName:`batch`,value:{related_events:[n[0].events[0].payload,null,{confirmed:!1,confidence:0,source:`Workspace`,evidence:[]}],external_context:null,tags:[],annotations:{}},defaultExpandedDepth:3}},u={render:()=>(0,o.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-4)`},children:[(0,o.jsx)(a,{label:`Workflow enabled`,rootName:`enabled`,value:!0}),(0,o.jsx)(a,{label:`Unassigned owner`,rootName:`assignee`,value:null}),(0,o.jsx)(a,{label:`Workspace name`,rootName:`workspace`,value:`Product operations`}),(0,o.jsx)(a,{label:`Related event count`,rootName:`event_count`,value:1284})]})},d={args:{label:`Related event batch`,rootName:`events`,value:n.flatMap(e=>e.events.map(t=>({id:t.id,record_id:e.id,...t.payload}))),maxVisibleItems:25,maxHeight:420,defaultExpandedDepth:1}},f={args:{label:`Imported workspace fields`,value:{"workspace.account.id":`ACC-204`,"import options":{"source name":`Customer portal`,"batch-id":`batch-72c9d10f`},"object[0]":{'display"name':`Customer handoff`,observed:!0}},defaultExpandedDepth:3}},p={args:{defaultExpandedDepth:0}},m=[`NestedEvent`,`ArraysAndNulls`,`PrimitiveValues`,`LargePayload`,`ComplexPaths`,`Collapsed`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    rootName: 'batch',
    value: {
      related_events: [records[0].events[0].payload, null, {
        confirmed: false,
        confidence: 0,
        source: 'Workspace',
        evidence: []
      }],
      external_context: null,
      tags: [],
      annotations: {}
    },
    defaultExpandedDepth: 3
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--space-4)'
  }}>
      <JsonViewer label="Workflow enabled" rootName="enabled" value={true} />
      <JsonViewer label="Unassigned owner" rootName="assignee" value={null} />
      <JsonViewer label="Workspace name" rootName="workspace" value="Product operations" />
      <JsonViewer label="Related event count" rootName="event_count" value={1284} />
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Related event batch',
    rootName: 'events',
    value: records.flatMap(record => record.events.map(event => ({
      id: event.id,
      record_id: record.id,
      ...event.payload
    }))),
    maxVisibleItems: 25,
    maxHeight: 420,
    defaultExpandedDepth: 1
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Imported workspace fields',
    value: {
      'workspace.account.id': 'ACC-204',
      'import options': {
        'source name': 'Customer portal',
        'batch-id': 'batch-72c9d10f'
      },
      'object[0]': {
        'display"name': 'Customer handoff',
        observed: true
      }
    },
    defaultExpandedDepth: 3
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    defaultExpandedDepth: 0
  }
}`,...p.parameters?.docs?.source}}}})))()}h();export{l as ArraysAndNulls,p as Collapsed,f as ComplexPaths,d as LargePayload,c as NestedEvent,u as PrimitiveValues,m as __namedExportsOrder,s as default};