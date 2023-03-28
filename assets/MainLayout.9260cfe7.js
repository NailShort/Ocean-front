import{v as J,c as s,h as u,x as ge,Q as y,i as Le,y as Z,z as he,g as re,A as st,B as He,C as je,D as ze,r as Q,E as be,G as De,H as Ne,I as ie,J as ce,o as ut,K as pe,R as ct,L as We,M as ke,N as dt,O as ft,P as vt,S as Ie,U as bt,w as D,V as Ce,W as Oe,X as gt,Y as ht,Z as mt,_ as _t,$ as yt,a0 as wt,a1 as Fe,a2 as xt,a3 as qt,a4 as Tt,a5 as Ct,a6 as St,k as p,a7 as W,a8 as q,a9 as kt,d as n,m as I,aa as F,s as K,ab as Lt,ac as z,t as It,u as Bt}from"./index.ea07f8f0.js";import{Q as Rt}from"./QAvatar.4b925848.js";import{Q as Ke,a as $t,b as Pt,c as At,d as Qt,e as Vt,f as Mt,g as Ot}from"./QLayout.9a6971ff.js";import{r as Ft}from"./rtl.b51694b1.js";import{Q as Et,a as Se}from"./selection.75382af0.js";import{Q as Ee}from"./QItemLabel.15289012.js";import{_ as Ge}from"./LOGO-white.5dcb4637.js";import{_ as Ht}from"./plugin-vue_export-helper.21dcd24c.js";import"./touch.70a9dd44.js";import"./format.2a3572e1.js";var jt=J({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:g}){const c=s(()=>{const a=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(t=>e[t]===!0).map(t=>`q-btn-group--${t}`).join(" ");return`q-btn-group row no-wrap${a.length>0?" "+a:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>u("div",{class:c.value},ge(g.default))}});const zt=["top","right","bottom","left"],Ue={type:{type:String,default:"a"},outline:Boolean,push:Boolean,flat:Boolean,unelevated:Boolean,color:String,textColor:String,glossy:Boolean,square:Boolean,padding:String,label:{type:[String,Number],default:""},labelPosition:{type:String,default:"right",validator:e=>zt.includes(e)},externalLabel:Boolean,hideLabel:{type:Boolean},labelClass:[Array,String,Object],labelStyle:[Array,String,Object],disable:Boolean,tabindex:[Number,String]};function Ye(e,g){return{formClass:s(()=>`q-fab--form-${e.square===!0?"square":"rounded"}`),stacked:s(()=>e.externalLabel===!1&&["top","bottom"].includes(e.labelPosition)),labelProps:s(()=>{if(e.externalLabel===!0){const c=e.hideLabel===null?g.value===!1:e.hideLabel;return{action:"push",data:{class:[e.labelClass,`q-fab__label q-tooltip--style q-fab__label--external q-fab__label--external-${e.labelPosition}`+(c===!0?" q-fab__label--external-hidden":"")],style:e.labelStyle}}}return{action:["left","top"].includes(e.labelPosition)?"unshift":"push",data:{class:[e.labelClass,`q-fab__label q-fab__label--internal q-fab__label--internal-${e.labelPosition}`+(e.hideLabel===!0?" q-fab__label--internal-hidden":"")],style:e.labelStyle}}})}}const Xe={start:"self-end",center:"self-center",end:"self-start"},Dt=Object.keys(Xe);var ve=J({name:"QFabAction",props:{...Ue,icon:{type:String,default:""},anchor:{type:String,validator:e=>Dt.includes(e)},to:[String,Object],replace:Boolean},emits:["click"],setup(e,{slots:g,emit:c}){const a=Le(He,()=>({showing:{value:!0},onChildClick:st})),{formClass:t,labelProps:v}=Ye(e,a.showing),m=s(()=>{const h=Xe[e.anchor];return t.value+(h!==void 0?` ${h}`:"")}),S=s(()=>e.disable===!0||a.showing.value!==!0);function k(h){a.onChildClick(h),c("click",h)}function B(){const h=[];return g.icon!==void 0?h.push(g.icon()):e.icon!==""&&h.push(u(Z,{name:e.icon})),(e.label!==""||g.label!==void 0)&&h[v.value.action](u("div",v.value.data,g.label!==void 0?g.label():[e.label])),he(g.default,h)}const L=re();return Object.assign(L.proxy,{click:k}),()=>u(y,{class:m.value,...e,noWrap:!0,stack:e.stacked,icon:void 0,label:void 0,noCaps:!0,fabMini:!0,disable:S.value,onClick:k},B)}});const Nt=["up","right","down","left"],pt=["left","center","right"];var Wt=J({name:"QFab",props:{...Ue,...je,icon:String,activeIcon:String,hideIcon:Boolean,hideLabel:{default:null},direction:{type:String,default:"right",validator:e=>Nt.includes(e)},persistent:Boolean,verticalActionsAlign:{type:String,default:"center",validator:e=>pt.includes(e)}},emits:ze,setup(e,{slots:g}){const c=Q(null),a=Q(e.modelValue===!0),t=be(),{proxy:{$q:v}}=re(),{formClass:m,labelProps:S}=Ye(e,a),k=s(()=>e.persistent!==!0),{hide:B,toggle:L}=De({showing:a,hideOnRouteChange:k}),h=s(()=>({opened:a.value})),R=s(()=>`q-fab z-fab row inline justify-center q-fab--align-${e.verticalActionsAlign} ${m.value}`+(a.value===!0?" q-fab--opened":" q-fab--closed")),V=s(()=>`q-fab__actions flex no-wrap inline q-fab__actions--${e.direction} q-fab__actions--${a.value===!0?"opened":"closed"}`),O=s(()=>{const x={id:t,role:"menu"};return a.value!==!0&&(x["aria-hidden"]="true"),x}),i=s(()=>`q-fab__icon-holder  q-fab__icon-holder--${a.value===!0?"opened":"closed"}`);function T(x,d){const $=g[x],r=`q-fab__${x} absolute-full`;return $===void 0?u(Z,{class:r,name:e[d]||v.iconSet.fab[d]}):u("div",{class:r},$(h.value))}function M(){const x=[];return e.hideIcon!==!0&&x.push(u("div",{class:i.value},[T("icon","icon"),T("active-icon","activeIcon")])),(e.label!==""||g.label!==void 0)&&x[S.value.action](u("div",S.value.data,g.label!==void 0?g.label(h.value):[e.label])),he(g.tooltip,x)}return Ne(He,{showing:a,onChildClick(x){B(x),c.value!==null&&c.value.$el.focus()}}),()=>u("div",{class:R.value},[u(y,{ref:c,class:m.value,...e,noWrap:!0,stack:e.stacked,align:void 0,icon:void 0,label:void 0,noCaps:!0,fab:!0,"aria-expanded":a.value===!0?"true":"false","aria-haspopup":"true","aria-controls":t,onClick:L},M),u("div",{class:V.value,...O.value},ge(g.default))])}});let Kt=0;const Gt=["click","keydown"],Ut={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${Kt++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function Yt(e,g,c,a){const t=Le(We,ie);if(t===ie)return console.error("QTab/QRouteTab component needs to be child of QTabs"),ie;const{proxy:v}=re(),m=Q(null),S=Q(null),k=Q(null),B=s(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),L=s(()=>t.currentModel.value===e.name),h=s(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(L.value===!0?" q-tab--active"+(t.tabProps.value.activeClass?" "+t.tabProps.value.activeClass:"")+(t.tabProps.value.activeColor?` text-${t.tabProps.value.activeColor}`:"")+(t.tabProps.value.activeBgColor?` bg-${t.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&t.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||t.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(a!==void 0?a.linkClass.value:"")),R=s(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(t.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),V=s(()=>e.disable===!0||t.hasFocus.value===!0||L.value===!1&&t.hasActiveTab.value===!0?-1:e.tabindex||0);function O(d,$){if($!==!0&&m.value!==null&&m.value.focus(),e.disable===!0){a!==void 0&&a.hasRouterLink.value===!0&&ke(d);return}if(a===void 0){t.updateModel({name:e.name}),c("click",d);return}if(a.hasRouterLink.value===!0){const r=(w={})=>{let E;const N=w.to===void 0||vt(w.to,e.to)===!0?t.avoidRouteWatcher=be():null;return a.navigateToRouterLink(d,{...w,returnRouterError:!0}).catch(G=>{E=G}).then(G=>{if(N===t.avoidRouteWatcher&&(t.avoidRouteWatcher=!1,E===void 0&&(G===void 0||G.message.startsWith("Avoided redundant navigation")===!0)&&t.updateModel({name:e.name})),w.returnRouterError===!0)return E!==void 0?Promise.reject(E):G})};c("click",d,r),d.defaultPrevented!==!0&&r();return}c("click",d)}function i(d){dt(d,[13,32])?O(d,!0):ft(d)!==!0&&d.keyCode>=35&&d.keyCode<=40&&d.altKey!==!0&&d.metaKey!==!0&&t.onKbdNavigate(d.keyCode,v.$el)===!0&&ke(d),c("keydown",d)}function T(){const d=t.tabProps.value.narrowIndicator,$=[],r=u("div",{ref:k,class:["q-tab__indicator",t.tabProps.value.indicatorClass]});e.icon!==void 0&&$.push(u(Z,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&$.push(u("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&$.push(e.alertIcon!==void 0?u(Z,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):u("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),d===!0&&$.push(r);const w=[u("div",{class:"q-focus-helper",tabindex:-1,ref:m}),u("div",{class:R.value},he(g.default,$))];return d===!1&&w.push(r),w}const M={name:s(()=>e.name),rootRef:S,tabIndicatorRef:k,routeData:a};ce(()=>{t.unregisterTab(M)}),ut(()=>{t.registerTab(M)});function x(d,$){const r={ref:S,class:h.value,tabindex:V.value,role:"tab","aria-selected":L.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:O,onKeydown:i,...$};return pe(u(d,r,T()),[[ct,B.value]])}return{renderTab:x,$tabs:t}}var ue=J({name:"QRouteTab",props:{...Ie,...Ut},emits:Gt,setup(e,{slots:g,emit:c}){const a=bt({useDisableForRouterLinkProps:!1}),{renderTab:t,$tabs:v}=Yt(e,g,c,{exact:s(()=>e.exact),...a});return D(()=>`${e.name} | ${e.exact} | ${(a.resolvedLink.value||{}).href}`,()=>{v.verifyRouteModel()}),()=>t(a.linkTag.value,a.linkAttrs.value)}});function Xt(e,g,c){const a=c===!0?["left","right"]:["top","bottom"];return`absolute-${g===!0?a[0]:a[1]}${e?` text-${e}`:""}`}const Zt=["left","center","right","justify"];var Jt=J({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>Zt.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:g,emit:c}){const{proxy:a}=re(),{$q:t}=a,{registerTick:v}=Ce(),{registerTick:m}=Ce(),{registerTick:S}=Ce(),{registerTimeout:k,removeTimeout:B}=Oe(),{registerTimeout:L,removeTimeout:h}=Oe(),R=Q(null),V=Q(null),O=Q(e.modelValue),i=Q(!1),T=Q(!0),M=Q(!1),x=Q(!1),d=[],$=Q(0),r=Q(!1);let w=null,E=null,N;const G=s(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:Xt(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),_e=s(()=>{const l=$.value,o=O.value;for(let b=0;b<l;b++)if(d[b].name.value===o)return!0;return!1}),de=s(()=>`q-tabs__content--align-${i.value===!0?"left":x.value===!0?"justify":e.align}`),ye=s(()=>`q-tabs row no-wrap items-center q-tabs--${i.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),we=s(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+de.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),le=s(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),ae=s(()=>e.vertical!==!0&&t.lang.rtl===!0),se=s(()=>Ft===!1&&ae.value===!0);D(ae,oe),D(()=>e.modelValue,l=>{f({name:l,setCurrent:!0,skipEmit:!0})}),D(()=>e.outsideArrows,j);function f({name:l,setCurrent:o,skipEmit:b}){O.value!==l&&(b!==!0&&e["onUpdate:modelValue"]!==void 0&&c("update:modelValue",l),(o===!0||e["onUpdate:modelValue"]===void 0)&&(xe(O.value,l),O.value=l))}function j(){v(()=>{ee({width:R.value.offsetWidth,height:R.value.offsetHeight})})}function ee(l){if(le.value===void 0||V.value===null)return;const o=l[le.value.container],b=Math.min(V.value[le.value.scroll],Array.prototype.reduce.call(V.value.children,(A,C)=>A+(C[le.value.content]||0),0)),P=o>0&&b>o;i.value=P,P===!0&&m(oe),x.value=o<parseInt(e.breakpoint,10)}function xe(l,o){const b=l!=null&&l!==""?d.find(A=>A.name.value===l):null,P=o!=null&&o!==""?d.find(A=>A.name.value===o):null;if(b&&P){const A=b.tabIndicatorRef.value,C=P.tabIndicatorRef.value;w!==null&&(clearTimeout(w),w=null),A.style.transition="none",A.style.transform="none",C.style.transition="none",C.style.transform="none";const _=A.getBoundingClientRect(),H=C.getBoundingClientRect();C.style.transform=e.vertical===!0?`translate3d(0,${_.top-H.top}px,0) scale3d(1,${H.height?_.height/H.height:1},1)`:`translate3d(${_.left-H.left}px,0,0) scale3d(${H.width?_.width/H.width:1},1,1)`,S(()=>{w=setTimeout(()=>{w=null,C.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",C.style.transform="none"},70)})}P&&i.value===!0&&ne(P.rootRef.value)}function ne(l){const{left:o,width:b,top:P,height:A}=V.value.getBoundingClientRect(),C=l.getBoundingClientRect();let _=e.vertical===!0?C.top-P:C.left-o;if(_<0){V.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(_),oe();return}_+=e.vertical===!0?C.height-A:C.width-b,_>0&&(V.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(_),oe())}function oe(){const l=V.value;if(l===null)return;const o=l.getBoundingClientRect(),b=e.vertical===!0?l.scrollTop:Math.abs(l.scrollLeft);ae.value===!0?(T.value=Math.ceil(b+o.width)<l.scrollWidth-1,M.value=b>0):(T.value=b>0,M.value=e.vertical===!0?Math.ceil(b+o.height)<l.scrollHeight:Math.ceil(b+o.width)<l.scrollWidth)}function Be(l){E!==null&&clearInterval(E),E=setInterval(()=>{et(l)===!0&&Y()},5)}function Re(){Be(se.value===!0?Number.MAX_SAFE_INTEGER:0)}function $e(){Be(se.value===!0?0:Number.MAX_SAFE_INTEGER)}function Y(){E!==null&&(clearInterval(E),E=null)}function Ze(l,o){const b=Array.prototype.filter.call(V.value.children,H=>H===o||H.matches&&H.matches(".q-tab.q-focusable")===!0),P=b.length;if(P===0)return;if(l===36)return ne(b[0]),b[0].focus(),!0;if(l===35)return ne(b[P-1]),b[P-1].focus(),!0;const A=l===(e.vertical===!0?38:37),C=l===(e.vertical===!0?40:39),_=A===!0?-1:C===!0?1:void 0;if(_!==void 0){const H=ae.value===!0?-1:1,U=b.indexOf(o)+_*H;return U>=0&&U<P&&(ne(b[U]),b[U].focus({preventScroll:!0})),!0}}const Je=s(()=>se.value===!0?{get:l=>Math.abs(l.scrollLeft),set:(l,o)=>{l.scrollLeft=-o}}:e.vertical===!0?{get:l=>l.scrollTop,set:(l,o)=>{l.scrollTop=o}}:{get:l=>l.scrollLeft,set:(l,o)=>{l.scrollLeft=o}});function et(l){const o=V.value,{get:b,set:P}=Je.value;let A=!1,C=b(o);const _=l<C?-1:1;return C+=_*5,C<0?(A=!0,C=0):(_===-1&&C<=l||_===1&&C>=l)&&(A=!0,C=l),P(o,C),oe(),A}function Pe(l,o){for(const b in l)if(l[b]!==o[b])return!1;return!0}function tt(){let l=null,o={matchedLen:0,queryDiff:9999,hrefLen:0};const b=d.filter(_=>_.routeData!==void 0&&_.routeData.hasRouterLink.value===!0),{hash:P,query:A}=a.$route,C=Object.keys(A).length;for(const _ of b){const H=_.routeData.exact.value===!0;if(_.routeData[H===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:U,query:qe,matched:it,href:rt}=_.routeData.resolvedLink.value,Te=Object.keys(qe).length;if(H===!0){if(U!==P||Te!==C||Pe(A,qe)===!1)continue;l=_.name.value;break}if(U!==""&&U!==P||Te!==0&&Pe(qe,A)===!1)continue;const X={matchedLen:it.length,queryDiff:C-Te,hrefLen:rt.length-U.length};if(X.matchedLen>o.matchedLen){l=_.name.value,o=X;continue}else if(X.matchedLen!==o.matchedLen)continue;if(X.queryDiff<o.queryDiff)l=_.name.value,o=X;else if(X.queryDiff!==o.queryDiff)continue;X.hrefLen>o.hrefLen&&(l=_.name.value,o=X)}l===null&&d.some(_=>_.routeData===void 0&&_.name.value===O.value)===!0||f({name:l,setCurrent:!0})}function lt(l){if(B(),r.value!==!0&&R.value!==null&&l.target&&typeof l.target.closest=="function"){const o=l.target.closest(".q-tab");o&&R.value.contains(o)===!0&&(r.value=!0,i.value===!0&&ne(o))}}function at(){k(()=>{r.value=!1},30)}function fe(){Qe.avoidRouteWatcher===!1?L(tt):h()}function Ae(){if(N===void 0){const l=D(()=>a.$route.fullPath,fe);N=()=>{l(),N=void 0}}}function nt(l){d.push(l),$.value++,j(),l.routeData===void 0||a.$route===void 0?L(()=>{if(i.value===!0){const o=O.value,b=o!=null&&o!==""?d.find(P=>P.name.value===o):null;b&&ne(b.rootRef.value)}}):(Ae(),l.routeData.hasRouterLink.value===!0&&fe())}function ot(l){d.splice(d.indexOf(l),1),$.value--,j(),N!==void 0&&l.routeData!==void 0&&(d.every(o=>o.routeData===void 0)===!0&&N(),fe())}const Qe={currentModel:O,tabProps:G,hasFocus:r,hasActiveTab:_e,registerTab:nt,unregisterTab:ot,verifyRouteModel:fe,updateModel:f,onKbdNavigate:Ze,avoidRouteWatcher:!1};Ne(We,Qe);function Ve(){w!==null&&clearTimeout(w),Y(),N!==void 0&&N()}let Me;return ce(Ve),gt(()=>{Me=N!==void 0,Ve()}),ht(()=>{Me===!0&&Ae(),j()}),()=>u("div",{ref:R,class:ye.value,role:"tablist",onFocusin:lt,onFocusout:at},[u(Ke,{onResize:ee}),u("div",{ref:V,class:we.value,onScroll:oe},ge(g.default)),u(Z,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(T.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||t.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:Re,onTouchstartPassive:Re,onMouseupPassive:Y,onMouseleavePassive:Y,onTouchendPassive:Y}),u(Z,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(M.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||t.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:$e,onTouchstartPassive:$e,onMouseupPassive:Y,onMouseleavePassive:Y,onTouchendPassive:Y})])}}),el=J({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:g,emit:c}){let a=!1,t,v,m=null,S=null,k,B;function L(){t&&t(),t=null,a=!1,m!==null&&(clearTimeout(m),m=null),S!==null&&(clearTimeout(S),S=null),v!==void 0&&v.removeEventListener("transitionend",k),k=null}function h(i,T,M){i.style.overflowY="hidden",T!==void 0&&(i.style.height=`${T}px`),i.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,a=!0,t=M}function R(i,T){i.style.overflowY=null,i.style.height=null,i.style.transition=null,L(),T!==B&&c(T)}function V(i,T){let M=0;v=i,a===!0?(L(),M=i.offsetHeight===i.scrollHeight?0:void 0):B="hide",h(i,M,T),m=setTimeout(()=>{m=null,i.style.height=`${i.scrollHeight}px`,k=x=>{S=null,(Object(x)!==x||x.target===i)&&R(i,"show")},i.addEventListener("transitionend",k),S=setTimeout(k,e.duration*1.1)},100)}function O(i,T){let M;v=i,a===!0?L():(B="show",M=i.scrollHeight),h(i,M,T),m=setTimeout(()=>{m=null,i.style.height=0,k=x=>{S=null,(Object(x)!==x||x.target===i)&&R(i,"hide")},i.addEventListener("transitionend",k),S=setTimeout(k,e.duration*1.1)},100)}return ce(()=>{a===!0&&L()}),()=>u(mt,{css:!1,appear:e.appear,onEnter:V,onLeave:O},g.default)}});const te=_t({}),tl=Object.keys(Ie);var ll=J({name:"QExpansionItem",props:{...Ie,...je,...yt,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:Number,headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...ze,"click","afterShow","afterHide"],setup(e,{slots:g,emit:c}){const{proxy:{$q:a}}=re(),t=wt(e,a),v=Q(e.modelValue!==null?e.modelValue:e.defaultOpened),m=Q(null),S=be(),{show:k,hide:B,toggle:L}=De({showing:v});let h,R;const V=s(()=>`q-expansion-item q-item-type q-expansion-item--${v.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),O=s(()=>{if(e.contentInsetLevel===void 0)return null;const f=a.lang.rtl===!0?"Right":"Left";return{["padding"+f]:e.contentInsetLevel*56+"px"}}),i=s(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),T=s(()=>{const f={};return tl.forEach(j=>{f[j]=e[j]}),f}),M=s(()=>i.value===!0||e.expandIconToggle!==!0),x=s(()=>e.expandedIcon!==void 0&&v.value===!0?e.expandedIcon:e.expandIcon||a.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),d=s(()=>e.disable!==!0&&(i.value===!0||e.expandIconToggle===!0)),$=s(()=>({expanded:v.value===!0,detailsId:e.targetUid,toggle:L,show:k,hide:B})),r=s(()=>{const f=e.toggleAriaLabel!==void 0?e.toggleAriaLabel:a.lang.label[v.value===!0?"collapse":"expand"](e.label);return{role:"button","aria-expanded":v.value===!0?"true":"false","aria-controls":S,"aria-label":f}});D(()=>e.group,f=>{R!==void 0&&R(),f!==void 0&&de()});function w(f){i.value!==!0&&L(f),c("click",f)}function E(f){f.keyCode===13&&N(f,!0)}function N(f,j){j!==!0&&m.value!==null&&m.value.focus(),L(f),ke(f)}function G(){c("afterShow")}function _e(){c("afterHide")}function de(){h===void 0&&(h=be()),v.value===!0&&(te[e.group]=h);const f=D(v,ee=>{ee===!0?te[e.group]=h:te[e.group]===h&&delete te[e.group]}),j=D(()=>te[e.group],(ee,xe)=>{xe===h&&ee!==void 0&&ee!==h&&B()});R=()=>{f(),j(),te[e.group]===h&&delete te[e.group],R=void 0}}function ye(){const f={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},j=[u(Z,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&v.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:x.value})];return d.value===!0&&(Object.assign(f,{tabindex:0,...r.value,onClick:N,onKeyup:E}),j.unshift(u("div",{ref:m,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),u(Se,f,()=>j)}function we(){let f;return g.header!==void 0?f=[].concat(g.header($.value)):(f=[u(Se,()=>[u(Ee,{lines:e.labelLines},()=>e.label||""),e.caption?u(Ee,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&f[e.switchToggleSide===!0?"push":"unshift"](u(Se,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>u(Z,{name:e.icon})))),e.disable!==!0&&e.hideExpandIcon!==!0&&f[e.switchToggleSide===!0?"unshift":"push"](ye()),f}function le(){const f={ref:"item",style:e.headerStyle,class:e.headerClass,dark:t.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return M.value===!0&&(f.clickable=!0,f.onClick=w,Object.assign(f,i.value===!0?T.value:r.value)),u(Et,f,we)}function ae(){return pe(u("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:O.value,id:S},ge(g.default)),[[xt,v.value]])}function se(){const f=[le(),u(el,{duration:e.duration,onShow:G,onHide:_e},ae)];return e.expandSeparator===!0&&f.push(u(Fe,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:t.value}),u(Fe,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:t.value})),f}return e.group!==void 0&&de(),ce(()=>{R!==void 0&&R()}),()=>u("div",{class:V.value},[u("div",{class:"q-expansion-item__container relative-position"},se())])}}),al=J({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:g,emit:c}){const{proxy:{$q:a}}=re(),t=Le(Tt,ie);if(t===ie)return console.error("QFooter needs to be child of QLayout"),ie;const v=Q(parseInt(e.heightHint,10)),m=Q(!0),S=Q(qt.value===!0||t.isContainer.value===!0?0:window.innerHeight),k=s(()=>e.reveal===!0||t.view.value.indexOf("F")>-1||a.platform.is.ios&&t.isContainer.value===!0),B=s(()=>t.isContainer.value===!0?t.containerHeight.value:S.value),L=s(()=>{if(e.modelValue!==!0)return 0;if(k.value===!0)return m.value===!0?v.value:0;const r=t.scroll.value.position+B.value+v.value-t.height.value;return r>0?r:0}),h=s(()=>e.modelValue!==!0||k.value===!0&&m.value!==!0),R=s(()=>e.modelValue===!0&&h.value===!0&&e.reveal===!0),V=s(()=>"q-footer q-layout__section--marginal "+(k.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+(h.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(k.value!==!0?" hidden":""):"")),O=s(()=>{const r=t.rows.value.bottom,w={};return r[0]==="l"&&t.left.space===!0&&(w[a.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),r[2]==="r"&&t.right.space===!0&&(w[a.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),w});function i(r,w){t.update("footer",r,w)}function T(r,w){r.value!==w&&(r.value=w)}function M({height:r}){T(v,r),i("size",r)}function x(){if(e.reveal!==!0)return;const{direction:r,position:w,inflectionPoint:E}=t.scroll.value;T(m,r==="up"||w-E<100||t.height.value-B.value-w-v.value<300)}function d(r){R.value===!0&&T(m,!0),c("focusin",r)}D(()=>e.modelValue,r=>{i("space",r),T(m,!0),t.animate()}),D(L,r=>{i("offset",r)}),D(()=>e.reveal,r=>{r===!1&&T(m,e.modelValue)}),D(m,r=>{t.animate(),c("reveal",r)}),D([v,t.scroll,t.height],x),D(()=>a.screen.height,r=>{t.isContainer.value!==!0&&T(S,r)});const $={};return t.instances.footer=$,e.modelValue===!0&&i("size",v.value),i("space",e.modelValue),i("offset",L.value),ce(()=>{t.instances.footer===$&&(t.instances.footer=void 0,i("size",0),i("offset",0),i("space",!1))}),()=>{const r=he(g.default,[u(Ke,{debounce:0,onResize:M})]);return e.elevated===!0&&r.push(u("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),u("footer",{class:V.value,style:O.value,onFocusin:d},r)}}});const me=e=>(It("data-v-4f434170"),e=e(),Bt(),e),nl={href:"#"},ol=me(()=>I("img",{src:Ge},null,-1)),il=me(()=>I("span",{class:"text"},"Ocean",-1)),rl={class:"login"},sl={class:"member"},ul={class:"btn"},cl={class:"btn"},dl={class:"btn"},fl={class:"btn"},vl={class:"left row col-12 col-sm-9 flex flex-center"},bl=me(()=>I("div",{class:"map left-box col-12 col-sm-6"},[I("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.7394503702526!2d121.41731178916736!3d25.04291476457007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a7bec9ad74b1%3A0xa639904a89f26435!2z5Yue5YuV6YOo5Yue5YuV5Yqb55m85bGV572y5YyX5Z-65a6c6Iqx6YeR6aas5YiG572y5rOw5bGx6IG35qWt6KiT57e05aC0!5e0!3m2!1szh-TW!2stw!4v1676271720534!5m2!1szh-TW!2stw",width:"600",height:"450",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"})],-1)),gl={class:"left-box col-12 col-sm-6"},hl={class:"row warp"},ml={class:"col-3 col-sm-12 col-md-6 col-lg-3 q-pb-md"},_l={class:"col-3 col-sm-12 col-md-6 col-lg-3 q-pb-md"},yl={class:"col-3 col-sm-12 col-md-6 col-lg-3 q-pb-md"},wl={class:"col-3 col-sm-12 col-md-6 col-lg-3 q-pb-md"},xl=me(()=>I("div",{class:"right col-12 col-sm-3 flex flex-center"},[I("div",{class:"line"}),I("div",{class:"logo"},[I("img",{src:Ge}),I("span",{class:"text"},"Ocean")])],-1)),ql={__name:"MainLayout",setup(e){const g=Ct(),{isLogin:c,isAdmin:a}=St(g),{logout:t}=g,v=Q(!1),m=()=>{v.value=!v.value},S=Q(!1);return(k,B)=>{const L=kt("router-view");return p(),W($t,{view:"hhh lpR fff"},{default:q(()=>[n(Qt,{class:"","height-hint":"98"},{default:q(()=>[n(Pt,null,{default:q(()=>[n(y,{class:"menu",dense:"",flat:"",round:"",icon:"menu",onClick:m}),n(At,null,{default:q(()=>[I("a",nl,[n(Rt,null,{default:q(()=>[ol]),_:1}),il]),I("div",rl,[n(jt,{push:""},{default:q(()=>[F(c)?K("",!0):(p(),W(y,{key:0,push:"",label:"\u6703\u54E1\u767B\u5165",icon:"login",to:"/login"})),F(c)?K("",!0):(p(),W(y,{key:1,push:"",label:"\u8A3B\u518A\u6703\u54E1",icon:"how_to_reg",to:"/register"})),F(c)&&!F(a)?(p(),W(y,{key:2,push:"",label:"\u6703\u54E1\u5C08\u5340",icon:"account_circle",to:"/member"})):K("",!0),F(c)&&F(a)?(p(),W(y,{key:3,push:"",label:"\u7BA1\u7406",icon:"settings",to:"/admin"})):K("",!0),F(c)?(p(),W(y,{key:4,push:"",label:"\u767B\u51FA",icon:"logout",onClick:F(t)},null,8,["onClick"])):K("",!0)]),_:1})]),I("div",sl,[n(Wt,{modelValue:S.value,"onUpdate:modelValue":B[0]||(B[0]=h=>S.value=h),label:"Actions","label-position":"top","external-label":"",icon:"keyboard_arrow_left",direction:"left",padding:"xs"},{default:q(()=>[F(c)?K("",!0):(p(),W(ve,{key:0,icon:"how_to_reg",label:"\u8A3B\u518A\u5E33\u865F",to:"/register"})),F(c)?K("",!0):(p(),W(ve,{key:1,icon:"login",label:"\u6703\u54E1\u767B\u5165",to:"/login"})),F(c)?(p(),W(ve,{key:2,icon:"logout",onClick:F(t)},null,8,["onClick"])):K("",!0),F(c)&&!F(a)?(p(),W(y,{key:3,round:"",icon:"account_circle",label:"",to:"/member"})):K("",!0),F(c)&&F(a)?(p(),W(ve,{key:4,icon:"settings",label:"",to:"/admin"})):K("",!0)]),_:1},8,["modelValue"])])]),_:1})]),_:1}),n(Jt,{align:"left"},{default:q(()=>[n(ue,{to:"/",label:"\u9996\u9801"}),n(ue,{to:"/article",label:"\u6587\u7AE0\u8A0E\u8AD6"}),n(ue,{to:"/fish",label:"\u9B5A\u7A2E\u5716\u9451"}),n(ue,{to:"/latest",label:"\u6700\u65B0\u6D88\u606F"}),n(ue,{to:"/contact",label:"\u806F\u7D61\u6211\u5011"})]),_:1})]),_:1}),n(Mt,{modelValue:v.value,"onUpdate:modelValue":B[1]||(B[1]=h=>v.value=h),side:"left",overlay:"",behavior:"mobile"},{default:q(()=>[n(Vt,{bordered:"",class:"rounded-borders"},{default:q(()=>[I("div",ul,[n(y,{to:"/",icon:"home",align:"left",flat:"",style:{color:"black"},label:"\u56DE\u5230\u9996\u9801"})]),I("div",cl,[n(y,{to:"/article",icon:"menu_book",align:"left",flat:"",style:{color:"black"},label:"\u6587\u7AE0\u8A0E\u8AD6"})]),n(ll,{"default-opened":"","content-inset-level":.5,"expand-separator":"",icon:"water_drop",label:"\u9B5A\u7A2E\u5716\u9451"},{default:q(()=>[n(Lt,null,{default:q(()=>[n(z,null,{default:q(()=>[n(y,{to:"/clownfish",align:"left",flat:"",style:{color:"rgb(15,85,165)"},label:"\u5C0F\u4E11\u9B5A"})]),_:1}),n(z,null,{default:q(()=>[n(y,{to:"/damselfish",align:"left",flat:"",style:{color:"rgb(15,85,165)"},label:"\u96C0\u9BDB"})]),_:1}),n(z,null,{default:q(()=>[n(y,{to:"/tangfish",align:"left",flat:"",style:{color:"rgb(15,85,165)"},label:"\u5012\u540A\u9B5A"})]),_:1}),n(z,null,{default:q(()=>[n(y,{to:"/sangelfish",align:"left",flat:"",style:{color:"rgb(15,85,165)"},label:"\u5C0F\u578B\u795E\u4ED9"})]),_:1}),n(z,null,{default:q(()=>[n(y,{to:"/angelfish",align:"left",flat:"",style:{color:"rgb(15,85,165)"},label:"\u5927\u578B\u795E\u4ED9"})]),_:1}),n(z,null,{default:q(()=>[n(y,{to:"/butterflyfish",align:"left",flat:"",style:{color:"rgb(15,85,165)"},label:"\u8776\u9B5A"})]),_:1}),n(z,null,{default:q(()=>[n(y,{to:"/triggerfish",align:"left",flat:"",style:{color:"rgb(15,85,165)"},label:" \u7832\u5F48\u9B5A"})]),_:1}),n(z,null,{default:q(()=>[n(y,{to:"/boxfish",align:"left",flat:"",style:{color:"rgb(15,85,165)"},label:"\u7BB1\u9B68"})]),_:1}),n(z,null,{default:q(()=>[n(y,{to:"/pufferfish",align:"left",flat:"",style:{color:"rgb(15,85,165)"},label:"\u9B68\u9B5A"})]),_:1}),n(z,null,{default:q(()=>[n(y,{to:"/frogfish",align:"left",flat:"",style:{color:"rgb(15,85,165)"},label:"\u9752\u86D9"})]),_:1}),n(z,null,{default:q(()=>[n(y,{to:"/wrassefish",align:"left",flat:"",style:{color:"rgb(15,85,165)"},label:"\u9686\u982D\u9B5A"})]),_:1}),n(z,null,{default:q(()=>[n(y,{to:"/pseudochromisfish",align:"left",flat:"",style:{color:"rgb(15,85,165)"},label:"\u8349\u8393\u9B5A"})]),_:1}),n(z,null,{default:q(()=>[n(y,{to:"/anthiasfish",align:"left",flat:"",style:{color:"rgb(15,85,165)"},label:"\u6D77\u91D1\u9B5A"})]),_:1}),n(z,null,{default:q(()=>[n(y,{to:"/gobyfish",align:"left",flat:"",style:{color:"rgb(15,85,165)"},label:"\u8766\u864E"})]),_:1})]),_:1})]),_:1},8,["content-inset-level"]),I("div",dl,[n(y,{to:"/latest",icon:"feed",align:"left",flat:"",style:{color:"black"},label:"\u6700\u65B0\u6D88\u606F"})]),I("div",fl,[n(y,{to:"/contact",icon:"mail",align:"left",flat:"",style:{color:"black"},label:"\u806F\u7D61\u6211\u5011"})])]),_:1})]),_:1},8,["modelValue"]),n(Ot,{style:{"padding-top":"0px","padding-bottom":"0px"}},{default:q(()=>[n(L)]),_:1}),n(al,{class:"text-white row warp"},{default:q(()=>[I("div",vl,[bl,I("div",gl,[I("ul",hl,[I("li",ml,[n(y,{size:"md",to:"/article",label:"\u6587\u7AE0\u8A0E\u8AD6"})]),I("li",_l,[n(y,{size:"md",to:"/fish",label:"\u9B5A\u7A2E\u5716\u9451"})]),I("li",yl,[n(y,{size:"md",to:"/latest",label:"\u6700\u65B0\u6D88\u606F"})]),I("li",wl,[n(y,{size:"md",to:"/contact",label:"\u806F\u7D61\u6211\u5011"})])])])]),xl]),_:1})]),_:1})}}};var Al=Ht(ql,[["__scopeId","data-v-4f434170"]]);export{Al as default};
