import{s as r,j as e,B as o,a as i}from"./index-dGjAyxeH.js";import{M as p}from"./index-wxvV_p3L.js";const s=r.input`
  width: 100%;
  max-width: 400px;
  height: 36px;
  background: none;
  border: 2px solid ${({theme:n})=>n.secondaryText};
  border-radius: 8px;
  padding: 0 20px;
  outline: none;
  font-size: 16px;

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
`,d=({...n})=>e.jsx(s,{...n}),c=r.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`,l=r.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
  margin-top: 20px;
  & > * {
    width: 40%;
    max-width: 120px;
  }
`,x=r.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
`,u=r.button`
  border: 2px solid ${({theme:n})=>n.pink};
  background: ${({theme:n,active:t})=>t?n.pink:"transparent"};
  height: 30px;
  padding: 0 20px;
  color: ${({theme:n,active:t})=>t?n.white:n.pink};
  border-radius: 6px;
  cursor: pointer;
`,b=n=>e.jsx(u,{...n}),a=["profit","spending"],f=()=>{const n=t=>t==null?void 0:t.preventDefault();return e.jsx(p,{index:10,children:e.jsxs(c,{onSubmit:n,children:[e.jsx(x,{children:a.map(t=>e.jsx(b,{active:t===a[0],children:t},t))}),e.jsx(d,{placeholder:"0",type:"number",onChange:t=>console.log(t.target.value)}),e.jsxs(l,{children:[e.jsx(o,{variant:i.FILL,callback:()=>console.log("ok"),children:"enter"}),e.jsx(o,{variant:i.OUTLINE,callback:()=>console.log("ok"),children:"cancel"})]})]})})};export{f as default};
