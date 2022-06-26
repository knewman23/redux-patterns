import * as ActionTypes from "./actionTypes";
import * as FetchCurriculumActionTypes from "../fetchCurriculum/actionTypes";
import * as CurriculumCatalogActionTypes from "../curriculumCatalog/actionTypes";
import { selectCurriculumLookup } from "../reducer";

const initialState = {};

const reducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case FetchCurriculumActionTypes.LOAD_CURRICULUM_SUCCESS: {
            const curriculum = action.curriculum.data;
            const lastUpdateDate = state[curriculum.key]?.update_date;
            if (lastUpdateDate && lastUpdateDate === curriculum.update_date)
                return state; // Don't update state (and re-render components) if it is the same curriculum

            return {
                ...state,
                [curriculum.key]: curriculum,
            };
        }
        case ActionTypes.SET_CURRICULUM_IN_LOOKUP: {
            // Always update state since some components modify part of the curriculum (not the update_date) and call this action
            const curriculum = action.curriculum;
            return {
                ...state,
                [curriculum.key]: curriculum,
            };
        }

        case CurriculumCatalogActionTypes.LOAD_CURRICULUMS_SUCCESS: {
            const lookup = {} as any;
            const curriculums = action.data.data;
            for (let i = 0; i < curriculums.length; i++) {
              const curriculum = curriculums[i];
              lookup[curriculum.key] = curriculum;
            }
            return lookup;
        }

        default:
            return state;
    }
};



export default reducer;

export const selectCurriculum = (state: any, curriculumKey: string) => {
    const lookup = selectCurriculumLookup(state);
    return lookup[parseInt(curriculumKey)];
};
