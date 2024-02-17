import{s as o,r as c,j as e,c as g,n as f,u as m}from"./index-1Flz53rB.js";const k=o.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: ${({theme:n})=>n.secondaryText};
`,y=o.input`
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
`,j=({onChange:n,label:t,...r})=>{const i=c.useRef(null),p=()=>{var a;n(Number(((a=i.current)==null?void 0:a.value)||0))};return e.jsxs(k,{children:[t,e.jsx(y,{ref:i,...r,onBlur:p})]})},w=g`
0% {
  opacity: 0;
}
100% {
  transform: 1;
}
`,$=o.div`
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
  animation: ${w} 0.3s ease-in;
`,v=o.div`
  background: ${({theme:n})=>n.tertiaryText};
  padding: 20px;
  margin: 0 20px;
  width: 100%;
  max-width: 500px;
  border-radius: 16px;
`,L=({index:n,onClose:t,children:r})=>{const i=c.useRef(null),p=a=>{i.current&&i.current.isEqualNode(a.target)&&t&&t()};return e.jsx($,{index:n,ref:i,onClick:p,children:e.jsx(v,{children:r})})},T=o.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,I=o.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  width: 100%;
  margin-top: 20px;
  & > * {
    width: 40%;
    max-width: 120px;
  }
`,S=o.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
`;var d=(n=>(n.GHOST="ghost",n.OUTLINE="outline",n.FILL="fill",n))(d||{});const l=f`
  font-size: 16px;
  cursor: pointer;
`,C=o.button`
  border: none;
  background: none;
  width: max-content;
  height: max-content;
  padding: 0;
  color: ${({theme:n})=>n.pink};
  ${l};
`,H=o.button`
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
`,B=({variant:n,callback:t,children:r})=>{switch(n){case d.FILL:return e.jsx(H,{onClick:t,children:r});case d.OUTLINE:return e.jsx(F,{onClick:t,children:r});default:return e.jsx(C,{onClick:t,children:r})}},E=o.button`
  border: 2px solid ${({theme:n})=>n.pink};
  background: ${({theme:n,active:t})=>t?n.pink:"transparent"};
  height: 30px;
  padding: 0 20px;
  color: ${({theme:n,active:t})=>t?n.white:n.pink};
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;
`,O=({value:n,onChange:t,...r})=>{const i=()=>{t(n)};return e.jsx(E,{...r,onClick:i,children:n})},x=["Profit","Spending"],W={value:0,type:x[0],date:new Date},N=({onClose:n})=>{const[t,r]=c.useState(W),{setDataHandler:i}=m(),p=s=>{s==null||s.preventDefault()},a=()=>{i(t),n()},u=s=>b=>{r(h=>({...h,[s]:b}))};return e.jsx(L,{index:10,onClose:n,children:e.jsxs(T,{onSubmit:p,children:[e.jsx(j,{label:"Amount",placeholder:"0",type:"number",onChange:u("value")}),e.jsx(S,{children:x.map(s=>e.jsx(O,{value:s,onChange:u("type"),active:s===t.type},s))}),e.jsx(I,{children:e.jsx(B,{variant:d.FILL,callback:a,children:"OK"})})]})})};export{N as default};
