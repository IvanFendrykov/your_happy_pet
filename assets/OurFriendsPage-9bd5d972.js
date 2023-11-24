import{s,r as c,j as e}from"./index-41c1c916.js";const j="https://happy-pets-rest-api.onrender.com";async function y(){const p=`${j}/api/ourfriends/`;try{const a=await fetch(p);if(!a.ok)throw new Error(`Status code: ${a.status}. Status message: ${a.statusText}`);return await a.json()}catch(a){throw new Error(a.message)}}const i={mobile:"320px",tablet:"768px",desktop:"1280px"},b=s.div`
  text-align: center;
  width: 280px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${i.tablet}) {
    width: 704px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media (min-width: ${i.desktop}) {
    width: 1248px;
    padding-left: 16px;
    padding-right: 16px;
  }
`,k=s.h1`
  font-family: Manrope;
  font-size: 24px;
  color: #111111;

  @media (min-width: ${i.tablet}) {
    font-size: 48px;
  }
`,E=s.ul`
margin-top: 24px;
  padding: 0;
  display: flex;
  list-style-type: none;
  flex-direction: column;
  gap: 20px;

  @media (min-width: ${i.tablet}) {
    flex-direction: unset;
    flex-wrap: wrap;
    gap: 32px;
    margin-top: 40px;
        justify-content: space-between;
  }

  @media (min-width: ${i.desktop}) {
    flex-direction: unset;
    flex-wrap: wrap;
    gap: 32px;
    margin-top: 60px;
  }
`,$=s.li`
  width: 280px;
  border-radius: 40px;
  background-color: #ffffff;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);

  @media (min-width: ${i.desktop}) {
    width: 380px;
  }
`,v=s.div`
  text-decoration: none;
`,S=s.img`
  max-width: 100px;

  @media (min-width: ${i.tablet}) {
    max-width: 124px;
  }

  @media (min-width: ${i.desktop}) {
    max-width: 146px;
  }
`,O=s.h2`
  margin: 0;
  padding-top: 16px;
  padding-right: 16px;
  padding-left: 16px;
  font-family: Manrope;
  font-size: 20px;
  color: #54adff;
`,C=s.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding-right: 12px;
  padding-left: 12px;
  padding-top: 16px;
  padding-bottom: 16px;

  @media (min-width: ${i.desktop}) {
    padding-right: 17px;
    padding-left: 17px;
  }
`,M=s.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 12px;
  flex-direction: column;
  font-family: Manrope;
  font-size: 12px;
  color: #111111;
  text-align: initial;
`;s.li`
  padding: 0;
  display: flex;
  flex-direction: column;
`;const d=s.h3`
  margin: 0;
`,x=s.a`
    color: #111;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover,
    &:focus {
        color: #54ADFF;
    }
`,T=s.ul`
display: flex;
flex-direction: column;
gap: 6px;
`,A=s.button`
background-color: tomato;
padding: 5px;
border: none;
cursor: pointer;
transition: background-color 0.3s ease;

&:hover,
    &:focus {
        background-color: orange;
    }
`,L=()=>{const p="https://i.seadn.io/gae/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc?auto=format&dpr=1&w=1000",a=["MN","TU","WE","TH","FR","SA","SU"],o="Check details on website",[h,g]=c.useState([]);c.useEffect(()=>{(async()=>{try{const n=await y();g(n)}catch(n){console.error("Error fetching data:",n)}})()},[]);const[f,w]=c.useState(h.map(()=>!1)),u=t=>{w(n=>{const l=[...n];return l[t]=!l[t],l})};return e.jsxs(b,{children:[e.jsx(k,{children:"Our friends"}),e.jsx(E,{children:h.map((t,n)=>e.jsx($,{children:e.jsxs(v,{href:t.url,children:[e.jsx(O,{children:t.title}),e.jsxs(C,{children:[e.jsx(S,{src:t.imageUrl?t.imageUrl:p,alt:t.title}),e.jsxs(M,{children:[e.jsxs("li",{children:[e.jsx(d,{children:"Time:"}),e.jsx(A,{onClick:()=>u(n),children:f[n]?"Hide":"Show"}),f[n]?e.jsx(T,{children:Array.isArray(t.workDays)?a.map((l,m)=>{const r=t.workDays[m];return r&&r.isOpen!==void 0&&r.from&&r.to?e.jsxs("li",{children:[e.jsxs("strong",{children:[l,": "]}),r.isOpen?e.jsxs("span",{children:["Open from ",r.from," to ",r.to]}):e.jsx("span",{children:"Closed"})]},m):null}):e.jsx("li",{children:o})}):null]}),e.jsxs("li",{children:[e.jsx(d,{children:"Adress:"}),e.jsx(x,{href:t.addressUrl?t.addressUrl:t.url,children:t.address?t.address:o})]}),e.jsxs("li",{children:[e.jsx(d,{children:"Email:"}),e.jsx(x,{href:`mailto:${t.email?t.email:t.url}`,target:"_blank",rel:"noopener noreferrer",children:t.email?t.email:o})]}),e.jsxs("li",{children:[e.jsx(d,{children:"Phone:"}),e.jsx(x,{href:`tel:${t.phone?t.phone:t.url}`,target:"_blank",rel:"noopener noreferrer",children:t.phone?t.phone:o})]})]})]})]})},t._id))})]})};export{L as default};
