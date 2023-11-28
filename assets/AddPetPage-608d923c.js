import{r as t,s as x,a as Ce,b as se,u as Y,j as e,i as R,_ as D}from"./index-4329d20f.js";import{P as ne,D as ae,L as i,I as C,S as oe,a as le,F as ie,b as re,c as ce,C as de}from"./AddPetForm.styled-a1a6a58a.js";import"./setPrototypeOf-8d862a7d.js";const J=l=>t.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...l},t.createElement("path",{d:"M4 12L20 12M4 12L10 6M4 12L10 18",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),xe=l=>t.createElement("svg",{width:25,height:24,viewBox:"0 0 25 24",fill:"none",stroke:"#F43F5E",xmlns:"http://www.w3.org/2000/svg",...l},t.createElement("path",{d:"M12.7578 13C15.5192 13 17.7578 10.7614 17.7578 8C17.7578 5.23858 15.5192 3 12.7578 3C9.99639 3 7.75781 5.23858 7.75781 8C7.75781 10.7614 9.99639 13 12.7578 13ZM12.7578 13L12.7578 21M9.75781 18L15.7578 18",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),ue=l=>t.createElement("svg",{width:25,height:24,viewBox:"0 0 25 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...l},t.createElement("path",{d:"M12.7578 11C9.99639 11 7.75781 13.2386 7.75781 16C7.75781 18.7614 9.99639 21 12.7578 21C15.5192 21 17.7578 18.7614 17.7578 16C17.7578 13.2386 15.5192 11 12.7578 11ZM12.7578 11V3M12.7578 3L16.7578 7M12.7578 3L8.75781 7",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),ye=x.div`
  background-color: white;
  width: 280px;
  flex-shrink: 0;
  align-items: center;
  border-radius: 40px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  padding: 8px;
  padding-top: 20px;
  margin: 0 auto;
`,Fe=x.h1`
  color: var(--black, #111);
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 24px;
`,be=x.ul`
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
`,pe=x.li`
  text-align: center;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: ${l=>l.color};

  & > * {
    background-color: ${l=>l.color};
  }
`,me=x.span`
  display: block;
  width: 80px;
  height: 8px;
  border-radius: 8px;

  margin-top: 12px;
`,ke=x.form`
  display: flex;
  margin-bottom: 91px;
`,Se=x.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,ee=x.label`
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
`,te=x.input`
  display: none;
  opacity: 0;
  &:checked {
    & + label {
      color: white;
      background-color: #54adff;
    }
  }
`,K=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,Q=x.button`
  background: var(--blue-links, #54adff);
  color: white;
  border-radius: 40px;
  border: none;
  display: flex;
  width: 248px;
  padding: 8px 28px;
  justify-content: center;
  align-items: center;
  gap: 12px;
`,X=x.button`
  background: var(--blue-links, #ffffff);
  color: #54adff;
  border-radius: 40px;
  border: none;
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 12px;
`,he=async(l,p,P)=>{try{return(await Ce.post(`https://happy-pets-rest-api.onrender.com/api/${l}`,p,{headers:{"Content-Type":"multipart/form-data",Authorization:`Bearer ${P}`}})).data}catch(y){throw console.error("API Call Error:",y.message),y}},we=({changeColors:l,setActiveComponent:p,setColors:P})=>{const y=se(d=>d.auth.token),[S,u]=t.useState("button"),[j,f]=t.useState(""),[F,w]=t.useState(""),[g,M]=t.useState(""),[m,E]=t.useState(null),[h,b]=t.useState(null),[T,$]=t.useState(null),[L,U]=t.useState(1),[B,W]=t.useState(!1),A=Y(),O=({target:d})=>{const{name:a,value:v}=d;switch(a){case"name":f(v);break;case"typeOfPet":w(v);break;case"comments":M(v);break}},c=d=>{const a=d.target.files[0];if(a){const v=URL.createObjectURL(a);E(v),b(a)}},N=async d=>{if(d.preventDefault(),!m||!g){D.error("Complete all fields");return}const a=new FormData;a.append("submit",S),a.append("name",j),a.append("birthDay",T),a.append("typeOfPet",F),a.append("comments",g),a.append("image",h),p(null),he("myPet",a,y),D.success("Post has been posted"),A("/user")},k=()=>{const d="#00C3AD";if(!j||!T||!F){D.error("Complete all fields");return}U(a=>a+1),l(d),W(!0),setTimeout(()=>{u("submit")},500)},z=()=>{U(a=>a-1),L===1&&(p(null),setTimeout(()=>{P(["#54ADFF","#CCE4FB","#CCE4FB"])},10)),l(null),W(!1),setTimeout(()=>{u("button")},500)};return e.jsxs(ne,{onSubmit:N,encType:"multipart/form-data",children:[B?e.jsxs(e.Fragment,{children:[e.jsxs(le,{children:["Load the",e.jsx("br",{})," pet’s image:",e.jsx(ie,{children:m?e.jsx("img",{src:m,alt:"Selected",style:{width:"100%",height:"100%",borderRadius:"25px"}}):e.jsxs(e.Fragment,{children:[e.jsx(re,{type:"file",onChange:c,name:"image"}),e.jsx(ce,{width:"24",height:"24",children:e.jsx("use",{href:R+"#plus",fill:"white"})})]})})]}),e.jsxs(i,{children:["Comments",e.jsx(de,{placeholder:"Comment",name:"comments",onChange:O})]})]}):e.jsxs(ae,{children:[e.jsxs(i,{children:["Pet’s name",e.jsx(C,{type:"text",placeholder:"Type name pet",name:"name",onChange:O})]}),e.jsxs(i,{children:["Date of birth",e.jsx(oe,{selected:T,onChange:d=>$(d),placeholderText:"Type date of birth",dateFormat:"dd/MM/yyyy"})]}),e.jsxs(i,{children:["Type",e.jsx(C,{type:"text",placeholder:"Type of pet",name:"typeOfPet",onChange:O})]})]}),e.jsxs(K,{children:[e.jsxs(Q,{type:S,onClick:k,children:["Next",e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:R+"#pawprint-1",fill:"white"})})]}),e.jsxs(X,{type:"button",onClick:z,children:[e.jsx(J,{stroke:"#54ADFF"}),"Back"]})]})]})},fe=x.div`
  display: flex;
  gap: 16px;
`,V=x.label`
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
`,ge=x.h2`
  color: var(--black, #111);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`,Z=x.input`
  opacity: 0;
  display: none;
  opacity: 0;
  &:checked {
    & + label {
      color: white;
      background-color: #54adff;
    }
  }
`,je=x.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`,Te=({changeColors:l,setActiveComponent:p,setColors:P})=>{const y=se(o=>o.auth.token),[S,u]=t.useState(1),[j,f]=t.useState("button"),[F,w]=t.useState(""),[g,M]=t.useState(""),[m,E]=t.useState(null),[h,b]=t.useState(""),[T,$]=t.useState(""),[L,U]=t.useState(""),[B,W]=t.useState(""),[A,O]=t.useState(null),[c,N]=t.useState(null),[k,z]=t.useState(null),d=Y(),[a,v]=t.useState(!1),I=({target:o})=>{const{name:r,value:H}=o;switch(r){case"title":w(H);break;case"name":M(H);break;case"typeOfPet":b(H);break;case"location":U(H);break;case"price":$(H);break;case"comments":W(H);break}},_=o=>{const r=o.target.files[0];if(r){const H=URL.createObjectURL(r);O(H),N(r)}},q=async o=>{if(o.preventDefault(),!T||!L||!c||!k||!B){D.error("Complete all fields");return}const r=new FormData;r.append("submit",j),r.append("category","sell"),r.append("title",F),r.append("name",g),r.append("birthDay",m),r.append("typeOfPet",h),r.append("comments",B),r.append("gender",k),r.append("image",c),r.append("location",L),r.append("price",T),he("notices",r,y),D.success("Post has been posted"),d("/user")},G=()=>{const o="#00C3AD";if(!F||!g||!m||!h){D.error("Complete all fields");return}u(r=>r+1),l(o),v(!0),setTimeout(()=>{f("submit")},500)},n=()=>{u(r=>r-1),S===1&&(p(null),setTimeout(()=>{P(["#54ADFF","#CCE4FB","#CCE4FB"])},10)),l(null),v(!1),setTimeout(()=>{f("button")},500)},s=o=>{z(k===o?null:o)};return e.jsxs(ne,{onSubmit:q,encType:"multipart/form-data",children:[a?e.jsxs(e.Fragment,{children:[e.jsx(ge,{children:"The sex"}),e.jsxs(fe,{children:[e.jsx(Z,{id:"female",type:"radio",name:"sex",checked:k==="female",onChange:()=>s("female")}),e.jsxs(V,{htmlFor:"female",children:[e.jsx(xe,{stroke:k==="female"?"#FFFFFF":"#F43F5E"}),"female"]}),e.jsx(Z,{id:"male",type:"radio",name:"sex",checked:k==="male",onChange:()=>s("male")}),e.jsxs(V,{htmlFor:"male",children:[e.jsx(ue,{stroke:k==="male"?"#FFFFFF":"#54ADFF"}),"male"]})]}),e.jsxs(le,{children:["Load the",e.jsx("br",{})," pet’s image:",e.jsx(ie,{children:A?e.jsx("img",{src:A,alt:"Selected",style:{width:"100%",height:"100%",borderRadius:"25px"}}):e.jsxs(e.Fragment,{children:[e.jsx(re,{type:"file",onChange:_,name:"image"}),e.jsx(ce,{width:"24",height:"24",children:e.jsx("use",{href:R+"#plus",fill:"white"})})]})})]}),e.jsxs(je,{children:[e.jsxs(i,{children:["Location",e.jsx(C,{type:"text",placeholder:"Title of add",name:"location",onChange:I})]}),e.jsxs(i,{children:["Price",e.jsx(C,{type:"text",placeholder:"Title of add",name:"price",onChange:I})]}),e.jsxs(i,{children:["Comments",e.jsx(de,{placeholder:"Comment",name:"comments",onChange:I})]})]})]}):e.jsxs(ae,{children:[e.jsxs(i,{children:["Title of add",e.jsx(C,{type:"text",placeholder:"Title of add",name:"title",onChange:I})]}),e.jsxs(i,{children:["Pet’s name",e.jsx(C,{type:"text",placeholder:"Type name pet",name:"name",onChange:I})]}),e.jsxs(i,{children:["Date of birth",e.jsx(oe,{selected:m,onChange:o=>E(o),placeholderText:"Type date of birth",dateFormat:"dd/MM/yyyy"})]}),e.jsxs(i,{children:["Type",e.jsx(C,{type:"text",placeholder:"Type of pet",name:"typeOfPet",onChange:I})]})]}),e.jsxs(K,{children:[e.jsxs(Q,{type:j,onClick:G,children:["Next",e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:R+"#pawprint-1",fill:"white"})})]}),e.jsxs(X,{type:"button",onClick:n,children:[e.jsx(J,{stroke:"#54ADFF"}),"Back"]})]})]})},ve=({changeColors:l,setActiveComponent:p,setColors:P})=>{const y=se(n=>n.auth.token),[S,u]=t.useState("button"),[j,f]=t.useState(1),[F,w]=t.useState(""),[g,M]=t.useState(""),[m,E]=t.useState(null),[h,b]=t.useState(""),[T,$]=t.useState(""),[L,U]=t.useState(""),[B,W]=t.useState(null),[A,O]=t.useState(null),[c,N]=t.useState(null),k=Y(),[z,d]=t.useState(!1),a=({target:n})=>{const{name:s,value:o}=n;switch(s){case"title":w(o);break;case"name":M(o);break;case"typeOfPet":b(o);break;case"location":$(o);break;case"comments":U(o);break}},v=n=>{const s=n.target.files[0];if(s){const o=URL.createObjectURL(s);W(o),O(s)}},I=async n=>{if(n.preventDefault(),!T||!A||!c||!L){D.error("Complete all fields");return}const s=new FormData;s.append("submit",S),s.append("category","lostFound"),s.append("title",F),s.append("name",g),s.append("birthDay",m),s.append("typeOfPet",h),s.append("comments",L),s.append("gender",c),s.append("image",A),s.append("location",T),he("notices",s,y),D.success("Post has been posted"),k("/user")},_=async()=>{const n="#00C3AD";if(!F||!g||!m||!h){D.error("Complete all fields");return}f(s=>s+1),l(n),await d(!0),setTimeout(()=>{u("submit")},500)},q=()=>{f(s=>s-1),j===1&&(p(null),setTimeout(()=>{P(["#54ADFF","#CCE4FB","#CCE4FB"])},10)),l(null),d(!1),setTimeout(()=>{u("button")},500)},G=n=>{N(c===n?null:n)};return e.jsxs(ne,{onSubmit:I,encType:"multipart/form-data",children:[z?e.jsxs(e.Fragment,{children:[e.jsx(ge,{children:"The sex"}),e.jsxs(fe,{children:[e.jsx(Z,{id:"female",type:"radio",name:"sex",checked:c==="female",onChange:()=>G("female")}),e.jsxs(V,{htmlFor:"female",children:[e.jsx(xe,{stroke:c==="female"?"#FFFFFF":"#F43F5E"}),"female"]}),e.jsx(Z,{id:"male",type:"radio",name:"sex",checked:c==="male",onChange:()=>G("male")}),e.jsxs(V,{htmlFor:"male",children:[e.jsx(ue,{stroke:c==="male"?"#FFFFFF":"#54ADFF"}),"male"]})]}),e.jsxs(le,{children:["Load the",e.jsx("br",{})," pet’s image:",e.jsx(ie,{children:B?e.jsx("img",{src:B,alt:"Selected",style:{width:"100%",height:"100%",borderRadius:"25px"}}):e.jsxs(e.Fragment,{children:[e.jsx(re,{type:"file",onChange:v,name:"image"}),e.jsx(ce,{width:"24",height:"24",children:e.jsx("use",{href:R+"#plus",fill:"white"})})]})})]}),e.jsxs(je,{children:[e.jsxs(i,{children:["Location",e.jsx(C,{type:"text",placeholder:"Title of add",name:"location",onChange:a})]}),e.jsxs(i,{children:["Comments",e.jsx(de,{placeholder:"Comment",name:"comments",onChange:a})]})]})]}):e.jsxs(ae,{children:[e.jsxs(i,{children:["Title of add",e.jsx(C,{type:"text",placeholder:"Title of add",name:"title",onChange:a})]}),e.jsxs(i,{children:["Pet’s name",e.jsx(C,{required:!0,type:"text",placeholder:"Type name pet",name:"name",onChange:a})]}),e.jsxs(i,{children:["Date of birth",e.jsx(oe,{selected:m,onChange:n=>E(n),placeholderText:"Type date of birth",dateFormat:"dd/MM/yyyy"})]}),e.jsxs(i,{children:["Type",e.jsx(C,{type:"text",placeholder:"Type of pet",name:"typeOfPet",onChange:a})]})]}),e.jsxs(K,{children:[e.jsxs(Q,{type:S,onClick:_,children:["Next",e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:R+"#pawprint-1",fill:"white"})})]}),e.jsxs(X,{type:"button",onClick:q,children:[e.jsx(J,{stroke:"#54ADFF"}),"Back"]})]})]})},De=({changeColors:l,setActiveComponent:p,setColors:P})=>{const y=se(n=>n.auth.token),[S,u]=t.useState("button"),[j,f]=t.useState(1),[F,w]=t.useState(""),[g,M]=t.useState(""),[m,E]=t.useState(null),[h,b]=t.useState(""),[T,$]=t.useState(""),[L,U]=t.useState(""),[B,W]=t.useState(null),[A,O]=t.useState(null),[c,N]=t.useState(null),k=Y(),[z,d]=t.useState(!1),a=({target:n})=>{const{name:s,value:o}=n;switch(s){case"title":w(o);break;case"name":M(o);break;case"typeOfPet":b(o);break;case"location":$(o);break;case"comments":U(o);break}},v=n=>{const s=n.target.files[0];if(s){const o=URL.createObjectURL(s);W(o),O(s)}},I=async n=>{if(n.preventDefault(),!T||!A||!c||!L){D.error("Complete all fields");return}const s=new FormData;s.append("submit",S),s.append("category","inGoodHands"),s.append("title",F),s.append("name",g),s.append("birthDay",m),s.append("typeOfPet",h),s.append("comments",L),s.append("gender",c),s.append("image",A),s.append("location",T),he("notices",s,y),D.success("Post has been posted"),k("/user")},_=()=>{const n="#00C3AD";if(!F||!g||!m||!h){D.error("Complete all fields");return}f(s=>s+1),l(n),d(!0),setTimeout(()=>{u("submit")},500)},q=()=>{f(s=>s-1),j===1&&(p(null),setTimeout(()=>{P(["#54ADFF","#CCE4FB","#CCE4FB"])},10)),l(null),d(!1),setTimeout(()=>{u("button")},500)},G=n=>{N(c===n?null:n)};return e.jsxs(ne,{onSubmit:I,encType:"multipart/form-data",children:[z?e.jsxs(e.Fragment,{children:[e.jsx(ge,{children:"The sex"}),e.jsxs(fe,{children:[e.jsx(Z,{id:"female",type:"radio",name:"sex",checked:c==="female",onChange:()=>G("female")}),e.jsxs(V,{htmlFor:"female",children:[e.jsx(xe,{stroke:c==="female"?"#FFFFFF":"#F43F5E"}),"female"]}),e.jsx(Z,{id:"male",type:"radio",name:"sex",checked:c==="male",onChange:()=>G("male")}),e.jsxs(V,{htmlFor:"male",children:[e.jsx(ue,{stroke:c==="male"?"#FFFFFF":"#54ADFF"}),"male"]})]}),e.jsxs(le,{children:["Load the",e.jsx("br",{})," pet’s image:",e.jsx(ie,{children:B?e.jsx("img",{src:B,alt:"Selected",style:{width:"100%",height:"100%",borderRadius:"25px"}}):e.jsxs(e.Fragment,{children:[e.jsx(re,{type:"file",onChange:v,name:"image"}),e.jsx(ce,{width:"24",height:"24",children:e.jsx("use",{href:R+"#plus",fill:"white"})})]})})]}),e.jsxs(je,{children:[e.jsxs(i,{children:["Location",e.jsx(C,{type:"text",placeholder:"Title of add",name:"location",onChange:a})]}),e.jsxs(i,{children:["Comments",e.jsx(de,{placeholder:"Comment",name:"comments",onChange:a})]})]})]}):e.jsxs(ae,{children:[e.jsxs(i,{children:["Title of add",e.jsx(C,{type:"text",placeholder:"Title of add",name:"title",onChange:a})]}),e.jsxs(i,{children:["Pet’s name",e.jsx(C,{type:"text",placeholder:"Type name pet",name:"name",onChange:a})]}),e.jsxs(i,{children:["Date of birth",e.jsx(oe,{selected:m,onChange:n=>E(n),placeholderText:"Type date of birth",dateFormat:"dd/MM/yyyy"})]}),e.jsxs(i,{children:["Type",e.jsx(C,{type:"text",placeholder:"Type of pet",name:"typeOfPet",onChange:a})]})]}),e.jsxs(K,{children:[e.jsxs(Q,{type:S,onClick:_,children:["Next",e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:R+"#pawprint-1",fill:"white"})})]}),e.jsxs(X,{type:"button",onClick:q,children:[e.jsx(J,{stroke:"#54ADFF"}),"Back"]})]})]})},Ae=()=>{const[l,p]=t.useState(null),[P,y]=t.useState(""),S=Y(),[u,j]=t.useState(["#54ADFF","#CCE4FB","#CCE4FB"]),f=h=>{const b=[...u];b[0]="#00C3AD",b[1]=h||"#54ADFF",b[1]==="#00C3AD"&&(b[2]="#54ADFF"),j(b)},[F,w]=t.useState("Add Pet"),g=({target:h})=>{switch(y(h.value),p(null),h.value){case"yourPet":setTimeout(()=>{w("Your Pet")},10);break;case"sell":setTimeout(()=>{w("Add pet for sale")},10);break;case"lost":setTimeout(()=>{w("Add lost/faund pet")},10);break;case"goodHands":setTimeout(()=>{w(" Add in good hands pet")},10);break}},M=()=>{const h=m[P];h&&(p(h),y(""),f())},m={yourPet:e.jsx(we,{changeColors:f,setActiveComponent:p,setColors:j}),sell:e.jsx(Te,{changeColors:f,setActiveComponent:p,setColors:j}),lost:e.jsx(ve,{changeColors:f,setActiveComponent:p,setColors:j}),goodHands:e.jsx(De,{changeColors:f,setActiveComponent:p,setColors:j})},E=()=>{S(-1)};return e.jsxs(ye,{children:[e.jsx(Fe,{children:F}),e.jsxs("div",{children:[e.jsxs(be,{children:[e.jsxs(pe,{color:u[0],children:["Choose option",e.jsx(me,{})]}),e.jsxs(pe,{color:u[1],children:["Personal details",e.jsx(me,{})]}),e.jsxs(pe,{color:u[2],children:["More info",e.jsx(me,{})]})]}),l||e.jsxs(e.Fragment,{children:[e.jsx(ke,{children:e.jsxs(Se,{children:[e.jsx(te,{id:"pet",type:"radio",name:"radioChekBox",value:"yourPet",onChange:g}),e.jsx(ee,{htmlFor:"pet",children:" your pet"}),e.jsx(te,{id:"sell",type:"radio",name:"radioChekBox",value:"sell",onChange:g}),e.jsx(ee,{htmlFor:"sell",children:"sell"}),e.jsx(te,{id:"lost",type:"radio",name:"radioChekBox",value:"lost",onChange:g}),e.jsx(ee,{htmlFor:"lost",children:" lost/found "}),e.jsx(te,{id:"hands",type:"radio",name:"radioChekBox",value:"goodHands",onChange:g}),e.jsx(ee,{htmlFor:"hands",children:" in good hands"})]})}),e.jsxs(K,{children:[e.jsxs(Q,{onClick:M,children:["Next",e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:R+"#pawprint-1",fill:"white"})})]}),e.jsxs(X,{onClick:E,children:[e.jsx(J,{stroke:"#54ADFF"}),"Cancel"]})]})]})]})]})};export{Ae as default};
