import{b as d,A as m}from"./iframe-32s9o9LL.js";import{a as g,c as v}from"./render-rfpmO1rU.js";import"./preload-helper-PPVm8Dsz.js";import"./lit-haunted-DGmhBbUE.js";const{expect:t,fn:p,userEvent:u}=__STORYBOOK_MODULE_TEST__,h={title:"Tests/Render"},c={render:()=>d`<div id="test-container">${g({})}</div>`,async play({canvasElement:e}){const n=e.querySelector("#test-container"),a=n?.querySelectorAll("button.button-nav");t(a).toHaveLength(2);const r=n?.querySelector(".button-nav.prev"),o=n?.querySelector(".button-nav.next");t(r).toHaveAttribute("disabled"),t(o).toHaveAttribute("disabled")}},s={args:{prev:p(),next:p()},render:e=>d`<div id="test-container">
            ${g(e)}
        </div>`,async play({args:e,canvasElement:n}){const a=n.querySelector("#test-container"),r=a?.querySelector(".button-nav.prev"),o=a?.querySelector(".button-nav.next");t(r).not.toHaveAttribute("disabled"),t(o).not.toHaveAttribute("disabled"),await u.click(r),t(e.prev).toHaveBeenCalled(),await u.click(o),t(e.next).toHaveBeenCalled()}},i={render:()=>d`<div id="test-container">
            ${v()===m?"nothing":v()}
        </div>`,async play({canvasElement:e}){const n=e.querySelector("#test-container");t(n?.textContent?.trim()).toBe("nothing")}},l={args:{onPage:p()},render:e=>d`<div id="test-container">
            ${v({totalPages:10,pageNumber:3,onPage:e.onPage})}
        </div>`,async play({args:e,canvasElement:n}){const a=n.querySelector("#test-container"),r=a?.querySelector(".page-prev"),o=a?.querySelector(".page-next");t(r).toBeTruthy(),t(o).toBeTruthy(),await u.click(o),t(e.onPage).toHaveBeenCalledWith(4),e.onPage.mockClear(),await u.click(r),t(e.onPage).toHaveBeenCalledWith(2)}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div id="test-container">
            \${renderPagination() === nothing ? 'nothing' : renderPagination()}
        </div>\`,
  async play({
    canvasElement
  }) {
    const container = canvasElement.querySelector('#test-container');
    expect(container?.textContent?.trim()).toBe('nothing');
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const S=["RenderNavTest","RenderNavWithCallbacks","RenderPaginationNothing","RenderPaginationTest"];export{c as RenderNavTest,s as RenderNavWithCallbacks,i as RenderPaginationNothing,l as RenderPaginationTest,S as __namedExportsOrder,h as default};
