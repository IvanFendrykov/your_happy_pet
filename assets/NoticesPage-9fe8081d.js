import{x as n,z as T,j as e,i as y,u as se,r as d,N as ae,G as U,c as X,b as H,A as re,n as le,C as Z,V as de,D as ce,a as _}from"./index-87a0f241.js";const{fonts:pe}=T,xe=n.form`
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
`,fe=n.input`
  width: 100%;
  height: 44px;
  border: none;
  background: none;
  outline: none;

  color: #888;
  font-family: ${pe.regular}, sans-serif;
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
`,ge=n.button`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  border: none;
  background: none;
`,he=n.button`
  right: 13px;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  border: none;
  background: none;

  transform: translateX(0);
  ${""}
`,ue=({})=>e.jsxs(xe,{children:[e.jsx(fe,{}),e.jsx(ge,{children:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("use",{xlinkHref:`${y}#search`})})}),e.jsx(he,{})]}),{fonts:q,fontSizes:J,colors:K}=T,me=n.form`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`,R=n.input`
  display: none;
`,be=n.label`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: 25px;
  padding: 8px 16px;

  border-radius: 40px;
  background: rgba(140, 200, 253, 0.44);

  color: ${K.blue};
  font-family: ${q.medium}, sans-serif;
  font-size: ${J.s};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.56px;
`,ye=n.label`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: 25px;
  padding: 8px 16px;

  border-radius: 40px;
  border-radius: 40px;
  background: ${K.blue};

  color: #fef9f9;
  font-family: ${q.medium}, sans-serif;
  font-size: ${J.s};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.56px;
`,F=({name:t,value:c,checked:i,defaultChecked:o,children:l})=>i?e.jsxs(ye,{children:[e.jsx(R,{type:"radio",name:t,value:c,defaultChecked:o}),l]}):e.jsxs(be,{children:[e.jsx(R,{type:"radio",name:t,value:c}),l]}),we=({isLoggedIn:t,onChange:c})=>{const i=se(),[o,l]=d.useState(""),h=f=>{f.preventDefault();const a=f.currentTarget.elements.categoryOption.value;l(a),c(a)};return d.useEffect(()=>{i(o?`/notices/${o}`:"/notices")}),e.jsxs(me,{onInput:h,children:[e.jsx(F,{name:"categoryOption",value:"",checked:o==="",defaultChecked:!0,children:"all categories"}),e.jsx(F,{name:"categoryOption",value:"sell",checked:o==="sell",defaultChecked:!1,children:"sell"}),e.jsx(F,{name:"categoryOption",value:"lost/found",checked:o==="lost/found",defaultChecked:!1,children:"lost/found"}),e.jsx(F,{name:"categoryOption",value:"in good hands",checked:o==="in good hands",defaultChecked:!1,children:"in good hands"}),t&&e.jsx(F,{name:"categoryOption",value:"favorite ads",checked:o==="favorite ads",defaultChecked:!1,children:"favorite ads"}),t&&e.jsx(F,{name:"categoryOption",value:"my ads",checked:o==="my ads",defaultChecked:!1,children:"my ads"})]})},{fonts:P,fontSizes:M,fontWeights:Y,colors:Q}=T,je=n.div`
  width: 152px;
  padding: 14px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;

  border-radius: 20px;
  background: #fff;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
`,$e=n.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
`,ee=n.form`
  display: flex;
  width: 136px;
  padding: 8px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  border-radius: 20px;
  background: ${Q.blue_light};

  color: #54adff;
  font-feature-settings:
    'clig' off,
    'liga' off;

  font-family: ${P.normal}, sans-serif;
  font-size: ${M.s};
  font-style: normal;
  font-weight: ${Y.normal};
  line-height: 130%; /* 18.2px */
`,ve=n.button`
  display: flex;
  width: 152px;
  padding: 4px 10px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 40px;
  border: 2px solid ${Q.blue};
  background-color: #fff;

  color: #54adff;
  font-family: ${P.bold}, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: ${Y.bold};
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
`,ke=n.button`
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
  font-family: ${P.bold}, sans-serif;
  font-size: ${M.m};
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.64px;
`,N=n.button`
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
  font-size: ${M.s};
  font-style: normal;
  font-weight: ${Y.normal};
  line-height: 130%; /* 18.2px */
