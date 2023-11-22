import{s,r as l,j as t}from"./index-12ea59f3.js";const x="https://happy-pets-rest-api.onrender.com";async function c(){const d=`${x}/api/ourfriends/`;try{const i=await fetch(d);if(!i.ok)throw new Error(`Status code: ${i.status}. Status message: ${i.statusText}`);return await i.json()}catch(i){throw new Error(i.message)}}const n={mobile:"320px",tablet:"768px",desktop:"1280px"},h=s.div`
  text-align: center;
  width: 280px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${n.tablet}) {
    width: 704px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media (min-width: ${n.desktop}) {
    width: 1248px;
    padding-left: 16px;
    padding-right: 16px;
  }
`,m=s.h1`
  font-family: Manrope;
  font-size: 24px;
  color: #111111;

  @media (min-width: ${n.tablet}) {
    font-size: 48px;
  }
`,f=s.ul`
  padding: 0;
  display: flex;
  list-style-type: none;
  flex-direction: column;
  gap: 20px;

  @media (min-width: ${n.tablet}) {
    flex-direction: unset;
    flex-wrap: wrap;
    gap: 32px;
  }
`,g=s.li`
  width: 280px;
  border-radius: 40px;
  background-color: #ffffff;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);

  @media (min-width: ${n.desktop}) {
    width: 380px;
  }
`,w=s.a`
  text-decoration: none;
`,j=s.img`
  max-width: 100px;

  @media (min-width: ${n.tablet}) {
    max-width: 124px;
  }

  @media (min-width: ${n.desktop}) {
    max-width: 146px;
  }
`,u=s.h2`
  margin: 0;
  padding-top: 16px;
  padding-right: 16px;
  padding-left: 16px;
  font-family: Manrope;
  font-size: 20px;
  color: #54adff;
`,y=s.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding-right: 12px;
  padding-left: 12px;
  padding-top: 16px;
  padding-bottom: 16px;

  @media (min-width: ${n.desktop}) {
    padding-right: 17px;
    padding-left: 17px;
  }
`,b=s.ul`
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
`;const a=s.h3`
  margin: 0;
`,k=()=>{const d="https://i.seadn.io/gae/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc?auto=format&dpr=1&w=1000",i="Check details on website",[r,o]=l.useState([]);return l.useEffect(()=>{(async()=>{try{const p=await c();o(p)}catch(p){console.error("Error fetching data:",p)}})()},[]),t.jsxs(h,{children:[t.jsx(m,{children:"Our friends"}),t.jsx(f,{children:r.map(e=>t.jsx(g,{children:t.jsxs(w,{href:e.url,children:[t.jsx(u,{children:e.title}),t.jsxs(y,{children:[t.jsx(j,{src:e.imageUrl?e.imageUrl:d,alt:e.title}),t.jsxs(b,{children:[t.jsxs("li",{children:[t.jsx(a,{children:"Time:"}),t.jsx("span",{children:e.time?e.time:i})]}),t.jsxs("li",{children:[t.jsx(a,{children:"Adress:"}),t.jsx("span",{children:e.address?e.address:i})]}),t.jsxs("li",{children:[t.jsx(a,{children:"Email:"}),t.jsx("span",{children:e.email?e.email:i})]}),t.jsxs("li",{children:[t.jsx(a,{children:"Phone:"}),t.jsx("span",{children:e.phone?e.phone:i})]})]})]})]})},e._id))})]})};export{k as default};
