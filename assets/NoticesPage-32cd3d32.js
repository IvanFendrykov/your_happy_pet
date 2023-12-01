import{g as be,x as n,z as M,j as e,i as j,u as K,r as s,s as k,f as ye,h as we,A as je,N as ve,G as Z,c as J,b as L,C as $e,n as ke,D as Q,V as Fe,E as Ce,a as U}from"./index-cfc62993.js";import{S as De}from"./cross-smal-df994e5f.js";var ee={exports:{}},ze="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Se=ze,Oe=Se;function te(){}function ne(){}ne.resetWarningCache=te;var Te=function(){function t(o,l,p,h,d,g){if(g!==Oe){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}}t.isRequired=t;function i(){return t}var r={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:i,element:t,elementType:t,instanceOf:i,node:t,objectOf:i,oneOf:i,oneOfType:i,shape:i,exact:i,checkPropTypes:ne,resetWarningCache:te};return r.PropTypes=r,r};ee.exports=Te();var Ae=ee.exports;const V=be(Ae),{fonts:Ie}=M,Be=n.form`
  margin-top: 40px;
  margin-inline: auto;
  margin-bottom: 43px;
  max-width: 608px;
  height: 44px;
  display: flex;
  align-items: center;
  border-radius: 20px;
  background: #fff;
  padding-left: 20px;
  padding-right: 20px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
`,Ee=n.input`
  width: 100%;
  height: 44px;
  border: none;
  background: none;
  outline: none;

  color: #888;
  font-family: ${Ie.regular}, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.8px;

  ::placeholder {
    color: #888;
    font-family: Inter, sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.8px;
  }
`,Le=n.button`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  border: none;
  background: none;
`;n.button`
  right: 13px;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  border: none;
  background: none;

  transform: translateX(0);
  ${""}
`;const Pe=()=>e.jsxs(Be,{children:[e.jsx(Ee,{type:"text",placeholder:"Search"}),e.jsx(Le,{type:"submit",children:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("use",{xlinkHref:`${j}#search`})})})]}),{fonts:oe,fontSizes:ie,colors:ae}=M,Me=n.form`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`,q=n.input`
  display: none;
`,Ne=n.label`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: 25px;
  padding: 8px 16px;

  border-radius: 40px;
  background: rgba(140, 200, 253, 0.44);

  color: ${ae.blue};
  font-family: ${oe.medium}, sans-serif;
  font-size: ${ie.s};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.56px;
`,Re=n.label`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: 25px;
  padding: 8px 16px;

  border-radius: 40px;
  border-radius: 40px;
  background: ${ae.blue};

  color: #fef9f9;
  font-family: ${oe.medium}, sans-serif;
  font-size: ${ie.s};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.56px;
