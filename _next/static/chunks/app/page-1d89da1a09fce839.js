(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8572:function(e,n,i){Promise.resolve().then(i.bind(i,513))},513:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return p}});var t=i(3827),r=i(4090),s=i(4332),a=i(5816),l=i(8178),o=i(8416),d=i(9835),c=i(4272),u=i(7193),x=i(7095),h=i(7907);function g(){(0,h.useRouter)();let[e,n]=(0,r.useState)(20),[i,g]=(0,r.useState)([10,17]),[m,p]=(0,r.useState)(!1),[j,Z]=(0,r.useState)(""),f=e=>{p(!1);let t=Number(e);isNaN(t)?p(!0):(g(i.filter(e=>e<=t)),n(t))},v=e=>{Z(e)};return(0,t.jsxs)(s.Z,{direction:"column",sx:{backgroundColor:"white",paddingBottom:2,paddingTop:1,paddingLeft:3,paddingRight:6,borderRadius:2},children:[(0,t.jsxs)(s.Z,{direction:"row",gap:3,alignItems:"center",children:[(0,t.jsx)(a.Z,{placeholder:"session title",sx:{marginY:1,width:200},onChange:e=>{v(e.target.value)}}),(0,t.jsxs)(s.Z,{direction:"row",gap:1,alignItems:"center",children:[(0,t.jsx)(a.Z,{defaultValue:20,error:m,onBlur:e=>{f(e.target.value)},sx:{width:40},inputProps:{style:{textAlign:"center"}}}),(0,t.jsx)("div",{children:"min"})]}),(0,t.jsx)(l.Z,{onClick:()=>{if(m)return;let n=new URLSearchParams;n.set("min","".concat(e)),n.set("title",j);let t=[0,...i,e],r=[];for(let e=0;e<t.length-1;e++)r.push(t[e+1]-t[e]);n.set("points",r.join(",")),window.open("".concat("/timekeeper","/timer?").concat(n.toString()),"_blank")},size:"small",variant:"contained",disabled:m,sx:{textTransform:"none",marginTop:4},color:"primary",children:"Open Timer"})]}),(0,t.jsx)(o.Z,{sx:{paddingY:1}}),(0,t.jsxs)(s.Z,{direction:"column",sx:{marginTop:1},children:[(0,t.jsx)(d.Z,{sx:{textDecoration:"underline"},children:"Guide"}),(0,t.jsxs)(s.Z,{direction:"row",gap:3,alignItems:"center",sx:{marginTop:6},children:[(0,t.jsx)(c.Z,{width:300,children:(0,t.jsx)(u.ZP,{getAriaLabel:()=>"Milestone",value:i,onChange:(e,n)=>{g(n)},valueLabelDisplay:"on",track:!1,min:0,max:e})}),(0,t.jsxs)(x.Z,{sx:{paddingLeft:1},children:[(0,t.jsx)(l.Z,{variant:"contained",size:"small",color:"primary",onClick:()=>{g([...i,e])},disabled:i.length>=5,children:"+"}),(0,t.jsx)(l.Z,{variant:"contained",size:"small",color:"primary",onClick:()=>{g(i.slice(0,i.length-1))},disabled:i.length<1,children:"-"})]})]})]})]})}var m=i(792);function p(){let[e,n]=(0,r.useState)([1]),i=i=>{window.confirm("Do you delete this item?")&&n(e.filter(e=>e!=i))};return(0,t.jsxs)(s.Z,{sx:{paddingY:6},direction:"column",gap:0,alignItems:"center",children:[(0,t.jsx)(d.Z,{variant:"h3",gutterBottom:!0,children:"Time Keeper"}),(0,t.jsxs)("div",{children:[(0,t.jsx)(s.Z,{sx:{paddingY:3},direction:"column",gap:3,alignItems:"center",children:e.map(e=>(0,t.jsxs)("div",{style:{position:"relative"},children:[(0,t.jsx)(g,{}),(0,t.jsx)(m.Z,{sx:{position:"absolute",top:0,right:0,zIndex:10},onClick:()=>i(e)})]},"timer".concat(e)))}),(0,t.jsx)(x.Z,{children:(0,t.jsx)(l.Z,{variant:"contained",size:"large",onClick:()=>{n([...e,e[e.length-1]+1])},disabled:e.length>=10,sx:{textTransform:"none"},children:"Add a session"})})]})]})}}},function(e){e.O(0,[9,912,971,69,744],function(){return e(e.s=8572)}),_N_E=e.O()}]);