`,Fe=n.input`
  display: none;
`,Ce=n.label`
  display: flex;
  align-items: center;
  column-gap: 12px;
  font-size: 12px;
`,$=({name:t,value:c,checked:i,children:o})=>e.jsxs(Ce,{children:[e.jsx(Fe,{type:"radio",name:t,value:c}),e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("use",{xlinkHref:`${y}#${i?"check-round":"round"}`})}),o]}),De=({onClick:t,onChange:c,initialValue:i})=>{const[o,l]=d.useState(i),h=a=>{a.preventDefault();const u=a.currentTarget.elements.ageOption.value;l(u),c(u)},f=a=>{a.preventDefault(),t()};return e.jsxs(ee,{onInput:h,onSubmit:f,children:[e.jsxs(N,{type:"submit",children:[e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("use",{xlinkHref:`${y}#chevron-up`})}),"By age"]}),e.jsx($,{name:"ageOption",value:"upToOne",checked:o==="upToOne",children:"up to 1 year"}),e.jsx($,{name:"ageOption",value:"upToTwo",checked:o==="upToTwo",children:"up to 2 years"}),e.jsx($,{name:"ageOption",value:"fromTwo",checked:o==="fromTwo",children:"from 2 years"}),e.jsx($,{name:"ageOption",value:"anyAge",checked:o==="anyAge",children:"any age"})]})},ze=({onClick:t,onChange:c,initialValue:i})=>{const[o,l]=d.useState(i),h=a=>{a.preventDefault();const u=a.currentTarget.elements.genderOption.value;l(u),c(u)},f=a=>{a.preventDefault(),t()};return e.jsxs(ee,{onInput:h,onSubmit:f,children:[e.jsxs(N,{type:"submit",children:[e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("use",{xlinkHref:`${y}#chevron-up`})}),"By gender"]}),e.jsx($,{name:"genderOption",value:"female",checked:o==="female",children:"female"}),e.jsx($,{name:"genderOption",value:"male",checked:o==="male",children:"male"}),e.jsx($,{name:"genderOption",value:"",checked:o==="",children:"any gender"})]})},Se=({onChange:t})=>{const[c,i]=d.useState(!1),[o,l]=d.useState(!1),[h,f]=d.useState(!1),[a,u]=d.useState("anyAge"),[j,z]=d.useState(""),[S,O]=d.useState(!1),B=()=>{O(!0)},A=()=>{O(!1)},I=()=>{i(!c)},L=()=>{l(!o)},C=()=>{f(!h)},E=D=>{u(D)},G=D=>{z(D)};return d.useEffect(()=>{t({age:a,gender:j})},[a,j]),c?e.jsxs(je,{children:[e.jsxs(ke,{onClick:I,children:[e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("use",{xlinkHref:`${y}#chevron-up`})}),"Filters"]}),e.jsxs($e,{children:[o?e.jsx(De,{onClick:L,onChange:E,initialValue:a}):e.jsxs(N,{onClick:L,children:[e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("use",{xlinkHref:`${y}#chevron-down`})}),"By gender"]}),h?e.jsx(ze,{onClick:C,onChange:G,initialValue:j}):e.jsxs(N,{onClick:C,children:[e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("use",{xlinkHref:`${y}#chevron-down`})}),"By gender"]})]})]}):e.jsxs(ve,{onClick:I,onMouseOver:B,onMouseLeave:A,children:["Filter",e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",stroke:S?"#FEF9F9":"#54adff",children:e.jsx("use",{xlinkHref:`${y}#filters-3`})})]})},{fonts:te,fontSizes:Oe,fontWeights:ne,colors:Be}=T,Ae=n.h3`
  margin-top: 90px;
  color: #111;
  font-family: ${te.bold}, sans-serif;
  font-size: 48px;
  font-style: normal;
  font-weight: ${ne.bold};
  text-align: center;
  line-height: normal;
`,Ie=n.div`
  margin-bottom: 42px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  row-gap: 16px;
