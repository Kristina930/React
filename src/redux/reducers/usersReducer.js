import { auth } from '../../service/firebase';
import { logoutStart, logoutError, logoutSuccess, loginError, loginSuccess, loginStart, registerError, registerStart, registerSuccess } from '../actions';
import * as types from '../actionTypes';


const initialState = {
    currentUsers: null,
    loading: false,
    error: null
}

export const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.LOADING_REGISTER:
            return {
                ...state,
                loading: true
            }
        case types.ERROR_REGISTER:
            return {
                ...state,
                error: action.payload
            }
        case types.SUCCESS_REGISTER:
            return {
                ...state,
                currentUsers: action.payload
            }
        case types.LOADING_LOGIN:
            return {
                ...state,
                loading: true
            }
        case types.ERROR_LOGIN:
            return {
                ...state,
                error: action.payload
            }
        case types.SUCCESS_LOGIN:
            return {
                ...state,
                currentUsers: action.payload
            }

        default: 
        return state
    }
}

export const registerInitiate = (email, password, displayName) => {
    return(dispatch) => {
        dispatch(registerStart())
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(({user}) => {
                user.updateProfile({
                    displayName
                })
                dispatch(registerSuccess(user))
            })
            .catch((e) => dispatch(registerError(e.toString())))
    }

}

export const loginInitiate = (email, password) =>{
    return(dispatch) => {
        dispatch(loginStart())
        auth
            .signInWithEmailAndPassword(email, password)
            .then(({user}) => {
                dispatch(loginSuccess(user))
                
            })
            .catch((e) => dispatch(loginError(e)))
    }

}

export const logoutInitiate = () => {
    return(dispatch) => {
        dispatch(logoutStart())
        auth
            .signOut()
            .then(() => {
                dispatch(logoutSuccess())
                
            })
            .catch((e) => dispatch(logoutError(e)))
    }
}