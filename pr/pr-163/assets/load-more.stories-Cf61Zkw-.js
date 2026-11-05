import{t as e}from"./chunk-BvrOYcoh.js";import{a as t,o as n,t as r}from"./lit-html-BZ3vufxv.js";import{n as i,t as a,y as o}from"./haunted-CkSbX4Z4.js";import{a as s,n as c,o as l,t as u}from"./i18next-DUFGUfRA.js";import{t as d}from"./dist-DjNQEwqq.js";import{n as f,t as p}from"./until-CJaKDdv8.js";var m,h,g,_=e((()=>{a(),n(),m=o`
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
`,h=()=>r,g=i(h,{styleSheets:[m]}),customElements.define(`cosmoz-spinner`,g)})),v=e((()=>{_()})),y,b=e((()=>{d(),v(),u(),n(),p(),s(),y=({loading:e,data$:n,hasItems:i,onMore:a})=>t`<cosmoz-button
		variant="link"
		size="lg"
		class="more"
		slot="extraContent"
		?hidden="${!a}"
		@click="${a}"
	>
		${l(e,()=>t`<cosmoz-spinner></cosmoz-spinner>`)}
		${l(i&&n,e=>f(e.then(()=>r,()=>r),t`<cosmoz-spinner></cosmoz-spinner>`))}
		<span>${c(`Load more`)}</span>
	</cosmoz-button>`})),x,S,C,w,T,E,D;e((()=>{b(),{expect:x,fn:S,userEvent:C,waitFor:w}=__STORYBOOK_MODULE_TEST__,T={title:`Tests/Load more`},E={args:{onMore:S()},render:e=>y(e),async play({args:e,canvasElement:t}){let n=t.querySelector(`cosmoz-button`);await w(()=>x(n.shadowRoot?.querySelector(`button`)).toBeTruthy());let r=n.shadowRoot.querySelector(`button`),i=getComputedStyle(r);x(i.backgroundColor).toBe(`rgba(0, 0, 0, 0)`),x(i.backgroundImage).toBe(`none`),x(i.boxShadow).toBe(`none`),await C.click(r),x(e.onMore).toHaveBeenCalledOnce()}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    onMore: fn()
  },
  render: args => renderLoadMore(args),
  async play({
    args,
    canvasElement
  }) {
    const host = canvasElement.querySelector('cosmoz-button')!;
    await waitFor(() => expect(host.shadowRoot?.querySelector('button')).toBeTruthy());
    const button = host.shadowRoot!.querySelector('button')!;
    const style = getComputedStyle(button);
    expect(style.backgroundColor).toBe('rgba(0, 0, 0, 0)');
    expect(style.backgroundImage).toBe('none');
    expect(style.boxShadow).toBe('none');
    await userEvent.click(button);
    expect(args.onMore).toHaveBeenCalledOnce();
  }
}`,...E.parameters?.docs?.source}}},D=[`LinkAppearance`]}))();export{E as LinkAppearance,D as __namedExportsOrder,T as default};