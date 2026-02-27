import{u as c,a as m,b as x,c as q}from"./lit-haunted-gA9wOeRP.js";import{b as p}from"./iframe-DdbOukB6.js";import{b as y,r as M}from"./render-Bo5zuqzw.js";import{u as f,i as z,g as b}from"./cosmoz-i18next-6kG1MCjj.js";import{u as Q}from"./use-callback-DLndjOxO.js";import"./preload-helper-PPVm8Dsz.js";import"./style-map-Dek4y-pN.js";const w=()=>new URL(location.hash.replace(/^#!?/iu,"").replace("%23","#"),location.origin),T=e=>e?()=>new URLSearchParams(w().hash.replace("#","")).get(e):void 0,D=(e,t)=>{if(!e)return;const i=w(),o=new URLSearchParams(i.hash.replace("#",""));return t==null?o.delete(e):o.set(e,t),"#!"+Object.assign(i,{hash:o}).href.replace(location.origin,"")},k=e=>{const t=c(()=>T(e),[e]),[i,o]=m(t),r=f(i);x(()=>{r.current=i},[i]),x(()=>{if(t==null)return;const d=()=>{const s=t();r.current!==s&&o(s)};return d(),window.addEventListener("popstate",d),window.addEventListener("hashchange",d),()=>{window.removeEventListener("popstate",d),window.removeEventListener("hashchange",d)}},[t]);const a=c(()=>e?d=>{o(d),history.pushState({},"",D(e,d))}:o,[e]);return[i,a]},$=e=>!e.hidden&&!e.disabled,L=e=>e.slice().sort((t,i)=>(i.fallback>>0)-(t.fallback>>0)).find($),C=(e,t)=>{const i=t&&e.find(o=>o.name===t);return i&&$(i)?i:L(e)},A=(e,{hashParam:t,onActivate:i})=>{const[o,r]=k(t),a=f([]),d=c(()=>C(e,o),[e,o]),s=c(()=>{const l=d.name;return a.current=[...a.current.filter(n=>n!==l),l]},[d]);return{tabs:e,active:d,activated:s,activate:r,onActivate:Q(l=>{if(l.button!==0||l.metaKey||l.ctrlKey)return;const n=l.currentTarget?.getAttribute("name");n&&(i?.(n),r(n))},[r,i])}},H=e=>{const t=f(void 0);return x(()=>{t.current=e},[e]),t.current},E=(e,t,i,o)=>e.find(r=>i(r)===i(t))??e[o]??e[0],I=(e,t,i)=>e.find(o=>i(o)===t)??e[0],O=(e,{id:t=z,hashParam:i,maintainSelection:o})=>{const[r,a]=m(()=>e[0]),[d]=k(i),s=c(()=>e.indexOf(r),[e,r]),l=H(s),{prev:n,next:S}=c(()=>{const u=e.length-1;return{...s>0&&{prev:()=>a(e[Math.max(0,Math.min(u,s-1))])},...s<u&&{next:()=>a(e[Math.max(0,Math.min(u,s+1))])}}},[e,s]);return x(()=>{},[r]),x(()=>{e.length!==0&&a(u=>!u&&d!=null?I(e,d,t):e.indexOf(u)>=0?u:!u||!o?e[0]:E(e,u,t,l))},[e,d]),{forward:s>l,index:s,item:r,items:e,setItem:a,prev:n,next:S}},B=()=>{const[e,t]=m(),[i,o]=m([]),[r,a]=m([]);return{totalAvailable:e,setTotalAvailable:t,items:i,setItems:o,selected:r,setSelected:a}},j=p` <svg
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
</svg>`,P=p`
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
`,R=p`
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
`,U=({items:e,hashParam:t,mobile:i,fallback:o,onActivate:r})=>{const a=c(()=>[{name:"overview",title:b("List"),disabled:!1,content:j},{name:"split",disabled:i||!(e.length>0),title:b("Split"),content:R},{name:"queue",disabled:!(e.length>0),title:b("Queue"),content:P}].map(n=>n.name===o?{...n,fallback:!0}:n),[e.length,i,o]),d=A(a,{hashParam:t,onActivate:r}),s=c(()=>d,Object.values(d));return{activeTab:s.active?.name,tabnav:s}},X={title:"Components/Queue",component:"cosmoz-queue"},g=[{id:"1",name:"Task Alpha",description:"Complete the project setup",status:"active"},{id:"2",name:"Task Beta",description:"Review code changes",status:"pending"},{id:"3",name:"Task Gamma",description:"Write documentation",status:"active"},{id:"4",name:"Task Delta",description:"Run tests",status:"completed"},{id:"5",name:"Task Epsilon",description:"Deploy to staging",status:"pending"}],V=()=>{const e=B(),{items:t,setItems:i,totalAvailable:o,setTotalAvailable:r}=e;t.length===0&&(i(g),r(g.length));const{activeTab:a,tabnav:d}=U({items:t.length>0?t:g,fallback:"overview"}),s=O(t.length>0?t:g,{id:n=>n.id,hashParam:void 0}),l=n=>{s.setItem(n),a==="overview"&&d.activate("queue")};return p`
        <style>
            ${y}
        </style>
        <div style="height: 100%; display: flex; flex-direction: column;">
            <!-- Header with tabs -->
            <div class="tabn">
                <div class="tabn-heading">Demo Queue</div>
                ${d.tabs.map(n=>p`
                        <button
                            class="tabn-tab"
                            ?active=${d.active?.name===n.name}
                            ?disabled=${n.disabled}
                            @click=${()=>!n.disabled&&d.activate(n.name)}
                        >
                            ${n.title}
                        </button>
                    `)}
                ${M({index:s.index,items:t.length>0?t:g,totalAvailable:o??g.length,nav:s})}
            </div>

            <!-- Content area -->
            <div class="split" data-active=${a}>
                <!-- List view -->
                <div id="list" style="padding: 16px;">
                    <h3 style="margin-top: 0;">Items</h3>
                    ${(t.length>0?t:g).map(n=>p`
                            <div
                                style="
                                    padding: 12px;
                                    margin-bottom: 8px;
                                    background: ${s.item?.id===n.id?"#e3f2fd":"#f5f5f5"};
                                    border-radius: 4px;
                                    cursor: pointer;
                                    border-left: 3px solid ${n.status==="active"?"#4caf50":n.status==="completed"?"#2196f3":"#ff9800"};
                                "
                                @click=${()=>l(n)}
                            >
                                <strong>${n.name}</strong>
                                <div style="font-size: 0.9em; color: #666;">
                                    ${n.description}
                                </div>
                                <span
                                    style="
                                    display: inline-block;
                                    margin-top: 4px;
                                    padding: 2px 8px;
                                    border-radius: 12px;
                                    font-size: 0.75em;
                                    background: ${n.status==="active"?"#e8f5e9":n.status==="completed"?"#e3f2fd":"#fff3e0"};
                                    color: ${n.status==="active"?"#388e3c":n.status==="completed"?"#1976d2":"#f57c00"};
                                "
                                    >${n.status}</span
                                >
                            </div>
                        `)}
                </div>

                <!-- Detail view -->
                <div id="queue" style="padding: 16px;">
                    ${s.item?p`
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
                            `:p`
                                <div style="text-align: center; padding: 40px; color: #666;">
                                    <p>Select an item from the list to view details</p>
                                </div>
                            `}
                </div>
            </div>
        </div>
    `},F=q(V,{observedAttributes:[],useShadowDOM:!0,styleSheets:[y]});customElements.get("cosmoz-queue-demo")||customElements.define("cosmoz-queue-demo",F);const h=()=>p`
    <div
        style="height: 600px; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;"
    >
        <cosmoz-queue-demo></cosmoz-queue-demo>
    </div>
`,v=()=>p`
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
                        <code>useSplit</code>
                    </td>
                    <td style="padding: 8px; border: 1px solid #e0e0e0;">
                        Split.js integration for resizable panels
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
`;h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => html\`
    <div
        style="height: 600px; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;"
    >
        <cosmoz-queue-demo></cosmoz-queue-demo>
    </div>
\``,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => html\`
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
                        <code>useSplit</code>
                    </td>
                    <td style="padding: 8px; border: 1px solid #e0e0e0;">
                        Split.js integration for resizable panels
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
\``,...v.parameters?.docs?.source}}};const Y=["Demo","Documentation"];export{h as Demo,v as Documentation,Y as __namedExportsOrder,X as default};
