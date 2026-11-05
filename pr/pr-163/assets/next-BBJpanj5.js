import{t as e}from"./chunk-BvrOYcoh.js";import{a as t,c as n,o as r,r as i,t as a}from"./lit-html-BZ3vufxv.js";import{a as o,d as s,f as c,g as l,h as u,i as d,m as f,n as p,p as m,r as h,t as g,u as _,y as v}from"./haunted-CkSbX4Z4.js";import{a as y,c as b,i as x,l as S,n as C,o as w,r as T,s as E,t as ee,u as te}from"./i18next-DUFGUfRA.js";var ne,D,O=e((()=>{ne=e=>e,D=(e,...t)=>typeof e==`function`?e(...t):e})),re,ie=e((()=>{g(),re=v`
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
`})),ae,oe,se=e((()=>{E(),g(),r(),T(),S(),ie(),ae=class extends HTMLElement{connectedCallback(){this.hasAttribute(`role`)||this.setAttribute(`role`,`tab`),this.hasAttribute(`tabindex`)||this.setAttribute(`tabindex`,`-1`)}},oe=e=>{let{active:n,badge:r,href:i}=e,o=_();return m(()=>{e.setAttribute(`aria-selected`,n?`true`:`false`)},[n]),m(()=>{let t=()=>(o.current??e).click(),n=n=>{n.target!==e||e.hasAttribute(`disabled`)||(n.key===`Enter`&&!n.repeat&&(n.preventDefault(),t()),n.key===` `&&n.preventDefault())},r=n=>{n.target!==e||e.hasAttribute(`disabled`)||n.key===` `&&t()};return e.addEventListener(`keydown`,n),e.addEventListener(`keyup`,r),()=>{e.removeEventListener(`keydown`,n),e.removeEventListener(`keyup`,r)}},[]),t`
		<a ${te(o)} part="link" href=${x(i)}>
			<slot id="iconSlot" name="icon"></slot>
			<slot id="contentSlot"></slot>
			${r?t`<span class="badge" part="badge">${r}</span>`:a}
		</a>
	`},customElements.define(`cosmoz-tab-next`,p(oe,{baseElement:ae,observedAttributes:[`active`,`badge`,`href`],styleSheets:[b,re]}))})),k,A,ce=e((()=>{r(),d(),k=class extends h{_slot;_ref;#e=()=>{!this._slot||!this._ref||(this._ref.current=this._slot.assignedElements({flatten:!0}))};#t=()=>this.#e();update(e,[t]){this._ref=t;let n=e.element;this._slot!==n&&(this._slot?.removeEventListener(`slotchange`,this.#t),this._slot=n,n.addEventListener(`slotchange`,this.#t)),this.#e()}disconnected(){this._slot?.removeEventListener(`slotchange`,this.#t),this._slot=void 0}render(e){return i}},A=o(k)})),le,ue,de,j,fe=e((()=>{r(),d(),O(),le=(e,t,n)=>{n==null?e.removeAttribute(t):e.setAttribute(t,n)},ue=(e,t)=>{for(let[n,r]of Object.entries(e))le(t,n,D(r,t))},de=class extends h{_slot;_attrs;#e=()=>{if(!this._slot||!this._attrs)return;let e=this._slot.assignedElements({flatten:!0});for(let t of e)ue(this._attrs,t)};#t=()=>this.#e();render(e){return i}update(e,[t]){this._attrs=t;let n=e.element;return this._slot!==n&&(this._slot?.removeEventListener(`slotchange`,this.#t),this._slot=n,n.addEventListener(`slotchange`,this.#t)),this.#e(),i}disconnected(){this._slot?.removeEventListener(`slotchange`,this.#t),this._slot=void 0}},j=o(de)})),M,N,P,F,pe=e((()=>{r(),d(),M=(e,t)=>e.assignedElements({flatten:!0}).filter(t),N=(e,t)=>e!=null&&t!=null&&e.size===t.size&&[...t].every(t=>e.has(t)),P=class extends h{_slot;_is;_onOverflow;#e=new Map;#t;#n;#r=e=>{e.forEach(e=>{let t=e.target;this.#e.set(t,e.boundingClientRect.height>0&&e.intersectionRect.height===0)}),this.#a()};#i=e=>{this.#n?.unobserve(e),this.#n?.observe(e)};#a=()=>{if(!this._slot||!this._is)return;let e=M(this._slot,this._is);e.forEach(e=>{let t=this.#e.get(e)===!0;t!==e.hasAttribute(`overflowing`)&&(t?e.setAttribute(`overflowing`,``):e.removeAttribute(`overflowing`))}),this.#e.forEach((t,n)=>{e.includes(n)||(this.#e.delete(n),this.#n?.unobserve(n),n.hasAttribute(`overflowing`)&&n.removeAttribute(`overflowing`))});let t=new Set(e.filter(e=>this.#e.get(e)===!0));N(this.#t,t)||(this.#t=t,this._onOverflow?.(t))};#o=()=>this.#s();#s=()=>{if(!(!this.#n||!this._slot||!this._is)){for(let e of M(this._slot,this._is))this.#i(e);this.#a()}};render(e){return i}update(e,[t]){this._is=t.is,this._onOverflow=t.onOverflow;let n=e.element;return this._slot!==n&&(this._slot?.removeEventListener(`slotchange`,this.#o),this.#n?.disconnect(),this.#n=void 0,this._slot=n,n.addEventListener(`slotchange`,this.#o)),this.#n??=new IntersectionObserver(this.#r,{root:this._slot,threshold:[0,1]}),this.#s(),i}disconnected(){this._slot?.removeEventListener(`slotchange`,this.#o),this._slot=void 0,this.#n?.disconnect(),this.#n=void 0,this.#e.clear(),this.#t=void 0}},F=o(P)})),I,L=e((()=>{g(),I=e=>{let t=u(()=>({}),[]);return u(()=>Object.assign(t,e),[t,...Object.values(e)])}})),R,z,me=e((()=>{L(),g(),R=e=>{for(let t of e.current??[]){let e=t.matches(`[autofocus]`)?t:t.querySelector(`[autofocus]`);if(e instanceof HTMLElement){e.focus();break}}},z=e=>{let{placement:t=`bottom span-right`,disabled:n,passthrough:r,openOnHover:i,openOnFocus:a}=e,o=_(),[c,u]=s(`opened`,!1),d=_(),p=_(),m=I({disabled:n,openOnHover:i}),h=f(()=>{let e=d.current?.[0];return e instanceof HTMLElement?e:void 0},[]),g=f(()=>{m.disabled||(u(!0),o.current?.showPopover?.())},[]),v=f(()=>{u(!1),o.current?.hidePopover?.()},[]),y=f(()=>{o.current?.matches(`:popover-open`)?v():g()},[]),b=f(()=>{clearTimeout(m.closeTimeout)},[]),x=f(e=>{m.disabled||e.target===h()&&(b(),g())},[]),S=f(()=>{m.disabled||(b(),g())},[]),C=f(()=>{clearTimeout(m.closeTimeout),m.closeTimeout=setTimeout(()=>{let t=o.current;m.openOnHover&&(e.matches(`:hover`)||t?.matches(`:hover`))||e.matches(`:focus-within`)||t?.matches(`:focus-within`)||v()},100)},[]),w=f(()=>{let t=document.activeElement;for(;t?.shadowRoot;)t=t.shadowRoot.activeElement;if(!(t==null||t===document.body||t.offsetParent==null))return;let n=h();n&&(e.removeEventListener(`focusin`,x),n.focus(),e.addEventListener(`focusin`,x))},[]),T=f(t=>{let n=t.newState===`open`;u(n),n?R(p):w(),e.dispatchEvent(new ToggleEvent(`dropdown-toggle`,{newState:t.newState,oldState:t.oldState,composed:!0}))},[]);return l(()=>{let e=o.current;e&&(c?e.showPopover?.():e.hidePopover?.())},[c]),l(()=>{e.toggleAttribute(`opened`,!!c)},[c]),l(()=>{if(!(!a||n))return e.addEventListener(`focusin`,x),e.addEventListener(`focusout`,C),()=>{e.removeEventListener(`focusin`,x),e.removeEventListener(`focusout`,C)}},[a,n]),l(()=>{if(!(!i||n))return e.addEventListener(`pointerenter`,S),e.addEventListener(`pointerleave`,C),()=>{e.removeEventListener(`pointerenter`,S),e.removeEventListener(`pointerleave`,C)}},[i,n]),{placement:t,disabled:n,passthrough:r,opened:c,triggers:d,content:p,popoverRef:o,handleClick:a?g:y,onToggle:T,close:v,scheduleClose:C,cancelClose:b}}})),B,V,H,he=e((()=>{ce(),fe(),g(),r(),S(),me(),B=v`
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
`,V=({placement:e,disabled:n,passthrough:r,opened:i,triggers:a,content:o,popoverRef:s,handleClick:c,onToggle:l,close:u,scheduleClose:d,cancelClose:f})=>t`
		<slot
			name="button"
			${A(a)}
			${j({"aria-expanded":r?null:String(i),disabled:n&&!r?``:null})}
			@click=${c}
		></slot>
		${n&&r?t`<slot></slot>`:t`<div
					popover
					style="position-area: ${e}"
					@toggle=${l}
					@select=${u}
					@focusout=${d}
					@focusin=${f}
					${te(e=>e&&(s.current=e))}
				>
					<slot ${A(o)}></slot>
				</div>`}
	`,H=e=>V(z(e)),customElements.define(`cosmoz-dropdown-next`,p(H,{styleSheets:[B],observedAttributes:[`placement`,`disabled`,`passthrough`,`open-on-hover`,`open-on-focus`],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})),ge=e((()=>{r(),T()})),_e=e((()=>{r(),T()})),ve=e((()=>{r(),T()})),ye=e((()=>{r(),T()})),be=e((()=>{r(),T()})),xe=e((()=>{r(),T()})),Se=e((()=>{r(),T()})),Ce=e((()=>{r(),T()})),we=e((()=>{r(),T()})),Te=e((()=>{r(),T()})),Ee=e((()=>{r(),T()})),De=e((()=>{r(),T()})),Oe=e((()=>{r(),T()})),ke=e((()=>{r(),T()})),Ae=e((()=>{r(),T()})),je=e((()=>{r(),T()})),Me=e((()=>{r(),T()})),Ne=e((()=>{r(),T()})),Pe=e((()=>{r(),T()})),Fe=e((()=>{r(),T()})),Ie=e((()=>{r(),T()})),Le=e((()=>{r(),T()})),Re=e((()=>{r(),T()})),ze=e((()=>{r(),T()})),Be=e((()=>{r(),T()})),Ve=e((()=>{r(),T()})),He=e((()=>{r(),T()})),Ue=e((()=>{r(),T()})),We=e((()=>{r(),T()})),Ge=e((()=>{r(),T()})),Ke=e((()=>{r(),T()})),qe=e((()=>{r(),T()})),Je=e((()=>{r(),T()})),Ye=e((()=>{r(),T()})),Xe=e((()=>{r(),T()})),Ze=e((()=>{r(),T()})),Qe=e((()=>{r(),T()})),$e=e((()=>{r(),T()})),et=e((()=>{r(),T()})),tt=e((()=>{r(),T()})),nt=e((()=>{r(),T()})),rt=e((()=>{r(),T()})),it=e((()=>{r(),T()})),at=e((()=>{r(),T()})),ot=e((()=>{r(),T()})),st=e((()=>{r(),T()})),ct=e((()=>{r(),T()})),lt=e((()=>{r(),T()})),ut=e((()=>{r(),T()})),dt=e((()=>{r(),T()})),ft=e((()=>{r(),T()})),pt=e((()=>{r(),T()})),mt=e((()=>{r(),T()})),ht=e((()=>{r(),T()})),gt=e((()=>{r(),T()})),_t=e((()=>{r(),T()})),vt=e((()=>{r(),T()})),yt=e((()=>{r(),T()})),bt=e((()=>{r(),T()})),xt=e((()=>{r(),T()})),St=e((()=>{r(),T()})),Ct=e((()=>{r(),T()})),wt=e((()=>{r(),T()})),Tt=e((()=>{r(),T()})),Et=e((()=>{r(),T()})),Dt=e((()=>{r(),T()})),Ot=e((()=>{r(),T()})),kt=e((()=>{r(),T()})),At=e((()=>{r(),T()})),jt=e((()=>{r(),T()})),Mt=e((()=>{r(),T()})),Nt=e((()=>{r(),T()})),Pt=e((()=>{r(),T()})),Ft=e((()=>{r(),T()})),It=e((()=>{r(),T()})),Lt=e((()=>{r(),T()})),Rt=e((()=>{r(),T()})),zt=e((()=>{r(),T()})),Bt=e((()=>{r(),T()})),Vt=e((()=>{r(),T()})),Ht=e((()=>{r(),T()})),Ut=e((()=>{r(),T()})),Wt=e((()=>{r(),T()})),Gt=e((()=>{r(),T()})),Kt=e((()=>{r(),T()})),qt=e((()=>{r(),T()})),Jt=e((()=>{r(),T()})),Yt=e((()=>{r(),T()})),Xt=e((()=>{r(),T()})),Zt=e((()=>{r(),T()})),Qt=e((()=>{r(),T()})),$t=e((()=>{r(),T()})),en=e((()=>{r(),T()})),tn=e((()=>{r(),T()})),nn=e((()=>{r(),T()})),rn=e((()=>{r(),T()})),an=e((()=>{r(),T()})),on=e((()=>{r(),T()})),sn=e((()=>{r(),T()})),cn=e((()=>{r(),T()})),ln=e((()=>{r(),T()})),un=e((()=>{r(),T()})),dn=e((()=>{r(),T()})),fn=e((()=>{r(),T()})),pn=e((()=>{r(),T()})),mn=e((()=>{r(),T()})),hn=e((()=>{r(),T()})),gn=e((()=>{r(),T()})),_n=e((()=>{r(),T()})),vn=e((()=>{r(),T()})),yn=e((()=>{r(),T()})),bn=e((()=>{r(),T()})),xn=e((()=>{r(),T()})),Sn=e((()=>{r(),T()})),Cn=e((()=>{r(),T()})),wn=e((()=>{r(),T()})),Tn=e((()=>{r(),T()})),En=e((()=>{r(),T()})),Dn=e((()=>{r(),T()})),On=e((()=>{r(),T()})),kn=e((()=>{r(),T()})),An=e((()=>{r(),T()})),jn=e((()=>{r(),T()})),Mn=e((()=>{r(),T()})),Nn=e((()=>{r(),T()})),Pn=e((()=>{r(),T()})),Fn=e((()=>{r(),T()})),In=e((()=>{r(),T()})),Ln=e((()=>{r(),T()})),Rn=e((()=>{r(),T()})),zn=e((()=>{r(),T()})),Bn=e((()=>{r(),T()})),Vn=e((()=>{r(),T()})),Hn=e((()=>{r(),T()})),Un=e((()=>{r(),T()})),Wn=e((()=>{r(),T()})),Gn=e((()=>{r(),T()})),Kn=e((()=>{r(),T()})),qn=e((()=>{r(),T()})),Jn=e((()=>{r(),T()})),Yn=e((()=>{r(),T()})),Xn=e((()=>{r(),T()})),Zn=e((()=>{r(),T()})),Qn=e((()=>{r(),T()})),$n=e((()=>{r(),T()})),er=e((()=>{r(),T()})),tr=e((()=>{r(),T()})),nr=e((()=>{r(),T()})),rr=e((()=>{r(),T()})),ir=e((()=>{r(),T()})),ar=e((()=>{r(),T()})),or=e((()=>{r(),T()})),sr=e((()=>{r(),T()})),cr=e((()=>{r(),T()})),lr=e((()=>{r(),T()})),ur=e((()=>{r(),T()})),dr=e((()=>{r(),T()})),fr=e((()=>{r(),T()})),pr=e((()=>{r(),T()})),mr=e((()=>{r(),T()})),hr=e((()=>{r(),T()})),gr=e((()=>{r(),T()})),_r=e((()=>{r(),T()})),vr=e((()=>{r(),T()})),yr=e((()=>{r(),T()})),br=e((()=>{r(),T()})),xr=e((()=>{r(),T()})),Sr=e((()=>{r(),T()})),Cr=e((()=>{r(),T()})),wr=e((()=>{r(),T()})),Tr=e((()=>{r(),T()})),Er=e((()=>{r(),T()})),Dr=e((()=>{r(),T()})),Or=e((()=>{r(),T()})),kr=e((()=>{r(),T()})),Ar=e((()=>{r(),T()})),jr=e((()=>{r(),T()})),Mr=e((()=>{r(),T()})),Nr=e((()=>{r(),T()})),Pr=e((()=>{r(),T()})),Fr=e((()=>{r(),T()})),Ir=e((()=>{r(),T()})),Lr=e((()=>{r(),T()})),Rr=e((()=>{r(),T()})),zr=e((()=>{r(),T()})),Br=e((()=>{r(),T()})),Vr=e((()=>{r(),T()})),Hr=e((()=>{r(),T()})),Ur=e((()=>{r(),T()})),Wr=e((()=>{r(),T()})),Gr=e((()=>{r(),T()})),Kr=e((()=>{r(),T()})),qr=e((()=>{r(),T()})),Jr=e((()=>{r(),T()})),Yr=e((()=>{r(),T()})),Xr=e((()=>{r(),T()})),Zr=e((()=>{r(),T()})),Qr=e((()=>{r(),T()})),$r=e((()=>{r(),T()})),ei=e((()=>{r(),T()})),ti=e((()=>{r(),T()})),ni=e((()=>{r(),T()})),ri=e((()=>{r(),T()})),ii=e((()=>{r(),T()})),ai=e((()=>{r(),T()})),oi=e((()=>{r(),T()})),si=e((()=>{r(),T()})),ci=e((()=>{r(),T()})),li=e((()=>{r(),T()})),ui=e((()=>{r(),T()})),di=e((()=>{r(),T()})),fi=e((()=>{r(),T()})),pi=e((()=>{r(),T()})),mi=e((()=>{r(),T()})),hi=e((()=>{r(),T()})),gi=e((()=>{r(),T()})),_i=e((()=>{r(),T()})),vi=e((()=>{r(),T()})),yi=e((()=>{r(),T()})),bi=e((()=>{r(),T()})),xi=e((()=>{r(),T()})),Si=e((()=>{r(),T()})),Ci=e((()=>{r(),T()})),wi=e((()=>{r(),T()})),Ti=e((()=>{r(),T()})),Ei=e((()=>{r(),T()})),Di=e((()=>{r(),T()})),Oi=e((()=>{r(),T()})),ki=e((()=>{r(),T()})),U,Ai=e((()=>{r(),T(),y(),U=({slot:e,title:r,className:i,width:a=`24`,height:o=`24`,styles:s}={})=>t`
  <svg
    slot=${x(e)}
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
    style=${x(s)}
  >
    ${w(r,()=>n`<title>${r}</title>`)}
    <path d="m6 9 6 6 6-6" />
  </svg>
`})),ji=e((()=>{r(),T()})),Mi=e((()=>{r(),T()})),Ni=e((()=>{r(),T()})),Pi=e((()=>{r(),T()})),Fi=e((()=>{r(),T()})),Ii=e((()=>{r(),T()})),Li=e((()=>{r(),T()})),Ri=e((()=>{r(),T()})),zi=e((()=>{r(),T()})),Bi=e((()=>{r(),T()})),Vi=e((()=>{r(),T()})),Hi=e((()=>{r(),T()})),Ui=e((()=>{r(),T()})),Wi=e((()=>{r(),T()})),Gi=e((()=>{r(),T()})),Ki=e((()=>{r(),T()})),qi=e((()=>{r(),T()})),Ji=e((()=>{r(),T()})),Yi=e((()=>{r(),T()})),Xi=e((()=>{r(),T()})),Zi=e((()=>{r(),T()})),Qi=e((()=>{r(),T()})),$i=e((()=>{r(),T()})),ea=e((()=>{r(),T()})),ta=e((()=>{r(),T()})),na=e((()=>{r(),T()})),ra=e((()=>{r(),T()})),ia=e((()=>{r(),T()})),aa=e((()=>{r(),T()})),oa=e((()=>{r(),T()})),sa=e((()=>{r(),T()})),ca=e((()=>{r(),T()})),la=e((()=>{r(),T()})),ua=e((()=>{r(),T()})),da=e((()=>{r(),T()})),fa=e((()=>{r(),T()})),pa=e((()=>{r(),T()})),ma=e((()=>{r(),T()})),ha=e((()=>{r(),T()})),ga=e((()=>{r(),T()})),_a=e((()=>{r(),T()})),va=e((()=>{r(),T()})),ya=e((()=>{r(),T()})),ba=e((()=>{r(),T()})),xa=e((()=>{r(),T()})),Sa=e((()=>{r(),T()})),Ca=e((()=>{r(),T()})),wa=e((()=>{r(),T()})),Ta=e((()=>{r(),T()})),Ea=e((()=>{r(),T()})),Da=e((()=>{r(),T()})),Oa=e((()=>{r(),T()})),ka=e((()=>{r(),T()})),Aa=e((()=>{r(),T()})),ja=e((()=>{r(),T()})),Ma=e((()=>{r(),T()})),Na=e((()=>{r(),T()})),Pa=e((()=>{r(),T()})),Fa=e((()=>{r(),T()})),Ia=e((()=>{r(),T()})),La=e((()=>{r(),T()})),Ra=e((()=>{r(),T()})),za=e((()=>{r(),T()})),Ba=e((()=>{r(),T()})),Va=e((()=>{r(),T()})),Ha=e((()=>{r(),T()})),Ua=e((()=>{r(),T()})),Wa=e((()=>{r(),T()})),Ga=e((()=>{r(),T()})),Ka=e((()=>{r(),T()})),qa=e((()=>{r(),T()})),Ja=e((()=>{r(),T()})),W,Ya=e((()=>{r(),T(),y(),W=({slot:e,title:r,className:i,width:a=`24`,height:o=`24`,styles:s}={})=>t`
  <svg
    slot=${x(e)}
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
    style=${x(s)}
  >
    ${w(r,()=>n`<title>${r}</title>`)}
    <path
      d="M12 3v18M7.8 3h8.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 3 6.12 3 7.8 3Z"
    />
  </svg>
`})),Xa=e((()=>{r(),T()})),Za=e((()=>{r(),T()})),Qa=e((()=>{r(),T()})),$a=e((()=>{r(),T()})),eo=e((()=>{r(),T()})),to=e((()=>{r(),T()})),no=e((()=>{r(),T()})),ro=e((()=>{r(),T()})),io=e((()=>{r(),T()})),ao=e((()=>{r(),T()})),oo=e((()=>{r(),T()})),so=e((()=>{r(),T()})),co=e((()=>{r(),T()})),lo=e((()=>{r(),T()})),uo=e((()=>{r(),T()})),fo=e((()=>{r(),T()})),po=e((()=>{r(),T()})),mo=e((()=>{r(),T()})),ho=e((()=>{r(),T()})),go=e((()=>{r(),T()})),_o=e((()=>{r(),T()})),vo=e((()=>{r(),T()})),yo=e((()=>{r(),T()})),bo=e((()=>{r(),T()})),xo=e((()=>{r(),T()})),So=e((()=>{r(),T()})),Co=e((()=>{r(),T()})),wo=e((()=>{r(),T()})),To=e((()=>{r(),T()})),Eo=e((()=>{r(),T()})),Do=e((()=>{r(),T()})),Oo=e((()=>{r(),T()})),ko=e((()=>{r(),T()})),Ao=e((()=>{r(),T()})),jo=e((()=>{r(),T()})),Mo=e((()=>{r(),T()})),No=e((()=>{r(),T()})),Po=e((()=>{r(),T()})),Fo=e((()=>{r(),T()})),Io=e((()=>{r(),T()})),Lo=e((()=>{r(),T()})),Ro=e((()=>{r(),T()})),zo=e((()=>{r(),T()})),Bo=e((()=>{r(),T()})),Vo=e((()=>{r(),T()})),Ho=e((()=>{r(),T()})),Uo=e((()=>{r(),T()})),Wo=e((()=>{r(),T()})),Go=e((()=>{r(),T()})),Ko=e((()=>{r(),T()})),qo=e((()=>{r(),T()})),Jo=e((()=>{r(),T()})),Yo=e((()=>{r(),T()})),Xo=e((()=>{r(),T()})),Zo=e((()=>{r(),T()})),Qo=e((()=>{r(),T()})),$o=e((()=>{r(),T()})),es=e((()=>{r(),T()})),ts=e((()=>{r(),T()})),ns=e((()=>{r(),T()})),rs=e((()=>{r(),T()})),is=e((()=>{r(),T()})),as=e((()=>{r(),T()})),os=e((()=>{r(),T()})),ss=e((()=>{r(),T()})),cs=e((()=>{r(),T()})),ls=e((()=>{r(),T()})),us=e((()=>{r(),T()})),ds=e((()=>{r(),T()})),fs=e((()=>{r(),T()})),ps=e((()=>{r(),T()})),ms=e((()=>{r(),T()})),hs=e((()=>{r(),T()})),gs=e((()=>{r(),T()})),_s=e((()=>{r(),T()})),vs=e((()=>{r(),T()})),ys=e((()=>{r(),T()})),bs=e((()=>{r(),T()})),xs=e((()=>{r(),T()})),Ss=e((()=>{r(),T()})),Cs=e((()=>{r(),T()})),ws=e((()=>{r(),T()})),Ts=e((()=>{r(),T()})),Es=e((()=>{r(),T()})),Ds=e((()=>{r(),T()})),Os=e((()=>{r(),T()})),ks=e((()=>{r(),T()})),As=e((()=>{r(),T()})),js=e((()=>{r(),T()})),Ms=e((()=>{r(),T()})),Ns=e((()=>{r(),T()})),Ps=e((()=>{r(),T()})),Fs=e((()=>{r(),T()})),Is=e((()=>{r(),T()})),Ls=e((()=>{r(),T()})),Rs=e((()=>{r(),T()})),zs=e((()=>{r(),T()})),Bs=e((()=>{r(),T()})),Vs=e((()=>{r(),T()})),Hs=e((()=>{r(),T()})),Us=e((()=>{r(),T()})),Ws=e((()=>{r(),T()})),Gs=e((()=>{r(),T()})),Ks=e((()=>{r(),T()})),qs=e((()=>{r(),T()})),Js=e((()=>{r(),T()})),Ys=e((()=>{r(),T()})),Xs=e((()=>{r(),T()})),Zs=e((()=>{r(),T()})),Qs=e((()=>{r(),T()})),$s=e((()=>{r(),T()})),ec=e((()=>{r(),T()})),tc=e((()=>{r(),T()})),nc=e((()=>{r(),T()})),rc=e((()=>{r(),T()})),ic=e((()=>{r(),T()})),ac=e((()=>{r(),T()})),oc=e((()=>{r(),T()})),sc=e((()=>{r(),T()})),cc=e((()=>{r(),T()})),lc=e((()=>{r(),T()})),uc=e((()=>{r(),T()})),dc=e((()=>{r(),T()})),fc=e((()=>{r(),T()})),pc=e((()=>{r(),T()})),mc=e((()=>{r(),T()})),hc=e((()=>{r(),T()})),gc=e((()=>{r(),T()})),_c=e((()=>{r(),T()})),vc=e((()=>{r(),T()})),yc=e((()=>{r(),T()})),bc=e((()=>{r(),T()})),xc=e((()=>{r(),T()})),Sc=e((()=>{r(),T()})),Cc=e((()=>{r(),T()})),wc=e((()=>{r(),T()})),Tc=e((()=>{r(),T()})),Ec=e((()=>{r(),T()})),Dc=e((()=>{r(),T()})),Oc=e((()=>{r(),T()})),kc=e((()=>{r(),T()})),Ac=e((()=>{r(),T()})),jc=e((()=>{r(),T()})),Mc=e((()=>{r(),T()})),Nc=e((()=>{r(),T()})),Pc=e((()=>{r(),T()})),Fc=e((()=>{r(),T()})),G,Ic=e((()=>{r(),T(),y(),G=({slot:e,title:r,className:i,width:a=`24`,height:o=`24`,styles:s}={})=>t`
  <svg
    slot=${x(e)}
    class=${`file-02-icon ${i??``}`}
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
    style=${x(s)}
  >
    ${w(r,()=>n`<title>${r}</title>`)}
    <path
      d="M14 11H8m2 4H8m8-8H8m12-.2v10.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C17.72 22 16.88 22 15.2 22H8.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C4 19.72 4 18.88 4 17.2V6.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C6.28 2 7.12 2 8.8 2h6.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C20 4.28 20 5.12 20 6.8Z"
    />
  </svg>
`})),Lc=e((()=>{r(),T()})),Rc=e((()=>{r(),T()})),zc=e((()=>{r(),T()})),Bc=e((()=>{r(),T()})),Vc=e((()=>{r(),T()})),Hc=e((()=>{r(),T()})),Uc=e((()=>{r(),T()})),Wc=e((()=>{r(),T()})),Gc=e((()=>{r(),T()})),Kc=e((()=>{r(),T()})),qc=e((()=>{r(),T()})),Jc=e((()=>{r(),T()})),Yc=e((()=>{r(),T()})),Xc=e((()=>{r(),T()})),Zc=e((()=>{r(),T()})),Qc=e((()=>{r(),T()})),$c=e((()=>{r(),T()})),el=e((()=>{r(),T()})),tl=e((()=>{r(),T()})),nl=e((()=>{r(),T()})),rl=e((()=>{r(),T()})),il=e((()=>{r(),T()})),al=e((()=>{r(),T()})),ol=e((()=>{r(),T()})),sl=e((()=>{r(),T()})),cl=e((()=>{r(),T()})),ll=e((()=>{r(),T()})),ul=e((()=>{r(),T()})),dl=e((()=>{r(),T()})),fl=e((()=>{r(),T()})),pl=e((()=>{r(),T()})),ml=e((()=>{r(),T()})),hl=e((()=>{r(),T()})),gl=e((()=>{r(),T()})),_l=e((()=>{r(),T()})),vl=e((()=>{r(),T()})),yl=e((()=>{r(),T()})),bl=e((()=>{r(),T()})),xl=e((()=>{r(),T()})),Sl=e((()=>{r(),T()})),Cl=e((()=>{r(),T()})),wl=e((()=>{r(),T()})),Tl=e((()=>{r(),T()})),El=e((()=>{r(),T()})),Dl=e((()=>{r(),T()})),Ol=e((()=>{r(),T()})),kl=e((()=>{r(),T()})),Al=e((()=>{r(),T()})),jl=e((()=>{r(),T()})),Ml=e((()=>{r(),T()})),Nl=e((()=>{r(),T()})),Pl=e((()=>{r(),T()})),Fl=e((()=>{r(),T()})),Il=e((()=>{r(),T()})),Ll=e((()=>{r(),T()})),Rl=e((()=>{r(),T()})),zl=e((()=>{r(),T()})),Bl=e((()=>{r(),T()})),Vl=e((()=>{r(),T()})),Hl=e((()=>{r(),T()})),Ul=e((()=>{r(),T()})),Wl=e((()=>{r(),T()})),Gl=e((()=>{r(),T()})),Kl=e((()=>{r(),T()})),ql=e((()=>{r(),T()})),Jl=e((()=>{r(),T()})),Yl=e((()=>{r(),T()})),Xl=e((()=>{r(),T()})),Zl=e((()=>{r(),T()})),Ql=e((()=>{r(),T()})),$l=e((()=>{r(),T()})),eu=e((()=>{r(),T()})),tu=e((()=>{r(),T()})),nu=e((()=>{r(),T()})),ru=e((()=>{r(),T()})),iu=e((()=>{r(),T()})),au=e((()=>{r(),T()})),ou=e((()=>{r(),T()})),su=e((()=>{r(),T()})),cu=e((()=>{r(),T()})),lu=e((()=>{r(),T()})),uu=e((()=>{r(),T()})),du=e((()=>{r(),T()})),fu=e((()=>{r(),T()})),pu=e((()=>{r(),T()})),mu=e((()=>{r(),T()})),hu=e((()=>{r(),T()})),gu=e((()=>{r(),T()})),_u=e((()=>{r(),T()})),vu=e((()=>{r(),T()})),yu=e((()=>{r(),T()})),bu=e((()=>{r(),T()})),xu=e((()=>{r(),T()})),Su=e((()=>{r(),T()})),Cu=e((()=>{r(),T()})),wu=e((()=>{r(),T()})),Tu=e((()=>{r(),T()})),Eu=e((()=>{r(),T()})),Du=e((()=>{r(),T()})),Ou=e((()=>{r(),T()})),ku=e((()=>{r(),T()})),Au=e((()=>{r(),T()})),ju=e((()=>{r(),T()})),Mu=e((()=>{r(),T()})),Nu=e((()=>{r(),T()})),Pu=e((()=>{r(),T()})),Fu=e((()=>{r(),T()})),Iu=e((()=>{r(),T()})),Lu=e((()=>{r(),T()})),Ru=e((()=>{r(),T()})),zu=e((()=>{r(),T()})),Bu=e((()=>{r(),T()})),Vu=e((()=>{r(),T()})),Hu=e((()=>{r(),T()})),Uu=e((()=>{r(),T()})),Wu=e((()=>{r(),T()})),Gu=e((()=>{r(),T()})),Ku=e((()=>{r(),T()})),qu=e((()=>{r(),T()})),Ju=e((()=>{r(),T()})),Yu=e((()=>{r(),T()})),Xu=e((()=>{r(),T()})),Zu=e((()=>{r(),T()})),Qu=e((()=>{r(),T()})),$u=e((()=>{r(),T()})),ed=e((()=>{r(),T()})),td=e((()=>{r(),T()})),nd=e((()=>{r(),T()})),rd=e((()=>{r(),T()})),id=e((()=>{r(),T()})),ad=e((()=>{r(),T()})),od=e((()=>{r(),T()})),sd=e((()=>{r(),T()})),cd=e((()=>{r(),T()})),ld=e((()=>{r(),T()})),ud=e((()=>{r(),T()})),dd=e((()=>{r(),T()})),fd=e((()=>{r(),T()})),pd=e((()=>{r(),T()})),md=e((()=>{r(),T()})),hd=e((()=>{r(),T()})),gd=e((()=>{r(),T()})),_d=e((()=>{r(),T()})),vd=e((()=>{r(),T()})),yd=e((()=>{r(),T()})),bd=e((()=>{r(),T()})),xd=e((()=>{r(),T()})),Sd=e((()=>{r(),T()})),Cd=e((()=>{r(),T()})),wd=e((()=>{r(),T()})),Td=e((()=>{r(),T()})),Ed=e((()=>{r(),T()})),Dd=e((()=>{r(),T()})),Od=e((()=>{r(),T()})),kd=e((()=>{r(),T()})),Ad=e((()=>{r(),T()})),jd=e((()=>{r(),T()})),Md=e((()=>{r(),T()})),Nd=e((()=>{r(),T()})),Pd=e((()=>{r(),T()})),Fd=e((()=>{r(),T()})),Id=e((()=>{r(),T()})),Ld=e((()=>{r(),T()})),Rd=e((()=>{r(),T()})),zd=e((()=>{r(),T()})),Bd=e((()=>{r(),T()})),Vd=e((()=>{r(),T()})),Hd=e((()=>{r(),T()})),Ud=e((()=>{r(),T()})),Wd=e((()=>{r(),T()})),Gd=e((()=>{r(),T()})),Kd=e((()=>{r(),T()})),qd=e((()=>{r(),T()})),Jd=e((()=>{r(),T()})),Yd=e((()=>{r(),T()})),Xd=e((()=>{r(),T()})),Zd=e((()=>{r(),T()})),Qd=e((()=>{r(),T()})),$d=e((()=>{r(),T()})),ef=e((()=>{r(),T()})),tf=e((()=>{r(),T()})),nf=e((()=>{r(),T()})),rf=e((()=>{r(),T()})),af=e((()=>{r(),T()})),of=e((()=>{r(),T()})),sf=e((()=>{r(),T()})),cf=e((()=>{r(),T()})),lf=e((()=>{r(),T()})),uf=e((()=>{r(),T()})),df=e((()=>{r(),T()})),ff=e((()=>{r(),T()})),pf=e((()=>{r(),T()})),mf=e((()=>{r(),T()})),hf=e((()=>{r(),T()})),gf=e((()=>{r(),T()})),_f=e((()=>{r(),T()})),vf=e((()=>{r(),T()})),yf=e((()=>{r(),T()})),bf=e((()=>{r(),T()})),xf=e((()=>{r(),T()})),Sf=e((()=>{r(),T()})),Cf=e((()=>{r(),T()})),wf=e((()=>{r(),T()})),Tf=e((()=>{r(),T()})),Ef=e((()=>{r(),T()})),Df=e((()=>{r(),T()})),Of=e((()=>{r(),T()})),kf=e((()=>{r(),T()})),Af=e((()=>{r(),T()})),jf=e((()=>{r(),T()})),Mf=e((()=>{r(),T()})),Nf=e((()=>{r(),T()})),Pf=e((()=>{r(),T()})),Ff=e((()=>{r(),T()})),If=e((()=>{r(),T()})),Lf=e((()=>{r(),T()})),Rf=e((()=>{r(),T()})),zf=e((()=>{r(),T()})),Bf=e((()=>{r(),T()})),Vf=e((()=>{r(),T()})),Hf=e((()=>{r(),T()})),Uf=e((()=>{r(),T()})),Wf=e((()=>{r(),T()})),Gf=e((()=>{r(),T()})),Kf=e((()=>{r(),T()})),qf=e((()=>{r(),T()})),Jf=e((()=>{r(),T()})),Yf=e((()=>{r(),T()})),Xf=e((()=>{r(),T()})),Zf=e((()=>{r(),T()})),Qf=e((()=>{r(),T()})),$f=e((()=>{r(),T()})),ep=e((()=>{r(),T()})),tp=e((()=>{r(),T()})),np=e((()=>{r(),T()})),rp=e((()=>{r(),T()})),ip=e((()=>{r(),T()})),ap=e((()=>{r(),T()})),op=e((()=>{r(),T()})),sp,cp=e((()=>{r(),T(),y(),sp=({slot:e,title:r,className:i,width:a=`24`,height:o=`24`,styles:s}={})=>t`
  <svg
    slot=${x(e)}
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
    style=${x(s)}
  >
    ${w(r,()=>n`<title>${r}</title>`)}
    <path
      d="M21 12H9m12-6H9m12 12H9m-4-6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0-6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
    />
  </svg>
`})),lp=e((()=>{r(),T()})),up=e((()=>{r(),T()})),dp=e((()=>{r(),T()})),fp=e((()=>{r(),T()})),pp=e((()=>{r(),T()})),mp=e((()=>{r(),T()})),hp=e((()=>{r(),T()})),gp=e((()=>{r(),T()})),_p=e((()=>{r(),T()})),vp=e((()=>{r(),T()})),yp=e((()=>{r(),T()})),bp=e((()=>{r(),T()})),xp=e((()=>{r(),T()})),Sp=e((()=>{r(),T()})),Cp=e((()=>{r(),T()})),wp=e((()=>{r(),T()})),Tp=e((()=>{r(),T()})),Ep=e((()=>{r(),T()})),Dp=e((()=>{r(),T()})),Op=e((()=>{r(),T()})),kp=e((()=>{r(),T()})),Ap=e((()=>{r(),T()})),jp=e((()=>{r(),T()})),Mp=e((()=>{r(),T()})),Np=e((()=>{r(),T()})),Pp=e((()=>{r(),T()})),Fp=e((()=>{r(),T()})),Ip=e((()=>{r(),T()})),Lp=e((()=>{r(),T()})),Rp=e((()=>{r(),T()})),zp=e((()=>{r(),T()})),Bp=e((()=>{r(),T()})),Vp=e((()=>{r(),T()})),Hp=e((()=>{r(),T()})),Up=e((()=>{r(),T()})),Wp=e((()=>{r(),T()})),Gp=e((()=>{r(),T()})),Kp=e((()=>{r(),T()})),qp=e((()=>{r(),T()})),Jp=e((()=>{r(),T()})),Yp=e((()=>{r(),T()})),Xp=e((()=>{r(),T()})),Zp=e((()=>{r(),T()})),Qp=e((()=>{r(),T()})),$p=e((()=>{r(),T()})),em=e((()=>{r(),T()})),tm=e((()=>{r(),T()})),nm=e((()=>{r(),T()})),rm=e((()=>{r(),T()})),im=e((()=>{r(),T()})),am=e((()=>{r(),T()})),om=e((()=>{r(),T()})),sm=e((()=>{r(),T()})),cm=e((()=>{r(),T()})),lm=e((()=>{r(),T()})),um=e((()=>{r(),T()})),dm=e((()=>{r(),T()})),fm=e((()=>{r(),T()})),pm=e((()=>{r(),T()})),mm=e((()=>{r(),T()})),hm=e((()=>{r(),T()})),gm=e((()=>{r(),T()})),_m=e((()=>{r(),T()})),vm=e((()=>{r(),T()})),ym=e((()=>{r(),T()})),bm=e((()=>{r(),T()})),xm=e((()=>{r(),T()})),Sm=e((()=>{r(),T()})),Cm=e((()=>{r(),T()})),wm=e((()=>{r(),T()})),Tm=e((()=>{r(),T()})),Em=e((()=>{r(),T()})),Dm=e((()=>{r(),T()})),Om=e((()=>{r(),T()})),km=e((()=>{r(),T()})),Am=e((()=>{r(),T()})),jm=e((()=>{r(),T()})),Mm=e((()=>{r(),T()})),Nm=e((()=>{r(),T()})),Pm=e((()=>{r(),T()})),Fm=e((()=>{r(),T()})),Im=e((()=>{r(),T()})),Lm=e((()=>{r(),T()})),Rm=e((()=>{r(),T()})),zm=e((()=>{r(),T()})),Bm=e((()=>{r(),T()})),Vm=e((()=>{r(),T()})),Hm=e((()=>{r(),T()})),Um=e((()=>{r(),T()})),Wm=e((()=>{r(),T()})),Gm=e((()=>{r(),T()})),Km=e((()=>{r(),T()})),qm=e((()=>{r(),T()})),Jm=e((()=>{r(),T()})),Ym=e((()=>{r(),T()})),Xm=e((()=>{r(),T()})),Zm=e((()=>{r(),T()})),Qm=e((()=>{r(),T()})),$m=e((()=>{r(),T()})),eh=e((()=>{r(),T()})),th=e((()=>{r(),T()})),nh=e((()=>{r(),T()})),rh=e((()=>{r(),T()})),ih=e((()=>{r(),T()})),ah=e((()=>{r(),T()})),oh=e((()=>{r(),T()})),sh=e((()=>{r(),T()})),ch=e((()=>{r(),T()})),lh=e((()=>{r(),T()})),uh=e((()=>{r(),T()})),dh=e((()=>{r(),T()})),fh=e((()=>{r(),T()})),ph=e((()=>{r(),T()})),mh=e((()=>{r(),T()})),hh=e((()=>{r(),T()})),gh=e((()=>{r(),T()})),_h=e((()=>{r(),T()})),vh=e((()=>{r(),T()})),yh=e((()=>{r(),T()})),bh=e((()=>{r(),T()})),xh=e((()=>{r(),T()})),Sh=e((()=>{r(),T()})),Ch=e((()=>{r(),T()})),wh=e((()=>{r(),T()})),Th=e((()=>{r(),T()})),Eh=e((()=>{r(),T()})),Dh=e((()=>{r(),T()})),Oh=e((()=>{r(),T()})),kh=e((()=>{r(),T()})),Ah=e((()=>{r(),T()})),jh=e((()=>{r(),T()})),Mh=e((()=>{r(),T()})),Nh=e((()=>{r(),T()})),Ph=e((()=>{r(),T()})),Fh=e((()=>{r(),T()})),Ih=e((()=>{r(),T()})),Lh=e((()=>{r(),T()})),Rh=e((()=>{r(),T()})),zh=e((()=>{r(),T()})),Bh=e((()=>{r(),T()})),Vh=e((()=>{r(),T()})),Hh=e((()=>{r(),T()})),Uh=e((()=>{r(),T()})),Wh=e((()=>{r(),T()})),Gh=e((()=>{r(),T()})),Kh=e((()=>{r(),T()})),qh=e((()=>{r(),T()})),Jh=e((()=>{r(),T()})),Yh=e((()=>{r(),T()})),Xh=e((()=>{r(),T()})),Zh=e((()=>{r(),T()})),Qh=e((()=>{r(),T()})),$h=e((()=>{r(),T()})),eg=e((()=>{r(),T()})),tg=e((()=>{r(),T()})),ng=e((()=>{r(),T()})),rg=e((()=>{r(),T()})),ig=e((()=>{r(),T()})),ag=e((()=>{r(),T()})),og=e((()=>{r(),T()})),sg=e((()=>{r(),T()})),cg=e((()=>{r(),T()})),lg=e((()=>{r(),T()})),ug=e((()=>{r(),T()})),dg=e((()=>{r(),T()})),fg=e((()=>{r(),T()})),pg=e((()=>{r(),T()})),mg=e((()=>{r(),T()})),hg=e((()=>{r(),T()})),gg=e((()=>{r(),T()})),_g=e((()=>{r(),T()})),vg=e((()=>{r(),T()})),yg=e((()=>{r(),T()})),bg=e((()=>{r(),T()})),xg=e((()=>{r(),T()})),Sg=e((()=>{r(),T()})),Cg=e((()=>{r(),T()})),wg=e((()=>{r(),T()})),Tg=e((()=>{r(),T()})),Eg=e((()=>{r(),T()})),Dg=e((()=>{r(),T()})),Og=e((()=>{r(),T()})),kg=e((()=>{r(),T()})),Ag=e((()=>{r(),T()})),jg=e((()=>{r(),T()})),Mg=e((()=>{r(),T()})),Ng=e((()=>{r(),T()})),Pg=e((()=>{r(),T()})),Fg=e((()=>{r(),T()})),Ig=e((()=>{r(),T()})),Lg=e((()=>{r(),T()})),Rg=e((()=>{r(),T()})),zg=e((()=>{r(),T()})),Bg=e((()=>{r(),T()})),Vg=e((()=>{r(),T()})),Hg=e((()=>{r(),T()})),Ug=e((()=>{r(),T()})),Wg=e((()=>{r(),T()})),Gg=e((()=>{r(),T()})),Kg=e((()=>{r(),T()})),qg=e((()=>{r(),T()})),Jg=e((()=>{r(),T()})),Yg=e((()=>{r(),T()})),Xg=e((()=>{r(),T()})),Zg=e((()=>{r(),T()})),Qg=e((()=>{r(),T()})),$g=e((()=>{r(),T()})),e_=e((()=>{r(),T()})),t_=e((()=>{r(),T()})),n_=e((()=>{r(),T()})),r_=e((()=>{r(),T()})),i_=e((()=>{r(),T()})),a_=e((()=>{r(),T()})),o_=e((()=>{r(),T()})),s_=e((()=>{r(),T()})),c_=e((()=>{r(),T()})),l_=e((()=>{r(),T()})),u_=e((()=>{r(),T()})),d_=e((()=>{r(),T()})),f_=e((()=>{r(),T()})),p_=e((()=>{r(),T()})),m_=e((()=>{r(),T()})),h_=e((()=>{r(),T()})),g_=e((()=>{r(),T()})),__=e((()=>{r(),T()})),v_=e((()=>{r(),T()})),y_=e((()=>{r(),T()})),b_=e((()=>{r(),T()})),x_=e((()=>{r(),T()})),S_=e((()=>{r(),T()})),C_=e((()=>{r(),T()})),w_=e((()=>{r(),T()})),T_=e((()=>{r(),T()})),E_=e((()=>{r(),T()})),D_=e((()=>{r(),T()})),O_=e((()=>{r(),T()})),k_=e((()=>{r(),T()})),A_=e((()=>{r(),T()})),j_=e((()=>{r(),T()})),M_=e((()=>{r(),T()})),N_=e((()=>{r(),T()})),P_=e((()=>{r(),T()})),F_=e((()=>{r(),T()})),I_=e((()=>{r(),T()})),L_=e((()=>{r(),T()})),R_=e((()=>{r(),T()})),z_=e((()=>{r(),T()})),B_=e((()=>{r(),T()})),V_=e((()=>{r(),T()})),H_=e((()=>{r(),T()})),U_=e((()=>{r(),T()})),W_=e((()=>{r(),T()})),G_=e((()=>{r(),T()})),K_=e((()=>{r(),T()})),q_=e((()=>{r(),T()})),J_=e((()=>{r(),T()})),Y_=e((()=>{r(),T()})),X_=e((()=>{r(),T()})),Z_=e((()=>{r(),T()})),Q_=e((()=>{r(),T()})),$_=e((()=>{r(),T()})),ev=e((()=>{r(),T()})),tv=e((()=>{r(),T()})),nv=e((()=>{r(),T()})),rv=e((()=>{r(),T()})),iv=e((()=>{r(),T()})),av=e((()=>{r(),T()})),ov=e((()=>{r(),T()})),sv=e((()=>{r(),T()})),cv=e((()=>{r(),T()})),lv=e((()=>{r(),T()})),uv=e((()=>{r(),T()})),dv=e((()=>{r(),T()})),fv=e((()=>{r(),T()})),pv=e((()=>{r(),T()})),mv=e((()=>{r(),T()})),hv=e((()=>{r(),T()})),gv=e((()=>{r(),T()})),_v=e((()=>{r(),T()})),vv=e((()=>{r(),T()})),yv=e((()=>{r(),T()})),bv=e((()=>{r(),T()})),xv=e((()=>{r(),T()})),Sv=e((()=>{r(),T()})),Cv=e((()=>{r(),T()})),wv=e((()=>{r(),T()})),Tv=e((()=>{r(),T()})),Ev=e((()=>{r(),T()})),Dv=e((()=>{r(),T()})),Ov=e((()=>{r(),T()})),kv=e((()=>{r(),T()})),Av=e((()=>{r(),T()})),jv=e((()=>{r(),T()})),Mv=e((()=>{r(),T()})),Nv=e((()=>{r(),T()})),Pv=e((()=>{r(),T()})),Fv=e((()=>{r(),T()})),Iv=e((()=>{r(),T()})),Lv=e((()=>{r(),T()})),Rv=e((()=>{r(),T()})),zv=e((()=>{r(),T()})),Bv=e((()=>{r(),T()})),Vv=e((()=>{r(),T()})),Hv=e((()=>{r(),T()})),Uv=e((()=>{r(),T()})),Wv=e((()=>{r(),T()})),Gv=e((()=>{r(),T()})),Kv=e((()=>{r(),T()})),qv=e((()=>{r(),T()})),Jv=e((()=>{r(),T()})),Yv=e((()=>{r(),T()})),Xv=e((()=>{r(),T()})),Zv=e((()=>{r(),T()})),Qv=e((()=>{r(),T()})),$v=e((()=>{r(),T()})),ey=e((()=>{r(),T()})),ty=e((()=>{r(),T()})),ny=e((()=>{r(),T()})),ry=e((()=>{r(),T()})),iy=e((()=>{r(),T()})),ay=e((()=>{r(),T()})),oy=e((()=>{r(),T()})),sy=e((()=>{r(),T()})),cy=e((()=>{r(),T()})),ly=e((()=>{r(),T()})),uy=e((()=>{r(),T()})),dy=e((()=>{r(),T()})),fy=e((()=>{r(),T()})),py=e((()=>{r(),T()})),my=e((()=>{r(),T()})),hy=e((()=>{r(),T()})),gy=e((()=>{r(),T()})),_y=e((()=>{r(),T()})),vy=e((()=>{r(),T()})),yy=e((()=>{r(),T()})),by=e((()=>{r(),T()})),xy=e((()=>{r(),T()})),Sy=e((()=>{r(),T()})),Cy=e((()=>{r(),T()})),wy=e((()=>{r(),T()})),Ty=e((()=>{r(),T()})),Ey=e((()=>{r(),T()})),Dy=e((()=>{r(),T()})),Oy=e((()=>{r(),T()})),ky=e((()=>{r(),T()})),Ay=e((()=>{r(),T()})),jy=e((()=>{r(),T()})),My=e((()=>{r(),T()})),Ny=e((()=>{r(),T()})),Py=e((()=>{r(),T()})),Fy=e((()=>{r(),T()})),Iy=e((()=>{r(),T()})),Ly=e((()=>{r(),T()})),Ry=e((()=>{r(),T()})),zy=e((()=>{r(),T()})),By=e((()=>{r(),T()})),Vy=e((()=>{r(),T()})),Hy=e((()=>{r(),T()})),Uy=e((()=>{r(),T()})),Wy=e((()=>{r(),T()})),Gy=e((()=>{r(),T()})),Ky=e((()=>{r(),T()})),qy=e((()=>{r(),T()})),Jy=e((()=>{r(),T()})),Yy=e((()=>{r(),T()})),Xy=e((()=>{r(),T()})),Zy=e((()=>{r(),T()})),Qy=e((()=>{r(),T()})),$y=e((()=>{r(),T()})),eb=e((()=>{r(),T()})),tb=e((()=>{r(),T()})),nb=e((()=>{r(),T()})),rb=e((()=>{r(),T()})),ib=e((()=>{r(),T()})),ab=e((()=>{r(),T()})),ob=e((()=>{r(),T()})),sb=e((()=>{r(),T()})),cb=e((()=>{r(),T()})),lb=e((()=>{r(),T()})),ub=e((()=>{r(),T()})),db=e((()=>{r(),T()})),fb=e((()=>{r(),T()})),pb=e((()=>{r(),T()})),mb=e((()=>{r(),T()})),hb=e((()=>{r(),T()})),gb=e((()=>{r(),T()})),_b=e((()=>{r(),T()})),vb=e((()=>{r(),T()})),yb=e((()=>{r(),T()})),bb=e((()=>{r(),T()})),xb=e((()=>{r(),T()})),Sb=e((()=>{r(),T()})),Cb=e((()=>{r(),T()})),wb=e((()=>{r(),T()})),Tb=e((()=>{r(),T()})),Eb=e((()=>{r(),T()})),Db=e((()=>{r(),T()})),Ob=e((()=>{r(),T()})),kb=e((()=>{r(),T()})),Ab=e((()=>{r(),T()})),jb=e((()=>{r(),T()})),Mb=e((()=>{r(),T()})),Nb=e((()=>{r(),T()})),Pb=e((()=>{r(),T()})),Fb=e((()=>{r(),T()})),Ib=e((()=>{r(),T()})),Lb=e((()=>{r(),T()})),Rb=e((()=>{r(),T()})),zb=e((()=>{r(),T()})),Bb=e((()=>{r(),T()})),Vb=e((()=>{r(),T()})),Hb=e((()=>{r(),T()})),Ub=e((()=>{r(),T()})),Wb=e((()=>{r(),T()})),Gb=e((()=>{r(),T()})),Kb=e((()=>{r(),T()})),qb=e((()=>{r(),T()})),Jb=e((()=>{r(),T()})),Yb=e((()=>{r(),T()})),Xb=e((()=>{r(),T()})),Zb=e((()=>{r(),T()})),Qb=e((()=>{r(),T()})),$b=e((()=>{r(),T()})),ex=e((()=>{r(),T()})),tx=e((()=>{r(),T()})),nx=e((()=>{r(),T()})),rx=e((()=>{r(),T()})),ix=e((()=>{r(),T()})),ax=e((()=>{r(),T()})),ox=e((()=>{r(),T()})),sx=e((()=>{r(),T()})),cx=e((()=>{r(),T()})),lx=e((()=>{r(),T()})),ux=e((()=>{r(),T()})),dx=e((()=>{r(),T()})),fx=e((()=>{r(),T()})),px=e((()=>{r(),T()})),mx=e((()=>{r(),T()})),hx=e((()=>{r(),T()})),gx=e((()=>{r(),T()})),_x=e((()=>{r(),T()})),vx=e((()=>{r(),T()})),yx=e((()=>{r(),T()})),bx=e((()=>{r(),T()})),xx=e((()=>{r(),T()})),Sx=e((()=>{r(),T()})),Cx=e((()=>{r(),T()})),wx=e((()=>{r(),T()})),Tx=e((()=>{r(),T()})),Ex=e((()=>{r(),T()})),Dx=e((()=>{r(),T()})),Ox=e((()=>{r(),T()})),kx=e((()=>{r(),T()})),Ax=e((()=>{r(),T()})),jx=e((()=>{r(),T()})),Mx=e((()=>{r(),T()})),Nx=e((()=>{r(),T()})),Px=e((()=>{r(),T()})),Fx=e((()=>{r(),T()})),Ix=e((()=>{r(),T()})),Lx=e((()=>{r(),T()})),Rx=e((()=>{r(),T()})),zx=e((()=>{r(),T()})),Bx=e((()=>{r(),T()})),Vx=e((()=>{r(),T()})),Hx=e((()=>{r(),T()})),Ux=e((()=>{r(),T()})),Wx=e((()=>{r(),T()})),Gx=e((()=>{r(),T()})),Kx=e((()=>{r(),T()})),qx=e((()=>{r(),T()})),Jx=e((()=>{r(),T()})),Yx=e((()=>{r(),T()})),Xx=e((()=>{r(),T()})),Zx=e((()=>{r(),T()})),Qx=e((()=>{r(),T()})),$x=e((()=>{r(),T()})),eS=e((()=>{r(),T()})),tS=e((()=>{r(),T()})),nS=e((()=>{r(),T()})),rS=e((()=>{r(),T()})),iS=e((()=>{r(),T()})),aS=e((()=>{ge(),_e(),ve(),ye(),be(),xe(),Se(),Ce(),we(),Te(),Ee(),De(),Oe(),ke(),Ae(),je(),Me(),Ne(),Pe(),Fe(),Ie(),Le(),Re(),ze(),Be(),Ve(),He(),Ue(),We(),Ge(),Ke(),qe(),Je(),Ye(),Xe(),Ze(),Qe(),$e(),et(),tt(),nt(),rt(),it(),at(),ot(),st(),ct(),lt(),ut(),dt(),ft(),pt(),mt(),ht(),gt(),_t(),vt(),yt(),bt(),xt(),St(),Ct(),wt(),Tt(),Et(),Dt(),Ot(),kt(),At(),jt(),Mt(),Nt(),Pt(),Ft(),It(),Lt(),Rt(),zt(),Bt(),Vt(),Ht(),Ut(),Wt(),Gt(),Kt(),qt(),Jt(),Yt(),Xt(),Zt(),Qt(),$t(),en(),tn(),nn(),rn(),an(),on(),sn(),cn(),ln(),un(),dn(),fn(),pn(),mn(),hn(),gn(),_n(),vn(),yn(),bn(),xn(),Sn(),Cn(),wn(),Tn(),En(),Dn(),On(),kn(),An(),jn(),Mn(),Nn(),Pn(),Fn(),In(),Ln(),Rn(),zn(),Bn(),Vn(),Hn(),Un(),Wn(),Gn(),Kn(),qn(),Jn(),Yn(),Xn(),Zn(),Qn(),$n(),er(),tr(),nr(),rr(),ir(),ar(),or(),sr(),cr(),lr(),ur(),dr(),fr(),pr(),mr(),hr(),gr(),_r(),vr(),yr(),br(),xr(),Sr(),Cr(),wr(),Tr(),Er(),Dr(),Or(),kr(),Ar(),jr(),Mr(),Nr(),Pr(),Fr(),Ir(),Lr(),Rr(),zr(),Br(),Vr(),Hr(),Ur(),Wr(),Gr(),Kr(),qr(),Jr(),Yr(),Xr(),Zr(),Qr(),$r(),ei(),ti(),ni(),ri(),ii(),ai(),oi(),si(),ci(),li(),ui(),di(),fi(),pi(),mi(),hi(),gi(),_i(),vi(),yi(),bi(),xi(),Si(),Ci(),wi(),Ti(),Ei(),Di(),Oi(),ki(),Ai(),ji(),Mi(),Ni(),Pi(),Fi(),Ii(),Li(),Ri(),zi(),Bi(),Vi(),Hi(),Ui(),Wi(),Gi(),Ki(),qi(),Ji(),Yi(),Xi(),Zi(),Qi(),$i(),ea(),ta(),na(),ra(),ia(),aa(),oa(),sa(),ca(),la(),ua(),da(),fa(),pa(),ma(),ha(),ga(),_a(),va(),ya(),ba(),xa(),Sa(),Ca(),wa(),Ta(),Ea(),Da(),Oa(),ka(),Aa(),ja(),Ma(),Na(),Pa(),Fa(),Ia(),La(),Ra(),za(),Ba(),Va(),Ha(),Ua(),Wa(),Ga(),Ka(),qa(),Ja(),Ya(),Xa(),Za(),Qa(),$a(),eo(),to(),no(),ro(),io(),ao(),oo(),so(),co(),lo(),uo(),fo(),po(),mo(),ho(),go(),_o(),vo(),yo(),bo(),xo(),So(),Co(),wo(),To(),Eo(),Do(),Oo(),ko(),Ao(),jo(),Mo(),No(),Po(),Fo(),Io(),Lo(),Ro(),zo(),Bo(),Vo(),Ho(),Uo(),Wo(),Go(),Ko(),qo(),Jo(),Yo(),Xo(),Zo(),Qo(),$o(),es(),ts(),ns(),rs(),is(),as(),os(),ss(),cs(),ls(),us(),ds(),fs(),ps(),ms(),hs(),gs(),_s(),vs(),ys(),bs(),xs(),Ss(),Cs(),ws(),Ts(),Es(),Ds(),Os(),ks(),As(),js(),Ms(),Ns(),Ps(),Fs(),Is(),Ls(),Rs(),zs(),Bs(),Vs(),Hs(),Us(),Ws(),Gs(),Ks(),qs(),Js(),Ys(),Xs(),Zs(),Qs(),$s(),ec(),tc(),nc(),rc(),ic(),ac(),oc(),sc(),cc(),lc(),uc(),dc(),fc(),pc(),mc(),hc(),gc(),_c(),vc(),yc(),bc(),xc(),Sc(),Cc(),wc(),Tc(),Ec(),Dc(),Oc(),kc(),Ac(),jc(),Mc(),Nc(),Pc(),Fc(),Ic(),Lc(),Rc(),zc(),Bc(),Vc(),Hc(),Uc(),Wc(),Gc(),Kc(),qc(),Jc(),Yc(),Xc(),Zc(),Qc(),$c(),el(),tl(),nl(),rl(),il(),al(),ol(),sl(),cl(),ll(),ul(),dl(),fl(),pl(),ml(),hl(),gl(),_l(),vl(),yl(),bl(),xl(),Sl(),Cl(),wl(),Tl(),El(),Dl(),Ol(),kl(),Al(),jl(),Ml(),Nl(),Pl(),Fl(),Il(),Ll(),Rl(),zl(),Bl(),Vl(),Hl(),Ul(),Wl(),Gl(),Kl(),ql(),Jl(),Yl(),Xl(),Zl(),Ql(),$l(),eu(),tu(),nu(),ru(),iu(),au(),ou(),su(),cu(),lu(),uu(),du(),fu(),pu(),mu(),hu(),gu(),_u(),vu(),yu(),bu(),xu(),Su(),Cu(),wu(),Tu(),Eu(),Du(),Ou(),ku(),Au(),ju(),Mu(),Nu(),Pu(),Fu(),Iu(),Lu(),Ru(),zu(),Bu(),Vu(),Hu(),Uu(),Wu(),Gu(),Ku(),qu(),Ju(),Yu(),Xu(),Zu(),Qu(),$u(),ed(),td(),nd(),rd(),id(),ad(),od(),sd(),cd(),ld(),ud(),dd(),fd(),pd(),md(),hd(),gd(),_d(),vd(),yd(),bd(),xd(),Sd(),Cd(),wd(),Td(),Ed(),Dd(),Od(),kd(),Ad(),jd(),Md(),Nd(),Pd(),Fd(),Id(),Ld(),Rd(),zd(),Bd(),Vd(),Hd(),Ud(),Wd(),Gd(),Kd(),qd(),Jd(),Yd(),Xd(),Zd(),Qd(),$d(),ef(),tf(),nf(),rf(),af(),of(),sf(),cf(),lf(),uf(),df(),ff(),pf(),mf(),hf(),gf(),_f(),vf(),yf(),bf(),xf(),Sf(),Cf(),wf(),Tf(),Ef(),Df(),Of(),kf(),Af(),jf(),Mf(),Nf(),Pf(),Ff(),If(),Lf(),Rf(),zf(),Bf(),Vf(),Hf(),Uf(),Wf(),Gf(),Kf(),qf(),Jf(),Yf(),Xf(),Zf(),Qf(),$f(),ep(),tp(),np(),rp(),ip(),ap(),op(),cp(),lp(),up(),dp(),fp(),pp(),mp(),hp(),gp(),_p(),vp(),yp(),bp(),xp(),Sp(),Cp(),wp(),Tp(),Ep(),Dp(),Op(),kp(),Ap(),jp(),Mp(),Np(),Pp(),Fp(),Ip(),Lp(),Rp(),zp(),Bp(),Vp(),Hp(),Up(),Wp(),Gp(),Kp(),qp(),Jp(),Yp(),Xp(),Zp(),Qp(),$p(),em(),tm(),nm(),rm(),im(),am(),om(),sm(),cm(),lm(),um(),dm(),fm(),pm(),mm(),hm(),gm(),_m(),vm(),ym(),bm(),xm(),Sm(),Cm(),wm(),Tm(),Em(),Dm(),Om(),km(),Am(),jm(),Mm(),Nm(),Pm(),Fm(),Im(),Lm(),Rm(),zm(),Bm(),Vm(),Hm(),Um(),Wm(),Gm(),Km(),qm(),Jm(),Ym(),Xm(),Zm(),Qm(),$m(),eh(),th(),nh(),rh(),ih(),ah(),oh(),sh(),ch(),lh(),uh(),dh(),fh(),ph(),mh(),hh(),gh(),_h(),vh(),yh(),bh(),xh(),Sh(),Ch(),wh(),Th(),Eh(),Dh(),Oh(),kh(),Ah(),jh(),Mh(),Nh(),Ph(),Fh(),Ih(),Lh(),Rh(),zh(),Bh(),Vh(),Hh(),Uh(),Wh(),Gh(),Kh(),qh(),Jh(),Yh(),Xh(),Zh(),Qh(),$h(),eg(),tg(),ng(),rg(),ig(),ag(),og(),sg(),cg(),lg(),ug(),dg(),fg(),pg(),mg(),hg(),gg(),_g(),vg(),yg(),bg(),xg(),Sg(),Cg(),wg(),Tg(),Eg(),Dg(),Og(),kg(),Ag(),jg(),Mg(),Ng(),Pg(),Fg(),Ig(),Lg(),Rg(),zg(),Bg(),Vg(),Hg(),Ug(),Wg(),Gg(),Kg(),qg(),Jg(),Yg(),Xg(),Zg(),Qg(),$g(),e_(),t_(),n_(),r_(),i_(),a_(),o_(),s_(),c_(),l_(),u_(),d_(),f_(),p_(),m_(),h_(),g_(),__(),v_(),y_(),b_(),x_(),S_(),C_(),w_(),T_(),E_(),D_(),O_(),k_(),A_(),j_(),M_(),N_(),P_(),F_(),I_(),L_(),R_(),z_(),B_(),V_(),H_(),U_(),W_(),G_(),K_(),q_(),J_(),Y_(),X_(),Z_(),Q_(),$_(),ev(),tv(),nv(),rv(),iv(),av(),ov(),sv(),cv(),lv(),uv(),dv(),fv(),pv(),mv(),hv(),gv(),_v(),vv(),yv(),bv(),xv(),Sv(),Cv(),wv(),Tv(),Ev(),Dv(),Ov(),kv(),Av(),jv(),Mv(),Nv(),Pv(),Fv(),Iv(),Lv(),Rv(),zv(),Bv(),Vv(),Hv(),Uv(),Wv(),Gv(),Kv(),qv(),Jv(),Yv(),Xv(),Zv(),Qv(),$v(),ey(),ty(),ny(),ry(),iy(),ay(),oy(),sy(),cy(),ly(),uy(),dy(),fy(),py(),my(),hy(),gy(),_y(),vy(),yy(),by(),xy(),Sy(),Cy(),wy(),Ty(),Ey(),Dy(),Oy(),ky(),Ay(),jy(),My(),Ny(),Py(),Fy(),Iy(),Ly(),Ry(),zy(),By(),Vy(),Hy(),Uy(),Wy(),Gy(),Ky(),qy(),Jy(),Yy(),Xy(),Zy(),Qy(),$y(),eb(),tb(),nb(),rb(),ib(),ab(),ob(),sb(),cb(),lb(),ub(),db(),fb(),pb(),mb(),hb(),gb(),_b(),vb(),yb(),bb(),xb(),Sb(),Cb(),wb(),Tb(),Eb(),Db(),Ob(),kb(),Ab(),jb(),Mb(),Nb(),Pb(),Fb(),Ib(),Lb(),Rb(),zb(),Bb(),Vb(),Hb(),Ub(),Wb(),Gb(),Kb(),qb(),Jb(),Yb(),Xb(),Zb(),Qb(),$b(),ex(),tx(),nx(),rx(),ix(),ax(),ox(),sx(),cx(),lx(),ux(),dx(),fx(),px(),mx(),hx(),gx(),_x(),vx(),yx(),bx(),xx(),Sx(),Cx(),wx(),Tx(),Ex(),Dx(),Ox(),kx(),Ax(),jx(),Mx(),Nx(),Px(),Fx(),Ix(),Lx(),Rx(),zx(),Bx(),Vx(),Hx(),Ux(),Wx(),Gx(),Kx(),qx(),Jx(),Yx(),Xx(),Zx(),Qx(),$x(),eS(),tS(),nS(),rS(),iS()})),K,oS,sS,cS,lS=e((()=>{he(),aS(),ee(),r(),K=e=>e.button===0&&!e.altKey&&!e.ctrlKey&&!e.metaKey&&!e.shiftKey,oS=e=>e?.dispatchEvent(new Event(`select`,{bubbles:!0})),sS=e=>typeof e==`string`&&e?e:C(`More`)||`More`,cS=({items:e,overflows:n,active:r,label:i,onItemClick:a})=>t`
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
				>${U({width:`16`,height:`16`})}</span
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
`})),Y,bS,xS,SS,CS,wS,TS,ES,DS=e((()=>{E(),ce(),fe(),g(),pe(),lS(),_S(),yS(),Y=`cosmoz-tab-next`,bS={attributes:!0,attributeFilter:[`active`,`disabled`,`hidden`,`badge`,`href`,`name`,`title`],childList:!0,subtree:!0,characterData:!0},xS=(e,t)=>{let[n,r]=c(0);return l(()=>{let t=new MutationObserver(()=>r(e=>e+1));return e().forEach(e=>t.observe(e,bS)),()=>t.disconnect()},[t]),n},SS=(e,t,n)=>{let r=xS(e,n),i=_();return i.current??=new Map,u(()=>{let n=i.current,r=e(),a=r.filter(e=>t.has(e)).map(e=>{let t=n.get(e)??pS(e);return n.set(e,t),mS(e,t),[e,t]}),o=new Set(a.map(([e])=>e));n.forEach((e,t)=>{o.has(t)||n.delete(t)}),dS(a);let s=fS(r);return r.forEach(e=>J(e,`tabindex`,e===s?`0`:`-1`)),a},[t,n,r])},CS=e=>(e.getAttribute(`role`)===`radiogroup`&&(e.removeAttribute(`role`),e.dispatchEvent(new CustomEvent(`deprecation-warning`,{detail:{message:`role=radiogroup is no longer supported: a value picker belongs in cosmoz-toggle-group (@neovici/cosmoz-input); the items are tabs.`}}))),{variant:e.getAttribute(`variant`),size:e.getAttribute(`size`),"compact-width":e.hasAttribute(`compact-width`)?``:null,role:`tab`,"aria-selected":e=>e.hasAttribute(`active`)?`true`:`false`,"aria-disabled":e=>e.hasAttribute(`disabled`)?`true`:null}),wS=new Set([`ArrowLeft`,`ArrowRight`,`Home`,`End`]),TS=(e,t,n)=>{let r=e.filter(q);if(r.length===0)return null;if(n===`Home`)return r[0];if(n===`End`)return r[r.length-1];let i=r.indexOf(t);return i<0?null:r[Math.max(0,Math.min(r.length-1,i+(n===`ArrowLeft`?-1:1)))]},ES=e=>{e.getAttribute(`variant`)||e.setAttribute(`variant`,`brand`);let[n,r]=c(0),[i,a]=c(()=>new Set),o=_(),s=f(()=>(o.current??[]).filter(e=>e.matches(Y)),[]),l=()=>r(e=>e+1),u=SS(s,i,n);return m(()=>{let t=e=>{if(!wS.has(e.key))return;let t=s(),n=e.target;if(!t.includes(n))return;e.preventDefault();let r=TS(t,n,e.key);!r||r===n||r.focus()};return e.addEventListener(`keydown`,t),()=>e.removeEventListener(`keydown`,t)},[]),t`
		<slot name="tabs"></slot>
		<div class="group" role="tablist">
			<slot
				${A(o)}
				${j(CS(e))}
				${F({is:e=>e.matches(Y),onOverflow:a})}
				@slotchange=${l}
			></slot>
		</div>
		${cS({items:u.map(([,e])=>e),overflows:u.length>0,active:u.some(([e])=>e.hasAttribute(`active`)&&!e.hidden),label:e.moreLabel,onItemClick:gS(u)})}
		<slot name="stats"></slot>
	`},customElements.define(`cosmoz-tabs-next`,p(ES,{observedAttributes:[`variant`,`size`,`compact-width`,`more-label`],styleSheets:[b,vS]}))})),X,OS,Z,Q,kS=e((()=>{g(),X=()=>new URL(location.hash.replace(/^#!?/iu,``).replace(`%23`,`#`),location.origin),OS=e=>e?()=>new URLSearchParams(X().hash.replace(`#`,``)).get(e):void 0,Z=(e,t)=>{if(!e)return;let n=X(),r=new URLSearchParams(n.hash.replace(`#`,``));return t==null?r.delete(e):r.set(e,t),`#!`+Object.assign(n,{hash:r}).href.replace(location.origin,``)},Q=e=>{let t=u(()=>OS(e),[e]),[n,r]=c(t),i=_(n);return l(()=>void(i.current=n),[n]),l(()=>{if(t==null)return;let e=()=>{let e=t();i.current!==e&&r(e)};return e(),window.addEventListener(`popstate`,e),window.addEventListener(`hashchange`,e),()=>{window.removeEventListener(`popstate`,e),window.removeEventListener(`hashchange`,e)}},[t]),[n,u(()=>e?t=>{r(t),history.pushState({},``,Z(e,t))}:r,[e])]}})),$,AS,jS,MS,NS,PS=e((()=>{kS(),O(),g(),T(),y(),$=e=>!e.hidden&&!e.disabled,AS=e=>e.slice().sort((e,t)=>Number(t.fallback??!1)-Number(e.fallback??!1)).find($),jS=(e,t)=>{let n=t?e.find(e=>e.name===t):void 0;return n&&$(n)?n:AS(e)},MS=(e,{hashParam:t,onActivate:n}={})=>{let[r,i]=Q(t),a=_([]),o=u(()=>jS(e,r??void 0),[e,r]);return{tabs:e,active:o,activated:u(()=>{let e=o?.name;return a.current=[...(a.current??[]).filter(t=>t!==e),e].filter(Boolean)},[o]),activate:i,onActivate:f(e=>{let t=e;if(t.button!==0||t.metaKey||t.ctrlKey)return;let r=e.currentTarget?.getAttribute(`name`);r&&(n?.(r),i(r))},[i,n])}},NS=({tabs:e,active:n,onActivate:r,className:i,variant:a,size:o,compactWidth:s})=>e.map(e=>{let c=D(e.title),l=e.content??c,u=e.badge||void 0;return t`<cosmoz-tab-next
			name=${e.name}
			class=${x(i)}
			variant=${x(a)}
			size=${x(o)}
			?compact-width=${x(s)}
			title=${x(c)}
			?active=${n?.name===e.name}
			?hidden=${e.hidden}
			?disabled=${e.disabled}
			badge=${x(u)}
			@click=${r}
			>${w(e.icon,e=>e({slot:`icon`}))}${l}</cosmoz-tab-next
		>`})})),FS=e((()=>{se(),DS(),PS()}));export{Z as a,sp as c,L as d,I as f,kS as i,G as l,O as m,NS as n,Q as o,ne as p,MS as r,aS as s,FS as t,W as u};