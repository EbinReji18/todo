import { Item } from "./Item"
export function List({todos, toggleTodo, deleteTodo}) {
    return (
        <ul className="list">
        {todos.length === 0 && "No Todos"}
        {todos.map( todo => {
          return (
          <Item 
            {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}
          />
          )
        })}
        
      </ul>
  
    )
}