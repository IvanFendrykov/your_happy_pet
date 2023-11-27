import styled from 'styled-components';
import AnimalsDesktop from '../../images/main-page/right-animals.png';
import AnimalsMobile from '../../images/main-page/mobile-animals.png';


export const MainContainer = styled.div`
    display: flex;
    justify-content:center;
    height: 100vh;
    background-image: url(${AnimalsDesktop});
    background-size: auto;
    background-position:center bottom 0;
    background-repeat: no-repeat;
    background-size: 100%;  


    @media (min-width: 586px) {
        align-items: normal;
        background-position: center bottom 0;
        background-image: url(${AnimalsDesktop});
        background-size: 70%;
    }

    @media (min-width: 1024px) {    
        background-size: 70%; 
        background-position: right 0 bottom 0;
        justify-content: left;
    }

`

export const TitleH1 = styled.h1`
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

`



export const BrDesktop = styled.br`
    @media (max-width: 1024px) {
        display: none;
    }
`

export const BrTablet = styled.br`
    display: none;

    @media (max-width: 1024px) {
        display: inline-block;
    }
    @media (max-width: 568px) {
        display: none;
    }
`

