import{aA as p,aM as _,aN as u,k as r,l as c,m as e,d as o,Q as i,F as f,aO as y,aP as m,aQ as h,t as g,u as v}from"./index.ea07f8f0.js";import{C as b}from"./ClownFish.bb1a4b05.js";import{_ as w}from"./plugin-vue_export-helper.21dcd24c.js";const n=s=>(g("data-v-b37cba30"),s=s(),v(),s),B={id:"bf"},S={class:"contant row"},F=n(()=>e("div",{class:"title col-12"},[e("div",{class:"ch"},"\u8776\u9B5A"),e("div",{class:"eg"},"Butterfly Fish")],-1)),k={class:"route col-12 row items-center justify-start"},x=n(()=>e("span",null,">",-1)),I=n(()=>e("span",null,">",-1)),N={class:"card col-12 row items-center justify-center"},j={__name:"ButterflyFish",props:{_id:{type:String,default:""},name:{type:String,default:""},price:{type:Number,default:0},description:{type:String,default:""},image:{type:String,default:""},sell:{type:Boolean,default:!1},category:{type:String,default:""}},setup(s){const d=p([]);return(async()=>{var a,l;try{const{data:t}=await _.get("/fishs/category?category=\u8776\u9B5A");d.push(...t.result)}catch(t){u.fire({icon:"error",title:"\u5931\u6557",text:((l=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:l.message)||"\u767C\u751F\u932F\u8AA4"})}})(),(a,l)=>(r(),c("div",B,[e("div",S,[F,e("div",k,[o(i,{to:"/",flat:"",style:{color:"black"},label:"\u9996\u9801"}),x,o(i,{to:"/fish",flat:"",style:{color:"black"},label:"\u9B5A\u7A2E\u5716\u9451"}),I,o(i,{disable:!a.progress,flat:"",style:{color:"gray"},label:"\u8776\u9B5A"},null,8,["disable"])]),e("div",N,[(r(!0),c(f,null,y(d,t=>(r(),c("div",{class:"art col-12 col-sm-6 col-md-3 col-lg-2 row warp justify-center items-center",key:t._id},[o(b,m(h(t)),null,16)]))),128))])])]))}};var V=w(j,[["__scopeId","data-v-b37cba30"]]);export{V as default};
