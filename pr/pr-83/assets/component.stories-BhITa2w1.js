import{t as e}from"./chunk-BvrOYcoh.js";import{a as t,o as n,r,t as i}from"./lit-html-B0z-6tlh.js";import{i as a,r as o}from"./iframe-uecfwfQN.js";import{_ as s,a as c,d as l,g as u,h as d,i as f,m as p,n as m,r as ee,s as h,t as g,u as te}from"./haunted-CpopsvhT.js";import{_ as ne,a as _,c as v,d as re,f as ie,g as ae,h as oe,i as se,l as ce,m as le,o as ue,p as de,s as fe,t as pe,u as me,v as he}from"./render-BsWlOo0v.js";var y,b,x=e((()=>{y=e=>t=>{let n=t.match(e);return n&&{result:n,url:new URL(t,document.location.origin)}},b=(e,t)=>{for(let n of e){let e=n.rule,r=typeof e==`function`?e(t):y(e)(t);if(r)return{...n,route:n,match:r,url:t}}}})),ge=e((()=>{g()})),S,C,w,T,E=e((()=>{g(),x(),S=()=>window.location.href.replace(window.location.origin,``),C=()=>{let[e,t]=l(S);return d(()=>{let e=()=>t(S);return window.addEventListener(`popstate`,e),()=>window.removeEventListener(`popstate`,e)},[t]),e},w=e=>{let t=C();return p(()=>b(e,t),[e,t])},T=(e,t=null,{notify:n=!0,replace:r=!0}={})=>{(r?history.replaceState:history.pushState).call(history,t,``,e),n&&queueMicrotask(()=>window.dispatchEvent(new CustomEvent(`popstate`,{bubbles:!1})))}})),D,O=e((()=>{g(),E(),D=e=>{let t=w(e);return{route:t,result:p(()=>{if(t){let{handle:e,...n}=t;return e(n)}},[t])}}})),k,A,_e=e((()=>{k=class{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}},A=class{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(e=>this.Z=e)}resume(){this.Z?.(),this.Y=this.Z=void 0}}})),j,M,N,P,ve=e((()=>{n(),o(),f(),_e(),h(),j=e=>!a(e)&&typeof e.then==`function`,M=1073741823,N=class extends ee{constructor(){super(...arguments),this._$Cwt=M,this._$Cbt=[],this._$CK=new k(this),this._$CX=new A}render(...e){return e.find(e=>!j(e))??r}update(e,t){let n=this._$Cbt,i=n.length;this._$Cbt=t;let a=this._$CK,o=this._$CX;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cwt);e++){let r=t[e];if(!j(r))return this._$Cwt=e,r;e<i&&r===n[e]||(this._$Cwt=M,i=0,Promise.resolve(r).then(async e=>{for(;o.get();)await o.get();let t=a.deref();if(t!==void 0){let n=t._$Cbt.indexOf(r);n>-1&&n<t._$Cwt&&(t._$Cwt=n,t.setValue(e))}}))}return r}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}},P=c(N)})),F,I,ye=e((()=>{g(),F=(e,t,n)=>e.dispatchEvent(new CustomEvent(t,{bubbles:!1,cancelable:!1,composed:!0,...n})),I=(e,t,n)=>{d(()=>{if(!n){F(e,`route-not-found`);return}F(e,`route-loading`,{detail:t}),Promise.resolve(n).then(()=>F(e,`route-loaded`,{detail:t})).catch(n=>F(e,`route-error`,{detail:{route:t,error:n}}))},[n])}})),L,be=e((()=>{n(),ne(),ve(),g(),O(),ye(),L=e=>{let t=e.routes,{route:n,result:r}=D(t);return I(e,n,r),ae([r],()=>P(Promise.resolve(r).catch(()=>i),i))},customElements.define(`cosmoz-router`,m(L))})),xe=e((()=>{x(),ge(),E(),O(),be()})),R,z,B,V,Se=e((()=>{g(),oe(),re(),xe(),R=e=>{let t=te(void 0);return d(()=>void(t.current=e),[e]),t.current},z=(e,t,n,r)=>e.find(e=>n(e)===n(t))??e[r]??e[0],B=(e,t,n)=>e.find(e=>n(e)===t)??e[0],V=(e,{id:t=le,hashParam:n,maintainSelection:r})=>{let[i,a]=l(()=>e[0]),[o]=de(n),s=p(()=>e.indexOf(i),[e,i]),c=R(s),{prev:u,next:f}=p(()=>{let t=e.length-1;return{...s>0&&{prev:()=>a(e[Math.max(0,Math.min(t,s-1))])},...s<t&&{next:()=>a(e[Math.max(0,Math.min(t,s+1))])}}},[e,s]);return d(()=>{!i||!n||T(ie(n,t(i)),null,{notify:!1})},[i]),d(()=>{e.length!==0&&a(n=>!n&&o!=null?B(e,o,t):e.indexOf(n)>=0?n:!n||!r?e[0]:z(e,n,t,c))},[e,o]),{forward:s>c,index:s,item:i,items:e,setItem:a,prev:u,next:f}}})),Ce=e((()=>{g(),s(class extends u{update(){return this.state.host}})})),we=e((()=>{g()})),H,Te=e((()=>{g(),Ce(),we(),H=()=>{let[e,t]=l(),[n,r]=l([]),[i,a]=l([]);return{totalAvailable:e,setTotalAvailable:t,items:n,setItems:r,selected:i,setSelected:a}}})),U,W,G,Ee=e((()=>{n(),U=t` <svg
	width="18"
	height="14"
	viewBox="0 0 18 14"
	fill="none"
	stroke="currentColor"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		d="M1 2C1 1.44772 1.44772 1 2 1H16C16.5523 1 17 1.44772 17 2V4.57143C17 5.12371 16.5523 5.57143 16 5.57143H2C1.44772 5.57143 1 5.12371 1 4.57143V2Z"
		stroke-width="1.5"
	/>
	<line x1="1" y1="9.39288" x2="17" y2="9.39288" stroke-width="1.5" />
	<line x1="1" y1="12.8214" x2="17" y2="12.8214" stroke-width="1.5" />
</svg>`,W=t`
	<svg
		width="22"
		height="16"
		viewBox="0 0 22 16"
		fill="none"
		stroke="currentColor"
		xmlns="http://www.w3.org/2000/svg"
	>
		<rect x="5.44409" y="1" width="11.1111" height="14" stroke-width="1.5" />
		<path d="M18.7776 3.3335H20.9998V12.6668H18.7776" stroke-width="1.5" />
		<path
			d="M3.22217 12.6665L0.999946 12.6665L0.999947 3.33317L3.22217 3.33317"
			stroke-width="1.5"
		/>
	</svg>
`,G=t`
	<svg
		width="19"
		height="14"
		viewBox="0 0 19 14"
		fill="none"
		stroke="currentColor"
		xmlns="http://www.w3.org/2000/svg"
	>
		<rect x="10" y="1" width="8" height="12" stroke-width="1.5" />
		<line
			x1="7"
			y1="12.1787"
			x2="4.15643e-07"
			y2="12.1787"
			stroke-width="1.5"
		/>
		<line x1="7" y1="8.75" x2="4.15643e-07" y2="8.75" stroke-width="1.5" />
		<line
			x1="7"
			y1="5.17871"
			x2="4.15643e-07"
			y2="5.17871"
			stroke-width="1.5"
		/>
		<line x1="7" y1="1.75" x2="4.15643e-07" y2="1.75" stroke-width="1.5" />
	</svg>
`})),K,De=e((()=>{ce(),g(),fe(),Ee(),K=({items:e,hashParam:t,mobile:n,fallback:r,onActivate:i})=>{let a=me(p(()=>[{name:`overview`,title:v(`List`),disabled:!1,content:U},{name:`split`,disabled:n||!(e.length>0),title:v(`Split`),content:G},{name:`queue`,disabled:!(e.length>0),title:v(`Queue`),content:W}].map(e=>e.name===r?{...e,fallback:!0}:e),[e.length,n,r]),{hashParam:t,onActivate:i}),o=p(()=>a,Object.values(a));return{activeTab:o.active?.name,tabnav:o}}})),q,J,Y,X,Z,Q,$;e((()=>{he(),g(),n(),pe(),ue(),Se(),Te(),De(),q={title:`Components/Queue`,component:`cosmoz-queue`},J=[{id:`1`,name:`Task Alpha`,description:`Complete the project setup`,status:`active`},{id:`2`,name:`Task Beta`,description:`Review code changes`,status:`pending`},{id:`3`,name:`Task Gamma`,description:`Write documentation`,status:`active`},{id:`4`,name:`Task Delta`,description:`Run tests`,status:`completed`},{id:`5`,name:`Task Epsilon`,description:`Deploy to staging`,status:`pending`}],Y=()=>{let{items:e,setItems:n,totalAvailable:r,setTotalAvailable:i}=H();e.length===0&&(n(J),i(J.length));let{activeTab:a,tabnav:o}=K({items:e.length>0?e:J,fallback:`overview`}),s=V(e.length>0?e:J,{id:e=>e.id,hashParam:void 0}),c=e=>{s.setItem(e),a===`overview`&&o.activate(`queue`)};return t`
        <style>
            ${_}
        </style>
        <div style="height: 100%; display: flex; flex-direction: column;">
            <!-- Header with tabs -->
            <div class="tabn">
                <div class="tabn-heading">Demo Queue</div>
                ${o.tabs.map(e=>t`
                        <button
                            class="tabn-tab"
                            ?active=${o.active?.name===e.name}
                            ?disabled=${e.disabled}
                            @click=${()=>!e.disabled&&o.activate(e.name)}
                        >
                            ${e.title}
                        </button>
                    `)}
                ${se({index:s.index,items:e.length>0?e:J,totalAvailable:r??J.length,nav:s})}
            </div>

            <!-- Content area -->
            <cosmoz-resizable-view data-active=${a} persist="demo-queue">
                <!-- List view -->
                <div id="list" slot="previous" style="padding: 16px;">
                    <h3 style="margin-top: 0;">Items</h3>
                    ${(e.length>0?e:J).map(e=>t`
                            <div
                                style="
                                    padding: 12px;
                                    margin-bottom: 8px;
                                    background: ${s.item?.id===e.id?`#e3f2fd`:`#f5f5f5`};
                                    border-radius: 4px;
                                    cursor: pointer;
                                    border-left: 3px solid ${e.status===`active`?`#4caf50`:e.status===`completed`?`#2196f3`:`#ff9800`};
                                "
                                @click=${()=>c(e)}
                            >
                                <strong>${e.name}</strong>
                                <div style="font-size: 0.9em; color: #666;">
                                    ${e.description}
                                </div>
                                <span
                                    style="
                                    display: inline-block;
                                    margin-top: 4px;
                                    padding: 2px 8px;
                                    border-radius: 12px;
                                    font-size: 0.75em;
                                    background: ${e.status===`active`?`#e8f5e9`:e.status===`completed`?`#e3f2fd`:`#fff3e0`};
                                    color: ${e.status===`active`?`#388e3c`:e.status===`completed`?`#1976d2`:`#f57c00`};
                                "
                                    >${e.status}</span
                                >
                            </div>
                        `)}
                </div>

                <!-- Detail view -->
                <div id="queue" slot="next" style="padding: 16px;">
                    ${s.item?t`
                                <div
                                    style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;"
                                >
                                    <h2 style="margin: 0;">${s.item.name}</h2>
                                    <div>
                                        <button
                                            style="padding: 8px 16px; margin-right: 8px; cursor: pointer;"
                                            ?disabled=${!s.prev}
                                            @click=${s.prev}
                                        >
                                            ← Previous
                                        </button>
                                        <button
                                            style="padding: 8px 16px; cursor: pointer;"
                                            ?disabled=${!s.next}
                                            @click=${s.next}
                                        >
                                            Next →
                                        </button>
                                    </div>
                                </div>
                                <div
                                    style="background: #f5f5f5; padding: 16px; border-radius: 8px;"
                                >
                                    <p><strong>ID:</strong> ${s.item.id}</p>
                                    <p><strong>Description:</strong> ${s.item.description}</p>
                                    <p><strong>Status:</strong> ${s.item.status}</p>
                                </div>
                            `:t`
                                <div style="text-align: center; padding: 40px; color: #666;">
                                    <p>Select an item from the list to view details</p>
                                </div>
                            `}
                </div>
            </cosmoz-resizable-view>
        </div>
    `},X=m(Y,{observedAttributes:[],useShadowDOM:!0,styleSheets:[_]}),customElements.get(`cosmoz-queue-demo`)||customElements.define(`cosmoz-queue-demo`,X),Z=()=>t`
    <div
        style="height: 600px; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;"
    >
        <cosmoz-queue-demo></cosmoz-queue-demo>
    </div>
`,Q=()=>t`
    <div style="padding: 20px; max-width: 800px; font-family: sans-serif;">
        <h1>Cosmoz Queue</h1>
        <p>
            A reusable queue component for master-detail views with list, split, and
            queue modes.
        </p>

        <h2>Features</h2>
        <ul>
            <li>
                <strong>List Mode (Overview)</strong>: Traditional list view showing all
                items
            </li>
            <li>
                <strong>Split Mode</strong>: Side-by-side list and detail view with
                resizable panels
            </li>
            <li>
                <strong>Queue Mode</strong>: Full-screen detail view with prev/next
                navigation
            </li>
        </ul>

        <h2>Available Hooks</h2>
        <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
            <thead>
                <tr style="background: #f5f5f5;">
                    <th
                        style="padding: 8px; text-align: left; border: 1px solid #e0e0e0;"
                    >
                        Hook
                    </th>
                    <th
                        style="padding: 8px; text-align: left; border: 1px solid #e0e0e0;"
                    >
                        Description
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 8px; border: 1px solid #e0e0e0;">
                        <code>useQueue</code>
                    </td>
                    <td style="padding: 8px; border: 1px solid #e0e0e0;">
                        Main hook combining all queue functionality
                    </td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #e0e0e0;">
                        <code>useListState</code>
                    </td>
                    <td style="padding: 8px; border: 1px solid #e0e0e0;">
                        Manages items, selection, and total count
                    </td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #e0e0e0;">
                        <code>useQueueTabs</code>
                    </td>
                    <td style="padding: 8px; border: 1px solid #e0e0e0;">
                        Tab state management (list/split/queue modes)
                    </td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #e0e0e0;">
                        <code>useDataNav</code>
                    </td>
                    <td style="padding: 8px; border: 1px solid #e0e0e0;">
                        Prev/next navigation through items
                    </td>
                </tr>
            </tbody>
        </table>

        <h2>Basic Usage</h2>
        <pre
            style="background: #f5f5f5; padding: 16px; border-radius: 4px; overflow-x: auto;"
        ><code>import { useQueue } from '@neovici/cosmoz-queue';

const MyQueueComponent = () => {
  const queueProps = useQueue({
    id: (item) => item.id,
    fallback: 'overview',
  });

  return html\`...\`;
};</code></pre>
    </div>
`,Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => html\`
    <div
        style="height: 600px; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;"
    >
        <cosmoz-queue-demo></cosmoz-queue-demo>
    </div>
\``,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => html\`
    <div style="padding: 20px; max-width: 800px; font-family: sans-serif;">
        <h1>Cosmoz Queue</h1>
        <p>
            A reusable queue component for master-detail views with list, split, and
            queue modes.
        </p>

        <h2>Features</h2>
        <ul>
            <li>
                <strong>List Mode (Overview)</strong>: Traditional list view showing all
                items
            </li>
            <li>
                <strong>Split Mode</strong>: Side-by-side list and detail view with
                resizable panels
            </li>
            <li>
                <strong>Queue Mode</strong>: Full-screen detail view with prev/next
                navigation
            </li>
        </ul>

        <h2>Available Hooks</h2>
        <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
            <thead>
                <tr style="background: #f5f5f5;">
                    <th
                        style="padding: 8px; text-align: left; border: 1px solid #e0e0e0;"
                    >
                        Hook
                    </th>
                    <th
                        style="padding: 8px; text-align: left; border: 1px solid #e0e0e0;"
                    >
                        Description
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 8px; border: 1px solid #e0e0e0;">
                        <code>useQueue</code>
                    </td>
                    <td style="padding: 8px; border: 1px solid #e0e0e0;">
                        Main hook combining all queue functionality
                    </td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #e0e0e0;">
                        <code>useListState</code>
                    </td>
                    <td style="padding: 8px; border: 1px solid #e0e0e0;">
                        Manages items, selection, and total count
                    </td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #e0e0e0;">
                        <code>useQueueTabs</code>
                    </td>
                    <td style="padding: 8px; border: 1px solid #e0e0e0;">
                        Tab state management (list/split/queue modes)
                    </td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #e0e0e0;">
                        <code>useDataNav</code>
                    </td>
                    <td style="padding: 8px; border: 1px solid #e0e0e0;">
                        Prev/next navigation through items
                    </td>
                </tr>
            </tbody>
        </table>

        <h2>Basic Usage</h2>
        <pre
            style="background: #f5f5f5; padding: 16px; border-radius: 4px; overflow-x: auto;"
        ><code>import { useQueue } from '@neovici/cosmoz-queue';

const MyQueueComponent = () => {
  const queueProps = useQueue({
    id: (item) => item.id,
    fallback: 'overview',
  });

  return html\\\`...\\\`;
};</code></pre>
    </div>
\``,...Q.parameters?.docs?.source}}},$=[`Demo`,`Documentation`]}))();export{Z as Demo,Q as Documentation,$ as __namedExportsOrder,q as default};