import React from "react";
import { TableBody, TableCell, TableRow, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	nameCell: {
		overflowWrap: "anywhere",
		minWidth: 300,
	},
	selectCell: {
		overflowWrap: "anywhere",
	},
	tableLink: {
		textDecoration: "unset",
		"&:hover": {
			textDecoration: "underline",
		},
	},
	nudgeBorder: {
		borderLeft: "8px solid orange",
		borderRadius: "4px",
	},
}));

function DisplayTableRow({ curriculum }: any) {
	const classes = useStyles();

	return (
		<TableRow>
			<TableCell className={classes.nameCell}>{curriculum.title}</TableCell>
			<TableCell>{curriculum.owner}</TableCell>
			<TableCell>{curriculum.createdAt}</TableCell>{" "}
			<TableCell>{curriculum.updatedAt}</TableCell>
		</TableRow>
	);
}

export default function StudyTableBody({ curriculums }: any) {
	if (!curriculums.length) {
		return (
			<TableBody>
				<TableRow>
					<TableCell></TableCell>
					<TableCell colSpan={11}>
						<Typography>No Curriculums Found</Typography>
					</TableCell>
				</TableRow>
			</TableBody>
		);
	}

	return (
		<TableBody>
			{curriculums.map((curriculum: { id: React.Key | null | undefined }) => (
				<DisplayTableRow curriculum={curriculum} />
			))}
		</TableBody>
	);
}
