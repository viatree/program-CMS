import{r as d,j as e}from"./index-BxeYf06N.js";import{C as j,a as C}from"./CCardBody-9-TyJ2V3.js";import{C as u}from"./CCardHeader-DIYaTK_F.js";import{C as t,a}from"./CRow-B_r9SPmL.js";import{C as p}from"./CFormInput-Diq7Y-91.js";import{b as r}from"./index.esm-CJR-izqj.js";import{a as v,b as S,d as b,e as w}from"./DefaultLayout-C6jlVHgK.js";import{C as N,a as f,b as c,c as o,d as y,e as n}from"./CTable-DENMha1t.js";import{C as D}from"./CCardFooter-C36i01Xm.js";import"./hitung-WR2eK8mA.js";const M=()=>{const[i,T]=d.useState([{no:1,namaSurvei:"Survei Catering",department:"IT",nilai:16,status:"Selesai"}]),[l,x]=d.useState(""),h=i.filter(s=>s.department.toLowerCase().includes(l.toLowerCase())||s.ruangan.toLowerCase().includes(l.toLowerCase())||s.isiSaran.toLowerCase().includes(l.toLowerCase()));return e.jsxs(j,{className:"mb-4",children:[e.jsx(u,{children:e.jsx("h5",{children:"Data Survei"})}),e.jsxs(C,{children:[e.jsx(t,{className:"mb-3",children:e.jsx(a,{xs:"auto",className:"ms-auto text-end",children:e.jsx(p,{type:"text",placeholder:"Search",value:l,onChange:s=>x(s.target.value)})})}),e.jsxs(t,{className:"mb-3",children:[e.jsxs(a,{children:[e.jsx(r,{color:"secondary",variant:"outline",className:"me-2",children:"Copy"}),e.jsx(r,{color:"secondary",variant:"outline",className:"me-2",children:"CSV"}),e.jsx(r,{color:"secondary",variant:"outline",className:"me-2",children:"Excel"}),e.jsx(r,{color:"secondary",variant:"outline",className:"me-2",children:"PDF"}),e.jsx(r,{color:"secondary",variant:"outline",children:"Print"})]}),e.jsx(a,{xs:"auto",children:e.jsxs(v,{children:[e.jsx(S,{color:"secondary",children:"Column visibility"}),e.jsx(b,{children:e.jsx(w,{children:"Show/Hide Columns"})})]})})]}),e.jsxs(N,{hover:!0,striped:!0,bordered:!0,responsive:!0,children:[e.jsx(f,{children:e.jsxs(c,{children:[e.jsx(o,{children:"No"}),e.jsx(o,{children:"Nama Survei"}),e.jsx(o,{children:"Department"}),e.jsx(o,{children:"Nilai"}),e.jsx(o,{children:"Status"})]})}),e.jsx(y,{children:i.map((s,m)=>e.jsxs(c,{children:[e.jsx(n,{children:s.no}),e.jsx(n,{children:s.namaSurvei}),e.jsx(n,{children:s.department}),e.jsx(n,{children:s.nilai}),e.jsx(n,{children:s.status})]},m))})]}),e.jsx(D,{children:e.jsxs(t,{children:[e.jsx(a,{children:e.jsxs("div",{children:["Showing 1 to ",h.length," of ",i.length," entries"]})}),e.jsxs(a,{xs:"auto",className:"text-end",children:[e.jsx(r,{color:"secondary",size:"sm",disabled:!0,children:"Previous"}),e.jsx(r,{color:"secondary",size:"sm",className:"ms-2",children:"Next"})]})]})})]})]})};export{M as default};
