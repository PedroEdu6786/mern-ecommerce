import axios from 'axios'
import { USER_LOGIN } from '../constants/userConstants'

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
