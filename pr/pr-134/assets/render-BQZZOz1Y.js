import{t as e}from"./chunk-BvrOYcoh.js";import{a as t,c as n,o as r,r as i,t as a}from"./lit-html-BZ3vufxv.js";import{a as o,c as s,i as c,n as l,r as u,s as d,t as f}from"./iframe-DWcXUAEx.js";import{a as p,b as m,c as h,d as g,f as _,g as v,h as y,i as b,l as x,m as S,n as C,o as w,p as T,r as E,s as D,t as O,u as k,y as A}from"./haunted-DbCUSGlb.js";var ee,te,ne,re,ie=e((()=>{O(),ee=e=>{if(typeof e!=`object`||!e)return!1;let t=e;return typeof t.px==`number`&&t.px>=0&&!Number.isNaN(t.px)},te=e=>{try{let t=JSON.parse(e);if(ee(t))return t}catch{}},ne=(e=`cosmoz-resizable-view:`)=>{let t=new Map,n,r=new Map,i=()=>{n=void 0;for(let[t,n]of r)try{localStorage.setItem(e+t,JSON.stringify(n))}catch{}r.clear()},a=(e,t)=>{r.set(e,t),n??=setTimeout(i,100)},o=n=>{if(n.key==null||!n.key.startsWith(e)||n.newValue==null)return;let r=n.key.slice(e.length),i=te(n.newValue);if(i==null)return;let a=t.get(r);if(a)for(let e of a)e(i)};return typeof window<`u`&&window.addEventListener(`storage`,o),{get(t){let n;try{n=localStorage.getItem(e+t)}catch{return}if(n!=null)return te(n)},set(e,t){a(e,t)},subscribe(e,n){let r=t.get(e);return r||(r=new Set,t.set(e,r)),r.add(n),()=>{let r=t.get(e);r&&(r.delete(n),r.size===0&&t.delete(e))}},destroy(){typeof window<`u`&&window.removeEventListener(`storage`,o),n!=null&&(clearTimeout(n),i())}}},re=(e,t,n)=>{let r=k(n);if(r.current=n,v(()=>{if(!e||!t)return;let n=e.get(t);n!=null&&r.current?.(n);let i=e.subscribe?.(t,e=>r.current?.(e));return()=>{i?.(),e.destroy?.()}},[e,t]),!(!e||!t))return n=>e.set(t,n)}})),ae,j,oe=e((()=>{r(),b(),D(),ae=new WeakMap,j=p(class extends E{render(e){return a}update(e,[t]){let n=t!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),a}rt(e){if(this.G!==void 0)if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=ae.get(t);n===void 0&&(n=new WeakMap,ae.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G==`function`?ae.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})})),se,ce=e((()=>{O(),se=A`
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
`})),M,le,N,ue,de,fe,pe,me=e((()=>{M=e=>e instanceof MouseEvent?{x:e.clientX,y:e.clientY}:e.touches&&e.touches.length>0?{x:e.touches[0].clientX,y:e.touches[0].clientY}:{x:0,y:0},le=(e,t,n)=>n===`horizontal`?e.x-t.left:e.y-t.top,N=e=>{let t=parseFloat(e);return Number.isNaN(t)?void 0:t},ue=(e,t)=>{let n=getComputedStyle(e);return t===`horizontal`?{min:N(n.minWidth)??0,max:N(n.maxWidth)??1/0}:{min:N(n.minHeight)??0,max:N(n.maxHeight)??1/0}},de=e=>({rect:e.container.getBoundingClientRect(),bounds:ue(e.previous,e.direction)}),fe=(e,t,n,r)=>Math.max(r.min,Math.min(le(e,t,n),r.max)),pe=e=>{let t;return n=>{let{phase:r,mousePosition:i}=n.detail;if(r===`start`){t=de(e);return}if(r!==`move`&&r!==`end`)return;t||=de(e);let a=fe(i,t.rect,e.direction,t.bounds);r===`move`?e.onResize?.(a):(e.onResizeEnd?.(a),t=void 0)}}})),he,ge=e((()=>{O(),me(),he=(e=`horizontal`)=>{let t=x();return v(()=>{t.setAttribute(`data-direction`,e)},[e]),v(()=>{let e=(e,n)=>{t.dispatchEvent(new CustomEvent(`resize-handle`,{detail:{phase:e,mousePosition:n},bubbles:!0}))},n=0,r,i=()=>{n=0,r&&=(e(`move`,r),void 0)},a=e=>{r=M(e),n||=requestAnimationFrame(i)},o=r=>{n&&(cancelAnimationFrame(n),i()),t.removeAttribute(`data-dragging`),e(`end`,M(r)),document.removeEventListener(`mousemove`,a),document.removeEventListener(`mouseup`,o),document.removeEventListener(`touchmove`,a),document.removeEventListener(`touchend`,o)},s=n=>{t.setAttribute(`data-dragging`,`true`),e(`start`,M(n)),document.addEventListener(`mousemove`,a),document.addEventListener(`mouseup`,o),document.addEventListener(`touchmove`,a,{passive:!1}),document.addEventListener(`touchend`,o)},c=e=>{e.preventDefault(),s(e)},l=e=>{e.preventDefault(),s(e)};return t.addEventListener(`mousedown`,c),t.addEventListener(`touchstart`,l,{passive:!1}),()=>{n&&cancelAnimationFrame(n),t.removeEventListener(`mousedown`,c),t.removeEventListener(`touchstart`,l),document.removeEventListener(`mousemove`,a),document.removeEventListener(`mouseup`,o),document.removeEventListener(`touchmove`,a),document.removeEventListener(`touchend`,o)}},[t]),null}})),_e,ve=e((()=>{O(),_e=A`
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
`})),ye,be=e((()=>{O(),r(),ge(),ve(),ye=({direction:e=`horizontal`})=>(he(e),a),customElements.define(`cosmoz-resize-handle`,C(ye,{styleSheets:[_e],observedAttributes:[`direction`]}))})),xe,P,Se,Ce,we,Te=e((()=>{O(),r(),oe(),ie(),ce(),be(),me(),xe=e=>{let{width:t,height:n}=e.getBoundingClientRect();return t>0&&n>0},P=e=>e?.assignedElements()[0],Se=(e,t,n)=>{let r=()=>{let r=xe(t)&&xe(n);e.toggleAttribute(`data-single-panel`,!r)},i=new ResizeObserver(()=>queueMicrotask(r));return i.observe(t),i.observe(n),r(),i},Ce=(e,t)=>{t!=null&&(e.style.flexBasis=`${t.px}px`)},we=({direction:e=`horizontal`,persist:n})=>{let r=x(),i=k(),a=k(),o=k(),[s,c]=_(!1),l=y(()=>n?ne():void 0,[n]),u=re(l,n,e=>{let t=P(a.current);t&&Ce(t,e)}),d=k(u);d.current=u;let f=S(()=>{let e=a.current?.assignedElements()[0],t=o.current?.assignedElements()[0];e&&t&&c(!0)},[]);return v(()=>{r.setAttribute(`data-direction`,e)},[e]),v(()=>{if(!s)return;let t=P(a.current),n=P(o.current),c=i.current;if(!t||!n||!c)return;let l=pe({container:r,previous:t,direction:e,onResize:e=>{t.style.flexBasis=`${e}px`},onResizeEnd:e=>{d.current?.({px:e})}});c.addEventListener(`resize-handle`,l);let u=Se(r,t,n);return()=>{c.removeEventListener(`resize-handle`,l),u.disconnect()}},[e,l,n,r,s]),t`<slot
			name="previous"
			${j(a)}
			@slotchange=${f}
		></slot
		><cosmoz-resize-handle
			direction=${e}
			${j(i)}
		></cosmoz-resize-handle
		><slot name="next" ${j(o)} @slotchange=${f}></slot>`},customElements.define(`cosmoz-resizable-view`,C(we,{styleSheets:[se],observedAttributes:[`direction`,`persist`]}))})),Ee=e((()=>{ie(),Te(),be(),me()})),F,De=e((()=>{O(),F=m(A`
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
`)})),I,L=e((()=>{r(),I=e=>e??a})),Oe,ke=e((()=>{O(),Oe=A`
	position: relative;

	&::before {
		content: '';
		position: absolute;
		inset: 1px;
		border: 1px solid var(--skeumorphic-color, rgba(255, 255, 255, 0.12));
		border-radius: var(--skeumorphic-radius, calc(var(--cz-radius-md) - 1px));
		pointer-events: none;
		mask-image: linear-gradient(to bottom, black 0%, transparent 100%);
		-webkit-mask-image: linear-gradient(to bottom, black 0%, transparent 100%);
	}
`})),Ae,je=e((()=>{ke(),O(),Ae=A`
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

	/* ========================================
	 * SIZE VARIANTS
	 * ======================================== */

	:host([size='sm']) .button {
		height: 36px;
		padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 3.5);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		border-radius: var(--cz-radius-md);
	}

	:host([size='sm']) ::slotted(svg) {
		width: 16px;
		height: 16px;
	}

	:host([size='lg']) .button {
		height: 44px;
		padding: calc(var(--cz-spacing) * 2.5) calc(var(--cz-spacing) * 4.5);
		font-size: var(--cz-text-base);
		line-height: var(--cz-text-base-line-height);
		border-radius: var(--cz-radius-md);
	}

	:host([size='xl']) .button {
		height: 48px;
		padding: calc(var(--cz-spacing) * 3) calc(var(--cz-spacing) * 5);
		font-size: var(--cz-text-base);
		line-height: var(--cz-text-base-line-height);
		border-radius: var(--cz-radius-md);
	}

	/* ========================================
	 * BUTTON BASE STYLES (Primary - default)
	 * ======================================== */

	.button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		cursor: pointer;
		font-family: var(--cz-font-body);
		font-weight: var(--cz-font-weight-semibold);
		text-decoration: none;
		transition:
			background-color 0.15s ease,
			box-shadow 0.15s ease;
		width: 100%;
		white-space: nowrap;
		border: none;
		background: none;
		text-align: center;

		/* Medium (md) - default size */
		height: 40px;
		padding: calc(var(--cz-spacing) * 2.5) calc(var(--cz-spacing) * 4);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		border-radius: var(--cz-radius-md);

		/* Primary - default variant */
		${Oe}
		background-color: var(--cz-color-bg-brand-solid);
		color: var(--cz-color-text-on-brand);
		box-shadow: var(--cz-shadow-xs-skeumorphic);

		&:hover {
			background-color: var(--cz-color-bg-brand-solid-hover);
		}

		&:active {
			background-color: var(--cz-color-brand-800);
		}

		&:focus-visible {
			outline: none;
			box-shadow: var(--cz-shadow-xs-skeumorphic), var(--cz-focus-ring);
		}
	}

	/* ========================================
	 * STYLE VARIANTS
	 * ======================================== */

	:host([variant='secondary']) .button {
		background-color: var(--cz-color-bg-primary);
		color: var(--cz-color-text-secondary);

		&:hover {
			background-color: var(--cz-color-bg-primary-hover);
			color: var(--cz-color-text-secondary-hover);
		}

		&:active {
			background-color: var(--cz-color-bg-tertiary);
		}

		&:focus-visible {
			box-shadow: var(--cz-shadow-xs-skeumorphic), var(--cz-focus-ring);
		}
	}

	:host([variant='tertiary']) .button {
		background-color: transparent;
		color: var(--cz-color-text-secondary);
		box-shadow: none;

		&::before {
			display: none;
		}

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
			box-shadow: var(--cz-shadow-xs-skeumorphic), var(--cz-focus-ring-error);
		}
	}

	:host([variant='link']) .button {
		background-color: transparent;
		color: var(--cz-color-text-brand);
		box-shadow: none;
		padding: 0;
		height: auto;

		&::before {
			display: none;
		}

		&:hover {
			text-decoration: underline;
			color: var(--cz-color-text-brand-hover);
		}

		&:active {
			color: var(--cz-color-brand-800);
		}

		&:focus-visible {
			text-decoration: underline;
			box-shadow: var(--cz-focus-ring);
			border-radius: var(--cz-radius-xs);
		}
	}

	/* ========================================
	 * DISABLED STATE
	 * ======================================== */

	:host([disabled]) .button {
		cursor: not-allowed;
		pointer-events: none;

		&::before {
			display: none;
		}
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
`})),Me,Ne,Pe=e((()=>{De(),O(),r(),L(),je(),Me=[`variant`,`size`,`disabled`,`full-width`,`type`,`value`,`href`,`target`,`rel`,`download`],Ne=e=>{let n=e.hasAttribute(`disabled`),r=e.getAttribute(`type`)||`button`,i=e.getAttribute(`href`);v(()=>{let t=t=>{e.hasAttribute(`disabled`)&&t.stopImmediatePropagation()};return e.addEventListener(`click`,t,{capture:!0}),()=>e.removeEventListener(`click`,t,{capture:!0})},[]);let o=t`
		<slot name="prefix"></slot>
		<slot></slot>
		<slot name="suffix"></slot>
	`;if(i!=null){let r=e.getAttribute(`target`),s=e.getAttribute(`rel`),c=e.getAttribute(`download`);return t`
			<a
				href=${i}
				class="button"
				part="button"
				aria-disabled=${n?`true`:a}
				target=${I(r)}
				rel=${I(s)}
				download=${I(c)}
				>${o}</a
			>
		`}return t`
		<button type=${r} class="button" ?disabled=${n} part="button">
			${o}
		</button>
	`},customElements.define(`cosmoz-button`,C(Ne,{observedAttributes:Me,styleSheets:[F,Ae],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})),Fe=e((()=>{Pe()})),Ie,Le,Re=e((()=>{r(),D(),u(),Ie=(e,t,n)=>{let r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},Le=p(class extends w{constructor(e){if(super(e),e.type!==h.CHILD)throw Error(`repeat() can only be used in text expressions`)}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);let i=[],a=[],o=0;for(let t of e)i[o]=r?r(t,o):o,a[o]=n(t,o),o++;return{values:a,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,r]){let a=f(e),{values:c,keys:u}=this.dt(t,n,r);if(!Array.isArray(a))return this.ut=u,c;let p=this.ut??=[],m=[],h,g,_=0,v=a.length-1,y=0,b=c.length-1;for(;_<=v&&y<=b;)if(a[_]===null)_++;else if(a[v]===null)v--;else if(p[_]===u[y])m[y]=d(a[_],c[y]),_++,y++;else if(p[v]===u[b])m[b]=d(a[v],c[b]),v--,b--;else if(p[_]===u[b])m[b]=d(a[_],c[b]),s(e,m[b+1],a[_]),_++,b--;else if(p[v]===u[y])m[y]=d(a[v],c[y]),s(e,a[_],a[v]),v--,y++;else if(h===void 0&&(h=Ie(u,y,b),g=Ie(p,_,v)),h.has(p[_]))if(h.has(p[v])){let t=g.get(u[y]),n=t===void 0?null:a[t];if(n===null){let t=s(e,a[_]);d(t,c[y]),m[y]=t}else m[y]=d(n,c[y]),s(e,a[_],n),a[t]=null;y++}else l(a[v]),v--;else l(a[_]),_++;for(;y<=b;){let t=s(e,m[b+1]);d(t,c[y]),m[y++]=t}for(;_<=v;){let e=a[_++];e!==null&&l(e)}return this.ut=u,o(e,m),i}})})),ze,Be,Ve,He=e((()=>{r(),D(),ze=`important`,Be=` !`+ze,Ve=p(class extends w{constructor(e){if(super(e),e.type!==h.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`},``)}update(e,[t]){let{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?n.removeProperty(e):n[e]=null);for(let e in t){let r=t[e];if(r!=null){this.ft.add(e);let t=typeof r==`string`&&r.endsWith(Be);e.includes(`-`)||t?n.setProperty(e,t?r.slice(0,-11):r,t?ze:``):n[e]=r}}return i}})})),Ue,R,We=e((()=>{r(),D(),Ue={},R=p(class extends w{constructor(){super(...arguments),this.ot=Ue}render(e,t){return t()}update(e,[t,n]){if(Array.isArray(t)){if(Array.isArray(this.ot)&&this.ot.length===t.length&&t.every((e,t)=>e===this.ot[t]))return i}else if(this.ot===t)return i;return this.ot=Array.isArray(t)?Array.from(t):t,this.render(t,n)}})})),Ge,Ke,qe=e((()=>{Ge=e=>e,Ke=(e,...t)=>typeof e==`function`?e(...t):e})),Je,Ye=e((()=>{qe(),Je=class extends Promise{constructor(e){let t={};super((e,n)=>Object.assign(t,{resolve:e,reject:n})),Object.assign(this,t),e?.(t.resolve,t.reject)}resolve=()=>{}}})),Xe,Ze,Qe,$e,et=e((()=>{O(),Re(),oe(),He(),We(),Ye(),Xe={host:{position:`relative`,display:`flex`,overflow:`hidden`},slide:{position:`static`,width:`100%`,height:`100%`}},Ze=e=>{let{slide:t}=e,[n,r]=_([]);return T(()=>void Object.assign(e.style,Xe.host),[]),v(()=>{if(t==null)return;let e={animationEnd$:new Je,...t};r((t=[])=>{let n=t.findIndex(({id:t,out:n})=>t===e.id&&n!==!0);return n===-1?[...t,e]:[...t.slice(0,n),e,...t.slice(n+1,t.length)]})},[t]),T(async()=>{if(n.filter(e=>!e.out).length<2){let e=n[0];e&&requestAnimationFrame(()=>requestAnimationFrame(()=>e.animationEnd$.resolve()));return}let e=n[n.length-1],t=n[n.length-2],i=e.el,a=t.el;t.out=!0,i&&a&&await e.animation?.(i,a),r((e=[])=>e.filter(e=>e!==t))},[n]),{slides:n}},Qe=e=>t`<div
		${j(t=>Object.assign(e,{el:t}))}
		class="slide"
		style=${Ve(Xe.slide)}
	>
		${R([e],()=>e.content??e.render?.(e))}
	</div>`,$e=({slides:e})=>R([e],()=>Le(e,({id:e})=>e,Qe))})),tt,nt=e((()=>{O(),et(),tt=e=>$e(Ze(e)),customElements.define(`cosmoz-slider`,C(tt,{useShadowDOM:!1}))})),rt,it,at=e((()=>{rt=(e,t)=>{let n=e.animate([{position:`absolute`,transform:`translateX(100%)`},{transform:`translateX(0%)`}],{duration:200,fill:`none`,easing:`ease-in-out`}),r=t.animate([{},{position:`absolute`,transform:`translateX(-100%)`}],{duration:200,fill:`none`,easing:`ease-in-out`});return Promise.all([n.finished,r.finished])},it=(e,t)=>{let n=e.animate([{position:`absolute`,transform:`translateX(-100%)`},{transform:`translateX(0%)`}],{duration:200,fill:`none`,easing:`ease-in-out`}),r=t.animate([{},{position:`absolute`,transform:`translateX(100%)`}],{duration:200,fill:`none`,easing:`ease-in-out`});return Promise.all([n.finished,r.finished])}})),ot=e((()=>{O(),r()})),st=e((()=>{nt(),ot(),at(),et()})),ct,lt=e((()=>{O(),ct=A`
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
`})),ut,dt,ft=e((()=>{De(),O(),r(),L(),lt(),ut=class extends HTMLElement{connectedCallback(){this.hasAttribute(`role`)||this.setAttribute(`role`,`tab`),this.hasAttribute(`tabindex`)||this.setAttribute(`tabindex`,`-1`)}},dt=e=>{let{active:n,badge:r,href:i}=e;return T(()=>{e.setAttribute(`aria-selected`,n?`true`:`false`)},[n]),v(()=>{let t=t=>{t.target!==e||e.hasAttribute(`disabled`)||(t.key===`Enter`&&!t.repeat&&(t.preventDefault(),e.click()),t.key===` `&&t.preventDefault())},n=t=>{t.target!==e||e.hasAttribute(`disabled`)||t.key===` `&&e.click()};return e.addEventListener(`keydown`,t),e.addEventListener(`keyup`,n),()=>{e.removeEventListener(`keydown`,t),e.removeEventListener(`keyup`,n)}},[]),t`
		<a part="link" href=${I(i)}>
			<slot id="iconSlot" name="icon"></slot>
			<slot id="contentSlot"></slot>
			${r?t`<span class="badge" part="badge">${r}</span>`:a}
		</a>
	`},customElements.define(`cosmoz-tab-next`,C(dt,{baseElement:ut,observedAttributes:[`active`,`badge`,`href`],styleSheets:[F,ct]}))})),pt,mt,ht=e((()=>{r(),b(),pt=class extends E{_slot;_ref;#e=()=>{!this._slot||!this._ref||(this._ref.current=this._slot.assignedElements({flatten:!0}))};#t=()=>this.#e();update(e,[t]){this._ref=t;let n=e.element;this._slot!==n&&(this._slot?.removeEventListener(`slotchange`,this.#t),this._slot=n,n.addEventListener(`slotchange`,this.#t)),this.#e()}disconnected(){this._slot?.removeEventListener(`slotchange`,this.#t),this._slot=void 0}render(e){return i}},mt=p(pt)})),gt,_t,vt,yt,bt=e((()=>{r(),b(),qe(),gt=(e,t,n)=>{n==null?e.removeAttribute(t):e.setAttribute(t,n)},_t=(e,t)=>{for(let[n,r]of Object.entries(e))gt(t,n,Ke(r,t))},vt=class extends E{_slot;_attrs;#e=()=>{if(!this._slot||!this._attrs)return;let e=this._slot.assignedElements({flatten:!0});for(let t of e)_t(this._attrs,t)};#t=()=>this.#e();render(e){return i}update(e,[t]){this._attrs=t;let n=e.element;return this._slot!==n&&(this._slot?.removeEventListener(`slotchange`,this.#t),this._slot=n,n.addEventListener(`slotchange`,this.#t)),this.#e(),i}disconnected(){this._slot?.removeEventListener(`slotchange`,this.#t),this._slot=void 0}},yt=p(vt)})),xt,St,Ct,wt,Tt=e((()=>{r(),b(),xt=(e,t)=>e.assignedElements({flatten:!0}).filter(t),St=(e,t)=>e!=null&&t!=null&&e.size===t.size&&[...t].every(t=>e.has(t)),Ct=class extends E{_slot;_is;_onOverflow;#e=new Map;#t;#n;#r=e=>{e.forEach(e=>{let t=e.target;this.#e.set(t,e.boundingClientRect.height>0&&e.intersectionRect.height===0)}),this.#a()};#i=e=>{this.#n?.unobserve(e),this.#n?.observe(e)};#a=()=>{if(!this._slot||!this._is)return;let e=xt(this._slot,this._is);e.forEach(e=>{let t=this.#e.get(e)===!0;t!==e.hasAttribute(`overflowing`)&&(t?e.setAttribute(`overflowing`,``):e.removeAttribute(`overflowing`))}),this.#e.forEach((t,n)=>{e.includes(n)||(this.#e.delete(n),this.#n?.unobserve(n),n.hasAttribute(`overflowing`)&&n.removeAttribute(`overflowing`))});let t=new Set(e.filter(e=>this.#e.get(e)===!0));St(this.#t,t)||(this.#t=t,this._onOverflow?.(t))};#o=()=>this.#s();#s=()=>{if(!(!this.#n||!this._slot||!this._is)){for(let e of xt(this._slot,this._is))this.#i(e);this.#a()}};render(e){return i}update(e,[t]){this._is=t.is,this._onOverflow=t.onOverflow;let n=e.element;return this._slot!==n&&(this._slot?.removeEventListener(`slotchange`,this.#o),this.#n?.disconnect(),this.#n=void 0,this._slot=n,n.addEventListener(`slotchange`,this.#o)),this.#n??=new IntersectionObserver(this.#r,{root:this._slot,threshold:[0,1]}),this.#s(),i}disconnected(){this._slot?.removeEventListener(`slotchange`,this.#o),this._slot=void 0,this.#n?.disconnect(),this.#n=void 0,this.#e.clear(),this.#t=void 0}},wt=p(Ct)})),Et,Dt=e((()=>{O(),Et=e=>{let t=y(()=>({}),[]);return y(()=>Object.assign(t,e),[t,...Object.values(e)])}})),Ot,kt,At=e((()=>{Dt(),O(),Ot=e=>{for(let t of e.current??[]){let e=t.matches(`[autofocus]`)?t:t.querySelector(`[autofocus]`);if(e instanceof HTMLElement){e.focus();break}}},kt=e=>{let{placement:t=`bottom span-right`,disabled:n,passthrough:r,openOnHover:i,openOnFocus:a}=e,o=k(),[s,c]=g(`opened`,!1),l=k(),u=k(),d=Et({disabled:n,openOnHover:i}),f=S(()=>{let e=l.current?.[0];return e instanceof HTMLElement?e:void 0},[]),p=S(()=>{d.disabled||(c(!0),o.current?.showPopover?.())},[]),m=S(()=>{c(!1),o.current?.hidePopover?.()},[]),h=S(()=>{o.current?.matches(`:popover-open`)?m():p()},[]),_=S(()=>{clearTimeout(d.closeTimeout)},[]),y=S(e=>{d.disabled||e.target===f()&&(_(),p())},[]),b=S(()=>{d.disabled||(_(),p())},[]),x=S(()=>{clearTimeout(d.closeTimeout),d.closeTimeout=setTimeout(()=>{let t=o.current;d.openOnHover&&(e.matches(`:hover`)||t?.matches(`:hover`))||e.matches(`:focus-within`)||t?.matches(`:focus-within`)||m()},100)},[]),C=S(()=>{let t=document.activeElement;for(;t?.shadowRoot;)t=t.shadowRoot.activeElement;if(!(t==null||t===document.body||t.offsetParent==null))return;let n=f();n&&(e.removeEventListener(`focusin`,y),n.focus(),e.addEventListener(`focusin`,y))},[]),w=S(t=>{let n=t.newState===`open`;c(n),n?Ot(u):C(),e.dispatchEvent(new ToggleEvent(`dropdown-toggle`,{newState:t.newState,oldState:t.oldState,composed:!0}))},[]);return v(()=>{let e=o.current;e&&(s?e.showPopover?.():e.hidePopover?.())},[s]),v(()=>{e.toggleAttribute(`opened`,!!s)},[s]),v(()=>{if(!(!a||n))return e.addEventListener(`focusin`,y),e.addEventListener(`focusout`,x),()=>{e.removeEventListener(`focusin`,y),e.removeEventListener(`focusout`,x)}},[a,n]),v(()=>{if(!(!i||n))return e.addEventListener(`pointerenter`,b),e.addEventListener(`pointerleave`,x),()=>{e.removeEventListener(`pointerenter`,b),e.removeEventListener(`pointerleave`,x)}},[i,n]),{placement:t,disabled:n,passthrough:r,opened:s,triggers:l,content:u,popoverRef:o,handleClick:a?p:h,onToggle:w,close:m,scheduleClose:x,cancelClose:_}}})),jt,Mt,Nt,Pt=e((()=>{ht(),bt(),O(),r(),oe(),At(),jt=A`
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
`,Mt=({placement:e,disabled:n,passthrough:r,opened:i,triggers:a,content:o,popoverRef:s,handleClick:c,onToggle:l,close:u,scheduleClose:d,cancelClose:f})=>t`
		<slot
			name="button"
			${mt(a)}
			${yt({"aria-expanded":r?null:String(i),disabled:n&&!r?``:null})}
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
					<slot ${mt(o)}></slot>
				</div>`}
	`,Nt=e=>Mt(kt(e)),customElements.define(`cosmoz-dropdown-next`,C(Nt,{styleSheets:[jt],observedAttributes:[`placement`,`disabled`,`passthrough`,`open-on-hover`,`open-on-focus`],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))}));function Ft(e,t,n){return e?t(e):n?.(e)}var It=e((()=>{})),Lt=e((()=>{r(),L()})),Rt=e((()=>{r(),L()})),zt=e((()=>{r(),L()})),Bt=e((()=>{r(),L()})),Vt=e((()=>{r(),L()})),Ht=e((()=>{r(),L()})),Ut=e((()=>{r(),L()})),Wt=e((()=>{r(),L()})),Gt=e((()=>{r(),L()})),Kt=e((()=>{r(),L()})),qt=e((()=>{r(),L()})),Jt=e((()=>{r(),L()})),Yt=e((()=>{r(),L()})),Xt=e((()=>{r(),L()})),Zt=e((()=>{r(),L()})),Qt=e((()=>{r(),L()})),$t=e((()=>{r(),L()})),en=e((()=>{r(),L()})),tn=e((()=>{r(),L()})),nn=e((()=>{r(),L()})),rn=e((()=>{r(),L()})),an=e((()=>{r(),L()})),on=e((()=>{r(),L()})),sn=e((()=>{r(),L()})),cn=e((()=>{r(),L()})),ln=e((()=>{r(),L()})),un=e((()=>{r(),L()})),dn=e((()=>{r(),L()})),fn=e((()=>{r(),L()})),pn=e((()=>{r(),L()})),mn=e((()=>{r(),L()})),hn=e((()=>{r(),L()})),gn=e((()=>{r(),L()})),_n=e((()=>{r(),L()})),vn=e((()=>{r(),L()})),yn=e((()=>{r(),L()})),bn=e((()=>{r(),L()})),xn=e((()=>{r(),L()})),Sn=e((()=>{r(),L()})),Cn=e((()=>{r(),L()})),wn=e((()=>{r(),L()})),Tn=e((()=>{r(),L()})),En=e((()=>{r(),L()})),Dn=e((()=>{r(),L()})),On=e((()=>{r(),L()})),kn=e((()=>{r(),L()})),An=e((()=>{r(),L()})),jn=e((()=>{r(),L()})),Mn=e((()=>{r(),L()})),Nn=e((()=>{r(),L()})),Pn=e((()=>{r(),L()})),Fn=e((()=>{r(),L()})),In=e((()=>{r(),L()})),Ln=e((()=>{r(),L()})),Rn=e((()=>{r(),L()})),zn=e((()=>{r(),L()})),Bn=e((()=>{r(),L()})),Vn=e((()=>{r(),L()})),Hn=e((()=>{r(),L()})),Un=e((()=>{r(),L()})),Wn=e((()=>{r(),L()})),Gn=e((()=>{r(),L()})),Kn=e((()=>{r(),L()})),qn=e((()=>{r(),L()})),Jn=e((()=>{r(),L()})),Yn=e((()=>{r(),L()})),Xn=e((()=>{r(),L()})),Zn=e((()=>{r(),L()})),Qn=e((()=>{r(),L()})),$n=e((()=>{r(),L()})),er=e((()=>{r(),L()})),tr=e((()=>{r(),L()})),nr=e((()=>{r(),L()})),rr=e((()=>{r(),L()})),ir=e((()=>{r(),L()})),ar=e((()=>{r(),L()})),or=e((()=>{r(),L()})),sr=e((()=>{r(),L()})),cr=e((()=>{r(),L()})),lr=e((()=>{r(),L()})),ur=e((()=>{r(),L()})),dr=e((()=>{r(),L()})),fr=e((()=>{r(),L()})),pr=e((()=>{r(),L()})),mr=e((()=>{r(),L()})),hr=e((()=>{r(),L()})),gr=e((()=>{r(),L()})),_r=e((()=>{r(),L()})),vr=e((()=>{r(),L()})),yr=e((()=>{r(),L()})),br=e((()=>{r(),L()})),xr=e((()=>{r(),L()})),Sr=e((()=>{r(),L()})),Cr=e((()=>{r(),L()})),wr=e((()=>{r(),L()})),Tr=e((()=>{r(),L()})),Er=e((()=>{r(),L()})),Dr=e((()=>{r(),L()})),Or=e((()=>{r(),L()})),kr=e((()=>{r(),L()})),Ar=e((()=>{r(),L()})),jr=e((()=>{r(),L()})),Mr=e((()=>{r(),L()})),Nr=e((()=>{r(),L()})),Pr=e((()=>{r(),L()})),Fr=e((()=>{r(),L()})),Ir=e((()=>{r(),L()})),Lr=e((()=>{r(),L()})),Rr=e((()=>{r(),L()})),zr=e((()=>{r(),L()})),Br=e((()=>{r(),L()})),Vr=e((()=>{r(),L()})),Hr=e((()=>{r(),L()})),Ur=e((()=>{r(),L()})),Wr=e((()=>{r(),L()})),Gr=e((()=>{r(),L()})),Kr=e((()=>{r(),L()})),qr=e((()=>{r(),L()})),Jr=e((()=>{r(),L()})),Yr=e((()=>{r(),L()})),Xr=e((()=>{r(),L()})),Zr=e((()=>{r(),L()})),Qr=e((()=>{r(),L()})),$r=e((()=>{r(),L()})),ei=e((()=>{r(),L()})),ti=e((()=>{r(),L()})),ni=e((()=>{r(),L()})),ri=e((()=>{r(),L()})),ii=e((()=>{r(),L()})),ai=e((()=>{r(),L()})),oi=e((()=>{r(),L()})),si=e((()=>{r(),L()})),ci=e((()=>{r(),L()})),li=e((()=>{r(),L()})),ui=e((()=>{r(),L()})),di=e((()=>{r(),L()})),fi=e((()=>{r(),L()})),pi=e((()=>{r(),L()})),mi=e((()=>{r(),L()})),hi=e((()=>{r(),L()})),gi=e((()=>{r(),L()})),_i=e((()=>{r(),L()})),vi=e((()=>{r(),L()})),yi=e((()=>{r(),L()})),bi=e((()=>{r(),L()})),xi=e((()=>{r(),L()})),Si=e((()=>{r(),L()})),Ci=e((()=>{r(),L()})),wi=e((()=>{r(),L()})),Ti=e((()=>{r(),L()})),Ei=e((()=>{r(),L()})),Di=e((()=>{r(),L()})),Oi=e((()=>{r(),L()})),ki=e((()=>{r(),L()})),Ai=e((()=>{r(),L()})),ji=e((()=>{r(),L()})),Mi=e((()=>{r(),L()})),Ni=e((()=>{r(),L()})),Pi=e((()=>{r(),L()})),Fi=e((()=>{r(),L()})),Ii=e((()=>{r(),L()})),Li=e((()=>{r(),L()})),Ri=e((()=>{r(),L()})),zi=e((()=>{r(),L()})),Bi=e((()=>{r(),L()})),Vi=e((()=>{r(),L()})),Hi=e((()=>{r(),L()})),Ui=e((()=>{r(),L()})),Wi=e((()=>{r(),L()})),Gi=e((()=>{r(),L()})),Ki=e((()=>{r(),L()})),qi=e((()=>{r(),L()})),Ji=e((()=>{r(),L()})),Yi=e((()=>{r(),L()})),Xi=e((()=>{r(),L()})),Zi=e((()=>{r(),L()})),Qi=e((()=>{r(),L()})),$i=e((()=>{r(),L()})),ea=e((()=>{r(),L()})),ta=e((()=>{r(),L()})),na=e((()=>{r(),L()})),ra=e((()=>{r(),L()})),ia=e((()=>{r(),L()})),aa=e((()=>{r(),L()})),oa=e((()=>{r(),L()})),sa=e((()=>{r(),L()})),ca=e((()=>{r(),L()})),la=e((()=>{r(),L()})),ua=e((()=>{r(),L()})),da=e((()=>{r(),L()})),fa=e((()=>{r(),L()})),pa=e((()=>{r(),L()})),ma=e((()=>{r(),L()})),ha=e((()=>{r(),L()})),ga=e((()=>{r(),L()})),_a=e((()=>{r(),L()})),va=e((()=>{r(),L()})),ya=e((()=>{r(),L()})),ba=e((()=>{r(),L()})),xa=e((()=>{r(),L()})),Sa=e((()=>{r(),L()})),Ca=e((()=>{r(),L()})),wa=e((()=>{r(),L()})),Ta=e((()=>{r(),L()})),Ea=e((()=>{r(),L()})),Da=e((()=>{r(),L()})),Oa=e((()=>{r(),L()})),ka=e((()=>{r(),L()})),Aa=e((()=>{r(),L()})),ja=e((()=>{r(),L()})),Ma=e((()=>{r(),L()})),Na=e((()=>{r(),L()})),Pa=e((()=>{r(),L()})),Fa=e((()=>{r(),L()})),Ia=e((()=>{r(),L()})),La=e((()=>{r(),L()})),Ra=e((()=>{r(),L()})),za=e((()=>{r(),L()})),Ba=e((()=>{r(),L()})),Va=e((()=>{r(),L()})),Ha=e((()=>{r(),L()})),Ua=e((()=>{r(),L()})),Wa=e((()=>{r(),L()})),Ga=e((()=>{r(),L()})),Ka=e((()=>{r(),L()})),qa=e((()=>{r(),L()})),Ja=e((()=>{r(),L()})),Ya=e((()=>{r(),L()})),Xa=e((()=>{r(),L()})),Za,Qa=e((()=>{r(),L(),It(),Za=({slot:e,title:r,className:i,width:a=`24`,height:o=`24`,styles:s}={})=>t`
  <svg
    slot=${I(e)}
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
    style=${I(s)}
  >
    ${Ft(r,()=>n`<title>${r}</title>`)}
    <path d="m6 9 6 6 6-6" />
  </svg>
`})),$a=e((()=>{r(),L()})),eo=e((()=>{r(),L()})),to=e((()=>{r(),L()})),no=e((()=>{r(),L()})),ro=e((()=>{r(),L()})),io=e((()=>{r(),L()})),ao=e((()=>{r(),L()})),oo=e((()=>{r(),L()})),so=e((()=>{r(),L()})),co=e((()=>{r(),L()})),lo=e((()=>{r(),L()})),uo=e((()=>{r(),L()})),fo=e((()=>{r(),L()})),po=e((()=>{r(),L()})),mo=e((()=>{r(),L()})),ho=e((()=>{r(),L()})),go=e((()=>{r(),L()})),_o=e((()=>{r(),L()})),vo=e((()=>{r(),L()})),yo=e((()=>{r(),L()})),bo=e((()=>{r(),L()})),xo=e((()=>{r(),L()})),So=e((()=>{r(),L()})),Co=e((()=>{r(),L()})),wo=e((()=>{r(),L()})),To=e((()=>{r(),L()})),Eo=e((()=>{r(),L()})),Do=e((()=>{r(),L()})),Oo=e((()=>{r(),L()})),ko=e((()=>{r(),L()})),Ao=e((()=>{r(),L()})),jo=e((()=>{r(),L()})),Mo=e((()=>{r(),L()})),No=e((()=>{r(),L()})),Po=e((()=>{r(),L()})),Fo=e((()=>{r(),L()})),Io=e((()=>{r(),L()})),Lo=e((()=>{r(),L()})),Ro=e((()=>{r(),L()})),zo=e((()=>{r(),L()})),Bo=e((()=>{r(),L()})),Vo=e((()=>{r(),L()})),Ho=e((()=>{r(),L()})),Uo=e((()=>{r(),L()})),Wo=e((()=>{r(),L()})),Go=e((()=>{r(),L()})),Ko=e((()=>{r(),L()})),qo=e((()=>{r(),L()})),Jo=e((()=>{r(),L()})),Yo=e((()=>{r(),L()})),Xo=e((()=>{r(),L()})),Zo=e((()=>{r(),L()})),Qo=e((()=>{r(),L()})),$o=e((()=>{r(),L()})),es=e((()=>{r(),L()})),ts=e((()=>{r(),L()})),ns=e((()=>{r(),L()})),rs=e((()=>{r(),L()})),is=e((()=>{r(),L()})),as=e((()=>{r(),L()})),os=e((()=>{r(),L()})),ss=e((()=>{r(),L()})),cs=e((()=>{r(),L()})),ls=e((()=>{r(),L()})),us=e((()=>{r(),L()})),ds=e((()=>{r(),L()})),fs=e((()=>{r(),L()})),ps=e((()=>{r(),L()})),ms=e((()=>{r(),L()})),hs=e((()=>{r(),L()})),gs=e((()=>{r(),L()})),_s=e((()=>{r(),L()})),vs=e((()=>{r(),L()})),ys=e((()=>{r(),L()})),bs=e((()=>{r(),L()})),xs=e((()=>{r(),L()})),Ss=e((()=>{r(),L()})),Cs=e((()=>{r(),L()})),ws=e((()=>{r(),L()})),Ts=e((()=>{r(),L()})),Es=e((()=>{r(),L()})),Ds=e((()=>{r(),L()})),Os=e((()=>{r(),L()})),ks=e((()=>{r(),L()})),As=e((()=>{r(),L()})),js=e((()=>{r(),L()})),Ms=e((()=>{r(),L()})),Ns=e((()=>{r(),L()})),Ps=e((()=>{r(),L()})),Fs=e((()=>{r(),L()})),Is=e((()=>{r(),L()})),Ls=e((()=>{r(),L()})),Rs=e((()=>{r(),L()})),zs=e((()=>{r(),L()})),Bs=e((()=>{r(),L()})),Vs=e((()=>{r(),L()})),Hs=e((()=>{r(),L()})),Us=e((()=>{r(),L()})),Ws=e((()=>{r(),L()})),Gs=e((()=>{r(),L()})),Ks=e((()=>{r(),L()})),qs=e((()=>{r(),L()})),Js=e((()=>{r(),L()})),Ys=e((()=>{r(),L()})),Xs=e((()=>{r(),L()})),Zs=e((()=>{r(),L()})),Qs=e((()=>{r(),L()})),$s=e((()=>{r(),L()})),ec=e((()=>{r(),L()})),tc=e((()=>{r(),L()})),nc=e((()=>{r(),L()})),rc=e((()=>{r(),L()})),ic=e((()=>{r(),L()})),ac=e((()=>{r(),L()})),oc=e((()=>{r(),L()})),sc=e((()=>{r(),L()})),cc=e((()=>{r(),L()})),lc=e((()=>{r(),L()})),uc=e((()=>{r(),L()})),dc=e((()=>{r(),L()})),fc=e((()=>{r(),L()})),pc=e((()=>{r(),L()})),mc=e((()=>{r(),L()})),hc=e((()=>{r(),L()})),gc=e((()=>{r(),L()})),_c=e((()=>{r(),L()})),vc=e((()=>{r(),L()})),yc=e((()=>{r(),L()})),bc=e((()=>{r(),L()})),xc=e((()=>{r(),L()})),Sc=e((()=>{r(),L()})),Cc=e((()=>{r(),L()})),wc=e((()=>{r(),L()})),Tc=e((()=>{r(),L()})),Ec=e((()=>{r(),L()})),Dc=e((()=>{r(),L()})),Oc=e((()=>{r(),L()})),kc=e((()=>{r(),L()})),Ac=e((()=>{r(),L()})),jc=e((()=>{r(),L()})),Mc=e((()=>{r(),L()})),Nc=e((()=>{r(),L()})),Pc=e((()=>{r(),L()})),Fc=e((()=>{r(),L()})),Ic=e((()=>{r(),L()})),Lc=e((()=>{r(),L()})),Rc=e((()=>{r(),L()})),zc=e((()=>{r(),L()})),Bc=e((()=>{r(),L()})),Vc=e((()=>{r(),L()})),Hc=e((()=>{r(),L()})),Uc=e((()=>{r(),L()})),Wc=e((()=>{r(),L()})),Gc=e((()=>{r(),L()})),Kc=e((()=>{r(),L()})),qc=e((()=>{r(),L()})),Jc=e((()=>{r(),L()})),Yc=e((()=>{r(),L()})),Xc=e((()=>{r(),L()})),Zc=e((()=>{r(),L()})),Qc=e((()=>{r(),L()})),$c=e((()=>{r(),L()})),el=e((()=>{r(),L()})),tl=e((()=>{r(),L()})),nl=e((()=>{r(),L()})),rl=e((()=>{r(),L()})),il=e((()=>{r(),L()})),al=e((()=>{r(),L()})),ol=e((()=>{r(),L()})),sl=e((()=>{r(),L()})),cl=e((()=>{r(),L()})),ll=e((()=>{r(),L()})),ul=e((()=>{r(),L()})),dl=e((()=>{r(),L()})),fl=e((()=>{r(),L()})),pl=e((()=>{r(),L()})),ml=e((()=>{r(),L()})),hl=e((()=>{r(),L()})),gl=e((()=>{r(),L()})),_l=e((()=>{r(),L()})),vl=e((()=>{r(),L()})),yl=e((()=>{r(),L()})),bl=e((()=>{r(),L()})),xl=e((()=>{r(),L()})),Sl=e((()=>{r(),L()})),Cl=e((()=>{r(),L()})),wl=e((()=>{r(),L()})),Tl=e((()=>{r(),L()})),El=e((()=>{r(),L()})),Dl=e((()=>{r(),L()})),Ol=e((()=>{r(),L()})),kl=e((()=>{r(),L()})),Al=e((()=>{r(),L()})),jl=e((()=>{r(),L()})),Ml=e((()=>{r(),L()})),Nl=e((()=>{r(),L()})),Pl=e((()=>{r(),L()})),Fl=e((()=>{r(),L()})),Il=e((()=>{r(),L()})),Ll=e((()=>{r(),L()})),Rl=e((()=>{r(),L()})),zl=e((()=>{r(),L()})),Bl=e((()=>{r(),L()})),Vl=e((()=>{r(),L()})),Hl=e((()=>{r(),L()})),Ul=e((()=>{r(),L()})),Wl=e((()=>{r(),L()})),Gl=e((()=>{r(),L()})),Kl=e((()=>{r(),L()})),ql=e((()=>{r(),L()})),Jl=e((()=>{r(),L()})),Yl=e((()=>{r(),L()})),Xl=e((()=>{r(),L()})),Zl=e((()=>{r(),L()})),Ql=e((()=>{r(),L()})),$l=e((()=>{r(),L()})),eu=e((()=>{r(),L()})),tu=e((()=>{r(),L()})),nu=e((()=>{r(),L()})),ru=e((()=>{r(),L()})),iu=e((()=>{r(),L()})),au=e((()=>{r(),L()})),ou=e((()=>{r(),L()})),su=e((()=>{r(),L()})),cu=e((()=>{r(),L()})),lu=e((()=>{r(),L()})),uu=e((()=>{r(),L()})),du=e((()=>{r(),L()})),fu=e((()=>{r(),L()})),pu=e((()=>{r(),L()})),mu=e((()=>{r(),L()})),hu=e((()=>{r(),L()})),gu=e((()=>{r(),L()})),_u=e((()=>{r(),L()})),vu=e((()=>{r(),L()})),yu=e((()=>{r(),L()})),bu=e((()=>{r(),L()})),xu=e((()=>{r(),L()})),Su=e((()=>{r(),L()})),Cu=e((()=>{r(),L()})),wu=e((()=>{r(),L()})),Tu=e((()=>{r(),L()})),Eu=e((()=>{r(),L()})),Du=e((()=>{r(),L()})),Ou=e((()=>{r(),L()})),ku=e((()=>{r(),L()})),Au=e((()=>{r(),L()})),ju=e((()=>{r(),L()})),Mu=e((()=>{r(),L()})),Nu=e((()=>{r(),L()})),Pu=e((()=>{r(),L()})),Fu=e((()=>{r(),L()})),Iu=e((()=>{r(),L()})),Lu=e((()=>{r(),L()})),Ru=e((()=>{r(),L()})),zu=e((()=>{r(),L()})),Bu=e((()=>{r(),L()})),Vu=e((()=>{r(),L()})),Hu=e((()=>{r(),L()})),Uu=e((()=>{r(),L()})),Wu=e((()=>{r(),L()})),Gu=e((()=>{r(),L()})),Ku=e((()=>{r(),L()})),qu=e((()=>{r(),L()})),Ju=e((()=>{r(),L()})),Yu=e((()=>{r(),L()})),Xu=e((()=>{r(),L()})),Zu=e((()=>{r(),L()})),Qu=e((()=>{r(),L()})),$u=e((()=>{r(),L()})),ed=e((()=>{r(),L()})),td=e((()=>{r(),L()})),nd=e((()=>{r(),L()})),rd=e((()=>{r(),L()})),id=e((()=>{r(),L()})),ad=e((()=>{r(),L()})),od=e((()=>{r(),L()})),sd=e((()=>{r(),L()})),cd=e((()=>{r(),L()})),ld=e((()=>{r(),L()})),ud=e((()=>{r(),L()})),dd=e((()=>{r(),L()})),fd=e((()=>{r(),L()})),pd=e((()=>{r(),L()})),md=e((()=>{r(),L()})),hd=e((()=>{r(),L()})),gd=e((()=>{r(),L()})),_d=e((()=>{r(),L()})),vd=e((()=>{r(),L()})),yd=e((()=>{r(),L()})),bd=e((()=>{r(),L()})),xd=e((()=>{r(),L()})),Sd=e((()=>{r(),L()})),Cd=e((()=>{r(),L()})),wd=e((()=>{r(),L()})),Td=e((()=>{r(),L()})),Ed=e((()=>{r(),L()})),Dd=e((()=>{r(),L()})),Od=e((()=>{r(),L()})),kd=e((()=>{r(),L()})),Ad=e((()=>{r(),L()})),jd=e((()=>{r(),L()})),Md=e((()=>{r(),L()})),Nd=e((()=>{r(),L()})),Pd=e((()=>{r(),L()})),Fd=e((()=>{r(),L()})),Id=e((()=>{r(),L()})),Ld=e((()=>{r(),L()})),Rd=e((()=>{r(),L()})),zd=e((()=>{r(),L()})),Bd=e((()=>{r(),L()})),Vd=e((()=>{r(),L()})),Hd=e((()=>{r(),L()})),Ud=e((()=>{r(),L()})),Wd=e((()=>{r(),L()})),Gd=e((()=>{r(),L()})),Kd=e((()=>{r(),L()})),qd=e((()=>{r(),L()})),Jd=e((()=>{r(),L()})),Yd=e((()=>{r(),L()})),Xd=e((()=>{r(),L()})),Zd=e((()=>{r(),L()})),Qd=e((()=>{r(),L()})),$d=e((()=>{r(),L()})),ef=e((()=>{r(),L()})),tf=e((()=>{r(),L()})),nf=e((()=>{r(),L()})),rf=e((()=>{r(),L()})),af=e((()=>{r(),L()})),of=e((()=>{r(),L()})),sf=e((()=>{r(),L()})),cf=e((()=>{r(),L()})),lf=e((()=>{r(),L()})),uf=e((()=>{r(),L()})),df=e((()=>{r(),L()})),ff=e((()=>{r(),L()})),pf=e((()=>{r(),L()})),mf=e((()=>{r(),L()})),hf=e((()=>{r(),L()})),gf=e((()=>{r(),L()})),_f=e((()=>{r(),L()})),vf=e((()=>{r(),L()})),yf=e((()=>{r(),L()})),bf=e((()=>{r(),L()})),xf=e((()=>{r(),L()})),Sf=e((()=>{r(),L()})),Cf=e((()=>{r(),L()})),wf=e((()=>{r(),L()})),Tf=e((()=>{r(),L()})),Ef=e((()=>{r(),L()})),Df=e((()=>{r(),L()})),Of=e((()=>{r(),L()})),kf=e((()=>{r(),L()})),Af=e((()=>{r(),L()})),jf=e((()=>{r(),L()})),Mf=e((()=>{r(),L()})),Nf=e((()=>{r(),L()})),Pf=e((()=>{r(),L()})),Ff=e((()=>{r(),L()})),If=e((()=>{r(),L()})),Lf=e((()=>{r(),L()})),Rf=e((()=>{r(),L()})),zf=e((()=>{r(),L()})),Bf=e((()=>{r(),L()})),Vf=e((()=>{r(),L()})),Hf=e((()=>{r(),L()})),Uf=e((()=>{r(),L()})),Wf=e((()=>{r(),L()})),Gf=e((()=>{r(),L()})),Kf=e((()=>{r(),L()})),qf=e((()=>{r(),L()})),Jf=e((()=>{r(),L()})),Yf=e((()=>{r(),L()})),Xf=e((()=>{r(),L()})),Zf=e((()=>{r(),L()})),Qf=e((()=>{r(),L()})),$f=e((()=>{r(),L()})),ep=e((()=>{r(),L()})),tp=e((()=>{r(),L()})),np=e((()=>{r(),L()})),rp=e((()=>{r(),L()})),ip=e((()=>{r(),L()})),ap=e((()=>{r(),L()})),op=e((()=>{r(),L()})),sp=e((()=>{r(),L()})),cp=e((()=>{r(),L()})),lp=e((()=>{r(),L()})),up=e((()=>{r(),L()})),dp=e((()=>{r(),L()})),fp=e((()=>{r(),L()})),pp=e((()=>{r(),L()})),mp=e((()=>{r(),L()})),hp=e((()=>{r(),L()})),gp=e((()=>{r(),L()})),_p=e((()=>{r(),L()})),vp=e((()=>{r(),L()})),yp=e((()=>{r(),L()})),bp=e((()=>{r(),L()})),xp=e((()=>{r(),L()})),Sp=e((()=>{r(),L()})),Cp=e((()=>{r(),L()})),wp=e((()=>{r(),L()})),Tp=e((()=>{r(),L()})),Ep=e((()=>{r(),L()})),Dp=e((()=>{r(),L()})),Op=e((()=>{r(),L()})),kp=e((()=>{r(),L()})),Ap=e((()=>{r(),L()})),jp=e((()=>{r(),L()})),Mp=e((()=>{r(),L()})),Np=e((()=>{r(),L()})),Pp=e((()=>{r(),L()})),Fp=e((()=>{r(),L()})),Ip=e((()=>{r(),L()})),Lp=e((()=>{r(),L()})),Rp=e((()=>{r(),L()})),zp=e((()=>{r(),L()})),Bp=e((()=>{r(),L()})),Vp=e((()=>{r(),L()})),Hp=e((()=>{r(),L()})),Up=e((()=>{r(),L()})),Wp=e((()=>{r(),L()})),Gp=e((()=>{r(),L()})),Kp=e((()=>{r(),L()})),qp=e((()=>{r(),L()})),Jp=e((()=>{r(),L()})),Yp=e((()=>{r(),L()})),Xp=e((()=>{r(),L()})),Zp=e((()=>{r(),L()})),Qp=e((()=>{r(),L()})),$p=e((()=>{r(),L()})),em=e((()=>{r(),L()})),tm=e((()=>{r(),L()})),nm=e((()=>{r(),L()})),rm=e((()=>{r(),L()})),im=e((()=>{r(),L()})),am=e((()=>{r(),L()})),om=e((()=>{r(),L()})),sm=e((()=>{r(),L()})),cm=e((()=>{r(),L()})),lm=e((()=>{r(),L()})),um=e((()=>{r(),L()})),dm=e((()=>{r(),L()})),fm=e((()=>{r(),L()})),pm=e((()=>{r(),L()})),mm=e((()=>{r(),L()})),hm=e((()=>{r(),L()})),gm=e((()=>{r(),L()})),_m=e((()=>{r(),L()})),vm=e((()=>{r(),L()})),ym=e((()=>{r(),L()})),bm=e((()=>{r(),L()})),xm=e((()=>{r(),L()})),Sm=e((()=>{r(),L()})),Cm=e((()=>{r(),L()})),wm=e((()=>{r(),L()})),Tm=e((()=>{r(),L()})),Em=e((()=>{r(),L()})),Dm=e((()=>{r(),L()})),Om=e((()=>{r(),L()})),km=e((()=>{r(),L()})),Am=e((()=>{r(),L()})),jm=e((()=>{r(),L()})),Mm=e((()=>{r(),L()})),Nm=e((()=>{r(),L()})),Pm=e((()=>{r(),L()})),Fm=e((()=>{r(),L()})),Im=e((()=>{r(),L()})),Lm=e((()=>{r(),L()})),Rm=e((()=>{r(),L()})),zm=e((()=>{r(),L()})),Bm=e((()=>{r(),L()})),Vm=e((()=>{r(),L()})),Hm=e((()=>{r(),L()})),Um=e((()=>{r(),L()})),Wm=e((()=>{r(),L()})),Gm=e((()=>{r(),L()})),Km=e((()=>{r(),L()})),qm=e((()=>{r(),L()})),Jm=e((()=>{r(),L()})),Ym=e((()=>{r(),L()})),Xm=e((()=>{r(),L()})),Zm=e((()=>{r(),L()})),Qm=e((()=>{r(),L()})),$m=e((()=>{r(),L()})),eh=e((()=>{r(),L()})),th=e((()=>{r(),L()})),nh=e((()=>{r(),L()})),rh=e((()=>{r(),L()})),ih=e((()=>{r(),L()})),ah=e((()=>{r(),L()})),oh=e((()=>{r(),L()})),sh=e((()=>{r(),L()})),ch=e((()=>{r(),L()})),lh=e((()=>{r(),L()})),uh=e((()=>{r(),L()})),dh=e((()=>{r(),L()})),fh=e((()=>{r(),L()})),ph=e((()=>{r(),L()})),mh=e((()=>{r(),L()})),hh=e((()=>{r(),L()})),gh=e((()=>{r(),L()})),_h=e((()=>{r(),L()})),vh=e((()=>{r(),L()})),yh=e((()=>{r(),L()})),bh=e((()=>{r(),L()})),xh=e((()=>{r(),L()})),Sh=e((()=>{r(),L()})),Ch=e((()=>{r(),L()})),wh=e((()=>{r(),L()})),Th=e((()=>{r(),L()})),Eh=e((()=>{r(),L()})),Dh=e((()=>{r(),L()})),Oh=e((()=>{r(),L()})),kh=e((()=>{r(),L()})),Ah=e((()=>{r(),L()})),jh=e((()=>{r(),L()})),Mh=e((()=>{r(),L()})),Nh=e((()=>{r(),L()})),Ph=e((()=>{r(),L()})),Fh=e((()=>{r(),L()})),Ih=e((()=>{r(),L()})),Lh=e((()=>{r(),L()})),Rh=e((()=>{r(),L()})),zh=e((()=>{r(),L()})),Bh=e((()=>{r(),L()})),Vh=e((()=>{r(),L()})),Hh=e((()=>{r(),L()})),Uh=e((()=>{r(),L()})),Wh=e((()=>{r(),L()})),Gh=e((()=>{r(),L()})),Kh=e((()=>{r(),L()})),qh=e((()=>{r(),L()})),Jh=e((()=>{r(),L()})),Yh=e((()=>{r(),L()})),Xh=e((()=>{r(),L()})),Zh=e((()=>{r(),L()})),Qh=e((()=>{r(),L()})),$h=e((()=>{r(),L()})),eg=e((()=>{r(),L()})),tg=e((()=>{r(),L()})),ng=e((()=>{r(),L()})),rg=e((()=>{r(),L()})),ig=e((()=>{r(),L()})),ag=e((()=>{r(),L()})),og=e((()=>{r(),L()})),sg=e((()=>{r(),L()})),cg=e((()=>{r(),L()})),lg=e((()=>{r(),L()})),ug=e((()=>{r(),L()})),dg=e((()=>{r(),L()})),fg=e((()=>{r(),L()})),pg=e((()=>{r(),L()})),mg=e((()=>{r(),L()})),hg=e((()=>{r(),L()})),gg=e((()=>{r(),L()})),_g=e((()=>{r(),L()})),vg=e((()=>{r(),L()})),yg=e((()=>{r(),L()})),bg=e((()=>{r(),L()})),xg=e((()=>{r(),L()})),Sg=e((()=>{r(),L()})),Cg=e((()=>{r(),L()})),wg=e((()=>{r(),L()})),Tg=e((()=>{r(),L()})),Eg=e((()=>{r(),L()})),Dg=e((()=>{r(),L()})),Og=e((()=>{r(),L()})),kg=e((()=>{r(),L()})),Ag=e((()=>{r(),L()})),jg=e((()=>{r(),L()})),Mg=e((()=>{r(),L()})),Ng=e((()=>{r(),L()})),Pg=e((()=>{r(),L()})),Fg=e((()=>{r(),L()})),Ig=e((()=>{r(),L()})),Lg=e((()=>{r(),L()})),Rg=e((()=>{r(),L()})),zg=e((()=>{r(),L()})),Bg=e((()=>{r(),L()})),Vg=e((()=>{r(),L()})),Hg=e((()=>{r(),L()})),Ug=e((()=>{r(),L()})),Wg=e((()=>{r(),L()})),Gg=e((()=>{r(),L()})),Kg=e((()=>{r(),L()})),qg=e((()=>{r(),L()})),Jg=e((()=>{r(),L()})),Yg=e((()=>{r(),L()})),Xg=e((()=>{r(),L()})),Zg=e((()=>{r(),L()})),Qg=e((()=>{r(),L()})),$g=e((()=>{r(),L()})),e_=e((()=>{r(),L()})),t_=e((()=>{r(),L()})),n_=e((()=>{r(),L()})),r_=e((()=>{r(),L()})),i_=e((()=>{r(),L()})),a_=e((()=>{r(),L()})),o_=e((()=>{r(),L()})),s_=e((()=>{r(),L()})),c_=e((()=>{r(),L()})),l_=e((()=>{r(),L()})),u_=e((()=>{r(),L()})),d_=e((()=>{r(),L()})),f_=e((()=>{r(),L()})),p_=e((()=>{r(),L()})),m_=e((()=>{r(),L()})),h_=e((()=>{r(),L()})),g_=e((()=>{r(),L()})),__=e((()=>{r(),L()})),v_=e((()=>{r(),L()})),y_=e((()=>{r(),L()})),b_=e((()=>{r(),L()})),x_=e((()=>{r(),L()})),S_=e((()=>{r(),L()})),C_=e((()=>{r(),L()})),w_=e((()=>{r(),L()})),T_=e((()=>{r(),L()})),E_=e((()=>{r(),L()})),D_=e((()=>{r(),L()})),O_=e((()=>{r(),L()})),k_=e((()=>{r(),L()})),A_=e((()=>{r(),L()})),j_=e((()=>{r(),L()})),M_=e((()=>{r(),L()})),N_=e((()=>{r(),L()})),P_=e((()=>{r(),L()})),F_=e((()=>{r(),L()})),I_=e((()=>{r(),L()})),L_=e((()=>{r(),L()})),R_=e((()=>{r(),L()})),z_=e((()=>{r(),L()})),B_=e((()=>{r(),L()})),V_=e((()=>{r(),L()})),H_=e((()=>{r(),L()})),U_=e((()=>{r(),L()})),W_=e((()=>{r(),L()})),G_=e((()=>{r(),L()})),K_=e((()=>{r(),L()})),q_=e((()=>{r(),L()})),J_=e((()=>{r(),L()})),Y_=e((()=>{r(),L()})),X_=e((()=>{r(),L()})),Z_=e((()=>{r(),L()})),Q_=e((()=>{r(),L()})),$_=e((()=>{r(),L()})),ev=e((()=>{r(),L()})),tv=e((()=>{r(),L()})),nv=e((()=>{r(),L()})),rv=e((()=>{r(),L()})),iv=e((()=>{r(),L()})),av=e((()=>{r(),L()})),ov=e((()=>{r(),L()})),sv=e((()=>{r(),L()})),cv=e((()=>{r(),L()})),lv=e((()=>{r(),L()})),uv=e((()=>{r(),L()})),dv=e((()=>{r(),L()})),fv=e((()=>{r(),L()})),pv=e((()=>{r(),L()})),mv=e((()=>{r(),L()})),hv=e((()=>{r(),L()})),gv=e((()=>{r(),L()})),_v=e((()=>{r(),L()})),vv=e((()=>{r(),L()})),yv=e((()=>{r(),L()})),bv=e((()=>{r(),L()})),xv=e((()=>{r(),L()})),Sv=e((()=>{r(),L()})),Cv=e((()=>{r(),L()})),wv=e((()=>{r(),L()})),Tv=e((()=>{r(),L()})),Ev=e((()=>{r(),L()})),Dv=e((()=>{r(),L()})),Ov=e((()=>{r(),L()})),kv=e((()=>{r(),L()})),Av=e((()=>{r(),L()})),jv=e((()=>{r(),L()})),Mv=e((()=>{r(),L()})),Nv=e((()=>{r(),L()})),Pv=e((()=>{r(),L()})),Fv=e((()=>{r(),L()})),Iv=e((()=>{r(),L()})),Lv=e((()=>{r(),L()})),Rv=e((()=>{r(),L()})),zv=e((()=>{r(),L()})),Bv=e((()=>{r(),L()})),Vv=e((()=>{r(),L()})),Hv=e((()=>{r(),L()})),Uv=e((()=>{r(),L()})),Wv=e((()=>{r(),L()})),Gv=e((()=>{r(),L()})),Kv=e((()=>{r(),L()})),qv=e((()=>{r(),L()})),Jv=e((()=>{r(),L()})),Yv=e((()=>{r(),L()})),Xv=e((()=>{r(),L()})),Zv=e((()=>{r(),L()})),Qv=e((()=>{r(),L()})),$v=e((()=>{r(),L()})),ey=e((()=>{r(),L()})),ty=e((()=>{r(),L()})),ny=e((()=>{r(),L()})),ry=e((()=>{r(),L()})),iy=e((()=>{r(),L()})),ay=e((()=>{r(),L()})),oy=e((()=>{r(),L()})),sy=e((()=>{r(),L()})),cy=e((()=>{r(),L()})),ly=e((()=>{r(),L()})),uy=e((()=>{r(),L()})),dy=e((()=>{r(),L()})),fy=e((()=>{r(),L()})),py=e((()=>{r(),L()})),my=e((()=>{r(),L()})),hy=e((()=>{r(),L()})),gy=e((()=>{r(),L()})),_y=e((()=>{r(),L()})),vy=e((()=>{r(),L()})),yy=e((()=>{r(),L()})),by=e((()=>{r(),L()})),xy=e((()=>{r(),L()})),Sy=e((()=>{r(),L()})),Cy=e((()=>{r(),L()})),wy=e((()=>{r(),L()})),Ty=e((()=>{r(),L()})),Ey=e((()=>{r(),L()})),Dy=e((()=>{r(),L()})),Oy=e((()=>{r(),L()})),ky=e((()=>{r(),L()})),Ay=e((()=>{r(),L()})),jy=e((()=>{r(),L()})),My=e((()=>{r(),L()})),Ny=e((()=>{r(),L()})),Py=e((()=>{r(),L()})),Fy=e((()=>{r(),L()})),Iy=e((()=>{r(),L()})),Ly=e((()=>{r(),L()})),Ry=e((()=>{r(),L()})),zy=e((()=>{r(),L()})),By=e((()=>{r(),L()})),Vy=e((()=>{r(),L()})),Hy=e((()=>{r(),L()})),Uy=e((()=>{r(),L()})),Wy=e((()=>{r(),L()})),Gy=e((()=>{r(),L()})),Ky=e((()=>{r(),L()})),qy=e((()=>{r(),L()})),Jy=e((()=>{r(),L()})),Yy=e((()=>{r(),L()})),Xy=e((()=>{r(),L()})),Zy=e((()=>{r(),L()})),Qy=e((()=>{r(),L()})),$y=e((()=>{r(),L()})),eb=e((()=>{r(),L()})),tb=e((()=>{r(),L()})),nb=e((()=>{r(),L()})),rb=e((()=>{r(),L()})),ib=e((()=>{r(),L()})),ab=e((()=>{r(),L()})),ob=e((()=>{r(),L()})),sb=e((()=>{r(),L()})),cb=e((()=>{r(),L()})),lb=e((()=>{r(),L()})),ub=e((()=>{r(),L()})),db=e((()=>{r(),L()})),fb=e((()=>{r(),L()})),pb=e((()=>{r(),L()})),mb=e((()=>{r(),L()})),hb=e((()=>{r(),L()})),gb=e((()=>{r(),L()})),_b=e((()=>{r(),L()})),vb=e((()=>{r(),L()})),yb=e((()=>{r(),L()})),bb=e((()=>{r(),L()})),xb=e((()=>{r(),L()})),Sb=e((()=>{r(),L()})),Cb=e((()=>{r(),L()})),wb=e((()=>{r(),L()})),Tb=e((()=>{r(),L()})),Eb=e((()=>{r(),L()})),Db=e((()=>{r(),L()})),Ob=e((()=>{r(),L()})),kb=e((()=>{r(),L()})),Ab=e((()=>{r(),L()})),jb=e((()=>{r(),L()})),Mb=e((()=>{r(),L()})),Nb=e((()=>{r(),L()})),Pb=e((()=>{r(),L()})),Fb=e((()=>{r(),L()})),Ib=e((()=>{r(),L()})),Lb=e((()=>{r(),L()})),Rb=e((()=>{r(),L()})),zb=e((()=>{r(),L()})),Bb=e((()=>{r(),L()})),Vb=e((()=>{r(),L()})),Hb=e((()=>{r(),L()})),Ub=e((()=>{r(),L()})),Wb=e((()=>{r(),L()})),Gb=e((()=>{r(),L()})),Kb=e((()=>{r(),L()})),qb=e((()=>{r(),L()})),Jb=e((()=>{r(),L()})),Yb=e((()=>{r(),L()})),Xb=e((()=>{r(),L()})),Zb=e((()=>{r(),L()})),Qb=e((()=>{r(),L()})),$b=e((()=>{r(),L()})),ex=e((()=>{r(),L()})),tx=e((()=>{r(),L()})),nx=e((()=>{r(),L()})),rx=e((()=>{r(),L()})),ix=e((()=>{r(),L()})),ax=e((()=>{r(),L()})),ox=e((()=>{r(),L()})),sx=e((()=>{r(),L()})),cx=e((()=>{r(),L()})),lx=e((()=>{r(),L()})),ux=e((()=>{r(),L()})),dx=e((()=>{r(),L()})),fx=e((()=>{r(),L()})),px=e((()=>{r(),L()})),mx=e((()=>{r(),L()})),hx=e((()=>{r(),L()})),gx=e((()=>{r(),L()})),_x=e((()=>{r(),L()})),vx=e((()=>{r(),L()})),yx=e((()=>{r(),L()})),bx=e((()=>{r(),L()})),xx=e((()=>{r(),L()})),Sx=e((()=>{r(),L()})),Cx=e((()=>{r(),L()})),wx=e((()=>{r(),L()})),Tx=e((()=>{r(),L()})),Ex=e((()=>{r(),L()})),Dx=e((()=>{r(),L()})),Ox=e((()=>{r(),L()})),kx=e((()=>{r(),L()})),Ax=e((()=>{r(),L()})),jx=e((()=>{r(),L()})),Mx=e((()=>{r(),L()})),Nx=e((()=>{r(),L()})),Px=e((()=>{r(),L()})),Fx=e((()=>{r(),L()})),Ix=e((()=>{r(),L()})),Lx=e((()=>{r(),L()})),Rx=e((()=>{r(),L()})),zx=e((()=>{r(),L()})),Bx=e((()=>{r(),L()})),Vx=e((()=>{r(),L()})),Hx=e((()=>{r(),L()})),Ux=e((()=>{r(),L()})),Wx=e((()=>{r(),L()})),Gx=e((()=>{r(),L()})),Kx=e((()=>{r(),L()})),qx=e((()=>{r(),L()})),Jx=e((()=>{r(),L()})),Yx=e((()=>{r(),L()})),Xx=e((()=>{r(),L()})),Zx=e((()=>{r(),L()})),Qx=e((()=>{r(),L()})),$x=e((()=>{r(),L()})),eS=e((()=>{r(),L()})),tS=e((()=>{r(),L()})),nS=e((()=>{r(),L()})),rS=e((()=>{r(),L()})),iS=e((()=>{r(),L()})),aS=e((()=>{r(),L()})),oS=e((()=>{r(),L()})),sS=e((()=>{r(),L()})),cS=e((()=>{r(),L()})),lS=e((()=>{r(),L()})),uS=e((()=>{r(),L()})),dS=e((()=>{r(),L()})),fS=e((()=>{r(),L()})),pS=e((()=>{r(),L()})),mS=e((()=>{r(),L()})),hS=e((()=>{r(),L()})),gS=e((()=>{r(),L()})),_S=e((()=>{r(),L()})),vS=e((()=>{r(),L()})),yS=e((()=>{r(),L()})),bS=e((()=>{r(),L()})),xS=e((()=>{r(),L()})),SS=e((()=>{r(),L()})),CS=e((()=>{r(),L()})),wS=e((()=>{r(),L()})),TS=e((()=>{r(),L()})),ES=e((()=>{r(),L()})),DS=e((()=>{r(),L()})),OS=e((()=>{r(),L()})),kS=e((()=>{r(),L()})),AS=e((()=>{r(),L()})),jS=e((()=>{r(),L()})),MS=e((()=>{r(),L()})),NS=e((()=>{r(),L()})),PS=e((()=>{r(),L()})),FS=e((()=>{r(),L()})),IS=e((()=>{r(),L()})),LS=e((()=>{r(),L()})),RS=e((()=>{r(),L()})),zS=e((()=>{r(),L()})),BS=e((()=>{r(),L()})),VS=e((()=>{r(),L()})),HS=e((()=>{r(),L()})),US=e((()=>{r(),L()})),WS=e((()=>{r(),L()})),GS=e((()=>{r(),L()})),KS=e((()=>{r(),L()})),qS=e((()=>{r(),L()})),JS=e((()=>{r(),L()})),YS=e((()=>{r(),L()})),XS=e((()=>{r(),L()})),ZS=e((()=>{r(),L()})),QS=e((()=>{r(),L()})),$S=e((()=>{r(),L()})),eC=e((()=>{r(),L()})),tC=e((()=>{r(),L()})),nC=e((()=>{r(),L()})),rC=e((()=>{r(),L()})),iC=e((()=>{r(),L()})),aC=e((()=>{r(),L()})),oC=e((()=>{r(),L()})),sC=e((()=>{r(),L()})),cC=e((()=>{r(),L()})),lC=e((()=>{r(),L()})),uC=e((()=>{r(),L()})),dC=e((()=>{r(),L()})),fC=e((()=>{r(),L()})),pC=e((()=>{r(),L()})),mC=e((()=>{r(),L()})),hC=e((()=>{r(),L()})),gC=e((()=>{r(),L()})),_C=e((()=>{r(),L()})),vC=e((()=>{r(),L()})),yC=e((()=>{r(),L()})),bC=e((()=>{r(),L()})),xC=e((()=>{r(),L()})),SC=e((()=>{r(),L()})),CC=e((()=>{r(),L()})),wC=e((()=>{r(),L()})),TC=e((()=>{r(),L()})),EC=e((()=>{Lt(),Rt(),zt(),Bt(),Vt(),Ht(),Ut(),Wt(),Gt(),Kt(),qt(),Jt(),Yt(),Xt(),Zt(),Qt(),$t(),en(),tn(),nn(),rn(),an(),on(),sn(),cn(),ln(),un(),dn(),fn(),pn(),mn(),hn(),gn(),_n(),vn(),yn(),bn(),xn(),Sn(),Cn(),wn(),Tn(),En(),Dn(),On(),kn(),An(),jn(),Mn(),Nn(),Pn(),Fn(),In(),Ln(),Rn(),zn(),Bn(),Vn(),Hn(),Un(),Wn(),Gn(),Kn(),qn(),Jn(),Yn(),Xn(),Zn(),Qn(),$n(),er(),tr(),nr(),rr(),ir(),ar(),or(),sr(),cr(),lr(),ur(),dr(),fr(),pr(),mr(),hr(),gr(),_r(),vr(),yr(),br(),xr(),Sr(),Cr(),wr(),Tr(),Er(),Dr(),Or(),kr(),Ar(),jr(),Mr(),Nr(),Pr(),Fr(),Ir(),Lr(),Rr(),zr(),Br(),Vr(),Hr(),Ur(),Wr(),Gr(),Kr(),qr(),Jr(),Yr(),Xr(),Zr(),Qr(),$r(),ei(),ti(),ni(),ri(),ii(),ai(),oi(),si(),ci(),li(),ui(),di(),fi(),pi(),mi(),hi(),gi(),_i(),vi(),yi(),bi(),xi(),Si(),Ci(),wi(),Ti(),Ei(),Di(),Oi(),ki(),Ai(),ji(),Mi(),Ni(),Pi(),Fi(),Ii(),Li(),Ri(),zi(),Bi(),Vi(),Hi(),Ui(),Wi(),Gi(),Ki(),qi(),Ji(),Yi(),Xi(),Zi(),Qi(),$i(),ea(),ta(),na(),ra(),ia(),aa(),oa(),sa(),ca(),la(),ua(),da(),fa(),pa(),ma(),ha(),ga(),_a(),va(),ya(),ba(),xa(),Sa(),Ca(),wa(),Ta(),Ea(),Da(),Oa(),ka(),Aa(),ja(),Ma(),Na(),Pa(),Fa(),Ia(),La(),Ra(),za(),Ba(),Va(),Ha(),Ua(),Wa(),Ga(),Ka(),qa(),Ja(),Ya(),Xa(),Qa(),$a(),eo(),to(),no(),ro(),io(),ao(),oo(),so(),co(),lo(),uo(),fo(),po(),mo(),ho(),go(),_o(),vo(),yo(),bo(),xo(),So(),Co(),wo(),To(),Eo(),Do(),Oo(),ko(),Ao(),jo(),Mo(),No(),Po(),Fo(),Io(),Lo(),Ro(),zo(),Bo(),Vo(),Ho(),Uo(),Wo(),Go(),Ko(),qo(),Jo(),Yo(),Xo(),Zo(),Qo(),$o(),es(),ts(),ns(),rs(),is(),as(),os(),ss(),cs(),ls(),us(),ds(),fs(),ps(),ms(),hs(),gs(),_s(),vs(),ys(),bs(),xs(),Ss(),Cs(),ws(),Ts(),Es(),Ds(),Os(),ks(),As(),js(),Ms(),Ns(),Ps(),Fs(),Is(),Ls(),Rs(),zs(),Bs(),Vs(),Hs(),Us(),Ws(),Gs(),Ks(),qs(),Js(),Ys(),Xs(),Zs(),Qs(),$s(),ec(),tc(),nc(),rc(),ic(),ac(),oc(),sc(),cc(),lc(),uc(),dc(),fc(),pc(),mc(),hc(),gc(),_c(),vc(),yc(),bc(),xc(),Sc(),Cc(),wc(),Tc(),Ec(),Dc(),Oc(),kc(),Ac(),jc(),Mc(),Nc(),Pc(),Fc(),Ic(),Lc(),Rc(),zc(),Bc(),Vc(),Hc(),Uc(),Wc(),Gc(),Kc(),qc(),Jc(),Yc(),Xc(),Zc(),Qc(),$c(),el(),tl(),nl(),rl(),il(),al(),ol(),sl(),cl(),ll(),ul(),dl(),fl(),pl(),ml(),hl(),gl(),_l(),vl(),yl(),bl(),xl(),Sl(),Cl(),wl(),Tl(),El(),Dl(),Ol(),kl(),Al(),jl(),Ml(),Nl(),Pl(),Fl(),Il(),Ll(),Rl(),zl(),Bl(),Vl(),Hl(),Ul(),Wl(),Gl(),Kl(),ql(),Jl(),Yl(),Xl(),Zl(),Ql(),$l(),eu(),tu(),nu(),ru(),iu(),au(),ou(),su(),cu(),lu(),uu(),du(),fu(),pu(),mu(),hu(),gu(),_u(),vu(),yu(),bu(),xu(),Su(),Cu(),wu(),Tu(),Eu(),Du(),Ou(),ku(),Au(),ju(),Mu(),Nu(),Pu(),Fu(),Iu(),Lu(),Ru(),zu(),Bu(),Vu(),Hu(),Uu(),Wu(),Gu(),Ku(),qu(),Ju(),Yu(),Xu(),Zu(),Qu(),$u(),ed(),td(),nd(),rd(),id(),ad(),od(),sd(),cd(),ld(),ud(),dd(),fd(),pd(),md(),hd(),gd(),_d(),vd(),yd(),bd(),xd(),Sd(),Cd(),wd(),Td(),Ed(),Dd(),Od(),kd(),Ad(),jd(),Md(),Nd(),Pd(),Fd(),Id(),Ld(),Rd(),zd(),Bd(),Vd(),Hd(),Ud(),Wd(),Gd(),Kd(),qd(),Jd(),Yd(),Xd(),Zd(),Qd(),$d(),ef(),tf(),nf(),rf(),af(),of(),sf(),cf(),lf(),uf(),df(),ff(),pf(),mf(),hf(),gf(),_f(),vf(),yf(),bf(),xf(),Sf(),Cf(),wf(),Tf(),Ef(),Df(),Of(),kf(),Af(),jf(),Mf(),Nf(),Pf(),Ff(),If(),Lf(),Rf(),zf(),Bf(),Vf(),Hf(),Uf(),Wf(),Gf(),Kf(),qf(),Jf(),Yf(),Xf(),Zf(),Qf(),$f(),ep(),tp(),np(),rp(),ip(),ap(),op(),sp(),cp(),lp(),up(),dp(),fp(),pp(),mp(),hp(),gp(),_p(),vp(),yp(),bp(),xp(),Sp(),Cp(),wp(),Tp(),Ep(),Dp(),Op(),kp(),Ap(),jp(),Mp(),Np(),Pp(),Fp(),Ip(),Lp(),Rp(),zp(),Bp(),Vp(),Hp(),Up(),Wp(),Gp(),Kp(),qp(),Jp(),Yp(),Xp(),Zp(),Qp(),$p(),em(),tm(),nm(),rm(),im(),am(),om(),sm(),cm(),lm(),um(),dm(),fm(),pm(),mm(),hm(),gm(),_m(),vm(),ym(),bm(),xm(),Sm(),Cm(),wm(),Tm(),Em(),Dm(),Om(),km(),Am(),jm(),Mm(),Nm(),Pm(),Fm(),Im(),Lm(),Rm(),zm(),Bm(),Vm(),Hm(),Um(),Wm(),Gm(),Km(),qm(),Jm(),Ym(),Xm(),Zm(),Qm(),$m(),eh(),th(),nh(),rh(),ih(),ah(),oh(),sh(),ch(),lh(),uh(),dh(),fh(),ph(),mh(),hh(),gh(),_h(),vh(),yh(),bh(),xh(),Sh(),Ch(),wh(),Th(),Eh(),Dh(),Oh(),kh(),Ah(),jh(),Mh(),Nh(),Ph(),Fh(),Ih(),Lh(),Rh(),zh(),Bh(),Vh(),Hh(),Uh(),Wh(),Gh(),Kh(),qh(),Jh(),Yh(),Xh(),Zh(),Qh(),$h(),eg(),tg(),ng(),rg(),ig(),ag(),og(),sg(),cg(),lg(),ug(),dg(),fg(),pg(),mg(),hg(),gg(),_g(),vg(),yg(),bg(),xg(),Sg(),Cg(),wg(),Tg(),Eg(),Dg(),Og(),kg(),Ag(),jg(),Mg(),Ng(),Pg(),Fg(),Ig(),Lg(),Rg(),zg(),Bg(),Vg(),Hg(),Ug(),Wg(),Gg(),Kg(),qg(),Jg(),Yg(),Xg(),Zg(),Qg(),$g(),e_(),t_(),n_(),r_(),i_(),a_(),o_(),s_(),c_(),l_(),u_(),d_(),f_(),p_(),m_(),h_(),g_(),__(),v_(),y_(),b_(),x_(),S_(),C_(),w_(),T_(),E_(),D_(),O_(),k_(),A_(),j_(),M_(),N_(),P_(),F_(),I_(),L_(),R_(),z_(),B_(),V_(),H_(),U_(),W_(),G_(),K_(),q_(),J_(),Y_(),X_(),Z_(),Q_(),$_(),ev(),tv(),nv(),rv(),iv(),av(),ov(),sv(),cv(),lv(),uv(),dv(),fv(),pv(),mv(),hv(),gv(),_v(),vv(),yv(),bv(),xv(),Sv(),Cv(),wv(),Tv(),Ev(),Dv(),Ov(),kv(),Av(),jv(),Mv(),Nv(),Pv(),Fv(),Iv(),Lv(),Rv(),zv(),Bv(),Vv(),Hv(),Uv(),Wv(),Gv(),Kv(),qv(),Jv(),Yv(),Xv(),Zv(),Qv(),$v(),ey(),ty(),ny(),ry(),iy(),ay(),oy(),sy(),cy(),ly(),uy(),dy(),fy(),py(),my(),hy(),gy(),_y(),vy(),yy(),by(),xy(),Sy(),Cy(),wy(),Ty(),Ey(),Dy(),Oy(),ky(),Ay(),jy(),My(),Ny(),Py(),Fy(),Iy(),Ly(),Ry(),zy(),By(),Vy(),Hy(),Uy(),Wy(),Gy(),Ky(),qy(),Jy(),Yy(),Xy(),Zy(),Qy(),$y(),eb(),tb(),nb(),rb(),ib(),ab(),ob(),sb(),cb(),lb(),ub(),db(),fb(),pb(),mb(),hb(),gb(),_b(),vb(),yb(),bb(),xb(),Sb(),Cb(),wb(),Tb(),Eb(),Db(),Ob(),kb(),Ab(),jb(),Mb(),Nb(),Pb(),Fb(),Ib(),Lb(),Rb(),zb(),Bb(),Vb(),Hb(),Ub(),Wb(),Gb(),Kb(),qb(),Jb(),Yb(),Xb(),Zb(),Qb(),$b(),ex(),tx(),nx(),rx(),ix(),ax(),ox(),sx(),cx(),lx(),ux(),dx(),fx(),px(),mx(),hx(),gx(),_x(),vx(),yx(),bx(),xx(),Sx(),Cx(),wx(),Tx(),Ex(),Dx(),Ox(),kx(),Ax(),jx(),Mx(),Nx(),Px(),Fx(),Ix(),Lx(),Rx(),zx(),Bx(),Vx(),Hx(),Ux(),Wx(),Gx(),Kx(),qx(),Jx(),Yx(),Xx(),Zx(),Qx(),$x(),eS(),tS(),nS(),rS(),iS(),aS(),oS(),sS(),cS(),lS(),uS(),dS(),fS(),pS(),mS(),hS(),gS(),_S(),vS(),yS(),bS(),xS(),SS(),CS(),wS(),TS(),ES(),DS(),OS(),kS(),AS(),jS(),MS(),NS(),PS(),FS(),IS(),LS(),RS(),zS(),BS(),VS(),HS(),US(),WS(),GS(),KS(),qS(),JS(),YS(),XS(),ZS(),QS(),$S(),eC(),tC(),nC(),rC(),iC(),aC(),oC(),sC(),cC(),lC(),uC(),dC(),fC(),pC(),mC(),hC(),gC(),_C(),vC(),yC(),bC(),xC(),SC(),CC(),wC(),TC()}));function DC(){let e=[],t=Object.create(null),n;return t.get=(r,i)=>(n?.revoke?.(),i===JC?e:(e.push(i),n=Proxy.revocable(r,t),n.proxy)),Proxy.revocable(Object.create(null),t).proxy}function z(e,t){let{[JC]:n}=e(DC()),r=t?.keySeparator??`.`,i=t?.nsSeparator??`:`,a=t?.enableSelector===`strict`;if(n.length>1&&i){let e=t?.ns,o=a?Array.isArray(e)?e:e?[e]:null:Array.isArray(e)?e:null;if(o&&(a?o:o.length>1?o.slice(1):[]).includes(n[0]))return`${n[0]}${i}${n.slice(1).join(r)}`}return n.join(r)}var B,V,OC,kC,AC,jC,MC,H,NC,PC,U,FC,IC,W,LC,RC,zC,BC,VC,HC,UC,G,WC,GC,K,q,KC,qC,JC,YC,XC,ZC,QC,$C,ew,tw,nw,rw,iw,aw,ow,sw,cw,lw,uw,dw,J,fw,pw,Y,X,mw=e((()=>{B=e=>typeof e==`string`,V=()=>{let e,t,n=new Promise((n,r)=>{e=n,t=r});return n.resolve=e,n.reject=t,n},OC=e=>e==null?``:String(e),kC=(e,t,n)=>{e.forEach(e=>{t[e]&&(n[e]=t[e])})},AC=/###/g,jC=e=>e&&e.includes(`###`)?e.replace(AC,`.`):e,MC=e=>!e||B(e),H=(e,t,n)=>{let r=B(t)?t.split(`.`):t,i=0;for(;i<r.length-1;){if(MC(e))return{};let t=jC(r[i]);!e[t]&&n&&(e[t]=new n),e=Object.prototype.hasOwnProperty.call(e,t)?e[t]:{},++i}return MC(e)?{}:{obj:e,k:jC(r[i])}},NC=(e,t,n)=>{let{obj:r,k:i}=H(e,t,Object);if(r!==void 0||t.length===1){r[i]=n;return}let a=t[t.length-1],o=t.slice(0,t.length-1),s=H(e,o,Object);for(;s.obj===void 0&&o.length;)a=`${o[o.length-1]}.${a}`,o=o.slice(0,o.length-1),s=H(e,o,Object),s?.obj&&s.obj[`${s.k}.${a}`]!==void 0&&(s.obj=void 0);s.obj[`${s.k}.${a}`]=n},PC=(e,t,n,r)=>{let{obj:i,k:a}=H(e,t,Object);i[a]=i[a]||[],i[a].push(n)},U=(e,t)=>{let{obj:n,k:r}=H(e,t);if(n&&Object.prototype.hasOwnProperty.call(n,r))return n[r]},FC=(e,t,n)=>{let r=U(e,n);return r===void 0?U(t,n):r},IC=(e,t,n)=>{for(let r in t)r!==`__proto__`&&r!==`constructor`&&(Object.prototype.hasOwnProperty.call(e,r)?B(e[r])||e[r]instanceof String||B(t[r])||t[r]instanceof String?n&&(e[r]=t[r]):IC(e[r],t[r],n):e[r]=t[r]);return e},W=e=>e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,`\\$&`),LC={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`,"/":`&#x2F;`},RC=e=>B(e)?e.replace(/[&<>"'\/]/g,e=>LC[e]):e,zC=class{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){let t=this.regExpMap.get(e);if(t!==void 0)return t;let n=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,n),this.regExpQueue.push(e),n}},BC=[` `,`,`,`?`,`!`,`;`],VC=new zC(20),HC=(e,t,n)=>{t||=``,n||=``;let r=BC.filter(e=>!t.includes(e)&&!n.includes(e));if(r.length===0)return!0;let i=VC.getRegExp(`(${r.map(e=>e===`?`?`\\?`:e).join(`|`)})`),a=!i.test(e);if(!a){let t=e.indexOf(n);t>0&&!i.test(e.substring(0,t))&&(a=!0)}return a},UC=(e,t,n=`.`)=>{if(!e)return;if(e[t])return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0;let r=t.split(n),i=e;for(let e=0;e<r.length;){if(!i||typeof i!=`object`)return;let t,a=``;for(let o=e;o<r.length;++o)if(o!==e&&(a+=n),a+=r[o],t=i[a],t!==void 0){if([`string`,`number`,`boolean`].includes(typeof t)&&o<r.length-1)continue;e+=o-e+1;break}i=t}return i},G=e=>e?.replace(/_/g,`-`),WC={type:`logger`,log(e){this.output(`log`,e)},warn(e){this.output(`warn`,e)},error(e){this.output(`error`,e)},output(e,t){console?.[e]?.apply?.(console,t)}},GC=class e{constructor(e,t={}){this.init(e,t)}init(e,t={}){this.prefix=t.prefix||`i18next:`,this.logger=e||WC,this.options=t,this.debug=t.debug}log(...e){return this.forward(e,`log`,``,!0)}warn(...e){return this.forward(e,`warn`,``,!0)}error(...e){return this.forward(e,`error`,``)}deprecate(...e){return this.forward(e,`warn`,`WARNING DEPRECATED: `,!0)}forward(e,t,n,r){return r&&!this.debug?null:(e=e.map(e=>B(e)?e.replace(/[\r\n\x00-\x1F\x7F]/g,` `):e),B(e[0])&&(e[0]=`${n}${this.prefix} ${e[0]}`),this.logger[t](e))}create(t){return new e(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return t||=this.options,t.prefix=t.prefix||this.prefix,new e(this.logger,t)}},K=new GC,q=class{constructor(){this.observers={}}on(e,t){return e.split(` `).forEach(e=>{this.observers[e]||(this.observers[e]=new Map);let n=this.observers[e].get(t)||0;this.observers[e].set(t,n+1)}),this}off(e,t){if(this.observers[e]){if(!t){delete this.observers[e];return}this.observers[e].delete(t)}}once(e,t){let n=(...r)=>{t(...r),this.off(e,n)};return this.on(e,n),this}emit(e,...t){this.observers[e]&&Array.from(this.observers[e].entries()).forEach(([e,n])=>{for(let r=0;r<n;r++)e(...t)}),this.observers[`*`]&&Array.from(this.observers[`*`].entries()).forEach(([n,r])=>{for(let i=0;i<r;i++)n(e,...t)})}},KC=class extends q{constructor(e,t={ns:[`translation`],defaultNS:`translation`}){super(),this.data=e||{},this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator=`.`),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.includes(e)||this.options.ns.push(e)}removeNamespaces(e){let t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,n,r={}){let i=r.keySeparator===void 0?this.options.keySeparator:r.keySeparator,a=r.ignoreJSONStructure===void 0?this.options.ignoreJSONStructure:r.ignoreJSONStructure,o;e.includes(`.`)?o=e.split(`.`):(o=[e,t],n&&(Array.isArray(n)?o.push(...n):B(n)&&i?o.push(...n.split(i)):o.push(n)));let s=U(this.data,o);return!s&&!t&&!n&&e.includes(`.`)&&(e=o[0],t=o[1],n=o.slice(2).join(`.`)),s||!a||!B(n)?s:UC(this.data?.[e]?.[t],n,i)}addResource(e,t,n,r,i={silent:!1}){let a=i.keySeparator===void 0?this.options.keySeparator:i.keySeparator,o=[e,t];n&&(o=o.concat(a?n.split(a):n)),e.includes(`.`)&&(o=e.split(`.`),r=t,t=o[1]),this.addNamespaces(t),NC(this.data,o,r),i.silent||this.emit(`added`,e,t,n,r)}addResources(e,t,n,r={silent:!1}){for(let r in n)(B(n[r])||Array.isArray(n[r]))&&this.addResource(e,t,r,n[r],{silent:!0});r.silent||this.emit(`added`,e,t,n)}addResourceBundle(e,t,n,r,i,a={silent:!1,skipCopy:!1}){let o=[e,t];e.includes(`.`)&&(o=e.split(`.`),r=n,n=t,t=o[1]),this.addNamespaces(t);let s=U(this.data,o)||{};a.skipCopy||(n=JSON.parse(JSON.stringify(n))),r?IC(s,n,i):s={...s,...n},NC(this.data,o,s),a.silent||this.emit(`added`,e,t,n)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit(`removed`,e,t)}hasResourceBundle(e,t){return this.getResource(e,t)!==void 0}getResourceBundle(e,t){return t||=this.options.defaultNS,this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){let t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(e=>t[e]&&Object.keys(t[e]).length>0)}toJSON(){return this.data}},qC={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,n,r,i){return e.forEach(e=>{t=this.processors[e]?.process(t,n,r,i)??t}),t}},JC=Symbol(`i18next/PATH_KEY`),YC=e=>!B(e)&&typeof e!=`boolean`&&typeof e!=`number`,XC=class e extends q{constructor(e,t={}){super(),kC([`resourceStore`,`languageUtils`,`pluralResolver`,`interpolator`,`backendConnector`,`i18nFormat`,`utils`],e,this),this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator=`.`),this.logger=K.create(`translator`),this.checkedLoadedFor={}}changeLanguage(e){e&&(this.language=e)}exists(e,t={interpolation:{}}){let n={...t};if(e==null)return!1;let r=this.resolve(e,n);if(r?.res===void 0)return!1;let i=YC(r.res);return!(n.returnObjects===!1&&i)}extractFromKey(e,t){let n=t.nsSeparator===void 0?this.options.nsSeparator:t.nsSeparator;n===void 0&&(n=`:`);let r=t.keySeparator===void 0?this.options.keySeparator:t.keySeparator,i=t.ns||this.options.defaultNS||[],a=n&&e.includes(n),o=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!HC(e,n,r);if(a&&!o){let t=e.match(this.interpolator.nestingRegexp);if(t&&t.length>0)return{key:e,namespaces:B(i)?[i]:i};let a=e.split(n);(n!==r||n===r&&this.options.ns.includes(a[0]))&&(i=a.shift()),e=a.join(r)}return{key:e,namespaces:B(i)?[i]:i}}translate(t,n,r){let i=typeof n==`object`?{...n}:n;if(typeof i!=`object`&&this.options.overloadTranslationOptionHandler&&(i=this.options.overloadTranslationOptionHandler(arguments)),typeof i==`object`&&(i={...i}),i||={},t==null)return``;typeof t==`function`&&(t=z(t,{...this.options,...i})),Array.isArray(t)||(t=[String(t)]),t=t.map(e=>typeof e==`function`?z(e,{...this.options,...i}):String(e));let a=i.returnDetails===void 0?this.options.returnDetails:i.returnDetails,o=i.keySeparator===void 0?this.options.keySeparator:i.keySeparator,{key:s,namespaces:c}=this.extractFromKey(t[t.length-1],i),l=c[c.length-1],u=i.nsSeparator===void 0?this.options.nsSeparator:i.nsSeparator;u===void 0&&(u=`:`);let d=i.lng||this.language,f=i.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(d?.toLowerCase()===`cimode`)return f?a?{res:`${l}${u}${s}`,usedKey:s,exactUsedKey:s,usedLng:d,usedNS:l,usedParams:this.getUsedParamsDetails(i)}:`${l}${u}${s}`:a?{res:s,usedKey:s,exactUsedKey:s,usedLng:d,usedNS:l,usedParams:this.getUsedParamsDetails(i)}:s;let p=this.resolve(t,i),m=p?.res,h=p?.usedKey||s,g=p?.exactUsedKey||s,_=[`[object Number]`,`[object Function]`,`[object RegExp]`],v=i.joinArrays===void 0?this.options.joinArrays:i.joinArrays,y=!this.i18nFormat||this.i18nFormat.handleAsObject,b=i.count!==void 0&&!B(i.count),x=e.hasDefaultValue(i),S=b?this.pluralResolver.getSuffix(d,i.count,i):``,C=i.ordinal&&b?this.pluralResolver.getSuffix(d,i.count,{ordinal:!1}):``,w=b&&!i.ordinal&&i.count===0,T=w&&i[`defaultValue${this.options.pluralSeparator}zero`]||i[`defaultValue${S}`]||i[`defaultValue${C}`]||i.defaultValue,E=m;y&&!m&&x&&(E=T);let D=YC(E),O=Object.prototype.toString.apply(E);if(y&&E&&D&&!_.includes(O)&&!(B(v)&&Array.isArray(E))){if(!i.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn(`accessing an object - but returnObjects options is not enabled!`);let e=this.options.returnedObjectHandler?this.options.returnedObjectHandler(h,E,{...i,ns:c}):`key '${s} (${this.language})' returned an object instead of string.`;return a?(p.res=e,p.usedParams=this.getUsedParamsDetails(i),p):e}if(o){let e=Array.isArray(E),t=e?[]:{},n=e?g:h;for(let e in E)if(Object.prototype.hasOwnProperty.call(E,e)){let r=`${n}${o}${e}`;x&&!m?t[e]=this.translate(r,{...i,defaultValue:YC(T)?T[e]:void 0,joinArrays:!1,ns:c}):t[e]=this.translate(r,{...i,joinArrays:!1,ns:c}),t[e]===r&&(t[e]=E[e])}m=t}}else if(y&&B(v)&&Array.isArray(m))m=m.join(v),m&&=this.extendTranslation(m,t,i,r);else{let e=!1,n=!1;!this.isValidLookup(m)&&x&&(e=!0,m=T),this.isValidLookup(m)||(n=!0,m=s);let a=(i.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&n?void 0:m,c=x&&T!==m&&this.options.updateMissing;if(n||e||c){if(this.logger.log(c?`updateKey`:`missingKey`,d,l,b&&!c?`${s}${this.pluralResolver.getSuffix(d,i.count,i)}`:s,c?T:m),o){let e=this.resolve(s,{...i,keySeparator:!1});e&&e.res&&this.logger.warn(`Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.`)}let e=[],t=this.languageUtils.getFallbackCodes(this.options.fallbackLng,i.lng||this.language);if(this.options.saveMissingTo===`fallback`&&t&&t[0])for(let n=0;n<t.length;n++)e.push(t[n]);else this.options.saveMissingTo===`all`?e=this.languageUtils.toResolveHierarchy(i.lng||this.language):e.push(i.lng||this.language);let n=(e,t,n)=>{let r=x&&n!==m?n:a;this.options.missingKeyHandler?this.options.missingKeyHandler(e,l,t,r,c,i):this.backendConnector?.saveMissing&&this.backendConnector.saveMissing(e,l,t,r,c,i),this.emit(`missingKey`,e,l,t,m)};this.options.saveMissing&&(this.options.saveMissingPlurals&&b?e.forEach(e=>{let t=this.pluralResolver.getSuffixes(e,i);w&&i[`defaultValue${this.options.pluralSeparator}zero`]&&!t.includes(`${this.options.pluralSeparator}zero`)&&t.push(`${this.options.pluralSeparator}zero`),t.forEach(t=>{n([e],s+t,i[`defaultValue${t}`]||T)})}):n(e,s,T))}m=this.extendTranslation(m,t,i,p,r),n&&m===s&&this.options.appendNamespaceToMissingKey&&(m=`${l}${u}${s}`),(n||e)&&this.options.parseMissingKeyHandler&&(m=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}${u}${s}`:s,e?m:void 0,i))}return a?(p.res=m,p.usedParams=this.getUsedParamsDetails(i),p):m}extendTranslation(e,t,n,r,i){if(this.i18nFormat?.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...n},n.lng||this.language||r.usedLng,r.usedNS,r.usedKey,{resolved:r});else if(!n.skipInterpolation){n.interpolation&&this.interpolator.init({...n,interpolation:{...this.options.interpolation,...n.interpolation}});let a=B(e)&&(n?.interpolation?.skipOnVariables===void 0?this.options.interpolation.skipOnVariables:n.interpolation.skipOnVariables),o;if(a){let t=e.match(this.interpolator.nestingRegexp);o=t&&t.length}let s=n.replace&&!B(n.replace)?n.replace:n;if(this.options.interpolation.defaultVariables&&(s={...this.options.interpolation.defaultVariables,...s}),e=this.interpolator.interpolate(e,s,n.lng||this.language||r.usedLng,n),a){let t=e.match(this.interpolator.nestingRegexp),r=t&&t.length;o<r&&(n.nest=!1)}!n.lng&&r&&r.res&&(n.lng=this.language||r.usedLng),n.nest!==!1&&(e=this.interpolator.nest(e,(...e)=>i?.[0]===e[0]&&!n.context?(this.logger.warn(`It seems you are nesting recursively key: ${e[0]} in key: ${t[0]}`),null):this.translate(...e,t),n)),n.interpolation&&this.interpolator.reset()}let a=n.postProcess||this.options.postProcess,o=B(a)?[a]:a;return e!=null&&o?.length&&n.applyPostProcessor!==!1&&(e=qC.handle(o,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...r,usedParams:this.getUsedParamsDetails(n)},...n}:n,this)),e}resolve(e,t={}){let n,r,i,a,o;return B(e)&&(e=[e]),Array.isArray(e)&&(e=e.map(e=>typeof e==`function`?z(e,{...this.options,...t}):e)),e.forEach(e=>{if(this.isValidLookup(n))return;let s=this.extractFromKey(e,t),c=s.key;r=c;let l=s.namespaces;this.options.fallbackNS&&(l=l.concat(this.options.fallbackNS));let u=t.count!==void 0&&!B(t.count),d=u&&!t.ordinal&&t.count===0,f=t.context!==void 0&&(B(t.context)||typeof t.context==`number`)&&t.context!==``,p=t.lngs?t.lngs:this.languageUtils.toResolveHierarchy(t.lng||this.language,t.fallbackLng);l.forEach(e=>{this.isValidLookup(n)||(o=e,!this.checkedLoadedFor[`${p[0]}-${e}`]&&this.utils?.hasLoadedNamespace&&!this.utils?.hasLoadedNamespace(o)&&(this.checkedLoadedFor[`${p[0]}-${e}`]=!0,this.logger.warn(`key "${r}" for languages "${p.join(`, `)}" won't get resolved as namespace "${o}" was not yet loaded`,`This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!`)),p.forEach(r=>{if(this.isValidLookup(n))return;a=r;let o=[c];if(this.i18nFormat?.addLookupKeys)this.i18nFormat.addLookupKeys(o,c,r,e,t);else{let e;u&&(e=this.pluralResolver.getSuffix(r,t.count,t));let n=`${this.options.pluralSeparator}zero`,i=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(u&&(t.ordinal&&e.startsWith(i)&&o.push(c+e.replace(i,this.options.pluralSeparator)),o.push(c+e),d&&o.push(c+n)),f){let r=`${c}${this.options.contextSeparator||`_`}${t.context}`;o.push(r),u&&(t.ordinal&&e.startsWith(i)&&o.push(r+e.replace(i,this.options.pluralSeparator)),o.push(r+e),d&&o.push(r+n))}}let s;for(;s=o.pop();)this.isValidLookup(n)||(i=s,n=this.getResource(r,e,s,t))}))})}),{res:n,usedKey:r,exactUsedKey:i,usedLng:a,usedNS:o}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e===``)}getResource(e,t,n,r={}){return this.i18nFormat?.getResource?this.i18nFormat.getResource(e,t,n,r):this.resourceStore.getResource(e,t,n,r)}getUsedParamsDetails(e={}){let t=[`defaultValue`,`ordinal`,`context`,`replace`,`lng`,`lngs`,`fallbackLng`,`ns`,`keySeparator`,`nsSeparator`,`returnObjects`,`returnDetails`,`joinArrays`,`postProcess`,`interpolation`],n=e.replace&&!B(e.replace),r=n?e.replace:e;if(n&&e.count!==void 0&&(r={...r,count:e.count}),this.options.interpolation.defaultVariables&&(r={...this.options.interpolation.defaultVariables,...r}),!n){r={...r};for(let e of t)delete r[e]}return r}static hasDefaultValue(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&t.startsWith(`defaultValue`)&&e[t]!==void 0)return!0;return!1}},ZC=class{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=K.create(`languageUtils`),this.resolveHierarchyCache={}}clearCache(){this.resolveHierarchyCache={}}getScriptPartFromCode(e){if(e=G(e),!e||!e.includes(`-`))return null;let t=e.split(`-`);return t.length===2||(t.pop(),t[t.length-1].toLowerCase()===`x`)?null:this.formatLanguageCode(t.join(`-`))}getLanguagePartFromCode(e){if(e=G(e),!e||!e.includes(`-`))return e;let t=e.split(`-`);return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(B(e)&&e.includes(`-`)){let t;try{t=Intl.getCanonicalLocales(e)[0]}catch{}return t&&this.options.lowerCaseLng&&(t=t.toLowerCase()),t||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load===`languageOnly`||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.includes(e)}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(e=>{if(t)return;let n=this.formatLanguageCode(e);(!this.options.supportedLngs||this.isSupportedCode(n))&&(t=n)}),!t&&this.options.supportedLngs&&e.forEach(e=>{if(t)return;let n=this.getScriptPartFromCode(e);if(this.isSupportedCode(n))return t=n;let r=this.getLanguagePartFromCode(e);if(this.isSupportedCode(r))return t=r;t=this.options.supportedLngs.find(e=>e===r?!0:!e.includes(`-`)&&!r.includes(`-`)?!1:!!(e.includes(`-`)&&!r.includes(`-`)&&e.slice(0,e.indexOf(`-`))===r||e.startsWith(r)&&r.length>1))}),t||=this.getFallbackCodes(this.options.fallbackLng)[0],t}getFallbackCodes(e,t){if(!e)return[];if(typeof e==`function`&&(e=e(t)),B(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let n=e[t];return n||=e[this.getScriptPartFromCode(t)],n||=e[this.formatLanguageCode(t)],n||=e[this.getLanguagePartFromCode(t)],n||=e.default,n||[]}toResolveHierarchy(e,t){let n=this.options.fallbackLng,r=Array.isArray(n)?n.join(`|`):n;r!==this._cachedFallbackLng&&(this.resolveHierarchyCache={},this._cachedFallbackLng=r);let i=t===void 0||t===!1||B(t),a=t===void 0&&typeof this.options.fallbackLng==`function`,o=B(e)&&i&&!a,s=null;if(o){let n;n=t===void 0?`undefined`:t===!1?`boolean:false`:`string:${t}`,s=`${e.length}:${e}|${n}`}if(s!==null){let e=this.resolveHierarchyCache[s];if(e!==void 0)return e.slice()}let c=this.getFallbackCodes((t===!1?[]:t)||this.options.fallbackLng||[],e),l=[],u=e=>{e&&(this.isSupportedCode(e)?l.push(e):this.logger.warn(`rejecting language code not found in supportedLngs: ${e}`))};return B(e)&&(e.includes(`-`)||e.includes(`_`))?(this.options.load!==`languageOnly`&&u(this.formatLanguageCode(e)),this.options.load!==`languageOnly`&&this.options.load!==`currentOnly`&&u(this.getScriptPartFromCode(e)),this.options.load!==`currentOnly`&&u(this.getLanguagePartFromCode(e))):B(e)&&u(this.formatLanguageCode(e)),c.forEach(e=>{l.includes(e)||u(this.formatLanguageCode(e))}),s===null?l:(this.resolveHierarchyCache[s]=l,l.slice())}},QC={zero:0,one:1,two:2,few:3,many:4,other:5},$C={select:e=>e===1?`one`:`other`,resolvedOptions:()=>({pluralCategories:[`one`,`other`]})},ew=class{constructor(e,t={}){this.languageUtils=e,this.options=t,this.logger=K.create(`pluralResolver`),this.pluralRulesCache={}}clearCache(){this.pluralRulesCache={}}getRule(e,t={}){let n=G(e===`dev`?`en`:e),r=t.ordinal?`ordinal`:`cardinal`,i=JSON.stringify({cleanedCode:n,type:r});if(i in this.pluralRulesCache)return this.pluralRulesCache[i];let a;try{a=new Intl.PluralRules(n,{type:r})}catch{if(typeof Intl>`u`)return this.logger.error(`No Intl support, please use an Intl polyfill!`),$C;if(!e.match(/-|_/))return $C;let n=this.languageUtils.getLanguagePartFromCode(e);a=this.getRule(n,t)}return this.pluralRulesCache[i]=a,a}needsPlural(e,t={}){let n=this.getRule(e,t);return n||=this.getRule(`dev`,t),n?.resolvedOptions().pluralCategories.length>1}getPluralFormsOfKey(e,t,n={}){return this.getSuffixes(e,n).map(e=>`${t}${e}`)}getSuffixes(e,t={}){let n=this.getRule(e,t);return n||=this.getRule(`dev`,t),n?n.resolvedOptions().pluralCategories.sort((e,t)=>QC[e]-QC[t]).map(e=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:``}${e}`):[]}getSuffix(e,t,n={}){let r=this.getRule(e,n);return r?`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:``}${r.select(t)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix(`dev`,t,n))}},tw=(e,t,n,r=`.`,i=!0)=>{let a=FC(e,t,n);return!a&&i&&B(n)&&(a=UC(e,n,r),a===void 0&&(a=UC(t,n,r))),a},nw=e=>e.replace(/\$/g,`$$$$`),rw=class{constructor(e={}){this.logger=K.create(`interpolator`),this.options=e,this.format=e?.interpolation?.format||(e=>e),this.init(e)}init(e={}){e.interpolation||={escapeValue:!0};let{escape:t,escapeValue:n,useRawValueToEscape:r,prefix:i,prefixEscaped:a,suffix:o,suffixEscaped:s,formatSeparator:c,unescapeSuffix:l,unescapePrefix:u,nestingPrefix:d,nestingPrefixEscaped:f,nestingSuffix:p,nestingSuffixEscaped:m,nestingOptionsSeparator:h,maxReplaces:g,alwaysFormat:_}=e.interpolation;this.escape=t===void 0?RC:t,this.escapeValue=n===void 0?!0:n,this.useRawValueToEscape=r===void 0?!1:r,this.prefix=i?W(i):a||`{{`,this.suffix=o?W(o):s||`}}`,this.formatSeparator=c||`,`,this.unescapePrefix=l?``:u?W(u):`-`,this.unescapeSuffix=this.unescapePrefix?``:l?W(l):``,this.nestingPrefix=d?W(d):f||W(`$t(`),this.nestingSuffix=p?W(p):m||W(`)`),this.nestingOptionsSeparator=h||`,`,this.maxReplaces=g||1e3,this.alwaysFormat=_===void 0?!1:_,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){let e=(e,t)=>e?.source===t?(e.lastIndex=0,e):new RegExp(t,`g`);this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)}interpolate(e,t,n,r){let i,a,o,s=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=e=>{if(!e.includes(this.formatSeparator)){let i=tw(t,s,e,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(i,void 0,n,{...r,...t,interpolationkey:e}):i}let i=e.split(this.formatSeparator),a=i.shift().trim(),o=i.join(this.formatSeparator).trim();return this.format(tw(t,s,a,this.options.keySeparator,this.options.ignoreJSONStructure),o,n,{...r,...t,interpolationkey:a})};this.resetRegExp(),!this.escapeValue&&typeof e==`string`&&/\$t\([^)]*\{[^}]*\{\{/.test(e)&&this.logger.warn(`nesting options string contains interpolated variables with escapeValue: false — if any of those values are attacker-controlled they can inject additional nesting options (e.g. redirect lng/ns). Sanitise untrusted input before passing it to t(), or keep escapeValue: true.`);let l=r?.missingInterpolationHandler||this.options.missingInterpolationHandler,u=r?.interpolation?.skipOnVariables===void 0?this.options.interpolation.skipOnVariables:r.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:e=>e},{regex:this.regexp,safeValue:e=>this.escapeValue?this.escape(e):e}].forEach(t=>{for(o=0;i=t.regex.exec(e);){let n=i[1].trim();if(a=c(n),a===void 0)if(typeof l==`function`){let t=l(e,i,r);a=B(t)?t:``}else if(r&&Object.prototype.hasOwnProperty.call(r,n))a=``;else if(u){a=i[0];continue}else this.logger.warn(`missed to pass in variable ${n} for interpolating ${e}`),a=``;else !B(a)&&!this.useRawValueToEscape&&(a=OC(a));let s=t.safeValue(a);if(e=e.replace(i[0],nw(s)),u?(t.regex.lastIndex+=s.length,t.regex.lastIndex-=i[0].length):t.regex.lastIndex=0,o++,o>=this.maxReplaces)break}}),e}nest(e,t,n={}){let r,i,a,o=(e,t)=>{let n=this.nestingOptionsSeparator;if(!e.includes(n))return e;let r=e.split(RegExp(`${W(n)}[ ]*{`)),i=`{${r[1]}`;e=r[0],i=this.interpolate(i,a);let o=i.match(/'/g),s=i.match(/"/g);((o?.length??0)%2==0&&!s||(s?.length??0)%2!=0)&&(i=i.replace(/'/g,`"`));try{a=JSON.parse(i),t&&(a={...t,...a})}catch(t){return this.logger.warn(`failed parsing options string in nesting for key ${e}`,t),`${e}${n}${i}`}return a.defaultValue&&a.defaultValue.includes(this.prefix)&&delete a.defaultValue,e};for(;r=this.nestingRegexp.exec(e);){let s=[];a={...n},a=a.replace&&!B(a.replace)?a.replace:a,a.applyPostProcessor=!1,delete a.defaultValue;let c=/{.*}/s.test(r[1])?r[1].lastIndexOf(`}`)+1:r[1].indexOf(this.formatSeparator);if(c!==-1&&(s=r[1].slice(c).split(this.formatSeparator).map(e=>e.trim()).filter(Boolean),r[1]=r[1].slice(0,c)),i=t(o.call(this,r[1].trim(),a),a),i&&r[0]===e&&!B(i))return i;B(i)||(i=OC(i)),i||=(this.logger.warn(`missed to resolve ${r[1]} for nesting ${e}`),``),s.length&&(i=s.reduce((e,t)=>this.format(e,t,n.lng,{...n,interpolationkey:r[1].trim()}),i.trim())),e=e.replace(r[0],nw(OC(i))),this.regexp.lastIndex=0}return e}},iw=e=>{let t=e.toLowerCase().trim(),n={};if(e.includes(`(`)){let r=e.split(`(`);t=r[0].toLowerCase().trim();let i=r[1].slice(0,-1);t===`currency`&&!i.includes(`:`)?n.currency||=i.trim():t===`relativetime`&&!i.includes(`:`)?n.range||=i.trim():i.split(`;`).forEach(e=>{if(e){let[t,...r]=e.split(`:`),i=r.join(`:`).trim().replace(/^'+|'+$/g,``),a=t.trim();n[a]||(n[a]=i),i===`false`&&(n[a]=!1),i===`true`&&(n[a]=!0),isNaN(i)||(n[a]=parseInt(i,10))}})}return{formatName:t,formatOptions:n}},aw=e=>{let t={};return(n,r,i)=>{let a=i;i&&i.interpolationkey&&i.formatParams&&i.formatParams[i.interpolationkey]&&i[i.interpolationkey]&&(a={...a,[i.interpolationkey]:void 0});let o=r+JSON.stringify(a),s=t[o];return s||(s=e(G(r),i),t[o]=s),s(n)}},ow=e=>(t,n,r)=>e(G(n),r)(t),sw=class{constructor(e={}){this.logger=K.create(`formatter`),this.options=e,this.init(e)}init(e,t={interpolation:{}}){this.formatSeparator=t.interpolation.formatSeparator||`,`;let n=t.cacheInBuiltFormats?aw:ow;this.formats={number:n((e,t)=>{let n=new Intl.NumberFormat(e,{...t});return e=>n.format(e)}),currency:n((e,t)=>{let n=new Intl.NumberFormat(e,{...t,style:`currency`});return e=>n.format(e)}),datetime:n((e,t)=>{let n=new Intl.DateTimeFormat(e,{...t});return e=>n.format(e)}),relativetime:n((e,t)=>{let n=new Intl.RelativeTimeFormat(e,{...t});return e=>n.format(e,t.range||`day`)}),list:n((e,t)=>{let n=new Intl.ListFormat(e,{...t});return e=>n.format(e)})}}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=aw(t)}format(e,t,n,r={}){if(!t||e==null)return e;let i=t.split(this.formatSeparator),a=[];for(let e=0;e<i.length;e++){let t=i[e];for(;t.indexOf(`(`)>-1&&!t.includes(`)`)&&e+1<i.length;)t=`${t}${this.formatSeparator}${i[++e]}`;a.push(t)}return a.reduce((e,t)=>{let{formatName:i,formatOptions:a}=iw(t);if(this.formats[i]){let t=e;try{let o=r?.formatParams?.[r.interpolationkey]||{},s=o.locale||o.lng||r.locale||r.lng||n;t=this.formats[i](e,s,{...a,...r,...o})}catch(e){this.logger.warn(e)}return t}else this.logger.warn(`there was no format function for ${i}`);return e},e)}},cw=(e,t)=>{e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)},lw=class extends q{constructor(e,t,n,r={}){super(),this.backend=e,this.store=t,this.services=n,this.languageUtils=n.languageUtils,this.options=r,this.logger=K.create(`backendConnector`),this.waitingReads=[],this.maxParallelReads=r.maxParallelReads||10,this.readingCalls=0,this.maxRetries=r.maxRetries>=0?r.maxRetries:5,this.retryTimeout=r.retryTimeout>=1?r.retryTimeout:350,this.state={},this.queue=[],this.backend?.init?.(n,r.backend,r)}queueLoad(e,t,n,r){let i={},a={},o={},s={};return e.forEach(e=>{let r=!0;t.forEach(t=>{let o=`${e}|${t}`;!n.reload&&this.store.hasResourceBundle(e,t)?this.state[o]=2:this.state[o]<0||(this.state[o]===1?a[o]===void 0&&(a[o]=!0):(this.state[o]=1,r=!1,a[o]===void 0&&(a[o]=!0),i[o]===void 0&&(i[o]=!0),s[t]===void 0&&(s[t]=!0)))}),r||(o[e]=!0)}),(Object.keys(i).length||Object.keys(a).length)&&this.queue.push({pending:a,pendingCount:Object.keys(a).length,loaded:{},errors:[],callback:r}),{toLoad:Object.keys(i),pending:Object.keys(a),toLoadLanguages:Object.keys(o),toLoadNamespaces:Object.keys(s)}}loaded(e,t,n){let r=e.split(`|`),i=r[0],a=r[1];t&&this.emit(`failedLoading`,i,a,t),!t&&n&&this.store.addResourceBundle(i,a,n,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&n&&(this.state[e]=0);let o={};this.queue.forEach(n=>{PC(n.loaded,[i],a),cw(n,e),t&&n.errors.push(t),n.pendingCount===0&&!n.done&&(Object.keys(n.loaded).forEach(e=>{o[e]||(o[e]={});let t=n.loaded[e];t.length&&t.forEach(t=>{o[e][t]===void 0&&(o[e][t]=!0)})}),n.done=!0,n.errors.length?n.callback(n.errors):n.callback())}),this.emit(`loaded`,o),this.queue=this.queue.filter(e=>!e.done)}read(e,t,n,r=0,i=this.retryTimeout,a){if(!e.length)return a(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:t,fcName:n,tried:r,wait:i,callback:a});return}this.readingCalls++;let o=(o,s)=>{if(this.readingCalls--,this.waitingReads.length>0){let e=this.waitingReads.shift();this.read(e.lng,e.ns,e.fcName,e.tried,e.wait,e.callback)}if(o&&s&&r<this.maxRetries){setTimeout(()=>{this.read(e,t,n,r+1,i*2,a)},i);return}a(o,s)},s=this.backend[n].bind(this.backend);if(s.length===2){try{let n=s(e,t);n&&typeof n.then==`function`?n.then(e=>o(null,e)).catch(o):o(null,n)}catch(e){o(e)}return}return s(e,t,o)}prepareLoading(e,t,n={},r){if(!this.backend)return this.logger.warn(`No backend was added via i18next.use. Will not load resources.`),r&&r();B(e)&&(e=this.languageUtils.toResolveHierarchy(e)),B(t)&&(t=[t]);let i=this.queueLoad(e,t,n,r);if(!i.toLoad.length)return i.pending.length||r(),null;i.toLoad.forEach(e=>{this.loadOne(e)})}load(e,t,n){this.prepareLoading(e,t,{},n)}reload(e,t,n){this.prepareLoading(e,t,{reload:!0},n)}loadOne(e,t=``){let n=e.split(`|`),r=n[0],i=n[1];this.read(r,i,`read`,void 0,void 0,(n,a)=>{n&&this.logger.warn(`${t}loading namespace ${i} for language ${r} failed`,n),!n&&a&&this.logger.log(`${t}loaded namespace ${i} for language ${r}`,a),this.loaded(e,n,a)})}saveMissing(e,t,n,r,i,a={},o=()=>{}){if(this.services?.utils?.hasLoadedNamespace&&!this.services?.utils?.hasLoadedNamespace(t)){this.logger.warn(`did not save key "${n}" as the namespace "${t}" was not yet loaded`,`This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!`);return}if(!(n==null||n===``)){if(this.backend?.create){let s={...a,isUpdate:i},c=this.backend.create.bind(this.backend);if(c.length<6)try{let i;i=c.length===5?c(e,t,n,r,s):c(e,t,n,r),i&&typeof i.then==`function`?i.then(e=>o(null,e)).catch(o):o(null,i)}catch(e){o(e)}else c(e,t,n,r,o,s)}!e||!e[0]||this.store.addResource(e[0],t,n,r)}}},uw=()=>({debug:!1,initAsync:!0,ns:[`translation`],defaultNS:[`translation`],fallbackLng:[`dev`],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:`all`,preload:!1,keySeparator:`.`,nsSeparator:`:`,pluralSeparator:`_`,contextSeparator:`_`,enableSelector:!1,partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:`fallback`,saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:e=>{let t={};if(typeof e[1]==`object`&&(t=e[1]),B(e[1])&&(t.defaultValue=e[1]),B(e[2])&&(t.tDescription=e[2]),typeof e[2]==`object`||typeof e[3]==`object`){let n=e[3]||e[2];Object.keys(n).forEach(e=>{t[e]=n[e]})}return t},interpolation:{escapeValue:!0,prefix:`{{`,suffix:`}}`,formatSeparator:`,`,unescapePrefix:`-`,nestingPrefix:`$t(`,nestingSuffix:`)`,nestingOptionsSeparator:`,`,maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),dw=e=>(B(e.ns)&&(e.ns=[e.ns]),B(e.fallbackLng)&&(e.fallbackLng=[e.fallbackLng]),B(e.fallbackNS)&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&!e.supportedLngs.includes(`cimode`)&&(e.supportedLngs=e.supportedLngs.concat([`cimode`])),e),J=()=>{},fw=e=>{Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(t=>{typeof e[t]==`function`&&(e[t]=e[t].bind(e))})},pw=class e extends q{constructor(e={},t){if(super(),this.options=dw(e),this.services={},this.logger=K,this.modules={external:[]},fw(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(e={},t){this.isInitializing=!0,typeof e==`function`&&(t=e,e={}),e.defaultNS==null&&e.ns&&(B(e.ns)?e.defaultNS=e.ns:e.ns.includes(`translation`)||(e.defaultNS=e.ns[0]));let n=uw();this.options={...n,...this.options,...dw(e)},this.options.interpolation={...n.interpolation,...this.options.interpolation},e.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=e.keySeparator),e.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=e.nsSeparator),typeof this.options.overloadTranslationOptionHandler!=`function`&&(this.options.overloadTranslationOptionHandler=n.overloadTranslationOptionHandler);let r=e=>e?typeof e==`function`?new e:e:null;if(!this.options.isClone){this.modules.logger?K.init(r(this.modules.logger),this.options):K.init(null,this.options);let e;e=this.modules.formatter?this.modules.formatter:sw;let t=new ZC(this.options);this.store=new KC(this.options.resources,this.options);let n=this.services;n.logger=K,n.resourceStore=this.store,n.languageUtils=t,n.pluralResolver=new ew(t,{prepend:this.options.pluralSeparator}),e&&(n.formatter=r(e),n.formatter.init&&n.formatter.init(n,this.options),this.options.interpolation.format=n.formatter.format.bind(n.formatter)),n.interpolator=new rw(this.options),n.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},n.backendConnector=new lw(r(this.modules.backend),n.resourceStore,n,this.options),n.backendConnector.on(`*`,(e,...t)=>{this.emit(e,...t)}),this.modules.languageDetector&&(n.languageDetector=r(this.modules.languageDetector),n.languageDetector.init&&n.languageDetector.init(n,this.options.detection,this.options)),this.modules.i18nFormat&&(n.i18nFormat=r(this.modules.i18nFormat),n.i18nFormat.init&&n.i18nFormat.init(this)),this.translator=new XC(this.services,this.options),this.translator.on(`*`,(e,...t)=>{this.emit(e,...t)}),this.modules.external.forEach(e=>{e.init&&e.init(this)})}if(this.format=this.options.interpolation.format,t||=J,this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){let e=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);e.length>0&&e[0]!==`dev`&&(this.options.lng=e[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn(`init: no languageDetector is used and no lng is defined`),[`getResource`,`hasResourceBundle`,`getResourceBundle`,`getDataByLanguage`].forEach(e=>{this[e]=(...t)=>this.store[e](...t)}),[`addResource`,`addResources`,`addResourceBundle`,`removeResourceBundle`].forEach(e=>{this[e]=(...t)=>(this.store[e](...t),this)});let i=V(),a=()=>{let e=(e,n)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn(`init: i18next is already initialized. You should call init just once!`),this.isInitialized=!0,this.options.isClone||this.logger.log(`initialized`,this.options),this.emit(`initialized`,this.options),i.resolve(n),t(e,n)};if((this.languages||this.isLanguageChangingTo)&&!this.isInitialized)return e(null,this.t.bind(this));this.changeLanguage(this.options.lng,e)};return this.options.resources||!this.options.initAsync?a():setTimeout(a,0),i}loadResources(e,t=J){let n=t,r=B(e)?e:this.language;if(typeof e==`function`&&(n=e),!this.options.resources||this.options.partialBundledLanguages){if(r?.toLowerCase()===`cimode`&&(!this.options.preload||this.options.preload.length===0))return n();let e=[],t=t=>{t&&t!==`cimode`&&this.services.languageUtils.toResolveHierarchy(t).forEach(t=>{t!==`cimode`&&(e.includes(t)||e.push(t))})};r?t(r):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(e=>t(e)),this.options.preload?.forEach?.(e=>t(e)),this.services.backendConnector.load(e,this.options.ns,e=>{!e&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),n(e)})}else n(null)}reloadResources(e,t,n){let r=V();return typeof e==`function`&&(n=e,e=void 0),typeof t==`function`&&(n=t,t=void 0),e||=this.languages,t||=this.options.ns,n||=J,this.services.backendConnector.reload(e,t,e=>{r.resolve(),n(e)}),r}use(e){if(!e)throw Error(`You are passing an undefined module! Please check the object you are passing to i18next.use()`);if(!e.type)throw Error(`You are passing a wrong module! Please check the object you are passing to i18next.use()`);return e.type===`backend`&&(this.modules.backend=e),(e.type===`logger`||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type===`languageDetector`&&(this.modules.languageDetector=e),e.type===`i18nFormat`&&(this.modules.i18nFormat=e),e.type===`postProcessor`&&qC.addPostProcessor(e),e.type===`formatter`&&(this.modules.formatter=e),e.type===`3rdParty`&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&![`cimode`,`dev`].includes(e)){for(let e=0;e<this.languages.length;e++){let t=this.languages[e];if(![`cimode`,`dev`].includes(t)&&this.store.hasLanguageSomeTranslations(t)){this.resolvedLanguage=t;break}}!this.resolvedLanguage&&!this.languages.includes(e)&&this.store.hasLanguageSomeTranslations(e)&&(this.resolvedLanguage=e,this.languages.unshift(e))}}changeLanguage(e,t){this.isLanguageChangingTo=e;let n=V();this.emit(`languageChanging`,e);let r=e=>{this.language=e,this.languages=this.services.languageUtils.toResolveHierarchy(e),this.resolvedLanguage=void 0,this.setResolvedLanguage(e)},i=(i,a)=>{a?this.isLanguageChangingTo===e&&(r(a),this.translator.changeLanguage(a),this.isLanguageChangingTo=void 0,this.emit(`languageChanged`,a),this.logger.log(`languageChanged`,a)):this.isLanguageChangingTo=void 0,n.resolve((...e)=>this.t(...e)),t&&t(i,(...e)=>this.t(...e))},a=t=>{!e&&!t&&this.services.languageDetector&&(t=[]);let n=B(t)?t:t&&t[0],a=this.store.hasLanguageSomeTranslations(n)?n:this.services.languageUtils.getBestMatchFromCodes(B(t)?[t]:t);a&&(this.language||r(a),this.translator.language||this.translator.changeLanguage(a),this.services.languageDetector?.cacheUserLanguage?.(a)),this.loadResources(a,e=>{i(e,a)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?a(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(e),n}getFixedT(e,t,n,r){let i=r?.scopeNs,a=(e,t,...r)=>{let o;o=typeof t==`object`?{...t}:this.options.overloadTranslationOptionHandler([e,t].concat(r)),o.lng=o.lng||a.lng,o.lngs=o.lngs||a.lngs;let s=o.ns!==void 0&&o.ns!==null;o.ns=o.ns||a.ns,o.keyPrefix!==``&&(o.keyPrefix=o.keyPrefix||n||a.keyPrefix);let c={...this.options,...o};Array.isArray(i)&&!s&&(c.ns=i),typeof o.keyPrefix==`function`&&(o.keyPrefix=z(o.keyPrefix,c));let l=this.options.keySeparator||`.`,u;return o.keyPrefix&&Array.isArray(e)?u=e.map(e=>(typeof e==`function`&&(e=z(e,c)),`${o.keyPrefix}${l}${e}`)):(typeof e==`function`&&(e=z(e,c)),u=o.keyPrefix?`${o.keyPrefix}${l}${e}`:e),this.t(u,o)};return B(e)?a.lng=e:a.lngs=e,a.ns=t,a.keyPrefix=n,a}t(...e){return this.translator?.translate(...e)}exists(...e){return this.translator?.exists(...e)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e,t={}){if(!this.isInitialized)return this.logger.warn(`hasLoadedNamespace: i18next was not initialized`,this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn(`hasLoadedNamespace: i18n.languages were undefined or empty`,this.languages),!1;let n=t.lng||this.resolvedLanguage||this.languages[0],r=this.options?this.options.fallbackLng:!1,i=this.languages[this.languages.length-1];if(n.toLowerCase()===`cimode`)return!0;let a=(e,t)=>{let n=this.services.backendConnector.state[`${e}|${t}`];return n===-1||n===0||n===2};if(t.precheck){let e=t.precheck(this,a);if(e!==void 0)return e}return!!(this.hasResourceBundle(n,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||a(n,e)&&(!r||a(i,e)))}loadNamespaces(e,t){let n=V();return this.options.ns?(B(e)&&(e=[e]),e.forEach(e=>{this.options.ns.includes(e)||this.options.ns.push(e)}),this.loadResources(e=>{n.resolve(),t&&t(e)}),n):(t&&t(),Promise.resolve())}loadLanguages(e,t){let n=V();B(e)&&(e=[e]);let r=this.options.preload||[],i=e.filter(e=>!r.includes(e)&&this.services.languageUtils.isSupportedCode(e));return i.length?(this.options.preload=r.concat(i),this.loadResources(e=>{n.resolve(),t&&t(e)}),n):(t&&t(),Promise.resolve())}dir(e){if(e||=this.resolvedLanguage||(this.languages?.length>0?this.languages[0]:this.language),!e)return`rtl`;try{let t=new Intl.Locale(e);if(t&&t.getTextInfo){let e=t.getTextInfo();if(e&&e.direction)return e.direction}}catch{}let t=`ar.shu.sqr.ssh.xaa.yhd.yud.aao.abh.abv.acm.acq.acw.acx.acy.adf.ads.aeb.aec.afb.ajp.apc.apd.arb.arq.ars.ary.arz.auz.avl.ayh.ayl.ayn.ayp.bbz.pga.he.iw.ps.pbt.pbu.pst.prp.prd.ug.ur.ydd.yds.yih.ji.yi.hbo.men.xmn.fa.jpr.peo.pes.prs.dv.sam.ckb`.split(`.`),n=this.services?.languageUtils||new ZC(uw());return e.toLowerCase().indexOf(`-latn`)>1?`ltr`:t.includes(n.getLanguagePartFromCode(e))||e.toLowerCase().indexOf(`-arab`)>1?`rtl`:`ltr`}static createInstance(t={},n){let r=new e(t,n);return r.createInstance=e.createInstance,r}cloneInstance(t={},n=J){let r=t.forkResourceStore;r&&delete t.forkResourceStore;let i={...this.options,...t,isClone:!0},a=new e(i);if((t.debug!==void 0||t.prefix!==void 0)&&(a.logger=a.logger.clone(t)),[`store`,`services`,`language`].forEach(e=>{a[e]=this[e]}),a.services={...this.services},a.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},r&&(a.store=new KC(Object.keys(this.store.data).reduce((e,t)=>(e[t]={...this.store.data[t]},e[t]=Object.keys(e[t]).reduce((n,r)=>(n[r]={...e[t][r]},n),e[t]),e),{}),i),a.services.resourceStore=a.store),t.interpolation){let e={...uw().interpolation,...this.options.interpolation,...t.interpolation},n={...i,interpolation:e};a.services.interpolator=new rw(n)}return a.translator=new XC(a.services,i),a.translator.on(`*`,(e,...t)=>{a.emit(e,...t)}),a.init(i,n),a.translator.options=i,a.translator.backendConnector.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},a}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}},Y=pw.createInstance(),Y.createInstance,Y.dir,Y.init,Y.loadResources,Y.reloadResources,Y.use,Y.changeLanguage,Y.getFixedT,X=Y.t,Y.exists,Y.setDefaultNamespace,Y.hasLoadedNamespace,Y.loadNamespaces,Y.loadLanguages})),hw,gw,_w,vw,yw=e((()=>{Pt(),EC(),mw(),r(),hw=e=>e.button===0&&!e.altKey&&!e.ctrlKey&&!e.metaKey&&!e.shiftKey,gw=e=>e?.dispatchEvent(new Event(`select`,{bubbles:!0})),_w=e=>typeof e==`string`&&e?e:X(`More`)||`More`,vw=({items:e,overflows:n,active:r,label:i,onItemClick:a})=>t`
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
			<span>${_w(i)}</span>
			<span class="chevron" aria-hidden="true"
				>${Za({width:`16`,height:`16`})}</span
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
`})),Z,Q,bw,xw,Sw,Cw,ww,Tw,Ew,Dw=e((()=>{yw(),Z=e=>!e.hasAttribute(`disabled`)&&!e.hasAttribute(`hidden`)&&!e.hasAttribute(`overflowing`),Q=(e,t,n)=>{e.getAttribute(t)!==n&&(n==null?e.removeAttribute(t):e.setAttribute(t,n))},bw=(e,t)=>{[`active`,`disabled`,`hidden`,`href`,`name`,`badge`,`title`,`role`].forEach(n=>Q(t,n,e.getAttribute(n))),Q(t,`aria-selected`,t.hasAttribute(`active`)?`true`:`false`),Q(t,`aria-disabled`,e.hasAttribute(`disabled`)?`true`:null),t.setAttribute(`tabindex`,`-1`)},xw=e=>{e.forEach(([,e])=>{Z(e)&&e.setAttribute(`tabindex`,`0`)})},Sw=e=>{let t=e.find(e=>e.hasAttribute(`active`));return t==null?null:Z(t)?t:[...e.slice(0,e.indexOf(t))].reverse().find(Z)??null},Cw=e=>{let t=e.cloneNode(!0);return[`variant`,`size`,`compact-width`,`overflowing`,`style`].forEach(e=>t.removeAttribute(e)),t.setAttribute(`menu`,``),t},ww=(e,t)=>{t.innerHTML!==e.innerHTML&&t.replaceChildren(...[...e.childNodes].map(e=>e.cloneNode(!0))),bw(e,t)},Tw=e=>new MouseEvent(`click`,e),Ew=e=>t=>{let n=t.composedPath(),r=e.find(([,e])=>n.includes(e));if(!r)return;let[i,a]=r;t.stopPropagation(),i.dispatchEvent(Tw(t))||t.preventDefault(),hw(t)&&gw(a)}})),Ow,kw=e((()=>{O(),Ow=A`
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
`})),Aw,jw,Mw,Nw,Pw,Fw,Iw,Lw,Rw=e((()=>{De(),ht(),bt(),O(),Tt(),yw(),Dw(),kw(),Aw=`cosmoz-tab-next`,jw={attributes:!0,attributeFilter:[`active`,`disabled`,`hidden`,`badge`,`href`,`name`,`title`],childList:!0,subtree:!0,characterData:!0},Mw=(e,t)=>{let[n,r]=_(0);return v(()=>{let t=new MutationObserver(()=>r(e=>e+1));return e().forEach(e=>t.observe(e,jw)),()=>t.disconnect()},[t]),n},Nw=(e,t,n)=>{let r=Mw(e,n),i=k();return i.current??=new Map,y(()=>{let n=i.current,r=e(),a=r.filter(e=>t.has(e)).map(e=>{let t=n.get(e)??Cw(e);return n.set(e,t),ww(e,t),[e,t]}),o=new Set(a.map(([e])=>e));n.forEach((e,t)=>{o.has(t)||n.delete(t)}),xw(a);let s=Sw(r);return r.forEach(e=>Q(e,`tabindex`,e===s?`0`:`-1`)),a},[t,n,r])},Pw=e=>(e.getAttribute(`role`)===`radiogroup`&&(e.removeAttribute(`role`),e.dispatchEvent(new CustomEvent(`deprecation-warning`,{detail:{message:`role=radiogroup is no longer supported: a value picker belongs in cosmoz-toggle-group (@neovici/cosmoz-input); the items are tabs.`}}))),{variant:e.getAttribute(`variant`),size:e.getAttribute(`size`),"compact-width":e.hasAttribute(`compact-width`)?``:null,role:`tab`,"aria-selected":e=>e.hasAttribute(`active`)?`true`:`false`,"aria-disabled":e=>e.hasAttribute(`disabled`)?`true`:null}),Fw=new Set([`ArrowLeft`,`ArrowRight`,`Home`,`End`]),Iw=(e,t,n)=>{let r=e.filter(Z);if(r.length===0)return null;if(n===`Home`)return r[0];if(n===`End`)return r[r.length-1];let i=r.indexOf(t);return i<0?null:r[Math.max(0,Math.min(r.length-1,i+(n===`ArrowLeft`?-1:1)))]},Lw=e=>{e.getAttribute(`variant`)||e.setAttribute(`variant`,`brand`);let[n,r]=_(0),[i,a]=_(()=>new Set),o=k(),s=S(()=>(o.current??[]).filter(e=>e.matches(Aw)),[]),c=()=>r(e=>e+1),l=Nw(s,i,n);return v(()=>{let t=e=>{if(!Fw.has(e.key))return;let t=s(),n=e.target;if(!t.includes(n))return;e.preventDefault();let r=Iw(t,n,e.key);!r||r===n||(r.click(),r.focus())};return e.addEventListener(`keydown`,t),()=>e.removeEventListener(`keydown`,t)},[]),t`
		<slot name="tabs"></slot>
		<div class="group" role="tablist">
			<slot
				${mt(o)}
				${yt(Pw(e))}
				${wt({is:e=>e.matches(Aw),onOverflow:a})}
				@slotchange=${c}
			></slot>
		</div>
		${vw({items:l.map(([,e])=>e),overflows:l.length>0,active:l.some(([e])=>e.hasAttribute(`active`)&&!e.hidden),label:e.moreLabel,onItemClick:Ew(l)})}
		<slot name="stats"></slot>
	`},customElements.define(`cosmoz-tabs-next`,C(Lw,{observedAttributes:[`variant`,`size`,`compact-width`,`more-label`],styleSheets:[F,Ow]}))})),zw,Bw,Vw,Hw,Uw=e((()=>{O(),zw=()=>new URL(location.hash.replace(/^#!?/iu,``).replace(`%23`,`#`),location.origin),Bw=e=>e?()=>new URLSearchParams(zw().hash.replace(`#`,``)).get(e):void 0,Vw=(e,t)=>{if(!e)return;let n=zw(),r=new URLSearchParams(n.hash.replace(`#`,``));return t==null?r.delete(e):r.set(e,t),`#!`+Object.assign(n,{hash:r}).href.replace(location.origin,``)},Hw=e=>{let t=y(()=>Bw(e),[e]),[n,r]=_(t),i=k(n);return v(()=>void(i.current=n),[n]),v(()=>{if(t==null)return;let e=()=>{let e=t();i.current!==e&&r(e)};return e(),window.addEventListener(`popstate`,e),window.addEventListener(`hashchange`,e),()=>{window.removeEventListener(`popstate`,e),window.removeEventListener(`hashchange`,e)}},[t]),[n,y(()=>e?t=>{r(t),history.pushState({},``,Vw(e,t))}:r,[e])]}})),Ww,Gw,Kw,qw,Jw,Yw=e((()=>{Uw(),qe(),O(),L(),It(),Ww=e=>!e.hidden&&!e.disabled,Gw=e=>e.slice().sort((e,t)=>Number(t.fallback??!1)-Number(e.fallback??!1)).find(Ww),Kw=(e,t)=>{let n=t?e.find(e=>e.name===t):void 0;return n&&Ww(n)?n:Gw(e)},qw=(e,{hashParam:t,onActivate:n}={})=>{let[r,i]=Hw(t),a=k([]),o=y(()=>Kw(e,r??void 0),[e,r]);return{tabs:e,active:o,activated:y(()=>{let e=o?.name;return a.current=[...(a.current??[]).filter(t=>t!==e),e].filter(Boolean)},[o]),activate:i,onActivate:S(e=>{let t=e;if(t.button!==0||t.metaKey||t.ctrlKey)return;let r=e.currentTarget?.getAttribute(`name`);r&&(n?.(r),i(r))},[i,n])}},Jw=({tabs:e,active:n,onActivate:r,className:i,variant:a,size:o,compactWidth:s})=>e.map(e=>{let c=Ke(e.title),l=e.content??c,u=e.badge||void 0;return t`<cosmoz-tab-next
			name=${e.name}
			class=${I(i)}
			variant=${I(a)}
			size=${I(o)}
			?compact-width=${I(s)}
			title=${I(c)}
			?active=${n?.name===e.name}
			?hidden=${e.hidden}
			?disabled=${e.disabled}
			badge=${I(u)}
			@click=${r}
			>${Ft(e.icon,e=>e({slot:`icon`}))}${l}</cosmoz-tab-next
		>`})})),Xw=e((()=>{ft(),Rw(),Yw()})),Zw,Qw,$w,eT,tT,nT,rT=e((()=>{r(),b(),u(),D(),Zw=class{_ref;constructor(e){this._ref=e}disconnect(){this._ref=void 0}reconnect(e){this._ref=e}deref(){return this._ref}},Qw=class{_promise=void 0;_resolve=void 0;get(){return this._promise}pause(){this._promise??=new Promise(e=>this._resolve=e)}resume(){this._resolve?.(),this._promise=this._resolve=void 0}},$w=e=>!c(e)&&typeof e.then==`function`,eT=1073741823,tT=class extends E{__lastRenderedIndex=eT;__values=[];__weakThis=new Zw(this);__pauser=new Qw;render(...e){return e.find(e=>!$w(e))??i}update(e,t){let n=this.__values,r=n.length;this.__values=t;let a=this.__weakThis,o=this.__pauser;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this.__lastRenderedIndex);e++){let i=t[e];if(!$w(i))return this.__lastRenderedIndex=e,i;e<r&&i===n[e]||Promise.resolve(i).then(async e=>{for(;o.get();)await o.get();let t=a.deref();if(t!==void 0){let n=t.__values.indexOf(i);n>-1&&n<=t.__lastRenderedIndex&&(t.__lastRenderedIndex=n,t.setValue(e))}})}return i}disconnected(){this.__weakThis.disconnect(),this.__pauser.pause()}reconnected(){this.__weakThis.reconnect(this),this.__pauser.resume()}},nT=p(tT)})),$,iT=e((()=>{r(),$=t`
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="6"
		height="10"
		fill="none"
		viewBox="0 0 6 10"
	>
		<path stroke="currentColor" stroke-linecap="round" d="m1 9 4-4-4-4" />
	</svg>
`})),aT,oT,sT=e((()=>{O(),aT=A`
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
		padding: 11px 16px;
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
`,oT=A`
	${aT}

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
`})),cT,lT,uT,dT,fT,pT,mT,hT,gT=e((()=>{Fe(),Ee(),st(),Xw(),rT(),mw(),r(),We(),L(),It(),iT(),sT(),cT={id:`empty`,content:a,animation:rt},lT=()=>cT,uT=({next:e,prev:n})=>t` <cosmoz-button
			variant="secondary"
			class="button-nav prev"
			title="${X(`Previous item`)}"
			?disabled=${!n}
			slot="extra"
			@click=${n}
		>
			${$}
		</cosmoz-button>
		<cosmoz-button
			variant="secondary"
			title="${X(`Next item`)}"
			class="button-nav next"
			?disabled=${!e}
			slot="extra"
			@click=${e}
		>
			${$}
		</cosmoz-button>`,dT=e=>{if(!e)return a;let{pageNumber:n=-1,onPage:r}=e,i=e.totalPages??Math.ceil((e.totalAvailable??0)/(e.pageSize??0));return t` <div class="tabn-pagination" slot="stats">
		<cosmoz-button
			title="${X(`Previous page`)}"
			class="button-page page-prev"
			size="sm"
			variant="secondary"
			?disabled=${!(n>1)}
			@click=${e=>r(e.ctrlKey?1:n-1)}
		>
			${$}
		</cosmoz-button>
		<cosmoz-button
			title="${X(`Next page`)}"
			variant="secondary"
			class="button-page page-next"
			size="sm"
			?disabled=${!(n<i)}
			@click=${e=>r(e.ctrlKey?i:n+1)}
		>
			${$}
		</cosmoz-button>
	</div>`},fT=({pagination:e,index:n,items:r,totalAvailable:i,nav:o,activeTab:s})=>r.length<1?a:t`<div class="tabn-stats" slot="stats">
		${(()=>{if(e){let{pageNumber:t,pageSize:i}=e,a=i??r.length;return[((t??1)-1)*a+n+1,r.length<a?e.totalAvailable:(t??1)*a].join(`-`)}let t=o.index,i=o.items?.length;return[i!==r.length&&[`queue`,`split`].includes(s||``)?[t<0?`?`:t+1,i].join(`/`):[n+1,r.length].join(`-`)]})()}
		${[X(`of`),i??X(`many`)].join(` `)}
	</div>`,pT=({animationEnd$:e,details:t,item:n,next:r,prev:i,renderItem:a,renderLoader:o})=>{let s=uT({next:r,prev:i});if(!t)return a({item:n,nav:s,next:r,prev:i,animationEnd$:e});let c=t(n);return R([c,e,r],()=>nT(Promise.all([c,e]).then(([e])=>a({item:e,nav:s,next:r,prev:i})),o({item:n,nav:s})))},mT=({id:e,forward:t,item:n,...r})=>n?{id:e(n),render:e=>pT({...e,item:n,...r}),animation:t?rt:it}:lT(),hT=({header:e,heading:n,afterHeading:r,index:i,tabnav:a,items:o,totalAvailable:s,nav:c,list:l,renderLoader:u,renderItem:d,details:f=c?.details,pagination:p,persistKey:m,splitAttrs:h})=>{let g=a.active?.name,_=p?{...p,totalAvailable:s}:void 0,v=t`
		<cosmoz-tabs-next class="tabn">
			<div class="tabn-heading" slot="tabs">${n}${r}</div>
			${Jw({...a,className:`tabn-tab`})}
			${fT({pagination:_,totalAvailable:s,index:i,items:o,nav:c,activeTab:g})}
			${dT(_)}
		</cosmoz-tabs-next>
	`;return t`
		<style>
			${oT}
		</style>

		${Ft(e,e=>e({tabnav:a,heading:n,afterHeading:r,totalAvailable:s}),()=>v)}

		<cosmoz-resizable-view
			data-active=${g}
			direction="horizontal"
			persist=${I(m)}
			initial-size=${h?.initialSize??`50%`}
			min-size=${h?.minSize??`100`}
		>
			${l}
			<cosmoz-slider
				id="queue"
				slot="next"
				.slide=${Ft(g!==`overview`,()=>mT({...c,renderLoader:u,renderItem:d,details:f}),lT)}
			></cosmoz-slider>
		</cosmoz-resizable-view>
	`}}));export{Ge as _,fT as a,We as b,Xw as c,Vw as d,Hw as f,Et as g,Dt as h,hT as i,qw as l,X as m,uT as n,aT as o,mw as p,dT as r,sT as s,gT as t,Uw as u,qe as v,Ee as x,R as y};