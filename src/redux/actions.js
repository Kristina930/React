import * as types from './actionTypes';



export const registerStart = () => ({
    type: types.LOADING_REGISTER 
})

export const registerError = (e) => ({
    type: types.ERROR_REGISTER,
    payload: e.toString()
})

export const registerSuccess = (user) => ({
    type: types.SUCCESS_REGISTER,
    payload: user

})

export const loginStart = () => ({
    type: types.LOADING_LOGIN,
})

export const loginSuccess = (user) => ({
    type: types.SUCCESS_LOGIN,
    payload: user

})

export const loginError = (e) => ({
    type: types.ERROR_LOGIN,
    payload: e.toString()

})

export const logoutStart = () => ({
    type: types.START_LOGOUT
})

export const logoutError = (e) => ({
    type: types.ERROR_LOGOUT,
    payload: e.toString()
})

export const logoutSuccess = () => ({
    type: types.SUCCESS_LOGOUT,
})