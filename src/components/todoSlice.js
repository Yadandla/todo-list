import { createSlice } from "@reduxjs/toolkit"
import { nanoid } from "nanoid";

// const initialState = {
//     todos: [],
// };

export const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                id: nanoid(),
                content: action.payload,
                completed: false,
            });
        },
        toggleTodo: (state, action) => {
            const todoIndex = state.todos.findIndex((todos) => todos.id === action.payload);
            state.todos[todoIndex].completed = !state.todos[todoIndex].completed;
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todos) => todos.id !== action.payload);
        },

    },

});

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer;