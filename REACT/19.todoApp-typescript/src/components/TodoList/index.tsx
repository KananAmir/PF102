import { Todo } from "../../types/todo"
import TodoItem from "../TodoItem";

interface TodoListProps {
    todos: Todo[];
    onDeleteTodo: (id: string) => void;
    onToggleTodo: (id: string) => void;
}
const TodoList = ({ todos, onDeleteTodo, onToggleTodo }: TodoListProps) => {

    if (todos.length === 0) {
        return (<p>no todo item yet!</p>)
    }

    return (
        <ul>
            {todos.map((todo) => {
                return (<TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo}/>)
            })}
        </ul>
    )
}

export default TodoList