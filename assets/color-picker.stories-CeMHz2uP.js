import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./field-IWj1HK_W.js";import{n as a,t as o}from"./button-BpCMuPJ8.js";import{a as s,i as c,o as l,r as u,s as d,t as f}from"./color-picker-Dv2j6XeC.js";var p,m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{d(),p=t(),a(),r(),s(),u(),m=n(),{useArgs:h}=__STORYBOOK_MODULE_PREVIEW_API__,{expect:g,userEvent:_,within:v}=__STORYBOOK_MODULE_TEST__,y=[{value:l.blue,label:`Blue`},{value:l.purple,label:`Purple`},{value:l.green,label:`Green`}],b={id:`components-forms-colorpicker`,title:`Components/Inputs & Selection/ColorPicker`,component:c,tags:[`autodocs`],args:{label:`Brand color`,swatches:y},parameters:{docs:{description:{component:`Hex entry, labeled swatches and the native RGB chooser with optional alpha. Invalid local drafts remain visible and do not change the committed color. A valid draft commits on blur or Enter. The host owns contrast evaluation, palette policy, theme mapping and persistence.`}}}},x={args:{value:l.blue,alpha:!1,size:`md`,disabled:!1,readOnly:!1,required:!1,invalid:!1},argTypes:{label:{control:`text`},value:{control:!1},alpha:{control:`boolean`},size:{control:`inline-radio`,options:[`sm`,`md`,`lg`]},disabled:{control:`boolean`},readOnly:{control:`boolean`},required:{control:`boolean`},invalid:{control:`boolean`},swatches:{control:!1}},render:function(e){let[,t]=h(),n=e.alpha?(e.value?.slice(0,7)??l.blue)+(e.value?.slice(7)||`FF`):e.value?.slice(0,7);return(0,m.jsx)(c,{...e,value:n,onValueChange:n=>{e.onValueChange?.(n),t({value:n})}})}},S={render:()=>(0,m.jsx)(m.Fragment,{children:f.render()})},C={render:function(){let[e,t]=(0,p.useState)(l.blueOpaque),[n,r]=(0,p.useState)(``);return(0,m.jsxs)(`form`,{className:`stack`,onSubmit:e=>{e.preventDefault(),r(String(new FormData(e.currentTarget).get(`color`)))},children:[(0,m.jsx)(i,{id:`color-example`,label:`Brand color`,helpText:`Choose a color; this does not certify contrast.`,children:(0,m.jsx)(c,{name:`color`,value:e,onValueChange:t,alpha:!0,swatches:y})}),(0,m.jsx)(`output`,{"aria-label":`Committed color`,children:e}),(0,m.jsx)(o,{type:`submit`,children:`Save color`}),(0,m.jsx)(`output`,{"aria-label":`Submitted color`,children:n})]})},play:async({canvasElement:e})=>{let t=v(e),n=t.getByRole(`textbox`,{name:`Brand color`});await _.clear(n),await _.type(n,`not-a-color`),await _.tab(),await g(n).toHaveAttribute(`aria-invalid`,`true`),await g(t.getByLabelText(`Committed color`)).toHaveTextContent(l.blueOpaque),await _.clear(n),await _.type(n,l.redShortAlpha),await _.keyboard(`{Enter}`),await g(n).toHaveValue(l.redAlpha),await g(t.getByLabelText(`Committed color`)).toHaveTextContent(l.redAlpha),await _.click(t.getByRole(`button`,{name:`Blue`})),await g(n).toHaveValue(l.blueOpaque),await _.click(t.getByRole(`button`,{name:`Save color`})),await g(t.getByLabelText(`Submitted color`)).toHaveTextContent(l.blueOpaque),await g(t.getByRole(`textbox`,{name:`Opacity percent`})).not.toHaveAttribute(`id`,n.id)}},w=[`Playground`,`Anatomy`,`DraftAlphaAndForm`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    value: colors.blue,
    alpha: false,
    size: 'md',
    disabled: false,
    readOnly: false,
    required: false,
    invalid: false
  },
  argTypes: {
    label: {
      control: 'text'
    },
    value: {
      control: false
    },
    alpha: {
      control: 'boolean'
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg']
    },
    disabled: {
      control: 'boolean'
    },
    readOnly: {
      control: 'boolean'
    },
    required: {
      control: 'boolean'
    },
    invalid: {
      control: 'boolean'
    },
    swatches: {
      control: false
    }
  },
  render: function Example(args) {
    const [, updateArgs] = useArgs();
    const value = args.alpha ? (args.value?.slice(0, 7) ?? colors.blue) + (args.value?.slice(7) || 'FF') : args.value?.slice(0, 7);
    return <ColorPicker {...args} value={value} onValueChange={value => {
      args.onValueChange?.(value);
      updateArgs({
        value
      });
    }} />;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <>{colorPickerAnatomy.render()}</>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Example() {
    const [value, setValue] = useState(colors.blueOpaque);
    const [saved, setSaved] = useState('');
    return <form className="stack" onSubmit={e => {
      e.preventDefault();
      setSaved(String(new FormData(e.currentTarget).get('color')));
    }}>
        <Field id="color-example" label="Brand color" helpText="Choose a color; this does not certify contrast.">
          <ColorPicker name="color" value={value} onValueChange={setValue} alpha swatches={swatches} />
        </Field>
        <output aria-label="Committed color">{value}</output>
        <Button type="submit">Save color</Button>
        <output aria-label="Submitted color">{saved}</output>
      </form>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Brand color'
    });
    await userEvent.clear(input);
    await userEvent.type(input, 'not-a-color');
    await userEvent.tab();
    await expect(input).toHaveAttribute('aria-invalid', 'true');
    await expect(canvas.getByLabelText('Committed color')).toHaveTextContent(colors.blueOpaque);
    await userEvent.clear(input);
    await userEvent.type(input, colors.redShortAlpha);
    await userEvent.keyboard('{Enter}');
    await expect(input).toHaveValue(colors.redAlpha);
    await expect(canvas.getByLabelText('Committed color')).toHaveTextContent(colors.redAlpha);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Blue'
    }));
    await expect(input).toHaveValue(colors.blueOpaque);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Save color'
    }));
    await expect(canvas.getByLabelText('Submitted color')).toHaveTextContent(colors.blueOpaque);
    await expect(canvas.getByRole('textbox', {
      name: 'Opacity percent'
    })).not.toHaveAttribute('id', input.id);
  }
}`,...C.parameters?.docs?.source}}}})))()}T();export{S as Anatomy,C as DraftAlphaAndForm,x as Playground,w as __namedExportsOrder,b as default};