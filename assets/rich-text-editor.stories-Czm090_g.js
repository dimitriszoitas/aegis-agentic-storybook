import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./button-6oZdnaTW.js";import{a,i as o,n as s,t as c}from"./rich-text-editor-BTrkfQ3S.js";var l,u,d,f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{l=t(),r(),a(),c(),u=n(),{useArgs:d}=__STORYBOOK_MODULE_PREVIEW_API__,{expect:f,userEvent:p,within:m}=__STORYBOOK_MODULE_TEST__,h={type:`doc`,content:[{type:`paragraph`,content:[{type:`text`,text:`Project brief`}]}]},g={id:`components-forms-richtexteditor`,title:`Components/Inputs & Selection/RichTextEditor`,component:o,tags:[`autodocs`],args:{label:`Description`,defaultValue:h}},_={args:{value:h,defaultValue:void 0,readOnly:!1,disabled:!1,invalid:!1,required:!1,showToolbar:!0},argTypes:{value:{control:`object`},label:{control:`text`},readOnly:{control:`boolean`},disabled:{control:`boolean`},invalid:{control:`boolean`},required:{control:`boolean`},showToolbar:{control:`boolean`},onValueChange:{control:!1}},render:function(e){let[,t]=d();return(0,u.jsx)(o,{...e,onValueChange:e=>t({value:e})})}},v={render:function(){let[e,t]=(0,l.useState)(``);return(0,u.jsxs)(`form`,{className:`stack`,onSubmit:e=>{e.preventDefault(),t(String(new FormData(e.currentTarget).get(`body`)))},children:[(0,u.jsx)(o,{label:`Message`,name:`body`}),(0,u.jsx)(i,{type:`submit`,children:`Submit document`}),(0,u.jsx)(`output`,{"aria-label":`Submitted document`,children:e})]})},play:async({canvasElement:e})=>{let t=m(e),n=await t.findByRole(`textbox`,{name:`Message`});await p.click(t.getByRole(`button`,{name:`Bold`})),await p.type(n,`Important`),await f(n.querySelector(`strong`)).toHaveTextContent(`Important`),await p.click(t.getByRole(`button`,{name:`Bold`})),await p.click(t.getByRole(`button`,{name:`Bullet list`})),await f(n.querySelector(`ul li`)).toBeInTheDocument(),await p.click(t.getByRole(`button`,{name:`Submit document`})),await f(t.getByLabelText(`Submitted document`)).toHaveTextContent(`bulletList`),await f(t.getByLabelText(`Submitted document`)).toHaveTextContent(`bold`)}},y={play:async({canvasElement:e})=>{let t=m(e),n=await t.findByRole(`textbox`,{name:`Description`});n.focus();let r=e.ownerDocument.getSelection(),i=e.ownerDocument.createRange();i.selectNodeContents(n),r?.removeAllRanges(),r?.addRange(i),await p.click(t.getByRole(`button`,{name:`Link`}));let a=m(e.ownerDocument.body),o=a.getByRole(`textbox`,{name:`Link URL`});await p.type(o,`javascript:alert(1)`),await p.click(a.getByRole(`button`,{name:`Apply link`})),await f(a.getByText(`Use an HTTP(S), mailto or relative URL.`)).toBeVisible(),await p.clear(o),await p.type(o,`https://example.com`),await p.click(a.getByRole(`button`,{name:`Apply link`})),await f(n.querySelector(`a`)).toHaveAttribute(`href`,`https://example.com`)}},b={args:{readOnly:!0},play:async({canvasElement:e})=>{let t=m(e),n=await t.findByRole(`textbox`,{name:`Description`});await f(n).toHaveAttribute(`contenteditable`,`false`);let r=n.innerHTML,i=t.getByRole(`button`,{name:`Bold`});await f(i).toHaveAttribute(`aria-disabled`,`true`),await p.click(i),i.focus(),await p.keyboard(`{Enter}`),await f(n.innerHTML).toBe(r),await f(n.querySelector(`strong`)).not.toBeInTheDocument()}},x={render:()=>(0,u.jsx)(u.Fragment,{children:s.render()})},S=[`Playground`,`FormattingAndForm`,`LinkValidation`,`ReadOnly`,`Anatomy`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    value: initial,
    defaultValue: undefined,
    readOnly: false,
    disabled: false,
    invalid: false,
    required: false,
    showToolbar: true
  },
  argTypes: {
    value: {
      control: 'object'
    },
    label: {
      control: 'text'
    },
    readOnly: {
      control: 'boolean'
    },
    disabled: {
      control: 'boolean'
    },
    invalid: {
      control: 'boolean'
    },
    required: {
      control: 'boolean'
    },
    showToolbar: {
      control: 'boolean'
    },
    onValueChange: {
      control: false
    }
  },
  render: function Playground(args) {
    const [, updateArgs] = useArgs();
    return <RichTextEditor {...args} onValueChange={value => updateArgs({
      value
    })} />;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function FormExample() {
    const [submitted, setSubmitted] = useState('');
    return <form className="stack" onSubmit={event => {
      event.preventDefault();
      setSubmitted(String(new FormData(event.currentTarget).get('body')));
    }}>
        <RichTextEditor label="Message" name="body" />
        <Button type="submit">Submit document</Button>
        <output aria-label="Submitted document">{submitted}</output>
      </form>;
  },
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    const input = await c.findByRole('textbox', {
      name: 'Message'
    });
    await userEvent.click(c.getByRole('button', {
      name: 'Bold'
    }));
    await userEvent.type(input, 'Important');
    await expect(input.querySelector('strong')).toHaveTextContent('Important');
    await userEvent.click(c.getByRole('button', {
      name: 'Bold'
    }));
    await userEvent.click(c.getByRole('button', {
      name: 'Bullet list'
    }));
    await expect(input.querySelector('ul li')).toBeInTheDocument();
    await userEvent.click(c.getByRole('button', {
      name: 'Submit document'
    }));
    await expect(c.getByLabelText('Submitted document')).toHaveTextContent('bulletList');
    await expect(c.getByLabelText('Submitted document')).toHaveTextContent('bold');
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    const editor = await c.findByRole('textbox', {
      name: 'Description'
    });
    editor.focus();
    const selection = canvasElement.ownerDocument.getSelection();
    const range = canvasElement.ownerDocument.createRange();
    range.selectNodeContents(editor);
    selection?.removeAllRanges();
    selection?.addRange(range);
    await userEvent.click(c.getByRole('button', {
      name: 'Link'
    }));
    const body = within(canvasElement.ownerDocument.body);
    const url = body.getByRole('textbox', {
      name: 'Link URL'
    });
    await userEvent.type(url, 'javascript:alert(1)');
    await userEvent.click(body.getByRole('button', {
      name: 'Apply link'
    }));
    await expect(body.getByText('Use an HTTP(S), mailto or relative URL.')).toBeVisible();
    await userEvent.clear(url);
    await userEvent.type(url, 'https://example.com');
    await userEvent.click(body.getByRole('button', {
      name: 'Apply link'
    }));
    await expect(editor.querySelector('a')).toHaveAttribute('href', 'https://example.com');
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    readOnly: true
  },
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    const editor = await c.findByRole('textbox', {
      name: 'Description'
    });
    await expect(editor).toHaveAttribute('contenteditable', 'false');
    const before = editor.innerHTML;
    const bold = c.getByRole('button', {
      name: 'Bold'
    });
    // Base UI's toolbar keeps disabled actions discoverable with aria-disabled.
    await expect(bold).toHaveAttribute('aria-disabled', 'true');
    await userEvent.click(bold);
    bold.focus();
    await userEvent.keyboard('{Enter}');
    await expect(editor.innerHTML).toBe(before);
    await expect(editor.querySelector('strong')).not.toBeInTheDocument();
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <>{richTextEditorAnatomy.render()}</>
}`,...x.parameters?.docs?.source}}}})))()}C();export{x as Anatomy,v as FormattingAndForm,y as LinkValidation,_ as Playground,b as ReadOnly,S as __namedExportsOrder,g as default};