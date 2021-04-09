import { setLoader, setBooks, setComments, setBookError } from "../../features/Books/Books"
import { setAuthorLoader, setAuthors, setError } from "../../features/Authors/Authors"
const wrapperFunction = (d, inner, time) => {
    window.setTimeout(() => {
        d(inner)
    }, time)
}
export const customMiddleware = ({ getState, dispatch }) => next => action => {
    next(action)
    if (action.type === "books/fecthBooks") {
        dispatch(setLoader(true))
        dispatch({ type: "api", payload: { url: "https://jsonplaceholder.typicode.c", succees: setBooks, error: setBookError, loader: setLoader } })
    }
    if (action.type === "books/fecthAuthors") {
        dispatch(setLoader(true))
        dispatch({ type: "api", payload: { url: "https://jsonplaceholder.typicode.com/posts/1/comments", succees: setComments, error: setBookError, loader: setLoader } })
    }
    if (action.type === "authors/fetchAPI") {
        if (getState().Authors.loader) return
        dispatch(setAuthorLoader(true))
        wrapperFunction(dispatch, { type: "api", payload: { url: "https://jsonplaceholder.typicode.com/posts/1/comments", succees: setAuthors, error: setError, loader: setAuthorLoader } }, action.payload.time)
    }
}