import{a as f,c as p}from"./lit-haunted-Dp_2alsg.js";import{b as g}from"./iframe-Bd9fbOqB.js";import{u as w}from"./use-callback-CfUbulJq.js";import"./preload-helper-PPVm8Dsz.js";function N(e,t){const[a,n]=f(()=>localStorage.getItem(`pref-${e}`)||t);return[a,w(o=>{localStorage.setItem(`pref-${e}`,o),n(o)},[n])]}const{expect:d}=__STORYBOOK_MODULE_TEST__,y={title:"Tests/UsePref"};let P=0;const m=new Map,l=(e,t)=>{const a=P++,n=`test-pref-${a}`,o=`${e}-${a}`,c=`pref-${o}`;localStorage.removeItem(c);const i=p(()=>{const u=N(o,t);return m.set(n,u),g`<div data-value="${u[0]??"undefined"}">
            ${u[0]??"undefined"}
        </div>`});return customElements.define(n,i),n},r={render:()=>{const e=l("default-test","asdad");return window.__defaultPrefTagName=e,document.createElement(e)},async play({canvasElement:e}){await new Promise(c=>setTimeout(c,100));const t=window.__defaultPrefTagName,o=e.querySelector(t)?.shadowRoot?.querySelector("[data-value]");d(o?.getAttribute("data-value")).toBe("asdad")}},s={render:()=>{const e=l("update-test");return window.__updatePrefTagName=e,document.createElement(e)},async play(){await new Promise(n=>setTimeout(n,100));const e=window.__updatePrefTagName,t=m.get(e);d(t).toBeDefined(),d(t[0]).toBeUndefined(),t[1]("dads"),await new Promise(n=>setTimeout(n,100));const a=m.get(e);d(a[0]).toBe("dads")}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    const tagName = createPrefComponent('default-test', 'asdad');
    (window as Record<string, unknown>).__defaultPrefTagName = tagName;
    const el = document.createElement(tagName);
    return el;
  },
  async play({
    canvasElement
  }) {
    // Wait for component to render
    await new Promise(r => setTimeout(r, 100));
    const tagName = (window as Record<string, unknown>).__defaultPrefTagName as string;

    // Query inside shadow DOM
    const hostEl = canvasElement.querySelector(tagName);
    const shadowRoot = hostEl?.shadowRoot;
    const el = shadowRoot?.querySelector('[data-value]');
    expect(el?.getAttribute('data-value')).toBe('asdad');
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const tagName = createPrefComponent('update-test');
    (window as Record<string, unknown>).__updatePrefTagName = tagName;
    const el = document.createElement(tagName);
    return el;
  },
  async play() {
    // Wait for component to render
    await new Promise(r => setTimeout(r, 100));
    const tagName = (window as Record<string, unknown>).__updatePrefTagName as string;
    const result = hookResults.get(tagName);
    expect(result).toBeDefined();

    // Initial value should be undefined
    expect(result![0]).toBeUndefined();

    // Update the pref
    result![1]('dads');

    // Wait for re-render
    await new Promise(r => setTimeout(r, 100));
    const newResult = hookResults.get(tagName);
    expect(newResult![0]).toBe('dads');
  }
}`,...s.parameters?.docs?.source}}};const E=["DefaultPref","UpdatePref"];export{r as DefaultPref,s as UpdatePref,E as __namedExportsOrder,y as default};
