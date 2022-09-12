import {
  MainContainer,
  SForm,
  WelcomeText,
  SInput,
  SLabel,
  TextArea,
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
      </SForm>
    </MainContainer>
  );
};

export default Form;
