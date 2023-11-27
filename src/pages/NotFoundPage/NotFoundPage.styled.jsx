import styled from 'styled-components';

// імпорт контентних зображень
import mobile from '../../images/imgNotFound/notfound-img-mobile-2x.png';
import tablet from '../../images/imgNotFound/notfound-img-tablet-2x.png';
import desctop from '../../images/imgNotFound/notfound-img-desctop-2x.png';

export const Container = styled.div`
  width: 100%;
  background-repeat: no-repeat;
  background-size: contain;

`;

export const Title = styled.h2`
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
`;

export const Paragraf = styled.p`
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
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
`;

export const Image = styled.img`
  width: 280px;
  height: 123px;
  content: url('${mobile}');

  @media (min-width: 768px) {
    content: url('${tablet}');
    width: 704px;
    height: 308px;
  }
  @media (min-width: 1280px) {
    content: url('${desctop}');
    width: 822px;
    height: 360px;
  }
`;

export const BottomWrapper = styled.div`
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
    background: ${(prop) => prop.theme.colors.gradientBlue};
  }
  :focus {
    background-color: ${(prop) => prop.theme.colors.gradientBlue};
  }
`;

export const Btn = styled.button`
  width: 248px;
  display:flex;
  align-items: center;

  padding: 8px 28px;

  background-color: ${(prop) => prop.theme.colors.blue};
  border: none;
  border-radius: 40px;
  text-align: center;
  gap: 12px;


  font-weight: 600;
  font-size: 20px;
  line-height: 1.35;

  letter-spacing: 0.04em;

  color: ${(prop) => prop.theme.colors.white};

  @media screen and (max-width: 767px) {
    margin-top: 41px;
    margin-bottom: 24px;
  }
  svg {
    fill: #fdf7f2;
  }

`;

export const TextConteiner = styled.div`
margin:0`;
