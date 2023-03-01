import{aA as k,r as U,c as D,b3 as _,aN as d,k as f,l as y,m as s,d as o,Q as r,F as w,aO as C,aa as F,a8 as c,b0 as z,aK as h,ab as B,ac as M,aY as V,bg as P,y as N,b2 as Y,t as j,u as E}from"./index.8f6e2e29.js";import{Q as K}from"./QSelect.5328a798.js";import{Q as L}from"./QFile.8e8ea17b.js";import{Q as O}from"./QForm.8f33471e.js";import{_ as G}from"./plugin-vue_export-helper.21dcd24c.js";import"./selection.d61aa0b3.js";import"./QItemLabel.fd18fce7.js";import"./rtl.b51694b1.js";import"./format.2a3572e1.js";const x=u=>(j("data-v-5cb9a2e1"),u=u(),E(),u),H={id:"Admin"},J={class:"content justify-center",align:"center"},R={class:"top col-12 row"},T=x(()=>s("div",{class:"col-6"},[s("h4",{class:"title"},"\u6211\u7684\u6587\u7AE0")],-1)),W={class:"new .col-6 q-pa-md q-gutter-sm"},X={class:"q-pa-md q-gutter-sm col-12",align:"center"},Z=["fishActive"],ee=x(()=>s("thead",null,[s("tr",{align:"left"},[s("th",null,"\u5716\u7247"),s("th",null,"\u540D\u7A31"),s("th",null,"\u65E5\u671F"),s("th",null,"\u7BA1\u7406")])],-1)),te={class:"img"},le=["src"],ae={class:"name"},se={class:"time"},oe={class:"btn"},ie={class:"text-h6"},ne={__name:"MinePage",setup(u){const q=["\u6D77\u6C34\u9B5A\u985E","\u73CA\u745A\u8EDF\u9AD4","\u786C\u9AD4\u8A2D\u5099","\u4E8C\u624B\u5206\u4EAB"],m={required(l){return!!l||"\u6B04\u4F4D\u5FC5\u586B"}},n=k([]),e=k({_id:"",name:"",time:"",description:"",image:void 0,sell:!1,category:"",loading:!1,dialog:!1,idx:-1}),b=new Date,$=`${b.getFullYear()}\u5E74${b.getMonth()+1}\u6708${b.getDate()}\u65E5`,Q=l=>{l===-1?(e._id="",e.name="",e.time=$,e.description="",e.image=void 0,e.sell=!1,e.category="",e.loading=!1,e.idx=-1):(e._id=n[l]._id,e.name=n[l].name,e.time=n[l].time,e.description=n[l].description,e.image=void 0,e.sell=n[l].sell,e.category=n[l].category,e.loading=!1,e.idx=l),e.dialog=!0},S=async()=>{var a,t;e.loading=!0;const l=new FormData;l.append("name",e.name),l.append("time",e.time),l.append("description",e.description),l.append("image",e.image),l.append("sell",e.sell),l.append("category",e.category);try{if(e._id.length===0){const{data:i}=await _.post("/products",l);n.push(i.result),d.fire({icon:"success",title:"\u6210\u529F",text:"\u65B0\u589E\u6210\u529F"})}else{const{data:i}=await _.patch("/products/"+e._id,l);n[e.idx]=i.result,d.fire({icon:"success",title:"\u6210\u529F",text:"\u7DE8\u8F2F\u6210\u529F"})}e.dialog=!1}catch(i){d.fire({icon:"error",title:"\u5931\u6557",text:((t=(a=i==null?void 0:i.response)==null?void 0:a.data)==null?void 0:t.message)||"\u767C\u751F\u932F\u8AA4"})}e.loading=!1},A=async l=>{var a,t;try{await _.delete(`/products/${l}`);const i=n.findIndex(g=>g._id===l);n.splice(i,1),d.fire({icon:"success",title:"\u6210\u529F",text:"\u522A\u9664\u6210\u529F"})}catch(i){d.fire({icon:"error",title:"\u5931\u6557",text:((t=(a=i==null?void 0:i.response)==null?void 0:a.data)==null?void 0:t.message)||"\u767C\u751F\u932F\u8AA4"})}},v=["\u6240\u6709\u6587\u7AE0","\u6D77\u6C34\u9B5A\u985E","\u73CA\u745A\u8EDF\u9AD4","\u786C\u9AD4\u8A2D\u5099","\u4E8C\u624B\u5206\u4EAB"],p=U(v[0]),I=D(()=>n.filter(l=>p.value===v[0]?l:l.category===p.value));return(async()=>{var l,a;try{const{data:t}=await _.get("/products/member");n.push(...t.result)}catch(t){d.fire({icon:"error",title:"\u5931\u6557",text:((a=(l=t==null?void 0:t.response)==null?void 0:l.data)==null?void 0:a.message)||"\u767C\u751F\u932F\u8AA4"})}})(),(l,a)=>(f(),y("div",H,[s("div",J,[s("div",R,[T,s("div",W,[o(r,{label:"\u65B0\u589E\u5546\u54C1",color:"secondary",onClick:a[0]||(a[0]=t=>Q(-1))})])]),s("div",X,[(f(),y(w,null,C(v,(t,i)=>o(r,{outline:"",rounded:"",color:"secondary",key:i,label:t,onClick:g=>p.value=t},null,8,["label","onClick"])),64))]),s("table",{fishActive:p.value},[ee,s("tbody",null,[(f(!0),y(w,null,C(F(I),(t,i)=>(f(),y("tr",{key:t._id},[s("td",te,[s("img",{src:t.image,width:100},null,8,le)]),s("td",ae,h(t.name),1),s("td",se,h(t.time),1),s("td",oe,[o(r,{size:"sm",round:"",color:"primary",icon:"edit",onClick:g=>Q(i)},null,8,["onClick"]),o(r,{size:"sm",round:"",color:"red",icon:"delete",onClick:g=>A(t._id)},null,8,["onClick"])])]))),128))])],8,Z),o(z,{modelValue:e.dialog,"onUpdate:modelValue":a[8]||(a[8]=t=>e.dialog=t),persistent:""},{default:c(()=>[o(B,{style:{width:"100%"}},{default:c(()=>[o(O,{onSubmit:S},{default:c(()=>[o(M,null,{default:c(()=>[s("div",ie,h(e._id.length>0?"\u7DE8\u8F2F\u5546\u54C1":"\u65B0\u589E\u5546\u54C1"),1),o(V,{filled:"",modelValue:e.name,"onUpdate:modelValue":a[1]||(a[1]=t=>e.name=t),label:"\u6587\u7AE0",hint:"","lazy-rules":"",rules:[m.required]},null,8,["modelValue","rules"]),o(V,{filled:"",modelValue:e.time,"onUpdate:modelValue":a[2]||(a[2]=t=>e.time=t),label:"\u50F9\u683C","lazy-rules":"",rules:[m.required]},null,8,["modelValue","rules"]),o(V,{filled:"",modelValue:e.description,"onUpdate:modelValue":a[3]||(a[3]=t=>e.description=t),autogrow:"",label:"\u8AAA\u660E",rules:[m.required]},null,8,["modelValue","rules"]),o(K,{filled:"",modelValue:e.category,"onUpdate:modelValue":a[4]||(a[4]=t=>e.category=t),options:q,label:"\u5206\u985E",rules:[m.required]},null,8,["modelValue","rules"]),o(P,{modelValue:e.sell,"onUpdate:modelValue":a[5]||(a[5]=t=>e.sell=t),label:"\u4E0A\u67B6"},null,8,["modelValue"]),o(L,{outlined:"",modelValue:e.image,"onUpdate:modelValue":a[6]||(a[6]=t=>e.image=t)},{prepend:c(()=>[o(N,{name:"attach_file"})]),_:1},8,["modelValue"])]),_:1}),o(Y,{align:"center",class:"text-primary"},{default:c(()=>[o(r,{disabled:e.loading,type:"submit",color:"primary",label:"\u9001\u51FA"},null,8,["disabled"]),o(r,{disabled:e.loading,onClick:a[7]||(a[7]=t=>e.dialog=!1),label:"\u53D6\u6D88",color:"primary",flat:"",class:"q-ml-sm"},null,8,["disabled"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])]))}};var ye=G(ne,[["__scopeId","data-v-5cb9a2e1"]]);export{ye as default};
