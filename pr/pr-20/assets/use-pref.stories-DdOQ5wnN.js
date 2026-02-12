import{c as x,a as E}from"./lit-haunted-DGmhBbUE.js";import{b as v,D as R}from"./iframe-32s9o9LL.js";import{u as _}from"./use-callback-BXh127T0.js";import"./preload-helper-PPVm8Dsz.js";function I(){const e=[],t=[],s={get all(){return e.map(({value:r,error:a})=>a??r)},get current(){const r=e[e.length-1],a=r?.value,n=r?.error;if(n)throw n;return a},get error(){return e[e.length-1]?.error}},o=(r,a)=>{e.push({value:r,error:a}),t.splice(0,t.length).forEach(n=>n())};return{result:s,addResolver:r=>{t.push(r)},setValue:r=>o(r),setError:r=>o(void 0,r)}}const $=Symbol.for(""),T=e=>{if(e?.r===$)return e?._$litStatic$},w=e=>({_$litStatic$:e,r:$}),g=new Map,B=e=>(t,...s)=>{const o=s.length;let r,a;const n=[],u=[];let d,c=0,l=!1;for(;c<o;){for(d=t[c];c<o&&(a=s[c],(r=T(a))!==void 0);)d+=r+t[++c],l=!0;c!==o&&u.push(a),n.push(d),c++}if(c===o&&n.push(t[o]),l){const i=n.join("$$lit$$");(t=g.get(i))===void 0&&(n.raw=n,g.set(i,t=n)),s=u}return e(t,...s)},H=B(v),m="render-hooklt",O=({render:e,hookProps:t})=>{e(t)};customElements.define(m,x(O,{useShadowDOM:!1}));function b({callback:e,setValue:t,setError:s},o=r=>r){const r=a=>{try{t(e(a))}catch(n){s(n)}};return a=>{const n=document.createElement("div");document.body.appendChild(n),R(o(H`<${w(m)}
					.render=${r}
					.hookProps=${a}
				></${w(m)}>`,a),n);const u=n.firstElementChild,d=u.matches(m)?u:u.querySelector(m);return{root:u,el:d}}}function D(e,t,s={}){const{interval:o=50,timeout:r=1e3}=s,{stack:a}=new Error;return new Promise((n,u)=>{let d;setTimeout(()=>{clearTimeout(d);const l=new Error(t?`Timeout: ${t}`:`waitUntil timed out after ${r}ms`);l.stack=a,u(l)},r);async function c(){try{await e()?n():d=setTimeout(c,o)}catch(l){u(l)}}c()})}const C=e=>(t,s)=>{let o=!1;return e(()=>{o=!0}),D(()=>o,t,s)},S=async(e,t={})=>{const{result:s,setValue:o,setError:r,addResolver:a}=I(),n={callback:e,setValue:o,setError:r};let u=t.initialProps;const d=b(n,t.wrapper),{root:c,el:l}=d(u),i=C(a),k=(U=u)=>(l.hookProps=u=U,i()),y=()=>{c.remove()};return await i(),{result:s,rerender:k,unmount:y,nextUpdate:i,host:l}};function P(e,t){const[s,o]=E(()=>localStorage.getItem(`pref-${e}`)||t);return[s,_(r=>{localStorage.setItem(`pref-${e}`,r),o(r)},[o])]}const{expect:h}=__STORYBOOK_MODULE_TEST__,K={title:"Tests/UsePref"},p={render:()=>v`<div id="test-container"></div>`,async play(){localStorage.removeItem("pref-some");const{result:e,unmount:t}=await S(()=>P("some","asdad"));h(e.current[0]).toBe("asdad"),t()}},f={render:()=>v`<div id="test-container"></div>`,async play(){localStorage.removeItem("pref-update");const{result:e,nextUpdate:t,unmount:s}=await S(()=>P("update"));h(e.current[0]).toBeUndefined(),e.current[1]("dads"),await t(),h(e.current[0]).toBe("dads"),s()}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};const L=["DefaultPref","UpdatePref"];export{p as DefaultPref,f as UpdatePref,L as __namedExportsOrder,K as default};
