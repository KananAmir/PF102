
import { useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import { Todo } from './types/todo'
import { nanoid } from 'nanoid'

class TodoItem implements Todo{
  text: string
  completed: boolean
  id: string
  constructor(text: string){
    this.text = text
    this.completed = false
    this.id = nanoid()
  }
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo  =(text: string)=>{
    // const newTodo = {
    //   id: nanoid(),
    //   text,
    //   completed: false
    // }

    const newTodo: Todo = new TodoItem(text)
   if(text){
    setTodos([...todos, newTodo])
   }
   console.log(todos);
   
   
  }
  const deleteTodo  =(id: string)=>{
    setTodos(todos.filter(todo => todo.id !== id))
  }
  const toggleTodo  =(id: string)=>{
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }

  return (
    <>
    <TodoForm onAddTodo={addTodo} />
    <hr />
    <TodoList todos={todos} onDeleteTodo={deleteTodo} onToggleTodo={toggleTodo} />
    </>
  )
}

export default App