`,Le=n.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 16px;
  row-gap: 12px;
`,Ne=n(ae)`
  text-decoration: none;
  display: flex;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-radius: 40px;
  background: ${Be.blue};

  color: #fef9f9;
  font-family: ${te.bold}, sans-serif;
  font-size: ${Oe.m};
  font-style: normal;
  font-weight: ${ne.bold};
  line-height: normal;
  letter-spacing: 0.64px;
`;function Te(t){return U({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z",fill:"currentColor"}}]})(t)}function Ee(t){return U({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M14.88 4.78a3.489 3.489 0 0 0-.37-.9 3.24 3.24 0 0 0-.6-.79 3.78 3.78 0 0 0-1.21-.81 3.74 3.74 0 0 0-2.84 0 4 4 0 0 0-1.16.75l-.05.06-.65.65-.65-.65-.05-.06a4 4 0 0 0-1.16-.75 3.74 3.74 0 0 0-2.84 0 3.78 3.78 0 0 0-1.21.81 3.55 3.55 0 0 0-.97 1.69 3.75 3.75 0 0 0-.12 1c0 .317.04.633.12.94a4 4 0 0 0 .36.89 3.8 3.8 0 0 0 .61.79L8 14.31l5.91-5.91c.237-.233.44-.5.6-.79A3.578 3.578 0 0 0 15 5.78a3.747 3.747 0 0 0-.12-1zm-1 1.63a2.69 2.69 0 0 1-.69 1.21l-5.21 5.2-5.21-5.2a2.9 2.9 0 0 1-.44-.57 3 3 0 0 1-.27-.65 3.25 3.25 0 0 1-.08-.69A3.36 3.36 0 0 1 2.06 5a2.8 2.8 0 0 1 .27-.65c.12-.21.268-.4.44-.57a2.91 2.91 0 0 1 .89-.6 2.8 2.8 0 0 1 2.08 0c.33.137.628.338.88.59l1.36 1.37 1.36-1.37a2.72 2.72 0 0 1 .88-.59 2.8 2.8 0 0 1 2.08 0c.331.143.633.347.89.6.174.165.32.357.43.57a2.69 2.69 0 0 1 .35 1.34 2.6 2.6 0 0 1-.06.72h-.03z"}}]})(t)}const Ge=Object.freeze({fonts:{main:"'Manrope', sans-serif",second:"'Inter', sans-serif"},fontSizes:[12,14,16,18,20,24,28,32,44,48,60,72,100],fontWeights:{regular:400,medium:500,semibold:600,bold:700,extrabold:800},colors:{accent:"#FF8356",background:"#FEF9F9",black:"#111111",yellow:"#FFC107",blue:"#54ADFF",blueGradient:"linear-gradient(290.46deg, #419EF1 0%, #9BD0FF 107.89%)",blueLight:"#CCE4FB",red:"#F43F5E",green:"#00C3AD",grey:"#888888",white:"#FFFFFF",orangeGradient:"linear-gradient(90deg, #FF634E 0%, #FFDF48 105.44%)",backdrop:"rgba(97, 97, 97, 0.6)",transparent:"transparent"},shadows:{defaultShadow:"3px 8px 14px rgba(136, 198, 253, 0.19)",hoverShadow:"7px 13px 14px rgba(116, 177, 232, 0.24)"},media:{mobile:"(min-width: 320px)",tablet:"(min-width: 768px)",desktop:"(min-width: 1280px)",mobileTablet:"(min-width: 320px) and (max-width: 767px)",tabletDesktop:"(min-width: 768px) and (max-width: 1279px)"}}),{fonts:w,fontSizes:v,fontWeights:m,colors:r,media:b}=Ge,He=n.div`
  position: fixed;
  z-index: 1000;
  top: 0;

  width: 100vw;
  height: 100vh;
  background-color: ${r.backdrop};
  backdrop-filter: blur(4px);
  overflow: auto;

  overflow-y: auto;
`,Pe=n.div`
  position: relative;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 300px;
  width: 280px;
  background-color: ${r.white};
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

  background: ${r.blueLight};
  border-radius: 0px 16px 16px 0px;
  border: none;

  font-family: ${w.main};
  font-weight: ${m.medium};
  font-size: ${v[1]}px;
  line-height: 19px;
`;const Me=n.img`
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
`,Ye=n.div`
  position: relative;
  margin: 0 auto;
`,We=n.div`
  display: flex;
  gap: 12px;
  flex-direction: column;

  @media screen and (${b.tablet}) {
    flex-direction: row;
    gap: 24px;
    padding: 32px 32px 24px;
  }
`,_e=n.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  right: 5px;
  top: 5px;
  border: none;
  background-color: ${r.transparent};

  @media screen and (${b.tablet}) {
    right: 19px;
    top: 16px;
  }
