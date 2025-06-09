import { useState, useRef, useEffect } from "react";

export function Form({ onSubmit }) {
  const [newItem, setNewItem] = useState("");
  const [dueDate, setDueDate] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem.trim() === "") return;

    onSubmit(newItem.trim(), dueDate);
    setNewItem("");
    setDueDate("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          ref={inputRef}
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>

      <div className="form-row">
        <label htmlFor="dueDate">Due Date (optional)</label>
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
