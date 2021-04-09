import { createSlice } from '@reduxjs/toolkit';
import { setError } from '../Authors/Authors';
const booksSlice = createSlice({
    name: "books",
    initialState: {
        books: [],
        comments: [],
        loader: false,
        error: {}
    },
    reducers: {
        setBooks: (state, { payload }) => {
            state.books = payload
        },
        setComments: (state, { payload }) => {
            state.comments = payload
        },

        setLoader: (state, { payload }) => {
            state.loader = payload
        },
        fecthBooks: (state, { payload }) => {
        },
        fecthAuthors: (state, { payload }) => {
        },
        setBookError: (state, { payload }) => {
            state.error = payload
        }

    },
    // extraReducers: {
    //     [todoInputSlice.actions.edit]: (state, action) => {
    //         state.value++
    //     }
    // }
});

export const { setBooks, setLoader, fecthBooks, setComments, fecthAuthors, setBookError } = booksSlice.actions;
export default booksSlice.reducer;