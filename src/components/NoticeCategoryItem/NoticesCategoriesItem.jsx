import { useState } from 'react';
import icons from '../../images/symbol-defs.svg';

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
  Span,
  LearnMoreButton,
  TitleHeader,
} from './NoticesCategoriesItem.styled';

const NoticesCategoriesItem = ({
  id,
  onAddToFavourite,
  onDelete,
  onLearnMore,
  isLoggedIn,
  title,
  category,
  avatar,
  location,
  age,
  sex,
  favourite,
}) => {
  const [isHover, setIsHover] = useState(false);

  const showPawprint = () => {
    setIsHover(true);
  };

  const hidePawprint = () => {
    setIsHover(false);
  };

  const handleAddToFavourite = () => {
    onAddToFavourite(id);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const openModal = () => {
    onLearnMore(id);
  };

  return (
    <CategoryItem>
      <CategoryItemHeader>
        <CategoryItemImage src={avatar} alt="" />
        <CategoryOutput>{category}</CategoryOutput>
        {isLoggedIn && (
          <AddButton onClick={handleAddToFavourite}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill={favourite ? '#54adff' : 'none'}
            >
              <use xlinkHref={`${icons}#heart`} />
            </svg>
          </AddButton>
        )}
        {isLoggedIn && (
          <RemoveButton onClick={handleDelete}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <use xlinkHref={`${icons}#trash-2`} />
            </svg>
          </RemoveButton>
        )}
        <PetInfoOutput>
          <PetInfoOutputItem>
            <Span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <use xlinkHref={`${icons}#location-1`} />
              </svg>
            </Span>
            <Span>{location}</Span>
          </PetInfoOutputItem>
          <PetInfoOutputItem>
            <Span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <use xlinkHref={`${icons}#clock`} />
              </svg>
            </Span>
            <Span>{age}</Span>
          </PetInfoOutputItem>
          <PetInfoOutputItem>
            <Span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <use
                  xlinkHref={`${icons}#${sex === 'male' ? 'male' : 'female'}`}
                />
              </svg>
            </Span>
            <Span>{sex}</Span>
          </PetInfoOutputItem>
        </PetInfoOutput>
      </CategoryItemHeader>
      <CategoryItemFooter>
        <TitleHeader>{title}</TitleHeader>
        <LearnMoreButton
          onClick={openModal}
          onMouseOver={showPawprint}
          onMouseLeave={hidePawprint}
        >
          Learn More
          {isHover && (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff">
              <use xlinkHref={`${icons}#pawprint-1`} />
            </svg>
          )}
        </LearnMoreButton>
      </CategoryItemFooter>
    </CategoryItem>
  );
};

export { NoticesCategoriesItem };
