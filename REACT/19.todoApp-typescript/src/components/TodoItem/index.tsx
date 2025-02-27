import { Todo } from "../../types/todo"

interface TodoItemProps {
    todo: Todo;
    onDeleteTodo: (id: string) => void;
    onToggleTodo: (id: string) => void;
}
const TodoItem:React.FC<TodoItemProps> = ({ todo, onDeleteTodo, onToggleTodo }) => {
  
    const handleDelete = (id: string):void=>{
        onDeleteTodo(id)
    }

    return (
        <li key={todo.id}>
            <input type="checkbox"
                onChange={() => onToggleTodo(todo.id)}
                checked={todo.completed}
            />
            <span
                style={{ textDecoration: todo.completed ? "line-through" : "" }}>{todo.text}
            </span>
            <button onClick={() => { handleDelete(todo.id) }}>delete</button>
        </li>
    )
}

export default TodoItem