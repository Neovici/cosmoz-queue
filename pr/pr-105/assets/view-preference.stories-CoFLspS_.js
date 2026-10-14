import{t as e}from"./chunk-BvrOYcoh.js";import{a as t,o as n}from"./lit-html-BZ3vufxv.js";import{d as r,h as i,m as a,p as o,t as s}from"./haunted-sBNvNqAB.js";import{l as c}from"./i18next-BHDCTA9U.js";import{a as l,c as u,i as d,l as f,n as ee,o as p,r as m,s as h,t as g,u as _}from"./use-tabs-ITHsll_Q.js";import{n as v,r as y,t as b}from"./dist-DnuuFzJB.js";function te(e){return e==null?[]:Array.isArray(e)?e:typeof e==`string`?[e]:x(e)?Array.from(e):[e]}var x,ne=e((()=>{c(),x=e=>typeof e==`object`&&!!e&&Symbol.iterator in e})),S,C,re=e((()=>{S=Symbol(`memo`),C=e=>{let t=S,n;return function(r){if(t===r)return n;let i=e(r);return n=i,t=r,i}}})),w,T,E,ie,D,O,ae,oe=e((()=>{w=class extends Error{response;data;constructor(e,t,n){super(e),this.name=`RequestError`,this.response=t,this.data=n}},T=e=>{if(e&&typeof e==`object`){let t=e,n=t.message??t.Message??t.friendlyMessage??t.error?.httpMessage??t.errors?.map(e=>e.message).join(` `);if(n)return n}return`Unknown error`},E={},D=(e,t)=>window.fetch(e,{...E,mode:`cors`,credentials:`include`,...t,headers:{...E?.headers,...ie?.(),...t?.headers}}),O=e=>{if(e.status===204)return``;let t=e.json();return e.ok?t.catch(()=>``):t.then(t=>Promise.reject(new w(T(t),e,t)),t=>e.status===404?Promise.reject(new w(`URL not found: `+e.url,e)):Promise.reject(t))},ae=(e,{fetch:t=D,handleJSON:n=O,...r}={})=>t(e,r).then(n)})),se,ce,le=e((()=>{h(),s(),se=480,ce=(e=se)=>{let t=u(),[n,a]=r(!1);return i(()=>{let n=new ResizeObserver(([t])=>{a(t.contentRect.width<=e)});return n.observe(t),()=>n.disconnect()},[t,e]),i(()=>{t.toggleAttribute(`data-mobile`,n)},[t,n]),n}})),k,ue=e((()=>{k=(e=document)=>{let t=e.activeElement;return t?t.shadowRoot?k(t.shadowRoot):t:null}})),A,j,M,N,de=e((()=>{h(),l(),s(),ue(),A=(e,t,n)=>[...[`overview`,`split`].includes(e)?t:[],...[`queue`,`split`].includes(e)?n:[]],j=e=>{let t=e.shadowRoot,n=t?.querySelector(`.button-nav`);if(!t||!n)return!1;let r=n.getBoundingClientRect();return t.elementFromPoint(r.x+r.width/2,r.y+r.height/2)?.closest(`.button-nav`)!==n},M=e=>{let t=k();return!t?.isContentEditable&&!t?.matches(`input, textarea`)&&!j(e)},N=({next:e,prev:t,activeTab:n})=>{let r=p({next:e,prev:t,activeTab:n}),a=u();i(()=>{let e=e=>{if(e.defaultPrevented)return;let{key:t}=e,{next:n,prev:i,activeTab:o}=r;switch(!0){case n&&A(o,[`ArrowDown`,`Down`],[`ArrowRight`,`Right`]).includes(t)&&M(a):return e.preventDefault(),n();case i&&A(o,[`ArrowUp`,`Up`],[`ArrowLeft`,`Left`]).includes(t)&&M(a):return e.preventDefault(),i()}};return document.addEventListener(`keydown`,e,!0),()=>document.removeEventListener(`keydown`,e,!0)},[])}})),P,fe=e((()=>{s(),l(),h(),P=({ensue:e})=>{let t=u(),n=p({ensue:e});i(()=>{let e=e=>{let{id:t,remove:r}=e.detail;e.preventDefault(),n?.ensue(t),r()};return t.addEventListener(`list-item-remove`,e),()=>t.removeEventListener(`list-item-remove`,e)},[])}})),F,I,pe=e((()=>{F=(e,t)=>(t?.length>0?t:e)??[],I=e=>{if(!e)return[];let t=e[0]?.items;return Array.isArray(t)?e.flatMap(e=>e.items??[]):e}})),L,R,me,z,B,V,he=e((()=>{ne(),re(),s(),oe(),le(),f(),de(),m(),g(),fe(),pe(),L=`itemRow-active`,R=(e,t)=>o(n=>e!=null&&t(n)===t(e)?L:void 0,[e,t]),me=e=>e.id,z=({id:e,api:t,items:n,...r})=>{t&&typeof console<`u`&&console.warn&&console.warn(`[cosmoz-queue] DEPRECATED: The \`api\` property is deprecated and will be removed in v2.0.0. Please migrate to the \`details\` property for better control and performance.

Migration guide:
  Before: api: (id, item) => apiUrl('api/items/\${id}')
  After:  details: (item) => fetch(apiUrl('api/items/\${item.id}')).then(res => res.json())

See: https://github.com/Neovici/cosmoz-queue#migration-from-api-to-details`);let i=a(()=>t&&C(n=>ae(t(e(n),n))),[e,t]);return{..._(n,{...r,id:e}),id:e,details:i}},B=({id:e=me,api:t,tabHashParam:n,idHashParam:r,fallback:i,onActivate:s,tabPersistKey:c,...l})=>{let{items:u,selected:d}=l,f=ce(),p=a(()=>I(u),[u]),m=a(()=>F(p,d),[p,d]),{tabnav:h,activeTab:g}=ee({items:m,hashParam:n,fallback:i,onActivate:s,tabPersistKey:c,mobile:f}),_=z({id:e,api:t,items:m,hashParam:r,maintainSelection:[`queue`,`split`].includes(g)}),{item:v,setItem:y}=_,b=o(t=>{if(e(v)!==t)return;let n=p.indexOf(v);y(p[Math.min(n+1,p.length-1)])},[v,e,p]);return N({activeTab:g,..._}),P({ensue:b,..._}),{...l,tabnav:h,activeTab:g,mobile:f,hideActions:d?.length>0&&g===`split`,index:a(()=>p.indexOf(v),[v,p]),rowPartFn:R(v,e),onItemClick:o(e=>{let{item:t,index:n,activate:r}=e.detail,i=e.composedPath().find(e=>e instanceof Element&&e.matches?.(`[mini]`)),a=r??(i?[`split`,`queue`]:void 0);if(y(t??p[n]),a){let e=te(a).find(e=>h.tabs.find(t=>t.name===e&&!t.disabled));e&&h.activate(e)}e.preventDefault()},[g,p]),ensue:b,nav:_}},V=e=>B({...e,...d()})})),H,U,W,G,K,q,J,ge,Y,X,Z,Q,$;e((()=>{b(),n(),he(),{expect:H}=__STORYBOOK_MODULE_TEST__,U={title:`Tests/ViewPreference`},W=`view-pref-test`,G=`pref-${W}`,K=[{id:`a`},{id:`b`}],q=async()=>{localStorage.removeItem(G),location.hash=``;let e=await v(()=>V({tabPersistKey:W,fallback:`split`,tabHashParam:`view-pref-tab`}));return e.result.current.setItems(K),await e.nextUpdate(),e},J=e=>({button:0,metaKey:!1,ctrlKey:!1,currentTarget:{getAttribute:()=>e}}),ge=()=>new CustomEvent(`omnitable-item-click`,{detail:{item:K[0],index:0,activate:[`split`,`queue`]}}),Y={render:()=>t`<div id="test-container"></div>`,async play(){let{result:e,unmount:t}=await q();e.current.tabnav.onActivate(J(`overview`)),await y(()=>e.current.activeTab===`overview`),H(localStorage.getItem(G)).toBe(`overview`),localStorage.removeItem(G),t()}},X={render:()=>t`<div id="test-container"></div>`,async play(){let{result:e,unmount:t}=await q();e.current.tabnav.onActivate(J(`overview`)),e.current.tabnav.onActivate(J(`queue`)),await y(()=>e.current.activeTab===`queue`),H(localStorage.getItem(G)).toBe(`overview`),localStorage.removeItem(G),t()}},Z={render:()=>t`<div id="test-container"></div>`,async play(){let{result:e,unmount:t}=await q();e.current.tabnav.onActivate(J(`overview`)),await y(()=>e.current.activeTab===`overview`),e.current.onItemClick(ge()),await y(()=>e.current.activeTab!==`overview`),H(localStorage.getItem(G)).toBe(`overview`),localStorage.removeItem(G),t()}},Q={render:()=>t`<div id="test-container"></div>`,async play(){localStorage.setItem(G,`overview`),location.hash=``;let{result:e,nextUpdate:t,unmount:n}=await v(()=>V({tabPersistKey:W,fallback:`split`,tabHashParam:`view-pref-tab`}));e.current.setItems(K),await t(),H(e.current.activeTab).toBe(`overview`),localStorage.removeItem(G),n()}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div id="test-container"></div>\`,
  async play() {
    const {
      result,
      unmount
    } = await mount();
    result.current.tabnav.onActivate(clickTab('overview'));
    await waitUntil(() => result.current.activeTab === 'overview');
    expect(localStorage.getItem(STORED)).toBe('overview');
    localStorage.removeItem(STORED);
    unmount();
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div id="test-container"></div>\`,
  async play() {
    const {
      result,
      unmount
    } = await mount();
    result.current.tabnav.onActivate(clickTab('overview'));
    result.current.tabnav.onActivate(clickTab('queue'));
    await waitUntil(() => result.current.activeTab === 'queue');
    expect(localStorage.getItem(STORED)).toBe('overview');
    localStorage.removeItem(STORED);
    unmount();
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div id="test-container"></div>\`,
  async play() {
    const {
      result,
      unmount
    } = await mount();
    result.current.tabnav.onActivate(clickTab('overview'));
    await waitUntil(() => result.current.activeTab === 'overview');
    result.current.onItemClick(openRecord());
    await waitUntil(() => result.current.activeTab !== 'overview');

    // the record opened in another tab, but the picked one is still stored
    expect(localStorage.getItem(STORED)).toBe('overview');
    localStorage.removeItem(STORED);
    unmount();
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div id="test-container"></div>\`,
  async play() {
    localStorage.setItem(STORED, 'overview');
    location.hash = '';
    const {
      result,
      nextUpdate,
      unmount
    } = await renderHook(() => useQueue<{
      id: string;
    }>({
      tabPersistKey: KEY,
      fallback: 'split',
      tabHashParam: 'view-pref-tab'
    }));
    result.current.setItems(items);
    await nextUpdate();
    expect(result.current.activeTab).toBe('overview');
    localStorage.removeItem(STORED);
    unmount();
  }
}`,...Q.parameters?.docs?.source}}},$=[`ATabClickIsRemembered`,`TheQueueTabIsNot`,`OpeningARecordIsNot`,`AStoredTabIsWhereItOpens`]}))();export{Q as AStoredTabIsWhereItOpens,Y as ATabClickIsRemembered,Z as OpeningARecordIsNot,X as TheQueueTabIsNot,$ as __namedExportsOrder,U as default};