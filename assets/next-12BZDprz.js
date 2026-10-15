import{t as e}from"./chunk-BvrOYcoh.js";import{a as t,c as n,o as r,r as i,t as a}from"./lit-html-BZ3vufxv.js";import{a as o,b as s,d as c,f as l,g as u,h as d,i as f,m as p,n as m,o as h,p as g,r as _,s as v,t as y,u as b,y as x}from"./haunted-Cdf64McT.js";var S,C,w=e((()=>{r(),f(),v(),S=new WeakMap,C=o(class extends _{render(e){return a}update(e,[t]){let n=t!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),a}rt(e){if(this.G!==void 0)if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=S.get(t);n===void 0&&(n=new WeakMap,S.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G==`function`?S.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})})),T,E=e((()=>{y(),T=s(x`
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
`)})),D,O=e((()=>{r(),D=e=>e??a})),ee,te,ne=e((()=>{r(),v(),ee={},te=o(class extends h{constructor(){super(...arguments),this.ot=ee}render(e,t){return t()}update(e,[t,n]){if(Array.isArray(t)){if(Array.isArray(this.ot)&&this.ot.length===t.length&&t.every((e,t)=>e===this.ot[t]))return i}else if(this.ot===t)return i;return this.ot=Array.isArray(t)?Array.from(t):t,this.render(t,n)}})})),re,ie,ae=e((()=>{re=e=>e,ie=(e,...t)=>typeof e==`function`?e(...t):e})),oe,se=e((()=>{y(),oe=x`
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
`})),ce,le,ue=e((()=>{E(),y(),r(),O(),w(),se(),ce=class extends HTMLElement{connectedCallback(){this.hasAttribute(`role`)||this.setAttribute(`role`,`tab`),this.hasAttribute(`tabindex`)||this.setAttribute(`tabindex`,`-1`)}},le=e=>{let{active:n,badge:r,href:i}=e,o=b();return g(()=>{e.setAttribute(`aria-selected`,n?`true`:`false`)},[n]),g(()=>{let t=()=>(o.current??e).click(),n=n=>{n.target!==e||e.hasAttribute(`disabled`)||(n.key===`Enter`&&!n.repeat&&(n.preventDefault(),t()),n.key===` `&&n.preventDefault())},r=n=>{n.target!==e||e.hasAttribute(`disabled`)||n.key===` `&&t()};return e.addEventListener(`keydown`,n),e.addEventListener(`keyup`,r),()=>{e.removeEventListener(`keydown`,n),e.removeEventListener(`keyup`,r)}},[]),t`
		<a ${C(o)} part="link" href=${D(i)}>
			<slot id="iconSlot" name="icon"></slot>
			<slot id="contentSlot"></slot>
			${r?t`<span class="badge" part="badge">${r}</span>`:a}
		</a>
	`},customElements.define(`cosmoz-tab-next`,m(le,{baseElement:ce,observedAttributes:[`active`,`badge`,`href`],styleSheets:[T,oe]}))})),de,k,fe=e((()=>{r(),f(),de=class extends _{_slot;_ref;#e=()=>{!this._slot||!this._ref||(this._ref.current=this._slot.assignedElements({flatten:!0}))};#t=()=>this.#e();update(e,[t]){this._ref=t;let n=e.element;this._slot!==n&&(this._slot?.removeEventListener(`slotchange`,this.#t),this._slot=n,n.addEventListener(`slotchange`,this.#t)),this.#e()}disconnected(){this._slot?.removeEventListener(`slotchange`,this.#t),this._slot=void 0}render(e){return i}},k=o(de)})),pe,me,he,ge,_e=e((()=>{r(),f(),ae(),pe=(e,t,n)=>{n==null?e.removeAttribute(t):e.setAttribute(t,n)},me=(e,t)=>{for(let[n,r]of Object.entries(e))pe(t,n,ie(r,t))},he=class extends _{_slot;_attrs;#e=()=>{if(!this._slot||!this._attrs)return;let e=this._slot.assignedElements({flatten:!0});for(let t of e)me(this._attrs,t)};#t=()=>this.#e();render(e){return i}update(e,[t]){this._attrs=t;let n=e.element;return this._slot!==n&&(this._slot?.removeEventListener(`slotchange`,this.#t),this._slot=n,n.addEventListener(`slotchange`,this.#t)),this.#e(),i}disconnected(){this._slot?.removeEventListener(`slotchange`,this.#t),this._slot=void 0}},ge=o(he)})),ve,ye,be,xe,Se=e((()=>{r(),f(),ve=(e,t)=>e.assignedElements({flatten:!0}).filter(t),ye=(e,t)=>e!=null&&t!=null&&e.size===t.size&&[...t].every(t=>e.has(t)),be=class extends _{_slot;_is;_onOverflow;#e=new Map;#t;#n;#r=e=>{e.forEach(e=>{let t=e.target;this.#e.set(t,e.boundingClientRect.height>0&&e.intersectionRect.height===0)}),this.#a()};#i=e=>{this.#n?.unobserve(e),this.#n?.observe(e)};#a=()=>{if(!this._slot||!this._is)return;let e=ve(this._slot,this._is);e.forEach(e=>{let t=this.#e.get(e)===!0;t!==e.hasAttribute(`overflowing`)&&(t?e.setAttribute(`overflowing`,``):e.removeAttribute(`overflowing`))}),this.#e.forEach((t,n)=>{e.includes(n)||(this.#e.delete(n),this.#n?.unobserve(n),n.hasAttribute(`overflowing`)&&n.removeAttribute(`overflowing`))});let t=new Set(e.filter(e=>this.#e.get(e)===!0));ye(this.#t,t)||(this.#t=t,this._onOverflow?.(t))};#o=()=>this.#s();#s=()=>{if(!(!this.#n||!this._slot||!this._is)){for(let e of ve(this._slot,this._is))this.#i(e);this.#a()}};render(e){return i}update(e,[t]){this._is=t.is,this._onOverflow=t.onOverflow;let n=e.element;return this._slot!==n&&(this._slot?.removeEventListener(`slotchange`,this.#o),this.#n?.disconnect(),this.#n=void 0,this._slot=n,n.addEventListener(`slotchange`,this.#o)),this.#n??=new IntersectionObserver(this.#r,{root:this._slot,threshold:[0,1]}),this.#s(),i}disconnected(){this._slot?.removeEventListener(`slotchange`,this.#o),this._slot=void 0,this.#n?.disconnect(),this.#n=void 0,this.#e.clear(),this.#t=void 0}},xe=o(be)})),Ce,we=e((()=>{y(),Ce=e=>{let t=d(()=>({}),[]);return d(()=>Object.assign(t,e),[t,...Object.values(e)])}})),Te,Ee,De=e((()=>{we(),y(),Te=e=>{for(let t of e.current??[]){let e=t.matches(`[autofocus]`)?t:t.querySelector(`[autofocus]`);if(e instanceof HTMLElement){e.focus();break}}},Ee=e=>{let{placement:t=`bottom span-right`,disabled:n,passthrough:r,openOnHover:i,openOnFocus:a}=e,o=b(),[s,l]=c(`opened`,!1),d=b(),f=b(),m=Ce({disabled:n,openOnHover:i}),h=p(()=>{let e=d.current?.[0];return e instanceof HTMLElement?e:void 0},[]),g=p(()=>{m.disabled||(l(!0),o.current?.showPopover?.())},[]),_=p(()=>{l(!1),o.current?.hidePopover?.()},[]),v=p(()=>{o.current?.matches(`:popover-open`)?_():g()},[]),y=p(()=>{clearTimeout(m.closeTimeout)},[]),x=p(e=>{m.disabled||e.target===h()&&(y(),g())},[]),S=p(()=>{m.disabled||(y(),g())},[]),C=p(()=>{clearTimeout(m.closeTimeout),m.closeTimeout=setTimeout(()=>{let t=o.current;m.openOnHover&&(e.matches(`:hover`)||t?.matches(`:hover`))||e.matches(`:focus-within`)||t?.matches(`:focus-within`)||_()},100)},[]),w=p(()=>{let t=document.activeElement;for(;t?.shadowRoot;)t=t.shadowRoot.activeElement;if(!(t==null||t===document.body||t.offsetParent==null))return;let n=h();n&&(e.removeEventListener(`focusin`,x),n.focus(),e.addEventListener(`focusin`,x))},[]),T=p(t=>{let n=t.newState===`open`;l(n),n?Te(f):w(),e.dispatchEvent(new ToggleEvent(`dropdown-toggle`,{newState:t.newState,oldState:t.oldState,composed:!0}))},[]);return u(()=>{let e=o.current;e&&(s?e.showPopover?.():e.hidePopover?.())},[s]),u(()=>{e.toggleAttribute(`opened`,!!s)},[s]),u(()=>{if(!(!a||n))return e.addEventListener(`focusin`,x),e.addEventListener(`focusout`,C),()=>{e.removeEventListener(`focusin`,x),e.removeEventListener(`focusout`,C)}},[a,n]),u(()=>{if(!(!i||n))return e.addEventListener(`pointerenter`,S),e.addEventListener(`pointerleave`,C),()=>{e.removeEventListener(`pointerenter`,S),e.removeEventListener(`pointerleave`,C)}},[i,n]),{placement:t,disabled:n,passthrough:r,opened:s,triggers:d,content:f,popoverRef:o,handleClick:a?g:v,onToggle:T,close:_,scheduleClose:C,cancelClose:y}}})),Oe,ke,Ae,je=e((()=>{fe(),_e(),y(),r(),w(),De(),Oe=x`
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
`,ke=({placement:e,disabled:n,passthrough:r,opened:i,triggers:a,content:o,popoverRef:s,handleClick:c,onToggle:l,close:u,scheduleClose:d,cancelClose:f})=>t`
		<slot
			name="button"
			${k(a)}
			${ge({"aria-expanded":r?null:String(i),disabled:n&&!r?``:null})}
			@click=${c}
		></slot>
		${n&&r?t`<slot></slot>`:t`<div
					popover
					style="position-area: ${e}"
					@toggle=${l}
					@select=${u}
					@focusout=${d}
					@focusin=${f}
					${C(e=>e&&(s.current=e))}
				>
					<slot ${k(o)}></slot>
				</div>`}
	`,Ae=e=>ke(Ee(e)),customElements.define(`cosmoz-dropdown-next`,m(Ae,{styleSheets:[Oe],observedAttributes:[`placement`,`disabled`,`passthrough`,`open-on-hover`,`open-on-focus`],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))}));function A(e,t,n){return e?t(e):n?.(e)}var j=e((()=>{})),Me=e((()=>{r(),O()})),Ne=e((()=>{r(),O()})),Pe=e((()=>{r(),O()})),Fe=e((()=>{r(),O()})),Ie=e((()=>{r(),O()})),Le=e((()=>{r(),O()})),Re=e((()=>{r(),O()})),ze=e((()=>{r(),O()})),Be=e((()=>{r(),O()})),Ve=e((()=>{r(),O()})),He=e((()=>{r(),O()})),Ue=e((()=>{r(),O()})),We=e((()=>{r(),O()})),Ge=e((()=>{r(),O()})),Ke=e((()=>{r(),O()})),qe=e((()=>{r(),O()})),Je=e((()=>{r(),O()})),Ye=e((()=>{r(),O()})),Xe=e((()=>{r(),O()})),Ze=e((()=>{r(),O()})),Qe=e((()=>{r(),O()})),$e=e((()=>{r(),O()})),et=e((()=>{r(),O()})),tt=e((()=>{r(),O()})),nt=e((()=>{r(),O()})),rt=e((()=>{r(),O()})),it=e((()=>{r(),O()})),at=e((()=>{r(),O()})),ot=e((()=>{r(),O()})),st=e((()=>{r(),O()})),ct=e((()=>{r(),O()})),lt=e((()=>{r(),O()})),ut=e((()=>{r(),O()})),dt=e((()=>{r(),O()})),ft=e((()=>{r(),O()})),pt=e((()=>{r(),O()})),mt=e((()=>{r(),O()})),ht=e((()=>{r(),O()})),gt=e((()=>{r(),O()})),_t=e((()=>{r(),O()})),vt=e((()=>{r(),O()})),yt=e((()=>{r(),O()})),bt=e((()=>{r(),O()})),xt=e((()=>{r(),O()})),St=e((()=>{r(),O()})),Ct=e((()=>{r(),O()})),wt=e((()=>{r(),O()})),Tt=e((()=>{r(),O()})),Et=e((()=>{r(),O()})),Dt=e((()=>{r(),O()})),Ot=e((()=>{r(),O()})),kt=e((()=>{r(),O()})),At=e((()=>{r(),O()})),jt=e((()=>{r(),O()})),Mt=e((()=>{r(),O()})),Nt=e((()=>{r(),O()})),Pt=e((()=>{r(),O()})),Ft=e((()=>{r(),O()})),It=e((()=>{r(),O()})),Lt=e((()=>{r(),O()})),Rt=e((()=>{r(),O()})),zt=e((()=>{r(),O()})),Bt=e((()=>{r(),O()})),Vt=e((()=>{r(),O()})),Ht=e((()=>{r(),O()})),Ut=e((()=>{r(),O()})),Wt=e((()=>{r(),O()})),Gt=e((()=>{r(),O()})),Kt=e((()=>{r(),O()})),qt=e((()=>{r(),O()})),Jt=e((()=>{r(),O()})),Yt=e((()=>{r(),O()})),Xt=e((()=>{r(),O()})),Zt=e((()=>{r(),O()})),Qt=e((()=>{r(),O()})),$t=e((()=>{r(),O()})),en=e((()=>{r(),O()})),tn=e((()=>{r(),O()})),nn=e((()=>{r(),O()})),rn=e((()=>{r(),O()})),an=e((()=>{r(),O()})),on=e((()=>{r(),O()})),sn=e((()=>{r(),O()})),cn=e((()=>{r(),O()})),ln=e((()=>{r(),O()})),un=e((()=>{r(),O()})),dn=e((()=>{r(),O()})),fn=e((()=>{r(),O()})),pn=e((()=>{r(),O()})),mn=e((()=>{r(),O()})),hn=e((()=>{r(),O()})),gn=e((()=>{r(),O()})),_n=e((()=>{r(),O()})),vn=e((()=>{r(),O()})),yn=e((()=>{r(),O()})),bn=e((()=>{r(),O()})),xn=e((()=>{r(),O()})),Sn=e((()=>{r(),O()})),Cn=e((()=>{r(),O()})),wn=e((()=>{r(),O()})),Tn=e((()=>{r(),O()})),En=e((()=>{r(),O()})),Dn=e((()=>{r(),O()})),On=e((()=>{r(),O()})),kn=e((()=>{r(),O()})),An=e((()=>{r(),O()})),jn=e((()=>{r(),O()})),Mn=e((()=>{r(),O()})),Nn=e((()=>{r(),O()})),Pn=e((()=>{r(),O()})),Fn=e((()=>{r(),O()})),In=e((()=>{r(),O()})),Ln=e((()=>{r(),O()})),Rn=e((()=>{r(),O()})),zn=e((()=>{r(),O()})),Bn=e((()=>{r(),O()})),Vn=e((()=>{r(),O()})),Hn=e((()=>{r(),O()})),Un=e((()=>{r(),O()})),Wn=e((()=>{r(),O()})),Gn=e((()=>{r(),O()})),Kn=e((()=>{r(),O()})),qn=e((()=>{r(),O()})),Jn=e((()=>{r(),O()})),Yn=e((()=>{r(),O()})),Xn=e((()=>{r(),O()})),Zn=e((()=>{r(),O()})),Qn=e((()=>{r(),O()})),$n=e((()=>{r(),O()})),er=e((()=>{r(),O()})),tr=e((()=>{r(),O()})),nr=e((()=>{r(),O()})),rr=e((()=>{r(),O()})),ir=e((()=>{r(),O()})),ar=e((()=>{r(),O()})),or=e((()=>{r(),O()})),sr=e((()=>{r(),O()})),cr=e((()=>{r(),O()})),lr=e((()=>{r(),O()})),ur=e((()=>{r(),O()})),dr=e((()=>{r(),O()})),fr=e((()=>{r(),O()})),pr=e((()=>{r(),O()})),mr=e((()=>{r(),O()})),hr=e((()=>{r(),O()})),gr=e((()=>{r(),O()})),_r=e((()=>{r(),O()})),vr=e((()=>{r(),O()})),yr=e((()=>{r(),O()})),br=e((()=>{r(),O()})),xr=e((()=>{r(),O()})),Sr=e((()=>{r(),O()})),Cr=e((()=>{r(),O()})),wr=e((()=>{r(),O()})),Tr=e((()=>{r(),O()})),Er=e((()=>{r(),O()})),Dr=e((()=>{r(),O()})),Or=e((()=>{r(),O()})),kr=e((()=>{r(),O()})),Ar=e((()=>{r(),O()})),jr=e((()=>{r(),O()})),Mr=e((()=>{r(),O()})),Nr=e((()=>{r(),O()})),Pr=e((()=>{r(),O()})),Fr=e((()=>{r(),O()})),Ir=e((()=>{r(),O()})),Lr=e((()=>{r(),O()})),Rr=e((()=>{r(),O()})),zr=e((()=>{r(),O()})),Br=e((()=>{r(),O()})),Vr=e((()=>{r(),O()})),Hr=e((()=>{r(),O()})),Ur=e((()=>{r(),O()})),Wr=e((()=>{r(),O()})),Gr=e((()=>{r(),O()})),Kr=e((()=>{r(),O()})),qr=e((()=>{r(),O()})),Jr=e((()=>{r(),O()})),Yr=e((()=>{r(),O()})),Xr=e((()=>{r(),O()})),Zr=e((()=>{r(),O()})),Qr=e((()=>{r(),O()})),$r=e((()=>{r(),O()})),ei=e((()=>{r(),O()})),ti=e((()=>{r(),O()})),ni=e((()=>{r(),O()})),ri=e((()=>{r(),O()})),ii=e((()=>{r(),O()})),ai=e((()=>{r(),O()})),oi=e((()=>{r(),O()})),si=e((()=>{r(),O()})),ci=e((()=>{r(),O()})),li=e((()=>{r(),O()})),ui=e((()=>{r(),O()})),di=e((()=>{r(),O()})),fi=e((()=>{r(),O()})),pi=e((()=>{r(),O()})),mi=e((()=>{r(),O()})),hi=e((()=>{r(),O()})),gi=e((()=>{r(),O()})),_i=e((()=>{r(),O()})),vi=e((()=>{r(),O()})),yi=e((()=>{r(),O()})),bi=e((()=>{r(),O()})),xi=e((()=>{r(),O()})),Si=e((()=>{r(),O()})),Ci=e((()=>{r(),O()})),wi=e((()=>{r(),O()})),Ti=e((()=>{r(),O()})),Ei=e((()=>{r(),O()})),Di=e((()=>{r(),O()})),Oi=e((()=>{r(),O()})),ki=e((()=>{r(),O()})),Ai=e((()=>{r(),O()})),ji=e((()=>{r(),O()})),Mi=e((()=>{r(),O()})),Ni=e((()=>{r(),O()})),Pi=e((()=>{r(),O()})),Fi=e((()=>{r(),O()})),Ii=e((()=>{r(),O()})),Li=e((()=>{r(),O()})),Ri=e((()=>{r(),O()})),zi=e((()=>{r(),O()})),Bi=e((()=>{r(),O()})),Vi=e((()=>{r(),O()})),Hi=e((()=>{r(),O()})),Ui=e((()=>{r(),O()})),Wi=e((()=>{r(),O()})),Gi=e((()=>{r(),O()})),Ki,qi=e((()=>{r(),O(),j(),Ki=({slot:e,title:r,className:i,width:a=`24`,height:o=`24`,styles:s}={})=>t`
  <svg
    slot=${D(e)}
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
    style=${D(s)}
  >
    ${A(r,()=>n`<title>${r}</title>`)}
    <path d="m6 9 6 6 6-6" />
  </svg>
`})),Ji=e((()=>{r(),O()})),Yi=e((()=>{r(),O()})),Xi=e((()=>{r(),O()})),Zi=e((()=>{r(),O()})),Qi=e((()=>{r(),O()})),$i=e((()=>{r(),O()})),ea=e((()=>{r(),O()})),ta=e((()=>{r(),O()})),na=e((()=>{r(),O()})),ra=e((()=>{r(),O()})),ia=e((()=>{r(),O()})),aa=e((()=>{r(),O()})),oa=e((()=>{r(),O()})),sa=e((()=>{r(),O()})),ca=e((()=>{r(),O()})),la=e((()=>{r(),O()})),ua=e((()=>{r(),O()})),da=e((()=>{r(),O()})),fa=e((()=>{r(),O()})),pa=e((()=>{r(),O()})),ma=e((()=>{r(),O()})),ha=e((()=>{r(),O()})),ga=e((()=>{r(),O()})),_a=e((()=>{r(),O()})),va=e((()=>{r(),O()})),ya=e((()=>{r(),O()})),ba=e((()=>{r(),O()})),xa=e((()=>{r(),O()})),Sa=e((()=>{r(),O()})),Ca=e((()=>{r(),O()})),wa=e((()=>{r(),O()})),Ta=e((()=>{r(),O()})),Ea=e((()=>{r(),O()})),Da=e((()=>{r(),O()})),Oa=e((()=>{r(),O()})),ka=e((()=>{r(),O()})),Aa=e((()=>{r(),O()})),ja=e((()=>{r(),O()})),Ma=e((()=>{r(),O()})),Na=e((()=>{r(),O()})),Pa=e((()=>{r(),O()})),Fa=e((()=>{r(),O()})),Ia=e((()=>{r(),O()})),La=e((()=>{r(),O()})),Ra=e((()=>{r(),O()})),za=e((()=>{r(),O()})),Ba=e((()=>{r(),O()})),Va=e((()=>{r(),O()})),Ha=e((()=>{r(),O()})),Ua=e((()=>{r(),O()})),Wa=e((()=>{r(),O()})),Ga=e((()=>{r(),O()})),Ka=e((()=>{r(),O()})),qa=e((()=>{r(),O()})),Ja=e((()=>{r(),O()})),Ya=e((()=>{r(),O()})),Xa=e((()=>{r(),O()})),Za=e((()=>{r(),O()})),Qa=e((()=>{r(),O()})),$a=e((()=>{r(),O()})),eo=e((()=>{r(),O()})),to=e((()=>{r(),O()})),no=e((()=>{r(),O()})),ro=e((()=>{r(),O()})),io=e((()=>{r(),O()})),ao=e((()=>{r(),O()})),oo=e((()=>{r(),O()})),so=e((()=>{r(),O()})),co=e((()=>{r(),O()})),lo=e((()=>{r(),O()})),uo=e((()=>{r(),O()})),fo=e((()=>{r(),O()})),po,mo=e((()=>{r(),O(),j(),po=({slot:e,title:r,className:i,width:a=`24`,height:o=`24`,styles:s}={})=>t`
  <svg
    slot=${D(e)}
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
    style=${D(s)}
  >
    ${A(r,()=>n`<title>${r}</title>`)}
    <path
      d="M12 3v18M7.8 3h8.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 3 6.12 3 7.8 3Z"
    />
  </svg>
`})),ho=e((()=>{r(),O()})),go=e((()=>{r(),O()})),_o=e((()=>{r(),O()})),vo=e((()=>{r(),O()})),yo=e((()=>{r(),O()})),bo=e((()=>{r(),O()})),xo=e((()=>{r(),O()})),So=e((()=>{r(),O()})),Co=e((()=>{r(),O()})),wo=e((()=>{r(),O()})),To=e((()=>{r(),O()})),Eo=e((()=>{r(),O()})),Do=e((()=>{r(),O()})),Oo=e((()=>{r(),O()})),ko=e((()=>{r(),O()})),Ao=e((()=>{r(),O()})),jo=e((()=>{r(),O()})),Mo=e((()=>{r(),O()})),No=e((()=>{r(),O()})),Po=e((()=>{r(),O()})),Fo=e((()=>{r(),O()})),Io=e((()=>{r(),O()})),Lo=e((()=>{r(),O()})),Ro=e((()=>{r(),O()})),zo=e((()=>{r(),O()})),Bo=e((()=>{r(),O()})),Vo=e((()=>{r(),O()})),Ho=e((()=>{r(),O()})),Uo=e((()=>{r(),O()})),Wo=e((()=>{r(),O()})),Go=e((()=>{r(),O()})),Ko=e((()=>{r(),O()})),qo=e((()=>{r(),O()})),Jo=e((()=>{r(),O()})),Yo=e((()=>{r(),O()})),Xo=e((()=>{r(),O()})),Zo=e((()=>{r(),O()})),Qo=e((()=>{r(),O()})),$o=e((()=>{r(),O()})),es=e((()=>{r(),O()})),ts=e((()=>{r(),O()})),ns=e((()=>{r(),O()})),rs=e((()=>{r(),O()})),is=e((()=>{r(),O()})),as=e((()=>{r(),O()})),os=e((()=>{r(),O()})),ss=e((()=>{r(),O()})),cs=e((()=>{r(),O()})),ls=e((()=>{r(),O()})),us=e((()=>{r(),O()})),ds=e((()=>{r(),O()})),fs=e((()=>{r(),O()})),ps=e((()=>{r(),O()})),ms=e((()=>{r(),O()})),hs=e((()=>{r(),O()})),gs=e((()=>{r(),O()})),_s=e((()=>{r(),O()})),vs=e((()=>{r(),O()})),ys=e((()=>{r(),O()})),bs=e((()=>{r(),O()})),xs=e((()=>{r(),O()})),Ss=e((()=>{r(),O()})),Cs=e((()=>{r(),O()})),ws=e((()=>{r(),O()})),Ts=e((()=>{r(),O()})),Es=e((()=>{r(),O()})),Ds=e((()=>{r(),O()})),Os=e((()=>{r(),O()})),ks=e((()=>{r(),O()})),As=e((()=>{r(),O()})),js=e((()=>{r(),O()})),Ms=e((()=>{r(),O()})),Ns=e((()=>{r(),O()})),Ps=e((()=>{r(),O()})),Fs=e((()=>{r(),O()})),Is=e((()=>{r(),O()})),Ls=e((()=>{r(),O()})),Rs=e((()=>{r(),O()})),zs=e((()=>{r(),O()})),Bs=e((()=>{r(),O()})),Vs=e((()=>{r(),O()})),Hs=e((()=>{r(),O()})),Us=e((()=>{r(),O()})),Ws=e((()=>{r(),O()})),Gs=e((()=>{r(),O()})),Ks=e((()=>{r(),O()})),qs=e((()=>{r(),O()})),Js=e((()=>{r(),O()})),Ys=e((()=>{r(),O()})),Xs=e((()=>{r(),O()})),Zs=e((()=>{r(),O()})),Qs=e((()=>{r(),O()})),$s=e((()=>{r(),O()})),ec=e((()=>{r(),O()})),tc=e((()=>{r(),O()})),nc=e((()=>{r(),O()})),rc=e((()=>{r(),O()})),ic=e((()=>{r(),O()})),ac=e((()=>{r(),O()})),oc=e((()=>{r(),O()})),sc=e((()=>{r(),O()})),cc=e((()=>{r(),O()})),lc=e((()=>{r(),O()})),uc=e((()=>{r(),O()})),dc=e((()=>{r(),O()})),fc=e((()=>{r(),O()})),pc=e((()=>{r(),O()})),mc=e((()=>{r(),O()})),hc=e((()=>{r(),O()})),gc=e((()=>{r(),O()})),_c=e((()=>{r(),O()})),vc=e((()=>{r(),O()})),yc=e((()=>{r(),O()})),bc=e((()=>{r(),O()})),xc=e((()=>{r(),O()})),Sc=e((()=>{r(),O()})),Cc=e((()=>{r(),O()})),wc=e((()=>{r(),O()})),Tc=e((()=>{r(),O()})),Ec=e((()=>{r(),O()})),Dc=e((()=>{r(),O()})),Oc=e((()=>{r(),O()})),kc=e((()=>{r(),O()})),Ac=e((()=>{r(),O()})),jc=e((()=>{r(),O()})),Mc=e((()=>{r(),O()})),Nc=e((()=>{r(),O()})),Pc=e((()=>{r(),O()})),Fc=e((()=>{r(),O()})),Ic=e((()=>{r(),O()})),Lc=e((()=>{r(),O()})),Rc=e((()=>{r(),O()})),zc=e((()=>{r(),O()})),Bc=e((()=>{r(),O()})),Vc=e((()=>{r(),O()})),Hc=e((()=>{r(),O()})),Uc=e((()=>{r(),O()})),Wc=e((()=>{r(),O()})),Gc=e((()=>{r(),O()})),Kc=e((()=>{r(),O()})),qc=e((()=>{r(),O()})),Jc=e((()=>{r(),O()})),Yc=e((()=>{r(),O()})),Xc=e((()=>{r(),O()})),Zc=e((()=>{r(),O()})),Qc=e((()=>{r(),O()})),$c=e((()=>{r(),O()})),el=e((()=>{r(),O()})),tl=e((()=>{r(),O()})),nl=e((()=>{r(),O()})),rl=e((()=>{r(),O()})),il=e((()=>{r(),O()})),al=e((()=>{r(),O()})),ol=e((()=>{r(),O()})),sl=e((()=>{r(),O()})),cl=e((()=>{r(),O()})),ll=e((()=>{r(),O()})),ul=e((()=>{r(),O()})),dl=e((()=>{r(),O()})),fl=e((()=>{r(),O()})),pl=e((()=>{r(),O()})),ml=e((()=>{r(),O()})),hl=e((()=>{r(),O()})),gl=e((()=>{r(),O()})),_l=e((()=>{r(),O()})),vl=e((()=>{r(),O()})),yl=e((()=>{r(),O()})),bl=e((()=>{r(),O()})),xl=e((()=>{r(),O()})),Sl=e((()=>{r(),O()})),Cl=e((()=>{r(),O()})),wl=e((()=>{r(),O()})),Tl=e((()=>{r(),O()})),El=e((()=>{r(),O()})),Dl=e((()=>{r(),O()})),Ol=e((()=>{r(),O()})),kl=e((()=>{r(),O()})),Al=e((()=>{r(),O()})),jl=e((()=>{r(),O()})),Ml=e((()=>{r(),O()})),Nl=e((()=>{r(),O()})),Pl=e((()=>{r(),O()})),Fl=e((()=>{r(),O()})),Il=e((()=>{r(),O()})),Ll=e((()=>{r(),O()})),Rl=e((()=>{r(),O()})),zl=e((()=>{r(),O()})),Bl=e((()=>{r(),O()})),Vl=e((()=>{r(),O()})),Hl=e((()=>{r(),O()})),Ul=e((()=>{r(),O()})),Wl=e((()=>{r(),O()})),Gl=e((()=>{r(),O()})),Kl=e((()=>{r(),O()})),ql=e((()=>{r(),O()})),Jl=e((()=>{r(),O()})),Yl=e((()=>{r(),O()})),Xl=e((()=>{r(),O()})),Zl=e((()=>{r(),O()})),Ql=e((()=>{r(),O()})),$l=e((()=>{r(),O()})),eu=e((()=>{r(),O()})),tu=e((()=>{r(),O()})),nu=e((()=>{r(),O()})),ru=e((()=>{r(),O()})),iu=e((()=>{r(),O()})),au=e((()=>{r(),O()})),ou=e((()=>{r(),O()})),su=e((()=>{r(),O()})),cu=e((()=>{r(),O()})),lu=e((()=>{r(),O()})),uu=e((()=>{r(),O()})),du=e((()=>{r(),O()})),fu=e((()=>{r(),O()})),pu=e((()=>{r(),O()})),mu=e((()=>{r(),O()})),hu=e((()=>{r(),O()})),gu=e((()=>{r(),O()})),_u=e((()=>{r(),O()})),vu=e((()=>{r(),O()})),yu=e((()=>{r(),O()})),bu=e((()=>{r(),O()})),xu=e((()=>{r(),O()})),Su=e((()=>{r(),O()})),Cu=e((()=>{r(),O()})),wu=e((()=>{r(),O()})),Tu=e((()=>{r(),O()})),Eu=e((()=>{r(),O()})),Du=e((()=>{r(),O()})),Ou=e((()=>{r(),O()})),ku=e((()=>{r(),O()})),Au=e((()=>{r(),O()})),ju=e((()=>{r(),O()})),Mu=e((()=>{r(),O()})),Nu=e((()=>{r(),O()})),Pu=e((()=>{r(),O()})),Fu=e((()=>{r(),O()})),Iu=e((()=>{r(),O()})),Lu=e((()=>{r(),O()})),Ru=e((()=>{r(),O()})),zu=e((()=>{r(),O()})),Bu=e((()=>{r(),O()})),Vu=e((()=>{r(),O()})),Hu=e((()=>{r(),O()})),Uu=e((()=>{r(),O()})),Wu=e((()=>{r(),O()})),Gu=e((()=>{r(),O()})),Ku=e((()=>{r(),O()})),qu=e((()=>{r(),O()})),Ju=e((()=>{r(),O()})),Yu=e((()=>{r(),O()})),Xu=e((()=>{r(),O()})),Zu=e((()=>{r(),O()})),Qu=e((()=>{r(),O()})),$u=e((()=>{r(),O()})),ed=e((()=>{r(),O()})),td=e((()=>{r(),O()})),nd=e((()=>{r(),O()})),rd=e((()=>{r(),O()})),id=e((()=>{r(),O()})),ad=e((()=>{r(),O()})),od=e((()=>{r(),O()})),sd=e((()=>{r(),O()})),cd=e((()=>{r(),O()})),ld=e((()=>{r(),O()})),ud=e((()=>{r(),O()})),dd=e((()=>{r(),O()})),fd=e((()=>{r(),O()})),pd=e((()=>{r(),O()})),md=e((()=>{r(),O()})),hd=e((()=>{r(),O()})),gd=e((()=>{r(),O()})),_d=e((()=>{r(),O()})),vd=e((()=>{r(),O()})),yd=e((()=>{r(),O()})),bd=e((()=>{r(),O()})),xd=e((()=>{r(),O()})),Sd=e((()=>{r(),O()})),Cd=e((()=>{r(),O()})),wd=e((()=>{r(),O()})),Td=e((()=>{r(),O()})),Ed=e((()=>{r(),O()})),Dd=e((()=>{r(),O()})),Od=e((()=>{r(),O()})),kd=e((()=>{r(),O()})),Ad=e((()=>{r(),O()})),jd=e((()=>{r(),O()})),Md=e((()=>{r(),O()})),Nd=e((()=>{r(),O()})),Pd=e((()=>{r(),O()})),Fd=e((()=>{r(),O()})),Id=e((()=>{r(),O()})),Ld=e((()=>{r(),O()})),Rd=e((()=>{r(),O()})),zd=e((()=>{r(),O()})),Bd=e((()=>{r(),O()})),Vd=e((()=>{r(),O()})),Hd=e((()=>{r(),O()})),Ud=e((()=>{r(),O()})),Wd=e((()=>{r(),O()})),Gd=e((()=>{r(),O()})),Kd=e((()=>{r(),O()})),qd=e((()=>{r(),O()})),Jd=e((()=>{r(),O()})),Yd=e((()=>{r(),O()})),Xd=e((()=>{r(),O()})),Zd=e((()=>{r(),O()})),Qd=e((()=>{r(),O()})),$d=e((()=>{r(),O()})),ef=e((()=>{r(),O()})),tf=e((()=>{r(),O()})),nf=e((()=>{r(),O()})),rf=e((()=>{r(),O()})),af=e((()=>{r(),O()})),of=e((()=>{r(),O()})),sf=e((()=>{r(),O()})),cf=e((()=>{r(),O()})),lf=e((()=>{r(),O()})),uf=e((()=>{r(),O()})),df=e((()=>{r(),O()})),ff=e((()=>{r(),O()})),pf=e((()=>{r(),O()})),mf=e((()=>{r(),O()})),hf=e((()=>{r(),O()})),gf=e((()=>{r(),O()})),_f=e((()=>{r(),O()})),vf=e((()=>{r(),O()})),yf=e((()=>{r(),O()})),bf=e((()=>{r(),O()})),xf=e((()=>{r(),O()})),Sf=e((()=>{r(),O()})),Cf=e((()=>{r(),O()})),wf=e((()=>{r(),O()})),Tf=e((()=>{r(),O()})),Ef=e((()=>{r(),O()})),Df=e((()=>{r(),O()})),Of=e((()=>{r(),O()})),kf=e((()=>{r(),O()})),Af=e((()=>{r(),O()})),jf=e((()=>{r(),O()})),Mf=e((()=>{r(),O()})),Nf=e((()=>{r(),O()})),Pf=e((()=>{r(),O()})),Ff=e((()=>{r(),O()})),If=e((()=>{r(),O()})),Lf=e((()=>{r(),O()})),Rf=e((()=>{r(),O()})),zf=e((()=>{r(),O()})),Bf=e((()=>{r(),O()})),Vf=e((()=>{r(),O()})),Hf=e((()=>{r(),O()})),Uf=e((()=>{r(),O()})),Wf=e((()=>{r(),O()})),Gf=e((()=>{r(),O()})),Kf=e((()=>{r(),O()})),qf=e((()=>{r(),O()})),Jf=e((()=>{r(),O()})),Yf=e((()=>{r(),O()})),Xf=e((()=>{r(),O()})),Zf=e((()=>{r(),O()})),Qf=e((()=>{r(),O()})),$f=e((()=>{r(),O()})),ep=e((()=>{r(),O()})),tp=e((()=>{r(),O()})),np=e((()=>{r(),O()})),rp=e((()=>{r(),O()})),ip=e((()=>{r(),O()})),ap=e((()=>{r(),O()})),op=e((()=>{r(),O()})),sp=e((()=>{r(),O()})),cp=e((()=>{r(),O()})),lp=e((()=>{r(),O()})),up=e((()=>{r(),O()})),dp=e((()=>{r(),O()})),fp=e((()=>{r(),O()})),pp=e((()=>{r(),O()})),mp=e((()=>{r(),O()})),hp=e((()=>{r(),O()})),gp=e((()=>{r(),O()})),_p=e((()=>{r(),O()})),vp=e((()=>{r(),O()})),yp=e((()=>{r(),O()})),bp=e((()=>{r(),O()})),xp=e((()=>{r(),O()})),Sp=e((()=>{r(),O()})),Cp=e((()=>{r(),O()})),wp=e((()=>{r(),O()})),Tp,Ep=e((()=>{r(),O(),j(),Tp=({slot:e,title:r,className:i,width:a=`24`,height:o=`24`,styles:s}={})=>t`
  <svg
    slot=${D(e)}
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
    style=${D(s)}
  >
    ${A(r,()=>n`<title>${r}</title>`)}
    <path
      d="M21 12H9m12-6H9m12 12H9m-4-6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0-6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
    />
  </svg>
`})),Dp=e((()=>{r(),O()})),Op=e((()=>{r(),O()})),kp=e((()=>{r(),O()})),Ap=e((()=>{r(),O()})),jp=e((()=>{r(),O()})),Mp=e((()=>{r(),O()})),Np=e((()=>{r(),O()})),Pp=e((()=>{r(),O()})),Fp=e((()=>{r(),O()})),Ip=e((()=>{r(),O()})),Lp=e((()=>{r(),O()})),Rp=e((()=>{r(),O()})),zp=e((()=>{r(),O()})),Bp=e((()=>{r(),O()})),Vp=e((()=>{r(),O()})),Hp=e((()=>{r(),O()})),Up=e((()=>{r(),O()})),Wp=e((()=>{r(),O()})),Gp=e((()=>{r(),O()})),Kp=e((()=>{r(),O()})),qp=e((()=>{r(),O()})),Jp=e((()=>{r(),O()})),Yp=e((()=>{r(),O()})),Xp=e((()=>{r(),O()})),Zp=e((()=>{r(),O()})),Qp=e((()=>{r(),O()})),$p=e((()=>{r(),O()})),em=e((()=>{r(),O()})),tm=e((()=>{r(),O()})),nm=e((()=>{r(),O()})),rm=e((()=>{r(),O()})),im=e((()=>{r(),O()})),am=e((()=>{r(),O()})),om=e((()=>{r(),O()})),sm=e((()=>{r(),O()})),cm=e((()=>{r(),O()})),lm=e((()=>{r(),O()})),um=e((()=>{r(),O()})),dm=e((()=>{r(),O()})),fm=e((()=>{r(),O()})),pm=e((()=>{r(),O()})),mm=e((()=>{r(),O()})),hm=e((()=>{r(),O()})),gm=e((()=>{r(),O()})),_m=e((()=>{r(),O()})),vm=e((()=>{r(),O()})),ym=e((()=>{r(),O()})),bm=e((()=>{r(),O()})),xm=e((()=>{r(),O()})),Sm=e((()=>{r(),O()})),Cm=e((()=>{r(),O()})),wm=e((()=>{r(),O()})),Tm=e((()=>{r(),O()})),Em=e((()=>{r(),O()})),Dm=e((()=>{r(),O()})),Om=e((()=>{r(),O()})),km=e((()=>{r(),O()})),Am=e((()=>{r(),O()})),jm=e((()=>{r(),O()})),Mm=e((()=>{r(),O()})),Nm=e((()=>{r(),O()})),Pm=e((()=>{r(),O()})),Fm=e((()=>{r(),O()})),Im=e((()=>{r(),O()})),Lm=e((()=>{r(),O()})),Rm=e((()=>{r(),O()})),zm=e((()=>{r(),O()})),Bm=e((()=>{r(),O()})),Vm=e((()=>{r(),O()})),Hm=e((()=>{r(),O()})),Um=e((()=>{r(),O()})),Wm=e((()=>{r(),O()})),Gm=e((()=>{r(),O()})),Km=e((()=>{r(),O()})),qm=e((()=>{r(),O()})),Jm=e((()=>{r(),O()})),Ym=e((()=>{r(),O()})),Xm=e((()=>{r(),O()})),Zm=e((()=>{r(),O()})),Qm=e((()=>{r(),O()})),$m=e((()=>{r(),O()})),eh=e((()=>{r(),O()})),th=e((()=>{r(),O()})),nh=e((()=>{r(),O()})),rh=e((()=>{r(),O()})),ih=e((()=>{r(),O()})),ah=e((()=>{r(),O()})),oh=e((()=>{r(),O()})),sh=e((()=>{r(),O()})),ch=e((()=>{r(),O()})),lh=e((()=>{r(),O()})),uh=e((()=>{r(),O()})),dh=e((()=>{r(),O()})),fh=e((()=>{r(),O()})),ph=e((()=>{r(),O()})),mh=e((()=>{r(),O()})),hh=e((()=>{r(),O()})),gh=e((()=>{r(),O()})),_h=e((()=>{r(),O()})),vh=e((()=>{r(),O()})),yh=e((()=>{r(),O()})),bh=e((()=>{r(),O()})),xh=e((()=>{r(),O()})),Sh=e((()=>{r(),O()})),Ch=e((()=>{r(),O()})),wh=e((()=>{r(),O()})),Th=e((()=>{r(),O()})),Eh=e((()=>{r(),O()})),Dh=e((()=>{r(),O()})),Oh=e((()=>{r(),O()})),kh=e((()=>{r(),O()})),Ah=e((()=>{r(),O()})),jh=e((()=>{r(),O()})),Mh=e((()=>{r(),O()})),Nh=e((()=>{r(),O()})),Ph=e((()=>{r(),O()})),Fh=e((()=>{r(),O()})),Ih=e((()=>{r(),O()})),Lh=e((()=>{r(),O()})),Rh=e((()=>{r(),O()})),zh=e((()=>{r(),O()})),Bh=e((()=>{r(),O()})),Vh=e((()=>{r(),O()})),Hh=e((()=>{r(),O()})),Uh=e((()=>{r(),O()})),Wh=e((()=>{r(),O()})),Gh=e((()=>{r(),O()})),Kh=e((()=>{r(),O()})),qh=e((()=>{r(),O()})),Jh=e((()=>{r(),O()})),Yh=e((()=>{r(),O()})),Xh=e((()=>{r(),O()})),Zh=e((()=>{r(),O()})),Qh=e((()=>{r(),O()})),$h=e((()=>{r(),O()})),eg=e((()=>{r(),O()})),tg=e((()=>{r(),O()})),ng=e((()=>{r(),O()})),rg=e((()=>{r(),O()})),ig=e((()=>{r(),O()})),ag=e((()=>{r(),O()})),og=e((()=>{r(),O()})),sg=e((()=>{r(),O()})),cg=e((()=>{r(),O()})),lg=e((()=>{r(),O()})),ug=e((()=>{r(),O()})),dg=e((()=>{r(),O()})),fg=e((()=>{r(),O()})),pg=e((()=>{r(),O()})),mg=e((()=>{r(),O()})),hg=e((()=>{r(),O()})),gg=e((()=>{r(),O()})),_g=e((()=>{r(),O()})),vg=e((()=>{r(),O()})),yg=e((()=>{r(),O()})),bg=e((()=>{r(),O()})),xg=e((()=>{r(),O()})),Sg=e((()=>{r(),O()})),Cg=e((()=>{r(),O()})),wg=e((()=>{r(),O()})),Tg=e((()=>{r(),O()})),Eg=e((()=>{r(),O()})),Dg=e((()=>{r(),O()})),Og=e((()=>{r(),O()})),kg=e((()=>{r(),O()})),Ag=e((()=>{r(),O()})),jg=e((()=>{r(),O()})),Mg=e((()=>{r(),O()})),Ng=e((()=>{r(),O()})),Pg=e((()=>{r(),O()})),Fg=e((()=>{r(),O()})),Ig=e((()=>{r(),O()})),Lg=e((()=>{r(),O()})),Rg=e((()=>{r(),O()})),zg=e((()=>{r(),O()})),Bg=e((()=>{r(),O()})),Vg=e((()=>{r(),O()})),Hg=e((()=>{r(),O()})),Ug=e((()=>{r(),O()})),Wg=e((()=>{r(),O()})),Gg=e((()=>{r(),O()})),Kg=e((()=>{r(),O()})),qg=e((()=>{r(),O()})),Jg=e((()=>{r(),O()})),Yg=e((()=>{r(),O()})),Xg=e((()=>{r(),O()})),Zg=e((()=>{r(),O()})),Qg=e((()=>{r(),O()})),$g=e((()=>{r(),O()})),e_=e((()=>{r(),O()})),t_=e((()=>{r(),O()})),n_=e((()=>{r(),O()})),r_=e((()=>{r(),O()})),i_=e((()=>{r(),O()})),a_=e((()=>{r(),O()})),o_=e((()=>{r(),O()})),s_=e((()=>{r(),O()})),c_=e((()=>{r(),O()})),l_=e((()=>{r(),O()})),u_=e((()=>{r(),O()})),d_=e((()=>{r(),O()})),f_=e((()=>{r(),O()})),p_=e((()=>{r(),O()})),m_=e((()=>{r(),O()})),h_=e((()=>{r(),O()})),g_=e((()=>{r(),O()})),__=e((()=>{r(),O()})),v_=e((()=>{r(),O()})),y_=e((()=>{r(),O()})),b_=e((()=>{r(),O()})),x_=e((()=>{r(),O()})),S_=e((()=>{r(),O()})),C_=e((()=>{r(),O()})),w_=e((()=>{r(),O()})),T_=e((()=>{r(),O()})),E_=e((()=>{r(),O()})),D_=e((()=>{r(),O()})),O_=e((()=>{r(),O()})),k_=e((()=>{r(),O()})),A_=e((()=>{r(),O()})),j_=e((()=>{r(),O()})),M_=e((()=>{r(),O()})),N_=e((()=>{r(),O()})),P_=e((()=>{r(),O()})),F_=e((()=>{r(),O()})),I_=e((()=>{r(),O()})),L_=e((()=>{r(),O()})),R_=e((()=>{r(),O()})),z_=e((()=>{r(),O()})),B_=e((()=>{r(),O()})),V_=e((()=>{r(),O()})),H_=e((()=>{r(),O()})),U_=e((()=>{r(),O()})),W_=e((()=>{r(),O()})),G_=e((()=>{r(),O()})),K_=e((()=>{r(),O()})),q_=e((()=>{r(),O()})),J_=e((()=>{r(),O()})),Y_=e((()=>{r(),O()})),X_=e((()=>{r(),O()})),Z_=e((()=>{r(),O()})),Q_=e((()=>{r(),O()})),$_=e((()=>{r(),O()})),ev=e((()=>{r(),O()})),tv=e((()=>{r(),O()})),nv=e((()=>{r(),O()})),rv=e((()=>{r(),O()})),iv=e((()=>{r(),O()})),av=e((()=>{r(),O()})),ov=e((()=>{r(),O()})),sv=e((()=>{r(),O()})),cv=e((()=>{r(),O()})),lv=e((()=>{r(),O()})),uv=e((()=>{r(),O()})),dv=e((()=>{r(),O()})),fv=e((()=>{r(),O()})),pv=e((()=>{r(),O()})),mv=e((()=>{r(),O()})),hv=e((()=>{r(),O()})),gv=e((()=>{r(),O()})),_v=e((()=>{r(),O()})),vv=e((()=>{r(),O()})),yv=e((()=>{r(),O()})),bv=e((()=>{r(),O()})),xv=e((()=>{r(),O()})),Sv=e((()=>{r(),O()})),Cv=e((()=>{r(),O()})),wv=e((()=>{r(),O()})),Tv=e((()=>{r(),O()})),Ev=e((()=>{r(),O()})),Dv=e((()=>{r(),O()})),Ov=e((()=>{r(),O()})),kv=e((()=>{r(),O()})),Av=e((()=>{r(),O()})),jv=e((()=>{r(),O()})),Mv=e((()=>{r(),O()})),Nv=e((()=>{r(),O()})),Pv=e((()=>{r(),O()})),Fv=e((()=>{r(),O()})),Iv=e((()=>{r(),O()})),Lv=e((()=>{r(),O()})),Rv=e((()=>{r(),O()})),zv=e((()=>{r(),O()})),Bv=e((()=>{r(),O()})),Vv=e((()=>{r(),O()})),Hv=e((()=>{r(),O()})),Uv=e((()=>{r(),O()})),Wv=e((()=>{r(),O()})),Gv=e((()=>{r(),O()})),Kv=e((()=>{r(),O()})),qv=e((()=>{r(),O()})),Jv=e((()=>{r(),O()})),Yv=e((()=>{r(),O()})),Xv=e((()=>{r(),O()})),Zv=e((()=>{r(),O()})),Qv=e((()=>{r(),O()})),$v=e((()=>{r(),O()})),ey=e((()=>{r(),O()})),ty=e((()=>{r(),O()})),ny=e((()=>{r(),O()})),ry=e((()=>{r(),O()})),iy=e((()=>{r(),O()})),ay=e((()=>{r(),O()})),oy=e((()=>{r(),O()})),sy=e((()=>{r(),O()})),cy=e((()=>{r(),O()})),ly=e((()=>{r(),O()})),uy,dy=e((()=>{r(),O(),j(),uy=({slot:e,title:r,className:i,width:a=`24`,height:o=`24`,styles:s}={})=>t`
  <svg
    slot=${D(e)}
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
    style=${D(s)}
  >
    ${A(r,()=>n`<title>${r}</title>`)}
    <path
      d="M3 7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 3 6.12 3 7.8 3h8.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V7.8Z"
    />
  </svg>
`})),fy=e((()=>{r(),O()})),py=e((()=>{r(),O()})),my=e((()=>{r(),O()})),hy=e((()=>{r(),O()})),gy=e((()=>{r(),O()})),_y=e((()=>{r(),O()})),vy=e((()=>{r(),O()})),yy=e((()=>{r(),O()})),by=e((()=>{r(),O()})),xy=e((()=>{r(),O()})),Sy=e((()=>{r(),O()})),Cy=e((()=>{r(),O()})),wy=e((()=>{r(),O()})),Ty=e((()=>{r(),O()})),Ey=e((()=>{r(),O()})),Dy=e((()=>{r(),O()})),Oy=e((()=>{r(),O()})),ky=e((()=>{r(),O()})),Ay=e((()=>{r(),O()})),jy=e((()=>{r(),O()})),My=e((()=>{r(),O()})),Ny=e((()=>{r(),O()})),Py=e((()=>{r(),O()})),Fy=e((()=>{r(),O()})),Iy=e((()=>{r(),O()})),Ly=e((()=>{r(),O()})),Ry=e((()=>{r(),O()})),zy=e((()=>{r(),O()})),By=e((()=>{r(),O()})),Vy=e((()=>{r(),O()})),Hy=e((()=>{r(),O()})),Uy=e((()=>{r(),O()})),Wy=e((()=>{r(),O()})),Gy=e((()=>{r(),O()})),Ky=e((()=>{r(),O()})),qy=e((()=>{r(),O()})),Jy=e((()=>{r(),O()})),Yy=e((()=>{r(),O()})),Xy=e((()=>{r(),O()})),Zy=e((()=>{r(),O()})),Qy=e((()=>{r(),O()})),$y=e((()=>{r(),O()})),eb=e((()=>{r(),O()})),tb=e((()=>{r(),O()})),nb=e((()=>{r(),O()})),rb=e((()=>{r(),O()})),ib=e((()=>{r(),O()})),ab=e((()=>{r(),O()})),ob=e((()=>{r(),O()})),sb=e((()=>{r(),O()})),cb=e((()=>{r(),O()})),lb=e((()=>{r(),O()})),ub=e((()=>{r(),O()})),db=e((()=>{r(),O()})),fb=e((()=>{r(),O()})),pb=e((()=>{r(),O()})),mb=e((()=>{r(),O()})),hb=e((()=>{r(),O()})),gb=e((()=>{r(),O()})),_b=e((()=>{r(),O()})),vb=e((()=>{r(),O()})),yb=e((()=>{r(),O()})),bb=e((()=>{r(),O()})),xb=e((()=>{r(),O()})),Sb=e((()=>{r(),O()})),Cb=e((()=>{r(),O()})),wb=e((()=>{r(),O()})),Tb=e((()=>{r(),O()})),Eb=e((()=>{r(),O()})),Db=e((()=>{r(),O()})),Ob=e((()=>{r(),O()})),kb=e((()=>{r(),O()})),Ab=e((()=>{r(),O()})),jb=e((()=>{r(),O()})),Mb=e((()=>{r(),O()})),Nb=e((()=>{r(),O()})),Pb=e((()=>{r(),O()})),Fb=e((()=>{r(),O()})),Ib=e((()=>{r(),O()})),Lb=e((()=>{r(),O()})),Rb=e((()=>{r(),O()})),zb=e((()=>{r(),O()})),Bb=e((()=>{r(),O()})),Vb=e((()=>{r(),O()})),Hb=e((()=>{r(),O()})),Ub=e((()=>{r(),O()})),Wb=e((()=>{r(),O()})),Gb=e((()=>{r(),O()})),Kb=e((()=>{r(),O()})),qb=e((()=>{r(),O()})),Jb=e((()=>{r(),O()})),Yb=e((()=>{r(),O()})),Xb=e((()=>{r(),O()})),Zb=e((()=>{r(),O()})),Qb=e((()=>{r(),O()})),$b=e((()=>{r(),O()})),ex=e((()=>{r(),O()})),tx=e((()=>{r(),O()})),nx=e((()=>{r(),O()})),rx=e((()=>{r(),O()})),ix=e((()=>{r(),O()})),ax=e((()=>{r(),O()})),ox=e((()=>{r(),O()})),sx=e((()=>{r(),O()})),cx=e((()=>{r(),O()})),lx=e((()=>{r(),O()})),ux=e((()=>{r(),O()})),dx=e((()=>{r(),O()})),fx=e((()=>{r(),O()})),px=e((()=>{r(),O()})),mx=e((()=>{r(),O()})),hx=e((()=>{r(),O()})),gx=e((()=>{r(),O()})),_x=e((()=>{r(),O()})),vx=e((()=>{r(),O()})),yx=e((()=>{r(),O()})),bx=e((()=>{r(),O()})),xx=e((()=>{r(),O()})),Sx=e((()=>{r(),O()})),Cx=e((()=>{r(),O()})),wx=e((()=>{r(),O()})),Tx=e((()=>{r(),O()})),Ex=e((()=>{r(),O()})),Dx=e((()=>{r(),O()})),Ox=e((()=>{r(),O()})),kx=e((()=>{r(),O()})),Ax=e((()=>{r(),O()})),jx=e((()=>{r(),O()})),Mx=e((()=>{r(),O()})),Nx=e((()=>{r(),O()})),Px=e((()=>{r(),O()})),Fx=e((()=>{r(),O()})),Ix=e((()=>{r(),O()})),Lx=e((()=>{r(),O()})),Rx=e((()=>{r(),O()})),zx=e((()=>{r(),O()})),Bx=e((()=>{r(),O()})),Vx=e((()=>{r(),O()})),Hx=e((()=>{r(),O()})),Ux=e((()=>{r(),O()})),Wx=e((()=>{r(),O()})),Gx=e((()=>{r(),O()})),Kx=e((()=>{r(),O()})),qx=e((()=>{r(),O()})),Jx=e((()=>{r(),O()})),Yx=e((()=>{r(),O()})),Xx=e((()=>{r(),O()})),Zx=e((()=>{r(),O()})),Qx=e((()=>{r(),O()})),$x=e((()=>{r(),O()})),eS=e((()=>{r(),O()})),tS=e((()=>{r(),O()})),nS=e((()=>{r(),O()})),rS=e((()=>{r(),O()})),iS=e((()=>{r(),O()})),aS=e((()=>{r(),O()})),oS=e((()=>{r(),O()})),sS=e((()=>{r(),O()})),cS=e((()=>{r(),O()})),lS=e((()=>{r(),O()})),uS=e((()=>{r(),O()})),dS=e((()=>{r(),O()})),fS=e((()=>{r(),O()})),pS=e((()=>{r(),O()})),mS=e((()=>{r(),O()})),hS=e((()=>{r(),O()})),gS=e((()=>{r(),O()})),_S=e((()=>{r(),O()})),vS=e((()=>{r(),O()})),yS=e((()=>{r(),O()})),bS=e((()=>{r(),O()})),xS=e((()=>{r(),O()})),SS=e((()=>{r(),O()})),CS=e((()=>{r(),O()})),wS=e((()=>{Me(),Ne(),Pe(),Fe(),Ie(),Le(),Re(),ze(),Be(),Ve(),He(),Ue(),We(),Ge(),Ke(),qe(),Je(),Ye(),Xe(),Ze(),Qe(),$e(),et(),tt(),nt(),rt(),it(),at(),ot(),st(),ct(),lt(),ut(),dt(),ft(),pt(),mt(),ht(),gt(),_t(),vt(),yt(),bt(),xt(),St(),Ct(),wt(),Tt(),Et(),Dt(),Ot(),kt(),At(),jt(),Mt(),Nt(),Pt(),Ft(),It(),Lt(),Rt(),zt(),Bt(),Vt(),Ht(),Ut(),Wt(),Gt(),Kt(),qt(),Jt(),Yt(),Xt(),Zt(),Qt(),$t(),en(),tn(),nn(),rn(),an(),on(),sn(),cn(),ln(),un(),dn(),fn(),pn(),mn(),hn(),gn(),_n(),vn(),yn(),bn(),xn(),Sn(),Cn(),wn(),Tn(),En(),Dn(),On(),kn(),An(),jn(),Mn(),Nn(),Pn(),Fn(),In(),Ln(),Rn(),zn(),Bn(),Vn(),Hn(),Un(),Wn(),Gn(),Kn(),qn(),Jn(),Yn(),Xn(),Zn(),Qn(),$n(),er(),tr(),nr(),rr(),ir(),ar(),or(),sr(),cr(),lr(),ur(),dr(),fr(),pr(),mr(),hr(),gr(),_r(),vr(),yr(),br(),xr(),Sr(),Cr(),wr(),Tr(),Er(),Dr(),Or(),kr(),Ar(),jr(),Mr(),Nr(),Pr(),Fr(),Ir(),Lr(),Rr(),zr(),Br(),Vr(),Hr(),Ur(),Wr(),Gr(),Kr(),qr(),Jr(),Yr(),Xr(),Zr(),Qr(),$r(),ei(),ti(),ni(),ri(),ii(),ai(),oi(),si(),ci(),li(),ui(),di(),fi(),pi(),mi(),hi(),gi(),_i(),vi(),yi(),bi(),xi(),Si(),Ci(),wi(),Ti(),Ei(),Di(),Oi(),ki(),Ai(),ji(),Mi(),Ni(),Pi(),Fi(),Ii(),Li(),Ri(),zi(),Bi(),Vi(),Hi(),Ui(),Wi(),Gi(),qi(),Ji(),Yi(),Xi(),Zi(),Qi(),$i(),ea(),ta(),na(),ra(),ia(),aa(),oa(),sa(),ca(),la(),ua(),da(),fa(),pa(),ma(),ha(),ga(),_a(),va(),ya(),ba(),xa(),Sa(),Ca(),wa(),Ta(),Ea(),Da(),Oa(),ka(),Aa(),ja(),Ma(),Na(),Pa(),Fa(),Ia(),La(),Ra(),za(),Ba(),Va(),Ha(),Ua(),Wa(),Ga(),Ka(),qa(),Ja(),Ya(),Xa(),Za(),Qa(),$a(),eo(),to(),no(),ro(),io(),ao(),oo(),so(),co(),lo(),uo(),fo(),mo(),ho(),go(),_o(),vo(),yo(),bo(),xo(),So(),Co(),wo(),To(),Eo(),Do(),Oo(),ko(),Ao(),jo(),Mo(),No(),Po(),Fo(),Io(),Lo(),Ro(),zo(),Bo(),Vo(),Ho(),Uo(),Wo(),Go(),Ko(),qo(),Jo(),Yo(),Xo(),Zo(),Qo(),$o(),es(),ts(),ns(),rs(),is(),as(),os(),ss(),cs(),ls(),us(),ds(),fs(),ps(),ms(),hs(),gs(),_s(),vs(),ys(),bs(),xs(),Ss(),Cs(),ws(),Ts(),Es(),Ds(),Os(),ks(),As(),js(),Ms(),Ns(),Ps(),Fs(),Is(),Ls(),Rs(),zs(),Bs(),Vs(),Hs(),Us(),Ws(),Gs(),Ks(),qs(),Js(),Ys(),Xs(),Zs(),Qs(),$s(),ec(),tc(),nc(),rc(),ic(),ac(),oc(),sc(),cc(),lc(),uc(),dc(),fc(),pc(),mc(),hc(),gc(),_c(),vc(),yc(),bc(),xc(),Sc(),Cc(),wc(),Tc(),Ec(),Dc(),Oc(),kc(),Ac(),jc(),Mc(),Nc(),Pc(),Fc(),Ic(),Lc(),Rc(),zc(),Bc(),Vc(),Hc(),Uc(),Wc(),Gc(),Kc(),qc(),Jc(),Yc(),Xc(),Zc(),Qc(),$c(),el(),tl(),nl(),rl(),il(),al(),ol(),sl(),cl(),ll(),ul(),dl(),fl(),pl(),ml(),hl(),gl(),_l(),vl(),yl(),bl(),xl(),Sl(),Cl(),wl(),Tl(),El(),Dl(),Ol(),kl(),Al(),jl(),Ml(),Nl(),Pl(),Fl(),Il(),Ll(),Rl(),zl(),Bl(),Vl(),Hl(),Ul(),Wl(),Gl(),Kl(),ql(),Jl(),Yl(),Xl(),Zl(),Ql(),$l(),eu(),tu(),nu(),ru(),iu(),au(),ou(),su(),cu(),lu(),uu(),du(),fu(),pu(),mu(),hu(),gu(),_u(),vu(),yu(),bu(),xu(),Su(),Cu(),wu(),Tu(),Eu(),Du(),Ou(),ku(),Au(),ju(),Mu(),Nu(),Pu(),Fu(),Iu(),Lu(),Ru(),zu(),Bu(),Vu(),Hu(),Uu(),Wu(),Gu(),Ku(),qu(),Ju(),Yu(),Xu(),Zu(),Qu(),$u(),ed(),td(),nd(),rd(),id(),ad(),od(),sd(),cd(),ld(),ud(),dd(),fd(),pd(),md(),hd(),gd(),_d(),vd(),yd(),bd(),xd(),Sd(),Cd(),wd(),Td(),Ed(),Dd(),Od(),kd(),Ad(),jd(),Md(),Nd(),Pd(),Fd(),Id(),Ld(),Rd(),zd(),Bd(),Vd(),Hd(),Ud(),Wd(),Gd(),Kd(),qd(),Jd(),Yd(),Xd(),Zd(),Qd(),$d(),ef(),tf(),nf(),rf(),af(),of(),sf(),cf(),lf(),uf(),df(),ff(),pf(),mf(),hf(),gf(),_f(),vf(),yf(),bf(),xf(),Sf(),Cf(),wf(),Tf(),Ef(),Df(),Of(),kf(),Af(),jf(),Mf(),Nf(),Pf(),Ff(),If(),Lf(),Rf(),zf(),Bf(),Vf(),Hf(),Uf(),Wf(),Gf(),Kf(),qf(),Jf(),Yf(),Xf(),Zf(),Qf(),$f(),ep(),tp(),np(),rp(),ip(),ap(),op(),sp(),cp(),lp(),up(),dp(),fp(),pp(),mp(),hp(),gp(),_p(),vp(),yp(),bp(),xp(),Sp(),Cp(),wp(),Ep(),Dp(),Op(),kp(),Ap(),jp(),Mp(),Np(),Pp(),Fp(),Ip(),Lp(),Rp(),zp(),Bp(),Vp(),Hp(),Up(),Wp(),Gp(),Kp(),qp(),Jp(),Yp(),Xp(),Zp(),Qp(),$p(),em(),tm(),nm(),rm(),im(),am(),om(),sm(),cm(),lm(),um(),dm(),fm(),pm(),mm(),hm(),gm(),_m(),vm(),ym(),bm(),xm(),Sm(),Cm(),wm(),Tm(),Em(),Dm(),Om(),km(),Am(),jm(),Mm(),Nm(),Pm(),Fm(),Im(),Lm(),Rm(),zm(),Bm(),Vm(),Hm(),Um(),Wm(),Gm(),Km(),qm(),Jm(),Ym(),Xm(),Zm(),Qm(),$m(),eh(),th(),nh(),rh(),ih(),ah(),oh(),sh(),ch(),lh(),uh(),dh(),fh(),ph(),mh(),hh(),gh(),_h(),vh(),yh(),bh(),xh(),Sh(),Ch(),wh(),Th(),Eh(),Dh(),Oh(),kh(),Ah(),jh(),Mh(),Nh(),Ph(),Fh(),Ih(),Lh(),Rh(),zh(),Bh(),Vh(),Hh(),Uh(),Wh(),Gh(),Kh(),qh(),Jh(),Yh(),Xh(),Zh(),Qh(),$h(),eg(),tg(),ng(),rg(),ig(),ag(),og(),sg(),cg(),lg(),ug(),dg(),fg(),pg(),mg(),hg(),gg(),_g(),vg(),yg(),bg(),xg(),Sg(),Cg(),wg(),Tg(),Eg(),Dg(),Og(),kg(),Ag(),jg(),Mg(),Ng(),Pg(),Fg(),Ig(),Lg(),Rg(),zg(),Bg(),Vg(),Hg(),Ug(),Wg(),Gg(),Kg(),qg(),Jg(),Yg(),Xg(),Zg(),Qg(),$g(),e_(),t_(),n_(),r_(),i_(),a_(),o_(),s_(),c_(),l_(),u_(),d_(),f_(),p_(),m_(),h_(),g_(),__(),v_(),y_(),b_(),x_(),S_(),C_(),w_(),T_(),E_(),D_(),O_(),k_(),A_(),j_(),M_(),N_(),P_(),F_(),I_(),L_(),R_(),z_(),B_(),V_(),H_(),U_(),W_(),G_(),K_(),q_(),J_(),Y_(),X_(),Z_(),Q_(),$_(),ev(),tv(),nv(),rv(),iv(),av(),ov(),sv(),cv(),lv(),uv(),dv(),fv(),pv(),mv(),hv(),gv(),_v(),vv(),yv(),bv(),xv(),Sv(),Cv(),wv(),Tv(),Ev(),Dv(),Ov(),kv(),Av(),jv(),Mv(),Nv(),Pv(),Fv(),Iv(),Lv(),Rv(),zv(),Bv(),Vv(),Hv(),Uv(),Wv(),Gv(),Kv(),qv(),Jv(),Yv(),Xv(),Zv(),Qv(),$v(),ey(),ty(),ny(),ry(),iy(),ay(),oy(),sy(),cy(),ly(),dy(),fy(),py(),my(),hy(),gy(),_y(),vy(),yy(),by(),xy(),Sy(),Cy(),wy(),Ty(),Ey(),Dy(),Oy(),ky(),Ay(),jy(),My(),Ny(),Py(),Fy(),Iy(),Ly(),Ry(),zy(),By(),Vy(),Hy(),Uy(),Wy(),Gy(),Ky(),qy(),Jy(),Yy(),Xy(),Zy(),Qy(),$y(),eb(),tb(),nb(),rb(),ib(),ab(),ob(),sb(),cb(),lb(),ub(),db(),fb(),pb(),mb(),hb(),gb(),_b(),vb(),yb(),bb(),xb(),Sb(),Cb(),wb(),Tb(),Eb(),Db(),Ob(),kb(),Ab(),jb(),Mb(),Nb(),Pb(),Fb(),Ib(),Lb(),Rb(),zb(),Bb(),Vb(),Hb(),Ub(),Wb(),Gb(),Kb(),qb(),Jb(),Yb(),Xb(),Zb(),Qb(),$b(),ex(),tx(),nx(),rx(),ix(),ax(),ox(),sx(),cx(),lx(),ux(),dx(),fx(),px(),mx(),hx(),gx(),_x(),vx(),yx(),bx(),xx(),Sx(),Cx(),wx(),Tx(),Ex(),Dx(),Ox(),kx(),Ax(),jx(),Mx(),Nx(),Px(),Fx(),Ix(),Lx(),Rx(),zx(),Bx(),Vx(),Hx(),Ux(),Wx(),Gx(),Kx(),qx(),Jx(),Yx(),Xx(),Zx(),Qx(),$x(),eS(),tS(),nS(),rS(),iS(),aS(),oS(),sS(),cS(),lS(),uS(),dS(),fS(),pS(),mS(),hS(),gS(),_S(),vS(),yS(),bS(),xS(),SS(),CS()}));function TS(){let e=[],t=Object.create(null),n;return t.get=(r,i)=>(n?.revoke?.(),i===K?e:(e.push(i),n=Proxy.revocable(r,t),n.proxy)),Proxy.revocable(Object.create(null),t).proxy}function M(e,t){let{[K]:n}=e(TS()),r=t?.keySeparator??`.`,i=t?.nsSeparator??`:`,a=t?.enableSelector===`strict`;if(n.length>1&&i){let e=t?.ns,o=a?Array.isArray(e)?e:e?[e]:null:Array.isArray(e)?e:null;if(o&&(a?o:o.length>1?o.slice(1):[]).includes(n[0]))return`${n[0]}${i}${n.slice(1).join(r)}`}return n.join(r)}var N,P,F,ES,DS,OS,I,L,kS,AS,R,jS,MS,z,NS,PS,FS,IS,LS,RS,B,V,zS,BS,H,U,W,G,K,q,VS,HS,US,WS,GS,KS,qS,JS,YS,XS,ZS,QS,$S,eC,J,tC,Y,nC,rC,X,iC,aC=e((()=>{N=e=>typeof e==`string`,P=()=>{let e,t,n=new Promise((n,r)=>{e=n,t=r});return n.resolve=e,n.reject=t,n},F=e=>e==null?``:String(e),ES=(e,t,n)=>{e.forEach(e=>{t[e]&&(n[e]=t[e])})},DS=/###/g,OS=e=>e&&e.includes(`###`)?e.replace(DS,`.`):e,I=e=>!e||N(e),L=(e,t,n)=>{let r=N(t)?t.split(`.`):t,i=0;for(;i<r.length-1;){if(I(e))return{};let t=OS(r[i]);!e[t]&&n&&(e[t]=new n),e=Object.prototype.hasOwnProperty.call(e,t)?e[t]:{},++i}return I(e)?{}:{obj:e,k:OS(r[i])}},kS=(e,t,n)=>{let{obj:r,k:i}=L(e,t,Object);if(r!==void 0||t.length===1){r[i]=n;return}let a=t[t.length-1],o=t.slice(0,t.length-1),s=L(e,o,Object);for(;s.obj===void 0&&o.length;)a=`${o[o.length-1]}.${a}`,o=o.slice(0,o.length-1),s=L(e,o,Object),s?.obj&&s.obj[`${s.k}.${a}`]!==void 0&&(s.obj=void 0);s.obj[`${s.k}.${a}`]=n},AS=(e,t,n,r)=>{let{obj:i,k:a}=L(e,t,Object);i[a]=i[a]||[],i[a].push(n)},R=(e,t)=>{let{obj:n,k:r}=L(e,t);if(n&&Object.prototype.hasOwnProperty.call(n,r))return n[r]},jS=(e,t,n)=>{let r=R(e,n);return r===void 0?R(t,n):r},MS=(e,t,n)=>{for(let r in t)r!==`__proto__`&&r!==`constructor`&&(Object.prototype.hasOwnProperty.call(e,r)?N(e[r])||e[r]instanceof String||N(t[r])||t[r]instanceof String?n&&(e[r]=t[r]):MS(e[r],t[r],n):e[r]=t[r]);return e},z=e=>e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,`\\$&`),NS={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`,"/":`&#x2F;`},PS=e=>N(e)?e.replace(/[&<>"'\/]/g,e=>NS[e]):e,FS=class{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){let t=this.regExpMap.get(e);if(t!==void 0)return t;let n=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,n),this.regExpQueue.push(e),n}},IS=[` `,`,`,`?`,`!`,`;`],LS=new FS(20),RS=(e,t,n)=>{t||=``,n||=``;let r=IS.filter(e=>!t.includes(e)&&!n.includes(e));if(r.length===0)return!0;let i=LS.getRegExp(`(${r.map(e=>e===`?`?`\\?`:e).join(`|`)})`),a=!i.test(e);if(!a){let t=e.indexOf(n);t>0&&!i.test(e.substring(0,t))&&(a=!0)}return a},B=(e,t,n=`.`)=>{if(!e)return;if(e[t])return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0;let r=t.split(n),i=e;for(let e=0;e<r.length;){if(!i||typeof i!=`object`)return;let t,a=``;for(let o=e;o<r.length;++o)if(o!==e&&(a+=n),a+=r[o],t=i[a],t!==void 0){if([`string`,`number`,`boolean`].includes(typeof t)&&o<r.length-1)continue;e+=o-e+1;break}i=t}return i},V=e=>e?.replace(/_/g,`-`),zS={type:`logger`,log(e){this.output(`log`,e)},warn(e){this.output(`warn`,e)},error(e){this.output(`error`,e)},output(e,t){console?.[e]?.apply?.(console,t)}},BS=class e{constructor(e,t={}){this.init(e,t)}init(e,t={}){this.prefix=t.prefix||`i18next:`,this.logger=e||zS,this.options=t,this.debug=t.debug}log(...e){return this.forward(e,`log`,``,!0)}warn(...e){return this.forward(e,`warn`,``,!0)}error(...e){return this.forward(e,`error`,``)}deprecate(...e){return this.forward(e,`warn`,`WARNING DEPRECATED: `,!0)}forward(e,t,n,r){return r&&!this.debug?null:(e=e.map(e=>N(e)?e.replace(/[\r\n\x00-\x1F\x7F]/g,` `):e),N(e[0])&&(e[0]=`${n}${this.prefix} ${e[0]}`),this.logger[t](e))}create(t){return new e(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return t||=this.options,t.prefix=t.prefix||this.prefix,new e(this.logger,t)}},H=new BS,U=class{constructor(){this.observers={}}on(e,t){return e.split(` `).forEach(e=>{this.observers[e]||(this.observers[e]=new Map);let n=this.observers[e].get(t)||0;this.observers[e].set(t,n+1)}),this}off(e,t){if(this.observers[e]){if(!t){delete this.observers[e];return}this.observers[e].delete(t)}}once(e,t){let n=(...r)=>{t(...r),this.off(e,n)};return this.on(e,n),this}emit(e,...t){this.observers[e]&&Array.from(this.observers[e].entries()).forEach(([e,n])=>{for(let r=0;r<n;r++)e(...t)}),this.observers[`*`]&&Array.from(this.observers[`*`].entries()).forEach(([n,r])=>{for(let i=0;i<r;i++)n(e,...t)})}},W=class extends U{constructor(e,t={ns:[`translation`],defaultNS:`translation`}){super(),this.data=e||{},this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator=`.`),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.includes(e)||this.options.ns.push(e)}removeNamespaces(e){let t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,n,r={}){let i=r.keySeparator===void 0?this.options.keySeparator:r.keySeparator,a=r.ignoreJSONStructure===void 0?this.options.ignoreJSONStructure:r.ignoreJSONStructure,o;e.includes(`.`)?o=e.split(`.`):(o=[e,t],n&&(Array.isArray(n)?o.push(...n):N(n)&&i?o.push(...n.split(i)):o.push(n)));let s=R(this.data,o);return!s&&!t&&!n&&e.includes(`.`)&&(e=o[0],t=o[1],n=o.slice(2).join(`.`)),s||!a||!N(n)?s:B(this.data?.[e]?.[t],n,i)}addResource(e,t,n,r,i={silent:!1}){let a=i.keySeparator===void 0?this.options.keySeparator:i.keySeparator,o=[e,t];n&&(o=o.concat(a?n.split(a):n)),e.includes(`.`)&&(o=e.split(`.`),r=t,t=o[1]),this.addNamespaces(t),kS(this.data,o,r),i.silent||this.emit(`added`,e,t,n,r)}addResources(e,t,n,r={silent:!1}){for(let r in n)(N(n[r])||Array.isArray(n[r]))&&this.addResource(e,t,r,n[r],{silent:!0});r.silent||this.emit(`added`,e,t,n)}addResourceBundle(e,t,n,r,i,a={silent:!1,skipCopy:!1}){let o=[e,t];e.includes(`.`)&&(o=e.split(`.`),r=n,n=t,t=o[1]),this.addNamespaces(t);let s=R(this.data,o)||{};a.skipCopy||(n=JSON.parse(JSON.stringify(n))),r?MS(s,n,i):s={...s,...n},kS(this.data,o,s),a.silent||this.emit(`added`,e,t,n)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit(`removed`,e,t)}hasResourceBundle(e,t){return this.getResource(e,t)!==void 0}getResourceBundle(e,t){return t||=this.options.defaultNS,this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){let t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(e=>t[e]&&Object.keys(t[e]).length>0)}toJSON(){return this.data}},G={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,n,r,i){return e.forEach(e=>{t=this.processors[e]?.process(t,n,r,i)??t}),t}},K=Symbol(`i18next/PATH_KEY`),q=e=>!N(e)&&typeof e!=`boolean`&&typeof e!=`number`,VS=class e extends U{constructor(e,t={}){super(),ES([`resourceStore`,`languageUtils`,`pluralResolver`,`interpolator`,`backendConnector`,`i18nFormat`,`utils`],e,this),this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator=`.`),this.logger=H.create(`translator`),this.checkedLoadedFor={}}changeLanguage(e){e&&(this.language=e)}exists(e,t={interpolation:{}}){let n={...t};if(e==null)return!1;let r=this.resolve(e,n);if(r?.res===void 0)return!1;let i=q(r.res);return!(n.returnObjects===!1&&i)}extractFromKey(e,t){let n=t.nsSeparator===void 0?this.options.nsSeparator:t.nsSeparator;n===void 0&&(n=`:`);let r=t.keySeparator===void 0?this.options.keySeparator:t.keySeparator,i=t.ns||this.options.defaultNS||[],a=n&&e.includes(n),o=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!RS(e,n,r);if(a&&!o){let t=e.match(this.interpolator.nestingRegexp);if(t&&t.length>0)return{key:e,namespaces:N(i)?[i]:i};let a=e.split(n);(n!==r||n===r&&this.options.ns.includes(a[0]))&&(i=a.shift()),e=a.join(r)}return{key:e,namespaces:N(i)?[i]:i}}translate(t,n,r){let i=typeof n==`object`?{...n}:n;if(typeof i!=`object`&&this.options.overloadTranslationOptionHandler&&(i=this.options.overloadTranslationOptionHandler(arguments)),typeof i==`object`&&(i={...i}),i||={},t==null)return``;typeof t==`function`&&(t=M(t,{...this.options,...i})),Array.isArray(t)||(t=[String(t)]),t=t.map(e=>typeof e==`function`?M(e,{...this.options,...i}):String(e));let a=i.returnDetails===void 0?this.options.returnDetails:i.returnDetails,o=i.keySeparator===void 0?this.options.keySeparator:i.keySeparator,{key:s,namespaces:c}=this.extractFromKey(t[t.length-1],i),l=c[c.length-1],u=i.nsSeparator===void 0?this.options.nsSeparator:i.nsSeparator;u===void 0&&(u=`:`);let d=i.lng||this.language,f=i.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(d?.toLowerCase()===`cimode`)return f?a?{res:`${l}${u}${s}`,usedKey:s,exactUsedKey:s,usedLng:d,usedNS:l,usedParams:this.getUsedParamsDetails(i)}:`${l}${u}${s}`:a?{res:s,usedKey:s,exactUsedKey:s,usedLng:d,usedNS:l,usedParams:this.getUsedParamsDetails(i)}:s;let p=this.resolve(t,i),m=p?.res,h=p?.usedKey||s,g=p?.exactUsedKey||s,_=[`[object Number]`,`[object Function]`,`[object RegExp]`],v=i.joinArrays===void 0?this.options.joinArrays:i.joinArrays,y=!this.i18nFormat||this.i18nFormat.handleAsObject,b=i.count!==void 0&&!N(i.count),x=e.hasDefaultValue(i),S=b?this.pluralResolver.getSuffix(d,i.count,i):``,C=i.ordinal&&b?this.pluralResolver.getSuffix(d,i.count,{ordinal:!1}):``,w=b&&!i.ordinal&&i.count===0,T=w&&i[`defaultValue${this.options.pluralSeparator}zero`]||i[`defaultValue${S}`]||i[`defaultValue${C}`]||i.defaultValue,E=m;y&&!m&&x&&(E=T);let D=q(E),O=Object.prototype.toString.apply(E);if(y&&E&&D&&!_.includes(O)&&!(N(v)&&Array.isArray(E))){if(!i.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn(`accessing an object - but returnObjects options is not enabled!`);let e=this.options.returnedObjectHandler?this.options.returnedObjectHandler(h,E,{...i,ns:c}):`key '${s} (${this.language})' returned an object instead of string.`;return a?(p.res=e,p.usedParams=this.getUsedParamsDetails(i),p):e}if(o){let e=Array.isArray(E),t=e?[]:{},n=e?g:h;for(let e in E)if(Object.prototype.hasOwnProperty.call(E,e)){let r=`${n}${o}${e}`;x&&!m?t[e]=this.translate(r,{...i,defaultValue:q(T)?T[e]:void 0,joinArrays:!1,ns:c}):t[e]=this.translate(r,{...i,joinArrays:!1,ns:c}),t[e]===r&&(t[e]=E[e])}m=t}}else if(y&&N(v)&&Array.isArray(m))m=m.join(v),m&&=this.extendTranslation(m,t,i,r);else{let e=!1,n=!1;!this.isValidLookup(m)&&x&&(e=!0,m=T),this.isValidLookup(m)||(n=!0,m=s);let a=(i.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&n?void 0:m,c=x&&T!==m&&this.options.updateMissing;if(n||e||c){if(this.logger.log(c?`updateKey`:`missingKey`,d,l,b&&!c?`${s}${this.pluralResolver.getSuffix(d,i.count,i)}`:s,c?T:m),o){let e=this.resolve(s,{...i,keySeparator:!1});e&&e.res&&this.logger.warn(`Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.`)}let e=[],t=this.languageUtils.getFallbackCodes(this.options.fallbackLng,i.lng||this.language);if(this.options.saveMissingTo===`fallback`&&t&&t[0])for(let n=0;n<t.length;n++)e.push(t[n]);else this.options.saveMissingTo===`all`?e=this.languageUtils.toResolveHierarchy(i.lng||this.language):e.push(i.lng||this.language);let n=(e,t,n)=>{let r=x&&n!==m?n:a;this.options.missingKeyHandler?this.options.missingKeyHandler(e,l,t,r,c,i):this.backendConnector?.saveMissing&&this.backendConnector.saveMissing(e,l,t,r,c,i),this.emit(`missingKey`,e,l,t,m)};this.options.saveMissing&&(this.options.saveMissingPlurals&&b?e.forEach(e=>{let t=this.pluralResolver.getSuffixes(e,i);w&&i[`defaultValue${this.options.pluralSeparator}zero`]&&!t.includes(`${this.options.pluralSeparator}zero`)&&t.push(`${this.options.pluralSeparator}zero`),t.forEach(t=>{n([e],s+t,i[`defaultValue${t}`]||T)})}):n(e,s,T))}m=this.extendTranslation(m,t,i,p,r),n&&m===s&&this.options.appendNamespaceToMissingKey&&(m=`${l}${u}${s}`),(n||e)&&this.options.parseMissingKeyHandler&&(m=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}${u}${s}`:s,e?m:void 0,i))}return a?(p.res=m,p.usedParams=this.getUsedParamsDetails(i),p):m}extendTranslation(e,t,n,r,i){if(this.i18nFormat?.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...n},n.lng||this.language||r.usedLng,r.usedNS,r.usedKey,{resolved:r});else if(!n.skipInterpolation){n.interpolation&&this.interpolator.init({...n,interpolation:{...this.options.interpolation,...n.interpolation}});let a=N(e)&&(n?.interpolation?.skipOnVariables===void 0?this.options.interpolation.skipOnVariables:n.interpolation.skipOnVariables),o;if(a){let t=e.match(this.interpolator.nestingRegexp);o=t&&t.length}let s=n.replace&&!N(n.replace)?n.replace:n;if(this.options.interpolation.defaultVariables&&(s={...this.options.interpolation.defaultVariables,...s}),e=this.interpolator.interpolate(e,s,n.lng||this.language||r.usedLng,n),a){let t=e.match(this.interpolator.nestingRegexp),r=t&&t.length;o<r&&(n.nest=!1)}!n.lng&&r&&r.res&&(n.lng=this.language||r.usedLng),n.nest!==!1&&(e=this.interpolator.nest(e,(...e)=>i?.[0]===e[0]&&!n.context?(this.logger.warn(`It seems you are nesting recursively key: ${e[0]} in key: ${t[0]}`),null):this.translate(...e,t),n)),n.interpolation&&this.interpolator.reset()}let a=n.postProcess||this.options.postProcess,o=N(a)?[a]:a;return e!=null&&o?.length&&n.applyPostProcessor!==!1&&(e=G.handle(o,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...r,usedParams:this.getUsedParamsDetails(n)},...n}:n,this)),e}resolve(e,t={}){let n,r,i,a,o;return N(e)&&(e=[e]),Array.isArray(e)&&(e=e.map(e=>typeof e==`function`?M(e,{...this.options,...t}):e)),e.forEach(e=>{if(this.isValidLookup(n))return;let s=this.extractFromKey(e,t),c=s.key;r=c;let l=s.namespaces;this.options.fallbackNS&&(l=l.concat(this.options.fallbackNS));let u=t.count!==void 0&&!N(t.count),d=u&&!t.ordinal&&t.count===0,f=t.context!==void 0&&(N(t.context)||typeof t.context==`number`)&&t.context!==``,p=t.lngs?t.lngs:this.languageUtils.toResolveHierarchy(t.lng||this.language,t.fallbackLng);l.forEach(e=>{this.isValidLookup(n)||(o=e,!this.checkedLoadedFor[`${p[0]}-${e}`]&&this.utils?.hasLoadedNamespace&&!this.utils?.hasLoadedNamespace(o)&&(this.checkedLoadedFor[`${p[0]}-${e}`]=!0,this.logger.warn(`key "${r}" for languages "${p.join(`, `)}" won't get resolved as namespace "${o}" was not yet loaded`,`This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!`)),p.forEach(r=>{if(this.isValidLookup(n))return;a=r;let o=[c];if(this.i18nFormat?.addLookupKeys)this.i18nFormat.addLookupKeys(o,c,r,e,t);else{let e;u&&(e=this.pluralResolver.getSuffix(r,t.count,t));let n=`${this.options.pluralSeparator}zero`,i=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(u&&(t.ordinal&&e.startsWith(i)&&o.push(c+e.replace(i,this.options.pluralSeparator)),o.push(c+e),d&&o.push(c+n)),f){let r=`${c}${this.options.contextSeparator||`_`}${t.context}`;o.push(r),u&&(t.ordinal&&e.startsWith(i)&&o.push(r+e.replace(i,this.options.pluralSeparator)),o.push(r+e),d&&o.push(r+n))}}let s;for(;s=o.pop();)this.isValidLookup(n)||(i=s,n=this.getResource(r,e,s,t))}))})}),{res:n,usedKey:r,exactUsedKey:i,usedLng:a,usedNS:o}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e===``)}getResource(e,t,n,r={}){return this.i18nFormat?.getResource?this.i18nFormat.getResource(e,t,n,r):this.resourceStore.getResource(e,t,n,r)}getUsedParamsDetails(e={}){let t=[`defaultValue`,`ordinal`,`context`,`replace`,`lng`,`lngs`,`fallbackLng`,`ns`,`keySeparator`,`nsSeparator`,`returnObjects`,`returnDetails`,`joinArrays`,`postProcess`,`interpolation`],n=e.replace&&!N(e.replace),r=n?e.replace:e;if(n&&e.count!==void 0&&(r={...r,count:e.count}),this.options.interpolation.defaultVariables&&(r={...this.options.interpolation.defaultVariables,...r}),!n){r={...r};for(let e of t)delete r[e]}return r}static hasDefaultValue(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&t.startsWith(`defaultValue`)&&e[t]!==void 0)return!0;return!1}},HS=class{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=H.create(`languageUtils`),this.resolveHierarchyCache={}}clearCache(){this.resolveHierarchyCache={}}getScriptPartFromCode(e){if(e=V(e),!e||!e.includes(`-`))return null;let t=e.split(`-`);return t.length===2||(t.pop(),t[t.length-1].toLowerCase()===`x`)?null:this.formatLanguageCode(t.join(`-`))}getLanguagePartFromCode(e){if(e=V(e),!e||!e.includes(`-`))return e;let t=e.split(`-`);return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(N(e)&&e.includes(`-`)){let t;try{t=Intl.getCanonicalLocales(e)[0]}catch{}return t&&this.options.lowerCaseLng&&(t=t.toLowerCase()),t||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load===`languageOnly`||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.includes(e)}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(e=>{if(t)return;let n=this.formatLanguageCode(e);(!this.options.supportedLngs||this.isSupportedCode(n))&&(t=n)}),!t&&this.options.supportedLngs&&e.forEach(e=>{if(t)return;let n=this.getScriptPartFromCode(e);if(this.isSupportedCode(n))return t=n;let r=this.getLanguagePartFromCode(e);if(this.isSupportedCode(r))return t=r;t=this.options.supportedLngs.find(e=>e===r?!0:!e.includes(`-`)&&!r.includes(`-`)?!1:!!(e.includes(`-`)&&!r.includes(`-`)&&e.slice(0,e.indexOf(`-`))===r||e.startsWith(r)&&r.length>1))}),t||=this.getFallbackCodes(this.options.fallbackLng)[0],t}getFallbackCodes(e,t){if(!e)return[];if(typeof e==`function`&&(e=e(t)),N(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let n=e[t];return n||=e[this.getScriptPartFromCode(t)],n||=e[this.formatLanguageCode(t)],n||=e[this.getLanguagePartFromCode(t)],n||=e.default,n||[]}toResolveHierarchy(e,t){let n=this.options.fallbackLng,r=Array.isArray(n)?n.join(`|`):n;r!==this._cachedFallbackLng&&(this.resolveHierarchyCache={},this._cachedFallbackLng=r);let i=t===void 0||t===!1||N(t),a=t===void 0&&typeof this.options.fallbackLng==`function`,o=N(e)&&i&&!a,s=null;if(o){let n;n=t===void 0?`undefined`:t===!1?`boolean:false`:`string:${t}`,s=`${e.length}:${e}|${n}`}if(s!==null){let e=this.resolveHierarchyCache[s];if(e!==void 0)return e.slice()}let c=this.getFallbackCodes((t===!1?[]:t)||this.options.fallbackLng||[],e),l=[],u=e=>{e&&(this.isSupportedCode(e)?l.push(e):this.logger.warn(`rejecting language code not found in supportedLngs: ${e}`))};return N(e)&&(e.includes(`-`)||e.includes(`_`))?(this.options.load!==`languageOnly`&&u(this.formatLanguageCode(e)),this.options.load!==`languageOnly`&&this.options.load!==`currentOnly`&&u(this.getScriptPartFromCode(e)),this.options.load!==`currentOnly`&&u(this.getLanguagePartFromCode(e))):N(e)&&u(this.formatLanguageCode(e)),c.forEach(e=>{l.includes(e)||u(this.formatLanguageCode(e))}),s===null?l:(this.resolveHierarchyCache[s]=l,l.slice())}},US={zero:0,one:1,two:2,few:3,many:4,other:5},WS={select:e=>e===1?`one`:`other`,resolvedOptions:()=>({pluralCategories:[`one`,`other`]})},GS=class{constructor(e,t={}){this.languageUtils=e,this.options=t,this.logger=H.create(`pluralResolver`),this.pluralRulesCache={}}clearCache(){this.pluralRulesCache={}}getRule(e,t={}){let n=V(e===`dev`?`en`:e),r=t.ordinal?`ordinal`:`cardinal`,i=JSON.stringify({cleanedCode:n,type:r});if(i in this.pluralRulesCache)return this.pluralRulesCache[i];let a;try{a=new Intl.PluralRules(n,{type:r})}catch{if(typeof Intl>`u`)return this.logger.error(`No Intl support, please use an Intl polyfill!`),WS;if(!e.match(/-|_/))return WS;let n=this.languageUtils.getLanguagePartFromCode(e);a=this.getRule(n,t)}return this.pluralRulesCache[i]=a,a}needsPlural(e,t={}){let n=this.getRule(e,t);return n||=this.getRule(`dev`,t),n?.resolvedOptions().pluralCategories.length>1}getPluralFormsOfKey(e,t,n={}){return this.getSuffixes(e,n).map(e=>`${t}${e}`)}getSuffixes(e,t={}){let n=this.getRule(e,t);return n||=this.getRule(`dev`,t),n?n.resolvedOptions().pluralCategories.sort((e,t)=>US[e]-US[t]).map(e=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:``}${e}`):[]}getSuffix(e,t,n={}){let r=this.getRule(e,n);return r?`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:``}${r.select(t)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix(`dev`,t,n))}},KS=(e,t,n,r=`.`,i=!0)=>{let a=jS(e,t,n);return!a&&i&&N(n)&&(a=B(e,n,r),a===void 0&&(a=B(t,n,r))),a},qS=e=>e.replace(/\$/g,`$$$$`),JS=class{constructor(e={}){this.logger=H.create(`interpolator`),this.options=e,this.format=e?.interpolation?.format||(e=>e),this.init(e)}init(e={}){e.interpolation||={escapeValue:!0};let{escape:t,escapeValue:n,useRawValueToEscape:r,prefix:i,prefixEscaped:a,suffix:o,suffixEscaped:s,formatSeparator:c,unescapeSuffix:l,unescapePrefix:u,nestingPrefix:d,nestingPrefixEscaped:f,nestingSuffix:p,nestingSuffixEscaped:m,nestingOptionsSeparator:h,maxReplaces:g,alwaysFormat:_}=e.interpolation;this.escape=t===void 0?PS:t,this.escapeValue=n===void 0?!0:n,this.useRawValueToEscape=r===void 0?!1:r,this.prefix=i?z(i):a||`{{`,this.suffix=o?z(o):s||`}}`,this.formatSeparator=c||`,`,this.unescapePrefix=l?``:u?z(u):`-`,this.unescapeSuffix=this.unescapePrefix?``:l?z(l):``,this.nestingPrefix=d?z(d):f||z(`$t(`),this.nestingSuffix=p?z(p):m||z(`)`),this.nestingOptionsSeparator=h||`,`,this.maxReplaces=g||1e3,this.alwaysFormat=_===void 0?!1:_,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){let e=(e,t)=>e?.source===t?(e.lastIndex=0,e):new RegExp(t,`g`);this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)}interpolate(e,t,n,r){let i,a,o,s=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=e=>{if(!e.includes(this.formatSeparator)){let i=KS(t,s,e,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(i,void 0,n,{...r,...t,interpolationkey:e}):i}let i=e.split(this.formatSeparator),a=i.shift().trim(),o=i.join(this.formatSeparator).trim();return this.format(KS(t,s,a,this.options.keySeparator,this.options.ignoreJSONStructure),o,n,{...r,...t,interpolationkey:a})};this.resetRegExp(),!this.escapeValue&&typeof e==`string`&&/\$t\([^)]*\{[^}]*\{\{/.test(e)&&this.logger.warn(`nesting options string contains interpolated variables with escapeValue: false — if any of those values are attacker-controlled they can inject additional nesting options (e.g. redirect lng/ns). Sanitise untrusted input before passing it to t(), or keep escapeValue: true.`);let l=r?.missingInterpolationHandler||this.options.missingInterpolationHandler,u=r?.interpolation?.skipOnVariables===void 0?this.options.interpolation.skipOnVariables:r.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:e=>e},{regex:this.regexp,safeValue:e=>this.escapeValue?this.escape(e):e}].forEach(t=>{for(o=0;i=t.regex.exec(e);){let n=i[1].trim();if(a=c(n),a===void 0)if(typeof l==`function`){let t=l(e,i,r);a=N(t)?t:``}else if(r&&Object.prototype.hasOwnProperty.call(r,n))a=``;else if(u){a=i[0];continue}else this.logger.warn(`missed to pass in variable ${n} for interpolating ${e}`),a=``;else !N(a)&&!this.useRawValueToEscape&&(a=F(a));let s=t.safeValue(a);if(e=e.replace(i[0],qS(s)),u?(t.regex.lastIndex+=s.length,t.regex.lastIndex-=i[0].length):t.regex.lastIndex=0,o++,o>=this.maxReplaces)break}}),e}nest(e,t,n={}){let r,i,a,o=(e,t)=>{let n=this.nestingOptionsSeparator;if(!e.includes(n))return e;let r=e.split(RegExp(`${z(n)}[ ]*{`)),i=`{${r[1]}`;e=r[0],i=this.interpolate(i,a);let o=i.match(/'/g),s=i.match(/"/g);((o?.length??0)%2==0&&!s||(s?.length??0)%2!=0)&&(i=i.replace(/'/g,`"`));try{a=JSON.parse(i),t&&(a={...t,...a})}catch(t){return this.logger.warn(`failed parsing options string in nesting for key ${e}`,t),`${e}${n}${i}`}return a.defaultValue&&a.defaultValue.includes(this.prefix)&&delete a.defaultValue,e};for(;r=this.nestingRegexp.exec(e);){let s=[];a={...n},a=a.replace&&!N(a.replace)?a.replace:a,a.applyPostProcessor=!1,delete a.defaultValue;let c=/{.*}/s.test(r[1])?r[1].lastIndexOf(`}`)+1:r[1].indexOf(this.formatSeparator);if(c!==-1&&(s=r[1].slice(c).split(this.formatSeparator).map(e=>e.trim()).filter(Boolean),r[1]=r[1].slice(0,c)),i=t(o.call(this,r[1].trim(),a),a),i&&r[0]===e&&!N(i))return i;N(i)||(i=F(i)),i||=(this.logger.warn(`missed to resolve ${r[1]} for nesting ${e}`),``),s.length&&(i=s.reduce((e,t)=>this.format(e,t,n.lng,{...n,interpolationkey:r[1].trim()}),i.trim())),e=e.replace(r[0],qS(F(i))),this.regexp.lastIndex=0}return e}},YS=e=>{let t=e.toLowerCase().trim(),n={};if(e.includes(`(`)){let r=e.split(`(`);t=r[0].toLowerCase().trim();let i=r[1].slice(0,-1);t===`currency`&&!i.includes(`:`)?n.currency||=i.trim():t===`relativetime`&&!i.includes(`:`)?n.range||=i.trim():i.split(`;`).forEach(e=>{if(e){let[t,...r]=e.split(`:`),i=r.join(`:`).trim().replace(/^'+|'+$/g,``),a=t.trim();n[a]||(n[a]=i),i===`false`&&(n[a]=!1),i===`true`&&(n[a]=!0),isNaN(i)||(n[a]=parseInt(i,10))}})}return{formatName:t,formatOptions:n}},XS=e=>{let t={};return(n,r,i)=>{let a=i;i&&i.interpolationkey&&i.formatParams&&i.formatParams[i.interpolationkey]&&i[i.interpolationkey]&&(a={...a,[i.interpolationkey]:void 0});let o=r+JSON.stringify(a),s=t[o];return s||(s=e(V(r),i),t[o]=s),s(n)}},ZS=e=>(t,n,r)=>e(V(n),r)(t),QS=class{constructor(e={}){this.logger=H.create(`formatter`),this.options=e,this.init(e)}init(e,t={interpolation:{}}){this.formatSeparator=t.interpolation.formatSeparator||`,`;let n=t.cacheInBuiltFormats?XS:ZS;this.formats={number:n((e,t)=>{let n=new Intl.NumberFormat(e,{...t});return e=>n.format(e)}),currency:n((e,t)=>{let n=new Intl.NumberFormat(e,{...t,style:`currency`});return e=>n.format(e)}),datetime:n((e,t)=>{let n=new Intl.DateTimeFormat(e,{...t});return e=>n.format(e)}),relativetime:n((e,t)=>{let n=new Intl.RelativeTimeFormat(e,{...t});return e=>n.format(e,t.range||`day`)}),list:n((e,t)=>{let n=new Intl.ListFormat(e,{...t});return e=>n.format(e)})}}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=XS(t)}format(e,t,n,r={}){if(!t||e==null)return e;let i=t.split(this.formatSeparator),a=[];for(let e=0;e<i.length;e++){let t=i[e];for(;t.indexOf(`(`)>-1&&!t.includes(`)`)&&e+1<i.length;)t=`${t}${this.formatSeparator}${i[++e]}`;a.push(t)}return a.reduce((e,t)=>{let{formatName:i,formatOptions:a}=YS(t);if(this.formats[i]){let t=e;try{let o=r?.formatParams?.[r.interpolationkey]||{},s=o.locale||o.lng||r.locale||r.lng||n;t=this.formats[i](e,s,{...a,...r,...o})}catch(e){this.logger.warn(e)}return t}else this.logger.warn(`there was no format function for ${i}`);return e},e)}},$S=(e,t)=>{e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)},eC=class extends U{constructor(e,t,n,r={}){super(),this.backend=e,this.store=t,this.services=n,this.languageUtils=n.languageUtils,this.options=r,this.logger=H.create(`backendConnector`),this.waitingReads=[],this.maxParallelReads=r.maxParallelReads||10,this.readingCalls=0,this.maxRetries=r.maxRetries>=0?r.maxRetries:5,this.retryTimeout=r.retryTimeout>=1?r.retryTimeout:350,this.state={},this.queue=[],this.backend?.init?.(n,r.backend,r)}queueLoad(e,t,n,r){let i={},a={},o={},s={};return e.forEach(e=>{let r=!0;t.forEach(t=>{let o=`${e}|${t}`;!n.reload&&this.store.hasResourceBundle(e,t)?this.state[o]=2:this.state[o]<0||(this.state[o]===1?a[o]===void 0&&(a[o]=!0):(this.state[o]=1,r=!1,a[o]===void 0&&(a[o]=!0),i[o]===void 0&&(i[o]=!0),s[t]===void 0&&(s[t]=!0)))}),r||(o[e]=!0)}),(Object.keys(i).length||Object.keys(a).length)&&this.queue.push({pending:a,pendingCount:Object.keys(a).length,loaded:{},errors:[],callback:r}),{toLoad:Object.keys(i),pending:Object.keys(a),toLoadLanguages:Object.keys(o),toLoadNamespaces:Object.keys(s)}}loaded(e,t,n){let r=e.split(`|`),i=r[0],a=r[1];t&&this.emit(`failedLoading`,i,a,t),!t&&n&&this.store.addResourceBundle(i,a,n,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&n&&(this.state[e]=0);let o={};this.queue.forEach(n=>{AS(n.loaded,[i],a),$S(n,e),t&&n.errors.push(t),n.pendingCount===0&&!n.done&&(Object.keys(n.loaded).forEach(e=>{o[e]||(o[e]={});let t=n.loaded[e];t.length&&t.forEach(t=>{o[e][t]===void 0&&(o[e][t]=!0)})}),n.done=!0,n.errors.length?n.callback(n.errors):n.callback())}),this.emit(`loaded`,o),this.queue=this.queue.filter(e=>!e.done)}read(e,t,n,r=0,i=this.retryTimeout,a){if(!e.length)return a(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:t,fcName:n,tried:r,wait:i,callback:a});return}this.readingCalls++;let o=(o,s)=>{if(this.readingCalls--,this.waitingReads.length>0){let e=this.waitingReads.shift();this.read(e.lng,e.ns,e.fcName,e.tried,e.wait,e.callback)}if(o&&s&&r<this.maxRetries){setTimeout(()=>{this.read(e,t,n,r+1,i*2,a)},i);return}a(o,s)},s=this.backend[n].bind(this.backend);if(s.length===2){try{let n=s(e,t);n&&typeof n.then==`function`?n.then(e=>o(null,e)).catch(o):o(null,n)}catch(e){o(e)}return}return s(e,t,o)}prepareLoading(e,t,n={},r){if(!this.backend)return this.logger.warn(`No backend was added via i18next.use. Will not load resources.`),r&&r();N(e)&&(e=this.languageUtils.toResolveHierarchy(e)),N(t)&&(t=[t]);let i=this.queueLoad(e,t,n,r);if(!i.toLoad.length)return i.pending.length||r(),null;i.toLoad.forEach(e=>{this.loadOne(e)})}load(e,t,n){this.prepareLoading(e,t,{},n)}reload(e,t,n){this.prepareLoading(e,t,{reload:!0},n)}loadOne(e,t=``){let n=e.split(`|`),r=n[0],i=n[1];this.read(r,i,`read`,void 0,void 0,(n,a)=>{n&&this.logger.warn(`${t}loading namespace ${i} for language ${r} failed`,n),!n&&a&&this.logger.log(`${t}loaded namespace ${i} for language ${r}`,a),this.loaded(e,n,a)})}saveMissing(e,t,n,r,i,a={},o=()=>{}){if(this.services?.utils?.hasLoadedNamespace&&!this.services?.utils?.hasLoadedNamespace(t)){this.logger.warn(`did not save key "${n}" as the namespace "${t}" was not yet loaded`,`This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!`);return}if(!(n==null||n===``)){if(this.backend?.create){let s={...a,isUpdate:i},c=this.backend.create.bind(this.backend);if(c.length<6)try{let i;i=c.length===5?c(e,t,n,r,s):c(e,t,n,r),i&&typeof i.then==`function`?i.then(e=>o(null,e)).catch(o):o(null,i)}catch(e){o(e)}else c(e,t,n,r,o,s)}!e||!e[0]||this.store.addResource(e[0],t,n,r)}}},J=()=>({debug:!1,initAsync:!0,ns:[`translation`],defaultNS:[`translation`],fallbackLng:[`dev`],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:`all`,preload:!1,keySeparator:`.`,nsSeparator:`:`,pluralSeparator:`_`,contextSeparator:`_`,enableSelector:!1,partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:`fallback`,saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:e=>{let t={};if(typeof e[1]==`object`&&(t=e[1]),N(e[1])&&(t.defaultValue=e[1]),N(e[2])&&(t.tDescription=e[2]),typeof e[2]==`object`||typeof e[3]==`object`){let n=e[3]||e[2];Object.keys(n).forEach(e=>{t[e]=n[e]})}return t},interpolation:{escapeValue:!0,prefix:`{{`,suffix:`}}`,formatSeparator:`,`,unescapePrefix:`-`,nestingPrefix:`$t(`,nestingSuffix:`)`,nestingOptionsSeparator:`,`,maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),tC=e=>(N(e.ns)&&(e.ns=[e.ns]),N(e.fallbackLng)&&(e.fallbackLng=[e.fallbackLng]),N(e.fallbackNS)&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&!e.supportedLngs.includes(`cimode`)&&(e.supportedLngs=e.supportedLngs.concat([`cimode`])),e),Y=()=>{},nC=e=>{Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(t=>{typeof e[t]==`function`&&(e[t]=e[t].bind(e))})},rC=class e extends U{constructor(e={},t){if(super(),this.options=tC(e),this.services={},this.logger=H,this.modules={external:[]},nC(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(e={},t){this.isInitializing=!0,typeof e==`function`&&(t=e,e={}),e.defaultNS==null&&e.ns&&(N(e.ns)?e.defaultNS=e.ns:e.ns.includes(`translation`)||(e.defaultNS=e.ns[0]));let n=J();this.options={...n,...this.options,...tC(e)},this.options.interpolation={...n.interpolation,...this.options.interpolation},e.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=e.keySeparator),e.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=e.nsSeparator),typeof this.options.overloadTranslationOptionHandler!=`function`&&(this.options.overloadTranslationOptionHandler=n.overloadTranslationOptionHandler);let r=e=>e?typeof e==`function`?new e:e:null;if(!this.options.isClone){this.modules.logger?H.init(r(this.modules.logger),this.options):H.init(null,this.options);let e;e=this.modules.formatter?this.modules.formatter:QS;let t=new HS(this.options);this.store=new W(this.options.resources,this.options);let n=this.services;n.logger=H,n.resourceStore=this.store,n.languageUtils=t,n.pluralResolver=new GS(t,{prepend:this.options.pluralSeparator}),e&&(n.formatter=r(e),n.formatter.init&&n.formatter.init(n,this.options),this.options.interpolation.format=n.formatter.format.bind(n.formatter)),n.interpolator=new JS(this.options),n.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},n.backendConnector=new eC(r(this.modules.backend),n.resourceStore,n,this.options),n.backendConnector.on(`*`,(e,...t)=>{this.emit(e,...t)}),this.modules.languageDetector&&(n.languageDetector=r(this.modules.languageDetector),n.languageDetector.init&&n.languageDetector.init(n,this.options.detection,this.options)),this.modules.i18nFormat&&(n.i18nFormat=r(this.modules.i18nFormat),n.i18nFormat.init&&n.i18nFormat.init(this)),this.translator=new VS(this.services,this.options),this.translator.on(`*`,(e,...t)=>{this.emit(e,...t)}),this.modules.external.forEach(e=>{e.init&&e.init(this)})}if(this.format=this.options.interpolation.format,t||=Y,this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){let e=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);e.length>0&&e[0]!==`dev`&&(this.options.lng=e[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn(`init: no languageDetector is used and no lng is defined`),[`getResource`,`hasResourceBundle`,`getResourceBundle`,`getDataByLanguage`].forEach(e=>{this[e]=(...t)=>this.store[e](...t)}),[`addResource`,`addResources`,`addResourceBundle`,`removeResourceBundle`].forEach(e=>{this[e]=(...t)=>(this.store[e](...t),this)});let i=P(),a=()=>{let e=(e,n)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn(`init: i18next is already initialized. You should call init just once!`),this.isInitialized=!0,this.options.isClone||this.logger.log(`initialized`,this.options),this.emit(`initialized`,this.options),i.resolve(n),t(e,n)};if((this.languages||this.isLanguageChangingTo)&&!this.isInitialized)return e(null,this.t.bind(this));this.changeLanguage(this.options.lng,e)};return this.options.resources||!this.options.initAsync?a():setTimeout(a,0),i}loadResources(e,t=Y){let n=t,r=N(e)?e:this.language;if(typeof e==`function`&&(n=e),!this.options.resources||this.options.partialBundledLanguages){if(r?.toLowerCase()===`cimode`&&(!this.options.preload||this.options.preload.length===0))return n();let e=[],t=t=>{t&&t!==`cimode`&&this.services.languageUtils.toResolveHierarchy(t).forEach(t=>{t!==`cimode`&&(e.includes(t)||e.push(t))})};r?t(r):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(e=>t(e)),this.options.preload?.forEach?.(e=>t(e)),this.services.backendConnector.load(e,this.options.ns,e=>{!e&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),n(e)})}else n(null)}reloadResources(e,t,n){let r=P();return typeof e==`function`&&(n=e,e=void 0),typeof t==`function`&&(n=t,t=void 0),e||=this.languages,t||=this.options.ns,n||=Y,this.services.backendConnector.reload(e,t,e=>{r.resolve(),n(e)}),r}use(e){if(!e)throw Error(`You are passing an undefined module! Please check the object you are passing to i18next.use()`);if(!e.type)throw Error(`You are passing a wrong module! Please check the object you are passing to i18next.use()`);return e.type===`backend`&&(this.modules.backend=e),(e.type===`logger`||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type===`languageDetector`&&(this.modules.languageDetector=e),e.type===`i18nFormat`&&(this.modules.i18nFormat=e),e.type===`postProcessor`&&G.addPostProcessor(e),e.type===`formatter`&&(this.modules.formatter=e),e.type===`3rdParty`&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&![`cimode`,`dev`].includes(e)){for(let e=0;e<this.languages.length;e++){let t=this.languages[e];if(![`cimode`,`dev`].includes(t)&&this.store.hasLanguageSomeTranslations(t)){this.resolvedLanguage=t;break}}!this.resolvedLanguage&&!this.languages.includes(e)&&this.store.hasLanguageSomeTranslations(e)&&(this.resolvedLanguage=e,this.languages.unshift(e))}}changeLanguage(e,t){this.isLanguageChangingTo=e;let n=P();this.emit(`languageChanging`,e);let r=e=>{this.language=e,this.languages=this.services.languageUtils.toResolveHierarchy(e),this.resolvedLanguage=void 0,this.setResolvedLanguage(e)},i=(i,a)=>{a?this.isLanguageChangingTo===e&&(r(a),this.translator.changeLanguage(a),this.isLanguageChangingTo=void 0,this.emit(`languageChanged`,a),this.logger.log(`languageChanged`,a)):this.isLanguageChangingTo=void 0,n.resolve((...e)=>this.t(...e)),t&&t(i,(...e)=>this.t(...e))},a=t=>{!e&&!t&&this.services.languageDetector&&(t=[]);let n=N(t)?t:t&&t[0],a=this.store.hasLanguageSomeTranslations(n)?n:this.services.languageUtils.getBestMatchFromCodes(N(t)?[t]:t);a&&(this.language||r(a),this.translator.language||this.translator.changeLanguage(a),this.services.languageDetector?.cacheUserLanguage?.(a)),this.loadResources(a,e=>{i(e,a)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?a(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(e),n}getFixedT(e,t,n,r){let i=r?.scopeNs,a=(e,t,...r)=>{let o;o=typeof t==`object`?{...t}:this.options.overloadTranslationOptionHandler([e,t].concat(r)),o.lng=o.lng||a.lng,o.lngs=o.lngs||a.lngs;let s=o.ns!==void 0&&o.ns!==null;o.ns=o.ns||a.ns,o.keyPrefix!==``&&(o.keyPrefix=o.keyPrefix||n||a.keyPrefix);let c={...this.options,...o};Array.isArray(i)&&!s&&(c.ns=i),typeof o.keyPrefix==`function`&&(o.keyPrefix=M(o.keyPrefix,c));let l=this.options.keySeparator||`.`,u;return o.keyPrefix&&Array.isArray(e)?u=e.map(e=>(typeof e==`function`&&(e=M(e,c)),`${o.keyPrefix}${l}${e}`)):(typeof e==`function`&&(e=M(e,c)),u=o.keyPrefix?`${o.keyPrefix}${l}${e}`:e),this.t(u,o)};return N(e)?a.lng=e:a.lngs=e,a.ns=t,a.keyPrefix=n,a}t(...e){return this.translator?.translate(...e)}exists(...e){return this.translator?.exists(...e)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e,t={}){if(!this.isInitialized)return this.logger.warn(`hasLoadedNamespace: i18next was not initialized`,this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn(`hasLoadedNamespace: i18n.languages were undefined or empty`,this.languages),!1;let n=t.lng||this.resolvedLanguage||this.languages[0],r=this.options?this.options.fallbackLng:!1,i=this.languages[this.languages.length-1];if(n.toLowerCase()===`cimode`)return!0;let a=(e,t)=>{let n=this.services.backendConnector.state[`${e}|${t}`];return n===-1||n===0||n===2};if(t.precheck){let e=t.precheck(this,a);if(e!==void 0)return e}return!!(this.hasResourceBundle(n,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||a(n,e)&&(!r||a(i,e)))}loadNamespaces(e,t){let n=P();return this.options.ns?(N(e)&&(e=[e]),e.forEach(e=>{this.options.ns.includes(e)||this.options.ns.push(e)}),this.loadResources(e=>{n.resolve(),t&&t(e)}),n):(t&&t(),Promise.resolve())}loadLanguages(e,t){let n=P();N(e)&&(e=[e]);let r=this.options.preload||[],i=e.filter(e=>!r.includes(e)&&this.services.languageUtils.isSupportedCode(e));return i.length?(this.options.preload=r.concat(i),this.loadResources(e=>{n.resolve(),t&&t(e)}),n):(t&&t(),Promise.resolve())}dir(e){if(e||=this.resolvedLanguage||(this.languages?.length>0?this.languages[0]:this.language),!e)return`rtl`;try{let t=new Intl.Locale(e);if(t&&t.getTextInfo){let e=t.getTextInfo();if(e&&e.direction)return e.direction}}catch{}let t=`ar.shu.sqr.ssh.xaa.yhd.yud.aao.abh.abv.acm.acq.acw.acx.acy.adf.ads.aeb.aec.afb.ajp.apc.apd.arb.arq.ars.ary.arz.auz.avl.ayh.ayl.ayn.ayp.bbz.pga.he.iw.ps.pbt.pbu.pst.prp.prd.ug.ur.ydd.yds.yih.ji.yi.hbo.men.xmn.fa.jpr.peo.pes.prs.dv.sam.ckb`.split(`.`),n=this.services?.languageUtils||new HS(J());return e.toLowerCase().indexOf(`-latn`)>1?`ltr`:t.includes(n.getLanguagePartFromCode(e))||e.toLowerCase().indexOf(`-arab`)>1?`rtl`:`ltr`}static createInstance(t={},n){let r=new e(t,n);return r.createInstance=e.createInstance,r}cloneInstance(t={},n=Y){let r=t.forkResourceStore;r&&delete t.forkResourceStore;let i={...this.options,...t,isClone:!0},a=new e(i);if((t.debug!==void 0||t.prefix!==void 0)&&(a.logger=a.logger.clone(t)),[`store`,`services`,`language`].forEach(e=>{a[e]=this[e]}),a.services={...this.services},a.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},r&&(a.store=new W(Object.keys(this.store.data).reduce((e,t)=>(e[t]={...this.store.data[t]},e[t]=Object.keys(e[t]).reduce((n,r)=>(n[r]={...e[t][r]},n),e[t]),e),{}),i),a.services.resourceStore=a.store),t.interpolation){let e={...J().interpolation,...this.options.interpolation,...t.interpolation},n={...i,interpolation:e};a.services.interpolator=new JS(n)}return a.translator=new VS(a.services,i),a.translator.on(`*`,(e,...t)=>{a.emit(e,...t)}),a.init(i,n),a.translator.options=i,a.translator.backendConnector.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},a}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}},X=rC.createInstance(),X.createInstance,X.dir,X.init,X.loadResources,X.reloadResources,X.use,X.changeLanguage,X.getFixedT,iC=X.t,X.exists,X.setDefaultNamespace,X.hasLoadedNamespace,X.loadNamespaces,X.loadLanguages})),oC,sC,cC,lC,uC=e((()=>{je(),wS(),aC(),r(),oC=e=>e.button===0&&!e.altKey&&!e.ctrlKey&&!e.metaKey&&!e.shiftKey,sC=e=>e?.dispatchEvent(new Event(`select`,{bubbles:!0})),cC=e=>typeof e==`string`&&e?e:iC(`More`)||`More`,lC=({items:e,overflows:n,active:r,label:i,onItemClick:a})=>t`
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
			<span>${cC(i)}</span>
			<span class="chevron" aria-hidden="true"
				>${Ki({width:`16`,height:`16`})}</span
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
`})),Z,Q,dC,fC,pC,mC,hC,gC,_C,vC=e((()=>{uC(),Z=e=>!e.hasAttribute(`disabled`)&&!e.hasAttribute(`hidden`)&&!e.hasAttribute(`overflowing`),Q=(e,t,n)=>{e.getAttribute(t)!==n&&(n==null?e.removeAttribute(t):e.setAttribute(t,n))},dC=(e,t)=>{[`active`,`disabled`,`hidden`,`href`,`name`,`badge`,`title`,`role`].forEach(n=>Q(t,n,e.getAttribute(n))),Q(t,`aria-selected`,t.hasAttribute(`active`)?`true`:`false`),Q(t,`aria-disabled`,e.hasAttribute(`disabled`)?`true`:null),t.setAttribute(`tabindex`,`-1`)},fC=e=>{e.forEach(([,e])=>{Z(e)&&e.setAttribute(`tabindex`,`0`)})},pC=e=>{let t=e.find(e=>e.hasAttribute(`active`));return t==null?null:Z(t)?t:[...e.slice(0,e.indexOf(t))].reverse().find(Z)??null},mC=e=>{let t=e.cloneNode(!0);return[`variant`,`size`,`compact-width`,`overflowing`,`style`].forEach(e=>t.removeAttribute(e)),t.setAttribute(`menu`,``),t},hC=(e,t)=>{t.innerHTML!==e.innerHTML&&t.replaceChildren(...[...e.childNodes].map(e=>e.cloneNode(!0))),dC(e,t)},gC=e=>new MouseEvent(`click`,e),_C=e=>t=>{let n=t.composedPath(),r=e.find(([,e])=>n.includes(e));if(!r)return;let[i,a]=r;t.stopPropagation(),i.dispatchEvent(gC(t))||t.preventDefault(),oC(t)&&sC(a)}})),yC,bC=e((()=>{y(),yC=x`
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
`})),$,xC,SC,CC,wC,TC,EC,DC,OC=e((()=>{E(),fe(),_e(),y(),Se(),uC(),vC(),bC(),$=`cosmoz-tab-next`,xC={attributes:!0,attributeFilter:[`active`,`disabled`,`hidden`,`badge`,`href`,`name`,`title`],childList:!0,subtree:!0,characterData:!0},SC=(e,t)=>{let[n,r]=l(0);return u(()=>{let t=new MutationObserver(()=>r(e=>e+1));return e().forEach(e=>t.observe(e,xC)),()=>t.disconnect()},[t]),n},CC=(e,t,n)=>{let r=SC(e,n),i=b();return i.current??=new Map,d(()=>{let n=i.current,r=e(),a=r.filter(e=>t.has(e)).map(e=>{let t=n.get(e)??mC(e);return n.set(e,t),hC(e,t),[e,t]}),o=new Set(a.map(([e])=>e));n.forEach((e,t)=>{o.has(t)||n.delete(t)}),fC(a);let s=pC(r);return r.forEach(e=>Q(e,`tabindex`,e===s?`0`:`-1`)),a},[t,n,r])},wC=e=>(e.getAttribute(`role`)===`radiogroup`&&(e.removeAttribute(`role`),e.dispatchEvent(new CustomEvent(`deprecation-warning`,{detail:{message:`role=radiogroup is no longer supported: a value picker belongs in cosmoz-toggle-group (@neovici/cosmoz-input); the items are tabs.`}}))),{variant:e.getAttribute(`variant`),size:e.getAttribute(`size`),"compact-width":e.hasAttribute(`compact-width`)?``:null,role:`tab`,"aria-selected":e=>e.hasAttribute(`active`)?`true`:`false`,"aria-disabled":e=>e.hasAttribute(`disabled`)?`true`:null}),TC=new Set([`ArrowLeft`,`ArrowRight`,`Home`,`End`]),EC=(e,t,n)=>{let r=e.filter(Z);if(r.length===0)return null;if(n===`Home`)return r[0];if(n===`End`)return r[r.length-1];let i=r.indexOf(t);return i<0?null:r[Math.max(0,Math.min(r.length-1,i+(n===`ArrowLeft`?-1:1)))]},DC=e=>{e.getAttribute(`variant`)||e.setAttribute(`variant`,`brand`);let[n,r]=l(0),[i,a]=l(()=>new Set),o=b(),s=p(()=>(o.current??[]).filter(e=>e.matches($)),[]),c=()=>r(e=>e+1),u=CC(s,i,n);return g(()=>{let t=e=>{if(!TC.has(e.key))return;let t=s(),n=e.target;if(!t.includes(n))return;e.preventDefault();let r=EC(t,n,e.key);!r||r===n||r.focus()};return e.addEventListener(`keydown`,t),()=>e.removeEventListener(`keydown`,t)},[]),t`
		<slot name="tabs"></slot>
		<div class="group" role="tablist">
			<slot
				${k(o)}
				${ge(wC(e))}
				${xe({is:e=>e.matches($),onOverflow:a})}
				@slotchange=${c}
			></slot>
		</div>
		${lC({items:u.map(([,e])=>e),overflows:u.length>0,active:u.some(([e])=>e.hasAttribute(`active`)&&!e.hidden),label:e.moreLabel,onItemClick:_C(u)})}
		<slot name="stats"></slot>
	`},customElements.define(`cosmoz-tabs-next`,m(DC,{observedAttributes:[`variant`,`size`,`compact-width`,`more-label`],styleSheets:[T,yC]}))})),kC,AC,jC,MC,NC=e((()=>{y(),kC=()=>new URL(location.hash.replace(/^#!?/iu,``).replace(`%23`,`#`),location.origin),AC=e=>e?()=>new URLSearchParams(kC().hash.replace(`#`,``)).get(e):void 0,jC=(e,t)=>{if(!e)return;let n=kC(),r=new URLSearchParams(n.hash.replace(`#`,``));return t==null?r.delete(e):r.set(e,t),`#!`+Object.assign(n,{hash:r}).href.replace(location.origin,``)},MC=e=>{let t=d(()=>AC(e),[e]),[n,r]=l(t),i=b(n);return u(()=>void(i.current=n),[n]),u(()=>{if(t==null)return;let e=()=>{let e=t();i.current!==e&&r(e)};return e(),window.addEventListener(`popstate`,e),window.addEventListener(`hashchange`,e),()=>{window.removeEventListener(`popstate`,e),window.removeEventListener(`hashchange`,e)}},[t]),[n,d(()=>e?t=>{r(t),history.pushState({},``,jC(e,t))}:r,[e])]}})),PC,FC,IC,LC,RC,zC=e((()=>{NC(),ae(),y(),O(),j(),PC=e=>!e.hidden&&!e.disabled,FC=e=>e.slice().sort((e,t)=>Number(t.fallback??!1)-Number(e.fallback??!1)).find(PC),IC=(e,t)=>{let n=t?e.find(e=>e.name===t):void 0;return n&&PC(n)?n:FC(e)},LC=(e,{hashParam:t,onActivate:n}={})=>{let[r,i]=MC(t),a=b([]),o=d(()=>IC(e,r??void 0),[e,r]);return{tabs:e,active:o,activated:d(()=>{let e=o?.name;return a.current=[...(a.current??[]).filter(t=>t!==e),e].filter(Boolean)},[o]),activate:i,onActivate:p(e=>{let t=e;if(t.button!==0||t.metaKey||t.ctrlKey)return;let r=e.currentTarget?.getAttribute(`name`);r&&(n?.(r),i(r))},[i,n])}},RC=({tabs:e,active:n,onActivate:r,className:i,variant:a,size:o,compactWidth:s})=>e.map(e=>{let c=ie(e.title),l=e.content??c,u=e.badge||void 0;return t`<cosmoz-tab-next
			name=${e.name}
			class=${D(i)}
			variant=${D(a)}
			size=${D(o)}
			?compact-width=${D(s)}
			title=${D(c)}
			?active=${n?.name===e.name}
			?hidden=${e.hidden}
			?disabled=${e.disabled}
			badge=${D(u)}
			@click=${r}
			>${A(e.icon,e=>e({slot:`icon`}))}${l}</cosmoz-tab-next
		>`})})),BC=e((()=>{ue(),OC(),zC()}));export{E as C,C as E,D as S,w as T,re as _,jC as a,ne as b,iC as c,Tp as d,po as f,Ce as g,we as h,NC as i,wS as l,A as m,RC as n,MC as o,j as p,LC as r,aC as s,BC as t,uy as u,ae as v,T as w,O as x,te as y};