import{s as i,u as n,j as e}from"./index-f8050d9b.js";import{S as o}from"./pawprint1-d4c3be22.js";const a="https://ivanfendrykov.github.io/your_happy_pet/assets/notfound-img-mobile-2x-860fb928.png",p="https://ivanfendrykov.github.io/your_happy_pet/assets/notfound-img-tablet-2x-83686b8a.png",s="https://ivanfendrykov.github.io/your_happy_pet/assets/notfound-img-desctop-2x-273e2b7b.png",r=i.div`
  width: 100%;
  background-repeat: no-repeat;
  background-size: contain;

`,x=i.h2`
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
`,d=i.p`
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
`,l=i.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
`,h=i.img`
  width: 280px;
  height: 123px;
  content: url('${a}');

  @media (min-width: 768px) {
    content: url('${p}');
    width: 704px;
    height: 308px;
  }
  @media (min-width: 1280px) {
    content: url('${s}');
    width: 822px;
    height: 360px;
  }
`,g=i.div`
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
    :hover {
    background: ${t=>t.theme.colors.gradientBlue};
  }
  :focus {
    background-color: ${t=>t.theme.colors.gradientBlue};
  }
`,c=i.button`
  width: 248px;
  display:flex;
  align-items: center;

  padding: 8px 28px;

  background-color: ${t=>t.theme.colors.blue};
  border: none;
  border-radius: 40px;
  text-align: center;
  gap: 12px;


  font-weight: 600;
  font-size: 20px;
  line-height: 1.35;

  letter-spacing: 0.04em;

  color: ${t=>t.theme.colors.white};

  @media screen and (max-width: 767px) {
    margin-top: 41px;
    margin-bottom: 24px;
  }
  svg {
    fill: #fdf7f2;
  }

`,m=i.div`
margin:0`;function y(){const t=n();return e.jsxs(r,{children:[e.jsx(m,{children:e.jsxs(x,{children:["Ooops!",e.jsx(d,{children:" This page not found ☹"})]})}),e.jsx(l,{children:e.jsx(h,{alt:"not found"})}),e.jsx(g,{children:e.jsxs(c,{type:"button",onClick:()=>t("/"),children:["To main page",e.jsx(o,{})]})})]})}export{y as default};
