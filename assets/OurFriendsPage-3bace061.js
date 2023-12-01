import{s as i,r as c,j as e}from"./index-747d18b8.js";const j="https://happy-pets-rest-api.onrender.com";async function b(){const d=`${j}/api/ourfriends/`;try{const a=await fetch(d);if(!a.ok)throw new Error(`Status code: ${a.status}. Status message: ${a.statusText}`);return await a.json()}catch(a){throw new Error(a.message)}}const n={mobile:"320px",tablet:"768px",desktop:"1280px"},y=i.div`
  margin-top: 44px;
  text-align: center;
  width: 280px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${n.tablet}) {
    margin-top: 80px;
    width: 704px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media (min-width: ${n.desktop}) {
    width: 1248px;
    padding-left: 16px;
    padding-right: 16px;
  }
`,k=i.h1`
  font-family: Manrope;
  font-size: 24px;
  color: #111111;

  @media (min-width: ${n.tablet}) {
    font-size: 48px;
  }
`,$=i.ul`
margin-top: 24px;
  padding: 0;
  display: flex;
  list-style-type: none;
  flex-direction: column;
  gap: 20px;

  @media (min-width: ${n.tablet}) {
    flex-direction: unset;
    flex-wrap: wrap;
    gap: 32px;
    margin-top: 40px;
        justify-content: space-between;
  }

  @media (min-width: ${n.desktop}) {
    flex-direction: unset;
    flex-wrap: wrap;
    gap: 32px;
    margin-top: 60px;
  }
`,v=i.li`
  width: 280px;
  border-radius: 40px;
  background-color: #ffffff;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);

  @media (min-width: ${n.desktop}) {
    width: 380px;
    height: 287px;
  }
`,E=i.div`
  text-decoration: none;
`,S=i.img`
  max-width: 100px;

  @media (min-width: ${n.tablet}) {
    max-width: 124px;
  }

  @media (min-width: ${n.desktop}) {
    max-width: 146px;
  }
`,O=i.a`
text-decoration: none;
display: block;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
  padding-top: 16px;
  padding-right: 16px;
  padding-left: 16px;
  font-family: Manrope;
  font-size: 20px;
  color: #54adff;
`,A=i.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding-right: 12px;
  padding-left: 12px;
  padding-top: 16px;
  padding-bottom: 16px;

  @media (min-width: ${n.desktop}) {
    padding-right: 17px;
    padding-left: 17px;
  }
`,C=i.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 12px;
  flex-direction: column;
  font-family: Manrope;
  font-size: 12px;
  color: #111111;
  text-align: initial;
`;i.li`
  padding: 0;
  display: flex;
  flex-direction: column;
`;const p=i.h3`
  margin: 0;
`,x=i.a`
    color: #111;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover,
    &:focus {
        color: #54ADFF;
    }
`,M=i.ul`
display: flex;
flex-direction: column;
gap: 6px;
border-radius: 8px;
border: 1px solid #54ADFF;
padding: 12px;

@media (min-width: ${n.tablet}) {
    width: 120px;
    background-color: white;
    top: 1px;
    position: absolute;
    right: 140px;
  }

@media (min-width: ${n.desktop}) {

    right: 240px;
  }
`,T=i.button`
background-color: tomato;
border-radius: 10px;
padding: 5px;
border: none;
cursor: pointer;
transition: background-color 0.3s ease;

&:hover,
    &:focus {
        background-color: orange;
    }
`,L=()=>{const d="https://i.seadn.io/gae/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc?auto=format&dpr=1&w=1000",a=["MN","TU","WE","TH","FR","SA","SU"],o="Check details on website",[h,f]=c.useState([]);c.useEffect(()=>{(async()=>{try{const s=await b();f(s)}catch(s){console.error("Error fetching data:",s)}})()},[]);const[m,w]=c.useState(h.map(()=>!1)),u=t=>{w(s=>{const l=[...s];return l[t]=!l[t],l})};return e.jsxs(y,{children:[e.jsx(k,{children:"Our friends"}),e.jsx($,{children:h.map((t,s)=>e.jsx(v,{children:e.jsxs(E,{href:t.url,children:[e.jsx(O,{href:t.url,children:t.title}),e.jsxs(A,{children:[e.jsx(S,{src:t.imageUrl?t.imageUrl:d,alt:t.title}),e.jsxs(C,{children:[e.jsxs("li",{children:[e.jsx(p,{children:"Time:"}),e.jsx(T,{onClick:()=>u(s),children:m[s]?"Hide":"Show"}),m[s]?e.jsx(M,{children:Array.isArray(t.workDays)?a.map((l,g)=>{const r=t.workDays[g];return r&&r.isOpen!==void 0&&r.from&&r.to?e.jsxs("li",{children:[e.jsxs("strong",{children:[l,": "]}),r.isOpen?e.jsxs("span",{children:["Open from ",r.from," to ",r.to]}):e.jsx("span",{children:"Closed"})]},g):null}):e.jsx("li",{children:o})}):null]}),e.jsxs("li",{children:[e.jsx(p,{children:"Adress:"}),e.jsx(x,{href:t.addressUrl?t.addressUrl:t.url,target:"_blank",rel:"noreferrer noopener",children:t.address?t.address:o})]}),e.jsxs("li",{children:[e.jsx(p,{children:"Email:"}),e.jsx(x,{href:t.email?`mailto:${t.email}`:t.url,target:"_blank",rel:"noopener noreferrer",children:t.email?t.email:o})]}),e.jsxs("li",{children:[e.jsx(p,{children:"Phone:"}),e.jsx(x,{href:t.phone?`tel:${t.phone}`:t.url,target:"_blank",rel:"noopener noreferrer",children:t.phone?t.phone:o})]})]})]})]})},t._id))})]})};export{L as default};
