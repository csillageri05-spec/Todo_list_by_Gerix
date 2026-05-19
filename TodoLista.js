import TodoElem from "./TodoElem.js";


export default class TodoLista {
  #lista = [];

  constructor(lista, szuloElem) {
    this.#lista = lista;
    this.szuloElem = szuloElem;
    this.megjelenit();
  }

  megjelenit() {
    this.szuloElem.innerHTML = "";

    this.#lista.forEach((szoveg, index) => {
      new TodoElem(
        szoveg,
        index,
        this.szuloElem,
        (i) => this.torol(i)
      );
    });
  }

  hozzaad(szoveg) {
    this.#lista.push(szoveg);
    this.megjelenit();
  }

  torol(index) {
    this.#lista.splice(index, 1);
    this.megjelenit();
  }
}