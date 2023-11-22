
import React from 'react';
import {
  Image,
  ImageContainer,
  Title,
  Paragraf,
  BottomWrapper,
  TextConteiner,
  Container,
  Btn,
} from './NotFoundPage.styled';
import { useNavigate } from 'react-router-dom';
// import { PawPrintIcon } from 'shared/utils/icons';

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <Container>
      <TextConteiner>
        <Title>
          Ooops!
          <Paragraf> This page not found :(</Paragraf>
        </Title>
      </TextConteiner>
      <ImageContainer>
        <Image alt="not found" />
      </ImageContainer>
      <BottomWrapper>
        <Btn type="button" onClick={() => navigate('/')}>
          To main page
          <svg width="24" fill="#FEF9F9" height="24">
            <use xlinkHref="#pawprint-1" />
          </svg>
        </Btn>
      </BottomWrapper>
    </Container>
  );
}

export default NotFoundPage;
