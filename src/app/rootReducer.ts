import { combineReducers } from "redux";
import curriculums from "../features/curriculums/reducer";
import settings from "../features/settings/reducer";

export default combineReducers({
    curriculums,
    settings
})

export const selectCurriculumsState = (state:any) => state.curriculums
export const selectSettingsState = (state: any) => state.settings;
