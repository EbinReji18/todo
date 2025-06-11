import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Form } from "./Form.jsx";
import { List } from "./List.jsx";
import "./App.css";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("TODOS");
    return saved ? JSON.parse(saved) : [];
  });
  const [filter, setFilter] = useState("all");
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("THEME");
    return saved || "light";
  });

  // Persist todos and theme
  useEffect(() => {
    localStorage.setItem("TODOS", JSON.stringify(todos));
  }, [todos]);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("THEME", theme);
  }, [theme]);

  const addTodo = (title, dueDate) =>
    setTodos(t => [
      ...t,
      { id: crypto.randomUUID(), title, dueDate, completed: false }
    ]);

  const toggleTodo = (id, completed) =>
    setTodos(t => t.map(x => x.id === id ? { ...x, completed } : x));

  const deleteTodo = id => setTodos(t => t.filter(x => x.id !== id));

  const editTodo = (id, title) =>
    setTodos(t => t.map(x => x.id === id ? { ...x, title } : x));

  const clearTodos = () => setTodos([]);

  const filtered = todos
    .filter(x => filter === "all" ? true :
         filter === "active" ? !x.completed : x.completed)
    .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

  return (
    <div className="app">
      <header>
        <h1>Todo App</h1>
        <button onClick={() => setTheme(t => t === "light" ? "dark" : "light")} className="btn">
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </header>

      <Form onSubmit={addTodo} />
      <div className="controls">
        <div className="filters">
          {["all", "active", "completed"].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={filter === f ? "active" : ""}
            >
              {f[0].toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
        <button className="btn btn-danger" onClick={clearTodos}>Clear All</button>
      </div>

      <List
        todos={filtered}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </div>
  );
}

App.propTypes = {
  // nothing to declare here; higher level
};
