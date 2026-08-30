import { useMemo, useReducer, useState } from "react";
import TaskContext from "./taskContext";
import { initialState, taskReducer } from "./taskReducer";

export function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const [editingTaskId, setEditingTaskId] = useState(null);

  const filteredTasks = useMemo(() => {
    switch (state.filter) {
      case "active":
        return state.tasks.filter((task) => !task.completed);
      case "completed":
        return state.tasks.filter((task) => task.completed);
      default:
        return state.tasks;
    }
  }, [state.filter, state.tasks]);

  const addTask = (taskText) => {
    dispatch({ type: "ADD_TASK", payload: taskText });
  };

  const toggleTask = (taskId) => {
    dispatch({ type: "TOGGLE_TASK", payload: taskId });
  };

  const deleteTask = (taskId) => {
    dispatch({ type: "DELETE_TASK", payload: taskId });
    if (editingTaskId === taskId) {
      setEditingTaskId(null);
    }
  };

  const startEditing = (taskId) => {
    setEditingTaskId(taskId);
  };

  const cancelEditing = () => {
    setEditingTaskId(null);
  };

  const saveEdit = (taskId, newText) => {
    dispatch({ type: "EDIT_TASK", payload: { id: taskId, text: newText } });
    setEditingTaskId(null);
  };

  const filterTasks = (filterValue) => {
    dispatch({ type: "FILTER_TASKS", payload: filterValue });
  };

  const value = {
    tasks: filteredTasks,
    filter: state.filter,
    editingTaskId,
    addTask,
    toggleTask,
    deleteTask,
    startEditing,
    cancelEditing,
    saveEdit,
    filterTasks,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}
