
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
import {Pawprint1} from '../../images/svg/svgIcons.js';



function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <Container>
      <TextConteiner>
        <Title>
          Ooops!
          <Paragraf> This page not found &#9785;</Paragraf>
        </Title>
      </TextConteiner>
      <ImageContainer>
        <Image alt="not found" />
      </ImageContainer>
      <BottomWrapper>
        <Btn type="button" onClick={() => navigate('/')}>
          To main page
          <Pawprint1 />
        </Btn>
      </BottomWrapper>
    </Container>
  );
}

export default NotFoundPage;