`,B=({name:t,value:i,checked:r,defaultChecked:o,children:l})=>r?e.jsxs(Re,{children:[e.jsx(q,{type:"radio",name:t,value:i,defaultChecked:o}),l]}):e.jsxs(Ne,{children:[e.jsx(q,{type:"radio",name:t,value:i}),l]}),_e=({isLoggedIn:t,onChange:i})=>{const r=K(),[o,l]=s.useState(""),p=h=>{h.preventDefault();const d=h.currentTarget.elements.categoryOption.value;l(d),i(d)};return s.useEffect(()=>{r(o?`/notices/${o}`:"/notices")}),e.jsxs(Me,{onInput:p,children:[e.jsx(B,{name:"categoryOption",value:"",checked:o==="",defaultChecked:!0,children:"all categories"}),e.jsx(B,{name:"categoryOption",value:"sell",checked:o==="sell",defaultChecked:!1,children:"sell"}),e.jsx(B,{name:"categoryOption",value:"lost/found",checked:o==="lost/found",defaultChecked:!1,children:"lost/found"}),e.jsx(B,{name:"categoryOption",value:"in good hands",checked:o==="in good hands",defaultChecked:!1,children:"in good hands"}),t&&e.jsx(B,{name:"categoryOption",value:"favorite ads",checked:o==="favorite ads",defaultChecked:!1,children:"favorite ads"}),t&&e.jsx(B,{name:"categoryOption",value:"my ads",checked:o==="my ads",defaultChecked:!1,children:"my ads"})]})},Ge=k.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: #51515199;

  overflow-y: scroll;
  z-index: 4;
`,He=k.div`
  position: absolute;
  top: 24%;
  left: 52%;
  transform: translateX(-50%);
  border-radius: 20px;
  background-color: #ffffff;

  z-index: 3;

  @media screen and (min-width: 452px) {
    border-radius: 40px;
  }
`,We=k.button`
  position: absolute;
  top: 12px;
  right: unset;
  left: 96px;
  z-index: 4;
  background-color: transparent;
  border: none;

  color: black;

  & svg {
    stroke: #54ADFF;
    transition: stroke 250ms;
  }
  &:hover svg,
  &:focus svg {
    stroke: #FFC107;
  }

  @media screen and (min-width: 767px) {
  top: 26px;
  left: 244px;
  }
`,Ye=document.getElementById("modal-root"),se=({toggleModal:t,children:i})=>{ye().pathname.includes("notices"),s.useEffect(()=>{const l=p=>{p.code==="Escape"&&t()};return document.addEventListener("keydown",l),()=>{document.removeEventListener("keydown",l)}},[t]);const o=l=>{l.target===l.currentTarget&&t()};return we.createPortal(e.jsx(e.Fragment,{children:e.jsx(Ge,{onClick:o,children:e.jsxs(He,{children:[e.jsx(We,{type:"button",onClick:t,children:e.jsx(De,{size:22,color:"#54ADFF"})}),i]})})}),Ye)};se.propTypes={toggleModal:V.func.isRequired,children:V.node.isRequired};const Ue=k.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 445px;
  width: 280px;
  border-radius: 20px;
  background-color: white;
  transition: width 0.5s ease;
  z-index: 3;
  
  @media screen and (min-width: 768px) {
    border-radius: 40px;
    width: 608px;
    height: 429px;
  }
`,Ve=k.div`
  display: flex;
  width: 280px;
  margin: auto;
  justify-content: center;
  flex-wrap: wrap;
  transition: width 0.5s ease;
  
  @media screen and (min-width: 768px) {
    width: 608px;
  }
`,qe=k.h2`
  padding-bottom: 20px;
  padding-top: 20px;
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  transition: font-size 0.5s ease;
  
  @media screen and (min-width: 768px) {
    font-size: 36px;
    line-height: 49.18px;
    padding-bottom: 40px;
  }
`,Xe=k.p`
  padding: 20px;
  padding-top: 0;
  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-family: 'Manrope', sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    text-align: center;
  }
`,Ke=k.div`

  display: flex;
  padding-top: 20px;
  gap: 20px;

  @media screen and (max-width: 768px) {
  flex-direction: column;
  gap: 12px;
  }
`,re=({toggleUnauthorizeModal:t})=>e.jsx(se,{toggleModal:t,children:e.jsx(Ue,{children:e.jsxs(Ve,{children:[e.jsx(qe,{children:"Attention"}),e.jsx(Xe,{children:"We would like to remind you that certain functionality is available only to authorized users. If you have an account, please log in with your credentials. If you do not already have an account, you must register to access these features."}),e.jsx(Ke,{children:e.jsx(je,{})})]})})}),{fonts:_,fontSizes:G,fontWeights:H,colors:le}=M,Ze=n.div`
  width: 152px;
  padding: 14px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;

  border-radius: 20px;
  background: #fff;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
