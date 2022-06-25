// @ts-nocheck
import React from "react";

export default class ErrorBoundary extends React.Component {
	constructor(props: {}) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error) {
		console.log(error);
		// Update state so the next render will show the fallback UI.
		return { hasError: true };
	}

	componentDidCatch(error: string, errorInfo: any) {
		try {
			console.log(error);
		} catch {
			console.error("Failed to log error to new relic: " + error);
		}
	}

	render() {
		if (!this.state.hasError) return this.props.children;

		return (
			<div style={{ padding: "8px" }}>
				<h1>Something went wrong.</h1>
				<p>
					<a href="/">Home</a>
				</p>
			</div>
		);
	}
}
