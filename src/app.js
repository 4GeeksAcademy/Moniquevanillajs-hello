/* eslint-disable */
import "./style.css";
window.onload = function() {
  let sujetos = ["Mi perro", "Mi madre", "El vecino", "Mi profesor"];
  let acciones = ["comió", "perdió", "robó", "rompió", "arregló"];
  let objetos = ["mi trabajo", "mi teléfono", "mis llaves", "mi coche"];
  let tiempos = [
    "ayer",
    "después del trabajo",
    "hoy por la mañana",
    "en la cena"
  ];

  function obtenerElementoAleatorio(lista) {
    return lista[Math.floor(Math.random() * lista.length)];
  }
  function generarExcusa() {
    let sujetoAleatorio = obtenerElementoAleatorio(sujetos);
    let accionAleatorio = obtenerElementoAleatorio(acciones);
    let objetoAleatorio = obtenerElementoAleatorio(objetos);
    let tiempoAleatorio = obtenerElementoAleatorio(tiempos);

    return `${sujetoAleatorio} ${accionAleatorio} ${objetoAleatorio} ${tiempoAleatorio}.`;
  }

  //mostra la excusa al cargar la pagina
  document.getElementById("excusa").innerHTML = generarExcusa();

  //al hacer click en el boton cambia la frase
  document.getElementById("botonExcusa").addEventListener("click", function() {
    document.getElementById("excusa").innerHTML = generarExcusa();
  });
};
