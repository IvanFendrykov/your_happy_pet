import{j as e,t as c,r as l,i as h,w as O}from"./index-0989b652.js";const N=()=>e.jsxs("form",{children:[e.jsx("input",{type:"text"}),e.jsx("button",{type:"submit"})]}),T=c.form`
  display: flex;
  column-gap: 12px;
`,F=c.input`
  display: none;
`,Q=c.label`
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-radius: 40px;
  background: rgba(140, 200, 253, 0.44);

  color: var(--unnamed, #54adff);
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.56px;
`,E=c.label`
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-radius: 40px;
  border-radius: 40px;
  background: #54adff;

  color: #fef9f9;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.56px;
`,m=({name:o,value:s,checked:t,defaultChecked:r,children:a})=>t?e.jsxs(E,{children:[e.jsx(F,{type:"radio",name:o,value:s,defaultChecked:r}),a]}):e.jsxs(Q,{children:[e.jsx(F,{type:"radio",name:o,value:s}),a]}),$=({isLoggedIn:o,onChange:s})=>{const[t,r]=l.useState(""),a=p=>{p.preventDefault();const n=p.currentTarget.elements.categoryOption.value;r(n),s(n)};return e.jsxs(T,{onInput:a,children:[e.jsx(m,{name:"categoryOption",value:"",checked:t==="",defaultChecked:!0,children:"all categories"}),e.jsx(m,{name:"categoryOption",value:"sell",checked:t==="sell",defaultChecked:!1,children:"sell"}),e.jsx(m,{name:"categoryOption",value:"lost/found",checked:t==="lost/found",defaultChecked:!1,children:"lost/found"}),e.jsx(m,{name:"categoryOption",value:"in good hands",checked:t==="in good hands",defaultChecked:!1,children:"in good hands"}),o&&e.jsx(m,{name:"categoryOption",value:"favorite ads",checked:t==="favorite ads",defaultChecked:!1,children:"favorite ads"}),o&&e.jsx(m,{name:"categoryOption",value:"my ads",checked:t==="my ads",defaultChecked:!1,children:"my ads"})]})},z=c.div`
  width: 152px;
  padding: 14px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;

  border-radius: 20px;
  background: #fff;

  /* Shadow default */
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
`,A=c.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
`,H=c.form`
  display: flex;
  width: 136px;
  padding: 8px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  border-radius: 20px;
  background: var(--blue-light, #cce4fb);

  color: var(--unnamed, #54adff);
  font-feature-settings:
    'clig' off,
    'liga' off;

  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 18.2px */
`,I=c.button`
  display: flex;
  width: 152px;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 40px;
  border: 2px solid #54adff;
  background-color: #fff;

  color: #54adff;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.64px;
`,L=c.button`
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
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.64px;
`,D=c.button`
  display: flex;
  justify-content: flex-start;
  padding: 4px 8px;
  align-items: flex-start;
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

  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 18.2px */
`,R=c.input`
  display: none;
`,Y=c.label`
  display: flex;
  align-items: center;
  column-gap: 12px;
  font-size: 12px;
`,g=({name:o,value:s,checked:t,defaultChecked:r,children:a})=>e.jsxs(Y,{children:[e.jsx(R,{type:"radio",name:o,value:s,defaultChecked:r}),e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("use",{xlinkHref:`${h}#${t?"check-round":"round"}`})}),a]}),U=({onClick:o,onChange:s})=>{const[t,r]=l.useState("anyAge"),a=n=>{n.preventDefault();const u=n.currentTarget.elements.ageOption.value;r(u),s(u)},p=n=>{n.preventDefault(),o()};return e.jsxs(H,{onInput:a,onSubmit:p,children:[e.jsxs(D,{type:"submit",children:[e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("use",{xlinkHref:`${h}#chevron-up`})}),"By age"]}),e.jsx(g,{name:"ageOption",value:"upToOne",checked:t==="upToOne",defaultChecked:!1,children:"up to 1 year"}),e.jsx(g,{name:"ageOption",value:"upToTwo",checked:t==="upToTwo",defaultChecked:!1,children:"up to 2 years"}),e.jsx(g,{name:"ageOption",value:"fromTwo",checked:t==="fromTwo",defaultChecked:!1,children:"from 2 years"}),e.jsx(g,{name:"ageOption",value:"anyAge",checked:t==="anyAge",defaultChecked:!0,children:"any age"})]})},M=({onClick:o,onChange:s})=>{const[t,r]=l.useState(""),a=n=>{n.preventDefault();const u=n.currentTarget.elements.genderOption.value;r(u),s(u)},p=n=>{n.preventDefault(),o()};return e.jsxs(H,{onInput:a,onSubmit:p,children:[e.jsxs(D,{type:"submit",children:[e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("use",{xlinkHref:`${h}#chevron-up`})}),"By gender"]}),e.jsx(g,{name:"genderOption",value:"female",checked:t==="female",defaultChecked:!1,children:"female"}),e.jsx(g,{name:"genderOption",value:"male",checked:t==="male",defaultChecked:!1,children:"male"}),e.jsx(g,{name:"genderOption",value:"",checked:t==="",defaultChecked:!0,children:"any gender"})]})},P=({onChange:o})=>{const[s,t]=l.useState(!1),[r,a]=l.useState(!1),[p,n]=l.useState(!1),[u,w]=l.useState("anyAge"),[x,y]=l.useState(""),v=()=>{t(!s)},k=()=>{a(!r)},j=()=>{n(!p)},C=f=>{w(f)},i=f=>{y(f)};return l.useEffect(()=>{o({age:u,gender:x})},[u,x]),s?e.jsxs(z,{children:[e.jsxs(L,{onClick:v,children:[e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("use",{xlinkHref:`${h}#chevron-up`})}),"Filters"]}),e.jsxs(A,{children:[r?e.jsx(U,{onClick:k,onChange:C}):e.jsxs(D,{onClick:k,children:[e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("use",{xlinkHref:`${h}#chevron-down`})}),"By gender"]}),p?e.jsx(M,{onClick:j,onChange:i}):e.jsxs(D,{onClick:j,children:[e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("use",{xlinkHref:`${h}#chevron-down`})}),"By gender"]})]})]}):e.jsxs(I,{onClick:v,children:["Filter",e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("use",{xlinkHref:`${h}#filters-3`})})]})},_=[{_id:"pet-01",avatar:"https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",title:"Сute dog looking for a home",location:"Ivano - Frankivsk",petBirthday:"2022-07-09",sex:"female",name:"Dog",breed:"friendly",price:"0$",favourite:!0,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",category:"in good hands"},{_id:"pet-02",avatar:"https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",title:"Сute cat looking for a home",location:"Lviv",petBirthday:"2013-04-29",sex:"female",name:"Cat",breed:"lazy",price:"50$",favourite:!1,description:"Morbi a ipsum scelerisque, dapibus arcu et, faucibus nulla",category:"lost/found"},{_id:"pet-03",avatar:"https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",title:"Сute mouse looking for a home",location:"Khmelnytskyi",petBirthday:"2015-03-13",sex:"female",name:"Mouse",breed:"sneaky",price:"100$",favourite:!0,description:"Etiam vitae ex at purus interdum congue",category:"favorite ads"},{_id:"pet-04",avatar:"https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",title:"Сute frog looking for a home",location:"Lviv",petBirthday:"2019-06-06",sex:"female",name:"Frog",breed:"clumsy",price:"0$",favourite:!1,description:"Quisque dignissim augue sed imperdiet consectetur",category:"my ads"},{_id:"pet-05",avatar:"https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",title:"Сute bat looking for a home",location:"Ivano - Frankivsk",petBirthday:"2023-02-24",sex:"male",name:"Bat",breed:"scary",price:"50$",favourite:!1,description:"Vivamus dapibus sed felis in faucibus.",category:"sell"},{_id:"pet-06",avatar:"https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",title:"Сute elephant looking for a home",location:"Ivano - Frankivsk",petBirthday:"2023-03-02",sex:"female",name:"Elephant",breed:"big",price:"100$",favourite:!0,description:"Mauris congue metus eget libero ornare suscipit.",category:"in good hands"},{_id:"pet-07",avatar:"https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",title:"Сute lion looking for a home",location:"Ivano - Frankivsk",petBirthday:"2022-04-18",sex:"female",name:"Lion",breed:"brave",price:"0$",favourite:!0,description:"Donec finibus rhoncus mauris porta euismod.",category:"lost/found"},{_id:"pet-08",avatar:"https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",title:"Сute fox looking for a home",location:"Ivano - Frankivsk",petBirthday:"2016-09-01",sex:"male",name:"Fox",breed:"cunning",price:"50$",favourite:!1,description:"Fusce faucibus aliquet nunc, ut faucibus augue laoreet in.",category:"my ads"},{_id:"pet-09",avatar:"https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",title:"Сute blue whale looking for a home",location:"Chernivtsi",petBirthday:"2023-08-06",sex:"female",name:"Blue Whale",breed:"giant",price:"100$",favourite:!0,description:"Phasellus in dui feugiat, pharetra dolor at, rutrum tortor.",category:"in good hands"},{_id:"pet-10",avatar:"https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",title:"Сute rabbit looking for a home",location:"Ivano - Frankivsk",petBirthday:"2022-11-10",sex:"male",name:"Rabbit",breed:"fast",price:"0$",favourite:!1,description:"Pellentesque quis lectus feugiat, luctus purus ut, semper diam. Integer sagittis mattis dui.",category:"favorite ads"},{_id:"pet-11",avatar:"https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",title:"Сute hedgehog looking for a home",location:"Ivano - Frankivsk",petBirthday:"2023-01-30",sex:"female",name:"Hedgehog",breed:"spiky",price:"50$",favourite:!1,description:"Fusce nec ornare lectus. Morbi id lorem cursus, congue ligula eget, imperdiet metus.",category:"in good hands"},{_id:"pet-12",avatar:"https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",title:"Сute fish looking for a home",location:"Zaporizhzhia",petBirthday:"2020-12-16",sex:"male",name:"Fish",breed:"floatable",price:"100$",favourite:!0,description:"Phasellus fermentum sed ligula sed porta.",category:"lost/found"}],B=!0,q=()=>{const[o,s]=l.useState(_),[t,r]=l.useState(""),[a,p]=l.useState({age:"any age",gender:""}),[n,u]=l.useState(_),w=i=>{r(i)},x=i=>{p(i)},y=i=>{const f=new Date(i),d=new Date;return new Date(d-f).getFullYear()-1970},v=(i,f)=>{const d=y(i.petBirthday);return{upToOne:d<1,upToTwo:d<2,fromTwo:d>=2,anyAge:!0}[f]},k=i=>{console.log("onAddToFavourite"+i)},j=i=>{console.log("onDeleteFromFavourite"+i)},C=i=>{console.log("onLearnMore"+i)};return l.useEffect(()=>{const f=o.filter(d=>(!t||d.category===t)&&v(d,a.age)&&(!a.gender||d.sex===a.gender)).map(d=>{const b=y(d.petBirthday),S=`${b} year${b!==1?"s":""}`;return{...d,age:S}});u(f)},[o,t,a]),e.jsxs("div",{children:[e.jsx("h2",{children:"Find your favorite pet"}),e.jsx(N,{}),e.jsxs("div",{children:[e.jsx($,{isLoggedIn:B,onChange:w}),e.jsx(P,{onChange:x}),e.jsx("button",{children:"Add pet"})]}),e.jsx(O,{petsData:n,isLoggedIn:B,onAddToFavourite:k,onDelete:j,onLearnMore:C})]})};export{q as default};
