import{g as ue,x as n,z as N,j as e,i as w,u as V,r,s as k,f as me,h as be,A as ye,N as we,G as q,c as Q,b as L,C as je,n as ve,D as X,E as $e,a as T}from"./index-920c55db.js";import{S as ke}from"./cross-smal-bfd944ad.js";var K={exports:{}},Fe="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Ce=Fe,ze=Ce;function Z(){}function J(){}J.resetWarningCache=Z;var Se=function(){function t(o,l,h,g,d,f){if(f!==ze){var y=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw y.name="Invariant Violation",y}}t.isRequired=t;function i(){return t}var s={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:i,element:t,elementType:t,instanceOf:i,node:t,objectOf:i,oneOf:i,oneOfType:i,shape:i,exact:i,checkPropTypes:J,resetWarningCache:Z};return s.PropTypes=s,s};K.exports=Se();var De=K.exports;const W=ue(De),{fonts:Oe}=N,Ie=n.form`
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
`,Be=n.input`
  width: 100%;
  height: 44px;
  border: none;
  background: none;
  outline: none;

  color: #888;
  font-family: ${Oe.regular}, sans-serif;
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
`,Ae=n.button`
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
`;const Te=({onSubmit:t})=>{const i=s=>{s.preventDefault();const o=s.currentTarget;t(o.elements.searchInput.value),o.reset()};return e.jsxs(Ie,{onSubmit:i,children:[e.jsx(Be,{name:"searchInput",type:"text",placeholder:"Search"}),e.jsx(Ae,{type:"submit",children:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("use",{xlinkHref:`${w}#search`})})})]})},{fonts:ee,fontSizes:te,colors:ne}=N,Le=n.form`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`,U=n.input`
  display: none;
`,Ee=n.label`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: 35px;
  padding: 8px 16px;

  border-radius: 40px;
  background: rgba(140, 200, 253, 0.44);

  color: ${ne.blue};
  font-family: ${ee.medium}, sans-serif;
  font-size: ${te.s};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.56px;
`,Ne=n.label`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: 35px;
  padding: 8px 16px;

  border-radius: 40px;
  border-radius: 40px;
  background: ${ne.blue};

  color: #fef9f9;
  font-family: ${ee.medium}, sans-serif;
  font-size: ${te.s};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.56px;
