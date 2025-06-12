import { useEffect, useState } from "react";
import { Form } from "./Form";
import { List } from "./List";
import Filter from "./Filter";
import "./App.css";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title, dueDate) {
    setTodos((currentTodos) => [
      ...currentTodos,
      {
        id: crypto.randomUUID(),
        title,
        completed: false,
        dueDate,
      },
    ]);
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed } : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div className="app">
      <h1 className="header">🌒 Todo List</h1>
      <Form onSubmit={addTodo} />
      <Filter filter={filter} setFilter={setFilter} />
      <List todos={filteredTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}
