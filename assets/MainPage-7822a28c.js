import{s as i,j as t}from"./index-ed10fdd6.js";const e="https://ivanfendrykov.github.io/your_happy_pet/assets/right-animals-ce7dfe95.png",o=i.div`
    display: flex;
    justify-content:center;
    height: 100vh;
    background-image: url(${e});
    background-size: auto;
    background-position:center bottom 0;
    background-repeat: no-repeat;
    background-size: 100%;  


    @media (min-width: 586px) {
        align-items: normal;
        background-position: center bottom 0;
        background-image: url(${e});
        background-size: 70%;
    }

    @media (min-width: 1024px) {    
        background-size: 70%; 
        background-position: right 0 bottom 0;
        justify-content: left;
    }

`,a=i.h1`
    display: block;
    margin-top:50%;
    color: var(--primary-text-color);
    word-spacing: 5px;
    font-family: var(--main-font);
    font-weight: 700;

    font-size: 2.3rem;
    line-height: 3rem;
    text-shadow: none;


    @media (min-width: 586px) {
            margin-top: 20%;
            font-size: 4rem;
            line-height: 5rem;
    }

    @media (min-width: 768px) {
        font-size: 4rem;
        line-height: 5rem;
        font-weight: 700;
        text-shadow: none;
        margin-top:10%;

    }

    @media (min-width: 1024px) {
        margin-top: 5%;
        font-size: 6rem;
        line-height: 7.5rem;
        font-weight: 700;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    }

`,n=i.br`
    @media (max-width: 1024px) {
        display: none;
    }
`,r=i.br`
    display: none;

    @media (max-width: 1024px) {
        display: inline-block;
    }
    @media (max-width: 568px) {
        display: none;
    }
`,m=()=>t.jsx(t.Fragment,{children:t.jsx(o,{children:t.jsxs(a,{children:["Take good care ",t.jsx(n,{}),"of",t.jsx(r,{})," your small",t.jsx(n,{})," pets"]})})});export{m as default};
