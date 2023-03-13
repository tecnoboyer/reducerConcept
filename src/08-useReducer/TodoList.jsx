import { TodoItem } from "./TodoItem"

export const TodoList = ({todos=[]}) => {
  return (
    <ul className="list-group">
    {todos.map(part => ( 
      < TodoItem key={part.id} todo={part} />    
    ))}
    </ul>
          
  )
}
