import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
	},
	emptySpace: {
		flexGrow: 1,
	},
}));

export default function AppNavBarFixedPosition({
	prefix,
	title,
	navLinks,
}: any) {
	const classes = useStyles();

	return (
		<AppBar position="fixed" className={classes.appBar}>
			<Toolbar>
				{prefix}
				<Typography variant="h6" noWrap>
					{title}
				</Typography>
				<div className={classes.emptySpace} />
				{navLinks}
			</Toolbar>
		</AppBar>
	);
}
