import * as api from "../../../api/mockApi";
import * as actionTypes from "./actionTypes";


const loadCurriculumsStart = (filter: any) => ({
	type: actionTypes.LOAD_CURRICULUMS_START,
	filter,
});

const loadCurriculumsSuccess = (data: any, filter: any) => ({
	type: actionTypes.LOAD_CURRICULUMS_SUCCESS,
	data,
	filter,
});

const loadCurriculumsFailure = (error: any, filter: any) => ({
	type: actionTypes.LOAD_CURRICULUMS_FAILURE,
	error,
	filter,
});


function fetchCurriculumsCall(filter: any) {
	return (dispatch: any) => {
		dispatch(loadCurriculumsStart(filter));

		return api
			.searchCurriculums({ ...filter })
			.then((data: any) => {
				dispatch(loadCurriculumsSuccess(data, filter));
			})
			.catch((error: any) => {
				dispatch(loadCurriculumsFailure(error, filter));
			});
	};
}

// Redux thunk
export function fetchCurriculums(filter: any) {
	return (dispatch: any) => {
		Promise.all([dispatch(fetchCurriculumsCall(filter))]).then(() => {
		
		});
	};
}
