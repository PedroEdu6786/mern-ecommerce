import {
    PRODUCT_LIST,
    PRODUCT_DETAILS,
    PRODUCT_DELETE,
    PRODUCT_CREATE,
    PRODUCT_UPDATE,
    PRODUCT_CREATE_REVIEW,
} from '../constants/productConstants'

export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_LIST._REQUEST:
            return { loading: true, products: [] }
        case PRODUCT_LIST._SUCCESS:
            return {
                loading: false,
                products: action.payload.products,
                pages: action.payload.pages,
                page: action.payload.page,
            }
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

export const productDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_DELETE._REQUEST:
            return { loading: true, ...state }
        case PRODUCT_DELETE._SUCCESS:
            return { loading: false, success: true }
        case PRODUCT_DELETE._FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const productCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_CREATE._REQUEST:
            return { loading: true, ...state }
        case PRODUCT_CREATE._SUCCESS:
            return { loading: false, success: true, product: action.payload }
        case PRODUCT_CREATE._FAIL:
            return { loading: false, error: action.payload }
        case PRODUCT_CREATE._RESET:
            return {}
        default:
            return state
    }
}

export const productUpdateReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case PRODUCT_UPDATE._REQUEST:
            return { loading: true, ...state }
        case PRODUCT_UPDATE._SUCCESS:
            return { loading: false, success: true, product: action.payload }
        case PRODUCT_UPDATE._FAIL:
            return { loading: false, error: action.payload }
        case PRODUCT_UPDATE._RESET:
            return { product: {} }
        default:
            return state
    }
}

export const productReviewCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_CREATE_REVIEW._REQUEST:
            return { loading: true, ...state }
        case PRODUCT_CREATE_REVIEW._SUCCESS:
            return { loading: false, success: true }
        case PRODUCT_CREATE_REVIEW._FAIL:
            return { loading: false, error: action.payload }
        case PRODUCT_CREATE_REVIEW._RESET:
            return {}
        default:
            return state
    }
}
