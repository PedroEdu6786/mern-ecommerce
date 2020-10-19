import {
    USER_LOGIN,
    USER_LOGOUT,
    USER_REGISTER,
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
