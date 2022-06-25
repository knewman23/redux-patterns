import * as api from '../../../api/mockApi'
import * as actionTypes from './actionTypes'


const loadUserStart = () => ({
    type: actionTypes.LOAD_USER_START
})

const loadUserSuccess = (data: object) => ({
    type: actionTypes.LOAD_USER_SUCCESS,
    data
})

const loadUserFailure = () => ({
    type: actionTypes.LOAD_USER_FAILURE,
})


// Redux thunk
export function fetchUser() {
    return (dispatch: any) => {
        dispatch(loadUserStart());
        return api.getUser()
            .then((data: object) => { dispatch(loadUserSuccess(data)); })
            .catch((e: any) => { dispatch(loadUserFailure()); });
    }
}