`,Je=n.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
`,de=n.form`
  display: flex;
  width: 136px;
  padding: 8px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  border-radius: 20px;
  background: ${le.blue_light};

  color: #54adff;
  font-feature-settings:
    'clig' off,
    'liga' off;

  font-family: ${_.normal}, sans-serif;
  font-size: ${G.s};
  font-style: normal;
  font-weight: ${H.normal};
  line-height: 130%; /* 18.2px */
`,Qe=n.button`
  display: flex;
  width: 152px;
  padding: 4px 10px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 40px;
  border: 2px solid ${le.blue};
  background-color: #fff;

  color: #54adff;
  font-family: ${_.bold}, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: ${H.bold};
  line-height: normal;
  letter-spacing: 0.64px;

  :hover,
  :focus {
    padding: 6px 12px;
    border: none;
    border-radius: 40px;
    background: linear-gradient(290deg, #419ef1 0%, #9bd0ff 107.89%);
    color: #fef9f9;
  }
`,et=n.button`
  display: flex;
  width: 152px;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 40px;
  border: none;
  background-color: #fff;

  color: #54adff;
  font-family: ${_.bold}, sans-serif;
  font-size: ${G.m};
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.64px;
`,P=n.button`
  display: flex;
  justify-content: flex-start;
  padding: 4px 8px;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  width: 100%;
  border: none;
  border-radius: 20px;
  background: #cce4fb;

  color: #54adff;
  font-feature-settings:
    'clig' off,
    'liga' off;

  font-family: Inter, sans-serif;
  font-size: ${G.s};
  font-style: normal;
  font-weight: ${H.normal};
  line-height: 130%; /* 18.2px */
`,tt=n.input`
  display: none;
`,nt=n.label`
  display: flex;
  align-items: center;
  column-gap: 12px;
  font-size: 12px;
`,C=({name:t,value:i,checked:r,children:o})=>e.jsxs(nt,{children:[e.jsx(tt,{type:"radio",name:t,value:i}),e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("use",{xlinkHref:`${j}#${r?"check-round":"round"}`})}),o]}),ot=({onClick:t,onChange:i,initialValue:r})=>{const[o,l]=s.useState(r),p=d=>{d.preventDefault();const g=d.currentTarget.elements.ageOption.value;l(g),i(g)},h=d=>{d.preventDefault(),t()};return e.jsxs(de,{onInput:p,onSubmit:h,children:[e.jsxs(P,{type:"submit",children:[e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("use",{xlinkHref:`${j}#chevron-up`})}),"By age"]}),e.jsx(C,{name:"ageOption",value:"upToOne",checked:o==="upToOne",children:"up to 1 year"}),e.jsx(C,{name:"ageOption",value:"upToTwo",checked:o==="upToTwo",children:"up to 2 years"}),e.jsx(C,{name:"ageOption",value:"fromTwo",checked:o==="fromTwo",children:"from 2 years"}),e.jsx(C,{name:"ageOption",value:"anyAge",checked:o==="anyAge",children:"any age"})]})},it=({onClick:t,onChange:i,initialValue:r})=>{const[o,l]=s.useState(r),p=d=>{d.preventDefault();const g=d.currentTarget.elements.genderOption.value;l(g),i(g)},h=d=>{d.preventDefault(),t()};return e.jsxs(de,{onInput:p,onSubmit:h,children:[e.jsxs(P,{type:"submit",children:[e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("use",{xlinkHref:`${j}#chevron-up`})}),"By gender"]}),e.jsx(C,{name:"genderOption",value:"female",checked:o==="female",children:"female"}),e.jsx(C,{name:"genderOption",value:"male",checked:o==="male",children:"male"}),e.jsx(C,{name:"genderOption",value:"",checked:o==="",children:"any gender"})]})},at=({onChange:t})=>{const[i,r]=s.useState(!1),[o,l]=s.useState(!1),[p,h]=s.useState(!1),[d,g]=s.useState("anyAge"),[m,z]=s.useState(""),[S,F]=s.useState(!1),b=()=>{F(!0)},E=()=>{F(!1)},O=()=>{r(!i)},T=()=>{l(!o)},$=()=>{h(!p)},N=A=>{g(A)},R=A=>{z(A)};return s.useEffect(()=>{t({age:d,gender:m})},[d,m]),i?e.jsxs(Ze,{children:[e.jsxs(et,{onClick:O,children:[e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("use",{xlinkHref:`${j}#chevron-up`})}),"Filters"]}),e.jsxs(Je,{children:[o?e.jsx(ot,{onClick:T,onChange:N,initialValue:d}):e.jsxs(P,{onClick:T,children:[e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("use",{xlinkHref:`${j}#chevron-down`})}),"By gender"]}),p?e.jsx(it,{onClick:$,onChange:R,initialValue:m}):e.jsxs(P,{onClick:$,children:[e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("use",{xlinkHref:`${j}#chevron-down`})}),"By gender"]})]})]}):e.jsxs(Qe,{onClick:O,onMouseOver:b,onMouseLeave:E,children:["Filter",e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",stroke:S?"#FEF9F9":"#54adff",children:e.jsx("use",{xlinkHref:`${j}#filters-3`})})]})},{fonts:ce,fontSizes:st,fontWeights:pe,colors:rt}=M,lt=n.h3`
  margin-top: 90px;
  color: #111;
  font-family: ${ce.bold}, sans-serif;
  font-size: 48px;
  font-style: normal;
  font-weight: ${pe.bold};
  text-align: center;
  line-height: normal;
`,dt=n.div`
  margin-bottom: 42px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  row-gap: 16px;
`,ct=n.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 16px;
  row-gap: 12px;
`,pt=n(ve)`
  text-decoration: none;
  display: flex;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-radius: 40px;
  background: ${rt.blue};

  color: #fef9f9;
  font-family: ${ce.bold}, sans-serif;
  font-size: ${st.m};
  font-style: normal;
  font-weight: ${pe.bold};
  line-height: normal;
  letter-spacing: 0.64px;
`,xt=n.div`
  row-gap: 12px;
`;function ft(t){return Z({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z",fill:"currentColor"}}]})(t)}function ht(t){return Z({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M14.88 4.78a3.489 3.489 0 0 0-.37-.9 3.24 3.24 0 0 0-.6-.79 3.78 3.78 0 0 0-1.21-.81 3.74 3.74 0 0 0-2.84 0 4 4 0 0 0-1.16.75l-.05.06-.65.65-.65-.65-.05-.06a4 4 0 0 0-1.16-.75 3.74 3.74 0 0 0-2.84 0 3.78 3.78 0 0 0-1.21.81 3.55 3.55 0 0 0-.97 1.69 3.75 3.75 0 0 0-.12 1c0 .317.04.633.12.94a4 4 0 0 0 .36.89 3.8 3.8 0 0 0 .61.79L8 14.31l5.91-5.91c.237-.233.44-.5.6-.79A3.578 3.578 0 0 0 15 5.78a3.747 3.747 0 0 0-.12-1zm-1 1.63a2.69 2.69 0 0 1-.69 1.21l-5.21 5.2-5.21-5.2a2.9 2.9 0 0 1-.44-.57 3 3 0 0 1-.27-.65 3.25 3.25 0 0 1-.08-.69A3.36 3.36 0 0 1 2.06 5a2.8 2.8 0 0 1 .27-.65c.12-.21.268-.4.44-.57a2.91 2.91 0 0 1 .89-.6 2.8 2.8 0 0 1 2.08 0c.33.137.628.338.88.59l1.36 1.37 1.36-1.37a2.72 2.72 0 0 1 .88-.59 2.8 2.8 0 0 1 2.08 0c.331.143.633.347.89.6.174.165.32.357.43.57a2.69 2.69 0 0 1 .35 1.34 2.6 2.6 0 0 1-.06.72h-.03z"}}]})(t)}const gt=Object.freeze({fonts:{main:"'Manrope', sans-serif",second:"'Inter', sans-serif"},fontSizes:[12,14,16,18,20,24,28,32,44,48,60,72,100],fontWeights:{regular:400,medium:500,semibold:600,bold:700,extrabold:800},colors:{accent:"#FF8356",background:"#FEF9F9",black:"#111111",yellow:"#FFC107",blue:"#54ADFF",blueGradient:"linear-gradient(290.46deg, #419EF1 0%, #9BD0FF 107.89%)",blueLight:"#CCE4FB",red:"#F43F5E",green:"#00C3AD",grey:"#888888",white:"#FFFFFF",orangeGradient:"linear-gradient(90deg, #FF634E 0%, #FFDF48 105.44%)",backdrop:"rgba(97, 97, 97, 0.6)",transparent:"transparent"},shadows:{defaultShadow:"3px 8px 14px rgba(136, 198, 253, 0.19)",hoverShadow:"7px 13px 14px rgba(116, 177, 232, 0.24)"},media:{mobile:"(min-width: 320px)",tablet:"(min-width: 768px)",desktop:"(min-width: 1280px)",mobileTablet:"(min-width: 320px) and (max-width: 767px)",tabletDesktop:"(min-width: 768px) and (max-width: 1279px)"}}),{fonts:v,fontSizes:D,fontWeights:y,colors:c,media:w}=gt,ut=n.div`
  position: fixed;
  z-index: 3;
  top: 0;

  width: 100vw;
  height: 100vh;
  background-color: ${c.backdrop};
  backdrop-filter: blur(4px);
  overflow: auto;

  overflow-y: auto;
`,mt=n.div`
  position: relative;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 300px;
  width: 280px;
  background-color: ${c.white};
  border-radius: 20px;
  padding-top: 40px;
  padding-bottom: 16px;
  overflow: auto;
  overflow-x: auto;

  @media screen and (${w.tablet}) {
    top: 50%;
    width: 681px;
    padding: 0;
    border-radius: 40px;
  }
`;n.p`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0px;
  gap: 10px;

  position: absolute;
  width: 126px;
  height: 32px;
  left: 0px;
  top: 16px;

  background: ${c.blueLight};
  border-radius: 0px 16px 16px 0px;
  border: none;

  font-family: ${v.main};
  font-weight: ${y.medium};
  font-size: ${D[1]}px;
  line-height: 19px;
`;const bt=n.img`
  display: block;
  width: 240px;
  height: 240px;
  object-fit: cover;
  border-radius: 0px 0px 40px 40px;

  @media screen and (${w.tablet}) {
    width: 262px;
    height: 298px;
    margin: 0;
  }
`,yt=n.div`
  position: relative;
  margin: 0 auto;
`,wt=n.div`
  display: flex;
  gap: 12px;
  flex-direction: column;

  @media screen and (${w.tablet}) {
    flex-direction: row;
    gap: 24px;
    padding: 32px 32px 24px;
  }
`,jt=n.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  right: 5px;
  top: 5px;
  border: none;
  background-color: ${c.transparent};

  @media screen and (${w.tablet}) {
    right: 19px;
    top: 16px;
  }
