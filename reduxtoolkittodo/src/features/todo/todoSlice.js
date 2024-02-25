import { createSlice , nanoid } from "@reduxjs/toolkit";

//nanoid generates unique id

const initialState = {
    todos :[{id:1 , text : "Hello World"}]
}

const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers:{
        //state have current state
        addTodo:(state , action) =>{
            const todo = {
                id: nanoid(),
                text : action.payload
            }
            state.todos.push(todo)
        },
        removeTodo : (state , action)=>{
            state.todos  = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }
})

export const {addTodo , removeTodo} = todoSlice.actions  //export individual reducers cause it will be useful for stores

export default todoSlice.reducer;  //export complete todo reducer for stores
//this is the complete slice writing syntax