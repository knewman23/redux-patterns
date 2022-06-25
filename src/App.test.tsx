/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import reducer from "./app/rootReducer";
import App from "./app/App";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
	reducer,
});

test("renders learn react link", () => {
	const { getByText } = render(
		<Provider store={store}>
			<App />
		</Provider>
	);

	expect(getByText(/learn/i)).toBeInTheDocument();
});
