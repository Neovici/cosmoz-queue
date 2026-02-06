import{r as it,E as re,b as D,A as U,M as nt,u as K,v as Y,h as xe,p as rt}from"./iframe-Bd9fbOqB.js";import{c as Le,b as Ce,d as Se,a as ot,e as at}from"./lit-haunted-Dp_2alsg.js";const Pe={ATTRIBUTE:1,CHILD:2},fe=n=>(...e)=>({_$litDirective$:n,values:e});let he=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};const Q=(n,e)=>{const t=n._$AN;if(t===void 0)return!1;for(const i of t)i._$AO?.(e,!1),Q(i,e);return!0},oe=n=>{let e,t;do{if((e=n._$AM)===void 0)break;t=e._$AN,t.delete(n),n=e}while(t?.size===0)},Ye=n=>{for(let e;e=n._$AM;n=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(n))break;t.add(n),ct(e)}};function lt(n){this._$AN!==void 0?(oe(this),this._$AM=n,Ye(this)):this._$AM=n}function ut(n,e=!1,t=0){const i=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(i))for(let r=t;r<i.length;r++)Q(i[r],!1),oe(i[r]);else i!=null&&(Q(i,!1),oe(i));else Q(this,n)}const ct=n=>{n.type==Pe.CHILD&&(n._$AP??=ut,n._$AQ??=lt)};class ft extends he{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),Ye(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(Q(this,e),oe(this))}setValue(e){if(it(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}const ht={},qe=fe(class extends he{constructor(){super(...arguments),this.ot=ht}render(n,e){return e()}update(n,[e,t]){if(Array.isArray(e)){if(Array.isArray(this.ot)&&this.ot.length===e.length&&e.every((i,s)=>i===this.ot[s]))return re}else if(this.ot===e)return re;return this.ot=Array.isArray(e)?Array.from(e):e,this.render(e,t)}}),g=n=>typeof n=="string",q=()=>{let n,e;const t=new Promise((i,s)=>{n=i,e=s});return t.resolve=n,t.reject=e,t},Ee=n=>n==null?"":""+n,dt=(n,e,t)=>{n.forEach(i=>{e[i]&&(t[i]=e[i])})},pt=/###/g,je=n=>n&&n.indexOf("###")>-1?n.replace(pt,"."):n,Fe=n=>!n||g(n),X=(n,e,t)=>{const i=g(e)?e.split("."):e;let s=0;for(;s<i.length-1;){if(Fe(n))return{};const r=je(i[s]);!n[r]&&t&&(n[r]=new t),Object.prototype.hasOwnProperty.call(n,r)?n=n[r]:n={},++s}return Fe(n)?{}:{obj:n,k:je(i[s])}},Te=(n,e,t)=>{const{obj:i,k:s}=X(n,e,Object);if(i!==void 0||e.length===1){i[s]=t;return}let r=e[e.length-1],o=e.slice(0,e.length-1),a=X(n,o,Object);for(;a.obj===void 0&&o.length;)r=`${o[o.length-1]}.${r}`,o=o.slice(0,o.length-1),a=X(n,o,Object),a?.obj&&typeof a.obj[`${a.k}.${r}`]<"u"&&(a.obj=void 0);a.obj[`${a.k}.${r}`]=t},gt=(n,e,t,i)=>{const{obj:s,k:r}=X(n,e,Object);s[r]=s[r]||[],s[r].push(t)},ae=(n,e)=>{const{obj:t,k:i}=X(n,e);if(t&&Object.prototype.hasOwnProperty.call(t,i))return t[i]},mt=(n,e,t)=>{const i=ae(n,t);return i!==void 0?i:ae(e,t)},Qe=(n,e,t)=>{for(const i in e)i!=="__proto__"&&i!=="constructor"&&(i in n?g(n[i])||n[i]instanceof String||g(e[i])||e[i]instanceof String?t&&(n[i]=e[i]):Qe(n[i],e[i],t):n[i]=e[i]);return n},_=n=>n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var xt={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const bt=n=>g(n)?n.replace(/[&<>"'\/]/g,e=>xt[e]):n;class yt{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const t=this.regExpMap.get(e);if(t!==void 0)return t;const i=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,i),this.regExpQueue.push(e),i}}const vt=[" ",",","?","!",";"],wt=new yt(20),St=(n,e,t)=>{e=e||"",t=t||"";const i=vt.filter(o=>e.indexOf(o)<0&&t.indexOf(o)<0);if(i.length===0)return!0;const s=wt.getRegExp(`(${i.map(o=>o==="?"?"\\?":o).join("|")})`);let r=!s.test(n);if(!r){const o=n.indexOf(t);o>0&&!s.test(n.substring(0,o))&&(r=!0)}return r},$e=(n,e,t=".")=>{if(!n)return;if(n[e])return Object.prototype.hasOwnProperty.call(n,e)?n[e]:void 0;const i=e.split(t);let s=n;for(let r=0;r<i.length;){if(!s||typeof s!="object")return;let o,a="";for(let l=r;l<i.length;++l)if(l!==r&&(a+=t),a+=i[l],o=s[a],o!==void 0){if(["string","number","boolean"].indexOf(typeof o)>-1&&l<i.length-1)continue;r+=l-r+1;break}s=o}return s},ee=n=>n?.replace("_","-"),$t={type:"logger",log(n){this.output("log",n)},warn(n){this.output("warn",n)},error(n){this.output("error",n)},output(n,e){console?.[n]?.apply?.(console,e)}};class le{constructor(e,t={}){this.init(e,t)}init(e,t={}){this.prefix=t.prefix||"i18next:",this.logger=e||$t,this.options=t,this.debug=t.debug}log(...e){return this.forward(e,"log","",!0)}warn(...e){return this.forward(e,"warn","",!0)}error(...e){return this.forward(e,"error","")}deprecate(...e){return this.forward(e,"warn","WARNING DEPRECATED: ",!0)}forward(e,t,i,s){return s&&!this.debug?null:(g(e[0])&&(e[0]=`${i}${this.prefix} ${e[0]}`),this.logger[t](e))}create(e){return new le(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new le(this.logger,e)}}var E=new le;class de{constructor(){this.observers={}}on(e,t){return e.split(" ").forEach(i=>{this.observers[i]||(this.observers[i]=new Map);const s=this.observers[i].get(t)||0;this.observers[i].set(t,s+1)}),this}off(e,t){if(this.observers[e]){if(!t){delete this.observers[e];return}this.observers[e].delete(t)}}emit(e,...t){this.observers[e]&&Array.from(this.observers[e].entries()).forEach(([s,r])=>{for(let o=0;o<r;o++)s(...t)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(([s,r])=>{for(let o=0;o<r;o++)s.apply(s,[e,...t])})}}class ze extends de{constructor(e,t={ns:["translation"],defaultNS:"translation"}){super(),this.data=e||{},this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,i,s={}){const r=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator,o=s.ignoreJSONStructure!==void 0?s.ignoreJSONStructure:this.options.ignoreJSONStructure;let a;e.indexOf(".")>-1?a=e.split("."):(a=[e,t],i&&(Array.isArray(i)?a.push(...i):g(i)&&r?a.push(...i.split(r)):a.push(i)));const l=ae(this.data,a);return!l&&!t&&!i&&e.indexOf(".")>-1&&(e=a[0],t=a[1],i=a.slice(2).join(".")),l||!o||!g(i)?l:$e(this.data?.[e]?.[t],i,r)}addResource(e,t,i,s,r={silent:!1}){const o=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator;let a=[e,t];i&&(a=a.concat(o?i.split(o):i)),e.indexOf(".")>-1&&(a=e.split("."),s=t,t=a[1]),this.addNamespaces(t),Te(this.data,a,s),r.silent||this.emit("added",e,t,i,s)}addResources(e,t,i,s={silent:!1}){for(const r in i)(g(i[r])||Array.isArray(i[r]))&&this.addResource(e,t,r,i[r],{silent:!0});s.silent||this.emit("added",e,t,i)}addResourceBundle(e,t,i,s,r,o={silent:!1,skipCopy:!1}){let a=[e,t];e.indexOf(".")>-1&&(a=e.split("."),s=i,i=t,t=a[1]),this.addNamespaces(t);let l=ae(this.data,a)||{};o.skipCopy||(i=JSON.parse(JSON.stringify(i))),s?Qe(l,i,r):l={...l,...i},Te(this.data,a,l),o.silent||this.emit("added",e,t,i)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}hasResourceBundle(e,t){return this.getResource(e,t)!==void 0}getResourceBundle(e,t){return t||(t=this.options.defaultNS),this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(s=>t[s]&&Object.keys(t[s]).length>0)}toJSON(){return this.data}}var Xe={processors:{},addPostProcessor(n){this.processors[n.name]=n},handle(n,e,t,i,s){return n.forEach(r=>{e=this.processors[r]?.process(e,t,i,s)??e}),e}};const Ze=Symbol("i18next/PATH_KEY");function Ot(){const n=[],e=Object.create(null);let t;return e.get=(i,s)=>(t?.revoke?.(),s===Ze?n:(n.push(s),t=Proxy.revocable(i,e),t.proxy)),Proxy.revocable(Object.create(null),e).proxy}function Oe(n,e){const{[Ze]:t}=n(Ot());return t.join(e?.keySeparator??".")}const Ie={},be=n=>!g(n)&&typeof n!="boolean"&&typeof n!="number";class ue extends de{constructor(e,t={}){super(),dt(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=E.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e,t={interpolation:{}}){const i={...t};if(e==null)return!1;const s=this.resolve(e,i);if(s?.res===void 0)return!1;const r=be(s.res);return!(i.returnObjects===!1&&r)}extractFromKey(e,t){let i=t.nsSeparator!==void 0?t.nsSeparator:this.options.nsSeparator;i===void 0&&(i=":");const s=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator;let r=t.ns||this.options.defaultNS||[];const o=i&&e.indexOf(i)>-1,a=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!St(e,i,s);if(o&&!a){const l=e.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:e,namespaces:g(r)?[r]:r};const u=e.split(i);(i!==s||i===s&&this.options.ns.indexOf(u[0])>-1)&&(r=u.shift()),e=u.join(s)}return{key:e,namespaces:g(r)?[r]:r}}translate(e,t,i){let s=typeof t=="object"?{...t}:t;if(typeof s!="object"&&this.options.overloadTranslationOptionHandler&&(s=this.options.overloadTranslationOptionHandler(arguments)),typeof s=="object"&&(s={...s}),s||(s={}),e==null)return"";typeof e=="function"&&(e=Oe(e,{...this.options,...s})),Array.isArray(e)||(e=[String(e)]);const r=s.returnDetails!==void 0?s.returnDetails:this.options.returnDetails,o=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator,{key:a,namespaces:l}=this.extractFromKey(e[e.length-1],s),u=l[l.length-1];let f=s.nsSeparator!==void 0?s.nsSeparator:this.options.nsSeparator;f===void 0&&(f=":");const c=s.lng||this.language,h=s.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(c?.toLowerCase()==="cimode")return h?r?{res:`${u}${f}${a}`,usedKey:a,exactUsedKey:a,usedLng:c,usedNS:u,usedParams:this.getUsedParamsDetails(s)}:`${u}${f}${a}`:r?{res:a,usedKey:a,exactUsedKey:a,usedLng:c,usedNS:u,usedParams:this.getUsedParamsDetails(s)}:a;const d=this.resolve(e,s);let p=d?.res;const x=d?.usedKey||a,b=d?.exactUsedKey||a,y=["[object Number]","[object Function]","[object RegExp]"],v=s.joinArrays!==void 0?s.joinArrays:this.options.joinArrays,R=!this.i18nFormat||this.i18nFormat.handleAsObject,O=s.count!==void 0&&!g(s.count),k=ue.hasDefaultValue(s),N=O?this.pluralResolver.getSuffix(c,s.count,s):"",T=s.ordinal&&O?this.pluralResolver.getSuffix(c,s.count,{ordinal:!1}):"",te=O&&!s.ordinal&&s.count===0,A=te&&s[`defaultValue${this.options.pluralSeparator}zero`]||s[`defaultValue${N}`]||s[`defaultValue${T}`]||s.defaultValue;let $=p;R&&!p&&k&&($=A);const W=be($),J=Object.prototype.toString.apply($);if(R&&$&&W&&y.indexOf(J)<0&&!(g(v)&&Array.isArray($))){if(!s.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const w=this.options.returnedObjectHandler?this.options.returnedObjectHandler(x,$,{...s,ns:l}):`key '${a} (${this.language})' returned an object instead of string.`;return r?(d.res=w,d.usedParams=this.getUsedParamsDetails(s),d):w}if(o){const w=Array.isArray($),m=w?[]:{},H=w?b:x;for(const L in $)if(Object.prototype.hasOwnProperty.call($,L)){const P=`${H}${o}${L}`;k&&!p?m[L]=this.translate(P,{...s,defaultValue:be(A)?A[L]:void 0,joinArrays:!1,ns:l}):m[L]=this.translate(P,{...s,joinArrays:!1,ns:l}),m[L]===P&&(m[L]=$[L])}p=m}}else if(R&&g(v)&&Array.isArray(p))p=p.join(v),p&&(p=this.extendTranslation(p,e,s,i));else{let w=!1,m=!1;!this.isValidLookup(p)&&k&&(w=!0,p=A),this.isValidLookup(p)||(m=!0,p=a);const L=(s.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&m?void 0:p,P=k&&A!==p&&this.options.updateMissing;if(m||w||P){if(this.logger.log(P?"updateKey":"missingKey",c,u,a,P?A:p),o){const S=this.resolve(a,{...s,keySeparator:!1});S&&S.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let M=[];const V=this.languageUtils.getFallbackCodes(this.options.fallbackLng,s.lng||this.language);if(this.options.saveMissingTo==="fallback"&&V&&V[0])for(let S=0;S<V.length;S++)M.push(V[S]);else this.options.saveMissingTo==="all"?M=this.languageUtils.toResolveHierarchy(s.lng||this.language):M.push(s.lng||this.language);const G=(S,j,F)=>{const se=k&&F!==p?F:L;this.options.missingKeyHandler?this.options.missingKeyHandler(S,u,j,se,P,s):this.backendConnector?.saveMissing&&this.backendConnector.saveMissing(S,u,j,se,P,s),this.emit("missingKey",S,u,j,p)};this.options.saveMissing&&(this.options.saveMissingPlurals&&O?M.forEach(S=>{const j=this.pluralResolver.getSuffixes(S,s);te&&s[`defaultValue${this.options.pluralSeparator}zero`]&&j.indexOf(`${this.options.pluralSeparator}zero`)<0&&j.push(`${this.options.pluralSeparator}zero`),j.forEach(F=>{G([S],a+F,s[`defaultValue${F}`]||A)})}):G(M,a,A))}p=this.extendTranslation(p,e,s,d,i),m&&p===a&&this.options.appendNamespaceToMissingKey&&(p=`${u}${f}${a}`),(m||w)&&this.options.parseMissingKeyHandler&&(p=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${u}${f}${a}`:a,w?p:void 0,s))}return r?(d.res=p,d.usedParams=this.getUsedParamsDetails(s),d):p}extendTranslation(e,t,i,s,r){if(this.i18nFormat?.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...i},i.lng||this.language||s.usedLng,s.usedNS,s.usedKey,{resolved:s});else if(!i.skipInterpolation){i.interpolation&&this.interpolator.init({...i,interpolation:{...this.options.interpolation,...i.interpolation}});const l=g(e)&&(i?.interpolation?.skipOnVariables!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let u;if(l){const c=e.match(this.interpolator.nestingRegexp);u=c&&c.length}let f=i.replace&&!g(i.replace)?i.replace:i;if(this.options.interpolation.defaultVariables&&(f={...this.options.interpolation.defaultVariables,...f}),e=this.interpolator.interpolate(e,f,i.lng||this.language||s.usedLng,i),l){const c=e.match(this.interpolator.nestingRegexp),h=c&&c.length;u<h&&(i.nest=!1)}!i.lng&&s&&s.res&&(i.lng=this.language||s.usedLng),i.nest!==!1&&(e=this.interpolator.nest(e,(...c)=>r?.[0]===c[0]&&!i.context?(this.logger.warn(`It seems you are nesting recursively key: ${c[0]} in key: ${t[0]}`),null):this.translate(...c,t),i)),i.interpolation&&this.interpolator.reset()}const o=i.postProcess||this.options.postProcess,a=g(o)?[o]:o;return e!=null&&a?.length&&i.applyPostProcessor!==!1&&(e=Xe.handle(a,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...s,usedParams:this.getUsedParamsDetails(i)},...i}:i,this)),e}resolve(e,t={}){let i,s,r,o,a;return g(e)&&(e=[e]),e.forEach(l=>{if(this.isValidLookup(i))return;const u=this.extractFromKey(l,t),f=u.key;s=f;let c=u.namespaces;this.options.fallbackNS&&(c=c.concat(this.options.fallbackNS));const h=t.count!==void 0&&!g(t.count),d=h&&!t.ordinal&&t.count===0,p=t.context!==void 0&&(g(t.context)||typeof t.context=="number")&&t.context!=="",x=t.lngs?t.lngs:this.languageUtils.toResolveHierarchy(t.lng||this.language,t.fallbackLng);c.forEach(b=>{this.isValidLookup(i)||(a=b,!Ie[`${x[0]}-${b}`]&&this.utils?.hasLoadedNamespace&&!this.utils?.hasLoadedNamespace(a)&&(Ie[`${x[0]}-${b}`]=!0,this.logger.warn(`key "${s}" for languages "${x.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),x.forEach(y=>{if(this.isValidLookup(i))return;o=y;const v=[f];if(this.i18nFormat?.addLookupKeys)this.i18nFormat.addLookupKeys(v,f,y,b,t);else{let O;h&&(O=this.pluralResolver.getSuffix(y,t.count,t));const k=`${this.options.pluralSeparator}zero`,N=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(h&&(t.ordinal&&O.indexOf(N)===0&&v.push(f+O.replace(N,this.options.pluralSeparator)),v.push(f+O),d&&v.push(f+k)),p){const T=`${f}${this.options.contextSeparator||"_"}${t.context}`;v.push(T),h&&(t.ordinal&&O.indexOf(N)===0&&v.push(T+O.replace(N,this.options.pluralSeparator)),v.push(T+O),d&&v.push(T+k))}}let R;for(;R=v.pop();)this.isValidLookup(i)||(r=R,i=this.getResource(y,b,R,t))}))})}),{res:i,usedKey:s,exactUsedKey:r,usedLng:o,usedNS:a}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,t,i,s={}){return this.i18nFormat?.getResource?this.i18nFormat.getResource(e,t,i,s):this.resourceStore.getResource(e,t,i,s)}getUsedParamsDetails(e={}){const t=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],i=e.replace&&!g(e.replace);let s=i?e.replace:e;if(i&&typeof e.count<"u"&&(s.count=e.count),this.options.interpolation.defaultVariables&&(s={...this.options.interpolation.defaultVariables,...s}),!i){s={...s};for(const r of t)delete s[r]}return s}static hasDefaultValue(e){const t="defaultValue";for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&t===i.substring(0,t.length)&&e[i]!==void 0)return!0;return!1}}class De{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=E.create("languageUtils")}getScriptPartFromCode(e){if(e=ee(e),!e||e.indexOf("-")<0)return null;const t=e.split("-");return t.length===2||(t.pop(),t[t.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(t.join("-"))}getLanguagePartFromCode(e){if(e=ee(e),!e||e.indexOf("-")<0)return e;const t=e.split("-");return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(g(e)&&e.indexOf("-")>-1){let t;try{t=Intl.getCanonicalLocales(e)[0]}catch{}return t&&this.options.lowerCaseLng&&(t=t.toLowerCase()),t||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(i=>{if(t)return;const s=this.formatLanguageCode(i);(!this.options.supportedLngs||this.isSupportedCode(s))&&(t=s)}),!t&&this.options.supportedLngs&&e.forEach(i=>{if(t)return;const s=this.getScriptPartFromCode(i);if(this.isSupportedCode(s))return t=s;const r=this.getLanguagePartFromCode(i);if(this.isSupportedCode(r))return t=r;t=this.options.supportedLngs.find(o=>{if(o===r)return o;if(!(o.indexOf("-")<0&&r.indexOf("-")<0)&&(o.indexOf("-")>0&&r.indexOf("-")<0&&o.substring(0,o.indexOf("-"))===r||o.indexOf(r)===0&&r.length>1))return o})}),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t}getFallbackCodes(e,t){if(!e)return[];if(typeof e=="function"&&(e=e(t)),g(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let i=e[t];return i||(i=e[this.getScriptPartFromCode(t)]),i||(i=e[this.formatLanguageCode(t)]),i||(i=e[this.getLanguagePartFromCode(t)]),i||(i=e.default),i||[]}toResolveHierarchy(e,t){const i=this.getFallbackCodes((t===!1?[]:t)||this.options.fallbackLng||[],e),s=[],r=o=>{o&&(this.isSupportedCode(o)?s.push(o):this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`))};return g(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&r(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&r(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&r(this.getLanguagePartFromCode(e))):g(e)&&r(this.formatLanguageCode(e)),i.forEach(o=>{s.indexOf(o)<0&&r(this.formatLanguageCode(o))}),s}}const Me={zero:0,one:1,two:2,few:3,many:4,other:5},Ve={select:n=>n===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class Lt{constructor(e,t={}){this.languageUtils=e,this.options=t,this.logger=E.create("pluralResolver"),this.pluralRulesCache={}}clearCache(){this.pluralRulesCache={}}getRule(e,t={}){const i=ee(e==="dev"?"en":e),s=t.ordinal?"ordinal":"cardinal",r=JSON.stringify({cleanedCode:i,type:s});if(r in this.pluralRulesCache)return this.pluralRulesCache[r];let o;try{o=new Intl.PluralRules(i,{type:s})}catch{if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),Ve;if(!e.match(/-|_/))return Ve;const l=this.languageUtils.getLanguagePartFromCode(e);o=this.getRule(l,t)}return this.pluralRulesCache[r]=o,o}needsPlural(e,t={}){let i=this.getRule(e,t);return i||(i=this.getRule("dev",t)),i?.resolvedOptions().pluralCategories.length>1}getPluralFormsOfKey(e,t,i={}){return this.getSuffixes(e,i).map(s=>`${t}${s}`)}getSuffixes(e,t={}){let i=this.getRule(e,t);return i||(i=this.getRule("dev",t)),i?i.resolvedOptions().pluralCategories.sort((s,r)=>Me[s]-Me[r]).map(s=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${s}`):[]}getSuffix(e,t,i={}){const s=this.getRule(e,i);return s?`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${s.select(t)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix("dev",t,i))}}const Ke=(n,e,t,i=".",s=!0)=>{let r=mt(n,e,t);return!r&&s&&g(t)&&(r=$e(n,t,i),r===void 0&&(r=$e(e,t,i))),r},ye=n=>n.replace(/\$/g,"$$$$");class He{constructor(e={}){this.logger=E.create("interpolator"),this.options=e,this.format=e?.interpolation?.format||(t=>t),this.init(e)}init(e={}){e.interpolation||(e.interpolation={escapeValue:!0});const{escape:t,escapeValue:i,useRawValueToEscape:s,prefix:r,prefixEscaped:o,suffix:a,suffixEscaped:l,formatSeparator:u,unescapeSuffix:f,unescapePrefix:c,nestingPrefix:h,nestingPrefixEscaped:d,nestingSuffix:p,nestingSuffixEscaped:x,nestingOptionsSeparator:b,maxReplaces:y,alwaysFormat:v}=e.interpolation;this.escape=t!==void 0?t:bt,this.escapeValue=i!==void 0?i:!0,this.useRawValueToEscape=s!==void 0?s:!1,this.prefix=r?_(r):o||"{{",this.suffix=a?_(a):l||"}}",this.formatSeparator=u||",",this.unescapePrefix=f?"":c||"-",this.unescapeSuffix=this.unescapePrefix?"":f||"",this.nestingPrefix=h?_(h):d||_("$t("),this.nestingSuffix=p?_(p):x||_(")"),this.nestingOptionsSeparator=b||",",this.maxReplaces=y||1e3,this.alwaysFormat=v!==void 0?v:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(t,i)=>t?.source===i?(t.lastIndex=0,t):new RegExp(i,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)}interpolate(e,t,i,s){let r,o,a;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},u=d=>{if(d.indexOf(this.formatSeparator)<0){const y=Ke(t,l,d,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(y,void 0,i,{...s,...t,interpolationkey:d}):y}const p=d.split(this.formatSeparator),x=p.shift().trim(),b=p.join(this.formatSeparator).trim();return this.format(Ke(t,l,x,this.options.keySeparator,this.options.ignoreJSONStructure),b,i,{...s,...t,interpolationkey:x})};this.resetRegExp();const f=s?.missingInterpolationHandler||this.options.missingInterpolationHandler,c=s?.interpolation?.skipOnVariables!==void 0?s.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:d=>ye(d)},{regex:this.regexp,safeValue:d=>this.escapeValue?ye(this.escape(d)):ye(d)}].forEach(d=>{for(a=0;r=d.regex.exec(e);){const p=r[1].trim();if(o=u(p),o===void 0)if(typeof f=="function"){const b=f(e,r,s);o=g(b)?b:""}else if(s&&Object.prototype.hasOwnProperty.call(s,p))o="";else if(c){o=r[0];continue}else this.logger.warn(`missed to pass in variable ${p} for interpolating ${e}`),o="";else!g(o)&&!this.useRawValueToEscape&&(o=Ee(o));const x=d.safeValue(o);if(e=e.replace(r[0],x),c?(d.regex.lastIndex+=o.length,d.regex.lastIndex-=r[0].length):d.regex.lastIndex=0,a++,a>=this.maxReplaces)break}}),e}nest(e,t,i={}){let s,r,o;const a=(l,u)=>{const f=this.nestingOptionsSeparator;if(l.indexOf(f)<0)return l;const c=l.split(new RegExp(`${f}[ ]*{`));let h=`{${c[1]}`;l=c[0],h=this.interpolate(h,o);const d=h.match(/'/g),p=h.match(/"/g);((d?.length??0)%2===0&&!p||p.length%2!==0)&&(h=h.replace(/'/g,'"'));try{o=JSON.parse(h),u&&(o={...u,...o})}catch(x){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,x),`${l}${f}${h}`}return o.defaultValue&&o.defaultValue.indexOf(this.prefix)>-1&&delete o.defaultValue,l};for(;s=this.nestingRegexp.exec(e);){let l=[];o={...i},o=o.replace&&!g(o.replace)?o.replace:o,o.applyPostProcessor=!1,delete o.defaultValue;const u=/{.*}/.test(s[1])?s[1].lastIndexOf("}")+1:s[1].indexOf(this.formatSeparator);if(u!==-1&&(l=s[1].slice(u).split(this.formatSeparator).map(f=>f.trim()).filter(Boolean),s[1]=s[1].slice(0,u)),r=t(a.call(this,s[1].trim(),o),o),r&&s[0]===e&&!g(r))return r;g(r)||(r=Ee(r)),r||(this.logger.warn(`missed to resolve ${s[1]} for nesting ${e}`),r=""),l.length&&(r=l.reduce((f,c)=>this.format(f,c,i.lng,{...i,interpolationkey:s[1].trim()}),r.trim())),e=e.replace(s[0],r),this.regexp.lastIndex=0}return e}}const Ct=n=>{let e=n.toLowerCase().trim();const t={};if(n.indexOf("(")>-1){const i=n.split("(");e=i[0].toLowerCase().trim();const s=i[1].substring(0,i[1].length-1);e==="currency"&&s.indexOf(":")<0?t.currency||(t.currency=s.trim()):e==="relativetime"&&s.indexOf(":")<0?t.range||(t.range=s.trim()):s.split(";").forEach(o=>{if(o){const[a,...l]=o.split(":"),u=l.join(":").trim().replace(/^'+|'+$/g,""),f=a.trim();t[f]||(t[f]=u),u==="false"&&(t[f]=!1),u==="true"&&(t[f]=!0),isNaN(u)||(t[f]=parseInt(u,10))}})}return{formatName:e,formatOptions:t}},_e=n=>{const e={};return(t,i,s)=>{let r=s;s&&s.interpolationkey&&s.formatParams&&s.formatParams[s.interpolationkey]&&s[s.interpolationkey]&&(r={...r,[s.interpolationkey]:void 0});const o=i+JSON.stringify(r);let a=e[o];return a||(a=n(ee(i),s),e[o]=a),a(t)}},Pt=n=>(e,t,i)=>n(ee(t),i)(e);class Rt{constructor(e={}){this.logger=E.create("formatter"),this.options=e,this.init(e)}init(e,t={interpolation:{}}){this.formatSeparator=t.interpolation.formatSeparator||",";const i=t.cacheInBuiltFormats?_e:Pt;this.formats={number:i((s,r)=>{const o=new Intl.NumberFormat(s,{...r});return a=>o.format(a)}),currency:i((s,r)=>{const o=new Intl.NumberFormat(s,{...r,style:"currency"});return a=>o.format(a)}),datetime:i((s,r)=>{const o=new Intl.DateTimeFormat(s,{...r});return a=>o.format(a)}),relativetime:i((s,r)=>{const o=new Intl.RelativeTimeFormat(s,{...r});return a=>o.format(a,r.range||"day")}),list:i((s,r)=>{const o=new Intl.ListFormat(s,{...r});return a=>o.format(a)})}}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=_e(t)}format(e,t,i,s={}){const r=t.split(this.formatSeparator);if(r.length>1&&r[0].indexOf("(")>1&&r[0].indexOf(")")<0&&r.find(a=>a.indexOf(")")>-1)){const a=r.findIndex(l=>l.indexOf(")")>-1);r[0]=[r[0],...r.splice(1,a)].join(this.formatSeparator)}return r.reduce((a,l)=>{const{formatName:u,formatOptions:f}=Ct(l);if(this.formats[u]){let c=a;try{const h=s?.formatParams?.[s.interpolationkey]||{},d=h.locale||h.lng||s.locale||s.lng||i;c=this.formats[u](a,d,{...f,...s,...h})}catch(h){this.logger.warn(h)}return c}else this.logger.warn(`there was no format function for ${u}`);return a},e)}}const kt=(n,e)=>{n.pending[e]!==void 0&&(delete n.pending[e],n.pendingCount--)};class Nt extends de{constructor(e,t,i,s={}){super(),this.backend=e,this.store=t,this.services=i,this.languageUtils=i.languageUtils,this.options=s,this.logger=E.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=s.maxParallelReads||10,this.readingCalls=0,this.maxRetries=s.maxRetries>=0?s.maxRetries:5,this.retryTimeout=s.retryTimeout>=1?s.retryTimeout:350,this.state={},this.queue=[],this.backend?.init?.(i,s.backend,s)}queueLoad(e,t,i,s){const r={},o={},a={},l={};return e.forEach(u=>{let f=!0;t.forEach(c=>{const h=`${u}|${c}`;!i.reload&&this.store.hasResourceBundle(u,c)?this.state[h]=2:this.state[h]<0||(this.state[h]===1?o[h]===void 0&&(o[h]=!0):(this.state[h]=1,f=!1,o[h]===void 0&&(o[h]=!0),r[h]===void 0&&(r[h]=!0),l[c]===void 0&&(l[c]=!0)))}),f||(a[u]=!0)}),(Object.keys(r).length||Object.keys(o).length)&&this.queue.push({pending:o,pendingCount:Object.keys(o).length,loaded:{},errors:[],callback:s}),{toLoad:Object.keys(r),pending:Object.keys(o),toLoadLanguages:Object.keys(a),toLoadNamespaces:Object.keys(l)}}loaded(e,t,i){const s=e.split("|"),r=s[0],o=s[1];t&&this.emit("failedLoading",r,o,t),!t&&i&&this.store.addResourceBundle(r,o,i,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&i&&(this.state[e]=0);const a={};this.queue.forEach(l=>{gt(l.loaded,[r],o),kt(l,e),t&&l.errors.push(t),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(u=>{a[u]||(a[u]={});const f=l.loaded[u];f.length&&f.forEach(c=>{a[u][c]===void 0&&(a[u][c]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",a),this.queue=this.queue.filter(l=>!l.done)}read(e,t,i,s=0,r=this.retryTimeout,o){if(!e.length)return o(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:t,fcName:i,tried:s,wait:r,callback:o});return}this.readingCalls++;const a=(u,f)=>{if(this.readingCalls--,this.waitingReads.length>0){const c=this.waitingReads.shift();this.read(c.lng,c.ns,c.fcName,c.tried,c.wait,c.callback)}if(u&&f&&s<this.maxRetries){setTimeout(()=>{this.read.call(this,e,t,i,s+1,r*2,o)},r);return}o(u,f)},l=this.backend[i].bind(this.backend);if(l.length===2){try{const u=l(e,t);u&&typeof u.then=="function"?u.then(f=>a(null,f)).catch(a):a(null,u)}catch(u){a(u)}return}return l(e,t,a)}prepareLoading(e,t,i={},s){if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),s&&s();g(e)&&(e=this.languageUtils.toResolveHierarchy(e)),g(t)&&(t=[t]);const r=this.queueLoad(e,t,i,s);if(!r.toLoad.length)return r.pending.length||s(),null;r.toLoad.forEach(o=>{this.loadOne(o)})}load(e,t,i){this.prepareLoading(e,t,{},i)}reload(e,t,i){this.prepareLoading(e,t,{reload:!0},i)}loadOne(e,t=""){const i=e.split("|"),s=i[0],r=i[1];this.read(s,r,"read",void 0,void 0,(o,a)=>{o&&this.logger.warn(`${t}loading namespace ${r} for language ${s} failed`,o),!o&&a&&this.logger.log(`${t}loaded namespace ${r} for language ${s}`,a),this.loaded(e,o,a)})}saveMissing(e,t,i,s,r,o={},a=()=>{}){if(this.services?.utils?.hasLoadedNamespace&&!this.services?.utils?.hasLoadedNamespace(t)){this.logger.warn(`did not save key "${i}" as the namespace "${t}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(i==null||i==="")){if(this.backend?.create){const l={...o,isUpdate:r},u=this.backend.create.bind(this.backend);if(u.length<6)try{let f;u.length===5?f=u(e,t,i,s,l):f=u(e,t,i,s),f&&typeof f.then=="function"?f.then(c=>a(null,c)).catch(a):a(null,f)}catch(f){a(f)}else u(e,t,i,s,a,l)}!e||!e[0]||this.store.addResource(e[0],t,i,s)}}}const ve=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:n=>{let e={};if(typeof n[1]=="object"&&(e=n[1]),g(n[1])&&(e.defaultValue=n[1]),g(n[2])&&(e.tDescription=n[2]),typeof n[2]=="object"||typeof n[3]=="object"){const t=n[3]||n[2];Object.keys(t).forEach(i=>{e[i]=t[i]})}return e},interpolation:{escapeValue:!0,format:n=>n,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),Ue=n=>(g(n.ns)&&(n.ns=[n.ns]),g(n.fallbackLng)&&(n.fallbackLng=[n.fallbackLng]),g(n.fallbackNS)&&(n.fallbackNS=[n.fallbackNS]),n.supportedLngs?.indexOf?.("cimode")<0&&(n.supportedLngs=n.supportedLngs.concat(["cimode"])),typeof n.initImmediate=="boolean"&&(n.initAsync=n.initImmediate),n),ie=()=>{},At=n=>{Object.getOwnPropertyNames(Object.getPrototypeOf(n)).forEach(t=>{typeof n[t]=="function"&&(n[t]=n[t].bind(n))})};class Z extends de{constructor(e={},t){if(super(),this.options=Ue(e),this.services={},this.logger=E,this.modules={external:[]},At(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(e={},t){this.isInitializing=!0,typeof e=="function"&&(t=e,e={}),e.defaultNS==null&&e.ns&&(g(e.ns)?e.defaultNS=e.ns:e.ns.indexOf("translation")<0&&(e.defaultNS=e.ns[0]));const i=ve();this.options={...i,...this.options,...Ue(e)},this.options.interpolation={...i.interpolation,...this.options.interpolation},e.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=e.keySeparator),e.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=e.nsSeparator),typeof this.options.overloadTranslationOptionHandler!="function"&&(this.options.overloadTranslationOptionHandler=i.overloadTranslationOptionHandler),this.options.debug===!0&&typeof console<"u"&&console.warn("i18next is maintained with support from locize.com — consider powering your project with managed localization (AI, CDN, integrations): https://locize.com");const s=u=>u?typeof u=="function"?new u:u:null;if(!this.options.isClone){this.modules.logger?E.init(s(this.modules.logger),this.options):E.init(null,this.options);let u;this.modules.formatter?u=this.modules.formatter:u=Rt;const f=new De(this.options);this.store=new ze(this.options.resources,this.options);const c=this.services;c.logger=E,c.resourceStore=this.store,c.languageUtils=f,c.pluralResolver=new Lt(f,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),this.options.interpolation.format&&this.options.interpolation.format!==i.interpolation.format&&this.logger.deprecate("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"),u&&(!this.options.interpolation.format||this.options.interpolation.format===i.interpolation.format)&&(c.formatter=s(u),c.formatter.init&&c.formatter.init(c,this.options),this.options.interpolation.format=c.formatter.format.bind(c.formatter)),c.interpolator=new He(this.options),c.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},c.backendConnector=new Nt(s(this.modules.backend),c.resourceStore,c,this.options),c.backendConnector.on("*",(d,...p)=>{this.emit(d,...p)}),this.modules.languageDetector&&(c.languageDetector=s(this.modules.languageDetector),c.languageDetector.init&&c.languageDetector.init(c,this.options.detection,this.options)),this.modules.i18nFormat&&(c.i18nFormat=s(this.modules.i18nFormat),c.i18nFormat.init&&c.i18nFormat.init(this)),this.translator=new ue(this.services,this.options),this.translator.on("*",(d,...p)=>{this.emit(d,...p)}),this.modules.external.forEach(d=>{d.init&&d.init(this)})}if(this.format=this.options.interpolation.format,t||(t=ie),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const u=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);u.length>0&&u[0]!=="dev"&&(this.options.lng=u[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(u=>{this[u]=(...f)=>this.store[u](...f)}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(u=>{this[u]=(...f)=>(this.store[u](...f),this)});const a=q(),l=()=>{const u=(f,c)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),a.resolve(c),t(f,c)};if(this.languages&&!this.isInitialized)return u(null,this.t.bind(this));this.changeLanguage(this.options.lng,u)};return this.options.resources||!this.options.initAsync?l():setTimeout(l,0),a}loadResources(e,t=ie){let i=t;const s=g(e)?e:this.language;if(typeof e=="function"&&(i=e),!this.options.resources||this.options.partialBundledLanguages){if(s?.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return i();const r=[],o=a=>{if(!a||a==="cimode")return;this.services.languageUtils.toResolveHierarchy(a).forEach(u=>{u!=="cimode"&&r.indexOf(u)<0&&r.push(u)})};s?o(s):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l=>o(l)),this.options.preload?.forEach?.(a=>o(a)),this.services.backendConnector.load(r,this.options.ns,a=>{!a&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),i(a)})}else i(null)}reloadResources(e,t,i){const s=q();return typeof e=="function"&&(i=e,e=void 0),typeof t=="function"&&(i=t,t=void 0),e||(e=this.languages),t||(t=this.options.ns),i||(i=ie),this.services.backendConnector.reload(e,t,r=>{s.resolve(),i(r)}),s}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&Xe.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1)){for(let t=0;t<this.languages.length;t++){const i=this.languages[t];if(!(["cimode","dev"].indexOf(i)>-1)&&this.store.hasLanguageSomeTranslations(i)){this.resolvedLanguage=i;break}}!this.resolvedLanguage&&this.languages.indexOf(e)<0&&this.store.hasLanguageSomeTranslations(e)&&(this.resolvedLanguage=e,this.languages.unshift(e))}}changeLanguage(e,t){this.isLanguageChangingTo=e;const i=q();this.emit("languageChanging",e);const s=a=>{this.language=a,this.languages=this.services.languageUtils.toResolveHierarchy(a),this.resolvedLanguage=void 0,this.setResolvedLanguage(a)},r=(a,l)=>{l?this.isLanguageChangingTo===e&&(s(l),this.translator.changeLanguage(l),this.isLanguageChangingTo=void 0,this.emit("languageChanged",l),this.logger.log("languageChanged",l)):this.isLanguageChangingTo=void 0,i.resolve((...u)=>this.t(...u)),t&&t(a,(...u)=>this.t(...u))},o=a=>{!e&&!a&&this.services.languageDetector&&(a=[]);const l=g(a)?a:a&&a[0],u=this.store.hasLanguageSomeTranslations(l)?l:this.services.languageUtils.getBestMatchFromCodes(g(a)?[a]:a);u&&(this.language||s(u),this.translator.language||this.translator.changeLanguage(u),this.services.languageDetector?.cacheUserLanguage?.(u)),this.loadResources(u,f=>{r(f,u)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?o(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(o):this.services.languageDetector.detect(o):o(e),i}getFixedT(e,t,i){const s=(r,o,...a)=>{let l;typeof o!="object"?l=this.options.overloadTranslationOptionHandler([r,o].concat(a)):l={...o},l.lng=l.lng||s.lng,l.lngs=l.lngs||s.lngs,l.ns=l.ns||s.ns,l.keyPrefix!==""&&(l.keyPrefix=l.keyPrefix||i||s.keyPrefix);const u=this.options.keySeparator||".";let f;return l.keyPrefix&&Array.isArray(r)?f=r.map(c=>(typeof c=="function"&&(c=Oe(c,{...this.options,...o})),`${l.keyPrefix}${u}${c}`)):(typeof r=="function"&&(r=Oe(r,{...this.options,...o})),f=l.keyPrefix?`${l.keyPrefix}${u}${r}`:r),this.t(f,l)};return g(e)?s.lng=e:s.lngs=e,s.ns=t,s.keyPrefix=i,s}t(...e){return this.translator?.translate(...e)}exists(...e){return this.translator?.exists(...e)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e,t={}){if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const i=t.lng||this.resolvedLanguage||this.languages[0],s=this.options?this.options.fallbackLng:!1,r=this.languages[this.languages.length-1];if(i.toLowerCase()==="cimode")return!0;const o=(a,l)=>{const u=this.services.backendConnector.state[`${a}|${l}`];return u===-1||u===0||u===2};if(t.precheck){const a=t.precheck(this,o);if(a!==void 0)return a}return!!(this.hasResourceBundle(i,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||o(i,e)&&(!s||o(r,e)))}loadNamespaces(e,t){const i=q();return this.options.ns?(g(e)&&(e=[e]),e.forEach(s=>{this.options.ns.indexOf(s)<0&&this.options.ns.push(s)}),this.loadResources(s=>{i.resolve(),t&&t(s)}),i):(t&&t(),Promise.resolve())}loadLanguages(e,t){const i=q();g(e)&&(e=[e]);const s=this.options.preload||[],r=e.filter(o=>s.indexOf(o)<0&&this.services.languageUtils.isSupportedCode(o));return r.length?(this.options.preload=s.concat(r),this.loadResources(o=>{i.resolve(),t&&t(o)}),i):(t&&t(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages?.length>0?this.languages[0]:this.language)),!e)return"rtl";try{const s=new Intl.Locale(e);if(s&&s.getTextInfo){const r=s.getTextInfo();if(r&&r.direction)return r.direction}}catch{}const t=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],i=this.services?.languageUtils||new De(ve());return e.toLowerCase().indexOf("-latn")>1?"ltr":t.indexOf(i.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(e={},t){const i=new Z(e,t);return i.createInstance=Z.createInstance,i}cloneInstance(e={},t=ie){const i=e.forkResourceStore;i&&delete e.forkResourceStore;const s={...this.options,...e,isClone:!0},r=new Z(s);if((e.debug!==void 0||e.prefix!==void 0)&&(r.logger=r.logger.clone(e)),["store","services","language"].forEach(a=>{r[a]=this[a]}),r.services={...this.services},r.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},i){const a=Object.keys(this.store.data).reduce((l,u)=>(l[u]={...this.store.data[u]},l[u]=Object.keys(l[u]).reduce((f,c)=>(f[c]={...l[u][c]},f),l[u]),l),{});r.store=new ze(a,s),r.services.resourceStore=r.store}if(e.interpolation){const l={...ve().interpolation,...this.options.interpolation,...e.interpolation},u={...s,interpolation:l};r.services.interpolator=new He(u)}return r.translator=new ue(r.services,s),r.translator.on("*",(a,...l)=>{r.emit(a,...l)}),r.init(s,t),r.translator.options=s,r.translator.backendConnector.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},r}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const C=Z.createInstance();C.createInstance;C.dir;C.init;C.loadResources;C.reloadResources;C.use;C.changeLanguage;C.getFixedT;const B=C.t;C.exists;C.setDefaultNamespace;C.hasLoadedNamespace;C.loadNamespaces;C.loadLanguages;const et=(n,...e)=>n.flatMap((t,i)=>[t,e[i]??""]).join(""),Et=et`
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
`,jt=n=>(Ce(()=>{n.setAttribute("role","tablist")},[]),D`
		<style>
			${Et}
		</style>
		<slot></slot>
	`);customElements.define("cosmoz-tabs-next",Le(jt));const Ft=n=>n??U,Be=n=>typeof n=="object"&&n!=null&&n.nodeType===1,We=(n,e)=>(!e||n!=="hidden")&&n!=="visible"&&n!=="clip",ne=(n,e)=>{if(n.clientHeight<n.scrollHeight||n.clientWidth<n.scrollWidth){const t=getComputedStyle(n,null);return We(t.overflowY,e)||We(t.overflowX,e)||(i=>{const s=(r=>{if(!r.ownerDocument||!r.ownerDocument.defaultView)return null;try{return r.ownerDocument.defaultView.frameElement}catch{return null}})(i);return!!s&&(s.clientHeight<i.scrollHeight||s.clientWidth<i.scrollWidth)})(n)}return!1},Je=(n,e,t,i,s,r,o,a)=>r<n&&o>e||r>n&&o<e?0:r<=n&&a<=t||o>=e&&a>=t?r-n-i:o>e&&a<t||r<n&&a>t?o-e+s:0,Tt=n=>{const e=n.parentElement;return e??(n.getRootNode().host||null)},zt=(n,e)=>{var t,i,s,r;if(typeof document>"u")return[];const{scrollMode:o,boundary:a,skipOverflowHiddenElements:l}=e,u=typeof a=="function"?a:w=>w!==a;if(!Be(n))throw new TypeError("Invalid target");const f=document.scrollingElement||document.documentElement,c=[];let h=n;for(;Be(h)&&u(h);){if(h=Tt(h),h===f){c.push(h);break}h!=null&&h===document.body&&ne(h)&&!ne(document.documentElement)||h!=null&&ne(h,l)&&c.push(h)}const d=(i=(t=window.visualViewport)==null?void 0:t.width)!=null?i:innerWidth,p=(r=(s=window.visualViewport)==null?void 0:s.height)!=null?r:innerHeight,{scrollX:x,scrollY:b}=window,{height:y,width:v,top:R,right:O,bottom:k,left:N}=n.getBoundingClientRect(),{top:T,right:te,left:A}=(w=>{const m=window.getComputedStyle(w);return{top:parseFloat(m.scrollMarginTop)||0,right:parseFloat(m.scrollMarginRight)||0,bottom:parseFloat(m.scrollMarginBottom)||0,left:parseFloat(m.scrollMarginLeft)||0}})(n);let $=R-T,W=N+v/2-A+te;const J=[];for(let w=0;w<c.length;w++){const m=c[w],{height:H,width:L,top:P,right:M,bottom:V,left:G}=m.getBoundingClientRect();if(o==="if-needed"&&R>=0&&N>=0&&k<=p&&O<=d&&(m===f&&!ne(m)||R>=P&&k<=V&&N>=G&&O<=M))return J;const S=getComputedStyle(m),j=parseInt(S.borderLeftWidth,10),F=parseInt(S.borderTopWidth,10),se=parseInt(S.borderRightWidth,10),pe=parseInt(S.borderBottomWidth,10);let z=0,I=0;const Re="offsetWidth"in m?m.offsetWidth-m.clientWidth-j-se:0,ke="offsetHeight"in m?m.offsetHeight-m.clientHeight-F-pe:0,ge="offsetWidth"in m?m.offsetWidth===0?0:L/m.offsetWidth:0,me="offsetHeight"in m?m.offsetHeight===0?0:H/m.offsetHeight:0;if(f===m)z=Je(b,b+p,p,F,pe,b+$,b+$+y,y),I=W-d/2,z=Math.max(0,z+b),I=Math.max(0,I+x);else{z=Je(P,V,H,F,pe+ke,$,$+y,y),I=W-(G+L/2)+Re/2;const{scrollLeft:Ne,scrollTop:Ae}=m;z=me===0?0:Math.max(0,Math.min(Ae+z/me,m.scrollHeight-H/me+ke)),I=ge===0?0:Math.max(0,Math.min(Ne+I/ge,m.scrollWidth-L/ge+Re)),$+=Ae-z,W+=Ne-I}J.push({el:m,top:z,left:I})}return J},It=et`
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
`,Dt=n=>{const{active:e,badge:t,href:i}=n;return Ce(()=>{n.getAttribute("tabindex")||n.setAttribute("tabindex","-1"),n.setAttribute("role","tab")},[]),Se(()=>{const s=n;s.toggleAttribute("aria-selected",!!e),e&&zt(s,{boundary:s.parentElement}).forEach(({el:r,top:o,left:a})=>r.scroll({top:o,left:a,behavior:"smooth"}))},[e]),D`
		<style>
			${It}
		</style>
		<a part="link" href=${Ft(i)}>
			<slot id="iconSlot" name="icon"></slot>
			<slot id="contentSlot"></slot>
			${t?D`<span class="badge" part="badge">${t}</span>`:U}
		</a>
	`};customElements.define("cosmoz-tab-next",Le(Dt,{observedAttributes:["active","badge","href"]}));const Ge=(n,e,t)=>{const i=new Map;for(let s=e;s<=t;s++)i.set(n[s],s);return i},Mt=fe(class extends he{constructor(n){if(super(n),n.type!==Pe.CHILD)throw Error("repeat() can only be used in text expressions")}dt(n,e,t){let i;t===void 0?t=e:e!==void 0&&(i=e);const s=[],r=[];let o=0;for(const a of n)s[o]=i?i(a,o):o,r[o]=t(a,o),o++;return{values:r,keys:s}}render(n,e,t){return this.dt(n,e,t).values}update(n,[e,t,i]){const s=nt(n),{values:r,keys:o}=this.dt(e,t,i);if(!Array.isArray(s))return this.ut=o,r;const a=this.ut??=[],l=[];let u,f,c=0,h=s.length-1,d=0,p=r.length-1;for(;c<=h&&d<=p;)if(s[c]===null)c++;else if(s[h]===null)h--;else if(a[c]===o[d])l[d]=K(s[c],r[d]),c++,d++;else if(a[h]===o[p])l[p]=K(s[h],r[p]),h--,p--;else if(a[c]===o[p])l[p]=K(s[c],r[p]),Y(n,l[p+1],s[c]),c++,p--;else if(a[h]===o[d])l[d]=K(s[h],r[d]),Y(n,s[c],s[h]),h--,d++;else if(u===void 0&&(u=Ge(o,d,p),f=Ge(a,c,h)),u.has(a[c]))if(u.has(a[h])){const x=f.get(o[d]),b=x!==void 0?s[x]:null;if(b===null){const y=Y(n,s[c]);K(y,r[d]),l[d]=y}else l[d]=K(b,r[d]),Y(n,s[c],b),s[x]=null;d++}else xe(s[h]),h--;else xe(s[c]),c++;for(;d<=p;){const x=Y(n,l[p+1]);K(x,r[d]),l[d++]=x}for(;c<=h;){const x=s[c++];x!==null&&xe(x)}return this.ut=o,rt(n,l),re}}),we=new WeakMap,Vt=fe(class extends ft{render(n){return U}update(n,[e]){const t=e!==this.G;return t&&this.G!==void 0&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.G=e,this.ht=n.options?.host,this.rt(this.ct=n.element)),U}rt(n){if(this.isConnected||(n=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let t=we.get(e);t===void 0&&(t=new WeakMap,we.set(e,t)),t.get(this.G)!==void 0&&this.G.call(this.ht,void 0),t.set(this.G,n),n!==void 0&&this.G.call(this.ht,n)}else this.G.value=n}get lt(){return typeof this.G=="function"?we.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});const tt="important",Kt=" !"+tt,Ht=fe(class extends he{constructor(n){if(super(n),n.type!==Pe.ATTRIBUTE||n.name!=="style"||n.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(n){return Object.keys(n).reduce((e,t)=>{const i=n[t];return i==null?e:e+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(n,[e]){const{style:t}=n.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const i of this.ft)e[i]==null&&(this.ft.delete(i),i.includes("-")?t.removeProperty(i):t[i]=null);for(const i in e){const s=e[i];if(s!=null){this.ft.add(i);const r=typeof s=="string"&&s.endsWith(Kt);i.includes("-")||r?t.setProperty(i,r?s.slice(0,-11):s,r?tt:""):t[i]=s}}return re}});class _t extends Promise{constructor(e){const t={};super((i,s)=>Object.assign(t,{resolve:i,reject:s})),Object.assign(this,t),e?.(t.resolve,t.reject)}resolve=()=>{}}const st={host:{position:"relative",display:"flex",overflow:"hidden"},slide:{position:"static",width:"100%",height:"100%"}},Ut=n=>{const{slide:e}=n,[t,i]=ot([]);return Se(()=>{Object.assign(n.style,st.host)},[]),Ce(()=>{if(e==null)return;const s={animationEnd$:new _t,...e};i((r=[])=>{const o=r.findIndex(({id:a,out:l})=>a===s.id&&l!==!0);return o!==-1?[...r.slice(0,o),s,...r.slice(o+1,r.length)]:[...r,s]})},[e]),Se(async()=>{if(t.filter(l=>!l.out).length<2){const l=t[0];l&&requestAnimationFrame(()=>requestAnimationFrame(()=>l.animationEnd$.resolve()));return}const s=t[t.length-1],r=t[t.length-2],o=s.el,a=r.el;r.out=!0,o&&a&&await s.animation?.(o,a),i((l=[])=>l.filter(u=>u!==r))},[t]),{slides:t}},Bt=n=>D`<div
		${Vt(e=>Object.assign(n,{el:e}))}
		class="slide"
		style=${Ht(st.slide)}
	>
		${qe([n],()=>n.content??n.render?.(n))}
	</div>`,Wt=({slides:n})=>qe([n],()=>Mt(n,({id:e})=>e,Bt)),Jt=n=>Wt(Ut(n));customElements.define("cosmoz-slider",Le(Jt,{useShadowDOM:!1}));const Qt=at`
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
`,ce=D`
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="6"
		height="10"
		fill="none"
		viewBox="0 0 6 10"
	>
		<path stroke="currentColor" stroke-linecap="round" d="m1 9 4-4-4-4" />
	</svg>
`,Xt=({next:n,prev:e})=>D` <button
			class="button-nav prev"
			title="${B("Previous item")}"
			?disabled=${!e}
			slot="extra"
			@click=${e}
		>
			${ce}
		</button>
		<button
			title="${B("Next item")}"
			class="button-nav next"
			?disabled=${!n}
			slot="extra"
			@click=${n}
		>
			${ce}
		</button>`,Zt=n=>{if(!n)return U;const{pageNumber:e=-1,onPage:t}=n,i=n.totalPages??Math.ceil((n.totalAvailable??0)/(n.pageSize??0));return D` <div class="tabn-pagination">
		<button
			title="${B("Previous page")}"
			class="button-page page-prev"
			?disabled=${!(e>1)}
			@click=${s=>t(s.ctrlKey?1:e-1)}
		>
			${ce}
		</button>
		<button
			title="${B("Next page")}"
			class="button-page page-next"
			?disabled=${!(e<i)}
			@click=${s=>t(s.ctrlKey?i:e+1)}
		>
			${ce}
		</button>
	</div>`},es=({pagination:n,index:e,items:t,totalAvailable:i,nav:s})=>t.length<1?U:D`<div class="tabn-stats">
		${(()=>{if(n){const{pageNumber:a,pageSize:l}=n,u=l??t.length,f=((a??1)-1)*u+e+1,c=t.length<u?n.totalAvailable:(a??1)*u;return[f,c].join("-")}const r=s.index,o=s.items?.length;return[o!==t.length?[r<0?"?":r+1,o].join("/"):[e+1,t.length].join("-")]})()}
		${[B("of"),i??B("many")].join(" ")}
	</div>`;export{Xt as a,Qt as b,Zt as c,fe as e,ft as f,qe as i,es as r};
