import{aA as p,aM as _,aN as u,k as c,l as r,m as t,d as o,Q as i,F as f,aO as h,aP as y,aQ as m,t as g,u as v}from"./index.3e86bd75.js";import{C as w}from"./ClownFish.2c19fef1.js";import{_ as S}from"./plugin-vue_export-helper.21dcd24c.js";const n=s=>(g("data-v-2ffea95c"),s=s(),v(),s),b={id:"cf"},F={class:"contant row"},k=n(()=>t("div",{class:"title col-12"},[t("div",{class:"ch"},"\u6D77\u91D1\u9B5A"),t("div",{class:"eg"},"Anthias Fish")],-1)),A={class:"route col-12 row items-center justify-start"},B=n(()=>t("span",null,">",-1)),x=n(()=>t("span",null,">",-1)),I={class:"card col-12 row items-center justify-center"},N={__name:"AnthiasFish",props:{_id:{type:String,default:""},name:{type:String,default:""},price:{type:Number,default:0},description:{type:String,default:""},image:{type:String,default:""},sell:{type:Boolean,default:!1},category:{type:String,default:""}},setup(s){const d=p([]);return(async()=>{var a,l;try{const{data:e}=await _.get("/fishs/category?category=\u6D77\u91D1\u9B5A");d.push(...e.result)}catch(e){u.fire({icon:"error",title:"\u5931\u6557",text:((l=(a=e==null?void 0:e.response)==null?void 0:a.data)==null?void 0:l.message)||"\u767C\u751F\u932F\u8AA4"})}})(),(a,l)=>(c(),r("div",b,[t("div",F,[k,t("div",A,[o(i,{to:"/",flat:"",style:{color:"black"},label:"\u9996\u9801"}),B,o(i,{to:"/fish",flat:"",style:{color:"black"},label:"\u9B5A\u7A2E\u5716\u9451"}),x,o(i,{disable:!a.progress,flat:"",style:{color:"gray"},label:"\u6D77\u91D1\u9B5A"},null,8,["disable"])]),t("div",I,[(c(!0),r(f,null,h(d,e=>(c(),r("div",{class:"art col-12 col-sm-6 col-md-3 col-lg-2 row warp justify-center items-center",key:e._id},[o(w,y(m(e)),null,16)]))),128))])])]))}};var C=S(N,[["__scopeId","data-v-2ffea95c"]]);export{C as default};
