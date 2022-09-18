export const validation=(element,setErrors)=>{
    if (element.checkValidity() && element.value !== "") {
      setErrors((data) => ({ ...data, [element.name]: false }));
    }
    else{
      setErrors((data) => ({ ...data, [element.name]: true }));
    }
  }