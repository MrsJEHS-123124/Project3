import React, { useState } from "react";
import HealthConcernSelector from "./HealthConcernSelector";
import TodoList from "./TodoList";

const healthOptions = {
  stress: ["Take a walk", "Drink water", "Meditate 10 mins"],
  sprainedAnkle: ["Rest foot", "Ice ankle", "Compression wrap"],
  weightLoss: ["Plan meals", "Walk 30 mins", "Log meals"],
};

const TodosView = () => {
  const [selectedConcern, setSelectedConcern] = useState(["Select a health concern"]);
  const [tasks, setTasks] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");

  const handleSelect = (concern) => {
    setSelectedConcern(concern);
    setTasks(healthOptions[concern] || []);
    setCompleted([]);
  };

  const toggleTask = (task) => {
    setCompleted((prev) =>
      prev.includes(task) ? prev.filter((t) => t !== task) : [...prev, task]
    );
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      setTasks([...tasks, newTask.trim()]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (task) => {
    setTasks((prev) => prev.filter((t) => t !== task));
    setCompleted((prev) => prev.filter((t) => t !== task));
  };

  const getFilteredTasks = () => {
    if (filter === "completed")
      return tasks.filter((task) => completed.includes(task));
    if (filter === "incomplete")
      return tasks.filter((task) => !completed.includes(task));
    return tasks;
  };

  const filteredTasks = getFilteredTasks();

  return (
    <div>
      <HealthConcernSelector onSelect={handleSelect} />

      <form onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Add custom task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <div className="filters">
        <button
          onClick={() => setFilter("all")}
          className={filter === "all" ? "active" : ""}
        >
          All
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={filter === "completed" ? "active" : ""}
        >
          Completed
        </button>
        <button
          onClick={() => setFilter("incomplete")}
          className={filter === "incomplete" ? "active" : ""}
        >
          Incomplete
        </button>
      </div>

      <TodoList
        tasks={filteredTasks}
        completed={completed}
        onToggle={toggleTask}
        onDelete={handleDeleteTask}
      />
    </div>
  );
};

export default TodosView;