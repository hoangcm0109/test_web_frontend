import { createSlice } from '@reduxjs/toolkit'

const SearchTextSlice = createSlice({
    name: 'searchText',
    initialState: {
        search: '',
        piority: 'normal'
    },
    reducers: {
        searchTextChange: (state, action) => {
            state.search = action.payload
        },
        changePiority: (state, action) => {
            state.piority = action.payload
        }
    }
})

export const { searchTextChange, changePiority } = SearchTextSlice.actions
export default SearchTextSlice.reducer