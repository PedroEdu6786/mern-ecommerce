import axios from 'axios'
import {
    USER_LOGIN,
    USER_LOGOUT,
    USER_REGISTER,
} from '../constants/userConstants'

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: USER_LOGIN._REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }

        const { data } = await axios.post(
            `/api/users/login`,
            { email, password },
            config
        )

        dispatch({
            type: USER_LOGIN._SUCCESS,
            payload: data,
        })

        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (err) {
        dispatch({
            type: USER_LOGIN._FAIL,
            payload:
                err.response && err.response.data.message
                    ? err.response.data.message
                    : err.message,
        })
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({ type: USER_LOGOUT })
}

export const register = (name, email, password) => async (dispatch) => {
    try {
        dispatch({ type: USER_REGISTER._REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }

        const { data } = await axios.post(
            `/api/users`,
            { name, email, password },
            config
        )

        dispatch({
            type: USER_REGISTER._SUCCESS,
            payload: data,
        })

        dispatch({
            type: USER_LOGIN._SUCCESS,
            payload: data,
        })

        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (err) {
        dispatch({
            type: USER_REGISTER._FAIL,
            payload:
                err.response && err.response.data.message
                    ? err.response.data.message
                    : err.message,
        })
    }
}
