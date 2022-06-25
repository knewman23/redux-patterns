import * as ActionTypes from './actionTypes'
import { selectMyCurriculumsState, selectCurriculumLookup } from '../reducer'

const initialState = {
    filter: {
        'finished': false,
        'owner': 'me'
    },
    error: null,
    loading: false,
    curriculumIds: [],
    maxCurriculumsLimitReached: false,
    maxCurriculumsWarning: false,
    page: {
        page: 0,
        page_count: 0,
        page_size: 0,
        total_results: null,
        total_results_open: null,
    }
}

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ActionTypes.DELETE_CURRICULUM_START: {
            return {
                ...state,
                error: null,
                loading: true
            }
        }
        case ActionTypes.LOAD_CURRICULUMS_START: {
            return {
                ...state,
                filter: action.filter,
                error: null,
                loading: true
            }
        }
        case ActionTypes.DELETE_CURRICULUM_FAILURE:
        case ActionTypes.LOAD_CURRICULUMS_FAILURE: {
            return {
                ...state,
                filter: action.filter,
                error: action.error,
                curriculumIds: null,
                loading: false
            }
        }
        case ActionTypes.LOAD_CURRICULUMS_SUCCESS: {
            const curriculums = action.data.data;
            return {
                ...state,
                loading: false,
                error: null,
                curriculumIds: curriculums.map((s: { id: any }) => s.id)
            }
        }
        case ActionTypes.DELETE_CURRICULUM_SUCCESS: {
            const curriculumId = action.curriculumId;
            const filteredCurriculumIds = state.curriculumIds.filter((i: any) => i !== curriculumId);
            return {
                ...state,
                loading: false,
                error: null,
                curriculumIds: filteredCurriculumIds
            }
        }
        default:
            return state
    }
}

export default reducer

export const selectMyCurriculums = (state: any) => {
    const myCurriculumsState = selectMyCurriculumsState(state);
    const curriculumIds = myCurriculumsState.curriculumIds;
    if (!curriculumIds)
        return null;

    const lookup = selectCurriculumLookup(state);
    return curriculumIds.map((id: string | number) => lookup[id]);
}

export const selectMyCurriculumsError = (state: any) => {
    return selectMyCurriculumsState(state).error;
}

export const selectMyCurriculumsLoading = (state: any) => {
    return selectMyCurriculumsState(state).loading;
}

export const selectMyCurriculumsFilter = (state: any) => {
    return selectMyCurriculumsState(state).filter;
}

export const selectMyCurriculumsPage = (state: any) => {
    return selectMyCurriculumsState(state).page;
}