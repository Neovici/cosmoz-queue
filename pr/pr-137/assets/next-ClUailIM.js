import{t as e}from"./chunk-BvrOYcoh.js";import{a as t,c as n,o as r,r as i,t as a}from"./lit-html-BZ3vufxv.js";import{a as o,b as s,d as c,f as l,g as u,h as d,i as f,m as p,n as m,o as h,p as g,r as _,s as v,t as y,u as b,y as x}from"./haunted-BleYZ_lI.js";var S,C,w=e((()=>{r(),f(),v(),S=new WeakMap,C=o(class extends _{render(e){return a}update(e,[t]){let n=t!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),a}rt(e){if(this.G!==void 0)if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=S.get(t);n===void 0&&(n=new WeakMap,S.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G==`function`?S.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})})),T,E=e((()=>{r(),T=e=>e??a})),ee,D,te=e((()=>{r(),v(),ee={},D=o(class extends h{constructor(){super(...arguments),this.ot=ee}render(e,t){return t()}update(e,[t,n]){if(Array.isArray(t)){if(Array.isArray(this.ot)&&this.ot.length===t.length&&t.every((e,t)=>e===this.ot[t]))return i}else if(this.ot===t)return i;return this.ot=Array.isArray(t)?Array.from(t):t,this.render(t,n)}})})),ne,re,ie=e((()=>{ne=e=>e,re=(e,...t)=>typeof e==`function`?e(...t):e})),O,ae=e((()=>{y(),O=s(x`
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
`)})),oe,se=e((()=>{y(),oe=x`
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
`})),ce,le,ue=e((()=>{ae(),y(),r(),E(),w(),se(),ce=class extends HTMLElement{connectedCallback(){this.hasAttribute(`role`)||this.setAttribute(`role`,`tab`),this.hasAttribute(`tabindex`)||this.setAttribute(`tabindex`,`-1`)}},le=e=>{let{active:n,badge:r,href:i}=e,o=b();return g(()=>{e.setAttribute(`aria-selected`,n?`true`:`false`)},[n]),g(()=>{let t=()=>(o.current??e).click(),n=n=>{n.target!==e||e.hasAttribute(`disabled`)||(n.key===`Enter`&&!n.repeat&&(n.preventDefault(),t()),n.key===` `&&n.preventDefault())},r=n=>{n.target!==e||e.hasAttribute(`disabled`)||n.key===` `&&t()};return e.addEventListener(`keydown`,n),e.addEventListener(`keyup`,r),()=>{e.removeEventListener(`keydown`,n),e.removeEventListener(`keyup`,r)}},[]),t`
		<a ${C(o)} part="link" href=${T(i)}>
			<slot id="iconSlot" name="icon"></slot>
			<slot id="contentSlot"></slot>
			${r?t`<span class="badge" part="badge">${r}</span>`:a}
		</a>
	`},customElements.define(`cosmoz-tab-next`,m(le,{baseElement:ce,observedAttributes:[`active`,`badge`,`href`],styleSheets:[O,oe]}))})),de,k,fe=e((()=>{r(),f(),de=class extends _{_slot;_ref;#e=()=>{!this._slot||!this._ref||(this._ref.current=this._slot.assignedElements({flatten:!0}))};#t=()=>this.#e();update(e,[t]){this._ref=t;let n=e.element;this._slot!==n&&(this._slot?.removeEventListener(`slotchange`,this.#t),this._slot=n,n.addEventListener(`slotchange`,this.#t)),this.#e()}disconnected(){this._slot?.removeEventListener(`slotchange`,this.#t),this._slot=void 0}render(e){return i}},k=o(de)})),pe,me,he,A,ge=e((()=>{r(),f(),ie(),pe=(e,t,n)=>{n==null?e.removeAttribute(t):e.setAttribute(t,n)},me=(e,t)=>{for(let[n,r]of Object.entries(e))pe(t,n,re(r,t))},he=class extends _{_slot;_attrs;#e=()=>{if(!this._slot||!this._attrs)return;let e=this._slot.assignedElements({flatten:!0});for(let t of e)me(this._attrs,t)};#t=()=>this.#e();render(e){return i}update(e,[t]){this._attrs=t;let n=e.element;return this._slot!==n&&(this._slot?.removeEventListener(`slotchange`,this.#t),this._slot=n,n.addEventListener(`slotchange`,this.#t)),this.#e(),i}disconnected(){this._slot?.removeEventListener(`slotchange`,this.#t),this._slot=void 0}},A=o(he)})),_e,ve,ye,be,xe=e((()=>{r(),f(),_e=(e,t)=>e.assignedElements({flatten:!0}).filter(t),ve=(e,t)=>e!=null&&t!=null&&e.size===t.size&&[...t].every(t=>e.has(t)),ye=class extends _{_slot;_is;_onOverflow;#e=new Map;#t;#n;#r=e=>{e.forEach(e=>{let t=e.target;this.#e.set(t,e.boundingClientRect.height>0&&e.intersectionRect.height===0)}),this.#a()};#i=e=>{this.#n?.unobserve(e),this.#n?.observe(e)};#a=()=>{if(!this._slot||!this._is)return;let e=_e(this._slot,this._is);e.forEach(e=>{let t=this.#e.get(e)===!0;t!==e.hasAttribute(`overflowing`)&&(t?e.setAttribute(`overflowing`,``):e.removeAttribute(`overflowing`))}),this.#e.forEach((t,n)=>{e.includes(n)||(this.#e.delete(n),this.#n?.unobserve(n),n.hasAttribute(`overflowing`)&&n.removeAttribute(`overflowing`))});let t=new Set(e.filter(e=>this.#e.get(e)===!0));ve(this.#t,t)||(this.#t=t,this._onOverflow?.(t))};#o=()=>this.#s();#s=()=>{if(!(!this.#n||!this._slot||!this._is)){for(let e of _e(this._slot,this._is))this.#i(e);this.#a()}};render(e){return i}update(e,[t]){this._is=t.is,this._onOverflow=t.onOverflow;let n=e.element;return this._slot!==n&&(this._slot?.removeEventListener(`slotchange`,this.#o),this.#n?.disconnect(),this.#n=void 0,this._slot=n,n.addEventListener(`slotchange`,this.#o)),this.#n??=new IntersectionObserver(this.#r,{root:this._slot,threshold:[0,1]}),this.#s(),i}disconnected(){this._slot?.removeEventListener(`slotchange`,this.#o),this._slot=void 0,this.#n?.disconnect(),this.#n=void 0,this.#e.clear(),this.#t=void 0}},be=o(ye)})),Se,Ce=e((()=>{y(),Se=e=>{let t=d(()=>({}),[]);return d(()=>Object.assign(t,e),[t,...Object.values(e)])}})),we,Te,Ee=e((()=>{Ce(),y(),we=e=>{for(let t of e.current??[]){let e=t.matches(`[autofocus]`)?t:t.querySelector(`[autofocus]`);if(e instanceof HTMLElement){e.focus();break}}},Te=e=>{let{placement:t=`bottom span-right`,disabled:n,passthrough:r,openOnHover:i,openOnFocus:a}=e,o=b(),[s,l]=c(`opened`,!1),d=b(),f=b(),m=Se({disabled:n,openOnHover:i}),h=p(()=>{let e=d.current?.[0];return e instanceof HTMLElement?e:void 0},[]),g=p(()=>{m.disabled||(l(!0),o.current?.showPopover?.())},[]),_=p(()=>{l(!1),o.current?.hidePopover?.()},[]),v=p(()=>{o.current?.matches(`:popover-open`)?_():g()},[]),y=p(()=>{clearTimeout(m.closeTimeout)},[]),x=p(e=>{m.disabled||e.target===h()&&(y(),g())},[]),S=p(()=>{m.disabled||(y(),g())},[]),C=p(()=>{clearTimeout(m.closeTimeout),m.closeTimeout=setTimeout(()=>{let t=o.current;m.openOnHover&&(e.matches(`:hover`)||t?.matches(`:hover`))||e.matches(`:focus-within`)||t?.matches(`:focus-within`)||_()},100)},[]),w=p(()=>{let t=document.activeElement;for(;t?.shadowRoot;)t=t.shadowRoot.activeElement;if(!(t==null||t===document.body||t.offsetParent==null))return;let n=h();n&&(e.removeEventListener(`focusin`,x),n.focus(),e.addEventListener(`focusin`,x))},[]),T=p(t=>{let n=t.newState===`open`;l(n),n?we(f):w(),e.dispatchEvent(new ToggleEvent(`dropdown-toggle`,{newState:t.newState,oldState:t.oldState,composed:!0}))},[]);return u(()=>{let e=o.current;e&&(s?e.showPopover?.():e.hidePopover?.())},[s]),u(()=>{e.toggleAttribute(`opened`,!!s)},[s]),u(()=>{if(!(!a||n))return e.addEventListener(`focusin`,x),e.addEventListener(`focusout`,C),()=>{e.removeEventListener(`focusin`,x),e.removeEventListener(`focusout`,C)}},[a,n]),u(()=>{if(!(!i||n))return e.addEventListener(`pointerenter`,S),e.addEventListener(`pointerleave`,C),()=>{e.removeEventListener(`pointerenter`,S),e.removeEventListener(`pointerleave`,C)}},[i,n]),{placement:t,disabled:n,passthrough:r,opened:s,triggers:d,content:f,popoverRef:o,handleClick:a?g:v,onToggle:T,close:_,scheduleClose:C,cancelClose:y}}})),De,Oe,ke,Ae=e((()=>{fe(),ge(),y(),r(),w(),Ee(),De=x`
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
`,Oe=({placement:e,disabled:n,passthrough:r,opened:i,triggers:a,content:o,popoverRef:s,handleClick:c,onToggle:l,close:u,scheduleClose:d,cancelClose:f})=>t`
		<slot
			name="button"
			${k(a)}
			${A({"aria-expanded":r?null:String(i),disabled:n&&!r?``:null})}
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
	`,ke=e=>Oe(Te(e)),customElements.define(`cosmoz-dropdown-next`,m(ke,{styleSheets:[De],observedAttributes:[`placement`,`disabled`,`passthrough`,`open-on-hover`,`open-on-focus`],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))}));function j(e,t,n){return e?t(e):n?.(e)}var M=e((()=>{})),je=e((()=>{r(),E()})),Me=e((()=>{r(),E()})),Ne=e((()=>{r(),E()})),Pe=e((()=>{r(),E()})),Fe=e((()=>{r(),E()})),Ie=e((()=>{r(),E()})),Le=e((()=>{r(),E()})),Re=e((()=>{r(),E()})),ze=e((()=>{r(),E()})),Be=e((()=>{r(),E()})),Ve=e((()=>{r(),E()})),He=e((()=>{r(),E()})),Ue=e((()=>{r(),E()})),We=e((()=>{r(),E()})),Ge=e((()=>{r(),E()})),Ke=e((()=>{r(),E()})),qe=e((()=>{r(),E()})),Je=e((()=>{r(),E()})),Ye=e((()=>{r(),E()})),Xe=e((()=>{r(),E()})),Ze=e((()=>{r(),E()})),Qe=e((()=>{r(),E()})),$e=e((()=>{r(),E()})),et=e((()=>{r(),E()})),tt=e((()=>{r(),E()})),nt=e((()=>{r(),E()})),rt=e((()=>{r(),E()})),it=e((()=>{r(),E()})),at=e((()=>{r(),E()})),ot=e((()=>{r(),E()})),st=e((()=>{r(),E()})),ct=e((()=>{r(),E()})),lt=e((()=>{r(),E()})),ut=e((()=>{r(),E()})),dt=e((()=>{r(),E()})),ft=e((()=>{r(),E()})),pt=e((()=>{r(),E()})),mt=e((()=>{r(),E()})),ht=e((()=>{r(),E()})),gt=e((()=>{r(),E()})),_t=e((()=>{r(),E()})),vt=e((()=>{r(),E()})),yt=e((()=>{r(),E()})),bt=e((()=>{r(),E()})),xt=e((()=>{r(),E()})),St=e((()=>{r(),E()})),Ct=e((()=>{r(),E()})),wt=e((()=>{r(),E()})),Tt=e((()=>{r(),E()})),Et=e((()=>{r(),E()})),Dt=e((()=>{r(),E()})),Ot=e((()=>{r(),E()})),kt=e((()=>{r(),E()})),At=e((()=>{r(),E()})),jt=e((()=>{r(),E()})),Mt=e((()=>{r(),E()})),Nt=e((()=>{r(),E()})),Pt=e((()=>{r(),E()})),Ft=e((()=>{r(),E()})),It=e((()=>{r(),E()})),Lt=e((()=>{r(),E()})),Rt=e((()=>{r(),E()})),zt=e((()=>{r(),E()})),Bt=e((()=>{r(),E()})),Vt=e((()=>{r(),E()})),Ht=e((()=>{r(),E()})),Ut=e((()=>{r(),E()})),Wt=e((()=>{r(),E()})),Gt=e((()=>{r(),E()})),Kt=e((()=>{r(),E()})),qt=e((()=>{r(),E()})),Jt=e((()=>{r(),E()})),Yt=e((()=>{r(),E()})),Xt=e((()=>{r(),E()})),Zt=e((()=>{r(),E()})),Qt=e((()=>{r(),E()})),$t=e((()=>{r(),E()})),en=e((()=>{r(),E()})),tn=e((()=>{r(),E()})),nn=e((()=>{r(),E()})),rn=e((()=>{r(),E()})),an=e((()=>{r(),E()})),on=e((()=>{r(),E()})),sn=e((()=>{r(),E()})),cn=e((()=>{r(),E()})),ln=e((()=>{r(),E()})),un=e((()=>{r(),E()})),dn=e((()=>{r(),E()})),fn=e((()=>{r(),E()})),pn=e((()=>{r(),E()})),mn=e((()=>{r(),E()})),hn=e((()=>{r(),E()})),gn=e((()=>{r(),E()})),_n=e((()=>{r(),E()})),vn=e((()=>{r(),E()})),yn=e((()=>{r(),E()})),bn=e((()=>{r(),E()})),xn=e((()=>{r(),E()})),Sn=e((()=>{r(),E()})),Cn=e((()=>{r(),E()})),wn=e((()=>{r(),E()})),Tn=e((()=>{r(),E()})),En=e((()=>{r(),E()})),Dn=e((()=>{r(),E()})),On=e((()=>{r(),E()})),kn=e((()=>{r(),E()})),An=e((()=>{r(),E()})),jn=e((()=>{r(),E()})),Mn=e((()=>{r(),E()})),Nn=e((()=>{r(),E()})),Pn=e((()=>{r(),E()})),Fn=e((()=>{r(),E()})),In=e((()=>{r(),E()})),Ln=e((()=>{r(),E()})),Rn=e((()=>{r(),E()})),zn=e((()=>{r(),E()})),Bn=e((()=>{r(),E()})),Vn=e((()=>{r(),E()})),Hn=e((()=>{r(),E()})),Un=e((()=>{r(),E()})),Wn=e((()=>{r(),E()})),Gn=e((()=>{r(),E()})),Kn=e((()=>{r(),E()})),qn=e((()=>{r(),E()})),Jn=e((()=>{r(),E()})),Yn=e((()=>{r(),E()})),Xn=e((()=>{r(),E()})),Zn=e((()=>{r(),E()})),Qn=e((()=>{r(),E()})),$n=e((()=>{r(),E()})),er=e((()=>{r(),E()})),tr=e((()=>{r(),E()})),nr=e((()=>{r(),E()})),rr=e((()=>{r(),E()})),ir=e((()=>{r(),E()})),ar=e((()=>{r(),E()})),or=e((()=>{r(),E()})),sr=e((()=>{r(),E()})),cr=e((()=>{r(),E()})),lr=e((()=>{r(),E()})),ur=e((()=>{r(),E()})),dr=e((()=>{r(),E()})),fr=e((()=>{r(),E()})),pr=e((()=>{r(),E()})),mr=e((()=>{r(),E()})),hr=e((()=>{r(),E()})),gr=e((()=>{r(),E()})),_r=e((()=>{r(),E()})),vr=e((()=>{r(),E()})),yr=e((()=>{r(),E()})),br=e((()=>{r(),E()})),xr=e((()=>{r(),E()})),Sr=e((()=>{r(),E()})),Cr=e((()=>{r(),E()})),wr=e((()=>{r(),E()})),Tr=e((()=>{r(),E()})),Er=e((()=>{r(),E()})),Dr=e((()=>{r(),E()})),Or=e((()=>{r(),E()})),kr=e((()=>{r(),E()})),Ar=e((()=>{r(),E()})),jr=e((()=>{r(),E()})),Mr=e((()=>{r(),E()})),Nr=e((()=>{r(),E()})),Pr=e((()=>{r(),E()})),Fr=e((()=>{r(),E()})),Ir=e((()=>{r(),E()})),Lr=e((()=>{r(),E()})),Rr=e((()=>{r(),E()})),zr=e((()=>{r(),E()})),Br=e((()=>{r(),E()})),Vr=e((()=>{r(),E()})),Hr=e((()=>{r(),E()})),Ur=e((()=>{r(),E()})),Wr=e((()=>{r(),E()})),Gr=e((()=>{r(),E()})),Kr=e((()=>{r(),E()})),qr=e((()=>{r(),E()})),Jr=e((()=>{r(),E()})),Yr=e((()=>{r(),E()})),Xr=e((()=>{r(),E()})),Zr=e((()=>{r(),E()})),Qr=e((()=>{r(),E()})),$r=e((()=>{r(),E()})),ei=e((()=>{r(),E()})),ti=e((()=>{r(),E()})),ni=e((()=>{r(),E()})),ri=e((()=>{r(),E()})),ii=e((()=>{r(),E()})),ai=e((()=>{r(),E()})),oi=e((()=>{r(),E()})),si=e((()=>{r(),E()})),ci=e((()=>{r(),E()})),li=e((()=>{r(),E()})),ui=e((()=>{r(),E()})),di=e((()=>{r(),E()})),fi=e((()=>{r(),E()})),pi=e((()=>{r(),E()})),mi=e((()=>{r(),E()})),hi=e((()=>{r(),E()})),gi=e((()=>{r(),E()})),_i=e((()=>{r(),E()})),vi=e((()=>{r(),E()})),yi=e((()=>{r(),E()})),bi=e((()=>{r(),E()})),xi=e((()=>{r(),E()})),Si=e((()=>{r(),E()})),Ci=e((()=>{r(),E()})),wi=e((()=>{r(),E()})),Ti=e((()=>{r(),E()})),Ei=e((()=>{r(),E()})),Di=e((()=>{r(),E()})),Oi=e((()=>{r(),E()})),ki=e((()=>{r(),E()})),Ai=e((()=>{r(),E()})),ji=e((()=>{r(),E()})),Mi=e((()=>{r(),E()})),Ni=e((()=>{r(),E()})),Pi=e((()=>{r(),E()})),Fi=e((()=>{r(),E()})),Ii=e((()=>{r(),E()})),Li=e((()=>{r(),E()})),Ri=e((()=>{r(),E()})),zi=e((()=>{r(),E()})),Bi=e((()=>{r(),E()})),Vi=e((()=>{r(),E()})),Hi=e((()=>{r(),E()})),Ui=e((()=>{r(),E()})),Wi=e((()=>{r(),E()})),Gi,Ki=e((()=>{r(),E(),M(),Gi=({slot:e,title:r,className:i,width:a=`24`,height:o=`24`,styles:s}={})=>t`
  <svg
    slot=${T(e)}
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
    style=${T(s)}
  >
    ${j(r,()=>n`<title>${r}</title>`)}
    <path d="m6 9 6 6 6-6" />
  </svg>
`})),qi=e((()=>{r(),E()})),Ji=e((()=>{r(),E()})),Yi=e((()=>{r(),E()})),Xi=e((()=>{r(),E()})),Zi=e((()=>{r(),E()})),Qi=e((()=>{r(),E()})),$i=e((()=>{r(),E()})),ea=e((()=>{r(),E()})),ta=e((()=>{r(),E()})),na=e((()=>{r(),E()})),ra=e((()=>{r(),E()})),ia=e((()=>{r(),E()})),aa=e((()=>{r(),E()})),oa=e((()=>{r(),E()})),sa=e((()=>{r(),E()})),ca=e((()=>{r(),E()})),la=e((()=>{r(),E()})),ua=e((()=>{r(),E()})),da=e((()=>{r(),E()})),fa=e((()=>{r(),E()})),pa=e((()=>{r(),E()})),ma=e((()=>{r(),E()})),ha=e((()=>{r(),E()})),ga=e((()=>{r(),E()})),_a=e((()=>{r(),E()})),va=e((()=>{r(),E()})),ya=e((()=>{r(),E()})),ba=e((()=>{r(),E()})),xa=e((()=>{r(),E()})),Sa=e((()=>{r(),E()})),Ca=e((()=>{r(),E()})),wa=e((()=>{r(),E()})),Ta=e((()=>{r(),E()})),Ea=e((()=>{r(),E()})),Da=e((()=>{r(),E()})),Oa=e((()=>{r(),E()})),ka=e((()=>{r(),E()})),Aa=e((()=>{r(),E()})),ja=e((()=>{r(),E()})),Ma=e((()=>{r(),E()})),Na=e((()=>{r(),E()})),Pa=e((()=>{r(),E()})),Fa=e((()=>{r(),E()})),Ia=e((()=>{r(),E()})),La=e((()=>{r(),E()})),Ra=e((()=>{r(),E()})),za=e((()=>{r(),E()})),Ba=e((()=>{r(),E()})),Va=e((()=>{r(),E()})),Ha=e((()=>{r(),E()})),Ua=e((()=>{r(),E()})),Wa=e((()=>{r(),E()})),Ga=e((()=>{r(),E()})),Ka=e((()=>{r(),E()})),qa=e((()=>{r(),E()})),Ja=e((()=>{r(),E()})),Ya=e((()=>{r(),E()})),Xa=e((()=>{r(),E()})),Za=e((()=>{r(),E()})),Qa=e((()=>{r(),E()})),$a=e((()=>{r(),E()})),eo=e((()=>{r(),E()})),to=e((()=>{r(),E()})),no=e((()=>{r(),E()})),ro=e((()=>{r(),E()})),io=e((()=>{r(),E()})),ao=e((()=>{r(),E()})),oo=e((()=>{r(),E()})),so=e((()=>{r(),E()})),co=e((()=>{r(),E()})),lo=e((()=>{r(),E()})),uo=e((()=>{r(),E()})),fo,po=e((()=>{r(),E(),M(),fo=({slot:e,title:r,className:i,width:a=`24`,height:o=`24`,styles:s}={})=>t`
  <svg
    slot=${T(e)}
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
    style=${T(s)}
  >
    ${j(r,()=>n`<title>${r}</title>`)}
    <path
      d="M12 3v18M7.8 3h8.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 3 6.12 3 7.8 3Z"
    />
  </svg>
`})),mo=e((()=>{r(),E()})),ho=e((()=>{r(),E()})),go=e((()=>{r(),E()})),_o=e((()=>{r(),E()})),vo=e((()=>{r(),E()})),yo=e((()=>{r(),E()})),bo=e((()=>{r(),E()})),xo=e((()=>{r(),E()})),So=e((()=>{r(),E()})),Co=e((()=>{r(),E()})),wo=e((()=>{r(),E()})),To=e((()=>{r(),E()})),Eo=e((()=>{r(),E()})),Do=e((()=>{r(),E()})),Oo=e((()=>{r(),E()})),ko=e((()=>{r(),E()})),Ao=e((()=>{r(),E()})),jo=e((()=>{r(),E()})),Mo=e((()=>{r(),E()})),No=e((()=>{r(),E()})),Po=e((()=>{r(),E()})),Fo=e((()=>{r(),E()})),Io=e((()=>{r(),E()})),Lo=e((()=>{r(),E()})),Ro=e((()=>{r(),E()})),zo=e((()=>{r(),E()})),Bo=e((()=>{r(),E()})),Vo=e((()=>{r(),E()})),Ho=e((()=>{r(),E()})),Uo=e((()=>{r(),E()})),Wo=e((()=>{r(),E()})),Go=e((()=>{r(),E()})),Ko=e((()=>{r(),E()})),qo=e((()=>{r(),E()})),Jo=e((()=>{r(),E()})),Yo=e((()=>{r(),E()})),Xo=e((()=>{r(),E()})),Zo=e((()=>{r(),E()})),Qo=e((()=>{r(),E()})),$o=e((()=>{r(),E()})),es=e((()=>{r(),E()})),ts=e((()=>{r(),E()})),ns=e((()=>{r(),E()})),rs=e((()=>{r(),E()})),is=e((()=>{r(),E()})),as=e((()=>{r(),E()})),os=e((()=>{r(),E()})),ss=e((()=>{r(),E()})),cs=e((()=>{r(),E()})),ls=e((()=>{r(),E()})),us=e((()=>{r(),E()})),ds=e((()=>{r(),E()})),fs=e((()=>{r(),E()})),ps=e((()=>{r(),E()})),ms=e((()=>{r(),E()})),hs=e((()=>{r(),E()})),gs=e((()=>{r(),E()})),_s=e((()=>{r(),E()})),vs=e((()=>{r(),E()})),ys=e((()=>{r(),E()})),bs=e((()=>{r(),E()})),xs=e((()=>{r(),E()})),Ss=e((()=>{r(),E()})),Cs=e((()=>{r(),E()})),ws=e((()=>{r(),E()})),Ts=e((()=>{r(),E()})),Es=e((()=>{r(),E()})),Ds=e((()=>{r(),E()})),Os=e((()=>{r(),E()})),ks=e((()=>{r(),E()})),As=e((()=>{r(),E()})),js=e((()=>{r(),E()})),Ms=e((()=>{r(),E()})),Ns=e((()=>{r(),E()})),Ps=e((()=>{r(),E()})),Fs=e((()=>{r(),E()})),Is=e((()=>{r(),E()})),Ls=e((()=>{r(),E()})),Rs=e((()=>{r(),E()})),zs=e((()=>{r(),E()})),Bs=e((()=>{r(),E()})),Vs=e((()=>{r(),E()})),Hs=e((()=>{r(),E()})),Us=e((()=>{r(),E()})),Ws=e((()=>{r(),E()})),Gs=e((()=>{r(),E()})),Ks=e((()=>{r(),E()})),qs=e((()=>{r(),E()})),Js=e((()=>{r(),E()})),Ys=e((()=>{r(),E()})),Xs=e((()=>{r(),E()})),Zs=e((()=>{r(),E()})),Qs=e((()=>{r(),E()})),$s=e((()=>{r(),E()})),ec=e((()=>{r(),E()})),tc=e((()=>{r(),E()})),nc=e((()=>{r(),E()})),rc=e((()=>{r(),E()})),ic=e((()=>{r(),E()})),ac=e((()=>{r(),E()})),oc=e((()=>{r(),E()})),sc=e((()=>{r(),E()})),cc=e((()=>{r(),E()})),lc=e((()=>{r(),E()})),uc=e((()=>{r(),E()})),dc=e((()=>{r(),E()})),fc=e((()=>{r(),E()})),pc=e((()=>{r(),E()})),mc=e((()=>{r(),E()})),hc=e((()=>{r(),E()})),gc=e((()=>{r(),E()})),_c=e((()=>{r(),E()})),vc=e((()=>{r(),E()})),yc=e((()=>{r(),E()})),bc=e((()=>{r(),E()})),xc=e((()=>{r(),E()})),Sc=e((()=>{r(),E()})),Cc=e((()=>{r(),E()})),wc=e((()=>{r(),E()})),Tc=e((()=>{r(),E()})),Ec=e((()=>{r(),E()})),Dc=e((()=>{r(),E()})),Oc=e((()=>{r(),E()})),kc=e((()=>{r(),E()})),Ac=e((()=>{r(),E()})),jc=e((()=>{r(),E()})),Mc=e((()=>{r(),E()})),Nc=e((()=>{r(),E()})),Pc=e((()=>{r(),E()})),Fc=e((()=>{r(),E()})),Ic=e((()=>{r(),E()})),Lc=e((()=>{r(),E()})),Rc=e((()=>{r(),E()})),zc=e((()=>{r(),E()})),Bc=e((()=>{r(),E()})),Vc=e((()=>{r(),E()})),Hc=e((()=>{r(),E()})),Uc=e((()=>{r(),E()})),Wc=e((()=>{r(),E()})),Gc=e((()=>{r(),E()})),Kc=e((()=>{r(),E()})),qc=e((()=>{r(),E()})),Jc=e((()=>{r(),E()})),Yc=e((()=>{r(),E()})),Xc=e((()=>{r(),E()})),Zc=e((()=>{r(),E()})),Qc=e((()=>{r(),E()})),$c=e((()=>{r(),E()})),el=e((()=>{r(),E()})),tl=e((()=>{r(),E()})),nl=e((()=>{r(),E()})),rl=e((()=>{r(),E()})),il=e((()=>{r(),E()})),al=e((()=>{r(),E()})),ol=e((()=>{r(),E()})),sl=e((()=>{r(),E()})),cl=e((()=>{r(),E()})),ll=e((()=>{r(),E()})),ul=e((()=>{r(),E()})),dl=e((()=>{r(),E()})),fl=e((()=>{r(),E()})),pl=e((()=>{r(),E()})),ml=e((()=>{r(),E()})),hl=e((()=>{r(),E()})),gl=e((()=>{r(),E()})),_l=e((()=>{r(),E()})),vl=e((()=>{r(),E()})),yl=e((()=>{r(),E()})),bl=e((()=>{r(),E()})),xl=e((()=>{r(),E()})),Sl=e((()=>{r(),E()})),Cl=e((()=>{r(),E()})),wl=e((()=>{r(),E()})),Tl=e((()=>{r(),E()})),El=e((()=>{r(),E()})),Dl=e((()=>{r(),E()})),Ol=e((()=>{r(),E()})),kl=e((()=>{r(),E()})),Al=e((()=>{r(),E()})),jl=e((()=>{r(),E()})),Ml=e((()=>{r(),E()})),Nl=e((()=>{r(),E()})),Pl=e((()=>{r(),E()})),Fl=e((()=>{r(),E()})),Il=e((()=>{r(),E()})),Ll=e((()=>{r(),E()})),Rl=e((()=>{r(),E()})),zl=e((()=>{r(),E()})),Bl=e((()=>{r(),E()})),Vl=e((()=>{r(),E()})),Hl=e((()=>{r(),E()})),Ul=e((()=>{r(),E()})),Wl=e((()=>{r(),E()})),Gl=e((()=>{r(),E()})),Kl=e((()=>{r(),E()})),ql=e((()=>{r(),E()})),Jl=e((()=>{r(),E()})),Yl=e((()=>{r(),E()})),Xl=e((()=>{r(),E()})),Zl=e((()=>{r(),E()})),Ql=e((()=>{r(),E()})),$l=e((()=>{r(),E()})),eu=e((()=>{r(),E()})),tu=e((()=>{r(),E()})),nu=e((()=>{r(),E()})),ru=e((()=>{r(),E()})),iu=e((()=>{r(),E()})),au=e((()=>{r(),E()})),ou=e((()=>{r(),E()})),su=e((()=>{r(),E()})),cu=e((()=>{r(),E()})),lu=e((()=>{r(),E()})),uu=e((()=>{r(),E()})),du=e((()=>{r(),E()})),fu=e((()=>{r(),E()})),pu=e((()=>{r(),E()})),mu=e((()=>{r(),E()})),hu=e((()=>{r(),E()})),gu=e((()=>{r(),E()})),_u=e((()=>{r(),E()})),vu=e((()=>{r(),E()})),yu=e((()=>{r(),E()})),bu=e((()=>{r(),E()})),xu=e((()=>{r(),E()})),Su=e((()=>{r(),E()})),Cu=e((()=>{r(),E()})),wu=e((()=>{r(),E()})),Tu=e((()=>{r(),E()})),Eu=e((()=>{r(),E()})),Du=e((()=>{r(),E()})),Ou=e((()=>{r(),E()})),ku=e((()=>{r(),E()})),Au=e((()=>{r(),E()})),ju=e((()=>{r(),E()})),Mu=e((()=>{r(),E()})),Nu=e((()=>{r(),E()})),Pu=e((()=>{r(),E()})),Fu=e((()=>{r(),E()})),Iu=e((()=>{r(),E()})),Lu=e((()=>{r(),E()})),Ru=e((()=>{r(),E()})),zu=e((()=>{r(),E()})),Bu=e((()=>{r(),E()})),Vu=e((()=>{r(),E()})),Hu=e((()=>{r(),E()})),Uu=e((()=>{r(),E()})),Wu=e((()=>{r(),E()})),Gu=e((()=>{r(),E()})),Ku=e((()=>{r(),E()})),qu=e((()=>{r(),E()})),Ju=e((()=>{r(),E()})),Yu=e((()=>{r(),E()})),Xu=e((()=>{r(),E()})),Zu=e((()=>{r(),E()})),Qu=e((()=>{r(),E()})),$u=e((()=>{r(),E()})),ed=e((()=>{r(),E()})),td=e((()=>{r(),E()})),nd=e((()=>{r(),E()})),rd=e((()=>{r(),E()})),id=e((()=>{r(),E()})),ad=e((()=>{r(),E()})),od=e((()=>{r(),E()})),sd=e((()=>{r(),E()})),cd=e((()=>{r(),E()})),ld=e((()=>{r(),E()})),ud=e((()=>{r(),E()})),dd=e((()=>{r(),E()})),fd=e((()=>{r(),E()})),pd=e((()=>{r(),E()})),md=e((()=>{r(),E()})),hd=e((()=>{r(),E()})),gd=e((()=>{r(),E()})),_d=e((()=>{r(),E()})),vd=e((()=>{r(),E()})),yd=e((()=>{r(),E()})),bd=e((()=>{r(),E()})),xd=e((()=>{r(),E()})),Sd=e((()=>{r(),E()})),Cd=e((()=>{r(),E()})),wd=e((()=>{r(),E()})),Td=e((()=>{r(),E()})),Ed=e((()=>{r(),E()})),Dd=e((()=>{r(),E()})),Od=e((()=>{r(),E()})),kd=e((()=>{r(),E()})),Ad=e((()=>{r(),E()})),jd=e((()=>{r(),E()})),Md=e((()=>{r(),E()})),Nd=e((()=>{r(),E()})),Pd=e((()=>{r(),E()})),Fd=e((()=>{r(),E()})),Id=e((()=>{r(),E()})),Ld=e((()=>{r(),E()})),Rd=e((()=>{r(),E()})),zd=e((()=>{r(),E()})),Bd=e((()=>{r(),E()})),Vd=e((()=>{r(),E()})),Hd=e((()=>{r(),E()})),Ud=e((()=>{r(),E()})),Wd=e((()=>{r(),E()})),Gd=e((()=>{r(),E()})),Kd=e((()=>{r(),E()})),qd=e((()=>{r(),E()})),Jd=e((()=>{r(),E()})),Yd=e((()=>{r(),E()})),Xd=e((()=>{r(),E()})),Zd=e((()=>{r(),E()})),Qd=e((()=>{r(),E()})),$d=e((()=>{r(),E()})),ef=e((()=>{r(),E()})),tf=e((()=>{r(),E()})),nf=e((()=>{r(),E()})),rf=e((()=>{r(),E()})),af=e((()=>{r(),E()})),of=e((()=>{r(),E()})),sf=e((()=>{r(),E()})),cf=e((()=>{r(),E()})),lf=e((()=>{r(),E()})),uf=e((()=>{r(),E()})),df=e((()=>{r(),E()})),ff=e((()=>{r(),E()})),pf=e((()=>{r(),E()})),mf=e((()=>{r(),E()})),hf=e((()=>{r(),E()})),gf=e((()=>{r(),E()})),_f=e((()=>{r(),E()})),vf=e((()=>{r(),E()})),yf=e((()=>{r(),E()})),bf=e((()=>{r(),E()})),xf=e((()=>{r(),E()})),Sf=e((()=>{r(),E()})),Cf=e((()=>{r(),E()})),wf=e((()=>{r(),E()})),Tf=e((()=>{r(),E()})),Ef=e((()=>{r(),E()})),Df=e((()=>{r(),E()})),Of=e((()=>{r(),E()})),kf=e((()=>{r(),E()})),Af=e((()=>{r(),E()})),jf=e((()=>{r(),E()})),Mf=e((()=>{r(),E()})),Nf=e((()=>{r(),E()})),Pf=e((()=>{r(),E()})),Ff=e((()=>{r(),E()})),If=e((()=>{r(),E()})),Lf=e((()=>{r(),E()})),Rf=e((()=>{r(),E()})),zf=e((()=>{r(),E()})),Bf=e((()=>{r(),E()})),Vf=e((()=>{r(),E()})),Hf=e((()=>{r(),E()})),Uf=e((()=>{r(),E()})),Wf=e((()=>{r(),E()})),Gf=e((()=>{r(),E()})),Kf=e((()=>{r(),E()})),qf=e((()=>{r(),E()})),Jf=e((()=>{r(),E()})),Yf=e((()=>{r(),E()})),Xf=e((()=>{r(),E()})),Zf=e((()=>{r(),E()})),Qf=e((()=>{r(),E()})),$f=e((()=>{r(),E()})),ep=e((()=>{r(),E()})),tp=e((()=>{r(),E()})),np=e((()=>{r(),E()})),rp=e((()=>{r(),E()})),ip=e((()=>{r(),E()})),ap=e((()=>{r(),E()})),op=e((()=>{r(),E()})),sp=e((()=>{r(),E()})),cp=e((()=>{r(),E()})),lp=e((()=>{r(),E()})),up=e((()=>{r(),E()})),dp=e((()=>{r(),E()})),fp=e((()=>{r(),E()})),pp=e((()=>{r(),E()})),mp=e((()=>{r(),E()})),hp=e((()=>{r(),E()})),gp=e((()=>{r(),E()})),_p=e((()=>{r(),E()})),vp=e((()=>{r(),E()})),yp=e((()=>{r(),E()})),bp=e((()=>{r(),E()})),xp=e((()=>{r(),E()})),Sp=e((()=>{r(),E()})),Cp=e((()=>{r(),E()})),wp,Tp=e((()=>{r(),E(),M(),wp=({slot:e,title:r,className:i,width:a=`24`,height:o=`24`,styles:s}={})=>t`
  <svg
    slot=${T(e)}
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
    style=${T(s)}
  >
    ${j(r,()=>n`<title>${r}</title>`)}
    <path
      d="M21 12H9m12-6H9m12 12H9m-4-6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0-6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
    />
  </svg>
`})),Ep=e((()=>{r(),E()})),Dp=e((()=>{r(),E()})),Op=e((()=>{r(),E()})),kp=e((()=>{r(),E()})),Ap=e((()=>{r(),E()})),jp=e((()=>{r(),E()})),Mp=e((()=>{r(),E()})),Np=e((()=>{r(),E()})),Pp=e((()=>{r(),E()})),Fp=e((()=>{r(),E()})),Ip=e((()=>{r(),E()})),Lp=e((()=>{r(),E()})),Rp=e((()=>{r(),E()})),zp=e((()=>{r(),E()})),Bp=e((()=>{r(),E()})),Vp=e((()=>{r(),E()})),Hp=e((()=>{r(),E()})),Up=e((()=>{r(),E()})),Wp=e((()=>{r(),E()})),Gp=e((()=>{r(),E()})),Kp=e((()=>{r(),E()})),qp=e((()=>{r(),E()})),Jp=e((()=>{r(),E()})),Yp=e((()=>{r(),E()})),Xp=e((()=>{r(),E()})),Zp=e((()=>{r(),E()})),Qp=e((()=>{r(),E()})),$p=e((()=>{r(),E()})),em=e((()=>{r(),E()})),tm=e((()=>{r(),E()})),nm=e((()=>{r(),E()})),rm=e((()=>{r(),E()})),im=e((()=>{r(),E()})),am=e((()=>{r(),E()})),om=e((()=>{r(),E()})),sm=e((()=>{r(),E()})),cm=e((()=>{r(),E()})),lm=e((()=>{r(),E()})),um=e((()=>{r(),E()})),dm=e((()=>{r(),E()})),fm=e((()=>{r(),E()})),pm=e((()=>{r(),E()})),mm=e((()=>{r(),E()})),hm=e((()=>{r(),E()})),gm=e((()=>{r(),E()})),_m=e((()=>{r(),E()})),vm=e((()=>{r(),E()})),ym=e((()=>{r(),E()})),bm=e((()=>{r(),E()})),xm=e((()=>{r(),E()})),Sm=e((()=>{r(),E()})),Cm=e((()=>{r(),E()})),wm=e((()=>{r(),E()})),Tm=e((()=>{r(),E()})),Em=e((()=>{r(),E()})),Dm=e((()=>{r(),E()})),Om=e((()=>{r(),E()})),km=e((()=>{r(),E()})),Am=e((()=>{r(),E()})),jm=e((()=>{r(),E()})),Mm=e((()=>{r(),E()})),Nm=e((()=>{r(),E()})),Pm=e((()=>{r(),E()})),Fm=e((()=>{r(),E()})),Im=e((()=>{r(),E()})),Lm=e((()=>{r(),E()})),Rm=e((()=>{r(),E()})),zm=e((()=>{r(),E()})),Bm=e((()=>{r(),E()})),Vm=e((()=>{r(),E()})),Hm=e((()=>{r(),E()})),Um=e((()=>{r(),E()})),Wm=e((()=>{r(),E()})),Gm=e((()=>{r(),E()})),Km=e((()=>{r(),E()})),qm=e((()=>{r(),E()})),Jm=e((()=>{r(),E()})),Ym=e((()=>{r(),E()})),Xm=e((()=>{r(),E()})),Zm=e((()=>{r(),E()})),Qm=e((()=>{r(),E()})),$m=e((()=>{r(),E()})),eh=e((()=>{r(),E()})),th=e((()=>{r(),E()})),nh=e((()=>{r(),E()})),rh=e((()=>{r(),E()})),ih=e((()=>{r(),E()})),ah=e((()=>{r(),E()})),oh=e((()=>{r(),E()})),sh=e((()=>{r(),E()})),ch=e((()=>{r(),E()})),lh=e((()=>{r(),E()})),uh=e((()=>{r(),E()})),dh=e((()=>{r(),E()})),fh=e((()=>{r(),E()})),ph=e((()=>{r(),E()})),mh=e((()=>{r(),E()})),hh=e((()=>{r(),E()})),gh=e((()=>{r(),E()})),_h=e((()=>{r(),E()})),vh=e((()=>{r(),E()})),yh=e((()=>{r(),E()})),bh=e((()=>{r(),E()})),xh=e((()=>{r(),E()})),Sh=e((()=>{r(),E()})),Ch=e((()=>{r(),E()})),wh=e((()=>{r(),E()})),Th=e((()=>{r(),E()})),Eh=e((()=>{r(),E()})),Dh=e((()=>{r(),E()})),Oh=e((()=>{r(),E()})),kh=e((()=>{r(),E()})),Ah=e((()=>{r(),E()})),jh=e((()=>{r(),E()})),Mh=e((()=>{r(),E()})),Nh=e((()=>{r(),E()})),Ph=e((()=>{r(),E()})),Fh=e((()=>{r(),E()})),Ih=e((()=>{r(),E()})),Lh=e((()=>{r(),E()})),Rh=e((()=>{r(),E()})),zh=e((()=>{r(),E()})),Bh=e((()=>{r(),E()})),Vh=e((()=>{r(),E()})),Hh=e((()=>{r(),E()})),Uh=e((()=>{r(),E()})),Wh=e((()=>{r(),E()})),Gh=e((()=>{r(),E()})),Kh=e((()=>{r(),E()})),qh=e((()=>{r(),E()})),Jh=e((()=>{r(),E()})),Yh=e((()=>{r(),E()})),Xh=e((()=>{r(),E()})),Zh=e((()=>{r(),E()})),Qh=e((()=>{r(),E()})),$h=e((()=>{r(),E()})),eg=e((()=>{r(),E()})),tg=e((()=>{r(),E()})),ng=e((()=>{r(),E()})),rg=e((()=>{r(),E()})),ig=e((()=>{r(),E()})),ag=e((()=>{r(),E()})),og=e((()=>{r(),E()})),sg=e((()=>{r(),E()})),cg=e((()=>{r(),E()})),lg=e((()=>{r(),E()})),ug=e((()=>{r(),E()})),dg=e((()=>{r(),E()})),fg=e((()=>{r(),E()})),pg=e((()=>{r(),E()})),mg=e((()=>{r(),E()})),hg=e((()=>{r(),E()})),gg=e((()=>{r(),E()})),_g=e((()=>{r(),E()})),vg=e((()=>{r(),E()})),yg=e((()=>{r(),E()})),bg=e((()=>{r(),E()})),xg=e((()=>{r(),E()})),Sg=e((()=>{r(),E()})),Cg=e((()=>{r(),E()})),wg=e((()=>{r(),E()})),Tg=e((()=>{r(),E()})),Eg=e((()=>{r(),E()})),Dg=e((()=>{r(),E()})),Og=e((()=>{r(),E()})),kg=e((()=>{r(),E()})),Ag=e((()=>{r(),E()})),jg=e((()=>{r(),E()})),Mg=e((()=>{r(),E()})),Ng=e((()=>{r(),E()})),Pg=e((()=>{r(),E()})),Fg=e((()=>{r(),E()})),Ig=e((()=>{r(),E()})),Lg=e((()=>{r(),E()})),Rg=e((()=>{r(),E()})),zg=e((()=>{r(),E()})),Bg=e((()=>{r(),E()})),Vg=e((()=>{r(),E()})),Hg=e((()=>{r(),E()})),Ug=e((()=>{r(),E()})),Wg=e((()=>{r(),E()})),Gg=e((()=>{r(),E()})),Kg=e((()=>{r(),E()})),qg=e((()=>{r(),E()})),Jg=e((()=>{r(),E()})),Yg=e((()=>{r(),E()})),Xg=e((()=>{r(),E()})),Zg=e((()=>{r(),E()})),Qg=e((()=>{r(),E()})),$g=e((()=>{r(),E()})),e_=e((()=>{r(),E()})),t_=e((()=>{r(),E()})),n_=e((()=>{r(),E()})),r_=e((()=>{r(),E()})),i_=e((()=>{r(),E()})),a_=e((()=>{r(),E()})),o_=e((()=>{r(),E()})),s_=e((()=>{r(),E()})),c_=e((()=>{r(),E()})),l_=e((()=>{r(),E()})),u_=e((()=>{r(),E()})),d_=e((()=>{r(),E()})),f_=e((()=>{r(),E()})),p_=e((()=>{r(),E()})),m_=e((()=>{r(),E()})),h_=e((()=>{r(),E()})),g_=e((()=>{r(),E()})),__=e((()=>{r(),E()})),v_=e((()=>{r(),E()})),y_=e((()=>{r(),E()})),b_=e((()=>{r(),E()})),x_=e((()=>{r(),E()})),S_=e((()=>{r(),E()})),C_=e((()=>{r(),E()})),w_=e((()=>{r(),E()})),T_=e((()=>{r(),E()})),E_=e((()=>{r(),E()})),D_=e((()=>{r(),E()})),O_=e((()=>{r(),E()})),k_=e((()=>{r(),E()})),A_=e((()=>{r(),E()})),j_=e((()=>{r(),E()})),M_=e((()=>{r(),E()})),N_=e((()=>{r(),E()})),P_=e((()=>{r(),E()})),F_=e((()=>{r(),E()})),I_=e((()=>{r(),E()})),L_=e((()=>{r(),E()})),R_=e((()=>{r(),E()})),z_=e((()=>{r(),E()})),B_=e((()=>{r(),E()})),V_=e((()=>{r(),E()})),H_=e((()=>{r(),E()})),U_=e((()=>{r(),E()})),W_=e((()=>{r(),E()})),G_=e((()=>{r(),E()})),K_=e((()=>{r(),E()})),q_=e((()=>{r(),E()})),J_=e((()=>{r(),E()})),Y_=e((()=>{r(),E()})),X_=e((()=>{r(),E()})),Z_=e((()=>{r(),E()})),Q_=e((()=>{r(),E()})),$_=e((()=>{r(),E()})),ev=e((()=>{r(),E()})),tv=e((()=>{r(),E()})),nv=e((()=>{r(),E()})),rv=e((()=>{r(),E()})),iv=e((()=>{r(),E()})),av=e((()=>{r(),E()})),ov=e((()=>{r(),E()})),sv=e((()=>{r(),E()})),cv=e((()=>{r(),E()})),lv=e((()=>{r(),E()})),uv=e((()=>{r(),E()})),dv=e((()=>{r(),E()})),fv=e((()=>{r(),E()})),pv=e((()=>{r(),E()})),mv=e((()=>{r(),E()})),hv=e((()=>{r(),E()})),gv=e((()=>{r(),E()})),_v=e((()=>{r(),E()})),vv=e((()=>{r(),E()})),yv=e((()=>{r(),E()})),bv=e((()=>{r(),E()})),xv=e((()=>{r(),E()})),Sv=e((()=>{r(),E()})),Cv=e((()=>{r(),E()})),wv=e((()=>{r(),E()})),Tv=e((()=>{r(),E()})),Ev=e((()=>{r(),E()})),Dv=e((()=>{r(),E()})),Ov=e((()=>{r(),E()})),kv=e((()=>{r(),E()})),Av=e((()=>{r(),E()})),jv=e((()=>{r(),E()})),Mv=e((()=>{r(),E()})),Nv=e((()=>{r(),E()})),Pv=e((()=>{r(),E()})),Fv=e((()=>{r(),E()})),Iv=e((()=>{r(),E()})),Lv=e((()=>{r(),E()})),Rv=e((()=>{r(),E()})),zv=e((()=>{r(),E()})),Bv=e((()=>{r(),E()})),Vv=e((()=>{r(),E()})),Hv=e((()=>{r(),E()})),Uv=e((()=>{r(),E()})),Wv=e((()=>{r(),E()})),Gv=e((()=>{r(),E()})),Kv=e((()=>{r(),E()})),qv=e((()=>{r(),E()})),Jv=e((()=>{r(),E()})),Yv=e((()=>{r(),E()})),Xv=e((()=>{r(),E()})),Zv=e((()=>{r(),E()})),Qv=e((()=>{r(),E()})),$v=e((()=>{r(),E()})),ey=e((()=>{r(),E()})),ty=e((()=>{r(),E()})),ny=e((()=>{r(),E()})),ry=e((()=>{r(),E()})),iy=e((()=>{r(),E()})),ay=e((()=>{r(),E()})),oy=e((()=>{r(),E()})),sy=e((()=>{r(),E()})),cy=e((()=>{r(),E()})),ly,uy=e((()=>{r(),E(),M(),ly=({slot:e,title:r,className:i,width:a=`24`,height:o=`24`,styles:s}={})=>t`
  <svg
    slot=${T(e)}
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
    style=${T(s)}
  >
    ${j(r,()=>n`<title>${r}</title>`)}
    <path
      d="M3 7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 3 6.12 3 7.8 3h8.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V7.8Z"
    />
  </svg>
`})),dy=e((()=>{r(),E()})),fy=e((()=>{r(),E()})),py=e((()=>{r(),E()})),my=e((()=>{r(),E()})),hy=e((()=>{r(),E()})),gy=e((()=>{r(),E()})),_y=e((()=>{r(),E()})),vy=e((()=>{r(),E()})),yy=e((()=>{r(),E()})),by=e((()=>{r(),E()})),xy=e((()=>{r(),E()})),Sy=e((()=>{r(),E()})),Cy=e((()=>{r(),E()})),wy=e((()=>{r(),E()})),Ty=e((()=>{r(),E()})),Ey=e((()=>{r(),E()})),Dy=e((()=>{r(),E()})),Oy=e((()=>{r(),E()})),ky=e((()=>{r(),E()})),Ay=e((()=>{r(),E()})),jy=e((()=>{r(),E()})),My=e((()=>{r(),E()})),Ny=e((()=>{r(),E()})),Py=e((()=>{r(),E()})),Fy=e((()=>{r(),E()})),Iy=e((()=>{r(),E()})),Ly=e((()=>{r(),E()})),Ry=e((()=>{r(),E()})),zy=e((()=>{r(),E()})),By=e((()=>{r(),E()})),Vy=e((()=>{r(),E()})),Hy=e((()=>{r(),E()})),Uy=e((()=>{r(),E()})),Wy=e((()=>{r(),E()})),Gy=e((()=>{r(),E()})),Ky=e((()=>{r(),E()})),qy=e((()=>{r(),E()})),Jy=e((()=>{r(),E()})),Yy=e((()=>{r(),E()})),Xy=e((()=>{r(),E()})),Zy=e((()=>{r(),E()})),Qy=e((()=>{r(),E()})),$y=e((()=>{r(),E()})),eb=e((()=>{r(),E()})),tb=e((()=>{r(),E()})),nb=e((()=>{r(),E()})),rb=e((()=>{r(),E()})),ib=e((()=>{r(),E()})),ab=e((()=>{r(),E()})),ob=e((()=>{r(),E()})),sb=e((()=>{r(),E()})),cb=e((()=>{r(),E()})),lb=e((()=>{r(),E()})),ub=e((()=>{r(),E()})),db=e((()=>{r(),E()})),fb=e((()=>{r(),E()})),pb=e((()=>{r(),E()})),mb=e((()=>{r(),E()})),hb=e((()=>{r(),E()})),gb=e((()=>{r(),E()})),_b=e((()=>{r(),E()})),vb=e((()=>{r(),E()})),yb=e((()=>{r(),E()})),bb=e((()=>{r(),E()})),xb=e((()=>{r(),E()})),Sb=e((()=>{r(),E()})),Cb=e((()=>{r(),E()})),wb=e((()=>{r(),E()})),Tb=e((()=>{r(),E()})),Eb=e((()=>{r(),E()})),Db=e((()=>{r(),E()})),Ob=e((()=>{r(),E()})),kb=e((()=>{r(),E()})),Ab=e((()=>{r(),E()})),jb=e((()=>{r(),E()})),Mb=e((()=>{r(),E()})),Nb=e((()=>{r(),E()})),Pb=e((()=>{r(),E()})),Fb=e((()=>{r(),E()})),Ib=e((()=>{r(),E()})),Lb=e((()=>{r(),E()})),Rb=e((()=>{r(),E()})),zb=e((()=>{r(),E()})),Bb=e((()=>{r(),E()})),Vb=e((()=>{r(),E()})),Hb=e((()=>{r(),E()})),Ub=e((()=>{r(),E()})),Wb=e((()=>{r(),E()})),Gb=e((()=>{r(),E()})),Kb=e((()=>{r(),E()})),qb=e((()=>{r(),E()})),Jb=e((()=>{r(),E()})),Yb=e((()=>{r(),E()})),Xb=e((()=>{r(),E()})),Zb=e((()=>{r(),E()})),Qb=e((()=>{r(),E()})),$b=e((()=>{r(),E()})),ex=e((()=>{r(),E()})),tx=e((()=>{r(),E()})),nx=e((()=>{r(),E()})),rx=e((()=>{r(),E()})),ix=e((()=>{r(),E()})),ax=e((()=>{r(),E()})),ox=e((()=>{r(),E()})),sx=e((()=>{r(),E()})),cx=e((()=>{r(),E()})),lx=e((()=>{r(),E()})),ux=e((()=>{r(),E()})),dx=e((()=>{r(),E()})),fx=e((()=>{r(),E()})),px=e((()=>{r(),E()})),mx=e((()=>{r(),E()})),hx=e((()=>{r(),E()})),gx=e((()=>{r(),E()})),_x=e((()=>{r(),E()})),vx=e((()=>{r(),E()})),yx=e((()=>{r(),E()})),bx=e((()=>{r(),E()})),xx=e((()=>{r(),E()})),Sx=e((()=>{r(),E()})),Cx=e((()=>{r(),E()})),wx=e((()=>{r(),E()})),Tx=e((()=>{r(),E()})),Ex=e((()=>{r(),E()})),Dx=e((()=>{r(),E()})),Ox=e((()=>{r(),E()})),kx=e((()=>{r(),E()})),Ax=e((()=>{r(),E()})),jx=e((()=>{r(),E()})),Mx=e((()=>{r(),E()})),Nx=e((()=>{r(),E()})),Px=e((()=>{r(),E()})),Fx=e((()=>{r(),E()})),Ix=e((()=>{r(),E()})),Lx=e((()=>{r(),E()})),Rx=e((()=>{r(),E()})),zx=e((()=>{r(),E()})),Bx=e((()=>{r(),E()})),Vx=e((()=>{r(),E()})),Hx=e((()=>{r(),E()})),Ux=e((()=>{r(),E()})),Wx=e((()=>{r(),E()})),Gx=e((()=>{r(),E()})),Kx=e((()=>{r(),E()})),qx=e((()=>{r(),E()})),Jx=e((()=>{r(),E()})),Yx=e((()=>{r(),E()})),Xx=e((()=>{r(),E()})),Zx=e((()=>{r(),E()})),Qx=e((()=>{r(),E()})),$x=e((()=>{r(),E()})),eS=e((()=>{r(),E()})),tS=e((()=>{r(),E()})),nS=e((()=>{r(),E()})),rS=e((()=>{r(),E()})),iS=e((()=>{r(),E()})),aS=e((()=>{r(),E()})),oS=e((()=>{r(),E()})),sS=e((()=>{r(),E()})),cS=e((()=>{r(),E()})),lS=e((()=>{r(),E()})),uS=e((()=>{r(),E()})),dS=e((()=>{r(),E()})),fS=e((()=>{r(),E()})),pS=e((()=>{r(),E()})),mS=e((()=>{r(),E()})),hS=e((()=>{r(),E()})),gS=e((()=>{r(),E()})),_S=e((()=>{r(),E()})),vS=e((()=>{r(),E()})),yS=e((()=>{r(),E()})),bS=e((()=>{r(),E()})),xS=e((()=>{r(),E()})),SS=e((()=>{r(),E()})),CS=e((()=>{je(),Me(),Ne(),Pe(),Fe(),Ie(),Le(),Re(),ze(),Be(),Ve(),He(),Ue(),We(),Ge(),Ke(),qe(),Je(),Ye(),Xe(),Ze(),Qe(),$e(),et(),tt(),nt(),rt(),it(),at(),ot(),st(),ct(),lt(),ut(),dt(),ft(),pt(),mt(),ht(),gt(),_t(),vt(),yt(),bt(),xt(),St(),Ct(),wt(),Tt(),Et(),Dt(),Ot(),kt(),At(),jt(),Mt(),Nt(),Pt(),Ft(),It(),Lt(),Rt(),zt(),Bt(),Vt(),Ht(),Ut(),Wt(),Gt(),Kt(),qt(),Jt(),Yt(),Xt(),Zt(),Qt(),$t(),en(),tn(),nn(),rn(),an(),on(),sn(),cn(),ln(),un(),dn(),fn(),pn(),mn(),hn(),gn(),_n(),vn(),yn(),bn(),xn(),Sn(),Cn(),wn(),Tn(),En(),Dn(),On(),kn(),An(),jn(),Mn(),Nn(),Pn(),Fn(),In(),Ln(),Rn(),zn(),Bn(),Vn(),Hn(),Un(),Wn(),Gn(),Kn(),qn(),Jn(),Yn(),Xn(),Zn(),Qn(),$n(),er(),tr(),nr(),rr(),ir(),ar(),or(),sr(),cr(),lr(),ur(),dr(),fr(),pr(),mr(),hr(),gr(),_r(),vr(),yr(),br(),xr(),Sr(),Cr(),wr(),Tr(),Er(),Dr(),Or(),kr(),Ar(),jr(),Mr(),Nr(),Pr(),Fr(),Ir(),Lr(),Rr(),zr(),Br(),Vr(),Hr(),Ur(),Wr(),Gr(),Kr(),qr(),Jr(),Yr(),Xr(),Zr(),Qr(),$r(),ei(),ti(),ni(),ri(),ii(),ai(),oi(),si(),ci(),li(),ui(),di(),fi(),pi(),mi(),hi(),gi(),_i(),vi(),yi(),bi(),xi(),Si(),Ci(),wi(),Ti(),Ei(),Di(),Oi(),ki(),Ai(),ji(),Mi(),Ni(),Pi(),Fi(),Ii(),Li(),Ri(),zi(),Bi(),Vi(),Hi(),Ui(),Wi(),Ki(),qi(),Ji(),Yi(),Xi(),Zi(),Qi(),$i(),ea(),ta(),na(),ra(),ia(),aa(),oa(),sa(),ca(),la(),ua(),da(),fa(),pa(),ma(),ha(),ga(),_a(),va(),ya(),ba(),xa(),Sa(),Ca(),wa(),Ta(),Ea(),Da(),Oa(),ka(),Aa(),ja(),Ma(),Na(),Pa(),Fa(),Ia(),La(),Ra(),za(),Ba(),Va(),Ha(),Ua(),Wa(),Ga(),Ka(),qa(),Ja(),Ya(),Xa(),Za(),Qa(),$a(),eo(),to(),no(),ro(),io(),ao(),oo(),so(),co(),lo(),uo(),po(),mo(),ho(),go(),_o(),vo(),yo(),bo(),xo(),So(),Co(),wo(),To(),Eo(),Do(),Oo(),ko(),Ao(),jo(),Mo(),No(),Po(),Fo(),Io(),Lo(),Ro(),zo(),Bo(),Vo(),Ho(),Uo(),Wo(),Go(),Ko(),qo(),Jo(),Yo(),Xo(),Zo(),Qo(),$o(),es(),ts(),ns(),rs(),is(),as(),os(),ss(),cs(),ls(),us(),ds(),fs(),ps(),ms(),hs(),gs(),_s(),vs(),ys(),bs(),xs(),Ss(),Cs(),ws(),Ts(),Es(),Ds(),Os(),ks(),As(),js(),Ms(),Ns(),Ps(),Fs(),Is(),Ls(),Rs(),zs(),Bs(),Vs(),Hs(),Us(),Ws(),Gs(),Ks(),qs(),Js(),Ys(),Xs(),Zs(),Qs(),$s(),ec(),tc(),nc(),rc(),ic(),ac(),oc(),sc(),cc(),lc(),uc(),dc(),fc(),pc(),mc(),hc(),gc(),_c(),vc(),yc(),bc(),xc(),Sc(),Cc(),wc(),Tc(),Ec(),Dc(),Oc(),kc(),Ac(),jc(),Mc(),Nc(),Pc(),Fc(),Ic(),Lc(),Rc(),zc(),Bc(),Vc(),Hc(),Uc(),Wc(),Gc(),Kc(),qc(),Jc(),Yc(),Xc(),Zc(),Qc(),$c(),el(),tl(),nl(),rl(),il(),al(),ol(),sl(),cl(),ll(),ul(),dl(),fl(),pl(),ml(),hl(),gl(),_l(),vl(),yl(),bl(),xl(),Sl(),Cl(),wl(),Tl(),El(),Dl(),Ol(),kl(),Al(),jl(),Ml(),Nl(),Pl(),Fl(),Il(),Ll(),Rl(),zl(),Bl(),Vl(),Hl(),Ul(),Wl(),Gl(),Kl(),ql(),Jl(),Yl(),Xl(),Zl(),Ql(),$l(),eu(),tu(),nu(),ru(),iu(),au(),ou(),su(),cu(),lu(),uu(),du(),fu(),pu(),mu(),hu(),gu(),_u(),vu(),yu(),bu(),xu(),Su(),Cu(),wu(),Tu(),Eu(),Du(),Ou(),ku(),Au(),ju(),Mu(),Nu(),Pu(),Fu(),Iu(),Lu(),Ru(),zu(),Bu(),Vu(),Hu(),Uu(),Wu(),Gu(),Ku(),qu(),Ju(),Yu(),Xu(),Zu(),Qu(),$u(),ed(),td(),nd(),rd(),id(),ad(),od(),sd(),cd(),ld(),ud(),dd(),fd(),pd(),md(),hd(),gd(),_d(),vd(),yd(),bd(),xd(),Sd(),Cd(),wd(),Td(),Ed(),Dd(),Od(),kd(),Ad(),jd(),Md(),Nd(),Pd(),Fd(),Id(),Ld(),Rd(),zd(),Bd(),Vd(),Hd(),Ud(),Wd(),Gd(),Kd(),qd(),Jd(),Yd(),Xd(),Zd(),Qd(),$d(),ef(),tf(),nf(),rf(),af(),of(),sf(),cf(),lf(),uf(),df(),ff(),pf(),mf(),hf(),gf(),_f(),vf(),yf(),bf(),xf(),Sf(),Cf(),wf(),Tf(),Ef(),Df(),Of(),kf(),Af(),jf(),Mf(),Nf(),Pf(),Ff(),If(),Lf(),Rf(),zf(),Bf(),Vf(),Hf(),Uf(),Wf(),Gf(),Kf(),qf(),Jf(),Yf(),Xf(),Zf(),Qf(),$f(),ep(),tp(),np(),rp(),ip(),ap(),op(),sp(),cp(),lp(),up(),dp(),fp(),pp(),mp(),hp(),gp(),_p(),vp(),yp(),bp(),xp(),Sp(),Cp(),Tp(),Ep(),Dp(),Op(),kp(),Ap(),jp(),Mp(),Np(),Pp(),Fp(),Ip(),Lp(),Rp(),zp(),Bp(),Vp(),Hp(),Up(),Wp(),Gp(),Kp(),qp(),Jp(),Yp(),Xp(),Zp(),Qp(),$p(),em(),tm(),nm(),rm(),im(),am(),om(),sm(),cm(),lm(),um(),dm(),fm(),pm(),mm(),hm(),gm(),_m(),vm(),ym(),bm(),xm(),Sm(),Cm(),wm(),Tm(),Em(),Dm(),Om(),km(),Am(),jm(),Mm(),Nm(),Pm(),Fm(),Im(),Lm(),Rm(),zm(),Bm(),Vm(),Hm(),Um(),Wm(),Gm(),Km(),qm(),Jm(),Ym(),Xm(),Zm(),Qm(),$m(),eh(),th(),nh(),rh(),ih(),ah(),oh(),sh(),ch(),lh(),uh(),dh(),fh(),ph(),mh(),hh(),gh(),_h(),vh(),yh(),bh(),xh(),Sh(),Ch(),wh(),Th(),Eh(),Dh(),Oh(),kh(),Ah(),jh(),Mh(),Nh(),Ph(),Fh(),Ih(),Lh(),Rh(),zh(),Bh(),Vh(),Hh(),Uh(),Wh(),Gh(),Kh(),qh(),Jh(),Yh(),Xh(),Zh(),Qh(),$h(),eg(),tg(),ng(),rg(),ig(),ag(),og(),sg(),cg(),lg(),ug(),dg(),fg(),pg(),mg(),hg(),gg(),_g(),vg(),yg(),bg(),xg(),Sg(),Cg(),wg(),Tg(),Eg(),Dg(),Og(),kg(),Ag(),jg(),Mg(),Ng(),Pg(),Fg(),Ig(),Lg(),Rg(),zg(),Bg(),Vg(),Hg(),Ug(),Wg(),Gg(),Kg(),qg(),Jg(),Yg(),Xg(),Zg(),Qg(),$g(),e_(),t_(),n_(),r_(),i_(),a_(),o_(),s_(),c_(),l_(),u_(),d_(),f_(),p_(),m_(),h_(),g_(),__(),v_(),y_(),b_(),x_(),S_(),C_(),w_(),T_(),E_(),D_(),O_(),k_(),A_(),j_(),M_(),N_(),P_(),F_(),I_(),L_(),R_(),z_(),B_(),V_(),H_(),U_(),W_(),G_(),K_(),q_(),J_(),Y_(),X_(),Z_(),Q_(),$_(),ev(),tv(),nv(),rv(),iv(),av(),ov(),sv(),cv(),lv(),uv(),dv(),fv(),pv(),mv(),hv(),gv(),_v(),vv(),yv(),bv(),xv(),Sv(),Cv(),wv(),Tv(),Ev(),Dv(),Ov(),kv(),Av(),jv(),Mv(),Nv(),Pv(),Fv(),Iv(),Lv(),Rv(),zv(),Bv(),Vv(),Hv(),Uv(),Wv(),Gv(),Kv(),qv(),Jv(),Yv(),Xv(),Zv(),Qv(),$v(),ey(),ty(),ny(),ry(),iy(),ay(),oy(),sy(),cy(),uy(),dy(),fy(),py(),my(),hy(),gy(),_y(),vy(),yy(),by(),xy(),Sy(),Cy(),wy(),Ty(),Ey(),Dy(),Oy(),ky(),Ay(),jy(),My(),Ny(),Py(),Fy(),Iy(),Ly(),Ry(),zy(),By(),Vy(),Hy(),Uy(),Wy(),Gy(),Ky(),qy(),Jy(),Yy(),Xy(),Zy(),Qy(),$y(),eb(),tb(),nb(),rb(),ib(),ab(),ob(),sb(),cb(),lb(),ub(),db(),fb(),pb(),mb(),hb(),gb(),_b(),vb(),yb(),bb(),xb(),Sb(),Cb(),wb(),Tb(),Eb(),Db(),Ob(),kb(),Ab(),jb(),Mb(),Nb(),Pb(),Fb(),Ib(),Lb(),Rb(),zb(),Bb(),Vb(),Hb(),Ub(),Wb(),Gb(),Kb(),qb(),Jb(),Yb(),Xb(),Zb(),Qb(),$b(),ex(),tx(),nx(),rx(),ix(),ax(),ox(),sx(),cx(),lx(),ux(),dx(),fx(),px(),mx(),hx(),gx(),_x(),vx(),yx(),bx(),xx(),Sx(),Cx(),wx(),Tx(),Ex(),Dx(),Ox(),kx(),Ax(),jx(),Mx(),Nx(),Px(),Fx(),Ix(),Lx(),Rx(),zx(),Bx(),Vx(),Hx(),Ux(),Wx(),Gx(),Kx(),qx(),Jx(),Yx(),Xx(),Zx(),Qx(),$x(),eS(),tS(),nS(),rS(),iS(),aS(),oS(),sS(),cS(),lS(),uS(),dS(),fS(),pS(),mS(),hS(),gS(),_S(),vS(),yS(),bS(),xS(),SS()}));function wS(){let e=[],t=Object.create(null),n;return t.get=(r,i)=>(n?.revoke?.(),i===zS?e:(e.push(i),n=Proxy.revocable(r,t),n.proxy)),Proxy.revocable(Object.create(null),t).proxy}function N(e,t){let{[zS]:n}=e(wS()),r=t?.keySeparator??`.`,i=t?.nsSeparator??`:`,a=t?.enableSelector===`strict`;if(n.length>1&&i){let e=t?.ns,o=a?Array.isArray(e)?e:e?[e]:null:Array.isArray(e)?e:null;if(o&&(a?o:o.length>1?o.slice(1):[]).includes(n[0]))return`${n[0]}${i}${n.slice(1).join(r)}`}return n.join(r)}var P,F,I,TS,ES,L,R,z,DS,OS,B,kS,AS,V,jS,MS,NS,PS,FS,IS,H,U,LS,RS,W,G,K,q,zS,J,BS,VS,HS,US,WS,GS,KS,qS,JS,YS,XS,ZS,QS,$S,Y,eC,X,tC,nC,Z,rC,iC=e((()=>{P=e=>typeof e==`string`,F=()=>{let e,t,n=new Promise((n,r)=>{e=n,t=r});return n.resolve=e,n.reject=t,n},I=e=>e==null?``:String(e),TS=(e,t,n)=>{e.forEach(e=>{t[e]&&(n[e]=t[e])})},ES=/###/g,L=e=>e&&e.includes(`###`)?e.replace(ES,`.`):e,R=e=>!e||P(e),z=(e,t,n)=>{let r=P(t)?t.split(`.`):t,i=0;for(;i<r.length-1;){if(R(e))return{};let t=L(r[i]);!e[t]&&n&&(e[t]=new n),e=Object.prototype.hasOwnProperty.call(e,t)?e[t]:{},++i}return R(e)?{}:{obj:e,k:L(r[i])}},DS=(e,t,n)=>{let{obj:r,k:i}=z(e,t,Object);if(r!==void 0||t.length===1){r[i]=n;return}let a=t[t.length-1],o=t.slice(0,t.length-1),s=z(e,o,Object);for(;s.obj===void 0&&o.length;)a=`${o[o.length-1]}.${a}`,o=o.slice(0,o.length-1),s=z(e,o,Object),s?.obj&&s.obj[`${s.k}.${a}`]!==void 0&&(s.obj=void 0);s.obj[`${s.k}.${a}`]=n},OS=(e,t,n,r)=>{let{obj:i,k:a}=z(e,t,Object);i[a]=i[a]||[],i[a].push(n)},B=(e,t)=>{let{obj:n,k:r}=z(e,t);if(n&&Object.prototype.hasOwnProperty.call(n,r))return n[r]},kS=(e,t,n)=>{let r=B(e,n);return r===void 0?B(t,n):r},AS=(e,t,n)=>{for(let r in t)r!==`__proto__`&&r!==`constructor`&&(Object.prototype.hasOwnProperty.call(e,r)?P(e[r])||e[r]instanceof String||P(t[r])||t[r]instanceof String?n&&(e[r]=t[r]):AS(e[r],t[r],n):e[r]=t[r]);return e},V=e=>e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,`\\$&`),jS={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`,"/":`&#x2F;`},MS=e=>P(e)?e.replace(/[&<>"'\/]/g,e=>jS[e]):e,NS=class{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){let t=this.regExpMap.get(e);if(t!==void 0)return t;let n=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,n),this.regExpQueue.push(e),n}},PS=[` `,`,`,`?`,`!`,`;`],FS=new NS(20),IS=(e,t,n)=>{t||=``,n||=``;let r=PS.filter(e=>!t.includes(e)&&!n.includes(e));if(r.length===0)return!0;let i=FS.getRegExp(`(${r.map(e=>e===`?`?`\\?`:e).join(`|`)})`),a=!i.test(e);if(!a){let t=e.indexOf(n);t>0&&!i.test(e.substring(0,t))&&(a=!0)}return a},H=(e,t,n=`.`)=>{if(!e)return;if(e[t])return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0;let r=t.split(n),i=e;for(let e=0;e<r.length;){if(!i||typeof i!=`object`)return;let t,a=``;for(let o=e;o<r.length;++o)if(o!==e&&(a+=n),a+=r[o],t=i[a],t!==void 0){if([`string`,`number`,`boolean`].includes(typeof t)&&o<r.length-1)continue;e+=o-e+1;break}i=t}return i},U=e=>e?.replace(/_/g,`-`),LS={type:`logger`,log(e){this.output(`log`,e)},warn(e){this.output(`warn`,e)},error(e){this.output(`error`,e)},output(e,t){console?.[e]?.apply?.(console,t)}},RS=class e{constructor(e,t={}){this.init(e,t)}init(e,t={}){this.prefix=t.prefix||`i18next:`,this.logger=e||LS,this.options=t,this.debug=t.debug}log(...e){return this.forward(e,`log`,``,!0)}warn(...e){return this.forward(e,`warn`,``,!0)}error(...e){return this.forward(e,`error`,``)}deprecate(...e){return this.forward(e,`warn`,`WARNING DEPRECATED: `,!0)}forward(e,t,n,r){return r&&!this.debug?null:(e=e.map(e=>P(e)?e.replace(/[\r\n\x00-\x1F\x7F]/g,` `):e),P(e[0])&&(e[0]=`${n}${this.prefix} ${e[0]}`),this.logger[t](e))}create(t){return new e(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return t||=this.options,t.prefix=t.prefix||this.prefix,new e(this.logger,t)}},W=new RS,G=class{constructor(){this.observers={}}on(e,t){return e.split(` `).forEach(e=>{this.observers[e]||(this.observers[e]=new Map);let n=this.observers[e].get(t)||0;this.observers[e].set(t,n+1)}),this}off(e,t){if(this.observers[e]){if(!t){delete this.observers[e];return}this.observers[e].delete(t)}}once(e,t){let n=(...r)=>{t(...r),this.off(e,n)};return this.on(e,n),this}emit(e,...t){this.observers[e]&&Array.from(this.observers[e].entries()).forEach(([e,n])=>{for(let r=0;r<n;r++)e(...t)}),this.observers[`*`]&&Array.from(this.observers[`*`].entries()).forEach(([n,r])=>{for(let i=0;i<r;i++)n(e,...t)})}},K=class extends G{constructor(e,t={ns:[`translation`],defaultNS:`translation`}){super(),this.data=e||{},this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator=`.`),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.includes(e)||this.options.ns.push(e)}removeNamespaces(e){let t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,n,r={}){let i=r.keySeparator===void 0?this.options.keySeparator:r.keySeparator,a=r.ignoreJSONStructure===void 0?this.options.ignoreJSONStructure:r.ignoreJSONStructure,o;e.includes(`.`)?o=e.split(`.`):(o=[e,t],n&&(Array.isArray(n)?o.push(...n):P(n)&&i?o.push(...n.split(i)):o.push(n)));let s=B(this.data,o);return!s&&!t&&!n&&e.includes(`.`)&&(e=o[0],t=o[1],n=o.slice(2).join(`.`)),s||!a||!P(n)?s:H(this.data?.[e]?.[t],n,i)}addResource(e,t,n,r,i={silent:!1}){let a=i.keySeparator===void 0?this.options.keySeparator:i.keySeparator,o=[e,t];n&&(o=o.concat(a?n.split(a):n)),e.includes(`.`)&&(o=e.split(`.`),r=t,t=o[1]),this.addNamespaces(t),DS(this.data,o,r),i.silent||this.emit(`added`,e,t,n,r)}addResources(e,t,n,r={silent:!1}){for(let r in n)(P(n[r])||Array.isArray(n[r]))&&this.addResource(e,t,r,n[r],{silent:!0});r.silent||this.emit(`added`,e,t,n)}addResourceBundle(e,t,n,r,i,a={silent:!1,skipCopy:!1}){let o=[e,t];e.includes(`.`)&&(o=e.split(`.`),r=n,n=t,t=o[1]),this.addNamespaces(t);let s=B(this.data,o)||{};a.skipCopy||(n=JSON.parse(JSON.stringify(n))),r?AS(s,n,i):s={...s,...n},DS(this.data,o,s),a.silent||this.emit(`added`,e,t,n)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit(`removed`,e,t)}hasResourceBundle(e,t){return this.getResource(e,t)!==void 0}getResourceBundle(e,t){return t||=this.options.defaultNS,this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){let t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(e=>t[e]&&Object.keys(t[e]).length>0)}toJSON(){return this.data}},q={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,n,r,i){return e.forEach(e=>{t=this.processors[e]?.process(t,n,r,i)??t}),t}},zS=Symbol(`i18next/PATH_KEY`),J=e=>!P(e)&&typeof e!=`boolean`&&typeof e!=`number`,BS=class e extends G{constructor(e,t={}){super(),TS([`resourceStore`,`languageUtils`,`pluralResolver`,`interpolator`,`backendConnector`,`i18nFormat`,`utils`],e,this),this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator=`.`),this.logger=W.create(`translator`),this.checkedLoadedFor={}}changeLanguage(e){e&&(this.language=e)}exists(e,t={interpolation:{}}){let n={...t};if(e==null)return!1;let r=this.resolve(e,n);if(r?.res===void 0)return!1;let i=J(r.res);return!(n.returnObjects===!1&&i)}extractFromKey(e,t){let n=t.nsSeparator===void 0?this.options.nsSeparator:t.nsSeparator;n===void 0&&(n=`:`);let r=t.keySeparator===void 0?this.options.keySeparator:t.keySeparator,i=t.ns||this.options.defaultNS||[],a=n&&e.includes(n),o=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!IS(e,n,r);if(a&&!o){let t=e.match(this.interpolator.nestingRegexp);if(t&&t.length>0)return{key:e,namespaces:P(i)?[i]:i};let a=e.split(n);(n!==r||n===r&&this.options.ns.includes(a[0]))&&(i=a.shift()),e=a.join(r)}return{key:e,namespaces:P(i)?[i]:i}}translate(t,n,r){let i=typeof n==`object`?{...n}:n;if(typeof i!=`object`&&this.options.overloadTranslationOptionHandler&&(i=this.options.overloadTranslationOptionHandler(arguments)),typeof i==`object`&&(i={...i}),i||={},t==null)return``;typeof t==`function`&&(t=N(t,{...this.options,...i})),Array.isArray(t)||(t=[String(t)]),t=t.map(e=>typeof e==`function`?N(e,{...this.options,...i}):String(e));let a=i.returnDetails===void 0?this.options.returnDetails:i.returnDetails,o=i.keySeparator===void 0?this.options.keySeparator:i.keySeparator,{key:s,namespaces:c}=this.extractFromKey(t[t.length-1],i),l=c[c.length-1],u=i.nsSeparator===void 0?this.options.nsSeparator:i.nsSeparator;u===void 0&&(u=`:`);let d=i.lng||this.language,f=i.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(d?.toLowerCase()===`cimode`)return f?a?{res:`${l}${u}${s}`,usedKey:s,exactUsedKey:s,usedLng:d,usedNS:l,usedParams:this.getUsedParamsDetails(i)}:`${l}${u}${s}`:a?{res:s,usedKey:s,exactUsedKey:s,usedLng:d,usedNS:l,usedParams:this.getUsedParamsDetails(i)}:s;let p=this.resolve(t,i),m=p?.res,h=p?.usedKey||s,g=p?.exactUsedKey||s,_=[`[object Number]`,`[object Function]`,`[object RegExp]`],v=i.joinArrays===void 0?this.options.joinArrays:i.joinArrays,y=!this.i18nFormat||this.i18nFormat.handleAsObject,b=i.count!==void 0&&!P(i.count),x=e.hasDefaultValue(i),S=b?this.pluralResolver.getSuffix(d,i.count,i):``,C=i.ordinal&&b?this.pluralResolver.getSuffix(d,i.count,{ordinal:!1}):``,w=b&&!i.ordinal&&i.count===0,T=w&&i[`defaultValue${this.options.pluralSeparator}zero`]||i[`defaultValue${S}`]||i[`defaultValue${C}`]||i.defaultValue,E=m;y&&!m&&x&&(E=T);let ee=J(E),D=Object.prototype.toString.apply(E);if(y&&E&&ee&&!_.includes(D)&&!(P(v)&&Array.isArray(E))){if(!i.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn(`accessing an object - but returnObjects options is not enabled!`);let e=this.options.returnedObjectHandler?this.options.returnedObjectHandler(h,E,{...i,ns:c}):`key '${s} (${this.language})' returned an object instead of string.`;return a?(p.res=e,p.usedParams=this.getUsedParamsDetails(i),p):e}if(o){let e=Array.isArray(E),t=e?[]:{},n=e?g:h;for(let e in E)if(Object.prototype.hasOwnProperty.call(E,e)){let r=`${n}${o}${e}`;x&&!m?t[e]=this.translate(r,{...i,defaultValue:J(T)?T[e]:void 0,joinArrays:!1,ns:c}):t[e]=this.translate(r,{...i,joinArrays:!1,ns:c}),t[e]===r&&(t[e]=E[e])}m=t}}else if(y&&P(v)&&Array.isArray(m))m=m.join(v),m&&=this.extendTranslation(m,t,i,r);else{let e=!1,n=!1;!this.isValidLookup(m)&&x&&(e=!0,m=T),this.isValidLookup(m)||(n=!0,m=s);let a=(i.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&n?void 0:m,c=x&&T!==m&&this.options.updateMissing;if(n||e||c){if(this.logger.log(c?`updateKey`:`missingKey`,d,l,b&&!c?`${s}${this.pluralResolver.getSuffix(d,i.count,i)}`:s,c?T:m),o){let e=this.resolve(s,{...i,keySeparator:!1});e&&e.res&&this.logger.warn(`Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.`)}let e=[],t=this.languageUtils.getFallbackCodes(this.options.fallbackLng,i.lng||this.language);if(this.options.saveMissingTo===`fallback`&&t&&t[0])for(let n=0;n<t.length;n++)e.push(t[n]);else this.options.saveMissingTo===`all`?e=this.languageUtils.toResolveHierarchy(i.lng||this.language):e.push(i.lng||this.language);let n=(e,t,n)=>{let r=x&&n!==m?n:a;this.options.missingKeyHandler?this.options.missingKeyHandler(e,l,t,r,c,i):this.backendConnector?.saveMissing&&this.backendConnector.saveMissing(e,l,t,r,c,i),this.emit(`missingKey`,e,l,t,m)};this.options.saveMissing&&(this.options.saveMissingPlurals&&b?e.forEach(e=>{let t=this.pluralResolver.getSuffixes(e,i);w&&i[`defaultValue${this.options.pluralSeparator}zero`]&&!t.includes(`${this.options.pluralSeparator}zero`)&&t.push(`${this.options.pluralSeparator}zero`),t.forEach(t=>{n([e],s+t,i[`defaultValue${t}`]||T)})}):n(e,s,T))}m=this.extendTranslation(m,t,i,p,r),n&&m===s&&this.options.appendNamespaceToMissingKey&&(m=`${l}${u}${s}`),(n||e)&&this.options.parseMissingKeyHandler&&(m=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}${u}${s}`:s,e?m:void 0,i))}return a?(p.res=m,p.usedParams=this.getUsedParamsDetails(i),p):m}extendTranslation(e,t,n,r,i){if(this.i18nFormat?.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...n},n.lng||this.language||r.usedLng,r.usedNS,r.usedKey,{resolved:r});else if(!n.skipInterpolation){n.interpolation&&this.interpolator.init({...n,interpolation:{...this.options.interpolation,...n.interpolation}});let a=P(e)&&(n?.interpolation?.skipOnVariables===void 0?this.options.interpolation.skipOnVariables:n.interpolation.skipOnVariables),o;if(a){let t=e.match(this.interpolator.nestingRegexp);o=t&&t.length}let s=n.replace&&!P(n.replace)?n.replace:n;if(this.options.interpolation.defaultVariables&&(s={...this.options.interpolation.defaultVariables,...s}),e=this.interpolator.interpolate(e,s,n.lng||this.language||r.usedLng,n),a){let t=e.match(this.interpolator.nestingRegexp),r=t&&t.length;o<r&&(n.nest=!1)}!n.lng&&r&&r.res&&(n.lng=this.language||r.usedLng),n.nest!==!1&&(e=this.interpolator.nest(e,(...e)=>i?.[0]===e[0]&&!n.context?(this.logger.warn(`It seems you are nesting recursively key: ${e[0]} in key: ${t[0]}`),null):this.translate(...e,t),n)),n.interpolation&&this.interpolator.reset()}let a=n.postProcess||this.options.postProcess,o=P(a)?[a]:a;return e!=null&&o?.length&&n.applyPostProcessor!==!1&&(e=q.handle(o,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...r,usedParams:this.getUsedParamsDetails(n)},...n}:n,this)),e}resolve(e,t={}){let n,r,i,a,o;return P(e)&&(e=[e]),Array.isArray(e)&&(e=e.map(e=>typeof e==`function`?N(e,{...this.options,...t}):e)),e.forEach(e=>{if(this.isValidLookup(n))return;let s=this.extractFromKey(e,t),c=s.key;r=c;let l=s.namespaces;this.options.fallbackNS&&(l=l.concat(this.options.fallbackNS));let u=t.count!==void 0&&!P(t.count),d=u&&!t.ordinal&&t.count===0,f=t.context!==void 0&&(P(t.context)||typeof t.context==`number`)&&t.context!==``,p=t.lngs?t.lngs:this.languageUtils.toResolveHierarchy(t.lng||this.language,t.fallbackLng);l.forEach(e=>{this.isValidLookup(n)||(o=e,!this.checkedLoadedFor[`${p[0]}-${e}`]&&this.utils?.hasLoadedNamespace&&!this.utils?.hasLoadedNamespace(o)&&(this.checkedLoadedFor[`${p[0]}-${e}`]=!0,this.logger.warn(`key "${r}" for languages "${p.join(`, `)}" won't get resolved as namespace "${o}" was not yet loaded`,`This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!`)),p.forEach(r=>{if(this.isValidLookup(n))return;a=r;let o=[c];if(this.i18nFormat?.addLookupKeys)this.i18nFormat.addLookupKeys(o,c,r,e,t);else{let e;u&&(e=this.pluralResolver.getSuffix(r,t.count,t));let n=`${this.options.pluralSeparator}zero`,i=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(u&&(t.ordinal&&e.startsWith(i)&&o.push(c+e.replace(i,this.options.pluralSeparator)),o.push(c+e),d&&o.push(c+n)),f){let r=`${c}${this.options.contextSeparator||`_`}${t.context}`;o.push(r),u&&(t.ordinal&&e.startsWith(i)&&o.push(r+e.replace(i,this.options.pluralSeparator)),o.push(r+e),d&&o.push(r+n))}}let s;for(;s=o.pop();)this.isValidLookup(n)||(i=s,n=this.getResource(r,e,s,t))}))})}),{res:n,usedKey:r,exactUsedKey:i,usedLng:a,usedNS:o}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e===``)}getResource(e,t,n,r={}){return this.i18nFormat?.getResource?this.i18nFormat.getResource(e,t,n,r):this.resourceStore.getResource(e,t,n,r)}getUsedParamsDetails(e={}){let t=[`defaultValue`,`ordinal`,`context`,`replace`,`lng`,`lngs`,`fallbackLng`,`ns`,`keySeparator`,`nsSeparator`,`returnObjects`,`returnDetails`,`joinArrays`,`postProcess`,`interpolation`],n=e.replace&&!P(e.replace),r=n?e.replace:e;if(n&&e.count!==void 0&&(r={...r,count:e.count}),this.options.interpolation.defaultVariables&&(r={...this.options.interpolation.defaultVariables,...r}),!n){r={...r};for(let e of t)delete r[e]}return r}static hasDefaultValue(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&t.startsWith(`defaultValue`)&&e[t]!==void 0)return!0;return!1}},VS=class{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=W.create(`languageUtils`),this.resolveHierarchyCache={}}clearCache(){this.resolveHierarchyCache={}}getScriptPartFromCode(e){if(e=U(e),!e||!e.includes(`-`))return null;let t=e.split(`-`);return t.length===2||(t.pop(),t[t.length-1].toLowerCase()===`x`)?null:this.formatLanguageCode(t.join(`-`))}getLanguagePartFromCode(e){if(e=U(e),!e||!e.includes(`-`))return e;let t=e.split(`-`);return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(P(e)&&e.includes(`-`)){let t;try{t=Intl.getCanonicalLocales(e)[0]}catch{}return t&&this.options.lowerCaseLng&&(t=t.toLowerCase()),t||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load===`languageOnly`||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.includes(e)}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(e=>{if(t)return;let n=this.formatLanguageCode(e);(!this.options.supportedLngs||this.isSupportedCode(n))&&(t=n)}),!t&&this.options.supportedLngs&&e.forEach(e=>{if(t)return;let n=this.getScriptPartFromCode(e);if(this.isSupportedCode(n))return t=n;let r=this.getLanguagePartFromCode(e);if(this.isSupportedCode(r))return t=r;t=this.options.supportedLngs.find(e=>e===r?!0:!e.includes(`-`)&&!r.includes(`-`)?!1:!!(e.includes(`-`)&&!r.includes(`-`)&&e.slice(0,e.indexOf(`-`))===r||e.startsWith(r)&&r.length>1))}),t||=this.getFallbackCodes(this.options.fallbackLng)[0],t}getFallbackCodes(e,t){if(!e)return[];if(typeof e==`function`&&(e=e(t)),P(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let n=e[t];return n||=e[this.getScriptPartFromCode(t)],n||=e[this.formatLanguageCode(t)],n||=e[this.getLanguagePartFromCode(t)],n||=e.default,n||[]}toResolveHierarchy(e,t){let n=this.options.fallbackLng,r=Array.isArray(n)?n.join(`|`):n;r!==this._cachedFallbackLng&&(this.resolveHierarchyCache={},this._cachedFallbackLng=r);let i=t===void 0||t===!1||P(t),a=t===void 0&&typeof this.options.fallbackLng==`function`,o=P(e)&&i&&!a,s=null;if(o){let n;n=t===void 0?`undefined`:t===!1?`boolean:false`:`string:${t}`,s=`${e.length}:${e}|${n}`}if(s!==null){let e=this.resolveHierarchyCache[s];if(e!==void 0)return e.slice()}let c=this.getFallbackCodes((t===!1?[]:t)||this.options.fallbackLng||[],e),l=[],u=e=>{e&&(this.isSupportedCode(e)?l.push(e):this.logger.warn(`rejecting language code not found in supportedLngs: ${e}`))};return P(e)&&(e.includes(`-`)||e.includes(`_`))?(this.options.load!==`languageOnly`&&u(this.formatLanguageCode(e)),this.options.load!==`languageOnly`&&this.options.load!==`currentOnly`&&u(this.getScriptPartFromCode(e)),this.options.load!==`currentOnly`&&u(this.getLanguagePartFromCode(e))):P(e)&&u(this.formatLanguageCode(e)),c.forEach(e=>{l.includes(e)||u(this.formatLanguageCode(e))}),s===null?l:(this.resolveHierarchyCache[s]=l,l.slice())}},HS={zero:0,one:1,two:2,few:3,many:4,other:5},US={select:e=>e===1?`one`:`other`,resolvedOptions:()=>({pluralCategories:[`one`,`other`]})},WS=class{constructor(e,t={}){this.languageUtils=e,this.options=t,this.logger=W.create(`pluralResolver`),this.pluralRulesCache={}}clearCache(){this.pluralRulesCache={}}getRule(e,t={}){let n=U(e===`dev`?`en`:e),r=t.ordinal?`ordinal`:`cardinal`,i=JSON.stringify({cleanedCode:n,type:r});if(i in this.pluralRulesCache)return this.pluralRulesCache[i];let a;try{a=new Intl.PluralRules(n,{type:r})}catch{if(typeof Intl>`u`)return this.logger.error(`No Intl support, please use an Intl polyfill!`),US;if(!e.match(/-|_/))return US;let n=this.languageUtils.getLanguagePartFromCode(e);a=this.getRule(n,t)}return this.pluralRulesCache[i]=a,a}needsPlural(e,t={}){let n=this.getRule(e,t);return n||=this.getRule(`dev`,t),n?.resolvedOptions().pluralCategories.length>1}getPluralFormsOfKey(e,t,n={}){return this.getSuffixes(e,n).map(e=>`${t}${e}`)}getSuffixes(e,t={}){let n=this.getRule(e,t);return n||=this.getRule(`dev`,t),n?n.resolvedOptions().pluralCategories.sort((e,t)=>HS[e]-HS[t]).map(e=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:``}${e}`):[]}getSuffix(e,t,n={}){let r=this.getRule(e,n);return r?`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:``}${r.select(t)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix(`dev`,t,n))}},GS=(e,t,n,r=`.`,i=!0)=>{let a=kS(e,t,n);return!a&&i&&P(n)&&(a=H(e,n,r),a===void 0&&(a=H(t,n,r))),a},KS=e=>e.replace(/\$/g,`$$$$`),qS=class{constructor(e={}){this.logger=W.create(`interpolator`),this.options=e,this.format=e?.interpolation?.format||(e=>e),this.init(e)}init(e={}){e.interpolation||={escapeValue:!0};let{escape:t,escapeValue:n,useRawValueToEscape:r,prefix:i,prefixEscaped:a,suffix:o,suffixEscaped:s,formatSeparator:c,unescapeSuffix:l,unescapePrefix:u,nestingPrefix:d,nestingPrefixEscaped:f,nestingSuffix:p,nestingSuffixEscaped:m,nestingOptionsSeparator:h,maxReplaces:g,alwaysFormat:_}=e.interpolation;this.escape=t===void 0?MS:t,this.escapeValue=n===void 0?!0:n,this.useRawValueToEscape=r===void 0?!1:r,this.prefix=i?V(i):a||`{{`,this.suffix=o?V(o):s||`}}`,this.formatSeparator=c||`,`,this.unescapePrefix=l?``:u?V(u):`-`,this.unescapeSuffix=this.unescapePrefix?``:l?V(l):``,this.nestingPrefix=d?V(d):f||V(`$t(`),this.nestingSuffix=p?V(p):m||V(`)`),this.nestingOptionsSeparator=h||`,`,this.maxReplaces=g||1e3,this.alwaysFormat=_===void 0?!1:_,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){let e=(e,t)=>e?.source===t?(e.lastIndex=0,e):new RegExp(t,`g`);this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)}interpolate(e,t,n,r){let i,a,o,s=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=e=>{if(!e.includes(this.formatSeparator)){let i=GS(t,s,e,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(i,void 0,n,{...r,...t,interpolationkey:e}):i}let i=e.split(this.formatSeparator),a=i.shift().trim(),o=i.join(this.formatSeparator).trim();return this.format(GS(t,s,a,this.options.keySeparator,this.options.ignoreJSONStructure),o,n,{...r,...t,interpolationkey:a})};this.resetRegExp(),!this.escapeValue&&typeof e==`string`&&/\$t\([^)]*\{[^}]*\{\{/.test(e)&&this.logger.warn(`nesting options string contains interpolated variables with escapeValue: false — if any of those values are attacker-controlled they can inject additional nesting options (e.g. redirect lng/ns). Sanitise untrusted input before passing it to t(), or keep escapeValue: true.`);let l=r?.missingInterpolationHandler||this.options.missingInterpolationHandler,u=r?.interpolation?.skipOnVariables===void 0?this.options.interpolation.skipOnVariables:r.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:e=>e},{regex:this.regexp,safeValue:e=>this.escapeValue?this.escape(e):e}].forEach(t=>{for(o=0;i=t.regex.exec(e);){let n=i[1].trim();if(a=c(n),a===void 0)if(typeof l==`function`){let t=l(e,i,r);a=P(t)?t:``}else if(r&&Object.prototype.hasOwnProperty.call(r,n))a=``;else if(u){a=i[0];continue}else this.logger.warn(`missed to pass in variable ${n} for interpolating ${e}`),a=``;else !P(a)&&!this.useRawValueToEscape&&(a=I(a));let s=t.safeValue(a);if(e=e.replace(i[0],KS(s)),u?(t.regex.lastIndex+=s.length,t.regex.lastIndex-=i[0].length):t.regex.lastIndex=0,o++,o>=this.maxReplaces)break}}),e}nest(e,t,n={}){let r,i,a,o=(e,t)=>{let n=this.nestingOptionsSeparator;if(!e.includes(n))return e;let r=e.split(RegExp(`${V(n)}[ ]*{`)),i=`{${r[1]}`;e=r[0],i=this.interpolate(i,a);let o=i.match(/'/g),s=i.match(/"/g);((o?.length??0)%2==0&&!s||(s?.length??0)%2!=0)&&(i=i.replace(/'/g,`"`));try{a=JSON.parse(i),t&&(a={...t,...a})}catch(t){return this.logger.warn(`failed parsing options string in nesting for key ${e}`,t),`${e}${n}${i}`}return a.defaultValue&&a.defaultValue.includes(this.prefix)&&delete a.defaultValue,e};for(;r=this.nestingRegexp.exec(e);){let s=[];a={...n},a=a.replace&&!P(a.replace)?a.replace:a,a.applyPostProcessor=!1,delete a.defaultValue;let c=/{.*}/s.test(r[1])?r[1].lastIndexOf(`}`)+1:r[1].indexOf(this.formatSeparator);if(c!==-1&&(s=r[1].slice(c).split(this.formatSeparator).map(e=>e.trim()).filter(Boolean),r[1]=r[1].slice(0,c)),i=t(o.call(this,r[1].trim(),a),a),i&&r[0]===e&&!P(i))return i;P(i)||(i=I(i)),i||=(this.logger.warn(`missed to resolve ${r[1]} for nesting ${e}`),``),s.length&&(i=s.reduce((e,t)=>this.format(e,t,n.lng,{...n,interpolationkey:r[1].trim()}),i.trim())),e=e.replace(r[0],KS(I(i))),this.regexp.lastIndex=0}return e}},JS=e=>{let t=e.toLowerCase().trim(),n={};if(e.includes(`(`)){let r=e.split(`(`);t=r[0].toLowerCase().trim();let i=r[1].slice(0,-1);t===`currency`&&!i.includes(`:`)?n.currency||=i.trim():t===`relativetime`&&!i.includes(`:`)?n.range||=i.trim():i.split(`;`).forEach(e=>{if(e){let[t,...r]=e.split(`:`),i=r.join(`:`).trim().replace(/^'+|'+$/g,``),a=t.trim();n[a]||(n[a]=i),i===`false`&&(n[a]=!1),i===`true`&&(n[a]=!0),isNaN(i)||(n[a]=parseInt(i,10))}})}return{formatName:t,formatOptions:n}},YS=e=>{let t={};return(n,r,i)=>{let a=i;i&&i.interpolationkey&&i.formatParams&&i.formatParams[i.interpolationkey]&&i[i.interpolationkey]&&(a={...a,[i.interpolationkey]:void 0});let o=r+JSON.stringify(a),s=t[o];return s||(s=e(U(r),i),t[o]=s),s(n)}},XS=e=>(t,n,r)=>e(U(n),r)(t),ZS=class{constructor(e={}){this.logger=W.create(`formatter`),this.options=e,this.init(e)}init(e,t={interpolation:{}}){this.formatSeparator=t.interpolation.formatSeparator||`,`;let n=t.cacheInBuiltFormats?YS:XS;this.formats={number:n((e,t)=>{let n=new Intl.NumberFormat(e,{...t});return e=>n.format(e)}),currency:n((e,t)=>{let n=new Intl.NumberFormat(e,{...t,style:`currency`});return e=>n.format(e)}),datetime:n((e,t)=>{let n=new Intl.DateTimeFormat(e,{...t});return e=>n.format(e)}),relativetime:n((e,t)=>{let n=new Intl.RelativeTimeFormat(e,{...t});return e=>n.format(e,t.range||`day`)}),list:n((e,t)=>{let n=new Intl.ListFormat(e,{...t});return e=>n.format(e)})}}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=YS(t)}format(e,t,n,r={}){if(!t||e==null)return e;let i=t.split(this.formatSeparator),a=[];for(let e=0;e<i.length;e++){let t=i[e];for(;t.indexOf(`(`)>-1&&!t.includes(`)`)&&e+1<i.length;)t=`${t}${this.formatSeparator}${i[++e]}`;a.push(t)}return a.reduce((e,t)=>{let{formatName:i,formatOptions:a}=JS(t);if(this.formats[i]){let t=e;try{let o=r?.formatParams?.[r.interpolationkey]||{},s=o.locale||o.lng||r.locale||r.lng||n;t=this.formats[i](e,s,{...a,...r,...o})}catch(e){this.logger.warn(e)}return t}else this.logger.warn(`there was no format function for ${i}`);return e},e)}},QS=(e,t)=>{e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)},$S=class extends G{constructor(e,t,n,r={}){super(),this.backend=e,this.store=t,this.services=n,this.languageUtils=n.languageUtils,this.options=r,this.logger=W.create(`backendConnector`),this.waitingReads=[],this.maxParallelReads=r.maxParallelReads||10,this.readingCalls=0,this.maxRetries=r.maxRetries>=0?r.maxRetries:5,this.retryTimeout=r.retryTimeout>=1?r.retryTimeout:350,this.state={},this.queue=[],this.backend?.init?.(n,r.backend,r)}queueLoad(e,t,n,r){let i={},a={},o={},s={};return e.forEach(e=>{let r=!0;t.forEach(t=>{let o=`${e}|${t}`;!n.reload&&this.store.hasResourceBundle(e,t)?this.state[o]=2:this.state[o]<0||(this.state[o]===1?a[o]===void 0&&(a[o]=!0):(this.state[o]=1,r=!1,a[o]===void 0&&(a[o]=!0),i[o]===void 0&&(i[o]=!0),s[t]===void 0&&(s[t]=!0)))}),r||(o[e]=!0)}),(Object.keys(i).length||Object.keys(a).length)&&this.queue.push({pending:a,pendingCount:Object.keys(a).length,loaded:{},errors:[],callback:r}),{toLoad:Object.keys(i),pending:Object.keys(a),toLoadLanguages:Object.keys(o),toLoadNamespaces:Object.keys(s)}}loaded(e,t,n){let r=e.split(`|`),i=r[0],a=r[1];t&&this.emit(`failedLoading`,i,a,t),!t&&n&&this.store.addResourceBundle(i,a,n,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&n&&(this.state[e]=0);let o={};this.queue.forEach(n=>{OS(n.loaded,[i],a),QS(n,e),t&&n.errors.push(t),n.pendingCount===0&&!n.done&&(Object.keys(n.loaded).forEach(e=>{o[e]||(o[e]={});let t=n.loaded[e];t.length&&t.forEach(t=>{o[e][t]===void 0&&(o[e][t]=!0)})}),n.done=!0,n.errors.length?n.callback(n.errors):n.callback())}),this.emit(`loaded`,o),this.queue=this.queue.filter(e=>!e.done)}read(e,t,n,r=0,i=this.retryTimeout,a){if(!e.length)return a(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:t,fcName:n,tried:r,wait:i,callback:a});return}this.readingCalls++;let o=(o,s)=>{if(this.readingCalls--,this.waitingReads.length>0){let e=this.waitingReads.shift();this.read(e.lng,e.ns,e.fcName,e.tried,e.wait,e.callback)}if(o&&s&&r<this.maxRetries){setTimeout(()=>{this.read(e,t,n,r+1,i*2,a)},i);return}a(o,s)},s=this.backend[n].bind(this.backend);if(s.length===2){try{let n=s(e,t);n&&typeof n.then==`function`?n.then(e=>o(null,e)).catch(o):o(null,n)}catch(e){o(e)}return}return s(e,t,o)}prepareLoading(e,t,n={},r){if(!this.backend)return this.logger.warn(`No backend was added via i18next.use. Will not load resources.`),r&&r();P(e)&&(e=this.languageUtils.toResolveHierarchy(e)),P(t)&&(t=[t]);let i=this.queueLoad(e,t,n,r);if(!i.toLoad.length)return i.pending.length||r(),null;i.toLoad.forEach(e=>{this.loadOne(e)})}load(e,t,n){this.prepareLoading(e,t,{},n)}reload(e,t,n){this.prepareLoading(e,t,{reload:!0},n)}loadOne(e,t=``){let n=e.split(`|`),r=n[0],i=n[1];this.read(r,i,`read`,void 0,void 0,(n,a)=>{n&&this.logger.warn(`${t}loading namespace ${i} for language ${r} failed`,n),!n&&a&&this.logger.log(`${t}loaded namespace ${i} for language ${r}`,a),this.loaded(e,n,a)})}saveMissing(e,t,n,r,i,a={},o=()=>{}){if(this.services?.utils?.hasLoadedNamespace&&!this.services?.utils?.hasLoadedNamespace(t)){this.logger.warn(`did not save key "${n}" as the namespace "${t}" was not yet loaded`,`This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!`);return}if(!(n==null||n===``)){if(this.backend?.create){let s={...a,isUpdate:i},c=this.backend.create.bind(this.backend);if(c.length<6)try{let i;i=c.length===5?c(e,t,n,r,s):c(e,t,n,r),i&&typeof i.then==`function`?i.then(e=>o(null,e)).catch(o):o(null,i)}catch(e){o(e)}else c(e,t,n,r,o,s)}!e||!e[0]||this.store.addResource(e[0],t,n,r)}}},Y=()=>({debug:!1,initAsync:!0,ns:[`translation`],defaultNS:[`translation`],fallbackLng:[`dev`],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:`all`,preload:!1,keySeparator:`.`,nsSeparator:`:`,pluralSeparator:`_`,contextSeparator:`_`,enableSelector:!1,partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:`fallback`,saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:e=>{let t={};if(typeof e[1]==`object`&&(t=e[1]),P(e[1])&&(t.defaultValue=e[1]),P(e[2])&&(t.tDescription=e[2]),typeof e[2]==`object`||typeof e[3]==`object`){let n=e[3]||e[2];Object.keys(n).forEach(e=>{t[e]=n[e]})}return t},interpolation:{escapeValue:!0,prefix:`{{`,suffix:`}}`,formatSeparator:`,`,unescapePrefix:`-`,nestingPrefix:`$t(`,nestingSuffix:`)`,nestingOptionsSeparator:`,`,maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),eC=e=>(P(e.ns)&&(e.ns=[e.ns]),P(e.fallbackLng)&&(e.fallbackLng=[e.fallbackLng]),P(e.fallbackNS)&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&!e.supportedLngs.includes(`cimode`)&&(e.supportedLngs=e.supportedLngs.concat([`cimode`])),e),X=()=>{},tC=e=>{Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(t=>{typeof e[t]==`function`&&(e[t]=e[t].bind(e))})},nC=class e extends G{constructor(e={},t){if(super(),this.options=eC(e),this.services={},this.logger=W,this.modules={external:[]},tC(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(e={},t){this.isInitializing=!0,typeof e==`function`&&(t=e,e={}),e.defaultNS==null&&e.ns&&(P(e.ns)?e.defaultNS=e.ns:e.ns.includes(`translation`)||(e.defaultNS=e.ns[0]));let n=Y();this.options={...n,...this.options,...eC(e)},this.options.interpolation={...n.interpolation,...this.options.interpolation},e.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=e.keySeparator),e.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=e.nsSeparator),typeof this.options.overloadTranslationOptionHandler!=`function`&&(this.options.overloadTranslationOptionHandler=n.overloadTranslationOptionHandler);let r=e=>e?typeof e==`function`?new e:e:null;if(!this.options.isClone){this.modules.logger?W.init(r(this.modules.logger),this.options):W.init(null,this.options);let e;e=this.modules.formatter?this.modules.formatter:ZS;let t=new VS(this.options);this.store=new K(this.options.resources,this.options);let n=this.services;n.logger=W,n.resourceStore=this.store,n.languageUtils=t,n.pluralResolver=new WS(t,{prepend:this.options.pluralSeparator}),e&&(n.formatter=r(e),n.formatter.init&&n.formatter.init(n,this.options),this.options.interpolation.format=n.formatter.format.bind(n.formatter)),n.interpolator=new qS(this.options),n.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},n.backendConnector=new $S(r(this.modules.backend),n.resourceStore,n,this.options),n.backendConnector.on(`*`,(e,...t)=>{this.emit(e,...t)}),this.modules.languageDetector&&(n.languageDetector=r(this.modules.languageDetector),n.languageDetector.init&&n.languageDetector.init(n,this.options.detection,this.options)),this.modules.i18nFormat&&(n.i18nFormat=r(this.modules.i18nFormat),n.i18nFormat.init&&n.i18nFormat.init(this)),this.translator=new BS(this.services,this.options),this.translator.on(`*`,(e,...t)=>{this.emit(e,...t)}),this.modules.external.forEach(e=>{e.init&&e.init(this)})}if(this.format=this.options.interpolation.format,t||=X,this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){let e=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);e.length>0&&e[0]!==`dev`&&(this.options.lng=e[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn(`init: no languageDetector is used and no lng is defined`),[`getResource`,`hasResourceBundle`,`getResourceBundle`,`getDataByLanguage`].forEach(e=>{this[e]=(...t)=>this.store[e](...t)}),[`addResource`,`addResources`,`addResourceBundle`,`removeResourceBundle`].forEach(e=>{this[e]=(...t)=>(this.store[e](...t),this)});let i=F(),a=()=>{let e=(e,n)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn(`init: i18next is already initialized. You should call init just once!`),this.isInitialized=!0,this.options.isClone||this.logger.log(`initialized`,this.options),this.emit(`initialized`,this.options),i.resolve(n),t(e,n)};if((this.languages||this.isLanguageChangingTo)&&!this.isInitialized)return e(null,this.t.bind(this));this.changeLanguage(this.options.lng,e)};return this.options.resources||!this.options.initAsync?a():setTimeout(a,0),i}loadResources(e,t=X){let n=t,r=P(e)?e:this.language;if(typeof e==`function`&&(n=e),!this.options.resources||this.options.partialBundledLanguages){if(r?.toLowerCase()===`cimode`&&(!this.options.preload||this.options.preload.length===0))return n();let e=[],t=t=>{t&&t!==`cimode`&&this.services.languageUtils.toResolveHierarchy(t).forEach(t=>{t!==`cimode`&&(e.includes(t)||e.push(t))})};r?t(r):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(e=>t(e)),this.options.preload?.forEach?.(e=>t(e)),this.services.backendConnector.load(e,this.options.ns,e=>{!e&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),n(e)})}else n(null)}reloadResources(e,t,n){let r=F();return typeof e==`function`&&(n=e,e=void 0),typeof t==`function`&&(n=t,t=void 0),e||=this.languages,t||=this.options.ns,n||=X,this.services.backendConnector.reload(e,t,e=>{r.resolve(),n(e)}),r}use(e){if(!e)throw Error(`You are passing an undefined module! Please check the object you are passing to i18next.use()`);if(!e.type)throw Error(`You are passing a wrong module! Please check the object you are passing to i18next.use()`);return e.type===`backend`&&(this.modules.backend=e),(e.type===`logger`||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type===`languageDetector`&&(this.modules.languageDetector=e),e.type===`i18nFormat`&&(this.modules.i18nFormat=e),e.type===`postProcessor`&&q.addPostProcessor(e),e.type===`formatter`&&(this.modules.formatter=e),e.type===`3rdParty`&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&![`cimode`,`dev`].includes(e)){for(let e=0;e<this.languages.length;e++){let t=this.languages[e];if(![`cimode`,`dev`].includes(t)&&this.store.hasLanguageSomeTranslations(t)){this.resolvedLanguage=t;break}}!this.resolvedLanguage&&!this.languages.includes(e)&&this.store.hasLanguageSomeTranslations(e)&&(this.resolvedLanguage=e,this.languages.unshift(e))}}changeLanguage(e,t){this.isLanguageChangingTo=e;let n=F();this.emit(`languageChanging`,e);let r=e=>{this.language=e,this.languages=this.services.languageUtils.toResolveHierarchy(e),this.resolvedLanguage=void 0,this.setResolvedLanguage(e)},i=(i,a)=>{a?this.isLanguageChangingTo===e&&(r(a),this.translator.changeLanguage(a),this.isLanguageChangingTo=void 0,this.emit(`languageChanged`,a),this.logger.log(`languageChanged`,a)):this.isLanguageChangingTo=void 0,n.resolve((...e)=>this.t(...e)),t&&t(i,(...e)=>this.t(...e))},a=t=>{!e&&!t&&this.services.languageDetector&&(t=[]);let n=P(t)?t:t&&t[0],a=this.store.hasLanguageSomeTranslations(n)?n:this.services.languageUtils.getBestMatchFromCodes(P(t)?[t]:t);a&&(this.language||r(a),this.translator.language||this.translator.changeLanguage(a),this.services.languageDetector?.cacheUserLanguage?.(a)),this.loadResources(a,e=>{i(e,a)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?a(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(e),n}getFixedT(e,t,n,r){let i=r?.scopeNs,a=(e,t,...r)=>{let o;o=typeof t==`object`?{...t}:this.options.overloadTranslationOptionHandler([e,t].concat(r)),o.lng=o.lng||a.lng,o.lngs=o.lngs||a.lngs;let s=o.ns!==void 0&&o.ns!==null;o.ns=o.ns||a.ns,o.keyPrefix!==``&&(o.keyPrefix=o.keyPrefix||n||a.keyPrefix);let c={...this.options,...o};Array.isArray(i)&&!s&&(c.ns=i),typeof o.keyPrefix==`function`&&(o.keyPrefix=N(o.keyPrefix,c));let l=this.options.keySeparator||`.`,u;return o.keyPrefix&&Array.isArray(e)?u=e.map(e=>(typeof e==`function`&&(e=N(e,c)),`${o.keyPrefix}${l}${e}`)):(typeof e==`function`&&(e=N(e,c)),u=o.keyPrefix?`${o.keyPrefix}${l}${e}`:e),this.t(u,o)};return P(e)?a.lng=e:a.lngs=e,a.ns=t,a.keyPrefix=n,a}t(...e){return this.translator?.translate(...e)}exists(...e){return this.translator?.exists(...e)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e,t={}){if(!this.isInitialized)return this.logger.warn(`hasLoadedNamespace: i18next was not initialized`,this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn(`hasLoadedNamespace: i18n.languages were undefined or empty`,this.languages),!1;let n=t.lng||this.resolvedLanguage||this.languages[0],r=this.options?this.options.fallbackLng:!1,i=this.languages[this.languages.length-1];if(n.toLowerCase()===`cimode`)return!0;let a=(e,t)=>{let n=this.services.backendConnector.state[`${e}|${t}`];return n===-1||n===0||n===2};if(t.precheck){let e=t.precheck(this,a);if(e!==void 0)return e}return!!(this.hasResourceBundle(n,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||a(n,e)&&(!r||a(i,e)))}loadNamespaces(e,t){let n=F();return this.options.ns?(P(e)&&(e=[e]),e.forEach(e=>{this.options.ns.includes(e)||this.options.ns.push(e)}),this.loadResources(e=>{n.resolve(),t&&t(e)}),n):(t&&t(),Promise.resolve())}loadLanguages(e,t){let n=F();P(e)&&(e=[e]);let r=this.options.preload||[],i=e.filter(e=>!r.includes(e)&&this.services.languageUtils.isSupportedCode(e));return i.length?(this.options.preload=r.concat(i),this.loadResources(e=>{n.resolve(),t&&t(e)}),n):(t&&t(),Promise.resolve())}dir(e){if(e||=this.resolvedLanguage||(this.languages?.length>0?this.languages[0]:this.language),!e)return`rtl`;try{let t=new Intl.Locale(e);if(t&&t.getTextInfo){let e=t.getTextInfo();if(e&&e.direction)return e.direction}}catch{}let t=`ar.shu.sqr.ssh.xaa.yhd.yud.aao.abh.abv.acm.acq.acw.acx.acy.adf.ads.aeb.aec.afb.ajp.apc.apd.arb.arq.ars.ary.arz.auz.avl.ayh.ayl.ayn.ayp.bbz.pga.he.iw.ps.pbt.pbu.pst.prp.prd.ug.ur.ydd.yds.yih.ji.yi.hbo.men.xmn.fa.jpr.peo.pes.prs.dv.sam.ckb`.split(`.`),n=this.services?.languageUtils||new VS(Y());return e.toLowerCase().indexOf(`-latn`)>1?`ltr`:t.includes(n.getLanguagePartFromCode(e))||e.toLowerCase().indexOf(`-arab`)>1?`rtl`:`ltr`}static createInstance(t={},n){let r=new e(t,n);return r.createInstance=e.createInstance,r}cloneInstance(t={},n=X){let r=t.forkResourceStore;r&&delete t.forkResourceStore;let i={...this.options,...t,isClone:!0},a=new e(i);if((t.debug!==void 0||t.prefix!==void 0)&&(a.logger=a.logger.clone(t)),[`store`,`services`,`language`].forEach(e=>{a[e]=this[e]}),a.services={...this.services},a.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},r&&(a.store=new K(Object.keys(this.store.data).reduce((e,t)=>(e[t]={...this.store.data[t]},e[t]=Object.keys(e[t]).reduce((n,r)=>(n[r]={...e[t][r]},n),e[t]),e),{}),i),a.services.resourceStore=a.store),t.interpolation){let e={...Y().interpolation,...this.options.interpolation,...t.interpolation},n={...i,interpolation:e};a.services.interpolator=new qS(n)}return a.translator=new BS(a.services,i),a.translator.on(`*`,(e,...t)=>{a.emit(e,...t)}),a.init(i,n),a.translator.options=i,a.translator.backendConnector.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},a}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}},Z=nC.createInstance(),Z.createInstance,Z.dir,Z.init,Z.loadResources,Z.reloadResources,Z.use,Z.changeLanguage,Z.getFixedT,rC=Z.t,Z.exists,Z.setDefaultNamespace,Z.hasLoadedNamespace,Z.loadNamespaces,Z.loadLanguages})),aC,oC,sC,cC,lC=e((()=>{Ae(),CS(),iC(),r(),aC=e=>e.button===0&&!e.altKey&&!e.ctrlKey&&!e.metaKey&&!e.shiftKey,oC=e=>e?.dispatchEvent(new Event(`select`,{bubbles:!0})),sC=e=>typeof e==`string`&&e?e:rC(`More`)||`More`,cC=({items:e,overflows:n,active:r,label:i,onItemClick:a})=>t`
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
			<span>${sC(i)}</span>
			<span class="chevron" aria-hidden="true"
				>${Gi({width:`16`,height:`16`})}</span
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
`})),Q,$,uC,dC,fC,pC,mC,hC,gC,_C=e((()=>{lC(),Q=e=>!e.hasAttribute(`disabled`)&&!e.hasAttribute(`hidden`)&&!e.hasAttribute(`overflowing`),$=(e,t,n)=>{e.getAttribute(t)!==n&&(n==null?e.removeAttribute(t):e.setAttribute(t,n))},uC=(e,t)=>{[`active`,`disabled`,`hidden`,`href`,`name`,`badge`,`title`,`role`].forEach(n=>$(t,n,e.getAttribute(n))),$(t,`aria-selected`,t.hasAttribute(`active`)?`true`:`false`),$(t,`aria-disabled`,e.hasAttribute(`disabled`)?`true`:null),t.setAttribute(`tabindex`,`-1`)},dC=e=>{e.forEach(([,e])=>{Q(e)&&e.setAttribute(`tabindex`,`0`)})},fC=e=>{let t=e.find(e=>e.hasAttribute(`active`));return t==null?null:Q(t)?t:[...e.slice(0,e.indexOf(t))].reverse().find(Q)??null},pC=e=>{let t=e.cloneNode(!0);return[`variant`,`size`,`compact-width`,`overflowing`,`style`].forEach(e=>t.removeAttribute(e)),t.setAttribute(`menu`,``),t},mC=(e,t)=>{t.innerHTML!==e.innerHTML&&t.replaceChildren(...[...e.childNodes].map(e=>e.cloneNode(!0))),uC(e,t)},hC=e=>new MouseEvent(`click`,e),gC=e=>t=>{let n=t.composedPath(),r=e.find(([,e])=>n.includes(e));if(!r)return;let[i,a]=r;t.stopPropagation(),i.dispatchEvent(hC(t))||t.preventDefault(),aC(t)&&oC(a)}})),vC,yC=e((()=>{y(),vC=x`
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
`})),bC,xC,SC,CC,wC,TC,EC,DC,OC=e((()=>{ae(),fe(),ge(),y(),xe(),lC(),_C(),yC(),bC=`cosmoz-tab-next`,xC={attributes:!0,attributeFilter:[`active`,`disabled`,`hidden`,`badge`,`href`,`name`,`title`],childList:!0,subtree:!0,characterData:!0},SC=(e,t)=>{let[n,r]=l(0);return u(()=>{let t=new MutationObserver(()=>r(e=>e+1));return e().forEach(e=>t.observe(e,xC)),()=>t.disconnect()},[t]),n},CC=(e,t,n)=>{let r=SC(e,n),i=b();return i.current??=new Map,d(()=>{let n=i.current,r=e(),a=r.filter(e=>t.has(e)).map(e=>{let t=n.get(e)??pC(e);return n.set(e,t),mC(e,t),[e,t]}),o=new Set(a.map(([e])=>e));n.forEach((e,t)=>{o.has(t)||n.delete(t)}),dC(a);let s=fC(r);return r.forEach(e=>$(e,`tabindex`,e===s?`0`:`-1`)),a},[t,n,r])},wC=e=>(e.getAttribute(`role`)===`radiogroup`&&(e.removeAttribute(`role`),e.dispatchEvent(new CustomEvent(`deprecation-warning`,{detail:{message:`role=radiogroup is no longer supported: a value picker belongs in cosmoz-toggle-group (@neovici/cosmoz-input); the items are tabs.`}}))),{variant:e.getAttribute(`variant`),size:e.getAttribute(`size`),"compact-width":e.hasAttribute(`compact-width`)?``:null,role:`tab`,"aria-selected":e=>e.hasAttribute(`active`)?`true`:`false`,"aria-disabled":e=>e.hasAttribute(`disabled`)?`true`:null}),TC=new Set([`ArrowLeft`,`ArrowRight`,`Home`,`End`]),EC=(e,t,n)=>{let r=e.filter(Q);if(r.length===0)return null;if(n===`Home`)return r[0];if(n===`End`)return r[r.length-1];let i=r.indexOf(t);return i<0?null:r[Math.max(0,Math.min(r.length-1,i+(n===`ArrowLeft`?-1:1)))]},DC=e=>{e.getAttribute(`variant`)||e.setAttribute(`variant`,`brand`);let[n,r]=l(0),[i,a]=l(()=>new Set),o=b(),s=p(()=>(o.current??[]).filter(e=>e.matches(bC)),[]),c=()=>r(e=>e+1),u=CC(s,i,n);return g(()=>{let t=e=>{if(!TC.has(e.key))return;let t=s(),n=e.target;if(!t.includes(n))return;e.preventDefault();let r=EC(t,n,e.key);!r||r===n||r.focus()};return e.addEventListener(`keydown`,t),()=>e.removeEventListener(`keydown`,t)},[]),t`
		<slot name="tabs"></slot>
		<div class="group" role="tablist">
			<slot
				${k(o)}
				${A(wC(e))}
				${be({is:e=>e.matches(bC),onOverflow:a})}
				@slotchange=${c}
			></slot>
		</div>
		${cC({items:u.map(([,e])=>e),overflows:u.length>0,active:u.some(([e])=>e.hasAttribute(`active`)&&!e.hidden),label:e.moreLabel,onItemClick:gC(u)})}
		<slot name="stats"></slot>
	`},customElements.define(`cosmoz-tabs-next`,m(DC,{observedAttributes:[`variant`,`size`,`compact-width`,`more-label`],styleSheets:[O,vC]}))})),kC,AC,jC,MC,NC=e((()=>{y(),kC=()=>new URL(location.hash.replace(/^#!?/iu,``).replace(`%23`,`#`),location.origin),AC=e=>e?()=>new URLSearchParams(kC().hash.replace(`#`,``)).get(e):void 0,jC=(e,t)=>{if(!e)return;let n=kC(),r=new URLSearchParams(n.hash.replace(`#`,``));return t==null?r.delete(e):r.set(e,t),`#!`+Object.assign(n,{hash:r}).href.replace(location.origin,``)},MC=e=>{let t=d(()=>AC(e),[e]),[n,r]=l(t),i=b(n);return u(()=>void(i.current=n),[n]),u(()=>{if(t==null)return;let e=()=>{let e=t();i.current!==e&&r(e)};return e(),window.addEventListener(`popstate`,e),window.addEventListener(`hashchange`,e),()=>{window.removeEventListener(`popstate`,e),window.removeEventListener(`hashchange`,e)}},[t]),[n,d(()=>e?t=>{r(t),history.pushState({},``,jC(e,t))}:r,[e])]}})),PC,FC,IC,LC,RC,zC=e((()=>{NC(),ie(),y(),E(),M(),PC=e=>!e.hidden&&!e.disabled,FC=e=>e.slice().sort((e,t)=>Number(t.fallback??!1)-Number(e.fallback??!1)).find(PC),IC=(e,t)=>{let n=t?e.find(e=>e.name===t):void 0;return n&&PC(n)?n:FC(e)},LC=(e,{hashParam:t,onActivate:n}={})=>{let[r,i]=MC(t),a=b([]),o=d(()=>IC(e,r??void 0),[e,r]);return{tabs:e,active:o,activated:d(()=>{let e=o?.name;return a.current=[...(a.current??[]).filter(t=>t!==e),e].filter(Boolean)},[o]),activate:i,onActivate:p(e=>{let t=e;if(t.button!==0||t.metaKey||t.ctrlKey)return;let r=e.currentTarget?.getAttribute(`name`);r&&(n?.(r),i(r))},[i,n])}},RC=({tabs:e,active:n,onActivate:r,className:i,variant:a,size:o,compactWidth:s})=>e.map(e=>{let c=re(e.title),l=e.content??c,u=e.badge||void 0;return t`<cosmoz-tab-next
			name=${e.name}
			class=${T(i)}
			variant=${T(a)}
			size=${T(o)}
			?compact-width=${T(s)}
			title=${T(c)}
			?active=${n?.name===e.name}
			?hidden=${e.hidden}
			?disabled=${e.disabled}
			badge=${T(u)}
			@click=${r}
			>${j(e.icon,e=>e({slot:`icon`}))}${l}</cosmoz-tab-next
		>`})})),BC=e((()=>{ue(),OC(),zC()}));export{w as C,T as S,ne as _,jC as a,te as b,rC as c,wp as d,fo as f,Se as g,Ce as h,NC as i,CS as l,j as m,RC as n,MC as o,M as p,LC as r,iC as s,BC as t,ly as u,ie as v,C as w,E as x,D as y};