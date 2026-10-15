import{t as e}from"./chunk-BvrOYcoh.js";import{a as t,o as n,r,t as i}from"./lit-html-BZ3vufxv.js";import{a,c as o,i as s,n as c,r as l,s as u,t as d}from"./iframe-fPC5M702.js";import{a as f,b as p,c as m,f as h,g,h as _,i as v,l as y,m as b,n as x,o as ee,p as te,r as ne,s as S,t as C,u as w,y as T}from"./haunted-BleYZ_lI.js";import{C as re,S as E,b as ie,c as D,m as O,n as ae,p as oe,s as se,t as ce,v as le,w as k,x as ue,y as A}from"./next-ClUailIM.js";var de,j,fe,pe,me=e((()=>{C(),de=e=>{if(typeof e!=`object`||!e)return!1;let t=e;return typeof t.px==`number`&&t.px>=0&&!Number.isNaN(t.px)},j=e=>{try{let t=JSON.parse(e);if(de(t))return t}catch{}},fe=(e=`cosmoz-resizable-view:`)=>{let t=new Map,n,r=new Map,i=()=>{n=void 0;for(let[t,n]of r)try{localStorage.setItem(e+t,JSON.stringify(n))}catch{}r.clear()},a=(e,t)=>{r.set(e,t),n??=setTimeout(i,100)},o=n=>{if(n.key==null||!n.key.startsWith(e)||n.newValue==null)return;let r=n.key.slice(e.length),i=j(n.newValue);if(i==null)return;let a=t.get(r);if(a)for(let e of a)e(i)};return typeof window<`u`&&window.addEventListener(`storage`,o),{get(t){let n;try{n=localStorage.getItem(e+t)}catch{return}if(n!=null)return j(n)},set(e,t){a(e,t)},subscribe(e,n){let r=t.get(e);return r||(r=new Set,t.set(e,r)),r.add(n),()=>{let r=t.get(e);r&&(r.delete(n),r.size===0&&t.delete(e))}},destroy(){typeof window<`u`&&window.removeEventListener(`storage`,o),n!=null&&(clearTimeout(n),i())}}},pe=(e,t,n)=>{let r=w(n);if(r.current=n,g(()=>{if(!e||!t)return;let n=e.get(t);n!=null&&r.current?.(n);let i=e.subscribe?.(t,e=>r.current?.(e));return()=>{i?.(),e.destroy?.()}},[e,t]),!(!e||!t))return n=>e.set(t,n)}})),he,ge=e((()=>{C(),he=T`
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
`})),M,N,P,F,I,L,R,z=e((()=>{M=e=>e instanceof MouseEvent?{x:e.clientX,y:e.clientY}:e.touches&&e.touches.length>0?{x:e.touches[0].clientX,y:e.touches[0].clientY}:{x:0,y:0},N=(e,t,n)=>n===`horizontal`?e.x-t.left:e.y-t.top,P=e=>{let t=parseFloat(e);return Number.isNaN(t)?void 0:t},F=(e,t)=>{let n=getComputedStyle(e);return t===`horizontal`?{min:P(n.minWidth)??0,max:P(n.maxWidth)??1/0}:{min:P(n.minHeight)??0,max:P(n.maxHeight)??1/0}},I=e=>({rect:e.container.getBoundingClientRect(),bounds:F(e.previous,e.direction)}),L=(e,t,n,r)=>Math.max(r.min,Math.min(N(e,t,n),r.max)),R=e=>{let t;return n=>{let{phase:r,mousePosition:i}=n.detail;if(r===`start`){t=I(e);return}if(r!==`move`&&r!==`end`)return;t||=I(e);let a=L(i,t.rect,e.direction,t.bounds);r===`move`?e.onResize?.(a):(e.onResizeEnd?.(a),t=void 0)}}})),_e,ve=e((()=>{C(),z(),_e=(e=`horizontal`)=>{let t=y();return g(()=>{t.setAttribute(`data-direction`,e)},[e]),g(()=>{let e=(e,n)=>{t.dispatchEvent(new CustomEvent(`resize-handle`,{detail:{phase:e,mousePosition:n},bubbles:!0}))},n=0,r,i=()=>{n=0,r&&=(e(`move`,r),void 0)},a=e=>{r=M(e),n||=requestAnimationFrame(i)},o=r=>{n&&(cancelAnimationFrame(n),i()),t.removeAttribute(`data-dragging`),e(`end`,M(r)),document.removeEventListener(`mousemove`,a),document.removeEventListener(`mouseup`,o),document.removeEventListener(`touchmove`,a),document.removeEventListener(`touchend`,o)},s=n=>{t.setAttribute(`data-dragging`,`true`),e(`start`,M(n)),document.addEventListener(`mousemove`,a),document.addEventListener(`mouseup`,o),document.addEventListener(`touchmove`,a,{passive:!1}),document.addEventListener(`touchend`,o)},c=e=>{e.preventDefault(),s(e)},l=e=>{e.preventDefault(),s(e)};return t.addEventListener(`mousedown`,c),t.addEventListener(`touchstart`,l,{passive:!1}),()=>{n&&cancelAnimationFrame(n),t.removeEventListener(`mousedown`,c),t.removeEventListener(`touchstart`,l),document.removeEventListener(`mousemove`,a),document.removeEventListener(`mouseup`,o),document.removeEventListener(`touchmove`,a),document.removeEventListener(`touchend`,o)}},[t]),null}})),ye,be=e((()=>{C(),ye=T`
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
`})),xe,Se=e((()=>{C(),n(),ve(),be(),xe=({direction:e=`horizontal`})=>(_e(e),i),customElements.define(`cosmoz-resize-handle`,x(xe,{styleSheets:[ye],observedAttributes:[`direction`]}))})),B,V,Ce,we,Te,Ee=e((()=>{C(),n(),re(),me(),ge(),Se(),z(),B=e=>{let{width:t,height:n}=e.getBoundingClientRect();return t>0&&n>0},V=e=>e?.assignedElements()[0],Ce=(e,t,n)=>{let r=()=>{let r=B(t)&&B(n);e.toggleAttribute(`data-single-panel`,!r)},i=new ResizeObserver(()=>queueMicrotask(r));return i.observe(t),i.observe(n),r(),i},we=(e,t)=>{t!=null&&(e.style.flexBasis=`${t.px}px`)},Te=({direction:e=`horizontal`,persist:n})=>{let r=y(),i=w(),a=w(),o=w(),[s,c]=h(!1),l=_(()=>n?fe():void 0,[n]),u=pe(l,n,e=>{let t=V(a.current);t&&we(t,e)}),d=w(u);d.current=u;let f=b(()=>{let e=a.current?.assignedElements()[0],t=o.current?.assignedElements()[0];e&&t&&c(!0)},[]);return g(()=>{r.setAttribute(`data-direction`,e)},[e]),g(()=>{if(!s)return;let t=V(a.current),n=V(o.current),c=i.current;if(!t||!n||!c)return;let l=R({container:r,previous:t,direction:e,onResize:e=>{t.style.flexBasis=`${e}px`},onResizeEnd:e=>{d.current?.({px:e})}});c.addEventListener(`resize-handle`,l);let u=Ce(r,t,n);return()=>{c.removeEventListener(`resize-handle`,l),u.disconnect()}},[e,l,n,r,s]),t`<slot
			name="previous"
			${k(a)}
			@slotchange=${f}
		></slot
		><cosmoz-resize-handle
			direction=${e}
			${k(i)}
		></cosmoz-resize-handle
		><slot name="next" ${k(o)} @slotchange=${f}></slot>`},customElements.define(`cosmoz-resizable-view`,x(Te,{styleSheets:[he],observedAttributes:[`direction`,`persist`]}))})),De=e((()=>{me(),Ee(),Se(),z()})),Oe,ke=e((()=>{C(),Oe=p(T`
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
`)})),Ae,je=e((()=>{C(),Ae=T`
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
`})),Me,Ne=e((()=>{je(),C(),Me=T`
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
		${Ae}
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
`})),Pe,Fe,Ie=e((()=>{ke(),C(),n(),ue(),Ne(),Pe=[`variant`,`size`,`disabled`,`full-width`,`type`,`value`,`href`,`target`,`rel`,`download`],Fe=e=>{let n=e.hasAttribute(`disabled`),r=e.getAttribute(`type`)||`button`,a=e.getAttribute(`href`);g(()=>{let t=t=>{e.hasAttribute(`disabled`)&&t.stopImmediatePropagation()};return e.addEventListener(`click`,t,{capture:!0}),()=>e.removeEventListener(`click`,t,{capture:!0})},[]);let o=t`
		<slot name="prefix"></slot>
		<slot></slot>
		<slot name="suffix"></slot>
	`;if(a!=null){let r=e.getAttribute(`target`),s=e.getAttribute(`rel`),c=e.getAttribute(`download`);return t`
			<a
				href=${a}
				class="button"
				part="button"
				aria-disabled=${n?`true`:i}
				target=${E(r)}
				rel=${E(s)}
				download=${E(c)}
				>${o}</a
			>
		`}return t`
		<button type=${r} class="button" ?disabled=${n} part="button">
			${o}
		</button>
	`},customElements.define(`cosmoz-button`,x(Fe,{observedAttributes:Pe,styleSheets:[Oe,Me],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})),Le=e((()=>{Ie()})),H,Re,ze=e((()=>{n(),S(),l(),H=(e,t,n)=>{let r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},Re=f(class extends ee{constructor(e){if(super(e),e.type!==m.CHILD)throw Error(`repeat() can only be used in text expressions`)}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);let i=[],a=[],o=0;for(let t of e)i[o]=r?r(t,o):o,a[o]=n(t,o),o++;return{values:a,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,i]){let s=d(e),{values:l,keys:f}=this.dt(t,n,i);if(!Array.isArray(s))return this.ut=f,l;let p=this.ut??=[],m=[],h,g,_=0,v=s.length-1,y=0,b=l.length-1;for(;_<=v&&y<=b;)if(s[_]===null)_++;else if(s[v]===null)v--;else if(p[_]===f[y])m[y]=u(s[_],l[y]),_++,y++;else if(p[v]===f[b])m[b]=u(s[v],l[b]),v--,b--;else if(p[_]===f[b])m[b]=u(s[_],l[b]),o(e,m[b+1],s[_]),_++,b--;else if(p[v]===f[y])m[y]=u(s[v],l[y]),o(e,s[_],s[v]),v--,y++;else if(h===void 0&&(h=H(f,y,b),g=H(p,_,v)),h.has(p[_]))if(h.has(p[v])){let t=g.get(f[y]),n=t===void 0?null:s[t];if(n===null){let t=o(e,s[_]);u(t,l[y]),m[y]=t}else m[y]=u(n,l[y]),o(e,s[_],n),s[t]=null;y++}else c(s[v]),v--;else c(s[_]),_++;for(;y<=b;){let t=o(e,m[b+1]);u(t,l[y]),m[y++]=t}for(;_<=v;){let e=s[_++];e!==null&&c(e)}return this.ut=f,a(e,m),r}})})),U,Be,Ve,He=e((()=>{n(),S(),U=`important`,Be=` !`+U,Ve=f(class extends ee{constructor(e){if(super(e),e.type!==m.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`},``)}update(e,[t]){let{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?n.removeProperty(e):n[e]=null);for(let e in t){let r=t[e];if(r!=null){this.ft.add(e);let t=typeof r==`string`&&r.endsWith(Be);e.includes(`-`)||t?n.setProperty(e,t?r.slice(0,-11):r,t?U:``):n[e]=r}}return r}})})),Ue,We=e((()=>{le(),Ue=class extends Promise{constructor(e){let t={};super((e,n)=>Object.assign(t,{resolve:e,reject:n})),Object.assign(this,t),e?.(t.resolve,t.reject)}resolve=()=>{}}})),W,Ge,Ke,qe,Je=e((()=>{C(),ze(),re(),He(),ie(),We(),W={host:{position:`relative`,display:`flex`,overflow:`hidden`},slide:{position:`static`,width:`100%`,height:`100%`}},Ge=e=>{let{slide:t}=e,[n,r]=h([]);return te(()=>void Object.assign(e.style,W.host),[]),g(()=>{if(t==null)return;let e={animationEnd$:new Ue,...t};r((t=[])=>{let n=t.findIndex(({id:t,out:n})=>t===e.id&&n!==!0);return n===-1?[...t,e]:[...t.slice(0,n),e,...t.slice(n+1,t.length)]})},[t]),te(async()=>{if(n.filter(e=>!e.out).length<2){let e=n[0];e&&requestAnimationFrame(()=>requestAnimationFrame(()=>e.animationEnd$.resolve()));return}let e=n[n.length-1],t=n[n.length-2],i=e.el,a=t.el;t.out=!0,i&&a&&await e.animation?.(i,a),r((e=[])=>e.filter(e=>e!==t))},[n]),{slides:n}},Ke=e=>t`<div
		${k(t=>Object.assign(e,{el:t}))}
		class="slide"
		style=${Ve(W.slide)}
	>
		${A([e],()=>e.content??e.render?.(e))}
	</div>`,qe=({slides:e})=>A([e],()=>Re(e,({id:e})=>e,Ke))})),Ye,Xe=e((()=>{C(),Je(),Ye=e=>qe(Ge(e)),customElements.define(`cosmoz-slider`,x(Ye,{useShadowDOM:!1}))})),G,Ze,Qe=e((()=>{G=(e,t)=>{let n=e.animate([{position:`absolute`,transform:`translateX(100%)`},{transform:`translateX(0%)`}],{duration:200,fill:`none`,easing:`ease-in-out`}),r=t.animate([{},{position:`absolute`,transform:`translateX(-100%)`}],{duration:200,fill:`none`,easing:`ease-in-out`});return Promise.all([n.finished,r.finished])},Ze=(e,t)=>{let n=e.animate([{position:`absolute`,transform:`translateX(-100%)`},{transform:`translateX(0%)`}],{duration:200,fill:`none`,easing:`ease-in-out`}),r=t.animate([{},{position:`absolute`,transform:`translateX(100%)`}],{duration:200,fill:`none`,easing:`ease-in-out`});return Promise.all([n.finished,r.finished])}})),$e=e((()=>{C(),n()})),et=e((()=>{Xe(),$e(),Qe(),Je()})),tt,nt,K,rt,q,it,at=e((()=>{n(),v(),l(),S(),tt=class{_ref;constructor(e){this._ref=e}disconnect(){this._ref=void 0}reconnect(e){this._ref=e}deref(){return this._ref}},nt=class{_promise=void 0;_resolve=void 0;get(){return this._promise}pause(){this._promise??=new Promise(e=>this._resolve=e)}resume(){this._resolve?.(),this._promise=this._resolve=void 0}},K=e=>!s(e)&&typeof e.then==`function`,rt=1073741823,q=class extends ne{__lastRenderedIndex=rt;__values=[];__weakThis=new tt(this);__pauser=new nt;render(...e){return e.find(e=>!K(e))??r}update(e,t){let n=this.__values,i=n.length;this.__values=t;let a=this.__weakThis,o=this.__pauser;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this.__lastRenderedIndex);e++){let r=t[e];if(!K(r))return this.__lastRenderedIndex=e,r;e<i&&r===n[e]||Promise.resolve(r).then(async e=>{for(;o.get();)await o.get();let t=a.deref();if(t!==void 0){let n=t.__values.indexOf(r);n>-1&&n<=t.__lastRenderedIndex&&(t.__lastRenderedIndex=n,t.setValue(e))}})}return r}disconnected(){this.__weakThis.disconnect(),this.__pauser.pause()}reconnected(){this.__weakThis.reconnect(this),this.__pauser.resume()}},it=f(q)})),J,ot=e((()=>{n(),J=t`
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="6"
		height="10"
		fill="none"
		viewBox="0 0 6 10"
	>
		<path stroke="currentColor" stroke-linecap="round" d="m1 9 4-4-4-4" />
	</svg>
`})),Y,st,ct=e((()=>{C(),Y=T`
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
`,st=T`
	${Y}

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
`})),lt,X,Z,Q,$,ut,dt,ft,pt=e((()=>{Le(),De(),et(),ce(),at(),se(),n(),ie(),ue(),oe(),ot(),ct(),lt={id:`empty`,content:i,animation:G},X=()=>lt,Z=({next:e,prev:n})=>t` <cosmoz-button
			variant="secondary"
			icon-only
			class="button-nav prev"
			title="${D(`Previous item`)}"
			?disabled=${!n}
			slot="extra"
			@click=${n}
		>
			${J}
		</cosmoz-button>
		<cosmoz-button
			variant="secondary"
			icon-only
			title="${D(`Next item`)}"
			class="button-nav next"
			?disabled=${!e}
			slot="extra"
			@click=${e}
		>
			${J}
		</cosmoz-button>`,Q=e=>{if(!e)return i;let{pageNumber:n=-1,onPage:r}=e,a=e.totalPages??Math.ceil((e.totalAvailable??0)/(e.pageSize??0));return t` <div class="tabn-pagination" slot="stats">
		<cosmoz-button
			title="${D(`Previous page`)}"
			class="button-page page-prev"
			size="sm"
			variant="secondary"
			icon-only
			?disabled=${!(n>1)}
			@click=${e=>r(e.ctrlKey?1:n-1)}
		>
			${J}
		</cosmoz-button>
		<cosmoz-button
			title="${D(`Next page`)}"
			variant="secondary"
			icon-only
			class="button-page page-next"
			size="sm"
			?disabled=${!(n<a)}
			@click=${e=>r(e.ctrlKey?a:n+1)}
		>
			${J}
		</cosmoz-button>
	</div>`},$=({pagination:e,index:n,items:r,totalAvailable:a,nav:o,activeTab:s})=>r.length<1?i:t`<div class="tabn-stats" slot="stats">
		${(()=>{if(e){let{pageNumber:t,pageSize:i}=e,a=i??r.length;return[((t??1)-1)*a+n+1,r.length<a?e.totalAvailable:(t??1)*a].join(`-`)}let t=o.index,i=o.items?.length;return[i!==r.length&&[`queue`,`split`].includes(s||``)?[t<0?`?`:t+1,i].join(`/`):[n+1,r.length].join(`-`)]})()}
		${[D(`of`),a??D(`many`)].join(` `)}
	</div>`,ut=({animationEnd$:e,details:t,item:n,next:r,prev:i,renderItem:a,renderLoader:o})=>{let s=Z({next:r,prev:i});if(!t)return a({item:n,nav:s,next:r,prev:i,animationEnd$:e});let c=t(n);return A([c,e,r],()=>it(Promise.all([c,e]).then(([e])=>a({item:e,nav:s,next:r,prev:i})),o({item:n,nav:s})))},dt=({id:e,forward:t,item:n,...r})=>n?{id:e(n),render:e=>ut({...e,item:n,...r}),animation:t?G:Ze}:X(),ft=({header:e,heading:n,afterHeading:r,index:i,tabnav:a,items:o,totalAvailable:s,nav:c,list:l,renderLoader:u,renderItem:d,details:f=c?.details,pagination:p,persistKey:m,splitAttrs:h})=>{let g=a.active?.name,_=p?{...p,totalAvailable:s}:void 0,v=t`
		<cosmoz-tabs-next class="tabn">
			<div class="tabn-heading" slot="tabs">${n}${r}</div>
			${ae({...a,className:`tabn-tab`})}
			${$({pagination:_,totalAvailable:s,index:i,items:o,nav:c,activeTab:g})}
			${Q(_)}
		</cosmoz-tabs-next>
	`;return t`
		<style>
			${st}
		</style>

		${O(e,e=>e({tabnav:a,heading:n,afterHeading:r,totalAvailable:s}),()=>v)}

		<cosmoz-resizable-view
			data-active=${g}
			direction="horizontal"
			persist=${E(m)}
			initial-size=${h?.initialSize??`50%`}
			min-size=${h?.minSize??`100`}
		>
			${l}
			<cosmoz-slider
				id="queue"
				slot="next"
				.slide=${O(g!==`overview`,()=>dt({...c,renderLoader:u,renderItem:d,details:f}),X)}
			></cosmoz-slider>
		</cosmoz-resizable-view>
	`}}));export{$ as a,De as c,ft as i,Z as n,Y as o,Q as r,ct as s,pt as t};