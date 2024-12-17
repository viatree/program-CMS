import{r as h,j as r}from"./index-BxeYf06N.js";import{b as a,a as m}from"./index.esm-CJR-izqj.js";import{C as g,a as k}from"./CCardBody-9-TyJ2V3.js";import{C as A}from"./CCardHeader-DIYaTK_F.js";import{C as c,a as o}from"./CRow-B_r9SPmL.js";import{c as w}from"./cil-plus-D8mtC-W5.js";import{C as b}from"./CFormInput-Diq7Y-91.js";import{a as x,b as p,d as j,e as i}from"./DefaultLayout-C6jlVHgK.js";import{C as N,a as D,b as u,c as l,d as T,e}from"./CTable-DENMha1t.js";import{C as H}from"./CCardFooter-C36i01Xm.js";import"./hitung-WR2eK8mA.js";var P=["512 512","<polygon fill='var(--ci-primary-color, currentColor)' points='48 48 176 48 176 16 16 16 16 176 48 176 48 48' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M176,176V80H80v96h96Zm-64-64h32v32H112Z' class='ci-primary'/><polygon fill='var(--ci-primary-color, currentColor)' points='328 48 464 48 464 176 496 176 496 16 328 16 328 48' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M432,176V80H336v96h96Zm-64-64h32v32H368Z' class='ci-primary'/><polygon fill='var(--ci-primary-color, currentColor)' points='176 464 48 464 48 336 16 336 16 496 176 496 176 464' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M176,336H80v96h96V336Zm-32,64H112V368h32Z' class='ci-primary'/><polygon fill='var(--ci-primary-color, currentColor)' points='464 464 328 464 328 496 496 496 496 336 464 336 464 464' class='ci-primary'/><polygon fill='var(--ci-primary-color, currentColor)' points='272 304 400 304 400 368 432 368 432 272 272 272 272 304' class='ci-primary'/><polygon fill='var(--ci-primary-color, currentColor)' points='432 432 432 400 240 400 240 272 80 272 80 304 208 304 208 432 432 432' class='ci-primary'/><rect width='32' height='96' x='208' y='80' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><polygon fill='var(--ci-primary-color, currentColor)' points='80 240 304 240 304 80 272 80 272 208 80 208 80 240' class='ci-primary'/><rect width='96' height='32' x='336' y='208' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='336' y='336' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='272' y='336' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/>"];const F=()=>{const[t,S]=h.useState([{no:1,kodeAsset:"Dum-IT-LEP-093",namaAsset:"thinkpad yoga 370",lokasi:"Ruang Staff 1",sn:"00999102003982",tglMasuk:"2024-09-13",tglKeluar:"2024-12-11",status:"Good"},{no:2,kodeAsset:"Dum-IT-LEP-092",namaAsset:"thinkpad",lokasi:"Ruang Staff",sn:"-",tglMasuk:"2024-08-13",tglKeluar:"2005-11-13",status:"Good"}]),[n,C]=h.useState(""),d=t.filter(s=>s.namaAsset.toLowerCase().includes(n.toLowerCase())||s.kodeAsset.toLowerCase().includes(n.toLowerCase())),y=s=>{alert(`Delete ${s}`)},v=s=>{alert(`Edit ${s}`)};return r.jsxs(g,{className:"mb-4",children:[r.jsx(A,{children:r.jsx(c,{children:r.jsx(o,{children:r.jsx("h5",{children:"Data Barang"})})})}),r.jsxs(k,{children:[r.jsxs(c,{className:"mb-3",children:[r.jsx(o,{xs:"auto",children:r.jsxs(a,{color:"primary",children:[r.jsx(m,{icon:w}),"Add"]})}),r.jsx(o,{xs:"auto",children:r.jsxs(a,{color:"success",children:[r.jsx(m,{icon:P})," Print semua Qrcode"]})}),r.jsx(o,{xs:"auto",className:"ms-auto",children:r.jsx(b,{type:"text",placeholder:"Search",value:n,onChange:s=>C(s.target.value)})})]}),r.jsxs(c,{className:"mb-3",children:[r.jsxs(o,{children:[r.jsx(a,{color:"secondary",variant:"outline",className:"me-2",children:"Copy"}),r.jsx(a,{color:"secondary",variant:"outline",className:"me-2",children:"CSV"}),r.jsx(a,{color:"secondary",variant:"outline",className:"me-2",children:"Excel"}),r.jsx(a,{color:"secondary",variant:"outline",className:"me-2",children:"PDF"}),r.jsx(a,{color:"secondary",variant:"outline",children:"Print"})]}),r.jsx(o,{xs:"auto",children:r.jsxs(x,{children:[r.jsx(p,{color:"secondary",children:"Column visibility"}),r.jsx(j,{children:r.jsx(i,{children:"Show/Hide Columns"})})]})})]}),r.jsxs(N,{hover:!0,striped:!0,bordered:!0,responsive:!0,children:[r.jsx(D,{children:r.jsxs(u,{children:[r.jsx(l,{children:"No"}),r.jsx(l,{children:"Kode Asset"}),r.jsx(l,{children:"Nama"}),r.jsx(l,{children:"Lokasi"}),r.jsx(l,{children:"SN"}),r.jsx(l,{children:"Tanggal Masuk"}),r.jsx(l,{children:"Tanggal Keluar"}),r.jsx(l,{children:"Status"}),r.jsx(l,{children:"Aksi"})]})}),r.jsx(T,{children:d.map((s,f)=>r.jsxs(u,{children:[r.jsx(e,{children:s.no}),r.jsx(e,{children:s.kodeAsset}),r.jsx(e,{children:s.namaAsset}),r.jsx(e,{children:s.lokasi}),r.jsx(e,{children:s.sn}),r.jsx(e,{children:s.tglMasuk}),r.jsx(e,{children:s.tglKeluar}),r.jsx(e,{children:s.status}),r.jsx(e,{children:r.jsxs(x,{children:[r.jsx(p,{color:"secondary",variant:"outline",children:"Actions"}),r.jsxs(j,{children:[r.jsx(i,{onClick:()=>alert(`Print ${s.namaAsset}`),children:"Print"}),r.jsx(i,{onClick:()=>alert(`Pindah GA ${s.namaAsset}`),children:"Pindah GA"}),r.jsx(i,{onClick:()=>v(s.namaAsset),children:"Edit"}),r.jsx(i,{onClick:()=>y(s.namaAsset),children:"Hapus"})]})]})})]},f))})]}),r.jsx(H,{children:r.jsxs(c,{children:[r.jsx(o,{children:r.jsxs("div",{children:["Showing 1 to ",d.length," of ",t.length," entries"]})}),r.jsxs(o,{xs:"auto",className:"text-end",children:[r.jsx(a,{color:"secondary",size:"sm",disabled:!0,children:"Previous"}),r.jsx(a,{color:"secondary",size:"sm",className:"ms-2",children:"Next"})]})]})})]})]})};export{F as default};
