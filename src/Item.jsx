import { useState } from "react";
import PropTypes from "prop-types";

export function Item({
  id, title, dueDate, completed,
  toggleTodo, deleteTodo, editTodo
}) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(title);

  const saveEdit = e => {
    e.preventDefault();
    editTodo(id, draft.trim() || title);
    setEditing(false);
  };

  return (
    <li className={completed ? "completed" : ""}>
      <input
        type="checkbox"
        checked={completed}
        onChange={e => toggleTodo(id, e.target.checked)}
      />
      {editing ? (
        <form onSubmit={saveEdit} style={{display:"inline"}}>
          <input value={draft} onChange={e => setDraft(e.target.value)} />
          <button className="btn">✔️</button>
        </form>
      ) : (
        <>
          <span className="title">{title}</span>
          <span className="due-date">{dueDate ? `(Due: ${dueDate})` : ""}</span>
          <button className="btn" onClick={() => setEditing(true)}>Edit</button>
        </>
      )}
      <button className="btn btn-danger" onClick={() => deleteTodo(id)}>Delete</button>
    </li>
  );
}

Item.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  dueDate: PropTypes.string,
  completed: PropTypes.bool.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
};
