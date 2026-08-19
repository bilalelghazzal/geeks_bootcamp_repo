import { useRef, useState } from "react";
import "./App.css";
import TaskItem from "./TaskItem";
import { useTaskContext } from "./taskContext";
import { TaskProvider } from "./TaskProvider";

function App() {
  const { tasks, addTask, filter, filterTasks } = useTaskContext();
  const [taskText, setTaskText] = useState("");
  const taskInputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(taskText);
    setTaskText("");
    taskInputRef.current?.focus();
  };

  return (
    <main className="app-shell">
      <section className="task-manager">
        <header className="task-header">
          <h1>Task Manager</h1>
          <span className="task-count">{tasks.length} tasks</span>
        </header>

        <form className="task-form" onSubmit={handleSubmit}>
          <input
            ref={taskInputRef}
            type="text"
            value={taskText}
            onChange={(event) => setTaskText(event.target.value)}
            placeholder="Add a new task"
            aria-label="Add a new task"
          />
          <button type="submit">Add</button>
        </form>

        <div className="filter-bar" aria-label="Filter tasks by status">
          {["all", "active", "completed"].map((option) => (
            <button
              key={option}
              type="button"
              className={filter === option ? "filter-btn active" : "filter-btn"}
              onClick={() => filterTasks(option)}
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </button>
          ))}
        </div>

        <ul className="task-list">
          {tasks.length > 0 ? (
            tasks.map((task) => <TaskItem key={task.id} task={task} />)
          ) : (
            <li className="empty-state">No tasks match this filter.</li>
          )}
        </ul>
      </section>
    </main>
  );
}

export default function RootApp() {
  return (
    <TaskProvider>
      <App />
    </TaskProvider>
  );
}
