// Seleccionar el formulario con su id
var formulario = document.getElementById("contact-form");

// Añadir un evento submit al formulario
formulario.addEventListener("submit", function (event) {
  // Evitar que se envíen los datos sin validarlos
  event.preventDefault();

  // Seleccionar los campos del formulario con su id y obtener su valor
  var nombreUsuario = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var asunto = document.getElementById("mailSubject").value;
  var mensaje = document.getElementById("message").value;

  // Crear variables con expresiones regulares que definan el formato válido de cada campo
  var regexNombreUsuario = /^[a-zA-Z0-9]$/; // Solo letras y números
  var regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; // Formato estándar de email//
});
