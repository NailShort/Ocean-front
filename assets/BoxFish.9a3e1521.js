import{aA as p,aM as _,aN as u,k as r,l as c,m as t,d as o,Q as i,F as f,aO as y,aP as m,aQ as h,t as g,u as v}from"./index.7857a1ea.js";import{C as b}from"./ClownFish.b7135098.js";import{_ as w}from"./plugin-vue_export-helper.21dcd24c.js";const n=s=>(g("data-v-445e08a3"),s=s(),v(),s),x={id:"boxf"},B={class:"contant row"},S=n(()=>t("div",{class:"title col-12"},[t("div",{class:"ch"},"\u7BB1\u9B68"),t("div",{class:"eg"},"Box Fish")],-1)),F={class:"route col-12 row items-center justify-start"},k=n(()=>t("span",null,">",-1)),I=n(()=>t("span",null,">",-1)),N={class:"card col-12 row items-center justify-center"},j={__name:"BoxFish",props:{_id:{type:String,default:""},name:{type:String,default:""},price:{type:Number,default:0},description:{type:String,default:""},image:{type:String,default:""},sell:{type:Boolean,default:!1},category:{type:String,default:""}},setup(s){const d=p([]);return(async()=>{var a,l;try{const{data:e}=await _.get("/fishs/category?category=\u7BB1\u9B68");d.push(...e.result)}catch(e){u.fire({icon:"error",title:"\u5931\u6557",text:((l=(a=e==null?void 0:e.response)==null?void 0:a.data)==null?void 0:l.message)||"\u767C\u751F\u932F\u8AA4"})}})(),(a,l)=>(r(),c("div",x,[t("div",B,[S,t("div",F,[o(i,{to:"/",flat:"",style:{color:"black"},label:"\u9996\u9801"}),k,o(i,{to:"/fish",flat:"",style:{color:"black"},label:"\u9B5A\u7A2E\u5716\u9451"}),I,o(i,{disable:!a.progress,flat:"",style:{color:"gray"},label:"\u7BB1\u9B68"},null,8,["disable"])]),t("div",N,[(r(!0),c(f,null,y(d,e=>(r(),c("div",{class:"art col-12 col-sm-6 col-md-3 col-lg-2 row warp justify-center items-center",key:e._id},[o(b,m(h(e)),null,16)]))),128))])])]))}};var V=w(j,[["__scopeId","data-v-445e08a3"]]);export{V as default};
