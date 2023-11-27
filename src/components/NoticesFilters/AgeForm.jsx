const AgeForm = ({ onChange }) => {
  const handleInput = event => {
    event.preventDefault();
    const ageData = event.currentTarget.elements.ageOption.value;
    onChange(ageData);
  };

  return (
    <form onInput={handleInput}>
      <label>
        <input type="radio" name="ageOption" value="upToOne" />
        up to 1 year
      </label>
      <label>
        <input type="radio" name="ageOption" value="upToTwo" />
        up to 2 years
      </label>
      <label>
        <input type="radio" name="ageOption" value="fromTwo" />
        from 2 years
      </label>
      <label>
        <input type="radio" name="ageOption" value="anyAge" defaultChecked />
        any age
      </label>
    </form>
  );
};

export { AgeForm };
