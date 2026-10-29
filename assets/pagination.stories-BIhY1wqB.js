import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./pagination-Fqc6R97M.js";function a({total:e=150,startPage:t=1}){let[n,r]=(0,o.useState)(t),[a,c]=(0,o.useState)(25);return(0,s.jsx)(`div`,{className:`story-layout`,children:(0,s.jsx)(i,{page:n,pageSize:a,total:e,onPageChange:r,onPageSizeChange:c,noun:`records`})})}var o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{o=t(),r(),s=n(),{useArgs:c}=__STORYBOOK_MODULE_PREVIEW_API__,l={id:`components-navigation-pagination`,title:`Components/Navigation/Pagination`,component:i,tags:[`autodocs`],args:{page:1,pageSize:25,total:150,onPageChange:()=>void 0}},u={render:()=>(0,s.jsx)(a,{})},d={render:()=>(0,s.jsx)(a,{total:12840,startPage:16})},f={render:()=>(0,s.jsxs)(`div`,{className:`stack`,children:[(0,s.jsx)(a,{total:0}),(0,s.jsx)(a,{total:12}),(0,s.jsx)(a,{total:150,startPage:6}),(0,s.jsx)(`div`,{className:`story-layout`,children:(0,s.jsx)(i,{page:3,pageSize:25,total:150,onPageChange:()=>void 0,onPageSizeChange:()=>void 0,disabled:!0,noun:`records`})})]})},p={args:{page:1,pageSize:25,total:150,pageSizeOptions:[10,25,50,100],disabled:!1,noun:`projects`},argTypes:{page:{control:{type:`number`,min:1,max:1e3,step:1}},pageSize:{control:`select`,options:[10,25,50,100]},total:{control:{type:`number`,min:0,max:1e5,step:1}},pageSizeOptions:{control:`object`},disabled:{control:`boolean`},noun:{control:`text`}},render:function(e){let[,t]=c();return(0,s.jsx)(i,{...e,onPageChange:e=>t({page:e}),onPageSizeChange:e=>t({pageSize:e,page:1})})}},m=[`Interactive`,`ManyPages`,`States`,`Playground`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <PaginationDemo />
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <PaginationDemo total={12840} startPage={16} />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className="stack">
      <PaginationDemo total={0} />
      <PaginationDemo total={12} />
      <PaginationDemo total={150} startPage={6} />
      <div className="story-layout">
        <Pagination page={3} pageSize={25} total={150} onPageChange={() => undefined} onPageSizeChange={() => undefined} disabled noun="records" />
      </div>
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    page: 1,
    pageSize: 25,
    total: 150,
    pageSizeOptions: [10, 25, 50, 100],
    disabled: false,
    noun: 'projects'
  },
  argTypes: {
    page: {
      control: {
        type: 'number',
        min: 1,
        max: 1000,
        step: 1
      }
    },
    pageSize: {
      control: 'select',
      options: [10, 25, 50, 100]
    },
    total: {
      control: {
        type: 'number',
        min: 0,
        max: 100000,
        step: 1
      }
    },
    pageSizeOptions: {
      control: 'object'
    },
    disabled: {
      control: 'boolean'
    },
    noun: {
      control: 'text'
    }
  },
  render: function PaginationPlayground(args) {
    const [, updateArgs] = useArgs();
    return <Pagination {...args} onPageChange={page => updateArgs({
      page
    })} onPageSizeChange={pageSize => updateArgs({
      pageSize,
      page: 1
    })} />;
  }
}`,...p.parameters?.docs?.source}}}})))()}h();export{u as Interactive,d as ManyPages,p as Playground,f as States,m as __namedExportsOrder,l as default};