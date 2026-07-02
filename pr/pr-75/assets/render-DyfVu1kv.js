import{t as e}from"./chunk-BvrOYcoh.js";import{a as t,o as n,r,t as i}from"./lit-html-BZ3vufxv.js";import{a,c as o,i as s,n as c,r as l,s as u,t as d}from"./iframe-eOQ0wXTj.js";import{_ as f,a as p,c as m,d as h,f as g,i as _,l as v,m as y,n as b,o as x,p as S,r as C,s as w,t as T,u as E,v as D}from"./haunted-BG3T9kq-.js";var O,k=e((()=>{T(),O=D(f`
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
`)})),A,j=e((()=>{T(),A=f`
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
`})),M,N=e((()=>{j(),T(),M=f`
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

		/* Medium (md) - default size */
		height: 40px;
		padding: calc(var(--cz-spacing) * 2.5) calc(var(--cz-spacing) * 4);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		border-radius: var(--cz-radius-md);

		/* Primary - default variant */
		${A}
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
`})),P,F,ee=e((()=>{k(),T(),N(),P=[`variant`,`size`,`disabled`,`full-width`,`type`,`value`],F=e=>{let n=e.hasAttribute(`disabled`),r=e.getAttribute(`type`)||`button`;return y(()=>{let t=t=>{e.hasAttribute(`disabled`)&&t.stopImmediatePropagation()};return e.addEventListener(`click`,t,{capture:!0}),()=>e.removeEventListener(`click`,t,{capture:!0})},[]),t`
		<button type=${r} class="button" ?disabled=${n} part="button">
			<slot name="prefix"></slot>
			<slot></slot>
			<slot name="suffix"></slot>
		</button>
	`},customElements.define(`cosmoz-button`,b(F,{observedAttributes:P,styleSheets:[O,M],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})),te=e((()=>{ee()})),ne,re,ie=e((()=>{n(),w(),l(),ne=(e,t,n)=>{let r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},re=p(class extends x{constructor(e){if(super(e),e.type!==m.CHILD)throw Error(`repeat() can only be used in text expressions`)}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);let i=[],a=[],o=0;for(let t of e)i[o]=r?r(t,o):o,a[o]=n(t,o),o++;return{values:a,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,i]){let s=d(e),{values:l,keys:f}=this.dt(t,n,i);if(!Array.isArray(s))return this.ut=f,l;let p=this.ut??=[],m=[],h,g,_=0,v=s.length-1,y=0,b=l.length-1;for(;_<=v&&y<=b;)if(s[_]===null)_++;else if(s[v]===null)v--;else if(p[_]===f[y])m[y]=u(s[_],l[y]),_++,y++;else if(p[v]===f[b])m[b]=u(s[v],l[b]),v--,b--;else if(p[_]===f[b])m[b]=u(s[_],l[b]),o(e,m[b+1],s[_]),_++,b--;else if(p[v]===f[y])m[y]=u(s[v],l[y]),o(e,s[_],s[v]),v--,y++;else if(h===void 0&&(h=ne(f,y,b),g=ne(p,_,v)),h.has(p[_]))if(h.has(p[v])){let t=g.get(f[y]),n=t===void 0?null:s[t];if(n===null){let t=o(e,s[_]);u(t,l[y]),m[y]=t}else m[y]=u(n,l[y]),o(e,s[_],n),s[t]=null;y++}else c(s[v]),v--;else c(s[_]),_++;for(;y<=b;){let t=o(e,m[b+1]);u(t,l[y]),m[y++]=t}for(;_<=v;){let e=s[_++];e!==null&&c(e)}return this.ut=f,a(e,m),r}})})),ae,oe,se=e((()=>{n(),_(),w(),ae=new WeakMap,oe=p(class extends C{render(e){return i}update(e,[t]){let n=t!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),i}rt(e){if(this.G!==void 0)if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=ae.get(t);n===void 0&&(n=new WeakMap,ae.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G==`function`?ae.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})})),ce,le,ue,de=e((()=>{n(),w(),ce=`important`,le=` !`+ce,ue=p(class extends x{constructor(e){if(super(e),e.type!==m.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`},``)}update(e,[t]){let{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?n.removeProperty(e):n[e]=null);for(let e in t){let r=t[e];if(r!=null){this.ft.add(e);let t=typeof r==`string`&&r.endsWith(le);e.includes(`-`)||t?n.setProperty(e,t?r.slice(0,-11):r,t?ce:``):n[e]=r}}return r}})})),fe,pe,me=e((()=>{n(),w(),fe={},pe=p(class extends x{constructor(){super(...arguments),this.ot=fe}render(e,t){return t()}update(e,[t,n]){if(Array.isArray(t)){if(Array.isArray(this.ot)&&this.ot.length===t.length&&t.every((e,t)=>e===this.ot[t]))return r}else if(this.ot===t)return r;return this.ot=Array.isArray(t)?Array.from(t):t,this.render(t,n)}})})),he,ge=e((()=>{he=e=>e})),_e,ve=e((()=>{ge(),_e=class extends Promise{constructor(e){let t={};super((e,n)=>Object.assign(t,{resolve:e,reject:n})),Object.assign(this,t),e?.(t.resolve,t.reject)}resolve=()=>{}}})),ye,be,xe,Se,Ce=e((()=>{T(),ie(),se(),de(),me(),ve(),ye={host:{position:`relative`,display:`flex`,overflow:`hidden`},slide:{position:`static`,width:`100%`,height:`100%`}},be=e=>{let{slide:t}=e,[n,r]=E([]);return h(()=>void Object.assign(e.style,ye.host),[]),y(()=>{if(t==null)return;let e={animationEnd$:new _e,...t};r((t=[])=>{let n=t.findIndex(({id:t,out:n})=>t===e.id&&n!==!0);return n===-1?[...t,e]:[...t.slice(0,n),e,...t.slice(n+1,t.length)]})},[t]),h(async()=>{if(n.filter(e=>!e.out).length<2){let e=n[0];e&&requestAnimationFrame(()=>requestAnimationFrame(()=>e.animationEnd$.resolve()));return}let e=n[n.length-1],t=n[n.length-2],i=e.el,a=t.el;t.out=!0,i&&a&&await e.animation?.(i,a),r((e=[])=>e.filter(e=>e!==t))},[n]),{slides:n}},xe=e=>t`<div
		${oe(t=>Object.assign(e,{el:t}))}
		class="slide"
		style=${ue(ye.slide)}
	>
		${pe([e],()=>e.content??e.render?.(e))}
	</div>`,Se=({slides:e})=>pe([e],()=>re(e,({id:e})=>e,xe))})),we,Te=e((()=>{T(),Ce(),we=e=>Se(be(e)),customElements.define(`cosmoz-slider`,b(we,{useShadowDOM:!1}))})),Ee=e((()=>{})),De=e((()=>{T(),n()})),Oe=e((()=>{Te(),De(),Ee(),Ce()})),ke,Ae,I,L,je,Me,Ne=e((()=>{ke=e=>typeof e==`object`&&!!e&&e.nodeType===1,Ae=(e,t)=>(!t||e!==`hidden`)&&e!==`visible`&&e!==`clip`,I=(e,t)=>{if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){let n=getComputedStyle(e,null);return Ae(n.overflowY,t)||Ae(n.overflowX,t)||(e=>{let t=(e=>{if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch{return null}})(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)})(e)}return!1},L=(e,t,n,r,i,a,o,s)=>a<e&&o>t||a>e&&o<t?0:a<=e&&s<=n||o>=t&&s>=n?a-e-r:o>t&&s<n||a<e&&s>n?o-t+i:0,je=e=>e.parentElement??(e.getRootNode().host||null),Me=(e,t)=>{if(typeof document>`u`)return[];let{scrollMode:n,block:r,inline:i,boundary:a,skipOverflowHiddenElements:o}=t,s=typeof a==`function`?a:e=>e!==a;if(!ke(e))throw TypeError(`Invalid target`);let c=document.scrollingElement||document.documentElement,l=[],u=e;for(;ke(u)&&s(u);){if(u=je(u),u===c){l.push(u);break}u!=null&&u===document.body&&I(u)&&!I(document.documentElement)||u!=null&&I(u,o)&&l.push(u)}let d=window.visualViewport?.width??innerWidth,f=window.visualViewport?.height??innerHeight,{scrollX:p,scrollY:m}=window,{height:h,width:g,top:_,right:v,bottom:y,left:b}=e.getBoundingClientRect(),{top:x,right:S,bottom:C,left:w}=(e=>{let t=window.getComputedStyle(e);return{top:parseFloat(t.scrollMarginTop)||0,right:parseFloat(t.scrollMarginRight)||0,bottom:parseFloat(t.scrollMarginBottom)||0,left:parseFloat(t.scrollMarginLeft)||0}})(e),T=r===`start`||r===`nearest`?_-x:r===`end`?y+C:_+h/2-x+C,E=i===`center`?b+g/2-w+S:i===`end`?v+S:b-w,D=[];for(let e=0;e<l.length;e++){let t=l[e],{height:a,width:o,top:s,right:u,bottom:x,left:S}=t.getBoundingClientRect();if(n===`if-needed`&&_>=0&&b>=0&&y<=f&&v<=d&&(t===c&&!I(t)||_>=s&&y<=x&&b>=S&&v<=u))return D;let C=getComputedStyle(t),w=parseInt(C.borderLeftWidth,10),O=parseInt(C.borderTopWidth,10),k=parseInt(C.borderRightWidth,10),A=parseInt(C.borderBottomWidth,10),j=0,M=0,N=`offsetWidth`in t?t.offsetWidth-t.clientWidth-w-k:0,P=`offsetHeight`in t?t.offsetHeight-t.clientHeight-O-A:0,F=`offsetWidth`in t?t.offsetWidth===0?0:o/t.offsetWidth:0,ee=`offsetHeight`in t?t.offsetHeight===0?0:a/t.offsetHeight:0;if(c===t)j=r===`start`?T:r===`end`?T-f:r===`nearest`?L(m,m+f,f,O,A,m+T,m+T+h,h):T-f/2,M=i===`start`?E:i===`center`?E-d/2:i===`end`?E-d:L(p,p+d,d,w,k,p+E,p+E+g,g),j=Math.max(0,j+m),M=Math.max(0,M+p);else{j=r===`start`?T-s-O:r===`end`?T-x+A+P:r===`nearest`?L(s,x,a,O,A+P,T,T+h,h):T-(s+a/2)+P/2,M=i===`start`?E-S-w:i===`center`?E-(S+o/2)+N/2:i===`end`?E-u+k+N:L(S,u,o,w,k+N,E,E+g,g);let{scrollLeft:e,scrollTop:n}=t;j=ee===0?0:Math.max(0,Math.min(n+j/ee,t.scrollHeight-a/ee+P)),M=F===0?0:Math.max(0,Math.min(e+M/F,t.scrollWidth-o/F+N)),T+=n-j,E+=e-M}D.push({el:t,top:j,left:M})}return D}})),Pe,Fe=e((()=>{n(),Pe=e=>e??i})),Ie,Le,Re,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe=e((()=>{T(),Ie=f`
	display: flex;
	align-items: stretch;
	gap: calc(var(--cz-spacing) * 3);
	font-family: var(--cz-font-body);
	font-size: var(--cz-text-sm);
	line-height: var(--cz-text-sm-line-height);
	font-weight: var(--cz-font-weight-semibold);
	box-shadow: inset 0 -1px 0 0 var(--cz-color-border-secondary);
	overflow-x: auto;
	scrollbar-width: none;
	-webkit-overflow-scrolling: auto;
`,Le=f`
	position: relative;
	display: inline-flex;
	box-sizing: border-box;
	align-items: center;
	justify-content: center;
	gap: calc(var(--cz-spacing) * 1);
	padding: 0 calc(var(--cz-spacing) * 0.5) calc(var(--cz-spacing) * 2.5);
	color: var(--cz-color-text-quaternary);
	text-decoration: none;
	white-space: nowrap;
	cursor: pointer;
	transition: color 0.1s linear, background-color 0.1s linear,
		box-shadow 0.1s linear;
	outline: 0;
`,Re=f`
	outline: 2px solid var(--cz-color-fg-brand);
	outline-offset: -2px;
`,ze=f`
	opacity: 0.5;
	cursor: not-allowed;
	pointer-events: none;
`,Be=f`
	color: var(--cz-color-text-brand);
	box-shadow: inset 0 -2px 0 0 var(--cz-color-fg-brand);
`,Ve=f`
	width: 16px;
	height: 16px;
	flex-shrink: 0;
	color: var(--cz-color-fg-quaternary);
`,He=f`
	color: var(--cz-color-fg-brand-secondary);
`,Ue=f`
	gap: calc(var(--cz-spacing) * 1);
	box-shadow: none;
`,We=f`
	padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 2.5);
	border-radius: var(--cz-radius-md);
`,Ge=f`
	color: var(--cz-color-text-on-brand);
	background-color: var(--cz-color-bg-brand-solid);
	box-shadow: none;
`,Ke=f`
	flex: 1 1 0;
`,qe=f`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	font-size: var(--cz-text-xs);
	font-weight: var(--cz-font-weight-medium);
	line-height: var(--cz-text-xs-line-height);
	border-radius: var(--cz-radius-full);
	padding: 0 calc(var(--cz-spacing) * 2);
	min-width: calc(var(--cz-spacing) * 5);
	max-width: 80px;
	overflow: hidden;
	text-overflow: ellipsis;
	background-color: var(--cz-color-bg-brand-solid);
	color: var(--cz-color-text-on-brand);
	text-align: center;
`,f`
	:host {
		position: relative;
		display: flex;
		flex-direction: column;
		font-family: var(--cz-font-body);
	}

	:host([hidden]) {
		display: none;
	}

	.tabs {
		${Ie}
		flex: none;
	}

	.tabs::-webkit-scrollbar {
		display: none;
	}

	.tab {
		${Le}
		${Ke}
	}

	.tab svg {
		${Ve}
	}

	.tab:hover,
	.tab[aria-selected="true"] {
		${Be}
	}

	.tab:hover svg,
	.tab[aria-selected="true"] svg {
		${He}
	}

	.tab:focus-visible {
		${Re}
	}

	.tab[disabled] {
		${ze}
	}

	.tab[hidden] {
		display: none !important;
	}

	.badge {
		${qe}
	}

	#content {
		display: flex;
		flex-direction: column;
		flex: auto;
	}

	#content ::slotted(:not(slot):not([is-selected])) {
		display: none !important;
	}

	:host([variant="brand"]) .tabs {
		${Ue}
	}

	:host([variant="brand"]) .tab {
		${We}
	}

	:host([variant="brand"]) .tab:hover,
	:host([variant="brand"]) .tab[aria-selected="true"] {
		${Ge}
	}

	:host([variant="brand"]) .tab:hover svg,
	:host([variant="brand"]) .tab[aria-selected="true"] svg {
		color: var(--cz-color-text-on-brand);
	}

	:host([compact-width]) .tab {
		flex: 0 1 auto;
	}

	:host(:not([compact-width]):not([variant="brand"])) .tabs {
		gap: calc(var(--cz-spacing) * 4);
	}
`,Je=f`
	:host {
		${Ie}
		flex: none;
	}

	:host::-webkit-scrollbar {
		display: none;
	}

	:host([variant="brand"]) {
		${Ue}
	}

	:host(:not([compact-width]):not([variant="brand"])) {
		gap: calc(var(--cz-spacing) * 4);
	}
`,Ye=f`
	:host {
		${Le}
		${Ke}
	}

	:host(:hover),
	:host([active]) {
		${Be}
	}

	:host(:focus-visible) {
		${Re}
	}

	:host([disabled]) {
		${ze}
	}

	:host([hidden]) {
		display: none !important;
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
		${Ve}
	}

	:host(:hover) #iconSlot::slotted(svg),
	:host([active]) #iconSlot::slotted(svg) {
		${He}
	}

	#contentSlot::slotted(*) {
		flex: auto;
	}

	.badge {
		${qe}
	}

	:host([variant="brand"]) {
		${We}
	}

	:host([variant="brand"]:hover),
	:host([variant="brand"][active]) {
		${Ge}
	}

	:host([variant="brand"]:hover) #iconSlot::slotted(svg),
	:host([variant="brand"][active]) #iconSlot::slotted(svg) {
		color: var(--cz-color-text-on-brand);
	}

	:host([compact-width]) {
		flex: 0 1 auto;
	}
`})),Ze,Qe=e((()=>{k(),T(),Ne(),n(),Fe(),Xe(),Ze=e=>{let{active:n,badge:r,href:a}=e;return y(()=>{e.getAttribute(`tabindex`)||e.setAttribute(`tabindex`,`-1`),e.setAttribute(`role`,`tab`)},[]),h(()=>{e.setAttribute(`aria-selected`,n?`true`:`false`),n&&Me(e,{block:`nearest`,inline:`center`,boundary:e.parentElement}).forEach(({el:e,top:t,left:n})=>e.scroll({top:t,left:n,behavior:`smooth`}))},[n]),t`
		<a part="link" href=${Pe(a)}>
			<slot id="iconSlot" name="icon"></slot>
			<slot id="contentSlot"></slot>
			${r?t`<span class="badge" part="badge">${r}</span>`:i}
		</a>
	`},customElements.define(`cosmoz-tab-next`,b(Ze,{observedAttributes:[`active`,`badge`,`href`],styleSheets:[O,Ye]}))})),$e,et,tt=e((()=>{k(),T(),Xe(),$e=(e,t,n)=>{n==null?e.removeAttribute(t):e.setAttribute(t,n)},et=e=>{e.getAttribute(`variant`)||e.setAttribute(`variant`,`brand`);let n=e.getAttribute(`variant`),r=e.hasAttribute(`compact-width`)?``:null,i=()=>e.querySelectorAll(`cosmoz-tab-next`).forEach(e=>{$e(e,`variant`,n),$e(e,`compact-width`,r)});return y(()=>{e.setAttribute(`role`,`tablist`)},[]),y(i),t`<slot @slotchange=${i}></slot>`},customElements.define(`cosmoz-tabs-next`,b(et,{observedAttributes:[`variant`,`compact-width`],styleSheets:[O,Je]}))})),nt,rt,it,at,ot=e((()=>{T(),nt=()=>new URL(location.hash.replace(/^#!?/iu,``).replace(`%23`,`#`),location.origin),rt=e=>e?()=>new URLSearchParams(nt().hash.replace(`#`,``)).get(e):void 0,it=(e,t)=>{if(!e)return;let n=nt(),r=new URLSearchParams(n.hash.replace(`#`,``));return t==null?r.delete(e):r.set(e,t),`#!`+Object.assign(n,{hash:r}).href.replace(location.origin,``)},at=e=>{let t=S(()=>rt(e),[e]),[n,r]=E(t),i=v(n);return y(()=>void(i.current=n),[n]),y(()=>{if(t==null)return;let e=()=>{let e=t();i.current!==e&&r(e)};return e(),window.addEventListener(`popstate`,e),window.addEventListener(`hashchange`,e),()=>{window.removeEventListener(`popstate`,e),window.removeEventListener(`hashchange`,e)}},[t]),[n,S(()=>e?t=>{r(t),history.pushState({},``,it(e,t))}:r,[e])]}})),st,ct,lt,ut,dt=e((()=>{ot(),ge(),T(),Fe(),st=e=>!e.hidden&&!e.disabled,ct=e=>e.slice().sort((e,t)=>Number(t.fallback??!1)-Number(e.fallback??!1)).find(st),lt=(e,t)=>{let n=t?e.find(e=>e.name===t):void 0;return n&&st(n)?n:ct(e)},ut=(e,{hashParam:t,onActivate:n}={})=>{let[r,i]=at(t),a=v([]),o=S(()=>lt(e,r??void 0),[e,r]);return{tabs:e,active:o,activated:S(()=>{let e=o?.name;return a.current=[...(a.current??[]).filter(t=>t!==e),e].filter(Boolean)},[o]),activate:i,onActivate:g(e=>{let t=e;if(t.button!==0||t.metaKey||t.ctrlKey)return;let r=e.currentTarget?.getAttribute(`name`);r&&(n?.(r),i(r))},[i,n])}}})),ft=e((()=>{Qe(),tt(),dt()})),pt,mt,ht,gt,_t,vt=e((()=>{n(),_(),l(),w(),pt=class{_ref;constructor(e){this._ref=e}disconnect(){this._ref=void 0}reconnect(e){this._ref=e}deref(){return this._ref}},mt=class{_promise=void 0;_resolve=void 0;get(){return this._promise}pause(){this._promise??=new Promise(e=>this._resolve=e)}resume(){this._resolve?.(),this._promise=this._resolve=void 0}},ht=e=>!s(e)&&typeof e.then==`function`,gt=1073741823,_t=class extends C{__lastRenderedIndex=gt;__values=[];__weakThis=new pt(this);__pauser=new mt;render(...e){return e.find(e=>!ht(e))??r}update(e,t){let n=this.__values,i=n.length;this.__values=t;let a=this.__weakThis,o=this.__pauser;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this.__lastRenderedIndex);e++){let r=t[e];if(!ht(r))return this.__lastRenderedIndex=e,r;e<i&&r===n[e]||Promise.resolve(r).then(async e=>{for(;o.get();)await o.get();let t=a.deref();if(t!==void 0){let n=t.__values.indexOf(r);n>-1&&n<=t.__lastRenderedIndex&&(t.__lastRenderedIndex=n,t.setValue(e))}})}return r}disconnected(){this.__weakThis.disconnect(),this.__pauser.pause()}reconnected(){this.__weakThis.reconnect(this),this.__pauser.resume()}},p(_t)}));function yt(){let e=[],t=Object.create(null),n;return t.get=(r,i)=>(n?.revoke?.(),i===zt?e:(e.push(i),n=Proxy.revocable(r,t),n.proxy)),Proxy.revocable(Object.create(null),t).proxy}function R(e,t){let{[zt]:n}=e(yt()),r=t?.keySeparator??`.`,i=t?.nsSeparator??`:`;if(n.length>1&&i){let e=t?.ns,a=Array.isArray(e)?e:null;if(a&&a.length>1&&a.slice(1).includes(n[0]))return`${n[0]}${i}${n.slice(1).join(r)}`}return n.join(r)}var z,B,bt,xt,St,Ct,wt,V,Tt,Et,H,Dt,Ot,U,kt,At,jt,Mt,Nt,Pt,W,G,Ft,It,K,q,Lt,Rt,zt,J,Bt,Vt,Ht,Ut,Wt,Gt,Y,Kt,qt,Jt,Yt,Xt,Zt,Qt,$t,en,X,tn,nn,Z,Q,rn=e((()=>{z=e=>typeof e==`string`,B=()=>{let e,t,n=new Promise((n,r)=>{e=n,t=r});return n.resolve=e,n.reject=t,n},bt=e=>e==null?``:String(e),xt=(e,t,n)=>{e.forEach(e=>{t[e]&&(n[e]=t[e])})},St=/###/g,Ct=e=>e&&e.includes(`###`)?e.replace(St,`.`):e,wt=e=>!e||z(e),V=(e,t,n)=>{let r=z(t)?t.split(`.`):t,i=0;for(;i<r.length-1;){if(wt(e))return{};let t=Ct(r[i]);!e[t]&&n&&(e[t]=new n),e=Object.prototype.hasOwnProperty.call(e,t)?e[t]:{},++i}return wt(e)?{}:{obj:e,k:Ct(r[i])}},Tt=(e,t,n)=>{let{obj:r,k:i}=V(e,t,Object);if(r!==void 0||t.length===1){r[i]=n;return}let a=t[t.length-1],o=t.slice(0,t.length-1),s=V(e,o,Object);for(;s.obj===void 0&&o.length;)a=`${o[o.length-1]}.${a}`,o=o.slice(0,o.length-1),s=V(e,o,Object),s?.obj&&s.obj[`${s.k}.${a}`]!==void 0&&(s.obj=void 0);s.obj[`${s.k}.${a}`]=n},Et=(e,t,n,r)=>{let{obj:i,k:a}=V(e,t,Object);i[a]=i[a]||[],i[a].push(n)},H=(e,t)=>{let{obj:n,k:r}=V(e,t);if(n&&Object.prototype.hasOwnProperty.call(n,r))return n[r]},Dt=(e,t,n)=>{let r=H(e,n);return r===void 0?H(t,n):r},Ot=(e,t,n)=>{for(let r in t)r!==`__proto__`&&r!==`constructor`&&(r in e?z(e[r])||e[r]instanceof String||z(t[r])||t[r]instanceof String?n&&(e[r]=t[r]):Ot(e[r],t[r],n):e[r]=t[r]);return e},U=e=>e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,`\\$&`),kt={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`,"/":`&#x2F;`},At=e=>z(e)?e.replace(/[&<>"'\/]/g,e=>kt[e]):e,jt=class{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){let t=this.regExpMap.get(e);if(t!==void 0)return t;let n=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,n),this.regExpQueue.push(e),n}},Mt=[` `,`,`,`?`,`!`,`;`],Nt=new jt(20),Pt=(e,t,n)=>{t||=``,n||=``;let r=Mt.filter(e=>!t.includes(e)&&!n.includes(e));if(r.length===0)return!0;let i=Nt.getRegExp(`(${r.map(e=>e===`?`?`\\?`:e).join(`|`)})`),a=!i.test(e);if(!a){let t=e.indexOf(n);t>0&&!i.test(e.substring(0,t))&&(a=!0)}return a},W=(e,t,n=`.`)=>{if(!e)return;if(e[t])return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0;let r=t.split(n),i=e;for(let e=0;e<r.length;){if(!i||typeof i!=`object`)return;let t,a=``;for(let o=e;o<r.length;++o)if(o!==e&&(a+=n),a+=r[o],t=i[a],t!==void 0){if([`string`,`number`,`boolean`].includes(typeof t)&&o<r.length-1)continue;e+=o-e+1;break}i=t}return i},G=e=>e?.replace(/_/g,`-`),Ft={type:`logger`,log(e){this.output(`log`,e)},warn(e){this.output(`warn`,e)},error(e){this.output(`error`,e)},output(e,t){console?.[e]?.apply?.(console,t)}},It=class e{constructor(e,t={}){this.init(e,t)}init(e,t={}){this.prefix=t.prefix||`i18next:`,this.logger=e||Ft,this.options=t,this.debug=t.debug}log(...e){return this.forward(e,`log`,``,!0)}warn(...e){return this.forward(e,`warn`,``,!0)}error(...e){return this.forward(e,`error`,``)}deprecate(...e){return this.forward(e,`warn`,`WARNING DEPRECATED: `,!0)}forward(e,t,n,r){return r&&!this.debug?null:(e=e.map(e=>z(e)?e.replace(/[\r\n\x00-\x1F\x7F]/g,` `):e),z(e[0])&&(e[0]=`${n}${this.prefix} ${e[0]}`),this.logger[t](e))}create(t){return new e(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return t||=this.options,t.prefix=t.prefix||this.prefix,new e(this.logger,t)}},K=new It,q=class{constructor(){this.observers={}}on(e,t){return e.split(` `).forEach(e=>{this.observers[e]||(this.observers[e]=new Map);let n=this.observers[e].get(t)||0;this.observers[e].set(t,n+1)}),this}off(e,t){if(this.observers[e]){if(!t){delete this.observers[e];return}this.observers[e].delete(t)}}once(e,t){let n=(...r)=>{t(...r),this.off(e,n)};return this.on(e,n),this}emit(e,...t){this.observers[e]&&Array.from(this.observers[e].entries()).forEach(([e,n])=>{for(let r=0;r<n;r++)e(...t)}),this.observers[`*`]&&Array.from(this.observers[`*`].entries()).forEach(([n,r])=>{for(let i=0;i<r;i++)n(e,...t)})}},Lt=class extends q{constructor(e,t={ns:[`translation`],defaultNS:`translation`}){super(),this.data=e||{},this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator=`.`),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.includes(e)||this.options.ns.push(e)}removeNamespaces(e){let t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,n,r={}){let i=r.keySeparator===void 0?this.options.keySeparator:r.keySeparator,a=r.ignoreJSONStructure===void 0?this.options.ignoreJSONStructure:r.ignoreJSONStructure,o;e.includes(`.`)?o=e.split(`.`):(o=[e,t],n&&(Array.isArray(n)?o.push(...n):z(n)&&i?o.push(...n.split(i)):o.push(n)));let s=H(this.data,o);return!s&&!t&&!n&&e.includes(`.`)&&(e=o[0],t=o[1],n=o.slice(2).join(`.`)),s||!a||!z(n)?s:W(this.data?.[e]?.[t],n,i)}addResource(e,t,n,r,i={silent:!1}){let a=i.keySeparator===void 0?this.options.keySeparator:i.keySeparator,o=[e,t];n&&(o=o.concat(a?n.split(a):n)),e.includes(`.`)&&(o=e.split(`.`),r=t,t=o[1]),this.addNamespaces(t),Tt(this.data,o,r),i.silent||this.emit(`added`,e,t,n,r)}addResources(e,t,n,r={silent:!1}){for(let r in n)(z(n[r])||Array.isArray(n[r]))&&this.addResource(e,t,r,n[r],{silent:!0});r.silent||this.emit(`added`,e,t,n)}addResourceBundle(e,t,n,r,i,a={silent:!1,skipCopy:!1}){let o=[e,t];e.includes(`.`)&&(o=e.split(`.`),r=n,n=t,t=o[1]),this.addNamespaces(t);let s=H(this.data,o)||{};a.skipCopy||(n=JSON.parse(JSON.stringify(n))),r?Ot(s,n,i):s={...s,...n},Tt(this.data,o,s),a.silent||this.emit(`added`,e,t,n)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit(`removed`,e,t)}hasResourceBundle(e,t){return this.getResource(e,t)!==void 0}getResourceBundle(e,t){return t||=this.options.defaultNS,this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){let t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(e=>t[e]&&Object.keys(t[e]).length>0)}toJSON(){return this.data}},Rt={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,n,r,i){return e.forEach(e=>{t=this.processors[e]?.process(t,n,r,i)??t}),t}},zt=Symbol(`i18next/PATH_KEY`),J=e=>!z(e)&&typeof e!=`boolean`&&typeof e!=`number`,Bt=class e extends q{constructor(e,t={}){super(),xt([`resourceStore`,`languageUtils`,`pluralResolver`,`interpolator`,`backendConnector`,`i18nFormat`,`utils`],e,this),this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator=`.`),this.logger=K.create(`translator`),this.checkedLoadedFor={}}changeLanguage(e){e&&(this.language=e)}exists(e,t={interpolation:{}}){let n={...t};if(e==null)return!1;let r=this.resolve(e,n);if(r?.res===void 0)return!1;let i=J(r.res);return!(n.returnObjects===!1&&i)}extractFromKey(e,t){let n=t.nsSeparator===void 0?this.options.nsSeparator:t.nsSeparator;n===void 0&&(n=`:`);let r=t.keySeparator===void 0?this.options.keySeparator:t.keySeparator,i=t.ns||this.options.defaultNS||[],a=n&&e.includes(n),o=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!Pt(e,n,r);if(a&&!o){let t=e.match(this.interpolator.nestingRegexp);if(t&&t.length>0)return{key:e,namespaces:z(i)?[i]:i};let a=e.split(n);(n!==r||n===r&&this.options.ns.includes(a[0]))&&(i=a.shift()),e=a.join(r)}return{key:e,namespaces:z(i)?[i]:i}}translate(t,n,r){let i=typeof n==`object`?{...n}:n;if(typeof i!=`object`&&this.options.overloadTranslationOptionHandler&&(i=this.options.overloadTranslationOptionHandler(arguments)),typeof i==`object`&&(i={...i}),i||={},t==null)return``;typeof t==`function`&&(t=R(t,{...this.options,...i})),Array.isArray(t)||(t=[String(t)]),t=t.map(e=>typeof e==`function`?R(e,{...this.options,...i}):String(e));let a=i.returnDetails===void 0?this.options.returnDetails:i.returnDetails,o=i.keySeparator===void 0?this.options.keySeparator:i.keySeparator,{key:s,namespaces:c}=this.extractFromKey(t[t.length-1],i),l=c[c.length-1],u=i.nsSeparator===void 0?this.options.nsSeparator:i.nsSeparator;u===void 0&&(u=`:`);let d=i.lng||this.language,f=i.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(d?.toLowerCase()===`cimode`)return f?a?{res:`${l}${u}${s}`,usedKey:s,exactUsedKey:s,usedLng:d,usedNS:l,usedParams:this.getUsedParamsDetails(i)}:`${l}${u}${s}`:a?{res:s,usedKey:s,exactUsedKey:s,usedLng:d,usedNS:l,usedParams:this.getUsedParamsDetails(i)}:s;let p=this.resolve(t,i),m=p?.res,h=p?.usedKey||s,g=p?.exactUsedKey||s,_=[`[object Number]`,`[object Function]`,`[object RegExp]`],v=i.joinArrays===void 0?this.options.joinArrays:i.joinArrays,y=!this.i18nFormat||this.i18nFormat.handleAsObject,b=i.count!==void 0&&!z(i.count),x=e.hasDefaultValue(i),S=b?this.pluralResolver.getSuffix(d,i.count,i):``,C=i.ordinal&&b?this.pluralResolver.getSuffix(d,i.count,{ordinal:!1}):``,w=b&&!i.ordinal&&i.count===0,T=w&&i[`defaultValue${this.options.pluralSeparator}zero`]||i[`defaultValue${S}`]||i[`defaultValue${C}`]||i.defaultValue,E=m;y&&!m&&x&&(E=T);let D=J(E),O=Object.prototype.toString.apply(E);if(y&&E&&D&&!_.includes(O)&&!(z(v)&&Array.isArray(E))){if(!i.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn(`accessing an object - but returnObjects options is not enabled!`);let e=this.options.returnedObjectHandler?this.options.returnedObjectHandler(h,E,{...i,ns:c}):`key '${s} (${this.language})' returned an object instead of string.`;return a?(p.res=e,p.usedParams=this.getUsedParamsDetails(i),p):e}if(o){let e=Array.isArray(E),t=e?[]:{},n=e?g:h;for(let e in E)if(Object.prototype.hasOwnProperty.call(E,e)){let r=`${n}${o}${e}`;x&&!m?t[e]=this.translate(r,{...i,defaultValue:J(T)?T[e]:void 0,joinArrays:!1,ns:c}):t[e]=this.translate(r,{...i,joinArrays:!1,ns:c}),t[e]===r&&(t[e]=E[e])}m=t}}else if(y&&z(v)&&Array.isArray(m))m=m.join(v),m&&=this.extendTranslation(m,t,i,r);else{let e=!1,n=!1;!this.isValidLookup(m)&&x&&(e=!0,m=T),this.isValidLookup(m)||(n=!0,m=s);let a=(i.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&n?void 0:m,c=x&&T!==m&&this.options.updateMissing;if(n||e||c){if(this.logger.log(c?`updateKey`:`missingKey`,d,l,b&&!c?`${s}${this.pluralResolver.getSuffix(d,i.count,i)}`:s,c?T:m),o){let e=this.resolve(s,{...i,keySeparator:!1});e&&e.res&&this.logger.warn(`Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.`)}let e=[],t=this.languageUtils.getFallbackCodes(this.options.fallbackLng,i.lng||this.language);if(this.options.saveMissingTo===`fallback`&&t&&t[0])for(let n=0;n<t.length;n++)e.push(t[n]);else this.options.saveMissingTo===`all`?e=this.languageUtils.toResolveHierarchy(i.lng||this.language):e.push(i.lng||this.language);let n=(e,t,n)=>{let r=x&&n!==m?n:a;this.options.missingKeyHandler?this.options.missingKeyHandler(e,l,t,r,c,i):this.backendConnector?.saveMissing&&this.backendConnector.saveMissing(e,l,t,r,c,i),this.emit(`missingKey`,e,l,t,m)};this.options.saveMissing&&(this.options.saveMissingPlurals&&b?e.forEach(e=>{let t=this.pluralResolver.getSuffixes(e,i);w&&i[`defaultValue${this.options.pluralSeparator}zero`]&&!t.includes(`${this.options.pluralSeparator}zero`)&&t.push(`${this.options.pluralSeparator}zero`),t.forEach(t=>{n([e],s+t,i[`defaultValue${t}`]||T)})}):n(e,s,T))}m=this.extendTranslation(m,t,i,p,r),n&&m===s&&this.options.appendNamespaceToMissingKey&&(m=`${l}${u}${s}`),(n||e)&&this.options.parseMissingKeyHandler&&(m=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}${u}${s}`:s,e?m:void 0,i))}return a?(p.res=m,p.usedParams=this.getUsedParamsDetails(i),p):m}extendTranslation(e,t,n,r,i){if(this.i18nFormat?.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...n},n.lng||this.language||r.usedLng,r.usedNS,r.usedKey,{resolved:r});else if(!n.skipInterpolation){n.interpolation&&this.interpolator.init({...n,interpolation:{...this.options.interpolation,...n.interpolation}});let a=z(e)&&(n?.interpolation?.skipOnVariables===void 0?this.options.interpolation.skipOnVariables:n.interpolation.skipOnVariables),o;if(a){let t=e.match(this.interpolator.nestingRegexp);o=t&&t.length}let s=n.replace&&!z(n.replace)?n.replace:n;if(this.options.interpolation.defaultVariables&&(s={...this.options.interpolation.defaultVariables,...s}),e=this.interpolator.interpolate(e,s,n.lng||this.language||r.usedLng,n),a){let t=e.match(this.interpolator.nestingRegexp),r=t&&t.length;o<r&&(n.nest=!1)}!n.lng&&r&&r.res&&(n.lng=this.language||r.usedLng),n.nest!==!1&&(e=this.interpolator.nest(e,(...e)=>i?.[0]===e[0]&&!n.context?(this.logger.warn(`It seems you are nesting recursively key: ${e[0]} in key: ${t[0]}`),null):this.translate(...e,t),n)),n.interpolation&&this.interpolator.reset()}let a=n.postProcess||this.options.postProcess,o=z(a)?[a]:a;return e!=null&&o?.length&&n.applyPostProcessor!==!1&&(e=Rt.handle(o,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...r,usedParams:this.getUsedParamsDetails(n)},...n}:n,this)),e}resolve(e,t={}){let n,r,i,a,o;return z(e)&&(e=[e]),Array.isArray(e)&&(e=e.map(e=>typeof e==`function`?R(e,{...this.options,...t}):e)),e.forEach(e=>{if(this.isValidLookup(n))return;let s=this.extractFromKey(e,t),c=s.key;r=c;let l=s.namespaces;this.options.fallbackNS&&(l=l.concat(this.options.fallbackNS));let u=t.count!==void 0&&!z(t.count),d=u&&!t.ordinal&&t.count===0,f=t.context!==void 0&&(z(t.context)||typeof t.context==`number`)&&t.context!==``,p=t.lngs?t.lngs:this.languageUtils.toResolveHierarchy(t.lng||this.language,t.fallbackLng);l.forEach(e=>{this.isValidLookup(n)||(o=e,!this.checkedLoadedFor[`${p[0]}-${e}`]&&this.utils?.hasLoadedNamespace&&!this.utils?.hasLoadedNamespace(o)&&(this.checkedLoadedFor[`${p[0]}-${e}`]=!0,this.logger.warn(`key "${r}" for languages "${p.join(`, `)}" won't get resolved as namespace "${o}" was not yet loaded`,`This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!`)),p.forEach(r=>{if(this.isValidLookup(n))return;a=r;let o=[c];if(this.i18nFormat?.addLookupKeys)this.i18nFormat.addLookupKeys(o,c,r,e,t);else{let e;u&&(e=this.pluralResolver.getSuffix(r,t.count,t));let n=`${this.options.pluralSeparator}zero`,i=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(u&&(t.ordinal&&e.startsWith(i)&&o.push(c+e.replace(i,this.options.pluralSeparator)),o.push(c+e),d&&o.push(c+n)),f){let r=`${c}${this.options.contextSeparator||`_`}${t.context}`;o.push(r),u&&(t.ordinal&&e.startsWith(i)&&o.push(r+e.replace(i,this.options.pluralSeparator)),o.push(r+e),d&&o.push(r+n))}}let s;for(;s=o.pop();)this.isValidLookup(n)||(i=s,n=this.getResource(r,e,s,t))}))})}),{res:n,usedKey:r,exactUsedKey:i,usedLng:a,usedNS:o}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e===``)}getResource(e,t,n,r={}){return this.i18nFormat?.getResource?this.i18nFormat.getResource(e,t,n,r):this.resourceStore.getResource(e,t,n,r)}getUsedParamsDetails(e={}){let t=[`defaultValue`,`ordinal`,`context`,`replace`,`lng`,`lngs`,`fallbackLng`,`ns`,`keySeparator`,`nsSeparator`,`returnObjects`,`returnDetails`,`joinArrays`,`postProcess`,`interpolation`],n=e.replace&&!z(e.replace),r=n?e.replace:e;if(n&&e.count!==void 0&&(r.count=e.count),this.options.interpolation.defaultVariables&&(r={...this.options.interpolation.defaultVariables,...r}),!n){r={...r};for(let e of t)delete r[e]}return r}static hasDefaultValue(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&t.startsWith(`defaultValue`)&&e[t]!==void 0)return!0;return!1}},Vt=class{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=K.create(`languageUtils`)}getScriptPartFromCode(e){if(e=G(e),!e||!e.includes(`-`))return null;let t=e.split(`-`);return t.length===2||(t.pop(),t[t.length-1].toLowerCase()===`x`)?null:this.formatLanguageCode(t.join(`-`))}getLanguagePartFromCode(e){if(e=G(e),!e||!e.includes(`-`))return e;let t=e.split(`-`);return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(z(e)&&e.includes(`-`)){let t;try{t=Intl.getCanonicalLocales(e)[0]}catch{}return t&&this.options.lowerCaseLng&&(t=t.toLowerCase()),t||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load===`languageOnly`||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.includes(e)}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(e=>{if(t)return;let n=this.formatLanguageCode(e);(!this.options.supportedLngs||this.isSupportedCode(n))&&(t=n)}),!t&&this.options.supportedLngs&&e.forEach(e=>{if(t)return;let n=this.getScriptPartFromCode(e);if(this.isSupportedCode(n))return t=n;let r=this.getLanguagePartFromCode(e);if(this.isSupportedCode(r))return t=r;t=this.options.supportedLngs.find(e=>e===r?!0:!e.includes(`-`)&&!r.includes(`-`)?!1:!!(e.includes(`-`)&&!r.includes(`-`)&&e.slice(0,e.indexOf(`-`))===r||e.startsWith(r)&&r.length>1))}),t||=this.getFallbackCodes(this.options.fallbackLng)[0],t}getFallbackCodes(e,t){if(!e)return[];if(typeof e==`function`&&(e=e(t)),z(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let n=e[t];return n||=e[this.getScriptPartFromCode(t)],n||=e[this.formatLanguageCode(t)],n||=e[this.getLanguagePartFromCode(t)],n||=e.default,n||[]}toResolveHierarchy(e,t){let n=this.getFallbackCodes((t===!1?[]:t)||this.options.fallbackLng||[],e),r=[],i=e=>{e&&(this.isSupportedCode(e)?r.push(e):this.logger.warn(`rejecting language code not found in supportedLngs: ${e}`))};return z(e)&&(e.includes(`-`)||e.includes(`_`))?(this.options.load!==`languageOnly`&&i(this.formatLanguageCode(e)),this.options.load!==`languageOnly`&&this.options.load!==`currentOnly`&&i(this.getScriptPartFromCode(e)),this.options.load!==`currentOnly`&&i(this.getLanguagePartFromCode(e))):z(e)&&i(this.formatLanguageCode(e)),n.forEach(e=>{r.includes(e)||i(this.formatLanguageCode(e))}),r}},Ht={zero:0,one:1,two:2,few:3,many:4,other:5},Ut={select:e=>e===1?`one`:`other`,resolvedOptions:()=>({pluralCategories:[`one`,`other`]})},Wt=class{constructor(e,t={}){this.languageUtils=e,this.options=t,this.logger=K.create(`pluralResolver`),this.pluralRulesCache={}}clearCache(){this.pluralRulesCache={}}getRule(e,t={}){let n=G(e===`dev`?`en`:e),r=t.ordinal?`ordinal`:`cardinal`,i=JSON.stringify({cleanedCode:n,type:r});if(i in this.pluralRulesCache)return this.pluralRulesCache[i];let a;try{a=new Intl.PluralRules(n,{type:r})}catch{if(typeof Intl>`u`)return this.logger.error(`No Intl support, please use an Intl polyfill!`),Ut;if(!e.match(/-|_/))return Ut;let n=this.languageUtils.getLanguagePartFromCode(e);a=this.getRule(n,t)}return this.pluralRulesCache[i]=a,a}needsPlural(e,t={}){let n=this.getRule(e,t);return n||=this.getRule(`dev`,t),n?.resolvedOptions().pluralCategories.length>1}getPluralFormsOfKey(e,t,n={}){return this.getSuffixes(e,n).map(e=>`${t}${e}`)}getSuffixes(e,t={}){let n=this.getRule(e,t);return n||=this.getRule(`dev`,t),n?n.resolvedOptions().pluralCategories.sort((e,t)=>Ht[e]-Ht[t]).map(e=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:``}${e}`):[]}getSuffix(e,t,n={}){let r=this.getRule(e,n);return r?`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:``}${r.select(t)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix(`dev`,t,n))}},Gt=(e,t,n,r=`.`,i=!0)=>{let a=Dt(e,t,n);return!a&&i&&z(n)&&(a=W(e,n,r),a===void 0&&(a=W(t,n,r))),a},Y=e=>e.replace(/\$/g,`$$$$`),Kt=class{constructor(e={}){this.logger=K.create(`interpolator`),this.options=e,this.format=e?.interpolation?.format||(e=>e),this.init(e)}init(e={}){e.interpolation||={escapeValue:!0};let{escape:t,escapeValue:n,useRawValueToEscape:r,prefix:i,prefixEscaped:a,suffix:o,suffixEscaped:s,formatSeparator:c,unescapeSuffix:l,unescapePrefix:u,nestingPrefix:d,nestingPrefixEscaped:f,nestingSuffix:p,nestingSuffixEscaped:m,nestingOptionsSeparator:h,maxReplaces:g,alwaysFormat:_}=e.interpolation;this.escape=t===void 0?At:t,this.escapeValue=n===void 0?!0:n,this.useRawValueToEscape=r===void 0?!1:r,this.prefix=i?U(i):a||`{{`,this.suffix=o?U(o):s||`}}`,this.formatSeparator=c||`,`,this.unescapePrefix=l?``:u?U(u):`-`,this.unescapeSuffix=this.unescapePrefix?``:l?U(l):``,this.nestingPrefix=d?U(d):f||U(`$t(`),this.nestingSuffix=p?U(p):m||U(`)`),this.nestingOptionsSeparator=h||`,`,this.maxReplaces=g||1e3,this.alwaysFormat=_===void 0?!1:_,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){let e=(e,t)=>e?.source===t?(e.lastIndex=0,e):new RegExp(t,`g`);this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)}interpolate(e,t,n,r){let i,a,o,s=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=e=>{if(!e.includes(this.formatSeparator)){let i=Gt(t,s,e,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(i,void 0,n,{...r,...t,interpolationkey:e}):i}let i=e.split(this.formatSeparator),a=i.shift().trim(),o=i.join(this.formatSeparator).trim();return this.format(Gt(t,s,a,this.options.keySeparator,this.options.ignoreJSONStructure),o,n,{...r,...t,interpolationkey:a})};this.resetRegExp(),!this.escapeValue&&typeof e==`string`&&/\$t\([^)]*\{[^}]*\{\{/.test(e)&&this.logger.warn(`nesting options string contains interpolated variables with escapeValue: false — if any of those values are attacker-controlled they can inject additional nesting options (e.g. redirect lng/ns). Sanitise untrusted input before passing it to t(), or keep escapeValue: true.`);let l=r?.missingInterpolationHandler||this.options.missingInterpolationHandler,u=r?.interpolation?.skipOnVariables===void 0?this.options.interpolation.skipOnVariables:r.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:e=>Y(e)},{regex:this.regexp,safeValue:e=>this.escapeValue?Y(this.escape(e)):Y(e)}].forEach(t=>{for(o=0;i=t.regex.exec(e);){let n=i[1].trim();if(a=c(n),a===void 0)if(typeof l==`function`){let t=l(e,i,r);a=z(t)?t:``}else if(r&&Object.prototype.hasOwnProperty.call(r,n))a=``;else if(u){a=i[0];continue}else this.logger.warn(`missed to pass in variable ${n} for interpolating ${e}`),a=``;else !z(a)&&!this.useRawValueToEscape&&(a=bt(a));let s=t.safeValue(a);if(e=e.replace(i[0],s),u?(t.regex.lastIndex+=a.length,t.regex.lastIndex-=i[0].length):t.regex.lastIndex=0,o++,o>=this.maxReplaces)break}}),e}nest(e,t,n={}){let r,i,a,o=(e,t)=>{let n=this.nestingOptionsSeparator;if(!e.includes(n))return e;let r=e.split(RegExp(`${U(n)}[ ]*{`)),i=`{${r[1]}`;e=r[0],i=this.interpolate(i,a);let o=i.match(/'/g),s=i.match(/"/g);((o?.length??0)%2==0&&!s||(s?.length??0)%2!=0)&&(i=i.replace(/'/g,`"`));try{a=JSON.parse(i),t&&(a={...t,...a})}catch(t){return this.logger.warn(`failed parsing options string in nesting for key ${e}`,t),`${e}${n}${i}`}return a.defaultValue&&a.defaultValue.includes(this.prefix)&&delete a.defaultValue,e};for(;r=this.nestingRegexp.exec(e);){let s=[];a={...n},a=a.replace&&!z(a.replace)?a.replace:a,a.applyPostProcessor=!1,delete a.defaultValue;let c=/{.*}/.test(r[1])?r[1].lastIndexOf(`}`)+1:r[1].indexOf(this.formatSeparator);if(c!==-1&&(s=r[1].slice(c).split(this.formatSeparator).map(e=>e.trim()).filter(Boolean),r[1]=r[1].slice(0,c)),i=t(o.call(this,r[1].trim(),a),a),i&&r[0]===e&&!z(i))return i;z(i)||(i=bt(i)),i||=(this.logger.warn(`missed to resolve ${r[1]} for nesting ${e}`),``),s.length&&(i=s.reduce((e,t)=>this.format(e,t,n.lng,{...n,interpolationkey:r[1].trim()}),i.trim())),e=e.replace(r[0],i),this.regexp.lastIndex=0}return e}},qt=e=>{let t=e.toLowerCase().trim(),n={};if(e.includes(`(`)){let r=e.split(`(`);t=r[0].toLowerCase().trim();let i=r[1].slice(0,-1);t===`currency`&&!i.includes(`:`)?n.currency||=i.trim():t===`relativetime`&&!i.includes(`:`)?n.range||=i.trim():i.split(`;`).forEach(e=>{if(e){let[t,...r]=e.split(`:`),i=r.join(`:`).trim().replace(/^'+|'+$/g,``),a=t.trim();n[a]||(n[a]=i),i===`false`&&(n[a]=!1),i===`true`&&(n[a]=!0),isNaN(i)||(n[a]=parseInt(i,10))}})}return{formatName:t,formatOptions:n}},Jt=e=>{let t={};return(n,r,i)=>{let a=i;i&&i.interpolationkey&&i.formatParams&&i.formatParams[i.interpolationkey]&&i[i.interpolationkey]&&(a={...a,[i.interpolationkey]:void 0});let o=r+JSON.stringify(a),s=t[o];return s||(s=e(G(r),i),t[o]=s),s(n)}},Yt=e=>(t,n,r)=>e(G(n),r)(t),Xt=class{constructor(e={}){this.logger=K.create(`formatter`),this.options=e,this.init(e)}init(e,t={interpolation:{}}){this.formatSeparator=t.interpolation.formatSeparator||`,`;let n=t.cacheInBuiltFormats?Jt:Yt;this.formats={number:n((e,t)=>{let n=new Intl.NumberFormat(e,{...t});return e=>n.format(e)}),currency:n((e,t)=>{let n=new Intl.NumberFormat(e,{...t,style:`currency`});return e=>n.format(e)}),datetime:n((e,t)=>{let n=new Intl.DateTimeFormat(e,{...t});return e=>n.format(e)}),relativetime:n((e,t)=>{let n=new Intl.RelativeTimeFormat(e,{...t});return e=>n.format(e,t.range||`day`)}),list:n((e,t)=>{let n=new Intl.ListFormat(e,{...t});return e=>n.format(e)})}}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=Jt(t)}format(e,t,n,r={}){if(!t||e==null)return e;let i=t.split(this.formatSeparator);if(i.length>1&&i[0].indexOf(`(`)>1&&!i[0].includes(`)`)&&i.find(e=>e.includes(`)`))){let e=i.findIndex(e=>e.includes(`)`));i[0]=[i[0],...i.splice(1,e)].join(this.formatSeparator)}return i.reduce((e,t)=>{let{formatName:i,formatOptions:a}=qt(t);if(this.formats[i]){let t=e;try{let o=r?.formatParams?.[r.interpolationkey]||{},s=o.locale||o.lng||r.locale||r.lng||n;t=this.formats[i](e,s,{...a,...r,...o})}catch(e){this.logger.warn(e)}return t}else this.logger.warn(`there was no format function for ${i}`);return e},e)}},Zt=(e,t)=>{e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)},Qt=class extends q{constructor(e,t,n,r={}){super(),this.backend=e,this.store=t,this.services=n,this.languageUtils=n.languageUtils,this.options=r,this.logger=K.create(`backendConnector`),this.waitingReads=[],this.maxParallelReads=r.maxParallelReads||10,this.readingCalls=0,this.maxRetries=r.maxRetries>=0?r.maxRetries:5,this.retryTimeout=r.retryTimeout>=1?r.retryTimeout:350,this.state={},this.queue=[],this.backend?.init?.(n,r.backend,r)}queueLoad(e,t,n,r){let i={},a={},o={},s={};return e.forEach(e=>{let r=!0;t.forEach(t=>{let o=`${e}|${t}`;!n.reload&&this.store.hasResourceBundle(e,t)?this.state[o]=2:this.state[o]<0||(this.state[o]===1?a[o]===void 0&&(a[o]=!0):(this.state[o]=1,r=!1,a[o]===void 0&&(a[o]=!0),i[o]===void 0&&(i[o]=!0),s[t]===void 0&&(s[t]=!0)))}),r||(o[e]=!0)}),(Object.keys(i).length||Object.keys(a).length)&&this.queue.push({pending:a,pendingCount:Object.keys(a).length,loaded:{},errors:[],callback:r}),{toLoad:Object.keys(i),pending:Object.keys(a),toLoadLanguages:Object.keys(o),toLoadNamespaces:Object.keys(s)}}loaded(e,t,n){let r=e.split(`|`),i=r[0],a=r[1];t&&this.emit(`failedLoading`,i,a,t),!t&&n&&this.store.addResourceBundle(i,a,n,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&n&&(this.state[e]=0);let o={};this.queue.forEach(n=>{Et(n.loaded,[i],a),Zt(n,e),t&&n.errors.push(t),n.pendingCount===0&&!n.done&&(Object.keys(n.loaded).forEach(e=>{o[e]||(o[e]={});let t=n.loaded[e];t.length&&t.forEach(t=>{o[e][t]===void 0&&(o[e][t]=!0)})}),n.done=!0,n.errors.length?n.callback(n.errors):n.callback())}),this.emit(`loaded`,o),this.queue=this.queue.filter(e=>!e.done)}read(e,t,n,r=0,i=this.retryTimeout,a){if(!e.length)return a(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:t,fcName:n,tried:r,wait:i,callback:a});return}this.readingCalls++;let o=(o,s)=>{if(this.readingCalls--,this.waitingReads.length>0){let e=this.waitingReads.shift();this.read(e.lng,e.ns,e.fcName,e.tried,e.wait,e.callback)}if(o&&s&&r<this.maxRetries){setTimeout(()=>{this.read(e,t,n,r+1,i*2,a)},i);return}a(o,s)},s=this.backend[n].bind(this.backend);if(s.length===2){try{let n=s(e,t);n&&typeof n.then==`function`?n.then(e=>o(null,e)).catch(o):o(null,n)}catch(e){o(e)}return}return s(e,t,o)}prepareLoading(e,t,n={},r){if(!this.backend)return this.logger.warn(`No backend was added via i18next.use. Will not load resources.`),r&&r();z(e)&&(e=this.languageUtils.toResolveHierarchy(e)),z(t)&&(t=[t]);let i=this.queueLoad(e,t,n,r);if(!i.toLoad.length)return i.pending.length||r(),null;i.toLoad.forEach(e=>{this.loadOne(e)})}load(e,t,n){this.prepareLoading(e,t,{},n)}reload(e,t,n){this.prepareLoading(e,t,{reload:!0},n)}loadOne(e,t=``){let n=e.split(`|`),r=n[0],i=n[1];this.read(r,i,`read`,void 0,void 0,(n,a)=>{n&&this.logger.warn(`${t}loading namespace ${i} for language ${r} failed`,n),!n&&a&&this.logger.log(`${t}loaded namespace ${i} for language ${r}`,a),this.loaded(e,n,a)})}saveMissing(e,t,n,r,i,a={},o=()=>{}){if(this.services?.utils?.hasLoadedNamespace&&!this.services?.utils?.hasLoadedNamespace(t)){this.logger.warn(`did not save key "${n}" as the namespace "${t}" was not yet loaded`,`This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!`);return}if(!(n==null||n===``)){if(this.backend?.create){let s={...a,isUpdate:i},c=this.backend.create.bind(this.backend);if(c.length<6)try{let i;i=c.length===5?c(e,t,n,r,s):c(e,t,n,r),i&&typeof i.then==`function`?i.then(e=>o(null,e)).catch(o):o(null,i)}catch(e){o(e)}else c(e,t,n,r,o,s)}!e||!e[0]||this.store.addResource(e[0],t,n,r)}}},$t=()=>({debug:!1,initAsync:!0,ns:[`translation`],defaultNS:[`translation`],fallbackLng:[`dev`],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:`all`,preload:!1,keySeparator:`.`,nsSeparator:`:`,pluralSeparator:`_`,contextSeparator:`_`,partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:`fallback`,saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:e=>{let t={};if(typeof e[1]==`object`&&(t=e[1]),z(e[1])&&(t.defaultValue=e[1]),z(e[2])&&(t.tDescription=e[2]),typeof e[2]==`object`||typeof e[3]==`object`){let n=e[3]||e[2];Object.keys(n).forEach(e=>{t[e]=n[e]})}return t},interpolation:{escapeValue:!0,prefix:`{{`,suffix:`}}`,formatSeparator:`,`,unescapePrefix:`-`,nestingPrefix:`$t(`,nestingSuffix:`)`,nestingOptionsSeparator:`,`,maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),en=e=>(z(e.ns)&&(e.ns=[e.ns]),z(e.fallbackLng)&&(e.fallbackLng=[e.fallbackLng]),z(e.fallbackNS)&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&!e.supportedLngs.includes(`cimode`)&&(e.supportedLngs=e.supportedLngs.concat([`cimode`])),e),X=()=>{},tn=e=>{Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(t=>{typeof e[t]==`function`&&(e[t]=e[t].bind(e))})},nn=class e extends q{constructor(e={},t){if(super(),this.options=en(e),this.services={},this.logger=K,this.modules={external:[]},tn(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(e={},t){this.isInitializing=!0,typeof e==`function`&&(t=e,e={}),e.defaultNS==null&&e.ns&&(z(e.ns)?e.defaultNS=e.ns:e.ns.includes(`translation`)||(e.defaultNS=e.ns[0]));let n=$t();this.options={...n,...this.options,...en(e)},this.options.interpolation={...n.interpolation,...this.options.interpolation},e.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=e.keySeparator),e.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=e.nsSeparator),typeof this.options.overloadTranslationOptionHandler!=`function`&&(this.options.overloadTranslationOptionHandler=n.overloadTranslationOptionHandler);let r=e=>e?typeof e==`function`?new e:e:null;if(!this.options.isClone){this.modules.logger?K.init(r(this.modules.logger),this.options):K.init(null,this.options);let e;e=this.modules.formatter?this.modules.formatter:Xt;let t=new Vt(this.options);this.store=new Lt(this.options.resources,this.options);let n=this.services;n.logger=K,n.resourceStore=this.store,n.languageUtils=t,n.pluralResolver=new Wt(t,{prepend:this.options.pluralSeparator}),e&&(n.formatter=r(e),n.formatter.init&&n.formatter.init(n,this.options),this.options.interpolation.format=n.formatter.format.bind(n.formatter)),n.interpolator=new Kt(this.options),n.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},n.backendConnector=new Qt(r(this.modules.backend),n.resourceStore,n,this.options),n.backendConnector.on(`*`,(e,...t)=>{this.emit(e,...t)}),this.modules.languageDetector&&(n.languageDetector=r(this.modules.languageDetector),n.languageDetector.init&&n.languageDetector.init(n,this.options.detection,this.options)),this.modules.i18nFormat&&(n.i18nFormat=r(this.modules.i18nFormat),n.i18nFormat.init&&n.i18nFormat.init(this)),this.translator=new Bt(this.services,this.options),this.translator.on(`*`,(e,...t)=>{this.emit(e,...t)}),this.modules.external.forEach(e=>{e.init&&e.init(this)})}if(this.format=this.options.interpolation.format,t||=X,this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){let e=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);e.length>0&&e[0]!==`dev`&&(this.options.lng=e[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn(`init: no languageDetector is used and no lng is defined`),[`getResource`,`hasResourceBundle`,`getResourceBundle`,`getDataByLanguage`].forEach(e=>{this[e]=(...t)=>this.store[e](...t)}),[`addResource`,`addResources`,`addResourceBundle`,`removeResourceBundle`].forEach(e=>{this[e]=(...t)=>(this.store[e](...t),this)});let i=B(),a=()=>{let e=(e,n)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn(`init: i18next is already initialized. You should call init just once!`),this.isInitialized=!0,this.options.isClone||this.logger.log(`initialized`,this.options),this.emit(`initialized`,this.options),i.resolve(n),t(e,n)};if((this.languages||this.isLanguageChangingTo)&&!this.isInitialized)return e(null,this.t.bind(this));this.changeLanguage(this.options.lng,e)};return this.options.resources||!this.options.initAsync?a():setTimeout(a,0),i}loadResources(e,t=X){let n=t,r=z(e)?e:this.language;if(typeof e==`function`&&(n=e),!this.options.resources||this.options.partialBundledLanguages){if(r?.toLowerCase()===`cimode`&&(!this.options.preload||this.options.preload.length===0))return n();let e=[],t=t=>{t&&t!==`cimode`&&this.services.languageUtils.toResolveHierarchy(t).forEach(t=>{t!==`cimode`&&(e.includes(t)||e.push(t))})};r?t(r):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(e=>t(e)),this.options.preload?.forEach?.(e=>t(e)),this.services.backendConnector.load(e,this.options.ns,e=>{!e&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),n(e)})}else n(null)}reloadResources(e,t,n){let r=B();return typeof e==`function`&&(n=e,e=void 0),typeof t==`function`&&(n=t,t=void 0),e||=this.languages,t||=this.options.ns,n||=X,this.services.backendConnector.reload(e,t,e=>{r.resolve(),n(e)}),r}use(e){if(!e)throw Error(`You are passing an undefined module! Please check the object you are passing to i18next.use()`);if(!e.type)throw Error(`You are passing a wrong module! Please check the object you are passing to i18next.use()`);return e.type===`backend`&&(this.modules.backend=e),(e.type===`logger`||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type===`languageDetector`&&(this.modules.languageDetector=e),e.type===`i18nFormat`&&(this.modules.i18nFormat=e),e.type===`postProcessor`&&Rt.addPostProcessor(e),e.type===`formatter`&&(this.modules.formatter=e),e.type===`3rdParty`&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&![`cimode`,`dev`].includes(e)){for(let e=0;e<this.languages.length;e++){let t=this.languages[e];if(![`cimode`,`dev`].includes(t)&&this.store.hasLanguageSomeTranslations(t)){this.resolvedLanguage=t;break}}!this.resolvedLanguage&&!this.languages.includes(e)&&this.store.hasLanguageSomeTranslations(e)&&(this.resolvedLanguage=e,this.languages.unshift(e))}}changeLanguage(e,t){this.isLanguageChangingTo=e;let n=B();this.emit(`languageChanging`,e);let r=e=>{this.language=e,this.languages=this.services.languageUtils.toResolveHierarchy(e),this.resolvedLanguage=void 0,this.setResolvedLanguage(e)},i=(i,a)=>{a?this.isLanguageChangingTo===e&&(r(a),this.translator.changeLanguage(a),this.isLanguageChangingTo=void 0,this.emit(`languageChanged`,a),this.logger.log(`languageChanged`,a)):this.isLanguageChangingTo=void 0,n.resolve((...e)=>this.t(...e)),t&&t(i,(...e)=>this.t(...e))},a=t=>{!e&&!t&&this.services.languageDetector&&(t=[]);let n=z(t)?t:t&&t[0],a=this.store.hasLanguageSomeTranslations(n)?n:this.services.languageUtils.getBestMatchFromCodes(z(t)?[t]:t);a&&(this.language||r(a),this.translator.language||this.translator.changeLanguage(a),this.services.languageDetector?.cacheUserLanguage?.(a)),this.loadResources(a,e=>{i(e,a)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?a(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(e),n}getFixedT(e,t,n,r){let i=r?.scopeNs,a=(e,t,...r)=>{let o;o=typeof t==`object`?{...t}:this.options.overloadTranslationOptionHandler([e,t].concat(r)),o.lng=o.lng||a.lng,o.lngs=o.lngs||a.lngs;let s=o.ns!==void 0&&o.ns!==null;o.ns=o.ns||a.ns,o.keyPrefix!==``&&(o.keyPrefix=o.keyPrefix||n||a.keyPrefix);let c={...this.options,...o};Array.isArray(i)&&!s&&(c.ns=i),typeof o.keyPrefix==`function`&&(o.keyPrefix=R(o.keyPrefix,c));let l=this.options.keySeparator||`.`,u;return o.keyPrefix&&Array.isArray(e)?u=e.map(e=>(typeof e==`function`&&(e=R(e,c)),`${o.keyPrefix}${l}${e}`)):(typeof e==`function`&&(e=R(e,c)),u=o.keyPrefix?`${o.keyPrefix}${l}${e}`:e),this.t(u,o)};return z(e)?a.lng=e:a.lngs=e,a.ns=t,a.keyPrefix=n,a}t(...e){return this.translator?.translate(...e)}exists(...e){return this.translator?.exists(...e)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e,t={}){if(!this.isInitialized)return this.logger.warn(`hasLoadedNamespace: i18next was not initialized`,this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn(`hasLoadedNamespace: i18n.languages were undefined or empty`,this.languages),!1;let n=t.lng||this.resolvedLanguage||this.languages[0],r=this.options?this.options.fallbackLng:!1,i=this.languages[this.languages.length-1];if(n.toLowerCase()===`cimode`)return!0;let a=(e,t)=>{let n=this.services.backendConnector.state[`${e}|${t}`];return n===-1||n===0||n===2};if(t.precheck){let e=t.precheck(this,a);if(e!==void 0)return e}return!!(this.hasResourceBundle(n,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||a(n,e)&&(!r||a(i,e)))}loadNamespaces(e,t){let n=B();return this.options.ns?(z(e)&&(e=[e]),e.forEach(e=>{this.options.ns.includes(e)||this.options.ns.push(e)}),this.loadResources(e=>{n.resolve(),t&&t(e)}),n):(t&&t(),Promise.resolve())}loadLanguages(e,t){let n=B();z(e)&&(e=[e]);let r=this.options.preload||[],i=e.filter(e=>!r.includes(e)&&this.services.languageUtils.isSupportedCode(e));return i.length?(this.options.preload=r.concat(i),this.loadResources(e=>{n.resolve(),t&&t(e)}),n):(t&&t(),Promise.resolve())}dir(e){if(e||=this.resolvedLanguage||(this.languages?.length>0?this.languages[0]:this.language),!e)return`rtl`;try{let t=new Intl.Locale(e);if(t&&t.getTextInfo){let e=t.getTextInfo();if(e&&e.direction)return e.direction}}catch{}let t=`ar.shu.sqr.ssh.xaa.yhd.yud.aao.abh.abv.acm.acq.acw.acx.acy.adf.ads.aeb.aec.afb.ajp.apc.apd.arb.arq.ars.ary.arz.auz.avl.ayh.ayl.ayn.ayp.bbz.pga.he.iw.ps.pbt.pbu.pst.prp.prd.ug.ur.ydd.yds.yih.ji.yi.hbo.men.xmn.fa.jpr.peo.pes.prs.dv.sam.ckb`.split(`.`),n=this.services?.languageUtils||new Vt($t());return e.toLowerCase().indexOf(`-latn`)>1?`ltr`:t.includes(n.getLanguagePartFromCode(e))||e.toLowerCase().indexOf(`-arab`)>1?`rtl`:`ltr`}static createInstance(t={},n){let r=new e(t,n);return r.createInstance=e.createInstance,r}cloneInstance(t={},n=X){let r=t.forkResourceStore;r&&delete t.forkResourceStore;let i={...this.options,...t,isClone:!0},a=new e(i);if((t.debug!==void 0||t.prefix!==void 0)&&(a.logger=a.logger.clone(t)),[`store`,`services`,`language`].forEach(e=>{a[e]=this[e]}),a.services={...this.services},a.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},r&&(a.store=new Lt(Object.keys(this.store.data).reduce((e,t)=>(e[t]={...this.store.data[t]},e[t]=Object.keys(e[t]).reduce((n,r)=>(n[r]={...e[t][r]},n),e[t]),e),{}),i),a.services.resourceStore=a.store),t.interpolation){let e={...$t().interpolation,...this.options.interpolation,...t.interpolation},n={...i,interpolation:e};a.services.interpolator=new Kt(n)}return a.translator=new Bt(a.services,i),a.translator.on(`*`,(e,...t)=>{a.emit(e,...t)}),a.init(i,n),a.translator.options=i,a.translator.backendConnector.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},a}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}},Z=nn.createInstance(),Z.createInstance,Z.dir,Z.init,Z.loadResources,Z.reloadResources,Z.use,Z.changeLanguage,Z.getFixedT,Q=Z.t,Z.exists,Z.setDefaultNamespace,Z.hasLoadedNamespace,Z.loadNamespaces,Z.loadLanguages})),$,an=e((()=>{n(),$=t`
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="6"
		height="10"
		fill="none"
		viewBox="0 0 6 10"
	>
		<path stroke="currentColor" stroke-linecap="round" d="m1 9 4-4-4-4" />
	</svg>
`})),on,sn=e((()=>{T(),on=f`
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
	}
	.tabn-stats {
		margin: 0 calc(var(--cz-spacing) * 4);
		color: var(--cz-color-text-secondary);
		white-space: nowrap;
	}

	.split {
		display: flex;
		flex: auto;
		flex-direction: row;
		min-height: 0;
	}

	.gutter {
		cursor: col-resize;
		flex: none;
		display: flex;
		background: var(--cz-color-gray-700);
		z-index: 2;
		position: relative;
	}
	.gutter::before {
		content: '';
		display: block;
		flex: none;
		background: var(--cz-color-gray-700);
		width: 1px;
		margin-left: auto;
		pointer-events: none;
	}
	.gutter:hover::before {
		background: var(--cz-color-bg-brand-secondary);
		box-shadow: -1px 0 0 1px var(--cz-color-bg-brand-secondary);
	}
	.gutter:hover::after {
		content: '';
		display: block;
		position: absolute;
		top: 0;
		left: -2px;
		right: -2px;
		bottom: 0;
	}

	#list {
		min-width: 0;
	}
	#list,
	#queue {
		flex: auto;
	}

	[data-active='split'] .view-core::part(header-bg) {
		border-top-left-radius: 0;
	}

	[data-active='overview'] .view-core,
	[data-active='queue'] #list {
		display: none;
	}
	[data-active='overview'] #queue {
		flex: none;
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
		border: var(--cz-pagination-border-color);
		border-radius: var(--cz-pagination-border-radius);
	}
	.button-page {
		width: 30px;
		height: 30px;
		padding: 0 5px;
		cursor: pointer;
		outline: none;
		border: none;
		border-radius: var(--cz-pagination-border);
		fill: var(--cz-pagination-color);
		position: relative;
		background-color: transparent;
	}
	.button-page[disabled] {
		opacity: 0.45;
		pointer-events: none;
		fill: var(--cz-pagination-inactive-color);
	}

	.button-page:active,
	.button-page:hover {
		fill: var(--cz-pagination-active-color);
	}

	.tabn-pagination .button-page + .button-page::before {
		content: '';
		position: absolute;
		width: 1px;
		height: 18.5px;
		background-color: var(--cz-pagination-border-divider-color);
		left: -0.5px;
		top: 50%;
		transform: translateY(-50%);
	}
