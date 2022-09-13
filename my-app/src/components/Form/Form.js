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
  SButton
} from "./styles";
const Form = () => {
  return (
    <MainContainer>
      <SForm>
        <WelcomeText>Napisz do nas</WelcomeText>
        <SLabel htmlFor="name">imię i nazwisko</SLabel>
        <SInput
          type="text"
          id="name"
          name="name"
          placeholder={"Imię i nazwisko"}
        />
        <SLabel htmlFor="e-mail">Adres e-mail</SLabel>
        <SInput
          type="e-mail"
          id="e-mail"
          name="e-mail"
          placeholder={"Adres e-mail *"}
        />
        <SLabel htmlFor="phone">+48 Numer telefonu</SLabel>
        <SInput
          type="phone"
          id="phone"
          name="phone"
          placeholder={"+48 Numer telefonu"}
        />
        <SLabel htmlFor="company">Twoja nazwa firmy</SLabel>

        <SInput
          type="text"
          id="company"
          name="company"
          placeholder={"Twoja nazwa firmy"}
        />
        <SLabel htmlFor="yourMessage">Twoja nazwa firmy</SLabel>

        <TextArea
          id="yourMessage"
          name="yourMessage"
          placeholder="Twoja wiadomość *"
        ></TextArea>
        <SCheckboxContainer>
          <ScheckBox type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />

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
