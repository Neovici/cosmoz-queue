import{t as e}from"./chunk-BvrOYcoh.js";import{a as t,o as n,r,t as i}from"./lit-html-BZ3vufxv.js";import{i as a,r as o}from"./iframe-BJxo-SSm.js";import{_ as s,a as c,f as l,g as u,h as d,i as f,n as p,r as m,s as ee,t as h,u as te,v as g}from"./haunted-CjkjlOZk.js";import{_ as ne,b as _,c as re,d as ie,f as ae,h as v,l as oe,m as y,p as se,u as ce,v as le,y as ue}from"./render-C0c6MWFx.js";var b,x,S=e((()=>{b=e=>t=>{let n=t.match(e);return n&&{result:n,url:new URL(t,document.location.origin)}},x=(e,t)=>{for(let n of e){let e=n.rule,r=typeof e==`function`?e(t):b(e)(t);if(r)return{...n,route:n,match:r,url:t}}}})),C=e((()=>{h()})),w,T,E,D,O=e((()=>{h(),S(),w=()=>window.location.href.replace(window.location.origin,``),T=()=>{let[e,t]=l(w);return u(()=>{let e=()=>t(w);return window.addEventListener(`popstate`,e),()=>window.removeEventListener(`popstate`,e)},[t]),e},E=e=>{let t=T();return d(()=>x(e,t),[e,t])},D=(e,t=null,{notify:n=!0,replace:r=!0}={})=>{(r?history.replaceState:history.pushState).call(history,t,``,e),n&&queueMicrotask(()=>window.dispatchEvent(new CustomEvent(`popstate`,{bubbles:!1})))}})),k,A=e((()=>{h(),O(),k=e=>{let t=E(e);return{route:t,result:d(()=>{if(t){let{handle:e,...n}=t;return e(n)}},[t])}}})),j,M,de=e((()=>{j=class{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}},M=class{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(e=>this.Z=e)}resume(){this.Z?.(),this.Y=this.Z=void 0}}})),N,P,F,I,L=e((()=>{n(),o(),f(),de(),ee(),N=e=>!a(e)&&typeof e.then==`function`,P=1073741823,F=class extends m{constructor(){super(...arguments),this._$Cwt=P,this._$Cbt=[],this._$CK=new j(this),this._$CX=new M}render(...e){return e.find(e=>!N(e))??r}update(e,t){let n=this._$Cbt,i=n.length;this._$Cbt=t;let a=this._$CK,o=this._$CX;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cwt);e++){let r=t[e];if(!N(r))return this._$Cwt=e,r;e<i&&r===n[e]||(this._$Cwt=P,i=0,Promise.resolve(r).then(async e=>{for(;o.get();)await o.get();let t=a.deref();if(t!==void 0){let n=t._$Cbt.indexOf(r);n>-1&&n<t._$Cwt&&(t._$Cwt=n,t.setValue(e))}}))}return r}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}},I=c(F)})),R,z,B=e((()=>{h(),R=(e,t,n)=>e.dispatchEvent(new CustomEvent(t,{bubbles:!1,cancelable:!1,composed:!0,...n})),z=(e,t,n)=>{u(()=>{if(!n){R(e,`route-not-found`);return}R(e,`route-loading`,{detail:t}),Promise.resolve(n).then(()=>R(e,`route-loaded`,{detail:t})).catch(n=>R(e,`route-error`,{detail:{route:t,error:n}}))},[n])}})),V,fe=e((()=>{n(),_(),L(),h(),A(),B(),V=e=>{let t=e.routes,{route:n,result:r}=k(t);return z(e,n,r),ue([r],()=>I(Promise.resolve(r).catch(()=>i),i))},customElements.define(`cosmoz-router`,p(V))})),pe=e((()=>{S(),C(),O(),A(),fe()})),H,U,W,G,me=e((()=>{h(),le(),ce(),pe(),H=e=>{let t=te(void 0);return u(()=>void(t.current=e),[e]),t.current},U=(e,t,n,r)=>e.find(e=>n(e)===n(t))??e[r]??e[0],W=(e,t,n)=>e.find(e=>n(e)===t)??e[0],G=(e,{id:t=ne,hashParam:n,maintainSelection:r})=>{let[i,a]=l(()=>e[0]),[o]=ae(n),s=d(()=>e.indexOf(i),[e,i]),c=H(s),{prev:f,next:p}=d(()=>{let t=e.length-1;return{...s>0&&{prev:()=>a(e[Math.max(0,Math.min(t,s-1))])},...s<t&&{next:()=>a(e[Math.max(0,Math.min(t,s+1))])}}},[e,s]);return u(()=>{!i||!n||D(ie(n,t(i)),null,{notify:!1})},[i]),u(()=>{e.length!==0&&a(n=>!n&&o!=null?W(e,o,t):e.indexOf(n)>=0?n:!n||!r?e[0]:U(e,n,t,c))},[e,o]),{forward:s>c,index:s,item:i,items:e,setItem:a,prev:f,next:p}}})),K,q=e((()=>{h(),K=g(class extends s{update(){return this.state.host}})}));function he(e){if(e)return t=>{let n=J(t?.detail);n!==void 0&&e(n)}}var J,ge=e((()=>{J=e=>{if(e!=null)switch(e?.path?.split(`.`)[1]){case`length`:return;case`splices`:return e?.value?.indexSplices?.reduce((e,t)=>[...t.object],[]);default:return e.value}}})),Y,_e=e((()=>{h(),q(),v(),Y=()=>{let[e,t]=l(),[n,r]=l([]),[i,a]=l([]);return{totalAvailable:e,setTotalAvailable:t,items:n,setItems:r,selected:i,setSelected:a}}})),X,Z,Q,ve=e((()=>{n(),X=t` <svg
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
`})),$,ye=e((()=>{re(),h(),se(),ve(),$=({items:e,hashParam:t,mobile:n,fallback:r,onActivate:i})=>{let a=oe(d(()=>[{name:`overview`,title:y(`List`),disabled:!1,content:X},{name:`split`,disabled:n||!(e.length>0),title:y(`Split`),content:Q},{name:`queue`,disabled:!(e.length>0),title:y(`Queue`),content:Z}].map(e=>e.name===r?{...e,fallback:!0}:e),[e.length,n,r]),{hashParam:t,onActivate:i}),o=d(()=>a,Object.values(a));return{activeTab:o.active?.name,tabnav:o}}}));export{ge as a,K as c,Y as i,me as l,$ as n,he as o,_e as r,q as s,ye as t,G as u};