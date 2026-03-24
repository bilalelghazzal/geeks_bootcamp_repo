class TodoList {
    constructor() {
        this.tasks = [];
    }

    addTask(description) {
        const task = {
            description,
            completed: false,
            index: this.tasks.length
        };
        this.tasks.push(task);
    }

    markTaskComplete(index) {
        if (index >= 0 && index < this.tasks.length) {
            this.tasks[index].completed = true;
        }
    }

    listTasks() {
        return  this.tasks.map(t=>({...t}));

        
    }
}
export { TodoList };