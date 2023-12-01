import{g as ce,x as n,z as I,j as e,i as W,u as G,r as c,s as b,f as pe,h as xe,A as he,N as fe,G as Y,c as H,b as A,C as ge,n as ue,D as U,V as me,E as be,a as L}from"./index-d3f905ba.js";import{S as ye}from"./cross-smal-cad1960a.js";var V={exports:{}},we="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",je=we,$e=je;function q(){}function X(){}X.resetWarningCache=q;var ve=function(){function t(o,l,h,k,j,F){if(F!==$e){var y=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw y.name="Invariant Violation",y}}t.isRequired=t;function r(){return t}var x={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:r,element:t,elementType:t,instanceOf:r,node:t,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:X,resetWarningCache:q};return x.PropTypes=x,x};V.exports=ve();var ke=V.exports;const B=ce(ke),{fonts:Fe}=I,Ce=n.form`
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
`,De=n.input`
  width: 100%;
  height: 44px;
  border: none;
  background: none;
  outline: none;

  color: #888;
  font-family: ${Fe.regular}, sans-serif;
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
`,ze=n.button`
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
`;const Se=()=>e.jsxs(Ce,{children:[e.jsx(De,{type:"text",placeholder:"Search"}),e.jsx(ze,{type:"submit",children:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("use",{xlinkHref:`${W}#search`})})})]}),{fonts:K,fontSizes:Z,colors:J}=I,Te=n.form`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`,R=n.input`
  display: none;
`,Ae=n.label`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: 35px;
  padding: 8px 16px;

  border-radius: 40px;
  background: rgba(140, 200, 253, 0.44);

  color: ${J.blue};
  font-family: ${K.medium}, sans-serif;
  font-size: ${Z.s};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.56px;
`,Oe=n.label`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: 35px;
  padding: 8px 16px;

  border-radius: 40px;
  border-radius: 40px;
  background: ${J.blue};

  color: #fef9f9;
  font-family: ${K.medium}, sans-serif;
  font-size: ${Z.s};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.56px;
`,v=({name:t,value:r,checked:x,defaultChecked:o,children:l})=>x?e.jsxs(Oe,{children:[e.jsx(R,{type:"radio",name:t,value:r,defaultChecked:o}),l]}):e.jsxs(Ae,{children:[e.jsx(R,{type:"radio",name:t,value:r}),l]}),Ee=({isLoggedIn:t,onChange:r})=>{const x=G(),[o,l]=c.useState(""),h=k=>{k.preventDefault();const j=k.currentTarget.elements.categoryOption.value;l(j),r(j)};return c.useEffect(()=>{x(o?`/notices/${o}`:"/notices")}),e.jsxs(Te,{onInput:h,children:[e.jsx(v,{to:"/notices",name:"categoryOption",value:"",checked:o==="",defaultChecked:!0,children:"all categories"}),e.jsx(v,{to:"/notices/sell",name:"categoryOption",value:"sell",checked:o==="sell",defaultChecked:!1,children:"sell"}),e.jsx(v,{to:"/notices/lostFound",name:"categoryOption",value:"lostFound",checked:o==="lostFound",defaultChecked:!1,children:"lost/found"}),e.jsx(v,{to:"/notices/inGoodHands",name:"categoryOption",value:"inGoodHands",checked:o==="inGoodHands",defaultChecked:!1,children:"in good hands"}),t&&e.jsx(v,{to:"/notices/favorite",name:"categoryOption",value:"favorite",checked:o==="favorite",defaultChecked:!1,children:"favorite ads"}),t&&e.jsx(v,{to:"/notices/own",name:"categoryOption",value:"own",checked:o==="own",defaultChecked:!1,children:"my ads"})]})},Le=b.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: #51515199;

  overflow-y: scroll;
  z-index: 4;
