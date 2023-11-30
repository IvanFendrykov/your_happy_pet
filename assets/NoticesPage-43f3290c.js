import{w as n,y as D,j as e,i as u,r as d,N as Y,z as P}from"./index-159b26c4.js";const{fonts:U}=D,G=n.form`
  margin-top: 40px;
  margin-inline: auto;
  margin-bottom: 43px;
  max-width: 608px;
  height: 44px;
  display: flex;
  align-items: center;
  border-radius: 20px;
  background: #fff;
  padding-left: 20px;
  padding-right: 20px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
`,M=n.input`
  width: 100%;
  height: 44px;
  border: none;
  background: none;
  outline: none;

  color: #888;
  font-family: ${U.regular}, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.8px;

  ::placeholder {
    color: #888;
    font-family: Inter, sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.8px;
  }
`,q=n.button`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  border: none;
  background: none;
`,W=()=>e.jsxs(G,{children:[e.jsx(M,{type:"text",placeholder:"Search"}),e.jsx(q,{type:"submit",children:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("use",{xlinkHref:`${u}#search`})})})]}),{fonts:T,fontSizes:I,colors:E}=D,V=n.form`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`,N=n.input`
  display: none;
`,K=n.label`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: 25px;
  padding: 8px 16px;

  border-radius: 40px;
  background: rgba(140, 200, 253, 0.44);

  color: ${E.blue};
  font-family: ${T.medium}, sans-serif;
  font-size: ${I.s};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.56px;
`,Z=n.label`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: 25px;
  padding: 8px 16px;

  border-radius: 40px;
  border-radius: 40px;
  background: ${E.blue};

  color: #fef9f9;
  font-family: ${T.medium}, sans-serif;
  font-size: ${I.s};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.56px;
`,y=({name:i,value:c,checked:t,defaultChecked:o,children:s})=>t?e.jsxs(Z,{children:[e.jsx(N,{type:"radio",name:i,value:c,defaultChecked:o}),s]}):e.jsxs(K,{children:[e.jsx(N,{type:"radio",name:i,value:c}),s]}),J=({isLoggedIn:i,onChange:c})=>{const[t,o]=d.useState(""),s=p=>{p.preventDefault();const f=p.currentTarget.elements.categoryOption.value;o(f),c(f)};return e.jsxs(V,{onInput:s,children:[e.jsx(y,{name:"categoryOption",value:"",checked:t==="",defaultChecked:!0,children:"all categories"}),e.jsx(y,{name:"categoryOption",value:"sell",checked:t==="sell",defaultChecked:!1,children:"sell"}),e.jsx(y,{name:"categoryOption",value:"lost/found",checked:t==="lost/found",defaultChecked:!1,children:"lost/found"}),e.jsx(y,{name:"categoryOption",value:"in good hands",checked:t==="in good hands",defaultChecked:!1,children:"in good hands"}),i&&e.jsx(y,{name:"categoryOption",value:"favorite ads",checked:t==="favorite ads",defaultChecked:!1,children:"favorite ads"}),i&&e.jsx(y,{name:"categoryOption",value:"my ads",checked:t==="my ads",defaultChecked:!1,children:"my ads"})]})},{fonts:_,fontSizes:H,fontWeights:B,colors:Q}=D,X=n.div`
  width: 152px;
  padding: 14px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;

  border-radius: 20px;
  background: #fff;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
`,ee=n.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
`,L=n.form`
  display: flex;
  width: 136px;
  padding: 8px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  border-radius: 20px;
  background: ${Q.blue_light};

  color: #54adff;
  font-feature-settings:
    'clig' off,
    'liga' off;

  font-family: ${_.normal}, sans-serif;
  font-size: ${H.s};
  font-style: normal;
  font-weight: ${B.normal};
  line-height: 130%; /* 18.2px */