`,I=({name:t,value:i,checked:s,defaultChecked:o,children:l})=>s?e.jsxs(Ne,{children:[e.jsx(U,{type:"radio",name:t,value:i,defaultChecked:o}),l]}):e.jsxs(Ee,{children:[e.jsx(U,{type:"radio",name:t,value:i}),l]}),Me=({isLoggedIn:t,onChange:i})=>{const s=V(),[o,l]=r.useState(""),h=g=>{g.preventDefault();const d=g.currentTarget.elements.categoryOption.value;l(d),i(d)};return r.useEffect(()=>{s(o?`/notices/${o}`:"/notices")},[]),e.jsxs(Le,{onInput:h,children:[e.jsx(I,{to:"/notices",name:"categoryOption",value:"",checked:o==="",defaultChecked:!0,children:"all categories"}),e.jsx(I,{to:"/notices/sell",name:"categoryOption",value:"sell",checked:o==="sell",defaultChecked:!1,children:"sell"}),e.jsx(I,{to:"/notices/lostFound",name:"categoryOption",value:"lostFound",checked:o==="lostFound",defaultChecked:!1,children:"lost/found"}),e.jsx(I,{to:"/notices/inGoodHands",name:"categoryOption",value:"inGoodHands",checked:o==="inGoodHands",defaultChecked:!1,children:"in good hands"}),t&&e.jsx(I,{to:"/notices/favorite",name:"categoryOption",value:"favorite",checked:o==="favorite",defaultChecked:!1,children:"favorite ads"}),t&&e.jsx(I,{to:"/notices/own",name:"categoryOption",value:"own",checked:o==="own",defaultChecked:!1,children:"my ads"})]})},Pe=k.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: #51515199;

  overflow-y: scroll;
  z-index: 4;
`,Ge=k.div`
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
`,He=k.button`
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
`,Re=document.getElementById("modal-root"),oe=({toggleModal:t,children:i})=>{me().pathname.includes("notices"),r.useEffect(()=>{const l=h=>{h.code==="Escape"&&t()};return document.addEventListener("keydown",l),()=>{document.removeEventListener("keydown",l)}},[t]);const o=l=>{l.target===l.currentTarget&&t()};return be.createPortal(e.jsx(e.Fragment,{children:e.jsx(Pe,{onClick:o,children:e.jsxs(Ge,{children:[e.jsx(He,{type:"button",onClick:t,children:e.jsx(ke,{size:22,color:"#54ADFF"})}),i]})})}),Re)};oe.propTypes={toggleModal:W.func.isRequired,children:W.node.isRequired};const _e=k.div`
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
`,We=k.div`
  display: flex;
  width: 280px;
  margin: auto;
  justify-content: center;
  flex-wrap: wrap;
  transition: width 0.5s ease;
  
  @media screen and (min-width: 768px) {
    width: 608px;
  }
`,Ue=k.h2`
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
`,Ye=k.p`
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
`,Ve=k.div`

  display: flex;
  padding-top: 20px;
  gap: 20px;

  @media screen and (max-width: 768px) {
  flex-direction: column;
  gap: 12px;
  }
`,ie=({toggleUnauthorizeModal:t})=>e.jsx(oe,{toggleModal:t,children:e.jsx(_e,{children:e.jsxs(We,{children:[e.jsx(Ue,{children:"Attention"}),e.jsx(Ye,{children:"We would like to remind you that certain functionality is available only to authorized users. If you have an account, please log in with your credentials. If you do not already have an account, you must register to access these features."}),e.jsx(Ve,{children:e.jsx(ye,{})})]})})}),{fonts:ae,fontSizes:qe,fontWeights:se,colors:Qe}=N,Xe=n.h3`
  margin-top: 90px;
  color: #111;
  font-family: ${ae.bold}, sans-serif;
  font-size: 48px;
  font-style: normal;
  font-weight: ${se.bold};
  text-align: center;
  line-height: normal;
`,Ke=n.div`
  margin-bottom: 42px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  row-gap: 16px;
`,Ze=n.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 16px;
  row-gap: 12px;
`,Je=n(we)`
  height: 35px;
  text-decoration: none;
  padding: 8px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-radius: 40px;
  background: ${Qe.blue};

  color: #fef9f9;
  font-family: ${ae.bold}, sans-serif;
  font-size: ${qe.m};
  font-style: normal;
  font-weight: ${se.bold};
  line-height: normal;
  letter-spacing: 0.64px;
`,et=n.div`
  row-gap: 12px;