`,vt=n.h2`
  margin-top: 0;
  margin-bottom: 20px;
  width: 198px;
  font-family: ${v.main};
  font-weight: ${y.bold};
  font-size: ${D[5]}px;
  line-height: 33px;
  letter-spacing: -0.01em;

  color: ${c.black};

  @media screen and (${w.tablet}) {
    font-size: 28px;
    line-height: 38px;
    width: 250px;
  }
`,X=n.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,x=n.li`
  margin: 0;
  font-family: ${v.main};
  font-weight: ${y.semibold};
  font-size: ${D[1]}px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;

  color: ${c.black};

  @media screen and (${w.tablet}) {
    font-size: ${D[2]}px;
    line-height: 22px;
  }
`,$t=n.p`
  margin: 12px 0;
  padding: 0 12px;
  width: 256px;
  font-family: ${v.main};
  font-weight: ${y.semibold};
  font-size: ${D[1]}px;
  line-height: 19px;
  display: flex;
  align-items: center;
  letter-spacing: 0.03em;

  color: ${c.black};

  @media screen and (${w.tablet}) {
    font-size: 16px;
    line-height: 24px;
    width: 618px;
    margin: 0 auto;
    padding: 0;
  }
`,kt=n.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 256px;
  padding: 8px 0;
  gap: 8px;
  text-decoration: none;

  border: 2px solid ${c.blue};
  border-radius: 40px;

  font-family: ${v.main};
  font-style: normal;
  font-weight: ${y.bold};
  font-size: ${D[2]}px;
  line-height: 22px;
  color: ${c.blue};
  transition: all 250ms ease-in-out;

  :hover,
  :focus {
    background: ${c.blueGradient};
    color: ${c.background};
    /* border: none; */
    outline: none;
  }

  @media screen and (${w.tablet}) {
    width: 129px;
  }
`,Ft=n.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  gap: 8px;
  width: 256px;
  height: 40px;

  background: ${c.blue};
  border-radius: 40px;
  border: none;

  font-family: ${v.main};
  font-style: normal;
  font-weight: ${y.bold};
  font-size: ${D[2]}px;
  line-height: 22px;

  display: flex;
  align-items: center;
  letter-spacing: 0.04em;

  color: ${c.background};

  svg {
    stroke-width: 0.3px;
  }

  :hover,
  :focus {
    background: ${c.blueGradient};
    border-radius: 40px;
  }

  @media screen and (${w.tablet}) {
    width: 129px;
  }
