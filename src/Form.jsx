import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

export function Form({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const ref = useRef();

  useEffect(() => {
    ref.current.focus();
  }, []);

  const handle = e => {
    e.preventDefault();
    if (!title.trim()) return;
    onSubmit(title.trim(), dueDate);
    setTitle("");
    setDueDate("");
  };

  return (
    <form onSubmit={handle} className="new-item-form">
      <input
        ref={ref}
        type="text"
        placeholder="Task name..."
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <input
        type="date"
        value={dueDate}
        onChange={e => setDueDate(e.target.value)}
      />
      <button className="btn">Add</button>
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