`,te=n.button`
  display: flex;
  width: 152px;
  padding: 4px 10px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 40px;
  border: 2px solid ${Q.blue};
  background-color: #fff;

  color: #54adff;
  font-family: ${_.bold}, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: ${B.bold};
  line-height: normal;
  letter-spacing: 0.64px;

  :hover,
  :focus {
    padding: 6px 12px;
    border: none;
    border-radius: 40px;
    background: linear-gradient(290deg, #419ef1 0%, #9bd0ff 107.89%);
    color: #fef9f9;
  }
`,oe=n.button`
  display: flex;
  width: 152px;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 40px;
  border: none;
  background-color: #fff;

  color: #54adff;
  font-family: ${_.bold}, sans-serif;
  font-size: ${H.m};
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.64px;
`,w=n.button`
  display: flex;
  justify-content: flex-start;
  padding: 4px 8px;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  width: 100%;
  border: none;
  border-radius: 20px;
  background: #cce4fb;

  color: #54adff;
  font-feature-settings:
    'clig' off,
    'liga' off;

  font-family: Inter, sans-serif;
  font-size: ${H.s};
  font-style: normal;
  font-weight: ${B.normal};
  line-height: 130%; /* 18.2px */
`,ne=n.input`
  display: none;
`,ae=n.label`
  display: flex;
  align-items: center;
  column-gap: 12px;
  font-size: 12px;
`,m=({name:i,value:c,checked:t,children:o})=>e.jsxs(ae,{children:[e.jsx(ne,{type:"radio",name:i,value:c}),e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("use",{xlinkHref:`${u}#${t?"check-round":"round"}`})}),o]}),ie=({onClick:i,onChange:c,initialValue:t})=>{const[o,s]=d.useState(t),p=r=>{r.preventDefault();const h=r.currentTarget.elements.ageOption.value;s(h),c(h)},f=r=>{r.preventDefault(),i()};return e.jsxs(L,{onInput:p,onSubmit:f,children:[e.jsxs(w,{type:"submit",children:[e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("use",{xlinkHref:`${u}#chevron-up`})}),"By age"]}),e.jsx(m,{name:"ageOption",value:"upToOne",checked:o==="upToOne",children:"up to 1 year"}),e.jsx(m,{name:"ageOption",value:"upToTwo",checked:o==="upToTwo",children:"up to 2 years"}),e.jsx(m,{name:"ageOption",value:"fromTwo",checked:o==="fromTwo",children:"from 2 years"}),e.jsx(m,{name:"ageOption",value:"anyAge",checked:o==="anyAge",children:"any age"})]})},se=({onClick:i,onChange:c,initialValue:t})=>{const[o,s]=d.useState(t),p=r=>{r.preventDefault();const h=r.currentTarget.elements.genderOption.value;s(h),c(h)},f=r=>{r.preventDefault(),i()};return e.jsxs(L,{onInput:p,onSubmit:f,children:[e.jsxs(w,{type:"submit",children:[e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("use",{xlinkHref:`${u}#chevron-up`})}),"By gender"]}),e.jsx(m,{name:"genderOption",value:"female",checked:o==="female",children:"female"}),e.jsx(m,{name:"genderOption",value:"male",checked:o==="male",children:"male"}),e.jsx(m,{name:"genderOption",value:"",checked:o==="",children:"any gender"})]})},re=({onChange:i})=>{const[c,t]=d.useState(!1),[o,s]=d.useState(!1),[p,f]=d.useState(!1),[r,h]=d.useState("anyAge"),[v,b]=d.useState(""),[$,j]=d.useState(!1),S=()=>{j(!0)},F=()=>{j(!1)},a=()=>{t(!c)},g=()=>{s(!o)},l=()=>{f(!p)},x=C=>{h(C)},k=C=>{b(C)};return d.useEffect(()=>{i({age:r,gender:v})},[r,v]),c?e.jsxs(X,{children:[e.jsxs(oe,{onClick:a,children:[e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("use",{xlinkHref:`${u}#chevron-up`})}),"Filters"]}),e.jsxs(ee,{children:[o?e.jsx(ie,{onClick:g,onChange:x,initialValue:r}):e.jsxs(w,{onClick:g,children:[e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("use",{xlinkHref:`${u}#chevron-down`})}),"By gender"]}),p?e.jsx(se,{onClick:l,onChange:k,initialValue:v}):e.jsxs(w,{onClick:l,children:[e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("use",{xlinkHref:`${u}#chevron-down`})}),"By gender"]})]})]}):e.jsxs(te,{onClick:a,onMouseOver:S,onMouseLeave:F,children:["Filter",e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",stroke:$?"#FEF9F9":"#54adff",children:e.jsx("use",{xlinkHref:`${u}#filters-3`})})]})},{fonts:A,fontSizes:le,fontWeights:R,colors:de}=D,ce=n.h3`
  margin-top: 90px;
  color: #111;
  font-family: ${A.bold}, sans-serif;
  font-size: 48px;
  font-style: normal;
  font-weight: ${R.bold};
  text-align: center;
  line-height: normal;
`,pe=n.div`
  margin-bottom: 42px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  row-gap: 16px;
`,fe=n.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 16px;
  row-gap: 12px;
`,he=n(Y)`
  text-decoration: none;
  display: flex;
  width: 129px;
  height: 25px;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-radius: 40px;
  background: ${de.blue};

  color: #fef9f9;
  font-family: ${A.bold}, sans-serif;
  font-size: ${le.m};
  font-style: normal;
  font-weight: ${R.bold};
  line-height: normal;
  letter-spacing: 0.64px;
`,O=[{_id:"pet-01",avatar:"https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",title:"Сute dog looking for a home",location:"Ivano - Frankivsk",petBirthday:"2022-07-09",sex:"female",name:"Dog",breed:"friendly",price:"0$",favourite:!0,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",category:"in good hands"},{_id:"pet-02",avatar:"https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",title:"Сute cat looking for a home",location:"Lviv",petBirthday:"2013-04-29",sex:"female",name:"Cat",breed:"lazy",price:"50$",favourite:!1,description:"Morbi a ipsum scelerisque, dapibus arcu et, faucibus nulla",category:"lost/found"},{_id:"pet-03",avatar:"https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",title:"Сute mouse looking for a home",location:"Khmelnytskyi",petBirthday:"2015-03-13",sex:"female",name:"Mouse",breed:"sneaky",price:"100$",favourite:!0,description:"Etiam vitae ex at purus interdum congue",category:"favorite ads"},{_id:"pet-04",avatar:"https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",title:"Сute frog looking for a home",location:"Lviv",petBirthday:"2019-06-06",sex:"female",name:"Frog",breed:"clumsy",price:"0$",favourite:!1,description:"Quisque dignissim augue sed imperdiet consectetur",category:"my ads"},{_id:"pet-05",avatar:"https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",title:"Сute bat looking for a home",location:"Ivano - Frankivsk",petBirthday:"2023-02-24",sex:"male",name:"Bat",breed:"scary",price:"50$",favourite:!1,description:"Vivamus dapibus sed felis in faucibus.",category:"sell"},{_id:"pet-06",avatar:"https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",title:"Сute elephant looking for a home",location:"Ivano - Frankivsk",petBirthday:"2023-03-02",sex:"female",name:"Elephant",breed:"big",price:"100$",favourite:!0,description:"Mauris congue metus eget libero ornare suscipit.",category:"in good hands"},{_id:"pet-07",avatar:"https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",title:"Сute lion looking for a home",location:"Ivano - Frankivsk",petBirthday:"2022-04-18",sex:"female",name:"Lion",breed:"brave",price:"0$",favourite:!0,description:"Donec finibus rhoncus mauris porta euismod.",category:"lost/found"},{_id:"pet-08",avatar:"https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",title:"Сute fox looking for a home",location:"Ivano - Frankivsk",petBirthday:"2016-09-01",sex:"male",name:"Fox",breed:"cunning",price:"50$",favourite:!1,description:"Fusce faucibus aliquet nunc, ut faucibus augue laoreet in.",category:"my ads"},{_id:"pet-09",avatar:"https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",title:"Сute blue whale looking for a home",location:"Chernivtsi",petBirthday:"2023-08-06",sex:"female",name:"Blue Whale",breed:"giant",price:"100$",favourite:!0,description:"Phasellus in dui feugiat, pharetra dolor at, rutrum tortor.",category:"in good hands"},{_id:"pet-10",avatar:"https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",title:"Сute rabbit looking for a home",location:"Ivano - Frankivsk",petBirthday:"2022-11-10",sex:"male",name:"Rabbit",breed:"fast",price:"0$",favourite:!1,description:"Pellentesque quis lectus feugiat, luctus purus ut, semper diam. Integer sagittis mattis dui.",category:"favorite ads"},{_id:"pet-11",avatar:"https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",title:"Сute hedgehog looking for a home",location:"Ivano - Frankivsk",petBirthday:"2023-01-30",sex:"female",name:"Hedgehog",breed:"spiky",price:"50$",favourite:!1,description:"Fusce nec ornare lectus. Morbi id lorem cursus, congue ligula eget, imperdiet metus.",category:"in good hands"},{_id:"pet-12",avatar:"https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",title:"Сute fish looking for a home",location:"Zaporizhzhia",petBirthday:"2020-12-16",sex:"male",name:"Fish",breed:"floatable",price:"100$",favourite:!0,description:"Phasellus fermentum sed ligula sed porta.",category:"lost/found"}],z=!0,ge=()=>{const[i,c]=d.useState(O),[t,o]=d.useState(""),[s,p]=d.useState({age:"any age",gender:""}),[f,r]=d.useState(O),h=a=>{o(a)},v=a=>{p(a)},b=a=>{const g=new Date(a),l=new Date;return new Date(l-g).getFullYear()-1970},$=(a,g)=>{const l=b(a.petBirthday);return{upToOne:l<1,upToTwo:l<2,fromTwo:l>=2,anyAge:!0}[g]},j=a=>{console.log("onAddToFavourite"+a)},S=a=>{console.log("onDeleteFromFavourite"+a)},F=a=>{console.log("onLearnMore"+a)};return d.useEffect(()=>{const g=i.filter(l=>(!t||l.category===t)&&$(l,s.age)&&(!s.gender||l.sex===s.gender)).map(l=>{const x=b(l.petBirthday),k=`${x} year${x!==1?"s":""}`;return{...l,age:k}});r(g)},[i,t,s]),e.jsxs("div",{children:[e.jsx(ce,{children:"Find your favorite pet"}),e.jsx(W,{}),e.jsxs(pe,{children:[e.jsx(J,{isLoggedIn:z,onChange:h}),e.jsxs(fe,{children:[e.jsx(re,{onChange:v}),e.jsxs(he,{to:"http://localhost:5173/your_happy_pet/add-pet",children:["Add pet",e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"#fff",children:e.jsx("use",{xlinkHref:`${u}#plus-small-white`})})]})]})]}),e.jsx(P,{petsData:f,isLoggedIn:z,onAddToFavourite:j,onDelete:S,onLearnMore:F})]})};export{ge as default};