`})),cn,ln,un,dn=e((()=>{te(),Oe(),ft(),vt(),rn(),n(),me(),an(),sn(),cn=({next:e,prev:n})=>t` <cosmoz-button
			variant="secondary"
			class="button-nav prev"
			title="${Q(`Previous item`)}"
			?disabled=${!n}
			slot="extra"
			@click=${n}
		>
			${$}
		</cosmoz-button>
		<cosmoz-button
			variant="secondary"
			title="${Q(`Next item`)}"
			class="button-nav next"
			?disabled=${!e}
			slot="extra"
			@click=${e}
		>
			${$}
		</cosmoz-button>`,ln=e=>{if(!e)return i;let{pageNumber:n=-1,onPage:r}=e,a=e.totalPages??Math.ceil((e.totalAvailable??0)/(e.pageSize??0));return t` <div class="tabn-pagination">
		<cosmoz-button
			title="${Q(`Previous page`)}"
			class="button-page page-prev"
			size="sm"
			variant="secondary"
			?disabled=${!(n>1)}
			@click=${e=>r(e.ctrlKey?1:n-1)}
		>
			${$}
		</cosmoz-button>
		<cosmoz-button
			title="${Q(`Next page`)}"
			variant="secondary"
			class="button-page page-next"
			size="sm"
			?disabled=${!(n<a)}
			@click=${e=>r(e.ctrlKey?a:n+1)}
		>
			${$}
		</cosmoz-button>
	</div>`},un=({pagination:e,index:n,items:r,totalAvailable:a,nav:o,activeTab:s})=>r.length<1?i:t`<div class="tabn-stats">
		${(()=>{if(e){let{pageNumber:t,pageSize:i}=e,a=i??r.length;return[((t??1)-1)*a+n+1,r.length<a?e.totalAvailable:(t??1)*a].join(`-`)}let t=o.index,i=o.items?.length;return[i!==r.length&&[`queue`,`split`].includes(s||``)?[t<0?`?`:t+1,i].join(`/`):[n+1,r.length].join(`-`)]})()}
		${[Q(`of`),a??Q(`many`)].join(` `)}
	</div>`}));export{me as _,on as a,Q as c,ot as d,it as f,pe as g,ge as h,un as i,ft as l,he as m,cn as n,sn as o,at as p,ln as r,rn as s,dn as t,ut as u};