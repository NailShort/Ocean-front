import{Q as y,_ as b}from"./par-bg.ffb67ff9.js";import{aA as p,k as V,l as x,d as s,a8 as c,m as o,ab as h,aR as w,aY as r,Q as m,t as Q,u as q,aL as S,b3 as F,aN as _}from"./index.ea07f8f0.js";import{Q as C}from"./QForm.bf03f46c.js";import{_ as I}from"./plugin-vue_export-helper.21dcd24c.js";const u=n=>(Q("data-v-79da3d7c"),n=n(),q(),n),N={id:"contact"},B=w('<div class="text" data-v-79da3d7c><p class="title" data-v-79da3d7c>\u806F\u7D61\u6211\u5011</p><p class="egtitle" data-v-79da3d7c>contact us</p></div><div class="text02" data-v-79da3d7c><p class="title" data-v-79da3d7c>\u806F\u7D61\u6211\u5011</p><p class="egtitle" data-v-79da3d7c>contact us</p></div><div class="bg" data-v-79da3d7c></div>',3),P=u(()=>o("img",{src:b},null,-1)),T={class:"contant justify-center"},U=u(()=>o("div",{class:"remind col-12"},[o("p",null,"\u6211\u5011\u6536\u5230\u60A8\u7684\u610F\u898B\u5F8C\u5C07\u65BC\u5DE5\u4F5C\u65E5\u7531\u5C08\u4EBA\u4EE5\u90F5\u4EF6\u56DE\u8986\u60A8\u3002")],-1)),k=u(()=>o("p",{class:"aaa"},[o("span",{style:{color:"red"}},"\u25CF"),S(" \u6211\u5011\u6536\u5230\u60A8\u7684\u610F\u898B\u5F8C\u5C07\u65BC\u5DE5\u4F5C\u65E5\u7531\u5C08\u4EBA\u4EE5\u90F5\u4EF6\u56DE\u8986\u60A8\u3002")],-1)),R={class:"btn"},j={__name:"ContactPage",setup(n){const i={required(a){return!!a||"\u6B04\u4F4D\u5FC5\u586B"}},v=p([]),e=p({_id:"",name:"",age:"",email:"",description:"",loading:!1}),f=async()=>{var t,l;e.loading=!0;const a=new FormData;a.append("name",e.name),a.append("age",e.age),a.append("email",e.email),a.append("description",e.description);try{const{data:d}=await F.post("/contacts",a);v.push(d.result),_.fire({icon:"success",title:"\u6210\u529F",text:"\u5DF2\u6536\u5230\u60A8\u7684\u610F\u898B\uFF0C\u5C07\u65BC\u5DE5\u4F5C\u65E5\u7531\u5C08\u4EBA\u4EE5\u90F5\u4EF6\u56DE\u8986\u60A8"}),e.dialog=!1}catch(d){_.fire({icon:"error",title:"\u5931\u6557",text:((l=(t=d==null?void 0:d.response)==null?void 0:t.data)==null?void 0:l.message)||"\u767C\u751F\u932F\u8AA4"})}e.loading=!1},g=async()=>{e.name=null,e.age=null,e.email=null,e.description=null};return(a,t)=>(V(),x("div",N,[B,s(y,{speed:1},{media:c(()=>[P]),_:1}),o("div",T,[U,s(h,{class:"my-card col-12 row items-center justify-center"},{default:c(()=>[s(C,{onSubmit:f,onReset:g,class:"q-gutter-md col-12"},{default:c(()=>[k,s(r,{class:"col-10",filled:"",modelValue:e.name,"onUpdate:modelValue":t[0]||(t[0]=l=>e.name=l),label:"\u59D3\u540D",hint:"\u8ACB\u8F38\u5165\u59D3\u540D","lazy-rules":"",rules:[i.required]},null,8,["modelValue","rules"]),s(r,{class:"col-10",filled:"",type:"number",modelValue:e.age,"onUpdate:modelValue":t[1]||(t[1]=l=>e.age=l),label:"\u5E74\u9F61",hint:"\u8ACB\u8F38\u5165\u5E74\u9F61","lazy-rules":"",rules:[i.required]},null,8,["modelValue","rules"]),s(r,{modelValue:e.email,"onUpdate:modelValue":t[2]||(t[2]=l=>e.email=l),filled:"",type:"email",hint:"Email",rules:[i.required]},null,8,["modelValue","rules"]),s(r,{class:"col-10",modelValue:e.description,"onUpdate:modelValue":t[3]||(t[3]=l=>e.description=l),filled:"",clearable:"",type:"textarea",color:"red-12",label:"\u5167\u6587",hint:"\u8ACB\u8F38\u5165\u5167\u6587","shadow-text":a.textareaShadowText,onKeydown:a.processTextareaFill,onFocus:a.processTextareaFill,rules:[i.required]},null,8,["modelValue","shadow-text","onKeydown","onFocus","rules"]),o("div",R,[s(m,{disabled:e.loading,label:"\u9001\u51FA",type:"submit",color:"primary"},null,8,["disabled"]),s(m,{label:"\u91CD\u88FD",type:"reset",color:"primary",flat:"",class:"q-ml-sm"})])]),_:1})]),_:1})])]))}};var D=I(j,[["__scopeId","data-v-79da3d7c"]]);export{D as default};
