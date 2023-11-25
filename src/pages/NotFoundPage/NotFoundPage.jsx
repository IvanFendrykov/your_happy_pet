
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
import { ArrowLeft } from '../../utils/icon.js';

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
        <Btn
          type="button"
          onClick={() => navigate('/')}
        >
          To main page
          
        </Btn>
        <div><ArrowLeft fill="white" /></div>

      </BottomWrapper>
    </Container>
  );
}

export default NotFoundPage;
