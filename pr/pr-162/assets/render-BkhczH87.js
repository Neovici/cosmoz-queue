import{t as e}from"./chunk-BvrOYcoh.js";import{a as t,o as n,r,t as i}from"./lit-html-BZ3vufxv.js";import{a,c as o,i as s,n as c,r as l,s as u,t as d}from"./iframe-BY92uhJK.js";import{a as f,c as p,f as m,g as h,h as g,i as _,l as v,m as y,n as b,o as ee,p as te,r as ne,s as x,t as S,u as C,y as re}from"./haunted-v0Ee1Lpk.js";import{a as ie,i as ae,l as w,n as T,o as oe,r as se,t as ce,u as E}from"./i18next-DF64z2kf.js";import{t as le}from"./dist-B_964V1c.js";import{n as ue,t as D}from"./guard-DtydC6Ax.js";import{m as de,n as fe,t as pe}from"./next-CIq1JOkx.js";import{n as me,r as he}from"./style-Cz8VEcFi.js";var ge,O,_e,k,A=e((()=>{S(),ge=e=>{if(typeof e!=`object`||!e)return!1;let t=e;return typeof t.px==`number`&&t.px>=0&&!Number.isNaN(t.px)},O=e=>{try{let t=JSON.parse(e);if(ge(t))return t}catch{}},_e=(e=`cosmoz-resizable-view:`)=>{let t=new Map,n,r=new Map,i=()=>{n=void 0;for(let[t,n]of r)try{localStorage.setItem(e+t,JSON.stringify(n))}catch{}r.clear()},a=(e,t)=>{r.set(e,t),n??=setTimeout(i,100)},o=n=>{if(n.key==null||!n.key.startsWith(e)||n.newValue==null)return;let r=n.key.slice(e.length),i=O(n.newValue);if(i==null)return;let a=t.get(r);if(a)for(let e of a)e(i)};return typeof window<`u`&&window.addEventListener(`storage`,o),{get(t){let n;try{n=localStorage.getItem(e+t)}catch{return}if(n!=null)return O(n)},set(e,t){a(e,t)},subscribe(e,n){let r=t.get(e);return r||(r=new Set,t.set(e,r)),r.add(n),()=>{let r=t.get(e);r&&(r.delete(n),r.size===0&&t.delete(e))}},destroy(){typeof window<`u`&&window.removeEventListener(`storage`,o),n!=null&&(clearTimeout(n),i())}}},k=(e,t,n)=>{let r=C(n);if(r.current=n,h(()=>{if(!e||!t)return;let n=e.get(t);n!=null&&r.current?.(n);let i=e.subscribe?.(t,e=>r.current?.(e));return()=>{i?.(),e.destroy?.()}},[e,t]),!(!e||!t))return n=>e.set(t,n)}})),j,ve=e((()=>{S(),j=re`
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
`})),M,N,P,F,I,L,R,z=e((()=>{M=e=>e instanceof MouseEvent?{x:e.clientX,y:e.clientY}:e.touches&&e.touches.length>0?{x:e.touches[0].clientX,y:e.touches[0].clientY}:{x:0,y:0},N=(e,t,n)=>n===`horizontal`?e.x-t.left:e.y-t.top,P=e=>{let t=parseFloat(e);return Number.isNaN(t)?void 0:t},F=(e,t)=>{let n=getComputedStyle(e);return t===`horizontal`?{min:P(n.minWidth)??0,max:P(n.maxWidth)??1/0}:{min:P(n.minHeight)??0,max:P(n.maxHeight)??1/0}},I=e=>({rect:e.container.getBoundingClientRect(),bounds:F(e.previous,e.direction)}),L=(e,t,n,r)=>Math.max(r.min,Math.min(N(e,t,n),r.max)),R=e=>{let t;return n=>{let{phase:r,mousePosition:i}=n.detail;if(r===`start`){t=I(e);return}if(r!==`move`&&r!==`end`)return;t||=I(e);let a=L(i,t.rect,e.direction,t.bounds);r===`move`?e.onResize?.(a):(e.onResizeEnd?.(a),t=void 0)}}})),ye,be=e((()=>{S(),z(),ye=(e=`horizontal`)=>{let t=v();return h(()=>{t.setAttribute(`data-direction`,e)},[e]),h(()=>{let e=(e,n)=>{t.dispatchEvent(new CustomEvent(`resize-handle`,{detail:{phase:e,mousePosition:n},bubbles:!0}))},n=0,r,i=()=>{n=0,r&&=(e(`move`,r),void 0)},a=e=>{r=M(e),n||=requestAnimationFrame(i)},o=r=>{n&&(cancelAnimationFrame(n),i()),t.removeAttribute(`data-dragging`),e(`end`,M(r)),document.removeEventListener(`mousemove`,a),document.removeEventListener(`mouseup`,o),document.removeEventListener(`touchmove`,a),document.removeEventListener(`touchend`,o)},s=n=>{t.setAttribute(`data-dragging`,`true`),e(`start`,M(n)),document.addEventListener(`mousemove`,a),document.addEventListener(`mouseup`,o),document.addEventListener(`touchmove`,a,{passive:!1}),document.addEventListener(`touchend`,o)},c=e=>{e.preventDefault(),s(e)},l=e=>{e.preventDefault(),s(e)};return t.addEventListener(`mousedown`,c),t.addEventListener(`touchstart`,l,{passive:!1}),()=>{n&&cancelAnimationFrame(n),t.removeEventListener(`mousedown`,c),t.removeEventListener(`touchstart`,l),document.removeEventListener(`mousemove`,a),document.removeEventListener(`mouseup`,o),document.removeEventListener(`touchmove`,a),document.removeEventListener(`touchend`,o)}},[t]),null}})),xe,Se=e((()=>{S(),xe=re`
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
`})),Ce,we=e((()=>{S(),n(),be(),Se(),Ce=({direction:e=`horizontal`})=>(ye(e),i),customElements.define(`cosmoz-resize-handle`,b(Ce,{styleSheets:[xe],observedAttributes:[`direction`]}))})),B,V,Te,Ee,De,Oe=e((()=>{S(),n(),w(),A(),ve(),we(),z(),B=e=>{let{width:t,height:n}=e.getBoundingClientRect();return t>0&&n>0},V=e=>e?.assignedElements()[0],Te=(e,t,n)=>{let r=()=>{let r=B(t)&&B(n);e.toggleAttribute(`data-single-panel`,!r)},i=new ResizeObserver(()=>queueMicrotask(r));return i.observe(t),i.observe(n),r(),i},Ee=(e,t)=>{t!=null&&(e.style.flexBasis=`${t.px}px`)},De=({direction:e=`horizontal`,persist:n})=>{let r=v(),i=C(),a=C(),o=C(),[s,c]=m(!1),l=g(()=>n?_e():void 0,[n]),u=k(l,n,e=>{let t=V(a.current);t&&Ee(t,e)}),d=C(u);d.current=u;let f=y(()=>{let e=a.current?.assignedElements()[0],t=o.current?.assignedElements()[0];e&&t&&c(!0)},[]);return h(()=>{r.setAttribute(`data-direction`,e)},[e]),h(()=>{if(!s)return;let t=V(a.current),n=V(o.current),c=i.current;if(!t||!n||!c)return;let l=R({container:r,previous:t,direction:e,onResize:e=>{t.style.flexBasis=`${e}px`},onResizeEnd:e=>{d.current?.({px:e})}});c.addEventListener(`resize-handle`,l);let u=Te(r,t,n);return()=>{c.removeEventListener(`resize-handle`,l),u.disconnect()}},[e,l,n,r,s]),t`<slot
			name="previous"
			${E(a)}
			@slotchange=${f}
		></slot
		><cosmoz-resize-handle
			direction=${e}
			${E(i)}
		></cosmoz-resize-handle
		><slot name="next" ${E(o)} @slotchange=${f}></slot>`},customElements.define(`cosmoz-resizable-view`,b(De,{styleSheets:[j],observedAttributes:[`direction`,`persist`]}))})),ke=e((()=>{A(),Oe(),we(),z()})),H,Ae,je=e((()=>{n(),x(),l(),H=(e,t,n)=>{let r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},Ae=f(class extends ee{constructor(e){if(super(e),e.type!==p.CHILD)throw Error(`repeat() can only be used in text expressions`)}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);let i=[],a=[],o=0;for(let t of e)i[o]=r?r(t,o):o,a[o]=n(t,o),o++;return{values:a,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,i]){let s=d(e),{values:l,keys:f}=this.dt(t,n,i);if(!Array.isArray(s))return this.ut=f,l;let p=this.ut??=[],m=[],h,g,_=0,v=s.length-1,y=0,b=l.length-1;for(;_<=v&&y<=b;)if(s[_]===null)_++;else if(s[v]===null)v--;else if(p[_]===f[y])m[y]=u(s[_],l[y]),_++,y++;else if(p[v]===f[b])m[b]=u(s[v],l[b]),v--,b--;else if(p[_]===f[b])m[b]=u(s[_],l[b]),o(e,m[b+1],s[_]),_++,b--;else if(p[v]===f[y])m[y]=u(s[v],l[y]),o(e,s[_],s[v]),v--,y++;else if(h===void 0&&(h=H(f,y,b),g=H(p,_,v)),h.has(p[_]))if(h.has(p[v])){let t=g.get(f[y]),n=t===void 0?null:s[t];if(n===null){let t=o(e,s[_]);u(t,l[y]),m[y]=t}else m[y]=u(n,l[y]),o(e,s[_],n),s[t]=null;y++}else c(s[v]),v--;else c(s[_]),_++;for(;y<=b;){let t=o(e,m[b+1]);u(t,l[y]),m[y++]=t}for(;_<=v;){let e=s[_++];e!==null&&c(e)}return this.ut=f,a(e,m),r}})})),U,Me,Ne,Pe=e((()=>{n(),x(),U=`important`,Me=` !`+U,Ne=f(class extends ee{constructor(e){if(super(e),e.type!==p.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`},``)}update(e,[t]){let{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?n.removeProperty(e):n[e]=null);for(let e in t){let r=t[e];if(r!=null){this.ft.add(e);let t=typeof r==`string`&&r.endsWith(Me);e.includes(`-`)||t?n.setProperty(e,t?r.slice(0,-11):r,t?U:``):n[e]=r}}return r}})})),Fe,Ie=e((()=>{de(),Fe=class extends Promise{constructor(e){let t={};super((e,n)=>Object.assign(t,{resolve:e,reject:n})),Object.assign(this,t),e?.(t.resolve,t.reject)}resolve=()=>{}}})),W,Le,Re,ze,Be=e((()=>{S(),je(),w(),Pe(),ue(),Ie(),W={host:{position:`relative`,display:`flex`,overflow:`hidden`},slide:{position:`static`,width:`100%`,height:`100%`}},Le=e=>{let{slide:t}=e,[n,r]=m([]);return te(()=>void Object.assign(e.style,W.host),[]),h(()=>{if(t==null)return;let e={animationEnd$:new Fe,...t};r((t=[])=>{let n=t.findIndex(({id:t,out:n})=>t===e.id&&n!==!0);return n===-1?[...t,e]:[...t.slice(0,n),e,...t.slice(n+1,t.length)]})},[t]),te(async()=>{if(n.filter(e=>!e.out).length<2){let e=n[0];e&&requestAnimationFrame(()=>requestAnimationFrame(()=>e.animationEnd$.resolve()));return}let e=n[n.length-1],t=n[n.length-2],i=e.el,a=t.el;t.out=!0,i&&a&&await e.animation?.(i,a),r((e=[])=>e.filter(e=>e!==t))},[n]),{slides:n}},Re=e=>t`<div
		${E(t=>Object.assign(e,{el:t}))}
		class="slide"
		style=${Ne(W.slide)}
	>
		${D([e],()=>e.content??e.render?.(e))}
	</div>`,ze=({slides:e})=>D([e],()=>Ae(e,({id:e})=>e,Re))})),Ve,He=e((()=>{S(),Be(),Ve=e=>ze(Le(e)),customElements.define(`cosmoz-slider`,b(Ve,{useShadowDOM:!1}))})),G,Ue,We=e((()=>{G=(e,t)=>{let n=e.animate([{position:`absolute`,transform:`translateX(100%)`},{transform:`translateX(0%)`}],{duration:200,fill:`none`,easing:`ease-in-out`}),r=t.animate([{},{position:`absolute`,transform:`translateX(-100%)`}],{duration:200,fill:`none`,easing:`ease-in-out`});return Promise.all([n.finished,r.finished])},Ue=(e,t)=>{let n=e.animate([{position:`absolute`,transform:`translateX(-100%)`},{transform:`translateX(0%)`}],{duration:200,fill:`none`,easing:`ease-in-out`}),r=t.animate([{},{position:`absolute`,transform:`translateX(100%)`}],{duration:200,fill:`none`,easing:`ease-in-out`});return Promise.all([n.finished,r.finished])}})),Ge=e((()=>{S(),n()})),Ke=e((()=>{He(),Ge(),We(),Be()})),qe,Je,K,Ye,Xe,Ze,Qe=e((()=>{n(),_(),l(),x(),qe=class{_ref;constructor(e){this._ref=e}disconnect(){this._ref=void 0}reconnect(e){this._ref=e}deref(){return this._ref}},Je=class{_promise=void 0;_resolve=void 0;get(){return this._promise}pause(){this._promise??=new Promise(e=>this._resolve=e)}resume(){this._resolve?.(),this._promise=this._resolve=void 0}},K=e=>!s(e)&&typeof e.then==`function`,Ye=1073741823,Xe=class extends ne{__lastRenderedIndex=Ye;__values=[];__weakThis=new qe(this);__pauser=new Je;render(...e){return e.find(e=>!K(e))??r}update(e,t){let n=this.__values,i=n.length;this.__values=t;let a=this.__weakThis,o=this.__pauser;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this.__lastRenderedIndex);e++){let r=t[e];if(!K(r))return this.__lastRenderedIndex=e,r;e<i&&r===n[e]||Promise.resolve(r).then(async e=>{for(;o.get();)await o.get();let t=a.deref();if(t!==void 0){let n=t.__values.indexOf(r);n>-1&&n<=t.__lastRenderedIndex&&(t.__lastRenderedIndex=n,t.setValue(e))}})}return r}disconnected(){this.__weakThis.disconnect(),this.__pauser.pause()}reconnected(){this.__weakThis.reconnect(this),this.__pauser.resume()}},Ze=f(Xe)})),q,$e=e((()=>{n(),q=t`
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="16"
		height="16"
		fill="none"
		viewBox="0 0 6 10"
	>
		<path stroke="currentColor" stroke-linecap="round" d="m1 9 4-4-4-4" />
	</svg>
`})),J,Y,X,Z,Q,$,et,tt,nt,rt,it=e((()=>{le(),ke(),Ke(),pe(),Qe(),ce(),n(),ue(),se(),ie(),$e(),me(),J={id:`empty`,content:i,animation:G},Y=()=>J,X=({next:e,prev:n})=>t` <cosmoz-button
			variant="tertiary"
			icon-only
			class="button-nav prev"
			title="${T(`Previous item`)}"
			?disabled=${!n}
			slot="extra"
			@click=${n}
		>
			${q}
		</cosmoz-button>
		<cosmoz-button
			variant="tertiary"
			icon-only
			title="${T(`Next item`)}"
			class="button-nav next"
			?disabled=${!e}
			slot="extra"
			@click=${e}
		>
			${q}
		</cosmoz-button>`,Z=e=>{if(!e)return i;let{pageNumber:n=-1,onPage:r}=e,a=e.totalPages??Math.ceil((e.totalAvailable??0)/(e.pageSize??0));return t` <div class="tabn-pagination" slot="stats">
		<cosmoz-button
			title="${T(`Previous page`)}"
			class="button-page page-prev"
			size="sm"
			variant="tertiary"
			icon-only
			?disabled=${!(n>1)}
			@click=${e=>r(e.ctrlKey?1:n-1)}
		>
			${q}
		</cosmoz-button>
		<cosmoz-button
			title="${T(`Next page`)}"
			variant="tertiary"
			icon-only
			class="button-page page-next"
			size="sm"
			?disabled=${!(n<a)}
			@click=${e=>r(e.ctrlKey?a:n+1)}
		>
			${q}
		</cosmoz-button>
	</div>`},Q=({pagination:e,index:n,items:r,totalAvailable:a,nav:o,activeTab:s})=>r.length<1?i:t`<div class="tabn-stats" slot="stats">
		${(()=>{if(e){let{pageNumber:t,pageSize:i}=e,a=i??r.length;return[((t??1)-1)*a+n+1,r.length<a?e.totalAvailable:(t??1)*a].join(`-`)}let t=o.index,i=o.items?.length;return[i!==r.length&&[`queue`,`split`].includes(s||``)?[t<0?`?`:t+1,i].join(`/`):[n+1,r.length].join(`-`)]})()}
		${[T(`of`),a??T(`many`)].join(` `)}
	</div>`,$=new WeakMap,et=e=>($.has(e)||($.set(e,void 0),e.then(t=>$.set(e,{value:t}),()=>void 0)),$.get(e)),tt=({animationEnd$:e,details:t,item:n,next:r,prev:i,renderItem:a,renderLoader:o})=>{let s=X({next:r,prev:i});if(!t)return a({item:n,nav:s,next:r,prev:i,animationEnd$:e});let c=t(n),l=et(c);return l?D([c,r],()=>a({item:l.value,nav:s,next:r,prev:i})):D([c,e,r],()=>Ze(c.then(e=>a({item:e,nav:s,next:r,prev:i})),o({item:n,nav:s})))},nt=({id:e,forward:t,item:n,...r})=>n?{id:e(n),render:e=>tt({...e,item:n,...r}),animation:(e,n)=>n.childElementCount===0?void 0:(t?G:Ue)(e,n)}:Y(),rt=({header:e,heading:n,afterHeading:r,index:i,tabnav:a,items:o,totalAvailable:s,nav:c,tabHashParam:l,list:u,renderLoader:d,renderItem:f,details:p=c?.details,pagination:m,persistKey:h,splitAttrs:g})=>{let _=a.active?.name,v=m?{...m,totalAvailable:s}:void 0,y=_===`overview`&&c?.item&&p?()=>p(c.item).then(void 0,()=>void 0):void 0,b=t`
		<cosmoz-tabs-next class="tabn" @pointerenter=${y}>
			<div class="tabn-heading" slot="tabs">${n}${r}</div>
			${fe({...a,className:`tabn-tab`})}
			${Q({pagination:v,totalAvailable:s,index:i,items:o,nav:c,activeTab:_})}
			${Z(v)}
		</cosmoz-tabs-next>
	`;return t`
		<style>
			${he}
		</style>

		${oe(e,e=>e({tabnav:{...a,prefetch:y},heading:n,afterHeading:r,totalAvailable:s,item:c?.item,tabHashParam:l}),()=>b)}

		<cosmoz-resizable-view
			data-active=${_}
			direction="horizontal"
			persist=${ae(h)}
			initial-size=${g?.initialSize??`50%`}
			min-size=${g?.minSize??`100`}
		>
			${u}
			<cosmoz-slider
				id="queue"
				slot="next"
				.slide=${oe(_!==`overview`,()=>nt({...c,renderLoader:d,renderItem:f,details:p}),Y)}
			></cosmoz-slider>
		</cosmoz-resizable-view>
	`}}));export{Q as a,rt as i,X as n,ke as o,Z as r,it as t};