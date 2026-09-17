import{t as e}from"./chunk-BvrOYcoh.js";import{a as t,o as n,r,t as i}from"./lit-html-BZ3vufxv.js";import{i as a,r as o}from"./iframe-CMep2Xvr.js";import{_ as s,a as c,d as l,g as u,h as d,i as f,m as p,n as ee,p as te,r as m,s as ne,t as h,u as g}from"./haunted-Cuc4b_8X.js";import{a as re,c as ie,d as ae,i as _,l as oe,n as v,o as se,r as ce,s as le,t as ue,u as de}from"./i18next-BRvxW17T.js";import{n as fe,t as pe}from"./use-pref-DguRnasc.js";var y,b,x=e((()=>{y=e=>t=>{let n=t.match(e);return n&&{result:n,url:new URL(t,document.location.origin)}},b=(e,t)=>{for(let n of e){let e=n.rule,r=typeof e==`function`?e(t):y(e)(t);if(r)return{...n,route:n,match:r,url:t}}}})),me=e((()=>{h()})),S,C,w,T,E=e((()=>{h(),x(),S=()=>window.location.href.replace(window.location.origin,``),C=()=>{let[e,t]=l(S);return d(()=>{let e=()=>t(S);return window.addEventListener(`popstate`,e),()=>window.removeEventListener(`popstate`,e)},[t]),e},w=e=>{let t=C();return p(()=>b(e,t),[e,t])},T=(e,t=null,{notify:n=!0,replace:r=!0}={})=>{(r?history.replaceState:history.pushState).call(history,t,``,e),n&&queueMicrotask(()=>window.dispatchEvent(new CustomEvent(`popstate`,{bubbles:!1})))}})),D,O=e((()=>{h(),E(),D=e=>{let t=w(e);return{route:t,result:p(()=>{if(t){let{handle:e,...n}=t;return e(n)}},[t])}}})),k,A,j=e((()=>{k=class{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}},A=class{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(e=>this.Z=e)}resume(){this.Z?.(),this.Y=this.Z=void 0}}})),M,N,P,F,he=e((()=>{n(),o(),f(),j(),ne(),M=e=>!a(e)&&typeof e.then==`function`,N=1073741823,P=class extends m{constructor(){super(...arguments),this._$Cwt=N,this._$Cbt=[],this._$CK=new k(this),this._$CX=new A}render(...e){return e.find(e=>!M(e))??r}update(e,t){let n=this._$Cbt,i=n.length;this._$Cbt=t;let a=this._$CK,o=this._$CX;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cwt);e++){let r=t[e];if(!M(r))return this._$Cwt=e,r;e<i&&r===n[e]||(this._$Cwt=N,i=0,Promise.resolve(r).then(async e=>{for(;o.get();)await o.get();let t=a.deref();if(t!==void 0){let n=t._$Cbt.indexOf(r);n>-1&&n<t._$Cwt&&(t._$Cwt=n,t.setValue(e))}}))}return r}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}},F=c(P)})),I,L,ge=e((()=>{h(),I=(e,t,n)=>e.dispatchEvent(new CustomEvent(t,{bubbles:!1,cancelable:!1,composed:!0,...n})),L=(e,t,n)=>{d(()=>{if(!n){I(e,`route-not-found`);return}I(e,`route-loading`,{detail:t}),Promise.resolve(n).then(()=>I(e,`route-loaded`,{detail:t})).catch(n=>I(e,`route-error`,{detail:{route:t,error:n}}))},[n])}})),R,_e=e((()=>{n(),ae(),he(),h(),O(),ge(),R=e=>{let t=e.routes,{route:n,result:r}=D(t);return L(e,n,r),de([r],()=>F(Promise.resolve(r).catch(()=>i),i))},customElements.define(`cosmoz-router`,ee(R))})),ve=e((()=>{x(),me(),E(),O(),_e()})),z,B,V,H,ye=e((()=>{h(),oe(),re(),ve(),z=e=>{let t=g(void 0);return d(()=>void(t.current=e),[e]),t.current},B=(e,t,n,r)=>e.find(e=>n(e)===n(t))??e[r]??e[0],V=(e,t,n)=>e.find(e=>n(e)===t)??e[0],H=(e,{id:t=ie,hashParam:n,maintainSelection:r})=>{let[i,a]=l(()=>e[0]),[o]=le(n),s=p(()=>e.indexOf(i),[e,i]),c=z(s),{prev:u,next:f}=p(()=>{let t=e.length-1;return{...s>0&&{prev:()=>a(e[Math.max(0,Math.min(t,s-1))])},...s<t&&{next:()=>a(e[Math.max(0,Math.min(t,s+1))])}}},[e,s]);return d(()=>{!i||!n||T(se(n,t(i)),null,{notify:!1})},[i]),d(()=>{e.length!==0&&a(n=>!n&&o!=null?V(e,o,t):e.indexOf(n)>=0?n:!n||!r?e[0]:B(e,n,t,c))},[e,o]),{forward:s>c,index:s,item:i,items:e,setItem:a,prev:u,next:f}}})),U,W=e((()=>{h(),U=s(class extends u{update(){return this.state.host}})})),G,K=e((()=>{h(),G=e=>{let t=p(()=>({}),[]);return p(()=>Object.assign(t,e),[t,...Object.values(e)])}})),q,be=e((()=>{h(),W(),K(),q=()=>{let[e,t]=l(),[n,r]=l([]),[i,a]=l([]);return{totalAvailable:e,setTotalAvailable:t,items:n,setItems:r,selected:i,setSelected:a}}})),J,Y,X,xe=e((()=>{n(),J=t` <svg
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
</svg>`,Y=t`
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
`,X=t`
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
`})),Z,Q,$,Se=e((()=>{ce(),h(),ue(),xe(),pe(),Z=[`overview`,`split`,`queue`],Q=e=>Z.includes(e),$=({items:e,hashParam:t,mobile:n,fallback:r,onActivate:i,persist:a})=>{let[o,s]=fe(a),[c]=l(o),u=Q(c)?c:r,d=_(p(()=>[{name:`overview`,title:v(`List`),disabled:!1,content:J},{name:`split`,disabled:n||!(e.length>0),title:v(`Split`),content:X},{name:`queue`,disabled:!(e.length>0),title:v(`Queue`),content:Y}].map(e=>e.name===u?{...e,fallback:!0}:e),[e.length,n,u]),{hashParam:t,onActivate:te(e=>{Q(e)&&s(e),i?.(e)},[s,i])}),f=p(()=>d,Object.values(d));return{activeTab:f.active?.name,tabnav:f}}}));export{K as a,U as c,q as i,ye as l,$ as n,G as o,be as r,W as s,Se as t,H as u};