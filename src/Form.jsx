import { useState } from "react";

export function Form({ onSubmit }) {
  const [newItem, setNewItem] = useState("");
  const [dueDate, setDueDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;
    onSubmit(newItem, dueDate);
    setNewItem("");
    setDueDate("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          type="text"
          id="item"
          placeholder="Enter task"
        />
      </div>
      <div className="form-row">
        <label htmlFor="dueDate">Due Date</label>
        <input
          value={dueDate}
          onChange={e => setDueDate(e.target.value)}
          type="date"
          id="dueDate"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
