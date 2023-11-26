import{s,r as c,j as e,B as i,a as p}from"./index-xkwZfzD7.js";import{M as x}from"./index-5M5tr6FQ.js";const b=s.input`
  width: 100%;
  max-width: 400px;
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
`,h=({onChange:n,...r})=>{const o=c.useRef(null),a=()=>{var t;n(Number(((t=o.current)==null?void 0:t.value)||0))};return e.jsx(b,{ref:o,...r,onBlur:a})},m=s.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`,g=s.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
  margin-top: 20px;
  & > * {
    width: 40%;
    max-width: 120px;
  }
`,f=s.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
`,y=s.button`
  border: 2px solid ${({theme:n})=>n.pink};
  background: ${({theme:n,active:r})=>r?n.pink:"transparent"};
  height: 30px;
  padding: 0 20px;
  color: ${({theme:n,active:r})=>r?n.white:n.pink};
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;
`,j=({value:n,onChange:r,...o})=>{const a=()=>{r(n)};return e.jsx(y,{...o,onClick:a,children:n})},l=["profit","spending"],k={value:0,type:l[0]},B=()=>{const[n,r]=c.useState(k),o=t=>t==null?void 0:t.preventDefault(),a=t=>d=>{r(u=>({...u,[t]:d}))};return console.log(n),e.jsx(x,{index:10,children:e.jsxs(m,{onSubmit:o,children:[e.jsx(f,{children:l.map(t=>e.jsx(j,{value:t,onChange:a("type"),active:t===n.type},t))}),e.jsx(h,{placeholder:"0",type:"number",onChange:a("value")}),e.jsxs(g,{children:[e.jsx(i,{variant:p.FILL,callback:()=>console.log("ok"),children:"enter"}),e.jsx(i,{variant:p.OUTLINE,callback:()=>console.log("ok"),children:"cancel"})]})]})})};export{B as default};
