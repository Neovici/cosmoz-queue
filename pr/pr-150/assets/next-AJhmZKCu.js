import{t as e}from"./chunk-BvrOYcoh.js";import{a as t,c as n,o as r,r as i,t as a}from"./lit-html-BZ3vufxv.js";import{a as o,b as s,d as c,f as l,g as u,h as d,i as f,m as p,n as m,p as h,r as g,s as _,t as v,u as y,y as b}from"./haunted-BRIWwrGq.js";var x,S,C=e((()=>{r(),f(),_(),x=new WeakMap,S=o(class extends g{render(e){return a}update(e,[t]){let n=t!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),a}rt(e){if(this.G!==void 0)if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=x.get(t);n===void 0&&(n=new WeakMap,x.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G==`function`?x.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})})),w,T=e((()=>{v(),w=s(b`
	/*
	 * Use border-box sizing for all elements.
	 * This is safe and doesn't conflict with child component styles.
	 */
	*,
	::before,
	::after,
	::backdrop,
	::file-selector-button {
		box-sizing: border-box;
	}

	/*
	 * Reset margins and padding on elements that typically have browser defaults.
	 * This is more targeted than using * to avoid affecting custom elements.
	 */
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	blockquote,
	pre,
	ul,
	ol,
	li,
	dl,
	dt,
	dd,
	figure,
	figcaption,
	fieldset,
	legend,
	form,
	hr,
	table,
	th,
	td {
		margin: 0;
		padding: 0;
	}

	/*
	 * Reset borders on elements that typically have them.
	 */
	fieldset,
	hr,
	iframe {
		border: 0 solid;
	}

	/*
	 * 1. Use a consistent sensible line-height in all browsers.
	 * 2. Prevent adjustments of font size after orientation changes in iOS.
	 * 3. Use a more readable tab size.
	 * 4. Use the configured font-family.
	 * 5. Disable tap highlights on iOS.
	 */
	:host {
		line-height: 1.5;
		-webkit-text-size-adjust: 100%;
		tab-size: 4;
		font-family: var(--cz-font-body);
		-webkit-tap-highlight-color: transparent;
	}

	/*
	 * Reset links to optimize for opt-in styling.
	 */
	a {
		color: inherit;
		text-decoration: inherit;
	}

	/*
	 * Add the correct font weight in Edge and Safari.
	 */
	b,
	strong {
		font-weight: bolder;
	}

	/*
	 * 1. Use the configured mono font-family.
	 * 2. Correct the odd em font sizing in all browsers.
	 */
	code,
	kbd,
	samp,
	pre {
		font-family: var(--cz-font-mono);
		font-size: 1em;
	}

	/*
	 * Add the correct font size in all browsers.
	 */
	small {
		font-size: 80%;
	}

	/*
	 * Prevent sub and sup from affecting line height.
	 */
	sub,
	sup {
		font-size: 75%;
		line-height: 0;
		position: relative;
		vertical-align: baseline;
	}

	sub {
		bottom: -0.25em;
	}

	sup {
		top: -0.5em;
	}

	/*
	 * 1. Make replaced elements display: block by default.
	 * 2. Add vertical-align: middle for better alignment.
	 */
	img,
	svg,
	video,
	canvas,
	audio,
	iframe,
	embed,
	object {
		display: block;
		vertical-align: middle;
	}

	/*
	 * Constrain images and videos to parent width.
	 */
	img,
	video {
		max-width: 100%;
		height: auto;
	}

	/*
	 * Reset form controls:
	 * 1. Inherit font styles in all browsers.
	 * 2. Remove default margins, padding, and borders.
	 * 3. Remove border radius.
	 * 4. Remove background color.
	 */
	button,
	input,
	select,
	optgroup,
	textarea,
	::file-selector-button {
		margin: 0;
		padding: 0;
		border: 0 solid;
		font: inherit;
		font-feature-settings: inherit;
		font-variation-settings: inherit;
		letter-spacing: inherit;
		color: inherit;
		border-radius: 0;
		background-color: transparent;
	}

	/*
	 * Reset placeholder opacity in Firefox.
	 */
	::placeholder {
		opacity: 1;
		color: var(--cz-color-text-placeholder, currentcolor);
	}

	/*
	 * Prevent horizontal textarea resize.
	 */
	textarea {
		resize: vertical;
	}

	/*
	 * Remove the inner padding in Chrome and Safari on macOS.
	 */
	::-webkit-search-decoration {
		-webkit-appearance: none;
	}

	/*
	 * Correct the inability to style the border radius in iOS Safari.
	 */
	button,
	input:where([type='button'], [type='reset'], [type='submit']),
	::file-selector-button {
		appearance: button;
	}

	/*
	 * Make elements with hidden attribute stay hidden.
	 */
	[hidden]:where(:not([hidden='until-found'])) {
		display: none !important;
	}
`)}));function E(e,t,n){return e?t(e):n?.(e)}var D=e((()=>{})),O,k=e((()=>{r(),O=e=>e??a})),ee,te,ne=e((()=>{ee=e=>e,te=(e,...t)=>typeof e==`function`?e(...t):e})),re,ie=e((()=>{v(),re=b`
	:host {
		position: relative;
		display: inline-flex;
		box-sizing: border-box;
		align-items: center;
		justify-content: center;
		gap: calc(var(--cz-spacing) * 1);
		padding: calc(var(--cz-spacing) * 2.5) calc(var(--cz-spacing) * 0.5);
		color: var(--_color);
		text-decoration: none;
		white-space: nowrap;
		cursor: pointer;
		flex: 1 1 0;
		transition:
			color 0.1s linear,
			background-color 0.1s linear,
			box-shadow 0.1s linear;
		outline: 0;

		/* The item's face: hover and active read these; the variants set
		   their own (for brand and segmented, hover and active share one
		   face, so both stay in sync by construction). */
		--_color: var(--cz-color-text-quaternary);
		--_icon-color: var(--cz-color-fg-quaternary);
		--_hover-color: var(--cz-color-text-brand);
		--_hover-background: transparent;
		--_hover-shadow: inset 0 -2px 0 0 var(--cz-color-fg-brand);
		--_hover-icon-color: var(--cz-color-fg-brand-secondary);
		--_active-color: var(--cz-color-text-brand);
		--_active-background: transparent;
		--_active-shadow: inset 0 -2px 0 0 var(--cz-color-fg-brand);
		--_active-icon-color: var(--cz-color-fg-brand-secondary);
	}

	:host(:hover) {
		color: var(--_hover-color);
		background-color: var(--_hover-background);
		box-shadow: var(--_hover-shadow);
	}

	:host(:hover) #iconSlot::slotted(svg) {
		color: var(--_hover-icon-color);
	}

	:host([active]) {
		color: var(--_active-color);
		background-color: var(--_active-background);
		box-shadow: var(--_active-shadow);
	}

	:host([active]) #iconSlot::slotted(svg) {
		color: var(--_active-icon-color);
	}

	:host(:focus-visible) {
		outline: 2px solid var(--cz-color-fg-brand);
		outline-offset: -2px;
	}

	:host([disabled]) {
		opacity: 0.5;
		cursor: not-allowed;
		pointer-events: none;
	}

	:host([hidden]) {
		display: none !important;
	}

	:host([overflowing]) {
		visibility: hidden;
	}

	/* The menu copy: the same element with the menu row's box and face. */
	:host([menu]) {
		flex: 0 0 auto;
		justify-content: flex-start;
		gap: calc(var(--cz-spacing) * 2);
		padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 2.5);
		border-radius: var(--cz-radius-sm);
		box-shadow: none;
		--_color: var(--cz-color-text-quaternary);
		--_hover-color: var(--cz-color-text-secondary);
		--_hover-background: var(--cz-color-bg-primary-hover);
		--_hover-shadow: none;
		--_hover-icon-color: var(--cz-color-fg-quaternary);
		--_active-color: var(--cz-color-text-on-brand);
		--_active-background: var(--cz-color-bg-brand-solid);
		--_active-shadow: none;
		--_active-icon-color: var(--cz-color-text-on-brand);
	}

	a {
		display: contents;
		color: inherit;
		text-decoration: none;
	}

	#iconSlot::slotted(*) {
		flex-shrink: 0;
	}

	#iconSlot::slotted(svg) {
		width: 16px;
		height: 16px;
		flex-shrink: 0;
		color: var(--_icon-color);
	}

	#contentSlot::slotted(*) {
		flex: auto;
	}

	:host([menu]) #contentSlot::slotted(*) {
		flex: 0 0 auto;
	}

	/* Untitled UI badge, size sm: a counter pill that steps up a surface
	   while the tab is hot, and the segmented variant's square-ish one. */
	.badge {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
		font-size: var(--cz-text-xs);
		font-weight: var(--cz-font-weight-medium);
		line-height: var(--cz-text-xs-line-height);
		padding: 2px var(--_badge-padding-inline);
		max-width: 80px;
		overflow: hidden;
		text-overflow: ellipsis;
		text-align: center;
		border-radius: var(--_badge-radius);
		background-color: var(--_badge-background);
		color: var(--_badge-color);
		box-shadow: var(--_badge-shadow);

		--_badge-padding-inline: calc(var(--cz-spacing) * 2);
		--_badge-radius: var(--cz-radius-full);
		--_badge-background: var(--cz-color-bg-secondary);
		--_badge-color: var(--cz-color-text-secondary);
		--_badge-shadow: inset 0 0 0 1px var(--cz-color-border-secondary);
	}

	:host(:not([variant='segmented']):hover) .badge,
	:host(:not([variant='segmented'])[active]) .badge {
		--_badge-background: var(--cz-color-bg-tertiary);
		--_badge-color: var(--cz-color-text-primary);
		--_badge-shadow: inset 0 0 0 1px var(--cz-color-border-primary);
	}

	:host([variant='segmented']) .badge {
		--_badge-padding-inline: calc(var(--cz-spacing) * 1.5);
		--_badge-radius: var(--cz-radius-sm);
		--_badge-background: var(--cz-color-bg-primary);
		--_badge-color: var(--cz-color-text-secondary);
		--_badge-shadow:
			inset 0 0 0 1px var(--cz-color-border-primary), var(--cz-shadow-xs);
	}

	:host([variant='brand']) {
		padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 2.5);
		border-radius: var(--cz-radius-md);
		--_hover-color: var(--cz-color-text-on-brand);
		--_hover-background: var(--cz-color-bg-brand-solid);
		--_hover-shadow: none;
		--_hover-icon-color: var(--cz-color-text-on-brand);
		--_active-color: var(--cz-color-text-on-brand);
		--_active-background: var(--cz-color-bg-brand-solid);
		--_active-shadow: none;
		--_active-icon-color: var(--cz-color-text-on-brand);
	}

	:host([variant='segmented']) {
		padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 2.5);
		border-radius: var(--cz-radius-sm);
		--_hover-color: var(--cz-color-text-secondary);
		--_hover-background: var(--cz-color-bg-primary);
		--_hover-shadow: var(--cz-shadow-sm);
		--_hover-icon-color: var(--cz-color-fg-secondary-hover);
		--_active-color: var(--cz-color-text-secondary);
		--_active-background: var(--cz-color-bg-primary);
		--_active-shadow: var(--cz-shadow-sm);
		--_active-icon-color: var(--cz-color-fg-secondary-hover);
	}

	:host([compact-width]) {
		flex: 0 1 auto;
	}

	/* Last, so the size wins over whichever variant set the box above. */
	:host([size='sm']) {
		padding-block: calc(var(--cz-spacing) * 1.5);
	}

	:host([size='sm']:is([variant='brand'], [variant='segmented'])) {
		padding-inline: calc(var(--cz-spacing) * 2);
	}
`})),ae,oe,se=e((()=>{T(),v(),r(),k(),C(),ie(),ae=class extends HTMLElement{connectedCallback(){this.hasAttribute(`role`)||this.setAttribute(`role`,`tab`),this.hasAttribute(`tabindex`)||this.setAttribute(`tabindex`,`-1`)}},oe=e=>{let{active:n,badge:r,href:i}=e,o=y();return h(()=>{e.setAttribute(`aria-selected`,n?`true`:`false`)},[n]),h(()=>{let t=()=>(o.current??e).click(),n=n=>{n.target!==e||e.hasAttribute(`disabled`)||(n.key===`Enter`&&!n.repeat&&(n.preventDefault(),t()),n.key===` `&&n.preventDefault())},r=n=>{n.target!==e||e.hasAttribute(`disabled`)||n.key===` `&&t()};return e.addEventListener(`keydown`,n),e.addEventListener(`keyup`,r),()=>{e.removeEventListener(`keydown`,n),e.removeEventListener(`keyup`,r)}},[]),t`
		<a ${S(o)} part="link" href=${O(i)}>
			<slot id="iconSlot" name="icon"></slot>
			<slot id="contentSlot"></slot>
			${r?t`<span class="badge" part="badge">${r}</span>`:a}
		</a>
	`},customElements.define(`cosmoz-tab-next`,m(oe,{baseElement:ae,observedAttributes:[`active`,`badge`,`href`],styleSheets:[w,re]}))})),ce,A,le=e((()=>{r(),f(),ce=class extends g{_slot;_ref;#e=()=>{!this._slot||!this._ref||(this._ref.current=this._slot.assignedElements({flatten:!0}))};#t=()=>this.#e();update(e,[t]){this._ref=t;let n=e.element;this._slot!==n&&(this._slot?.removeEventListener(`slotchange`,this.#t),this._slot=n,n.addEventListener(`slotchange`,this.#t)),this.#e()}disconnected(){this._slot?.removeEventListener(`slotchange`,this.#t),this._slot=void 0}render(e){return i}},A=o(ce)})),ue,de,fe,pe,me=e((()=>{r(),f(),ne(),ue=(e,t,n)=>{n==null?e.removeAttribute(t):e.setAttribute(t,n)},de=(e,t)=>{for(let[n,r]of Object.entries(e))ue(t,n,te(r,t))},fe=class extends g{_slot;_attrs;#e=()=>{if(!this._slot||!this._attrs)return;let e=this._slot.assignedElements({flatten:!0});for(let t of e)de(this._attrs,t)};#t=()=>this.#e();render(e){return i}update(e,[t]){this._attrs=t;let n=e.element;return this._slot!==n&&(this._slot?.removeEventListener(`slotchange`,this.#t),this._slot=n,n.addEventListener(`slotchange`,this.#t)),this.#e(),i}disconnected(){this._slot?.removeEventListener(`slotchange`,this.#t),this._slot=void 0}},pe=o(fe)})),he,ge,_e,ve,ye=e((()=>{r(),f(),he=(e,t)=>e.assignedElements({flatten:!0}).filter(t),ge=(e,t)=>e!=null&&t!=null&&e.size===t.size&&[...t].every(t=>e.has(t)),_e=class extends g{_slot;_is;_onOverflow;#e=new Map;#t;#n;#r=e=>{e.forEach(e=>{let t=e.target;this.#e.set(t,e.boundingClientRect.height>0&&e.intersectionRect.height===0)}),this.#a()};#i=e=>{this.#n?.unobserve(e),this.#n?.observe(e)};#a=()=>{if(!this._slot||!this._is)return;let e=he(this._slot,this._is);e.forEach(e=>{let t=this.#e.get(e)===!0;t!==e.hasAttribute(`overflowing`)&&(t?e.setAttribute(`overflowing`,``):e.removeAttribute(`overflowing`))}),this.#e.forEach((t,n)=>{e.includes(n)||(this.#e.delete(n),this.#n?.unobserve(n),n.hasAttribute(`overflowing`)&&n.removeAttribute(`overflowing`))});let t=new Set(e.filter(e=>this.#e.get(e)===!0));ge(this.#t,t)||(this.#t=t,this._onOverflow?.(t))};#o=()=>this.#s();#s=()=>{if(!(!this.#n||!this._slot||!this._is)){for(let e of he(this._slot,this._is))this.#i(e);this.#a()}};render(e){return i}update(e,[t]){this._is=t.is,this._onOverflow=t.onOverflow;let n=e.element;return this._slot!==n&&(this._slot?.removeEventListener(`slotchange`,this.#o),this.#n?.disconnect(),this.#n=void 0,this._slot=n,n.addEventListener(`slotchange`,this.#o)),this.#n??=new IntersectionObserver(this.#r,{root:this._slot,threshold:[0,1]}),this.#s(),i}disconnected(){this._slot?.removeEventListener(`slotchange`,this.#o),this._slot=void 0,this.#n?.disconnect(),this.#n=void 0,this.#e.clear(),this.#t=void 0}},ve=o(_e)})),be,xe=e((()=>{v(),be=e=>{let t=d(()=>({}),[]);return d(()=>Object.assign(t,e),[t,...Object.values(e)])}})),Se,Ce,we=e((()=>{xe(),v(),Se=e=>{for(let t of e.current??[]){let e=t.matches(`[autofocus]`)?t:t.querySelector(`[autofocus]`);if(e instanceof HTMLElement){e.focus();break}}},Ce=e=>{let{placement:t=`bottom span-right`,disabled:n,passthrough:r,openOnHover:i,openOnFocus:a}=e,o=y(),[s,l]=c(`opened`,!1),d=y(),f=y(),m=be({disabled:n,openOnHover:i}),h=p(()=>{let e=d.current?.[0];return e instanceof HTMLElement?e:void 0},[]),g=p(()=>{m.disabled||(l(!0),o.current?.showPopover?.())},[]),_=p(()=>{l(!1),o.current?.hidePopover?.()},[]),v=p(()=>{o.current?.matches(`:popover-open`)?_():g()},[]),b=p(()=>{clearTimeout(m.closeTimeout)},[]),x=p(e=>{m.disabled||e.target===h()&&(b(),g())},[]),S=p(()=>{m.disabled||(b(),g())},[]),C=p(()=>{clearTimeout(m.closeTimeout),m.closeTimeout=setTimeout(()=>{let t=o.current;m.openOnHover&&(e.matches(`:hover`)||t?.matches(`:hover`))||e.matches(`:focus-within`)||t?.matches(`:focus-within`)||_()},100)},[]),w=p(()=>{let t=document.activeElement;for(;t?.shadowRoot;)t=t.shadowRoot.activeElement;if(!(t==null||t===document.body||t.offsetParent==null))return;let n=h();n&&(e.removeEventListener(`focusin`,x),n.focus(),e.addEventListener(`focusin`,x))},[]),T=p(t=>{let n=t.newState===`open`;l(n),n?Se(f):w(),e.dispatchEvent(new ToggleEvent(`dropdown-toggle`,{newState:t.newState,oldState:t.oldState,composed:!0}))},[]);return u(()=>{let e=o.current;e&&(s?e.showPopover?.():e.hidePopover?.())},[s]),u(()=>{e.toggleAttribute(`opened`,!!s)},[s]),u(()=>{if(!(!a||n))return e.addEventListener(`focusin`,x),e.addEventListener(`focusout`,C),()=>{e.removeEventListener(`focusin`,x),e.removeEventListener(`focusout`,C)}},[a,n]),u(()=>{if(!(!i||n))return e.addEventListener(`pointerenter`,S),e.addEventListener(`pointerleave`,C),()=>{e.removeEventListener(`pointerenter`,S),e.removeEventListener(`pointerleave`,C)}},[i,n]),{placement:t,disabled:n,passthrough:r,opened:s,triggers:d,content:f,popoverRef:o,handleClick:a?g:v,onToggle:T,close:_,scheduleClose:C,cancelClose:b}}})),Te,Ee,De,Oe=e((()=>{le(),me(),v(),r(),C(),we(),Te=b`
	:host {
		display: inline-block;
		anchor-name: --dropdown-anchor;
	}

	[popover] {
		position: fixed;
		position-anchor: --dropdown-anchor;
		inset: unset;
		margin-block: var(--cz-spacing, 0.25rem);
		position-try-fallbacks:
			flip-block,
			flip-inline,
			flip-block flip-inline;

		border: none;
		padding: 0;
		background: transparent;
		overflow: visible;
		min-width: anchor-size(width);

		opacity: 1;
		transform: translateY(0) scale(1);

		/* overlay/display transitions need allow-discrete to animate
		 * between display:none and display:block */
		transition:
			opacity 150ms ease-out,
			transform 150ms ease-out,
			overlay 150ms ease-out allow-discrete,
			display 150ms ease-out allow-discrete;
	}

	@starting-style {
		[popover]:popover-open {
			opacity: 0;
			transform: translateY(-4px) scale(0.96);
		}
	}

	[popover]:not(:popover-open) {
		opacity: 0;
		transform: translateY(-4px) scale(0.96);
	}

	@media (prefers-reduced-motion: reduce) {
		[popover] {
			transition: none;
		}
	}
`,Ee=({placement:e,disabled:n,passthrough:r,opened:i,triggers:a,content:o,popoverRef:s,handleClick:c,onToggle:l,close:u,scheduleClose:d,cancelClose:f})=>t`
		<slot
			name="button"
			${A(a)}
			${pe({"aria-expanded":r?null:String(i),disabled:n&&!r?``:null})}
			@click=${c}
		></slot>
		${n&&r?t`<slot></slot>`:t`<div
					popover
					style="position-area: ${e}"
					@toggle=${l}
					@select=${u}
					@focusout=${d}
					@focusin=${f}
					${S(e=>e&&(s.current=e))}
				>
					<slot ${A(o)}></slot>
				</div>`}
	`,De=e=>Ee(Ce(e)),customElements.define(`cosmoz-dropdown-next`,m(De,{styleSheets:[Te],observedAttributes:[`placement`,`disabled`,`passthrough`,`open-on-hover`,`open-on-focus`],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})),ke=e((()=>{r(),k()})),Ae=e((()=>{r(),k()})),je=e((()=>{r(),k()})),Me=e((()=>{r(),k()})),Ne=e((()=>{r(),k()})),Pe=e((()=>{r(),k()})),Fe=e((()=>{r(),k()})),Ie=e((()=>{r(),k()})),Le=e((()=>{r(),k()})),Re=e((()=>{r(),k()})),ze=e((()=>{r(),k()})),Be=e((()=>{r(),k()})),Ve=e((()=>{r(),k()})),He=e((()=>{r(),k()})),Ue=e((()=>{r(),k()})),We=e((()=>{r(),k()})),Ge=e((()=>{r(),k()})),Ke=e((()=>{r(),k()})),qe=e((()=>{r(),k()})),Je=e((()=>{r(),k()})),Ye=e((()=>{r(),k()})),Xe=e((()=>{r(),k()})),Ze=e((()=>{r(),k()})),Qe=e((()=>{r(),k()})),$e=e((()=>{r(),k()})),et=e((()=>{r(),k()})),tt=e((()=>{r(),k()})),nt=e((()=>{r(),k()})),rt=e((()=>{r(),k()})),it=e((()=>{r(),k()})),at=e((()=>{r(),k()})),ot=e((()=>{r(),k()})),st=e((()=>{r(),k()})),ct=e((()=>{r(),k()})),lt=e((()=>{r(),k()})),ut=e((()=>{r(),k()})),dt=e((()=>{r(),k()})),ft=e((()=>{r(),k()})),pt=e((()=>{r(),k()})),mt=e((()=>{r(),k()})),ht=e((()=>{r(),k()})),gt=e((()=>{r(),k()})),_t=e((()=>{r(),k()})),vt=e((()=>{r(),k()})),yt=e((()=>{r(),k()})),bt=e((()=>{r(),k()})),xt=e((()=>{r(),k()})),St=e((()=>{r(),k()})),Ct=e((()=>{r(),k()})),wt=e((()=>{r(),k()})),Tt=e((()=>{r(),k()})),Et=e((()=>{r(),k()})),Dt=e((()=>{r(),k()})),Ot=e((()=>{r(),k()})),kt=e((()=>{r(),k()})),At=e((()=>{r(),k()})),jt=e((()=>{r(),k()})),Mt=e((()=>{r(),k()})),Nt=e((()=>{r(),k()})),Pt=e((()=>{r(),k()})),Ft=e((()=>{r(),k()})),It=e((()=>{r(),k()})),Lt=e((()=>{r(),k()})),Rt=e((()=>{r(),k()})),zt=e((()=>{r(),k()})),Bt=e((()=>{r(),k()})),Vt=e((()=>{r(),k()})),Ht=e((()=>{r(),k()})),Ut=e((()=>{r(),k()})),Wt=e((()=>{r(),k()})),Gt=e((()=>{r(),k()})),Kt=e((()=>{r(),k()})),qt=e((()=>{r(),k()})),Jt=e((()=>{r(),k()})),Yt=e((()=>{r(),k()})),Xt=e((()=>{r(),k()})),Zt=e((()=>{r(),k()})),Qt=e((()=>{r(),k()})),$t=e((()=>{r(),k()})),en=e((()=>{r(),k()})),tn=e((()=>{r(),k()})),nn=e((()=>{r(),k()})),rn=e((()=>{r(),k()})),an=e((()=>{r(),k()})),on=e((()=>{r(),k()})),sn=e((()=>{r(),k()})),cn=e((()=>{r(),k()})),ln=e((()=>{r(),k()})),un=e((()=>{r(),k()})),dn=e((()=>{r(),k()})),fn=e((()=>{r(),k()})),pn=e((()=>{r(),k()})),mn=e((()=>{r(),k()})),hn=e((()=>{r(),k()})),gn=e((()=>{r(),k()})),_n=e((()=>{r(),k()})),vn=e((()=>{r(),k()})),yn=e((()=>{r(),k()})),bn=e((()=>{r(),k()})),xn=e((()=>{r(),k()})),Sn=e((()=>{r(),k()})),Cn=e((()=>{r(),k()})),wn=e((()=>{r(),k()})),Tn=e((()=>{r(),k()})),En=e((()=>{r(),k()})),Dn=e((()=>{r(),k()})),On=e((()=>{r(),k()})),kn=e((()=>{r(),k()})),An=e((()=>{r(),k()})),jn=e((()=>{r(),k()})),Mn=e((()=>{r(),k()})),Nn=e((()=>{r(),k()})),Pn=e((()=>{r(),k()})),Fn=e((()=>{r(),k()})),In=e((()=>{r(),k()})),Ln=e((()=>{r(),k()})),Rn=e((()=>{r(),k()})),zn=e((()=>{r(),k()})),Bn=e((()=>{r(),k()})),Vn=e((()=>{r(),k()})),Hn=e((()=>{r(),k()})),Un=e((()=>{r(),k()})),Wn=e((()=>{r(),k()})),Gn=e((()=>{r(),k()})),Kn=e((()=>{r(),k()})),qn=e((()=>{r(),k()})),Jn=e((()=>{r(),k()})),Yn=e((()=>{r(),k()})),Xn=e((()=>{r(),k()})),Zn=e((()=>{r(),k()})),Qn=e((()=>{r(),k()})),$n=e((()=>{r(),k()})),er=e((()=>{r(),k()})),tr=e((()=>{r(),k()})),nr=e((()=>{r(),k()})),rr=e((()=>{r(),k()})),ir=e((()=>{r(),k()})),ar=e((()=>{r(),k()})),or=e((()=>{r(),k()})),sr=e((()=>{r(),k()})),cr=e((()=>{r(),k()})),lr=e((()=>{r(),k()})),ur=e((()=>{r(),k()})),dr=e((()=>{r(),k()})),fr=e((()=>{r(),k()})),pr=e((()=>{r(),k()})),mr=e((()=>{r(),k()})),hr=e((()=>{r(),k()})),gr=e((()=>{r(),k()})),_r=e((()=>{r(),k()})),vr=e((()=>{r(),k()})),yr=e((()=>{r(),k()})),br=e((()=>{r(),k()})),xr=e((()=>{r(),k()})),Sr=e((()=>{r(),k()})),Cr=e((()=>{r(),k()})),wr=e((()=>{r(),k()})),Tr=e((()=>{r(),k()})),Er=e((()=>{r(),k()})),Dr=e((()=>{r(),k()})),Or=e((()=>{r(),k()})),kr=e((()=>{r(),k()})),Ar=e((()=>{r(),k()})),jr=e((()=>{r(),k()})),Mr=e((()=>{r(),k()})),Nr=e((()=>{r(),k()})),Pr=e((()=>{r(),k()})),Fr=e((()=>{r(),k()})),Ir=e((()=>{r(),k()})),Lr=e((()=>{r(),k()})),Rr=e((()=>{r(),k()})),zr=e((()=>{r(),k()})),Br=e((()=>{r(),k()})),Vr=e((()=>{r(),k()})),Hr=e((()=>{r(),k()})),Ur=e((()=>{r(),k()})),Wr=e((()=>{r(),k()})),Gr=e((()=>{r(),k()})),Kr=e((()=>{r(),k()})),qr=e((()=>{r(),k()})),Jr=e((()=>{r(),k()})),Yr=e((()=>{r(),k()})),Xr=e((()=>{r(),k()})),Zr=e((()=>{r(),k()})),Qr=e((()=>{r(),k()})),$r=e((()=>{r(),k()})),ei=e((()=>{r(),k()})),ti=e((()=>{r(),k()})),ni=e((()=>{r(),k()})),ri=e((()=>{r(),k()})),ii=e((()=>{r(),k()})),ai=e((()=>{r(),k()})),oi=e((()=>{r(),k()})),si=e((()=>{r(),k()})),ci=e((()=>{r(),k()})),li=e((()=>{r(),k()})),ui=e((()=>{r(),k()})),di=e((()=>{r(),k()})),fi=e((()=>{r(),k()})),pi=e((()=>{r(),k()})),mi=e((()=>{r(),k()})),hi=e((()=>{r(),k()})),gi=e((()=>{r(),k()})),_i=e((()=>{r(),k()})),vi=e((()=>{r(),k()})),yi=e((()=>{r(),k()})),bi=e((()=>{r(),k()})),xi=e((()=>{r(),k()})),Si=e((()=>{r(),k()})),Ci=e((()=>{r(),k()})),wi=e((()=>{r(),k()})),Ti=e((()=>{r(),k()})),Ei=e((()=>{r(),k()})),Di=e((()=>{r(),k()})),Oi=e((()=>{r(),k()})),ki=e((()=>{r(),k()})),Ai=e((()=>{r(),k()})),ji=e((()=>{r(),k()})),Mi=e((()=>{r(),k()})),Ni=e((()=>{r(),k()})),Pi=e((()=>{r(),k()})),Fi=e((()=>{r(),k()})),Ii=e((()=>{r(),k()})),Li=e((()=>{r(),k()})),Ri=e((()=>{r(),k()})),zi=e((()=>{r(),k()})),Bi=e((()=>{r(),k()})),Vi=e((()=>{r(),k()})),Hi=e((()=>{r(),k()})),Ui,Wi=e((()=>{r(),k(),D(),Ui=({slot:e,title:r,className:i,width:a=`24`,height:o=`24`,styles:s}={})=>t`
  <svg
    slot=${O(e)}
    class=${`chevron-down-icon ${i??``}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${a}
    height=${o}
    style=${O(s)}
  >
    ${E(r,()=>n`<title>${r}</title>`)}
    <path d="m6 9 6 6 6-6" />
  </svg>
`})),Gi=e((()=>{r(),k()})),Ki=e((()=>{r(),k()})),qi=e((()=>{r(),k()})),Ji=e((()=>{r(),k()})),Yi=e((()=>{r(),k()})),Xi=e((()=>{r(),k()})),Zi=e((()=>{r(),k()})),Qi=e((()=>{r(),k()})),$i=e((()=>{r(),k()})),ea=e((()=>{r(),k()})),ta=e((()=>{r(),k()})),na=e((()=>{r(),k()})),ra=e((()=>{r(),k()})),ia=e((()=>{r(),k()})),aa=e((()=>{r(),k()})),oa=e((()=>{r(),k()})),sa=e((()=>{r(),k()})),ca=e((()=>{r(),k()})),la=e((()=>{r(),k()})),ua=e((()=>{r(),k()})),da=e((()=>{r(),k()})),fa=e((()=>{r(),k()})),pa=e((()=>{r(),k()})),ma=e((()=>{r(),k()})),ha=e((()=>{r(),k()})),ga=e((()=>{r(),k()})),_a=e((()=>{r(),k()})),va=e((()=>{r(),k()})),ya=e((()=>{r(),k()})),ba=e((()=>{r(),k()})),xa=e((()=>{r(),k()})),Sa=e((()=>{r(),k()})),Ca=e((()=>{r(),k()})),wa=e((()=>{r(),k()})),Ta=e((()=>{r(),k()})),Ea=e((()=>{r(),k()})),Da=e((()=>{r(),k()})),Oa=e((()=>{r(),k()})),ka=e((()=>{r(),k()})),Aa=e((()=>{r(),k()})),ja=e((()=>{r(),k()})),Ma=e((()=>{r(),k()})),Na=e((()=>{r(),k()})),Pa=e((()=>{r(),k()})),Fa=e((()=>{r(),k()})),Ia=e((()=>{r(),k()})),La=e((()=>{r(),k()})),Ra=e((()=>{r(),k()})),za=e((()=>{r(),k()})),Ba=e((()=>{r(),k()})),Va=e((()=>{r(),k()})),Ha=e((()=>{r(),k()})),Ua=e((()=>{r(),k()})),Wa=e((()=>{r(),k()})),Ga=e((()=>{r(),k()})),Ka=e((()=>{r(),k()})),qa=e((()=>{r(),k()})),Ja=e((()=>{r(),k()})),Ya=e((()=>{r(),k()})),Xa=e((()=>{r(),k()})),Za=e((()=>{r(),k()})),Qa=e((()=>{r(),k()})),$a=e((()=>{r(),k()})),eo=e((()=>{r(),k()})),to=e((()=>{r(),k()})),no=e((()=>{r(),k()})),ro=e((()=>{r(),k()})),io=e((()=>{r(),k()})),ao=e((()=>{r(),k()})),oo=e((()=>{r(),k()})),so=e((()=>{r(),k()})),co=e((()=>{r(),k()})),lo,uo=e((()=>{r(),k(),D(),lo=({slot:e,title:r,className:i,width:a=`24`,height:o=`24`,styles:s}={})=>t`
  <svg
    slot=${O(e)}
    class=${`columns-02-icon ${i??``}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${a}
    height=${o}
    style=${O(s)}
  >
    ${E(r,()=>n`<title>${r}</title>`)}
    <path
      d="M12 3v18M7.8 3h8.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 3 6.12 3 7.8 3Z"
    />
  </svg>
`})),fo=e((()=>{r(),k()})),po=e((()=>{r(),k()})),mo=e((()=>{r(),k()})),ho=e((()=>{r(),k()})),go=e((()=>{r(),k()})),_o=e((()=>{r(),k()})),vo=e((()=>{r(),k()})),yo=e((()=>{r(),k()})),bo=e((()=>{r(),k()})),xo=e((()=>{r(),k()})),So=e((()=>{r(),k()})),Co=e((()=>{r(),k()})),wo=e((()=>{r(),k()})),To=e((()=>{r(),k()})),Eo=e((()=>{r(),k()})),Do=e((()=>{r(),k()})),Oo=e((()=>{r(),k()})),ko=e((()=>{r(),k()})),Ao=e((()=>{r(),k()})),jo=e((()=>{r(),k()})),Mo=e((()=>{r(),k()})),No=e((()=>{r(),k()})),Po=e((()=>{r(),k()})),Fo=e((()=>{r(),k()})),Io=e((()=>{r(),k()})),Lo=e((()=>{r(),k()})),Ro=e((()=>{r(),k()})),zo=e((()=>{r(),k()})),Bo=e((()=>{r(),k()})),Vo=e((()=>{r(),k()})),Ho=e((()=>{r(),k()})),Uo=e((()=>{r(),k()})),Wo=e((()=>{r(),k()})),Go=e((()=>{r(),k()})),Ko=e((()=>{r(),k()})),qo=e((()=>{r(),k()})),Jo=e((()=>{r(),k()})),Yo=e((()=>{r(),k()})),Xo=e((()=>{r(),k()})),Zo=e((()=>{r(),k()})),Qo=e((()=>{r(),k()})),$o=e((()=>{r(),k()})),es=e((()=>{r(),k()})),ts=e((()=>{r(),k()})),ns=e((()=>{r(),k()})),rs=e((()=>{r(),k()})),is=e((()=>{r(),k()})),as=e((()=>{r(),k()})),os=e((()=>{r(),k()})),ss=e((()=>{r(),k()})),cs=e((()=>{r(),k()})),ls=e((()=>{r(),k()})),us=e((()=>{r(),k()})),ds=e((()=>{r(),k()})),fs=e((()=>{r(),k()})),ps=e((()=>{r(),k()})),ms=e((()=>{r(),k()})),hs=e((()=>{r(),k()})),gs=e((()=>{r(),k()})),_s=e((()=>{r(),k()})),vs=e((()=>{r(),k()})),ys=e((()=>{r(),k()})),bs=e((()=>{r(),k()})),xs=e((()=>{r(),k()})),Ss=e((()=>{r(),k()})),Cs=e((()=>{r(),k()})),ws=e((()=>{r(),k()})),Ts=e((()=>{r(),k()})),Es=e((()=>{r(),k()})),Ds=e((()=>{r(),k()})),Os=e((()=>{r(),k()})),ks=e((()=>{r(),k()})),As=e((()=>{r(),k()})),js=e((()=>{r(),k()})),Ms=e((()=>{r(),k()})),Ns=e((()=>{r(),k()})),Ps=e((()=>{r(),k()})),Fs=e((()=>{r(),k()})),Is=e((()=>{r(),k()})),Ls=e((()=>{r(),k()})),Rs=e((()=>{r(),k()})),zs=e((()=>{r(),k()})),Bs=e((()=>{r(),k()})),Vs=e((()=>{r(),k()})),Hs=e((()=>{r(),k()})),Us=e((()=>{r(),k()})),Ws=e((()=>{r(),k()})),Gs=e((()=>{r(),k()})),Ks=e((()=>{r(),k()})),qs=e((()=>{r(),k()})),Js=e((()=>{r(),k()})),Ys=e((()=>{r(),k()})),Xs=e((()=>{r(),k()})),Zs=e((()=>{r(),k()})),Qs=e((()=>{r(),k()})),$s=e((()=>{r(),k()})),ec=e((()=>{r(),k()})),tc=e((()=>{r(),k()})),nc=e((()=>{r(),k()})),rc=e((()=>{r(),k()})),ic=e((()=>{r(),k()})),ac=e((()=>{r(),k()})),oc=e((()=>{r(),k()})),sc=e((()=>{r(),k()})),cc=e((()=>{r(),k()})),lc=e((()=>{r(),k()})),uc=e((()=>{r(),k()})),dc=e((()=>{r(),k()})),fc=e((()=>{r(),k()})),pc=e((()=>{r(),k()})),mc=e((()=>{r(),k()})),hc=e((()=>{r(),k()})),gc=e((()=>{r(),k()})),_c=e((()=>{r(),k()})),vc=e((()=>{r(),k()})),yc=e((()=>{r(),k()})),bc=e((()=>{r(),k()})),xc=e((()=>{r(),k()})),Sc=e((()=>{r(),k()})),Cc=e((()=>{r(),k()})),wc=e((()=>{r(),k()})),Tc=e((()=>{r(),k()})),Ec=e((()=>{r(),k()})),Dc=e((()=>{r(),k()})),Oc=e((()=>{r(),k()})),kc=e((()=>{r(),k()})),Ac=e((()=>{r(),k()})),jc=e((()=>{r(),k()})),Mc=e((()=>{r(),k()})),Nc=e((()=>{r(),k()})),Pc=e((()=>{r(),k()})),Fc=e((()=>{r(),k()})),Ic=e((()=>{r(),k()})),Lc=e((()=>{r(),k()})),Rc=e((()=>{r(),k()})),zc=e((()=>{r(),k()})),Bc=e((()=>{r(),k()})),Vc=e((()=>{r(),k()})),Hc=e((()=>{r(),k()})),Uc=e((()=>{r(),k()})),Wc=e((()=>{r(),k()})),Gc=e((()=>{r(),k()})),Kc=e((()=>{r(),k()})),qc=e((()=>{r(),k()})),Jc=e((()=>{r(),k()})),Yc=e((()=>{r(),k()})),Xc=e((()=>{r(),k()})),Zc=e((()=>{r(),k()})),Qc=e((()=>{r(),k()})),$c=e((()=>{r(),k()})),el=e((()=>{r(),k()})),tl=e((()=>{r(),k()})),nl=e((()=>{r(),k()})),rl=e((()=>{r(),k()})),il=e((()=>{r(),k()})),al=e((()=>{r(),k()})),ol=e((()=>{r(),k()})),sl=e((()=>{r(),k()})),cl=e((()=>{r(),k()})),ll=e((()=>{r(),k()})),ul=e((()=>{r(),k()})),dl=e((()=>{r(),k()})),fl=e((()=>{r(),k()})),pl=e((()=>{r(),k()})),ml=e((()=>{r(),k()})),hl=e((()=>{r(),k()})),gl=e((()=>{r(),k()})),_l=e((()=>{r(),k()})),vl=e((()=>{r(),k()})),yl=e((()=>{r(),k()})),bl=e((()=>{r(),k()})),xl=e((()=>{r(),k()})),Sl=e((()=>{r(),k()})),Cl=e((()=>{r(),k()})),wl=e((()=>{r(),k()})),Tl=e((()=>{r(),k()})),El=e((()=>{r(),k()})),Dl=e((()=>{r(),k()})),Ol=e((()=>{r(),k()})),kl=e((()=>{r(),k()})),Al=e((()=>{r(),k()})),jl=e((()=>{r(),k()})),Ml=e((()=>{r(),k()})),Nl=e((()=>{r(),k()})),Pl=e((()=>{r(),k()})),Fl=e((()=>{r(),k()})),Il=e((()=>{r(),k()})),Ll=e((()=>{r(),k()})),Rl=e((()=>{r(),k()})),zl=e((()=>{r(),k()})),Bl=e((()=>{r(),k()})),Vl=e((()=>{r(),k()})),Hl=e((()=>{r(),k()})),Ul=e((()=>{r(),k()})),Wl=e((()=>{r(),k()})),Gl=e((()=>{r(),k()})),Kl=e((()=>{r(),k()})),ql=e((()=>{r(),k()})),Jl=e((()=>{r(),k()})),Yl=e((()=>{r(),k()})),Xl=e((()=>{r(),k()})),Zl=e((()=>{r(),k()})),Ql=e((()=>{r(),k()})),$l=e((()=>{r(),k()})),eu=e((()=>{r(),k()})),tu=e((()=>{r(),k()})),nu=e((()=>{r(),k()})),ru=e((()=>{r(),k()})),iu=e((()=>{r(),k()})),au=e((()=>{r(),k()})),ou=e((()=>{r(),k()})),su=e((()=>{r(),k()})),cu=e((()=>{r(),k()})),lu=e((()=>{r(),k()})),uu=e((()=>{r(),k()})),du=e((()=>{r(),k()})),fu=e((()=>{r(),k()})),pu=e((()=>{r(),k()})),mu=e((()=>{r(),k()})),hu=e((()=>{r(),k()})),gu=e((()=>{r(),k()})),_u=e((()=>{r(),k()})),vu=e((()=>{r(),k()})),yu=e((()=>{r(),k()})),bu=e((()=>{r(),k()})),xu=e((()=>{r(),k()})),Su=e((()=>{r(),k()})),Cu=e((()=>{r(),k()})),wu=e((()=>{r(),k()})),Tu=e((()=>{r(),k()})),Eu=e((()=>{r(),k()})),Du=e((()=>{r(),k()})),Ou=e((()=>{r(),k()})),ku=e((()=>{r(),k()})),Au=e((()=>{r(),k()})),ju=e((()=>{r(),k()})),Mu=e((()=>{r(),k()})),Nu=e((()=>{r(),k()})),Pu=e((()=>{r(),k()})),Fu=e((()=>{r(),k()})),Iu=e((()=>{r(),k()})),Lu=e((()=>{r(),k()})),Ru=e((()=>{r(),k()})),zu=e((()=>{r(),k()})),Bu=e((()=>{r(),k()})),Vu=e((()=>{r(),k()})),Hu=e((()=>{r(),k()})),Uu=e((()=>{r(),k()})),Wu=e((()=>{r(),k()})),Gu=e((()=>{r(),k()})),Ku=e((()=>{r(),k()})),qu=e((()=>{r(),k()})),Ju=e((()=>{r(),k()})),Yu=e((()=>{r(),k()})),Xu=e((()=>{r(),k()})),Zu=e((()=>{r(),k()})),Qu=e((()=>{r(),k()})),$u=e((()=>{r(),k()})),ed=e((()=>{r(),k()})),td=e((()=>{r(),k()})),nd=e((()=>{r(),k()})),rd=e((()=>{r(),k()})),id=e((()=>{r(),k()})),ad=e((()=>{r(),k()})),od=e((()=>{r(),k()})),sd=e((()=>{r(),k()})),cd=e((()=>{r(),k()})),ld=e((()=>{r(),k()})),ud=e((()=>{r(),k()})),dd=e((()=>{r(),k()})),fd=e((()=>{r(),k()})),pd=e((()=>{r(),k()})),md=e((()=>{r(),k()})),hd=e((()=>{r(),k()})),gd=e((()=>{r(),k()})),_d=e((()=>{r(),k()})),vd=e((()=>{r(),k()})),yd=e((()=>{r(),k()})),bd=e((()=>{r(),k()})),xd=e((()=>{r(),k()})),Sd=e((()=>{r(),k()})),Cd=e((()=>{r(),k()})),wd=e((()=>{r(),k()})),Td=e((()=>{r(),k()})),Ed=e((()=>{r(),k()})),Dd=e((()=>{r(),k()})),Od=e((()=>{r(),k()})),kd=e((()=>{r(),k()})),Ad=e((()=>{r(),k()})),jd=e((()=>{r(),k()})),Md=e((()=>{r(),k()})),Nd=e((()=>{r(),k()})),Pd=e((()=>{r(),k()})),Fd=e((()=>{r(),k()})),Id=e((()=>{r(),k()})),Ld=e((()=>{r(),k()})),Rd=e((()=>{r(),k()})),zd=e((()=>{r(),k()})),Bd=e((()=>{r(),k()})),Vd=e((()=>{r(),k()})),Hd=e((()=>{r(),k()})),Ud=e((()=>{r(),k()})),Wd=e((()=>{r(),k()})),Gd=e((()=>{r(),k()})),Kd=e((()=>{r(),k()})),qd=e((()=>{r(),k()})),Jd=e((()=>{r(),k()})),Yd=e((()=>{r(),k()})),Xd=e((()=>{r(),k()})),Zd=e((()=>{r(),k()})),Qd=e((()=>{r(),k()})),$d=e((()=>{r(),k()})),ef=e((()=>{r(),k()})),tf=e((()=>{r(),k()})),nf=e((()=>{r(),k()})),rf=e((()=>{r(),k()})),af=e((()=>{r(),k()})),of=e((()=>{r(),k()})),sf=e((()=>{r(),k()})),cf=e((()=>{r(),k()})),lf=e((()=>{r(),k()})),uf=e((()=>{r(),k()})),df=e((()=>{r(),k()})),ff=e((()=>{r(),k()})),pf=e((()=>{r(),k()})),mf=e((()=>{r(),k()})),hf=e((()=>{r(),k()})),gf=e((()=>{r(),k()})),_f=e((()=>{r(),k()})),vf=e((()=>{r(),k()})),yf=e((()=>{r(),k()})),bf=e((()=>{r(),k()})),xf=e((()=>{r(),k()})),Sf=e((()=>{r(),k()})),Cf=e((()=>{r(),k()})),wf=e((()=>{r(),k()})),Tf=e((()=>{r(),k()})),Ef=e((()=>{r(),k()})),Df=e((()=>{r(),k()})),Of=e((()=>{r(),k()})),kf=e((()=>{r(),k()})),Af=e((()=>{r(),k()})),jf=e((()=>{r(),k()})),Mf=e((()=>{r(),k()})),Nf=e((()=>{r(),k()})),Pf=e((()=>{r(),k()})),Ff=e((()=>{r(),k()})),If=e((()=>{r(),k()})),Lf=e((()=>{r(),k()})),Rf=e((()=>{r(),k()})),zf=e((()=>{r(),k()})),Bf=e((()=>{r(),k()})),Vf=e((()=>{r(),k()})),Hf=e((()=>{r(),k()})),Uf=e((()=>{r(),k()})),Wf=e((()=>{r(),k()})),Gf=e((()=>{r(),k()})),Kf=e((()=>{r(),k()})),qf=e((()=>{r(),k()})),Jf=e((()=>{r(),k()})),Yf=e((()=>{r(),k()})),Xf=e((()=>{r(),k()})),Zf=e((()=>{r(),k()})),Qf=e((()=>{r(),k()})),$f=e((()=>{r(),k()})),ep=e((()=>{r(),k()})),tp=e((()=>{r(),k()})),np=e((()=>{r(),k()})),rp=e((()=>{r(),k()})),ip=e((()=>{r(),k()})),ap=e((()=>{r(),k()})),op=e((()=>{r(),k()})),sp=e((()=>{r(),k()})),cp=e((()=>{r(),k()})),lp=e((()=>{r(),k()})),up=e((()=>{r(),k()})),dp=e((()=>{r(),k()})),fp=e((()=>{r(),k()})),pp=e((()=>{r(),k()})),mp=e((()=>{r(),k()})),hp=e((()=>{r(),k()})),gp=e((()=>{r(),k()})),_p=e((()=>{r(),k()})),vp=e((()=>{r(),k()})),yp=e((()=>{r(),k()})),bp=e((()=>{r(),k()})),xp=e((()=>{r(),k()})),Sp,Cp=e((()=>{r(),k(),D(),Sp=({slot:e,title:r,className:i,width:a=`24`,height:o=`24`,styles:s}={})=>t`
  <svg
    slot=${O(e)}
    class=${`list-icon ${i??``}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${a}
    height=${o}
    style=${O(s)}
  >
    ${E(r,()=>n`<title>${r}</title>`)}
    <path
      d="M21 12H9m12-6H9m12 12H9m-4-6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0-6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
    />
  </svg>
`})),wp=e((()=>{r(),k()})),Tp=e((()=>{r(),k()})),Ep=e((()=>{r(),k()})),Dp=e((()=>{r(),k()})),Op=e((()=>{r(),k()})),kp=e((()=>{r(),k()})),Ap=e((()=>{r(),k()})),jp=e((()=>{r(),k()})),Mp=e((()=>{r(),k()})),Np=e((()=>{r(),k()})),Pp=e((()=>{r(),k()})),Fp=e((()=>{r(),k()})),Ip=e((()=>{r(),k()})),Lp=e((()=>{r(),k()})),Rp=e((()=>{r(),k()})),zp=e((()=>{r(),k()})),Bp=e((()=>{r(),k()})),Vp=e((()=>{r(),k()})),Hp=e((()=>{r(),k()})),Up=e((()=>{r(),k()})),Wp=e((()=>{r(),k()})),Gp=e((()=>{r(),k()})),Kp=e((()=>{r(),k()})),qp=e((()=>{r(),k()})),Jp=e((()=>{r(),k()})),Yp=e((()=>{r(),k()})),Xp=e((()=>{r(),k()})),Zp=e((()=>{r(),k()})),Qp=e((()=>{r(),k()})),$p=e((()=>{r(),k()})),em=e((()=>{r(),k()})),tm=e((()=>{r(),k()})),nm=e((()=>{r(),k()})),rm=e((()=>{r(),k()})),im=e((()=>{r(),k()})),am=e((()=>{r(),k()})),om=e((()=>{r(),k()})),sm=e((()=>{r(),k()})),cm=e((()=>{r(),k()})),lm=e((()=>{r(),k()})),um=e((()=>{r(),k()})),dm=e((()=>{r(),k()})),fm=e((()=>{r(),k()})),pm=e((()=>{r(),k()})),mm=e((()=>{r(),k()})),hm=e((()=>{r(),k()})),gm=e((()=>{r(),k()})),_m=e((()=>{r(),k()})),vm=e((()=>{r(),k()})),ym=e((()=>{r(),k()})),bm=e((()=>{r(),k()})),xm=e((()=>{r(),k()})),Sm=e((()=>{r(),k()})),Cm=e((()=>{r(),k()})),wm=e((()=>{r(),k()})),Tm=e((()=>{r(),k()})),Em=e((()=>{r(),k()})),Dm=e((()=>{r(),k()})),Om=e((()=>{r(),k()})),km=e((()=>{r(),k()})),Am=e((()=>{r(),k()})),jm=e((()=>{r(),k()})),Mm=e((()=>{r(),k()})),Nm=e((()=>{r(),k()})),Pm=e((()=>{r(),k()})),Fm=e((()=>{r(),k()})),Im=e((()=>{r(),k()})),Lm=e((()=>{r(),k()})),Rm=e((()=>{r(),k()})),zm=e((()=>{r(),k()})),Bm=e((()=>{r(),k()})),Vm=e((()=>{r(),k()})),Hm=e((()=>{r(),k()})),Um=e((()=>{r(),k()})),Wm=e((()=>{r(),k()})),Gm=e((()=>{r(),k()})),Km=e((()=>{r(),k()})),qm=e((()=>{r(),k()})),Jm=e((()=>{r(),k()})),Ym=e((()=>{r(),k()})),Xm=e((()=>{r(),k()})),Zm=e((()=>{r(),k()})),Qm=e((()=>{r(),k()})),$m=e((()=>{r(),k()})),eh=e((()=>{r(),k()})),th=e((()=>{r(),k()})),nh=e((()=>{r(),k()})),rh=e((()=>{r(),k()})),ih=e((()=>{r(),k()})),ah=e((()=>{r(),k()})),oh=e((()=>{r(),k()})),sh=e((()=>{r(),k()})),ch=e((()=>{r(),k()})),lh=e((()=>{r(),k()})),uh=e((()=>{r(),k()})),dh=e((()=>{r(),k()})),fh=e((()=>{r(),k()})),ph=e((()=>{r(),k()})),mh=e((()=>{r(),k()})),hh=e((()=>{r(),k()})),gh=e((()=>{r(),k()})),_h=e((()=>{r(),k()})),vh=e((()=>{r(),k()})),yh=e((()=>{r(),k()})),bh=e((()=>{r(),k()})),xh=e((()=>{r(),k()})),Sh=e((()=>{r(),k()})),Ch=e((()=>{r(),k()})),wh=e((()=>{r(),k()})),Th=e((()=>{r(),k()})),Eh=e((()=>{r(),k()})),Dh=e((()=>{r(),k()})),Oh=e((()=>{r(),k()})),kh=e((()=>{r(),k()})),Ah=e((()=>{r(),k()})),jh=e((()=>{r(),k()})),Mh=e((()=>{r(),k()})),Nh=e((()=>{r(),k()})),Ph=e((()=>{r(),k()})),Fh=e((()=>{r(),k()})),Ih=e((()=>{r(),k()})),Lh=e((()=>{r(),k()})),Rh=e((()=>{r(),k()})),zh=e((()=>{r(),k()})),Bh=e((()=>{r(),k()})),Vh=e((()=>{r(),k()})),Hh=e((()=>{r(),k()})),Uh=e((()=>{r(),k()})),Wh=e((()=>{r(),k()})),Gh=e((()=>{r(),k()})),Kh=e((()=>{r(),k()})),qh=e((()=>{r(),k()})),Jh=e((()=>{r(),k()})),Yh=e((()=>{r(),k()})),Xh=e((()=>{r(),k()})),Zh=e((()=>{r(),k()})),Qh=e((()=>{r(),k()})),$h=e((()=>{r(),k()})),eg=e((()=>{r(),k()})),tg=e((()=>{r(),k()})),ng=e((()=>{r(),k()})),rg=e((()=>{r(),k()})),ig=e((()=>{r(),k()})),ag=e((()=>{r(),k()})),og=e((()=>{r(),k()})),sg=e((()=>{r(),k()})),cg=e((()=>{r(),k()})),lg=e((()=>{r(),k()})),ug=e((()=>{r(),k()})),dg=e((()=>{r(),k()})),fg=e((()=>{r(),k()})),pg=e((()=>{r(),k()})),mg=e((()=>{r(),k()})),hg=e((()=>{r(),k()})),gg=e((()=>{r(),k()})),_g=e((()=>{r(),k()})),vg=e((()=>{r(),k()})),yg=e((()=>{r(),k()})),bg=e((()=>{r(),k()})),xg=e((()=>{r(),k()})),Sg=e((()=>{r(),k()})),Cg=e((()=>{r(),k()})),wg=e((()=>{r(),k()})),Tg=e((()=>{r(),k()})),Eg=e((()=>{r(),k()})),Dg=e((()=>{r(),k()})),Og=e((()=>{r(),k()})),kg=e((()=>{r(),k()})),Ag=e((()=>{r(),k()})),jg=e((()=>{r(),k()})),Mg=e((()=>{r(),k()})),Ng=e((()=>{r(),k()})),Pg=e((()=>{r(),k()})),Fg=e((()=>{r(),k()})),Ig=e((()=>{r(),k()})),Lg=e((()=>{r(),k()})),Rg=e((()=>{r(),k()})),zg=e((()=>{r(),k()})),Bg=e((()=>{r(),k()})),Vg=e((()=>{r(),k()})),Hg=e((()=>{r(),k()})),Ug=e((()=>{r(),k()})),Wg=e((()=>{r(),k()})),Gg=e((()=>{r(),k()})),Kg=e((()=>{r(),k()})),qg=e((()=>{r(),k()})),Jg=e((()=>{r(),k()})),Yg=e((()=>{r(),k()})),Xg=e((()=>{r(),k()})),Zg=e((()=>{r(),k()})),Qg=e((()=>{r(),k()})),$g=e((()=>{r(),k()})),e_=e((()=>{r(),k()})),t_=e((()=>{r(),k()})),n_=e((()=>{r(),k()})),r_=e((()=>{r(),k()})),i_=e((()=>{r(),k()})),a_=e((()=>{r(),k()})),o_=e((()=>{r(),k()})),s_=e((()=>{r(),k()})),c_=e((()=>{r(),k()})),l_=e((()=>{r(),k()})),u_=e((()=>{r(),k()})),d_=e((()=>{r(),k()})),f_=e((()=>{r(),k()})),p_=e((()=>{r(),k()})),m_=e((()=>{r(),k()})),h_=e((()=>{r(),k()})),g_=e((()=>{r(),k()})),__=e((()=>{r(),k()})),v_=e((()=>{r(),k()})),y_=e((()=>{r(),k()})),b_=e((()=>{r(),k()})),x_=e((()=>{r(),k()})),S_=e((()=>{r(),k()})),C_=e((()=>{r(),k()})),w_=e((()=>{r(),k()})),T_=e((()=>{r(),k()})),E_=e((()=>{r(),k()})),D_=e((()=>{r(),k()})),O_=e((()=>{r(),k()})),k_=e((()=>{r(),k()})),A_=e((()=>{r(),k()})),j_=e((()=>{r(),k()})),M_=e((()=>{r(),k()})),N_=e((()=>{r(),k()})),P_=e((()=>{r(),k()})),F_=e((()=>{r(),k()})),I_=e((()=>{r(),k()})),L_=e((()=>{r(),k()})),R_=e((()=>{r(),k()})),z_=e((()=>{r(),k()})),B_=e((()=>{r(),k()})),V_=e((()=>{r(),k()})),H_=e((()=>{r(),k()})),U_=e((()=>{r(),k()})),W_=e((()=>{r(),k()})),G_=e((()=>{r(),k()})),K_=e((()=>{r(),k()})),q_=e((()=>{r(),k()})),J_=e((()=>{r(),k()})),Y_=e((()=>{r(),k()})),X_=e((()=>{r(),k()})),Z_=e((()=>{r(),k()})),Q_=e((()=>{r(),k()})),$_=e((()=>{r(),k()})),ev=e((()=>{r(),k()})),tv=e((()=>{r(),k()})),nv=e((()=>{r(),k()})),rv=e((()=>{r(),k()})),iv=e((()=>{r(),k()})),av=e((()=>{r(),k()})),ov=e((()=>{r(),k()})),sv=e((()=>{r(),k()})),cv=e((()=>{r(),k()})),lv=e((()=>{r(),k()})),uv=e((()=>{r(),k()})),dv=e((()=>{r(),k()})),fv=e((()=>{r(),k()})),pv=e((()=>{r(),k()})),mv=e((()=>{r(),k()})),hv=e((()=>{r(),k()})),gv=e((()=>{r(),k()})),_v=e((()=>{r(),k()})),vv=e((()=>{r(),k()})),yv=e((()=>{r(),k()})),bv=e((()=>{r(),k()})),xv=e((()=>{r(),k()})),Sv=e((()=>{r(),k()})),Cv=e((()=>{r(),k()})),wv=e((()=>{r(),k()})),Tv=e((()=>{r(),k()})),Ev=e((()=>{r(),k()})),Dv=e((()=>{r(),k()})),Ov=e((()=>{r(),k()})),kv=e((()=>{r(),k()})),Av=e((()=>{r(),k()})),jv=e((()=>{r(),k()})),Mv=e((()=>{r(),k()})),Nv=e((()=>{r(),k()})),Pv=e((()=>{r(),k()})),Fv=e((()=>{r(),k()})),Iv=e((()=>{r(),k()})),Lv=e((()=>{r(),k()})),Rv=e((()=>{r(),k()})),zv=e((()=>{r(),k()})),Bv=e((()=>{r(),k()})),Vv=e((()=>{r(),k()})),Hv=e((()=>{r(),k()})),Uv=e((()=>{r(),k()})),Wv=e((()=>{r(),k()})),Gv=e((()=>{r(),k()})),Kv=e((()=>{r(),k()})),qv=e((()=>{r(),k()})),Jv=e((()=>{r(),k()})),Yv=e((()=>{r(),k()})),Xv=e((()=>{r(),k()})),Zv=e((()=>{r(),k()})),Qv=e((()=>{r(),k()})),$v=e((()=>{r(),k()})),ey=e((()=>{r(),k()})),ty=e((()=>{r(),k()})),ny=e((()=>{r(),k()})),ry=e((()=>{r(),k()})),iy=e((()=>{r(),k()})),ay=e((()=>{r(),k()})),oy=e((()=>{r(),k()})),sy,cy=e((()=>{r(),k(),D(),sy=({slot:e,title:r,className:i,width:a=`24`,height:o=`24`,styles:s}={})=>t`
  <svg
    slot=${O(e)}
    class=${`square-icon ${i??``}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${a}
    height=${o}
    style=${O(s)}
  >
    ${E(r,()=>n`<title>${r}</title>`)}
    <path
      d="M3 7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 3 6.12 3 7.8 3h8.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V7.8Z"
    />
  </svg>
`})),ly=e((()=>{r(),k()})),uy=e((()=>{r(),k()})),dy=e((()=>{r(),k()})),fy=e((()=>{r(),k()})),py=e((()=>{r(),k()})),my=e((()=>{r(),k()})),hy=e((()=>{r(),k()})),gy=e((()=>{r(),k()})),_y=e((()=>{r(),k()})),vy=e((()=>{r(),k()})),yy=e((()=>{r(),k()})),by=e((()=>{r(),k()})),xy=e((()=>{r(),k()})),Sy=e((()=>{r(),k()})),Cy=e((()=>{r(),k()})),wy=e((()=>{r(),k()})),Ty=e((()=>{r(),k()})),Ey=e((()=>{r(),k()})),Dy=e((()=>{r(),k()})),Oy=e((()=>{r(),k()})),ky=e((()=>{r(),k()})),Ay=e((()=>{r(),k()})),jy=e((()=>{r(),k()})),My=e((()=>{r(),k()})),Ny=e((()=>{r(),k()})),Py=e((()=>{r(),k()})),Fy=e((()=>{r(),k()})),Iy=e((()=>{r(),k()})),Ly=e((()=>{r(),k()})),Ry=e((()=>{r(),k()})),zy=e((()=>{r(),k()})),By=e((()=>{r(),k()})),Vy=e((()=>{r(),k()})),Hy=e((()=>{r(),k()})),Uy=e((()=>{r(),k()})),Wy=e((()=>{r(),k()})),Gy=e((()=>{r(),k()})),Ky=e((()=>{r(),k()})),qy=e((()=>{r(),k()})),Jy=e((()=>{r(),k()})),Yy=e((()=>{r(),k()})),Xy=e((()=>{r(),k()})),Zy=e((()=>{r(),k()})),Qy=e((()=>{r(),k()})),$y=e((()=>{r(),k()})),eb=e((()=>{r(),k()})),tb=e((()=>{r(),k()})),nb=e((()=>{r(),k()})),rb=e((()=>{r(),k()})),ib=e((()=>{r(),k()})),ab=e((()=>{r(),k()})),ob=e((()=>{r(),k()})),sb=e((()=>{r(),k()})),cb=e((()=>{r(),k()})),lb=e((()=>{r(),k()})),ub=e((()=>{r(),k()})),db=e((()=>{r(),k()})),fb=e((()=>{r(),k()})),pb=e((()=>{r(),k()})),mb=e((()=>{r(),k()})),hb=e((()=>{r(),k()})),gb=e((()=>{r(),k()})),_b=e((()=>{r(),k()})),vb=e((()=>{r(),k()})),yb=e((()=>{r(),k()})),bb=e((()=>{r(),k()})),xb=e((()=>{r(),k()})),Sb=e((()=>{r(),k()})),Cb=e((()=>{r(),k()})),wb=e((()=>{r(),k()})),Tb=e((()=>{r(),k()})),Eb=e((()=>{r(),k()})),Db=e((()=>{r(),k()})),Ob=e((()=>{r(),k()})),kb=e((()=>{r(),k()})),Ab=e((()=>{r(),k()})),jb=e((()=>{r(),k()})),Mb=e((()=>{r(),k()})),Nb=e((()=>{r(),k()})),Pb=e((()=>{r(),k()})),Fb=e((()=>{r(),k()})),Ib=e((()=>{r(),k()})),Lb=e((()=>{r(),k()})),Rb=e((()=>{r(),k()})),zb=e((()=>{r(),k()})),Bb=e((()=>{r(),k()})),Vb=e((()=>{r(),k()})),Hb=e((()=>{r(),k()})),Ub=e((()=>{r(),k()})),Wb=e((()=>{r(),k()})),Gb=e((()=>{r(),k()})),Kb=e((()=>{r(),k()})),qb=e((()=>{r(),k()})),Jb=e((()=>{r(),k()})),Yb=e((()=>{r(),k()})),Xb=e((()=>{r(),k()})),Zb=e((()=>{r(),k()})),Qb=e((()=>{r(),k()})),$b=e((()=>{r(),k()})),ex=e((()=>{r(),k()})),tx=e((()=>{r(),k()})),nx=e((()=>{r(),k()})),rx=e((()=>{r(),k()})),ix=e((()=>{r(),k()})),ax=e((()=>{r(),k()})),ox=e((()=>{r(),k()})),sx=e((()=>{r(),k()})),cx=e((()=>{r(),k()})),lx=e((()=>{r(),k()})),ux=e((()=>{r(),k()})),dx=e((()=>{r(),k()})),fx=e((()=>{r(),k()})),px=e((()=>{r(),k()})),mx=e((()=>{r(),k()})),hx=e((()=>{r(),k()})),gx=e((()=>{r(),k()})),_x=e((()=>{r(),k()})),vx=e((()=>{r(),k()})),yx=e((()=>{r(),k()})),bx=e((()=>{r(),k()})),xx=e((()=>{r(),k()})),Sx=e((()=>{r(),k()})),Cx=e((()=>{r(),k()})),wx=e((()=>{r(),k()})),Tx=e((()=>{r(),k()})),Ex=e((()=>{r(),k()})),Dx=e((()=>{r(),k()})),Ox=e((()=>{r(),k()})),kx=e((()=>{r(),k()})),Ax=e((()=>{r(),k()})),jx=e((()=>{r(),k()})),Mx=e((()=>{r(),k()})),Nx=e((()=>{r(),k()})),Px=e((()=>{r(),k()})),Fx=e((()=>{r(),k()})),Ix=e((()=>{r(),k()})),Lx=e((()=>{r(),k()})),Rx=e((()=>{r(),k()})),zx=e((()=>{r(),k()})),Bx=e((()=>{r(),k()})),Vx=e((()=>{r(),k()})),Hx=e((()=>{r(),k()})),Ux=e((()=>{r(),k()})),Wx=e((()=>{r(),k()})),Gx=e((()=>{r(),k()})),Kx=e((()=>{r(),k()})),qx=e((()=>{r(),k()})),Jx=e((()=>{r(),k()})),Yx=e((()=>{r(),k()})),Xx=e((()=>{r(),k()})),Zx=e((()=>{r(),k()})),Qx=e((()=>{r(),k()})),$x=e((()=>{r(),k()})),eS=e((()=>{r(),k()})),tS=e((()=>{r(),k()})),nS=e((()=>{r(),k()})),rS=e((()=>{r(),k()})),iS=e((()=>{r(),k()})),aS=e((()=>{r(),k()})),oS=e((()=>{r(),k()})),sS=e((()=>{r(),k()})),cS=e((()=>{r(),k()})),lS=e((()=>{r(),k()})),uS=e((()=>{r(),k()})),dS=e((()=>{r(),k()})),fS=e((()=>{r(),k()})),pS=e((()=>{r(),k()})),mS=e((()=>{r(),k()})),hS=e((()=>{r(),k()})),gS=e((()=>{r(),k()})),_S=e((()=>{r(),k()})),vS=e((()=>{r(),k()})),yS=e((()=>{r(),k()})),bS=e((()=>{r(),k()})),xS=e((()=>{ke(),Ae(),je(),Me(),Ne(),Pe(),Fe(),Ie(),Le(),Re(),ze(),Be(),Ve(),He(),Ue(),We(),Ge(),Ke(),qe(),Je(),Ye(),Xe(),Ze(),Qe(),$e(),et(),tt(),nt(),rt(),it(),at(),ot(),st(),ct(),lt(),ut(),dt(),ft(),pt(),mt(),ht(),gt(),_t(),vt(),yt(),bt(),xt(),St(),Ct(),wt(),Tt(),Et(),Dt(),Ot(),kt(),At(),jt(),Mt(),Nt(),Pt(),Ft(),It(),Lt(),Rt(),zt(),Bt(),Vt(),Ht(),Ut(),Wt(),Gt(),Kt(),qt(),Jt(),Yt(),Xt(),Zt(),Qt(),$t(),en(),tn(),nn(),rn(),an(),on(),sn(),cn(),ln(),un(),dn(),fn(),pn(),mn(),hn(),gn(),_n(),vn(),yn(),bn(),xn(),Sn(),Cn(),wn(),Tn(),En(),Dn(),On(),kn(),An(),jn(),Mn(),Nn(),Pn(),Fn(),In(),Ln(),Rn(),zn(),Bn(),Vn(),Hn(),Un(),Wn(),Gn(),Kn(),qn(),Jn(),Yn(),Xn(),Zn(),Qn(),$n(),er(),tr(),nr(),rr(),ir(),ar(),or(),sr(),cr(),lr(),ur(),dr(),fr(),pr(),mr(),hr(),gr(),_r(),vr(),yr(),br(),xr(),Sr(),Cr(),wr(),Tr(),Er(),Dr(),Or(),kr(),Ar(),jr(),Mr(),Nr(),Pr(),Fr(),Ir(),Lr(),Rr(),zr(),Br(),Vr(),Hr(),Ur(),Wr(),Gr(),Kr(),qr(),Jr(),Yr(),Xr(),Zr(),Qr(),$r(),ei(),ti(),ni(),ri(),ii(),ai(),oi(),si(),ci(),li(),ui(),di(),fi(),pi(),mi(),hi(),gi(),_i(),vi(),yi(),bi(),xi(),Si(),Ci(),wi(),Ti(),Ei(),Di(),Oi(),ki(),Ai(),ji(),Mi(),Ni(),Pi(),Fi(),Ii(),Li(),Ri(),zi(),Bi(),Vi(),Hi(),Wi(),Gi(),Ki(),qi(),Ji(),Yi(),Xi(),Zi(),Qi(),$i(),ea(),ta(),na(),ra(),ia(),aa(),oa(),sa(),ca(),la(),ua(),da(),fa(),pa(),ma(),ha(),ga(),_a(),va(),ya(),ba(),xa(),Sa(),Ca(),wa(),Ta(),Ea(),Da(),Oa(),ka(),Aa(),ja(),Ma(),Na(),Pa(),Fa(),Ia(),La(),Ra(),za(),Ba(),Va(),Ha(),Ua(),Wa(),Ga(),Ka(),qa(),Ja(),Ya(),Xa(),Za(),Qa(),$a(),eo(),to(),no(),ro(),io(),ao(),oo(),so(),co(),uo(),fo(),po(),mo(),ho(),go(),_o(),vo(),yo(),bo(),xo(),So(),Co(),wo(),To(),Eo(),Do(),Oo(),ko(),Ao(),jo(),Mo(),No(),Po(),Fo(),Io(),Lo(),Ro(),zo(),Bo(),Vo(),Ho(),Uo(),Wo(),Go(),Ko(),qo(),Jo(),Yo(),Xo(),Zo(),Qo(),$o(),es(),ts(),ns(),rs(),is(),as(),os(),ss(),cs(),ls(),us(),ds(),fs(),ps(),ms(),hs(),gs(),_s(),vs(),ys(),bs(),xs(),Ss(),Cs(),ws(),Ts(),Es(),Ds(),Os(),ks(),As(),js(),Ms(),Ns(),Ps(),Fs(),Is(),Ls(),Rs(),zs(),Bs(),Vs(),Hs(),Us(),Ws(),Gs(),Ks(),qs(),Js(),Ys(),Xs(),Zs(),Qs(),$s(),ec(),tc(),nc(),rc(),ic(),ac(),oc(),sc(),cc(),lc(),uc(),dc(),fc(),pc(),mc(),hc(),gc(),_c(),vc(),yc(),bc(),xc(),Sc(),Cc(),wc(),Tc(),Ec(),Dc(),Oc(),kc(),Ac(),jc(),Mc(),Nc(),Pc(),Fc(),Ic(),Lc(),Rc(),zc(),Bc(),Vc(),Hc(),Uc(),Wc(),Gc(),Kc(),qc(),Jc(),Yc(),Xc(),Zc(),Qc(),$c(),el(),tl(),nl(),rl(),il(),al(),ol(),sl(),cl(),ll(),ul(),dl(),fl(),pl(),ml(),hl(),gl(),_l(),vl(),yl(),bl(),xl(),Sl(),Cl(),wl(),Tl(),El(),Dl(),Ol(),kl(),Al(),jl(),Ml(),Nl(),Pl(),Fl(),Il(),Ll(),Rl(),zl(),Bl(),Vl(),Hl(),Ul(),Wl(),Gl(),Kl(),ql(),Jl(),Yl(),Xl(),Zl(),Ql(),$l(),eu(),tu(),nu(),ru(),iu(),au(),ou(),su(),cu(),lu(),uu(),du(),fu(),pu(),mu(),hu(),gu(),_u(),vu(),yu(),bu(),xu(),Su(),Cu(),wu(),Tu(),Eu(),Du(),Ou(),ku(),Au(),ju(),Mu(),Nu(),Pu(),Fu(),Iu(),Lu(),Ru(),zu(),Bu(),Vu(),Hu(),Uu(),Wu(),Gu(),Ku(),qu(),Ju(),Yu(),Xu(),Zu(),Qu(),$u(),ed(),td(),nd(),rd(),id(),ad(),od(),sd(),cd(),ld(),ud(),dd(),fd(),pd(),md(),hd(),gd(),_d(),vd(),yd(),bd(),xd(),Sd(),Cd(),wd(),Td(),Ed(),Dd(),Od(),kd(),Ad(),jd(),Md(),Nd(),Pd(),Fd(),Id(),Ld(),Rd(),zd(),Bd(),Vd(),Hd(),Ud(),Wd(),Gd(),Kd(),qd(),Jd(),Yd(),Xd(),Zd(),Qd(),$d(),ef(),tf(),nf(),rf(),af(),of(),sf(),cf(),lf(),uf(),df(),ff(),pf(),mf(),hf(),gf(),_f(),vf(),yf(),bf(),xf(),Sf(),Cf(),wf(),Tf(),Ef(),Df(),Of(),kf(),Af(),jf(),Mf(),Nf(),Pf(),Ff(),If(),Lf(),Rf(),zf(),Bf(),Vf(),Hf(),Uf(),Wf(),Gf(),Kf(),qf(),Jf(),Yf(),Xf(),Zf(),Qf(),$f(),ep(),tp(),np(),rp(),ip(),ap(),op(),sp(),cp(),lp(),up(),dp(),fp(),pp(),mp(),hp(),gp(),_p(),vp(),yp(),bp(),xp(),Cp(),wp(),Tp(),Ep(),Dp(),Op(),kp(),Ap(),jp(),Mp(),Np(),Pp(),Fp(),Ip(),Lp(),Rp(),zp(),Bp(),Vp(),Hp(),Up(),Wp(),Gp(),Kp(),qp(),Jp(),Yp(),Xp(),Zp(),Qp(),$p(),em(),tm(),nm(),rm(),im(),am(),om(),sm(),cm(),lm(),um(),dm(),fm(),pm(),mm(),hm(),gm(),_m(),vm(),ym(),bm(),xm(),Sm(),Cm(),wm(),Tm(),Em(),Dm(),Om(),km(),Am(),jm(),Mm(),Nm(),Pm(),Fm(),Im(),Lm(),Rm(),zm(),Bm(),Vm(),Hm(),Um(),Wm(),Gm(),Km(),qm(),Jm(),Ym(),Xm(),Zm(),Qm(),$m(),eh(),th(),nh(),rh(),ih(),ah(),oh(),sh(),ch(),lh(),uh(),dh(),fh(),ph(),mh(),hh(),gh(),_h(),vh(),yh(),bh(),xh(),Sh(),Ch(),wh(),Th(),Eh(),Dh(),Oh(),kh(),Ah(),jh(),Mh(),Nh(),Ph(),Fh(),Ih(),Lh(),Rh(),zh(),Bh(),Vh(),Hh(),Uh(),Wh(),Gh(),Kh(),qh(),Jh(),Yh(),Xh(),Zh(),Qh(),$h(),eg(),tg(),ng(),rg(),ig(),ag(),og(),sg(),cg(),lg(),ug(),dg(),fg(),pg(),mg(),hg(),gg(),_g(),vg(),yg(),bg(),xg(),Sg(),Cg(),wg(),Tg(),Eg(),Dg(),Og(),kg(),Ag(),jg(),Mg(),Ng(),Pg(),Fg(),Ig(),Lg(),Rg(),zg(),Bg(),Vg(),Hg(),Ug(),Wg(),Gg(),Kg(),qg(),Jg(),Yg(),Xg(),Zg(),Qg(),$g(),e_(),t_(),n_(),r_(),i_(),a_(),o_(),s_(),c_(),l_(),u_(),d_(),f_(),p_(),m_(),h_(),g_(),__(),v_(),y_(),b_(),x_(),S_(),C_(),w_(),T_(),E_(),D_(),O_(),k_(),A_(),j_(),M_(),N_(),P_(),F_(),I_(),L_(),R_(),z_(),B_(),V_(),H_(),U_(),W_(),G_(),K_(),q_(),J_(),Y_(),X_(),Z_(),Q_(),$_(),ev(),tv(),nv(),rv(),iv(),av(),ov(),sv(),cv(),lv(),uv(),dv(),fv(),pv(),mv(),hv(),gv(),_v(),vv(),yv(),bv(),xv(),Sv(),Cv(),wv(),Tv(),Ev(),Dv(),Ov(),kv(),Av(),jv(),Mv(),Nv(),Pv(),Fv(),Iv(),Lv(),Rv(),zv(),Bv(),Vv(),Hv(),Uv(),Wv(),Gv(),Kv(),qv(),Jv(),Yv(),Xv(),Zv(),Qv(),$v(),ey(),ty(),ny(),ry(),iy(),ay(),oy(),cy(),ly(),uy(),dy(),fy(),py(),my(),hy(),gy(),_y(),vy(),yy(),by(),xy(),Sy(),Cy(),wy(),Ty(),Ey(),Dy(),Oy(),ky(),Ay(),jy(),My(),Ny(),Py(),Fy(),Iy(),Ly(),Ry(),zy(),By(),Vy(),Hy(),Uy(),Wy(),Gy(),Ky(),qy(),Jy(),Yy(),Xy(),Zy(),Qy(),$y(),eb(),tb(),nb(),rb(),ib(),ab(),ob(),sb(),cb(),lb(),ub(),db(),fb(),pb(),mb(),hb(),gb(),_b(),vb(),yb(),bb(),xb(),Sb(),Cb(),wb(),Tb(),Eb(),Db(),Ob(),kb(),Ab(),jb(),Mb(),Nb(),Pb(),Fb(),Ib(),Lb(),Rb(),zb(),Bb(),Vb(),Hb(),Ub(),Wb(),Gb(),Kb(),qb(),Jb(),Yb(),Xb(),Zb(),Qb(),$b(),ex(),tx(),nx(),rx(),ix(),ax(),ox(),sx(),cx(),lx(),ux(),dx(),fx(),px(),mx(),hx(),gx(),_x(),vx(),yx(),bx(),xx(),Sx(),Cx(),wx(),Tx(),Ex(),Dx(),Ox(),kx(),Ax(),jx(),Mx(),Nx(),Px(),Fx(),Ix(),Lx(),Rx(),zx(),Bx(),Vx(),Hx(),Ux(),Wx(),Gx(),Kx(),qx(),Jx(),Yx(),Xx(),Zx(),Qx(),$x(),eS(),tS(),nS(),rS(),iS(),aS(),oS(),sS(),cS(),lS(),uS(),dS(),fS(),pS(),mS(),hS(),gS(),_S(),vS(),yS(),bS()}));function SS(){let e=[],t=Object.create(null),n;return t.get=(r,i)=>(n?.revoke?.(),i===K?e:(e.push(i),n=Proxy.revocable(r,t),n.proxy)),Proxy.revocable(Object.create(null),t).proxy}function j(e,t){let{[K]:n}=e(SS()),r=t?.keySeparator??`.`,i=t?.nsSeparator??`:`,a=t?.enableSelector===`strict`;if(n.length>1&&i){let e=t?.ns,o=a?Array.isArray(e)?e:e?[e]:null:Array.isArray(e)?e:null;if(o&&(a?o:o.length>1?o.slice(1):[]).includes(n[0]))return`${n[0]}${i}${n.slice(1).join(r)}`}return n.join(r)}var M,N,P,CS,wS,TS,F,I,ES,DS,L,OS,R,z,kS,AS,jS,MS,NS,PS,B,V,FS,IS,H,U,W,G,K,q,LS,J,RS,zS,BS,VS,HS,US,WS,GS,KS,qS,JS,YS,Y,XS,X,ZS,QS,Z,$S,eC=e((()=>{M=e=>typeof e==`string`,N=()=>{let e,t,n=new Promise((n,r)=>{e=n,t=r});return n.resolve=e,n.reject=t,n},P=e=>e==null?``:String(e),CS=(e,t,n)=>{e.forEach(e=>{t[e]&&(n[e]=t[e])})},wS=/###/g,TS=e=>e&&e.includes(`###`)?e.replace(wS,`.`):e,F=e=>!e||M(e),I=(e,t,n)=>{let r=M(t)?t.split(`.`):t,i=0;for(;i<r.length-1;){if(F(e))return{};let t=TS(r[i]);!e[t]&&n&&(e[t]=new n),e=Object.prototype.hasOwnProperty.call(e,t)?e[t]:{},++i}return F(e)?{}:{obj:e,k:TS(r[i])}},ES=(e,t,n)=>{let{obj:r,k:i}=I(e,t,Object);if(r!==void 0||t.length===1){r[i]=n;return}let a=t[t.length-1],o=t.slice(0,t.length-1),s=I(e,o,Object);for(;s.obj===void 0&&o.length;)a=`${o[o.length-1]}.${a}`,o=o.slice(0,o.length-1),s=I(e,o,Object),s?.obj&&s.obj[`${s.k}.${a}`]!==void 0&&(s.obj=void 0);s.obj[`${s.k}.${a}`]=n},DS=(e,t,n,r)=>{let{obj:i,k:a}=I(e,t,Object);i[a]=i[a]||[],i[a].push(n)},L=(e,t)=>{let{obj:n,k:r}=I(e,t);if(n&&Object.prototype.hasOwnProperty.call(n,r))return n[r]},OS=(e,t,n)=>{let r=L(e,n);return r===void 0?L(t,n):r},R=(e,t,n)=>{for(let r in t)r!==`__proto__`&&r!==`constructor`&&(Object.prototype.hasOwnProperty.call(e,r)?M(e[r])||e[r]instanceof String||M(t[r])||t[r]instanceof String?n&&(e[r]=t[r]):R(e[r],t[r],n):e[r]=t[r]);return e},z=e=>e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,`\\$&`),kS={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`,"/":`&#x2F;`},AS=e=>M(e)?e.replace(/[&<>"'\/]/g,e=>kS[e]):e,jS=class{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){let t=this.regExpMap.get(e);if(t!==void 0)return t;let n=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,n),this.regExpQueue.push(e),n}},MS=[` `,`,`,`?`,`!`,`;`],NS=new jS(20),PS=(e,t,n)=>{t||=``,n||=``;let r=MS.filter(e=>!t.includes(e)&&!n.includes(e));if(r.length===0)return!0;let i=NS.getRegExp(`(${r.map(e=>e===`?`?`\\?`:e).join(`|`)})`),a=!i.test(e);if(!a){let t=e.indexOf(n);t>0&&!i.test(e.substring(0,t))&&(a=!0)}return a},B=(e,t,n=`.`)=>{if(!e)return;if(e[t])return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0;let r=t.split(n),i=e;for(let e=0;e<r.length;){if(!i||typeof i!=`object`)return;let t,a=``;for(let o=e;o<r.length;++o)if(o!==e&&(a+=n),a+=r[o],t=i[a],t!==void 0){if([`string`,`number`,`boolean`].includes(typeof t)&&o<r.length-1)continue;e+=o-e+1;break}i=t}return i},V=e=>e?.replace(/_/g,`-`),FS={type:`logger`,log(e){this.output(`log`,e)},warn(e){this.output(`warn`,e)},error(e){this.output(`error`,e)},output(e,t){console?.[e]?.apply?.(console,t)}},IS=class e{constructor(e,t={}){this.init(e,t)}init(e,t={}){this.prefix=t.prefix||`i18next:`,this.logger=e||FS,this.options=t,this.debug=t.debug}log(...e){return this.forward(e,`log`,``,!0)}warn(...e){return this.forward(e,`warn`,``,!0)}error(...e){return this.forward(e,`error`,``)}deprecate(...e){return this.forward(e,`warn`,`WARNING DEPRECATED: `,!0)}forward(e,t,n,r){return r&&!this.debug?null:(e=e.map(e=>M(e)?e.replace(/[\r\n\x00-\x1F\x7F]/g,` `):e),M(e[0])&&(e[0]=`${n}${this.prefix} ${e[0]}`),this.logger[t](e))}create(t){return new e(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return t||=this.options,t.prefix=t.prefix||this.prefix,new e(this.logger,t)}},H=new IS,U=class{constructor(){this.observers={}}on(e,t){return e.split(` `).forEach(e=>{this.observers[e]||(this.observers[e]=new Map);let n=this.observers[e].get(t)||0;this.observers[e].set(t,n+1)}),this}off(e,t){if(this.observers[e]){if(!t){delete this.observers[e];return}this.observers[e].delete(t)}}once(e,t){let n=(...r)=>{t(...r),this.off(e,n)};return this.on(e,n),this}emit(e,...t){this.observers[e]&&Array.from(this.observers[e].entries()).forEach(([e,n])=>{for(let r=0;r<n;r++)e(...t)}),this.observers[`*`]&&Array.from(this.observers[`*`].entries()).forEach(([n,r])=>{for(let i=0;i<r;i++)n(e,...t)})}},W=class extends U{constructor(e,t={ns:[`translation`],defaultNS:`translation`}){super(),this.data=e||{},this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator=`.`),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.includes(e)||this.options.ns.push(e)}removeNamespaces(e){let t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,n,r={}){let i=r.keySeparator===void 0?this.options.keySeparator:r.keySeparator,a=r.ignoreJSONStructure===void 0?this.options.ignoreJSONStructure:r.ignoreJSONStructure,o;e.includes(`.`)?o=e.split(`.`):(o=[e,t],n&&(Array.isArray(n)?o.push(...n):M(n)&&i?o.push(...n.split(i)):o.push(n)));let s=L(this.data,o);return!s&&!t&&!n&&e.includes(`.`)&&(e=o[0],t=o[1],n=o.slice(2).join(`.`)),s||!a||!M(n)?s:B(this.data?.[e]?.[t],n,i)}addResource(e,t,n,r,i={silent:!1}){let a=i.keySeparator===void 0?this.options.keySeparator:i.keySeparator,o=[e,t];n&&(o=o.concat(a?n.split(a):n)),e.includes(`.`)&&(o=e.split(`.`),r=t,t=o[1]),this.addNamespaces(t),ES(this.data,o,r),i.silent||this.emit(`added`,e,t,n,r)}addResources(e,t,n,r={silent:!1}){for(let r in n)(M(n[r])||Array.isArray(n[r]))&&this.addResource(e,t,r,n[r],{silent:!0});r.silent||this.emit(`added`,e,t,n)}addResourceBundle(e,t,n,r,i,a={silent:!1,skipCopy:!1}){let o=[e,t];e.includes(`.`)&&(o=e.split(`.`),r=n,n=t,t=o[1]),this.addNamespaces(t);let s=L(this.data,o)||{};a.skipCopy||(n=JSON.parse(JSON.stringify(n))),r?R(s,n,i):s={...s,...n},ES(this.data,o,s),a.silent||this.emit(`added`,e,t,n)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit(`removed`,e,t)}hasResourceBundle(e,t){return this.getResource(e,t)!==void 0}getResourceBundle(e,t){return t||=this.options.defaultNS,this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){let t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(e=>t[e]&&Object.keys(t[e]).length>0)}toJSON(){return this.data}},G={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,n,r,i){return e.forEach(e=>{t=this.processors[e]?.process(t,n,r,i)??t}),t}},K=Symbol(`i18next/PATH_KEY`),q=e=>!M(e)&&typeof e!=`boolean`&&typeof e!=`number`,LS=class e extends U{constructor(e,t={}){super(),CS([`resourceStore`,`languageUtils`,`pluralResolver`,`interpolator`,`backendConnector`,`i18nFormat`,`utils`],e,this),this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator=`.`),this.logger=H.create(`translator`),this.checkedLoadedFor={}}changeLanguage(e){e&&(this.language=e)}exists(e,t={interpolation:{}}){let n={...t};if(e==null)return!1;let r=this.resolve(e,n);if(r?.res===void 0)return!1;let i=q(r.res);return!(n.returnObjects===!1&&i)}extractFromKey(e,t){let n=t.nsSeparator===void 0?this.options.nsSeparator:t.nsSeparator;n===void 0&&(n=`:`);let r=t.keySeparator===void 0?this.options.keySeparator:t.keySeparator,i=t.ns||this.options.defaultNS||[],a=n&&e.includes(n),o=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!PS(e,n,r);if(a&&!o){let t=e.match(this.interpolator.nestingRegexp);if(t&&t.length>0)return{key:e,namespaces:M(i)?[i]:i};let a=e.split(n);(n!==r||n===r&&this.options.ns.includes(a[0]))&&(i=a.shift()),e=a.join(r)}return{key:e,namespaces:M(i)?[i]:i}}translate(t,n,r){let i=typeof n==`object`?{...n}:n;if(typeof i!=`object`&&this.options.overloadTranslationOptionHandler&&(i=this.options.overloadTranslationOptionHandler(arguments)),typeof i==`object`&&(i={...i}),i||={},t==null)return``;typeof t==`function`&&(t=j(t,{...this.options,...i})),Array.isArray(t)||(t=[String(t)]),t=t.map(e=>typeof e==`function`?j(e,{...this.options,...i}):String(e));let a=i.returnDetails===void 0?this.options.returnDetails:i.returnDetails,o=i.keySeparator===void 0?this.options.keySeparator:i.keySeparator,{key:s,namespaces:c}=this.extractFromKey(t[t.length-1],i),l=c[c.length-1],u=i.nsSeparator===void 0?this.options.nsSeparator:i.nsSeparator;u===void 0&&(u=`:`);let d=i.lng||this.language,f=i.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(d?.toLowerCase()===`cimode`)return f?a?{res:`${l}${u}${s}`,usedKey:s,exactUsedKey:s,usedLng:d,usedNS:l,usedParams:this.getUsedParamsDetails(i)}:`${l}${u}${s}`:a?{res:s,usedKey:s,exactUsedKey:s,usedLng:d,usedNS:l,usedParams:this.getUsedParamsDetails(i)}:s;let p=this.resolve(t,i),m=p?.res,h=p?.usedKey||s,g=p?.exactUsedKey||s,_=[`[object Number]`,`[object Function]`,`[object RegExp]`],v=i.joinArrays===void 0?this.options.joinArrays:i.joinArrays,y=!this.i18nFormat||this.i18nFormat.handleAsObject,b=i.count!==void 0&&!M(i.count),x=e.hasDefaultValue(i),S=b?this.pluralResolver.getSuffix(d,i.count,i):``,C=i.ordinal&&b?this.pluralResolver.getSuffix(d,i.count,{ordinal:!1}):``,w=b&&!i.ordinal&&i.count===0,T=w&&i[`defaultValue${this.options.pluralSeparator}zero`]||i[`defaultValue${S}`]||i[`defaultValue${C}`]||i.defaultValue,E=m;y&&!m&&x&&(E=T);let D=q(E),O=Object.prototype.toString.apply(E);if(y&&E&&D&&!_.includes(O)&&!(M(v)&&Array.isArray(E))){if(!i.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn(`accessing an object - but returnObjects options is not enabled!`);let e=this.options.returnedObjectHandler?this.options.returnedObjectHandler(h,E,{...i,ns:c}):`key '${s} (${this.language})' returned an object instead of string.`;return a?(p.res=e,p.usedParams=this.getUsedParamsDetails(i),p):e}if(o){let e=Array.isArray(E),t=e?[]:{},n=e?g:h;for(let e in E)if(Object.prototype.hasOwnProperty.call(E,e)){let r=`${n}${o}${e}`;x&&!m?t[e]=this.translate(r,{...i,defaultValue:q(T)?T[e]:void 0,joinArrays:!1,ns:c}):t[e]=this.translate(r,{...i,joinArrays:!1,ns:c}),t[e]===r&&(t[e]=E[e])}m=t}}else if(y&&M(v)&&Array.isArray(m))m=m.join(v),m&&=this.extendTranslation(m,t,i,r);else{let e=!1,n=!1;!this.isValidLookup(m)&&x&&(e=!0,m=T),this.isValidLookup(m)||(n=!0,m=s);let a=(i.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&n?void 0:m,c=x&&T!==m&&this.options.updateMissing;if(n||e||c){if(this.logger.log(c?`updateKey`:`missingKey`,d,l,b&&!c?`${s}${this.pluralResolver.getSuffix(d,i.count,i)}`:s,c?T:m),o){let e=this.resolve(s,{...i,keySeparator:!1});e&&e.res&&this.logger.warn(`Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.`)}let e=[],t=this.languageUtils.getFallbackCodes(this.options.fallbackLng,i.lng||this.language);if(this.options.saveMissingTo===`fallback`&&t&&t[0])for(let n=0;n<t.length;n++)e.push(t[n]);else this.options.saveMissingTo===`all`?e=this.languageUtils.toResolveHierarchy(i.lng||this.language):e.push(i.lng||this.language);let n=(e,t,n)=>{let r=x&&n!==m?n:a;this.options.missingKeyHandler?this.options.missingKeyHandler(e,l,t,r,c,i):this.backendConnector?.saveMissing&&this.backendConnector.saveMissing(e,l,t,r,c,i),this.emit(`missingKey`,e,l,t,m)};this.options.saveMissing&&(this.options.saveMissingPlurals&&b?e.forEach(e=>{let t=this.pluralResolver.getSuffixes(e,i);w&&i[`defaultValue${this.options.pluralSeparator}zero`]&&!t.includes(`${this.options.pluralSeparator}zero`)&&t.push(`${this.options.pluralSeparator}zero`),t.forEach(t=>{n([e],s+t,i[`defaultValue${t}`]||T)})}):n(e,s,T))}m=this.extendTranslation(m,t,i,p,r),n&&m===s&&this.options.appendNamespaceToMissingKey&&(m=`${l}${u}${s}`),(n||e)&&this.options.parseMissingKeyHandler&&(m=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}${u}${s}`:s,e?m:void 0,i))}return a?(p.res=m,p.usedParams=this.getUsedParamsDetails(i),p):m}extendTranslation(e,t,n,r,i){if(this.i18nFormat?.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...n},n.lng||this.language||r.usedLng,r.usedNS,r.usedKey,{resolved:r});else if(!n.skipInterpolation){n.interpolation&&this.interpolator.init({...n,interpolation:{...this.options.interpolation,...n.interpolation}});let a=M(e)&&(n?.interpolation?.skipOnVariables===void 0?this.options.interpolation.skipOnVariables:n.interpolation.skipOnVariables),o;if(a){let t=e.match(this.interpolator.nestingRegexp);o=t&&t.length}let s=n.replace&&!M(n.replace)?n.replace:n;if(this.options.interpolation.defaultVariables&&(s={...this.options.interpolation.defaultVariables,...s}),e=this.interpolator.interpolate(e,s,n.lng||this.language||r.usedLng,n),a){let t=e.match(this.interpolator.nestingRegexp),r=t&&t.length;o<r&&(n.nest=!1)}!n.lng&&r&&r.res&&(n.lng=this.language||r.usedLng),n.nest!==!1&&(e=this.interpolator.nest(e,(...e)=>i?.[0]===e[0]&&!n.context?(this.logger.warn(`It seems you are nesting recursively key: ${e[0]} in key: ${t[0]}`),null):this.translate(...e,t),n)),n.interpolation&&this.interpolator.reset()}let a=n.postProcess||this.options.postProcess,o=M(a)?[a]:a;return e!=null&&o?.length&&n.applyPostProcessor!==!1&&(e=G.handle(o,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...r,usedParams:this.getUsedParamsDetails(n)},...n}:n,this)),e}resolve(e,t={}){let n,r,i,a,o;return M(e)&&(e=[e]),Array.isArray(e)&&(e=e.map(e=>typeof e==`function`?j(e,{...this.options,...t}):e)),e.forEach(e=>{if(this.isValidLookup(n))return;let s=this.extractFromKey(e,t),c=s.key;r=c;let l=s.namespaces;this.options.fallbackNS&&(l=l.concat(this.options.fallbackNS));let u=t.count!==void 0&&!M(t.count),d=u&&!t.ordinal&&t.count===0,f=t.context!==void 0&&(M(t.context)||typeof t.context==`number`)&&t.context!==``,p=t.lngs?t.lngs:this.languageUtils.toResolveHierarchy(t.lng||this.language,t.fallbackLng);l.forEach(e=>{this.isValidLookup(n)||(o=e,!this.checkedLoadedFor[`${p[0]}-${e}`]&&this.utils?.hasLoadedNamespace&&!this.utils?.hasLoadedNamespace(o)&&(this.checkedLoadedFor[`${p[0]}-${e}`]=!0,this.logger.warn(`key "${r}" for languages "${p.join(`, `)}" won't get resolved as namespace "${o}" was not yet loaded`,`This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!`)),p.forEach(r=>{if(this.isValidLookup(n))return;a=r;let o=[c];if(this.i18nFormat?.addLookupKeys)this.i18nFormat.addLookupKeys(o,c,r,e,t);else{let e;u&&(e=this.pluralResolver.getSuffix(r,t.count,t));let n=`${this.options.pluralSeparator}zero`,i=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(u&&(t.ordinal&&e.startsWith(i)&&o.push(c+e.replace(i,this.options.pluralSeparator)),o.push(c+e),d&&o.push(c+n)),f){let r=`${c}${this.options.contextSeparator||`_`}${t.context}`;o.push(r),u&&(t.ordinal&&e.startsWith(i)&&o.push(r+e.replace(i,this.options.pluralSeparator)),o.push(r+e),d&&o.push(r+n))}}let s;for(;s=o.pop();)this.isValidLookup(n)||(i=s,n=this.getResource(r,e,s,t))}))})}),{res:n,usedKey:r,exactUsedKey:i,usedLng:a,usedNS:o}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e===``)}getResource(e,t,n,r={}){return this.i18nFormat?.getResource?this.i18nFormat.getResource(e,t,n,r):this.resourceStore.getResource(e,t,n,r)}getUsedParamsDetails(e={}){let t=[`defaultValue`,`ordinal`,`context`,`replace`,`lng`,`lngs`,`fallbackLng`,`ns`,`keySeparator`,`nsSeparator`,`returnObjects`,`returnDetails`,`joinArrays`,`postProcess`,`interpolation`],n=e.replace&&!M(e.replace),r=n?e.replace:e;if(n&&e.count!==void 0&&(r={...r,count:e.count}),this.options.interpolation.defaultVariables&&(r={...this.options.interpolation.defaultVariables,...r}),!n){r={...r};for(let e of t)delete r[e]}return r}static hasDefaultValue(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&t.startsWith(`defaultValue`)&&e[t]!==void 0)return!0;return!1}},J=class{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=H.create(`languageUtils`),this.resolveHierarchyCache={}}clearCache(){this.resolveHierarchyCache={}}getScriptPartFromCode(e){if(e=V(e),!e||!e.includes(`-`))return null;let t=e.split(`-`);return t.length===2||(t.pop(),t[t.length-1].toLowerCase()===`x`)?null:this.formatLanguageCode(t.join(`-`))}getLanguagePartFromCode(e){if(e=V(e),!e||!e.includes(`-`))return e;let t=e.split(`-`);return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(M(e)&&e.includes(`-`)){let t;try{t=Intl.getCanonicalLocales(e)[0]}catch{}return t&&this.options.lowerCaseLng&&(t=t.toLowerCase()),t||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load===`languageOnly`||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.includes(e)}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(e=>{if(t)return;let n=this.formatLanguageCode(e);(!this.options.supportedLngs||this.isSupportedCode(n))&&(t=n)}),!t&&this.options.supportedLngs&&e.forEach(e=>{if(t)return;let n=this.getScriptPartFromCode(e);if(this.isSupportedCode(n))return t=n;let r=this.getLanguagePartFromCode(e);if(this.isSupportedCode(r))return t=r;t=this.options.supportedLngs.find(e=>e===r?!0:!e.includes(`-`)&&!r.includes(`-`)?!1:!!(e.includes(`-`)&&!r.includes(`-`)&&e.slice(0,e.indexOf(`-`))===r||e.startsWith(r)&&r.length>1))}),t||=this.getFallbackCodes(this.options.fallbackLng)[0],t}getFallbackCodes(e,t){if(!e)return[];if(typeof e==`function`&&(e=e(t)),M(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let n=e[t];return n||=e[this.getScriptPartFromCode(t)],n||=e[this.formatLanguageCode(t)],n||=e[this.getLanguagePartFromCode(t)],n||=e.default,n||[]}toResolveHierarchy(e,t){let n=this.options.fallbackLng,r=Array.isArray(n)?n.join(`|`):n;r!==this._cachedFallbackLng&&(this.resolveHierarchyCache={},this._cachedFallbackLng=r);let i=t===void 0||t===!1||M(t),a=t===void 0&&typeof this.options.fallbackLng==`function`,o=M(e)&&i&&!a,s=null;if(o){let n;n=t===void 0?`undefined`:t===!1?`boolean:false`:`string:${t}`,s=`${e.length}:${e}|${n}`}if(s!==null){let e=this.resolveHierarchyCache[s];if(e!==void 0)return e.slice()}let c=this.getFallbackCodes((t===!1?[]:t)||this.options.fallbackLng||[],e),l=[],u=e=>{e&&(this.isSupportedCode(e)?l.push(e):this.logger.warn(`rejecting language code not found in supportedLngs: ${e}`))};return M(e)&&(e.includes(`-`)||e.includes(`_`))?(this.options.load!==`languageOnly`&&u(this.formatLanguageCode(e)),this.options.load!==`languageOnly`&&this.options.load!==`currentOnly`&&u(this.getScriptPartFromCode(e)),this.options.load!==`currentOnly`&&u(this.getLanguagePartFromCode(e))):M(e)&&u(this.formatLanguageCode(e)),c.forEach(e=>{l.includes(e)||u(this.formatLanguageCode(e))}),s===null?l:(this.resolveHierarchyCache[s]=l,l.slice())}},RS={zero:0,one:1,two:2,few:3,many:4,other:5},zS={select:e=>e===1?`one`:`other`,resolvedOptions:()=>({pluralCategories:[`one`,`other`]})},BS=class{constructor(e,t={}){this.languageUtils=e,this.options=t,this.logger=H.create(`pluralResolver`),this.pluralRulesCache={}}clearCache(){this.pluralRulesCache={}}getRule(e,t={}){let n=V(e===`dev`?`en`:e),r=t.ordinal?`ordinal`:`cardinal`,i=JSON.stringify({cleanedCode:n,type:r});if(i in this.pluralRulesCache)return this.pluralRulesCache[i];let a;try{a=new Intl.PluralRules(n,{type:r})}catch{if(typeof Intl>`u`)return this.logger.error(`No Intl support, please use an Intl polyfill!`),zS;if(!e.match(/-|_/))return zS;let n=this.languageUtils.getLanguagePartFromCode(e);a=this.getRule(n,t)}return this.pluralRulesCache[i]=a,a}needsPlural(e,t={}){let n=this.getRule(e,t);return n||=this.getRule(`dev`,t),n?.resolvedOptions().pluralCategories.length>1}getPluralFormsOfKey(e,t,n={}){return this.getSuffixes(e,n).map(e=>`${t}${e}`)}getSuffixes(e,t={}){let n=this.getRule(e,t);return n||=this.getRule(`dev`,t),n?n.resolvedOptions().pluralCategories.sort((e,t)=>RS[e]-RS[t]).map(e=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:``}${e}`):[]}getSuffix(e,t,n={}){let r=this.getRule(e,n);return r?`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:``}${r.select(t)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix(`dev`,t,n))}},VS=(e,t,n,r=`.`,i=!0)=>{let a=OS(e,t,n);return!a&&i&&M(n)&&(a=B(e,n,r),a===void 0&&(a=B(t,n,r))),a},HS=e=>e.replace(/\$/g,`$$$$`),US=class{constructor(e={}){this.logger=H.create(`interpolator`),this.options=e,this.format=e?.interpolation?.format||(e=>e),this.init(e)}init(e={}){e.interpolation||={escapeValue:!0};let{escape:t,escapeValue:n,useRawValueToEscape:r,prefix:i,prefixEscaped:a,suffix:o,suffixEscaped:s,formatSeparator:c,unescapeSuffix:l,unescapePrefix:u,nestingPrefix:d,nestingPrefixEscaped:f,nestingSuffix:p,nestingSuffixEscaped:m,nestingOptionsSeparator:h,maxReplaces:g,alwaysFormat:_}=e.interpolation;this.escape=t===void 0?AS:t,this.escapeValue=n===void 0?!0:n,this.useRawValueToEscape=r===void 0?!1:r,this.prefix=i?z(i):a||`{{`,this.suffix=o?z(o):s||`}}`,this.formatSeparator=c||`,`,this.unescapePrefix=l?``:u?z(u):`-`,this.unescapeSuffix=this.unescapePrefix?``:l?z(l):``,this.nestingPrefix=d?z(d):f||z(`$t(`),this.nestingSuffix=p?z(p):m||z(`)`),this.nestingOptionsSeparator=h||`,`,this.maxReplaces=g||1e3,this.alwaysFormat=_===void 0?!1:_,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){let e=(e,t)=>e?.source===t?(e.lastIndex=0,e):new RegExp(t,`g`);this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)}interpolate(e,t,n,r){let i,a,o,s=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=e=>{if(!e.includes(this.formatSeparator)){let i=VS(t,s,e,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(i,void 0,n,{...r,...t,interpolationkey:e}):i}let i=e.split(this.formatSeparator),a=i.shift().trim(),o=i.join(this.formatSeparator).trim();return this.format(VS(t,s,a,this.options.keySeparator,this.options.ignoreJSONStructure),o,n,{...r,...t,interpolationkey:a})};this.resetRegExp(),!this.escapeValue&&typeof e==`string`&&/\$t\([^)]*\{[^}]*\{\{/.test(e)&&this.logger.warn(`nesting options string contains interpolated variables with escapeValue: false — if any of those values are attacker-controlled they can inject additional nesting options (e.g. redirect lng/ns). Sanitise untrusted input before passing it to t(), or keep escapeValue: true.`);let l=r?.missingInterpolationHandler||this.options.missingInterpolationHandler,u=r?.interpolation?.skipOnVariables===void 0?this.options.interpolation.skipOnVariables:r.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:e=>e},{regex:this.regexp,safeValue:e=>this.escapeValue?this.escape(e):e}].forEach(t=>{for(o=0;i=t.regex.exec(e);){let n=i[1].trim();if(a=c(n),a===void 0)if(typeof l==`function`){let t=l(e,i,r);a=M(t)?t:``}else if(r&&Object.prototype.hasOwnProperty.call(r,n))a=``;else if(u){a=i[0];continue}else this.logger.warn(`missed to pass in variable ${n} for interpolating ${e}`),a=``;else !M(a)&&!this.useRawValueToEscape&&(a=P(a));let s=t.safeValue(a);if(e=e.replace(i[0],HS(s)),u?(t.regex.lastIndex+=s.length,t.regex.lastIndex-=i[0].length):t.regex.lastIndex=0,o++,o>=this.maxReplaces)break}}),e}nest(e,t,n={}){let r,i,a,o=(e,t)=>{let n=this.nestingOptionsSeparator;if(!e.includes(n))return e;let r=e.split(RegExp(`${z(n)}[ ]*{`)),i=`{${r[1]}`;e=r[0],i=this.interpolate(i,a);let o=i.match(/'/g),s=i.match(/"/g);((o?.length??0)%2==0&&!s||(s?.length??0)%2!=0)&&(i=i.replace(/'/g,`"`));try{a=JSON.parse(i),t&&(a={...t,...a})}catch(t){return this.logger.warn(`failed parsing options string in nesting for key ${e}`,t),`${e}${n}${i}`}return a.defaultValue&&a.defaultValue.includes(this.prefix)&&delete a.defaultValue,e};for(;r=this.nestingRegexp.exec(e);){let s=[];a={...n},a=a.replace&&!M(a.replace)?a.replace:a,a.applyPostProcessor=!1,delete a.defaultValue;let c=/{.*}/s.test(r[1])?r[1].lastIndexOf(`}`)+1:r[1].indexOf(this.formatSeparator);if(c!==-1&&(s=r[1].slice(c).split(this.formatSeparator).map(e=>e.trim()).filter(Boolean),r[1]=r[1].slice(0,c)),i=t(o.call(this,r[1].trim(),a),a),i&&r[0]===e&&!M(i))return i;M(i)||(i=P(i)),i||=(this.logger.warn(`missed to resolve ${r[1]} for nesting ${e}`),``),s.length&&(i=s.reduce((e,t)=>this.format(e,t,n.lng,{...n,interpolationkey:r[1].trim()}),i.trim())),e=e.replace(r[0],HS(P(i))),this.regexp.lastIndex=0}return e}},WS=e=>{let t=e.toLowerCase().trim(),n={};if(e.includes(`(`)){let r=e.split(`(`);t=r[0].toLowerCase().trim();let i=r[1].slice(0,-1);t===`currency`&&!i.includes(`:`)?n.currency||=i.trim():t===`relativetime`&&!i.includes(`:`)?n.range||=i.trim():i.split(`;`).forEach(e=>{if(e){let[t,...r]=e.split(`:`),i=r.join(`:`).trim().replace(/^'+|'+$/g,``),a=t.trim();n[a]||(n[a]=i),i===`false`&&(n[a]=!1),i===`true`&&(n[a]=!0),isNaN(i)||(n[a]=parseInt(i,10))}})}return{formatName:t,formatOptions:n}},GS=e=>{let t={};return(n,r,i)=>{let a=i;i&&i.interpolationkey&&i.formatParams&&i.formatParams[i.interpolationkey]&&i[i.interpolationkey]&&(a={...a,[i.interpolationkey]:void 0});let o=r+JSON.stringify(a),s=t[o];return s||(s=e(V(r),i),t[o]=s),s(n)}},KS=e=>(t,n,r)=>e(V(n),r)(t),qS=class{constructor(e={}){this.logger=H.create(`formatter`),this.options=e,this.init(e)}init(e,t={interpolation:{}}){this.formatSeparator=t.interpolation.formatSeparator||`,`;let n=t.cacheInBuiltFormats?GS:KS;this.formats={number:n((e,t)=>{let n=new Intl.NumberFormat(e,{...t});return e=>n.format(e)}),currency:n((e,t)=>{let n=new Intl.NumberFormat(e,{...t,style:`currency`});return e=>n.format(e)}),datetime:n((e,t)=>{let n=new Intl.DateTimeFormat(e,{...t});return e=>n.format(e)}),relativetime:n((e,t)=>{let n=new Intl.RelativeTimeFormat(e,{...t});return e=>n.format(e,t.range||`day`)}),list:n((e,t)=>{let n=new Intl.ListFormat(e,{...t});return e=>n.format(e)})}}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=GS(t)}format(e,t,n,r={}){if(!t||e==null)return e;let i=t.split(this.formatSeparator),a=[];for(let e=0;e<i.length;e++){let t=i[e];for(;t.indexOf(`(`)>-1&&!t.includes(`)`)&&e+1<i.length;)t=`${t}${this.formatSeparator}${i[++e]}`;a.push(t)}return a.reduce((e,t)=>{let{formatName:i,formatOptions:a}=WS(t);if(this.formats[i]){let t=e;try{let o=r?.formatParams?.[r.interpolationkey]||{},s=o.locale||o.lng||r.locale||r.lng||n;t=this.formats[i](e,s,{...a,...r,...o})}catch(e){this.logger.warn(e)}return t}else this.logger.warn(`there was no format function for ${i}`);return e},e)}},JS=(e,t)=>{e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)},YS=class extends U{constructor(e,t,n,r={}){super(),this.backend=e,this.store=t,this.services=n,this.languageUtils=n.languageUtils,this.options=r,this.logger=H.create(`backendConnector`),this.waitingReads=[],this.maxParallelReads=r.maxParallelReads||10,this.readingCalls=0,this.maxRetries=r.maxRetries>=0?r.maxRetries:5,this.retryTimeout=r.retryTimeout>=1?r.retryTimeout:350,this.state={},this.queue=[],this.backend?.init?.(n,r.backend,r)}queueLoad(e,t,n,r){let i={},a={},o={},s={};return e.forEach(e=>{let r=!0;t.forEach(t=>{let o=`${e}|${t}`;!n.reload&&this.store.hasResourceBundle(e,t)?this.state[o]=2:this.state[o]<0||(this.state[o]===1?a[o]===void 0&&(a[o]=!0):(this.state[o]=1,r=!1,a[o]===void 0&&(a[o]=!0),i[o]===void 0&&(i[o]=!0),s[t]===void 0&&(s[t]=!0)))}),r||(o[e]=!0)}),(Object.keys(i).length||Object.keys(a).length)&&this.queue.push({pending:a,pendingCount:Object.keys(a).length,loaded:{},errors:[],callback:r}),{toLoad:Object.keys(i),pending:Object.keys(a),toLoadLanguages:Object.keys(o),toLoadNamespaces:Object.keys(s)}}loaded(e,t,n){let r=e.split(`|`),i=r[0],a=r[1];t&&this.emit(`failedLoading`,i,a,t),!t&&n&&this.store.addResourceBundle(i,a,n,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&n&&(this.state[e]=0);let o={};this.queue.forEach(n=>{DS(n.loaded,[i],a),JS(n,e),t&&n.errors.push(t),n.pendingCount===0&&!n.done&&(Object.keys(n.loaded).forEach(e=>{o[e]||(o[e]={});let t=n.loaded[e];t.length&&t.forEach(t=>{o[e][t]===void 0&&(o[e][t]=!0)})}),n.done=!0,n.errors.length?n.callback(n.errors):n.callback())}),this.emit(`loaded`,o),this.queue=this.queue.filter(e=>!e.done)}read(e,t,n,r=0,i=this.retryTimeout,a){if(!e.length)return a(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:t,fcName:n,tried:r,wait:i,callback:a});return}this.readingCalls++;let o=(o,s)=>{if(this.readingCalls--,this.waitingReads.length>0){let e=this.waitingReads.shift();this.read(e.lng,e.ns,e.fcName,e.tried,e.wait,e.callback)}if(o&&s&&r<this.maxRetries){setTimeout(()=>{this.read(e,t,n,r+1,i*2,a)},i);return}a(o,s)},s=this.backend[n].bind(this.backend);if(s.length===2){try{let n=s(e,t);n&&typeof n.then==`function`?n.then(e=>o(null,e)).catch(o):o(null,n)}catch(e){o(e)}return}return s(e,t,o)}prepareLoading(e,t,n={},r){if(!this.backend)return this.logger.warn(`No backend was added via i18next.use. Will not load resources.`),r&&r();M(e)&&(e=this.languageUtils.toResolveHierarchy(e)),M(t)&&(t=[t]);let i=this.queueLoad(e,t,n,r);if(!i.toLoad.length)return i.pending.length||r(),null;i.toLoad.forEach(e=>{this.loadOne(e)})}load(e,t,n){this.prepareLoading(e,t,{},n)}reload(e,t,n){this.prepareLoading(e,t,{reload:!0},n)}loadOne(e,t=``){let n=e.split(`|`),r=n[0],i=n[1];this.read(r,i,`read`,void 0,void 0,(n,a)=>{n&&this.logger.warn(`${t}loading namespace ${i} for language ${r} failed`,n),!n&&a&&this.logger.log(`${t}loaded namespace ${i} for language ${r}`,a),this.loaded(e,n,a)})}saveMissing(e,t,n,r,i,a={},o=()=>{}){if(this.services?.utils?.hasLoadedNamespace&&!this.services?.utils?.hasLoadedNamespace(t)){this.logger.warn(`did not save key "${n}" as the namespace "${t}" was not yet loaded`,`This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!`);return}if(!(n==null||n===``)){if(this.backend?.create){let s={...a,isUpdate:i},c=this.backend.create.bind(this.backend);if(c.length<6)try{let i;i=c.length===5?c(e,t,n,r,s):c(e,t,n,r),i&&typeof i.then==`function`?i.then(e=>o(null,e)).catch(o):o(null,i)}catch(e){o(e)}else c(e,t,n,r,o,s)}!e||!e[0]||this.store.addResource(e[0],t,n,r)}}},Y=()=>({debug:!1,initAsync:!0,ns:[`translation`],defaultNS:[`translation`],fallbackLng:[`dev`],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:`all`,preload:!1,keySeparator:`.`,nsSeparator:`:`,pluralSeparator:`_`,contextSeparator:`_`,enableSelector:!1,partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:`fallback`,saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:e=>{let t={};if(typeof e[1]==`object`&&(t=e[1]),M(e[1])&&(t.defaultValue=e[1]),M(e[2])&&(t.tDescription=e[2]),typeof e[2]==`object`||typeof e[3]==`object`){let n=e[3]||e[2];Object.keys(n).forEach(e=>{t[e]=n[e]})}return t},interpolation:{escapeValue:!0,prefix:`{{`,suffix:`}}`,formatSeparator:`,`,unescapePrefix:`-`,nestingPrefix:`$t(`,nestingSuffix:`)`,nestingOptionsSeparator:`,`,maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),XS=e=>(M(e.ns)&&(e.ns=[e.ns]),M(e.fallbackLng)&&(e.fallbackLng=[e.fallbackLng]),M(e.fallbackNS)&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&!e.supportedLngs.includes(`cimode`)&&(e.supportedLngs=e.supportedLngs.concat([`cimode`])),e),X=()=>{},ZS=e=>{Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(t=>{typeof e[t]==`function`&&(e[t]=e[t].bind(e))})},QS=class e extends U{constructor(e={},t){if(super(),this.options=XS(e),this.services={},this.logger=H,this.modules={external:[]},ZS(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(e={},t){this.isInitializing=!0,typeof e==`function`&&(t=e,e={}),e.defaultNS==null&&e.ns&&(M(e.ns)?e.defaultNS=e.ns:e.ns.includes(`translation`)||(e.defaultNS=e.ns[0]));let n=Y();this.options={...n,...this.options,...XS(e)},this.options.interpolation={...n.interpolation,...this.options.interpolation},e.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=e.keySeparator),e.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=e.nsSeparator),typeof this.options.overloadTranslationOptionHandler!=`function`&&(this.options.overloadTranslationOptionHandler=n.overloadTranslationOptionHandler);let r=e=>e?typeof e==`function`?new e:e:null;if(!this.options.isClone){this.modules.logger?H.init(r(this.modules.logger),this.options):H.init(null,this.options);let e;e=this.modules.formatter?this.modules.formatter:qS;let t=new J(this.options);this.store=new W(this.options.resources,this.options);let n=this.services;n.logger=H,n.resourceStore=this.store,n.languageUtils=t,n.pluralResolver=new BS(t,{prepend:this.options.pluralSeparator}),e&&(n.formatter=r(e),n.formatter.init&&n.formatter.init(n,this.options),this.options.interpolation.format=n.formatter.format.bind(n.formatter)),n.interpolator=new US(this.options),n.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},n.backendConnector=new YS(r(this.modules.backend),n.resourceStore,n,this.options),n.backendConnector.on(`*`,(e,...t)=>{this.emit(e,...t)}),this.modules.languageDetector&&(n.languageDetector=r(this.modules.languageDetector),n.languageDetector.init&&n.languageDetector.init(n,this.options.detection,this.options)),this.modules.i18nFormat&&(n.i18nFormat=r(this.modules.i18nFormat),n.i18nFormat.init&&n.i18nFormat.init(this)),this.translator=new LS(this.services,this.options),this.translator.on(`*`,(e,...t)=>{this.emit(e,...t)}),this.modules.external.forEach(e=>{e.init&&e.init(this)})}if(this.format=this.options.interpolation.format,t||=X,this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){let e=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);e.length>0&&e[0]!==`dev`&&(this.options.lng=e[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn(`init: no languageDetector is used and no lng is defined`),[`getResource`,`hasResourceBundle`,`getResourceBundle`,`getDataByLanguage`].forEach(e=>{this[e]=(...t)=>this.store[e](...t)}),[`addResource`,`addResources`,`addResourceBundle`,`removeResourceBundle`].forEach(e=>{this[e]=(...t)=>(this.store[e](...t),this)});let i=N(),a=()=>{let e=(e,n)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn(`init: i18next is already initialized. You should call init just once!`),this.isInitialized=!0,this.options.isClone||this.logger.log(`initialized`,this.options),this.emit(`initialized`,this.options),i.resolve(n),t(e,n)};if((this.languages||this.isLanguageChangingTo)&&!this.isInitialized)return e(null,this.t.bind(this));this.changeLanguage(this.options.lng,e)};return this.options.resources||!this.options.initAsync?a():setTimeout(a,0),i}loadResources(e,t=X){let n=t,r=M(e)?e:this.language;if(typeof e==`function`&&(n=e),!this.options.resources||this.options.partialBundledLanguages){if(r?.toLowerCase()===`cimode`&&(!this.options.preload||this.options.preload.length===0))return n();let e=[],t=t=>{t&&t!==`cimode`&&this.services.languageUtils.toResolveHierarchy(t).forEach(t=>{t!==`cimode`&&(e.includes(t)||e.push(t))})};r?t(r):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(e=>t(e)),this.options.preload?.forEach?.(e=>t(e)),this.services.backendConnector.load(e,this.options.ns,e=>{!e&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),n(e)})}else n(null)}reloadResources(e,t,n){let r=N();return typeof e==`function`&&(n=e,e=void 0),typeof t==`function`&&(n=t,t=void 0),e||=this.languages,t||=this.options.ns,n||=X,this.services.backendConnector.reload(e,t,e=>{r.resolve(),n(e)}),r}use(e){if(!e)throw Error(`You are passing an undefined module! Please check the object you are passing to i18next.use()`);if(!e.type)throw Error(`You are passing a wrong module! Please check the object you are passing to i18next.use()`);return e.type===`backend`&&(this.modules.backend=e),(e.type===`logger`||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type===`languageDetector`&&(this.modules.languageDetector=e),e.type===`i18nFormat`&&(this.modules.i18nFormat=e),e.type===`postProcessor`&&G.addPostProcessor(e),e.type===`formatter`&&(this.modules.formatter=e),e.type===`3rdParty`&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&![`cimode`,`dev`].includes(e)){for(let e=0;e<this.languages.length;e++){let t=this.languages[e];if(![`cimode`,`dev`].includes(t)&&this.store.hasLanguageSomeTranslations(t)){this.resolvedLanguage=t;break}}!this.resolvedLanguage&&!this.languages.includes(e)&&this.store.hasLanguageSomeTranslations(e)&&(this.resolvedLanguage=e,this.languages.unshift(e))}}changeLanguage(e,t){this.isLanguageChangingTo=e;let n=N();this.emit(`languageChanging`,e);let r=e=>{this.language=e,this.languages=this.services.languageUtils.toResolveHierarchy(e),this.resolvedLanguage=void 0,this.setResolvedLanguage(e)},i=(i,a)=>{a?this.isLanguageChangingTo===e&&(r(a),this.translator.changeLanguage(a),this.isLanguageChangingTo=void 0,this.emit(`languageChanged`,a),this.logger.log(`languageChanged`,a)):this.isLanguageChangingTo=void 0,n.resolve((...e)=>this.t(...e)),t&&t(i,(...e)=>this.t(...e))},a=t=>{!e&&!t&&this.services.languageDetector&&(t=[]);let n=M(t)?t:t&&t[0],a=this.store.hasLanguageSomeTranslations(n)?n:this.services.languageUtils.getBestMatchFromCodes(M(t)?[t]:t);a&&(this.language||r(a),this.translator.language||this.translator.changeLanguage(a),this.services.languageDetector?.cacheUserLanguage?.(a)),this.loadResources(a,e=>{i(e,a)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?a(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(e),n}getFixedT(e,t,n,r){let i=r?.scopeNs,a=(e,t,...r)=>{let o;o=typeof t==`object`?{...t}:this.options.overloadTranslationOptionHandler([e,t].concat(r)),o.lng=o.lng||a.lng,o.lngs=o.lngs||a.lngs;let s=o.ns!==void 0&&o.ns!==null;o.ns=o.ns||a.ns,o.keyPrefix!==``&&(o.keyPrefix=o.keyPrefix||n||a.keyPrefix);let c={...this.options,...o};Array.isArray(i)&&!s&&(c.ns=i),typeof o.keyPrefix==`function`&&(o.keyPrefix=j(o.keyPrefix,c));let l=this.options.keySeparator||`.`,u;return o.keyPrefix&&Array.isArray(e)?u=e.map(e=>(typeof e==`function`&&(e=j(e,c)),`${o.keyPrefix}${l}${e}`)):(typeof e==`function`&&(e=j(e,c)),u=o.keyPrefix?`${o.keyPrefix}${l}${e}`:e),this.t(u,o)};return M(e)?a.lng=e:a.lngs=e,a.ns=t,a.keyPrefix=n,a}t(...e){return this.translator?.translate(...e)}exists(...e){return this.translator?.exists(...e)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e,t={}){if(!this.isInitialized)return this.logger.warn(`hasLoadedNamespace: i18next was not initialized`,this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn(`hasLoadedNamespace: i18n.languages were undefined or empty`,this.languages),!1;let n=t.lng||this.resolvedLanguage||this.languages[0],r=this.options?this.options.fallbackLng:!1,i=this.languages[this.languages.length-1];if(n.toLowerCase()===`cimode`)return!0;let a=(e,t)=>{let n=this.services.backendConnector.state[`${e}|${t}`];return n===-1||n===0||n===2};if(t.precheck){let e=t.precheck(this,a);if(e!==void 0)return e}return!!(this.hasResourceBundle(n,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||a(n,e)&&(!r||a(i,e)))}loadNamespaces(e,t){let n=N();return this.options.ns?(M(e)&&(e=[e]),e.forEach(e=>{this.options.ns.includes(e)||this.options.ns.push(e)}),this.loadResources(e=>{n.resolve(),t&&t(e)}),n):(t&&t(),Promise.resolve())}loadLanguages(e,t){let n=N();M(e)&&(e=[e]);let r=this.options.preload||[],i=e.filter(e=>!r.includes(e)&&this.services.languageUtils.isSupportedCode(e));return i.length?(this.options.preload=r.concat(i),this.loadResources(e=>{n.resolve(),t&&t(e)}),n):(t&&t(),Promise.resolve())}dir(e){if(e||=this.resolvedLanguage||(this.languages?.length>0?this.languages[0]:this.language),!e)return`rtl`;try{let t=new Intl.Locale(e);if(t&&t.getTextInfo){let e=t.getTextInfo();if(e&&e.direction)return e.direction}}catch{}let t=`ar.shu.sqr.ssh.xaa.yhd.yud.aao.abh.abv.acm.acq.acw.acx.acy.adf.ads.aeb.aec.afb.ajp.apc.apd.arb.arq.ars.ary.arz.auz.avl.ayh.ayl.ayn.ayp.bbz.pga.he.iw.ps.pbt.pbu.pst.prp.prd.ug.ur.ydd.yds.yih.ji.yi.hbo.men.xmn.fa.jpr.peo.pes.prs.dv.sam.ckb`.split(`.`),n=this.services?.languageUtils||new J(Y());return e.toLowerCase().indexOf(`-latn`)>1?`ltr`:t.includes(n.getLanguagePartFromCode(e))||e.toLowerCase().indexOf(`-arab`)>1?`rtl`:`ltr`}static createInstance(t={},n){let r=new e(t,n);return r.createInstance=e.createInstance,r}cloneInstance(t={},n=X){let r=t.forkResourceStore;r&&delete t.forkResourceStore;let i={...this.options,...t,isClone:!0},a=new e(i);if((t.debug!==void 0||t.prefix!==void 0)&&(a.logger=a.logger.clone(t)),[`store`,`services`,`language`].forEach(e=>{a[e]=this[e]}),a.services={...this.services},a.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},r&&(a.store=new W(Object.keys(this.store.data).reduce((e,t)=>(e[t]={...this.store.data[t]},e[t]=Object.keys(e[t]).reduce((n,r)=>(n[r]={...e[t][r]},n),e[t]),e),{}),i),a.services.resourceStore=a.store),t.interpolation){let e={...Y().interpolation,...this.options.interpolation,...t.interpolation},n={...i,interpolation:e};a.services.interpolator=new US(n)}return a.translator=new LS(a.services,i),a.translator.on(`*`,(e,...t)=>{a.emit(e,...t)}),a.init(i,n),a.translator.options=i,a.translator.backendConnector.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},a}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}},Z=QS.createInstance(),Z.createInstance,Z.dir,Z.init,Z.loadResources,Z.reloadResources,Z.use,Z.changeLanguage,Z.getFixedT,$S=Z.t,Z.exists,Z.setDefaultNamespace,Z.hasLoadedNamespace,Z.loadNamespaces,Z.loadLanguages})),tC,nC,rC,iC,aC=e((()=>{Oe(),xS(),eC(),r(),tC=e=>e.button===0&&!e.altKey&&!e.ctrlKey&&!e.metaKey&&!e.shiftKey,nC=e=>e?.dispatchEvent(new Event(`select`,{bubbles:!0})),rC=e=>typeof e==`string`&&e?e:$S(`More`)||`More`,iC=({items:e,overflows:n,active:r,label:i,onItemClick:a})=>t`
	<cosmoz-dropdown-next
		class="more"
		part="more"
		placement="bottom span-left"
		?hidden=${!n}
		?data-active=${r}
	>
		<button
			class="more-button"
			part="more-button"
			slot="button"
			type="button"
			aria-expanded="false"
			aria-haspopup="true"
			aria-controls="more-menu"
		>
			<span>${rC(i)}</span>
			<span class="chevron" aria-hidden="true"
				>${Ui({width:`16`,height:`16`})}</span
			>
		</button>
		<div
			id="more-menu"
			class="menu"
			part="menu"
			role="tablist"
			aria-orientation="vertical"
			@click=${a}
		>
			${e}
		</div>
	</cosmoz-dropdown-next>
`})),Q,$,oC,sC,cC,lC,uC,dC,fC,pC=e((()=>{aC(),Q=e=>!e.hasAttribute(`disabled`)&&!e.hasAttribute(`hidden`)&&!e.hasAttribute(`overflowing`),$=(e,t,n)=>{e.getAttribute(t)!==n&&(n==null?e.removeAttribute(t):e.setAttribute(t,n))},oC=(e,t)=>{[`active`,`disabled`,`hidden`,`href`,`name`,`badge`,`title`,`role`].forEach(n=>$(t,n,e.getAttribute(n))),$(t,`aria-selected`,t.hasAttribute(`active`)?`true`:`false`),$(t,`aria-disabled`,e.hasAttribute(`disabled`)?`true`:null),t.setAttribute(`tabindex`,`-1`)},sC=e=>{e.forEach(([,e])=>{Q(e)&&e.setAttribute(`tabindex`,`0`)})},cC=e=>{let t=e.find(e=>e.hasAttribute(`active`));return t==null?null:Q(t)?t:[...e.slice(0,e.indexOf(t))].reverse().find(Q)??null},lC=e=>{let t=e.cloneNode(!0);return[`variant`,`size`,`compact-width`,`overflowing`,`style`].forEach(e=>t.removeAttribute(e)),t.setAttribute(`menu`,``),t},uC=(e,t)=>{t.innerHTML!==e.innerHTML&&t.replaceChildren(...[...e.childNodes].map(e=>e.cloneNode(!0))),oC(e,t)},dC=e=>new MouseEvent(`click`,e),fC=e=>t=>{let n=t.composedPath(),r=e.find(([,e])=>n.includes(e));if(!r)return;let[i,a]=r;t.stopPropagation(),i.dispatchEvent(dC(t))||t.preventDefault(),tC(t)&&nC(a)}})),mC,hC=e((()=>{v(),mC=b`
	/* The host is the frame: one nowrap row carrying the track, the overflow
	   trigger and the stats; the identity (font stack, paddings, the
	   underline's bottom rule) lives here. */
	:host {
		display: flex;
		align-items: flex-start;
		gap: var(--_gap);
		padding-inline: calc(var(--cz-spacing) * 3);
		font-family: var(--cz-font-body);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		font-weight: var(--cz-font-weight-semibold);
		box-shadow: inset 0 -1px 0 0 var(--cz-color-border-secondary);
		flex: 0 1 auto;
		min-width: 0;
		--_gap: calc(var(--cz-spacing) * 4);
	}

	:host([variant='brand']) {
		--_gap: calc(var(--cz-spacing) * 1);
		box-shadow: none;
	}

	/* Untitled UI's "button border" tabs: a track holding a raised, selected pill. */
	:host([variant='segmented']) {
		--_gap: calc(var(--cz-spacing) * 1);
		padding: calc(var(--cz-spacing) * 1);
		border-radius: var(--cz-radius-lg);
		background-color: var(--cz-color-bg-secondary);
		box-shadow: inset 0 0 0 1px var(--cz-color-border-secondary);
	}

	/* The band: the wrapping, clipping row the members land in and the
	   observer reads against. One row's box is exact per size/variant (the
	   item's box is fully token-derived), so the clip is a constant the
	   intersections read against. The wrapping, clipping track is the
	   default slot: brand and segmented item boxes sit a touch shorter:
	   37px; sm trims all variants to 33px */
	slot:not([name]) {
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		gap: var(--_gap);
		overflow: clip;
		max-height: 41px; /* underline */
	}

	/* the group: the tablist around the track's members - the frame's
	   flanks (the headings slot, the overflow trigger, the stats slot)
	   stay outside the group's membership. Frame sizing rides here. */
	.group {
		flex: 1 1 auto;
		min-width: 0;
	}

	:host([variant='brand']) slot:not([name]),
	:host([variant='segmented']) slot:not([name]) {
		max-height: 37px;
	}

	:host([size='sm']) slot:not([name]) {
		max-height: 33px;
	}

	/* The track hugs its tabs when they are not spread, staying within
	   the container's width. */
	:host([variant='segmented'][compact-width]) {
		box-sizing: border-box;
		width: max-content;
		max-width: 100%;
	}

	/* The track's own ring is what stacks onto the item's padding, so the
	   compact size has to thin that too or the height barely moves. */
	:host([variant='segmented'][size='sm']) {
		padding: calc(var(--cz-spacing) * 0.75);
		border-radius: var(--cz-radius-md);
	}

	.more {
		flex: 0 0 auto;
		display: inline-flex;
		align-items: stretch;
	}

	.more[hidden] {
		display: none;
	}

	/* the button borrows the item's face */
	.more-button {
		position: relative;
		display: inline-flex;
		box-sizing: border-box;
		align-items: center;
		justify-content: center;
		gap: calc(var(--cz-spacing) * 1);
		padding: calc(var(--cz-spacing) * 2.5) calc(var(--cz-spacing) * 0.5);
		color: var(--cz-color-text-quaternary);
		text-decoration: none;
		white-space: nowrap;
		cursor: pointer;
		transition:
			color 0.1s linear,
			background-color 0.1s linear,
			box-shadow 0.1s linear;
		outline: 0;
		flex: 0 0 auto;
		background: none;
		border: 0;
		font: inherit;
		appearance: none;
	}

	.more-button .chevron {
		display: contents;
	}

	.more-button svg {
		width: 16px;
		height: 16px;
		flex-shrink: 0;
		color: var(--cz-color-fg-quaternary);
		transition: transform 0.15s ease;
	}

	.more[opened] .more-button svg {
		transform: rotate(180deg);
	}

	.more-button:hover,
	.more[data-active] .more-button {
		color: var(--cz-color-text-brand);
		box-shadow: inset 0 -2px 0 0 var(--cz-color-fg-brand);
	}

	.more-button:hover svg,
	.more[data-active] .more-button svg {
		color: var(--cz-color-fg-brand-secondary);
	}

	.more-button:focus-visible {
		outline: 2px solid var(--cz-color-fg-brand);
		outline-offset: -2px;
	}

	:host([variant='brand']) .more-button {
		padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 2.5);
		border-radius: var(--cz-radius-md);
	}

	:host([variant='brand']) .more-button:hover,
	:host([variant='brand']) .more[data-active] .more-button {
		color: var(--cz-color-text-on-brand);
		background-color: var(--cz-color-bg-brand-solid);
		box-shadow: none;
	}

	:host([variant='brand']) .more-button:hover svg,
	:host([variant='brand']) .more[data-active] .more-button svg {
		color: var(--cz-color-text-on-brand);
	}

	:host([variant='segmented']) .more-button {
		padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 2.5);
		border-radius: var(--cz-radius-sm);
	}

	:host([variant='segmented']) .more-button:hover,
	:host([variant='segmented']) .more[data-active] .more-button {
		color: var(--cz-color-text-secondary);
		background-color: var(--cz-color-bg-primary);
		box-shadow: var(--cz-shadow-sm);
	}

	:host([variant='segmented']) .more-button:hover svg,
	:host([variant='segmented']) .more[data-active] .more-button svg {
		color: var(--cz-color-fg-secondary-hover);
	}

	:host([size='sm']) .more-button {
		padding-block: calc(var(--cz-spacing) * 1.5);
	}

	:host([size='sm']:is([variant='brand'], [variant='segmented'])) .more-button {
		padding-inline: calc(var(--cz-spacing) * 2);
	}

	.menu {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		gap: calc(var(--cz-spacing) * 0.5);
		min-width: 180px;
		max-height: 60vh;
		overflow-y: auto;
		padding: calc(var(--cz-spacing) * 1.5);
		background-color: var(--cz-color-bg-primary);
		border: 1px solid var(--cz-color-border-secondary);
		border-radius: var(--cz-radius-md);
		box-shadow: var(--cz-shadow-lg);
		font-family: var(--cz-font-body);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		font-weight: var(--cz-font-weight-semibold);
	}
`})),gC,_C,vC,yC,bC,xC,SC,CC,wC=e((()=>{T(),le(),me(),v(),ye(),aC(),pC(),hC(),gC=`cosmoz-tab-next`,_C={attributes:!0,attributeFilter:[`active`,`disabled`,`hidden`,`badge`,`href`,`name`,`title`],childList:!0,subtree:!0,characterData:!0},vC=(e,t)=>{let[n,r]=l(0);return u(()=>{let t=new MutationObserver(()=>r(e=>e+1));return e().forEach(e=>t.observe(e,_C)),()=>t.disconnect()},[t]),n},yC=(e,t,n)=>{let r=vC(e,n),i=y();return i.current??=new Map,d(()=>{let n=i.current,r=e(),a=r.filter(e=>t.has(e)).map(e=>{let t=n.get(e)??lC(e);return n.set(e,t),uC(e,t),[e,t]}),o=new Set(a.map(([e])=>e));n.forEach((e,t)=>{o.has(t)||n.delete(t)}),sC(a);let s=cC(r);return r.forEach(e=>$(e,`tabindex`,e===s?`0`:`-1`)),a},[t,n,r])},bC=e=>(e.getAttribute(`role`)===`radiogroup`&&(e.removeAttribute(`role`),e.dispatchEvent(new CustomEvent(`deprecation-warning`,{detail:{message:`role=radiogroup is no longer supported: a value picker belongs in cosmoz-toggle-group (@neovici/cosmoz-input); the items are tabs.`}}))),{variant:e.getAttribute(`variant`),size:e.getAttribute(`size`),"compact-width":e.hasAttribute(`compact-width`)?``:null,role:`tab`,"aria-selected":e=>e.hasAttribute(`active`)?`true`:`false`,"aria-disabled":e=>e.hasAttribute(`disabled`)?`true`:null}),xC=new Set([`ArrowLeft`,`ArrowRight`,`Home`,`End`]),SC=(e,t,n)=>{let r=e.filter(Q);if(r.length===0)return null;if(n===`Home`)return r[0];if(n===`End`)return r[r.length-1];let i=r.indexOf(t);return i<0?null:r[Math.max(0,Math.min(r.length-1,i+(n===`ArrowLeft`?-1:1)))]},CC=e=>{e.getAttribute(`variant`)||e.setAttribute(`variant`,`brand`);let[n,r]=l(0),[i,a]=l(()=>new Set),o=y(),s=p(()=>(o.current??[]).filter(e=>e.matches(gC)),[]),c=()=>r(e=>e+1),u=yC(s,i,n);return h(()=>{let t=e=>{if(!xC.has(e.key))return;let t=s(),n=e.target;if(!t.includes(n))return;e.preventDefault();let r=SC(t,n,e.key);!r||r===n||r.focus()};return e.addEventListener(`keydown`,t),()=>e.removeEventListener(`keydown`,t)},[]),t`
		<slot name="tabs"></slot>
		<div class="group" role="tablist">
			<slot
				${A(o)}
				${pe(bC(e))}
				${ve({is:e=>e.matches(gC),onOverflow:a})}
				@slotchange=${c}
			></slot>
		</div>
		${iC({items:u.map(([,e])=>e),overflows:u.length>0,active:u.some(([e])=>e.hasAttribute(`active`)&&!e.hidden),label:e.moreLabel,onItemClick:fC(u)})}
		<slot name="stats"></slot>
	`},customElements.define(`cosmoz-tabs-next`,m(CC,{observedAttributes:[`variant`,`size`,`compact-width`,`more-label`],styleSheets:[w,mC]}))})),TC,EC,DC,OC,kC=e((()=>{v(),TC=()=>new URL(location.hash.replace(/^#!?/iu,``).replace(`%23`,`#`),location.origin),EC=e=>e?()=>new URLSearchParams(TC().hash.replace(`#`,``)).get(e):void 0,DC=(e,t)=>{if(!e)return;let n=TC(),r=new URLSearchParams(n.hash.replace(`#`,``));return t==null?r.delete(e):r.set(e,t),`#!`+Object.assign(n,{hash:r}).href.replace(location.origin,``)},OC=e=>{let t=d(()=>EC(e),[e]),[n,r]=l(t),i=y(n);return u(()=>void(i.current=n),[n]),u(()=>{if(t==null)return;let e=()=>{let e=t();i.current!==e&&r(e)};return e(),window.addEventListener(`popstate`,e),window.addEventListener(`hashchange`,e),()=>{window.removeEventListener(`popstate`,e),window.removeEventListener(`hashchange`,e)}},[t]),[n,d(()=>e?t=>{r(t),history.pushState({},``,DC(e,t))}:r,[e])]}})),AC,jC,MC,NC,PC,FC=e((()=>{kC(),ne(),v(),k(),D(),AC=e=>!e.hidden&&!e.disabled,jC=e=>e.slice().sort((e,t)=>Number(t.fallback??!1)-Number(e.fallback??!1)).find(AC),MC=(e,t)=>{let n=t?e.find(e=>e.name===t):void 0;return n&&AC(n)?n:jC(e)},NC=(e,{hashParam:t,onActivate:n}={})=>{let[r,i]=OC(t),a=y([]),o=d(()=>MC(e,r??void 0),[e,r]);return{tabs:e,active:o,activated:d(()=>{let e=o?.name;return a.current=[...(a.current??[]).filter(t=>t!==e),e].filter(Boolean)},[o]),activate:i,onActivate:p(e=>{let t=e;if(t.button!==0||t.metaKey||t.ctrlKey)return;let r=e.currentTarget?.getAttribute(`name`);r&&(n?.(r),i(r))},[i,n])}},PC=({tabs:e,active:n,onActivate:r,className:i,variant:a,size:o,compactWidth:s})=>e.map(e=>{let c=te(e.title),l=e.content??c,u=e.badge||void 0;return t`<cosmoz-tab-next
			name=${e.name}
			class=${O(i)}
			variant=${O(a)}
			size=${O(o)}
			?compact-width=${O(s)}
			title=${O(c)}
			?active=${n?.name===e.name}
			?hidden=${e.hidden}
			?disabled=${e.disabled}
			badge=${O(u)}
			@click=${r}
			>${E(e.icon,e=>e({slot:`icon`}))}${l}</cosmoz-tab-next
		>`})})),IC=e((()=>{se(),wC(),FC()}));export{C,w as S,k as _,DC as a,E as b,$S as c,Sp as d,lo as f,ne as g,ee as h,kC as i,xS as l,be as m,PC as n,OC as o,xe as p,NC as r,eC as s,IC as t,sy as u,O as v,S as w,T as x,D as y};