import { useState } from 'react';

const NoticesCategoriesNav = () => {
  return (
    <form>
      <label>
        <input type="radio" name="noticesCategoriesNavItem" value="sell" />
        sell
      </label>
      <label>
        <input
          type="radio"
          name="noticesCategoriesNavItem"
          value="lost/found"
        />
        lost/found
      </label>
      <label>
        <input
          type="radio"
          name="noticesCategoriesNavItem"
          value="in good hands"
        />
        in good hands
      </label>
      <label>
        <input
          type="radio"
          name="noticesCategoriesNavItem"
          value="favorite ads"
        />
        favorite ads
      </label>
      <label>
        <input type="radio" name="noticesCategoriesNavItem" value="my ads" />
        my ads
      </label>
    </form>
  );
};

export { NoticesCategoriesNav };
