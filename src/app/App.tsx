import React from "react";
import { Provider } from "react-redux";
import reducer from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import GlobalComponents from "./GlobalComponents";
import Routes from "./Routes";

const store = configureStore({
	reducer,
});

export default function App() {
	return (
		<Provider store={store}>
			<GlobalComponents />
			<Routes />
		</Provider>
	);
}
