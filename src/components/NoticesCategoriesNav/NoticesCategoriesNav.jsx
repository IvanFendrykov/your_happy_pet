import { NavForm, HiddenRadio, NavOption } from './NoticesCategoriesNav.styled';

const NoticesCategoriesNav = ({ isLoggedIn, onChange }) => {
  const handleInput = (event) => {
    event.preventDefault();
    const categoryData = event.currentTarget.elements.categoryOption.value;
    onChange(categoryData);
  };

  return (
    <NavForm onInput={handleInput}>
      <NavOption>
        <HiddenRadio
          type="radio"
          name="categoryOption"
          value=""
          defaultChecked
        />
        all categories
      </NavOption>
      <NavOption>
        <HiddenRadio type="radio" name="categoryOption" value="sell" />
        sell
      </NavOption>
      <NavOption>
        <HiddenRadio type="radio" name="categoryOption" value="lost/found" />
        lost/found
      </NavOption>
      <NavOption>
        <HiddenRadio type="radio" name="categoryOption" value="in good hands" />
        in good hands
      </NavOption>
      {isLoggedIn && (
        <NavOption>
          <HiddenRadio
            type="radio"
            name="categoryOption"
            value="favorite ads"
          />
          favorite ads
        </NavOption>
      )}
      {isLoggedIn && (
        <NavOption>
          <HiddenRadio type="radio" name="categoryOption" value="my ads" />
          my ads
        </NavOption>
      )}
    </NavForm>
  );
};

export { NoticesCategoriesNav };
