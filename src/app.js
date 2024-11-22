/* eslint-disable */
import "./style.css";
window.onload = function() {
  let Quien = ["Mi perro", "Mi madre", "El vecino", "Mi hijo", "Mi professor"];
  let Accion = ["comio", "perdio", "robo", "rompio", "arreglo"];
  let Que = ["mi trabajo", "mi telefone", "mis llaves", "mi coche"];
  let Quando = [
    "ayer",
    "despues del trabajo",
    "hoy por la mañana",
    "en la cena"
  ];

  function generarExcusa() {
    let personajes = Quien[Math.floor(Math.random() * Quien.length)];
    let verbos = Accion[Math.floor(Math.random() * Accion.length)];
    let objeto = Que[Math.floor(Math.random() * Que.length)];
    let tiempo = Quando[Math.floor(Math.random() * Quando.length)];

    return `${personajes} ${verbos} ${objeto} ${tiempo}.`;
  }

  //mostra la excusa al cargar la pagina
  document.getElementById("excusa").innerHTML = generarExcusa();

  //al hacer click en el boton actualiza la pagina y cambia la frase
  document.getElementById("botonExcusa").addEventListener("click", function() {
    document.getElementById("excusa").innerHTML = generarExcusa();
  });
};
