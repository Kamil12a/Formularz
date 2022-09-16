import {
  MainContainer,
  SForm,
  WelcomeText,
  SLabel,
  TextArea,
  ScheckBox,
  SLabelCheckBox,
  SCheckboxContainer,
} from "./styles";
import { inputs } from "./inputs";
import { useState } from "react";
import { changeFormStateValues } from "./changeFormStateValues";
import FormInput from "./FormInput";
import ButtonToSendForm from "./ButtonToSendForm";
const Form = () => {
  const [inputDatas, setInputDatas] = useState({
    name: "",
    yourMessage: "",
    email: "",
    tel: "",
    company: "",
    checked: "false",
  });
  const repond_To_Changes_In_Form = (e) => {
    changeFormStateValues(e, setInputDatas);
  };
  return (
    <MainContainer>
      <SForm>
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
          onBlur={repond_To_Changes_In_Form}
          minLength="1"
          maxLength="100"
        ></TextArea>
        <SCheckboxContainer>
          <ScheckBox
            type="checkbox"
            id="checkboxPermission"
            name="checkboxPermission"
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
        <ButtonToSendForm inputDatas={inputDatas} />
      </SForm>
    </MainContainer>
  );
};

export default Form;
