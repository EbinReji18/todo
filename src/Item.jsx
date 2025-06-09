export function Item({ completed, id, title, dueDate, toggleTodo, deleteTodo }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={e => toggleTodo(id, e.target.checked)}
        />
        <span>
          {title}
          {dueDate && <span style={{ fontSize: "0.8rem", marginLeft: "10px", color: "#ccc" }}>
            (Due: {dueDate})
          </span>}
        </span>
      </label>
      <button onClick={() => deleteTodo(id)} className="btn btn-danger">Delete</button>
    </li>
  );
}
