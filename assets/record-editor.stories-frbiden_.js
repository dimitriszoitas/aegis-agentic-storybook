import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./field-BUbfRSyo.js";import{n as a,t as o}from"./button-D4ezZsjr.js";import{n as s,t as c}from"./text-input-S2PNxsw9.js";import{a as l,i as u,n as d,t as f}from"./record-editor-BQDfvccB.js";function p(){let[e,t]=(0,m.useState)(y),[n,r]=(0,m.useState)(1),[i,a]=(0,m.useState)(!0);return(0,h.jsxs)(`div`,{className:`stack`,children:[(0,h.jsx)(o,{onClick:()=>{t({name:`Server revision`}),r(e=>e+1)},children:`Simulate remote change`}),(0,h.jsx)(u,{...b,record:e,version:n,onSave:async(e,o)=>{if(i)throw a(!1),Error(`Local save failed. Try again.`);if(o.expectedVersion!==n)throw Error(`Version conflict`);let s=n+1;return t(e),r(s),{record:e,version:s}}})]})}var m,h,g,_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{m=t(),a(),r(),s(),l(),f(),h=n(),{expect:g,userEvent:_,within:v}=__STORYBOOK_MODULE_TEST__,y={name:`Alex Morgan`},b={recordId:`local-contact`,record:y,version:1,title:`Contact`,createDraft:e=>({...e}),isEqual:(e,t)=>e.name===t.name,renderView:e=>(0,h.jsx)(`p`,{children:e.name}),renderFields:({draft:e,onDraftChange:t,disabled:n})=>(0,h.jsx)(i,{label:`Name`,children:(0,h.jsx)(c,{name:`name`,required:!0,value:e.name,disabled:n,onValueChange:e=>t({name:e})})}),onSave:async(e,t)=>({record:e,version:Number(t.expectedVersion)+1}),onDelete:async()=>{}},x={id:`patterns-recordeditor`,title:`Patterns/Workflows/RecordEditor`,component:u,tags:[`autodocs`],args:{...b,disabled:!1,editLabel:`Edit`,saveLabel:`Save changes`,cancelLabel:`Cancel editing`,deleteLabel:`Delete record`,reloadLabel:`Reload latest version`},argTypes:{title:{control:`text`},disabled:{control:`boolean`},editLabel:{control:`text`},saveLabel:{control:`text`},cancelLabel:{control:`text`},deleteLabel:{control:`text`},reloadLabel:{control:`text`},record:{control:!1},version:{control:!1},recordId:{control:!1},createDraft:{control:!1},isEqual:{control:!1},renderView:{control:!1},renderFields:{control:!1},onSave:{control:!1},onDelete:{control:!1},onDeleted:{control:!1}}},S={},C={render:()=>(0,h.jsx)(p,{}),play:async({canvasElement:e})=>{let t=v(e),n=v(e.ownerDocument.body);await _.click(t.getByRole(`button`,{name:`Edit`}));let r=t.getByRole(`textbox`,{name:`Name`});await _.clear(r),await _.type(r,`Sam Rivera`),await _.click(t.getByRole(`button`,{name:`Save changes`})),await g(t.getByRole(`alert`)).toHaveTextContent(`Local save failed`),await g(r).toHaveValue(`Sam Rivera`),await _.click(t.getByRole(`button`,{name:`Save changes`})),await g(t.getByText(`Sam Rivera`,{exact:!0})).toBeVisible(),await _.click(t.getByRole(`button`,{name:`Edit`})),await _.clear(t.getByRole(`textbox`,{name:`Name`})),await _.type(t.getByRole(`textbox`,{name:`Name`}),`Local draft`),await _.click(t.getByRole(`button`,{name:`Simulate remote change`})),await g(t.getByRole(`textbox`,{name:`Name`})).toHaveValue(`Local draft`),await g(t.getByRole(`button`,{name:`Save changes`})).toBeDisabled(),await _.click(t.getByRole(`button`,{name:`Reload latest version`})),await _.click(v(n.getByRole(`alertdialog`)).getByRole(`button`,{name:`Reload latest version`})),await g(t.getByRole(`textbox`,{name:`Name`})).toHaveValue(`Server revision`)}},w={render:()=>(0,h.jsx)(h.Fragment,{children:d.render()})},p.__docgenInfo={description:``,methods:[],displayName:`RecordEditorExample`},T=[`Playground`,`RecordEditorExample`,`SaveFailureAndConflict`,`Anatomy`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{}`,...S.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`function RecordEditorExample() {
  const [record, setRecord] = useState(sample);
  const [version, setVersion] = useState(1);
  const [fail, setFail] = useState(true);
  return <div className="stack">
      <Button onClick={() => {
      setRecord({
        name: 'Server revision'
      });
      setVersion(v => v + 1);
    }}>
        Simulate remote change
      </Button>
      <RecordEditor {...defaults} record={record} version={version} onSave={async (draft, operation) => {
      if (fail) {
        setFail(false);
        throw new Error('Local save failed. Try again.');
      }
      if (operation.expectedVersion !== version) throw new Error('Version conflict');
      const next = version + 1;
      setRecord(draft);
      setVersion(next);
      return {
        record: draft,
        version: next
      };
    }} />
    </div>;
}`,...p.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <RecordEditorExample />,
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    await userEvent.click(c.getByRole('button', {
      name: 'Edit'
    }));
    const input = c.getByRole('textbox', {
      name: 'Name'
    });
    await userEvent.clear(input);
    await userEvent.type(input, 'Sam Rivera');
    await userEvent.click(c.getByRole('button', {
      name: 'Save changes'
    }));
    await expect(c.getByRole('alert')).toHaveTextContent('Local save failed');
    await expect(input).toHaveValue('Sam Rivera');
    await userEvent.click(c.getByRole('button', {
      name: 'Save changes'
    }));
    await expect(c.getByText('Sam Rivera', {
      exact: true
    })).toBeVisible();
    await userEvent.click(c.getByRole('button', {
      name: 'Edit'
    }));
    await userEvent.clear(c.getByRole('textbox', {
      name: 'Name'
    }));
    await userEvent.type(c.getByRole('textbox', {
      name: 'Name'
    }), 'Local draft');
    await userEvent.click(c.getByRole('button', {
      name: 'Simulate remote change'
    }));
    await expect(c.getByRole('textbox', {
      name: 'Name'
    })).toHaveValue('Local draft');
    await expect(c.getByRole('button', {
      name: 'Save changes'
    })).toBeDisabled();
    await userEvent.click(c.getByRole('button', {
      name: 'Reload latest version'
    }));
    await userEvent.click(within(body.getByRole('alertdialog')).getByRole('button', {
      name: 'Reload latest version'
    }));
    await expect(c.getByRole('textbox', {
      name: 'Name'
    })).toHaveValue('Server revision');
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <>{recordEditorAnatomy.render()}</>
}`,...w.parameters?.docs?.source}}}})))()}E();export{w as Anatomy,S as Playground,p as RecordEditorExample,C as SaveFailureAndConflict,T as __namedExportsOrder,x as default};