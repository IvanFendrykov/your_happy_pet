import styled from "styled-components";

export const NewsSection = styled.section`

    background-color: #FEF9F9;
    padding-bottom: 200px;

`

export const HeroTitle = styled.h2`

    color: #111;
    font-size: 48px;
    line-height: normal;
    text-align: center;
    margin-top: 80px;

`

export const NewsSearchForm = styled.form`

    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

`

export const SearchInputNews = styled.input`


    width: 608px;
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

`

export const SearchInputSubmitButton = styled.button`

       background-color: transparent;
       border: none;

`

export const NewsList = styled.ul`

    margin-top: 60px;
    margin-left: 16px;
    margin-right: 16px;
    display: flex;
    flex-wrap: wrap;
    gap: 46px 31px;
    justify-content: center;

`

export const NewsCardContainer = styled.div`

       position: relative;
       width: 395px;
       height: 534px;
       background-color: #fff;
       border-radius: 20px;
       box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);

`

export const NewsCardTopLine = styled.div`

       position: absolute;
       top: -22px;
       width: 395px;
       height: 8px;
       border-radius: 40px;
       background: linear-gradient(290deg, #419EF1 0%, #9BD0FF 107.89%);

`

export const NewsCardImage = styled.img`

       width: 395px;
       height: 252px;
       border-radius: 20px;

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

       margin-top: 68px;
       display: flex;
       aling-items: center;
       justify-content: center;


`