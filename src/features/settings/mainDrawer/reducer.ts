import * as ActionTypes from './actionTypes'
import { selectMainDrawer } from '../reducer'

const initialState = {
    userCollapsed: null,
    sizeCollapsed: false
}

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ActionTypes.COLLAPSE_BY_USER:
            return {
                ...state,
                userCollapsed: true
            }
        case ActionTypes.EXPAND_BY_USER:
            return {
                ...state,
                userCollapsed: false
            }
        case ActionTypes.COLLAPSE_BY_SIZE:
            return {
                ...state,
                userCollapsed: null,
                sizeCollapsed: true
            }
        case ActionTypes.EXPAND_BY_SIZE:
            return {
                ...state,
                userCollapsed: null,
                sizeCollapsed: false
            }
        default:
            return state
    }
}

export default reducer

export const collapsedByUser = (state: any) => {
    const s = selectMainDrawer(state);
    return s.userCollapsed;
}

export const collapsedBySize = (state: any) => {
    const s = selectMainDrawer(state);
    return s.sizeCollapsed;
}