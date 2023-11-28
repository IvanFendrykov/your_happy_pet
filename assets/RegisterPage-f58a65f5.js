import{s as r,L as U,c as q,r as c,u as M,j as s,n as k,d as Z,b as B,e as O,V as W}from"./index-525dae37.js";import{F as G,a as N,S as u,b as v,c as C,d as H}from"./cross-smal-72ec9eef.js";const J=r.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,K=r.h1`
  font-weight: 500;
  font-size: 36px;
  line-height: 1.36;
  color: ${({theme:e})=>e.colors.black};
  margin-bottom: 40px;

  @media screen and (max-width: 767px) {
    font-size: 24px;
    line-height: 1.38;
  }
`,Q=r.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-bottom: ${({error:e})=>e?"6px":"32px"};

  @media screen and (max-width: 767px) {
    margin-bottom: ${({error:e})=>e?"1px":"24px"};
  }
`,X=r.div`
  display: flex;
  align-items: center;
  padding: 2px 16px;

  border: 1px solid
    ${({theme:e,error:n})=>n?e.colors.red:e.colors.blue};
  border-radius: 40px;
`,Y=r.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-bottom: ${({error:e})=>e?"6px":"32px"};

  @media screen and (max-width: 767px) {
    margin-bottom: ${({error:e})=>e?"1px":"24px"};
  }
`,ee=r.div`
  display: flex;
  align-items: center;
  padding: 2px 16px;

  border: 1px solid
    ${({theme:e,error:n})=>n?e.colors.red:e.colors.blue};
  border-radius: 40px;
`,m=r(G)`
  padding: 12px 0;
  line-height: 1.5;
  letter-spacing: 0.04em;

  width: 100%;
  height: 48px;
  border: none;
  outline: none;
`,x=r.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  cursor: pointer;

  & svg {
    stroke: ${({theme:e})=>e.colors.red};
  }
`,g=r.div`
  padding-left: 16px;
  margin-top: 4px;
  color: ${({theme:e})=>e.colors.red};
`,F=r.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-bottom: ${({error:e,secure:n})=>e||n?"6px":"32px"};

  @media screen and (max-width: 767px) {
    margin-bottom: ${({error:e,secure:n})=>e||n?"1px":"24px"};
  }
`,$=r.div`
  display: flex;
  align-items: center;
  padding: 2px 16px;

  border: 1px solid
    ${({theme:e,error:n,secure:f})=>n?e.colors.red:f?e.colors.green:e.colors.blue};
  border-radius: 40px;
`,E=r.span`
  display: flex;
  align-items: center;
  gap: 10px;  
flex-direction: row-reverse;
`,se=r.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  cursor: pointer;
`,ie=r.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  cursor: pointer;

`,ne=r.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;

  & svg {
    stroke: ${({theme:e})=>e.colors.green};
  }
`,oe=r.div`
  padding-left: 16px;
  margin-top: 4px;
  color: ${({theme:e})=>e.colors.green};
`,ae=r.div`
  padding: 15px 16px 0 16px;
  color: ${({theme:e})=>e.colors.red};
`,re=r.button`
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
  transition: background-color 0.4s;
  &:hover{
  background: rgb(23 107 182);
  }
  
  @media screen and (max-width: 767px) {
    margin-top: 41px;
    margin-bottom: 24px;
  }
