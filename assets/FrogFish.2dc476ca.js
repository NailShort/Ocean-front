import{aA as p,aM as _,aN as u,k as l,l as c,m as t,d as o,Q as i,F as f,aO as g,aP as y,aQ as m,t as h,u as v}from"./index.3e86bd75.js";import{C as F}from"./ClownFish.2c19fef1.js";import{_ as w}from"./plugin-vue_export-helper.21dcd24c.js";const n=s=>(h("data-v-7872c3f0"),s=s(),v(),s),S={id:"ff"},b={class:"contant row"},k=n(()=>t("div",{class:"title col-12"},[t("div",{class:"ch"},"\u9752\u86D9"),t("div",{class:"eg"},"Frog Fish")],-1)),B={class:"route col-12 row items-center justify-start"},x=n(()=>t("span",null,">",-1)),I=n(()=>t("span",null,">",-1)),N={class:"card col-12 row items-center justify-center"},j={__name:"FrogFish",props:{_id:{type:String,default:""},name:{type:String,default:""},price:{type:Number,default:0},description:{type:String,default:""},image:{type:String,default:""},sell:{type:Boolean,default:!1},category:{type:String,default:""}},setup(s){const d=p([]);return(async()=>{var a,r;try{const{data:e}=await _.get("/fishs/category?category=\u9752\u86D9");d.push(...e.result)}catch(e){u.fire({icon:"error",title:"\u5931\u6557",text:((r=(a=e==null?void 0:e.response)==null?void 0:a.data)==null?void 0:r.message)||"\u767C\u751F\u932F\u8AA4"})}})(),(a,r)=>(l(),c("div",S,[t("div",b,[k,t("div",B,[o(i,{to:"/",flat:"",style:{color:"black"},label:"\u9996\u9801"}),x,o(i,{to:"/fish",flat:"",style:{color:"black"},label:"\u9B5A\u7A2E\u5716\u9451"}),I,o(i,{disable:!a.progress,flat:"",style:{color:"gray"},label:"\u9752\u86D9"},null,8,["disable"])]),t("div",N,[(l(!0),c(f,null,g(d,e=>(l(),c("div",{class:"art col-12 col-sm-6 col-md-3 col-lg-2 row warp justify-center items-center",key:e._id},[o(F,y(m(e)),null,16)]))),128))])])]))}};var V=w(j,[["__scopeId","data-v-7872c3f0"]]);export{V as default};
