import{A as m,t as g,b as r,D as E}from"./iframe-0U8S8_7f.js";import{d as f,c as M}from"./lit-haunted-rNEjrBtM.js";import{m as x}from"./until-Dmv33ZpH.js";import"./preload-helper-PPVm8Dsz.js";import"./async-directive-cKI5krpX.js";const B=f`
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
`,T=()=>m,A=M(T,{styleSheets:[B]});customElements.define("cosmoz-spinner",A);function y(n,t,a){return n?t(n):a?.(n)}const z=f`
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
`,$=({loading:n,data$:t,onMore:a,onAll:i})=>r`
	<button
		class="more"
		slot="extraContent"
		?hidden="${!a}"
		@click="${a}"
	>
		${y(n,()=>r`<cosmoz-spinner></cosmoz-spinner>`)}
		${y(t,o=>x(o.then(()=>m,()=>m),r`<cosmoz-spinner></cosmoz-spinner>`))}
		<span>${g("Load more")}</span>
	</button>
	<button
		class="more"
		slot="extraContent"
		?hidden="${!i}"
		@click="${i}"
	>
		${y(t,o=>x(o.then(()=>m,()=>m),r`<cosmoz-spinner></cosmoz-spinner>`))}
		<span>${g("Load all")}</span>
	</button>
`,{expect:d,userEvent:S}=__STORYBOOK_MODULE_TEST__,P={title:"Components/LoadMore"},C=(n,t=300)=>{const a=Array.from({length:n},(i,o)=>({id:`item-${o+1}`,name:`Item ${o+1}`}));return async({page:i,pageSize:o})=>{await new Promise(c=>setTimeout(c,t));const e=i*o;return{items:a.slice(e,e+o),total:n}}},h=(n,t)=>{const{totalItems:a,pageSize:i}=t,o=C(a);let e={items:[],page:0,data$:void 0,totalAvailable:1/0};const s=()=>{const c=e.totalAvailable<1/0&&e.totalAvailable>e.items.length,w=c?()=>{e.data$=o({page:e.page,pageSize:i}).then(l=>(e={...e,items:[...e.items,...l.items],page:e.page+1,totalAvailable:l.total,data$:void 0},s(),l.items)),s()}:void 0,L=c?()=>{e.data$=o({page:0,pageSize:e.totalAvailable}).then(l=>(e={...e,items:l.items,totalAvailable:l.total,data$:void 0},s(),l.items)),s()}:void 0;E(r`
                <style>
                    ${z} .demo-container {
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
                        ${e.items.map(l=>r`<div class="item">${l.name}</div>`)}
                    </div>
                    <div class="buttons">
                        ${$({data$:e.data$,onMore:w,onAll:L})}
                    </div>
                </div>
            `,n)};e.data$=o({page:0,pageSize:i}).then(c=>(e={...e,items:c.items,page:1,totalAvailable:c.total,data$:void 0},s(),c.items)),s()},p={render:()=>r`<div id="demo-container"></div>`,play:async({canvasElement:n})=>{const t=n.querySelector("#demo-container");h(t,{totalItems:100,pageSize:10})}},u={render:()=>r`<div id="demo-container"></div>`,play:async({canvasElement:n})=>{const t=n.querySelector("#demo-container");h(t,{totalItems:100,pageSize:10}),await new Promise(o=>setTimeout(o,500));const a=t.querySelector("button.more:not([hidden])");d(a).not.toBeNull(),d(a.textContent).toContain("Load more"),await S.click(a),await new Promise(o=>setTimeout(o,500));const i=t.querySelector('[data-testid="stats"]');d(i.textContent).toContain("Showing 20 of 100 items")}},v={render:()=>r`<div id="demo-container"></div>`,play:async({canvasElement:n})=>{const t=n.querySelector("#demo-container");h(t,{totalItems:100,pageSize:10}),await new Promise(s=>setTimeout(s,500));const a=t.querySelectorAll("button.more:not([hidden])"),i=Array.from(a).find(s=>s.textContent?.includes("Load all"));d(i).not.toBeNull(),await S.click(i),await new Promise(s=>setTimeout(s,500));const o=t.querySelector('[data-testid="stats"]');d(o.textContent).toContain("Showing 100 of 100 items");const e=t.querySelectorAll("button.more:not([hidden])");d(e.length).toBe(0)}},b={render:()=>r`<div id="demo-container"></div>`,play:async({canvasElement:n})=>{const t=n.querySelector("#demo-container");h(t,{totalItems:5,pageSize:10}),await new Promise(i=>setTimeout(i,500));const a=t.querySelectorAll("button.more:not([hidden])");d(a.length).toBe(0)}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};const _=["Default","WithCallbacks","LoadAllTest","AllDataLoaded"];export{b as AllDataLoaded,p as Default,v as LoadAllTest,u as WithCallbacks,_ as __namedExportsOrder,P as default};