`;function tt(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z",fill:"currentColor"}}]})(t)}function nt(t){return q({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M14.88 4.78a3.489 3.489 0 0 0-.37-.9 3.24 3.24 0 0 0-.6-.79 3.78 3.78 0 0 0-1.21-.81 3.74 3.74 0 0 0-2.84 0 4 4 0 0 0-1.16.75l-.05.06-.65.65-.65-.65-.05-.06a4 4 0 0 0-1.16-.75 3.74 3.74 0 0 0-2.84 0 3.78 3.78 0 0 0-1.21.81 3.55 3.55 0 0 0-.97 1.69 3.75 3.75 0 0 0-.12 1c0 .317.04.633.12.94a4 4 0 0 0 .36.89 3.8 3.8 0 0 0 .61.79L8 14.31l5.91-5.91c.237-.233.44-.5.6-.79A3.578 3.578 0 0 0 15 5.78a3.747 3.747 0 0 0-.12-1zm-1 1.63a2.69 2.69 0 0 1-.69 1.21l-5.21 5.2-5.21-5.2a2.9 2.9 0 0 1-.44-.57 3 3 0 0 1-.27-.65 3.25 3.25 0 0 1-.08-.69A3.36 3.36 0 0 1 2.06 5a2.8 2.8 0 0 1 .27-.65c.12-.21.268-.4.44-.57a2.91 2.91 0 0 1 .89-.6 2.8 2.8 0 0 1 2.08 0c.33.137.628.338.88.59l1.36 1.37 1.36-1.37a2.72 2.72 0 0 1 .88-.59 2.8 2.8 0 0 1 2.08 0c.331.143.633.347.89.6.174.165.32.357.43.57a2.69 2.69 0 0 1 .35 1.34 2.6 2.6 0 0 1-.06.72h-.03z"}}]})(t)}const ot=Object.freeze({fonts:{main:"'Manrope', sans-serif",second:"'Inter', sans-serif"},fontSizes:[12,14,16,18,20,24,28,32,44,48,60,72,100],fontWeights:{regular:400,medium:500,semibold:600,bold:700,extrabold:800},colors:{accent:"#FF8356",background:"#FEF9F9",black:"#111111",yellow:"#FFC107",blue:"#54ADFF",blueGradient:"linear-gradient(290.46deg, #419EF1 0%, #9BD0FF 107.89%)",blueLight:"#CCE4FB",red:"#F43F5E",green:"#00C3AD",grey:"#888888",white:"#FFFFFF",orangeGradient:"linear-gradient(90deg, #FF634E 0%, #FFDF48 105.44%)",backdrop:"rgba(97, 97, 97, 0.6)",transparent:"transparent"},shadows:{defaultShadow:"3px 8px 14px rgba(136, 198, 253, 0.19)",hoverShadow:"7px 13px 14px rgba(116, 177, 232, 0.24)"},media:{mobile:"(min-width: 320px)",tablet:"(min-width: 768px)",desktop:"(min-width: 1280px)",mobileTablet:"(min-width: 320px) and (max-width: 767px)",tabletDesktop:"(min-width: 768px) and (max-width: 1279px)"}}),{fonts:j,fontSizes:C,fontWeights:m,colors:p,media:b}=ot,it=n.div`
  position: fixed;
  z-index: 3;
  top: 0;

  width: 100vw;
  height: 100vh;
  background-color: ${p.backdrop};
  backdrop-filter: blur(4px);
  overflow: auto;

  overflow-y: auto;
