import { combineReducers } from 'redux'
import { selectSettingsState } from '../../app/rootReducer'
import user from './fetchUserInformation/reducer'
import mainDrawer from './mainDrawer/reducer'

export default combineReducers({
    user,
    mainDrawer
})

export const selectMainDrawer = (state: any) => selectSettingsState(state).mainDrawer;
export const selectUserState = (state: any) => selectSettingsState(state).user;

