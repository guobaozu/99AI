
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as h,y as x,z as A,A as L,B as D,C as b,x as $,D as r,F as H,o as n,c as g,a,e as o,G as v,b as t,H as I,I as l,J as u,f as d,T,w as V,v as z,K,L as N,M as P,g as R,h as c,_ as E,n as F}from"./index-88a47d42.js";import{_ as G}from"./index-bbabd7bb.js";import J from"./link-b770fc6a.js";import U from"./index-80c69457.js";import j from"./index-7ce7d7e6.js";import q from"./index-b807b4af.js";import O from"./index-308c0eec.js";import Q from"./index-6565fa1a.js";import W from"./index-930d2c6c.js";import X from"./index-9ee83200.js";import{u as Y}from"./index-0da498ec.js";import{u as Z}from"./useMenu-d4c6ec4e.js";import"./config-28d87da8.js";import"./index-4944a384.js";import"./index-525b6d75.js";import"./index-c2c3e105.js";import"./index-69de38c3.js";const ee={class:"layout"},te={id:"app-main"},oe={class:"wrapper"},se={class:"main"},ne={key:0},ae=h({name:"Layout"}),ie=h({...ae,setup(re){const _=R(),e=x(),k=A(),m=L(),f=D(()=>!!_.meta.link);return b(()=>e.settings.menu.subMenuCollapse,s=>{e.mode==="mobile"&&(s?document.body.classList.remove("overflow-hidden"):document.body.classList.add("overflow-hidden"))}),b(()=>_.path,()=>{e.mode==="mobile"&&e.$patch(s=>{s.settings.menu.subMenuCollapse=!0})}),$(()=>{r("f5",s=>{e.settings.toolbar.enablePageReload&&(s.preventDefault(),Y().reload())}),r("alt+`",s=>{e.settings.menu.enableHotkeys&&(s.preventDefault(),Z().switchTo(m.actived+1<m.allMenus.length?m.actived+1:0))})}),H(()=>{r.unbind("f5"),r.unbind("alt+`")}),(s,i)=>{const y=c("router-view"),S=G,C=c("el-backtop"),w=E,M=c("el-icon");return n(),g("div",ee,[a("div",te,[o(U),a("div",oe,[a("div",{class:v(["sidebar-container",{show:t(e).mode==="mobile"&&!t(e).settings.menu.subMenuCollapse}])},[o(j),o(q)],2),a("div",{class:v(["sidebar-mask",{show:t(e).mode==="mobile"&&!t(e).settings.menu.subMenuCollapse}]),onClick:i[0]||(i[0]=p=>t(e).toggleSidebarCollapse())},null,2),a("div",{class:"main-container",style:I({"padding-bottom":s.$route.meta.paddingBottom})},[t(e).settings.menu.menuMode==="head"&&!t(e).settings.menu.enableSubMenuCollapseButton&&!t(e).settings.breadcrumb.enable?u("",!0):(n(),l(O,{key:0})),a("div",se,[o(y,null,{default:d(({Component:p,route:B})=>[o(T,{name:"main",mode:"out-in",appear:""},{default:d(()=>[(n(),l(N,{include:t(k).list},[V((n(),l(K(p),{key:B.fullPath})),[[z,!t(f)]])],1032,["include"]))]),_:2},1024)]),_:1}),t(f)?(n(),l(J,{key:0})):u("",!0)]),o(S)],4)]),o(C,{right:20,bottom:20,title:"回到顶部"})]),o(Q),o(W),t(e).settings.app.enableAppSetting?(n(),g("div",ne,[o(M,{class:"app-setting",onClick:i[1]||(i[1]=p=>t(P).emit("global-app-setting-toggle"))},{default:d(()=>[o(w,{name:"ep:setting"})]),_:1}),o(X)])):u("",!0)])}}});const Me=F(ie,[["__scopeId","data-v-096f3f7e"]]);export{Me as default};