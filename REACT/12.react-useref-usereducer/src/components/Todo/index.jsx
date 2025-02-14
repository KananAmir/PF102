import { useReducer } from "react"


const ACTIONS = {
    ADD_TODO: "ADD_TODO",
    DELETE_TODO: "DELETE_TODO",
    DELETE_ALL_TODOS: "DELETE_ALL_TODOS",
    SET_INPUT_VALUE: "SET_INPUT_VALUE",
    RESET_INPUT_VALUE: "RESET_INPUT_VALUE",
    TOGGLE_COMPLETED: "TOGGLE_COMPLETED"
}

function reducer(state, action) {
    console.log(action);
    console.log(state);
    
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            // state.todos.push(action.payload)
            // return { ...state}

            return { ...state, todos: [...state.todos, action.payload] }

        case ACTIONS.SET_INPUT_VALUE:
            return { ...state, todoText: action.payload.trim() }

        case ACTIONS.RESET_INPUT_VALUE:
            return { ...state, todoText: "" }

        case ACTIONS.DELETE_TODO:
            return { ...state, todos: state.todos.filter((q)=>q.id !== action.payload) }

        case ACTIONS.TOGGLE_COMPLETED:
            // eslint-disable-next-line no-case-declarations
            const todo = state.todos.find((q)=>q.id === action.payload)
            todo.isCompleted = !todo.isCompleted
            
            return {...state }

        default:
            break;
    }

}


const Todo = () => {
    const [state, dispatch] = useReducer(reducer, {
        todos: [],
        todoText: ""
    })

    console.log(state);


    const handleAddTodo = (e) => {
        e.preventDefault()
        const todo = {
            id: Date.now(),
            todoText: state.todoText,
            isCompleted: false
        }

        if(state.todoText !== ""){
            dispatch({ type: ACTIONS.ADD_TODO, payload: todo })
            dispatch({ type: ACTIONS.RESET_INPUT_VALUE })
        }else{
            window.alert("fill input!")
        }
        

    }

    const handleDelete = (id)=>{
        dispatch({
            type: ACTIONS.DELETE_TODO,
            payload: id
        })
    }

    return (
        <div>
            <form onSubmit={handleAddTodo}>
                <input type="text" name="" id=""
                    value={state.todoText}
                    onChange={(e) => {
                        dispatch({ type: ACTIONS.SET_INPUT_VALUE, payload: e.target.value })
                    }} />
                <button>add</button>
            </form>

            <hr />
            <h3>Todo List</h3>

            {
                state.todos.length > 0 ?

                    <>
                        <ul>
                            {state.todos.map((todo) => {
                                return (<li key={todo.id}>
                                    <input type="checkbox" 
                                    checked={todo.isCompleted}
                                    onChange={()=>{
                                        dispatch({type: "TOGGLE_COMPLETED", payload: todo.id})
                                    }}/>
                                    <span style={{textDecoration: todo.isCompleted ? "line-through" : "unset"}}>{todo.todoText}</span>
                                    <button onClick={()=>{handleDelete(todo.id)}}>delete</button>
                                </li>)
                            })}
                        </ul>
                    </>

                    :

                    <p style={{color:"red"}}>There is no todos, yet!</p>
            }
        </div>
    )
}

export default Todo