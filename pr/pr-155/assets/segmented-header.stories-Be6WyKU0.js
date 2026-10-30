import{t as e}from"./chunk-BvrOYcoh.js";import{a as t,o as n}from"./lit-html-BZ3vufxv.js";import{n as r,t as i}from"./haunted-CkSbX4Z4.js";import{n as a,r as o,t as s}from"./next-BBJpanj5.js";import{n as c,r as l}from"./style-B9ijBqZw.js";import{i as u,n as d,r as f,t as p}from"./icons-DW9TCBuq.js";var m,h=e((()=>{n(),m=(e,n)=>e.map(e=>e.name===n?{...e,content:t`${e.content}<span>${e.title}</span>`}:e)})),g,_,v,y,b,x,S,C,w;e((()=>{s(),i(),n(),p(),h(),c(),{expect:g,userEvent:_,waitFor:v}=__STORYBOOK_MODULE_TEST__,y=[{name:`overview`,title:`List`,content:d},{name:`split`,title:`Split`,content:u},{name:`queue`,title:`Focus`,content:f}],b=()=>{let e=o(y,{});return t`
        <style>
            ${l}
        </style>
        <cosmoz-tabs-next class="tabn" variant="segmented" size="sm" compact-width>
            ${a({...e,tabs:m(e.tabs,e.active?.name),className:`tabn-tab`})}
        </cosmoz-tabs-next>
    `},customElements.get(`labelled-header-test`)||customElements.define(`labelled-header-test`,r(b,{useShadowDOM:!1})),x={title:`Tests/SegmentedHeader`},S={render:()=>t`
        <style>
            ${l}
        </style>
        <cosmoz-tabs-next class="tabn" variant="segmented" size="sm" compact-width>
            ${a({tabs:y,active:y[1],onActivate:()=>void 0,className:`tabn-tab`})}
        </cosmoz-tabs-next>
    `,async play({canvasElement:e}){let t=e.querySelector(`cosmoz-tabs-next`);await v(()=>{let e=t.getBoundingClientRect();for(let n of t.querySelectorAll(`cosmoz-tab-next`)){let t=n.querySelector(`svg`).getBoundingClientRect(),r=t.top-e.top,i=e.bottom-t.bottom;g(Math.abs(r-i)).toBeLessThan(.5),g(n.getBoundingClientRect().bottom).toBeLessThanOrEqual(e.bottom)}});let n=t.querySelector(`[active]`);g(getComputedStyle(n).backgroundColor).not.toBe(getComputedStyle(t).backgroundColor)}},C={render:()=>t`<labelled-header-test></labelled-header-test>`,async play({canvasElement:e}){let t=t=>e.querySelector(`cosmoz-tab-next[name=${t}]`),n=()=>[...e.querySelectorAll(`cosmoz-tab-next`)].map(e=>e.textContent?.trim());await v(()=>g(n()).toEqual([`List`,``,``])),await _.click(t(`queue`)),await v(()=>g(n()).toEqual([``,``,`Focus`])),g(t(`overview`).getAttribute(`title`)).toBe(`List`)}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => html\`<labelled-header-test></labelled-header-test>\`,
  async play({
    canvasElement
  }) {
    const tab = (name: string) => canvasElement.querySelector<HTMLElement>(\`cosmoz-tab-next[name=\${name}]\`)!;
    const labels = () => [...canvasElement.querySelectorAll('cosmoz-tab-next')].map(t => t.textContent?.trim());
    await waitFor(() => expect(labels()).toEqual(['List', '', '']));
    await userEvent.click(tab('queue'));
    await waitFor(() => expect(labels()).toEqual(['', '', 'Focus']));
    expect(tab('overview').getAttribute('title')).toBe('List');
  }
}`,...C.parameters?.docs?.source},description:{story:"Opt-in: `labelActive` names the active layout tab; the others stay icon-only.",...C.parameters?.docs?.description}}},w=[`CenteredIcons`,`LabelledActive`]}))();export{S as CenteredIcons,C as LabelledActive,w as __namedExportsOrder,x as default};