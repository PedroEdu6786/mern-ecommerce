import {
    USER_DETAILS,
    USER_LIST,
    USER_LOGIN,
    USER_LOGOUT,
    USER_REGISTER,
    USER_UPDATE_PROFILE,
} from '../constants/userConstants'

export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN._REQUEST:
            return { loading: true, ...state }
        case USER_LOGIN._SUCCESS:
            return { loading: false, userInfo: action.payload }
        case USER_LOGIN._FAIL:
            return { loading: false, error: action.payload }
        case USER_LOGOUT:
            return {}
        default:
            return state
    }
}

export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTER._REQUEST:
            return { loading: true, ...state }
        case USER_REGISTER._SUCCESS:
            return { loading: false, userInfo: action.payload }
        case USER_REGISTER._FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const userDetailsReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case USER_DETAILS._REQUEST:
            return { loading: true, ...state }
        case USER_DETAILS._SUCCESS:
            return { loading: false, user: action.payload }
        case USER_DETAILS._FAIL:
            return { loading: false, error: action.payload }
        case USER_DETAILS._RESET:
            return { user: {} }
        default:
            return state
    }
}

export const userUpdateProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_UPDATE_PROFILE._REQUEST:
            return { loading: true, ...state }
        case USER_UPDATE_PROFILE._SUCCESS:
            return { loading: false, success: true, userInfo: action.payload }
        case USER_UPDATE_PROFILE._FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const userListReducer = (state = { users: [] }, action) => {
    switch (action.type) {
        case USER_LIST._REQUEST:
            return { loading: true }
        case USER_LIST._SUCCESS:
            return { loading: false, users: action.payload }
        case USER_LIST._FAIL:
            return { loading: false, error: action.payload }
        case USER_LIST._RESET:
            return { users: [] }
        default:
            return state
    }
}
