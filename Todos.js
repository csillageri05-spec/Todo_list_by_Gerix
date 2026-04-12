import { TodoInput } from './TodoInput.js';
import { Todo } from './Todo.js';
import { attachRemoveListener, attachAddListener } from './fuggvenyek.js';

export class Todos {
    #list;
    #pElem;
    #iPElem;

    constructor(pElem, iPElem, list = []) {
        this.#pElem = pElem;
        this.#iPElem = iPElem;
        this.#list = list;

        this.viewInput();
        this.viewTodos();
        this.addEvent();
        this.removeEvent();
    }

    viewTodos() {
        this.#pElem.innerHTML = '';
        this.#list.forEach((text, index) => {
            new Todo(text, this.#pElem, index);
        });
    }

    viewInput() {
        this.#iPElem.innerHTML = '';
        new TodoInput(this.#iPElem);
    }

    removeEvent() {
        return attachRemoveListener(this.#list, () => this.viewTodos());
    }

    addEvent() {
        return attachAddListener(this.#list, () => this.viewTodos());
    }
}