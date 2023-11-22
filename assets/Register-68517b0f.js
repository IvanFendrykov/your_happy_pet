import{s as r,L as z,u as M,r as p,a as Z,j as e,b as B}from"./index-12ea59f3.js";import{F as O,a as G,S as P,b as y,c as N,d as C}from"./cross-smal-02bb8244.js";const _=r.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,H=r.h1`
  font-weight: 500;
  font-size: 36px;
  line-height: 1.36;
  color: ${({theme:s})=>s.colors.black};
  margin-bottom: 40px;

  @media screen and (max-width: 767px) {
    font-size: 24px;
    line-height: 1.38;
  }
`,J=r.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-bottom: ${({error:s})=>s?"6px":"32px"};

  @media screen and (max-width: 767px) {
    margin-bottom: ${({error:s})=>s?"1px":"24px"};
  }
`,K=r.div`
  display: flex;
  align-items: center;
  padding: 2px 16px;

  border: 1px solid
    ${({theme:s,error:n})=>n?s.colors.red:s.colors.blue};
  border-radius: 40px;
`,Q=r.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-bottom: ${({error:s})=>s?"6px":"32px"};

  @media screen and (max-width: 767px) {
    margin-bottom: ${({error:s})=>s?"1px":"24px"};
  }
`,W=r.div`
  display: flex;
  align-items: center;
  padding: 2px 16px;

  border: 1px solid
    ${({theme:s,error:n})=>n?s.colors.red:s.colors.blue};
  border-radius: 40px;
`,x=r(O)`
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
    stroke: ${({theme:s})=>s.colors.red};
  }
`,w=r.div`
  padding-left: 16px;
  margin-top: 4px;
  color: ${({theme:s})=>s.colors.red};
`,F=r.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-bottom: ${({error:s,secure:n})=>s||n?"6px":"32px"};

  @media screen and (max-width: 767px) {
    margin-bottom: ${({error:s,secure:n})=>s||n?"1px":"24px"};
  }
`,$=r.div`
  display: flex;
  align-items: center;
  padding: 2px 16px;

  border: 1px solid
    ${({theme:s,error:n,secure:t})=>n?s.colors.red:t?s.colors.green:s.colors.blue};
  border-radius: 40px;
`,E=r.span`
  display: flex;
  align-items: center;
  gap: 10px;
`,v=r.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  cursor: pointer;

  & svg {
    stroke: ${({theme:s,error:n,secure:t})=>n?s.colors.red:t?s.colors.green:s.colors.blue};
  }
`,X=r.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  cursor: pointer;

  & svg {
    stroke: ${({theme:s})=>s.colors.green};
  }
`,Y=r.div`
  padding-left: 16px;
  margin-top: 4px;
  color: ${({theme:s})=>s.colors.green};
`,ss=r.div`
  padding: 15px 16px 0 16px;
  color: ${({theme:s})=>s.colors.red};
