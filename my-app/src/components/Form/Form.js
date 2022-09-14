import {
  MainContainer,
  SForm,
  WelcomeText,
  SInput,
  SLabel,
  TextArea,
  ScheckBox,
  SLabelCheckBox,
  SCheckboxContainer,
  SButton,
  InputContainer,
  ErrorMessage,
  InputSection,
} from "./styles";
import { inputs } from "./inputs";
import { useState } from "react";
import { changeFormStateValues } from "./changeFormStateValues";
import FormInput from "./FormInput";
const Form = () => {
  const [inputDatas, setInputDatas] = useState({});
  const repond_To_Changes_In_Form = (e) => {
    changeFormStateValues(e, setInputDatas);
    console.log(inputDatas);
  };
  const sendForm = (e) => {
    e.preventDefault();
  };

  return (
    <MainContainer>
      <SForm onSubmit={sendForm}>
        <WelcomeText>Napisz do nas</WelcomeText>
        {inputs.map((input) => {
          return (
            <FormInput
              key={input.id}
              input={input}
              repond_To_Changes_In_Form={repond_To_Changes_In_Form}
            />
          );
        })}
        <SLabel htmlFor="yourMessage">Twoja nazwa firmy</SLabel>
        <TextArea
          id="yourMessage"
          name="yourMessage"
          placeholder="Twoja wiadomość*"
          onChange={repond_To_Changes_In_Form}
        ></TextArea>
        <SCheckboxContainer>
          <ScheckBox
            type="checkbox"
            id="checkboxPermission"
            name="checkboxPermission"
            onChange={repond_To_Changes_In_Form}
          />{" "}
          <SLabelCheckBox htmlFor="checkboxPermission">
            {" "}
            Wyrażam zgodę na otrzymywanie informacji, w tym informacji handlowej
            przesyłanej na podany przeze mnie adres e-mail, a także na używanie
            telekomukacyjnych urządzeń końcowych dla celów marketingu
            bezpośredniego Vee Care Sp. zoo. Wyrażenie ww. zgód jest dobrowolne.
            Zostałem/am także poinformowany/a, że udzielone przeze mnie zgody
            mogą być odwołane w każdym czasie.
          </SLabelCheckBox>
        </SCheckboxContainer>
        <SButton type="submit">Wyślij wiadomość</SButton>
      </SForm>
    </MainContainer>
  );
};

export default Form;
