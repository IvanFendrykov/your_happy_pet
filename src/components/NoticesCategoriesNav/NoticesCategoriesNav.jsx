const NoticesCategoriesNav = () => {
  return (
    <form>
      <label>
        <input type="radio" name="noticesCategoriesNavItem" />
        sell
      </label>
      <label>
        <input type="radio" name="noticesCategoriesNavItem" />
        lost/found
      </label>
      <label>
        <input type="radio" name="noticesCategoriesNavItem" />
        in good hands
      </label>
      <label>
        <input type="radio" name="noticesCategoriesNavItem" />
        favorite ads
      </label>
      <label>
        <input type="radio" name="noticesCategoriesNavItem" />
        my ads
      </label>
    </form>
  );
};

export { NoticesCategoriesNav };
