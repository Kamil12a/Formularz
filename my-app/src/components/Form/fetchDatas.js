export async function fetchDatas(setState) {
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
    .then((response) => response.json())
    .then(()=>{
        setState("Dziękujemy")
    })
    .catch(() => {
      setState("Błąd serwera")
    });
}
