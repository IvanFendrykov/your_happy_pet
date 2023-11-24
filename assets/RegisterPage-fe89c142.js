import{s as r,L as q,a as M,r as m,u as Z,j as s,n as P,b as B,c as O,d as W,V as G}from"./index-41c1c916.js";import{d as N,F as H,b as k,c as v,a as J,S as C}from"./cross-smal-73e671bd.js";const K=r.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Q=r.h1`
  font-weight: 500;
  font-size: 36px;
  line-height: 1.36;
  color: ${({theme:e})=>e.colors.black};
  margin-bottom: 40px;

  @media screen and (max-width: 767px) {
    font-size: 24px;
    line-height: 1.38;
  }
`,X=r.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-bottom: ${({error:e})=>e?"6px":"32px"};

  @media screen and (max-width: 767px) {
    margin-bottom: ${({error:e})=>e?"1px":"24px"};
  }
`,Y=r.div`
  display: flex;
  align-items: center;
  padding: 2px 16px;

  border: 1px solid
    ${({theme:e,error:n})=>n?e.colors.red:e.colors.blue};
  border-radius: 40px;
`,ee=r.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-bottom: ${({error:e})=>e?"6px":"32px"};

  @media screen and (max-width: 767px) {
    margin-bottom: ${({error:e})=>e?"1px":"24px"};
  }
`,se=r.div`
  display: flex;
  align-items: center;
  padding: 2px 16px;

  border: 1px solid
    ${({theme:e,error:n})=>n?e.colors.red:e.colors.blue};
  border-radius: 40px;
`,x=r(N)`
  padding: 12px 0;
  line-height: 1.5;
  letter-spacing: 0.04em;

  width: 100%;
  height: 48px;
  border: none;
  outline: none;
`,g=r.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  cursor: pointer;

  & svg {
    stroke: ${({theme:e})=>e.colors.red};
  }
`,f=r.div`
  padding-left: 16px;
  margin-top: 4px;
  color: ${({theme:e})=>e.colors.red};
`,$=r.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-bottom: ${({error:e,secure:n})=>e||n?"6px":"32px"};

  @media screen and (max-width: 767px) {
    margin-bottom: ${({error:e,secure:n})=>e||n?"1px":"24px"};
  }
`,F=r.div`
  display: flex;
  align-items: center;
  padding: 2px 16px;

  border: 1px solid
    ${({theme:e,error:n,secure:t})=>n?e.colors.red:t?e.colors.green:e.colors.blue};
  border-radius: 40px;
`,E=r.span`
  display: flex;
  align-items: center;
  gap: 10px;
`,_=r.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  cursor: pointer;

  & svg {
    stroke: ${({theme:e,error:n,secure:t})=>n?e.colors.red:t?e.colors.green:e.colors.blue};
  }
`,ie=r.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  cursor: pointer;

  & svg {
    stroke: ${({theme:e})=>e.colors.green};
  }
`,ne=r.div`
  padding-left: 16px;
  margin-top: 4px;
  color: ${({theme:e})=>e.colors.green};
`,oe=r.div`
  padding: 15px 16px 0 16px;
  color: ${({theme:e})=>e.colors.red};
`,ae=r.button`
  margin-top: 8px;
  margin-bottom: 20px;
  width: 100%;

  padding: 10px 0 10px 0;

  background: ${({theme:e})=>e.colors.blue};
  border: none;
  border-radius: 40px;

  font-weight: 600;
  font-size: 20px;
  line-height: 1.35;

  letter-spacing: 0.04em;

  color: #ffffff;

  @media screen and (max-width: 767px) {
    margin-top: 41px;
    margin-bottom: 24px;
  }
`,re=r.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.3;
  letter-spacing: 0.04em;
  color: ${({theme:e})=>e.colors.grey};
`,te=r(q)`
  text-decoration-line: underline;
  color: ${({theme:e})=>e.colors.blue};
  display: inline;
  cursor: pointer;
