import { useReducer } from "react"
import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"
import { todoReducer } from "./todoReducer"

const initialState=[
  {
    id: new Date().getTime(),
    description:'REcolectar la piedra del Alma',
    done: false
  },
  {
    id: new Date().getTime()*3,
    description:'REcolectar la piedra del Poder',
    done: false
  }
]

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState)



  return (
    <>
        <h1> TodoApp:10,  <small> pendientes:2</small></h1>
        <hr />

  <div  className="row">

    <div className="col-7">

        <TodoList todos={todos}/>

    </div>


    <div className="col-5">
      <h4> Agregar TODO</h4>

      <TodoAdd />


    </div>


  </div>
        



    </>
  )
}
