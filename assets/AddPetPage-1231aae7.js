import{r as t,s as c,a as Fe,b as ae,u as J,j as e,i as R,_ as v}from"./index-09d39653.js";import{P as oe,D as le,L as i,I as P,S as ie,a as we,F as ke,b as re,c as ce,C as de}from"./AddPetForm.styled-9e387f66.js";import"./setPrototypeOf-8d862a7d.js";const K=l=>t.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...l},t.createElement("path",{d:"M4 12L20 12M4 12L10 6M4 12L10 18",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),xe=l=>t.createElement("svg",{width:25,height:24,viewBox:"0 0 25 24",fill:"none",stroke:"#F43F5E",xmlns:"http://www.w3.org/2000/svg",...l},t.createElement("path",{d:"M12.7578 13C15.5192 13 17.7578 10.7614 17.7578 8C17.7578 5.23858 15.5192 3 12.7578 3C9.99639 3 7.75781 5.23858 7.75781 8C7.75781 10.7614 9.99639 13 12.7578 13ZM12.7578 13L12.7578 21M9.75781 18L15.7578 18",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),ue=l=>t.createElement("svg",{width:25,height:24,viewBox:"0 0 25 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...l},t.createElement("path",{d:"M12.7578 11C9.99639 11 7.75781 13.2386 7.75781 16C7.75781 18.7614 9.99639 21 12.7578 21C15.5192 21 17.7578 18.7614 17.7578 16C17.7578 13.2386 15.5192 11 12.7578 11ZM12.7578 11V3M12.7578 3L16.7578 7M12.7578 3L8.75781 7",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),Se=c.div`
  background-color: white;
  width: fit-content;
  // min-width: 458px;
  padding: 30px;
  flex-shrink: 0;
  align-items: center;
  border-radius: 40px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  margin: 40px auto 0;
  @media (max-width: 526px) {
    padding: 12px;
    padding-top: 20px;
  }
`,ve=c.h1`
  color: var(--black, #111);
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  text-align: center;
  line-height: normal;
  margin-bottom: 32px;
`,Te=c.ul`
  display: flex;
  gap: 12px;
  margin-bottom: 38px;
  justify-content: center;
`,he=c.li`
  width: 33%;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  max-width:120px;

  color: ${l=>l.color};

  @media (max-width: 526px) {
    font-size: 10px;
  }
  & > * {
    background-color: ${l=>l.color};
  }
  
  @media (max-width: 355px) {
    font-size: 10px;
  }
`,me=c.span`
  display: block;
  width: ;
  height: 8px;
  border-radius: 8px;
  margin-top: 12px;
`,De=c.form`
  display: flex;
  margin-bottom: 91px;
`,Pe=c.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,te=c.label`
  border-radius: 40px;
  color: #54adff;
  background: var(--blue-light, #cce4fb);
  width: fit-content;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.56px;
  padding: 8px 16px;
  user-select: none;
  &:hover{
    cursor: pointer;
  }
`,ne=c.input`
  display: none;
  opacity: 0;
  &:checked {
    & + label {
      color: white;
      background-color: #54adff;
    }
  }
`,Q=c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row-reverse;

  @media (max-width: 430px) {
    flex-direction: column;
  }
`,X=c.button`
  background: var(--blue-links, #54adff);
  color: white;
  font-size: 16px;
  border-radius: 40px;
  border: none;
  margin-left: 20px;
  display: flex;
  width: 248px;
  padding: 8px 28px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  &:hover{
    cursor: pointer;
  }
`,ee=c.button`
  background: var(--blue-links, #ffffff);
  color: #54adff;
  font-size: 16px;
  border-radius: 40px;
  border: none;
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  &:hover{
    cursor: pointer;
  }
`,pe=(l,m,T)=>Fe.post(`https://happy-pets-rest-api.onrender.com/api/${l}`,m,{headers:{"Content-Type":"multipart/form-data",Authorization:`Bearer ${T}`}}).data,Le=({changeColors:l,setActiveComponent:m,setColors:T})=>{const D=ae(p=>p.auth.token),[y,u]=t.useState("button"),[f,g]=t.useState(""),[b,w]=t.useState(""),[j,M]=t.useState(""),[x,E]=t.useState(null),[h,C]=t.useState(null),[k,$]=t.useState(null),[L,z]=t.useState(1),[B,U]=t.useState(!1),I=J(),O=({target:p})=>{const{name:a,value:S}=p;switch(a){case"name":g(S);break;case"typeOfPet":w(S);break;case"comments":M(S);break}},d=p=>{const a=p.target.files[0];if(a){const S=URL.createObjectURL(a);E(S),C(a)}},N=async p=>{if(p.preventDefault(),!x||!j){v.error("Complete all fields");return}const a=new FormData;a.append("submit",y),a.append("name",f),a.append("birthDay",k),a.append("typeOfPet",b),a.append("comments",j),a.append("image",h),m(null),await pe("myPet",a,D),v.success("Post has been posted"),I(-1)},F=()=>{const p="#00C3AD";if(!f||!k||!b){v.error("Complete all fields");return}z(a=>a+1),l(p),U(!0),setTimeout(()=>{u("submit")},10)},W=()=>{z(a=>a-1),L===1&&(m(null),setTimeout(()=>{T(["#54ADFF","#CCE4FB","#CCE4FB"])},10)),l(null),U(!1),setTimeout(()=>{u("button")},10)};return e.jsxs(oe,{onSubmit:N,encType:"multipart/form-data",children:[B?e.jsxs(e.Fragment,{children:[e.jsxs(we,{children:["Load the",e.jsx("br",{})," pet’s image:",e.jsx(ke,{children:x?e.jsx("img",{src:x,alt:"Selected",style:{width:"100%",height:"100%",borderRadius:"25px"}}):e.jsxs(e.Fragment,{children:[e.jsx(re,{type:"file",onChange:d,name:"image"}),e.jsx(ce,{width:"24",height:"24",children:e.jsx("use",{href:R+"#plus",fill:"white"})})]})})]}),e.jsxs(i,{children:["Comments",e.jsx(de,{placeholder:"Comment",name:"comments",onChange:O})]})]}):e.jsxs(le,{children:[e.jsxs(i,{children:["Pet’s name",e.jsx(P,{type:"text",placeholder:"Type name pet",name:"name",onChange:O})]}),e.jsxs(i,{children:["Date of birth",e.jsx(ie,{selected:k,onChange:p=>$(p),placeholderText:"Type date of birth",dateFormat:"dd/MM/yyyy"})]}),e.jsxs(i,{children:["Type",e.jsx(P,{type:"text",placeholder:"Type of pet",name:"typeOfPet",onChange:O})]})]}),e.jsxs(Q,{children:[e.jsxs(X,{type:y,onClick:F,children:[y==="button"?"Next":"Done",e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:R+"#pawprint-1",fill:"white"})})]}),e.jsxs(ee,{type:"button",onClick:W,children:[e.jsx(K,{stroke:"#54ADFF"}),"Back"]})]})]})},fe=c.div`
  display: flex;
  gap: 16px;
`,V=c.label`
  display: inline-flex;
  height: 35px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  gap: 8px;
  flex-shrink: 0;
  position: relative;
  user-select: none;
  margin-bottom: 16px;
`,ge=c.h2`
  color: var(--black, #111);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`,Z=c.input`
  opacity: 0;
  display: none;
  opacity: 0;
  &:checked {
    & + label {
      color: white;
      background-color: #54adff;
    }
  }
`,je=c.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`,ye=c.label`
  color: var(--black, #111);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  margin-bottom: 25px;
  flex-direction: column;
  @media (max-width: 750px){
    width: 270px;
    flex-direction: row;
    align-items: center;
    justify-content: normal;
  }
`,be=c.div`
  width: 182px;
  height: 182px;
  background-color: #cce4fb;
  border-radius: 25px;
  margin-top: 10px;
  // margin-left: 14px;
  position: relative;

  @media (max-width: 430px) {
    width: 112px;
    height: 112px
  }
  @media (max-width: 750px){
    margin-left: 10px;
  }
`,Ce=c.div`
  display: flex;
  width: 650px;
  // flex-direction: column;
  // justify-content:space-evenly;

  @media (max-width: 750px){
    display: block;
    width: 100%;
  }
`,_=c.div`
  width: 50%;
  @media (max-width: 750px){
    width: 100%;
  }
`,se=c.input`
color: var(--black, #111);
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
width: -webkit-fill-available;
@media (min-width: 560px ){ //430
  width: 320px;
}
width: 264px;
height: 40px;
padding: 8px 16px;
border-radius: 40px;
border: 1px solid var(--blue-links, #54adff);
margin-top: 5px;

&:focus {
  border: 2px solid var(--blue-links, #54adff);
  outline: none;
  transition: border 0.3s ease-out;
}

&::placeholder {
  color: var(--gray, #888);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.56px;
}

`,Be=({changeColors:l,setActiveComponent:m,setColors:T})=>{const D=ae(o=>o.auth.token),[y,u]=t.useState(1),[f,g]=t.useState("button"),[b,w]=t.useState(""),[j,M]=t.useState(""),[x,E]=t.useState(null),[h,C]=t.useState(""),[k,$]=t.useState(""),[L,z]=t.useState(""),[B,U]=t.useState(""),[I,O]=t.useState(null),[d,N]=t.useState(null),[F,W]=t.useState(null),p=J(),[a,S]=t.useState(!1),A=({target:o})=>{const{name:r,value:H}=o;switch(r){case"title":w(H);break;case"name":M(H);break;case"typeOfPet":C(H);break;case"location":z(H);break;case"price":$(H);break;case"comments":U(H);break}},q=o=>{const r=o.target.files[0];if(r){const H=URL.createObjectURL(r);O(H),N(r)}},Y=async o=>{if(o.preventDefault(),!k||!L||!d||!F||!B){v.error("Complete all fields");return}const r=new FormData;r.append("submit",f),r.append("category","sell"),r.append("title",b),r.append("name",j),r.append("birthDay",x),r.append("typeOfPet",h),r.append("comments",B),r.append("gender",F),r.append("image",d),r.append("location",L),r.append("price",k),await pe("notices",r,D),v.success("Post has been posted"),p(-1)},G=()=>{const o="#00C3AD";if(!b||!j||!x||!h){v.error("Complete all fields");return}u(r=>r+1),l(o),S(!0),setTimeout(()=>{g("submit")},10)},s=()=>{u(r=>r-1),y===1&&(m(null),setTimeout(()=>{T(["#54ADFF","#CCE4FB","#CCE4FB"])},10)),l(null),S(!1),setTimeout(()=>{g("button")},10)},n=o=>{W(F===o?null:o)};return e.jsxs(oe,{onSubmit:Y,encType:"multipart/form-data",children:[a?e.jsx(e.Fragment,{children:e.jsxs(Ce,{children:[e.jsxs(_,{children:[e.jsx(ge,{children:"The sex"}),e.jsxs(fe,{children:[e.jsx(Z,{id:"female",type:"radio",name:"sex",checked:F==="female",onChange:()=>n("female")}),e.jsxs(V,{htmlFor:"female",children:[e.jsx(xe,{stroke:F==="female"?"#FFFFFF":"#F43F5E"}),"female"]}),e.jsx(Z,{id:"male",type:"radio",name:"sex",checked:F==="male",onChange:()=>n("male")}),e.jsxs(V,{htmlFor:"male",children:[e.jsx(ue,{stroke:F==="male"?"#FFFFFF":"#54ADFF"}),"male"]})]}),e.jsxs(ye,{children:["Load the pet’s image:",e.jsx(be,{children:I?e.jsx("img",{src:I,alt:"Selected",style:{width:"100%",height:"100%",borderRadius:"25px"}}):e.jsxs(e.Fragment,{children:[e.jsx(re,{type:"file",onChange:q,name:"image"}),e.jsx(ce,{width:"24",height:"24",children:e.jsx("use",{href:R+"#plus",fill:"white"})})]})})]})]}),e.jsx(_,{children:e.jsxs(je,{children:[e.jsxs(i,{children:["Location",e.jsx(se,{type:"text",placeholder:"Title of add",name:"location",onChange:A})]}),e.jsxs(i,{children:["Price",e.jsx(se,{type:"text",placeholder:"Title of add",name:"price",onChange:A})]}),e.jsxs(i,{children:["Comments",e.jsx(de,{placeholder:"Comment",name:"comments",onChange:A})]})]})})]})}):e.jsxs(le,{children:[e.jsxs(i,{children:["Title of add",e.jsx(P,{type:"text",placeholder:"Title of add",name:"title",onChange:A})]}),e.jsxs(i,{children:["Pet’s name",e.jsx(P,{type:"text",placeholder:"Type name pet",name:"name",onChange:A})]}),e.jsxs(i,{children:["Date of birth",e.jsx(ie,{selected:x,onChange:o=>E(o),placeholderText:"Type date of birth",dateFormat:"dd/MM/yyyy"})]}),e.jsxs(i,{children:["Type",e.jsx(P,{type:"text",placeholder:"Type of pet",name:"typeOfPet",onChange:A})]})]}),e.jsxs(Q,{children:[e.jsxs(X,{type:f,onClick:G,children:[f==="button"?"Next":"Done",e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:R+"#pawprint-1",fill:"white"})})]}),e.jsxs(ee,{type:"button",onClick:s,children:[e.jsx(K,{stroke:"#54ADFF"}),"Back"]})]})]})},Ie=({changeColors:l,setActiveComponent:m,setColors:T})=>{const D=ae(s=>s.auth.token),[y,u]=t.useState("button"),[f,g]=t.useState(1),[b,w]=t.useState(""),[j,M]=t.useState(""),[x,E]=t.useState(null),[h,C]=t.useState(""),[k,$]=t.useState(""),[L,z]=t.useState(""),[B,U]=t.useState(null),[I,O]=t.useState(null),[d,N]=t.useState(null),F=J(),[W,p]=t.useState(!1),a=({target:s})=>{const{name:n,value:o}=s;switch(n){case"title":w(o);break;case"name":M(o);break;case"typeOfPet":C(o);break;case"location":$(o);break;case"comments":z(o);break}},S=s=>{const n=s.target.files[0];if(n){const o=URL.createObjectURL(n);U(o),O(n)}},A=async s=>{if(s.preventDefault(),!k||!I||!d||!L){v.error("Complete all fields");return}const n=new FormData;n.append("submit",y),n.append("category","lostFound"),n.append("title",b),n.append("name",j),n.append("birthDay",x),n.append("typeOfPet",h),n.append("comments",L),n.append("gender",d),n.append("image",I),n.append("location",k),await pe("notices",n,D),v.success("Post has been posted"),F(-1)},q=async()=>{const s="#00C3AD";if(!b||!j||!x||!h){v.error("Complete all fields");return}g(n=>n+1),l(s),await p(!0),setTimeout(()=>{u("submit")},10)},Y=()=>{g(n=>n-1),f===1&&(m(null),setTimeout(()=>{T(["#54ADFF","#CCE4FB","#CCE4FB"])},10)),l(null),p(!1),setTimeout(()=>{u("button")},10)},G=s=>{N(d===s?null:s)};return e.jsxs(oe,{onSubmit:A,encType:"multipart/form-data",children:[W?e.jsx(e.Fragment,{children:e.jsxs(Ce,{children:[e.jsxs(_,{children:[e.jsx(ge,{children:"The sex"}),e.jsxs(fe,{children:[e.jsx(Z,{id:"female",type:"radio",name:"sex",checked:d==="female",onChange:()=>G("female")}),e.jsxs(V,{htmlFor:"female",children:[e.jsx(xe,{stroke:d==="female"?"#FFFFFF":"#F43F5E"}),"female"]}),e.jsx(Z,{id:"male",type:"radio",name:"sex",checked:d==="male",onChange:()=>G("male")}),e.jsxs(V,{htmlFor:"male",children:[e.jsx(ue,{stroke:d==="male"?"#FFFFFF":"#54ADFF"}),"male"]})]}),e.jsxs(ye,{children:["Load the pet’s image:",e.jsx(be,{children:B?e.jsx("img",{src:B,alt:"Selected",style:{width:"100%",height:"100%",borderRadius:"25px"}}):e.jsxs(e.Fragment,{children:[e.jsx(re,{type:"file",onChange:S,name:"image"}),e.jsx(ce,{width:"24",height:"24",children:e.jsx("use",{href:R+"#plus",fill:"white"})})]})})]})]}),e.jsx(_,{children:e.jsxs(je,{children:[e.jsxs(i,{children:["Location",e.jsx(se,{type:"text",placeholder:"Title of add",name:"location",onChange:a})]}),e.jsxs(i,{children:["Comments",e.jsx(de,{placeholder:"Comment",name:"comments",onChange:a})]})]})})]})}):e.jsxs(le,{children:[e.jsxs(i,{children:["Title of add",e.jsx(P,{type:"text",placeholder:"Title of add",name:"title",onChange:a})]}),e.jsxs(i,{children:["Pet’s name",e.jsx(P,{required:!0,type:"text",placeholder:"Type name pet",name:"name",onChange:a})]}),e.jsxs(i,{children:["Date of birth",e.jsx(ie,{selected:x,onChange:s=>E(s),placeholderText:"Type date of birth",dateFormat:"dd/MM/yyyy"})]}),e.jsxs(i,{children:["Type",e.jsx(P,{type:"text",placeholder:"Type of pet",name:"typeOfPet",onChange:a})]})]}),e.jsxs(Q,{children:[e.jsxs(X,{type:y,onClick:q,children:[y==="button"?"Next":"Done",e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:R+"#pawprint-1",fill:"white"})})]}),e.jsxs(ee,{type:"button",onClick:Y,children:[e.jsx(K,{stroke:"#54ADFF"}),"Back"]})]})]})},Ae=({changeColors:l,setActiveComponent:m,setColors:T})=>{const D=ae(s=>s.auth.token),[y,u]=t.useState("button"),[f,g]=t.useState(1),[b,w]=t.useState(""),[j,M]=t.useState(""),[x,E]=t.useState(null),[h,C]=t.useState(""),[k,$]=t.useState(""),[L,z]=t.useState(""),[B,U]=t.useState(null),[I,O]=t.useState(null),[d,N]=t.useState(null),F=J(),[W,p]=t.useState(!1),a=({target:s})=>{const{name:n,value:o}=s;switch(n){case"title":w(o);break;case"name":M(o);break;case"typeOfPet":C(o);break;case"location":$(o);break;case"comments":z(o);break}},S=s=>{const n=s.target.files[0];if(n){const o=URL.createObjectURL(n);U(o),O(n)}},A=async s=>{if(s.preventDefault(),!k||!I||!d||!L){v.error("Complete all fields");return}const n=new FormData;n.append("submit",y),n.append("category","inGoodHands"),n.append("title",b),n.append("name",j),n.append("birthDay",x),n.append("typeOfPet",h),n.append("comments",L),n.append("gender",d),n.append("image",I),n.append("location",k),await pe("notices",n,D),v.success("Post has been posted"),F(-1)},q=()=>{const s="#00C3AD";if(!b||!j||!x||!h){v.error("Complete all fields");return}g(n=>n+1),l(s),p(!0),setTimeout(()=>{u("submit")},10)},Y=()=>{g(n=>n-1),f===1&&(m(null),setTimeout(()=>{T(["#54ADFF","#CCE4FB","#CCE4FB"])},10)),l(null),p(!1),setTimeout(()=>{u("button")},10)},G=s=>{N(d===s?null:s)};return e.jsxs(oe,{onSubmit:A,encType:"multipart/form-data",children:[W?e.jsx(e.Fragment,{children:e.jsxs(Ce,{children:[e.jsxs(_,{children:[e.jsx(ge,{children:"The sex"}),e.jsxs(fe,{children:[e.jsx(Z,{id:"female",type:"radio",name:"sex",checked:d==="female",onChange:()=>G("female")}),e.jsxs(V,{htmlFor:"female",children:[e.jsx(xe,{stroke:d==="female"?"#FFFFFF":"#F43F5E"}),"female"]}),e.jsx(Z,{id:"male",type:"radio",name:"sex",checked:d==="male",onChange:()=>G("male")}),e.jsxs(V,{htmlFor:"male",children:[e.jsx(ue,{stroke:d==="male"?"#FFFFFF":"#54ADFF"}),"male"]})]}),e.jsxs(ye,{children:["Load the pet’s image:",e.jsx(be,{children:B?e.jsx("img",{src:B,alt:"Selected",style:{width:"100%",height:"100%",borderRadius:"25px"}}):e.jsxs(e.Fragment,{children:[e.jsx(re,{type:"file",onChange:S,name:"image"}),e.jsx(ce,{width:"24",height:"24",children:e.jsx("use",{href:R+"#plus",fill:"white"})})]})})]})]}),e.jsx(_,{children:e.jsxs(je,{children:[e.jsxs(i,{children:["Location",e.jsx(se,{type:"text",placeholder:"Title of add",name:"location",onChange:a})]}),e.jsxs(i,{children:["Comments",e.jsx(de,{placeholder:"Comment",name:"comments",onChange:a})]})]})})]})}):e.jsxs(le,{children:[e.jsxs(i,{children:["Title of add",e.jsx(P,{type:"text",placeholder:"Title of add",name:"title",onChange:a})]}),e.jsxs(i,{children:["Pet’s name",e.jsx(P,{type:"text",placeholder:"Type name pet",name:"name",onChange:a})]}),e.jsxs(i,{children:["Date of birth",e.jsx(ie,{selected:x,onChange:s=>E(s),placeholderText:"Type date of birth",dateFormat:"dd/MM/yyyy"})]}),e.jsxs(i,{children:["Type",e.jsx(P,{type:"text",placeholder:"Type of pet",name:"typeOfPet",onChange:a})]})]}),e.jsxs(Q,{children:[e.jsxs(X,{type:y,onClick:q,children:[y==="button"?"Next":"Done",e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:R+"#pawprint-1",fill:"white"})})]}),e.jsxs(ee,{type:"button",onClick:Y,children:[e.jsx(K,{stroke:"#54ADFF"}),"Back"]})]})]})},Ne=()=>{const[l,m]=t.useState(null),[T,D]=t.useState(""),y=J(),[u,f]=t.useState(["#54ADFF","#CCE4FB","#CCE4FB"]),g=h=>{const C=[...u];C[0]="#00C3AD",C[1]=h||"#54ADFF",C[1]==="#00C3AD"&&(C[2]="#54ADFF"),f(C)},[b,w]=t.useState("Add Pet"),j=({target:h})=>{switch(D(h.value),m(null),h.value){case"yourPet":setTimeout(()=>{w("Your Pet")},10);break;case"sell":setTimeout(()=>{w("Add pet for sale")},10);break;case"lost":setTimeout(()=>{w("Add lost/found pet")},10);break;case"goodHands":setTimeout(()=>{w(" Add in good hands pet")},10);break}},M=()=>{const h=x[T];h&&(m(h),D(""),g())},x={yourPet:e.jsx(Le,{changeColors:g,setActiveComponent:m,setColors:f}),sell:e.jsx(Be,{changeColors:g,setActiveComponent:m,setColors:f}),lost:e.jsx(Ie,{changeColors:g,setActiveComponent:m,setColors:f}),goodHands:e.jsx(Ae,{changeColors:g,setActiveComponent:m,setColors:f})},E=()=>{y(-1)};return e.jsxs(Se,{children:[e.jsx(ve,{children:b}),e.jsxs("div",{children:[e.jsxs(Te,{children:[e.jsxs(he,{color:u[0],children:["Choose option",e.jsx(me,{})]}),e.jsxs(he,{color:u[1],children:["Personal details",e.jsx(me,{})]}),e.jsxs(he,{color:u[2],children:["More info",e.jsx(me,{})]})]}),l||e.jsxs(e.Fragment,{children:[e.jsx(De,{children:e.jsxs(Pe,{children:[e.jsx(ne,{id:"pet",type:"radio",name:"radioChekBox",value:"yourPet",onChange:j}),e.jsx(te,{htmlFor:"pet",children:" your pet"}),e.jsx(ne,{id:"sell",type:"radio",name:"radioChekBox",value:"sell",onChange:j}),e.jsx(te,{htmlFor:"sell",children:"sell"}),e.jsx(ne,{id:"lost",type:"radio",name:"radioChekBox",value:"lost",onChange:j}),e.jsx(te,{htmlFor:"lost",children:" lost/found "}),e.jsx(ne,{id:"hands",type:"radio",name:"radioChekBox",value:"goodHands",onChange:j}),e.jsx(te,{htmlFor:"hands",children:" in good hands"})]})}),e.jsxs(Q,{children:[e.jsxs(X,{onClick:M,children:["Next",e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:R+"#pawprint-1",fill:"white"})})]}),e.jsxs(ee,{onClick:E,children:[e.jsx(K,{stroke:"#54ADFF"}),"Cancel"]})]})]})]})]})};export{Ne as default};
