import { useState } from "react";
import {
  SInput,
  SLabel,
  InputContainer,
  ErrorMessage,
  InputSection,
} from "./styles";
import { useRef } from "react";
const FormInput = ({ input, repond_To_Changes_In_Form }) => {
  const [focused, setFocused] = useState(false);
  const textInput = useRef(null);
  const handleFocus = (e) => {
    if (e.target.checkValidity()) {
      textInput.current.style.display = "none";
    } else {
      textInput.current.style.display = "block";
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
        <ErrorMessage ref={textInput}>{input.errorMessage}</ErrorMessage>
      </InputContainer>
    </InputSection>
  );
};

export default FormInput;
