import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from "./configuracion.js";

export const sendMail = (data) => {
  let params = {
    user_name: data.get("user_name"),
    user_email: data.get("user_email"),
    mailSubject: data.get("mailSubject"),
    message: data.get("message"),
  };

  console.log(params);

  emailjs.send(SERVICE_ID, TEMPLATE_ID, params, PUBLIC_KEY).then(
    function (response) {
      alert("Mensaje enviado correctamente");
    },
    function (error) {
      console.log("fallo..", error);
    }
  );
};

/*
const btn = document.getElementById("button");

function sendMAil() {
    (function () {
        emailjs.init('C1XPliKH9a9-4mVQv')
    })
    const params = {
        name = document.querySelector(#name).value,
        email = document.querySelector(#email).value,
        mailSubject = document.querySelector(#mailSubject).value,
        message = document.querySelector(#message).value
    }
    const serviceID = "service_t9817hn";
    const templateID = "template_c9oik3p";
    public_Key = "C1XPliKH9a9-4mVQv";
    emailjs.send(serviceID, templateID, params).then(res => {
        alert("Enviado Exitosamente!");
    })
        .catch()
}



document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Enviando";

  const serviceID = "service_t9817hn";
  const templateID = "template_c9oik3p";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Enviar mensaje";
      alert("Enviado!!");
    },
    (err) => {
      btn.value = "Enviar mensaje";
      alert(JSON.stringify(err));
    }
  );
});

*/
