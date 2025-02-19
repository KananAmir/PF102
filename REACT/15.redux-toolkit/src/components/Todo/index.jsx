import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, clearAllTodos, deleteTodo, toggleCompleted } from "../../redux/features/todoSlice"

const Todo = () => {
    const [todoText, setTodoText] = useState("")
    const [searchQuery, setSearchQuery] = useState("")
    const [filter, setFilter] = useState("all")
    const todos = useSelector((state) => state.todos.items)
    // console.log(todos);

    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        if (todoText !== "") {
            dispatch(addTodo(todoText.trim()))
            setTodoText("")
        } else {
            alert("fill input!")
        }
    }

    const handleDelete = (id) => {
        dispatch(deleteTodo(id))
    }

    const clearAll = () => {
        dispatch(clearAllTodos())
    }
    const handleToggleCompleted = (id) => {
        dispatch(toggleCompleted(id))
    }

    const filteredTodos = todos.filter((todo) => {
        switch (filter) {
            case "completed":
                return todo.isCompleted
            case "pending":
                return !todo.isCompleted
            default:
                return todo
        }
    }).filter((q) =>
        q.todoText.toLowerCase().includes(searchQuery.trim().toLowerCase())
    )

    return (
        <div>
            <h2>Todo App</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="" id=""
                    value={todoText}
                    placeholder="enter todo here.."
                    onChange={(e) => { setTodoText(e.target.value) }}

                />
                <button type="submit">Add</button>
            </form>
            <button onClick={clearAll}>Clear All</button>
            <hr />
            <input type="search" name="" id="" onChange={(e) => { setSearchQuery(e.target.value) }} />
            <select name="" id="" onChange={(e) => { setFilter(e.target.value) }}>
                <option value="" selected disabled>Filter Todos</option>
                <option value="all">All Todos</option>
                <option value="completed">Completed Todos</option>
                <option value="pending">Pending Todos</option>
            </select>
            <hr />
            {todos.length === 0
                ?
                <p style={{ color: "red" }}>there is no todo item yet!</p>
                :
                <ul>
                    {
                        filteredTodos.map((todo) => {
                            return (<li key={todo.id}>
                                <input type="checkbox" checked={todo.isCompleted} onChange={() => { handleToggleCompleted(todo.id) }} />
                                <span style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>{todo.todoText}
                                </span>
                                <button onClick={() => { handleDelete(todo.id) }}>delete</button>

                            </li>)
                        })
                    }
                </ul>

            }

        </div>
    )
}

export default Todo