`,Ie=b.div`
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
`,Pe=b.button`
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
`,Ne=document.getElementById("modal-root"),Q=({toggleModal:t,children:r})=>{pe().pathname.includes("notices"),c.useEffect(()=>{const l=h=>{h.code==="Escape"&&t()};return document.addEventListener("keydown",l),()=>{document.removeEventListener("keydown",l)}},[t]);const o=l=>{l.target===l.currentTarget&&t()};return xe.createPortal(e.jsx(e.Fragment,{children:e.jsx(Le,{onClick:o,children:e.jsxs(Ie,{children:[e.jsx(Pe,{type:"button",onClick:t,children:e.jsx(ye,{size:22,color:"#54ADFF"})}),r]})})}),Ne)};Q.propTypes={toggleModal:B.func.isRequired,children:B.node.isRequired};const Me=b.div`
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
`,Be=b.div`
  display: flex;
  width: 280px;
  margin: auto;
  justify-content: center;
  flex-wrap: wrap;
  transition: width 0.5s ease;
  
  @media screen and (min-width: 768px) {
    width: 608px;
  }
`,Re=b.h2`
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
`,_e=b.p`
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
`,We=b.div`

  display: flex;
  padding-top: 20px;
  gap: 20px;

  @media screen and (max-width: 768px) {
  flex-direction: column;
  gap: 12px;
  }
`,ee=({toggleUnauthorizeModal:t})=>e.jsx(Q,{toggleModal:t,children:e.jsx(Me,{children:e.jsxs(Be,{children:[e.jsx(Re,{children:"Attention"}),e.jsx(_e,{children:"We would like to remind you that certain functionality is available only to authorized users. If you have an account, please log in with your credentials. If you do not already have an account, you must register to access these features."}),e.jsx(We,{children:e.jsx(he,{})})]})})}),{fonts:te,fontSizes:Ge,fontWeights:ne,colors:Ye}=I,He=n.h3`
  margin-top: 90px;
  color: #111;
  font-family: ${te.bold}, sans-serif;
  font-size: 48px;
  font-style: normal;
  font-weight: ${ne.bold};
  text-align: center;
  line-height: normal;
`,Ue=n.div`
  margin-bottom: 42px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  row-gap: 16px;
