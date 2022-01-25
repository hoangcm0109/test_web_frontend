import { createSelector } from '@reduxjs/toolkit'

const todoListSelector = state => state.todoList
const searchTextSelector = state => state.searchText.search
const pioritySelector = state => state.searchText.piority

export const todoFinal = createSelector(
    todoListSelector,
    searchTextSelector,
    pioritySelector,
    (todoList, searchText, piority) => {
        return todoList.filter(item => {
            return item.todo.includes(searchText) && piority.includes(item.piority)
        })
    }
)