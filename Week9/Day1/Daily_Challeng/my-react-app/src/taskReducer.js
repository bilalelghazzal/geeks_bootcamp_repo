export const initialTasks = [
  { id: 1, text: "Plan the sprint", completed: false },
  { id: 2, text: "Review the project brief", completed: true },
  { id: 3, text: "Write unit tests", completed: false },
];

export const initialState = {
  tasks: initialTasks,
  filter: "all",
};

export function taskReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK": {
      const newText = action.payload.trim();
      if (!newText) return state;

      return {
        ...state,
        tasks: [
          ...state.tasks,
          { id: Date.now(), text: newText, completed: false },
        ],
      };
    }

    case "TOGGLE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task,
        ),
      };

    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case "EDIT_TASK": {
      const editedText = action.payload.text.trim();
      if (!editedText) return state;

      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, text: editedText } : task,
        ),
      };
    }

    case "FILTER_TASKS":
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
}
