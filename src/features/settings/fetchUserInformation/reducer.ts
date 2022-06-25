import * as ActionTypes from "./actionTypes";
import { selectUserState } from "../reducer";

const initialState = {
    id: null,
    roles: [],
    loading: false,
    authorized: true,
    error: false
};

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ActionTypes.LOAD_USER_START: {
            return {
                ...state,
                loading: true
            };
        }
        case ActionTypes.LOAD_USER_FAILURE: {
            return {
                ...state,
                loading: false,
                authorized: true,
                id: 'Unknown',
                roles: [],
                error: true
            };
        }
        case ActionTypes.LOAD_USER_SUCCESS: {
            return {
                ...state,
                loading: false,
                id: action.data.id,
                roles: action.data.roles,
                authorized: action.data.authorized
            };
        }
        default:
            return state;
    }
};

export default reducer;

export const selectUserId = (state: any) => {
    const s = selectUserState(state);
    return s.id;
}
