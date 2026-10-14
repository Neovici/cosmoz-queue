import{t as e}from"./chunk-BvrOYcoh.js";import{a as t,o as n,r,t as i}from"./lit-html-BZ3vufxv.js";import{i as a,r as o}from"./iframe-C9PpB62v.js";import{_ as s,a as c,d as l,g as u,h as d,i as f,m as p,n as ee,p as te,r as ne,s as re,t as m,u as ie}from"./haunted-DeTCYNUV.js";import{a as ae,c as h,d as oe,i as g,l as _,n as v,o as se,r as ce,s as le,t as ue,u as de}from"./i18next-BsOHxirR.js";import{n as fe,t as pe}from"./use-pref-D73Mm18_.js";var y,b,x=e((()=>{y=e=>t=>{let n=t.match(e);return n&&{result:n,url:new URL(t,document.location.origin)}},b=(e,t)=>{for(let n of e){let e=n.rule,r=typeof e==`function`?e(t):y(e)(t);if(r)return{...n,route:n,match:r,url:t}}}})),S=e((()=>{m()})),C,w,T,E,D=e((()=>{m(),x(),C=()=>window.location.href.replace(window.location.origin,``),w=()=>{let[e,t]=l(C);return d(()=>{let e=()=>t(C);return window.addEventListener(`popstate`,e),()=>window.removeEventListener(`popstate`,e)},[t]),e},T=e=>{let t=w();return p(()=>b(e,t),[e,t])},E=(e,t=null,{notify:n=!0,replace:r=!0}={})=>{(r?history.replaceState:history.pushState).call(history,t,``,e),n&&queueMicrotask(()=>window.dispatchEvent(new CustomEvent(`popstate`,{bubbles:!1})))}})),O,k=e((()=>{m(),D(),O=e=>{let t=T(e);return{route:t,result:p(()=>{if(t){let{handle:e,...n}=t;return e(n)}},[t])}}})),A,j,me=e((()=>{A=class{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}},j=class{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(e=>this.Z=e)}resume(){this.Z?.(),this.Y=this.Z=void 0}}})),M,N,P,F,I=e((()=>{n(),o(),f(),me(),re(),M=e=>!a(e)&&typeof e.then==`function`,N=1073741823,P=class extends ne{constructor(){super(...arguments),this._$Cwt=N,this._$Cbt=[],this._$CK=new A(this),this._$CX=new j}render(...e){return e.find(e=>!M(e))??r}update(e,t){let n=this._$Cbt,i=n.length;this._$Cbt=t;let a=this._$CK,o=this._$CX;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cwt);e++){let r=t[e];if(!M(r))return this._$Cwt=e,r;e<i&&r===n[e]||(this._$Cwt=N,i=0,Promise.resolve(r).then(async e=>{for(;o.get();)await o.get();let t=a.deref();if(t!==void 0){let n=t._$Cbt.indexOf(r);n>-1&&n<t._$Cwt&&(t._$Cwt=n,t.setValue(e))}}))}return r}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}},F=c(P)})),L,R,he=e((()=>{m(),L=(e,t,n)=>e.dispatchEvent(new CustomEvent(t,{bubbles:!1,cancelable:!1,composed:!0,...n})),R=(e,t,n)=>{d(()=>{if(!n){L(e,`route-not-found`);return}L(e,`route-loading`,{detail:t}),Promise.resolve(n).then(()=>L(e,`route-loaded`,{detail:t})).catch(n=>L(e,`route-error`,{detail:{route:t,error:n}}))},[n])}})),z,ge=e((()=>{n(),oe(),I(),m(),k(),he(),z=e=>{let t=e.routes,{route:n,result:r}=O(t);return R(e,n,r),de([r],()=>F(Promise.resolve(r).catch(()=>i),i))},customElements.define(`cosmoz-router`,ee(z))})),_e=e((()=>{x(),S(),D(),k(),ge()})),B,V,H,U,W=e((()=>{m(),_(),ae(),_e(),B=e=>{let t=ie(void 0);return d(()=>void(t.current=e),[e]),t.current},V=(e,t,n,r)=>e.find(e=>n(e)===n(t))??e[r]??e[0],H=(e,t,n)=>e.find(e=>n(e)===t)??e[0],U=(e,{id:t=h,hashParam:n,maintainSelection:r})=>{let[i,a]=l(()=>e[0]),[o]=le(n),s=p(()=>e.indexOf(i),[e,i]),c=B(s),{prev:u,next:f}=p(()=>{let t=e.length-1;return{...s>0&&{prev:()=>a(e[Math.max(0,Math.min(t,s-1))])},...s<t&&{next:()=>a(e[Math.max(0,Math.min(t,s+1))])}}},[e,s]);return d(()=>{!i||!n||E(se(n,t(i)),null,{notify:!1})},[i]),d(()=>{e.length!==0&&a(n=>!n&&o!=null?H(e,o,t):e.indexOf(n)>=0?n:!n||!r?e[0]:V(e,n,t,c))},[e,o]),{forward:s>c,index:s,item:i,items:e,setItem:a,prev:u,next:f}}})),G,K=e((()=>{m(),G=s(class extends u{update(){return this.state.host}})})),q,J=e((()=>{m(),q=e=>{let t=p(()=>({}),[]);return p(()=>Object.assign(t,e),[t,...Object.values(e)])}})),Y,ve=e((()=>{m(),K(),J(),Y=()=>{let[e,t]=l(),[n,r]=l([]),[i,a]=l([]);return{totalAvailable:e,setTotalAvailable:t,items:n,setItems:r,selected:i,setSelected:a}}})),X,Z,Q,ye=e((()=>{n(),X=t` <svg
	width="18"
	height="14"
	viewBox="0 0 18 14"
	fill="none"
	stroke="currentColor"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		d="M1 2C1 1.44772 1.44772 1 2 1H16C16.5523 1 17 1.44772 17 2V4.57143C17 5.12371 16.5523 5.57143 16 5.57143H2C1.44772 5.57143 1 5.12371 1 4.57143V2Z"
		stroke-width="1.5"
	/>
	<line x1="1" y1="9.39288" x2="17" y2="9.39288" stroke-width="1.5" />
	<line x1="1" y1="12.8214" x2="17" y2="12.8214" stroke-width="1.5" />
</svg>`,Z=t`
	<svg
		width="22"
		height="16"
		viewBox="0 0 22 16"
		fill="none"
		stroke="currentColor"
		xmlns="http://www.w3.org/2000/svg"
	>
		<rect x="5.44409" y="1" width="11.1111" height="14" stroke-width="1.5" />
		<path d="M18.7776 3.3335H20.9998V12.6668H18.7776" stroke-width="1.5" />
		<path
			d="M3.22217 12.6665L0.999946 12.6665L0.999947 3.33317L3.22217 3.33317"
			stroke-width="1.5"
		/>
	</svg>
`,Q=t`
	<svg
		width="19"
		height="14"
		viewBox="0 0 19 14"
		fill="none"
		stroke="currentColor"
		xmlns="http://www.w3.org/2000/svg"
	>
		<rect x="10" y="1" width="8" height="12" stroke-width="1.5" />
		<line
			x1="7"
			y1="12.1787"
			x2="4.15643e-07"
			y2="12.1787"
			stroke-width="1.5"
		/>
		<line x1="7" y1="8.75" x2="4.15643e-07" y2="8.75" stroke-width="1.5" />
		<line
			x1="7"
			y1="5.17871"
			x2="4.15643e-07"
			y2="5.17871"
			stroke-width="1.5"
		/>
		<line x1="7" y1="1.75" x2="4.15643e-07" y2="1.75" stroke-width="1.5" />
	</svg>
`})),$,be=e((()=>{ce(),m(),ue(),ye(),pe(),$=({items:e,hashParam:t,mobile:n,fallback:r,onActivate:i,tabPersistKey:a})=>{let[o,s]=fe(a),c=o??r,l=g(p(()=>[{name:`overview`,title:v(`List`),disabled:!1,content:X},{name:`split`,disabled:n||!(e.length>0),title:v(`Split`),content:Q},{name:`queue`,disabled:!(e.length>0),title:v(`Queue`),content:Z}].map(e=>e.name===c?{...e,fallback:!0}:e),[e.length,n,c]),{hashParam:t,onActivate:te(e=>{s(e),i?.(e)},[s,i])}),u=p(()=>l,Object.values(l));return{activeTab:u.active?.name,tabnav:u}}}));export{J as a,G as c,Y as i,W as l,$ as n,q as o,ve as r,K as s,be as t,U as u};