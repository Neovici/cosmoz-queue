import{t as e}from"./chunk-BvrOYcoh.js";import{a as t,o as n}from"./lit-html-BZ3vufxv.js";import{g as r,n as i,t as a}from"./haunted-bn_77vkS.js";import{n as o,t as s}from"./queue-CdYl6WjE.js";var c,l,u,d,f,p,m;e((()=>{a(),n(),s(),{expect:c,waitFor:l}=__STORYBOOK_MODULE_TEST__,u=[{id:`1`},{id:`2`}],d=()=>o({heading:`Layouts`,tabHashParam:`vt-layout`,idHashParam:`vt-id`,details:e=>new Promise(t=>setTimeout(()=>t(e),100)),list:(e,{setItems:n})=>(r(()=>n(u),[]),t`<div id="list" slot="previous">List</div>`),view:()=>t`<div class="view-core">Detail</div>`,loader:()=>t`<div class="view-core" data-loader>Loading</div>`}),customElements.get(`layout-transition-test`)||customElements.define(`layout-transition-test`,i(d)),f={title:`Tests/LayoutTransition`},p={render:()=>t`<layout-transition-test
            style="display: block; height: 400px"
        ></layout-transition-test>`,async play({canvasElement:e}){let t=e.querySelector(`layout-transition-test`).shadowRoot,n=()=>t.querySelector(`cosmoz-resizable-view`),r=e=>t.querySelector(`.tabn-tab[name="${e}"]`);if(await l(()=>c(r(`split`)?.hasAttribute(`disabled`)).toBe(!1)),t.querySelector(`#list`).dispatchEvent(new CustomEvent(`omnitable-item-click`,{bubbles:!0,composed:!0,detail:{item:u[1]}})),!(`startViewTransition`in Element.prototype)){r(`split`).click(),c(n().getAttribute(`data-vt-fallback`)).toBe(`overview-split`);return}let i=n(),a=i.startViewTransition.bind(i),o=[];i.startViewTransition=e=>{let t=a(e);return o.push(t.ready.then(()=>`ran`,e=>e.message)),t};let s=async(e,t)=>{r(t).click(),c(i.getAttribute(`data-vt`)).toBe(`${e}-${t}`),await l(()=>c(i.hasAttribute(`data-vt`)).toBe(!1)),c(i.dataset.active).toBe(t)};await s(`overview`,`split`),c(t.querySelector(`.view-core`)?.textContent).toBe(`Detail`),await s(`split`,`queue`),await s(`queue`,`overview`),await s(`overview`,`queue`),await s(`queue`,`split`),await s(`split`,`overview`),c(await Promise.all(o)).toEqual([,,,,,,].fill(`ran`))}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => html\`<layout-transition-test
            style="display: block; height: 400px"
        ></layout-transition-test>\`,
  async play({
    canvasElement
  }) {
    const host = canvasElement.querySelector('layout-transition-test')!,
      root = host.shadowRoot!,
      scope = () => root.querySelector('cosmoz-resizable-view')!,
      tab = (name: string) => root.querySelector(\`.tabn-tab[name="\${name}"]\`) as HTMLElement;
    await waitFor(() => expect(tab('split')?.hasAttribute('disabled')).toBe(false));
    root.querySelector('#list')!.dispatchEvent(new CustomEvent('omnitable-item-click', {
      bubbles: true,
      composed: true,
      detail: {
        item: items[1]
      }
    }));
    if (!('startViewTransition' in Element.prototype)) {
      tab('split').click();
      expect(scope().getAttribute('data-vt-fallback')).toBe('overview-split');
      return;
    }
    type Start = (opts: StartViewTransitionOptions) => ViewTransition;
    const el = scope() as HTMLElement & {
        startViewTransition: Start;
      },
      start = el.startViewTransition.bind(el),
      outcomes: Promise<string>[] = [];
    el.startViewTransition = opts => {
      const vt = start(opts);
      outcomes.push(vt.ready.then(() => 'ran', (e: Error) => e.message));
      return vt;
    };
    const pick = async (from: string, to: string) => {
      tab(to).click();
      expect(el.getAttribute('data-vt')).toBe(\`\${from}-\${to}\`);
      await waitFor(() => expect(el.hasAttribute('data-vt')).toBe(false));
      expect(el.dataset.active).toBe(to);
    };
    await pick('overview', 'split');
    expect(root.querySelector('.view-core')?.textContent).toBe('Detail');
    await pick('split', 'queue');
    await pick('queue', 'overview');
    await pick('overview', 'queue');
    await pick('queue', 'split');
    await pick('split', 'overview');
    expect(await Promise.all(outcomes)).toEqual(Array(6).fill('ran'));
  }
}`,...p.parameters?.docs?.source}}},m=[`AnimatesLayoutSwitches`]}))();export{p as AnimatesLayoutSwitches,m as __namedExportsOrder,f as default};