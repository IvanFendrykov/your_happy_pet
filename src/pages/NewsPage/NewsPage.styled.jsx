import styled from "styled-components";

export const NewsSection = styled.section`

       padding-bottom: 100px;

`

export const HeroTitle = styled.h2`

    color: #111;
    line-height: normal;
    text-align: center;
    margin-top: 40px;

    @media screen and (min-width: 768px) {
    font-size: 48px;
    margin-top: 80px;
    }

`

export const NewsSearchForm = styled.form`

    position: relative;
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

`

export const GoBackBtn = styled.button`

    cursor: pointer;
    border: none;
    background-color: transparent;
    color: #419EF1;
    display: flex;
    align-items: center;
    gap: 5px;
    transition: color linear 250ms;       

    &:hover {
       color: #9BD0FF;
    }

`

export const GoBackBtnSvg = styled.use`

    stroke: #419EF1;

`

export const SearchNewsWrapper = styled.div`

       position: relative;
    display: flex;
    align-items: center;

`

export const SearchInputNews = styled.input`


       
    width: 280px;
    color: #888;
    height: 44px;
    font-family: Inter;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0.8px;
    border: none;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
    padding-left: 20px;

    &:focus-visible {
        outline: none;
    }

    &:placeholder {
        color: #888;
        font-size: 20px;
        font-weight: 400;
        letter-spacing: 0.8px;
       }

       @media screen and (min-width: 768px) {
              width: 680px;
       }

`

export const SearchInputClearBtn = styled.button`

       width: 24px;
       height: 24px;
       position: absolute;
       right: 50px;
       border: none;
       background-color: transparent;
       color: #888;
       transition: color linear 250ms;

       &:hover {
              color: #c92e3b;
       }

`

export const SearchInputSubmitButton = styled.button`

       width: 24px;
       height: 24px;
       padding: 0;
       position: absolute;
       right: 10px;
       background-color: transparent;
       border: none;

       @media screen and (min-width: 768px) {
       right: 20px;
       }

`

export const NewsList = styled.ul`

    margin-top: 44px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 768px) {
       flex-direction: row;
       margin-top: 62px;
    flex-wrap: wrap;
    gap: 46px 32px;
       }

       @media screen and (min-width: 1280px) {
       margin-top: 82px;
       }

`

export const NewsCardContainer = styled.div`

       position: relative;
       width: 280px;
       height: 566px;
       background-color: #fff;
       border-radius: 20px;
       box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);

       @media screen and (min-width: 768px) {
       width: 336px;
       height: 544px;
       }

       @media screen and (min-width: 1280px) {
       width: 395px;
       height: 534px;
       }

`

export const NewsCardTopLine = styled.div`

       position: absolute;
       top: -22px;
       width: 280px;
       height: 8px;
       border-radius: 40px;
       background: linear-gradient(290deg, #419EF1 0%, #9BD0FF 107.89%);

       @media screen and (min-width: 768px) {
       width: 336px;
       }

       @media screen and (min-width: 1280px) {
       width: 395px;
       }

`

export const NewsCardImage = styled.img`

       width: 280px;
       height: 252px;
       border-radius: 20px;

       @media screen and (min-width: 768px) {
       width: 336px;
       }

       @media screen and (min-width: 1280px) {
       width: 395px;
       }

`

export const NewsCardContentWrapper = styled.div`

       height: 254px;
       padding-left: 12px;
       padding-right: 12px;
       margin-top: 16px;
       display: flex;
       flex-direction: column;
       justify-content: space-between;
`

export const NewsCardTextWrapper = styled.div`

       display: flex;
       flex-direction: column;
       gap: 16px;

`

export const NewsCardTitle = styled.h3`

       color: #111;
       font-size: 24px;
       letter-spacing: -0.24px;

`

export const NewsCardSubTitle = styled.p`

        max-width: 371px;
       color: #111;

`

export const NewsCardFooter = styled.ul`

       display: flex;
       align-items: center;
       justify-content: space-between;

`

export const NewsCardFooterDate = styled.p`

       color: #888;

`

export const NewsCardFooterLink = styled.a`

       text-decoration: none;
       color: #54ADFF;
       font-weight: 500;

`

export const PaginationContainer = styled.div`

       margin-top: 40px;
       display: flex;
       aling-items: center;
       justify-content: center;

       @media screen and (min-width: 768px) {
       margin-top: 60px;
       }

       @media screen and (min-width: 1280px) {
       margin-top: 68px;
       }

`