import{b as u,A as g}from"./iframe-CcVHdtaE.js";import{a as p,c as l}from"./render-DWMVOKSd.js";import"./preload-helper-PPVm8Dsz.js";import"./lit-haunted-7drcRuRW.js";const{expect:t,fn:v,userEvent:d}=__STORYBOOK_MODULE_TEST__,B={title:"Tests/Render"},a={render:()=>u`<div id="test-container">${p({})}</div>`,async play({canvasElement:n}){const e=n.querySelector("#test-container"),o=e?.querySelectorAll("button.button-nav");t(o).toHaveLength(2);const r=e?.querySelector(".button-nav.prev"),w=e?.querySelector(".button-nav.next");t(r).toHaveAttribute("disabled"),t(w).toHaveAttribute("disabled")}},s={render:()=>{const n=v(),e=v();return window.__testPrev=n,window.__testNext=e,u`<div id="test-container">${p({prev:n,next:e})}</div>`},async play({canvasElement:n}){const e=n.querySelector("#test-container"),o=e?.querySelector(".button-nav.prev"),r=e?.querySelector(".button-nav.next");t(o).not.toHaveAttribute("disabled"),t(r).not.toHaveAttribute("disabled"),await d.click(o),t(window.__testPrev).toHaveBeenCalled(),await d.click(r),t(window.__testNext).toHaveBeenCalled()}},c={render:()=>u`<div id="test-container">
            ${l()===g?"nothing":l()}
        </div>`,async play({canvasElement:n}){const e=n.querySelector("#test-container");t(e?.textContent?.trim()).toBe("nothing")}},i={render:()=>{const n=v();return window.__testOnPage=n,u`<div id="test-container">
            ${l({totalPages:10,pageNumber:3,onPage:n})}
        </div>`},async play({canvasElement:n}){const e=n.querySelector("#test-container"),o=e?.querySelector(".page-prev"),r=e?.querySelector(".page-next");t(o).toBeTruthy(),t(r).toBeTruthy(),await d.click(r),t(window.__testOnPage).toHaveBeenCalledWith(4),window.__testOnPage.mockClear(),await d.click(o),t(window.__testOnPage).toHaveBeenCalledWith(2)}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const prev = fn();
    const next = fn();
    (window as unknown as Record<string, unknown>).__testPrev = prev;
    (window as unknown as Record<string, unknown>).__testNext = next;
    return html\`<div id="test-container">\${renderNav({
      prev,
      next
    })}</div>\`;
  },
  async play({
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
    expect((window as unknown as Record<string, unknown>).__testPrev).toHaveBeenCalled();
    await userEvent.click(nextButton);
    expect((window as unknown as Record<string, unknown>).__testNext).toHaveBeenCalled();
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div id="test-container">
            \${renderPagination() === nothing ? 'nothing' : renderPagination()}
        </div>\`,
  async play({
    canvasElement
  }) {
    const container = canvasElement.querySelector('#test-container');
    expect(container?.textContent?.trim()).toBe('nothing');
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const onPage = fn();
    (window as unknown as Record<string, unknown>).__testOnPage = onPage;
    return html\`<div id="test-container">
            \${renderPagination({
      totalPages: 10,
      pageNumber: 3,
      onPage
    })}
        </div>\`;
  },
  async play({
    canvasElement
  }) {
    const container = canvasElement.querySelector('#test-container');
    const prevButton = container?.querySelector('.page-prev') as HTMLButtonElement;
    const nextButton = container?.querySelector('.page-next') as HTMLButtonElement;
    expect(prevButton).toBeTruthy();
    expect(nextButton).toBeTruthy();

    // Click next page
    await userEvent.click(nextButton);
    expect((window as unknown as Record<string, unknown>).__testOnPage).toHaveBeenCalledWith(4);

    // Reset and click prev page
    ((window as unknown as Record<string, unknown>).__testOnPage as ReturnType<typeof fn>).mockClear();
    await userEvent.click(prevButton);
    expect((window as unknown as Record<string, unknown>).__testOnPage).toHaveBeenCalledWith(2);
  }
}`,...i.parameters?.docs?.source}}};const _=["RenderNavTest","RenderNavWithCallbacks","RenderPaginationNothing","RenderPaginationTest"];export{a as RenderNavTest,s as RenderNavWithCallbacks,c as RenderPaginationNothing,i as RenderPaginationTest,_ as __namedExportsOrder,B as default};
