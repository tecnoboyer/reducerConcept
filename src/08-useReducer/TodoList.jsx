import { TodoItem } from "./TodoItem"

export const TodoList = ({todos=[]}) => {
  return (
    <ul className="list-group">
      console.log('enel todoList')
      console.dir(todos)
    {todos.map(part => ( 
      < TodoItem key={part.id} todo={part} />    
    ))}
    </ul>
          
  )
}
