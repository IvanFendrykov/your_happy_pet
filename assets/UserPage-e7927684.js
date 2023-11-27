import{s as i,j as t,N as L,r as s}from"./index-e06f5003.js";const I=i.div`
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
`,z=i.img`
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
`,A=i.div`
  
`,x=i.p`
letter-spacing: 0.56px;
`,l=i.span`
color: #111;
font-size: 14px;
font-weight: 700;
letter-spacing: 0.56px;
`,O=i.button`
position: absolute;
top: 10px;
right: 10px;
`;function W({pet:e}){const a=o=>{console.log(e)};return t.jsxs(I,{children:[t.jsx(O,{onClick:()=>a(e.id),children:"Delete"}),t.jsx(z,{src:e.imageUrl,alt:e.name}),t.jsxs(A,{children:[t.jsxs(x,{children:[t.jsx(l,{children:"Name:"})," ",e.name]}),t.jsxs(x,{children:[t.jsx(l,{children:"Date of Birth:"})," ",e.dateOfBirth]}),t.jsxs(x,{children:[t.jsx(l,{children:"Type:"})," ",e.type]}),t.jsxs(x,{children:[t.jsx(l,{children:"Comments:"})," ",e.comments]})]})]})}function M({pets:e}){return t.jsxs(t.Fragment,{children:[t.jsx(L,{to:"/add-pet",children:"add pet"}),e.map(a=>t.jsx(W,{pet:a},a.id))]})}const H=i.div`
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
`,K=i.form`
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

`,R=i.div`
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
`,T=i.ul`
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
`,$=i.button`
position: absolute;
left: 10px;
bottom: 14px;
  @media (min-width: 768px) {
    left: 20px;
  }
`,q=i.button`
position: absolute;
right: 10px;
top: 14px;
  @media (min-width: 768px) {
    right: 20px;
  }
`,G=i.button`
position: absolute;
left: 10px;
bottom: 14px;
  @media (min-width: 768px) {
    left: 20px;
  }
`,J={name:"fakeName",email:"fakeEmail",bday:"11.11",phone:"111-111-111",city:"Kyiv"},Q=[{id:2,imageUrl:"https://placekitten.com/200/200",name:"Fluffy",dateOfBirth:"2020-01-01",type:"Cat",comments:"A cute and fluffy kitty."},{id:1,imageUrl:"https://placekitten.com/200/210",name:"Fluffy",dateOfBirth:"2020-01-01",type:"Cat",comments:"A cute and fluffy kitty."}];function X(){const[e,a]=s.useState(!1),[o,b]=s.useState(J),[c,w]=s.useState(o.name),[h,C]=s.useState(o.email),[m,v]=s.useState(o.bday),[g,k]=s.useState(o.phone),[u,U]=s.useState(o.city),P=n=>{n.preventDefault(),a(!e),console.log(e)},B=n=>{w(n.target.value)},F=n=>{C(n.target.value)},S=n=>{v(n.target.value)},E=n=>{k(n.target.value)},N=n=>{U(n.target.value)},D=n=>{n.preventDefault();const f={name:c,email:h,bday:m,phone:g,city:u};console.log(f),b(f),a(!1)};return t.jsx(t.Fragment,{children:t.jsxs(H,{children:[t.jsxs(j,{children:[t.jsx(y,{children:"My information:"}),t.jsxs(K,{children:[t.jsx(R,{}),t.jsxs(T,{children:[t.jsxs(r,{children:[t.jsx(d,{children:"Name:"}),t.jsx(p,{type:"text",name:"name",value:c,disabled:!e,onChange:B})]}),t.jsxs(r,{children:[t.jsx(d,{children:"Email:"}),t.jsx(p,{type:"email",name:"email",value:h,disabled:!e,onChange:F})]}),t.jsxs(r,{children:[t.jsx(d,{children:"Birthday:"}),t.jsx(p,{type:"text",name:"birthday",value:m,disabled:!e,onChange:S})]}),t.jsxs(r,{children:[t.jsx(d,{children:"Phone:"}),t.jsx(p,{type:"text",name:"phone",value:g,disabled:!e,onChange:E})]}),t.jsxs(r,{children:[t.jsx(d,{children:"City:"}),t.jsx(p,{type:"text",name:"city",value:u,disabled:!e,onChange:N})]})]}),e?t.jsx(G,{onClick:D,children:"save"}):t.jsx($,{children:"logout"}),t.jsx(q,{onClick:P,children:"Edit"})]})]}),t.jsxs(j,{children:[t.jsx(y,{children:"My pets:"}),t.jsx(M,{pets:Q})]})]})})}export{X as default};
