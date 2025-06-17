import { Routes, Route, Link } from "react-router-dom";
import TodosView from "./TodosView";
import ContactView from "./ContactView";
import HealthConcernSelector from "./HealthConcernSelector";
import React, { useState } from "react";
import TodoList from "./components/TodoList";
import "./styles/App.scss";

const healthOptions = {
  stress: ["Practice deep breathing", "Take a walk", "Limit caffeine", "Journal your thoughts"],
  sprainedAnkle: ["Rest and elevate", "Apply ice", "Use compression", "Avoid putting weight on it"],
  weightLoss: ["Drink more water", "Exercise regularly", "Eat whole foods", "Track calories"]
};

const App = () => {
  const [selectedConcern, setSelectedConcern] = useState("");
  const [tasks, setTasks] = useState([]);
  const [completed, setCompleted] = useState([]);

  const handleSelect = (concern) => {
    setSelectedConcern(concern);
    setTasks(healthOptions[concern] || []);
    setCompleted([]);
    console.log(concern);
  };

  const toggleTask = (task) => {
    setCompleted((prev) =>
      prev.includes(task) ? prev.filter((t) => t !== task) : [...prev, task]
    );
  };

  return (
    <>
      <nav>
        <Link to="/todos">📝 Todos</Link>
        <Link to="/contact">📬 Contact</Link>
      </nav>

      <Routes>
        <Route path="/todos" element={<TodosView />} />
        <Route path="/contact" element={<ContactView />} />
      </Routes>
    </>
  );
};
