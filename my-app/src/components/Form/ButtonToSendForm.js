import { SButton } from "./styles";

const ButtonToSendForm = ({ inputDatas }) => {
  const sendForm = (e) => {
    e.preventDefault();
    fetch("http://backend.form.vee.ai/send_form/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "pwoeirslkdfj4783woiery2lk3j4",
      },
      body: JSON.stringify({
        name: "str",
        e_mail: "str.@wp.pl",
        phone_number: "+00000000000",
        company_name: "str",
        message: "str",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return <SButton onClick={sendForm}>Wyślij wiadomość</SButton>;
};

export default ButtonToSendForm;
