import { combineReducers } from "redux";
import { selectCurriculumsState } from "../../app/rootReducer";
import lookup from "./lookup/reducer";
import fetchCurriculum from "./fetchCurriculum/reducer";
import curriculumCatalog from "./curriculumCatalog/reducer"
import myCurriculums from "./myCurriculums/reducer"

export default combineReducers({
    lookup,
    fetchCurriculum,
    curriculumCatalog,
    myCurriculums
});

export const selectCurriculumLookup = (state: any) => selectCurriculumsState(state).lookup;

export const selectFetchCurriculumState = (state: any) => selectCurriculumsState(state).fetchCurriculum;

export const selectCurriculumCatalogState = (state: any) => selectCurriculumsState(state).curriculumCatalog;

export const selectMyCurriculumsState = (state: any) => selectCurriculumsState(state).myCurriculums;

