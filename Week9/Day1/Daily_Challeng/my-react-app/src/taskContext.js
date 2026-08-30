import { createContext, useContext } from "react";

const TaskContext = createContext(null);

export const useTaskContext = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTaskContext must be used inside a TaskProvider");
  }

  return context;
};

export default TaskContext;
