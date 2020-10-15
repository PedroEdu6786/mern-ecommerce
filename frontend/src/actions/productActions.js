import axios from 'axios'
import { PRODUCT_LIST, PRODUCT_DETAILS } from '../constants/productConstants'

export const listProducts = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST._REQUEST })

        const { data } = await axios.get('/api/products')

        dispatch({ type: PRODUCT_LIST._SUCCESS, payload: data })
    } catch (err) {
        dispatch({
            type: PRODUCT_LIST._FAIL,
            payload:
                err.response && err.response.data.message
                    ? err.response.data.message
                    : err.message,
        })
    }
}

export const listProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS._REQUEST })

        const { data } = await axios.get(`/api/products/${id}`)

        dispatch({ type: PRODUCT_DETAILS._SUCCESS, payload: data })
    } catch (err) {
        dispatch({
            type: PRODUCT_DETAILS._FAIL,
            payload:
                err.response && err.response.data.message
                    ? err.response.data.message
                    : err.message,
        })
    }
}
