import * as actionTypes from "./actionTypes";

export const setCurriculumInLookup = (product: any) => ({
  type: actionTypes.SET_CURRICULUM_IN_LOOKUP,
  product,
});