`,Ve=n.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 16px;
  row-gap: 12px;
`,qe=n(fe)`
  height: 35px;
  text-decoration: none;
  padding: 8px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-radius: 40px;
  background: ${Ye.blue};

  color: #fef9f9;
  font-family: ${te.bold}, sans-serif;
  font-size: ${Ge.m};
  font-style: normal;
  font-weight: ${ne.bold};
  line-height: normal;
  letter-spacing: 0.64px;
`,Xe=n.div`
  row-gap: 12px;
`;function Ke(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z",fill:"currentColor"}}]})(t)}function Ze(t){return Y({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M14.88 4.78a3.489 3.489 0 0 0-.37-.9 3.24 3.24 0 0 0-.6-.79 3.78 3.78 0 0 0-1.21-.81 3.74 3.74 0 0 0-2.84 0 4 4 0 0 0-1.16.75l-.05.06-.65.65-.65-.65-.05-.06a4 4 0 0 0-1.16-.75 3.74 3.74 0 0 0-2.84 0 3.78 3.78 0 0 0-1.21.81 3.55 3.55 0 0 0-.97 1.69 3.75 3.75 0 0 0-.12 1c0 .317.04.633.12.94a4 4 0 0 0 .36.89 3.8 3.8 0 0 0 .61.79L8 14.31l5.91-5.91c.237-.233.44-.5.6-.79A3.578 3.578 0 0 0 15 5.78a3.747 3.747 0 0 0-.12-1zm-1 1.63a2.69 2.69 0 0 1-.69 1.21l-5.21 5.2-5.21-5.2a2.9 2.9 0 0 1-.44-.57 3 3 0 0 1-.27-.65 3.25 3.25 0 0 1-.08-.69A3.36 3.36 0 0 1 2.06 5a2.8 2.8 0 0 1 .27-.65c.12-.21.268-.4.44-.57a2.91 2.91 0 0 1 .89-.6 2.8 2.8 0 0 1 2.08 0c.33.137.628.338.88.59l1.36 1.37 1.36-1.37a2.72 2.72 0 0 1 .88-.59 2.8 2.8 0 0 1 2.08 0c.331.143.633.347.89.6.174.165.32.357.43.57a2.69 2.69 0 0 1 .35 1.34 2.6 2.6 0 0 1-.06.72h-.03z"}}]})(t)}const Je=Object.freeze({fonts:{main:"'Manrope', sans-serif",second:"'Inter', sans-serif"},fontSizes:[12,14,16,18,20,24,28,32,44,48,60,72,100],fontWeights:{regular:400,medium:500,semibold:600,bold:700,extrabold:800},colors:{accent:"#FF8356",background:"#FEF9F9",black:"#111111",yellow:"#FFC107",blue:"#54ADFF",blueGradient:"linear-gradient(290.46deg, #419EF1 0%, #9BD0FF 107.89%)",blueLight:"#CCE4FB",red:"#F43F5E",green:"#00C3AD",grey:"#888888",white:"#FFFFFF",orangeGradient:"linear-gradient(90deg, #FF634E 0%, #FFDF48 105.44%)",backdrop:"rgba(97, 97, 97, 0.6)",transparent:"transparent"},shadows:{defaultShadow:"3px 8px 14px rgba(136, 198, 253, 0.19)",hoverShadow:"7px 13px 14px rgba(116, 177, 232, 0.24)"},media:{mobile:"(min-width: 320px)",tablet:"(min-width: 768px)",desktop:"(min-width: 1280px)",mobileTablet:"(min-width: 320px) and (max-width: 767px)",tabletDesktop:"(min-width: 768px) and (max-width: 1279px)"}}),{fonts:m,fontSizes:w,fontWeights:f,colors:a,media:g}=Je,Qe=n.div`
  position: fixed;
  z-index: 3;
  top: 0;

  width: 100vw;
  height: 100vh;
  background-color: ${a.backdrop};
  backdrop-filter: blur(4px);
  overflow: auto;

  overflow-y: auto;
`,et=n.div`
  position: relative;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 300px;
  width: 280px;
  background-color: ${a.white};
  border-radius: 20px;
  padding-top: 40px;
  padding-bottom: 16px;
  overflow: auto;
  overflow-x: auto;

  @media screen and (${g.tablet}) {
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

  background: ${a.blueLight};
  border-radius: 0px 16px 16px 0px;
  border: none;

  font-family: ${m.main};
  font-weight: ${f.medium};
  font-size: ${w[1]}px;
  line-height: 19px;
`;const tt=n.img`
  display: block;
  width: 240px;
  height: 240px;
  object-fit: cover;
  border-radius: 0px 0px 40px 40px;

  @media screen and (${g.tablet}) {
    width: 262px;
    height: 298px;
    margin: 0;
  }
`,nt=n.div`
  position: relative;
  margin: 0 auto;
`,ot=n.div`
  display: flex;
  gap: 12px;
  flex-direction: column;

  @media screen and (${g.tablet}) {
    flex-direction: row;
    gap: 24px;
    padding: 32px 32px 24px;
  }
`,it=n.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  right: 5px;
  top: 5px;
  border: none;
  background-color: ${a.transparent};

  @media screen and (${g.tablet}) {
    right: 19px;
    top: 16px;
  }
`,at=n.h2`
  margin-top: 0;
  margin-bottom: 20px;
  width: 198px;
  font-family: ${m.main};
  font-weight: ${f.bold};
  font-size: ${w[5]}px;
  line-height: 33px;
  letter-spacing: -0.01em;

  color: ${a.black};

  @media screen and (${g.tablet}) {
    font-size: 28px;
    line-height: 38px;
    width: 250px;
  }
`,_=n.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,s=n.li`
  margin: 0;
  font-family: ${m.main};
  font-weight: ${f.semibold};
  font-size: ${w[1]}px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;

  color: ${a.black};

  @media screen and (${g.tablet}) {
    font-size: ${w[2]}px;
    line-height: 22px;
  }
`,rt=n.p`
  margin: 12px 0;
  padding: 0 12px;
  width: 256px;
  font-family: ${m.main};
  font-weight: ${f.semibold};
  font-size: ${w[1]}px;
  line-height: 19px;
  display: flex;
  align-items: center;
  letter-spacing: 0.03em;

  color: ${a.black};

  @media screen and (${g.tablet}) {
    font-size: 16px;
    line-height: 24px;
    width: 618px;
    margin: 0 auto;
    padding: 0;
  }
