import{t as e}from"./chunk-BvrOYcoh.js";import{a as t,o as n}from"./lit-html-BZ3vufxv.js";import{n as r,t as i}from"./haunted-Cuc4b_8X.js";import{a,i as o,o as s,s as c,t as l}from"./render-DaSxKQki.js";import{i as u,l as d,n as f,r as p,t as m,u as h}from"./use-tabs-Bs54-PYD.js";var g,_,v,y,b,x,S;e((()=>{c(),i(),n(),l(),s(),d(),p(),m(),g={title:`Components/Queue`,component:`cosmoz-queue`},_=[{id:`1`,name:`Task Alpha`,description:`Complete the project setup`,status:`active`},{id:`2`,name:`Task Beta`,description:`Review code changes`,status:`pending`},{id:`3`,name:`Task Gamma`,description:`Write documentation`,status:`active`},{id:`4`,name:`Task Delta`,description:`Run tests`,status:`completed`},{id:`5`,name:`Task Epsilon`,description:`Deploy to staging`,status:`pending`}],v=()=>{let{items:e,setItems:n,totalAvailable:r,setTotalAvailable:i}=u();e.length===0&&(n(_),i(_.length));let{activeTab:s,tabnav:c}=f({items:e.length>0?e:_,fallback:`overview`}),l=h(e.length>0?e:_,{id:e=>e.id,hashParam:void 0}),d=e=>{l.setItem(e),s===`overview`&&c.activate(`queue`)};return t`
        <style>
            ${a}
        </style>
        <div style="height: 100%; display: flex; flex-direction: column;">
            <!-- Header with tabs -->
            <div class="tabn">
                <div class="tabn-heading">Demo Queue</div>
                ${c.tabs.map(e=>t`
                        <button
                            class="tabn-tab"
                            ?active=${c.active?.name===e.name}
                            ?disabled=${e.disabled}
                            @click=${()=>!e.disabled&&c.activate(e.name)}
                        >
                            ${e.title}
                        </button>
                    `)}
                ${o({index:l.index,items:e.length>0?e:_,totalAvailable:r??_.length,nav:l})}
            </div>

            <!-- Content area -->
            <cosmoz-resizable-view data-active=${s} persist="demo-queue">
                <!-- List view -->
                <div id="list" slot="previous" style="padding: 16px;">
                    <h3 style="margin-top: 0;">Items</h3>
                    ${(e.length>0?e:_).map(e=>t`
                            <div
                                style="
                                    padding: 12px;
                                    margin-bottom: 8px;
                                    background: ${l.item?.id===e.id?`#e3f2fd`:`#f5f5f5`};
                                    border-radius: 4px;
                                    cursor: pointer;
                                    border-left: 3px solid ${e.status===`active`?`#4caf50`:e.status===`completed`?`#2196f3`:`#ff9800`};
                                "
                                @click=${()=>d(e)}
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
                    ${l.item?t`
                                <div
                                    style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;"
                                >
                                    <h2 style="margin: 0;">${l.item.name}</h2>
                                    <div>
                                        <button
                                            style="padding: 8px 16px; margin-right: 8px; cursor: pointer;"
                                            ?disabled=${!l.prev}
                                            @click=${l.prev}
                                        >
                                            ← Previous
                                        </button>
                                        <button
                                            style="padding: 8px 16px; cursor: pointer;"
                                            ?disabled=${!l.next}
                                            @click=${l.next}
                                        >
                                            Next →
                                        </button>
                                    </div>
                                </div>
                                <div
                                    style="background: #f5f5f5; padding: 16px; border-radius: 8px;"
                                >
                                    <p><strong>ID:</strong> ${l.item.id}</p>
                                    <p><strong>Description:</strong> ${l.item.description}</p>
                                    <p><strong>Status:</strong> ${l.item.status}</p>
                                </div>
                            `:t`
                                <div style="text-align: center; padding: 40px; color: #666;">
                                    <p>Select an item from the list to view details</p>
                                </div>
                            `}
                </div>
            </cosmoz-resizable-view>
        </div>
    `},y=r(v,{observedAttributes:[],useShadowDOM:!0,styleSheets:[a]}),customElements.get(`cosmoz-queue-demo`)||customElements.define(`cosmoz-queue-demo`,y),b=()=>t`
    <div
        style="height: 600px; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;"
    >
        <cosmoz-queue-demo></cosmoz-queue-demo>
    </div>
`,x=()=>t`
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
`,b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => html\`
    <div
        style="height: 600px; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;"
    >
        <cosmoz-queue-demo></cosmoz-queue-demo>
    </div>
\``,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => html\`
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
\``,...x.parameters?.docs?.source}}},S=[`Demo`,`Documentation`]}))();export{b as Demo,x as Documentation,S as __namedExportsOrder,g as default};