`,Re=n.h2`
  margin-top: 0;
  margin-bottom: 20px;
  width: 198px;
  font-family: ${w.main};
  font-weight: ${m.bold};
  font-size: ${v[5]}px;
  line-height: 33px;
  letter-spacing: -0.01em;

  color: ${r.black};

  @media screen and (${b.tablet}) {
    font-size: 28px;
    line-height: 38px;
    width: 250px;
  }
`,V=n.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,p=n.li`
  margin: 0;
  font-family: ${w.main};
  font-weight: ${m.semibold};
  font-size: ${v[1]}px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;

  color: ${r.black};

  @media screen and (${b.tablet}) {
    font-size: ${v[2]}px;
    line-height: 22px;
  }
`,Ve=n.p`
  margin: 12px 0;
  padding: 0 12px;
  width: 256px;
  font-family: ${w.main};
  font-weight: ${m.semibold};
  font-size: ${v[1]}px;
  line-height: 19px;
  display: flex;
  align-items: center;
  letter-spacing: 0.03em;

  color: ${r.black};

  @media screen and (${b.tablet}) {
    font-size: 16px;
    line-height: 24px;
    width: 618px;
    margin: 0 auto;
    padding: 0;
  }
`,Ue=n.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 256px;
  padding: 8px 0;
  gap: 8px;
  text-decoration: none;

  border: 2px solid ${r.blue};
  border-radius: 40px;

  font-family: ${w.main};
  font-style: normal;
  font-weight: ${m.bold};
  font-size: ${v[2]}px;
  line-height: 22px;
  color: ${r.blue};
  transition: all 250ms ease-in-out;

  :hover,
  :focus {
    background: ${r.blueGradient};
    color: ${r.background};
    /* border: none; */
    outline: none;
  }

  @media screen and (${b.tablet}) {
    width: 129px;
  }
`,Xe=n.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  gap: 8px;
  width: 256px;
  height: 40px;

  background: ${r.blue};
  border-radius: 40px;
  border: none;

  font-family: ${w.main};
  font-style: normal;
  font-weight: ${m.bold};
  font-size: ${v[2]}px;
  line-height: 22px;

  display: flex;
  align-items: center;
  letter-spacing: 0.04em;

  color: ${r.background};

  svg {
    stroke-width: 0.3px;
  }

  :hover,
  :focus {
    background: ${r.blueGradient};
    border-radius: 40px;
  }

  @media screen and (${b.tablet}) {
    width: 129px;
  }
`,Ze=n.div`
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
  font-family: ${w.main};
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
  border-color: ${r.blue};
  background: ${r.white};
  color: ${r.blue};
  font-size: 16px;
  line-height: 22px;
  font-family: ${w.main};
  font-weight: ${m.bold};
`;n.button`
  display: flex;
  padding: 9px 34px;
  border-radius: 40px;
  background: ${r.blue};
  color: ${r.white};
  font-size: 16px;
  line-height: 22px;
  font-family: ${w.main};
  font-weight: ${m.bold};
  border-color: ${r.blue};
  gap: 12px;
  letter-spacing: 0.04em;
