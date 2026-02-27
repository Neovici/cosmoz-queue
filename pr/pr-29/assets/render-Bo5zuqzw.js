import{b as f,A as C}from"./iframe-DdbOukB6.js";import{a as Z,o as dt,d as tt,c as ut,n as bt,b as ft,g as v}from"./style-map-Dek4y-pN.js";import{c as F,b as I,f as B,a as pt,d as gt}from"./lit-haunted-gA9wOeRP.js";const ht=Z`
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
`,vt=t=>(I(()=>{t.setAttribute("role","tablist")},[]),f`
		<style>
			${ht}
		</style>
		<slot></slot>
	`);customElements.define("cosmoz-tabs-next",F(vt));const J=t=>typeof t=="object"&&t!=null&&t.nodeType===1,Q=(t,e)=>(!e||t!=="hidden")&&t!=="visible"&&t!=="clip",$=(t,e)=>{if(t.clientHeight<t.scrollHeight||t.clientWidth<t.scrollWidth){const o=getComputedStyle(t,null);return Q(o.overflowY,e)||Q(o.overflowX,e)||(a=>{const n=(r=>{if(!r.ownerDocument||!r.ownerDocument.defaultView)return null;try{return r.ownerDocument.defaultView.frameElement}catch{return null}})(a);return!!n&&(n.clientHeight<a.scrollHeight||n.clientWidth<a.scrollWidth)})(t)}return!1},U=(t,e,o,a,n,r,l,s)=>r<t&&l>e||r>t&&l<e?0:r<=t&&s<=o||l>=e&&s>=o?r-t-a:l>e&&s<o||r<t&&s>o?l-e+n:0,mt=t=>{const e=t.parentElement;return e??(t.getRootNode().host||null)},xt=(t,e)=>{var o,a,n,r;if(typeof document>"u")return[];const{scrollMode:l,boundary:s,skipOverflowHiddenElements:c}=e,p=typeof s=="function"?s:g=>g!==s;if(!J(t))throw new TypeError("Invalid target");const m=document.scrollingElement||document.documentElement,h=[];let d=t;for(;J(d)&&p(d);){if(d=mt(d),d===m){h.push(d);break}d!=null&&d===document.body&&$(d)&&!$(document.documentElement)||d!=null&&$(d,c)&&h.push(d)}const V=(a=(o=window.visualViewport)==null?void 0:o.width)!=null?a:innerWidth,S=(r=(n=window.visualViewport)==null?void 0:n.height)!=null?r:innerHeight,{scrollX:ot,scrollY:x}=window,{height:y,width:nt,top:E,right:D,bottom:N,left:W}=t.getBoundingClientRect(),{top:rt,right:it,left:at}=(g=>{const i=window.getComputedStyle(g);return{top:parseFloat(i.scrollMarginTop)||0,right:parseFloat(i.scrollMarginRight)||0,bottom:parseFloat(i.scrollMarginBottom)||0,left:parseFloat(i.scrollMarginLeft)||0}})(t);let w=E-rt,M=W+nt/2-at+it;const H=[];for(let g=0;g<h.length;g++){const i=h[g],{height:j,width:A,top:R,right:lt,bottom:L,left:Y}=i.getBoundingClientRect();if(l==="if-needed"&&E>=0&&W>=0&&N<=S&&D<=V&&(i===m&&!$(i)||E>=R&&N<=L&&W>=Y&&D<=lt))return H;const z=getComputedStyle(i),st=parseInt(z.borderLeftWidth,10),T=parseInt(z.borderTopWidth,10),ct=parseInt(z.borderRightWidth,10),q=parseInt(z.borderBottomWidth,10);let u=0,b=0;const X="offsetWidth"in i?i.offsetWidth-i.clientWidth-st-ct:0,K="offsetHeight"in i?i.offsetHeight-i.clientHeight-T-q:0,O="offsetWidth"in i?i.offsetWidth===0?0:A/i.offsetWidth:0,P="offsetHeight"in i?i.offsetHeight===0?0:j/i.offsetHeight:0;if(m===i)u=U(x,x+S,S,T,q,x+w,x+w+y,y),b=M-V/2,u=Math.max(0,u+x),b=Math.max(0,b+ot);else{u=U(R,L,j,T,q+K,w,w+y,y),b=M-(Y+A/2)+X/2;const{scrollLeft:_,scrollTop:G}=i;u=P===0?0:Math.max(0,Math.min(G+u/P,i.scrollHeight-j/P+K)),b=O===0?0:Math.max(0,Math.min(_+b/O,i.scrollWidth-A/O+X)),w+=G-u,M+=_-b}H.push({el:i,top:u,left:b})}return H},wt=Z`
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
`,yt=t=>{const{active:e,badge:o,href:a}=t;return I(()=>{t.getAttribute("tabindex")||t.setAttribute("tabindex","-1"),t.setAttribute("role","tab")},[]),B(()=>{const n=t;n.toggleAttribute("aria-selected",!!e),e&&xt(n,{boundary:n.parentElement}).forEach(({el:r,top:l,left:s})=>r.scroll({top:l,left:s,behavior:"smooth"}))},[e]),f`
		<style>
			${wt}
		</style>
		<a part="link" href=${dt(a)}>
			<slot id="iconSlot" name="icon"></slot>
			<slot id="contentSlot"></slot>
			${o?f`<span class="badge" part="badge">${o}</span>`:C}
		</a>
	`};customElements.define("cosmoz-tab-next",F(yt,{observedAttributes:["active","badge","href"]}));class zt extends Promise{constructor(e){const o={};super((a,n)=>Object.assign(o,{resolve:a,reject:n})),Object.assign(this,o),e?.(o.resolve,o.reject)}resolve=()=>{}}const et={host:{position:"relative",display:"flex",overflow:"hidden"},slide:{position:"static",width:"100%",height:"100%"}},$t=t=>{const{slide:e}=t,[o,a]=pt([]);return B(()=>{Object.assign(t.style,et.host)},[]),I(()=>{if(e==null)return;const n={animationEnd$:new zt,...e};a((r=[])=>{const l=r.findIndex(({id:s,out:c})=>s===n.id&&c!==!0);return l!==-1?[...r.slice(0,l),n,...r.slice(l+1,r.length)]:[...r,n]})},[e]),B(async()=>{if(o.filter(c=>!c.out).length<2){const c=o[0];c&&requestAnimationFrame(()=>requestAnimationFrame(()=>c.animationEnd$.resolve()));return}const n=o[o.length-1],r=o[o.length-2],l=n.el,s=r.el;r.out=!0,l&&s&&await n.animation?.(l,s),a((c=[])=>c.filter(p=>p!==r))},[o]),{slides:o}},kt=t=>f`<div
		${bt(e=>Object.assign(t,{el:e}))}
		class="slide"
		style=${ft(et.slide)}
	>
		${tt([t],()=>t.content??t.render?.(t))}
	</div>`,St=({slides:t})=>tt([t],()=>ut(t,({id:e})=>e,kt)),Et=t=>St($t(t));customElements.define("cosmoz-slider",F(Et,{useShadowDOM:!1}));const jt=gt`
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
`,k=f`
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="6"
		height="10"
		fill="none"
		viewBox="0 0 6 10"
	>
		<path stroke="currentColor" stroke-linecap="round" d="m1 9 4-4-4-4" />
	</svg>
`,At=({next:t,prev:e})=>f` <button
			class="button-nav prev"
			title="${v("Previous item")}"
			?disabled=${!e}
			slot="extra"
			@click=${e}
		>
			${k}
		</button>
		<button
			title="${v("Next item")}"
			class="button-nav next"
			?disabled=${!t}
			slot="extra"
			@click=${t}
		>
			${k}
		</button>`,Tt=t=>{if(!t)return C;const{pageNumber:e=-1,onPage:o}=t,a=t.totalPages??Math.ceil((t.totalAvailable??0)/(t.pageSize??0));return f` <div class="tabn-pagination">
		<button
			title="${v("Previous page")}"
			class="button-page page-prev"
			?disabled=${!(e>1)}
			@click=${n=>o(n.ctrlKey?1:e-1)}
		>
			${k}
		</button>
		<button
			title="${v("Next page")}"
			class="button-page page-next"
			?disabled=${!(e<a)}
			@click=${n=>o(n.ctrlKey?a:e+1)}
		>
			${k}
		</button>
	</div>`},qt=({pagination:t,index:e,items:o,totalAvailable:a,nav:n})=>o.length<1?C:f`<div class="tabn-stats">
		${(()=>{if(t){const{pageNumber:s,pageSize:c}=t,p=c??o.length,m=((s??1)-1)*p+e+1,h=o.length<p?t.totalAvailable:(s??1)*p;return[m,h].join("-")}const r=n.index,l=n.items?.length;return[l!==o.length?[r<0?"?":r+1,l].join("/"):[e+1,o.length].join("-")]})()}
		${[v("of"),a??v("many")].join(" ")}
	</div>`;export{At as a,jt as b,Tt as c,qt as r};
