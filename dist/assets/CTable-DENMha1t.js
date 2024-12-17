import{r as b,_ as m,R as s,b as a,c as v,P as o,d as u}from"./index-BxeYf06N.js";var P=b.forwardRef(function(e,l){var r,c=e.children,p=e.className,t=e.color,i=m(e,["children","className","color"]);return s.createElement("thead",a({className:v((r={},r["table-".concat(t)]=t,r),p)||void 0},i,{ref:l}),c)});P.propTypes={children:o.node,className:o.string,color:u};P.displayName="CTableHead";var O=b.forwardRef(function(e,l){var r,c=e.children,p=e.className,t=e.color,i=m(e,["children","className","color"]);return s.createElement("th",a({className:v((r={},r["table-".concat(t)]=t,r),p)||void 0},i,{ref:l}),c)});O.propTypes={children:o.node,className:o.string,color:u};O.displayName="CTableHeaderCell";var w=b.forwardRef(function(e,l){var r,c=e.children,p=e.className,t=e.color,i=m(e,["children","className","color"]);return s.createElement("tbody",a({className:v((r={},r["table-".concat(t)]=t,r),p)||void 0},i,{ref:l}),c)});w.propTypes={children:o.node,className:o.string,color:u};w.displayName="CTableBody";var E=b.forwardRef(function(e,l){var r,c=e.children,p=e.active,t=e.align,i=e.className,f=e.color,d=m(e,["children","active","align","className","color"]),h=d.scope?"th":"td";return s.createElement(h,a({className:v((r={},r["align-".concat(t)]=t,r["table-active"]=p,r["table-".concat(f)]=f,r),i)||void 0},d,{ref:l}),c)});E.propTypes={active:o.bool,align:o.oneOf(["bottom","middle","top"]),children:o.node,className:o.string,color:u};E.displayName="CTableDataCell";var N=b.forwardRef(function(e,l){var r,c=e.children,p=e.active,t=e.align,i=e.className,f=e.color,d=m(e,["children","active","align","className","color"]);return s.createElement("tr",a({className:v((r={},r["align-".concat(t)]=t,r["table-active"]=p,r["table-".concat(f)]=f,r),i)||void 0},d,{ref:l}),c)});N.propTypes={active:o.bool,align:o.oneOf(["bottom","middle","top"]),children:o.node,className:o.string,color:u};N.displayName="CTableRow";var R=b.forwardRef(function(e,l){var r,c=e.children,p=e.className,t=e.color,i=m(e,["children","className","color"]);return s.createElement("tfoot",a({className:v((r={},r["table-".concat(t)]=t,r),p)||void 0},i,{ref:l}),c)});R.propTypes={children:o.node,className:o.string,color:u};R.displayName="CTableFoot";var x=b.forwardRef(function(e,l){var r=e.children,c=m(e,["children"]);return s.createElement("caption",a({},c,{ref:l}),r)});x.propTypes={children:o.node};x.displayName="CTableCaption";var F=function(e){var l=e.children,r=e.responsive,c=m(e,["children","responsive"]);return r?s.createElement("div",a({className:typeof r=="boolean"?"table-responsive":"table-responsive-".concat(r)},c),l):s.createElement(s.Fragment,null,l)};F.propTypes={children:o.node,responsive:o.oneOfType([o.bool,o.oneOf(["sm","md","lg","xl","xxl"])])};F.displayName="CTableResponsiveWrapper";var A=function(e){return e.replace(/[-_.]/g," ").replace(/ +/g," ").replace(/([a-z0-9])([A-Z])/g,"$1 $2").split(" ").map(function(l){return l.charAt(0).toUpperCase()+l.slice(1)}).join(" ")},G=function(e){var l;return typeof e=="object"?(l=e.label)!==null&&l!==void 0?l:A(e.key):A(e)},J=function(e,l){return e?e.map(function(r){return typeof r=="object"?r.key:r}):l&&K(l)},K=function(e){return Object.keys(e[0]||{}).filter(function(l){return l.charAt(0)!=="_"})},B=b.forwardRef(function(e,l){var r,c=e.children,p=e.align,t=e.borderColor,i=e.bordered,f=e.borderless,d=e.caption,h=e.captionTop,D=e.className,H=e.color,C=e.columns,k=e.footer,W=e.hover,T=e.items,$=e.responsive,z=e.small,I=e.striped,L=e.stripedColumns,M=e.tableFootProps,U=e.tableHeadProps,Z=m(e,["children","align","borderColor","bordered","borderless","caption","captionTop","className","color","columns","footer","hover","items","responsive","small","striped","stripedColumns","tableFootProps","tableHeadProps"]),j=b.useMemo(function(){return J(C,T)},[C,T]);return s.createElement(F,{responsive:$},s.createElement("table",a({className:v("table",(r={},r["align-".concat(p)]=p,r["border-".concat(t)]=t,r["caption-top"]=h||d==="top",r["table-bordered"]=i,r["table-borderless"]=f,r["table-".concat(H)]=H,r["table-hover"]=W,r["table-sm"]=z,r["table-striped"]=I,r["table-striped-columns"]=L,r),D)},Z,{ref:l}),(d&&d!=="top"||h)&&s.createElement(x,null,d||h),C&&s.createElement(P,a({},U),s.createElement(N,null,C.map(function(n,y){return s.createElement(O,a({},n._props&&a({},n._props),n._style&&{style:a({},n._style)},{key:y}),G(n))}))),T&&s.createElement(w,null,T.map(function(n,y){return s.createElement(N,a({},n._props&&a({},n._props),{key:y}),j&&j.map(function(g,q){return n[g]!==void 0?s.createElement(E,a({},n._cellProps&&a(a({},n._cellProps.all&&a({},n._cellProps.all)),n._cellProps[g]&&a({},n._cellProps[g])),{key:q}),n[g]):null}))})),c,k&&s.createElement(R,a({},M),s.createElement(N,null,k.map(function(n,y){return s.createElement(E,a({},typeof n=="object"&&n._props&&a({},n._props),{key:y}),typeof n=="object"?n.label:n)})))))});B.propTypes={align:o.oneOf(["bottom","middle","top"]),borderColor:o.string,bordered:o.bool,borderless:o.bool,caption:o.oneOfType([o.string,o.oneOf(["top"])]),captionTop:o.string,children:o.node,className:o.string,color:u,columns:o.array,footer:o.array,hover:o.bool,items:o.array,responsive:o.oneOfType([o.bool,o.oneOf(["sm","md","lg","xl","xxl"])]),small:o.bool,striped:o.bool,stripedColumns:o.bool,tableFootProps:o.shape(a({},R.propTypes)),tableHeadProps:o.shape(a({},P.propTypes))};B.displayName="CTable";export{B as C,P as a,N as b,O as c,w as d,E as e};
