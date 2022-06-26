import * as ActionTypes from "./actionTypes";
import { selectFetchCurriculumState } from "../reducer";

const initialState = {};

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ActionTypes.LOAD_CURRICULUM_START: {
            const curriculumKey = action.curriculumKey;
            return {
                ...state,
                [curriculumKey]: {
                    loading: true,
                    error: null,
                },
            };
        }
        case ActionTypes.LOAD_CURRICULUM_FAILURE: {
            const curriculumKey = action.curriculumKey;
            return {
                ...state,
                [curriculumKey]: {
                    loading: false,
                    error: action.error,
                },
            };
        }
        case ActionTypes.LOAD_CURRICULUM_SUCCESS: {
            const curriculumKey = action.curriculum.data.key;
            // Note actually setting the curriculum in the lookup is done in a different reducer
            return {
                ...state,
                [curriculumKey]: {
                    loading: false,
                    error: null,
                },
            };
        }
        default:
            return state;
    }
};

export default reducer;

export const selectIsCurriculumLoading = (state: any, curriculumKey: string) => {
    const fetchState = selectFetchCurriculumState(state);
    return fetchState[curriculumKey]?.loading === true;
};

export const selectCurriculumFetchError = (state: any, curriculumKey: string) => {
    const fetchState = selectFetchCurriculumState(state);
    return fetchState[curriculumKey]?.error;
};
