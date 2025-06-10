import { useState } from "react";

export function Item({ id, title, dueDate, completed, toggleTodo, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

  function handleEditSubmit(e) {
    e.preventDefault();
    editTodo(id, editedTitle);
    setIsEditing(false);
  }

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={e => toggleTodo(id, e.target.checked)}
        />
        {isEditing ? (
          <form onSubmit={handleEditSubmit} style={{ display: "inline" }}>
            <input
              type="text"
              value={editedTitle}
              onChange={e => setEditedTitle(e.target.value)}
            />
            <button className="btn">Save</button>
          </form>
        ) : (
          <>
            <span style={{ marginRight: "1rem" }}>{title}</span>
            <span className="due-date">Due: {dueDate || "None"}</span>
          </>
        )}
      </label>
      {!isEditing && (
        <>
          <button className="btn" onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTodo(id)} className="btn btn-danger">Delete</button>
        </>
      )}
    </li>
  );
}
