import { ORDER_CREATE } from '../constants/orderConstants'

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
