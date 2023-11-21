import { privateKey, publicKey, serviceID, templateID } from "./config-form.js";

const btn = document.getElementById("button");

emailjs.init(publicKey);
window.onload = function () {
  document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        alert("Mensaje enviado correctamente!");
        resetFormulario();
      },
      (err) => {
        console.log(err);
        alert(JSON.stringify(err));
      }
    );
  });
};

function resetFormulario() {
  document.getElementById("form").reset();
}
