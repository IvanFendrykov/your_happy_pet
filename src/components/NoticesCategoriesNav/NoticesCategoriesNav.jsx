const NoticesCategoriesNav = ({ isLoggedIn, onChange }) => {
  const handleInput = event => {
    event.preventDefault();
    const categoryData = event.currentTarget.elements.categoryOption.value;
    onChange(categoryData);
  };

  return (
    <form onInput={handleInput}>
      <label>
        <input type="radio" name="categoryOption" value="" defaultChecked />
        all categories
      </label>
      <label>
        <input type="radio" name="categoryOption" value="sell" />
        sell
      </label>
      <label>
        <input type="radio" name="categoryOption" value="lost/found" />
        lost/found
      </label>
      <label>
        <input type="radio" name="categoryOption" value="in good hands" />
        in good hands
      </label>
      {isLoggedIn && (
        <label>
          <input type="radio" name="categoryOption" value="favorite ads" />
          favorite ads
        </label>
      )}
      {isLoggedIn && (
        <label>
          <input type="radio" name="categoryOption" value="my ads" />
          my ads
        </label>
      )}
    </form>
  );
};

export { NoticesCategoriesNav };
