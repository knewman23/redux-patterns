import React from "react";
import CurriculumTable from "./CurriculumTable";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	root: {
		display: "flex",
	},
	emptyState: {
		minWidth: 700,
	},
});

export default function MyCurriculumsView({ ...props }) {
	const classes = useStyles();
	const empty = !props.curriculums;
	return (
		<div className={classes.root}>
			{empty ? null : (
				<CurriculumTable
					{...props}
					onChangePage={props.onPageChange || props.onChangePage}
				/>
			)}
		</div>
	);
}
