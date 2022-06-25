import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(1, 2),
	},
}));

export default function MainHeading({ children }: any) {
	const classes = useStyles();

	return <div className={classes.root}>{children}</div>;
}
