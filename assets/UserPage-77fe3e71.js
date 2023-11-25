import{s as i,j as t,r as s}from"./index-71de3846.js";const L=i.div`
position: relative;
  border-radius: 20px;
  padding: 16px;
  margin-bottom: 16px;
  width: 280px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  @media (min-width: 768px) {
    display: flex;
    gap: 20px;
    width: 704px;
    padding-right: 76px;
    padding-bottom: 58px
  }

    @media (min-width: 1280px) {
      gap: 32px;
    }
`,N=i.img`
  height: 240px;
  width: 240px;
  border-radius: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 8px;
    @media (min-width: 768px) {
    height: 128px;
    width: 128px;
    margin-left: 0;
    margin-right: 0;
  }

  @media (min-width: 1280px) {
    height: 161px;
    width: 161px;
  }
`,z=i.div`
  
`,x=i.p`
letter-spacing: 0.56px;
`,l=i.span`
color: #111;
font-size: 14px;
font-weight: 700;
letter-spacing: 0.56px;
`,A=i.button`
position: absolute;
top: 10px;
right: 10px;
`;function O({pet:e}){const a=o=>{console.log(e)};return t.jsxs(L,{children:[t.jsx(A,{onClick:()=>a(e.id),children:"Delete"}),t.jsx(N,{src:e.imageUrl,alt:e.name}),t.jsxs(z,{children:[t.jsxs(x,{children:[t.jsx(l,{children:"Name:"})," ",e.name]}),t.jsxs(x,{children:[t.jsx(l,{children:"Date of Birth:"})," ",e.dateOfBirth]}),t.jsxs(x,{children:[t.jsx(l,{children:"Type:"})," ",e.type]}),t.jsxs(x,{children:[t.jsx(l,{children:"Comments:"})," ",e.comments]})]})]})}function W({pets:e}){return t.jsxs(t.Fragment,{children:[t.jsx("a",{href:"/",children:"Add pet"}),e.map(a=>t.jsx(O,{pet:a},a.id))]})}const M=i.div`
    margin-left: auto;
    margin-right: auto;
    width: 320px;

    @media (min-width: 768px) {
      width: 768px;
    }

    @media (min-width: 1280px) {
      display: flex;
      width: 1280px;
    }
`,j=i.section`
padding-right: 20px;
padding-left: 20px;
margin-bottom: 46px;
`,y=i.h2`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.8px;
  margin-bottom: 24px;
`,H=i.form`
position: relative;
border-radius: 20px;
background: #FFF;
box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
padding: 20px 8px 25px 8px;
width: 280px;
flex-shrink: 0;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    width: 704px;
    padding-right: 76px;
    padding-bottom: 58px
  }

    @media (min-width: 1280px) {
      display: block;
      width: 395px;
    }

`,K=i.div`
width: 182px;
height: 182px;
flex-shrink: 0;
background-color: grey;
margin-left: auto;
margin-right: auto;
margin-bottom: 60px;
  @media (min-width: 768px) {
    margin-left: 0;
    margin-right: 0;
  }
  @media (min-width: 1280px) {
    margin-left: auto;
    margin-right: auto;
  }
`,R=i.ul`
list-style-type: none;
padding: 0;
  @media (min-width: 768px) {
width: 320px
  }
`,r=i.li`
  display: flex;
  gap: 4px;
  margin-bottom: 20px;
  &:last-child {
  margin-bottom: 0; 
  }
`,d=i.span`
font-size: 14px;
font-weight: 600;
letter-spacing: 0.56px;
width: 100px;
padding: 4px;
`,p=i.input`
display: flex;
font-size: 12px;
letter-spacing: 0.48px;
width: 100%;
border-radius: 20px;
border: 1px solid var(--unnamed, #54ADFF);
padding: 4px 10px;
`,T=i.button`
position: absolute;
left: 10px;
bottom: 14px;
  @media (min-width: 768px) {
    left: 20px;
  }
`,$=i.button`
position: absolute;
right: 10px;
top: 14px;
  @media (min-width: 768px) {
    right: 20px;
  }
`,q=i.button`
position: absolute;
left: 10px;
bottom: 14px;
  @media (min-width: 768px) {
    left: 20px;
  }
`,G={name:"fakeName",email:"fakeEmail",bday:"11.11",phone:"111-111-111",city:"Kyiv"},J=[{id:2,imageUrl:"https://placekitten.com/200/200",name:"Fluffy",dateOfBirth:"2020-01-01",type:"Cat",comments:"A cute and fluffy kitty."},{id:1,imageUrl:"https://placekitten.com/200/210",name:"Fluffy",dateOfBirth:"2020-01-01",type:"Cat",comments:"A cute and fluffy kitty."}];function V(){const[e,a]=s.useState(!1),[o,b]=s.useState(G),[c,w]=s.useState(o.name),[h,C]=s.useState(o.email),[m,v]=s.useState(o.bday),[g,k]=s.useState(o.phone),[u,U]=s.useState(o.city),P=n=>{n.preventDefault(),a(!e),console.log(e)},B=n=>{w(n.target.value)},F=n=>{C(n.target.value)},S=n=>{v(n.target.value)},E=n=>{k(n.target.value)},D=n=>{U(n.target.value)},I=n=>{n.preventDefault();const f={name:c,email:h,bday:m,phone:g,city:u};console.log(f),b(f),a(!1)};return t.jsx(t.Fragment,{children:t.jsxs(M,{children:[t.jsxs(j,{children:[t.jsx(y,{children:"My information:"}),t.jsxs(H,{children:[t.jsx(K,{}),t.jsxs(R,{children:[t.jsxs(r,{children:[t.jsx(d,{children:"Name:"}),t.jsx(p,{type:"text",name:"name",value:c,disabled:!e,onChange:B})]}),t.jsxs(r,{children:[t.jsx(d,{children:"Email:"}),t.jsx(p,{type:"email",name:"email",value:h,disabled:!e,onChange:F})]}),t.jsxs(r,{children:[t.jsx(d,{children:"Birthday:"}),t.jsx(p,{type:"text",name:"birthday",value:m,disabled:!e,onChange:S})]}),t.jsxs(r,{children:[t.jsx(d,{children:"Phone:"}),t.jsx(p,{type:"text",name:"phone",value:g,disabled:!e,onChange:E})]}),t.jsxs(r,{children:[t.jsx(d,{children:"City:"}),t.jsx(p,{type:"text",name:"city",value:u,disabled:!e,onChange:D})]})]}),e?t.jsx(q,{onClick:I,children:"save"}):t.jsx(T,{children:"logout"}),t.jsx($,{onClick:P,children:"Edit"})]})]}),t.jsxs(j,{children:[t.jsx(y,{children:"My pets:"}),t.jsx(W,{pets:J})]})]})})}export{V as default};