`,es=r.button`
  margin-top: 8px;
  margin-bottom: 20px;
  width: 100%;

  padding: 10px 0 10px 0;

  background: ${({theme:s})=>s.colors.blue};
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
`,is=r.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.3;
  letter-spacing: 0.04em;
  color: ${({theme:s})=>s.colors.grey};
`,ns=r(z)`
  text-decoration-line: underline;
  color: ${({theme:s})=>s.colors.blue};
  display: inline;
  cursor: pointer;
`,os={username:"",email:"",password:"",confirmPassword:""},as=s=>{const n={};return s.username?/^\s+$/.test(s.username)&&(n.username="Username cannot be empty"):n.username="This field is required",s.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(s.email)||(n.email="Enter a valid Email"):n.email="This field is required",s.password?s.password.length<8&&(n.password="Password must be at least 8 characters long"):n.password="This field is required",s.confirmPassword?s.confirmPassword.length<8?n.confirmPassword="Password must be at least 8 characters long":s.password!==s.confirmPassword&&(n.confirmPassword="Passwords do not match"):n.confirmPassword="This field is required",n},ls=()=>{const s=M(),[n,t]=p.useState(!1),[h,k]=p.useState(!1),[S,I]=p.useState(!1),[A,u]=p.useState(!0),R=Z(),L=()=>{t(a=>!a)},T=()=>{k(a=>!a)},D=async(a,{setSubmitting:i,resetForm:b})=>{if(S)return;I(!0);const o={email:a.email,password:a.password,username:a.username};try{s(B(o)).error?u(!1):(u(!0),R("/user"))}catch(l){console.error(l)}finally{i(!1)}};return e.jsx(G,{initialValues:os,validate:as,validateOnChange:!1,onSubmit:D,children:({values:a,errors:i,setErrors:b,touched:o,handleChange:l,handleBlur:d,handleSubmit:V,isSubmitting:U,resetForm:c})=>{const f=a.password&&a.password.length>=8,m=j=>{const{name:q}=j.target;b({...i,[q]:""}),l(j)};return e.jsxs(_,{onSubmit:V,children:[e.jsx(H,{children:"Registration"}),e.jsxs(J,{valider:i.username&&o.username,children:[e.jsxs(K,{valider:i.username&&o.username,style:{borderColor:i.username&&o.username?"#F43F5E":"#54ADFF"},children:[e.jsx(x,{type:"string",name:"username",placeholder:"Username",value:a.username,onChange:m,onBlur:d}),i.username&&o.username&&a.username&&e.jsx(g,{onClick:()=>{c({values:{...a,username:""}})}})]}),i.username&&o.username&&e.jsx(w,{name:"username",children:i.username})]}),e.jsxs(Q,{error:i.email&&o.email,children:[e.jsxs(W,{valider:i.email&&o.email,style:{borderColor:i.email&&o.email?"#F43F5E":"#54ADFF"},children:[e.jsx(x,{type:"string",name:"email",placeholder:"Email",value:a.email,onChange:m,onBlur:d}),i.email&&o.email&&a.email&&e.jsx(g,{onClick:()=>{c({values:{...a,email:""}})}})]}),i.email&&o.email&&e.jsx(w,{name:"email",children:i.email})]}),e.jsxs(F,{valider:i.password&&o.password,children:[e.jsxs($,{valider:i.password&&o.password,style:{borderColor:i.password&&o.password?"#F43F5E":f?"#00C3AD":"#54ADFF"},children:[e.jsx(x,{type:n?"text":"password",name:"password",placeholder:"Password",value:a.password,onChange:m,onBlur:d}),e.jsxs(E,{children:[e.jsx(v,{onClick:L,valider:i.password&&o.password,children:n?e.jsx(P,{}):e.jsx(y,{})}),f&&e.jsx(X,{children:e.jsx(N,{})}),i.password&&o.password&&a.password&&e.jsx(g,{onClick:()=>{c({values:{...a,password:""}})},children:e.jsx(C,{})})]})]}),i.password&&o.password&&e.jsx(w,{children:i.password}),f&&e.jsx(Y,{children:"Password is secure"})]}),e.jsxs(F,{valider:i.confirmPassword&&o.confirmPassword,children:[e.jsxs($,{valider:i.confirmPassword&&o.confirmPassword,style:{borderColor:i.confirmPassword&&o.confirmPassword?"#F43F5E":"#54ADFF"},children:[e.jsx(x,{type:h?"text":"password",name:"confirmPassword",placeholder:"Confirm password",value:a.confirmPassword,onChange:m,onBlur:d}),e.jsxs(E,{children:[e.jsx(v,{onClick:T,valider:i.confirmPassword&&o.confirmPassword,children:h?e.jsx(P,{}):e.jsx(y,{})}),i.confirmPassword&&o.confirmPassword&&a.confirmPassword&&e.jsx(g,{onClick:()=>{c({values:{...a,confirmPassword:""}})},children:e.jsx(C,{})})]})]}),i.confirmPassword&&o.confirmPassword&&e.jsx(w,{children:i.confirmPassword})]}),!A&&e.jsx(ss,{children:"This email is already in use. Please, try with another email or log in!"}),e.jsx(es,{type:"submit",disabled:U,children:"Registration"}),e.jsxs(is,{children:["Already have an account?"," ",e.jsx(ns,{to:"/login",children:"Log In"})]})]})}})};export{ls as default};
