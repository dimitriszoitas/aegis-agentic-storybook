import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./button-BpCMuPJ8.js";import{a,r as o}from"./ai-card-BTf5Hmh4.js";import{n as s,t as c}from"./banner-ygQdAu4k.js";import{n as l,t as u}from"./ai-message-Z5hWJ5zd.js";import{n as d,t as f}from"./ai-CcIvUtVk.js";import{o as p,r as m,t as h}from"./fixtures-BNPjpq8z.js";function g(){let[e,t]=(0,y.useState)(),[n,r]=(0,y.useState)(E);return(0,b.jsxs)(`div`,{className:`stack`,children:[(0,b.jsx)(u,{message:n,onCitationClick:t,onFeedback:e=>r(t=>({...t,feedback:e})),resultCards:(0,b.jsx)(o,{confidence:`medium`,provenance:`Reviewer validation needed`,children:`These records have separate owners. Confirm the intended handoff before combining their next steps.`})}),e&&(0,b.jsx)(c,{title:`${e.kind===`config`?`Configuration`:`Record`} ${e.id}`,onDismiss:()=>t(void 0),children:e.description??`Review the supplied context for ${e.label}.`})]})}function _({message:e}){let[t,n]=(0,y.useState)(e);return(0,b.jsx)(u,{message:t,onRegenerate:()=>n({...E,id:`recovered`})})}function v({slowFirstResponse:e=!1}){let[t,n]=(0,y.useState)(),r=(0,y.useRef)(null),a=(0,y.useRef)(0),[s,c]=(0,y.useState)(``);(0,y.useEffect)(()=>()=>r.current?.abort(),[]);async function l(){r.current?.abort();let t=new AbortController;r.current=t,c(``),n({...E,id:`live-${++a.current}`,content:``,steps:[],citations:[],status:`streaming`,feedback:void 0});try{for await(let i of d({id:`review-live`,prompt:`Review the selected records`,context:T},{signal:t.signal,delayMs:e&&a.current===1?100:14})){if(r.current!==t)break;n(e=>e&&(i.type===`token`?{...e,content:e.content+i.text}:i.type===`step`?{...e,steps:[...e.steps.filter(e=>e.id!==i.step.id),i.step]}:i.type===`citation`?{...e,citations:[...e.citations,i.citation]}:{...e,status:`complete`}))}}catch(e){if(r.current!==t)return;n(n=>n&&{...n,status:t.signal.aborted?`stopped`:`error`,error:e instanceof globalThis.Error?e.message:`Could not finish this response`})}}return(0,b.jsxs)(`div`,{className:`stack`,children:[(0,b.jsxs)(`div`,{className:`row`,children:[(0,b.jsx)(i,{intent:`ai`,onClick:l,disabled:t?.status===`streaming`,children:t?`Generate another summary`:`Generate review summary`}),t?.status===`streaming`&&(0,b.jsx)(i,{emphasis:`ghost`,onClick:()=>r.current?.abort(),children:`Stop generation`})]}),t?(0,b.jsx)(u,{message:t,onRegenerate:l,onCitationClick:e=>c(`Opened ${e.kind} ${e.label}`),onFeedback:e=>n(t=>t&&{...t,feedback:e})},t.id):(0,b.jsx)(o,{provenance:`Local demo · No external data or automatic changes`,children:`Generate a response from the supplied record and configuration references. Stop at any time; your partial response remains available.`}),s&&(0,b.jsx)(`p`,{role:`status`,children:s})]})}var y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I;function L(){return(L=e((()=>{y=t(),l(),a(),s(),r(),f(),m(),b=n(),{expect:x,userEvent:S,within:C}=__STORYBOOK_MODULE_TEST__,w=h[0],T=w.evidence.map(e=>({id:e,label:e,kind:e.startsWith(`WF`)?`config`:`record`})),E={id:`review`,role:`assistant`,content:w.response,status:`complete`,context:T,citations:T,steps:w.steps.map((e,t)=>({...e,id:`step-${t}`})),timestamp:new Date(p).toISOString(),provenance:`Local demo · Selected record context`},D={id:`components-ai-aimessage`,title:`Components/AI/AiMessage`,component:u,tags:[`autodocs`],decorators:[e=>(0,b.jsx)(`div`,{style:{maxWidth:760,margin:`0 auto`},children:(0,b.jsx)(e,{})})],args:{message:E}},O={render:()=>(0,b.jsx)(g,{}),play:async({canvasElement:e})=>{let t=C(e);await S.click(t.getByText(`Reviewed ${w.steps.length} evidence steps`)),await x(t.getByText(w.steps[0].label)).toBeVisible(),await S.click(t.getByRole(`button`,{name:`Open ${T[0].kind}: ${T[0].label}`})),await x(t.getByText(`Record ${T[0].id}`)).toBeVisible(),await S.click(t.getByRole(`button`,{name:`Helpful response`})),await x(t.getByRole(`button`,{name:`Helpful response`})).toHaveAttribute(`aria-pressed`,`true`)}},k={args:{message:{...E,status:`streaming`,content:`## Reviewing the selected evidence

