import{t as e}from"./chunk-BvrOYcoh.js";import{a as t,o as n}from"./lit-html-BZ3vufxv.js";import{n as r,t as i}from"./haunted-v0Ee1Lpk.js";import{n as a,t as o}from"./queue-B0tMRNyf.js";var s,c,l,u,d,f;e((()=>{i(),n(),o(),{expect:s,waitFor:c}=__STORYBOOK_MODULE_TEST__,l=()=>a({heading:`Bar Queue`,details:async e=>e,list:()=>t`<div></div>`,view:()=>t`<div></div>`,loader:()=>t`<div></div>`}),customElements.get(`queue-bar-test`)||customElements.define(`queue-bar-test`,r(l)),u={title:`Tests/QueueBar`},d={render:()=>t`<queue-bar-test></queue-bar-test>`,async play({canvasElement:e}){let t=e.querySelector(`queue-bar-test`).shadowRoot;await c(()=>s(t.querySelector(`.tabn-heading`)?.assignedSlot?.name).toBe(`tabs`)),s(t.querySelector(`.tabn-heading`).hasAttribute(`role`)).toBe(!1),s(t.querySelector(`.tabn-tab`).getAttribute(`role`)).toBe(`tab`)}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => html\`<queue-bar-test></queue-bar-test>\`,
  async play({
    canvasElement
  }) {
    const root = canvasElement.querySelector('queue-bar-test')!.shadowRoot!;
    await waitFor(() => expect(root.querySelector('.tabn-heading')?.assignedSlot?.name).toBe('tabs'));
    expect(root.querySelector('.tabn-heading')!.hasAttribute('role')).toBe(false);
    expect(root.querySelector('.tabn-tab')!.getAttribute('role')).toBe('tab');
  }
}`,...d.parameters?.docs?.source}}},f=[`HeadingSitsOutsideTheTabs`]}))();export{d as HeadingSitsOutsideTheTabs,f as __namedExportsOrder,u as default};