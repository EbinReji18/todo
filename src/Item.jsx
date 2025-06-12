import PropTypes from "prop-types";

export function Item({ id, title, completed, dueDate, toggleTodo, deleteTodo }) {
  return (
    <li className={`item ${completed ? "completed" : ""}`}>
      <div className="content">
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        <div className="text">
          <span>{title}</span>
          {dueDate && <small className="due-date">Due: {dueDate}</small>}
        </div>
      </div>
      <button onClick={() => deleteTodo(id)} className="btn delete">✖</button>
    </li>
  );
}

Item.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  dueDate: PropTypes.string,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};
