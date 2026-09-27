import{t as e}from"./chunk-BvrOYcoh.js";import{a as t,o as n}from"./lit-html-BZ3vufxv.js";import{i as r,r as i,t as a}from"./render-BDWaTRNt.js";var o,s,c,l,u,d;e((()=>{n(),a(),{expect:o,fn:s}=__STORYBOOK_MODULE_TEST__,c=s(),l={title:`Tests/Custom header pagination`},u={render:()=>r({header:({pagination:e})=>t`<header>${i(e)}</header>`,heading:`Orders`,items:[],totalAvailable:41,pagination:{pageNumber:1,pageSize:20,onPage:c},tabnav:{tabs:[],active:{name:`overview`,content:`List`},onActivate:()=>void 0},nav:{id:()=>``,index:-1,item:void 0},list:t`<div>List</div>`,renderItem:()=>t``,renderLoader:()=>t``}),play:async({canvasElement:e})=>{let t=e.querySelector(`.page-next`);o(t.hasAttribute(`disabled`)).toBe(!1),t.click(),o(c).toHaveBeenLastCalledWith(2),t.dispatchEvent(new MouseEvent(`click`,{ctrlKey:!0})),o(c).toHaveBeenLastCalledWith(3)}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => renderQueue({
    header: ({
      pagination
    }) => html\`<header>\${renderPagination(pagination)}</header>\`,
    heading: 'Orders',
    items: [],
    totalAvailable: 41,
    pagination: {
      pageNumber: 1,
      pageSize: 20,
      onPage
    },
    tabnav: {
      tabs: [],
      active: {
        name: 'overview',
        content: 'List'
      },
      onActivate: () => undefined
    },
    nav: {
      id: () => '',
      index: -1,
      item: undefined
    },
    list: html\`<div>List</div>\`,
    renderItem: () => html\`\`,
    renderLoader: () => html\`\`
  }),
  play: async ({
    canvasElement
  }) => {
    const next = canvasElement.querySelector<HTMLElement>('.page-next')!;
    expect(next.hasAttribute('disabled')).toBe(false);
    next.click();
    expect(onPage).toHaveBeenLastCalledWith(2);
    next.dispatchEvent(new MouseEvent('click', {
      ctrlKey: true
    }));
    expect(onPage).toHaveBeenLastCalledWith(3);
  }
}`,...u.parameters?.docs?.source}}},d=[`PreservesPagination`]}))();export{u as PreservesPagination,d as __namedExportsOrder,l as default};