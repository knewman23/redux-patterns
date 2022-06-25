import React from "react";
import PageHeader from "../components/CurriculumPageHeader";

function Content() {
	const nullVariable = null;

	return (
		<>
			<h1>Error throwing page</h1>
			<div>{nullVariable}</div>
		</>
	);
}

export default function UnhandledErrorTestPage() {
	return (
		<PageHeader title="Page that throws unhandled errors">
			<Content />
		</PageHeader>
	);
}
