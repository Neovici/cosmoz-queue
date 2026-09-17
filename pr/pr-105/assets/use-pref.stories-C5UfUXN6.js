import{t as e}from"./chunk-BvrOYcoh.js";import{a as t,o as n}from"./lit-html-BZ3vufxv.js";import{n as r,t as i}from"./use-pref-DguRnasc.js";import{n as a,t as o}from"./dist-BGXZWOnu.js";var s,c,l,u,d;e((()=>{o(),n(),i(),{expect:s}=__STORYBOOK_MODULE_TEST__,c={title:`Tests/UsePref`},l={render:()=>t`<div id="test-container"></div>`,async play(){localStorage.removeItem(`pref-some`);let{result:e,unmount:t}=await a(()=>r(`some`,`asdad`));s(e.current[0]).toBe(`asdad`),t()}},u={render:()=>t`<div id="test-container"></div>`,async play(){localStorage.removeItem(`pref-update`);let{result:e,nextUpdate:t,unmount:n}=await a(()=>r(`update`));s(e.current[0]).toBeUndefined(),e.current[1](`dads`),await t(),s(e.current[0]).toBe(`dads`),n()}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div id="test-container"></div>\`,
  async play() {
    localStorage.removeItem('pref-some');
    const {
      result,
      unmount
    } = await renderHook(() => usePref('some', 'asdad'));
    expect(result.current[0]).toBe('asdad');
    unmount();
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div id="test-container"></div>\`,
  async play() {
    localStorage.removeItem('pref-update');
    const {
      result,
      nextUpdate,
      unmount
    } = await renderHook(() => usePref('update'));

    // Initial value should be undefined
    expect(result.current[0]).toBeUndefined();

    // Update the pref
    result.current[1]('dads');
    await nextUpdate();
    expect(result.current[0]).toBe('dads');
    unmount();
  }
}`,...u.parameters?.docs?.source}}},d=[`DefaultPref`,`UpdatePref`]}))();export{l as DefaultPref,u as UpdatePref,d as __namedExportsOrder,c as default};