`;const qe=({notice:t,onClose:c})=>{const i=X(),o=H(re),l=()=>{o.isLoggedIn?i(Z({noticeId:t._id,token:o.token})):le.error("You need to sign in")},h=f=>{const a=new Date(f),u=new Date;return new Date(u-a).getFullYear()-1970};return e.jsx(e.Fragment,{children:e.jsx(He,{children:e.jsxs(Pe,{children:[e.jsx(_e,{type:"button",onClick:()=>c(),children:e.jsx(Te,{size:22,color:"#54ADFF"})}),e.jsxs(We,{children:[e.jsx(Ye,{children:e.jsx(Me,{src:t.image,alt:"dog"})}),e.jsxs("div",{style:{width:"321px",padding:"0 12px"},children:[e.jsx(Re,{children:t.title}),e.jsxs("div",{style:{display:"flex",gap:"50px"},children:[e.jsxs(V,{children:[e.jsx(p,{children:"Name: "}),e.jsx(p,{children:"Age: "}),e.jsx(p,{children:"Breed: "}),t.price&&e.jsx(p,{children:"Price: "}),e.jsx(p,{children:"Place: "}),e.jsx(p,{children:"The sex: "}),e.jsx(p,{children:"Email: "}),e.jsx(p,{children:"Phone: "})]}),e.jsxs(V,{children:[e.jsx(p,{children:t.name}),e.jsx(p,{children:h(t.birthDay)}),e.jsx(p,{children:t.typeOfPet}),t.price&&e.jsxs(p,{children:[" ",t.price]}),e.jsx(p,{children:t.location}),e.jsx(p,{children:t.gender}),e.jsx(p,{children:e.jsx("a",{style:{color:"#FFC107",textDecoration:"underline"},href:`mailto:${t.email}`,children:t.email})}),e.jsx(p,{style:{color:"#FFC107",textDecoration:"underline"},children:e.jsx("a",{style:{color:"#FFC107",textDecoration:"underline"},href:`tel:${t.phone}`,children:t.phone})})]})]})]})]}),e.jsxs(Ve,{children:["Commentaries: ",t.comments]}),e.jsxs(Ze,{children:[e.jsxs(Xe,{type:"button",onClick:()=>l(t._id),children:[e.jsx("span",{children:o.isFavorite?"Remove":"Add"}),e.jsx(Ee,{size:20})]}),e.jsx(Ue,{href:`tel:${t.phone}`,children:"Contact"})]})]})})})},Ke=()=>{const[t,c]=d.useState(null),[i,o]=d.useState(""),[l,h]=d.useState({age:"any age",gender:""}),[f,a]=d.useState([""]),[u,j]=d.useState(null),[z,S]=d.useState(!1),O=X(),B=H(s=>s.auth.token),A=H(s=>s.auth.isLoggedIn),I=s=>{o(s)},L=s=>{h(s)},C=s=>{const g=new Date(s),x=new Date;return new Date(x-g).getFullYear()-1970},E=(s,g)=>{const x=C(s.petBirthday);return{upToOne:x<1,upToTwo:x<2,fromTwo:x>=2,anyAge:!0}[g]},G=s=>{console.log(s),O(Z({token:B,noticeId:s}))},D=async s=>{console.log("onDeleteFromFavourite"+s);try{(await _.delete(`http://localhost:3001/api/notices/${s}`,{headers:{Authorization:`Bearer ${B}`}})).status===200&&c(x=>x.filter(k=>k._id!==s))}catch(g){return console.error("Error fetching user:",g),null}},oe=s=>{j(t.find(g=>g._id===s))},ie=()=>{j(null)};return d.useEffect(()=>{(async()=>{try{const g=await _.get(`http://localhost:3001/api/notices?${i&&"category="+i}`);c(g.data.data.docs)}catch{return null}S(!0)})()},[i,l]),d.useEffect(()=>{if(t){const g=t.filter(x=>(!i||x.category===i)&&E(x,l.age)&&(!l.gender||x.sex===l.gender)).map(x=>{const k=C(x.birthDay),W=`${k} year${k!==1?"s":""}`;return{...x,age:W}});a(g),S(!0)}},[t,i,l]),z?e.jsxs("div",{children:[e.jsx(Ae,{children:"Find your favorite pet"}),e.jsx(ue,{}),e.jsxs(Ie,{children:[e.jsx(we,{isLoggedIn:A,onChange:I}),e.jsxs(Le,{children:[e.jsx(Se,{onChange:L}),e.jsxs(Ne,{to:"/add-pet",children:["Add pet",e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"#fff",children:e.jsx("use",{xlinkHref:`${y}#plus-small-white`})})]})]})]}),e.jsx(ce,{petsData:f,isLoggedIn:A,onAddToFavourite:G,onDelete:D,onLearnMore:oe}),u&&e.jsx(qe,{notice:u,onClose:ie})]}):e.jsx(de,{})};export{Ke as default};
