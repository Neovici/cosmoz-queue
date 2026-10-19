import{t as e}from"./chunk-BvrOYcoh.js";import{a as t,c as n,o as r,r as i,t as a}from"./lit-html-BZ3vufxv.js";import{a as o,d as s,f as c,g as l,h as u,i as d,m as f,n as p,p as m,r as h,t as g,u as _,y as v}from"./haunted-BQgbGIjZ.js";import{a as y,c as b,d as x,i as S,l as C,o as w,r as T,s as E,t as ee,u as D}from"./i18next-D2cgeGk4.js";var te,O,k=e((()=>{te=e=>e,O=(e,...t)=>typeof e==`function`?e(...t):e})),ne,re=e((()=>{g(),ne=v`
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
`})),ie,ae,oe=e((()=>{b(),g(),r(),S(),D(),re(),ie=class extends HTMLElement{connectedCallback(){this.hasAttribute(`role`)||this.setAttribute(`role`,`tab`),this.hasAttribute(`tabindex`)||this.setAttribute(`tabindex`,`-1`)}},ae=e=>{let{active:n,badge:r,href:i}=e,o=_();return m(()=>{e.setAttribute(`aria-selected`,n?`true`:`false`)},[n]),m(()=>{let t=()=>(o.current??e).click(),n=n=>{n.target!==e||e.hasAttribute(`disabled`)||(n.key===`Enter`&&!n.repeat&&(n.preventDefault(),t()),n.key===` `&&n.preventDefault())},r=n=>{n.target!==e||e.hasAttribute(`disabled`)||n.key===` `&&t()};return e.addEventListener(`keydown`,n),e.addEventListener(`keyup`,r),()=>{e.removeEventListener(`keydown`,n),e.removeEventListener(`keyup`,r)}},[]),t`
		<a ${x(o)} part="link" href=${y(i)}>
			<slot id="iconSlot" name="icon"></slot>
			<slot id="contentSlot"></slot>
			${r?t`<span class="badge" part="badge">${r}</span>`:a}
		</a>
	`},customElements.define(`cosmoz-tab-next`,p(ae,{baseElement:ie,observedAttributes:[`active`,`badge`,`href`],styleSheets:[C,ne]}))})),A,j,se=e((()=>{r(),d(),A=class extends h{_slot;_ref;#e=()=>{!this._slot||!this._ref||(this._ref.current=this._slot.assignedElements({flatten:!0}))};#t=()=>this.#e();update(e,[t]){this._ref=t;let n=e.element;this._slot!==n&&(this._slot?.removeEventListener(`slotchange`,this.#t),this._slot=n,n.addEventListener(`slotchange`,this.#t)),this.#e()}disconnected(){this._slot?.removeEventListener(`slotchange`,this.#t),this._slot=void 0}render(e){return i}},j=o(A)})),ce,le,ue,M,de=e((()=>{r(),d(),k(),ce=(e,t,n)=>{n==null?e.removeAttribute(t):e.setAttribute(t,n)},le=(e,t)=>{for(let[n,r]of Object.entries(e))ce(t,n,O(r,t))},ue=class extends h{_slot;_attrs;#e=()=>{if(!this._slot||!this._attrs)return;let e=this._slot.assignedElements({flatten:!0});for(let t of e)le(this._attrs,t)};#t=()=>this.#e();render(e){return i}update(e,[t]){this._attrs=t;let n=e.element;return this._slot!==n&&(this._slot?.removeEventListener(`slotchange`,this.#t),this._slot=n,n.addEventListener(`slotchange`,this.#t)),this.#e(),i}disconnected(){this._slot?.removeEventListener(`slotchange`,this.#t),this._slot=void 0}},M=o(ue)})),N,P,F,I,fe=e((()=>{r(),d(),N=(e,t)=>e.assignedElements({flatten:!0}).filter(t),P=(e,t)=>e!=null&&t!=null&&e.size===t.size&&[...t].every(t=>e.has(t)),F=class extends h{_slot;_is;_onOverflow;#e=new Map;#t;#n;#r=e=>{e.forEach(e=>{let t=e.target;this.#e.set(t,e.boundingClientRect.height>0&&e.intersectionRect.height===0)}),this.#a()};#i=e=>{this.#n?.unobserve(e),this.#n?.observe(e)};#a=()=>{if(!this._slot||!this._is)return;let e=N(this._slot,this._is);e.forEach(e=>{let t=this.#e.get(e)===!0;t!==e.hasAttribute(`overflowing`)&&(t?e.setAttribute(`overflowing`,``):e.removeAttribute(`overflowing`))}),this.#e.forEach((t,n)=>{e.includes(n)||(this.#e.delete(n),this.#n?.unobserve(n),n.hasAttribute(`overflowing`)&&n.removeAttribute(`overflowing`))});let t=new Set(e.filter(e=>this.#e.get(e)===!0));P(this.#t,t)||(this.#t=t,this._onOverflow?.(t))};#o=()=>this.#s();#s=()=>{if(!(!this.#n||!this._slot||!this._is)){for(let e of N(this._slot,this._is))this.#i(e);this.#a()}};render(e){return i}update(e,[t]){this._is=t.is,this._onOverflow=t.onOverflow;let n=e.element;return this._slot!==n&&(this._slot?.removeEventListener(`slotchange`,this.#o),this.#n?.disconnect(),this.#n=void 0,this._slot=n,n.addEventListener(`slotchange`,this.#o)),this.#n??=new IntersectionObserver(this.#r,{root:this._slot,threshold:[0,1]}),this.#s(),i}disconnected(){this._slot?.removeEventListener(`slotchange`,this.#o),this._slot=void 0,this.#n?.disconnect(),this.#n=void 0,this.#e.clear(),this.#t=void 0}},I=o(F)})),L,R=e((()=>{g(),L=e=>{let t=u(()=>({}),[]);return u(()=>Object.assign(t,e),[t,...Object.values(e)])}})),z,B,pe=e((()=>{R(),g(),z=e=>{for(let t of e.current??[]){let e=t.matches(`[autofocus]`)?t:t.querySelector(`[autofocus]`);if(e instanceof HTMLElement){e.focus();break}}},B=e=>{let{placement:t=`bottom span-right`,disabled:n,passthrough:r,openOnHover:i,openOnFocus:a}=e,o=_(),[c,u]=s(`opened`,!1),d=_(),p=_(),m=L({disabled:n,openOnHover:i}),h=f(()=>{let e=d.current?.[0];return e instanceof HTMLElement?e:void 0},[]),g=f(()=>{m.disabled||(u(!0),o.current?.showPopover?.())},[]),v=f(()=>{u(!1),o.current?.hidePopover?.()},[]),y=f(()=>{o.current?.matches(`:popover-open`)?v():g()},[]),b=f(()=>{clearTimeout(m.closeTimeout)},[]),x=f(e=>{m.disabled||e.target===h()&&(b(),g())},[]),S=f(()=>{m.disabled||(b(),g())},[]),C=f(()=>{clearTimeout(m.closeTimeout),m.closeTimeout=setTimeout(()=>{let t=o.current;m.openOnHover&&(e.matches(`:hover`)||t?.matches(`:hover`))||e.matches(`:focus-within`)||t?.matches(`:focus-within`)||v()},100)},[]),w=f(()=>{let t=document.activeElement;for(;t?.shadowRoot;)t=t.shadowRoot.activeElement;if(!(t==null||t===document.body||t.offsetParent==null))return;let n=h();n&&(e.removeEventListener(`focusin`,x),n.focus(),e.addEventListener(`focusin`,x))},[]),T=f(t=>{let n=t.newState===`open`;u(n),n?z(p):w(),e.dispatchEvent(new ToggleEvent(`dropdown-toggle`,{newState:t.newState,oldState:t.oldState,composed:!0}))},[]);return l(()=>{let e=o.current;e&&(c?e.showPopover?.():e.hidePopover?.())},[c]),l(()=>{e.toggleAttribute(`opened`,!!c)},[c]),l(()=>{if(!(!a||n))return e.addEventListener(`focusin`,x),e.addEventListener(`focusout`,C),()=>{e.removeEventListener(`focusin`,x),e.removeEventListener(`focusout`,C)}},[a,n]),l(()=>{if(!(!i||n))return e.addEventListener(`pointerenter`,S),e.addEventListener(`pointerleave`,C),()=>{e.removeEventListener(`pointerenter`,S),e.removeEventListener(`pointerleave`,C)}},[i,n]),{placement:t,disabled:n,passthrough:r,opened:c,triggers:d,content:p,popoverRef:o,handleClick:a?g:y,onToggle:T,close:v,scheduleClose:C,cancelClose:b}}})),V,H,U,me=e((()=>{se(),de(),g(),r(),D(),pe(),V=v`
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
`,H=({placement:e,disabled:n,passthrough:r,opened:i,triggers:a,content:o,popoverRef:s,handleClick:c,onToggle:l,close:u,scheduleClose:d,cancelClose:f})=>t`
		<slot
			name="button"
			${j(a)}
			${M({"aria-expanded":r?null:String(i),disabled:n&&!r?``:null})}
			@click=${c}
		></slot>
		${n&&r?t`<slot></slot>`:t`<div
					popover
					style="position-area: ${e}"
					@toggle=${l}
					@select=${u}
					@focusout=${d}
					@focusin=${f}
					${x(e=>e&&(s.current=e))}
				>
					<slot ${j(o)}></slot>
				</div>`}
	`,U=e=>H(B(e)),customElements.define(`cosmoz-dropdown-next`,p(U,{styleSheets:[V],observedAttributes:[`placement`,`disabled`,`passthrough`,`open-on-hover`,`open-on-focus`],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})),he=e((()=>{r(),S()})),ge=e((()=>{r(),S()})),_e=e((()=>{r(),S()})),ve=e((()=>{r(),S()})),ye=e((()=>{r(),S()})),be=e((()=>{r(),S()})),xe=e((()=>{r(),S()})),Se=e((()=>{r(),S()})),Ce=e((()=>{r(),S()})),we=e((()=>{r(),S()})),Te=e((()=>{r(),S()})),Ee=e((()=>{r(),S()})),De=e((()=>{r(),S()})),Oe=e((()=>{r(),S()})),ke=e((()=>{r(),S()})),Ae=e((()=>{r(),S()})),je=e((()=>{r(),S()})),Me=e((()=>{r(),S()})),Ne=e((()=>{r(),S()})),Pe=e((()=>{r(),S()})),Fe=e((()=>{r(),S()})),Ie=e((()=>{r(),S()})),Le=e((()=>{r(),S()})),Re=e((()=>{r(),S()})),ze=e((()=>{r(),S()})),Be=e((()=>{r(),S()})),Ve=e((()=>{r(),S()})),He=e((()=>{r(),S()})),Ue=e((()=>{r(),S()})),We=e((()=>{r(),S()})),Ge=e((()=>{r(),S()})),Ke=e((()=>{r(),S()})),qe=e((()=>{r(),S()})),Je=e((()=>{r(),S()})),Ye=e((()=>{r(),S()})),Xe=e((()=>{r(),S()})),Ze=e((()=>{r(),S()})),Qe=e((()=>{r(),S()})),$e=e((()=>{r(),S()})),et=e((()=>{r(),S()})),tt=e((()=>{r(),S()})),nt=e((()=>{r(),S()})),rt=e((()=>{r(),S()})),it=e((()=>{r(),S()})),at=e((()=>{r(),S()})),ot=e((()=>{r(),S()})),st=e((()=>{r(),S()})),ct=e((()=>{r(),S()})),lt=e((()=>{r(),S()})),ut=e((()=>{r(),S()})),dt=e((()=>{r(),S()})),ft=e((()=>{r(),S()})),pt=e((()=>{r(),S()})),mt=e((()=>{r(),S()})),ht=e((()=>{r(),S()})),gt=e((()=>{r(),S()})),_t=e((()=>{r(),S()})),vt=e((()=>{r(),S()})),yt=e((()=>{r(),S()})),bt=e((()=>{r(),S()})),xt=e((()=>{r(),S()})),St=e((()=>{r(),S()})),Ct=e((()=>{r(),S()})),wt=e((()=>{r(),S()})),Tt=e((()=>{r(),S()})),Et=e((()=>{r(),S()})),Dt=e((()=>{r(),S()})),Ot=e((()=>{r(),S()})),kt=e((()=>{r(),S()})),At=e((()=>{r(),S()})),jt=e((()=>{r(),S()})),Mt=e((()=>{r(),S()})),Nt=e((()=>{r(),S()})),Pt=e((()=>{r(),S()})),Ft=e((()=>{r(),S()})),It=e((()=>{r(),S()})),Lt=e((()=>{r(),S()})),Rt=e((()=>{r(),S()})),zt=e((()=>{r(),S()})),Bt=e((()=>{r(),S()})),Vt=e((()=>{r(),S()})),Ht=e((()=>{r(),S()})),Ut=e((()=>{r(),S()})),Wt=e((()=>{r(),S()})),Gt=e((()=>{r(),S()})),Kt=e((()=>{r(),S()})),qt=e((()=>{r(),S()})),Jt=e((()=>{r(),S()})),Yt=e((()=>{r(),S()})),Xt=e((()=>{r(),S()})),Zt=e((()=>{r(),S()})),Qt=e((()=>{r(),S()})),$t=e((()=>{r(),S()})),en=e((()=>{r(),S()})),tn=e((()=>{r(),S()})),nn=e((()=>{r(),S()})),rn=e((()=>{r(),S()})),an=e((()=>{r(),S()})),on=e((()=>{r(),S()})),sn=e((()=>{r(),S()})),cn=e((()=>{r(),S()})),ln=e((()=>{r(),S()})),un=e((()=>{r(),S()})),dn=e((()=>{r(),S()})),fn=e((()=>{r(),S()})),pn=e((()=>{r(),S()})),mn=e((()=>{r(),S()})),hn=e((()=>{r(),S()})),gn=e((()=>{r(),S()})),_n=e((()=>{r(),S()})),vn=e((()=>{r(),S()})),yn=e((()=>{r(),S()})),bn=e((()=>{r(),S()})),xn=e((()=>{r(),S()})),Sn=e((()=>{r(),S()})),Cn=e((()=>{r(),S()})),wn=e((()=>{r(),S()})),Tn=e((()=>{r(),S()})),En=e((()=>{r(),S()})),Dn=e((()=>{r(),S()})),On=e((()=>{r(),S()})),kn=e((()=>{r(),S()})),An=e((()=>{r(),S()})),jn=e((()=>{r(),S()})),Mn=e((()=>{r(),S()})),Nn=e((()=>{r(),S()})),Pn=e((()=>{r(),S()})),Fn=e((()=>{r(),S()})),In=e((()=>{r(),S()})),Ln=e((()=>{r(),S()})),Rn=e((()=>{r(),S()})),zn=e((()=>{r(),S()})),Bn=e((()=>{r(),S()})),Vn=e((()=>{r(),S()})),Hn=e((()=>{r(),S()})),Un=e((()=>{r(),S()})),Wn=e((()=>{r(),S()})),Gn=e((()=>{r(),S()})),Kn=e((()=>{r(),S()})),qn=e((()=>{r(),S()})),Jn=e((()=>{r(),S()})),Yn=e((()=>{r(),S()})),Xn=e((()=>{r(),S()})),Zn=e((()=>{r(),S()})),Qn=e((()=>{r(),S()})),$n=e((()=>{r(),S()})),er=e((()=>{r(),S()})),tr=e((()=>{r(),S()})),nr=e((()=>{r(),S()})),rr=e((()=>{r(),S()})),ir=e((()=>{r(),S()})),ar=e((()=>{r(),S()})),or=e((()=>{r(),S()})),sr=e((()=>{r(),S()})),cr=e((()=>{r(),S()})),lr=e((()=>{r(),S()})),ur=e((()=>{r(),S()})),dr=e((()=>{r(),S()})),fr=e((()=>{r(),S()})),pr=e((()=>{r(),S()})),mr=e((()=>{r(),S()})),hr=e((()=>{r(),S()})),gr=e((()=>{r(),S()})),_r=e((()=>{r(),S()})),vr=e((()=>{r(),S()})),yr=e((()=>{r(),S()})),br=e((()=>{r(),S()})),xr=e((()=>{r(),S()})),Sr=e((()=>{r(),S()})),Cr=e((()=>{r(),S()})),wr=e((()=>{r(),S()})),Tr=e((()=>{r(),S()})),Er=e((()=>{r(),S()})),Dr=e((()=>{r(),S()})),Or=e((()=>{r(),S()})),kr=e((()=>{r(),S()})),Ar=e((()=>{r(),S()})),jr=e((()=>{r(),S()})),Mr=e((()=>{r(),S()})),Nr=e((()=>{r(),S()})),Pr=e((()=>{r(),S()})),Fr=e((()=>{r(),S()})),Ir=e((()=>{r(),S()})),Lr=e((()=>{r(),S()})),Rr=e((()=>{r(),S()})),zr=e((()=>{r(),S()})),Br=e((()=>{r(),S()})),Vr=e((()=>{r(),S()})),Hr=e((()=>{r(),S()})),Ur=e((()=>{r(),S()})),Wr=e((()=>{r(),S()})),Gr=e((()=>{r(),S()})),Kr=e((()=>{r(),S()})),qr=e((()=>{r(),S()})),Jr=e((()=>{r(),S()})),Yr=e((()=>{r(),S()})),Xr=e((()=>{r(),S()})),Zr=e((()=>{r(),S()})),Qr=e((()=>{r(),S()})),$r=e((()=>{r(),S()})),ei=e((()=>{r(),S()})),ti=e((()=>{r(),S()})),ni=e((()=>{r(),S()})),ri=e((()=>{r(),S()})),ii=e((()=>{r(),S()})),ai=e((()=>{r(),S()})),oi=e((()=>{r(),S()})),si=e((()=>{r(),S()})),ci=e((()=>{r(),S()})),li=e((()=>{r(),S()})),ui=e((()=>{r(),S()})),di=e((()=>{r(),S()})),fi=e((()=>{r(),S()})),pi=e((()=>{r(),S()})),mi=e((()=>{r(),S()})),hi=e((()=>{r(),S()})),gi=e((()=>{r(),S()})),_i=e((()=>{r(),S()})),vi=e((()=>{r(),S()})),yi=e((()=>{r(),S()})),bi=e((()=>{r(),S()})),xi=e((()=>{r(),S()})),Si=e((()=>{r(),S()})),Ci=e((()=>{r(),S()})),wi=e((()=>{r(),S()})),Ti=e((()=>{r(),S()})),Ei=e((()=>{r(),S()})),Di=e((()=>{r(),S()})),Oi=e((()=>{r(),S()})),W,ki=e((()=>{r(),S(),w(),W=({slot:e,title:r,className:i,width:a=`24`,height:o=`24`,styles:s}={})=>t`
  <svg
    slot=${y(e)}
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
    style=${y(s)}
  >
    ${E(r,()=>n`<title>${r}</title>`)}
    <path d="m6 9 6 6 6-6" />
  </svg>
`})),Ai=e((()=>{r(),S()})),ji=e((()=>{r(),S()})),Mi=e((()=>{r(),S()})),Ni=e((()=>{r(),S()})),Pi=e((()=>{r(),S()})),Fi=e((()=>{r(),S()})),Ii=e((()=>{r(),S()})),Li=e((()=>{r(),S()})),Ri=e((()=>{r(),S()})),zi=e((()=>{r(),S()})),Bi=e((()=>{r(),S()})),Vi=e((()=>{r(),S()})),Hi=e((()=>{r(),S()})),Ui=e((()=>{r(),S()})),Wi=e((()=>{r(),S()})),Gi=e((()=>{r(),S()})),Ki=e((()=>{r(),S()})),qi=e((()=>{r(),S()})),Ji=e((()=>{r(),S()})),Yi=e((()=>{r(),S()})),Xi=e((()=>{r(),S()})),Zi=e((()=>{r(),S()})),Qi=e((()=>{r(),S()})),$i=e((()=>{r(),S()})),ea=e((()=>{r(),S()})),ta=e((()=>{r(),S()})),na=e((()=>{r(),S()})),ra=e((()=>{r(),S()})),ia=e((()=>{r(),S()})),aa=e((()=>{r(),S()})),oa=e((()=>{r(),S()})),sa=e((()=>{r(),S()})),ca=e((()=>{r(),S()})),la=e((()=>{r(),S()})),ua=e((()=>{r(),S()})),da=e((()=>{r(),S()})),fa=e((()=>{r(),S()})),pa=e((()=>{r(),S()})),ma=e((()=>{r(),S()})),ha=e((()=>{r(),S()})),ga=e((()=>{r(),S()})),_a=e((()=>{r(),S()})),va=e((()=>{r(),S()})),ya=e((()=>{r(),S()})),ba=e((()=>{r(),S()})),xa=e((()=>{r(),S()})),Sa=e((()=>{r(),S()})),Ca=e((()=>{r(),S()})),wa=e((()=>{r(),S()})),Ta=e((()=>{r(),S()})),Ea=e((()=>{r(),S()})),Da=e((()=>{r(),S()})),Oa=e((()=>{r(),S()})),ka=e((()=>{r(),S()})),Aa=e((()=>{r(),S()})),ja=e((()=>{r(),S()})),Ma=e((()=>{r(),S()})),Na=e((()=>{r(),S()})),Pa=e((()=>{r(),S()})),Fa=e((()=>{r(),S()})),Ia=e((()=>{r(),S()})),La=e((()=>{r(),S()})),Ra=e((()=>{r(),S()})),za=e((()=>{r(),S()})),Ba=e((()=>{r(),S()})),Va=e((()=>{r(),S()})),Ha=e((()=>{r(),S()})),Ua=e((()=>{r(),S()})),Wa=e((()=>{r(),S()})),Ga=e((()=>{r(),S()})),Ka=e((()=>{r(),S()})),qa=e((()=>{r(),S()})),G,Ja=e((()=>{r(),S(),w(),G=({slot:e,title:r,className:i,width:a=`24`,height:o=`24`,styles:s}={})=>t`
  <svg
    slot=${y(e)}
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
    style=${y(s)}
  >
    ${E(r,()=>n`<title>${r}</title>`)}
    <path
      d="M12 3v18M7.8 3h8.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 3 6.12 3 7.8 3Z"
    />
  </svg>
`})),Ya=e((()=>{r(),S()})),Xa=e((()=>{r(),S()})),Za=e((()=>{r(),S()})),Qa=e((()=>{r(),S()})),$a=e((()=>{r(),S()})),eo=e((()=>{r(),S()})),to=e((()=>{r(),S()})),no=e((()=>{r(),S()})),ro=e((()=>{r(),S()})),io=e((()=>{r(),S()})),ao=e((()=>{r(),S()})),oo=e((()=>{r(),S()})),so=e((()=>{r(),S()})),co=e((()=>{r(),S()})),lo=e((()=>{r(),S()})),uo=e((()=>{r(),S()})),fo=e((()=>{r(),S()})),po=e((()=>{r(),S()})),mo=e((()=>{r(),S()})),ho=e((()=>{r(),S()})),go=e((()=>{r(),S()})),_o=e((()=>{r(),S()})),vo=e((()=>{r(),S()})),yo=e((()=>{r(),S()})),bo=e((()=>{r(),S()})),xo=e((()=>{r(),S()})),So=e((()=>{r(),S()})),Co=e((()=>{r(),S()})),wo=e((()=>{r(),S()})),To=e((()=>{r(),S()})),Eo=e((()=>{r(),S()})),Do=e((()=>{r(),S()})),Oo=e((()=>{r(),S()})),ko=e((()=>{r(),S()})),Ao=e((()=>{r(),S()})),jo=e((()=>{r(),S()})),Mo=e((()=>{r(),S()})),No=e((()=>{r(),S()})),Po=e((()=>{r(),S()})),Fo=e((()=>{r(),S()})),Io=e((()=>{r(),S()})),Lo=e((()=>{r(),S()})),Ro=e((()=>{r(),S()})),zo=e((()=>{r(),S()})),Bo=e((()=>{r(),S()})),Vo=e((()=>{r(),S()})),Ho=e((()=>{r(),S()})),Uo=e((()=>{r(),S()})),Wo=e((()=>{r(),S()})),Go=e((()=>{r(),S()})),Ko=e((()=>{r(),S()})),qo=e((()=>{r(),S()})),Jo=e((()=>{r(),S()})),Yo=e((()=>{r(),S()})),Xo=e((()=>{r(),S()})),Zo=e((()=>{r(),S()})),Qo=e((()=>{r(),S()})),$o=e((()=>{r(),S()})),es=e((()=>{r(),S()})),ts=e((()=>{r(),S()})),ns=e((()=>{r(),S()})),rs=e((()=>{r(),S()})),is=e((()=>{r(),S()})),as=e((()=>{r(),S()})),os=e((()=>{r(),S()})),ss=e((()=>{r(),S()})),cs=e((()=>{r(),S()})),ls=e((()=>{r(),S()})),us=e((()=>{r(),S()})),ds=e((()=>{r(),S()})),fs=e((()=>{r(),S()})),ps=e((()=>{r(),S()})),ms=e((()=>{r(),S()})),hs=e((()=>{r(),S()})),gs=e((()=>{r(),S()})),_s=e((()=>{r(),S()})),vs=e((()=>{r(),S()})),ys=e((()=>{r(),S()})),bs=e((()=>{r(),S()})),xs=e((()=>{r(),S()})),Ss=e((()=>{r(),S()})),Cs=e((()=>{r(),S()})),ws=e((()=>{r(),S()})),Ts=e((()=>{r(),S()})),Es=e((()=>{r(),S()})),Ds=e((()=>{r(),S()})),Os=e((()=>{r(),S()})),ks=e((()=>{r(),S()})),As=e((()=>{r(),S()})),js=e((()=>{r(),S()})),Ms=e((()=>{r(),S()})),Ns=e((()=>{r(),S()})),Ps=e((()=>{r(),S()})),Fs=e((()=>{r(),S()})),Is=e((()=>{r(),S()})),Ls=e((()=>{r(),S()})),Rs=e((()=>{r(),S()})),zs=e((()=>{r(),S()})),Bs=e((()=>{r(),S()})),Vs=e((()=>{r(),S()})),Hs=e((()=>{r(),S()})),Us=e((()=>{r(),S()})),Ws=e((()=>{r(),S()})),Gs=e((()=>{r(),S()})),Ks=e((()=>{r(),S()})),qs=e((()=>{r(),S()})),Js=e((()=>{r(),S()})),Ys=e((()=>{r(),S()})),Xs=e((()=>{r(),S()})),Zs=e((()=>{r(),S()})),Qs=e((()=>{r(),S()})),$s=e((()=>{r(),S()})),ec=e((()=>{r(),S()})),tc=e((()=>{r(),S()})),nc=e((()=>{r(),S()})),rc=e((()=>{r(),S()})),ic=e((()=>{r(),S()})),ac=e((()=>{r(),S()})),oc=e((()=>{r(),S()})),sc=e((()=>{r(),S()})),cc=e((()=>{r(),S()})),lc=e((()=>{r(),S()})),uc=e((()=>{r(),S()})),dc=e((()=>{r(),S()})),fc=e((()=>{r(),S()})),pc=e((()=>{r(),S()})),mc=e((()=>{r(),S()})),hc=e((()=>{r(),S()})),gc=e((()=>{r(),S()})),_c=e((()=>{r(),S()})),vc=e((()=>{r(),S()})),yc=e((()=>{r(),S()})),bc=e((()=>{r(),S()})),xc=e((()=>{r(),S()})),Sc=e((()=>{r(),S()})),Cc=e((()=>{r(),S()})),wc=e((()=>{r(),S()})),Tc=e((()=>{r(),S()})),Ec=e((()=>{r(),S()})),Dc=e((()=>{r(),S()})),Oc=e((()=>{r(),S()})),kc=e((()=>{r(),S()})),Ac=e((()=>{r(),S()})),jc=e((()=>{r(),S()})),Mc=e((()=>{r(),S()})),Nc=e((()=>{r(),S()})),Pc=e((()=>{r(),S()})),Fc=e((()=>{r(),S()})),Ic=e((()=>{r(),S()})),Lc=e((()=>{r(),S()})),Rc=e((()=>{r(),S()})),zc=e((()=>{r(),S()})),Bc=e((()=>{r(),S()})),Vc=e((()=>{r(),S()})),Hc=e((()=>{r(),S()})),Uc=e((()=>{r(),S()})),Wc=e((()=>{r(),S()})),Gc=e((()=>{r(),S()})),Kc=e((()=>{r(),S()})),qc=e((()=>{r(),S()})),Jc=e((()=>{r(),S()})),Yc=e((()=>{r(),S()})),Xc=e((()=>{r(),S()})),Zc=e((()=>{r(),S()})),Qc=e((()=>{r(),S()})),$c=e((()=>{r(),S()})),el=e((()=>{r(),S()})),tl=e((()=>{r(),S()})),nl=e((()=>{r(),S()})),rl=e((()=>{r(),S()})),il=e((()=>{r(),S()})),al=e((()=>{r(),S()})),ol=e((()=>{r(),S()})),sl=e((()=>{r(),S()})),cl=e((()=>{r(),S()})),ll=e((()=>{r(),S()})),ul=e((()=>{r(),S()})),dl=e((()=>{r(),S()})),fl=e((()=>{r(),S()})),pl=e((()=>{r(),S()})),ml=e((()=>{r(),S()})),hl=e((()=>{r(),S()})),gl=e((()=>{r(),S()})),_l=e((()=>{r(),S()})),vl=e((()=>{r(),S()})),yl=e((()=>{r(),S()})),bl=e((()=>{r(),S()})),xl=e((()=>{r(),S()})),Sl=e((()=>{r(),S()})),Cl=e((()=>{r(),S()})),wl=e((()=>{r(),S()})),Tl=e((()=>{r(),S()})),El=e((()=>{r(),S()})),Dl=e((()=>{r(),S()})),Ol=e((()=>{r(),S()})),kl=e((()=>{r(),S()})),Al=e((()=>{r(),S()})),jl=e((()=>{r(),S()})),Ml=e((()=>{r(),S()})),Nl=e((()=>{r(),S()})),Pl=e((()=>{r(),S()})),Fl=e((()=>{r(),S()})),Il=e((()=>{r(),S()})),Ll=e((()=>{r(),S()})),Rl=e((()=>{r(),S()})),zl=e((()=>{r(),S()})),Bl=e((()=>{r(),S()})),Vl=e((()=>{r(),S()})),Hl=e((()=>{r(),S()})),Ul=e((()=>{r(),S()})),Wl=e((()=>{r(),S()})),Gl=e((()=>{r(),S()})),Kl=e((()=>{r(),S()})),ql=e((()=>{r(),S()})),Jl=e((()=>{r(),S()})),Yl=e((()=>{r(),S()})),Xl=e((()=>{r(),S()})),Zl=e((()=>{r(),S()})),Ql=e((()=>{r(),S()})),$l=e((()=>{r(),S()})),eu=e((()=>{r(),S()})),tu=e((()=>{r(),S()})),nu=e((()=>{r(),S()})),ru=e((()=>{r(),S()})),iu=e((()=>{r(),S()})),au=e((()=>{r(),S()})),ou=e((()=>{r(),S()})),su=e((()=>{r(),S()})),cu=e((()=>{r(),S()})),lu=e((()=>{r(),S()})),uu=e((()=>{r(),S()})),du=e((()=>{r(),S()})),fu=e((()=>{r(),S()})),pu=e((()=>{r(),S()})),mu=e((()=>{r(),S()})),hu=e((()=>{r(),S()})),gu=e((()=>{r(),S()})),_u=e((()=>{r(),S()})),vu=e((()=>{r(),S()})),yu=e((()=>{r(),S()})),bu=e((()=>{r(),S()})),xu=e((()=>{r(),S()})),Su=e((()=>{r(),S()})),Cu=e((()=>{r(),S()})),wu=e((()=>{r(),S()})),Tu=e((()=>{r(),S()})),Eu=e((()=>{r(),S()})),Du=e((()=>{r(),S()})),Ou=e((()=>{r(),S()})),ku=e((()=>{r(),S()})),Au=e((()=>{r(),S()})),ju=e((()=>{r(),S()})),Mu=e((()=>{r(),S()})),Nu=e((()=>{r(),S()})),Pu=e((()=>{r(),S()})),Fu=e((()=>{r(),S()})),Iu=e((()=>{r(),S()})),Lu=e((()=>{r(),S()})),Ru=e((()=>{r(),S()})),zu=e((()=>{r(),S()})),Bu=e((()=>{r(),S()})),Vu=e((()=>{r(),S()})),Hu=e((()=>{r(),S()})),Uu=e((()=>{r(),S()})),Wu=e((()=>{r(),S()})),Gu=e((()=>{r(),S()})),Ku=e((()=>{r(),S()})),qu=e((()=>{r(),S()})),Ju=e((()=>{r(),S()})),Yu=e((()=>{r(),S()})),Xu=e((()=>{r(),S()})),Zu=e((()=>{r(),S()})),Qu=e((()=>{r(),S()})),$u=e((()=>{r(),S()})),ed=e((()=>{r(),S()})),td=e((()=>{r(),S()})),nd=e((()=>{r(),S()})),rd=e((()=>{r(),S()})),id=e((()=>{r(),S()})),ad=e((()=>{r(),S()})),od=e((()=>{r(),S()})),sd=e((()=>{r(),S()})),cd=e((()=>{r(),S()})),ld=e((()=>{r(),S()})),ud=e((()=>{r(),S()})),dd=e((()=>{r(),S()})),fd=e((()=>{r(),S()})),pd=e((()=>{r(),S()})),md=e((()=>{r(),S()})),hd=e((()=>{r(),S()})),gd=e((()=>{r(),S()})),_d=e((()=>{r(),S()})),vd=e((()=>{r(),S()})),yd=e((()=>{r(),S()})),bd=e((()=>{r(),S()})),xd=e((()=>{r(),S()})),Sd=e((()=>{r(),S()})),Cd=e((()=>{r(),S()})),wd=e((()=>{r(),S()})),Td=e((()=>{r(),S()})),Ed=e((()=>{r(),S()})),Dd=e((()=>{r(),S()})),Od=e((()=>{r(),S()})),kd=e((()=>{r(),S()})),Ad=e((()=>{r(),S()})),jd=e((()=>{r(),S()})),Md=e((()=>{r(),S()})),Nd=e((()=>{r(),S()})),Pd=e((()=>{r(),S()})),Fd=e((()=>{r(),S()})),Id=e((()=>{r(),S()})),Ld=e((()=>{r(),S()})),Rd=e((()=>{r(),S()})),zd=e((()=>{r(),S()})),Bd=e((()=>{r(),S()})),Vd=e((()=>{r(),S()})),Hd=e((()=>{r(),S()})),Ud=e((()=>{r(),S()})),Wd=e((()=>{r(),S()})),Gd=e((()=>{r(),S()})),Kd=e((()=>{r(),S()})),qd=e((()=>{r(),S()})),Jd=e((()=>{r(),S()})),Yd=e((()=>{r(),S()})),Xd=e((()=>{r(),S()})),Zd=e((()=>{r(),S()})),Qd=e((()=>{r(),S()})),$d=e((()=>{r(),S()})),ef=e((()=>{r(),S()})),tf=e((()=>{r(),S()})),nf=e((()=>{r(),S()})),rf=e((()=>{r(),S()})),af=e((()=>{r(),S()})),of=e((()=>{r(),S()})),sf=e((()=>{r(),S()})),cf=e((()=>{r(),S()})),lf=e((()=>{r(),S()})),uf=e((()=>{r(),S()})),df=e((()=>{r(),S()})),ff=e((()=>{r(),S()})),pf=e((()=>{r(),S()})),mf=e((()=>{r(),S()})),hf=e((()=>{r(),S()})),gf=e((()=>{r(),S()})),_f=e((()=>{r(),S()})),vf=e((()=>{r(),S()})),yf=e((()=>{r(),S()})),bf=e((()=>{r(),S()})),xf=e((()=>{r(),S()})),Sf=e((()=>{r(),S()})),Cf=e((()=>{r(),S()})),wf=e((()=>{r(),S()})),Tf=e((()=>{r(),S()})),Ef=e((()=>{r(),S()})),Df=e((()=>{r(),S()})),Of=e((()=>{r(),S()})),kf=e((()=>{r(),S()})),Af=e((()=>{r(),S()})),jf=e((()=>{r(),S()})),Mf=e((()=>{r(),S()})),Nf=e((()=>{r(),S()})),Pf=e((()=>{r(),S()})),Ff=e((()=>{r(),S()})),If=e((()=>{r(),S()})),Lf=e((()=>{r(),S()})),Rf=e((()=>{r(),S()})),zf=e((()=>{r(),S()})),Bf=e((()=>{r(),S()})),Vf=e((()=>{r(),S()})),Hf=e((()=>{r(),S()})),Uf=e((()=>{r(),S()})),Wf=e((()=>{r(),S()})),Gf=e((()=>{r(),S()})),Kf=e((()=>{r(),S()})),qf=e((()=>{r(),S()})),Jf=e((()=>{r(),S()})),Yf=e((()=>{r(),S()})),Xf=e((()=>{r(),S()})),Zf=e((()=>{r(),S()})),Qf=e((()=>{r(),S()})),$f=e((()=>{r(),S()})),ep=e((()=>{r(),S()})),tp=e((()=>{r(),S()})),np=e((()=>{r(),S()})),rp=e((()=>{r(),S()})),ip=e((()=>{r(),S()})),ap=e((()=>{r(),S()})),op,sp=e((()=>{r(),S(),w(),op=({slot:e,title:r,className:i,width:a=`24`,height:o=`24`,styles:s}={})=>t`
  <svg
    slot=${y(e)}
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
    style=${y(s)}
  >
    ${E(r,()=>n`<title>${r}</title>`)}
    <path
      d="M21 12H9m12-6H9m12 12H9m-4-6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0-6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
    />
  </svg>
`})),cp=e((()=>{r(),S()})),lp=e((()=>{r(),S()})),up=e((()=>{r(),S()})),dp=e((()=>{r(),S()})),fp=e((()=>{r(),S()})),pp=e((()=>{r(),S()})),mp=e((()=>{r(),S()})),hp=e((()=>{r(),S()})),gp=e((()=>{r(),S()})),_p=e((()=>{r(),S()})),vp=e((()=>{r(),S()})),yp=e((()=>{r(),S()})),bp=e((()=>{r(),S()})),xp=e((()=>{r(),S()})),Sp=e((()=>{r(),S()})),Cp=e((()=>{r(),S()})),wp=e((()=>{r(),S()})),Tp=e((()=>{r(),S()})),Ep=e((()=>{r(),S()})),Dp=e((()=>{r(),S()})),Op=e((()=>{r(),S()})),kp=e((()=>{r(),S()})),Ap=e((()=>{r(),S()})),jp=e((()=>{r(),S()})),Mp=e((()=>{r(),S()})),Np=e((()=>{r(),S()})),Pp=e((()=>{r(),S()})),Fp=e((()=>{r(),S()})),Ip=e((()=>{r(),S()})),Lp=e((()=>{r(),S()})),Rp=e((()=>{r(),S()})),zp=e((()=>{r(),S()})),Bp=e((()=>{r(),S()})),Vp=e((()=>{r(),S()})),Hp=e((()=>{r(),S()})),Up=e((()=>{r(),S()})),Wp=e((()=>{r(),S()})),Gp=e((()=>{r(),S()})),Kp=e((()=>{r(),S()})),qp=e((()=>{r(),S()})),Jp=e((()=>{r(),S()})),Yp=e((()=>{r(),S()})),Xp=e((()=>{r(),S()})),Zp=e((()=>{r(),S()})),Qp=e((()=>{r(),S()})),$p=e((()=>{r(),S()})),em=e((()=>{r(),S()})),tm=e((()=>{r(),S()})),nm=e((()=>{r(),S()})),rm=e((()=>{r(),S()})),im=e((()=>{r(),S()})),am=e((()=>{r(),S()})),om=e((()=>{r(),S()})),sm=e((()=>{r(),S()})),cm=e((()=>{r(),S()})),lm=e((()=>{r(),S()})),um=e((()=>{r(),S()})),dm=e((()=>{r(),S()})),fm=e((()=>{r(),S()})),pm=e((()=>{r(),S()})),mm=e((()=>{r(),S()})),hm=e((()=>{r(),S()})),gm=e((()=>{r(),S()})),_m=e((()=>{r(),S()})),vm=e((()=>{r(),S()})),ym=e((()=>{r(),S()})),bm=e((()=>{r(),S()})),xm=e((()=>{r(),S()})),Sm=e((()=>{r(),S()})),Cm=e((()=>{r(),S()})),wm=e((()=>{r(),S()})),Tm=e((()=>{r(),S()})),Em=e((()=>{r(),S()})),Dm=e((()=>{r(),S()})),Om=e((()=>{r(),S()})),km=e((()=>{r(),S()})),Am=e((()=>{r(),S()})),jm=e((()=>{r(),S()})),Mm=e((()=>{r(),S()})),Nm=e((()=>{r(),S()})),Pm=e((()=>{r(),S()})),Fm=e((()=>{r(),S()})),Im=e((()=>{r(),S()})),Lm=e((()=>{r(),S()})),Rm=e((()=>{r(),S()})),zm=e((()=>{r(),S()})),Bm=e((()=>{r(),S()})),Vm=e((()=>{r(),S()})),Hm=e((()=>{r(),S()})),Um=e((()=>{r(),S()})),Wm=e((()=>{r(),S()})),Gm=e((()=>{r(),S()})),Km=e((()=>{r(),S()})),qm=e((()=>{r(),S()})),Jm=e((()=>{r(),S()})),Ym=e((()=>{r(),S()})),Xm=e((()=>{r(),S()})),Zm=e((()=>{r(),S()})),Qm=e((()=>{r(),S()})),$m=e((()=>{r(),S()})),eh=e((()=>{r(),S()})),th=e((()=>{r(),S()})),nh=e((()=>{r(),S()})),rh=e((()=>{r(),S()})),ih=e((()=>{r(),S()})),ah=e((()=>{r(),S()})),oh=e((()=>{r(),S()})),sh=e((()=>{r(),S()})),ch=e((()=>{r(),S()})),lh=e((()=>{r(),S()})),uh=e((()=>{r(),S()})),dh=e((()=>{r(),S()})),fh=e((()=>{r(),S()})),ph=e((()=>{r(),S()})),mh=e((()=>{r(),S()})),hh=e((()=>{r(),S()})),gh=e((()=>{r(),S()})),_h=e((()=>{r(),S()})),vh=e((()=>{r(),S()})),yh=e((()=>{r(),S()})),bh=e((()=>{r(),S()})),xh=e((()=>{r(),S()})),Sh=e((()=>{r(),S()})),Ch=e((()=>{r(),S()})),wh=e((()=>{r(),S()})),Th=e((()=>{r(),S()})),Eh=e((()=>{r(),S()})),Dh=e((()=>{r(),S()})),Oh=e((()=>{r(),S()})),kh=e((()=>{r(),S()})),Ah=e((()=>{r(),S()})),jh=e((()=>{r(),S()})),Mh=e((()=>{r(),S()})),Nh=e((()=>{r(),S()})),Ph=e((()=>{r(),S()})),Fh=e((()=>{r(),S()})),Ih=e((()=>{r(),S()})),Lh=e((()=>{r(),S()})),Rh=e((()=>{r(),S()})),zh=e((()=>{r(),S()})),Bh=e((()=>{r(),S()})),Vh=e((()=>{r(),S()})),Hh=e((()=>{r(),S()})),Uh=e((()=>{r(),S()})),Wh=e((()=>{r(),S()})),Gh=e((()=>{r(),S()})),Kh=e((()=>{r(),S()})),qh=e((()=>{r(),S()})),Jh=e((()=>{r(),S()})),Yh=e((()=>{r(),S()})),Xh=e((()=>{r(),S()})),Zh=e((()=>{r(),S()})),Qh=e((()=>{r(),S()})),$h=e((()=>{r(),S()})),eg=e((()=>{r(),S()})),tg=e((()=>{r(),S()})),ng=e((()=>{r(),S()})),rg=e((()=>{r(),S()})),ig=e((()=>{r(),S()})),ag=e((()=>{r(),S()})),og=e((()=>{r(),S()})),sg=e((()=>{r(),S()})),cg=e((()=>{r(),S()})),lg=e((()=>{r(),S()})),ug=e((()=>{r(),S()})),dg=e((()=>{r(),S()})),fg=e((()=>{r(),S()})),pg=e((()=>{r(),S()})),mg=e((()=>{r(),S()})),hg=e((()=>{r(),S()})),gg=e((()=>{r(),S()})),_g=e((()=>{r(),S()})),vg=e((()=>{r(),S()})),yg=e((()=>{r(),S()})),bg=e((()=>{r(),S()})),xg=e((()=>{r(),S()})),Sg=e((()=>{r(),S()})),Cg=e((()=>{r(),S()})),wg=e((()=>{r(),S()})),Tg=e((()=>{r(),S()})),Eg=e((()=>{r(),S()})),Dg=e((()=>{r(),S()})),Og=e((()=>{r(),S()})),kg=e((()=>{r(),S()})),Ag=e((()=>{r(),S()})),jg=e((()=>{r(),S()})),Mg=e((()=>{r(),S()})),Ng=e((()=>{r(),S()})),Pg=e((()=>{r(),S()})),Fg=e((()=>{r(),S()})),Ig=e((()=>{r(),S()})),Lg=e((()=>{r(),S()})),Rg=e((()=>{r(),S()})),zg=e((()=>{r(),S()})),Bg=e((()=>{r(),S()})),Vg=e((()=>{r(),S()})),Hg=e((()=>{r(),S()})),Ug=e((()=>{r(),S()})),Wg=e((()=>{r(),S()})),Gg=e((()=>{r(),S()})),Kg=e((()=>{r(),S()})),qg=e((()=>{r(),S()})),Jg=e((()=>{r(),S()})),Yg=e((()=>{r(),S()})),Xg=e((()=>{r(),S()})),Zg=e((()=>{r(),S()})),Qg=e((()=>{r(),S()})),$g=e((()=>{r(),S()})),e_=e((()=>{r(),S()})),t_=e((()=>{r(),S()})),n_=e((()=>{r(),S()})),r_=e((()=>{r(),S()})),i_=e((()=>{r(),S()})),a_=e((()=>{r(),S()})),o_=e((()=>{r(),S()})),s_=e((()=>{r(),S()})),c_=e((()=>{r(),S()})),l_=e((()=>{r(),S()})),u_=e((()=>{r(),S()})),d_=e((()=>{r(),S()})),f_=e((()=>{r(),S()})),p_=e((()=>{r(),S()})),m_=e((()=>{r(),S()})),h_=e((()=>{r(),S()})),g_=e((()=>{r(),S()})),__=e((()=>{r(),S()})),v_=e((()=>{r(),S()})),y_=e((()=>{r(),S()})),b_=e((()=>{r(),S()})),x_=e((()=>{r(),S()})),S_=e((()=>{r(),S()})),C_=e((()=>{r(),S()})),w_=e((()=>{r(),S()})),T_=e((()=>{r(),S()})),E_=e((()=>{r(),S()})),D_=e((()=>{r(),S()})),O_=e((()=>{r(),S()})),k_=e((()=>{r(),S()})),A_=e((()=>{r(),S()})),j_=e((()=>{r(),S()})),M_=e((()=>{r(),S()})),N_=e((()=>{r(),S()})),P_=e((()=>{r(),S()})),F_=e((()=>{r(),S()})),I_=e((()=>{r(),S()})),L_=e((()=>{r(),S()})),R_=e((()=>{r(),S()})),z_=e((()=>{r(),S()})),B_=e((()=>{r(),S()})),V_=e((()=>{r(),S()})),H_=e((()=>{r(),S()})),U_=e((()=>{r(),S()})),W_=e((()=>{r(),S()})),G_=e((()=>{r(),S()})),K_=e((()=>{r(),S()})),q_=e((()=>{r(),S()})),J_=e((()=>{r(),S()})),Y_=e((()=>{r(),S()})),X_=e((()=>{r(),S()})),Z_=e((()=>{r(),S()})),Q_=e((()=>{r(),S()})),$_=e((()=>{r(),S()})),ev=e((()=>{r(),S()})),tv=e((()=>{r(),S()})),nv=e((()=>{r(),S()})),rv=e((()=>{r(),S()})),iv=e((()=>{r(),S()})),av=e((()=>{r(),S()})),ov=e((()=>{r(),S()})),sv=e((()=>{r(),S()})),cv=e((()=>{r(),S()})),lv=e((()=>{r(),S()})),uv=e((()=>{r(),S()})),dv=e((()=>{r(),S()})),fv=e((()=>{r(),S()})),pv=e((()=>{r(),S()})),mv=e((()=>{r(),S()})),hv=e((()=>{r(),S()})),gv=e((()=>{r(),S()})),_v=e((()=>{r(),S()})),vv=e((()=>{r(),S()})),yv=e((()=>{r(),S()})),bv=e((()=>{r(),S()})),xv=e((()=>{r(),S()})),Sv=e((()=>{r(),S()})),Cv=e((()=>{r(),S()})),wv=e((()=>{r(),S()})),Tv=e((()=>{r(),S()})),Ev=e((()=>{r(),S()})),Dv=e((()=>{r(),S()})),Ov=e((()=>{r(),S()})),kv=e((()=>{r(),S()})),Av=e((()=>{r(),S()})),jv=e((()=>{r(),S()})),Mv=e((()=>{r(),S()})),Nv=e((()=>{r(),S()})),Pv=e((()=>{r(),S()})),Fv=e((()=>{r(),S()})),Iv=e((()=>{r(),S()})),Lv=e((()=>{r(),S()})),Rv=e((()=>{r(),S()})),zv=e((()=>{r(),S()})),Bv=e((()=>{r(),S()})),Vv=e((()=>{r(),S()})),Hv=e((()=>{r(),S()})),Uv=e((()=>{r(),S()})),Wv=e((()=>{r(),S()})),Gv,Kv=e((()=>{r(),S(),w(),Gv=({slot:e,title:r,className:i,width:a=`24`,height:o=`24`,styles:s}={})=>t`
  <svg
    slot=${y(e)}
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
    style=${y(s)}
  >
    ${E(r,()=>n`<title>${r}</title>`)}
    <path
      d="M3 7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 3 6.12 3 7.8 3h8.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V7.8Z"
    />
  </svg>
`})),qv=e((()=>{r(),S()})),Jv=e((()=>{r(),S()})),Yv=e((()=>{r(),S()})),Xv=e((()=>{r(),S()})),Zv=e((()=>{r(),S()})),Qv=e((()=>{r(),S()})),$v=e((()=>{r(),S()})),ey=e((()=>{r(),S()})),ty=e((()=>{r(),S()})),ny=e((()=>{r(),S()})),ry=e((()=>{r(),S()})),iy=e((()=>{r(),S()})),ay=e((()=>{r(),S()})),oy=e((()=>{r(),S()})),sy=e((()=>{r(),S()})),cy=e((()=>{r(),S()})),ly=e((()=>{r(),S()})),uy=e((()=>{r(),S()})),dy=e((()=>{r(),S()})),fy=e((()=>{r(),S()})),py=e((()=>{r(),S()})),my=e((()=>{r(),S()})),hy=e((()=>{r(),S()})),gy=e((()=>{r(),S()})),_y=e((()=>{r(),S()})),vy=e((()=>{r(),S()})),yy=e((()=>{r(),S()})),by=e((()=>{r(),S()})),xy=e((()=>{r(),S()})),Sy=e((()=>{r(),S()})),Cy=e((()=>{r(),S()})),wy=e((()=>{r(),S()})),Ty=e((()=>{r(),S()})),Ey=e((()=>{r(),S()})),Dy=e((()=>{r(),S()})),Oy=e((()=>{r(),S()})),ky=e((()=>{r(),S()})),Ay=e((()=>{r(),S()})),jy=e((()=>{r(),S()})),My=e((()=>{r(),S()})),Ny=e((()=>{r(),S()})),Py=e((()=>{r(),S()})),Fy=e((()=>{r(),S()})),Iy=e((()=>{r(),S()})),Ly=e((()=>{r(),S()})),Ry=e((()=>{r(),S()})),zy=e((()=>{r(),S()})),By=e((()=>{r(),S()})),Vy=e((()=>{r(),S()})),Hy=e((()=>{r(),S()})),Uy=e((()=>{r(),S()})),Wy=e((()=>{r(),S()})),Gy=e((()=>{r(),S()})),Ky=e((()=>{r(),S()})),qy=e((()=>{r(),S()})),Jy=e((()=>{r(),S()})),Yy=e((()=>{r(),S()})),Xy=e((()=>{r(),S()})),Zy=e((()=>{r(),S()})),Qy=e((()=>{r(),S()})),$y=e((()=>{r(),S()})),eb=e((()=>{r(),S()})),tb=e((()=>{r(),S()})),nb=e((()=>{r(),S()})),rb=e((()=>{r(),S()})),ib=e((()=>{r(),S()})),ab=e((()=>{r(),S()})),ob=e((()=>{r(),S()})),sb=e((()=>{r(),S()})),cb=e((()=>{r(),S()})),lb=e((()=>{r(),S()})),ub=e((()=>{r(),S()})),db=e((()=>{r(),S()})),fb=e((()=>{r(),S()})),pb=e((()=>{r(),S()})),mb=e((()=>{r(),S()})),hb=e((()=>{r(),S()})),gb=e((()=>{r(),S()})),_b=e((()=>{r(),S()})),vb=e((()=>{r(),S()})),yb=e((()=>{r(),S()})),bb=e((()=>{r(),S()})),xb=e((()=>{r(),S()})),Sb=e((()=>{r(),S()})),Cb=e((()=>{r(),S()})),wb=e((()=>{r(),S()})),Tb=e((()=>{r(),S()})),Eb=e((()=>{r(),S()})),Db=e((()=>{r(),S()})),Ob=e((()=>{r(),S()})),kb=e((()=>{r(),S()})),Ab=e((()=>{r(),S()})),jb=e((()=>{r(),S()})),Mb=e((()=>{r(),S()})),Nb=e((()=>{r(),S()})),Pb=e((()=>{r(),S()})),Fb=e((()=>{r(),S()})),Ib=e((()=>{r(),S()})),Lb=e((()=>{r(),S()})),Rb=e((()=>{r(),S()})),zb=e((()=>{r(),S()})),Bb=e((()=>{r(),S()})),Vb=e((()=>{r(),S()})),Hb=e((()=>{r(),S()})),Ub=e((()=>{r(),S()})),Wb=e((()=>{r(),S()})),Gb=e((()=>{r(),S()})),Kb=e((()=>{r(),S()})),qb=e((()=>{r(),S()})),Jb=e((()=>{r(),S()})),Yb=e((()=>{r(),S()})),Xb=e((()=>{r(),S()})),Zb=e((()=>{r(),S()})),Qb=e((()=>{r(),S()})),$b=e((()=>{r(),S()})),ex=e((()=>{r(),S()})),tx=e((()=>{r(),S()})),nx=e((()=>{r(),S()})),rx=e((()=>{r(),S()})),ix=e((()=>{r(),S()})),ax=e((()=>{r(),S()})),ox=e((()=>{r(),S()})),sx=e((()=>{r(),S()})),cx=e((()=>{r(),S()})),lx=e((()=>{r(),S()})),ux=e((()=>{r(),S()})),dx=e((()=>{r(),S()})),fx=e((()=>{r(),S()})),px=e((()=>{r(),S()})),mx=e((()=>{r(),S()})),hx=e((()=>{r(),S()})),gx=e((()=>{r(),S()})),_x=e((()=>{r(),S()})),vx=e((()=>{r(),S()})),yx=e((()=>{r(),S()})),bx=e((()=>{r(),S()})),xx=e((()=>{r(),S()})),Sx=e((()=>{r(),S()})),Cx=e((()=>{r(),S()})),wx=e((()=>{r(),S()})),Tx=e((()=>{r(),S()})),Ex=e((()=>{r(),S()})),Dx=e((()=>{r(),S()})),Ox=e((()=>{r(),S()})),kx=e((()=>{r(),S()})),Ax=e((()=>{r(),S()})),jx=e((()=>{r(),S()})),Mx=e((()=>{r(),S()})),Nx=e((()=>{r(),S()})),Px=e((()=>{r(),S()})),Fx=e((()=>{r(),S()})),Ix=e((()=>{r(),S()})),Lx=e((()=>{r(),S()})),Rx=e((()=>{r(),S()})),zx=e((()=>{r(),S()})),Bx=e((()=>{r(),S()})),Vx=e((()=>{r(),S()})),Hx=e((()=>{r(),S()})),Ux=e((()=>{r(),S()})),Wx=e((()=>{r(),S()})),Gx=e((()=>{r(),S()})),Kx=e((()=>{r(),S()})),qx=e((()=>{r(),S()})),Jx=e((()=>{r(),S()})),Yx=e((()=>{r(),S()})),Xx=e((()=>{r(),S()})),Zx=e((()=>{r(),S()})),Qx=e((()=>{r(),S()})),$x=e((()=>{r(),S()})),eS=e((()=>{r(),S()})),tS=e((()=>{r(),S()})),nS=e((()=>{r(),S()})),rS=e((()=>{r(),S()})),iS=e((()=>{r(),S()})),aS=e((()=>{he(),ge(),_e(),ve(),ye(),be(),xe(),Se(),Ce(),we(),Te(),Ee(),De(),Oe(),ke(),Ae(),je(),Me(),Ne(),Pe(),Fe(),Ie(),Le(),Re(),ze(),Be(),Ve(),He(),Ue(),We(),Ge(),Ke(),qe(),Je(),Ye(),Xe(),Ze(),Qe(),$e(),et(),tt(),nt(),rt(),it(),at(),ot(),st(),ct(),lt(),ut(),dt(),ft(),pt(),mt(),ht(),gt(),_t(),vt(),yt(),bt(),xt(),St(),Ct(),wt(),Tt(),Et(),Dt(),Ot(),kt(),At(),jt(),Mt(),Nt(),Pt(),Ft(),It(),Lt(),Rt(),zt(),Bt(),Vt(),Ht(),Ut(),Wt(),Gt(),Kt(),qt(),Jt(),Yt(),Xt(),Zt(),Qt(),$t(),en(),tn(),nn(),rn(),an(),on(),sn(),cn(),ln(),un(),dn(),fn(),pn(),mn(),hn(),gn(),_n(),vn(),yn(),bn(),xn(),Sn(),Cn(),wn(),Tn(),En(),Dn(),On(),kn(),An(),jn(),Mn(),Nn(),Pn(),Fn(),In(),Ln(),Rn(),zn(),Bn(),Vn(),Hn(),Un(),Wn(),Gn(),Kn(),qn(),Jn(),Yn(),Xn(),Zn(),Qn(),$n(),er(),tr(),nr(),rr(),ir(),ar(),or(),sr(),cr(),lr(),ur(),dr(),fr(),pr(),mr(),hr(),gr(),_r(),vr(),yr(),br(),xr(),Sr(),Cr(),wr(),Tr(),Er(),Dr(),Or(),kr(),Ar(),jr(),Mr(),Nr(),Pr(),Fr(),Ir(),Lr(),Rr(),zr(),Br(),Vr(),Hr(),Ur(),Wr(),Gr(),Kr(),qr(),Jr(),Yr(),Xr(),Zr(),Qr(),$r(),ei(),ti(),ni(),ri(),ii(),ai(),oi(),si(),ci(),li(),ui(),di(),fi(),pi(),mi(),hi(),gi(),_i(),vi(),yi(),bi(),xi(),Si(),Ci(),wi(),Ti(),Ei(),Di(),Oi(),ki(),Ai(),ji(),Mi(),Ni(),Pi(),Fi(),Ii(),Li(),Ri(),zi(),Bi(),Vi(),Hi(),Ui(),Wi(),Gi(),Ki(),qi(),Ji(),Yi(),Xi(),Zi(),Qi(),$i(),ea(),ta(),na(),ra(),ia(),aa(),oa(),sa(),ca(),la(),ua(),da(),fa(),pa(),ma(),ha(),ga(),_a(),va(),ya(),ba(),xa(),Sa(),Ca(),wa(),Ta(),Ea(),Da(),Oa(),ka(),Aa(),ja(),Ma(),Na(),Pa(),Fa(),Ia(),La(),Ra(),za(),Ba(),Va(),Ha(),Ua(),Wa(),Ga(),Ka(),qa(),Ja(),Ya(),Xa(),Za(),Qa(),$a(),eo(),to(),no(),ro(),io(),ao(),oo(),so(),co(),lo(),uo(),fo(),po(),mo(),ho(),go(),_o(),vo(),yo(),bo(),xo(),So(),Co(),wo(),To(),Eo(),Do(),Oo(),ko(),Ao(),jo(),Mo(),No(),Po(),Fo(),Io(),Lo(),Ro(),zo(),Bo(),Vo(),Ho(),Uo(),Wo(),Go(),Ko(),qo(),Jo(),Yo(),Xo(),Zo(),Qo(),$o(),es(),ts(),ns(),rs(),is(),as(),os(),ss(),cs(),ls(),us(),ds(),fs(),ps(),ms(),hs(),gs(),_s(),vs(),ys(),bs(),xs(),Ss(),Cs(),ws(),Ts(),Es(),Ds(),Os(),ks(),As(),js(),Ms(),Ns(),Ps(),Fs(),Is(),Ls(),Rs(),zs(),Bs(),Vs(),Hs(),Us(),Ws(),Gs(),Ks(),qs(),Js(),Ys(),Xs(),Zs(),Qs(),$s(),ec(),tc(),nc(),rc(),ic(),ac(),oc(),sc(),cc(),lc(),uc(),dc(),fc(),pc(),mc(),hc(),gc(),_c(),vc(),yc(),bc(),xc(),Sc(),Cc(),wc(),Tc(),Ec(),Dc(),Oc(),kc(),Ac(),jc(),Mc(),Nc(),Pc(),Fc(),Ic(),Lc(),Rc(),zc(),Bc(),Vc(),Hc(),Uc(),Wc(),Gc(),Kc(),qc(),Jc(),Yc(),Xc(),Zc(),Qc(),$c(),el(),tl(),nl(),rl(),il(),al(),ol(),sl(),cl(),ll(),ul(),dl(),fl(),pl(),ml(),hl(),gl(),_l(),vl(),yl(),bl(),xl(),Sl(),Cl(),wl(),Tl(),El(),Dl(),Ol(),kl(),Al(),jl(),Ml(),Nl(),Pl(),Fl(),Il(),Ll(),Rl(),zl(),Bl(),Vl(),Hl(),Ul(),Wl(),Gl(),Kl(),ql(),Jl(),Yl(),Xl(),Zl(),Ql(),$l(),eu(),tu(),nu(),ru(),iu(),au(),ou(),su(),cu(),lu(),uu(),du(),fu(),pu(),mu(),hu(),gu(),_u(),vu(),yu(),bu(),xu(),Su(),Cu(),wu(),Tu(),Eu(),Du(),Ou(),ku(),Au(),ju(),Mu(),Nu(),Pu(),Fu(),Iu(),Lu(),Ru(),zu(),Bu(),Vu(),Hu(),Uu(),Wu(),Gu(),Ku(),qu(),Ju(),Yu(),Xu(),Zu(),Qu(),$u(),ed(),td(),nd(),rd(),id(),ad(),od(),sd(),cd(),ld(),ud(),dd(),fd(),pd(),md(),hd(),gd(),_d(),vd(),yd(),bd(),xd(),Sd(),Cd(),wd(),Td(),Ed(),Dd(),Od(),kd(),Ad(),jd(),Md(),Nd(),Pd(),Fd(),Id(),Ld(),Rd(),zd(),Bd(),Vd(),Hd(),Ud(),Wd(),Gd(),Kd(),qd(),Jd(),Yd(),Xd(),Zd(),Qd(),$d(),ef(),tf(),nf(),rf(),af(),of(),sf(),cf(),lf(),uf(),df(),ff(),pf(),mf(),hf(),gf(),_f(),vf(),yf(),bf(),xf(),Sf(),Cf(),wf(),Tf(),Ef(),Df(),Of(),kf(),Af(),jf(),Mf(),Nf(),Pf(),Ff(),If(),Lf(),Rf(),zf(),Bf(),Vf(),Hf(),Uf(),Wf(),Gf(),Kf(),qf(),Jf(),Yf(),Xf(),Zf(),Qf(),$f(),ep(),tp(),np(),rp(),ip(),ap(),sp(),cp(),lp(),up(),dp(),fp(),pp(),mp(),hp(),gp(),_p(),vp(),yp(),bp(),xp(),Sp(),Cp(),wp(),Tp(),Ep(),Dp(),Op(),kp(),Ap(),jp(),Mp(),Np(),Pp(),Fp(),Ip(),Lp(),Rp(),zp(),Bp(),Vp(),Hp(),Up(),Wp(),Gp(),Kp(),qp(),Jp(),Yp(),Xp(),Zp(),Qp(),$p(),em(),tm(),nm(),rm(),im(),am(),om(),sm(),cm(),lm(),um(),dm(),fm(),pm(),mm(),hm(),gm(),_m(),vm(),ym(),bm(),xm(),Sm(),Cm(),wm(),Tm(),Em(),Dm(),Om(),km(),Am(),jm(),Mm(),Nm(),Pm(),Fm(),Im(),Lm(),Rm(),zm(),Bm(),Vm(),Hm(),Um(),Wm(),Gm(),Km(),qm(),Jm(),Ym(),Xm(),Zm(),Qm(),$m(),eh(),th(),nh(),rh(),ih(),ah(),oh(),sh(),ch(),lh(),uh(),dh(),fh(),ph(),mh(),hh(),gh(),_h(),vh(),yh(),bh(),xh(),Sh(),Ch(),wh(),Th(),Eh(),Dh(),Oh(),kh(),Ah(),jh(),Mh(),Nh(),Ph(),Fh(),Ih(),Lh(),Rh(),zh(),Bh(),Vh(),Hh(),Uh(),Wh(),Gh(),Kh(),qh(),Jh(),Yh(),Xh(),Zh(),Qh(),$h(),eg(),tg(),ng(),rg(),ig(),ag(),og(),sg(),cg(),lg(),ug(),dg(),fg(),pg(),mg(),hg(),gg(),_g(),vg(),yg(),bg(),xg(),Sg(),Cg(),wg(),Tg(),Eg(),Dg(),Og(),kg(),Ag(),jg(),Mg(),Ng(),Pg(),Fg(),Ig(),Lg(),Rg(),zg(),Bg(),Vg(),Hg(),Ug(),Wg(),Gg(),Kg(),qg(),Jg(),Yg(),Xg(),Zg(),Qg(),$g(),e_(),t_(),n_(),r_(),i_(),a_(),o_(),s_(),c_(),l_(),u_(),d_(),f_(),p_(),m_(),h_(),g_(),__(),v_(),y_(),b_(),x_(),S_(),C_(),w_(),T_(),E_(),D_(),O_(),k_(),A_(),j_(),M_(),N_(),P_(),F_(),I_(),L_(),R_(),z_(),B_(),V_(),H_(),U_(),W_(),G_(),K_(),q_(),J_(),Y_(),X_(),Z_(),Q_(),$_(),ev(),tv(),nv(),rv(),iv(),av(),ov(),sv(),cv(),lv(),uv(),dv(),fv(),pv(),mv(),hv(),gv(),_v(),vv(),yv(),bv(),xv(),Sv(),Cv(),wv(),Tv(),Ev(),Dv(),Ov(),kv(),Av(),jv(),Mv(),Nv(),Pv(),Fv(),Iv(),Lv(),Rv(),zv(),Bv(),Vv(),Hv(),Uv(),Wv(),Kv(),qv(),Jv(),Yv(),Xv(),Zv(),Qv(),$v(),ey(),ty(),ny(),ry(),iy(),ay(),oy(),sy(),cy(),ly(),uy(),dy(),fy(),py(),my(),hy(),gy(),_y(),vy(),yy(),by(),xy(),Sy(),Cy(),wy(),Ty(),Ey(),Dy(),Oy(),ky(),Ay(),jy(),My(),Ny(),Py(),Fy(),Iy(),Ly(),Ry(),zy(),By(),Vy(),Hy(),Uy(),Wy(),Gy(),Ky(),qy(),Jy(),Yy(),Xy(),Zy(),Qy(),$y(),eb(),tb(),nb(),rb(),ib(),ab(),ob(),sb(),cb(),lb(),ub(),db(),fb(),pb(),mb(),hb(),gb(),_b(),vb(),yb(),bb(),xb(),Sb(),Cb(),wb(),Tb(),Eb(),Db(),Ob(),kb(),Ab(),jb(),Mb(),Nb(),Pb(),Fb(),Ib(),Lb(),Rb(),zb(),Bb(),Vb(),Hb(),Ub(),Wb(),Gb(),Kb(),qb(),Jb(),Yb(),Xb(),Zb(),Qb(),$b(),ex(),tx(),nx(),rx(),ix(),ax(),ox(),sx(),cx(),lx(),ux(),dx(),fx(),px(),mx(),hx(),gx(),_x(),vx(),yx(),bx(),xx(),Sx(),Cx(),wx(),Tx(),Ex(),Dx(),Ox(),kx(),Ax(),jx(),Mx(),Nx(),Px(),Fx(),Ix(),Lx(),Rx(),zx(),Bx(),Vx(),Hx(),Ux(),Wx(),Gx(),Kx(),qx(),Jx(),Yx(),Xx(),Zx(),Qx(),$x(),eS(),tS(),nS(),rS(),iS()})),K,oS,sS,cS,lS=e((()=>{me(),aS(),ee(),r(),K=e=>e.button===0&&!e.altKey&&!e.ctrlKey&&!e.metaKey&&!e.shiftKey,oS=e=>e?.dispatchEvent(new Event(`select`,{bubbles:!0})),sS=e=>typeof e==`string`&&e?e:T(`More`)||`More`,cS=({items:e,overflows:n,active:r,label:i,onItemClick:a})=>t`
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
			<span>${sS(i)}</span>
			<span class="chevron" aria-hidden="true"
				>${W({width:`16`,height:`16`})}</span
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
`})),q,J,uS,dS,fS,pS,mS,hS,gS,_S=e((()=>{lS(),q=e=>!e.hasAttribute(`disabled`)&&!e.hasAttribute(`hidden`)&&!e.hasAttribute(`overflowing`),J=(e,t,n)=>{e.getAttribute(t)!==n&&(n==null?e.removeAttribute(t):e.setAttribute(t,n))},uS=(e,t)=>{[`active`,`disabled`,`hidden`,`href`,`name`,`badge`,`title`,`role`].forEach(n=>J(t,n,e.getAttribute(n))),J(t,`aria-selected`,t.hasAttribute(`active`)?`true`:`false`),J(t,`aria-disabled`,e.hasAttribute(`disabled`)?`true`:null),t.setAttribute(`tabindex`,`-1`)},dS=e=>{e.forEach(([,e])=>{q(e)&&e.setAttribute(`tabindex`,`0`)})},fS=e=>{let t=e.find(e=>e.hasAttribute(`active`));return t==null?null:q(t)?t:[...e.slice(0,e.indexOf(t))].reverse().find(q)??null},pS=e=>{let t=e.cloneNode(!0);return[`variant`,`size`,`compact-width`,`overflowing`,`style`].forEach(e=>t.removeAttribute(e)),t.setAttribute(`menu`,``),t},mS=(e,t)=>{t.innerHTML!==e.innerHTML&&t.replaceChildren(...[...e.childNodes].map(e=>e.cloneNode(!0))),uS(e,t)},hS=e=>new MouseEvent(`click`,e),gS=e=>t=>{let n=t.composedPath(),r=e.find(([,e])=>n.includes(e));if(!r)return;let[i,a]=r;t.stopPropagation(),i.dispatchEvent(hS(t))||t.preventDefault(),K(t)&&oS(a)}})),vS,yS=e((()=>{g(),vS=v`
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
`})),Y,bS,xS,SS,CS,wS,TS,ES,DS=e((()=>{b(),se(),de(),g(),fe(),lS(),_S(),yS(),Y=`cosmoz-tab-next`,bS={attributes:!0,attributeFilter:[`active`,`disabled`,`hidden`,`badge`,`href`,`name`,`title`],childList:!0,subtree:!0,characterData:!0},xS=(e,t)=>{let[n,r]=c(0);return l(()=>{let t=new MutationObserver(()=>r(e=>e+1));return e().forEach(e=>t.observe(e,bS)),()=>t.disconnect()},[t]),n},SS=(e,t,n)=>{let r=xS(e,n),i=_();return i.current??=new Map,u(()=>{let n=i.current,r=e(),a=r.filter(e=>t.has(e)).map(e=>{let t=n.get(e)??pS(e);return n.set(e,t),mS(e,t),[e,t]}),o=new Set(a.map(([e])=>e));n.forEach((e,t)=>{o.has(t)||n.delete(t)}),dS(a);let s=fS(r);return r.forEach(e=>J(e,`tabindex`,e===s?`0`:`-1`)),a},[t,n,r])},CS=e=>(e.getAttribute(`role`)===`radiogroup`&&(e.removeAttribute(`role`),e.dispatchEvent(new CustomEvent(`deprecation-warning`,{detail:{message:`role=radiogroup is no longer supported: a value picker belongs in cosmoz-toggle-group (@neovici/cosmoz-input); the items are tabs.`}}))),{variant:e.getAttribute(`variant`),size:e.getAttribute(`size`),"compact-width":e.hasAttribute(`compact-width`)?``:null,role:`tab`,"aria-selected":e=>e.hasAttribute(`active`)?`true`:`false`,"aria-disabled":e=>e.hasAttribute(`disabled`)?`true`:null}),wS=new Set([`ArrowLeft`,`ArrowRight`,`Home`,`End`]),TS=(e,t,n)=>{let r=e.filter(q);if(r.length===0)return null;if(n===`Home`)return r[0];if(n===`End`)return r[r.length-1];let i=r.indexOf(t);return i<0?null:r[Math.max(0,Math.min(r.length-1,i+(n===`ArrowLeft`?-1:1)))]},ES=e=>{e.getAttribute(`variant`)||e.setAttribute(`variant`,`brand`);let[n,r]=c(0),[i,a]=c(()=>new Set),o=_(),s=f(()=>(o.current??[]).filter(e=>e.matches(Y)),[]),l=()=>r(e=>e+1),u=SS(s,i,n);return m(()=>{let t=e=>{if(!wS.has(e.key))return;let t=s(),n=e.target;if(!t.includes(n))return;e.preventDefault();let r=TS(t,n,e.key);!r||r===n||r.focus()};return e.addEventListener(`keydown`,t),()=>e.removeEventListener(`keydown`,t)},[]),t`
		<slot name="tabs"></slot>
		<div class="group" role="tablist">
			<slot
				${j(o)}
				${M(CS(e))}
				${I({is:e=>e.matches(Y),onOverflow:a})}
				@slotchange=${l}
			></slot>
		</div>
		${cS({items:u.map(([,e])=>e),overflows:u.length>0,active:u.some(([e])=>e.hasAttribute(`active`)&&!e.hidden),label:e.moreLabel,onItemClick:gS(u)})}
		<slot name="stats"></slot>
	`},customElements.define(`cosmoz-tabs-next`,p(ES,{observedAttributes:[`variant`,`size`,`compact-width`,`more-label`],styleSheets:[C,vS]}))})),X,OS,Z,Q,kS=e((()=>{g(),X=()=>new URL(location.hash.replace(/^#!?/iu,``).replace(`%23`,`#`),location.origin),OS=e=>e?()=>new URLSearchParams(X().hash.replace(`#`,``)).get(e):void 0,Z=(e,t)=>{if(!e)return;let n=X(),r=new URLSearchParams(n.hash.replace(`#`,``));return t==null?r.delete(e):r.set(e,t),`#!`+Object.assign(n,{hash:r}).href.replace(location.origin,``)},Q=e=>{let t=u(()=>OS(e),[e]),[n,r]=c(t),i=_(n);return l(()=>void(i.current=n),[n]),l(()=>{if(t==null)return;let e=()=>{let e=t();i.current!==e&&r(e)};return e(),window.addEventListener(`popstate`,e),window.addEventListener(`hashchange`,e),()=>{window.removeEventListener(`popstate`,e),window.removeEventListener(`hashchange`,e)}},[t]),[n,u(()=>e?t=>{r(t),history.pushState({},``,Z(e,t))}:r,[e])]}})),$,AS,jS,MS,NS,PS=e((()=>{kS(),k(),g(),S(),w(),$=e=>!e.hidden&&!e.disabled,AS=e=>e.slice().sort((e,t)=>Number(t.fallback??!1)-Number(e.fallback??!1)).find($),jS=(e,t)=>{let n=t?e.find(e=>e.name===t):void 0;return n&&$(n)?n:AS(e)},MS=(e,{hashParam:t,onActivate:n}={})=>{let[r,i]=Q(t),a=_([]),o=u(()=>jS(e,r??void 0),[e,r]);return{tabs:e,active:o,activated:u(()=>{let e=o?.name;return a.current=[...(a.current??[]).filter(t=>t!==e),e].filter(Boolean)},[o]),activate:i,onActivate:f(e=>{let t=e;if(t.button!==0||t.metaKey||t.ctrlKey)return;let r=e.currentTarget?.getAttribute(`name`);r&&(n?.(r),i(r))},[i,n])}},NS=({tabs:e,active:n,onActivate:r,className:i,variant:a,size:o,compactWidth:s})=>e.map(e=>{let c=O(e.title),l=e.content??c,u=e.badge||void 0;return t`<cosmoz-tab-next
			name=${e.name}
			class=${y(i)}
			variant=${y(a)}
			size=${y(o)}
			?compact-width=${y(s)}
			title=${y(c)}
			?active=${n?.name===e.name}
			?hidden=${e.hidden}
			?disabled=${e.disabled}
			badge=${y(u)}
			@click=${r}
			>${E(e.icon,e=>e({slot:`icon`}))}${l}</cosmoz-tab-next
		>`})})),FS=e((()=>{oe(),DS(),PS()}));export{Z as a,Gv as c,R as d,L as f,kS as i,op as l,k as m,NS as n,Q as o,te as p,MS as r,aS as s,FS as t,G as u};