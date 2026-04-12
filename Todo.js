import { dispatchRemoveEvent, markAsReady } from './fuggvenyek.js';

export class Todo {
    #text;
    #index;

    constructor(text, pElem, index) {
        this.#text = text;
        this.#index = index;
        this.pElem = pElem;

        this.textElem = document.createElement('span');
        this.textElem.innerText = this.#text;

        this.OKElem = document.createElement('button');
        this.OKElem.innerText = 'Kész';

        this.deleteElem = document.createElement('button');
        this.deleteElem.innerText = 'Törlés';

        const wrapper = document.createElement('div');
        wrapper.appendChild(this.textElem);
        wrapper.appendChild(this.OKElem);
        wrapper.appendChild(this.deleteElem);
        this.pElem.appendChild(wrapper);

        this.deleteElem.onclick = () => {
            this.remove("remove", this.#index);
        };

        this.OKElem.onclick = () => {
            this.ready("remove");
        };
    }

    remove(eventName, detailIndex) {
        return dispatchRemoveEvent(eventName, detailIndex);
    }

    ready(action) {
        markAsReady(this.textElem);
    }
}