import axios from 'axios'
import {
    PRODUCT_LIST,
    PRODUCT_DETAILS,
    PRODUCT_DELETE,
    PRODUCT_CREATE,
    PRODUCT_UPDATE,
    PRODUCT_CREATE_REVIEW,
    PRODUCT_TOP,
} from '../constants/productConstants'

export const listProducts = (keyword = '', pageNumber = '') => async (
    dispatch
) => {
    try {
        dispatch({ type: PRODUCT_LIST._REQUEST })

        const { data } = await axios.get(
            `/api/products?keyword=${keyword}&pageNumber=${pageNumber}`
        )

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

export const listTopProducts = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_TOP._REQUEST })

        const { data } = await axios.get(`/api/products/top`)

        dispatch({ type: PRODUCT_TOP._SUCCESS, payload: data })
    } catch (err) {
        dispatch({
            type: PRODUCT_TOP._FAIL,
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

export const deleteProduct = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: PRODUCT_DELETE._REQUEST })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        await axios.delete(`/api/products/${id}`, config)

        dispatch({
            type: PRODUCT_DELETE._SUCCESS,
        })
    } catch (err) {
        dispatch({
            type: PRODUCT_DELETE._FAIL,
            payload:
                err.response && err.response.data.message
                    ? err.response.data.message
                    : err.message,
        })
    }
}

export const createProduct = () => async (dispatch, getState) => {
    try {
        dispatch({ type: PRODUCT_CREATE._REQUEST })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const { data } = await axios.post(`/api/products`, {}, config)

        dispatch({
            type: PRODUCT_CREATE._SUCCESS,
            payload: data,
        })
    } catch (err) {
        dispatch({
            type: PRODUCT_CREATE._FAIL,
            payload:
                err.response && err.response.data.message
                    ? err.response.data.message
                    : err.message,
        })
    }
}

export const updateProduct = (product) => async (dispatch, getState) => {
    try {
        dispatch({ type: PRODUCT_UPDATE._REQUEST })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const { data } = await axios.put(
            `/api/products/${product._id}`,
            product,
            config
        )

        dispatch({
            type: PRODUCT_UPDATE._SUCCESS,
            payload: data,
        })
    } catch (err) {
        dispatch({
            type: PRODUCT_UPDATE._FAIL,
            payload:
                err.response && err.response.data.message
                    ? err.response.data.message
                    : err.message,
        })
    }
}

export const createProductReview = (productId, review) => async (
    dispatch,
    getState
) => {
    try {
        dispatch({ type: PRODUCT_CREATE_REVIEW._REQUEST })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        await axios.post(`/api/products/${productId}/reviews`, review, config)

        dispatch({
            type: PRODUCT_CREATE_REVIEW._SUCCESS,
        })
    } catch (err) {
        dispatch({
            type: PRODUCT_CREATE_REVIEW._FAIL,
            payload:
                err.response && err.response.data.message
                    ? err.response.data.message
                    : err.message,
        })
    }
}
