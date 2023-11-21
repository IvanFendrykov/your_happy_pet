import { useState } from 'react';
import { Link } from 'react-router-dom';

const NoticesCategoriesItem = ({
  onAddToFavourite,
  onDeleteFromFavourite,
  description,
  category,
  place,
  age,
  gender,
}) => {
  return (
    <div>
      <div>
        <img src="" alt="" />
        <div>{category}</div>
        <button onClick={onAddToFavourite}></button>
        <button onClick={onDeleteFromFavourite}></button>
        <div>
          <div>{place}</div>
          <div>{age}</div>
          <div>{gender}</div>
        </div>
      </div>
      <div>
        <h3>{description}</h3>
        <Link to="">Learn more</Link>
      </div>
    </div>
  );
};

export { NoticesCategoriesItem };
