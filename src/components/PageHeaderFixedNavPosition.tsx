import React from "react";
import { Container, CssBaseline } from "@material-ui/core";
import AppNavBar from "./AppNavBarFixedPosition";
import Toolbar from "@material-ui/core/Toolbar";

export default function PageHeader({
	title,
	children,
	containerSize,
	navLinks,
	prefix,
}: any) {
	const maxWidth = containerSize ? containerSize : "xl";
	return (
		<div>
			<CssBaseline />
			<AppNavBar prefix={prefix} title={title} navLinks={navLinks} />
			<Toolbar /> {/* Add correct vertical space since navbar is fixed */}
			<div style={{ marginBottom: "5px" }}></div>
			<Container maxWidth={maxWidth}>{children}</Container>
		</div>
	);
}
