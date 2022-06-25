import React from "react";
import {
	Table,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";
import { makeStyles } from "@material-ui/core/styles";
import CurriculumTableBody from "./CurriculumTableBody";
import { Typography } from "@material-ui/core";
import MenuBookIcon from "@material-ui/icons/MenuBook";

const useStyles = makeStyles((theme) => ({
	nameCell: {
		overflowWrap: "anywhere",
		minWidth: 300,
	},
	nameLink: {
		textDecoration: "unset",
		"&:hover": {
			textDecoration: "underline",
		},
	},
	tableIcon: {
		verticalAlign: "text-bottom",
		fontSize: "16px",
		marginRight: ".2em",
	},
	backdrop: {
		zIndex: theme.zIndex.drawer + 1,
		color: "#fff",
	},
	fullWidth: {
		flexBasis: 0,
		flexGrow: 1,
		flexShrink: 1,
		overflowX: "auto",
		overflowY: "auto",
		minWidth: 0,
	},
}));

export default function CurriculumTable({
	loading,
	fetchCurriculums,
	filter,
	curriculums,
	onChangePage,
	onChangeRowsPerPage,
	count,
	rowsPerPage,
	page,
	onChangeCurriculum,
	selectedCurriculumId,
}: any) {
	const classes = useStyles();

	let tableTitle = `${curriculums.length} Open Curriculums`;

	return (
		<div className={classes.fullWidth}>
			<TableContainer component={Paper}>
				<Table size="small">
					<TableHead>
						<TableRow>
							<TableCell colSpan={11}>
								<Typography variant="h6">{tableTitle}</Typography>
							</TableCell>
						</TableRow>

						<TableRow>
							<TableCell align="left">
								<MenuBookIcon className={classes.tableIcon} />
								Curriculum
							</TableCell>
							<TableCell align="left">Owner</TableCell>
							<TableCell align="left">Created At</TableCell>
							<TableCell align="left">Updated At</TableCell>
						</TableRow>
					</TableHead>

					<CurriculumTableBody
						filter={filter}
						curriculums={curriculums}
						loading={loading}
						fetchCurriculums={fetchCurriculums}
						selectedCurriculumId={selectedCurriculumId}
						onChangeCurriculum={onChangeCurriculum}
					/>
				</Table>
			</TableContainer>

			<TablePagination
				rowsPerPageOptions={[5, 10, 25, 50]}
				component="div"
				count={count}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={(event, newPage) => onChangePage(newPage)}
				onRowsPerPageChange={(event) => onChangeRowsPerPage(event.target.value)}
			/>
		</div>
	);
}
