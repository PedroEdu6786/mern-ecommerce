import { PRODUCT_LIST } from '../constants/productConstants'

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
