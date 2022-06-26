import React from "react";
import { connect } from "react-redux";
import * as SelectState from "../myCurriculums/reducer";
import CurriculumDetailsView from "./curriculumDetailsView";

function CurriculumDetailsContainer({ curriculum, maxCurriculumsLimitReached, maxCurriculumsLimitWarning }: any) {
	return (
		<CurriculumDetailsView
			curriculum={curriculum}
			maxCurriculumsLimitReached={maxCurriculumsLimitReached}
			maxCurriculumsLimitWarning={maxCurriculumsLimitWarning}
		/>
	);
}

const mapStateToProps = (state: any, ownProps: any) => ({
	maxCurriculumsLimitReached: SelectState.selectMyCurriculumsLimit(state),
	maxCurriculumsLimitWarning: SelectState.selectMyCurriculumsLimitWarning(state),
});

const actionCreators = {};

export default connect(
	mapStateToProps,
	actionCreators
)(CurriculumDetailsContainer);
