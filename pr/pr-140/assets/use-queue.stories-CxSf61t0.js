import{t as e}from"./chunk-BvrOYcoh.js";import{a as t,n,o as r}from"./lit-html-BZ3vufxv.js";import{n as i,t as a}from"./next-BcAIvYwF.js";import{n as o,t as s}from"./use-queue-y13ZfgyI.js";import{n as c,r as l,t as u}from"./dist-C3UMb1XR.js";var d,f,p,m,h,g,_,v,y,b,x,S,C;e((()=>{a(),u(),r(),s(),{expect:d}=__STORYBOOK_MODULE_TEST__,f={title:`Tests/UseQueue`},p=[{id:`1`},{id:`2`}],m=async(e,t,r=!0)=>{let a=await c(()=>o(e));return a.host.style.display=`block`,a.host.style.width=`800px`,await l(()=>a.result.current.mobile===!1),n(i({...a.result.current.tabnav}),t.querySelector(`#test-container`)),r&&(a.result.current.setItems(p),await a.nextUpdate()),a},h=(e,t)=>e.querySelector(`cosmoz-tab-next[name="${t}"]`),g=e=>e.dispatchEvent(new MouseEvent(`click`,{bubbles:!0,cancelable:!0,button:0})),_={render:()=>t`<div id="test-container"></div>`,async play({canvasElement:e}){localStorage.removeItem(`pref-test-queue-tab`);try{let{result:t,unmount:n,nextUpdate:r}=await m({persistKey:`test-queue`,fallback:`overview`},e);d(t.current.activeTab).toBe(`overview`),g(h(e,`split`)),await r(),d(t.current.activeTab).toBe(`split`),d(localStorage.getItem(`pref-test-queue-tab`)).toBe(`split`),n()}finally{localStorage.removeItem(`pref-test-queue-tab`)}}},v={render:()=>t`<div id="test-container"></div>`,async play({canvasElement:e}){localStorage.setItem(`pref-test-queue-2-tab`,`split`);try{let{result:t,unmount:n}=await m({persistKey:`test-queue-2`,fallback:`overview`},e);d(t.current.activeTab).toBe(`split`),n()}finally{localStorage.removeItem(`pref-test-queue-2-tab`)}}},y={render:()=>t`<div id="test-container"></div>`,async play({canvasElement:e}){localStorage.setItem(`pref-test-queue-3-tab`,`split`);let t=location.hash;location.hash=`#!#qtab=overview`;try{let{result:t,unmount:n}=await m({persistKey:`test-queue-3`,tabHashParam:`qtab`,fallback:`split`},e,!1);d(t.current.activeTab).toBe(`overview`),d(localStorage.getItem(`pref-test-queue-3-tab`)).toBe(`split`),n()}finally{location.hash!==t&&(location.hash=t),localStorage.removeItem(`pref-test-queue-3-tab`)}}},b={render:()=>t`<div id="test-container"></div>`,async play({canvasElement:e}){localStorage.setItem(`pref-test-queue-4-tab`,`split`);try{let{result:t,unmount:n}=await m({persistKey:`test-queue-4`,fallback:`overview`},e,!1);d(t.current.activeTab).toBe(`overview`),d(t.current.tabnav.tabs.find(e=>e.name===`split`)?.disabled).toBe(!0),n()}finally{localStorage.removeItem(`pref-test-queue-4-tab`)}}},x={render:()=>t`<div id="test-container"></div>`,async play({canvasElement:e}){localStorage.removeItem(`pref-test-queue-5-tab`);try{let{result:t,unmount:n,nextUpdate:r}=await m({persistKey:`test-queue-5`,fallback:`overview`},e);t.current.tabnav.activate(`split`),await r(),d(t.current.activeTab).toBe(`split`),d(localStorage.getItem(`pref-test-queue-5-tab`)).toBeNull(),n()}finally{localStorage.removeItem(`pref-test-queue-5-tab`)}}},S={render:()=>t`<div id="test-container"></div>`,async play({canvasElement:e}){localStorage.removeItem(`pref-test-queue-6-tab`);try{let t=await m({persistKey:`test-queue-6`,fallback:`overview`},e);g(h(e,`queue`)),await t.nextUpdate(),d(t.result.current.activeTab).toBe(`queue`),d(localStorage.getItem(`pref-test-queue-6-tab`)).toBe(`queue`),t.unmount();let n=await m({persistKey:`test-queue-6`,fallback:`overview`},e);d(n.result.current.activeTab).toBe(`overview`),n.unmount()}finally{localStorage.removeItem(`pref-test-queue-6-tab`)}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div id="test-container"></div>\`,
  async play({
    canvasElement
  }) {
    localStorage.removeItem('pref-test-queue-tab');
    try {
      const {
        result,
        unmount,
        nextUpdate
      } = await mountQueue({
        persistKey: 'test-queue',
        fallback: 'overview'
      }, canvasElement);

      // No stored pick yet: the fallback tab opens
      expect(result.current.activeTab).toBe('overview');

      // Clicking Split is remembered
      clickTab(tab(canvasElement, 'split'));
      await nextUpdate();
      expect(result.current.activeTab).toBe('split');
      expect(localStorage.getItem('pref-test-queue-tab')).toBe('split');
      unmount();
    } finally {
      localStorage.removeItem('pref-test-queue-tab');
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div id="test-container"></div>\`,
  async play({
    canvasElement
  }) {
    localStorage.setItem('pref-test-queue-2-tab', 'split');
    try {
      const {
        result,
        unmount
      } = await mountQueue({
        persistKey: 'test-queue-2',
        fallback: 'overview'
      }, canvasElement);

      // A fresh mount opens on the remembered tab
      expect(result.current.activeTab).toBe('split');
      unmount();
    } finally {
      localStorage.removeItem('pref-test-queue-2-tab');
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div id="test-container"></div>\`,
  async play({
    canvasElement
  }) {
    localStorage.setItem('pref-test-queue-3-tab', 'split');
    const hash = location.hash;
    // the params live after an inner '#' in the routed hash format
    location.hash = '#!#qtab=overview';
    try {
      const {
        result,
        unmount
      } = await mountQueue({
        persistKey: 'test-queue-3',
        tabHashParam: 'qtab',
        fallback: 'split'
      }, canvasElement, false);

      // The hash names the tab — the stored pick and the fallback lose
      expect(result.current.activeTab).toBe('overview');
      // and the visit does not overwrite the stored pick
      expect(localStorage.getItem('pref-test-queue-3-tab')).toBe('split');
      unmount();
    } finally {
      if (location.hash !== hash) {
        location.hash = hash;
      }
      localStorage.removeItem('pref-test-queue-3-tab');
    }
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div id="test-container"></div>\`,
  async play({
    canvasElement
  }) {
    localStorage.setItem('pref-test-queue-4-tab', 'split');
    try {
      const {
        result,
        unmount
      } = await mountQueue({
        persistKey: 'test-queue-4',
        fallback: 'overview'
      }, canvasElement, false);

      // The remembered Split is disabled on an empty queue — the fallback opens
      expect(result.current.activeTab).toBe('overview');
      expect(result.current.tabnav.tabs.find(t => t.name === 'split')?.disabled).toBe(true);
      unmount();
    } finally {
      localStorage.removeItem('pref-test-queue-4-tab');
    }
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div id="test-container"></div>\`,
  async play({
    canvasElement
  }) {
    localStorage.removeItem('pref-test-queue-5-tab');
    try {
      const {
        result,
        unmount,
        nextUpdate
      } = await mountQueue({
        persistKey: 'test-queue-5',
        fallback: 'overview'
      }, canvasElement);

      // Opening a record from the list goes through tabnav.activate:
      // it switches the tab…
      result.current.tabnav.activate('split');
      await nextUpdate();
      expect(result.current.activeTab).toBe('split');

      // …but does not count as a pick
      expect(localStorage.getItem('pref-test-queue-5-tab')).toBeNull();
      unmount();
    } finally {
      localStorage.removeItem('pref-test-queue-5-tab');
    }
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div id="test-container"></div>\`,
  async play({
    canvasElement
  }) {
    localStorage.removeItem('pref-test-queue-6-tab');
    try {
      const first = await mountQueue({
        persistKey: 'test-queue-6',
        fallback: 'overview'
      }, canvasElement);

      // Clicking the details (queue) tab is stored…
      clickTab(tab(canvasElement, 'queue'));
      await first.nextUpdate();
      expect(first.result.current.activeTab).toBe('queue');
      expect(localStorage.getItem('pref-test-queue-6-tab')).toBe('queue');
      first.unmount();

      // …but a fresh visit never opens there: the fallback wins
      const second = await mountQueue({
        persistKey: 'test-queue-6',
        fallback: 'overview'
      }, canvasElement);
      expect(second.result.current.activeTab).toBe('overview');
      second.unmount();
    } finally {
      localStorage.removeItem('pref-test-queue-6-tab');
    }
  }
}`,...S.parameters?.docs?.source}}},C=[`StoresPickedTab`,`OpensOnStoredTab`,`HashWinsOverStored`,`InvalidStoredTabFallsThrough`,`ProgrammaticActivateDoesNotStore`,`DetailsClickDoesNotChangeLanding`]}))();export{S as DetailsClickDoesNotChangeLanding,y as HashWinsOverStored,b as InvalidStoredTabFallsThrough,v as OpensOnStoredTab,x as ProgrammaticActivateDoesNotStore,_ as StoresPickedTab,C as __namedExportsOrder,f as default};