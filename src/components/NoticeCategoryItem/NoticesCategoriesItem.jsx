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
  petData
}) => {
  const [isHover, setIsHover] = useState(false);

  const showPawprint = () => {
    setIsHover(true);
  };

  const hidePawprint = () => {
    setIsHover(false);
  };

  const handleAddToFavourite = (id) => {
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
        <CategoryItemImage src={petData.image} alt="" />
        <CategoryOutput>{petData.category}</CategoryOutput>
        {isLoggedIn && (
          <AddButton onClick={() => handleAddToFavourite(petData._id)}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
            // fill={favourite ? '#54adff' : 'none'}
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
            <Span>{petData.location}</Span>
          </PetInfoOutputItem>
          <PetInfoOutputItem>
            <Span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <use xlinkHref={`${icons}#clock`} />
              </svg>
            </Span>
            <Span>{petData.age}</Span>
          </PetInfoOutputItem>
          <PetInfoOutputItem>
            <Span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <use
                  xlinkHref={`${icons}#${petData.gender === 'male' ? 'male' : 'female'}`}
                />
              </svg>
            </Span>
            <Span>{petData.gender}</Span>
          </PetInfoOutputItem>
        </PetInfoOutput>
      </CategoryItemHeader>
      <CategoryItemFooter>
        <TitleHeader>{petData.title}</TitleHeader>
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
