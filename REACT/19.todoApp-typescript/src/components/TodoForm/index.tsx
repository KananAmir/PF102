import { FormEvent, useState } from "react"

interface TodoFormProps {
    onAddTodo: (text: string) => void
}
const TodoForm: React.FC<TodoFormProps> = ({ onAddTodo }) => {
    const [text, setText] = useState<string>("")

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        onAddTodo(text.trim())
        setText("")
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="enter ur todo here.."
                value={text}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setText(e.target.value) }} />
            <button>add</button>
        </form>
    )
}

export default TodoForm