const GenderForm = ({ onChange }) => {
  const handleInput = event => {
    event.preventDefault();
    const genderData = event.currentTarget.elements.genderOption.value;
    onChange(genderData);
  };

  return (
    <form onInput={handleInput}>
      <label>
        <input type="radio" name="genderOption" value="female" />
        female
      </label>
      <label>
        <input type="radio" name="genderOption" value="male" />
        male
      </label>
      <label>
        <input type="radio" name="genderOption" value="" defaultChecked />
        any gender
      </label>
    </form>
  );
};

export { GenderForm };
