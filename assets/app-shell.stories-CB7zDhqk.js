import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./button-CLF7L5Y-.js";import{n as a,t as o}from"./text-input-Ck5QgK2I.js";import{a as s,i as c,r as l,t as u}from"./app-shell-DH8a0nod.js";function d(e){let[t,n]=(0,f.useState)(`Requests`);return(0,p.jsxs)(c,{...e,navigation:({closeNavigation:e})=>(0,p.jsx)(`div`,{className:`stack`,children:[`Requests`,`Customers`].map(t=>(0,p.jsx)(i,{emphasis:`ghost`,onClick:()=>{n(t),e()},children:t},t))}),children:[(0,p.jsx)(`h1`,{children:t}),(0,p.jsx)(`p`,{children:`Local navigation example.`}),(0,p.jsx)(o,{label:`Retained note`,defaultValue:`Keep my note`})]})}var f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{f=t(),r(),a(),s(),l(),p=n(),{expect:m,userEvent:h,within:g}=__STORYBOOK_MODULE_TEST__,_={id:`patterns-appshell`,title:`Patterns/Application/AppShell`,component:c,tags:[`autodocs`],args:{brand:`Local workspace`,header:`Example account`,navigation:()=>null,children:null,footer:`Local demo only`,navigationLabel:`Workspace navigation`,openNavigationLabel:`Open navigation`,closeNavigationLabel:`Close navigation`,skipLabel:`Skip to content`},argTypes:{brand:{control:`text`},header:{control:`text`},footer:{control:`text`},navigationLabel:{control:`text`},openNavigationLabel:{control:`text`},closeNavigationLabel:{control:`text`},skipLabel:{control:`text`},navigation:{control:!1},children:{control:!1}},render:e=>(0,p.jsx)(d,{...e})},v={},y={play:async({canvasElement:e})=>{let t=g(e),n=g(e.ownerDocument.body);await h.click(t.getByRole(`link`,{name:`Skip to content`})),await m(t.getByRole(`main`)).toHaveFocus();let r=t.getByRole(`textbox`,{name:`Retained note`});await h.clear(r),await h.type(r,`Draft preserved`);let i=t.queryByRole(`button`,{name:`Open navigation`});i&&await h.click(i),await h.click(n.getByRole(`button`,{name:`Customers`})),await m(t.getByRole(`heading`,{name:`Customers`})).toBeVisible(),await m(r).toHaveValue(`Draft preserved`)}},b={render:()=>(0,p.jsx)(p.Fragment,{children:u.render()})},x=[`Playground`,`NavigationAndSkip`,`Anatomy`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    await userEvent.click(c.getByRole('link', {
      name: 'Skip to content'
    }));
    await expect(c.getByRole('main')).toHaveFocus();
    const input = c.getByRole('textbox', {
      name: 'Retained note'
    });
    await userEvent.clear(input);
    await userEvent.type(input, 'Draft preserved');
    const trigger = c.queryByRole('button', {
      name: 'Open navigation'
    });
    if (trigger) await userEvent.click(trigger);
    await userEvent.click(body.getByRole('button', {
      name: 'Customers'
    }));
    await expect(c.getByRole('heading', {
      name: 'Customers'
    })).toBeVisible();
    await expect(input).toHaveValue('Draft preserved');
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <>{appShellAnatomy.render()}</>
}`,...b.parameters?.docs?.source}}}})))()}S();export{b as Anatomy,y as NavigationAndSkip,v as Playground,x as __namedExportsOrder,_ as default};