//import { useState } from 'react';
//import { Link } from 'react-router-dom';
import { HeartIcon } from '../../utils/icon';

import {
  CategoryItem,
  CategoryItemHeader,
  CategoryItemFooter,
  CategoryItemImage,
  CategoryOutput,
  AddButton,
  RemoveButton,
  PetInfoOutput,
  PetInfoOutputItem,
  LearnMoreButton,
  TitleHeader,
} from './NoticesCategoriesItem.styled';

const NoticesCategoriesItem = ({
  isLoggedIn,
  title,
  category,
  avatar,
  location,
  age,
  sex,
}) => {
  const onAddToFavourite = () => {
    console.log('added to favourite');
  };

  const onDeleteFromFavourite = () => {
    console.log('removed from favourite');
  };

  const openModal = () => {
    console.log('modal opened');
  };
  //        <CategoryItemImage src={avatar} alt="" />
  return (
    <CategoryItem>
      <CategoryItemHeader>
        <CategoryOutput>{category}</CategoryOutput>
        {isLoggedIn && (
          <AddButton onClick={onAddToFavourite}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <use xlinkHref={HeartIcon} />
            </svg>
          </AddButton>
        )}
        {isLoggedIn && (
          <RemoveButton onClick={onDeleteFromFavourite}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <use xlinkHref={HeartIcon} />
            </svg>
          </RemoveButton>
        )}
        <PetInfoOutput>
          <PetInfoOutputItem>{location}</PetInfoOutputItem>
          <PetInfoOutputItem>{age}</PetInfoOutputItem>
          <PetInfoOutputItem>{sex}</PetInfoOutputItem>
        </PetInfoOutput>
      </CategoryItemHeader>
      <CategoryItemFooter>
        <TitleHeader>{title}</TitleHeader>
        <LearnMoreButton onClick={openModal}>Learn More</LearnMoreButton>
      </CategoryItemFooter>
    </CategoryItem>
  );
};

export { NoticesCategoriesItem };
