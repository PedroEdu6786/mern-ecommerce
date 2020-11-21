import axios from 'axios'
import {
    ORDER_CREATE,
    ORDER_DELIVER,
    ORDER_DETAILS,
    ORDER_LIST,
    ORDER_LIST_MY,
    ORDER_PAY,
} from '../constants/orderConstants'

export const createOrder = (order) => async (dispatch, getState) => {
    try {
        dispatch({ type: ORDER_CREATE._REQUEST })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const { data } = await axios.post(`/api/orders`, order, config)

        dispatch({
            type: ORDER_CREATE._SUCCESS,
            payload: data,
        })
    } catch (err) {
        dispatch({
            type: ORDER_CREATE._FAIL,
            payload:
                err.response && err.response.data.message
                    ? err.response.data.message
                    : err.message,
        })
    }
}

export const getOrderDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: ORDER_DETAILS._REQUEST })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const { data } = await axios.get(`/api/orders/${id}`, config)

        dispatch({
            type: ORDER_DETAILS._SUCCESS,
            payload: data,
        })
    } catch (err) {
        dispatch({
            type: ORDER_DETAILS._FAIL,
            payload:
                err.response && err.response.data.message
                    ? err.response.data.message
                    : err.message,
        })
    }
}

export const payOrder = (orderId, paymentResult) => async (
    dispatch,
    getState
) => {
    try {
        dispatch({ type: ORDER_PAY._REQUEST })

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
            `/api/orders/${orderId}/pay`,
            paymentResult,
            config
        )

        dispatch({
            type: ORDER_PAY._SUCCESS,
            payload: data,
        })
    } catch (err) {
        dispatch({
            type: ORDER_PAY._FAIL,
            payload:
                err.response && err.response.data.message
                    ? err.response.data.message
                    : err.message,
        })
    }
}

export const deliverOrder = (order) => async (dispatch, getState) => {
    try {
        dispatch({ type: ORDER_DELIVER._REQUEST })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const { data } = await axios.put(
            `/api/orders/${order._id}/deliver`,
            {},
            config
        )

        dispatch({
            type: ORDER_DELIVER._SUCCESS,
            payload: data,
        })
    } catch (err) {
        dispatch({
            type: ORDER_DELIVER._FAIL,
            payload:
                err.response && err.response.data.message
                    ? err.response.data.message
                    : err.message,
        })
    }
}

export const listMyOrders = () => async (dispatch, getState) => {
    try {
        dispatch({ type: ORDER_LIST_MY._REQUEST })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const { data } = await axios.get(`/api/orders/myorders`, config)

        dispatch({
            type: ORDER_LIST_MY._SUCCESS,
            payload: data,
        })
    } catch (err) {
        dispatch({
            type: ORDER_LIST_MY._FAIL,
            payload:
                err.response && err.response.data.message
                    ? err.response.data.message
                    : err.message,
        })
    }
}

export const listOrders = () => async (dispatch, getState) => {
    try {
        dispatch({ type: ORDER_LIST._REQUEST })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const { data } = await axios.get(`/api/orders`, config)

        dispatch({
            type: ORDER_LIST._SUCCESS,
            payload: data,
        })
    } catch (err) {
        dispatch({
            type: ORDER_LIST._FAIL,
            payload:
                err.response && err.response.data.message
                    ? err.response.data.message
                    : err.message,
        })
    }
}
