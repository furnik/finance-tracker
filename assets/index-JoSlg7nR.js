import{s as i,r as f,j as e,c as m,n as k,R as y,a as j,u as $,t as x}from"./index-SLgQFVnK.js";const w=i.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: ${({theme:n})=>n.secondaryText};
`,T=i.input`
  width: 100%;
  height: 40px;
  background: none;
  border: 2px solid ${({theme:n})=>n.secondaryText};
  border-radius: 8px;
  padding: 0 20px;
  outline: none;
  font-size: 16px;
  transition: 0.3s;

  &:focus-visible,
  &:focus,
  &:active {
    border: 2px solid ${({theme:n})=>n.pink};
  }

  &[type="number"]::-webkit-outer-spin-button,
  &[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  &[type="number"] {
    -moz-appearance: textfield;
  }
`,b=({onChange:n,label:t,...o})=>{var s;const a=f.useRef(null),p=o.type==="number",c=()=>{var r,d;n(p?Number(((r=a.current)==null?void 0:r.value)||0):((d=a.current)==null?void 0:d.value)||"")};return p&&((s=a.current)==null||s.step),e.jsxs(w,{children:[t,e.jsx(T,{ref:a,...o,onBlur:c})]})},v=m`
0% {
  opacity: 0;
}
100% {
  transform: 1;
}
`,C=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: ${({index:n})=>n||11};
  transition: 0.5s;
  animation: ${v} 0.3s ease-in;
`,L=i.div`
  background: ${({theme:n})=>n.tertiaryText};
  padding: 20px;
  margin: 0 20px;
  width: 100%;
  max-width: 500px;
  border-radius: 16px;
`,I=({index:n,onClose:t,children:o})=>{const a=f.useRef(null),p=c=>{a.current&&a.current.isEqualNode(c.target)&&t&&t()};return e.jsx(C,{index:n,ref:a,onClick:p,children:e.jsx(L,{children:o})})},H=i.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,S=i.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  width: 100%;
  margin-top: 20px;
  & > * {
    width: 40%;
    max-width: 120px;
  }
`,h=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
`;var l=(n=>(n.GHOST="ghost",n.OUTLINE="outline",n.FILL="fill",n))(l||{});const u=k`
  font-size: 16px;
  cursor: pointer;
`,F=i.button`
  border: none;
  background: none;
  width: max-content;
  height: max-content;
  padding: 0;
  color: ${({theme:n})=>n.pink};
  ${u};
`,E=i.button`
  border: none;
  background: ${({theme:n})=>n.pink};
  height: 44px;
  padding: 0 20px;
  color: ${({theme:n})=>n.white};
  border-radius: 6px;
  ${u};
`,N=i.button`
  border: 2px solid ${({theme:n})=>n.pink};
  background: none;
  height: 44px;
  padding: 0 20px;
  color: ${({theme:n})=>n.pink};
  border-radius: 6px;
  ${u};
`,O=({variant:n,callback:t,children:o})=>{switch(n){case l.FILL:return e.jsx(E,{onClick:t,children:o});case l.OUTLINE:return e.jsx(N,{onClick:t,children:o});default:return e.jsx(F,{onClick:t,children:o})}},R=i.button`
  border: 2px solid ${({theme:n})=>n.pink};
  background: ${({theme:n,active:t})=>t?n.pink:"transparent"};
  height: 30px;
  padding: 0 20px;
  color: ${({theme:n,active:t})=>t?n.white:n.pink};
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;
`,g=({value:n,onChange:t,...o})=>{const a=()=>{t(n)};return e.jsx(R,{...o,onClick:a,children:n})},z=({onClose:n})=>{const[t,o]=y(j),{setDataHandler:a}=$(),p=r=>{r==null||r.preventDefault()},c=()=>{a(n)},s=r=>d=>{console.log(d,r),o({...t,[r]:d})};return e.jsx(I,{index:10,onClose:n,children:e.jsxs(H,{onSubmit:p,children:[e.jsx(b,{label:"Amount",placeholder:"0.00",type:"number",onChange:s("amount")}),e.jsx(b,{label:"Tag",placeholder:"Super-market",type:"text",onChange:s("tag")}),e.jsx(h,{children:x.map(r=>e.jsx(g,{value:r,onChange:s("type"),active:r===t.type},r))}),e.jsx(h,{children:x.map(r=>e.jsx(g,{value:r,onChange:s("type"),active:r===t.type},r))}),e.jsx(S,{children:e.jsx(O,{variant:l.FILL,callback:c,children:"OK"})})]})})};export{z as default};
