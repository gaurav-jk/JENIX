(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3461],{4050:(ee,J,de)=>{"use strict";de(6876),de(6935)},6876:()=>{window.__Zone_disable_customElements=!0},6935:()=>{"use strict";const ee=globalThis;function J(n){return(ee.__Zone_symbol_prefix||"__zone_symbol__")+n}const Te=Object.getOwnPropertyDescriptor,ve=Object.defineProperty,Ce=Object.getPrototypeOf,ht=Object.create,dt=Array.prototype.slice,Me="addEventListener",Ze="removeEventListener",Ae=J(Me),je=J(Ze),ce="true",ae="false",be=J("");function He(n,r){return Zone.current.wrap(n,r)}function xe(n,r,i,t,s){return Zone.current.scheduleMacroTask(n,r,i,t,s)}const x=J,De=typeof window<"u",ge=De?window:void 0,K=De&&ge||globalThis,_t="removeAttribute";function Ge(n,r){for(let i=n.length-1;i>=0;i--)"function"==typeof n[i]&&(n[i]=He(n[i],r+"_"+i));return n}function ze(n){return!n||!1!==n.writable&&!("function"==typeof n.get&&typeof n.set>"u")}const Xe=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,Oe=!("nw"in K)&&typeof K.process<"u"&&"[object process]"===K.process.toString(),Ve=!Oe&&!Xe&&!(!De||!ge.HTMLElement),qe=typeof K.process<"u"&&"[object process]"===K.process.toString()&&!Xe&&!(!De||!ge.HTMLElement),Se={},Ye=function(n){if(!(n=n||K.event))return;let r=Se[n.type];r||(r=Se[n.type]=x("ON_PROPERTY"+n.type));const i=this||n.target||K,t=i[r];let s;return Ve&&i===ge&&"error"===n.type?(s=t&&t.call(this,n.message,n.filename,n.lineno,n.colno,n.error),!0===s&&n.preventDefault()):(s=t&&t.apply(this,arguments),null!=s&&!s&&n.preventDefault()),s};function $e(n,r,i){let t=Te(n,r);if(!t&&i&&Te(i,r)&&(t={enumerable:!0,configurable:!0}),!t||!t.configurable)return;const s=x("on"+r+"patched");if(n.hasOwnProperty(s)&&n[s])return;delete t.writable,delete t.value;const l=t.get,T=t.set,g=r.slice(2);let k=Se[g];k||(k=Se[g]=x("ON_PROPERTY"+g)),t.set=function(C){let p=this;!p&&n===K&&(p=K),p&&("function"==typeof p[k]&&p.removeEventListener(g,Ye),T&&T.call(p,null),p[k]=C,"function"==typeof C&&p.addEventListener(g,Ye,!1))},t.get=function(){let C=this;if(!C&&n===K&&(C=K),!C)return null;const p=C[k];if(p)return p;if(l){let Z=l.call(this);if(Z)return t.set.call(this,Z),"function"==typeof C[_t]&&C.removeAttribute(r),Z}return null},ve(n,r,t),n[s]=!0}function Ke(n,r,i){if(r)for(let t=0;t<r.length;t++)$e(n,"on"+r[t],i);else{const t=[];for(const s in n)"on"==s.slice(0,2)&&t.push(s);for(let s=0;s<t.length;s++)$e(n,t[s],i)}}const re=x("originalInstance");function Pe(n){const r=K[n];if(!r)return;K[x(n)]=r,K[n]=function(){const s=Ge(arguments,n);switch(s.length){case 0:this[re]=new r;break;case 1:this[re]=new r(s[0]);break;case 2:this[re]=new r(s[0],s[1]);break;case 3:this[re]=new r(s[0],s[1],s[2]);break;case 4:this[re]=new r(s[0],s[1],s[2],s[3]);break;default:throw new Error("Arg list too long.")}},ue(K[n],r);const i=new r(function(){});let t;for(t in i)"XMLHttpRequest"===n&&"responseBlob"===t||function(s){"function"==typeof i[s]?K[n].prototype[s]=function(){return this[re][s].apply(this[re],arguments)}:ve(K[n].prototype,s,{set:function(l){"function"==typeof l?(this[re][s]=He(l,n+"."+s),ue(this[re][s],l)):this[re][s]=l},get:function(){return this[re][s]}})}(t);for(t in r)"prototype"!==t&&r.hasOwnProperty(t)&&(K[n][t]=r[t])}function le(n,r,i){let t=n;for(;t&&!t.hasOwnProperty(r);)t=Ce(t);!t&&n[r]&&(t=n);const s=x(r);let l=null;if(t&&(!(l=t[s])||!t.hasOwnProperty(s))&&(l=t[s]=t[r],ze(t&&Te(t,r)))){const g=i(l,s,r);t[r]=function(){return g(this,arguments)},ue(t[r],l)}return l}function Tt(n,r,i){let t=null;function s(l){const T=l.data;return T.args[T.cbIdx]=function(){l.invoke.apply(this,arguments)},t.apply(T.target,T.args),l}t=le(n,r,l=>function(T,g){const k=i(T,g);return k.cbIdx>=0&&"function"==typeof g[k.cbIdx]?xe(k.name,g[k.cbIdx],k,s):l.apply(T,g)})}function ue(n,r){n[x("OriginalDelegate")]=r}let Je=!1,Be=!1;function pt(){if(Je)return Be;Je=!0;try{const n=ge.navigator.userAgent;(-1!==n.indexOf("MSIE ")||-1!==n.indexOf("Trident/")||-1!==n.indexOf("Edge/"))&&(Be=!0)}catch{}return Be}let pe=!1;if(typeof window<"u")try{const n=Object.defineProperty({},"passive",{get:function(){pe=!0}});window.addEventListener("test",n,n),window.removeEventListener("test",n,n)}catch{pe=!1}const yt={useG:!0},te={},Qe={},et=new RegExp("^"+be+"(\\w+)(true|false)$"),tt=x("propagationStopped");function nt(n,r){const i=(r?r(n):n)+ae,t=(r?r(n):n)+ce,s=be+i,l=be+t;te[n]={},te[n][ae]=s,te[n][ce]=l}function mt(n,r,i,t){const s=t&&t.add||Me,l=t&&t.rm||Ze,T=t&&t.listeners||"eventListeners",g=t&&t.rmAll||"removeAllListeners",k=x(s),C="."+s+":",p="prependListener",Z="."+p+":",w=function(P,d,U){if(P.isRemoved)return;const X=P.callback;let $;"object"==typeof X&&X.handleEvent&&(P.callback=y=>X.handleEvent(y),P.originalDelegate=X);try{P.invoke(P,d,[U])}catch(y){$=y}const F=P.options;return F&&"object"==typeof F&&F.once&&d[l].call(d,U.type,P.originalDelegate?P.originalDelegate:P.callback,F),$};function H(P,d,U){if(!(d=d||n.event))return;const X=P||d.target||n,$=X[te[d.type][U?ce:ae]];if($){const F=[];if(1===$.length){const y=w($[0],X,d);y&&F.push(y)}else{const y=$.slice();for(let W=0;W<y.length&&(!d||!0!==d[tt]);W++){const S=w(y[W],X,d);S&&F.push(S)}}if(1===F.length)throw F[0];for(let y=0;y<F.length;y++){const W=F[y];r.nativeScheduleMicroTask(()=>{throw W})}}}const z=function(P){return H(this,P,!1)},G=function(P){return H(this,P,!0)};function oe(P,d){if(!P)return!1;let U=!0;d&&void 0!==d.useG&&(U=d.useG);const X=d&&d.vh;let $=!0;d&&void 0!==d.chkDup&&($=d.chkDup);let F=!1;d&&void 0!==d.rt&&(F=d.rt);let y=P;for(;y&&!y.hasOwnProperty(s);)y=Ce(y);if(!y&&P[s]&&(y=P),!y||y[k])return!1;const W=d&&d.eventNameToString,S={},R=y[k]=y[s],v=y[x(l)]=y[l],D=y[x(T)]=y[T],Q=y[x(g)]=y[g];let q;d&&d.prepend&&(q=y[x(d.prepend)]=y[d.prepend]);const j=U?function(o){if(!S.isExisting)return R.call(S.target,S.eventName,S.capture?G:z,S.options)}:function(o){return R.call(S.target,S.eventName,o.invoke,S.options)},N=U?function(o){if(!o.isRemoved){const u=te[o.eventName];let m;u&&(m=u[o.capture?ce:ae]);const b=m&&o.target[m];if(b)for(let E=0;E<b.length;E++)if(b[E]===o){b.splice(E,1),o.isRemoved=!0,o.removeAbortListener&&(o.removeAbortListener(),o.removeAbortListener=null),0===b.length&&(o.allRemoved=!0,o.target[m]=null);break}}if(o.allRemoved)return v.call(o.target,o.eventName,o.capture?G:z,o.options)}:function(o){return v.call(o.target,o.eventName,o.invoke,o.options)},we=d&&d.diff?d.diff:function(o,u){const m=typeof u;return"function"===m&&o.callback===u||"object"===m&&o.originalDelegate===u},Ee=Zone[x("UNPATCHED_EVENTS")],Ie=n[x("PASSIVE_EVENTS")],a=function(o,u,m,b,E=!1,I=!1){return function(){const L=this||n;let M=arguments[0];d&&d.transferEventName&&(M=d.transferEventName(M));let V=arguments[1];if(!V)return o.apply(this,arguments);if(Oe&&"uncaughtException"===M)return o.apply(this,arguments);let B=!1;if("function"!=typeof V){if(!V.handleEvent)return o.apply(this,arguments);B=!0}if(X&&!X(o,V,L,arguments))return;const fe=pe&&!!Ie&&-1!==Ie.indexOf(M),ne=function f(o){if("object"==typeof o&&null!==o){const u={...o};return o.signal&&(u.signal=o.signal),u}return o}(function A(o,u){return!pe&&"object"==typeof o&&o?!!o.capture:pe&&u?"boolean"==typeof o?{capture:o,passive:!0}:o?"object"==typeof o&&!1!==o.passive?{...o,passive:!0}:o:{passive:!0}:o}(arguments[2],fe)),he=null==ne?void 0:ne.signal;if(null!=he&&he.aborted)return;if(Ee)for(let ie=0;ie<Ee.length;ie++)if(M===Ee[ie])return fe?o.call(L,M,V,ne):o.apply(this,arguments);const Fe=!!ne&&("boolean"==typeof ne||ne.capture),ct=!(!ne||"object"!=typeof ne)&&ne.once,Lt=Zone.current;let We=te[M];We||(nt(M,W),We=te[M]);const at=We[Fe?ce:ae];let Le,me=L[at],lt=!1;if(me){if(lt=!0,$)for(let ie=0;ie<me.length;ie++)if(we(me[ie],V))return}else me=L[at]=[];const ut=L.constructor.name,ft=Qe[ut];ft&&(Le=ft[M]),Le||(Le=ut+u+(W?W(M):M)),S.options=ne,ct&&(S.options.once=!1),S.target=L,S.capture=Fe,S.eventName=M,S.isExisting=lt;const Re=U?yt:void 0;Re&&(Re.taskData=S),he&&(S.options.signal=void 0);const se=Lt.scheduleEventTask(Le,V,Re,m,b);if(he){S.options.signal=he;const ie=()=>se.zone.cancelTask(se);o.call(he,"abort",ie,{once:!0}),se.removeAbortListener=()=>he.removeEventListener("abort",ie)}return S.target=null,Re&&(Re.taskData=null),ct&&(S.options.once=!0),!pe&&"boolean"==typeof se.options||(se.options=ne),se.target=L,se.capture=Fe,se.eventName=M,B&&(se.originalDelegate=V),I?me.unshift(se):me.push(se),E?L:void 0}};return y[s]=a(R,C,j,N,F),q&&(y[p]=a(q,Z,function(o){return q.call(S.target,S.eventName,o.invoke,S.options)},N,F,!0)),y[l]=function(){const o=this||n;let u=arguments[0];d&&d.transferEventName&&(u=d.transferEventName(u));const m=arguments[2],b=!!m&&("boolean"==typeof m||m.capture),E=arguments[1];if(!E)return v.apply(this,arguments);if(X&&!X(v,E,o,arguments))return;const I=te[u];let L;I&&(L=I[b?ce:ae]);const M=L&&o[L];if(M)for(let V=0;V<M.length;V++){const B=M[V];if(we(B,E))return M.splice(V,1),B.isRemoved=!0,0!==M.length||(B.allRemoved=!0,o[L]=null,b||"string"!=typeof u)||(o[be+"ON_PROPERTY"+u]=null),B.zone.cancelTask(B),F?o:void 0}return v.apply(this,arguments)},y[T]=function(){const o=this||n;let u=arguments[0];d&&d.transferEventName&&(u=d.transferEventName(u));const m=[],b=rt(o,W?W(u):u);for(let E=0;E<b.length;E++){const I=b[E];m.push(I.originalDelegate?I.originalDelegate:I.callback)}return m},y[g]=function(){const o=this||n;let u=arguments[0];if(u){d&&d.transferEventName&&(u=d.transferEventName(u));const m=te[u];if(m){const I=o[m[ae]],L=o[m[ce]];if(I){const M=I.slice();for(let V=0;V<M.length;V++){const B=M[V];this[l].call(this,u,B.originalDelegate?B.originalDelegate:B.callback,B.options)}}if(L){const M=L.slice();for(let V=0;V<M.length;V++){const B=M[V];this[l].call(this,u,B.originalDelegate?B.originalDelegate:B.callback,B.options)}}}}else{const m=Object.keys(o);for(let b=0;b<m.length;b++){const I=et.exec(m[b]);let L=I&&I[1];L&&"removeListener"!==L&&this[g].call(this,L)}this[g].call(this,"removeListener")}if(F)return this},ue(y[s],R),ue(y[l],v),Q&&ue(y[g],Q),D&&ue(y[T],D),!0}let Y=[];for(let P=0;P<i.length;P++)Y[P]=oe(i[P],t);return Y}function rt(n,r){if(!r){const l=[];for(let T in n){const g=et.exec(T);let k=g&&g[1];if(k&&(!r||k===r)){const C=n[T];if(C)for(let p=0;p<C.length;p++)l.push(C[p])}}return l}let i=te[r];i||(nt(r),i=te[r]);const t=n[i[ae]],s=n[i[ce]];return t?s?t.concat(s):t.slice():s?s.slice():[]}function kt(n,r){const i=n.Event;i&&i.prototype&&r.patchMethod(i.prototype,"stopImmediatePropagation",t=>function(s,l){s[tt]=!0,t&&t.apply(s,l)})}const Ne=x("zoneTask");function ye(n,r,i,t){let s=null,l=null;i+=t;const T={};function g(C){const p=C.data;return p.args[0]=function(){return C.invoke.apply(this,arguments)},p.handleId=s.apply(n,p.args),C}function k(C){return l.call(n,C.data.handleId)}s=le(n,r+=t,C=>function(p,Z){if("function"==typeof Z[0]){const w={isPeriodic:"Interval"===t,delay:"Timeout"===t||"Interval"===t?Z[1]||0:void 0,args:Z},H=Z[0];Z[0]=function(){try{return H.apply(this,arguments)}finally{w.isPeriodic||("number"==typeof w.handleId?delete T[w.handleId]:w.handleId&&(w.handleId[Ne]=null))}};const z=xe(r,Z[0],w,g,k);if(!z)return z;const G=z.data.handleId;return"number"==typeof G?T[G]=z:G&&(G[Ne]=z),G&&G.ref&&G.unref&&"function"==typeof G.ref&&"function"==typeof G.unref&&(z.ref=G.ref.bind(G),z.unref=G.unref.bind(G)),"number"==typeof G||G?G:z}return C.apply(n,Z)}),l=le(n,i,C=>function(p,Z){const w=Z[0];let H;"number"==typeof w?H=T[w]:(H=w&&w[Ne],H||(H=w)),H&&"string"==typeof H.type?"notScheduled"!==H.state&&(H.cancelFn&&H.data.isPeriodic||0===H.runCount)&&("number"==typeof w?delete T[w]:w&&(w[Ne]=null),H.zone.cancelTask(H)):C.apply(n,Z)})}function ot(n,r,i){if(!i||0===i.length)return r;const t=i.filter(l=>l.target===n);if(!t||0===t.length)return r;const s=t[0].ignoreProperties;return r.filter(l=>-1===s.indexOf(l))}function st(n,r,i,t){n&&Ke(n,ot(n,r,i),t)}function Ue(n){return Object.getOwnPropertyNames(n).filter(r=>r.startsWith("on")&&r.length>2).map(r=>r.substring(2))}function St(n,r,i,t,s){const l=Zone.__symbol__(t);if(r[l])return;const T=r[l]=r[t];r[t]=function(g,k,C){return k&&k.prototype&&s.forEach(function(p){const Z=`${i}.${t}::`+p,w=k.prototype;try{if(w.hasOwnProperty(p)){const H=n.ObjectGetOwnPropertyDescriptor(w,p);H&&H.value?(H.value=n.wrapWithCurrentZone(H.value,Z),n._redefineProperty(k.prototype,p,H)):w[p]&&(w[p]=n.wrapWithCurrentZone(w[p],Z))}else w[p]&&(w[p]=n.wrapWithCurrentZone(w[p],Z))}catch{}}),T.call(r,g,k,C)},n.attachOriginToPatched(r[t],T)}const it=function ke(){var r;const i=globalThis,t=!0===i[J("forceDuplicateZoneCheck")];if(i.Zone&&(t||"function"!=typeof i.Zone.__symbol__))throw new Error("Zone already loaded.");return null!==(r=i.Zone)&&void 0!==r||(i.Zone=function de(){const n=ee.performance;function r(A){n&&n.mark&&n.mark(A)}function i(A,_){n&&n.measure&&n.measure(A,_)}r("Zone");let t=(()=>{class _{static assertZonePatched(){if(ee.Promise!==S.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let e=_.current;for(;e.parent;)e=e.parent;return e}static get current(){return v.zone}static get currentTask(){return D}static __load_patch(e,h,O=!1){if(S.hasOwnProperty(e)){const j=!0===ee[J("forceDuplicateZoneCheck")];if(!O&&j)throw Error("Already loaded patch: "+e)}else if(!ee["__Zone_disable_"+e]){const j="Zone:"+e;r(j),S[e]=h(ee,_,R),i(j,j)}}get parent(){return this._parent}get name(){return this._name}constructor(e,h){this._parent=e,this._name=h?h.name||"unnamed":"<root>",this._properties=h&&h.properties||{},this._zoneDelegate=new l(this,this._parent&&this._parent._zoneDelegate,h)}get(e){const h=this.getZoneWith(e);if(h)return h._properties[e]}getZoneWith(e){let h=this;for(;h;){if(h._properties.hasOwnProperty(e))return h;h=h._parent}return null}fork(e){if(!e)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,e)}wrap(e,h){if("function"!=typeof e)throw new Error("Expecting function got: "+e);const O=this._zoneDelegate.intercept(this,e,h),j=this;return function(){return j.runGuarded(O,this,arguments,h)}}run(e,h,O,j){v={parent:v,zone:this};try{return this._zoneDelegate.invoke(this,e,h,O,j)}finally{v=v.parent}}runGuarded(e,h=null,O,j){v={parent:v,zone:this};try{try{return this._zoneDelegate.invoke(this,e,h,O,j)}catch(N){if(this._zoneDelegate.handleError(this,N))throw N}}finally{v=v.parent}}runTask(e,h,O){if(e.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(e.zone||oe).name+"; Execution: "+this.name+")");if(e.state===Y&&(e.type===W||e.type===y))return;const j=e.state!=U;j&&e._transitionTo(U,d),e.runCount++;const N=D;D=e,v={parent:v,zone:this};try{e.type==y&&e.data&&!e.data.isPeriodic&&(e.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,e,h,O)}catch(_e){if(this._zoneDelegate.handleError(this,_e))throw _e}}finally{e.state!==Y&&e.state!==$&&(e.type==W||e.data&&e.data.isPeriodic?j&&e._transitionTo(d,U):(e.runCount=0,this._updateTaskCount(e,-1),j&&e._transitionTo(Y,U,Y))),v=v.parent,D=N}}scheduleTask(e){if(e.zone&&e.zone!==this){let O=this;for(;O;){if(O===e.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${e.zone.name}`);O=O.parent}}e._transitionTo(P,Y);const h=[];e._zoneDelegates=h,e._zone=this;try{e=this._zoneDelegate.scheduleTask(this,e)}catch(O){throw e._transitionTo($,P,Y),this._zoneDelegate.handleError(this,O),O}return e._zoneDelegates===h&&this._updateTaskCount(e,1),e.state==P&&e._transitionTo(d,P),e}scheduleMicroTask(e,h,O,j){return this.scheduleTask(new T(F,e,h,O,j,void 0))}scheduleMacroTask(e,h,O,j,N){return this.scheduleTask(new T(y,e,h,O,j,N))}scheduleEventTask(e,h,O,j,N){return this.scheduleTask(new T(W,e,h,O,j,N))}cancelTask(e){if(e.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(e.zone||oe).name+"; Execution: "+this.name+")");if(e.state===d||e.state===U){e._transitionTo(X,d,U);try{this._zoneDelegate.cancelTask(this,e)}catch(h){throw e._transitionTo($,X),this._zoneDelegate.handleError(this,h),h}return this._updateTaskCount(e,-1),e._transitionTo(Y,X),e.runCount=0,e}}_updateTaskCount(e,h){const O=e._zoneDelegates;-1==h&&(e._zoneDelegates=null);for(let j=0;j<O.length;j++)O[j]._updateTaskCount(e.type,h)}}return _.__symbol__=J,_})();const s={name:"",onHasTask:(A,_,c,e)=>A.hasTask(c,e),onScheduleTask:(A,_,c,e)=>A.scheduleTask(c,e),onInvokeTask:(A,_,c,e,h,O)=>A.invokeTask(c,e,h,O),onCancelTask:(A,_,c,e)=>A.cancelTask(c,e)};class l{get zone(){return this._zone}constructor(_,c,e){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this._zone=_,this._parentDelegate=c,this._forkZS=e&&(e&&e.onFork?e:c._forkZS),this._forkDlgt=e&&(e.onFork?c:c._forkDlgt),this._forkCurrZone=e&&(e.onFork?this._zone:c._forkCurrZone),this._interceptZS=e&&(e.onIntercept?e:c._interceptZS),this._interceptDlgt=e&&(e.onIntercept?c:c._interceptDlgt),this._interceptCurrZone=e&&(e.onIntercept?this._zone:c._interceptCurrZone),this._invokeZS=e&&(e.onInvoke?e:c._invokeZS),this._invokeDlgt=e&&(e.onInvoke?c:c._invokeDlgt),this._invokeCurrZone=e&&(e.onInvoke?this._zone:c._invokeCurrZone),this._handleErrorZS=e&&(e.onHandleError?e:c._handleErrorZS),this._handleErrorDlgt=e&&(e.onHandleError?c:c._handleErrorDlgt),this._handleErrorCurrZone=e&&(e.onHandleError?this._zone:c._handleErrorCurrZone),this._scheduleTaskZS=e&&(e.onScheduleTask?e:c._scheduleTaskZS),this._scheduleTaskDlgt=e&&(e.onScheduleTask?c:c._scheduleTaskDlgt),this._scheduleTaskCurrZone=e&&(e.onScheduleTask?this._zone:c._scheduleTaskCurrZone),this._invokeTaskZS=e&&(e.onInvokeTask?e:c._invokeTaskZS),this._invokeTaskDlgt=e&&(e.onInvokeTask?c:c._invokeTaskDlgt),this._invokeTaskCurrZone=e&&(e.onInvokeTask?this._zone:c._invokeTaskCurrZone),this._cancelTaskZS=e&&(e.onCancelTask?e:c._cancelTaskZS),this._cancelTaskDlgt=e&&(e.onCancelTask?c:c._cancelTaskDlgt),this._cancelTaskCurrZone=e&&(e.onCancelTask?this._zone:c._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;const h=e&&e.onHasTask;(h||c&&c._hasTaskZS)&&(this._hasTaskZS=h?e:s,this._hasTaskDlgt=c,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=this._zone,e.onScheduleTask||(this._scheduleTaskZS=s,this._scheduleTaskDlgt=c,this._scheduleTaskCurrZone=this._zone),e.onInvokeTask||(this._invokeTaskZS=s,this._invokeTaskDlgt=c,this._invokeTaskCurrZone=this._zone),e.onCancelTask||(this._cancelTaskZS=s,this._cancelTaskDlgt=c,this._cancelTaskCurrZone=this._zone))}fork(_,c){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,_,c):new t(_,c)}intercept(_,c,e){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,_,c,e):c}invoke(_,c,e,h,O){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,_,c,e,h,O):c.apply(e,h)}handleError(_,c){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,_,c)}scheduleTask(_,c){let e=c;if(this._scheduleTaskZS)this._hasTaskZS&&e._zoneDelegates.push(this._hasTaskDlgtOwner),e=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,_,c),e||(e=c);else if(c.scheduleFn)c.scheduleFn(c);else{if(c.type!=F)throw new Error("Task is missing scheduleFn.");z(c)}return e}invokeTask(_,c,e,h){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,_,c,e,h):c.callback.apply(e,h)}cancelTask(_,c){let e;if(this._cancelTaskZS)e=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,_,c);else{if(!c.cancelFn)throw Error("Task is not cancelable");e=c.cancelFn(c)}return e}hasTask(_,c){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,_,c)}catch(e){this.handleError(_,e)}}_updateTaskCount(_,c){const e=this._taskCounts,h=e[_],O=e[_]=h+c;if(O<0)throw new Error("More tasks executed then were scheduled.");0!=h&&0!=O||this.hasTask(this._zone,{microTask:e.microTask>0,macroTask:e.macroTask>0,eventTask:e.eventTask>0,change:_})}}class T{constructor(_,c,e,h,O,j){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=_,this.source=c,this.data=h,this.scheduleFn=O,this.cancelFn=j,!e)throw new Error("callback is not defined");this.callback=e;const N=this;this.invoke=_===W&&h&&h.useG?T.invokeTask:function(){return T.invokeTask.call(ee,N,this,arguments)}}static invokeTask(_,c,e){_||(_=this),Q++;try{return _.runCount++,_.zone.runTask(_,c,e)}finally{1==Q&&G(),Q--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(Y,P)}_transitionTo(_,c,e){if(this._state!==c&&this._state!==e)throw new Error(`${this.type} '${this.source}': can not transition to '${_}', expecting state '${c}'${e?" or '"+e+"'":""}, was '${this._state}'.`);this._state=_,_==Y&&(this._zoneDelegates=null)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}const g=J("setTimeout"),k=J("Promise"),C=J("then");let w,p=[],Z=!1;function H(A){if(w||ee[k]&&(w=ee[k].resolve(0)),w){let _=w[C];_||(_=w.then),_.call(w,A)}else ee[g](A,0)}function z(A){0===Q&&0===p.length&&H(G),A&&p.push(A)}function G(){if(!Z){for(Z=!0;p.length;){const A=p;p=[];for(let _=0;_<A.length;_++){const c=A[_];try{c.zone.runTask(c,null,null)}catch(e){R.onUnhandledError(e)}}}R.microtaskDrainDone(),Z=!1}}const oe={name:"NO ZONE"},Y="notScheduled",P="scheduling",d="scheduled",U="running",X="canceling",$="unknown",F="microTask",y="macroTask",W="eventTask",S={},R={symbol:J,currentZoneFrame:()=>v,onUnhandledError:q,microtaskDrainDone:q,scheduleMicroTask:z,showUncaughtError:()=>!t[J("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:q,patchMethod:()=>q,bindArguments:()=>[],patchThen:()=>q,patchMacroTask:()=>q,patchEventPrototype:()=>q,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>q,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>q,wrapWithCurrentZone:()=>q,filterProperties:()=>[],attachOriginToPatched:()=>q,_redefineProperty:()=>q,patchCallbacks:()=>q,nativeScheduleMicroTask:H};let v={parent:null,zone:new t(null,null)},D=null,Q=0;function q(){}return i("Zone","Zone"),t}()),i.Zone}();(function It(n){(function Dt(n){n.__load_patch("ZoneAwarePromise",(r,i,t)=>{const s=Object.getOwnPropertyDescriptor,l=Object.defineProperty,g=t.symbol,k=[],C=!1!==r[g("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],p=g("Promise"),Z=g("then"),w="__creationTrace__";t.onUnhandledError=f=>{if(t.showUncaughtError()){const a=f&&f.rejection;a?console.error("Unhandled Promise rejection:",a instanceof Error?a.message:a,"; Zone:",f.zone.name,"; Task:",f.task&&f.task.source,"; Value:",a,a instanceof Error?a.stack:void 0):console.error(f)}},t.microtaskDrainDone=()=>{for(;k.length;){const f=k.shift();try{f.zone.runGuarded(()=>{throw f.throwOriginal?f.rejection:f})}catch(a){z(a)}}};const H=g("unhandledPromiseRejectionHandler");function z(f){t.onUnhandledError(f);try{const a=i[H];"function"==typeof a&&a.call(this,f)}catch{}}function G(f){return f&&f.then}function oe(f){return f}function Y(f){return N.reject(f)}const P=g("state"),d=g("value"),U=g("finally"),X=g("parentPromiseValue"),$=g("parentPromiseState"),F="Promise.then",y=null,W=!0,S=!1,R=0;function v(f,a){return o=>{try{A(f,a,o)}catch(u){A(f,!1,u)}}}const D=function(){let f=!1;return function(o){return function(){f||(f=!0,o.apply(null,arguments))}}},Q="Promise resolved with itself",q=g("currentTaskTrace");function A(f,a,o){const u=D();if(f===o)throw new TypeError(Q);if(f[P]===y){let m=null;try{("object"==typeof o||"function"==typeof o)&&(m=o&&o.then)}catch(b){return u(()=>{A(f,!1,b)})(),f}if(a!==S&&o instanceof N&&o.hasOwnProperty(P)&&o.hasOwnProperty(d)&&o[P]!==y)c(o),A(f,o[P],o[d]);else if(a!==S&&"function"==typeof m)try{m.call(o,u(v(f,a)),u(v(f,!1)))}catch(b){u(()=>{A(f,!1,b)})()}else{f[P]=a;const b=f[d];if(f[d]=o,f[U]===U&&a===W&&(f[P]=f[$],f[d]=f[X]),a===S&&o instanceof Error){const E=i.currentTask&&i.currentTask.data&&i.currentTask.data[w];E&&l(o,q,{configurable:!0,enumerable:!1,writable:!0,value:E})}for(let E=0;E<b.length;)e(f,b[E++],b[E++],b[E++],b[E++]);if(0==b.length&&a==S){f[P]=R;let E=o;try{throw new Error("Uncaught (in promise): "+function T(f){return f&&f.toString===Object.prototype.toString?(f.constructor&&f.constructor.name||"")+": "+JSON.stringify(f):f?f.toString():Object.prototype.toString.call(f)}(o)+(o&&o.stack?"\n"+o.stack:""))}catch(I){E=I}C&&(E.throwOriginal=!0),E.rejection=o,E.promise=f,E.zone=i.current,E.task=i.currentTask,k.push(E),t.scheduleMicroTask()}}}return f}const _=g("rejectionHandledHandler");function c(f){if(f[P]===R){try{const a=i[_];a&&"function"==typeof a&&a.call(this,{rejection:f[d],promise:f})}catch{}f[P]=S;for(let a=0;a<k.length;a++)f===k[a].promise&&k.splice(a,1)}}function e(f,a,o,u,m){c(f);const b=f[P],E=b?"function"==typeof u?u:oe:"function"==typeof m?m:Y;a.scheduleMicroTask(F,()=>{try{const I=f[d],L=!!o&&U===o[U];L&&(o[X]=I,o[$]=b);const M=a.run(E,void 0,L&&E!==Y&&E!==oe?[]:[I]);A(o,!0,M)}catch(I){A(o,!1,I)}},o)}const O=function(){},j=r.AggregateError;class N{static toString(){return"function ZoneAwarePromise() { [native code] }"}static resolve(a){return a instanceof N?a:A(new this(null),W,a)}static reject(a){return A(new this(null),S,a)}static withResolvers(){const a={};return a.promise=new N((o,u)=>{a.resolve=o,a.reject=u}),a}static any(a){if(!a||"function"!=typeof a[Symbol.iterator])return Promise.reject(new j([],"All promises were rejected"));const o=[];let u=0;try{for(let E of a)u++,o.push(N.resolve(E))}catch{return Promise.reject(new j([],"All promises were rejected"))}if(0===u)return Promise.reject(new j([],"All promises were rejected"));let m=!1;const b=[];return new N((E,I)=>{for(let L=0;L<o.length;L++)o[L].then(M=>{m||(m=!0,E(M))},M=>{b.push(M),u--,0===u&&(m=!0,I(new j(b,"All promises were rejected")))})})}static race(a){let o,u,m=new this((I,L)=>{o=I,u=L});function b(I){o(I)}function E(I){u(I)}for(let I of a)G(I)||(I=this.resolve(I)),I.then(b,E);return m}static all(a){return N.allWithCallback(a)}static allSettled(a){return(this&&this.prototype instanceof N?this:N).allWithCallback(a,{thenCallback:u=>({status:"fulfilled",value:u}),errorCallback:u=>({status:"rejected",reason:u})})}static allWithCallback(a,o){let u,m,b=new this((M,V)=>{u=M,m=V}),E=2,I=0;const L=[];for(let M of a){G(M)||(M=this.resolve(M));const V=I;try{M.then(B=>{L[V]=o?o.thenCallback(B):B,E--,0===E&&u(L)},B=>{o?(L[V]=o.errorCallback(B),E--,0===E&&u(L)):m(B)})}catch(B){m(B)}E++,I++}return E-=2,0===E&&u(L),b}constructor(a){const o=this;if(!(o instanceof N))throw new Error("Must be an instanceof Promise.");o[P]=y,o[d]=[];try{const u=D();a&&a(u(v(o,W)),u(v(o,S)))}catch(u){A(o,!1,u)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return N}then(a,o){var u;let m=null===(u=this.constructor)||void 0===u?void 0:u[Symbol.species];(!m||"function"!=typeof m)&&(m=this.constructor||N);const b=new m(O),E=i.current;return this[P]==y?this[d].push(E,b,a,o):e(this,E,b,a,o),b}catch(a){return this.then(null,a)}finally(a){var o;let u=null===(o=this.constructor)||void 0===o?void 0:o[Symbol.species];(!u||"function"!=typeof u)&&(u=N);const m=new u(O);m[U]=U;const b=i.current;return this[P]==y?this[d].push(b,m,a,a):e(this,b,m,a,a),m}}N.resolve=N.resolve,N.reject=N.reject,N.race=N.race,N.all=N.all;const _e=r[p]=r.Promise;r.Promise=N;const we=g("thenPatched");function Ee(f){const a=f.prototype,o=s(a,"then");if(o&&(!1===o.writable||!o.configurable))return;const u=a.then;a[Z]=u,f.prototype.then=function(m,b){return new N((I,L)=>{u.call(this,I,L)}).then(m,b)},f[we]=!0}return t.patchThen=Ee,_e&&(Ee(_e),le(r,"fetch",f=>function Ie(f){return function(a,o){let u=f.apply(a,o);if(u instanceof N)return u;let m=u.constructor;return m[we]||Ee(m),u}}(f))),Promise[i.__symbol__("uncaughtPromiseErrors")]=k,N})})(n),function Ot(n){n.__load_patch("toString",r=>{const i=Function.prototype.toString,t=x("OriginalDelegate"),s=x("Promise"),l=x("Error"),T=function(){if("function"==typeof this){const p=this[t];if(p)return"function"==typeof p?i.call(p):Object.prototype.toString.call(p);if(this===Promise){const Z=r[s];if(Z)return i.call(Z)}if(this===Error){const Z=r[l];if(Z)return i.call(Z)}}return i.call(this)};T[t]=i,Function.prototype.toString=T;const g=Object.prototype.toString;Object.prototype.toString=function(){return"function"==typeof Promise&&this instanceof Promise?"[object Promise]":g.call(this)}})}(n),function Nt(n){n.__load_patch("util",(r,i,t)=>{const s=Ue(r);t.patchOnProperties=Ke,t.patchMethod=le,t.bindArguments=Ge,t.patchMacroTask=Tt;const l=i.__symbol__("BLACK_LISTED_EVENTS"),T=i.__symbol__("UNPATCHED_EVENTS");r[T]&&(r[l]=r[T]),r[l]&&(i[l]=i[T]=r[l]),t.patchEventPrototype=kt,t.patchEventTarget=mt,t.isIEOrEdge=pt,t.ObjectDefineProperty=ve,t.ObjectGetOwnPropertyDescriptor=Te,t.ObjectCreate=ht,t.ArraySlice=dt,t.patchClass=Pe,t.wrapWithCurrentZone=He,t.filterProperties=ot,t.attachOriginToPatched=ue,t._redefineProperty=Object.defineProperty,t.patchCallbacks=St,t.getGlobalObjects=()=>({globalSources:Qe,zoneSymbolEventNames:te,eventNames:s,isBrowser:Ve,isMix:qe,isNode:Oe,TRUE_STR:ce,FALSE_STR:ae,ZONE_SYMBOL_PREFIX:be,ADD_EVENT_LISTENER_STR:Me,REMOVE_EVENT_LISTENER_STR:Ze})})}(n)})(it),function Ct(n){n.__load_patch("legacy",r=>{const i=r[n.__symbol__("legacyPatch")];i&&i()}),n.__load_patch("timers",r=>{const i="set",t="clear";ye(r,i,t,"Timeout"),ye(r,i,t,"Interval"),ye(r,i,t,"Immediate")}),n.__load_patch("requestAnimationFrame",r=>{ye(r,"request","cancel","AnimationFrame"),ye(r,"mozRequest","mozCancel","AnimationFrame"),ye(r,"webkitRequest","webkitCancel","AnimationFrame")}),n.__load_patch("blocking",(r,i)=>{const t=["alert","prompt","confirm"];for(let s=0;s<t.length;s++)le(r,t[s],(T,g,k)=>function(C,p){return i.current.run(T,r,p,k)})}),n.__load_patch("EventTarget",(r,i,t)=>{(function wt(n,r){r.patchEventPrototype(n,r)})(r,t),function Pt(n,r){if(Zone[r.symbol("patchEventTarget")])return;const{eventNames:i,zoneSymbolEventNames:t,TRUE_STR:s,FALSE_STR:l,ZONE_SYMBOL_PREFIX:T}=r.getGlobalObjects();for(let k=0;k<i.length;k++){const C=i[k],w=T+(C+l),H=T+(C+s);t[C]={},t[C][l]=w,t[C][s]=H}const g=n.EventTarget;g&&g.prototype&&r.patchEventTarget(n,r,[g&&g.prototype])}(r,t);const s=r.XMLHttpRequestEventTarget;s&&s.prototype&&t.patchEventTarget(r,t,[s.prototype])}),n.__load_patch("MutationObserver",(r,i,t)=>{Pe("MutationObserver"),Pe("WebKitMutationObserver")}),n.__load_patch("IntersectionObserver",(r,i,t)=>{Pe("IntersectionObserver")}),n.__load_patch("FileReader",(r,i,t)=>{Pe("FileReader")}),n.__load_patch("on_property",(r,i,t)=>{!function Rt(n,r){if(Oe&&!qe||Zone[n.symbol("patchEvents")])return;const i=r.__Zone_ignore_on_properties;let t=[];if(Ve){const s=window;t=t.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);const l=function gt(){try{const n=ge.navigator.userAgent;if(-1!==n.indexOf("MSIE ")||-1!==n.indexOf("Trident/"))return!0}catch{}return!1}()?[{target:s,ignoreProperties:["error"]}]:[];st(s,Ue(s),i&&i.concat(l),Ce(s))}t=t.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let s=0;s<t.length;s++){const l=r[t[s]];l&&l.prototype&&st(l.prototype,Ue(l.prototype),i)}}(t,r)}),n.__load_patch("customElements",(r,i,t)=>{!function bt(n,r){const{isBrowser:i,isMix:t}=r.getGlobalObjects();(i||t)&&n.customElements&&"customElements"in n&&r.patchCallbacks(r,n.customElements,"customElements","define",["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback","formAssociatedCallback","formDisabledCallback","formResetCallback","formStateRestoreCallback"])}(r,t)}),n.__load_patch("XHR",(r,i)=>{!function C(p){const Z=p.XMLHttpRequest;if(!Z)return;const w=Z.prototype;let z=w[Ae],G=w[je];if(!z){const R=p.XMLHttpRequestEventTarget;if(R){const v=R.prototype;z=v[Ae],G=v[je]}}const oe="readystatechange",Y="scheduled";function P(R){const v=R.data,D=v.target;D[T]=!1,D[k]=!1;const Q=D[l];z||(z=D[Ae],G=D[je]),Q&&G.call(D,oe,Q);const q=D[l]=()=>{if(D.readyState===D.DONE)if(!v.aborted&&D[T]&&R.state===Y){const _=D[i.__symbol__("loadfalse")];if(0!==D.status&&_&&_.length>0){const c=R.invoke;R.invoke=function(){const e=D[i.__symbol__("loadfalse")];for(let h=0;h<e.length;h++)e[h]===R&&e.splice(h,1);!v.aborted&&R.state===Y&&c.call(R)},_.push(R)}else R.invoke()}else!v.aborted&&!1===D[T]&&(D[k]=!0)};return z.call(D,oe,q),D[t]||(D[t]=R),W.apply(D,v.args),D[T]=!0,R}function d(){}function U(R){const v=R.data;return v.aborted=!0,S.apply(v.target,v.args)}const X=le(w,"open",()=>function(R,v){return R[s]=0==v[2],R[g]=v[1],X.apply(R,v)}),F=x("fetchTaskAborting"),y=x("fetchTaskScheduling"),W=le(w,"send",()=>function(R,v){if(!0===i.current[y]||R[s])return W.apply(R,v);{const D={target:R,url:R[g],isPeriodic:!1,args:v,aborted:!1},Q=xe("XMLHttpRequest.send",d,D,P,U);R&&!0===R[k]&&!D.aborted&&Q.state===Y&&Q.invoke()}}),S=le(w,"abort",()=>function(R,v){const D=function H(R){return R[t]}(R);if(D&&"string"==typeof D.type){if(null==D.cancelFn||D.data&&D.data.aborted)return;D.zone.cancelTask(D)}else if(!0===i.current[F])return S.apply(R,v)})}(r);const t=x("xhrTask"),s=x("xhrSync"),l=x("xhrListener"),T=x("xhrScheduled"),g=x("xhrURL"),k=x("xhrErrorBeforeScheduled")}),n.__load_patch("geolocation",r=>{r.navigator&&r.navigator.geolocation&&function Et(n,r){const i=n.constructor.name;for(let t=0;t<r.length;t++){const s=r[t],l=n[s];if(l){if(!ze(Te(n,s)))continue;n[s]=(g=>{const k=function(){return g.apply(this,Ge(arguments,i+"."+s))};return ue(k,g),k})(l)}}}(r.navigator.geolocation,["getCurrentPosition","watchPosition"])}),n.__load_patch("PromiseRejectionEvent",(r,i)=>{function t(s){return function(l){rt(r,s).forEach(g=>{const k=r.PromiseRejectionEvent;if(k){const C=new k(s,{promise:l.promise,reason:l.rejection});g.invoke(C)}})}}r.PromiseRejectionEvent&&(i[x("unhandledPromiseRejectionHandler")]=t("unhandledrejection"),i[x("rejectionHandledHandler")]=t("rejectionhandled"))}),n.__load_patch("queueMicrotask",(r,i,t)=>{!function vt(n,r){r.patchMethod(n,"queueMicrotask",i=>function(t,s){Zone.current.scheduleMicroTask("queueMicrotask",s[0])})}(r,t)})}(it)}},ee=>{ee(ee.s=4050)}]);