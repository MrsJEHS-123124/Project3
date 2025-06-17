import React from "react";

const TodoList = ({ tasks, completed, onToggle, onDelete }) => {
  return (
    <div className="todo-list">
      <ul>
        {tasks.map((task, idx) => (
          <li key={idx}>
            <span
              className={completed.includes(task) ? "completed" : ""}
              onClick={() => onToggle(task)}
            >
              {task}
            </span>
            <button onClick={() => onDelete(task)} className="delete-btn">
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;