import{s as o,j as n,B as r,a}from"./index-miUl7GC1.js";import{M as i}from"./index-vVhJb5gL.js";const s=o.input`
  width: 100%;
  max-width: 400px;
  height: 36px;
  background: none;
  border: 2px solid ${({theme:e})=>e.secondaryText};
  border-radius: 8px;
  padding: 0 20px;
  outline: none;

  &:focus-visible,
  &:focus,
  &:active {
    border: 2px solid ${({theme:e})=>e.pink};
  }

  &[type="number"]::-webkit-outer-spin-button,
  &[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  &[type="number"] {
    -moz-appearance: textfield;
  }
`,p=({...e})=>n.jsx(s,{...e}),l=o.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`,c=o.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
  & > * {
    width: 40%;
  }
`,x=()=>{const e=t=>t==null?void 0:t.preventDefault();return n.jsx(i,{index:10,children:n.jsxs(l,{onSubmit:e,children:[n.jsx(p,{type:"number",onChange:t=>console.log(t.target.value)}),n.jsxs(c,{children:[n.jsx(r,{variant:a.FILL,callback:()=>console.log("ok"),children:"enter"}),n.jsx(r,{variant:a.OUTLINE,callback:()=>console.log("ok"),children:"cancel"})]})]})})};export{x as default};
