import{g as ze,x as n,z as H,j as e,i as w,s as k,f as De,r as d,h as Se,A as Ie,N as Ne,G as ee,c as te,b as G,C as Te,n as Be,D as ne,u as Oe,E as Le,V as Pe,F as Ee,a as O}from"./index-3e3a527c.js";import{S as _e}from"./cross-smal-f09f71fa.js";var oe={exports:{}},Me="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Ge=Me,We=Ge;function ie(){}function re(){}re.resetWarningCache=ie;var He=function(){function t(a,o,c,h,F,f){if(f!==We){var b=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw b.name="Invariant Violation",b}}t.isRequired=t;function r(){return t}var l={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:r,element:t,elementType:t,instanceOf:r,node:t,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:re,resetWarningCache:ie};return l.PropTypes=l,l};oe.exports=He();var Re=oe.exports;const K=ze(Re),{fonts:Ye}=H,Ue=n.form`
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
`,Ve=n.input`
  width: 100%;
  height: 44px;
  border: none;
  background: none;
  outline: none;

  color: #888;
  font-family: ${Ye.regular}, sans-serif;
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
`,qe=n.button`
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
`;const Qe=({onSubmit:t})=>{const r=l=>{l.preventDefault();const a=l.currentTarget;t(a.elements.searchInput.value),a.reset()};return e.jsxs(Ue,{onSubmit:r,children:[e.jsx(Ve,{name:"searchInput",type:"text",placeholder:"Search"}),e.jsx(qe,{type:"submit",children:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("use",{xlinkHref:`${w}#search`})})})]})},{fonts:se,fontSizes:ae,colors:L}=H,Xe=n.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`,Ke=n.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: 35px;
  padding: 8px 16px;

  border: 2px solid ${L.blue_light};
  border-radius: 40px;
  background: rgba(140, 200, 253, 0.44);

  color: ${L.blue};
  font-family: ${se.medium}, sans-serif;
  font-size: ${ae.s};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.56px;

  :hover {
    border: 2px solid ${L.blue};
  }
`,Ze=n.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: 35px;
  padding: 8px 16px;

  border: 2px solid ${L.blue};
  border-radius: 40px;
  border-radius: 40px;
  background: ${L.blue};

  color: #fef9f9;
  font-family: ${se.medium}, sans-serif;
  font-size: ${ae.s};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.56px;
`,Je=({value:t,newValue:r,onClick:l,children:a})=>{const o=()=>{l(r)};return r===t?e.jsx(Ze,{onClick:o,children:a}):e.jsx(Ke,{onClick:o,children:a})},et=[{value:"",children:"all categories",isAuthNeeded:!1},{value:"sell",children:"sell",isAuthNeeded:!1},{value:"lostFound",children:"lost/found",isAuthNeeded:!1},{value:"inGoodHands",children:"in good hands",isAuthNeeded:!1},{value:"favorite",children:"favorite ads",isAuthNeeded:!0},{value:"own",children:"my ads",isAuthNeeded:!0}],tt=({isLoggedIn:t,onChange:r,category:l})=>{const a=o=>{r(o)};return e.jsx(Xe,{children:et.map((o,c)=>(!o.isAuthNeeded||t)&&e.jsx(Je,{newValue:o.value,value:l,onClick:a,children:o.children},c))})},nt=k.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: #51515199;

  overflow-y: scroll;
  z-index: 4;
`,ot=k.div`
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
`,it=k.button`
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
`,rt=document.getElementById("modal-root"),le=({toggleModal:t,children:r})=>{De().pathname.includes("notices"),d.useEffect(()=>{const o=c=>{c.code==="Escape"&&t()};return document.addEventListener("keydown",o),()=>{document.removeEventListener("keydown",o)}},[t]);const a=o=>{o.target===o.currentTarget&&t()};return Se.createPortal(e.jsx(e.Fragment,{children:e.jsx(nt,{onClick:a,children:e.jsxs(ot,{children:[e.jsx(it,{type:"button",onClick:t,children:e.jsx(_e,{size:22,color:"#54ADFF"})}),r]})})}),rt)};le.propTypes={toggleModal:K.func.isRequired,children:K.node.isRequired};const st=k.div`
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
`,at=k.div`
  display: flex;
  width: 280px;
  margin: auto;
  justify-content: center;
  flex-wrap: wrap;
  transition: width 0.5s ease;
  
  @media screen and (min-width: 768px) {
    width: 608px;
  }
