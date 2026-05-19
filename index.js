import TodoLista from "./TodoLista.js";
import TodoInput from "./TodoInput.js";

const listaTarolo = document.getElementById("lista");
const inputTarolo = document.getElementById("input");

const kezdoLista = ["Első feladat", "Második feladat"];

const todoLista = new TodoLista(kezdoLista, listaTarolo);

new TodoInput(inputTarolo, (szoveg) => {
  todoLista.hozzaad(szoveg);
});
