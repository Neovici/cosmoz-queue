import{t as e}from"./chunk-BvrOYcoh.js";import{a as t,n,o as r,r as i,t as a}from"./lit-html-BZ3vufxv.js";import{a as o,c as s,i as c,n as l,r as u,s as d,t as f}from"./iframe-Bq6FKtEB.js";import{a as p,b as m,c as h,f as g,g as _,h as v,i as y,l as b,m as x,n as S,o as ee,p as te,r as ne,s as C,t as w,u as T,y as E}from"./haunted-Cp5YPAnM.js";import{C as D,E as O,S as k,T as A,_ as j,b as M,c as N,g as re,n as ie,s as ae,t as oe,v as se,w as P,x as F,y as ce}from"./next-DKSz4R96.js";var le,I,ue,de,fe=e((()=>{w(),le=e=>{if(typeof e!=`object`||!e)return!1;let t=e;return typeof t.px==`number`&&t.px>=0&&!Number.isNaN(t.px)},I=e=>{try{let t=JSON.parse(e);if(le(t))return t}catch{}},ue=(e=`cosmoz-resizable-view:`)=>{let t=new Map,n,r=new Map,i=()=>{n=void 0;for(let[t,n]of r)try{localStorage.setItem(e+t,JSON.stringify(n))}catch{}r.clear()},a=(e,t)=>{r.set(e,t),n??=setTimeout(i,100)},o=n=>{if(n.key==null||!n.key.startsWith(e)||n.newValue==null)return;let r=n.key.slice(e.length),i=I(n.newValue);if(i==null)return;let a=t.get(r);if(a)for(let e of a)e(i)};return typeof window<`u`&&window.addEventListener(`storage`,o),{get(t){let n;try{n=localStorage.getItem(e+t)}catch{return}if(n!=null)return I(n)},set(e,t){a(e,t)},subscribe(e,n){let r=t.get(e);return r||(r=new Set,t.set(e,r)),r.add(n),()=>{let r=t.get(e);r&&(r.delete(n),r.size===0&&t.delete(e))}},destroy(){typeof window<`u`&&window.removeEventListener(`storage`,o),n!=null&&(clearTimeout(n),i())}}},de=(e,t,n)=>{let r=T(n);if(r.current=n,_(()=>{if(!e||!t)return;let n=e.get(t);n!=null&&r.current?.(n);let i=e.subscribe?.(t,e=>r.current?.(e));return()=>{i?.(),e.destroy?.()}},[e,t]),!(!e||!t))return n=>e.set(t,n)}})),pe,me=e((()=>{w(),pe=E`
	:host {
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	:host([data-direction='vertical']) {
		flex-direction: column;
	}

	::slotted([slot='previous']) {
		flex-grow: 0;
		flex-shrink: 1;
		min-width: 0;
		min-height: 0;
		overflow: auto;
	}

	::slotted([slot='next']) {
		flex-grow: 1;
		flex-shrink: 1;
		flex-basis: 0;
		min-width: 0;
		min-height: 0;
		overflow: auto;
	}

	cosmoz-resize-handle {
		flex: 0 0 auto;
	}

	:host([data-single-panel]) cosmoz-resize-handle {
		display: none;
	}

	:host([data-single-panel]) ::slotted(*) {
		flex-grow: 1 !important;
		flex-shrink: 1 !important;
		flex-basis: 0;
	}
`})),L,he,R,ge,z,_e,ve,B=e((()=>{L=e=>e instanceof MouseEvent?{x:e.clientX,y:e.clientY}:e.touches&&e.touches.length>0?{x:e.touches[0].clientX,y:e.touches[0].clientY}:{x:0,y:0},he=(e,t,n)=>n===`horizontal`?e.x-t.left:e.y-t.top,R=e=>{let t=parseFloat(e);return Number.isNaN(t)?void 0:t},ge=(e,t)=>{let n=getComputedStyle(e);return t===`horizontal`?{min:R(n.minWidth)??0,max:R(n.maxWidth)??1/0}:{min:R(n.minHeight)??0,max:R(n.maxHeight)??1/0}},z=e=>({rect:e.container.getBoundingClientRect(),bounds:ge(e.previous,e.direction)}),_e=(e,t,n,r)=>Math.max(r.min,Math.min(he(e,t,n),r.max)),ve=e=>{let t;return n=>{let{phase:r,mousePosition:i}=n.detail;if(r===`start`){t=z(e);return}if(r!==`move`&&r!==`end`)return;t||=z(e);let a=_e(i,t.rect,e.direction,t.bounds);r===`move`?e.onResize?.(a):(e.onResizeEnd?.(a),t=void 0)}}})),ye,be=e((()=>{w(),B(),ye=(e=`horizontal`)=>{let t=b();return _(()=>{t.setAttribute(`data-direction`,e)},[e]),_(()=>{let e=(e,n)=>{t.dispatchEvent(new CustomEvent(`resize-handle`,{detail:{phase:e,mousePosition:n},bubbles:!0}))},n=0,r,i=()=>{n=0,r&&=(e(`move`,r),void 0)},a=e=>{r=L(e),n||=requestAnimationFrame(i)},o=r=>{n&&(cancelAnimationFrame(n),i()),t.removeAttribute(`data-dragging`),e(`end`,L(r)),document.removeEventListener(`mousemove`,a),document.removeEventListener(`mouseup`,o),document.removeEventListener(`touchmove`,a),document.removeEventListener(`touchend`,o)},s=n=>{t.setAttribute(`data-dragging`,`true`),e(`start`,L(n)),document.addEventListener(`mousemove`,a),document.addEventListener(`mouseup`,o),document.addEventListener(`touchmove`,a,{passive:!1}),document.addEventListener(`touchend`,o)},c=e=>{e.preventDefault(),s(e)},l=e=>{e.preventDefault(),s(e)};return t.addEventListener(`mousedown`,c),t.addEventListener(`touchstart`,l,{passive:!1}),()=>{n&&cancelAnimationFrame(n),t.removeEventListener(`mousedown`,c),t.removeEventListener(`touchstart`,l),document.removeEventListener(`mousemove`,a),document.removeEventListener(`mouseup`,o),document.removeEventListener(`touchmove`,a),document.removeEventListener(`touchend`,o)}},[t]),null}})),xe,Se=e((()=>{w(),xe=E`
	:host {
		display: flex;
		position: relative;
		z-index: 1;
		user-select: none;
		touch-action: none;
		background: var(--cz-queue-gutter-bg, var(--cz-header-bg-color, #fff));
	}

	:host::before {
		content: '';
		display: block;
		flex: none;
		background: var(--cz-queue-gutter-bg, var(--cz-header-bg-color, #bbb));
		pointer-events: none;
	}

	:host::after {
		content: '';
		position: absolute;
		top: 0;
		left: -2px;
		right: -2px;
		bottom: 0;
	}

	:host([data-direction='horizontal']) {
		flex-direction: column;
		align-items: center;
		min-height: 100%;
		width: var(--cosmoz-resize-handle-size, 2px);
		cursor: col-resize;
	}

	:host([data-direction='horizontal'])::before {
		width: 1px;
		flex: 1;
	}

	:host([data-direction='vertical']) {
		flex-direction: row;
		align-items: center;
		height: var(--cosmoz-resize-handle-size, 2px);
		width: 100%;
		cursor: row-resize;
	}

	:host([data-direction='vertical'])::before {
		height: 1px;
		flex: 1;
	}

	:host(:hover)::before,
	:host([data-dragging])::before {
		background: var(--cz-accent-color);
		box-shadow: -1px 0 0 1px var(--cz-accent-color);
	}

	:host([data-direction='vertical']:hover)::before,
	:host([data-direction='vertical'][data-dragging])::before {
		box-shadow: 0 -1px 0 1px var(--cz-accent-color);
	}
`})),Ce,we=e((()=>{w(),r(),be(),Se(),Ce=({direction:e=`horizontal`})=>(ye(e),a),customElements.define(`cosmoz-resize-handle`,S(Ce,{styleSheets:[xe],observedAttributes:[`direction`]}))})),V,H,Te,Ee,De,Oe=e((()=>{w(),r(),A(),fe(),me(),we(),B(),V=e=>{let{width:t,height:n}=e.getBoundingClientRect();return t>0&&n>0},H=e=>e?.assignedElements()[0],Te=(e,t,n)=>{let r=()=>{let r=V(t)&&V(n);e.toggleAttribute(`data-single-panel`,!r)},i=new ResizeObserver(()=>queueMicrotask(r));return i.observe(t),i.observe(n),r(),i},Ee=(e,t)=>{t!=null&&(e.style.flexBasis=`${t.px}px`)},De=({direction:e=`horizontal`,persist:n})=>{let r=b(),i=T(),a=T(),o=T(),[s,c]=g(!1),l=v(()=>n?ue():void 0,[n]),u=de(l,n,e=>{let t=H(a.current);t&&Ee(t,e)}),d=T(u);d.current=u;let f=x(()=>{let e=a.current?.assignedElements()[0],t=o.current?.assignedElements()[0];e&&t&&c(!0)},[]);return _(()=>{r.setAttribute(`data-direction`,e)},[e]),_(()=>{if(!s)return;let t=H(a.current),n=H(o.current),c=i.current;if(!t||!n||!c)return;let l=ve({container:r,previous:t,direction:e,onResize:e=>{t.style.flexBasis=`${e}px`},onResizeEnd:e=>{d.current?.({px:e})}});c.addEventListener(`resize-handle`,l);let u=Te(r,t,n);return()=>{c.removeEventListener(`resize-handle`,l),u.disconnect()}},[e,l,n,r,s]),t`<slot
			name="previous"
			${O(a)}
			@slotchange=${f}
		></slot
		><cosmoz-resize-handle
			direction=${e}
			${O(i)}
		></cosmoz-resize-handle
		><slot name="next" ${O(o)} @slotchange=${f}></slot>`},customElements.define(`cosmoz-resizable-view`,S(De,{styleSheets:[pe],observedAttributes:[`direction`,`persist`]}))})),ke=e((()=>{fe(),Oe(),we(),B()})),Ae,je=e((()=>{D(),w(),r(),Ae=E`
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
`,customElements.define(`cosmoz-tooltip-content`,S(()=>t`
			<slot name="heading"></slot>
			<slot name="description"></slot>
			<slot></slot>
		`,{styleSheets:[P,Ae]}))})),U,Me=e((()=>{w(),U=m(E`
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
`)})),W,Ne,Pe=e((()=>{w(),r(),F(),je(),Me(),W=(e,r,i)=>n(t`<cosmoz-tooltip-content>
			${k(r,()=>t`<strong slot="heading">${r}</strong>`)}
			${k(i,()=>t`<p slot="description">${i}</p>`)}
		</cosmoz-tooltip-content>`,e),Ne=(e,t)=>{let{for:n,heading:r,description:i,placement:a=`top`,delay:o=300,disabled:s=!1}=t,c=T(),l=!!(r||i)&&!s;_(()=>{if(!n||!l)return;let t=e.getRootNode(),u=t.adoptedStyleSheets??[];u.includes(U)||(t.adoptedStyleSheets=[...u,U]);let d=document.createElement(`div`);d.setAttribute(`popover`,`manual`),d.setAttribute(`role`,`tooltip`),d.classList.add(`cosmoz-tooltip-popover`),e.after(d),c.current=d,W(d,r,i);let f=`[name="${n}"]`,p=`--tooltip-anchor-${n}`,m,h=e=>{s||(clearTimeout(m),e.style.anchorName=p,d.style.positionAnchor=p,d.style.positionArea=a,m=window.setTimeout(()=>d.showPopover(),o))},g=()=>{clearTimeout(m),d.hidePopover()},_=e=>{let t=e.target.closest?.(f);t&&h(t)},v=e=>{let t=e.target.closest?.(f);if(!t)return;let n=e.relatedTarget;n&&t.contains(n)||g()},y=e=>{let t=e.target.closest?.(f);t&&h(t)},b=e=>{e.target.closest?.(f)&&g()};return t.addEventListener(`pointerover`,_),t.addEventListener(`pointerout`,v),t.addEventListener(`focusin`,y),t.addEventListener(`focusout`,b),()=>{clearTimeout(m),t.removeEventListener(`pointerover`,_),t.removeEventListener(`pointerout`,v),t.removeEventListener(`focusin`,y),t.removeEventListener(`focusout`,b),d.hidePopover(),d.remove(),c.current=void 0}},[n,a,o,l]),_(()=>{!n||!c.current||W(c.current,r,i)},[r,i,n]),_(()=>{!s||!c.current||c.current.hidePopover()},[s])}})),Fe,Ie=e((()=>{w(),Fe=e=>{let[t,n]=g(!1);return _(()=>{let t=e.current;if(!t)return;let r=()=>{n(t.assignedElements().length>0)};return r(),t.addEventListener(`slotchange`,r),()=>t.removeEventListener(`slotchange`,r)},[e.current]),t}})),Le,Re,ze=e((()=>{D(),w(),r(),A(),F(),je(),Me(),Pe(),Ie(),Le=E`
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
`,Re=e=>{let{heading:n,description:r,for:i,placement:o=`top`,delay:s=300,disabled:c=!1}=e,l=T(),u=T(),d=T(),f=Fe(d),p=!!(n||r||f)&&!c,m=x(()=>{p&&(clearTimeout(u.current),u.current=window.setTimeout(()=>{l.current?.showPopover()},s))},[s,p]);_(()=>{c&&(clearTimeout(u.current),l.current?.hidePopover())},[c]);let h=x(()=>{clearTimeout(u.current),l.current?.hidePopover()},[]);return _(()=>{if(i)return;let t=t=>{let n=t.relatedTarget;n&&e.contains(n)||h()};return e.addEventListener(`pointerover`,m),e.addEventListener(`pointerout`,t),()=>{e.removeEventListener(`pointerover`,m),e.removeEventListener(`pointerout`,t)}},[i,m,h]),Ne(e,{for:i,heading:n,description:r,placement:o,delay:s,disabled:c}),i?a:p?t`
		<slot @focusin=${m} @focusout=${h}></slot>
		<div
			class="cosmoz-tooltip-popover"
			popover="manual"
			role="tooltip"
			style="position-area: ${o}"
			${O(l)}
		>
			<cosmoz-tooltip-content>
				${k(n,()=>t`<strong slot="heading">${n}</strong>`)}
				${k(r,()=>t`<p slot="description">${r}</p>`)}
				<slot name="content" ${O(d)}></slot>
			</cosmoz-tooltip-content>
		</div>
	`:t`
			<slot></slot>
			<slot name="content" ${O(d)} hidden></slot>
		`},customElements.define(`cosmoz-tooltip`,S(Re,{styleSheets:[P,U,Le],observedAttributes:[`heading`,`description`,`for`,`placement`,`delay`,`disabled`]}))})),Be=e((()=>{ze()})),Ve,He=e((()=>{w(),Ve=E`
	:host {
		display: inline-flex;

		--_wash: light-dark(rgb(10 13 18 / 0.05), rgb(255 255 255 / 0.07));
		--_wash-strong: light-dark(rgb(10 13 18 / 0.08), rgb(255 255 255 / 0.11));
		--_hairline: light-dark(rgb(10 13 18 / 0.12), rgb(255 255 255 / 0.1));
		--_sheen: linear-gradient(rgb(255 255 255 / 0.12), rgb(255 255 255 / 0));
		--_lift: 0 1px 2px light-dark(rgb(10 13 18 / 0.08), rgb(0 0 0 / 0.4));
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
		padding: 0 12px;
		border: none;
		border-radius: var(--cz-radius-md);
		font-family: var(--cz-font-body);
		font-size: 0.8125rem;
		font-weight: var(--cz-font-weight-medium);
		line-height: 1;
		letter-spacing: -0.006em;
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
			outline-color 120ms ease-out,
			transform 80ms ease-out;

		background: var(--cz-action-sheen, none), var(--cz-color-bg-action-solid);
		color: var(--cz-color-text-on-action);
		box-shadow: var(--cz-shadow-action);

		&:hover {
			background-color: var(--cz-color-bg-action-solid-hover);
		}

		&:active {
			transform: scale(0.97);
		}

		&:focus-visible {
			outline-color: var(--cz-color-focus-ring);
		}
	}

	::slotted(svg) {
		width: 16px;
		height: 16px;
		flex-shrink: 0;
	}

	::slotted([slot='prefix']) {
		margin-inline-start: -2px;
	}

	::slotted([slot='suffix']) {
		margin-inline-end: -2px;
	}

	/* Sizes */

	:host([size='sm']) .button {
		height: var(--cz-control-height-sm);
		padding: 0 10px;
		border-radius: var(--cz-radius-sm);
		font-size: var(--cz-text-xs);
	}

	:host([size='sm']) ::slotted(svg) {
		width: 14px;
		height: 14px;
	}

	:host([size='lg']) .button {
		height: var(--cz-control-height-lg);
		padding: 0 14px;
		font-size: var(--cz-text-sm);
	}

	:host([size='xl']) .button {
		height: var(--cz-control-height-xl);
		padding: 0 16px;
		gap: 8px;
		font-size: var(--cz-text-sm);
	}

	:host([size='xl']) ::slotted(svg) {
		width: 18px;
		height: 18px;
	}

	:host([icon-only]) .button {
		width: var(--cz-control-height-md);
		padding: 0;
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
		background: light-dark(var(--cz-color-white), var(--cz-color-gray-900));
		color: var(--cz-color-text-primary);
		box-shadow:
			inset 0 0 0 1px var(--_hairline),
			inset 0 -1px 0 light-dark(rgb(10 13 18 / 0.04), transparent),
			inset 0 1px 0 light-dark(transparent, rgb(255 255 255 / 0.04)),
			var(--_lift);

		&:hover {
			background: light-dark(var(--cz-color-gray-50), var(--cz-color-gray-800));
		}
	}

	:host([variant='tertiary']) .button {
		background: transparent;
		color: var(--cz-color-text-secondary);
		box-shadow: none;

		&:hover {
			background: var(--_wash);
			color: var(--cz-color-text-primary);
		}
	}

	:host([variant='destructive']) .button {
		background: var(--_sheen), var(--cz-color-error-600);
		color: var(--cz-color-white);
		box-shadow:
			inset 0 1px 0 rgb(255 255 255 / 0.16),
			inset 0 0 0 1px light-dark(rgb(10 13 18 / 0.2), transparent),
			var(--_lift);

		&:hover {
			background-color: light-dark(
				var(--cz-color-error-700),
				var(--cz-color-error-500)
			);
		}

		&:focus-visible {
			outline-color: var(--cz-color-error-500);
		}
	}

	:host([variant='link']) .button {
		height: auto;
		padding: 0;
		background: transparent;
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

		&:active {
			transform: none;
		}
	}

	:host([icon-only][variant='secondary']) .button,
	:host([icon-only][variant='tertiary']) .button {
		color: var(--cz-color-text-tertiary);

		&:hover {
			color: var(--cz-color-text-primary);
		}
	}

	/* Toggled (aria-pressed) */

	:host([variant='secondary'][aria-pressed='true']) .button {
		background: var(--_wash-strong);
		color: var(--cz-color-text-primary);
		box-shadow: inset 0 0 0 1px var(--_hairline);
	}

	:host([variant='tertiary'][aria-pressed='true']) .button {
		background: var(--_wash-strong);
		color: var(--cz-color-text-primary);
	}

	:host(:not([variant])[aria-pressed='true']) .button,
	:host([variant='primary'][aria-pressed='true']) .button,
	:host([variant='destructive'][aria-pressed='true']) .button {
		background-image: none;
		box-shadow: inset 0 1px 3px rgb(0 0 0 / 0.35);
	}

	:host([variant='link'][aria-pressed='true']) .button {
		text-decoration-color: currentColor;
	}

	/* Disabled keeps the variant's look, just quieter. */

	:host([disabled]) .button {
		opacity: 0.45;
		cursor: not-allowed;
		pointer-events: none;
		box-shadow: none;
	}

	:host([disabled][variant='secondary']) .button {
		box-shadow: inset 0 0 0 1px var(--_hairline);
	}

	@media (prefers-reduced-motion: reduce) {
		.button {
			transition: none;
		}

		.button:active {
			transform: none;
		}
	}
`})),Ue,We,Ge=e((()=>{D(),Be(),w(),r(),ce(),F(),He(),Ue=[`variant`,`size`,`disabled`,`full-width`,`icon-only`,`tooltip`,`tooltip-placement`,`type`,`value`,`href`,`target`,`rel`,`download`,`aria-expanded`,`aria-label`,`aria-pressed`],We=e=>{let{disabled:n=!1,tooltip:r,tooltipPlacement:i,type:o=`button`,href:s,target:c,rel:l,download:u}=e,d=!!n;_(()=>{let t=t=>{e.disabled&&t.stopImmediatePropagation()};return e.addEventListener(`click`,t,{capture:!0}),()=>e.removeEventListener(`click`,t,{capture:!0})},[e.disabled]);let f=t`
		<slot name="prefix"></slot>
		<slot></slot>
		<slot name="suffix"></slot>
	`,p=k(s!=null,()=>t`
			<a
				href=${s}
				class="button"
				part="button"
				aria-disabled=${d?`true`:a}
				aria-expanded=${M(e.getAttribute(`aria-expanded`)??void 0)}
				aria-label=${M(e.getAttribute(`aria-label`)??void 0)}
				target=${M(c)}
				rel=${M(l)}
				download=${M(u)}
				>${f}</a
			>
		`,()=>t`
			<button
				type=${o}
				class="button"
				part="button"
				?disabled=${d}
				aria-expanded=${M(e.getAttribute(`aria-expanded`)??void 0)}
				aria-label=${M(e.getAttribute(`aria-label`)??void 0)}
				aria-pressed=${M(e.getAttribute(`aria-pressed`)??void 0)}
			>
				${f}
			</button>
		`);return t`<cosmoz-tooltip
		heading=${M(r??void 0)}
		placement=${M(i??void 0)}
		?disabled=${d}
	>
		${p}
	</cosmoz-tooltip>`},customElements.define(`cosmoz-button`,S(We,{observedAttributes:Ue,styleSheets:[P,Ve],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})),Ke=e((()=>{Ge()})),G,qe,Je=e((()=>{r(),C(),u(),G=(e,t,n)=>{let r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},qe=p(class extends ee{constructor(e){if(super(e),e.type!==h.CHILD)throw Error(`repeat() can only be used in text expressions`)}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);let i=[],a=[],o=0;for(let t of e)i[o]=r?r(t,o):o,a[o]=n(t,o),o++;return{values:a,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,r]){let a=f(e),{values:c,keys:u}=this.dt(t,n,r);if(!Array.isArray(a))return this.ut=u,c;let p=this.ut??=[],m=[],h,g,_=0,v=a.length-1,y=0,b=c.length-1;for(;_<=v&&y<=b;)if(a[_]===null)_++;else if(a[v]===null)v--;else if(p[_]===u[y])m[y]=d(a[_],c[y]),_++,y++;else if(p[v]===u[b])m[b]=d(a[v],c[b]),v--,b--;else if(p[_]===u[b])m[b]=d(a[_],c[b]),s(e,m[b+1],a[_]),_++,b--;else if(p[v]===u[y])m[y]=d(a[v],c[y]),s(e,a[_],a[v]),v--,y++;else if(h===void 0&&(h=G(u,y,b),g=G(p,_,v)),h.has(p[_]))if(h.has(p[v])){let t=g.get(u[y]),n=t===void 0?null:a[t];if(n===null){let t=s(e,a[_]);d(t,c[y]),m[y]=t}else m[y]=d(n,c[y]),s(e,a[_],n),a[t]=null;y++}else l(a[v]),v--;else l(a[_]),_++;for(;y<=b;){let t=s(e,m[b+1]);d(t,c[y]),m[y++]=t}for(;_<=v;){let e=a[_++];e!==null&&l(e)}return this.ut=u,o(e,m),i}})})),K,Ye,Xe,Ze=e((()=>{r(),C(),K=`important`,Ye=` !`+K,Xe=p(class extends ee{constructor(e){if(super(e),e.type!==h.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`},``)}update(e,[t]){let{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?n.removeProperty(e):n[e]=null);for(let e in t){let r=t[e];if(r!=null){this.ft.add(e);let t=typeof r==`string`&&r.endsWith(Ye);e.includes(`-`)||t?n.setProperty(e,t?r.slice(0,-11):r,t?K:``):n[e]=r}}return i}})})),Qe,$e=e((()=>{re(),Qe=class extends Promise{constructor(e){let t={};super((e,n)=>Object.assign(t,{resolve:e,reject:n})),Object.assign(this,t),e?.(t.resolve,t.reject)}resolve=()=>{}}})),q,et,tt,nt,rt=e((()=>{w(),Je(),A(),Ze(),se(),$e(),q={host:{position:`relative`,display:`flex`,overflow:`hidden`},slide:{position:`static`,width:`100%`,height:`100%`}},et=e=>{let{slide:t}=e,[n,r]=g([]);return te(()=>void Object.assign(e.style,q.host),[]),_(()=>{if(t==null)return;let e={animationEnd$:new Qe,...t};r((t=[])=>{let n=t.findIndex(({id:t,out:n})=>t===e.id&&n!==!0);return n===-1?[...t,e]:[...t.slice(0,n),e,...t.slice(n+1,t.length)]})},[t]),te(async()=>{if(n.filter(e=>!e.out).length<2){let e=n[0];e&&requestAnimationFrame(()=>requestAnimationFrame(()=>e.animationEnd$.resolve()));return}let e=n[n.length-1],t=n[n.length-2],i=e.el,a=t.el;t.out=!0,i&&a&&await e.animation?.(i,a),r((e=[])=>e.filter(e=>e!==t))},[n]),{slides:n}},tt=e=>t`<div
		${O(t=>Object.assign(e,{el:t}))}
		class="slide"
		style=${Xe(q.slide)}
	>
		${j([e],()=>e.content??e.render?.(e))}
	</div>`,nt=({slides:e})=>j([e],()=>qe(e,({id:e})=>e,tt))})),it,at=e((()=>{w(),rt(),it=e=>nt(et(e)),customElements.define(`cosmoz-slider`,S(it,{useShadowDOM:!1}))})),J,ot,st=e((()=>{J=(e,t)=>{let n=e.animate([{position:`absolute`,transform:`translateX(100%)`},{transform:`translateX(0%)`}],{duration:200,fill:`none`,easing:`ease-in-out`}),r=t.animate([{},{position:`absolute`,transform:`translateX(-100%)`}],{duration:200,fill:`none`,easing:`ease-in-out`});return Promise.all([n.finished,r.finished])},ot=(e,t)=>{let n=e.animate([{position:`absolute`,transform:`translateX(-100%)`},{transform:`translateX(0%)`}],{duration:200,fill:`none`,easing:`ease-in-out`}),r=t.animate([{},{position:`absolute`,transform:`translateX(100%)`}],{duration:200,fill:`none`,easing:`ease-in-out`});return Promise.all([n.finished,r.finished])}})),ct=e((()=>{w(),r()})),lt=e((()=>{at(),ct(),st(),rt()})),ut,dt,Y,ft,pt,mt,ht=e((()=>{r(),y(),u(),C(),ut=class{_ref;constructor(e){this._ref=e}disconnect(){this._ref=void 0}reconnect(e){this._ref=e}deref(){return this._ref}},dt=class{_promise=void 0;_resolve=void 0;get(){return this._promise}pause(){this._promise??=new Promise(e=>this._resolve=e)}resume(){this._resolve?.(),this._promise=this._resolve=void 0}},Y=e=>!c(e)&&typeof e.then==`function`,ft=1073741823,pt=class extends ne{__lastRenderedIndex=ft;__values=[];__weakThis=new ut(this);__pauser=new dt;render(...e){return e.find(e=>!Y(e))??i}update(e,t){let n=this.__values,r=n.length;this.__values=t;let a=this.__weakThis,o=this.__pauser;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this.__lastRenderedIndex);e++){let i=t[e];if(!Y(i))return this.__lastRenderedIndex=e,i;e<r&&i===n[e]||Promise.resolve(i).then(async e=>{for(;o.get();)await o.get();let t=a.deref();if(t!==void 0){let n=t.__values.indexOf(i);n>-1&&n<=t.__lastRenderedIndex&&(t.__lastRenderedIndex=n,t.setValue(e))}})}return i}disconnected(){this.__weakThis.disconnect(),this.__pauser.pause()}reconnected(){this.__weakThis.reconnect(this),this.__pauser.resume()}},mt=p(pt)})),X,gt=e((()=>{r(),X=t`
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="16"
		height="16"
		fill="none"
		viewBox="0 0 6 10"
	>
		<path stroke="currentColor" stroke-linecap="round" d="m1 9 4-4-4-4" />
	</svg>
`})),Z,_t,vt=e((()=>{w(),Z=E`
	:host {
		display: flex;
		flex-direction: column;
		height: 100%;
		position: relative;
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
	}

	.tabn {
		box-shadow: none;
		position: relative;
		padding-block: calc(var(--cz-spacing) * 2);
	}
	.tabn-tab {
		flex: 0 1 0.000001px;
		flex: 0 1 min-content;
		padding: var(--cz-queue-tab-padding, 11px 16px);
		background: inherit;
		color: var(--cz-color-gray-400);
	}
	.tabn-tab:first-of-type {
		margin-left: auto;
	}

	.tabn-tab[active] {
		color: var(--cz-color-text-primary);
		box-shadow: none;
	}
	.tabn-tab:hover {
		color: var(--cz-color-text-secondary-hover);
	}
	.tabn-heading {
		font-size: var(--cz-text-lg);
		font-weight: var(--cz-font-weight-semibold);
		line-height: var(--cz-text-lg-line-height);
		color: var(--cz-color-text-secondary);
		white-space: nowrap;
		display: flex;
		align-items: center;
	}
	.tabn-stats {
		margin: 0 calc(var(--cz-spacing) * 4);
		color: var(--cz-color-text-secondary);
		white-space: nowrap;
		display: flex;
		align-items: center;
	}

	#list {
		flex-basis: var(--cz-queue-list-basis, 50%);
		min-width: var(--cz-queue-list-min-width, 100px);
	}

	#queue {
		border-top: 1px solid var(--cz-color-border-primary);
	}

	[data-active='split'] .view-core::part(header-bg) {
		border-top-left-radius: 0;
	}

	[data-active='overview'] #queue,
	[data-active='queue'] #list {
		display: none !important;
	}

	.button-nav.prev,
	.button-page.prev,
	.page-prev {
		transform: scaleX(-1);
		margin-right: calc(var(--cz-spacing) * 2);
	}

	.tabn-pagination {
		font-size: 0;
		display: flex;
	}
`,_t=E`
	${Z}

	#list::part(itemRow-active) {
		background: var(--cz-color-bg-tertiary);
	}

	:host([data-mobile]) .tabn-heading {
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		margin-left: calc(var(--cz-spacing) * 3);
	}
	:host([data-mobile]) .tabn-tab {
		padding: 10px;
	}
	:host([data-mobile]) [name='split'] {
		display: none;
	}
`})),yt,Q,bt,xt,$,St,Ct,wt,Tt=e((()=>{Ke(),ke(),lt(),oe(),ht(),ae(),r(),se(),ce(),F(),gt(),vt(),yt={id:`empty`,content:a,animation:J},Q=()=>yt,bt=({next:e,prev:n})=>t` <cosmoz-button
			variant="tertiary"
			icon-only
			class="button-nav prev"
			title="${N(`Previous item`)}"
			?disabled=${!n}
			slot="extra"
			@click=${n}
		>
			${X}
		</cosmoz-button>
		<cosmoz-button
			variant="tertiary"
			icon-only
			title="${N(`Next item`)}"
			class="button-nav next"
			?disabled=${!e}
			slot="extra"
			@click=${e}
		>
			${X}
		</cosmoz-button>`,xt=e=>{if(!e)return a;let{pageNumber:n=-1,onPage:r}=e,i=e.totalPages??Math.ceil((e.totalAvailable??0)/(e.pageSize??0));return t` <div class="tabn-pagination" slot="stats">
		<cosmoz-button
			title="${N(`Previous page`)}"
			class="button-page page-prev"
			size="sm"
			variant="tertiary"
			icon-only
			?disabled=${!(n>1)}
			@click=${e=>r(e.ctrlKey?1:n-1)}
		>
			${X}
		</cosmoz-button>
		<cosmoz-button
			title="${N(`Next page`)}"
			variant="tertiary"
			icon-only
			class="button-page page-next"
			size="sm"
			?disabled=${!(n<i)}
			@click=${e=>r(e.ctrlKey?i:n+1)}
		>
			${X}
		</cosmoz-button>
	</div>`},$=({pagination:e,index:n,items:r,totalAvailable:i,nav:o,activeTab:s})=>r.length<1?a:t`<div class="tabn-stats" slot="stats">
		${(()=>{if(e){let{pageNumber:t,pageSize:i}=e,a=i??r.length;return[((t??1)-1)*a+n+1,r.length<a?e.totalAvailable:(t??1)*a].join(`-`)}let t=o.index,i=o.items?.length;return[i!==r.length&&[`queue`,`split`].includes(s||``)?[t<0?`?`:t+1,i].join(`/`):[n+1,r.length].join(`-`)]})()}
		${[N(`of`),i??N(`many`)].join(` `)}
	</div>`,St=({animationEnd$:e,details:t,item:n,next:r,prev:i,renderItem:a,renderLoader:o})=>{let s=bt({next:r,prev:i});if(!t)return a({item:n,nav:s,next:r,prev:i,animationEnd$:e});let c=t(n);return j([c,e,r],()=>mt(Promise.all([c,e]).then(([e])=>a({item:e,nav:s,next:r,prev:i})),o({item:n,nav:s})))},Ct=({id:e,forward:t,item:n,...r})=>n?{id:e(n),render:e=>St({...e,item:n,...r}),animation:t?J:ot}:Q(),wt=({header:e,heading:n,afterHeading:r,index:i,tabnav:a,items:o,totalAvailable:s,nav:c,tabHashParam:l,list:u,renderLoader:d,renderItem:f,details:p=c?.details,pagination:m,persistKey:h,splitAttrs:g})=>{let _=a.active?.name,v=m?{...m,totalAvailable:s}:void 0,y=t`
		<cosmoz-tabs-next class="tabn">
			<div class="tabn-heading" slot="tabs">${n}${r}</div>
			${ie({...a,className:`tabn-tab`})}
			${$({pagination:v,totalAvailable:s,index:i,items:o,nav:c,activeTab:_})}
			${xt(v)}
		</cosmoz-tabs-next>
	`;return t`
		<style>
			${_t}
		</style>

		${k(e,e=>e({tabnav:a,heading:n,afterHeading:r,totalAvailable:s,item:c?.item,tabHashParam:l}),()=>y)}

		<cosmoz-resizable-view
			data-active=${_}
			direction="horizontal"
			persist=${M(h)}
			initial-size=${g?.initialSize??`50%`}
			min-size=${g?.minSize??`100`}
		>
			${u}
			<cosmoz-slider
				id="queue"
				slot="next"
				.slide=${k(_!==`overview`,()=>Ct({...c,renderLoader:d,renderItem:f,details:p}),Q)}
			></cosmoz-slider>
		</cosmoz-resizable-view>
	`}}));export{$ as a,ke as c,wt as i,bt as n,Z as o,xt as r,vt as s,Tt as t};