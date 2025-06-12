import PropTypes from "prop-types";
import { Item } from "./Item";

export function List({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && <p className="empty">No Todos</p>}
      {todos.map((todo) => (
        <Item
          key={todo.id}
          {...todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}

List.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};
