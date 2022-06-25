import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { fetchCurriculums } from "./actionCreators";
import MyCurriculumsView from "./MyCurriculumsView";
import MainHeading from "./MainHeading";
import * as SelectState from "./reducer";
import CircularProgress from "@material-ui/core/CircularProgress";
import Backdrop from "@material-ui/core/Backdrop";
import Typography from "@material-ui/core/Typography";
import MenuBookIcon from "@material-ui/icons/MenuBook";

const useStyles = makeStyles((theme) => ({
	loading: {
		display: "flex",
		justifyContent: "center",
	},
	backdrop: {
		zIndex: theme.zIndex.drawer + 1,
		color: "#fff",
	},
}));

function CurriculumsSummary() {
	const curriculums = (
		<span style={{ display: "inline-flex", alignItems: "center" }}>
			<MenuBookIcon />
			Curriculums
		</span>
	);

	return (
		<>
			<Typography
				gutterBottom
				style={{ whiteSpace: "pre", display: "flex" }}
				variant="subtitle1"
			>
				{curriculums}
			</Typography>
		</>
	);
}

function MyCurriculumsContainer({
	fetchCurriculums,
	filter,
	error,
	loading,
	curriculums,
	page,
}: any) {
	const classes = useStyles();

	useEffect(() => {
		fetchCurriculums({
			...filter,
			owner: "me",
			page_size: 10,
			page: 0,
		});
	}, []);

	const onChangePage = (newPage: any, pageSize: any) => {
		fetchCurriculums({
			...filter,
			page: newPage,
		});
	};

	const onChangeRowsPerPage = (pageSize: string) => {
		fetchCurriculums({
			...filter,
			page: 0,
			page_size: parseInt(pageSize, 10),
		});
	};

	return (
		<span>
			<Backdrop className={classes.backdrop} open={loading}>
				<CircularProgress color="inherit" />
			</Backdrop>

			<MainHeading>
				<CurriculumsSummary />
				<MyCurriculumsView
					loading={loading}
					fetchCurriculums={fetchCurriculums}
					filter={filter}
					curriculums={curriculums}
					onChangePage={onChangePage}
					onChangeRowsPerPage={onChangeRowsPerPage}
					count={page.total_results}
					rowsPerPage={page.page_size}
					page={page.page}
				/>
			</MainHeading>
		</span>
	);
}

const mapStateToProps = (state: any) => ({
	filter: SelectState.selectMyCurriculumsFilter(state),
	error: SelectState.selectMyCurriculumsError(state),
	loading: SelectState.selectMyCurriculumsLoading(state),
	curriculums: SelectState.selectMyCurriculums(state),
	page: SelectState.selectMyCurriculumsPage(state),
});

const actionCreators = {
	fetchCurriculums,
};

export default connect(mapStateToProps, actionCreators)(MyCurriculumsContainer);
