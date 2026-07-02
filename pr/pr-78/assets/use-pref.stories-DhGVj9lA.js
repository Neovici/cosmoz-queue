import{t as e}from"./chunk-BvrOYcoh.js";import{a as t,c as n,i as r,n as i,o as a}from"./lit-html-BZ3vufxv.js";import{f as o,n as s,t as c,u as l}from"./haunted-Cg1OQRTV.js";function u(){let e=[],t=[],n={get all(){return e.map(({value:e,error:t})=>t??e)},get current(){let t=e[e.length-1],n=t?.value,r=t?.error;if(r)throw r;return n},get error(){return e[e.length-1]?.error}},r=(n,r)=>{e.push({value:n,error:r}),t.splice(0,t.length).forEach(e=>e())};return{result:n,addResolver:e=>{t.push(e)},setValue:e=>r(e),setError:e=>r(void 0,e)}}var d=e((()=>{})),f,p,m,h,g,_,v=e((()=>{a(),f=Symbol.for(``),p=e=>{if(e?.r===f)return e?._$litStatic$},m=e=>({_$litStatic$:e,r:f}),h=new Map,g=e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],i=p(a))!==void 0;)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=h.get(e))===void 0&&(o.raw=o,h.set(e,t=o)),n=s}return e(t,...n)},_=g(t),g(n),g(r)}));function y({callback:e,setValue:t,setError:n},r=e=>e){let a=r=>{try{t(e(r))}catch(e){n(e)}};return e=>{let t=document.createElement(`div`);document.body.appendChild(t),i(r(_`<${m(b)}
					.render=${a}
					.hookProps=${e}
				></${m(b)}>`,e),t);let n=t.firstElementChild;return{root:n,el:n.matches(b)?n:n.querySelector(b)}}}var b,x,S=e((()=>{c(),v(),a(),b=`render-hooklt`,x=({render:e,hookProps:t})=>{e(t)},customElements.define(b,s(x,{useShadowDOM:!1}))}));function C(e,t,n={}){let{interval:r=50,timeout:i=1e3}=n,{stack:a}=Error();return new Promise((n,o)=>{let s;setTimeout(()=>{clearTimeout(s);let e=Error(t?`Timeout: ${t}`:`waitUntil timed out after ${i}ms`);e.stack=a,o(e)},i);async function c(){try{await e()?n():s=setTimeout(c,r)}catch(e){o(e)}}c()})}var w=e((()=>{})),T,E,D=e((()=>{d(),S(),w(),T=e=>(t,n)=>{let r=!1;return e(()=>{r=!0}),C(()=>r,t,n)},E=async(e,t={})=>{let{result:n,setValue:r,setError:i,addResolver:a}=u(),o={callback:e,setValue:r,setError:i},s=t.initialProps,{root:c,el:l}=y(o,t.wrapper)(s),d=T(a);return await d(),{result:n,rerender:(e=s)=>(l.hookProps=s=e,d()),unmount:()=>{c.remove()},nextUpdate:d,host:l}}})),O=e((()=>{D(),w()}));function k(e,t){let[n,r]=l(()=>localStorage.getItem(`pref-${e}`)||t);return[n,o(t=>{localStorage.setItem(`pref-${e}`,t),r(t)},[r])]}var A=e((()=>{c()})),j,M,N,P,F;e((()=>{O(),a(),A(),{expect:j}=__STORYBOOK_MODULE_TEST__,M={title:`Tests/UsePref`},N={render:()=>t`<div id="test-container"></div>`,async play(){localStorage.removeItem(`pref-some`);let{result:e,unmount:t}=await E(()=>k(`some`,`asdad`));j(e.current[0]).toBe(`asdad`),t()}},P={render:()=>t`<div id="test-container"></div>`,async play(){localStorage.removeItem(`pref-update`);let{result:e,nextUpdate:t,unmount:n}=await E(()=>k(`update`));j(e.current[0]).toBeUndefined(),e.current[1](`dads`),await t(),j(e.current[0]).toBe(`dads`),n()}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F=[`DefaultPref`,`UpdatePref`]}))();export{N as DefaultPref,P as UpdatePref,F as __namedExportsOrder,M as default};