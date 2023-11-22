import{s as i,a as n,j as t}from"./index-12ea59f3.js";const o="https://ivanfendrykov.github.io/your_happy_pet/assets/notfound-img-mobile-2x-860fb928.png",p="https://ivanfendrykov.github.io/your_happy_pet/assets/notfound-img-tablet-2x-83686b8a.png",a="https://ivanfendrykov.github.io/your_happy_pet/assets/notfound-img-desctop-2x-273e2b7b.png",s=i.div`
  width: 100%;
  background-repeat: no-repeat;
  background-size: contain;

`,h=i.h2`
  margin-top: 80px;
  display: block;
  align-items: center;
  justify-content: center;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  text-align: center;

  @media (min-width: 768px) {
    display: flex;
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;
    text-align: inherit;
  }

  @media (min-width: 1280px) {
    display: flex;
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;
  }
`,r=i.p`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  text-align: center;

  @media (min-width: 768px) {
    display: flex;
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;
    text-align: inherit;
    margin-left: 10px;
  }

  @media (min-width: 1280px) {
    display: flex;
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;
  }
`,x=i.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
`,d=i.img`
  width: 280px;
  height: 123px;
  content: url('${o}');

  @media (min-width: 768px) {
    content: url('${p}');
    width: 704px;
    height: 308px;
  }
  @media (min-width: 1280px) {
    content: url('${a}');
    width: 822px;
    height: 360px;
  }
`,l=i.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;

  @media (min-width: 768px) {
    margin-top: 68px;
  }
  @media (min-width: 1280px) {
    margin-top: 18px;
  }
`,g=i.button`
  width: 248px;

  padding: 8px 28px;

  background: ${e=>e.theme.colors.blue};
  border: none;
  border-radius: 40px;

  font-weight: 600;
  font-size: 20px;
  line-height: 1.35;

  letter-spacing: 0.04em;

  color: ${e=>e.theme.colors.white};

  @media screen and (max-width: 767px) {
    margin-top: 41px;
    margin-bottom: 24px;
  }
`,m=i.div`
margin:0`;function f(){const e=n();return t.jsxs(s,{children:[t.jsx(m,{children:t.jsxs(h,{children:["Ooops!",t.jsx(r,{children:" This page not found :("})]})}),t.jsx(x,{children:t.jsx(d,{alt:"not found"})}),t.jsx(l,{children:t.jsxs(g,{type:"button",onClick:()=>e("/"),children:["To main page",t.jsx("svg",{width:"24",fill:"#FEF9F9",height:"24",children:t.jsx("use",{xlinkHref:"#pawprint-1"})})]})})]})}export{f as default};
