import { createSlice } from '@reduxjs/toolkit'
import {nanoid} from "nanoid"

export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        items: JSON.parse(localStorage.getItem("todos")) ?? []
    },
    reducers: {
        addTodo: (state, action)=>{            
            const todo = {
                id: nanoid(),
                todoText: action.payload,
                isCompleted: false,
                createdAt: new Date().toLocaleDateString()
            }
            // state.items.push(todo)
            state.items = [...state.items, todo]
            localStorage.setItem("todos", JSON.stringify(state.items))
        },
        deleteTodo: (state, action)=>{
            state.items = state.items.filter((todo)=>todo.id !== action.payload)
            localStorage.setItem("todos", JSON.stringify(state.items))
        },
        clearAllTodos: (state)=>{
            state.items = []
            localStorage.setItem("todos", JSON.stringify(state.items))
        },
        toggleCompleted: (state, action)=>{
            const currentTodo = state.items.find((todo)=>todo.id === action.payload)
            currentTodo.isCompleted = !currentTodo.isCompleted
            localStorage.setItem("todos", JSON.stringify(state.items))

        }
    }
})

export const {addTodo, deleteTodo, clearAllTodos, toggleCompleted} = todoSlice.actions 
export default todoSlice.reducer