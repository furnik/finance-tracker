import{s as o,r as d,j as e,c as m,n as k,u as j}from"./index-lU1TizpF.js";const y=o.input`
  width: 100%;
  height: 36px;
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
`,w=({onChange:n,...t})=>{const r=d.useRef(null),i=()=>{var a;n(Number(((a=r.current)==null?void 0:a.value)||0))};return e.jsx(y,{ref:r,...t,onBlur:i})},$=m`
0% {
  opacity: 0;
}
100% {
  transform: 1;
}
`,v=o.div`
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
  animation: ${$} 0.3s ease-in;
`,I=o.div`
  background: ${({theme:n})=>n.tertiaryText};
  padding: 20px;
  margin: 0 20px;
  width: 100%;
  max-width: 500px;
  border-radius: 16px;
`,L=({index:n,onClose:t,children:r})=>{const i=d.useRef(null),a=c=>{i.current&&i.current.isEqualNode(c.target)&&t&&t()};return e.jsx(v,{index:n,ref:i,onClick:a,children:e.jsx(I,{children:r})})},T=o.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,C=o.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
  margin-top: 20px;
  & > * {
    width: 40%;
    max-width: 120px;
  }
`,H=o.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
`;var p=(n=>(n.GHOST="ghost",n.OUTLINE="outline",n.FILL="fill",n))(p||{});const l=k`
  font-size: 16px;
  cursor: pointer;
`,S=o.button`
  border: none;
  background: none;
  width: max-content;
  height: max-content;
  padding: 0;
  color: ${({theme:n})=>n.pink};
  ${l};
`,E=o.button`
  border: none;
  background: ${({theme:n})=>n.pink};
  height: 44px;
  padding: 0 20px;
  color: ${({theme:n})=>n.white};
  border-radius: 6px;
  ${l};
`,F=o.button`
  border: 2px solid ${({theme:n})=>n.pink};
  background: none;
  height: 44px;
  padding: 0 20px;
  color: ${({theme:n})=>n.pink};
  border-radius: 6px;
  ${l};
`,x=({variant:n,callback:t,children:r})=>{switch(n){case p.FILL:return e.jsx(E,{onClick:t,children:r});case p.OUTLINE:return e.jsx(F,{onClick:t,children:r});default:return e.jsx(S,{onClick:t,children:r})}},B=o.button`
  border: 2px solid ${({theme:n})=>n.pink};
  background: ${({theme:n,active:t})=>t?n.pink:"transparent"};
  height: 30px;
  padding: 0 20px;
  color: ${({theme:n,active:t})=>t?n.white:n.pink};
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;
`,N=({value:n,onChange:t,...r})=>{const i=()=>{t(n)};return e.jsx(B,{...r,onClick:i,children:n})},h=["profit","spending"],b={value:0,type:h[0],date:new Date},W=({onClose:n})=>{const[t,r]=d.useState(b),{setDataHandler:i}=j(),a=s=>{s==null||s.preventDefault()},c=()=>{i(t),n()},u=s=>g=>{r(f=>({...f,[s]:g}))};return console.log(b.date),e.jsx(L,{index:10,children:e.jsxs(T,{onSubmit:a,children:[e.jsx(H,{children:h.map(s=>e.jsx(N,{value:s,onChange:u("type"),active:s===t.type},s))}),e.jsx(w,{placeholder:"0",type:"number",onChange:u("value")}),e.jsxs(C,{children:[e.jsx(x,{variant:p.FILL,callback:c,children:"enter"}),e.jsx(x,{variant:p.OUTLINE,callback:n,children:"cancel"})]})]})})};export{W as default};
