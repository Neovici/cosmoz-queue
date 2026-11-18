import{t as e}from"./chunk-BvrOYcoh.js";import{a as t,n,o as r,t as i}from"./lit-html-BZ3vufxv.js";import{b as a,f as o,g as s,m as c,n as l,p as u,t as d,u as f,y as p}from"./haunted-Bp1jxpd6.js";import{a as m,c as h,i as g,l as _,o as v,r as y,s as b,u as x}from"./i18next-DE9LZv0z.js";var S,C=e((()=>{b(),d(),r(),S=p`
	:host {
		display: flex;
		flex-direction: column;
		gap: var(--cosmoz-tooltip-gap, var(--cz-spacing));
		font-family: var(--cz-font-body);
	}

	::slotted([slot='heading']) {
		display: block;
	}

	::slotted([slot='description']) {
		margin: 0;
	}
`,customElements.define(`cosmoz-tooltip-content`,l(()=>t`
			<slot name="heading"></slot>
			<slot name="description"></slot>
			<slot></slot>
		`,{styleSheets:[h,S]}))})),w,T=e((()=>{d(),w=a(p`
	.cosmoz-tooltip-popover {
		position: fixed;
		inset: unset;
		pointer-events: none;
		text-align: left;
		margin: calc(var(--cz-spacing) * 2);
		position-try-fallbacks:
			flip-block,
			flip-inline,
			flip-block flip-inline;

		/* Reset popover defaults */
		border: none;
		white-space: normal;
		padding: var(--cosmoz-tooltip-padding, calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 3));
		border-radius: var(--cosmoz-tooltip-border-radius, var(--cz-radius-sm));
		max-width: var(--cosmoz-tooltip-max-width, 20rem);
		box-shadow: var(--cosmoz-tooltip-box-shadow, var(--cz-shadow-lg));
		background: var(--cosmoz-tooltip-bg-color, var(--cz-color-gray-900));
		font-size: var(--cosmoz-tooltip-font-size, var(--cz-text-xs));
		font-weight: var(--cosmoz-tooltip-font-weight, 400);
		line-height: var(--cosmoz-tooltip-line-height, var(--cz-text-xs-line-height));
		color: var(--cosmoz-tooltip-text-color, var(--cz-color-white));

		cosmoz-tooltip-content strong {
			font-weight: var(
	 			--cosmoz-tooltip-heading-font-weight,
	 			var(--cz-font-weight-semibold)
	 		);

			color: var(--cosmoz-tooltip-heading-color);
		}

		/* Animation - open state */
		opacity: 1;
		transform: translateY(0) scale(1);

		transition:
			opacity 150ms ease-out,
			transform 150ms ease-out,
			overlay 150ms ease-out allow-discrete,
			display 150ms ease-out allow-discrete;
	}

	@starting-style {
		.cosmoz-tooltip-popover:popover-open {
			opacity: 0;
			transform: translateY(4px) scale(0.96);
		}
	}

	.cosmoz-tooltip-popover:not(:popover-open) {
		opacity: 0;
		transform: translateY(4px) scale(0.96);
	}

	@media (prefers-reduced-motion: reduce) {
		.cosmoz-tooltip-popover {
			transition: none;
		}
	}
`)})),E,D,O=e((()=>{d(),r(),m(),C(),T(),E=(e,r,i)=>n(t`<cosmoz-tooltip-content>
			${v(r,()=>t`<strong slot="heading">${r}</strong>`)}
			${v(i,()=>t`<p slot="description">${i}</p>`)}
		</cosmoz-tooltip-content>`,e),D=(e,t)=>{let{for:n,heading:r,description:i,placement:a=`top`,delay:o=300,disabled:c=!1}=t,l=f(),u=!!(r||i)&&!c;s(()=>{if(!n||!u)return;let t=e.getRootNode(),s=t.adoptedStyleSheets??[];s.includes(w)||(t.adoptedStyleSheets=[...s,w]);let d=document.createElement(`div`);d.setAttribute(`popover`,`manual`),d.setAttribute(`role`,`tooltip`),d.classList.add(`cosmoz-tooltip-popover`),e.after(d),l.current=d,E(d,r,i);let f=`[name="${n}"]`,p=`--tooltip-anchor-${n}`,m,h=e=>{c||(clearTimeout(m),e.style.anchorName=p,d.style.positionAnchor=p,d.style.positionArea=a,m=window.setTimeout(()=>d.showPopover(),o))},g=()=>{clearTimeout(m),d.hidePopover()},_=e=>{let t=e.target.closest?.(f);t&&h(t)},v=e=>{let t=e.target.closest?.(f);if(!t)return;let n=e.relatedTarget;n&&t.contains(n)||g()},y=e=>{let t=e.target.closest?.(f);t&&h(t)},b=e=>{e.target.closest?.(f)&&g()};return t.addEventListener(`pointerover`,_),t.addEventListener(`pointerout`,v),t.addEventListener(`focusin`,y),t.addEventListener(`focusout`,b),()=>{clearTimeout(m),t.removeEventListener(`pointerover`,_),t.removeEventListener(`pointerout`,v),t.removeEventListener(`focusin`,y),t.removeEventListener(`focusout`,b),d.hidePopover(),d.remove(),l.current=void 0}},[n,a,o,u]),s(()=>{!n||!l.current||E(l.current,r,i)},[r,i,n]),s(()=>{!c||!l.current||l.current.hidePopover()},[c])}})),k,A=e((()=>{d(),k=e=>{let[t,n]=o(!1);return s(()=>{let t=e.current;if(!t)return;let r=()=>{n(t.assignedElements().length>0)};return r(),t.addEventListener(`slotchange`,r),()=>t.removeEventListener(`slotchange`,r)},[e.current]),t}})),j,M,N=e((()=>{b(),d(),r(),_(),m(),C(),T(),O(),A(),j=p`
	:host {
		display: inline-block;
		anchor-name: --tooltip-anchor;
	}

	:host([for]) {
		display: contents;
		anchor-name: unset;
	}

	.cosmoz-tooltip-popover {
		position-anchor: --tooltip-anchor;
	}
`,M=e=>{let{heading:n,description:r,for:a,placement:o=`top`,delay:l=300,disabled:u=!1}=e,d=f(),p=f(),m=f(),h=k(m),g=!!(n||r||h)&&!u,_=c(()=>{g&&(clearTimeout(p.current),p.current=window.setTimeout(()=>{d.current?.showPopover()},l))},[l,g]);s(()=>{u&&(clearTimeout(p.current),d.current?.hidePopover())},[u]);let y=c(()=>{clearTimeout(p.current),d.current?.hidePopover()},[]);return s(()=>{if(a)return;let t=t=>{let n=t.relatedTarget;n&&e.contains(n)||y()};return e.addEventListener(`pointerover`,_),e.addEventListener(`pointerout`,t),()=>{e.removeEventListener(`pointerover`,_),e.removeEventListener(`pointerout`,t)}},[a,_,y]),D(e,{for:a,heading:n,description:r,placement:o,delay:l,disabled:u}),a?i:g?t`
		<slot @focusin=${_} @focusout=${y}></slot>
		<div
			class="cosmoz-tooltip-popover"
			popover="manual"
			role="tooltip"
			style="position-area: ${o}"
			${x(d)}
		>
			<cosmoz-tooltip-content>
				${v(n,()=>t`<strong slot="heading">${n}</strong>`)}
				${v(r,()=>t`<p slot="description">${r}</p>`)}
				<slot name="content" ${x(m)}></slot>
			</cosmoz-tooltip-content>
		</div>
	`:t`
			<slot></slot>
			<slot name="content" ${x(m)} hidden></slot>
		`},customElements.define(`cosmoz-tooltip`,l(M,{styleSheets:[h,w,j],observedAttributes:[`heading`,`description`,`for`,`placement`,`delay`,`disabled`]}))})),P=e((()=>{N()})),F,I,L=e((()=>{F=(e,t)=>{e.type=`submit`,e.hidden=!0,e.disabled=!!(t.disabled||t.formDisabled),e.name=t.name??``,e.value=t.value??``;for(let n of[`form`,`formaction`,`formenctype`,`formmethod`,`formnovalidate`,`formtarget`])t.hasAttribute(n)?e.setAttribute(n,t.getAttribute(n)):e.removeAttribute(n)},I=class extends HTMLElement{static formAssociated=!0;#e=this.attachInternals();#t;get form(){return this.#e.form}syncFormButton(){if(!this.isConnected||this.type!==`submit`||this.href!=null){this.#t?.remove(),this.#t=void 0;return}this.#t?F(this.#t,this):(this.#t=document.createElement(`button`),F(this.#t,this),this.append(this.#t))}formAssociatedCallback(){this.syncFormButton()}formDisabledCallback(e){this.formDisabled=e,this.syncFormButton()}connectedCallback(){this.addEventListener(`click`,this.#n),this.syncFormButton()}disconnectedCallback(){this.removeEventListener(`click`,this.#n),this.#t?.remove(),this.#t=void 0}#n=e=>{this.#t&&e.composedPath().includes(this.#t)||setTimeout(()=>{if(e.defaultPrevented||!this.isConnected||this.disabled||this.formDisabled||this.href!=null)return;let t=this.form;t&&(this.type===`reset`?t.reset():this.type===`submit`&&(this.syncFormButton(),this.#t&&t.requestSubmit(this.#t)))},0)}}})),R,z=e((()=>{d(),R=p`
	:host {
		display: inline-flex;

		--_wash: var(--cz-color-bg-glass, var(--cz-color-bg-tertiary));
		--_wash-strong: var(
			--cz-color-bg-glass-hover,
			var(--cz-color-bg-secondary-hover)
		);
		--_hairline: var(--cz-color-border-glass, var(--cz-color-border-primary));
		--_sheen: var(--cz-glass-action-sheen, var(--cz-action-sheen, none));
		--_lift: var(--cz-shadow-xs);
		--_pressed-bg: var(
			--cz-color-bg-glass-action-pressed,
			var(--cz-color-bg-action-solid-hover)
		);
	}

	:host([full-width]) {
		display: flex;
		width: 100%;
	}

	:host([hidden]) {
		display: none;
	}

	/* Keeps the inner control stretching with host-driven sizing. */
	:host > cosmoz-tooltip {
		display: flex;
		width: 100%;
	}

	.button {
		display: inline-flex;
		align-items: center;
		justify-content: var(--cosmoz-button-justify-content, center);
		gap: 6px;
		width: 100%;
		height: var(--cz-control-height-md);
		padding: 0 14px;
		border: 1px solid transparent;
		border-radius: var(--cz-radius-md);
		font-family: var(--cz-font-body);
		font-size: calc((var(--cz-text-sm) + var(--cz-text-xs)) / 2);
		font-weight: var(--cz-font-weight-regular);
		line-height: 1.25;
		letter-spacing: normal;
		text-align: center;
		text-decoration: none;
		white-space: nowrap;
		cursor: pointer;
		user-select: none;
		-webkit-tap-highlight-color: transparent;
		outline: 2px solid transparent;
		outline-offset: 2px;
		transition:
			background-color 120ms ease-out,
			color 120ms ease-out,
			box-shadow 120ms ease-out,
			outline-color 120ms ease-out;

		background:
			var(
				--cz-glass-button-action-sheen,
				var(--cz-glass-action-sheen, var(--cz-action-sheen, none))
			),
			var(--cz-color-bg-glass-action, var(--cz-color-bg-action-solid));
		border-color: var(--cz-color-border-glass-action, transparent);
		backdrop-filter: var(--cz-backdrop-filter-glass, none);
		color: var(--cz-color-text-on-glass-action, var(--cz-color-text-on-action));
		box-shadow: var(
			--cz-shadow-glass-button-action,
			var(--cz-shadow-glass-action, var(--cz-shadow-action))
		);

		&:hover {
			background-color: var(
				--cz-color-bg-glass-action-hover,
				var(--cz-color-bg-action-solid-hover)
			);
		}

		&:focus-visible {
			outline-color: var(--cz-color-focus-ring);
		}
	}

	::slotted(iron-icon) {
		pointer-events: none;
		width: var(--cosmoz-button-icon-size, var(--cz-icon-size-lg, 1.25rem));
		height: var(--cosmoz-button-icon-size, var(--cz-icon-size-lg, 1.25rem));
		flex: none;
	}

	::slotted(svg) {
		width: var(--cosmoz-button-icon-size, var(--cz-icon-size-sm, 1rem));
		height: var(--cosmoz-button-icon-size, var(--cz-icon-size-sm, 1rem));
		flex-shrink: 0;
	}

	::slotted([slot='prefix']) {
		margin-inline-start: -2px;
	}

	::slotted([slot='suffix']) {
		margin-inline-end: -2px;
	}

	/* Sizes */

	:host([size='xs']) .button {
		height: var(--cz-control-height-xs, 1.5rem);
		padding: 0 10px;
		gap: 4px;
		font-size: var(--cz-text-xs);
	}

	:host([size='sm']) .button {
		height: var(--cz-control-height-sm);
		padding: 0 12px;
		font-size: var(--cz-text-xs);
	}

	:host([size='xs']) ::slotted(svg),
	:host([size='sm']) ::slotted(svg) {
		width: var(--cosmoz-button-icon-size, var(--cz-icon-size-xs, 0.875rem));
		height: var(--cosmoz-button-icon-size, var(--cz-icon-size-xs, 0.875rem));
	}

	:host([size='lg']) .button {
		height: var(--cz-control-height-lg);
		padding: 0 16px;
		font-size: var(--cz-text-sm);
	}

	:host([size='xl']) .button {
		height: var(--cz-control-height-xl);
		padding: 0 18px;
		gap: 8px;
		font-size: var(--cz-text-sm);
	}

	:host([size='xl']) ::slotted(svg) {
		width: var(--cosmoz-button-icon-size, var(--cz-icon-size-md, 1.125rem));
		height: var(--cosmoz-button-icon-size, var(--cz-icon-size-md, 1.125rem));
	}

	:host([icon-only]) .button {
		width: var(--cz-control-height-md);
		padding: 0;
	}

	/* icon-square keeps the labelled button's corners instead of the circle. */
	:host([icon-only]:not([icon-square])) .button {
		border-radius: var(--cz-radius-full);
	}

	:host([icon-only][size='xs']) .button {
		width: var(--cz-control-height-xs, 1.5rem);
	}

	:host([icon-only][size='sm']) .button {
		width: var(--cz-control-height-sm);
	}

	:host([icon-only][size='lg']) .button {
		width: var(--cz-control-height-lg);
	}

	:host([icon-only][size='xl']) .button {
		width: var(--cz-control-height-xl);
	}

	:host([icon-only]) ::slotted(svg) {
		margin: 0;
	}

	/* Variants */

	:host([variant='secondary']) .button {
		--_pressed-bg: var(
			--cz-color-bg-glass-pressed,
			var(--cz-color-bg-secondary-hover)
		);
		background:
			var(--cz-glass-button-sheen, var(--cz-glass-sheen, none)),
			var(
				--cz-color-bg-glass-button,
				var(--cz-color-bg-glass, var(--cz-color-bg-tertiary))
			);
		color: var(--cz-color-text-primary);
		border-color: var(
			--cz-color-border-glass-button,
			var(--cz-color-border-glass, var(--cz-color-border-primary))
		);
		box-shadow: var(
			--cz-shadow-glass-button,
			var(--cz-shadow-glass, var(--cz-shadow-xs))
		);
		backdrop-filter: var(--cz-backdrop-filter-glass, none);

		&:hover {
			background-color: var(
				--cz-color-bg-glass-hover,
				var(--cz-color-bg-secondary-hover)
			);
		}
	}

	:host([variant='tertiary']) .button {
		background: transparent;
		border-color: transparent;
		backdrop-filter: none;
		color: var(--cz-color-text-secondary);
		box-shadow: none;

		&:hover {
			background: var(--cz-color-bg-tertiary);
			color: var(--cz-color-text-primary);
		}
	}

	:host([variant='tertiary']) .button:active {
		background: var(--cz-color-bg-quaternary);
		box-shadow: none;
	}

	:host([variant='destructive']) .button {
		--_pressed-bg: var(
			--cz-color-bg-glass-destructive-pressed,
			var(--cz-color-bg-error-solid-hover)
		);
		background:
			var(--_sheen),
			var(--cz-color-bg-glass-destructive, var(--cz-color-bg-error-solid));
		color: var(--cz-color-white);
		box-shadow:
			inset 0 1px 0 rgb(255 255 255 / 0.06),
			inset 0 0 0 1px light-dark(rgb(10 13 18 / 0.2), transparent),
			var(--_lift);

		&:hover {
			background-color: var(
				--cz-color-bg-glass-destructive-hover,
				var(--cz-color-bg-error-solid-hover)
			);
		}

		&:focus-visible {
			outline-color: var(--cz-color-error-500);
		}
	}

	:host([variant='success']) .button {
		--_pressed-bg: var(
			--cz-color-bg-success-solid-hover,
			color-mix(in oklab, var(--cz-color-bg-success-solid), black 12%)
		);
		background: var(--_sheen), var(--cz-color-bg-success-solid);
		color: var(--cz-color-white);
		box-shadow:
			inset 0 1px 0 rgb(255 255 255 / 0.06),
			inset 0 0 0 1px light-dark(rgb(10 13 18 / 0.2), transparent),
			var(--_lift);

		&:hover {
			background-color: var(--_pressed-bg);
		}

		&:focus-visible {
			outline-color: var(--cz-color-success-500);
		}
	}

	:host([variant='warning']) .button {
		--_pressed-bg: var(
			--cz-color-bg-warning-solid-hover,
			color-mix(in oklab, var(--cz-color-bg-warning-solid), black 12%)
		);
		background: var(--_sheen), var(--cz-color-bg-warning-solid);
		color: var(--cz-color-white);
		box-shadow:
			inset 0 1px 0 rgb(255 255 255 / 0.06),
			inset 0 0 0 1px light-dark(rgb(10 13 18 / 0.2), transparent),
			var(--_lift);

		&:hover {
			background-color: var(--_pressed-bg);
		}

		&:focus-visible {
			outline-color: var(--cz-color-warning-500);
		}
	}

	:host([variant='link']) .button {
		height: auto;
		padding: 0;
		background: transparent;
		border-color: transparent;
		backdrop-filter: none;
		color: var(--cz-color-text-link);
		box-shadow: none;
		border-radius: var(--cz-radius-xs);
		outline-offset: 3px;
		text-decoration: underline;
		text-decoration-color: transparent;
		text-underline-offset: 3px;
		transition-property: color, text-decoration-color, outline-color;

		&:hover {
			color: var(--cz-color-text-link-hover);
			text-decoration-color: currentColor;
		}
	}

	:host([icon-only][variant='secondary']) .button,
	:host([icon-only][variant='tertiary']) .button {
		color: var(--cz-color-text-primary);

		&:hover {
			color: var(--cz-color-text-primary);
		}
	}

	:host(:not([variant='tertiary']):not([variant='link']))
		.button:active:not(:disabled) {
		background-color: var(--_pressed-bg);
		background-image: none;
		box-shadow: var(--cz-shadow-glass-pressed, var(--cz-shadow-pressed-3d));
	}

	/* Toggled (aria-pressed) */

	:host([variant='secondary'][aria-pressed='true']) .button {
		background: var(--_wash-strong);
		color: var(--cz-color-text-primary);
		box-shadow: var(--cz-shadow-glass-pressed, var(--cz-shadow-pressed-3d));
	}

	:host([variant='tertiary'][aria-pressed='true']) .button {
		background: var(--cz-color-bg-quaternary);
		color: var(--cz-color-text-primary);
	}

	:host(:not([variant])[aria-pressed='true']) .button,
	:host([variant='primary'][aria-pressed='true']) .button,
	:host([variant='destructive'][aria-pressed='true']) .button,
	:host([variant='success'][aria-pressed='true']) .button,
	:host([variant='warning'][aria-pressed='true']) .button {
		background-image: none;
		box-shadow: var(--cz-shadow-glass-pressed, var(--cz-shadow-pressed-3d));
	}

	:host([variant='link'][aria-pressed='true']) .button {
		text-decoration-color: currentColor;
	}

	/* Disabled keeps the variant's look, just quieter. */

	:host([disabled]) .button,
	:host(:disabled) .button,
	.button:disabled {
		opacity: var(--cz-opacity-disabled, 0.45);
		cursor: not-allowed;
		pointer-events: none;
		box-shadow: none;
	}

	@media (forced-colors: active) {
		:host .button,
		:host([variant]) .button {
			border-color: ButtonText;
			background: ButtonFace;
			color: ButtonText;
		}
		:host([aria-pressed='true']) .button {
			outline: 2px solid Highlight;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.button {
			transition: none;
		}
	}
`})),B,V,H=e((()=>{b(),P(),d(),r(),y(),m(),L(),z(),B=`variant.size.disabled.full-width.icon-only.tooltip.tooltip-placement.type.value.href.target.rel.download.aria-expanded.aria-label.title.aria-pressed.aria-controls.aria-haspopup.aria-description.aria-busy.aria-current.control-role.tabindex.name.form.formaction.formenctype.formmethod.formnovalidate.formtarget`.split(`.`),V=e=>{let{disabled:n=!1,tooltip:r,tooltipPlacement:a,type:o=`button`,href:c,target:l,rel:d,download:f}=e,p=!!(n||e.formDisabled);s(()=>{e.syncFormButton()}),s(()=>{let t=t=>{(e.disabled||e.formDisabled)&&(t.preventDefault(),t.stopImmediatePropagation())};return e.addEventListener(`click`,t,{capture:!0}),()=>e.removeEventListener(`click`,t,{capture:!0})},[e.disabled,e.formDisabled]),u(()=>{let t=e.shadowRoot?.querySelector(`.button`);t&&`ariaControlsElements`in t&&(t.ariaControlsElements=e.ariaControlsElements)});let m=t`
		<slot name="prefix"></slot>
		<slot></slot>
		<slot name="suffix"></slot>
	`,h=v(c!=null,()=>t`
			<a
				role=${g(e.controlRole)}
				tabindex=${g(e.getAttribute(`tabindex`)??void 0)}
				aria-controls=${g(e.getAttribute(`aria-controls`)??void 0)}
				aria-haspopup=${g(e.getAttribute(`aria-haspopup`)??void 0)}
				aria-description=${g(e.getAttribute(`aria-description`)??void 0)}
				aria-busy=${g(e.getAttribute(`aria-busy`)??void 0)}
				aria-current=${g(e.getAttribute(`aria-current`)??void 0)}
				href=${c}
				class="button"
				part="button"
				aria-disabled=${p?`true`:i}
				aria-expanded=${g(e.getAttribute(`aria-expanded`)??void 0)}
				aria-label=${g(e.getAttribute(`aria-label`)??(e.iconOnly&&e.title?e.title:void 0))}
				target=${g(l)}
				rel=${g(d)}
				download=${g(f)}
				>${m}</a
			>
		`,()=>t`
			<button
				role=${g(e.controlRole)}
				tabindex=${g(e.getAttribute(`tabindex`)??void 0)}
				aria-controls=${g(e.getAttribute(`aria-controls`)??void 0)}
				aria-haspopup=${g(e.getAttribute(`aria-haspopup`)??void 0)}
				aria-description=${g(e.getAttribute(`aria-description`)??void 0)}
				aria-busy=${g(e.getAttribute(`aria-busy`)??void 0)}
				aria-current=${g(e.getAttribute(`aria-current`)??void 0)}
				type=${o}
				class="button"
				part="button"
				?disabled=${p}
				aria-expanded=${g(e.getAttribute(`aria-expanded`)??void 0)}
				aria-label=${g(e.getAttribute(`aria-label`)??(e.iconOnly&&e.title?e.title:void 0))}
				aria-pressed=${g(e.getAttribute(`aria-pressed`)??void 0)}
			>
				${m}
			</button>
		`);return t`<cosmoz-tooltip
		heading=${g(r??void 0)}
		placement=${g(a??void 0)}
		?disabled=${p}
	>
		${h}
	</cosmoz-tooltip>`},customElements.define(`cosmoz-button`,l(V,{baseElement:I,observedAttributes:B,styleSheets:[h,R],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})),U=e((()=>{H()}));export{U as t};