import {
  MainContainer,
  SForm,
  WelcomeText,
  SLabel,
  TextArea,
  ScheckBox,
  SLabelCheckBox,
  SCheckboxContainer,
  SButton,
  ErrorMessage,
  SErrorContainer,
} from "./styles";
import { inputs } from "./inputs";
import { useState } from "react";
import FormInput from "./FormInput";
import { validation } from "./validation";
import { checkIfInputsAreValidate } from "./validation";
import { fetchDatas } from "./fetchDatas";
const Form = () => {
  const [errors, setErrors] = useState({
    name: null,
    email: null,
    tel: null,
    company: null,
    yourMessage: null,
    checkbox: null,
  });
  const [state, setState] = useState("Napisz do nas");
  const sendForm = (e) => {
    e.preventDefault();
    checkIfInputsAreValidate(e, setErrors, inputs);
    const areFilled = Object.values(errors).every((value) => value === false);
    if (areFilled) {
      fetchDatas(setState);
    }
  };
  const checkValidationTextArea = (e) => {
    let yourMessageTextArea = e.target;
    validation(yourMessageTextArea, setErrors);
  };
  const checkValidationCheckBox = (e) => {
    let yourPermissionCheckBox = e.target;
    setErrors((data) => ({
      ...data,
      checkbox: !yourPermissionCheckBox.checked,
    }));
  };
  return (
    <>
      <MainContainer>
        <SForm onSubmit={sendForm}>
          <WelcomeText>{state}</WelcomeText>
          {state === "Napisz do nas" && (
            <>
              {inputs.map((input) => {
                return (
                  <FormInput
                    setErrors={setErrors}
                    error={errors[input.name]}
                    key={input.id}
                    input={input}
                  />
                );
              })}

              <SLabel htmlFor="yourMessage">Twoja nazwa firmy</SLabel>
              <TextArea
                id="yourMessage"
                name="yourMessage"
                placeholder="Twoja wiadomość*"
                minLength="1"
                maxLength="100"
                onChange={checkValidationTextArea}
              ></TextArea>
              <SErrorContainer>
                {errors.yourMessage && (
                  <ErrorMessage>Proszę uzupełnić te pole</ErrorMessage>
                )}
              </SErrorContainer>
              <SCheckboxContainer>
                <ScheckBox
                  type="checkbox"
                  id="checkboxPermission"
                  name="checkboxPermission"
                  onChange={checkValidationCheckBox}
                />{" "}
                <SLabelCheckBox htmlFor="checkboxPermission">
                  {" "}
                  Wyrażam zgodę na otrzymywanie informacji, w tym informacji
                  handlowej przesyłanej na podany przeze mnie adres e-mail, a
                  także na używanie telekomukacyjnych urządzeń końcowych dla
                  celów marketingu bezpośredniego Vee Care Sp. zoo. Wyrażenie
                  ww. zgód jest dobrowolne. Zostałem/am także poinformowany/a,
                  że udzielone przeze mnie zgody mogą być odwołane w każdym
                  czasie.
                </SLabelCheckBox>
              </SCheckboxContainer>
              <SErrorContainer>
                {errors.checkbox && (
                  <ErrorMessage>Proszę wypełnić te pole</ErrorMessage>
                )}
              </SErrorContainer>
              <SButton>Wyślij wiadomość</SButton>
            </>
          )}
        </SForm>
      </MainContainer>
    </>
  );
};

export default Form;
