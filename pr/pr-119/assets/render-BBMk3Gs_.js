import{t as e}from"./chunk-BvrOYcoh.js";import{a as t,c as n,n as r,o as i,r as a,t as o}from"./lit-html-BZ3vufxv.js";import{a as s,c,i as l,n as u,r as d,s as f,t as p}from"./iframe-BV8KeKjN.js";import{a as m,b as h,c as g,d as _,f as v,g as y,h as b,i as x,l as ee,m as S,n as C,o as w,p as T,r as E,s as D,t as O,u as k,y as A}from"./haunted-BZneXz6J.js";var te,ne,re,ie,ae=e((()=>{O(),te=e=>{if(typeof e!=`object`||!e)return!1;let t=e;return typeof t.px==`number`&&t.px>=0&&!Number.isNaN(t.px)},ne=e=>{try{let t=JSON.parse(e);if(te(t))return t}catch{}},re=(e=`cosmoz-resizable-view:`)=>{let t=new Map,n,r=new Map,i=()=>{n=void 0;for(let[t,n]of r)try{localStorage.setItem(e+t,JSON.stringify(n))}catch{}r.clear()},a=(e,t)=>{r.set(e,t),n??=setTimeout(i,100)},o=n=>{if(n.key==null||!n.key.startsWith(e)||n.newValue==null)return;let r=n.key.slice(e.length),i=ne(n.newValue);if(i==null)return;let a=t.get(r);if(a)for(let e of a)e(i)};return typeof window<`u`&&window.addEventListener(`storage`,o),{get(t){let n;try{n=localStorage.getItem(e+t)}catch{return}if(n!=null)return ne(n)},set(e,t){a(e,t)},subscribe(e,n){let r=t.get(e);return r||(r=new Set,t.set(e,r)),r.add(n),()=>{let r=t.get(e);r&&(r.delete(n),r.size===0&&t.delete(e))}},destroy(){typeof window<`u`&&window.removeEventListener(`storage`,o),n!=null&&(clearTimeout(n),i())}}},ie=(e,t,n)=>{let r=k(n);if(r.current=n,y(()=>{if(!e||!t)return;let n=e.get(t);n!=null&&r.current?.(n);let i=e.subscribe?.(t,e=>r.current?.(e));return()=>{i?.(),e.destroy?.()}},[e,t]),!(!e||!t))return n=>e.set(t,n)}})),oe,j,se=e((()=>{i(),x(),D(),oe=new WeakMap,j=m(class extends E{render(e){return o}update(e,[t]){let n=t!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),o}rt(e){if(this.G!==void 0)if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=oe.get(t);n===void 0&&(n=new WeakMap,oe.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G==`function`?oe.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})})),ce,le=e((()=>{O(),ce=A`
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
`})),ue,de,M,fe,pe,me,he,ge=e((()=>{ue=e=>e instanceof MouseEvent?{x:e.clientX,y:e.clientY}:e.touches&&e.touches.length>0?{x:e.touches[0].clientX,y:e.touches[0].clientY}:{x:0,y:0},de=(e,t,n)=>n===`horizontal`?e.x-t.left:e.y-t.top,M=e=>{let t=parseFloat(e);return Number.isNaN(t)?void 0:t},fe=(e,t)=>{let n=getComputedStyle(e);return t===`horizontal`?{min:M(n.minWidth)??0,max:M(n.maxWidth)??1/0}:{min:M(n.minHeight)??0,max:M(n.maxHeight)??1/0}},pe=e=>({rect:e.container.getBoundingClientRect(),bounds:fe(e.previous,e.direction)}),me=(e,t,n,r)=>Math.max(r.min,Math.min(de(e,t,n),r.max)),he=e=>{let t;return n=>{let{phase:r,mousePosition:i}=n.detail;if(r===`start`){t=pe(e);return}if(r!==`move`&&r!==`end`)return;t||=pe(e);let a=me(i,t.rect,e.direction,t.bounds);r===`move`?e.onResize?.(a):(e.onResizeEnd?.(a),t=void 0)}}})),_e,ve=e((()=>{O(),ge(),_e=(e=`horizontal`)=>{let t=ee();return y(()=>{t.setAttribute(`data-direction`,e)},[e]),y(()=>{let e=(e,n)=>{t.dispatchEvent(new CustomEvent(`resize-handle`,{detail:{phase:e,mousePosition:n},bubbles:!0}))},n=0,r,i=()=>{n=0,r&&=(e(`move`,r),void 0)},a=e=>{r=ue(e),n||=requestAnimationFrame(i)},o=r=>{n&&(cancelAnimationFrame(n),i()),t.removeAttribute(`data-dragging`),e(`end`,ue(r)),document.removeEventListener(`mousemove`,a),document.removeEventListener(`mouseup`,o),document.removeEventListener(`touchmove`,a),document.removeEventListener(`touchend`,o)},s=n=>{t.setAttribute(`data-dragging`,`true`),e(`start`,ue(n)),document.addEventListener(`mousemove`,a),document.addEventListener(`mouseup`,o),document.addEventListener(`touchmove`,a,{passive:!1}),document.addEventListener(`touchend`,o)},c=e=>{e.preventDefault(),s(e)},l=e=>{e.preventDefault(),s(e)};return t.addEventListener(`mousedown`,c),t.addEventListener(`touchstart`,l,{passive:!1}),()=>{n&&cancelAnimationFrame(n),t.removeEventListener(`mousedown`,c),t.removeEventListener(`touchstart`,l),document.removeEventListener(`mousemove`,a),document.removeEventListener(`mouseup`,o),document.removeEventListener(`touchmove`,a),document.removeEventListener(`touchend`,o)}},[t]),null}})),ye,be=e((()=>{O(),ye=A`
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
`})),xe,Se=e((()=>{O(),i(),ve(),be(),xe=({direction:e=`horizontal`})=>(_e(e),o),customElements.define(`cosmoz-resize-handle`,C(xe,{styleSheets:[ye],observedAttributes:[`direction`]}))})),Ce,we,Te,Ee,De,Oe=e((()=>{O(),i(),se(),ae(),le(),Se(),ge(),Ce=e=>{let{width:t,height:n}=e.getBoundingClientRect();return t>0&&n>0},we=e=>e?.assignedElements()[0],Te=(e,t,n)=>{let r=()=>{let r=Ce(t)&&Ce(n);e.toggleAttribute(`data-single-panel`,!r)},i=new ResizeObserver(()=>queueMicrotask(r));return i.observe(t),i.observe(n),r(),i},Ee=(e,t)=>{t!=null&&(e.style.flexBasis=`${t.px}px`)},De=({direction:e=`horizontal`,persist:n})=>{let r=ee(),i=k(),a=k(),o=k(),[s,c]=v(!1),l=b(()=>n?re():void 0,[n]),u=ie(l,n,e=>{let t=we(a.current);t&&Ee(t,e)}),d=k(u);d.current=u;let f=S(()=>{let e=a.current?.assignedElements()[0],t=o.current?.assignedElements()[0];e&&t&&c(!0)},[]);return y(()=>{r.setAttribute(`data-direction`,e)},[e]),y(()=>{if(!s)return;let t=we(a.current),n=we(o.current),c=i.current;if(!t||!n||!c)return;let l=he({container:r,previous:t,direction:e,onResize:e=>{t.style.flexBasis=`${e}px`},onResizeEnd:e=>{d.current?.({px:e})}});c.addEventListener(`resize-handle`,l);let u=Te(r,t,n);return()=>{c.removeEventListener(`resize-handle`,l),u.disconnect()}},[e,l,n,r,s]),t`<slot
			name="previous"
			${j(a)}
			@slotchange=${f}
		></slot
		><cosmoz-resize-handle
			direction=${e}
			${j(i)}
		></cosmoz-resize-handle
		><slot name="next" ${j(o)} @slotchange=${f}></slot>`},customElements.define(`cosmoz-resizable-view`,C(De,{styleSheets:[ce],observedAttributes:[`direction`,`persist`]}))})),ke=e((()=>{ae(),Oe(),Se(),ge()})),N,P=e((()=>{O(),N=h(A`
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
`)}));function F(e,t,n){return e?t(e):n?.(e)}var I=e((()=>{})),Ae,je=e((()=>{P(),O(),i(),Ae=A`
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
`,customElements.define(`cosmoz-tooltip-content`,C(()=>t`
			<slot name="heading"></slot>
			<slot name="description"></slot>
			<slot></slot>
		`,{styleSheets:[N,Ae]}))})),Me,Ne=e((()=>{O(),Me=h(A`
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
`)})),Pe,Fe,Ie=e((()=>{O(),i(),I(),je(),Ne(),Pe=(e,n,i)=>r(t`<cosmoz-tooltip-content>
			${F(n,()=>t`<strong slot="heading">${n}</strong>`)}
			${F(i,()=>t`<p slot="description">${i}</p>`)}
		</cosmoz-tooltip-content>`,e),Fe=(e,t)=>{let{for:n,heading:r,description:i,placement:a=`top`,delay:o=300,disabled:s=!1}=t,c=k(),l=!!(r||i)&&!s;y(()=>{if(!n||!l)return;let t=e.getRootNode(),u=t.adoptedStyleSheets??[];u.includes(Me)||(t.adoptedStyleSheets=[...u,Me]);let d=document.createElement(`div`);d.setAttribute(`popover`,`manual`),d.setAttribute(`role`,`tooltip`),d.classList.add(`cosmoz-tooltip-popover`),e.after(d),c.current=d,Pe(d,r,i);let f=`[name="${n}"]`,p=`--tooltip-anchor-${n}`,m,h=e=>{s||(clearTimeout(m),e.style.anchorName=p,d.style.positionAnchor=p,d.style.positionArea=a,m=window.setTimeout(()=>d.showPopover(),o))},g=()=>{clearTimeout(m),d.hidePopover()},_=e=>{let t=e.target.closest?.(f);t&&h(t)},v=e=>{let t=e.target.closest?.(f);if(!t)return;let n=e.relatedTarget;n&&t.contains(n)||g()},y=e=>{let t=e.target.closest?.(f);t&&h(t)},b=e=>{e.target.closest?.(f)&&g()};return t.addEventListener(`pointerover`,_),t.addEventListener(`pointerout`,v),t.addEventListener(`focusin`,y),t.addEventListener(`focusout`,b),()=>{clearTimeout(m),t.removeEventListener(`pointerover`,_),t.removeEventListener(`pointerout`,v),t.removeEventListener(`focusin`,y),t.removeEventListener(`focusout`,b),d.hidePopover(),d.remove(),c.current=void 0}},[n,a,o,l]),y(()=>{!n||!c.current||Pe(c.current,r,i)},[r,i,n]),y(()=>{!s||!c.current||c.current.hidePopover()},[s])}})),Le,Re=e((()=>{O(),Le=e=>{let[t,n]=v(!1);return y(()=>{let t=e.current;if(!t)return;let r=()=>{n(t.assignedElements().length>0)};return r(),t.addEventListener(`slotchange`,r),()=>t.removeEventListener(`slotchange`,r)},[e.current]),t}})),ze,Be,Ve=e((()=>{P(),O(),i(),se(),I(),je(),Ne(),Ie(),Re(),ze=A`
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
`,Be=e=>{let{heading:n,description:r,for:i,placement:a=`top`,delay:s=300,disabled:c=!1}=e,l=k(),u=k(),d=k(),f=Le(d),p=!!(n||r||f)&&!c,m=S(()=>{p&&(clearTimeout(u.current),u.current=window.setTimeout(()=>{l.current?.showPopover()},s))},[s,p]);y(()=>{c&&(clearTimeout(u.current),l.current?.hidePopover())},[c]);let h=S(()=>{clearTimeout(u.current),l.current?.hidePopover()},[]);return y(()=>{if(i)return;let t=t=>{let n=t.relatedTarget;n&&e.contains(n)||h()};return e.addEventListener(`pointerover`,m),e.addEventListener(`pointerout`,t),()=>{e.removeEventListener(`pointerover`,m),e.removeEventListener(`pointerout`,t)}},[i,m,h]),Fe(e,{for:i,heading:n,description:r,placement:a,delay:s,disabled:c}),i?o:p?t`
		<slot @focusin=${m} @focusout=${h}></slot>
		<div
			class="cosmoz-tooltip-popover"
			popover="manual"
			role="tooltip"
			style="position-area: ${a}"
			${j(l)}
		>
			<cosmoz-tooltip-content>
				${F(n,()=>t`<strong slot="heading">${n}</strong>`)}
				${F(r,()=>t`<p slot="description">${r}</p>`)}
				<slot name="content" ${j(d)}></slot>
			</cosmoz-tooltip-content>
		</div>
	`:t`
			<slot></slot>
			<slot name="content" ${j(d)} hidden></slot>
		`},customElements.define(`cosmoz-tooltip`,C(Be,{styleSheets:[N,Me,ze],observedAttributes:[`heading`,`description`,`for`,`placement`,`delay`,`disabled`]}))})),He=e((()=>{Ve()})),L,R=e((()=>{i(),L=e=>e??o})),Ue,We=e((()=>{O(),Ue=A`
	:host {
		display: inline-flex;
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

	/* ========================================
	 * SIZE VARIANTS
	 * ======================================== */

	:host([size='sm']) .button {
		height: var(--cz-control-height-sm);
		padding: calc(var(--cz-spacing) * 1) calc(var(--cz-spacing) * 2.5);
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
		border-radius: var(--cz-radius-sm);
	}

	:host([size='sm']) ::slotted(svg) {
		width: 16px;
		height: 16px;
	}

	:host([size='lg']) .button {
		height: var(--cz-control-height-lg);
		padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 3.5);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		border-radius: var(--cz-radius-md);
	}

	:host([size='xl']) .button {
		height: var(--cz-control-height-xl);
		padding: calc(var(--cz-spacing) * 2.5) calc(var(--cz-spacing) * 4);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		border-radius: var(--cz-radius-md);
	}

	/* ========================================
	 * ICON ONLY
	 * ======================================== */

	:host([icon-only]) .button {
		width: var(--cz-control-height-md);
		height: var(--cz-control-height-md);
		padding: calc(var(--cz-spacing) * 1.5);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		border-radius: var(--cz-radius-md);
	}

	:host([icon-only][size='sm']) .button {
		width: var(--cz-control-height-sm);
		height: var(--cz-control-height-sm);
		padding: calc(var(--cz-spacing) * 1.5);
	}

	:host([icon-only][size='lg']) .button {
		width: var(--cz-control-height-lg);
		height: var(--cz-control-height-lg);
		padding: calc(var(--cz-spacing) * 1.5);
	}

	:host([icon-only][size='xl']) .button {
		width: var(--cz-control-height-xl);
		height: var(--cz-control-height-xl);
		padding: calc(var(--cz-spacing) * 1.5);
	}

	:host([icon-only]) ::slotted(svg) {
		width: 20px;
		height: 20px;
	}

	:host([icon-only][size='sm']) ::slotted(svg) {
		width: 16px;
		height: 16px;
	}

	/* ========================================
	 * BUTTON BASE STYLES
	 * ======================================== */

	.button {
		display: inline-flex;
		align-items: center;
		justify-content: var(--cosmoz-button-justify-content, center);
		gap: 8px;
		cursor: pointer;
		font-family: var(--cz-font-body);
		font-weight: var(--cz-font-weight-medium);
		text-decoration: none;
		transition:
			background-color 0.15s ease,
			box-shadow 0.15s ease,
			transform 0.1s ease;
		width: 100%;
		white-space: nowrap;
		border: none;
		background: none;
		text-align: center;

		/* Medium (md) default size */
		height: var(--cz-control-height-md);
		padding: calc(var(--cz-spacing) * 1.5) calc(var(--cz-spacing) * 3);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		border-radius: var(--cz-radius-md);

		background-color: var(--cz-color-bg-brand-solid);
		color: var(--cz-color-text-on-brand);
		box-shadow: var(--cz-shadow-xs);

		&:hover {
			background-color: var(--cz-color-bg-brand-solid-hover);
		}

		&:active:not(:disabled) {
			transform: translateY(1px);
		}

		&:active {
			background-color: var(--cz-color-brand-800);
		}

		&:focus-visible {
			outline: none;
			box-shadow: var(--cz-shadow-xs), var(--cz-focus-ring);
		}
	}

	/* ========================================
	 * STYLE VARIANTS
	 * ======================================== */

	:host([variant='secondary']) .button {
		background-color: var(--cz-color-bg-primary);
		color: var(--cz-color-text-secondary);
		box-shadow:
			inset 0 0 0 1px var(--cz-color-border-primary),
			var(--cz-shadow-xs);

		&:hover {
			background-color: var(--cz-color-bg-primary-hover);
			color: var(--cz-color-text-secondary-hover);
		}

		&:active {
			background-color: var(--cz-color-bg-tertiary);
		}

		&:focus-visible {
			box-shadow: var(--cz-shadow-xs), var(--cz-focus-ring);
		}
	}

	:host([variant='tertiary']) .button {
		background-color: transparent;
		color: var(--cz-color-text-secondary);
		box-shadow: none;

		&:hover {
			background-color: var(--cz-color-bg-primary-hover);
			color: var(--cz-color-text-secondary-hover);
		}

		&:active {
			background-color: var(--cz-color-bg-secondary);
		}

		&:focus-visible {
			box-shadow: var(--cz-focus-ring);
		}
	}

	:host([variant='destructive']) .button {
		background-color: var(--cz-color-bg-error-solid);

		&:hover {
			background-color: var(--cz-color-bg-error-solid-hover);
		}

		&:active {
			background-color: var(--cz-color-error-800);
		}

		&:focus-visible {
			box-shadow: var(--cz-shadow-xs), var(--cz-focus-ring-error);
		}
	}

	:host([variant='link']) .button {
		background-color: transparent;
		color: var(--cz-color-text-brand);
		box-shadow: none;
		padding: 0;
		height: auto;

		&:hover {
			text-decoration: underline;
			color: var(--cz-color-text-brand-hover);
		}

		&:active {
			color: var(--cz-color-brand-800);
			transform: none;
		}

		&:focus-visible {
			text-decoration: underline;
			box-shadow: var(--cz-focus-ring);
			border-radius: var(--cz-radius-xs);
		}
	}

	/* ========================================
	 * ICON ONLY COLORS (Untitled UI utility button)
	 * ======================================== */

	:host([icon-only][variant='secondary']) .button,
	:host([icon-only][variant='tertiary']) .button {
		color: var(--cz-color-text-tertiary);
	}

	:host([icon-only][variant='secondary']:not([disabled]):hover) .button,
	:host([icon-only][variant='secondary']) .button:hover,
	:host([icon-only][variant='tertiary']:not([disabled]):hover) .button,
	:host([icon-only][variant='tertiary']) .button:hover {
		color: var(--cz-color-text-secondary);
	}

	/* ========================================
	 * PRESSED / SELECTED STATE (aria-pressed)
	 * Quiet variants (secondary, tertiary) shift to the selected brand
	 * chip; primary and destructive stay solid but visually "sink" with
	 * an inset shadow; link emphasizes text with no surface change.
	 * ======================================== */

	:host([aria-pressed='true']) .button {
		box-shadow: var(--cz-shadow-pressed-3d);
	}

	:host([variant='secondary'][aria-pressed='true']) .button {
		box-shadow:
			var(--cz-shadow-pressed-3d),
			inset 0 0 0 1px
				light-dark(var(--cz-color-brand-300), var(--cz-color-brand-500));
	}

	:host([aria-pressed='true']) .button {
		background-color: light-dark(
			var(--cz-color-brand-50),
			var(--cz-color-brand-900)
		);
		color: light-dark(var(--cz-color-brand-700), var(--cz-color-brand-300));

		&:hover {
			background-color: light-dark(
				var(--cz-color-brand-100),
				var(--cz-color-brand-800)
			);
		}
	}

	/* Overrides the muted icon-only colors above (higher specificity). */
	:host([icon-only][variant='secondary'][aria-pressed='true']) .button,
	:host([icon-only][variant='tertiary'][aria-pressed='true']) .button {
		color: light-dark(var(--cz-color-brand-700), var(--cz-color-brand-300));

		&:hover {
			color: light-dark(var(--cz-color-brand-700), var(--cz-color-brand-200));
		}
	}

	:host(:not([variant])[aria-pressed='true']) .button,
	:host([variant='primary'][aria-pressed='true']) .button {
		background-color: var(--cz-color-bg-brand-solid);
		color: var(--cz-color-text-on-brand);
		box-shadow: var(--cz-shadow-xs), var(--cz-shadow-pressed-3d-solid);

		&:hover {
			background-color: var(--cz-color-bg-brand-solid-hover);
		}
	}

	:host([variant='destructive'][aria-pressed='true']) .button {
		background-color: var(--cz-color-bg-error-solid);
		color: var(--cz-color-text-on-brand);
		box-shadow: var(--cz-shadow-xs), var(--cz-shadow-pressed-3d-solid);

		&:hover {
			background-color: var(--cz-color-bg-error-solid-hover);
		}
	}

	:host([variant='link'][aria-pressed='true']) .button {
		background-color: transparent;
		box-shadow: none;
		color: light-dark(var(--cz-color-brand-700), var(--cz-color-brand-300));
		text-decoration: underline;

		&:hover {
			background-color: transparent;
		}
	}

	/* ========================================
	 * DISABLED STATE
	 * ======================================== */

	:host([disabled]) .button {
		cursor: not-allowed;
		pointer-events: none;
	}

	:host([disabled]) .button,
	:host([disabled][variant='primary']) .button {
		background-color: var(--cz-color-bg-disabled);
		color: var(--cz-color-text-disabled);
		box-shadow: none;
	}

	:host([disabled][variant='secondary']) .button {
		background-color: var(--cz-color-bg-primary);
		color: var(--cz-color-text-disabled);
		box-shadow: none;
	}

	:host([disabled][variant='tertiary']) .button {
		background-color: transparent;
		color: var(--cz-color-text-disabled);
		box-shadow: none;
	}

	:host([disabled][variant='destructive']) .button {
		background-color: var(--cz-color-bg-disabled);
		color: var(--cz-color-text-disabled);
		box-shadow: none;
	}

	:host([disabled][variant='link']) .button {
		background-color: transparent;
		color: var(--cz-color-text-disabled);
	}

	/* ========================================
	 * ICON SLOTS
	 * ======================================== */

	::slotted(svg) {
		width: 20px;
		height: 20px;
		flex-shrink: 0;
	}
`})),Ge,Ke,qe=e((()=>{P(),He(),O(),i(),R(),I(),We(),Ge=[`variant`,`size`,`disabled`,`full-width`,`icon-only`,`tooltip`,`tooltip-placement`,`type`,`value`,`href`,`target`,`rel`,`download`,`aria-expanded`,`aria-label`,`aria-pressed`],Ke=e=>{let{disabled:n=!1,tooltip:r,tooltipPlacement:i,type:a=`button`,href:s,target:c,rel:l,download:u}=e,d=!!n;y(()=>{let t=t=>{e.disabled&&t.stopImmediatePropagation()};return e.addEventListener(`click`,t,{capture:!0}),()=>e.removeEventListener(`click`,t,{capture:!0})},[e.disabled]);let f=t`
		<slot name="prefix"></slot>
		<slot></slot>
		<slot name="suffix"></slot>
	`,p=F(s!=null,()=>t`
			<a
				href=${s}
				class="button"
				part="button"
				aria-disabled=${d?`true`:o}
				aria-expanded=${L(e.getAttribute(`aria-expanded`)??void 0)}
				aria-label=${L(e.getAttribute(`aria-label`)??void 0)}
				target=${L(c)}
				rel=${L(l)}
				download=${L(u)}
				>${f}</a
			>
		`,()=>t`
			<button
				type=${a}
				class="button"
				part="button"
				?disabled=${d}
				aria-expanded=${L(e.getAttribute(`aria-expanded`)??void 0)}
				aria-label=${L(e.getAttribute(`aria-label`)??void 0)}
				aria-pressed=${L(e.getAttribute(`aria-pressed`)??void 0)}
			>
				${f}
			</button>
		`);return t`<cosmoz-tooltip
		heading=${L(r??void 0)}
		placement=${L(i??void 0)}
		?disabled=${d}
	>
		${p}
	</cosmoz-tooltip>`},customElements.define(`cosmoz-button`,C(Ke,{observedAttributes:Ge,styleSheets:[N,Ue],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})),Je=e((()=>{qe()})),Ye,Xe,Ze=e((()=>{i(),D(),d(),Ye=(e,t,n)=>{let r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},Xe=m(class extends w{constructor(e){if(super(e),e.type!==g.CHILD)throw Error(`repeat() can only be used in text expressions`)}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);let i=[],a=[],o=0;for(let t of e)i[o]=r?r(t,o):o,a[o]=n(t,o),o++;return{values:a,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,r]){let i=p(e),{values:o,keys:l}=this.dt(t,n,r);if(!Array.isArray(i))return this.ut=l,o;let d=this.ut??=[],m=[],h,g,_=0,v=i.length-1,y=0,b=o.length-1;for(;_<=v&&y<=b;)if(i[_]===null)_++;else if(i[v]===null)v--;else if(d[_]===l[y])m[y]=f(i[_],o[y]),_++,y++;else if(d[v]===l[b])m[b]=f(i[v],o[b]),v--,b--;else if(d[_]===l[b])m[b]=f(i[_],o[b]),c(e,m[b+1],i[_]),_++,b--;else if(d[v]===l[y])m[y]=f(i[v],o[y]),c(e,i[_],i[v]),v--,y++;else if(h===void 0&&(h=Ye(l,y,b),g=Ye(d,_,v)),h.has(d[_]))if(h.has(d[v])){let t=g.get(l[y]),n=t===void 0?null:i[t];if(n===null){let t=c(e,i[_]);f(t,o[y]),m[y]=t}else m[y]=f(n,o[y]),c(e,i[_],n),i[t]=null;y++}else u(i[v]),v--;else u(i[_]),_++;for(;y<=b;){let t=c(e,m[b+1]);f(t,o[y]),m[y++]=t}for(;_<=v;){let e=i[_++];e!==null&&u(e)}return this.ut=l,s(e,m),a}})})),Qe,$e,et,tt=e((()=>{i(),D(),Qe=`important`,$e=` !`+Qe,et=m(class extends w{constructor(e){if(super(e),e.type!==g.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`},``)}update(e,[t]){let{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?n.removeProperty(e):n[e]=null);for(let e in t){let r=t[e];if(r!=null){this.ft.add(e);let t=typeof r==`string`&&r.endsWith($e);e.includes(`-`)||t?n.setProperty(e,t?r.slice(0,-11):r,t?Qe:``):n[e]=r}}return a}})})),nt,z,rt=e((()=>{i(),D(),nt={},z=m(class extends w{constructor(){super(...arguments),this.ot=nt}render(e,t){return t()}update(e,[t,n]){if(Array.isArray(t)){if(Array.isArray(this.ot)&&this.ot.length===t.length&&t.every((e,t)=>e===this.ot[t]))return a}else if(this.ot===t)return a;return this.ot=Array.isArray(t)?Array.from(t):t,this.render(t,n)}})})),it,at,ot=e((()=>{it=e=>e,at=(e,...t)=>typeof e==`function`?e(...t):e})),st,ct=e((()=>{ot(),st=class extends Promise{constructor(e){let t={};super((e,n)=>Object.assign(t,{resolve:e,reject:n})),Object.assign(this,t),e?.(t.resolve,t.reject)}resolve=()=>{}}})),lt,ut,dt,ft,pt=e((()=>{O(),Ze(),se(),tt(),rt(),ct(),lt={host:{position:`relative`,display:`flex`,overflow:`hidden`},slide:{position:`static`,width:`100%`,height:`100%`}},ut=e=>{let{slide:t}=e,[n,r]=v([]);return T(()=>void Object.assign(e.style,lt.host),[]),y(()=>{if(t==null)return;let e={animationEnd$:new st,...t};r((t=[])=>{let n=t.findIndex(({id:t,out:n})=>t===e.id&&n!==!0);return n===-1?[...t,e]:[...t.slice(0,n),e,...t.slice(n+1,t.length)]})},[t]),T(async()=>{if(n.filter(e=>!e.out).length<2){let e=n[0];e&&requestAnimationFrame(()=>requestAnimationFrame(()=>e.animationEnd$.resolve()));return}let e=n[n.length-1],t=n[n.length-2],i=e.el,a=t.el;t.out=!0,i&&a&&await e.animation?.(i,a),r((e=[])=>e.filter(e=>e!==t))},[n]),{slides:n}},dt=e=>t`<div
		${j(t=>Object.assign(e,{el:t}))}
		class="slide"
		style=${et(lt.slide)}
	>
		${z([e],()=>e.content??e.render?.(e))}
	</div>`,ft=({slides:e})=>z([e],()=>Xe(e,({id:e})=>e,dt))})),mt,ht=e((()=>{O(),pt(),mt=e=>ft(ut(e)),customElements.define(`cosmoz-slider`,C(mt,{useShadowDOM:!1}))})),gt,_t,vt=e((()=>{gt=(e,t)=>{let n=e.animate([{position:`absolute`,transform:`translateX(100%)`},{transform:`translateX(0%)`}],{duration:200,fill:`none`,easing:`ease-in-out`}),r=t.animate([{},{position:`absolute`,transform:`translateX(-100%)`}],{duration:200,fill:`none`,easing:`ease-in-out`});return Promise.all([n.finished,r.finished])},_t=(e,t)=>{let n=e.animate([{position:`absolute`,transform:`translateX(-100%)`},{transform:`translateX(0%)`}],{duration:200,fill:`none`,easing:`ease-in-out`}),r=t.animate([{},{position:`absolute`,transform:`translateX(100%)`}],{duration:200,fill:`none`,easing:`ease-in-out`});return Promise.all([n.finished,r.finished])}})),yt=e((()=>{O(),i()})),bt=e((()=>{ht(),yt(),vt(),pt()})),xt,St=e((()=>{O(),xt=A`
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
`})),Ct,wt,Tt=e((()=>{P(),O(),i(),R(),se(),St(),Ct=class extends HTMLElement{connectedCallback(){this.hasAttribute(`role`)||this.setAttribute(`role`,`tab`),this.hasAttribute(`tabindex`)||this.setAttribute(`tabindex`,`-1`)}},wt=e=>{let{active:n,badge:r,href:i}=e,a=k();return T(()=>{e.setAttribute(`aria-selected`,n?`true`:`false`)},[n]),T(()=>{let t=()=>(a.current??e).click(),n=n=>{n.target!==e||e.hasAttribute(`disabled`)||(n.key===`Enter`&&!n.repeat&&(n.preventDefault(),t()),n.key===` `&&n.preventDefault())},r=n=>{n.target!==e||e.hasAttribute(`disabled`)||n.key===` `&&t()};return e.addEventListener(`keydown`,n),e.addEventListener(`keyup`,r),()=>{e.removeEventListener(`keydown`,n),e.removeEventListener(`keyup`,r)}},[]),t`
		<a ${j(a)} part="link" href=${L(i)}>
			<slot id="iconSlot" name="icon"></slot>
			<slot id="contentSlot"></slot>
			${r?t`<span class="badge" part="badge">${r}</span>`:o}
		</a>
	`},customElements.define(`cosmoz-tab-next`,C(wt,{baseElement:Ct,observedAttributes:[`active`,`badge`,`href`],styleSheets:[N,xt]}))})),Et,Dt,Ot=e((()=>{i(),x(),Et=class extends E{_slot;_ref;#e=()=>{!this._slot||!this._ref||(this._ref.current=this._slot.assignedElements({flatten:!0}))};#t=()=>this.#e();update(e,[t]){this._ref=t;let n=e.element;this._slot!==n&&(this._slot?.removeEventListener(`slotchange`,this.#t),this._slot=n,n.addEventListener(`slotchange`,this.#t)),this.#e()}disconnected(){this._slot?.removeEventListener(`slotchange`,this.#t),this._slot=void 0}render(e){return a}},Dt=m(Et)})),kt,At,jt,Mt,Nt=e((()=>{i(),x(),ot(),kt=(e,t,n)=>{n==null?e.removeAttribute(t):e.setAttribute(t,n)},At=(e,t)=>{for(let[n,r]of Object.entries(e))kt(t,n,at(r,t))},jt=class extends E{_slot;_attrs;#e=()=>{if(!this._slot||!this._attrs)return;let e=this._slot.assignedElements({flatten:!0});for(let t of e)At(this._attrs,t)};#t=()=>this.#e();render(e){return a}update(e,[t]){this._attrs=t;let n=e.element;return this._slot!==n&&(this._slot?.removeEventListener(`slotchange`,this.#t),this._slot=n,n.addEventListener(`slotchange`,this.#t)),this.#e(),a}disconnected(){this._slot?.removeEventListener(`slotchange`,this.#t),this._slot=void 0}},Mt=m(jt)})),Pt,Ft,It,Lt,Rt=e((()=>{i(),x(),Pt=(e,t)=>e.assignedElements({flatten:!0}).filter(t),Ft=(e,t)=>e!=null&&t!=null&&e.size===t.size&&[...t].every(t=>e.has(t)),It=class extends E{_slot;_is;_onOverflow;#e=new Map;#t;#n;#r=e=>{e.forEach(e=>{let t=e.target;this.#e.set(t,e.boundingClientRect.height>0&&e.intersectionRect.height===0)}),this.#a()};#i=e=>{this.#n?.unobserve(e),this.#n?.observe(e)};#a=()=>{if(!this._slot||!this._is)return;let e=Pt(this._slot,this._is);e.forEach(e=>{let t=this.#e.get(e)===!0;t!==e.hasAttribute(`overflowing`)&&(t?e.setAttribute(`overflowing`,``):e.removeAttribute(`overflowing`))}),this.#e.forEach((t,n)=>{e.includes(n)||(this.#e.delete(n),this.#n?.unobserve(n),n.hasAttribute(`overflowing`)&&n.removeAttribute(`overflowing`))});let t=new Set(e.filter(e=>this.#e.get(e)===!0));Ft(this.#t,t)||(this.#t=t,this._onOverflow?.(t))};#o=()=>this.#s();#s=()=>{if(!(!this.#n||!this._slot||!this._is)){for(let e of Pt(this._slot,this._is))this.#i(e);this.#a()}};render(e){return a}update(e,[t]){this._is=t.is,this._onOverflow=t.onOverflow;let n=e.element;return this._slot!==n&&(this._slot?.removeEventListener(`slotchange`,this.#o),this.#n?.disconnect(),this.#n=void 0,this._slot=n,n.addEventListener(`slotchange`,this.#o)),this.#n??=new IntersectionObserver(this.#r,{root:this._slot,threshold:[0,1]}),this.#s(),a}disconnected(){this._slot?.removeEventListener(`slotchange`,this.#o),this._slot=void 0,this.#n?.disconnect(),this.#n=void 0,this.#e.clear(),this.#t=void 0}},Lt=m(It)})),zt,Bt=e((()=>{O(),zt=e=>{let t=b(()=>({}),[]);return b(()=>Object.assign(t,e),[t,...Object.values(e)])}})),Vt,Ht,Ut=e((()=>{Bt(),O(),Vt=e=>{for(let t of e.current??[]){let e=t.matches(`[autofocus]`)?t:t.querySelector(`[autofocus]`);if(e instanceof HTMLElement){e.focus();break}}},Ht=e=>{let{placement:t=`bottom span-right`,disabled:n,passthrough:r,openOnHover:i,openOnFocus:a}=e,o=k(),[s,c]=_(`opened`,!1),l=k(),u=k(),d=zt({disabled:n,openOnHover:i}),f=S(()=>{let e=l.current?.[0];return e instanceof HTMLElement?e:void 0},[]),p=S(()=>{d.disabled||(c(!0),o.current?.showPopover?.())},[]),m=S(()=>{c(!1),o.current?.hidePopover?.()},[]),h=S(()=>{o.current?.matches(`:popover-open`)?m():p()},[]),g=S(()=>{clearTimeout(d.closeTimeout)},[]),v=S(e=>{d.disabled||e.target===f()&&(g(),p())},[]),b=S(()=>{d.disabled||(g(),p())},[]),x=S(()=>{clearTimeout(d.closeTimeout),d.closeTimeout=setTimeout(()=>{let t=o.current;d.openOnHover&&(e.matches(`:hover`)||t?.matches(`:hover`))||e.matches(`:focus-within`)||t?.matches(`:focus-within`)||m()},100)},[]),ee=S(()=>{let t=document.activeElement;for(;t?.shadowRoot;)t=t.shadowRoot.activeElement;if(!(t==null||t===document.body||t.offsetParent==null))return;let n=f();n&&(e.removeEventListener(`focusin`,v),n.focus(),e.addEventListener(`focusin`,v))},[]),C=S(t=>{let n=t.newState===`open`;c(n),n?Vt(u):ee(),e.dispatchEvent(new ToggleEvent(`dropdown-toggle`,{newState:t.newState,oldState:t.oldState,composed:!0}))},[]);return y(()=>{let e=o.current;e&&(s?e.showPopover?.():e.hidePopover?.())},[s]),y(()=>{e.toggleAttribute(`opened`,!!s)},[s]),y(()=>{if(!(!a||n))return e.addEventListener(`focusin`,v),e.addEventListener(`focusout`,x),()=>{e.removeEventListener(`focusin`,v),e.removeEventListener(`focusout`,x)}},[a,n]),y(()=>{if(!(!i||n))return e.addEventListener(`pointerenter`,b),e.addEventListener(`pointerleave`,x),()=>{e.removeEventListener(`pointerenter`,b),e.removeEventListener(`pointerleave`,x)}},[i,n]),{placement:t,disabled:n,passthrough:r,opened:s,triggers:l,content:u,popoverRef:o,handleClick:a?p:h,onToggle:C,close:m,scheduleClose:x,cancelClose:g}}})),Wt,Gt,Kt,qt=e((()=>{Ot(),Nt(),O(),i(),se(),Ut(),Wt=A`
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
`,Gt=({placement:e,disabled:n,passthrough:r,opened:i,triggers:a,content:o,popoverRef:s,handleClick:c,onToggle:l,close:u,scheduleClose:d,cancelClose:f})=>t`
		<slot
			name="button"
			${Dt(a)}
			${Mt({"aria-expanded":r?null:String(i),disabled:n&&!r?``:null})}
			@click=${c}
		></slot>
		${n&&r?t`<slot></slot>`:t`<div
					popover
					style="position-area: ${e}"
					@toggle=${l}
					@select=${u}
					@focusout=${d}
					@focusin=${f}
					${j(e=>e&&(s.current=e))}
				>
					<slot ${Dt(o)}></slot>
				</div>`}
	`,Kt=e=>Gt(Ht(e)),customElements.define(`cosmoz-dropdown-next`,C(Kt,{styleSheets:[Wt],observedAttributes:[`placement`,`disabled`,`passthrough`,`open-on-hover`,`open-on-focus`],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})),Jt=e((()=>{i(),R()})),Yt=e((()=>{i(),R()})),Xt=e((()=>{i(),R()})),Zt=e((()=>{i(),R()})),Qt=e((()=>{i(),R()})),$t=e((()=>{i(),R()})),en=e((()=>{i(),R()})),tn=e((()=>{i(),R()})),nn=e((()=>{i(),R()})),rn=e((()=>{i(),R()})),an=e((()=>{i(),R()})),on=e((()=>{i(),R()})),sn=e((()=>{i(),R()})),cn=e((()=>{i(),R()})),ln=e((()=>{i(),R()})),un=e((()=>{i(),R()})),dn=e((()=>{i(),R()})),fn=e((()=>{i(),R()})),pn=e((()=>{i(),R()})),mn=e((()=>{i(),R()})),hn=e((()=>{i(),R()})),gn=e((()=>{i(),R()})),_n=e((()=>{i(),R()})),vn=e((()=>{i(),R()})),yn=e((()=>{i(),R()})),bn=e((()=>{i(),R()})),xn=e((()=>{i(),R()})),Sn=e((()=>{i(),R()})),Cn=e((()=>{i(),R()})),wn=e((()=>{i(),R()})),Tn=e((()=>{i(),R()})),En=e((()=>{i(),R()})),Dn=e((()=>{i(),R()})),On=e((()=>{i(),R()})),kn=e((()=>{i(),R()})),An=e((()=>{i(),R()})),jn=e((()=>{i(),R()})),Mn=e((()=>{i(),R()})),Nn=e((()=>{i(),R()})),Pn=e((()=>{i(),R()})),Fn=e((()=>{i(),R()})),In=e((()=>{i(),R()})),Ln=e((()=>{i(),R()})),Rn=e((()=>{i(),R()})),zn=e((()=>{i(),R()})),Bn=e((()=>{i(),R()})),Vn=e((()=>{i(),R()})),Hn=e((()=>{i(),R()})),Un=e((()=>{i(),R()})),Wn=e((()=>{i(),R()})),Gn=e((()=>{i(),R()})),Kn=e((()=>{i(),R()})),qn=e((()=>{i(),R()})),Jn=e((()=>{i(),R()})),Yn=e((()=>{i(),R()})),Xn=e((()=>{i(),R()})),Zn=e((()=>{i(),R()})),Qn=e((()=>{i(),R()})),$n=e((()=>{i(),R()})),er=e((()=>{i(),R()})),tr=e((()=>{i(),R()})),nr=e((()=>{i(),R()})),rr=e((()=>{i(),R()})),ir=e((()=>{i(),R()})),ar=e((()=>{i(),R()})),or=e((()=>{i(),R()})),sr=e((()=>{i(),R()})),cr=e((()=>{i(),R()})),lr=e((()=>{i(),R()})),ur=e((()=>{i(),R()})),dr=e((()=>{i(),R()})),fr=e((()=>{i(),R()})),pr=e((()=>{i(),R()})),mr=e((()=>{i(),R()})),hr=e((()=>{i(),R()})),gr=e((()=>{i(),R()})),_r=e((()=>{i(),R()})),vr=e((()=>{i(),R()})),yr=e((()=>{i(),R()})),br=e((()=>{i(),R()})),xr=e((()=>{i(),R()})),Sr=e((()=>{i(),R()})),Cr=e((()=>{i(),R()})),wr=e((()=>{i(),R()})),Tr=e((()=>{i(),R()})),Er=e((()=>{i(),R()})),Dr=e((()=>{i(),R()})),Or=e((()=>{i(),R()})),kr=e((()=>{i(),R()})),Ar=e((()=>{i(),R()})),jr=e((()=>{i(),R()})),Mr=e((()=>{i(),R()})),Nr=e((()=>{i(),R()})),Pr=e((()=>{i(),R()})),Fr=e((()=>{i(),R()})),Ir=e((()=>{i(),R()})),Lr=e((()=>{i(),R()})),Rr=e((()=>{i(),R()})),zr=e((()=>{i(),R()})),Br=e((()=>{i(),R()})),Vr=e((()=>{i(),R()})),Hr=e((()=>{i(),R()})),Ur=e((()=>{i(),R()})),Wr=e((()=>{i(),R()})),Gr=e((()=>{i(),R()})),Kr=e((()=>{i(),R()})),qr=e((()=>{i(),R()})),Jr=e((()=>{i(),R()})),Yr=e((()=>{i(),R()})),Xr=e((()=>{i(),R()})),Zr=e((()=>{i(),R()})),Qr=e((()=>{i(),R()})),$r=e((()=>{i(),R()})),ei=e((()=>{i(),R()})),ti=e((()=>{i(),R()})),ni=e((()=>{i(),R()})),ri=e((()=>{i(),R()})),ii=e((()=>{i(),R()})),ai=e((()=>{i(),R()})),oi=e((()=>{i(),R()})),si=e((()=>{i(),R()})),ci=e((()=>{i(),R()})),li=e((()=>{i(),R()})),ui=e((()=>{i(),R()})),di=e((()=>{i(),R()})),fi=e((()=>{i(),R()})),pi=e((()=>{i(),R()})),mi=e((()=>{i(),R()})),hi=e((()=>{i(),R()})),gi=e((()=>{i(),R()})),_i=e((()=>{i(),R()})),vi=e((()=>{i(),R()})),yi=e((()=>{i(),R()})),bi=e((()=>{i(),R()})),xi=e((()=>{i(),R()})),Si=e((()=>{i(),R()})),Ci=e((()=>{i(),R()})),wi=e((()=>{i(),R()})),Ti=e((()=>{i(),R()})),Ei=e((()=>{i(),R()})),Di=e((()=>{i(),R()})),Oi=e((()=>{i(),R()})),ki=e((()=>{i(),R()})),Ai=e((()=>{i(),R()})),ji=e((()=>{i(),R()})),Mi=e((()=>{i(),R()})),Ni=e((()=>{i(),R()})),Pi=e((()=>{i(),R()})),Fi=e((()=>{i(),R()})),Ii=e((()=>{i(),R()})),Li=e((()=>{i(),R()})),Ri=e((()=>{i(),R()})),zi=e((()=>{i(),R()})),Bi=e((()=>{i(),R()})),Vi=e((()=>{i(),R()})),Hi=e((()=>{i(),R()})),Ui=e((()=>{i(),R()})),Wi=e((()=>{i(),R()})),Gi=e((()=>{i(),R()})),Ki=e((()=>{i(),R()})),qi=e((()=>{i(),R()})),Ji=e((()=>{i(),R()})),Yi=e((()=>{i(),R()})),Xi=e((()=>{i(),R()})),Zi=e((()=>{i(),R()})),Qi=e((()=>{i(),R()})),$i=e((()=>{i(),R()})),ea=e((()=>{i(),R()})),ta=e((()=>{i(),R()})),na=e((()=>{i(),R()})),ra=e((()=>{i(),R()})),ia=e((()=>{i(),R()})),aa=e((()=>{i(),R()})),oa=e((()=>{i(),R()})),sa=e((()=>{i(),R()})),ca=e((()=>{i(),R()})),la=e((()=>{i(),R()})),ua=e((()=>{i(),R()})),da=e((()=>{i(),R()})),fa=e((()=>{i(),R()})),pa=e((()=>{i(),R()})),ma=e((()=>{i(),R()})),ha=e((()=>{i(),R()})),ga=e((()=>{i(),R()})),_a=e((()=>{i(),R()})),va=e((()=>{i(),R()})),ya=e((()=>{i(),R()})),ba=e((()=>{i(),R()})),xa=e((()=>{i(),R()})),Sa=e((()=>{i(),R()})),Ca=e((()=>{i(),R()})),wa=e((()=>{i(),R()})),Ta=e((()=>{i(),R()})),Ea=e((()=>{i(),R()})),Da=e((()=>{i(),R()})),Oa=e((()=>{i(),R()})),ka=e((()=>{i(),R()})),Aa=e((()=>{i(),R()})),ja=e((()=>{i(),R()})),Ma=e((()=>{i(),R()})),Na=e((()=>{i(),R()})),Pa=e((()=>{i(),R()})),Fa=e((()=>{i(),R()})),Ia=e((()=>{i(),R()})),La=e((()=>{i(),R()})),Ra=e((()=>{i(),R()})),za=e((()=>{i(),R()})),Ba=e((()=>{i(),R()})),Va=e((()=>{i(),R()})),Ha=e((()=>{i(),R()})),Ua=e((()=>{i(),R()})),Wa=e((()=>{i(),R()})),Ga=e((()=>{i(),R()})),Ka=e((()=>{i(),R()})),qa=e((()=>{i(),R()})),Ja=e((()=>{i(),R()})),Ya=e((()=>{i(),R()})),Xa=e((()=>{i(),R()})),Za=e((()=>{i(),R()})),Qa=e((()=>{i(),R()})),$a=e((()=>{i(),R()})),eo=e((()=>{i(),R()})),to=e((()=>{i(),R()})),no=e((()=>{i(),R()})),ro=e((()=>{i(),R()})),io=e((()=>{i(),R()})),ao=e((()=>{i(),R()})),oo=e((()=>{i(),R()})),so=e((()=>{i(),R()})),co,lo=e((()=>{i(),R(),I(),co=({slot:e,title:r,className:i,width:a=`24`,height:o=`24`,styles:s}={})=>t`
  <svg
    slot=${L(e)}
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
    style=${L(s)}
  >
    ${F(r,()=>n`<title>${r}</title>`)}
    <path d="m6 9 6 6 6-6" />
  </svg>
`})),uo=e((()=>{i(),R()})),fo=e((()=>{i(),R()})),po=e((()=>{i(),R()})),mo=e((()=>{i(),R()})),ho=e((()=>{i(),R()})),go=e((()=>{i(),R()})),_o=e((()=>{i(),R()})),vo=e((()=>{i(),R()})),yo=e((()=>{i(),R()})),bo=e((()=>{i(),R()})),xo=e((()=>{i(),R()})),So=e((()=>{i(),R()})),Co=e((()=>{i(),R()})),wo=e((()=>{i(),R()})),To=e((()=>{i(),R()})),Eo=e((()=>{i(),R()})),Do=e((()=>{i(),R()})),Oo=e((()=>{i(),R()})),ko=e((()=>{i(),R()})),Ao=e((()=>{i(),R()})),jo=e((()=>{i(),R()})),Mo=e((()=>{i(),R()})),No=e((()=>{i(),R()})),Po=e((()=>{i(),R()})),Fo=e((()=>{i(),R()})),Io=e((()=>{i(),R()})),Lo=e((()=>{i(),R()})),Ro=e((()=>{i(),R()})),zo=e((()=>{i(),R()})),Bo=e((()=>{i(),R()})),Vo=e((()=>{i(),R()})),Ho=e((()=>{i(),R()})),Uo=e((()=>{i(),R()})),Wo=e((()=>{i(),R()})),Go=e((()=>{i(),R()})),Ko=e((()=>{i(),R()})),qo=e((()=>{i(),R()})),Jo=e((()=>{i(),R()})),Yo=e((()=>{i(),R()})),Xo=e((()=>{i(),R()})),Zo=e((()=>{i(),R()})),Qo=e((()=>{i(),R()})),$o=e((()=>{i(),R()})),es=e((()=>{i(),R()})),ts=e((()=>{i(),R()})),ns=e((()=>{i(),R()})),rs=e((()=>{i(),R()})),is=e((()=>{i(),R()})),as=e((()=>{i(),R()})),os=e((()=>{i(),R()})),ss=e((()=>{i(),R()})),cs=e((()=>{i(),R()})),ls=e((()=>{i(),R()})),us=e((()=>{i(),R()})),ds=e((()=>{i(),R()})),fs=e((()=>{i(),R()})),ps=e((()=>{i(),R()})),ms=e((()=>{i(),R()})),hs=e((()=>{i(),R()})),gs=e((()=>{i(),R()})),_s=e((()=>{i(),R()})),vs=e((()=>{i(),R()})),ys=e((()=>{i(),R()})),bs=e((()=>{i(),R()})),xs=e((()=>{i(),R()})),Ss=e((()=>{i(),R()})),Cs=e((()=>{i(),R()})),ws=e((()=>{i(),R()})),Ts=e((()=>{i(),R()})),Es=e((()=>{i(),R()})),Ds=e((()=>{i(),R()})),Os=e((()=>{i(),R()})),ks,As=e((()=>{i(),R(),I(),ks=({slot:e,title:r,className:i,width:a=`24`,height:o=`24`,styles:s}={})=>t`
  <svg
    slot=${L(e)}
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
    style=${L(s)}
  >
    ${F(r,()=>n`<title>${r}</title>`)}
    <path
      d="M12 3v18M7.8 3h8.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 3 6.12 3 7.8 3Z"
    />
  </svg>
`})),js=e((()=>{i(),R()})),Ms=e((()=>{i(),R()})),Ns=e((()=>{i(),R()})),Ps=e((()=>{i(),R()})),Fs=e((()=>{i(),R()})),Is=e((()=>{i(),R()})),Ls=e((()=>{i(),R()})),Rs=e((()=>{i(),R()})),zs=e((()=>{i(),R()})),Bs=e((()=>{i(),R()})),Vs=e((()=>{i(),R()})),Hs=e((()=>{i(),R()})),Us=e((()=>{i(),R()})),Ws=e((()=>{i(),R()})),Gs=e((()=>{i(),R()})),Ks=e((()=>{i(),R()})),qs=e((()=>{i(),R()})),Js=e((()=>{i(),R()})),Ys=e((()=>{i(),R()})),Xs=e((()=>{i(),R()})),Zs=e((()=>{i(),R()})),Qs=e((()=>{i(),R()})),$s=e((()=>{i(),R()})),ec=e((()=>{i(),R()})),tc=e((()=>{i(),R()})),nc=e((()=>{i(),R()})),rc=e((()=>{i(),R()})),ic=e((()=>{i(),R()})),ac=e((()=>{i(),R()})),oc=e((()=>{i(),R()})),sc=e((()=>{i(),R()})),cc=e((()=>{i(),R()})),lc=e((()=>{i(),R()})),uc=e((()=>{i(),R()})),dc=e((()=>{i(),R()})),fc=e((()=>{i(),R()})),pc=e((()=>{i(),R()})),mc=e((()=>{i(),R()})),hc=e((()=>{i(),R()})),gc=e((()=>{i(),R()})),_c=e((()=>{i(),R()})),vc=e((()=>{i(),R()})),yc=e((()=>{i(),R()})),bc=e((()=>{i(),R()})),xc=e((()=>{i(),R()})),Sc=e((()=>{i(),R()})),Cc=e((()=>{i(),R()})),wc=e((()=>{i(),R()})),Tc=e((()=>{i(),R()})),Ec=e((()=>{i(),R()})),Dc=e((()=>{i(),R()})),Oc=e((()=>{i(),R()})),kc=e((()=>{i(),R()})),Ac=e((()=>{i(),R()})),jc=e((()=>{i(),R()})),Mc=e((()=>{i(),R()})),Nc=e((()=>{i(),R()})),Pc=e((()=>{i(),R()})),Fc=e((()=>{i(),R()})),Ic=e((()=>{i(),R()})),Lc=e((()=>{i(),R()})),Rc=e((()=>{i(),R()})),zc=e((()=>{i(),R()})),Bc=e((()=>{i(),R()})),Vc=e((()=>{i(),R()})),Hc=e((()=>{i(),R()})),Uc=e((()=>{i(),R()})),Wc=e((()=>{i(),R()})),Gc=e((()=>{i(),R()})),Kc=e((()=>{i(),R()})),qc=e((()=>{i(),R()})),Jc=e((()=>{i(),R()})),Yc=e((()=>{i(),R()})),Xc=e((()=>{i(),R()})),Zc=e((()=>{i(),R()})),Qc=e((()=>{i(),R()})),$c=e((()=>{i(),R()})),el=e((()=>{i(),R()})),tl=e((()=>{i(),R()})),nl=e((()=>{i(),R()})),rl=e((()=>{i(),R()})),il=e((()=>{i(),R()})),al=e((()=>{i(),R()})),ol=e((()=>{i(),R()})),sl=e((()=>{i(),R()})),cl=e((()=>{i(),R()})),ll=e((()=>{i(),R()})),ul=e((()=>{i(),R()})),dl=e((()=>{i(),R()})),fl=e((()=>{i(),R()})),pl=e((()=>{i(),R()})),ml=e((()=>{i(),R()})),hl=e((()=>{i(),R()})),gl=e((()=>{i(),R()})),_l=e((()=>{i(),R()})),vl=e((()=>{i(),R()})),yl=e((()=>{i(),R()})),bl=e((()=>{i(),R()})),xl=e((()=>{i(),R()})),Sl=e((()=>{i(),R()})),Cl=e((()=>{i(),R()})),wl=e((()=>{i(),R()})),Tl=e((()=>{i(),R()})),El=e((()=>{i(),R()})),Dl=e((()=>{i(),R()})),Ol=e((()=>{i(),R()})),kl=e((()=>{i(),R()})),Al=e((()=>{i(),R()})),jl=e((()=>{i(),R()})),Ml=e((()=>{i(),R()})),Nl=e((()=>{i(),R()})),Pl=e((()=>{i(),R()})),Fl=e((()=>{i(),R()})),Il=e((()=>{i(),R()})),Ll=e((()=>{i(),R()})),Rl=e((()=>{i(),R()})),zl=e((()=>{i(),R()})),Bl=e((()=>{i(),R()})),Vl=e((()=>{i(),R()})),Hl=e((()=>{i(),R()})),Ul=e((()=>{i(),R()})),Wl=e((()=>{i(),R()})),Gl=e((()=>{i(),R()})),Kl=e((()=>{i(),R()})),ql=e((()=>{i(),R()})),Jl=e((()=>{i(),R()})),Yl=e((()=>{i(),R()})),Xl=e((()=>{i(),R()})),Zl=e((()=>{i(),R()})),Ql=e((()=>{i(),R()})),$l=e((()=>{i(),R()})),eu=e((()=>{i(),R()})),tu=e((()=>{i(),R()})),nu=e((()=>{i(),R()})),ru=e((()=>{i(),R()})),iu=e((()=>{i(),R()})),au=e((()=>{i(),R()})),ou=e((()=>{i(),R()})),su=e((()=>{i(),R()})),cu=e((()=>{i(),R()})),lu=e((()=>{i(),R()})),uu=e((()=>{i(),R()})),du=e((()=>{i(),R()})),fu=e((()=>{i(),R()})),pu=e((()=>{i(),R()})),mu=e((()=>{i(),R()})),hu=e((()=>{i(),R()})),gu=e((()=>{i(),R()})),_u=e((()=>{i(),R()})),vu=e((()=>{i(),R()})),yu=e((()=>{i(),R()})),bu=e((()=>{i(),R()})),xu=e((()=>{i(),R()})),Su=e((()=>{i(),R()})),Cu=e((()=>{i(),R()})),wu=e((()=>{i(),R()})),Tu=e((()=>{i(),R()})),Eu=e((()=>{i(),R()})),Du=e((()=>{i(),R()})),Ou=e((()=>{i(),R()})),ku=e((()=>{i(),R()})),Au=e((()=>{i(),R()})),ju=e((()=>{i(),R()})),Mu=e((()=>{i(),R()})),Nu=e((()=>{i(),R()})),Pu=e((()=>{i(),R()})),Fu=e((()=>{i(),R()})),Iu=e((()=>{i(),R()})),Lu=e((()=>{i(),R()})),Ru=e((()=>{i(),R()})),zu=e((()=>{i(),R()})),Bu=e((()=>{i(),R()})),Vu=e((()=>{i(),R()})),Hu=e((()=>{i(),R()})),Uu=e((()=>{i(),R()})),Wu=e((()=>{i(),R()})),Gu=e((()=>{i(),R()})),Ku=e((()=>{i(),R()})),qu=e((()=>{i(),R()})),Ju=e((()=>{i(),R()})),Yu=e((()=>{i(),R()})),Xu=e((()=>{i(),R()})),Zu=e((()=>{i(),R()})),Qu=e((()=>{i(),R()})),$u=e((()=>{i(),R()})),ed=e((()=>{i(),R()})),td=e((()=>{i(),R()})),nd=e((()=>{i(),R()})),rd=e((()=>{i(),R()})),id=e((()=>{i(),R()})),ad=e((()=>{i(),R()})),od=e((()=>{i(),R()})),sd=e((()=>{i(),R()})),cd=e((()=>{i(),R()})),ld=e((()=>{i(),R()})),ud=e((()=>{i(),R()})),dd=e((()=>{i(),R()})),fd=e((()=>{i(),R()})),pd=e((()=>{i(),R()})),md=e((()=>{i(),R()})),hd=e((()=>{i(),R()})),gd=e((()=>{i(),R()})),_d=e((()=>{i(),R()})),vd=e((()=>{i(),R()})),yd=e((()=>{i(),R()})),bd=e((()=>{i(),R()})),xd=e((()=>{i(),R()})),Sd=e((()=>{i(),R()})),Cd=e((()=>{i(),R()})),wd=e((()=>{i(),R()})),Td=e((()=>{i(),R()})),Ed=e((()=>{i(),R()})),Dd=e((()=>{i(),R()})),Od=e((()=>{i(),R()})),kd=e((()=>{i(),R()})),Ad=e((()=>{i(),R()})),jd=e((()=>{i(),R()})),Md=e((()=>{i(),R()})),Nd=e((()=>{i(),R()})),Pd=e((()=>{i(),R()})),Fd=e((()=>{i(),R()})),Id=e((()=>{i(),R()})),Ld=e((()=>{i(),R()})),Rd=e((()=>{i(),R()})),zd=e((()=>{i(),R()})),Bd=e((()=>{i(),R()})),Vd=e((()=>{i(),R()})),Hd=e((()=>{i(),R()})),Ud=e((()=>{i(),R()})),Wd=e((()=>{i(),R()})),Gd=e((()=>{i(),R()})),Kd=e((()=>{i(),R()})),qd=e((()=>{i(),R()})),Jd=e((()=>{i(),R()})),Yd=e((()=>{i(),R()})),Xd=e((()=>{i(),R()})),Zd=e((()=>{i(),R()})),Qd=e((()=>{i(),R()})),$d=e((()=>{i(),R()})),ef=e((()=>{i(),R()})),tf=e((()=>{i(),R()})),nf=e((()=>{i(),R()})),rf=e((()=>{i(),R()})),af=e((()=>{i(),R()})),of=e((()=>{i(),R()})),sf=e((()=>{i(),R()})),cf=e((()=>{i(),R()})),lf=e((()=>{i(),R()})),uf=e((()=>{i(),R()})),df=e((()=>{i(),R()})),ff=e((()=>{i(),R()})),pf=e((()=>{i(),R()})),mf=e((()=>{i(),R()})),hf=e((()=>{i(),R()})),gf=e((()=>{i(),R()})),_f=e((()=>{i(),R()})),vf=e((()=>{i(),R()})),yf=e((()=>{i(),R()})),bf=e((()=>{i(),R()})),xf=e((()=>{i(),R()})),Sf=e((()=>{i(),R()})),Cf=e((()=>{i(),R()})),wf=e((()=>{i(),R()})),Tf=e((()=>{i(),R()})),Ef=e((()=>{i(),R()})),Df=e((()=>{i(),R()})),Of=e((()=>{i(),R()})),kf=e((()=>{i(),R()})),Af=e((()=>{i(),R()})),jf=e((()=>{i(),R()})),Mf=e((()=>{i(),R()})),Nf=e((()=>{i(),R()})),Pf=e((()=>{i(),R()})),Ff=e((()=>{i(),R()})),If=e((()=>{i(),R()})),Lf=e((()=>{i(),R()})),Rf=e((()=>{i(),R()})),zf=e((()=>{i(),R()})),Bf=e((()=>{i(),R()})),Vf=e((()=>{i(),R()})),Hf=e((()=>{i(),R()})),Uf=e((()=>{i(),R()})),Wf=e((()=>{i(),R()})),Gf=e((()=>{i(),R()})),Kf=e((()=>{i(),R()})),qf=e((()=>{i(),R()})),Jf=e((()=>{i(),R()})),Yf=e((()=>{i(),R()})),Xf=e((()=>{i(),R()})),Zf=e((()=>{i(),R()})),Qf=e((()=>{i(),R()})),$f=e((()=>{i(),R()})),ep=e((()=>{i(),R()})),tp=e((()=>{i(),R()})),np=e((()=>{i(),R()})),rp=e((()=>{i(),R()})),ip=e((()=>{i(),R()})),ap=e((()=>{i(),R()})),op=e((()=>{i(),R()})),sp=e((()=>{i(),R()})),cp=e((()=>{i(),R()})),lp=e((()=>{i(),R()})),up=e((()=>{i(),R()})),dp=e((()=>{i(),R()})),fp=e((()=>{i(),R()})),pp=e((()=>{i(),R()})),mp=e((()=>{i(),R()})),hp=e((()=>{i(),R()})),gp=e((()=>{i(),R()})),_p=e((()=>{i(),R()})),vp=e((()=>{i(),R()})),yp=e((()=>{i(),R()})),bp=e((()=>{i(),R()})),xp=e((()=>{i(),R()})),Sp=e((()=>{i(),R()})),Cp=e((()=>{i(),R()})),wp=e((()=>{i(),R()})),Tp=e((()=>{i(),R()})),Ep=e((()=>{i(),R()})),Dp=e((()=>{i(),R()})),Op=e((()=>{i(),R()})),kp=e((()=>{i(),R()})),Ap=e((()=>{i(),R()})),jp=e((()=>{i(),R()})),Mp=e((()=>{i(),R()})),Np=e((()=>{i(),R()})),Pp=e((()=>{i(),R()})),Fp=e((()=>{i(),R()})),Ip=e((()=>{i(),R()})),Lp=e((()=>{i(),R()})),Rp=e((()=>{i(),R()})),zp=e((()=>{i(),R()})),Bp=e((()=>{i(),R()})),Vp=e((()=>{i(),R()})),Hp=e((()=>{i(),R()})),Up=e((()=>{i(),R()})),Wp=e((()=>{i(),R()})),Gp=e((()=>{i(),R()})),Kp=e((()=>{i(),R()})),qp=e((()=>{i(),R()})),Jp=e((()=>{i(),R()})),Yp=e((()=>{i(),R()})),Xp=e((()=>{i(),R()})),Zp=e((()=>{i(),R()})),Qp=e((()=>{i(),R()})),$p=e((()=>{i(),R()})),em=e((()=>{i(),R()})),tm=e((()=>{i(),R()})),nm=e((()=>{i(),R()})),rm=e((()=>{i(),R()})),im=e((()=>{i(),R()})),am=e((()=>{i(),R()})),om=e((()=>{i(),R()})),sm=e((()=>{i(),R()})),cm=e((()=>{i(),R()})),lm=e((()=>{i(),R()})),um=e((()=>{i(),R()})),dm=e((()=>{i(),R()})),fm=e((()=>{i(),R()})),pm=e((()=>{i(),R()})),mm=e((()=>{i(),R()})),hm=e((()=>{i(),R()})),gm=e((()=>{i(),R()})),_m=e((()=>{i(),R()})),vm=e((()=>{i(),R()})),ym=e((()=>{i(),R()})),bm=e((()=>{i(),R()})),xm=e((()=>{i(),R()})),Sm=e((()=>{i(),R()})),Cm=e((()=>{i(),R()})),wm=e((()=>{i(),R()})),Tm=e((()=>{i(),R()})),Em=e((()=>{i(),R()})),Dm=e((()=>{i(),R()})),Om=e((()=>{i(),R()})),km=e((()=>{i(),R()})),Am=e((()=>{i(),R()})),jm=e((()=>{i(),R()})),Mm=e((()=>{i(),R()})),Nm=e((()=>{i(),R()})),Pm=e((()=>{i(),R()})),Fm=e((()=>{i(),R()})),Im=e((()=>{i(),R()})),Lm=e((()=>{i(),R()})),Rm=e((()=>{i(),R()})),zm=e((()=>{i(),R()})),Bm=e((()=>{i(),R()})),Vm,Hm=e((()=>{i(),R(),I(),Vm=({slot:e,title:r,className:i,width:a=`24`,height:o=`24`,styles:s}={})=>t`
  <svg
    slot=${L(e)}
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
    style=${L(s)}
  >
    ${F(r,()=>n`<title>${r}</title>`)}
    <path
      d="M21 12H9m12-6H9m12 12H9m-4-6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0-6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
    />
  </svg>
`})),Um=e((()=>{i(),R()})),Wm=e((()=>{i(),R()})),Gm=e((()=>{i(),R()})),Km=e((()=>{i(),R()})),qm=e((()=>{i(),R()})),Jm=e((()=>{i(),R()})),Ym=e((()=>{i(),R()})),Xm=e((()=>{i(),R()})),Zm=e((()=>{i(),R()})),Qm=e((()=>{i(),R()})),$m=e((()=>{i(),R()})),eh=e((()=>{i(),R()})),th=e((()=>{i(),R()})),nh=e((()=>{i(),R()})),rh=e((()=>{i(),R()})),ih=e((()=>{i(),R()})),ah=e((()=>{i(),R()})),oh=e((()=>{i(),R()})),sh=e((()=>{i(),R()})),ch=e((()=>{i(),R()})),lh=e((()=>{i(),R()})),uh=e((()=>{i(),R()})),dh=e((()=>{i(),R()})),fh=e((()=>{i(),R()})),ph=e((()=>{i(),R()})),mh=e((()=>{i(),R()})),hh=e((()=>{i(),R()})),gh=e((()=>{i(),R()})),_h=e((()=>{i(),R()})),vh=e((()=>{i(),R()})),yh=e((()=>{i(),R()})),bh=e((()=>{i(),R()})),xh=e((()=>{i(),R()})),Sh=e((()=>{i(),R()})),Ch=e((()=>{i(),R()})),wh=e((()=>{i(),R()})),Th=e((()=>{i(),R()})),Eh=e((()=>{i(),R()})),Dh=e((()=>{i(),R()})),Oh=e((()=>{i(),R()})),kh=e((()=>{i(),R()})),Ah=e((()=>{i(),R()})),jh=e((()=>{i(),R()})),Mh=e((()=>{i(),R()})),Nh=e((()=>{i(),R()})),Ph=e((()=>{i(),R()})),Fh=e((()=>{i(),R()})),Ih=e((()=>{i(),R()})),Lh=e((()=>{i(),R()})),Rh=e((()=>{i(),R()})),zh=e((()=>{i(),R()})),Bh=e((()=>{i(),R()})),Vh=e((()=>{i(),R()})),Hh=e((()=>{i(),R()})),Uh=e((()=>{i(),R()})),Wh=e((()=>{i(),R()})),Gh=e((()=>{i(),R()})),Kh=e((()=>{i(),R()})),qh=e((()=>{i(),R()})),Jh=e((()=>{i(),R()})),Yh=e((()=>{i(),R()})),Xh=e((()=>{i(),R()})),Zh=e((()=>{i(),R()})),Qh=e((()=>{i(),R()})),$h=e((()=>{i(),R()})),eg=e((()=>{i(),R()})),tg=e((()=>{i(),R()})),ng=e((()=>{i(),R()})),rg=e((()=>{i(),R()})),ig=e((()=>{i(),R()})),ag=e((()=>{i(),R()})),og=e((()=>{i(),R()})),sg=e((()=>{i(),R()})),cg=e((()=>{i(),R()})),lg=e((()=>{i(),R()})),ug=e((()=>{i(),R()})),dg=e((()=>{i(),R()})),fg=e((()=>{i(),R()})),pg=e((()=>{i(),R()})),mg=e((()=>{i(),R()})),hg=e((()=>{i(),R()})),gg=e((()=>{i(),R()})),_g=e((()=>{i(),R()})),vg=e((()=>{i(),R()})),yg=e((()=>{i(),R()})),bg=e((()=>{i(),R()})),xg=e((()=>{i(),R()})),Sg=e((()=>{i(),R()})),Cg=e((()=>{i(),R()})),wg=e((()=>{i(),R()})),Tg=e((()=>{i(),R()})),Eg=e((()=>{i(),R()})),Dg=e((()=>{i(),R()})),Og=e((()=>{i(),R()})),kg=e((()=>{i(),R()})),Ag=e((()=>{i(),R()})),jg=e((()=>{i(),R()})),Mg=e((()=>{i(),R()})),Ng=e((()=>{i(),R()})),Pg=e((()=>{i(),R()})),Fg=e((()=>{i(),R()})),Ig=e((()=>{i(),R()})),Lg=e((()=>{i(),R()})),Rg=e((()=>{i(),R()})),zg=e((()=>{i(),R()})),Bg=e((()=>{i(),R()})),Vg=e((()=>{i(),R()})),Hg=e((()=>{i(),R()})),Ug=e((()=>{i(),R()})),Wg=e((()=>{i(),R()})),Gg=e((()=>{i(),R()})),Kg=e((()=>{i(),R()})),qg=e((()=>{i(),R()})),Jg=e((()=>{i(),R()})),Yg=e((()=>{i(),R()})),Xg=e((()=>{i(),R()})),Zg=e((()=>{i(),R()})),Qg=e((()=>{i(),R()})),$g=e((()=>{i(),R()})),e_=e((()=>{i(),R()})),t_=e((()=>{i(),R()})),n_=e((()=>{i(),R()})),r_=e((()=>{i(),R()})),i_=e((()=>{i(),R()})),a_=e((()=>{i(),R()})),o_=e((()=>{i(),R()})),s_=e((()=>{i(),R()})),c_=e((()=>{i(),R()})),l_=e((()=>{i(),R()})),u_=e((()=>{i(),R()})),d_=e((()=>{i(),R()})),f_=e((()=>{i(),R()})),p_=e((()=>{i(),R()})),m_=e((()=>{i(),R()})),h_=e((()=>{i(),R()})),g_=e((()=>{i(),R()})),__=e((()=>{i(),R()})),v_=e((()=>{i(),R()})),y_=e((()=>{i(),R()})),b_=e((()=>{i(),R()})),x_=e((()=>{i(),R()})),S_=e((()=>{i(),R()})),C_=e((()=>{i(),R()})),w_=e((()=>{i(),R()})),T_=e((()=>{i(),R()})),E_=e((()=>{i(),R()})),D_=e((()=>{i(),R()})),O_=e((()=>{i(),R()})),k_=e((()=>{i(),R()})),A_=e((()=>{i(),R()})),j_=e((()=>{i(),R()})),M_=e((()=>{i(),R()})),N_=e((()=>{i(),R()})),P_=e((()=>{i(),R()})),F_=e((()=>{i(),R()})),I_=e((()=>{i(),R()})),L_=e((()=>{i(),R()})),R_=e((()=>{i(),R()})),z_=e((()=>{i(),R()})),B_=e((()=>{i(),R()})),V_=e((()=>{i(),R()})),H_=e((()=>{i(),R()})),U_=e((()=>{i(),R()})),W_=e((()=>{i(),R()})),G_=e((()=>{i(),R()})),K_=e((()=>{i(),R()})),q_=e((()=>{i(),R()})),J_=e((()=>{i(),R()})),Y_=e((()=>{i(),R()})),X_=e((()=>{i(),R()})),Z_=e((()=>{i(),R()})),Q_=e((()=>{i(),R()})),$_=e((()=>{i(),R()})),ev=e((()=>{i(),R()})),tv=e((()=>{i(),R()})),nv=e((()=>{i(),R()})),rv=e((()=>{i(),R()})),iv=e((()=>{i(),R()})),av=e((()=>{i(),R()})),ov=e((()=>{i(),R()})),sv=e((()=>{i(),R()})),cv=e((()=>{i(),R()})),lv=e((()=>{i(),R()})),uv=e((()=>{i(),R()})),dv=e((()=>{i(),R()})),fv=e((()=>{i(),R()})),pv=e((()=>{i(),R()})),mv=e((()=>{i(),R()})),hv=e((()=>{i(),R()})),gv=e((()=>{i(),R()})),_v=e((()=>{i(),R()})),vv=e((()=>{i(),R()})),yv=e((()=>{i(),R()})),bv=e((()=>{i(),R()})),xv=e((()=>{i(),R()})),Sv=e((()=>{i(),R()})),Cv=e((()=>{i(),R()})),wv=e((()=>{i(),R()})),Tv=e((()=>{i(),R()})),Ev=e((()=>{i(),R()})),Dv=e((()=>{i(),R()})),Ov=e((()=>{i(),R()})),kv=e((()=>{i(),R()})),Av=e((()=>{i(),R()})),jv=e((()=>{i(),R()})),Mv=e((()=>{i(),R()})),Nv=e((()=>{i(),R()})),Pv=e((()=>{i(),R()})),Fv=e((()=>{i(),R()})),Iv=e((()=>{i(),R()})),Lv=e((()=>{i(),R()})),Rv=e((()=>{i(),R()})),zv=e((()=>{i(),R()})),Bv=e((()=>{i(),R()})),Vv=e((()=>{i(),R()})),Hv=e((()=>{i(),R()})),Uv=e((()=>{i(),R()})),Wv=e((()=>{i(),R()})),Gv=e((()=>{i(),R()})),Kv=e((()=>{i(),R()})),qv=e((()=>{i(),R()})),Jv=e((()=>{i(),R()})),Yv=e((()=>{i(),R()})),Xv=e((()=>{i(),R()})),Zv=e((()=>{i(),R()})),Qv=e((()=>{i(),R()})),$v=e((()=>{i(),R()})),ey=e((()=>{i(),R()})),ty=e((()=>{i(),R()})),ny=e((()=>{i(),R()})),ry=e((()=>{i(),R()})),iy=e((()=>{i(),R()})),ay=e((()=>{i(),R()})),oy=e((()=>{i(),R()})),sy=e((()=>{i(),R()})),cy=e((()=>{i(),R()})),ly=e((()=>{i(),R()})),uy=e((()=>{i(),R()})),dy=e((()=>{i(),R()})),fy=e((()=>{i(),R()})),py=e((()=>{i(),R()})),my=e((()=>{i(),R()})),hy=e((()=>{i(),R()})),gy=e((()=>{i(),R()})),_y=e((()=>{i(),R()})),vy=e((()=>{i(),R()})),yy=e((()=>{i(),R()})),by=e((()=>{i(),R()})),xy=e((()=>{i(),R()})),Sy=e((()=>{i(),R()})),Cy=e((()=>{i(),R()})),wy=e((()=>{i(),R()})),Ty=e((()=>{i(),R()})),Ey=e((()=>{i(),R()})),Dy=e((()=>{i(),R()})),Oy=e((()=>{i(),R()})),ky=e((()=>{i(),R()})),Ay=e((()=>{i(),R()})),jy=e((()=>{i(),R()})),My=e((()=>{i(),R()})),Ny=e((()=>{i(),R()})),Py=e((()=>{i(),R()})),Fy=e((()=>{i(),R()})),Iy=e((()=>{i(),R()})),Ly=e((()=>{i(),R()})),Ry=e((()=>{i(),R()})),zy=e((()=>{i(),R()})),By=e((()=>{i(),R()})),Vy=e((()=>{i(),R()})),Hy=e((()=>{i(),R()})),Uy=e((()=>{i(),R()})),Wy=e((()=>{i(),R()})),Gy=e((()=>{i(),R()})),Ky=e((()=>{i(),R()})),qy=e((()=>{i(),R()})),Jy=e((()=>{i(),R()})),Yy=e((()=>{i(),R()})),Xy=e((()=>{i(),R()})),Zy=e((()=>{i(),R()})),Qy=e((()=>{i(),R()})),$y=e((()=>{i(),R()})),eb=e((()=>{i(),R()})),tb=e((()=>{i(),R()})),nb=e((()=>{i(),R()})),rb=e((()=>{i(),R()})),ib=e((()=>{i(),R()})),ab=e((()=>{i(),R()})),ob=e((()=>{i(),R()})),sb=e((()=>{i(),R()})),cb=e((()=>{i(),R()})),lb=e((()=>{i(),R()})),ub=e((()=>{i(),R()})),db=e((()=>{i(),R()})),fb=e((()=>{i(),R()})),pb=e((()=>{i(),R()})),mb=e((()=>{i(),R()})),hb=e((()=>{i(),R()})),gb=e((()=>{i(),R()})),_b=e((()=>{i(),R()})),vb=e((()=>{i(),R()})),yb=e((()=>{i(),R()})),bb=e((()=>{i(),R()})),xb=e((()=>{i(),R()})),Sb=e((()=>{i(),R()})),Cb=e((()=>{i(),R()})),wb=e((()=>{i(),R()})),Tb=e((()=>{i(),R()})),Eb,Db=e((()=>{i(),R(),I(),Eb=({slot:e,title:r,className:i,width:a=`24`,height:o=`24`,styles:s}={})=>t`
  <svg
    slot=${L(e)}
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
    style=${L(s)}
  >
    ${F(r,()=>n`<title>${r}</title>`)}
    <path
      d="M3 7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 3 6.12 3 7.8 3h8.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V7.8Z"
    />
  </svg>
`})),Ob=e((()=>{i(),R()})),kb=e((()=>{i(),R()})),Ab=e((()=>{i(),R()})),jb=e((()=>{i(),R()})),Mb=e((()=>{i(),R()})),Nb=e((()=>{i(),R()})),Pb=e((()=>{i(),R()})),Fb=e((()=>{i(),R()})),Ib=e((()=>{i(),R()})),Lb=e((()=>{i(),R()})),Rb=e((()=>{i(),R()})),zb=e((()=>{i(),R()})),Bb=e((()=>{i(),R()})),Vb=e((()=>{i(),R()})),Hb=e((()=>{i(),R()})),Ub=e((()=>{i(),R()})),Wb=e((()=>{i(),R()})),Gb=e((()=>{i(),R()})),Kb=e((()=>{i(),R()})),qb=e((()=>{i(),R()})),Jb=e((()=>{i(),R()})),Yb=e((()=>{i(),R()})),Xb=e((()=>{i(),R()})),Zb=e((()=>{i(),R()})),Qb=e((()=>{i(),R()})),$b=e((()=>{i(),R()})),ex=e((()=>{i(),R()})),tx=e((()=>{i(),R()})),nx=e((()=>{i(),R()})),rx=e((()=>{i(),R()})),ix=e((()=>{i(),R()})),ax=e((()=>{i(),R()})),ox=e((()=>{i(),R()})),sx=e((()=>{i(),R()})),cx=e((()=>{i(),R()})),lx=e((()=>{i(),R()})),ux=e((()=>{i(),R()})),dx=e((()=>{i(),R()})),fx=e((()=>{i(),R()})),px=e((()=>{i(),R()})),mx=e((()=>{i(),R()})),hx=e((()=>{i(),R()})),gx=e((()=>{i(),R()})),_x=e((()=>{i(),R()})),vx=e((()=>{i(),R()})),yx=e((()=>{i(),R()})),bx=e((()=>{i(),R()})),xx=e((()=>{i(),R()})),Sx=e((()=>{i(),R()})),Cx=e((()=>{i(),R()})),wx=e((()=>{i(),R()})),Tx=e((()=>{i(),R()})),Ex=e((()=>{i(),R()})),Dx=e((()=>{i(),R()})),Ox=e((()=>{i(),R()})),kx=e((()=>{i(),R()})),Ax=e((()=>{i(),R()})),jx=e((()=>{i(),R()})),Mx=e((()=>{i(),R()})),Nx=e((()=>{i(),R()})),Px=e((()=>{i(),R()})),Fx=e((()=>{i(),R()})),Ix=e((()=>{i(),R()})),Lx=e((()=>{i(),R()})),Rx=e((()=>{i(),R()})),zx=e((()=>{i(),R()})),Bx=e((()=>{i(),R()})),Vx=e((()=>{i(),R()})),Hx=e((()=>{i(),R()})),Ux=e((()=>{i(),R()})),Wx=e((()=>{i(),R()})),Gx=e((()=>{i(),R()})),Kx=e((()=>{i(),R()})),qx=e((()=>{i(),R()})),Jx=e((()=>{i(),R()})),Yx=e((()=>{i(),R()})),Xx=e((()=>{i(),R()})),Zx=e((()=>{i(),R()})),Qx=e((()=>{i(),R()})),$x=e((()=>{i(),R()})),eS=e((()=>{i(),R()})),tS=e((()=>{i(),R()})),nS=e((()=>{i(),R()})),rS=e((()=>{i(),R()})),iS=e((()=>{i(),R()})),aS=e((()=>{i(),R()})),oS=e((()=>{i(),R()})),sS=e((()=>{i(),R()})),cS=e((()=>{i(),R()})),lS=e((()=>{i(),R()})),uS=e((()=>{i(),R()})),dS=e((()=>{i(),R()})),fS=e((()=>{i(),R()})),pS=e((()=>{i(),R()})),mS=e((()=>{i(),R()})),hS=e((()=>{i(),R()})),gS=e((()=>{i(),R()})),_S=e((()=>{i(),R()})),vS=e((()=>{i(),R()})),yS=e((()=>{i(),R()})),bS=e((()=>{i(),R()})),xS=e((()=>{i(),R()})),SS=e((()=>{i(),R()})),CS=e((()=>{i(),R()})),wS=e((()=>{i(),R()})),TS=e((()=>{i(),R()})),ES=e((()=>{i(),R()})),DS=e((()=>{i(),R()})),OS=e((()=>{i(),R()})),kS=e((()=>{i(),R()})),AS=e((()=>{i(),R()})),jS=e((()=>{i(),R()})),MS=e((()=>{i(),R()})),NS=e((()=>{i(),R()})),PS=e((()=>{i(),R()})),FS=e((()=>{i(),R()})),IS=e((()=>{i(),R()})),LS=e((()=>{i(),R()})),RS=e((()=>{i(),R()})),zS=e((()=>{i(),R()})),BS=e((()=>{i(),R()})),VS=e((()=>{i(),R()})),HS=e((()=>{i(),R()})),US=e((()=>{i(),R()})),WS=e((()=>{i(),R()})),GS=e((()=>{i(),R()})),KS=e((()=>{i(),R()})),qS=e((()=>{i(),R()})),JS=e((()=>{i(),R()})),YS=e((()=>{i(),R()})),XS=e((()=>{i(),R()})),ZS=e((()=>{i(),R()})),QS=e((()=>{i(),R()})),$S=e((()=>{i(),R()})),eC=e((()=>{i(),R()})),tC=e((()=>{i(),R()})),nC=e((()=>{i(),R()})),rC=e((()=>{i(),R()})),iC=e((()=>{i(),R()})),aC=e((()=>{i(),R()})),oC=e((()=>{i(),R()})),sC=e((()=>{i(),R()})),cC=e((()=>{i(),R()})),lC=e((()=>{i(),R()})),uC=e((()=>{i(),R()})),dC=e((()=>{i(),R()})),fC=e((()=>{i(),R()})),pC=e((()=>{i(),R()})),mC=e((()=>{i(),R()})),hC=e((()=>{i(),R()})),gC=e((()=>{i(),R()})),_C=e((()=>{i(),R()})),vC=e((()=>{i(),R()})),yC=e((()=>{i(),R()})),bC=e((()=>{i(),R()})),xC=e((()=>{i(),R()})),SC=e((()=>{i(),R()})),CC=e((()=>{i(),R()})),wC=e((()=>{i(),R()})),TC=e((()=>{i(),R()})),EC=e((()=>{i(),R()})),DC=e((()=>{i(),R()})),OC=e((()=>{i(),R()})),kC=e((()=>{i(),R()})),AC=e((()=>{i(),R()})),jC=e((()=>{i(),R()})),MC=e((()=>{i(),R()})),NC=e((()=>{i(),R()})),PC=e((()=>{i(),R()})),FC=e((()=>{i(),R()})),IC=e((()=>{i(),R()})),LC=e((()=>{i(),R()})),RC=e((()=>{i(),R()})),zC=e((()=>{i(),R()})),BC=e((()=>{Jt(),Yt(),Xt(),Zt(),Qt(),$t(),en(),tn(),nn(),rn(),an(),on(),sn(),cn(),ln(),un(),dn(),fn(),pn(),mn(),hn(),gn(),_n(),vn(),yn(),bn(),xn(),Sn(),Cn(),wn(),Tn(),En(),Dn(),On(),kn(),An(),jn(),Mn(),Nn(),Pn(),Fn(),In(),Ln(),Rn(),zn(),Bn(),Vn(),Hn(),Un(),Wn(),Gn(),Kn(),qn(),Jn(),Yn(),Xn(),Zn(),Qn(),$n(),er(),tr(),nr(),rr(),ir(),ar(),or(),sr(),cr(),lr(),ur(),dr(),fr(),pr(),mr(),hr(),gr(),_r(),vr(),yr(),br(),xr(),Sr(),Cr(),wr(),Tr(),Er(),Dr(),Or(),kr(),Ar(),jr(),Mr(),Nr(),Pr(),Fr(),Ir(),Lr(),Rr(),zr(),Br(),Vr(),Hr(),Ur(),Wr(),Gr(),Kr(),qr(),Jr(),Yr(),Xr(),Zr(),Qr(),$r(),ei(),ti(),ni(),ri(),ii(),ai(),oi(),si(),ci(),li(),ui(),di(),fi(),pi(),mi(),hi(),gi(),_i(),vi(),yi(),bi(),xi(),Si(),Ci(),wi(),Ti(),Ei(),Di(),Oi(),ki(),Ai(),ji(),Mi(),Ni(),Pi(),Fi(),Ii(),Li(),Ri(),zi(),Bi(),Vi(),Hi(),Ui(),Wi(),Gi(),Ki(),qi(),Ji(),Yi(),Xi(),Zi(),Qi(),$i(),ea(),ta(),na(),ra(),ia(),aa(),oa(),sa(),ca(),la(),ua(),da(),fa(),pa(),ma(),ha(),ga(),_a(),va(),ya(),ba(),xa(),Sa(),Ca(),wa(),Ta(),Ea(),Da(),Oa(),ka(),Aa(),ja(),Ma(),Na(),Pa(),Fa(),Ia(),La(),Ra(),za(),Ba(),Va(),Ha(),Ua(),Wa(),Ga(),Ka(),qa(),Ja(),Ya(),Xa(),Za(),Qa(),$a(),eo(),to(),no(),ro(),io(),ao(),oo(),so(),lo(),uo(),fo(),po(),mo(),ho(),go(),_o(),vo(),yo(),bo(),xo(),So(),Co(),wo(),To(),Eo(),Do(),Oo(),ko(),Ao(),jo(),Mo(),No(),Po(),Fo(),Io(),Lo(),Ro(),zo(),Bo(),Vo(),Ho(),Uo(),Wo(),Go(),Ko(),qo(),Jo(),Yo(),Xo(),Zo(),Qo(),$o(),es(),ts(),ns(),rs(),is(),as(),os(),ss(),cs(),ls(),us(),ds(),fs(),ps(),ms(),hs(),gs(),_s(),vs(),ys(),bs(),xs(),Ss(),Cs(),ws(),Ts(),Es(),Ds(),Os(),As(),js(),Ms(),Ns(),Ps(),Fs(),Is(),Ls(),Rs(),zs(),Bs(),Vs(),Hs(),Us(),Ws(),Gs(),Ks(),qs(),Js(),Ys(),Xs(),Zs(),Qs(),$s(),ec(),tc(),nc(),rc(),ic(),ac(),oc(),sc(),cc(),lc(),uc(),dc(),fc(),pc(),mc(),hc(),gc(),_c(),vc(),yc(),bc(),xc(),Sc(),Cc(),wc(),Tc(),Ec(),Dc(),Oc(),kc(),Ac(),jc(),Mc(),Nc(),Pc(),Fc(),Ic(),Lc(),Rc(),zc(),Bc(),Vc(),Hc(),Uc(),Wc(),Gc(),Kc(),qc(),Jc(),Yc(),Xc(),Zc(),Qc(),$c(),el(),tl(),nl(),rl(),il(),al(),ol(),sl(),cl(),ll(),ul(),dl(),fl(),pl(),ml(),hl(),gl(),_l(),vl(),yl(),bl(),xl(),Sl(),Cl(),wl(),Tl(),El(),Dl(),Ol(),kl(),Al(),jl(),Ml(),Nl(),Pl(),Fl(),Il(),Ll(),Rl(),zl(),Bl(),Vl(),Hl(),Ul(),Wl(),Gl(),Kl(),ql(),Jl(),Yl(),Xl(),Zl(),Ql(),$l(),eu(),tu(),nu(),ru(),iu(),au(),ou(),su(),cu(),lu(),uu(),du(),fu(),pu(),mu(),hu(),gu(),_u(),vu(),yu(),bu(),xu(),Su(),Cu(),wu(),Tu(),Eu(),Du(),Ou(),ku(),Au(),ju(),Mu(),Nu(),Pu(),Fu(),Iu(),Lu(),Ru(),zu(),Bu(),Vu(),Hu(),Uu(),Wu(),Gu(),Ku(),qu(),Ju(),Yu(),Xu(),Zu(),Qu(),$u(),ed(),td(),nd(),rd(),id(),ad(),od(),sd(),cd(),ld(),ud(),dd(),fd(),pd(),md(),hd(),gd(),_d(),vd(),yd(),bd(),xd(),Sd(),Cd(),wd(),Td(),Ed(),Dd(),Od(),kd(),Ad(),jd(),Md(),Nd(),Pd(),Fd(),Id(),Ld(),Rd(),zd(),Bd(),Vd(),Hd(),Ud(),Wd(),Gd(),Kd(),qd(),Jd(),Yd(),Xd(),Zd(),Qd(),$d(),ef(),tf(),nf(),rf(),af(),of(),sf(),cf(),lf(),uf(),df(),ff(),pf(),mf(),hf(),gf(),_f(),vf(),yf(),bf(),xf(),Sf(),Cf(),wf(),Tf(),Ef(),Df(),Of(),kf(),Af(),jf(),Mf(),Nf(),Pf(),Ff(),If(),Lf(),Rf(),zf(),Bf(),Vf(),Hf(),Uf(),Wf(),Gf(),Kf(),qf(),Jf(),Yf(),Xf(),Zf(),Qf(),$f(),ep(),tp(),np(),rp(),ip(),ap(),op(),sp(),cp(),lp(),up(),dp(),fp(),pp(),mp(),hp(),gp(),_p(),vp(),yp(),bp(),xp(),Sp(),Cp(),wp(),Tp(),Ep(),Dp(),Op(),kp(),Ap(),jp(),Mp(),Np(),Pp(),Fp(),Ip(),Lp(),Rp(),zp(),Bp(),Vp(),Hp(),Up(),Wp(),Gp(),Kp(),qp(),Jp(),Yp(),Xp(),Zp(),Qp(),$p(),em(),tm(),nm(),rm(),im(),am(),om(),sm(),cm(),lm(),um(),dm(),fm(),pm(),mm(),hm(),gm(),_m(),vm(),ym(),bm(),xm(),Sm(),Cm(),wm(),Tm(),Em(),Dm(),Om(),km(),Am(),jm(),Mm(),Nm(),Pm(),Fm(),Im(),Lm(),Rm(),zm(),Bm(),Hm(),Um(),Wm(),Gm(),Km(),qm(),Jm(),Ym(),Xm(),Zm(),Qm(),$m(),eh(),th(),nh(),rh(),ih(),ah(),oh(),sh(),ch(),lh(),uh(),dh(),fh(),ph(),mh(),hh(),gh(),_h(),vh(),yh(),bh(),xh(),Sh(),Ch(),wh(),Th(),Eh(),Dh(),Oh(),kh(),Ah(),jh(),Mh(),Nh(),Ph(),Fh(),Ih(),Lh(),Rh(),zh(),Bh(),Vh(),Hh(),Uh(),Wh(),Gh(),Kh(),qh(),Jh(),Yh(),Xh(),Zh(),Qh(),$h(),eg(),tg(),ng(),rg(),ig(),ag(),og(),sg(),cg(),lg(),ug(),dg(),fg(),pg(),mg(),hg(),gg(),_g(),vg(),yg(),bg(),xg(),Sg(),Cg(),wg(),Tg(),Eg(),Dg(),Og(),kg(),Ag(),jg(),Mg(),Ng(),Pg(),Fg(),Ig(),Lg(),Rg(),zg(),Bg(),Vg(),Hg(),Ug(),Wg(),Gg(),Kg(),qg(),Jg(),Yg(),Xg(),Zg(),Qg(),$g(),e_(),t_(),n_(),r_(),i_(),a_(),o_(),s_(),c_(),l_(),u_(),d_(),f_(),p_(),m_(),h_(),g_(),__(),v_(),y_(),b_(),x_(),S_(),C_(),w_(),T_(),E_(),D_(),O_(),k_(),A_(),j_(),M_(),N_(),P_(),F_(),I_(),L_(),R_(),z_(),B_(),V_(),H_(),U_(),W_(),G_(),K_(),q_(),J_(),Y_(),X_(),Z_(),Q_(),$_(),ev(),tv(),nv(),rv(),iv(),av(),ov(),sv(),cv(),lv(),uv(),dv(),fv(),pv(),mv(),hv(),gv(),_v(),vv(),yv(),bv(),xv(),Sv(),Cv(),wv(),Tv(),Ev(),Dv(),Ov(),kv(),Av(),jv(),Mv(),Nv(),Pv(),Fv(),Iv(),Lv(),Rv(),zv(),Bv(),Vv(),Hv(),Uv(),Wv(),Gv(),Kv(),qv(),Jv(),Yv(),Xv(),Zv(),Qv(),$v(),ey(),ty(),ny(),ry(),iy(),ay(),oy(),sy(),cy(),ly(),uy(),dy(),fy(),py(),my(),hy(),gy(),_y(),vy(),yy(),by(),xy(),Sy(),Cy(),wy(),Ty(),Ey(),Dy(),Oy(),ky(),Ay(),jy(),My(),Ny(),Py(),Fy(),Iy(),Ly(),Ry(),zy(),By(),Vy(),Hy(),Uy(),Wy(),Gy(),Ky(),qy(),Jy(),Yy(),Xy(),Zy(),Qy(),$y(),eb(),tb(),nb(),rb(),ib(),ab(),ob(),sb(),cb(),lb(),ub(),db(),fb(),pb(),mb(),hb(),gb(),_b(),vb(),yb(),bb(),xb(),Sb(),Cb(),wb(),Tb(),Db(),Ob(),kb(),Ab(),jb(),Mb(),Nb(),Pb(),Fb(),Ib(),Lb(),Rb(),zb(),Bb(),Vb(),Hb(),Ub(),Wb(),Gb(),Kb(),qb(),Jb(),Yb(),Xb(),Zb(),Qb(),$b(),ex(),tx(),nx(),rx(),ix(),ax(),ox(),sx(),cx(),lx(),ux(),dx(),fx(),px(),mx(),hx(),gx(),_x(),vx(),yx(),bx(),xx(),Sx(),Cx(),wx(),Tx(),Ex(),Dx(),Ox(),kx(),Ax(),jx(),Mx(),Nx(),Px(),Fx(),Ix(),Lx(),Rx(),zx(),Bx(),Vx(),Hx(),Ux(),Wx(),Gx(),Kx(),qx(),Jx(),Yx(),Xx(),Zx(),Qx(),$x(),eS(),tS(),nS(),rS(),iS(),aS(),oS(),sS(),cS(),lS(),uS(),dS(),fS(),pS(),mS(),hS(),gS(),_S(),vS(),yS(),bS(),xS(),SS(),CS(),wS(),TS(),ES(),DS(),OS(),kS(),AS(),jS(),MS(),NS(),PS(),FS(),IS(),LS(),RS(),zS(),BS(),VS(),HS(),US(),WS(),GS(),KS(),qS(),JS(),YS(),XS(),ZS(),QS(),$S(),eC(),tC(),nC(),rC(),iC(),aC(),oC(),sC(),cC(),lC(),uC(),dC(),fC(),pC(),mC(),hC(),gC(),_C(),vC(),yC(),bC(),xC(),SC(),CC(),wC(),TC(),EC(),DC(),OC(),kC(),AC(),jC(),MC(),NC(),PC(),FC(),IC(),LC(),RC(),zC()}));function VC(){let e=[],t=Object.create(null),n;return t.get=(r,i)=>(n?.revoke?.(),i===cw?e:(e.push(i),n=Proxy.revocable(r,t),n.proxy)),Proxy.revocable(Object.create(null),t).proxy}function B(e,t){let{[cw]:n}=e(VC()),r=t?.keySeparator??`.`,i=t?.nsSeparator??`:`,a=t?.enableSelector===`strict`;if(n.length>1&&i){let e=t?.ns,o=a?Array.isArray(e)?e:e?[e]:null:Array.isArray(e)?e:null;if(o&&(a?o:o.length>1?o.slice(1):[]).includes(n[0]))return`${n[0]}${i}${n.slice(1).join(r)}`}return n.join(r)}var V,H,HC,UC,WC,GC,KC,U,qC,JC,W,YC,XC,G,ZC,QC,$C,ew,tw,nw,rw,K,iw,aw,q,J,ow,sw,cw,lw,uw,dw,fw,pw,mw,hw,gw,_w,vw,yw,bw,xw,Sw,Cw,ww,Tw,Y,Ew,Dw,X,Z,Ow=e((()=>{V=e=>typeof e==`string`,H=()=>{let e,t,n=new Promise((n,r)=>{e=n,t=r});return n.resolve=e,n.reject=t,n},HC=e=>e==null?``:String(e),UC=(e,t,n)=>{e.forEach(e=>{t[e]&&(n[e]=t[e])})},WC=/###/g,GC=e=>e&&e.includes(`###`)?e.replace(WC,`.`):e,KC=e=>!e||V(e),U=(e,t,n)=>{let r=V(t)?t.split(`.`):t,i=0;for(;i<r.length-1;){if(KC(e))return{};let t=GC(r[i]);!e[t]&&n&&(e[t]=new n),e=Object.prototype.hasOwnProperty.call(e,t)?e[t]:{},++i}return KC(e)?{}:{obj:e,k:GC(r[i])}},qC=(e,t,n)=>{let{obj:r,k:i}=U(e,t,Object);if(r!==void 0||t.length===1){r[i]=n;return}let a=t[t.length-1],o=t.slice(0,t.length-1),s=U(e,o,Object);for(;s.obj===void 0&&o.length;)a=`${o[o.length-1]}.${a}`,o=o.slice(0,o.length-1),s=U(e,o,Object),s?.obj&&s.obj[`${s.k}.${a}`]!==void 0&&(s.obj=void 0);s.obj[`${s.k}.${a}`]=n},JC=(e,t,n,r)=>{let{obj:i,k:a}=U(e,t,Object);i[a]=i[a]||[],i[a].push(n)},W=(e,t)=>{let{obj:n,k:r}=U(e,t);if(n&&Object.prototype.hasOwnProperty.call(n,r))return n[r]},YC=(e,t,n)=>{let r=W(e,n);return r===void 0?W(t,n):r},XC=(e,t,n)=>{for(let r in t)r!==`__proto__`&&r!==`constructor`&&(Object.prototype.hasOwnProperty.call(e,r)?V(e[r])||e[r]instanceof String||V(t[r])||t[r]instanceof String?n&&(e[r]=t[r]):XC(e[r],t[r],n):e[r]=t[r]);return e},G=e=>e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,`\\$&`),ZC={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`,"/":`&#x2F;`},QC=e=>V(e)?e.replace(/[&<>"'\/]/g,e=>ZC[e]):e,$C=class{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){let t=this.regExpMap.get(e);if(t!==void 0)return t;let n=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,n),this.regExpQueue.push(e),n}},ew=[` `,`,`,`?`,`!`,`;`],tw=new $C(20),nw=(e,t,n)=>{t||=``,n||=``;let r=ew.filter(e=>!t.includes(e)&&!n.includes(e));if(r.length===0)return!0;let i=tw.getRegExp(`(${r.map(e=>e===`?`?`\\?`:e).join(`|`)})`),a=!i.test(e);if(!a){let t=e.indexOf(n);t>0&&!i.test(e.substring(0,t))&&(a=!0)}return a},rw=(e,t,n=`.`)=>{if(!e)return;if(e[t])return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0;let r=t.split(n),i=e;for(let e=0;e<r.length;){if(!i||typeof i!=`object`)return;let t,a=``;for(let o=e;o<r.length;++o)if(o!==e&&(a+=n),a+=r[o],t=i[a],t!==void 0){if([`string`,`number`,`boolean`].includes(typeof t)&&o<r.length-1)continue;e+=o-e+1;break}i=t}return i},K=e=>e?.replace(/_/g,`-`),iw={type:`logger`,log(e){this.output(`log`,e)},warn(e){this.output(`warn`,e)},error(e){this.output(`error`,e)},output(e,t){console?.[e]?.apply?.(console,t)}},aw=class e{constructor(e,t={}){this.init(e,t)}init(e,t={}){this.prefix=t.prefix||`i18next:`,this.logger=e||iw,this.options=t,this.debug=t.debug}log(...e){return this.forward(e,`log`,``,!0)}warn(...e){return this.forward(e,`warn`,``,!0)}error(...e){return this.forward(e,`error`,``)}deprecate(...e){return this.forward(e,`warn`,`WARNING DEPRECATED: `,!0)}forward(e,t,n,r){return r&&!this.debug?null:(e=e.map(e=>V(e)?e.replace(/[\r\n\x00-\x1F\x7F]/g,` `):e),V(e[0])&&(e[0]=`${n}${this.prefix} ${e[0]}`),this.logger[t](e))}create(t){return new e(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return t||=this.options,t.prefix=t.prefix||this.prefix,new e(this.logger,t)}},q=new aw,J=class{constructor(){this.observers={}}on(e,t){return e.split(` `).forEach(e=>{this.observers[e]||(this.observers[e]=new Map);let n=this.observers[e].get(t)||0;this.observers[e].set(t,n+1)}),this}off(e,t){if(this.observers[e]){if(!t){delete this.observers[e];return}this.observers[e].delete(t)}}once(e,t){let n=(...r)=>{t(...r),this.off(e,n)};return this.on(e,n),this}emit(e,...t){this.observers[e]&&Array.from(this.observers[e].entries()).forEach(([e,n])=>{for(let r=0;r<n;r++)e(...t)}),this.observers[`*`]&&Array.from(this.observers[`*`].entries()).forEach(([n,r])=>{for(let i=0;i<r;i++)n(e,...t)})}},ow=class extends J{constructor(e,t={ns:[`translation`],defaultNS:`translation`}){super(),this.data=e||{},this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator=`.`),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.includes(e)||this.options.ns.push(e)}removeNamespaces(e){let t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,n,r={}){let i=r.keySeparator===void 0?this.options.keySeparator:r.keySeparator,a=r.ignoreJSONStructure===void 0?this.options.ignoreJSONStructure:r.ignoreJSONStructure,o;e.includes(`.`)?o=e.split(`.`):(o=[e,t],n&&(Array.isArray(n)?o.push(...n):V(n)&&i?o.push(...n.split(i)):o.push(n)));let s=W(this.data,o);return!s&&!t&&!n&&e.includes(`.`)&&(e=o[0],t=o[1],n=o.slice(2).join(`.`)),s||!a||!V(n)?s:rw(this.data?.[e]?.[t],n,i)}addResource(e,t,n,r,i={silent:!1}){let a=i.keySeparator===void 0?this.options.keySeparator:i.keySeparator,o=[e,t];n&&(o=o.concat(a?n.split(a):n)),e.includes(`.`)&&(o=e.split(`.`),r=t,t=o[1]),this.addNamespaces(t),qC(this.data,o,r),i.silent||this.emit(`added`,e,t,n,r)}addResources(e,t,n,r={silent:!1}){for(let r in n)(V(n[r])||Array.isArray(n[r]))&&this.addResource(e,t,r,n[r],{silent:!0});r.silent||this.emit(`added`,e,t,n)}addResourceBundle(e,t,n,r,i,a={silent:!1,skipCopy:!1}){let o=[e,t];e.includes(`.`)&&(o=e.split(`.`),r=n,n=t,t=o[1]),this.addNamespaces(t);let s=W(this.data,o)||{};a.skipCopy||(n=JSON.parse(JSON.stringify(n))),r?XC(s,n,i):s={...s,...n},qC(this.data,o,s),a.silent||this.emit(`added`,e,t,n)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit(`removed`,e,t)}hasResourceBundle(e,t){return this.getResource(e,t)!==void 0}getResourceBundle(e,t){return t||=this.options.defaultNS,this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){let t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(e=>t[e]&&Object.keys(t[e]).length>0)}toJSON(){return this.data}},sw={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,n,r,i){return e.forEach(e=>{t=this.processors[e]?.process(t,n,r,i)??t}),t}},cw=Symbol(`i18next/PATH_KEY`),lw=e=>!V(e)&&typeof e!=`boolean`&&typeof e!=`number`,uw=class e extends J{constructor(e,t={}){super(),UC([`resourceStore`,`languageUtils`,`pluralResolver`,`interpolator`,`backendConnector`,`i18nFormat`,`utils`],e,this),this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator=`.`),this.logger=q.create(`translator`),this.checkedLoadedFor={}}changeLanguage(e){e&&(this.language=e)}exists(e,t={interpolation:{}}){let n={...t};if(e==null)return!1;let r=this.resolve(e,n);if(r?.res===void 0)return!1;let i=lw(r.res);return!(n.returnObjects===!1&&i)}extractFromKey(e,t){let n=t.nsSeparator===void 0?this.options.nsSeparator:t.nsSeparator;n===void 0&&(n=`:`);let r=t.keySeparator===void 0?this.options.keySeparator:t.keySeparator,i=t.ns||this.options.defaultNS||[],a=n&&e.includes(n),o=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!nw(e,n,r);if(a&&!o){let t=e.match(this.interpolator.nestingRegexp);if(t&&t.length>0)return{key:e,namespaces:V(i)?[i]:i};let a=e.split(n);(n!==r||n===r&&this.options.ns.includes(a[0]))&&(i=a.shift()),e=a.join(r)}return{key:e,namespaces:V(i)?[i]:i}}translate(t,n,r){let i=typeof n==`object`?{...n}:n;if(typeof i!=`object`&&this.options.overloadTranslationOptionHandler&&(i=this.options.overloadTranslationOptionHandler(arguments)),typeof i==`object`&&(i={...i}),i||={},t==null)return``;typeof t==`function`&&(t=B(t,{...this.options,...i})),Array.isArray(t)||(t=[String(t)]),t=t.map(e=>typeof e==`function`?B(e,{...this.options,...i}):String(e));let a=i.returnDetails===void 0?this.options.returnDetails:i.returnDetails,o=i.keySeparator===void 0?this.options.keySeparator:i.keySeparator,{key:s,namespaces:c}=this.extractFromKey(t[t.length-1],i),l=c[c.length-1],u=i.nsSeparator===void 0?this.options.nsSeparator:i.nsSeparator;u===void 0&&(u=`:`);let d=i.lng||this.language,f=i.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(d?.toLowerCase()===`cimode`)return f?a?{res:`${l}${u}${s}`,usedKey:s,exactUsedKey:s,usedLng:d,usedNS:l,usedParams:this.getUsedParamsDetails(i)}:`${l}${u}${s}`:a?{res:s,usedKey:s,exactUsedKey:s,usedLng:d,usedNS:l,usedParams:this.getUsedParamsDetails(i)}:s;let p=this.resolve(t,i),m=p?.res,h=p?.usedKey||s,g=p?.exactUsedKey||s,_=[`[object Number]`,`[object Function]`,`[object RegExp]`],v=i.joinArrays===void 0?this.options.joinArrays:i.joinArrays,y=!this.i18nFormat||this.i18nFormat.handleAsObject,b=i.count!==void 0&&!V(i.count),x=e.hasDefaultValue(i),ee=b?this.pluralResolver.getSuffix(d,i.count,i):``,S=i.ordinal&&b?this.pluralResolver.getSuffix(d,i.count,{ordinal:!1}):``,C=b&&!i.ordinal&&i.count===0,w=C&&i[`defaultValue${this.options.pluralSeparator}zero`]||i[`defaultValue${ee}`]||i[`defaultValue${S}`]||i.defaultValue,T=m;y&&!m&&x&&(T=w);let E=lw(T),D=Object.prototype.toString.apply(T);if(y&&T&&E&&!_.includes(D)&&!(V(v)&&Array.isArray(T))){if(!i.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn(`accessing an object - but returnObjects options is not enabled!`);let e=this.options.returnedObjectHandler?this.options.returnedObjectHandler(h,T,{...i,ns:c}):`key '${s} (${this.language})' returned an object instead of string.`;return a?(p.res=e,p.usedParams=this.getUsedParamsDetails(i),p):e}if(o){let e=Array.isArray(T),t=e?[]:{},n=e?g:h;for(let e in T)if(Object.prototype.hasOwnProperty.call(T,e)){let r=`${n}${o}${e}`;x&&!m?t[e]=this.translate(r,{...i,defaultValue:lw(w)?w[e]:void 0,joinArrays:!1,ns:c}):t[e]=this.translate(r,{...i,joinArrays:!1,ns:c}),t[e]===r&&(t[e]=T[e])}m=t}}else if(y&&V(v)&&Array.isArray(m))m=m.join(v),m&&=this.extendTranslation(m,t,i,r);else{let e=!1,n=!1;!this.isValidLookup(m)&&x&&(e=!0,m=w),this.isValidLookup(m)||(n=!0,m=s);let a=(i.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&n?void 0:m,c=x&&w!==m&&this.options.updateMissing;if(n||e||c){if(this.logger.log(c?`updateKey`:`missingKey`,d,l,b&&!c?`${s}${this.pluralResolver.getSuffix(d,i.count,i)}`:s,c?w:m),o){let e=this.resolve(s,{...i,keySeparator:!1});e&&e.res&&this.logger.warn(`Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.`)}let e=[],t=this.languageUtils.getFallbackCodes(this.options.fallbackLng,i.lng||this.language);if(this.options.saveMissingTo===`fallback`&&t&&t[0])for(let n=0;n<t.length;n++)e.push(t[n]);else this.options.saveMissingTo===`all`?e=this.languageUtils.toResolveHierarchy(i.lng||this.language):e.push(i.lng||this.language);let n=(e,t,n)=>{let r=x&&n!==m?n:a;this.options.missingKeyHandler?this.options.missingKeyHandler(e,l,t,r,c,i):this.backendConnector?.saveMissing&&this.backendConnector.saveMissing(e,l,t,r,c,i),this.emit(`missingKey`,e,l,t,m)};this.options.saveMissing&&(this.options.saveMissingPlurals&&b?e.forEach(e=>{let t=this.pluralResolver.getSuffixes(e,i);C&&i[`defaultValue${this.options.pluralSeparator}zero`]&&!t.includes(`${this.options.pluralSeparator}zero`)&&t.push(`${this.options.pluralSeparator}zero`),t.forEach(t=>{n([e],s+t,i[`defaultValue${t}`]||w)})}):n(e,s,w))}m=this.extendTranslation(m,t,i,p,r),n&&m===s&&this.options.appendNamespaceToMissingKey&&(m=`${l}${u}${s}`),(n||e)&&this.options.parseMissingKeyHandler&&(m=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}${u}${s}`:s,e?m:void 0,i))}return a?(p.res=m,p.usedParams=this.getUsedParamsDetails(i),p):m}extendTranslation(e,t,n,r,i){if(this.i18nFormat?.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...n},n.lng||this.language||r.usedLng,r.usedNS,r.usedKey,{resolved:r});else if(!n.skipInterpolation){n.interpolation&&this.interpolator.init({...n,interpolation:{...this.options.interpolation,...n.interpolation}});let a=V(e)&&(n?.interpolation?.skipOnVariables===void 0?this.options.interpolation.skipOnVariables:n.interpolation.skipOnVariables),o;if(a){let t=e.match(this.interpolator.nestingRegexp);o=t&&t.length}let s=n.replace&&!V(n.replace)?n.replace:n;if(this.options.interpolation.defaultVariables&&(s={...this.options.interpolation.defaultVariables,...s}),e=this.interpolator.interpolate(e,s,n.lng||this.language||r.usedLng,n),a){let t=e.match(this.interpolator.nestingRegexp),r=t&&t.length;o<r&&(n.nest=!1)}!n.lng&&r&&r.res&&(n.lng=this.language||r.usedLng),n.nest!==!1&&(e=this.interpolator.nest(e,(...e)=>i?.[0]===e[0]&&!n.context?(this.logger.warn(`It seems you are nesting recursively key: ${e[0]} in key: ${t[0]}`),null):this.translate(...e,t),n)),n.interpolation&&this.interpolator.reset()}let a=n.postProcess||this.options.postProcess,o=V(a)?[a]:a;return e!=null&&o?.length&&n.applyPostProcessor!==!1&&(e=sw.handle(o,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...r,usedParams:this.getUsedParamsDetails(n)},...n}:n,this)),e}resolve(e,t={}){let n,r,i,a,o;return V(e)&&(e=[e]),Array.isArray(e)&&(e=e.map(e=>typeof e==`function`?B(e,{...this.options,...t}):e)),e.forEach(e=>{if(this.isValidLookup(n))return;let s=this.extractFromKey(e,t),c=s.key;r=c;let l=s.namespaces;this.options.fallbackNS&&(l=l.concat(this.options.fallbackNS));let u=t.count!==void 0&&!V(t.count),d=u&&!t.ordinal&&t.count===0,f=t.context!==void 0&&(V(t.context)||typeof t.context==`number`)&&t.context!==``,p=t.lngs?t.lngs:this.languageUtils.toResolveHierarchy(t.lng||this.language,t.fallbackLng);l.forEach(e=>{this.isValidLookup(n)||(o=e,!this.checkedLoadedFor[`${p[0]}-${e}`]&&this.utils?.hasLoadedNamespace&&!this.utils?.hasLoadedNamespace(o)&&(this.checkedLoadedFor[`${p[0]}-${e}`]=!0,this.logger.warn(`key "${r}" for languages "${p.join(`, `)}" won't get resolved as namespace "${o}" was not yet loaded`,`This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!`)),p.forEach(r=>{if(this.isValidLookup(n))return;a=r;let o=[c];if(this.i18nFormat?.addLookupKeys)this.i18nFormat.addLookupKeys(o,c,r,e,t);else{let e;u&&(e=this.pluralResolver.getSuffix(r,t.count,t));let n=`${this.options.pluralSeparator}zero`,i=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(u&&(t.ordinal&&e.startsWith(i)&&o.push(c+e.replace(i,this.options.pluralSeparator)),o.push(c+e),d&&o.push(c+n)),f){let r=`${c}${this.options.contextSeparator||`_`}${t.context}`;o.push(r),u&&(t.ordinal&&e.startsWith(i)&&o.push(r+e.replace(i,this.options.pluralSeparator)),o.push(r+e),d&&o.push(r+n))}}let s;for(;s=o.pop();)this.isValidLookup(n)||(i=s,n=this.getResource(r,e,s,t))}))})}),{res:n,usedKey:r,exactUsedKey:i,usedLng:a,usedNS:o}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e===``)}getResource(e,t,n,r={}){return this.i18nFormat?.getResource?this.i18nFormat.getResource(e,t,n,r):this.resourceStore.getResource(e,t,n,r)}getUsedParamsDetails(e={}){let t=[`defaultValue`,`ordinal`,`context`,`replace`,`lng`,`lngs`,`fallbackLng`,`ns`,`keySeparator`,`nsSeparator`,`returnObjects`,`returnDetails`,`joinArrays`,`postProcess`,`interpolation`],n=e.replace&&!V(e.replace),r=n?e.replace:e;if(n&&e.count!==void 0&&(r={...r,count:e.count}),this.options.interpolation.defaultVariables&&(r={...this.options.interpolation.defaultVariables,...r}),!n){r={...r};for(let e of t)delete r[e]}return r}static hasDefaultValue(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&t.startsWith(`defaultValue`)&&e[t]!==void 0)return!0;return!1}},dw=class{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=q.create(`languageUtils`),this.resolveHierarchyCache={}}clearCache(){this.resolveHierarchyCache={}}getScriptPartFromCode(e){if(e=K(e),!e||!e.includes(`-`))return null;let t=e.split(`-`);return t.length===2||(t.pop(),t[t.length-1].toLowerCase()===`x`)?null:this.formatLanguageCode(t.join(`-`))}getLanguagePartFromCode(e){if(e=K(e),!e||!e.includes(`-`))return e;let t=e.split(`-`);return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(V(e)&&e.includes(`-`)){let t;try{t=Intl.getCanonicalLocales(e)[0]}catch{}return t&&this.options.lowerCaseLng&&(t=t.toLowerCase()),t||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load===`languageOnly`||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.includes(e)}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(e=>{if(t)return;let n=this.formatLanguageCode(e);(!this.options.supportedLngs||this.isSupportedCode(n))&&(t=n)}),!t&&this.options.supportedLngs&&e.forEach(e=>{if(t)return;let n=this.getScriptPartFromCode(e);if(this.isSupportedCode(n))return t=n;let r=this.getLanguagePartFromCode(e);if(this.isSupportedCode(r))return t=r;t=this.options.supportedLngs.find(e=>e===r?!0:!e.includes(`-`)&&!r.includes(`-`)?!1:!!(e.includes(`-`)&&!r.includes(`-`)&&e.slice(0,e.indexOf(`-`))===r||e.startsWith(r)&&r.length>1))}),t||=this.getFallbackCodes(this.options.fallbackLng)[0],t}getFallbackCodes(e,t){if(!e)return[];if(typeof e==`function`&&(e=e(t)),V(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let n=e[t];return n||=e[this.getScriptPartFromCode(t)],n||=e[this.formatLanguageCode(t)],n||=e[this.getLanguagePartFromCode(t)],n||=e.default,n||[]}toResolveHierarchy(e,t){let n=this.options.fallbackLng,r=Array.isArray(n)?n.join(`|`):n;r!==this._cachedFallbackLng&&(this.resolveHierarchyCache={},this._cachedFallbackLng=r);let i=t===void 0||t===!1||V(t),a=t===void 0&&typeof this.options.fallbackLng==`function`,o=V(e)&&i&&!a,s=null;if(o){let n;n=t===void 0?`undefined`:t===!1?`boolean:false`:`string:${t}`,s=`${e.length}:${e}|${n}`}if(s!==null){let e=this.resolveHierarchyCache[s];if(e!==void 0)return e.slice()}let c=this.getFallbackCodes((t===!1?[]:t)||this.options.fallbackLng||[],e),l=[],u=e=>{e&&(this.isSupportedCode(e)?l.push(e):this.logger.warn(`rejecting language code not found in supportedLngs: ${e}`))};return V(e)&&(e.includes(`-`)||e.includes(`_`))?(this.options.load!==`languageOnly`&&u(this.formatLanguageCode(e)),this.options.load!==`languageOnly`&&this.options.load!==`currentOnly`&&u(this.getScriptPartFromCode(e)),this.options.load!==`currentOnly`&&u(this.getLanguagePartFromCode(e))):V(e)&&u(this.formatLanguageCode(e)),c.forEach(e=>{l.includes(e)||u(this.formatLanguageCode(e))}),s===null?l:(this.resolveHierarchyCache[s]=l,l.slice())}},fw={zero:0,one:1,two:2,few:3,many:4,other:5},pw={select:e=>e===1?`one`:`other`,resolvedOptions:()=>({pluralCategories:[`one`,`other`]})},mw=class{constructor(e,t={}){this.languageUtils=e,this.options=t,this.logger=q.create(`pluralResolver`),this.pluralRulesCache={}}clearCache(){this.pluralRulesCache={}}getRule(e,t={}){let n=K(e===`dev`?`en`:e),r=t.ordinal?`ordinal`:`cardinal`,i=JSON.stringify({cleanedCode:n,type:r});if(i in this.pluralRulesCache)return this.pluralRulesCache[i];let a;try{a=new Intl.PluralRules(n,{type:r})}catch{if(typeof Intl>`u`)return this.logger.error(`No Intl support, please use an Intl polyfill!`),pw;if(!e.match(/-|_/))return pw;let n=this.languageUtils.getLanguagePartFromCode(e);a=this.getRule(n,t)}return this.pluralRulesCache[i]=a,a}needsPlural(e,t={}){let n=this.getRule(e,t);return n||=this.getRule(`dev`,t),n?.resolvedOptions().pluralCategories.length>1}getPluralFormsOfKey(e,t,n={}){return this.getSuffixes(e,n).map(e=>`${t}${e}`)}getSuffixes(e,t={}){let n=this.getRule(e,t);return n||=this.getRule(`dev`,t),n?n.resolvedOptions().pluralCategories.sort((e,t)=>fw[e]-fw[t]).map(e=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:``}${e}`):[]}getSuffix(e,t,n={}){let r=this.getRule(e,n);return r?`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:``}${r.select(t)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix(`dev`,t,n))}},hw=(e,t,n,r=`.`,i=!0)=>{let a=YC(e,t,n);return!a&&i&&V(n)&&(a=rw(e,n,r),a===void 0&&(a=rw(t,n,r))),a},gw=e=>e.replace(/\$/g,`$$$$`),_w=class{constructor(e={}){this.logger=q.create(`interpolator`),this.options=e,this.format=e?.interpolation?.format||(e=>e),this.init(e)}init(e={}){e.interpolation||={escapeValue:!0};let{escape:t,escapeValue:n,useRawValueToEscape:r,prefix:i,prefixEscaped:a,suffix:o,suffixEscaped:s,formatSeparator:c,unescapeSuffix:l,unescapePrefix:u,nestingPrefix:d,nestingPrefixEscaped:f,nestingSuffix:p,nestingSuffixEscaped:m,nestingOptionsSeparator:h,maxReplaces:g,alwaysFormat:_}=e.interpolation;this.escape=t===void 0?QC:t,this.escapeValue=n===void 0?!0:n,this.useRawValueToEscape=r===void 0?!1:r,this.prefix=i?G(i):a||`{{`,this.suffix=o?G(o):s||`}}`,this.formatSeparator=c||`,`,this.unescapePrefix=l?``:u?G(u):`-`,this.unescapeSuffix=this.unescapePrefix?``:l?G(l):``,this.nestingPrefix=d?G(d):f||G(`$t(`),this.nestingSuffix=p?G(p):m||G(`)`),this.nestingOptionsSeparator=h||`,`,this.maxReplaces=g||1e3,this.alwaysFormat=_===void 0?!1:_,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){let e=(e,t)=>e?.source===t?(e.lastIndex=0,e):new RegExp(t,`g`);this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)}interpolate(e,t,n,r){let i,a,o,s=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=e=>{if(!e.includes(this.formatSeparator)){let i=hw(t,s,e,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(i,void 0,n,{...r,...t,interpolationkey:e}):i}let i=e.split(this.formatSeparator),a=i.shift().trim(),o=i.join(this.formatSeparator).trim();return this.format(hw(t,s,a,this.options.keySeparator,this.options.ignoreJSONStructure),o,n,{...r,...t,interpolationkey:a})};this.resetRegExp(),!this.escapeValue&&typeof e==`string`&&/\$t\([^)]*\{[^}]*\{\{/.test(e)&&this.logger.warn(`nesting options string contains interpolated variables with escapeValue: false — if any of those values are attacker-controlled they can inject additional nesting options (e.g. redirect lng/ns). Sanitise untrusted input before passing it to t(), or keep escapeValue: true.`);let l=r?.missingInterpolationHandler||this.options.missingInterpolationHandler,u=r?.interpolation?.skipOnVariables===void 0?this.options.interpolation.skipOnVariables:r.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:e=>e},{regex:this.regexp,safeValue:e=>this.escapeValue?this.escape(e):e}].forEach(t=>{for(o=0;i=t.regex.exec(e);){let n=i[1].trim();if(a=c(n),a===void 0)if(typeof l==`function`){let t=l(e,i,r);a=V(t)?t:``}else if(r&&Object.prototype.hasOwnProperty.call(r,n))a=``;else if(u){a=i[0];continue}else this.logger.warn(`missed to pass in variable ${n} for interpolating ${e}`),a=``;else !V(a)&&!this.useRawValueToEscape&&(a=HC(a));let s=t.safeValue(a);if(e=e.replace(i[0],gw(s)),u?(t.regex.lastIndex+=s.length,t.regex.lastIndex-=i[0].length):t.regex.lastIndex=0,o++,o>=this.maxReplaces)break}}),e}nest(e,t,n={}){let r,i,a,o=(e,t)=>{let n=this.nestingOptionsSeparator;if(!e.includes(n))return e;let r=e.split(RegExp(`${G(n)}[ ]*{`)),i=`{${r[1]}`;e=r[0],i=this.interpolate(i,a);let o=i.match(/'/g),s=i.match(/"/g);((o?.length??0)%2==0&&!s||(s?.length??0)%2!=0)&&(i=i.replace(/'/g,`"`));try{a=JSON.parse(i),t&&(a={...t,...a})}catch(t){return this.logger.warn(`failed parsing options string in nesting for key ${e}`,t),`${e}${n}${i}`}return a.defaultValue&&a.defaultValue.includes(this.prefix)&&delete a.defaultValue,e};for(;r=this.nestingRegexp.exec(e);){let s=[];a={...n},a=a.replace&&!V(a.replace)?a.replace:a,a.applyPostProcessor=!1,delete a.defaultValue;let c=/{.*}/s.test(r[1])?r[1].lastIndexOf(`}`)+1:r[1].indexOf(this.formatSeparator);if(c!==-1&&(s=r[1].slice(c).split(this.formatSeparator).map(e=>e.trim()).filter(Boolean),r[1]=r[1].slice(0,c)),i=t(o.call(this,r[1].trim(),a),a),i&&r[0]===e&&!V(i))return i;V(i)||(i=HC(i)),i||=(this.logger.warn(`missed to resolve ${r[1]} for nesting ${e}`),``),s.length&&(i=s.reduce((e,t)=>this.format(e,t,n.lng,{...n,interpolationkey:r[1].trim()}),i.trim())),e=e.replace(r[0],gw(HC(i))),this.regexp.lastIndex=0}return e}},vw=e=>{let t=e.toLowerCase().trim(),n={};if(e.includes(`(`)){let r=e.split(`(`);t=r[0].toLowerCase().trim();let i=r[1].slice(0,-1);t===`currency`&&!i.includes(`:`)?n.currency||=i.trim():t===`relativetime`&&!i.includes(`:`)?n.range||=i.trim():i.split(`;`).forEach(e=>{if(e){let[t,...r]=e.split(`:`),i=r.join(`:`).trim().replace(/^'+|'+$/g,``),a=t.trim();n[a]||(n[a]=i),i===`false`&&(n[a]=!1),i===`true`&&(n[a]=!0),isNaN(i)||(n[a]=parseInt(i,10))}})}return{formatName:t,formatOptions:n}},yw=e=>{let t={};return(n,r,i)=>{let a=i;i&&i.interpolationkey&&i.formatParams&&i.formatParams[i.interpolationkey]&&i[i.interpolationkey]&&(a={...a,[i.interpolationkey]:void 0});let o=r+JSON.stringify(a),s=t[o];return s||(s=e(K(r),i),t[o]=s),s(n)}},bw=e=>(t,n,r)=>e(K(n),r)(t),xw=class{constructor(e={}){this.logger=q.create(`formatter`),this.options=e,this.init(e)}init(e,t={interpolation:{}}){this.formatSeparator=t.interpolation.formatSeparator||`,`;let n=t.cacheInBuiltFormats?yw:bw;this.formats={number:n((e,t)=>{let n=new Intl.NumberFormat(e,{...t});return e=>n.format(e)}),currency:n((e,t)=>{let n=new Intl.NumberFormat(e,{...t,style:`currency`});return e=>n.format(e)}),datetime:n((e,t)=>{let n=new Intl.DateTimeFormat(e,{...t});return e=>n.format(e)}),relativetime:n((e,t)=>{let n=new Intl.RelativeTimeFormat(e,{...t});return e=>n.format(e,t.range||`day`)}),list:n((e,t)=>{let n=new Intl.ListFormat(e,{...t});return e=>n.format(e)})}}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=yw(t)}format(e,t,n,r={}){if(!t||e==null)return e;let i=t.split(this.formatSeparator),a=[];for(let e=0;e<i.length;e++){let t=i[e];for(;t.indexOf(`(`)>-1&&!t.includes(`)`)&&e+1<i.length;)t=`${t}${this.formatSeparator}${i[++e]}`;a.push(t)}return a.reduce((e,t)=>{let{formatName:i,formatOptions:a}=vw(t);if(this.formats[i]){let t=e;try{let o=r?.formatParams?.[r.interpolationkey]||{},s=o.locale||o.lng||r.locale||r.lng||n;t=this.formats[i](e,s,{...a,...r,...o})}catch(e){this.logger.warn(e)}return t}else this.logger.warn(`there was no format function for ${i}`);return e},e)}},Sw=(e,t)=>{e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)},Cw=class extends J{constructor(e,t,n,r={}){super(),this.backend=e,this.store=t,this.services=n,this.languageUtils=n.languageUtils,this.options=r,this.logger=q.create(`backendConnector`),this.waitingReads=[],this.maxParallelReads=r.maxParallelReads||10,this.readingCalls=0,this.maxRetries=r.maxRetries>=0?r.maxRetries:5,this.retryTimeout=r.retryTimeout>=1?r.retryTimeout:350,this.state={},this.queue=[],this.backend?.init?.(n,r.backend,r)}queueLoad(e,t,n,r){let i={},a={},o={},s={};return e.forEach(e=>{let r=!0;t.forEach(t=>{let o=`${e}|${t}`;!n.reload&&this.store.hasResourceBundle(e,t)?this.state[o]=2:this.state[o]<0||(this.state[o]===1?a[o]===void 0&&(a[o]=!0):(this.state[o]=1,r=!1,a[o]===void 0&&(a[o]=!0),i[o]===void 0&&(i[o]=!0),s[t]===void 0&&(s[t]=!0)))}),r||(o[e]=!0)}),(Object.keys(i).length||Object.keys(a).length)&&this.queue.push({pending:a,pendingCount:Object.keys(a).length,loaded:{},errors:[],callback:r}),{toLoad:Object.keys(i),pending:Object.keys(a),toLoadLanguages:Object.keys(o),toLoadNamespaces:Object.keys(s)}}loaded(e,t,n){let r=e.split(`|`),i=r[0],a=r[1];t&&this.emit(`failedLoading`,i,a,t),!t&&n&&this.store.addResourceBundle(i,a,n,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&n&&(this.state[e]=0);let o={};this.queue.forEach(n=>{JC(n.loaded,[i],a),Sw(n,e),t&&n.errors.push(t),n.pendingCount===0&&!n.done&&(Object.keys(n.loaded).forEach(e=>{o[e]||(o[e]={});let t=n.loaded[e];t.length&&t.forEach(t=>{o[e][t]===void 0&&(o[e][t]=!0)})}),n.done=!0,n.errors.length?n.callback(n.errors):n.callback())}),this.emit(`loaded`,o),this.queue=this.queue.filter(e=>!e.done)}read(e,t,n,r=0,i=this.retryTimeout,a){if(!e.length)return a(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:t,fcName:n,tried:r,wait:i,callback:a});return}this.readingCalls++;let o=(o,s)=>{if(this.readingCalls--,this.waitingReads.length>0){let e=this.waitingReads.shift();this.read(e.lng,e.ns,e.fcName,e.tried,e.wait,e.callback)}if(o&&s&&r<this.maxRetries){setTimeout(()=>{this.read(e,t,n,r+1,i*2,a)},i);return}a(o,s)},s=this.backend[n].bind(this.backend);if(s.length===2){try{let n=s(e,t);n&&typeof n.then==`function`?n.then(e=>o(null,e)).catch(o):o(null,n)}catch(e){o(e)}return}return s(e,t,o)}prepareLoading(e,t,n={},r){if(!this.backend)return this.logger.warn(`No backend was added via i18next.use. Will not load resources.`),r&&r();V(e)&&(e=this.languageUtils.toResolveHierarchy(e)),V(t)&&(t=[t]);let i=this.queueLoad(e,t,n,r);if(!i.toLoad.length)return i.pending.length||r(),null;i.toLoad.forEach(e=>{this.loadOne(e)})}load(e,t,n){this.prepareLoading(e,t,{},n)}reload(e,t,n){this.prepareLoading(e,t,{reload:!0},n)}loadOne(e,t=``){let n=e.split(`|`),r=n[0],i=n[1];this.read(r,i,`read`,void 0,void 0,(n,a)=>{n&&this.logger.warn(`${t}loading namespace ${i} for language ${r} failed`,n),!n&&a&&this.logger.log(`${t}loaded namespace ${i} for language ${r}`,a),this.loaded(e,n,a)})}saveMissing(e,t,n,r,i,a={},o=()=>{}){if(this.services?.utils?.hasLoadedNamespace&&!this.services?.utils?.hasLoadedNamespace(t)){this.logger.warn(`did not save key "${n}" as the namespace "${t}" was not yet loaded`,`This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!`);return}if(!(n==null||n===``)){if(this.backend?.create){let s={...a,isUpdate:i},c=this.backend.create.bind(this.backend);if(c.length<6)try{let i;i=c.length===5?c(e,t,n,r,s):c(e,t,n,r),i&&typeof i.then==`function`?i.then(e=>o(null,e)).catch(o):o(null,i)}catch(e){o(e)}else c(e,t,n,r,o,s)}!e||!e[0]||this.store.addResource(e[0],t,n,r)}}},ww=()=>({debug:!1,initAsync:!0,ns:[`translation`],defaultNS:[`translation`],fallbackLng:[`dev`],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:`all`,preload:!1,keySeparator:`.`,nsSeparator:`:`,pluralSeparator:`_`,contextSeparator:`_`,enableSelector:!1,partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:`fallback`,saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:e=>{let t={};if(typeof e[1]==`object`&&(t=e[1]),V(e[1])&&(t.defaultValue=e[1]),V(e[2])&&(t.tDescription=e[2]),typeof e[2]==`object`||typeof e[3]==`object`){let n=e[3]||e[2];Object.keys(n).forEach(e=>{t[e]=n[e]})}return t},interpolation:{escapeValue:!0,prefix:`{{`,suffix:`}}`,formatSeparator:`,`,unescapePrefix:`-`,nestingPrefix:`$t(`,nestingSuffix:`)`,nestingOptionsSeparator:`,`,maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),Tw=e=>(V(e.ns)&&(e.ns=[e.ns]),V(e.fallbackLng)&&(e.fallbackLng=[e.fallbackLng]),V(e.fallbackNS)&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&!e.supportedLngs.includes(`cimode`)&&(e.supportedLngs=e.supportedLngs.concat([`cimode`])),e),Y=()=>{},Ew=e=>{Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(t=>{typeof e[t]==`function`&&(e[t]=e[t].bind(e))})},Dw=class e extends J{constructor(e={},t){if(super(),this.options=Tw(e),this.services={},this.logger=q,this.modules={external:[]},Ew(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(e={},t){this.isInitializing=!0,typeof e==`function`&&(t=e,e={}),e.defaultNS==null&&e.ns&&(V(e.ns)?e.defaultNS=e.ns:e.ns.includes(`translation`)||(e.defaultNS=e.ns[0]));let n=ww();this.options={...n,...this.options,...Tw(e)},this.options.interpolation={...n.interpolation,...this.options.interpolation},e.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=e.keySeparator),e.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=e.nsSeparator),typeof this.options.overloadTranslationOptionHandler!=`function`&&(this.options.overloadTranslationOptionHandler=n.overloadTranslationOptionHandler);let r=e=>e?typeof e==`function`?new e:e:null;if(!this.options.isClone){this.modules.logger?q.init(r(this.modules.logger),this.options):q.init(null,this.options);let e;e=this.modules.formatter?this.modules.formatter:xw;let t=new dw(this.options);this.store=new ow(this.options.resources,this.options);let n=this.services;n.logger=q,n.resourceStore=this.store,n.languageUtils=t,n.pluralResolver=new mw(t,{prepend:this.options.pluralSeparator}),e&&(n.formatter=r(e),n.formatter.init&&n.formatter.init(n,this.options),this.options.interpolation.format=n.formatter.format.bind(n.formatter)),n.interpolator=new _w(this.options),n.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},n.backendConnector=new Cw(r(this.modules.backend),n.resourceStore,n,this.options),n.backendConnector.on(`*`,(e,...t)=>{this.emit(e,...t)}),this.modules.languageDetector&&(n.languageDetector=r(this.modules.languageDetector),n.languageDetector.init&&n.languageDetector.init(n,this.options.detection,this.options)),this.modules.i18nFormat&&(n.i18nFormat=r(this.modules.i18nFormat),n.i18nFormat.init&&n.i18nFormat.init(this)),this.translator=new uw(this.services,this.options),this.translator.on(`*`,(e,...t)=>{this.emit(e,...t)}),this.modules.external.forEach(e=>{e.init&&e.init(this)})}if(this.format=this.options.interpolation.format,t||=Y,this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){let e=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);e.length>0&&e[0]!==`dev`&&(this.options.lng=e[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn(`init: no languageDetector is used and no lng is defined`),[`getResource`,`hasResourceBundle`,`getResourceBundle`,`getDataByLanguage`].forEach(e=>{this[e]=(...t)=>this.store[e](...t)}),[`addResource`,`addResources`,`addResourceBundle`,`removeResourceBundle`].forEach(e=>{this[e]=(...t)=>(this.store[e](...t),this)});let i=H(),a=()=>{let e=(e,n)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn(`init: i18next is already initialized. You should call init just once!`),this.isInitialized=!0,this.options.isClone||this.logger.log(`initialized`,this.options),this.emit(`initialized`,this.options),i.resolve(n),t(e,n)};if((this.languages||this.isLanguageChangingTo)&&!this.isInitialized)return e(null,this.t.bind(this));this.changeLanguage(this.options.lng,e)};return this.options.resources||!this.options.initAsync?a():setTimeout(a,0),i}loadResources(e,t=Y){let n=t,r=V(e)?e:this.language;if(typeof e==`function`&&(n=e),!this.options.resources||this.options.partialBundledLanguages){if(r?.toLowerCase()===`cimode`&&(!this.options.preload||this.options.preload.length===0))return n();let e=[],t=t=>{t&&t!==`cimode`&&this.services.languageUtils.toResolveHierarchy(t).forEach(t=>{t!==`cimode`&&(e.includes(t)||e.push(t))})};r?t(r):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(e=>t(e)),this.options.preload?.forEach?.(e=>t(e)),this.services.backendConnector.load(e,this.options.ns,e=>{!e&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),n(e)})}else n(null)}reloadResources(e,t,n){let r=H();return typeof e==`function`&&(n=e,e=void 0),typeof t==`function`&&(n=t,t=void 0),e||=this.languages,t||=this.options.ns,n||=Y,this.services.backendConnector.reload(e,t,e=>{r.resolve(),n(e)}),r}use(e){if(!e)throw Error(`You are passing an undefined module! Please check the object you are passing to i18next.use()`);if(!e.type)throw Error(`You are passing a wrong module! Please check the object you are passing to i18next.use()`);return e.type===`backend`&&(this.modules.backend=e),(e.type===`logger`||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type===`languageDetector`&&(this.modules.languageDetector=e),e.type===`i18nFormat`&&(this.modules.i18nFormat=e),e.type===`postProcessor`&&sw.addPostProcessor(e),e.type===`formatter`&&(this.modules.formatter=e),e.type===`3rdParty`&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&![`cimode`,`dev`].includes(e)){for(let e=0;e<this.languages.length;e++){let t=this.languages[e];if(![`cimode`,`dev`].includes(t)&&this.store.hasLanguageSomeTranslations(t)){this.resolvedLanguage=t;break}}!this.resolvedLanguage&&!this.languages.includes(e)&&this.store.hasLanguageSomeTranslations(e)&&(this.resolvedLanguage=e,this.languages.unshift(e))}}changeLanguage(e,t){this.isLanguageChangingTo=e;let n=H();this.emit(`languageChanging`,e);let r=e=>{this.language=e,this.languages=this.services.languageUtils.toResolveHierarchy(e),this.resolvedLanguage=void 0,this.setResolvedLanguage(e)},i=(i,a)=>{a?this.isLanguageChangingTo===e&&(r(a),this.translator.changeLanguage(a),this.isLanguageChangingTo=void 0,this.emit(`languageChanged`,a),this.logger.log(`languageChanged`,a)):this.isLanguageChangingTo=void 0,n.resolve((...e)=>this.t(...e)),t&&t(i,(...e)=>this.t(...e))},a=t=>{!e&&!t&&this.services.languageDetector&&(t=[]);let n=V(t)?t:t&&t[0],a=this.store.hasLanguageSomeTranslations(n)?n:this.services.languageUtils.getBestMatchFromCodes(V(t)?[t]:t);a&&(this.language||r(a),this.translator.language||this.translator.changeLanguage(a),this.services.languageDetector?.cacheUserLanguage?.(a)),this.loadResources(a,e=>{i(e,a)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?a(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(e),n}getFixedT(e,t,n,r){let i=r?.scopeNs,a=(e,t,...r)=>{let o;o=typeof t==`object`?{...t}:this.options.overloadTranslationOptionHandler([e,t].concat(r)),o.lng=o.lng||a.lng,o.lngs=o.lngs||a.lngs;let s=o.ns!==void 0&&o.ns!==null;o.ns=o.ns||a.ns,o.keyPrefix!==``&&(o.keyPrefix=o.keyPrefix||n||a.keyPrefix);let c={...this.options,...o};Array.isArray(i)&&!s&&(c.ns=i),typeof o.keyPrefix==`function`&&(o.keyPrefix=B(o.keyPrefix,c));let l=this.options.keySeparator||`.`,u;return o.keyPrefix&&Array.isArray(e)?u=e.map(e=>(typeof e==`function`&&(e=B(e,c)),`${o.keyPrefix}${l}${e}`)):(typeof e==`function`&&(e=B(e,c)),u=o.keyPrefix?`${o.keyPrefix}${l}${e}`:e),this.t(u,o)};return V(e)?a.lng=e:a.lngs=e,a.ns=t,a.keyPrefix=n,a}t(...e){return this.translator?.translate(...e)}exists(...e){return this.translator?.exists(...e)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e,t={}){if(!this.isInitialized)return this.logger.warn(`hasLoadedNamespace: i18next was not initialized`,this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn(`hasLoadedNamespace: i18n.languages were undefined or empty`,this.languages),!1;let n=t.lng||this.resolvedLanguage||this.languages[0],r=this.options?this.options.fallbackLng:!1,i=this.languages[this.languages.length-1];if(n.toLowerCase()===`cimode`)return!0;let a=(e,t)=>{let n=this.services.backendConnector.state[`${e}|${t}`];return n===-1||n===0||n===2};if(t.precheck){let e=t.precheck(this,a);if(e!==void 0)return e}return!!(this.hasResourceBundle(n,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||a(n,e)&&(!r||a(i,e)))}loadNamespaces(e,t){let n=H();return this.options.ns?(V(e)&&(e=[e]),e.forEach(e=>{this.options.ns.includes(e)||this.options.ns.push(e)}),this.loadResources(e=>{n.resolve(),t&&t(e)}),n):(t&&t(),Promise.resolve())}loadLanguages(e,t){let n=H();V(e)&&(e=[e]);let r=this.options.preload||[],i=e.filter(e=>!r.includes(e)&&this.services.languageUtils.isSupportedCode(e));return i.length?(this.options.preload=r.concat(i),this.loadResources(e=>{n.resolve(),t&&t(e)}),n):(t&&t(),Promise.resolve())}dir(e){if(e||=this.resolvedLanguage||(this.languages?.length>0?this.languages[0]:this.language),!e)return`rtl`;try{let t=new Intl.Locale(e);if(t&&t.getTextInfo){let e=t.getTextInfo();if(e&&e.direction)return e.direction}}catch{}let t=`ar.shu.sqr.ssh.xaa.yhd.yud.aao.abh.abv.acm.acq.acw.acx.acy.adf.ads.aeb.aec.afb.ajp.apc.apd.arb.arq.ars.ary.arz.auz.avl.ayh.ayl.ayn.ayp.bbz.pga.he.iw.ps.pbt.pbu.pst.prp.prd.ug.ur.ydd.yds.yih.ji.yi.hbo.men.xmn.fa.jpr.peo.pes.prs.dv.sam.ckb`.split(`.`),n=this.services?.languageUtils||new dw(ww());return e.toLowerCase().indexOf(`-latn`)>1?`ltr`:t.includes(n.getLanguagePartFromCode(e))||e.toLowerCase().indexOf(`-arab`)>1?`rtl`:`ltr`}static createInstance(t={},n){let r=new e(t,n);return r.createInstance=e.createInstance,r}cloneInstance(t={},n=Y){let r=t.forkResourceStore;r&&delete t.forkResourceStore;let i={...this.options,...t,isClone:!0},a=new e(i);if((t.debug!==void 0||t.prefix!==void 0)&&(a.logger=a.logger.clone(t)),[`store`,`services`,`language`].forEach(e=>{a[e]=this[e]}),a.services={...this.services},a.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},r&&(a.store=new ow(Object.keys(this.store.data).reduce((e,t)=>(e[t]={...this.store.data[t]},e[t]=Object.keys(e[t]).reduce((n,r)=>(n[r]={...e[t][r]},n),e[t]),e),{}),i),a.services.resourceStore=a.store),t.interpolation){let e={...ww().interpolation,...this.options.interpolation,...t.interpolation},n={...i,interpolation:e};a.services.interpolator=new _w(n)}return a.translator=new uw(a.services,i),a.translator.on(`*`,(e,...t)=>{a.emit(e,...t)}),a.init(i,n),a.translator.options=i,a.translator.backendConnector.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},a}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}},X=Dw.createInstance(),X.createInstance,X.dir,X.init,X.loadResources,X.reloadResources,X.use,X.changeLanguage,X.getFixedT,Z=X.t,X.exists,X.setDefaultNamespace,X.hasLoadedNamespace,X.loadNamespaces,X.loadLanguages})),kw,Aw,jw,Mw,Nw=e((()=>{qt(),BC(),Ow(),i(),kw=e=>e.button===0&&!e.altKey&&!e.ctrlKey&&!e.metaKey&&!e.shiftKey,Aw=e=>e?.dispatchEvent(new Event(`select`,{bubbles:!0})),jw=e=>typeof e==`string`&&e?e:Z(`More`)||`More`,Mw=({items:e,overflows:n,active:r,label:i,onItemClick:a})=>t`
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
			<span>${jw(i)}</span>
			<span class="chevron" aria-hidden="true"
				>${co({width:`16`,height:`16`})}</span
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
`})),Pw,Q,Fw,Iw,Lw,Rw,zw,Bw,Vw,Hw=e((()=>{Nw(),Pw=e=>!e.hasAttribute(`disabled`)&&!e.hasAttribute(`hidden`)&&!e.hasAttribute(`overflowing`),Q=(e,t,n)=>{e.getAttribute(t)!==n&&(n==null?e.removeAttribute(t):e.setAttribute(t,n))},Fw=(e,t)=>{[`active`,`disabled`,`hidden`,`href`,`name`,`badge`,`title`,`role`].forEach(n=>Q(t,n,e.getAttribute(n))),Q(t,`aria-selected`,t.hasAttribute(`active`)?`true`:`false`),Q(t,`aria-disabled`,e.hasAttribute(`disabled`)?`true`:null),t.setAttribute(`tabindex`,`-1`)},Iw=e=>{e.forEach(([,e])=>{Pw(e)&&e.setAttribute(`tabindex`,`0`)})},Lw=e=>{let t=e.find(e=>e.hasAttribute(`active`));return t==null?null:Pw(t)?t:[...e.slice(0,e.indexOf(t))].reverse().find(Pw)??null},Rw=e=>{let t=e.cloneNode(!0);return[`variant`,`size`,`compact-width`,`overflowing`,`style`].forEach(e=>t.removeAttribute(e)),t.setAttribute(`menu`,``),t},zw=(e,t)=>{t.innerHTML!==e.innerHTML&&t.replaceChildren(...[...e.childNodes].map(e=>e.cloneNode(!0))),Fw(e,t)},Bw=e=>new MouseEvent(`click`,e),Vw=e=>t=>{let n=t.composedPath(),r=e.find(([,e])=>n.includes(e));if(!r)return;let[i,a]=r;t.stopPropagation(),i.dispatchEvent(Bw(t))||t.preventDefault(),kw(t)&&Aw(a)}})),Uw,Ww=e((()=>{O(),Uw=A`
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
`})),Gw,Kw,qw,Jw,Yw,Xw,Zw,Qw,$w=e((()=>{P(),Ot(),Nt(),O(),Rt(),Nw(),Hw(),Ww(),Gw=`cosmoz-tab-next`,Kw={attributes:!0,attributeFilter:[`active`,`disabled`,`hidden`,`badge`,`href`,`name`,`title`],childList:!0,subtree:!0,characterData:!0},qw=(e,t)=>{let[n,r]=v(0);return y(()=>{let t=new MutationObserver(()=>r(e=>e+1));return e().forEach(e=>t.observe(e,Kw)),()=>t.disconnect()},[t]),n},Jw=(e,t,n)=>{let r=qw(e,n),i=k();return i.current??=new Map,b(()=>{let n=i.current,r=e(),a=r.filter(e=>t.has(e)).map(e=>{let t=n.get(e)??Rw(e);return n.set(e,t),zw(e,t),[e,t]}),o=new Set(a.map(([e])=>e));n.forEach((e,t)=>{o.has(t)||n.delete(t)}),Iw(a);let s=Lw(r);return r.forEach(e=>Q(e,`tabindex`,e===s?`0`:`-1`)),a},[t,n,r])},Yw=e=>(e.getAttribute(`role`)===`radiogroup`&&(e.removeAttribute(`role`),e.dispatchEvent(new CustomEvent(`deprecation-warning`,{detail:{message:`role=radiogroup is no longer supported: a value picker belongs in cosmoz-toggle-group (@neovici/cosmoz-input); the items are tabs.`}}))),{variant:e.getAttribute(`variant`),size:e.getAttribute(`size`),"compact-width":e.hasAttribute(`compact-width`)?``:null,role:`tab`,"aria-selected":e=>e.hasAttribute(`active`)?`true`:`false`,"aria-disabled":e=>e.hasAttribute(`disabled`)?`true`:null}),Xw=new Set([`ArrowLeft`,`ArrowRight`,`Home`,`End`]),Zw=(e,t,n)=>{let r=e.filter(Pw);if(r.length===0)return null;if(n===`Home`)return r[0];if(n===`End`)return r[r.length-1];let i=r.indexOf(t);return i<0?null:r[Math.max(0,Math.min(r.length-1,i+(n===`ArrowLeft`?-1:1)))]},Qw=e=>{e.getAttribute(`variant`)||e.setAttribute(`variant`,`brand`);let[n,r]=v(0),[i,a]=v(()=>new Set),o=k(),s=S(()=>(o.current??[]).filter(e=>e.matches(Gw)),[]),c=()=>r(e=>e+1),l=Jw(s,i,n);return T(()=>{let t=e=>{if(!Xw.has(e.key))return;let t=s(),n=e.target;if(!t.includes(n))return;e.preventDefault();let r=Zw(t,n,e.key);!r||r===n||r.focus()};return e.addEventListener(`keydown`,t),()=>e.removeEventListener(`keydown`,t)},[]),t`
		<slot name="tabs"></slot>
		<div class="group" role="tablist">
			<slot
				${Dt(o)}
				${Mt(Yw(e))}
				${Lt({is:e=>e.matches(Gw),onOverflow:a})}
				@slotchange=${c}
			></slot>
		</div>
		${Mw({items:l.map(([,e])=>e),overflows:l.length>0,active:l.some(([e])=>e.hasAttribute(`active`)&&!e.hidden),label:e.moreLabel,onItemClick:Vw(l)})}
		<slot name="stats"></slot>
	`},customElements.define(`cosmoz-tabs-next`,C(Qw,{observedAttributes:[`variant`,`size`,`compact-width`,`more-label`],styleSheets:[N,Uw]}))})),eT,tT,nT,rT,iT=e((()=>{O(),eT=()=>new URL(location.hash.replace(/^#!?/iu,``).replace(`%23`,`#`),location.origin),tT=e=>e?()=>new URLSearchParams(eT().hash.replace(`#`,``)).get(e):void 0,nT=(e,t)=>{if(!e)return;let n=eT(),r=new URLSearchParams(n.hash.replace(`#`,``));return t==null?r.delete(e):r.set(e,t),`#!`+Object.assign(n,{hash:r}).href.replace(location.origin,``)},rT=e=>{let t=b(()=>tT(e),[e]),[n,r]=v(t),i=k(n);return y(()=>void(i.current=n),[n]),y(()=>{if(t==null)return;let e=()=>{let e=t();i.current!==e&&r(e)};return e(),window.addEventListener(`popstate`,e),window.addEventListener(`hashchange`,e),()=>{window.removeEventListener(`popstate`,e),window.removeEventListener(`hashchange`,e)}},[t]),[n,b(()=>e?t=>{r(t),history.pushState({},``,nT(e,t))}:r,[e])]}})),aT,oT,sT,cT,lT,uT=e((()=>{iT(),ot(),O(),R(),I(),aT=e=>!e.hidden&&!e.disabled,oT=e=>e.slice().sort((e,t)=>Number(t.fallback??!1)-Number(e.fallback??!1)).find(aT),sT=(e,t)=>{let n=t?e.find(e=>e.name===t):void 0;return n&&aT(n)?n:oT(e)},cT=(e,{hashParam:t,onActivate:n}={})=>{let[r,i]=rT(t),a=k([]),o=b(()=>sT(e,r??void 0),[e,r]);return{tabs:e,active:o,activated:b(()=>{let e=o?.name;return a.current=[...(a.current??[]).filter(t=>t!==e),e].filter(Boolean)},[o]),activate:i,onActivate:S(e=>{let t=e;if(t.button!==0||t.metaKey||t.ctrlKey)return;let r=e.currentTarget?.getAttribute(`name`);r&&(n?.(r),i(r))},[i,n])}},lT=({tabs:e,active:n,onActivate:r,className:i,variant:a,size:o,compactWidth:s})=>e.map(e=>{let c=at(e.title),l=e.content??c,u=e.badge||void 0;return t`<cosmoz-tab-next
			name=${e.name}
			class=${L(i)}
			variant=${L(a)}
			size=${L(o)}
			?compact-width=${L(s)}
			title=${L(c)}
			?active=${n?.name===e.name}
			?hidden=${e.hidden}
			?disabled=${e.disabled}
			badge=${L(u)}
			@click=${r}
			>${F(e.icon,e=>e({slot:`icon`}))}${l}</cosmoz-tab-next
		>`})})),dT=e((()=>{Tt(),$w(),uT()})),fT,pT,mT,hT,gT,_T,vT=e((()=>{i(),x(),d(),D(),fT=class{_ref;constructor(e){this._ref=e}disconnect(){this._ref=void 0}reconnect(e){this._ref=e}deref(){return this._ref}},pT=class{_promise=void 0;_resolve=void 0;get(){return this._promise}pause(){this._promise??=new Promise(e=>this._resolve=e)}resume(){this._resolve?.(),this._promise=this._resolve=void 0}},mT=e=>!l(e)&&typeof e.then==`function`,hT=1073741823,gT=class extends E{__lastRenderedIndex=hT;__values=[];__weakThis=new fT(this);__pauser=new pT;render(...e){return e.find(e=>!mT(e))??a}update(e,t){let n=this.__values,r=n.length;this.__values=t;let i=this.__weakThis,o=this.__pauser;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this.__lastRenderedIndex);e++){let a=t[e];if(!mT(a))return this.__lastRenderedIndex=e,a;e<r&&a===n[e]||Promise.resolve(a).then(async e=>{for(;o.get();)await o.get();let t=i.deref();if(t!==void 0){let n=t.__values.indexOf(a);n>-1&&n<=t.__lastRenderedIndex&&(t.__lastRenderedIndex=n,t.setValue(e))}})}return a}disconnected(){this.__weakThis.disconnect(),this.__pauser.pause()}reconnected(){this.__weakThis.reconnect(this),this.__pauser.resume()}},_T=m(gT)})),$,yT=e((()=>{i(),$=t`
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="6"
		height="10"
		fill="none"
		viewBox="0 0 6 10"
	>
		<path stroke="currentColor" stroke-linecap="round" d="m1 9 4-4-4-4" />
	</svg>
`})),bT,xT,ST=e((()=>{O(),bT=A`
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
`,xT=A`
	${bT}

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
`})),CT,wT,TT,ET,DT,OT,kT,AT,jT=e((()=>{Je(),ke(),bt(),dT(),vT(),Ow(),i(),rt(),R(),I(),yT(),ST(),CT={id:`empty`,content:o,animation:gt},wT=()=>CT,TT=({next:e,prev:n})=>t` <cosmoz-button
			variant="secondary"
			icon-only
			class="button-nav prev"
			title="${Z(`Previous item`)}"
			?disabled=${!n}
			slot="extra"
			@click=${n}
		>
			${$}
		</cosmoz-button>
		<cosmoz-button
			variant="secondary"
			icon-only
			title="${Z(`Next item`)}"
			class="button-nav next"
			?disabled=${!e}
			slot="extra"
			@click=${e}
		>
			${$}
		</cosmoz-button>`,ET=e=>{if(!e)return o;let{pageNumber:n=-1,onPage:r}=e,i=e.totalPages??Math.ceil((e.totalAvailable??0)/(e.pageSize??0));return t` <div class="tabn-pagination" slot="stats">
		<cosmoz-button
			title="${Z(`Previous page`)}"
			class="button-page page-prev"
			size="sm"
			variant="secondary"
			icon-only
			?disabled=${!(n>1)}
			@click=${e=>r(e.ctrlKey?1:n-1)}
		>
			${$}
		</cosmoz-button>
		<cosmoz-button
			title="${Z(`Next page`)}"
			variant="secondary"
			icon-only
			class="button-page page-next"
			size="sm"
			?disabled=${!(n<i)}
			@click=${e=>r(e.ctrlKey?i:n+1)}
		>
			${$}
		</cosmoz-button>
	</div>`},DT=({pagination:e,index:n,items:r,totalAvailable:i,nav:a,activeTab:s})=>r.length<1?o:t`<div class="tabn-stats" slot="stats">
		${(()=>{if(e){let{pageNumber:t,pageSize:i}=e,a=i??r.length;return[((t??1)-1)*a+n+1,r.length<a?e.totalAvailable:(t??1)*a].join(`-`)}let t=a.index,i=a.items?.length;return[i!==r.length&&[`queue`,`split`].includes(s||``)?[t<0?`?`:t+1,i].join(`/`):[n+1,r.length].join(`-`)]})()}
		${[Z(`of`),i??Z(`many`)].join(` `)}
	</div>`,OT=({animationEnd$:e,details:t,item:n,next:r,prev:i,renderItem:a,renderLoader:o})=>{let s=TT({next:r,prev:i});if(!t)return a({item:n,nav:s,next:r,prev:i,animationEnd$:e});let c=t(n);return z([c,e,r],()=>_T(Promise.all([c,e]).then(([e])=>a({item:e,nav:s,next:r,prev:i})),o({item:n,nav:s})))},kT=({id:e,forward:t,item:n,...r})=>n?{id:e(n),render:e=>OT({...e,item:n,...r}),animation:t?gt:_t}:wT(),AT=({header:e,heading:n,afterHeading:r,index:i,tabnav:a,items:o,totalAvailable:s,nav:c,list:l,renderLoader:u,renderItem:d,details:f=c?.details,pagination:p,persistKey:m,splitAttrs:h})=>{let g=a.active?.name,_=p?{...p,totalAvailable:s}:void 0,v=t`
		<cosmoz-tabs-next class="tabn">
			<div class="tabn-heading" slot="tabs">${n}${r}</div>
			${lT({...a,className:`tabn-tab`})}
			${DT({pagination:_,totalAvailable:s,index:i,items:o,nav:c,activeTab:g})}
			${ET(_)}
		</cosmoz-tabs-next>
	`;return t`
		<style>
			${xT}
		</style>

		${F(e,e=>e({tabnav:a,heading:n,afterHeading:r,totalAvailable:s}),()=>v)}

		<cosmoz-resizable-view
			data-active=${g}
			direction="horizontal"
			persist=${L(m)}
			initial-size=${h?.initialSize??`50%`}
			min-size=${h?.minSize??`100`}
		>
			${l}
			<cosmoz-slider
				id="queue"
				slot="next"
				.slide=${F(g!==`overview`,()=>kT({...c,renderLoader:u,renderItem:d,details:f}),wT)}
			></cosmoz-slider>
		</cosmoz-resizable-view>
	`}}));export{z as C,ot as S,ke as T,Vm as _,DT as a,zt as b,dT as c,nT as d,rT as f,Eb as g,BC as h,AT as i,cT as l,Z as m,TT as n,bT as o,Ow as p,ET as r,ST as s,jT as t,iT as u,ks as v,rt as w,it as x,Bt as y};