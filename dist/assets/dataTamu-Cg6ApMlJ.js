import{r as t,j as e}from"./index-BxeYf06N.js";import{C as u,a as m}from"./CCardBody-9-TyJ2V3.js";import{C}from"./CCardHeader-DIYaTK_F.js";import{C as d,a as l}from"./CRow-B_r9SPmL.js";import{C as p}from"./CFormInput-Diq7Y-91.js";import{b as n}from"./index.esm-CJR-izqj.js";import{a as w,b as L,d as T,e as y}from"./DefaultLayout-C6jlVHgK.js";import{C as b,a as N,b as j,c as r,d as f,e as o}from"./CTable-DENMha1t.js";import{C as g}from"./CCardFooter-C36i01Xm.js";import"./hitung-WR2eK8mA.js";const A=()=>{const[c,v]=t.useState([{no:1,namaTamu:"VTAES",email:"VTAES@gmail.com",noHp:"081381387293",asal:"-",tujuan:"IT",nomorPolisi:"B 1234 UV",typeKendaraan:"-",jamMasuk:"0000-00-00 00:00:00",jamPulang:"0000-00-00 00:00:00",status:"masih di area"}]),[a,x]=t.useState(""),i=c.filter(s=>s.namaTamu.toLowerCase().includes(a.toLowerCase())||s.email.toLowerCase().includes(a.toLowerCase())||s.noHp.toLowerCase().includes(a.toLowerCase())||s.asal.toLowerCase().includes(a.toLowerCase())||s.tujuan.toLowerCase().includes(a.toLowerCase())||s.nomorPolisi.toLowerCase().includes(a.toLowerCase())||s.typeKendaraan.toLowerCase().includes(a.toLowerCase())||s.jamMasuk.toLowerCase().includes(a.toLowerCase())||s.jamPulang.toLowerCase().includes(a.toLowerCase())||s.status.toLowerCase().includes(a.toLowerCase()));return e.jsxs(u,{className:"mb-4",children:[e.jsx(C,{children:e.jsx("h5",{children:"Data Tamu"})}),e.jsxs(m,{children:[e.jsx(d,{className:"mb-3",children:e.jsx(l,{xs:"auto",className:"ms-auto text-end",children:e.jsx(p,{type:"text",placeholder:"Search",value:a,onChange:s=>x(s.target.value)})})}),e.jsxs(d,{className:"mb-3",children:[e.jsxs(l,{children:[e.jsx(n,{color:"secondary",variant:"outline",className:"me-2",children:"Copy"}),e.jsx(n,{color:"secondary",variant:"outline",className:"me-2",children:"CSV"}),e.jsx(n,{color:"secondary",variant:"outline",className:"me-2",children:"Excel"}),e.jsx(n,{color:"secondary",variant:"outline",className:"me-2",children:"PDF"}),e.jsx(n,{color:"secondary",variant:"outline",children:"Print"})]}),e.jsx(l,{xs:"auto",children:e.jsxs(w,{children:[e.jsx(L,{color:"secondary",children:"Column visibility"}),e.jsx(T,{children:e.jsx(y,{children:"Show/Hide Columns"})})]})})]}),e.jsxs(b,{hover:!0,striped:!0,bordered:!0,responsive:!0,children:[e.jsx(N,{children:e.jsxs(j,{children:[e.jsx(r,{children:"No"}),e.jsx(r,{children:"Nama Tamu"}),e.jsx(r,{children:"Email"}),e.jsx(r,{children:"No Hp"}),e.jsx(r,{children:"Asal"}),e.jsx(r,{children:"Tujuan"}),e.jsx(r,{children:"Nomor Polisi"}),e.jsx(r,{children:"Type Kendaraan"}),e.jsx(r,{children:"Jam Masuk"}),e.jsx(r,{children:"Jam Pulang"}),e.jsx(r,{children:"Status"})]})}),e.jsx(f,{children:i.map((s,h)=>e.jsxs(j,{children:[e.jsx(o,{children:s.no}),e.jsx(o,{children:s.namaTamu}),e.jsx(o,{children:s.email}),e.jsx(o,{children:s.noHp}),e.jsx(o,{children:s.asal}),e.jsx(o,{children:s.tujuan}),e.jsx(o,{children:s.nomorPolisi}),e.jsx(o,{children:s.typeKendaraan}),e.jsx(o,{children:s.jamMasuk}),e.jsx(o,{children:s.jamPulang}),e.jsx(o,{children:s.status})]},h))})]}),e.jsx(g,{children:e.jsxs(d,{children:[e.jsx(l,{children:e.jsxs("div",{children:["Showing 1 to ",i.length," of ",c.length," entries"]})}),e.jsxs(l,{xs:"auto",className:"text-end",children:[e.jsx(n,{color:"secondary",size:"sm",disabled:!0,children:"Previous"}),e.jsx(n,{color:"secondary",size:"sm",className:"ms-2",children:"Next"})]})]})})]})]})};export{A as default};