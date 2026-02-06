import{b as u,A as y}from"./iframe-Bd9fbOqB.js";import{a as p,c as l}from"./render-CEWagV_f.js";import"./preload-helper-PPVm8Dsz.js";import"./lit-haunted-Dp_2alsg.js";const{expect:n,fn:v,userEvent:d,within:m}=__STORYBOOK_MODULE_TEST__,k={title:"Tests/Render"},r={render:()=>u`<div id="test-container">${p({})}</div>`,async play({canvasElement:e}){const o=(m(e).getByTestId,e.querySelector("#test-container")),a=o?.querySelectorAll("button.button-nav");n(a).toHaveLength(2);const w=o?.querySelector(".button-nav.prev"),g=o?.querySelector(".button-nav.next");n(w).toHaveAttribute("disabled"),n(g).toHaveAttribute("disabled")}},s={render:()=>{const e=v(),t=v();return window.__testPrev=e,window.__testNext=t,u`<div id="test-container">${p({prev:e,next:t})}</div>`},async play({canvasElement:e}){const t=e.querySelector("#test-container"),o=t?.querySelector(".button-nav.prev"),a=t?.querySelector(".button-nav.next");n(o).not.toHaveAttribute("disabled"),n(a).not.toHaveAttribute("disabled"),await d.click(o),n(window.__testPrev).toHaveBeenCalled(),await d.click(a),n(window.__testNext).toHaveBeenCalled()}},c={render:()=>u`<div id="test-container">
            ${l()===y?"nothing":l()}
        </div>`,async play({canvasElement:e}){const t=e.querySelector("#test-container");n(t?.textContent?.trim()).toBe("nothing")}},i={render:()=>{const e=v();return window.__testOnPage=e,u`<div id="test-container">
            ${l({totalPages:10,pageNumber:3,onPage:e})}
        </div>`},async play({canvasElement:e}){const t=e.querySelector("#test-container"),o=t?.querySelector(".page-prev"),a=t?.querySelector(".page-next");n(o).toBeTruthy(),n(a).toBeTruthy(),await d.click(a),n(window.__testOnPage).toHaveBeenCalledWith(4),window.__testOnPage.mockClear(),await d.click(o),n(window.__testOnPage).toHaveBeenCalledWith(2)}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div id="test-container">\${renderNav({})}</div>\`,
  async play({
    canvasElement
  }) {
    const canvas = within(canvasElement);
    const container = canvas.getByTestId ? canvasElement.querySelector('#test-container') : canvasElement.querySelector('#test-container');

    // Both buttons should be disabled when no callbacks are provided
    const buttons = container?.querySelectorAll('button.button-nav');
    expect(buttons).toHaveLength(2);
    const prevButton = container?.querySelector('.button-nav.prev');
    const nextButton = container?.querySelector('.button-nav.next');
    expect(prevButton).toHaveAttribute('disabled');
    expect(nextButton).toHaveAttribute('disabled');
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const h=["RenderNavTest","RenderNavWithCallbacks","RenderPaginationNothing","RenderPaginationTest"];export{r as RenderNavTest,s as RenderNavWithCallbacks,c as RenderPaginationNothing,i as RenderPaginationTest,h as __namedExportsOrder,k as default};
