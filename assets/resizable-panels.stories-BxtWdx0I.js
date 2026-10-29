import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./severity-badge-DyfgzVKK.js";import{i,n as a,r as o,t as s}from"./resizable-panels-D4o7deHM.js";var c,l,u,d,f,p,m;function h(){return(h=e((()=>{i(),n(),c=t(),l={id:`components-layout-resizablepanels`,title:`Components/Layout/ResizablePanels`,component:a,subcomponents:{ResizablePanel:s,ResizeHandle:o},parameters:{docs:{description:{component:"`ResizablePanel` inherits `PanelProps` from react-resizable-panels and forwards native div attributes. Size numbers are pixels; explicit strings such as `\"35%\"` keep proportional layouts.\n\n| ResizablePanel prop | Type | Default / behavior |\n| --- | --- | --- |\n| id | `string` or `number` | Generated ID; use stable IDs for saved layouts |\n| children | `ReactNode` | Content within the panel |\n| defaultSize | `number` or `string` | Shares available space when omitted |\n| minSize / maxSize | `number` or `string` | `0%` / `100%` |\n| collapsible | `boolean` | Enables collapse below the minimum size |\n| collapsedSize | `number` or `string` | `0%` |\n| collapsedThreshold | `number` or `string` | Half the gap between collapsedSize and minSize |\n| disabled | `boolean` | Prevents direct and indirect resizing |\n| groupResizeBehavior | `'preserve-relative-size'` or `'preserve-pixel-size'` | `'preserve-relative-size'` |\n| onResize | `(size, id, previousSize) => void` | Sizes contain `asPercentage` and `inPixels` |\n| panelRef / elementRef | `Ref<PanelImperativeHandle>` / `Ref<HTMLDivElement>` | Imperative panel controls / DOM access |\n| className / style | `string` / `CSSProperties` | Native presentation props |\n\nCollapsed panels become inert and hidden from assistive technology. `ResizeHandle` has its own prop table below and supports arrow keys and Enter.\n"}}},tags:[`autodocs`],args:{orientation:`horizontal`},render:e=>(0,c.jsxs)(a,{...e,style:{height:420},children:[(0,c.jsx)(s,{id:`records`,defaultSize:`65%`,minSize:`25%`,children:(0,c.jsxs)(`div`,{className:`story-layout`,style:{height:`100%`},children:[(0,c.jsx)(`h3`,{children:`Record queue`}),(0,c.jsx)(`p`,{className:`muted`,children:`Drag the divider or focus it and use the arrow keys to resize the project workspace.`}),(0,c.jsxs)(`div`,{className:`row`,children:[(0,c.jsx)(r,{severity:`high`}),`Customer portal redesign`]})]})}),(0,c.jsx)(o,{label:`Resize record queue and documents`}),(0,c.jsx)(s,{id:`documents`,defaultSize:`35%`,minSize:`20%`,children:(0,c.jsxs)(`div`,{className:`story-layout`,style:{height:`100%`},children:[(0,c.jsx)(`h3`,{children:`Documents`}),(0,c.jsx)(`p`,{className:`muted`,children:`Six related process events`}),(0,c.jsx)(`code`,{children:`PRJ-0042 · Customer portal redesign`})]})})]})},u={},d={args:{orientation:`vertical`}},f={args:{disabled:!0}},p={render:()=>(0,c.jsxs)(a,{style:{height:320},children:[(0,c.jsx)(s,{id:`assistant`,defaultSize:`30%`,minSize:`20%`,collapsible:!0,collapsedSize:`0%`,children:(0,c.jsxs)(`div`,{className:`story-layout`,style:{height:`100%`},children:[(0,c.jsx)(`h3`,{children:`Aegis assistant`}),(0,c.jsx)(`p`,{className:`muted`,children:`Review the selected record documents.`})]})}),(0,c.jsx)(o,{label:`Resize or collapse assistant`}),(0,c.jsx)(s,{id:`main`,defaultSize:`70%`,minSize:`30%`,children:(0,c.jsxs)(`div`,{className:`story-layout`,style:{height:`100%`},children:[(0,c.jsx)(`h3`,{children:`Project`}),(0,c.jsx)(`p`,{children:`Press Enter on the divider to collapse or restore the assistant.`})]})})]})},m=[`Horizontal`,`Vertical`,`Disabled`,`Collapsible`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <ResizablePanels style={{
    height: 320
  }}>
      <ResizablePanel id="assistant" defaultSize="30%" minSize="20%" collapsible collapsedSize="0%">
        <div className="story-layout" style={{
        height: '100%'
      }}>
          <h3>Aegis assistant</h3>
          <p className="muted">Review the selected record documents.</p>
        </div>
      </ResizablePanel>
      <ResizeHandle label="Resize or collapse assistant" />
      <ResizablePanel id="main" defaultSize="70%" minSize="30%">
        <div className="story-layout" style={{
        height: '100%'
      }}>
          <h3>Project</h3>
          <p>Press Enter on the divider to collapse or restore the assistant.</p>
        </div>
      </ResizablePanel>
    </ResizablePanels>
}`,...p.parameters?.docs?.source}}}})))()}h();export{p as Collapsible,f as Disabled,u as Horizontal,d as Vertical,m as __namedExportsOrder,l as default};