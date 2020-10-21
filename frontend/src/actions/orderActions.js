import axios from 'axios'
import { ORDER_CREATE } from '../constants/orderConstants'

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
