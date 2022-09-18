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
} from "./styles";
import { inputs } from "./inputs";
import { useState } from "react";
import FormInput from "./FormInput";
import { validation } from "./validation";
const Form = () => {
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    tel: false,
    company: false,
  });
  const sendForm = (e) => {
    e.preventDefault();
    inputs.forEach((i) => {
      let element = e.target[i.name];
      validation(element, setErrors);
    });
  };

  return (
    <MainContainer>
      <SForm onSubmit={sendForm}>
        <WelcomeText>Napisz do nas</WelcomeText>
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
        <SButton>Wyślij wiadomość</SButton>
      </SForm>
    </MainContainer>
  );
};

export default Form;

// fetch("http://backend.form.vee.ai/send_form/", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "x-api-key": "pwoeirslkdfj4783woiery2lk3j4",
//   },
//   body: JSON.stringify({
//     name: "str",
//     e_mail: "str.@wp.pl",
//     phone_number: "+00000000000",
//     company_name: "str",
//     message: "str",
//   }),
// })
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });
