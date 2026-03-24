import { TodoList } from './todo.js';

const myTodoList = new TodoList();

// Add tasks
myTodoList.addTask('Buy groceries');
myTodoList.addTask('Walk the dog');
myTodoList.addTask('Read a book');

// (index 1)
myTodoList.markTaskComplete(1);

// List all tasks
const tasks = myTodoList.listTasks();
console.log('My Todo List:');
tasks.forEach(task => {
    console.log(
        `${task.index + 1}. ${task.description} - ${task.completed ? 'Completed' : 'Incomplete'}`
    );
});