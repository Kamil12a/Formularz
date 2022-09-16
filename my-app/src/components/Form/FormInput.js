import {
  SInput,
  SLabel,
  InputContainer,
  ErrorMessage,
  InputSection,
} from "./styles";
import { useRef } from "react";
const FormInput = ({ input, repond_To_Changes_In_Form }) => {
  const errorInput = useRef(null);
  const handleFocus = (e) => {
    if (e.target.checkValidity()) {
      errorInput.current.style.display = "none";
    } else {
      errorInput.current.style.display = "block";
    }
  };
  return (
    <InputSection>
      <InputContainer>
        <SLabel htmlFor={input.name}></SLabel>
        <SInput
          onChange={handleFocus}
          onBlur={repond_To_Changes_In_Form}
          {...input}
        ></SInput>
        <ErrorMessage ref={errorInput}>{input.errorMessage}</ErrorMessage>
      </InputContainer>
    </InputSection>
  );
};

export default FormInput;
