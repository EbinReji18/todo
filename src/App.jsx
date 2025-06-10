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

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title, dueDate) {
    setTodos(currentTodos => [
      ...currentTodos,
      {
        id: crypto.randomUUID(),
        title,
        dueDate,
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

  function editTodo(id, newTitle) {
    setTodos(currentTodos =>
      currentTodos.map(todo =>
        todo.id === id ? { ...todo, title: newTitle } : todo
      )
    );
  }

  function clearTodos() {
    setTodos([]);
  }

  const filteredTodos = todos
    .filter(todo => {
      if (filter === "active") return !todo.completed;
      if (filter === "completed") return todo.completed;
      return true;
    })
    .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

  return (
    <div>
      <Form onSubmit={addTodo} />
      <br />
      <h1 className="header">Todo List</h1>
      <div className="filters">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
        <button className="btn btn-danger" onClick={clearTodos}>Clear All</button>
      </div>
      <List
        todos={filteredTodos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </div>
  );
}
