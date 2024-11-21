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

  document.getElementById("excusa").innerText = generarExcusa();
};
document.getElementById("botonExcusa").addEventListener("click", function() {
  location.reload();
});
