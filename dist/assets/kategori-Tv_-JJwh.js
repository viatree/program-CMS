import{r as t,j as e,L as k}from"./index-BxeYf06N.js";import{a as u,b as w}from"./index.esm-CJR-izqj.js";import{a as P,S as o}from"./sweetalert2.esm.all-CYPmnruj.js";import{C as B,a as A}from"./CCardBody-9-TyJ2V3.js";import{C as F}from"./CCardHeader-DIYaTK_F.js";import{C as y,a as i}from"./CRow-B_r9SPmL.js";import{c as K}from"./cil-plus-D8mtC-W5.js";import{C as H}from"./CFormInput-Diq7Y-91.js";import{C as R,a as z,b as T,c as n,d as I,e as c}from"./CTable-DENMha1t.js";import{c as O,C as Y,a as f}from"./cil-pen-DBGMq91X.js";import{c as $}from"./cil-trash-CBbKHhHb.js";import{C as M}from"./CCardFooter-C36i01Xm.js";const re=()=>{const[v,S]=t.useState([]),[l,D]=t.useState(""),[_,g]=t.useState(!0),[r,L]=t.useState(1),d=10,p=async()=>{g(!0);try{const a=await P.get("http://192.168.2.9:4001/kategori");a.data.status==="ok"&&S(a.data.data)}catch(a){console.error("Error fetching data:",a)}finally{g(!1)}};t.useEffect(()=>{p()},[]);const h=v.filter(a=>a.nama.toLowerCase().includes(l.toLowerCase())||a.kode.toLowerCase().includes(l.toLowerCase())),m=r*d,x=m-d,N=h.slice(x,m),b=Math.ceil(h.length/d),E=a=>{o.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!"}).then(s=>{s.isConfirmed&&P.delete(`http://192.168.2.9:4001/kategori/${a}`).then(j=>{j.data.status==="ok"?(o.fire("Deleted!",j.data.message,"success"),p()):o.fire("Error",j.data.message,"error")}).catch(()=>{o.fire("Error","Failed to delete category","error")})})},C=a=>{L(a)};return e.jsxs(B,{className:"mb-4",children:[e.jsx(F,{children:e.jsx("h5",{children:"Data Kategori"})}),e.jsxs(A,{children:[e.jsxs(y,{className:"mb-3",children:[e.jsx(i,{children:e.jsxs(k,{to:"/kategori/add",className:"btn btn-primary",children:[e.jsx(u,{icon:K,className:"me-2"}),"Add Kategori"]})}),e.jsx(i,{xs:"auto",children:e.jsx(H,{type:"text",placeholder:"Search",value:l,onChange:a=>D(a.target.value)})})]}),e.jsxs(R,{hover:!0,striped:!0,bordered:!0,responsive:!0,children:[e.jsx(z,{children:e.jsxs(T,{children:[e.jsx(n,{children:"No."}),e.jsx(n,{children:"Kode"}),e.jsx(n,{children:"Nama"}),e.jsx(n,{children:"Action"})]})}),e.jsx(I,{children:N.map((a,s)=>e.jsxs(T,{children:[e.jsx(c,{children:x+s+1}),e.jsx(c,{children:a.kode}),e.jsx(c,{children:a.nama}),e.jsxs(c,{children:[e.jsx(k,{to:`/kategori/edit/${a.id}`,children:e.jsx(w,{color:"info",size:"sm",children:e.jsx(u,{icon:O})})}),e.jsxs(w,{color:"danger",size:"sm",className:"ms-2",onClick:()=>E(a.id),children:[e.jsx(u,{icon:$})," "]})]})]},s))})]}),e.jsx(M,{children:e.jsxs(y,{children:[e.jsx(i,{children:e.jsxs("div",{children:["Showing ",x+1," to ",m," of ",h.length," entries"]})}),e.jsx(i,{xs:"auto",children:e.jsxs(Y,{"aria-label":"Page navigation example",children:[e.jsx(f,{disabled:r===1,onClick:()=>C(r-1),children:"Previous"}),[...Array(b)].map((a,s)=>e.jsx(f,{active:r===s+1,onClick:()=>C(s+1),children:s+1},s)),e.jsx(f,{disabled:r===b,onClick:()=>C(r+1),children:"Next"})]})})]})})]})]})};export{re as default};