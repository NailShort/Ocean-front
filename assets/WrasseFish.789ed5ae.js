import{aA as p,aM as _,aN as u,k as l,l as c,m as s,d as o,Q as i,F as f,aO as y,aP as m,aQ as h,t as g,u as v}from"./index.7857a1ea.js";import{C as b}from"./ClownFish.b7135098.js";import{_ as w}from"./plugin-vue_export-helper.21dcd24c.js";const n=t=>(g("data-v-b2533b24"),t=t(),v(),t),S={id:"wf"},F={class:"contant row"},k=n(()=>s("div",{class:"title col-12"},[s("div",{class:"ch"},"\u9686\u982D\u9B5A"),s("div",{class:"eg"},"Wrasse Fish")],-1)),B={class:"route col-12 row items-center justify-start"},x=n(()=>s("span",null,">",-1)),I=n(()=>s("span",null,">",-1)),N={class:"card col-12 row items-center justify-center"},W={__name:"WrasseFish",props:{_id:{type:String,default:""},name:{type:String,default:""},price:{type:Number,default:0},description:{type:String,default:""},image:{type:String,default:""},sell:{type:Boolean,default:!1},category:{type:String,default:""}},setup(t){const d=p([]);return(async()=>{var a,r;try{const{data:e}=await _.get("/fishs/category?category=\u9686\u982D\u9B5A");d.push(...e.result)}catch(e){u.fire({icon:"error",title:"\u5931\u6557",text:((r=(a=e==null?void 0:e.response)==null?void 0:a.data)==null?void 0:r.message)||"\u767C\u751F\u932F\u8AA4"})}})(),(a,r)=>(l(),c("div",S,[s("div",F,[k,s("div",B,[o(i,{to:"/",flat:"",style:{color:"black"},label:"\u9996\u9801"}),x,o(i,{to:"/fish",flat:"",style:{color:"black"},label:"\u9B5A\u7A2E\u5716\u9451"}),I,o(i,{disable:!a.progress,flat:"",style:{color:"gray"},label:"\u9686\u982D\u9B5A"},null,8,["disable"])]),s("div",N,[(l(!0),c(f,null,y(d,e=>(l(),c("div",{class:"art col-12 col-sm-6 col-md-3 col-lg-2 row warp justify-center items-center",key:e._id},[o(b,m(h(e)),null,16)]))),128))])])]))}};var C=w(W,[["__scopeId","data-v-b2533b24"]]);export{C as default};