`,de={username:"",email:"",password:"",confirmPassword:""},le=e=>{const n={};return e.username?/^\s+$/.test(e.username)&&(n.username="Username cannot be empty"):n.username="This field is required",e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(n.email="Enter a valid Email",P.error('Email must contain the "@" symbol')):n.email="This field is required",e.password?e.password.length<8&&(n.password="Password must be at least 8 characters long"):n.password="This field is required",e.confirmPassword?e.confirmPassword.length<8?n.confirmPassword="Password must be at least 8 characters long":e.password!==e.confirmPassword&&(n.confirmPassword="Passwords do not match",P.error("Please, enter correct password")):n.confirmPassword="This field is required",n},pe=()=>{const e=M(),[n,t]=m.useState(!1),[w,S]=m.useState(!1),[I,u]=m.useState(!1),[R,b]=m.useState(!0),A=Z(),L=()=>{t(a=>!a)},V=()=>{S(a=>!a)},T=async(a,{setSubmitting:i,resetForm:y})=>{if(I)return;u(!0);const o={email:a.email,password:a.password,username:a.username};try{e(B(o)).error?b(!1):(b(!0),A("/user"))}catch(d){console.error(d)}finally{u(!1),i(!1)}};return s.jsx(H,{initialValues:de,validate:le,validateOnChange:!1,onSubmit:T,children:({values:a,errors:i,setErrors:y,touched:o,handleChange:d,handleBlur:l,handleSubmit:D,isSubmitting:z,resetForm:p})=>{const h=a.password&&a.password.length>=8,c=j=>{const{name:U}=j.target;y({...i,[U]:""}),d(j)};return s.jsxs(K,{onSubmit:D,children:[s.jsx(Q,{children:"Registration"}),s.jsxs(X,{valider:i.username&&o.username,children:[s.jsxs(Y,{valider:i.username&&o.username,style:{borderColor:i.username&&o.username?"#F43F5E":"#54ADFF"},children:[s.jsx(x,{type:"string",name:"username",placeholder:"Username",value:a.username,onChange:c,onBlur:l}),i.username&&o.username&&a.username&&s.jsx(g,{onClick:()=>{p({values:{...a,username:""}})}})]}),i.username&&o.username&&s.jsx(f,{name:"username",children:i.username})]}),s.jsxs(ee,{error:i.email&&o.email,children:[s.jsxs(se,{valider:i.email&&o.email,style:{borderColor:i.email&&o.email?"#F43F5E":"#54ADFF"},children:[s.jsx(x,{type:"string",name:"email",placeholder:"Email",value:a.email,onChange:c,onBlur:l}),i.email&&o.email&&a.email&&s.jsx(g,{onClick:()=>{p({values:{...a,email:""}})}})]}),i.email&&o.email&&s.jsx(f,{name:"email",children:i.email})]}),s.jsxs($,{valider:i.password&&o.password,children:[s.jsxs(F,{valider:i.password&&o.password,style:{borderColor:i.password&&o.password?"#F43F5E":h?"#00C3AD":"#54ADFF"},children:[s.jsx(x,{type:n?"text":"password",name:"password",placeholder:"Password",value:a.password,onChange:c,onBlur:l}),s.jsxs(E,{children:[s.jsx(_,{onClick:L,valider:i.password&&o.password,children:n?s.jsx(k,{}):s.jsx(v,{})}),h&&s.jsx(ie,{children:s.jsx(J,{})}),i.password&&o.password&&a.password&&s.jsx(g,{onClick:()=>{p({values:{...a,password:""}})},children:s.jsx(C,{})})]})]}),i.password&&o.password&&s.jsx(f,{children:i.password}),h&&s.jsx(ne,{children:"Password is secure"})]}),s.jsxs($,{valider:i.confirmPassword&&o.confirmPassword,children:[s.jsxs(F,{valider:i.confirmPassword&&o.confirmPassword,style:{borderColor:i.confirmPassword&&o.confirmPassword?"#F43F5E":"#54ADFF"},children:[s.jsx(x,{type:w?"text":"password",name:"confirmPassword",placeholder:"Confirm password",value:a.confirmPassword,onChange:c,onBlur:l}),s.jsxs(E,{children:[s.jsx(_,{onClick:V,valider:i.confirmPassword&&o.confirmPassword,children:w?s.jsx(k,{}):s.jsx(v,{})}),i.confirmPassword&&o.confirmPassword&&a.confirmPassword&&s.jsx(g,{onClick:()=>{p({values:{...a,confirmPassword:""}})},children:s.jsx(C,{})})]})]}),i.confirmPassword&&o.confirmPassword&&s.jsx(f,{children:i.confirmPassword})]}),!R&&s.jsx(oe,{children:"This email is already in use. Please, try with another email or log in!"}),s.jsx(ae,{type:"submit",disabled:z,children:"Registration"}),s.jsxs(re,{children:["Already have an account?"," ",s.jsx(te,{to:"/login",children:"Log In"})]})]})}})},ce="https://ivanfendrykov.github.io/your_happy_pet/assets/bgdesktop@1x-7bac98c5.png",me="https://ivanfendrykov.github.io/your_happy_pet/assets/bgdesktop@2x-7613eaf6.png",xe="https://ivanfendrykov.github.io/your_happy_pet/assets/bgtablet@1x-6f766e3d.png",ge="https://ivanfendrykov.github.io/your_happy_pet/assets/bgtablet@2x-3dcf1e44.png",fe="https://ivanfendrykov.github.io/your_happy_pet/assets/bgmobile@1x-eee285ce.png",he="https://ivanfendrykov.github.io/your_happy_pet/assets/bgmobile@2x-40f927b2.png",we=r.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url('${ce}');

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url('${me}');
  }

  @media screen and (max-width: 1279px) {
    background-image: url('${xe}');

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('${ge}');
    }
  }

  @media screen and (max-width: 767px) {
    padding-top: 44px;
    background-image: url('${fe}');

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('${he}');
    }
  }
  `,ue=r.div`
  padding: 60px 75px;
  width: 608px;
  height: fit-content;
  background: #ffffff;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 40px;

  @media screen and (max-width: 767px) {
    margin: 0 auto;
    padding: 40px 12px;
    max-width: 280px;

    box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
    border-radius: 20px;
  }
`,je=()=>{const e=O(W);return s.jsx(we,{children:s.jsxs(ue,{children:[e&&s.jsx(G,{}),s.jsx(pe,{})]})})};export{je as default};