The supplied project checklist has an **unassigned review**. Confirm the next owner before`,citations:[],steps:[{id:`read`,label:`Read the supplied project checklist`,status:`complete`},{id:`compare`,label:`Reviewing the owner and due date`,status:`working`},{id:`summary`,label:`Preparing a review summary`,status:`pending`}]}}},A={args:{message:{...E,status:`streaming`,content:``,citations:[],steps:[{id:`scope`,label:`Reading the selected record context`,status:`working`}]}}},j={args:{message:{...E,status:`stopped`,content:`The selected activity spans project and workspace records. Compare timestamps and record identifiers before`,citations:[]}}},M={render:e=>(0,b.jsx)(_,{message:e.message}),args:{message:{...E,status:`error`,error:`The local response was interrupted. Retry to generate a new summary.`,content:`I reviewed the selected record identifiers.`,steps:[{id:`context`,label:`Read the selected context`,status:`complete`},{id:`summary`,label:`Could not finish the summary`,status:`error`}]}}},N={args:{message:{...E,role:`user`,content:`Review these two records and show the evidence behind your recommendations.`,steps:[],citations:[]}}},P={render:()=>(0,b.jsx)(v,{})},F={render:()=>(0,b.jsx)(v,{slowFirstResponse:!0}),play:async({canvasElement:e})=>{let t=C(e);await S.click(t.getByRole(`button`,{name:`Generate review summary`})),await S.click(await t.findByRole(`button`,{name:`Stop generation`}));let n=await t.findByRole(`button`,{name:`Regenerate response`});await x(e.querySelector(`.aegis-ai-markdown`)).toBeNull(),await x(t.queryByRole(`button`,{name:`Copy response`})).toBeNull(),await S.click(n),await x(await t.findByRole(`button`,{name:`Copy response`},{timeout:15e3})).toBeVisible(),await x(t.getByRole(`button`,{name:`Open ${T[0].kind}: ${T[0].label}`})).toBeVisible()}},I=[`CompleteWithEvidence`,`Streaming`,`Thinking`,`Stopped`,`Error`,`UserMessage`,`InteractiveStreaming`,`StoppedBeforeFirstToken`],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <CompleteResponse />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText(\`Reviewed \${fixture.steps.length} evidence steps\`));
    await expect(canvas.getByText(fixture.steps[0].label)).toBeVisible();
    await userEvent.click(canvas.getByRole('button', {
      name: \`Open \${evidence[0].kind}: \${evidence[0].label}\`
    }));
    await expect(canvas.getByText(\`Record \${evidence[0].id}\`)).toBeVisible();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Helpful response'
    }));
    await expect(canvas.getByRole('button', {
      name: 'Helpful response'
    })).toHaveAttribute('aria-pressed', 'true');
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    message: {
      ...completeMessage,
      status: 'streaming',
      content: '## Reviewing the selected evidence\\n\\nThe supplied project checklist has an **unassigned review**. Confirm the next owner before',
      citations: [],
      steps: [{
        id: 'read',
        label: 'Read the supplied project checklist',
        status: 'complete'
      }, {
        id: 'compare',
        label: 'Reviewing the owner and due date',
        status: 'working'
      }, {
        id: 'summary',
        label: 'Preparing a review summary',
        status: 'pending'
      }]
    }
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    message: {
      ...completeMessage,
      status: 'streaming',
      content: '',
      citations: [],
      steps: [{
        id: 'scope',
        label: 'Reading the selected record context',
        status: 'working'
      }]
    }
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    message: {
      ...completeMessage,
      status: 'stopped',
      content: 'The selected activity spans project and workspace records. Compare timestamps and record identifiers before',
      citations: []
    }
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => <RecoverableResponse message={args.message} />,
  args: {
    message: {
      ...completeMessage,
      status: 'error',
      error: 'The local response was interrupted. Retry to generate a new summary.',
      content: 'I reviewed the selected record identifiers.',
      steps: [{
        id: 'context',
        label: 'Read the selected context',
        status: 'complete'
      }, {
        id: 'summary',
        label: 'Could not finish the summary',
        status: 'error'
      }]
    }
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    message: {
      ...completeMessage,
      role: 'user',
      content: 'Review these two records and show the evidence behind your recommendations.',
      steps: [],
      citations: []
    }
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <StreamDemo />
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <StreamDemo slowFirstResponse />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Generate review summary'
    }));
    await userEvent.click(await canvas.findByRole('button', {
      name: 'Stop generation'
    }));
    const regenerate = await canvas.findByRole('button', {
      name: 'Regenerate response'
    });
    await expect(canvasElement.querySelector('.aegis-ai-markdown')).toBeNull();
    await expect(canvas.queryByRole('button', {
      name: 'Copy response'
    })).toBeNull();
    await userEvent.click(regenerate);
    await expect(await canvas.findByRole('button', {
      name: 'Copy response'
    }, {
      timeout: 15000
    })).toBeVisible();
    await expect(canvas.getByRole('button', {
      name: \`Open \${evidence[0].kind}: \${evidence[0].label}\`
    })).toBeVisible();
  }
}`,...F.parameters?.docs?.source}}}})))()}L();export{O as CompleteWithEvidence,M as Error,P as InteractiveStreaming,j as Stopped,F as StoppedBeforeFirstToken,k as Streaming,A as Thinking,N as UserMessage,I as __namedExportsOrder,D as default};