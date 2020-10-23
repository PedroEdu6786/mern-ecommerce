import {
    ORDER_CREATE,
    ORDER_DETAILS,
    ORDER_LIST_MY,
    ORDER_PAY,
} from '../constants/orderConstants'

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

export const orderPayReducer = (state = {}, action) => {
    switch (action.type) {
        case ORDER_PAY._REQUEST:
            return { loading: true }

        case ORDER_PAY._SUCCESS:
            return { loading: false, success: true }

        case ORDER_PAY._FAIL:
            return { loading: false, error: action.payload }

        case ORDER_PAY._RESET:
            return {}

        default:
            return state
    }
}

export const orderListMyReducer = (state = { orders: [] }, action) => {
    switch (action.type) {
        case ORDER_LIST_MY._REQUEST:
            return { loading: true }

        case ORDER_LIST_MY._SUCCESS:
            return { loading: false, orders: action.payload }

        case ORDER_LIST_MY._FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}
