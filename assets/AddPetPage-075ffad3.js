import{s as l,a as pe,r as t,j as e,_ as z,u as me}from"./index-cd163c5a.js";import{s as d}from"./symbol-defs-8a7217be.js";const xe=l.div`
  background-color: white;
  width: 280px;
  flex-shrink: 0;
  align-items: center;
  border-radius: 40px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  padding: 8px;
  padding-top: 20px;
  margin: 0 auto;
`,ue=l.h1`
  color: var(--black, #111);
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 24px;
`,fe=l.ul`
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
`,ie=l.li`
  text-align: center;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: ${c=>c.color};

  & > * {
    background-color: ${c=>c.color};
  }
`,re=l.span`
  display: block;
  width: 80px;
  height: 8px;
  border-radius: 8px;

  margin-top: 12px;
`,ge=l.form`
  display: flex;
  margin-bottom: 91px;
`,je=l.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,X=l.label`
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
`,Y=l.input`
  display: none;
  opacity: 0;
  &:checked {
    & + label {
      color: white;
      background-color: #54adff;
    }
  }
`,J=l.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,K=l.button`
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
`,Q=l.button`
  background: var(--blue-links, #ffffff);
  color: #54adff;
  border-radius: 40px;
  border: none;
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 12px;
`,Z=l.form``,ee=l.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 45px;
`,i=l.label`
  display: flex;
  align-items: start;
  flex-direction: column;

  color: var(--black, #111);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`,h=l.input`
  color: var(--black, #111);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

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
`,te=l.label`
  color: var(--black, #111);
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  align-items: center;
  margin-bottom: 25px;
`,ne=l.div`
  width: 112px;
  height: 112px;
  background-color: #cce4fb;
  border-radius: 25px;
  margin-left: 14px;
  position: relative;
`,se=l.input`
  opacity: 0;
  width: 100%;
  height: 100%;
`,ae=l.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,le=l.textarea`
  display: flex;
  width: 264px;
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
`,oe=async(c,p)=>{try{return(await pe.post(`https://happy-pets-rest-api.onrender.com/api/${c}`,p,{headers:{"Content-Type":"multipart/form-data"}})).data}catch(y){throw console.error("API Call Error:",y.message),y}},be=({changeColors:c,setActiveComponent:p,setColors:y})=>{const[C,w]=t.useState("button"),[j,f]=t.useState(""),[x,T]=t.useState(""),[k,O]=t.useState(""),[S,b]=t.useState(""),[m,U]=t.useState(null),[I,M]=t.useState(null),[D,E]=t.useState(1);console.log(D);const[L,R]=t.useState(!1),F=({target:u})=>{const{name:s,value:v}=u;switch(s){case"name":f(v);break;case"birthDay":T(v);break;case"typeOfPet":O(v);break;case"comments":b(v);break}},H=u=>{const s=u.target.files[0];if(s){const v=URL.createObjectURL(s);U(v),M(s)}},g=async u=>{if(u.preventDefault(),!m||!S){z.error("Complete all fields");return}const s=new FormData;s.append("submit",C),s.append("name",j),s.append("birthDay",x),s.append("typeOfPet",k),s.append("comments",S),s.append("image",I),p(null),oe("myPet",s)},N=()=>{const u="#00C3AD";if(!j||!x||!k){z.error("Complete all fields");return}E(s=>s+1),c(u),R(!0),setTimeout(()=>{w("submit")},500)},P=()=>{E(s=>s-1),D===1&&(p(null),setTimeout(()=>{y(["#54ADFF","#CCE4FB","#CCE4FB"])},10)),c(null),R(!1),setTimeout(()=>{w("button")},500)};return e.jsxs(Z,{onSubmit:g,encType:"multipart/form-data",children:[L?e.jsxs(e.Fragment,{children:[e.jsxs(te,{children:["Load the",e.jsx("br",{})," pet’s image:",e.jsx(ne,{children:m?e.jsx("img",{src:m,alt:"Selected",style:{width:"100%",height:"100%",borderRadius:"25px"}}):e.jsxs(e.Fragment,{children:[e.jsx(se,{type:"file",onChange:H,name:"image"}),e.jsx(ae,{width:"24",height:"24",children:e.jsx("use",{href:d+"#plus",fill:"white"})})]})})]}),e.jsxs(i,{children:["Comments",e.jsx(le,{placeholder:"Comment",name:"comments",onChange:F})]})]}):e.jsxs(ee,{children:[e.jsxs(i,{children:["Pet’s name",e.jsx(h,{type:"text",placeholder:"Type name pet",name:"name",onChange:F})]}),e.jsxs(i,{children:["Date of birth",e.jsx(h,{type:"text",placeholder:"Type date of birth",name:"birthDay",onChange:F})]}),e.jsxs(i,{children:["Type",e.jsx(h,{type:"text",placeholder:"Type of pet",name:"typeOfPet",onChange:F})]})]}),e.jsxs(J,{children:[e.jsxs(K,{type:C,onClick:N,children:["Next",e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:d+"#pawprint-1",fill:"white"})})]}),e.jsxs(Q,{type:"button",onClick:P,children:[e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:d+"#arrow-left",fill:"white"})}),"Back"]})]})]})},ce=l.div`
  display: flex;
  gap: 16px;
`,W=l.svg`
  position: absolute;
  left: 0;
  fill: black;
`,$=l.label`
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
`,de=l.h2`
  color: var(--black, #111);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`,V=l.input`
  opacity: 0;
  display: none;
  opacity: 0;
  &:checked {
    & + label {
      color: white;
      background-color: #54adff;
    }
  }
`,he=l.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`,ye=({changeColors:c,setActiveComponent:p,setColors:y})=>{const[C,w]=t.useState(1),[j,f]=t.useState("button"),[x,T]=t.useState(""),[k,O]=t.useState(""),[S,b]=t.useState(""),[m,U]=t.useState(""),[I,M]=t.useState(""),[D,E]=t.useState(""),[L,R]=t.useState(""),[F,H]=t.useState(null),[g,N]=t.useState(null),[P,u]=t.useState(null),[s,v]=t.useState(!1),B=({target:a})=>{const{name:r,value:A}=a;switch(r){case"title":T(A);break;case"name":O(A);break;case"birthDay":b(A);break;case"typeOfPet":U(A);break;case"location":E(A);break;case"price":M(A);break;case"comments":R(A);break}},_=a=>{const r=a.target.files[0];if(r){const A=URL.createObjectURL(r);H(A),N(r)}},q=async a=>{if(a.preventDefault(),!I||!D||!g||!P||!L){z.error("Complete all fields");return}const r=new FormData;r.append("submit",j),r.append("title",x),r.append("name",k),r.append("birthDay",S),r.append("typeOfPet",m),r.append("comments",L),r.append("gender",P),r.append("image",g),r.append("location",D),r.append("price",I),oe("petSale",r)},G=()=>{const a="#00C3AD";if(!x||!k||!S||!m){z.error("Complete all fields");return}w(r=>r+1),c(a),v(!0),setTimeout(()=>{f("submit")},500)},o=()=>{w(r=>r-1),C===1&&(p(null),setTimeout(()=>{y(["#54ADFF","#CCE4FB","#CCE4FB"])},10)),c(null),v(!1),setTimeout(()=>{f("button")},500)},n=a=>{u(P===a?null:a)};return e.jsxs(Z,{onSubmit:q,encType:"multipart/form-data",children:[s?e.jsxs(e.Fragment,{children:[e.jsx(de,{children:"The sex"}),e.jsxs(ce,{children:[e.jsx(V,{id:"female",type:"radio",name:"sex",checked:P==="female",onChange:()=>n("female")}),e.jsxs($,{htmlFor:"female",children:[e.jsx(W,{width:"24",height:"24",children:e.jsx("use",{href:d+"#female",fill:"red"})}),"female"]}),e.jsx(V,{id:"male",type:"radio",name:"sex",checked:P==="male",onChange:()=>n("male")}),e.jsxs($,{htmlFor:"male",children:[e.jsx(W,{width:"24",height:"24",children:e.jsx("use",{href:d+"#male",fill:"red"})}),"male"]})]}),e.jsxs(te,{children:["Load the",e.jsx("br",{})," pet’s image:",e.jsx(ne,{children:F?e.jsx("img",{src:F,alt:"Selected",style:{width:"100%",height:"100%",borderRadius:"25px"}}):e.jsxs(e.Fragment,{children:[e.jsx(se,{type:"file",onChange:_,name:"image"}),e.jsx(ae,{width:"24",height:"24",children:e.jsx("use",{href:d+"#plus",fill:"white"})})]})})]}),e.jsxs(he,{children:[e.jsxs(i,{children:["Location",e.jsx(h,{type:"text",placeholder:"Title of add",name:"location",onChange:B})]}),e.jsxs(i,{children:["Price",e.jsx(h,{type:"text",placeholder:"Title of add",name:"price",onChange:B})]}),e.jsxs(i,{children:["Comments",e.jsx(le,{placeholder:"Comment",name:"comments",onChange:B})]})]})]}):e.jsxs(ee,{children:[e.jsxs(i,{children:["Title of add",e.jsx(h,{type:"text",placeholder:"Title of add",name:"title",onChange:B})]}),e.jsxs(i,{children:["Pet’s name",e.jsx(h,{type:"text",placeholder:"Type name pet",name:"name",onChange:B})]}),e.jsxs(i,{children:["Date of birth",e.jsx(h,{type:"text",placeholder:"01/01/2001",name:"birthDay",onChange:B})]}),e.jsxs(i,{children:["Type",e.jsx(h,{type:"text",placeholder:"Type of pet",name:"typeOfPet",onChange:B})]})]}),e.jsxs(J,{children:[e.jsxs(K,{type:j,onClick:G,children:["Next",e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:d+"#pawprint-1",fill:"white"})})]}),e.jsxs(Q,{type:"button",onClick:o,children:[e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:d+"#arrow-left",fill:"white"})}),"Back"]})]})]})},Ce=({changeColors:c,setActiveComponent:p,setColors:y})=>{const[C,w]=t.useState("button"),[j,f]=t.useState(1),[x,T]=t.useState(""),[k,O]=t.useState(""),[S,b]=t.useState(""),[m,U]=t.useState(""),[I,M]=t.useState(""),[D,E]=t.useState(""),[L,R]=t.useState(null),[F,H]=t.useState(null),[g,N]=t.useState(null),[P,u]=t.useState(!1),s=({target:o})=>{const{name:n,value:a}=o;switch(n){case"title":T(a);break;case"name":O(a);break;case"birthDay":b(a);break;case"typeOfPet":U(a);break;case"location":M(a);break;case"comments":E(a);break}},v=o=>{const n=o.target.files[0];if(n){const a=URL.createObjectURL(n);R(a),H(n)}},B=async o=>{if(o.preventDefault(),!I||!F||!g||!D){z.error("Complete all fields");return}const n=new FormData;n.append("submit",C),n.append("title",x),n.append("name",k),n.append("birthDay",S),n.append("typeOfPet",m),n.append("comments",D),n.append("gender",g),n.append("image",F),n.append("location",I),oe("lostFound",n);try{const a=await pe.post("https://happy-pets-rest-api.onrender.com/api/lostFound",n,{headers:{"Content-Type":"multipart/form-data"}});p(null),console.log("Pet added successfully",a.data)}catch(a){console.error("Error adding pet:",a.message)}},_=()=>{const o="#00C3AD";if(!x||!k||!S||!m){z.error("Complete all fields");return}f(n=>n+1),c(o),u(!0),setTimeout(()=>{w("submit")},500)},q=()=>{f(n=>n-1),j===1&&(p(null),setTimeout(()=>{y(["#54ADFF","#CCE4FB","#CCE4FB"])},10)),c(null),u(!1),setTimeout(()=>{w("button")},500)},G=o=>{N(g===o?null:o)};return e.jsxs(Z,{onSubmit:B,encType:"multipart/form-data",children:[P?e.jsxs(e.Fragment,{children:[e.jsx(de,{children:"The sex"}),e.jsxs(ce,{children:[e.jsx(V,{id:"female",type:"radio",name:"sex",checked:g==="female",onChange:()=>G("female")}),e.jsxs($,{htmlFor:"female",children:[e.jsx(W,{width:"24",height:"24",children:e.jsx("use",{href:d+"#female",fill:"red"})}),"female"]}),e.jsx(V,{id:"male",type:"radio",name:"sex",checked:g==="male",onChange:()=>G("male")}),e.jsxs($,{htmlFor:"male",children:[e.jsx(W,{width:"24",height:"24",children:e.jsx("use",{href:d+"#male",fill:"red"})}),"male"]})]}),e.jsxs(te,{children:["Load the",e.jsx("br",{})," pet’s image:",e.jsx(ne,{children:L?e.jsx("img",{src:L,alt:"Selected",style:{width:"100%",height:"100%",borderRadius:"25px"}}):e.jsxs(e.Fragment,{children:[e.jsx(se,{type:"file",onChange:v,name:"image"}),e.jsx(ae,{width:"24",height:"24",children:e.jsx("use",{href:d+"#plus",fill:"white"})})]})})]}),e.jsxs(he,{children:[e.jsxs(i,{children:["Location",e.jsx(h,{type:"text",placeholder:"Title of add",name:"location",onChange:s})]}),e.jsxs(i,{children:["Comments",e.jsx(le,{placeholder:"Comment",name:"comments",onChange:s})]})]})]}):e.jsxs(ee,{children:[e.jsxs(i,{children:["Title of add",e.jsx(h,{type:"text",placeholder:"Title of add",name:"title",onChange:s})]}),e.jsxs(i,{children:["Pet’s name",e.jsx(h,{type:"text",placeholder:"Type name pet",name:"name",onChange:s})]}),e.jsxs(i,{children:["Date of birth",e.jsx(h,{type:"text",placeholder:"01/01/2001",name:"birthDay",onChange:s})]}),e.jsxs(i,{children:["Type",e.jsx(h,{type:"text",placeholder:"Type of pet",name:"typeOfPet",onChange:s})]})]}),e.jsxs(J,{children:[e.jsxs(K,{type:C,onClick:_,children:["Next",e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:d+"#pawprint-1",fill:"white"})})]}),e.jsxs(Q,{type:"button",onClick:q,children:[e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:d+"#arrow-left",fill:"white"})}),"Back"]})]})]})},we=({changeColors:c,setActiveComponent:p,setColors:y})=>{const[C,w]=t.useState("button"),[j,f]=t.useState(1),[x,T]=t.useState(""),[k,O]=t.useState(""),[S,b]=t.useState(""),[m,U]=t.useState(""),[I,M]=t.useState(""),[D,E]=t.useState(""),[L,R]=t.useState(null),[F,H]=t.useState(null),[g,N]=t.useState(null),[P,u]=t.useState(!1),s=({target:o})=>{const{name:n,value:a}=o;switch(n){case"title":T(a);break;case"name":O(a);break;case"birthDay":b(a);break;case"typeOfPet":U(a);break;case"location":M(a);break;case"comments":E(a);break}},v=o=>{const n=o.target.files[0];if(n){const a=URL.createObjectURL(n);R(a),H(n)}},B=async o=>{if(o.preventDefault(),!I||!F||!g||!D){z.error("Complete all fields");return}const n=new FormData;n.append("submit",C),n.append("title",x),n.append("name",k),n.append("birthDay",S),n.append("typeOfPet",m),n.append("comments",D),n.append("gender",g),n.append("image",F),n.append("location",I),oe("inGoodHands",n)},_=()=>{const o="#00C3AD";if(!x||!k||!S||!m){z.error("Complete all fields");return}f(n=>n+1),c(o),u(!0),setTimeout(()=>{w("submit")},500)},q=()=>{f(n=>n-1),j===1&&(p(null),setTimeout(()=>{y(["#54ADFF","#CCE4FB","#CCE4FB"])},10)),c(null),u(!1),setTimeout(()=>{w("button")},500)},G=o=>{N(g===o?null:o)};return e.jsxs(Z,{onSubmit:B,encType:"multipart/form-data",children:[P?e.jsxs(e.Fragment,{children:[e.jsx(de,{children:"The sex"}),e.jsxs(ce,{children:[e.jsx(V,{id:"female",type:"radio",name:"sex",checked:g==="female",onChange:()=>G("female")}),e.jsxs($,{htmlFor:"female",children:[e.jsx(W,{width:"24",height:"24",children:e.jsx("use",{href:d+"#female",fill:"red"})}),"female"]}),e.jsx(V,{id:"male",type:"radio",name:"sex",checked:g==="male",onChange:()=>G("male")}),e.jsxs($,{htmlFor:"male",children:[e.jsx(W,{width:"24",height:"24",children:e.jsx("use",{href:d+"#male",fill:"red"})}),"male"]})]}),e.jsxs(te,{children:["Load the",e.jsx("br",{})," pet’s image:",e.jsx(ne,{children:L?e.jsx("img",{src:L,alt:"Selected",style:{width:"100%",height:"100%",borderRadius:"25px"}}):e.jsxs(e.Fragment,{children:[e.jsx(se,{type:"file",onChange:v,name:"image"}),e.jsx(ae,{width:"24",height:"24",children:e.jsx("use",{href:d+"#plus",fill:"white"})})]})})]}),e.jsxs(he,{children:[e.jsxs(i,{children:["Location",e.jsx(h,{type:"text",placeholder:"Title of add",name:"location",onChange:s})]}),e.jsxs(i,{children:["Comments",e.jsx(le,{placeholder:"Comment",name:"comments",onChange:s})]})]})]}):e.jsxs(ee,{children:[e.jsxs(i,{children:["Title of add",e.jsx(h,{type:"text",placeholder:"Title of add",name:"title",onChange:s})]}),e.jsxs(i,{children:["Pet’s name",e.jsx(h,{type:"text",placeholder:"Type name pet",name:"name",onChange:s})]}),e.jsxs(i,{children:["Date of birth",e.jsx(h,{type:"text",placeholder:"01/01/2001",name:"birthDay",onChange:s})]}),e.jsxs(i,{children:["Type",e.jsx(h,{type:"text",placeholder:"Type of pet",name:"typeOfPet",onChange:s})]})]}),e.jsxs(J,{children:[e.jsxs(K,{type:C,onClick:_,children:["Next",e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:d+"#pawprint-1",fill:"white"})})]}),e.jsxs(Q,{type:"button",onClick:q,children:[e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:d+"#arrow-left",fill:"white"})}),"Back"]})]})]})},Fe=()=>{const[c,p]=t.useState(null),[y,C]=t.useState(""),w=me(),[j,f]=t.useState(["#54ADFF","#CCE4FB","#CCE4FB"]),x=b=>{const m=[...j];m[0]="#00C3AD",m[1]=b||"#54ADFF",m[1]==="#00C3AD"&&(m[2]="#54ADFF"),f(m)},T=({target:b})=>{C(b.value),p(null)},k=()=>{const b=O[y];b&&(p(b),C(""),x())},O={yourPet:e.jsx(be,{changeColors:x,setActiveComponent:p,setColors:f}),sell:e.jsx(ye,{changeColors:x,setActiveComponent:p,setColors:f}),lost:e.jsx(Ce,{changeColors:x,setActiveComponent:p,setColors:f}),goodHands:e.jsx(we,{changeColors:x,setActiveComponent:p,setColors:f})},S=()=>{w(-1)};return e.jsxs(xe,{children:[e.jsx(ue,{children:"Add pet"}),e.jsxs("div",{children:[e.jsxs(fe,{children:[e.jsxs(ie,{color:j[0],children:["Choose option",e.jsx(re,{})]}),e.jsxs(ie,{color:j[1],children:["Personal details",e.jsx(re,{})]}),e.jsxs(ie,{color:j[2],children:["More info",e.jsx(re,{})]})]}),c||e.jsxs(e.Fragment,{children:[e.jsx(ge,{children:e.jsxs(je,{children:[e.jsx(Y,{id:"pet",type:"radio",name:"radioChekBox",value:"yourPet",onChange:T}),e.jsx(X,{htmlFor:"pet",children:" your pet"}),e.jsx(Y,{id:"sell",type:"radio",name:"radioChekBox",value:"sell",onChange:T}),e.jsx(X,{htmlFor:"sell",children:"sell"}),e.jsx(Y,{id:"lost",type:"radio",name:"radioChekBox",value:"lost",onChange:T}),e.jsx(X,{htmlFor:"lost",children:" lost/found "}),e.jsx(Y,{id:"hands",type:"radio",name:"radioChekBox",value:"goodHands",onChange:T}),e.jsx(X,{htmlFor:"hands",children:" in good hands"})]})}),e.jsxs(J,{children:[e.jsxs(K,{onClick:k,children:["Next",e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:d+"#pawprint-1",fill:"white"})})]}),e.jsxs(Q,{onClick:S,children:[e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:d+"#arrow-left",fill:"white"})}),"Cancel"]})]})]})]})]})};export{Fe as default};
