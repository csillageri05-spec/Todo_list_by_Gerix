
export default class TodoElem {
  #szoveg;
  #index;

  constructor(szoveg, index, szuloElem, torlesCallback) {
    this.#szoveg = szoveg;
    this.#index = index;
    this.szuloElem = szuloElem;
    this.torlesCallback = torlesCallback;

    this.megjelenit();
  }

  megjelenit() {
    let kod = `
      <div class="todo-elem">
        <span>${this.#szoveg}</span>
        <button>Törlés</button>
      </div>
    `;

    this.szuloElem.insertAdjacentHTML("beforeend", kod);

    const elem = this.szuloElem.lastElementChild;
    const gomb = elem.querySelector("button");

    gomb.addEventListener("click", () => {
      this.torlesCallback(this.#index);
    });
  }
}