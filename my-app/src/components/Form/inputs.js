export const inputs = [
  {
    type: "text",
    id: "name",
    name: "name",
    placeholder: "Imię i nazwisko",
    id: "name",
    errorMessage: "Proszę wpisać imię i nazwisko.",
    required:true,
    pattern:"[A-Za-z]{3}",
    focused:"false"
  },
  {
    type: "email",
    id: "email",
    name: "email",
    id: "email",
    placeholder: "Adres e-mail *",
    errorMessage: "Proszę wpisać adres e-mail.",
    required:true
  },
  {
    type: "tel",
    id: "tel",
    name: "tel",
    id: "tel",
    pattern:"[0-9]{3}-[0-9]{3}-[0-9]{4}",
    placeholder: "+48 Numer telefonu",
    errorMessage: "Proszę wpisać numer telefonu.",
    required:true
  },
  {
    name: "company",
    type: "text",
    placeholder: "Twoja nazwa firmy.",
    label: "company",
    id: "company",
    errorMessage: "Proszę wpisać nazwę firmy.",
    required:true
  },
];
