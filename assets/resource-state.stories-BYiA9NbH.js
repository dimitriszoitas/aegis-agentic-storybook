import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./button-Bc30j06n.js";import{n as a,t as o}from"./text-input-CX6xjgOR.js";import{a as s,i as c,n as l,t as u}from"./resource-state-DPU1os0A.js";function d(){let[e,t]=(0,f.useState)(`ready`);return(0,p.jsxs)(`div`,{className:`stack`,children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(i,{onClick:()=>t(`refreshing`),children:`Refresh locally`}),(0,p.jsx)(i,{onClick:()=>t(`stale`),children:`Simulate failure`})]}),(0,p.jsx)(c,{label:`Saved customer`,status:e,onRetry:()=>t(`ready`),children:(0,p.jsx)(o,{label:`Customer note`,defaultValue:`Original note`})})]})}var f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{f=t(),r(),a(),s(),u(),p=n(),{expect:m,userEvent:h,within:g}=__STORYBOOK_MODULE_TEST__,_={id:`patterns-resourcestate`,title:`Components/Feedback/ResourceState`,component:c,tags:[`autodocs`],args:{label:`Customer resource`,status:`ready`,children:null,retrying:!1,loadingLabel:`Loading customers…`,retryLabel:`Try again`},argTypes:{status:{control:`select`,options:[`initial-loading`,`ready`,`refreshing`,`stale`,`error`,`empty`]},label:{control:`text`},message:{control:`text`},loadingLabel:{control:`text`},retryLabel:{control:`text`},retrying:{control:`boolean`},children:{control:!1},loadingContent:{control:!1},emptyAction:{control:!1},onRetry:{control:!1}},render:e=>e.status===`ready`||e.status===`refreshing`||e.status===`stale`?(0,p.jsx)(c,{...e,children:(0,p.jsx)(o,{label:`Local draft`,defaultValue:`Alex Morgan`})}):(0,p.jsx)(c,{...e,children:void 0})},v={},y={render:()=>(0,p.jsx)(d,{}),play:async({canvasElement:e})=>{let t=g(e),n=t.getByRole(`textbox`,{name:`Customer note`});await h.clear(n),await h.type(n,`Keep this draft`),await h.click(t.getByRole(`button`,{name:`Refresh locally`})),await m(t.getByRole(`region`,{name:`Saved customer`})).toHaveAttribute(`aria-busy`,`true`),await m(n).toHaveValue(`Keep this draft`),await h.click(t.getByRole(`button`,{name:`Simulate failure`})),await m(n).toHaveValue(`Keep this draft`),await h.click(t.getByRole(`button`,{name:`Try again`})),await m(n).toHaveValue(`Keep this draft`),await m(t.getByRole(`region`,{name:`Saved customer`})).toHaveAttribute(`aria-busy`,`false`)}},b={render:()=>(0,p.jsx)(p.Fragment,{children:l.render()})},d.__docgenInfo={description:``,methods:[],displayName:`ResourceStateExample`},x=[`Playground`,`ResourceStateExample`,`RefreshAndRetry`,`Anatomy`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{}`,...v.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`function ResourceStateExample() {
  const [status, setStatus] = useState<'ready' | 'refreshing' | 'stale'>('ready');
  return <div className="stack">
      <div>
        <Button onClick={() => setStatus('refreshing')}>Refresh locally</Button>
        <Button onClick={() => setStatus('stale')}>Simulate failure</Button>
      </div>
      <ResourceState label="Saved customer" status={status} onRetry={() => setStatus('ready')}>
        <TextInput label="Customer note" defaultValue="Original note" />
      </ResourceState>
    </div>;
}`,...d.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <ResourceStateExample />,
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    const input = c.getByRole('textbox', {
      name: 'Customer note'
    });
    await userEvent.clear(input);
    await userEvent.type(input, 'Keep this draft');
    await userEvent.click(c.getByRole('button', {
      name: 'Refresh locally'
    }));
    await expect(c.getByRole('region', {
      name: 'Saved customer'
    })).toHaveAttribute('aria-busy', 'true');
    await expect(input).toHaveValue('Keep this draft');
    await userEvent.click(c.getByRole('button', {
      name: 'Simulate failure'
    }));
    await expect(input).toHaveValue('Keep this draft');
    await userEvent.click(c.getByRole('button', {
      name: 'Try again'
    }));
    await expect(input).toHaveValue('Keep this draft');
    await expect(c.getByRole('region', {
      name: 'Saved customer'
    })).toHaveAttribute('aria-busy', 'false');
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <>{resourceStateAnatomy.render()}</>
}`,...b.parameters?.docs?.source}}}})))()}S();export{b as Anatomy,v as Playground,y as RefreshAndRetry,d as ResourceStateExample,x as __namedExportsOrder,_ as default};