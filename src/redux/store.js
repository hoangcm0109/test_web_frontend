import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './TodoSlice'
import searchTextReducer from './SearchSlice'
const store = configureStore({
    reducer: {
        todoList: todoReducer,
        searchText: searchTextReducer
    }
})

export default store