import{t as e}from"./chunk-BvrOYcoh.js";import{a as t,o as n,t as r}from"./lit-html-BZ3vufxv.js";import{i,n as a,r as o,t as s}from"./render-8LCH8wEi.js";import{n as c,t as l}from"./split-CmIwJvFc.js";var u,d,f,p,m,h,g,_,v,y,b,x;e((()=>{n(),s(),c(),{expect:u,fn:d,userEvent:f,waitFor:p}=__STORYBOOK_MODULE_TEST__,m={title:`Tests/Render`},h={render:()=>t`<div id="test-container">${a({})}</div>`,async play({canvasElement:e}){let t=e.querySelector(`#test-container`),n=t?.querySelectorAll(`cosmoz-button.button-nav`);u(n).toHaveLength(2);let r=t?.querySelector(`cosmoz-button.button-nav.prev`),i=t?.querySelector(`cosmoz-button.button-nav.next`);u(r).toHaveAttribute(`disabled`),u(i).toHaveAttribute(`disabled`)}},g={args:{prev:d(),next:d()},render:e=>t`<div id="test-container">
            ${a(e)}
        </div>`,async play({args:e,canvasElement:t}){let n=t.querySelector(`#test-container`),r=n?.querySelector(`cosmoz-button.button-nav.prev`),i=n?.querySelector(`cosmoz-button.button-nav.next`);for(let e of[r,i]){let t=e.querySelector(`svg`).getBoundingClientRect();u(t.width).toBe(16),u(t.height).toBe(16),u(e.getBoundingClientRect().width).toBeGreaterThanOrEqual(24)}u(r).not.toHaveAttribute(`disabled`),u(i).not.toHaveAttribute(`disabled`),await f.click(r),u(e.prev).toHaveBeenCalled(),await f.click(i),u(e.next).toHaveBeenCalled()}},_={render:()=>t`<div id="test-container">
            ${o()===r?`nothing`:o()}
        </div>`,async play({canvasElement:e}){u(e.querySelector(`#test-container`)?.textContent?.trim()).toBe(`nothing`)}},v={args:{onPage:d()},render:e=>t`<div id="test-container">
            ${o({totalPages:10,pageNumber:3,onPage:e.onPage})}
        </div>`,async play({args:e,canvasElement:t}){let n=t.querySelector(`#test-container`),r=n?.querySelector(`.page-prev`),i=n?.querySelector(`.page-next`);u(r).toBeTruthy(),u(i).toBeTruthy(),await f.click(i),u(e.onPage).toHaveBeenCalledWith(4),e.onPage.mockClear(),await f.click(r),u(e.onPage).toHaveBeenCalledWith(2)}},y={render:()=>{let e={heading:`Split`,index:0,items:[],tabnav:{tabs:[],active:{name:`overview`,content:r},onActivate:()=>void 0},nav:{id:()=>``,item:void 0,index:0},list:t`<div>list</div>`,renderItem:()=>t`<div>item</div>`,renderLoader:()=>t`<div>loading</div>`};return t`<div id="test-container">
            ${i({...e,splitAttrs:l({minSize:[300,400]})})}
            ${i(e)}
        </div>`},async play({canvasElement:e}){let t=e.querySelectorAll(`cosmoz-resizable-view`);u([...t].map(e=>e.getAttribute(`min-size`))).toEqual([`300 400`,`100`]),u([...t].map(e=>e.getAttribute(`initial-size`))).toEqual([`50%`,`50%`])}},b={render:()=>t`
        <div id="test-container">
            ${a({prev:d(),next:d()})}
            ${o({pageNumber:2,totalPages:3,onPage:d()})}
        </div>
    `,async play({canvasElement:e}){await p(()=>{let t=e.querySelectorAll(`.button-nav, .button-page`);u(t).toHaveLength(4);for(let e of t){let t=getComputedStyle(e.shadowRoot.querySelector(`button`));u(t.backgroundColor).toBe(`rgba(0, 0, 0, 0)`),u(t.backgroundImage).toBe(`none`),u(t.boxShadow).toBe(`none`)}})}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div id="test-container">\${renderNav({})}</div>\`,
  async play({
    canvasElement
  }) {
    const container = canvasElement.querySelector('#test-container');

    // Both buttons should be disabled when no callbacks are provided
    const buttons = container?.querySelectorAll('cosmoz-button.button-nav');
    expect(buttons).toHaveLength(2);
    const prevButton = container?.querySelector('cosmoz-button.button-nav.prev');
    const nextButton = container?.querySelector('cosmoz-button.button-nav.next');
    expect(prevButton).toHaveAttribute('disabled');
    expect(nextButton).toHaveAttribute('disabled');
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
    const prevButton = container?.querySelector('cosmoz-button.button-nav.prev') as HTMLButtonElement;
    const nextButton = container?.querySelector('cosmoz-button.button-nav.next') as HTMLButtonElement;

    // Keep chevrons legible even when the button preserves SVG dimensions.
    for (const button of [prevButton, nextButton]) {
      const bounds = button.querySelector('svg')!.getBoundingClientRect();
      expect(bounds.width).toBe(16);
      expect(bounds.height).toBe(16);
      expect(button.getBoundingClientRect().width).toBeGreaterThanOrEqual(24);
    }

    // Buttons should not be disabled when callbacks are provided
    expect(prevButton).not.toHaveAttribute('disabled');
    expect(nextButton).not.toHaveAttribute('disabled');

    // Test clicking
    await userEvent.click(prevButton);
    expect(args.prev).toHaveBeenCalled();
    await userEvent.click(nextButton);
    expect(args.next).toHaveBeenCalled();
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div id="test-container">
            \${renderPagination() === nothing ? 'nothing' : renderPagination()}
        </div>\`,
  async play({
    canvasElement
  }) {
    const container = canvasElement.querySelector('#test-container');
    expect(container?.textContent?.trim()).toBe('nothing');
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const props: RenderQueue<unknown, unknown> = {
      heading: 'Split',
      index: 0,
      items: [],
      tabnav: {
        tabs: [],
        active: {
          name: 'overview',
          content: nothing
        },
        onActivate: () => undefined
      },
      nav: {
        id: () => '',
        item: undefined,
        index: 0
      },
      list: html\`<div>list</div>\`,
      renderItem: () => html\`<div>item</div>\`,
      renderLoader: () => html\`<div>loading</div>\`
    };
    return html\`<div id="test-container">
            \${renderQueue({
      ...props,
      splitAttrs: computeSplitAttrs({
        minSize: [300, 400]
      })
    })}
            \${renderQueue(props)}
        </div>\`;
  },
  async play({
    canvasElement
  }) {
    const views = canvasElement.querySelectorAll<HTMLElement>('cosmoz-resizable-view');

    // first queue: both pane minimums forwarded, second: '100' fallback
    expect([...views].map(el => el.getAttribute('min-size'))).toEqual(['300 400', '100']);
    expect([...views].map(el => el.getAttribute('initial-size'))).toEqual(['50%', '50%']);
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div id="test-container">
            \${renderNav({
    prev: fn(),
    next: fn()
  })}
            \${renderPagination({
    pageNumber: 2,
    totalPages: 3,
    onPage: fn()
  })}
        </div>
    \`,
  async play({
    canvasElement
  }) {
    await waitFor(() => {
      const controls = canvasElement.querySelectorAll('.button-nav, .button-page');
      expect(controls).toHaveLength(4);
      for (const control of controls) {
        const style = getComputedStyle(control.shadowRoot!.querySelector('button')!);
        expect(style.backgroundColor).toBe('rgba(0, 0, 0, 0)');
        expect(style.backgroundImage).toBe('none');
        expect(style.boxShadow).toBe('none');
      }
    });
  }
}`,...b.parameters?.docs?.source}}},x=[`RenderNavTest`,`RenderNavWithCallbacks`,`RenderPaginationNothing`,`RenderPaginationTest`,`RenderQueueSplitTest`,`NavigationStaysFlat`]}))();export{b as NavigationStaysFlat,h as RenderNavTest,g as RenderNavWithCallbacks,_ as RenderPaginationNothing,v as RenderPaginationTest,y as RenderQueueSplitTest,x as __namedExportsOrder,m as default};