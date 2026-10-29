import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./button-CLF7L5Y-.js";import{n as a,r as o,t as s}from"./rules-Cqnb58RU.js";import{o as c,r as l}from"./fixtures-BNPjpq8z.js";import{n as u,t as d}from"./ai-diff-review-BjUEJ-4p.js";function f(e){let[t,n]=(0,m.useState)(e.proposed);return(0,h.jsxs)(`div`,{className:`stack`,children:[(0,h.jsx)(i,{onClick:()=>n(t=>t===e.proposed?`${e.proposed}\n# New proposal`:e.proposed),children:`Change proposal`}),(0,h.jsx)(d,{...e,proposed:t})]})}function p(e){let[t,n]=(0,m.useState)(e.proposed),r=(0,m.useRef)(null);return(0,h.jsxs)(`div`,{className:`stack`,children:[(0,h.jsxs)(`div`,{className:`row`,children:[(0,h.jsx)(i,{onClick:()=>n(`${e.proposed}\n# Revised proposal`),children:`Replace proposal`}),(0,h.jsx)(i,{onClick:()=>r.current?.(),children:`Complete review request`})]}),(0,h.jsx)(d,{...e,proposed:t,onApprove:async(t,n)=>{e.onApprove?.(t,n),await new Promise(e=>{r.current=e})}})]})}var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I;function L(){return(L=e((()=>{m=t(),r(),l(),s(),u(),h=n(),{expect:g,fn:_,userEvent:v,waitFor:y,within:b}=__STORYBOOK_MODULE_TEST__,x=o[2].yaml,S=a,C={id:`patterns-ai-aidiffreview`,title:`Patterns/AI Assistance/AiDiffReview`,component:d,parameters:{docs:{description:{component:`AI proposals begin with unchanged context folded and the first change in view. Added lines are green with plus markers; removed lines are red with minus markers, with stronger highlights on the exact changed text. The AI accent identifies proposal provenance only. Show all lines, split/unified layouts, and change navigation support a full review before explicit approval or rejection.`}}},args:{original:x,proposed:S,documentName:`Invoice payment follow-up`,summary:`Notify the workspace after assigning matching records to the owner. Review the added action before applying the proposal.`,provenance:`Based on the supplied invoice workflow configuration.`,reviewer:`Maya Chen`,confidence:`high`,now:c,onApprove:_(),onReject:_(),onStatusChange:_(),maxHeight:360}},w={play:async({canvasElement:e})=>{let t=b(e);await g(t.getByText(`− 0 removed`)).toBeVisible(),await g(t.getByText(`+ 2 added`)).toBeVisible(),await g(t.getByRole(`button`,{name:`Show all lines`})).toHaveAttribute(`aria-pressed`,`true`),await y(()=>g(e.querySelectorAll(`.cm-changedLine`).length).toBeGreaterThan(0));let n=e.querySelector(`.cm-merge-b .cm-changedLine`)?.getBoundingClientRect(),r=e.querySelector(`.cm-mergeView`)?.getBoundingClientRect();await g(n).toBeDefined(),await g(r).toBeDefined(),await g(n.top).toBeGreaterThanOrEqual(r.top),await g(n.bottom).toBeLessThanOrEqual(r.bottom)}},T={args:{defaultMode:`unified`}},E={args:{status:`approved`,reviewedAt:c}},D={args:{status:`rejected`,reviewedAt:c}},O={args:{proposed:x}},k={args:{disabled:!0}},A={play:async({canvasElement:e,args:t})=>{let n=b(e);await g(t.onApprove).not.toHaveBeenCalled(),await v.click(n.getByRole(`button`,{name:`Approve changes`})),await g(t.onApprove).toHaveBeenCalledTimes(1),await g(t.onApprove).toHaveBeenCalledWith(S,g.objectContaining({original:x,proposed:S}));let r=await n.findByText(/Approved by Maya Chen/);await g(r).toBeVisible(),await g(n.queryByRole(`button`,{name:`Approve changes`})).not.toBeInTheDocument()}},j={play:async({canvasElement:e,args:t})=>{let n=b(e);await v.click(n.getByRole(`button`,{name:`Reject`})),await g(t.onReject).toHaveBeenCalledTimes(1),await g(t.onApprove).not.toHaveBeenCalled(),await g(await n.findByText(`The current configuration was kept unchanged.`)).toBeVisible()}},M={args:{onApprove:_(async()=>{throw Error(`The configuration service is temporarily unavailable.`)})},play:async({canvasElement:e})=>{let t=b(e);await v.click(t.getByRole(`button`,{name:`Approve changes`})),await g(await t.findByRole(`alert`)).toHaveTextContent(`Couldn’t approve this proposal`),await g(t.getByRole(`button`,{name:`Approve changes`})).toBeEnabled(),await g(t.queryByText(/Approved by/)).not.toBeInTheDocument()}},N={args:{onReject:_(async()=>{throw Error(`Your review could not be saved.`)})},play:async({canvasElement:e})=>{let t=b(e);await v.click(t.getByRole(`button`,{name:`Reject`})),await g(await t.findByRole(`alert`)).toHaveTextContent(`Couldn’t reject this proposal`),await g(t.getByRole(`button`,{name:`Reject`})).toBeEnabled()}},P={args:{status:`approved`},render:e=>(0,h.jsx)(f,{...e}),play:async({canvasElement:e})=>{let t=b(e);await g(t.getByText(/Approved by Maya Chen/)).toBeVisible(),await v.click(t.getByRole(`button`,{name:`Change proposal`})),await g(t.queryByText(/Approved by Maya Chen/)).not.toBeInTheDocument(),await g(t.getByRole(`button`,{name:`Approve changes`})).toBeEnabled(),await v.click(t.getByRole(`button`,{name:`Change proposal`})),await g(t.queryByText(/Approved by Maya Chen/)).not.toBeInTheDocument()}},F={render:e=>(0,h.jsx)(p,{...e}),play:async({canvasElement:e,args:t})=>{let n=b(e);await v.dblClick(n.getByRole(`button`,{name:`Approve changes`})),await g(t.onApprove).toHaveBeenCalledTimes(1),await g(n.getByRole(`button`,{name:`Approving…`})).toBeDisabled(),await g(n.getByRole(`button`,{name:`Reject`})).toBeDisabled(),await v.click(n.getByRole(`button`,{name:`Replace proposal`})),await v.click(n.getByRole(`button`,{name:`Complete review request`})),await g(n.queryByText(/Approved by/)).not.toBeInTheDocument(),await g(t.onStatusChange).not.toHaveBeenCalledWith(`approved`),await v.click(n.getByRole(`button`,{name:`Approve changes`})),await v.click(n.getByRole(`button`,{name:`Complete review request`})),await y(()=>g(n.getByText(/Approved by Maya Chen/)).toBeVisible())}},I=[`Pending`,`Unified`,`Approved`,`Rejected`,`NoChanges`,`Disabled`,`ApproveExplicitly`,`RejectExplicitly`,`ApprovalFailure`,`RejectionFailure`,`RevisionInvalidatesApproval`,`PendingAndStaleResponse`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('− 0 removed')).toBeVisible();
    await expect(canvas.getByText('+ 2 added')).toBeVisible();
    await expect(canvas.getByRole('button', {
      name: 'Show all lines'
    })).toHaveAttribute('aria-pressed', 'true');
    await waitFor(() => expect(canvasElement.querySelectorAll('.cm-changedLine').length).toBeGreaterThan(0));
    const changed = canvasElement.querySelector('.cm-merge-b .cm-changedLine')?.getBoundingClientRect();
    const viewport = canvasElement.querySelector('.cm-mergeView')?.getBoundingClientRect();
    await expect(changed).toBeDefined();
    await expect(viewport).toBeDefined();
    await expect(changed!.top).toBeGreaterThanOrEqual(viewport!.top);
    await expect(changed!.bottom).toBeLessThanOrEqual(viewport!.bottom);
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    defaultMode: 'unified'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'approved',
    reviewedAt: referenceTime
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'rejected',
    reviewedAt: referenceTime
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    proposed: original
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await expect(args.onApprove).not.toHaveBeenCalled();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Approve changes'
    }));
    await expect(args.onApprove).toHaveBeenCalledTimes(1);
    await expect(args.onApprove).toHaveBeenCalledWith(proposed, expect.objectContaining({
      original,
      proposed
    }));
    const audit = await canvas.findByText(/Approved by Maya Chen/);
    await expect(audit).toBeVisible();
    await expect(canvas.queryByRole('button', {
      name: 'Approve changes'
    })).not.toBeInTheDocument();
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Reject'
    }));
    await expect(args.onReject).toHaveBeenCalledTimes(1);
    await expect(args.onApprove).not.toHaveBeenCalled();
    await expect(await canvas.findByText('The current configuration was kept unchanged.')).toBeVisible();
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    onApprove: fn(async () => {
      throw new Error('The configuration service is temporarily unavailable.');
    })
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Approve changes'
    }));
    await expect(await canvas.findByRole('alert')).toHaveTextContent('Couldn’t approve this proposal');
    await expect(canvas.getByRole('button', {
      name: 'Approve changes'
    })).toBeEnabled();
    await expect(canvas.queryByText(/Approved by/)).not.toBeInTheDocument();
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    onReject: fn(async () => {
      throw new Error('Your review could not be saved.');
    })
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Reject'
    }));
    await expect(await canvas.findByRole('alert')).toHaveTextContent('Couldn’t reject this proposal');
    await expect(canvas.getByRole('button', {
      name: 'Reject'
    })).toBeEnabled();
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'approved'
  },
  render: args => <RevisionExample {...args} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(/Approved by Maya Chen/)).toBeVisible();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Change proposal'
    }));
    await expect(canvas.queryByText(/Approved by Maya Chen/)).not.toBeInTheDocument();
    await expect(canvas.getByRole('button', {
      name: 'Approve changes'
    })).toBeEnabled();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Change proposal'
    }));
    await expect(canvas.queryByText(/Approved by Maya Chen/)).not.toBeInTheDocument();
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: args => <PendingExample {...args} />,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.dblClick(canvas.getByRole('button', {
      name: 'Approve changes'
    }));
    await expect(args.onApprove).toHaveBeenCalledTimes(1);
    await expect(canvas.getByRole('button', {
      name: 'Approving…'
    })).toBeDisabled();
    await expect(canvas.getByRole('button', {
      name: 'Reject'
    })).toBeDisabled();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Replace proposal'
    }));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Complete review request'
    }));
    await expect(canvas.queryByText(/Approved by/)).not.toBeInTheDocument();
    await expect(args.onStatusChange).not.toHaveBeenCalledWith('approved');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Approve changes'
    }));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Complete review request'
    }));
    await waitFor(() => expect(canvas.getByText(/Approved by Maya Chen/)).toBeVisible());
  }
}`,...F.parameters?.docs?.source}}}})))()}L();export{M as ApprovalFailure,A as ApproveExplicitly,E as Approved,k as Disabled,O as NoChanges,w as Pending,F as PendingAndStaleResponse,j as RejectExplicitly,D as Rejected,N as RejectionFailure,P as RevisionInvalidatesApproval,T as Unified,I as __namedExportsOrder,C as default};