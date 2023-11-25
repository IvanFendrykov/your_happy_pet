import{s as a,L as F,a as E,u as C,r as m,j as e,l as $}from"./index-25aa6224.js";import{F as k,S as D,a as P,b as v,c as A}from"./cross-smal-03bbb9a3.js";var h={};/**
 * @license React
 * react-jsx-dev-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L=Symbol.for("react.fragment");h.Fragment=L;h.jsxDEV=void 0;const S=a.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,z=a.h1`
  font-weight: 500;
  font-size: 36px;
  line-height: 1.36;
  color: ${({theme:i})=>i.colors.black};
  margin-bottom: 20px;

  @media screen and (max-width: 767px) {
    font-size: 24px;
    line-height: 1.38;
  }
`,V=a.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 767px) {
  }
`,I=a.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: ${({error:i,secure:o})=>i||o?"6px":"32px"};

  @media screen and (max-width: 767px) {
    margin-bottom: ${({error:i,secure:o})=>i||o?"1px":"24px"};
  }
`,R=a.input`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  width: 256px;
  color:#888888;

  border: 1px solid ${({theme:i,error:o,valid:r})=>o?"#F43F5E":"#54ADFF"};
  border-radius: 40px;
  position: relative;

  &:hover,
  &:focus {
    border-color: ${({theme:i,error:o,valid:r})=>o?"#F43F5E":"#54ADFF"};
    outline: none;
  }

  @media screen and (min-width: 768px) {
    width: 458px;
  }
`,T=a.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom:60px;
  margin-bottom: ${({error:i,secure:o})=>i||o?"6px":"8px"};

  @media screen and (max-width: 767px) {
    margin-bottom: ${({error:i,secure:o})=>i||o?"1px":"4px"};
  }
`,Y=a.span`
stroke:#00C3AD;
    width: 24px;
    height: 24px;
    position: absolute;
    right: 52px;
    top: 50%;
    transform: translateY(-50%);
`,M=a.span`
position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  top: 50%;
  right: 19px;
  stroke:#F43F5E;
  transform: translateY(-50%);
`,Z=a.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  position: absolute;
    right: 4px;
    top: 50%;
  transform: translateY(-50%);
  position: absolute;
`,_=a.div`
  display: flex;
  flex-direction: column;
  position: relative;
  
  margin-bottom: ${({error:i})=>"60px"};

  @media screen and (max-width: 767px) {
    margin-bottom: ${({error:i})=>"110px"};
  }
`;a.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  position: absolute;
    right: 2px;
    top: 50%;
  transform: translateY(-50%);

`;const q=a.input`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  width: 256px;
  color:#888888;
  border: 1px solid ${({theme:i,error:o,valid:r})=>o?"#F43F5E":r?"#00C3AD":"#54ADFF"};
  border-radius: 40px;

  &:hover,
  &:focus {
    outline: none;
  }

  @media screen and (min-width: 768px) {
    width: 458px;
  }
`;a.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  stroke: ${({showPassword:i})=>i?"#888888":"#54ADFF"};

  svg {
    display: ${({showPassword:i})=>i?"none":"block"};
  }
`;const B=a.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  cursor: pointer;
  position: absolute;
right: 15px;
    top: 50%;
  transform: translateY(-50%);
  color: ${({showPassword:i})=>i?"#888888":"#54ADFF"};
`;a.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  cursor: pointer;
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);

  @media screen and (max-width: 767px) {
    right: 25px; 
  }
`;const g=a.p`
  margin: 8px;
  margin-top: 0;
  padding-left: 16px;
  font-size: smaller;
  color: ${({theme:i})=>i.colors.red};

  @media screen and (max-width: 767px) {
    font-size: xx-small;
  }
`,W=a.p`
  font-size: smaller;margin:0 auto;
color:#888888;
  @media screen and (max-width: 767px) {
    font-size: xx-small;
  }
`,G=a.p`
  margin: 8px;
  margin-top: 0;
  padding-left: 21px;
  font-size: smaller;
  color: ${({theme:i})=>i.colors.green};

  @media screen and (max-width: 767px) {
    font-size: xx-small;

  }
`,J=a.button`
  margin-top: 8px;
  width: 256px;

  padding: 10px 0;
  background: ${({theme:i})=>i.colors.blue};
  border: none;
  border-radius: 40px;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  color: #ffffff;

  @media screen and (min-width: 768px) {
    width: 458px;
  }

  @media screen and (min-width: 1024px) {
    width: 458px;
  }
`,N=a.p`
 margin-top: 16px;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.3;
  letter-spacing: 0.04em;
  color: ${({theme:i})=>i.colors.grey};
    @media screen and (max-width: 768px) {
      margin-top: 8px;
    }
 
`,O=a(F)`
  text-decoration-line: underline;
  color: ${({theme:i})=>i.colors.blue};
  display: inline;
  cursor: pointer;
`,H=i=>{const o={};return i.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(i.email)||(o.email="Enter a valid Email"):o.email="This field is required",i.password?i.password.length<8&&(o.password="Password must be at least 8 characters long"):o.password="This field is required",o},K={email:"",password:""},Q=()=>{const i=E(),o=C(),[r,w]=m.useState(!1),[f]=m.useState(!1),b=()=>{w(s=>!s)},c=(s,t,n)=>{const{name:d,value:l}=s.target;t({...n,[d]:l})},u=async(s,{setSubmitting:t})=>{try{const n={email:s.email,password:s.password};(await i($(n))).status===200&&o("/user")}catch(n){console.error("Error caught:",n)}finally{t(!1)}};return e.jsx(k,{initialValues:K,validate:H,onSubmit:u,children:({values:s,errors:t,touched:n,handleBlur:d,handleSubmit:l,isSubmitting:y,resetForm:j,setValues:x})=>e.jsxs(S,{onSubmit:l,children:[e.jsx(z,{children:"Login"}),e.jsxs(V,{error:t.email&&n.email,children:[e.jsxs(I,{error:t.email&&n.email,style:{borderColor:t.email&&n.email?"#F43F5E":"#54ADFF"},children:[e.jsx(R,{type:"string",name:"email",placeholder:"Email",value:s.email,onChange:p=>c(p,x,s),onBlur:d,error:t.email&&n.email,style:{color:"#888"}}),e.jsx(M,{children:t.email&&n.email&&s.email&&e.jsx(D,{onClick:()=>{j({values:{...s,email:""}})}})})]}),t.email&&n.email&&e.jsx(g,{name:"email",children:t.email})]}),e.jsxs(_,{error:t.password&&n.password,children:[e.jsxs(T,{children:[e.jsx(q,{type:r?"text":"password",name:"password",placeholder:"Password",value:s.password,onChange:p=>c(p,x,s),onBlur:p=>{d(p),x({...s,isPasswordValid:!0})},error:t.password&&n.password?"true":"false",valid:!t.password&&n.password&&s.isPasswordValid?"true":"false",style:{borderColor:t.password&&n.password?"#F43F5E":!t.password&&n.password&&s.isPasswordValid?"#00C3AD":"#54ADFF"}}),e.jsx(Y,{children:e.jsx(P,{"data-ispasswordvalid":!t.password&&n.password&&s.password.length>=8&&s.isPasswordValid,style:{stroke:!t.password&&n.password&&s.password.length>=8&&s.isPasswordValid?"#00C3AD":"#888",display:!t.password&&n.password&&s.password.length>=8&&s.isPasswordValid?"block":"none"}})}),e.jsx(Z,{children:e.jsx(B,{onClick:b,error:t.password&&n.password,style:{stroke:r?"#54ADFF":"#888"},children:r?e.jsx(v,{style:{cursor:"pointer"}}):e.jsx(A,{style:{cursor:"pointer"}})})})]}),t.password&&n.password&&e.jsx(g,{children:t.password}),!t.password&&n.password&&s.password.length>=8&&s.isPasswordValid&&e.jsx(G,{children:"Password is secure"})]}),f&&e.jsx(W,{children:"This email address is not in use. Try registering an address!"}),e.jsx(J,{type:"submit",disabled:y,children:"Login"}),e.jsxs(N,{children:["Don't have an account? ",e.jsx(O,{to:"/register",children:"Register"})]})]})})},U=a.div`
  display: flex;
  justify-content: center;
  padding-top: 80px;
  height: 100vh;
  background-color: white);
  `,X=a.div`
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
`,si=()=>e.jsx(U,{children:e.jsx(X,{children:e.jsx(Q,{})})});export{si as default};
