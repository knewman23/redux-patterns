import * as api from "../../../api/mockApi";
import * as actionTypes from "./actionTypes";
import { selectIsCurriculumLoading } from "./reducer";

const loadCurriculumStart = (curriculumKey: string) => ({
  type: actionTypes.LOAD_CURRICULUM_START,
  curriculumKey,
});

const loadCurriculumFailure = (error: any, curriculumKey: string) => ({
  type: actionTypes.LOAD_CURRICULUM_FAILURE,
  error,
  curriculumKey,
});

const loadCurriculumSuccess = (curriculum: object) => ({
  type: actionTypes.LOAD_CURRICULUM_SUCCESS,
  curriculum,
});

// Redux thunk
export function fetchCurriculum(curriculumKey: string) {
  return (dispatch: any, getState: any) => {
    if (selectIsCurriculumLoading(getState(), curriculumKey)) return;

    dispatch(loadCurriculumStart(curriculumKey));
    return api
      .getCurriculum(curriculumKey)
      .then((curriculum: object) => {
        dispatch(loadCurriculumSuccess(curriculum));
      })
      .catch((error: any) => {
        dispatch(loadCurriculumFailure(error, curriculumKey));
      });
  };
}
