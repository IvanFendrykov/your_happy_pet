import{s as o,L as u,i as j,u as F,r as E,j as e,m as $}from"./index-ed10fdd6.js";import{a as C,d as P,c as k,S as D,b as v}from"./cross-smal-4814a376.js";var g={};/**
 * @license React
 * react-jsx-dev-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A=Symbol.for("react.fragment");g.Fragment=A;g.jsxDEV=void 0;const L=o.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,S=o.h1`
  font-weight: 500;
  font-size: 36px;
  line-height: 1.36;
  color: ${({theme:i})=>i.colors.black};
  margin-bottom: 20px;

  @media screen and (max-width: 767px) {
    font-size: 24px;
    line-height: 1.38;
  }
`,z=o.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 767px) {
  }
`,V=o.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: ${({error:i,secure:a})=>i||a?"6px":"32px"};

  @media screen and (max-width: 767px) {
    margin-bottom: ${({error:i,secure:a})=>i||a?"1px":"24px"};
  }
`,I=o.input`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  width: 256px;
  color:#888888;

  border: 1px solid ${({theme:i,error:a,valid:r})=>a?"#F43F5E":"#54ADFF"};
  border-radius: 40px;
  position: relative;

  &:hover,
  &:focus {
    border-color: ${({theme:i,error:a,valid:r})=>a?"#F43F5E":"#54ADFF"};
    outline: none;
  }

  @media screen and (min-width: 768px) {
    width: 458px;
  }
`,R=o.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom:60px;
  margin-bottom: ${({error:i,secure:a})=>i||a?"6px":"8px"};

  @media screen and (max-width: 767px) {
    margin-bottom: ${({error:i,secure:a})=>i||a?"1px":"4px"};
  }
`,Y=o.span`
stroke:#00C3AD;
    width: 24px;
    height: 24px;
    position: absolute;
    right: 52px;
    top: 50%;
    transform: translateY(-50%);
`,T=o.span`
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
`,Z=o.span`
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
`,_=o.div`
  display: flex;
  flex-direction: column;
  position: relative;
  
  margin-bottom: ${({error:i})=>"60px"};

  @media screen and (max-width: 767px) {
    margin-bottom: ${({error:i})=>"110px"};
  }
`;o.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  position: absolute;
    right: 2px;
    top: 50%;
  transform: translateY(-50%);

`;const q=o.input`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  width: 256px;
  color:#888888;
  border: 1px solid ${({theme:i,error:a,valid:r})=>a?"#F43F5E":r?"#00C3AD":"#54ADFF"};
  border-radius: 40px;

  &:hover,
  &:focus {
    outline: none;
  }

  @media screen and (min-width: 768px) {
    width: 458px;
  }
`;o.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  stroke: ${({showPassword:i})=>i?"#888888":"#54ADFF"};

  svg {
    display: ${({showPassword:i})=>i?"none":"block"};
  }
`;const B=o.span`
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
`;o.span`
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
`;const m=o.p`
  margin: 8px;
  margin-top: 0;
  padding-left: 16px;
  font-size: smaller;
  color: ${({theme:i})=>i.colors.red};

  @media screen and (max-width: 767px) {
    font-size: xx-small;
  }
`;o.p`
  font-size: smaller;margin:0 auto;
color:#888888;
  @media screen and (max-width: 767px) {
    font-size: xx-small;
  }
`;const M=o.p`
  margin: 8px;
  margin-top: 0;
  padding-left: 21px;
  font-size: smaller;
  color: ${({theme:i})=>i.colors.green};

  @media screen and (max-width: 767px) {
    font-size: xx-small;

  }
`,W=o.button`
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
`,G=o.p`
 margin-top: 16px;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.3;
  letter-spacing: 0.04em;
  color: ${({theme:i})=>i.colors.grey};
    @media screen and (max-width: 768px) {
      margin-top: 8px;
    }
 
`,J=o(u)`
  text-decoration-line: underline;
  color: ${({theme:i})=>i.colors.blue};
  display: inline;
  cursor: pointer;
`,N=i=>{const a={};return i.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(i.email)||(a.email="Enter a valid Email"):a.email="This field is required",i.password?i.password.length<8&&(a.password="Password must be at least 8 characters long"):a.password="This field is required",a},O={email:"",password:""},H=()=>{const i=j(),a=F(),[r,h]=E.useState(!1),w=()=>{h(s=>!s)},c=(s,t,n)=>{const{name:d,value:l}=s.target;t({...n,[d]:l})},f=async(s,{setSubmitting:t})=>{try{const n={email:s.email,password:s.password};(await i($(n))).status===200&&a("/user")}catch(n){console.error("Error caught:",n)}finally{t(!1)}};return e.jsx(C,{initialValues:O,validate:N,onSubmit:f,children:({values:s,errors:t,touched:n,handleBlur:d,handleSubmit:l,isSubmitting:b,resetForm:y,setValues:x})=>e.jsxs(L,{onSubmit:l,children:[e.jsx(S,{children:"Login"}),e.jsxs(z,{error:t.email&&n.email,children:[e.jsxs(V,{error:t.email&&n.email,style:{borderColor:t.email&&n.email?"#F43F5E":"#54ADFF"},children:[e.jsx(I,{type:"string",name:"email",placeholder:"Email",value:s.email,onChange:p=>c(p,x,s),onBlur:d,error:t.email&&n.email,style:{color:"#888"}}),e.jsx(T,{children:t.email&&n.email&&s.email&&e.jsx(P,{onClick:()=>{y({values:{...s,email:""}})}})})]}),t.email&&n.email&&e.jsx(m,{name:"email",children:t.email})]}),e.jsxs(_,{error:t.password&&n.password,children:[e.jsxs(R,{children:[e.jsx(q,{type:r?"text":"password",name:"password",placeholder:"Password",value:s.password,onChange:p=>c(p,x,s),onBlur:p=>{d(p),x({...s,isPasswordValid:!0})},error:t.password&&n.password?"true":"false",valid:!t.password&&n.password&&s.isPasswordValid?"true":"false",style:{borderColor:t.password&&n.password?"#F43F5E":!t.password&&n.password&&s.isPasswordValid?"#00C3AD":"#54ADFF"}}),e.jsx(Y,{children:e.jsx(k,{"data-ispasswordvalid":!t.password&&n.password&&s.password.length>=8&&s.isPasswordValid,style:{stroke:!t.password&&n.password&&s.password.length>=8&&s.isPasswordValid?"#00C3AD":"#888",display:!t.password&&n.password&&s.password.length>=8&&s.isPasswordValid?"block":"none"}})}),e.jsx(Z,{children:e.jsx(B,{onClick:w,error:t.password&&n.password,style:{stroke:r?"#54ADFF":"#888"},children:r?e.jsx(D,{style:{cursor:"pointer"}}):e.jsx(v,{style:{cursor:"pointer"}})})})]}),t.password&&n.password&&e.jsx(m,{children:t.password}),!t.password&&n.password&&s.password.length>=8&&s.isPasswordValid&&e.jsx(M,{children:"Password is secure"})]}),e.jsx(W,{type:"submit",disabled:b,children:"Login"}),e.jsxs(G,{children:["Don't have an account? ",e.jsx(J,{to:"/register",children:"Register"})]})]})})},K=o.div`
  display: flex;
  justify-content: center;
  padding-top: 80px;
  height: 100vh;
  background-color: white);
  `,Q=o.div`
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
`,ii=()=>e.jsx(K,{children:e.jsx(Q,{children:e.jsx(H,{})})});export{ii as default};
