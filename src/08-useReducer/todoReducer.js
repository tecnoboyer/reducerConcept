// {type: [ todo remove], payload:id }  ..."Si tenemos una problema similar, apliquemos una soluci[on similar"

export const TodoReducer = (initialState=[],action) => {
    switch (action.type) {
        case '[TODO] Add Todo':
            return [ ...initialState, action.payload]
        case '[TODO] Remove Todo':
            return initialState.filter(todo=> todo.id !=action.payload);
    
        default:
            return initialState;
    }
}