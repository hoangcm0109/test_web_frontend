import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name: 'todoList',
    initialState: localStorage.getItem('todoList') !== null ? JSON.parse(localStorage.getItem('todoList')) : [],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload)
            localStorage.setItem('todoList', JSON.stringify(sortByDate([...state])))
        },
        deleteTodo: (state, action) => {
            const newArr = [...state.filter(item => item.id !== action.payload)]
            localStorage.setItem('todoList', JSON.stringify(sortByDate(newArr)))

            return newArr
        },
        makeCompleted: (state, action) => {
            state.map(item => {
                if(item.id === action.payload) {
                    item.complete = !item.complete
                }
                return item
            })
            localStorage.setItem('todoList', JSON.stringify(sortByDate([...state])))
        },
        deleteComplete: (state, action) => {
            const newArr = [...state.filter(item => item.complete === false)]
            localStorage.setItem('todoList', JSON.stringify(sortByDate(newArr)))

            return newArr       
        },
        updateTodo: (state, action) => {
            state.map(todo => {
                if(todo.id === action.payload.idUpdate) {
                    todo.todo = action.payload.todo
                    todo.desc = action.payload.desc
                    todo.date = action.payload.date
                    todo.piority = action.payload.piority
                }
            })
        }
    }

})

const sortByDate = arr => arr.slice().sort((a, b) => b.date - a.date)

export const { addTodo, deleteTodo, makeCompleted, deleteComplete, updateTodo } = todoSlice.actions
export default todoSlice.reducer