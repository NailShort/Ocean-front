import{aA as p,aM as _,aN as u,k as r,l as c,m as t,d as o,Q as i,F as f,aO as g,aP as m,aQ as y,t as h,u as v}from"./index.7857a1ea.js";import{C as S}from"./ClownFish.b7135098.js";import{_ as w}from"./plugin-vue_export-helper.21dcd24c.js";const n=s=>(h("data-v-da496330"),s=s(),v(),s),b={id:"saf"},F={class:"contant row"},k=n(()=>t("div",{class:"title col-12"},[t("div",{class:"ch"},"\u5C0F\u578B\u795E\u4ED9"),t("div",{class:"eg"},"Sm Angle Fish")],-1)),A={class:"route col-12 row items-center justify-start"},B=n(()=>t("span",null,">",-1)),x=n(()=>t("span",null,">",-1)),I={class:"card col-12 row items-center justify-center"},N={__name:"SAngelFish",props:{_id:{type:String,default:""},name:{type:String,default:""},price:{type:Number,default:0},description:{type:String,default:""},image:{type:String,default:""},sell:{type:Boolean,default:!1},category:{type:String,default:""}},setup(s){const d=p([]);return(async()=>{var a,l;try{const{data:e}=await _.get("/fishs/category?category=\u5C0F\u578B\u795E\u4ED9");d.push(...e.result)}catch(e){u.fire({icon:"error",title:"\u5931\u6557",text:((l=(a=e==null?void 0:e.response)==null?void 0:a.data)==null?void 0:l.message)||"\u767C\u751F\u932F\u8AA4"})}})(),(a,l)=>(r(),c("div",b,[t("div",F,[k,t("div",A,[o(i,{to:"/",flat:"",style:{color:"black"},label:"\u9996\u9801"}),B,o(i,{to:"/fish",flat:"",style:{color:"black"},label:"\u9B5A\u7A2E\u5716\u9451"}),x,o(i,{disable:!a.progress,flat:"",style:{color:"gray"},label:"\u5C0F\u578B\u795E\u4ED9"},null,8,["disable"])]),t("div",I,[(r(!0),c(f,null,g(d,e=>(r(),c("div",{class:"art col-12 col-sm-6 col-md-3 col-lg-2 row warp justify-center items-center",key:e._id},[o(S,m(y(e)),null,16)]))),128))])])]))}};var C=w(N,[["__scopeId","data-v-da496330"]]);export{C as default};
