
export default class TodoInput {
  constructor(szuloElem, hozzaadCallback) {
    this.szuloElem = szuloElem;
    this.hozzaadCallback = hozzaadCallback;
    this.megjelenit();
  }

  megjelenit() {
    let kod = `
      <input type="text" placeholder="Új feladat">
      <button>Hozzáadás</button>
    `;

    this.szuloElem.innerHTML = kod;

    const input = this.szuloElem.querySelector("input");
    const gomb = this.szuloElem.querySelector("button");

    gomb.addEventListener("click", () => {
      if (input.value.trim() !== "") {
        this.hozzaadCallback(input.value);
        input.value = "";
      }
    });
  }
}