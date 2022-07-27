import './styles.css';
import {Todo, TodoList} from './classes/index'
import { crearTodoHtml } from './js/componentes';



export const todoList =new TodoList();

todoList.todos.forEach(todo => crearTodoHtml(todo));

// console.log('Todos: ', todoList.todos);

// todoList.todos[1].imprimirClase();