import styled from 'styled-components';

const breakpoints = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1280px',
};

export const Container = styled.div`
  margin-top: 44px;
  text-align: center;
  width: 280px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${breakpoints.tablet}) {
    margin-top: 80px;
    width: 704px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    width: 1248px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const Title = styled.h1`
  font-family: Manrope;
  font-size: 24px;
  color: #111111;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 48px;
  }
`;

export const List = styled.ul`
margin-top: 24px;
  padding: 0;
  display: flex;
  list-style-type: none;
  flex-direction: column;
  gap: 20px;

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: unset;
    flex-wrap: wrap;
    gap: 32px;
    margin-top: 40px;
        justify-content: space-between;
  }

  @media (min-width: ${breakpoints.desktop}) {
    flex-direction: unset;
    flex-wrap: wrap;
    gap: 32px;
    margin-top: 60px;
  }
`;

export const ListElement = styled.li`
  width: 280px;
  border-radius: 40px;
  background-color: #ffffff;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);

  @media (min-width: ${breakpoints.desktop}) {
    width: 380px;
    height: 287px;
  }
`;

export const Link = styled.div`
  text-decoration: none;
`;

export const Image = styled.img`
  max-width: 100px;

  @media (min-width: ${breakpoints.tablet}) {
    max-width: 124px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    max-width: 146px;
  }
`;

export const CartTitle = styled.a`
text-decoration: none;
display: block;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
  padding-top: 16px;
  padding-right: 16px;
  padding-left: 16px;
  font-family: Manrope;
  font-size: 20px;
  color: #54adff;
`;

export const ElementContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding-right: 12px;
  padding-left: 12px;
  padding-top: 16px;
  padding-bottom: 16px;

  @media (min-width: ${breakpoints.desktop}) {
    padding-right: 17px;
    padding-left: 17px;
  }
`;

export const CartList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 12px;
  flex-direction: column;
  font-family: Manrope;
  font-size: 12px;
  color: #111111;
  text-align: initial;
`;

export const CartListElement = styled.li`
  padding: 0;
  display: flex;
  flex-direction: column;
`;

export const H = styled.h3`
  margin: 0;
`;

export const Url = styled.a`
    color: #111;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover,
    &:focus {
        color: #54ADFF;
    }
`;

export const TimeList = styled.ul`
display: flex;
flex-direction: column;
gap: 6px;
border-radius: 8px;
border: 1px solid #54ADFF;
padding: 12px;

@media (min-width: ${breakpoints.tablet}) {
    width: 120px;
    background-color: white;
    top: 1px;
    position: absolute;
    right: 140px;
  }

@media (min-width: ${breakpoints.desktop}) {

    right: 240px;
  }
`

export const BTN = styled.button`
background-color: tomato;
border-radius: 10px;
padding: 5px;
border: none;
cursor: pointer;
transition: background-color 0.3s ease;

&:hover,
    &:focus {
        background-color: orange;
    }
`