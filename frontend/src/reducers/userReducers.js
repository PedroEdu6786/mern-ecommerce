import { USER_LOGIN, USER_LOGOUT } from '../constants/userConstants'

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
