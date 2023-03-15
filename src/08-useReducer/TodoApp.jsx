import { useEffect, useReducer } from "react"
import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"
import { TodoReducer } from "./TodoReducer"




const initialState=[
  {
    id: new Date().getTime(),
    description:'Recolectar la piedra del Alma',
    done: false
  },

]

const initial = (actividadCero) => {
  return JSON.parse( localStorage.getItem('todos') || [] )
}


export const TodoApp = () => {
  const [todos, dispatch] = useReducer(TodoReducer, initialState,initial);

  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos));
  
  }, [todos])
  

  const handleNewTodo = (todo) => {
    const action ={
      type: '[TODO] Add Todo',
      payload:todo
    }
    dispatch (action);
  }


  const handleDeleteTodo = (id) => {
    const action ={
      type: '[TODO] Remove Todo',
      payload:id
    }
    dispatch (action);
  }
 

  return (
    <>
        <h1> TodoApp:10,  <small> pendientes:2</small></h1>
        <hr />
  <div  className="row">
    <div className="col-7">
        <TodoList todos={todos} onDeleteTodo={ handleDeleteTodo} />
    </div>
    <div className="col-5">
      <h4> Agregar TODO</h4>
      <TodoAdd onNewTodo={handleNewTodo}/>
      {/* <TodoAdd onNewTodo={todo=>handleNewTodo(todo)}/> */}
    </div>
  </div>
    </>
  )
}
