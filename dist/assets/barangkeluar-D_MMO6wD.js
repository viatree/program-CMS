import{r as l,j as e}from"./index-BxeYf06N.js";import{b as i,a as b}from"./index.esm-CJR-izqj.js";import{C as M,a as S}from"./CCardBody-9-TyJ2V3.js";import{C as A}from"./CCardHeader-DIYaTK_F.js";import{C as o,a as t}from"./CRow-B_r9SPmL.js";import{c as k}from"./cil-plus-D8mtC-W5.js";import{C as K,a as P,b as N,c as s,d as O,e as r}from"./CTable-DENMha1t.js";import{C as R,a as D,b as T,c as v}from"./CModalHeader-u3sehd34.js";import{C as y}from"./CForm-Bau54mqM.js";import{a as h,C as u}from"./CFormInput-Diq7Y-91.js";import{c as E}from"./cil-save-CHBg7z_U.js";import"./DefaultLayout-C6jlVHgK.js";import"./hitung-WR2eK8mA.js";const z=()=>{const[c,f]=l.useState([{no:1,tgl:"01/10/2024",customer:"PT. AGRINDO MAJU",kodeBarang:"MP-AGRO0010",namaItem:"BOX VALVE ASSY SC-20/30 37X37X70 MM (2004)",jumlah:"1.268",ket:"Habis"},{no:2,tgl:"01/10/2024",customer:"PT. AGRINDO MAJU",kodeBarang:"MP-AGRO0012",namaItem:"BOX VALVE ASSY SC/N-45 43X43X80 MM (2004)",jumlah:"1.268",ket:"Kelar"},{no:3,tgl:"01/10/2024",customer:"PT. AGRINDO MAJU",kodeBarang:"MP-AGRO0013",namaItem:"PLASTIK TASCO 70X100 MM PP 80 MICRON",jumlah:"1.268",ket:"Jangan"},{no:4,tgl:"01/10/2024",customer:"PT. AIMSKINCARE",kodeBarang:"MP-AIM00002",namaItem:"102558 INNER BOX RIGO LIQUID POWDER 100 ML (2305)",jumlah:"1.268",ket:"Boleh"}]),[B,n]=l.useState(!1),[d,x]=l.useState(""),[j,C]=l.useState(""),[p,g]=l.useState(""),I=a=>{if(a.preventDefault(),!d){SweetAlert({icon:"error",text:"Please input Code Product"});return}const m={no:c.length+1,tgl:new Date().toLocaleDateString(),customer:"New Customer",kodeBarang:d,namaItem:"NEW-CODE",jumlah:p,ket:j};f([...c,m]),x(""),C(""),g(""),n(!1),SweetAlert({icon:"success",text:"Data added successfully"})};return e.jsxs(M,{className:"mb-4",children:[e.jsx(A,{children:e.jsx(o,{children:e.jsx(t,{children:e.jsx("h5",{children:"Data Barang Keluar"})})})}),e.jsxs(S,{children:[e.jsx(t,{className:"text-right",children:e.jsxs(i,{color:"primary",onClick:()=>n(!0),children:[e.jsx(b,{icon:k,className:"me-2"}),"Input"]})}),e.jsxs(K,{hover:!0,striped:!0,bordered:!0,responsive:!0,children:[e.jsx(P,{children:e.jsxs(N,{children:[e.jsx(s,{children:"No"}),e.jsx(s,{children:"Tanggal"}),e.jsx(s,{children:"Nama Customer"}),e.jsx(s,{children:"Kode Barang"}),e.jsx(s,{children:"Nama Item"}),e.jsx(s,{children:"Kuantitas"}),e.jsx(s,{children:"Keterangan"})]})}),e.jsx(O,{children:c.map((a,m)=>e.jsxs(N,{children:[e.jsx(r,{children:a.no}),e.jsx(r,{children:a.tgl}),e.jsx(r,{children:a.customer}),e.jsx(r,{children:a.kodeBarang}),e.jsx(r,{children:a.namaItem}),e.jsx(r,{children:a.jumlah}),e.jsx(r,{children:a.ket})]},m))})]})]}),e.jsxs(R,{visible:B,onClose:()=>n(!1),children:[e.jsx(D,{closeButton:!0,children:"Input Barang"}),e.jsx(T,{children:e.jsxs(y,{onSubmit:I,children:[e.jsxs(o,{className:"mb-3",children:[e.jsx(h,{className:"col-sm-2 col-form-label",children:"Kode Barang"}),e.jsx(t,{sm:10,children:e.jsx(u,{type:"text",placeholder:"Input Kode Barang",value:d,onChange:a=>x(a.target.value)})})]}),e.jsxs(o,{className:"mb-3",children:[e.jsx(h,{className:"col-sm-2 col-form-label",children:"Kuantitas"}),e.jsx(t,{sm:10,children:e.jsx(u,{type:"text",placeholder:"Input Jumlah Kuantitas",value:p,onChange:a=>g(a.target.value)})})]}),e.jsxs(o,{className:"mb-3",children:[e.jsx(h,{className:"col-sm-2 col-form-label",children:"Keterangan"}),e.jsx(t,{sm:10,children:e.jsx(u,{type:"text",placeholder:"Input Keterangan",value:j,onChange:a=>C(a.target.value)})})]})]})}),e.jsxs(v,{children:[e.jsx(i,{color:"secondary",onClick:()=>n(!1),children:"Close"}),e.jsxs(i,{color:"primary",onClick:I,children:[e.jsx(b,{icon:E,className:"me-2"}),"Save"]})]})]})]})};export{z as default};