import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{A as r,Ht as i,M as a}from"./icon-DafZbL0c.js";import{n as o,t as s}from"./split-button-W9oaHPvt.js";function c({fail:e=!1}){let[t,n]=(0,l.useState)(`No export requested`),[i,o]=(0,l.useState)(0);async function c(t){if(o(e=>e+1),await new Promise(e=>setTimeout(e,120)),e)throw Error(`The sample export service is unavailable.`);n(`${t} export prepared locally`)}return(0,u.jsxs)(`div`,{className:`stack`,children:[(0,u.jsx)(s,{leadingIcon:(0,u.jsx)(a,{size:16}),intent:`function`,onAction:()=>c(`CSV`),menuLabel:`Export options`,actions:[{id:`json`,label:`Export JSON`,onSelect:()=>c(`JSON`)},{id:`copy`,label:`Copy export preview`,icon:(0,u.jsx)(r,{size:16}),onSelect:()=>n(`Export preview selected`)},{id:`pdf`,label:`Export PDF`,disabled:!0,onSelect:()=>c(`PDF`)}],children:`Export CSV`}),(0,u.jsx)(`p`,{role:`status`,"aria-label":`Export status`,children:t}),(0,u.jsx)(`output`,{"aria-label":`Export requests`,children:i})]})}var l,u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{l=t(),i(),o(),u=n(),{expect:d,userEvent:f,waitFor:p,within:m}=__STORYBOOK_MODULE_TEST__,h={id:`components-actions-splitbutton`,title:`Components/Triggers/SplitButton`,component:s,tags:[`autodocs`],args:{children:`Save project`,onAction:()=>void 0,actions:[]},parameters:{docs:{story:{inline:!1,height:360},description:{component:`Pair one frequent action with a menu of alternatives. Both segments use native buttons; Tab reaches each, Enter or Space runs the primary action, and the menu supports Arrow keys, Home/End, Enter, and Escape. Promise-returning callbacks disable both segments until completion, prevent duplicate requests, and display a recoverable error on rejection. Focus returns after completion unless the user moved elsewhere. Use menuLabel to describe the alternatives.`}}}},g={render:()=>(0,u.jsxs)(`div`,{className:`story-grid`,children:[[`sm`,`md`,`lg`].map(e=>(0,u.jsx)(`div`,{className:`stack`,children:[`primary`,`secondary`,`tertiary`,`ghost`].map(t=>(0,u.jsx)(s,{size:e,emphasis:t,onAction:()=>void 0,actions:[{id:`draft`,label:`Save draft`,onSelect:()=>void 0}],children:`Save project`},t))},e)),(0,u.jsx)(s,{disabled:!0,onAction:()=>void 0,actions:[],children:`Unavailable`}),(0,u.jsx)(s,{loading:!0,onAction:()=>void 0,actions:[],children:`Saving project`})]})},_={render:()=>(0,u.jsx)(c,{}),play:async({canvasElement:e})=>{let t=m(e),n=m(e.ownerDocument.body),r=t.getByRole(`button`,{name:`Export CSV`});r.focus(),await f.keyboard(`{Enter}`),await d(r).toBeDisabled(),await d(t.getByRole(`button`,{name:`Export options`})).toBeDisabled(),await f.keyboard(`{Enter}`),await p(()=>d(r).toBeEnabled()),await d(t.getByLabelText(`Export requests`)).toHaveTextContent(`1`),await d(r).toHaveFocus(),await f.tab();let i=t.getByRole(`button`,{name:`Export options`});await d(i).toHaveFocus(),await f.keyboard(`{ArrowDown}`);let a=await n.findByRole(`menuitem`,{name:`Export JSON`});await p(()=>d(a).toHaveFocus()),await f.keyboard(`{Enter}`),await p(()=>d(t.getByRole(`status`,{name:`Export status`})).toHaveTextContent(`JSON export prepared locally`)),await p(()=>d(i).toHaveFocus()),await f.keyboard(`{ArrowDown}`),await n.findByRole(`menu`),await f.keyboard(`{Escape}`),await p(()=>d(i).toHaveFocus())}},v={render:()=>(0,u.jsx)(c,{fail:!0}),play:async({canvasElement:e})=>{let t=m(e),n=t.getByRole(`button`,{name:`Export CSV`});await f.click(n),await d(await t.findByRole(`alert`)).toHaveTextContent(`The action could not be completed. Try again.`),await d(n).toBeEnabled(),await f.click(n),await p(()=>d(t.getByLabelText(`Export requests`)).toHaveTextContent(`2`)),await p(()=>d(n).toBeEnabled())}},y={args:{children:`Export CSV`,size:`md`,intent:`function`,emphasis:`secondary`,disabled:!1,loading:!1,menuLabel:`Export formats`},argTypes:{children:{control:`text`,name:`Label`},menuLabel:{control:`text`},size:{control:`select`,options:[`sm`,`md`,`lg`]},intent:{control:`select`,options:[`default`,`function`,`destroy`,`ai`]},emphasis:{control:`select`,options:[`primary`,`secondary`,`tertiary`,`ghost`]},disabled:{control:`boolean`},loading:{control:`boolean`},actions:{control:!1},onAction:{control:!1}},render:function(e){let[t,n]=(0,l.useState)(`Choose an export format.`);return(0,u.jsxs)(`div`,{className:`stack`,children:[(0,u.jsx)(s,{...e,onAction:()=>n(`CSV export prepared locally`),actions:[{id:`json`,label:`Export JSON`,onSelect:()=>n(`JSON export prepared locally`)},{id:`text`,label:`Export text`,onSelect:()=>n(`Text export prepared locally`)}]}),(0,u.jsx)(`p`,{role:`status`,className:`muted`,children:t})]})}},b=[`Matrix`,`KeyboardAndAsync`,`FailureAndRetry`,`Playground`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="story-grid">
      {(['sm', 'md', 'lg'] as const).map(size => <div className="stack" key={size}>
          {(['primary', 'secondary', 'tertiary', 'ghost'] as const).map(emphasis => <SplitButton key={emphasis} size={size} emphasis={emphasis} onAction={() => undefined} actions={[{
        id: 'draft',
        label: 'Save draft',
        onSelect: () => undefined
      }]}>
              Save project
            </SplitButton>)}
        </div>)}
      <SplitButton disabled onAction={() => undefined} actions={[]}>
        Unavailable
      </SplitButton>
      <SplitButton loading onAction={() => undefined} actions={[]}>
        Saving project
      </SplitButton>
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <Example />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const page = within(canvasElement.ownerDocument.body);
    const primary = canvas.getByRole('button', {
      name: 'Export CSV'
    });
    primary.focus();
    await userEvent.keyboard('{Enter}');
    await expect(primary).toBeDisabled();
    await expect(canvas.getByRole('button', {
      name: 'Export options'
    })).toBeDisabled();
    await userEvent.keyboard('{Enter}');
    await waitFor(() => expect(primary).toBeEnabled());
    await expect(canvas.getByLabelText('Export requests')).toHaveTextContent('1');
    await expect(primary).toHaveFocus();
    await userEvent.tab();
    const trigger = canvas.getByRole('button', {
      name: 'Export options'
    });
    await expect(trigger).toHaveFocus();
    await userEvent.keyboard('{ArrowDown}');
    const option = await page.findByRole('menuitem', {
      name: 'Export JSON'
    });
    await waitFor(() => expect(option).toHaveFocus());
    await userEvent.keyboard('{Enter}');
    await waitFor(() => expect(canvas.getByRole('status', {
      name: 'Export status'
    })).toHaveTextContent('JSON export prepared locally'));
    await waitFor(() => expect(trigger).toHaveFocus());
    await userEvent.keyboard('{ArrowDown}');
    await page.findByRole('menu');
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(trigger).toHaveFocus());
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Example fail />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const primary = canvas.getByRole('button', {
      name: 'Export CSV'
    });
    await userEvent.click(primary);
    await expect(await canvas.findByRole('alert')).toHaveTextContent('The action could not be completed. Try again.');
    await expect(primary).toBeEnabled();
    await userEvent.click(primary);
    await waitFor(() => expect(canvas.getByLabelText('Export requests')).toHaveTextContent('2'));
    await waitFor(() => expect(primary).toBeEnabled());
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Export CSV',
    size: 'md',
    intent: 'function',
    emphasis: 'secondary',
    disabled: false,
    loading: false,
    menuLabel: 'Export formats'
  },
  argTypes: {
    children: {
      control: 'text',
      name: 'Label'
    },
    menuLabel: {
      control: 'text'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    },
    intent: {
      control: 'select',
      options: ['default', 'function', 'destroy', 'ai']
    },
    emphasis: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'ghost']
    },
    disabled: {
      control: 'boolean'
    },
    loading: {
      control: 'boolean'
    },
    actions: {
      control: false
    },
    onAction: {
      control: false
    }
  },
  render: function Playground(args) {
    const [result, setResult] = useState('Choose an export format.');
    return <div className="stack">
        <SplitButton {...args} onAction={() => setResult('CSV export prepared locally')} actions={[{
        id: 'json',
        label: 'Export JSON',
        onSelect: () => setResult('JSON export prepared locally')
      }, {
        id: 'text',
        label: 'Export text',
        onSelect: () => setResult('Text export prepared locally')
      }]} />
        <p role="status" className="muted">
          {result}
        </p>
      </div>;
  }
}`,...y.parameters?.docs?.source}}}})))()}x();export{v as FailureAndRetry,_ as KeyboardAndAsync,g as Matrix,y as Playground,b as __namedExportsOrder,h as default};