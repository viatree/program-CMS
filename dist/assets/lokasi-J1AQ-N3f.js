import{r,j as e,L as P}from"./index-BxeYf06N.js";import{a as i,b as C}from"./index.esm-CJR-izqj.js";import{a as w,S as n}from"./sweetalert2.esm.all-CYPmnruj.js";import{C as A,a as F}from"./CCardBody-9-TyJ2V3.js";import{C as H}from"./CCardHeader-DIYaTK_F.js";import{C as y,a as o}from"./CRow-B_r9SPmL.js";import{c as T}from"./cil-plus-D8mtC-W5.js";import{C as I}from"./CFormInput-Diq7Y-91.js";import{C as R,a as z,b as v,c as j,d as O,e as u}from"./CTable-DENMha1t.js";import{c as Y,C as $,a as f}from"./cil-pen-DBGMq91X.js";import{c as M}from"./cil-trash-CBbKHhHb.js";import{C as Q}from"./CCardFooter-C36i01Xm.js";const te=()=>{const[D,N]=r.useState([]),[p,S]=r.useState(""),[_,g]=r.useState(!0),[t,L]=r.useState(1),l=10,b=async()=>{g(!0);try{const s=await w.get("http://192.168.2.9:4001/lokasi");s.data.status==="ok"&&N(s.data.data)}catch(s){console.error("Error fetching data:",s)}finally{g(!1)}};r.useEffect(()=>{b()},[]);const c=D.filter(s=>s.nama.toLowerCase().includes(p.toLowerCase())),d=t*l,h=d-l,E=c.slice(h,d),k=Math.ceil(c.length/l),B=s=>{n.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!"}).then(a=>{a.isConfirmed&&w.delete(`http://192.168.2.9:4001/lokasi/${s}`).then(x=>{x.data.status==="ok"?(n.fire("Deleted!",x.data.message,"success"),b()):n.fire("Error",x.data.message,"error")}).catch(()=>{n.fire("Error","Failed to delete category","error")})})},m=s=>{L(s)};return e.jsxs(A,{className:"mb-4",children:[e.jsx(H,{children:e.jsx("h5",{children:"Data Lokasi"})}),e.jsxs(F,{children:[e.jsxs(y,{className:"mb-3",children:[e.jsx(o,{xs:"auto",children:e.jsxs(P,{to:"/lokasi/add",className:"btn btn-primary",children:[e.jsx(i,{icon:T,className:"me-2"}),"Add Lokasi"]})}),e.jsx(o,{xs:"auto",children:e.jsxs(C,{color:"success",className:"mt-2 text-white",children:[e.jsx(i,{icon:T}),"Print Qris"]})}),e.jsx(o,{xs:"auto",className:"ms-auto",children:e.jsx(I,{type:"text",placeholder:"Search",value:p,onChange:s=>S(s.target.value)})})]}),e.jsxs(R,{hover:!0,striped:!0,bordered:!0,responsive:!0,children:[e.jsx(z,{children:e.jsxs(v,{children:[e.jsx(j,{children:"ID"}),e.jsx(j,{children:"Nama"}),e.jsx(j,{children:"Aksi"})]})}),e.jsx(O,{children:E.map((s,a)=>e.jsxs(v,{children:[e.jsx(u,{children:h+a+1}),e.jsx(u,{children:s.nama}),e.jsxs(u,{children:[e.jsx(P,{to:`/lokasi/edit/${s.id}`,children:e.jsx(C,{color:"info",size:"sm",children:e.jsx(i,{icon:Y})})}),e.jsxs(C,{color:"danger",size:"sm",className:"ms-2",onClick:()=>B(s.id),children:[e.jsx(i,{icon:M})," "]})]})]},a))})]}),e.jsx(Q,{children:e.jsxs(y,{children:[e.jsx(o,{children:e.jsxs("div",{children:["Showing ",h+1," to ",d," of ",c.length," entries"]})}),e.jsx(o,{xs:"auto",children:e.jsxs($,{"aria-label":"Page navigation example",children:[e.jsx(f,{disabled:t===1,onClick:()=>m(t-1),children:"Previous"}),[...Array(k)].map((s,a)=>e.jsx(f,{active:t===a+1,onClick:()=>m(a+1),children:a+1},a)),e.jsx(f,{disabled:t===k,onClick:()=>m(t+1),children:"Next"})]})})]})})]})]})};export{te as default};
