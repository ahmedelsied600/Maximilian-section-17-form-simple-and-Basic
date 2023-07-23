import useInput from "../hooks/useInput";

const BasicForm = (props) => {
  const {
    value: changedFirstName,
    hasError: FirstNamehasError,
    inputChangedHandler: FirstNameChangedHandler,
    inputBlurHandler: FirstNameBlurHandler,
    reset: FirstNameReset,
  } = useInput((value) => value.trim() !== "");
  const {
    value: changedLastName,
    hasError: LastNamehasError,
    inputChangedHandler: LastNameChangedHandler,
    inputBlurHandler: LastNameBlurHandler,
    reset: LastNameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: changedEmail,
    hasError: EmailhasError,
    inputChangedHandler: EmailChangedHandler,
    inputBlurHandler: EmailBlurHandler,
    reset: EmailReset,
  } = useInput((value) => value.trim() !== "" && value.includes("@"));

  const submitHandler = (e) => {
    e.preventDefault();
    FirstNameReset();
    LastNameReset();
    EmailReset();
  };

  const getFormStyle = (hasError) =>
    `form-control ${hasError ? "invalid" : ""}`;
  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={getFormStyle(FirstNamehasError)}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={changedFirstName}
            onChange={FirstNameChangedHandler}
            onBlur={FirstNameBlurHandler}
          />
          {FirstNamehasError && (
            <div className="error-text">This first name is invalid</div>
          )}
        </div>
        <div className={getFormStyle(LastNamehasError)}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={changedLastName}
            onChange={LastNameChangedHandler}
            onBlur={LastNameBlurHandler}
          />
          {LastNamehasError && (
            <div className="error-text">This lastname is invalid</div>
          )}
        </div>
      </div>
      <div className={getFormStyle(EmailhasError)}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={changedEmail}
          onChange={EmailChangedHandler}
          onBlur={EmailBlurHandler}
        />
        {EmailhasError && (
          <div className="error-text">This email is invalid</div>
        )}
      </div>
      <div className="form-actions">
        <button
          disabled={FirstNamehasError || LastNamehasError || EmailhasError}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default BasicForm;