`,st=n.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 256px;
  padding: 8px 0;
  gap: 8px;
  text-decoration: none;

  border: 2px solid ${a.blue};
  border-radius: 40px;

  font-family: ${m.main};
  font-style: normal;
  font-weight: ${f.bold};
  font-size: ${w[2]}px;
  line-height: 22px;
  color: ${a.blue};
  transition: all 250ms ease-in-out;

  :hover,
  :focus {
    background: ${a.blueGradient};
    color: ${a.background};
    /* border: none; */
    outline: none;
  }

  @media screen and (${g.tablet}) {
    width: 129px;
  }
`,lt=n.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  gap: 8px;
  width: 256px;
  height: 40px;

  background: ${a.blue};
  border-radius: 40px;
  border: none;

  font-family: ${m.main};
  font-style: normal;
  font-weight: ${f.bold};
  font-size: ${w[2]}px;
  line-height: 22px;

  display: flex;
  align-items: center;
  letter-spacing: 0.04em;

  color: ${a.background};

  svg {
    stroke-width: 0.3px;
  }

  :hover,
  :focus {
    background: ${a.blueGradient};
    border-radius: 40px;
  }

  @media screen and (${g.tablet}) {
    width: 129px;
  }
`,dt=n.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 12px;

  @media screen and (${g.tablet}) {
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
  font-family: ${m.main};
`;n.div`
  font-size: 28px;
  line-height: 38px;
  font-weight: ${f.bold};
`;n.div`
  margin-top: 40px;
  width: 393px;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
`;n.div`
  font-weight: ${f.bold};
`;n.div`
  margin-top: 48px;
  margin-bottom: 60px;
  display: flex;
  align-items: center;
  gap: 17px;
`;n.button`
  padding: 9px 35px;
  border-radius: 40px;
  border-color: ${a.blue};
  background: ${a.white};
  color: ${a.blue};
  font-size: 16px;
  line-height: 22px;
  font-family: ${m.main};
  font-weight: ${f.bold};
`;n.button`
  display: flex;
  padding: 9px 34px;
  border-radius: 40px;
  background: ${a.blue};
  color: ${a.white};
  font-size: 16px;
  line-height: 22px;
  font-family: ${m.main};
  font-weight: ${f.bold};
  border-color: ${a.blue};
  gap: 12px;
  letter-spacing: 0.04em;
`;const ct=({notice:t,onClose:r})=>{const x=H(),o=A(ge),[l,h]=c.useState(!1),[k,j]=c.useState(!1),F=A(u=>u.auth.isLoggedIn),y=()=>{o.isLoggedIn?x(U({noticeId:t._id,token:o.token})):ue.error("You need to sign in")},D=u=>{const O=new Date(u),E=new Date;return new Date(E-O).getFullYear()-1970},z=()=>{h(u=>!u)},S=()=>{j(u=>!u)};return e.jsx(e.Fragment,{children:e.jsx(Qe,{onClick:S,children:e.jsxs(et,{children:[e.jsx(it,{type:"button",onClick:()=>r(),children:e.jsx(Ke,{size:22,color:"#54ADFF"})}),e.jsxs(ot,{children:[e.jsx(nt,{children:e.jsx(tt,{src:t.image,alt:"dog"})}),e.jsxs("div",{style:{width:"321px",padding:"0 12px"},children:[e.jsx(at,{children:t.title}),e.jsxs("div",{style:{display:"flex",gap:"50px"},children:[e.jsxs(_,{children:[e.jsx(s,{children:"Name: "}),e.jsx(s,{children:"Age: "}),e.jsx(s,{children:"Breed: "}),t.price&&e.jsx(s,{children:"Price: "}),e.jsx(s,{children:"Place: "}),e.jsx(s,{children:"The sex: "}),e.jsx(s,{children:"Email: "}),e.jsx(s,{children:"Phone: "})]}),e.jsxs(_,{children:[e.jsx(s,{children:t.name}),e.jsx(s,{children:D(t.birthDay)}),e.jsx(s,{children:t.typeOfPet}),t.price&&e.jsxs(s,{children:[" ",t.price]}),e.jsx(s,{children:t.location}),e.jsx(s,{children:t.gender}),e.jsx(s,{children:e.jsx("a",{style:{color:"#FFC107",textDecoration:"underline"},href:`mailto:${t.email}`,children:t.email})}),e.jsx(s,{style:{color:"#FFC107",textDecoration:"underline"},children:e.jsx("a",{style:{color:"#FFC107",textDecoration:"underline"},href:`tel:${t.phone}`,children:t.phone})})]})]})]})]}),e.jsxs(rt,{children:["Commentaries: ",t.comments]}),e.jsxs(dt,{children:[e.jsxs(lt,{type:"button",onClick:()=>{y(t._id),z()},children:[e.jsx("span",{children:o.isFavorite?"Remove":"Add"}),e.jsx(Ze,{size:20})]}),e.jsx(st,{href:`tel:${t.phone}`,children:"Contact"})]}),l&&!F&&e.jsx(ee,{toggleUnauthorizeModal:z})]})})})},ht=()=>{c.useState(null);const[t,r]=c.useState(null),x=G(),[o,l]=c.useState(""),[h,k]=c.useState({age:"any age",gender:""}),[j,F]=c.useState([""]),[y,D]=c.useState(null),[z,S]=c.useState(!1),[u,O]=c.useState(!1),E=H(),T=A(i=>i.auth.token),C=A(i=>i.auth.isLoggedIn),oe=i=>{l(i)},P=i=>{const d=new Date(i),p=new Date;return new Date(p-d).getFullYear()-1970},ie=(i,d)=>{const p=P(i.petBirthday);return{upToOne:p<1,upToTwo:p<2,fromTwo:p>=2,anyAge:!0}[d]},ae=i=>{console.log(i),E(U({token:T,noticeId:i}))},re=async i=>{console.log("onDeleteFromFavourite"+i);try{(await L.delete(`https://happy-pets-rest-api.onrender.com/api/notices/${i}`,{headers:{Authorization:`Bearer ${T}`}})).status===200&&r(p=>p.filter($=>$._id!==i))}catch(d){return console.error("Error fetching user:",d),null}},se=i=>{D(t.find(d=>d._id===i))},le=()=>{D(null)};if(c.useEffect(()=>{(async()=>{try{let d;o!=="own"?d=await L.get(`https://happy-pets-rest-api.onrender.com/api/notices?${o&&"category="+o}`):d=await L.get("https://happy-pets-rest-api.onrender.com/api/notices/my/adds",{headers:{Authorization:`Bearer ${T}`}}),r(d.data.data.docs)}catch{return null}S(!0)})()},[o,h]),c.useEffect(()=>{if(t){const d=t.filter(p=>(!o||p.category===o)&&ie(p,h.age)&&(!h.gender||p.sex===h.gender)).map(p=>{const $=P(p.birthDay),M=`${$} year${$!==1?"s":""}`;return{...p,age:M}});F(d),S(!0)}},[t,o,h]),!z)return e.jsx(me,{});const de=()=>{C?x("/add-pet"):N()},N=()=>{O(i=>!i)};return e.jsxs("div",{children:[e.jsx(He,{children:"Find your favorite pet"}),e.jsx(Se,{}),e.jsxs(Ue,{children:[e.jsx(Ee,{isLoggedIn:C,onChange:oe}),e.jsx(Ve,{children:e.jsx(Xe,{type:"button",onClick:de,children:e.jsxs(qe,{children:["Add pet",e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"#fff",children:e.jsx("use",{xlinkHref:`${W}#plus-small-white`})})]})})})]}),e.jsx(be,{petsData:t,isLoggedIn:C,onAddToFavourite:ae,onDelete:re,onLearnMore:se}),u&&!C&&e.jsx(ee,{toggleUnauthorizeModal:N}),y&&e.jsx(ct,{notice:y,onClose:le})]})};export{ht as default};
