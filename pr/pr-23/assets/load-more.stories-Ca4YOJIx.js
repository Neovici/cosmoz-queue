import{A as b,t as y,b as l,D as w}from"./iframe-CJyEtxgP.js";import{d as g,c as L}from"./lit-haunted-BljuK1Gr.js";import{m as E}from"./until-0HHlxhrd.js";import"./preload-helper-PPVm8Dsz.js";import"./async-directive-BdIA-Mru.js";const M=g`
	@keyframes rotating {
		100% {
			transform: rotate(360deg);
		}
	}

	:host {
		--cosmoz-spinner-width: 20px;
		--cosmoz-spinner-height: 20px;
		display: inline-block;
		vertical-align: middle;
		border-radius: 50%;
		width: var(--cosmoz-spinner-width, 22px);
		height: var(--cosmoz-spinner-height, 22px);
		border: 2px solid rgba(0, 0, 0, 0.1);
		border-top: 2px solid #5f5a92;
		animation: rotating 1.2s infinite cubic-bezier(0.785, 0.135, 0.15, 0.86);
		box-sizing: border-box;
		margin: 0 4px;
		flex: none !important;
	}
`,B=()=>b,T=L(B,{styleSheets:[M]});customElements.define("cosmoz-spinner",T);const A=g`
	.more {
		font-family: inherit;
		font-size: 14px;
		font-weight: 500;
		line-height: 40px;
		background: inherit;
		color: var(--cz-text-color);
		border: none;
		cursor: pointer;
	}
	.more:hover {
		color: var(--secondary-text-color);
	}
`,z=(o,t)=>o?l`<cosmoz-spinner></cosmoz-spinner>`:t?E(t.then(()=>b,()=>b),l`<cosmoz-spinner></cosmoz-spinner>`):b,$=({loading:o,data$:t,onMore:i,onAll:n})=>l`
	<span slot="extraContent" class="more-container">
		${z(o,t)}
		<button class="more" ?hidden="${!i}" @click="${i}">
			${y("Load more")}
		</button>
		<button class="more" ?hidden="${!n}" @click="${n}">
			${y("Load all")}
		</button>
	</span>
`,{expect:d,userEvent:x}=__STORYBOOK_MODULE_TEST__,P={title:"Components/LoadMore"},C=(o,t=300)=>{const i=Array.from({length:o},(n,a)=>({id:`item-${a+1}`,name:`Item ${a+1}`}));return async({page:n,pageSize:a})=>{await new Promise(c=>setTimeout(c,t));const e=n*a;return{items:i.slice(e,e+a),total:o}}},h=(o,t)=>{const{totalItems:i,pageSize:n}=t,a=C(i);let e={items:[],page:0,data$:void 0,totalAvailable:1/0};const s=()=>{const c=e.totalAvailable<1/0&&e.totalAvailable>e.items.length,f=c?()=>{e.data$=a({page:e.page,pageSize:n}).then(r=>(e={...e,items:[...e.items,...r.items],page:e.page+1,totalAvailable:r.total,data$:void 0},s(),r.items)),s()}:void 0,S=c?()=>{e.data$=a({page:0,pageSize:e.totalAvailable}).then(r=>(e={...e,items:r.items,totalAvailable:r.total,data$:void 0},s(),r.items)),s()}:void 0;w(l`
                <style>
                    ${A} .demo-container {
                        font-family: sans-serif;
                        padding: 16px;
                        max-width: 400px;
                    }
                    .item-list {
                        border: 1px solid #e0e0e0;
                        border-radius: 4px;
                        margin-bottom: 16px;
                        max-height: 300px;
                        overflow-y: auto;
                    }
                    .item {
                        padding: 8px 12px;
                        border-bottom: 1px solid #f0f0f0;
                    }
                    .item:last-child {
                        border-bottom: none;
                    }
                    .stats {
                        color: #666;
                        font-size: 14px;
                        margin-bottom: 8px;
                    }
                    .buttons {
                        display: flex;
                        gap: 8px;
                    }
                </style>
                <div class="demo-container">
                    <div class="stats" data-testid="stats">
                        Showing ${e.items.length} of ${e.totalAvailable} items
                    </div>
                    <div class="item-list">
                        ${e.items.map(r=>l`<div class="item">${r.name}</div>`)}
                    </div>
                    <div class="buttons">
                        ${$({data$:e.data$,onMore:f,onAll:S})}
                    </div>
                </div>
            `,o)};e.data$=a({page:0,pageSize:n}).then(c=>(e={...e,items:c.items,page:1,totalAvailable:c.total,data$:void 0},s(),c.items)),s()},m={render:()=>l`<div id="demo-container"></div>`,play:async({canvasElement:o})=>{const t=o.querySelector("#demo-container");h(t,{totalItems:100,pageSize:10})}},u={render:()=>l`<div id="demo-container"></div>`,play:async({canvasElement:o})=>{const t=o.querySelector("#demo-container");h(t,{totalItems:100,pageSize:10}),await new Promise(a=>setTimeout(a,500));const i=t.querySelector("button.more:not([hidden])");d(i).not.toBeNull(),d(i.textContent).toContain("Load more"),await x.click(i),await new Promise(a=>setTimeout(a,500));const n=t.querySelector('[data-testid="stats"]');d(n.textContent).toContain("Showing 20 of 100 items")}},p={render:()=>l`<div id="demo-container"></div>`,play:async({canvasElement:o})=>{const t=o.querySelector("#demo-container");h(t,{totalItems:100,pageSize:10}),await new Promise(s=>setTimeout(s,500));const i=t.querySelectorAll("button.more:not([hidden])"),n=Array.from(i).find(s=>s.textContent?.includes("Load all"));d(n).not.toBeNull(),await x.click(n),await new Promise(s=>setTimeout(s,500));const a=t.querySelector('[data-testid="stats"]');d(a.textContent).toContain("Showing 100 of 100 items");const e=t.querySelectorAll("button.more:not([hidden])");d(e.length).toBe(0)}},v={render:()=>l`<div id="demo-container"></div>`,play:async({canvasElement:o})=>{const t=o.querySelector("#demo-container");h(t,{totalItems:5,pageSize:10}),await new Promise(n=>setTimeout(n,500));const i=t.querySelectorAll("button.more:not([hidden])");d(i.length).toBe(0)}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div id="demo-container"></div>\`,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const container = canvasElement.querySelector('#demo-container') as HTMLElement;
    createLoadMoreDemo(container, {
      totalItems: 100,
      pageSize: 10
    });
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div id="demo-container"></div>\`,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const container = canvasElement.querySelector('#demo-container') as HTMLElement;
    createLoadMoreDemo(container, {
      totalItems: 100,
      pageSize: 10
    });

    // Wait for initial load
    await new Promise(resolve => setTimeout(resolve, 500));

    // Find buttons
    const loadMoreButton = container.querySelector('button.more:not([hidden])') as HTMLButtonElement;
    expect(loadMoreButton).not.toBeNull();
    expect(loadMoreButton.textContent).toContain('Load more');

    // Click "Load more"
    await userEvent.click(loadMoreButton);

    // Wait for load to complete
    await new Promise(resolve => setTimeout(resolve, 500));

    // Verify more items loaded
    const stats = container.querySelector('[data-testid="stats"]') as HTMLElement;
    expect(stats.textContent).toContain('Showing 20 of 100 items');
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div id="demo-container"></div>\`,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const container = canvasElement.querySelector('#demo-container') as HTMLElement;
    createLoadMoreDemo(container, {
      totalItems: 100,
      pageSize: 10
    });

    // Wait for initial load
    await new Promise(resolve => setTimeout(resolve, 500));

    // Find Load all button (second .more button)
    const buttons = container.querySelectorAll('button.more:not([hidden])');
    const loadAllButton = Array.from(buttons).find(b => b.textContent?.includes('Load all')) as HTMLButtonElement;
    expect(loadAllButton).not.toBeNull();

    // Click "Load all"
    await userEvent.click(loadAllButton);

    // Wait for load to complete
    await new Promise(resolve => setTimeout(resolve, 500));

    // Verify all items loaded
    const stats = container.querySelector('[data-testid="stats"]') as HTMLElement;
    expect(stats.textContent).toContain('Showing 100 of 100 items');

    // Buttons should be hidden now
    const visibleButtons = container.querySelectorAll('button.more:not([hidden])');
    expect(visibleButtons.length).toBe(0);
  }
}`,...p.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div id="demo-container"></div>\`,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const container = canvasElement.querySelector('#demo-container') as HTMLElement;
    createLoadMoreDemo(container, {
      totalItems: 5,
      pageSize: 10
    });

    // Wait for initial load
    await new Promise(resolve => setTimeout(resolve, 500));

    // Buttons should be hidden when all data is already loaded
    const visibleButtons = container.querySelectorAll('button.more:not([hidden])');
    expect(visibleButtons.length).toBe(0);
  }
}`,...v.parameters?.docs?.source}}};const _=["Default","WithCallbacks","LoadAllTest","AllDataLoaded"];export{v as AllDataLoaded,m as Default,p as LoadAllTest,u as WithCallbacks,_ as __namedExportsOrder,P as default};
