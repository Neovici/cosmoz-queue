import{t as e}from"./chunk-BvrOYcoh.js";import{a as t,o as n}from"./lit-html-BZ3vufxv.js";import{n as r,t as i}from"./use-pref-CerQqsfK.js";import{n as a,t as o}from"./dist-DtdHtOfZ.js";var s,c,l,u,d,f,p;e((()=>{o(),n(),i(),{expect:s}=__STORYBOOK_MODULE_TEST__,c={title:`Tests/UsePref`},l={render:()=>t`<div id="test-container"></div>`,async play(){localStorage.removeItem(`pref-some`);let{result:e,unmount:t}=await a(()=>r(`some`,`asdad`));s(e.current[0]).toBe(`asdad`),t()}},u={render:()=>t`<div id="test-container"></div>`,async play(){localStorage.removeItem(`pref-update`);let{result:e,nextUpdate:t,unmount:n}=await a(()=>r(`update`));s(e.current[0]).toBeUndefined(),e.current[1](`dads`),await t(),s(e.current[0]).toBe(`dads`),n()}},d={render:()=>t`<div id="test-container"></div>`,async play(){localStorage.removeItem(`pref-undefined`);let{result:e,nextUpdate:t,unmount:n}=await a(()=>r(void 0,`fallback-value`));s(e.current[0]).toBe(`fallback-value`),e.current[1](`changed`),await t(),s(e.current[0]).toBe(`changed`),s(localStorage.getItem(`pref-undefined`)).toBeNull(),n()}},f={render:()=>t`<div id="test-container"></div>`,async play(){let e=Object.getOwnPropertyDescriptor(window,`localStorage`);Object.defineProperty(window,`localStorage`,{configurable:!0,get:()=>{throw new DOMException(`Access denied`,`SecurityError`)}});try{let{result:e,nextUpdate:t,unmount:n}=await a(()=>r(`blocked`,`fallback-value`));s(e.current[0]).toBe(`fallback-value`),e.current[1](`changed`),await t(),s(e.current[0]).toBe(`changed`),n()}finally{Object.defineProperty(window,`localStorage`,e)}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div id="test-container"></div>\`,
  async play() {
    localStorage.removeItem('pref-undefined');
    const {
      result,
      nextUpdate,
      unmount
    } = await renderHook(() => usePref<string>(undefined, 'fallback-value'));

    // An undefined key starts at the default, without touching storage
    expect(result.current[0]).toBe('fallback-value');

    // The setter updates the in-memory state only
    result.current[1]('changed');
    await nextUpdate();
    expect(result.current[0]).toBe('changed');
    expect(localStorage.getItem('pref-undefined')).toBeNull();
    unmount();
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div id="test-container"></div>\`,
  async play() {
    const descriptor = Object.getOwnPropertyDescriptor(window, 'localStorage')!,
      throwing = () => {
        throw new DOMException('Access denied', 'SecurityError');
      };
    Object.defineProperty(window, 'localStorage', {
      configurable: true,
      get: throwing
    });
    try {
      const {
        result,
        nextUpdate,
        unmount
      } = await renderHook(() => usePref<string>('blocked', 'fallback-value'));

      // A blocked storage degrades to the default instead of throwing
      expect(result.current[0]).toBe('fallback-value');

      // The setter keeps the in-memory state working
      result.current[1]('changed');
      await nextUpdate();
      expect(result.current[0]).toBe('changed');
      unmount();
    } finally {
      Object.defineProperty(window, 'localStorage', descriptor);
    }
  }
}`,...f.parameters?.docs?.source}}},p=[`DefaultPref`,`UpdatePref`,`IgnoresUndefinedKey`,`BlockedStorageDoesNotCrash`]}))();export{f as BlockedStorageDoesNotCrash,l as DefaultPref,d as IgnoresUndefinedKey,u as UpdatePref,p as __namedExportsOrder,c as default};