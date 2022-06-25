import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "./actionCreators";

function FetchUserContainer({ fetchUser }: any) {
	useEffect(() => {
		fetchUser();
		// eslint-disable-next-line
	}, []);

	return null;
}

const mapStateToProps = () => ({});

const actionCreators = {
	fetchUser,
};

export default connect(mapStateToProps, actionCreators)(FetchUserContainer);
