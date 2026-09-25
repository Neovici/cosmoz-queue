import{t as e}from"./chunk-BvrOYcoh.js";import{a as t,c as n,o as r,r as i,t as a}from"./lit-html-BZ3vufxv.js";import{i as o,r as s}from"./iframe-AERFRyyP.js";import{_ as c,a as ee,d as l,g as u,h as d,i as te,m as f,n as p,r as ne,s as re,t as m,u as ie}from"./haunted-VsMocDs2.js";import{S as ae,_ as oe,a as h,b as g,c as _,d as se,f as ce,g as le,h as ue,i as de,l as fe,m as pe,o as me,p as he,s as v,t as ge,u as y,v as _e,x as b,y as ve}from"./render-D8qeHxRV.js";var x,S,C=e((()=>{x=e=>t=>{let n=t.match(e);return n&&{result:n,url:new URL(t,document.location.origin)}},S=(e,t)=>{for(let n of e){let e=n.rule,r=typeof e==`function`?e(t):x(e)(t);if(r)return{...n,route:n,match:r,url:t}}}})),ye=e((()=>{m()})),w,be,xe,T,E=e((()=>{m(),C(),w=()=>window.location.href.replace(window.location.origin,``),be=()=>{let[e,t]=l(w);return d(()=>{let e=()=>t(w);return window.addEventListener(`popstate`,e),()=>window.removeEventListener(`popstate`,e)},[t]),e},xe=e=>{let t=be();return f(()=>S(e,t),[e,t])},T=(e,t=null,{notify:n=!0,replace:r=!0}={})=>{(r?history.replaceState:history.pushState).call(history,t,``,e),n&&queueMicrotask(()=>window.dispatchEvent(new CustomEvent(`popstate`,{bubbles:!1})))}})),D,O=e((()=>{m(),E(),D=e=>{let t=xe(e);return{route:t,result:f(()=>{if(t){let{handle:e,...n}=t;return e(n)}},[t])}}})),k,A,Se=e((()=>{k=class{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}},A=class{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(e=>this.Z=e)}resume(){this.Z?.(),this.Y=this.Z=void 0}}})),j,M,N,P,Ce=e((()=>{r(),s(),te(),Se(),re(),j=e=>!o(e)&&typeof e.then==`function`,M=1073741823,N=class extends ne{constructor(){super(...arguments),this._$Cwt=M,this._$Cbt=[],this._$CK=new k(this),this._$CX=new A}render(...e){return e.find(e=>!j(e))??i}update(e,t){let n=this._$Cbt,r=n.length;this._$Cbt=t;let a=this._$CK,o=this._$CX;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cwt);e++){let i=t[e];if(!j(i))return this._$Cwt=e,i;e<r&&i===n[e]||(this._$Cwt=M,r=0,Promise.resolve(i).then(async e=>{for(;o.get();)await o.get();let t=a.deref();if(t!==void 0){let n=t._$Cbt.indexOf(i);n>-1&&n<t._$Cwt&&(t._$Cwt=n,t.setValue(e))}}))}return i}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}},P=ee(N)})),F,I,we=e((()=>{m(),F=(e,t,n)=>e.dispatchEvent(new CustomEvent(t,{bubbles:!1,cancelable:!1,composed:!0,...n})),I=(e,t,n)=>{d(()=>{if(!n){F(e,`route-not-found`);return}F(e,`route-loading`,{detail:t}),Promise.resolve(n).then(()=>F(e,`route-loaded`,{detail:t})).catch(n=>F(e,`route-error`,{detail:{route:t,error:n}}))},[n])}})),L,Te=e((()=>{r(),ve(),Ce(),m(),O(),we(),L=e=>{let t=e.routes,{route:n,result:r}=D(t);return I(e,n,r),_e([r],()=>P(Promise.resolve(r).catch(()=>a),a))},customElements.define(`cosmoz-router`,p(L))})),Ee=e((()=>{C(),ye(),E(),O(),Te()})),R,z,B,De,Oe=e((()=>{m(),oe(),he(),Ee(),R=e=>{let t=ie(void 0);return d(()=>void(t.current=e),[e]),t.current},z=(e,t,n,r)=>e.find(e=>n(e)===n(t))??e[r]??e[0],B=(e,t,n)=>e.find(e=>n(e)===t)??e[0],De=(e,{id:t=le,hashParam:n,maintainSelection:r})=>{let[i,a]=l(()=>e[0]),[o]=ue(n),s=f(()=>e.indexOf(i),[e,i]),c=R(s),{prev:ee,next:u}=f(()=>{let t=e.length-1;return{...s>0&&{prev:()=>a(e[Math.max(0,Math.min(t,s-1))])},...s<t&&{next:()=>a(e[Math.max(0,Math.min(t,s+1))])}}},[e,s]);return d(()=>{!i||!n||T(pe(n,t(i)),null,{notify:!1})},[i]),d(()=>{e.length!==0&&a(n=>!n&&o!=null?B(e,o,t):e.indexOf(n)>=0?n:!n||!r?e[0]:z(e,n,t,c))},[e,o]),{forward:s>c,index:s,item:i,items:e,setItem:a,prev:ee,next:u}}})),ke=e((()=>{m(),c(class extends u{update(){return this.state.host}})})),Ae=e((()=>{m()})),V,je=e((()=>{m(),ke(),Ae(),V=()=>{let[e,t]=l(),[n,r]=l([]),[i,a]=l([]);return{totalAvailable:e,setTotalAvailable:t,items:n,setItems:r,selected:i,setSelected:a}}})),Me=e((()=>{r(),g()})),Ne=e((()=>{r(),g()})),Pe=e((()=>{r(),g()})),Fe=e((()=>{r(),g()})),Ie=e((()=>{r(),g()})),Le=e((()=>{r(),g()})),Re=e((()=>{r(),g()})),ze=e((()=>{r(),g()})),Be=e((()=>{r(),g()})),Ve=e((()=>{r(),g()})),He=e((()=>{r(),g()})),Ue=e((()=>{r(),g()})),We=e((()=>{r(),g()})),Ge=e((()=>{r(),g()})),Ke=e((()=>{r(),g()})),qe=e((()=>{r(),g()})),Je=e((()=>{r(),g()})),Ye=e((()=>{r(),g()})),Xe=e((()=>{r(),g()})),Ze=e((()=>{r(),g()})),Qe=e((()=>{r(),g()})),$e=e((()=>{r(),g()})),et=e((()=>{r(),g()})),tt=e((()=>{r(),g()})),nt=e((()=>{r(),g()})),rt=e((()=>{r(),g()})),it=e((()=>{r(),g()})),at=e((()=>{r(),g()})),ot=e((()=>{r(),g()})),st=e((()=>{r(),g()})),ct=e((()=>{r(),g()})),lt=e((()=>{r(),g()})),ut=e((()=>{r(),g()})),dt=e((()=>{r(),g()})),ft=e((()=>{r(),g()})),pt=e((()=>{r(),g()})),mt=e((()=>{r(),g()})),ht=e((()=>{r(),g()})),gt=e((()=>{r(),g()})),_t=e((()=>{r(),g()})),vt=e((()=>{r(),g()})),yt=e((()=>{r(),g()})),bt=e((()=>{r(),g()})),xt=e((()=>{r(),g()})),St=e((()=>{r(),g()})),Ct=e((()=>{r(),g()})),wt=e((()=>{r(),g()})),Tt=e((()=>{r(),g()})),Et=e((()=>{r(),g()})),Dt=e((()=>{r(),g()})),Ot=e((()=>{r(),g()})),kt=e((()=>{r(),g()})),At=e((()=>{r(),g()})),jt=e((()=>{r(),g()})),Mt=e((()=>{r(),g()})),Nt=e((()=>{r(),g()})),Pt=e((()=>{r(),g()})),Ft=e((()=>{r(),g()})),It=e((()=>{r(),g()})),Lt=e((()=>{r(),g()})),Rt=e((()=>{r(),g()})),zt=e((()=>{r(),g()})),Bt=e((()=>{r(),g()})),Vt=e((()=>{r(),g()})),Ht=e((()=>{r(),g()})),Ut=e((()=>{r(),g()})),Wt=e((()=>{r(),g()})),Gt=e((()=>{r(),g()})),Kt=e((()=>{r(),g()})),qt=e((()=>{r(),g()})),Jt=e((()=>{r(),g()})),Yt=e((()=>{r(),g()})),Xt=e((()=>{r(),g()})),Zt=e((()=>{r(),g()})),Qt=e((()=>{r(),g()})),$t=e((()=>{r(),g()})),en=e((()=>{r(),g()})),tn=e((()=>{r(),g()})),nn=e((()=>{r(),g()})),rn=e((()=>{r(),g()})),an=e((()=>{r(),g()})),on=e((()=>{r(),g()})),sn=e((()=>{r(),g()})),cn=e((()=>{r(),g()})),ln=e((()=>{r(),g()})),un=e((()=>{r(),g()})),dn=e((()=>{r(),g()})),fn=e((()=>{r(),g()})),pn=e((()=>{r(),g()})),mn=e((()=>{r(),g()})),hn=e((()=>{r(),g()})),gn=e((()=>{r(),g()})),_n=e((()=>{r(),g()})),vn=e((()=>{r(),g()})),yn=e((()=>{r(),g()})),bn=e((()=>{r(),g()})),xn=e((()=>{r(),g()})),Sn=e((()=>{r(),g()})),Cn=e((()=>{r(),g()})),wn=e((()=>{r(),g()})),Tn=e((()=>{r(),g()})),En=e((()=>{r(),g()})),Dn=e((()=>{r(),g()})),On=e((()=>{r(),g()})),kn=e((()=>{r(),g()})),An=e((()=>{r(),g()})),jn=e((()=>{r(),g()})),Mn=e((()=>{r(),g()})),Nn=e((()=>{r(),g()})),Pn=e((()=>{r(),g()})),Fn=e((()=>{r(),g()})),In=e((()=>{r(),g()})),Ln=e((()=>{r(),g()})),Rn=e((()=>{r(),g()})),zn=e((()=>{r(),g()})),Bn=e((()=>{r(),g()})),Vn=e((()=>{r(),g()})),Hn=e((()=>{r(),g()})),Un=e((()=>{r(),g()})),Wn=e((()=>{r(),g()})),Gn=e((()=>{r(),g()})),Kn=e((()=>{r(),g()})),qn=e((()=>{r(),g()})),Jn=e((()=>{r(),g()})),Yn=e((()=>{r(),g()})),Xn=e((()=>{r(),g()})),Zn=e((()=>{r(),g()})),Qn=e((()=>{r(),g()})),$n=e((()=>{r(),g()})),er=e((()=>{r(),g()})),tr=e((()=>{r(),g()})),nr=e((()=>{r(),g()})),rr=e((()=>{r(),g()})),ir=e((()=>{r(),g()})),ar=e((()=>{r(),g()})),or=e((()=>{r(),g()})),sr=e((()=>{r(),g()})),cr=e((()=>{r(),g()})),lr=e((()=>{r(),g()})),ur=e((()=>{r(),g()})),dr=e((()=>{r(),g()})),fr=e((()=>{r(),g()})),pr=e((()=>{r(),g()})),mr=e((()=>{r(),g()})),hr=e((()=>{r(),g()})),gr=e((()=>{r(),g()})),_r=e((()=>{r(),g()})),vr=e((()=>{r(),g()})),yr=e((()=>{r(),g()})),br=e((()=>{r(),g()})),xr=e((()=>{r(),g()})),Sr=e((()=>{r(),g()})),Cr=e((()=>{r(),g()})),wr=e((()=>{r(),g()})),Tr=e((()=>{r(),g()})),Er=e((()=>{r(),g()})),Dr=e((()=>{r(),g()})),Or=e((()=>{r(),g()})),kr=e((()=>{r(),g()})),Ar=e((()=>{r(),g()})),jr=e((()=>{r(),g()})),Mr=e((()=>{r(),g()})),Nr=e((()=>{r(),g()})),Pr=e((()=>{r(),g()})),Fr=e((()=>{r(),g()})),Ir=e((()=>{r(),g()})),Lr=e((()=>{r(),g()})),Rr=e((()=>{r(),g()})),zr=e((()=>{r(),g()})),Br=e((()=>{r(),g()})),Vr=e((()=>{r(),g()})),Hr=e((()=>{r(),g()})),Ur=e((()=>{r(),g()})),Wr=e((()=>{r(),g()})),Gr=e((()=>{r(),g()})),Kr=e((()=>{r(),g()})),qr=e((()=>{r(),g()})),Jr=e((()=>{r(),g()})),Yr=e((()=>{r(),g()})),Xr=e((()=>{r(),g()})),Zr=e((()=>{r(),g()})),Qr=e((()=>{r(),g()})),$r=e((()=>{r(),g()})),ei=e((()=>{r(),g()})),ti=e((()=>{r(),g()})),ni=e((()=>{r(),g()})),ri=e((()=>{r(),g()})),ii=e((()=>{r(),g()})),ai=e((()=>{r(),g()})),oi=e((()=>{r(),g()})),si=e((()=>{r(),g()})),ci=e((()=>{r(),g()})),li=e((()=>{r(),g()})),ui=e((()=>{r(),g()})),di=e((()=>{r(),g()})),fi=e((()=>{r(),g()})),pi=e((()=>{r(),g()})),mi=e((()=>{r(),g()})),hi=e((()=>{r(),g()})),gi=e((()=>{r(),g()})),_i=e((()=>{r(),g()})),vi=e((()=>{r(),g()})),yi=e((()=>{r(),g()})),bi=e((()=>{r(),g()})),xi=e((()=>{r(),g()})),Si=e((()=>{r(),g()})),Ci=e((()=>{r(),g()})),wi=e((()=>{r(),g()})),Ti=e((()=>{r(),g()})),Ei=e((()=>{r(),g()})),Di=e((()=>{r(),g()})),Oi=e((()=>{r(),g()})),ki=e((()=>{r(),g()})),Ai=e((()=>{r(),g()})),ji=e((()=>{r(),g()})),Mi=e((()=>{r(),g()})),Ni=e((()=>{r(),g()})),Pi=e((()=>{r(),g()})),Fi=e((()=>{r(),g()})),Ii=e((()=>{r(),g()})),Li=e((()=>{r(),g()})),Ri=e((()=>{r(),g()})),zi=e((()=>{r(),g()})),Bi=e((()=>{r(),g()})),Vi=e((()=>{r(),g()})),Hi=e((()=>{r(),g()})),Ui=e((()=>{r(),g()})),Wi=e((()=>{r(),g()})),Gi=e((()=>{r(),g()})),Ki=e((()=>{r(),g()})),qi=e((()=>{r(),g()})),Ji=e((()=>{r(),g()})),Yi=e((()=>{r(),g()})),Xi=e((()=>{r(),g()})),Zi=e((()=>{r(),g()})),Qi=e((()=>{r(),g()})),$i=e((()=>{r(),g()})),ea=e((()=>{r(),g()})),ta=e((()=>{r(),g()})),na=e((()=>{r(),g()})),ra=e((()=>{r(),g()})),ia=e((()=>{r(),g()})),aa=e((()=>{r(),g()})),oa=e((()=>{r(),g()})),sa=e((()=>{r(),g()})),ca=e((()=>{r(),g()})),la=e((()=>{r(),g()})),ua=e((()=>{r(),g()})),da=e((()=>{r(),g()})),fa=e((()=>{r(),g()})),pa=e((()=>{r(),g()})),ma=e((()=>{r(),g()})),ha=e((()=>{r(),g()})),ga=e((()=>{r(),g()})),_a=e((()=>{r(),g()})),va=e((()=>{r(),g()})),ya=e((()=>{r(),g()})),ba=e((()=>{r(),g()})),xa=e((()=>{r(),g()})),Sa=e((()=>{r(),g()})),Ca=e((()=>{r(),g()})),wa=e((()=>{r(),g()})),Ta=e((()=>{r(),g()})),Ea=e((()=>{r(),g()})),Da=e((()=>{r(),g()})),Oa=e((()=>{r(),g()})),ka=e((()=>{r(),g()})),Aa=e((()=>{r(),g()})),ja=e((()=>{r(),g()})),Ma=e((()=>{r(),g()})),Na=e((()=>{r(),g()})),Pa=e((()=>{r(),g()})),Fa=e((()=>{r(),g()})),Ia=e((()=>{r(),g()})),La=e((()=>{r(),g()})),Ra=e((()=>{r(),g()})),za=e((()=>{r(),g()})),Ba=e((()=>{r(),g()})),Va=e((()=>{r(),g()})),Ha=e((()=>{r(),g()})),Ua=e((()=>{r(),g()})),Wa=e((()=>{r(),g()})),Ga=e((()=>{r(),g()})),Ka=e((()=>{r(),g()})),qa=e((()=>{r(),g()})),Ja=e((()=>{r(),g()})),Ya=e((()=>{r(),g()})),Xa=e((()=>{r(),g()})),Za=e((()=>{r(),g()})),Qa=e((()=>{r(),g()})),$a=e((()=>{r(),g()})),eo=e((()=>{r(),g()})),to=e((()=>{r(),g()})),no=e((()=>{r(),g()})),ro=e((()=>{r(),g()})),io=e((()=>{r(),g()})),ao=e((()=>{r(),g()})),oo=e((()=>{r(),g()})),so=e((()=>{r(),g()})),co=e((()=>{r(),g()})),lo=e((()=>{r(),g()})),uo=e((()=>{r(),g()})),H,fo=e((()=>{r(),g(),v(),H=({slot:e,title:r,className:i,width:a=`24`,height:o=`24`,styles:s}={})=>t`
  <svg
    slot=${b(e)}
    class=${`columns-02-icon ${i??``}`}
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
    style=${b(s)}
  >
    ${_(r,()=>n`<title>${r}</title>`)}
    <path
      d="M12 3v18M7.8 3h8.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 3 6.12 3 7.8 3Z"
    />
  </svg>
`})),po=e((()=>{r(),g()})),mo=e((()=>{r(),g()})),ho=e((()=>{r(),g()})),go=e((()=>{r(),g()})),_o=e((()=>{r(),g()})),vo=e((()=>{r(),g()})),yo=e((()=>{r(),g()})),bo=e((()=>{r(),g()})),xo=e((()=>{r(),g()})),So=e((()=>{r(),g()})),Co=e((()=>{r(),g()})),wo=e((()=>{r(),g()})),To=e((()=>{r(),g()})),Eo=e((()=>{r(),g()})),Do=e((()=>{r(),g()})),Oo=e((()=>{r(),g()})),ko=e((()=>{r(),g()})),Ao=e((()=>{r(),g()})),jo=e((()=>{r(),g()})),Mo=e((()=>{r(),g()})),No=e((()=>{r(),g()})),Po=e((()=>{r(),g()})),Fo=e((()=>{r(),g()})),Io=e((()=>{r(),g()})),Lo=e((()=>{r(),g()})),Ro=e((()=>{r(),g()})),zo=e((()=>{r(),g()})),Bo=e((()=>{r(),g()})),Vo=e((()=>{r(),g()})),Ho=e((()=>{r(),g()})),Uo=e((()=>{r(),g()})),Wo=e((()=>{r(),g()})),Go=e((()=>{r(),g()})),Ko=e((()=>{r(),g()})),qo=e((()=>{r(),g()})),Jo=e((()=>{r(),g()})),Yo=e((()=>{r(),g()})),Xo=e((()=>{r(),g()})),Zo=e((()=>{r(),g()})),Qo=e((()=>{r(),g()})),$o=e((()=>{r(),g()})),es=e((()=>{r(),g()})),ts=e((()=>{r(),g()})),ns=e((()=>{r(),g()})),rs=e((()=>{r(),g()})),is=e((()=>{r(),g()})),as=e((()=>{r(),g()})),os=e((()=>{r(),g()})),ss=e((()=>{r(),g()})),cs=e((()=>{r(),g()})),ls=e((()=>{r(),g()})),us=e((()=>{r(),g()})),ds=e((()=>{r(),g()})),fs=e((()=>{r(),g()})),ps=e((()=>{r(),g()})),ms=e((()=>{r(),g()})),hs=e((()=>{r(),g()})),gs=e((()=>{r(),g()})),_s=e((()=>{r(),g()})),vs=e((()=>{r(),g()})),ys=e((()=>{r(),g()})),bs=e((()=>{r(),g()})),xs=e((()=>{r(),g()})),Ss=e((()=>{r(),g()})),Cs=e((()=>{r(),g()})),ws=e((()=>{r(),g()})),Ts=e((()=>{r(),g()})),Es=e((()=>{r(),g()})),Ds=e((()=>{r(),g()})),Os=e((()=>{r(),g()})),ks=e((()=>{r(),g()})),As=e((()=>{r(),g()})),js=e((()=>{r(),g()})),Ms=e((()=>{r(),g()})),Ns=e((()=>{r(),g()})),Ps=e((()=>{r(),g()})),Fs=e((()=>{r(),g()})),Is=e((()=>{r(),g()})),Ls=e((()=>{r(),g()})),Rs=e((()=>{r(),g()})),zs=e((()=>{r(),g()})),Bs=e((()=>{r(),g()})),Vs=e((()=>{r(),g()})),Hs=e((()=>{r(),g()})),Us=e((()=>{r(),g()})),Ws=e((()=>{r(),g()})),Gs=e((()=>{r(),g()})),Ks=e((()=>{r(),g()})),qs=e((()=>{r(),g()})),Js=e((()=>{r(),g()})),Ys=e((()=>{r(),g()})),Xs=e((()=>{r(),g()})),Zs=e((()=>{r(),g()})),Qs=e((()=>{r(),g()})),$s=e((()=>{r(),g()})),ec=e((()=>{r(),g()})),tc=e((()=>{r(),g()})),nc=e((()=>{r(),g()})),rc=e((()=>{r(),g()})),ic=e((()=>{r(),g()})),ac=e((()=>{r(),g()})),oc=e((()=>{r(),g()})),sc=e((()=>{r(),g()})),cc=e((()=>{r(),g()})),lc=e((()=>{r(),g()})),uc=e((()=>{r(),g()})),dc=e((()=>{r(),g()})),fc=e((()=>{r(),g()})),pc=e((()=>{r(),g()})),mc=e((()=>{r(),g()})),hc=e((()=>{r(),g()})),gc=e((()=>{r(),g()})),_c=e((()=>{r(),g()})),vc=e((()=>{r(),g()})),yc=e((()=>{r(),g()})),bc=e((()=>{r(),g()})),xc=e((()=>{r(),g()})),Sc=e((()=>{r(),g()})),Cc=e((()=>{r(),g()})),wc=e((()=>{r(),g()})),Tc=e((()=>{r(),g()})),Ec=e((()=>{r(),g()})),Dc=e((()=>{r(),g()})),Oc=e((()=>{r(),g()})),kc=e((()=>{r(),g()})),Ac=e((()=>{r(),g()})),jc=e((()=>{r(),g()})),Mc=e((()=>{r(),g()})),Nc=e((()=>{r(),g()})),Pc=e((()=>{r(),g()})),Fc=e((()=>{r(),g()})),Ic=e((()=>{r(),g()})),Lc=e((()=>{r(),g()})),Rc=e((()=>{r(),g()})),zc=e((()=>{r(),g()})),Bc=e((()=>{r(),g()})),Vc=e((()=>{r(),g()})),Hc=e((()=>{r(),g()})),Uc=e((()=>{r(),g()})),Wc=e((()=>{r(),g()})),Gc=e((()=>{r(),g()})),Kc=e((()=>{r(),g()})),qc=e((()=>{r(),g()})),Jc=e((()=>{r(),g()})),Yc=e((()=>{r(),g()})),Xc=e((()=>{r(),g()})),Zc=e((()=>{r(),g()})),Qc=e((()=>{r(),g()})),$c=e((()=>{r(),g()})),el=e((()=>{r(),g()})),tl=e((()=>{r(),g()})),nl=e((()=>{r(),g()})),rl=e((()=>{r(),g()})),il=e((()=>{r(),g()})),al=e((()=>{r(),g()})),ol=e((()=>{r(),g()})),sl=e((()=>{r(),g()})),cl=e((()=>{r(),g()})),ll=e((()=>{r(),g()})),ul=e((()=>{r(),g()})),dl=e((()=>{r(),g()})),fl=e((()=>{r(),g()})),pl=e((()=>{r(),g()})),ml=e((()=>{r(),g()})),hl=e((()=>{r(),g()})),gl=e((()=>{r(),g()})),_l=e((()=>{r(),g()})),vl=e((()=>{r(),g()})),yl=e((()=>{r(),g()})),bl=e((()=>{r(),g()})),xl=e((()=>{r(),g()})),Sl=e((()=>{r(),g()})),Cl=e((()=>{r(),g()})),wl=e((()=>{r(),g()})),Tl=e((()=>{r(),g()})),El=e((()=>{r(),g()})),Dl=e((()=>{r(),g()})),Ol=e((()=>{r(),g()})),kl=e((()=>{r(),g()})),Al=e((()=>{r(),g()})),jl=e((()=>{r(),g()})),Ml=e((()=>{r(),g()})),Nl=e((()=>{r(),g()})),Pl=e((()=>{r(),g()})),Fl=e((()=>{r(),g()})),Il=e((()=>{r(),g()})),Ll=e((()=>{r(),g()})),Rl=e((()=>{r(),g()})),zl=e((()=>{r(),g()})),Bl=e((()=>{r(),g()})),Vl=e((()=>{r(),g()})),Hl=e((()=>{r(),g()})),Ul=e((()=>{r(),g()})),Wl=e((()=>{r(),g()})),Gl=e((()=>{r(),g()})),Kl=e((()=>{r(),g()})),ql=e((()=>{r(),g()})),Jl=e((()=>{r(),g()})),Yl=e((()=>{r(),g()})),Xl=e((()=>{r(),g()})),Zl=e((()=>{r(),g()})),Ql=e((()=>{r(),g()})),$l=e((()=>{r(),g()})),eu=e((()=>{r(),g()})),tu=e((()=>{r(),g()})),nu=e((()=>{r(),g()})),ru=e((()=>{r(),g()})),iu=e((()=>{r(),g()})),au=e((()=>{r(),g()})),ou=e((()=>{r(),g()})),su=e((()=>{r(),g()})),cu=e((()=>{r(),g()})),lu=e((()=>{r(),g()})),uu=e((()=>{r(),g()})),du=e((()=>{r(),g()})),fu=e((()=>{r(),g()})),pu=e((()=>{r(),g()})),mu=e((()=>{r(),g()})),hu=e((()=>{r(),g()})),gu=e((()=>{r(),g()})),_u=e((()=>{r(),g()})),vu=e((()=>{r(),g()})),yu=e((()=>{r(),g()})),bu=e((()=>{r(),g()})),xu=e((()=>{r(),g()})),Su=e((()=>{r(),g()})),Cu=e((()=>{r(),g()})),wu=e((()=>{r(),g()})),Tu=e((()=>{r(),g()})),Eu=e((()=>{r(),g()})),Du=e((()=>{r(),g()})),Ou=e((()=>{r(),g()})),ku=e((()=>{r(),g()})),Au=e((()=>{r(),g()})),ju=e((()=>{r(),g()})),Mu=e((()=>{r(),g()})),Nu=e((()=>{r(),g()})),Pu=e((()=>{r(),g()})),Fu=e((()=>{r(),g()})),Iu=e((()=>{r(),g()})),Lu=e((()=>{r(),g()})),Ru=e((()=>{r(),g()})),zu=e((()=>{r(),g()})),Bu=e((()=>{r(),g()})),Vu=e((()=>{r(),g()})),Hu=e((()=>{r(),g()})),Uu=e((()=>{r(),g()})),Wu=e((()=>{r(),g()})),Gu=e((()=>{r(),g()})),Ku=e((()=>{r(),g()})),qu=e((()=>{r(),g()})),Ju=e((()=>{r(),g()})),Yu=e((()=>{r(),g()})),Xu=e((()=>{r(),g()})),Zu=e((()=>{r(),g()})),Qu=e((()=>{r(),g()})),$u=e((()=>{r(),g()})),ed=e((()=>{r(),g()})),td=e((()=>{r(),g()})),nd=e((()=>{r(),g()})),rd=e((()=>{r(),g()})),id=e((()=>{r(),g()})),ad=e((()=>{r(),g()})),od=e((()=>{r(),g()})),sd=e((()=>{r(),g()})),cd=e((()=>{r(),g()})),ld=e((()=>{r(),g()})),ud=e((()=>{r(),g()})),dd=e((()=>{r(),g()})),fd=e((()=>{r(),g()})),pd=e((()=>{r(),g()})),md=e((()=>{r(),g()})),hd=e((()=>{r(),g()})),gd=e((()=>{r(),g()})),_d=e((()=>{r(),g()})),vd=e((()=>{r(),g()})),yd=e((()=>{r(),g()})),bd=e((()=>{r(),g()})),xd=e((()=>{r(),g()})),Sd=e((()=>{r(),g()})),Cd=e((()=>{r(),g()})),wd=e((()=>{r(),g()})),Td=e((()=>{r(),g()})),Ed=e((()=>{r(),g()})),Dd=e((()=>{r(),g()})),Od=e((()=>{r(),g()})),kd=e((()=>{r(),g()})),Ad=e((()=>{r(),g()})),jd=e((()=>{r(),g()})),Md=e((()=>{r(),g()})),Nd=e((()=>{r(),g()})),Pd=e((()=>{r(),g()})),Fd=e((()=>{r(),g()})),Id=e((()=>{r(),g()})),Ld=e((()=>{r(),g()})),Rd=e((()=>{r(),g()})),zd=e((()=>{r(),g()})),Bd=e((()=>{r(),g()})),Vd=e((()=>{r(),g()})),Hd=e((()=>{r(),g()})),Ud=e((()=>{r(),g()})),Wd=e((()=>{r(),g()})),Gd=e((()=>{r(),g()})),Kd=e((()=>{r(),g()})),qd=e((()=>{r(),g()})),Jd=e((()=>{r(),g()})),Yd=e((()=>{r(),g()})),Xd=e((()=>{r(),g()})),Zd=e((()=>{r(),g()})),Qd=e((()=>{r(),g()})),$d=e((()=>{r(),g()})),ef=e((()=>{r(),g()})),tf=e((()=>{r(),g()})),nf=e((()=>{r(),g()})),rf=e((()=>{r(),g()})),af=e((()=>{r(),g()})),of=e((()=>{r(),g()})),sf=e((()=>{r(),g()})),cf=e((()=>{r(),g()})),lf=e((()=>{r(),g()})),uf=e((()=>{r(),g()})),df=e((()=>{r(),g()})),ff=e((()=>{r(),g()})),pf=e((()=>{r(),g()})),mf=e((()=>{r(),g()})),hf=e((()=>{r(),g()})),gf=e((()=>{r(),g()})),_f=e((()=>{r(),g()})),vf=e((()=>{r(),g()})),yf=e((()=>{r(),g()})),bf=e((()=>{r(),g()})),xf=e((()=>{r(),g()})),Sf=e((()=>{r(),g()})),Cf=e((()=>{r(),g()})),wf=e((()=>{r(),g()})),Tf=e((()=>{r(),g()})),Ef=e((()=>{r(),g()})),Df=e((()=>{r(),g()})),Of=e((()=>{r(),g()})),kf=e((()=>{r(),g()})),Af=e((()=>{r(),g()})),jf=e((()=>{r(),g()})),Mf=e((()=>{r(),g()})),Nf=e((()=>{r(),g()})),Pf=e((()=>{r(),g()})),Ff=e((()=>{r(),g()})),If=e((()=>{r(),g()})),Lf=e((()=>{r(),g()})),Rf=e((()=>{r(),g()})),zf=e((()=>{r(),g()})),Bf=e((()=>{r(),g()})),Vf=e((()=>{r(),g()})),Hf=e((()=>{r(),g()})),Uf=e((()=>{r(),g()})),Wf=e((()=>{r(),g()})),Gf=e((()=>{r(),g()})),Kf=e((()=>{r(),g()})),qf=e((()=>{r(),g()})),Jf=e((()=>{r(),g()})),Yf=e((()=>{r(),g()})),Xf=e((()=>{r(),g()})),Zf=e((()=>{r(),g()})),Qf=e((()=>{r(),g()})),$f=e((()=>{r(),g()})),ep=e((()=>{r(),g()})),tp=e((()=>{r(),g()})),np=e((()=>{r(),g()})),rp=e((()=>{r(),g()})),ip=e((()=>{r(),g()})),ap=e((()=>{r(),g()})),op=e((()=>{r(),g()})),sp=e((()=>{r(),g()})),cp=e((()=>{r(),g()})),lp=e((()=>{r(),g()})),up=e((()=>{r(),g()})),dp=e((()=>{r(),g()})),fp=e((()=>{r(),g()})),pp=e((()=>{r(),g()})),mp=e((()=>{r(),g()})),hp=e((()=>{r(),g()})),gp=e((()=>{r(),g()})),_p=e((()=>{r(),g()})),vp=e((()=>{r(),g()})),yp=e((()=>{r(),g()})),bp=e((()=>{r(),g()})),xp=e((()=>{r(),g()})),Sp=e((()=>{r(),g()})),U,Cp=e((()=>{r(),g(),v(),U=({slot:e,title:r,className:i,width:a=`24`,height:o=`24`,styles:s}={})=>t`
  <svg
    slot=${b(e)}
    class=${`list-icon ${i??``}`}
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
    style=${b(s)}
  >
    ${_(r,()=>n`<title>${r}</title>`)}
    <path
      d="M21 12H9m12-6H9m12 12H9m-4-6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0-6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
    />
  </svg>
`})),wp=e((()=>{r(),g()})),Tp=e((()=>{r(),g()})),Ep=e((()=>{r(),g()})),Dp=e((()=>{r(),g()})),Op=e((()=>{r(),g()})),kp=e((()=>{r(),g()})),Ap=e((()=>{r(),g()})),jp=e((()=>{r(),g()})),Mp=e((()=>{r(),g()})),Np=e((()=>{r(),g()})),Pp=e((()=>{r(),g()})),Fp=e((()=>{r(),g()})),Ip=e((()=>{r(),g()})),Lp=e((()=>{r(),g()})),Rp=e((()=>{r(),g()})),zp=e((()=>{r(),g()})),Bp=e((()=>{r(),g()})),Vp=e((()=>{r(),g()})),Hp=e((()=>{r(),g()})),Up=e((()=>{r(),g()})),Wp=e((()=>{r(),g()})),Gp=e((()=>{r(),g()})),Kp=e((()=>{r(),g()})),qp=e((()=>{r(),g()})),Jp=e((()=>{r(),g()})),Yp=e((()=>{r(),g()})),Xp=e((()=>{r(),g()})),Zp=e((()=>{r(),g()})),Qp=e((()=>{r(),g()})),$p=e((()=>{r(),g()})),em=e((()=>{r(),g()})),tm=e((()=>{r(),g()})),nm=e((()=>{r(),g()})),rm=e((()=>{r(),g()})),im=e((()=>{r(),g()})),am=e((()=>{r(),g()})),om=e((()=>{r(),g()})),sm=e((()=>{r(),g()})),cm=e((()=>{r(),g()})),lm=e((()=>{r(),g()})),um=e((()=>{r(),g()})),dm=e((()=>{r(),g()})),fm=e((()=>{r(),g()})),pm=e((()=>{r(),g()})),mm=e((()=>{r(),g()})),hm=e((()=>{r(),g()})),gm=e((()=>{r(),g()})),_m=e((()=>{r(),g()})),vm=e((()=>{r(),g()})),ym=e((()=>{r(),g()})),bm=e((()=>{r(),g()})),xm=e((()=>{r(),g()})),Sm=e((()=>{r(),g()})),Cm=e((()=>{r(),g()})),wm=e((()=>{r(),g()})),Tm=e((()=>{r(),g()})),Em=e((()=>{r(),g()})),Dm=e((()=>{r(),g()})),Om=e((()=>{r(),g()})),km=e((()=>{r(),g()})),Am=e((()=>{r(),g()})),jm=e((()=>{r(),g()})),Mm=e((()=>{r(),g()})),Nm=e((()=>{r(),g()})),Pm=e((()=>{r(),g()})),Fm=e((()=>{r(),g()})),Im=e((()=>{r(),g()})),Lm=e((()=>{r(),g()})),Rm=e((()=>{r(),g()})),zm=e((()=>{r(),g()})),Bm=e((()=>{r(),g()})),Vm=e((()=>{r(),g()})),Hm=e((()=>{r(),g()})),Um=e((()=>{r(),g()})),Wm=e((()=>{r(),g()})),Gm=e((()=>{r(),g()})),Km=e((()=>{r(),g()})),qm=e((()=>{r(),g()})),Jm=e((()=>{r(),g()})),Ym=e((()=>{r(),g()})),Xm=e((()=>{r(),g()})),Zm=e((()=>{r(),g()})),Qm=e((()=>{r(),g()})),$m=e((()=>{r(),g()})),eh=e((()=>{r(),g()})),th=e((()=>{r(),g()})),nh=e((()=>{r(),g()})),rh=e((()=>{r(),g()})),ih=e((()=>{r(),g()})),ah=e((()=>{r(),g()})),oh=e((()=>{r(),g()})),sh=e((()=>{r(),g()})),ch=e((()=>{r(),g()})),lh=e((()=>{r(),g()})),uh=e((()=>{r(),g()})),dh=e((()=>{r(),g()})),fh=e((()=>{r(),g()})),ph=e((()=>{r(),g()})),mh=e((()=>{r(),g()})),hh=e((()=>{r(),g()})),gh=e((()=>{r(),g()})),_h=e((()=>{r(),g()})),vh=e((()=>{r(),g()})),yh=e((()=>{r(),g()})),bh=e((()=>{r(),g()})),xh=e((()=>{r(),g()})),Sh=e((()=>{r(),g()})),Ch=e((()=>{r(),g()})),wh=e((()=>{r(),g()})),Th=e((()=>{r(),g()})),Eh=e((()=>{r(),g()})),Dh=e((()=>{r(),g()})),Oh=e((()=>{r(),g()})),kh=e((()=>{r(),g()})),Ah=e((()=>{r(),g()})),jh=e((()=>{r(),g()})),Mh=e((()=>{r(),g()})),Nh=e((()=>{r(),g()})),Ph=e((()=>{r(),g()})),Fh=e((()=>{r(),g()})),Ih=e((()=>{r(),g()})),Lh=e((()=>{r(),g()})),Rh=e((()=>{r(),g()})),zh=e((()=>{r(),g()})),Bh=e((()=>{r(),g()})),Vh=e((()=>{r(),g()})),Hh=e((()=>{r(),g()})),Uh=e((()=>{r(),g()})),Wh=e((()=>{r(),g()})),Gh=e((()=>{r(),g()})),Kh=e((()=>{r(),g()})),qh=e((()=>{r(),g()})),Jh=e((()=>{r(),g()})),Yh=e((()=>{r(),g()})),Xh=e((()=>{r(),g()})),Zh=e((()=>{r(),g()})),Qh=e((()=>{r(),g()})),$h=e((()=>{r(),g()})),eg=e((()=>{r(),g()})),tg=e((()=>{r(),g()})),ng=e((()=>{r(),g()})),rg=e((()=>{r(),g()})),ig=e((()=>{r(),g()})),ag=e((()=>{r(),g()})),og=e((()=>{r(),g()})),sg=e((()=>{r(),g()})),cg=e((()=>{r(),g()})),lg=e((()=>{r(),g()})),ug=e((()=>{r(),g()})),dg=e((()=>{r(),g()})),fg=e((()=>{r(),g()})),pg=e((()=>{r(),g()})),mg=e((()=>{r(),g()})),hg=e((()=>{r(),g()})),gg=e((()=>{r(),g()})),_g=e((()=>{r(),g()})),vg=e((()=>{r(),g()})),yg=e((()=>{r(),g()})),bg=e((()=>{r(),g()})),xg=e((()=>{r(),g()})),Sg=e((()=>{r(),g()})),Cg=e((()=>{r(),g()})),wg=e((()=>{r(),g()})),Tg=e((()=>{r(),g()})),Eg=e((()=>{r(),g()})),Dg=e((()=>{r(),g()})),Og=e((()=>{r(),g()})),kg=e((()=>{r(),g()})),Ag=e((()=>{r(),g()})),jg=e((()=>{r(),g()})),Mg=e((()=>{r(),g()})),Ng=e((()=>{r(),g()})),Pg=e((()=>{r(),g()})),Fg=e((()=>{r(),g()})),Ig=e((()=>{r(),g()})),Lg=e((()=>{r(),g()})),Rg=e((()=>{r(),g()})),zg=e((()=>{r(),g()})),Bg=e((()=>{r(),g()})),Vg=e((()=>{r(),g()})),Hg=e((()=>{r(),g()})),Ug=e((()=>{r(),g()})),Wg=e((()=>{r(),g()})),Gg=e((()=>{r(),g()})),Kg=e((()=>{r(),g()})),qg=e((()=>{r(),g()})),Jg=e((()=>{r(),g()})),Yg=e((()=>{r(),g()})),Xg=e((()=>{r(),g()})),Zg=e((()=>{r(),g()})),Qg=e((()=>{r(),g()})),$g=e((()=>{r(),g()})),e_=e((()=>{r(),g()})),t_=e((()=>{r(),g()})),n_=e((()=>{r(),g()})),r_=e((()=>{r(),g()})),i_=e((()=>{r(),g()})),a_=e((()=>{r(),g()})),o_=e((()=>{r(),g()})),s_=e((()=>{r(),g()})),c_=e((()=>{r(),g()})),l_=e((()=>{r(),g()})),u_=e((()=>{r(),g()})),d_=e((()=>{r(),g()})),f_=e((()=>{r(),g()})),p_=e((()=>{r(),g()})),m_=e((()=>{r(),g()})),h_=e((()=>{r(),g()})),g_=e((()=>{r(),g()})),__=e((()=>{r(),g()})),v_=e((()=>{r(),g()})),y_=e((()=>{r(),g()})),b_=e((()=>{r(),g()})),x_=e((()=>{r(),g()})),S_=e((()=>{r(),g()})),C_=e((()=>{r(),g()})),w_=e((()=>{r(),g()})),T_=e((()=>{r(),g()})),E_=e((()=>{r(),g()})),D_=e((()=>{r(),g()})),O_=e((()=>{r(),g()})),k_=e((()=>{r(),g()})),A_=e((()=>{r(),g()})),j_=e((()=>{r(),g()})),M_=e((()=>{r(),g()})),N_=e((()=>{r(),g()})),P_=e((()=>{r(),g()})),F_=e((()=>{r(),g()})),I_=e((()=>{r(),g()})),L_=e((()=>{r(),g()})),R_=e((()=>{r(),g()})),z_=e((()=>{r(),g()})),B_=e((()=>{r(),g()})),V_=e((()=>{r(),g()})),H_=e((()=>{r(),g()})),U_=e((()=>{r(),g()})),W_=e((()=>{r(),g()})),G_=e((()=>{r(),g()})),K_=e((()=>{r(),g()})),q_=e((()=>{r(),g()})),J_=e((()=>{r(),g()})),Y_=e((()=>{r(),g()})),X_=e((()=>{r(),g()})),Z_=e((()=>{r(),g()})),Q_=e((()=>{r(),g()})),$_=e((()=>{r(),g()})),ev=e((()=>{r(),g()})),tv=e((()=>{r(),g()})),nv=e((()=>{r(),g()})),rv=e((()=>{r(),g()})),iv=e((()=>{r(),g()})),av=e((()=>{r(),g()})),ov=e((()=>{r(),g()})),sv=e((()=>{r(),g()})),cv=e((()=>{r(),g()})),lv=e((()=>{r(),g()})),uv=e((()=>{r(),g()})),dv=e((()=>{r(),g()})),fv=e((()=>{r(),g()})),pv=e((()=>{r(),g()})),mv=e((()=>{r(),g()})),hv=e((()=>{r(),g()})),gv=e((()=>{r(),g()})),_v=e((()=>{r(),g()})),vv=e((()=>{r(),g()})),yv=e((()=>{r(),g()})),bv=e((()=>{r(),g()})),xv=e((()=>{r(),g()})),Sv=e((()=>{r(),g()})),Cv=e((()=>{r(),g()})),wv=e((()=>{r(),g()})),Tv=e((()=>{r(),g()})),Ev=e((()=>{r(),g()})),Dv=e((()=>{r(),g()})),Ov=e((()=>{r(),g()})),kv=e((()=>{r(),g()})),Av=e((()=>{r(),g()})),jv=e((()=>{r(),g()})),Mv=e((()=>{r(),g()})),Nv=e((()=>{r(),g()})),Pv=e((()=>{r(),g()})),Fv=e((()=>{r(),g()})),Iv=e((()=>{r(),g()})),Lv=e((()=>{r(),g()})),Rv=e((()=>{r(),g()})),zv=e((()=>{r(),g()})),Bv=e((()=>{r(),g()})),Vv=e((()=>{r(),g()})),Hv=e((()=>{r(),g()})),Uv=e((()=>{r(),g()})),Wv=e((()=>{r(),g()})),Gv=e((()=>{r(),g()})),Kv=e((()=>{r(),g()})),qv=e((()=>{r(),g()})),Jv=e((()=>{r(),g()})),Yv=e((()=>{r(),g()})),Xv=e((()=>{r(),g()})),Zv=e((()=>{r(),g()})),Qv=e((()=>{r(),g()})),$v=e((()=>{r(),g()})),ey=e((()=>{r(),g()})),ty=e((()=>{r(),g()})),ny=e((()=>{r(),g()})),ry=e((()=>{r(),g()})),iy=e((()=>{r(),g()})),ay=e((()=>{r(),g()})),oy=e((()=>{r(),g()})),W,sy=e((()=>{r(),g(),v(),W=({slot:e,title:r,className:i,width:a=`24`,height:o=`24`,styles:s}={})=>t`
  <svg
    slot=${b(e)}
    class=${`square-icon ${i??``}`}
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
    style=${b(s)}
  >
    ${_(r,()=>n`<title>${r}</title>`)}
    <path
      d="M3 7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 3 6.12 3 7.8 3h8.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V7.8Z"
    />
  </svg>
`})),cy=e((()=>{r(),g()})),ly=e((()=>{r(),g()})),uy=e((()=>{r(),g()})),dy=e((()=>{r(),g()})),fy=e((()=>{r(),g()})),py=e((()=>{r(),g()})),my=e((()=>{r(),g()})),hy=e((()=>{r(),g()})),gy=e((()=>{r(),g()})),_y=e((()=>{r(),g()})),vy=e((()=>{r(),g()})),yy=e((()=>{r(),g()})),by=e((()=>{r(),g()})),xy=e((()=>{r(),g()})),Sy=e((()=>{r(),g()})),Cy=e((()=>{r(),g()})),wy=e((()=>{r(),g()})),Ty=e((()=>{r(),g()})),Ey=e((()=>{r(),g()})),Dy=e((()=>{r(),g()})),Oy=e((()=>{r(),g()})),ky=e((()=>{r(),g()})),Ay=e((()=>{r(),g()})),jy=e((()=>{r(),g()})),My=e((()=>{r(),g()})),Ny=e((()=>{r(),g()})),Py=e((()=>{r(),g()})),Fy=e((()=>{r(),g()})),Iy=e((()=>{r(),g()})),Ly=e((()=>{r(),g()})),Ry=e((()=>{r(),g()})),zy=e((()=>{r(),g()})),By=e((()=>{r(),g()})),Vy=e((()=>{r(),g()})),Hy=e((()=>{r(),g()})),Uy=e((()=>{r(),g()})),Wy=e((()=>{r(),g()})),Gy=e((()=>{r(),g()})),Ky=e((()=>{r(),g()})),qy=e((()=>{r(),g()})),Jy=e((()=>{r(),g()})),Yy=e((()=>{r(),g()})),Xy=e((()=>{r(),g()})),Zy=e((()=>{r(),g()})),Qy=e((()=>{r(),g()})),$y=e((()=>{r(),g()})),eb=e((()=>{r(),g()})),tb=e((()=>{r(),g()})),nb=e((()=>{r(),g()})),rb=e((()=>{r(),g()})),ib=e((()=>{r(),g()})),ab=e((()=>{r(),g()})),ob=e((()=>{r(),g()})),sb=e((()=>{r(),g()})),cb=e((()=>{r(),g()})),lb=e((()=>{r(),g()})),ub=e((()=>{r(),g()})),db=e((()=>{r(),g()})),fb=e((()=>{r(),g()})),pb=e((()=>{r(),g()})),mb=e((()=>{r(),g()})),hb=e((()=>{r(),g()})),gb=e((()=>{r(),g()})),_b=e((()=>{r(),g()})),vb=e((()=>{r(),g()})),yb=e((()=>{r(),g()})),bb=e((()=>{r(),g()})),xb=e((()=>{r(),g()})),Sb=e((()=>{r(),g()})),Cb=e((()=>{r(),g()})),wb=e((()=>{r(),g()})),Tb=e((()=>{r(),g()})),Eb=e((()=>{r(),g()})),Db=e((()=>{r(),g()})),Ob=e((()=>{r(),g()})),kb=e((()=>{r(),g()})),Ab=e((()=>{r(),g()})),jb=e((()=>{r(),g()})),Mb=e((()=>{r(),g()})),Nb=e((()=>{r(),g()})),Pb=e((()=>{r(),g()})),Fb=e((()=>{r(),g()})),Ib=e((()=>{r(),g()})),Lb=e((()=>{r(),g()})),Rb=e((()=>{r(),g()})),zb=e((()=>{r(),g()})),Bb=e((()=>{r(),g()})),Vb=e((()=>{r(),g()})),Hb=e((()=>{r(),g()})),Ub=e((()=>{r(),g()})),Wb=e((()=>{r(),g()})),Gb=e((()=>{r(),g()})),Kb=e((()=>{r(),g()})),qb=e((()=>{r(),g()})),Jb=e((()=>{r(),g()})),Yb=e((()=>{r(),g()})),Xb=e((()=>{r(),g()})),Zb=e((()=>{r(),g()})),Qb=e((()=>{r(),g()})),$b=e((()=>{r(),g()})),ex=e((()=>{r(),g()})),tx=e((()=>{r(),g()})),nx=e((()=>{r(),g()})),rx=e((()=>{r(),g()})),ix=e((()=>{r(),g()})),ax=e((()=>{r(),g()})),ox=e((()=>{r(),g()})),sx=e((()=>{r(),g()})),cx=e((()=>{r(),g()})),lx=e((()=>{r(),g()})),ux=e((()=>{r(),g()})),dx=e((()=>{r(),g()})),fx=e((()=>{r(),g()})),px=e((()=>{r(),g()})),mx=e((()=>{r(),g()})),hx=e((()=>{r(),g()})),gx=e((()=>{r(),g()})),_x=e((()=>{r(),g()})),vx=e((()=>{r(),g()})),yx=e((()=>{r(),g()})),bx=e((()=>{r(),g()})),xx=e((()=>{r(),g()})),Sx=e((()=>{r(),g()})),Cx=e((()=>{r(),g()})),wx=e((()=>{r(),g()})),Tx=e((()=>{r(),g()})),Ex=e((()=>{r(),g()})),Dx=e((()=>{r(),g()})),Ox=e((()=>{r(),g()})),kx=e((()=>{r(),g()})),Ax=e((()=>{r(),g()})),jx=e((()=>{r(),g()})),Mx=e((()=>{r(),g()})),Nx=e((()=>{r(),g()})),Px=e((()=>{r(),g()})),Fx=e((()=>{r(),g()})),Ix=e((()=>{r(),g()})),Lx=e((()=>{r(),g()})),Rx=e((()=>{r(),g()})),zx=e((()=>{r(),g()})),Bx=e((()=>{r(),g()})),Vx=e((()=>{r(),g()})),Hx=e((()=>{r(),g()})),Ux=e((()=>{r(),g()})),Wx=e((()=>{r(),g()})),Gx=e((()=>{r(),g()})),Kx=e((()=>{r(),g()})),qx=e((()=>{r(),g()})),Jx=e((()=>{r(),g()})),Yx=e((()=>{r(),g()})),Xx=e((()=>{r(),g()})),Zx=e((()=>{r(),g()})),Qx=e((()=>{r(),g()})),$x=e((()=>{r(),g()})),eS=e((()=>{r(),g()})),tS=e((()=>{r(),g()})),nS=e((()=>{r(),g()})),rS=e((()=>{r(),g()})),iS=e((()=>{r(),g()})),aS=e((()=>{r(),g()})),oS=e((()=>{r(),g()})),sS=e((()=>{r(),g()})),cS=e((()=>{r(),g()})),lS=e((()=>{r(),g()})),uS=e((()=>{r(),g()})),dS=e((()=>{r(),g()})),fS=e((()=>{r(),g()})),pS=e((()=>{r(),g()})),mS=e((()=>{r(),g()})),hS=e((()=>{r(),g()})),gS=e((()=>{r(),g()})),_S=e((()=>{r(),g()})),vS=e((()=>{r(),g()})),yS=e((()=>{r(),g()})),bS=e((()=>{Me(),Ne(),Pe(),Fe(),Ie(),Le(),Re(),ze(),Be(),Ve(),He(),Ue(),We(),Ge(),Ke(),qe(),Je(),Ye(),Xe(),Ze(),Qe(),$e(),et(),tt(),nt(),rt(),it(),at(),ot(),st(),ct(),lt(),ut(),dt(),ft(),pt(),mt(),ht(),gt(),_t(),vt(),yt(),bt(),xt(),St(),Ct(),wt(),Tt(),Et(),Dt(),Ot(),kt(),At(),jt(),Mt(),Nt(),Pt(),Ft(),It(),Lt(),Rt(),zt(),Bt(),Vt(),Ht(),Ut(),Wt(),Gt(),Kt(),qt(),Jt(),Yt(),Xt(),Zt(),Qt(),$t(),en(),tn(),nn(),rn(),an(),on(),sn(),cn(),ln(),un(),dn(),fn(),pn(),mn(),hn(),gn(),_n(),vn(),yn(),bn(),xn(),Sn(),Cn(),wn(),Tn(),En(),Dn(),On(),kn(),An(),jn(),Mn(),Nn(),Pn(),Fn(),In(),Ln(),Rn(),zn(),Bn(),Vn(),Hn(),Un(),Wn(),Gn(),Kn(),qn(),Jn(),Yn(),Xn(),Zn(),Qn(),$n(),er(),tr(),nr(),rr(),ir(),ar(),or(),sr(),cr(),lr(),ur(),dr(),fr(),pr(),mr(),hr(),gr(),_r(),vr(),yr(),br(),xr(),Sr(),Cr(),wr(),Tr(),Er(),Dr(),Or(),kr(),Ar(),jr(),Mr(),Nr(),Pr(),Fr(),Ir(),Lr(),Rr(),zr(),Br(),Vr(),Hr(),Ur(),Wr(),Gr(),Kr(),qr(),Jr(),Yr(),Xr(),Zr(),Qr(),$r(),ei(),ti(),ni(),ri(),ii(),ai(),oi(),si(),ci(),li(),ui(),di(),fi(),pi(),mi(),hi(),gi(),_i(),vi(),yi(),bi(),xi(),Si(),Ci(),wi(),Ti(),Ei(),Di(),Oi(),ki(),Ai(),ji(),Mi(),Ni(),Pi(),Fi(),Ii(),Li(),Ri(),zi(),Bi(),Vi(),Hi(),Ui(),Wi(),Gi(),Ki(),qi(),Ji(),Yi(),Xi(),Zi(),Qi(),$i(),ea(),ta(),na(),ra(),ia(),aa(),oa(),sa(),ca(),la(),ua(),da(),fa(),pa(),ma(),ha(),ga(),_a(),va(),ya(),ba(),xa(),Sa(),Ca(),wa(),Ta(),Ea(),Da(),Oa(),ka(),Aa(),ja(),Ma(),Na(),Pa(),Fa(),Ia(),La(),Ra(),za(),Ba(),Va(),Ha(),Ua(),Wa(),Ga(),Ka(),qa(),Ja(),Ya(),Xa(),Za(),Qa(),$a(),eo(),to(),no(),ro(),io(),ao(),oo(),so(),co(),lo(),uo(),fo(),po(),mo(),ho(),go(),_o(),vo(),yo(),bo(),xo(),So(),Co(),wo(),To(),Eo(),Do(),Oo(),ko(),Ao(),jo(),Mo(),No(),Po(),Fo(),Io(),Lo(),Ro(),zo(),Bo(),Vo(),Ho(),Uo(),Wo(),Go(),Ko(),qo(),Jo(),Yo(),Xo(),Zo(),Qo(),$o(),es(),ts(),ns(),rs(),is(),as(),os(),ss(),cs(),ls(),us(),ds(),fs(),ps(),ms(),hs(),gs(),_s(),vs(),ys(),bs(),xs(),Ss(),Cs(),ws(),Ts(),Es(),Ds(),Os(),ks(),As(),js(),Ms(),Ns(),Ps(),Fs(),Is(),Ls(),Rs(),zs(),Bs(),Vs(),Hs(),Us(),Ws(),Gs(),Ks(),qs(),Js(),Ys(),Xs(),Zs(),Qs(),$s(),ec(),tc(),nc(),rc(),ic(),ac(),oc(),sc(),cc(),lc(),uc(),dc(),fc(),pc(),mc(),hc(),gc(),_c(),vc(),yc(),bc(),xc(),Sc(),Cc(),wc(),Tc(),Ec(),Dc(),Oc(),kc(),Ac(),jc(),Mc(),Nc(),Pc(),Fc(),Ic(),Lc(),Rc(),zc(),Bc(),Vc(),Hc(),Uc(),Wc(),Gc(),Kc(),qc(),Jc(),Yc(),Xc(),Zc(),Qc(),$c(),el(),tl(),nl(),rl(),il(),al(),ol(),sl(),cl(),ll(),ul(),dl(),fl(),pl(),ml(),hl(),gl(),_l(),vl(),yl(),bl(),xl(),Sl(),Cl(),wl(),Tl(),El(),Dl(),Ol(),kl(),Al(),jl(),Ml(),Nl(),Pl(),Fl(),Il(),Ll(),Rl(),zl(),Bl(),Vl(),Hl(),Ul(),Wl(),Gl(),Kl(),ql(),Jl(),Yl(),Xl(),Zl(),Ql(),$l(),eu(),tu(),nu(),ru(),iu(),au(),ou(),su(),cu(),lu(),uu(),du(),fu(),pu(),mu(),hu(),gu(),_u(),vu(),yu(),bu(),xu(),Su(),Cu(),wu(),Tu(),Eu(),Du(),Ou(),ku(),Au(),ju(),Mu(),Nu(),Pu(),Fu(),Iu(),Lu(),Ru(),zu(),Bu(),Vu(),Hu(),Uu(),Wu(),Gu(),Ku(),qu(),Ju(),Yu(),Xu(),Zu(),Qu(),$u(),ed(),td(),nd(),rd(),id(),ad(),od(),sd(),cd(),ld(),ud(),dd(),fd(),pd(),md(),hd(),gd(),_d(),vd(),yd(),bd(),xd(),Sd(),Cd(),wd(),Td(),Ed(),Dd(),Od(),kd(),Ad(),jd(),Md(),Nd(),Pd(),Fd(),Id(),Ld(),Rd(),zd(),Bd(),Vd(),Hd(),Ud(),Wd(),Gd(),Kd(),qd(),Jd(),Yd(),Xd(),Zd(),Qd(),$d(),ef(),tf(),nf(),rf(),af(),of(),sf(),cf(),lf(),uf(),df(),ff(),pf(),mf(),hf(),gf(),_f(),vf(),yf(),bf(),xf(),Sf(),Cf(),wf(),Tf(),Ef(),Df(),Of(),kf(),Af(),jf(),Mf(),Nf(),Pf(),Ff(),If(),Lf(),Rf(),zf(),Bf(),Vf(),Hf(),Uf(),Wf(),Gf(),Kf(),qf(),Jf(),Yf(),Xf(),Zf(),Qf(),$f(),ep(),tp(),np(),rp(),ip(),ap(),op(),sp(),cp(),lp(),up(),dp(),fp(),pp(),mp(),hp(),gp(),_p(),vp(),yp(),bp(),xp(),Sp(),Cp(),wp(),Tp(),Ep(),Dp(),Op(),kp(),Ap(),jp(),Mp(),Np(),Pp(),Fp(),Ip(),Lp(),Rp(),zp(),Bp(),Vp(),Hp(),Up(),Wp(),Gp(),Kp(),qp(),Jp(),Yp(),Xp(),Zp(),Qp(),$p(),em(),tm(),nm(),rm(),im(),am(),om(),sm(),cm(),lm(),um(),dm(),fm(),pm(),mm(),hm(),gm(),_m(),vm(),ym(),bm(),xm(),Sm(),Cm(),wm(),Tm(),Em(),Dm(),Om(),km(),Am(),jm(),Mm(),Nm(),Pm(),Fm(),Im(),Lm(),Rm(),zm(),Bm(),Vm(),Hm(),Um(),Wm(),Gm(),Km(),qm(),Jm(),Ym(),Xm(),Zm(),Qm(),$m(),eh(),th(),nh(),rh(),ih(),ah(),oh(),sh(),ch(),lh(),uh(),dh(),fh(),ph(),mh(),hh(),gh(),_h(),vh(),yh(),bh(),xh(),Sh(),Ch(),wh(),Th(),Eh(),Dh(),Oh(),kh(),Ah(),jh(),Mh(),Nh(),Ph(),Fh(),Ih(),Lh(),Rh(),zh(),Bh(),Vh(),Hh(),Uh(),Wh(),Gh(),Kh(),qh(),Jh(),Yh(),Xh(),Zh(),Qh(),$h(),eg(),tg(),ng(),rg(),ig(),ag(),og(),sg(),cg(),lg(),ug(),dg(),fg(),pg(),mg(),hg(),gg(),_g(),vg(),yg(),bg(),xg(),Sg(),Cg(),wg(),Tg(),Eg(),Dg(),Og(),kg(),Ag(),jg(),Mg(),Ng(),Pg(),Fg(),Ig(),Lg(),Rg(),zg(),Bg(),Vg(),Hg(),Ug(),Wg(),Gg(),Kg(),qg(),Jg(),Yg(),Xg(),Zg(),Qg(),$g(),e_(),t_(),n_(),r_(),i_(),a_(),o_(),s_(),c_(),l_(),u_(),d_(),f_(),p_(),m_(),h_(),g_(),__(),v_(),y_(),b_(),x_(),S_(),C_(),w_(),T_(),E_(),D_(),O_(),k_(),A_(),j_(),M_(),N_(),P_(),F_(),I_(),L_(),R_(),z_(),B_(),V_(),H_(),U_(),W_(),G_(),K_(),q_(),J_(),Y_(),X_(),Z_(),Q_(),$_(),ev(),tv(),nv(),rv(),iv(),av(),ov(),sv(),cv(),lv(),uv(),dv(),fv(),pv(),mv(),hv(),gv(),_v(),vv(),yv(),bv(),xv(),Sv(),Cv(),wv(),Tv(),Ev(),Dv(),Ov(),kv(),Av(),jv(),Mv(),Nv(),Pv(),Fv(),Iv(),Lv(),Rv(),zv(),Bv(),Vv(),Hv(),Uv(),Wv(),Gv(),Kv(),qv(),Jv(),Yv(),Xv(),Zv(),Qv(),$v(),ey(),ty(),ny(),ry(),iy(),ay(),oy(),sy(),cy(),ly(),uy(),dy(),fy(),py(),my(),hy(),gy(),_y(),vy(),yy(),by(),xy(),Sy(),Cy(),wy(),Ty(),Ey(),Dy(),Oy(),ky(),Ay(),jy(),My(),Ny(),Py(),Fy(),Iy(),Ly(),Ry(),zy(),By(),Vy(),Hy(),Uy(),Wy(),Gy(),Ky(),qy(),Jy(),Yy(),Xy(),Zy(),Qy(),$y(),eb(),tb(),nb(),rb(),ib(),ab(),ob(),sb(),cb(),lb(),ub(),db(),fb(),pb(),mb(),hb(),gb(),_b(),vb(),yb(),bb(),xb(),Sb(),Cb(),wb(),Tb(),Eb(),Db(),Ob(),kb(),Ab(),jb(),Mb(),Nb(),Pb(),Fb(),Ib(),Lb(),Rb(),zb(),Bb(),Vb(),Hb(),Ub(),Wb(),Gb(),Kb(),qb(),Jb(),Yb(),Xb(),Zb(),Qb(),$b(),ex(),tx(),nx(),rx(),ix(),ax(),ox(),sx(),cx(),lx(),ux(),dx(),fx(),px(),mx(),hx(),gx(),_x(),vx(),yx(),bx(),xx(),Sx(),Cx(),wx(),Tx(),Ex(),Dx(),Ox(),kx(),Ax(),jx(),Mx(),Nx(),Px(),Fx(),Ix(),Lx(),Rx(),zx(),Bx(),Vx(),Hx(),Ux(),Wx(),Gx(),Kx(),qx(),Jx(),Yx(),Xx(),Zx(),Qx(),$x(),eS(),tS(),nS(),rS(),iS(),aS(),oS(),sS(),cS(),lS(),uS(),dS(),fS(),pS(),mS(),hS(),gS(),_S(),vS(),yS()})),G,K,q,J,xS=e((()=>{bS(),G={width:`18`,height:`18`},K=U(G),q=H(G),J=W(G)})),Y,SS=e((()=>{se(),m(),fe(),xS(),Y=({items:e,hashParam:t,mobile:n,fallback:r,onActivate:i})=>{let a=ce(f(()=>[{name:`overview`,title:y(`List`),disabled:!1,content:K},{name:`split`,disabled:n||!(e.length>0),title:y(`Split`),content:q},{name:`queue`,disabled:!(e.length>0),title:y(`Queue`),content:J}].map(e=>e.name===r?{...e,fallback:!0}:e),[e.length,n,r]),{hashParam:t,onActivate:i}),o=f(()=>a,Object.values(a));return{activeTab:o.active?.name,tabnav:o}}})),X,Z,CS,wS,Q,$,TS;e((()=>{ae(),m(),r(),ge(),me(),Oe(),je(),SS(),X={title:`Components/Queue`,component:`cosmoz-queue`},Z=[{id:`1`,name:`Task Alpha`,description:`Complete the project setup`,status:`active`},{id:`2`,name:`Task Beta`,description:`Review code changes`,status:`pending`},{id:`3`,name:`Task Gamma`,description:`Write documentation`,status:`active`},{id:`4`,name:`Task Delta`,description:`Run tests`,status:`completed`},{id:`5`,name:`Task Epsilon`,description:`Deploy to staging`,status:`pending`}],CS=()=>{let{items:e,setItems:n,totalAvailable:r,setTotalAvailable:i}=V();e.length===0&&(n(Z),i(Z.length));let{activeTab:a,tabnav:o}=Y({items:e.length>0?e:Z,fallback:`overview`}),s=De(e.length>0?e:Z,{id:e=>e.id,hashParam:void 0}),c=e=>{s.setItem(e),a===`overview`&&o.activate(`queue`)};return t`
        <style>
            ${h}
        </style>
        <div style="height: 100%; display: flex; flex-direction: column;">
            <!-- Header with tabs -->
            <div class="tabn">
                <div class="tabn-heading">Demo Queue</div>
                ${o.tabs.map(e=>t`
                        <button
                            class="tabn-tab"
                            ?active=${o.active?.name===e.name}
                            ?disabled=${e.disabled}
                            @click=${()=>!e.disabled&&o.activate(e.name)}
                        >
                            ${e.title}
                        </button>
                    `)}
                ${de({index:s.index,items:e.length>0?e:Z,totalAvailable:r??Z.length,nav:s})}
            </div>

            <!-- Content area -->
            <cosmoz-resizable-view data-active=${a} persist="demo-queue">
                <!-- List view -->
                <div id="list" slot="previous" style="padding: 16px;">
                    <h3 style="margin-top: 0;">Items</h3>
                    ${(e.length>0?e:Z).map(e=>t`
                            <div
                                style="
                                    padding: 12px;
                                    margin-bottom: 8px;
                                    background: ${s.item?.id===e.id?`#e3f2fd`:`#f5f5f5`};
                                    border-radius: 4px;
                                    cursor: pointer;
                                    border-left: 3px solid ${e.status===`active`?`#4caf50`:e.status===`completed`?`#2196f3`:`#ff9800`};
                                "
                                @click=${()=>c(e)}
                            >
                                <strong>${e.name}</strong>
                                <div style="font-size: 0.9em; color: #666;">
                                    ${e.description}
                                </div>
                                <span
                                    style="
                                    display: inline-block;
                                    margin-top: 4px;
                                    padding: 2px 8px;
                                    border-radius: 12px;
                                    font-size: 0.75em;
                                    background: ${e.status===`active`?`#e8f5e9`:e.status===`completed`?`#e3f2fd`:`#fff3e0`};
                                    color: ${e.status===`active`?`#388e3c`:e.status===`completed`?`#1976d2`:`#f57c00`};
                                "
                                    >${e.status}</span
                                >
                            </div>
                        `)}
                </div>

                <!-- Detail view -->
                <div id="queue" slot="next" style="padding: 16px;">
                    ${s.item?t`
                                <div
                                    style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;"
                                >
                                    <h2 style="margin: 0;">${s.item.name}</h2>
                                    <div>
                                        <button
                                            style="padding: 8px 16px; margin-right: 8px; cursor: pointer;"
                                            ?disabled=${!s.prev}
                                            @click=${s.prev}
                                        >
                                            ← Previous
                                        </button>
                                        <button
                                            style="padding: 8px 16px; cursor: pointer;"
                                            ?disabled=${!s.next}
                                            @click=${s.next}
                                        >
                                            Next →
                                        </button>
                                    </div>
                                </div>
                                <div
                                    style="background: #f5f5f5; padding: 16px; border-radius: 8px;"
                                >
                                    <p><strong>ID:</strong> ${s.item.id}</p>
                                    <p><strong>Description:</strong> ${s.item.description}</p>
                                    <p><strong>Status:</strong> ${s.item.status}</p>
                                </div>
                            `:t`
                                <div style="text-align: center; padding: 40px; color: #666;">
                                    <p>Select an item from the list to view details</p>
                                </div>
                            `}
                </div>
            </cosmoz-resizable-view>
        </div>
    `},wS=p(CS,{observedAttributes:[],useShadowDOM:!0,styleSheets:[h]}),customElements.get(`cosmoz-queue-demo`)||customElements.define(`cosmoz-queue-demo`,wS),Q=()=>t`
    <div
        style="height: 600px; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;"
    >
        <cosmoz-queue-demo></cosmoz-queue-demo>
    </div>
`,$=()=>t`
    <div style="padding: 20px; max-width: 800px; font-family: sans-serif;">
        <h1>Cosmoz Queue</h1>
        <p>
            A reusable queue component for master-detail views with list, split, and
            queue modes.
        </p>

        <h2>Features</h2>
        <ul>
            <li>
                <strong>List Mode (Overview)</strong>: Traditional list view showing all
                items
            </li>
            <li>
                <strong>Split Mode</strong>: Side-by-side list and detail view with
                resizable panels
            </li>
            <li>
                <strong>Queue Mode</strong>: Full-screen detail view with prev/next
                navigation
            </li>
        </ul>

        <h2>Available Hooks</h2>
        <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
            <thead>
                <tr style="background: #f5f5f5;">
                    <th
                        style="padding: 8px; text-align: left; border: 1px solid #e0e0e0;"
                    >
                        Hook
                    </th>
                    <th
                        style="padding: 8px; text-align: left; border: 1px solid #e0e0e0;"
                    >
                        Description
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 8px; border: 1px solid #e0e0e0;">
                        <code>useQueue</code>
                    </td>
                    <td style="padding: 8px; border: 1px solid #e0e0e0;">
                        Main hook combining all queue functionality
                    </td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #e0e0e0;">
                        <code>useListState</code>
                    </td>
                    <td style="padding: 8px; border: 1px solid #e0e0e0;">
                        Manages items, selection, and total count
                    </td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #e0e0e0;">
                        <code>useQueueTabs</code>
                    </td>
                    <td style="padding: 8px; border: 1px solid #e0e0e0;">
                        Tab state management (list/split/queue modes)
                    </td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #e0e0e0;">
                        <code>useDataNav</code>
                    </td>
                    <td style="padding: 8px; border: 1px solid #e0e0e0;">
                        Prev/next navigation through items
                    </td>
                </tr>
            </tbody>
        </table>

        <h2>Basic Usage</h2>
        <pre
            style="background: #f5f5f5; padding: 16px; border-radius: 4px; overflow-x: auto;"
        ><code>import { useQueue } from '@neovici/cosmoz-queue';

const MyQueueComponent = () => {
  const queueProps = useQueue({
    id: (item) => item.id,
    fallback: 'overview',
  });

  return html\`...\`;
};</code></pre>
    </div>
`,Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => html\`
    <div
        style="height: 600px; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;"
    >
        <cosmoz-queue-demo></cosmoz-queue-demo>
    </div>
\``,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => html\`
    <div style="padding: 20px; max-width: 800px; font-family: sans-serif;">
        <h1>Cosmoz Queue</h1>
        <p>
            A reusable queue component for master-detail views with list, split, and
            queue modes.
        </p>

        <h2>Features</h2>
        <ul>
            <li>
                <strong>List Mode (Overview)</strong>: Traditional list view showing all
                items
            </li>
            <li>
                <strong>Split Mode</strong>: Side-by-side list and detail view with
                resizable panels
            </li>
            <li>
                <strong>Queue Mode</strong>: Full-screen detail view with prev/next
                navigation
            </li>
        </ul>

        <h2>Available Hooks</h2>
        <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
            <thead>
                <tr style="background: #f5f5f5;">
                    <th
                        style="padding: 8px; text-align: left; border: 1px solid #e0e0e0;"
                    >
                        Hook
                    </th>
                    <th
                        style="padding: 8px; text-align: left; border: 1px solid #e0e0e0;"
                    >
                        Description
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 8px; border: 1px solid #e0e0e0;">
                        <code>useQueue</code>
                    </td>
                    <td style="padding: 8px; border: 1px solid #e0e0e0;">
                        Main hook combining all queue functionality
                    </td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #e0e0e0;">
                        <code>useListState</code>
                    </td>
                    <td style="padding: 8px; border: 1px solid #e0e0e0;">
                        Manages items, selection, and total count
                    </td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #e0e0e0;">
                        <code>useQueueTabs</code>
                    </td>
                    <td style="padding: 8px; border: 1px solid #e0e0e0;">
                        Tab state management (list/split/queue modes)
                    </td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #e0e0e0;">
                        <code>useDataNav</code>
                    </td>
                    <td style="padding: 8px; border: 1px solid #e0e0e0;">
                        Prev/next navigation through items
                    </td>
                </tr>
            </tbody>
        </table>

        <h2>Basic Usage</h2>
        <pre
            style="background: #f5f5f5; padding: 16px; border-radius: 4px; overflow-x: auto;"
        ><code>import { useQueue } from '@neovici/cosmoz-queue';

const MyQueueComponent = () => {
  const queueProps = useQueue({
    id: (item) => item.id,
    fallback: 'overview',
  });

  return html\\\`...\\\`;
};</code></pre>
    </div>
\``,...$.parameters?.docs?.source}}},TS=[`Demo`,`Documentation`]}))();export{Q as Demo,$ as Documentation,TS as __namedExportsOrder,X as default};