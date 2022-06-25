import React, { useEffect } from "react";
import { connect } from "react-redux";
import PageWithNavDrawer from "../../../components/PageWithCollapseDrawer";
import { collapsedByUser, collapsedBySize } from "./reducer";
import {
	collapseByUser,
	expandByUser,
	collapseBySize,
	expandBySize,
} from "./actionCreators";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

function StudyDrawerContainer({
	sizeCollapsed,
	userCollapsed,
	collapseBySize,
	expandBySize,
	...props
}: any) {
	const theme = useTheme();
	const mediumDown = useMediaQuery(theme.breakpoints.down("md"));

	useEffect(() => {
		// auto expand / collapse the drawer on smaller screens
		if (mediumDown !== sizeCollapsed) {
			mediumDown ? collapseBySize() : expandBySize();
		}
	}, [mediumDown, sizeCollapsed, collapseBySize, expandBySize]);

	// If the user has interacted with the drawer use that preference
	const collapsed = userCollapsed == null ? sizeCollapsed : userCollapsed;
	return <PageWithNavDrawer collapsed={collapsed} {...props} />;
}

const mapStateToProps = (state: any, ownProps: any) => ({
	userCollapsed: collapsedByUser(state),
	sizeCollapsed: collapsedBySize(state),
});

const actionCreators = {
	collapseByUser,
	expandByUser,
	collapseBySize,
	expandBySize,
};

export default connect(mapStateToProps, actionCreators)(StudyDrawerContainer);
