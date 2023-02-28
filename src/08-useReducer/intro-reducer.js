const initialState = [{
    id:1,
    todo: 'Recolectarla piedra del Alma',
    done: false,
}];

const todoReducer = (state = initialState, action={}) => {
    if (action.type === '[TODO] add todo'){
        return [ ...state, action.payload]
    }

     return state;
}


let todos = todoReducer();
const newTodo= {
    id:2,
    todo: 'Recolectarla piedra del poder',
    done: false,
}

const addTodoACtion={
    type:'[TODO] add todo',
    payload:newTodo
}

todos =todoReducer(todos, addTodoACtion)

console.log({state:todos})