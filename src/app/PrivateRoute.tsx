import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { selectUserState } from "../features/settings/reducer";

function PrivateRoute({ userState, children, ...props }: any) {
	return (
		<Route
			{...props}
			render={({ location }: any) =>
				userState.authorized ? (
					children
				) : (
					<Redirect
						to={{
							pathname: "/permissions",
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
}

const mapStateToProps = (state: any) => ({
	userState: selectUserState(state),
});

export default connect(mapStateToProps)(PrivateRoute);
