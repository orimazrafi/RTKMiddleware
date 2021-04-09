import { setLoader, setBooks } from "../../features/Books/Books"
import axios from "axios"

const handleAsync = async (url) => {
    try {
        const res = await axios.get(url)
        return res
    }
    catch (ex) {
        console.log({ ex })
        return ex
    }
}

export const apiMiddleware = ({ dispatch }) => next => async action => {
    next(action)
    const { type, payload } = action
    try {
        if (type === "api") {
            const res = await handleAsync(payload.url)
            if (res.request.status !== 200) {
                dispatch(payload.loader(false))
                return dispatch(payload.error("Errro"))
            }
            console.log({ res })
            dispatch(payload.loader(false))
            dispatch(payload.succees(res))
        }

    } catch (ex) {
        dispatch(payload.setError(ex))
    }
}