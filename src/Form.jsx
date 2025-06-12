import { useState } from "react";
import PropTypes from "prop-types";

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
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Enter a task..."
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button className="btn">Add</button>
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
