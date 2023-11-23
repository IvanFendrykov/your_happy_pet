import{s as a,L as M,u as Z,r as p,a as B,j as e,n as y,b as O}from"./index-ee7ca901.js";import{F as G,a as N,S as C,b as F,c as _,d as $}from"./cross-smal-3efce6f3.js";const H=a.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,J=a.h1`
  font-weight: 500;
  font-size: 36px;
  line-height: 1.36;
  color: ${({theme:s})=>s.colors.black};
  margin-bottom: 40px;

  @media screen and (max-width: 767px) {
    font-size: 24px;
    line-height: 1.38;
  }
`,K=a.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-bottom: ${({error:s})=>s?"6px":"32px"};

  @media screen and (max-width: 767px) {
    margin-bottom: ${({error:s})=>s?"1px":"24px"};
  }
`,Q=a.div`
  display: flex;
  align-items: center;
  padding: 2px 16px;

  border: 1px solid
    ${({theme:s,error:n})=>n?s.colors.red:s.colors.blue};
  border-radius: 40px;
`,W=a.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-bottom: ${({error:s})=>s?"6px":"32px"};

  @media screen and (max-width: 767px) {
    margin-bottom: ${({error:s})=>s?"1px":"24px"};
  }
`,X=a.div`
  display: flex;
  align-items: center;
  padding: 2px 16px;

  border: 1px solid
    ${({theme:s,error:n})=>n?s.colors.red:s.colors.blue};
  border-radius: 40px;
`,x=a(G)`
  padding: 12px 0;
  line-height: 1.5;
  letter-spacing: 0.04em;

  width: 100%;
  height: 48px;
  border: none;
  outline: none;
`,g=a.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  cursor: pointer;

  & svg {
    stroke: ${({theme:s})=>s.colors.red};
  }
`,w=a.div`
  padding-left: 16px;
  margin-top: 4px;
  color: ${({theme:s})=>s.colors.red};
`,E=a.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-bottom: ${({error:s,secure:n})=>s||n?"6px":"32px"};

  @media screen and (max-width: 767px) {
    margin-bottom: ${({error:s,secure:n})=>s||n?"1px":"24px"};
  }
`,v=a.div`
  display: flex;
  align-items: center;
  padding: 2px 16px;

  border: 1px solid
    ${({theme:s,error:n,secure:t})=>n?s.colors.red:t?s.colors.green:s.colors.blue};
  border-radius: 40px;
`,k=a.span`
  display: flex;
  align-items: center;
  gap: 10px;
`,S=a.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  cursor: pointer;

  & svg {
    stroke: ${({theme:s,error:n,secure:t})=>n?s.colors.red:t?s.colors.green:s.colors.blue};
  }
`,Y=a.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  cursor: pointer;

  & svg {
    stroke: ${({theme:s})=>s.colors.green};
  }
`,ss=a.div`
  padding-left: 16px;
  margin-top: 4px;
  color: ${({theme:s})=>s.colors.green};
`,es=a.div`
  padding: 15px 16px 0 16px;
  color: ${({theme:s})=>s.colors.red};
`,is=a.button`
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
`,ns=a.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.3;
  letter-spacing: 0.04em;
  color: ${({theme:s})=>s.colors.grey};
`,os=a(M)`
  text-decoration-line: underline;
  color: ${({theme:s})=>s.colors.blue};
  display: inline;
  cursor: pointer;
