import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./button-B9oXzAWe.js";import{n as a,t as o}from"./ai-CcIvUtVk.js";import{a as s,r as c}from"./fixtures-BNPjpq8z.js";import{n as l,t as u}from"./ai-panel-Cy0FLsV-.js";function d(){let[e,t]=(0,p.useState)(!0),[n,r]=(0,p.useState)(``);return(0,m.jsxs)(`div`,{style:{display:`flex`,height:800,minWidth:780},children:[(0,m.jsxs)(`main`,{style:{flex:1,padding:24},children:[(0,m.jsx)(`h1`,{children:`Review workspace`}),(0,m.jsx)(`p`,{children:`The assistant pushes the workspace and keeps keyboard focus unrestricted.`}),(0,m.jsx)(i,{intent:`ai`,onClick:()=>t(!e),children:`Toggle AI panel`}),(0,m.jsx)(`p`,{role:`status`,children:n})]}),(0,m.jsx)(u,{docked:!0,open:e,onOpenChange:t,context:y,initialMessages:[x,S],onEvidenceClick:e=>r(`Inspecting ${e.id}`)})]})}function f(){let[e,t]=(0,p.useState)(),[n,r]=(0,p.useState)([y[0]]);return(0,m.jsx)(p.StrictMode,{children:(0,m.jsxs)(`div`,{style:{display:`flex`,height:800},children:[(0,m.jsxs)(`main`,{style:{flex:1,padding:24},children:[(0,m.jsx)(`h1`,{children:`Replace an active request`}),(0,m.jsx)(`p`,{children:`Late events from the superseded response are ignored. New selection does not alter an existing turn.`}),(0,m.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:8},children:[(0,m.jsx)(i,{onClick:()=>t({id:`first-${Date.now()}`,prompt:`Explain the first record.`,context:[y[0]]}),children:`Explain first record`}),(0,m.jsx)(i,{onClick:()=>t({id:`second-${Date.now()}`,prompt:`Explain the second record.`,context:[y[1]]}),children:`Explain second record`}),(0,m.jsx)(i,{onClick:()=>r([y[2]]),children:`Change visible selection`})]})]}),(0,m.jsx)(u,{docked:!0,defaultOpen:!0,context:n,request:e,streamResponse:A})]})})}var p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I;function L(){return(L=e((()=>{p=t(),r(),c(),o(),l(),m=n(),{expect:h,userEvent:g,waitFor:_,within:v}=__STORYBOOK_MODULE_TEST__,y=s.slice(0,3).map(e=>({id:e.id,label:e.id,description:e.title,kind:`record`})),b=`2026-10-06T08:30:00.000Z`,x={id:`user-example`,role:`user`,content:`Which checks should I complete before linking these records?`,status:`complete`,context:y,steps:[],citations:[],timestamp:b},S={id:`assistant-example`,role:`assistant`,content:`## Review the selected records\n\nThe review currently includes **${y.map(e=>e.id).join(`, `)}**. Verify record identifiers and source timestamps before linking them.\n\n1. Inspect each original event payload.\n2. Compare the observed activity with approved changes.\n3. Record the next step and assigned owner.\n\nNo external data was fetched and no records were changed.`,status:`complete`,context:y,steps:[{id:`scope`,label:`Scoped the response to three selected record references`,status:`complete`}],citations:y,timestamp:b,provenance:`Local demo · selected evidence only`},C={id:`patterns-ai-aipanel`,title:`Patterns/AI Assistance/AiPanel`,component:u,tags:[`autodocs`],args:{defaultOpen:!0,context:y,availableContext:y},parameters:{layout:`fullscreen`,docs:{description:{component:"Drag the left edge to resize on desktop, or focus the separator and use Left/Right arrows (Shift for larger steps), Home, and End. Docked panels reserve 480px for the workspace when space allows. The conversation and draft remain intact while resizing; narrow screens fit the viewport. Set `resizable={false}` for a fixed-width panel."},story:{inline:!1,height:760}}}},w={},T={args:{initialMessages:[x,S]}},E={args:{request:{id:`streaming-example`,prompt:`Explain these selected records.`,context:y}}},D={args:{initialMessages:[x,{...S,status:`stopped`,content:`## Review the selected evidence

