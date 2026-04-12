import { Todos } from './Todos.js';

const inputContainer = document.getElementById('todo-input-container');
const listContainer = document.getElementById('todo-list-container');

const initialTodos = ['Első teszt feladat', 'Második teszt feladat'];

new Todos(listContainer, inputContainer, initialTodos);