`,Ct=n.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 12px;

  @media screen and (${w.tablet}) {
    flex-direction: row;
    gap: 17px;
    margin: 0 auto;
    justify-content: flex-end;
    margin-top: 70px;
    padding-right: 31px;
    padding-bottom: 24px;
  }
`;n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  font-family: ${v.main};
`;n.div`
  font-size: 28px;
  line-height: 38px;
  font-weight: ${y.bold};
`;n.div`
  margin-top: 40px;
  width: 393px;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
`;n.div`
  font-weight: ${y.bold};
`;n.div`
  margin-top: 48px;
  margin-bottom: 60px;
  display: flex;
  align-items: center;
  gap: 17px;
`;n.button`
  padding: 9px 35px;
  border-radius: 40px;
  border-color: ${c.blue};
  background: ${c.white};
  color: ${c.blue};
  font-size: 16px;
  line-height: 22px;
  font-family: ${v.main};
  font-weight: ${y.bold};
`;n.button`
  display: flex;
  padding: 9px 34px;
  border-radius: 40px;
  background: ${c.blue};
  color: ${c.white};
  font-size: 16px;
  line-height: 22px;
  font-family: ${v.main};
  font-weight: ${y.bold};
  border-color: ${c.blue};
  gap: 12px;
  letter-spacing: 0.04em;