Start by confirming the record identifiers for the selected records.`}]}},O={args:{initialMessages:[x,{...S,status:`error`,error:`The connection was interrupted. Your evidence and partial answer are preserved.`}]}},k={render:()=>(0,m.jsx)(d,{}),play:async({canvasElement:e})=>{let t=v(e),n=t.getByRole(`button`,{name:`Toggle AI panel`});await g.click(n),await _(()=>h(t.queryByRole(`separator`,{name:`Resize side panel`})).not.toBeInTheDocument()),await g.click(n);let r=await t.findByRole(`separator`,{name:`Resize side panel`});await h(n).toHaveFocus(),h(getComputedStyle(r,`::after`).backgroundColor).toBe(`rgba(0, 0, 0, 0)`),await g.tab(),await h(r).toHaveFocus(),h(getComputedStyle(r,`::after`).backgroundColor).not.toBe(`rgba(0, 0, 0, 0)`),await g.keyboard(`{Escape}`),await _(()=>h(n).toHaveFocus()),await g.keyboard(`{Enter}`),await h(t.getByRole(`separator`,{name:`Resize side panel`})).toBeInTheDocument()}},A=async function*(e){yield{type:`token`,text:`Review started for ${e.context?.[0]?.id??`unscoped evidence`}. `},await new Promise(e=>setTimeout(e,650)),yield{type:`token`,text:`Finished only for ${e.context?.[0]?.id??`unscoped evidence`}.`};for(let t of e.context??[])yield{type:`citation`,citation:t};yield{type:`complete`}},j={render:()=>(0,m.jsx)(f,{})},M=async function*(){throw yield{type:`token`,text:`The selected evidence is preserved. `},Error(`Demo connection interrupted. Try again to regenerate the response.`)},N={args:{streamResponse:M,request:{id:`failed-stream`,prompt:`Explain these records.`,context:y}}},P=(e,t)=>a(e,{...t,delayMs:0}),F={render:e=>(0,m.jsx)(p.StrictMode,{children:(0,m.jsx)(u,{...e,streamResponse:P,request:{id:`strict-mode-seed`,prompt:`Explain the selected record.`,context:[y[0]]}})})},I=[`Empty`,`Overlay`,`Streaming`,`Stopped`,`Interrupted`,`DockedPush`,`RequestReplacement`,`FailedStream`,`StrictModeSeed`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    initialMessages: [user, response]
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    request: {
      id: 'streaming-example',
      prompt: 'Explain these selected records.',
      context
    }
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    initialMessages: [user, {
      ...response,
      status: 'stopped',
      content: '## Review the selected evidence\\n\\nStart by confirming the record identifiers for the selected records.'
    }]
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    initialMessages: [user, {
      ...response,
      status: 'error',
      error: 'The connection was interrupted. Your evidence and partial answer are preserved.'
    }]
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <DockedDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole('button', {
      name: 'Toggle AI panel'
    });
    await userEvent.click(toggle);
    await waitFor(() => expect(canvas.queryByRole('separator', {
      name: 'Resize side panel'
    })).not.toBeInTheDocument());
    await userEvent.click(toggle);
    const separator = await canvas.findByRole('separator', {
      name: 'Resize side panel'
    });
    await expect(toggle).toHaveFocus();
    expect(getComputedStyle(separator, '::after').backgroundColor).toBe('rgba(0, 0, 0, 0)');
    await userEvent.tab();
    await expect(separator).toHaveFocus();
    expect(getComputedStyle(separator, '::after').backgroundColor).not.toBe('rgba(0, 0, 0, 0)');
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(toggle).toHaveFocus());
    await userEvent.keyboard('{Enter}');
    await expect(canvas.getByRole('separator', {
      name: 'Resize side panel'
    })).toBeInTheDocument();
  }
}`,...k.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <ReplacementDemo />
}`,...j.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    streamResponse: failedResponse,
    request: {
      id: 'failed-stream',
      prompt: 'Explain these records.',
      context
    }
  }
}`,...N.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: args => <StrictMode>
      <AiPanel {...args} streamResponse={fastResponse} request={{
      id: 'strict-mode-seed',
      prompt: 'Explain the selected record.',
      context: [context[0]]
    }} />
    </StrictMode>
}`,...F.parameters?.docs?.source}}}})))()}L();export{k as DockedPush,w as Empty,N as FailedStream,O as Interrupted,T as Overlay,j as RequestReplacement,D as Stopped,E as Streaming,F as StrictModeSeed,I as __namedExportsOrder,C as default};