`,at=n.div`
  position: relative;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 300px;
  width: 280px;
  background-color: ${p.white};
  border-radius: 20px;
  padding-top: 40px;
  padding-bottom: 16px;
  overflow: auto;
  overflow-x: auto;

  @media screen and (${b.tablet}) {
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

  background: ${p.blueLight};
  border-radius: 0px 16px 16px 0px;
  border: none;

  font-family: ${j.main};
  font-weight: ${m.medium};
  font-size: ${C[1]}px;
  line-height: 19px;
`;const st=n.img`
  display: block;
  width: 240px;
  height: 240px;
  object-fit: cover;
  border-radius: 0px 0px 40px 40px;

  @media screen and (${b.tablet}) {
    width: 262px;
    height: 298px;
    margin: 0;
  }
`,rt=n.div`
  position: relative;
  margin: 0 auto;
`,lt=n.div`
  display: flex;
  gap: 12px;
  flex-direction: column;

  @media screen and (${b.tablet}) {
    flex-direction: row;
    gap: 24px;
    padding: 32px 32px 24px;
  }
`,dt=n.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  right: 5px;
  top: 5px;
  border: none;
  background-color: ${p.transparent};

  @media screen and (${b.tablet}) {
    right: 19px;
    top: 16px;
  }
`,ct=n.h2`
  margin-top: 0;
  margin-bottom: 20px;
  width: 198px;
  font-family: ${j.main};
  font-weight: ${m.bold};
  font-size: ${C[5]}px;
  line-height: 33px;
  letter-spacing: -0.01em;

  color: ${p.black};

  @media screen and (${b.tablet}) {
    font-size: 28px;
    line-height: 38px;
    width: 250px;
  }
`,Y=n.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,x=n.li`
  margin: 0;
  font-family: ${j.main};
  font-weight: ${m.semibold};
  font-size: ${C[1]}px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;

  color: ${p.black};

  @media screen and (${b.tablet}) {
    font-size: ${C[2]}px;
    line-height: 22px;
  }
`,pt=n.p`
  margin: 12px 0;
  padding: 0 12px;
  width: 256px;
  font-family: ${j.main};
  font-weight: ${m.semibold};
  font-size: ${C[1]}px;
  line-height: 19px;
  display: flex;
  align-items: center;
  letter-spacing: 0.03em;

  color: ${p.black};

  @media screen and (${b.tablet}) {
    font-size: 16px;
    line-height: 24px;
    width: 618px;
    margin: 0 auto;
    padding: 0;
  }
`,xt=n.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 256px;
  padding: 8px 0;
  gap: 8px;
  text-decoration: none;

  border: 2px solid ${p.blue};
  border-radius: 40px;

  font-family: ${j.main};
  font-style: normal;
  font-weight: ${m.bold};
  font-size: ${C[2]}px;
  line-height: 22px;
  color: ${p.blue};
  transition: all 250ms ease-in-out;

  :hover,
  :focus {
    background: ${p.blueGradient};
    color: ${p.background};
    /* border: none; */
    outline: none;
  }

  @media screen and (${b.tablet}) {
    width: 129px;
  }
`,ht=n.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  gap: 8px;
  width: 256px;
  height: 40px;

  background: ${p.blue};
  border-radius: 40px;
  border: none;

  font-family: ${j.main};
  font-style: normal;
  font-weight: ${m.bold};
  font-size: ${C[2]}px;
  line-height: 22px;

  display: flex;
  align-items: center;
  letter-spacing: 0.04em;

  color: ${p.background};

  svg {
    stroke-width: 0.3px;
  }

  :hover,
  :focus {
    background: ${p.blueGradient};
    border-radius: 40px;
  }

  @media screen and (${b.tablet}) {
    width: 129px;
  }
`,ft=n.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 12px;

  @media screen and (${b.tablet}) {
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
  font-family: ${j.main};
`;n.div`
  font-size: 28px;
  line-height: 38px;
  font-weight: ${m.bold};
`;n.div`
  margin-top: 40px;
  width: 393px;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
`;n.div`
  font-weight: ${m.bold};
`;n.div`
  margin-top: 48px;
  margin-bottom: 60px;
  display: flex;
  align-items: center;
  gap: 17px;
`;n.button`
  padding: 9px 35px;
  border-radius: 40px;
  border-color: ${p.blue};
  background: ${p.white};
  color: ${p.blue};
  font-size: 16px;
  line-height: 22px;
  font-family: ${j.main};
  font-weight: ${m.bold};
`;n.button`
  display: flex;
  padding: 9px 34px;
  border-radius: 40px;
  background: ${p.blue};
  color: ${p.white};
  font-size: 16px;
  line-height: 22px;
  font-family: ${j.main};
  font-weight: ${m.bold};
  border-color: ${p.blue};
  gap: 12px;
  letter-spacing: 0.04em;
`;const gt=({notice:t,onClose:i})=>{const s=Q(),o=L(je),[l,h]=r.useState(!1),[g,d]=r.useState(!1),f=L(u=>u.auth.isLoggedIn),y=()=>{o.isLoggedIn?s(X({noticeId:t._id,token:o.token})):ve.error("You need to sign in")},z=u=>{const B=new Date(u),O=new Date;return new Date(O-B).getFullYear()-1970},S=()=>{h(u=>!u)},D=()=>{d(u=>!u)};return e.jsx(e.Fragment,{children:e.jsx(it,{onClick:D,children:e.jsxs(at,{children:[e.jsx(dt,{type:"button",onClick:()=>i(),children:e.jsx(tt,{size:22,color:"#54ADFF"})}),e.jsxs(lt,{children:[e.jsx(rt,{children:e.jsx(st,{src:t.image,alt:"dog"})}),e.jsxs("div",{style:{width:"321px",padding:"0 12px"},children:[e.jsx(ct,{children:t.title}),e.jsxs("div",{style:{display:"flex",gap:"50px"},children:[e.jsxs(Y,{children:[e.jsx(x,{children:"Name: "}),e.jsx(x,{children:"Age: "}),e.jsx(x,{children:"Breed: "}),t.price&&e.jsx(x,{children:"Price: "}),e.jsx(x,{children:"Place: "}),e.jsx(x,{children:"The sex: "}),e.jsx(x,{children:"Email: "}),e.jsx(x,{children:"Phone: "})]}),e.jsxs(Y,{children:[e.jsx(x,{children:t.name}),e.jsx(x,{children:z(t.birthDay)}),e.jsx(x,{children:t.typeOfPet}),t.price&&e.jsxs(x,{children:[" ",t.price]}),e.jsx(x,{children:t.location}),e.jsx(x,{children:t.gender}),e.jsx(x,{children:e.jsx("a",{style:{color:"#FFC107",textDecoration:"underline"},href:`mailto:${t.email}`,children:t.email})}),e.jsx(x,{style:{color:"#FFC107",textDecoration:"underline"},children:e.jsx("a",{style:{color:"#FFC107",textDecoration:"underline"},href:`tel:${t.phone}`,children:t.phone})})]})]})]})]}),e.jsxs(pt,{children:["Commentaries: ",t.comments]}),e.jsxs(ft,{children:[e.jsxs(ht,{type:"button",onClick:()=>{y(t._id),S()},children:[e.jsx("span",{children:o.isFavorite?"Remove":"Add"}),e.jsx(nt,{size:20})]}),e.jsx(xt,{href:`tel:${t.phone}`,children:"Contact"})]}),l&&!f&&e.jsx(ie,{toggleUnauthorizeModal:S})]})})})},{fonts:G,fontSizes:H,fontWeights:R,colors:re}=N,ut=n.div`
  width: 152px;
  padding: 14px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;

  border-radius: 20px;
  background: #fff;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
`,mt=n.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
`,le=n.form`
  display: flex;
  width: 136px;
  padding: 8px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  border-radius: 20px;
  background: ${re.blue_light};

  color: #54adff;
  font-feature-settings:
    'clig' off,
    'liga' off;

  font-family: ${G.normal}, sans-serif;
  font-size: ${H.s};
  font-style: normal;
  font-weight: ${R.normal};
  line-height: 130%; /* 18.2px */
`,bt=n.button`
  display: flex;
  width: 152px;
  padding: 4px 10px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 40px;
  border: 2px solid ${re.blue};
  background-color: #fff;

  color: #54adff;
  font-family: ${G.bold}, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: ${R.bold};
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
`,yt=n.button`
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
  font-family: ${G.bold}, sans-serif;
  font-size: ${H.m};
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.64px;
`,E=n.button`
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
  font-size: ${H.s};
  font-style: normal;
  font-weight: ${R.normal};
  line-height: 130%; /* 18.2px */
`,wt=n.input`
  display: none;
`,jt=n.label`
  display: flex;
  align-items: center;
  column-gap: 12px;
  font-size: 12px;
`,F=({name:t,value:i,checked:s,children:o})=>e.jsxs(jt,{children:[e.jsx(wt,{type:"radio",name:t,value:i}),e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("use",{xlinkHref:`${w}#${s?"check-round":"round"}`})}),o]}),vt=({onClick:t,onChange:i,initialValue:s})=>{const[o,l]=r.useState(s),h=d=>{d.preventDefault();const f=d.currentTarget.elements.ageOption.value;l(f),i(f)},g=d=>{d.preventDefault(),t()};return e.jsxs(le,{onInput:h,onSubmit:g,children:[e.jsxs(E,{type:"submit",children:[e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("use",{xlinkHref:`${w}#chevron-up`})}),"By age"]}),e.jsx(F,{name:"ageOption",value:"up1",checked:o==="up1",children:"up to 1 year"}),e.jsx(F,{name:"ageOption",value:"up2",checked:o==="up2",children:"up to 2 years"}),e.jsx(F,{name:"ageOption",value:"from2",checked:o==="from2",children:"from 2 years"}),e.jsx(F,{name:"ageOption",value:"anyAge",checked:o==="anyAge",children:"any age"})]})},$t=({onClick:t,onChange:i,initialValue:s})=>{const[o,l]=r.useState(s),h=d=>{d.preventDefault();const f=d.currentTarget.elements.genderOption.value;l(f),i(f)},g=d=>{d.preventDefault(),t()};return e.jsxs(le,{onInput:h,onSubmit:g,children:[e.jsxs(E,{type:"submit",children:[e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("use",{xlinkHref:`${w}#chevron-up`})}),"By gender"]}),e.jsx(F,{name:"genderOption",value:"female",checked:o==="female",children:"female"}),e.jsx(F,{name:"genderOption",value:"male",checked:o==="male",children:"male"}),e.jsx(F,{name:"genderOption",value:"",checked:o==="",children:"any gender"})]})},kt=({onChange:t})=>{const[i,s]=r.useState(!1),[o,l]=r.useState(!1),[h,g]=r.useState(!1),[d,f]=r.useState("anyAge"),[y,z]=r.useState(""),[S,D]=r.useState(!1),u=()=>{D(!0)},B=()=>{D(!1)},O=()=>{s(!i)},v=()=>{l(!o)},$=()=>{g(!h)},M=A=>{f(A)},P=A=>{z(A)};return r.useEffect(()=>{t({age:d,gender:y})},[d,y]),i?e.jsxs(ut,{children:[e.jsxs(yt,{onClick:O,children:[e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("use",{xlinkHref:`${w}#chevron-up`})}),"Filters"]}),e.jsxs(mt,{children:[o?e.jsx(vt,{onClick:v,onChange:M,initialValue:d}):e.jsxs(E,{onClick:v,children:[e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("use",{xlinkHref:`${w}#chevron-down`})}),"By gender"]}),h?e.jsx($t,{onClick:$,onChange:P,initialValue:y}):e.jsxs(E,{onClick:$,children:[e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("use",{xlinkHref:`${w}#chevron-down`})}),"By gender"]})]})]}):e.jsxs(bt,{onClick:O,onMouseOver:u,onMouseLeave:B,children:["Filter",e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",stroke:S?"#FEF9F9":"#54adff",children:e.jsx("use",{xlinkHref:`${w}#filters-3`})})]})},zt=()=>{const[t,i]=r.useState([]),s=V(),[o,l]=r.useState(""),[h,g]=r.useState({age:"any age",gender:"male"}),[d,f]=r.useState(null),[y,z]=r.useState(!1),[S,D]=r.useState(!1),[u,B]=r.useState(""),O=Q(),v=L(c=>c.auth.token),$=L(c=>c.auth.isLoggedIn),M=c=>{l(c)},P=c=>{g(c)},A=c=>{B(c)},de=c=>{console.log(c),O(X({token:v,noticeId:c}))},ce=async c=>{console.log("onDeleteFromFavourite"+c);try{(await T.delete(`https://happy-pets-rest-api.onrender.com/api/notices/${c}`,{headers:{Authorization:`Bearer ${v}`}})).status===200&&i(fe=>fe.filter(ge=>ge._id!==c))}catch(a){return console.error("Error fetching user:",a),null}},pe=c=>{f(t.find(a=>a._id===c))},xe=()=>{f(null)};r.useEffect(()=>{(async()=>{try{let a;o!=="own"&&o!=="favorite"?(a=await T.get(`https://happy-pets-rest-api.onrender.com/api/notices?${o&&"category="+o}`),a=await a.data,a=await a.data,a=await a.docs):o==="favorite"?(a=await T.get("https://happy-pets-rest-api.onrender.com/api/notices/favorite",{headers:{Authorization:`Bearer ${v}`}}),a=await a.data,a=await a.data,a=await a.favoriteNoties):(a=await T.get("https://happy-pets-rest-api.onrender.com/api/notices/my/adds",{headers:{Authorization:`Bearer ${v}`}}),a=await a.data,a=await a.data,a=await a.docs),i(a)}catch{return null}z(!0)})()},[o,h]);const he=()=>{$?s("/add-pet"):_()};r.useEffect(()=>{(async()=>{try{const a=await T.get(`https://happy-pets-rest-api.onrender.com/api/notices/search/?search=${u}`);i(a.data.docs)}catch{return null}z(!0)})()},[u]);const _=()=>{D(c=>!c)};return e.jsxs("div",{children:[e.jsx(Xe,{children:"Find your favorite pet"}),e.jsx(Te,{onSubmit:A}),e.jsxs(Ke,{children:[e.jsx(Me,{isLoggedIn:$,onChange:M}),e.jsxs(Ze,{children:[e.jsx(kt,{onChange:P}),e.jsx(et,{type:"button",onClick:he,children:e.jsxs(Je,{children:["Add pet",e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"#fff",children:e.jsx("use",{xlinkHref:`${w}#plus-small-white`})})]})})]})]}),"There must be Notice List",e.jsx($e,{petsData:t,isLoggedIn:$,onAddToFavourite:de,onDelete:ce,onLearnMore:pe}),"There must be Notice List",S&&!$&&e.jsx(ie,{toggleUnauthorizeModal:_}),d&&e.jsx(gt,{notice:d,onClose:xe})]})};export{zt as default};
