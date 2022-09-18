import {
  SInput,
  SLabel,
  InputContainer,
  ErrorMessage,
  InputSection,
} from "./styles";
import { validation } from "./validation";

const FormInput = ({ input, error, setErrors }) => {
  const checkValidation = (e) => {
    let input = e.target;
    validation(input, setErrors);
  };
  return (
    <InputSection>
      <InputContainer>
        <SLabel htmlFor={input.name}></SLabel>
        <SInput onChange={checkValidation} {...input} required={false}></SInput>
        {error && <ErrorMessage>{input.errorMessage}</ErrorMessage>}
      </InputContainer>
    </InputSection>
  );
};

export default FormInput;
