import * as ActionTypes from "./actionTypes";
import { selectCurriculumCatalogState, selectCurriculumLookup } from "../reducer";

const initialState = {
    error: null,
    loading: false,
    curriculumKeys: null,
    filter: {
        group: null
    },
    page: {
        page: 0,
        page_count: 0,
        page_size: 0,
        total_results: 0,
    },
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.LOAD_CURRICULUMS_START: {
      return {
        ...state,
        error: null,
        loading: true,
      };
    }
    case ActionTypes.LOAD_CURRICULUMS_FAILURE: {
      return {
        ...state,
        error: action.error,
        filter: action.filter,
        curriculumKeys: null,
        loading: false,
      };
    }
    case ActionTypes.LOAD_CURRICULUMS_SUCCESS: {
      const curriculums = action.data.data;
      const envelope = action.data;
      return {
        ...state,
        filter: action.filter,
        loading: false,
        error: null,
        page: {
          page: envelope.page,
          page_count: envelope.page_count,
          page_size: envelope.page_size,
          total_results: envelope.total_count,
        },
        curriculumKeys: curriculums.map((p: any) => p.key),
      };
    }
    default:
      return state;
  }
};

export default reducer;

export const selectCurriculums = (state: any) => {
  const myCurriculumsState = selectCurriculumCatalogState(state);
  const curriculumKeys = myCurriculumsState.curriculumKeys;
  if (!curriculumKeys) return null;

  const lookup = selectCurriculumLookup(state);
  return curriculumKeys.map((key: string) => lookup[key]);
};

export const selectCurriculumsError = (state: any) => {
  return selectCurriculumCatalogState(state).error;
};

export const selectCurriculumsLoading = (state: any) => {
  return selectCurriculumCatalogState(state).loading;
};

export const selectCurriculumsPage = (state: any) => {
  return selectCurriculumCatalogState(state).page;
};

export const selectCurriculumCatalogFilter = (state: any) => {
    return selectCurriculumCatalogState(state).filter;
}
