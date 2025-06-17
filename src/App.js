import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import TodosView from "./TodosView";
import ContactView from "./ContactView";
import './App.css';

const App = () => {
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

export default App;




