import{E as j,b as w,A as k,M as wt,u as $,v as M,h as R,p as yt,t as A}from"./iframe-CJyEtxgP.js";import{c as Y,b as X,e as N,a as zt,d as $t}from"./lit-haunted-BljuK1Gr.js";import{e as H,i as K,t as lt,f as kt}from"./async-directive-BdIA-Mru.js";const At={},ct=H(class extends K{constructor(){super(...arguments),this.ot=At}render(t,e){return e()}update(t,[e,o]){if(Array.isArray(e)){if(Array.isArray(this.ot)&&this.ot.length===e.length&&e.every((r,n)=>r===this.ot[n]))return j}else if(this.ot===e)return j;return this.ot=Array.isArray(e)?Array.from(e):e,this.render(e,o)}}),dt=(t,...e)=>t.flatMap((o,r)=>[o,e[r]??""]).join(""),Et=dt`
	:host {
		background-color: var(--cosmoz-tabs-bg-color, #fff);
		color: var(--cosmoz-tabs-text-color, #606c7e);
		font-family: var(--cosmoz-tabs-font-family, inherit);
		font-size: var(--cosmoz-tabs-font-size, 13px);
		line-height: var(--cosmoz-tabs-line-height, 19px);
		box-shadow: var(--cosmoz-tabs-shadow, inset 0 -1px 0 0 #e5e6eb);
		flex: none;
		display: flex;
		align-items: center;
		overflow-x: auto;
		-webkit-overflow-scrolling: auto;
		scrollbar-width: none;
		padding-bottom: 1px;
	}
	:host::-webkit-scrollbar {
		display: none;
	}
`,Mt=t=>(X(()=>{t.setAttribute("role","tablist")},[]),w`
		<style>
			${Et}
		</style>
		<slot></slot>
	`);customElements.define("cosmoz-tabs-next",Y(Mt));const St=t=>t??k,rt=t=>typeof t=="object"&&t!=null&&t.nodeType===1,it=(t,e)=>(!e||t!=="hidden")&&t!=="visible"&&t!=="clip",W=(t,e)=>{if(t.clientHeight<t.scrollHeight||t.clientWidth<t.scrollWidth){const o=getComputedStyle(t,null);return it(o.overflowY,e)||it(o.overflowX,e)||(r=>{const n=(i=>{if(!i.ownerDocument||!i.ownerDocument.defaultView)return null;try{return i.ownerDocument.defaultView.frameElement}catch{return null}})(r);return!!n&&(n.clientHeight<r.scrollHeight||n.clientWidth<r.scrollWidth)})(t)}return!1},st=(t,e,o,r,n,i,s,a)=>i<t&&s>e||i>t&&s<e?0:i<=t&&a<=o||s>=e&&a>=o?i-t-r:s>e&&a<o||i<t&&a>o?s-e+n:0,Wt=t=>{const e=t.parentElement;return e??(t.getRootNode().host||null)},jt=(t,e)=>{var o,r,n,i;if(typeof document>"u")return[];const{scrollMode:s,boundary:a,skipOverflowHiddenElements:u}=e,p=typeof a=="function"?a:z=>z!==a;if(!rt(t))throw new TypeError("Invalid target");const v=document.scrollingElement||document.documentElement,c=[];let l=t;for(;rt(l)&&p(l);){if(l=Wt(l),l===v){c.push(l);break}l!=null&&l===document.body&&W(l)&&!W(document.documentElement)||l!=null&&W(l,u)&&c.push(l)}const h=(r=(o=window.visualViewport)==null?void 0:o.width)!=null?r:innerWidth,f=(i=(n=window.visualViewport)==null?void 0:n.height)!=null?i:innerHeight,{scrollX:b,scrollY:g}=window,{height:y,width:ft,top:G,right:U,bottom:Z,left:C}=t.getBoundingClientRect(),{top:pt,right:bt,left:gt}=(z=>{const d=window.getComputedStyle(z);return{top:parseFloat(d.scrollMarginTop)||0,right:parseFloat(d.scrollMarginRight)||0,bottom:parseFloat(d.scrollMarginBottom)||0,left:parseFloat(d.scrollMarginLeft)||0}})(t);let E=G-pt,O=C+ft/2-gt+bt;const P=[];for(let z=0;z<c.length;z++){const d=c[z],{height:q,width:I,top:_,right:vt,bottom:J,left:Q}=d.getBoundingClientRect();if(s==="if-needed"&&G>=0&&C>=0&&Z<=f&&U<=h&&(d===v&&!W(d)||G>=_&&Z<=J&&C>=Q&&U<=vt))return P;const S=getComputedStyle(d),mt=parseInt(S.borderLeftWidth,10),B=parseInt(S.borderTopWidth,10),xt=parseInt(S.borderRightWidth,10),D=parseInt(S.borderBottomWidth,10);let m=0,x=0;const tt="offsetWidth"in d?d.offsetWidth-d.clientWidth-mt-xt:0,et="offsetHeight"in d?d.offsetHeight-d.clientHeight-B-D:0,F="offsetWidth"in d?d.offsetWidth===0?0:I/d.offsetWidth:0,L="offsetHeight"in d?d.offsetHeight===0?0:q/d.offsetHeight:0;if(v===d)m=st(g,g+f,f,B,D,g+E,g+E+y,y),x=O-h/2,m=Math.max(0,m+g),x=Math.max(0,x+b);else{m=st(_,J,q,B,D+et,E,E+y,y),x=O-(Q+I/2)+tt/2;const{scrollLeft:ot,scrollTop:nt}=d;m=L===0?0:Math.max(0,Math.min(nt+m/L,d.scrollHeight-q/L+et)),x=F===0?0:Math.max(0,Math.min(ot+x/F,d.scrollWidth-I/F+tt)),E+=nt-m,O+=ot-x}P.push({el:d,top:m,left:x})}return P},Tt=dt`
	:host {
		position: relative;
		display: flex;
		box-sizing: border-box;
		align-items: center;
		justify-content: center;
		flex: 1;
		padding: 11px 24px;
		color: inherit;
		text-decoration: none;
		text-align: center;
		letter-spacing: 0.3px;
		text-overflow: ellipsis;
		white-space: nowrap;
		cursor: pointer;
		/* TODO(accessibility): focused tab should be outlined */
		outline: 0;
	}

	:host([active]) {
		color: var(--cosmoz-tabs-accent-color, #508aef);
		box-shadow: inset 0 -3px 0px 0px var(--cosmoz-tabs-accent-color, #508aef);
		font-weight: 700;
		letter-spacing: 0;
	}

	:host([disabled]) {
		opacity: 0.4;
		pointer-events: none;
	}

	#iconSlot::slotted(*) {
		flex-shrink: 0;
	}

	#contentSlot::slotted(*) {
		flex: auto;
	}

	.badge {
		font-family: var(--cosmoz-font-base, 'Verdana, Arial, sans-serif');
		font-weight: normal;
		font-size: 11px;
		line-height: 1;
		border-radius: 0.90909em;
		box-sizing: border-box;

		transform: translateY(-50%);
		vertical-align: top;
		min-width: 1.81818em;
		padding: 0.40909em 0.36363em;

		max-width: 80px;
		text-overflow: ellipsis;
		overflow: hidden;

		background-color: var(--accent-color, #ff4081);
		color: #ffffff;
		text-align: center;
	}

	a {
		display: contents;
	}
`,Ht=t=>{const{active:e,badge:o,href:r}=t;return X(()=>{t.getAttribute("tabindex")||t.setAttribute("tabindex","-1"),t.setAttribute("role","tab")},[]),N(()=>{const n=t;n.toggleAttribute("aria-selected",!!e),e&&jt(n,{boundary:n.parentElement}).forEach(({el:i,top:s,left:a})=>i.scroll({top:s,left:a,behavior:"smooth"}))},[e]),w`
		<style>
			${Tt}
		</style>
		<a part="link" href=${St(r)}>
			<slot id="iconSlot" name="icon"></slot>
			<slot id="contentSlot"></slot>
			${o?w`<span class="badge" part="badge">${o}</span>`:k}
		</a>
	`};customElements.define("cosmoz-tab-next",Y(Ht,{observedAttributes:["active","badge","href"]}));const at=(t,e,o)=>{const r=new Map;for(let n=e;n<=o;n++)r.set(t[n],n);return r},Gt=H(class extends K{constructor(t){if(super(t),t.type!==lt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,o){let r;o===void 0?o=e:e!==void 0&&(r=e);const n=[],i=[];let s=0;for(const a of t)n[s]=r?r(a,s):s,i[s]=o(a,s),s++;return{values:i,keys:n}}render(t,e,o){return this.dt(t,e,o).values}update(t,[e,o,r]){const n=wt(t),{values:i,keys:s}=this.dt(e,o,r);if(!Array.isArray(n))return this.ut=s,i;const a=this.ut??=[],u=[];let p,v,c=0,l=n.length-1,h=0,f=i.length-1;for(;c<=l&&h<=f;)if(n[c]===null)c++;else if(n[l]===null)l--;else if(a[c]===s[h])u[h]=$(n[c],i[h]),c++,h++;else if(a[l]===s[f])u[f]=$(n[l],i[f]),l--,f--;else if(a[c]===s[f])u[f]=$(n[c],i[f]),M(t,u[f+1],n[c]),c++,f--;else if(a[l]===s[h])u[h]=$(n[l],i[h]),M(t,n[c],n[l]),l--,h++;else if(p===void 0&&(p=at(s,h,f),v=at(a,c,l)),p.has(a[c]))if(p.has(a[l])){const b=v.get(s[h]),g=b!==void 0?n[b]:null;if(g===null){const y=M(t,n[c]);$(y,i[h]),u[h]=y}else u[h]=$(g,i[h]),M(t,n[c],g),n[b]=null;h++}else R(n[l]),l--;else R(n[c]),c++;for(;h<=f;){const b=M(t,u[f+1]);$(b,i[h]),u[h++]=b}for(;c<=l;){const b=n[c++];b!==null&&R(b)}return this.ut=s,yt(t,u),j}}),V=new WeakMap,Ct=H(class extends kt{render(t){return k}update(t,[e]){const o=e!==this.G;return o&&this.G!==void 0&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),k}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let o=V.get(e);o===void 0&&(o=new WeakMap,V.set(e,o)),o.get(this.G)!==void 0&&this.G.call(this.ht,void 0),o.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?V.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});const ut="important",Ot=" !"+ut,Pt=H(class extends K{constructor(t){if(super(t),t.type!==lt.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,o)=>{const r=t[o];return r==null?e:e+`${o=o.includes("-")?o:o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(t,[e]){const{style:o}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const r of this.ft)e[r]==null&&(this.ft.delete(r),r.includes("-")?o.removeProperty(r):o[r]=null);for(const r in e){const n=e[r];if(n!=null){this.ft.add(r);const i=typeof n=="string"&&n.endsWith(Ot);r.includes("-")||i?o.setProperty(r,i?n.slice(0,-11):n,i?ut:""):o[r]=n}}return j}});class qt extends Promise{constructor(e){const o={};super((r,n)=>Object.assign(o,{resolve:r,reject:n})),Object.assign(this,o),e?.(o.resolve,o.reject)}resolve=()=>{}}const ht={host:{position:"relative",display:"flex",overflow:"hidden"},slide:{position:"static",width:"100%",height:"100%"}},It=t=>{const{slide:e}=t,[o,r]=zt([]);return N(()=>{Object.assign(t.style,ht.host)},[]),X(()=>{if(e==null)return;const n={animationEnd$:new qt,...e};r((i=[])=>{const s=i.findIndex(({id:a,out:u})=>a===n.id&&u!==!0);return s!==-1?[...i.slice(0,s),n,...i.slice(s+1,i.length)]:[...i,n]})},[e]),N(async()=>{if(o.filter(u=>!u.out).length<2){const u=o[0];u&&requestAnimationFrame(()=>requestAnimationFrame(()=>u.animationEnd$.resolve()));return}const n=o[o.length-1],i=o[o.length-2],s=n.el,a=i.el;i.out=!0,s&&a&&await n.animation?.(s,a),r((u=[])=>u.filter(p=>p!==i))},[o]),{slides:o}},Bt=t=>w`<div
		${Ct(e=>Object.assign(t,{el:e}))}
		class="slide"
		style=${Pt(ht.slide)}
	>
		${ct([t],()=>t.content??t.render?.(t))}
	</div>`,Dt=({slides:t})=>ct([t],()=>Gt(t,({id:e})=>e,Bt)),Ft=t=>Dt(It(t));customElements.define("cosmoz-slider",Y(Ft,{useShadowDOM:!1}));const Nt=$t`
	:host {
		display: flex;
		flex-direction: column;
		height: 100%;
		position: relative;
		font-size: 14px;
	}

	.tabn {
		--cosmoz-tabs-bg-color: var(--cz-bg-color);
		box-shadow: none;
		position: relative;
		color: #959ba5;
	}
	.tabn-tab {
		flex: 0 1 0.000001px;
		flex: 0 1 min-content;
		padding: 11px 16px;
		background: inherit;
	}
	.tabn-tab:first-of-type {
		margin-left: auto;
	}
	.tabn-tab[active] {
		color: var(--cz-tabn-tab-active-color);
		box-shadow: none;
	}
	.tabn-heading {
		font-size: 17px;
		font-weight: 600;
		line-height: 25px;
		color: var(--cz-tabn-heading-color, var(--cz-text-secondary-color));
		margin-left: 18px;
		white-space: nowrap;
	}
	.tabn-stats {
		margin: 0 16px;
		color: var(--cz-text-color);
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
		background: var(--cz-queue-gutter-bg, var(--cz-header-bg-color, #fff));
		z-index: 2;
		position: relative;
	}
	.gutter::before {
		content: '';
		display: block;
		flex: none;
		background: var(--cz-queue-gutter-bg, var(--cz-header-bg-color, #bbb));
		width: 1px;
		margin-left: auto;
		pointer-events: none;
	}
	.gutter:hover::before {
		background: var(--cz-accent-color);
		box-shadow: -1px 0 0 1px var(--cz-accent-color);
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

	.button-nav {
		flex: none;
		width: 40px;
		height: 40px;
		cursor: pointer;
		outline: none;
		background-color: var(--cz-button-nav-bg, #fff);
		border-radius: 500px;
		border: solid 1px var(--cz-button-nav-border, #a4abae);
		font-size: 1.08em;
		letter-spacing: -0.01em;
		padding: 0 10px;
		text-transform: none;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		color: var(--cz-button-nav-color, #343434);
		font-weight: normal;
		margin: 0 0.29em;
	}

	.button-nav[disabled] {
		opacity: 0.5;
	}

	.button-nav:active {
		background: var(--cz-button-nav-active-bg, rgba(52, 52, 52, 0.4));
	}
	.button-nav.prev,
	.button-page.prev,
	.page-prev {
		transform: scaleX(-1);
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
`,T=w`
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="6"
		height="10"
		fill="none"
		viewBox="0 0 6 10"
	>
		<path stroke="currentColor" stroke-linecap="round" d="m1 9 4-4-4-4" />
	</svg>
`,Yt=({next:t,prev:e})=>w` <button
			class="button-nav prev"
			title="${A("Previous item")}"
			?disabled=${!e}
			slot="extra"
			@click=${e}
		>
			${T}
		</button>
		<button
			title="${A("Next item")}"
			class="button-nav next"
			?disabled=${!t}
			slot="extra"
			@click=${t}
		>
			${T}
		</button>`,Xt=t=>{if(!t)return k;const{pageNumber:e=-1,onPage:o}=t,r=t.totalPages??Math.ceil((t.totalAvailable??0)/(t.pageSize??0));return w` <div class="tabn-pagination">
		<button
			title="${A("Previous page")}"
			class="button-page page-prev"
			?disabled=${!(e>1)}
			@click=${n=>o(n.ctrlKey?1:e-1)}
		>
			${T}
		</button>
		<button
			title="${A("Next page")}"
			class="button-page page-next"
			?disabled=${!(e<r)}
			@click=${n=>o(n.ctrlKey?r:e+1)}
		>
			${T}
		</button>
	</div>`},Kt=({pagination:t,index:e,items:o,totalAvailable:r,nav:n})=>o.length<1?k:w`<div class="tabn-stats">
		${(()=>{if(t){const{pageNumber:a,pageSize:u}=t,p=u??o.length,v=((a??1)-1)*p+e+1,c=o.length<p?t.totalAvailable:(a??1)*p;return[v,c].join("-")}const i=n.index,s=n.items?.length;return[s!==o.length?[i<0?"?":i+1,s].join("/"):[e+1,o.length].join("-")]})()}
		${[A("of"),r??A("many")].join(" ")}
	</div>`;export{Yt as a,Nt as b,Xt as c,ct as i,Kt as r};