`;const Dt=({notice:t,onClose:i})=>{const r=J(),o=L($e),[l,p]=s.useState(!1),[h,d]=s.useState(!1),g=L(b=>b.auth.isLoggedIn),m=()=>{o.isLoggedIn?r(Q({noticeId:t._id,token:o.token})):ke.error("You need to sign in")},z=b=>{const E=new Date(b),O=new Date;return new Date(O-E).getFullYear()-1970},S=()=>{p(b=>!b)},F=()=>{d(b=>!b)};return e.jsx(e.Fragment,{children:e.jsx(ut,{onClick:F,children:e.jsxs(mt,{children:[e.jsx(jt,{type:"button",onClick:()=>i(),children:e.jsx(ft,{size:22,color:"#54ADFF"})}),e.jsxs(wt,{children:[e.jsx(yt,{children:e.jsx(bt,{src:t.image,alt:"dog"})}),e.jsxs("div",{style:{width:"321px",padding:"0 12px"},children:[e.jsx(vt,{children:t.title}),e.jsxs("div",{style:{display:"flex",gap:"50px"},children:[e.jsxs(X,{children:[e.jsx(x,{children:"Name: "}),e.jsx(x,{children:"Age: "}),e.jsx(x,{children:"Breed: "}),t.price&&e.jsx(x,{children:"Price: "}),e.jsx(x,{children:"Place: "}),e.jsx(x,{children:"The sex: "}),e.jsx(x,{children:"Email: "}),e.jsx(x,{children:"Phone: "})]}),e.jsxs(X,{children:[e.jsx(x,{children:t.name}),e.jsx(x,{children:z(t.birthDay)}),e.jsx(x,{children:t.typeOfPet}),t.price&&e.jsxs(x,{children:[" ",t.price]}),e.jsx(x,{children:t.location}),e.jsx(x,{children:t.gender}),e.jsx(x,{children:e.jsx("a",{style:{color:"#FFC107",textDecoration:"underline"},href:`mailto:${t.email}`,children:t.email})}),e.jsx(x,{style:{color:"#FFC107",textDecoration:"underline"},children:e.jsx("a",{style:{color:"#FFC107",textDecoration:"underline"},href:`tel:${t.phone}`,children:t.phone})})]})]})]})]}),e.jsxs($t,{children:["Commentaries: ",t.comments]}),e.jsxs(Ct,{children:[e.jsxs(Ft,{type:"button",onClick:()=>{m(t._id),S()},children:[e.jsx("span",{children:o.isFavorite?"Remove":"Add"}),e.jsx(ht,{size:20})]}),e.jsx(kt,{href:`tel:${t.phone}`,children:"Contact"})]}),l&&!g&&e.jsx(re,{toggleUnauthorizeModal:S})]})})})},Ot=()=>{const[t,i]=s.useState(null),r=K(),[o,l]=s.useState(""),[p,h]=s.useState({age:"any age",gender:""}),[d,g]=s.useState([""]),[m,z]=s.useState(null),[S,F]=s.useState(!1),[b,E]=s.useState(!1),O=J(),T=L(a=>a.auth.token),$=L(a=>a.auth.isLoggedIn),N=a=>{l(a)},R=a=>{h(a)},A=a=>{const u=new Date(a),f=new Date;return new Date(f-u).getFullYear()-1970},xe=(a,u)=>{const f=A(a.petBirthday);return{upToOne:f<1,upToTwo:f<2,fromTwo:f>=2,anyAge:!0}[u]},fe=a=>{console.log(a),O(Q({token:T,noticeId:a}))},he=async a=>{console.log("onDeleteFromFavourite"+a);try{(await U.delete(`http://localhost:3001/api/notices/${a}`,{headers:{Authorization:`Bearer ${T}`}})).status===200&&i(f=>f.filter(I=>I._id!==a))}catch(u){return console.error("Error fetching user:",u),null}},ge=a=>{z(t.find(u=>u._id===a))},ue=()=>{z(null)};if(s.useEffect(()=>{(async()=>{try{const u=await U.get(`http://localhost:3001/api/notices?${o&&"category="+o}`);i(u.data.data.docs)}catch{return null}F(!0)})()},[o,p]),s.useEffect(()=>{if(t){const u=t.filter(f=>(!o||f.category===o)&&xe(f,p.age)&&(!p.gender||f.sex===p.gender)).map(f=>{const I=A(f.birthDay),Y=`${I} year${I!==1?"s":""}`;return{...f,age:Y}});g(u),F(!0)}},[t,o,p]),!S)return e.jsx(Fe,{});const me=()=>{$?r("/add-pet"):W()},W=()=>{E(a=>!a)};return e.jsxs("div",{children:[e.jsx(lt,{children:"Find your favorite pet"}),e.jsx(Pe,{}),e.jsxs(dt,{children:[e.jsx(_e,{isLoggedIn:$,onChange:N}),e.jsxs(ct,{children:[e.jsx(at,{onChange:R}),e.jsx(xt,{type:"button",onClick:me,children:e.jsxs(pt,{children:["Add pet",e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"#fff",children:e.jsx("use",{xlinkHref:`${j}#plus-small-white`})})]})})]})]}),e.jsx(Ce,{petsData:d,isLoggedIn:$,onAddToFavourite:fe,onDelete:he,onLearnMore:ge}),b&&!$&&e.jsx(re,{toggleUnauthorizeModal:W}),m&&e.jsx(Dt,{notice:m,onClose:ue})]})};export{Ot as default};
