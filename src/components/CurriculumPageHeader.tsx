import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PageHeader from "../features/settings/mainDrawer/MainDrawerContainer";
import CurriculumNavDrawer from "./CurriculumNavDrawer";
import AppNavCommonPrefix from "./AppNavCommonPrefix";
import SiteHeader from "./SiteHeader";

const useStyles = makeStyles((theme) => ({
	content: {
		padding: theme.spacing(1),
	},
}));

export default function CurriculumPageHeader({
	title,
	subtitle,
	children,
}: any) {
	const classes = useStyles();

	return (
		<div>
			<SiteHeader title={title} subtitle={subtitle} />
			<PageHeader
				drawerWidth={135}
				title={title}
				DrawerContent={CurriculumNavDrawer}
				prefix={<AppNavCommonPrefix />}
			>
				<div className={classes.content}>{children}</div>
			</PageHeader>
		</div>
	);
}
