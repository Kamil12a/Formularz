export const inputs = [
  {
    type: "text",
    id: "name",
    name: "name",
    placeholder: "Imię i nazwisko",
    id: "name",
    errorMessage: "Proszę wpisać imię i nazwisko.",
    // pattern: "^[a-zA-Z0-9_ ]*$",

  },
  {
    type: "email",
    id: "email",
    name: "email",
    id: "email",
    placeholder: "Adres e-mail *",
    errorMessage: "Proszę wpisać adres e-mail.",
  },
  {
    type: "tel",
    id: "tel",
    name: "tel",
    id: "tel",
    pattern: "[+]{1}[0-9]{2} [0-9]{9}",
    placeholder: "+48 Numer telefonu",
    errorMessage: "Proszę wpisać poprawny numer telefonu. (+xx xxxxxxxxx)",
  },
  {
    name: "company",
    type: "text",
    placeholder: "Twoja nazwa firmy.",
    label: "company",
    id: "company",
    errorMessage: "Proszę wpisać nazwę firmy.",
    pattern: "^[a-zA-Z0-9_ ]*$",
  },
];
