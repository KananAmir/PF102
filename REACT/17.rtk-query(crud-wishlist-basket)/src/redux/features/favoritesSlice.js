import { createSlice } from '@reduxjs/toolkit'


export const favoritesSlice = createSlice({
    name: "favorites",
    initialState: {
        items:[]
    },
    reducers: {
        toggleFavorites: (state, action)=>{
            const idx = state.items.findIndex((q)=>q.id === action.payload.id)
            if(idx === -1){
                // state.items = [...state.items, action.payload]
                state.items.push(action.payload)
            }else{
                // state.items = s  tate.items.filter((q)=>q.id !== action.payload.id)
                state.items.splice(idx, 1)
            }
        },
        clearAllFavorites: (state)=>{
            // state.items.length = 0
            state.items = []
        }
    }
})

export const {toggleFavorites, clearAllFavorites} = favoritesSlice.actions
export default favoritesSlice.reducer