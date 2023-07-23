import { useReducer } from "react";
const initialState = {
  value: "",
  isTouched: false,
};
const ReducerFunction = (prevState, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.value, isTouched: prevState.isTouched };
  }
  if (action.type === "USER_BLUR") {
    return { value: prevState.value, isTouched: action.isTouched };
  }
  if (action.type === "USER_RESET") {
    return initialState;
  }
  return initialState;
};
const useInput = (Validate) => {
  const [state, dispatch] = useReducer(ReducerFunction, initialState);
  console.log(state);
  const isValidValue = Validate(state.value);
  const hasError = !isValidValue && state.isTouched;
  const inputChangedHandler = (e) => {
    dispatch({ type: "USER_INPUT", value: e.target.value });
  };
  const inputBlurHandler = () => {
    dispatch({ type: "USER_BLUR", isTouched: true });
  };
  const reset = () => {
    dispatch({ type: "USER_INPUT", value: "" });
    dispatch({ type: "USER_BLUR", isTouched: false });
  };

  return {
    value: state.value,
    hasError,
    inputChangedHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
