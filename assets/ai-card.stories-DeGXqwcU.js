import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{a as r,i,n as a,t as o}from"./ai-card-P7wq4tSR.js";import{n as s,t as c}from"./streaming-skeleton-CPTJTthh.js";function l(){let[e,t]=(0,u.useState)(null),[n,r]=(0,u.useState)(1);return(0,d.jsxs)(`div`,{className:`stack`,style:{maxWidth:640},children:[(0,d.jsxs)(o,{title:`Review the delivery checklist before closing this record`,confidence:`high`,provenance:`REC-1002 · Project checklist · Summary ${n}`,feedback:e,onFeedback:t,onRegenerate:()=>{r(e=>e+1),t(null)},children:[(0,d.jsx)(`p`,{children:`The project checklist still has an unassigned review. Confirm the owner and due date before completing the handoff.`}),(0,d.jsxs)(`p`,{children:[(0,d.jsx)(`strong`,{children:`Suggested next step:`}),` assign the remaining review and confirm the delivery date.`]})]}),(0,d.jsx)(`p`,{role:`status`,className:`muted`,children:e===null?`No reviewer feedback yet.`:e===`positive`?`Marked as helpful.`:`Marked as unhelpful.`})]})}var u,d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{u=t(),r(),s(),d=n(),{useArgs:f}=__STORYBOOK_MODULE_PREVIEW_API__,{expect:p,userEvent:m,within:h}=__STORYBOOK_MODULE_TEST__,g={id:`components-ai-aicard`,title:`Components/AI/AiCard`,component:o,subcomponents:{AiLabel:i,AiFeedback:a},tags:[`autodocs`]},_={render:()=>(0,d.jsx)(l,{}),play:async({canvasElement:e})=>{let t=h(e);await m.click(t.getByRole(`button`,{name:`Helpful response`})),await p(t.getByRole(`button`,{name:`Helpful response`})).toHaveAttribute(`aria-pressed`,`true`),await m.click(t.getByRole(`button`,{name:`Regenerate response`})),await p(t.getByText(/Summary 2/)).toBeVisible()}},v={render:()=>(0,d.jsx)(o,{title:`Preparing a review summary`,loading:!0,provenance:`2 selected records · Last 24h`,children:(0,d.jsx)(c,{lines:4})})},y={render:()=>(0,d.jsx)(`div`,{className:`story-grid`,children:[`high`,`medium`,`low`].map((e,t)=>(0,d.jsx)(o,{title:[`Required fields are present`,`Owner needs confirmation`,`More context is needed`][t],confidence:e,provenance:[`Project checklist · REC-1002`,`Customer handoff · REC-1001`,`Workspace note`][t],children:[`The supplied checklist contains an owner and delivery date. Confirm these values before applying the proposed update.`,`The handoff note names a team but does not identify the next owner.`,`The note does not include a due date or supporting detail. Ask for context before proposing a change.`][t]},e))})},b={args:{title:`Review the project handoff`,children:`Confirm the remaining owner and due date before completing the handoff.`,confidence:`high`,provenance:`Project checklist · 2 supplied records`,loading:!1,showFeedback:!0,showRegenerate:!0,feedback:null},argTypes:{title:{control:`text`},children:{control:`text`,name:`Content`},provenance:{control:`text`},confidence:{control:`select`,options:[`high`,`medium`,`low`]},loading:{control:`boolean`},showFeedback:{control:`boolean`,name:`Feedback actions`},showRegenerate:{control:`boolean`,name:`Regenerate action`},feedback:{control:!1}},render:function({showFeedback:e,showRegenerate:t,...n}){let[,r]=f();return(0,d.jsx)(`div`,{style:{width:`100%`,maxWidth:640},children:(0,d.jsx)(o,{...n,onFeedback:e?e=>r({feedback:e}):void 0,onRegenerate:t?()=>r({feedback:null,provenance:`Regenerated locally from the supplied project checklist`}):void 0})})}},x=[`ReviewerReview`,`Pending`,`ConfidenceLevels`,`Playground`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <ReviewCard />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Helpful response'
    }));
    await expect(canvas.getByRole('button', {
      name: 'Helpful response'
    })).toHaveAttribute('aria-pressed', 'true');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Regenerate response'
    }));
    await expect(canvas.getByText(/Summary 2/)).toBeVisible();
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <AiCard title="Preparing a review summary" loading provenance="2 selected records · Last 24h">
      <StreamingSkeleton lines={4} />
    </AiCard>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-grid">
      {(['high', 'medium', 'low'] as const).map((confidence, index) => <AiCard key={confidence} title={['Required fields are present', 'Owner needs confirmation', 'More context is needed'][index]} confidence={confidence} provenance={['Project checklist · REC-1002', 'Customer handoff · REC-1001', 'Workspace note'][index]}>
          {['The supplied checklist contains an owner and delivery date. Confirm these values before applying the proposed update.', 'The handoff note names a team but does not identify the next owner.', 'The note does not include a due date or supporting detail. Ask for context before proposing a change.'][index]}
        </AiCard>)}
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Review the project handoff',
    children: 'Confirm the remaining owner and due date before completing the handoff.',
    confidence: 'high',
    provenance: 'Project checklist · 2 supplied records',
    loading: false,
    showFeedback: true,
    showRegenerate: true,
    feedback: null
  },
  argTypes: {
    title: {
      control: 'text'
    },
    children: {
      control: 'text',
      name: 'Content'
    },
    provenance: {
      control: 'text'
    },
    confidence: {
      control: 'select',
      options: ['high', 'medium', 'low']
    },
    loading: {
      control: 'boolean'
    },
    showFeedback: {
      control: 'boolean',
      name: 'Feedback actions'
    },
    showRegenerate: {
      control: 'boolean',
      name: 'Regenerate action'
    },
    feedback: {
      control: false
    }
  },
  render: function Playground({
    showFeedback,
    showRegenerate,
    ...args
  }) {
    const [, updateArgs] = useArgs<PlaygroundArgs>();
    return <div style={{
      width: '100%',
      maxWidth: 640
    }}>
        <AiCard {...args} onFeedback={showFeedback ? feedback => updateArgs({
        feedback
      }) : undefined} onRegenerate={showRegenerate ? () => updateArgs({
        feedback: null,
        provenance: 'Regenerated locally from the supplied project checklist'
      }) : undefined} />
      </div>;
  }
}`,...b.parameters?.docs?.source}}}})))()}S();export{y as ConfidenceLevels,v as Pending,b as Playground,_ as ReviewerReview,x as __namedExportsOrder,g as default};