`,rs={username:"",email:"",password:"",confirmPassword:""},as=s=>{const n={};return s.username?/^\s+$/.test(s.username)&&(n.username="Username cannot be empty"):n.username="This field is required",s.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(s.email)||(n.email="Enter a valid Email",y.error('Email must contain the "@" symbol')):n.email="This field is required",s.password?s.password.length<8&&(n.password="Password must be at least 8 characters long"):n.password="This field is required",s.confirmPassword?s.confirmPassword.length<8?n.confirmPassword="Password must be at least 8 characters long":s.password!==s.confirmPassword&&(n.confirmPassword="Passwords do not match",y.error("Please, enter correct password")):n.confirmPassword="This field is required",n},ds=()=>{const s=Z(),[n,t]=p.useState(!1),[h,I]=p.useState(!1),[A,u]=p.useState(!1),[R,b]=p.useState(!0),L=B(),T=()=>{t(r=>!r)},D=()=>{I(r=>!r)},V=async(r,{setSubmitting:i,resetForm:j})=>{if(A)return;u(!0);const o={email:r.email,password:r.password,username:r.username};try{s(O(o)).error?b(!1):(b(!0),L("/user"))}catch(l){console.error(l)}finally{u(!1),i(!1)}};return e.jsx(N,{initialValues:rs,validate:as,validateOnChange:!1,onSubmit:V,children:({values:r,errors:i,setErrors:j,touched:o,handleChange:l,handleBlur:d,handleSubmit:U,isSubmitting:q,resetForm:c})=>{const f=r.password&&r.password.length>=8,m=P=>{const{name:z}=P.target;j({...i,[z]:""}),l(P)};return e.jsxs(H,{onSubmit:U,children:[e.jsx(J,{children:"Registration"}),e.jsxs(K,{valider:i.username&&o.username,children:[e.jsxs(Q,{valider:i.username&&o.username,style:{borderColor:i.username&&o.username?"#F43F5E":"#54ADFF"},children:[e.jsx(x,{type:"string",name:"username",placeholder:"Username",value:r.username,onChange:m,onBlur:d}),i.username&&o.username&&r.username&&e.jsx(g,{onClick:()=>{c({values:{...r,username:""}})}})]}),i.username&&o.username&&e.jsx(w,{name:"username",children:i.username})]}),e.jsxs(W,{error:i.email&&o.email,children:[e.jsxs(X,{valider:i.email&&o.email,style:{borderColor:i.email&&o.email?"#F43F5E":"#54ADFF"},children:[e.jsx(x,{type:"string",name:"email",placeholder:"Email",value:r.email,onChange:m,onBlur:d}),i.email&&o.email&&r.email&&e.jsx(g,{onClick:()=>{c({values:{...r,email:""}})}})]}),i.email&&o.email&&e.jsx(w,{name:"email",children:i.email})]}),e.jsxs(E,{valider:i.password&&o.password,children:[e.jsxs(v,{valider:i.password&&o.password,style:{borderColor:i.password&&o.password?"#F43F5E":f?"#00C3AD":"#54ADFF"},children:[e.jsx(x,{type:n?"text":"password",name:"password",placeholder:"Password",value:r.password,onChange:m,onBlur:d}),e.jsxs(k,{children:[e.jsx(S,{onClick:T,valider:i.password&&o.password,children:n?e.jsx(C,{}):e.jsx(F,{})}),f&&e.jsx(Y,{children:e.jsx(_,{})}),i.password&&o.password&&r.password&&e.jsx(g,{onClick:()=>{c({values:{...r,password:""}})},children:e.jsx($,{})})]})]}),i.password&&o.password&&e.jsx(w,{children:i.password}),f&&e.jsx(ss,{children:"Password is secure"})]}),e.jsxs(E,{valider:i.confirmPassword&&o.confirmPassword,children:[e.jsxs(v,{valider:i.confirmPassword&&o.confirmPassword,style:{borderColor:i.confirmPassword&&o.confirmPassword?"#F43F5E":"#54ADFF"},children:[e.jsx(x,{type:h?"text":"password",name:"confirmPassword",placeholder:"Confirm password",value:r.confirmPassword,onChange:m,onBlur:d}),e.jsxs(k,{children:[e.jsx(S,{onClick:D,valider:i.confirmPassword&&o.confirmPassword,children:h?e.jsx(C,{}):e.jsx(F,{})}),i.confirmPassword&&o.confirmPassword&&r.confirmPassword&&e.jsx(g,{onClick:()=>{c({values:{...r,confirmPassword:""}})},children:e.jsx($,{})})]})]}),i.confirmPassword&&o.confirmPassword&&e.jsx(w,{children:i.confirmPassword})]}),!R&&e.jsx(es,{children:"This email is already in use. Please, try with another email or log in!"}),e.jsx(is,{type:"submit",disabled:q,children:"Registration"}),e.jsxs(ns,{children:["Already have an account?"," ",e.jsx(os,{to:"/login",children:"Log In"})]})]})}})};export{ds as default};
