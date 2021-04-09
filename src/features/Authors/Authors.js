import { createSlice } from '@reduxjs/toolkit';
const AuthorsSlice = createSlice({
    name: "authors",
    initialState: {
        authors: [],
        loader: false,
        error: {}
    },
    reducers: {
        setAuthors: (state, { payload }) => {
            state.authors = payload
        },
        setAuthorLoader: (state, { payload }) => {
            state.loader = payload
        },
        setError: (state, { payload }) => {
            state.error = payload
        },
        fetchAPI: (state, { payload }) => {
        },

    },
    // extraReducers: {
    //     [todoInputSlice.actions.edit]: (state, action) => {
    //         state.value++
    //     }
    // }
});

export const { setAuthors, setAuthorLoader, fetchAPI, setError } = AuthorsSlice.actions;
export default AuthorsSlice.reducer;