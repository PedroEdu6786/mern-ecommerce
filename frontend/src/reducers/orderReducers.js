import { ORDER_CREATE, ORDER_DETAILS } from '../constants/orderConstants'

export const orderCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case ORDER_CREATE._REQUEST:
            return { loading: true }

        case ORDER_CREATE._SUCCESS:
            return { loading: false, success: true, order: action.payload }

        case ORDER_CREATE._FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const orderDetailsReducer = (
    state = { loading: true, orderItems: [], shippingAddress: {} },
    action
) => {
    switch (action.type) {
        case ORDER_DETAILS._REQUEST:
            return { ...state, loading: true }

        case ORDER_DETAILS._SUCCESS:
            return { loading: false, order: action.payload }

        case ORDER_DETAILS._FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}
