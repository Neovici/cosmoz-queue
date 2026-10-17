import{t as e}from"./chunk-BvrOYcoh.js";import{a as t,o as n}from"./lit-html-BZ3vufxv.js";import{n as r,t as i}from"./next-AJhmZKCu.js";import{n as a,r as o}from"./style-opM47op0.js";import{i as s,n as c,r as l,t as u}from"./icons-BvOOspHj.js";var d,f,p,m,h,g;e((()=>{i(),n(),u(),a(),{expect:d,waitFor:f}=__STORYBOOK_MODULE_TEST__,p=[{name:`overview`,title:`List`,content:c},{name:`split`,title:`Split`,content:s},{name:`queue`,title:`Queue`,content:l}],m={title:`Tests/SegmentedHeader`},h={render:()=>t`
        <style>
            ${o}
        </style>
        <cosmoz-tabs-next class="tabn" variant="segmented" size="sm" compact-width>
            ${r({tabs:p,active:p[1],onActivate:()=>void 0,className:`tabn-tab`})}
        </cosmoz-tabs-next>
    `,async play({canvasElement:e}){let t=e.querySelector(`cosmoz-tabs-next`);await f(()=>{let e=t.getBoundingClientRect();for(let n of t.querySelectorAll(`cosmoz-tab-next`)){let t=n.querySelector(`svg`).getBoundingClientRect(),r=t.top-e.top,i=e.bottom-t.bottom;d(Math.abs(r-i)).toBeLessThan(.5),d(n.getBoundingClientRect().bottom).toBeLessThanOrEqual(e.bottom)}});let n=t.querySelector(`[active]`);d(getComputedStyle(n).backgroundColor).not.toBe(getComputedStyle(t).backgroundColor)}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <style>
            \${queueStyle}
        </style>
        <cosmoz-tabs-next class="tabn" variant="segmented" size="sm" compact-width>
            \${renderTabs({
    tabs,
    active: tabs[1],
    onActivate: () => undefined,
    className: 'tabn-tab'
  })}
        </cosmoz-tabs-next>
    \`,
  async play({
    canvasElement
  }) {
    const group = canvasElement.querySelector('cosmoz-tabs-next')!;
    await waitFor(() => {
      const outer = group.getBoundingClientRect();
      for (const tab of group.querySelectorAll('cosmoz-tab-next')) {
        const icon = tab.querySelector('svg')!.getBoundingClientRect();
        const top = icon.top - outer.top;
        const bottom = outer.bottom - icon.bottom;
        expect(Math.abs(top - bottom)).toBeLessThan(0.5);
        expect(tab.getBoundingClientRect().bottom).toBeLessThanOrEqual(outer.bottom);
      }
    });
    const selected = group.querySelector<HTMLElement>('[active]')!;
    expect(getComputedStyle(selected).backgroundColor).not.toBe(getComputedStyle(group).backgroundColor);
  }
}`,...h.parameters?.docs?.source}}},g=[`CenteredIcons`]}))();export{h as CenteredIcons,g as __namedExportsOrder,m as default};