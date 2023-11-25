const AgeForm = ({ onChange }) => {
  const handleInput = event => {
    event.preventDefault();
    const { upToOneOption, upToTwoOption, fromTwoOption } =
      event.currentTarget.elements;
    const ageData = {
      upToOne: upToOneOption.checked ? true : false,
      upToTwo: upToTwoOption.checked ? true : false,
      fromTwo: fromTwoOption.checked ? true : false,
    };
    onChange(ageData);
  };

  return (
    <form onInput={handleInput}>
      <label>
        <input type="checkbox" name="upToOneOption" />
        up to 1 year
      </label>
      <label>
        <input type="checkbox" name="upToTwoOption" />
        up to 2 years
      </label>
      <label>
        <input type="checkbox" name="fromTwoOption" />
        from 2 years
      </label>
    </form>
  );
};

export { AgeForm };
