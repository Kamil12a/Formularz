import {
  SInput,
  SLabel,
  InputContainer,
  ErrorMessage,
  InputSection,
  SErrorContainer,
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
        <SErrorContainer>
          {error && <ErrorMessage>{input.errorMessage}</ErrorMessage>}
        </SErrorContainer>
      </InputContainer>
    </InputSection>
  );
};

export default FormInput;
