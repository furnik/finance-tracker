import{s as i,r as d,j as n}from"./index-miUl7GC1.js";const c=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: ${({index:t})=>t||11};
`,p=i.div`
  background: ${({theme:t})=>t.tertiaryText};
  padding: 20px;
  margin: 0 20px;
  width: 100%;
  max-width: 600px;
  border-radius: 16px;
`,l=({index:t,onClose:e,children:s})=>{const r=d.useRef(null),a=o=>{r.current&&r.current.isEqualNode(o.target)&&e&&e()};return n.jsx(c,{index:t,ref:r,onClick:a,children:n.jsx(p,{children:s})})};export{l as M};
