import useInput from "../hooks/useInput";
const SimpleInput = (props) => {
  const {
    changedValue: changedName,
    hasError: NamehasError,
    inputChangedHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput((value) => value.trim() !== "");

  const nameSubmitHandler = (e) => {
    e.preventDefault();
    nameReset();
  };
  return (
    <form onSubmit={nameSubmitHandler}>
      <div className={`form-control ${NamehasError ? "invalid" : ""}`}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          value={changedName}
        />
        {NamehasError && <div className="error-text">This name is invalid</div>}
      </div>
      <div className="form-actions">
        <button disabled={NamehasError}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
