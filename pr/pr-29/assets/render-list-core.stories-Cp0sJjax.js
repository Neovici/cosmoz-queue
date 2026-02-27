import{r as qr,E as re,A as H,p as Wr,b as h,w as Ke,u as Ur,j as Xr,h as Gr,D as _t}from"./iframe-DdbOukB6.js";import{i as _e,g as ln,a as V,b as de,u as Me,n as fn,m as ze,h as Lt,c as F,P as N,s as Yr,t as Kr,d as Zr,e as Qr}from"./cosmoz-i18next-6kG1MCjj.js";import{e as Ve,i as gn,t as he,a as j,n as Ce,o as A,f as bn,c as Rt,b as Ro,d as xn,g as T}from"./style-map-Dek4y-pN.js";import{u as k,h as Jr,H as ei,b as I,c as L,s as Do,d as q,a as M,e as ti,f as Ae,g as ni,i as vn,j as Dt,l as we}from"./lit-haunted-gA9wOeRP.js";import{u as $}from"./use-callback-DLndjOxO.js";import{_ as oi}from"./preload-helper-PPVm8Dsz.js";const ri=Math.abs,ii=(...t)=>t.some(e=>!!e),si=(...t)=>t.join(""),li=(t,e,n)=>t?e:n,ai=(t,e)=>e.indexOf(t)>-1,ci=(t,e)=>t===e,Mt=t=>!!(t==null||Array.isArray(t)&&t.length===0||typeof t=="string"&&t.length===0||typeof t=="number"&&t===0),ui=(t,e)=>typeof t!="number"?"":t.toFixed(e),di=Object.freeze(Object.defineProperty({__proto__:null,abs:ri,anyTrue:ii,concat:si,ifElse:li,inArray:ai,isEmpty:Mt,isEqual:ci,toFixed:ui},Symbol.toStringTag,{value:"Module"})),mi={isoBasic:/^\d{4}-\d{2}-\d{2}$/iu},pi=t=>typeof t=="string"&&mi.isoBasic.test(t)?new Date(`${t}T00:00`):new Date(t),hi=t=>{if(t==null)return;if(t instanceof Date&&!isNaN(t.getTime()))return t;if(!(typeof t=="number"||typeof t=="string"))return;const e=pi(t);if(!(e instanceof Date&&isNaN(e.getTime())))return e},Ne=t=>t<10?"0"+t:t,Vt=t=>t instanceof Date?t.getFullYear()+"-"+Ne(t.getMonth()+1)+"-"+Ne(t.getDate())+"T"+Ne(t.getHours())+":"+Ne(t.getMinutes())+":"+Ne(t.getSeconds())+"."+(t.getMilliseconds()/1e3).toFixed(3).slice(2,5):null,Be=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},fi=(t,e)=>{const n=class extends e{};return Object.assign(n.prototype,t),n},me=t=>{const e=k(()=>({}),[]);return k(()=>Object.assign(e,t),[e,...Object.values(t)])},gi=t=>typeof t=="object"&&t!==null&&Symbol.iterator in t;function Z(t){return t==null?[]:Array.isArray(t)?t:typeof t=="string"?[t]:gi(t)?Array.from(t):[t]}const Qt=(t,e=_e)=>n=>{const o=Z(t).map(e);return Z(n).filter(r=>!o.includes(e(r)))};function Te(t){return t?e=>e?.[t]:_e}const Mo=t=>{const e=Te(t);return n=>typeof n=="string"?n:e(n)?.toString()||""},zt=t=>e=>{const n={};for(const o in e)t.includes(o)&&(n[o]=e[o]);return n};function Nn(t,e,...n){return t?t(e,...n):e}const bi=t=>t==null||t===""||Number.isNaN(t)||Array.isArray(t)&&t.length<1,jn=t=>bi(t)&&ln("Required"),xi=Symbol("error"),vi=(t,e,n,o)=>{for(const r of Z(t)){const i=r(e,n,o);if(i)return i}},yi=(t,e)=>t.validate&&vi(t.validate,e[t.path??t.id],e,t),wi=(t,e)=>{const n=t.map(o=>({...o,error:yi(o,e)}));return{fields:n,invalid:n.some(({error:o})=>!!o)}},$i=(t,e)=>e?wi(t,e):{fields:t,invalid:!0},_i=(t,e,n,o)=>{o!=null&&Object.is(o[e],n)||t({[e]:n})},zi=t=>Array.isArray(t)?t.some(e=>e===jn):t===jn,Ci=t=>({field:e,value:n,values:o,onChange:r,...i})=>{const s=(a,u)=>(e.onChange??_i)(d=>r(d,u),e.path??e.id,Nn(e.value?.[1],a,o,e),o),l=V(e.mandatory??zi(e.validate),n,o,e)?" *":void 0;if(!V(e.hidden,n,o,e))return t({...e,...i,values:o,label:[V(e.label,n,o,e),l].join(""),placeholder:V(e.placeholder,n,o,e),disabled:V(e.disabled,n,o,e),warning:V(e.warning,n,o,e),prefix:V(e.prefix,n,o,e),suffix:V(e.suffix,n,o,e),value:Nn(e.value?.[0],n,o,e),onFocus:e.onFocus?.(s,n,o,e),onChange:s})};const Bt=Ve(class extends gn{constructor(t){if(super(t),t.type!==he.PROPERTY&&t.type!==he.ATTRIBUTE&&t.type!==he.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!qr(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===re||e===H)return e;const n=t.element,o=t.name;if(t.type===he.PROPERTY){if(e===n[o])return re}else if(t.type===he.BOOLEAN_ATTRIBUTE){if(!!e===n.hasAttribute(o))return re}else if(t.type===he.ATTRIBUTE&&n.getAttribute(o)===e+"")return re;return Wr(t),e}}),Ue=Jr(class extends ei{values;constructor(t,e,n,o){super(t,e),Object.assign(e.host,n),this.values=o}update(t,e){this.hasChanged(e)&&(this.values=e,Object.assign(this.state.host,t))}hasChanged(t=[]){return t.some((e,n)=>this.values[n]!==e)}}),Si=/([A-Z])/gu,be=(t,e,n)=>{t[e]=n,t.dispatchEvent(new CustomEvent(e.replace(Si,"-$1").toLowerCase()+"-changed",{detail:{value:n}}))},pe=(t,e,n=[e])=>{const o=de();I(()=>{be(o,t,e)},n)},Vo=t=>{const e=Me(void 0),n=$(a=>e.current=a,[]),o=t.shadowRoot,r=$(a=>t.dispatchEvent(new Event(a.type,{bubbles:a.bubbles})),[]),i=$(a=>be(t,"value",a.target.value),[]),s=$(a=>be(t,"focused",a.type==="focus"),[]),l=$(()=>e.current?.focus(),[]),c=$(()=>{const a=e.current?.checkValidity();return t.toggleAttribute("invalid",!a),a},[]);return Ue({focus:l,validate:c},[l,c]),I(()=>{const a=u=>{u.defaultPrevented||t.disabled||u.target.matches("input, textarea, label")||(u.preventDefault(),t.matches(":focus-within")||l())};return o.addEventListener("mousedown",a),()=>o.removeEventListener("mousedown",a)},[l]),{onChange:r,onFocus:s,onInput:i,onRef:n}},ki=t=>k(()=>{if(t==null)return;const e=new RegExp(t,"u");return n=>{!n.defaultPrevented&&n.data&&!e.test(n.data)&&n.preventDefault()}},[t]);function E(t,e,n){return t?e(t):n?.(t)}const yn=(t,{label:e,invalid:n,errorMessage:o})=>h`
		<div class="float" part="float">&nbsp;</div>
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${t}
				${E(e,()=>h`<label for="input" part="label">${e}</label>`)}
			</div>
			<slot name="suffix"></slot>
		</div>
		<div class="line" part="line"></div>
		${E(n&&o,()=>h`<div class="error" part="error">${o}</div>`)}
	`,Bo=["autocomplete","readonly","disabled","maxlength","invalid","no-label-float","always-float-label"],Ei=({placeholder:t,noLabelFloat:e,label:n})=>(e?n:void 0)||t||" ",Hn=j`
	.wrap {
		--contour-color: var(--focused-color);
		background: var(--focused-bg);
	}

	#input::placeholder,
	label {
		color: var(--focused-color);
		opacity: 1;
	}

	.line {
		border-bottom-color: var(--focused-color);
	}

	.line::before {
		transform: none;
		transition: 0.25s transform ease;
	}
`,wn=j`
	:host {
		--font-family: var(
			--cosmoz-input-font-family,
			var(--paper-font-subhead_-_font-family, inherit)
		);
		--font-size: var(
			--cosmoz-input-font-size,
			var(--paper-font-subhead_-_font-size, 16px)
		);
		--line-height: var(
			--cosmoz-input-line-height,
			var(--paper-font-subhead_-_line-height, 24px)
		);
		--label-scale: var(--cosmoz-input-label-scale, 0.75);
		--disabled-opacity: var(
			--cosmoz-input-disabled-opacity,
			var(--paper-input-container-disabled_-_opacity, 0.33)
		);
		--disabled-line-opacity: var(
			--cosmoz-input-disabled-line-opacity,
			var(--paper-input-container-underline-disabled_-_opacity, 1)
		);
		--invalid-color: var(
			--cosmoz-input-invalid-color,
			var(--paper-input-container-invalid-color, var(--error-color, #fc5c5b))
		);
		--bg: var(--cosmoz-input-background);
		--focused-bg: var(--cosmoz-input-focused-background, var(--bg));
		--color: var(--cosmoz-input-color, var(--secondary-text-color, #737373));
		--line-color: var(--cosmoz-input-line-color, var(--color));
		--focused-color: var(
			--cosmoz-input-focused-color,
			var(--primary-color, #3f51b5)
		);
		--float-display: var(--cosmoz-input-float-display, block);
		--contour-color: var(--line-color);
		--contour-size: var(--cosmoz-input-contour-size);
		--label-translate-y: var(--cosmoz-input-label-translate-y, 0%);
		--focused: var(--cosmoz-input-focused, none);

		display: block;
		padding: var(--cosmoz-input-padding, 8px 0);
		position: relative;
		max-height: var(--cosmoz-input-max-height);
		font-size: var(--font-size);
		line-height: var(--line-height);
		font-family: var(--font-family);
		caret-color: var(--focused-color);
	}

	:host([disabled]) {
		opacity: var(--disabled-opacity);
	}

	.float {
		line-height: calc(var(--line-height) * var(--label-scale));
		background-color: var(--cosmoz-input-float-bg-color, none);
		display: var(--float-display);
	}

	.wrap {
		padding: var(--cosmoz-input-wrap-padding, 0px);
		display: flex;
		align-items: center;
		position: relative;
		background: var(--bg);
		opacity: var(--cosmoz-input-opacity);
		border-radius: var(--cosmoz-input-border-radius);
		box-shadow: 0 0 0 var(--contour-size) var(--contour-color);
	}

	.control {
		flex: 1;
		position: relative;
	}

	#input {
		padding: 0;
		margin: 0;
		outline: none;
		border: none;
		width: 100%;
		max-width: 100%;
		display: block;
		background: transparent;
		line-height: inherit;
		font-size: inherit;
		font-family: inherit;
		resize: none;
	}

	label {
		position: absolute;
		top: 0;
		left: 0;
		width: var(--cosmoz-input-label-width, 100%);
		transition:
			transform 0.25s,
			width 0.25s;
		transform-origin: left top;
		color: var(--color);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		text-transform: var(--cosmoz-input-label-text-transform);
		font-weight: var(--cosmoz-input-label-font-weight);
		user-select: none;
	}

	.wrap:has(#input:not(:placeholder-shown)) {
		slot[name='suffix']::slotted(*),
		slot[name='prefix']::slotted(*) {
			transform: translateY(var(--label-translate-y));
		}
	}

	:host([always-float-label]) label,
	#input:not(:placeholder-shown) + label {
		transform: translateY(
				calc(var(--label-scale) * -100% + var(--label-translate-y))
			)
			scale(var(--label-scale));
		background-color: var(--cosmoz-input-floating-label-bg, var(--bg));
	}

	:host([always-float-label]) input,
	#input:not(:placeholder-shown) {
		transform: translateY(var(--label-translate-y));
	}

	:host([always-float-label]) {
		slot[name='suffix']::slotted(*),
		slot[name='prefix']::slotted(*) {
			transform: translateY(var(--label-translate-y));
		}
	}

	:host([no-label-float]) {
		.float,
		label {
			display: none;
		}

		#input:not(:placeholder-shown) {
			transform: translateY(0%);
		}

		.wrap:has(#input:not(:placeholder-shown)) slot[name='suffix']::slotted(*),
		.wrap:has(#input:not(:placeholder-shown)) slot[name='prefix']::slotted(*) {
			transform: translateY(0%);
		}
	}

	.line {
		padding-top: 1px;
		border-bottom: 1px solid var(--line-color);
		position: relative;
		display: var(--cosmoz-input-line-display, block);
	}

	.line::before {
		content: '';
		position: absolute;
		border-bottom: 2px solid transparent;
		border-bottom-color: inherit;
		left: 0;
		right: 0;
		top: 0;
		transform: scaleX(0);
		transform-origin: center center;
		z-index: 1;
	}

	:host([disabled]) .line {
		border-bottom-style: dashed;
		opacity: var(--disabled-line-opacity);
	}

	.error {
		font-size: 12px;
		line-height: 20px;
		overflow: hidden;
		text-overflow: clip;
		position: absolute;
		max-width: 100%;
	}

	:host([invalid]) {
		--contour-color: var(--invalid-color);
		caret-color: var(--invalid-color);
	}

	:host([invalid]) label,
	.error {
		color: var(--invalid-color);
	}
	:host([invalid]) .line {
		border-bottom-color: var(--invalid-color);
	}

	#input::-webkit-inner-spin-button {
		z-index: 1;
	}

	:host([no-spinner]) #input::-webkit-inner-spin-button {
		display: none;
	}
	:host([no-spinner]) #input {
		-moz-appearence: textfield;
	}

	:host([autosize]) {
		width: min-content;
	}
	:host([autosize]) #input {
		min-width: 2ch;
		width: var(--chars);
	}
	:host([autosize]) .control {
		max-width: 100%;
	}

	:host([autosize][type='number']) #input {
		--width: calc(var(--chars) + 0.25em);
	}
	:host([autosize][type='number']:not([no-spinner])) #input {
		width: calc(var(--width) + 15px);
		min-width: calc(2ch + 0.25em + 15px);
	}
	:host([autosize][type='number'][no-spinner]) #input {
		width: var(--width);
		min-width: calc(2ch + 0.25em);
	}
	:host([type='color']) .line {
		display: none;
	}

	:host(:focus-within) {
		${Hn}
	}
	@container style(--focused: focused) {
		${Hn}
	}
`,Ii=["type","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...Bo],Oi=t=>{const{type:e="text",pattern:n,allowedPattern:o,autocomplete:r,value:i,readonly:s,disabled:l,min:c,max:a,step:u,maxlength:d}=t,{onChange:p,onFocus:m,onInput:b,onRef:g}=Vo(t),v=ki(o);return yn(h`
			<input
				${Ce(g)}
				style="--chars: ${i?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${e}
				pattern=${A(n)}
				autocomplete=${A(r)}
				placeholder=${Ei(t)}
				?readonly=${s}
				?aria-disabled=${l}
				?disabled=${l}
				.value=${Bt(i??"")}
				maxlength=${A(d)}
				@beforeinput=${v}
				@input=${b}
				@change=${p}
				@focus=${m}
				@blur=${m}
				min=${A(c)}
				max=${A(a)}
				step=${A(u)}
			/>
		`,t)};customElements.define("cosmoz-input",L(Oi,{observedAttributes:Ii,styleSheets:[Do(wn)]}));const qn=t=>{t.style.height="",t.style.height=`${t.scrollHeight}px`},Fi=(t,e=0)=>{if(e>0){const n=t.getAttribute("rows")??"",o=t.style.height;t.style.height="",t.setAttribute("rows",e),t.style.maxHeight=t.getBoundingClientRect().height+"px",t.style.height=o,t.setAttribute("rows",n)}},Ai=t=>{const{value:e,maxRows:n}=t,o=k(()=>()=>t.shadowRoot.querySelector("#input"),[]);I(()=>Fi(o(),n),[n,o]),I(()=>qn(o()),[o,e]),I(()=>{const r=o(),i=new ResizeObserver(()=>requestAnimationFrame(()=>qn(r)));return i.observe(r),()=>i.unobserve(r)},[o])},Ti=["rows","placeholder",...Bo],Li=t=>{const{autocomplete:e,value:n,placeholder:o,readonly:r,disabled:i,rows:s,cols:l,maxlength:c}=t,{onChange:a,onFocus:u,onInput:d,onRef:p}=Vo(t);return Ai(t),yn(h`
			<textarea id="input" part="input"
				${Ce(p)}
				autocomplete=${A(e)}
				placeholder=${o||" "}
				rows=${s??1} cols=${A(l)}
				?readonly=${r} ?aria-disabled=${i} ?disabled=${i}
				.value=${Bt(n??"")} maxlength=${A(c)} @input=${d}
				@change=${a} @focus=${u} @blur=${u}>`,t)};customElements.define("cosmoz-textarea",L(Li,{observedAttributes:Ti,styleSheets:[Do(wn)]}));const Ri=t=>{const{label:e,value:n,disabled:o,error:r}=t,i=$(s=>t.dispatchEvent(new CustomEvent("change",{detail:s.target.checked})),[]);return h`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${Bt(!!n)}
			?disabled=${o}
			@change=${i}
		/>
		${E(e,()=>h`<label for="toggle">${e}</label>`)}
		<slot name="suffix"></slot>
		${E(r,s=>h`<div class="failure">${s}</div>`)} `},Di=q`
	.toggle {
		appearance: none;
		width: 35px;
		height: 18px;
		display: inline-block;
		position: relative;
		border-radius: 18px;
		overflow: hidden;
		outline: none;
		border: none;
		cursor: pointer;
		background: var(--cz-toggle-color, #101010);
		transition: background-color ease 0.25s;
		margin: 0;
	}
	.toggle::before {
		content: '';
		display: block;
		position: absolute;
		z-index: 2;
		width: 14px;
		height: 14px;
		background: var(--cz-toggle-thumb-color, #15b0d3);
		left: 2px;
		top: 2px;
		border-radius: 50%;
		transition: all cubic-bezier(0.3, 1.5, 0.7, 1) 0.25s;
	}
	.toggle:checked {
		background: var(--cz-toggle-checked-color, #66d7f0);
	}
	.toggle:checked::before {
		left: 19px;
	}
	.toggle + label {
		padding-left: 16px;
		font-size: 14px;
		line-height: 18px;
		cursor: pointer;
		user-select: none;
	}
	.toggle[disabled] {
		opacity: 0.6;
	}
`,Mi=q`
	:host {
		display: block;
	}

	:host > * {
		vertical-align: middle;
		line-height: 0px;
	}

	::slotted(*) {
		margin-left: 5px;
	}
`;customElements.define("cosmoz-toggle",L(Ri,{styleSheets:[Mi,Di],observedAttributes:["disabled"]}));const Wn=({slot:t,title:e,className:n,width:o="24",height:r="24",styles:i}={})=>h`
  <svg
    slot=${A(t)}
    class=${`announcement-icon ${n??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    width=${o}
    height=${r}
    style=${A(i)}
  >
    ${E(e,()=>Ke`<title>${e}</title>`)}
    <path
      d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z"
    />
  </svg>
`,Vi=({slot:t,title:e,className:n,width:o="24",height:r="24",styles:i}={})=>h`
	<svg
		slot=${A(t)}
		class=${`clear-icon ${n??""}`}
		viewBox="0 0 24 24"
		preserveAspectRatio="xMidYMid meet"
		focusable="false"
		width=${o}
		height=${r}
		style=${A(i)}
	>
		${E(e,()=>Ke`<title>${e}</title>`)}
		<path
			d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
		/>
	</svg>
`,Bi=({slot:t,title:e,className:n,width:o="24",height:r="24",styles:i}={})=>h`
  <svg
    slot=${A(t)}
    class=${`error-icon ${n??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    width=${o}
    height=${r}
    style=${A(i)}
  >
    ${E(e,()=>Ke`<title>${e}</title>`)}
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
    />
  </svg>
`,Pi=({slot:t,title:e,className:n,width:o="24",height:r="24",styles:i}={})=>h`
	<svg
		slot=${A(t)}
		class=${`help-outline-icon ${n??""}`}
		viewBox="0 0 24 24"
		preserveAspectRatio="xMidYMid meet"
		focusable="false"
		width=${o}
		height=${r}
		style=${A(i)}
	>
		${E(e,()=>Ke`<title>${e}</title>`)}
		<path
			fill="currentColor"
			d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"
		/>
	</svg>
`,Ni=({slot:t,title:e,className:n,width:o="24",height:r="24",styles:i}={})=>h`
	<svg
		slot=${A(t)}
		class=${`warning-icon ${n??""}`}
		viewBox="0 0 24 24"
		preserveAspectRatio="xMidYMid meet"
		focusable="false"
		width=${o}
		height=${r}
		style=${A(i)}
	>
		${E(e,()=>Ke`<title>${e}</title>`)}
		<path
			d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
			fill="currentColor"
		/>
	</svg>
`,ji=t=>E(t,()=>h`<span slot="prefix">${t}</span>`),Hi=t=>E(t,()=>h`<span slot="suffix">${t}</span>`),qi=(t,e="suffix")=>E(t,()=>Ni({slot:e,title:t,width:"22",height:"22",styles:"color: var(--paper-amber-500); vertical-align: middle"})),Wi=(t,e="suffix")=>E(t,()=>Pi({slot:e,title:t,width:"22",height:"22",styles:"color: var(--cz-text-color); vertical-align: middle; cursor: help"})),Ui=({prefix:t,suffix:e,warning:n,description:o})=>[ji(t),Hi(e),qi(n),Wi(o)],Xi=t=>{const{value:e,values:n,onFocus:o,onInput:r,...i}=t,{id:s,type:l="text",label:c,placeholder:a,noLabelFloat:u,alwaysFloatLabel:d,error:p,prefix:m,suffix:b,warning:g,allowedPattern:v,step:y,disabled:f,maxlength:w,min:x,max:_,autosize:z,noSpinner:C,title:S,description:O}=i;return h`<cosmoz-input
		class="input input-common input-${l}"
		name=${s}
		type=${l}
		?autosize=${z}
		?disabled=${f}
		?no-label-float=${u}
		?always-float-label=${d}
		?invalid=${!!p}
		?no-spinner=${!!C}
		.placeholder=${a}
		.errorMessage=${p}
		.allowedPattern=${v}
		.step=${y}
		.label=${c}
		.value=${e}
		title=${A((p??S)||void 0)}
		maxlength=${A(w)}
		min=${A(V(x,e,n,i))}
		max=${A(V(_,e,n,i))}
		@focus=${o}
		@input=${r}
		>${Ui({prefix:m,suffix:b,warning:g,description:O})}</cosmoz-input
	>`},Gi=Ci(({onChange:t,...e})=>Xi({...e,onInput:n=>t(n.target.value)})),Le=Math.min,X=Math.max,Ct=Math.round,nt=Math.floor,ie=t=>({x:t,y:t}),Yi={left:"right",right:"left",bottom:"top",top:"bottom"},Ki={start:"end",end:"start"};function Un(t,e,n){return X(t,Le(e,n))}function Pt(t,e){return typeof t=="function"?t(e):t}function Se(t){return t.split("-")[0]}function Nt(t){return t.split("-")[1]}function Po(t){return t==="x"?"y":"x"}function No(t){return t==="y"?"height":"width"}const Zi=new Set(["top","bottom"]);function fe(t){return Zi.has(Se(t))?"y":"x"}function jo(t){return Po(fe(t))}function Qi(t,e,n){n===void 0&&(n=!1);const o=Nt(t),r=jo(t),i=No(r);let s=r==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[i]>e.floating[i]&&(s=St(s)),[s,St(s)]}function Ji(t){const e=St(t);return[an(t),e,an(e)]}function an(t){return t.replace(/start|end/g,e=>Ki[e])}const Xn=["left","right"],Gn=["right","left"],es=["top","bottom"],ts=["bottom","top"];function ns(t,e,n){switch(t){case"top":case"bottom":return n?e?Gn:Xn:e?Xn:Gn;case"left":case"right":return e?es:ts;default:return[]}}function os(t,e,n,o){const r=Nt(t);let i=ns(Se(t),n==="start",o);return r&&(i=i.map(s=>s+"-"+r),e&&(i=i.concat(i.map(an)))),i}function St(t){return t.replace(/left|right|bottom|top/g,e=>Yi[e])}function rs(t){return{top:0,right:0,bottom:0,left:0,...t}}function is(t){return typeof t!="number"?rs(t):{top:t,right:t,bottom:t,left:t}}function kt(t){const{x:e,y:n,width:o,height:r}=t;return{width:o,height:r,top:n,left:e,right:e+o,bottom:n+r,x:e,y:n}}function Yn(t,e,n){let{reference:o,floating:r}=t;const i=fe(e),s=jo(e),l=No(s),c=Se(e),a=i==="y",u=o.x+o.width/2-r.width/2,d=o.y+o.height/2-r.height/2,p=o[l]/2-r[l]/2;let m;switch(c){case"top":m={x:u,y:o.y-r.height};break;case"bottom":m={x:u,y:o.y+o.height};break;case"right":m={x:o.x+o.width,y:d};break;case"left":m={x:o.x-r.width,y:d};break;default:m={x:o.x,y:o.y}}switch(Nt(e)){case"start":m[s]-=p*(n&&a?-1:1);break;case"end":m[s]+=p*(n&&a?-1:1);break}return m}async function ss(t,e){var n;e===void 0&&(e={});const{x:o,y:r,platform:i,rects:s,elements:l,strategy:c}=t,{boundary:a="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:p=!1,padding:m=0}=Pt(e,t),b=is(m),v=l[p?d==="floating"?"reference":"floating":d],y=kt(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement(v)))==null||n?v:v.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(l.floating)),boundary:a,rootBoundary:u,strategy:c})),f=d==="floating"?{x:o,y:r,width:s.floating.width,height:s.floating.height}:s.reference,w=await(i.getOffsetParent==null?void 0:i.getOffsetParent(l.floating)),x=await(i.isElement==null?void 0:i.isElement(w))?await(i.getScale==null?void 0:i.getScale(w))||{x:1,y:1}:{x:1,y:1},_=kt(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:f,offsetParent:w,strategy:c}):f);return{top:(y.top-_.top+b.top)/x.y,bottom:(_.bottom-y.bottom+b.bottom)/x.y,left:(y.left-_.left+b.left)/x.x,right:(_.right-y.right+b.right)/x.x}}const ls=async(t,e,n)=>{const{placement:o="bottom",strategy:r="absolute",middleware:i=[],platform:s}=n,l=i.filter(Boolean),c=await(s.isRTL==null?void 0:s.isRTL(e));let a=await s.getElementRects({reference:t,floating:e,strategy:r}),{x:u,y:d}=Yn(a,o,c),p=o,m={},b=0;for(let v=0;v<l.length;v++){var g;const{name:y,fn:f}=l[v],{x:w,y:x,data:_,reset:z}=await f({x:u,y:d,initialPlacement:o,placement:p,strategy:r,middlewareData:m,rects:a,platform:{...s,detectOverflow:(g=s.detectOverflow)!=null?g:ss},elements:{reference:t,floating:e}});u=w??u,d=x??d,m={...m,[y]:{...m[y],..._}},z&&b<=50&&(b++,typeof z=="object"&&(z.placement&&(p=z.placement),z.rects&&(a=z.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:r}):z.rects),{x:u,y:d}=Yn(a,p,c)),v=-1)}return{x:u,y:d,placement:p,strategy:r,middlewareData:m}},as=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:r,middlewareData:i,rects:s,initialPlacement:l,platform:c,elements:a}=e,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:p,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:g=!0,...v}=Pt(t,e);if((n=i.arrow)!=null&&n.alignmentOffset)return{};const y=Se(r),f=fe(l),w=Se(l)===l,x=await(c.isRTL==null?void 0:c.isRTL(a.floating)),_=p||(w||!g?[St(l)]:Ji(l)),z=b!=="none";!p&&z&&_.push(...os(l,g,b,x));const C=[l,..._],S=await c.detectOverflow(e,v),O=[];let R=((o=i.flip)==null?void 0:o.overflows)||[];if(u&&O.push(S[y]),d){const B=Qi(r,s,x);O.push(S[B[0]],S[B[1]])}if(R=[...R,{placement:r,overflows:O}],!O.every(B=>B<=0)){var Q,ce;const B=(((Q=i.flip)==null?void 0:Q.index)||0)+1,W=C[B];if(W&&(!(d==="alignment"?f!==fe(W):!1)||R.every(U=>fe(U.placement)===f?U.overflows[0]>0:!0)))return{data:{index:B,overflows:R},reset:{placement:W}};let ye=(ce=R.filter(D=>D.overflows[0]<=0).sort((D,U)=>D.overflows[1]-U.overflows[1])[0])==null?void 0:ce.placement;if(!ye)switch(m){case"bestFit":{var K;const D=(K=R.filter(U=>{if(z){const te=fe(U.placement);return te===f||te==="y"}return!0}).map(U=>[U.placement,U.overflows.filter(te=>te>0).reduce((te,Zt)=>te+Zt,0)]).sort((U,te)=>U[1]-te[1])[0])==null?void 0:K[0];D&&(ye=D);break}case"initialPlacement":ye=l;break}if(r!==ye)return{reset:{placement:ye}}}return{}}}},cs=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:r,platform:i}=e,{mainAxis:s=!0,crossAxis:l=!1,limiter:c={fn:y=>{let{x:f,y:w}=y;return{x:f,y:w}}},...a}=Pt(t,e),u={x:n,y:o},d=await i.detectOverflow(e,a),p=fe(Se(r)),m=Po(p);let b=u[m],g=u[p];if(s){const y=m==="y"?"top":"left",f=m==="y"?"bottom":"right",w=b+d[y],x=b-d[f];b=Un(w,b,x)}if(l){const y=p==="y"?"top":"left",f=p==="y"?"bottom":"right",w=g+d[y],x=g-d[f];g=Un(w,g,x)}const v=c.fn({...e,[m]:b,[p]:g});return{...v,data:{x:v.x-n,y:v.y-o,enabled:{[m]:s,[p]:l}}}}}},us=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var n,o;const{placement:r,rects:i,platform:s,elements:l}=e,{apply:c=()=>{},...a}=Pt(t,e),u=await s.detectOverflow(e,a),d=Se(r),p=Nt(r),m=fe(r)==="y",{width:b,height:g}=i.floating;let v,y;d==="top"||d==="bottom"?(v=d,y=p===(await(s.isRTL==null?void 0:s.isRTL(l.floating))?"start":"end")?"left":"right"):(y=d,v=p==="end"?"top":"bottom");const f=g-u.top-u.bottom,w=b-u.left-u.right,x=Le(g-u[v],f),_=Le(b-u[y],w),z=!e.middlewareData.shift;let C=x,S=_;if((n=e.middlewareData.shift)!=null&&n.enabled.x&&(S=w),(o=e.middlewareData.shift)!=null&&o.enabled.y&&(C=f),z&&!p){const R=X(u.left,0),Q=X(u.right,0),ce=X(u.top,0),K=X(u.bottom,0);m?S=b-2*(R!==0||Q!==0?R+Q:X(u.left,u.right)):C=g-2*(ce!==0||K!==0?ce+K:X(u.top,u.bottom))}await c({...e,availableWidth:S,availableHeight:C});const O=await s.getDimensions(l.floating);return b!==O.width||g!==O.height?{reset:{rects:!0}}:{}}}};function jt(){return typeof window<"u"}function Pe(t){return Ho(t)?(t.nodeName||"").toLowerCase():"#document"}function Y(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function le(t){var e;return(e=(Ho(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Ho(t){return jt()?t instanceof Node||t instanceof Y(t).Node:!1}function J(t){return jt()?t instanceof Element||t instanceof Y(t).Element:!1}function se(t){return jt()?t instanceof HTMLElement||t instanceof Y(t).HTMLElement:!1}function Kn(t){return!jt()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof Y(t).ShadowRoot}const ds=new Set(["inline","contents"]);function Ze(t){const{overflow:e,overflowX:n,overflowY:o,display:r}=ee(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!ds.has(r)}const ms=new Set(["table","td","th"]);function ps(t){return ms.has(Pe(t))}const hs=[":popover-open",":modal"];function Ht(t){return hs.some(e=>{try{return t.matches(e)}catch{return!1}})}const fs=["transform","translate","scale","rotate","perspective"],gs=["transform","translate","scale","rotate","perspective","filter"],bs=["paint","layout","strict","content"];function $n(t){const e=_n(),n=J(t)?ee(t):t;return fs.some(o=>n[o]?n[o]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||gs.some(o=>(n.willChange||"").includes(o))||bs.some(o=>(n.contain||"").includes(o))}function xs(t){let e=xe(t);for(;se(e)&&!Re(e);){if($n(e))return e;if(Ht(e))return null;e=xe(e)}return null}function _n(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const vs=new Set(["html","body","#document"]);function Re(t){return vs.has(Pe(t))}function ee(t){return Y(t).getComputedStyle(t)}function qt(t){return J(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function xe(t){if(Pe(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Kn(t)&&t.host||le(t);return Kn(e)?e.host:e}function qo(t){const e=xe(t);return Re(e)?t.ownerDocument?t.ownerDocument.body:t.body:se(e)&&Ze(e)?e:qo(e)}function Xe(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const r=qo(t),i=r===((o=t.ownerDocument)==null?void 0:o.body),s=Y(r);if(i){const l=cn(s);return e.concat(s,s.visualViewport||[],Ze(r)?r:[],l&&n?Xe(l):[])}return e.concat(r,Xe(r,[],n))}function cn(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Wo(t){const e=ee(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const r=se(t),i=r?t.offsetWidth:n,s=r?t.offsetHeight:o,l=Ct(n)!==i||Ct(o)!==s;return l&&(n=i,o=s),{width:n,height:o,$:l}}function zn(t){return J(t)?t:t.contextElement}function Ee(t){const e=zn(t);if(!se(e))return ie(1);const n=e.getBoundingClientRect(),{width:o,height:r,$:i}=Wo(e);let s=(i?Ct(n.width):n.width)/o,l=(i?Ct(n.height):n.height)/r;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const ys=ie(0);function Uo(t){const e=Y(t);return!_n()||!e.visualViewport?ys:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function ws(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==Y(t)?!1:e}function ke(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const r=t.getBoundingClientRect(),i=zn(t);let s=ie(1);e&&(o?J(o)&&(s=Ee(o)):s=Ee(t));const l=ws(i,n,o)?Uo(i):ie(0);let c=(r.left+l.x)/s.x,a=(r.top+l.y)/s.y,u=r.width/s.x,d=r.height/s.y;if(i){const p=Y(i),m=o&&J(o)?Y(o):o;let b=p,g=cn(b);for(;g&&o&&m!==b;){const v=Ee(g),y=g.getBoundingClientRect(),f=ee(g),w=y.left+(g.clientLeft+parseFloat(f.paddingLeft))*v.x,x=y.top+(g.clientTop+parseFloat(f.paddingTop))*v.y;c*=v.x,a*=v.y,u*=v.x,d*=v.y,c+=w,a+=x,b=Y(g),g=cn(b)}}return kt({width:u,height:d,x:c,y:a})}function Wt(t,e){const n=qt(t).scrollLeft;return e?e.left+n:ke(le(t)).left+n}function Xo(t,e){const n=t.getBoundingClientRect(),o=n.left+e.scrollLeft-Wt(t,n),r=n.top+e.scrollTop;return{x:o,y:r}}function $s(t){let{elements:e,rect:n,offsetParent:o,strategy:r}=t;const i=r==="fixed",s=le(o),l=e?Ht(e.floating):!1;if(o===s||l&&i)return n;let c={scrollLeft:0,scrollTop:0},a=ie(1);const u=ie(0),d=se(o);if((d||!d&&!i)&&((Pe(o)!=="body"||Ze(s))&&(c=qt(o)),se(o))){const m=ke(o);a=Ee(o),u.x=m.x+o.clientLeft,u.y=m.y+o.clientTop}const p=s&&!d&&!i?Xo(s,c):ie(0);return{width:n.width*a.x,height:n.height*a.y,x:n.x*a.x-c.scrollLeft*a.x+u.x+p.x,y:n.y*a.y-c.scrollTop*a.y+u.y+p.y}}function _s(t){return Array.from(t.getClientRects())}function zs(t){const e=le(t),n=qt(t),o=t.ownerDocument.body,r=X(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),i=X(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+Wt(t);const l=-n.scrollTop;return ee(o).direction==="rtl"&&(s+=X(e.clientWidth,o.clientWidth)-r),{width:r,height:i,x:s,y:l}}const Zn=25;function Cs(t,e){const n=Y(t),o=le(t),r=n.visualViewport;let i=o.clientWidth,s=o.clientHeight,l=0,c=0;if(r){i=r.width,s=r.height;const u=_n();(!u||u&&e==="fixed")&&(l=r.offsetLeft,c=r.offsetTop)}const a=Wt(o);if(a<=0){const u=o.ownerDocument,d=u.body,p=getComputedStyle(d),m=u.compatMode==="CSS1Compat"&&parseFloat(p.marginLeft)+parseFloat(p.marginRight)||0,b=Math.abs(o.clientWidth-d.clientWidth-m);b<=Zn&&(i-=b)}else a<=Zn&&(i+=a);return{width:i,height:s,x:l,y:c}}const Ss=new Set(["absolute","fixed"]);function ks(t,e){const n=ke(t,!0,e==="fixed"),o=n.top+t.clientTop,r=n.left+t.clientLeft,i=se(t)?Ee(t):ie(1),s=t.clientWidth*i.x,l=t.clientHeight*i.y,c=r*i.x,a=o*i.y;return{width:s,height:l,x:c,y:a}}function Qn(t,e,n){let o;if(e==="viewport")o=Cs(t,n);else if(e==="document")o=zs(le(t));else if(J(e))o=ks(e,n);else{const r=Uo(t);o={x:e.x-r.x,y:e.y-r.y,width:e.width,height:e.height}}return kt(o)}function Go(t,e){const n=xe(t);return n===e||!J(n)||Re(n)?!1:ee(n).position==="fixed"||Go(n,e)}function Es(t,e){const n=e.get(t);if(n)return n;let o=Xe(t,[],!1).filter(l=>J(l)&&Pe(l)!=="body"),r=null;const i=ee(t).position==="fixed";let s=i?xe(t):t;for(;J(s)&&!Re(s);){const l=ee(s),c=$n(s);!c&&l.position==="fixed"&&(r=null),(i?!c&&!r:!c&&l.position==="static"&&!!r&&Ss.has(r.position)||Ze(s)&&!c&&Go(t,s))?o=o.filter(u=>u!==s):r=l,s=xe(s)}return e.set(t,o),o}function Is(t){let{element:e,boundary:n,rootBoundary:o,strategy:r}=t;const s=[...n==="clippingAncestors"?Ht(e)?[]:Es(e,this._c):[].concat(n),o],l=s[0],c=s.reduce((a,u)=>{const d=Qn(e,u,r);return a.top=X(d.top,a.top),a.right=Le(d.right,a.right),a.bottom=Le(d.bottom,a.bottom),a.left=X(d.left,a.left),a},Qn(e,l,r));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function Os(t){const{width:e,height:n}=Wo(t);return{width:e,height:n}}function Fs(t,e,n){const o=se(e),r=le(e),i=n==="fixed",s=ke(t,!0,i,e);let l={scrollLeft:0,scrollTop:0};const c=ie(0);function a(){c.x=Wt(r)}if(o||!o&&!i)if((Pe(e)!=="body"||Ze(r))&&(l=qt(e)),o){const m=ke(e,!0,i,e);c.x=m.x+e.clientLeft,c.y=m.y+e.clientTop}else r&&a();i&&!o&&r&&a();const u=r&&!o&&!i?Xo(r,l):ie(0),d=s.left+l.scrollLeft-c.x-u.x,p=s.top+l.scrollTop-c.y-u.y;return{x:d,y:p,width:s.width,height:s.height}}function Jt(t){return ee(t).position==="static"}function Jn(t,e){if(!se(t)||ee(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return le(t)===n&&(n=n.ownerDocument.body),n}function Yo(t,e){const n=Y(t);if(Ht(t))return n;if(!se(t)){let r=xe(t);for(;r&&!Re(r);){if(J(r)&&!Jt(r))return r;r=xe(r)}return n}let o=Jn(t,e);for(;o&&ps(o)&&Jt(o);)o=Jn(o,e);return o&&Re(o)&&Jt(o)&&!$n(o)?n:o||xs(t)||n}const As=async function(t){const e=this.getOffsetParent||Yo,n=this.getDimensions,o=await n(t.floating);return{reference:Fs(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function Ts(t){return ee(t).direction==="rtl"}const Ls={convertOffsetParentRelativeRectToViewportRelativeRect:$s,getDocumentElement:le,getClippingRect:Is,getOffsetParent:Yo,getElementRects:As,getClientRects:_s,getDimensions:Os,getScale:Ee,isElement:J,isRTL:Ts};function Ko(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function Rs(t,e){let n=null,o;const r=le(t);function i(){var l;clearTimeout(o),(l=n)==null||l.disconnect(),n=null}function s(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),i();const a=t.getBoundingClientRect(),{left:u,top:d,width:p,height:m}=a;if(l||e(),!p||!m)return;const b=nt(d),g=nt(r.clientWidth-(u+p)),v=nt(r.clientHeight-(d+m)),y=nt(u),w={rootMargin:-b+"px "+-g+"px "+-v+"px "+-y+"px",threshold:X(0,Le(1,c))||1};let x=!0;function _(z){const C=z[0].intersectionRatio;if(C!==c){if(!x)return s();C?s(!1,C):o=setTimeout(()=>{s(!1,1e-7)},1e3)}C===1&&!Ko(a,t.getBoundingClientRect())&&s(),x=!1}try{n=new IntersectionObserver(_,{...w,root:r.ownerDocument})}catch{n=new IntersectionObserver(_,w)}n.observe(t)}return s(!0),i}function Ds(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:r=!0,ancestorResize:i=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=o,a=zn(t),u=r||i?[...a?Xe(a):[],...Xe(e)]:[];u.forEach(y=>{r&&y.addEventListener("scroll",n,{passive:!0}),i&&y.addEventListener("resize",n)});const d=a&&l?Rs(a,n):null;let p=-1,m=null;s&&(m=new ResizeObserver(y=>{let[f]=y;f&&f.target===a&&m&&(m.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var w;(w=m)==null||w.observe(e)})),n()}),a&&!c&&m.observe(a),m.observe(e));let b,g=c?ke(t):null;c&&v();function v(){const y=ke(t);g&&!Ko(g,y)&&n(),g=y,b=requestAnimationFrame(v)}return n(),()=>{var y;u.forEach(f=>{r&&f.removeEventListener("scroll",n),i&&f.removeEventListener("resize",n)}),d?.(),(y=m)==null||y.disconnect(),m=null,c&&cancelAnimationFrame(b)}}const Ms=cs,Vs=as,Zo=us,Bs=(t,e,n)=>{const o=new Map,r={platform:Ls,...n},i={...r.platform,_c:o};return ls(t,e,{...r,platform:i})},Cn=[Vs({fallbackAxisSideDirection:"start",crossAxis:!1}),Ms()],Qo=({placement:t="bottom-start",strategy:e,middleware:n=Cn}={})=>{const[o,r]=M(),[i,s]=M(),[l,c]=M();return I(()=>{if(!o||!(i instanceof HTMLElement)){c(void 0);return}return Ds(o,i,()=>Bs(o,i,{placement:t,strategy:e,middleware:n}).then(c))},[o,i,t,e,n]),{setReference:r,setFloating:s,styles:k(()=>l?{left:`${l.x}px`,top:`${l.y}px`}:{},[l?.x,l?.y])}};class Ut extends Event{constructor(e){super(Ut.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}}Ut.eventName="rangeChanged";class Xt extends Event{constructor(e){super(Xt.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}}Xt.eventName="visibilityChanged";class Gt extends Event{constructor(){super(Gt.eventName,{bubbles:!1})}}Gt.eventName="unpinned";class Ps{constructor(e){this._element=null;const n=e??window;this._node=n,e&&(this._element=e)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}}class Ns extends Ps{constructor(e,n){super(n),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);const o=this._node;this._originalScrollTo=o.scrollTo,this._originalScrollBy=o.scrollBy,this._originalScroll=o.scroll,this._attach(e)}get _destination(){return this.__destination}get scrolling(){return this._destination!==null}scrollTo(e,n){const o=typeof e=="number"&&typeof n=="number"?{left:e,top:n}:e;this._scrollTo(o)}scrollBy(e,n){const o=typeof e=="number"&&typeof n=="number"?{left:e,top:n}:e;o.top!==void 0&&(o.top+=this.scrollTop),o.left!==void 0&&(o.left+=this.scrollLeft),this._scrollTo(o)}_nativeScrollTo(e){this._originalScrollTo.bind(this._element||window)(e)}_scrollTo(e,n=null,o=null){this._end!==null&&this._end(),e.behavior==="smooth"?(this._setDestination(e),this._retarget=n,this._end=o):this._resetScrollState(),this._nativeScrollTo(e)}_setDestination(e){let{top:n,left:o}=e;return n=n===void 0?void 0:Math.max(0,Math.min(n,this.maxScrollTop)),o=o===void 0?void 0:Math.max(0,Math.min(o,this.maxScrollLeft)),this._destination!==null&&o===this._destination.left&&n===this._destination.top?!1:(this.__destination={top:n,left:o,behavior:"smooth"},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(e){this._destination&&this._setDestination(e)&&this._nativeScrollTo(this._destination)}managedScrollTo(e,n,o){return this._scrollTo(e,n,o),this._updateManagedScrollTo}correctScrollError(e){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(e),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(this._destination!==null){const{scrollTop:e,scrollLeft:n}=this;let{top:o,left:r}=this._destination;o=Math.min(o||0,this.maxScrollTop),r=Math.min(r||0,this.maxScrollLeft);const i=Math.abs(o-e),s=Math.abs(r-n);i<1&&s<1&&(this._end&&this._end(),this._resetScrollState())}}detach(e){return this._clients.delete(e),this._clients.size===0&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener("scroll",this._checkForArrival)),null}_attach(e){this._clients.add(e),this._clients.size===1&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener("scroll",this._checkForArrival))}}let eo=typeof window<"u"?window.ResizeObserver:void 0;const un=Symbol("virtualizerRef"),ot="virtualizer-sizer";let to;class js{constructor(e){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!e)throw new Error("Virtualizer constructor requires a configuration object");if(e.hostElement)this._init(e);else throw new Error('Virtualizer configuration requires the "hostElement" property')}set items(e){Array.isArray(e)&&e!==this._items&&(this._itemsChanged=!0,this._items=e,this._schedule(this._updateLayout))}_init(e){this._isScroller=!!e.scroller,this._initHostElement(e);const n=e.layout||{};this._layoutInitialized=this._initLayout(n)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new eo(()=>this._hostElementSizeChanged()),this._childrenRO=new eo(this._childrenSizeChanged.bind(this))}_initHostElement(e){const n=this._hostElement=e.hostElement;this._applyVirtualizerStyles(),n[un]=this}connected(){this._initObservers();const e=this._isScroller;this._clippingAncestors=Ws(this._hostElement,e),this._scrollerController=new Ns(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener("scroll",this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(e=>{e.addEventListener("scroll",this,this._scrollEventListenerOptions),this._scrollEventListeners.push(e),this._hostElementRO.observe(e)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(e=>this._childrenRO.observe(e)),this._scrollEventListeners.forEach(e=>e.addEventListener("scroll",this,this._scrollEventListenerOptions))}disconnected(){this._scrollEventListeners.forEach(e=>e.removeEventListener("scroll",this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],this._scrollerController?.detach(this),this._scrollerController=null,this._mutationObserver?.disconnect(),this._mutationObserver=null,this._hostElementRO?.disconnect(),this._hostElementRO=null,this._childrenRO?.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise("disconnected"),this._connected=!1}_applyVirtualizerStyles(){const n=this._hostElement.style;n.display=n.display||"block",n.position=n.position||"relative",n.contain=n.contain||"size layout",this._isScroller&&(n.overflow=n.overflow||"auto",n.minHeight=n.minHeight||"150px")}_getSizer(){const e=this._hostElement;if(!this._sizer){let n=e.querySelector(`[${ot}]`);n||(n=document.createElement("div"),n.setAttribute(ot,""),e.appendChild(n)),Object.assign(n.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),n.textContent="&nbsp;",n.setAttribute(ot,""),this._sizer=n}return this._sizer}async updateLayoutConfig(e){await this._layoutInitialized;const n=e.type||to;if(typeof n=="function"&&this._layout instanceof n){const o={...e};return delete o.type,this._layout.config=o,!0}return!1}async _initLayout(e){let n,o;if(typeof e.type=="function"){o=e.type;const r={...e};delete r.type,n=r}else n=e;o===void 0&&(to=o=(await oi(()=>import("./flow-BqIEBwW6.js"),[],import.meta.url)).FlowLayout),this._layout=new o(r=>this._handleLayoutMessage(r),n),this._layout.measureChildren&&typeof this._layout.updateItemSizes=="function"&&(typeof this._layout.measureChildren=="function"&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){this._benchmarkStart===null&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(this._benchmarkStart!==null){const e=window.performance.now(),n=e-this._benchmarkStart,r=performance.getEntriesByName("uv-virtualizing","measure").filter(i=>i.startTime>=this._benchmarkStart&&i.startTime<e).reduce((i,s)=>i+s.duration,0);return this._benchmarkStart=null,{timeElapsed:n,virtualizationTime:r}}return null}_measureChildren(){const e={},n=this._children,o=this._measureChildOverride||this._measureChild;for(let r=0;r<n.length;r++){const i=n[r],s=this._first+r;(this._itemsChanged||this._toBeMeasured.has(i))&&(e[s]=o.call(this,i,this._items[s]))}this._childMeasurements=e,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(e){const{width:n,height:o}=e.getBoundingClientRect();return Object.assign({width:n,height:o},Hs(e))}async _schedule(e){this._scheduled.has(e)||(this._scheduled.add(e),await Promise.resolve(),this._scheduled.delete(e),e.call(this))}async _updateDOM(e){this._scrollSize=e.scrollSize,this._adjustRange(e.range),this._childrenPos=e.childPositions,this._scrollError=e.scrollError||null;const{_rangeChanged:n,_itemsChanged:o}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(n||o)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(e=>this._childrenRO.observe(e)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),this._childMeasurements!==null&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_handleScrollEvent(){if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch(e){console.warn("Error measuring performance data: ",e)}window.performance.mark("uv-start")}this._scrollerController.correctingScrollError===!1&&this._layout?.unpin(),this._schedule(this._updateLayout)}handleEvent(e){e.type==="scroll"?(e.currentTarget===window||this._clippingAncestors.includes(e.currentTarget))&&this._handleScrollEvent():console.warn("event not handled",e)}_handleLayoutMessage(e){e.type==="stateChanged"?this._updateDOM(e):e.type==="visibilityChanged"?(this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._notifyVisibility()):e.type==="unpinned"&&this._hostElement.dispatchEvent(new Gt)}get _children(){const e=[];let n=this._hostElement.firstElementChild;for(;n;)n.hasAttribute(ot)||e.push(n),n=n.nextElementSibling;return e}_updateView(){const e=this._hostElement,n=this._scrollerController?.element,o=this._layout;if(e&&n&&o){let r,i,s,l;const c=e.getBoundingClientRect();r=0,i=0,s=window.innerHeight,l=window.innerWidth;const a=this._clippingAncestors.map(y=>y.getBoundingClientRect());a.unshift(c);for(const y of a)r=Math.max(r,y.top),i=Math.max(i,y.left),s=Math.min(s,y.bottom),l=Math.min(l,y.right);const u=n.getBoundingClientRect(),d={left:c.left-u.left,top:c.top-u.top},p={width:n.scrollWidth,height:n.scrollHeight},m=r-c.top+e.scrollTop,b=i-c.left+e.scrollLeft,g=Math.max(0,s-r),v=Math.max(0,l-i);o.viewportSize={width:v,height:g},o.viewportScroll={top:m,left:b},o.totalScrollSize=p,o.offsetWithinScroller=d}}_sizeHostElement(e){const o=e&&e.width!==null?Math.min(82e5,e.width):0,r=e&&e.height!==null?Math.min(82e5,e.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${o}px, ${r}px)`;else{const i=this._hostElement.style;i.minWidth=o?`${o}px`:"100%",i.minHeight=r?`${r}px`:"100%"}}_positionChildren(e){e&&e.forEach(({top:n,left:o,width:r,height:i,xOffset:s,yOffset:l},c)=>{const a=this._children[c-this._first];a&&(a.style.position="absolute",a.style.boxSizing="border-box",a.style.transform=`translate(${o}px, ${n}px)`,r!==void 0&&(a.style.width=r+"px"),i!==void 0&&(a.style.height=i+"px"),a.style.left=s===void 0?null:s+"px",a.style.top=l===void 0?null:l+"px")})}async _adjustRange(e){const{_first:n,_last:o,_firstVisible:r,_lastVisible:i}=this;this._first=e.first,this._last=e.last,this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==n||this._last!==o,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==r||this._lastVisible!==i}_correctScrollError(){if(this._scrollError){const{scrollTop:e,scrollLeft:n}=this._scrollerController,{top:o,left:r}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:e-o,left:n-r})}}element(e){return e===1/0&&(e=this._items.length-1),this._items?.[e]===void 0?void 0:{scrollIntoView:(n={})=>this._scrollElementIntoView({...n,index:e})}}_scrollElementIntoView(e){if(e.index>=this._first&&e.index<=this._last)this._children[e.index-this._first].scrollIntoView(e);else if(e.index=Math.min(e.index,this._items.length-1),e.behavior==="smooth"){const n=this._layout.getScrollIntoViewCoordinates(e),{behavior:o}=e;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(n,{behavior:o}),()=>this._layout.getScrollIntoViewCoordinates(e),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=e}else this._layout.pin=e}_checkScrollIntoViewTarget(e){const{index:n}=this._scrollIntoViewTarget||{};n&&e?.has(n)&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new Ut({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new Xt({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||(this._layoutCompletePromise=new Promise((e,n)=>{this._layoutCompleteResolver=e,this._layoutCompleteRejecter=n})),this._layoutCompletePromise}_rejectLayoutCompletePromise(e){this._layoutCompleteRejecter!==null&&this._layoutCompleteRejecter(e),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&this._pendingLayoutComplete===null&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){this._layoutCompleteResolver!==null&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(e){if(this._layout?.measureChildren){for(const n of e)this._toBeMeasured.set(n.target,n.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}}function Hs(t){const e=window.getComputedStyle(t);return{marginTop:rt(e.marginTop),marginRight:rt(e.marginRight),marginBottom:rt(e.marginBottom),marginLeft:rt(e.marginLeft)}}function rt(t){const e=t?parseFloat(t):NaN;return Number.isNaN(e)?0:e}function no(t){if(t.assignedSlot!==null)return t.assignedSlot;if(t.parentElement!==null)return t.parentElement;const e=t.parentNode;return e&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host||null}function qs(t,e=!1){const n=[];let o=e?t:no(t);for(;o!==null;)n.push(o),o=no(o);return n}function Ws(t,e=!1){let n=!1;return qs(t,e).filter(o=>{if(n)return!1;const r=getComputedStyle(o);return n=r.position==="fixed",r.overflow!=="visible"})}const Us=t=>t,Xs=(t,e)=>h`${e}: ${JSON.stringify(t,null,2)}`;class Gs extends bn{constructor(e){if(super(e),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(n,o)=>Xs(n,o+this._first),this._keyFunction=(n,o)=>Us(n,o+this._first),this._items=[],e.type!==he.CHILD)throw new Error("The virtualize directive can only be used in child expressions")}render(e){e&&this._setFunctions(e);const n=[];if(this._first>=0&&this._last>=this._first)for(let o=this._first;o<=this._last;o++)n.push(this._items[o]);return Rt(n,this._keyFunction,this._renderItem)}update(e,[n]){this._setFunctions(n);const o=this._items!==n.items;return this._items=n.items||[],this._virtualizer?this._updateVirtualizerConfig(e,n):this._initialize(e,n),o?re:this.render()}async _updateVirtualizerConfig(e,n){if(!await this._virtualizer.updateLayoutConfig(n.layout||{})){const r=e.parentNode;this._makeVirtualizer(r,n)}this._virtualizer.items=this._items}_setFunctions(e){const{renderItem:n,keyFunction:o}=e;n&&(this._renderItem=(r,i)=>n(r,i+this._first)),o&&(this._keyFunction=(r,i)=>o(r,i+this._first))}_makeVirtualizer(e,n){this._virtualizer&&this._virtualizer.disconnected();const{layout:o,scroller:r,items:i}=n;this._virtualizer=new js({hostElement:e,layout:o,scroller:r}),this._virtualizer.items=i,this._virtualizer.connected()}_initialize(e,n){const o=e.parentNode;o&&o.nodeType===1&&(o.addEventListener("rangeChanged",r=>{this._first=r.first,this._last=r.last,this.setValue(this.render())}),this._makeVirtualizer(o,n))}disconnected(){this._virtualizer?.disconnected()}reconnected(){this._virtualizer?.connected()}}const Jo=Ve(Gs),er=(t=HTMLElement)=>class extends t{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent("connected"))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent("disconnected"))}},Ys=(t,e)=>{if(!t||!e)return;const n=Object.keys(e);return Object.fromEntries(Object.keys(t).flatMap(o=>n.includes(o)?[]:[[o,void 0]]))};class Ks extends gn{_props;render(e){return re}update(e,[n]){return this._props!==n&&Object.assign(e.element,Ys(this._props,n),this._props=n),re}}const Zs=Ve(Ks),Qs=t=>{const e=de(),n=k(()=>new CSSStyleSheet,[]);I(()=>{e.shadowRoot.adoptedStyleSheets=[...e.shadowRoot.adoptedStyleSheets,n]},[]),I(()=>{n.replaceSync(t)},[t])},Js="data:image/svg+xml,%3Csvg width='11' height='8' viewBox='0 0 11 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.5 1L5.20039 7.04766L1.66348 3.46152' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",el=q`
	:host {
		position: fixed;
		z-index: 1000;
		font-family: var(--paper-font-subhead_-_font-family, inherit);
		background: var(
			--cosmoz-autocomplete-listbox-bg,
			rgba(255, 255, 255, 0.75)
		);
		min-width: 50px;
		backdrop-filter: blur(16px) saturate(180%);
		-webkit-backdrop-filter: blur(16px) saturate(180%);
		border-radius: 6px;
		box-shadow:
			0 4px 24px 0 rgba(0, 0, 0, 0.18),
			0 1.5px 6px 0 rgba(0, 0, 0, 0.1);
		text-transform: var(--cosmoz-autocomplete-listbox-text-transform, initial);
		overflow: hidden;
		transition:
			opacity 150ms ease-in-out,
			transform 100ms ease-in-out;
	}
	:host(:popover-open) {
		box-sizing: border-box;
		display: block;
		margin: 0;
		border: 1px solid rgba(200, 200, 200, 0.25);

		opacity: 1;
		transform: translateY(0);

		@starting-style {
			opacity: 0;
			transform: translateY(-50px);
		}
	}
	:host([popover]) {
		padding: 0;
	}
	.items {
		position: relative;
		overflow-y: auto;
		contain: layout paint !important;
	}
	.item {
		font-size: var(--cosmoz-autocomplete-listbox-font-size, 13px);
		font-weight: var(--cosmoz-autocomplete-listbox-font-weight, 400);
		padding: 0 22px;
		box-sizing: border-box;
		width: 100%;
		cursor: pointer;
		text-overflow: ellipsis;
		white-space: nowrap;
		transition: background 0.2s;
		color: var(--cosmoz-listbox-color, #101010);
		overflow: hidden;
	}

	.sizer {
		position: relative;
		visibility: hidden;
		opacity: 0;
		pointer-events: none;
		z-index: -1;
		height: 0;
		width: auto;
		padding: 0 20px;
		overflow: hidden;
		max-width: inherit;
		font-size: 14px;
	}

	:host(:not([multi])) .item[aria-selected] {
		background: var(--cosmoz-listbox-single-selection-color, #dadada);
	}

	:host([multi]) .item {
		padding-left: 0;
	}

	:host([multi]) .item::before {
		content: '';
		font-size: 0;
		padding: 7.5px;
		margin: 0 8px;
		background: #fff;
		border: 1px solid #d6d6d5;
		border-radius: 4px;
		vertical-align: top;
	}

	:host([multi]) .item[aria-selected]::before {
		border-color: #5881f6;
		/* prettier-ignore */
		background: url("${Js}") #5881f6 no-repeat 50%;
	}

	:host([multi]) .sizer {
		padding-left: 33px;
	}

	.swatch {
		width: 18px;
		height: 18px;
		display: inline-block;
		box-sizing: border-box;
		vertical-align: middle;
		border-radius: 50%;
	}

	[virtualizer-sizer]:not(.sizer) {
		line-height: 1;
	}
`,tl=({index:t,itemHeight:e,auto:n})=>q`
	${E(!n,()=>q`
			.item {
				line-height: ${e}px;
				height: ${e}px;
			}
		`)}

	.item[data-index='${t||"0"}'] {
		background: var(
			--cosmoz-listbox-active-color,
			var(--cosmoz-selection-color, rgba(58, 145, 226, 0.1))
		);
	}
`,nl=t=>{const e=t==="auto",[n,o]=M(e?40:t);return[n,r=>e?o(r):void 0]},ol=t=>{const e=me(t);I(()=>{const n=o=>{if(!(o.ctrlKey&&o.altKey||o.defaultPrevented))switch(o.key){case"Up":case"ArrowUp":o.preventDefault(),e.onUp();break;case"Down":case"ArrowDown":o.preventDefault(),e.onDown();break;case"Enter":o.preventDefault(),e.onEnter();break}};return document.addEventListener("keydown",n,!0),()=>document.removeEventListener("keydown",n,!0)},[e])},rl=({items:t,onSelect:e,defaultIndex:n=0})=>{const[o,r]=M({index:n}),{index:i}=o,{length:s}=t;return I(()=>{r({index:o.index<0?n:Math.min(o.index,t.length-1),scroll:!0})},[t,n]),ol({onUp:$(()=>r(l=>({index:l.index>0?l.index-1:s-1,scroll:!0})),[s]),onDown:$(()=>r(l=>({index:l.index<s-1?l.index+1:0,scroll:!0})),[s]),onEnter:$(()=>i>-1&&i<s&&e?.(t[i],i),[i,t,e])}),{position:o,highlight:$(l=>r({index:l}),[]),select:$(l=>e?.(l),[e])}},il=(t,e)=>e?n=>Z(t).find(o=>o[e]===n[e]):n=>Z(t).includes(n),sl=(t,e)=>{if(!e||!t)return t;const n=t.toLowerCase().indexOf(e.toLowerCase());if(n<0)return t;const o=n+e.length;return[t.slice(0,n),h`<mark>${t.slice(n,o)}</mark>`,t.slice(o)]},ll=(t=_e)=>(e,n,{highlight:o,select:r,textual:i=_e,query:s,isSelected:l})=>{const c=i(e),a=sl(c,s),u=t(a,e,n);return h`<div
				class="item"
				role="option"
				part="option"
				?aria-selected=${l(e)}
				data-index=${n}
				@mouseenter=${()=>o(n)}
				@click=${()=>r(e)}
				@mousedown=${d=>d.preventDefault()}
				title=${c}
			>
				${u}
			</div>
			<div class="sizer" virtualizer-sizer>${u}</div>`},al=({itemRenderer:t=ll(),...e})=>{const n=me(e);return $((o,r)=>t(o,r,n),[n,t])},cl=["query","items","onSelect","textual","anchor","itemHeight","itemLimit","itemRenderer","defaultIndex","value","valueProperty","loading"],ul=({value:t,valueProperty:e,items:n,onSelect:o,defaultIndex:r,query:i,textual:s,itemRenderer:l,itemHeight:c=40,itemLimit:a=5})=>{const u=k(()=>il(t,e),[t,e]),d=k(()=>n.slice(),[n,u]),{position:p,highlight:m,select:b}=rl({items:d,onSelect:o,defaultIndex:isNaN(r)?void 0:Number(r)}),[g,v]=nl(c);return{position:p,items:d,height:Math.min(a,d.length)*g,highlight:m,select:b,itemHeight:g,setItemHeight:v,renderItem:al({itemRenderer:l,items:d,position:p,highlight:m,select:b,textual:s,query:i,isSelected:u})}},oo=fn,dl=t=>{const e=Me(void 0),{position:n,items:o,renderItem:r,height:i,itemHeight:s,setItemHeight:l}=ul(t);return I(()=>{const c=e.current?.[un];c&&c.layoutComplete.then(()=>{t.dispatchEvent(new CustomEvent("layout-complete"));const{averageChildSize:a,averageMarginSize:u}=c._layout._metricsCache;return l(a+u*2)},oo)},[o]),I(()=>{if(!n.scroll)return;const c=e.current?.[un];if(c){if(!c?._layout){c.layoutComplete.then(()=>c.element(n.index)?.scrollIntoView({block:"nearest"}),oo);return}c.element(n.index)?.scrollIntoView({block:"nearest"})}},[n]),Qs(tl({...n,itemHeight:s,auto:t.itemHeight==="auto"})),h`<div
			class="items"
			style="min-height: ${i}px"
			${Ce(c=>e.current=c)}
		>
			<div virtualizer-sizer></div>
			${Jo({items:o,renderItem:r,scroller:!0})}
		</div>
		<slot></slot>`};customElements.define("cosmoz-listbox",er(L(dl,{styleSheets:[Be(el)]})));const ml=({multi:t,setFloating:e,styles:n,...o},r)=>h`<cosmoz-listbox
		style="${Ro(n)}"
		@connected="${i=>i.target.showPopover?.()}"
		popover="manual"
		part="listbox"
		?multi=${t}
		${Ce(e)}
		...=${Zs(zt(cl)(o))}
		>${r}</cosmoz-listbox
	>`,pl=j`
	:host {
		border-radius: var(--cosmoz-autocomplete-chip-border-radius, 500px);
		background: var(--cosmoz-autocomplete-chip-bg-color, #cbcfdb);
		margin-bottom: 2px;
		display: flex;
		align-items: center;
		flex: 0.0001 1 fit-content;
		max-width: 18ch;
		min-width: 40px;
		padding-inline: 8px;
		gap: 4px;
		cursor: pointer;
		transform: translateY(var(--cosmoz-autocomplete-chip-translate-y, 0));
	}

	.content {
		color: var(--cosmoz-autocomplete-chip-color, #424242);
		font-family: var(
			--cosmoz-autocomplete-chip-text-font-family,
			'Inter',
			sans-serif
		);
		font-size: var(--cosmoz-autocomplete-chip-text-font-size, 12px);
		font-weight: var(--cosmoz-autocomplete-chip-text-font-weight, 400);
		line-height: var(--cosmoz-autocomplete-chip-text-line-height, 22px);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		flex: auto;
		min-width: 16px;
	}

	.clear {
		background-color: var(--cosmoz-autocomplete-chip-clear-bg-color, #81899b);
		border-radius: 50%;
		cursor: pointer;
		width: 16px;
		height: 16px;
		margin-right: -4px;
		stroke: var(
			--cosmoz-autocomplete-chip-clear-stroke,
			var(--cosmoz-autocomplete-chip-bg-color, #cbcfdb)
		);
		display: var(--cosmoz-autocomplete-chip-clear-display, block);
		flex: none;
	}

	.clear:hover {
		filter: brightness(90%);
	}
	.clear svg {
		display: block;
		transform: translate(3.5px, 3.5px);
	}
`,hl=h`
	<svg
		width="9"
		height="8"
		viewBox="0 0 9 8"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<line
			x1="7.53033"
			y1="0.994808"
			x2="1.16637"
			y2="7.35877"
			stroke-width="1.5"
		/>
		<line
			x1="7.46967"
			y1="7.35882"
			x2="1.10571"
			y2="0.99486"
			stroke-width="1.5"
		/>
	</svg>
`,fl=({onClear:t,disabled:e})=>h`
	<div class="content" part="content chip-text"><slot></slot></div>
	${E(t&&!e,()=>h`<span
				class="clear"
				part="clear chip-clear"
				@mousedown=${n=>n.preventDefault()}
				@click=${t}
			>
				${hl}
			</span>`)}
`;customElements.define("cosmoz-autocomplete-chip",L(fl,{observedAttributes:["disabled"],styleSheets:[Be(pl)]}));const gl=({content:t,onClear:e,disabled:n,hidden:o,className:r="chip",slot:i})=>h`<cosmoz-autocomplete-chip
		class=${A(r)}
		slot=${A(i)}
		part="chip"
		exportparts="chip-text, chip-clear"
		?disabled=${n}
		?hidden=${o}
		.onClear=${e}
		title=${A(typeof t=="string"?t:void 0)}
		>${t}</cosmoz-autocomplete-chip
	>`,bl=({value:t,min:e=0,onDeselect:n,textual:o,disabled:r,chipRenderer:i=gl})=>[...t.filter(Boolean).map(s=>i({item:s,content:o(s),onClear:t.length>e&&(()=>n(s)),disabled:r,slot:"control"})),i({item:null,content:h`<span></span>`,className:"badge",disabled:!0,slot:"control",hidden:!0})],xl=q`
	:host {
		display: inline-block;
		vertical-align: middle;
		background-image: linear-gradient(90deg, #e0e0e0, #f5f5f5, #e0e0e0);
		background-size: 1000%;
		background-position: right;
		animation: sweep 1.5s cubic-bezier(0.3, 1, 0.3, 1) infinite;
		border-radius: 3px;
		width: calc(100% - 20px);
		max-width: 150px;
		height: 20px;
		margin: 10px;
	}

	:host-context([show-single]) {
		margin-left: 20px;
	}

	@keyframes sweep {
		0% {
			background-position: right;
		}
		100% {
			background-position: left;
		}
	}
`;customElements.define("cosmoz-autocomplete-skeleton-span",L(()=>H,{styleSheets:[xl]}));const vl=j`
	:host {
		display: block;
		position: relative;
		min-width: 35px;
	}

	cosmoz-input::part(control) {
		display: flex;
		gap: 4px;
		min-width: 35px;
	}
	cosmoz-input::part(input) {
		flex: 1 24px;
		min-width: 0;
	}
	cosmoz-input:not([data-one])::part(input):focus {
		flex: 4 0.00001 50px;
		min-width: 20px;
	}
	.badge {
		min-width: initial;
		flex: none;
		text-align: center;
		padding: 0 4px;
	}

	[data-single]::part(input) {
		flex: 0;
	}
	[data-one] .chip {
		max-width: initial;
		flex: 1;
	}

	[data-one] .badge {
		display: none;
	}

	[hidden] {
		display: none;
	}

	:host([wrap]) cosmoz-input::part(control) {
		flex-wrap: wrap;
	}
	:host([wrap]) .chip {
		max-width: 100%;
	}

	slot {
		display: contents !important;
	}
`,ro=t=>t.matches(":focus-within"),tr=({disabled:t,onFocus:e})=>{const[n,o]=M(),{focused:r,closed:i}=n||{},s=r&&!t,l=me({closed:i,onFocus:e}),c=$(u=>o(d=>({...d,closed:u})),[]),a=$(u=>{const d=u.currentTarget;return ro(d)?o(p=>({focused:!0,closed:!p?.closed})):d.focus()},[]);return I(()=>{if(!s)return;const u=d=>{if(d.defaultPrevented)return;const{closed:p}=l;d.key==="Escape"&&!p?(d.preventDefault(),c(!0)):["ArrowUp","Up"].includes(d.key)&&p&&(d.preventDefault(),c(!1))};return document.addEventListener("keydown",u,!0),()=>document.removeEventListener("keydown",u,!0)},[s]),{focused:s,active:s&&!i,setClosed:c,onToggle:a,onFocus:$(u=>{const d=ro(u.currentTarget);o({focused:d}),l.onFocus?.(d)},[l])}},io=["focusin","focusout"],yl=t=>{const e=tr(t),{onFocus:n}=e;return I(()=>(t.setAttribute("tabindex","0"),io.forEach(o=>t.addEventListener(o,n)),()=>{io.forEach(o=>t.removeEventListener(o,n))}),[]),e},Sn=(t,e=()=>({}))=>{const n={type:t,toString(){return t}};return Object.assign((...r)=>Object.assign(e(...r),n),n)},so=t=>t.type||t.toString(),lo=t=>Array.isArray(t)?t:[t],wl=(t,e)=>{const n=lo(e),o=(n.every(Array.isArray)?n:[n]).map(([r,i])=>({actions:lo(r).map(so),handle:i}));return(r=t,i)=>{const s=o.find(l=>l.actions.includes(so(i)));return s?s.handle(r,i):r}},$e={pending:"pending",rejected:"rejected",resolved:"resolved"},nr={error:void 0,result:void 0,state:$e.pending},or=Sn($e.pending),rr=Sn($e.resolved,t=>({result:t})),ir=Sn($e.rejected,t=>({error:t})),$l=wl(nr,[[or,()=>({error:void 0,result:void 0,state:$e.pending})],[rr,(t,{result:e})=>({error:void 0,result:e,state:$e.resolved})],[ir,(t,{error:e})=>({error:e,result:void 0,state:$e.rejected})]]),_l=t=>{const[{error:e,result:n,state:o},r]=ti($l,nr);return I(()=>{if(!t)return;let i=!1;return r(or()),t.then(s=>!i&&r(rr(s)),s=>!i&&r(ir(s))),()=>{i=!0}},[t]),[n,e,o]},zl=({focused:t,empty:e,...n})=>{const o=t&&e&&n.limit!==1,r=me(n);I(()=>{if(!o)return;const i=s=>{if(s.defaultPrevented)return;const{key:l}=s,c=Z(r.value),a=r.limit==1;if(c.length>0&&(l==="Backspace"||a&&l.length===1))return r.onChange(c.slice(0,-1))};return document.addEventListener("keydown",i,!0),()=>document.removeEventListener("keydown",i,!0)},[o,r])},ao=t=>t.normalize("NFD").replace(/[\u0300-\u036f]/gu,""),Cl=(t,e,n)=>{if(!e)return t;const o=ao(e.toLowerCase()),r=[];for(const i of t){const l=ao(n(i).toLowerCase()).indexOf(o);l<0||r.push({item:i,index:l})}return r.sort((i,s)=>i.index-s.index).map(({item:i})=>i)},Sl=t=>t===!1||t==null?[]:t,sr=(t,e,n)=>t.dispatchEvent(new CustomEvent(e,{detail:n})),kl=(t,e,n)=>$(o=>{e?.(o),sr(t,n,o)},[e]),El=[],Il=t=>(...e)=>{let n;const o=()=>{n&&cancelAnimationFrame(n)};return o(),n=requestAnimationFrame(()=>{n=void 0,t(...e)}),o},Ol=({value:t,text:e,onChange:n,onText:o,onSelect:r,limit:i,min:s,source:l,textProperty:c,textual:a,valueProperty:u,keepOpened:d,keepQuery:p,preserveOrder:m,defaultIndex:b,externalSearch:g,...v})=>{const y=k(()=>(a??Mo)(c),[a,c]),{active:f,focused:w,onFocus:x,setClosed:_}=tr(v),z=!e,C=k(()=>e?.trim(),[e]),S=de(),O=kl(S,o,"text"),R=$(D=>{n?.(D,()=>_(!0)),sr(S,"value",D)},[n]),[Q,ce]=M([]),K=k(()=>Promise.resolve(typeof l=="function"?l({query:C,active:f}):l).then(Sl),[l,f,C]),B=k(()=>Z(t),[t]);I(()=>K.then(ce),[K]),zl({focused:w,empty:z,limit:i,value:B,onChange:R,onText:O}),I(()=>{!w&&!p&&O("")},[w,p]);const W=me({onText:O,onChange:R,value:B,limit:i,min:s,keepQuery:p,keepOpened:d,setClosed:_,onSelect:r}),[,,ye]=_l(K);return{active:f,query:C,textual:y,value:B,source$:K,loading:ye==="pending",items:k(()=>{if(!f)return El;const D=m?Q:[...B,...Qt(B,Te(u))(Q)];return g?D:Cl(D,C,y)},[Q,f,C,y,z,B,m,u,g]),onClick:$(()=>_(!1),[]),onFocus:x,onText:$(D=>{O(D.target.value),_(!1)},[O,e,_]),onSelect:$(D=>{W.onSelect?.(D,W);const{onChange:U,onText:te,limit:Zt,min:Br,value:Pr,keepQuery:Nr,keepOpened:jr,setClosed:Hr}=W;Nr||te(""),jr||Hr(!0);const tt=Z(Pr),Pn=tt.includes(D);Pn&&tt.length===Br||U((Pn?Qt(D)(tt):[...tt,D]).slice(-Zt))},[W]),onDeselect:$(D=>W.onChange(Qt(D)(W.value)),[W]),defaultIndex:C!==void 0&&C?.length>0?0:b}},Fl=t=>{const e=t.shadowRoot.querySelectorAll(".chip"),n=t.shadowRoot.querySelector(".badge");n.hidden=!0;for(const l of e)l.hidden=!1;const r=t.shadowRoot.querySelector("cosmoz-input").shadowRoot?.querySelector(".control")?.getBoundingClientRect();let i;for(i=0;i<e.length;i++){const c=e[i].getBoundingClientRect();if(!(c.x+c.width<=r.x+r.width-24))break}const s=e.length-i;for(n.querySelector("span").textContent="+"+s.toString(),n.hidden=s<1;i<e.length;i++)e[i].hidden=!0},Al=({value:t,active:e,wrap:n,limit:o})=>{const r=de(),i=!(n||o==1),s=k(()=>Il(()=>Fl(r)),[]),[l,c]=M(0);Ae(()=>{if(!i)return;const a=r.shadowRoot.querySelector("cosmoz-input"),u=new ResizeObserver(d=>{c(d[0].contentRect.width)});return u.observe(a),()=>u.disconnect()},[i]),Ae(()=>i?s():void 0,[i,l,e,t])},Tl=["input","control","label","line","error","wrap"].map(t=>`${t}: input-${t}`).join(),Ll=[Zo({apply({rects:t,elements:e}){Object.assign(e.floating.style,{minWidth:`${Math.max(t.reference.width,t.floating.width)}px`})}}),...Cn],Rl=({active:t,isSingle:e,showSingle:n})=>t?!(e&&!n):!1,Dl=t=>{const{active:e,invalid:n,errorMessage:o,label:r,placeholder:i,disabled:s,noLabelFloat:l,alwaysFloatLabel:c,textual:a,text:u,onText:d,onFocus:p,onClick:m,onDeselect:b,value:g,limit:v,min:y,showSingle:f,items:w,source$:x,placement:_,loading:z,chipRenderer:C}=t,S=de(),O=v==1,R=O&&g?.[0]!=null,{styles:Q,setReference:ce,setFloating:K}=Qo({placement:_,middleware:Ll});I(()=>(S.addEventListener("focusin",p),S.addEventListener("focusout",p),()=>{S.removeEventListener("focusin",p),S.removeEventListener("focusout",p)}),[p]),Ue({focus:()=>S.shadowRoot?.querySelector("#input")?.focus()},[]);const B=z||w.length>0||u!=null&&u.length>0;return h`<cosmoz-input
				id="input"
				part="input"
				${Ce(ce)}
				.label=${r}
				.placeholder=${R?void 0:i}
				?no-label-float=${l}
				?always-float-label=${g?.length>0||c}
				?readonly=${R}
				?disabled=${s}
				?invalid=${ze(x.then(()=>n,()=>!0),n)}
				.errorMessage=${ze(x.then(()=>o,W=>W.message),o)}
				.value=${Bt(u)}
				@value-changed=${d}
				@click=${m}
				autocomplete="off"
				exportparts=${Tl}
				?data-one=${O}
				?data-single=${R}
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix"></slot>
				${bl({value:g,min:y,onDeselect:b,textual:a,disabled:s,chipRenderer:C})}
			</cosmoz-input>

			${E(Rl({active:e,isSingle:R,showSingle:f}),()=>ml({...t,items:w,multi:!O,setFloating:K,styles:{...Q,display:B?void 0:"none"}},E(z,()=>h`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,()=>E(u!=null&&u.length>0&&w.length===0,()=>h`<slot name="no-result"></slot>`))))}`},lr=t=>{const e={...t,...Ol(t)};return Al(e),Dl(e)},ar=["disabled","invalid","no-label-float","always-float-label","text-property","value-property","limit","min","show-single","preserve-order","keep-opened","keep-query","default-index","external-search","item-height","item-limit","wrap"],Ml=t=>{const{onChange:e,onText:n,...o}=t,[r,i]=ni("value");return I(()=>{t.onChange!=null&&console.warn("onChange is deprecated; use value-changed and lift instead")},[]),lr({...o,value:r,onChange:$((s,...l)=>{i(s),e?.(s,...l)},[e]),onText:$(s=>{t.text=s,n?.(s)},[n])})},cr=[Be(vl)];customElements.define("cosmoz-autocomplete-ui",L(lr,{observedAttributes:ar,styleSheets:cr}));customElements.define("cosmoz-autocomplete",L(Ml,{observedAttributes:ar,styleSheets:cr}));j`
	.input-inline-file {
		position: relative;
	}

	.input-inline-file svg {
		margin-right: 5px;
	}

	.input-inline-file > .file {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		opacity: 0;
		cursor: pointer;
	}
`;h`<svg
	xmlns="http://www.w3.org/2000/svg"
	width="18"
	height="18"
	viewBox="0 0 24 24"
>
	<g
		fill="none"
		stroke="#000"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="2"
	>
		<path
			d="M18 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7.1a2 2 0 0 1 1.5.6l4.9 5.2a2 2 0 0 1 .5 1.4V20a2 2 0 0 1-2 2ZM7.9 17.5h8.2M7.9 13.5h8.2M8 9.5h5"
		/>
	</g>
</svg>`;const dn=Symbol("touched");function mn(t,e=!0){if(t==null)return;const n=t;return e?n[dn]=!0:delete n[dn],t}const ur=t=>mn(t,!1),dr=t=>!!t?.[dn],Vl=({field:t,values:e,...n})=>{const o=(dr(e)&&(e?.[xi]?.[t.id]??t.error))??!1,r=e?.[t.path??t.id];return(t.input??Gi)({...n,error:o,value:r,field:t,values:e})},Bl=({fields:t,...e})=>Rt(t??[],({id:n})=>n,n=>Vl({field:n,fields:t,...e})),Pl=({fields:t,selector:e=""})=>(t??[]).map(({id:n,styles:o})=>o?`${e}[name="${String(n)}"] { ${Object.entries(o).map(([r,i])=>`${r}:${i}`).join(";")} }`:"").join(`
`);j`
	.headers {
		display: flex;
		border-bottom: solid 1px #ccc;
		font-weight: 400;
		font-size: 16px;
		padding: 10px 0 10px 0;
		width: 100%;
	}
	.header {
		flex: auto;
		margin: 0 4px;
		flex: 1 1 0px;
	}
	.items {
		min-height: 100px;
		width: 100%;
		position: relative;
		overflow: auto;
		flex: auto;
	}
	.item {
		display: flex;
		width: 100%;
	}
	.input {
		flex: 1 1 0px;
	}
	.item > .input {
		margin: 0 4px;
	}
	.item cosmoz-input::part(error),
	.item cosmoz-autocomplete::part(input-error) {
		position: static;
		margin-bottom: -10px;
	}
	.input-basic {
		font-size: 16px;
		line-height: 24px;
		border-bottom: 2px solid var(--secondary-text-color, #737373);
		margin: 8px 4px;
	}
	.remove {
		background: none;
		border: none;
		outline: none;
		cursor: pointer;
		width: 24px;
		height: 24px;
		align-self: center;
		flex: none;
		margin: 0 8px;
		padding: 0;
	}
	.remove[disabled] {
		opacity: 0;
		pointer-events: none;
	}
`;const Nl=(t,e)=>!e||t.some((n,o)=>!Object.is(e[o],n)),yt=({oldItem:t,newItem:e,rules:n,index:o,oldIndex:r=o})=>n?n.reduce((i,[s,l])=>t&&l&&!Nl(l(i,o),l(t,r))?i:{...i,...s(i,t,o,r)},e):e,jl=(t,e,n)=>{const[,o]=t;return{values:o,onReset:$(()=>e(([r])=>[r,r]),[e]),onValues:$((r,i=!0)=>e(([s,l])=>[s,mn(yt({oldItem:l,newItem:V(r,l),rules:n}),i)]),[n,e]),onChange:$((r,i=!0)=>e(([s,l])=>[s,mn(yt({oldItem:l,newItem:{...l,...V(r,l)},rules:n}),i)]),[n,e]),load:$((r,i)=>{if(!r){e([r,r]);return}const s=ur(yt({oldItem:void 0,newItem:r,rules:i??n}));e([s,s])},[n,e]),touched:k(()=>dr(o),[o])}},Hl=(t,e)=>ur(yt({oldItem:void 0,newItem:t,rules:e})),mr=(t,e=[])=>{const n=t.filter(o=>o?.rules!=null).flatMap(o=>o?.rules);return[...e,...n]},ql=(t,e,{fields:n,rules:o})=>{const r=k(()=>V(n)??[],[n]),i=k(()=>mr(r,o),[r,o]),s=jl(t,e,i),{values:l}=s;return{...k(()=>$i(r,l),[r,l]),...s}},Wl=t=>{const[e,n]=M(()=>{const o=V(t.fields)??[],r=mr(o,t.rules),i=Hl(t.initial,r);return[i,i]});return ql(e,n,t)};function Ul({fields:t,initial:e,rules:n,onSave:o,allowEmpty:r}){const i=Wl({fields:t,initial:e,rules:n}),{values:s,invalid:l}=i,[c,a]=M(),[u,d]=M(),p=s==null||s===e,m=i.fields?.length>0&&!(p&&r)&&(p||l);return{...i,save$:c,onSave:$(()=>a(o?.(s,e,d)),[o,s,e]),disabled:m,progress:u}}const co=()=>document.createComment(""),Xl=_t(H,new DocumentFragment).constructor;class Gl extends HTMLElement{onDisconnect;disconnectedCallback(){this.onDisconnect?.()}}customElements.define("disconnect-observer",Gl);class Yl extends bn{_op;_outlet;_content;render(e,n=document.body){return h`<disconnect-observer
			.onDisconnect=${()=>{this.isConnected=!1,this.disconnected()}}
		></disconnect-observer>`}update(e,[n,o=document.body]){return this.updateOutlet(o,n),this.render(n,o)}updateOutlet(e,n){this._outlet!==e&&this.clearOutlet(),this._outlet=e;const o=this._op??=new Xl(e.appendChild(co()),e.appendChild(co()));Ur(o,this._content=n)}clearOutlet(){const e=this._op;e&&(Xr(e),Gr(e),this._op=void 0)}disconnected(){this.clearOutlet()}reconnected(){this._outlet&&this._content&&this.updateOutlet(this._outlet,this._content)}}const Kl=Ve(Yl),Zl=j`
	:host {
		display: flex;
		flex-direction: column;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 550px;
		max-width: 98vw;
		max-height: 96vh;
		border-radius: 10px;
	}
	:host([backdrop]) {
		box-shadow: 0 0 0 100vmax rgb(0, 0, 0, 0.6);
		z-index: 10;
	}
	:host([backdrop])::before {
		content: '';
		display: block;
		position: absolute;
		z-index: -1;
		top: -100vh;
		bottom: -100vh;
		right: -100vw;
		left: -100vw;
	}
	:host::after {
		content: '';
		display: block;
		z-index: -1;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		pointer-events: none;
		box-shadow:
			0 16px 24px 2px #00000024,
			0 6px 30px 5px #0000001f,
			0 8px 10px -5px #0006;
	}
	.title {
		display: flex;
		padding: var(--dialog-title-padding, 22px 24px);
		padding-bottom: 0px;
		color: var(--dialog-title-color, #00000);
		background-color: var(--dialog-title-background-color, #fff);
		font-size: var(--dialog-title-font-size, 20px);
		font-weight: var(--dialog-title-font-weight, 400);
		line-height: 1.4;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		border-bottom: 1px solid var(--dialog-title-background-color, #fff);
	}
	:host(:not([unmovable])) .title {
		cursor: move;
		user-select: none;
	}

	.content {
		background: var(--cosmoz-dialog-background-color, #fff);
		overflow: hidden;
		display: flex;
		flex-direction: column;
		border-bottom-right-radius: 10px;
		border-bottom-left-radius: 10px;
	}

	.close {
		display: flex;
		background-color: transparent;
		margin: 0 0 0 auto;
		padding-right: 0;
		padding-left: 0;
		min-width: unset;
		min-height: unset;
		border: unset;
		cursor: pointer;
	}
`,Ql=()=>{const t=de(),e=$(()=>{t.dispatchEvent(new Event("close")),t.onClose?.()},[]);return I(()=>{const n=s=>{s.preventDefault(),e()},o=t.shadowRoot,r=s=>s.target.value==="cancel"&&n(s),i=s=>!s.defaultPrevented&&s.key==="Escape"&&n(s);return o.addEventListener("click",r),document.addEventListener("keydown",i,!0),()=>{o.removeEventListener("click",r),document.removeEventListener("keydown",i,!0)}},[]),{close:e}},Jl=()=>{const t=de(),{manualFocus:e}=t;Ae(()=>{!e&&!t.matches(":focus-within")&&(t.setAttribute("tabindex","-1"),t.focus(),t.removeAttribute("tabindex"))},[e])},ea=(t,e,n)=>{const o=t.width/3,r=t.height/3,i=Math.min(window.innerWidth-2*o,Math.max(-o,e)),s=Math.min(window.innerHeight-2*r,Math.max(-r,n));return{x:i,y:s}},ta=(t,e,n,o)=>r=>{if(!r.target.closest(e))return;const i=ea,s=t.getBoundingClientRect(),l=r.clientX-s.x,c=r.clientY-s.y,a=(p,m)=>{const b=p-l,g=m-c,v=i(s,b,g);Object.assign(t.style,{left:v.x+"px",top:v.y+"px",transform:"initial"})},u=p=>a(p.clientX,p.clientY),d=p=>{document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",d)};document.addEventListener("mousemove",u),document.addEventListener("mouseup",d)},na=()=>{const t=de(),{unmovable:e}=t;I(()=>{if(e)return;const n=t.shadowRoot;if(!n)return;const o=ta(t,".title");return n.addEventListener("mousedown",o),()=>n.removeEventListener("mousedown",o)},[e])},oa=()=>{Ql(),na(),Jl()},ra=({title:t,content:e,styles:n,closeable:o=!1})=>{const r=de();return h`
		<style>
			${Zl}${n}
		</style>
		<div class="title" part="title">
			${t}
			${E(o,()=>h`
					<button
						class="close"
						@click=${()=>{r.dispatchEvent(new Event("close")),r.onClose?.()}}
					>
						${Vi()}
					</button>
				`)}
		</div>
		<div class="content" part="content">${e}</div>
	`},pr=(t,{observedAttributes:e,styles:n,...o}={})=>L(r=>(oa(),ra({title:r.heading||r.title,content:t(r),styles:n,closeable:r.closeable})),{observedAttributes:["title","heading","manual-focus","unmovable","closeable",...e??[]],...o}),ia=q`
	@keyframes rotating {
		100% {
			transform: rotate(360deg);
		}
	}

	:host {
		--cosmoz-spinner-width: 20px;
		--cosmoz-spinner-height: 20px;
		display: inline-block;
		vertical-align: middle;
		border-radius: 50%;
		width: var(--cosmoz-spinner-width, 22px);
		height: var(--cosmoz-spinner-height, 22px);
		border: 2px solid rgba(0, 0, 0, 0.1);
		border-top: 2px solid #5f5a92;
		animation: rotating 1.2s infinite cubic-bezier(0.785, 0.135, 0.15, 0.86);
		box-sizing: border-box;
		margin: 0 4px;
		flex: none !important;
	}
`,sa=()=>H,la=L(sa,{styleSheets:[ia]});customElements.define("cosmoz-spinner",la);customElements.define("cosmoz-dialog-loading",pr(()=>h`
			<style>
				.content {
					flex-direction: row;
					align-items: center;
					justify-content: center;
					padding: 30px;
				}
				cosmoz-spinner {
					width: 32px;
					height: 32px;
					margin-right: 12px;
				}
			</style>
			<cosmoz-spinner></cosmoz-spinner>
			<slot></slot>
		`));const aa=j`
	.button {
		font-family: inherit;
	}
	.button:not([slot='bottom-bar-menu']),
	.file::-webkit-file-upload-button,
	.file::file-selector-button {
		background: var(--cosmoz-button-bg-color, #101010);
		color: var(--cosmoz-button-color, #fff);
		box-sizing: border-box;
		cursor: pointer;
		outline: none;
		flex: none;
		border: none;
		padding: 0 18px;
		border-radius: 6px;
		min-height: 40px;
		min-width: 78px;
		font-family: inherit;
		font-size: 14px;
		font-weight: 500;
		line-height: 40px;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.button:not([slot='bottom-bar-menu']):hover,
	.button:not([slot='bottom-bar-menu']):active,
	.file::-webkit-file-upload-button:hover,
	.file::file-selector-button:hover {
		background: var(--cosmoz-button-hover-bg-color, #3a3f44);
	}
	.button[disabled],
	.button:disabled {
		opacity: var(--cosmoz-button-disabled-opacity, 0.15);
		pointer-events: none;
	}
	.button:active {
		background: hsl(
			from var(--cosmoz-button-hover-bg-color, #3a3f44) h s calc(l + 10)
		);
	}
	a.button {
		text-decoration: none;
	}
	.buttons {
		display: flex;
		justify-content: flex-end;
		padding: 8px 8px 8px 24px;
	}
	.buttons .button {
		margin: 0 4px;
	}
	.button-ricon {
		border: none;
		border-radius: 50%;
		fill: var(--primary-button-icon-fill, #596679);
		padding: 8px;
		display: inline-flex;
		background: transparent;
		cursor: pointer;
		transition: background 0.15s ease;
	}
	.button-ricon:active {
		background: rgb(56, 62, 74, 0.15);
	}
	.actionButton {
		border: transparent;
		background: var(--cz-action-button-bg, #fff);
		border-radius: 500px;
		font-size: 1.08em;
		letter-spacing: -0.01em;
		padding: 0.5em 0.9em;
		cursor: pointer;
		display: flex;
		align-items: center;
		overflow: hidden;
		justify-content: center;
		white-space: nowrap;
		transition: background 0.25s;
	}
	.actionButton:hover {
		background: var(--cz-action-button-hover-bg, #f0f0f0);
	}
	.actionButton span {
		overflow: hidden;
		text-overflow: ellipsis;
		min-width: 10px;
	}

	.actionButton iron-icon {
		margin-left: 4px;
		flex: none;
		--iron-icon-width: 18px;
		--iron-icon-height: 18px;
	}
	.actionButton iron-icon:hover {
		color: var(--cz-accent-color);
	}
`,ca=()=>H,ua=(t,e)=>Promise.resolve(t).then(e,e),da=t=>ze(t?.then(ca,e=>h`<div class="failure">${e.message}</div>`),H),ma=({save$:t,progress:e,...n})=>{const o=({onSave:r,onClick:i=r,title:s,disabled:l,progress:c,content:a=H,slot:u})=>h` <button
			class="button save"
			slot=${A(u)}
			?disabled=${l}
			?data-progress=${c}
			@click=${d=>(d.stopPropagation(),i())}
		>
			${a} ${s}
		</button>`;return ze(ua(t,()=>o(n)),o({...n,disabled:!0,progress:!0,content:h`<cz-spinner></cz-spinner> ${E(e,r=>r.join("/"))}`}))},pa=j`
	.description {
		padding: 0 24px;
	}
	.description * {
		line-height: normal;
	}
	.form {
		overflow-y: auto;
		display: flex;
		flex-direction: column;
	}
	.input {
		margin-top: 20px;
		padding: 0px 24px 4px 24px;
	}
	.input:last-child {
		margin-bottom: 16px;
	}
	.save {
		font-weight: bold;
	}
	.save[data-progress] {
		opacity: 0.6;
	}
	.failure {
		color: #fc5c5b;
		align-self: center;
		flex: 1;
	}
	cz-spinner {
		align-self: center;
	}
`,ha=t=>{const{description:e,auto:n,uncancelable:o,hideCancelButton:r,saveText:i=ln("OK")}=t,{onSave:s,disabled:l,save$:c,progress:a,...u}=Ul(t);return I(()=>{n&&s()},[n]),h` <style>
			${aa} ${Pl(u)}${pa}
		</style>
		${E(e,()=>h`<p class="description">${e}</p>`)}
		<div class="form" part="form">${Bl(u)}</div>
		<div class="buttons">
			${da(c)}
			${ma({save$:c,onSave:s,disabled:l,title:i,progress:a})}
			${E(!r,()=>h`<button class="button" value="cancel" ?disabled=${o}>
						${ln("Cancel")}
					</button>`)}
		</div>`};customElements.define("cosmoz-form-dialog-next",pr(ha,{observedAttributes:["allow-empty"]}));const fa=t=>{if(!t)return H;const e=h`<cosmoz-form-dialog-next
		?backdrop=${t.backdrop??!0}
		name=${A(t.name)}
		?allow-empty=${t.allowEmpty}
		.heading=${t.heading??t.title}
		.description=${t.description}
		.fields=${t.fields}
		.initial=${t.initial}
		.rules=${t.rules}
		.onClose=${t.onClose}
		.onSave=${t.onSave}
		.auto=${t.auto}
		.uncancelable=${t.uncancelable}
		.hideCancelButton=${t.hideCancelButton}
		.manualFocus=${t.manualFocus}
		.saveText=${t.saveText}
	></cosmoz-form-dialog-next>`;return t.renderInPortal?Kl(e):e},ga={duration:250},hr=t=>(e,n,o)=>{const r="max"+t.charAt(0).toUpperCase()+t.slice(1);Object.assign(e.style,{[r]:"",display:""});const{[t]:i}=e.getBoundingClientRect(),s=[0,i],[l,c]=n?s:s.slice().reverse(),a=e.animate([{[r]:`${l}px`},{[r]:`${c}px`}],{...ga,...o});a.onfinish=()=>Object.assign(e.style,{[r]:"",display:n?"":"none"})},ba=q`
	:host {
		display: contents;
		max-height: var(--cosmoz-dropdown-menu-max-height, calc(96vh - 64px));
		overflow-y: auto;
		border-radius: var(--cosmoz-dropdown-border-radius, 15px);
	}
	::slotted(:not(slot)) {
		display: block;
		--paper-button_-_display: block;
		box-sizing: border-box;
		padding: 10px 24px;
		background: var(--cosmoz-dropdown-menu-bg-color, transparent);
		color: var(--cosmoz-dropdown-menu-color, #101010);
		transition:
			background 0.25s,
			color 0.25s;
		border: none;
		cursor: pointer;
		font-size: 14px;
		line-height: 20px;
		text-align: left;
		margin: 0;
		width: 100%;
	}

	::slotted(:not(slot):hover) {
		background: var(
			--cosmoz-dropdown-menu-hover-color,
			var(--cosmoz-selection-color, rgba(58, 145, 226, 0.1))
		);
	}

	::slotted(:not(slot)[disabled]) {
		opacity: 0.5;
		pointer-events: none;
	}
`,xa=()=>h` <slot></slot> `;customElements.define("cosmoz-dropdown-list",L(xa,{styleSheets:[ba]}));const va=({placement:t})=>h` <cosmoz-dropdown
		.placement=${t}
		part="dropdown"
		exportparts="anchor, button, content, wrap, dropdown"
	>
		<slot name="button" slot="button"></slot>
		<cosmoz-dropdown-list><slot></slot></cosmoz-dropdown-list>
	</cosmoz-dropdown>`;customElements.define("cosmoz-dropdown-menu",L(va));const ya=q`
	:host {
		position: fixed;
		left: -9999999999px;
		min-width: 72px;
		box-sizing: border-box;
		padding: var(--cosmoz-dropdown-spacing, 0px);
		z-index: var(--cosmoz-dropdown-z-index, 2);
		border-radius: var(--cosmoz-dropdown-border-radius, 15px);
	}
	:host(:popover-open) {
		margin: 0;
		border: 0;
		padding: 0;
		overflow: visible;
	}
	.wrap {
		background: var(--cosmoz-dropdown-bg-color, #fff);
		box-shadow: var(
			--cosmoz-dropdown-box-shadow,
			0px 3px 4px 2px rgba(0, 0, 0, 0.1)
		);
		border-radius: var(--cosmoz-dropdown-border-radius, 15px);
	}
	::slotted(*) {
		display: block;
	}
`,wa=()=>h`<div class="wrap" part="wrap"><slot></slot></div>`;customElements.define("cosmoz-dropdown-content",er(L(wa,{styleSheets:[ya]})));const $a=t=>t.preventDefault(),_a=q`
	.anchor {
		pointer-events: none;
		padding: var(--cosmoz-dropdown-anchor-spacing);
	}
	button {
		pointer-events: auto;
	}
	::slotted(svg) {
		pointer-events: none;
	}
	@-moz-document url-prefix() {
		#content {
			left: auto;
		}
	}
`,za=t=>{const{placement:e,strategy:n,middleware:o,render:r}=t,{active:i,onToggle:s}=yl(t),{styles:l,setReference:c,setFloating:a}=Qo({placement:e,strategy:n,middleware:o});return h` <div class="anchor" part="anchor" ${Ce(c)}>
			<button
				@mousedown=${$a}
				@click=${s}
				part="button"
				id="dropdownButton"
			>
				<slot name="button">...</slot>
			</button>
		</div>
		${E(i,()=>h`<cosmoz-dropdown-content
					popover
					id="content"
					part="content"
					exportparts="wrap, content"
					style="${Ro(l)}"
					@connected=${u=>u.target.showPopover?.()}
					${Ce(a)}
					><slot></slot>${xn([r],()=>r?.()||H)}</cosmoz-dropdown-content
				> `)}`};customElements.define("cosmoz-dropdown",L(za,{styleSheets:[_a]}));const fr=vn(()=>fn);customElements.define("cosmoz-keybinding-provider",fr.Provider);const Ca=(t,e)=>{const n=Dt(fr),o=me(t);I(()=>n(o),e)};function*gr(t,e){if(t!==void 0){let n=0;for(const o of t)yield e(o,n++)}}function Sa(t){return t.boundingClientRect.height===0}function ka(t){return t.getBoundingClientRect().height===0}const Ea=t=>{if(t.element.tagName!=="SLOT")throw new Error("Overflow directive must be used on a slot element")};function Ia(t,e){t.forEach(n=>{ka(n)||(e.add(n),t.delete(n))})}const Oa=(t,e)=>{let n=new Set,o=new Set,r=new Set;const i=new IntersectionObserver(l=>{l.forEach(c=>{const a=c.target;c.boundingClientRect.width===c.intersectionRect.width&&c.intersectionRect.height!==0?(n.add(a),o.delete(a),r.delete(a)):Sa(c)?(n.delete(a),o.delete(a),r.add(a)):(n.delete(a),o.add(a),r.delete(a))}),Ia(r,o),e({visible:n,overflowing:o,hidden:r})},{root:t.parentElement,threshold:[0,.5,1]}),s=()=>{const l=Array.from(t.assignedElements({flatten:!0})),c=new Set,a=new Set,u=new Set;for(const d of l)n.has(d)?c.add(d):o.has(d)?a.add(d):r.has(d)?u.add(d):i.observe(d);n=c,o=a,r=u,e({visible:n,overflowing:o,hidden:r})};return s(),t.addEventListener("slotchange",s),()=>{t.removeEventListener("slotchange",s),i.disconnect()}};class Fa extends bn{observer;slot;cleanup;render(){return re}update(e,[n]){return Ea(e),this.slot!==e.element&&(this.cleanup&&(this.cleanup(),this.cleanup=void 0),this.slot=e.element,this.cleanup=Oa(this.slot,n)),re}}const Aa=Ve(Fa),Ta=q`
	:host {
		display: block;
		overflow: hidden;
		bottom: 0;
		left: 0;
		width: 100%;
		max-width: 100%; /* Firefox fix */
		background-color: inherit;
		transition: max-height 0.3s ease;
		flex: none;
		background-color: var(
			--cosmoz-bottom-bar-bg-color,
			rgba(230, 230, 230, 0.8)
		);
		box-shadow: var(--cosmoz-bottom-bar-shadow, none);
		z-index: 1;

		--cosmoz-dropdown-anchor-spacing: 12px 6px;
	}

	:host([force-open]) {
		transition: none;
	}

	[hidden],
	::slotted([hidden]) {
		display: none !important;
	}

	#bar {
		height: 64px;
		padding: 0 3%;
		display: flex;
		align-items: center;
	}

	#info {
		flex: 0 0 auto;
		padding-right: 3%;
		white-space: nowrap;
	}

	#buttonContainer {
		display: flex;
		flex: 1 1 auto;
		overflow: hidden;
		flex-wrap: wrap;
		justify-content: flex-start;
		flex-direction: row-reverse;
		position: relative;
		margin: 0 8px;
		min-width: 0;
		max-height: 40px;
	}

	#bottomBarToolbar::slotted(:not(slot):not([unstyled])) {
		margin: 0 0.29em;
		min-width: 40px;
		min-height: 40px;
		text-overflow: ellipsis;
		white-space: nowrap;
		background: var(
			--cosmoz-bottom-bar-button-bg-color,
			var(--cosmoz-button-bg-color, #101010)
		);
		color: var(
			--cosmoz-bottom-bar-button-color,
			var(--cosmoz-button-color, #fff)
		);
		border-radius: 6px;
		border-color: transparent;
		padding: 0 18px;
		font-size: 14px;
		font-weight: 500;
		line-height: 40px;
		overflow: hidden;
		flex: 0 0 auto;
	}
	#bottomBarToolbar::slotted(
		:not(slot):not([unstyled])[data-visibility='hidden']
	) {
		visibility: hidden;
		width: 100%;
		order: 9999;
	}

	#bottomBarToolbar::slotted(:not(slot)[disabled]) {
		opacity: var(--cosmoz-button-disabled-opacity, 0.15);
		pointer-events: none;
	}

	#bottomBarToolbar::slotted(:not(slot):hover) {
		background: var(
			--cosmoz-bottom-bar-button-hover-bg-color,
			var(--cosmoz-button-hover-bg-color, #3a3f44)
		);
	}

	#dropdown::part(content) {
		max-width: 300px;
	}

	#dropdown::part(button) {
		border: none;
		cursor: pointer;
		outline: none;
		background: var(
			--cosmoz-bottom-bar-button-bg-color,
			var(--cosmoz-button-bg-color, #101010)
		);
		color: var(
			--cosmoz-bottom-bar-button-color,
			var(--cosmoz-button-color, #fff)
		);
		border-radius: 50%;
		width: 40px;
		height: 40px;
	}

	#dropdown::part(button):hover {
		background: var(
			--cosmoz-bottom-bar-button-hover-bg-color,
			var(--cosmoz-button-hover-bg-color, #3a3f44)
		);
	}

	:host([hide-actions]) #bottomBarToolbar,
	:host([hide-actions]) #bottomBarMenu,
	:host([hide-actions]) #dropdown {
		display: none;
	}

	:host(:not([has-menu-items])) cosmoz-dropdown-menu {
		display: none;
	}
`,La=Symbol("openMenu"),Ra=t=>{const e=t.shadowRoot?.querySelector("#dropdown");if(!e||e.hasAttribute("hidden"))return;e.shadowRoot?.querySelector("cosmoz-dropdown")?.shadowRoot?.querySelector("#dropdownButton")?.click()},Da=t=>{const[e,n]=M({visible:new Set,overflowing:new Set});I(()=>{t.dispatchEvent(new CustomEvent("reflow",{detail:e}))},[e]);const o=k(()=>[...e.visible,...e.overflowing],[e]),r=k(()=>o.map(c=>({element:c,priority:Number(c.dataset.priority??0),text:c.textContent?.trim()||""})).toSorted((c,a)=>a.priority-c.priority),[o]),{maxToolbarItems:i=1}=t,s=Math.min(i,e.visible.size);I(()=>{r.forEach(({element:c,priority:a},u)=>{const d=u<s;c.dataset.visibility=d?"visible":"hidden",c.style.order=String(-a)})},[r,s]);const l=k(()=>r.slice(s).sort((c,a)=>a.element.compareDocumentPosition(c.element)-c.element.compareDocumentPosition(a.element)),[r,s]);return I(()=>{t.toggleAttribute("has-menu-items",l.length>0)},[l.length]),{setButtonStates:n,menuButtons:l}},Ma=t=>{const{active:e=!1}=t,n=Me(!1);Ca({activity:La,callback:()=>Ra(t),check:()=>e&&!t.hasAttribute("hide-actions"),element:()=>t.shadowRoot?.querySelector("#dropdown")},[e]);const{setButtonStates:o,menuButtons:r}=Da(t),i=k(()=>hr("height"),[]);return Ae(()=>{n.current?i(t,e):i(t,e,{duration:0}),n.current=!0},[e]),h` <div id="bar" part="bar">
		<div id="info" part="info"><slot name="info"></slot></div>
		<div id="buttonContainer" part="buttons">
			<slot id="bottomBarToolbar" ${Aa(o)}></slot>
		</div>

		<cosmoz-dropdown-menu id="dropdown" part="dropdown">
			<svg
				slot="button"
				width="4"
				height="16"
				viewBox="0 0 4 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M1.50996e-07 2C1.02714e-07 3.10457 0.89543 4 2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 -3.91405e-08 2 -8.74228e-08C0.895431 -1.35705e-07 1.99278e-07 0.89543 1.50996e-07 2Z"
					fill="currentColor"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M1.50996e-07 8C1.02714e-07 9.10457 0.89543 10 2 10C3.10457 10 4 9.10457 4 8C4 6.89543 3.10457 6 2 6C0.895431 6 1.99278e-07 6.89543 1.50996e-07 8Z"
					fill="currentColor"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M1.50996e-07 14C1.02714e-07 15.1046 0.89543 16 2 16C3.10457 16 4 15.1046 4 14C4 12.8954 3.10457 12 2 12C0.895431 12 1.99278e-07 12.8954 1.50996e-07 14Z"
					fill="currentColor"
				/>
			</svg>
			${gr(r,s=>h`
					<button
						title=${s.text}
						@click=${()=>s.element.click()}
					>
						${s.text}
					</button>
				`)}
		</cosmoz-dropdown-menu>
		<slot name="extra" id="extraSlot"></slot>
	</div>`};customElements.define("cosmoz-bottom-bar",L(Ma,{observedAttributes:["active","max-toolbar-items"],styleSheets:[Ta]}));const Et=`
	<slot name="extra" slot="extra"></slot>
`;h(Object.assign([Et],{raw:[Et]}));Lt(Object.assign([Et],{raw:[Et]}));const Va=j`
	:host {
		display: flex;
	}
	:host(:not([light])) {
		position: absolute;
		right: 0;
		z-index: +1;
	}

	:host(:not([visible])) {
		display: none !important;
	}

	.icon {
		fill: currentColor;
	}

	:host([light]) {
		flex: 0 0 24px;
	}

	:host(:not([light])) .icon {
		top: 10px;
		margin: 2px 7px;
		color: #cdcdcd;
		background-color: #a6a6a6;
		border-radius: 500px;
		cursor: pointer;
		min-width: 16px;
		width: 16px !important;
		min-height: 16px;
		height: 16px;
		padding: 2px;
		box-sizing: border-box;
		transition:
			background-color 0.25s,
			color 0.25s;
		float: right;
	}

	:host(:not([light])) .icon:hover {
		background-color: #b0b0b0;
		color: #dfdfdf;
	}
`,Ba=()=>h`
	<style>
		${Va}
	</style>
	<svg
		viewBox="0 0 24 24"
		preserveAspectRatio="xMidYMid meet"
		focusable="false"
		class="icon"
	>
		<g>
			<path
				d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
			></path>
		</g>
	</svg>
`;customElements.define("cosmoz-clear-button",L(Ba));const De=({valuePath:t},e)=>F(e,t),Pa=De,Na=De,ja=({valuePath:t},e)=>n=>{const o=F(n,t);return o==null?!1:o.toString().toLowerCase().trim().includes(e.toLowerCase().trim())},Ha=(t,e)=>e===""||e==null?null:e,ae=t=>class extends t{static get properties(){return{isOmnitableColumn:{type:Boolean,value:!0},title:{type:String},valuePath:{type:String,notify:!0},values:{type:Array,notify:!0},filter:{type:Object},noLocalFilter:{type:Boolean},disabled:{type:Boolean,value:!1,notify:!0},editable:{type:Boolean,notify:!0},loading:{type:Boolean,value:!1,notify:!0},externalValues:{type:Boolean,value:!1,notify:!0},name:{type:String},sortOn:{type:String},groupOn:{type:String},noSort:{type:Boolean,value:!1},width:{type:String,value:"75px"},minWidth:{type:String,value:"40px"},flex:{type:String,value:"1"},cellClass:{type:String,value:"default-cell"},headerCellClass:{type:String,value:"default-header-cell"},priority:{type:Number,value:0},hidden:{type:Boolean,notify:!0},preferredDropdownHorizontalAlign:{type:String,value:"right"},renderHeader:{type:Function},renderCell:{type:Function},renderEditCell:{type:Function},renderGroup:{type:Function},mini:{type:Number,value:null},renderMini:{type:Function}}}static get observers(){return["notifyFilterChange(filter)"]}notifyFilterChange(e){this.__ownChange||this.dispatchEvent(new CustomEvent("legacy-filter-changed",{detail:{name:this.name,state:this.legacyFilterToState(e)},bubbles:!0}))}legacyFilterToState(e){return{filter:e}}getFilterFn(){}getString(e,n){return De(e,n)}toXlsxValue(e,n){return Pa(e,n)}cellTitleFn(e,n){return this.getString(e,n)}headerTitleFn(e){return e.title}serializeFilter(e,n){return Ha(e,n)}deserializeFilter(e,n){return n==null?null:typeof n=="string"?window.decodeURIComponent(n):n}getComparableValue(e,n){return Na(e,n)}computeSource(e,n){return n}_propertiesChanged(e,n,o){super._propertiesChanged(e,n,o),this.dispatchEvent(new CustomEvent("cosmoz-column-prop-changed",{bubbles:!0}))}},qa=t=>e=>t(n=>{if(n.inputValue===void 0&&e.target.value==="")return n;clearTimeout(n.t);const o=setTimeout(()=>t(r=>({...r,filter:r.inputValue})),1e3);return{...n,inputValue:e.target.value,t:o}}),Wa=t=>()=>t(e=>({...e,filter:e.inputValue})),Ua=t=>e=>{e.keyCode===13&&(e.preventDefault(),t(n=>({...n,filter:n.inputValue})))},Xa=t=>e=>t(n=>({...n,headerFocused:e.detail.value})),Ga=t=>()=>t(e=>({...e,filter:null,inputValue:null})),Ya=t=>t!=null&&t!=="";class Ka extends ae(N){static get properties(){return{minWidth:{type:String,value:"55px"},editMinWidth:{type:String,value:"55px"},inputValue:{type:Object,notify:!0}}}getFilterFn(e,n){if(!(n==null||n===""))return ja(e,n)}renderCell(e,{item:n}){return h`<span class="default-column">${De(e,n)}</span>`}renderEditCell(e,{item:n},o){return h`<cosmoz-input
			no-label-float
			type="text"
			@change=${i=>o(i.target.value)}
			.value=${De(e,n)}
		></cosmoz-input>`}renderHeader(e,{filter:n,inputValue:o,headerFocused:r},i){return h`<cosmoz-input
			label=${e.title}
			.value=${o??n}
			@value-changed=${qa(i)}
			focused=${r}
			@focused-changed=${Xa(i)}
			@keydown=${Ua(i)}
			@blur=${Wa(i)}
		>
			<cosmoz-clear-button
				suffix
				slot="suffix"
				?visible=${Ya(n)}
				light
				@click=${Ga(i)}
			></cosmoz-clear-button>
		</cosmoz-input>`}legacyFilterToState(e){return{filter:e,inputValue:e}}}customElements.define("cosmoz-omnitable-column",Ka);const We=Symbol("memo"),br=t=>{let e=We,n=We,o;return function(r,i){if(e===r&&n===i)return o;const s=t(r,i);return o=s,e=r,n=i,s}},Za=t=>{let e=We,n=We,o=We,r;return function(i,s,l){if(e===i&&n===s&&o===l)return r;const c=t(i,s,l);return r=c,e=i,n=s,o=l,c}},ge=Symbol("column"),Qa=t=>{let e=!0;const n=t.map(o=>o.name);return t.forEach(o=>{o.name==null&&(e=!1,console.error("The name attribute needs to be set on all columns! Missing on column",o))}),t.forEach(o=>{n.indexOf(o.name)!==n.lastIndexOf(o.name)&&(e=!1,console.error("The name attribute needs to be unique among all columns! Not unique on column",o))}),e},Ja=t=>{const e=t.valuePath??t.name;return{name:t.name,title:t.title,valuePath:e,groupOn:t.groupOn??e,sortOn:t.sortOn??e,noSort:t.noSort,minWidth:t.minWidth,width:t.width,flex:t.flex,priority:t.priority,getString:t.getString,getComparableValue:t.getComparableValue,serializeFilter:t.serializeFilter,deserializeFilter:t.deserializeFilter,toXlsxValue:t.toXlsxValue,renderHeader:t.renderHeader,renderCell:t.renderCell,renderEditCell:t.renderEditCell,renderGroup:t.renderGroup,cellTitleFn:t.cellTitleFn,headerTitleFn:t.headerTitleFn,getFilterFn:t.getFilterFn,headerCellClass:t.headerCellClass,cellClass:t.cellClass,editable:t.editable,values:t.values,source:br(t.computeSource),noLocalFilter:t.noLocalFilter,mini:t.mini,renderMini:t.renderMini,loading:t.loading,externalValues:t.externalValues,computeSource:t.computeSource,trueLabel:t.trueLabel,falseLabel:t.falseLabel,valueProperty:t.valueProperty,textProperty:t.textProperty,emptyLabel:t.emptyLabel,emptyValue:t.emptyValue,min:t.min,max:t.max,locale:t.locale,autoupdate:t.autoupdate,maximumFractionDigits:t.maximumFractionDigits,minimumFractionDigits:t.minimumFractionDigits,currency:t.currency,rates:t.rates,autodetect:t.autodetect,ownerTree:t.ownerTree,keyProperty:t.keyProperty,...t.getConfig?.(t),[ge]:t}},ec=t=>t.isOmnitableColumn&&!t.hidden,tc=t=>{const e=t.filter(ec);return Qa(e)?e:[]},nc=(t,e)=>(Array.isArray(e)?t.filter(o=>e.includes(o.name)):t.filter(o=>!o.disabled)).map(Ja),oc=(t,{enabledColumns:e})=>{const[n,o]=M([]);return Ae(()=>{let r,i=[];const s=t.shadowRoot.querySelector("#columnsSlot"),l=a=>()=>{const u=s.assignedNodes({flatten:!0});if(a)i=u;else{const d=u.filter(b=>!i.includes(b)),p=i.filter(b=>!u.includes(b)),m=[...d,...p].some(b=>b.isOmnitableColumn);if(i=u,!m)return}o(nc(tc(u),e))},c=a=>{cancelAnimationFrame(r),r=requestAnimationFrame(l(a?.type==="cosmoz-column-prop-changed"))};return c(),s.addEventListener("slotchange",c),t.addEventListener("cosmoz-column-prop-changed",c),()=>{s.removeEventListener("slotchange",c),t.removeEventListener("cosmoz-column-prop-changed",c),cancelAnimationFrame(r)}},[e]),n},xr=(t,e)=>Array.isArray(t)?t.map(n=>F(n,e)).filter((n,o,r)=>n!=null&&r.indexOf(n)===o):void 0,Qe=({externalValues:t,values:e,valuePath:n},o)=>{if(t)return t;if(typeof e=="function")return e;if(n!==void 0)return xr(o,n)},rc=(t,e,n,o)=>{const{valuePath:r}=e,i=r!==void 0?F(n,r):void 0;if(o===i)return;r!==void 0&&Yr(n,r,o);const s={item:n,valuePath:r,value:o,oldValue:i,column:e[ge]};t.dispatchEvent(new CustomEvent("column-item-changed",{bubbles:!0,composed:!0,detail:s}))};class It{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,n){this._asyncModule=e,this._callback=n,this._timer=this._asyncModule.run(()=>{this._timer=null,pn.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),pn.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}static debounce(e,n,o){return e instanceof It?e._cancelAsync():e=new It,e.setConfig(n,o),e}}let pn=new Set;const ic=function(t){pn.add(t)},vr=t=>t?typeof t.close=="function"?t:vr(t.parentElement):null,kn=t=>class extends t{static get properties(){return{filter:{type:Object,notify:!0},values:{type:Array,value(){return[]}},headerFocused:{type:Boolean,notify:!0},min:{type:Number,value:null},max:{type:Number,value:null},limits:{type:Function},autoupdate:{type:String,value:!0},locale:{type:String,value:null},_filterInput:{type:Object,value(){return{min:null,max:null}}},_range:{type:Object,computed:"_computeRange(values.*)"},_limit:{type:Object,computed:"_computeLimit(_range, _filterInput.*, min, max)",value(){return{}}},_tooltip:{type:String,computed:"_computeTooltip(title, _filterText)"},_fromClasses:{type:String,computed:"_computeInputClasses(_filterInput.min)"},_toClasses:{type:String,computed:"_computeInputClasses(_filterInput.max)"}}}static get observers(){return["_filterInputChanged(_filterInput.*, autoupdate)","_filterChanged(filter.*)","_updateLimits(limits, headerFocused)"]}disconnectedCallback(){this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),super.disconnectedCallback()}_computeInputClasses(e){return e!=null&&e!==""?"has-value":""}toNumber(e,n,o){if(e==null||e==="")return;const r=typeof e=="number"?e:Number(e);if(Number.isNaN(r))return;if(o==null||n==null)return r;const i=this.toNumber(n);return i==null?r:o(r,i)}toValue(){return this.toNumber.apply(this,arguments)}getComparableValue(e,n){if(e==null)return;let o=e;return n!=null&&(o=this.get(n,e)),this.toValue(o)}renderValue(){}getInputString(e,n=this.valuePath){const o=this.toValue(this.get(n,e));return this._toInputString(o)}_computeRange(e){const n=e.base,o=Array.isArray(n)&&n.length&&n.map(r=>this.toValue(r)).filter(r=>r!=null);return!o||o.length<1?{min:null,max:null}:o.reduce((r,i)=>({min:this.toValue(i,r.min,Math.min),max:this.toValue(i,r.max,Math.max)}),{})}_computeLimit(e,n,o,r){if(!e)return;const i=n.base,s=this.toValue(o),l=this.toValue(r),c=s??this.toValue(e.min),a=l??this.toValue(e.max);return{fromMin:c,fromMax:this.toValue(a,this._fromInputString(i.max,"max"),Math.min),toMin:this.toValue(c,this._fromInputString(i.min,"min"),Math.max),toMax:a}}_computeFilterText(e){if(e.base==null)return;const n=e.base,o=this.toValue(n.min),r=this.toValue(n.max),i=[];return o!=null&&i.push(this.renderValue(o)),i.push(" - "),r!=null&&i.push(this.renderValue(r)),i.length>1?i.join(""):void 0}_computeTooltip(e,n){return n==null?e:`${e}: ${n}`}_fromInputString(e){return this.toValue(e)}_toInputString(e){const n=this.toValue(e);return n??null}_getDefaultFilter(){return{min:null,max:null}}_filterInputChanged(e,n){const o=e.path.split(".")[1];this.__inputChangePath=o||null,n&&(this._limitInputDebouncer=It.debounce(this._limitInputDebouncer,Kr.after(600),()=>{this._limitInput(),this._updateFilter()}),ic(this._limitInputDebouncer))}_clearFrom(){this.set("_filterInput.min",null),this._updateFilter()}_clearTo(){this.set("_filterInput.max",null),this._updateFilter()}_onBlur(){this._limitInput(),this._updateFilter()}_onKeyDown(e){const n=e.currentTarget,o=Array.from(n.parentElement.querySelectorAll("cosmoz-input")),r=o[o.findIndex(l=>l===n)+1],i=!r,s=o[0]===n;switch(e.keyCode){case 13:if(e.preventDefault(),!i)r.focus();else{const l=this._limitInput();this._updateFilter(),l||this._closeParent(n)}break;case 9:(i&&!e.shiftKey||s&&e.shiftKey)&&this._closeParent(n)}}_closeParent(e){const n=vr(e);n&&n.close()}_onDropdownOpenedChanged({currentTarget:e,type:n,detail:o}){(n==="focus"||o?.value===!0)&&setTimeout(()=>{e.querySelector("cosmoz-input:focus")||e.querySelector("cosmoz-input")?.focus()},100)}_limitInput(){const e=this._filterInput,n=this.__inputChangePath,o=n?this._fromInputString(this.get(n,e),n):null;if(this.__inputChangePath=null,o==null)return!1;const r=this._limit,i=n==="min"?"from":"to",s=this.get(i+"Min",r),l=this.get(i+"Max",r),c=this.toValue(o,s,Math.max),a=this.toValue(c,l,Math.min);return this.getComparableValue(o)!==this.getComparableValue(a)?(this.set(["_filterInput",n],this._toInputString(a,n)),this._limitInputDebouncer&&this._limitInputDebouncer.cancel(),!0):!1}_updateFilter(){const e=this._filterInput,n=this.filter,o=this._fromInputString(e.min,"min"),r=this._fromInputString(e.max,"max");this.getComparableValue(o)===this.getComparableValue(n,"min")&&this.getComparableValue(r)===this.getComparableValue(n,"max")||this.set("filter",{min:o,max:r})}_filterChanged(e){if(this._filterInput==null)return;const n=this._filterInput,o=e.base,r=this._fromInputString(n.min,"min"),i=this._fromInputString(n.max,"max");this.getComparableValue(r)===this.getComparableValue(o,"min")&&this.getComparableValue(i)===this.getComparableValue(o,"max")||(this.set("_filterInput",{min:this._toInputString(o.min),max:this._toInputString(o.max)}),this._limitInputDebouncer&&this._limitInputDebouncer.cancel())}hasFilter(){const e=this.filter;return e==null?!1:this.toValue(e.min)!=null||this.toValue(e.max)!=null}resetFilter(){this.filter=this._getDefaultFilter()}_updateLimits(e,n){e&&Promise.resolve(V(e,{active:n})).then(o=>{const{min:r,max:i}=o??{};Object.assign(this,{...r!=null?{min:r}:{},...i!=null?{max:i}:{}})})}},Je=t=>class extends t{static get template(){return Lt`<div id="output" style="position:relative;"></div>`}connectedCallback(){super.connectedCallback(),_t(this.render(),this.$.output)}_propertiesChanged(e,n,o){super._propertiesChanged(e,n,o),requestAnimationFrame(()=>_t(this.render(),this.$.output))}};const sc=Ve(class extends gn{constructor(t){if(super(t),t.type!==he.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in e)e[o]&&!this.nt?.has(o)&&this.st.add(o);return this.render(e)}const n=t.element.classList;for(const o of this.st)o in e||(n.remove(o),this.st.delete(o));for(const o in e){const r=!!e[o];r===this.st.has(o)||this.nt?.has(o)||(r?(n.add(o),this.st.add(o)):(n.remove(o),this.st.delete(o)))}return re}}),lc=["label","value","slot","always-float-label"],ac=q`
	${wn}

	:host {
		--text-align: left;
	}

	:host([text-align='right']) {
		--text-align: right;
	}

	:host([text-align='center']) {
		--text-align: center;
	}

	:host::part(control) {
		width: 100%;
	}

	#input {
		color: var(--color);
		user-select: none;
		cursor: pointer;
		min-height: var(--line-height);
		text-align: var(--text-align);
		white-space: nowrap;
		overflow: clip;
		/* TODO: Remove later on, for compat only */
		font-size: 16px;
		font-family: sans-serif, Verdana, Arial;
	}

	label {
		display: block;
		text-align: var(--text-align);
		transform-origin: var(--text-align) top;
		/* TODO: Remove later on, for compat only */
		font-size: 13px;
	}

	:host(:not([always-float-label])) label {
		transform: none !important;
	}
`,cc=t=>{const{label:e,value:n,slot:o}=t,r=h`<div
		id="input"
		part="input"
		role="button"
		class="control"
		slot=${o}
	>
		${n||""}
	</div>`;return yn(r,{label:e})};customElements.define("cosmoz-omnitable-dropdown-input",L(cc,{observedAttributes:lc,styleSheets:[ac]}));const et=({title:t,tooltip:e="",filterText:n="",onOpenedChanged:o,content:r,horizontalAlign:i="left",externalValues:s=null})=>{const l={filtered:!!n,...s!=null&&{[`external-values-${s}`]:!0}};return h`
		<style>
			.dropdown {
				outline: none;
			}
			.dropdown:focus-within .input {
				--focused: focused;
			}

			.dropdown::part(button) {
				border: none;
				cursor: pointer;
				outline: none;
				background: transparent;
				border-radius: unset;
				position: relative;
				width: 100%;
				height: 100%;
				min-height: 32px;
				display: flex;
				flex-direction: column;
				justify-content: center;
			}

			.dropdown-content {
				position: absolute !important;
				height: auto !important;
				top: -30px;
				left: 0;
				right: 0;
				width: fit-content;
			}

			.dropdown-content h3 {
				font-weight: 500;
				font-size: 13px;
				margin: 0;
				color: var(--cosmoz-omnitable-text-color);
				font-family: var(
					--cosmoz-input-font-family,
					var(--paper-font-subhead_-_font-family, 'Inter', sans-serif)
				);
			}

			.dropdown-content {
				padding: 10px 10px 10px 10px;
				min-width: 120px;
				height: 100%;
				position: relative;
				text-align: left;
				background: var(--cosmoz-omnitable-amount-input-background, #ffffff);
				border-radius: 6px;
				backdrop-filter: blur(16px) saturate(180%);
				-webkit-backdrop-filter: blur(16px) saturate(180%);
				box-shadow:
					0 4px 24px 0 rgba(0, 0, 0, 0.18),
					0 1.5px 6px 0 rgba(0, 0, 0, 0.1);
			}
		</style>

		<cosmoz-dropdown
			@focus=${o}
			class=${`${sc(l)} dropdown`}
			title=${e||""}
		>
			<cosmoz-omnitable-dropdown-input
				class="input"
				slot="button"
				.label=${t}
				.placeholder=${t}
				.value=${n??""}
				text-align=${i}
				?always-float-label=${n?.length>0}
			></cosmoz-omnitable-dropdown-input>
			<div class="dropdown-content">${r}</div>
		</cosmoz-dropdown>
	`};class uc extends kn(Je(N)){static get properties(){return{currency:{type:String},autodetect:{type:Boolean,value:!1},rates:{type:Object},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:"_computeFilterText(filter.*, _formatters)"},headerFocused:{type:Boolean,value:!1}}}static get observers(){return["_valuesChanged(autodetect, currency, values)"]}render(){const e=n=>{this.headerFocused=n.type==="focus",this._onDropdownOpenedChanged(n)};return h`
			<style>
				cosmoz-input[type='number'] {
					background: var(--cosmoz-omnitable-amount-input-background, #ffffff);
					border-radius: 6px;
					border: 1px solid #d1d1d6;
					box-shadow: 0 1px 2px 0 rgba(60, 60, 60, 0.04);
					padding: 2px 8px;
					margin-bottom: 6px;
					min-height: 28px;
					transition:
						border-color 0.2s,
						box-shadow 0.2s;
				}

				cosmoz-input[type='number']:focus-within {
					border-color: var(--cz-accent-color, #007aff);
					box-shadow: 0 0 0 1px rgba(0, 122, 255, 0.15);
					background: var(--cosmoz-omnitable-amount-input-background, #ffffff);
				}
			</style>
			<cosmoz-clear-button
				@click=${()=>this.resetFilter()}
				?visible=${this.hasFilter()}
			></cosmoz-clear-button>

			${et({title:this.title,tooltip:this._tooltip,filterText:this._filterText,externalValues:this.externalValues,onOpenedChanged:e,content:h`
					<h3 style="margin: 0;">${this.title}</h3>
					<cosmoz-input
						class=${this._fromClasses}
						type="number"
						title=${T("Minimum amount")}
						label=${T("Min amount")}
						.value=${this._filterInput?.min}
						@value-changed=${n=>{this.set("_filterInput.min",n.detail.value)}}
						@blur=${n=>this._onBlur(n)}
						@keydown=${n=>this._onKeyDown(n)}
						min=${this._toInputStringAmount(this._limit.fromMin)}
						max=${this._toInputStringAmount(this._limit.fromMax)}
					>
						<div slot="suffix" suffix>${this.filter?.min?.currency}</div>
					</cosmoz-input>
					<cosmoz-input
						class=${this._toClasses}
						type="number"
						title=${T("Maximum amount")}
						label=${T("Max amount")}
						.value=${this._filterInput?.max}
						@value-changed=${n=>{this.set("_filterInput.max",n.detail.value)}}
						@blur=${n=>this._onBlur(n)}
						@keydown=${n=>this._onKeyDown(n)}
						min=${this._toInputStringAmount(this._limit.toMin)}
						max=${this._toInputStringAmount(this._limit.toMax)}
					>
						<div slot="suffix" suffix>${this.filter?.max?.currency}</div>
					</cosmoz-input>
				`})}
		`}_valuesChanged(e,n,o){if(!Array.isArray(o)||o.length<1||!e&&n)return;const r=o.reduce((s,l)=>{if(l.currency){const c=l.currency;s[c]=(s[c]||0)+1}return s},{});let i=Object.keys(r)[0];Object.keys(r).reduce((s,l)=>{const c=Math.max(s,r[l]);return c===r[l]&&(i=l),c},0),this.set("currency",i)}toAmount(e,n,o){if(e==null||e==="")return;if(typeof e!="object"||e.currency==null||e.currency==="")return null;const r=this.toNumber(e.amount);if(r==null||Number.isNaN(r))return null;const i={currency:e.currency,amount:r};if(o==null||n==null)return i;const s=this.toAmount(n);if(s==null)return i;const l=this.rates||{},c=i.amount*(l[i.currency]||1),a=s.amount*(l[s.currency]||1);return this.toNumber(c,a,o)===c?i:s}toValue(){return this.toAmount.apply(this,arguments)}getComparableValue(e,n){const o=super.getComparableValue(e,n);if(o==null)return;const r=this.toNumber(o.amount),i=this.rates;return i==null?r:r*(i[o.currency]||1)}getString(e,n=this.valuePath){const o=this.toValue(this.get(n,e));return o===void 0?"":o===null?"Invalid value":this.renderValue(o)}getCurrency(e,n){const o=this.get(n,e);return o&&o.currency}getFormatter(e,n){const o=n||"",r=e+o||"",i=this._formatters=this._formatters||{};return i[r]||(i[r]=new Intl.NumberFormat(n||void 0,{style:"currency",currency:e})),i[r]}renderValue(e){const n=this.toAmount(e);return n==null?"":this.getFormatter(n.currency,this.locale).format(e.amount)}_amountValueChanged(e){const n=e.target,o=n.value,r=e.model.item,i=this.get(this.valuePath,r),s=Number(o),l={amount:s,currency:i.currency};this.set(this.valuePath,l,r),this._fireItemChangeEvent(r,this.valuePath,i,this.renderValue.bind(this))}_toInputString(e){const n=this.toValue(e);return n==null?null:this.toNumber(n.amount)}_toInputStringAmount(e){const n=this.rates;if(n==null)return this._toInputString(e);const o=this.toValue(e);return o==null?null:(this.toNumber(o.amount)*(n[o.currency]||1)/(n[this.currency]||1)).toFixed(2)}_fromInputString(e,n){const o=this.toNumber(e);if(o!=null)return this.toValue({amount:o,currency:n&&this.get(["filter",n,"currency"])||this.currency})}}customElements.define("cosmoz-omnitable-amount-range-input",uc);const G=(t,e,n)=>{if(t==null||t==="")return;const o=typeof t=="number"?t:Number(t);if(!Number.isNaN(o))return o},yr=t=>{const e=G(t);return e==null?null:e.toString()},dc=({valuePath:t},e)=>{const n=G(t?F(e,t):e);return yr(n)},uo=t=>{const e=yr(t);return e??""},Ie=({valuePath:t,maximumFractionDigits:e},n)=>{if(n==null)return;const o=t?F(n,t):n,r=G(o);if(r!=null)return e!==null?G(r.toFixed(e)):r},mc=Za((t,e,n)=>{const o={localeMatcher:"best fit"};return e!==null&&(o.minimumFractionDigits=e),n!==null&&(o.maximumFractionDigits=n),new Intl.NumberFormat(t||void 0,o)}),mo=({valuePath:t,locale:e,minimumFractionDigits:n,maximumFractionDigits:o},r)=>{const i=t?F(r,t):r;if(i==null)return"";const s=G(i);return s==null?void 0:mc(e,n,o).format(s)},pc=(t,e)=>n=>{const o=Ie(t,n);if(o==null)return!1;const r=Ie({...t,valuePath:"min"},e),i=Ie({...t,valuePath:"max"},e);return!(o<(r??-1/0)||o>(i??1/0))},Ge=(t={},e,n,o)=>{if(e==null||e==="")return;if(typeof e!="object"||e.currency==null||e.currency==="")return null;const r=G(e.amount);return r==null||Number.isNaN(r)?null:{currency:e.currency,amount:r}},Oe=({valuePath:t,rates:e},n)=>{if(n==null)return;let o=n;t!=null&&(o=F(n,t));const r=Ge(e,o);if(r==null)return;const i=G(r.amount);return e==null||i==null?i:i*(e?.[r.currency]||1)},hc=(t,e)=>n=>{const o=Oe(t,n);if(o===void 0)return!1;const r=Oe({...t,valuePath:"min"},e),i=Oe({...t,valuePath:"max"},e);return r===void 0||i===void 0?!0:!(o<r||o>i)},it={},fc=(t,e)=>{const o=t+(e||"")||"";return it[o]||(it[o]=new Intl.NumberFormat(e||void 0,{style:"currency",currency:t})),it[o]},gc=(t,e,n)=>{const o=Ge(t,e);return o==null?"":fc(o.currency,n).format(o.amount)},po=({valuePath:t,rates:e,locale:n},o)=>{const r=Ge(e,t?F(o,t):void 0);return r===void 0?"":r===null?"Invalid value":gc(e,r,n)},ho=t=>t?t.amount+t.currency:"",fo=t=>{if(t==null||t==="")return;const e=t.match(/^(-?[\d]+)([\D]+?)$/iu);if(!(!Array.isArray(e)||e.length<0))return{amount:Number(e[1]),currency:e[2]}},bc=({valuePath:t},e)=>t?F(e,t)?.currency:null,xc=({valuePath:t},e)=>t?F(e,t)?.amount:void 0;class vc extends ae(N){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},currency:{type:String,notify:!0},autodetect:{type:Boolean,value:!1,notify:!0},rates:{type:Object,notify:!0},width:{type:String,value:"70px"},cellClass:{type:String,value:"amount-cell align-right"},headerCellClass:{type:String,value:"amount-header-cell"}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,n){const o=Oe({...e,valuePath:"min"},n),r=Oe({...e,valuePath:"max"},n);if(!(o==null&&r==null))return hc(e,n)}getString(e,n){return po(e,n)}toXlsxValue(e,n){return po(e,n)}getComparableValue(e,n){return Oe(e,n)}serializeFilter({rates:e},n){if(n==null)return;const o=Ge(e,n.min),r=Ge(e,n.max);if(!(o==null&&r==null))return ho(o)+"~"+ho(r)}deserializeFilter(e,n){if(n==null||n==="")return null;const o=n.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(o)?{min:fo(o[1]),max:fo(o[2])}:null}renderCell(e,{item:n}){return h`<span>${e.getString(e,n)}</span>`}renderEditCell(e,{item:n},o){return h`<cosmoz-input
			no-label-float
			type="number"
			@change=${i=>o({amount:i.target.value,currency:F(n,e.valuePath)?.currency})}
			.value=${xc(e,n)}
		>
			<div slot="suffix">${bc(e,n)}</div>
		</cosmoz-input>`}renderHeader({title:e,min:n,max:o,limits:r,locale:i,rates:s,currency:l,autoupdate:c,autodetect:a},{filter:u},d,p){return h`<cosmoz-omnitable-amount-range-input
			.title=${e}
			.filter=${u}
			.values=${p}
			.rates=${s}
			.min=${n}
			.max=${o}
			.limits=${r}
			.locale=${i}
			.currency=${l}
			.autoupdate=${c}
			.autodetect=${a}
			@filter-changed=${({detail:{value:m}})=>d(b=>({...b,filter:m}))}
			@header-focused-changed=${({detail:{value:m}})=>d(b=>({...b,headerFocused:m}))}
		></cosmoz-omnitable-amount-range-input>`}computeSource(e,n){return Qe(e,n)}}customElements.define("cosmoz-omnitable-column-amount",vc);const yc=(t,e)=>{if(!Array.isArray(t))return;const n=[];return t.reduce((o,r)=>Array.isArray(r)?(r.forEach(i=>{o.push(i)}),o):(o.push(r),o),[]).filter((o,r,i)=>{if(i.indexOf(o)!==r)return!1;if(e){const s=F(o,e);if(n.indexOf(s)!==-1)return!1;n.push(s)}return!0})},wc=(t,e,n)=>{if(t==null)return[];if(Array.isArray(t))return yc(t,e);if(typeof t=="object"){const o=e??"id",r=n??"label";return Object.entries(t).map(([i,s])=>({[o]:i,[r]:s})).sort((i,s)=>i[r]<s[r]?-1:i[r]>s[r]?1:0)}return[]},En=(t,e,n)=>Z(e&&F(t,e)).map(Te(n)),In=({valuePath:t,textProperty:e},n)=>En(n,t,e).filter(o=>o!=null).join(", "),$c=In,_c=({valueProperty:t,valuePath:e,emptyValue:n,emptyProperty:o},r)=>i=>{const s=Te(t),l=Z(F(i,e));return r.some(c=>l.length===0&&Te(o||t)(c)===n||l.some(a=>s(a)===s(c)))},On=t=>e=>t(n=>({...n,filter:e})),Fn=t=>e=>t(n=>({...n,headerFocused:e})),An=t=>e=>t(n=>({...n,query:e})),wr=({emptyValue:t,emptyLabel:e,emptyProperty:n,textProperty:o,valueProperty:r},i)=>{const s=wc(i,r,o);return!e||t===void 0||!o||!(n||r)||!s?s:[{[o]:e,[n||r]:t},...s]},zc=(t,e)=>wr(t,xr(e,t.valuePath)),Tn=t=>class extends t{static get properties(){return{textProperty:{type:String},valueProperty:{type:String},emptyLabel:{type:String},emptyValue:{type:Object},emptyProperty:{type:String}}}getConfig(e){return{emptyProperty:e.emptyProperty}}getString(e,n){return In(e,n)}toXlsxValue(e,n){return $c(e,n)}getComparableValue({valuePath:e,valueProperty:n},o){const r=F(o,e);return n==null?r:Z(r).reduce((s,l)=>(s.push(F(l,n)),s),[]).sort().join(" ")}getFilterFn(e,n){if(!(!n||!Array.isArray(n)||n.length===0))return _c(e,n)}serializeFilter(e,n){return n.length===0?null:JSON.stringify(n)}deserializeFilter(e,n){return JSON.parse(decodeURIComponent(n))}computeSource(e,n){return e.externalValues||typeof e.values=="function"?async(...o)=>wr(e,await Promise.resolve(V(e.values,...o))):zc(e,n)}},Cc=({valuePath:t,textProperty:e,valueProperty:n},o)=>{const r=e?Mo(e):Te(n),i=Z(t&&F(o,t)).map(r);return i.length>1?i.filter(Boolean).join(","):i[0]};class Sc extends Tn(ae(N)){static get properties(){return{headerCellClass:{type:String,value:"autocomplete-header-cell"},minWidth:{type:String,value:"55px"},editMinWidth:{type:String,value:"55px"},keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},showSingle:{type:Boolean},preserveOrder:{type:Boolean},limit:{type:Number},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,showSingle:e.showSingle,preserveOrder:e.preserveOrder,limit:e.limit,textual:e.textual}}renderCell(e,{item:n}){return h`<span class="default-column"
			>${e.getString(e,n)}</span
		>`}renderEditCell(e,{item:n},o){return h`<cosmoz-input
			no-label-float
			type="text"
			@change=${i=>o(i.target.value)}
			.value=${De(e,n)}
		></cosmoz-input>`}renderHeader(e,{filter:n,query:o},r,i){return h`<cosmoz-autocomplete-ui
			class="external-values-${e.externalValues}"
			?keep-opened=${e.keepOpened}
			?keep-query=${e.keepQuery}
			?show-single=${e.showSingle}
			?preserve-order=${e.preserveOrder}
			.textual=${e.textual}
			.label=${e.title}
			.source=${i}
			.textProperty=${e.textProperty}
			.valueProperty=${e.valueProperty}
			.itemRenderer=${e[ge]?.itemRenderer}
			.value=${n}
			.text=${o}
			.limit=${e.limit}
			.onChange=${On(r)}
			.onFocus=${Fn(r)}
			.onText=${An(r)}
			>${E(e.loading,()=>h`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}getComparableValue(e,n){return Cc(e,n)}}customElements.define("cosmoz-omnitable-column-autocomplete",Sc);const Ln=(t,e)=>e.find(({value:n})=>t===n),kc=(t,e,n)=>{const o=Ln(e,n);return o?o.text:t},go=(t,e,n,o)=>kc(t,F(e,n),o),Ec=({valuePath:t},e,n)=>Ln(F(e,t),n),Ic=t=>e=>{t(n=>({...n,filter:e?.[0]?.value??null}))},Oc=t=>e=>{t(n=>({...n,headerFocused:e}))},Fc=t=>e=>{t(n=>({...n,query:e}))},Ac=t=>e=>t(e?.[0]?.value),bo=({valuePath:t,trueLabel:e,falseLabel:n},o)=>F(o,t)?e:n,Tc=({valuePath:t},e)=>n=>F(n,t)===e,st=br((t,e)=>[{text:t,value:!0},{text:e,value:!1}]),Lc=({valuePath:t,trueLabel:e,falseLabel:n},o)=>t?F(o,t)?e:n:"",Rc=(t,e)=>{try{return JSON.parse(e)}catch{return null}};class Dc extends ae(N){static get properties(){return{trueLabel:{type:String,value:"True"},falseLabel:{type:String,value:"False"},flex:{type:String,value:"0"},cellClass:{type:String,value:"boolean-cell"}}}getString(e,n){return bo(e,n)}renderCell(e,{item:n}){return bo(e,n)}renderEditCell(e,{item:n},o){const{trueLabel:r,falseLabel:i}=e;return h`<cosmoz-autocomplete
			no-label-float
			.title=${go(e.title,n,e.valuePath,st(r,i))}
			.source=${st(r,i)}
			.textProperty=${"text"}
			.value=${Ec(e,n,st(r,i))}
			.onChange=${Ac(o)}
			.limit=${1}
			>${E(e.loading,()=>h`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete
		>`}renderHeader(e,{filter:n,query:o},r,i){return h`<cosmoz-autocomplete-ui
			.label=${e.title}
			.title=${go(e.title,n,e.valuePath,i)}
			.source=${i}
			.textProperty=${"text"}
			.value=${Ln(n,i)}
			.text=${o}
			.onChange=${Ic(r)}
			.onFocus=${Oc(r)}
			.onText=${Fc(r)}
			.limit=${1}
			>${E(e.loading,()=>h`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}computeSource({trueLabel:e,falseLabel:n}){return st(e,n)}getFilterFn(e,n){if(n!=null)return Tc(e,n)}toXlsxValue(e,n){return Lc(e,n)}deserializeFilter(e,n){return Rc(e,n)}}customElements.define("cosmoz-omnitable-column-boolean",Dc);const Rn=t=>class extends kn(t){static get properties(){return{max:{type:Date,value:null},min:{type:Date,value:null},_filterText:{type:String,computed:"_computeFilterText(filter.*, formatter)"},formatter:{type:Object,computed:"_computeFormatter(locale)"}}}toDate(e,n,o){if(e==null||e==="")return;let r=e;if(r instanceof Date||(typeof e=="string"&&(r=this.getAbsoluteISOString(r)),r=new Date(r)),Number.isNaN(r.getTime()))return null;if(o==null||n==null)return r;const i=this.toDate(n);if(i==null)return r;const s=this.getComparableValue(r),l=this.getComparableValue(i);return o(s,l)===s?r:i}toValue(){return this.toDate.apply(this,arguments)}getComparableValue(e,n){const o=super.getComparableValue(e,n);if(o!=null)return this.toNumber(o.getTime())}getString(e,n=this.valuePath,o=this.formatter){const r=this.toValue(this.get(n,e));return r===void 0?"":r===null?"Invalid Date":this.renderValue(r,o)}getAbsoluteISOString(e){return e.length===19?e+this._getTimezoneString(e):e}_getTimezoneString(e){const n=-new Date(e).getTimezoneOffset()/60;return(n<0?"-":"+")+["0",Math.abs(n)].join("").substr(-2)+":00"}renderValue(e,n=this.formatter){if(n==null)return;const o=this.toValue(e);if(o!=null)return n.format(o)}_computeFormatter(e){return new Intl.DateTimeFormat(e||void 0)}_toInputString(e){const n=this.toValue(e);return n==null?null:this._toLocalISOString(n).slice(0,10)}_dateValueChanged(e){const n=e.currentTarget,o=n.value,r=e.model.item,i=this.get(this.valuePath,r),s=this._fromInputString(o);this.set(this.valuePath,s,r),this._fireItemChangeEvent(r,this.valuePath,i,this.renderValue.bind(this))}_toLocalISOString(e){return Vt(e)}};class Mc extends Rn(Je(N)){render(){const e=n=>{this.headerFocused=n.type==="focus"};return h`
			<style>
				cosmoz-input[type='date'] {
					background: var(--cosmoz-omnitable-amount-input-background, #ffffff);
					border-radius: 6px;
					border: 1px solid #d1d1d6;
					box-shadow: 0 1px 2px 0 rgba(60, 60, 60, 0.04);
					padding: 2px 8px;
					margin-bottom: 6px;
					min-height: 28px;
					transition:
						border-color 0.2s,
						box-shadow 0.2s;
				}

				cosmoz-input[type='date']:focus-within {
					border-color: var(--cz-accent-color, #007aff);
					box-shadow: 0 0 0 1px rgba(0, 122, 255, 0.15);
					background: var(--cosmoz-omnitable-amount-input-background, #ffffff);
				}
			</style>

			<cosmoz-clear-button
				@click=${()=>this.resetFilter()}
				?visible=${this.hasFilter()}
			></cosmoz-clear-button>

			${et({title:this.title,tooltip:this._tooltip,filterText:this._filterText,externalValues:this.externalValues,onOpenedChanged:e,content:h`
					<h3 style="margin: 0;">${this.title}</h3>
					<cosmoz-input
						type="date"
						label=${T("From date")}
						min=${this._toInputString(this._limit.fromMin)}
						max=${this._toInputString(this._limit.fromMax)}
						.value=${this._filterInput?.min}
						@value-changed=${n=>this.set("_filterInput.min",n.detail.value)}
					></cosmoz-input>
					<cosmoz-input
						type="date"
						label=${T("Until date")}
						min=${this._toInputString(this._limit.toMin)}
						max=${this._toInputString(this._limit.toMax)}
						.value=${this._filterInput?.max}
						@value-changed=${n=>this.set("_filterInput.max",n.detail.value)}
					></cosmoz-input>
				`})}
		`}_fromInputString(e,n){const o=this.toDate(e);if(o!=null)return n==="min"&&o.setHours(0,0,0,0),n==="max"&&o.setHours(23,59,59),o}_filterInputChanged(e,n){const o=e.path.split(".")[1],r=o&&e.value;if(r&&r.match(/^0+/u)){this._limitInputDebouncer.cancel();return}super._filterInputChanged(e,n)}}customElements.define("cosmoz-omnitable-date-range-input",Mc);const Vc=t=>{const e=-new Date(t).getTimezoneOffset()/60;return(e<0?"-":"+")+["0",Math.abs(e)].join("").substr(-2)+":00"},Dn=t=>t.length===19?t+Vc(t):t,$r=t=>{if(t==null||t==="")return;let e=t;return!(e instanceof Date)&&(typeof t=="string"&&(e=Dn(e)),e=hi(e),!e)||Number.isNaN(e.getTime())?null:e},ue=({valuePath:t},e)=>{if(e==null)return;let n=e;t!=null&&(n=F(e,t));const o=$r(n);if(o!=null)return G(o.getTime())},P=(t,e,n)=>{const o=$r(t);return o??null},Mn=(t,e)=>{if(e==null)return;const n=P(t);if(n!=null)return e.format(n)},lt={},Bc=t=>{const e=t||"";return lt[e]||(lt[e]=new Intl.DateTimeFormat(t||void 0)),lt[e]},xo=({valuePath:t,locale:e},n)=>{let o=F(n,t||"");return o===void 0?"":(o=P(o),o===null?"Invalid Date":Mn(o,Bc(e)))},_r=t=>{const e=P(t);if(e==null)return null;const n=Vt(e);return n==null?null:n.slice(0,10)},Pc=({valuePath:t},e)=>_r(F(e,t||"")),zr=(t,e)=>{const n=P(t);if(n!=null)return n},vo=t=>{const e=_r(t);return e??""},Nc=({valuePath:t},e)=>{if(!t)return"";const n=P(F(e,t));if(!n)return"";const o=P(Vt(n));return o?(o.setHours(0,0,0,0),o):""},Cr=(t,e)=>n=>{const o=ue(t,n);if(o==null)return!1;const r=ue({...t,valuePath:"min"},e),i=ue({...t,valuePath:"max"},e);return!(o<(r??-1/0)||o>(i??1/0))};class jc extends ae(N){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:"date-header-cell"},width:{type:String,value:"100px"},minWidth:{type:String,value:"82px"},flex:{type:String,value:"0"}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,n){const o=ue({...e,valuePath:"min"},n),r=ue({...e,valuePath:"max"},n);if(!(o==null&&r==null))return Cr(e,n)}getString(e,n){return xo(e,n)}toXlsxValue(e,n){return Nc(e,n)}getComparableValue(e,n){return ue(e,n)}serializeFilter(e,n){if(n==null)return;const o=P(n.min),r=P(n.max);if(!(o==null&&r==null))return vo(o)+"~"+vo(r)}deserializeFilter(e,n){if(n==null||n==="")return null;const o=n.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(o)?{min:P(o[1]),max:P(o[2])}:null}renderCell(e,{item:n}){return h`<div class="omnitable-cell-date">
			${xo(e,n)}
		</div>`}renderEditCell(e,{item:n},o){return h`<cosmoz-input
			no-label-float
			type="date"
			@change=${i=>o(zr(i.target.value))}
			.value=${Pc(e,n)}
		></cosmoz-input>`}renderHeader({title:e,min:n,max:o,limits:r,locale:i},{filter:s},l,c){return h`<cosmoz-omnitable-date-range-input
			.title=${e}
			.filter=${s}
			.values=${c}
			.min=${n}
			.max=${o}
			.limits=${r}
			.locale=${i}
			@filter-changed=${({detail:{value:a}})=>l(u=>({...u,filter:a}))}
			@header-focused-changed=${({detail:{value:a}})=>l(u=>({...u,headerFocused:a}))}
		></cosmoz-omnitable-date-range-input>`}computeSource(e,n){return Qe(e,n)}}customElements.define("cosmoz-omnitable-column-date",jc);class Hc extends Tn(ae(N)){renderCell({valuePath:e,textProperty:n},{item:o}){const r=En(o,e,n).map(i=>h`<li>${i}</li>`);return h`
			<style>
				ul {
					padding: 0;
					display: inline;
					list-style: none;
				}
				ul li {
					display: inline;
				}
				ul li:after {
					content: ', ';
				}
				ul li:last-child:after {
					content: '';
				}
			</style>
			<ul>
				${r}
			</ul>
		`}renderEditCell(){return"not implemented"}renderHeader(e,{filter:n,query:o},r,i){return h`<cosmoz-autocomplete-ui
			class="external-values-${e.externalValues}"
			.label=${e.title}
			.source=${i}
			.textProperty=${e.textProperty}
			.value=${n}
			.text=${o}
			.onChange=${On(r)}
			.onFocus=${Fn(r)}
			.onText=${An(r)}
			>${E(e.loading,()=>h`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		> `}}customElements.define("cosmoz-omnitable-column-list-horizontal",Hc);window.Cosmoz=window.Cosmoz||{};class yo extends Zr(fi(di,N)){static get template(){return Lt`
			<style>
				:host {
					display: block;
				}

				:host a {
					color: var(--primary-link-color, inherit);
				}

				[hidden] {
					display: none;
				}

				ul {
					list-style-type: none;
					margin: 0.3em 0;
					padding-left: 0;
				}

				li {
					text-overflow: ellipsis;
					overflow: hidden;
				}
			</style>

			<ul hidden$="[[ isEmpty(items) ]]">
				<li>
					<span>[[ _firstItem(items) ]]</span>
				</li>
				<li class="see-more" hidden$="[[_hideExpand(items, _expanded)]]">
					<a href="#" on-tap="_toggleExpand"
						>[[ _('and {0} more', _othersCount, t) ]]</a
					>
				</li>
				<template
					is="dom-repeat"
					items="[[ _otherItems(items, _expanded) ]]"
					as="item"
				>
					<li>
						<span class="item">[[ item ]]</span>
					</li>
				</template>
				<li class="see-less" hidden$="[[ _hideCollapse(items, _expanded) ]]">
					<a href="#" on-tap="_toggleExpand">[[ _('See less', t) ]]</a>
				</li>
			</ul>
		`}static get is(){return"cosmoz-omnitable-column-list-data"}static get properties(){return{items:{type:Array},_expanded:{type:Boolean,value:!1},_othersCount:{type:Number,computed:"_computeOthersCount(items)"}}}static get observers(){return["_itemsLengthChanged(items.length)"]}_itemsLengthChanged(){requestAnimationFrame(()=>this.dispatchEvent(new CustomEvent("expand",{bubbles:!0})))}_firstItem(e){if(e!=null&&e.length>0)return e[0]}_hideExpand(e,n){return e!==void 0&&e.length!==null?e.length<=2||n:!0}_hideCollapse(e,n){return e!==void 0&&e.length!==null?e.length<=2||!n:!0}_otherItems(e,n){if(e!=null&&(e.length<=2||n))return e.slice(1)}_computeOthersCount(e){if(e!=null)return e.length-1}_toggleExpand(e){this._expanded=!this._expanded,e.stopPropagation(),e.preventDefault()}}customElements.define(yo.is,yo);class qc extends Tn(ae(N)){static get properties(){return{keepOpened:{type:Boolean,value:!0},keepQuery:{type:Boolean},textual:{type:Function}}}getConfig(e){return{...super.getConfig?.(e),keepOpened:e.keepOpened,keepQuery:e.keepQuery,textual:e.textual}}renderCell({valuePath:e,textProperty:n},{item:o}){return h`<cosmoz-omnitable-column-list-data
			.items=${En(o,e,n)}
		></cosmoz-omnitable-column-list-data>`}renderEditCell(e,{item:n},o){const r=i=>o(i.target.value.split(/,\s*/gu));return h`<cosmoz-input
			no-label-float
			type="text"
			.value=${In(e,n)}
			@change=${r}
		></cosmoz-input>`}renderHeader(e,{filter:n,query:o},r,i){return h`<cosmoz-autocomplete-ui
			class="external-values-${e.externalValues}"
			?keep-opened=${e.keepOpened}
			?keep-query=${e.keepQuery}
			.textual=${e.textual}
			.column=${e}
			.label=${e.title}
			.source=${i}
			.textProperty=${e.textProperty}
			.valueProperty=${e.valueProperty}
			.itemRenderer=${e[ge]?.itemRenderer}
			.value=${n}
			.text=${o}
			.onChange=${On(r)}
			.onFocus=${Fn(r)}
			.onText=${An(r)}
			>${E(e.loading,()=>h`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`)}</cosmoz-autocomplete-ui
		>`}}customElements.define("cosmoz-omnitable-column-list",qc);class Wc extends kn(Je(N)){static get properties(){return{maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null},formatter:{type:Object,computed:"_computeFormatter(locale, minimumFractionDigits, maximumFractionDigits)"},autoupdate:{type:String,value:!1},_filterText:{type:String,computed:"_computeFilterText(filter.*, formatter)"},headerFocused:{type:Boolean,value:!1}}}render(){const e=n=>{this.headerFocused=n.type==="focus",this._onDropdownOpenedChanged(n)};return h`
			<style>
				cosmoz-input[type='number'] {
					background: var(--cosmoz-omnitable-amount-input-background, #ffffff);
					border-radius: 6px;
					border: 1px solid #d1d1d6;
					box-shadow: 0 1px 2px 0 rgba(60, 60, 60, 0.04);
					padding: 2px 8px;
					margin-bottom: 6px;
					min-height: 28px;
					transition:
						border-color 0.2s,
						box-shadow 0.2s;
				}

				cosmoz-input[type='number']:focus-within {
					border-color: var(--cz-accent-color, #007aff);
					box-shadow: 0 0 0 1px rgba(0, 122, 255, 0.15);
					background: var(--cosmoz-omnitable-amount-input-background, #ffffff);
				}
			</style>

			<cosmoz-clear-button
				@click=${()=>this.resetFilter()}
				?visible=${this.hasFilter()}
			></cosmoz-clear-button>

			${et({title:this.title,tooltip:this._tooltip,filterText:this._filterText,horizontalAlign:"right",externalValues:this.externalValues,onOpenedChanged:e,content:h`
					<h3>${this.title}</h3>
					<cosmoz-input
						class=${this._fromClasses}
						type="number"
						label=${T("From")}
						.value=${this._filterInput?.min}
						@value-changed=${n=>{this.set("_filterInput.min",n.detail.value)}}
						@blur=${n=>this._onBlur(n)}
						@keydown=${n=>this._onKeyDown(n)}
						min=${this._toInputString(this._limit.fromMin)}
						max=${this._toInputString(this._limit.fromMax)}
					></cosmoz-input>
					<cosmoz-input
						class=${this._toClasses}
						type="number"
						label=${T("To")}
						.value=${this._filterInput?.max}
						@value-changed=${n=>{this.set("_filterInput.max",n.detail.value)}}
						@blur=${n=>this._onBlur(n)}
						@keydown=${n=>this._onKeyDown(n)}
						min=${this._toInputString(this._limit.toMin)}
						max=${this._toInputString(this._limit.toMax)}
					></cosmoz-input>
				`})}
		`}_computeFormatter(e,n,o){const r={localeMatcher:"best fit"};return n!==null&&(r.minimumFractionDigits=n),o!==null&&(r.maximumFractionDigits=o),new Intl.NumberFormat(e||void 0,r)}getComparableValue(e,n){if(e==null)return;let o=e;if(n!=null&&(o=this.get(n,e)),o=this.toValue(o),o==null)return;const r=this.maximumFractionDigits;return r!==null?this.toValue(o.toFixed(r)):o}renderValue(e,n=this.formatter){const o=this.toNumber(e);if(o!=null)return n.format(o)}}customElements.define("cosmoz-omnitable-number-range-input",Wc);class Uc extends ae(N){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},autoupdate:{type:Boolean,value:!1,notify:!0},cellClass:{type:String,value:"number-cell align-right"},width:{type:String,value:"30px"},minWidth:{type:String,value:"30px"},headerCellClass:{type:String,value:"number-header-cell"},maximumFractionDigits:{type:Number,value:null},minimumFractionDigits:{type:Number,value:null}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,n){const o=Ie({...e,valuePath:"min"},n),r=Ie({...e,valuePath:"max"},n);if(!(o==null&&r==null))return pc(e,n)}getString(e,n){return mo(e,n)}toXlsxValue({valuePath:e},n){return F(n,e)}getComparableValue(e,n){return Ie(e,n)}serializeFilter(e,n){if(n==null)return;const o=G(n.min),r=G(n.max);if(!(o==null&&r==null))return uo(o)+"~"+uo(r)}deserializeFilter(e,n){if(n==null||n==="")return null;const o=n.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(o)?{min:G(o[1]),max:G(o[2])}:null}renderCell(e,{item:n}){return h`<div class="omnitable-cell-number">
			${mo(e,n)}
		</div>`}renderEditCell(e,{item:n},o){return h`<cosmoz-input
			no-label-float
			type="number"
			@change=${i=>o(i.target.value)}
			.value=${dc(e,n)}
		></cosmoz-input>`}renderHeader({title:e,min:n,max:o,limits:r,locale:i,maximumFractionDigits:s,minimumFractionDigits:l,autoupdate:c},{filter:a},u,d){return h`<cosmoz-omnitable-number-range-input
			.title=${e}
			.filter=${a}
			.values=${d}
			.min=${n}
			.max=${o}
			.limits=${r}
			.locale=${i}
			.maximumFractionDigits=${s}
			.minimumFractionDigsits=${l}
			.autoupdate=${c}
			@filter-changed=${({detail:{value:p}})=>u(m=>({...m,filter:p}))}
			@header-focused-changed=${({detail:{value:p}})=>u(m=>({...m,headerFocused:p}))}
		></cosmoz-omnitable-number-range-input>`}computeSource(e,n){return Qe(e,n)}}customElements.define("cosmoz-omnitable-column-number",Uc);const Sr="1970-01-01",ve=(t,e,n)=>{const o=typeof t=="string"&&t.length>3&&t.length<=9?Dn(Sr+"T"+t):t;return P(o)},at={},Xc=t=>{const e=t||"";if(at[e])return at[e];const n={hour:"numeric",minute:"numeric",second:"numeric"};return at[e]=new Intl.DateTimeFormat(t||void 0,n),at[e]},wt=({valuePath:t,locale:e},n)=>{const o=ve(F(n,t||""));return o===void 0?"":o===null?"Invalid Date":Mn(o,Xc(e))},Gc=(t,e)=>t.valuePath?wt(t,e):"",Yc=t=>{const e=ve(t);if(e==null)return null;const n=Vt(e);return n&&n.slice(11,19)},Fe=({valuePath:t},e)=>{if(e==null)return;const n=Yc(t==null?e:F(e,t));if(n==null)return;const o=ve(Dn(Sr+"T"+n));return o==null?o:G(o.getTime())},Kc=(t,e)=>n=>{const o=Fe(t,n);if(o==null)return!1;const r=Fe({...t,valuePath:"min"},e),i=Fe({...t,valuePath:"max"},e);return r==null||i==null?!1:!(o<r||o>i)},wo=t=>{const e=ve(t);return e==null?"":e.toISOString().slice(11,19).replace(/:/gu,".")},$o=t=>{if(!(t==null||t===""))return ve(typeof t=="string"?t.replace(/\./gu,":")+"Z":t)};class Zc extends Rn(Je(N)){render(){const e=n=>{this.headerFocused=n.type==="focus"};return h`
			<cosmoz-clear-button
				@click=${()=>this.resetFilter()}
				?visible=${this.hasFilter()}
			></cosmoz-clear-button>

			${et({title:this.title,tooltip:this._tooltip,filterText:this._filterText,externalValues:this.externalValues,onOpenedChanged:e,content:h`
					<h3 style="margin: 0;">${this.title}</h3>
					<cosmoz-input
						type="time"
						label=${T("From time")}
						step=${this.filterStep}
						.value=${this._filterInput.min}
						@value-changed=${n=>this.set("_filterInput.min",n.detail.value)}
					></cosmoz-input>
					<cosmoz-input
						type="time"
						label=${T("Until time")}
						step=${this.filterStep}
						.value=${this._filterInput.max}
						@value-changed=${n=>this.set("_filterInput.max",n.detail.value)}
					></cosmoz-input>
				`})}
		`}get _fixedDate(){return"1970-01-01"}toDate(e,n,o){const r=typeof e=="string"&&e.length>3&&e.length<=9?this.getAbsoluteISOString(this._fixedDate+"T"+e):e;return super.toDate(r,n,o)}_toInputString(e){const n=this.toValue(e);return n==null?null:this._toLocalISOString(n).slice(11,19)}getComparableValue(e,n){if(e==null)return;let o=this._toInputString(n==null?e:this.get(n,e));if(o!=null&&(o=this.toValue(this.getAbsoluteISOString(this._fixedDate+"T"+o)),o!=null))return this.toNumber(o.getTime())}_timeValueChanged(e){const n=e.target,o=n.value,r=e.model.item,i=this.toDate(r.date),s=this.toDate(i!=null?i.toISOString().slice(0,10)+"T"+o:o),l=c=>c;s==null&&(this.set(this.valuePath,s,r),this._fireItemChangeEvent(r,this.valuePath,i,l.bind(this)))}_computeFormatter(e){const n={hour:"numeric",minute:"numeric",second:"numeric"};return new Intl.DateTimeFormat(e||void 0,n)}}customElements.define("cosmoz-omnitable-time-range-input",Zc);class Qc extends ae(N){static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:"time-header-cell"},minWidth:{type:String,value:"63px"},width:{type:String,value:"210px"},flex:{type:String,value:"0"},filterStep:{type:String,value:"1"}}}getFilterFn(e,n){const o=Fe({...e,valuePath:"min"},n),r=Fe({...e,valuePath:"max"},n);if(!(o==null&&r==null))return Kc(e,n)}getString(e,n){return wt(e,n)}toXlsxValue(e,n){return Gc(e,n)}getComparableValue(e,n){return Fe(e,n)}serializeFilter(e,n){if(n==null)return;const o=ve(n.min),r=ve(n.max);if(!(o==null&&r==null))return wo(o)+"~"+wo(r)}deserializeFilter(e,n){if(n==null||n==="")return null;const o=n.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(o)?{min:$o(o[1]),max:$o(o[2])}:null}renderCell(e,{item:n}){return wt(e,n)}renderEditCell(e,{item:n},o){return h`<cosmoz-input
			no-label-float
			type="text"
			@change=${i=>o(i.target.value)}
			.value=${wt(e,n)}
		></cosmoz-input>`}renderHeader({title:e,min:n,max:o,locale:r,filterStep:i},{filter:s},l,c){return h`<cosmoz-omnitable-time-range-input
			.title=${e}
			.filter=${s}
			.values=${c}
			.min=${n}
			.max=${o}
			.locale=${r}
			.filterStep=${i}
			@filter-changed=${({detail:{value:a}})=>l(u=>({...u,filter:a}))}
			@header-focused-changed=${({detail:{value:a}})=>l(u=>({...u,headerFocused:a}))}
		></cosmoz-omnitable-time-range-input>`}computeSource(e,n){return Qe(e,n)}}customElements.define("cosmoz-omnitable-column-time",Qc);const kr=["T"," "],_o=t=>{if(!t||typeof t!="string")return;let e;return kr.some(n=>t.match(n)?(e=t.split(n),!0):!1),e||[t]},Jc=(t,e)=>{const n=_o(t),o=_o(e);return{minDate:Array.isArray(n)?n.shift():null,minTime:Array.isArray(n)?n.shift():null,maxDate:Array.isArray(o)?o.shift():null,maxTime:Array.isArray(o)?o.shift():null}},zo=(t,e)=>{if(!(!t&&!e))return!t&&e?`T${e}`:t&&!e?t:`${t}T${e}`},eu=t=>{if(t){for(const e of kr)if(t.match(e)){const n=t.split(e);return{date:n.shift(),time:n.shift()}}return{date:t}}},tu=t=>{const{dateLabel:e,timeLabel:n,min:o,max:r,step:i="1",value:s}=t,{minDate:l,maxDate:c,minTime:a,maxTime:u}=k(()=>Jc(o,r),[o,r]),{date:d,time:p}=k(()=>eu(s)??{},[s]);return I(()=>{t.dispatchEvent(new CustomEvent("cosmoz-datetime-input-value-changed",{bubbles:!0,composed:!0}))},[s]),h`
		<style>
			:host {
				display: flex;
				flex-direction: row;
			}
		</style>
		<cosmoz-input
			label="${e}"
			type="date"
			.value="${d}"
			@value-changed="${m=>be(t,"value",zo(m.target.value,p))}"
			.min="${l}"
			.max="${c}"
		></cosmoz-input>
		<cosmoz-input
			label="${n}"
			type="time"
			.value="${p}"
			@value-changed="${m=>be(t,"value",zo(d,m.target.value))}"
			step="${i}"
			.min="${a}"
			.max="${u}"
		></cosmoz-input>
	`};customElements.define("cosmoz-datetime-input",L(tu,{observedAttributes:["date-label","time-label","min","max","step"]}));const ct={},nu=t=>{const e=t||"";if(ct[e])return ct[e];const n={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};return ct[e]=new Intl.DateTimeFormat(t||void 0,n),ct[e]},en=({valuePath:t,locale:e},n)=>{const o=P(F(n,t||""));return o===void 0?"":o===null?"Invalid Date":Mn(o,nu(e))},ou=({valuePath:t},e)=>t?F(e,t):"",Co=t=>{const e=P(t);return e==null?"":e.toISOString().slice(0,19).replace(/:/gu,".")},So=t=>{if(!(t==null||t==="")&&typeof t=="string")return P(t.replace(/\./gu,":")+"Z")};class ru extends Rn(Je(N)){render(){const e=n=>{this.headerFocused=n.type==="focus"};return h`
			<style>
				cosmoz-datetime-input {
					background: var(--cosmoz-omnitable-amount-input-background, #ffffff);
					border-radius: 6px;
					border: 1px solid #d1d1d6;
					box-shadow: 0 1px 2px 0 rgba(60, 60, 60, 0.04);
					padding: 2px 8px;
					margin-bottom: 6px;
					min-height: 28px;
					transition:
						border-color 0.2s,
						box-shadow 0.2s;
				}

				cosmoz-datetime-input:focus-within {
					border-color: var(--cz-accent-color, #007aff);
					box-shadow: 0 0 0 1px rgba(0, 122, 255, 0.15);
					background: var(--cosmoz-omnitable-amount-input-background, #ffffff);
				}
			</style>

			<cosmoz-clear-button
				@click=${()=>this.resetFilter()}
				?visible=${this.hasFilter()}
			></cosmoz-clear-button>

			${et({title:this.title,tooltip:this._tooltip,filterText:this._filterText,externalValues:this.externalValues,onOpenedChanged:e,content:h`
					<h3 style="margin: 0;">${this.title}</h3>
					<cosmoz-datetime-input
						date-label=${T("From date")}
						time-label=${T("From time")}
						min=${this._toInputString(this._limit.fromMin)}
						max=${this._toInputString(this._limit.fromMax)}
						step=${this.filterStep}
						.value=${this._filterInput?.min}
						@value-changed=${n=>this.set("_filterInput.min",n.detail.value)}
					></cosmoz-datetime-input>
					<cosmoz-datetime-input
						date-label=${T("To date")}
						time-label=${T("To time")}
						min=${this._toInputString(this._limit.toMin)}
						max=${this._toInputString(this._limit.toMax)}
						step=${this.filterStep}
						.value=${this._filterInput?.max}
						@value-changed=${n=>this.set("_filterInput.max",n.detail.value)}
					></cosmoz-datetime-input>
				`})}
		`}_toInputString(e){const n=this.toValue(e);if(n!=null)return this._toLocalISOString(n).slice(0,19)}_computeFormatter(e){const n={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};return new Intl.DateTimeFormat(e||void 0,n)}}customElements.define("cosmoz-omnitable-datetime-range-input",ru);class ko extends ae(N){static get is(){return"cosmoz-omnitable-column-datetime"}static get properties(){return{min:{type:Number,value:null,notify:!0},max:{type:Number,value:null,notify:!0},limits:{type:Function},locale:{type:String,value:null,notify:!0},headerCellClass:{type:String,value:"datetime-header-cell"},width:{type:String,value:"210px"},minWidth:{type:String,value:"128px"},flex:{type:String,value:"0"},filterStep:{type:Number,value:1}}}getConfig(e){return{limits:e.limits}}getFilterFn(e,n){const o=ue({...e,valuePath:"min"},n),r=ue({...e,valuePath:"max"},n);if(!(o==null&&r==null))return Cr(e,n)}getString(e,n){return en(e,n)}toXlsxValue(e,n){return ou(e,n)}getComparableValue(e,n){return ue(e,n)}serializeFilter(e,n){if(n==null)return;const o=P(n.min),r=P(n.max);if(!(o==null&&r==null))return Co(o)+"~"+Co(r)}deserializeFilter(e,n){if(n==null||n==="")return null;const o=n.match(/^([^~]+)?~([^~]+)?/iu);return Array.isArray(o)?{min:So(o[1]),max:So(o[2])}:null}renderCell(e,{item:n}){return en(e,n)}renderEditCell(e,{item:n},o){return h`<cosmoz-input
			no-label-float
			type="text"
			@change=${i=>o(zr(i.target.value))}
			.value=${en(e,n)}
		></cosmoz-input>`}renderHeader({title:e,min:n,max:o,limits:r,locale:i,filterStep:s},{filter:l},c,a){return h`<cosmoz-omnitable-datetime-range-input
			.title=${e}
			.filter=${l}
			.values=${a}
			.min=${n}
			.max=${o}
			.limits=${r}
			.locale=${i}
			.filterStep=${s}
			@filter-changed=${({detail:{value:u}})=>c(d=>({...d,filter:u}))}
			@header-focused-changed=${({detail:{value:u}})=>c(d=>({...d,headerFocused:u}))}
		></cosmoz-omnitable-datetime-range-input>`}computeSource(e,n){return Qe(e,n)}}customElements.define(ko.is,ko);const iu=({column:t,item:e,selected:n,folded:o,group:r})=>t?(t.renderGroup??t.renderCell)(t,{item:e,selected:n,folded:o,group:r}):H;customElements.define("cosmoz-omnitable-group-row",L(iu,{useShadowDOM:!1}));const su=t=>{const{column:e}=t;return I(()=>{let n=0,o=0;const r=l=>{t.dispatchEvent(new CustomEvent("column-resize",{bubbles:!0,composed:!0,detail:{newWidth:Math.ceil(o+l.pageX-n),column:e}}))},i=()=>{document.removeEventListener("pointermove",r),document.removeEventListener("pointerup",i)},s=l=>{n=l.pageX,o=t.previousElementSibling.getBoundingClientRect().width,document.addEventListener("pointermove",r),document.addEventListener("pointerup",i)};return t.addEventListener("pointerdown",s),()=>t.removeEventListener("pointerdown",s)},[e]),H};customElements.define("cosmoz-omnitable-resize-nub",L(su));const lu=h`<svg
	width="10"
	height="9"
	viewBox="0 0 10 9"
	stroke="currentColor"
	xmlns="http://www.w3.org/2000/svg"
>
	<line
		x1="8.53033"
		y1="0.53033"
		x2="1.53033"
		y2="7.53033"
		stroke-width="1.5"
	/>
	<line
		x1="8.46967"
		y1="7.53033"
		x2="1.46967"
		y2="0.530331"
		stroke-width="1.5"
	/>
</svg>`,au=h`
	<svg
		width="16"
		height="6"
		viewBox="0 0 16 6"
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
	>
		<rect width="16" height="2" />
		<rect y="4" width="16" height="2" />
	</svg>
`,tn=h` <svg
	width="12"
	height="7"
	viewBox="0 0 12 7"
	fill="none"
	stroke="currentColor"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		d="M0.999998 0.999999L6 6L11 1"
		stroke-width="1.5"
		stroke-linejoin="round"
	/>
</svg>`,cu=h`<svg
	width="8"
	height="6"
	viewBox="0 0 8 6"
	fill="currentColor"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		d="M0.5,0.5h7c0.4,0,0.6,0.4,0.4,0.7L4.4,5.3c-0.2,0.2-0.5,0.2-0.7,0L0.1,1.2
		C-0.1,0.9,0.1,0.5,0.5,0.5z"
	/>
</svg> `,Er=({column:t,on:e,descending:n,setOn:o,setDescending:r})=>{const{name:i,title:s}=t??{};return h`<button
		class="sg"
		title=${A(s)}
		data-on=${A(i===e&&(n?"desc":"asc")||void 0)}
		@click=${l=>{const a=l.currentTarget?.dataset.on;a||(o(i),r(!1)),a==="asc"?r(!0):a==="desc"&&(o(),r(!1))}}
	>
		<span>${s}</span> ${cu}
	</button>`},Ir=({columns:t,...e})=>t?.map(n=>Er({column:n,...e})),uu=()=>h`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:t,groupOn:e,setGroupOn:n,groupOnDescending:o,setGroupOnDescending:r}={})=>Ir({columns:t?.filter?.(i=>i.groupOn),on:e,setOn:n,descending:o,setDescending:r})}
	>
	</sort-and-group-consumer>
`,du=()=>h`
	<sort-and-group-consumer
		class="sgs"
		.render=${({columns:t,sortOn:e,setSortOn:n,descending:o,setDescending:r}={})=>Ir({columns:t?.filter?.(i=>i.sortOn&&!i.noSort),on:e,setOn:n,descending:o,setDescending:r})}
	>
	</sort-and-group-consumer>
`,Vn=()=>new URL(location.hash.replace(/^#!?/iu,"").replace("%23","#"),location.origin),mu=(t,e=_e)=>{const n=new URLSearchParams(Vn().hash.replace("#","")).getAll(t);switch(n.length){case 0:return;case 1:return e(n[0]);default:return n.map(e)}},pu=(t,e=_e)=>{const n=Array.from(new URLSearchParams(Vn().hash.replace("#","")).entries()).filter(([o])=>o.startsWith(t)).map(([o,r])=>e([o.replace(t,""),r])).filter(([,o])=>o!=null);return Object.fromEntries(n)},Or=t=>(e,n,o=_e)=>{const r=Vn(),i=new URLSearchParams(r.hash.replace("#",""));return t(e,n,o,i),"#!"+Object.assign(r,{hash:i}).href.replace(location.origin,"")},Fr=t=>t==null||t==="",hu=Or((t,e,n,o)=>Fr(n(e))?o.delete(t):o.set(t,n(e))),fu=Or((t,e,n,o)=>Object.entries(e).map(n).forEach(([r,i])=>Fr(i)?o.delete(t+r):o.set(t+r,i))),qe=(t,e,{suffix:n="",read:o,write:r,multi:i}={})=>{const[s,l]=i?[fu,pu]:[hu,mu],c=k(()=>e!=null&&l(e+n,o)!=null,[]),[a,u]=M(()=>e==null?t:l(e+n,o)??t),d=$(p=>u(m=>{const b=V(p,m);return e!=null&&Qr(s(e+n,b,r),null,{notify:!1}),b}),[e,n,s,r]);return I(()=>{e!=null&&(c||t!=null&&d(t))},[t,e,c,d]),[a,d]},gu=t=>[!0,"true",1,"yes","on"].includes(t),ut=t=>t===""||(t==null?void 0:gu(t)),dt=(t,e,n)=>$(o=>{t(o),n(r=>({...r,[e]:o}))},[t,e,n]),bu=(t,e,n,o,r)=>{const[i,s]=qe(n.sortOn,e,{suffix:"-sortOn"}),[l,c]=qe(ut(n.descending),e,{suffix:"-descending",read:ut}),[a,u]=qe(n.groupOn,e,{suffix:"-groupOn"}),[d,p]=qe(ut(n.groupOnDescending),e,{suffix:"-groupOnDescending",read:ut}),m=k(()=>t.find(f=>f.name===i),[t,i]),b=k(()=>t.find(f=>f.name===a),[t,a]),g={groupOn:a,setGroupOn:dt(u,"groupOn",o),groupOnDescending:d,setGroupOnDescending:dt(p,"groupOnDescending",o),sortOn:i,setSortOn:dt(s,"sortOn",o),descending:l,setDescending:dt(c,"descending",o),columns:t},v=k(()=>g,Object.values(g)),y=$(f=>{s(f.sortOn),u(f.groupOn),c(f.descending),p(f.groupOnDescending)},[]);return I(()=>{r.current=y},[]),{...v,sortAndGroup:v,groupOnColumn:b,sortOnColumn:m}},Bn=vn();customElements.define("sort-and-group-provider",Bn.Provider);customElements.define("sort-and-group-consumer",L(({render:t})=>t(Dt(Bn)),{useShadowDOM:!1}));const xu=({data:t,columns:e,groupOnColumn:n,filters:o,setFilterState:r,sortAndGroup:{sortOn:i,setSortOn:s,descending:l,setDescending:c}={}})=>Rt(e,a=>a.name,a=>[h`<div
				class="cell ${a.headerCellClass} header-cell"
				part="cell header-cell cell-${a.name} header-cell-${a.name}"
				?hidden="${a===n}"
				title="${a.headerTitleFn(a)}"
				name="${a.name}"
			>
				${a.renderHeader(a,o[a.name]??{},u=>r(a.name,u),a.source(a,t))}
				${E(!a.noSort,()=>Er({on:i,setOn:s,descending:l,setDescending:c,column:a}))}
			</div>`,h`<cosmoz-omnitable-resize-nub
				.column="${a}"
				name="${a.name}"
			></cosmoz-omnitable-resize-nub>`]),vu=({columns:t,settingsConfig:e,hideSelectAll:n,...o})=>{const r=Dt(Bn);return h`
		${E(t,i=>xu({columns:i,sortAndGroup:r,...o}))}
		${E(!n,()=>h` <cosmoz-omnitable-settings
					.config=${e}
					part="settings"
				></cosmoz-omnitable-settings>`)}
	`};customElements.define("cosmoz-omnitable-header-row",L(vu,{useShadowDOM:!1}));const yu=j`
	:host {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
	}

	.label {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		flex: initial;
		align-self: start;
	}

	.value {
		text-align: right;
		flex-grow: 1;
		flex-basis: 100px;
		white-space: nowrap;
	}
`,wu=({column:t})=>h`
	<div class="label" title="${t.title}" part="item-expand-label">
		${t.title}
	</div>
	<div class="value" part="item-expand-value">
		<slot></slot>
	</div>
`;customElements.define("cosmoz-omnitable-item-expand-line",L(wu,{styleSheets:[Be(yu)]}));const $u=({columns:t,item:e,selected:n,expanded:o,groupOnColumn:r})=>gr(t,i=>h`<cosmoz-omnitable-item-expand-line
				.column=${i}
				?hidden=${i===r}
				exportparts="item-expand-label, item-expand-value"
				>${i.renderCell(i,{item:e,selected:n,expanded:o})}</cosmoz-omnitable-item-expand-line
			>`);customElements.define("cosmoz-omnitable-item-expand",L($u,{useShadowDOM:!1}));const _u=(t,e,n)=>t.editable?t.renderEditCell(t,e,n(t,e.item)):t.renderCell(t,e),zu=({columns:t,groupOnColumn:e,item:n,index:o,selected:r,expanded:i,onItemChange:s})=>Rt(t,l=>l.name,l=>h`<div
				class="cell itemRow-cell ${l.cellClass??""}"
				part="cell itemRow-cell cell-${l.name} itemRow-cell-${l.name}"
				?hidden="${l===e}"
				?editable="${l.editable}"
				title="${l.cellTitleFn(l,n)}"
				name="${l.name}"
			>
				${_u(l,{item:n,index:o,selected:r,expanded:i},s)}
			</div>`);customElements.define("cosmoz-omnitable-item-row",L(zu,{useShadowDOM:!1}));const Ar=j`
	.checkbox {
		box-sizing: border-box;
		width: 18px;
		height: 18px;
		background: transparent;
		border-radius: 4px;
		appearance: none;
		-webkit-appearance: none;
		outline: none;
		position: relative;
		user-select: none;
		cursor: pointer;
		display: inline-block;
		box-shadow: 0 0 0 2px
			var(--cosmoz-omnitable-checkbox-shadow-color, rgba(0, 0, 0, 0.16)) inset;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		vertical-align: middle;
		transition: background-color 140ms;
		margin: 1px 12px;
		flex: none;
	}

	.checkbox:checked {
		background-color: var(
			--cosmoz-omnitable-checkbox-checked-color,
			var(--primary-color)
		);
		box-shadow: none;
	}

	.checkbox:checked::before {
		content: '';
		position: absolute;
		box-sizing: content-box;
		width: 5px;
		height: 10px;
		border: 2.4px solid
			var(--cosmoz-omnitable-checkbox-checked-tick-color, #fff);
		border-top: none;
		border-left: none;
		transform-origin: 5px 10px;
		transform: translate(3px) rotate(45deg);
	}

	.checkbox::after {
		content: '';
		display: block;
		bottom: -5px;
		left: -5px;
		right: -5px;
		top: -5px;
	}

	.checkbox:hover {
		box-shadow:
			0 0 0 2px
				var(--cosmoz-omnitable-checkbox-shadow-color-hover, rgba(0, 0, 0, 1))
				inset,
			0 0 2px 6px #2021240f;
	}

	.checkbox:checked:hover {
		box-shadow: 0 0 2px 6px #2021240f;
	}

	.checkbox:indeterminate::before {
		content: '';
		position: absolute;
		width: 10px;
		height: 2px;
		left: 4px;
		top: 8px;
		background-color: var(
			--cosmoz-omnitable-checkbox-checked-color,
			var(--primary-color)
		);
	}
`,Cu=j`
	:host {
		display: flex;
		flex-direction: column;
		position: relative;
		overflow: hidden;
		color: var(--cosmoz-omnitable-text-color, rgb(89, 102, 121));
	}
	:host a {
		color: var(--primary-link-color, inherit);
		text-decoration: var(--cosmoz-omnitable-link-decoration, underline);
	}
	:host a:hover {
		text-decoration: var(
			--cosmoz-omnitable-link-decoration-hover,
			var(--cosmoz-omnitable-link-decoration, underline)
		);
		color: var(--primary-link-color-hover, var(--primary-link-color));
	}

	/* The wrapping div that contains the header, the table content and the footer */
	.mainContainer {
		background-color: var(--cosmoz-omnitable-bg-color, rgb(255, 255, 255));
		display: flex;
		flex-direction: column;
		flex: auto;
	}

	#columns {
		display: none;
	}

	.header {
		position: relative;
		display: flex;
		align-items: flex-end;
		background-color: var(--cosmoz-omnitable-header-bg-color, inherit);
		border-top-left-radius: var(--cosmoz-omnitable-header-border-radius-top-left, 8px);
		border-top-right-radius: var(--cosmoz-omnitable-header-border-radius-top-right, 8px);
		border-bottom-left-radius: var(--cosmoz-omnitable-header-border-radius-bottom-left, 2px);
		border-bottom-right-radius: var(--cosmoz-omnitable-header-border-radius-bottom-right, 2px);
	}

	[hidden] {
		display: none;
	}

	cosmoz-grouped-list-row {
		width: 100%;
	}

	cosmoz-omnitable-header-row .external-values-false {
		--paper-input-container-color: var(
			--cosmoz-omnitable-local-filter-header-color
		);
	}

	cosmoz-omnitable-header-row .external-values-true {
		--paper-input-container-color: var(
			--cosmoz-omnitable-remote-filter-header-color
		);
	}

	.header > cosmoz-omnitable-header-row {
		flex: auto;
	}

	.header-cell {
		--paper-input-container: {
			padding-top: 0;
			padding-bottom: 1px;
			--paper-font-caption_-_line-height: 18px;
		}
		--paper-input-container-underline: {
			border-color: var(--cosmoz-omnitable-header-line-color);
			display: var(--cosmoz-omnitable-paper-input-underline-display, block);
		}
		--paper-input-container-underline-focus {
			border-color: var(--cosmoz-omnitable-header-line-focused-color);
			display: var(--cosmoz-omnitable-paper-input-underline-display, block);
		}

		text-transform: var(--cosmoz-omnitable-header-text-transform, none);
		--paper-font-subhead_-_font-weight: var(
			--cosmoz-omnitable-header-font-weight,
			normal
		);

		--cosmoz-input-font-family: var(
			--cosmoz-omnitable-header-font-family,
			'Roboto',
			'Noto',
			sans-serif
		);
		--cosmoz-input-font-size: var(
			--cosmoz-omnitable-header-font-size,
			16px
		);
		--cosmoz-input-padding: var(--cosmoz-omnitable-header-input-padding, 0);
		--cosmoz-input-label-text-transform: var(--cosmoz-omnitable-header-text-transform, none);
		--cosmoz-input-label-font-weight: var(--cosmoz-omnitable-header-font-weight, normal);
		--cosmoz-input-line-color: var(--cosmoz-omnitable-header-line-color);
		--cosmoz-input-line-display: var(--cosmoz-omnitable-header-line-display, block);
		--cosmoz-input-focused-color: var(--cosmoz-omnitable-header-line-focused-color);
	}

	cosmoz-omnitable-header-row {
		white-space: nowrap;
	}

	cosmoz-omnitable-header-row > div {
		display: inline-block;
		box-sizing: border-box;
		padding: 0 3px;
		white-space: nowrap;
		text-overflow: ellipsis;
		vertical-align: bottom;
	}
	cosmoz-omnitable-header-row > div[hidden] {
		display: none !important;
	}

	cosmoz-omnitable-resize-nub {
		display: inline-block;
		position: absolute;
		bottom: 2px;
		width: 7px;
		height: 30px;
		margin-left: -3px;
		background: transparent;
		cursor: ew-resize;
		z-index: 1000;
		user-select: none;
	}

	.time-header-cell,
	.datetime-header-cell,
	.date-header-cell,
	.amount-header-cell,
	.number-header-cell {
		position: relative;
	}

	cosmoz-omnitable-item-row {
		display: flex;
		white-space: nowrap;
	}

	cosmoz-omnitable-item-row > div {
		display: block;
		flex: none;
		padding: 0 3px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		box-sizing: border-box;
		align-self: center;
	}

	cosmoz-omnitable-item-row > div[hidden] {
		display: none !important;
	}

	.tableContent {
		overflow-y: auto;
		min-height: 40px;
		display: flex;
		flex-direction: column;
		position: relative;
		flex: auto;
	}
	.tableContent:has(.tableContent-empty.spinner) {
		opacity: 0.3;
	}

	/* Empty data set styling */
	.tableContent-empty {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #ccc;
	}
	.tableContent-empty.overlay {
		color: #333;
		z-index: 1;
	}
	.tableContent-empty > div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-bottom: 24px;
	}
	.tableContent-empty.overlay > div {
		padding-bottom: 0;
	}
	.tableContent-empty.overlay:has(cosmoz-omnitable-skeleton) {
		align-items: flex-start;
	}
	.tableContent-empty div.tableContent-empty-message {
		@apply --layout-vertical;
		@apply --layout-center-justified;
		padding-bottom: 24px;
	}
	.tableContent-empty.overlay div.tableContent-empty-message {
		padding-bottom: 0;
	}
	.tableContent-empty p {
		font-size: 15px;
		color: #ddd;
		margin: 0;
	}
	.tableContent-empty h3 {
		white-space: nowrap;
		margin: 0px 0px 8px 0px;
	}

	/* End of empty data set styling */
	.tableContent-scroller {
		flex: auto;
		position: relative;
		overflow: auto;
		overflow-x: hidden;
		will-change: transform;
		flex-basis: 0.000001px;
		display: flex;
		flex-direction: column;
	}

	.itemRow {
		border-bottom-color: var(--cosmoz-omnitable-border-color, #e1e2e5);
		border-bottom-width: 1px;
		border-bottom-style: var(
			--cosmoz-omnitable-item-row-border-bottom-style,
			solid
		);
		/* set a min-height for rows so that rows with empty values are visible */
	}
	.itemRow-wrapper {
		display: flex;
		align-items: center;
		min-height: var(--item-row-min-height, 39px);
		padding-right: 8px;
	}

	.itemRow[selected] {
		background-color: var(
			--cosmoz-omnitable-selection-color,
			rgb(195, 212, 248)
		);
		@apply --cosmoz-omnitable-selected-row;
	}

	.tableContent .itemRow-cell paper-dropdown-menu {
		margin-top: -20px;

	}

	cosmoz-omnitable-item-expand[expanded] {
		display: flex;
		flex-direction: column;
		padding: 5px 4%;
		line-height: 1.3em;
		border-bottom: solid 1px var(--cosmoz-omnitable-border-color, #e1e2e5);
		background-color: #fafafa;
	}

	cosmoz-omnitable-item-expand:not([expanded]) {
		display: none;
	}

	.groupRow {
		display: flex;
		align-items: center;
		background-color: #f5f6f9;
		font-weight: 700;
		color: #101010;
		border-bottom: 1px solid var(--cosmoz-omnitable-border-color, #e1e2e5);
	}

	.groupRow-label {
		display: flex;
		flex: auto;
		align-items: center;
		flex-wrap: wrap;
		padding-left: 8px;
		margin: 0;
		font-size: 1.15em;
		font-weight: 400;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.groupRow-label > cosmoz-omnitable-group-row {
		flex: auto;
	}

	.groupRow-badge {
		background: #8be5c6;
		color: #fff;
		line-height: 30px;
		width: 30px;
		text-align: center;
		border-radius: 50%;
		font-size: 13px;
		font-weight: 500;
	}

	.rtl {
		direction: rtl;
	}

	.align-left {
		text-align: left;
	}

	.align-right {
		text-align: right;
	}

	cosmoz-bottom-bar {
		background-color: var(--cosmoz-omnitable-bottom-bar-color, #5f5a92);
		overflow: hidden;
	}
	cosmoz-bottom-bar::part(bar) {
		padding: 0 24px;
	}

	cosmoz-bottom-bar::slotted(*) {
		background-color: #4c4875;
		color: #fff;
		border-color: #fff;
	}

	cosmoz-bottom-bar::slotted([disabled]) {
		color: #b7b6c8;
		border-color: #b7b6c8;
		cursor: not-allowed;
	}

	.boolean-cell[editable] {
		overflow: initial;
	}

	.omnitable-cell-number, .omnitable-cell-date {
		font-variant-numeric: tabular-nums;
	}

	.itemRow:hover {
		box-shadow: inset 1px 0 0 #dadce0, inset -1px 0 0 #dadce0,
			0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
		background-color: var(--cosmoz-omnitable-row-hover-color);
	}
	.groupRow:hover .checkbox:not(:checked):not(:hover),
	.itemRow:hover .checkbox:not(:checked):not(:hover) {
		box-shadow: 0 0 0 2px var(--cosmoz-omnitable-checkbox-shadow-color-not-hover, rgba(0, 0, 0, 0.54))
		inset;
	}
	.groupRow:hover .expand:not(:hover),
	.itemRow:hover .expand:not(:hover) {
		color: rgba(0, 0, 0, 0.54);
	}

	${Ar}

	.all {
		margin-bottom: 6px;
	}

	.expand {
		width: 24px;
		height: 24px;
		padding: 0;
		flex: none;
		border: none;
		border-radius: 50%;
		cursor: pointer;
		background: none;
		transition: 0.15s background ease-in;
		outline: none;
		color: rgba(0, 0, 0, 0.16);
	}
	.expand svg {
		fill: currentColor;
	}
	.expand:not([aria-expanded]) svg {
		transform: scaleY(-1);
	}
	.expand:active {
		background: rgba(33, 33, 33, 0.25);
	}
	.expand:hover {
		color: #000;
	}
	.groupRow .expand {
		margin: 8px;
	}

	.sg {
		display: inline-flex;
		width: 10px;
		cursor: pointer;
		align-items: center;
		margin-top: 18px;
		overflow: hidden;
		flex: none;
		background: none;
		border: none;
		outline: none;
		color: inherit;
		padding: 0;
	}
	.sg span {
		display: none;
	}
	.sg svg {
		display: block;
	}
	.sg[data-on] {
		color: var(--cosmoz-omnitable-checkbox-checked-color, var(--primary-color));
	}
	.sg:not([data-on='desc']) {
		transform: scaleY(-1);
	}
	:not(:hover) > .sg:not([data-on]) {
		display: none;
	}
	.header-cell {
		display: inline-flex;
		position: relative;
	}
	.header-cell :not(.sg, cosmoz-clear-button) {
		min-width: 0;
		flex: auto;
	}

	:host([mini]) .itemRow .expand,
	:host([mini]) cosmoz-omnitable-item-expand {
		display: none;
	}

	.itemRow-minis {
		display: flex;
		justify-content: space-between;
		margin: 14px 12px 12px 12px;
		color: var(--cosmoz-omnitable-mini-color, #000);
	}

	:host([mini]) .itemRow {
		border-radius: 12px;
		border: 1px solid var(--cosmoz-omnitable-border-color, #e1e2e5);
		margin: 4px 8px;
		padding-top: 2px;
	}

	:host([mini]) .itemRow:not([selected]) {
		background: var(--cosmoz-omnitable-mini-item-background, #fdfdfd);
	}

	:host([mini]) .itemRow:hover {
		box-shadow: none;
	}

	:host([mini]) .header {
		margin: 0 8px;
	}

	:host([mini]) .tableContent {
		overflow: hidden;
	}

	:host([mini]) .tableContent-scroller::-webkit-scrollbar {
		width: 4px;
	}

	:host([mini]) .tableContent-scroller::-webkit-scrollbar-track {
		background: transparent;
	}

	:host([mini]) .tableContent-scroller::-webkit-scrollbar-thumb {
	background: transparent;
	}

	:host([mini]) .tableContent-scroller:hover::-webkit-scrollbar-thumb {
	background: var(--cosmoz-omnitable-mini-scrollbar-thumb-bg, #aaa);
	}

	:host([mini]) .tableContent-scroller::-webkit-scrollbar-button:decrement,
	:host([mini]) .tableContent-scroller::-webkit-scrollbar-button:increment {
	width: 0px;
	}

	:host([mini]) cosmoz-omnitable-settings::part(columns) {
		display:none;
	}

	cz-spinner {
		width: 48px;
		height: 48px;
		position: absolute;
		top: 40%;
		right: 50%;
		border-color: rgba(0, 0, 0, 0.2);
		border-top-color: #000;
	}
`;var oe=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof global=="object"&&global.global===global?global:void 0;function Su(t,e){return typeof e>"u"?e={autoBom:!1}:typeof e!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\uFEFF",t],{type:t.type}):t}function nn(t,e,n){var o=new XMLHttpRequest;o.open("GET",t),o.responseType="blob",o.onload=function(){Ye(o.response,e,n)},o.onerror=function(){console.error("could not download file")},o.send()}function Eo(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch{}return e.status>=200&&e.status<=299}function mt(t){try{t.dispatchEvent(new MouseEvent("click"))}catch{var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var Io=oe.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),Ye=oe.saveAs||(typeof window!="object"||window!==oe?function(){}:"download"in HTMLAnchorElement.prototype&&!Io?function(e,n,o){var r=oe.URL||oe.webkitURL,i=document.createElement("a");n=n||e.name||"download",i.download=n,i.rel="noopener",typeof e=="string"?(i.href=e,i.origin!==location.origin?Eo(i.href)?nn(e,n,o):mt(i,i.target="_blank"):mt(i)):(i.href=r.createObjectURL(e),setTimeout(function(){r.revokeObjectURL(i.href)},4e4),setTimeout(function(){mt(i)},0))}:"msSaveOrOpenBlob"in navigator?function(e,n,o){if(n=n||e.name||"download",typeof e=="string")if(Eo(e))nn(e,n,o);else{var r=document.createElement("a");r.href=e,r.target="_blank",setTimeout(function(){mt(r)})}else navigator.msSaveOrOpenBlob(Su(e,o),n)}:function(e,n,o,r){if(r=r||open("","_blank"),r&&(r.document.title=r.document.body.innerText="downloading..."),typeof e=="string")return nn(e,n,o);var i=e.type==="application/octet-stream",s=/constructor/i.test(oe.HTMLElement)||oe.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||i&&s||Io)&&typeof FileReader<"u"){var c=new FileReader;c.onloadend=function(){var d=c.result;d=l?d:d.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=d:location=d,r=null},c.readAsDataURL(e)}else{var a=oe.URL||oe.webkitURL,u=a.createObjectURL(e);r?r.location=u:location.href=u,r=null,setTimeout(function(){a.revokeObjectURL(u)},4e4)}});oe.saveAs=Ye.saveAs=Ye;const Oo=t=>{const e=t.replace(/"/gu,'""');return e.search(/("|,|\n)/gu)>=0?'"'+e+'"':t},ku=(t,e,n)=>{const i=t.map(l=>Oo(l.title)).join(";")+`
`,s=e.map(l=>t.map(c=>{const a=c.getString(c,l);return a==null?"":Oo(String(a))}).join(";")+`
`);s.unshift(i),Ye(new File(s,n,{type:"text/csv;charset=utf-8"}))},$t=function(t){t&&console.log(t)};class Tr{constructor(e,n){this._filename=e,this.buffer=null,this.lastDownloadBlobUrl=null,this._mimeType=n}generate(){}createDownloadUrl(){this.buffer||this.generate();const e=new Blob([this.buffer],{type:this._mimeType});return this.lastDownloadBlobUrl&&window.URL.revokeObjectURL(this.lastDownloadBlobUrl),this.lastDownloadBlobUrl=URL.createObjectURL(e),this.lastDownloadBlobUrl}createDownloadLink(e){const n=e instanceof HTMLAnchorElement?e:document.createElement("a");return typeof e=="string"&&(n.innerHTML=e),n.href=this.createDownloadUrl(),n.download=this._filename,n.hasChildNodes||(n.innerText=this._filename),$t("Link created for file "+this._filename),n}}let pt=null;class Eu extends Tr{constructor(e,n){super(e,"application/zip"),this.files=[],this.createFolderEntries=!!n;const o=new Date;this.timeInt=Math.round(o.getSeconds()/2)|o.getMinutes()<<5|o.getHours()<<11,this.dateInt=o.getFullYear()-1980<<9|o.getMonth()+1<<5|o.getDate()}addFileFromString(e,n){const o=new TextEncoder("utf-8").encode(n);return this.addFileFromUint8Array(e,o),this}addFileFromUint8Array(e,n){if(!(n instanceof Uint8Array))throw new Error("invalid parameter");return this.files.push({name:e.replace("\\","/"),data:n}),this}generate(){$t("NullZip archive generation started");const e={};for(const a of this.files)a.size=a.data?a.data.byteLength:0,a.crc=a.data?this.crc(a.data):0,e[a.name]=a;const n=[];if(this.createFolderEntries){const a=/\//giu;for(const u of this.files){const d=u.name;for(let p=a.exec(d);p!==null;p=a.exec(d)){const m={name:d.substr(0,p.index+1),size:0,crc:0,data:new Uint8Array(0)};typeof e[m.name]>"u"&&(e[m.name]=m,n.push(m))}}}Array.prototype.push.apply(this.files,n),this.files.sort((a,u)=>a.name.length-u.name.length||a.name.localeCompare(u.name));const o=this.files.reduce((a,u)=>a+76+u.name.length*2+u.size,22);$t("Estimated file size: "+o),this.buffer=new ArrayBuffer(o);const r=new Iu(this.buffer),i=this.hex2u8a("504b0304140000000000");for(const a of this.files)a.offs=r.i,r.writeByteArray(i),r.uint16(this.timeInt),r.uint16(this.dateInt),r.uint32(a.crc),r.uint32(a.size),r.uint32(a.size),r.uint16(a.name.length),r.uint16(0),r.writeASCII(a.name),a.size>0&&r.writeByteArray(a.data);const s=r.i,l=this.hex2u8a("504b01023f00140000000000");for(const a of this.files)r.writeByteArray(l),r.uint16(this.timeInt),r.uint16(this.dateInt),r.uint32(a.crc),r.uint32(a.size),r.uint32(a.size),r.uint16(a.name.length),r.uint16(0),r.uint16(0),r.uint16(0),r.uint16(0),r.uint32(a.size?32:48),r.uint32(a.offs),r.writeASCII(a.name);const c=r.i-s;return r.writeByteArray(this.hex2u8a("504b050600000000")),r.uint16(this.files.length),r.uint16(this.files.length),r.uint32(c),r.uint32(s),r.uint16(0),$t("Finished creating zip. size="+r.i+", predicted size="+o),this.buffer}crc(e){let n,o,r=-1;if(!pt)for(pt=[],o=0;o<256;n=++o){for(let i=0;i<8;i++)n=n&1?3988292384^n>>>1:n>>>1;pt[o]=n}for(let i=0;i<e.byteLength;i++)r=r>>>8^pt[(r^e[i])&255];return(r^-1)>>>0}hex2u8a(e){const n=new Uint8Array(Math.ceil(e.length/2));for(let o=0;o<n.length;o++)n[o]=parseInt(e.substr(o*2,2),16);return n}}class Iu{constructor(e){this.dw=new DataView(e),this.i=0,this.le=!0,this.utf8encoder=new TextEncoder("utf-8")}uint8(e){this.dw.setUint8(this.i++,e)}uint16(e){this.dw.setUint16(this.i,e,this.le),this.i+=2}uint32(e){this.dw.setUint32(this.i,e,this.le),this.i+=4}writeByteArray(e){if(!(e instanceof Uint8Array))throw new Error("invalid parameter");new Uint8Array(this.dw.buffer).set(e,this.i),this.i+=e.byteLength}writeASCII(e){for(let n=0;n<e.length;n++)this.dw.setUint8(this.i++,e.charCodeAt(n)&255)}}const je="application/vnd.openxmlformats-officedocument.spreadsheetml",Yt="http://schemas.openxmlformats.org",ht=`${Yt}/spreadsheetml/2006/main`,on=`${Yt}/package/2006`,He=`${Yt}/officeDocument/2006/relationships`,Fo=[{id:164,code:"yyyy&quot;-&quot;mm&quot;-&quot;dd"},{id:165,code:"yyyy&quot;-&quot;mm&quot;-&quot;dd&quot; &quot;h&quot;:&quot;mm&quot;:&quot;ss"}];class Ou extends Tr{constructor(e,n){super(e,`${je}.sheet`),this.sheets=[],this.frozen=!!(n&&n.frozen),this.autoFilter=!!(n&&n.filter)}addSheetFromData(e,n){const o=this.sheets.length+1;return this.sheets.push({id:o,name:this.escapeXml(n||"Sheet"+o),data:e}),this}generate(){const e=[{name:"xl/styles.xml",xml:`<styleSheet xmlns="${ht}" xmlns:mc="${Yt}/markup-compatibility/2006"><numFmts count="${Fo.length}">${Fo.map(r=>`<numFmt numFmtId="${r.id}" formatCode="${r.code}" />`)}</numFmts><fonts count="2"><font><sz val="10.0"/><color rgb="FF000000"/><name val="Arial"/></font><font><b/></font></fonts><fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="lightGray"/></fill></fills><borders count="1"><border><left/><right/><top/><bottom/></border></borders><cellStyleXfs count="1"><xf borderId="0" fillId="0" fontId="0" numFmtId="0" applyAlignment="1" applyFont="1"/></cellStyleXfs><cellXfs><xf borderId="0" fillId="0" fontId="0" numFmtId="0" xfId="0" applyAlignment="1" applyFont="1"><alignment/></xf><xf borderId="0" fillId="0" fontId="1" numFmtId="0" xfId="0" applyAlignment="1" applyFont="1"><alignment/></xf><xf borderId="0" fillId="0" fontId="0" numFmtId="164" xfId="0" applyAlignment="1" applyFont="1" applyNumberFormat="1"><alignment /></xf><xf borderId="0" fillId="0" fontId="0" numFmtId="165" xfId="0" applyAlignment="1" applyFont="1" applyNumberFormat="1"><alignment /></xf></cellXfs><cellStyles count="1"><cellStyle xfId="0" name="Normal" builtinId="0"/></cellStyles><dxfs count="0"/></styleSheet>`},{name:"xl/sharedStrings.xml",xml:`<sst xmlns="${ht}" count="2" uniqueCount="2"><si><t>text here</t></si></sst>`},{name:"xl/workbook.xml",xml:`<workbook xmlns="${ht}" xmlns:r="${He}"><workbookPr/><sheets>`+this.sheets.map(r=>`<sheet state="visible" name="${r.name}" sheetId="${r.id}" r:id="rId${r.id+2}"/>`).join("")+"</sheets><definedNames/><calcPr/></workbook>"},{name:"xl/_rels/workbook.xml.rels",xml:`<Relationships xmlns="${on}/relationships"><Relationship Id="rId1" Type="${He}/styles" Target="styles.xml" /><Relationship Id="rId2" Type="${He}/sharedStrings" Target="sharedStrings.xml"/>`+this.sheets.map(r=>`<Relationship Id="rId${r.id+2}" Type="${He}/worksheet" Target="worksheets/sheet${r.id}.xml"/>`).join("")+"</Relationships>"},{name:"[Content_Types].xml",xml:`<Types xmlns="${on}/content-types"><Default ContentType="application/xml" Extension="xml"/><Default ContentType="application/vnd.openxmlformats-package.relationships+xml" Extension="rels"/>`+this.sheets.map(r=>`<Override ContentType="${je}.worksheet+xml" PartName="/xl/worksheets/sheet${r.id}.xml"/>`).join("")+`<Override ContentType="${je}.sharedStrings+xml" PartName="/xl/sharedStrings.xml"/><Override ContentType="${je}.styles+xml" PartName="/xl/styles.xml" /><Override ContentType="${je}.sheet.main+xml" PartName="/xl/workbook.xml"/></Types>`},{name:"_rels/.rels",xml:`<Relationships xmlns="${on}/relationships"><Relationship Id="rId1" Type="${He}/officeDocument" Target="xl/workbook.xml"/></Relationships>`}],n=this.sheets.map(r=>{let i=0;const s=r.data.map((l,c)=>{const a=this.frozen&&c===0?' s="1"':"";l.length>i&&(i=l.length);const u=l.map((d,p)=>{const m=this.colName(p)+(c+1);return typeof d=="number"?`<c r="${m}"${a}><v>${d}</v></c>`:d instanceof Date?`<c s="${d.getHours()||d.getMinutes()||d.getSeconds()?3:2}"><v>${this.dateToExcelDate(d)}</v></c>`:`<c t="inlineStr"${a}><is><t>${this.escapeXml(d.toString())}</t></is></c>`});return`<row r="${c+1}">${u.join("")}</row>`});return{name:`xl/worksheets/sheet${r.id}.xml`,xml:`<worksheet xmlns="${ht}"><sheetViews><sheetView workbookViewId="0"`+(this.frozen?' tabSelected="1"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView>':"/>")+`</sheetViews><sheetFormatPr customHeight="1" defaultColWidth="17.5" defaultRowHeight="15.75"/><sheetData>${s.join("")}</sheetData>`+(this.autoFilter?`<autoFilter ref="A1:${this.colName(i)}${r.data.length}"/>`:"")+"</worksheet>"}}),o=new Eu(this._filename,!1);return[...e,...n].forEach(r=>o.addFileFromString(r.name,r.xml)),this.buffer=o.generate(),this.buffer}colName(e){return e<26?String.fromCharCode(e+65):String.fromCharCode(Math.floor(e/26+64))+String.fromCharCode(Math.floor(e%26+65))}escapeXml(e){return e.replace(/[<>&'"]/gu,n=>["&lt;","&gt;","&amp;","&apos;","&quot;"][`<>&'"`.indexOf(n)])}dateToExcelDate(e){return 25569+(e.getTime()-e.getTimezoneOffset()*6e4)/864e5}}const Fu=(t,e)=>{const n=t.map(r=>r.title),o=e.map(r=>t.map(i=>{const s=i.toXlsxValue(i,r);return s??""}));return o.unshift(n),o},Au=(t,e,n,o)=>{const r=Fu(t,e),i=new Ou(n).addSheetFromData(r,o).generate();Ye(new File([i],n,{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}))},Tu=({columns:t,selectedItems:e,csvFilename:n,xlsxFilename:o,xlsxSheetname:r,topPlacement:i})=>h`<cosmoz-bottom-bar
		id="bottomBar"
		?active=${!Mt(e.length)}
		part="bottomBar"
		exportparts="bar: bottomBar-bar, info: bottomBar-info, buttons: bottomBar-buttons"
	>
		<slot name="info" slot="info">
			${T("{count} selected item",{count:e.length})}
		</slot>
		<slot name="actions" id="actions"></slot>
		<!-- These slots are needed by cosmoz-bottom-bar
        as it might change the slot of the actions to distribute them in the menu -->
		<slot name="bottom-bar-toolbar" slot="bottom-bar-toolbar"></slot>
		<slot name="bottom-bar-menu" slot="bottom-bar-menu"></slot>
		<cosmoz-dropdown-menu part="extra" slot="extra" .placement=${i}>
			<svg
				slot="button"
				width="14"
				height="18"
				viewBox="0 0 14 18"
				fill="none"
				stroke="currentColor"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M1 8.5L7.00024 14.5L13 8.5"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path d="M13 17L1 17" stroke-width="2" stroke-linecap="round" />
				<path d="M7 1V13" stroke-width="2" stroke-linecap="round" />
			</svg>
			<button
				@click=${()=>ku(t,e,n)}
			>
				${T("Save as CSV")}
			</button>
			<button
				@click=${()=>Au(t,e,o,r)}
			>
				${T("Save as XLSX")}
			</button>
			<slot name="download-menu"></slot>
		</cosmoz-dropdown-menu>
	</cosmoz-bottom-bar>`,Lu=({allSelected:t,onAllCheckboxChange:e,sortAndGroup:n,dataIsValid:o,data:r,columns:i,filters:s,groupOnColumn:l,setFilterState:c,settingsConfig:a,hideSelectAll:u})=>h`<sort-and-group-provider .value=${n}>
		<div class="header" id="header" part="header">
			${E(!u,()=>h`<input
						class="checkbox all"
						type="checkbox"
						.checked=${t}
						@input=${e}
						?disabled=${!o}
						part="all"
					/>`)}
			${E(u,()=>h` <cosmoz-omnitable-settings
						.newLayout="${!0}"
						.config=${a}
					></cosmoz-omnitable-settings>`)}

			<cosmoz-omnitable-header-row
				part="headerRow"
				.data=${r}
				.columns=${i}
				.filters=${s}
				.groupOnColumn=${l}
				.setFilterState=${c}
				.settingsConfig=${a}
				.hideSelectAll=${u}
			></cosmoz-omnitable-header-row>
		</div>
	</sort-and-group-provider>`,Ru=q`
	:host {
		max-width: 100%;
		overflow-x: hidden;
		padding: 0 12px;
	}
	.skeleton {
		width: 100%;
	}
	.skeleton > div {
		height: 17.5px;
		display: flex;
		padding: 11px 12px 11px 0;
	}
	.skeleton > div div:not(.handle) {
		background-image: linear-gradient(
			90deg, 
			var(--cosmoz-omnitable-skeleton-bg-from, #e0e0e0), 
			var(--cosmoz-omnitable-skeleton-bg-middle, #f5f5f5), 
			var(--cosmoz-omnitable-skeleton-bg-to, #e0e0e0)
		);
		background-size: 1000%;
		background-position: right;
		border-radius: 4px;
		animation: sweep 1.5s cubic-bezier(0.3, 1, 0.3, 1) infinite;
	}
	.skeleton > div div:not(.checkbox):not(:last-of-type) {
		margin-right: 7px;
	}
	.skeleton > div div.checkbox {
		min-width: 18px;
		margin-left: 0;
		margin-right: 12px;
	}
	@keyframes sweep {
		0% {
			background-position: right;
		}
		100% {
			background-position: left;
		}
	}
`,Du=({settingsConfig:t})=>{const{columns:e,collapsed:n}=t,o=e.filter(r=>!n.some(i=>i.name===r.name));return h`<div class="skeleton">
		${Array.from({length:5},()=>h`<div>
					<div class="checkbox"></div>
					${o.map(r=>h`<div
								class="cell"
								part=${`cell-${r.name}`}
								name=${r.name}
							></div>`)}
				</div>`)}
	</div>`};customElements.define("cosmoz-omnitable-skeleton",L(Du,{styleSheets:[Ru]}));const Mu=(t,e)=>{const{settingsConfig:n}=t,{processedItems:o,dataIsValid:r,filterIsTooStrict:i,loading:s,displayEmptyGroups:l,compareItemsFn:c,setSelectedItems:a,renderItem:u,renderGroup:d,error:p}=e;return h`${E(!s&&!r&&!p,()=>h`<div class="tableContent-empty">
					<slot name="empty-set-message">
						${Wn({width:"96px",height:"96px",styles:"margin-right: 24px; fill: currentColor;"})}
						<div class="tableContent-empty-message">
							<h3>${T("Working set empty")}</h3>
							<p>${T("No data to display")}</p>
						</div>
					</slot>
				</div>`)}
		${E(i,()=>h`<div class="tableContent-empty">
					${Wn({width:"96px",height:"96px",styles:"margin-right: 24px; fill: currentColor;"})}
					<div>
						<h3>${T("Filter too strict")}</h3>
						<p>${T("No matches for selection")}</p>
					</div>
				</div>`)}
		${E(s&&!o.length,()=>h`<div class="tableContent-empty overlay">
					<cosmoz-omnitable-skeleton
						.settingsConfig=${n}
					></cosmoz-omnitable-skeleton>
				</div>`)}
		${E(s&&o.length,()=>h`<div class="tableContent-empty overlay spinner">
					<cz-spinner></cz-spinner>
				</div>`)}
		${E(p,()=>h`<div class="tableContent-empty overlay">
					${Bi({width:"96px",height:"96px",styles:"margin-right: 24px; fill: currentColor;"})}
					<div class="tableContent-empty-message">
						<h3>${T("Error loading data")}</h3>
						<p>${p.message}</p>
					</div>
				</div>`)}
		<div class="tableContent-scroller" id="scroller" part="scroller">
			<cosmoz-grouped-list
				id="groupedList"
				.data=${o}
				@selected-items-changed=${m=>a(m.detail.value)}
				.displayEmptyGroups=${l}
				.compareItemsFn=${c}
				.renderItem=${u}
				.renderGroup=${d}
			></cosmoz-grouped-list>
			<slot name="extraContent"></slot>
		</div>`},Ao=(t,e)=>{Object.assign(t.style,{display:e?"":"none"})};class Vu extends HTMLElement{static get observedAttributes(){return["opened"]}toggle=hr("height");constructor(){super();const e=new CSSStyleSheet;e.replaceSync(`
      :host { display: block; overflow: hidden; }
		`);const n=this.attachShadow({mode:"open"});n.appendChild(document.createElement("slot")),n.adoptedStyleSheets=[e]}connectedCallback(){Ao(this,this.getAttribute("opened")!=null)}attributeChangedCallback(e,n,o){if(e==="opened"){const r=o!=null;return this.isConnected?this.toggle(this,r):Ao(this,r)}}}customElements.define("cosmoz-collapse",Vu);const Bu=j`
	:host {
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		max-height: var(--ot-height, 60vh);
		outline: none;
		min-width: 270px;
		background-color: var(--cosmoz-omnitable-settings-bg-color, #fff);
	}

	.headline {
		font-weight: 500;
		font-size: 13px;
		color: var(
			--cosmoz-omnitable-settings-color,
			var(--cz-text-color, #101010)
		);
		text-transform: uppercase;
		line-height: 0.95;
		padding: 10px 14px;
		display: flex;
		align-items: center;
	}
	.close {
		border: none;
		background: none;
		cursor: pointer;
		padding: 2.5px 6px;
		margin-left: auto;
	}

	.contents {
		overflow-y: auto;
		scrollbar-width: 2px;
		scrollbar-gutter: stable;
		text-transform: uppercase;
		font-size: 12px;
		color: var(
			--cosmoz-omnitable-settings-color,
			var(--cz-text-color, #101010)
		);
	}
	.contents::-webkit-scrollbar {
		width: 2px;
	}
	.contents::-webkit-scrollbar-thumb {
		background: rgba(0, 0, 0, 0.5);
	}
	.contents::-webkit-scrollbar-track-piece:start,
	.contents::-webkit-scrollbar-track-piece:end {
		background: transparent;
	}

	.heading {
		box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.15);
		font-weight: 400;
		font-size: 13px;
		color: var(
			--cosmoz-omnitable-settings-color,
			var(--cz-text-color, #101010)
		);
		line-height: 0.95;
		padding: 14px;
		display: flex;
		cursor: pointer;
		align-items: center;
	}
	.heading svg {
		margin-left: auto;
		margin-right: 4px;
	}
	.heading[data-opened] svg {
		transform: scaleY(-1);
	}
	cosmoz-collapse[opened] + .heading {
		box-shadow:
			inset 0px -1px 0px rgba(0, 0, 0, 0.15),
			inset 0px 1px 0px rgba(0, 0, 0, 0.15);
	}

	.list {
		flex: 1;
		padding: 2px 14px;
		min-width: 232px;
	}
	.item {
		display: flex;
		align-items: center;
		background: var(
			--cosmoz-omnitable-settings-item-bg-color,
			var(--cz-surface-light, #fff)
		);
	}
	.item.drag {
		opacity: 0.6;
		pointer-events: none;
	}
	.item.dragover {
		box-shadow: 0 -2px 0 0 currentColor;
	}
	.pull {
		border: none;
		padding: 0;
		font-size: 0;
		vertical-align: bottom;
		outline: none;
		background: transparent;
		cursor: move;
		margin-right: 12px;
		color: var(
			--cosmoz-omnitable-settings-pull-color,
			var(--cz-color-muted, #c4c4c4)
		);
	}
	.title {
		flex: auto;
		overflow: hidden;
		text-overflow: ellipsis;
		color: var(
			--cosmoz-omnitable-settings-title-color,
			var(--cz-text-color, inherit)
		);
	}
	.title[has-filter] {
		font-weight: bold;
	}
	${Ar}
	.checkbox {
		margin: 4px 0;
	}

	.buttons {
		display: flex;
		gap: 8px;
		padding: 12px 14px;
		box-shadow: inset 0px 1px 0px rgba(0, 0, 0, 0.15);
	}
	.button {
		border: none;
		cursor: pointer;
		background: var(--cosmoz-button-bg-color, #101010);
		color: var(--cosmoz-button-color, #fff);
		font-family: inherit;
		font-size: 13px;
		font-weight: 600;
		line-height: 26px;
		border-radius: 4px;
		padding: 8px;
		flex: 1;
	}
	.button:not(.reset):hover {
		background: var(--cz-action-button-hover-bg, #3a3f44);
	}
	.button[disabled] {
		opacity: 0.2;
		pointer-events: none;
	}
	.reset {
		background: transparent;
		color: inherit;
	}
	/* sortgroups */
	.sgs {
		display: grid;
		column-gap: 7px;
		row-gap: 8px;
		grid-template-columns: repeat(auto-fit, minmax(112px, 1fr));
		grid-template-rows: auto;
		padding: 14px;
	}
	.sg {
		color: inherit;
		border: 1px solid rgba(0, 0, 0, 0.2);
		border-radius: 6px;
		font-size: 12px;
		text-transform: uppercase;
		line-height: 1;
		text-align: left;
		padding: 6px 12px;
		background: transparent;
		cursor: pointer;
		display: flex;
		align-items: left;
		justify-content: auto;
	}
	.sg span {
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.sg[data-on] {
		background: var(
			--cosmoz-omnitable-checkbox-checked-color,
			var(--primary-color)
		);
	}
	.sg svg {
		margin-left: 4px;
		flex: none;
		vertical-align: middle;
	}
	.sg:not([data-on]) svg {
		display: none;
	}
	.sg:not([data-on='desc']) svg {
		transform: scaleY(-1);
	}
`,Pu=j`
	:host {
		display: contents;
		color: var(
			--cosmoz-omnitable-settings-color,
			var(--cz-text-color, #101010)
		);
		--cosmoz-dropdown-box-shadow:
			0 3px 4px 0 rgb(0 0 0 / 14%), 0 1px 8px 0 rgb(0 0 0 / 12%),
			0 3px 3px -2px rgb(0 0 0 / 40%);
	}
	cosmoz-dropdown {
		outline: none;
	}
	cosmoz-dropdown::part(button) {
		border: none;
		cursor: pointer;
		outline: none;
		padding: 0;
		background: transparent;
		color: inherit;
	}
	cosmoz-dropdown::part(anchor) {
		display: inline-block;
	}
	.badge {
		position: absolute;
		top: 1px;
		right: -4px;
		background-color: var(
			--cosmoz-omnitable-checkbox-checked-color,
			var(--primary-color)
		);
		width: 8px;
		height: 8px;
		border-radius: 100%;
	}
	.headerDots {
		align-items: center;
		color: var(--cosmoz-input-color);
		display: flex;
		font-size: 20px;
		height: 42px;
		justify-content: center;
		margin-left: 12px;
		min-width: 30px;
		transform: rotate(90deg);
	}
	cosmoz-omnitable-settings-ui {
		display: flex;
	}
`,ft=t=>{const e=parseInt(t,10);return isFinite(e)?e:void 0},Nu=t=>{const{config:e}=t,{settings:n,setSettings:o,collapsed:r}=e,i=me({collapsed:r,settings:n.columns,setSettings:$(s=>o(l=>({...l,columns:s})),[o])});return{...e,onDown:$(s=>{s.target.closest(".pull")&&(i.handle=s.currentTarget)},[i]),onDragStart:$(s=>{const{target:l}=s,c=ft(l.dataset.index);if(!i.handle?.contains(l)||c==null)return s.preventDefault();i.handle=null,s.dataTransfer.effectAllowed="move",s.dataTransfer.setData("omnitable/sort-index",c),s.dataTransfer.setData("text/plain",c),setTimeout(()=>l.classList.add("drag"),0),l.addEventListener("dragend",a=>a.target.classList.remove("drag"),{once:!0})},[i]),onDragEnter:$(s=>{const l=s.currentTarget;l===s.target&&(s.preventDefault(),s.dataTransfer.dropEffect="move",l.classList.add("dragover"))},[]),onDragOver:$(s=>{s.preventDefault(),s.currentTarget.classList.add("dragover")},[]),onDragLeave:$(s=>{const l=s.currentTarget;l.contains(s.relatedTarget)||l.classList.remove("dragover")},[]),onDrop:$(s=>{const l=ft(s.dataTransfer.getData("omnitable/sort-index")),c=ft(s.currentTarget.dataset.index),{settings:a,setSettings:u}=i;s.currentTarget.classList.remove("dragover"),s.preventDefault();const d=a.slice();d.splice(c+(l>=c?0:-1),0,d.splice(l,1)[0]),u(d)},[i]),onToggle:$(s=>{const{settings:l,setSettings:c}=i,a=l.map(d=>({...d,disabled:d.disabled||i.collapsed?.some(p=>p.name===d.name)})),u=ft(s.target.closest("[data-index]")?.dataset.index);a.splice(u,1,{...l[u],disabled:!s.target.checked,priority:s.target.checked?l.reduce((d,p)=>Math.max(d,p.priority),0)+1:l[u].priority}),c(a)},[i])}},ju=[Zo({apply({availableHeight:t,elements:e}){Object.assign(e.floating.style,{maxHeight:`${Math.max(0,t)}px`})}}),...Cn],Hu=({onDragStart:t,onDragEnter:e,onDragOver:n,onDragLeave:o,onDrop:r,onDown:i,onToggle:s,collapsed:l,filters:c})=>(a,u)=>{const d=!!l?.find(m=>m.name===a.name),p=!a.disabled&&!d;return h` <div
			class="item"
			data-index=${u}
			@mousedown=${i}
			draggable="true"
			@dragstart=${t}
			@dragenter=${e}
			@dragover=${n}
			@dragleave=${o}
			@drop=${r}
		>
			<button class="pull">${au}</button>
			<label class="title" ?has-filter=${!Mt(c[a.name]?.filter)}
				>${a.title}</label
			>
			<input
				class="checkbox"
				type="checkbox"
				.checked=${p}
				@click=${s}
				.indeterminate=${d}
			/>
		</div>`},qu=t=>{const{settings:e,settingsId:n,onSave:o,onReset:r,hasChanges:i,opened:s,setOpened:l,...c}=Nu(t);return h` <div class="headline">
			${T("Sort and filter")}
			<button
				class="close"
				@click=${a=>{const u=a.currentTarget;u?.focus(),u?.blur()}}
			>
				${lu}
			</button>
		</div>

		<div class="contents">
			<div
				class="heading"
				?data-opened=${s.columns}
				@click=${()=>l(a=>({...a,columns:!a.columns}))}
				part="columns columns-heading"
			>
				${T("Columns")} ${tn}
			</div>
			<cosmoz-collapse
				?opened="${s.columns}"
				part="columns columns-content"
			>
				<div class="list">${e.columns?.map(Hu(c))}</div>
			</cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${s.sort}
				@click=${()=>l(a=>({...a,sort:!a.sort}))}
			>
				${T("Sort on")} ${tn}
			</div>
			<cosmoz-collapse ?opened=${s.sort}> ${du()} </cosmoz-collapse>

			<div
				class="heading"
				?data-opened=${s.group}
				@click=${()=>l(a=>({...a,group:!a.group}))}
				part="groups groups-heading"
			>
				${T("Group on")} ${tn}
			</div>
			<cosmoz-collapse ?opened=${s.group} part="groups groups-heading"
				>${uu()}</cosmoz-collapse
			>
		</div>

		${E(n,()=>h`<div class="buttons">
					<button
						class="button reset"
						@click=${r}
						?disabled=${!i}
					>
						${T("Reset")}
					</button>
					<button class="button" @click=${o} ?disabled=${!i}>
						${T("Save")}
					</button>
				</div>`)}`};customElements.define("cosmoz-omnitable-settings-ui",L(qu,{styleSheets:[Be(Bu)]}));const Wu=({config:t,newLayout:e})=>h`
	<cosmoz-dropdown
		.placement="${e?"bottom-start":"bottom-end"}"
		.middleware="${ju}"
	>
		<div title="${T("Sort and filter")}" slot="button">
			${E(e,()=>h`<div class="headerDots">...</div>`,()=>h` <svg viewBox="0 0 24 24" width="24" fill="currentColor">
						<circle cx="10" cy="18" r="2"></circle>
						<circle cx="10" cy="12" r="2"></circle>
						<circle cx="10" cy="6" r="2"></circle>
					</svg>`)}
			${E(t?.badge,()=>h`<div class="badge"></div>`)}
		</div>
		<cosmoz-omnitable-settings-ui
			exportparts="columns, groups"
			.config=${t}
		></cosmoz-omnitable-settings-ui>
	</cosmoz-dropdown>
`;customElements.define("cosmoz-omnitable-settings",L(Wu,{styleSheets:[Be(Pu)]}));const Ot=["sortOn","descending","groupOn","groupOnDescending"],gt=t=>e=>typeof e=="object"&&e!==null&&"name"in e&&e.name===t,Uu=(t=[],e=[],n=[])=>{const o=e.filter(s=>t.some(gt(s.name))),r=t.filter(s=>s.name!=null&&!e.some(gt(s.name))&&!n.some(gt(s.name))),i=n.filter(s=>!e.some(gt(s.name)));return[...o,...i.flatMap(s=>{const l=t.find(c=>c.name===s.name);return l?{...s,title:l.title??s.title??"",minWidth:parseInt(l.minWidth??"0",10)}:[]}),...r.map(s=>{const{name:l,title:c,priority:a,minWidth:u,width:d,flex:p}=s;return{name:l??"",title:c??"",priority:a??0,minWidth:parseInt(u??"0",10),width:parseInt(d??"0",10),flex:parseInt(p??"0",10)}})]},Xu=(t,e)=>({...e,...zt(Array.from(Ot))(t),columns:t.columns?.map(zt(["name","priority","width","flex","disabled"]))}),Gu=({columns:t,settings:e,savedSettings:n,initial:o})=>({...Object.fromEntries(Ot.flatMap(i=>o?.[i]!=null?[[i,o[i]]]:[])),...n?zt(Array.from(Ot))(n):{},...e,columns:Uu(t,e?.columns,n?.columns)}),Yu=({prefix:t="omnitable-"}={})=>({write:async(n,o)=>{const r=t+n;try{o?localStorage.setItem(r,JSON.stringify(o)):localStorage.removeItem(r)}catch(i){console.error(i)}},read:async n=>{if(n)try{const o=localStorage.getItem(t+n);return o==null?void 0:JSON.parse(o)}catch(o){console.error(o)}}}),Ku=vn(Yu),Zu=()=>{const t=Dt(Ku);return k(()=>t(),[t])},Qu=(t,e,n,o)=>{const[r,i]=M(),{read:s,write:l}=Zu();return I(async()=>{t&&i(await s(t))},[t,s]),{settingsId:t,savedSettings:r,onSave:$(async()=>{if(!t)return;const c=Xu(e,r);await l(t,c),n(),i(c)},[e,r]),onReset:$(async c=>{n(),c.shiftKey&&(await l(t),i()),o?.()},[o]),hasChanges:e!=null}},Ju=({settingsId:t,host:e})=>{const n=k(()=>Object.fromEntries(Ot.map(g=>[g,e[g]])),[]),o=Me(),r=$(()=>{o.current?.(n)},[n]),[i,s]=M(),[l,c]=M({columns:!0,sort:!0}),{savedSettings:a,...u}=Qu(t,i,s,r),{enabledColumns:d}=e,p=oc(e,{enabledColumns:d}),m=k(()=>Gu({columns:p,settings:i,savedSettings:a,initial:n}),[p,i,a]),b=k(()=>m.columns.map(g=>p.find(v=>v.name===g.name)).filter(Boolean),[p,...m.columns.map(g=>g.name)]);return{...u,opened:l,setOpened:c,settings:m,columns:b,setSettings:s,resetRef:o}},To=t=>Number.isFinite(t)?t:0,ed=(t,e)=>{const n=[];let[o,r]=t.reduce(([u,d],{width:p,flex:m})=>[u+p,d+m],[0,0]),i=e-o,s=To(i/r),l=0,c=0,a=0;for(let u=0;u<t.length;u++){const{width:d,minWidth:p,flex:m}=t[u],b=i>=0?s*m:d*i/o;if(p>d+b){l+=d,c+=p,a+=m,n[u]=p;continue}if(m===0){l+=d,c+=d,n[u]=d;continue}}o-=l,i=e-c-o,r-=a,s=To(i/r);for(let u=0;u<t.length;u++){if(n[u]!=null)continue;const{width:d,flex:p}=t[u],m=i>=0?s*p:d*i/o;n[u]=d+m}return n},Ft=Symbol("index"),td=(t,e)=>{if(typeof t.findLastIndex=="function")return t.findLastIndex(e);for(let n=t.length-1;n>=0;n--)if(e(t[n],n,t))return n;return-1},nd=(t,e)=>{const n=td(t,s=>s!=null&&s>0),o=(s,l)=>`.cell[name="${s}"], cosmoz-omnitable-skeleton::part(cell-${s}){width: ${Math.floor(l)}px;padding: 0 min(3px, ${l/2}px)}`,r=s=>`cosmoz-omnitable-resize-nub[name="${s}"]{display:none}`,i=s=>`cosmoz-omnitable-resize-nub[name="${s}"], .cell[name="${s}"]{display:none}`;return e.map((s,l)=>{const c=t[l];if(c==null||c===0)return i(s.name);const a=o(s.name,c);return l===n?`${a}
${r(s.name)}`:a}).join(`
`)},Lr=(t,e,n)=>{const o=t.filter(l=>!l.hidden),r=o.reduce((l,{width:c})=>l+c,0);if(o.length>1&&r>e)return Lr(o.slice(1),e,n);const i=o.reduce(([l,c],a,u)=>[Math.max(l,a.index),a.index>l?u:c],[-1,-1])[1];return i!==-1&&(o[i].flex=1),ed(o,e).reduce((l,c,a)=>(l[o[a].index]=c,l),new Array(n).fill(void 0))},od=(t,e)=>t.length===0?".cell {display: none;}":nd(t,e),rd=({host:t,canvasWidth:e,layout:n,setSettings:o})=>{const r=Me();r.current=i=>o(s=>{const l=s.columns,{detail:{newWidth:c,column:a}}=i,u=l.findIndex(m=>m.name===a.name),d=[],p=l.reduce((m,b)=>Math.max(m,b.priority),-1/0);for(let m=0;m<n.length;m++)if(d[m]={...l[m]},m<u&&n[m]&&(d[m].width=n[m],d[m].flex=0,d[m].priority=p),m===u){const b=n.reduce((g,v,y)=>y<u&&v?g-v:g,e);d[m].width=Math.min(b,Math.max(c,l[m].minWidth)),d[m].flex=0,d[m].priority=p}return{...s,columns:d}}),I(()=>{const i=s=>r.current?.(s);return t.addEventListener("column-resize",i),()=>t.removeEventListener("column-resize",i)},[])},id=20,sd=44,ld=24,Rr=id+sd+ld,ad=(t,e)=>I(()=>{const n=([r])=>{r.contentRect?.width!==0&&requestAnimationFrame(()=>e(r.contentRect?.width-Rr))},o=new ResizeObserver(n);return o.observe(t),()=>o.unobserve(t)},[]),cd=t=>{const[e,n]=M(()=>t.getBoundingClientRect().width-Rr);return ad(t,n),e},ud=(t,e)=>{const n=k(()=>{let o=!1,r;const i=()=>{if(!o)return;r=requestAnimationFrame(i),t()&&(o=!1)};return{start:()=>{o=!0,cancelAnimationFrame(r),r=requestAnimationFrame(i)},stop:()=>{o=!1,cancelAnimationFrame(r)}}},[]);I(()=>{n.start()},e),I(()=>()=>n.stop(),[])},dd=(t=0,e=0)=>Math.abs(t-e)<.1,md=(t,e=1.9,n=fn)=>{const o=me({target:t}),r=$(()=>{if(!o.tween)return o.tween=o.target,n(o.tween),!0;if(o.target.every((i,s)=>o.tween[s]===i))return n(o.tween),!0;o.tween=o.target.map((i,s)=>dd(o.tween[s],i)?i:(o.tween[s]??0)+((i??0)-(o.tween[s]??0))/e||0),n(o.tween)},[]);ud(r,[t])},pd=({canvasWidth:t,groupOnColumn:e,config:n,miniColumn:o})=>k(()=>{if(!Array.isArray(n)||t==null||t===0)return[];const r=n.map((i,s)=>({minWidth:i.minWidth,width:i.width,flex:i.flex,priority:i.priority,name:i.name,index:s,hidden:i.name===e?.name||i.disabled})).map(i=>o?{...i,hidden:o.name!==i.name}:i).sort(({index:i,priority:s},{index:l,priority:c})=>s===c?l-i:s-c);return Lr(r,t,r.length)},[t,e,n]),hd=({host:t,canvasWidth:e,columns:n})=>{const o=t.miniBreakpoint??480,r=k(()=>e<=o,[e,o]),i=k(()=>r?n?.filter(a=>a.mini!=null).sort((a,u)=>(a.mini??0)-(u.mini??0)):[],[n,r]),[s,...l]=i??[],c=!!s;return I(()=>{t.toggleAttribute("mini",c)},[c]),{isMini:c&&r,miniColumn:s,miniColumns:l}},fd=t=>{const e=k(()=>new CSSStyleSheet,[]);return I(()=>{t.shadowRoot.adoptedStyleSheets=[...t.shadowRoot.adoptedStyleSheets,e]},[]),e},gd=({host:t,columns:e,settings:n,setSettings:o,resizeSpeedFactor:r,sortAndGroupOptions:i})=>{const s=cd(t),{isMini:l,miniColumn:c,miniColumns:a}=hd({host:t,canvasWidth:s,columns:e}),{groupOnColumn:u}=i,d=pd({canvasWidth:s,groupOnColumn:u,miniColumn:c,config:n.columns}),p=fd(t),m=k(()=>n.columns.reduce((g,v,y)=>d[y]!=null||v.name===u?.name||v.disabled?g:[...g,e.find(f=>f.name===v.name)],[]),[e,n,d]),b=me({columns:n.columns});return md(d,r,g=>{const v=od(g,b.columns);p.replace(v)}),rd({host:t,canvasWidth:s,layout:d,setSettings:g=>o(g(n))}),{isMini:l,collapsedColumns:m,miniColumns:a}},bd=({host:t,...e})=>{const{csvFilename:n="omnitable.csv",xlsxFilename:o="omnitable.xlsx",xlsxSheetname:r="Omnitable",topPlacement:i="top-end"}=t;return{csvFilename:n,xlsxFilename:o,xlsxSheetname:r,topPlacement:i,...e}},xd=({host:t,selectedItems:e,data:n,sortAndGroupOptions:o,collapsedColumns:r,settings:i,filterFunctions:s,settingS:l,filters:c,...a})=>{const u=n&&n.length>0&&e.length===n.length,d=g=>{g.target.checked?t.shadowRoot.querySelector("#groupedList").selectAll():t.shadowRoot.querySelector("#groupedList").deselectAll()},{groupOnColumn:p}=o,m=k(()=>[p,...r,...i.columns.filter(g=>g.disabled)].some(g=>g&&Object.keys(s).includes(g.name)),[s,i,r]),b=k(()=>({...l,collapsed:r,badge:m,filters:c}),[l,r,m,c]);return I(()=>{const g=t.shadowRoot.querySelector("#tableContent"),v=new ResizeObserver(y=>requestAnimationFrame(()=>{t.style.setProperty("--ot-height",y[0]?.contentRect.height+"px")}));return v.observe(g),()=>v.unobserve(g)},[]),{allSelected:u,onAllCheckboxChange:d,data:n,settingsConfig:b,filters:c,groupOnColumn:p,sortAndGroup:o.sortAndGroup,...a}},Dr=h`
	<svg
		viewBox="0 0 24 24"
		preserveAspectRatio="xMidYMid meet"
		focusable="false"
	>
		<g>
			<path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
		</g>
	</svg>
`,vd=t=>t?"groupRow groupRow-folded":"groupRow",yd=({item:t,index:e})=>n=>E(n?.length>0,()=>h`
				<div class="itemRow-minis" part="item-minis">
					${n.map(o=>h`<div
								class="itemRow-mini"
								part="item-mini item-mini-${o.name}"
							>
								${(o.renderMini??o.renderCell)(o,{item:t,index:e})}
							</div>`)}
				</div>
			`),wd=({columns:t,collapsedColumns:e,miniColumns:n,onItemClick:o,onCheckboxChange:r,dataIsValid:i,groupOnColumn:s,onItemChange:l,rowPartFn:c})=>(a,u,{selected:d,expanded:p,toggleCollapse:m})=>h`
		<div
			?selected=${d}
			part="${["itemRow",`itemRow-${a[Ft]}`,c?.(a,u)].filter(Boolean).join(" ")}"
			.dataIndex=${a[Ft]}
			.dataItem=${a}
			class="itemRow"
			@click=${o}
		>
			<div class="itemRow-wrapper" part="itemRow-wrapper">
				<input
					class="checkbox"
					type="checkbox"
					part="checkbox"
					.checked=${d}
					.dataItem=${a}
					@input=${r}
					?disabled=${!i}
				/>
				<cosmoz-omnitable-item-row
					part="itemRow-inner"
					.columns=${t}
					.index=${u}
					.selected=${d}
					.expanded=${p}
					.item=${a}
					.groupOnColumn=${s}
					.onItemChange=${l}
				>
				</cosmoz-omnitable-item-row>
				<button
					class="expand"
					?hidden="${Mt(e.length)}"
					?aria-expanded="${p}"
					@click="${m}"
				>
					${Dr}
				</button>
			</div>
			${yd({item:a,index:u})(n)}
		</div>
		<cosmoz-omnitable-item-expand
			.columns=${e}
			.item=${a}
			.index=${u}
			?selected=${d}
			?expanded=${p}
			.groupOnColumn=${s}
			part="item-expand"
		>
		</cosmoz-omnitable-item-expand>
	`,$d=({onCheckboxChange:t,dataIsValid:e,groupOnColumn:n})=>(o,r,{selected:i,folded:s,toggleFold:l})=>h` <div
			class="${vd(s)}"
			part="groupRow groupRow-${o[Ft]}"
		>
			<input
				class="checkbox"
				type="checkbox"
				.checked=${i}
				.dataItem=${o}
				@input=${t}
				?disabled=${!e}
			/>
			<h3 class="groupRow-label">
				<div><span>${n?.title}</span>: &nbsp;</div>
				<cosmoz-omnitable-group-row
					.column=${n}
					.item=${o.items?.[0]}
					.selected=${i}
					.folded=${s}
					.group=${o}
				></cosmoz-omnitable-group-row>
			</h3>
			<div class="groupRow-badge">${o.items.length}</div>
			<button class="expand" ?aria-expanded="${s}" @click=${l}>
				${Dr}
			</button>
		</div>`,_d=({host:t,error:e,dataIsValid:n,processedItems:o,columns:r,collapsedColumns:i,miniColumns:s,sortAndGroupOptions:l,rowPartFn:c,...a})=>{const{loading:u=!1,displayEmptyGroups:d=!1,compareItemsFn:p}=t,m=Me({shiftKey:!1,ctrlKey:!1}),b=$(f=>{const w=f.target.dataItem,x=f.target.checked;m.current.shiftKey?t.shadowRoot.querySelector("#groupedList").toggleSelectTo(w,x):m.current.ctrlKey?(f.target.checked=!0,t.shadowRoot.querySelector("#groupedList").selectOnly(w)):t.shadowRoot.querySelector("#groupedList").toggleSelect(w,x),f.preventDefault(),f.stopPropagation()},[]);I(()=>{const f=({shiftKey:w,ctrlKey:x})=>{m.current={shiftKey:w,ctrlKey:x}};return window.addEventListener("keydown",f),window.addEventListener("keyup",f),()=>{window.removeEventListener("keydown",f),window.removeEventListener("keyup",f)}},[]);const g=$(f=>{const w=f.composedPath();w.slice(0,w.indexOf(f.currentTarget)).find(_=>_.matches?.("a, .checkbox, .expand"))||t.dispatchEvent(new window.CustomEvent("omnitable-item-click",{bubbles:!0,composed:!0,detail:{item:f.currentTarget.dataItem,index:f.currentTarget.dataIndex}}))},[]),{groupOnColumn:v}=l,y=$((f,w)=>x=>rc(t,f,w,x),[]);return{...a,processedItems:o,dataIsValid:n,filterIsTooStrict:n&&o.length<1,loading:u,compareItemsFn:p,displayEmptyGroups:d,error:e,renderItem:k(()=>wd({columns:r,collapsedColumns:i,miniColumns:s,onItemClick:g,onCheckboxChange:b,dataIsValid:n,groupOnColumn:v,onItemChange:y,rowPartFn:c}),[r,i,g,b,n,v,y,c]),renderGroup:k(()=>$d({onCheckboxChange:b,dataIsValid:n,groupOnColumn:v}),[b,n,v])}},zd=(t,e)=>{if(t===e)return 0;if(t==null)return-1;if(e==null)return 1;const n=typeof t,o=typeof e;return n==="object"&&o==="object"?t.toString()<e.toString()?-1:1:n==="number"&&o==="number"?t-e:n==="string"&&o==="string"?t<e?-1:1:n==="boolean"&&o==="boolean"?t?-1:1:(console.warn("unsupported sort",n,t,o,e),0)},rn=(t,e)=>(n,o)=>zd(t(n),t(o))*(e?-1:1),Cd=t=>t.replace(/([a-z0-9])([A-Z])/gu,"$1-$2").toLowerCase(),Lo=(t,e)=>{!t||!e||Object.entries(e).forEach(([n,o])=>{t[ge].__ownChange=!0,t[ge][n]=o,t[ge].__ownChange=!1,t[ge].dispatchEvent(new CustomEvent(`${Cd(n)}-changed`,{bubbles:!0,detail:{value:o}}))})},sn=(t,e)=>Object.assign(t,{[Ft]:e}),bt=Symbol("unparsed"),Sd=({data:t,columns:e,hashParam:n,sortAndGroupOptions:o,noLocalSort:r,noLocalFilter:i})=>{const{groupOnColumn:s,groupOnDescending:l,sortOnColumn:c,descending:a}=o,u=$(([x,_])=>{const z=e.find(({name:C})=>C===x);return z==null?[x,void 0]:[x,_.filter&&z.serializeFilter(z,_.filter)]},[e]),d=$(([x,_])=>{const z=e.find(({name:S})=>S===x);if(z==null)return[x,{[bt]:_}];const C={filter:z.deserializeFilter(z,_)};return Lo(z,C),[x,C]},[e]),[p,m]=qe({},n,{multi:!0,suffix:"-filter--",write:u,read:d}),b=$((x,_)=>m(z=>{const C=V(_,z[x]);return Lo(e.find(S=>S.name===x),C),{...z,[x]:{...z[x],...C}}}),[e,m]),g=k(()=>Object.values(p).map(x=>x.filter),[p]),v=k(()=>Object.fromEntries(e.map(x=>[x.name,!x.noLocalFilter&&x.getFilterFn(x,p[x.name]?.filter)]).filter(([,x])=>!!x)),[e,...g]),y=k(()=>!Array.isArray(t)||t.length===0?[]:Object.entries(v).length===0||i?t.slice():t.filter(x=>Object.values(v).every(_=>_(x))),[t,v,i]),f=k(()=>{if(!r&&!s&&c!=null&&c.sortOn!=null)return y.slice().sort(rn(x=>c.getComparableValue({...c,valuePath:c.sortOn},x),a));if(s!=null&&s.groupOn!=null){const x=y.reduce((_,z)=>{const C=s.getComparableValue({...s,valuePath:s.groupOn},z);if(C===void 0)return _;let S=_.find(O=>O.id===C);return S?(S.items.push(z),_):(S={id:C,name:C,items:[z]},[..._,S])},[]);return x.sort(rn(_=>s.getComparableValue({...s,valuePath:s.groupOn},_.items[0]),l)),!c||r?x:x.filter(_=>Array.isArray(_.items)).map(_=>(_.items.sort(rn(z=>c.getComparableValue({...c,valuePath:c.sortOn},z),a)),_))}return y},[y,s,l,c,a,r]),w=k(()=>{let x=0,_=0;const z=[];return f.forEach(C=>{if(Array.isArray(C.items)){sn(C,_++),C.items.forEach(S=>{sn(S,x++),z.push(S)});return}return sn(C,x++),z.push(C)},[]),z},[f]);return I(()=>{m(x=>Object.values(x).some(z=>z[bt]!=null)?Object.fromEntries(Object.entries(x).map(([z,C])=>C[bt]==null?[z,C]:d([z,C[bt]]))):x)},[d]),{processedItems:f,visibleData:w,filters:p,filterFunctions:v,setFilterState:b}},kd=t=>{const e=o=>{const r=t.data.indexOf(o);if(r<0)return null;const i=t.data.splice(r,1);if(t.data=t.data.slice(),Array.isArray(i)&&i.length>0)return i[0]},n=(o,r)=>{t.data.splice(o,1,r),t.data=t.data.slice()};return{removeItem:e,removeItems(o){const r=[];for(let i=o.length-1;i>=0;i-=1){const s=t.removeItem(o[i]);s!=null&&r.push(s)}return r},replaceItemAtIndex:n,replaceItem(o,r){const i=t.data.indexOf(o);if(i>-1)return n(i,r)},selectItem(o){t.shadowRoot.querySelector("#groupedList").select(o)},selectAll(){t.shadowRoot.querySelector("#groupedList").selectAll()},deselectAll(){t.shadowRoot.querySelector("#groupedList").deselectAll()},deselectItem(o){t.shadowRoot.querySelector("#groupedList").deselect(o)},isItemSelected(o){return t.shadowRoot.querySelector("#groupedList").isItemSelected(o)}}},Ed=({host:t,visibleData:e,filters:n,...o})=>{const{setFilterState:r}=o,i=k(()=>kd(t),[]);Ue(o,Object.values(o)),Ue(i,Object.values(i)),I(()=>{const l=c=>r(c.detail.name,a=>({...a,...c.detail.state}));return t.addEventListener("legacy-filter-changed",l),()=>t.removeEventListener("legacy-filter-changed",l)},[]),pe("visibleData",e),pe("sortedFilteredGroupedItems",o.sortedFilteredGroupedItems),pe("selectedItems",o.selectedItems),pe("sortOn",o.sortOn),pe("descending",o.descending),pe("isMini",o.isMini);const s=k(()=>Object.fromEntries(Object.entries(n).filter(([,{filter:l}])=>l!==void 0).map(([l,{filter:c}])=>[l,c])),[n]);pe("filters",s,Object.values(s))},Id=t=>{const{hashParam:e,settingsId:n,data:o,resizeSpeedFactor:r,noLocal:i,noLocalSort:s=i,noLocalFilter:l=i,error:c,rowPartFn:a}=t,u=Ju({settingsId:n,host:t}),{settings:d,setSettings:p,columns:m,resetRef:b}=u,g=bu(m,e,d,p,b),{processedItems:v,visibleData:y,filters:f,setFilterState:w,filterFunctions:x}=Sd({data:o,columns:m,hashParam:e,sortAndGroupOptions:g,noLocalSort:s,noLocalFilter:l}),{isMini:_,collapsedColumns:z,miniColumns:C}=gd({host:t,columns:m,settings:d,setSettings:p,resizeSpeedFactor:r,sortAndGroupOptions:g}),S=o&&Array.isArray(o)&&o.length>0,[O,R]=M([]);return Ed({host:t,visibleData:y,sortedFilteredGroupedItems:v,columns:m,filters:f,setFilterState:w,selectedItems:O,isMini:_,...g}),{header:xd({host:t,selectedItems:O,sortAndGroupOptions:g,dataIsValid:S,data:o,columns:m,filters:f,collapsedColumns:z,settings:d,filterFunctions:x,settingS:u,setFilterState:w,hideSelectAll:t.hideSelectAll===!0}),list:_d({host:t,error:c,dataIsValid:S,processedItems:v,setSelectedItems:R,columns:m,collapsedColumns:z,miniColumns:C,sortAndGroupOptions:g,rowPartFn:a}),footer:bd({host:t,selectedItems:O,columns:m})}};customElements.define("cosmoz-grouped-list-row",class extends HTMLElement{get item(){return this._item}set item(e){this._item=e,this._render()}get index(){return this._index}set index(e){this._index=e,this._render()}get renderFn(){return this._renderFn}set renderFn(e){this._renderFn=e,this._render()}_render(){this._item==null||this._index==null||this._renderFn==null||_t(this._renderFn(this._item,this._index),this)}});const Od={group:Symbol("group")},Kt=(t,e)=>(e.has(t)||e.set(t,{}),e.get(t)),Fd=(t,e)=>!!Kt(t,e).expanded,Ad=(t,e)=>!!Kt(t,e).folded,hn=t=>t?t.items instanceof Array:!1,Td=t=>{if(!Array.isArray(t)||t.length===0)return;const e=Array.isArray(t[0]?.items);if(!t.every(o=>Array.isArray(o.items)===e))throw new Error("Data must be homogeneous.")},Ld=(t,e,n)=>Array.isArray(t)?(Td(t),t.reduce((r,i)=>{const s=i;return s.items?s.items.length?Kt(i,n).folded?r.concat(i):r.concat(i,s.items.map(l=>Object.assign(l,{[Od.group]:i}))):e?r.concat(i):r:r.concat(i)},[])):void 0,Rd=(t,...e)=>typeof t=="function"?t(...e):t,Dd=(t,e)=>t===e,Md=()=>{const[t,e]=M(()=>[new WeakMap]);return{setItemState:$((o,r)=>e(([i])=>{const s=Kt(o,i);return Object.assign(s,Rd(r,s)),[i]}),[]),state:t[0],signal:t}},Vd=()=>{const{setItemState:t,state:e,signal:n}=Md(),o=$((i,s)=>{hn(i)&&t(i,l=>({folded:s!==void 0?s:!l.folded}))},[]),r=$((i,s)=>{hn(i)||t(i,l=>({expanded:s!==void 0?!s:!l.expanded}))},[]);return{state:e,signal:n,toggleFold:o,toggleCollapse:r}},Bd=({initial:t,compareItemsFn:e,data:n,flatData:o})=>{const[r,i]=M(t),[s,l]=M(),c=$(f=>r.includes(f),[r]),a=$(f=>f?.items?.every(c)??!1,[c]),u=$(f=>c(f)||a(f),[c,a]),d=$(f=>{const x=f.items??[f];i(_=>[..._,...x.filter(z=>!_.includes(z))]),l(f)},[]),p=$(f=>{const x=f.items??[f];i(_=>_.filter(z=>!x.includes(z))),l(f)},[]),m=$(f=>{i(f.items?.slice()||[f]),l(f)},[]),b=$(()=>{i(n.flatMap(f=>f.items||f)),l(void 0)},[n]),g=$(()=>{i([]),l(void 0)},[]),v=$((f,w=!u(f))=>w?d(f):p(f),[u]),y=$((f,w)=>{if(!o)return;const x=s?o.findIndex(C=>e(C,s)):-1;if(x<0)return v(f,w);const[_,z]=[x,o.indexOf(f)].sort((C,S)=>C-S);o.slice(_,z+1).forEach((C,S,O)=>{S>0&&S<O.length-1&&hn(C)||v(C,w)}),l(f)},[o,e,v]);return I(()=>i(f=>f.length>0&&o?o.filter(w=>f.find(x=>e(w,x))):f),[o]),{selectedItems:r,isItemSelected:c,isGroupSelected:a,isSelected:u,select:d,deselect:p,selectOnly:m,selectAll:b,deselectAll:g,toggleSelect:v,toggleSelectTo:y}},Pd={host:{position:"relative",display:"flex",flexDirection:"column"}},Nd=t=>{const{data:e,renderItem:n,renderGroup:o,displayEmptyGroups:r,compareItemsFn:i=Dd}=t,{toggleFold:s,toggleCollapse:l,state:c,signal:a}=Vd(),u=k(()=>Ld(e,r,c),[e,r,a]),{selectedItems:d,isItemSelected:p,isGroupSelected:m,isSelected:b,select:g,deselect:v,selectOnly:y,selectAll:f,deselectAll:w,toggleSelect:x,toggleSelectTo:_}=Bd({initial:[],compareItemsFn:i,data:e,flatData:u}),z=$((S,O)=>Array.isArray(S.items)?o(S,O,{selected:m(S),folded:Ad(S,c),toggleSelect:R=>x(S,typeof R=="boolean"?R:void 0),toggleFold:()=>s(S)}):n(S,O,{selected:d.includes(S),expanded:Fd(S,c),toggleSelect:R=>x(S,typeof R=="boolean"?R:void 0),toggleCollapse:()=>l(S)}),[n,o,d,x,a]);Ae(()=>{Object.assign(t.style,Pd.host)},[]),pe("selectedItems",d);const C={toggleFold:s,toggleCollapse:l,isItemSelected:p,isGroupSelected:m,isSelected:b,select:g,deselect:v,selectOnly:y,selectAll:f,deselectAll:w,toggleSelect:x,toggleSelectTo:_};return Ue(C,Object.values(C)),{renderRow:z,flatData:u}},jd=({renderRow:t,flatData:e})=>Jo({items:e,renderItem:(n,o)=>h`<cosmoz-grouped-list-row
				.item=${n}
				.index=${o}
				.renderFn=${t}
			></cosmoz-grouped-list-row>`}),Hd=t=>jd(Nd(t));customElements.define("cosmoz-grouped-list",L(Hd,{useShadowDOM:!1}));const qd=t=>window.ShadyCSS?.ApplyShim?.transformCssText?.(t)||t,Wd=t=>{const{header:e,list:n,footer:o}=Id(t);return h`
		<style>
			${xn([],()=>qd(Cu))}
		</style>

		<div class="mainContainer">
			${Lu(e)}
			<div class="tableContent" id="tableContent">
				${Mu(e,n)}
			</div>
			${Tu(o)}
		</div>

		<div id="columns">
			<slot id="columnsSlot"></slot>
		</div>
	`};customElements.define("cosmoz-omnitable",class extends L(Wd,{observedAttributes:["hash-param","sort-on","group-on","descending","group-on-descending","hide-select-all","settings-id","no-local","no-local-sort","no-local-filter","loading","mini-breakpoint"]}){connectedCallback(){super.connectedCallback(),be(this,"selectedItems",[]),be(this,"visibleData",[]),be(this,"sortedFilteredGroupedItems",[])}});const At=`
	<slot name="actions" slot="actions"></slot>
`;h(Object.assign([At],{raw:[At]}));Lt(Object.assign([At],{raw:[At]}));const Ud=(t,e=t)=>E(e.length>1,()=>E(e.length===t.length,()=>h`(${e.length})`,()=>h`(${e.length}/${t.length})`)),Xd=t=>{const{open:e,dialog:n,items:o,applicable:r,slot:i}=t,s=t.title(),l=r?o.filter(r):o;return l.length?h`<button
		class="button"
		slot="${A(i)}"
		@click=${async()=>e(await n({...t,items:l,title:s}))}
	>
		${s} ${Ud(o,l)}
	</button>`:H},Gd=t=>e=>e.map(n=>(n.button??Xd)({...n,...t}));q`
	.more {
		font-family: inherit;
		font-size: 14px;
		font-weight: 500;
		line-height: 40px;
		background: inherit;
		color: var(--cz-text-color);
		border: none;
		cursor: pointer;
	}
	.more:hover {
		color: var(--secondary-text-color);
	}
`;const Yd=({loading:t,data$:e,onMore:n})=>h`<button
		class="more"
		slot="extraContent"
		?hidden="${!n}"
		@click="${n}"
	>
		${E(t,()=>h`<cosmoz-spinner></cosmoz-spinner>`)}
		${E(e,o=>ze(o.then(()=>H,()=>H),h`<cosmoz-spinner></cosmoz-spinner>`))}
		<span>${T("Load more")}</span>
	</button>`,Kd=t=>Object.entries(t).map(([e,n])=>n.render({...n,name:e})),Mr=({settingsId:t,hashParam:e,enabledColumns:n,csvFilename:o,exposedParts:r,data$:i,noLocal:s=!0,miniBreakpoint:l,sortOn:c,setSortOn:a,descending:u,setDescending:d,groupOn:p,setGroupOn:m,selectedItems:b,setSelectedItems:g,setVisibleItems:v,setFilters:y,setIsMini:f,columns:w,actions:x,dialog:_,open:z,content:C,loadMore:S})=>[h`<cosmoz-omnitable
		id="omnitable"
		?no-local=${s}
		.hashParam=${e}
		.data=${ze(i)}
		.csvFilename=${o}
		.enabledColumns=${n}
		?loading=${ze(Promise.resolve(i).then(()=>!1,()=>!1),!0)}
		.compareItemsFn=${xn([],()=>(O,R)=>O.id===R.id)}
		.settingsId=${t}
		exportparts=${r}
		@visible-data-changed=${we(v)}
		@filters-changed=${we(y)}
		.selectedItems=${b}
		@selected-items-changed=${we(g)}
		.groupOn=${p}
		@group-on-changed=${we(m)}
		.sortOn=${c}
		@sort-on-changed=${we(a)}
		descending=${u}
		@descending-changed=${we(d)}
		.miniBreakpoint=${l}
		@is-mini-changed=${we(f)}
		>${[Kd(w),E(x,Gd({open:z,items:b,slot:"actions"})),C?.({selectedItems:b}),Yd({data$:i,onMore:S})]}</cosmoz-omnitable
	>`,fa(_)],{expect:Tt,fn:ne}=__STORYBOOK_MODULE_TEST__,Vr=()=>({settingsId:"test",data$:Promise.resolve([]),columns:{},selectedItems:[],sortOn:void 0,descending:!1,groupOn:void 0,filters:void 0,isMini:!1,setSortOn:ne(),setDescending:ne(),setGroupOn:ne(),setSelectedItems:ne(),setVisibleItems:ne(),setFilters:ne(),setTotalAvailable:ne(),setIsMini:ne(),dialog:void 0,open:ne(),loadMore:void 0}),rm={title:"Tests/RenderListCore"},xt={render:()=>h`<div id="test-container">
            ${Mr({...Vr(),miniBreakpoint:600})}
        </div>`,async play({canvasElement:t}){const e=t.querySelector("cosmoz-omnitable");Tt(e).toBeTruthy(),Tt(e.miniBreakpoint).toBe(600)}},vt={args:{setIsMini:ne()},render:t=>h`<div id="test-container">
            ${Mr({...Vr(),setIsMini:t.setIsMini})}
        </div>`,async play({args:t,canvasElement:e}){const n=e.querySelector("cosmoz-omnitable");Tt(n).toBeTruthy(),n.dispatchEvent(new CustomEvent("is-mini-changed",{detail:{value:!0}})),Tt(t.setIsMini).toHaveBeenCalledWith(!0)}};xt.parameters={...xt.parameters,docs:{...xt.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div id="test-container">
            \${renderListCore({
    ...mockProps(),
    miniBreakpoint: 600
  })}
        </div>\`,
  async play({
    canvasElement
  }) {
    const omnitable = canvasElement.querySelector('cosmoz-omnitable') as HTMLElement & {
      miniBreakpoint: number;
    };
    expect(omnitable).toBeTruthy();
    expect(omnitable.miniBreakpoint).toBe(600);
  }
}`,...xt.parameters?.docs?.source}}};vt.parameters={...vt.parameters,docs:{...vt.parameters?.docs,source:{originalSource:`{
  args: {
    setIsMini: fn()
  },
  render: args => html\`<div id="test-container">
            \${renderListCore({
    ...mockProps(),
    setIsMini: args.setIsMini as StateUpdater<boolean>
  })}
        </div>\`,
  async play({
    args,
    canvasElement
  }) {
    const omnitable = canvasElement.querySelector('cosmoz-omnitable') as HTMLElement;
    expect(omnitable).toBeTruthy();
    omnitable.dispatchEvent(new CustomEvent('is-mini-changed', {
      detail: {
        value: true
      }
    }));
    expect(args.setIsMini).toHaveBeenCalledWith(true);
  }
}`,...vt.parameters?.docs?.source}}};const im=["MiniBreakpointBinding","IsMiniChangedEvent"];export{vt as IsMiniChangedEvent,xt as MiniBreakpointBinding,im as __namedExportsOrder,rm as default};
