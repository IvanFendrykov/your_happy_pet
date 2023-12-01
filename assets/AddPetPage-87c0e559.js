import{r as t,s as a,a as Ce,b as ae,u as J,j as e,i as N,_ as v}from"./index-f8050d9b.js";import{e as Fe}from"./react-datepicker-b70e6aa7.js";import"./setPrototypeOf-8d862a7d.js";const K=l=>t.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...l},t.createElement("path",{d:"M4 12L20 12M4 12L10 6M4 12L10 18",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),me=l=>t.createElement("svg",{width:25,height:24,viewBox:"0 0 25 24",fill:"none",stroke:"#F43F5E",xmlns:"http://www.w3.org/2000/svg",...l},t.createElement("path",{d:"M12.7578 13C15.5192 13 17.7578 10.7614 17.7578 8C17.7578 5.23858 15.5192 3 12.7578 3C9.99639 3 7.75781 5.23858 7.75781 8C7.75781 10.7614 9.99639 13 12.7578 13ZM12.7578 13L12.7578 21M9.75781 18L15.7578 18",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),ue=l=>t.createElement("svg",{width:25,height:24,viewBox:"0 0 25 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...l},t.createElement("path",{d:"M12.7578 11C9.99639 11 7.75781 13.2386 7.75781 16C7.75781 18.7614 9.99639 21 12.7578 21C15.5192 21 17.7578 18.7614 17.7578 16C17.7578 13.2386 15.5192 11 12.7578 11ZM12.7578 11V3M12.7578 3L16.7578 7M12.7578 3L8.75781 7",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),ke=a.div`
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
`,Se=a.h1`
  color: var(--black, #111);
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  text-align: center;
  line-height: normal;
  margin-bottom: 32px;
`,ve=a.ul`
  display: flex;
  gap: 12px;
  margin-bottom: 38px;
  justify-content: center;
`,he=a.li`
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
`,xe=a.span`
  display: block;
  width: ;
  height: 8px;
  border-radius: 8px;
  margin-top: 12px;
`,Te=a.form`
  display: flex;
  margin-bottom: 91px;
`,De=a.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,te=a.label`
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
`,ne=a.input`
  display: none;
  opacity: 0;
  &:checked {
    & + label {
      color: white;
      background-color: #54adff;
    }
  }
`,Q=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row-reverse;

  @media (max-width: 430px) {
    flex-direction: column;
  }
`,X=a.button`
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
`,ee=a.button`
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
`,oe=a.form``,ie=a(Fe)`
 font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  width: 264px;
  @media (min-width:560px ){ //430
    width: 458px;
  }
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
`,le=a.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 45px;
`,r=a.label`
  display: flex;
  align-items: start;
  flex-direction: column;
  width: 100%;
  color: var(--black, #111);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`,P=a.input`
  color: var(--black, #111);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: -webkit-fill-available;
  @media (min-width: 560px ){ //430
    width: 458px;
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
`,Pe=a.label`
  // color: var(--black, #111);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  justify-content: space-evenly;

  @media (min-width: 430px){
    font-size: 20px;
  }
`,Le=a.div`
  width: 182px;
  height: 182px;
  background-color: #cce4fb;
  border-radius: 25px;
  margin-left: 14px;
  position: relative;

  @media (max-width: 430px) {
    width: 112px;
    height: 112px
  }
`,re=a.input`
  opacity: 0;
  width: 182px;
  height: 182px;

  @media (max-width: 430px) {
    width: 112px;
    height: 112px
  }
`,de=a.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,ce=a.textarea`
  display: flex;
  width: -webkit-fill-available;
  max-width: 100%;
  height: 92px;
  padding: 8px 16px;
  position: relative;
  border-radius: 20px;
  border: 1px solid var(--blue-links, #54adff);
  margin-top: 8px;
  margin-bottom: 24px;
  resize: none;

  &:focus {
    border: 2px solid var(--blue-links, #54adff);
    outline: none;
    transition: border 0.3s ease-out;
  }

  &::placeholder {
    position: absolute;
    top: 0;
    left: 0;
    padding: 8px 16px;
    color: var(--gray, #888);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.56px;
    transition: 0.3s ease-out;
  }
`,pe=async(l,x,T)=>(await Ce.post(`https://happy-pets-rest-api.onrender.com/api/${l}`,x,{headers:{"Content-Type":"multipart/form-data",Authorization:`Bearer ${T}`}})).data,Be=({changeColors:l,setActiveComponent:x,setColors:T})=>{const D=ae(p=>p.auth.token),[b,u]=t.useState("button"),[f,g]=t.useState(""),[y,F]=t.useState(""),[j,M]=t.useState(""),[m,E]=t.useState(null),[h,w]=t.useState(null),[k,$]=t.useState(null),[L,R]=t.useState(1),[B,U]=t.useState(!1),I=J(),z=({target:p})=>{const{name:o,value:S}=p;switch(o){case"name":g(S);break;case"typeOfPet":F(S);break;case"comments":M(S);break}},c=p=>{const o=p.target.files[0];if(o){const S=URL.createObjectURL(o);E(S),w(o)}},O=async p=>{if(p.preventDefault(),!m||!j){v.error("Complete all fields");return}const o=new FormData;o.append("submit",b),o.append("name",f),o.append("birthDay",k),o.append("typeOfPet",y),o.append("comments",j),o.append("image",h),await pe("myPet",o,D),x(null),v.success("Post has been posted"),I(-1)},C=()=>{const p="#00C3AD";if(!f||!k||!y){v.error("Complete all fields");return}R(o=>o+1),l(p),U(!0),setTimeout(()=>{u("submit")},10)},W=()=>{R(o=>o-1),L===1&&(x(null),setTimeout(()=>{T(["#54ADFF","#CCE4FB","#CCE4FB"])},10)),l(null),U(!1),setTimeout(()=>{u("button")},10)};return e.jsxs(oe,{onSubmit:O,encType:"multipart/form-data",children:[B?e.jsxs(e.Fragment,{children:[e.jsxs(Pe,{children:["Load the",e.jsx("br",{})," pet’s image:",e.jsx(Le,{children:m?e.jsx("img",{src:m,alt:"Selected",style:{width:"100%",height:"100%",borderRadius:"25px"}}):e.jsxs(e.Fragment,{children:[e.jsx(re,{type:"file",onChange:c,name:"image"}),e.jsx(de,{width:"24",height:"24",children:e.jsx("use",{href:N+"#plus",fill:"white"})})]})})]}),e.jsxs(r,{children:["Comments",e.jsx(ce,{placeholder:"Comment",name:"comments",onChange:z})]})]}):e.jsxs(le,{children:[e.jsxs(r,{children:["Pet’s name",e.jsx(P,{type:"text",placeholder:"Type name pet",name:"name",onChange:z})]}),e.jsxs(r,{children:["Date of birth",e.jsx(ie,{selected:k,onChange:p=>$(p),placeholderText:"Type date of birth",dateFormat:"dd/MM/yyyy"})]}),e.jsxs(r,{children:["Type",e.jsx(P,{type:"text",placeholder:"Type of pet",name:"typeOfPet",onChange:z})]})]}),e.jsxs(Q,{children:[e.jsxs(X,{type:b,onClick:C,children:[b==="button"?"Next":"Done",e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:N+"#pawprint-1",fill:"white"})})]}),e.jsxs(ee,{type:"button",onClick:W,children:[e.jsx(K,{stroke:"#54ADFF"}),"Back"]})]})]})},fe=a.div`
  display: flex;
  gap: 16px;
`,V=a.label`
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
`,ge=a.h2`
  color: var(--black, #111);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`,Z=a.input`
  opacity: 0;
  display: none;
  opacity: 0;
  &:checked {
    & + label {
      color: white;
      background-color: #54adff;
    }
  }
`,je=a.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`,be=a.label`
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
`,ye=a.div`
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
`,we=a.div`
  display: flex;
  width: 650px;
  // flex-direction: column;
  // justify-content:space-evenly;

  @media (max-width: 750px){
    display: block;
    width: 100%;
  }
`,_=a.div`
  width: 50%;
  @media (max-width: 750px){
    width: 100%;
  }
`,se=a.input`
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

`,Ie=({changeColors:l,setActiveComponent:x,setColors:T})=>{const D=ae(i=>i.auth.token),[b,u]=t.useState(1),[f,g]=t.useState("button"),[y,F]=t.useState(""),[j,M]=t.useState(""),[m,E]=t.useState(null),[h,w]=t.useState(""),[k,$]=t.useState(""),[L,R]=t.useState(""),[B,U]=t.useState(""),[I,z]=t.useState(null),[c,O]=t.useState(null),[C,W]=t.useState(null),p=J(),[o,S]=t.useState(!1),A=({target:i})=>{const{name:d,value:H}=i;switch(d){case"title":F(H);break;case"name":M(H);break;case"typeOfPet":w(H);break;case"location":R(H);break;case"price":$(H);break;case"comments":U(H);break}},q=i=>{const d=i.target.files[0];if(d){const H=URL.createObjectURL(d);z(H),O(d)}},Y=async i=>{if(i.preventDefault(),!k||!L||!c||!C||!B){v.error("Complete all fields");return}const d=new FormData;d.append("submit",f),d.append("category","sell"),d.append("title",y),d.append("name",j),d.append("birthDay",m),d.append("typeOfPet",h),d.append("comments",B),d.append("gender",C),d.append("image",c),d.append("location",L),d.append("price",k),await pe("notices",d,D),v.success("Post has been posted"),p(-1)},G=()=>{const i="#00C3AD";if(!y||!j||!m||!h){v.error("Complete all fields");return}u(d=>d+1),l(i),S(!0),setTimeout(()=>{g("submit")},10)},s=()=>{u(d=>d-1),b===1&&(x(null),setTimeout(()=>{T(["#54ADFF","#CCE4FB","#CCE4FB"])},10)),l(null),S(!1),setTimeout(()=>{g("button")},10)},n=i=>{W(C===i?null:i)};return e.jsxs(oe,{onSubmit:Y,encType:"multipart/form-data",children:[o?e.jsx(e.Fragment,{children:e.jsxs(we,{children:[e.jsxs(_,{children:[e.jsx(ge,{children:"The sex"}),e.jsxs(fe,{children:[e.jsx(Z,{id:"female",type:"radio",name:"sex",checked:C==="female",onChange:()=>n("female")}),e.jsxs(V,{htmlFor:"female",children:[e.jsx(me,{stroke:C==="female"?"#FFFFFF":"#F43F5E"}),"female"]}),e.jsx(Z,{id:"male",type:"radio",name:"sex",checked:C==="male",onChange:()=>n("male")}),e.jsxs(V,{htmlFor:"male",children:[e.jsx(ue,{stroke:C==="male"?"#FFFFFF":"#54ADFF"}),"male"]})]}),e.jsxs(be,{children:["Load the pet’s image:",e.jsx(ye,{children:I?e.jsx("img",{src:I,alt:"Selected",style:{width:"100%",height:"100%",borderRadius:"25px"}}):e.jsxs(e.Fragment,{children:[e.jsx(re,{type:"file",onChange:q,name:"image"}),e.jsx(de,{width:"24",height:"24",children:e.jsx("use",{href:N+"#plus",fill:"white"})})]})})]})]}),e.jsx(_,{children:e.jsxs(je,{children:[e.jsxs(r,{children:["Location",e.jsx(se,{type:"text",placeholder:"Title of add",name:"location",onChange:A})]}),e.jsxs(r,{children:["Price",e.jsx(se,{type:"text",placeholder:"Title of add",name:"price",onChange:A})]}),e.jsxs(r,{children:["Comments",e.jsx(ce,{placeholder:"Comment",name:"comments",onChange:A})]})]})})]})}):e.jsxs(le,{children:[e.jsxs(r,{children:["Title of add",e.jsx(P,{type:"text",placeholder:"Title of add",name:"title",onChange:A})]}),e.jsxs(r,{children:["Pet’s name",e.jsx(P,{type:"text",placeholder:"Type name pet",name:"name",onChange:A})]}),e.jsxs(r,{children:["Date of birth",e.jsx(ie,{selected:m,onChange:i=>E(i),placeholderText:"Type date of birth",dateFormat:"dd/MM/yyyy"})]}),e.jsxs(r,{children:["Type",e.jsx(P,{type:"text",placeholder:"Type of pet",name:"typeOfPet",onChange:A})]})]}),e.jsxs(Q,{children:[e.jsxs(X,{type:f,onClick:G,children:[f==="button"?"Next":"Done",e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:N+"#pawprint-1",fill:"white"})})]}),e.jsxs(ee,{type:"button",onClick:s,children:[e.jsx(K,{stroke:"#54ADFF"}),"Back"]})]})]})},Ae=({changeColors:l,setActiveComponent:x,setColors:T})=>{const D=ae(s=>s.auth.token),[b,u]=t.useState("button"),[f,g]=t.useState(1),[y,F]=t.useState(""),[j,M]=t.useState(""),[m,E]=t.useState(null),[h,w]=t.useState(""),[k,$]=t.useState(""),[L,R]=t.useState(""),[B,U]=t.useState(null),[I,z]=t.useState(null),[c,O]=t.useState(null),C=J(),[W,p]=t.useState(!1),o=({target:s})=>{const{name:n,value:i}=s;switch(n){case"title":F(i);break;case"name":M(i);break;case"typeOfPet":w(i);break;case"location":$(i);break;case"comments":R(i);break}},S=s=>{const n=s.target.files[0];if(n){const i=URL.createObjectURL(n);U(i),z(n)}},A=async s=>{if(s.preventDefault(),!k||!I||!c||!L){v.error("Complete all fields");return}const n=new FormData;n.append("submit",b),n.append("category","lostFound"),n.append("title",y),n.append("name",j),n.append("birthDay",m),n.append("typeOfPet",h),n.append("comments",L),n.append("gender",c),n.append("image",I),n.append("location",k),await pe("notices",n,D),v.success("Post has been posted"),C(-1)},q=async()=>{const s="#00C3AD";if(!y||!j||!m||!h){v.error("Complete all fields");return}g(n=>n+1),l(s),await p(!0),setTimeout(()=>{u("submit")},10)},Y=()=>{g(n=>n-1),f===1&&(x(null),setTimeout(()=>{T(["#54ADFF","#CCE4FB","#CCE4FB"])},10)),l(null),p(!1),setTimeout(()=>{u("button")},10)},G=s=>{O(c===s?null:s)};return e.jsxs(oe,{onSubmit:A,encType:"multipart/form-data",children:[W?e.jsx(e.Fragment,{children:e.jsxs(we,{children:[e.jsxs(_,{children:[e.jsx(ge,{children:"The sex"}),e.jsxs(fe,{children:[e.jsx(Z,{id:"female",type:"radio",name:"sex",checked:c==="female",onChange:()=>G("female")}),e.jsxs(V,{htmlFor:"female",children:[e.jsx(me,{stroke:c==="female"?"#FFFFFF":"#F43F5E"}),"female"]}),e.jsx(Z,{id:"male",type:"radio",name:"sex",checked:c==="male",onChange:()=>G("male")}),e.jsxs(V,{htmlFor:"male",children:[e.jsx(ue,{stroke:c==="male"?"#FFFFFF":"#54ADFF"}),"male"]})]}),e.jsxs(be,{children:["Load the pet’s image:",e.jsx(ye,{children:B?e.jsx("img",{src:B,alt:"Selected",style:{width:"100%",height:"100%",borderRadius:"25px"}}):e.jsxs(e.Fragment,{children:[e.jsx(re,{type:"file",onChange:S,name:"image"}),e.jsx(de,{width:"24",height:"24",children:e.jsx("use",{href:N+"#plus",fill:"white"})})]})})]})]}),e.jsx(_,{children:e.jsxs(je,{children:[e.jsxs(r,{children:["Location",e.jsx(se,{type:"text",placeholder:"Title of add",name:"location",onChange:o})]}),e.jsxs(r,{children:["Comments",e.jsx(ce,{placeholder:"Comment",name:"comments",onChange:o})]})]})})]})}):e.jsxs(le,{children:[e.jsxs(r,{children:["Title of add",e.jsx(P,{type:"text",placeholder:"Title of add",name:"title",onChange:o})]}),e.jsxs(r,{children:["Pet’s name",e.jsx(P,{required:!0,type:"text",placeholder:"Type name pet",name:"name",onChange:o})]}),e.jsxs(r,{children:["Date of birth",e.jsx(ie,{selected:m,onChange:s=>E(s),placeholderText:"Type date of birth",dateFormat:"dd/MM/yyyy"})]}),e.jsxs(r,{children:["Type",e.jsx(P,{type:"text",placeholder:"Type of pet",name:"typeOfPet",onChange:o})]})]}),e.jsxs(Q,{children:[e.jsxs(X,{type:b,onClick:q,children:[b==="button"?"Next":"Done",e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:N+"#pawprint-1",fill:"white"})})]}),e.jsxs(ee,{type:"button",onClick:Y,children:[e.jsx(K,{stroke:"#54ADFF"}),"Back"]})]})]})},Me=({changeColors:l,setActiveComponent:x,setColors:T})=>{const D=ae(s=>s.auth.token),[b,u]=t.useState("button"),[f,g]=t.useState(1),[y,F]=t.useState(""),[j,M]=t.useState(""),[m,E]=t.useState(null),[h,w]=t.useState(""),[k,$]=t.useState(""),[L,R]=t.useState(""),[B,U]=t.useState(null),[I,z]=t.useState(null),[c,O]=t.useState(null),C=J(),[W,p]=t.useState(!1),o=({target:s})=>{const{name:n,value:i}=s;switch(n){case"title":F(i);break;case"name":M(i);break;case"typeOfPet":w(i);break;case"location":$(i);break;case"comments":R(i);break}},S=s=>{const n=s.target.files[0];if(n){const i=URL.createObjectURL(n);U(i),z(n)}},A=async s=>{if(s.preventDefault(),!k||!I||!c||!L){v.error("Complete all fields");return}const n=new FormData;n.append("submit",b),n.append("category","inGoodHands"),n.append("title",y),n.append("name",j),n.append("birthDay",m),n.append("typeOfPet",h),n.append("comments",L),n.append("gender",c),n.append("image",I),n.append("location",k),await pe("notices",n,D),v.success("Post has been posted"),C(-1)},q=()=>{const s="#00C3AD";if(!y||!j||!m||!h){v.error("Complete all fields");return}g(n=>n+1),l(s),p(!0),setTimeout(()=>{u("submit")},10)},Y=()=>{g(n=>n-1),f===1&&(x(null),setTimeout(()=>{T(["#54ADFF","#CCE4FB","#CCE4FB"])},10)),l(null),p(!1),setTimeout(()=>{u("button")},10)},G=s=>{O(c===s?null:s)};return e.jsxs(oe,{onSubmit:A,encType:"multipart/form-data",children:[W?e.jsx(e.Fragment,{children:e.jsxs(we,{children:[e.jsxs(_,{children:[e.jsx(ge,{children:"The sex"}),e.jsxs(fe,{children:[e.jsx(Z,{id:"female",type:"radio",name:"sex",checked:c==="female",onChange:()=>G("female")}),e.jsxs(V,{htmlFor:"female",children:[e.jsx(me,{stroke:c==="female"?"#FFFFFF":"#F43F5E"}),"female"]}),e.jsx(Z,{id:"male",type:"radio",name:"sex",checked:c==="male",onChange:()=>G("male")}),e.jsxs(V,{htmlFor:"male",children:[e.jsx(ue,{stroke:c==="male"?"#FFFFFF":"#54ADFF"}),"male"]})]}),e.jsxs(be,{children:["Load the pet’s image:",e.jsx(ye,{children:B?e.jsx("img",{src:B,alt:"Selected",style:{width:"100%",height:"100%",borderRadius:"25px"}}):e.jsxs(e.Fragment,{children:[e.jsx(re,{type:"file",onChange:S,name:"image"}),e.jsx(de,{width:"24",height:"24",children:e.jsx("use",{href:N+"#plus",fill:"white"})})]})})]})]}),e.jsx(_,{children:e.jsxs(je,{children:[e.jsxs(r,{children:["Location",e.jsx(se,{type:"text",placeholder:"Title of add",name:"location",onChange:o})]}),e.jsxs(r,{children:["Comments",e.jsx(ce,{placeholder:"Comment",name:"comments",onChange:o})]})]})})]})}):e.jsxs(le,{children:[e.jsxs(r,{children:["Title of add",e.jsx(P,{type:"text",placeholder:"Title of add",name:"title",onChange:o})]}),e.jsxs(r,{children:["Pet’s name",e.jsx(P,{type:"text",placeholder:"Type name pet",name:"name",onChange:o})]}),e.jsxs(r,{children:["Date of birth",e.jsx(ie,{selected:m,onChange:s=>E(s),placeholderText:"Type date of birth",dateFormat:"dd/MM/yyyy"})]}),e.jsxs(r,{children:["Type",e.jsx(P,{type:"text",placeholder:"Type of pet",name:"typeOfPet",onChange:o})]})]}),e.jsxs(Q,{children:[e.jsxs(X,{type:b,onClick:q,children:[b==="button"?"Next":"Done",e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:N+"#pawprint-1",fill:"white"})})]}),e.jsxs(ee,{type:"button",onClick:Y,children:[e.jsx(K,{stroke:"#54ADFF"}),"Back"]})]})]})},Ne=()=>{const[l,x]=t.useState(null),[T,D]=t.useState(""),b=J(),[u,f]=t.useState(["#54ADFF","#CCE4FB","#CCE4FB"]),g=h=>{const w=[...u];w[0]="#00C3AD",w[1]=h||"#54ADFF",w[1]==="#00C3AD"&&(w[2]="#54ADFF"),f(w)},[y,F]=t.useState("Add Pet"),j=({target:h})=>{switch(D(h.value),x(null),h.value){case"yourPet":setTimeout(()=>{F("Your Pet")},10);break;case"sell":setTimeout(()=>{F("Add pet for sale")},10);break;case"lost":setTimeout(()=>{F("Add lost/found pet")},10);break;case"goodHands":setTimeout(()=>{F(" Add in good hands pet")},10);break}},M=()=>{const h=m[T];h&&(x(h),D(""),g())},m={yourPet:e.jsx(Be,{changeColors:g,setActiveComponent:x,setColors:f}),sell:e.jsx(Ie,{changeColors:g,setActiveComponent:x,setColors:f}),lost:e.jsx(Ae,{changeColors:g,setActiveComponent:x,setColors:f}),goodHands:e.jsx(Me,{changeColors:g,setActiveComponent:x,setColors:f})},E=()=>{b(-1)};return e.jsxs(ke,{children:[e.jsx(Se,{children:y}),e.jsxs("div",{children:[e.jsxs(ve,{children:[e.jsxs(he,{color:u[0],children:["Choose option",e.jsx(xe,{})]}),e.jsxs(he,{color:u[1],children:["Personal details",e.jsx(xe,{})]}),e.jsxs(he,{color:u[2],children:["More info",e.jsx(xe,{})]})]}),l||e.jsxs(e.Fragment,{children:[e.jsx(Te,{children:e.jsxs(De,{children:[e.jsx(ne,{id:"pet",type:"radio",name:"radioChekBox",value:"yourPet",onChange:j}),e.jsx(te,{htmlFor:"pet",children:" your pet"}),e.jsx(ne,{id:"sell",type:"radio",name:"radioChekBox",value:"sell",onChange:j}),e.jsx(te,{htmlFor:"sell",children:"sell"}),e.jsx(ne,{id:"lost",type:"radio",name:"radioChekBox",value:"lost",onChange:j}),e.jsx(te,{htmlFor:"lost",children:" lost/found "}),e.jsx(ne,{id:"hands",type:"radio",name:"radioChekBox",value:"goodHands",onChange:j}),e.jsx(te,{htmlFor:"hands",children:" in good hands"})]})}),e.jsxs(Q,{children:[e.jsxs(X,{onClick:M,children:["Next",e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:N+"#pawprint-1",fill:"white"})})]}),e.jsxs(ee,{onClick:E,children:[e.jsx(K,{stroke:"#54ADFF"}),"Cancel"]})]})]})]})]})};export{Ne as default};
