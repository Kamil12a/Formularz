export const checkIfInputsAreValidate = (e,setErrors, inputs) => {
  inputs.forEach((i) => {
    let element = e.target[i.name];
    validation(element, setErrors);
  });
  let yourMessageTextArea = e.target["yourMessage"];
  validation(yourMessageTextArea, setErrors);
  let yourPermissionCheckBox = e.target["checkboxPermission"];
  setErrors((data) => ({
    ...data,
    checkbox: !yourPermissionCheckBox.checked,
  }));
};

export const validation = (element, setErrors) => {
  if (element.checkValidity() && element.value !== "") {
    setErrors((data) => ({ ...data, [element.name]: false }));
  } else {
    setErrors((data) => ({ ...data, [element.name]: true }));
  }
};
