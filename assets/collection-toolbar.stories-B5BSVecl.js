import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./select-Dd7sIRgK.js";import{n as a,t as o}from"./button-B9oXzAWe.js";import{a as s,i as c,r as l,t as u}from"./collection-toolbar-CjCrZVuP.js";function d(){let[e,t]=(0,f.useState)(``),[n,r]=(0,f.useState)(`all`),a=[{title:`Invoice correction`,status:`open`},{title:`Workspace access`,status:`open`},{title:`Invoice export`,status:`closed`}].filter(t=>t.title.toLowerCase().includes(e.toLowerCase())&&(n===`all`||n===t.status));return(0,p.jsxs)(`div`,{className:`stack`,children:[(0,p.jsx)(c,{label:`Local request controls`,searchLabel:`Search local requests`,query:e,onQueryChange:t,resultCount:a.length,resultsId:`collection-example-results`,filters:({disabled:e})=>(0,p.jsx)(i,{"aria-label":`Request status`,options:v,value:n,onValueChange:r,disabled:e}),actions:({disabled:e})=>(0,p.jsx)(o,{emphasis:`secondary`,disabled:e,onClick:()=>{t(``),r(`all`)},children:`Clear criteria`})}),(0,p.jsx)(`ul`,{id:`collection-example-results`,"aria-label":`Local requests`,children:a.map(e=>(0,p.jsx)(`li`,{children:e.title},e.title))}),(0,p.jsx)(`p`,{children:`Local illustrative records; no backend is connected.`})]})}var f,p,m,h,g,_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{f=t(),a(),r(),s(),l(),p=n(),{useArgs:m}=__STORYBOOK_MODULE_PREVIEW_API__,{expect:h,userEvent:g,within:_}=__STORYBOOK_MODULE_TEST__,v=[{value:`all`,label:`All statuses`},{value:`open`,label:`Open`},{value:`closed`,label:`Closed`}],y={id:`patterns-collectiontoolbar`,title:`Patterns/Filtering/CollectionToolbar`,component:c,tags:[`autodocs`],args:{label:`Request controls`,searchLabel:`Search requests`,query:``,resultCount:3,searchPlaceholder:`Search by title`,busy:!1,disabled:!1,showFilters:!0,showActions:!0,status:`all`},argTypes:{query:{control:`text`},resultCount:{control:{type:`number`,min:0,step:1}},busy:{control:`boolean`},disabled:{control:`boolean`},showFilters:{control:`boolean`},showActions:{control:`boolean`},status:{control:`inline-radio`,options:[`all`,`open`,`closed`]}},render:function({showFilters:e,showActions:t,status:n,...r}){let[,a]=m();return(0,p.jsx)(c,{...r,onQueryChange:e=>a({query:e}),filters:e?({disabled:e})=>(0,p.jsx)(i,{"aria-label":`Status`,options:v,value:n,onValueChange:e=>a({status:e}),disabled:e}):void 0,actions:t?({disabled:e})=>(0,p.jsx)(o,{emphasis:`secondary`,disabled:e,onClick:()=>a({query:``,status:`all`}),children:`Clear criteria`}):void 0})},parameters:{docs:{description:{component:`A generic collection control row with immediate controlled search, explicit filter/action slots and a live result count. The host owns filtering and fetching. Busy exposes pending work without disabling input; disabled locks search and is supplied to slot renderers. This does not replace DataGrid toolbar behavior or the WorkRecord-specific FilterBar.`}}}},b={},x={args:{busy:!0,query:`invoice`}},S={args:{disabled:!0,query:`invoice`}},C={render:()=>(0,p.jsx)(d,{}),play:async({canvasElement:e})=>{let t=_(e),n=t.getByRole(`searchbox`,{name:`Search local requests`});await g.type(n,`invoice`),await h(t.getByRole(`status`)).toHaveTextContent(`2 results`),await g.click(t.getByRole(`combobox`,{name:`Request status`})),await g.click(_(e.ownerDocument.body).getByRole(`option`,{name:`Open`})),await h(t.getByRole(`status`)).toHaveTextContent(`1 result`),await g.click(t.getByRole(`button`,{name:`Clear criteria`})),await h(n).toHaveValue(``),await h(t.getByRole(`status`)).toHaveTextContent(`3 results`)}},w={render:()=>(0,p.jsx)(p.Fragment,{children:u.render()}),parameters:{docs:{description:{story:u.note}}}},T=[`Playground`,`Busy`,`Disabled`,`LocalFiltering`,`Anatomy`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    busy: true,
    query: 'invoice'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    query: 'invoice'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <CollectionToolbarExample />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('searchbox', {
      name: 'Search local requests'
    });
    await userEvent.type(input, 'invoice');
    await expect(canvas.getByRole('status')).toHaveTextContent('2 results');
    await userEvent.click(canvas.getByRole('combobox', {
      name: 'Request status'
    }));
    await userEvent.click(within(canvasElement.ownerDocument.body).getByRole('option', {
      name: 'Open'
    }));
    await expect(canvas.getByRole('status')).toHaveTextContent('1 result');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Clear criteria'
    }));
    await expect(input).toHaveValue('');
    await expect(canvas.getByRole('status')).toHaveTextContent('3 results');
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <>{collectionToolbarAnatomy.render()}</>,
  parameters: {
    docs: {
      description: {
        story: collectionToolbarAnatomy.note
      }
    }
  }
}`,...w.parameters?.docs?.source}}}})))()}E();export{w as Anatomy,x as Busy,S as Disabled,C as LocalFiltering,b as Playground,T as __namedExportsOrder,y as default};