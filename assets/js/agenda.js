const formulario = document.getElementById("formulario");
const registro = document.getElementById("registro");
const exito = document.getElementById("exito");

formulario.addEventListener("submit", async (e) => {
  e.preventDefault();

  //Petición para escribir filas
  try {
    const respuesta = await fetch(
      "https://sheet.best/api/sheets/1003e001-ca40-403a-a004-85e770e0f6fb",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Nombre: formulario.nombre.value,
          Correo: formulario.correo.value,
          Telefono: formulario.telefono.value,
        }),
      }
    );
    console.log(respuesta);
    const contenido = await respuesta.json();
    console.log(contenido);
  } catch (error) {
    console.log(error);
  }

  /*
   //leer filas (Puede descomentar el código y hacer las pruebas en la consola)
  try {
    const respuesta = await fetch(
      "https://sheet.best/api/sheets/1003e001-ca40-403a-a004-85e770e0f6fb"
    );
    //console.log(respuesta);
    const contenido = await respuesta.json();
    console.log(contenido);
  } catch (error) {
    console.log(error);
  }

   //Borrar filas
  try {
    const respuesta = await fetch(
      "https://sheet.best/api/sheets/1003e001-ca40-403a-a004-85e770e0f6fb/0",
      {
        method: "DELETE",
      }
    );

    const contenido = await respuesta.json();
    console.log(contenido);
  } catch (error) {
    console.log(error);
  }

  //Actualizar filas (en este caso selecciona la fila /3 al final de la ruta de conexion)
  try {
    const respuesta = await fetch(
      "https://sheet.best/api/sheets/1003e001-ca40-403a-a004-85e770e0f6fb/3",
      {
        method: "PATCH",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Nombre: formulario.nombre.value,
          Correo: formulario.correo.value,
          Telefono: formulario.telefono.value,
        }),
      }
    );

    const contenido = await respuesta.json();
    console.log(contenido);
  } catch (error) {
    console.log(error);
  }
  */

  registro.classList.remove("activo");
  exito.classList.add("activo");
});
