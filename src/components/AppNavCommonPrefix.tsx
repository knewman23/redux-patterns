import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import { homeUrl } from "../app/Routes";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		flexDirection: "row",
		marginRight: theme.spacing(2),
	},
	noWrap: {
		display: "flex",
		flexWrap: "nowrap",
		flexGrow: 0,
		flexShrink: 0,
	},
	pageLink: {
		// color: theme.palette.secondary.contrastText,
		// backgroundColor: theme.palette.secondary.main,
		textDecoration: "none",
	},
	linkButton: {
		//color: "inherit",
		margin: theme.spacing(0),
		paddingLeft: 0,
		paddingTop: 0,
		paddingBottom: 0,
		paddingRight: theme.spacing(1),
		fontSize: "28px",
	},
	currentPage: {
		//textDecoration: "underline"
	},
	icon: {
		color: theme.palette.secondary.main,
		fontSize: "40px",
	},
}));

export default function AppNavCommonPrefix() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className={classes.noWrap}>
				<NavLink
					to={homeUrl()}
					exact
					className={classes.pageLink}
					activeClassName={classes.currentPage}
				>
					<Button
						disableElevation
						variant="contained"
						color="primary"
						className={classes.linkButton}
					>
						<MenuIcon className={classes.icon} />
					</Button>
				</NavLink>
			</div>
		</div>
	);
}
