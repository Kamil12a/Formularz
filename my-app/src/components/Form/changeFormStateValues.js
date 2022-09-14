export const changeFormStateValues = (event, setInputDatas) => {
  let name = event.target.name;
  let inputValue =
    name === "checkboxPermission" ? event.target.checked : event.target.value;
  setInputDatas((data) => ({ ...data, [name]: inputValue }));
  
};
