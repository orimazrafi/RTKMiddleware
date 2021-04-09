import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import BooksSlice from '../features/Books/Books';
import AuthorsSlice from "../features/Authors/Authors"
import { apiMiddleware, customMiddleware } from './middlewares';





const middleware = [...getDefaultMiddleware({ serializableCheck: false }), customMiddleware, apiMiddleware]
export const store = configureStore({
    reducer: {
        Books: BooksSlice,
        Authors: AuthorsSlice
    }, middleware,
    devTools: process.env.NODE_ENV === "development"
})