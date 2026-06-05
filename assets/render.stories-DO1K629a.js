import{r as e}from"./preload-helper-Dcl5TOAQ.js";import{l as t,m as n,p as r}from"./iframe-CD8xr6vf.js";import{n as i,r as a,t as o}from"./render-GoE5wUR6.js";var s,c,l,u,d,f,p,m,h;e((()=>{n(),o(),{expect:s,fn:c,userEvent:l}=__STORYBOOK_MODULE_TEST__,u={title:`Tests/Render`},d={render:()=>r`<div id="test-container">${i({})}</div>`,async play({canvasElement:e}){let t=e.querySelector(`#test-container`),n=t?.querySelectorAll(`button.button-nav`);s(n).toHaveLength(2);let r=t?.querySelector(`.button-nav.prev`),i=t?.querySelector(`.button-nav.next`);s(r).toHaveAttribute(`disabled`),s(i).toHaveAttribute(`disabled`)}},f={args:{prev:c(),next:c()},render:e=>r`<div id="test-container">
            ${i(e)}
        </div>`,async play({args:e,canvasElement:t}){let n=t.querySelector(`#test-container`),r=n?.querySelector(`.button-nav.prev`),i=n?.querySelector(`.button-nav.next`);s(r).not.toHaveAttribute(`disabled`),s(i).not.toHaveAttribute(`disabled`),await l.click(r),s(e.prev).toHaveBeenCalled(),await l.click(i),s(e.next).toHaveBeenCalled()}},p={render:()=>r`<div id="test-container">
            ${a()===t?`nothing`:a()}
        </div>`,async play({canvasElement:e}){s(e.querySelector(`#test-container`)?.textContent?.trim()).toBe(`nothing`)}},m={args:{onPage:c()},render:e=>r`<div id="test-container">
            ${a({totalPages:10,pageNumber:3,onPage:e.onPage})}
        </div>`,async play({args:e,canvasElement:t}){let n=t.querySelector(`#test-container`),r=n?.querySelector(`.page-prev`),i=n?.querySelector(`.page-next`);s(r).toBeTruthy(),s(i).toBeTruthy(),await l.click(i),s(e.onPage).toHaveBeenCalledWith(4),e.onPage.mockClear(),await l.click(r),s(e.onPage).toHaveBeenCalledWith(2)}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div id="test-container">\${renderNav({})}</div>\`,
  async play({
    canvasElement
  }) {
    const container = canvasElement.querySelector('#test-container');

    // Both buttons should be disabled when no callbacks are provided
    const buttons = container?.querySelectorAll('button.button-nav');
    expect(buttons).toHaveLength(2);
    const prevButton = container?.querySelector('.button-nav.prev');
    const nextButton = container?.querySelector('.button-nav.next');
    expect(prevButton).toHaveAttribute('disabled');
    expect(nextButton).toHaveAttribute('disabled');
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    prev: fn(),
    next: fn()
  },
  render: args => html\`<div id="test-container">
            \${renderNav(args as Parameters<typeof renderNav>[0])}
        </div>\`,
  async play({
    args,
    canvasElement
  }) {
    const container = canvasElement.querySelector('#test-container');
    const prevButton = container?.querySelector('.button-nav.prev') as HTMLButtonElement;
    const nextButton = container?.querySelector('.button-nav.next') as HTMLButtonElement;

    // Buttons should not be disabled when callbacks are provided
    expect(prevButton).not.toHaveAttribute('disabled');
    expect(nextButton).not.toHaveAttribute('disabled');

    // Test clicking
    await userEvent.click(prevButton);
    expect(args.prev).toHaveBeenCalled();
    await userEvent.click(nextButton);
    expect(args.next).toHaveBeenCalled();
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div id="test-container">
            \${renderPagination() === nothing ? 'nothing' : renderPagination()}
        </div>\`,
  async play({
    canvasElement
  }) {
    const container = canvasElement.querySelector('#test-container');
    expect(container?.textContent?.trim()).toBe('nothing');
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    onPage: fn()
  },
  render: args => html\`<div id="test-container">
            \${renderPagination({
    totalPages: 10,
    pageNumber: 3,
    onPage: args.onPage as (page: number) => void
  })}
        </div>\`,
  async play({
    args,
    canvasElement
  }) {
    const container = canvasElement.querySelector('#test-container');
    const prevButton = container?.querySelector('.page-prev') as HTMLButtonElement;
    const nextButton = container?.querySelector('.page-next') as HTMLButtonElement;
    expect(prevButton).toBeTruthy();
    expect(nextButton).toBeTruthy();

    // Click next page
    await userEvent.click(nextButton);
    expect(args.onPage).toHaveBeenCalledWith(4);

    // Reset and click prev page
    (args.onPage as ReturnType<typeof fn>).mockClear();
    await userEvent.click(prevButton);
    expect(args.onPage).toHaveBeenCalledWith(2);
  }
}`,...m.parameters?.docs?.source}}},h=[`RenderNavTest`,`RenderNavWithCallbacks`,`RenderPaginationNothing`,`RenderPaginationTest`]}))();export{d as RenderNavTest,f as RenderNavWithCallbacks,p as RenderPaginationNothing,m as RenderPaginationTest,h as __namedExportsOrder,u as default};