import { envioMail, sendMail } from "./envioMail.js";

const form = document.getElementById("contact-form");
const submit = document.getElementById("button");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const formData = new formData(form, submit);
  sendMail(formData);
});
