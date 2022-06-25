import React from "react";
import { connect } from "react-redux";
import { withRouter, NavLink } from "react-router-dom";
import {
	List,
	ListItem,
	ListItemText,
	ListSubheader,
	Tooltip,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as route from "../app/Routes";
// import { selectCurriculum } from "../features/curriculums/lookup/reducer";
import MenuBookIcon from "@material-ui/icons/MenuBook";

const useStyles = makeStyles((theme) => ({
	activeListItem: {
		backgroundColor: "rgba(0, 0, 0, 0.08)",
		color: theme.palette.secondary.main,
	},
}));

function RenderIfExpanded({ collapsed, children }: any) {
	if (collapsed) return null;
	else return children;
}

function ResponsiveItem({ collapsed, Icon, text, subheader }: any) {
	if (collapsed) {
		const tooltip = subheader + " " + text;
		return (
			<Tooltip title={tooltip}>
				<span>
					<Icon />
				</span>
			</Tooltip>
		);
	}

	return (
		<>
			<Icon />
			<ListItemText primary={text} />
		</>
	);
}

function CurriculumNavDrawer({ match, collapsed }: any) {
	const classes = useStyles();
	const curriculumKey = match.params[route.curriculumKey];

	return (
		<List>
			<RenderIfExpanded collapsed={collapsed}>
				<ListSubheader component="div">Curriculum</ListSubheader>
			</RenderIfExpanded>
			<ListItem
				button
				component={NavLink}
				to={route.curriculumsUrl()}
				exact
				activeClassName={classes.activeListItem}
			>
				<ResponsiveItem
					collapsed={collapsed}
					Icon={MenuBookIcon}
					subheader="Curriculum"
					text="Curriculum"
				/>
			</ListItem>
		</List>
	);
}

const mapStateToProps = (state: any, ownProps: any) => ({
	// curriculum: selectCurriculum(state, ownProps.match.params.curriculumKey),
});

export default withRouter(connect(mapStateToProps)(CurriculumNavDrawer));
