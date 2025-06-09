import { useEffect, useState } from "react";
import { Form } from "./Form.jsx";
import { List } from "./List.jsx";
import "./App.css";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function addTodo(newItem, dueDate) {
    setTodos(currentTodos => [
      ...currentTodos,
      {
        id: crypto.randomUUID(),
        title: newItem,
        dueDate: dueDate || "",
        completed: false
      }
    ]);
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos =>
      currentTodos.map(todo =>
        todo.id === id ? { ...todo, completed } : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos(currentTodos => currentTodos.filter(todo => todo.id !== id));
  }

  function clearTodos() {
    setTodos([]);
  }

  return (
    <div>
      <Form onSubmit={addTodo} />
      <br />
      <h1 className="header">Todo List</h1>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
        <button className="btn btn-danger" onClick={clearTodos}>Clear All</button>
      </div>
      <List todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}
