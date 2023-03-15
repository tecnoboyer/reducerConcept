import { TodoItem } from "./TodoItem"

export const TodoList = ({todos=[],onDeleteTodo }) => {


  return (
    <ul className="list-group">
    {todos.map(part => ( 
      < TodoItem key={part.id} todo={part} onDeleteTodo={id=> onDeleteTodo(id)} />    
    ))}
    </ul>
          
  )
}