`,lt=k.h2`
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
`,dt=k.p`
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
`,ct=k.div`

  display: flex;
  padding-top: 20px;
  gap: 20px;

  @media screen and (max-width: 768px) {
  flex-direction: column;
  gap: 12px;
  }
`,de=({toggleUnauthorizeModal:t})=>e.jsx(le,{toggleModal:t,children:e.jsx(st,{children:e.jsxs(at,{children:[e.jsx(lt,{children:"Attention"}),e.jsx(dt,{children:"We would like to remind you that certain functionality is available only to authorized users. If you have an account, please log in with your credentials. If you do not already have an account, you must register to access these features."}),e.jsx(ct,{children:e.jsx(Ie,{})})]})})}),{fonts:ce,fontSizes:Ht,fontWeights:pe,colors:Z}=H,pt=n.h3`
  margin-top: 90px;
  color: #111;
  font-family: ${ce.bold}, sans-serif;
  font-size: 48px;
  font-style: normal;
  font-weight: ${pe.bold};
  text-align: center;
  line-height: normal;
`,xt=n.div`
  margin-bottom: 42px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  row-gap: 16px;
`,ht=n.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 16px;
  row-gap: 12px;
`,ft=n(Ne)`
  text-decoration: none;
  height: 35px;
  display: flex;
  width: 152px;
  padding: 4px 10px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 40px;

  border: 2px solid ${Z.blue};
  background-color: #fff;

  color: ${Z.blue};
  font-family: ${ce.bold}, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: ${pe.bold};
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
`,gt=n.div`
  row-gap: 12px;
`;function ut(t){return ee({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z",fill:"currentColor"}}]})(t)}function mt(t){return ee({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M14.88 4.78a3.489 3.489 0 0 0-.37-.9 3.24 3.24 0 0 0-.6-.79 3.78 3.78 0 0 0-1.21-.81 3.74 3.74 0 0 0-2.84 0 4 4 0 0 0-1.16.75l-.05.06-.65.65-.65-.65-.05-.06a4 4 0 0 0-1.16-.75 3.74 3.74 0 0 0-2.84 0 3.78 3.78 0 0 0-1.21.81 3.55 3.55 0 0 0-.97 1.69 3.75 3.75 0 0 0-.12 1c0 .317.04.633.12.94a4 4 0 0 0 .36.89 3.8 3.8 0 0 0 .61.79L8 14.31l5.91-5.91c.237-.233.44-.5.6-.79A3.578 3.578 0 0 0 15 5.78a3.747 3.747 0 0 0-.12-1zm-1 1.63a2.69 2.69 0 0 1-.69 1.21l-5.21 5.2-5.21-5.2a2.9 2.9 0 0 1-.44-.57 3 3 0 0 1-.27-.65 3.25 3.25 0 0 1-.08-.69A3.36 3.36 0 0 1 2.06 5a2.8 2.8 0 0 1 .27-.65c.12-.21.268-.4.44-.57a2.91 2.91 0 0 1 .89-.6 2.8 2.8 0 0 1 2.08 0c.33.137.628.338.88.59l1.36 1.37 1.36-1.37a2.72 2.72 0 0 1 .88-.59 2.8 2.8 0 0 1 2.08 0c.331.143.633.347.89.6.174.165.32.357.43.57a2.69 2.69 0 0 1 .35 1.34 2.6 2.6 0 0 1-.06.72h-.03z"}}]})(t)}const bt=Object.freeze({fonts:{main:"'Manrope', sans-serif",second:"'Inter', sans-serif"},fontSizes:[12,14,16,18,20,24,28,32,44,48,60,72,100],fontWeights:{regular:400,medium:500,semibold:600,bold:700,extrabold:800},colors:{accent:"#FF8356",background:"#FEF9F9",black:"#111111",yellow:"#FFC107",blue:"#54ADFF",blueGradient:"linear-gradient(290.46deg, #419EF1 0%, #9BD0FF 107.89%)",blueLight:"#CCE4FB",red:"#F43F5E",green:"#00C3AD",grey:"#888888",white:"#FFFFFF",orangeGradient:"linear-gradient(90deg, #FF634E 0%, #FFDF48 105.44%)",backdrop:"rgba(97, 97, 97, 0.6)",transparent:"transparent"},shadows:{defaultShadow:"3px 8px 14px rgba(136, 198, 253, 0.19)",hoverShadow:"7px 13px 14px rgba(116, 177, 232, 0.24)"},media:{mobile:"(min-width: 320px)",tablet:"(min-width: 768px)",desktop:"(min-width: 1280px)",mobileTablet:"(min-width: 320px) and (max-width: 767px)",tabletDesktop:"(min-width: 768px) and (max-width: 1279px)"}}),{fonts:$,fontSizes:C,fontWeights:u,colors:p,media:m}=bt,yt=n.div`
  position: fixed;
  z-index: 3;
  top: 0;

  width: 100vw;
  height: 100vh;
  background-color: ${p.backdrop};
  backdrop-filter: blur(4px);
  overflow: auto;

  overflow-y: auto;
`,wt=n.div`
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

  @media screen and (${m.tablet}) {
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

  font-family: ${$.main};
  font-weight: ${u.medium};
  font-size: ${C[1]}px;
  line-height: 19px;
`;const vt=n.img`
  display: block;
  width: 240px;
  height: 240px;
  object-fit: cover;
  border-radius: 0px 0px 40px 40px;

  @media screen and (${m.tablet}) {
    width: 262px;
    height: 298px;
    margin: 0;
  }
`,$t=n.div`
  position: relative;
  margin: 0 auto;
`,jt=n.div`
  display: flex;
  gap: 12px;
  flex-direction: column;

  @media screen and (${m.tablet}) {
    flex-direction: row;
    gap: 24px;
    padding: 32px 32px 24px;
  }
`,kt=n.button`
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

  @media screen and (${m.tablet}) {
    right: 19px;
    top: 16px;
  }
`,Ft=n.h2`
  margin-top: 0;
  margin-bottom: 20px;
  width: 198px;
  font-family: ${$.main};
  font-weight: ${u.bold};
  font-size: ${C[5]}px;
  line-height: 33px;
  letter-spacing: -0.01em;

  color: ${p.black};

  @media screen and (${m.tablet}) {
    font-size: 28px;
    line-height: 38px;
    width: 250px;
  }
`,J=n.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,x=n.li`
  margin: 0;
  font-family: ${$.main};
  font-weight: ${u.semibold};
  font-size: ${C[1]}px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;

  color: ${p.black};

  @media screen and (${m.tablet}) {
    font-size: ${C[2]}px;
    line-height: 22px;
  }
`,Ct=n.p`
  margin: 12px 0;
  padding: 0 12px;
  width: 256px;
  font-family: ${$.main};
  font-weight: ${u.semibold};
  font-size: ${C[1]}px;
  line-height: 19px;
  display: flex;
  align-items: center;
  letter-spacing: 0.03em;

  color: ${p.black};

  @media screen and (${m.tablet}) {
    font-size: 16px;
    line-height: 24px;
    width: 618px;
    margin: 0 auto;
    padding: 0;
  }
`,At=n.a`
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

  font-family: ${$.main};
  font-style: normal;
  font-weight: ${u.bold};
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

  @media screen and (${m.tablet}) {
    width: 129px;
  }
`,zt=n.button`
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

  font-family: ${$.main};
  font-style: normal;
  font-weight: ${u.bold};
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

  @media screen and (${m.tablet}) {
    width: 129px;
  }
`,Dt=n.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 12px;

  @media screen and (${m.tablet}) {
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
  font-family: ${$.main};
`;n.div`
  font-size: 28px;
  line-height: 38px;
  font-weight: ${u.bold};
`;n.div`
  margin-top: 40px;
  width: 393px;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
`;n.div`
  font-weight: ${u.bold};
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
  font-family: ${$.main};
  font-weight: ${u.bold};
`;n.button`
  display: flex;
  padding: 9px 34px;
  border-radius: 40px;
  background: ${p.blue};
  color: ${p.white};
  font-size: 16px;
  line-height: 22px;
  font-family: ${$.main};
  font-weight: ${u.bold};
  border-color: ${p.blue};
  gap: 12px;
  letter-spacing: 0.04em;
`;const St=({notice:t,onClose:r})=>{const l=te(),a=G(Te),[o,c]=d.useState(!1),[h,F]=d.useState(!1),f=G(g=>g.auth.isLoggedIn),b=()=>{a.isLoggedIn?l(ne({noticeId:t._id,token:a.token})):Be.error("You need to sign in")},A=g=>{const I=new Date(g),N=new Date;return new Date(N-I).getFullYear()-1970},j=()=>{c(g=>!g)},E=()=>{F(g=>!g)};return e.jsx(e.Fragment,{children:e.jsx(yt,{onClick:E,children:e.jsxs(wt,{children:[e.jsx(kt,{type:"button",onClick:()=>r(),children:e.jsx(ut,{size:22,color:"#54ADFF"})}),e.jsxs(jt,{children:[e.jsx($t,{children:e.jsx(vt,{src:t.image,alt:"dog"})}),e.jsxs("div",{style:{width:"321px",padding:"0 12px"},children:[e.jsx(Ft,{children:t.title}),e.jsxs("div",{style:{display:"flex",gap:"50px"},children:[e.jsxs(J,{children:[e.jsx(x,{children:"Name: "}),e.jsx(x,{children:"Age: "}),e.jsx(x,{children:"Breed: "}),t.price&&e.jsx(x,{children:"Price: "}),e.jsx(x,{children:"Place: "}),e.jsx(x,{children:"The sex: "}),e.jsx(x,{children:"Email: "}),e.jsx(x,{children:"Phone: "})]}),e.jsxs(J,{children:[e.jsx(x,{children:t.name}),e.jsx(x,{children:A(t.birthDay)}),e.jsx(x,{children:t.typeOfPet}),t.price&&e.jsxs(x,{children:[" ",t.price]}),e.jsx(x,{children:t.location}),e.jsx(x,{children:t.gender}),e.jsx(x,{children:e.jsx("a",{style:{color:"#FFC107",textDecoration:"underline"},href:`mailto:${t.email}`,children:t.email})}),e.jsx(x,{style:{color:"#FFC107",textDecoration:"underline"},children:e.jsx("a",{style:{color:"#FFC107",textDecoration:"underline"},href:`tel:${t.phone}`,children:t.phone})})]})]})]})]}),e.jsxs(Ct,{children:["Commentaries: ",t.comments]}),e.jsxs(Dt,{children:[e.jsxs(zt,{type:"button",onClick:()=>{b(t._id),j()},children:[e.jsx("span",{children:a.isFavorite?"Remove":"Add"}),e.jsx(mt,{size:20})]}),e.jsx(At,{href:`tel:${t.phone}`,children:"Contact"})]}),o&&!f&&e.jsx(de,{toggleUnauthorizeModal:j})]})})})},{fonts:P,fontSizes:R,fontWeights:U,colors:v}=H,It=n.div`
  width: 152px;
  padding: 14px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;

  border-radius: 20px;
  background: #fff;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
`,Nt=n.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
`,xe=n.div`
  display: flex;
  width: 136px;
  padding: 8px;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  border-radius: 20px;
  background: ${v.blue_light};

  color: #54adff;
  font-feature-settings:
    'clig' off,
    'liga' off;

  font-family: ${P.normal}, sans-serif;
  font-size: ${R.s};
  font-style: normal;
  font-weight: ${U.normal};
  line-height: 130%; /* 18.2px */
`,Tt=n.button`
  display: flex;
  width: 152px;
  height: 35px;
  padding: 4px 10px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 40px;

  border: 2px solid ${v.blue};
  background-color: #fff;

  color: ${v.blue};
  font-family: ${P.bold}, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: ${U.bold};
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
`,Bt=n.button`
  display: flex;
  width: 136px;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 40px;
  border: 2px solid #fff;
  background-color: #fff;

  color: #54adff;
  font-family: ${P.bold}, sans-serif;
  font-size: ${R.m};
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.64px;

  :hover {
    border: 2px solid ${v.blue};
  }
`,W=n.button`
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
  border: 2px solid ${v.blue_light};

  color: #54adff;
  font-feature-settings:
    'clig' off,
    'liga' off;

  font-family: ${P.regular}, sans-serif;
  font-size: ${R.s};
  font-style: normal;
  font-weight: ${U.normal};
  line-height: 130%; /* 18.2px */

  :hover {
    border: 2px solid ${v.blue};
  }
`,Ot=n.button`
  box-sizing: border-box;
  height: 30px;
  width: 125px;
  display: flex;
  align-items: center;
  column-gap: 12px;
  font-size: 12px;
  border: 2px solid ${v.blue_light};
  border-radius: 20px;
  background: none;

  color: ${v.blue};
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: ${P.regular}, sans-serif;
  font-size: ${R.xs};
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 15.6px */

  :hover {
    border: 2px solid ${v.blue};
  }
`,he=({value:t,newValue:r,onClick:l,children:a})=>{const o=()=>{l(r)};return e.jsxs(Ot,{onClick:o,children:[e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("use",{xlinkHref:`${w}#${r===t?"check-round":"round"}`})}),a]})},Lt=[{value:"up1",children:"up to 1 year"},{value:"up2",children:"up to 2 years"},{value:"from2",children:"from 2 years"},{value:"",children:"any age"}],Pt=({onClick:t,onChange:r,value:l})=>{const a=c=>{r(c)},o=()=>{t()};return e.jsxs(xe,{children:[e.jsxs(W,{type:"submit",onClick:o,children:[e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("use",{xlinkHref:`${w}#chevron-up`})}),"By age"]}),Lt.map((c,h)=>e.jsx(he,{newValue:c.value,value:l,onClick:a,children:c.children},h))]})},Et=[{value:"female",children:"female"},{value:"male",children:"male"},{value:"",children:"any gender"}],_t=({onClick:t,onChange:r,value:l})=>{const a=c=>{r(c)},o=()=>{t()};return e.jsxs(xe,{children:[e.jsxs(W,{type:"submit",onClick:o,children:[e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("use",{xlinkHref:`${w}#chevron-up`})}),"By gender"]}),Et.map((c,h)=>e.jsx(he,{newValue:c.value,value:l,onClick:a,children:c.children},h))]})},Mt=({onChangeAge:t,onChangeGender:r,age:l,gender:a})=>{const[o,c]=d.useState(!1),[h,F]=d.useState(!1),[f,b]=d.useState(!1),[A,j]=d.useState(!1),E=()=>{j(!0)},g=()=>{j(!1)},I=()=>{c(!0)},N=()=>{c(!1)},z=()=>{F(!0)},_=()=>{F(!1)},Y=()=>{b(!0)},D=()=>{b(!1)},S=M=>{t(M)},T=M=>{r(M)};return o?e.jsxs(It,{children:[e.jsxs(Bt,{onClick:N,children:[e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("use",{xlinkHref:`${w}#chevron-up`})}),"Filters"]}),e.jsxs(Nt,{children:[h?e.jsx(Pt,{onClick:_,onChange:S,value:l}):e.jsxs(W,{onClick:z,children:[e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("use",{xlinkHref:`${w}#chevron-down`})}),"By gender"]}),f?e.jsx(_t,{onClick:D,onChange:T,value:a}):e.jsxs(W,{onClick:Y,children:[e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("use",{xlinkHref:`${w}#chevron-down`})}),"By gender"]})]})]}):e.jsxs(Tt,{onClick:I,onMouseOver:E,onMouseLeave:g,children:["Filter",e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",stroke:A?"#FEF9F9":"#54adff",children:e.jsx("use",{xlinkHref:`${w}#filters-3`})})]})},Rt=()=>{const[t,r]=d.useState([]),[l,a]=d.useState([]),[o,c]=d.useState(""),[h,F]=d.useState(""),[f,b]=d.useState(""),[A,j]=d.useState(null),[E,g]=d.useState(!1),[I,N]=d.useState(!1),[z,_]=d.useState(""),Y=te(),D=G(s=>s.auth.token),S=G(s=>s.auth.isLoggedIn),T=Oe(),[M,V]=Le(),[fe,q]=d.useState(!1),ge=()=>{q(!0)},ue=()=>{q(!1)},me=s=>{c(s)},be=s=>{F(s)},ye=s=>{b(s)},we=s=>{_(s)};d.useEffect(()=>{T(o?`/notices/${o}`:"/notices")},[o]);const ve=s=>{const i=new Date(s),y=new Date;return new Date(y-i).getFullYear()-1970},$e=s=>s.map(y=>{const B=ve(y.birthDay),X=`${B} year${B!==1?"s":""}`;return{...y,age:X}}),je=s=>{Y(ne({token:D,noticeId:s}))},ke=async s=>{try{(await O.delete(`https://happy-pets-rest-api.onrender.com/api/notices/${s}`,{headers:{Authorization:`Bearer ${D}`}})).status===200&&r(y=>y.filter(B=>B._id!==s))}catch(i){return console.error("Error fetching user:",i),null}},Fe=s=>{j(t.find(i=>i._id===s))},Ce=()=>{j(null)};d.useEffect(()=>{(async()=>{try{let i;if(o!=="own"&&o!=="favorite"){const y=`https://happy-pets-rest-api.onrender.com/api/notices?${o&&"category="+o}${h&&"&age="+h}${f&&"&gender="+f}`;i=await O.get(y),i=await i.data,i=await i.data,i=await i.docs}else o==="favorite"?(i=await O.get("https://happy-pets-rest-api.onrender.com/api/notices/favorite",{headers:{Authorization:`Bearer ${D}`}}),i=await i.data,i=await i.data,i=await i.favoriteNoties):(i=await O.get("https://happy-pets-rest-api.onrender.com/api/notices/my/adds",{headers:{Authorization:`Bearer ${D}`}}),i=await i.data,i=await i.data,i=await i.docs);V({category:o||"any",age:h||"any",gender:f||"any",search:"search_by_nav_and_filters"}),r(i)}catch{return null}g(!0)})()},[o,h,f]);const Ae=()=>{S?T("/add-pet"):Q()};d.useEffect(()=>{a($e(t))},[t]),d.useEffect(()=>{const s=async()=>{let i;try{i=await O.get(`https://happy-pets-rest-api.onrender.com/api/notices/search/?search=${z}`),i=await i.data,i=await i.docs}catch{return null}r(i),g(!0)};V({category:o||"any",age:h||"any",gender:f||"any",search:z||"default_notices"}),s()},[z]);const Q=()=>{N(s=>!s)};return e.jsxs("div",{children:[e.jsx(pt,{children:"Find your favorite pet"}),e.jsx(Qe,{onSubmit:we}),e.jsxs(xt,{children:[e.jsx(tt,{isLoggedIn:S,onChange:me,category:o}),e.jsxs(ht,{children:[e.jsx(Mt,{onChangeAge:be,onChangeGender:ye,age:h,gender:f}),e.jsx(gt,{type:"button",onClick:Ae,children:e.jsxs(ft,{onMouseOver:ge,onMouseLeave:ue,children:["Add pet",e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"#fff",children:e.jsx("use",{xlinkHref:`${w}#plus-small${fe?"-white":""}`})})]})})]})]}),e.jsx(d.Suspense,{fallback:e.jsx(Pe,{}),children:e.jsx(Ee,{petsData:l,isLoggedIn:S,onAddToFavourite:je,onDelete:ke,onLearnMore:Fe})}),I&&!S&&e.jsx(de,{toggleUnauthorizeModal:Q}),A&&e.jsx(St,{notice:A,onClose:Ce})]})};export{Rt as default};
