import { dispatchAddEvent } from './fuggvenyek.js';

export class TodoInput {
    constructor(ipElem) {
        this.pElem = ipElem;
        this.inputElem = document.createElement('input');
        this.buttonElem = document.createElement('button');
        this.buttonElem.innerText = 'Hozzáadás';

        this.pElem.appendChild(this.inputElem);
        this.pElem.appendChild(this.buttonElem);

        this.buttonElem.onclick = () => {
            if (this.inputElem.value.trim() !== "") {
                this.add("add", this.inputElem.value);
                this.inputElem.value = "";
            }
        };
    }

    add(eventName, detailValue) {
        return dispatchAddEvent(eventName, detailValue);
    }
}