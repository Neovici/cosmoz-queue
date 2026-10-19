import{t as e}from"./chunk-BvrOYcoh.js";import{a as t,o as n,t as r}from"./lit-html-BZ3vufxv.js";import{n as i,t as a,y as o}from"./haunted-BQgbGIjZ.js";import{n as s,o as c,r as l,s as u,t as d}from"./i18next-D2cgeGk4.js";import{t as f}from"./dist-C1G4dpot.js";import{n as p,t as m}from"./until-DvjuiO94.js";var h,g,_,v=e((()=>{a(),n(),h=o`
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
`,g=()=>r,_=i(g,{styleSheets:[h]}),customElements.define(`cosmoz-spinner`,_)})),y=e((()=>{v()})),b,x=e((()=>{f(),y(),d(),n(),m(),c(),b=({loading:e,data$:n,hasItems:i,onMore:a})=>t`<cosmoz-button
		variant="link"
		class="more"
		slot="extraContent"
		style="align-self: center; margin: calc(var(--cz-spacing) * 2);"
		?hidden="${!a}"
		@click="${a}"
	>
		${u(e,()=>t`<cosmoz-spinner></cosmoz-spinner>`)}
		${u(i&&n,e=>p(e.then(()=>r,()=>r),t`<cosmoz-spinner></cosmoz-spinner>`))}
		<span>${l(`Load more`)}</span>
	</cosmoz-button>`})),S,C,w,T,E,D;e((()=>{d(),n(),x(),{expect:S,fn:C,userEvent:w}=__STORYBOOK_MODULE_TEST__,T={title:`List/Load more`,async beforeEach(){await s.init({lng:`en`,resources:{}})}},E={args:{onMore:C()},render:({onMore:e})=>t`
        <div style="display: flex; flex-direction: column; width: 100%;">
            ${b({onMore:e})}
        </div>
    `,async play({canvasElement:e,args:t}){let n=e.querySelector(`cosmoz-button`),r=n.shadowRoot.querySelector(`button`),i=getComputedStyle(r);S(i.backgroundColor).toBe(`rgba(0, 0, 0, 0)`),S(i.boxShadow).toBe(`none`),S(n.getBoundingClientRect().width).toBeGreaterThan(24),S(n.getBoundingClientRect().width).toBeLessThan(e.getBoundingClientRect().width/2),await w.click(r),S(t.onMore).toHaveBeenCalledOnce()}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    onMore: fn()
  },
  render: ({
    onMore
  }) => html\`
        <div style="display: flex; flex-direction: column; width: 100%;">
            \${renderLoadMore({
    onMore
  })}
        </div>
    \`,
  async play({
    canvasElement,
    args
  }) {
    const host = canvasElement.querySelector('cosmoz-button')!;
    const button = host.shadowRoot!.querySelector('button')!;
    const surface = getComputedStyle(button);
    expect(surface.backgroundColor).toBe('rgba(0, 0, 0, 0)');
    expect(surface.boxShadow).toBe('none');
    expect(host.getBoundingClientRect().width).toBeGreaterThan(24);
    expect(host.getBoundingClientRect().width).toBeLessThan(canvasElement.getBoundingClientRect().width / 2);
    await userEvent.click(button);
    expect(args.onMore).toHaveBeenCalledOnce();
  }
}`,...E.parameters?.docs?.source}}},D=[`Link`]}))();export{E as Link,D as __namedExportsOrder,T as default};