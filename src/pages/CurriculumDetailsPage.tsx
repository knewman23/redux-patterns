import React from "react";
import { withRouter } from "react-router-dom";
import PageHeader from "../components/CurriculumPageHeader";
import CurriculumDetailsContainer from "../features/curriculums/curriculumDetails/curriculumDetailsContainer";
import FetchCurriculumIfNeededContainer from "../features/curriculums/fetchCurriculum/FetchCurriculumIfNeededContainer";

function CurriculumDetails({ match }: any) {
	const curriculumKey = match.params.curriculumKey;

	return (
		<PageHeader title="Curriculum Details">
			<FetchCurriculumIfNeededContainer
				curriculumKey={curriculumKey}
				addCurriculumToChild={true}
			>
				<CurriculumDetailsContainer />
			</FetchCurriculumIfNeededContainer>
		</PageHeader>
	);
}

export default withRouter(CurriculumDetails);
