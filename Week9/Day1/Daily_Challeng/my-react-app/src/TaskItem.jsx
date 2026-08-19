import { useEffect, useRef } from "react";
import { useTaskContext } from "./taskContext";

function TaskItem({ task }) {
  const {
    editingTaskId,
    toggleTask,
    deleteTask,
    startEditing,
    cancelEditing,
    saveEdit,
  } = useTaskContext();

  const editInputRef = useRef(null);
  const editTextRef = useRef(task.text);

  useEffect(() => {
    if (editingTaskId === task.id) {
      editTextRef.current = task.text;
      editInputRef.current?.focus();
      editInputRef.current?.select();
    }
  }, [editingTaskId, task.id, task.text]);

  const handleSave = () => {
    const nextValue = editTextRef.current.trim();
    if (nextValue) {
      saveEdit(task.id, nextValue);
    }
  };

  const isEditing = editingTaskId === task.id;

  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      <div className="task-main">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
          aria-label={`Mark ${task.text} as complete`}
        />

        {isEditing ? (
          <input
            ref={editInputRef}
            type="text"
            defaultValue={task.text}
            onChange={(event) => {
              editTextRef.current = event.target.value;
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleSave();
              }

              if (event.key === "Escape") {
                cancelEditing();
              }
            }}
            className="task-edit-input"
          />
        ) : (
          <span className="task-text">{task.text}</span>
        )}
      </div>

      <div className="task-actions">
        {isEditing ? (
          <>
            <button type="button" className="save-btn" onClick={handleSave}>
              Save
            </button>
            <button
              type="button"
              className="secondary-btn"
              onClick={cancelEditing}
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            type="button"
            className="secondary-btn"
            onClick={() => startEditing(task.id)}
          >
            Edit
          </button>
        )}

        <button
          type="button"
          className="danger-btn"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
