import React from "react";
import PageHeader from "../components/CurriculumPageHeader";
import MyCurriculumsContainer from "../features/curriculums/myCurriculums/MyCurriculumsContainer";

export default function MyCurriculums() {
	return (
		<PageHeader title="My Curriculums">
			<MyCurriculumsContainer />
		</PageHeader>
	);
}
