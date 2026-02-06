import{b as m}from"./iframe-BMODXThL.js";import{a as p,c as f}from"./lit-haunted-D_E11GVP.js";import{u as v}from"./use-callback-Bv00eJ6y.js";import"./preload-helper-PPVm8Dsz.js";function l(e,t){const[n,r]=p(()=>localStorage.getItem(`pref-${e}`)||t);return[n,v(a=>{localStorage.setItem(`pref-${e}`,a),r(a)},[r])]}const i=async e=>{let t,n=null;const r=`test-hook-${Math.random().toString(36).slice(2)}`,a=f(()=>(t=e(),n?.(),n=null,null));customElements.define(r,a);const c=document.createElement(r);return document.body.appendChild(c),await new Promise(d=>setTimeout(d,0)),{result:{get current(){return t}},nextUpdate:()=>new Promise(d=>{n=d}),unmount:()=>c.remove()}},{expect:u}=__STORYBOOK_MODULE_TEST__,x={title:"Tests/UsePref"},o={render:()=>m`<div id="test-container"></div>`,async play(){localStorage.removeItem("pref-some");const{result:e,unmount:t}=await i(()=>l("some","asdad"));u(e.current[0]).toBe("asdad"),t()}},s={render:()=>m`<div id="test-container"></div>`,async play(){localStorage.removeItem("pref-update");const{result:e,nextUpdate:t,unmount:n}=await i(()=>l("update"));u(e.current[0]).toBeUndefined(),e.current[1]("dads"),await t(),u(e.current[0]).toBe("dads"),n()}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const w=["DefaultPref","UpdatePref"];export{o as DefaultPref,s as UpdatePref,w as __namedExportsOrder,x as default};
