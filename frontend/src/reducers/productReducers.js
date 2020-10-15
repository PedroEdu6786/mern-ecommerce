import { PRODUCT_LIST, PRODUCT_DETAILS } from '../constants/productConstants'

export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_LIST._REQUEST:
            return { loading: true, products: [] }
        case PRODUCT_LIST._SUCCESS:
            return { loading: false, products: action.payload }
        case PRODUCT_LIST._FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const productDetailsReducer = (
    state = { product: { reviews: [] } },
    action
) => {
    switch (action.type) {
        case PRODUCT_DETAILS._REQUEST:
            return { loading: true, ...state }
        case PRODUCT_DETAILS._SUCCESS:
            return { loading: false, product: action.payload }
        case PRODUCT_DETAILS._FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}
