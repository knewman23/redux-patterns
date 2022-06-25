import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MyCurriculums from "../pages/MyCurriculumsPage";
import NotFound from "../pages/NotFoundPage";
import UnhandledErrorTestPage from "../pages/UnhandledErrorTestPage";
import PrivateRoute from "./PrivateRoute";

export const homeUrl = () => "/curriculums"; // '/home'
export const curriculumDetailsUrl = (curriculumKey: string) =>
	`/curriculum/${curriculumKey}`;
export const curriculumsUrl = () => "/curriculums";

// react-router syntax for route params
const requiredParam = (value: string) => ":" + value;
const optionalParam = (value: string) => requiredParam(value) + "?";

// param keywords
export const curriculumKey = "curriculumKey";

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/unhandled_error">
					<UnhandledErrorTestPage />
				</Route>
				<Route exact path={["/", curriculumsUrl()]}>
					<MyCurriculums />
				</Route>
				<Route>
					<NotFound />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}