`,te=r.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.3;
  letter-spacing: 0.04em;
  color: ${({theme:e})=>e.colors.grey};
`,de=r(U)`
  text-decoration-line: underline;
  color: ${({theme:e})=>e.colors.blue};
  display: inline;
  cursor: pointer;
`,le={username:"",email:"",password:"",confirmPassword:""},pe=e=>{const n={};return e.username?/^\s+$/.test(e.username)&&(n.username="Username cannot be empty"):n.username="This field is required",e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(n.email="Enter a valid Email",k.error('Email must contain the "@" symbol')):n.email="This field is required",e.password?e.password.length<8&&(n.password="Password must be at least 8 characters long"):n.password="This field is required",e.confirmPassword?e.confirmPassword.length<8?n.confirmPassword="Password must be at least 8 characters long":e.password!==e.confirmPassword&&(n.confirmPassword="Passwords do not match",k.error("Please, enter correct password")):n.confirmPassword="This field is required",n},ce=()=>{const e=q(),[n,f]=c.useState(!1),[h,_]=c.useState(!1),[S,b]=c.useState(!1),[I,y]=c.useState(!0),A=M(),R=()=>{f(a=>!a)},L=()=>{_(a=>!a)},D=async(a,{setSubmitting:i,resetForm:j})=>{if(S)return;b(!0);const o={email:a.email,password:a.password,username:a.username};try{e(Z(o)).error?y(!1):(y(!0),A("/user"))}catch(t){console.error(t)}finally{b(!1),i(!1)}};return s.jsx(N,{initialValues:le,validate:pe,validateOnChange:!1,onSubmit:D,children:({values:a,errors:i,setErrors:j,touched:o,handleChange:t,handleBlur:d,handleSubmit:V,isSubmitting:T,resetForm:l})=>{const w=a.password&&a.password.length>=8,p=P=>{const{name:z}=P.target;j({...i,[z]:""}),t(P)};return s.jsxs(J,{onSubmit:V,children:[s.jsx(K,{children:"Registration"}),s.jsxs(Q,{valider:i.username&&o.username,children:[s.jsxs(X,{valider:i.username&&o.username,style:{borderColor:i.username&&o.username?"#F43F5E":"#54ADFF"},children:[s.jsx(m,{type:"string",name:"username",placeholder:"Username",value:a.username,onChange:p,onBlur:d}),i.username&&o.username&&a.username&&s.jsx(x,{onClick:()=>{l({values:{...a,username:""}})}})]}),i.username&&o.username&&s.jsx(g,{name:"username",children:i.username})]}),s.jsxs(Y,{error:i.email&&o.email,children:[s.jsxs(ee,{valider:i.email&&o.email,style:{borderColor:i.email&&o.email?"#F43F5E":"#54ADFF"},children:[s.jsx(m,{type:"string",name:"email",placeholder:"Email",value:a.email,onChange:p,onBlur:d}),i.email&&o.email&&a.email&&s.jsx(x,{onClick:()=>{l({values:{...a,email:""}})},children:s.jsx(u,{})})]}),i.email&&o.email&&s.jsx(g,{name:"email",children:i.email})]}),s.jsxs(F,{valider:i.password&&o.password,children:[s.jsxs($,{valider:i.password&&o.password,style:{borderColor:i.password&&o.password?"#F43F5E":w?"#00C3AD":"#54ADFF"},children:[s.jsx(m,{type:n?"text":"password",name:"password",placeholder:"Password",value:a.password,onChange:p,onBlur:d}),s.jsxs(E,{children:[s.jsx(se,{onClick:R,valider:i.password&&o.password,style:{stroke:n?"#54ADFF":"#888"},children:n?s.jsx(v,{}):s.jsx(C,{})}),w&&s.jsx(ne,{children:s.jsx(H,{})}),i.password&&o.password&&a.password&&s.jsx(x,{onClick:()=>{l({values:{...a,password:""}})},children:s.jsx(u,{})})]})]}),i.password&&o.password&&s.jsx(g,{children:i.password}),w&&s.jsx(oe,{children:"Password is secure"})]}),s.jsxs(F,{valider:i.confirmPassword&&o.confirmPassword,children:[s.jsxs($,{valider:i.confirmPassword&&o.confirmPassword,style:{borderColor:i.confirmPassword&&o.confirmPassword?"#F43F5E":"#54ADFF"},children:[s.jsx(m,{type:h?"text":"password",name:"confirmPassword",placeholder:"Confirm password",value:a.confirmPassword,onChange:p,onBlur:d}),s.jsxs(E,{children:[s.jsx(ie,{onClick:L,valider:i.confirmPassword&&o.confirmPassword,style:{stroke:h?"#54ADFF":"#888"},children:h?s.jsx(v,{}):s.jsx(C,{})}),i.confirmPassword&&o.confirmPassword&&a.confirmPassword&&s.jsx(x,{onClick:()=>{l({values:{...a,confirmPassword:""}})},children:s.jsx(u,{})})]})]}),i.confirmPassword&&o.confirmPassword&&s.jsx(g,{children:i.confirmPassword})]}),!I&&s.jsx(ae,{children:"This email is already in use. Please, try with another email or log in!"}),s.jsx(re,{type:"submit",disabled:T,children:"Registration"}),s.jsxs(te,{children:["Already have an account?"," ",s.jsx(de,{to:"/login",children:"Log In"})]})]})}})},me="https://ivanfendrykov.github.io/your_happy_pet/assets/bgdesktop@1x-7bac98c5.png",xe="https://ivanfendrykov.github.io/your_happy_pet/assets/bgdesktop@2x-7613eaf6.png",ge="https://ivanfendrykov.github.io/your_happy_pet/assets/bgtablet@1x-6f766e3d.png",fe="https://ivanfendrykov.github.io/your_happy_pet/assets/bgtablet@2x-3dcf1e44.png",he="https://ivanfendrykov.github.io/your_happy_pet/assets/bgmobile@1x-eee285ce.png",we="https://ivanfendrykov.github.io/your_happy_pet/assets/bgmobile@2x-40f927b2.png",ue=r.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url('${me}');

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url('${xe}');
  }

  @media screen and (max-width: 1279px) {
    background-image: url('${ge}');

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('${fe}');
    }
  }

  @media screen and (max-width: 767px) {
    padding-top: 44px;
    background-image: url('${he}');

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('${we}');
    }
  }
  `,be=r.div`
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
`,Pe=()=>{const e=B(O);return s.jsx(ue,{children:s.jsxs(be,{children:[e&&s.jsx(W,{}),s.jsx(ce,{})]})})};export{Pe as default};
