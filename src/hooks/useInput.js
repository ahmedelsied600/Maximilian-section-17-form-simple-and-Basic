import { useState } from "react";

const useInput = (Validate) => {
  const [changedValue, setChangedValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const isValidValue = Validate(changedValue);
  const hasError = !isValidValue && isTouched;
  const inputChangedHandler = (e) => {
    setChangedValue(e.target.value);
  };
  const inputBlurHandler = () => {
    setIsTouched(true);
  };
  const reset = () => {
    setChangedValue("");
    setIsTouched(false);
  };

  return {
    changedValue,
    hasError,
    inputChangedHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
