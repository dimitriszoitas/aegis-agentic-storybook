import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./file-upload-Cvi79Q0l.js";function a(e){return new Promise((t,n)=>{let r=()=>{clearTimeout(i),n(new DOMException(`Cancelled`,`AbortError`))},i=setTimeout(()=>{e.removeEventListener(`abort`,r),t()},100);e.addEventListener(`abort`,r,{once:!0}),e.aborted&&r()})}function o({failFirst:e=!1}){let t=(0,s.useRef)(0);async function n(n,{signal:r,onProgress:i}){t.current++;for(let e of[20,45,70,100])await a(r),i(e);if(e&&t.current===1)throw Error(`The local adapter rejected this attempt. Retry to finish.`)}return(0,c.jsx)(i,{label:`Project documents`,description:`Local adapter demonstration. Files are not sent to a server.`,accept:`.txt,.csv`,onUpload:n})}var s,c,l,u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{s=t(),r(),c=n(),{expect:l,userEvent:u,within:d,waitFor:f}=__STORYBOOK_MODULE_TEST__,p={id:`components-forms-fileupload`,title:`Components/Inputs & Selection/FileUpload`,component:i,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Choose local files with type, size, count, and duplicate validation. No network request is made unless the application supplies onUpload. The adapter receives an AbortSignal and progress callback; cancellation and retry remain available. Files stay ready on the device in selection-only mode.`}}},args:{label:`Attachments`,accept:`.pdf,.csv,.txt`,maxFiles:3,maxSizeBytes:1048576},decorators:[e=>(0,c.jsx)(`div`,{style:{maxWidth:640},children:(0,c.jsx)(e,{})})]},m={play:async({canvasElement:e})=>{let t=d(e),n=t.getByLabelText(`Choose attachments`),r=new File([`Project scope and milestones`],`project-brief.txt`,{type:`text/plain`,lastModified:1});await u.upload(n,r),await l(t.getByText(`project-brief.txt`)).toBeVisible(),await l(t.getByText(/Ready locally/)).toBeVisible(),await u.upload(n,r),await l(t.getByRole(`alert`)).toHaveTextContent(`already selected`),await u.click(t.getByRole(`button`,{name:`Remove project-brief.txt`})),await l(t.queryByText(`project-brief.txt`)).not.toBeInTheDocument(),await f(()=>l(t.getByRole(`button`,{name:`Choose files`})).toHaveFocus())}},h={args:{maxSizeBytes:12},play:async({canvasElement:e})=>{let t=d(e),n=u.setup({applyAccept:!1});await n.upload(t.getByLabelText(`Choose attachments`),new File([`a`.repeat(24)],`large.txt`,{type:`text/plain`})),await l(t.getByRole(`alert`)).toHaveTextContent(`exceeds 12 B`),await n.upload(t.getByLabelText(`Choose attachments`),new File([`abc`],`diagram.png`,{type:`image/png`})),await l(t.getByRole(`alert`)).toHaveTextContent(`file type is not accepted`)}},g={render:()=>(0,c.jsx)(o,{}),play:async({canvasElement:e})=>{let t=d(e);await u.upload(t.getByLabelText(`Choose project documents`),new File([`Client,Amount
Atlas,2400`],`invoices.csv`,{type:`text/csv`})),await u.click(t.getByRole(`button`,{name:`Upload invoices.csv`})),await l(t.getByRole(`progressbar`,{name:`Uploading invoices.csv`})).toBeVisible(),await f(()=>l(t.getByText(/Uploaded/)).toBeVisible())}},_={render:()=>(0,c.jsx)(o,{failFirst:!0}),play:async({canvasElement:e})=>{let t=d(e);await u.upload(t.getByLabelText(`Choose project documents`),new File([`Scope approval`],`scope.txt`,{type:`text/plain`})),await u.click(t.getByRole(`button`,{name:`Upload scope.txt`})),await f(()=>l(t.getByText(`The local adapter rejected this attempt. Retry to finish.`)).toBeVisible()),await u.click(t.getByRole(`button`,{name:`Retry scope.txt`})),await u.click(t.getByRole(`button`,{name:`Cancel`})),await l(t.getByText(/Ready locally/)).toBeVisible(),await f(()=>l(t.getByRole(`button`,{name:`Upload scope.txt`})).toHaveFocus()),await u.click(t.getByRole(`button`,{name:`Upload scope.txt`})),await f(()=>l(t.getByText(/Uploaded/)).toBeVisible())}},v={args:{disabled:!0}},y={args:{multiple:!1,label:`Profile document`,accept:`.pdf`,description:`Choose one PDF to attach to this profile.`}},b=[`LocalSelection`,`Validation`,`AsyncAdapter`,`RetryAndCancel`,`Disabled`,`SingleFile`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText('Choose attachments');
    const file = new File(['Project scope and milestones'], 'project-brief.txt', {
      type: 'text/plain',
      lastModified: 1
    });
    await userEvent.upload(input, file);
    await expect(canvas.getByText('project-brief.txt')).toBeVisible();
    await expect(canvas.getByText(/Ready locally/)).toBeVisible();
    await userEvent.upload(input, file);
    await expect(canvas.getByRole('alert')).toHaveTextContent('already selected');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Remove project-brief.txt'
    }));
    await expect(canvas.queryByText('project-brief.txt')).not.toBeInTheDocument();
    await waitFor(() => expect(canvas.getByRole('button', {
      name: 'Choose files'
    })).toHaveFocus());
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    maxSizeBytes: 12
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const user = userEvent.setup({
      applyAccept: false
    });
    await user.upload(canvas.getByLabelText('Choose attachments'), new File(['a'.repeat(24)], 'large.txt', {
      type: 'text/plain'
    }));
    await expect(canvas.getByRole('alert')).toHaveTextContent('exceeds 12 B');
    await user.upload(canvas.getByLabelText('Choose attachments'), new File(['abc'], 'diagram.png', {
      type: 'image/png'
    }));
    await expect(canvas.getByRole('alert')).toHaveTextContent('file type is not accepted');
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <AdapterDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.upload(canvas.getByLabelText('Choose project documents'), new File(['Client,Amount\\nAtlas,2400'], 'invoices.csv', {
      type: 'text/csv'
    }));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Upload invoices.csv'
    }));
    await expect(canvas.getByRole('progressbar', {
      name: 'Uploading invoices.csv'
    })).toBeVisible();
    await waitFor(() => expect(canvas.getByText(/Uploaded/)).toBeVisible());
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <AdapterDemo failFirst />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.upload(canvas.getByLabelText('Choose project documents'), new File(['Scope approval'], 'scope.txt', {
      type: 'text/plain'
    }));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Upload scope.txt'
    }));
    await waitFor(() => expect(canvas.getByText('The local adapter rejected this attempt. Retry to finish.')).toBeVisible());
    await userEvent.click(canvas.getByRole('button', {
      name: 'Retry scope.txt'
    }));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Cancel'
    }));
    await expect(canvas.getByText(/Ready locally/)).toBeVisible();
    await waitFor(() => expect(canvas.getByRole('button', {
      name: 'Upload scope.txt'
    })).toHaveFocus());
    await userEvent.click(canvas.getByRole('button', {
      name: 'Upload scope.txt'
    }));
    await waitFor(() => expect(canvas.getByText(/Uploaded/)).toBeVisible());
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    multiple: false,
    label: 'Profile document',
    accept: '.pdf',
    description: 'Choose one PDF to attach to this profile.'
  }
}`,...y.parameters?.docs?.source}}}})))()}x();export{g as AsyncAdapter,v as Disabled,m as LocalSelection,_ as RetryAndCancel,y as SingleFile,h as Validation,b as __namedExportsOrder,p as default};