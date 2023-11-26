import{c,s as i,r as d,j as e}from"./index-xkwZfzD7.js";const p=c`
0% {
  opacity: 0;
}
100% {
  transform: 1;
}
`,x=i.div`
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
  transition: 0.5s;
  animation: ${p} 0.3s ease-in;
`,l=i.div`
  background: ${({theme:t})=>t.tertiaryText};
  padding: 20px;
  margin: 0 20px;
  width: 100%;
  max-width: 500px;
  border-radius: 16px;
`,f=({index:t,onClose:n,children:a})=>{const r=d.useRef(null),s=o=>{r.current&&r.current.isEqualNode(o.target)&&n&&n()};return e.jsx(x,{index:t,ref:r,onClick:s,children:e.jsx(l,{children:a})})};export{f as M};
