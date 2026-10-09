import{t as e}from"./chunk-BvrOYcoh.js";import{a as t,o as n}from"./lit-html-BZ3vufxv.js";import{d as r,h as i,m as a,p as o,t as s}from"./haunted-s59X5Gz4.js";import{l as c}from"./i18next-DQHxO_PA.js";import{a as l,c as u,i as d,l as f,n as ee,o as p,r as m,s as h,t as g,u as _}from"./use-tabs-CzuS54p5.js";import{n as v,r as y,t as b}from"./dist-DFkxv5OT.js";function te(e){return e==null?[]:Array.isArray(e)?e:typeof e==`string`?[e]:ne(e)?Array.from(e):[e]}var ne,re=e((()=>{c(),ne=e=>typeof e==`object`&&!!e&&Symbol.iterator in e})),x,S,ie=e((()=>{x=Symbol(`memo`),S=e=>{let t=x,n;return function(r){if(t===r)return n;let i=e(r);return n=i,t=r,i}}})),C,w,T,ae,E,D,O,oe=e((()=>{C=class extends Error{response;data;constructor(e,t,n){super(e),this.name=`RequestError`,this.response=t,this.data=n}},w=e=>{if(e&&typeof e==`object`){let t=e,n=t.message??t.Message??t.friendlyMessage??t.error?.httpMessage??t.errors?.map(e=>e.message).join(` `);if(n)return n}return`Unknown error`},T={},E=(e,t)=>window.fetch(e,{...T,mode:`cors`,credentials:`include`,...t,headers:{...T?.headers,...ae?.(),...t?.headers}}),D=e=>{if(e.status===204)return``;let t=e.json();return e.ok?t.catch(()=>``):t.then(t=>Promise.reject(new C(w(t),e,t)),t=>e.status===404?Promise.reject(new C(`URL not found: `+e.url,e)):Promise.reject(t))},O=(e,{fetch:t=E,handleJSON:n=D,...r}={})=>t(e,r).then(n)})),k,A,se=e((()=>{h(),s(),k=480,A=(e=k)=>{let t=u(),[n,a]=r(!1);return i(()=>{let n=new ResizeObserver(([t])=>{a(t.contentRect.width<=e)});return n.observe(t),()=>n.disconnect()},[t,e]),i(()=>{t.toggleAttribute(`data-mobile`,n)},[t,n]),n}})),j,ce=e((()=>{j=(e=document)=>{let t=e.activeElement;return t?t.shadowRoot?j(t.shadowRoot):t:null}})),M,N,P,F,le=e((()=>{h(),l(),s(),ce(),M=(e,t,n)=>[...[`overview`,`split`].includes(e)?t:[],...[`queue`,`split`].includes(e)?n:[]],N=e=>{let t=e.shadowRoot,n=t?.querySelector(`.button-nav`);if(!t||!n)return!1;let r=n.getBoundingClientRect();return t.elementFromPoint(r.x+r.width/2,r.y+r.height/2)?.closest(`.button-nav`)!==n},P=e=>{let t=j();return!t?.isContentEditable&&!t?.matches(`input, textarea`)&&!N(e)},F=({next:e,prev:t,activeTab:n})=>{let r=p({next:e,prev:t,activeTab:n}),a=u();i(()=>{let e=e=>{if(e.defaultPrevented)return;let{key:t}=e,{next:n,prev:i,activeTab:o}=r;switch(!0){case n&&M(o,[`ArrowDown`,`Down`],[`ArrowRight`,`Right`]).includes(t)&&P(a):return e.preventDefault(),n();case i&&M(o,[`ArrowUp`,`Up`],[`ArrowLeft`,`Left`]).includes(t)&&P(a):return e.preventDefault(),i()}};return document.addEventListener(`keydown`,e,!0),()=>document.removeEventListener(`keydown`,e,!0)},[])}})),I,ue=e((()=>{s(),l(),h(),I=({ensue:e})=>{let t=u(),n=p({ensue:e});i(()=>{let e=e=>{let{id:t,remove:r}=e.detail;e.preventDefault(),n?.ensue(t),r()};return t.addEventListener(`list-item-remove`,e),()=>t.removeEventListener(`list-item-remove`,e)},[])}})),L,R,de=e((()=>{L=(e,t)=>(t?.length>0?t:e)??[],R=e=>{if(!e)return[];let t=e[0]?.items;return Array.isArray(t)?e.flatMap(e=>e.items??[]):e}})),z,fe,B,V,H,U,pe=e((()=>{re(),ie(),s(),oe(),se(),f(),le(),m(),g(),ue(),de(),z=`itemRow-active`,fe=(e,t)=>o(n=>e!=null&&t(n)===t(e)?z:void 0,[e,t]),B=e=>e.id,V=({id:e,api:t,items:n,...r})=>{t&&typeof console<`u`&&console.warn&&console.warn(`[cosmoz-queue] DEPRECATED: The \`api\` property is deprecated and will be removed in v2.0.0. Please migrate to the \`details\` property for better control and performance.

Migration guide:
  Before: api: (id, item) => apiUrl('api/items/\${id}')
  After:  details: (item) => fetch(apiUrl('api/items/\${item.id}')).then(res => res.json())

See: https://github.com/Neovici/cosmoz-queue#migration-from-api-to-details`);let i=a(()=>t&&S(n=>O(t(e(n),n))),[e,t]);return{..._(n,{...r,id:e}),id:e,details:i}},H=({id:e=B,api:t,tabHashParam:n,idHashParam:r,fallback:i,onActivate:s,tabPersistKey:c,...l})=>{let{items:u,selected:d}=l,f=A(),p=a(()=>R(u),[u]),m=a(()=>L(p,d),[p,d]),{tabnav:h,activeTab:g}=ee({items:m,hashParam:n,fallback:i,onActivate:s,tabPersistKey:c,mobile:f}),_=V({id:e,api:t,items:m,hashParam:r,maintainSelection:[`queue`,`split`].includes(g)}),{item:v,setItem:y}=_,b=o(t=>{if(e(v)!==t)return;let n=p.indexOf(v);y(p[Math.min(n+1,p.length-1)])},[v,e,p]);return F({activeTab:g,..._}),I({ensue:b,..._}),{...l,tabnav:h,activeTab:g,mobile:f,hideActions:d?.length>0&&g===`split`,index:a(()=>p.indexOf(v),[v,p]),rowPartFn:fe(v,e),onItemClick:o(e=>{let{item:t,index:n,activate:r}=e.detail,i=e.composedPath().find(e=>e instanceof Element&&e.matches?.(`[mini]`)),a=r??(i?[`split`,`queue`]:void 0);if(y(t??p[n]),a){let e=te(a).find(e=>h.tabs.find(t=>t.name===e&&!t.disabled));e&&h.activate(e)}e.preventDefault()},[g,p]),ensue:b,nav:_}},U=e=>H({...e,...d()})})),W,G,K,q,J,Y,X,me,Z,Q,$,he;e((()=>{b(),n(),pe(),{expect:W}=__STORYBOOK_MODULE_TEST__,G={title:`Tests/ViewPreference`},K=`view-pref-test`,q=`pref-${K}`,J=[{id:`a`},{id:`b`}],Y=async()=>{localStorage.removeItem(q),location.hash=``;let e=await v(()=>U({tabPersistKey:K,fallback:`split`,tabHashParam:`view-pref-tab`}));return e.result.current.setItems(J),await e.nextUpdate(),e},X=e=>({button:0,metaKey:!1,ctrlKey:!1,currentTarget:{getAttribute:()=>e}}),me=()=>new CustomEvent(`omnitable-item-click`,{detail:{item:J[0],index:0,activate:[`split`,`queue`]}}),Z={render:()=>t`<div id="test-container"></div>`,async play(){let{result:e,unmount:t}=await Y();e.current.tabnav.onActivate(X(`overview`)),await y(()=>e.current.activeTab===`overview`),W(localStorage.getItem(q)).toBe(`overview`),localStorage.removeItem(q),t()}},Q={render:()=>t`<div id="test-container"></div>`,async play(){let{result:e,unmount:t}=await Y();e.current.tabnav.onActivate(X(`overview`)),await y(()=>e.current.activeTab===`overview`),e.current.onItemClick(me()),await y(()=>e.current.activeTab!==`overview`),W(localStorage.getItem(q)).toBe(`overview`),localStorage.removeItem(q),t()}},$={render:()=>t`<div id="test-container"></div>`,async play(){localStorage.setItem(q,`overview`),location.hash=``;let{result:e,nextUpdate:t,unmount:n}=await v(()=>U({tabPersistKey:K,fallback:`split`,tabHashParam:`view-pref-tab`}));e.current.setItems(J),await t(),W(e.current.activeTab).toBe(`overview`),localStorage.removeItem(q),n()}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},he=[`ATabClickIsRemembered`,`OpeningARecordIsNot`,`AStoredTabIsWhereItOpens`]}))();export{$ as AStoredTabIsWhereItOpens,Z as ATabClickIsRemembered,Q as OpeningARecordIsNot,he as __namedExportsOrder,G as default};